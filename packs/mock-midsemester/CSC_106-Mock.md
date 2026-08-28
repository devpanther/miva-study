# CSC_106 — Mid-semester Mock

*Introduction to Web Technologies · Weeks 1–4 · 45 minutes · notes closed · 24 marks*

Work straight through in **45 minutes** with no notes, no slides and no browser open; one mark per question, 24 marks in total.
Do not read the Answers section until the time is up — then mark Section B **honestly** against the model answers, giving yourself the mark only where you actually wrote the named point.

## Section A — Multiple choice (20)

**1.** One developer writes the page's HTML and CSS; another writes the code that authenticates logins and queries the database. Which statement matches the lecture's split?
a) The first does front-end (user interface and visual aspects); the second does back-end (server operations and databases)
b) The first does back-end (the pages are served by the server); the second does front-end (logins face the user)
c) Both are front-end; back-end refers only to the network hardware and cabling underneath
d) Both are back-end; front-end refers only to graphic design work done outside any code

**2.** A site is moved from `http://` to `https://`. Which statement describes what actually changes?
a) The request methods change from GET and POST to encrypted equivalents of the same names
b) The transport becomes TLS/SSL-encrypted on port 443; methods, status codes and statelessness are unchanged
c) The protocol becomes stateful, so the server now remembers a client's previous requests
d) The address bar gains a padlock, but the data itself still travels across the network in plaintext

**3.** What is wrong with this line?

```html
<a src="contact.html">Contact us</a>
```
a) Nothing — `src` and `href` may be used interchangeably on an `<a>` element
b) The link needs the complete URL including the protocol before it will work at all
c) `src` should be `href` — `href` gives a link's destination, `src` pulls in a file to display
d) `<a>` is a void element, so it must be written without a closing tag as `<a src="contact.html">`

**4.** What colour is the paragraph?

```html
<div class="card">
  <p class="lead">Registration opens Monday.</p>
</div>
```
```css
.lead  { color: crimson; }
div p  { color: navy; }
```
a) navy, because `div p` is written last and the later rule always wins
b) navy, because a two-part selector always outranks a one-part selector
c) crimson, because a class (10) outweighs two element selectors (1 + 1)
d) crimson, because a descendant selector is not allowed to set the `color` property

**5.** In the four-step client–server cycle, what happens immediately after the server retrieves the requested resource?
a) The user enters a URL in the address bar or clicks a link in the browser
b) The browser sends an HTTP request to the appropriate web server
c) The server sends an HTTP response carrying the resource back to the browser
d) The browser renders and displays the received content on the screen

**6.** A firewall is set to allow outbound traffic on ports 443 and 22 only. Which pair of protocols still works?
a) HTTP and FTP
b) HTTPS and SFTP
c) HTTPS and FTP
d) HTTP and SFTP

**7.** A form asks "Which of these languages do you speak?" and the user must be able to pick more than one. Which markup is correct?
a) Several `<input type="radio" name="lang">` controls that share the one `name` value
b) Several `<input type="checkbox" name="lang">` controls, one for each language offered
c) A single `<input type="text" name="lang" multiple>` control that accepts several entries
d) A single `<select name="lang">` with one `<option>` element for each language offered

**8.** What total height does this element occupy on the page?

```css
.box {
  width: 250px;
  height: 80px;
  padding: 15px;
  border: 5px solid red;
  margin: 10px;
}
```
a) 110px
b) 120px
c) 130px
d) 140px

**9.** Which pairing of server type and named example is correct?
a) Nginx — application server
b) Node.js — web server
c) MongoDB — database server
d) Apache — proxy server

**10.** In the domain name `admin.example.com`, which label is the **second-level domain**?
a) `com`
b) `example`
c) `admin`
d) `admin.example`

**11.** How does a browser render this?

```html
<table>
  <tr><th>Course</th><th>Units</th></tr>
  <tr><td>CSC_106</td><td>2</td></tr>
</table>
```
a) One row of two header cells, bold and centred by default, above a row of two ordinary data cells
b) Two columns of four cells, because each `<th>` supplies the heading for a whole column
c) A single row only, because `<td>` cells are ignored unless they are wrapped in a `<th>`
d) Two rows in which every cell is bold, because `<tr>` marks the row as a header row

