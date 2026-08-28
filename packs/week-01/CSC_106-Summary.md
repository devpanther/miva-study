# CSC_106 — Week 1 Summary

*Introduction to Web Technologies · Week 1 (7–13 Sep 2026) · Topic: The Internet and the World Wide Web*

## The 8 most examinable things this week

1. The Internet is the global **infrastructure** (interconnected networks of computers and devices); the World Wide Web is an **application** built on top of that infrastructure. This is the single most examinable distinction of the week.
2. **ARPANET** origin: developed initially for **military** purposes, later expanded to **academic** use.
3. **Sir Tim Berners-Lee introduced the World Wide Web in 1989**; navigation is made seamless by **hyperlinks**.
4. Web development = **front-end** (user interface, visual aspects) + **back-end** (server logic and databases), using HTML, CSS, JavaScript and Node.js.
5. The **client-server model** and its exact four-step request cycle.
6. Core components: **URL**, **HTTP**, and the three core web technologies **HTML, CSS, JavaScript**.
7. The **four server types** with named examples: web, database, application, proxy.
8. The **three tool categories** and the **three advantages** of client-server architecture.

## Internet vs World Wide Web

The **Internet** is a worldwide network of interconnected computers and devices — the infrastructure. It originated from ARPANET, built for military purposes and later expanded to academic use. The **World Wide Web** is an application: a system of interconnected web pages accessed via hyperlinks, introduced by Sir Tim Berners-Lee in 1989, running on top of the Internet.

## Web development

The process of creating websites and web applications, coded with HTML, CSS, JavaScript and Node.js. **Front-end** developers handle the user interface and visual aspects; **back-end** developers handle server-side operations and databases.

## The client-server model

**Client** = a browser or mobile app that initiates the request. **Server** = processes the request and delivers the content. The exact four-step cycle:

1. A user enters a URL or clicks a link in the browser.
2. The browser sends an **HTTP request** to the appropriate web server.
3. The server processes the request, retrieves the requested resource, and sends an **HTTP response** back.
4. The browser **renders and displays** the received content.

**Key components**: **URL** (a web address specifying the location of a resource), **HTTP** (the protocol for browser–server communication), **HTML, CSS and JavaScript** (the core technologies for creating and displaying web content).

**Browser functions**: rendering web pages; user interface; extensions and plugins; bookmarking and history; security.

**Server functions**: request handling; data storage; dynamic content generation; security (HTTPS); load balancing.

## The four server types

- **Web servers** — serve web content, handle HTTP requests: **Apache, Nginx, Microsoft IIS**.
- **Database servers** — manage data storage and retrieval: **MySQL, PostgreSQL, MongoDB**.
- **Application servers** — execute application-specific code: **Node.js**.
- **Proxy servers** — intermediaries used for caching, load balancing and security filtering.

## Web development tools

1. **Text editors and IDEs** — text editors: VS Code, Sublime Text, Atom. IDEs: JetBrains WebStorm, Microsoft Visual Studio, Eclipse.
2. **Browser developer tools** — inspect and manipulate elements, debug JavaScript, analyse network traffic, optimise performance.
3. **Version control systems** — **Git** (distributed, branching); GitHub and GitLab for hosting and collaboration. The four roles of VCS: **code collaboration, version history, branching and merging, code backup**.

**Advantages of client-server architecture**: **scalability, centralised data management, separation of concerns**.

## Commonly confused

- **Internet vs World Wide Web** — Internet is the infrastructure (networks); the Web is an application (pages and hyperlinks) running on it.
- **Web server vs application server** — a web server serves content and handles HTTP (Apache, Nginx, IIS); an application server executes application-specific code and logic (Node.js).
- **Text editor vs IDE** — a text editor is lightweight for writing and editing code (VS Code, Sublime, Atom); an IDE bundles editing, debugging and other development features (WebStorm, Visual Studio, Eclipse).
- **Git vs GitHub** — Git is the version control system itself; GitHub and GitLab are hosting and collaboration platforms for Git repositories.
- **Front-end vs back-end** — front-end is the user interface (client side); back-end is server logic and databases (server side).
