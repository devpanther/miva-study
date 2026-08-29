# CSC_106 — Week 1 Retention Questions

*Introduction to Web Technologies · sat seven days after the Week 1 session*

## Multiple choice

**1.** Which statement correctly distinguishes the two?
a) The World Wide Web is the infrastructure; the Internet is an application built on it
b) They are two names for the same global network
c) The Internet is the infrastructure; the World Wide Web is an application built on it
d) The Internet is software; the World Wide Web is hardware

**2.** The Internet originated from which network, initially developed for military purposes?
a) ARPANET
b) ETHERNET
c) NSFNET
d) USENET

**3.** Who introduced the World Wide Web, and in what year?
a) Vint Cerf, 1974
b) Douglas Crockford, 2008
c) Tim Berners-Lee, 1969
d) Sir Tim Berners-Lee, 1989

**4.** In the client-server model, which party *initiates* communication?
a) The database server
b) The client
c) The proxy server
d) The web server

**5.** What does URL stand for?
a) Uniform Resource Locator
b) Universal Reference Link
c) Uniform Retrieval Language
d) Unified Resource Layer

**6.** Which of the following is a web server software?
a) MongoDB
b) Sublime Text
c) WebStorm
d) Nginx

**7.** Which sequence correctly describes client-server interaction?
a) Server sends HTTP request → browser processes it → browser sends response → server renders content
b) User enters URL → browser sends HTTP request → server processes and sends HTTP response → browser renders content
c) Browser renders content → user enters URL → server sends HTTP request → browser responds
d) User enters URL → server renders content → browser sends HTTP response → server displays it

**8.** Node.js is given in the lecture as an example of which type of server?
a) Proxy server
b) Database server
c) Application server
d) Web server

**9.** Which is NOT one of the three key categories of web development tools named in the lesson?
a) Version Control Systems
b) Text Editors and IDEs
c) Browser Developer Tools
d) Load Balancers

**10.** Git is best described as:
a) A distributed version control system known for its branching capabilities
b) A cloud hosting platform for websites
c) A browser developer tool for debugging JavaScript
d) An integrated development environment

**11.** A proxy server's typical purposes include all of the following EXCEPT:
a) Caching frequently accessed content
b) Load balancing traffic across backend servers
c) Storing structured data and enforcing data integrity rules
d) Filtering and inspecting incoming requests for security

**12.** Which set lists only *front-end* concerns as defined in the lesson?
a) Databases, business logic, session management
b) Visual aspects and the user interface
c) Request handling, load balancing, HTTPS
d) Data storage, query processing, data validation

## Short answer

**13.** State, in one sentence each, the difference between the Internet and the World Wide Web, and name the system that makes navigation of the Web seamless.

**14.** List the four steps in the interaction between a browser and a web server, from the moment a user clicks a link to the moment the page appears.

**15.** Name the four types of servers covered in Week 1 and give one function or example for each.

## Answers

**1. c** — The lesson stresses the Internet is infrastructure and the Web is an application built upon it.
**2. a** — ARPANET, built for military purposes, later expanded to academic use.
**3. d** — Sir Tim Berners-Lee introduced the WWW in 1989 (1969 is ARPANET's era, not the Web's).
**4. b** — The client (browser or mobile app) initiates communication by requesting resources.
**5. a** — Uniform Resource Locator: the web address specifying a resource's location.
**6. d** — Nginx, alongside Apache and Microsoft IIS; MongoDB is a database, the others are editors/IDEs.
**7. b** — URL/link → HTTP request → server processing and HTTP response → browser rendering.
**8. c** — Application servers execute application-specific code; Node.js is the example given.
**9. d** — The three categories are Text Editors/IDEs, Browser Developer Tools and VCS; load balancing is a server function, not a tool category.
**10. a** — Git is the most widely used VCS, noted for being distributed with strong branching; GitHub/GitLab are the hosting platforms.
**11. c** — Storing structured data and enforcing integrity is a database server's job, not a proxy's.
**12. b** — Front-end developers focus on the visual aspects and user interface; the rest are back-end/server duties.

**13.** The Internet is the global network infrastructure of interconnected computers and devices, while the World Wide Web is an application built on that infrastructure offering interconnected web pages; **hyperlinks** make navigation of the Web seamless.

**14.** (1) The user enters a URL or clicks a link in the browser. (2) The browser sends an HTTP request to the appropriate web server. (3) The server processes the request, retrieves the requested resource and sends an HTTP response back. (4) The browser renders and displays the received content to the user.

**15.** *Web servers* — serve web content and handle HTTP requests (Apache, Nginx, Microsoft IIS). *Database servers* — manage data storage, retrieval and integrity (MySQL, PostgreSQL, MongoDB). *Application servers* — execute application-specific code, manage sessions and generate dynamic content (Node.js). *Proxy servers* — act as intermediaries for caching, load balancing and security.
