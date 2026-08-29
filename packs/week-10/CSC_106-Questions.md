# CSC_106 — Week 10 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 11, not this week. Notes closed.*

## Section A - Multiple choice (12)

**1.** A student says "a server-side language is just a language that happens to be used on a server." What is the precise definition from this week?

a) A language that runs in the browser and is compiled before it is sent to the client
b) A programming language specifically designed for server-side scripting, running on a web server and processing requests from client-side applications
c) A language whose only purpose is to write HTML and CSS files for the browser to display
d) A markup language used to define the structure of data exchanged over HTTP

**2.** A start-up must build a web application that pushes live stock prices to thousands of simultaneously connected users. Which server-side technology does the lecture name, and on what technical grounds?

a) PHP, because it is the most widely used server-side language and is embedded in HTML
b) Java, because it is renowned for reliability and scalability and is used with Spring
c) Node.js, because its event-driven, non-blocking I/O model makes it efficient for real-time applications and lets it handle a large number of concurrent connections
d) Ruby, because its elegant syntax speeds up development of time-sensitive features

**3.** Which pairing of language and named characteristic is correct?

a) PHP — renowned for its elegant syntax and used with the Rails framework
b) Python — a versatile language used well beyond web development, with Django and Flask as popular web frameworks
c) Java — known for its simplicity and often embedded directly in HTML code
d) Ruby — allows developers to use JavaScript on the server side

**4.** What is a "server environment" as defined in this lesson?

a) The physical room and cooling system in which servers are housed
b) The collection of hardware, software and networking components that enable a server to perform its functions
c) The set of environment variables passed to a running application process
d) The operating system installed on the server, and nothing else

**5.** A team is building a microservices application on cloud virtual machines and needs to package each service and then manage the running fleet. Which pairing matches the lecture's application server environment example?

a) Apache for packaging and MySQL for orchestration
b) Docker for containerisation and Kubernetes for orchestration
c) Prometheus for containerisation and Helm for orchestration
d) Fail2ban for containerisation and phpMyAdmin for orchestration

**6.** In the LAMP stack example, which component plays which role?

a) Linux is the web server, Apache is the operating system, MySQL is the language, PHP is the database
b) Linux is the operating system, Apache is the web server, MySQL is the database server, PHP is the scripting language
c) Linux is the database, Apache is the scripting language, MySQL is the OS, PHP is the web server
d) All four are server software installed on top of Windows Server

**7.** A logistics platform must store large volumes of semi-structured event records whose fields differ from one record to the next. Which DBMS does the lecture point to, and why?

a) Oracle Database, because enterprise applications need advanced analytics
b) Redis, because it is extremely fast and stores key-value pairs in memory
c) MongoDB, because it is a schema-less, document-oriented NoSQL system suited to unstructured or semi-structured data and flexible data models
d) MySQL, because it is ACID-compliant and has a strong community

**8.** Which statement about MySQL and PostgreSQL is correct as taught this week?

a) MySQL is NoSQL and PostgreSQL is relational
b) Both are RDBMSs; MySQL is named for web applications and small to medium databases, while PostgreSQL is named for large-scale applications, complex data models and strong JSON support
c) Both are in-memory stores used mainly for caching and message brokering
d) PostgreSQL is proprietary and MySQL is the only open-source option of the two

**9.** What exactly does normalization do, and how does it differ from indexing?

a) Normalization organises data in a relational database to minimise redundancy and improve integrity by dividing it into related tables; indexing creates data structures that speed up retrieval
b) Normalization compresses stored data to save disk; indexing sorts the tables alphabetically
c) Both are the same technique under different names
d) Normalization speeds up queries; indexing removes duplicate rows

**10.** A mobile client needs to change the delivery address on an existing order, and separately to submit a brand-new order. Which HTTP methods does the lecture assign?

a) PUT to update the existing order, POST to create the new one
b) POST to update the existing order, PUT to create the new one
c) GET to update the existing order, DELETE to create the new one
d) POST for both, because both send data in a request body

**11.** An API provider blocks a client that has been calling an endpoint thousands of times a minute. Which named API concept is being enforced, and what is its stated purpose?

a) Authentication — verifying the identity of the client before granting access
b) Versioning — ensuring backward compatibility as the API changes
c) Rate limiting — restricting the number of requests within a specified time frame to prevent abuse and ensure fair usage
d) Data validation — checking data before it is sent to prevent invalid requests

**12.** Which statement best captures what an API is and one of the reasons the lecture gives for its importance?

