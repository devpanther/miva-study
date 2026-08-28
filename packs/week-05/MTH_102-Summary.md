# MTH_102 — Week 5 Summary

*Elementary Mathematics II (Calculus) · Week 5 (5–11 Oct 2026) · Topic: Differentiation — Formulae, Rules and Examples*

## The 8 most examinable things this week

1. The definition from **first principles**: f′(x) = lim_{h→0} [f(x+h) − f(x)]/h. This is exactly the Week 3–4 limit machinery applied to one particular quotient — the fraction is 0/0 at h = 0, so you **simplify first, then let h → 0**.
2. The **power rule** d/dx(xⁿ) = n·xⁿ⁻¹ — and the rewriting that makes it apply: √x = x^{1/2}, 1/x³ = x⁻³, ∛x = x^{1/3}.
3. The **product rule** (uv)′ = u′v + uv′ — **not** u′v′.
4. The **quotient rule** (u/v)′ = (u′v − uv′)/v² — numerator order matters, denominator is **squared**.
5. The **chain rule** dy/dx = (dy/du)(du/dx), i.e. d/dx[f(g(x))] = f′(g(x))·g′(x) — the **inner derivative** is the mark most often dropped.
6. The **standard derivatives**: sin, cos, tan; eˣ and aˣ (= aˣ ln a); ln x (= 1/x) and log_a x.
7. **Notation**: dy/dx, f′(x), y′, D_x y all mean the same thing; second and higher orders d²y/dx², f″(x), D_x²y.
8. **Implicit** differentiation (every y-term carries a dy/dx) and the **geometric** reading: f′(a) is the **slope of the tangent** at x = a.

## The derivative from first principles

For y = f(x), the **average** rate of change between x and x + h is the difference quotient [f(x+h) − f(x)]/h — the slope of the **chord**. Letting the chord shrink gives the **instantaneous** rate of change:

**f′(x) = lim_{h→0} [f(x+h) − f(x)]/h**   (equivalently lim_{Δx→0} Δy/Δx)

- **Geometric meaning.** f′(a) is the **gradient of the tangent line** to y = f(x) at the point (a, f(a)); the tangent there is y − f(a) = f′(a)(x − a).
- **Why it needs limits.** Putting h = 0 directly gives 0/0. The algebra (expanding, cancelling the h) removes the indeterminate form; only then do you substitute h = 0.
- f is **differentiable** at a only if the limit exists — a corner (like |x| at 0) or a vertical tangent has no derivative.
- **Notation.** dy/dx (Leibniz, stresses "rate of change of y per unit x"), f′(x) or y′ (Lagrange, stresses "a new function"), D_x y (operator form, "differentiate with respect to x"). f′(a) is a **number**; f′(x) is a **function**. dy/dx is a single symbol, **not** a fraction dy ÷ dx.
- **Higher orders.** f″(x) = d²y/dx² = D_x²y is the derivative of the derivative; then f‴(x), f⁽⁴⁾(x), …

## The rules — exact statements

Let u = u(x), v = v(x), c a constant, n any real number.

| Rule | Statement |
|---|---|
| Constant | d/dx(c) = 0 |
| Power | d/dx(xⁿ) = n·xⁿ⁻¹ |
| Constant multiple | d/dx[c·u] = c·(du/dx) |
| Sum / difference | d/dx[u ± v] = du/dx ± dv/dx |
| Product | d/dx[u·v] = u′v + uv′ |
| Quotient | d/dx[u/v] = (u′v − uv′)/v², v ≠ 0 |
| Chain | if y = f(u) and u = g(x), dy/dx = (dy/du)(du/dx) = f′(g(x))·g′(x) |

**Standard derivatives** (all with the chain-rule form beside them, u = u(x)):

- sin x → cos x  |  sin u → (cos u)·u′
- cos x → −sin x  |  cos u → (−sin u)·u′
- tan x → sec²x  |  tan u → (sec²u)·u′
- cot x → −cosec²x; sec x → sec x·tan x; cosec x → −cosec x·cot x
- eˣ → eˣ  |  e^u → e^u·u′ (so e^{kx} → k·e^{kx})
- aˣ → aˣ·ln a (a > 0, a ≠ 1)  |  a^u → a^u·ln a·u′
- ln x → 1/x  |  ln u → u′/u
- log_a x → 1/(x ln a)
- **General power form:** d/dx[u]ⁿ = n·uⁿ⁻¹·u′ — the single most used line in the exam.