**12.** A `<p>` sits directly inside `<body>` and has no rules of its own. Which of these does it inherit?

```css
body { color: darkgreen; font-size: 18px; padding: 40px; }
```
a) `color` and `font-size`, but not `padding`
b) All three, because every property passes from parent to child
c) `padding` only, because box properties are the ones that cascade downwards
d) None of them — inheritance happens only where `inherit` is written explicitly

**13.** A team commits locally and stores the repository online. Which statement is correct?
a) Git is the hosting platform; GitHub is the version control system installed on each machine
b) Git is the version control system; GitHub is a hosting and collaboration platform for Git repositories
c) Git and GitHub are one product under two names; GitHub is simply the paid tier of Git
d) Git provides branching and merging while GitHub provides version history, so both are required

**14.** Which list contains **only** markup languages as defined in the lecture?
a) HTML, XML, CSS
b) HTML, SVG, MathML
c) XHTML, JavaScript, XML
d) HTML, CSS, JavaScript

**15.** Which attribute makes a password field refuse anything shorter than 8 characters?
a) `min="8"`
b) `maxlength="8"`
c) `minlength="8"`
d) `required="8"`

**16.** The list below keeps its default background. Why?

```html
<ul class="menu"> ... </ul>
```
```css
#menu { background-color: black; }
```
a) `#` selects an `id` but the list carries a `class`, so the selector should be `.menu`
b) `background-color` is not inherited, so it has to be set on each `<li>` instead
c) A `<ul>` cannot take a background colour; only a `<div>` container can take one
d) The rule is valid, but class-based rules are always overridden by the browser default

**17.** Which pair correctly assigns each function to the browser or the server?
a) Rendering web pages — server; dynamic content generation — browser
b) Rendering web pages — browser; dynamic content generation — server
c) Load balancing — browser; bookmarking and history — server
d) Security — browser only; the server plays no part in security at all

**18.** A laptop mail client is set up with **POP3** behaving as it does by default. The user reads her mail on the laptop, then opens the same account on her phone. What does she find?
a) The messages are on the phone as well, with read and deleted status kept in step
b) The messages downloaded to the laptop are gone from the server, so the phone lacks them
c) The messages reach the phone only once SMTP has relayed each of them a second time
d) The messages reach the phone but every attachment is missing until MIME is switched on

**19.** What does the user see **on the page itself** from this code?

```html
<head>
  <meta charset="UTF-8">
  <title>Exam Results</title>
</head>
```
a) "Exam Results" printed as a heading across the top of the page content
b) Nothing from it — `<head>` holds meta-information; the title shows in the browser tab only
c) "UTF-8" printed above the page content, as the declared character encoding
d) Nothing at all, because the browser ignores everything written inside `<head>`

**20.** Where does `justify-content: center` place the items here?

```css
.stack {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```
a) Centred horizontally, because `justify-content` always works from left to right
b) Centred vertically, because `flex-direction: column` makes the vertical axis the main axis
c) Centred both horizontally and vertically, because `justify-content` centres on both axes
d) Nowhere — `justify-content` is ignored unless `align-items` is given a value as well

## Section B — Short answer (4)

**21.** A student types `https://www.mivastudents.com` into her browser and presses Enter. Set out the **four steps** of the client–server cycle that follow, saying what the **URL** and **HTTP** each contribute, and name which **two server types** would be involved if the page shows her own stored grades.

**22.** A colleague says: "My login page is on plain `http://` and it works fine — the padlock is only decoration." Write a short reply that states what is exposed on HTTP, what exactly HTTPS adds, the **port number** of each, and what a **Certificate Authority** does.

**23.** The snippet below contains **three** faults, one per line. Name each fault, then rewrite the snippet correctly.

```html
<p><strong>Download the timetable</p></strong>
<img src="timetable.png"></img>
<a src="timetable.pdf">Get the PDF</a>
```

