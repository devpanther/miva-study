# CSC_106 — End-semester Mock

*Introduction to Web Technologies · Weeks 5–9 · 45 minutes · notes closed · 24 marks*

**Instructions.** Work straight through in **45 minutes** with no notes, no slides and no browser or code editor open; one mark per question, 24 marks in total. Every question is drawn from **Weeks 5 to 9** — JavaScript fundamentals, advanced JavaScript, the DOM, libraries and frameworks, and PHP.
Do not read the Answers section until the time is up — then mark Section B **honestly** against the model answers, giving yourself the mark only where you actually wrote the named point.

---

## Section A — Multiple choice (20)

**1.** What does this print?

```js
let n = 5;
do {
  console.log(n);
  n++;
} while (n < 3);
```
a) Nothing, because `n < 3` is already false before the loop starts
b) `5` once, because `do...while` checks its condition **after** running the block
c) `5`, `6`, `7`, because the block repeats until `n` has passed 3
d) It loops forever, because `n` moves away from the condition and can never satisfy it

**2.** What are the three printed values, in order?

```js
let x = 5;
let y = "5";
console.log(x == y);
console.log(x === y);
console.log(x + y);
```
a) `true`, `true`, `10`
b) `true`, `false`, `"55"`
c) `false`, `false`, `10`
d) `true`, `false`, `10`

**3.** What does the last line print?

```js
let colors = ["red", "green", "blue"];
colors.push("yellow");
colors.pop();
colors.splice(1, 1, "pink");
console.log(colors[1], colors.length);
```
a) `green 4`
b) `pink 3`
c) `pink 4`
d) `yellow 3`

**4.** What happens here?

```js
function outer() {
  let outerVar = "outer value";
  function inner() {
    console.log(outerVar);
  }
  return inner;
}
outer()();
```
a) `undefined` is printed, because `outerVar` is destroyed the moment `outer()` returns
b) A ReferenceError, because `outerVar` is local to `outer()` and cannot be read from anywhere else
c) `outer value` is printed — `inner` is a **closure** and keeps access to `outer`'s variables after `outer()` has finished
d) `outer value` is printed, because a variable declared with `let` inside a function is global

**5.** A `<button id="save">` runs the function `handleSave` when it is clicked. Which statement names the **four components of an event** correctly?
a) The button is the event listener, `click` is the event source, and `handleSave` is the event object
b) The button is the event **source**, `click` is the event **type**, `handleSave` is the event **listener**, and the object passed to it is the event **object**
c) `click` is the event source, the button is the event listener, and `handleSave` is the event type
d) The four components are the events `submit`, `reset`, `change` and `focus`

**6.** The validation message flashes and vanishes because the page reloads. Which line, added inside the handler, fixes it?

```js
form.addEventListener("submit", function (event) {
  if (email.value.trim() === "") {
    // ← missing line
    msg.textContent = "Enter a valid email";
  }
});
```
a) `event.stopPropagation();`
b) `event.preventDefault();`
c) `form.reset();`
d) `event.target.blur();`

**7.** Which line, if any, fails?

```js
const user = { name: "Ada" };
user.name = "Bola";          // line 2
user = { name: "Chidi" };    // line 3
```
a) Neither — `const` only prevents a variable being **redeclared**
b) Line 3 throws a TypeError; line 2 is legal, because `const` freezes the **binding**, not the object's contents
c) Line 2 throws a TypeError; line 3 is legal, because replacing the whole object is a fresh assignment
d) Both throw a TypeError, because a `const` object is read-only throughout

**8.** Why does this log `undefined`?

```js
fetch("/api/users")
  .then(response => console.log(response.name));
```
a) `fetch` hands back the parsed data only when `async`/`await` is used instead of `.then()`
b) The first `.then()` receives the **Response object**, not the body; the body must be parsed with `.json()`, which itself returns a promise
c) `fetch` rejects on every HTTP response, so `.then()` never runs with real data
d) The same-origin policy blanks the body until CORS headers are added

**9.** What does `box` hold?

```js
const box = document.getElementById("#box");
```
a) The element with `id="box"` — `getElementById` accepts a CSS selector just as `querySelector` does
b) `null` — `getElementById` takes the **bare** ID, with no `#`
c) An HTMLCollection of every element carrying `id="box"`
d) Nothing: the line throws a SyntaxError, because `#` is not valid inside a JavaScript string

