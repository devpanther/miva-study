# CSC_106 — Week 8 Summary

*Introduction to Web Technologies · Week 8 (26 Oct – 1 Nov 2026) · Topic: JavaScript libraries and frameworks — jQuery, Lodash and Moment.js; the React, Angular and Vue.js frontend frameworks; the Django, Express.js, Ruby on Rails and ASP.NET backend frameworks*

## The 8 most examinable things this week

1. **Library vs framework — the difference is who is in control.** A **library** is a collection of **pre-written functions for specific tasks** that *you* call from your own code: you own the flow of control, the library is a tool you reach for. A **framework** provides the **structured architecture for the whole application** and calls *your* code at the points it defines: the framework owns the flow, you fill in the slots. One-line test: **"who calls whom?"** — you call `$("#id").hide()`; Angular calls your component when it decides to render it.
2. **The three libraries, one job each.** **jQuery** — DOM traversal, event handling, AJAX, animation, cross-browser consistency. **Lodash** — utility functions over **arrays, objects and strings**, method chaining, performance on large datasets. **Moment.js** — parsing, formatting and arithmetic on **dates and times**, plus timezone and locale support.
3. **jQuery's five named features** (the mid-lesson question): **DOM manipulation, event handling, AJAX requests, animation, cross-browser compatibility**. It simplifies development by replacing verbose native JavaScript with concise methods.
4. **React** (Facebook): **component-based architecture** + **virtual DOM** + **unidirectional data flow**. The virtual DOM is the examinable mechanism — React does **not** rewrite the page; it compares the virtual DOM with the actual DOM and **updates only the parts that differ**. Data flows **parent → child** only, which keeps state predictable and debugging simple.
5. **Angular** (Google): a **comprehensive/complete** framework — **modules** (containers for components and services), **components**, **dependency injection** (manages the creation and sharing of services, promoting modularity and testability), and **two-way data binding** (UI and data model stay synchronised automatically; a change in either affects the other).
6. **Vue.js**: a **progressive** framework focused on the **view layer**, **incrementally adoptable** — you can use as much or as little as needed, so it drops into an existing project. Features: **directives** (added to HTML elements to declaratively render dynamic content) and a **component system**. Praised for its **gentle learning curve**.
7. **The four backend frameworks and the one thing each is picked for.** **Django** (Python) — its **generated admin interface** and **built-in authentication/authorization**. **Express.js** (Node.js) — **minimalism and flexibility**, built on **middleware**. **Rails** (Ruby) — **Convention over Configuration**, so you configure almost nothing. **ASP.NET** (C#) — the **Microsoft ecosystem**, made cross-platform by **ASP.NET Core**. Full feature table below.
8. **Middleware in Express.js** (the other mid-lesson question): functions with **access to the request and response objects** in the application's **request–response cycle**, executed **in the order they are defined**, forming a custom processing pipeline. Uses: authentication, logging, data parsing — e.g. authenticate a session *before* a protected route handler runs.

## The three libraries

```js
// jQuery — DOM, events, AJAX, animation
$("#status").text("Loading...").css("color", "red");   // select, modify, chain
$("#btn").on("click", function () { $("#panel").fadeIn(400); });
$.get("/api/prices", function (data) { $("#out").html(data); }); // AJAX, no reload

// Lodash — data manipulation with chaining
const names = _.chain(users)
  .filter(u => u.active)
  .sortBy("age")
  .map("name")
  .value();            // .value() ends the chain and returns the result

// Moment.js — dates and times
moment("2026-10-26").format("dddd, D MMMM YYYY");  // "Monday, 26 October 2026"
moment().add(7, "days").subtract(1, "month");      // date arithmetic
moment.tz("2026-10-26 09:00", "Africa/Lagos");     // timezone-aware
moment().locale("fr").format("LL");                // locale support
```

| Library | Domain | Distinguishing feature |
|---|---|---|
| jQuery | The document and the browser | Concise DOM/event syntax; **abstracts away cross-browser inconsistencies** |
| Lodash | Data structures in memory | **Method chaining**; functional style; efficient on large datasets |
| Moment.js | Dates and times | **Timezone and daylight-saving** handling; **locale** formatting |

**When to use which** (the lecture's five factors): **project requirements** (DOM + old browsers → jQuery; data → Lodash; dates → Moment.js); **library size** and its effect on page load; **modern JavaScript** — native features and APIs have made parts of these libraries unnecessary, so always check the native equivalent first; **team familiarity**; **maintenance and longevity** (updates and community support).

## Frontend frameworks

| | React | Angular | Vue.js |
|---|---|---|---|
| Origin | Facebook | Google | — |
| Scope | UI library, component-based | **Complete** solution | **Progressive**, view layer |
| Key mechanism | **Virtual DOM** | **Dependency injection** | **Directives** |
| Data binding | **Unidirectional** (parent → child) | **Two-way** | Directives + components |
| Adoption | Whole UI layer | Whole application | **Incremental** |
| Best for | Highly interactive, dynamic UIs | Large-scale / enterprise, strong typing, scalability | Lightweight, flexible, dropping into an existing page |
| Learning curve | Steeper | Steeper | **Gentle** |

```jsx
// React: a reusable component; data comes DOWN as props, never up
function PriceTag(props) {
  return <span className="price">{props.amount}</span>;
}
// <PriceTag amount={4500} />
```

```html
<!-- Vue: a directive on an ordinary HTML element -->
<p v-if="seatsLeft > 0">{{ seatsLeft }} seats left</p>
```

```html
<!-- Angular: two-way binding — typing updates the model, and vice versa -->
<input [(ngModel)]="user.name"> <p>Hello {{ user.name }}</p>
```

**Choosing** (the lecture's five factors): **project requirements**, **team familiarity**, **community and ecosystem**, **scalability** (Angular is the named choice for enterprise-level applications), **learning curve**.

Note the trap: the slides call React "a popular JavaScript **library** for building user interfaces" but teach it under **frontend frameworks**. React only supplies the view layer, so you still choose routing and state tools yourself; Angular supplies all of them. That is exactly the library/framework control question in miniature.

## Backend frameworks

| Framework | Language | Named features |
|---|---|---|
| **Django** | Python | MVC (models, views, URL dispatchers); **admin interface** generating a customisable admin panel; **built-in authentication and authorization**; DRY |
| **Express.js** | JavaScript (Node.js) | **Middleware** pipeline; **routing** including dynamic URL parameters; **template engines** (EJS, Handlebars); **request and response objects** |
| **Ruby on Rails** | Ruby | **CoC** and **DRY**; **Active Record** (ORM — models map directly to database tables); **RESTful routing**; **scaffolding** generators for models, controllers and views |
| **ASP.NET** | C# (and others) | **ASP.NET Core** — cross-platform, high performance; **MVC**; **Razor Pages** (simpler alternative to MVC); Visual Studio integration |

```js
// Express: middleware runs in the order it is defined, then the route handler
app.use(express.json());                    // 1. parse the JSON body
app.use((req, res, next) => {               // 2. log
  console.log(req.method, req.url);
  next();                                   // hand on to the next middleware
});
app.get("/orders/:id", requireAuth, (req, res) => {   // 3. auth, then handler
  res.json({ id: req.params.id });
});
```

If `requireAuth` never calls `next()`, the handler never runs — that is how authentication guards a protected route.

**Choosing** (the lecture's five factors): **project requirements** (conventions and minimal configuration → **Rails or Django**; flexibility and control → **Express.js**; a Microsoft-invested organisation → **ASP.NET**); **language preference**; **community and ecosystem**; **performance and scalability**; **development team expertise**.

## Commonly confused

- **Library vs framework** — ask **who calls whom**. Your code calls a library and keeps control; a framework calls your code and dictates the structure. "Pre-written code for a specific task" = library; "overall application architecture" = framework.
- **React vs Angular data binding** — React is **unidirectional** (parent to child, one direction, predictable state); Angular is **two-way** (UI and model synchronise automatically, each affects the other). If a question says "a change in the input immediately updates the model without extra code", it is Angular.
- **Virtual DOM vs "faster DOM"** — the virtual DOM is not a faster browser DOM. It is an in-memory copy React **diffs** against the real DOM so it can update **only the changed parts** instead of re-rendering everything.
- **Lodash vs jQuery** — both are libraries with chainable methods, but jQuery chains over **selected page elements**, Lodash chains over **data in memory**. "Filter and sort 20,000 records" is Lodash; "hide this div" is jQuery.
- **Vue "progressive/incrementally adoptable" vs Angular "complete solution"** — Vue can be added to one page of an existing site; Angular expects to own the whole application.
- **Django's MVC vs Express's middleware** — Django hands you structure (models, views, URL dispatchers, admin, auth) before you write a line; Express hands you an empty pipeline and you assemble the structure yourself. Convention vs flexibility.
- **CoC vs DRY** — **Convention over Configuration** means sensible defaults so you write *less configuration*; **Don't Repeat Yourself** means you write each piece of knowledge *once*. Rails uses both; Django names DRY.
- **Active Record vs the admin interface** — Active Record is an **ORM** mapping model classes to database tables (Rails); the admin interface is a **generated UI** for managing data (Django). Both reduce work, but one is a data-access layer and one is a screen.
- **Middleware vs routing** — routing decides **which handler** matches a URL; middleware runs **before** (and around) that handler in the order defined, doing authentication, logging or parsing for many routes at once.
