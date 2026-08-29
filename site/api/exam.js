/**
 * Exam-prep material, read live from the study repo like the week packs.
 *
 *   /api/exam                           -> the course index
 *   /api/exam?course=MTH_102            -> the 100-question paper with answers
 *   /api/exam?course=MTH_102&doc=guide  -> the study guide, as markdown
 *
 * REPOS is a fallback list so a repository transfer between accounts cannot take
 * the site down before a redeploy. Set STUDY_REPO to pin it to one owner.
 */

import { guard } from "./_auth.js";

const REPOS = (process.env.STUDY_REPO || "devpanther/miva-study,seprintour/miva-study")
  .split(",").map((s) => s.trim()).filter(Boolean);
const BRANCH = process.env.STUDY_BRANCH || "main";
const DIR = "exam-prep";
const COURSE = /^[A-Z]{3}_\d{3}$/;

export default async function handler(req, res) {
  const refuse = guard(req);
  if (refuse) { res.setHeader("Cache-Control", "no-store"); return res.status(refuse.status).json(refuse.body); }

  const course = req.query.course ? String(req.query.course) : "";
  const doc = req.query.doc === "guide" ? "guide" : "paper";

  if (course && !COURSE.test(course)) {
    res.setHeader("Cache-Control", "no-store");
    return res.status(400).json({ ok: false, error: "bad course code" });
  }

  const file = !course ? "index.json" : (doc === "guide" ? course + "-guide.md" : course + ".json");
  let lastError = null;

  for (const repo of REPOS) {
    const url = "https://raw.githubusercontent.com/" + repo + "/" + BRANCH + "/" + DIR + "/" + file;
    try {
      const r = await fetch(url);
      if (!r.ok) { lastError = repo + " -> " + r.status; continue; }
      const text = await r.text();
      res.setHeader("Cache-Control", "private, max-age=600");
      res.setHeader("Content-Type", doc === "guide" ? "text/plain; charset=utf-8" : "application/json");
      return res.status(200).send(text);
    } catch (e) {
      lastError = repo + " -> " + String((e && e.message) || e);
    }
  }

  res.setHeader("Cache-Control", "no-store");
  return res.status(404).json({
    ok: false,
    error: "not published",
    reason: DIR + "/" + file + " is not in the study repo yet",
    tried: REPOS,
    lastError
  });
}
