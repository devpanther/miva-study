# CSC_106 — Week 3 Summary

*Introduction to Web Technologies · Week 3 (21–27 Sep 2026) · Topic: HyperText Markup Language (HTML) — document structure, elements and attributes, hyperlinks and navigation, web forms and validation*

## The 8 most examinable things this week

1. **The document skeleton in order**: `<!DOCTYPE html>` → `<html>` → `<head>` → `<body>`. The DOCTYPE is the **very first line** and tells the browser which version of HTML is used; `<html>` is the **root element**; `<head>` holds **meta-information (invisible)**; `<body>` holds the **visible content**.
2. **Element = opening tag + content + closing tag**, where the closing tag repeats the name with a **forward slash** before it (`<p>...</p>`). **Attributes** go in the *opening* tag and give extra information: `name="value"` in quotes.
3. **The tag-to-purpose table** — you will be asked "which element does X?": `<a>` link, `<img>` image, `<ol>`/`<ul>`/`<li>` lists, `<dl>`/`<dt>`/`<dd>` definition lists, `<table>`/`<tr>`/`<th>`/`<td>` tables, `<div>` block container, `<span>` inline container, `<br>` line break, `<!-- -->` comment, `<iframe>` embedded external content.
4. **Required attributes**: `<a href="...">`, `<img src="..." alt="...">`, `<form action="..." method="...">`. `href` = destination URL; `src` = image file source; `alt` = alternative text (accessibility); `action` = where data is sent; `method` = GET or POST.
5. **GET vs POST**: GET appends the data to the **URL as query parameters** (search, simple retrieval); POST sends it in the **request body** (sensitive or large data, e.g. username and password).
6. **Six heading levels only**, `<h1>` (highest) to `<h6>` (lowest) — they define structure and hierarchy, not just size.
7. **Link types**: **internal** links use a **relative URL** (`about.html`) within the same site; **external** links use the **complete URL including the protocol** (`https://...`); **anchor** links jump to a section on the same page using `href="#id"` with a matching `id` attribute on the target; `target="_blank"` opens the link in a new tab/window.
8. **HTML5 validation attributes**: `required`, `min`/`max` (numeric), `minlength`/`maxlength` (text length), `pattern` (regular expression). File uploads need `<input type="file">` **and** `enctype="multipart/form-data"` on the form.

## Document structure

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>My Page</title>
    <link rel="stylesheet" href="styles.css">
    <script src="app.js"></script>
  </head>
  <body>
    <h1>Visible content goes here</h1>
  </body>
</html>
```

- **`<!DOCTYPE>`** — not an element and has no closing tag; first line; declares the HTML version (HTML5 = `<!DOCTYPE html>`); helps the browser render correctly.
- **`<head>`** — meta-information, **not visible** to the user: `<meta>` (character encoding and other metadata), `<title>` (text in the browser's title bar/tab), `<link>` and `<script>` (references to external CSS and JavaScript files).
- **`<body>`** — everything the user sees: text, headings, images, links, lists, tables, forms.

## Elements, tags and attributes

- **Paired (container) elements** have an opening and a closing tag: `<p>`, `<h1>`–`<h6>`, `<a>`, `<ul>`, `<li>`, `<div>`, `<span>`, `<form>`, `<table>`, `<button>`, `<textarea>`, `<select>`.
- **Void (empty) elements** have no content and no closing tag: `<br>`, `<img>`, `<input>`, `<meta>`, `<link>`, `<hr>`.
- **Attribute syntax**: inside the opening tag, `attribute="value"`, space-separated, value in quotes — `<a href="page.html" target="_blank">`. An attribute never appears in a closing tag.
- **Nesting must be correct** — close the innermost element first: `<p><strong>Hi</strong></p>` is valid; `<p><strong>Hi</p></strong>` is not.
- **Block-level** elements (`<div>`, `<p>`, `<h1>`, `<ul>`, `<table>`, `<form>`) start on a new line and take the full width. **Inline** elements (`<span>`, `<a>`, `<img>`, `<strong>`, `<em>`) flow inside a line and take only as much width as they need. `<div>` groups content for styling/scripting (used with CSS for layout); `<span>` styles a specific part of text inside a larger element.
- **Text formatting**: `<strong>` = strong importance (renders bold), `<em>` = emphasis (renders italic), `<u>` = underline.
- **Comments**: `<!-- this is not rendered -->` — for documentation or to hide content from rendering.

## Text, links and images

```html
<h1>Main heading</h1>
<p>A paragraph of text.<br>This sentence is on a new line.</p>

<a href="https://www.mivastudents.com">Open Miva Students Page</a>   <!-- external -->
<a href="about.html">About us</a>                                    <!-- internal, relative -->
<a href="#contact">Jump to contact</a>  ...  <h2 id="contact">Contact</h2>
<a href="https://example.com" target="_blank">Open in a new tab</a>

<img src="images/logo.png" alt="Company logo">
<a href="home.html"><img src="banner.jpg" alt="Home banner"></a>      <!-- image link -->
```

- **Anchor text** is the visible, clickable part of the hyperlink; it should **describe** the linked content ("Open Miva Students Page", not "click here").
- **Navigation types named in the lecture**: text links, image links, button links, and navigation menus (a collection of links shown as a menu bar or list).
- **Best practice**: descriptive anchor text, clear visual indicators (underline/colour), consistent navigation across the site, test external links for breakage, mobile-friendly and accessible links, use `<nav>` for menus and `<button>` for interactive controls, and avoid cluttering a page with too many links.

## Lists, tables, media and semantics

```html
<ol><li>First</li><li>Second</li></ol>        <!-- ordered: numbered -->
<ul><li>Item</li><li>Item</li></ul>           <!-- unordered: bulleted -->

