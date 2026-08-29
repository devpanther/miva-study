# CSC_106 — Week 11 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 12, not this week. Notes closed.*

## Section A - Multiple choice (12)

**1.** Which statement gives this week's definition of **web application security**?

a) The practice of preventing users from accessing a website until they have paid for a subscription
b) The practice of protecting web applications from threats that can compromise the confidentiality, integrity or availability of data
c) The process of encrypting a database so that only the database administrator can read it
d) The process of testing a web application's speed and responsiveness under high traffic

**2.** A developer leaves database credentials in a plaintext configuration file on the production server. Which named vulnerability class is this?

a) Cross-site request forgery, because an attacker could use the credentials without the developer's consent
b) Cross-site scripting, because the credentials could be read from a page viewed by another user
c) Security misconfiguration, because security settings were overlooked and sensitive information was left exposed
d) SQL injection, because the credentials give direct access to the database

**3.** An attacker enters `' OR 1=1--` into a login form and is admitted without a valid password. What has happened, and which defence does the lecture name for it?

a) Cross-site scripting; the defence is a Content Security Policy
b) SQL injection; the defence is input validation and sanitisation with parameterised queries for database interactions
c) Cross-site request forgery; the defence is a unique session token on every form
d) Command injection; the defence is to disable the login form's autocomplete attribute

**4.** A logged-in user clicks a link in an email and, without seeing anything unusual, the email address on their profile is changed. Which vulnerability is this, and what distinguishes it from XSS?

a) XSS — the link injected a script into the profile page, whereas CSRF requires the user to type something
b) CSRF — it tricks an authenticated user into performing an unwanted action without their consent, whereas XSS injects a malicious script into pages viewed by other users
c) SQL injection — the link contained SQL, whereas XSS contains JavaScript
d) Security misconfiguration — profile settings were left unprotected, whereas XSS is a coding error

**5.** Which best-practice/vulnerability pairing is the one the lecture makes?

a) Output encoding, with tools like Content Security Policy, mitigates XSS
b) Input validation, using parameterised queries, mitigates cross-site scripting
c) Security headers such as HSTS and X-Content-Type-Options mitigate SQL injection
d) Session expiration policies mitigate security misconfiguration

**6.** What is a **Web Application Firewall**, and how does it protect an application?

a) A network device that blocks all traffic on ports other than 80 and 443, so only web traffic reaches the server
b) A security appliance or service that filters and monitors HTTP/HTTPS requests, inspecting incoming traffic, identifying malicious patterns or payloads and blocking threats before they reach the application
c) An intrusion detection system that records suspicious activity in the server log for later review
d) A code-analysis tool run during development that reports insecure functions to the programmer

**7.** Which item belongs to the lecture's **secure development practices** rather than to its list of security best practices?

a) Using parameterised queries for database interactions
b) Adding two-factor authentication to the login flow
c) DevSecOps — incorporating security into the DevOps pipeline so security is an integral part of development, not an afterthought
d) Applying the HSTS security header to all responses

**8.** A growing e-commerce business asks which hosting option to deploy on. What does the lecture recommend, and why?

a) Shared hosting, because it is cost-effective and multiple sites can share CPU and RAM
b) On-premises hosting, because it provides complete control over the infrastructure
c) Cloud hosting such as AWS, because it offers scalability, flexibility and cost-efficiency, allows resources to be adjusted to traffic demands, and provides managed services that automate resource management
d) A VPS, because partitioning gives each site its own operating system and configuration

**9.** Which description of **VPS hosting** matches the lecture?

a) Multiple websites hosted on a single server sharing resources like CPU and RAM, cheap but limited in performance and customisation
b) A physical server partitioned into multiple virtual servers, each with its own OS, resources and configurations, offering a balance between control and cost
c) Servers set up within an organisation's own physical facilities, giving complete control but requiring substantial infrastructure and maintenance
d) Infrastructure rented from AWS, Azure or GCP that automatically manages server resources and scaling

**10.** A site adds three more web server instances and puts a load balancer in front of them. Which is correct?

a) This is vertical scaling; it works by upgrading the existing server's CPU, memory and storage
b) This is horizontal scaling; the load balancer evenly distributes incoming traffic so no single server becomes a bottleneck, improving scalability and fault tolerance
c) This is caching; the load balancer stores frequently accessed data in a temporary storage layer
d) This is a content delivery network; the extra instances are placed in different geographic regions

**11.** Users in distant countries report that images and static files load slowly, although the server itself is not overloaded. Which named technique does the lecture prescribe?

