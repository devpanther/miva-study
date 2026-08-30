# Kaizen

Live: https://miva-study-tracker.vercel.app
Vercel project: huddles/miva-study-tracker

## What it is

A nightly study check for two people across a twelve-week semester. One question at
a time, graded, with the explanation for every miss, and Sunday's teaching topic
derived from whoever's lowest score.

## Shape

```
index.html            shell; loads app.css + app.js
app.css               all styling, light + dark
app.js                the whole client
api/state.js          shared scores  (Vercel Blob)
api/week.js           week packs     (proxied from the study repo)
manifest.webmanifest  add-to-home-screen
icon.svg
```

No build step. No framework. Vercel installs `@vercel/blob` and serves `api/*` as
Node functions; everything else is static.

## Where the data lives

**Question packs** are NOT in this project. `api/week.js` reads them live from
`seprintour/miva-study` at `packs/week-XX/week-XX.json`, cached at the edge for five
minutes. Regenerate a week with the Friday routine, push it, and the site serves the
new questions without a redeploy. That is deliberate — the questions change often,
the app does not.

**Scores** live in Vercel Blob, one document per person at `state/<id>.json`. The two
people never write the same key, so there is no merge and no conflict. `GET
/api/state` lists them and stitches them together; `POST /api/state` writes only the
caller's own document.

With no `BLOB_READ_WRITE_TOKEN` the endpoint returns `storage:"none"` and the client
falls back to `localStorage` — the site stays fully usable, it just stops being
shared. The Data tab says which mode it is in.

## Connecting the blob store

1. Vercel dashboard → the `miva-study-tracker` project → Storage → Create → Blob
2. Connect it to this project (that injects `BLOB_READ_WRITE_TOKEN`)
3. Redeploy

Nothing in the code changes. The Data tab flips from "This device only" to "Shared".

## Local development

```
npx vercel dev
```

`devserver.js` in the parent working copy is a dependency-free stand-in that serves
the static files, reads week packs off disk and keeps state in memory — enough to
exercise the whole flow without Vercel.

## Two places only

`api/state.js` refuses a third person. Names are claimed, not authenticated: this is
two study partners, not a public app, and the scores are quiz marks out of twelve.
Blob documents are public-read by URL (unguessable prefix, never exposed by the
client), so treat the contents as non-secret.
