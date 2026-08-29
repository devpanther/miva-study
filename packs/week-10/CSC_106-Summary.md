# CSC_106 — Week 10 Summary

*Introduction to Web Technologies · Week 10 (9 – 15 Nov 2026) · Topic: Backend programming and development — server-side languages, server environments and stacks, database management and DBMS types, and API development and integration*

## The 8 most examinable things this week

1. **Server-side (backend) language — the definition to reproduce.** A **server-side programming language**, often called a **backend language**, is *a programming language specifically designed for server-side scripting*. It lets developers write code that **runs on a web server** and **processes requests from client-side applications (usually web browsers)**. Server-side code handles **database operations, user authentication, and generating dynamic content to be sent to the client-side for rendering**. Note the direction: the server *generates*, the client *renders*.
2. **The five reasons server-side languages matter** — the likely list question: **Dynamic Content Generation** (content that changes in real time — social media feeds, weather updates, e-commerce product listings), **Data Processing** (retrieving, updating and deleting data in databases), **User Authentication** (authentication *and authorisation*, securing access to specific parts of a site), **Security** (protecting against common web vulnerabilities, named: **SQL injection** and **cross-site scripting (XSS)**), and **Scalability** (handling a large number of concurrent users).
3. **The five named languages and the one word each is known for.** **Python** — *versatile*, used well beyond web development; frameworks **Django** and **Flask**. **Ruby** — *elegant syntax*; used with **Ruby on Rails**. **PHP** — *simplicity*, one of the most widely used, and **often embedded directly in HTML**. **Node.js (JavaScript)** — JavaScript **on the server side**, highly **efficient for real-time applications**. **Java** — *reliability and scalability*; used with **Spring**.
4. **The Node.js answer (mid-lesson question 1).** For **real-time stock price updates**, choose **Node.js**, because its **event-driven, non-blocking I/O model** makes it efficient for real-time applications and lets it **handle a large number of concurrent connections**. Memorise the phrase "event-driven, non-blocking I/O" — it is the whole justification.
5. **Server environment = hardware + software + networking.** A **server environment** (also **server infrastructure** or **server stack**) is *the collection of hardware, software and networking components that enable a server to perform its functions*. Its eight components: **server hardware** (dedicated server or **virtual machine**), **storage** (HDD/SSD), **networking equipment** (**NICs**, switches, routers), **operating system** (Linux distributions such as Ubuntu/CentOS, or Windows Server), **server software** (web servers **Apache/Nginx**; DBMSs **MySQL/PostgreSQL**; application servers **Tomcat/Node.js**), **networking configuration** (IP addresses, **DNS**, firewall rules), **security measures** (firewalls, **IDS**, encryption, access control), and **monitoring and management tools** (**Nagios**, **Prometheus**; **Ansible**, **Puppet**). Setup matters for **performance, security, reliability, scalability and maintenance**.
6. **The four worked environment examples — know which stack goes with which job.** **LAMP** = **Linux, Apache, MySQL, PHP** on Ubuntu Server, managed with **phpMyAdmin** and **Fail2ban** — a *web server environment*. **Docker + Kubernetes** on cloud VMs, secured with container scanning and **RBAC**, monitored with **Prometheus/Grafana** and packaged with **Helm** — an *application server environment* for **microservices**. **PostgreSQL** on CentOS/Ubuntu with a private network, encryption at rest and backups, managed with **pgAdmin** and **pgBadger** — a *database server environment*. **AWS**: **EC2** instances, **RDS** and **Lambda**, **VPC** and security groups, **IAM** and **WAF**, **CloudWatch** and **Elastic Beanstalk** — a *cloud environment*.
7. **Database management vocabulary, stated precisely.** **Database** — a structured collection of data organised for efficient storage, retrieval and manipulation. **DBMS** — *software that provides an interface for interacting with databases*, managing storage, retrieval, manipulation, user access and security. **Data model** — a conceptual representation of data structure and relationships (**relational, document, graph**). **SQL** — a **domain-specific language** for querying and managing **relational** databases. **Schema** — the blueprint defining how data is organised: tables, fields, data types, relationships. **Normalization** — organising data in a relational database to **minimise redundancy and improve data integrity**. **Indexing** — creating index data structures to **speed up query performance**. **ACID** — **Atomicity, Consistency, Isolation, Durability**, guaranteeing reliable transaction processing even in the presence of failures.
8. **APIs and the four HTTP methods.** An **API** is *a set of rules, protocols and tools that allows different software applications to communicate with each other*, defining **the methods and data formats** for requesting and exchanging information. **Endpoint** = a specific **URL or URI** representing a resource or service. The four named **HTTP methods**: **GET (retrieve data)**, **POST (create data)**, **PUT (update data)**, **DELETE (remove data)**. A **request** goes from client to endpoint; a **response** comes back carrying **status information, data and headers**. Data travels in **JSON or XML**.

