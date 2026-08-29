# CSC_106 — Week 10 Questions

*Backend programming: server-side languages, server environments and stacks, database management and DBMSs, and API development and integration. Sat seven days later during Saturday catch-up in Week 11 as a retention test — notes closed.*

## Multiple choice

**1.** Among the five reasons the lecture gives for server-side languages mattering is **security**. Which two vulnerabilities does it name there?

A. Brute force attacks and phishing
B. SQL injection and cross-site scripting (XSS)
C. Denial of service and packet sniffing
D. Cross-site request forgery and clickjacking

**2.** A start-up must build a web application pushing live stock prices to thousands of simultaneously connected users. Which server-side technology does the lecture name, and on what technical grounds?

A. PHP, because it is the most widely used server-side language and is embedded directly in HTML
B. Java, because it is renowned for reliability and scalability and is used with the Spring framework
C. Ruby, because its elegant syntax speeds up the development of time-sensitive features
D. Node.js — its event-driven, non-blocking I/O handles many concurrent connections

**3.** Which pairing of language and named characteristic is correct?

A. Python — versatile beyond web development, with Django and Flask as its web frameworks
B. PHP — renowned for its elegant syntax, and used with the Rails framework for web development
C. Java — known for its simplicity, and often embedded directly inside HTML code on the page
D. Ruby — allows developers to write JavaScript on the server side, so one language covers both tiers

**4.** What is a "server environment" as this lesson defines it?

A. The physical room, power supply and cooling system in which the servers are housed
B. The set of environment variables passed to an application process when it starts up
C. The collection of hardware, software and networking components that enable a server to work
D. The operating system installed on the server, together with its patch level, and nothing else

**5.** A team is building a microservices application on cloud virtual machines and needs to package each service and then manage the running fleet. Which pairing matches the lecture's application server environment example?

A. Apache for packaging and MySQL for orchestration
B. Docker for containerisation and Kubernetes for orchestration
C. Prometheus for containerisation and Helm for orchestration
D. Fail2ban for containerisation and phpMyAdmin for orchestration

**6.** In the LAMP stack example, which component plays which role?

A. Linux is the web server, Apache the operating system, MySQL the language, and PHP the database server
B. Linux is the database, Apache the scripting language, MySQL the OS, and PHP the web server itself
C. All four are pieces of server software installed on top of a Windows Server host
D. Linux is the operating system, Apache the web server, MySQL the database server, PHP the scripting language

**7.** A logistics platform must store large volumes of semi-structured event records whose fields differ from one record to the next. Which DBMS does the lecture point to, and why?

A. MongoDB — schema-less and document-oriented, for semi-structured data and flexible models
B. Oracle Database, because enterprise-scale applications need its advanced analytics capabilities
C. Redis, because it is extremely fast and stores its key-value pairs entirely in memory
D. MySQL, because it is ACID-compliant, open-source and backed by a strong community

**8.** Which statement about MySQL and PostgreSQL is correct as taught this week?

A. MySQL is a NoSQL system and PostgreSQL is the relational one of the pair
B. Both are in-memory key-value stores used mainly for caching and message brokering between services
C. Both are RDBMSs: MySQL suits small to medium web databases, PostgreSQL large-scale complex ones
D. PostgreSQL is proprietary and licensed per core, which makes MySQL the only open-source option here

**9.** What exactly does normalization do, and how does it differ from indexing?

A. Normalization compresses stored data to save disk space; indexing sorts the tables alphabetically
B. They are the same technique under two different names, one used by designers and one by administrators
C. Normalization speeds up queries on large tables; indexing removes duplicate rows from those tables
D. Normalization divides data into related tables to cut redundancy; indexing speeds retrieval

**10.** A service's database is straining under a growing workload. The team adds more database servers rather than upgrading the existing machine. Which technique is that, in the lecture's terms?

A. Horizontal scaling — adding more servers, as against vertical scaling, which upgrades server resources
B. Vertical scaling, because the total resources available to the database have been increased
C. Replication, because the same technique is what provides high availability and fault tolerance
D. Performance optimisation, since the lecture files every capacity change under query optimisation and caching

**11.** A mobile client needs to change the delivery address on an existing order, and separately to submit a brand-new order. Which HTTP methods does the lecture assign?

A. POST to update the existing order, PUT to create the new one
B. PUT to update the existing order, POST to create the new one
C. GET to update the existing order, DELETE to create the new one
D. POST for both, because each of them sends data to the server in a request body

**12.** An API provider blocks a client that has been calling an endpoint thousands of times a minute. Which named concept is being enforced, and what is its stated purpose?

