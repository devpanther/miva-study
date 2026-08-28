# CSC_106 — Week 6 Summary

*Introduction to Web Technologies · Week 6 (12–18 Oct 2026) · Topic: Advanced JavaScript — HTML forms and validation, events and event handling, asynchronous programming (callbacks, promises, async/await, the event loop), ES6 features, DOM manipulation and AJAX*

## The 8 most examinable things this week

1. **The three `<form>` attributes**: `action` (the URL the data is sent to), `method` (`GET` or `POST`), `enctype` (how the body is encoded — `multipart/form-data` is required for file uploads). Form controls: text fields, checkboxes, radio buttons, buttons.
2. **Accessing form elements**: `getElementById`, `getElementsByTagName`, `getElementsByClassName`. Once you have the element you manipulate its **`value`**, **`type`** and **`name`** properties. `input.value` is **always a string**, even for `type="number"`.
3. **Client-side validation** checks data *before* submission — required fields, email format, password strength. It gives **instant feedback** and **prevents unnecessary server requests**, but it can be bypassed, so **server-side validation is still mandatory**.
4. **Intercepting submission**: listen for `submit` and call **`event.preventDefault()`** to stop the default page reload, then validate or send via AJAX. Form events named in the lecture: **`submit`, `reset`, `change`, `focus`**.
5. **The four components of an event**: the **event source** (the element that triggers it), the **event type** (`click`, `submit`, …), the **event listener** (the function called when it occurs), and the **event object** (carries information about the event). **Event propagation** is how an event passes through nested elements.
6. **The three ways to write async code**: **callbacks** (a function passed as an argument, run after a task finishes — nesting them gives "callback hell"); **promises** (an object representing a value that will exist later, either fulfilled or rejected, chained with `.then()` / `.catch()`); **async/await** (syntactic sugar that lets you write promise code as if it were synchronous; errors handled with `try...catch`).
7. **The event loop**: JavaScript is single-threaded. Synchronous code runs first; then the loop drains the **microtask queue** (promise callbacks); only then does it take one **macrotask** (`setTimeout`, I/O). This is why `setTimeout(fn, 0)` runs *after* a `.then()` registered later.
8. **AJAX**: `XMLHttpRequest` is the traditional object; the **Fetch API** is the modern replacement and **returns a promise**. Requests obey the **same-origin policy**; cross-domain requests need **CORS** or a server-side proxy. **JSON** is the usual exchange format (`JSON.parse` / `JSON.stringify`).

## Forms in JavaScript

```js
const form  = document.getElementById("signup");
const email = document.getElementById("email");

form.addEventListener("submit", function (event) {
  if (email.value.trim() === "" || !email.value.includes("@")) {
    event.preventDefault();          // stop the submission
    document.getElementById("msg").textContent = "Enter a valid email";
  }
});
```

**Dynamic form manipulation** — adding or removing controls at runtime:

```js
const extra = document.createElement("input");
extra.type = "text";
extra.name = "phone2";
form.appendChild(extra);             // create, then append
```

**Security**: sanitise and validate all input. **XSS** (Cross-Site Scripting) injects script into a page — avoid writing user input with `innerHTML`; use `textContent`. **CSRF** (Cross-Site Request Forgery) makes a logged-in user's browser send an unwanted request — defended with anti-CSRF tokens.

## Asynchronous programming

```js
// 1. Callback
function getData(cb) { setTimeout(() => cb("done"), 100); }
getData(result => console.log(result));

// 2. Promise
fetch("/api/users")
  .then(response => response.json())   // .json() ALSO returns a promise
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err));

// 3. async/await
async function loadUsers() {
  try {
    const response = await fetch("/api/users");
    const data     = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}
```

An `async` function **always returns a promise**, whatever you `return` inside it. `await` only pauses the *enclosing async function*, never the whole page.

**Order trace**

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

Prints **A, D, C, B** — all synchronous lines first (A, D), then the microtask (C), then the timer callback (B).

