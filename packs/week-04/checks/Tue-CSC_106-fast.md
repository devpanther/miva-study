# Tuesday — CSC_106 fast-hour check

*CSS selectors, the box model, display values, media queries and Flexbox axes.*
*Five questions, straight after the fast hour. Recall only. Score out of 5.*

**1.** Which selector targets one unique element by its id?
A. .header
B. #header
C. *
D. article p

**2.** In the box model, which layer sits between the content and the border?
A. Padding
B. Margin
C. Border
D. Content

**3.** Which display value flows inline but still accepts width and height?
A. block
B. inline
C. inline-block
D. flex

**4.** @media (max-width: 768px) applies when the viewport is what?
A. Exactly 768px
B. 768px or less
C. 768px or more
D. More than 768px

**5.** Which property aligns flex items along the cross axis?
A. justify-content
B. flex-direction
C. flex-wrap
D. align-items

## Answers

**1. B** — A hash marks an ID selector and matches the single element with that id. A dot is a class selector, the star is universal, and a space between two names is a descendant selector.

**2. A** — Padding is the space inside the border, so the element's background extends into it. Margin lies outside the border and creates the gap to other elements.

**3. C** — inline-block stays on the same line yet takes width and height; plain inline ignores both. block fills the parent width and starts a new line.

**4. B** — max-width sets a ceiling, so the rules apply at 768px and anything narrower. A min-width query would be the one that applies at 768px and above.

**5. D** — align-items works on the cross axis, and align-self overrides it for one item. justify-content works on the main axis, flex-direction sets which axis is which, and flex-wrap decides line spilling.
