# Tuesday — CSC_106 fast-hour check

*Advanced JavaScript: form attributes, intercepting submission, the Fetch API, the event loop and ES6 rest.*
*Five questions, straight after the fast hour. Recall only. Score out of 5.*

**1.** Which form attribute names the URL the data is sent to?
A. action
B. method
C. enctype
D. name

**2.** Which call stops a form's default page reload on submit?
A. event.stopPropagation()
B. form.reset()
C. event.preventDefault()
D. return false in the listener

**3.** What does a call to the Fetch API return?
A. The parsed JSON data
B. A promise
C. An XMLHttpRequest object
D. The response body as a string

**4.** Promise callbacks wait in which queue, drained before any setTimeout callback?
A. The call stack
B. The macrotask queue
C. The render queue
D. The microtask queue

**5.** Which ES6 feature gathers remaining arguments into an array in a parameter list?
A. Spread
B. Rest
C. Destructuring
D. Template literals

## Answers

**1. A** — action is the destination URL. method chooses GET or POST, enctype sets how the body is encoded, and name identifies a control rather than the form's target.

**2. C** — preventDefault cancels the default action, here the submission and reload. stopPropagation only stops the event travelling to ancestor elements, and reset clears the fields instead.

**3. B** — fetch returns a promise that resolves to a Response object; the body still has to be parsed with .json(), which returns another promise. XMLHttpRequest is the older callback-based alternative.

**4. D** — The event loop drains the microtask queue, which holds promise callbacks, before taking one macrotask. setTimeout and I/O callbacks sit in the macrotask queue, which is why setTimeout with 0 runs last.

**5. B** — The same three dots are rest in a parameter list, where they collect arguments, and spread in a call or literal, where they expand a collection. Destructuring pulls values out by key or position, and template literals embed expressions in backticks.