<dl>
  <dt>HTML</dt><dd>HyperText Markup Language</dd>
</dl>

<table>
  <tr><th>Name</th><th>Score</th></tr>
  <tr><td>Ada</td><td>90</td></tr>
</table>

<audio controls src="song.mp3"></audio>
<video controls src="clip.mp4" width="320"></video>
<iframe src="https://www.example.com" title="Map"></iframe>
```

- `<dl>` definition list contains `<dt>` (term) and `<dd>` (definition) — three elements, learn all three.
- Table parts: `<table>` (the table), `<tr>` (table row), `<th>` (table header cell, bold and centred by default), `<td>` (table data cell). Cells live inside rows, rows inside the table.
- `<iframe>` embeds **external content** such as maps or other web pages inside a page.
- **Semantic elements** give meaning to structure and improve **accessibility and search engines**: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`. HTML5 also added **native multimedia support** (`<audio>`, `<video>`) and dynamic graphics (`<canvas>`).

## Web forms

```html
<form action="/register" method="post" enctype="multipart/form-data">
  <label for="user">Username:</label>
  <input type="text" id="user" name="username" placeholder="Enter name" required maxlength="20">
  <input type="password" name="pwd" required minlength="8">
  <input type="email" name="email" required>
  <input type="radio" name="gender" value="male"> Male
  <input type="checkbox" name="terms" value="yes"> I agree
  <input type="text" name="zip" pattern="[0-9]{5}">
  <input type="file" name="photo">
  <select name="level">
    <option value="100">100 Level</option>
  </select>
  <textarea name="comment" rows="4"></textarea>
  <button type="submit">Submit</button>
</form>
```

- **Vocabulary**: a **form** is a collection of input elements and controls that collect and submit user data; an **input element** lets the user enter or select data; a **control** is an interactive element (button, dropdown); a **field** is a specific area for entering data; a **label** is descriptive text associated with a field.
- **`action`** = the URL (usually a server-side script) the data is sent to. **`method`** = the HTTP method, **GET** or **POST**.
- **Input types named**: `text` (single-line), `password` (conceals the text), `email` (built-in email-format validation), `radio` (choose **one** of mutually exclusive options), `checkbox` (choose **one or more**), plus `<select>` (dropdown, choose one), `<textarea>` (multi-line text) and `<button>`.
- **Input attributes**: `name` (the key used when submitting the data), `id` (unique identifier, used to link a `<label for="...">`), `value` (initial/default value), `placeholder` (hint text), `required`, `disabled`, `maxlength`, `min`/`max`, `multiple` (select several options or files).
- **Validation**: HTML5 provides built-in validation attributes — `required`, `min`/`max`, `minlength`/`maxlength`, `pattern` (a regular expression, e.g. `pattern="[0-9]{5}"` forces a 5-digit number). JavaScript is used for custom validation.
- **File uploads**: `<input type="file">` plus `enctype="multipart/form-data"` on the `<form>`.
- **Accessibility**: use `<label>` elements tied to controls, provide alternative text for images used as form buttons, and group related controls with `<fieldset>` and `<legend>`.

## Commonly confused

- **`<b>` vs `<strong>`** — both look bold; `<strong>` carries **semantic** meaning (strong importance), which screen readers and search engines use. Same for `<i>` vs `<em>` (emphasis).
- **`id` vs `class`** — `id` is a **unique** identifier for one element (used by `<label for>` and by `#anchor` links); `class` is a reusable group name applied to many elements.
- **Ordered `<ol>` vs unordered `<ul>`** — `<ol>` numbers items where sequence matters; `<ul>` bullets items where it does not. Both contain `<li>`.
- **`<br>` vs `<p>`** — `<br>` is a void element forcing a line break inside text; `<p>` is a paired element creating a whole new paragraph block.
- **Absolute vs relative links** — absolute (external) gives the **full URL including the protocol**, `https://www.example.com/page.html`; relative (internal) gives the path within the same site, `about.html`.
- **`href` vs `src`** — `href` points to where a link *goes* (`<a>`, `<link>`); `src` points to a file to be *pulled in and displayed* (`<img>`, `<script>`, `<iframe>`).
- **GET vs POST** — GET puts data in the URL as visible query parameters (searches); POST puts it in the request body (passwords, large data).
- **`name` vs `id` on an input** — `name` is what gets submitted to the server; `id` is for labels, CSS and scripts.
- **Radio vs checkbox** — radio buttons are mutually exclusive (pick one from a group sharing the same `name`); checkboxes allow several.
- **`<div>` vs `<span>`** — `<div>` is a block container for grouping sections; `<span>` is an inline container for part of a line of text.
- **HTML vs HTML5** — HTML5 is the current version: native `<audio>`/`<video>`, the `<canvas>` element for dynamic graphics, semantic elements, and built-in form validation attributes.

*Note: the lecture slides show each element as a screenshot of code rather than as extractable text, and the PDF extractor also dropped the "ff"/"fi"/"fl" ligatures (so "attribute" appears as "aribute", "button" as "buon", "pattern" as "paern"). Every code snippet above is the standard, exam-correct form of the element the slide names; learn the tag names and their required attributes as given.*
