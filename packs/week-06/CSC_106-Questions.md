# CSC_106 — Week 6 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 7, not this week. Notes closed.*

## Section A - Multiple choice (12)

**1.** What is printed?

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

a) A, B, C, D
b) A, D, C, B
c) A, D, B, C
d) A, C, D, B

**2.** What is printed?

```js
async function f() {
  return 42;
}
console.log(f());
```

a) 42
b) A Promise object
c) undefined
d) A SyntaxError, because `return` is not allowed in an async function

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

a) 1, 2, 3
b) 1, 3, 2
c) 3, 1, 2
d) 1, 2 — "3" never runs

**4.** What is printed?

```js
const user = { name: "Ada" };
user.name = "Bola";
console.log(user.name);
```

a) Ada
b) Bola
c) undefined
d) Nothing — it throws `TypeError: Assignment to constant variable`

**5.** The page contains `<input id="qty" type="number" value="5">`. What is printed?

```js
const q = document.getElementById("qty").value;
console.log(q + 1);
```

a) 6
b) 51
c) NaN
d) 5

**6.** A form must be validated in JavaScript without the browser reloading the page. Which line does that?

a) `form.addEventListener("submit", e => { e.preventDefault(); validate(); });`
b) `form.addEventListener("submit", e => { e.stopPropagation(); validate(); });`
c) `form.addEventListener("click", e => { return false; });`
d) `form.submit = function () { validate(); };`

**7.** What is printed?

```js
const base = { a: 1, b: 2 };
const copy = { ...base, b: 9, c: 3 };
console.log(copy.a, copy.b, copy.c);
```

a) 1 2 3
b) 1 9 3
c) undefined 9 3
d) 1 9 undefined

**8.** What is printed?

```js
const [first, ...others] = [10, 20, 30, 40];
console.log(first, others.length);
```

a) 10 4
b) 10 3
c) 20 3
d) 40 3

**9.** What is printed?

```js
Promise.reject(new Error("bad"))
  .then(() => console.log("A"))
  .catch(() => console.log("B"))
  .then(() => console.log("C"));
```

a) A, B, C
b) B only
c) B, C
d) A, C

**10.** This code logs `undefined`. Why?

```js
fetch("/api/user")
  .then(r => console.log(r.name));
```

a) `fetch` is synchronous, so the request has not been sent yet
b) The first `.then()` receives a **Response** object, not the data — the body must be parsed with `r.json()`, which itself returns a promise
c) The first `.then()` receives raw JSON text, which must be passed to `JSON.parse` before any property is readable
d) `.then()` cannot be used with `fetch`; only `async/await` works

**11.** A script served from `https://shop.example.com` calls `fetch("https://api.other.com/data")` and the browser blocks the response. What is the cause and the fix?

a) HTTPS URLs cannot be used with `fetch`; switch to `XMLHttpRequest`
b) The **same-origin policy** blocks cross-domain requests; the other server must send **CORS** headers, or the request must go through a server-side proxy
c) JSON cannot be transferred between two different domains; the data must be sent as plain text
d) The request must use `POST` rather than `GET` to leave the current domain

**12.** In `button.addEventListener("click", handleClick);`, which part is the **event listener**?

a) `button`
b) `"click"`
c) `handleClick`
d) The `event` argument the browser passes in

## Section B - Short answer (3)

**13.** Write a `submit` handler that validates a registration form with a `username` field (must not be empty) and a `password` field (at least 8 characters), stopping submission when either fails. Then explain why passing client-side validation does **not** mean the server can trust the data, and name the two web vulnerabilities the lecture identifies as needing protection.

**14.** Explain **callbacks**, **promises** and **async/await** as three ways of handling the same asynchronous task, and state what the **event loop** does. Then rewrite the nested callbacks below using `async/await` with error handling.

```js
getUser(id, function (user) {
  getOrders(user, function (orders) {
    console.log(orders);
  });
});
```

**15.** Name five ES6 features introduced in this week's material, giving a one-line example of each, and say what each one improves. Then explain what **transpilation** is and why it is needed.

## Answers

**1. b** — *the event loop: synchronous code, then microtasks, then macrotasks*. `"A"` and `"D"` are synchronous and run first. When the stack empties, the **microtask queue** (promise callbacks) is drained, so `"C"`. Only then is a **macrotask** taken from the timer queue, so `"B"` — even though its delay is `0`. Option **a** assumes `setTimeout(…, 0)` is immediate; **c** treats the timer and the promise as the same queue and takes them in registration order; **d** forgets that a `.then()` callback is deferred at all.

**2. b** — *an `async` function always returns a promise*. Whatever value you `return` is used to **resolve** the promise, so `f()` evaluates to a promise wrapping `42`. Printing `42` requires `f().then(v => console.log(v))` or `console.log(await f())`. **a** confuses the resolved value with the return value; **c** confuses it with a function that has no `return`; **d** invents a rule — `return` is normal inside `async`.

**3. b** — *`await` suspends only its own function, not the program*. `"1"` prints, then `await` hands control back to the caller, so `"3"` prints next; the awaited promise resolves as a microtask and `"2"` prints last. **a** assumes `await` blocks everything (it does not — that is the whole point); **c** assumes the whole `async` function is deferred to the end; **d** assumes `await` halts the main thread.

**4. b** — *`const` freezes the binding, not the object*. `const` only forbids **reassigning the variable** (`user = {}` would throw). The object it points to is still mutable, so `user.name = "Bola"` succeeds. **d** is the exact misunderstanding this tests; **a** assumes `const` makes contents read-only (that would need `Object.freeze`).

