# CSC_106 — Week 11

*Introduction to Web Technologies · Week 11 (16 – 22 Nov 2026)*

**Topic: Security and Deployment.** Two halves: (1) web application security — vulnerabilities, best practices, WAF, secure development; (2) server deployment, hosting, scaling, performance, monitoring/debugging, CI.

## Examined first — know these cold
1. **The five vulnerabilities** (SQLi, XSS, CSRF, other Injection, Security Misconfiguration) — name + the one example each.
2. **The seven best practices** and which vulnerability each one answers.
3. **WAF** — filters/monitors HTTP/HTTPS requests; an *additional* layer, not a replacement.
4. **Four hosting options** (on-premises, cloud, VPS, shared) and the one trade-off each.
5. **Horizontal vs vertical scaling** — more machines vs a bigger machine.
6. **Load balancing / caching / CDN** — three different performance fixes; don't swap them.
7. **Monitoring vs debugging**, and the three key concepts under each.
8. **CI** — auto build/test/deploy on commit to version control; Jenkins, Travis CI.

## Security terminology
- **Web application** — software on a web server, used through a browser (online banking, e-commerce, social media).
- **Vulnerability** — a *weakness* in design, implementation or configuration.
- **Threat** — a potential *danger/harm* (SQLi, XSS, DDoS).
- Security = protecting **confidentiality, integrity, availability** of data.

## Vulnerabilities (name → distinguishing trait)
| Vulnerability | One distinguishing trait |
|---|---|
| **SQL Injection (SQLi)** | Malicious SQL inserted into user input manipulates the **database**; e.g. `'OR 1=1--` in a login form. |
| **Cross-Site Scripting (XSS)** | Malicious **script injected into a page viewed by other users** → data theft, session hijacking; e.g. JS in a comment box. |
| **Cross-Site Request Forgery (CSRF)** | Tricks an **already-authenticated** user into an unwanted action; e.g. a link that changes their profile email. |
| **Injection Attacks (other)** | Command Injection, XML Injection — user-supplied data processed **without proper validation**. |
| **Security Misconfiguration** | Overlooked security settings leave data exposed; e.g. **plaintext DB credentials** in config files. |

## Best practices (which one fixes what)
- **Input Validation** — validate/sanitise inputs; **parameterised queries** → stops SQL injection.
- **Output Encoding** — encode output; **Content Security Policy (CSP)** → mitigates XSS.
- **Authentication and Authorization** — strong auth + privileges by **roles and permissions**; **2FA** adds a layer.
- **Session Management** — unique tokens + session expiration → prevents CSRF.
- **Security Headers** — **HSTS**, **X-Content-Type-Options**.
- **Regular Updates** — patch libraries/frameworks against known vulnerabilities.
- **Security Testing** — vulnerability scanning, **penetration testing**, code reviews.

**WAF** — appliance/service filtering and monitoring HTTP/HTTPS requests; inspects traffic, spots malicious patterns/payloads, blocks before they reach the app.
**Secure development practices** — **Secure Coding** (no hard-coded credentials), **Code Review** (catch issues early), **DevSecOps** (security inside the DevOps pipeline, not an afterthought).
*(Summary deck adds: brute force, phishing; strong password policies, MFA, SSL/TLS encryption.)*

## Deployment and hosting
- **Server** — responds to client requests (web, file, database servers). **Deployment** — setting up/configuring servers: hardware, software, network. **Hosting** — providing resources/infrastructure to make it reachable on the internet.
- **Physical servers** = tangible hardware; **Virtual servers** = software instances, many per physical machine (virtualisation).
- **Server OS** — Linux (Ubuntu, CentOS), Windows Server. **Server roles** — web (Apache, Nginx), database (MySQL, PostgreSQL), mail (Microsoft Exchange).

