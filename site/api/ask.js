/**
 * The study buddy.
 *
 * Answers a question with the week's own material as context, so the reply is
 * about THIS course rather than the subject in general. The key never leaves the
 * server; the browser only ever sees the answer text.
 *
 * Needs ANTHROPIC_API_KEY. Without it the endpoint says so plainly and the page
 * falls back to concept lists and video links, which need no key at all.
 */

import { guard } from "./_auth.js";

const REPOS = (process.env.STUDY_REPO || "devpanther/miva-study,seprintour/miva-study")
  .split(",").map((s) => s.trim()).filter(Boolean);
const BRANCH = process.env.STUDY_BRANCH || "main";
const MODEL = process.env.ASK_MODEL || "claude-sonnet-5";
const MAX_TOKENS = 900;

/* Per-instance spend guard. Lambdas are short-lived so this is a speed bump, not
   a budget, but it stops a stuck loop running up a bill. */
const HITS = new Map();
const WINDOW = 60 * 60 * 1000;
const MAX_PER_HOUR = 40;

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
    const url = "https://raw.githubusercontent.com/" + repo + "/" + BRANCH +
                "/packs/week-" + pad + "/" + course + "-Summary.md";
    try {
      const r = await fetch(url);
      if (r.ok) return (await r.text()).slice(0, 12000);
    } catch (e) { /* try the next owner */ }
  }
  return "";
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  const refuse = guard(req);
  if (refuse) return res.status(refuse.status).json(refuse.body);

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(503).json({
      ok: false,
      error: "no_key",
      reason: "No ANTHROPIC_API_KEY is set on this project, so I can't answer questions yet."
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
    summary ? "THE COURSE SUMMARY FOR THIS WEEK (his lecturer's own material):\n" + summary : ""
  ].filter(Boolean).join("\n\n");

  const system = [
    "You are a study partner for Gift, a 100-level student at Miva Open University in Nigeria, studying eight courses around full-time freelance work.",
    "He has just watched a lecture and is being tested on it. Answer the question he asks.",
    "",
    "Rules:",
    "1. Teach from HIS course material below when it covers the point. Use his lecturer's notation and worked examples, not a textbook's. Where his material is silent, say so briefly, then teach the standard treatment.",
    "2. Be concise. He is tired and it is late. Lead with the answer, then the reasoning. Short paragraphs, no preamble, no restating his question.",
    "3. If he got something wrong, name the specific misunderstanding rather than re-explaining the whole topic. The useful thing is what he confused it with.",
    "4. Maths in plain Unicode (∫ √ ≤ × ⁻¹ ₀ π θ Δ). Never LaTeX, never dollar signs.",
    "5. He teaches his study partner on Sunday whatever he scored lowest on. If this is that topic, end with one line on what he needs to be able to SAY OUT LOUD to have understood it.",
    "6. Never invent a video URL or paper title. If a video would help, name the channel and what to search for, nothing more.",
    "7. If his course material contains an error, say so plainly and teach the correct version.",
    context ? "\n---\n" + context : ""
  ].join("\n");

  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: system,
        messages: [{ role: "user", content: question }]
      })
    });

    if (!r.ok) {
      const detail = await r.text();
      return res.status(502).json({
        ok: false,
        error: "upstream",
        status: r.status,
        reason: r.status === 401 ? "The API key was rejected."
              : r.status === 404 ? "Model \"" + MODEL + "\" was not found. Set ASK_MODEL to a current model id."
              : detail.slice(0, 300)
      });
    }
    const data = await r.json();
    const answer = (data.content || [])
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    return res.status(200).json({
      ok: true,
      answer: answer || "No answer came back — try rephrasing.",
      usage: data.usage || null,
      model: MODEL
    });
  } catch (e) {
    return res.status(502).json({ ok: false, error: "network", reason: String((e && e.message) || e) });
  }
}