a) Vertical scaling — add CPU cores and memory to the existing server
b) Database optimisation — index the frequently queried columns to speed up SELECT operations
c) A Content Delivery Network such as Cloudflare — geographically distributed servers that cache and deliver content from locations closer to users, reducing latency
d) Load testing with Apache JMeter — simulate traffic to find the bottleneck

**12.** Which statement about **monitoring, debugging and continuous integration** is correct as taught?

a) An alert is a quantifiable measurement such as response time; a metric is the notification sent when a threshold is exceeded
b) Debugging is the continuous real-time observation of an application's performance and health, while monitoring fixes defects in code
c) Continuous integration automatically builds, tests and deploys code changes as they are committed to a version control system, with pipelines that catch and report issues early; Jenkins and Travis CI are named examples
d) Load testing tools such as New Relic and Datadog simulate high traffic, while monitoring tools such as JMeter and Gatling observe production

## Section B - Short answer (3)

**13.** Define **vulnerability** and **threat** as the lecture distinguishes them. Then name **four** of the five web application vulnerabilities taught, describe the mechanism of each in one sentence, and state the best practice the lecture pairs with it as a defence.

**14.** Explain what a **Web Application Firewall** is and how it functions to protect a web application. Then set out the **four hosting options** named this week, giving for each the control/cost trade-off and one named provider or example, and say which you would recommend for a business expecting large seasonal traffic surges and why.

**15.** Distinguish **horizontal** from **vertical scaling**, and explain **load balancing**, **caching** and **CDNs** with the named example the lecture gives for each. Then define **monitoring** and **debugging**, name the three key concepts of each, and explain how **continuous integration** relates to version control and testing.

## Answers

**1. b** — *web application security*: the practice of protecting web applications from threats that can compromise the **confidentiality, integrity or availability** of data; threats come from malicious users, attackers and vulnerabilities within the application itself. **a** describes access control for a paywall, a business rule, not the security definition. **c** names one technique (encryption at rest) as though it were the whole discipline, and misstates who can read the data. **d** is performance optimisation and load testing, a different section of this week entirely.

**2. c** — *security misconfiguration*: defined as occurring when developers overlook security settings and leave sensitive information exposed, with the deck's own example being **database credentials left in plaintext configuration files**. **a** describes CSRF, which requires an authenticated victim to be tricked into an action. **b** requires a script injected into a page viewed by other users; nothing is injected here. **d** confuses the *consequence* (database access) with the *vulnerability class* — SQLi is malicious SQL inserted through user inputs.

