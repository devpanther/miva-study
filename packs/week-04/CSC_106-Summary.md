# CSC_106 — Week 4 Summary

*Introduction to Web Technologies · Week 4 (28 Sep – 4 Oct 2026) · Topic: Cascading Style Sheets (CSS)*

## The 8 most examinable things this week

1. **CSS separates content from presentation**: HTML holds the structure/content, CSS controls how it looks — colour, layout, spacing — without touching the markup.
2. **The five selector types named**: type/element (`p`), class (`.button`), ID (`#header`), universal (`*`), and descendant (`article p`).
3. **Property categories**: colour (`color`, `background-color`, `border-color`), typography (`font-family`, `font-size`, `font-weight`), layout (`width`/`height`, `margin`/`padding`, `display`), positioning (`position`, `top`/`right`/`bottom`/`left`), background (`background-image`, `background-repeat`, `background-size`).
4. **The box model, innermost to outermost**: content → padding → border → margin. The total width/height an element occupies is content + padding (both sides) + border (both sides) + margin (both sides) — practise the arithmetic.
5. **`display` controls flow**: `block` (own line, full parent width — `<div>`, `<p>`, `<h1>`), `inline` (only as wide as its content, no line break — `<span>`, `<a>`, `<strong>`), `inline-block` (inline placement, but width/height can be set).
6. **Flexbox vocabulary**: flex *container* (`display: flex`) holds flex *items*; the **main axis** runs in the `flex-direction` (default `row`, left→right); the **cross axis** is perpendicular to it. `justify-content` positions items along the main axis; `align-items`/`align-self` position them along the cross axis.
7. **Responsive typography**: relative units — `em`/`%` (scale off the parent element's font size) and `vw` (scale off viewport width) — plus `@media` queries, which swap in different rules once the viewport crosses a given width.
8. **Best practices named**: meaningful class/ID names, group related properties together, prefer external CSS files over inline styles for consistency across a site, test across different browsers.

## Selectors

```css
p { color: blue; }                        /* type selector — every <p> */
.button { background-color: #FF5733; }     /* class selector — every element with class="button" */
#header { font-size: 24px; }               /* ID selector — the one element with id="header" */
* { margin: 0; padding: 0; }               /* universal selector — every element; use sparingly */
article p { font-weight: bold; }           /* descendant selector — <p> elements inside an <article> */
```

Selectors and properties combine to target precisely: `.container .feature { ... }` styles elements with class `feature` that sit inside an element with class `container`.

## The box model

```css
.box {
  width: 200px;
  padding: 20px;   /* 20px each side */
  border: 2px solid #000;   /* 2px each side */
  margin: 10px;     /* 10px each side */
}
```

Total rendered width = content + padding (left+right) + border (left+right) + margin (left+right):
`200 + (20+20) + (2+2) + (10+10) = 264px`. Height is computed the same way from `height`, top/bottom padding, top/bottom border, and top/bottom margin.

## Layout: display, float, Flexbox, Grid

- `float: left` / `float: right` — pulls an element to one side so other content (e.g. text) flows around it; the classic technique for images-with-wrapped-text or simple multi-column layouts, pre-dating Flexbox/Grid.
- **Flexbox** — one-dimensional layout for distributing/aligning items along a single axis, even when item sizes are unknown:
  ```css
  .container {
    display: flex;
    flex-direction: row;        /* row (default) | row-reverse | column | column-reverse */
    justify-content: space-between;   /* main-axis distribution */
    align-items: center;              /* cross-axis alignment */
    flex-wrap: wrap;                  /* allow items to wrap to a new line */
  }
  .item { flex: 1 0 auto; }           /* grow shrink basis, shorthand */
  ```
- **CSS Grid** — two-dimensional layout (rows *and* columns) for grid-based designs:
  ```css
  .grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }
  ```

## Typography and responsive units

```css
h1 {
  font-family: "Arial", "Helvetica", sans-serif;  /* fallback list, tried in order */
  font-size: 24px;                 /* px, em, % ... */
  font-weight: bold;               /* normal | bold | 100–900 */
  text-align: center;
  line-height: 1.5;                /* space between lines, ×font-size */
  letter-spacing: 1px;             /* space between characters */
  text-transform: uppercase;
}

@media (max-width: 768px) {
  h1 { font-size: 18px; }          /* applies once viewport width drops to 768px or less */
}
```

Fluid typography sizes off the viewport directly (`font-size: 4vw`); `em`/`%` size off the parent element's font size, letting type scale consistently through nested containers.

## Commonly confused

- **Class vs ID selector** — a class (`.name`, dot) can be applied to any number of elements and reused freely; an ID (`#name`, hash) must be unique to a single element on the page.
- **`display: block` vs `inline` vs `inline-block`** — block starts a new line and fills the parent's width; inline stays in the text flow and ignores width/height; inline-block stays in the flow *and* accepts width/height.
- **Padding vs margin** — padding is space *inside* the border, between it and the content; margin is space *outside* the border, between the element and its neighbours.
- **`justify-content` vs `align-items`** — `justify-content` positions flex items along the **main** axis (the `flex-direction`); `align-items` positions them along the **cross** axis (perpendicular to it). Swapping `flex-direction: column` swaps which axis is which.
- **`em` vs `vw`** — `em` scales relative to the parent element's font size (compounding through nested elements); `vw` scales relative to the viewport's width, independent of any parent.
- **Float vs Flexbox/Grid** — float is a one-off technique for wrapping content around a single element; Flexbox/Grid are dedicated layout systems for arranging a whole container's items and are generally preferred for new layouts.
- **Universal selector reach** — `*` matches *every* element on the page at once, so a rule like `* { margin: 0; }` can silently wipe out spacing you meant to keep elsewhere; the source flags it as one to use sparingly.
