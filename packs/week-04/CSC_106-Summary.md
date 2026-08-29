# CSC_106 — Week 4

*Introduction to Web Technologies · Week 4 (28 Sep – 4 Oct 2026)*

Topic: Styling HTML Elements With CSS.

## Most likely to be examined

1. **The five selector types named by the deck** and what each targets: **type** (tag name, `p { }`), **class** (`.button { }`, matches `class="button"`), **ID** (`#header { }`, a single unique `id`), **universal** (`* { }`, all elements — use sparingly, it affects the entire document), **descendant** (`article p { }` — space between the two, selects `<p>` anywhere inside `<article>`).
2. **The CSS Box Model's four components in order, innermost outwards: content → padding → border → margin**, and the total-size calculation: total width = content width + left/right padding + left/right border + left/right margin.
3. **The worked box-model arithmetic**: a `<div>` with `width: 200px; height: 100px; padding: 20px; border: 2px solid; margin: 10px;` gives total **width 264px** (200 + 40 + 4 + 20) and total **height 164px** (100 + 40 + 4 + 20).
4. **`display` values**: `block` (fills parent width, starts a new line — `<div>`, `<p>`, `<h1>`), `inline` (takes only the width it needs, no new line — `<span>`, `<a>`, `<strong>`), `inline-block` (flows inline but width/height can be set).
5. **Flexbox vocabulary and properties**: flex container / flex item, main axis / cross axis; `display: flex` (or `inline-flex`), `flex-direction` (`row` default, `row-reverse`, `column`, `column-reverse`), `justify-content` (main axis), `align-items` / `align-self` (cross axis), `flex-wrap`, and the shorthand `flex: <flex-grow> <flex-shrink> <flex-basis>` **in that order**.
6. **Which axis a property acts on**: `justify-content` = main axis; `align-items` and `align-self` = cross axis. `align-self` overrides `align-items` for one individual item.
7. **Media query syntax** for responsive typography/layout: `@media (max-width: 768px) { h1 { font-size: 18px; } }` — applies when the viewport is 768px **or less**.
8. **Text/typography properties by effect**: `font-family` (prioritised font list), `font-size`, `font-weight` (`normal`, `bold`, 100–900), `color`, `text-decoration`, `text-align` (`left`, `center`, `right`, `justify`), `line-height`, `letter-spacing`, `text-shadow`, `text-transform` (`uppercase`, `lowercase`, `capitalize`).

## Core definitions

- **CSS (Cascading Style Sheets)**: a styling language used to control the presentation and layout of HTML documents. It **separates content (HTML) from presentation (styling)**.
- **Selectors**: patterns used to select and target HTML elements to apply styling rules; they determine which elements will be styled.
- **Properties**: once elements are selected, properties define how those elements should appear.
- **Font**: a set of characters with a specific style and design (varying in size, weight, style e.g. serif/sans-serif).
- **Typography**: the art and technique of arranging and styling text for improved readability and visual impact — font selection, size, spacing, alignment and other text-related properties.
- **Text styling**: formatting text elements — setting colours, backgrounds, text shadows, and more.
- **Responsive typography**: adjusting font sizes and layouts so text stays readable and visually pleasing on different devices and screen sizes.

## Selectors

```css
p            { color: blue; }               /* type: all <p> */
.button      { background-color: #FF5733; } /* class: class="button" */
#header      { font-size: 24px; }           /* ID: id="header" */
*            { margin: 0; padding: 0; }     /* universal: all elements */
article p    { font-weight: bold; }         /* descendant: <p> inside <article> */
```

Combining selectors and properties — all elements with class `feature` that are descendants of a `<div class="container">`:

```css
div.container .feature {
  color: #333333;
  font-size: 16px;
  margin: 10px;
}
```

## Property groups the deck names

- **Colour**: `color` (text colour), `background-color`, `border-color`.
- **Typography**: `font-family`, `font-size`, `font-weight`.
- **Layout**: `width`, `height`, `margin`, `padding`, `display`.
- **Positioning**: `position` (e.g. `relative`, `absolute`) and `top`, `right`, `bottom`, `left`.
- **Background**: `background-image`, `background-repeat`, `background-size`.

## The CSS Box Model

Four components: **content** (innermost — holds text/images; sized by `width` and `height`), **padding** (space between content and border; `padding-top/right/bottom/left`), **border** (visual boundary around padding and content; `border-width`, `border-style`, `border-color`), **margin** (space outside the border, creating gaps between elements; `margin-top/right/bottom/left`).

```css
div  { width: 200px; height: 100px; }   /* content area */
p    { padding: 10px; }                 /* 10px on all four sides */
img  { border: 2px solid blue; }        /* 2-pixel solid blue border */
li   { margin-top: 10px; margin-bottom: 10px; }
```

Total size example:

```css
div {
  width: 200px; height: 100px;
  padding: 20px;
  border: 2px solid;
  margin: 10px;
}
/* Width : 200 + 40 (padding) + 4 (border) + 20 (margin) = 264px
   Height: 100 + 40 (padding) + 4 (border) + 20 (margin) = 164px */
```

## Layout techniques: display, float, Flexbox, Grid

```css
h1, h2, h3 { display: inline-block; margin: 20px; }  /* side by side */

img { float: left;  margin-right: 20px; }
p   { float: right; }

.container { display: flex; justify-content: space-between; }

.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
```

