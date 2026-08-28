# CSC_106 — Mid-semester Mock (Weeks 1–4)

*Introduction to Web Technologies · Weeks 1–4 · **40 minutes** · Closed book · 35 marks total. Sit this in one unbroken 40-minute sitting exactly as you would sit the real mid-semester test — no notes, no pausing to look things up — and mark your answers only once the 40 minutes are over.*

## Section A — Multiple choice (20 questions, 1 mark each)

**1.** A student says: "I used Git to track changes to my project, then pushed it to GitHub so my teammate could see it." Which statement correctly describes the roles of Git and GitHub here?

A. Git and GitHub are two names for the same hosting platform
B. Git is the version control system that tracks changes; GitHub is a hosting and collaboration platform for Git repositories
C. GitHub is the version control system; Git is the hosting platform
D. Git only works when GitHub is installed and cannot function without it

**2.** Which DNS security mechanism adds digital signatures to DNS data to protect its integrity and authenticity, and helps prevent cache poisoning?

A. HTTPS
B. DNSSEC
C. MIME
D. TLS

**3.**
```html
<!-- TODO: replace placeholder image before launch -->
<img src="placeholder.jpg" alt="Product photo">
```
What effect does the first line have on the page as rendered in a browser?

A. It displays as a small tooltip when the visitor hovers over the image
B. It has no visible effect at all — comments are not displayed or executed by the browser
C. It prevents the `<img>` element below it from loading
D. It is shown as plain text above the image

**4.** Which of the following is listed as a server function rather than a browser function?

A. Bookmarking and history
B. Rendering web pages
C. Dynamic content generation
D. Extensions and plugins

**5.** Ada composes an email on her laptop and sends it to Chidi. Which protocol carries the message from Ada's mail client to the mail server that will relay it onward?

A. POP3
B. IMAP
C. SMTP
D. MIME

**6.**
```html
<ol>
  <li>Register</li>
  <li>Verify email</li>
  <li>Login</li>
</ol>
```
How will a browser display these three items?

A. As a bulleted (unordered) list
B. As a numbered list: 1. Register, 2. Verify email, 3. Login
C. As plain inline text with no markers
D. As three separate paragraphs with no list markers at all

**7.** Which best distinguishes an IDE from a plain text editor, as covered this week?

A. A text editor bundles debugging, compiling and project-management features that an IDE lacks
B. An IDE bundles editing together with debugging and other development features, while a text editor stays lightweight for writing and editing code
C. There is no meaningful difference between the two terms
D. A text editor can only be used for HTML files, while an IDE supports every language

**8.**
```css
.tag {
  display: inline-block;
  width: 80px;
  height: 24px;
}
```
Why might a developer choose `inline-block` over plain `inline` for `.tag`?

A. `inline-block` removes the element from the normal page flow entirely
B. `inline-block` keeps the element sitting within the text flow while still allowing its `width` and `height` to be set
C. `inline-block` forces the element onto its own line, exactly like `block`
D. `inline` and `inline-block` behave identically, so the choice makes no difference

**9.** In the domain name `billing.northwind.com`, which part is the second-level domain?

A. `.com`
B. `northwind`
C. `billing`
D. The whole string is the second-level domain

**10.** A development team needs software that will execute their custom booking logic on the server, not just deliver static HTML files. Which type of server, as named this week, do they need?

A. Web server
B. Application server
C. Proxy server
D. Database server

**11.**
```html
<input type="radio" name="plan" value="basic"> Basic
<input type="radio" name="plan" value="pro"> Pro
```
Because both radio inputs share `name="plan"`, what behaviour results when a user interacts with them?

A. Both can be selected at the same time
B. Only one of the two can be selected at a time — selecting one automatically deselects the other
C. The browser rejects the form because of the duplicate `name`
D. The second radio button is disabled and cannot be clicked

**12.**
```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
```
What layout does this rule produce?

