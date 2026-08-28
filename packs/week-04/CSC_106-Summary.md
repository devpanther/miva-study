# CSC_106 — Week 4 Summary

*Introduction to Web Technologies · Week 4 (28 Sep–4 Oct 2026) · Topic: Styling HTML elements with Cascading Style Sheets (CSS)*

## The 8 most examinable things this week

1. **CSS separates content (HTML) from presentation (styling).** That one sentence is the definition the lecture opens and closes with, and it is the most likely one-line exam answer. CSS = **Cascading Style Sheets**, a *styling language* controlling presentation and layout — not a markup language, not a programming language.
2. **Rule syntax**: `selector { property: value; }`. The selector picks the elements; the **declaration block** is in braces; each **declaration** is `property: value` closed with a **semicolon**. Missing colon, missing semicolon or missing brace is the classic "what is wrong with this rule?" question.
3. **The five selectors the lecture names**: **type/element**, **class** (`.name`), **ID** (`#name`), **universal** (`*`), **descendant** (`article p`). Know the punctuation cold — **`.` for class, `#` for id** — and that `*` should be used sparingly because it affects the whole document.
4. **The three ways to attach CSS**: **inline** (`style=""` on the tag), **internal** (`<style>` in `<head>`), **external** (`.css` file linked with `<link>`). Best practice in the slides: **prioritise external CSS** for consistency across a site.
5. **Specificity order (which rule wins)**: inline style > ID > class > element; a tie is broken by **source order — the last rule written wins**. `!important` beats everything.
6. **The box model has exactly four components: content, padding, border, margin** — inside out, in that order. Padding is *inside* the border, margin is *outside* it.
7. **Total width = content + left/right padding + left/right border + left/right margin.** The worked slide example: 200 + 40 + 4 + 20 = **264px** wide; 100 + 40 + 4 + 20 = **164px** high.
8. **display values**: `block` (full width of parent, starts a new line — `<div>`, `<p>`, `<h1>`), `inline` (only as wide as needed, no new line — `<span>`, `<a>`, `<strong>`), `inline-block` (inline flow *but* width/height can be set), `flex` (makes a flex container).

## Rule syntax and the three ways to attach CSS

```css
p {                  /* selector */
  color: blue;       /* declaration: property: value; */
  font-size: 16px;
}                    /* declaration block */
```

```html
<!-- 1. Inline: on the element itself. Highest specificity, worst for maintenance. -->
<p style="color: blue;">Hello</p>

<!-- 2. Internal: in a <style> block inside <head>. Affects one page. -->
<head><style> p { color: blue; } </style></head>

<!-- 3. External: a separate .css file linked from <head>. Preferred. -->
<head><link rel="stylesheet" href="styles.css"></head>
```

If all three set the same property on the same element, **inline wins**, then internal/external decided by **specificity, then source order** (whichever the browser reads last).

## Selectors

```css
p            { color: blue; }               /* type/element: all <p> */
.button      { background-color: #FF5733; } /* class: every element with class="button" */
#header      { font-size: 24px; }           /* ID: the one element with id="header" */
*            { margin: 0; padding: 0; }     /* universal: every element - use sparingly */
article p    { font-weight: bold; }         /* descendant: <p> inside <article> */
h1, h2, h3   { display: inline-block; }     /* grouping: one rule, several selectors */
a:hover      { color: red; }                /* pseudo-class: element in a given state */

/* Combining selectors and properties (the slide example) */
div.container .feature { color: #333; font-size: 18px; padding: 10px; }
```

`div.container .feature` selects every element with class **feature** that is a descendant of a `<div>` with class **container**.

## Cascade, specificity and inheritance

- **Cascade** = the order the browser resolves conflicts: **importance** (`!important`) → **specificity** → **source order**.
- **Specificity weights**: inline style **1000** > ID **100** > class / attribute / pseudo-class **10** > element / pseudo-element **1**; universal `*` = **0**. So `#header { color: red; }` beats `.title { color: blue; }` even if `.title` comes later in the file.
- **Equal specificity → the later rule wins.** Two `p { color: … }` rules: the second one applies.
- **Inheritance**: text-related properties (`color`, `font-family`, `font-size`, `font-weight`, `line-height`, `text-align`) pass down from parent to child; box properties (`margin`, `padding`, `border`, `width`, `height`, `background`) do **not**.

## The CSS box model

Innermost to outermost: **content → padding → border → margin**.

- **Content** — the text/image itself; sized by `width` and `height`.
- **Padding** — space *between content and border*; `padding-top/right/bottom/left`.
- **Border** — the visual boundary; `border-width`, `border-style`, `border-color`.
- **Margin** — space *outside the border*, creating gaps between elements; `margin-top/right/bottom/left`.

