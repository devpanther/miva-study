# Tuesday — CSC_106 fast-hour check

*Library versus framework, the three JavaScript libraries, and the React, Angular, Vue and Express distinctions.*
*Five questions, straight after the fast hour. Recall only. Score out of 5.*

**1.** What distinguishes a framework from a library?
A. It is always larger in file size
B. It runs on the server rather than the browser
C. It calls your code, whereas you call a library
D. It needs no configuration at all

**2.** Which library exists for parsing, formatting and doing arithmetic on dates?
A. Moment.js
B. Lodash
C. jQuery
D. React

**3.** React's virtual DOM works by:
A. re-rendering the whole page on every change
B. replacing the browser's DOM entirely
C. caching finished HTML files in the browser
D. diffing against the real DOM and updating only differences

**4.** Which framework is defined by two-way data binding?
A. React
B. Angular
C. Vue.js
D. Express.js

**5.** Express.js middleware functions run:
A. only after the route handler has returned
B. in alphabetical order of their names
C. in the order in which they are defined
D. once, when the application starts

## Answers

**1. C** — The one-line test is who calls whom: you call a library's functions and keep control, while a framework owns the application architecture and calls your code at points it defines. Size, location and configuration all vary and settle nothing.

**2. A** — Moment.js handles dates and times, including timezones and locales. Lodash is utilities over arrays, objects and strings, jQuery is DOM traversal, events, AJAX and animation, and React is the component-based view layer.

**3. D** — React keeps an in-memory copy, compares it with the actual DOM and updates only the parts that differ, which is the whole point of the mechanism. It is not a faster DOM, not a replacement for the browser's DOM, and not a caching scheme.

**4. B** — Angular keeps the UI and the data model synchronised automatically, so a change in either affects the other. React's data flow is unidirectional, parent to child only, Vue is a progressive view layer built on directives, and Express.js is a backend framework.

**5. C** — Middleware functions have access to the request and response objects and execute in the order they are defined, forming a pipeline, which is how an authentication check can guard a route by running before its handler. They run on every matching request, not once at start-up.
