# Tuesday — CSC_106 fast-hour check

*The DOM in practice: selecting nodes, changing content, creating elements, click handlers.*
*12 questions, straight after the hour. Score out of 12.*

**1.** ```html
<ul>
  <li class="done">A</li>
  <li>B</li>
  <li class="done">C</li>
</ul>
```
What does `document.querySelectorAll("li.done").length` return?
A. 3
B. 2
C. 1
D. 0

**2.** ```html
<p id="msg">Hi <i>there</i>!</p>
```
What does `document.getElementById("msg").innerHTML` return?
A. "Hi there!"
B. "there"
C. "Hi <i>there</i>!"
D. "Hi !"

**3.** ```js
const b = document.getElementById("box");
b.innerHTML = "<b>One</b>";
b.textContent = "Two";
console.log(b.innerHTML);
```
What is logged?
A. <b>One</b>Two
B. Two
C. <b>Two</b>
D. OneTwo

**4.** ```html
<ul id="list"><li>A</li><li>B</li></ul>
```
```js
const ul = document.getElementById("list");
const li = document.createElement("li");
li.textContent = "C";
ul.appendChild(li);
ul.removeChild(ul.firstElementChild);
console.log(ul.textContent);
```
What is logged?
A. BC
B. ABC
C. AB
D. AC

**5.** ```html
<a id="lnk" href="/home" target="_blank">Go</a>
```
```js
const a = document.getElementById("lnk");
a.setAttribute("href", "/about");
a.removeAttribute("target");
console.log(a.getAttribute("href"), a.hasAttribute("target"));
```
What is logged?
A. /home true
B. /about true
C. /home false
D. /about false

**6.** A script reads `row.dataset.rowId`. Which HTML attribute on the element is it reading?
A. data-row-id
B. data-rowId
C. rowId
D. data-row_id

**7.** ```html
<div id="d"><p id="a">A</p><p id="b">B</p><p id="c">C</p></div>
```
What is `document.getElementById("b").parentNode.lastElementChild.id`?
A. "b"
B. "d"
C. "a"
D. "c"

**8.** ```js
let n = 0;
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  n++;
  btn.textContent = "Clicked " + n;
});
```
The user clicks the button three times. What does the button read?
A. Clicked 3
B. Clicked 1
C. Clicked 0
D. Clicked 2

**9.** A function `greet` is defined. Which line makes `greet` run each time the element `btn` is clicked?
A. `btn.addEventListener("click", greet());`
B. `btn.addEventListener("onclick", greet);`
C. `btn.addEventListener("click", greet);`
D. `btn.addEventListener(greet, "click");`

**10.** ```html
<p class="x">Outside</p>
<div id="box"><p class="x">Inside</p></div>
```
What does `document.getElementById("box").querySelector(".x").textContent` return?
A. "Outside"
B. "Inside"
C. "OutsideInside"
D. null

**11.** What is the Document Object Model (DOM)?
A. The HTML source text that the server sends to the browser
B. A programming interface that represents a document as a tree of node objects
C. The part of the JavaScript language that defines variables and functions
D. A set of CSS rules that decides how each element is laid out

**12.** ```html
<a href="more.html">Read more</a>
```
Which part of this markup is represented by a text node in the DOM tree?
A. href
B. <a>
C. Read more
D. more.html

---

## Answers

**1. B** — *Counting matches of a CSS selector with querySelectorAll.* `li.done` matches an `<li>` that also carries the class `done`. Items A and C qualify, B does not, so the NodeList holds 2 elements and `.length` is 2.

3 ignores the class part and counts every `<li>`; 1 treats querySelectorAll as if it stopped at the first match like querySelector; 0 assumes `li.done` needs a space to match, but a space would mean 'a .done inside an li', which matches nothing here.

**2. C** — *Reading innerHTML versus textContent.* innerHTML returns the markup inside the element as a string, tags included: "Hi <i>there</i>!".

