# CSC_106 — Week 5 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 6, not this week. Notes closed.*

## Section A - Multiple choice (12)

**1.** What is printed?

```js
console.log("5" == 5);
console.log("5" === 5);
```

a) true, true
b) true, false
c) false, false
d) false, true

**2.** Which statement about `let`, `var` and `const` is correct?

a) `const` variables are read-only and cannot be reassigned; `let` variables can be reassigned
b) `let` variables are read-only; `const` variables can be reassigned
c) `var` is the only keyword that creates block scope
d) All three are identical in behaviour

**3.** What happens when this runs?

```js
if (true) {
  let a = 1;
  var b = 2;
}
console.log(b);
console.log(a);
```

a) Prints 2, then 1
b) Prints 1, then 2
c) Prints 2, then throws a ReferenceError because `a` is block-scoped
d) Throws an error immediately because `var` cannot be used inside an `if`

**4.** What is printed?

```js
let a = 10;
let b = "20";
console.log(a + b);
```

a) 30
b) "1020"
c) NaN
d) 210

**5.** What is printed?

```js
let colors = ["red", "green", "blue"];
colors.push("yellow");
colors.pop();
console.log(colors[1], colors.length);
```

a) red 4
b) green 3
c) green 4
d) blue 3

**6.** What is printed?

```js
let n = 5;
do {
  console.log(n);
  n++;
} while (n < 3);
```

a) Nothing
b) 5
c) 5 6 7
d) An infinite loop

**7.** What is printed?

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

The **last** number printed is:

a) 9  b) 10  c) 11  d) 1

**8.** What is printed?

```js
function add(a, b) {
  a + b;
}
console.log(add(2, 3));
```

a) 5
b) undefined
c) null
d) "23"

**9.** What is printed?

```js
let day = 2;
switch (day) {
  case 1: console.log("Mon");
  case 2: console.log("Tue");
  case 3: console.log("Wed"); break;
  default: console.log("Other");
}
```

a) Tue
b) Tue, Wed
c) Tue, Wed, Other
d) Mon, Tue, Wed

**10.** What is the value of `status`?

```js
let age = 15;
let status = age >= 18 ? "Adult" : "Minor";
```

a) "Adult"  b) true  c) "Minor"  d) 15

**11.** Given the object below, which expression returns `"Lagos"`?

```js
let person = {
  firstName: "Ada",
  address: { city: "Lagos", state: "Lagos" }
};
```

a) `person[address][city]`
b) `person.address.city`
c) `person.city`
d) `person[0].city`

**12.** Which line correctly makes a button with the ID `my-button` show an alert when clicked?

a) `document.getElementById("my-button").addEventListener("click", function () { alert("Hi"); });`
b) `document.getElementById(my-button).onEvent("click", alert("Hi"));`
c) `document.getClassName("my-button").click(alert("Hi"));`
d) `document.querySelector("my-button").addEvent(click, "Hi");`

## Section B - Short answer (3)

**13.** Write a JavaScript function that calculates the area of a rectangle, taking two parameters, `length` and `width`. Show how you would call it with a length of 8 and a width of 4, and state the result. Explain the difference between a **parameter** and a **return value**.

**14.** Explain **global scope**, **local scope** and **block scope** in JavaScript, giving a one-line example of each. Then define a **closure** and say why it is useful.

**15.** Compare **arrays** and **objects** in JavaScript: state what each is best suited for, how elements/properties are accessed in each, and name two array methods with what they do.

## Answers

**1. b** — *loose vs strict equality*: `==` converts types before comparing, so `"5" == 5` is `true`; `===` requires the same value **and** the same data type, so `"5" === 5` is `false`.

**2. a** — *declaration keywords*: `let` can be reassigned, `const` is read-only, `var` is the older function-scoped keyword. Block scope came in with `let` and `const`, not `var`.

**3. c** — *block scope*: `var b` is function-scoped and leaks out of the `if` block, so `2` prints. `let a` is block-scoped and does not exist outside the braces, so the next line throws a ReferenceError.

**4. b** — *string concatenation vs numeric addition*: if either operand of `+` is a string, JavaScript concatenates. `10 + "20"` gives the string `"1020"`, not `30`.

**5. b** — *array methods and zero-indexing*: `push` adds `"yellow"` to the end (length 4), `pop` removes it again (length 3). `colors[1]` is the **second** element, `"green"`, because arrays are zero-indexed.

**6. b** — *do...while*: the block runs **first** and the condition is checked afterwards, so `5` prints once; `n` becomes 6, `6 < 3` is false, loop ends. A plain `while (n < 3)` would have printed nothing.

**7. b** — *for loop*: the loop runs while `i <= 10`, so the last value printed is `10`. It then increments to 11, fails the condition, and stops.

**8. b** — *return values*: the function computes `a + b` but never returns it, so the call evaluates to `undefined`. Add `return a + b;` to get `5`.

**9. b** — *switch fall-through*: `case 2` matches and prints "Tue", but with no `break` execution falls through into `case 3` and prints "Wed"; the `break` there exits the switch. `break` is what stops fall-through.

**10. c** — *ternary operator*: `condition ? valueIfTrue : valueIfFalse`. `15 >= 18` is false, so `"Minor"` is assigned.

**11. b** — *nested object access*: dot notation chains through the nested object. Bracket notation would need quoted strings: `person["address"]["city"]`. `person.city` is `undefined` — `city` belongs to `address`, not to `person`.

**12. a** — *events and DOM*: `getElementById` takes the ID as a **string**, and `addEventListener("click", handler)` registers the function to run when the event fires.

**13.** *Functions, parameters and return values*:

```js
function calculateRectangleArea(length, width) {
  return length * width;
}
console.log(calculateRectangleArea(8, 4));   // 32
```

The result is **32**. **Parameters** (`length`, `width`) are placeholders named in the function definition that receive the **arguments** (8 and 4) supplied at the call; the **return value** is the value the `return` statement sends back to the code that called the function, so it can be stored or printed. A function with no `return` gives back `undefined`.

**14.** *Scope and closure*: **Global scope** — a variable declared outside any function, accessible anywhere: `let g = "global";`. **Local (function) scope** — declared inside a function, accessible only within it: `function f() { let m = "hi"; }` — `m` is invisible outside `f`. **Block scope** — introduced by `let`/`const`, limited to the `{ }` block it is declared in: `if (true) { let b = 1; }` — `b` is invisible outside the `if`. A **closure** is a function that keeps access to variables of its enclosing function **even after that outer function has finished executing**; it is used for data encapsulation, private variables, maintaining state and callbacks.

**15.** *Arrays vs objects*: **Arrays** are **ordered** collections of values, best for lists of similar items (names, numbers) and for iterating; elements are accessed by **numeric index** in square brackets, `colors[0]`, and arrays are **zero-indexed**. **Objects** are collections of **key–value pairs**, best for structured data where each value has a unique identifier (a person's properties, a product's attributes); properties are accessed by **key**, using dot notation `person.age` or bracket notation `person["age"]`. Two array methods: **`push()`** adds one or more elements to the end of an array; **`pop()`** removes the last element. (Also acceptable: `splice()` adds/removes/replaces at an index, `forEach()` runs a function once per element, `filter()` returns a new array of elements passing a test.)
