# CSC_106 — Week 6 Questions

*Advanced JavaScript: forms and validation, events, asynchronous programming and ES6. Sat seven days later during Saturday catch-up in Week 7 as a retention test — notes closed.*

## Multiple choice

**1.** What is printed?

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

A. A, B, C, D
B. A, C, D, B
C. A, D, B, C
D. A, D, C, B

**2.** What is printed?

```js
async function f() {
  return 42;
}
console.log(f());
```

A. A Promise object
B. 42
C. undefined
D. A SyntaxError, because `return` is not allowed inside an `async` function

**3.** What is printed?

```js
async function go() {
  console.log("1");
  const v = await Promise.resolve("2");
  console.log(v);
}
go();
console.log("3");
```

A. 1, 2, 3
B. 3, 1, 2
C. 1, 3, 2
D. 1, 2 — "3" never runs

**4.** What is printed?

```js
const user = { name: "Ada" };
user.name = "Bola";
console.log(user.name);
```

A. Ada
B. Bola
C. undefined
D. Nothing is printed — the line throws `TypeError: Assignment to constant variable`

**5.** In `button.addEventListener("click", handleClick);`, which part is the **event listener**, in the week's four-component vocabulary?

A. `handleClick`
B. `button`
C. `"click"`
D. The object the browser hands to `handleClick` carrying information about the click

**6.** The lecture names three attributes a `<form>` element can carry. Which pairing of attribute to job is right?

A. `method` gives the URL the data is sent to; `action` gives how the body is encoded
B. `action` gives the URL the data is sent to; `method` gives how the body is encoded
C. `action` gives the URL the data is sent to; `enctype` gives how the body is encoded
D. `enctype` gives the URL the data is sent to; `method` gives how the body is encoded

**7.** A registration form must be validated in JavaScript without the browser submitting it and reloading the page. Which line does that?

A. `form.addEventListener("submit", e => { e.stopPropagation(); validate(); });`
B. `form.addEventListener("click", e => { return false; });`
C. `form.submit = function () { validate(); };`
D. `form.addEventListener("submit", e => { e.preventDefault(); validate(); });`

**8.** This code logs `undefined`. Why?

```js
fetch("/api/user")
  .then(r => console.log(r.name));
```

A. `fetch` is synchronous, so the request has not been sent yet
B. The first `.then()` receives a **Response**, not the data; the body must be parsed with `r.json()`
C. The first `.then()` receives raw JSON text, which must be passed to `JSON.parse` before any property can be read
D. `.then()` cannot be used with `fetch`; only the `async/await` form gives access to the body

**9.** A script served from `https://shop.example.com` calls `fetch("https://api.other.com/data")` and the browser blocks the response. What does the lecture call the restriction, and what are the two ways round it?

A. The same-origin policy; use CORS or a server-side proxy
B. Cross-domain JSON transfer is forbidden; re-send the data as plain text and parse it by hand
C. `fetch` cannot be used with an HTTPS URL from another host; fall back to `XMLHttpRequest` with a callback
D. A `GET` request may not leave the current domain; re-issue it as a `POST` with the URL in the body

**10.** The lecture names two vulnerabilities to protect against when working with forms. Which pairing of name to mechanism is right?

A. XSS tricks a logged-in user's browser into sending an unwanted request; CSRF injects script into the page
B. XSS and CSRF are two names for the same injection attack, one client-side and one server-side
C. XSS is defended with anti-CSRF tokens; CSRF is defended by writing user input with `textContent`
D. XSS injects script into the page; CSRF makes a logged-in user's browser send an unwanted request

**11.** What is printed?

```js
const [first, ...others] = [10, 20, 30, 40];
console.log(first, others.length);
```

A. 10 4
B. 10 3
C. 20 3
D. 40 3

**12.** The lecture's best practices for asynchronous code warn against one thing in particular. What, and why?

A. Avoid `.catch()` and use only `try...catch`, because promises otherwise swallow their errors silently
B. Avoid arrow functions inside callbacks, because `this` is rebound at call time and the handler loses its object
C. Avoid long-running synchronous tasks, because they block the event loop and freeze the interface
D. Avoid `async/await`, because nested callbacks give clearer error handling at each level

## Short answer

