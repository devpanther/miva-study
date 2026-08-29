# CSC_106 — Week 8 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 9, not this week. Notes closed.*

## Section A - Multiple choice (12)

**1.** A colleague says "React and Express.js are both just libraries — you import them and call their functions." What is the most precise correction?

a) Both are frameworks, because both are downloaded from a package manager
b) The distinction is about **control**: your code calls into a library and keeps the flow, whereas a framework provides the application's structure and calls your code at points it defines
c) The distinction is about size: anything over a certain file size is a framework
d) The distinction is about the language: JavaScript projects have libraries, server projects have frameworks

**2.** A team is maintaining a large existing site that must keep working on several older browsers. The remaining work is almost entirely selecting elements, attaching click handlers, showing and hiding panels, and fetching fragments from the server without a page reload. Which of this week's tools fits best, and why?

a) Lodash, because its chaining makes the code concise
b) Moment.js, because the fetched fragments contain timestamps
c) jQuery, because it covers DOM manipulation, event handling, AJAX and animation and abstracts away cross-browser inconsistencies
d) Angular, because a large existing site needs a complete framework

**3.** A reporting page receives an array of 40,000 sales records and must filter out cancelled sales, group the rest by region, sort by total, and take the top ten — all in the browser. Which library is the lecture's fit, and on what grounds?

a) jQuery, because the results will be written into the DOM
b) Lodash, because it provides utility functions over arrays and objects, supports method chaining, and is designed for efficient processing of large datasets
c) Moment.js, because sales records are time series
d) Express.js, because 40,000 records is a server-side workload

**4.** An airline site must display each departure time in the traveller's own timezone, adjust correctly for daylight saving, and print the date in the traveller's language. Which tool, and why?

a) Moment.js — it parses and formats dates, does date arithmetic, and provides timezone/daylight-saving and locale support
b) Lodash — dates are just data, and Lodash chaining handles them
c) jQuery — because the times are rendered into the DOM
d) Vue.js — because directives can format text declaratively

**5.** What does React's virtual DOM actually do?

a) It replaces the browser's DOM with a faster implementation written in JavaScript
b) It keeps an in-memory representation, compares it with the actual DOM, and updates only the parts that differ
c) It caches the rendered HTML on the server so pages load faster
d) It lets a child component write directly back into its parent's state

**6.** Which statement correctly contrasts data flow in React and Angular?

a) React uses two-way binding so a change in the UI updates the model automatically; Angular passes data one way only
b) React enforces unidirectional flow from parent to child, which keeps state predictable; Angular offers two-way binding, so a change in the UI and a change in the model each update the other
c) Both enforce unidirectional flow; the difference is only the template syntax
d) Both use two-way binding; the difference is that React's is implemented with a virtual DOM

**7.** What problem does Angular's dependency injection system solve?

a) It injects HTML templates into components at build time
b) It manages the creation and sharing of application services, which promotes modularity and testability
c) It resolves the order in which middleware functions run
d) It maps model classes onto database tables

**8.** A team runs a working server-rendered site. They want one page to gain a small interactive booking widget, without rewriting the site or introducing a whole application architecture. Which framework does the lecture point to, and why?

a) Angular, because it is a complete solution and will cover every future need
b) React, because the virtual DOM is fastest for small widgets
c) Vue.js, because it is progressive and incrementally adoptable — you can use as much or as little of it as needed, and it integrates easily into an existing project
d) None — a single widget must be written in plain JavaScript

**9.** In an Express.js application, what determines the order in which middleware functions run, and what are they given access to?

a) Alphabetical order of the function names; they are given the route parameters only
b) The order in which they are defined; they have access to the request and response objects in the request–response cycle
c) The order of the URL segments; they have access to the database connection
d) Express decides at runtime by priority; they have access only to the response object

**10.** A small Python team must ship an internal site quickly. Non-technical staff need a screen to add and edit records, and staff logins with roles must be enforced. Which backend framework fits, and why?

a) Express.js, because it is minimalist and will therefore be quickest
b) ASP.NET, because enterprise applications need Visual Studio tooling
c) Django, because it is a Python framework that generates a customisable admin panel for managing data and provides built-in authentication and authorization
d) Ruby on Rails, because scaffolding generates the admin screens

**11.** Which statement about Ruby on Rails is correct?

a) Convention over Configuration means Rails provides sensible defaults and conventions, so developers write less configuration and focus on application code
b) Convention over Configuration means every default must be declared in a configuration file before it applies
c) Active Record is Rails' templating engine for rendering views
d) Scaffolding is the process of writing configuration files by hand before generating models

