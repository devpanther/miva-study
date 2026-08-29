# MTH_102 — Week 10 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 11, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** The area enclosed between y = 9 − x² and the x-axis is:
a) 36   b) 18   c) 54   d) 27

**2.** f is continuous on [0, 6], ∫₀⁶f(x)dx = 0, and f(x) < 0 exactly on (0, 2). Which is certainly true?
a) f(x) = 0 for every x in [0, 6]
b) the total area enclosed between the curve and the x-axis on [0, 6] is 0
c) the area below the axis on (0, 2) equals the area above the axis on (2, 6)
d) ∫₂⁶f(x)dx = 0

**3.** The area enclosed by y = x² − 3x and y = x is:
a) 32/3   b) −32/3   c) 64/3   d) 16/3

**4.** The area enclosed between y = x³ and the x-axis for −1 ≤ x ≤ 3 is:
a) 41/2   b) 20   c) 81/4   d) 21

**5.** The area of the region bounded by the curve x = 1 − y² and the y-axis is:
a) 4/3   b) 2/3   c) 2   d) 1/3

**6.** If ∫₂⁵f(x)dx = 7, then ∫₅²f(x)dx =
a) −7   b) 7   c) 0   d) it cannot be determined without knowing f

**7.** For a function integrable on the whole interval spanned by a, b and c, ∫ₐᵇf dx + ∫_b^c f dx equals:
a) ∫ₐ^c f dx, whether or not b lies between a and c
b) ∫ₐ^c f dx, but only when a < b < c
c) ∫ₐ^c f dx + ∫ₐᵇ f dx
d) ∫ₐ^c f dx only when f is positive throughout

**8.** The area enclosed between y = sin x and the x-axis for 0 ≤ x ≤ 2π is:
a) 4   b) 0   c) 2   d) 2π

**9.** The area of the region enclosed by y = x² and y = x³ is:
a) 1/12   b) 1/6   c) 7/12   d) −1/12

**10.** Which region needs **two** integrals if the strips are vertical but only **one** if the strips are horizontal?
a) the region between y = x and y = x² from x = 0 to x = 1
b) the region bounded by y² = x and y = x − 2
c) the region between y = sin x and y = cos x from x = 0 to x = π/2
d) the region under y = eˣ from x = 0 to x = 1

**11.** A student always computes the area between y = f(x) and y = g(x) on [a, b] as |∫ₐᵇ(f − g)dx|. This is correct:
a) always, since the modulus repairs any sign the integral produces
b) only if f and g do not cross strictly between a and b
c) only if both curves lie entirely above the x-axis
d) never — the area must be split at every root of f and every root of g

**12.** The curves y = −x² − 1 and y = −x² − 5 both lie entirely below the x-axis. The area between them from x = 0 to x = 2 is:
a) 8   b) 0   c) −8   d) undefined until both curves are translated above the x-axis

## Section B — Short answer (3)

**13.** Find the area enclosed by y = x² − 2x − 3 and the x-axis. Show the limits you use and where they come from, and explain in one sentence why the definite integral you evaluate is negative while the area is not.

**14.** Find the total area enclosed by the curves y = x³ − 3x and y = x. Show the intersection algebra, say which curve is on top on each piece and how you decided, and state what answer a single integral over the whole interval would have given and why.

**15.** The region is bounded by y² = 4x and the line y = 2x − 4. Set the area up with **horizontal** strips and evaluate it. Then describe, without evaluating, what a vertical-strip setup would have required and why.

## Answers

