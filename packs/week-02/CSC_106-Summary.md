# CSC_106 — Week 2 Summary

*Introduction to Web Technologies · Week 2 (14–20 Sep 2026) · Topics: HTTP and HTTPS, FTP and SFTP, web development protocols and markup languages*

## The 8 most examinable things this week

1. **HTTP is insecure, HTTPS is HTTP + TLS/SSL encryption.** HTTP sends data in plaintext; HTTPS encrypts it, so data stays confidential in transit. This is the headline distinction of the week.
2. **FTP is insecure, SFTP is secure.** FTP transfers files but sends data *and login credentials* in plaintext; SFTP is the secure alternative, using encryption and strong authentication.
3. **The ports**: HTTP **80**, HTTPS **443**, FTP **21** (control), SFTP **22** (because it runs over SSH). Learn these as a set.
4. **Acronym expansions**, asked verbatim: HTTP = HyperText Transfer Protocol; HTTPS = HyperText Transfer Protocol Secure; FTP = File Transfer Protocol; SFTP = SSH File Transfer Protocol; HTML = HyperText Markup Language; XML = eXtensible Markup Language.
5. **HTML vs XML**: HTML has a *fixed, predefined* set of tags and structures/presents web content; XML uses *user-defined* tags and stores/exchanges structured data.
6. The **five markup languages** named: HTML, XML, SVG, MathML, XHTML — and what each is for.
7. The **email protocols**: SMTP **sends**; POP3 **downloads** (offline, removed from server); IMAP **synchronises** (stays on server); MIME extends messages to carry attachments and non-ASCII text.
8. **WebSocket vs REST vs SOAP**: WebSocket = full-duplex, persistent, real-time; REST = stateless, resource-based, uses HTTP methods; SOAP = XML-based, strict, complex.

## HTTP (HyperText Transfer Protocol)

The foundation of data communication on the web — the request/response protocol between browser (client) and web server. **Port 80.**

- **Stateless**: the server keeps no memory of previous requests; each request must carry all information needed to process it.
- **Methods**: **GET** (retrieve), **POST** (create/submit), **PUT** (update), **DELETE** (remove). Also HEAD, PATCH, OPTIONS.
- **Status code classes**: **1xx** informational, **2xx** success (200 OK), **3xx** redirection (301, 304), **4xx** client error (404 Not Found), **5xx** server error (500).
- **Security property: none.** Data travels in plaintext and is vulnerable to interception (eavesdropping, man-in-the-middle).

## HTTPS (HyperText Transfer Protocol Secure)

HTTP layered over **TLS** (Transport Layer Security, successor to **SSL**, Secure Sockets Layer). **Port 443.**

- Provides **encryption** (confidentiality), **data integrity**, and **authentication** of the server.
- Uses a **digital certificate** issued by a **Certificate Authority (CA)** to prove the server's identity; the browser shows the padlock.
- Same methods, status codes and statelessness as HTTP — the *only* change is the secure transport underneath.

## FTP (File Transfer Protocol)

The standard protocol for transferring files between a client and a server. **Port 21.**

- Uses **two connections**: a **control connection** (port 21) for commands and replies, and a separate **data connection** for the actual file contents.
- **Active mode**: the server opens the data connection back to the client (from port 20). **Passive mode**: the server opens a port and the client connects to it — passive works through client-side firewalls and NAT.
- **Security property: none.** Files *and* usernames/passwords are sent in **plaintext**.

## SFTP (SSH File Transfer Protocol)

A secure file transfer protocol that runs **over SSH (Secure Shell)** on **port 22**.

- Encrypts both **commands and data**, including credentials, over a **single connection**.
- Supports **strong authentication** — passwords or SSH key pairs.
- **SFTP vs FTPS**: SFTP is a *different protocol* tunnelled over SSH (one connection, port 22). **FTPS** is ordinary *FTP with TLS/SSL bolted on* (still port 21 for explicit FTPS, plus separate data connections, and it needs certificates). SFTP is the preferred choice.

## Ports to memorise

| Protocol | Port | Secure? |
|---|---|---|
| HTTP | 80 | No |
| HTTPS | 443 | Yes (TLS/SSL) |
| FTP | 21 (control) | No |
| SFTP | 22 (over SSH) | Yes |
| SSH | 22 | Yes |
| SMTP | 25 | No (587/465 for secure submission) |
| POP3 | 110 | No (995 secure) |
| IMAP | 143 | No (993 secure) |
| DNS | 53 | — |

## Markup languages

**Markup languages** provide a standardised way to format and describe data or documents, making them **machine-readable and human-understandable**. They are the backbone of structured content presentation.

