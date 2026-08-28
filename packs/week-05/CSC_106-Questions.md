# CSC_106 — Week 5 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 6, not this week. Notes closed.*

## Multiple choice (12)

**1.**
```js
const pi = 3.14;
pi = 3.14159;
```
What happens when this code runs?
a) Logs `3.14159` — `pi` is updated normally
b) `TypeError: Assignment to constant variable.` — `const` cannot be reassigned
c) Logs `3.14` — the reassignment is silently ignored
d) `SyntaxError` — `const` cannot be given a decimal value

**2.**
```js
let colors = ["red", "green", "blue"];
console.log(typeof colors);
```
What is logged?
a) `"array"`
b) `"object"`
c) `"string"`
d) `"Array"`

**3.**
```js
console.log(5 == "5");
console.log(5 === "5");
```
What is logged, in order?
a) `true` then `true`
b) `true` then `false`
c) `false` then `true`
d) `false` then `false`

**4.**
```js
let age = 16;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote);
```
What is logged?
a) `"Yes"`
b) `"No"`
c) `true`
d) `16`

**5.** What is wrong with this switch statement, and what does it actually print?
```js
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
  case 2:
    console.log("Tuesday");
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Unknown");
}
```
a) Nothing is wrong — it prints only `"Tuesday"`, since that's the matching case
b) It is missing `break` statements after `case 1` and `case 2`, so execution falls through and prints `"Tuesday"` then `"Wednesday"`
c) It prints `"Monday"`, `"Tuesday"`, and `"Wednesday"` — every case always runs regardless of match
d) It prints nothing, because `day` must be a string to match a `case`

**6.**
```js
let n = 10;
let count = 0;
do {
  count++;
} while (n < 5);
console.log(count);
```
What is logged?
a) `0`
b) `1`
c) `5`
d) It loops forever

**7.**
```js
function calculateRectangleArea(length, width) {
  return length * width;
}
console.log(calculateRectangleArea(8, 4));
```
What is logged?
a) `12`
b) `32`
c) `undefined`
d) `"8 * 4"`

**8.** What happens when this code runs?
```js
function greet() {
  let message = "Hello";
}
console.log(message);
```
a) Logs `"Hello"`
b) Logs `undefined`
c) `ReferenceError: message is not defined` — `message` is local to `greet` and does not exist outside it
d) Logs an empty string `""`

**9.**
```js
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    return counter;
  }
  return inner;
}
const increment = outer();
console.log(increment());
console.log(increment());
```
What is logged, in order?
a) `1` then `1`
b) `1` then `2`
c) `0` then `1`
d) `undefined` then `undefined`

**10.**
```js
let numbers = [10, 20, 30];
numbers.push(40);
numbers.pop();
console.log(numbers);
```
What is logged?
a) `[10, 20, 30]`
b) `[10, 20, 30, 40]`
c) `[20, 30, 40]`
d) `[40, 10, 20, 30]`

**11.**
```js
let person = { firstName: "Ada", age: 30 };
person.age = 31;
console.log(person["age"]);
```
What is logged?
a) `30`
b) `31`
c) `undefined`
d) Error — bracket notation cannot be used to read a property

**12.**
```js
document.getElementById("my-button").addEventListener("click", function () {
  alert("Button clicked!");
});
```
Which statement about this code is correct?
a) The alert runs immediately, once, as soon as the page loads
b) The alert runs every time the element with id `"my-button"` is clicked
c) The code only works if `"my-button"` is a `<div>` element
d) `getElementById` selects every element that shares that id

## Short answer (3)

**13.** Using `5 == "5"` and `5 === "5"` as your example, explain the difference between `==` and `===` in JavaScript, and state what each expression evaluates to.

**14.** Explain the difference between global scope, local (function) scope, and block scope, giving one example declaration for each.

**15.** What is a closure? Using the `outer`/`inner` function pattern, explain why the inner function can still access a variable from `outer` after `outer` has finished executing.

## Answers

**1. b** — *const*: `const` variables cannot be reassigned after their initial declaration; JavaScript throws `TypeError: Assignment to constant variable.` at the reassignment line. (a) and (c) both assume the reassignment is allowed or silently dropped, and (d) mistakes the error for a syntax problem with decimals.
**2. b** — *typeof arrays*: JavaScript's `typeof` operator reports arrays as `"object"` — there is no separate `"array"` type at the `typeof` level, even though arrays behave as ordered collections with their own methods.
**3. b** — *`==` vs `===`*: `5 == "5"` is `true` because loose equality converts `"5"` to a number before comparing; `5 === "5"` is `false` because strict equality also checks type, and a number is never the same type as a string.
**4. b** — *ternary operator*: `age` is `16`, so `age >= 18` is `false`, and the ternary returns the value after the colon, `"No"`.
**5. b** — *switch fall-through*: `case 1` and `case 2` have no `break`, so once `day` matches `case 2`, execution runs `case 2`'s code and keeps running straight into `case 3` until it hits a `break`. It prints `"Tuesday"` then `"Wednesday"` — `case 1`'s code never runs because `day` did not match it and execution enters at `case 2`, not the top.
**6. b** — *do-while*: a `do-while` loop always runs its body once *before* checking the condition, regardless of whether the condition is true. `count` starts at 0, is incremented once inside the body, and the loop then stops because `n < 5` is false — so `count` is `1`.
**7. b** — *function return value*: `calculateRectangleArea(8, 4)` returns `length * width`, i.e. `8 * 4 = 32`.
**8. c** — *local scope*: `message` is declared with `let` inside `greet`, giving it local (function) scope — it does not exist in the surrounding code at all, so referencing it outside `greet` throws a `ReferenceError`, not just `undefined`.
**9. b** — *closure*: `inner` forms a closure over `counter`, retaining access to it across separate calls to `increment`. The first call increments `counter` from 0 to 1 and returns `1`; the second call increments it again to `2` and returns `2` — the variable is not reset between calls.
**10. a** — *array methods*: `push(40)` appends `40`, making the array `[10, 20, 30, 40]`; `pop()` then removes the last element, `40`, leaving `[10, 20, 30]` — back to the original contents.
**11. b** — *object properties*: `person.age = 31` overwrites the existing `age` property, and `person["age"]` (bracket notation) reads the same property as dot notation would — both refer to the identical value, `31`.
**12. b** — *addEventListener*: attaching a `"click"` listener does not run the handler on page load; it registers the function to run each time that specific event fires on that element, i.e. every time the button is clicked.
**13.** `==` (loose equality) converts the operands to a common type before comparing, so `5 == "5"` evaluates to `true` (the string `"5"` is converted to the number `5`). `===` (strict equality) compares both value and type with no conversion, so `5 === "5"` evaluates to `false`, because a number and a string are never the same type.
**14.** **Global scope**: a variable declared outside any function or block, e.g. `let globalVar = "hi";` at the top level of a script — accessible from anywhere in the code. **Local (function) scope**: a variable declared inside a function, e.g. `function greet() { let message = "hi"; }` — accessible only inside `greet`. **Block scope**: a `let`/`const` variable declared inside a `{ }` block such as an `if` statement, e.g. `if (true) { let blockVar = "hi"; }` — accessible only inside that block.
**15.** A closure is a function that retains access to the variables of its enclosing (outer) function even after that outer function has finished running. In the `outer`/`inner` pattern, `inner` is defined inside `outer` and references `outer`'s variable; when `outer` returns `inner`, JavaScript keeps that variable alive in memory because `inner` still has a reference to it — so calling the returned function later can still read (and, as in closures used as counters, update) that variable, instead of it being discarded when `outer` finished executing.
