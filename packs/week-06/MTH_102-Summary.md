# MTH_102 — Week 6 Summary

*Elementary Mathematics II (Calculus) · Week 6 (12–18 Oct 2026) · Topic: Higher-Order Derivatives — Examples and Applications*

## The 8 most examinable things this week

1. A **higher-order derivative is a derivative of a derivative**: f″ = (f′)′, f‴ = (f″)′, and generally f⁽ⁿ⁾(x) = d/dx[f⁽ⁿ⁻¹⁾(x)], with f⁽⁰⁾(x) = f(x) by convention (n a non-negative integer).
2. **Notation.** f′, f″, f‴ then f⁽⁴⁾, f⁽⁵⁾, …, f⁽ⁿ⁾ (brackets from the fourth on, so it is not read as a power); Leibniz d²y/dx², d³y/dx³, dⁿy/dxⁿ; operator Dⁿ_x y. The superscripts **count differentiations, they are not exponents**.
3. **d²y/dx² ≠ (dy/dx)²** and **f⁽ⁿ⁾(x) ≠ [f(x)]ⁿ**. d²y/dx² is (d/dx)(dy/dx) — the operator applied twice.
4. **Physical chain** for displacement s(t): s′ = **velocity** v, s″ = **acceleration** a, s‴ = **jerk**, s⁽⁴⁾ = jounce/snap. Speed increases when v and a have the **same sign**, not when a > 0.
5. **Sign of f″ = concavity.** f″ > 0 ⟹ concave up (gradient increasing, curve above its tangents); f″ < 0 ⟹ concave down. A **point of inflection** needs f″ to **change sign**, not merely to be 0.
6. **Second-derivative test.** If f′(a) = 0: f″(a) > 0 ⟹ local **minimum**; f″(a) < 0 ⟹ local **maximum**; f″(a) = 0 ⟹ **inconclusive**, fall back on the sign of f′ either side.
7. **Polynomials terminate.** For a polynomial of degree n, each differentiation drops the degree by exactly 1, so f⁽ⁿ⁾(x) is a non-zero constant (= a·n! for leading term axⁿ) and f⁽ⁿ⁺¹⁾(x) = 0 for all x.
8. **Standard nth-derivative patterns**: e^{ax} → aⁿe^{ax}; sin x → sin(x + nπ/2); 1/x → (−1)ⁿ n! x⁻⁽ⁿ⁺¹⁾; ln x → (−1)ⁿ⁻¹(n−1)! x⁻ⁿ (n ≥ 1).

## What the objects are

There is nothing new to differentiate with — the Week 5 rules (constant, power, constant multiple, sum, product, quotient, chain) are the *only* tools. What is new is **iterating** them and reading the result.

| Order | Prime | Leibniz | Operator | Reads as |
|---|---|---|---|---|
| 1st | f′(x), y′ | dy/dx | D_x y | rate of change; gradient of the tangent |
| 2nd | f″(x), y″ | d²y/dx² | D²_x y | rate of change **of the rate of change**; concavity; acceleration |
| 3rd | f‴(x) | d³y/dx³ | D³_x y | rate of change of the acceleration — jerk |
| 4th | f⁽⁴⁾(x) | d⁴y/dx⁴ | D⁴_x y | jounce/snap; beam loading EI·d⁴y/dx⁴ = w(x) |
| nth | f⁽ⁿ⁾(x) | dⁿy/dxⁿ | Dⁿ_x y | differentiate n times in succession |

**Why the Leibniz superscripts sit where they do.** d²y/dx² is shorthand for (d/dx)(d/dx)y: the operator d/dx is applied twice, so the "2" is on the *whole* d in the numerator and on the *whole* dx in the denominator. Writing d²y/d²x or cancelling a d is meaningless.

**Types of higher-order derivative you may meet.** Repeated ordinary derivatives (the whole of this week); repeated derivatives of an **implicit** relation (d²y/dx² for x² + y² = 25); repeated derivatives of **parametric** equations; and **partial** second derivatives ∂²z/∂x², ∂²z/∂y², ∂²z/∂x∂y for functions of two variables.

## Concavity, inflection and the second-derivative test

- f″(x) > 0 on an interval: gradient **increasing**, curve **concave up** (holds water), lies above each tangent.
- f″(x) < 0: gradient **decreasing**, curve **concave down**, lies below each tangent.
- **Point of inflection** at x = c: the concavity changes, i.e. f″ changes sign at c. f″(c) = 0 is *necessary* (when f″ exists) but **not sufficient** — y = x⁴ has y″(0) = 0 yet is concave up on both sides, so x = 0 is a minimum, not an inflection.
- A **stationary (horizontal) inflection** has f′(c) = 0 *and* f″ changing sign — e.g. y = x³ at x = 0.
- Four independent facts, never to be merged: f′ > 0 (rising), f′ < 0 (falling), f″ > 0 (concave up), f″ < 0 (concave down). All four combinations occur.

