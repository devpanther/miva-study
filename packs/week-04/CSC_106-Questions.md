# CSC_106 — Week 4 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 5, not this week. Notes closed.*

## Section A - Multiple choice (12)

**1.** What is the fundamental purpose of CSS?
a) To store and exchange structured data
b) To separate content (HTML) from presentation, controlling layout and styling
c) To add behaviour and interactivity to a page
d) To transfer web pages between client and server

**2.** In the rule `h1 { color: navy; }`, what is `color: navy;` called?
a) The selector  b) A declaration  c) The declaration block  d) An attribute

**3.** Which rule changes the background colour of all buttons with class `btn-green` to green?
a) `#btn-green { background-color: green; }`
b) `btn-green { background-color: green; }`
c) `.btn-green { background-color: green; }`
d) `.btn-green { color: green; }`

**4.** Given this HTML and CSS, what colour is the paragraph?

```html
<p id="intro" class="text">Welcome</p>
```
```css
p      { color: black; }
.text  { color: teal; }
#intro { color: navy; }
```
a) black  b) teal  c) navy  d) The browser default

**5.** What colour is the paragraph text here?

```css
p { color: green; }
p { color: orange; }
```
a) green  b) orange  c) Neither — the conflict cancels both  d) A blend of the two

**6.** `styles.css` contains `#title { color: green; }` and the page contains `<h1 id="title" style="color: purple;">Hi</h1>`. What colour is the heading?
a) green  b) purple  c) black  d) Undefined behaviour

**7.** What is wrong with this rule?

```css
.title {
  color: red
  font-size: 20px;
}
```
a) Nothing — it is valid
b) A class selector cannot set two properties
c) The semicolon after `color: red` is missing, so the declaration is invalid
d) `font-size` must be written before `color`

**8.** A `<div>` has `width: 300px; padding: 10px; border: 5px solid black; margin: 15px;`. What is its total width on the page?
a) 300px  b) 330px  c) 360px  d) 390px

**9.** What does the selector `article p` target?
a) All `<article>` and all `<p>` elements
b) Only `<p>` elements that are descendants of an `<article>` element
c) Only `<article>` elements that contain a `<p>`
d) The element with id "article" and class "p"

**10.** Which pair of statements is correct?
a) `<div>` is inline by default; `<span>` is block by default
b) `<div>` is block by default; `<span>` is inline by default
c) Both are block by default
d) Both are inline-block by default

**11.** Given `p { font-family: Arial, Helvetica, sans-serif; }` on a machine where Arial is not installed but Helvetica is, which font is used?
a) Arial  b) Helvetica  c) A generic sans-serif  d) The browser's default serif font

**12.** Which property distributes flex items along the **main** axis of a flex container?
a) `align-items`  b) `align-self`  c) `justify-content`  d) `flex-wrap`

## Section B - Short answer (3)

**13.** Name the five CSS selector types covered in the lecture, write one example of each, and say in a phrase what each targets.

**14.** List the four components of the CSS box model from innermost to outermost, define padding and margin, and calculate the total width of an element with `width: 200px; padding: 20px; border: 2px solid blue; margin: 10px;` showing your working.

**15.** State the three ways CSS can be attached to an HTML document, give the syntax of each in one line, say which the lecture recommends prioritising and why, and state which one wins when all three set the same property on the same element.

## Answers

**1. b** — *purpose of CSS*: Cascading Style Sheets is a styling language that controls presentation and layout, separating content (HTML) from presentation. Data exchange is XML, behaviour is JavaScript, transfer is HTTP.
**2. b** — *rule anatomy*: `h1` is the selector, `{ … }` is the declaration block, and each `property: value;` inside it is a declaration. Every declaration ends with a semicolon.
**3. c** — *class selector*: a class is selected with a leading dot. `#` would be an id, no prefix would be a type selector looking for a `<btn-green>` tag, and `color` sets text colour, not background.
**4. c** — *specificity*: ID (100) beats class (10) beats element (1), regardless of the order they are written in. The id rule wins, so navy.
**5. b** — *source order*: with equal specificity the later rule wins, so the paragraph is orange. Order is only consulted after specificity ties.
**6. b** — *inline CSS*: an inline `style` attribute has the highest specificity of the three attachment methods and overrides both the external and internal style sheets (only `!important` beats it).
**7. c** — *declaration syntax*: each declaration must be terminated by a semicolon. Without it the browser cannot parse `color: red font-size: 20px` and discards the declaration.
**8. c** — *box model total width*: 300 (content) + 20 (10 left + 10 right padding) + 10 (5 + 5 border) + 30 (15 + 15 margin) = **360px**.
**9. b** — *descendant selector*: a space between two selectors means "inside". `article, p` (with a comma) would be the grouping selector meaning "all articles and all paragraphs".
**10. b** — *default display*: `<div>` is a block element (full width of its parent, starts a new line); `<span>` is inline (only as wide as its content, no line break). Same styling power, different flow.
**11. b** — *font-family fallback*: the list is a priority order; the browser uses the first available font, so Helvetica. `sans-serif` is the generic last resort.
**12. c** — *flex axes*: `justify-content` works along the main axis (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`); `align-items` works along the cross axis; `align-self` overrides `align-items` for one item.
**13.** *Selector types*: **Type/element** — `p { color: blue; }`, targets all elements with that tag name. **Class** — `.button { background-color: #FF5733; }`, targets every element with that class attribute value. **ID** — `#header { font-size: 24px; }`, targets the single element with that unique id. **Universal** — `* { margin: 0; padding: 0; }`, targets every element on the page (use sparingly, it affects the whole document). **Descendant** — `article p { font-weight: bold; }`, targets elements nested inside a specified element.
**14.** *Box model*: innermost to outermost — **content**, **padding**, **border**, **margin**. **Padding** is the space between the content and the element's border (internal spacing); **margin** is the space outside the border, creating gaps between elements. Total width = 200 (content) + 40 (20 + 20 padding) + 4 (2 + 2 border) + 20 (10 + 10 margin) = **264px**. (Total height would be 100 + 40 + 4 + 20 = 164px for a 100px content height.)
**15.** *Attaching CSS*: **Inline** — `<p style="color: blue;">`, styles on the element itself. **Internal** — `<style> p { color: blue; } </style>` inside `<head>`, affecting that one page. **External** — a separate `.css` file linked with `<link rel="stylesheet" href="styles.css">` in `<head>`. The lecture's best practice is to **prioritise external CSS files**, because one file gives consistent styling across the whole site, reduces redundancy and simplifies maintenance. If all three set the same property, **inline wins** (highest specificity).