**12.** A company standardised on C# and the Microsoft toolchain, but its new service must be deployed onto Linux servers. Which is the appropriate choice, and why?

a) Express.js, because Node.js runs on Linux
b) ASP.NET Core, because it is the latest version of ASP.NET and is cross-platform, running on Windows, Linux and macOS while keeping C# and the Microsoft ecosystem
c) Django, because Python runs everywhere
d) Classic ASP.NET, because MVC is platform-independent

## Section B - Short answer (3)

**13.** Distinguish a **library** from a **framework** in terms of **control flow**, giving one example of each from this week. Then explain why React is described in the slides as a "library for building user interfaces" yet is taught alongside Angular and Vue.js as a frontend framework.

**14.** A team must build a REST API. Compare **Express.js** and **Django** on language, structure and what each gives you out of the box. Then say which you would choose for (a) a small JSON API with unusual, highly custom routing, and (b) a content-managed site whose non-technical editors need to manage data — justifying each choice.

**15.** Name the five key features of **jQuery** and say how jQuery, **Lodash** and **Moment.js** differ in purpose. Then give three of the factors the lecture says should decide whether to use a given library at all.

## Answers

**1. b** — *library vs framework (inversion of control)*: the defining difference is who owns the flow. You call a library's functions and remain in control; a framework supplies the application structure and calls your code at points it defines. **a** treats distribution method as the criterion, which distinguishes nothing. **c** encodes the common belief that "framework" just means "big library". **d** confuses the tool's role with the tier it runs on — both tiers have libraries and frameworks.

**2. c** — *matching library to project requirements*: the four tasks named are exactly jQuery's named features (DOM manipulation, event handling, AJAX, animation), and cross-browser abstraction is its other selling point. **a** picks Lodash on a feature (chaining) jQuery also has, while ignoring that none of the work is data manipulation. **b** latches onto an incidental word rather than the task. **d** confuses "large project" with "needs a complete framework" — Angular would mean rewriting the site.

**3. b** — *Lodash's domain*: utility functions over arrays and objects, chaining, and performance on large datasets. **a** confuses where the *result* is displayed with where the *work* happens; jQuery chains over selected elements, not over data. **c** treats any record with a timestamp as a Moment.js problem. **d** confuses the location of the code with the framework category — Express is a server framework, not a data-manipulation library.

**4. a** — *Moment.js*: parsing, formatting, arithmetic, timezone/daylight-saving handling and locale support are its four named strengths, and this requirement uses three of them. **b** ignores that Lodash has no date/timezone facilities. **c** again confuses rendering with computing. **d** confuses a framework's display syntax with the ability to compute the correct localised time.

**5. b** — *virtual DOM*: React tracks the difference between the virtual DOM and the actual DOM and updates only the necessary parts, instead of manipulating the DOM directly. **a** is the widespread misreading that the virtual DOM is a replacement DOM engine. **c** confuses it with server-side rendering or caching. **d** describes the opposite of React's unidirectional data flow.

**6. b** — *unidirectional vs two-way data binding*: React's data flows parent → child, which keeps state predictable and simplifies debugging; Angular's two-way binding synchronises UI and model automatically, so a change in one affects the other. **a** simply swaps the two frameworks. **c** denies that Angular has two-way binding at all. **d** confuses the rendering mechanism (virtual DOM) with the binding direction — they are unrelated.

**7. b** — *dependency injection*: Angular's DI manages the creation and sharing of application services, promoting modularity and testability. **a** confuses DI with template compilation. **c** describes Express middleware ordering. **d** describes Rails' Active Record ORM.

**8. c** — *progressive / incremental adoption*: Vue.js focuses on the view layer and is designed to be incrementally adoptable, so it can be dropped into an existing project and used as little as needed. **a** mistakes "most capable" for "most suitable" and ignores the constraint against rewriting. **b** justifies a choice with a performance claim the requirement never made. **d** wrongly assumes a framework cannot be adopted partially — which is precisely the property Vue is named for.

**9. b** — *Express middleware*: middleware functions have access to the request and response objects in the request–response cycle and execute in the order they are defined, letting developers build a custom processing pipeline (authentication, logging, parsing). **a** and **c** invent orderings; the defined order is the whole point, since authentication must run before the route handler. **d** removes access to the request object, which is what middleware inspects.

