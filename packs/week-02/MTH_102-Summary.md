# MTH_102 — Week 2 Summary

*Elementary Mathematics II (Calculus) · Week 2 (14–20 Sep 2026) · Topic: How to Graph Functions*

## The 8 most examinable things this week

1. Recognising a function **from its equation** and naming the shape it must have (line, parabola, cubic S, exponential, log, V, hyperbola).
2. Intercepts: y-intercept = f(0) (**at most one**); x-intercepts = solutions of f(x) = 0 (**possibly many**).
3. The even/odd test done **algebraically on f(−x)**, not by eyeballing the powers.
4. Vertical asymptotes come from zeros of the denominator that **survive cancelling** — a cancelled factor gives a **hole**, not an asymptote.
5. Horizontal vs oblique asymptote by **comparing degrees** (deg N < deg D ⟹ y = 0; equal ⟹ y = leading-coefficient ratio; deg N = deg D + 1 ⟹ oblique, found by long division).
6. End behaviour of a polynomial is decided by the **leading term alone** (degree parity + sign of aₙ).
7. Sign charts: list every zero and every undefined point, test one number in each interval, read off the solution set.
8. Rational inequalities: move everything to one side over a **common denominator** — never multiply by an expression whose sign you do not know.

## Function families and their shapes

- **Constant** f(x) = c — horizontal line. **Linear** f(x) = mx + b — straight line, slope m (steepness/direction), y-intercept b.
- **Quadratic** f(x) = ax² + bx + c — parabola; a > 0 opens up, a < 0 opens down; **vertex at x = −b/2a**; axis of symmetry x = −b/2a.
- **Polynomial** f(x) = aₙxⁿ + … + a₁x + a₀, n a non-negative integer (**degree**), aₙ the **leading coefficient**. Degree n gives **at most n x-intercepts** and **at most n−1 turning points**. Cubic = S-shape.
- **Exponential** f(x) = bˣ (b > 0, b ≠ 1) — through (0,1), HA y = 0; b > 1 growth, 0 < b < 1 decay. **Logarithmic** f(x) = log_b x — inverse of bˣ, through (1,0), **vertical asymptote x = 0**, domain x > 0.
- **Absolute value** f(x) = |x| = x for x ≥ 0, −x for x < 0 — V-shape, vertex at the point where the inside is 0.
- **Piecewise** — different formula on different intervals; check each endpoint for a jump (closed dot vs open dot).
- **Trigonometric** — sin and cos: period 2π, oscillate between −1 and 1 (cos is sin phase-shifted); tan: period π, vertical asymptotes at x = π/2 + kπ.
- **Rational** f(x) = N(x)/D(x) — asymptotes and/or holes; the family this week's exam questions live in.

## Characteristics and how each is found

- **Intercepts.** y-intercept: put x = 0 (only if 0 is in the domain). x-intercepts: solve numerator = 0 (and check it is in the domain).
- **Symmetry.** Compute f(−x). If **f(−x) = f(x)** the function is **even** — symmetric in the y-axis. If **f(−x) = −f(x)** it is **odd** — 180° rotational symmetry about the origin. Otherwise **neither**. A single stray term (e.g. the +1 in x³ + 1, or the −x in x² − x) destroys the symmetry.
- **Vertical asymptote.** Reduce N/D to lowest terms first. Each remaining zero of the denominator, x = a, gives the VA **x = a**, with f(x) → ±∞ as x → a; check each side separately by sign. A **cancelled** factor (x − a) gives a **hole** at x = a, height = the reduced function evaluated at a.
- **Horizontal asymptote** (behaviour as x → ±∞). deg N < deg D ⟹ **y = 0**. deg N = deg D ⟹ **y = aₙ/bₘ** (ratio of leading coefficients). deg N > deg D ⟹ **no HA**. A graph **may cross its HA** — the HA only describes the far-out behaviour.
- **Oblique (slant) asymptote.** Exactly when deg N = deg D + 1. Do polynomial long division: N/D = (qx + r) + remainder/D; the line **y = qx + r** is the asymptote (the remainder term → 0).
- **End behaviour of a polynomial.** Governed by aₙxⁿ. n even, aₙ > 0: up/up. n even, aₙ < 0: down/down. n odd, aₙ > 0: down (left)/up (right). n odd, aₙ < 0: up/down.
- **Increasing / decreasing.** f is increasing on an interval if x₁ < x₂ ⟹ f(x₁) < f(x₂) (graph rises left to right); decreasing if the inequality reverses. Read intervals **of x**, never of y.
- **Turning point (local max/min).** A point where the graph stops rising and starts falling, or vice versa. It is a point **on the graph**, so it can never sit at a vertical asymptote or outside the domain.
- **Sign chart.** Factor fully. Mark on a number line every zero of the numerator and every zero of the denominator. These cut the line into intervals; on each interval the expression has one constant sign, so test one convenient value. The sign flips at a factor of **odd** multiplicity and does **not** flip at one of **even** multiplicity.

