/**
 * Marking the written answers.
 *
 * A twelve-question check is roughly two thirds multiple choice and one third written.
 * The multiple choice marks itself. The written third used to be marked by whoever had
 * just written it, with an "I got this" button — which is the one part of the score
 * nobody can trust, because the person deciding whether the answer was good enough is
 * the person who thought it was good enough when they wrote it.
 *
 * This grades them instead. The bar it applies is deliberately narrow:
 *
 *   - credit the substance in whatever words it arrives in, and
 *   - require every point the QUESTION asked for, and nothing else.
 *
 * Both halves matter. Grade on wording and it fails answers that were right. Grade on
 * the model answer as a whole and it fails answers that were right too, because the
 * stored rationales teach well beyond what was asked. So the model is made to write
 * down what the question requires BEFORE it sees how the student did, then check each
 * requirement one at a time. The requirements come back with the verdict, so a wrong
 * mark can be seen to be wrong rather than argued about.
 *
 * The same call also explains the multiple-choice questions that were missed, so one
 * round trip produces the whole debrief.
 *
 * Needs GEMINI_API_KEY. Without it the page falls back to marking by hand.
 */

import { guard } from "./_auth.js";

const MODELS = (process.env.GRADE_MODEL
  ? [process.env.GRADE_MODEL]
  : ["gemini-3.1-flash-lite", "gemini-2.5-flash-lite", "gemini-3.5-flash-lite", "gemini-2.5-flash"]);

const API = "https://generativelanguage.googleapis.com/v1beta";
const MAX_TOKENS = 4200;

/* Marking is per-check, not per-question, so the ceiling can be low. */
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

const SCHEMA = {
  type: "OBJECT",
  properties: {
    marks: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          i: { type: "INTEGER" },
          required: { type: "ARRAY", items: { type: "STRING" } },
          met: { type: "ARRAY", items: { type: "BOOLEAN" } },
          correct: { type: "BOOLEAN" },
          confident: { type: "BOOLEAN" },
          verdict: { type: "STRING" },
          teach: { type: "STRING" }
        },
        required: ["i", "required", "met", "correct", "confident", "verdict", "teach"]
      }
    },
    debrief: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          i: { type: "INTEGER" },
          teach: { type: "STRING" }
        },
        required: ["i", "teach"]
      }
    }
  },
  required: ["marks"]
};