## Kinematic and applied readings

For s(t) in metres, t in seconds: v = ds/dt (m s⁻¹), a = d²s/dt² (m s⁻²), jerk = d³s/dt³ (m s⁻³).

- "**At rest**" means v = 0, **not** a = 0. "**Acceleration zero**" is where v is stationary — v at a maximum or minimum.
- **Speeding up ⟺ v and a have the same sign** (because d/dt(½v²) = va). Negative acceleration with negative velocity means *speeding up backwards*.
- **Economics:** C′(x) is marginal cost; C″(x) < 0 with C′(x) > 0 means total cost still rising but each extra unit costs less than the last (economies of scale). Same reading for profit, revenue and utility.
- **Engineering:** in control-system and structural design the third and fourth derivatives are the design quantities — jerk governs ride comfort, and beam deflection satisfies EI·d⁴y/dx⁴ = w(x).

## Worked examples

**(1) Polynomial, all orders.** y = 3x⁵ − 4x³ + 2x² − 7.
y′ = 15x⁴ − 12x² + 4x; y″ = 60x³ − 24x + 4; y‴ = 180x² − 24; y⁽⁴⁾ = **360x**; y⁽⁵⁾ = **360**; y⁽⁶⁾ = **0**.
Note the check: degree 5, so the 5th derivative is the constant 3·5! = 3·120 = 360 ✓ and everything above it vanishes. The −7 dies at the first step; the +4x survives to the second derivative as +4 and dies at the third.

**(2) Product rule, iterated.** y = x²eˣ.
y′ = 2xeˣ + x²eˣ = eˣ(x² + 2x).
y″ = eˣ(x² + 2x) + eˣ(2x + 2) = **eˣ(x² + 4x + 2)**.
y‴ = eˣ(x² + 4x + 2) + eˣ(2x + 4) = **eˣ(x² + 6x + 6)**.
Each new order needs the **whole product rule again** — you cannot differentiate the two factors separately. The wrong formula u″v + uv″ would give eˣ(x² + 2), short by the cross term 2u′v′ = 4xeˣ.

**(3) Chain rule, iterated — the factors multiply up.** y = sin 3x.
y′ = 3cos 3x; y″ = −9 sin 3x; y‴ = −27 cos 3x; y⁽⁴⁾ = **81 sin 3x**.
So y″ = −9y — the curve satisfies y″ + 9y = 0, and the pattern repeats with period 4 in the *function* and a factor 3 per order in the *coefficient*. Generally d ⁿ/dxⁿ sin(ax) = aⁿ sin(ax + nπ/2).

**(4) Negative power — the general nth derivative.** y = 1/(2x + 1) = (2x + 1)⁻¹.
y′ = −1(2x + 1)⁻²·2 = −2(2x + 1)⁻²;
y″ = −2·(−2)(2x + 1)⁻³·2 = **8(2x + 1)⁻³**;
y‴ = 8·(−3)(2x + 1)⁻⁴·2 = **−48(2x + 1)⁻⁴**.
Pattern: **y⁽ⁿ⁾ = (−1)ⁿ·n!·2ⁿ·(2x + 1)⁻⁽ⁿ⁺¹⁾**. Three separate sources: (−1)ⁿ from the falling negative exponent, n! from the descending coefficients 1, 2, 6, 24, and 2ⁿ from the chain rule once per order. Check n = 3: (−1)³·6·8 = −48 ✓.

**(5) Roots and logs.** y = √x = x^{1/2}: y′ = ½x^{−1/2}, y″ = −¼x^{−3/2}, y‴ = (3/8)x^{−5/2}.
y = ln x: y′ = x⁻¹, y″ = −x⁻², y‴ = 2x⁻³, y⁽⁴⁾ = −6x⁻⁴, i.e. **y⁽ⁿ⁾ = (−1)ⁿ⁻¹(n−1)!·x⁻ⁿ** for n ≥ 1.

**(6) Second-derivative test in full.** f(x) = x³ − 3x² − 9x + 5.
f′(x) = 3x² − 6x − 9 = 3(x − 3)(x + 1) ⟹ stationary at x = 3 and x = −1.
f″(x) = 6x − 6. f″(3) = 12 > 0 ⟹ **local minimum**, f(3) = 27 − 27 − 27 + 5 = **−22**.
f″(−1) = −12 < 0 ⟹ **local maximum**, f(−1) = −1 − 3 + 9 + 5 = **10**.
f″ = 0 at x = 1, and 6x − 6 changes sign there, so (1, f(1)) = (1, **−6**) is a genuine **point of inflection**.

