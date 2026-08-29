# CSC_106 — Week 2

*Introduction to Web Technologies · Week 2 (14–20 Sep 2026)*

*Note on source: the text is full and readable, EXCEPT that every "example" slide (HTML example, XML example, SVG example, MathML example, XHTML example, and the mid-lesson answers) is an image and extracted as nothing. Those code snippets below are reconstructed from the slide titles and standard syntax — flagged where reconstructed. Ligatures were also dropped by the extractor ("dierent" = different, "eicient" = efficient).*

## Most likely to be examined

1. **HTTP vs HTTPS.** HTTP is the basis of web data communication but has no security — data travels in plaintext and is vulnerable to interception. HTTPS is the secure version of HTTP: it adds **encryption**, ensuring confidentiality during transmission.
2. **FTP vs SFTP.** FTP transfers files but lacks encryption; SFTP is a **secure extension of FTP** using encryption **and strong authentication**, and is the preferred choice for secure file transfer.
3. **The five markup languages and what each is for:** HTML (structuring web content), XML (storing/exchanging structured data with user-defined tags), SVG (2-D vector graphics that scale without quality loss), MathML (mathematical notation, XML-based), XHTML (HTML reformulated as an XML application — XML's strictness + HTML's familiarity).
4. **Email protocols split by direction:** SMTP **sends/relays outgoing** mail; POP3 and IMAP **retrieve** mail. POP3 downloads to the device (offline access, messages typically removed from server); IMAP keeps messages **on the server** and synchronises actions across devices. MIME extends message format for non-ASCII characters and attachments (audio, video, images, applications).
5. **DNS purpose and hierarchy.** DNS converts human-readable domain names (www.example.com) into IP addresses (192.0.2.1). Hierarchy: **Root domain → TLD → Second-level domain → Subdomain**. For `admin.example.com`: `com` = TLD, `example` = second-level, `admin` = subdomain. gTLD = generic TLD (.com); ccTLD = country-code TLD (.uk).
6. **DNSSEC.** Domain Name System Security Extensions — adds **digital signatures** to DNS data for **integrity and authenticity**, and prevents **cache poisoning** attacks. DNS servers must also mitigate DDoS attacks.
7. **WebSocket vs REST vs SOAP.** WebSocket = full-duplex, bidirectional, persistent, low-latency over a single TCP connection (chat, gaming, live updates). REST = stateless, resource-based architectural style using standard HTTP methods. SOAP = strict XML-based protocol for web services (enterprise/legacy, high security, complex, slower).
8. **REST verb-to-action mapping:** GET retrieves, POST creates, PUT updates, DELETE removes — mapped onto CRUD (Create, Read, Update, Delete).

## Definitions and key terms

