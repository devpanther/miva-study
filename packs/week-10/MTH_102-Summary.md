# MTH_102 — Week 10 Summary

*Elementary Mathematics II (Calculus) · Week 10 (9 – 15 Nov 2026) · Topic: Definite Integrals and the Area Between Curves*

## The 8 most examinable things this week

1. **The definite integral is a signed area, not an area.** ∫ₐᵇf(x)dx counts the region above the x-axis as positive and the region below it as negative, and reports their **sum**. So ∫ₐᵇf dx = 0 does not mean there is no region — it means the two parts are equal in size and cancel.
2. **Definition (Riemann sum).** Divide [a, b] into n equal subintervals of width **Δx = (b − a)/n**, pick a sample point xᵢ* in the i-th one, and form Σᵢ₌₁ⁿ f(xᵢ*)Δx. Then **∫ₐᵇf(x)dx = lim_{n→∞} Σᵢ₌₁ⁿ f(xᵢ*)Δx**. If f is continuous on [a, b] the limit exists and is the same for every choice of sample point. Right endpoints give xᵢ = **a + iΔx** — the offset a is compulsory.
3. **Fundamental Theorem (evaluation form).** If f is continuous on [a, b] and F is **any** antiderivative of f there, then ∫ₐᵇf(x)dx = **F(b) − F(a)**, written [F(x)]ₐᵇ. No + C: the constants cancel, (F(b) + C) − (F(a) + C) = F(b) − F(a). This is what replaces the limit of sums in practice.
4. **Area against the axis of definition.** The area actually enclosed between y = f(x) and the x-axis on [a, b] is **A = ∫ₐᵇ|f(x)|dx**. In practice: find the roots of f in (a, b), split the interval at them, integrate over each piece, and add the **magnitudes**. Note ∫|f| ≥ |∫f|, with equality only when f keeps one sign.
5. **Area between two curves (vertical strips).** A strip at x has height (top − bottom) and width dx, so **A = ∫ₐᵇ[f(x) − g(x)]dx** where f is above g on the whole of [a, b]. This is valid **whatever the signs of f and g**: the height is a difference of y-values, so a region entirely below the x-axis needs no shifting upward.
6. **Intersecting curves force a split.** If f and g cross at c ∈ (a, b), then f − g changes sign there, and A = ∫ₐ^c[f − g]dx + ∫_c^b[g − f]dx. The limits of an *enclosed* region are the intersection points themselves, obtained by solving **f(x) = g(x)**. Taking one integral and a modulus at the end, |∫ₐᵇ(f − g)dx|, is wrong the moment there is a crossing inside the interval.
7. **Horizontal strips (integrating in y).** When the left and right boundaries are single functions of y but the top or bottom boundary changes formula partway, use **A = ∫_c^d[x_right(y) − x_left(y)]dy**, with c, d the y-coordinates of the intersections. One integral in y often replaces two in x. This is also how you get the area between a curve and the **y-axis**: A = ∫_c^d x dy, not ∫ y dx.
8. **Orientation and additivity.** ∫ₐᵃf = 0, **∫ₐᵇf = −∫_bᵃf**, and ∫ₐᵇf + ∫_b^c f = ∫ₐ^c f. Limits in an area calculation must run **left to right (or bottom to top)**; writing them backwards flips the sign and produces a negative "area".

## The setup, in the order it is done

| Step | What you do | What goes wrong if you skip it |
|---|---|---|
| 1 | Sketch the region, however roughly | You cannot tell which curve is on top |
| 2 | Solve f(x) = g(x) (or the y-version) for the limits | You integrate over the wrong interval |
| 3 | Test one interior point to decide top and bottom | The integrand is (bottom − top) and the answer is negative |
| 4 | Split at every interior intersection / root | Positive and negative pieces cancel and the area comes out too small |
| 5 | Integrate each piece, take magnitudes, add | You report a signed total instead of an area |

## 1. Area between a curve and its axis of definition

**Worked example 1 (curve above the axis).** Area under y = x² between x = 1 and x = 3.
A = ∫₁³x²dx = [x³/3]₁³ = 27/3 − 1/3 = **26/3.**

**Worked example 2 (sign change — the standard trap).** Area enclosed between y = x³ and the x-axis for −1 ≤ x ≤ 2.
x³ < 0 on (−1, 0) and x³ > 0 on (0, 2), so split at the root x = 0.
∫₋₁⁰x³dx = [x⁴/4]₋₁⁰ = 0 − 1/4 = −1/4  ⟹ area of that piece = 1/4.
∫₀²x³dx = [x⁴/4]₀² = 16/4 = 4.
**Total area = 1/4 + 4 = 17/4.** The single integral ∫₋₁²x³dx = 4 − 1/4 = **15/4** is the *signed* area and is not the answer to "find the area".

