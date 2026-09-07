# Tuesday — CSC_106 fast-hour check

*Library versus framework, plus reading jQuery, React, Vue, Angular and Express code.*
*12 questions, straight after the hour. Score out of 12.*

**1.** jQuery is loaded and the page has `<div id="out"></div>`.
```js
$("#out").html("<b>Total</b>: " + (2 + 3));
```
What does the div show?
A. Total: 5, with Total in bold
B. <b>Total</b>: 5, shown literally
C. Total: 23, with Total in bold
D. Total: 2 + 3, with Total in bold

**2.** The page has three `<button class="btn">Save</button>` elements and jQuery is loaded.
```js
$(".btn").on("click", function () {
  $(this).text("Done");
});
```
The user clicks the second button. What happens?
A. All three buttons read Done
B. Only the first button reads Done
C. Only the second button reads Done
D. Nothing; .on() needs an id selector

**3.** ```js
const users = [
  { name: "Ada", age: 31, active: true },
  { name: "Ben", age: 25, active: false },
  { name: "Cy",  age: 28, active: true }
];
const r = _.chain(users).filter("active").sortBy("age").map("name").value();
```
What is `r`?
A. ["Ada", "Cy"]
B. ["Ben", "Cy", "Ada"]
C. ["Ada", "Ben", "Cy"]
D. ["Cy", "Ada"]

**4.** What does `_.chunk([1, 2, 3, 4, 5], 2)` return?
A. [[1, 2], [3, 4], [5]]
B. [[1, 2], [3, 4]]
C. [[1, 2, 3], [4, 5]]
D. [[1], [2], [3], [4], [5]]

**5.** What does `moment("2026-10-26").add(7, "days").format("YYYY-MM-DD")` return?
A. "2026-10-33"
B. "2026-11-02"
C. "2026-11-03"
D. "2026-10-19"

**6.** ```jsx
function Total(props) {
  return <p>Total: {props.qty * props.price}</p>;
}
```
What does `<Total qty={3} price={200} />` render?
A. <p>Total: {props.qty * props.price}</p>
B. <p>Total: 3200</p>
C. <p>Total: 600</p>
D. <p>Total: qty * price</p>

**7.** A Vue app has `tasks: ["buy", "cook"]` in its data.
```html
<p v-for="t in tasks">{{ t.toUpperCase() }}</p>
```
What is rendered?
A. One paragraph reading BUY
B. Two paragraphs, BUY and COOK
C. Two paragraphs with the text unchanged, buy and cook
D. Two paragraphs each reading {{ t.toUpperCase() }}

**8.** ```ts
export class CartComponent {
  constructor(private cart: CartService) {}
}
```
Which Angular feature supplies the `CartService` instance to this component?
A. Two-way data binding
B. A directive
C. A module
D. Dependency injection

**9.** ```js
app.get("/orders/:id", (req, res) => {
  res.send("Order " + req.params.id);
});
```
A client requests `GET /orders/42`. What is the response body?
A. Order 42
B. Order :id
C. Order undefined
D. Cannot GET /orders/42

**10.** ```js
app.post("/items", (req, res) => {
  res.send("Got " + req.body.name);
});
```
A client POSTs the JSON body `{"name": "pen"}`. Which line, placed before the route, makes the response `Got pen`?
A. `app.use(express.static("public"));`
B. `app.use(express.json());`
C. `app.set("view engine", "ejs");`
D. `app.listen(3000);`

**11.** What is the difference between a library and a framework?
A. A library is code your program calls; a framework supplies the application structure and calls your code
B. A library runs in the browser; a framework runs on the server
C. A library is open source; a framework is a commercial product
D. A library is a small framework; past a certain size it is called a framework

**12.** In Ruby on Rails, what does Active Record provide?
A. A generated admin panel for managing application data
B. An ORM layer in which model classes map directly to database tables
C. A template engine that renders HTML from model data
D. A pipeline of functions that run in order before a route handler

---

## Answers

**1. A** — *jQuery .html() versus .text().* The parentheses make 2 + 3 evaluate to the number 5 first, then it is joined to the string. .html() parses its argument as markup, so the `<b>` becomes a real bold element: the div shows Total in bold, then ": 5".