A. Three equal-width columns, with 20px gaps between grid items
B. Three rows of equal height, stacked vertically
C. A single column, repeated three times down the page
D. Three columns where the first is three times wider than the other two

**13.** A browser needs to fetch a website's home page over a normal, non-secure connection. Which correctly names both the component that starts the exchange and the protocol/port it uses?

A. The server initiates the exchange, using HTTPS on port 443
B. The client (browser) initiates the exchange, using HTTP on port 80
C. The database server initiates the exchange, using FTP on port 21
D. The proxy server initiates the exchange, using SFTP on port 22

**14.** A team is building a simple API where clients send GET, POST, PUT and DELETE requests to URLs like `/users` and `/users/123`, with no session state kept between requests. Which architectural style does this describe?

A. SOAP
B. WebSocket
C. REST
D. FTP

**15.**
```html
<article>
  <h2>Why Semantic HTML Matters</h2>
  <p>Search engines and screen readers rely on meaningful structure...</p>
</article>
```
What advantage does wrapping this blog post in `<article>` give over wrapping the identical content in a plain `<div>`?

A. It makes the text render in bold automatically
B. It conveys meaning about the content's structure to browsers, assistive technology and search engines, which a `<div>` does not
C. It prevents the content from being styled with CSS
D. It forces the browser to load this content before the rest of the page

**16.**
```css
.panel {
  width: 150px;
  padding: 10px;
  border: 5px solid #333;
  margin: 15px;
}
```
What is the total horizontal space, in pixels, that `.panel` occupies on the page, including its margin?

A. 150px
B. 180px
C. 210px
D. 190px

**17.**
```html
<link rel="stylesheet" href="https://cdn.example.com/style.css">
```
This line sits in the `<head>` of an HTML document. Over which port does the browser fetch `style.css`?

A. 21
B. 80
C. 443
D. 22

**18.**
```html
<p class="intro" id="lead">Welcome to the course.</p>
```
```css
.intro { color: blue; }
#lead { color: green; }
```
What colour will the paragraph's text render?

A. Blue, because class selectors are always applied after ID selectors
B. Green, because an ID selector has higher specificity than a class selector
C. The browser will refuse to render the paragraph because the rules conflict
D. Blue, because `.intro` appears first in the stylesheet

**19.**
```html
<nav>
  <a href="/">Home</a>
</nav>
```
```css
a { color: black; }
nav a { color: white; }
```
Which colour does the "Home" link display, and why?

A. Black, because a plain type selector always overrides a descendant selector
B. White, because `nav a` is a more specific descendant selector than the plain type selector `a`
C. Black, because `nav a` only styles the `<nav>` element itself, not the link inside it
D. The browser applies both rules and shows the text in a mixed colour

**20.** A user clicks "Submit" on `<form action="/register" method="post">`. According to the client–server cycle covered this course, what is the very next step after the browser packages the form data?

A. The browser renders and displays the previous page again
B. The browser sends an HTTP request, carrying the POST data, to the server named in `action`
C. The server renders the form on the user's screen
D. The form data is written directly to the server's database with no request involved

## Section B — Structured questions (3 questions, 5 marks each)

**21.** A team is building an early prototype of a course-registration website for MIVA students and must explain how it works to a non-technical partner.

(a) Describe, in the correct order, the four steps of the client–server request–response cycle that occur when a student clicks "View Course List" on the site. *(2 marks)*

(b) The partner wants the login page served securely rather than over plain HTTP. Name the protocol and port number that should be used instead, and state two guarantees it provides over HTTP. *(2 marks)*

(c) The registration office also needs to transfer large scanned transcripts to the web server every week and wants this done securely. Name the appropriate protocol for this and explain, in one sentence, why it is more secure than FTP. *(1 mark)*

**22.** A junior developer wrote the registration form below. It loads and displays fine, but three things about it are broken.

```html
<form action="/register" method="get">
  <input type="text" placeholder="Full name">
  <input type="password" placeholder="Choose a password">
  <input type="file" name="cv">
  <button>Register</button>
</form>
```