**10.** What does the user see on the page?

```js
document.getElementById("box").textContent = "<b>Hi</b>";
```
a) A bold **Hi**
b) The characters `<b>Hi</b>`, shown literally
c) Nothing — `textContent` cannot be written to, only read
d) `Hi` in ordinary weight, the tags having been stripped out by the HTML parser

**11.** Two paragraphs already carry `class="item"`. What do the two `console.log` lines print?

```js
const items = document.getElementsByClassName("item");
const extra = document.createElement("p");
extra.className = "item";
console.log(items.length);
document.getElementById("list").appendChild(extra);
console.log(items.length);
```
a) `2` then `2` — the collection is a snapshot taken when it was created
b) `3` then `3` — `createElement` puts the new paragraph into the document straight away
c) `2` then `3` — `createElement` alone does not attach the node; `appendChild` does, and an HTMLCollection is **live**
d) `3` then `4` — the collection counts detached nodes as well

**12.** Clicking the button does nothing. Why?

```js
document.getElementById("save").addEventListener("click", showMsg());
```
a) It is correct — the parentheses are required when registering a handler
b) `showMsg` is **called immediately** at registration and its return value, `undefined`, is registered as the handler
c) `showMsg` runs on every click **and** once at registration, so the two cancel out
d) `addEventListener` cannot be used on a `<button>`; buttons need the `onclick` attribute

**13.** Compare these two lines:

```js
$("#panel").fadeIn(400);
```
```html
<p v-if="seatsLeft > 0">{{ seatsLeft }} seats left</p>
```
Which statement matches the lecture's distinction?
a) Both are frameworks, because both change what appears on the page
b) The first is a **library** call — your code keeps the flow of control; the second is **framework** territory — Vue owns the rendering cycle and reads your directive when it decides to render
c) The first is a framework call, because jQuery supplies a complete application architecture; the second is a library, because a directive is just a function
d) Neither — library and framework differ only in file size and download time

**14.** Which statement about React is correct as taught?
a) The virtual DOM is a faster replacement for the browser's DOM, which React renders into directly
b) React compares the virtual DOM with the actual DOM and updates **only the parts that differ**; data flows **parent → child**
c) React uses two-way data binding, so a change in the UI updates the data model automatically
d) React re-renders the whole page on every state change, which is what the virtual DOM is for

**15.** Typing in the box immediately changes the text in the paragraph, with no extra code written:

```html
<input [(ngModel)]="user.name"> <p>Hello {{ user.name }}</p>
```
Which mechanism, in which framework?
a) Unidirectional data flow, in React
b) **Two-way data binding**, in Angular
c) The virtual DOM, in React
d) Dependency injection, in Angular

**16.** Which statement about the backend frameworks is correct as taught?
a) Django's distinguishing feature is **Convention over Configuration**, so almost nothing needs configuring
b) Express.js **middleware** functions have access to the request and response objects and run **in the order they are defined**
c) Ruby on Rails' **Active Record** generates a customisable admin panel for managing site data
d) **ASP.NET Core** is the Windows-only edition of ASP.NET

**17.** What is wrong with this line?

```php
<?php
$name = "Robert";
$greeting = "Hello, " + $name;
?>
```
a) Nothing — `+` joins strings in PHP exactly as it does in JavaScript
b) PHP's concatenation operator is the **dot**, so it must be `"Hello, " . $name`
c) PHP concatenates with `&`, so it must be `"Hello, " & $name`
d) Nothing is wrong, provided the whole expression is wrapped in double quotes

**18.** What is printed?

```php
<?php
function counter() {
    $hits = 0;
    static $visits = 0;
    $hits++;
    $visits++;
    echo $hits . "-" . $visits . " ";
}
counter(); counter(); counter();
?>
```
a) `1-1 1-2 1-3`
b) `1-1 1-1 1-1`
c) `1-1 2-2 3-3`
d) `3-3` only, because both variables survive between calls

**19.** What is printed?

```php
<?php
$a = 17;
echo $a % 5;
echo " ";
echo $a / 5;
?>
```
a) `3.4 2`
b) `2 3.4`
c) `2 3`
d) `3 2`

**20.** A student opens **View Source** in her browser on a page built from this file. What does she see, and why?