- **HTML (HyperText Markup Language)** — the standard language for creating and structuring web content; defines layout and presentation using **elements, tags and attributes** (headings, paragraphs, lists, links, images, forms).
- **XML (eXtensible Markup Language)** — versatile language for **storing, exchanging and representing structured data** using **user-defined tags**. Used for hierarchical data storage, data interchange between applications, web services, configuration files, RSS feeds.
- **SVG (Scalable Vector Graphics)** — describes **two-dimensional vector graphics** that scale without loss of quality: logos, icons, illustrations, interactive diagrams.
- **MathML (Mathematical Markup Language)** — **based on XML**; represents mathematical notations and equations on the web (educational sites, scientific publications).
- **XHTML (Extensible HyperText Markup Language)** — **reformulates HTML as an XML application**, combining XML's strictness with HTML's familiarity for clean, well-structured, standardised coding.

**Not markup languages**: **CSS** is a *style sheet* language (presentation/styling) and **JavaScript** is a *programming/scripting* language (behaviour). Only languages that annotate content with tags to describe structure count as markup.

## Email protocols

- **SMTP (Simple Mail Transfer Protocol)** — **sends and relays outgoing** mail from the sender's client/server to the recipient's server. Commands: HELO, MAIL FROM, RCPT TO. Relaying moves messages between domains.
- **POP3 (Post Office Protocol version 3)** — **retrieval**; **downloads** messages to the client device and typically **removes them from the server**. Suits offline access on a single device.
- **IMAP (Internet Message Access Protocol)** — **retrieval**; **keeps messages on the server** and **synchronises** changes (read, delete) across multiple devices.
- **MIME (Multipurpose Internet Mail Extensions)** — extends the email format to support **non-ASCII character sets** and **attachments** (audio, video, images, applications); handles message formatting, multimedia support and character encoding.

## DNS (Domain Name System)

Converts human-readable **domain names** (www.example.com) into **IP addresses** (192.0.2.1) — this is **domain name resolution**. Also supports **reverse DNS lookup** (IP → domain name).

**Hierarchy**: **root domain** → **TLDs** (gTLDs like .com, ccTLDs like .uk) → **second-level domains** (example.com) → **subdomains** (admin.example.com). In `admin.example.com`: "com" = TLD, "example" = second-level domain, "admin" = subdomain.

**Other components**: **DNS servers** (recursive, authoritative, root) store records and answer queries; **resolvers** on client devices initiate queries; **authoritative servers** hold the records for a specific domain.

**Security**: **DNSSEC (DNS Security Extensions)** adds **digital signatures** to DNS data for **integrity and authenticity**, and helps prevent **cache poisoning**. DNS servers must also be hardened against **DDoS** attacks.

**In navigation**: website access, email delivery (via **MX / Mail Exchanger records**), and service discovery.

## Web communication protocols

- **WebSocket** — **full-duplex, bidirectional** communication over a **single, persistent TCP connection**. Low latency; both sides can send simultaneously without repeated HTTP requests. Used for live chat, online gaming, stock updates. *Disadvantage*: not suitable for all applications, may need extra server support.
- **REST (Representational State Transfer)** — an **architectural style**, not a protocol. **Stateless** (each request carries everything needed), **resource-based** (resources modelled as URLs), uses standard HTTP methods: GET /users, POST /users, PUT /users/123, DELETE /users/123. Used for APIs and CRUD operations. *Advantages*: simplicity, statelessness, HTTP compatibility. *Disadvantage*: not ideal for real-time; limited to request-response.
- **SOAP (Simple Object Access Protocol)** — a **protocol** using **XML-based messages** with strict, predefined rules for structure and encoding; platform-independent and self-descriptive. Used in legacy and enterprise systems needing high security and reliability. *Disadvantages*: complexity, slower than REST, less popular.

## Commonly confused

- **HTTP vs HTTPS** — same protocol; HTTPS adds a TLS/SSL encrypted layer and a server certificate. Port 80 vs 443.
- **FTP vs SFTP** — FTP sends files and credentials in plaintext on port 21 with separate control and data connections; SFTP encrypts everything over SSH on port 22 in a single connection.
- **SFTP vs FTPS** — SFTP = file transfer *over SSH*; FTPS = *FTP with TLS/SSL* added. Different protocols, not synonyms.
- **HTML vs XML** — HTML: fixed tags, presents/structures web pages. XML: user-defined tags, stores and exchanges data. XHTML is HTML rewritten to XML rules.
- **POP3 vs IMAP** — POP3 downloads and removes (offline, one device); IMAP leaves on the server and syncs (many devices).
- **REST vs SOAP** — REST is a stateless architectural style over HTTP; SOAP is a strict XML messaging protocol.
- **Markup vs styling vs scripting** — HTML/XML/SVG/MathML/XHTML are markup; CSS styles; JavaScript scripts behaviour.
