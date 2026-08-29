# CSC_106 — Week 1

*Introduction to Web Technologies · Week 1 (7–13 Sep 2026)*

Week 1 has two halves: the lecture slides ("Introduction to Web Development" — browsers, servers, client-server model, tools) and the week summary sheet ("The Internet and the World Wide Web" — ARPANET, Berners-Lee, Internet vs Web).

## Most likely to be examined

1. **Internet vs World Wide Web.** The Internet is the *infrastructure* — a global network of interconnected computers and devices. The WWW is an *application built on top of it* — interconnected web pages joined by hyperlinks. Examiners love this distinction.
2. **Origin facts.** The Internet grew out of **ARPANET**, initially developed for military purposes then expanded to academic use. The **World Wide Web was introduced by Sir Tim Berners-Lee in 1989**.
3. **The client-server model.** Client (web browser or mobile app) *initiates* the request; server *processes* the request and delivers the content. This model governs all data exchange on the web.
4. **The four-step client-server interaction sequence.** (a) User enters a URL or clicks a link → (b) browser sends an **HTTP request** to the appropriate web server → (c) server processes the request, retrieves the resource, sends an **HTTP response** → (d) browser renders and displays the content.
5. **Front-end vs back-end.** Front-end developers focus on the visual aspects / user interface; back-end developers handle server-side operations and databases. Languages named: HTML, CSS, JavaScript, Node.js.
6. **The four types of servers and one example each:** Web (Apache, Nginx, Microsoft IIS), Database (MySQL, PostgreSQL, MongoDB), Application (Node.js), Proxy (caching, load balancing, security).
7. **The three key categories of web development tools:** Text Editors and IDEs; Browser Developer Tools; Version Control Systems (VCS).
8. **The four roles of VCS in web development:** code collaboration, version history (rollbacks/comparisons), branching and merging, code backup.

## Definitions and key terms

- **Web development** — the process of creating websites and web applications for the internet; involves coding with HTML, CSS, JavaScript and Node.js to design both the user interface (front-end) and the server logic (back-end).
- **ARPANET** — Advanced Research Projects Agency Network; the military-purpose network from which the Internet originated, later expanded to academic use.
- **WWW** — World Wide Web; introduced by Sir Tim Berners-Lee (1989); offers interconnected web pages through **hyperlinks**, the system that made navigation of the Web seamless.
- **URL** — Uniform Resource Locator; a web address that specifies the *location* of a web resource.
- **HTTP** — Hypertext Transfer Protocol; the protocol used for communication between browsers and servers.
- **HTTPS** — the secure protocol servers implement to protect data in transit and at rest.
- **HTML / CSS / JavaScript** — the core technologies used to create and display web content (structure, style, behaviour).
- **Web browser** — software application that lets users access and interact with content on the WWW; interprets and displays text, images and multimedia. Examples: Chrome, Firefox, Safari, Edge.
- **Web server** — specialised software or hardware that stores, manages and serves web content to browsers; handles incoming requests, processes them, responds with the requested resources. Examples: Apache, Nginx, Microsoft IIS.
- **Client-server architecture** — a computing model in which client devices (browsers, mobile apps) request services or resources from server devices (web servers, database servers); the foundation of the WWW.
- **IDE** — Integrated Development Environment; a comprehensive environment providing code editing, debugging and other development features. Examples: JetBrains WebStorm, Microsoft Visual Studio, Eclipse.
- **Text editor** — lightweight application for writing and editing code efficiently. Examples: Visual Studio Code, Sublime Text, Atom.
- **Browser developer tools** — built-in browser tools to inspect and manipulate page elements, debug JavaScript, analyse network traffic and optimise performance.
- **VCS** — Version Control System; manages code repositories and tracks changes. **Git** is the most widely used, known for its *distributed* nature and *branching* capabilities. **GitHub** and **GitLab** are hosting/collaboration platforms.
- **Load balancing** — distributing incoming requests across multiple servers for improved performance and reliability.
- **Dynamic content generation** — a server generating content on the fly from user requests, usually by processing database data or performing computations.

## Components, protocols and technologies introduced

| Item | Type | What it does / example |
|---|---|---|
| URL | Address scheme | Specifies location of a web resource |
| HTTP | Protocol | Browser ↔ server communication (request / response) |
| HTTPS | Protocol | Secures data in transit and at rest |
| HTML | Markup language | Structure of the page |
| CSS | Style language | Presentation of the page |
| JavaScript | Scripting language | Behaviour / interactivity in the browser |
| Node.js | Runtime / application server | Executes server-side application code |
| Apache, Nginx, Microsoft IIS | Web server software | Serve web content, handle HTTP requests |
| MySQL, PostgreSQL, MongoDB | Database servers | Store, query and manage data |
| Git + GitHub / GitLab | VCS + hosting platforms | Track changes, collaborate, back up code |

**Browser functionality (5):** rendering web pages · user interface · extensions and plugins · bookmarking and history · security.
**Server functionality (5):** request handling · data storage · dynamic content generation · security (HTTPS) · load balancing.
**Advantages of client-server architecture (3):** scalability · centralised data management · separation of concerns.

## Commonly confused

- **Internet vs World Wide Web** — Ask "is it the wiring or the thing running on the wiring?" The Internet is the infrastructure; the Web is one application on it.
- **Front-end vs back-end** — If the user can see or click it, it is front-end; if it runs on the server or touches the database, it is back-end.
- **Web browser vs web server** — The browser *requests and renders*; the server *stores and serves*.
- **URL vs HTTP** — URL is the *address* of the resource; HTTP is the *protocol/rules* for fetching it.
- **Text editor vs IDE** — A text editor is lightweight editing only (VS Code, Sublime, Atom); an IDE bundles editing plus debugging and build tooling (WebStorm, Visual Studio, Eclipse).
- **Web server vs application server** — A web server serves stored files and handles HTTP routing; an application server executes application-specific code and manages sessions/state (e.g. Node.js).
- **Database server vs proxy server** — Database server stores and queries data; proxy server stores nothing of its own, it sits *between* client and server for caching, load balancing and security.
- **Git vs GitHub** — Git is the version control software on your machine; GitHub is the online platform that hosts Git repositories.
