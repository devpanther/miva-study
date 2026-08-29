# MTH_102 — Week 11 Summary

*Elementary Mathematics II (Calculus) · Topic: Definite Integrals — Volume of Solids of Revolution · Lecturer: not named on this deck (the course's other decks name Danjuma Rose Uwanassara, MSc Mathematics)*

**Scope note:** this rewrite follows the 19-page deck slide-for-slide. The lecturer teaches exactly three formulas — **disc**, **washer**, **shell** — each stated twice (once in x, once in y), with six worked examples and three TASKs. Every single integrand in the whole deck is a **polynomial**; every antiderivative is the power rule from Week 7. She does **not** cover: the Riemann-sum or slicing derivation of the formulas, the general cross-section formula V = ∫A(x)dx, Pappus's theorem, splitting a region when the boundary changes, absolute-value radii, choosing between methods as a decision procedure, arc length, surface area, or any trigonometric, exponential or logarithmic integrand. If a question needs sin²x, e²ˣ or ln, it is not from this deck. Learn her six examples and her three TASKs cold — the TASKs are the most likely exam templates because she sets them and answers none of them.

**Notation change from Week 7.** This deck evaluates with **square brackets**, [F(x)]ₐᵇ, not the bar notation F(x)|ₐᵇ she used for the Fundamental Theorem in Week 7. Both mean F(b) − F(a). Do not be thrown by it.

## The 9 most examinable things this week

1. **Solid of revolution and axis of revolution (slide 4).** "If a region in the plane is revolved about a given line, the resulting solid is a solid of revolution, and the line is called the axis of revolution."
2. **Her four-step procedure (slide 4), in her words.** (1) Sketch the area and determine the axis of revolution — **this determines the variable of integration**. (2) Sketch the cross-section (disc, shell, washer) and determine the appropriate formula. (3) Determine the boundaries of the solid. (4) Set up the definite integral, and integrate.
3. **Disc method (slide 5).** **V = π∫ₐᵇ [R(x)]²dx** where R(x) comes from y = f(x) revolved about the **x**-axis, and **V = π∫ₐᵇ [R(y)]²dy** where R(y) comes from x = f(y) revolved about the **y**-axis.
4. **Washer method (slide 9).** "If a solid of revolution has any hollow spots in it, we use the washer method. It is of the form of a circular washer of outer radius R and inner radius r." **V = π∫ₐᵇ ([R(x)]² − [r(x)]²)dx**, and **V = π∫ₐᵇ ([R(y)]² − [r(y)]²)dy**, accordingly.
5. **The squares are subtracted; the radii are not.** π∫(R² − r²) is the area of the annulus. π∫(R − r)² is a different, always smaller, number. In Washer Example 1 the difference is 6π/55 versus 9π/220.
6. **Shell method (slide 13).** **V = 2π∫ₐᵇ x f(x)dx** "where x is the radius of revolution", and **V = 2π∫ₐᵇ y f(y)dy** "where y is the radius of revolution."
7. **π for discs and washers, 2π for shells.** The π is the area of a circle; the 2π is the circumference of the unrolled shell. There is no square in the shell integrand — radius × height, both to the first power.
8. **R is the radius, r is the inner radius, and R is always the boundary FARTHER from the axis.** Washer Example 1: on [0, 1], x² ≥ x⁵, so R(x) = x² and r(x) = x⁵. Washer Example 2: the axis is the y-axis, the far boundary is the line x = 3, so R(y) = 3 and the near boundary the parabola gives r(y) = y².
9. **Limits come from solving, not from looking.** Disc Example 2: set y² + 1 = 3 to get a = −√2, b = √2. Shell Example 1: set f(x) = 0 to get x = 0 and x = 2. Washer Example 2: set y² = 3 to get the upper limit √3.

## The disc method — her build

**Slide 5, verbatim:** "The volume of a solid of revolution is given by V = π∫ₐᵇ[R(x)]²dx where R(x) is the region bounded by y = f(x) revolved the x-axis, and V = π∫ₐᵇ[R(y)]²dy where R(y) is the region bounded by x = f(y) revolved the y-axis."

*Aside — read R as a radius, not a region.* The slide says "R(x) is the region", but in every one of her worked examples R(x) is a **length**: the distance from the axis of revolution out to the curve. In Example 1 she writes "R(x) = (−x + 1)", which is the function value, not a region. Treat R as the radius of the disc at position x. (Note also that "revolved the x-axis" is missing the word "about".)

### Example 1 (slide 6) — disc about the x-axis

**Let R be the region bounded by the curve y = f(x) = (−x + 1), the x-axis, and the lines x = 0 and x = 1. Find the volume of the solid of revolution obtained by revolving R about the x-axis.**

Solution. Using the formula V = π∫ₐᵇ[R(x)]²dx where **R(x) = (−x + 1)** over **a = 0** and **b = 1**, we have

V = π∫₀¹[(−x + 1)]²dx = π[ −(−x + 1)³/3 ]₀¹
= π( −(−1 + 1)³/3 − ( −(−0 + 1)³/3 ) ) = **π/3**

Therefore, the volume is **π/3 cubic units.**

Two things to see. First, the radius is just f(x) itself, because the axis is the x-axis, so the distance from the axis up to the curve is the y-value. Second, her antiderivative of (−x + 1)² is **−(−x + 1)³/3** — she has reversed a chain rule (raise the bracket, divide by 3, and divide again by the inner derivative −1). *Aside: the deck never teaches substitution, so if that step is uncomfortable, expand first — (1 − x)² = 1 − 2x + x², and ∫₀¹(1 − 2x + x²)dx = [x − x² + x³/3]₀¹ = 1 − 1 + 1/3 = 1/3, giving the same π/3. Both routes are legitimate; expanding uses only Week 7 tools.*

### Example 2 (slide 7) — disc in y, about the line x = 3

**Find the volume of the solid of revolution obtained by revolving the region between the parabola x = y² + 1, and the lines x = 3 about the line.**

*(The problem statement is truncated — "about the line" does not say which line. Her solution settles it: the axis is the line **x = 3**, because she takes the radius as R(y) = 3 − (y² + 1) = 2 − y². Write "about the line x = 3" when you reproduce this.)*

Solution. Setting **y² + 1 = 3**, we have **x = R(y) = 2 − y²**, so that **a = −√2** and **b = √2**. Therefore,

V = π∫₋√₂^√₂ [(2 − y²)]²dy = π∫₋√₂^√₂ (4 − 4y² + y⁴)dy
= π[ 4y − 4y³/3 + y⁵/5 ]₋√₂^√₂ = **64√2π/15**

Hence, the volume is **64√2π/15 cubic units.**

*(Misprint on the slide: the middle expression is printed as π∫[(4 − 4y² + y⁴)]²dy — with the square still attached after the bracket has already been expanded. The square must be dropped once you expand. The next line and the answer are both correct.)*

The arithmetic she does not show, worth doing yourself: (√2)³ = 2√2 and (√2)⁵ = 4√2, so at y = √2 the bracket is 4√2 − 8√2/3 + 4√2/5 = √2(60 − 40 + 12)/15 = 32√2/15. The integrand is even, so the value at −√2 is the negative of that, and the subtraction **doubles** it: 64√2/15.

### TASK (slide 8) — set by the lecturer, no answer given

**Find the volume of the solid of revolution obtained by revolving f(x) = √x, the x-axis, and the lines x = 1 and x = 4 about the x-axis.**

Solution. Disc about the x-axis, so R(x) = √x, a = 1, b = 4.
V = π∫₁⁴ [√x]²dx = π∫₁⁴ x dx = π[x²/2]₁⁴ = π(16/2 − 1/2) = **15π/2 cubic units.**

The squaring is the whole point: [√x]² = x, so the integrand collapses to a polynomial. A student who integrates √x itself gets 14π/3 and has computed nothing.

## The washer method — her build

**Slide 9, verbatim:** "If a solid of revolution has any hollow spots in it, we use the washer method. It is of the form of a circular washer of outer radius R and inner radius r. In this case, we have V = π∫ₐᵇ([R(x)]² − [r(x)]²)dx and V = π∫ₐᵇ([R(y)]² − [r(y)]²)dy, accordingly."

The washer is the disc with a hole punched through it. Its area is πR² − πr², so the π comes out front and the **squares** subtract.

### Example 1 (slide 10) — washer about the x-axis

*(The slide is headed "VOLUMES BY INTEGRATION: **DISC** METHOD". That heading is wrong — the working uses R and r and the washer formula, and it sits between the washer formula slide and Washer Example 2. Read it as **Washer Example 1**.)*

**Find the volume of the solid formed by revolving the region bounded by the graphs of y = x², y = x⁵, x = 0, and x = 1 about the x-axis.**

Solution. Here, **R(x) = x²**, and **r(x) = x⁵**, so that

V = π∫₀¹ ([x²]² − [x⁵]²)dx = π∫₀¹ (x⁴ − x¹⁰)dx
= π[ x⁵/5 − x¹¹/11 ]₀¹ = **6π/55**

Hence, the volume is **6π/55 cubic units.**

Why R = x² and not x⁵: on the interval [0, 1] every power greater than 1 shrinks the number, so x² ≥ x⁵ there. The axis is the x-axis, so distance from the axis is the y-value, and x² is the higher curve — the outer one. Note also 1/5 − 1/11 = (11 − 5)/55 = 6/55.

### Example 2 (slide 11) — washer in y, about the y-axis

**Find the volume of the solid formed by revolving the region bounded by the graphs of x = y², x = 3, and x = 0 about the y-axis.**

Solution. Here, **R(y) = 3**, and **r(y) = y²**, so that

V = π∫₀^√3 (3² − [y²]²)dy = π∫₀^√3 (9 − y⁴)dy
= π[ 9y − y⁵/5 ]₀^√3 = **36√3π/5**

Hence, the volume is **36√3π/5 cubic units.**

The arithmetic she skips: (√3)⁵ = 9√3, so the bracket at y = √3 is 9√3 − 9√3/5 = (45√3 − 9√3)/5 = 36√3/5.

R is a **constant** here, because the far boundary is a vertical line at distance 3 from the y-axis, the same distance at every height. That is normal and does not mean you have made a mistake.

*Aside on the third boundary: she lists "x = 0" as a boundary, but x = 0 is the y-axis itself, which is the axis of revolution, not a cutting edge. Her limits 0 to √3 show that the region she means is the first-quadrant half, bounded below by **y = 0**. If you took the whole region between x = y² and x = 3, y would run from −√3 to √3 and the answer would double to 72√3π/5. Use her limits.*

### TASK (slide 12) — set by the lecturer, no answer given

**Find the volume of the solid formed when the region under the curve y = x² over the interval [0, 2] is rotated about the line y = −1.**

Solution. The axis has moved off the x-axis, so every radius is a **distance from y = −1**.
Far boundary is the curve y = x²: **R(x) = x² − (−1) = x² + 1.**
Near boundary is y = 0 (the region sits on the x-axis): **r(x) = 0 − (−1) = 1.**
There is a hollow spot — the region does not touch y = −1 — so it is a washer.

V = π∫₀² ([x² + 1]² − [1]²)dx = π∫₀² (x⁴ + 2x² + 1 − 1)dx = π∫₀² (x⁴ + 2x²)dx
= π[ x⁵/5 + 2x³/3 ]₀² = π(32/5 + 16/3) = π(96 + 80)/15 = **176π/15 cubic units.**

The single move that matters: **subtract the axis before squaring.** R = x² + 1, then square. Squaring first and shifting afterwards, π∫(x⁴ + 1)dx, is a different and wrong number.

## The shell method — her build

**Slide 13, verbatim:** "The shell method is used when integrating along an axis parallel to the axis of revolution. In this case, the volume is given by V = 2π∫ₐᵇ x f(x)dx where x is the radius of revolution, and V = 2π∫ₐᵇ y f(y)dy where y is the radius of revolution."

**This sentence is wrong as printed, and her own two examples prove it.** Shell Example 1 revolves about the **y-axis** and integrates **dx**; Shell Example 2 revolves about the **x-axis** and integrates **dy**. In both cases the variable of integration runs **perpendicular** to the axis of revolution — which is exactly the opposite of what the slide says, and exactly the opposite of the disc/washer case. The reliable version, which matches everything she does: **for discs and washers you integrate along the axis of revolution; for shells you integrate perpendicular to it.** Say "perpendicular" in an exam and back it with her two examples.

Reading her formula: x is the **radius** (distance from the axis out to the strip) and f(x) is the **height** (the length of the strip). Multiply them, multiply by 2π, integrate. No squares anywhere.

### Example 1 (slide 14) — shell about the y-axis

**Find the volume of the solid obtained by rotating about the y-axis the region bounded by y = 2x² − x³ and y = 0.**

Solution. Given that **f(x) = 2x² − x³**, then setting **f(x) = 0**, we have **x = 0 and x = 2**. Therefore, the volume is

V = 2π∫₀² x(2x² − x³)dx = 2π∫₀² (2x³ − x⁴)dx
= 2π[ x⁴/2 − x⁵/5 ]₀² = 2π( 8 − 32/5 ) = **16π/5**

Hence, the volume is **16π/5 cubic units.**

Note how she gets the limits: 2x² − x³ = x²(2 − x) = 0 gives x = 0 (twice) and x = 2. And note 8 − 32/5 = 40/5 − 32/5 = 8/5, so 2π(8/5) = 16π/5.

### Example 2 (slide 15) — shell about the x-axis, integrating in y

**Use the shell method to find the volume of the solid obtained by rotating about the x-axis the region under the curve y = √x from 0 to 1.**

Solution. Given that **y = √x**, we have **x = y²** so that **y = 0, y = 1** and **f(y) = 1 − y².** Therefore, the volume is

V = 2π∫₀¹ y(1 − y²)dy = 2π∫₀¹ (y − y³)dy = 2π[ y²/2 − y⁴/4 ]₀¹
= 2π( 1/2 − 1/4 ) = **π/2**

Hence, the volume is **π/2 cubic units.**

The step to understand is **f(y) = 1 − y²**. The strip is now horizontal, at height y. It starts on the curve, where x = y², and ends on the right-hand edge of the region, the line x = 1. Its length is therefore (right − left) = 1 − y². The radius is y, its distance from the x-axis.

Free check, using her own disc formula: the same solid by discs is π∫₀¹[√x]²dx = π∫₀¹ x dx = π[x²/2]₀¹ = **π/2** ✓. Two of her three methods agreeing on the same solid is the best self-test available in this deck.

### TASK (slide 16) — set by the lecturer, no answer given

**Find the volume of the solid obtained by rotating about the y-axis the region between y = x and y = x².**

Solution. First the boundaries: x = x² gives x(1 − x) = 0, so **a = 0, b = 1**. On (0, 1), x ≥ x², so the strip runs from the parabola up to the line and its height is **f(x) = x − x²**. The axis is the y-axis, so the radius is **x**.

V = 2π∫₀¹ x(x − x²)dx = 2π∫₀¹ (x² − x³)dx = 2π[ x³/3 − x⁴/4 ]₀¹
= 2π( 1/3 − 1/4 ) = 2π(1/12) = **π/6 cubic units.**

This uses f as the **length of the strip between two curves**, exactly as she does in Shell Example 2 with f(y) = 1 − y². Her formula is stated for a single f, but both her second example and this TASK need the difference of two boundaries, so read f as "height of the strip" throughout.

## Her SUMMARY slide (17), verbatim

- "The applications of definite integrals to calculating volumes of solid shapes are considered."
- "The volume of a solid is obtained by integration using the disc, washer, and shell methods."
- "Using the disc method, the volume is given by V = π∫ₐᵇ[R(x)]²dx."
- "Using the washer method, the volume is given by V = π∫ₐᵇ([R(x)]² − [r(x)]²)dx."
- "Using the shell method, the volume is given by V = 2π∫ₐᵇ x f(x)dx."

That is the entire formula inventory of the week. Three lines.

## Commonly confused

- **Forgetting to square.** π∫f(x)dx is not a volume of anything. The disc integrand is [R(x)]². TASK 1 punishes this precisely: 15π/2 becomes 14π/3.
- **π versus 2π.** Disc and washer carry **π**; shell carries **2π**. Dropping the 2 in Shell Example 1 turns 16π/5 into 8π/5.
- **Squaring in the shell formula.** There is no square. 2π∫x f(x)dx — radius times height, both first power.
- **(R − r)² instead of R² − r².** Washer Example 1: the right answer is 6π/55; squaring the difference gives 9π/220. Areas of annuli subtract, radii do not.
- **Which curve is R.** R is the boundary **farther from the axis**, which is not automatically the upper one. In Washer Example 2 the far boundary is a vertical line, so R = 3 is constant.
- **Not shifting the radius when the axis moves.** TASK 2 rotates about y = −1, so R = x² + 1 and r = 1, not R = x² and r = 0. Subtract the axis first, square second.
- **Reading limits off the picture.** She solves every time: y² + 1 = 3, f(x) = 0, x = x². Do the algebra.
- **Wrong variable.** Step 1 of her procedure says the axis of revolution determines the variable of integration. Disc/washer about the y-axis means dy and everything rewritten as x = f(y) — as in Disc Example 2 and Washer Example 2.
- **Inverting wrongly.** y = √x gives x = **y²**, not x = √y. Shell Example 2 depends on it.
- **Slide 13's "parallel".** The shell variable of integration is **perpendicular** to the axis of revolution. Her own examples say so.
- **Slide 10's heading.** It says DISC METHOD; the working is a washer. Do not conclude the disc formula subtracts anything.
- **Trigonometric and exponential integrands.** Not in this deck. Every integrand she meets is a polynomial after squaring.

## What you should be able to say out loud

- What a solid of revolution and an axis of revolution are, and the four steps of her procedure — starting with "the axis fixes the variable of integration."
- The three formulas from her summary slide, in x and in y, with π on two of them and 2π on the third.
- Why the washer subtracts squares and not radii.
- What R, r and f each measure: outer radius, inner radius, and — for shells — the height of the strip.
- How she found the limits in each of the six examples, and that she found them by solving an equation.
- The full working of Disc Example 1 (π/3), Disc Example 2 (64√2π/15), Washer Example 1 (6π/55), Washer Example 2 (36√3π/5), Shell Example 1 (16π/5) and Shell Example 2 (π/2), from a blank page.
- The three TASK answers, which she never gave: **15π/2, 176π/15, π/6.**
- That Shell Example 2 and the disc formula give the same π/2 for the same solid, and why that is a check rather than a coincidence.
