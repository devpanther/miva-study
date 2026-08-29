# CSC_106 — Mid-semester Mock

*Introduction to Web Technologies · Weeks 1–4 · 45 minutes · notes closed · 24 marks*

**Instructions.** 45 minutes, notes closed — Section A is 20 questions at 1 mark each and Section B is 4 questions at 1 mark each, for 24 marks; do not look at the Answers until the time is up.
Mark Section B honestly against the model answers: code that would not do what was asked scores 0, however close it looks — write down which week each lost mark came from and take that row of the revision table.

---

## Section A — Multiple choice (20)

**1.** A classmate says "the Internet and the World Wide Web are two names for the same thing." Which statement corrects him?
a) The Internet is a system of pages joined by hyperlinks; the Web is the network of cables and computers underneath it.   b) The Internet is the global network infrastructure; the Web is an application of hyperlinked pages that runs on top of it.   c) The Internet is what browsers use; the Web is what servers use.   d) The Internet was introduced by Sir Tim Berners-Lee in 1989; the Web grew out of ARPANET.

**2.** These are the four steps of client–server interaction, listed out of order:

```
(i)   The browser renders and displays the received content.
(ii)  The browser sends an HTTP request to the appropriate web server.
(iii) A user enters a URL or clicks a link in the browser.
(iv)  The server processes the request, retrieves the resource and sends an HTTP response back.
```

Which one is the **third** step?
a) (i)   b) (ii)   c) (iii)   d) (iv)

**3.** A team needs software that executes application-specific code, manages sessions and generates dynamic content for clients; they have chosen Node.js. Which type of server have they chosen?
a) A web server   b) A proxy server   c) An application server   d) A database server

**4.** Which pairing is correct?
a) Git is a hosting platform and GitHub is the version control system that runs on it.   b) VS Code, Sublime Text and Atom are IDEs, while WebStorm is a text editor.   c) Git is the version control system itself; GitHub and GitLab are hosting and collaboration platforms for Git repositories.   d) Browser developer tools are a version control system used for branching and merging.

**5.** Which set names the three advantages of client-server architecture given in the course?
a) Scalability, centralised data management, separation of concerns   b) Encryption, data integrity, server authentication   c) Code collaboration, version history, branching and merging   d) Rendering, bookmarking and history, extensions and plugins

**6.** A site is served over HTTPS and its files are uploaded to the server with SFTP. Which pair of ports is in use?
a) 80 and 21   b) 443 and 22   c) 443 and 21   d) 80 and 22

**7.** Consider this document:

```xml
<invoice>
  <customer>Ada Lovelace</customer>
  <total currency="NGN">4500</total>
</invoice>
```

Which statement about it is correct?
a) It is HTML, because it uses tags and an attribute.   b) It is SVG, because it describes structured two-dimensional data.   c) It is not markup at all, because it has no `<!DOCTYPE>` line.   d) It is XML: the tags are user-defined and its purpose is storing and exchanging structured data.

**8.** Which of these is **not** a markup language?
a) CSS   b) SVG   c) MathML   d) XHTML

**9.** A student reads her mail on both a phone and a laptop, and wants a message she deletes on one device to disappear on the other. Which retrieval protocol should she use, and why?
a) POP3, because it downloads messages to the device and removes them from the server.   b) SMTP, because it sends and relays outgoing mail between servers.   c) IMAP, because it keeps messages on the server and synchronises changes across devices.   d) MIME, because it extends the message format to carry attachments.

**10.** A live chat feature needs both the browser and the server to send messages at any moment over one connection that stays open. Which technology fits, and why?
a) REST, because it is stateless and resource-based.   b) SOAP, because its XML messages follow strict predefined rules.   c) FTP, because it holds a control connection open on port 21.   d) WebSocket, because it is full-duplex over a single persistent connection.

**11.** What does this markup produce?

```html
<table>
  <tr><th>Course</th><th>Units</th></tr>
  <tr><td>CSC_106</td><td>2</td></tr>
</table>
```

a) Two rows: `<th>` marks the two header cells of the first row and `<td>` marks the two data cells of the second.   b) Two rows in which `<td>` marks the header cells and `<th>` marks the data cells.   c) Two columns, because `<tr>` marks a column and each one here holds a single cell.   d) Nothing usable — a table must use `<dt>` and `<dd>` to label its columns.

