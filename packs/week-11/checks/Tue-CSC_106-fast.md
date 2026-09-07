# Tuesday — CSC_106 fast-hour check

*Fixing insecure code, then hosting, scaling, performance and monitoring choices.*
*12 questions, straight after the hour. Score out of 12.*

**1.** The table `users` has 3 rows.
```php
$sql = "SELECT * FROM users WHERE name = '" . $name . "'";
```
A visitor submits the name `x' OR '1'='1`. How many rows does the query return?
A. 0
B. 1
C. 3
D. None; the query fails with a syntax error

**2.** A PHP page displays a comment `$c` typed by another user. Which line displays it without letting a `<script>` tag in the comment run?
A. `echo trim($c);`
B. `echo htmlspecialchars($c);`
C. `echo strtoupper($c);`
D. `echo $c;`

**3.** A forum post contains `<img src="https://bank.example/transfer?to=attacker&amount=5000">`. A customer logged in to the bank views the post and the transfer goes through. Which best practice would have stopped this?
A. Session management with unique per-request tokens
B. Output encoding with a Content Security Policy
C. Parameterised database queries
D. Regular updates of the framework

**4.** A live site is running with debug mode switched on, so any error page shows the full stack trace, file paths and database connection string. Which vulnerability is this?
A. Cross-Site Scripting
B. SQL Injection
C. Cross-Site Request Forgery
D. Security Misconfiguration

**5.** Which response header tells a browser to connect to the site only over HTTPS from now on?
A. Strict-Transport-Security
B. X-Content-Type-Options
C. Content-Security-Policy
D. Set-Cookie

**6.** A small team needs root access and its own operating system on the server, but cannot afford a dedicated machine. Which hosting option fits?
A. Shared hosting
B. VPS hosting
C. On-premises hosting
D. Cloud hosting with managed services

**7.** One web server handles at most 500 requests per second. Traffic is forecast to peak at 1800 requests per second. Behind a load balancer, what is the minimum number of identical servers needed?
A. 2
B. 3
C. 4
D. 5

**8.** The same product-list query hits the database 2000 times a minute, and its result changes only once an hour. Which fix removes most of that load?
A. A load balancer in front of the web servers
B. Caching the query result in a temporary store
C. Serving the site through a CDN
D. Adding RAM to the database server

**9.** An engineer opens the recorded history of yesterday's failed login attempts, each with its timestamp and IP address. Which monitoring concept is being used?
A. Metrics
B. Alerts
C. Logging
D. Error handling

**10.** ```js
try {
  save(order);
} catch (e) {
  showMessage("Could not save. Try again.");
}
```
Which debugging concept does this code apply?
A. Version control
B. Debugging tools
C. Load testing
D. Error handling

**11.** What is the difference between a vulnerability and a threat?
A. A vulnerability is a weakness in a system; a threat is a potential danger that could exploit it
B. A vulnerability is an attack in progress; a threat is a weakness left after it
C. They are the same thing described from the attacker's and the defender's side
D. A vulnerability affects hardware; a threat affects software

**12.** What is continuous integration (CI)?
A. Running a load test against the site before every release
B. Watching a live system's metrics and raising alerts on thresholds
C. Automatically building, testing and deploying code changes as they are committed to version control
D. Reviewing every pull request by hand before it is merged

---

## Answers

**1. C** — *Tracing a SQL injection payload.* The string becomes SELECT * FROM users WHERE name = 'x' OR '1'='1'. The quote in the input closed the name value early, and OR '1'='1' is true for every row, so all 3 rows come back. This is SQL injection; a parameterised query would have treated the whole input as one literal name.

0 assumes no user is called x; 1 assumes the input is compared as a plain name; a syntax error would need an unbalanced quote, but the payload is built so that the quotes balance.

**2. B** — *Output encoding against XSS.* htmlspecialchars converts <, >, & and quotes into entities such as &lt; and &gt;, so the browser shows the tag as text instead of executing it. That is output encoding, the named defence against cross-site scripting.

trim only removes surrounding whitespace; strtoupper changes the case but <SCRIPT> still runs; echo $c writes the raw markup into the page, which is the vulnerability itself.

**3. A** — *Recognising CSRF and its defence.* The customer's browser sent the request with her valid session cookie attached, without her intending it: cross-site request forgery. The defence is session management, in particular a unique token that the bank's own forms include and the forged request cannot know, plus session expiration.

Output encoding and CSP stop injected scripts (XSS), but no script was injected here; parameterised queries stop SQL injection; updates patch known library flaws, not a design that trusts any request carrying a cookie.

**4. D** — *Identifying security misconfiguration.* Nothing was injected and no user was tricked; an overlooked setting is exposing sensitive information. That is security misconfiguration, the same family as leaving plaintext database credentials in a config file.

XSS needs a script injected into a page others view; SQL injection needs SQL inserted through input; CSRF needs an authenticated user made to send a request.

**5. A** — *Security headers and what each does.* Strict-Transport-Security is the HSTS header: once received, the browser refuses plain HTTP for that site and upgrades every request to HTTPS.

X-Content-Type-Options stops the browser guessing a file's type from its content; Content-Security-Policy restricts where scripts and other resources may load from, which mitigates XSS; Set-Cookie creates a cookie and says nothing about the transport.

**6. B** — *Choosing a hosting option.* A VPS partitions one physical server into virtual servers that each run their own OS, giving root-level control at a fraction of the cost of a whole machine: the named balance of control and cost.

Shared hosting is cheaper still but gives no OS of your own and limited customisation; on-premises means buying and maintaining hardware; managed cloud services trade away control for automation.

**7. C** — *Sizing horizontal scaling.* Capacity must be at least the peak: n × 500 ≥ 1800 gives n ≥ 3.6, and servers come whole, so round up to 4. Four servers give 2000 requests per second, enough for the peak.

3 rounds down and would cap out at 1500; 2 gives only 1000; 5 works but is one more than the minimum asked for.

**8. B** — *Caching versus other performance fixes.* The result is identical between hourly changes, so store it once in a cache and serve the copy; the database then answers once per hour instead of 2000 times a minute.

A load balancer spreads web traffic but every server still runs the query; a CDN caches static content near users, not a database result behind the application; more RAM (vertical scaling) makes the same 2000 queries run faster rather than removing them.

**9. C** — *Metrics, alerts and logging.* A stored record of events, actions and errors is a log; reading yesterday's entries is logging at work.

Metrics are measured quantities such as response time or error rate; an alert is a notification that fires when a metric crosses a threshold; error handling is a debugging concept about catching exceptions in code, not a monitoring one.

**10. D** — *Error handling with try and catch.* try-catch is the named error-handling mechanism: the failure inside save is caught and the user gets an informative message instead of a crash.

Version control is Git, for rollback and collaboration; debugging tools are IDEs and Chrome DevTools used to step through code; load testing (JMeter, Gatling) simulates traffic and is a performance activity.

**11. A** — *Vulnerability versus threat.* A vulnerability is a weakness in design, implementation or configuration that exists whether or not anyone uses it. A threat is the potential harm, such as SQL injection, XSS or a DDoS attack, that could exploit such a weakness.

The second option reverses the two; the third collapses them; the last invents a hardware and software split that is not part of either definition.

**12. C** — *Definition of continuous integration.* CI means that each commit to version control automatically triggers a build, the test suite and, where configured, deployment, so problems surface as soon as they are introduced. Jenkins and Travis CI are the tools named for it.

Load testing is JMeter and Gatling's job; watching metrics and alerts is monitoring; manual review is code review, a secure development practice, not automation.