| Hosting option | Distinguishing trait |
|---|---|
| **On-Premises** | Servers in your own facility — **complete control**, heavy infrastructure/maintenance. |
| **Cloud** (AWS, Azure, GCP) | **Scalability, flexibility, cost-efficiency**; e.g. AWS Elastic Beanstalk auto-manages resources/scaling. |
| **VPS** (DigitalOcean) | One physical server **partitioned** into virtual servers with own OS — **balance of control and cost**. |
| **Shared** (Bluehost) | Many sites share one server's CPU/RAM — **cheapest**, limited performance/customisation. |

**Security and maintenance:** firewalls, patching, intrusion detection systems, strong authentication · monitoring, updates, **backups** · **disaster recovery plan** for data loss and downtime.

## Scalability and performance
- **Scalability** — handle increased load without a proportional drop in performance. **Performance optimisation** — speed, responsiveness, efficiency; reduce latency.
- **Horizontal scaling** — add more machines/instances, usually behind a load balancer. **Vertical scaling (scaling up)** — upgrade the existing server (CPU, memory, storage).
- **Load balancing** — evenly distributes incoming traffic so no server is a bottleneck; improves scalability **and fault tolerance** (NGINX, AWS Elastic Load Balancing).
- **Caching** — store frequently accessed data in temporary storage to avoid refetching from the source (browser caching of images/CSS/JS).
- **CDN** — geographically distributed servers cache and deliver content **closer to users**, cutting latency (Cloudflare).
- **Database optimisation** — queries, **indexing**, data structures (index queried columns to speed up SELECT).
- **Front-end optimisation** — fewer/smaller HTTP requests, optimise images, **lazy loading**, minify CSS/JS, responsive images.

## Monitoring, debugging, testing, CI
- **Monitoring** — continuous real-time observation of performance/health/behaviour. Key concepts: **Metrics** (response times, error rates, resource utilisation), **Alerts** (fire when a threshold is crossed, e.g. CPU > 90% for 5 minutes), **Logging** (recorded history of events/actions/errors).
- **Debugging** — identifying and resolving errors/defects in code. Key concepts: **Error Handling** (try-catch), **Debugging Tools** (IDEs, editors, Chrome DevTools), **Version Control** (Git — rollback + collaboration).
- **Tools:** performance monitoring — **New Relic, Datadog**; load testing — **Apache JMeter, Gatling**; CI — **Jenkins, Travis CI**.
- **Testing** — unit, integration, end-to-end. **CI** — automatically build, test and deploy code changes as they are committed to version control, catching issues early.

## Commonly confused
- **XSS vs CSRF vs SQLi** — XSS injects a **script into a page other users view**; CSRF makes an **already-logged-in user** perform an unwanted action; SQLi injects **SQL into input to manipulate the database**. Fixes: output encoding/CSP vs session tokens/expiry vs input validation/parameterised queries.
- **Authentication vs Authorization** — authentication **verifies identity**; authorization **limits privileges by role/permission**. 2FA/MFA strengthens the first, not the second.
- **Vulnerability vs Threat** — a weakness that exists vs the potential harm that exploits it.
- **Encryption vs hashing** — encryption (SSL/TLS) is **reversible with a key**, protecting data in transit; hashing is one-way, used for storing passwords. (Deck names SSL/TLS encryption; only encryption is defined explicitly.)
- **Horizontal vs vertical scaling** — more machines (load balanced) vs a bigger machine.
- **Caching vs CDN** — caching stores data in a temporary layer to avoid refetching; a CDN is caching **distributed geographically** to cut latency for distant users.
- **Deployment vs Hosting** — setting up/configuring the servers vs providing the resources/infrastructure that make the app reachable.
- **Virtual server vs VPS vs shared hosting** — a virtualisation concept; a partitioned physical server sold with its own OS; many sites sharing one server's resources without separate OSs.
- **Monitoring vs debugging** — watching a live system for anomalies vs fixing an identified defect.
- **WAF vs firewall** — a WAF inspects HTTP/HTTPS **application** traffic; the general firewall in "Security Measures" guards the server/network.
