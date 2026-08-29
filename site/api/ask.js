/**
 * The study buddy.
 *
 * Answers a question with the week's own material as context, so the reply is about
 * THIS course rather than the subject in general, and returns the YouTube searches
 * worth running — chosen by a model that has just read the material, rather than by
 * gluing a channel name onto a sentence fragment.
 *
 * Runs on Gemini. The key never leaves the server; the browser only sees the answer.
 *
 * Needs GEMINI_API_KEY. Without it the endpoint says so plainly and the page falls
 * back to distilled searches and concept lists, which need no key at all.
 */

import { guard } from "./_auth.js";

const REPOS = (process.env.STUDY_REPO || "devpanther/miva-study,seprintour/miva-study")
  .split(",").map((s) => s.trim()).filter(Boolean);
const BRANCH = process.env.STUDY_BRANCH || "main";

/* Cheapest model that is still good enough to teach calculus at 23:00. If the id is
   wrong or retired the API answers 404, so the rest of the list is tried in turn
   rather than the buddy simply going dark. ASK_MODEL pins one and skips the dance. */
const MODELS = (process.env.ASK_MODEL
  ? [process.env.ASK_MODEL]
  : ["gemini-3.1-flash-lite", "gemini-2.5-flash-lite", "gemini-3.5-flash-lite", "gemini-2.5-flash"]);

const API = "https://generativelanguage.googleapis.com/v1beta";
const MAX_TOKENS = 1100;

/* Per-instance spend guard. Lambdas are short-lived so this is a speed bump, not a
   budget, but it stops a stuck loop running up a bill. */
const HITS = new Map();
const WINDOW = 60 * 60 * 1000;
const MAX_PER_HOUR = 60;

function clientKey(req) {
  const f = req.headers["x-forwarded-for"];
  return String((Array.isArray(f) ? f[0] : f) || "unknown").split(",")[0].trim();
}
function overLimit(k) {
  const now = Date.now();
  const e = HITS.get(k);
  if (!e || now > e.until) { HITS.set(k, { n: 1, until: now + WINDOW }); return false; }
  e.n++;
  if (HITS.size > 500) HITS.clear();
  return e.n > MAX_PER_HOUR;
}

async function courseSummary(week, course) {
  const pad = String(week).padStart(2, "0");
  for (const repo of REPOS) {
    const url = API_RAW(repo, pad, course);
    try {
      const r = await fetch(url);
      if (r.ok) return (await r.text()).slice(0, 14000);
    } catch (e) { /* try the next owner */ }
  }
  return "";
}
function API_RAW(repo, pad, course) {
  return "https://raw.githubusercontent.com/" + repo + "/" + BRANCH +
         "/packs/week-" + pad + "/" + course + "-Summary.md";
}

/* Structured output, so the searches come back as data rather than as prose the page
   would have to guess at. */
