/**
 * Shared state for the study tracker.
 *
 * One blob per person at state/<id>.json, so the two people never write the same
 * key and there is nothing to merge. A read lists them and stitches them together.
 *
 * With no BLOB_READ_WRITE_TOKEN the endpoint reports storage:"none" and the page
 * falls back to this-device-only storage rather than breaking.
 */

import { guard, statePrefix } from "./_auth.js";
import { cleanScores } from "./_scores.js";

function noStore(res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");
}

export default async function handler(req, res) {
  noStore(res);

  const refuse = guard(req);
  if (refuse) return res.status(refuse.status).json(refuse.body);

  const PREFIX = statePrefix();

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return res.status(200).json({
      ok: true,
      storage: "none",
      people: [],
      scores: {},
      note: "No blob store connected yet — the page is running on this device only."
    });
  }

  let blob;
  try {
    blob = await import("@vercel/blob");
  } catch (e) {
    return res.status(200).json({ ok: true, storage: "none", people: [], scores: {} });
  }

  try {
    if (req.method === "GET") {
      const { blobs } = await blob.list({ prefix: PREFIX });
      const people = [];
      const scores = {};
      await Promise.all(
        blobs.map(async (b) => {
          const r = await fetch(b.url, { cache: "no-store" });
          if (!r.ok) return;
          const doc = await r.json();
          if (!doc || !doc.id || !doc.name) return;
          people.push({ id: doc.id, name: doc.name, joinedAt: doc.joinedAt || null });
          Object.keys(doc.scores || {}).forEach((k) => {
            if (k.indexOf(doc.id + "|") === 0) scores[k] = doc.scores[k];
          });
        })
      );
      people.sort((a, b2) => String(a.joinedAt || "").localeCompare(String(b2.joinedAt || "")));
      return res.status(200).json({ ok: true, storage: "blob", people, scores });
    }

    if (req.method === "POST") {
      const body =
        typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
      const id = String(body.id || "").trim();
      const name = String(body.name || "").trim();

      if (!/^[a-z0-9][a-z0-9-]{0,39}$/.test(id)) {
        return res.status(400).json({ ok: false, error: "bad id" });
      }
      if (!name || name.length > 24) {
        return res.status(400).json({ ok: false, error: "bad name" });
      }

      // Two places only. An id already present may always write itself.
      const { blobs } = await blob.list({ prefix: PREFIX });
      const existing = blobs.map((b) => b.pathname.slice(PREFIX.length).replace(/\.json$/, ""));
      if (existing.indexOf(id) === -1 && existing.length >= 2) {
        return res.status(409).json({ ok: false, error: "both places are taken" });
      }

      const scores = cleanScores(body.scores, id);

      const doc = {
        id,
        name,
        joinedAt: typeof body.joinedAt === "string" ? body.joinedAt : new Date().toISOString(),
        scores,
        savedAt: new Date().toISOString()
      };

      await blob.put(PREFIX + id + ".json", JSON.stringify(doc), {
        access: "public",
        contentType: "application/json",
        addRandomSuffix: false,
        allowOverwrite: true,
        cacheControlMaxAge: 0
      });

      return res.status(200).json({ ok: true, storage: "blob", savedAt: doc.savedAt });
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String((e && e.message) || e) });
  }
}
