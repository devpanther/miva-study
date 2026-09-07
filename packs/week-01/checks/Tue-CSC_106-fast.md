# Tuesday — CSC_106 fast-hour check

*Internet vs Web, the request cycle, server types, and the tools you build with.*
*12 questions, straight after the hour. Score out of 12.*

**1.** A student opens `https://portal.miva.edu.ng:8443/courses/csc106/index.html?week=1`. What is the host part of this URL?
A. portal.miva.edu.ng
B. https
C. /courses/csc106/index.html
D. miva.edu.ng

**2.** In `http://www.example.com/blog/2026/post.html#top`, which part is the path?
A. www.example.com/blog
B. #top
C. /blog/2026/post.html
D. blog/2026/post.html#top

**3.** A user clicks a link. Which is the correct order of the four steps that follow?
A. Browser renders the page → browser sends HTTP request → server sends HTTP response → server processes it
B. Browser sends HTTP request → server processes it → server sends HTTP response → browser renders the page
C. Server sends HTTP request → browser processes it → browser sends HTTP response → server renders the page
D. Browser sends HTTP response → server processes it → server sends HTTP request → browser renders the page

**4.** A dashboard greets you by the name stored in the database, and a menu drops down when you tap it. Which side does each job?
A. Browser does both
B. Server does both
C. Browser fetches the name; server opens the menu
D. Server fetches the name; browser opens the menu

**5.** A request for /orders reaches a machine that runs the checkout code, checks the session and works out the total, then asks a second machine for rows from the orders table. Name the two server types, in order.
A. Database server, then application server
B. Application server, then database server
C. Proxy server, then web server
D. Web server, then proxy server

**6.** You need to (a) get back yesterday's working copy of index.html and (b) find out why one image request took three seconds to load. Which tool category handles each?
A. (a) Browser developer tools, (b) Version control system
B. (a) Text editor, (b) Version control system
C. (a) Version control system, (b) Browser developer tools
D. (a) IDE, (b) Text editor

**7.** One machine receives every incoming request, forwards each one to one of six backend servers, and keeps copies of popular images so the backends are not asked for them again. What type of server is it?
A. Application server
B. Database server
C. Web browser
D. Proxy server

**8.** Four tasks on a shop site: (1) write the SQL that saves an order, (2) animate the cart icon when an item is added, (3) hash the password before storing it, (4) lay out the checkout page in HTML. Which are back-end?
A. 1 and 3
B. 2 and 4
C. 1 and 4
D. 1, 3 and 4

**9.** Each developer keeps a full copy of the repository on their own laptop and merges feature branches into a shared copy on a website. Which tool provides the local copies and branching, and what hosts the shared copy?
A. GitHub; Git
B. Git; GitHub
C. Visual Studio Code; Git
D. Git; Nginx

**10.** Which of these four is web server software?
A. Eclipse
B. PostgreSQL
C. Apache
D. Firefox

**11.** What is the World Wide Web?
A. An application of interconnected pages joined by hyperlinks, running on the Internet
B. The global network of interconnected computers and devices
C. The protocol browsers use to fetch pages from servers
D. The address that specifies where a web resource is located

**12.** In the client-server model, what is the client?
A. The machine that stores web content and answers requests for it
B. The set of rules that carries a request across the network
C. The address bar entry that names the resource
D. The program, such as a browser or mobile app, that initiates a request for a resource

---

## Answers

**1. A** — *Parts of a URL: scheme, host, path.* A URL reads scheme://host:port/path?query. Here the scheme is https, the host is portal.miva.edu.ng, the port is 8443, the path is /courses/csc106/index.html and the query is week=1.

https is the scheme, the protocol used to fetch the resource; /courses/csc106/index.html is the path to the resource on that host; miva.edu.ng drops the portal label, which is part of the host name the browser actually looks up.

**2. C** — *Parts of a URL: path versus fragment.* The path begins at the first slash after the host and ends before any ? or #: /blog/2026/post.html. The #top fragment is handled by the browser, which scrolls to the element with id top; it is not sent to the server.

www.example.com/blog mixes the host with the start of the path; #top is the fragment; blog/2026/post.html#top drops the leading slash and keeps the fragment, which is not part of the path.

**3. B** — *Order of the client-server request cycle.* The client always initiates: the browser sends an HTTP request to the web server, the server processes it and retrieves the resource, the server sends an HTTP response back, and the browser renders and displays the content.

Rendering cannot come first because nothing has arrived yet; the server never sends the request, it answers one; the browser sends a request and receives a response, never the other way round.

**4. D** — *Splitting a task between client and server.* Reading a record from the database is server work: the server stores and manages data and generates dynamic content from it. Opening a menu is a change to what the user sees, so it is the browser's job (front-end, user interface).

The browser cannot read the database directly; the server never draws anything on the screen; neither side does both, because the client-server model separates the two concerns.

**5. B** — *Identifying server types from their jobs.* Running application-specific code, managing sessions and computing results is what an application server does (Node.js is the usual example). Storing structured data in tables and answering queries for rows is a database server (MySQL, PostgreSQL, MongoDB).

Database then application reverses the order of the two calls; a web server only serves stored files and routes HTTP requests, and a proxy server sits between clients and servers for caching, load balancing and filtering, so neither runs checkout logic or holds tables.

**6. C** — *Matching a job to a web development tool category.* A version control system such as Git keeps a version history, so a past copy of a file can be rolled back to. Browser developer tools analyse network traffic and show how long each request took.

Developer tools do not store old versions of your files; a text editor and an IDE edit and debug code but neither keeps a history of yesterday's copy nor times network requests.

**7. D** — *Recognising a proxy server.* Distributing requests across backends is load balancing and keeping copies of popular content is caching; both are jobs of a proxy server, which sits between clients and other servers.

An application server runs the application code itself rather than forwarding requests; a database server stores structured data, not cached images; a web browser is the client that sends requests, not a machine that receives them.

**8. A** — *Sorting tasks into front-end and back-end.* Back-end work runs on the server and touches databases and server-side logic: saving an order with SQL (1) and hashing a password before storage (3). Animating an icon (2) and laying out a page in HTML (4) are what the user sees, so they are front-end.

2 and 4 are the front-end pair; 1 and 4 mixes a database task with page layout; 1, 3 and 4 wrongly counts HTML layout as server work.

**9. B** — *Git versus GitHub.* Git is the version control system: it is distributed, so every developer holds a full copy, and it is known for branching and merging. GitHub (or GitLab) is a hosting platform that keeps the shared repository online and adds collaboration features.

GitHub; Git swaps the software for the hosting site; Visual Studio Code is a text editor, not version control; Nginx is a web server, which serves pages rather than hosting repositories.

**10. C** — *Recognising web server software.* Apache, together with Nginx and Microsoft IIS, is web server software: it stores web content and answers HTTP requests from browsers.

Eclipse is an IDE; PostgreSQL is a database server; Firefox is a web browser, the client that sends the requests a web server answers.

**11. A** — *Internet versus World Wide Web.* The World Wide Web is an application built on top of the Internet: web pages linked to one another by hyperlinks, introduced by Sir Tim Berners-Lee in 1989.

The global network of devices is the Internet itself, the infrastructure the Web runs on; the protocol for fetching pages is HTTP; the address of a resource is a URL.

**12. D** — *Definition of the client in the client-server model.* The client is whatever initiates communication by requesting a service or resource: typically a web browser or a mobile app. The server is the other party, which processes the request and delivers the content.

The machine that stores and answers is the server; the rules that carry the request are the protocol, HTTP; the address bar entry is a URL, not a party in the model.