## Worked examples

**(1) Full sketch of a rational function.** f(x) = (x² − 4)/(x² − x − 6).
Factor: (x−2)(x+2) / ((x−3)(x+2)). Common factor (x+2) ⟹ **hole at x = −2**; reduced f(x) = (x−2)/(x−3), so the hole height is (−2−2)/(−2−3) = **4/5**, giving the open point (−2, 4/5).
**VA:** x = 3 (survives cancelling). **x-intercept:** x − 2 = 0 ⟹ (2, 0). **y-intercept:** f(0) = (−4)/(−6) = **2/3**.
**HA:** degrees equal ⟹ y = 1/1 = **y = 1**. Writing f(x) = 1 + 1/(x−3) shows f → 1 **from above** as x → +∞ and **from below** as x → −∞, and that f = 1 has no solution, so the graph never crosses the HA.
**Near the VA:** as x → 3⁻, numerator → 1 > 0, denominator → 0⁻, so f → **−∞**; as x → 3⁺, f → **+∞**.
**Sign chart** on (x−2)/(x−3): x < 2 positive, 2 < x < 3 negative, x > 3 positive.
Sketch: left branch coming up from just under y = 1, crossing (2,0), diving to −∞ at x = 3; right branch from +∞ at x = 3 falling towards y = 1 from above; open circle at (−2, 4/5).

**(2) Oblique asymptote.** f(x) = (x² + 1)/(x − 1). deg N = deg D + 1, so no HA — divide: x² + 1 = (x − 1)(x + 1) + 2, so **f(x) = x + 1 + 2/(x−1)**. Since 2/(x−1) → 0, the asymptote is **y = x + 1**; VA **x = 1**; y-intercept f(0) = 1/(−1) = **−1**; no x-intercept (x² + 1 ≠ 0).

**(3) Even/odd test.** f(x) = x³ − 4x: f(−x) = (−x)³ − 4(−x) = −x³ + 4x = −(x³ − 4x) = −f(x) ⟹ **odd**, symmetric about the origin. g(x) = x⁴ − 3x²: g(−x) = x⁴ − 3x² = g(x) ⟹ **even**. h(x) = x³ + 1: h(−x) = −x³ + 1, which equals neither h(x) nor −h(x) ⟹ **neither** (the +1 lifts the odd graph off the origin).

**(4) Rational inequality with a sign chart.** Solve (x + 1)/(x − 3) ≤ 2.
Do **not** multiply by (x − 3) — its sign is unknown. Move everything to one side:
(x+1)/(x−3) − 2 ≤ 0 ⟹ [(x+1) − 2(x−3)]/(x−3) ≤ 0 ⟹ (7 − x)/(x − 3) ≤ 0 ⟹ (x − 7)/(x − 3) ≥ 0 (multiplying by −1 flips the sign).
Critical values 3 (undefined) and 7 (zero). Test: x = 0 ⟹ (−7)/(−3) > 0 ✓; x = 5 ⟹ (−2)/(2) < 0 ✗; x = 8 ⟹ (1)/(5) > 0 ✓.
Include x = 7 (equality allowed), exclude x = 3 (undefined). **Solution: (−∞, 3) ∪ [7, ∞).**