**13.** Write a `submit` handler that validates a registration form with a `username` field (must not be empty) and a `password` field (at least 8 characters), stopping submission when either fails. Then explain why passing client-side validation does **not** mean the server can trust the data, and name the two web vulnerabilities the lecture identifies as needing protection.

**14.** Explain **callbacks**, **promises** and **async/await** as three ways of handling the same asynchronous task, and state what the **event loop** does. Then rewrite the nested callbacks below using `async/await` with error handling.

```js
getUser(id, function (user) {
  getOrders(user, function (orders) {
    console.log(orders);
  });
});
```

**15.** Name five ES6 features introduced in this week's material, giving a one-line example of each and saying what each one improves. Then explain what **transpilation** is and why it is needed.

## Answers

**1. D** — *the event loop: synchronous code, then microtasks, then macrotasks*. `"A"` and `"D"` are synchronous and run first. When the stack empties, the **microtask queue** (promise callbacks) is drained, so `"C"`. Only then is a **macrotask** taken from the timer queue, so `"B"` — even though its delay is `0`. **A** assumes `setTimeout(…, 0)` is immediate; **B** forgets that `"D"` is ordinary synchronous code; **C** treats the timer and the promise as one queue taken in registration order.

**2. A** — *an `async` function always returns a promise*. Whatever value you `return` is used to **resolve** that promise, so `f()` evaluates to a promise wrapping `42`. Printing `42` needs `f().then(v => console.log(v))` or `console.log(await f())`. **B** confuses the resolved value with the return value; **C** confuses it with a function that has no `return`; **D** invents a rule — `return` is perfectly normal inside `async`.

**3. C** — *`await` suspends only its own function, not the program*. `"1"` prints, then `await` hands control back to the caller, so `"3"` prints next; the awaited promise resolves as a microtask and `"2"` prints last. **A** assumes `await` blocks everything, which is the opposite of its purpose; **B** assumes the whole `async` function is deferred to the end; **D** assumes `await` halts the main thread.

**4. B** — *`const` freezes the binding, not the object*. `const` forbids only **reassigning the variable** (`user = {}` would throw). The object it points at is still mutable, so `user.name = "Bola"` succeeds. **D** is the exact misunderstanding this tests; **A** assumes `const` makes the contents read-only, which would need `Object.freeze`; **C** assumes the assignment silently fails.

**5. A** — *the four components of an event*. The **event listener** is the function called when the event occurs. **B** `button` is the **event source** — the element that triggers the event; **C** `"click"` is the **event type**; **D** is the **event object**, which carries information about the event. Every wrong option names a real component, just the wrong one.

**6. C** — *`action`, `method`, `enctype`*. `action` is the URL the data is sent to, `method` is `GET` or `POST`, and `enctype` decides how the body is encoded (`multipart/form-data` for file uploads). **A** and **D** move the URL onto an attribute that never carries it. **B** is the common half-memory: it gets `action` right but promotes `method` into the encoding role that belongs to `enctype`.

**7. D** — *intercepting form submission*. You listen for the **`submit`** event and call **`preventDefault()`** on the event object to cancel the browser's default action — sending the form and reloading the page. **A** cancels propagation to ancestor elements, which has nothing to do with the default action. **B** listens for the wrong event, and returning `false` from an `addEventListener` handler cancels nothing. **C** overwrites the form's `submit` method instead of handling the event.

**8. B** — *`fetch` resolves with a Response, and `.json()` is itself asynchronous*. The first `.then()` receives a `Response` object describing the reply; the body is not parsed yet, so `r.name` is `undefined`. The correct chain is `.then(r => r.json()).then(data => console.log(data.name))`. **A** is false — `fetch` is asynchronous and returns a promise. **C** is the `XMLHttpRequest.responseText` model, not `fetch`. **D** is false: `async/await` is other syntax for the same promise.

**9. A** — *same-origin policy and CORS*. AJAX requests are restricted to the same domain; to reach a different domain you handle **Cross-Origin Resource Sharing** or use a **server-side proxy** — the lecture's two named routes. **B** confuses the data format with the origin restriction; the block is on the origin, not on JSON. **C** and **D** invent rules about the protocol and the HTTP method, neither of which the same-origin policy concerns itself with.

