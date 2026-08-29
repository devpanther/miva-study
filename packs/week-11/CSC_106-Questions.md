# CSC_106 — Week 11 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 12, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** A login form lets a user in when they type `' OR 1=1--` into the username box. Which vulnerability is this?
A. Cross-Site Scripting
B. SQL Injection
C. Cross-Site Request Forgery
D. Security Misconfiguration

**2.** An attacker posts a comment containing JavaScript. Every visitor who loads the page runs it and their session cookie is stolen. This is:
A. Command Injection
B. CSRF
C. XSS
D. XML Injection

**3.** While logged into her bank, a user clicks a link in an email; the link silently submits a request that changes her registered email address. The attack is:
A. CSRF
B. SQL Injection
C. Security Misconfiguration
D. Phishing only

**4.** A team finds that the production database username and password are sitting in plaintext in a configuration file. In the deck's classification this is:
A. Injection attack
B. A threat, not a vulnerability
C. Security Misconfiguration
D. Poor session management

**5.** Your developers keep concatenating user input into SQL strings. Which best practice does the deck prescribe specifically for this?
A. Output encoding with CSP
B. Parameterised queries under Input Validation
C. HSTS security headers
D. Session expiration policies

**6.** Which pairing of best practice to purpose matches the deck?
A. Output Encoding / CSP → mitigates XSS
B. Session Management → mitigates SQL injection
C. Security Headers → mitigates CSRF
D. Regular Updates → mitigates XSS

**7.** A service sits in front of your application, inspects incoming HTTP/HTTPS requests, recognises malicious patterns and blocks them before they reach the app. It is:
A. A load balancer
B. An intrusion detection system
C. A Web Application Firewall
D. A CDN

**8.** A startup has a tight budget, no sysadmin, and wants to host one small personal blog. The deck's recommended option is:
A. On-premises hosting
B. Shared hosting
C. Cloud hosting on AWS
D. A dedicated physical server

**9.** An e-commerce business expects large, unpredictable traffic surges each holiday season and does not want to buy hardware. Which option does the deck recommend, and why?
A. VPS — balance of control and cost
B. On-premises — complete control
C. Shared hosting — cost-effective
D. Cloud hosting — scalability, flexibility and cost-efficiency

**10.** During a traffic surge you add four more web server instances and put them behind NGINX. You have performed:
A. Vertical scaling with caching
B. Horizontal scaling with load balancing
C. Vertical scaling with a CDN
D. Database optimisation

**11.** Users in Europe complain that images on your Nigerian-hosted site load slowly, though the server itself is not overloaded. The right fix is:
A. Add more CPU and RAM to the server
B. Index the database columns
C. Use a CDN such as Cloudflare
D. Add a Web Application Firewall

**12.** Your team wants code changes automatically built, tested and deployed each time they are committed to version control. This practice, and a named tool for it, are:
A. Load testing — Apache JMeter
B. Performance monitoring — Datadog
C. Continuous Integration — Jenkins
D. Version control — Git

## Section B — Short answer (3)

**B1.** A social media platform is slow when users fetch their feeds; the servers are not saturated but queries are. Name and explain **two** distinct optimisation techniques from the deck that address this, giving the deck's own example for each.

**B2.** Distinguish **authentication** from **authorization** as the deck presents them, name the measure that strengthens each, and explain why a WAF does not substitute for either.

**B3.** A hospital is deploying an electronic health records system holding sensitive patient data. Recommend a hosting option and justify it, then list **four** security or maintenance measures from the deck that should accompany the deployment.

---

## Answers

**1. B** — malicious SQL inserted into user input to manipulate the database; the deck's own example is `'OR 1=1--` in a login form.

**2. C** — XSS injects a script into a page *viewed by other users*, leading to data theft or session hijacking.

**3. A** — CSRF tricks an *already authenticated* user into an unwanted action without consent; the deck's example is a link that changes the profile email.

**4. C** — Security Misconfiguration: overlooked settings leaving sensitive information exposed, e.g. plaintext database credentials in config files.

**5. B** — Input Validation prescribes validating/sanitising inputs and using parameterised queries for database interactions.

**6. A** — Output Encoding, with Content Security Policy, is the deck's answer to XSS; the others are mismatched (Session Management → CSRF; Security Headers → HSTS/X-Content-Type-Options generally; Regular Updates → known vulnerabilities).

**7. C** — a WAF filters and monitors HTTP/HTTPS requests as an additional layer of security; a load balancer distributes traffic and a CDN caches content.

**8. B** — shared hosting hosts multiple sites on one server sharing CPU/RAM; cost-effective with performance/customisation limits (deck example: a personal blog on Bluehost).

**9. D** — the deck's mid-lesson answer: cloud hosting such as AWS gives scalability, flexibility and cost-efficiency, with managed services that automate resource management.

**10. B** — adding more machines/instances is horizontal scaling, achieved by load balancing (NGINX, AWS Elastic Load Balancing).

**11. C** — a CDN caches and delivers content from servers geographically closer to users, reducing latency; the problem is distance, not server capacity or queries.

**12. C** — CI automatically builds, tests and deploys changes as they are committed to version control; Jenkins and Travis CI are the deck's examples.

**B1 (model answer).** *Database optimisation*: optimise queries, indexing and data structures to cut database load — the deck's example is indexing frequently queried columns so SELECT operations run faster. *Caching*: store frequently accessed data or computed results in a temporary storage layer so the primary data source is not queried each time, improving response times — for the social media case, caching feed data reduces database load. Both target the query bottleneck rather than adding hardware, so they are cheaper than scaling.

**B2 (model answer).** Authentication verifies the identity of the user accessing the application; authorization limits what that verified user may do, based on roles and permissions. Two-factor authentication (2FA), or multi-factor authentication (MFA) in the summary, strengthens authentication; role/permission-based privilege limiting strengthens authorization. A WAF only filters and monitors HTTP/HTTPS requests for malicious patterns — it is an *additional* layer that cannot decide who a user is or what they are entitled to, so it complements rather than replaces identity and privilege controls.

**B3 (model answer).** Recommend on-premises hosting for complete control over sensitive patient data (a VPS with dedicated software is the acceptable alternative where infrastructure cost is prohibitive; cloud is defensible if scalability is argued). Accompanying measures from the deck: set up firewalls; apply regular software patching/updates; install intrusion detection systems; enforce strong authentication. Add ongoing monitoring of server performance with regular backups, and a disaster recovery plan against data loss and downtime; the case study also begins with vulnerability assessment and penetration testing to remediate existing weaknesses.
