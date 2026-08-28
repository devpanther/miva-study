# CSC_106 — Week 4 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 5, not this week. Notes closed.*

## Multiple choice (12)

**1.**
```css
.card {
  width: 220px;
  padding: 15px;
  border: 3px solid #000;
  margin: 25px;
}
```
Using the box model as covered this week, what is the total horizontal space this `.card` occupies on the page, including its margin?
a) 220px
b) 256px
c) 306px
d) 276px

**2.**
```css
#header {
  font-size: 24px;
}
```
What distinguishes this selector from a class selector such as `.header`?
a) `#header` can match multiple elements on the page, just like `.header`
b) `#header` targets the single HTML element carrying `id="header"` — an ID must be unique per page
c) `#header` is only valid inside `<head>`
d) `#header` requires the element to also have a matching class

**3.**
```css
article p {
  font-weight: bold;
}
```
Which elements does this rule style?
a) Only `<p>` elements that are direct children of `<article>`
b) All `<p>` elements anywhere on the page, regardless of `<article>`
c) All `<p>` elements that are descendants, at any depth, of an `<article>` element
d) The `<article>` element itself, whenever it contains a `<p>`

**4.**
```css
span.highlight {
  display: block;
}
```
`<span>` is inline by default. What changes once `display: block` is applied?
a) Nothing visible changes — block is already the default for `<span>`
b) The element now takes the full width of its parent container and starts on a new line
c) The element is removed from the page flow entirely
d) The element becomes inline-block instead

**5.**
```css
* {
  margin: 0;
  padding: 0;
}
```
Why does this week's material caution that the universal selector's use should be limited?
a) It only works in older browsers
b) It cannot be combined with other selectors
c) It applies to every single element on the page, so it can unintentionally strip spacing you wanted elsewhere
d) It only affects elements that also have a class

**6.**
```css
.container {
  display: flex;
  flex-direction: column;
}
```
What is the main axis in this flex container?
a) Horizontal, left to right — the main axis is always horizontal by default
b) Vertical, top to bottom — `flex-direction: column` makes the main axis vertical
c) Diagonal, following the order items appear in the HTML
d) There is no main axis until `flex-wrap` is also set

**7.**
```css
.container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
```
This container keeps the default `flex-direction: row`. What does `align-items: flex-end` do here?
a) Aligns items along the main (horizontal) axis, pushing them to the right
b) Aligns items along the cross (vertical) axis, pushing them to the bottom of the container
c) Aligns items along the cross (vertical) axis, pushing them to the top of the container
d) Has no effect, because `justify-content` is also set

**8.**
```css
body {
  font-family: "Arial", "Helvetica", sans-serif;
}
```
If the visitor's device does not have Arial installed, what happens?
a) The text fails to render at all
b) The browser falls back to Helvetica, and if that's also unavailable, to the generic sans-serif font
c) The browser substitutes a random installed font unrelated to the list
d) CSS ignores the whole declaration and uses only the browser's own default font

**9.**
```css
p {
  line-height: 1.5;
}
```
What does this rule control?
a) The horizontal space between individual letters in the paragraph
b) The vertical space between lines of text within the paragraph, set to 1.5 times the font size
c) The space between separate `<p>` elements on the page
d) The paragraph's fixed overall height in pixels

**10.**
```css
@media (max-width: 768px) {
  h1 { font-size: 18px; }
}
```
When does the `<h1>` font size change to 18px?
a) Only when the viewport is exactly 768px wide
b) Whenever the viewport width is 768px or less
c) Whenever the viewport width is 768px or more
d) Once, the first time the page loads, and never again after that

**11.**
```css
.container p {
  font-size: 1.2em;
}
```
`1.2em` here sets the paragraph's font size to 1.2 times what?
a) The root `<html>` element's font size (that relationship describes `rem`, not `em`)
b) The parent element's font size
c) A fixed 1.2 × the browser default of 16px, regardless of any parent
d) The viewport's width

**12.** A developer wants an image positioned at the left of a block of text, with the text flowing around its right and bottom edges — the older technique covered this week, not Flexbox or Grid. Which property achieves this?
a) `display: inline-block`
b) `position: absolute`
c) `float: left`
d) `justify-content: flex-start`

## Short answer (3)

**13.** Using the rule `p { color: blue; font-size: 16px; }` as your example, define *selector*, *declaration*, *property* and *value*, and point out which part of the rule each one is.

**14.** Explain the difference between a class selector and an ID selector, with reference to how many elements each may target on a page, and give one situation where you'd choose one over the other.

**15.** Name the four components of the CSS box model in order from innermost to outermost, and state in one line what each one controls.

## Answers

**1. c** — *box model*: total width = content (220px) + padding both sides (15+15=30px) + border both sides (3+3=6px) + margin both sides (25+25=50px) = 306px. (b) drops the margin; (d) drops the padding.
**2. b** — *ID selector*: an `id` value must be unique to one element on the page, so `#header` can only ever match that single element — unlike a class, which is reusable.
**3. c** — *descendant selector*: `article p` matches every `<p>` nested anywhere inside an `<article>`, regardless of how deeply it is nested, not only direct children.
**4. b** — *`display: block`*: overriding `<span>`'s default inline display makes it behave like a block-level element — full parent width, starts on a new line.
**5. c** — *universal selector*: `*` reaches every element on the page at once, so a broad rule like resetting margin/padding can wipe out spacing elsewhere that was never meant to be touched — hence "use sparingly."
**6. b** — *flex-direction*: setting `flex-direction: column` rotates the main axis to run vertically (top to bottom); the cross axis then runs horizontally.
**7. b** — *align-items*: with the default `row` direction, the main axis is horizontal (controlled by `justify-content`) and the cross axis is vertical (controlled by `align-items`); `flex-end` pushes items to the bottom of that vertical cross axis.
**8. b** — *font-family fallback*: the browser tries each font in the list in order — Arial, then Helvetica, then the generic `sans-serif` — using the first one actually available.
**9. b** — *line-height*: it sets the vertical spacing between lines of text inside the element, here 1.5 times the element's font size; letter spacing between characters is a separate property (`letter-spacing`).
**10. b** — *media query*: `max-width: 768px` is a ceiling — the rule inside applies at 768px and at any narrower viewport width, not only at exactly 768px.
**11. b** — *em*: `em` units scale relative to the current element's parent (inherited) font size; scaling relative to the root `<html>` font size instead is what `rem` does.
**12. c** — *float*: `float: left` pulls the image to the left edge of its container and lets surrounding text wrap around its right and bottom sides — the technique this week's material describes as pre-dating Flexbox/Grid for this kind of layout.
**13.** In `p { color: blue; font-size: 16px; }`: the **selector** is `p` (it picks which elements the rule targets); `color: blue;` and `font-size: 16px;` are each a **declaration** (a property-value pair ending in a semicolon); `color` and `font-size` are the **properties** (the aspect of the element being styled); `blue` and `16px` are the **values** (what that property is set to).
**14.** A class selector (`.name`) can be applied to any number of elements on a page and reused across a whole site — the natural choice for a style you'll apply repeatedly, such as `.button`. An ID selector (`#name`) must belong to a single, unique element, since an `id` value cannot repeat on a page — appropriate for a one-off element like a page's main `#header`.
**15.** From innermost to outermost: **content** — holds the actual text/images/elements, sized by `width`/`height`; **padding** — space between the content and the border, set with the `padding-*` properties; **border** — the visible boundary around the padding and content, set with `border-width`/`border-style`/`border-color`; **margin** — space outside the border that creates gaps between this element and its neighbours, set with the `margin-*` properties.
