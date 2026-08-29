# CSC_106 — Week 8 Questions

*JavaScript libraries and frameworks: jQuery, Lodash and Moment.js; React, Angular and Vue.js; Django, Express.js, Rails and ASP.NET. Sat seven days later during Saturday catch-up in Week 9 as a retention test — notes closed.*

## Multiple choice

**1.** A colleague says "React and Express.js are both just libraries — you import them and call their functions." What is the most precise correction?

A. Both are frameworks, because both are installed from a package manager rather than written by hand
B. The distinction is one of size: a collection of functions past a certain weight is called a framework
C. The distinction is **control**: your code calls a library, a framework calls your code
D. The distinction is the tier: browser projects use libraries, server projects use frameworks

**2.** A team maintains a large existing site that must keep working on several older browsers. The remaining work is almost entirely selecting elements, attaching click handlers, showing and hiding panels, and fetching fragments from the server without a page reload. Which of this week's tools fits, and why?

A. jQuery — DOM manipulation, event handling, AJAX and animation, and it abstracts away cross-browser inconsistencies
B. Lodash, because its method chaining would let all four of those tasks be written as a single expression
C. Moment.js, because the fragments fetched from the server will contain timestamps that need formatting
D. Angular, because a site of that size needs the structure and tooling of a complete framework

**3.** A reporting page receives an array of 40,000 sales records and must filter out cancelled sales, group the rest by region, sort by total and take the top ten — all in the browser. Which library does the lecture point to, and on what grounds?

A. jQuery, because the finished table has to be written into the DOM once the totals are ready
B. Moment.js, because sales records are a time series and must be ordered by date before grouping
C. Express.js, because forty thousand records is a server-side workload by any reasonable measure
D. Lodash — utility functions over arrays and objects, chaining, and performance on large datasets

**4.** An airline site must show each departure time in the traveller's own timezone, adjust for daylight saving, and print the date in the traveller's language. Which tool, and why?

A. Lodash, because dates are just data and its chained utilities can transform them like any other value
B. Moment.js — date parsing and formatting, arithmetic, timezone and locale support
C. jQuery, because the finished times are rendered into the page and jQuery owns DOM output
D. Vue.js, because its directives can format displayed text declaratively inside the template

**5.** What does React's virtual DOM actually do?

A. It keeps an in-memory copy, tracks the difference against the actual DOM, and updates only the parts that need it
B. It replaces the browser's own DOM with a faster implementation written in JavaScript and shipped with React
C. It caches rendered HTML on the server so that repeat visitors receive a prebuilt page more quickly
D. It lets a child component write a value directly back into the state held by its parent component

**6.** Which statement correctly contrasts data flow in React and Angular?

A. React uses two-way binding, so a change in the UI updates the model automatically; Angular passes data one way only
B. Both enforce unidirectional flow; the only real difference between them is the template syntax
C. Both use two-way binding; the difference is that React implements its version with a virtual DOM
D. React's flow is unidirectional, parent to child; Angular's is two-way, so UI and model update each other

**7.** What problem does Angular's dependency injection system solve?

A. It injects HTML templates into their components when the application is compiled
B. It resolves the order in which middleware functions run before a route handler
C. It manages the creation and sharing of application services
D. It maps model classes onto database tables so that data access needs no SQL

**8.** A team runs a working server-rendered site. They want one page to gain a small interactive booking widget, without rewriting the site or adopting a whole application architecture. Which framework does the lecture point to, and why?

A. Angular, because it is a complete solution and will cover whatever the site needs next as well
B. Vue.js — progressive and incrementally adoptable, so it drops into an existing project
C. React, because its virtual DOM makes it the fastest option for a single small widget
D. None of them — one widget on an existing page has to be written in plain JavaScript

**9.** In an Express.js application, what determines the order in which middleware functions run, and what are they given access to?

A. Alphabetical order of the function names; they are given the route parameters only
B. The order of the URL segments being matched; they are given the database connection
C. Express decides at runtime by priority; they are given access only to the response object
D. The order in which they are defined; they access the request and response objects

**10.** A small Python team must ship an internal site quickly. Non-technical staff need a screen for adding and editing records, and staff logins with roles must be enforced. Which backend framework fits, and why?

A. Django — a Python framework with a generated admin panel and built-in authentication
B. Express.js, because it is minimalist and a minimalist framework is always the quickest route to a first release
C. Ruby on Rails, because its scaffolding generators produce ready-made admin screens for non-technical staff
D. ASP.NET, because internal enterprise applications benefit from Visual Studio's tooling and debugging support

**11.** Which statement about Ruby on Rails is correct?

