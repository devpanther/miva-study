/**
 * Serves one week of the drill bank, read straight from the study repo.
 *
 * The drill bank is a separate body of questions from the weekly checks: fifteen
 * multiple-choice items per course per week, written to be sat repeatedly on a phone.
 * It is deliberately NOT the check. Sitting the same fifteen questions every morning
 * would teach the fifteen questions, so the bank is large (1260 items) and the client
 * picks from the weeks you have actually studied.
 *
 * Same fallback list and same live-from-GitHub read as /api/week: regenerating the bank
 * is a push, not a redeploy.
 */

import { guard } from "./_auth.js";

const REPOS = (process.env.STUDY_REPO || "devpanther/miva-study,seprintour/miva-study")
  .split(",").map((s) => s.trim()).filter(Boolean);
const BRANCH = process.env.STUDY_BRANCH || "main";

export default async function handler(req, res) {
  const refuse = guard(req);
  if (refuse) { res.setHeader("Cache-Control", "no-store"); return res.status(refuse.status).json(refuse.body); }

  const n = parseInt(req.query.n, 10);
  if (!Number.isInteger(n) || n < 1 || n > 12) {
    res.setHeader("Cache-Control", "no-store");
    return res.status(400).json({ ok: false, error: "week must be 1 to 12" });
  }

  const pad = String(n).padStart(2, "0");
  const path = "/drills/week-" + pad + ".json";
  let lastError = null;

  for (const repo of REPOS) {
    const url = "https://raw.githubusercontent.com/" + repo + "/" + BRANCH + path;
    try {
      const r = await fetch(url);
      if (!r.ok) { lastError = repo + " -> " + r.status; continue; }
      /* The bank does not change between pushes, so it may sit in the edge cache far
         longer than a week pack. A morning drill should not cost a GitHub round trip. */
      res.setHeader("Cache-Control", "private, max-age=3600");
      res.setHeader("Content-Type", "application/json");
      return res.status(200).json(await r.json());
    } catch (e) {
      lastError = repo + " -> " + String((e && e.message) || e);
    }
  }

  res.setHeader("Cache-Control", "no-store");
  return res.status(502).json({
    ok: false,
    error: "drill week " + n + " not found in the study repo",
    tried: REPOS,
    lastError
  });
}
