# CSC_106 — Week 7 Summary

*Introduction to Web Technologies · Week 7 (19–25 Oct 2026) · Topic: The Document Object Model — representing HTML/XML document structure as a tree, and selecting, modifying and reacting to it with JavaScript*

## The 8 most examinable things this week

1. **What the DOM is.** A **programming interface** that represents an HTML, XHTML or XML document as a **tree-like structure** (the *DOM tree*) of objects, so that a script can read and change the page **after** it has loaded. The DOM is *not* HTML and *not* JavaScript — it is the object model that lets the second manipulate the first.
2. **The three node types.** **Element nodes** are the tags (`<div>`, `<button>`, `<a>`); **attribute nodes** are the attributes on those tags (`src`, `alt`, `id`); **text nodes** are the text inside an element (`"Hello, World!"`). Everything in the tree is a node; only some nodes are elements.
3. **The five selection methods and what each returns** — the single most examinable table of the week (below). `getElementById` → one element or `null`; `querySelector` → the **first** match or `null`; `getElementsByClassName` / `getElementsByTagName` / `querySelectorAll` → a **collection**, even if it contains one element or none.
4. **Selector syntax differs.** `getElementById("box")` takes the bare ID, **no `#`**. `querySelector("#box")` takes a **CSS selector**, so it **needs** the `#` for an ID and `.` for a class. Swapping these is the classic error.
5. **`textContent` vs `innerHTML`.** `textContent` reads/writes **plain text** — markup you assign is shown literally as characters. `innerHTML` reads/writes **parsed HTML** — tags you assign become real elements. Use `textContent` for user-supplied data: `innerHTML` with untrusted input is the **XSS (cross-site scripting)** risk the lecture warns about.
6. **Attribute methods.** `getAttribute(name)`, `setAttribute(name, value)`, `removeAttribute(name)`, `hasAttribute(name)`. Custom **`data-`** attributes store extra information on an element and are read through `element.dataset` — `data-user-id` becomes `element.dataset.userId` (hyphens → camelCase).
7. **Building and removing nodes.** `document.createElement(tag)` makes a **detached** element — it is invisible until `parent.appendChild(node)` puts it in the tree. Removal is `parent.removeChild(node)`, called **on the parent**, not on the node itself.
8. **Events.** `element.addEventListener("click", handlerFunction)` registers a function to run when the event fires. Pass the function, **do not call it**: `addEventListener("click", doIt)` is right, `addEventListener("click", doIt())` runs `doIt` immediately and registers its return value.

## The document object and the tree

`document` is the entry point — it represents the whole page. `document.title` reads or sets the title; every selection starts from `document` (or from another element, to search only inside it).

```html
<div id="parentDiv">
  <p>Child Paragraph 1</p>
  <p>Child Paragraph 2</p>
</div>
```

`#parentDiv` is the **parent** element node; the two `<p>` elements are its **children** and are **siblings** of each other; `"Child Paragraph 1"` and `"Child Paragraph 2"` are **text nodes** — children of the `<p>` elements, not of the `<div>`. Useful properties: `parentNode`, `childNodes` (all nodes, including whitespace text nodes), `children` (element nodes only), `firstElementChild`, `nextElementSibling`.

## Selecting elements

| Method | Argument | Returns |
|---|---|---|
| `getElementById("id")` | bare ID, no `#` | one **element**, or `null` |
| `getElementsByClassName("cls")` | bare class, no `.` | **HTMLCollection** (live) |
| `getElementsByTagName("p")` | tag name | **HTMLCollection** (live) |
| `querySelector("#id .cls")` | any **CSS selector** | **first** matching element, or `null` |
| `querySelectorAll("p.note")` | any **CSS selector** | **NodeList** of *all* matches (static) |

```js
const heading = document.getElementById("main-title");   // element
const notes   = document.getElementsByClassName("note");  // collection
const first   = document.querySelector(".note");          // FIRST .note only
const all     = document.querySelectorAll(".note");       // every .note

console.log(all.length);        // how many matched
all[0].textContent = "Edited";  // collections are indexed, like arrays
```

A collection is **not an element**: `document.getElementsByClassName("note").textContent = "x"` silently does nothing, because a collection has no `textContent`. You must index into it (`[0]`) or loop.

## Changing content

```js
const box = document.getElementById("box");

box.textContent = "<b>Hi</b>";   // page shows the characters: <b>Hi</b>
box.innerHTML   = "<b>Hi</b>";   // page shows a BOLD Hi

// reading, given <div id="box">Total: <b>5</b></div>
box.textContent;   // "Total: 5"      -- tags stripped, text of all descendants
box.innerHTML;     // "Total: <b>5</b>" -- markup included
```