(a) Identify three distinct errors in this form and explain, for each, the practical consequence of leaving it unfixed. *(3 marks)*

(b) Rewrite the `<form>` element correctly, fixing all three errors. *(1 mark)*

(c) Once submitted, which type of server (from the four types named in Week 1) will typically execute the code that processes this registration data? *(1 mark)*

**23.** (a) Write a single CSS rule for the class `.toolbar` that satisfies all of the following, using only properties covered this course:
- lays its children out in a single horizontal row with equal space between them (not bunched at either edge)
- vertically centres its children within the toolbar's height
- gives the toolbar 12px of padding on all sides, a 1px solid `#cccccc` border, and a 20px margin on all sides

*(3 marks)*

(b) Given the rule you wrote, if the toolbar's content width is fixed at 300px, what is the total horizontal space it occupies on the page, including padding, border and margin? Show your arithmetic. *(1 mark)*

(c) This page is served over HTTPS. Which port number is the connection using? *(1 mark)*

## Marking scheme

**1. B** — *Week 1, Git vs GitHub*: Git is the version-control system itself; GitHub (and GitLab) are hosting/collaboration platforms built around Git repositories.

**2. B** — *Week 2, DNS security*: DNSSEC adds digital signatures to DNS records for integrity and authenticity, and helps defend against cache poisoning.

**3. B** — *Week 3, HTML comments*: `<!-- ... -->` is stripped from the rendered page entirely; it is a note for developers only, invisible and inert to the browser.

**4. C** — *Week 1, browser vs server functions*: dynamic content generation is a server function; rendering, bookmarking/history and extensions/plugins are all listed as browser functions.

**5. C** — *Week 2, email protocols*: SMTP sends and relays outgoing mail from client to server. POP3/IMAP are retrieval protocols; MIME only extends message format.

**6. B** — *Week 3, ordered vs unordered lists*: `<ol>` renders a numbered list (1., 2., 3. …), unlike `<ul>`, which renders bullets.

**7. B** — *Week 1, text editor vs IDE*: an IDE bundles editing with debugging and other development features; a text editor stays lightweight.

**8. B** — *Week 4, `display: inline-block`*: it stays in the text flow like `inline` but, unlike `inline`, accepts an explicit `width`/`height`.

**9. B** — *Week 2, DNS hierarchy*: reading `billing.northwind.com` as subdomain → second-level domain → TLD, `northwind` is the second-level domain, `.com` is the TLD, `billing` is the subdomain.

**10. B** — *Week 1, server types*: an application server executes application-specific code (e.g. Node.js); a web server only serves content and handles HTTP.

**11. B** — *Week 3, radio button grouping*: inputs sharing one `name` form a mutually-exclusive group — selecting one deselects any other with the same `name`.

**12. A** — *Week 4, CSS Grid*: `grid-template-columns: 1fr 1fr 1fr` creates three equal-width columns; `gap: 20px` spaces them 20px apart.

**13. B** — *Weeks 1 & 2, client role + HTTP port*: the client (browser) always initiates the request; a plain, non-secure page fetch uses HTTP on port 80.

**14. C** — *Week 2, REST*: stateless, resource-based, standard-HTTP-methods-on-URLs is the definition of REST; SOAP is XML-message-based, WebSocket is persistent/full-duplex, FTP is unrelated.

**15. B** — *Week 3, semantic elements*: `<article>` signals self-contained, distributable content to assistive technology and search engines; a `<div>` carries no such meaning even with identical visual output.

**16. C** — *Week 4, box model arithmetic*: 150 (content) + 20 (10+10 padding) + 10 (5+5 border) + 30 (15+15 margin) = 210px. (B drops the margin; D drops the padding.)

**17. C** — *Weeks 2 & 4, protocol/port + external stylesheet*: the `href` uses `https://`, so the browser fetches the stylesheet over HTTPS, port 443, regardless of what protocol served the HTML page itself.