**(5) Polynomial inequality.** Solve x³ − 4x² + 3x < 0. Factor: x(x − 1)(x − 3) < 0. Critical values 0, 1, 3. Test x = −1: (−)(−)(−) < 0 ✓; x = 0.5: (+)(−)(−) > 0 ✗; x = 2: (+)(+)(−) < 0 ✓; x = 4: (+)(+)(+) > 0 ✗. **Solution: (−∞, 0) ∪ (1, 3).** (Quadratic version: x² − x − 6 ≥ 0 ⟹ (x−3)(x+2) ≥ 0 ⟹ x ≤ −2 or x ≥ 3 — the *outside* of the roots because the parabola opens up.)

**(6) Turning points and end behaviour of a cubic.** f(x) = −x³ + 3x² − 2 (degree 3, aₙ = −1). End behaviour: odd degree, negative leading coefficient ⟹ **up on the left, down on the right**. f′(x) = −3x² + 6x = −3x(x − 2) = 0 at x = 0 and x = 2: **local min (0, −2)**, **local max (2, 2)** — two turning points, the maximum allowed for degree 3. x = 1 is a root, and −x³+3x²−2 = −(x−1)(x² − 2x − 2), so the x-intercepts are x = 1 and x = 1 ± √3. y-intercept −2.

**(7) Reading transformations of a base graph.** f(x) = −2|x − 3| + 1 from the base y = |x|. Inside the function acts **horizontally and in the opposite direction**: x − 3 shifts **right 3**. Outside acts **vertically and as written**: ×2 stretches vertically by 2, the minus **reflects in the x-axis**, +1 shifts **up 1**. Result: a V turned upside-down with **vertex (3, 1)** and arms of slope −2 and +2. x-intercepts: |x − 3| = 1/2 ⟹ x = 2.5, 3.5. Same rules give y = (x+2)² − 5 (left 2, down 5) and y = 1/(x − 4) + 3 (VA x = 4, HA y = 3).

## Commonly confused

- **Hole vs vertical asymptote** — a denominator zero that cancels gives a removable hole; only the surviving zeros give asymptotes.
- **Horizontal asymptote vs "the graph cannot cross it"** — an HA describes behaviour as x → ±∞ only; e.g. f(x) = 4x/(x² + 1) has HA y = 0 and crosses it at x = 0.
- **Ratio of leading coefficients when the degrees are not equal** — (2x³ − x)/(5x² + 4) has **no** HA (it has the oblique y = (2/5)x), not y = 2/5.
- **Judging even/odd by the leading power** — always compute f(−x); x³ + 1 has an odd leading power but is neither even nor odd.
- **Multiplying an inequality by a variable expression** — legal only if you know its sign; otherwise collect on one side and use a sign chart.
- **Forgetting to flip the inequality** when multiplying or dividing by a negative number (or by −1 to tidy a fraction).
- **Even-multiplicity roots** — (x−1)²(x+2) > 0 excludes x = 1 (the expression is 0 there) even though the sign does not change across it.
- **Range vs interval of increase** — increasing/decreasing intervals are sets of **x**-values, not of outputs.

---

*Note on the source: this week's deck names the function families and gives their general forms, but the objectives it lists — function characteristics, analysing behaviour, and solving equations and inequalities — were carried almost entirely by slide images, and the summary sheet adds only a case-study narrative. The asymptote, symmetry, sign-chart and inequality material above is the standard 100-level treatment those objectives name.*
