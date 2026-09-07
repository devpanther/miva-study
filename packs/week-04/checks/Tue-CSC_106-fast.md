# Tuesday — CSC_106 fast-hour check

*CSS in practice: selectors, the box model, display, Flexbox and media queries.*
*12 questions, straight after the hour. Score out of 12.*

**1.** ```css
.card {
  width: 240px;
  padding: 12px;
  border: 4px solid #333;
  margin: 8px;
}
```
How much horizontal space does one .card take up, including its margin?
A. 272px
B. 288px
C. 264px
D. 240px

**2.** ```css
.box {
  width: 100px;
  padding: 10px;
  margin: 10px;
  background-color: yellow;
}
```
How wide is the yellow area on screen?
A. 120px
B. 140px
C. 100px
D. 110px

**3.** ```html
<div class="container"><p class="feature">A</p></div>
<p class="feature">B</p>
<section class="container"><p class="feature">C</p></section>
```
```css
div.container .feature { color: red; }
```
Which letters turn red?
A. A and C
B. A, B and C
C. A only
D. B only

**4.** ```html
<p class="note warn">X</p>
<div class="note"><p class="warn">Y</p></div>
```
```css
.note.warn { color: red; }
```
Which text turns red?
A. Y only
B. X and Y
C. Neither
D. X only

**5.** ```css
.stack {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 300px;
}
```
Three short items sit inside .stack. Where do they end up?
A. Packed at the right
B. Packed at the bottom
C. Packed at the top
D. Packed at the left

**6.** ```css
.row { display: flex; width: 400px; }
.a { flex: 1 1 0; }
.b { flex: 3 1 0; }
```
A .row holds one .a and one .b and nothing else. How wide does each become?
A. a = 200px, b = 200px
B. a = 300px, b = 100px
C. a = 100px, b = 300px
D. a = 133px, b = 267px

**7.** ```css
h1 { font-size: 32px; }
@media (max-width: 768px) {
  h1 { font-size: 18px; }
}
```
What size is the h1 on a 1024px-wide laptop screen, and on a 375px-wide phone?
A. 18px on the laptop, 32px on the phone
B. 18px on both
C. 32px on the laptop, 18px on the phone
D. 32px on both

**8.** ```css
.container { font-size: 20px; }
.container p { font-size: 1.2em; }
```
What is the computed font size of a p inside .container?
A. 12px
B. 20px
C. 1.2px
D. 24px

**9.** ```css
body { font-family: "Gill Sans", Verdana, sans-serif; }
```
The user's computer has Verdana and Arial installed but not Gill Sans. Which font does the browser use for body text?
A. Verdana
B. Gill Sans
C. Arial
D. Gill Sans and Verdana blended

**10.** ```html
<article><p>One</p></article>
<p>Two</p>
<article><h2>Three</h2></article>
```
```css
article, p { color: red; }
```
Which text turns red?
A. One only
B. One, Two and Three
C. One and Two
D. Two only

**11.** How does CSS Grid differ from Flexbox?
A. Grid lays out rows and columns at once; Flexbox distributes items along one axis
B. Grid is for text; Flexbox is for images
C. Grid only works inside a media query; Flexbox works anywhere
D. Grid positions items with float; Flexbox uses margins

**12.** What can an inline-block element do that an inline element cannot?
A. Start on a new line and fill the parent's width
B. Hold text
C. Be styled by a class selector
D. Accept width and height while staying on the same line

---

## Answers

**1. B** — *Total width from the box model.* Total width = content + left and right padding + left and right border + left and right margin = 240 + 24 + 8 + 16 = 288px.

272px leaves out the margin; 264px counts each of padding, border and margin once instead of on both sides; 240px is the content width alone.

**2. A** — *Padding takes the background, margin does not.* The background fills the content and padding but not the margin, which is transparent space outside the border: 100 + 10 + 10 = 120px of yellow.

140px wrongly paints the margin too; 100px forgets that padding takes the background; 110px adds the padding on one side only.

**3. C** — *Combining a type, a class and a descendant selector.* div.container matches only a div carrying class container; the space then selects descendants with class feature inside it. A is inside such a div. C is inside a section, not a div, and B is not inside any container.

A and C ignores the div type part of the selector; A, B and C reads the rule as if it were plain .feature; B only inverts the descendant requirement.

**4. D** — *Two classes on one element versus a descendant selector.* With no space between them, .note.warn means one element that carries both classes: the first paragraph, X. With a space, .note .warn would instead mean a .warn inside a .note, which is Y.

Y only is the descendant reading; X and Y assumes the rule matches either class; Neither assumes the selector is invalid.

**5. B** — *justify-content follows the main axis set by flex-direction.* justify-content works along the main axis. flex-direction: column turns the main axis vertical, running top to bottom, so flex-end is the bottom of the 300px container.

Right is flex-end for the default row direction; left is flex-start for row; top is flex-start for column.

**6. C** — *Sharing free space with flex-grow.* The shorthand is grow, shrink, basis. Both bases are 0, so all 400px is free space, shared in the ratio of the grow values 1 : 3: a gets 400 × 1/4 = 100px and b gets 400 × 3/4 = 300px.

200 and 200 ignores the grow values; 300 and 100 swaps them; 133 and 267 splits in the ratio 1 : 2.

**7. C** — *Applying a max-width media query.* max-width: 768px applies the inner rule only when the viewport is 768px or narrower. At 1024px the query does not match, so the base 32px stands; at 375px it matches and overrides to 18px.

Swapped sizes read max-width as a minimum; 18px on both assumes the media rule always applies; 32px on both assumes it never does.

**8. D** — *em units relative to the parent font size.* em is relative to the parent element's font size: 1.2 × 20px = 24px.

12px is 1.2 × 10 as if the parent were 10px; 20px ignores the multiplier; 1.2px treats em as if it were px.

**9. A** — *font-family fallback list.* font-family is a prioritised list: the browser tries Gill Sans, finds it missing, and moves to the next entry, Verdana, which is installed, so it stops there.

Gill Sans is not installed; Arial would only be a candidate if the browser reached the generic sans-serif entry, but Verdana is found first; fonts are never blended, one is chosen.

**10. B** — *Grouping selectors with a comma versus a descendant selector.* A comma groups selectors: the rule applies to every article and every p. Both articles are red, so their contents One and Three inherit it, and the paragraph Two is matched directly.

One only is what the descendant selector article p gives; One and Two forgets that the second article is also matched; Two only ignores the article part.

**11. A** — *CSS Grid versus Flexbox.* CSS Grid is a two-dimensional system with precise control over rows and columns together, suited to magazine-style layouts. Flexbox distributes space and aligns items along a single main axis, with the cross axis for alignment.

Neither is tied to a content type; neither depends on media queries; float and margins are older layout techniques, not what Grid or Flexbox use.

**12. D** — *inline versus inline-block.* inline-block flows in the line like inline content but, unlike inline, accepts an explicit width and height. Block elements are the ones that start on a new line and fill the parent width.

Starting on a new line describes block; holding text and being selectable by class are true of inline elements too.
