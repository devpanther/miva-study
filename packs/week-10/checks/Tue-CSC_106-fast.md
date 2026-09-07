# Tuesday — CSC_106 fast-hour check

*Backend work: server-side languages, stacks, choosing a DBMS, and calling REST APIs.*
*12 questions, straight after the hour. Score out of 12.*

**1.** A ride-hailing API keeps rides at `/api/rides`. The fare on ride 482 must be corrected. Which request?
A. `POST /api/rides`
B. `PUT /api/rides/482`
C. `GET /api/rides/482`
D. `DELETE /api/rides/482`

**2.** An API allows 60 requests per minute per client. A client sends its 61st request within the same minute. Which status code does it receive?
A. 404
B. 401
C. 503
D. 429

**3.** A client sends `POST /api/rides` with a valid body and the server creates the new ride. Which status code should the response carry?
A. 200
B. 201
C. 401
D. 500

**4.** ```js
const r = JSON.parse(body);
```
`body` is `{"status": 200, "data": {"id": 482, "driver": {"name": "Ada", "rating": 4.8}}}`. Which expression gives `"Ada"`?
A. `r.driver.name`
B. `r.data.name`
C. `r.data.driver.name`
D. `r.name`

**5.** ```js
fetch("/api/rides", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: { driver: "Ada" }
});
```
The server receives the body as the text `[object Object]`. Which line is wrong?
A. Line 1: the URL must include the ride id
B. Line 2: the method should be PUT
C. Line 3: the header should be text/plain
D. Line 4: the body must be JSON.stringify({ driver: "Ada" })

**6.** Table `customers` holds (id, name, city): (1, Zara, Lagos), (2, Bola, Abuja), (3, Ade, Lagos), (4, Chi, Lagos).
```sql
SELECT name FROM customers WHERE city = 'Lagos' ORDER BY name;
```
What is returned?
A. Ade, Chi, Zara
B. Zara, Ade, Chi
C. Ade, Bola, Chi, Zara
D. Ade

**7.** A site must keep session tokens in memory so that each lookup takes well under a millisecond. Which DBMS fits?
A. PostgreSQL
B. MongoDB
C. Redis
D. Oracle Database

**8.** A microservices application runs as 40 containers spread over six virtual machines. Failed containers must restart automatically and the count must scale with load. Which tool does that job?
A. Docker
B. Helm
C. Kubernetes
D. Prometheus

**9.** A database server is overloaded. The team keeps the single server but moves it from 16 GB to 64 GB of RAM and a faster CPU. Which technique is this?
A. Vertical scaling
B. Horizontal scaling
C. Replication
D. Indexing

**10.** A transfer debits account A and credits account B in one transaction. The server crashes after the debit. On restart the debit has been undone and neither account changed. Which ACID property guaranteed this?
A. Consistency
B. Isolation
C. Durability
D. Atomicity

**11.** What is an API endpoint?
A. The whole set of rules and tools an API provides
B. A specific URL or URI that represents one resource or service of an API
C. The JSON or XML format in which data is exchanged
D. The HTTP method used to act on a resource

**12.** What is the difference between authentication and authorisation?
A. Authentication limits how many requests a client may make; authorisation encrypts them
B. Authentication decides what a client may access; authorisation verifies who the client is
C. Authentication verifies who the client is; authorisation decides what that client may access
D. They are two names for checking an API key

---

## Answers

**1. B** — *Choosing the HTTP method and endpoint for an action.* Correcting a field on a ride that already exists is an update, and update is PUT's job. The resource is one specific ride, so the request goes to that ride's own endpoint: PUT /api/rides/482.

POST /api/rides creates a brand-new ride at the collection; GET /api/rides/482 only retrieves it and changes nothing; DELETE removes the ride altogether.

**2. D** — *Reading HTTP status codes from an API.* Refusing a request because the client has exceeded its quota is rate limiting, and the code for it is 429 (Too Many Requests). The client is identified and the endpoint exists; only the frequency is the problem.

404 means the endpoint or resource was not found; 401 means the client was not authenticated; 503 is a server-side error meaning the service itself is unavailable, not that the client sent too much.

**3. B** — *Success codes for create versus read.* Success codes are in the 2xx range, and 201 (Created) is the one that says a new resource now exists as a result of the request. It is the standard reply to a successful POST that creates data.

200 is the general success code for a satisfied GET; 401 is an authentication failure; 500 is a server error, the opposite of success.

**4. C** — *Reading a nested field from a JSON response.* JSON.parse turns the text into an object. name sits inside driver, which sits inside data, which sits at the top level, so the path is r.data.driver.name.

r.driver.name skips the data level; r.data.name stops one level short, there is no name directly under data; r.name looks at the top level, which has only status and data. All three give undefined or throw.

**5. D** — *Serialising a request body as JSON.* A request body travels as text. Passing a plain object makes the browser convert it with toString, which gives "[object Object]". JSON.stringify turns the object into the JSON text {"driver":"Ada"} that the header promises and the server can parse.

The collection URL is right for creating a ride; POST is the create method; the header correctly declares JSON, the problem is that the body does not match it.

**6. A** — *Reading a SQL SELECT with WHERE and ORDER BY.* WHERE keeps only the Lagos rows: Zara, Ade and Chi. ORDER BY name sorts them alphabetically, so the result is Ade, Chi, Zara.

Zara, Ade, Chi ignores the ORDER BY and keeps insertion order; Ade, Bola, Chi, Zara ignores the WHERE and sorts every customer; Ade alone treats the query as returning only the first match.

**7. C** — *Matching a DBMS to its stated usage.* Redis is the in-memory key-value store; caching and fast lookups of small values such as tokens are exactly what it is named for.

PostgreSQL is a disk-based relational system for large, complex data models; MongoDB is a document store for bulk semi-structured data; Oracle is an enterprise relational system for data warehouses. All three go to disk and answer in milliseconds, not microseconds.

**8. C** — *Docker versus Kubernetes.* Kubernetes is the orchestrator: it schedules containers across machines, restarts the ones that fail and scales the number of replicas. Docker only builds and runs individual containers.

Docker containerises; Helm packages Kubernetes applications for installation; Prometheus monitors and collects metrics. None of them manages the running fleet.

**9. A** — *Horizontal versus vertical scaling.* Upgrading the resources of the existing server is vertical scaling. Horizontal scaling would mean adding more servers and sharing the load between them.

Replication copies the data to other servers for availability and fault tolerance; indexing adds data structures to speed up queries and touches no hardware.

**10. D** — *Identifying ACID properties.* Atomicity means a transaction is all or nothing: either every step is applied or none is. Rolling back the debit so that the half-finished transfer leaves no trace is atomicity at work.

Consistency says the database moves only between valid states; isolation keeps concurrent transactions from seeing each other's partial work; durability says a committed transaction survives a crash, the opposite situation to this one, which never committed.

**11. B** — *Definition of an API endpoint.* An endpoint is one address within an API: a specific URL or URI standing for a single resource or service, to which requests are sent and from which responses come back. An API has many endpoints.

The whole set of rules and tools is the API itself; JSON and XML are the data formats carried in requests and responses; GET, POST, PUT and DELETE are the methods applied to an endpoint, not the endpoint.

**12. C** — *Authentication versus authorisation.* Authentication establishes identity, for example by checking an API key or token. Authorisation comes after it and decides which resources or actions that identified client is allowed. A wrong or missing identity gives 401; a valid identity without permission gives 403.

Limiting request counts is rate limiting, and encryption is a separate security measure; the second option has the two definitions swapped; the last collapses two distinct steps into one.