A. Authentication — verifying the identity of a client before granting it access to the API
B. Versioning — ensuring backward compatibility as the API is updated and changed over time
C. Rate limiting — restricting requests within a time frame to prevent abuse and ensure fair usage
D. Data validation — checking data before it is sent, to prevent corruption and invalid requests

## Short answer

**13.** Define a **server-side programming language** and list the **five reasons** the lecture gives for their importance. Then name **three** of the five server-side languages taught and state the distinguishing characteristic of each.

**14.** Compare **relational (SQL)** and **NoSQL** database management systems using the five systems named this week. For each of (a) a small e-commerce site and (b) a caching layer for real-time analytics, name the system the lecture would choose and justify it from its stated type, usage and features.

**15.** Explain what an **API endpoint** is and give the four named **HTTP methods** with the action each performs. Then list **four** of the API integration best practices, saying why each protects the integration, and name what the week's summary says is used to maintain user sessions and manage state across requests.

## Answers

**1. B** — *the security reason*: server-side code helps implement security measures protecting against common web vulnerabilities, and the two the lecture names at that point are **SQL injection** and **cross-site scripting (XSS)**. **A** names attacks and defences from the Week 11 security material, not this list. **C** and **D** name real attacks that this week's slides never mention — the question is what the lecture says, not what is true of the web in general.

**2. D** — *Node.js and real-time applications*: the mid-lesson answer names Node.js precisely because its event-driven, non-blocking I/O model makes it efficient for real-time applications and lets it handle a large number of concurrent connections, which is what "thousands of simultaneous users" asks for. **A** cites PHP's real named traits, neither of which addresses concurrency. **B** cites Java's real traits, but reliability and scalability are not the real-time criterion. **C** offers a developer-experience trait as though it were a runtime property.

**3. A** — *language characteristics*: Python is described as versatile, used well beyond web development, with **Django** and **Flask** as its popular web frameworks. **B** attaches Ruby's elegant syntax and Rails to PHP. **C** attaches PHP's simplicity and HTML embedding to Java. **D** attaches Node.js's defining property to Ruby.

**4. C** — *server environment*: also called server infrastructure or a server stack — the collection of hardware, software and networking components that enable a server to perform its functions. **A** describes a data centre rather than the stack. **B** confuses the lecture's term with process environment variables. **D** names one of the eight components as though it were the whole environment.

**5. B** — *the application server environment example*: Docker for containerisation and Kubernetes for orchestration, running on cloud-based virtual machines or container hosts. **A** takes web-stack components and gives them roles they do not have. **C** swaps in the monitoring and package-management tools — Prometheus monitors and Helm manages Kubernetes packages; neither containerises or orchestrates. **D** uses the LAMP example's security and database-admin tools.

**6. D** — *LAMP*: Linux is the operating system (Ubuntu Server in the example), Apache the web server, MySQL the database server, PHP the scripting language. **A** and **B** shuffle the four roles. **C** contradicts the L in LAMP; the worked example is explicitly a Linux server.

**7. A** — *MongoDB*: its stated type is NoSQL, it is schema-less and document-oriented, and its stated usage is large volumes of unstructured or semi-structured data with flexible data models — exactly records whose fields vary. **B** picks Oracle on the enterprise and analytics profile, which the question never describes. **C** describes Redis correctly, but Redis is named for caching, real-time analytics and message brokering, not bulk document storage. **D** states MySQL's real features while ignoring that a fixed relational schema is the wrong fit here.

**8. C** — *MySQL vs PostgreSQL*: both are RDBMSs, both ACID-compliant and open-source; the lecture separates them by **usage** — MySQL for web applications and small to medium-sized databases, PostgreSQL for large-scale applications and complex data models, with advanced data types and strong JSON support. **A** miscategorises MySQL. **B** describes Redis. **D** reverses the licensing; both are named as open-source.

**9. D** — *normalization vs indexing*: normalization is a **design** technique, organising data into related tables to minimise redundancy and improve data integrity; indexing is a **performance** technique, creating index structures on frequently queried columns to allow faster retrieval. **A** invents compression and alphabetical sorting. **B** collapses two distinct techniques. **C** swaps their effects — it is indexing that speeds queries up.

**10. A** — *scaling*: the lecture's scaling technique has two named halves — **horizontal scaling adds more servers**, **vertical scaling upgrades the resources of the existing server**. Adding servers is horizontal. **B** names the other half. **C** names a different technique: replication and high availability exist for data availability and fault tolerance, not for absorbing workload growth by adding capacity. **D** names the technique concerned with query optimisation and caching, which is not what the team did.

**11. B** — *HTTP methods*: the lecture assigns GET to retrieve, POST to create, PUT to update and DELETE to remove. Changing the address on an existing order is an update, so PUT; submitting a brand-new order is a creation, so POST. **A** swaps the two. **C** assigns methods with entirely the wrong actions. **D** is the common shortcut of treating any request with a body as POST, which erases the create/update distinction the methods exist to express.