## Attributes

```js
const img = document.querySelector("#photo");
img.getAttribute("src");                 // "cat.jpg"
img.setAttribute("src", "dog.jpg");      // swaps the picture on screen
img.setAttribute("alt", "A dog");
img.removeAttribute("alt");
img.hasAttribute("alt");                 // false

// custom data- attributes:  <li data-task-id="42">Buy milk</li>
li.dataset.taskId;                       // "42"  (a string, always)
```

## Creating, appending and removing

```js
const parent = document.getElementById("parentDiv");

const p = document.createElement("p");   // exists in memory, NOT on the page
p.textContent = "Child Paragraph 3";
parent.appendChild(p);                   // now it is on the page, last child

parent.removeChild(parent.lastElementChild);   // remove it again
```

## Events

```js
document.getElementById("myButton").addEventListener("click", function () {
  alert("Button clicked!");
});

// one handler for many elements
document.querySelectorAll(".gallery img").forEach(function (img) {
  img.addEventListener("click", function () {
    document.getElementById("caption").textContent = img.alt;
  });
});
```

The second pattern is the lecture's image-gallery example: select all images with `querySelectorAll`, attach a click listener to each, read the clicked image's `alt` attribute, and write it into a caption `<div>` with `textContent`.

## Worked trace

```html
<div id="list">
  <p class="item">One</p>
  <p class="item">Two</p>
</div>
```

```js
const items = document.getElementsByClassName("item");
console.log(items.length);                 // 1
items[1].textContent = "Three";            // 2
const extra = document.createElement("p");
extra.className = "item";
extra.textContent = "Four";
console.log(items.length);                 // 3
document.getElementById("list").appendChild(extra);
console.log(items.length);                 // 4
```

1. **2** — two elements carry class `item`.
2. Rewrites the second paragraph, so the page now reads **One / Three**.
3. **2** — `createElement` alone does not put the node in the document, so nothing was added to the tree.
4. **3** — `appendChild` inserts it, and because `getElementsByClassName` returns a **live** collection, `items` updates by itself. Final page: **One / Three / Four**. (Had `querySelectorAll` been used, `items.length` would still print `2` at step 4, because a NodeList is a static snapshot.)

## Commonly confused

- **Node vs element** — every element is a node, but attributes and text are nodes too and are **not** elements. `childNodes` includes text nodes (and whitespace); `children` includes only element nodes.
- **`getElementById` vs `querySelector`** — the first takes the ID **without** `#` and only ever matches an ID; the second takes a full **CSS selector** and therefore **needs** `#`. `getElementById("#box")` finds nothing.
- **`querySelector` vs `querySelectorAll`** — singular returns **one element** (the first match) so you can set `.textContent` on it directly; plural returns a **NodeList** you must index or loop, and setting `.textContent` on the list itself does nothing.
- **`textContent` vs `innerHTML`** — text vs parsed markup. If a question says "the tags should show up as text on the page", the answer is `textContent`; if it says "the text should appear in bold", the answer is `innerHTML`. Only `innerHTML` carries the injection (XSS) risk.
- **Live HTMLCollection vs static NodeList** — `getElementsBy…` collections update automatically as the document changes; `querySelectorAll` gives a snapshot taken at the moment of the call.
- **`createElement` vs `appendChild`** — `createElement` builds the node; nothing appears on the page until `appendChild` (or equivalent) attaches it to a node already in the tree.
- **`removeChild` is called on the parent** — `parent.removeChild(child)`, not `child.removeChild()`.
- **Attribute vs property** — `setAttribute("class", "x")` writes the HTML attribute; `element.className = "x"` writes the DOM property. Both work here, but `setAttribute` takes the **attribute's** name (`class`, `for`), the property does not.
- **Passing vs calling a handler** — `addEventListener("click", greet)` registers `greet`; `addEventListener("click", greet())` calls it now and registers `undefined`, so the click does nothing.

*Note on the source: this week's deck names each technique in prose but shows every code example inside a slide image, so the extracted text carries only the surrounding sentences (e.g. "Consider the following `<img>` element;" with no element following). Every snippet, the selection-method return table, and the `data-`/dataset, `removeAttribute` and live-vs-static details above are the standard treatment of exactly the objectives the slides name: selecting and manipulating elements and attributes, distinguishing element/attribute/text nodes, combining DOM manipulation with event handling, and the security considerations of content modification.*