## Server-side languages

| Language | Named for | Framework(s) named |
|---|---|---|
| **Python** | Versatility beyond web development | **Django**, **Flask** |
| **Ruby** | **Elegant syntax** | **Ruby on Rails** |
| **PHP** | **Simplicity**; **embedded in HTML**; most widely used | — |
| **Node.js (JavaScript)** | JavaScript on the server; **real-time efficiency** | — |
| **Java** | **Reliability and scalability** | **Spring** |

```php
<?php // PHP: server-side code embedded directly inside HTML ?>
<p>Welcome back, <?php echo $user['name']; ?></p>
```

```js
// Node.js: event-driven, non-blocking I/O — the request does not stall the server
const server = require("http").createServer((req, res) => {
  db.getPrices((err, prices) => {          // callback fires when data arrives
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(prices));       // meanwhile other connections are served
  });
});
server.listen(3000);
```

The backend's four jobs, from the week summary: **data storage and retrieval**, **business logic**, **authentication**, and **communication with databases**. The frontend (**HTML, CSS, JavaScript**) owns **visual layout, user interactions and client-side scripting**; **HTTP** is the foundation of the communication between the two, with the frontend **sending requests** and the backend **processing them and returning responses**.

## Server environments

```
LAMP stack (web server environment)
  Linux    -> Ubuntu Server            (operating system)
  Apache   -> web server               (server software)
  MySQL    -> database server          (server software)
  PHP      -> scripting language       (server software)
  + public IP, DNS records, firewall rules allowing HTTP and HTTPS traffic
  + phpMyAdmin (database management), Fail2ban (security monitoring)
```

| Environment | Software | Security | Monitoring / management |
|---|---|---|---|
| **Web (LAMP)** | Apache, MySQL, PHP | Firewall rules for HTTP/HTTPS, updates, patches | phpMyAdmin, Fail2ban |
| **Application (microservices)** | **Docker** (containerisation), **Kubernetes** (orchestration) | Container scanning, **RBAC**, network policies | Prometheus, Grafana, **Helm** |
| **Database** | **PostgreSQL** | Strong authentication, **encryption at rest**, backups | pgAdmin, pgBadger |
| **Cloud (AWS)** | **EC2**, **RDS**, **Lambda** (serverless) | **IAM**, **WAF** | **CloudWatch**, **Elastic Beanstalk** |

Distinguish the two roles carefully: **Docker containerises**, **Kubernetes orchestrates**. Likewise **Nagios/Prometheus monitor performance** while **Ansible/Puppet manage resources and configuration**.

## Database management systems

**Database management** is *the process of efficiently and securely storing, organising, retrieving and managing data within databases*, covering **data modelling, database design, implementation, optimisation and ongoing maintenance**. It matters for **data integrity, data accessibility, data security, scalability and data recovery**.

| DBMS | Type | Usage | Features |
|---|---|---|---|
| **MySQL** | **RDBMS** | Web applications, **small to medium** databases | ACID-compliant, open-source, supports SQL, strong community |
| **PostgreSQL** | **RDBMS** | **Large-scale** applications, **complex data models** | ACID-compliant, open-source, advanced data types, strong **JSON** support |
| **Oracle Database** | **RDBMS** | **Enterprise-level** applications, **data warehouses** | ACID-compliant, high availability and scalability, **advanced analytics** |
| **MongoDB** | **NoSQL** | Large volumes of **unstructured or semi-structured** data | **Schema-less**, **document-oriented**, flexible data models |
| **Redis** | **In-memory NoSQL** | **Caching**, **real-time analytics**, **message brokering** | Extremely fast, **key-value store**, supports sets, lists, hashes |