**3. b** — *SQL injection and its defence*: SQLi occurs when an attacker inserts malicious SQL code into user inputs to manipulate the application's database, and `' OR 1=1--` in a login form is the deck's stated example of gaining unauthorised access; the paired best practice is **input validation and sanitisation, using parameterised queries for database interactions**. **a** names the XSS defence (CSP), which does nothing to a query built on the server. **c** names the CSRF defence; no authenticated victim is being tricked here. **d** picks the wrong injection type — this is SQL, not shell commands — and offers a defence the lecture never gives.

**4. b** — *CSRF vs XSS*: CSRF attacks trick users into performing unwanted actions **without their consent while authenticated**, the deck's example being a malicious link that changes a user's profile email address; XSS instead **injects malicious scripts into web pages viewed by other users**, leading to data theft or session hijacking. **a** reverses the two and invents a "must type something" criterion. **c** misidentifies the attack and offers a distinction (SQL vs JavaScript) that describes SQLi vs XSS. **d** reaches for misconfiguration, which is about exposed settings, not a tricked user.

**5. a** — *best practice paired with vulnerability*: the lecture states "Encode output to prevent XSS attacks. Tools like **Content Security Policy (CSP)** can help mitigate XSS risks." **b** attaches the injection defence to the wrong vulnerability — parameterised queries defeat SQLi, not XSS. **c** misassigns the security headers; HSTS and X-Content-Type-Options harden transport and content-type handling, and neither touches SQL. **d** misassigns session management, whose stated target is **CSRF**.

**6. b** — *WAF*: a security appliance or service that **filters and monitors HTTP/HTTPS requests** to a web application, acting as a shield against common attacks such as SQL injection and XSS by **inspecting incoming traffic, identifying malicious patterns or payloads and blocking or mitigating threats before they reach the application**. **a** describes a conventional network firewall filtering by port, listed separately under server security measures. **c** describes an **intrusion detection system** — it detects and reports rather than blocking requests. **d** describes secure coding tooling and code review, a development-time practice, not a runtime shield.

**7. c** — *secure development practices*: the three named are **secure coding** (training, no hard-coded credentials), **code review** (experienced developers catching issues early) and **DevSecOps** (security built into the DevOps pipeline, not an afterthought). **a**, **b** and **d** are all genuine items — but from the **security best practices** list (input validation, authentication/authorisation with 2FA, and security headers respectively), which is the list the question excludes.

**8. c** — *the mid-lesson hosting answer*: cloud hosting such as **Amazon Web Services**, chosen for **scalability, flexibility and cost-efficiency**, the ability to **adjust server resources to traffic demands**, and **managed services that automate resource management and reduce the operational burden**. **a** states shared hosting's real traits, but its named limitation is exactly performance and customisation — wrong for a growing business. **b** states on-premises' real benefit while ignoring its stated cost: substantial infrastructure and maintenance, and no elasticity for surges. **d** states VPS's real definition, but the balance of control and cost is not the elasticity criterion the question asks about.

**9. b** — *VPS hosting*: partitions a physical server into multiple virtual servers, **each with its own OS, resources and configurations**, offering a **balance between control and cost**; the named example is DigitalOcean running a WordPress site. **a** is the definition of **shared hosting**. **c** is **on-premises hosting**. **d** is **cloud hosting**, with the Elastic Beanstalk detail attached.

**10. b** — *horizontal scaling and load balancing*: horizontal scaling adds more machines or instances to distribute the workload and is **often achieved by load balancing**; a load balancer **evenly distributes incoming traffic across multiple server instances** so **no single server becomes a bottleneck**, improving **both scalability and fault tolerance**. **a** defines vertical scaling, which upgrades one machine rather than adding machines. **c** confuses a load balancer with a cache — caching stores data in a temporary layer, it does not route requests. **d** requires geographic distribution and content caching, which the scenario never mentions; a CDN is not the same as extra origin instances.

**11. c** — *CDN*: networks of **geographically distributed servers** that **cache and deliver web content such as images, videos and static files from locations closer to users**, reducing latency and accelerating delivery; the named example is **Cloudflare**. **a** would raise capacity on a server that is not overloaded, so it addresses the wrong problem. **b** speeds up database queries, but static images do not come from the database. **d** is a diagnostic activity, not a fix — JMeter and Gatling simulate load to find bottlenecks.

**12. c** — *continuous integration*: CI practices automatically build, test and deploy code changes **as they are committed to a version control system**, and pipelines can include automated tests that **catch and report issues early**; **Jenkins** and **Travis CI** are the named tools. **a** swaps the definitions — metrics are the quantifiable measurements, alerts are the threshold notifications. **b** reverses monitoring and debugging: monitoring is continuous real-time observation, debugging is identifying and resolving errors in code. **d** swaps the tool pairs — **New Relic and Datadog** are performance-monitoring tools, **Apache JMeter and Gatling** are load-testing tools.

**13.** *Vulnerabilities, threats and their defences*: A **vulnerability** is a **weakness in a web application's design, implementation or configuration that can be exploited by attackers to compromise its security** — it is a property of the application itself. A **threat** is a **potential danger or harm to a web application's security**, coming from outside — the lecture names SQL injection, cross-site scripting and distributed denial of service (DDoS) attacks as threats. Put simply: the vulnerability is the hole, the threat is what might come through it.

Any four of the five, with mechanism and paired defence:

**SQL injection (SQLi)** — an attacker inserts **malicious SQL code into user inputs**, manipulating the application's database (entering `' OR 1=1--` in a login form may grant unauthorised access). Defence: **input validation** — validate and sanitise all user input, and use **parameterised queries** for database interactions so input can never be executed as SQL.

**Cross-site scripting (XSS)** — an attacker **injects malicious scripts into web pages viewed by other users**, leading to **data theft or session hijacking** (malicious JavaScript embedded in a comment section). Defence: **output encoding** — encode output so injected markup renders as text, supported by a **Content Security Policy (CSP)** to restrict what scripts may run.