**(7) When the test fails.** f(x) = x⁴ − 4x³. f′ = 4x³ − 12x² = 4x²(x − 3) ⟹ stationary at x = 0, 3.
f″ = 12x² − 24x = 12x(x − 2). f″(3) = 36 > 0 ⟹ minimum, f(3) = **−27**.
f″(0) = 0 ⟹ **test inconclusive**. Sign of f′ = 4x²(x − 3): negative for x < 0 and negative for 0 < x < 3 — **no change**, so x = 0 is neither max nor min; it is a **stationary point of inflection** (f″ changes sign at 0, from + to −). f″ also changes sign at x = 2, giving a second inflection at (2, **−16**).

**(8) Motion.** s = t³ − 6t² + 9t + 2 (m, s ≥ 0).
v = ds/dt = 3t² − 12t + 9 = 3(t − 1)(t − 3); a = d²s/dt² = 6t − 12; jerk = 6 (constant).
**At rest** at t = 1 s and t = 3 s. At t = 1, a = −6 m s⁻²; at t = 3, a = +6 m s⁻².
**a = 0** at t = 2 s, where v = 12 − 24 + 9 = **−3 m s⁻¹** — the velocity is at its minimum there, and the particle is moving backwards, not standing still.
Between t = 1 and t = 2, v < 0 and a < 0: same sign, so it is **speeding up** (backwards) even though the acceleration is negative.

**(9) Implicit second derivative.** x² + y² = 25.
2x + 2y·dy/dx = 0 ⟹ dy/dx = −x/y.
d²y/dx² = d/dx(−x/y) = −[(1)(y) − x(dy/dx)]/y² = −[y − x(−x/y)]/y² = −[y + x²/y]/y² = −(y² + x²)/y³ = **−25/y³**.
Two obligatory steps: **substitute dy/dx back in** (it is not a constant), then **use the original equation** to simplify x² + y² to 25.

**(10) Higher derivative of a product — the correct expansion.** (uv)″ = u″v + **2u′v′** + uv″. For u = x², v = e^{−x}: u″v = 2e^{−x}, 2u′v′ = −4xe^{−x}, uv″ = x²e^{−x}, total **e^{−x}(x² − 4x + 2)**, which is what differentiating y′ = e^{−x}(2x − x²) directly gives.

## Commonly confused

- **f″(x) vs [f′(x)]².** For f = x³: f″ = 6x, [f′]² = 9x⁴. The prime counts differentiations; it never means "raise to a power".
- **d²y/dx² vs (dy/dx)².** Test by units: if y is metres and x seconds, d²y/dx² is m/s² but (dy/dx)² is m²/s². Different dimensions, so they cannot be the same thing.
- **d²y/dx² written as d²y/d²x.** The 2 belongs to the whole dx, because the operator (d/dx) is squared, not the variable.
- **f⁽⁴⁾ vs f⁴.** From the fourth order onward the brackets are compulsory: f⁴(x) would read as [f(x)]⁴.
- **f″ > 0 means "increasing".** No — that is f′ > 0. f(x) = e^{−x} is decreasing everywhere yet f″ = e^{−x} > 0 everywhere (concave up).
- **f″(c) = 0 means "inflection at c".** Only a candidate: y = x⁴ at x = 0 has y″ = 0 but no change of concavity, so it is a minimum.
- **f′(c) = 0 vs f″(c) = 0.** The first locates stationary points; the second locates candidate inflections. A stationary inflection has both.
- **Negative acceleration means slowing down.** Only if the velocity is positive. Same signs ⟹ speeding up; opposite signs ⟹ slowing down.
- **"At rest" vs "acceleration zero".** v = 0 vs a = 0 — two different times in general.
- **(uv)″ = u″v + uv″.** Missing the cross term 2u′v′; the product rule must be applied again to every term.
- **A degree-n polynomial has f⁽ⁿ⁾ = 0.** Off by one: f⁽ⁿ⁾ is the constant a·n!, and it is f⁽ⁿ⁺¹⁾ that is 0.
- **Dropping the chain factor on later orders.** For (2x + 1)⁶ each differentiation supplies another factor 2: y‴ = 6·5·4·2³(2x+1)³ = 960(2x+1)³, not 120(2x+1)³.
- **Implicit second derivatives left with dy/dx in them.** d²y/dx² must be expressed in x and y only — substitute the first derivative back before simplifying.

---

*Note on the source: this week's deck extracts as slide titles only — FIRST-ORDER DERIVATIVE, FIRST DERIVATIVE, SECOND-ORDER DERIVATIVE, THIRD-ORDER DERIVATIVE, THIRD DERIVATIVE, FOURTH DERIVATIVE (five slides), TASK, APPLICATION TO THE REAL-WORLD — because every formula and worked example sits inside a slide image that the text extractor cannot read. The week summary sheet names the same list plus the stated objectives (identify the different types of higher-order derivative; calculate higher-order derivatives; apply the rules of differentiation for higher orders), the prime and Leibniz notations, the first/second/third derivative as rate of change, acceleration and jerk, and then gives only an engineering control-systems case study. Every formula, statement and example above is the standard 100-level treatment of exactly those named objectives.*
