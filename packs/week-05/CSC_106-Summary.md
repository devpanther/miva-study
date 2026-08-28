# CSC_106 — Week 5 Summary

*Introduction to Web Technologies · Week 5 (5 – 11 Oct 2026) · Topic: Basic JavaScript Concepts*

## The 8 most examinable things this week

1. **JavaScript is a full programming language, not a styling/markup language**: unlike HTML and CSS, it runs client-side in the browser and is used to add interactivity and manipulate the DOM.
2. **Declaration keywords differ in reassignment and scope**: `let` can be reassigned; `const` is read-only (reassigning it throws); `var` is the older keyword and is function-scoped rather than block-scoped.
3. **The five data types named**: Number, String, Boolean, Array (ordered collection), Object (key-value pairs).
4. **`==` vs `===`**: `==` (loose equality) converts types before comparing; `===` (strict equality) compares value *and* type, with no conversion.
5. **Conditionals**: `if` / `else if` / `else` for branching, the ternary operator (`condition ? a : b`) for a one-line if-else, and `switch` for comparing one value against many cases — each `case` needs `break` or execution falls through into the next one.
6. **Loops differ in when the condition is checked**: `for` (known number of iterations), `while` (condition checked *before* each pass, may run zero times), `do-while` (condition checked *after*, so the body always runs at least once).
7. **Functions and scope**: parameters/`return` values, global scope (declared outside any function, accessible anywhere), local/function scope (declared inside a function, accessible only there), block scope (`let`/`const` inside `{ }`), arrow functions (`(a, b) => a + b`) as shorthand, and closures — an inner function keeps access to its outer function's variables even after the outer function has finished running.
8. **Arrays vs objects, and the DOM/events**: arrays are zero-indexed ordered lists with methods (`push`, `pop`, `splice`, `forEach`, `filter`); objects are unordered key-value pairs accessed by dot or bracket notation; JavaScript reads/changes page content, style and structure through the DOM, and `addEventListener` attaches a function that runs when an event (e.g. a click) occurs.

## Variables and data types

```js
let age = 30;        // let: can be reassigned later
const pi = 3.14;      // const: read-only — reassigning throws a TypeError
var oldStyle = "x";   // var: older keyword, function-scoped (not block-scoped)
```

```js
let score = 95;                        // Number
let name = "Ada";                      // String
let isActive = true;                   // Boolean
let colors = ["red", "green", "blue"]; // Array
let person = { firstName: "Ada", age: 30 }; // Object
```

## Operators

Arithmetic: `+ - * / %`. Logical: `&&` (and) `||` (or) `!` (not).

```js
5 == "5";    // true  — == converts "5" to a number before comparing
5 === "5";   // false — === also checks type: number vs string
5 != "6";    // true
```

Ternary — a compact if-else:

```js
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"
```

## Conditionals and switch

```js
let temperature = 15;
if (temperature > 30) {
  console.log("Hot");
} else if (temperature > 15) {
  console.log("Warm");
} else {
  console.log("Cold");
}
// Output: "Cold" — 15 is not > 30 and not > 15, so it falls to else
```

```js
let dayOfWeek = 3;
switch (dayOfWeek) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Unknown");
}
// Output: "Wednesday"
```

Leaving out `break` lets execution fall through into the next `case` — a common bug.

## Loops

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Prints 1 through 10 — the last value logged is 10
```

```js
let counter = 0;
while (counter < 3) {
  console.log(counter);
  counter++;
}
// Output: 0, 1, 2
```

```js
let n = 5;
do {
  console.log(n);
  n++;
} while (n < 3);
// Output: 5 — the body runs once before the (false) condition is even checked
```

## Functions and scope

```js
function calculateRectangleArea(length, width) {
  return length * width;
}
calculateRectangleArea(8, 4); // 32
```

```js
const add = (a, b) => a + b; // arrow function — shorthand syntax
add(2, 3); // 5
```

```js
let globalVar = "I'm global";   // global scope — accessible anywhere

function greet() {
  let message = "local";        // local (function) scope — only inside greet
}

if (true) {
  let blockVar = "block";       // block scope — only inside this { }
}
```

Closure — an inner function retains access to its outer function's variables after the outer function has returned:

```js
function outer() {
  let outerVar = "I persist";
  function inner() {
    console.log(outerVar);
  }
  return inner;
}
const closureFn = outer();
closureFn(); // "I persist"
```

## Arrays and objects

```js
let colors = ["red", "green", "blue"];
colors[0];                 // "red" — arrays are zero-indexed
colors.length;              // 3
colors.push("yellow");      // colors is now ["red","green","blue","yellow"]
colors.pop();                // removes "yellow" — back to the original 3
colors.filter(c => c.startsWith("g")); // ["green"] — new array, original unchanged
```

```js
let person = { firstName: "Ada", lastName: "Lovelace", age: 30 };
person.firstName;      // "Ada"      — dot notation
person["lastName"];    // "Lovelace" — bracket notation
person.age = 31;        // modifies an existing property
```

Objects can also nest arrays/objects (e.g. `person.address.city`), and an object can have its own methods — functions stored as properties, invoked with `person.methodName()`.

## DOM and events

```js
document.getElementById("my-button").addEventListener("click", function () {
  alert("Button clicked!");
});
```

`addEventListener` attaches a function that runs whenever the named event (here, `click`) fires on that element — it does not run when the page loads, only when the button is actually clicked.

## Commonly confused

- **`==` vs `===`** — `==` converts operand types before comparing (`5 == "5"` is `true`); `===` requires both value and type to match with no conversion (`5 === "5"` is `false`). Prefer `===` to avoid surprise conversions.
- **`var` vs `let` vs `const`** — `var` is function-scoped and can be redeclared; `let`/`const` are block-scoped. `let` can be reassigned; `const` cannot (reassigning throws a `TypeError`, though the *contents* of a `const` array/object can still be mutated).
- **`while` vs `do-while`** — `while` checks its condition *before* the first pass, so the body may run zero times; `do-while` checks *after*, so the body always runs at least once, even if the condition is false from the start.
- **`push`/`pop` vs `splice`** — `push`/`pop` only add/remove at the *end* of an array; `splice(index, count, ...items)` can add, remove, or replace elements at any position.
- **Missing `break` in `switch`** — without `break`, execution falls through and keeps running the code in the *following* cases too, not just the matching one.
