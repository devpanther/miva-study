# CSC_106 — Week 3 Summary

*Introduction to Web Technologies · Week 3 (21–27 Sep 2026) · Topic: HyperText Markup Language (HTML)*

## The 8 most examinable things this week

1. **The document skeleton, in order**: `<!DOCTYPE html>` (tells the browser which HTML version to render, so the page renders correctly), `<html>` (root element, contains everything), `<head>` (invisible meta-information — `<meta>`, `<title>`, `<link>`, `<script>`), `<body>` (the visible page content).
2. **Element vs tag vs attribute**: an *element* is a piece of content plus its markup; a *tag* is the markup itself — opening tag `<p>`, closing tag `</p>` (closing = opening name with a leading `/`); an *attribute* is extra information inside the opening tag, e.g. `href` on `<a>`, `src`/`alt` on `<img>`.
3. **Core content elements named**: `<h1>`–`<h6>` headings (hierarchy, h1 highest), `<p>` paragraphs, `<a href="">` links, `<ul>`/`<ol>` lists, `<img src="" alt="">` images, `<table>`/`<tr>`/`<th>`/`<td>` tables, `<dl>`/`<dt>`/`<dd>` definition lists, `<button>`, `<br>` line break, `<!-- -->` comments, `<strong>`/`<em>`/`<u>` text formatting.
4. **`<div>` vs `<span>`**: `<div>` is a block-level container for grouping/laying out content (used with CSS); `<span>` is an inline container for styling part of a run of text without breaking the line.
5. **Semantic elements**: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` — give meaning to page structure and improve accessibility and search-engine understanding, versus a plain `<div>` which conveys none.
6. **Links and navigation**: relative URLs (`about.html`) link within the same site/folder; absolute URLs (`https://example.com`) link externally; `target="_blank"` opens a link in a new tab; an in-page jump uses `<a href="#id">` pointing at an element carrying that `id`.
7. **Forms — GET vs POST**: `<form action="URL" method="GET|POST">`. GET appends form data to the URL as query parameters — visible, suited to search/simple retrieval. POST sends data in the request body — suited to sensitive or large data (e.g. login).
8. **Input types and validation attributes**: `text`, `password`, `email`, `radio`, `checkbox`, `select` (dropdown), `textarea`, `file` are the input types; `name`, `id`, `value`, `placeholder` describe a field; `required`, `min`/`max`, `minlength`/`maxlength`, `pattern` (regex) validate it. File uploads need `enctype="multipart/form-data"` on the `<form>`.

## Document structure

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Page Title</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

## Hyperlinks

- **Anchor text** — the visible, clickable words of a link; should describe the destination.
- **Relative URL** (`about.html`) — for internal links within the same site.
- **Absolute URL** (`https://example.com`) — for external links, full protocol included.
- **In-page anchor**: target element gets an `id` (`<h2 id="pricing">`), the link points at it with `#` (`<a href="#pricing">`).
- **New tab**: `target="_blank"` on the `<a>`.
- Link *types* by presentation: text links, image links (an `<img>` wrapped in `<a>`), button links, navigation menus.
- Best practice: descriptive anchor text, visually distinct links, consistent nav, working external links, accessible alt text.

## Forms

- **Vocabulary**: *form* = the collection of controls; *input element* = a field for entering/selecting data; *control* = any interactive element (button, dropdown); *field* = one data-entry area; *label* = descriptive text tied to a field.
- `<form action="/submit" method="post">` — `action` is where data is sent; `method` is how (`GET` or `POST`).
- Common input elements: `<input type="text|password|email|radio|checkbox|file">`, `<select>` (dropdown), `<textarea>`, `<button>`.
- Validation attributes (HTML5, checked by the browser before submit): `required`, `min`/`max`, `minlength`/`maxlength`, `pattern` (regex, e.g. `pattern="[0-9]{5}"` for a 5-digit ZIP).
- File uploads: `<input type="file">` plus `enctype="multipart/form-data"` on the `<form>` — without the `enctype`, the file will not upload correctly.
- Accessibility: `<label>` associated with each input, `alt` text on image buttons, `<fieldset>`/`<legend>` to group and caption related controls.

## Commonly confused

- **Element vs tag** — the tag is the markup (`<p>`, `</p>`); the element is the tag pair plus its content and attributes.
- **`<div>` vs `<span>`** — `<div>` is block-level (own line, for layout); `<span>` is inline (styles part of a line without breaking it).
- **Relative vs absolute URL** — relative (`about.html`) resolves against the current site/folder; absolute (`https://...`) is a complete address to anywhere.
- **GET vs POST** — GET puts data in the visible URL (bookmarkable, for retrieval); POST puts data in the hidden request body (for sensitive/large submissions).
- **`<th>` vs `<td>`** — `<th>` marks a table *header* cell; `<td>` marks an ordinary *data* cell. Using `<td>` for headers loses that semantic/accessibility meaning.
- **`<nav>`/semantic elements vs `<div>`** — a `<div id="nav">` looks the same visually but carries no meaning for assistive technology or search engines; `<nav>` does.
- **`required` vs `disabled`** — `required` blocks submission until filled; `disabled` removes the field from interaction and from submission entirely.