A. Convention over Configuration means every default must be declared in a configuration file before it applies
B. Convention over Configuration means Rails supplies sensible defaults, so you write less configuration
C. Active Record is the templating engine Rails uses to render views from model data
D. Scaffolding is the practice of writing configuration files by hand before any model can be generated

**12.** A company standardised on C# and the Microsoft toolchain, but its new service must be deployed onto Linux servers. Which is the appropriate choice, and why?

A. Express.js, because Node.js runs on Linux and JavaScript is close enough to C# to retrain quickly
B. Django, because Python runs everywhere and the team can pick it up alongside their existing tooling
C. ASP.NET Core — cross-platform (Windows, Linux, macOS) while keeping C# and the Microsoft ecosystem
D. Classic ASP.NET, because the MVC pattern it follows is itself platform-independent

## Short answer

**13.** Distinguish a **library** from a **framework** in terms of **control flow**, giving one example of each from this week. Then explain why React is described in the slides as a "library for building user interfaces" yet is taught alongside Angular and Vue.js as a frontend framework.

**14.** A team must build a REST API. Compare **Express.js** and **Django** on language, structure and what each gives you out of the box. Then say which you would choose for (a) a small JSON API with unusual, highly custom routing, and (b) a content-managed site whose non-technical editors need to manage data — justifying each choice.

**15.** Name the five key features of **jQuery** and say how jQuery, **Lodash** and **Moment.js** differ in purpose. Then give three of the factors the lecture says should decide whether to use a given library at all.

## Answers

**1. C** — *library vs framework (inversion of control)*: the defining difference is who owns the flow. You call a library's functions and stay in control; a framework provides the application's structure and calls your code at the points it defines. **A** treats distribution method as the criterion, which separates nothing — both arrive the same way. **B** encodes the common belief that "framework" just means "big library". **D** confuses the tool's role with the tier it runs on; both tiers have libraries and frameworks.

**2. A** — *matching the library to the project's requirements*: the four tasks named are exactly jQuery's named features — DOM manipulation, event handling, AJAX and animation — and cross-browser abstraction answers the old-browser constraint. **B** picks Lodash on chaining, which jQuery also has, while ignoring that none of the work is data manipulation. **C** latches onto an incidental word instead of the task. **D** confuses "large project" with "needs a complete framework"; adopting Angular here means rewriting the site.

**3. D** — *Lodash's domain*: utility functions over arrays and objects, method chaining, and a design aimed at processing large datasets efficiently. **A** confuses where the *result* is displayed with where the *work* happens; jQuery chains over selected elements, not over data. **B** treats any record carrying a timestamp as a Moment.js problem. **C** confuses the location of the code with the category of the tool — Express is a server framework, not a data-manipulation library.

**4. B** — *Moment.js*: parsing and formatting, date arithmetic, timezone and daylight-saving handling, and locale support are its four named strengths, and this requirement uses three of them. **A** ignores that Lodash has no date or timezone facilities at all. **C** again confuses rendering with computing. **D** confuses a framework's display syntax with the ability to compute the correct localised time.

**5. A** — *the virtual DOM*: instead of manipulating the DOM directly, React tracks the difference between the virtual DOM and the actual DOM and updates only the necessary parts. **B** is the widespread misreading that the virtual DOM is a replacement DOM engine. **C** confuses it with server-side rendering or caching. **D** describes the opposite of React's unidirectional data flow.

**6. D** — *unidirectional vs two-way data binding*: React's data flows parent → child, which keeps state predictable and simplifies debugging; Angular's two-way binding synchronises UI and data model automatically, so a change in one affects the other. **A** simply swaps the two frameworks over. **B** denies that Angular has two-way binding. **C** confuses the rendering mechanism (virtual DOM) with the binding direction; they are unrelated.

**7. C** — *dependency injection*: Angular's DI system manages the creation and sharing of application services, which promotes modularity and testability. **A** confuses DI with template compilation. **B** describes Express middleware ordering. **D** describes Rails' Active Record ORM.

**8. B** — *progressive, incremental adoption*: Vue.js focuses on the view layer and is designed to be incrementally adoptable — you use as much or as little of it as needed, which is why it integrates easily into an existing project. **A** mistakes "most capable" for "most suitable" and ignores the constraint against rewriting. **C** justifies the choice with a performance claim the requirement never made. **D** assumes a framework cannot be adopted partially, which is precisely the property Vue is named for.

**9. D** — *Express middleware*: middleware functions have access to the request and response objects in the application's request–response cycle, and are executed in the order they are defined, letting developers build a custom processing pipeline for authentication, logging or parsing. **A** and **B** invent orderings; the defined order is the whole point, since authentication must run before the route handler. **C** removes access to the request object, which is the very thing middleware inspects.