**Cross-site request forgery (CSRF)** — the attack **tricks users into performing unwanted actions without their consent while they are authenticated** on the application (a malicious link that changes a user's email address on their profile). Defence: **session management** — manage sessions securely and use **unique tokens** the attacker cannot predict, plus **session expiration policies** to shrink the window.

**Injection attacks (other)** — beyond SQLi, **command injection** and **XML injection** exploit applications that **process user-supplied data without proper validation**. Defence: the same **input validation and sanitisation**, applied at every point untrusted data enters an interpreter.

**Security misconfiguration** — developers **overlook security settings and leave sensitive information exposed**, for example **database credentials in plaintext configuration files**. Defence: **regular updates** to patch known vulnerabilities in all components including libraries and frameworks, plus **security testing** — vulnerability scanning, penetration testing and code reviews — to find exposed settings before an attacker does.

**14.** *WAFs and hosting options*: A **Web Application Firewall (WAF)** is a **security appliance or service that filters and monitors HTTP/HTTPS requests to a web application**. It **acts as a shield against common web application attacks, providing an additional layer of security**: it **inspects incoming traffic, identifies malicious patterns or payloads, and blocks or mitigates potential threats before they reach the web application** — for example blocking traffic attempting to exploit **SQL injection** or **cross-site scripting**. The phrase "additional layer" is important: a WAF supplements secure coding, input validation and output encoding, it does not replace them.

The four hosting options:

**On-premises hosting** — servers set up within the organisation's **own physical facilities**, such as data centres or server rooms. It provides **complete control**, but requires **substantial infrastructure and maintenance**. Example use: an internal **mail server** running Microsoft Exchange or Postfix.

**Cloud hosting** — leverages infrastructure from providers such as **Amazon Web Services (AWS)**, **Microsoft Azure** and **Google Cloud Platform (GCP)**. It offers **scalability, flexibility and cost-efficiency**; the named example is deploying on **AWS Elastic Beanstalk**, which **automatically manages server resources and scaling**.

**Virtual Private Server (VPS)** — partitions a physical server into **multiple virtual servers, each with its own OS, resources and configurations**, offering a **balance between control and cost**. Example: **DigitalOcean** running a WordPress website.

**Shared hosting** — hosts **multiple websites on a single server, sharing resources like CPU and RAM**. It is **cost-effective** but may be **limited in performance and customisation**. Example: a personal blog on **Bluehost**.

For a business expecting **large seasonal traffic surges**, recommend **cloud hosting**, e.g. AWS — this is the lecture's own answer for a growing e-commerce platform. Cloud hosting allows you to **easily scale server resources up or down to meet demand without investing in additional physical hardware**, so a holiday peak is absorbed and the capacity is released afterwards; its **managed services automate server resource management**, reducing operational burden. Shared hosting would hit its performance limits, on-premises would require buying hardware sized for the peak and idle for the rest of the year, and a VPS has a fixed resource allocation that does not scale elastically.

**15.** *Scaling, optimisation, monitoring and CI*: **Horizontal scaling** involves **adding more machines or instances to distribute the workload**, often achieved by **load balancing** — for example adding more web server nodes to handle increased traffic. **Vertical scaling**, also called **scaling up**, involves **upgrading the existing server or hardware to handle increased loads** — adding more CPU cores, memory or storage. Horizontal adds servers; vertical grows one server. Horizontal also gains **fault tolerance**, because the workload survives the loss of one node.

**Load balancing** is a technique that **evenly distributes incoming traffic across multiple server instances**, ensuring **no single server becomes a bottleneck** and improving **both scalability and fault tolerance**; named examples are **NGINX** and **AWS Elastic Load Balancing**. **Caching** stores **frequently accessed data or computed results in a temporary storage layer (cache)**, reducing the need to fetch from the **primary data source** and improving response times; the named example is **browser caching for static assets like images, CSS and JavaScript files**, reducing load on the web server. **Content Delivery Networks (CDNs)** are **networks of geographically distributed servers that cache and deliver web content — images, videos, static files — from locations closer to users**, reducing **latency** and accelerating delivery; the named example is **Cloudflare** distributing static content worldwide.

**Monitoring** is the practice of **continuously observing a web application's performance, health and behaviour in real time**, collecting **data, metrics and logs** to **identify anomalies and trends**. Its three key concepts are **metrics** (quantifiable measurements such as response times, error rates and resource utilisation — e.g. an e-commerce site's average response time), **alerts** (notifications triggered when **predefined conditions or thresholds are met or exceeded** — e.g. CPU usage above 90% for five consecutive minutes) and **logging** (recording **events, actions and errors**, giving a detailed history that is crucial for debugging — e.g. login attempts with timestamps and success/failure status).

**Debugging** is the process of **identifying and resolving issues, errors or defects in a web application's code or functionality**. Its three key concepts are **error handling** (anticipating and managing errors so the application does not crash and gives meaningful messages — e.g. try-catch blocks in JavaScript), **debugging tools** (IDEs, code editors and browser developer tools — e.g. Chrome DevTools) and **version control** (systems like **Git** that track changes over time, allow rollback to previous versions and enable collaboration).

**Continuous integration (CI)** ties the last two together: CI practices **automatically build, test and deploy code changes as they are committed to a version control system**, so the VCS commit is the trigger. CI pipelines **include automated tests** — the **unit, integration and end-to-end tests** that check different layers of the application — so that issues are **caught and reported early in the development process** rather than by users. Named CI tools are **Jenkins** and **Travis CI**.