**12. C** — *rate limiting*: it restricts the number of API requests that can be made within a specified time frame, to prevent abuse and ensure fair usage; the matching best practice is to respect the provider's limits to avoid being blocked or restricted. **A** describes identity verification, which this client has already passed. **B** concerns managing change in the API over time. **D** concerns the correctness of what is sent, not how often it is sent.

**13.** *Server-side languages and why they matter*: A **server-side programming language**, often called a **backend language**, is a programming language **specifically designed for server-side scripting**. It enables developers to write code that **runs on a web server** and **processes requests from client-side applications**, usually web browsers; server-side code handles **database operations, user authentication, and generating dynamic content to be sent to the client-side for rendering**.

The five reasons they are essential: **Dynamic Content Generation** — content that changes in real time, such as social media feeds, weather updates and e-commerce product listings; **Data Processing** — processing and manipulating data stored in databases, including retrieving, updating and deleting it; **User Authentication** — facilitating authentication and authorisation so users have secure access to specific parts of an application; **Security** — implementing measures against common web vulnerabilities such as **SQL injection** and **cross-site scripting (XSS)**; and **Scalability** — building applications that can handle a large number of concurrent users.

Any three of: **Python** — versatile, used well beyond web development, with **Django** and **Flask** as popular web frameworks; **Ruby** — renowned for its **elegant syntax**, used with **Ruby on Rails**; **PHP** — one of the most widely used server-side languages, known for **simplicity** and **often embedded directly in HTML code**; **Node.js (JavaScript)** — allows JavaScript to be used on the server side and is highly **efficient for building real-time applications**; **Java** — renowned for **reliability and scalability**, often used with **Spring**.

**14.** *Relational vs NoSQL*: The three **RDBMSs** named store data in tables under a defined **schema**, are queried with **SQL** and are all **ACID-compliant**. **MySQL** — widely used in web applications and small to medium-sized databases; open-source, SQL support, strong community. **PostgreSQL** — suitable for large-scale applications and complex data models; open-source, advanced data types, strong JSON support. **Oracle Database** — enterprise-level applications and data warehouses; high availability, scalability and advanced analytics. The two **NoSQL** systems drop the fixed relational schema: **MongoDB** is **schema-less and document-oriented**, ideal for large volumes of unstructured or semi-structured data and flexible data models; **Redis** is an **in-memory key-value store**, extremely fast, supporting sets, lists and hashes, used for caching, real-time analytics and message brokering.

(a) For a **small e-commerce website**, choose **MySQL** — the lecture's own mid-lesson answer. It is a reliable, widely used RDBMS suited to **small to medium-sized databases**; its **SQL support**, **ACID compliance** and **strong community** make it a practical choice, and its **ease of use and compatibility with various programming languages and frameworks** simplifies development on a small-scale project. (b) For a **caching layer serving real-time analytics**, choose **Redis** — its stated type is an **in-memory NoSQL** database and its stated usage is exactly **caching, real-time analytics and message brokering**; being in-memory it is extremely fast, and its key-value model with sets, lists and hashes suits transient derived data rather than the system of record.

**15.** *Endpoints, HTTP methods and integration practice*: An **API endpoint** is a **specific URL or URI (Uniform Resource Identifier) that represents a resource or service provided by an API**; endpoints are the addresses to which **requests** are sent and from which **responses** are received. A single API exposes many endpoints, one per resource or service.

The four named **HTTP methods**, which **define the actions that can be performed on resources**: **GET** — retrieve data; **POST** — create data; **PUT** — update data; **DELETE** — remove data. The **response** returned after a request carries **status information, data and headers**, and the data itself is typically formatted as **JSON or XML**.

Four of the seven best practices (any four): **Read the documentation** — it holds the essential information on endpoints, request methods, data formats and authentication requirements, so the integration is built against the real contract rather than assumptions. **Handle errors** — implement error handling so API failures produce informative feedback or an appropriate action instead of a broken page. **Respect rate limits** — stay within the provider's limits to avoid being blocked or restricted for excessive requests. **Validate data** — check data before sending it, to prevent data corruption and invalid requests. **Authenticate properly** — use the required credentials or tokens so requests are accepted and access stays controlled. **Test thoroughly** — across different scenarios including edge cases and error conditions, so failures are found before users meet them. **Watch versioning** — monitor for version updates and adapt the integration, so a provider's change does not silently break it.

Finally, because separate requests do not remember one another, the week's summary names **cookies or session management technologies** as what is used to **maintain user sessions and manage state across requests**.