**18. B** — *Week 4, selector specificity*: an ID selector (`#lead`) is more specific than a class selector (`.intro`), so its declaration wins regardless of source order.

**19. B** — *Weeks 3 & 4, semantic element + descendant selector*: `nav a` is a two-part descendant selector, more specific than the single-element selector `a`, so it wins and the link renders white.

**20. B** — *Weeks 1 & 3, request cycle + form submission*: clicking submit triggers the browser to send an HTTP request (carrying the POST body) to the URL in `action` — the second step of the client–server cycle.

**21.**
(a) *Week 1 — client–server cycle (2 marks).* Full marks for all four steps in order: 1) the student clicks the link/enters the URL; 2) the browser sends an HTTP request to the server; 3) the server processes the request and sends back an HTTP response; 4) the browser renders and displays the received content. 1 mark for the steps present but out of order or one step missing.
(b) *Week 2 — HTTPS (2 marks).* 1 mark for naming HTTPS and port 443. 1 mark for any two of: encryption/confidentiality of data in transit, data integrity, authentication of the server via a CA-issued digital certificate.
(c) *Week 2 — SFTP vs FTP (1 mark).* SFTP — it encrypts commands, data and login credentials together over a single SSH connection (port 22), whereas FTP sends files and credentials in plaintext over separate connections.

**22.**
(a) *Week 3 — form debugging (3 marks, 1 each).*
  - `method="get"` is used on a form containing a password: the password would be appended to the URL in full view, exposed in browser history and server logs, instead of hidden in the request body.
  - The text and password `<input>` elements have no `name` attribute: without a `name`, that field's value is not included in the submitted data at all.
  - The `<form>` has no `enctype="multipart/form-data"`: the file chosen in the `type="file"` input will not upload correctly.
(b) *Week 3 — corrected markup (1 mark).* Any equivalent fix, e.g.:
```html
<form action="/register" method="post" enctype="multipart/form-data">
  <input type="text" name="fullname" placeholder="Full name">
  <input type="password" name="password" placeholder="Choose a password">
  <input type="file" name="cv">
  <button>Register</button>
</form>
```
(c) *Week 1 — server types (1 mark).* An application server (e.g. Node.js) — it executes the application-specific logic that processes submitted data, unlike a web server, which only serves files.

**23.**
(a) *Week 4 — Flexbox + box model to spec (3 marks).* 1 mark for `display: flex;`; 1 mark for `justify-content: space-between;`; 1 mark for `align-items: center;` together with correct `padding: 12px;`, `border: 1px solid #cccccc;` and `margin: 20px;` (award this third mark only if all three box-model declarations are correct). Example:
```css
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border: 1px solid #cccccc;
  margin: 20px;
}
```
(b) *Week 4 — box model arithmetic (1 mark).* 300 (content) + 24 (12+12 padding) + 2 (1+1 border) + 40 (20+20 margin) = **366px**.
(c) *Week 2 — HTTPS port (1 mark).* 443.

## How to read your score

Add up your marks against the week label on each marking-scheme entry — Section A splits evenly, 5 marks per week (some questions span two weeks and count toward both); Section B contributes roughly Week 1: 3, Week 2: 4, Week 3: 4, Week 4: 4. Overall week totals: **Week 1 ≈ 8, Week 2 ≈ 9, Week 3 ≈ 9, Week 4 ≈ 9**, out of 35.

- **30–35 (86%+):** Strong across all four weeks. You're ready to move on to Week 5 material without revisiting this block.
- **24–29 (69–85%):** Solid overall, but tally your marks per week — whichever week's questions you lost the most marks on is the one to reread in its `CSC_106-Summary.md` before the real exam.
- **18–23 (51–68%):** A pass, but with real gaps. Go back to the "Commonly confused" section of every week where you scored below half its marks — most of Sections A and B are built directly from those confusions.
- **Below 18 (under 51%):** Treat this as a signal to restart Weeks 1–4, not patch individual questions. Re-read all four summaries in order, redo the four weekly question sets, then retake this mock before touching Week 5.
