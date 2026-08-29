# Tuesday — CSC_106 fast-hour check

*The DOM tree: node kinds, what each selection method returns, content and node changes, and click handlers.*
*Five questions, straight after the fast hour. Recall only. Score out of 5.*

**1.** Which selection method returns a static NodeList of every match?
A. getElementById
B. getElementsByClassName
C. querySelector
D. querySelectorAll

**2.** Assigning "<b>Hi</b>" to which property makes the page show bold text?
A. textContent
B. innerHTML
C. className
D. dataset

**3.** In <p>Hello</p>, what is "Hello" in the DOM tree?
A. An element node
B. An attribute node
C. A text node, child of the p
D. A sibling of the p

**4.** What does document.createElement("p") do on its own?
A. Creates a detached node, not yet on the page
B. Adds a new paragraph as the last child of body
C. Replaces the first paragraph on the page
D. Returns a live collection of paragraphs

**5.** Which line correctly registers the function greet as a click handler?
A. btn.addEventListener("click", greet())
B. btn.addEventListener(greet, "click")
C. btn.addEventListener("click", greet)
D. btn.addEventListener("click", "greet")

## Answers

**1. D** — querySelectorAll takes a CSS selector and returns a snapshot NodeList of every match. getElementById gives one element or null, getElementsByClassName gives a live HTMLCollection, and querySelector gives only the first match or null.

**2. B** — innerHTML parses what you assign, so the tags become real elements and Hi appears bold. textContent would print the characters <b>Hi</b> on the page, className writes the class attribute, and dataset reads custom data- attributes.

**3. C** — Text is a text node and it is a child of the element that contains it. Element nodes are the tags themselves, attribute nodes are things like id and src, and the text is never a sibling of its own parent element.

**4. A** — createElement builds the node in memory only, so nothing appears until parent.appendChild attaches it to the tree. Option two describes appendChild, option three describes an innerHTML or textContent overwrite, and option four describes getElementsByTagName.

**5. C** — The function is passed by name so the browser can call it later. Adding brackets runs greet immediately and registers its return value, swapping the two arguments puts them in the wrong order, and a string is not a function.
