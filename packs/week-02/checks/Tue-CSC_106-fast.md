# Tuesday — CSC_106 fast-hour check

*Web protocols, the five markup languages, DNS, and REST versus SOAP and WebSocket.*
*12 questions, straight after the hour. Score out of 12.*

**1.** In the domain name `blog.shop.example.org`, which label is the second-level domain?
A. org
B. example
C. shop
D. blog

**2.** Which line is accepted as HTML but is not well-formed XHTML?

```html
1  <p>One</p>
2  <img src="a.png" alt="A" />
3  <p>Two<br>Three</p>
4  <em>Four</em>
```
A. Line 3
B. Line 2
C. Line 1
D. Line 4

**3.** An XML parser rejects this document. Which line causes the error?

```xml
1  <library>
2    <book>
3      <title>Purple Hibiscus</Title>
4    </book>
5  </library>
```
A. Line 1
B. Line 2
C. Line 3
D. Line 4

**4.** ```html
<svg width="200" height="100" viewBox="0 0 200 100">
  <rect x="10" y="10" width="50" height="30"/>
</svg>
```
The drawing is displayed at 400 pixels wide instead of 200. How wide is the rectangle on screen, and how sharp is it?
A. 50 px, blurred
B. 100 px, blurred
C. 50 px, still sharp
D. 100 px, still sharp

**5.** You email a photo from your laptop. Later you delete the message on your phone and it vanishes from the laptop too. Name the sending protocol, the attachment standard and the retrieval protocol, in that order.
A. SMTP, MIME, POP3
B. SMTP, MIME, IMAP
C. IMAP, MIME, SMTP
D. POP3, SMTP, IMAP

**6.** Which is the correct order of SMTP commands when a mail client relays a message to a server?
A. MAIL FROM → HELO → RCPT TO → message content
B. HELO → RCPT TO → MAIL FROM → message content
C. HELO → MAIL FROM → RCPT TO → message content
D. RCPT TO → MAIL FROM → HELO → message content

**7.** A REST API keeps users at /users. Which request changes the email address of the user whose id is 42?
A. POST /users
B. GET /users/42
C. DELETE /users/42
D. PUT /users/42

**8.** A resolver has nothing cached for www.miva.edu.ng. In which order does it ask the DNS servers?
A. Root server → TLD server → authoritative server
B. Authoritative server → TLD server → root server
C. TLD server → root server → authoritative server
D. Root server → authoritative server → TLD server

**9.** A clinic must (a) serve its patient portal so pages cannot be read in transit and (b) copy record files to a backup server with encryption and strong authentication. Which protocol replaces the plain one in each case?
A. (a) HTTPS, (b) FTP
B. (a) HTTP, (b) FTP
C. (a) HTTPS, (b) SFTP
D. (a) SFTP, (b) HTTPS

**10.** A stock ticker must push each price change to 2,000 open browsers the instant it happens, over one connection per browser that stays open. Which fits?
A. REST
B. WebSocket
C. SOAP
D. SMTP

**11.** What does HTTPS add to HTTP?
A. Encryption, so the data is confidential in transit
B. Compression, so pages load faster
C. A file transfer mode for uploads
D. Digital signatures on DNS records

**12.** What is DNS?
A. The protocol that transfers web pages between browser and server
B. The set of extensions that adds digital signatures to name records
C. The register of top-level domains such as .com and .ng
D. The system that maps human-readable domain names to IP addresses

---

## Answers

**1. B** — *Levels of the DNS hierarchy in a domain name.* Read the name from the right: org is the top-level domain, example is the second-level domain created under it, and shop and blog are subdomains that divide example.org further.

org is the TLD; shop and blog are subdomains, the labels to the left of the second-level domain.

**2. A** — *XHTML strictness versus HTML tolerance.* XHTML reformulates HTML as XML, so every element must be closed. The `<br>` on line 3 is never closed; XML needs `<br />`. HTML forgives the open tag because br is a void element.