**10. c** — *Django's out-of-the-box features*: it is a Python framework whose admin interface generates a customisable panel for managing application data, and it ships built-in authentication and authorization. **a** confuses minimalism with speed of delivery — with Express you must build the admin and auth yourself. **b** picks a framework on brand rather than requirement, and forces a language switch. **d** offers Rails' scaffolding, which generates models/controllers/views for developers, not a ready-made admin panel for non-technical staff — and it is Ruby, not Python.

**11. a** — *Convention over Configuration*: Rails provides sensible defaults and conventions, minimising configuration so developers focus on application code. **b** inverts CoC into its opposite, configuration-first. **c** confuses Active Record (the ORM providing an object-relational mapping layer, where models map directly to database tables) with the view layer. **d** inverts scaffolding, which *generates* common components automatically to accelerate development.

**12. b** — *ASP.NET Core*: the latest version of ASP.NET, known for cross-platform compatibility and high performance, running on Windows, Linux and macOS — so the team keeps C#, Visual Studio and the Microsoft ecosystem while deploying to Linux. **a** solves the platform problem by discarding the language preference the question stated. **c** does the same. **d** assumes the MVC *pattern* confers platform portability; the pattern is architectural, the portability comes from the Core runtime.

**13.** *Library vs framework, and React's ambiguous status*: A **library** is a collection of pre-written functions for specific tasks that **your code calls** — you keep control of the program's flow and use the library where you choose (e.g. **jQuery**, **Lodash** or **Moment.js**: you decide when to call `$(...)` or `_.filter(...)`). A **framework** provides the **structured architecture of the whole application** and **calls your code**: it defines the flow, the file structure and the lifecycle, and you supply components and handlers that it invokes (e.g. **Angular** or **Django**). This inversion of control is the real distinction — not size, popularity or language.

React sits between the two. It supplies only the **view layer** — component-based architecture, a virtual DOM and unidirectional data flow — and leaves routing, state management, HTTP and build configuration to libraries you choose yourself, which is why its own documentation and this week's slides call it a **library**. It is taught with Angular and Vue.js because in practice it plays the same role as they do: it takes over how the UI is structured and rendered, and it calls your components rather than the other way round. Contrast Angular, which supplies templating, dependency injection, routing and state management as one complete solution — unambiguously a framework.

**14.** *Express.js vs Django for a REST API*: **Express.js** is a **minimalist and flexible Node.js** framework written in **JavaScript**; it gives you **middleware**, **routing** (including dynamic URL parameters), **template engines** and the **request/response objects**, and almost nothing else — you assemble the structure, data layer, authentication and validation yourself. **Django** is a **Python** framework following **MVC** (models, views, URL dispatchers) and the **DRY** principle; out of the box it gives you models and an ORM, a generated **admin interface**, and **built-in authentication and authorization**.

(a) For a **small JSON API with unusual, highly custom routing**, choose **Express.js**: the lecture's own criterion is that Express is preferable when you want **flexibility and control**, and a minimal middleware-plus-routing model lets you define exactly the pipeline and endpoints you need without fighting a framework's conventions. (b) For a **content-managed site with non-technical editors**, choose **Django**: its admin interface generates a customisable panel for managing data with no extra work, and authentication, permissions and roles are already available — the lecture names Rails or Django as the choice when you want conventions and minimal configuration. (Team language expertise is the other stated tiebreaker: Django needs Python people, Express needs JavaScript people.)

**15.** *jQuery's features and choosing a library*: jQuery's five key features are **DOM manipulation**, **event handling**, **AJAX requests**, **animation**, and **cross-browser compatibility**; it simplifies development by providing concise methods for these tasks instead of verbose native JavaScript. The three libraries differ by **domain**: **jQuery** works on **the document and the browser** — selecting and modifying elements, attaching handlers, fetching data without a reload; **Lodash** works on **data in memory** — utility functions over arrays, objects and strings, with method chaining and an emphasis on performance and functional programming; **Moment.js** works on **dates and times** — parsing, formatting, date arithmetic, timezones and daylight saving, and locale-specific formatting.

Three deciding factors (any three of the lecture's five): **project requirements** — match the library's domain to what the project actually needs; **library size** — a large library adds to page load time, so under strict performance requirements prefer smaller, targeted solutions or native JavaScript; **modern JavaScript** — native language features and APIs have made parts of these libraries unnecessary, so always evaluate the native equivalent first; **development team familiarity** — an already-known library is more efficient to use; **maintenance and longevity** — check for updates and community support so the choice remains viable long-term.
