# CSC_106 — Week 3 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 4, not this week. Notes closed.*

## Section A - Multiple choice (12)

**1.** Which line must come first in an HTML5 document, and what is its purpose?
a) `<html>` — it opens the root element
b) `<!DOCTYPE html>` — it tells the browser which version of HTML is being used
c) `<head>` — it declares the character encoding
d) `<meta charset="UTF-8">` — it declares the document type

**2.** What does the following render?

```html
<ol>
  <li>Register</li>
  <li>Login</li>
</ol>
```
a) Two bulleted items
b) A definition list with two terms
c) A numbered list: 1. Register, 2. Login
d) Two paragraphs on separate lines

**3.** What is wrong with this line?

```html
<img src="logo.png"></img>
```
a) `src` should be `href`
b) `<img>` is a void element — it needs no closing tag, and the required `alt` attribute is missing
c) Images must be inside a `<div>`
d) Nothing is wrong

**4.** Which section of an HTML document is **not** visible to the user?
a) `<body>`  b) `<main>`  c) `<head>`  d) `<footer>`

**5.** Which attribute pair is correct for a hyperlink that opens an external site in a new tab?
a) `<a src="https://example.com" target="_new">`
b) `<a href="https://example.com" target="_blank">`
c) `<a link="https://example.com" open="new">`
d) `<a href="#example.com" target="_self">`

**6.** In a form, what is the difference between the `action` and `method` attributes?
a) `action` names the button; `method` names the form
b) `action` validates the input; `method` styles the form
c) `action` is the URL the data is sent to; `method` is the HTTP method (GET or POST) used to send it
d) `action` sets the encoding; `method` sets the maximum length

**7.** What does this snippet do?

```html
<a href="#services">Our services</a>
...
<h2 id="services">Services</h2>
```
a) Downloads a file called services
b) Opens services.html in a new window
c) Links to an external site named services
d) Jumps to the section on the same page whose `id` is "services"

**8.** Which set of elements makes up a table?
a) `<table>`, `<tr>`, `<th>`, `<td>`
b) `<table>`, `<td>`, `<dt>`, `<dd>`
c) `<tab>`, `<row>`, `<col>`, `<cell>`
d) `<table>`, `<ul>`, `<li>`, `<th>`

**9.** A form must let the user attach a photograph. What is required?
a) `<input type="image">` only
b) `<input type="file">` and `enctype="multipart/form-data"` on the `<form>`
c) `<input type="upload">` and `method="get"`
d) `<img src="">` inside the form

**10.** Which HTML5 attribute forces the input to match a 5-digit number?
a) `required="5"`  b) `maxlength="5"`  c) `pattern="[0-9]{5}"`  d) `min="5"`

**11.** What is wrong with the following?

```html
<p><strong>Deadline is Friday</p></strong>
```
a) `<strong>` cannot be used inside `<p>`
b) The elements are improperly nested — the inner element must be closed before the outer one
c) `<p>` needs a closing slash on the opening tag
d) `<strong>` must come before `<p>`

**12.** Which statement about GET and POST is correct?
a) GET sends data in the request body; POST appends it to the URL
b) Both send the data in the URL; only the speed differs
c) GET appends data to the URL as query parameters; POST sends it in the request body, suiting sensitive or large data
d) POST can only be used for file uploads

## Section B - Short answer (3)

**13.** Write a complete, minimal HTML5 document skeleton, naming the four structural components and stating in one phrase what each is for.

**14.** Write a login form that sends the data to `/login` using the POST method, containing a labelled text input for the username, a password input, and a submit button. State why POST is the right method here.

**15.** Distinguish between: (a) an internal and an external hyperlink, (b) `<ol>` and `<ul>`, (c) `<br>` and `<p>`. Give one line of HTML for each of the six.

## Answers

**1. b** — *document type declaration*: `<!DOCTYPE html>` is the very first line and informs the browser which version of HTML is being used so it renders the page correctly. It is a declaration, not an element.
**2. c** — *ordered lists*: `<ol>` numbers its `<li>` items; `<ul>` would bullet them. Both use `<li>` for each item.
**3. b** — *void elements and required attributes*: `<img>` is empty — written `<img src="logo.png" alt="Company logo">` with no closing tag. `alt` provides alternative text for accessibility; `src` specifies the image file's source.
**4. c** — *head section*: `<head>` holds meta-information (`<meta>`, `<title>`, `<link>`, `<script>`) and is not displayed; `<body>` contains all visible content.
**5. b** — *external links*: `href` carries the complete URL including the protocol, and `target="_blank"` opens it in a new tab or window, keeping the user on your site.
**6. c** — *form submission*: `action` is the URL, typically a server-side script, that processes the data; `method` is the HTTP method, GET or POST.
**7. d** — *anchor links*: `href="#id"` combined with a matching `id` attribute on the target element scrolls to that section within the same page.
**8. a** — *tables*: `<table>` wraps the table, `<tr>` a row, `<th>` a header cell, `<td>` a data cell. `<dt>`/`<dd>` belong to definition lists (`<dl>`).
**9. b** — *file uploads*: `<input type="file">` provides the control, and `enctype="multipart/form-data"` on the form is necessary for the server to handle the upload.
**10. c** — *HTML5 validation*: `pattern` takes a regular expression; `[0-9]{5}` means exactly five digits. `required`, `min`/`max` and `minlength`/`maxlength` are the other validation attributes.
**11. b** — *nesting*: elements must be closed in reverse order of opening — `<p><strong>Deadline is Friday</strong></p>`.
**12. c** — *GET vs POST*: GET puts the data in the URL as visible query parameters (good for searches and simple retrieval); POST puts it in the request body (suited to sensitive data such as passwords, or large amounts).
**13.** *Document structure*: 
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```
**`<!DOCTYPE html>`** — first line, declares the HTML version so the browser renders correctly; **`<html>`** — the root element containing all other elements; **`<head>`** — invisible meta-information (title, character encoding, links to CSS and JavaScript); **`<body>`** — the visible content of the page.
**14.** *Forms*: 
```html
<form action="/login" method="post">
  <label for="user">Username:</label>
  <input type="text" id="user" name="username" required>
  <input type="password" name="password" required>
  <button type="submit">Log in</button>
</form>
```
POST is correct because it sends the form data in the **request body** rather than appending it to the URL, which suits sensitive data such as a password. The `<label for="user">` matches the input's `id`, which is the accessibility requirement.
**15.** *Links and list/break elements*: (a) an **internal** link navigates within the same website using a relative URL — `<a href="about.html">About</a>` — while an **external** link goes to another domain and needs the complete URL including the protocol — `<a href="https://www.mivastudents.com">Miva Students</a>`. (b) `<ol>` produces a numbered list where order matters — `<ol><li>Step one</li></ol>` — and `<ul>` produces a bulleted list where it does not — `<ul><li>Item</li></ul>`. (c) `<br>` is a void element that forces a line break inside text — `Line one<br>Line two` — while `<p>` is a paired element creating a separate paragraph block — `<p>A paragraph.</p>`.