**Worked example 3 (whole loop below the axis).** Area enclosed by y = x² − 2x − 3 and the x-axis.
Roots: (x − 3)(x + 1) = 0 ⟹ x = −1, 3, and the parabola opens upward so it is **below** the axis throughout.
∫₋₁³(x² − 2x − 3)dx = [x³/3 − x² − 3x]₋₁³ = (9 − 9 − 9) − (−1/3 − 1 + 3) = −9 − 5/3 = −32/3.
**Area = 32/3.** The minus sign is information, not an error: it says the region lies below the axis.

## 2. Area between two curves — vertical strips

**Worked example 4 (no crossing inside).** Area between y = x and y = x² from x = 0 to x = 1.
On (0, 1), x > x² (test x = ½: ½ > ¼), so the line is on top.
A = ∫₀¹(x − x²)dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = **1/6.**

**Worked example 5 (limits from the intersections).** Area enclosed by y = 8 − x² and y = x².
Intersections: x² = 8 − x² ⟹ 2x² = 8 ⟹ x = ±2. Between them 8 − x² is on top (at x = 0: 8 > 0).
A = ∫₋₂²[(8 − x²) − x²]dx = ∫₋₂²(8 − 2x²)dx = [8x − 2x³/3]₋₂² = (16 − 16/3) − (−16 + 16/3) = 32 − 32/3 = **64/3.**
(The even-function shortcut 2∫₀²(8 − 2x²)dx gives the same 64/3; using ∫₀² alone gives 32/3 and is half the region.)

**Worked example 6 (curves cross inside — split compulsory).** Area enclosed by y = x³ and y = x.
Intersections: x³ = x ⟹ x(x² − 1) = 0 ⟹ x = −1, 0, 1.
On (−1, 0): test x = −½ — x³ = −1/8, x = −1/2, so **x³ is on top**. ∫₋₁⁰(x³ − x)dx = [x⁴/4 − x²/2]₋₁⁰ = 0 − (1/4 − 1/2) = 1/4.
On (0, 1): test x = ½ — x = 1/2 > x³ = 1/8, so **x is on top**. ∫₀¹(x − x³)dx = 1/2 − 1/4 = 1/4.
**Total area = 1/4 + 1/4 = 1/2.**
The one-integral answer ∫₋₁¹(x − x³)dx = **0** by symmetry, and |0| = 0 — which is why the modulus-at-the-end method fails outright here.

**Worked example 7 (both curves below the axis).** Area between y = −x² − 1 and y = −x² − 5 on [0, 2].
Top − bottom = (−x² − 1) − (−x² − 5) = 4, a positive height everywhere.
A = ∫₀²4 dx = **8.** Nothing needs translating: the strip height never referred to the axis in the first place.

## 3. Horizontal strips — integrating with respect to y

Use when x is a single function of y across the region. The strip has width (x_right − x_left) and thickness dy.

**Worked example 8 (one integral in y, two in x).** Area bounded by x = y² and y = x − 2.
Rewrite the line as x = y + 2 and equate: y² = y + 2 ⟹ y² − y − 2 = 0 ⟹ (y − 2)(y + 1) = 0 ⟹ y = −1, 2.
Between them the line is to the **right** (at y = 0: x = 2 versus x = 0).
A = ∫₋₁²[(y + 2) − y²]dy = [y²/2 + 2y − y³/3]₋₁² = (2 + 4 − 8/3) − (1/2 − 2 + 1/3) = 10/3 − (−7/6) = 10/3 + 7/6 = **9/2.**
In x this needs two integrals: for 0 ≤ x ≤ 1 the region runs from y = −√x to y = √x; for 1 ≤ x ≤ 4 it runs from y = x − 2 to y = √x. Same answer, twice the work — the **shape of the boundary**, not preference, decides the strip direction.

**Worked example 9 (area against the y-axis).** Area bounded by y = x², the y-axis and the line y = 4, in the first quadrant.
Horizontal strips run from x = 0 to x = √y, for 0 ≤ y ≤ 4.
A = ∫₀⁴√y dy = [(2/3)y^{3/2}]₀⁴ = (2/3)(8) = **16/3.**
Check: the enclosing rectangle is 2 × 4 = 8, and the region below the curve is ∫₀²x²dx = 8/3; indeed 8 − 8/3 = 16/3. Using ∫₀²x²dx here answers a *different* question — the region on the other side of the curve.