**The MySQL answer (mid-lesson question 2).** For a **small e-commerce website**, choose **MySQL**: a reliable, widely used **RDBMS** suited to **small to medium-sized databases**, with **SQL support**, **ACID compliance** and a **strong community**, plus **ease of use** and **compatibility with various programming languages and frameworks**.

```sql
-- SQL: a domain-specific language for relational databases
CREATE INDEX idx_orders_customer ON orders(customer_id);  -- indexing: faster retrieval
SELECT c.name, SUM(o.total) FROM customers c              -- normalized: data split
  JOIN orders o ON o.customer_id = c.id                   -- across related tables
  GROUP BY c.name;
```

**The seven management techniques:** **data modelling** (schema design, **ERDs**, primary keys, foreign keys, indexes), **normalization** (dividing data into related tables to minimise redundancy), **indexing** (indexes on frequently queried columns), **security** (access control, encryption), **performance optimisation** (query optimisation, caching), **replication and high availability** (data availability and fault tolerance), and **scaling** — **horizontal scaling = adding more servers**, **vertical scaling = upgrading server resources**.

## APIs: development and integration

**Why APIs matter (five reasons):** **Interoperability** (different systems work together and share data), **Modularity** (modular, reusable components, less development time and effort), **Scalability** (leveraging external services and data sources), **Ecosystem Expansion** (third-party add-ons and extensions), and **Front-End and Back-End Separation** (a clear separation between the user interface and the server).

**Key terms.** **Endpoint** — a specific URL/URI representing a resource or service, used to send requests and receive responses. **HTTP methods** — the actions performable on resources. **Request** — made by a client to an endpoint to perform an action. **Response** — the result returned after processing, including **status information, data and headers**. **Authentication** — verifying the identity of a client or user before granting access, via **API keys, tokens or other methods**. **Rate limiting** — restricting the number of requests within a specified time frame **to prevent abuse and ensure fair usage**. **API documentation** — tells developers the available **endpoints, request methods, data formats and authentication requirements**.

```http
GET    /api/rides/482      -> retrieve one ride        (read, changes nothing)
POST   /api/rides          -> create a new ride        (body carries the new resource)
PUT    /api/rides/482      -> update ride 482          (body carries the new state)
DELETE /api/rides/482      -> remove ride 482
```

```json
// A response body in JSON — the structured format named alongside XML
{ "id": 482, "driver": "Ada", "status": "en_route", "fare": 3200 }
```

The **status information** in a response is the HTTP status code the client checks before reading the body — success codes in the **2xx** range (e.g. **200** for a satisfied GET, **201** for a resource created by POST), client-error codes in the **4xx** range (**401** unauthenticated, **403** unauthorised, **404** endpoint or resource not found, **429** rate limit exceeded), and server-error codes in the **5xx** range (**500**). Map these onto the deck's own terms: **authentication** failures produce 401/403, **rate limiting** produces 429, a wrong **endpoint** produces 404.

**The seven API development steps:** **Define the Purpose** (what data or services, and for whom) → **Design the API** (endpoints, request methods, data formats — **often JSON or XML** — error handling, descriptive and consistent naming) → **Implement** (routes and handlers, data validation, business logic) → **Testing** (success *and* error cases) → **Documentation** (sample requests and responses) → **Security** (authentication and authorisation) → **Versioning** (backward compatibility as the API changes).

**The five integration scenarios:** **social media** (log in with Facebook credentials via the Facebook API), **payment gateway** (PayPal, Stripe, Square — a store using the Stripe API for card payments), **mapping and location services** (a food delivery app using the Google Maps API for restaurant locations and real-time delivery tracking), **cloud storage** (a document system using the Amazon S3 API), and **third-party data access** (a weather app calling a weather API; also stock market data and news feeds).

