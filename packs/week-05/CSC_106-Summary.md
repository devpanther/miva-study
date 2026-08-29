# CSC_106 — Week 5

*Introduction to Web Technologies · Week 5 (5 – 11 Oct 2026)*

## Most likely to be examined

1. **JavaScript as a client-side scripting language** — JS is downloaded with the page and executed by the **user's browser**, not on the server. Definition: a high-level, versatile, dynamic programming language, created by **Brendan Eich**, used primarily for front-end web development. It *can*: add interactivity, manipulate the DOM, do real-time form validation before submission, handle events, store data in the browser, and drive Single-Page Applications (SPAs), Progressive Web Apps (PWAs) and real-time updates. As client-side code it *cannot*: be trusted for security, hide its source or secrets from the user, or reach a database/file system directly — that is server-side work. Server-side scripting runs on the server and its source is never visible to the user.
2. **Three declaration keywords**: `var`, `let`, `const`. `let` can be reassigned; `const` is **read-only**; `let`/`const` introduce **block scope**.
3. **`==` vs `===`**: `==` checks if two values are equal; `===` (strict equal) checks they are equal **and of the same data type**. Also `!=` (not equal), `>`, `<`.
4. **Three scopes**: global (declared outside any function, accessible anywhere), local/function (declared inside a function, only accessible there), block (with `let`/`const`, only inside the `{ }`). Plus **closure**: an inner function keeps access to the outer function's variables even after the outer function has finished executing.
5. **Loop exact syntax**: `for (init; condition; update)`, `while (condition)`, `do { } while (condition);` — do-while runs the body **at least once** because the condition is checked *after* the block.
6. **Array methods and their exact effect**: `push()` adds to the **end**, `pop()` removes the **last** element, `splice()` adds/removes/replaces at a specified index, `forEach()` runs a function once per element, `filter()` returns a **new** array of elements passing a test, `.length` is a **property** (no parentheses). Arrays are **zero-indexed**.
7. **Four ways to define a function**: declaration (`function name() {}`), function expression (assigned to a variable), **IIFE** (defined and executed immediately, creates a private scope), **arrow function** (ES6, concise, auto-binds `this` to the enclosing context).
8. **Arrays vs Objects**: arrays are ordered collections accessed by numeric index, best for lists of similar items; objects are **key-value pairs** accessed by dot notation or square brackets, best where each value has a unique identifier (the key).

---

## Variables and declaration keywords

```js
let age = 30;        // let = keyword, age = variable name, 30 = assigned value
var score = 10;      // older keyword
const PI = 3.14;     // read-only, cannot be reassigned
age = 31;            // OK
// PI = 3.15;        // TypeError: Assignment to constant variable
```

**Declaration** creates the variable (`let age;`). **Assignment** puts a value in it (`age = 30;`). `let age = 30;` does both.

## Data types

```js
let count = 42;                             // Number  — numeric values
let name = "Joshua";                        // String  — text
let isActive = true;                        // Boolean — true or false
let colors = ["red", "green", "blue"];      // Array   — ordered collection of values
let person = { firstName: "Ada", age: 30 }; // Object  — complex/structured data
```

## Arithmetic operators

```js
let a = 10, b = 3;
a + b;  // 13   addition
a - b;  // 7    subtraction
a * b;  // 30   multiplication
a / b;  // 3.333...  division
a % b;  // 1    modulus (remainder)
```

## Control flow — conditional statements

Control flow determines the **order in which statements are executed**. In JavaScript it is managed through conditional statements and loops.

```js
let temperature = 30;
if (temperature > 25) {
  console.log("Hot");
} else if (temperature > 15) {
  console.log("Mild");
} else {
  console.log("Cold");
}
```

Conditionals can be **nested** (an `if` inside another `if`) for more complex decisions.

## Comparison operators

```js
5 == "5";    // true  — equal in value, type ignored
5 === "5";   // false — strict equal: value AND data type must match
5 != 3;      // true  — not equal
7 > 3;       // true  — greater than
2 < 9;       // true  — less than
```

## Logical operators

Used to combine multiple conditions.

```js
let age = 20, hasID = true;
if (age >= 18 && hasID) { }    // AND — both must be true
if (age < 13 || age > 65) { }  // OR  — at least one true
if (!hasID) { }                // NOT — inverts the value
```

## Ternary operator

A concise way to write a conditional as a single expression; used for simple if-else.

```js
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";   // "Yes"
```

Syntax: `condition ? valueIfTrue : valueIfFalse`.

## Switch statement

Compares a value against multiple `case` values; `break` exits the switch block once a match is found.

```js
let dayOfWeek = 3;
switch (dayOfWeek) {
  case 1:
    console.log("Monday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}
```

## Loops

```js
// for — use when you know how many times to repeat: initialise, condition, update
for (let i = 1; i <= 10; i++) {
  console.log(i);          // last number printed: 10
}

// while — use when the number of iterations is not known in advance
let counter = 0;
while (counter < 3) {
  console.log(counter);
  counter++;
}

// do-while — body always runs at least once; condition checked afterwards
let n = 5;
do {
  console.log(n);          // logs 5 even though 5 < 3 is false
  n++;
} while (n < 3);
```

## Functions

Purposes named by the source: **Modularity** (break code into smaller manageable pieces), **Reusability** (call it many times from different parts of the code), **Abstraction** (use code without understanding its internal details).

```js
function greet(name) {          // name = parameter (a placeholder for a value)
  console.log("Hello, " + name);
}
greet("Ada");                   // call: the name followed by parentheses

function add(a, b) {            // multiple parameters
  return a + b;                 // return statement specifies the value sent back
}
let sum = add(3, 4);            // 7

function calculateRectangleArea(length, width) {
  return length * width;
}
calculateRectangleArea(8, 4);   // 32  (mid-lesson answer)
```

