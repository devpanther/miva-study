# Tuesday — CSC_106 fast-hour check

*Web application vulnerabilities and their fixes, plus scaling, CDNs and monitoring.*
*Five questions, straight after the fast hour. Recall only. Score out of 5.*

**1.** Which vulnerability tricks an already-authenticated user into an unwanted action?
A. SQL Injection
B. Cross-Site Request Forgery
C. Cross-Site Scripting
D. Security Misconfiguration

**2.** Which best practice uses parameterised queries to stop SQL injection?
A. Output Encoding
B. Session Management
C. Security Headers
D. Input Validation

**3.** Horizontal scaling means what, in the deck's terms?
A. Upgrading the server's CPU and memory
B. Caching content nearer to users
C. Adding more machines or instances
D. Indexing queried database columns

**4.** What does a CDN do that plain caching does not?
A. Delivers content from servers closer to users
B. Distributes traffic evenly across servers
C. Rolls code back to an earlier version
D. Fires an alert when CPU crosses a threshold

**5.** Which trio are the deck's key concepts of monitoring?
A. Error handling, debugging tools, version control
B. Firewalls, patching, intrusion detection
C. Metrics, alerts, logging
D. Unit, integration, end-to-end

## Answers

**1. B** — CSRF rides an existing authenticated session, for example a link that changes the victim's profile email. XSS injects a script into a page other users view; SQLi manipulates the database through input; misconfiguration is an overlooked setting.

**2. D** — Input validation sanitises inputs and uses parameterised queries. Output encoding with CSP answers XSS, session management with tokens and expiry answers CSRF, and security headers means HSTS and X-Content-Type-Options.

**3. C** — Horizontal scaling adds instances, usually behind a load balancer. Upgrading CPU, memory or storage on the existing server is vertical scaling; caching nearer users is a CDN; indexing is database optimisation.

**4. A** — A CDN such as Cloudflare caches on servers near the user, cutting latency. Distributing traffic is load balancing, rollback is Git under debugging, and thresholds are monitoring alerts.

**5. C** — Metrics, alerts and logging sit under monitoring. Error handling, debugging tools and version control are debugging's three; the firewall trio is server security; the last is the testing list.