```php
<h1>Hello, <?php echo $name; ?>!</h1>
```
a) The `<?php ... ?>` tag exactly as written, because the browser runs the PHP after downloading the file
b) Only `<h1>Hello, Robert!</h1>` — PHP is **server-side**, so the server executes the code and sends the browser only its **output**
c) Nothing at all, because PHP and HTML cannot be mixed in a single file
d) The tag, but greyed out, because browsers ignore tags they do not recognise

## Section B — Short answer (4)

**21.** Trace the code below. State exactly what is printed and in what order. Then name the **three scopes** JavaScript recognises, say what a function with **no `return` statement** evaluates to, and give the one-line difference between `let` and `const`.

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

**22.** (a) Name the **three ways** of writing asynchronous JavaScript taught this term and say in one line what each one is. (b) Give the exact output order of the snippet below and explain it using the **event loop**. (c) A teammate says client-side validation makes server-side validation unnecessary. Reply in two sentences.

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

**23.** The snippet below contains **three** faults, one per line, where `userComment` is text typed by a visitor. Name each fault and rewrite the snippet correctly. Then state in one sentence what separates a **library** from a **framework**, and name which of **jQuery**, **Lodash** and **Moment.js** you would reach for to (i) fade a panel into view, (ii) sort 20,000 records held in memory by age, (iii) print a date as "Monday, 26 October 2026".

```js
const box = document.getElementById("#box");
box.innerHTML = userComment;
document.querySelectorAll(".item").textContent = "Done";
```

**24.** The PHP below contains **three** faults. Name each one and rewrite the code correctly. Then state what `factorial(4)` outputs and name its **base case**, and give the difference between a **parameter** and an **argument**.

```php
<?php
function factorial($n) {
    if ($n <= 1) {
        return 1
    }
    return $n * factorial($n - 1);
}

function greet($Name = "Guest") {
    echo "Hello, " + $name . "!";
}

echo factorial(4);
greet("Robert");
?>
```

## Answers

**1. b** — *`while` vs `do...while`*: a `do...while` block runs **first** and tests afterwards, so it always executes **at least once**; `n` is printed as `5`, `n` becomes 6, `6 < 3` is false and the loop ends. (a) is what a plain `while` loop would do with the same condition — that is the whole distinction. (c) and (d) both misread which way the condition points: `n` is only ever increasing, so nothing repeats. **[Week 5]**

**2. b** — *`==` vs `===`, and `+` with a string*: `==` converts types before comparing, so `5 == "5"` is `true`; `===` compares **value and data type**, so Number vs String is `false`; and `+` with any string operand **concatenates** rather than adds, giving `"55"`. (a) and (d) get the last one wrong — `5 + "5"` is `10` only if you first write `Number(y)`. (c) forgets that `==` converts at all. **[Week 5]**

**3. b** — *array methods*: `push("yellow")` gives `["red","green","blue","yellow"]`; `pop()` removes it again, back to `["red","green","blue"]`; `splice(1, 1, "pink")` goes to index 1, removes 1 element and inserts `"pink"`, giving `["red","pink","blue"]`. So `colors[1]` is `"pink"` and `length` is `3`. (a) forgets that `splice` replaced `green`. (c) and (d) forget that `pop()` undid the `push()`. **[Week 5]**

**4. c** — *closure*: an inner function keeps access to the outer function's variables **even after the outer function has finished**. `outer()` returns `inner`, and the second pair of parentheses calls it. (a) and (b) describe what would happen without closures. (d) confuses **block scope** with global scope — `let` inside a function is local, and it is the closure, not globality, that keeps `outerVar` alive. **[Week 5]**

**5. b** — *the four components of an event*: the **event source** is the element that triggers it, the **event type** is the name of what happened (`click`, `submit`), the **event listener** is the function called in response, and the **event object** carries information about the event to that function. (a) and (c) shuffle the same four labels. (d) lists the four **form events** named in the lecture, which is a different list altogether. **[Week 6]**

**6. b** — *`preventDefault()` vs `stopPropagation()`*: `preventDefault()` cancels the **browser's default action** — here, submitting the form and reloading the page — so the message stays on screen. (a) `stopPropagation()` only stops the event travelling to ancestor elements; the default submit still happens. (c) clears the fields, (d) removes focus; neither stops submission. **[Week 6]**