## Scope

```js
let globalVar = "I am global";      // GLOBAL scope — accessible anywhere

function greet() {
  let message = "Hi";               // LOCAL scope — only inside greet()
  console.log(globalVar);           // OK
}
// console.log(message);            // ReferenceError: message is not defined

if (true) {
  let blockVar = "inside block";    // BLOCK scope (let / const only)
}
// console.log(blockVar);           // ReferenceError: blockVar is not defined
```

## Closure

A closure lets a function keep access to variables from its containing (enclosing) function even after the outer function has finished executing. Used for data encapsulation, private variables, callbacks and maintaining state.

```js
function outer() {
  let outerVar = "I am outer";
  function inner() {
    console.log(outerVar);   // inner is a closure over outerVar
  }
  return inner;
}
let myFn = outer();
myFn();                      // "I am outer" — still accessible
```

## Function expressions, IIFE, arrow functions

```js
// Function expression — defined within an expression, assigned to a variable
const square = function (x) {
  return x * x;
};

// IIFE — defined and executed immediately; creates a private scope
(function () {
  let privateVar = "hidden";
  console.log(privateVar);
})();
// console.log(privateVar);   // ReferenceError — not accessible outside the IIFE

// Arrow function (ES6) — concise; auto-binds `this` to the enclosing context
const double = (x) => x * 2;
double(5);                    // 10
```

Function expressions are useful for anonymous functions and for passing functions as arguments to other functions.

## Arrays

```js
let colors = ["red", "green", "blue"];   // declaration with square brackets
colors[0];          // "red"  — arrays are zero-indexed
colors.length;      // 3      — property, no parentheses

colors.push("yellow");        // adds to the END    -> ["red","green","blue","yellow"]
colors.pop();                 // removes the LAST   -> ["red","green","blue"]
colors.splice(1, 1, "pink");  // add/remove/replace at an index -> ["red","pink","blue"]

colors.forEach(function (c) { console.log(c); });   // runs once per element

let nums = [1, 2, 3, 4];
let evens = nums.filter(function (n) { return n % 2 === 0; });  // NEW array [2, 4]

// Nested arrays — access with multiple sets of square brackets
let matrix = [[1, 2], [3, 4]];
matrix[1][0];       // 3
```

## Objects

```js
let person = {                 // curly braces, key: value pairs
  firstName: "Ada",
  lastName: "Lovelace",
  age: 30,
  address: { city: "Lagos", country: "Nigeria" }   // nested object
};

person.firstName;        // dot notation     -> "Ada"
person["lastName"];      // square brackets  -> "Lovelace"
person.address.city;     // nested access    -> "Lagos"

person.email = "a@b.com";   // add a new property
person.age = 31;            // modify an existing property

// Object method — a function defined as a property
let circle = {
  radius: 5,
  area: function () {
    return 3.14 * this.radius * this.radius;
  }
};
circle.area();           // invoke with dot notation -> 78.5
```

A key is a string (or symbol) acting as a property name; the value can be of any data type.

## Object constructors

Constructors are functions that define object templates, so multiple instances with a similar structure can be created.

```js
function Person(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}
let p1 = new Person("Ada", 30);
let p2 = new Person("Grace", 45);
```

## DOM manipulation and events

The **Document Object Model (DOM)** represents the structure of a web page; JavaScript can change its **content, style and structure** dynamically.

```js
document.getElementById("title").textContent = "New heading";  // content
document.getElementById("title").style.color = "blue";         // style

document.getElementById("my-button").addEventListener("click", function () {
  alert("Button clicked!");
});
```

An **event** is an action or occurrence in the browser (a button click, a window resize); `addEventListener` registers the response.

---

## Commonly confused

- **`var` vs `let` vs `const`** — Can it be reassigned? `var`/`let` yes, `const` no (read-only). Is it limited to the `{ }` block? `let`/`const` yes (block scope), `var` no.
- **`==` vs `===`** — Must the data type match? `==` no, `===` yes. `5 == "5"` is `true`; `5 === "5"` is `false`.
- **Declaration vs assignment** — Declaration names the variable with a keyword (`let x;`); assignment puts a value in it (`x = 5;`). Reassigning a `const` errors; *declaring* a `const` with a value is fine.
- **`=` vs `==`** — `=` assigns, `==` compares. `if (x = 5)` assigns and is always truthy; `if (x == 5)` tests.
- **`push()` vs `pop()`** — `push` adds to the end; `pop` removes the last element.
- **`filter()` vs `forEach()`** — `filter` returns a **new array**; `forEach` returns nothing, it only runs code once per element.
- **`.length` vs `length()`** — `length` is a property on arrays; `colors.length()` is an error.
- **`while` vs `do-while`** — `while` may run zero times (condition checked first); `do-while` always runs at least once (condition checked last).
- **Array vs Object** — Ordered, numeric index, list of similar items → array. Key-value pairs with unique named identifiers → object.
- **Parameter vs argument** — Parameter is the placeholder in the definition (`function add(a, b)`); argument is the actual value passed at call time (`add(3, 4)`).
- **Client-side vs server-side** — Runs in the user's browser, source visible, not trustworthy for security → client-side. Runs on the server, source hidden, handles databases and authentication → server-side.
- **Function declaration vs function expression** — `function greet() {}` is a declaration; `const greet = function () {};` is an expression assigned to a variable, and can be anonymous or passed as an argument.