- **HTTP** — HyperText Transfer Protocol. Foundation of web data communication; no built-in security.
- **HTTPS** — HTTP Secure. HTTP plus encryption; provides confidentiality/data protection.
- **FTP** — File Transfer Protocol. Transfers files; unencrypted.
- **SFTP** — Secure File Transfer Protocol. Secure extension of FTP; encryption + strong authentication.
- **Markup language** — a standardized way to format and describe data or documents, making them machine-readable and human-understandable; "the backbone of structured content presentation".
- **HTML** — HyperText Markup Language. Standard language for creating/structuring web content using **elements, tags and attributes**; defines headings, paragraphs, lists, links, images, forms.
- **XML** — eXtensible Markup Language. Versatile language for storing, exchanging and representing structured data using **user-defined tags**. Used in web services, configuration files, RSS feeds.
- **SVG** — Scalable Vector Graphics. Markup for two-dimensional vector graphics; scales without losing image quality. Used for logos, icons, illustrations, interactive diagrams.
- **MathML** — Mathematical Markup Language. XML-based, for mathematical notations and equations on the web.
- **XHTML** — Extensible HyperText Markup Language. HTML reformulated as an XML application; enforces clean, well-structured, standardized coding.
- **SMTP** — Simple Mail Transfer Protocol. Sends and **relays** outgoing mail between servers/domains.
- **POP3** — Post Office Protocol version 3. Retrieval protocol; downloads mail to the client device for **offline access**.
- **IMAP** — Internet Message Access Protocol. Retrieval protocol; keeps mail on the server and **synchronises** changes across devices.
- **MIME** — Multipurpose Internet Mail Extensions. Extends email format for non-ASCII character sets and attachments; handles message formatting (rich text/HTML), multimedia and character encoding.
- **DNS** — Domain Name System. Maps domain names to IP addresses; also supports **reverse DNS lookup** (IP → domain).
- **Domain name resolution** — the process of translating a human-readable domain name into an IP address.
- **DNS servers / Resolvers / Authoritative servers** — servers store records and answer queries (recursive, authoritative, root); resolvers are client-side software that initiate queries and process responses; authoritative servers hold the records for specific domains.
- **MX record** — Mail Exchanger record; a DNS record specifying the email servers for a domain.
- **TLD / gTLD / ccTLD** — Top-Level Domain; generic (.com, .org, .net); country-code (.uk).
- **DNSSEC** — Domain Name System Security Extensions.
- **DDoS** — Distributed Denial of Service.
- **WebSocket** — protocol giving full-duplex, bidirectional channels over a single **TCP** connection, for real-time interactive applications.
- **REST** — Representational State Transfer. An **architectural style** and set of constraints, not a protocol; stateless, resource-based, uses HTTP.
- **URL** — Uniform Resource Locator (REST models resources as URLs).
- **SOAP** — Simple Object Access Protocol. XML-message-based protocol for web services; strict, platform-independent, complex.
- **CRUD** — Create, Read, Update, Delete.
- **TCP** — Transmission Control Protocol (the connection WebSocket runs over).

## Syntax, protocols and components introduced

| Item | Form / example |
|---|---|
| HTML element (reconstructed) | `<h1>Heading</h1>` `<p>Paragraph</p>` `<a href="https://example.com">Link</a>` |
| HTML structure (reconstructed) | `<html><head><title>…</title></head><body>…</body></html>` |
| XML user-defined tags (reconstructed) | `<books><book><title>…</title><author>…</author><price>…</price></book></books>` |
| SVG (reconstructed) | `<svg width="100" height="100"><circle cx="50" cy="50" r="40"/></svg>` |
| MathML (reconstructed) | `<math><mfrac><mi>a</mi><mi>b</mi></mfrac></math>` |
| SMTP commands (named in slides) | `HELO`, `MAIL FROM`, `RCPT TO`, then message content |
| REST endpoints (from slides) | `GET /users`, `POST /users`, `PUT /users/123`, `DELETE /users/123` |
| DNS hierarchy | Root → TLD (`com`) → second-level (`example`) → subdomain (`admin`) |
| Protocol list to memorise | HTTP, HTTPS, FTP, SFTP, SMTP, POP3, IMAP, MIME, DNS, DNSSEC, WebSocket, REST, SOAP |

## Commonly confused

- **HTTP vs HTTPS** — If the data is encrypted in transit, it is HTTPS; plaintext = HTTP.
- **FTP vs SFTP** — SFTP adds encryption *and* strong authentication; FTP has neither.
- **HTML vs XHTML** — XHTML must obey XML rules (every tag closed, lowercase, well-formed); HTML tolerates sloppiness.
- **HTML vs XML** — HTML has a fixed set of tags for *presenting* content; XML has user-defined tags for *describing/storing* data.
- **POP3 vs IMAP** — If deleting on your phone also deletes it on your laptop, it is IMAP; POP3 downloads and leaves each device isolated.
- **SMTP vs POP3/IMAP** — SMTP is outbound (sending/relaying); POP3 and IMAP are inbound (retrieval).
- **MIME vs SMTP** — MIME defines the message *format* (attachments, encoding); SMTP defines the *transport*.
- **REST vs SOAP** — REST is an architectural style riding on HTTP methods; SOAP is a strict protocol whose messages must be XML.
- **REST vs WebSocket** — REST is request–response and stateless; WebSocket holds a persistent full-duplex connection for real-time push.
- **DNS vs DNSSEC** — DNS resolves names to IPs; DNSSEC only adds digital signatures proving those answers are authentic.
- **TLD vs second-level domain** — In `example.com`, `com` is the TLD (rightmost label), `example` is second-level.
