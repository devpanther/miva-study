# CSC_106 — Week 7 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 8, not this week. Notes closed.*

## Section A - Multiple choice (12)

**1.** The page contains `<div id="box">Hello</div>`. What happens when this runs?

```js
document.getElementById("#box").textContent = "Bye";
```

a) The div now reads "Bye"
b) Nothing changes, and no error is raised
c) A TypeError is thrown, because `getElementById` returned `null` — the argument must be `box`, with no `#`
d) A TypeError is thrown, because `getElementById` can only read an element, not change it

**2.** The page contains three paragraphs, in this order:

```html
<p class="note">A</p>
<p class="note">B</p>
<p class="note">C</p>
```

```js
document.querySelector(".note").textContent = "X";
```

What does the page read afterwards?

a) X, X, X
b) A, B, C — nothing changes
c) X only; the other two paragraphs are removed
d) X, B, C

**3.** What does the page display?

```js
document.getElementById("out").textContent = "<em>Sale</em>";
```

a) The word *Sale* in italics
b) The characters `<em>Sale</em>`, shown literally
c) An empty element — text nodes cannot contain angle brackets
d) A syntax error in the console

**4.** Given `<div id="row">Price: <b>20</b> USD</div>`, what is printed?

```js
console.log(document.getElementById("row").textContent);
```

a) "Price:  USD"
b) "Price: <b>20</b> USD"
c) "Price: 20 USD"
d) "20"

**5.** The page's `<ul>` already contains exactly two `<li>` elements. What is printed?

```js
const li = document.createElement("li");
li.textContent = "Milk";
console.log(document.getElementsByTagName("li").length);
```

a) 0
b) 2
c) 3
d) An error, because the new `<li>` has no parent

**6.** The page body contains exactly two `<div class="row">` elements. What is printed?

```js
const live = document.getElementsByClassName("row");
const snap = document.querySelectorAll(".row");

const extra = document.createElement("div");
extra.className = "row";
document.body.appendChild(extra);

console.log(live.length, snap.length);
```

a) 3 3
b) 2 2
c) 3 2
d) 2 3

**7.** How is `<p class="lead">Welcome</p>` represented in the DOM tree?

a) One element node, one attribute node and one text node
b) Three element nodes, one per part of the tag
c) One element node and one text node — `class` is a property, not a node
d) Two element nodes and one attribute node

**8.** The page contains `<img id="pic" src="cat.jpg" alt="A cat">`. What is the visible effect?

```js
document.getElementById("pic").setAttribute("src", "dog.jpg");
```

a) A second image appears below the first
b) Nothing changes until the page is reloaded
c) A TypeError — `src` is read-only once set in the HTML
d) The same `<img>` element now displays dog.jpg

**9.** The page contains three elements with `class="item"`. What happens?

```js
document.getElementsByClassName("item").textContent = "Done";
```

a) Nothing changes on the page — the call returns a collection, which has no `textContent`
b) All three elements read "Done"
c) Only the first element reads "Done"
d) A TypeError is thrown

**10.** What is the behaviour of this code?

```js
function showAlert() { alert("Hi"); }
document.getElementById("btn").addEventListener("click", showAlert());
```

a) The alert appears each time the button is clicked
b) The alert appears once, as soon as the script runs, and clicking the button does nothing
c) A syntax error — a function name cannot be used as an argument
d) The alert appears immediately *and* on every subsequent click

**11.** The page contains `<ul id="list"><li>A</li><li>B</li></ul>`. What does the list show afterwards?

```js
const list = document.getElementById("list");
list.removeChild(list.firstElementChild);
```

a) A only
b) B only
c) An empty list
d) Nothing changes — `removeChild` must be called on the node being removed

**12.** Given `<button id="b" data-user-id="42">Save</button>`, what is logged, and of what type?

```js
console.log(document.getElementById("b").dataset.userId);
```

a) `42`, as a string
b) `42`, as a number
c) `undefined` — the property would have to be written `dataset["data-user-id"]`
d) `null` — `dataset` works only on form elements

## Section B - Short answer (3)

**13.** The page contains:

```html
<div id="parentDiv">
  <p>Child Paragraph 1</p>
  <p>Child Paragraph 2</p>
</div>
```

Write the JavaScript that adds a third paragraph reading "Child Paragraph 3" inside `#parentDiv`, after the existing two. Then explain precisely why `document.createElement("p")` on its own leaves the page unchanged, and name the relationship the new `<p>` has to the two existing ones once it is in place.

**14.** Explain the difference between `textContent` and `innerHTML`, both when **reading** from an element and when **writing** to it, using `<div id="d">Total: <b>5</b></div>` as your example. State the security risk the lecture attaches to `innerHTML`, and say which of the two you would use to display a name typed by a user, and why.

**15.** A gallery has several `<img>` elements, each with a descriptive `alt` attribute, and an empty `<div id="caption">` beneath them. Outline the DOM manipulation and event handling needed so that clicking any image shows that image's description in the caption div, and updates it when a different image is clicked. Say why `querySelectorAll` is the right selection method here rather than `querySelector` or `getElementById`.

## Answers

**1. c** — *getElementById takes a bare ID, not a CSS selector*: only `querySelector` accepts `#`. With `"#box"` no element matches, `getElementById` returns `null`, and setting `.textContent` on `null` throws a TypeError. Option (a) assumes the two selection APIs share a syntax; (b) assumes a failed selection fails silently — it does not, the error comes when you use the result; (d) invents a read-only restriction that does not exist.

**2. d** — *querySelector returns only the first match*: it stops at the first element matching `.note`, so only paragraph A is rewritten and the page reads X, B, C. Option (a) is what `querySelectorAll` plus a loop would give; (b) assumes a class selector needs `querySelectorAll` to match at all; (c) confuses changing an element's text with removing elements.