- `float: left | right` makes elements float within their containing element — used for multi-column layouts or aligning elements side by side.
- **Flexbox (Flexible Box Layout)**: distributes space and aligns elements in a container even when item sizes are unknown or dynamic; a more efficient way to design complex layouts.
- **CSS Grid Layout**: a **two-dimensional** grid system giving precise control over rows and columns (magazine-style and responsive designs).

## Text styling and typography

```css
body            { font-family: Arial, Helvetica, sans-serif; }
h1              { font-size: 24px; }
p               { font-weight: bold; }
a               { color: #1E90FF; }
.link           { text-decoration: underline; }
.centered-text  { text-align: center; }
p               { line-height: 1.5; }
h2              { letter-spacing: 2px; }
.title          { text-shadow: 1px 1px 2px #888888; }
.uppercase-text { text-transform: uppercase; }
```

`font-family` takes a **prioritised list**: if Arial is unavailable the browser uses Helvetica, and if that is unavailable it falls back to the generic `sans-serif`.

### Responsive typography

```css
/* Fluid typography — font size follows the viewport width */
html { font-size: 2vw; }

/* Media query — viewport 768px or less */
@media (max-width: 768px) {
  h1 { font-size: 18px; }
}

/* Relative units — 1.2 times the parent element's font size */
.container p { font-size: 1.2em; }
```

Units named: `px`, `em`, `rem`, `%`, `vw`. `em`/`rem` base font sizes on the parent element's font size, making typography consistent and scalable.

## Flexbox in detail

- **Flex container**: an HTML element containing one or more flex items; it defines the main and cross axes along which items are arranged.
- **Flex item**: an element contained within a flex container.
- **Main axis**: the primary axis items are arranged along — by default horizontal, left to right.
- **Cross axis**: perpendicular to the main axis — by default vertical, top to bottom.

```css
.container { display: flex; }          /* or inline-flex */
.row       { flex-direction: row; }    /* default: left → right */
.col       { flex-direction: column; } /* top → bottom */
```

`flex-direction` values: `row` (default), `row-reverse` (right → left), `column` (top → bottom), `column-reverse` (bottom → top).

`justify-content` (main axis): `flex-start`, `flex-end`, `center`, `space-between` (evenly distributed with space between them), `space-around` (space around them), `space-evenly` (equal space around them).

`align-items` (cross axis): `flex-start` (top), `flex-end` (bottom), `center`, `baseline` (baselines align), `stretch` (default — items stretch to fill the container).

`align-self` overrides `align-items` for one individual item:

```css
.container { display: flex; align-items: center; }
.item      { align-self: flex-start; }   /* this item only, at the top */
```

**Flex properties**: `flex-grow` (how much an item grows relative to the others when there is extra space along the main axis), `flex-shrink` (how much it shrinks when there is not enough space), `flex-basis` (initial size of a flex item before extra space is distributed). Shorthand order is grow, shrink, basis:

```css
.item { flex: 1 0 auto; }  /* grows, will not shrink, initial size from content */
```

**Nested flex containers**: a flex container may sit inside another; each nested container behaves as an individual flex item within its parent container.

```css
.outer-container { display: flex; }
.inner-container { display: flex; }
```

**Wrapping** — `flex-wrap`: `nowrap` (default, single line), `wrap` (items wrap to the next line when they exceed the container's width), `wrap-reverse` (wrap to the next line in reverse order).

**Responsive design with Flexbox**:

```css
@media (max-width: 768px) {
  .container { flex-direction: column; align-items: center; }
}
```

## Best practices

- Use meaningful class and ID names to enhance code readability.
- Group related properties together for easier maintenance.
- Prioritise **external CSS files** for consistent styling across a website.
- Test CSS in different browsers to ensure cross-browser compatibility.

## Commonly confused

- **Class vs ID selector**: `.name` matches any number of elements carrying that class; `#name` targets a **single** element with that unique ID. Test: dot or hash, and is the value unique on the page?
- **`.a .b` vs `.a.b`**: with a space it is a **descendant** selector (`.b` inside `.a`); with no space it means one element carrying **both** classes.
- **Padding vs margin**: padding is *inside* the border (between content and border); margin is *outside* the border (gap to other elements). Test: does the element's background extend into it? Padding yes, margin no.
- **`justify-content` vs `align-items`**: `justify-content` distributes along the **main** axis, `align-items` aligns along the **cross** axis. With `flex-direction: column` the main axis becomes vertical, so the two swap visual direction.
- **`align-items` vs `align-self`**: `align-items` is set on the container for all items; `align-self` is set on one item and overrides it.
- **`inline` vs `inline-block`**: both stay on the same line, but only `inline-block` accepts `width` and `height`.
- **`display: flex` vs `display: grid`**: Flexbox distributes items along one axis; Grid is a **two-dimensional** rows-and-columns system.
- **`flex-direction` vs `flex-wrap`**: direction sets which way items run; wrap decides whether they spill onto a new line.
- **`flex: grow shrink basis` order**: grow first, then shrink, then basis.
- **`font-weight` vs `font-family`**: boldness is `font-weight` (`normal`, `bold`, 100–900); the typeface list is `font-family`.
- **`text-decoration` vs `text-transform`**: `text-decoration` draws underlines, overlines and line-throughs; `text-transform` changes capitalisation (`uppercase`, `lowercase`, `capitalize`).
- **`em`/`rem` vs `vw`**: `em`/`rem` scale from a parent/root font size; `vw` scales from the viewport width (fluid typography).
