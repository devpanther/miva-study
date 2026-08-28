# CSC_106 — Week 5 Summary

*Introduction to Web Technologies · Week 5 (5–11 Oct 2026) · Topic: Basic JavaScript concepts — variables, data types, operators, control flow, functions and scope, arrays and objects, DOM and events*

## The 8 most examinable things this week

1. **`==` vs `===`.** `==` (equal) checks **value only** and converts types first; `===` (strict equal) checks **value *and* data type**. So `"5" == 5` is `true` but `"5" === 5` is `false`. This is the single most likely MCQ of the week.
2. **`var` / `let` / `const`.** `let` can be **reassigned**; `const` is **read-only** (cannot be reassigned); `var` is the old keyword and is **not block-scoped**. `let` and `const` introduced **block scope**.
3. **The three scopes**: **global** (declared outside any function — visible everywhere), **local/function** (declared inside a function — visible only there), **block** (declared with `let`/`const` inside `{ }` — visible only in that block). Plus **closure**: an inner function keeps access to the outer function's variables *even after the outer function has finished*.
4. **Loops**: `for` when you **know** the number of iterations; `while` when you **do not**; `do...while` **always runs at least once** because the condition is checked *after* the block.
5. **Functions**: `function name(params) { ... }` defines, `name(args)` **calls**. Parameters are placeholders; the **`return`** statement sends a value back. A function with no `return` returns **`undefined`**. Purposes named in the lecture: **modularity, reusability, abstraction**.
6. **Arrays are zero-indexed** — the first element is at index **0**, and `arr.length` is the count (so the last index is `length - 1`). Methods named: **`push()`** (add to end), **`pop()`** (remove last), **`splice()`** (add/remove/replace at an index), **`forEach()`** (run a function per element), **`filter()`** (new array of elements passing a test).
7. **Arrays vs objects**: arrays are **ordered collections accessed by numeric index**, best for lists of similar items; objects are **key–value pairs accessed by property name**, best for structured data where each value has a unique identifier.
8. **`switch` needs `break`.** Without `break`, execution **falls through** into the following cases. And the **ternary** `condition ? valueIfTrue : valueIfFalse` is the one-expression form of `if...else`.

## What JavaScript is

JavaScript (JS) is a **high-level, versatile, dynamic programming language** used primarily for **front-end web development**. It adds **interactivity**, manipulates the **DOM (Document Object Model)**, and creates **dynamic content** in the browser. It is supported by all major browsers. Unlike **HTML** (structure) and **CSS** (presentation), JavaScript is a **full-fledged programming language**. It runs **client-side**, in the user's browser, as opposed to server-side scripting; it was created by **Brendan Eich**. Uses: interactivity, real-time **form validation**, **event handling**, data storage, **Single-Page Applications (SPAs)**, **Progressive Web Apps (PWAs)** and real-time updates.

## Putting JavaScript on a page

```html
<!-- 1. Internal / inline: code inside a script element -->
<script>
  console.log("Hello");
</script>

<!-- 2. External: linked file, src attribute, no content between the tags -->
<script src="main.js"></script>
```

Usually placed **just before `</body>`** so the HTML elements exist before the script runs. External files keep behaviour separate from structure and can be cached and reused.

## Variables

```js
let age = 30;        // declare with let: can be reassigned
age = 31;            // fine
const PI = 3.14;     // read-only: PI = 3.15 -> TypeError
var oldStyle = "x";  // older keyword, function-scoped, not block-scoped
```

`let` is the keyword, `age` is the **variable name**, `30` is the **assigned value**.

## Data types

```js
let score  = 95;                       // Number  - numeric values
let name   = "Ada";                    // String  - text
let passed = true;                     // Boolean - true / false
let colors = ["red", "green", "blue"]; // Array   - ordered collection
let person = { firstName: "Ada", age: 30 }; // Object - key-value pairs
```

## Operators

```js
// Arithmetic
5 + 2   // 7      addition
5 - 2   // 3      subtraction
5 * 2   // 10     multiplication
5 / 2   // 2.5    division
5 % 2   // 1      modulus (remainder)

// Comparison
5 == "5"    // true   equal: value only
5 === "5"   // false  strict equal: value AND type
5 != "5"    // false  not equal (value only)
5 > 2       // true   greater than
5 < 2       // false  less than

// Logical
(5 > 2) && (3 > 1)   // true   AND: both must be true
(5 > 2) || (3 > 9)   // true   OR: at least one true
!(5 > 2)             // false  NOT: reverses

// Ternary
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";   // "Yes"
```

## Conditional statements

```js
let temperature = 25;
if (temperature > 30) {
  console.log("Hot");
} else if (temperature > 20) {
  console.log("Warm");     // this runs
} else {
  console.log("Cold");
}
```

Conditionals can be **nested** (an `if` inside another `if`) for more complex decisions.

```js
let dayOfWeek = 3;
switch (dayOfWeek) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;   // matches, then break exits
  default: console.log("Other day");
}
```

## Loops

```js
for (let i = 0; i < 3; i++) {   // initialise; condition; update
  console.log(i);               // 0 1 2
}

let counter = 0;
while (counter < 3) {           // condition checked FIRST
  console.log(counter);
  counter++;                    // 0 1 2
}

let n = 5;
do {
  console.log(n);               // prints 5 once...
  n++;
} while (n < 3);                // ...condition checked AFTER, so it stops
```

## Functions, parameters, return