**The seven integration best practices:** **read the documentation**, **handle errors** gracefully with informative feedback, **respect rate limits** to avoid being blocked, **validate data** before sending it, **authenticate properly** with the required credentials or tokens, **test thoroughly** including edge and error cases, and **monitor for version updates** and adapt.

**State across requests.** HTTP requests do not remember each other, so **cookies or session management technologies** are used to **maintain user sessions and manage state across requests** — the week's named answer to statelessness.

## Commonly confused

- **Frontend vs backend** — the **frontend** is **HTML, CSS and JavaScript** running in the browser, responsible for **visual layout, user interactions and client-side scripting**; the **backend** is **PHP, Ruby on Rails, Django, Node.js, ASP.NET Core plus databases**, responsible for **data storage and retrieval, business logic, authentication and security**. The test is *where the code runs*, not what it is written in — JavaScript is a frontend language in the browser and a backend language under **Node.js**.
- **SQL vs NoSQL** — **SQL/relational** (MySQL, PostgreSQL, Oracle) stores data in **tables with a fixed schema**, is queried with **SQL** and is **ACID-compliant**; **NoSQL** (MongoDB, Redis) is **schema-less** and suits **unstructured or semi-structured data** and **flexible data models**. "Unstructured data at volume" → MongoDB; "small-to-medium web database needing ACID" → MySQL. Note that **NoSQL is a category, not a product** — MongoDB is **document-oriented**, Redis is an **in-memory key-value store**; they are not interchangeable.
- **POST vs PUT** — **POST creates** data (a new resource, typically at a collection endpoint); **PUT updates** data (an existing resource at its own endpoint). If a question says "submit a new order", that is POST; "change the delivery address on order 482" is PUT. **GET retrieves and changes nothing**; **DELETE removes**.
- **GET vs "any request"** — every API call is a request, but only **GET** is the one whose named job is **retrieve data**. A question describing data being *sent for processing* is not GET.
- **Authentication vs authorisation vs rate limiting** — **authentication** verifies **who you are** (API keys, tokens); **authorisation** decides **what you may access** once identified; **rate limiting** caps **how many requests** you may make in a time frame, regardless of identity, to prevent abuse.
- **Endpoint vs API** — an **API** is the whole set of rules, protocols and tools; an **endpoint** is **one specific URL/URI** within it representing a single resource or service. An API has many endpoints.
- **Normalization vs indexing** — **normalization** reorganises data across related tables to **reduce redundancy and improve integrity** (a *design* activity); **indexing** adds extra structures to **speed up retrieval** (a *performance* activity). Normalization can slow reads; indexing is how you get the speed back.
- **Schema vs data model** — a **data model** is the **conceptual** representation of structure and relationships (relational, document, graph); a **schema** is the concrete **blueprint** of one database: tables, fields, data types, relationships. MongoDB being **schema-less** does not mean it has no data model — its model is **document**.
- **Horizontal vs vertical scaling** — **horizontal = adding more servers**; **vertical = upgrading the resources of the existing server**. Cloud environments are named as "highly scalable and often involving multiple servers", i.e. horizontal.
- **Server environment vs server software** — the **environment** is the whole stack (hardware, storage, networking, OS, software, configuration, security, monitoring); **server software** is only one component of it (Apache, MySQL, Tomcat). LAMP names an environment; Apache alone does not.
- **Docker vs Kubernetes** — **Docker containerises** the application; **Kubernetes orchestrates** the containers. **Helm** manages Kubernetes packages; **Prometheus and Grafana** monitor.
- **ACID vs the four component letters** — **ACID** is **Atomicity, Consistency, Isolation, Durability**, a guarantee about **transactions**. It is not a security property and not a scaling property; it is what keeps data **consistent and reliable in the presence of failures**.
- **JSON/XML vs the database itself** — **JSON and XML** are the **data-exchange formats** travelling between frontend and backend. PostgreSQL having "strong support for JSON" is a storage feature; it does not make JSON a database.
- **Cookies/sessions vs authentication** — **authentication** establishes identity once; **cookies and session management** are what **maintain that state across subsequent requests**, because HTTP does not remember previous ones.