**Implicit differentiation.** When y is not isolated, differentiate both sides with respect to x, applying the chain rule to every y-term (d/dx(y³) = 3y²·dy/dx), then collect the dy/dx terms and factor.

**Parametric.** If x = x(t) and y = y(t), then dy/dx = (dy/dt)/(dx/dt), provided dx/dt ≠ 0.

**Partial.** For z = f(x, y), ∂z/∂x differentiates in x treating y as a constant, and ∂z/∂y the other way round.

## Worked examples

**(1) First principles.** f(x) = 3x² − 5x.
f(x+h) = 3(x+h)² − 5(x+h) = 3x² + 6xh + 3h² − 5x − 5h.
f(x+h) − f(x) = 6xh + 3h² − 5h = h(6x + 3h − 5).
Divide by h (legal because h ≠ 0 in the limit): 6x + 3h − 5. Now let h → 0: **f′(x) = 6x − 5.**
Same method on f(x) = 1/x: [1/(x+h) − 1/x]/h = [x − (x+h)]/[h·x(x+h)] = −1/[x(x+h)] → **−1/x²**, which the power rule confirms (x⁻¹ → −x⁻²).

**(2) Power, constant multiple, sum/difference — after rewriting.** y = 4√x − 6/x² + 9.
Rewrite: y = 4x^{1/2} − 6x⁻² + 9. Then dy/dx = 4·(1/2)x^{−1/2} − 6·(−2)x⁻³ + 0 = **2/√x + 12/x³.**
Note the two sign traps: the constant 9 dies, and (−6)·(−2) = **+12**.

**(3) Product rule.** y = (2x² + 1)(x³ − 4x).
u = 2x² + 1, u′ = 4x; v = x³ − 4x, v′ = 3x² − 4.
dy/dx = 4x(x³ − 4x) + (2x² + 1)(3x² − 4) = 4x⁴ − 16x² + 6x⁴ − 5x² − 4 = **10x⁴ − 21x² − 4.**
Check by expanding first: y = 2x⁵ − 7x³ − 4x ⟹ y′ = 10x⁴ − 21x² − 4 ✓ (the two routes must agree).

**(4) Quotient rule.** y = (3x − 1)/(x² + 2).
u = 3x − 1, u′ = 3; v = x² + 2, v′ = 2x.
dy/dx = [3(x² + 2) − (3x − 1)(2x)]/(x² + 2)² = [3x² + 6 − 6x² + 2x]/(x² + 2)² = **(−3x² + 2x + 6)/(x² + 2)².**
The same rule proves a standard formula: d/dx(tan x) = d/dx(sin x/cos x) = [cos x·cos x − sin x·(−sin x)]/cos²x = 1/cos²x = **sec²x.**

**(5) Chain rule.** y = (3x² + 5)⁴. Put u = 3x² + 5, y = u⁴.
dy/du = 4u³, du/dx = 6x ⟹ dy/dx = 4(3x² + 5)³·6x = **24x(3x² + 5)³.**
Same pattern: d/dx sin(5x²) = cos(5x²)·10x = **10x cos(5x²)**; d/dx e^{x²} = **2x e^{x²}**; d/dx ln(3x² + 1) = **6x/(3x² + 1)**.

**(6) Product and chain together.** y = x²(2x + 1)⁵.
u = x², u′ = 2x; v = (2x + 1)⁵, v′ = 5(2x + 1)⁴·2 = 10(2x + 1)⁴.
dy/dx = 2x(2x + 1)⁵ + 10x²(2x + 1)⁴ = 2x(2x + 1)⁴[(2x + 1) + 5x] = **2x(2x + 1)⁴(7x + 1).**
Always factor out the **lowest** power of the repeated bracket — that is the form marks are given for.

**(7) Quotient and chain together.** y = (x² + 1)³/(2x − 1).
u′ = 3(x² + 1)²·2x = 6x(x² + 1)²; v′ = 2.
dy/dx = [6x(x² + 1)²(2x − 1) − 2(x² + 1)³]/(2x − 1)² = 2(x² + 1)²[3x(2x − 1) − (x² + 1)]/(2x − 1)² = **2(x² + 1)²(5x² − 3x − 1)/(2x − 1)².**

