# CSC_106 — Week 3

*Introduction to Web Technologies · Week 3 (21 – 27 Sep 2026)*

## Most likely to be examined

1. **`<!DOCTYPE html>`** — the very first line of an HTML document; informs the browser which version of HTML is being used so it renders the page correctly. For HTML5 it is exactly `<!DOCTYPE html>`.
2. **Document structure** — `<html>` is the **root element** containing all other elements; `<head>` holds meta-information and is **not visible** to the user (`<meta>` for character encoding, `<title>` for the browser title bar, `<link>` and `<script>` to reference external CSS and JavaScript); `<body>` contains the visible content.
3. **Hyperlink syntax** — `<a href="URL">Anchor text</a>`. The `href` attribute specifies the URL; the **anchor text** is the visible, clickable part. `target="_blank"` opens the link in a new tab/window. Same-page links use `<a href="#id">` with the `id` attribute on the target element.
4. **`<img src="..." alt="...">`** — `src` specifies the image file's source, `alt` provides alternative text.
5. **Form attributes** — `action` = the URL where the form data is sent (typically a server-side script); `method` = the HTTP method, either **"GET"** (data appended to the URL as query parameters; suitable for search forms and simple data retrieval) or **"POST"** (data sent in the request body; suitable for sensitive or large data).
6. **HTML5 form validation attributes** — `required`, `min` and `max`, `minlength` and `maxlength`, `pattern` (a regular expression, e.g. `pattern="[0-9]{5}"` ensures a 5-digit number).
7. **File uploads** — `<input type="file">`, with `enctype="multipart/form-data"` on the `<form>`, which is necessary when handling file uploads on the server.
8. **Table elements** — `<table>`, `<tr>` (table row), `<th>` (table header), `<td>` (table data). **Definition list** elements — `<dl>` (definition list), `<dt>` (term), `<dd>` (definition).

## Document components

HTML (**HyperText Markup Language**) is the standard language used to create web pages. It provides the structure and format for web content, letting you define elements such as headings, paragraphs, links and images. It is a **markup language**: it uses tags to describe the content and how it should be displayed in a web browser.

An **HTML element** is a pair of tags — an opening tag containing the element's name, and a closing tag identical to it but with a forward slash (`/`) before the element name. Elements can also have **attributes**, which provide additional information about the element.

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

## Content elements

- **Headings `<h1>` to `<h6>`** — define the structure and hierarchy of content. Six levels; `<h1>` is the highest level, `<h6>` the lowest.
- **Paragraph `<p>`** — creates paragraphs of text.
- **Link `<a>`** — creates hyperlinks to other web pages or resources; the `href` attribute specifies the URL.
- **Lists** — two types: **ordered `<ol>`** and **unordered `<ul>`**, with `<li>` items.
- **Image `<img>`** — embeds images on a page; `src` specifies the image file's source, `alt` provides alternative text.
- **`<div>`** — a container that groups and organises content for styling or scripting purposes; often used with CSS for layout and design.
- **`<span>`** — an **inline** container used for styling specific parts of text or content within a larger element.
- **`<form>`** — collects user input; contains form controls such as text inputs, radio buttons, checkboxes and buttons.
- **`<table>`, `<tr>`, `<th>`, `<td>`** — display data in rows and columns.
- **`<dl>`, `<dt>`, `<dd>`** — definition lists: define terms and their corresponding definitions.
- **`<button>`** — creates clickable buttons that can trigger actions when clicked, often used in forms.
- **Media elements** — HTML provides `<audio>` and `<video>` for embedding audio and video content.
- **Semantic elements** — provide meaning to the structure of a page and improve accessibility for users and search engines: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`.
- **`<iframe>`** — an inline frame used to embed external content such as maps or other web pages within a web page.
- **`<br>`** — creates a line break within text, forcing content to start on a new line.
- **Comments `<!-- -->`** — add notes within the HTML code for documentation, or hide content from rendering.
- **Text formatting** — `<strong>` indicates strong importance or emphasis, typically displayed bold; `<em>` emphasises text, typically displayed italicised; `<u>` underlines text for visual emphasis.

```html
<ol><li>First</li><li>Second</li></ol>
<ul><li>Item</li></ul>
<img src="logo.png" alt="Company logo">
<table>
  <tr><th>Name</th><th>Score</th></tr>
  <tr><td>Ada</td><td>90</td></tr>
