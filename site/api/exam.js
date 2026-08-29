/**
 * Exam-prep material, read live from the study repo like the week packs.
 *
 *   /api/exam                     -> the course index
 *   /api/exam?course=MTH_102      -> the 100-question paper with answers
 *   /api/exam?course=MTH_102&doc=guide  -> the study guide, as markdown
 */

import { guard } from "./_auth.js";

const REPO = "seprintour/miva-study";
const BRANCH = "main";
const DIR = "exam-prep";
const COURSE = /^[A-Z]{3}_\d{3}$/;

function raw(path) {
  return "https://raw.githubusercontent.com/" + REPO + "/" + BRANCH + "/" + DIR + "/" + path;
}

export default async function handler(req, res) {
  const refuse = guard(req);
  if (refuse) { res.setHeader("Cache-Control", "no-store"); return res.status(refuse.status).json(refuse.body); }

  const course = req.query.course ? String(req.query.course) : "";
  const doc = req.query.doc === "guide" ? "guide" : "paper";

  if (course && !COURSE.test(course)) {
    res.setHeader("Cache-Control", "no-store");
    return res.status(400).json({ ok: false, error: "bad course code" });
  }

  const path = !course ? "index.json" : (doc === "guide" ? course + "-guide.md" : course + ".json");

  try {
    const r = await fetch(raw(path));
    if (!r.ok) {
      res.setHeader("Cache-Control", "no-store");
      return res.status(404).json({
        ok: false,
        error: "not published",
        reason: "exam-prep/" + path + " is not in the study repo yet"
      });
    }
    const text = await r.text();
    res.setHeader("Cache-Control", "private, max-age=600");
    res.setHeader("Content-Type", doc === "guide" ? "text/plain; charset=utf-8" : "application/json");
    return res.status(200).send(text);
  } catch (e) {
    res.setHeader("Cache-Control", "no-store");
    return res.status(502).json({ ok: false, error: String((e && e.message) || e) });
  }
}