**12.** A student writes this and the text is not clickable:

```html
<a src="about.html">About us</a>
```

Why does it fail?
a) The anchor text must go inside an attribute, not between the tags.   b) `<a>` needs `href` to give the link's destination; `src` gives the source file for embedded content such as `<img>`.   c) Internal links must give the complete URL including `https://`.   d) The element needs `target="_blank"` before a browser will follow it.

**13.** A user types `html` into this form and presses Go:

```html
<form action="/search" method="GET">
  <input type="text" name="q">
  <button type="submit">Go</button>
</form>
```

Which statement is true?
a) The value is appended to the URL as a query parameter, because GET puts form data in the URL.   b) The value is placed in the request body, where it cannot be seen in the address bar.   c) Nothing is submitted, because the input has no `id`.   d) The form fails, because `enctype="multipart/form-data"` is missing.

**14.** A registration form must let a student pick exactly one of three mutually exclusive study modes. Which markup is correct?
a) Three `<input type="checkbox">` elements sharing one `name`.   b) A single `<textarea>` with `maxlength="1"`.   c) Three `<button type="submit">` elements, one per mode.   d) Three `<input type="radio">` elements sharing the same `name`.

**15.** What is wrong with this document?

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Miva</title>
    <h1>Welcome</h1>
  </head>
  <body></body>
</html>
```

a) `<!DOCTYPE html>` must be placed after the opening `<html>` tag.   b) `<title>` belongs in `<body>`, since the user needs to see it.   c) `<h1>` is visible content and belongs in `<body>`; `<head>` holds meta-information that is not displayed.   d) `<html>` cannot be the root element unless `<head>` comes after `<body>`.

**16.** Given this markup and this rule:

```html
<article>
  <p class="lead">First</p>
</article>
<p class="lead">Second</p>
```

```css
article p { color: red; }
```

Which paragraph turns red?
a) Both of them, because both carry `class="lead"`.   b) Only "First", because a space between two selectors means "descendant of", so it matches a `<p>` inside `<article>`.   c) Only "Second", because the rule matches `<p>` elements that follow an `<article>`.   d) Neither, because the rule would need `article.p` to match a class.

**17.** Using the total-size calculation taught in the course, how much width does this element occupy in total?

```css
.box { width: 200px; padding: 20px; border: 2px solid; margin: 10px; }
```

a) 200px   b) 244px   c) 264px   d) 224px

**18.** The badge below stays as wide as the word "New". Why?

```html
<span class="tag">New</span>
```

```css
.tag { width: 120px; height: 40px; background-color: #FF5733; }
```

a) `<span>` is an inline element by default, and inline elements do not accept `width` and `height`.   b) A class selector cannot set `width`; only an ID selector can.   c) `width` must be declared before `background-color` or it is ignored.   d) `width` only takes effect on elements inside a flex container.

**19.** What does `justify-content: center` do here?

```css
.container { display: flex; flex-direction: column; justify-content: center; }
```

a) Centres the items horizontally, because `justify-content` always works left to right.   b) Centres the items vertically, because it acts on the main axis, and `flex-direction: column` has made the main axis vertical.   c) Nothing — a column layout must use `align-items` instead.   d) Centres the text inside each item, in the way `text-align: center` does.

**20.** A phone has a viewport 480px wide. What `font-size` does the `<h1>` get, and why?

```css
h1 { font-size: 32px; }
@media (max-width: 768px) { h1 { font-size: 18px; } }
```

a) 32px — the media query only takes effect above 768px.   b) 25px — the browser interpolates between the two declared sizes.   c) 32px — a media query cannot override a rule declared earlier for the same element.   d) 18px — `max-width: 768px` applies when the viewport is 768px or less, and 480px qualifies.

## Section B — Short answer (4)

**21.** A student types `https://library.miva.edu.ng/books` and a page listing borrowed books appears. Write out, in order, the four steps of client–server interaction the course specifies, saying what the browser sends and what the server sends back. Then name **two** of the four server types the course lists that would be involved in producing that page, and say what each one does.

**22.** A developer defends a login page: *"Our form posts to `/login` over plain HTTP, but the password field is `<input type="password">` so the characters are hidden — that is secure enough."* Say why this reasoning is wrong, then state the change that fixes it, the port it moves to, and the three things that change gives you.

**23.** Write the markup for a registration form that sends its data to `/register` using the HTTP method suited to sensitive data, contains one labelled email field that the browser will not let the user leave empty, and lets the user attach a CV file. Name the attribute on the `<form>` element that the file upload requires.

**24.** Write the CSS rule that turns `.toolbar` into a flex container laying its items out in a row, pushed to the two ends of the bar with the space between them, and vertically centred. Then say which axis each of those two alignment properties acted on, and write the one extra declaration — saying where it goes — that would make a single item with class `logo` sit at the top of the bar instead of centred.

---

## Answers

**1.** b) — The Internet is the infrastructure (interconnected networks); the Web is an application of hyperlinked pages running on it. **[Week 1]**