</table>
<dl><dt>HTML</dt><dd>HyperText Markup Language</dd></dl>
<p><strong>Bold</strong> and <em>italic</em> and <u>underlined</u>.</p>
<!-- this is a comment -->
```

## Hyperlinks and navigation

**Hyperlinks** (links) allow users to navigate between web pages or different sections within the same web page. **Anchor text** is the visible and clickable part of a hyperlink that describes the linked content and tells users where the link will take them. A **URL (Uniform Resource Locator)** is a web address specifying the location of a resource on the internet; URLs are used in hyperlinks to determine the destination.

**Navigation** is the process of moving between web pages or different sections within a page; effective navigation is crucial for user experience.

- **Text links** — hyperlinks embedded within text, typically indicated by underlined or differently coloured text.
- **Image links** — use images as clickable elements; clicking the image redirects the user to the linked destination.
- **Button links** — hyperlinks presented as buttons, often styled for emphasis or to encourage interaction.
- **Navigation menus** — a collection of hyperlinks typically displayed as a menu bar or list.
- **Internal links** — navigate within the same website or domain; a relative URL is used (e.g. from `index.html` to `about.html`).
- **External links** — direct users to resources outside the current domain; provide the complete URL including the protocol (`http://` or `https://`).

```html
<a href="https://www.mivastudents.com">Open Miva Students Page</a>
<a href="about.html">About</a>                          <!-- internal, relative URL -->
<a href="#contact">Go to contact</a>                    <!-- same-page anchor -->
<h2 id="contact">Contact</h2>                           <!-- target carries the id -->
<a href="https://example.com" target="_blank">Open Example.com</a>
<a href="index.html"><img src="logo.png" alt="Home"></a> <!-- image link -->
```

**Best practices for hyperlinks and navigation:** use descriptive anchor text that accurately describes the linked content; give clear visual indicators of clickability (underline, colour, styling); keep navigation menus consistent throughout the site; test external links regularly, since broken links frustrate users; ensure mobile-friendly, responsive navigation; consider accessibility by providing meaningful alternative text for images and ensuring screen readers can interpret links; use proper link tags — the `<nav>` element for navigation menus and the `<button>` element for interactive links, maintaining semantic HTML; avoid overwhelming a page with too many links.

## Web forms

Web forms are interactive components that allow users to input and submit data to websites. They are essential for user registration, login, search, feedback and e-commerce transactions, enabling websites to collect and process user information efficiently.

Terminology given in the source:

- **Form** — a collection of input elements and controls used to collect and submit user data.
- **Input element** — an HTML element that allows users to enter or select data; includes text fields, radio buttons, checkboxes and more.
- **Control** — an interactive element within a form, such as a button or a dropdown list.
- **Field** — a specific area within a form for entering data, such as a text input field or a radio button group.
- **Label** — a text or descriptive element associated with an input field that provides context to users.

The `<form>` element is the container for all form controls and input elements; it defines the start and end of the form. The **`action`** attribute specifies the URL where the form data will be sent (typically a server-side script that processes the data). The **`method`** attribute specifies the HTTP method used to send the data — the two common methods are "GET" and "POST".

**Common input elements:** text input `<input type="text">` (single-line text such as names, usernames, search queries); password input `<input type="password">` (conceals the entered text for security); email input `<input type="email">` (includes built-in validation for email format); radio buttons `<input type="radio">` (select **one** option from mutually exclusive choices); checkboxes `<input type="checkbox">` (select **one or more** options); dropdown lists `<select>` (also known as select menus; the user selects one); text area `<textarea>` (multi-line text for longer responses or comments); buttons `<button>` (submit the form or trigger JavaScript functions).

