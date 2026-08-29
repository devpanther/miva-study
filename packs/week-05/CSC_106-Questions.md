# CSC_106 — Week 5 Retention Set

*Introduction to Web Technologies · sit this seven days after the lesson.*

## Multiple choice (12)

**1.** What happens when this runs?
```js
const rate = 5;
rate = 6;
console.log(rate);
```
a) Logs `5`
b) Logs `6`
c) Throws an error — a `const` variable cannot be reassigned
d) Logs `undefined`

**2.** What does this log?
```js
console.log(5 === "5");
```
a) `false`
b) `true`
c) `5`
d) An error

**3.** What does this log?
```js
let n = 5;
do {
  console.log(n);
  n++;
} while (n < 3);
```
a) Nothing
b) `5 6 7 ...` forever
c) `0 1 2`
d) `5`

**4.** You need a new array containing only the elements of an existing array that pass a test, leaving the original untouched. Which method?
a) `forEach()`
b) `filter()`
c) `splice()`
d) `push()`

**5.** What does this log?
```js
let x = [10, 20, 30];
x.push(40);
x.pop();
console.log(x.length);
```
a) `3`
b) `4`
c) `2`
d) `x.length()` is required, so it errors

**6.** Why does the last line fail?
```js
if (true) {
  let blockVar = "hi";
}
console.log(blockVar);
```
a) `blockVar` was never assigned a value
b) `if (true)` is not a valid condition
c) `console.log` cannot print strings
d) `let` gives `blockVar` block scope, so it exists only inside the `{ }` block

**7.** Which is the correct ternary operator syntax?
a) `let r = if (age >= 18) "Yes" else "No";`
b) `let r = age >= 18 ? "Yes" : "No";`
c) `let r = age >= 18 : "Yes" ? "No";`
d) `let r = (age >= 18) => "Yes", "No";`

**8.** In a `switch` statement, what is the purpose of `break`?
a) It ends the whole programme
b) It skips to the `default` case
c) It exits the switch block once a matching case has run
d) It compares the value against the next case

**9.** What does this log, and what is the feature called?
```js
function outer() {
  let outerVar = "kept";
  function inner() { console.log(outerVar); }
  return inner;
}
outer()();
```
a) `kept` — a closure
b) `undefined` — the outer scope is destroyed
c) An error — `outerVar` is out of scope
d) `kept` — an IIFE

**10.** "JavaScript is a client-side scripting language" means that:
a) Its code runs on the web server and only the result is sent to the browser
b) It can only be used to style pages, like CSS
c) It must be compiled before a browser can read it
d) Its code is executed by the user's browser, not on the server

**11.** Which construct is defined and executed immediately, and is used to create a private scope so variables do not pollute the global scope?
a) An arrow function
b) An IIFE (Immediately Invoked Function Expression)
c) An object constructor
d) A `do-while` loop

**12.** What does this log?
```js
let person = {
  firstName: "Ada",
  address: { city: "Lagos" }
};
console.log(person["firstName"] + " " + person.address.city);
```
a) `undefined Lagos`
b) An error — you cannot mix square brackets and dot notation
c) `Ada Lagos`
d) `firstName Lagos`

## Short answer (3)

**13.** State the difference between `==` and `===`, and give one example where the two give different results.

**14.** Name the three kinds of variable scope covered this week, and say in one line where a variable of each kind can be accessed.

**15.** Write a JavaScript function `calculateRectangleArea` that takes `length` and `width` as parameters and returns the area, then state what `calculateRectangleArea(8, 4)` returns. Name the keyword that sends the value back to the caller.

---

## Answers

**1. c** — `const` is read-only; reassigning it throws a TypeError ("Assignment to constant variable").

**2. a** — `===` is strict equal: the values match but the data types (Number vs String) do not, so it is `false`.

**3. d** — A `do-while` always executes the block once before checking the condition; `5 < 3` is false, so it stops after logging `5`.

**4. b** — `filter()` creates a new array with all elements that pass the provided test; `forEach()` returns nothing and `splice()` mutates the original.

**5. a** — `push` adds `40` to the end (length 4), `pop` removes the last element again, leaving 3; `length` is a property, not a method.

**6. d** — `let` and `const` introduce block scope, so `blockVar` is not defined outside the `if` block.

**7. b** — The syntax is `condition ? valueIfTrue : valueIfFalse`.

**8. c** — `break` exits the switch block once a match is found, preventing later cases from running.

**9. a** — `inner` retains access to `outerVar` after `outer` has finished executing; that is a closure.

**10. d** — Client-side means the code runs in the user's browser (adding interactivity, DOM changes, form validation), as opposed to server-side code that runs on the server.

**11. b** — An IIFE is a function expression defined and executed immediately, creating a private scope.

**12. c** — `person["firstName"]` is square-bracket access and `person.address.city` is dot notation into a nested object; both are valid, giving `Ada Lagos`.

**13.** `==` checks only whether two values are equal; `===` (strict equal) checks that they are equal **and** of the same data type. Example: `5 == "5"` is `true` but `5 === "5"` is `false`.

**14.** Global — declared outside any function, accessible anywhere in the code. Local (function) — declared inside a function, accessible only within that function. Block — declared with `let` or `const` inside `{ }`, accessible only within that block.

**15.**
```js
function calculateRectangleArea(length, width) {
  return length * width;
}
```
`calculateRectangleArea(8, 4)` returns `32`. The `return` keyword/statement sends the value back to the calling code.