**24.** The rule set below contains **three** faults. Name each one and rewrite the CSS correctly, then state what colour `<h2 class="sub">Notice</h2>` ends up and why.

```css
sub {
  color: teal
  font-size: 20px;

h2 { color: maroon; }
```

## Answers

**1. a** — *front-end vs back-end*: front-end is the user interface and visual side; back-end is server-side operations and databases. The split is about **where the code runs**, not about whether a user can see the feature. [Week 1]

**2. b** — *HTTP vs HTTPS*: HTTPS is HTTP layered over TLS/SSL on port 443. Methods, status codes and statelessness are all identical; only the transport is now encrypted, authenticated and integrity-checked. [Week 2]

**3. c** — *`href` vs `src`*: `href` points to where a link **goes** (`<a>`, `<link>`); `src` names a file to be **pulled in and displayed** (`<img>`, `<script>`, `<iframe>`). `<a>` is a paired element, and a relative URL like `contact.html` is perfectly valid for an internal link. [Week 3]

**4. c** — *specificity beats source order*: `.lead` scores 10 (one class); `div p` scores 2 (two element selectors). Specificity is compared **first**, so crimson wins even though `div p` is written later. [Week 4]

**5. c** — *the four-step request cycle*: user enters a URL → browser sends the HTTP request → server processes it, retrieves the resource and sends the HTTP **response** → browser renders and displays. [Week 1]

**6. b** — *the ports as a set*: HTTP 80, HTTPS **443**, FTP 21, SFTP **22** (because it rides on SSH). Only the two secure protocols pass this firewall. [Week 2]

**7. b** — *radio vs checkbox*: checkboxes allow one **or more** selections; radio buttons sharing a `name` are mutually exclusive, and a plain `<select>` picks one. [Week 3]

**8. d** — *box model total height*: 80 (content) + 30 (15 + 15 padding) + 10 (5 + 5 border) + 20 (10 + 10 margin) = **140px**. Every layer is counted on **both** sides. [Week 4]

**9. c** — *the four server types*: MongoDB is a database server; Apache and Nginx are web servers; Node.js is the lecture's example of an application server; proxy servers have no named product in the slides. [Week 1]

**10. b** — *DNS hierarchy*: reading right to left, `com` is the TLD, `example` is the second-level domain, and `admin` is a subdomain of it. [Week 2]

**11. a** — *table parts*: `<tr>` is a row, `<th>` a header cell (bold and centred by default), `<td>` a data cell. Cells sit inside rows; `<th>` styles one cell, it does not define a column. [Week 3]

**12. a** — *inheritance*: text-related properties (`color`, `font-family`, `font-size`, `font-weight`, `line-height`, `text-align`) inherit; box properties (`margin`, `padding`, `border`, `width`, `height`, `background`) do not. [Week 4]

**13. b** — *Git vs GitHub*: Git is the distributed version control system itself; GitHub and GitLab host repositories and support collaboration. All four VCS roles — collaboration, version history, branching and merging, backup — belong to version control, not to the host. [Week 1]

**14. b** — *markup vs styling vs scripting*: the five markup languages are HTML, XML, SVG, MathML and XHTML. CSS is a style sheet language and JavaScript is a scripting language, so neither counts. [Week 2]

**15. c** — *HTML5 validation attributes*: `minlength`/`maxlength` bound **text length**; `min`/`max` bound a **numeric value**; `required` takes no value at all. [Week 3]

**16. a** — *`#id` vs `.class`*: `#` selects the one element with that `id`, `.` selects every element carrying that `class`. The markup uses `class="menu"`, so the selector must be `.menu`. [Week 4]

**17. b** — *browser functions vs server functions*: the browser renders pages, provides the interface, extensions, bookmarks and history; the server handles requests, stores data, generates dynamic content, provides HTTPS security and does load balancing. Both sides have a security role. [Week 1]

**18. b** — *POP3 vs IMAP*: POP3 downloads messages to one device and typically **removes them from the server**, so a second device sees nothing. IMAP is the protocol that leaves mail on the server and synchronises across devices. [Week 2]