**Form controls and input attributes:** `name` (the name of the input element, used when submitting form data), `id` (a unique identifier, often used in conjunction with labels), `value` (the initial or default value), `placeholder` (a hint or example text to guide users), `required` (must be filled out before submitting), `disabled` (non-editable and unselectable), `maxlength` (maximum number of characters allowed in a text input), `min` and `max` (minimum and maximum values for numeric input types), `multiple` (allows selecting multiple options in select menus or file inputs).

```html
<form action="/submit.php" method="POST">
  <label for="user">Username</label>
  <input type="text" id="user" name="username" placeholder="Your name" required maxlength="20">
  <input type="password" name="password" required>
  <input type="email" name="email">
  <input type="radio" name="gender" value="male">
  <input type="checkbox" name="subscribe" value="yes">
  <select name="country" multiple>
    <option value="ng">Nigeria</option>
  </select>
  <textarea name="comment"></textarea>
  <button type="submit">Send</button>
</form>
```

**Form submission:** the form's `action` attribute determines where the data is sent and `method` specifies the HTTP method. In a **"GET"** request, form data is appended to the URL as query parameters — suitable for search forms and simple data retrieval. In a **"POST"** request, form data is sent in the request body — suitable for sensitive or large amounts of data (e.g. sending a username and password for authentication).

**Validation and error handling:** validating user input is crucial for data accuracy and security. HTML5 provides built-in form validation attributes, and JavaScript can be used for custom validation. The HTML5 validation attributes are `required`, `min` and `max`, `minlength` and `maxlength`, and `pattern` (define a regular expression pattern for input validation).

```html
<input type="text" pattern="[0-9]{5}" required>   <!-- ensures a 5-digit number -->
```

**File uploads:** forms can be used to upload files such as images or documents, using `<input type="file">`. The `enctype="multipart/form-data"` attribute is necessary when handling file uploads on the server.

```html
<form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name="document">
</form>
```

**Accessibility considerations:** creating accessible forms ensures all users, including those with disabilities, can interact with and submit forms. Use `<label>` elements to associate text labels with form controls; provide alternative text for images used as form buttons; use semantic HTML elements for grouping related form controls, such as `<fieldset>` and `<legend>`.

## Commonly confused

- **`<div>` vs `<span>`** — `<div>` groups and organises a block of content for styling or scripting (layout with CSS); `<span>` is an **inline** container for styling specific parts of text within a larger element. Test: whole chunk of page (div) or a few words inside a line (span)?
- **Radio buttons vs checkboxes** — radio: one option from **mutually exclusive** choices; checkbox: **one or more** options from a list.
- **"GET" vs "POST"** — GET appends the data to the URL as query parameters; POST sends it in the request body. Test: can you read the values in the address bar? Then it was GET.
- **`href` vs `src`** — `href` is on `<a>` (and `<link>`) and gives the destination of a link; `src` is on `<img>` (and `<script>`) and gives the source file to be embedded.
- **`<head>` vs `<header>`** — `<head>` holds meta-information and is **not visible** to the user; `<header>` is a semantic element inside `<body>` and is visible.
- **`<ol>` vs `<ul>`** — ordered (numbered) vs unordered (bulleted); both contain `<li>` items.
- **`name` vs `id`** — `name` is what is used when the form data is submitted; `id` is a unique identifier, often used with `<label for="...">`.
- **`maxlength` vs `max`** — `maxlength` limits the number of **characters** in a text input; `max` limits the **value** of a numeric input.
- **`<dt>` vs `<dd>`** — inside `<dl>`, `<dt>` is the term and `<dd>` is the definition.
- **`<th>` vs `<td>`** — inside `<tr>`, `<th>` is a table header cell and `<td>` is a table data cell.
- **Internal vs external links** — internal links stay within the same website/domain and can use a relative URL (`about.html`); external links leave the domain and need the complete URL with the protocol (`https://…`).
- **`<strong>` vs `<em>`** — `<strong>` marks strong importance, typically displayed bold; `<em>` emphasises, typically displayed italicised.