**10. D** — *XSS vs CSRF*. **XSS (Cross-Site Scripting)** injects attacker script into your page, so it executes in the visitor's browser; **CSRF (Cross-Site Request Forgery)** makes an already-logged-in user's browser send a request you did not intend. **A** swaps the two definitions. **B** denies that they are distinct attacks. **C** swaps the defences: `textContent` instead of `innerHTML` guards against XSS, anti-CSRF tokens against CSRF.

**11. B** — *array destructuring with the rest element*. `first` takes the first value `10`; `...others` **gathers the remaining** values into `[20, 30, 40]`, so `others.length` is `3`. **A** counts the whole original array. **C** misreads which position `first` takes. **D** assumes rest collects from the end.

**12. C** — *be mindful of the event loop*. JavaScript is single-threaded, so a long synchronous task holds the call stack and nothing queued can run until it finishes — the page stops responding. The lecture's other best practices are to prefer promises or async/await over nested callbacks and to handle errors with `.catch()` or `try...catch`. **A** and **D** invert two of those practices. **B** states the opposite of how arrow functions behave: `this` is **lexical**, taken from the enclosing scope, which is why they suit callbacks.

**13.** *Client-side validation, and why it is not security*:

```js
const form = document.getElementById("register");

form.addEventListener("submit", function (event) {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === "") {
    event.preventDefault();
    document.getElementById("msg").textContent = "Username is required";
  } else if (password.length < 8) {
    event.preventDefault();
    document.getElementById("msg").textContent = "Password must be at least 8 characters";
  }
});
```

Client-side validation runs **in the user's browser**, so it can be disabled, edited or bypassed entirely — a request can be sent straight to the `action` URL without the page ever being loaded. Its stated purpose is **user experience** (instant feedback) and **preventing unnecessary server requests**, not security; the server must re-validate and sanitise everything it receives. The two vulnerabilities named in the lecture are **XSS (Cross-Site Scripting)**, where attacker-supplied script is injected into and executed by the page, and **CSRF (Cross-Site Request Forgery)**, where a user's authenticated browser is tricked into sending an unwanted request. The named defences are input sanitisation and validation, writing user data with `textContent` rather than `innerHTML`, and anti-CSRF tokens.

**14.** *Asynchronous programming and the event loop*: A **callback** is a function passed as an argument to another function and executed after that task completes — the fundamental mechanism, but nesting several produces deeply indented code with error handling repeated at every level. A **promise** is a more structured object representing a value that is not available yet and will arrive either successfully or with an error; it flattens the nesting into a `.then()` chain with a single `.catch()`. **async/await** is the modern, concise form: `await` pauses the enclosing `async` function until the promise settles, so asynchronous code reads top-to-bottom like synchronous code and errors are handled with an ordinary `try...catch`. The **event loop** is a fundamental part of JavaScript's concurrency model: it **continuously checks the message queue for tasks to execute**, pushing queued callbacks onto the call stack when the stack is empty — which is why a long synchronous task freezes the interface, and (as the week's summary sets out) why a promise callback registered later still runs before a `setTimeout(…, 0)`.

```js
async function showOrders(id) {
  try {
    const user   = await getUser(id);
    const orders = await getOrders(user);
    console.log(orders);
  } catch (err) {
    console.log("Failed:", err);
  }
}
```

(This assumes `getUser` and `getOrders` return promises; a callback-only API must be wrapped in `new Promise(...)` first.)

**15.** *ES6 features*: **`let` / `const`** — `let count = 0; const PI = 3.14;` — block-scoped declarations giving better scoping control than the traditional `var`; `const` also prevents reassignment. **Arrow functions** — `const double = x => x * 2;` — concise syntax for anonymous functions, with `this` taken **lexically** from the enclosing scope. **Template literals** — `` const s = `Hi ${name}`; `` — backtick strings allowing multi-line text and embedded expressions with `${}`. **Destructuring** — `const { city, state } = address;` — a concise way to extract values from objects and arrays. **Spread / rest** — `const copy = [...nums];` and `function sum(...args) {}` — spread copies arrays and objects out, rest gathers function arguments in. (Also acceptable: **classes**, `class Dog { constructor(n) { this.n = n; } }`, class syntax for creating objects and prototypes; **modules**, `export` / `import`, organising code into separate files, which supports modular development and separation of concerns.) **Transpilation** is converting modern JavaScript into an older, equivalent syntax — the lecture names **Babel** as the tool — so that code written with ES6+ features still runs in older browsers that do not support them.
