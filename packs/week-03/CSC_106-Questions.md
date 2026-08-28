# CSC_106 — Week 3 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 4, not this week. Notes closed.*

## Multiple choice (12)

**1.** A student's HTML file begins directly with `<html>` and omits `<!DOCTYPE html>`. What is the effect?
a) The browser refuses to load the page at all
b) The browser does not know which HTML version to use and may not render the page correctly
c) The `<head>` section is automatically skipped
d) Nothing — `<!DOCTYPE>` is purely decorative

**2.** What is wrong with this line?
```html
<img src="team.jpg">
```
a) `src` should be `href`
b) The element is missing its closing tag
c) The `alt` attribute (alternative text for accessibility) is missing
d) `<img>` must be placed inside a `<picture>` element

**3.** A site has `index.html`, `about.html`, `services.html` and `contact.html` all in the same folder. Inside `index.html`:
```html
<a href="about.html">About</a>
```
What kind of link is this, and why does it work?
a) An absolute link; it works because it gives the full URL
b) A relative link; it works because `about.html` sits in the same folder as `index.html`
c) An internal anchor link; it works because of an `id` attribute
d) An external link; it needs `target="_blank"` to work

**4.** Which element would you use to wrap a single word inside a paragraph so you can style just that word, without starting a new line?
a) `<div>`
b) `<span>`
c) `<section>`
d) `<p>`

**5.**
```html
<form action="/login" method="post">
  <input type="text" name="username">
  <input type="password" name="password">
</form>
```
Why is `POST` the right choice here rather than `GET`?
a) POST loads faster than GET
b) GET can only send one form field at a time
c) POST sends the data in the request body, keeping it out of the URL — suited to sensitive data like a password
d) POST only works with `<textarea>` fields

**6.**
```html
<input type="email" name="email" required>
```
What does the `required` attribute do here?
a) Validates that the email format is correct on the server
b) Prevents the form from being submitted until the field is filled in
c) Disables the field until a script enables it
d) Sets a default value for the field

**7.**
```html
<a href="https://example.com" target="_blank">Visit</a>
```
What does `target="_blank"` do?
a) Opens the link in the same browser tab
b) Opens the link in a new browser tab or window
c) Downloads the linked page as a file instead of navigating
d) Marks the link as broken until it is clicked

**8.** Which is the more semantic replacement for `<div id="nav">` wrapping a site's menu links?
a) `<span class="nav">`
b) `<nav>`
c) `<header>`
d) `<section id="menu">`

**9.**
```html
<table>
  <tr><td>Name</td><td>Age</td></tr>
  <tr><td>Ada</td><td>22</td></tr>
</table>
```
What is wrong with this table markup?
a) `<table>` must contain a `<form>`
b) The header row uses `<td>` instead of `<th>`, so "Name" and "Age" are not marked as header cells
c) `<tr>` is not a valid table element
d) Tables must use `<div>` instead of `<tr>`

**10.**
```html
<h2 id="pricing">Pricing</h2>
...
<a href="#pricing">See pricing</a>
```
What happens when a user clicks this link?
a) The browser sends a new GET request to the server for a different page
b) The browser jumps to the element with `id="pricing"` on the same page
c) Nothing — `id` attributes cannot be targeted by `href`
d) It opens the pricing section in a new tab

**11.**
```html
<input type="text" name="zip" pattern="[0-9]{5}">
```
What does this `pattern` attribute enforce?
a) The field must contain exactly 5 digits, e.g. a ZIP code
b) The field must contain at least 5 characters of any type
c) The field only accepts numbers between 0 and 9
d) The field becomes read-only after 5 characters are typed

**12.**
```html
<form action="/upload" method="post">
  <input type="file" name="doc">
</form>
```
This form will fail to upload the file correctly. What is missing?
a) `method` should be `"get"`
b) `enctype="multipart/form-data"` on the `<form>` tag
c) The input needs a `value` attribute set to the file path
d) A `<label>` element, without which uploads do not work

## Short answer (3)

**13.** Using the `<img>` element as your example, define *element*, *tag* and *attribute*, and show how all three appear in one line of markup.

**14.** A search form and a login form both submit data to a server. Explain, with reference to how each method transmits the data, why the search form should use `GET` and the login form should use `POST`.

**15.** Name three HTML5 form validation attributes covered this week and, for each, state precisely what it enforces on an input field.

## Answers

**1. b** — *DOCTYPE*: it is the browser's cue for which HTML version to use; without it the page may not render as intended, though it does not stop the page from loading.
**2. c** — *`<img>`*: `src` gives the image source, `alt` gives alternative text for accessibility and for when the image fails to load; this tag has `src` but no `alt`.
**3. b** — *relative URL*: `about.html` has no protocol or domain, so it resolves relative to the current page's folder — here, the same directory as `index.html`.
**4. b** — *`<span>`*: an inline container for styling part of a line without breaking it; `<div>` is block-level and would start a new line.
**5. c** — *GET vs POST*: GET appends data to the URL as visible query parameters (fine for a search); POST sends it in the hidden request body, which suits a password.
**6. b** — *`required`*: blocks submission until the field has a value; it does not perform server-side checks or disable the field.
**7. b** — *`target="_blank"`*: opens the linked page in a new browser tab or window, leaving the original page open.
**8. b** — *semantic elements*: `<nav>` marks the block as navigation for browsers, assistive technology and search engines; a `<div>` with the same visual styling carries no such meaning.
**9. b** — *`<th>` vs `<td>`*: header cells should use `<th>`, not `<td>`, so they are recognised as headers rather than ordinary data cells.
**10. b** — *in-page anchor*: `href="#pricing"` targets the element whose `id` is `"pricing"` and scrolls to it on the same page — no new request is sent.
**11. a** — *`pattern`*: `[0-9]{5}` is a regular expression requiring exactly five digits, the classic example being a ZIP/postal code.
**12. b** — *file uploads*: `<input type="file">` alone is not enough; the `<form>` needs `enctype="multipart/form-data"` for the file's contents to be submitted correctly.
**13.** *Element vs tag vs attribute*: in `<img src="cat.jpg" alt="A cat">`, `<img ...>` is the **tag** (the markup itself — here a single, self-contained tag with no separate closing tag); `src="cat.jpg"` and `alt="A cat"` are **attributes**, giving extra information inside the tag; the whole `<img>` with its attributes is the **element** — the unit that the browser renders.
**14.** *GET vs POST*: GET appends the submitted data to the URL as query parameters, so it is visible, length-limited, and bookmarkable/cacheable — appropriate for a search form doing simple retrieval. POST places the data in the request body instead, keeping it out of the URL and suited to sensitive data (a password) or larger payloads, which is why the login form should use it.
**15.** *Validation attributes* (any three): `required` — the field must be filled before the form submits; `min`/`max` — set the minimum/maximum allowed value for numeric input types; `minlength`/`maxlength` — set the minimum/maximum number of characters for text input; `pattern` — a regular expression the field's value must match.