```css
div {
  width: 200px; height: 100px;
  padding: 20px;              /* 20 on every side */
  border: 2px solid blue;     /* width style colour */
  margin: 10px;               /* 10 on every side */
}
```

**Total width** = 200 (content) + 40 (20 left + 20 right padding) + 4 (2 + 2 border) + 20 (10 + 10 margin) = **264px**.
**Total height** = 100 + 40 + 4 + 20 = **164px**.

## The property families

```css
/* Colour */      color: #1a73e8; background-color: green; border-color: red;
/* Typography */  font-family: Arial, Helvetica, sans-serif; font-size: 24px; font-weight: bold;
/* Text */        text-decoration: underline; text-align: center; line-height: 1.5;
                  letter-spacing: 2px; text-shadow: 1px 1px 2px grey; text-transform: uppercase;
/* Background */  background-image: url("bg.jpg"); background-repeat: no-repeat; background-size: cover;
/* Box */         width: 300px; height: 150px; margin: 10px; padding: 10px; border: 2px solid blue;
/* Display */     display: block | inline | inline-block | flex;
/* Position */    position: relative; top: 10px; right: 0; bottom: 0; left: 20px;   /* also absolute */
/* Float */       img { float: left; margin-right: 20px; }  p { float: right; }
```

`font-family` takes a **prioritised list** — if Arial is unavailable the browser tries Helvetica, then the generic `sans-serif`.

## Responsive typography

- **Fluid**: relative units — `body { font-size: 2vw; }` (viewport width), or `em`/`rem` based on the parent/root font size (`.container { font-size: 1.2em; }` = 1.2× the parent).
- **Media queries**: `@media (max-width: 768px) { h1 { font-size: 18px; } }` — different styles at different screen widths.

## Flexbox and Grid

**Flexbox** (one-dimensional): make a **flex container** with `display: flex;` (or `inline-flex`); its children are **flex items**.

```css
.container { display: flex; flex-direction: row; justify-content: space-between; align-items: center; flex-wrap: wrap; }
.item      { flex: 1 0 auto; align-self: flex-start; }   /* flex-grow flex-shrink flex-basis */
```

- **Main axis** = direction set by `flex-direction` (`row` default, left→right; also `row-reverse`, `column`, `column-reverse`). **Cross axis** is perpendicular (vertical by default).
- **`justify-content`** distributes items along the **main** axis: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.
- **`align-items`** aligns along the **cross** axis: `flex-start`, `flex-end`, `center`, `baseline`, `stretch` (default). **`align-self`** overrides `align-items` for one item.
- **`flex-wrap`**: `nowrap` (default), `wrap`, `wrap-reverse`. Flex containers can be **nested**.

**CSS Grid** (two-dimensional — rows *and* columns):

```css
.grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }
```

## Best practices (straight from the slides)

Use **meaningful class and ID names**; **group related properties** together; **prioritise external CSS files**; **test in different browsers** for cross-browser compatibility.

## Commonly confused

- **`#id` vs `.class`** — `#` selects the **one** element with that unique `id`; `.` selects **every** element carrying that `class`. An id must be unique on the page; a class can repeat.
- **margin vs padding** — **padding** is *inside* the border (space between content and border); **margin** is *outside* it (gap between this element and its neighbours). Both add to total width.
- **Inline CSS vs `display: inline`** — *inline CSS* is a **place to put the styles** (the `style` attribute on a tag); *`display: inline`* is a **property value** that makes an element flow in a line without breaking. Unrelated ideas that share a word.
- **`<div>` vs `<span>`** — `<div>` is **block** by default (full width, new line); `<span>` is **inline** (only as wide as its content, no new line). Same styling power, different default display.
- **Specificity ties** — when two rules have *equal* specificity, the **later one in source order wins**; specificity is only compared first. A `#header` rule still beats a `.title` rule written after it, because specificity is checked before order.
- **`justify-content` vs `align-items`** — `justify-content` works along the **main** axis, `align-items` along the **cross** axis.
- **Flexbox vs Grid** — Flexbox is **one-dimensional** (a row *or* a column); Grid is **two-dimensional** (rows *and* columns).
- **CSS vs HTML** — HTML is the structure/content; CSS is the presentation. CSS is *not* a markup language.

*Note: every code example in this week's slide deck is a screenshot image, so the PDF text extraction contains only the prose describing each snippet, never the CSS itself. All code above is the standard form of what the slides describe. The deck also does not itself spell out the three ways to attach CSS, the specificity ordering, inheritance, or grouping and pseudo-class selectors — those are given here in their standard treatment because the objectives and exam style require them.*