a) An API is a database query language; it matters because it makes SQL unnecessary
b) An API is a set of rules, protocols and tools allowing different software applications to communicate; among other things it enables a clear separation between the front end and the back end
c) An API is a specific URL representing one resource; it matters because it replaces HTTP
d) An API is a server environment component; it matters because it monitors performance

## Section B - Short answer (3)

**13.** Define a **server-side programming language** and list the **five reasons** the lecture gives for their importance. Then name **three** of the five server-side languages taught and state the distinguishing characteristic of each.

**14.** Compare **relational (SQL)** and **NoSQL** database management systems using the five systems named this week. For each of (a) a small e-commerce site and (b) a caching layer for real-time analytics, name the system the lecture would choose and justify it from its stated type, usage and features.

**15.** Explain what an **API endpoint** is and give the four named **HTTP methods** with the action each performs. Then list **four** of the API integration best practices and say why each protects the integration.

## Answers

**1. b** — *definition of a server-side language*: a language specifically designed for server-side scripting, running on a web server and processing requests from client-side applications, handling database operations, user authentication and generating dynamic content for the client to render. **a** inverts the tier — browser code is client-side. **c** describes what the frontend consumes, not what a backend language does. **d** confuses a programming language with a data format such as XML.

**2. c** — *Node.js and real-time applications*: the mid-lesson answer names Node.js precisely because its event-driven, non-blocking I/O model handles many concurrent connections, making it ideal where timely updates are crucial. **a** cites PHP's real named traits (popularity, HTML embedding) but neither addresses concurrency. **b** picks reliability and scalability, which are Java's traits but not the real-time criterion the question asks for. **d** offers a developer-experience trait as though it were a runtime property.

**3. b** — *language characteristics*: Python is described as versatile, used for far more than web development, with Django and Flask as its popular web frameworks. **a** attaches Ruby's elegant syntax and Rails to PHP. **c** attaches PHP's simplicity and HTML embedding to Java. **d** attaches Node.js's defining property to Ruby.

**4. b** — *server environment*: also called server infrastructure or a server stack — the collection of hardware, software and networking components enabling a server to perform its functions. **a** describes a data centre, not the stack. **c** confuses the lecture's term with process environment variables. **d** names one component (the OS) as though it were the whole environment.

**5. b** — *application server environment*: the worked example is Docker for containerisation and Kubernetes for orchestration, on cloud VMs or container hosts. **a** takes web-stack components and gives them roles they do not have. **c** swaps in the monitoring and package-management tools — Prometheus monitors, Helm manages Kubernetes packages; neither containerises or orchestrates. **d** uses the LAMP example's security and database-admin tools.

**6. b** — *LAMP*: Linux (operating system, e.g. Ubuntu Server), Apache (web server), MySQL (database server), PHP (scripting language). **a** and **c** shuffle the roles. **d** contradicts the L in LAMP; the example is explicitly a Linux server.

**7. c** — *MongoDB*: a NoSQL DBMS, schema-less and document-oriented, ideal for large volumes of unstructured or semi-structured data and flexible data models. **a** picks Oracle on the enterprise/analytics profile, which the question never describes. **b** describes Redis correctly but Redis is named for caching, real-time analytics and message brokering, not bulk document storage. **d** states MySQL's genuine features while ignoring that a fixed relational schema is the wrong fit for records whose fields vary.

**8. b** — *MySQL vs PostgreSQL*: both are RDBMSs and both are ACID-compliant and open-source; the lecture separates them by usage — MySQL for web applications and small to medium databases, PostgreSQL for large-scale applications and complex data models, with advanced data types and strong JSON support. **a** miscategorises MySQL. **c** describes Redis. **d** reverses the licensing; both are named open-source.

**9. a** — *normalization vs indexing*: normalization is a design technique that divides data into related tables to minimise redundancy and improve data integrity; indexing is a performance technique creating structures that allow faster data retrieval on frequently queried columns. **b** invents compression and sorting. **c** collapses two distinct techniques. **d** swaps their effects — it is indexing that speeds queries.

**10. a** — *HTTP methods*: the lecture assigns GET to retrieve, POST to create, PUT to update and DELETE to remove. Changing an existing order is an update (PUT); submitting a new one is a creation (POST). **b** swaps the two. **c** assigns methods with the wrong actions entirely. **d** is the common shortcut of treating any request with a body as POST, which erases the create/update distinction the methods exist to express.

**11. c** — *rate limiting*: it restricts the number of API requests within a specified time frame to prevent abuse and ensure fair usage, and the corresponding best practice is to respect the provider's limits to avoid being blocked or restricted. **a** describes identity verification, which the client in the question has already passed. **b** concerns API change management over time. **d** concerns the correctness of payloads, not their frequency.

