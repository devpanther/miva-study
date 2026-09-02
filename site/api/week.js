/**
 * Serves one week's question pack, read straight from the study repo.
 *
 * Going through here rather than fetching GitHub from the browser means no CORS
 * surprise, an edge cache in front of it, and — the real point — the site picks up
 * a regenerated week the next time the routine pushes, with no redeploy.
 *
 * REPOS is a fallback list, not a single name, so a repository transfer between
 * accounts cannot take the site down in the gap before a redeploy. Set STUDY_REPO
 * to pin it to one owner once the dust settles.
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
  /* COS_102, CSC_106 — and MIVA_COS_111, which the old three-letter pattern rejected,
     so its summary could never be served at all. */
  const course = /^[A-Z]{3,4}(_[A-Z]{3})?_\d{3}$/.test(String(req.query.course || "")) ? req.query.course : "";

  /* Asking for a summary and not naming a real course is a mistake, and it used to be
     answered with the whole week pack: the request for `doc=summary` was quietly
     dropped, the JSON branch ran, and the page that expected markdown printed a pack.
     A request the server cannot honour now says so. */
  if (req.query.doc === "summary" && !course) {
    res.setHeader("Cache-Control", "no-store");
    return res.status(404).json({ ok: false, error: "no summary for " + String(req.query.course || "(none)") });
  }

  const wantSummary = req.query.doc === "summary" && course;
  const path = wantSummary
    ? "/packs/week-" + pad + "/" + course + "-Summary.md"
    : "/packs/week-" + pad + "/week-" + pad + ".json";
  let lastError = null;

  for (const repo of REPOS) {
    const url = "https://raw.githubusercontent.com/" + repo + "/" + BRANCH + path;
    try {
      const r = await fetch(url);
      if (!r.ok) { lastError = repo + " -> " + r.status; continue; }
      res.setHeader("Cache-Control", "private, max-age=300");
      if (wantSummary) {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        return res.status(200).send(await r.text());
      }
      res.setHeader("Content-Type", "application/json");
      return res.status(200).json(await r.json());
    } catch (e) {
      lastError = repo + " -> " + String((e && e.message) || e);
    }
  }

  res.setHeader("Cache-Control", "no-store");
  return res.status(502).json({
    ok: false,
    error: "week " + n + " not found in the study repo",
    tried: REPOS,
    lastError
  });
}
