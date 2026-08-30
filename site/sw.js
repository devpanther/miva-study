/**
 * The service worker.
 *
 * Two jobs, and it is careful about the second.
 *
 * 1. Make the app installable. Chrome will only offer "Install app" for a page that has
 *    a manifest, the right icons, and a service worker with a fetch handler.
 *
 * 2. Make the shell survive a bad connection. Nigeria at 23:00 is not always a good
 *    place to be loading 300 KB of JavaScript, and the app is most useful exactly then.
 *
 * What it will NOT do is cache anything you are signed in to. /api/ is never touched:
 *   - /api/state holds two people's scores, and a stale copy would show the wrong ones
 *   - /api/week and /api/exam are read live from the study repo, so caching them would
 *     freeze the content at whatever was published the day you installed
 *   - /api/ask and /api/grade are requests, not documents
 * A cached answer to any of those would be worse than no answer, so they always go to
 * the network and are never stored.
 *
 * The shell is served network-first with a cache fallback, not cache-first: a deploy
 * should reach you on the next load, not whenever the worker happens to update. The
 * cache is only what you fall back to when the network does not answer.
 */

const VERSION = "v4-kaizen-2026-08-30";
const SHELL = "shell-" + VERSION;

/* Everything the app needs to draw its first screen. The Lottie player and its animation
   are here so the celebration still plays with no signal. */
const ASSETS = [
  "./",
  "./index.html",
  "./app.css",
  "./app.js",
  "./lottie.min.js",
  "./confetti.json",
  "./icon.svg",
  "./apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/maskable-192.png",
  "./icons/maskable-512.png",
  "./manifest.webmanifest"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(SHELL)
      /* addAll fails the whole install if one file 404s, which would leave the app with
         no worker at all. Take them one at a time and accept a miss. */
      .then((c) => Promise.all(ASSETS.map((u) => c.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== SHELL).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Let the page ask for the new worker without a second reload. */
self.addEventListener("message", (e) => {
  if (e.data === "skip-waiting") self.skipWaiting();
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  let url;
  try { url = new URL(req.url); } catch (err) { return; }

  /* Anything that is not this site — fonts, a CDN — is left entirely alone. */
  if (url.origin !== self.location.origin) return;

  /* Signed-in data and live content. Never cached, never served from cache. */
  if (url.pathname.startsWith("/api/")) return;

  e.respondWith(
    fetch(req)
      .then((res) => {
        /* Only store a real, complete response. An opaque or partial one cached here
           would come back later as a broken page. */
        if (res && res.status === 200 && res.type === "basic") {
          const copy = res.clone();
          caches.open(SHELL).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then((hit) => {
          if (hit) return hit;
          /* A navigation with nothing cached for that exact URL still gets the shell,
             so deep links like ?tab=guide&course=MTH_102 open offline. */
          if (req.mode === "navigate") return caches.match("./index.html");
          return new Response("", { status: 504, statusText: "offline" });
        })
      )
  );
});
