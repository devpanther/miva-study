# Monday — MTH_102 nightly check

*Conceptual session on Week 11 volumes of solids of revolution, as the deck builds them.*

*Solid and axis of revolution, and her four-step procedure.*

*The disc formula V = π∫ₐᵇ[R(x)]²dx, in x and in y.*

*The washer formula V = π∫ₐᵇ([R(x)]² − [r(x)]²)dx, and why the squares subtract.*

*The shell formula V = 2π∫ₐᵇ x f(x)dx, and what x and f measure.*

*How to tell which boundary is R. How the axis of revolution fixes the variable of integration.*

*The two labelling defects on the deck: slide 10's DISC heading over washer working, and slide 13's 'parallel' where her own examples show perpendicular.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Step 1 of the deck's procedure is 'Sketch the area and determine the axis of revolution'. The slide says this step determines one thing in particular. What?
A. The variable of integration
B. Whether the answer will be positive
C. The constant of integration
D. Whether π or 2π appears

**2.** The disc slide says 'R(x) is the region bounded by y = f(x)'. In every one of her worked examples, what is R(x) actually?
A. The area of the region being revolved
B. A length: the distance from the axis of revolution out to the curve
C. The antiderivative of f(x)
D. The volume of one thin disc

**3.** The deck says to use the washer method rather than the disc method when what is true of the solid?
A. The axis of revolution is vertical
B. The region lies below the x-axis
C. The solid has hollow spots in it, so the cross-section is a washer of outer radius R and inner radius r
D. The boundary curve cannot be inverted

**4.** Disc and washer formulas carry π; the shell formula carries 2π. Why the difference?
A. The shell method is used twice, once for each boundary
B. 2π is a correction factor for integrating in the wrong variable
C. The shell formula omits the square, so the 2 compensates for it
D. π turns a radius into the area of a circle or annulus; 2π·radius is the circumference of the shell once it is unrolled into a rectangle

**5.** Washer Example 1 revolves the region between y = x² and y = x⁵ on [0, 1] about the x-axis, and she takes R(x) = x². What is the general rule she is applying?
A. R is the boundary farther from the axis of revolution; on [0, 1] the curve x² lies above x⁵
B. R is always the curve with the smaller exponent
C. R is always the upper curve in the sketch, whatever the axis
D. R is whichever curve is written first in the question

**6.** The shell slide states: 'The shell method is used when integrating along an axis parallel to the axis of revolution.' Check it against her two shell examples. What do they show?
A. They confirm it: Example 1 revolves about the y-axis and integrates dy
B. They contradict it: Example 1 revolves about the y-axis and integrates dx, Example 2 revolves about the x-axis and integrates dy — perpendicular in both cases
C. They neither confirm nor contradict it, since the shell formula does not name a variable
D. They confirm it, because both examples happen to use the same variable

**7.** Why does Disc Example 2 integrate dy and rewrite the radius as R(y) = 2 − y², rather than working in x?
A. Because y is easier to square than x
B. Because the parabola is given as x = y² + 1, and any equation in y must be integrated in y
C. Because the axis of revolution is the vertical line x = 3, so slices perpendicular to it are stacked in y and each disc's radius is a horizontal distance
D. Because the limits −√2 and √2 are negative and positive, which requires dy

**8.** Slide 10 is headed 'VOLUMES BY INTEGRATION: DISC METHOD', but its working reads V = π∫₀¹([x²]² − [x⁵]²)dx. What should you conclude?
A. The disc formula subtracts an inner radius whenever two curves are given
B. The working is wrong, since a disc integral cannot contain a subtraction
C. The example is really about a hollow cylinder, which is neither disc nor washer
D. The heading is a misprint: the working uses R and r in the washer formula, and it sits between the washer formula slide and Washer Example 2

**9.** State the deck's four-step procedure for finding a volume of revolution, and explain what each step actually decides.
*(short answer)*

