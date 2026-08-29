# MTH_102 — Week 5

*Elementary Mathematics II (Calculus) · Week 5 (5 – 11 Oct 2026)*

*Note on the source: the lecture deck "Differentiation: Formulae, Rules & Examples" extracted as slide titles only — every formula slide (POWER RULE, PRODUCT RULE, QUOTIENT RULE, CHAIN RULE, IMPLICIT FUNCTION, PARAMETRIC DIFFERENTIATION, CONSTANT RULE, THE FIRST PRINCIPLE, CONSTANT MULTIPLE RULE, PARTIAL DIFFERENTIATION) was an image. The written Summary strand ("Definition of Derivatives and its Geometric Representation") supplies the definition, geometric meaning, notations and orders of derivatives. Below is the standard content for exactly the topics those two strands name.*

## Most likely to be examined

1. State and use the first-principles definition: **f'(x) = lim(h→0) [f(x+h) − f(x)] / h**, and apply it to a quadratic or a simple rational function.
2. Geometric meaning: f'(a) is the **gradient of the tangent** to y = f(x) at x = a, obtained as the limiting value of the **gradient of the chord** through (a, f(a)) and (a+h, f(a+h)) as h → 0.
3. Power rule: **d/dx (xⁿ) = n·x^(n−1)** for any real n — including negative and fractional indices (1/x = x⁻¹, √x = x^(1/2)).
4. Product rule: **(uv)' = u'v + uv'**, and the fact that (uv)' ≠ u'v'.
5. Quotient rule: **(u/v)' = (u'v − uv')/v²** — numerator order and the v² denominator.
6. Chain rule: **dy/dx = (dy/du)(du/dx)**; for y = [g(x)]ⁿ, **dy/dx = n[g(x)]^(n−1)·g'(x)**.
7. Implicit differentiation: differentiate both sides w.r.t. x, replacing d(yⁿ)/dx by **n y^(n−1)·dy/dx**, then solve for dy/dx.
8. Parametric differentiation: **dy/dx = (dy/dt)/(dx/dt)**, valid where dx/dt ≠ 0.

## Definitions and notation

- **Derivative (first principle / ab initio):** f'(x) = lim(h→0) [f(x+h) − f(x)]/h, provided the limit exists. Equivalent form at a point: f'(a) = lim(x→a) [f(x) − f(a)]/(x − a).
- **δ-notation:** with y = f(x), δy = f(x+δx) − f(x), and dy/dx = lim(δx→0) δy/δx.
- **Notations:** f'(x), dy/dx, y', D_x y — all the same object. At a point: f'(a) or dy/dx |_(x=a).
- **Geometric representation:** the chord through (a, f(a)) and (a+h, f(a+h)) has gradient [f(a+h) − f(a)]/h. As h → 0 the second point slides along the curve towards the first, the chord rotates into the **tangent**, and its gradient tends to f'(a). So derivative = slope of tangent = instantaneous rate of change.
- **Tangent / normal at (a, f(a)):** tangent y − f(a) = f'(a)(x − a); normal y − f(a) = −(1/f'(a))(x − a).
- **Orders of derivatives:** first f'(x) = dy/dx; second f''(x) = d²y/dx² = d/dx(dy/dx); nth f⁽ⁿ⁾(x) = dⁿy/dxⁿ. f' measures how f changes; f'' measures how f' changes (concavity / acceleration).
- **Differentiability:** f'(a) exists only if the left-hand and right-hand limits of the difference quotient agree. Differentiable at a ⟹ continuous at a; the converse is false (|x| at x = 0).

## The rules, stated exactly

| Rule | Statement |
|---|---|
| Constant | d/dx (c) = 0 |
| Constant multiple | d/dx [c·f(x)] = c·f'(x) |
| Power | d/dx (xⁿ) = n x^(n−1), n ∈ ℝ |
| Sum / difference | d/dx [u ± v] = u' ± v' |
| Product | d/dx (uv) = u'v + uv' |
| Quotient | d/dx (u/v) = (u'v − uv')/v², v ≠ 0 |
| Chain | dy/dx = (dy/du)·(du/dx); d/dx [g(x)]ⁿ = n[g(x)]^(n−1) g'(x) |
| Implicit | differentiate both sides w.r.t. x; d/dx[F(y)] = F'(y)·dy/dx; then make dy/dx the subject |
| Parametric | x = x(t), y = y(t) ⟹ dy/dx = (dy/dt)/(dx/dt), dx/dt ≠ 0 |
| Partial | ∂f/∂x: differentiate w.r.t. x holding y constant; ∂f/∂y: hold x constant |

## Worked examples

**1 — First principles (quadratic).** f(x) = 3x² − 2x.
f(x+h) = 3(x+h)² − 2(x+h) = 3x² + 6xh + 3h² − 2x − 2h.
f(x+h) − f(x) = 6xh + 3h² − 2h.
[f(x+h) − f(x)]/h = h(6x + 3h − 2)/h = 6x + 3h − 2  (h ≠ 0).
f'(x) = lim(h→0)(6x + 3h − 2) = **6x − 2**.  (Power-rule check: 3·2x − 2 = 6x − 2 ✓)