## 4. From first principles (Riemann sum)

**Worked example 10.** Evaluate ∫₀¹x²dx from the definition, right endpoints.
Δx = 1/n, xᵢ = i/n. Sum = Σᵢ₌₁ⁿ (i/n)²·(1/n) = (1/n³)Σi² = (1/n³)·n(n + 1)(2n + 1)/6 = (n + 1)(2n + 1)/(6n²).
Expand: (2n² + 3n + 1)/(6n²) = 1/3 + 1/(2n) + 1/(6n²) → **1/3** as n → ∞.
The Fundamental Theorem gives [x³/3]₀¹ = 1/3 in one line; the sum is what the theorem is *shortcutting*, and is examinable in its own right.

## Commonly confused

- **Signed area vs total area.** ∫ₐᵇf dx answers "what is the net signed area"; ∫ₐᵇ|f|dx answers "find the area". Only when f keeps one sign on [a, b] are the two the same, up to a minus.
- **|∫(f − g)dx| vs ∫|f − g|dx.** The modulus outside repairs a region that is entirely on one side; it destroys a region that crosses. For y = x³ and y = x on [−1, 1] the first gives 0 and the second gives 1/2.
- **"Area under the curve" when the curve dips below.** ∫₀^{2π}sin x dx = 0, but the area between y = sin x and the x-axis over [0, 2π] is **4**.
- **Forgetting to find the intersections.** For an *enclosed* region the limits are not given to you — they are the solutions of f(x) = g(x). Guessing 0 and some convenient number is the most common way to lose all the marks on a question.
- **Top minus bottom, not first minus second.** The order is decided by a test point, not by which curve was written first in the question. Getting it backwards makes the answer the negative of the truth.
- **Believing curves below the x-axis must be shifted up.** They must not. The strip height f − g is a difference of y-values and is already positive when f is above g, whatever the signs.
- **Splitting only at roots of f, or only at intersections.** For a curve against the axis you split at the **roots of f**; for two curves you split at the **solutions of f = g**. Those are different sets.
- **∫ₐᵇ vs ∫_bᵃ.** Swapping the limits negates the integral. An area written with the limits in decreasing order comes out negative, and the fix is to swap them, not to delete the minus sign.
- **Δx = 1/n.** Δx = (b − a)/n. And the right endpoint is xᵢ = a + i(b − a)/n — dropping the a is fatal on any interval not starting at 0.
- **+ C in a definite integral.** There is none. A definite integral is a **number**; if you have written + C you have answered a different question.
- **Vertical strips when the region is sideways.** For x = y² with a line cutting it, vertical strips need two integrals because the bottom boundary changes formula at x = 1; horizontal strips need one. Choose the direction the boundaries allow.
- **Area between a curve and the y-axis.** That is ∫x dy, with y-limits. Writing ∫y dx with x-limits computes the complementary region.
- **Assuming symmetry halves the work without checking it.** 2∫₀²(8 − 2x²)dx is legitimate because the integrand is even and the interval symmetric; for y = x³ and y = x the integrand is **odd**, the two halves cancel rather than double, and the same reflex gives 0.
- **The Fundamental Theorem's conditions.** f continuous on [a, b], F *any* antiderivative. It is not "f positive", and F is the antiderivative of f, not the other way round.
- **Reporting a negative number as an area.** Areas are non-negative. A negative result is a message: the region is below the axis, or the limits or the order of subtraction are reversed.

---

*Note on the source: this week's deck extracts as slide titles only — LEARNING OBJECTIVES, INTRODUCTION, then nine slides all headed AREA BETWEEN CURVES with three TASK slides interleaved, then SUMMARY and FURTHER READING — because every formula, diagram and worked example sits inside a slide image that the text extractor cannot read. What does extract is the objectives (obtain the area bounded by a given function and the axis of definition; obtain the area bounded by any two given functions; obtain the area bounded by any two given functions intersecting at a point) and the introduction: "Definite integrals are used to solve various problems. One of the usual applications is the calculation of the area of a plane region bounded by curves. This note presents different types of regions and gives the methods to calculate their areas." The week summary sheet adds only that the integral represents the signed area enclosed between the curve and the x-axis from a to b, that this is obtained by breaking the region into infinitesimally small vertical strips and summing them, the term Riemann sums, the extension to the area between two curves including curves that intersect, and a dam cross-section case study. Every formula, statement and example above is the standard 100-level treatment of exactly those named objectives.*