**10.** Explain why the washer integrand is [R]² − [r]² and not (R − r)², and use Washer Example 1 to show that the two are genuinely different.
*(short answer)*

**11.** In Shell Example 2 the lecturer writes f(y) = 1 − y². Explain where that expression comes from, and why the radius is y rather than x.
*(short answer)*

**12.** Suppose you are given a region and an axis of revolution and must choose between disc, washer and shell. Set out the reasoning using only what this deck contains.
*(short answer)*

## Answers

**1. A** — The slide's own parenthesis says '(this determines the variable of integration)'. Once you know the axis, you know whether slices are taken in x or in y, and therefore whether every boundary must be written as y = f(x) or as x = f(y) — which is why Disc Example 2 and Washer Example 2 are rewritten in y. Option 2 confuses this with a sign question; a volume is positive by construction. Option 3 belongs to indefinite integrals — a definite integral carries no + c. Option 4 is decided at step 2, when you pick the cross-section: π for a disc or washer, 2π for a shell.

**2. B** — In Example 1 she writes R(x) = (−x + 1), which is a function value, a distance from the x-axis up to the curve. The slide's wording 'the region' is loose; the formula squares R and multiplies by π, which only makes sense if R is a radius. Option 1 would make πR² a squared area, dimensionally wrong. Option 3 confuses the radius with the integration that comes later — R is the integrand's ingredient, not its result. Option 4 mistakes the radius for the whole slice; the disc's volume is π[R(x)]²dx, radius squared times thickness.

**3. C** — Slide 9 states it directly: 'If a solid of revolution has any hollow spots in it, we use the washer method.' The hole appears when the region does not reach the axis — as in the TASK about y = −1, where the nearest boundary sits a distance 1 away. Option 1 is about the variable of integration, not about holes; her Disc Example 2 revolves about a vertical line and still uses discs. Option 2 does not create a hole at all. Option 4 decides whether you can integrate in y, which is a separate question.

**4. D** — A disc or washer slice is a flat circular face, so its area needs πR² (or πR² − πr²). A shell slice is a thin cylindrical wall; cut it and flatten it and you get a rectangle whose length is the circumference 2π·radius and whose height is f, hence 2π x f(x)dx. Option 1 invents a doubling that no example performs. Option 2 treats a geometric constant as a fudge factor. Option 3 is a real-sounding trap: the shell integrand genuinely has no square, but 2 does not compensate for a missing square — the two facts are unrelated, and squaring the shell integrand would be dimensionally wrong.

**5. A** — The washer's outer radius is the distance from the axis to the far edge of the region, and its inner radius the distance to the near edge. Here the axis is the x-axis, so distance means the y-value, and on [0, 1] raising to a higher power shrinks the number, putting x² above x⁵. Option 2 happens to give the right answer here and is worthless anywhere else. Option 3 is the trap that breaks the moment the axis moves — rotate this same region about y = 2 and the lower curve becomes the farther one. Option 4 is not a rule at all.

**6. B** — Example 1 rotates y = 2x² − x³ about the y-axis and integrates 2π∫₀² x(2x² − x³)dx — that is dx against a vertical axis. Example 2 rotates about the x-axis and integrates 2π∫₀¹ y(1 − y²)dy — dy against a horizontal axis. Both are perpendicular, so the printed sentence is wrong and should read 'perpendicular'. It is exactly the reverse of the disc and washer case, where the variable runs along the axis. Option 1 misreads Example 1's variable. Option 3 is false — both formulas name a variable, dx or dy. Option 4 is false: the two examples use different variables.

**7. C** — Discs are cut perpendicular to the axis. With a vertical axis x = 3, the cuts are horizontal, indexed by height y, and each disc's radius is measured horizontally: 3 − (y² + 1) = 2 − y². That is why the integral is dy from −√2 to √2. Option 1 is not a mathematical reason. Option 2 confuses how an equation is written with what governs the choice — you may always rewrite a curve, and Shell Example 2 does exactly that in the opposite direction. Option 4 mistakes a property of the limits for the cause; limits can be negative in either variable.