**Best practices named**: prefer promises/async-await over nested callbacks; always handle errors with `.catch()` or `try...catch`; avoid long-running synchronous tasks that block the event loop.

## ES6 (ECMAScript 2015) essentials

| Feature | Form | Point |
|---|---|---|
| `let` / `const` | `let x = 1; const y = 2;` | Block-scoped. `const` blocks **reassignment**, not mutation of an object's contents |
| Arrow functions | `const d = x => x * 2;` | Concise; `this` is **lexical** (taken from the enclosing scope) |
| Template literals | `` `Hi ${name}, ${a+b}` `` | Backticks; multi-line strings; `${}` embeds expressions |
| Destructuring | `const {city} = addr;` `const [a, b] = arr;` | Pulls values out of objects/arrays by key or position |
| Spread / rest | `[...arr]`, `{...obj}` / `function f(...args)` | Spread **copies out**; rest **gathers in** |
| Classes | `class Dog { constructor(n){ this.n = n; } }` | Syntax over prototypes; `new Dog("Rex")` |
| Modules | `export function f(){}` / `import { f } from "./m.js"` | One file per concern; separation of concerns, maintainability |

**Functional programming**: immutability and **pure functions** (same input → same output, no side effects). **Transpilation**: tools like **Babel** convert modern JS into older syntax so it runs in old browsers.

## DOM manipulation and AJAX

```js
const el = document.querySelector(".card");   // also getElementById / getElementsByClassName
el.textContent = "New text";                  // content
el.setAttribute("data-id", "7");              // attribute
el.style.color = "red";                       // style

const li = document.createElement("li");
li.textContent = "Item";
document.getElementById("list").appendChild(li);   // create + append

el.addEventListener("click", e => console.log(e.target));  // e is the event object
```

The **DOM** is a programming interface representing the document as objects, so the page can be read and modified from JavaScript. AJAX loads data **without a full page refresh** and updates the DOM with it — used for SPAs, live form validation and real-time updates (chat, live scores).

## Commonly confused

- **`const` reassignment vs mutation** — `const u = {n:1}; u.n = 2;` is **legal**; `u = {}` is a **TypeError**. `const` freezes the binding, not the object.
- **Returning a value vs returning a promise** — an `async` function returning `1` gives `Promise{1}`; you must `await` it or `.then()` it to see `1`.
- **`.then(cb)` vs `await`** — same mechanism, different syntax. `await` outside an `async` function is a syntax error.
- **Microtask vs macrotask** — promise callbacks jump ahead of `setTimeout(..., 0)`; a promise registered *later* still runs *first*.
- **`preventDefault()` vs `stopPropagation()`** — `preventDefault` cancels the browser's default action (submitting, following a link); `stopPropagation` stops the event travelling to ancestor elements.
- **Client-side vs server-side validation** — client-side is for **user experience** and can be disabled by the user; server-side is for **security** and is never optional.
- **XSS vs CSRF** — XSS injects **code into your page**; CSRF makes the **user's browser send a request** to your site using their existing session.
- **`XMLHttpRequest` vs `fetch`** — same job; `XMLHttpRequest` uses callbacks and readyState, `fetch` returns a **promise**. `fetch` does **not** reject on HTTP 404/500 — check `response.ok`.
- **`response` vs `response.json()`** — the first `.then()` gives you the Response object; the body must be parsed by `.json()`, which returns another promise.
- **Spread vs rest** — identical `...` syntax; **spread** in a call/literal expands, **rest** in a parameter list collects.

*Note: every code example in this week's deck is a screenshot image, so the extracted text carries only the surrounding prose — the snippets and the ES6 table above are the standard treatment of exactly the features the slides name (form access, validation, AJAX submission, arrow functions, template literals, destructuring, spread/rest, classes, modules). Note also that the Week 6 Summary PDF is headed "Events And Event Handling" rather than "Advanced JavaScript Concepts"; its content — the four event components and event propagation — is genuine Week 6 material and is included above.*
