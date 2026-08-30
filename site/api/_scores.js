/**
 * What may be written into a person's blob.
 *
 * Everything the app stores per person lives in one flat map keyed by
 * "<id>|<something>", and this is the gate it has to pass to be persisted. It exists
 * because the store is writable by the browser: without it, a malformed or hostile
 * POST could put anything of any size under someone's name.
 *
 * It is also where a bug lived for a while. The gate used to accept exactly one shape —
 * a numeric score — and silently drop everything else. Scores synced; runway ticks and
 * celebration flags did not, so ticking something on a laptop never showed up on a
 * phone. Silently, because a filter that returns early looks identical to a store that
 * simply had nothing in it.
 *
 * So every shape the app writes is named here explicitly, and anything unrecognised is
 * still dropped — but there is now one list to add to when a new kind of thing is
 * stored, rather than a filter that quietly disagrees with the client.
 *
 * The dev server loads this same module, so a shape that survives locally is a shape
 * that survives in production.
 */

const str = (v, n) => (typeof v === "string" ? v.slice(0, n) : "");
const num = (v, lo, hi) => Math.max(lo, Math.min(hi, Math.round(Number(v) || 0)));

export function cleanScores(raw, id) {
  const out = {};
  if (!raw || typeof raw !== "object") return out;

  const keys = Object.keys(raw);
  /* A ceiling on the whole document: twelve weeks of two people is a few hundred keys,
     so anything approaching this is a mistake or an attack. */
  for (let i = 0; i < keys.length && i < 4000; i++) {
    const k = keys[i];
    if (k.indexOf(id + "|") !== 0) continue;      /* you may only write your own */
    if (k.length > 120) continue;
    const v = raw[k];
    if (!v || typeof v !== "object") continue;

    const rest = k.slice(id.length + 1);

    /* A session's result: "w3|Thu" or "w3|Thu|f". */
    if (/^w\d{1,2}\|[A-Za-z]{3}(\|f)?$/.test(rest)) {
      if (typeof v.score !== "number" || typeof v.max !== "number") continue;
      const rec = {
        score: num(v.score, 0, 999),
        max: num(v.max, 1, 999),
        wrong: Array.isArray(v.wrong) ? v.wrong.slice(0, 40).map((x) => String(x).slice(0, 300)) : [],
        at: str(v.at, 40) || new Date().toISOString()
      };
      /* Sittings after the first. The cold score above never moves; these do. */
      if (v.tries !== undefined) rec.tries = num(v.tries, 1, 999);
      if (v.best !== undefined) rec.best = num(v.best, 0, 999);
      if (v.overrides !== undefined) rec.overrides = num(v.overrides, 0, 999);
      if (v.lastAt !== undefined) rec.lastAt = str(v.lastAt, 40);
      out[k] = rec;
      continue;
    }

    /* A runway task ticked off: "runway|csc106" or "runway|tests:MTH_102". */
    if (/^runway\|[A-Za-z0-9_:-]{1,60}$/.test(rest)) {
      if (!v.done) continue;
      out[k] = { done: true, on: str(v.on, 12) };
      continue;
    }

    /* A course finished for a week, already celebrated: "party|w7|MTH_102". */
    if (/^party\|w\d{1,2}\|[A-Z]{3,4}_\d{3}$/.test(rest)) {
      if (!v.done) continue;
      out[k] = { done: true };
      continue;
    }

    /* Anything else is not a thing this app writes. */
  }
  return out;
}
