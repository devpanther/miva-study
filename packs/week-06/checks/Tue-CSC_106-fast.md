# Tuesday — CSC_106 fast-hour check

*Forms in JavaScript, events, promises and async/await, the event loop, ES6 and AJAX.*
*12 questions, straight after the hour. Score out of 12.*

**1.** The user types 5 into `<input id="qty">`. What does this log?

```js
const v = document.getElementById("qty").value;
console.log(v * 2, v + 2);
```
A. 10 7
B. 10 52
C. 52 52
D. NaN 52

**2.** In what order does this print?

```js
setTimeout(() => console.log("T"), 0);
Promise.resolve()
  .then(() => console.log("P1"))
  .then(() => console.log("P2"));
console.log("S");
```
A. S, P1, P2, T
B. T, P1, P2, S
C. S, T, P1, P2
D. P1, P2, S, T

**3.** What does this log?

```js
async function total() {
  return 2 + 3;
}
const r = total();
console.log(typeof r, r instanceof Promise);
```
A. number false
B. number true
C. object true
D. undefined false

**4.** What does this print?

```js
async function load() {
  try {
    await Promise.reject(new Error("no net"));
    console.log("ok");
  } catch (e) {
    console.log("caught " + e.message);
  }
  console.log("done");
}
load();
```
A. ok, then done
B. caught no net only
C. Uncaught Error: no net
D. caught no net, then done

**5.** Which line throws an error?

```js
1  const cart = ["pen"];
2  cart.push("book");
3  cart[0] = "ink";
4  cart = [];
```
A. Line 2
B. Line 3
C. Line 4
D. None of them

**6.** What does this log?

```js
const base = { a: 1, b: 2 };
const ext = { ...base, b: 5, c: 9 };
const { b, ...rest } = ext;
console.log(b, Object.keys(rest).length);
```
A. 2 2
B. 5 3
C. 5 2
D. 2 3

**7.** The server answers `/api/score` with the body `{"points": 42}`. What is logged?

```js
fetch("/api/score")
  .then(res => res.json())
  .then(data => console.log(data.points))
  .catch(err => console.log("failed"));
```
A. 42
B. undefined
C. {"points": 42}
D. failed

**8.** ```html
<button id="pay">Pay now</button>
```
```js
document.getElementById("pay").addEventListener("click", e => {
  console.log(e.type, e.target.id);
});
```
The user clicks the button. What is logged?
A. click pay
B. pay click
C. click Pay now
D. undefined pay

**9.** `<ul id="list">` already holds two items, Bread and Eggs.

```js
const li = document.createElement("li");
li.textContent = "Milk";
document.getElementById("list").appendChild(li);
```
After this runs, what does the list show?
A. Milk, Bread, Eggs
B. Bread, Eggs, Milk
C. Milk only
D. Bread, Eggs

**10.** What does this log?

```js
class Account {
  constructor(owner, bal) { this.owner = owner; this.bal = bal; }
  deposit(x) { this.bal += x; return this; }
}
const a = new Account("Ada", 100);
a.deposit(50).deposit(25);
console.log(a.bal);
```
A. 150
B. 175
C. 100
D. TypeError: a.deposit(...).deposit is not a function

**11.** What does event.preventDefault() do, as distinct from event.stopPropagation()?
A. Stops the event reaching ancestor elements; stopPropagation cancels the default action
B. Removes the event listener; stopPropagation removes the element
C. Reloads the page; stopPropagation pauses the event loop
D. Cancels the browser's default action, such as submitting a form; stopPropagation stops the event reaching ancestor elements

**12.** Why is server-side validation still required when a form is already validated in JavaScript?
A. JavaScript cannot check email formats
B. Browsers ignore JavaScript on forms
C. Server-side validation is faster for the user
D. Client-side checks run in the user's browser and can be bypassed, so only the server can enforce them

---

## Answers

**1. B** — *Form input values are strings.* An input's value is always a string, here "5". The * operator converts it to a number, so "5" * 2 is 10; the + operator with a string joins, so "5" + 2 is "52".