/* Answers that need no model: nothing written, or nothing offered. */
const EMPTY = /^\s*(|-+|\.+|n\/?a|none|nil|idk|i don'?t know|no idea|dunno|skip|skipped|\?+|x+)\s*$/i;

const SYSTEM = [
  "You mark short written answers for a 100-level university student, and you explain multiple-choice questions they got wrong. You are marking, not teaching, until the verdict is decided.",
  "",
  "You are given, for each written question: the question, the marking notes (the lecturer's own explanation of what a good answer contains), and what the student wrote.",
  "",
  "MARK EACH ONE IN THIS ORDER. Do not skip a step and do not reorder them.",
  "",
  "STEP 1 — \"required\": list what THIS QUESTION asks for, as 1 to 4 short atomic points.",
  "  Read the QUESTION, not the marking notes, to decide what is required. The notes routinely teach beyond the question — extra context, a related result, a warning about a different case. None of that is required unless the question asked for it.",
  "  If the question asks for two things (\"name X and explain why Y\"), that is two points. If it asks for one thing, that is one point. Never invent a fifth.",
  "  Each point must be a claim that can be present or absent, not a quality judgement. \"States that the denominator cannot be zero\" is a point. \"Shows good understanding\" is not.",
  "",
  "STEP 2 — \"met\": for each required point, in the same order, true if the student's answer contains it and false if it does not.",
  "",
  "  CREDIT the point when the substance is there:",
  "  - different words, informal phrasing, their own analogy, or the idea explained the long way round",
  "  - different but equivalent notation (f'(x) or dy/dx; 3.6 nm or 3.6e-9 m; \"top over bottom\" for a fraction)",
  "  - spelling, grammar, punctuation and capitalisation errors, texting shorthand, missing articles",
  "  - a correct answer with no working shown, when the question did not ask for working",
  "  - a correct answer that also contains something irrelevant but harmless",
  "  - the right idea stated with less precision than the notes use, as long as nothing in it is false",
  "",
  "  DO NOT CREDIT the point when:",
  "  - the answer only restates the question, or names the topic without saying anything about it",
  "  - it is a true statement that does not address this point",
  "  - the point is there but with a wrong value, wrong sign, wrong direction, wrong units, or the two halves swapped",
  "  - the answer asserts both the right thing and something that contradicts it — a self-contradicting answer has not demonstrated the point",
  "  - it is so vague that it would fit several different questions equally well",
  "",
  "STEP 3 — \"correct\": true only if every entry in \"met\" is true. Nothing else feeds this. Do not soften it because the answer was close, and do not harden it because the writing was poor.",
  "",
  "STEP 4 — \"confident\": false if this one is genuinely borderline — the answer is ambiguous, or hinges on a reading of their wording that could go either way. True otherwise. Be honest here; it is used to flag the mark for review, not to grade you.",
  "",
  "STEP 5 — \"verdict\": one sentence, addressed to them as \"you\", saying what decided it. If correct, name the point they got that carries the answer. If not, name the specific thing that is missing or wrong — never \"your answer was incomplete\".",
  "",
  "STEP 6 — \"teach\": two to four sentences teaching the point they missed, in their course's own terms. If they got it right, use this to add the one thing that would make the answer stronger next time, or say what the common wrong version of this answer is. Never praise. Never open with \"Great\" or \"Correct!\" — the verdict already says that.",
  "",
  "MULTIPLE CHOICE. Where a \"missed\" list is given, write one \"debrief\" entry per item: two to four sentences on why the option they chose is wrong and what the correct one turns on. Name the actual difference between the two options. Do not restate the question.",
  "",
  "STYLE for \"verdict\" and \"teach\": plain sentences, no markdown, no headings, no lists, no bold. Maths in plain Unicode (∫ √ ≤ × ⁻¹ ₀ π θ Δ), never LaTeX and never dollar signs. Address them as \"you\". These are read on a phone at 23:00, so be short.",
  "",
  "Return one \"marks\" entry per written question, with \"i\" copied exactly from the input. Never omit one."
].join("\n");

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  const refuse = guard(req);
  if (refuse) return res.status(refuse.status).json(refuse.body);

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  }

  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return res.status(503).json({
      ok: false, error: "no_key",
      reason: "No GEMINI_API_KEY is set on this project, so the written answers can't be marked for you."
    });
  }
  if (overLimit(clientKey(req))) {
    return res.status(429).json({ ok: false, error: "rate", reason: "That's a lot of marking in one hour. Try again shortly." });
  }

  let body;
  try { body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {}; }
  catch (e) { body = {}; }

  const course = /^[A-Z]{3}_\d{3}$/.test(String(body.course || "")) ? body.course : "";
  const week = Math.max(1, Math.min(12, parseInt(body.week, 10) || 1));

  const items = (Array.isArray(body.items) ? body.items : []).slice(0, 8).map((x) => ({
    i: parseInt(x.i, 10) || 0,
    q: String(x.q || "").slice(0, 1600),
    notes: String(x.notes || "").slice(0, 2600),
    answer: String(x.answer || "").slice(0, 2600)
  })).filter((x) => x.q);

  const missed = (Array.isArray(body.missed) ? body.missed : []).slice(0, 10).map((x) => ({
    i: parseInt(x.i, 10) || 0,
    q: String(x.q || "").slice(0, 1200),
    chose: String(x.chose || "").slice(0, 400),
    right: String(x.right || "").slice(0, 400),
    notes: String(x.notes || "").slice(0, 1200)
  })).filter((x) => x.q);

  if (!items.length && !missed.length) {
    return res.status(400).json({ ok: false, error: "nothing to mark" });
  }

  /* An empty or refused answer is not a judgement call, and sending it to a model only
     invites a generous one. Settle those here and keep them out of the request. */
  const decided = [];
  const toMark = [];
  items.forEach((it) => {
    if (EMPTY.test(it.answer)) {
      decided.push({
        i: it.i, required: [], met: [], correct: false, confident: true,
        verdict: it.answer.trim() ? "You didn't attempt this one." : "You left this one blank.",
        teach: ""
      });
    } else toMark.push(it);
  });

  if (!toMark.length && !missed.length) {
    return res.status(200).json({ ok: true, marks: decided, debrief: [], model: "none" });
  }

  const prompt = [
    course ? "COURSE: " + course.replace("_", " ") + ", week " + week : "",
    toMark.length ? "WRITTEN QUESTIONS TO MARK\n" + toMark.map((it) =>
      [
        "### question index " + it.i,
        "QUESTION: " + it.q,
        "MARKING NOTES (the lecturer's explanation — teaches beyond what is required, so use the QUESTION to decide what is required):\n" + it.notes,
        "THE STUDENT WROTE:\n\"\"\"\n" + it.answer + "\n\"\"\""
      ].join("\n")
    ).join("\n\n") : "",
    missed.length ? "MULTIPLE-CHOICE QUESTIONS THEY GOT WRONG — write one debrief entry each\n" + missed.map((m) =>
      [
        "### question index " + m.i,
        "QUESTION: " + m.q,
        "THEY CHOSE: " + m.chose,
        "CORRECT: " + m.right,
        m.notes ? "NOTES: " + m.notes : ""
      ].filter(Boolean).join("\n")
    ).join("\n\n") : ""
  ].filter(Boolean).join("\n\n");

  const payload = {
    system_instruction: { parts: [{ text: SYSTEM }] },
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    generationConfig: {
      maxOutputTokens: MAX_TOKENS,
      /* Marking should not vary between two runs on the same answer. */
      temperature: 0,
      topP: 1,
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
    } catch (e) { lastError = "network: " + String((e && e.message) || e); continue; }

    if (r.status === 404) { lastError = model + " not found"; continue; }
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
    try { parsed = JSON.parse(text); } catch (e) { /* fall through */ }
    if (!parsed || !Array.isArray(parsed.marks)) {
      const finish = (((data.candidates || [])[0] || {}).finishReason) || "";
      lastError = model + (finish === "MAX_TOKENS" ? " ran out of tokens mid-answer" : " returned nothing usable" + (finish ? " (" + finish + ")" : ""));
      continue;
    }

    /* Re-derive "correct" from the checklist rather than trusting the boolean beside
       it. A model that lists a point as unmet and then marks the answer correct has
       contradicted itself, and the checklist is the part that was reasoned about. */
    const byIndex = new Map();
    parsed.marks.forEach((m) => {
      const req2 = (Array.isArray(m.required) ? m.required : []).map((x) => String(x).slice(0, 240));
      const met = (Array.isArray(m.met) ? m.met : []).map(Boolean);
      const aligned = req2.length > 0 && met.length === req2.length;
      const fromList = aligned ? met.every(Boolean) : !!m.correct;
      byIndex.set(parseInt(m.i, 10), {
        i: parseInt(m.i, 10),
        required: req2,
        met: met,
        correct: fromList,
        /* A checklist that does not line up with its own requirements is not a mark to
           act on silently. */
        confident: !!m.confident && aligned && fromList === !!m.correct,
        verdict: String(m.verdict || "").slice(0, 400).trim(),
        teach: String(m.teach || "").slice(0, 900).trim()
      });
    });

    /* Anything the model dropped comes back unmarked rather than silently wrong. */
    const marks = decided.slice();
    toMark.forEach((it) => {
      const m = byIndex.get(it.i);
      if (m) marks.push(m);
      else marks.push({
        i: it.i, required: [], met: [], correct: false, confident: false,
        verdict: "", teach: "", unmarked: true
      });
    });
    marks.sort((a, b) => a.i - b.i);

    const debrief = (Array.isArray(parsed.debrief) ? parsed.debrief : [])
      .map((d) => ({ i: parseInt(d.i, 10), teach: String(d.teach || "").slice(0, 900).trim() }))
      .filter((d) => d.teach);

    return res.status(200).json({
      ok: true, marks, debrief, model, usage: data.usageMetadata || null
    });
  }

  return res.status(502).json({
    ok: false, error: "upstream",
    reason: "No Gemini model marked this. Last: " + lastError,
    tried: MODELS
  });
}