**2 — First principles (rational).** f(x) = 1/x.
[f(x+h) − f(x)]/h = [1/(x+h) − 1/x]/h = [(x − (x+h))/(x(x+h))]/h = (−h)/(h·x(x+h)) = −1/(x(x+h)).
f'(x) = lim(h→0) −1/(x(x+h)) = **−1/x²** = −x⁻².  (Power rule: d/dx x⁻¹ = −1·x⁻² ✓)

**3 — Power rule, fractional and negative indices.** y = 4√x + 5/x³ = 4x^(1/2) + 5x⁻³.
dy/dx = 4·(1/2)x^(−1/2) + 5·(−3)x⁻⁴ = **2/√x − 15/x⁴**.

**4 — Constant and constant-multiple rules.** y = 7 + 6x⁴ ⟹ dy/dx = 0 + 6·4x³ = **24x³**.

**5 — Product rule.** y = x³(2x + 5). u = x³, v = 2x + 5; u' = 3x², v' = 2.
dy/dx = u'v + uv' = 3x²(2x + 5) + x³(2) = 6x³ + 15x² + 2x³ = **8x³ + 15x²**.
Check by expanding first: y = 2x⁴ + 5x³ ⟹ dy/dx = 8x³ + 15x² ✓  (u'v' = 6x² is wrong.)

**6 — Quotient rule.** y = (2x + 3)/(x² − 1). u = 2x+3, v = x²−1; u' = 2, v' = 2x.
dy/dx = [2(x² − 1) − (2x + 3)(2x)]/(x² − 1)² = [2x² − 2 − 4x² − 6x]/(x² − 1)²
= **(−2x² − 6x − 2)/(x² − 1)²**.

**7 — Chain rule.** y = (3x² + 1)⁵. Put u = 3x² + 1, so y = u⁵.
dy/du = 5u⁴, du/dx = 6x ⟹ dy/dx = 5u⁴·6x = **30x(3x² + 1)⁴**.

**8 — Chain rule with a root.** y = √(4x − 7) = (4x − 7)^(1/2).
dy/dx = (1/2)(4x − 7)^(−1/2)·4 = **2/√(4x − 7)**.

**9 — Implicit differentiation.** x² + y² = 25. Differentiate w.r.t. x:
2x + 2y·(dy/dx) = 0 ⟹ **dy/dx = −x/y** (y ≠ 0).
With a product term: x²y = 6 ⟹ 2xy + x²(dy/dx) = 0 ⟹ **dy/dx = −2y/x**.

**10 — Parametric differentiation.** x = t², y = t³.
dx/dt = 2t, dy/dt = 3t² ⟹ dy/dx = 3t²/(2t) = **3t/2** (t ≠ 0).

**11 — Higher-order derivatives.** y = x⁴ − 3x² ⟹ y' = 4x³ − 6x ⟹ y'' = **12x² − 6** ⟹ y''' = 24x.

**12 — Partial differentiation.** f(x, y) = x³y² + 4x − y.
∂f/∂x = **3x²y² + 4** (y held constant); ∂f/∂y = **2x³y − 1** (x held constant).

**13 — Tangent from the derivative.** y = x² at x = 3: f'(x) = 2x, f'(3) = 6, f(3) = 9.
Tangent: y − 9 = 6(x − 3) ⟹ **y = 6x − 9**.

## Commonly confused

- **Chord gradient vs tangent gradient.** [f(a+h) − f(a)]/h is the *chord*; only its limit as h → 0 is the *tangent*. Test: does an h still survive in your answer? Then you have not taken the limit.
- **(uv)' = u'v' vs the product rule.** Test on y = x³(2x+5): u'v' = 6x², but expanding gives 8x³ + 15x². Differentiation does not distribute over multiplication.
- **Quotient-rule order.** (u'v − uv')/v² — derivative of the *top* first. Test: re-derive it from u·v⁻¹ by product + chain; the minus sign comes from −v⁻².
- **Chain rule vs power rule alone.** d/dx (x²+3)⁴ ≠ 4(x²+3)³. Test: is the base anything other than a bare x? Then you owe a factor g'(x).
- **d(y²)/dx vs d(y²)/dy.** In implicit work y is a function of x, so d(y²)/dx = 2y·dy/dx. Test: is the letter you are differentiating the same as the variable you differentiate with respect to? If not, a dy/dx factor appears.
- **Continuity vs differentiability.** |x| is continuous at 0 but has no derivative there (left quotient → −1, right → +1). Test: do the one-sided difference quotients agree?
- **Parametric dy/dx vs dy/dt.** dy/dt alone is not the gradient of the curve; divide by dx/dt. Test: re-parametrise (t → 2t); the gradient must not change, but dy/dt does.
- **∂f/∂x vs df/dx.** In a partial derivative the other variable is a genuine constant, so it contributes no dy/dx factor — the exact opposite of implicit differentiation.
- **f'' vs (f')².** Second derivative = differentiate twice, not square once. Test on y = x³: f'' = 6x while (f')² = 9x⁴.