**12. b** — *what an API is*: a set of rules, protocols and tools allowing different software applications to communicate, defining the methods and data formats for requesting and exchanging information; among its five named benefits is a clear separation between the front end (user interface) and back end (server), alongside interoperability, modularity, scalability and ecosystem expansion. **a** confuses an API with SQL. **c** gives the definition of an *endpoint*, and APIs are built on HTTP rather than replacing it. **d** confuses an API with the monitoring tools of a server environment.

**13.** *Server-side languages and why they matter*: A **server-side programming language**, also called a **backend language**, is a programming language **specifically designed for server-side scripting**. It enables developers to write code that **runs on a web server** and **processes requests from client-side applications**, usually web browsers; server-side code handles **database operations, user authentication, and generating dynamic content to be sent to the client-side for rendering**.

The five reasons they are essential: **Dynamic Content Generation** — creating content that changes in real time, such as social media feeds, weather updates and e-commerce product listings; **Data Processing** — processing and manipulating data stored in databases, including retrieving, updating and deleting it; **User Authentication** — facilitating authentication and authorisation so users have secure access to specific parts of an application; **Security** — implementing measures against common web vulnerabilities such as **SQL injection** and **cross-site scripting (XSS)**; and **Scalability** — building applications that handle a large number of concurrent users.

Any three of: **Python** — versatile, used well beyond web development, with **Django** and **Flask** as popular web frameworks; **Ruby** — renowned for its **elegant syntax**, used with **Ruby on Rails**; **PHP** — one of the most widely used server-side languages, known for **simplicity** and **often embedded directly in HTML code**; **Node.js (JavaScript)** — allows JavaScript to be used on the server side and is highly **efficient for building real-time applications**; **Java** — renowned for **reliability and scalability**, often used with **Spring**.

**14.** *Relational vs NoSQL*: The three **RDBMSs** named store data in tables under a defined **schema**, are queried with **SQL** and are all **ACID-compliant**. **MySQL** — widely used in web applications and small to medium-sized databases; open-source, SQL support, strong community. **PostgreSQL** — suitable for large-scale applications and complex data models; open-source, advanced data types, strong JSON support. **Oracle Database** — enterprise-level applications and data warehouses; high availability, scalability and advanced analytics. The two **NoSQL** systems abandon the fixed relational schema: **MongoDB** is **schema-less and document-oriented**, ideal for large volumes of unstructured or semi-structured data and flexible data models; **Redis** is an **in-memory key-value store**, extremely fast, supporting sets, lists and hashes, used for caching, real-time analytics and message brokering.

(a) For a **small e-commerce website**, choose **MySQL** — the lecture's own mid-lesson answer. It is a reliable, widely used RDBMS that suits **small to medium-sized databases**; its **SQL support**, **ACID compliance** (important for orders and payments, which must not be left half-applied) and **strong community** make it practical, and its **ease of use and compatibility with various programming languages and frameworks** simplifies development on a small project. (b) For a **caching layer serving real-time analytics**, choose **Redis** — its stated type is an **in-memory NoSQL** database and its stated usage is exactly **caching, real-time analytics and message brokering**; being in-memory it is extremely fast, and its key-value model with sets, lists and hashes fits transient derived data rather than the system of record.

**15.** *Endpoints, HTTP methods and integration practice*: An **API endpoint** is a **specific URL or URI (Uniform Resource Identifier) that represents a resource or service provided by an API**; endpoints are the addresses to which **requests** are sent and from which **responses** are received. A single API exposes many endpoints, one per resource or service.

The four named **HTTP methods**, which **define the actions that can be performed on resources**: **GET** — retrieve data; **POST** — create data; **PUT** — update data; **DELETE** — remove data. The **response** returned after a request carries **status information, data and headers**, and the data itself is typically formatted as **JSON or XML**.

Four of the seven best practices (any four): **Read the documentation** — it contains the essential information on endpoints, request methods, data formats and authentication requirements, so the integration is built against the real contract rather than assumptions. **Handle errors** — implement error handling so API failures produce informative feedback or an appropriate action instead of a broken page. **Respect rate limits** — stay within the provider's limits to avoid being blocked or restricted for excessive requests. **Validate data** — check data before sending it, to prevent data corruption and invalid requests. **Authenticate properly** — use the required credentials or tokens so requests are accepted and access remains controlled. **Test thoroughly** — across different scenarios including edge cases and error conditions, so failures are found before users meet them. **Watch versioning** — monitor for version updates and adapt the integration, so a provider's change does not silently break it.