1. **a** — *Area against the axis of definition: the limits are the roots of the function.* 9 − x² = 0 at x = ±3, and the parabola is above the axis between them, so A = ∫₋₃³(9 − x²)dx = [9x − x³/3]₋₃³ = 18 − (−18) = 36. (b) integrates only from 0 to 3 and forgets that the region extends to x = −3 — the symmetry shortcut is 2∫₀³, not ∫₀³; (c) is ∫₋₃³9 dx = 54, the enclosing rectangle, obtained by losing the −x² term; (d) is 9 × 3, a rectangle guess with no integration at all.
2. **c** — *A definite integral is a signed area, so a value of zero means cancellation, not absence.* The negative contribution from (0, 2) must exactly offset the positive contribution from (2, 6); their sizes are equal, so the **total** area is twice either one and is generally non-zero. (a) is far too strong — cancellation needs only balance, not vanishing; (b) is the exact misreading the question tests: total area is ∫|f|, which is 0 only if f ≡ 0; (d) would follow only if ∫₀²f were also 0, and it is strictly negative.
3. **a** — *The limits of an enclosed region are the solutions of f(x) = g(x), and the integrand is top minus bottom.* x² − 3x = x ⟹ x² − 4x = 0 ⟹ x = 0, 4. Test x = 2: the parabola is at −2, the line at 2, so the line is on top. A = ∫₀⁴[x − (x² − 3x)]dx = ∫₀⁴(4x − x²)dx = [2x² − x³/3]₀⁴ = 32 − 64/3 = 32/3. (b) subtracts in the wrong order, (parabola − line), and reports the negative as an area; (c) is ∫₀⁴x²dx, integrating one curve only and ignoring the other boundary; (d) halves the interval, as though 0 and 2 were the intersections.
4. **a** — *Split at the root, take magnitudes, then add.* x³ changes sign at x = 0. ∫₋₁⁰x³dx = [x⁴/4]₋₁⁰ = −1/4, so that piece has area 1/4; ∫₀³x³dx = 81/4. Total = 1/4 + 81/4 = 82/4 = 41/2. (b) is the single integral ∫₋₁³x³dx = 81/4 − 1/4 = 20, the **signed** area, which is what you get by not splitting; (c) uses only the piece from 0 to 3, discarding the region on the left of the origin; (d) rounds 41/2 = 20.5 to 21, i.e. treats the split as a small correction rather than computing it.
5. **a** — *The y-axis is x = 0, so the natural strips are horizontal and the variable of integration is y.* 1 − y² = 0 at y = ±1, and x = 1 − y² lies to the right of the axis between them. A = ∫₋₁¹(1 − y²)dy = [y − y³/3]₋₁¹ = 2/3 + 2/3 = 4/3. (b) integrates only over 0 ≤ y ≤ 1, half the region; (c) is ∫₋₁¹1 dy, the bounding strip of width 1, obtained by dropping the −y²; (d) is [−y³/3] alone. Setting this up as ∫y dx instead answers a different question entirely.
6. **a** — *Reversing the limits of a definite integral reverses its sign.* ∫₅²f = −∫₂⁵f = −7, directly from the convention ∫ₐᵇ = −∫_bᵃ (itself forced by additivity and ∫ₐᵃ = 0). (b) treats the limits as an unordered pair, which is the belief that makes reversed-limit "areas" come out negative and get reported as such; (c) confuses the reversal with ∫ₐᵃf = 0; (d) invents a dependence on f that the property does not have — the relation holds for every integrable f.
7. **a** — *Additivity of the definite integral over intervals holds for any three points, once the sign convention is in force.* With ∫ₐᵇ = −∫_bᵃ available, ∫ₐᵇ + ∫_b^c = ∫ₐ^c even when b lies outside [a, c] — the overshoot is cancelled by a negatively-oriented piece. (b) is the restricted version most students memorise, and it is why they hesitate to split an interval at a point outside it; (c) double-counts the first piece; (d) attaches a positivity condition that additivity never needed — the property is about orientation, not sign of f.
8. **a** — *"The area between the curve and the axis" is ∫|f|, so split at the interior root.* sin x = 0 at x = π inside (0, 2π). ∫₀^π sin x dx = [−cos x]₀^π = 2, and ∫_π^{2π}sin x dx = −2, of size 2. Total = 4. (b) is the single integral ∫₀^{2π}sin x dx = 0, the signed area — the arch above and the arch below are congruent and cancel; (c) is one arch only; (d) is the length of the interval, not an area.
9. **a** — *Intersections give the limits; a test point gives the order of subtraction.* x² = x³ ⟹ x²(1 − x) = 0 ⟹ x = 0, 1. At x = ½: x² = 1/4 exceeds x³ = 1/8, so x² is on top. A = ∫₀¹(x² − x³)dx = 1/3 − 1/4 = 1/12. (b) is 1/3 − 1/6 or similar slip in one antiderivative; (c) is 1/3 + 1/4, adding the two integrals instead of subtracting the curves; (d) subtracts in the order written in the question, (x³ − x²), and reports the negative.
10. **b** — *The strip direction is decided by whether each boundary is a single formula in that variable.* For y² = x and y = x − 2, vertical strips have their **bottom** boundary given by y = −√x for 0 ≤ x ≤ 1 and by y = x − 2 for 1 ≤ x ≤ 4, so the setup breaks into two integrals; horizontal strips run from x = y² on the left to x = y + 2 on the right for all −1 ≤ y ≤ 2, one integral. (a) and (d) have a single top and single bottom throughout, so one vertical integral suffices; (c) does need two integrals, but because sin and cos **cross** at π/4 — that split is not repaired by turning the strips, so it is a different phenomenon.
11. **b** — *The modulus outside the integral cannot undo a cancellation that has already happened inside it.* If f − g keeps one sign on [a, b], the integral is the area up to a global sign and the modulus fixes it. If they cross at c, the two pieces partly or wholly cancel before the modulus is applied: for y = x³ and y = x on [−1, 1], ∫(x − x³)dx = 0 while the area is 1/2. (a) is the misconception itself; (c) attaches the condition to the position of the curves relative to the **x-axis**, which is irrelevant — only the relative position of the two curves matters; (d) over-corrects: the roots of f and g individually are not where f − g changes sign, and splitting there is unnecessary.
12. **a** — *The height of a vertical strip is a difference of y-values, so it does not care where the x-axis is.* Top − bottom = (−x² − 1) − (−x² − 5) = 4 for every x, so A = ∫₀²4 dx = 8. (b) comes from the belief that the two negative integrals cancel; in fact ∫₀²(−x² − 1)dx = −14/3 and ∫₀²(−x² − 5)dx = −38/3, and their **difference** is 8. (c) subtracts in the wrong order, (bottom − top); (d) is the translation superstition — translating both curves up by k adds k to each and leaves the difference unchanged, which proves it was never needed.
13. **Area = 32/3.** The limits are the roots of the function, because that is where the curve meets the axis: x² − 2x − 3 = (x − 3)(x + 1) = 0 ⟹ x = −1 and x = 3. The parabola opens upward, so between its roots it lies **below** the x-axis; there is no interior sign change and no split is required. ∫₋₁³(x² − 2x − 3)dx = [x³/3 − x² − 3x]₋₁³ = (9 − 9 − 9) − (−1/3 − 1 + 3) = −9 − 5/3 = −32/3, so the area is |−32/3| = **32/3**. The integral is negative because the definite integral records **signed** area and every strip on this interval has its top on the axis and its bottom on the curve; the minus sign therefore reports the position of the region, not an arithmetic error, and the area is its magnitude. — *Area against the axis of definition: limits from the roots, magnitude at the end.*
14. **Total area = 8.** Intersections: x³ − 3x = x ⟹ x³ − 4x = 0 ⟹ x(x − 2)(x + 2) = 0 ⟹ x = −2, 0, 2. Two of these are interior to the interval [−2, 2], so the curves cross at x = 0 and the region splits.
On (−2, 0), test x = −1: the cubic is (−1) + 3 = 2, the line is −1, so **the cubic is on top**. ∫₋₂⁰[(x³ − 3x) − x]dx = ∫₋₂⁰(x³ − 4x)dx = [x⁴/4 − 2x²]₋₂⁰ = 0 − (4 − 8) = 4.
On (0, 2), test x = 1: the cubic is 1 − 3 = −2, the line is 1, so **the line is on top**. ∫₀²[x − (x³ − 3x)]dx = ∫₀²(4x − x³)dx = [2x² − x⁴/4]₀² = 8 − 4 = 4.
Total = 4 + 4 = **8**. A single integral over [−2, 2] would give ∫₋₂²(4x − x³)dx = **0**, because 4x − x³ is an odd function on a symmetric interval and the two lobes cancel exactly — taking a modulus at the end would then report the area as 0. — *Curves intersecting at an interior point: split at every crossing, and never rely on a modulus applied after integrating.*
15. **Area = 9.** Horizontal strips: write both boundaries as functions of y — the parabola is x = y²/4 and the line is x = (y + 4)/2. Equate for the limits: y²/4 = (y + 4)/2 ⟹ y² = 2y + 8 ⟹ y² − 2y − 8 = 0 ⟹ (y − 4)(y + 2) = 0 ⟹ y = −2 and y = 4. At y = 0 the line gives x = 2 and the parabola x = 0, so the **line is the right boundary** throughout.
A = ∫₋₂⁴[(y + 4)/2 − y²/4]dy = [y²/4 + 2y − y³/12]₋₂⁴ = (4 + 8 − 16/3) − (1 − 4 + 2/3) = 20/3 − (−7/3) = 27/3 = **9**.
With vertical strips the region would need **two** integrals: the intersection points are (1, −2) and (4, 4), and for 0 ≤ x ≤ 1 the strip runs from y = −2√x to y = 2√x (both boundaries on the parabola), while for 1 ≤ x ≤ 4 it runs from the line y = 2x − 4 up to y = 2√x. The bottom boundary changes formula at x = 1, which is exactly the condition that forces a split — and it is the condition horizontal strips remove, since in y each boundary is one formula over the whole range. — *Choosing the strip direction: integrate in the variable in which every boundary is a single function.*
