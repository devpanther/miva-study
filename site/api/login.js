import {
  checkPassword, mintToken, tokenValid, readCookie,
  cookieHeader, clearCookieHeader, COOKIE
} from "./_auth.js";

/* Per-instance throttle. Lambdas are short-lived so this is a speed bump, not a
   wall — the real cost to an attacker is scrypt, which is deliberately slow. */
const HITS = new Map();
const WINDOW = 10 * 60 * 1000;
const MAX = 8;

function clientKey(req) {
  const fwd = req.headers["x-forwarded-for"];
  return String((Array.isArray(fwd) ? fwd[0] : fwd) || "unknown").split(",")[0].trim();
}
function throttled(k) {
  const now = Date.now();
  const e = HITS.get(k);
  if (!e || now > e.until) return false;
  return e.n >= MAX;
}
function note(k, ok) {
  const now = Date.now();
  const e = HITS.get(k);
  if (ok) { HITS.delete(k); return; }
  if (!e || now > e.until) HITS.set(k, { n: 1, until: now + WINDOW });
  else e.n++;
  if (HITS.size > 500) HITS.clear();
}
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  const secret = process.env.SESSION_SECRET;
  const hash = process.env.APP_PASSWORD_HASH;
  const configured = !!(secret && hash);

  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      configured,
      unlocked: configured && tokenValid(readCookie(req, COOKIE), secret)
    });
  }

  if (req.method === "DELETE") {
    res.setHeader("Set-Cookie", clearCookieHeader());
    return res.status(200).json({ ok: true, unlocked: false });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST, DELETE");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  }

  if (!configured) {
    return res.status(503).json({
      ok: false,
      error: "setup",
      reason: "No password is configured for this site yet."
    });
  }

  const k = clientKey(req);
  if (throttled(k)) {
    await wait(700);
    return res.status(429).json({ ok: false, error: "too many tries", retryInMinutes: 10 });
  }

  let body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  } catch (e) {
    body = {};
  }
  const password = typeof body.password === "string" ? body.password : "";

  const good = password.length > 0 && password.length <= 512 && checkPassword(password, hash);
  note(k, good);

  if (!good) {
    await wait(350);
    return res.status(401).json({ ok: false, error: "wrong password" });
  }

  res.setHeader("Set-Cookie", cookieHeader(mintToken(secret)));
  return res.status(200).json({ ok: true, unlocked: true });
}