Line 2 closes the img with `/>`, exactly the XHTML form; lines 1 and 4 open and close their elements properly, so all three are well-formed.

**3. C** — *Well-formed XML: matching case-sensitive tags.* XML tags are case-sensitive, so `<title>` and `</Title>` are two different names and the opening tag is left unclosed: the parser reports a mismatched tag on line 3.

Lines 1, 2 and 4 are properly paired user-defined tags; nothing in XML requires the names library or book to be predefined, because XML lets you define your own tags.

**4. D** — *Scaling vector graphics in SVG.* SVG describes shapes, not pixels. Doubling the display width from 200 to 400 scales every coordinate by 400/200 = 2, so the 50-unit rectangle becomes 100 px wide, and because the shape is redrawn from its description it stays sharp at any size.

50 px ignores the scaling; blurred is what happens to a raster image such as a PNG when it is enlarged, not to vector graphics.

**5. B** — *Matching email protocols to sending, attachments and retrieval.* SMTP sends and relays outgoing mail; MIME extends the message format so non-text attachments such as a photo can be included; IMAP keeps messages on the server and synchronises actions across devices, which is why a delete on the phone shows on the laptop.

POP3 downloads mail to one device and typically removes it from the server, so the two devices would not stay in step; IMAP and POP3 retrieve mail and never send it, so the orders that start with them are backwards.

**6. C** — *Order of the SMTP command sequence.* The client first greets the server with HELO, then names the sender with MAIL FROM, then the recipient with RCPT TO, and only then sends the message content.

MAIL FROM before HELO skips the greeting that opens the session; RCPT TO before MAIL FROM names a recipient before there is a sender; RCPT TO first reverses the whole sequence.

**7. D** — *REST methods mapped to CRUD operations.* REST maps HTTP methods onto CRUD: PUT updates an existing resource, so PUT /users/42 updates user 42.

POST /users creates a new user; GET /users/42 only reads user 42; DELETE /users/42 removes the user rather than changing a field.

**8. A** — *Order of a DNS lookup.* The resolver works down the hierarchy: the root server points it to the server for the top-level domain (ng), the TLD server points it to the authoritative server for the domain, and the authoritative server holds the actual record and answers with the IP address.

Starting at the authoritative server assumes the resolver already knows where it is, which is what the lookup is finding out; the TLD server cannot be found before the root has been asked; the authoritative server is the last hop, not the middle one.

**9. C** — *Choosing HTTPS over HTTP and SFTP over FTP.* HTTPS is HTTP with encryption, so the pages of the portal are confidential in transit. SFTP is the secure extension of FTP, adding encryption and strong authentication for file transfers.

HTTP and FTP are the plaintext originals; HTTPS with FTP leaves the file copies readable to anyone capturing the traffic; SFTP and HTTPS are swapped, and a browser fetches pages over HTTP or HTTPS, not over a file transfer protocol.

**10. B** — *Choosing WebSocket for real-time push.* WebSocket gives a persistent, full-duplex channel over a single TCP connection, so the server can push updates the moment they happen without the browser asking again.

REST is stateless request-response: the browser would have to keep polling; SOAP is a strict XML messaging protocol for web services, also request-response; SMTP sends email, not live page updates.

**11. A** — *HTTP versus HTTPS.* HTTPS is the secure version of HTTP: it encrypts the data exchanged between browser and server so that it cannot be read in transit.

Compression is not what the S stands for; file transfer is FTP's job; digital signatures on DNS records are DNSSEC.

**12. D** — *Definition of the Domain Name System.* The Domain Name System converts a name such as www.example.com into the IP address, such as 192.0.2.1, that computers use to connect; it also supports reverse lookup from IP address to name.

Transferring pages is HTTP; the extensions that add digital signatures are DNSSEC; the top-level domains are one level in the DNS hierarchy, not the system itself.