**10. A** — *Django's out-of-the-box features*: a Python framework whose admin interface generates a customisable panel for managing application data, with built-in authentication and authorization covering users, permissions and roles. **B** confuses minimalism with speed of delivery — with Express you build the admin screens and the auth yourself. **C** misstates scaffolding, which generates models, controllers and views for **developers**, not a ready-made admin panel for non-technical staff, and it is Ruby rather than Python. **D** picks on brand rather than requirement.

**11. B** — *Convention over Configuration*: Rails provides sensible defaults and conventions, which minimises configuration and lets developers focus on application code. **A** inverts CoC into its opposite, configuration-first. **C** confuses Active Record — the ORM layer in which models map directly to database tables — with the view layer. **D** inverts scaffolding, whose generators *automate* the creation of common components to accelerate development.

**12. C** — *ASP.NET Core*: the latest version of ASP.NET, known for cross-platform compatibility and high performance, running on Windows, Linux and macOS — so the team keeps C#, Visual Studio and the Microsoft ecosystem while deploying to Linux. **A** and **B** solve the platform problem by discarding the language preference the question stated. **D** assumes the MVC *pattern* confers portability; the pattern is architectural, the portability comes from the Core runtime.

**13.** *Library vs framework, and React's ambiguous status*: A **library** is a collection of pre-written functions for specific tasks that **your code calls** — you keep control of the program's flow and reach for the library where you choose (**jQuery**, **Lodash** or **Moment.js**: you decide when to call `$(...)` or `_.filter(...)`). A **framework** provides the **structured architecture of the whole application** and **calls your code**: it defines the flow, the structure and the lifecycle, and you supply the components and handlers it invokes (**Angular** or **Django**). This inversion of control is the real distinction — not size, popularity or language.

React sits between the two. It supplies only the **view layer** — component-based architecture, a virtual DOM and unidirectional data flow — and leaves routing, state management and build configuration to tools you choose yourself, which is why the slides call it "a popular JavaScript **library** for building user interfaces". It is taught with Angular and Vue.js because in practice it plays their role: it takes over how the UI is structured and rendered, and it calls your components rather than the other way round. Angular, by contrast, supplies templating, dependency injection, routing and state management as one complete solution — unambiguously a framework.

**14.** *Express.js vs Django for a REST API*: **Express.js** is a **minimalist and flexible Node.js** framework written in **JavaScript**; it gives you **middleware**, **routing** (including dynamic URL parameters), **template engines** (EJS, Handlebars) and the **request and response objects**, and little else — you assemble the structure, data layer, authentication and validation yourself. **Django** is a **Python** framework following the **MVC** pattern (models, views, URL dispatchers) and the **DRY** principle; out of the box it gives you models, a generated **admin interface**, and **built-in authentication and authorization**.

(a) For a **small JSON API with unusual, highly custom routing**, choose **Express.js**: the lecture's own criterion is that Express is preferable where you want **flexibility and control**, and a middleware-plus-routing model lets you define exactly the pipeline and endpoints you need without working around a framework's conventions. (b) For a **content-managed site with non-technical editors**, choose **Django**: its admin interface generates a customisable panel for managing data with no extra work, and authentication, permissions and roles are already available — the lecture names Rails or Django as the choice when you want conventions and minimal configuration. **Language preference and team expertise** are the other stated tiebreakers: Django needs Python people, Express needs JavaScript people.

**15.** *jQuery's features and choosing a library*: jQuery's five key features are **DOM manipulation**, **event handling**, **AJAX requests**, **animation** and **cross-browser compatibility**; it simplifies development by providing concise methods for these tasks in place of verbose native JavaScript. The three libraries differ by **domain**: **jQuery** works on **the document and the browser** — selecting and modifying elements, attaching handlers, fetching data without a reload; **Lodash** works on **data in memory** — utility functions over arrays, objects and strings, with method chaining and an emphasis on performance and functional programming; **Moment.js** works on **dates and times** — parsing, formatting, date arithmetic, timezones and daylight saving, and locale-specific formatting.

Three deciding factors (any three of the lecture's five): **project requirements** — match the library's domain to what the project actually needs; **library size** — a large library adds to page load time, so under strict performance requirements prefer smaller, targeted solutions or native JavaScript; **modern JavaScript** — language features and APIs have made parts of these libraries less essential, so always evaluate the native equivalent first; **development team familiarity** — a library the team already knows is more efficient to use; **maintenance and longevity** — check updates and community support so the choice remains viable in the long run.
