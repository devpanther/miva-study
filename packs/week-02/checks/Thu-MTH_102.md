# Thursday — MTH_102 nightly check

*MTH_102 problems: building a sketch, sign charts, solving equations and inequalities graphically and algebraically.*
*Sit cold, notes closed, 8 minutes. Score out of 6.*

**1.** The solution set of (x + 1)/(x − 3) ≤ 2 is:
a) x ≤ 7, obtained by multiplying both sides by (x − 3)
b) [7, ∞)
c) (−∞, 3) ∪ [7, ∞)
d) (3, 7]

**2.** The solution set of (x − 1)²(x + 2) > 0 is:
a) (−2, 1) ∪ (1, ∞)
b) (−2, ∞)
c) (−∞, −2) ∪ (1, ∞)
d) (1, ∞)

**3.** How many real solutions has x³ − 3x = 1?
a) 1, because a cubic equation has exactly one real root
b) 2, because the line y = 1 meets the curve once on each side of the y-axis
c) 0, because x³ − 3x − 1 does not factorise over the integers
d) 3: the curve y = x³ − 3x has a local maximum of 2 at x = −1 and a local minimum of −2 at x = 1, and the line y = 1 lies strictly between them, so it cuts all three branches

**4.** The solution set of −x² + 4x − 3 > 0 is:
a) x < 1 or x > 3
b) 1 < x < 3
c) x ≤ 1 or x ≥ 3
d) all real x except x = 1 and x = 3

**5. (explain why)** For p(x) = (x + 1)³(x − 2)², explain how you decide the sign of p on each interval of a sign chart, and hence give the solution of p(x) < 0. Say explicitly what the multiplicity of each root does to the sign.

**6. (explain why)** You are asked to sketch f(x) = (x² + 1)/(x − 1). Explain how you find every asymptote, showing the working for the non-vertical one, and state the intercepts.

---

## Answers

**1. c** — *Never multiply an inequality by an expression whose sign is unknown; collect on one side over a common denominator instead.* Subtracting: (x+1)/(x−3) − 2 = (x + 1 − 2x + 6)/(x − 3) = (7 − x)/(x − 3) ≤ 0, i.e. (x − 7)/(x − 3) ≥ 0. Critical values 3 (undefined, excluded) and 7 (zero, included since the inequality is ≤ in the original). Testing: x = 0 gives (−7)/(−3) > 0 ✓, x = 5 gives (−2)/2 < 0 ✗, x = 8 gives 1/5 > 0 ✓. (a) is exactly the forbidden move — it silently assumes x − 3 > 0 and even then loses the x < 3 branch; (b) keeps only the right-hand branch and forgets that every x below 3 makes the left side negative, hence ≤ 2; (d) reads the sign chart with the inequality reversed and wrongly includes 3.

**2. a** — *A factor of even multiplicity does not change the sign, but its root still makes the expression zero.* (x − 1)² ≥ 0 always, so the sign of p is the sign of (x + 2), giving p > 0 for x > −2 — except at x = 1, where p = 0 and the strict inequality fails. (b) forgets to remove x = 1; (c) assumes the sign alternates at every root, which is the odd-multiplicity rule applied blindly; (d) treats x = −2 as irrelevant and both roots as sign changes.

**3. d** — *Solving an equation graphically means intersecting the curve with a horizontal line, and the turning points decide how many intersections there are.* y = x³ − 3x turns at x = ±1 with values 2 and −2; a horizontal line at height strictly between −2 and 2 meets the falling middle branch once and each rising outer branch once. (a) confuses "a cubic has at least one real root" with "exactly one"; (b) ignores the middle branch between the turning points; (c) confuses irrational roots with no roots — the graph clearly crosses y = 1 three times, and factorising over ℤ is irrelevant.

**4. b** — *When you multiply or divide an inequality by a negative number the inequality reverses.* Multiply by −1: x² − 4x + 3 < 0, i.e. (x − 1)(x − 3) < 0; an upward parabola is negative strictly **between** its roots. (a) is the answer you get by forgetting to flip — it is the solution of x² − 4x + 3 > 0; (c) is (b)'s complement with wrongly included endpoints (the inequality is strict, and the roots give 0, not > 0); (d) treats the roots as excluded points of an otherwise positive function, ignoring that the parabola opens downwards.

**5.** *Concept: sign charts, and the role of multiplicity.* Mark the roots x = −1 and x = 2 on a number line; they cut it into (−∞, −1), (−1, 2) and (2, ∞), and on each interval p has one constant sign, so testing a single convenient value decides the whole interval. Test x = −2: (−1)³(−4)² = −16 < 0. Test x = 0: (1)³(−2)² = 4 > 0. Test x = 3: (4)³(1)² = 64 > 0. The root x = −1 has **odd** multiplicity 3, so the sign **changes** across it (the graph crosses the axis); x = 2 has **even** multiplicity 2, so the sign **does not change** (the graph touches and turns back). Hence **p(x) < 0 on (−∞, −1)** only; the roots themselves give p = 0 and are excluded by the strict inequality.

**6.** *Concept: asymptotes of a rational function — denominator zeros for vertical, degree comparison for the rest.* **Vertical:** x − 1 = 0 and it does not cancel (x² + 1 has no real factor), so **x = 1**. **Non-vertical:** deg N = 2 = deg D + 1, so there is no horizontal asymptote but there is an oblique one; long division gives x² + 1 = (x − 1)(x + 1) + 2, so f(x) = x + 1 + 2/(x − 1), and since 2/(x − 1) → 0 as x → ±∞ the line **y = x + 1** is the oblique asymptote. **Intercepts:** y-intercept f(0) = 1/(−1) = **−1**; no x-intercept, since x² + 1 = 0 has no real solution. (Near the asymptote: x → 1⁺ gives f → +∞, x → 1⁻ gives f → −∞.)