**7. b** — *`const`: binding vs contents*: `const` prevents **reassignment of the variable**, not **mutation of the object** it points at. `user.name = "Bola"` changes a property and is legal; `user = { ... }` rebinds the name and is a TypeError. (a) understates it (redeclaration is blocked too, but so is reassignment). (c) inverts the rule. (d) is the common belief that `const` makes an object immutable — it does not; that would need `Object.freeze`. **[Week 6]**

**8. b** — *`response` vs `response.json()`*: the first `.then()` gives you the **Response object**, whose body has not been read yet; you must call `.json()`, which returns **another promise**, and read the data in the next `.then()`. (a) is wrong — `await` and `.then()` are the same mechanism in different syntax. (c) is the opposite of the truth: `fetch` does **not** reject on 404 or 500, which is why you check `response.ok`. (d) would produce a network error, not `undefined`. **[Week 6]**

**9. b** — *`getElementById` vs `querySelector`*: `getElementById` takes the **bare ID with no `#`**; `querySelector` takes a full **CSS selector** and therefore **needs** the `#`. Passing `"#box"` to `getElementById` searches for an element whose ID is literally `#box`, finds none, and returns `null`. (a) is the exact confusion being tested. (c) is what `getElementsByClassName` returns, and IDs are unique anyway. (d) is not a JavaScript error at all — the string is perfectly valid, it just matches nothing. **[Week 7]**

**10. b** — *`textContent` vs `innerHTML`*: `textContent` writes **plain text**, so markup assigned to it is displayed as literal characters. (a) is what `innerHTML` would give, because it writes **parsed HTML**. (d) is the tempting wrong answer: nothing is stripped — the angle brackets appear on screen. This is exactly why `textContent` is the safe choice for user-supplied data, and `innerHTML` is the **XSS** risk. **[Week 7]**

**11. c** — *`createElement` vs `appendChild`, and live collections*: `createElement` builds a **detached** node that is not in the tree, so the first log is `2`; `appendChild` attaches it, and because `getElementsByClassName` returns a **live HTMLCollection**, `items` updates by itself and the second log is `3`. (a) is what would happen with `querySelectorAll`, whose NodeList is a **static** snapshot. (b) and (d) both assume `createElement` puts the node on the page, which it does not. **[Week 7]**

**12. b** — *passing vs calling a handler*: `addEventListener` expects the function **itself**, not a call to it. Writing `showMsg()` executes the function at registration time and registers whatever it returned — `undefined` — so no handler is attached and clicking does nothing. The fix is `addEventListener("click", showMsg)`. (a) is the misconception. (c) invents a behaviour that does not exist. (d) is false — `addEventListener` works on any element. **[Week 7]**

**13. b** — *library vs framework: who calls whom*: a **library** is a collection of pre-written functions that **your** code calls, keeping the flow of control; a **framework** supplies the whole application architecture and calls **your** code at the points it defines. You call `$("#panel").fadeIn()`; Vue reads the `v-if` directive and decides when to render. (c) reverses the two — jQuery supplies no architecture. (a) and (d) miss that the distinction is control, not visible effect or file size. **[Week 8]**

**14. b** — *the virtual DOM and unidirectional data flow*: React keeps an in-memory copy of the DOM, **diffs** it against the actual DOM, and updates **only the parts that differ**; data flows from parent to child, which keeps state predictable and debugging simple. (a) misdescribes the virtual DOM as a faster browser DOM — it is a comparison layer, not a render target. (c) is **Angular's** two-way binding. (d) inverts the mechanism: the virtual DOM exists precisely so the whole page is *not* re-rendered. **[Week 8]**

**15. b** — *two-way data binding*: Angular's two-way binding keeps the UI and the data model synchronised automatically, so a change in either affects the other with no extra code. (a) and (c) name React features — React is deliberately **unidirectional**, so this behaviour would need a handler written by hand. (d) names a real Angular feature, but dependency injection manages the creation and sharing of **services**; it has nothing to do with binding an input to a model. **[Week 8]**

**16. b** — *Express middleware*: middleware functions have access to the **request and response objects** in the request–response cycle and execute **in the order they are defined**, forming a pipeline for authentication, logging and parsing. (a) swaps the frameworks — **Convention over Configuration** is Rails; Django is named for its generated **admin interface** and built-in authentication. (c) swaps the features — **Active Record** is Rails' **ORM**, mapping model classes to database tables; the generated admin panel is Django's. (d) is backwards: **ASP.NET Core** is precisely the **cross-platform** version. **[Week 8]**

