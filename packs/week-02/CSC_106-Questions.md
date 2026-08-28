# CSC_106 — Week 2 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 3, not this week. Notes closed.*

## Multiple choice (12)

**1.** What does HTTPS add to HTTP?
a) Faster page loading only
b) A different set of request methods
c) A TLS/SSL encrypted layer, providing confidentiality, integrity and server authentication
d) Compression of HTML files

**2.** Which set of port numbers is correct?
a) HTTP 80, HTTPS 443, FTP 21, SFTP 22
b) HTTP 8080, HTTPS 843, FTP 22, SFTP 21
c) HTTP 443, HTTPS 80, FTP 20, SFTP 25
d) HTTP 80, HTTPS 445, FTP 23, SFTP 22

**3.** HTTP is described as **stateless**. What does that mean?
a) It cannot transfer files
b) It has no status codes
c) It works without an IP address
d) The server retains no memory of previous requests; each request must carry all the information needed to process it

**4.** Which status code class indicates a **client** error?
a) 2xx  b) 4xx  c) 5xx  d) 3xx

**5.** What is the main security weakness of FTP?
a) It only transfers text files
b) It requires a digital certificate
c) It cannot cross firewalls
d) Data and login credentials are transmitted in plaintext

**6.** SFTP is secure because it:
a) Runs over SSH on port 22, encrypting commands, data and credentials
b) Uses a certificate authority on port 443
c) Compresses files before sending them
d) Uses two separate unencrypted connections

**7.** Which statement correctly distinguishes SFTP from FTPS?
a) They are two names for the same protocol
b) SFTP is FTP with TLS added; FTPS runs over SSH
c) SFTP is file transfer over SSH; FTPS is ordinary FTP with TLS/SSL added
d) SFTP is unencrypted; FTPS is encrypted

**8.** Which statement about FTP connections is correct?
a) It uses a single connection for everything
b) It uses a control connection for commands and a separate data connection for file contents
c) It uses three connections: control, data and authentication
d) It uses UDP only

**9.** What is the key difference between HTML and XML?
a) HTML uses a predefined set of tags to structure web content; XML uses user-defined tags to store and exchange structured data
b) HTML stores data; XML displays web pages
c) XML is a styling language; HTML is a programming language
d) There is no difference; XML is the newer name for HTML

**10.** Which markup language is a reformulation of HTML as an XML application?
a) SVG  b) MathML  c) CSS  d) XHTML

**11.** A user wants their email to remain on the server and stay synchronised across a phone and a laptop. Which protocol?
a) SMTP  b) POP3  c) IMAP  d) MIME

**12.** Which web communication protocol provides full-duplex, persistent, low-latency communication over a single TCP connection?
a) REST  b) WebSocket  c) SOAP  d) SMTP

## Short answer (3)

**13.** State the difference between HTTP and HTTPS, and between FTP and SFTP, giving the port number and security property of each of the four.

**14.** Name the five markup languages covered in the lecture and give the primary use of each in one phrase.

**15.** Compare REST and SOAP: give two key characteristics of each and one advantage and one disadvantage of each.

## Answers

**1. c** — *HTTPS*: HTTP over TLS/SSL; adds encryption, integrity and server authentication via a CA-issued certificate. The methods and statelessness are unchanged.
**2. a** — *ports*: 80 / 443 / 21 / 22. Memorise as a set; SFTP is 22 because it rides on SSH.
**3. d** — *statelessness*: no memory between requests, so every request is self-contained. REST inherits this property from HTTP.
**4. b** — *status classes*: 1xx informational, 2xx success, 3xx redirection, 4xx client error (e.g. 404), 5xx server error.
**5. d** — *FTP security*: everything, including usernames and passwords, travels in plaintext and can be intercepted.
**6. a** — *SFTP*: SSH File Transfer Protocol, encrypted over SSH on port 22 with strong authentication (passwords or key pairs).
**7. c** — *SFTP vs FTPS*: different protocols. SFTP = over SSH, single connection, port 22; FTPS = FTP plus a TLS/SSL layer, still uses FTP's control/data connections and certificates.
**8. b** — *FTP architecture*: control connection on port 21 carries commands and replies; a separate data connection carries the file. Active mode = server connects back to the client; passive mode = client connects to the server.
**9. a** — *HTML vs XML*: fixed tags for presenting web content versus user-defined tags for storing and exchanging data.
**10. d** — *XHTML*: HTML rewritten to XML rules — XML's strictness with HTML's familiarity. (CSS is not a markup language at all.)
**11. c** — *IMAP*: keeps messages on the server and synchronises actions across devices. POP3 downloads and typically deletes from the server; SMTP only sends; MIME only extends message format.
**12. b** — *WebSocket*: full-duplex, bidirectional, persistent single TCP connection, low latency — for live chat, gaming, stock updates.
**13.** *Protocol pairs*: **HTTP** (port 80) transfers web data in plaintext with no security. **HTTPS** (port 443) is HTTP over TLS/SSL, providing encryption, integrity and server authentication by certificate. **FTP** (port 21) transfers files but sends data and credentials in plaintext. **SFTP** (port 22) transfers files over SSH, encrypting commands, data and credentials, with strong authentication.
**14.** *Markup languages*: **HTML** — creating and structuring web content; **XML** — storing and exchanging structured data with user-defined tags; **SVG** — scalable two-dimensional vector graphics (logos, icons, diagrams); **MathML** — representing mathematical notations and equations on the web (XML-based); **XHTML** — HTML reformulated as an XML application for clean, standardised coding.
**15.** *REST vs SOAP*: **REST** — stateless and resource-based, using standard HTTP methods (GET, POST, PUT, DELETE) on URLs; advantage: simplicity and wide adoption; disadvantage: not suited to real-time, limited to request-response. **SOAP** — XML-based messages and a strict protocol with predefined rules for structure and encoding; advantage: data integrity, security features and platform independence; disadvantage: complexity and slower than REST.