**3. b** — *textContent writes plain text*: assigning to `textContent` creates a **text node**, so the angle brackets are shown as characters rather than parsed as a tag. Option (a) is what `innerHTML` would produce — this is the exact pair the exam tests; (c) and (d) invent restrictions on text nodes that do not exist.

**4. c** — *textContent reads the text of all descendants, tags stripped*: it walks the element's subtree and concatenates every text node, giving "Price: 20 USD". Option (a) wrongly assumes text inside a nested element is skipped; (b) is what `innerHTML` returns; (d) is what `document.querySelector("#row b").textContent` would give.

**5. b** — *createElement produces a detached node*: the new `<li>` exists only in memory until it is attached with `appendChild`, so the document still contains the original two. Option (c) is the standard error — assuming creation implies insertion; (a) forgets the two that were already there; (d) invents an error, a detached node is perfectly legal.

**6. c** — *live HTMLCollection vs static NodeList*: `getElementsByClassName` returns a **live** collection that re-reflects the document, so it becomes 3 once `extra` is appended; `querySelectorAll` returns a **static** snapshot taken at the moment of the call, so it stays 2. Option (a) treats both as live, (b) treats both as static, (d) reverses which is which.

**7. a** — *element, attribute and text nodes*: the `<p>` tag is an element node, `class="lead"` is an attribute node, and `"Welcome"` is a text node — three nodes, one of each kind. Option (c) is the common error of thinking only tags are nodes; (b) and (d) miscount elements, of which there is exactly one.

**8. d** — *modifying an attribute changes behaviour immediately*: `setAttribute` overwrites the existing `src` on the element already in the tree, so the browser re-renders that same `<img>` with the new file. Option (a) confuses setting an attribute with creating an element; (b) misses that DOM changes take effect live, with no reload; (c) invents a read-only rule.

**9. a** — *a collection is not an element*: `getElementsByClassName` returns an HTMLCollection, which has `length` and numeric indices but no `textContent`. The assignment just adds a stray property to the collection object, so the page is untouched and no error appears — which is why this bug is hard to spot. To fix it, index (`[0]`) or loop. Options (b) and (c) assume the property is forwarded to the elements; (d) assumes an invalid assignment must throw.

**10. b** — *pass the handler, do not call it*: the parentheses invoke `showAlert` at once and register its return value, `undefined`, as the listener, so the click has no handler. Correct is `addEventListener("click", showAlert)`. Option (a) is what the corrected line does; (c) is wrong — passing a function by name is exactly right; (d) assumes it does both, but the invoked function is not also registered.

**11. b** — *removeChild is called on the parent*: `list.firstElementChild` is the `<li>A</li>`, and removing it from `list` leaves only B. Option (a) removes the wrong one — that would need `lastElementChild`; (c) assumes it clears the whole list; (d) has the call the wrong way round, which is the very error the question tests.

**12. a** — *dataset values are strings, and hyphens become camelCase*: `data-user-id` is read as `dataset.userId`, and every attribute value in HTML is text, so `"42"` is a string — use `Number(...)` before doing arithmetic with it. Option (b) is the common error of assuming numeric-looking data is a number; (c) uses the raw attribute name, which `dataset` does not accept; (d) invents a restriction to form elements.

**13.** *Creating and appending nodes; parent, child and sibling relationships*:

```js
const parent = document.getElementById("parentDiv");
const p = document.createElement("p");
p.textContent = "Child Paragraph 3";
parent.appendChild(p);
```

`document.createElement("p")` builds a **detached** element node — it exists as a JavaScript object in memory but has no parent, so it is not part of the DOM tree and the browser has nothing new to render. Only `appendChild` links it into the tree, as the last child of `#parentDiv`, at which point it appears on the page. Once attached, the new `<p>` is a **child** element node of `#parentDiv` and a **sibling** of the two existing paragraphs; its text "Child Paragraph 3" is a **text node** child of the new `<p>`, not of the div.

**14.** *textContent vs innerHTML, and the XSS risk*: **Reading** — `d.textContent` returns `"Total: 5"`: it collects every text node in the element's subtree and strips the tags. `d.innerHTML` returns `"Total: <b>5</b>"`: the markup is included as a string. **Writing** — `d.textContent = "<b>Hi</b>"` puts those characters on the page literally, because the value becomes a single text node; `d.innerHTML = "<b>Hi</b>"` is **parsed as HTML**, so a real `<b>` element is created and the page shows a bold **Hi**. The risk: because `innerHTML` parses whatever it is given, assigning a string that came from a user (a form field, a URL parameter, a comment) can inject `<script>` or event-handler attributes into the page — a **cross-site scripting (XSS)** attack. So to display a name typed by a user, use `textContent`: it renders any markup harmlessly as visible characters. Reserve `innerHTML` for markup your own code controls.

**15.** *Combining selection, attribute reading and event handling*:

```js
const caption = document.getElementById("caption");
document.querySelectorAll(".gallery img").forEach(function (img) {
  img.addEventListener("click", function () {
    caption.textContent = img.getAttribute("alt");   // or img.alt
  });
});
```

The steps: (1) select **all** the gallery images and the caption div; (2) attach a `click` event listener to **each** image; (3) inside the handler, read the clicked image's `alt` attribute, which holds its description; (4) write that string into the caption div with `textContent`. Clicking a different image runs its own handler and **overwrites** the caption's text, so no clearing step is needed — assignment to `textContent` replaces whatever was there. `querySelectorAll` is right because the images are a **set**: `querySelector` would return only the first image, so only that one would respond to clicks, and `getElementById` selects a single element by unique ID, which cannot address several images at once (and would require a separate ID and a separate listener for every image).