const SCHEMA = {
  type: "OBJECT",
  properties: {
    answer: { type: "STRING" },
    searches: { type: "ARRAY", items: { type: "STRING" } }
  },
  required: ["answer", "searches"]
};

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  const refuse = guard(req);
  if (refuse) return res.status(refuse.status).json(refuse.body);

  const key = process.env.GEMINI_API_KEY;

  /* GET /api/ask?probe=1 lists what this key can actually reach. Useful exactly once,
     when a model id turns out to be wrong. */
  if (req.method === "GET") {
    if (!key) return res.status(503).json({ ok: false, error: "no_key" });
    if (String(req.query.probe || "") !== "1") {
      res.setHeader("Allow", "POST");
      return res.status(405).json({ ok: false, error: "method not allowed" });
    }
    try {
      const r = await fetch(API + "/models", { headers: { "x-goog-api-key": key } });
      const d = await r.json();
      return res.status(r.ok ? 200 : 502).json({
        ok: r.ok,
        tries: MODELS,
        models: (d.models || [])
          .filter((m) => (m.supportedGenerationMethods || []).includes("generateContent"))
          .map((m) => m.name.replace(/^models\//, ""))
      });
    } catch (e) {
      return res.status(502).json({ ok: false, error: "network", reason: String(e && e.message || e) });
    }
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  }
  if (!key) {
    return res.status(503).json({
      ok: false,
      error: "no_key",
      reason: "No GEMINI_API_KEY is set on this project, so I can't answer questions yet."
    });
  }
  if (overLimit(clientKey(req))) {
    return res.status(429).json({ ok: false, error: "rate", reason: "That's a lot of questions in one hour. Try again shortly." });
  }

  let body;
  try { body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {}; }
  catch (e) { body = {}; }

  const question = String(body.question || "").slice(0, 1200).trim();
  if (!question) return res.status(400).json({ ok: false, error: "empty question" });

  const course = /^[A-Z]{3}_\d{3}$/.test(String(body.course || "")) ? body.course : "";
  const week = Math.max(1, Math.min(12, parseInt(body.week, 10) || 1));
  const topic = String(body.topic || "").slice(0, 2000);
  const missed = Array.isArray(body.missed) ? body.missed.slice(0, 12).map((x) => String(x).slice(0, 300)) : [];
  const asked = String(body.asked || "").slice(0, 1500);
  const chose = String(body.chose || "").slice(0, 500);
  const right = String(body.right || "").slice(0, 500);

  const summary = course ? await courseSummary(week, course) : "";

  const context = [
    course ? "COURSE: " + course.replace("_", " ") + ", week " + week : "",
    topic ? "WHAT THIS SESSION COVERS:\n" + topic : "",
    missed.length ? "CONCEPTS HE GOT WRONG TONIGHT:\n- " + missed.join("\n- ") : "",
    asked ? "THE QUESTION HE MISSED:\n" + asked + (chose ? "\nHe answered: " + chose : "") + (right ? "\nCorrect: " + right : "") : "",
    summary ? "HIS LECTURER'S OWN MATERIAL FOR THIS WEEK:\n" + summary : ""
  ].filter(Boolean).join("\n\n");

  const system = [
    "You are a study partner for Gift, a 100-level student at Miva Open University in Nigeria, studying eight courses around full-time freelance work.",
    "He has just watched a lecture and is being tested on it. Answer the question he asks.",
    "",
    "Return JSON with two fields.",
    "",
    "\"answer\": the reply itself.",
    "1. Teach from HIS course material below when it covers the point. Use his lecturer's notation and worked examples, not a textbook's. Where his material is silent, say so briefly, then teach the standard treatment.",
    "2. Be concise. He is tired and it is late. Lead with the answer, then the reasoning. Short paragraphs, no preamble, no restating his question.",
    "3. If he got something wrong, name the specific misunderstanding rather than re-explaining the whole topic. The useful thing is what he confused it with.",
    "4. Maths in plain Unicode (∫ √ ≤ × ⁻¹ ₀ π θ Δ). Never LaTeX, never dollar signs.",
    "5. He teaches his study partner on Sunday whatever he scored lowest on. If this is that topic, end with one line on what he needs to be able to SAY OUT LOUD to have understood it.",
    "6. If his course material contains an error, say so plainly and teach the correct version.",
    "",
    "\"searches\": two or three YouTube search queries, best first.",
    "Each must be a phrase a person would actually type: the specific technique or idea, four to eight words, no punctuation, no channel name, no course code, no words like 'explained' or 'tutorial' unless they genuinely narrow it.",
    "Make them specific enough to land on the right video. \"integration by parts worked example\" is good; \"integration\" and \"MTH 102 week 7\" are both useless.",
    "If a particular teacher genuinely is the best source for this exact topic, you may name them in ONE of the queries. Never invent a video title or URL.",
    context ? "\n---\n" + context : ""
  ].join("\n");

  const payload = {
    system_instruction: { parts: [{ text: system }] },
    contents: [{ role: "user", parts: [{ text: question }] }],
    generationConfig: {
      maxOutputTokens: MAX_TOKENS,
      temperature: 0.3,
      responseMimeType: "application/json",
      responseSchema: SCHEMA
    }
  };

  let lastError = null;
  for (const model of MODELS) {
    let r;
    try {
      r = await fetch(API + "/models/" + encodeURIComponent(model) + ":generateContent", {
        method: "POST",
        headers: { "content-type": "application/json", "x-goog-api-key": key },
        body: JSON.stringify(payload)
      });
    } catch (e) {
      lastError = "network: " + String((e && e.message) || e);
      continue;
    }

    if (r.status === 404) { lastError = model + " not found"; continue; }   /* try the next id */
    if (r.status === 401 || r.status === 403) {
      return res.status(502).json({ ok: false, error: "auth", reason: "Gemini rejected the API key." });
    }
    if (r.status === 429) {
      return res.status(429).json({ ok: false, error: "rate", reason: "Gemini is rate-limiting the key. Try again shortly." });
    }
    if (!r.ok) { lastError = model + " -> " + r.status + " " + (await r.text()).slice(0, 200); continue; }

    const data = await r.json();
    const text = ((((data.candidates || [])[0] || {}).content || {}).parts || [])
      .map((p) => p.text).filter(Boolean).join("");

    let parsed = null;
    try { parsed = JSON.parse(text); } catch (e) { /* fall through to raw text */ }

    const answer = String((parsed && parsed.answer) || text || "").trim();
    if (!answer) { lastError = model + " returned nothing"; continue; }

    const searches = (parsed && Array.isArray(parsed.searches) ? parsed.searches : [])
      .map((s) => String(s).replace(/\s+/g, " ").trim())
      .filter((s) => s.length > 2 && s.length < 120)
      .slice(0, 3);

    return res.status(200).json({
      ok: true,
      answer,
      searches,
      model,
      usage: data.usageMetadata || null
    });
  }

  return res.status(502).json({
    ok: false,
    error: "upstream",
    reason: "No Gemini model answered. Last: " + lastError,
    tried: MODELS,
    hint: "GET /api/ask?probe=1 lists the models this key can reach."
  });
}