**(8) Implicit differentiation.** x² + xy + y² = 7.
Differentiate term by term (xy needs the **product** rule): 2x + [y + x·dy/dx] + 2y·dy/dx = 0.
Collect: dy/dx(x + 2y) = −(2x + y) ⟹ **dy/dx = −(2x + y)/(x + 2y).**
Simplest case: x² + y² = 25 ⟹ 2x + 2y·dy/dx = 0 ⟹ dy/dx = −x/y; at (3, 4) the slope is −3/4 and the tangent is 3x + 4y = 25.

**(9) Higher derivatives and parametrics.** y = x⁴ − 3x³ + 2x: y′ = 4x³ − 9x² + 2, y″ = 12x² − 18x, y‴ = 24x − 18, y⁽⁴⁾ = 24, y⁽⁵⁾ = 0.
Parametric: x = t², y = t³ − 3t ⟹ dx/dt = 2t, dy/dt = 3t² − 3, so **dy/dx = (3t² − 3)/(2t).**
Partial: z = x²y + 3y² ⟹ ∂z/∂x = 2xy, ∂z/∂y = x² + 6y.

**(10) Tangent line (the geometric payoff).** y = x³ − 2x at x = 2: y′ = 3x² − 2, so the slope is 3(4) − 2 = **10**; the point is (2, 4); tangent **y = 10x − 16**.

## Commonly confused

- **Product rule vs "differentiate each factor".** (uv)′ ≠ u′v′. Test it: (x·x)′ = 2x, but x′·x′ = 1.
- **Quotient rule numerator order.** It is u′v − uv′, **not** uv′ − u′v. Test on y = x²/x = x: correct gives (2x·x − x²)/x² = 1 ✓; swapped gives −1 ✗.
- **Forgetting to square the denominator** in the quotient rule, or using the quotient rule when the denominator is a constant — (3x² + 1)/5 is just (1/5)(3x² + 1), so the answer is 6x/5.
- **Chain rule with the inner derivative dropped.** d/dx(3x + 1)⁷ = 7(3x + 1)⁶·**3** = 21(3x + 1)⁶. Check on (3x+1)²: expanding gives 18x + 6 = 6(3x + 1), not 2(3x + 1).
- **d/dx(aˣ) vs d/dx(xᵃ).** Variable **exponent**: 3ˣ → 3ˣ ln 3. Variable **base**: x³ → 3x². The power rule needs the base to be the variable and the exponent to be constant; x·3^{x−1} is meaningless here.
- **eˣ is its own derivative** — not x·e^{x−1}. But e^{5x} → 5e^{5x} (chain).
- **sin(x²) vs sin²x.** d/dx sin(x²) = 2x cos(x²); d/dx sin²x = 2 sin x·cos x. Different composition, different answer.
- **d/dx(tan x) = sec²x**, while d/dx(sec x) = sec x tan x — these two get swapped constantly.
- **ln of a product.** d/dx ln(5x) = 1/x (since 5/(5x) = 1/x), and d/dx(ln x)² = 2(ln x)/x — not the same as d/dx ln(x²) = 2/x.
- **Constant multiple vs constant inside.** d/dx(4x³) = 12x², but d/dx(4x)³ = d/dx(64x³) = 192x².
- **Derivative of a constant is 0**, not the constant: d/dx(2π) = 0 but d/dx(2πx) = 2π.
- **Implicit differentiation without dy/dx.** d/dx(y³) = 3y²·dy/dx, not 3y². Any y-term differentiated in x must produce a dy/dx factor.
- **Sign traps with negative exponents.** d/dx(−6x⁻²) = +12x⁻³; two minus signs make a plus.
- **f′ misread as "f squared".** f″(x) means differentiate twice, not [f′(x)]².

---

*Note on the source: this week's deck extracts as slide titles only — POWER RULE, PRODUCT RULE, QUOTIENT RULE, CHAIN RULE, IMPLICIT FUNCTION, PARAMETRIC DIFFERENTIATION, CONSTANT RULE, THE FIRST PRINCIPLE, CONSTANT MULTIPLE RULE, PARTIAL DIFFERENTIATION — because every formula and worked example sits inside a slide image that the text extractor cannot read. The week summary sheet names the same list plus the notations and the orders of derivatives, and then gives only a structural-engineering case study. Every formula, statement and example above is the standard 100-level treatment of exactly those named objectives.*