**5. b** — *`input.value` is always a string*. Even with `type="number"`, `.value` returns `"5"`. `+` with a string operand **concatenates**, giving `"51"`. To get `6` you need `Number(q) + 1` or `parseInt(q) + 1`. **a** assumes `type="number"` returns a number; **c** confuses this with an arithmetic operation on a non-numeric string.

**6. a** — *intercepting form submission*. You must listen for the **`submit`** event and call **`preventDefault()`** on the event object to cancel the browser's default action (sending the form and reloading). **b** cancels propagation to ancestors, which has nothing to do with the default action. **c** listens for the wrong event, and returning `false` from an `addEventListener` handler does not cancel anything. **d** overwrites the form's `submit` method rather than handling the event.

**7. b** — *object spread, later keys win*. `{...base}` copies `a: 1` and `b: 2`; the explicit `b: 9` written **after** the spread overwrites `b`; `c: 3` is added. So `1 9 3`. **a** ignores the override; **c** assumes spread does not copy `a`; **d** assumes new keys cannot be added alongside a spread.

**8. b** — *array destructuring with the rest element*. `first` takes the first value `10`; `...others` **gathers the remaining** values into `[20, 30, 40]`, so `others.length` is `3`. **a** counts the whole original array; **c** misreads which position `first` takes; **d** assumes rest collects from the end.

**9. c** — *promise chaining: `.catch` handles, then the chain continues*. The rejection skips `.then(() => "A")` and is caught by `.catch`, printing `"B"`. Because `.catch` **returns normally**, the chain becomes fulfilled again and the following `.then` prints `"C"`. **a** assumes both a `.then` and a `.catch` can run for the same rejection; **b** assumes a caught error ends the chain; **d** assumes a rejection still runs the success handler.

**10. b** — *`fetch` resolves with a Response, and `.json()` is itself asynchronous*. The first `.then()` gets a `Response` object describing the HTTP reply; the body is not parsed yet, so `r.name` is `undefined`. The correct chain is `.then(r => r.json()).then(data => console.log(data.name))`. **a** is wrong — `fetch` is asynchronous and returns a promise. **c** is the `XMLHttpRequest.responseText` model, not `fetch`. **d** is false: `async/await` is just other syntax for the same promise.

**11. b** — *same-origin policy and CORS*. AJAX requests are restricted to the same domain unless the responding server explicitly opts in with **Cross-Origin Resource Sharing** headers; the alternative is to route the call through a **server-side proxy** on your own domain. **a** and **d** invent rules about protocol and HTTP method; **c** confuses the data format with the origin restriction — the block is on the origin, not on JSON.

**12. c** — *the four components of an event*. The **event listener** is the function called when the event occurs. `button` is the **event source** (a), `"click"` is the **event type** (b), and the argument passed in at call time is the **event object** (d) carrying information about the event. Each wrong option names a real component — just the wrong one.

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

Client-side validation runs **in the user's browser**, so it can be disabled, edited or bypassed entirely — a request can be sent straight to the `action` URL without ever loading the page. Its purpose is **user experience** (instant feedback) and **reducing unnecessary server requests**, not security; the server must **re-validate and sanitise everything**. The two vulnerabilities named in the lecture are **XSS (Cross-Site Scripting)**, where attacker-supplied script is injected into and executed by the page, and **CSRF (Cross-Site Request Forgery)**, where a user's authenticated browser is tricked into sending an unwanted request. Defences: input sanitisation and validation, writing user data with `textContent` rather than `innerHTML`, and anti-CSRF tokens.

**14.** *Asynchronous programming and the event loop*: A **callback** is a function passed as an argument to another function and executed once that task completes — the original mechanism, but nesting several produces deeply indented, hard-to-read "callback hell" with error handling repeated at every level. A **promise** is an object representing a value that is not available yet and will either be **fulfilled** or **rejected**; it flattens the nesting into a `.then()` chain with a single `.catch()` at the end. **async/await** is syntax over promises: `await` pauses the enclosing `async` function until the promise settles, so asynchronous code reads top-to-bottom like synchronous code, and errors are handled with an ordinary `try...catch`. The **event loop** is JavaScript's concurrency model: the language is single-threaded, so the loop continuously checks the message/task queue and pushes queued callbacks onto the call stack whenever the stack is empty — which is why a long synchronous task freezes the interface and why deferred callbacks never interrupt code that is already running.

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

**15.** *ES6 features*: **`let` / `const`** — `let count = 0; const PI = 3.14;` — block-scoped declarations giving precise scoping control, unlike function-scoped `var`; `const` also prevents reassignment. **Arrow functions** — `const double = x => x * 2;` — concise syntax for anonymous functions, with `this` taken **lexically** from the enclosing scope instead of being rebound at call time. **Template literals** — `` const s = `Hi ${name}`; `` — backtick strings that support multi-line text and embedded expressions with `${}`, removing clumsy `+` concatenation. **Destructuring** — `const { city, state } = address;` — extracts values from objects and arrays into variables in one line. **Spread / rest** — `const copy = [...nums];` and `function sum(...args) {}` — spread expands an array or object into its elements for easy copying and merging; rest gathers an arbitrary number of arguments into an array. (Also acceptable: **classes**, `class Dog { constructor(n) { this.n = n; } }`, cleaner syntax over prototypes; **modules**, `export` / `import`, which split code into reusable files and enforce separation of concerns.) **Transpilation** is converting modern JavaScript source into an older, equivalent syntax — typically with **Babel** — so that code written with ES6+ features still runs in browsers that do not support them.
