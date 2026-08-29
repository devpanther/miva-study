# CSC_106 — Week 3 retention set

*Introduction to Web Technologies · sit this seven days after the lesson · 12 MCQ + 3 short answer*

## Multiple choice

**1.** A page contains `<h2 id="fees">Fees</h2>` near the bottom and, at the top, `<a href="#fees">Jump to fees</a>`. Clicking the link:

a) opens a file named `fees` in a new tab
b) submits a form to the URL `fees`
c) scrolls to the `<h2>` element on the same page
d) does nothing, because `href` must always start with `http://`

**2.** The exact first line of an HTML5 document is:

a) `<!DOCTYPE html>`
b) `<!DOCTYPE HTML5>`
c) `<doctype html="5">`
d) `<html doctype="5">`

**3.** In `<img src="team.jpg" alt="Our team">`, the `alt` attribute:

a) sets the image width
b) names the image when the form is submitted
c) links the image to another page
d) provides alternative text for the image

**4.** A login form must send a username and password. Which attribute setting is appropriate, and why?

a) `method="GET"`, because the data is appended to the URL as query parameters
b) `method="POST"`, because the data is sent in the request body, suiting sensitive data
c) `action="POST"`, because `action` names the HTTP method
d) `method="SEND"`, because credentials need a dedicated method

**5.** Which input will only accept a 5-digit number?

a) `<input type="text" pattern="[0-9]{5}">`
b) `<input type="text" maxlength="5">`
c) `<input type="number" min="5" max="5">`
d) `<input type="text" required="5">`

**6.** A form contains `<input type="file" name="cv">` but uploads fail on the server. The most likely omission on the `<form>` tag is:

a) `target="_blank"`
b) `multiple`
c) `maxlength="1"`
d) `enctype="multipart/form-data"`

**7.** A registration form must let a user tick several interests at once from a list. The correct control is:

a) `<input type="radio">`
b) `<input type="checkbox">`
c) `<select>` with one `<option>`
d) `<input type="text">`

**8.** Which snippet is a correctly formed definition list?

a) `<dl><dd>HTML</dd><dt>HyperText Markup Language</dt></dl>`
b) `<dt><dl>HTML</dl><dd>HyperText Markup Language</dd></dt>`
c) `<dl><dt>HTML</dt><dd>HyperText Markup Language</dd></dl>`
d) `<dl><li>HTML</li><li>HyperText Markup Language</li></dl>`

**9.** You want to colour just the word "urgent" inside a paragraph, without breaking the line. The correct element is:

a) `<div>`
b) `<br>`
c) `<section>`
d) `<span>`

**10.** Which attribute makes an external link open in a new browser tab or window?

a) `target="_blank"`
b) `href="_blank"`
c) `rel="new"`
d) `method="_blank"`

**11.** A student puts `<h1>Welcome</h1>` inside the `<head>` section and is surprised nothing appears. The reason is:

a) `<h1>` must be inside `<title>`
b) `<h1>` is only valid once per document
c) the `<head>` holds meta-information and is not visible to the user; visible content goes in `<body>`
d) headings must be numbered `<h2>` upwards

**12.** What is wrong with `<a href=about.html>About<a>`?

a) nothing; both tags are valid
b) the closing tag is missing its forward slash — it should be `</a>`
c) `<a>` cannot link to a relative URL
d) `href` should be `src`

## Short answer

**13.** Write the HTML for a hyperlink to "https://www.mivastudents.com" with suitable anchor text, and state what "anchor text" means.

**14.** Name the four elements used to build a table in HTML and say what each one is for.

**15.** List four HTML5 form validation attributes and state precisely what each one enforces.

## Answers

**1. c** — `href="#fees"` is a same-page anchor: it targets the element whose `id` is `fees`.

**2. a** — For HTML5 the declaration is exactly `<!DOCTYPE html>`, and it is the very first line.

**3. d** — `src` specifies the image file's source; `alt` provides alternative text.

**4. b** — POST sends form data in the request body, which suits sensitive or large data; GET would expose it in the URL.

**5. a** — `pattern` takes a regular expression; `[0-9]{5}` forces exactly five digits. `maxlength` only caps length, not content.

**6. d** — `enctype="multipart/form-data"` is necessary when handling file uploads on the server.

**7. b** — Checkboxes allow one or more selections; radio buttons allow only one from mutually exclusive choices.

**8. c** — `<dl>` is the definition list, `<dt>` the term, `<dd>` the definition, in that order.

**9. d** — `<span>` is an inline container for styling specific parts of text within a larger element; `<div>` is a block container.

**10. a** — `target="_blank"` opens the link in a new tab or window.

**11. c** — `<head>` provides meta-information (title, character encoding, links to CSS/JS) and is not visible; `<body>` contains the visible content.

**12. b** — A closing tag is the opening tag with a forward slash before the element name, so it must be `</a>` (the unquoted `href` value is also poor practice).

**13.** `<a href="https://www.mivastudents.com">Open Miva Students Page</a>` — the anchor text is the visible, clickable part of the hyperlink that describes the linked content, here "Open Miva Students Page".

**14.** `<table>` defines the table; `<tr>` is a table row; `<th>` is a table header cell; `<td>` is a table data cell.

**15.** `required` — the field must be filled out before submission; `min` and `max` — the minimum and maximum allowed values for numeric input types; `minlength` and `maxlength` — the minimum and maximum lengths for text input fields; `pattern` — a regular expression pattern the input value must match.
