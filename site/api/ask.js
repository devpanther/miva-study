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
const MAX_TOKENS = 2600;

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
  /* Two people share this site. Baking one name into the prompt meant the other was
     addressed as the first, so the name comes from whoever is signed in. */
  const who = String(body.who || "").replace(/[^\p{L}\p{N} '-]/gu, "").slice(0, 24).trim();

  const summary = course ? await courseSummary(week, course) : "";

  const context = [
    course ? "COURSE: " + course.replace("_", " ") + ", week " + week : "",
    topic ? "WHAT THIS SESSION COVERS:\n" + topic : "",
    missed.length ? "CONCEPTS THEY GOT WRONG TONIGHT:\n- " + missed.join("\n- ") : "",
    asked ? "THE QUESTION THEY MISSED:\n" + asked + (chose ? "\nThey answered: " + chose : "") + (right ? "\nCorrect: " + right : "") : "",
    summary ? "THE LECTURER'S OWN MATERIAL FOR THIS WEEK:\n" + summary : ""
  ].filter(Boolean).join("\n\n");

  /* The failure this replaces: asked a plain question, the model opened with "Yes,
     your approach is correct", immediately contradicted itself with "you are likely
     confusing...", and closed on a mandated say-it-out-loud line that restated the
     definition it had already given. Three causes, all in the prompt: the missed-answer
     guidance fired on every question, the Sunday line was unconditional, and nothing
     forbade opening with validation. */
  const mode = missed.length && asked ? "missed" : "free";

  const system = [
    "You are a study partner for " + (who || "a student") + ", a 100-level student at Miva Open University in Nigeria studying eight courses around full-time work. It is late and they are tired.",
    "Address them directly as \"you\". Never refer to them in the third person, and never assume their gender.",
    "",
    "THE USER TURN IS THEIR QUESTION. Answer exactly that. Everything under CONTEXT is background about tonight's session: use it to ground the answer in their course, never as a substitute for what they asked. If the question has nothing to do with the context, ignore the context entirely.",
    "",
    "\"answer\" — how to write it:",
    "1. Open with the answer. Never open with agreement, praise, or a verdict on their approach: no \"Yes, your approach is correct\", no \"Great question\", no \"You are likely confusing...\". You cannot see their working, so you cannot assess it.",
    "2. Ground it in THEIR material. Use the lecturer's wording, notation and worked examples wherever the material below covers the point. Where it does not, say so in a few words and then teach the standard treatment.",
    "3. Be short. Four to eight sentences for a concept. Longer only when working through an example, and then the extra length is the working, not the prose.",
    "4. No filler. No \"Remember,\" no \"ask yourself\", no restating the question, no summarising what you just said, no encouragement.",
    "5. Maths in plain Unicode (∫ √ ≤ × ⁻¹ ₀ π θ Δ). Never LaTeX, never dollar signs.",
    "6. Never invent a video, a page number, a quotation, or a worked example and attribute it to the lecturer.",
    "7. If the course material is wrong, say so plainly and teach the correct version.",
    mode === "missed"
      ? "8. They got the question below wrong and are asking about it. Name the specific thing that separates the right answer from the one they chose. One line at the end on what they would need to be able to say out loud to have understood it."
      : "8. Do not mention their score, what they got wrong, or anything they did not ask about.",
    "",
    "\"searches\" — two or three YouTube queries, best first.",
    "Each must read like something a person would type: the specific technique or idea, four to eight words, no punctuation, no channel name, no course code, no \"explained\" or \"tutorial\" unless it genuinely narrows the search.",
    "\"integration by parts worked example\" is good. \"integration\" and \"MTH 102 week 7\" are both useless.",
    "You may name a teacher in ONE query if that teacher is genuinely the best source for this exact topic. Never invent a video title or URL.",
    context ? "\n--- CONTEXT ---\n" + context : ""
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
    const finish = (((data.candidates || [])[0] || {}).finishReason) || "";
    if (!answer) {
      lastError = model + (finish === "MAX_TOKENS"
        ? " spent its whole token budget before answering"
        : " returned nothing" + (finish ? " (" + finish + ")" : ""));
      continue;
    }

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
