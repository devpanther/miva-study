# CSC_106 — Week 4 Retention Set

*Introduction to Web Technologies · Styling HTML Elements With CSS · sit this seven days after the lecture.*

## Multiple choice (12)

**1.** You must style only the `<p>` elements that sit inside an `<article>`, leaving every other paragraph alone. Which rule does it?

a. `article, p { font-weight: bold; }`
b. `article.p { font-weight: bold; }`
c. `article p { font-weight: bold; }`
d. `p article { font-weight: bold; }`

**2.** What does this render?

```css
* { margin: 0; padding: 0; }
```

a. Every element on the page loses its margins and padding.
b. Only elements with no class or ID lose their margins and padding.
c. Nothing — `*` is not a valid selector.
d. Only the `<body>` element loses its margins and padding.

**3.** A `<div>` is styled `width: 200px; height: 100px; padding: 20px; border: 2px solid; margin: 10px;`. What total width does it occupy?

a. 200px
b. 244px
c. 248px
d. 264px

**4.** Which selector targets the single element written as `<div id="header">`?

a. `.header`
b. `#header`
c. `div.header`
d. `header`

**5.** Which property distributes flex items along the **main** axis of a flex container?

a. `justify-content`
b. `align-items`
c. `align-self`
d. `flex-wrap`

**6.** A student wants headings to sit side by side yet still accept an explicit `width` and `height`. Which `display` value is correct?

a. `block`
b. `inline`
c. `inline-block`
d. `flex`

**7.** What is wrong with this rule?

```css
.item { flex: auto 1 0; }
```

a. Nothing — the shorthand accepts any order.
b. The `flex` shorthand order is `flex-grow flex-shrink flex-basis`, so it should read `flex: 1 0 auto;`.
c. `flex` is a container property and cannot be set on an item.
d. `auto` is not a legal `flex-basis` value.

**8.** Which rule reduces `<h1>` text to 18 pixels only when the viewport is 768 pixels or narrower?

a. `@media (min-width: 768px) { h1 { font-size: 18px; } }`
b. `@media screen 768px { h1 { font-size: 18px; } }`
c. `h1 { max-width: 768px; font-size: 18px; }`
d. `@media (max-width: 768px) { h1 { font-size: 18px; } }`

**9.** Which property changes the capitalisation of text to all capitals?

a. `font-weight: uppercase;`
b. `text-decoration: uppercase;`
c. `text-transform: uppercase;`
d. `letter-spacing: uppercase;`

**10.** In the CSS Box Model, which region lies between the content and the border?

a. Padding
b. Margin
c. Outline
d. Border-box

**11.** All items in a flex container are set to `align-items: center`, but `.item` must sit at the top of the cross axis. Which declaration on `.item` achieves that?

a. `justify-content: flex-start;`
b. `align-items: flex-start;`
c. `float: top;`
d. `align-self: flex-start;`

**12.** What does this declaration mean?

```css
body { font-family: Arial, Helvetica, sans-serif; }
```

a. All three fonts are applied together, blended by the browser.
b. Arial is used; if it is unavailable Helvetica is used; if that is unavailable a generic sans-serif font is used.
c. The browser picks whichever of the three loads fastest.
d. `sans-serif` overrides the other two because it is listed last.

## Short answer (3)

**13.** Write a CSS rule using a class selector that changes the background colour of all buttons on a webpage to green. The class name is `btn-green`.

**14.** Name the four components of the CSS Box Model in order from innermost to outermost, and state in one sentence how the total width of an element is calculated.

**15.** For a flex container, name the property that sets the direction of the main axis and list its four values; then name the property that lets items spill onto a new line and give the value that enables it.

## Answers

**1. c** — `article p` is the descendant selector: a space means "`<p>` anywhere inside `<article>`"; the comma in (a) would style all articles *and* all paragraphs.

**2. a** — `*` is the universal selector and targets every element on the page, which is why its use should be limited.

**3. d** — 200 (content) + 40 (left+right padding) + 4 (left+right border) + 20 (left+right margin) = 264px.

**4. b** — the ID selector uses `#` followed by the unique `id` value; `.` would match a class instead.

**5. a** — `justify-content` works on the main axis; `align-items`/`align-self` work on the cross axis.

**6. c** — `inline-block` elements behave like inline elements but can have width and height set.

**7. b** — the shorthand takes `flex-grow`, `flex-shrink` and `flex-basis` in that order.

**8. d** — `max-width: 768px` in a media query means "768 pixels or less"; `min-width` would mean 768px and wider.

**9. c** — `text-transform` changes capitalisation (`uppercase`, `lowercase`, `capitalize`); `text-decoration` only draws underlines, overlines and line-throughs.

**10. a** — padding is the space between the content and the element's border; margin lies outside the border.

**11. d** — `align-self` overrides `align-items` for that individual item along the cross axis.

**12. b** — `font-family` takes a prioritised list, falling back down the list until an available font is found.

**13.** `.btn-green { background-color: green; }` — a class selector is a dot plus the class name, and `background-color` sets the background.

**14.** Content, padding, border, margin — total width = content width + left and right padding + left and right border + left and right margin.

**15.** `flex-direction`, with values `row` (default), `row-reverse`, `column` and `column-reverse`; wrapping is controlled by `flex-wrap`, enabled with `flex-wrap: wrap` (default is `nowrap`, and `wrap-reverse` wraps in reverse order).