**17. b** — *`.` vs `+`*: PHP's **concatenation operator is the dot**; `+` is arithmetic addition only. This is the single most common PHP-from-JavaScript error. (a) is that error stated as a belief. (c) borrows `&` from other languages. (d) is irrelevant — the operator is wrong regardless of quoting; note that double quotes would in fact let you write `"Hello, $name"` directly. **[Week 9]**

**18. a** — *local vs static scope*: `$hits` is **local**: it is created afresh at `0` on every call, so it is always `1` when echoed. `static $visits` **retains its value across calls**, so it climbs 1, 2, 3. (b) treats the static variable as local. (c) treats the local variable as static. (d) assumes the function prints once; it is called three times. "A counter that keeps counting across calls" is **static**, not global. **[Week 9]**

**19. b** — *`%` (modulus) vs `/` (division)*: `%` returns the **remainder**, so `17 % 5` is `2`; `/` returns the quotient, so `17 / 5` is `3.4`. (a) has them the right way round but assigned to the wrong operators. (c) truncates the division to an integer, which PHP does not do here. (d) confuses the remainder with the whole-number part of the quotient. **[Week 9]**

**20. b** — *server-side vs client-side*: PHP is a **server-side** scripting language; the web server executes the code and sends the browser only the **output**, so View Source never shows PHP. (a) is the client-side misconception — browsers cannot run PHP at all. (c) is false: embedding PHP in HTML with PHP tags is exactly this week's technique. (d) confuses PHP tags with unknown HTML elements. Contrast JavaScript, which does run in the browser. **[Week 9]**

