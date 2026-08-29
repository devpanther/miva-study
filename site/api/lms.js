/**
 * What the LMS actually holds for a given week.
 *
 * Built by crawling the Moodle course pages once and asking Vimeo how long each video
 * runs, so the tracker can say "2 videos, 50 minutes" before you commit an evening to
 * it, and link straight to that week's section rather than making you hunt for it.
 *
 * Read from the study repo like the packs are, so re-crawling the LMS means pushing a
 * file, not redeploying the site.
 */

import { guard } from "./_auth.js";

const REPOS = (process.env.STUDY_REPO || "devpanther/miva-study,seprintour/miva-study")
  .split(",").map((s) => s.trim()).filter(Boolean);
const BRANCH = process.env.STUDY_BRANCH || "main";

export default async function handler(req, res) {
  const refuse = guard(req);
  if (refuse) { res.setHeader("Cache-Control", "no-store"); return res.status(refuse.status).json(refuse.body); }

  let lastError = null;
  for (const repo of REPOS) {
    const url = "https://raw.githubusercontent.com/" + repo + "/" + BRANCH + "/lms/index.json";
    try {
      const r = await fetch(url);
      if (!r.ok) { lastError = repo + " -> " + r.status; continue; }
      res.setHeader("Cache-Control", "private, max-age=3600");
      res.setHeader("Content-Type", "application/json");
      return res.status(200).json(await r.json());
    } catch (e) {
      lastError = repo + " -> " + String((e && e.message) || e);
    }
  }

  /* The tracker works without this — it just stops showing runtimes. */
  res.setHeader("Cache-Control", "no-store");
  return res.status(502).json({ ok: false, error: "no LMS index in the study repo", tried: REPOS, lastError });
}
