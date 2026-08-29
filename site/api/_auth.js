/**
 * Shared password gate.
 *
 * The password is never in this repo and never in the browser bundle. Vercel holds
 * a scrypt hash of it in APP_PASSWORD_HASH; the plaintext only ever exists in the
 * request body for as long as it takes to hash and compare it.
 *
 * A correct password mints a stateless HMAC token, set as an HttpOnly cookie, so
 * JavaScript on the page can never read it and an XSS bug cannot leak the session.
 *
 * Missing configuration fails CLOSED. An unconfigured gate that lets everyone in is
 * worse than a site that is temporarily unreachable.
 */

import crypto from "node:crypto";

export const COOKIE = "miva_s";
const DAYS = 30;
const PURPOSE = "miva.session.v1.";

/* ---------- password ---------- */

/** Verify a plaintext password against "scrypt$N$r$p$saltHex$keyHex". */
export function checkPassword(plain, stored) {
  if (typeof plain !== "string" || !plain || !stored) return false;
  const parts = String(stored).split("$");
  if (parts.length !== 6 || parts[0] !== "scrypt") return false;

  const N = parseInt(parts[1], 10);
  const r = parseInt(parts[2], 10);
  const p = parseInt(parts[3], 10);
  if (!N || !r || !p || N > 1 << 20) return false;

  let salt, want;
  try {
    salt = Buffer.from(parts[4], "hex");
    want = Buffer.from(parts[5], "hex");
  } catch (e) {
    return false;
  }
  if (!salt.length || !want.length) return false;

  let got;
  try {
    got = crypto.scryptSync(plain, salt, want.length, {
      N, r, p, maxmem: 256 * 1024 * 1024
    });
  } catch (e) {
    return false;
  }
  return got.length === want.length && crypto.timingSafeEqual(got, want);
}

/* ---------- session token ---------- */

function sign(exp, secret) {
  return crypto.createHmac("sha256", secret).update(PURPOSE + exp).digest("base64url");
}

export function mintToken(secret) {
  const exp = Date.now() + DAYS * 86400000;
  return exp + "." + sign(exp, secret);
}

export function tokenValid(token, secret) {
  if (!token || !secret) return false;
  const i = String(token).indexOf(".");
  if (i < 1) return false;
  const exp = String(token).slice(0, i);
  const sig = String(token).slice(i + 1);
  if (!/^\d{10,16}$/.test(exp)) return false;
  if (Number(exp) < Date.now()) return false;
  const want = sign(exp, secret);
  const a = Buffer.from(sig);
  const b = Buffer.from(want);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export function cookieHeader(token) {
  return COOKIE + "=" + token +
    "; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=" + DAYS * 86400;
}

export function clearCookieHeader() {
  return COOKIE + "=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0";
}

export function readCookie(req, name) {
  const raw = req.headers.cookie;
  if (!raw) return null;
  const parts = raw.split(";");
  for (let i = 0; i < parts.length; i++) {
    const s = parts[i].trim();
    const eq = s.indexOf("=");
    if (eq > 0 && s.slice(0, eq) === name) return decodeURIComponent(s.slice(eq + 1));
  }
  return null;
}

/* ---------- guard ---------- */

/**
 * Returns null when the caller may proceed, or an object describing the refusal.
 * Every protected endpoint starts with this.
 */
export function guard(req) {
  const secret = process.env.SESSION_SECRET;
  const hash = process.env.APP_PASSWORD_HASH;
  if (!secret || !hash) {
    return { status: 503, body: { ok: false, error: "setup", reason: "This site has no password configured yet." } };
  }
  if (!tokenValid(readCookie(req, COOKIE), secret)) {
    return { status: 401, body: { ok: false, error: "locked" } };
  }
  return null;
}

/**
 * Blob paths are public-read by URL, so the person prefix is derived from the
 * session secret rather than being guessable from the person's name.
 */
export function statePrefix() {
  const secret = process.env.SESSION_SECRET || "";
  const tag = crypto.createHash("sha256").update("miva.blob.v1." + secret).digest("hex").slice(0, 32);
  return "state/" + tag + "/";
}