**21.** *Trace, scope, `return`, and `let` vs `const`* — **[Week 5]**
The loop runs with `i` = 1, 2, 3, so `sum` becomes 1, then 3, then 6. `console.log(sum)` inside the function prints **6** first. The function then returns `6 * 2 = 12`, and the outer `console.log` prints **12**. Output, in order: **6** then **12**.
The three scopes are **global** (declared outside any function — visible everywhere in the script), **local/function** (declared inside a function — visible only inside it), and **block** (declared with `let` or `const` inside `{ }` — visible only in that block).
A function with no `return` statement evaluates to **`undefined`**.
`let` declares a variable that **can be reassigned**; `const` is **read-only** — the binding cannot be reassigned (though an object's contents may still be changed).

**22.** *Asynchronous JavaScript, the event loop, and validation* — **[Week 6]**
(a) **Callbacks** — a function passed as an argument to another function and run once that task finishes; nesting them deeply gives "callback hell". **Promises** — an object representing a value that will exist later, either **fulfilled** or **rejected**, chained with `.then()` and `.catch()`. **async/await** — syntactic sugar that lets promise-based code be written as though it were synchronous, with errors caught by `try...catch`; an `async` function always returns a promise.
(b) The output is **A, D, C, B**. JavaScript is **single-threaded**: all **synchronous** code runs first, printing A and D. The event loop then drains the **microtask queue**, where promise callbacks sit, printing C. Only then does it take one **macrotask** from the timer/I/O queue, printing B. This is why `setTimeout(fn, 0)` runs *after* a `.then()` registered later in the file.
(c) Client-side validation is for **user experience** — instant feedback and fewer unnecessary server requests — but it runs in the user's own browser and can be **disabled or bypassed** entirely. **Server-side validation is for security and is never optional**; the two are done together, not instead of one another.

**23.** *DOM faults, and libraries vs frameworks* — **[Weeks 7 and 8]**
- Line 1: `getElementById` takes the **bare ID with no `#`**. As written it matches nothing and `box` is `null`, so the next line throws.
- Line 2: writing **untrusted user input** with `innerHTML` parses it as markup and is the **XSS (cross-site scripting)** risk; use `textContent`, which writes the input as literal characters.
- Line 3: `querySelectorAll` returns a **NodeList**, not an element. A collection has no `textContent`, so the assignment silently does nothing; you must index into it or loop over it.

```js
const box = document.getElementById("box");
box.textContent = userComment;
document.querySelectorAll(".item").forEach(function (el) {
  el.textContent = "Done";
});
```

A **library** is a collection of pre-written functions that **your** code calls, so you keep the flow of control; a **framework** supplies the application's overall architecture and **calls your code** at the points it defines. The three libraries: (i) fading a panel in is **jQuery** (DOM, events, animation); (ii) sorting 20,000 in-memory records is **Lodash** (utility functions over arrays and objects, chaining, performance on large datasets); (iii) formatting a date as "Monday, 26 October 2026" is **Moment.js** (parsing, formatting and arithmetic on dates and times).

**24.** *PHP syntax, recursion and parameters* — **[Week 9]**
- **Missing semicolon** after `return 1` — every PHP statement must be terminated.
- **Case-sensitive variable names**: the parameter is declared `$Name` but used as `$name`. PHP treats those as **two different variables**, so the greeting would print nothing for the name.
- **Wrong concatenation operator**: `+` is arithmetic addition; PHP joins strings with the **dot** `.`.

```php
<?php
function factorial($n) {
    if ($n <= 1) {
        return 1;
    }
    return $n * factorial($n - 1);
}

function greet($name = "Guest") {
    echo "Hello, " . $name . "!";
}

echo factorial(4);
greet("Robert");
?>
```

`factorial(4)` outputs **24** (4 × 3 × 2 × 1). Its **base case** is `$n <= 1`, which returns `1` and stops the function calling itself; without a base case the recursion would never end.
A **parameter** is the placeholder named when the function is **defined** (`$name` in `function greet($name)`); an **argument** is the actual value supplied when it is **called** (`"Robert"` in `greet("Robert")`). Giving a parameter a **default value** makes it optional, which is why `greet()` on its own would print "Hello, Guest!".

## What to revise

| Week | Topic | Questions | What to re-read |
|---|---|---|---|
| **Week 5** | JavaScript fundamentals — variables, types, operators, control flow, functions, scope, arrays and objects | 1, 2, 3, 4, 21 | `==` vs `===` (value only vs value **and** type); `var` / `let` / `const`; the three scopes plus closure; `for` vs `while` vs `do...while` (which one always runs once); zero-indexing and `push` / `pop` / `splice` / `forEach` / `filter`; `+` concatenating when either operand is a string; a function with no `return` giving `undefined`. |
| **Week 6** | Advanced JavaScript — forms and validation, events, asynchronous code, ES6, AJAX | 5, 6, 7, 8, 22 | The three `<form>` attributes (`action`, `method`, `enctype`); the four components of an event and event propagation; `preventDefault` vs `stopPropagation`; client-side vs server-side validation; callbacks, promises and async/await; the event loop with microtasks before macrotasks; `const` binding vs mutation; `fetch` returning a promise and `response.json()` returning another; XSS vs CSRF. |
| **Week 7** | The Document Object Model — selecting, modifying and reacting to the page | 9, 10, 11, 12, 23 | The five selection methods and **what each returns**; `getElementById` taking a bare ID while `querySelector` needs the `#`; `textContent` vs `innerHTML` and the XSS risk; element, attribute and text nodes; `getAttribute` / `setAttribute` / `removeAttribute` / `hasAttribute` and `dataset`; `createElement` then `appendChild`, and `removeChild` called **on the parent**; live HTMLCollection vs static NodeList; passing a handler rather than calling it. |
| **Week 8** | JavaScript libraries and frameworks | 13, 14, 15, 16, 23 | Library vs framework — **who calls whom**; jQuery, Lodash and Moment.js and the one job each does; React's virtual DOM diffing and unidirectional data flow; Angular's modules, dependency injection and two-way binding; Vue as **progressive** and incrementally adoptable, with directives; the four backend frameworks — Django's admin interface and built-in auth, Express's middleware pipeline, Rails' Convention over Configuration and Active Record, ASP.NET Core's cross-platform reach. |
| **Week 9** | PHP — variables, operators, control structures, functions and embedding in HTML | 17, 18, 19, 20, 24 | PHP as a **server-side** language and what View Source therefore shows; `$` variable rules and **case sensitivity**; the seven data types including NULL; the six operator families, especially `%` as modulus and `.` as concatenation; `if` / `if-else` / `elseif`, the ternary and `switch` with `break`; defining a function, parameters vs arguments, default values and `return`; local vs global vs **static** scope; recursion and its base case; embedding PHP in HTML with PHP tags. |