**8. D** — The disc formula in her own summary is π∫[R(x)]²dx with a single radius; the moment an inner radius r appears and its square is subtracted, you are in the washer formula from slide 9. The slide's position, immediately after the washer formula and immediately before Washer Example 2, confirms the heading was pasted from the previous section. Option 1 corrupts the disc formula on the strength of a typo. Option 2 rejects arithmetic that is in fact correct — the answer 6π/55 is right. Option 3 invents a fourth method the deck does not have.

**9.** A good answer lists the steps as slide 4 gives them and says what each settles. (1) Sketch the area and determine the axis of revolution — this fixes the variable of integration, and therefore whether every boundary must be expressed as y = f(x) or as x = f(y). (2) Sketch the cross-section (disc, shell or washer) and determine the appropriate formula — this decides whether π or 2π appears and whether a radius is squared. (3) Determine the boundaries of the solid — in practice, solve an equation: y² + 1 = 3, f(x) = 0, x = x²; never read the limits off the picture. (4) Set up the definite integral and integrate — from here it is the Week 7 power rule and F(b) − F(a). The point worth stressing is that steps 1 and 2 are the ones students skip, and every wrong answer in this topic traces back to one of them.

**10.** A good answer argues from the cross-section. Each slice is an annulus — a disc of radius R with a disc of radius r removed — so its area is πR² − πr², and integrating that gives π∫([R]² − [r]²)dx. (R − r) is the width of the ring, and π(R − r)² is the area of a small disc of that width, which is a different shape entirely. Example 1 makes the gap concrete: π∫₀¹(x⁴ − x¹⁰)dx = π(1/5 − 1/11) = 6π/55, whereas π∫₀¹(x² − x⁵)²dx = π(1/5 − 1/4 + 1/11) = 9π/220. Roughly 0.109 against 0.041 — not a rounding difference. It is also worth noting that the two agree only when r = 0, which is exactly the case where the washer formula collapses to the disc formula.

**11.** A good answer reconstructs the picture. The region lies under y = √x from x = 0 to x = 1, and the axis of revolution is the x-axis. Shells are taken with the strip parallel to the axis, so the strip is horizontal, sitting at height y with 0 ≤ y ≤ 1. Rotating it about the x-axis sweeps a cylinder whose radius is the strip's distance from that axis, namely y — which is why the formula reads 2π∫y f(y)dy. The height f(y) is the strip's own length: it starts on the curve, where y = √x inverts to x = y², and ends at the region's right-hand edge, the line x = 1, so its length is 1 − y². Two traps worth naming: inverting y = √x gives x = y², not x = √y; and f here is the length of the strip, not the original function, which is why her single-function formula still covers a region bounded by two edges.

**12.** A good answer works from her step 2, sketching the cross-section. First ask whether the region touches the axis of revolution along the whole interval. If it does, each slice perpendicular to the axis is a full circle and the disc formula π∫[R]² applies, with R the distance out to the single curve — Disc Examples 1 and 2. If it does not, there is a hollow spot, the slice is an annulus, and the washer formula π∫([R]² − [r]²) applies, with R the distance to the far boundary and r to the near one — Washer Examples 1 and 2 and the TASK about y = −1. For discs and washers the variable of integration runs along the axis of revolution. The shell alternative takes strips parallel to the axis instead, integrating perpendicular to it, and needs no case split into hollow and solid because the strip's own height carries the region's extent — Shell Examples 1 and 2. A strong answer adds the practical test the deck supplies: Shell Example 2 and the disc formula give π/2 for the same solid, so when a region can be done both ways the two answers must agree, and that is the only self-check available. It should stop there: the deck never discusses splitting a region or preferring one method for ease.