"Hi there!" is what textContent returns, the text of every descendant with the tags stripped; "there" is the textContent of the inner `<i>` only; "Hi !" wrongly skips the text that sits inside a nested element.

**3. B** — *Writing textContent replaces every child node.* Line 2 gives the box one child, a `<b>` element. Line 3 assigns textContent, which throws away all existing children and replaces them with a single text node "Two". So the box now contains only text and innerHTML reads "Two".

<b>One</b>Two assumes textContent appends after the existing content; <b>Two</b> assumes it only edits the text inside the existing tag; OneTwo drops the tag but still assumes the old text survives.

**4. A** — *Tracing appendChild and removeChild.* appendChild puts the new `<li>C</li>` at the end, so the list is A, B, C. firstElementChild is `<li>A</li>`, and removeChild on the parent takes it out, leaving B, C. textContent joins the remaining text nodes: "BC".

ABC forgets the removal; AB assumes removeChild took out the item that was just added; AC removes the second item instead of the first.

**5. D** — *Modifying attributes with setAttribute and removeAttribute.* setAttribute overwrites an attribute that already exists, so href is now "/about". removeAttribute deletes target entirely, so hasAttribute("target") is false. Logged: /about false.

/home false assumes setAttribute cannot overwrite an attribute set in the HTML; /about true assumes removeAttribute only blanks the value while the attribute stays; /home true makes both mistakes.

**6. A** — *Mapping dataset property names to data- attributes.* dataset exposes custom `data-` attributes with the `data-` prefix removed and hyphens converted to camelCase, so `rowId` corresponds to `data-row-id`.

data-rowId keeps the camelCase in the HTML, but HTML attribute names are lower-case and hyphenated; rowId has no `data-` prefix, so dataset never sees it; data-row_id uses an underscore, which is not converted, so it would appear as dataset.row_id.

**7. D** — *Navigating parent, child and sibling nodes.* parentNode of #b is the `<div id="d">`. lastElementChild of that div is its final element child, `<p id="c">`. Its id is "c".

"b" assumes the chain returns to the starting element; "d" stops at the parent and forgets the second step; "a" reads firstElementChild instead of lastElementChild.

**8. A** — *Tracing a click handler across repeated events.* addEventListener registers the function once, and it runs every time the click event fires. n goes 1, 2, 3 and after the third click the text is "Clicked 3".

Clicked 1 assumes a listener fires only once; Clicked 0 assumes the text is set before n is incremented; Clicked 2 treats n++ as if it left n one behind, but n++ has already updated n by the time the next line runs.

**9. C** — *Registering a click handler with addEventListener.* addEventListener takes the event name first and the handler function second, passed by name so the browser can call it later: `btn.addEventListener("click", greet);`.

`greet()` calls the function immediately and registers its return value, usually undefined, so clicks do nothing; "onclick" is the attribute name, not the event name, so no event ever matches; putting greet first swaps the argument order, which throws a TypeError because the second argument must be a function or object, so nothing is registered.

**10. B** — *Selecting within an element instead of the whole document.* querySelector called on an element searches only that element's descendants. Inside #box the only `.x` is the paragraph reading "Inside", so that is returned and its textContent is "Inside".

"Outside" is the first `.x` in the whole document, which is what document.querySelector(".x") would give; "OutsideInside" treats the call as a collection of both; null assumes a class selector cannot be used from an element.

**11. B** — *Definition of the DOM.* The DOM is a programming interface: the browser parses the HTML (or XML) and builds a tree of objects, one node per element, attribute and piece of text, that scripts can read and change. It is neither the HTML text nor JavaScript itself; it is what lets JavaScript reach the page.

The HTML source is the input the tree is built from, not the model; JavaScript is the language used to manipulate the DOM, not the DOM; CSS describes presentation and is a separate model.

**12. C** — *Element, attribute and text nodes.* Text written between an element's opening and closing tags becomes a text node, so "Read more" is the text node, a child of the `<a>` element node.

`<a>` is the element node; href is an attribute node attached to it; more.html is the value of that attribute and is part of the attribute node, not a node of its own.
