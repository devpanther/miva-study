# CSC_106 — Week 2 Retention Questions

*Introduction to Web Technologies · sit these SEVEN DAYS after the Week 2 session, closed-book.*

## Multiple choice

**1.** SFTP is best described as:
a) A faster version of FTP with no security changes
b) A secure extension of FTP using encryption and strong authentication
c) A protocol for retrieving email from a server
d) An XML-based protocol for web services

**2.** Which markup language is a reformulation of HTML as an XML application?
a) MathML
b) SVG
c) XHTML
d) SGML

**3.** A user reads an email on their phone and it immediately shows as read on their laptop. Which retrieval protocol is in use?
a) SMTP
b) POP3
c) MIME
d) IMAP

**4.** In the domain `admin.example.com`, `example` is the:
a) Second-level domain
b) Top-level domain
c) Subdomain
d) Root domain

**5.** DNSSEC primarily provides:
a) Encryption of all web page content
b) Faster domain name resolution
c) Digital signatures ensuring DNS data integrity and authenticity
d) Automatic backup of DNS records

**6.** Which protocol provides full-duplex, bidirectional communication over a single TCP connection?
a) REST
b) SOAP
c) SMTP
d) WebSocket

**7.** In a RESTful API, which HTTP method is used to update an existing resource?
a) GET
b) POST
c) PUT
d) DELETE

**8.** MIME exists mainly to:
a) Relay outgoing mail between domains
b) Support non-ASCII character sets and attachments in email
c) Map domain names to IP addresses
d) Encrypt email in transit

**9.** Which statement about REST is correct?
a) It is stateless — every request must contain all information needed to process it
b) It requires all messages to be encoded in XML
c) It maintains a persistent connection between client and server
d) It is a protocol rather than an architectural style

**10.** SVG is specifically designed for:
a) Mathematical notations and equations
b) Two-dimensional vector graphics that scale without quality loss
c) Storing hierarchical configuration data
d) Structuring headings and paragraphs on a web page

**11.** `HELO`, `MAIL FROM` and `RCPT TO` are commands belonging to which protocol?
a) IMAP
b) POP3
c) SMTP
d) DNS

**12.** Which is listed as a disadvantage of SOAP compared with REST?
a) It cannot carry attachments
b) It is stateless and therefore insecure
c) It works only over WebSocket connections
d) It is complex and slower than REST

## Short answer

**13.** State two differences between POP3 and IMAP.

**14.** A small Nigerian clinic currently uses plain HTTP for its patient portal and FTP to move patient record files to its backup server. Name the replacement protocol for each and state, in one sentence each, the specific security property gained.

**15.** List the four levels of the DNS hierarchy from highest to lowest, and give the DNS record type that tells the internet which server handles a domain's email.

---

## Answers

**1. b** — SFTP is defined in the week as the secure extension of FTP employing encryption and strong authentication.

**2. c** — XHTML reformulates HTML as an XML application, combining XML's strictness with HTML's familiarity.

**3. d** — IMAP keeps messages on the server and synchronises actions across multiple devices; POP3 would not sync.

**4. a** — `com` is the TLD, `example` the second-level domain, `admin` the subdomain.

**5. c** — DNSSEC adds digital signatures to DNS data for integrity and authenticity, also preventing cache poisoning.

**6. d** — Full-duplex over a single TCP connection is the defining characteristic of WebSocket.

**7. c** — PUT updates data (e.g. `PUT /users/123`); POST creates, GET retrieves, DELETE removes.

**8. b** — MIME extends email format to support character sets other than ASCII plus audio, video, image and application attachments.

**9. a** — Statelessness is REST's first key characteristic; XML-only is SOAP, persistence is WebSocket, and REST is a style not a protocol.

**10. b** — SVG describes 2-D vector graphics that scale without losing image quality.

**11. c** — These are the SMTP commands used to relay a message to the recipient's server.

**12. d** — The slides list SOAP's disadvantages as complexity, being slower than REST, and being less popular in web development.

**13.** (i) POP3 downloads messages to the client device for offline access and typically removes them from the server, whereas IMAP leaves messages stored on the server. (ii) IMAP synchronises actions (read, delete) across multiple devices; POP3 does not.

**14.** HTTP → **HTTPS**, gaining encryption so patient data stays confidential in transit rather than travelling in plaintext. FTP → **SFTP**, gaining encryption plus strong authentication so record files cannot be intercepted or transferred by an unauthenticated party.

**15.** Root domain → Top-Level Domain (TLD) → Second-level domain → Subdomain. The record type for email is the **MX (Mail Exchanger)** record.