**2.** d) — The order is (iii) user enters a URL, (ii) browser sends the HTTP request, (iv) server processes and responds, (i) browser renders; the third is (iv). **[Week 1]**

**3.** c) — Application servers execute application-specific code and generate dynamic content; Node.js is the course's example. **[Week 1]**

**4.** c) — Git is the distributed version control system; GitHub and GitLab host repositories and add collaboration features. **[Week 1]**

**5.** a) — Scalability, centralised data management and separation of concerns; b is HTTPS, c is the role of version control, d is browser functionality. **[Week 1]**

**6.** b) — HTTPS runs on 443 and SFTP on 22, because SFTP runs over SSH. **[Week 2]**

**7.** d) — `<invoice>`, `<customer>` and `<total>` are not HTML tags: user-defined tags describing stored data are the mark of XML. **[Week 2]**

**8.** a) — CSS is a style sheet language for presentation; SVG, MathML and XHTML all annotate content with tags and are markup. **[Week 2]**

**9.** c) — IMAP leaves messages on the server and synchronises changes across devices; POP3 downloads and removes them. **[Week 2]**

**10.** d) — WebSocket gives full-duplex, low-latency communication over one persistent TCP connection; REST is request-response only. **[Week 2]**

**11.** a) — `<tr>` is a row, `<th>` a header cell and `<td>` a data cell; `<dt>`/`<dd>` belong to definition lists, not tables. **[Week 3]**

**12.** b) — `href` gives a link's destination and belongs on `<a>` and `<link>`; `src` names a file to embed and belongs on `<img>` and `<script>`. **[Week 3]**

**13.** a) — GET appends form data to the URL as query parameters, which is why it suits search forms; POST would put it in the request body. **[Week 3]**

**14.** d) — Radio buttons sharing one `name` are the mutually exclusive control; checkboxes allow one *or more* selections. **[Week 3]**

**15.** c) — `<head>` holds meta-information and is not visible; visible content such as `<h1>` belongs in `<body>`. **[Week 3]**

**16.** b) — `article p` is a descendant selector, so it matches only the `<p>` inside `<article>`; the class on both paragraphs is irrelevant to it. **[Week 4]**

**17.** c) — 200 + 40 (padding) + 4 (border) + 20 (margin) = 264px. **[Week 4]**

**18.** a) — `<span>` is inline, so `width` and `height` do not apply; `display: inline-block` would let it stay on the line and still accept them. **[Week 4]**

**19.** b) — `justify-content` always acts on the main axis, and `flex-direction: column` turns the main axis vertical. **[Week 4]**

**20.** d) — `@media (max-width: 768px)` means "768px or less", so a 480px viewport gets the 18px rule. **[Week 4]**

---

**21.** The four steps, in order:

1. The user enters a URL (`https://library.miva.edu.ng/books`) or clicks a link in the browser.
2. The browser sends an **HTTP request** to the appropriate web server.
3. The server processes the request, retrieves the requested resource, and sends an **HTTP response** back to the browser.
4. The browser **renders and displays** the received content to the user.

Two server types involved:

- **Web server** (Apache, Nginx, Microsoft IIS) — handles the incoming HTTP request, locates the resource and delivers the HTML, CSS and JavaScript to the browser.
- **Database server** (MySQL, PostgreSQL, MongoDB) — stores the borrowing records and processes the query that retrieves the list of books.

An **application server** (Node.js) is also accepted as the second type, if described as executing the application code that builds the page dynamically from those records. Full mark needs all four steps in the right order *and* two server types with the right job attached to each.

*Tested: the exact four-step client–server request cycle, and the four server types by function.* **[Week 1]**

**22.** `type="password"` only masks the characters on the screen as they are typed — it does nothing to the data once it leaves the browser. The value is still placed in the request and sent across the network, and plain **HTTP has no security property at all**: everything travels in **plaintext** on **port 80**, so anyone positioned to intercept the traffic (eavesdropping, man-in-the-middle) can read the password. Using POST rather than GET does not rescue it either: POST moves the data from the URL into the request body, but that body is still plaintext under HTTP.

The fix is to serve and submit the form over **HTTPS** — the same HTTP protocol layered over **TLS** (Transport Layer Security, the successor to SSL) — on **port 443**. That gives three things: **encryption** (confidentiality in transit), **data integrity**, and **authentication of the server**, proved by a **digital certificate** issued by a Certificate Authority, which is what puts the padlock in the address bar.

*Tested: HTTP vs HTTPS — that the difference is the encrypted transport underneath, not the form markup — plus the port and the three guarantees.* **[Week 2]**

**23.**

```html
<form action="/register" method="POST" enctype="multipart/form-data">
  <label for="email">Email address</label>
  <input type="email" id="email" name="email" required>

  <label for="cv">Upload your CV</label>
  <input type="file" id="cv" name="cv">

  <button type="submit">Register</button>
</form>
```

The attribute the file upload requires on `<form>` is **`enctype="multipart/form-data"`**.

Award the mark only if all of these are present: `action="/register"`; `method="POST"` (sensitive data goes in the request body, not the URL); `<input type="email">` carrying `required`; a `<label>` whose `for` value matches the input's `id`; `<input type="file">`; and the `enctype`. Losing `required`, or writing `<label for="…">` that points at the `name` instead of the `id`, loses the mark.

*Tested: form `action` and `method`, HTML5 validation with `required`, `type="email"` and `type="file"`, `label for` / `id` pairing, and the `enctype` needed for uploads.* **[Week 3]**

**24.**

```css
.toolbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
```

`justify-content: space-between` acts on the **main axis** — horizontal here, because `flex-direction: row` is in force — and pushes the items to the two ends with the free space distributed between them. `align-items: center` acts on the **cross axis**, which is the perpendicular one, vertical here, so the items sit centred in the height of the bar.

To lift one item out of that centring, put `align-self` on **the item itself**, not on the container:

```css
.logo { align-self: flex-start; }
```

`align-self` overrides the container's `align-items` for that single item, placing it at the start of the cross axis — the top.

Setting `align-self` on `.toolbar`, or reaching for `justify-content` to move one item vertically, scores 0.

*Tested: writing a flex container rule, knowing which axis `justify-content` and `align-items` each act on, and that `align-self` goes on the item to override `align-items`.* **[Week 4]**

## Revision table

| Week | Topic | Questions | Your score |
|---|---|---|---|
| 1 | The Internet vs the World Wide Web; web development front-end/back-end; the client–server model and its four-step cycle; browser and server functions; the four server types; development tools and version control | 1, 2, 3, 4, 5, 21 |  |
| 2 | HTTP and HTTPS; FTP and SFTP; ports; markup languages (HTML, XML, SVG, MathML, XHTML); email protocols; DNS; WebSocket, REST and SOAP | 6, 7, 8, 9, 10, 22 |  |
| 3 | HTML document structure and `<!DOCTYPE html>`; content and semantic elements; tables and definition lists; hyperlinks, `href` and anchor text; web forms, `action` and `method`, input types, validation attributes and file uploads | 11, 12, 13, 14, 15, 23 |  |
| 4 | CSS selector types; the box model and total-size arithmetic; `display` values; Flexbox containers, axes and properties; responsive typography and media queries | 16, 17, 18, 19, 20, 24 |  |