**19. b** — *the `<head>` section*: `<head>` content is meta-information and is not rendered in the page. It is read and used — `<title>` supplies the tab/title-bar text and `<meta charset>` sets the encoding — but nothing from it appears in the body area. [Week 3]

**20. b** — *main axis vs cross axis*: `justify-content` works along the **main** axis, and `flex-direction` sets which axis that is. With `column` the main axis is vertical, so the items are centred vertically; `align-items` would then work horizontally. [Week 4]

**21.** *The client–server model and server types* — [Week 1]
1. The student enters the **URL** (the web address specifying the location of the resource) or clicks a link.
2. The browser sends an **HTTP request** to the appropriate web server — HTTP being the protocol for browser–server communication.
3. The server processes the request, retrieves the requested resource, and sends an **HTTP response** back.
4. The browser **renders and displays** the content.
Because the page shows her own stored grades, a **web server** (serving the content and handling the HTTP request) and a **database server** (storing and retrieving the grades) are both involved; an **application server** running the logic that fetches them is also acceptable.

**22.** *HTTP vs HTTPS, TLS and certificates* — [Week 2]
On plain **HTTP** (**port 80**) everything travels in **plaintext**, so the username and password typed into that login page can be read by anyone intercepting the traffic — eavesdropping or a man-in-the-middle attack. **HTTPS** (**port 443**) is the same protocol layered over **TLS** (successor to SSL) and adds three things: **encryption** (confidentiality), **data integrity**, and **authentication** of the server. A **Certificate Authority** issues the server's **digital certificate**, which proves the site is who it claims to be; the padlock is the browser reporting that verified, encrypted connection, not decoration.

**23.** *Nesting, void elements and `href` vs `src`* — [Week 3]
- Line 1: **improper nesting** — the inner `<strong>` must be closed before the outer `<p>`.
- Line 2: `<img>` is a **void element**, so it takes no closing tag, and the required **`alt`** attribute is missing.
- Line 3: an `<a>` link takes **`href`**, not `src`.

```html
<p><strong>Download the timetable</strong></p>
<img src="timetable.png" alt="Semester timetable">
<a href="timetable.pdf">Get the PDF</a>
```

**24.** *Class selector syntax, declaration syntax and specificity* — [Week 4]
- The class selector is missing its **dot**: written bare, `sub` is a type selector looking for a `<sub>` element.
- The declaration `color: teal` is missing its closing **semicolon**, so the browser cannot parse it or the declaration after it.
- The declaration block is missing its closing **brace**, so the `h2` rule is swallowed into it.

```css
.sub {
  color: teal;
  font-size: 20px;
}

h2 { color: maroon; }
```

With the CSS corrected, `<h2 class="sub">Notice</h2>` is **teal**: the class selector scores 10 against the element selector's 1, and specificity is compared before source order.

## What to revise

| Week | Questions | What to re-read |
|---|---|---|
| **Week 1** — The Internet and the WWW | 1, 5, 9, 13, 17, 21 | The four-step client–server cycle in order, the four server types with their named examples, front-end vs back-end, Git vs GitHub, and the split between browser functions and server functions. |
| **Week 2** — Protocols and markup languages | 2, 6, 10, 14, 18, 22 | The port table as a single set (80 / 443 / 21 / 22), what TLS actually adds to HTTP and the CA's role, the DNS hierarchy labels, the five markup languages (CSS and JavaScript are not among them), and POP3 vs IMAP. |
| **Week 3** — HTML | 3, 7, 11, 15, 19, 23 | `href` vs `src`, void elements and their required attributes, correct nesting order, the table elements, radio vs checkbox, the HTML5 validation attributes, and what `<head>` does without being visible. |
| **Week 4** — CSS | 4, 8, 12, 16, 20, 24 | Selector punctuation (`.` class, `#` id), rule syntax faults (semicolon, brace), the specificity weights and that they are checked **before** source order, the four box-model layers counted on both sides, what inherits and what does not, and main axis vs cross axis in flexbox. |