Shown literally is what .text() would do; 23 is what you get without the parentheses, where + concatenates left to right; "2 + 3" treats the arithmetic as part of the string.

**2. C** — *jQuery event handlers and $(this).* .on() attaches the handler to every element in the selection, and inside the handler `this` is the element that was actually clicked. $(this).text("Done") therefore rewrites only the second button.

All three would need $(".btn").text("Done") inside the handler; only the first assumes the selection collapsed to one element; the last option invents a rule, class selectors work fine with .on().

**3. D** — *Tracing a Lodash method chain.* filter("active") keeps Ada and Cy. sortBy("age") orders them 28 then 31, so Cy before Ada. map("name") pulls out the names and value() ends the chain: ["Cy", "Ada"].

["Ada", "Cy"] filters but forgets the sort; ["Ben", "Cy", "Ada"] sorts but forgets the filter; ["Ada", "Ben", "Cy"] does neither and just lists the names.

**4. A** — *Lodash array utilities.* chunk splits the array into groups of the given size, 2, and the leftover element forms a final shorter group: [[1, 2], [3, 4], [5]].

[[1, 2], [3, 4]] drops the remainder; [[1, 2, 3], [4, 5]] reads the 2 as the number of chunks rather than the size of each; the five singletons use a size of 1.

**5. B** — *Date arithmetic with Moment.js.* October has 31 days. 26 + 7 = 33, which is 2 days past the 31st, so the date rolls into November: 2 November 2026, formatted "2026-11-02".

"2026-10-33" adds without rolling the month over; "2026-11-03" is an off-by-one in the rollover (counting 31 October twice); "2026-10-19" subtracts the week instead of adding it.

**6. C** — *Props and expressions in a React component.* The attributes on the tag arrive as props.qty = 3 and props.price = 200. Braces in JSX evaluate a JavaScript expression, so 3 * 200 = 600 is inserted: <p>Total: 600</p>.

The first option treats the braces as literal text; 3200 joins the two numbers as strings instead of multiplying; the last forgets that props carry the values passed in.

**7. B** — *Vue directives and template interpolation.* v-for repeats the element once per item, binding t to each task in turn, and the double braces evaluate the expression inside them. That gives two paragraphs, BUY and COOK.

One paragraph forgets that v-for repeats; lower-case buy and cook ignores the method call inside the braces; the raw braces would appear only if Vue were not running on that element.

**8. D** — *Recognising dependency injection in Angular.* Declaring a typed constructor parameter asks Angular to create or reuse a CartService and pass it in. That is dependency injection: Angular manages the creation and sharing of services so components do not build them themselves.

Two-way binding synchronises a form control with a model, not a service; a directive adds behaviour to an element in a template; a module is the container that groups components and services, it does not hand instances to constructors.

**9. A** — *Express dynamic route parameters.* `:id` in the path declares a route parameter; whatever appears in that segment of the URL is stored on req.params under that name. So req.params.id is "42" and the body is "Order 42".

"Order :id" treats the placeholder as literal text; "Order undefined" is what you get by reading req.query.id or req.body.id instead of req.params; "Cannot GET" is Express's 404, which only appears when no route matches.

**10. B** — *Middleware for parsing request bodies in Express.* Express does not read request bodies by itself; req.body is filled in by a parsing middleware. express.json() parses a JSON body and, because middleware runs in the order defined, placing it before the route means req.body.name is "pen" by the time the handler runs.

express.static serves files from a folder; app.set("view engine") chooses a template engine for rendering; app.listen starts the server and has nothing to do with parsing.

**11. A** — *Library versus framework.* The distinction is control. With a library (jQuery, Lodash, Moment.js) your code keeps control and calls the library's functions where it chooses. A framework (Angular, Django, Rails) provides the structure of the whole application and calls your code at the points it defines.

Both tiers have libraries and frameworks (Lodash in the browser, Express on the server, both are named for their tier and not the other); licensing has nothing to do with it; size is not the test either, a small framework still dictates the structure.

**12. B** — *Active Record as an ORM.* Active Record is Rails' Object-Relational Mapping layer: each model class corresponds to a database table and each object to a row, so you work with objects instead of writing SQL.

The generated admin panel is Django's admin interface; template engines such as EJS and Handlebars render views, which is a separate layer; the ordered pipeline describes Express middleware.