```js
function greet(name) {          // declaration; name is a parameter
  console.log("Hello, " + name);
}
greet("Ada");                    // call: name followed by parentheses

function add(a, b) {
  return a + b;                  // return sends a value back to the caller
}
let sum = add(3, 4);             // 7

// Function expression (can be anonymous, assigned to a variable)
const square = function (x) { return x * x; };

// Arrow function (ES6, concise; binds `this` to the enclosing context)
const double = (x) => x * 2;

// IIFE - defined and executed immediately, creates a private scope
(function () {
  let privateVar = "hidden";
})();                            // privateVar is not accessible outside
```

## Scope and closure

```js
let globalVar = "I am global";   // GLOBAL scope - accessible anywhere

function greet() {
  let message = "Hi";            // LOCAL scope - only inside greet()
  console.log(message);
}
// console.log(message);         -> ReferenceError

if (true) {
  let blockVar = "block only";   // BLOCK scope (let/const)
}
// console.log(blockVar);        -> ReferenceError

function outer() {
  let outerVar = "outer value";
  function inner() {             // CLOSURE
    console.log(outerVar);       // still sees outerVar after outer() ends
  }
  return inner;
}
outer()();                       // "outer value"
```

## Arrays

```js
let colors = ["red", "green", "blue"];
console.log(colors[0]);      // "red"  - zero-indexed
console.log(colors.length);  // 3

colors.push("yellow");       // add to end   -> ["red","green","blue","yellow"]
colors.pop();                // remove last  -> ["red","green","blue"]
colors.splice(1, 1, "pink"); // at index 1, remove 1, insert "pink"

colors.forEach(function (c) { console.log(c); });   // run per element

let nums = [1, 2, 3, 4];
let evens = nums.filter(function (n) { return n % 2 === 0; });  // [2, 4]

let nested = [[1, 2], [3, 4]];
console.log(nested[1][0]);   // 3
```

## Objects

```js
let person = {
  firstName: "Ada",
  lastName: "Obi",
  age: 30,
  address: { city: "Lagos", state: "Lagos" }   // nested object
};

console.log(person.firstName);     // dot notation      -> "Ada"
console.log(person["lastName"]);   // bracket notation  -> "Obi"
console.log(person.address.city);  // nested            -> "Lagos"

person.email = "ada@x.com";        // add a property
person.age = 31;                   // modify a property

let circle = {
  radius: 5,
  area: function () { return 3.14 * this.radius * this.radius; }  // method
};
console.log(circle.area());        // invoke with dot notation -> 78.5

function Person(firstName, age) {  // object constructor
  this.firstName = firstName;
  this.age = age;
}
let p1 = new Person("Ada", 30);    // creates an instance
```

## DOM manipulation and events

```js
// Access and change page content
document.getElementById("demo").innerHTML = "New text";
document.getElementById("demo").style.color = "red";

// Respond to an event
document.getElementById("my-button").addEventListener("click", function () {
  alert("Button clicked!");
});
```

An **event** is an action or occurrence in the browser (a button click, window resize); JavaScript **listens** for it and runs a function in response.

## Two worked traces

**Trace A**

```js
let x = 5;
let y = "5";
console.log(x == y);            // 1
console.log(x === y);           // 2
console.log(x + y);             // 3
console.log(x + Number(y));     // 4
```

1. `true` — `==` converts `"5"` to `5`, values match.
2. `false` — `===` also compares type: Number vs String.
3. `"55"` — `+` with a string means **concatenation**, not addition.
4. `10` — `Number(y)` makes both operands numbers, so `+` adds.

**Trace B**

```js
function total() {
  let sum = 0;
  for (let i = 1; i <= 3; i++) {
    sum = sum + i;
  }
  console.log(sum);
  return sum * 2;
}
console.log(total());
```

The loop runs with `i` = 1, 2, 3 → `sum` becomes 1, then 3, then 6. `console.log(sum)` prints **6**. The function returns `12`, which the outer `console.log` prints. Output: **6** then **12**.

## Commonly confused

- **`==` vs `===`** — `==` compares value after type conversion; `===` compares value **and** data type. `0 == "0"` is `true`; `0 === "0"` is `false`. In exams, "same value *and* same type" always means `===`.
- **`let` vs `var` scope** — `let` is **block-scoped** (dies at the closing `}` of the block); `var` is **function-scoped** and leaks out of `if`/`for` blocks. `const` is block-scoped and read-only.
- **`null` vs `undefined`** — `undefined` means a variable was declared but **never assigned** (also what a function with no `return` gives back); `null` is an **explicitly assigned "no value"**. `null == undefined` is `true`, but `null === undefined` is `false`.
- **Declaring vs calling a function** — `function add(a, b) { ... }` only *defines* it; nothing runs. `add(2, 3)` *calls* it. Writing `add` without parentheses gives the function itself, not its result.
- **Concatenation vs addition** — `+` between two numbers adds (`2 + 3` → `5`); `+` with any string concatenates (`2 + "3"` → `"23"`). Watch for values coming from `prompt()` or an input field: they are **strings**.
- **`return` vs `console.log`** — `return` hands a value back to the caller; `console.log` only prints. A function that logs but does not return evaluates to `undefined`.
- **Array vs object access** — arrays by **numeric index** `colors[0]`; objects by **key** `person.age` or `person["age"]`.
- **`while` vs `do...while`** — `while` may run **zero** times; `do...while` runs **at least once**.

*Note: almost every code example in this week's slides is a screenshot image, so the extracted text carries only the surrounding prose — the snippets above are the standard treatment of exactly the topics the slides name. Script-tag placement, `null` vs `undefined`, and the arithmetic operator table are likewise supplied as standard, since the slides show them only as images. (The Summary PDF's "skills acquired" list is a copy-paste error listing CSS competencies; ignore it.)*