10 7 assumes value is a number; 52 52 assumes * also joins; NaN 52 assumes * cannot convert a numeric string.

**2. A** — *Event loop: synchronous code, microtasks, then macrotasks.* Synchronous code runs first, so S. When the stack is empty the microtask queue is drained: P1, then the .then chained after it, P2. Only then does the event loop take the timer macrotask, T, even though its delay was 0.

T first assumes a zero delay runs immediately; S, T, P1, P2 puts the timer ahead of the microtasks; P1, P2, S, T runs promise callbacks before synchronous code.

**3. C** — *An async function always returns a promise.* An async function always returns a promise, whatever it returns inside. r is a Promise object that will resolve to 5, so typeof r is "object" and r instanceof Promise is true. To see 5 you must await r or call r.then.

number false treats the return value as if the function were ordinary; number true is contradictory, a number is not a Promise instance; undefined false assumes an async function returns nothing.

**4. D** — *Handling a rejected await with try/catch.* await on a rejected promise throws inside the async function, so ok is skipped and the catch block prints caught no net. The try/catch has handled the error, so execution continues to the line after it and prints done.

ok, then done ignores the rejection; caught no net only forgets that code after a handled try/catch still runs; an uncaught error would only happen without the try/catch.

**5. C** — *const blocks reassignment, not mutation.* const freezes the binding, not the contents: pushing to the array (line 2) and replacing an element (line 3) change the array in place and are allowed. Line 4 tries to point cart at a new array, which is reassignment, and throws TypeError: Assignment to constant variable.

Lines 2 and 3 are mutation, not reassignment; None would be right only if cart had been declared with let.

**6. C** — *Object spread, override and rest destructuring.* The spread copies a: 1 and b: 2 into ext, then the later b: 5 overrides b and c: 9 is added, giving { a: 1, b: 5, c: 9 }. Destructuring pulls b out (5) and the rest gathers what is left, a and c, so rest has 2 keys.

2 2 forgets that a later property overrides the spread copy; 5 3 counts b inside rest as well; 2 3 makes both mistakes.

**7. A** — *Parsing a fetch response with .json().* fetch resolves to a Response object; res.json() parses the body and returns another promise, which resolves to the object { points: 42 }. The second .then receives that object, so data.points is 42.

undefined is what you get by reading .points on the Response itself, skipping .json(); the raw text would need JSON.parse and is never handed to .then in this chain; failed only runs if a promise rejects.

**8. A** — *Reading the event object: type and target.* The handler receives the event object e. Its type is the event name, click, and its target is the element that triggered the event, the button whose id is pay.

pay click reverses the two; Pay now is the button's text, not its id; undefined assumes the event object has no type property.

**9. B** — *Creating and appending DOM elements.* createElement makes a new li in memory, textContent fills it, and appendChild attaches it as the last child of the ul, so Milk appears after Bread and Eggs.

Milk first would need insertBefore; Milk only would mean the existing items were replaced, which appendChild never does; Bread, Eggs would be the result if appendChild were forgotten.

**10. B** — *ES6 classes and method chaining with this.* new Account sets bal to 100. deposit adds to bal and returns this, the same object, so the second .deposit runs on it too: 100 + 50 + 25 = 175.

150 counts only the first deposit; 100 assumes the method does not change the object; the TypeError would occur only if deposit returned nothing, since undefined has no deposit method.

**11. D** — *preventDefault versus stopPropagation.* preventDefault cancels what the browser would do on its own, such as submitting a form and reloading the page or following a link, which is why a validating submit handler calls it. stopPropagation stops the event travelling on to parent elements.

The first option swaps them; neither method removes listeners or elements; neither reloads the page or touches the event loop.

**12. D** — *Client-side versus server-side validation.* Client-side validation is for user experience: instant feedback and fewer wasted requests. It runs in the user's browser, so a user can disable it or send a request straight to the server; the server must re-check everything for security.

JavaScript can check email formats; browsers run form JavaScript normally; the server round-trip is slower, not faster, which is why the client check exists at all.
