# MTH_102 — Week 5 Summary

*Elementary Mathematics II (Calculus) · Week 5 (5 – 11 Oct 2026) · Topic: Differentiation — Formulae, Rules and Worked Examples*

## The 8 most examinable things this week

1. **The derivative is a limit, and it is the limit you have been practising for two weeks.** f′(x) = lim_{h→0} [f(x + h) − f(x)]/h. The quotient is 0/0 at h = 0 — exactly the Week 3 indeterminate form — so you cancel the h **while h ≠ 0** and then take the limit. The limit never evaluates the quotient at h = 0.
2. **Geometrically, f′(a) is the slope of the *tangent* at (a, f(a)), obtained as the limit of the slopes of *secants*.** [f(a + h) − f(a)]/h is the secant slope over [a, a + h]; letting h → 0 swings the secant onto the tangent. The derivative is a **number** at a point and a **function** of x in general — never an equation of a line.
3. **Notation is examinable in itself:** f′(x), dy/dx, y′, Df(x) all mean the same thing. Higher orders: f″(x) = d²y/dx² = y″ is the derivative *of the derivative*, **not** the square of the first derivative. d²y/dx² and (dy/dx)² are different objects.
4. **Power rule works for every real constant n:** d/dx(xⁿ) = n x^(n−1). It therefore covers negative exponents (1/x² = x⁻²) and fractional ones (√x = x^(1/2)) — **rewrite first, then differentiate**. It does **not** touch aˣ, where the *exponent* varies: d/dx(aˣ) = aˣ ln a.
5. **Product rule: d/dx(uv) = u′v + uv′ — two terms added, never u′v′.** The derivative of a product is *not* the product of the derivatives; the two-term structure is what records that both factors are changing at once.
6. **Quotient rule: d/dx(u/v) = (u′v − uv′)/v², v ≠ 0. The order is fixed and the subtraction is not commutative** — writing (uv′ − u′v)/v² gives exactly the negative of the right answer, and the denominator is **v squared**, not v.
7. **Chain rule: y = f(u), u = g(x) ⟹ dy/dx = (dy/du)(du/dx) = f′(g(x))·g′(x).** The outer derivative is evaluated at the **inner function**, then **multiplied by the inner derivative**. Dropping that final factor is the single commonest error in the whole topic.
8. **Rules compose.** Identify the **outermost** structure first (is it a product? a quotient? a composite?), apply that rule, and let the sub-derivatives call whatever further rules they need. A chain inside a product and a chain inside a quotient are standard exam items.

## The derivative from first principles

**Definition.** f is *differentiable* at x if the limit

> **f′(x) = lim_{h→0} [f(x + h) − f(x)] / h**

exists (finitely). The equivalent point form is f′(a) = lim_{x→a} [f(x) − f(a)]/(x − a). Differentiability at a point **implies** continuity there; continuity does **not** imply differentiability (|x| at 0 is continuous with a corner — the Week 4 note now pays off).

**Worked (first principles), f(x) = 3x² − 5x + 2.**
f(x + h) = 3(x² + 2xh + h²) − 5x − 5h + 2 = 3x² + 6xh + 3h² − 5x − 5h + 2.
f(x + h) − f(x) = 6xh + 3h² − 5h = h(6x + 3h − 5).
Divide by h — **legal because h ≠ 0 during the approach** — to get 6x + 3h − 5, then let h → 0: **f′(x) = 6x − 5.**

## Standard derivatives — the table to memorise

| f(x) | f′(x) | | f(x) | f′(x) |
|---|---|---|---|---|
| k (constant) | 0 | | sin x | cos x |
| xⁿ (n real) | n x^(n−1) | | cos x | −sin x |
| x | 1 | | tan x | sec²x |
| √x = x^(1/2) | 1/(2√x) | | sec x | sec x tan x |
| 1/x = x⁻¹ | −1/x² | | cosec x | −cosec x cot x |
| eˣ | eˣ | | cot x | −cosec²x |
| aˣ | aˣ ln a | | ln x | 1/x |
| e^(kx) | k e^(kx) | | log_a x | 1/(x ln a) |

## The rules, stated exactly — one worked example each

**Constant rule.** k constant ⟹ d/dx(k) = 0. *Proof in one line:* [k − k]/h = 0 for every h ≠ 0, so the limit is 0. *Example:* y = π⁴ + e³ ⟹ **dy/dx = 0**. (π⁴ and e³ are numbers, not powers of a variable.)

**Constant multiple rule.** d/dx[k·f(x)] = k·f′(x) — constants ride through the limit untouched. *Example:* d/dx(5x⁴) = 5·(4x³) = **20x³**.

**Sum / difference rule.** d/dx[u ± v] = u′ ± v′; differentiate term by term. *Example:* y = 4x³ − 7x² + 2x − 9 ⟹ **dy/dx = 12x² − 14x + 2** (the −9 dies by the constant rule).

**Power rule.** d/dx(xⁿ) = n x^(n−1) for every real constant n. *Example (rewrite first):* y = 3/x² + √x = 3x⁻² + x^(1/2).
dy/dx = 3(−2)x⁻³ + (1/2)x^(−1/2) = **−6/x³ + 1/(2√x)**.

**Product rule.** u, v differentiable ⟹ d/dx(uv) = **u′v + uv′**. *Example:* y = (2x³ − 4x)(x² + 5).
u = 2x³ − 4x, u′ = 6x² − 4; v = x² + 5, v′ = 2x.
dy/dx = (6x² − 4)(x² + 5) + (2x³ − 4x)(2x) = (6x⁴ + 26x² − 20) + (4x⁴ − 8x²) = **10x⁴ + 18x² − 20**.
*Check:* expanding first gives y = 2x⁵ + 6x³ − 20x, whose derivative is 10x⁴ + 18x² − 20. ✓ (The product of the derivatives, (6x² − 4)(2x) = 12x³ − 8x, is not even of the right degree.)

**Quotient rule.** v ≠ 0 ⟹ d/dx(u/v) = **(u′v − uv′)/v²**. *Example:* y = (3x + 2)/(x² + 1).
u = 3x + 2, u′ = 3; v = x² + 1, v′ = 2x.
dy/dx = [3(x² + 1) − (3x + 2)(2x)]/(x² + 1)² = [3x² + 3 − 6x² − 4x]/(x² + 1)² = **(−3x² − 4x + 3)/(x² + 1)²**.
(Reversing the numerator gives (3x² + 4x − 3)/(x² + 1)² — the exact negative, and the marker's favourite trap.)

**Chain rule.** y = f(u), u = g(x), g differentiable at x and f at g(x) ⟹ **dy/dx = (dy/du)(du/dx)**. *Example:* y = (3x² + 5)⁴. Put u = 3x² + 5, so y = u⁴.
dy/du = 4u³, du/dx = 6x ⟹ dy/dx = 4(3x² + 5)³ · 6x = **24x(3x² + 5)³**.
(Forgetting du/dx leaves 4(3x² + 5)³ — which agrees with the truth only at the single point x = 1/6.)

**Nested — a chain *inside* a product.** y = x²(2x + 1)⁵. Outermost structure is a **product**.
u = x², u′ = 2x; v = (2x + 1)⁵, which needs the **chain rule**: v′ = 5(2x + 1)⁴·2 = 10(2x + 1)⁴.
dy/dx = 2x(2x + 1)⁵ + x²·10(2x + 1)⁴ = 2x(2x + 1)⁴[(2x + 1) + 5x] = **2x(2x + 1)⁴(7x + 1)**.

**Nested — a chain *inside* a quotient.** y = (2x + 3)⁴/(x − 1). Outermost structure is a **quotient**.
u = (2x + 3)⁴ ⟹ u′ = 4(2x + 3)³·2 = 8(2x + 3)³; v = x − 1, v′ = 1.
dy/dx = [8(2x + 3)³(x − 1) − (2x + 3)⁴]/(x − 1)² = (2x + 3)³[8(x − 1) − (2x + 3)]/(x − 1)² = **(2x + 3)³(6x − 11)/(x − 1)²**.

## Also named this week — the one-line versions

- **Implicit differentiation.** Differentiate both sides with respect to x, applying the **chain rule** to every y-term (d/dx(y²) = 2y·dy/dx), then solve for dy/dx. *Example:* x² + y² = 25 ⟹ 2x + 2y·dy/dx = 0 ⟹ **dy/dx = −x/y**.
- **Parametric differentiation.** x = x(t), y = y(t) ⟹ **dy/dx = (dy/dt)/(dx/dt)**, dx/dt ≠ 0. *Example:* x = t² + 1, y = t³ − t ⟹ dy/dx = (3t² − 1)/(2t).
- **Higher orders.** Differentiate again: y = x⁴ ⟹ y′ = 4x³, y″ = 12x², y‴ = 24x.
- **Partial differentiation.** For f(x, y), ∂f/∂x treats y as a **constant** and vice versa: f = x²y³ ⟹ ∂f/∂x = 2xy³, ∂f/∂y = 3x²y².

## Commonly confused

- **"The derivative of a product is the product of the derivatives."** The headline error. d/dx(x³·x⁵) = d/dx(x⁸) = 8x⁷, while u′v′ = 3x²·5x⁴ = 15x⁶ — wrong coefficient *and* wrong degree. The rule has **two added terms** because at any instant both factors are changing.
- **Quotient rule order and sign.** It is (u′v − uv′)/v², *numerator's derivative first*. The reversed version gives the exact negative — a sign error that costs the whole mark. And the denominator is **v², not v**.
- **Forgetting the inner derivative in the chain rule.** d/dx[(4x − 7)⁶] = 6(4x − 7)⁵ **· 4** = 24(4x − 7)⁵. Writing 6(4x − 7)⁵ is the commonest single slip in the topic. Sanity check: if the inner function is linear, the missing factor is just its slope.
- **Multiplying by the inner function instead of its derivative.** 6(4x − 7)⁵·(4x − 7) is a *seventh* power — the structure is wrong, not just the number.
- **Power rule aimed at an exponential.** d/dx(2ˣ) is **2ˣ ln 2**, not x·2^(x−1). The power rule needs the *base* to vary and the exponent to be constant; here it is the other way round.
- **Not reducing the exponent.** d/dx(x⁵) = 5x⁴, not 5x⁵. And d/dx(√x) = (1/2)x^(−1/2) = 1/(2√x), not (1/2)√x.
- **Sign of a negative exponent.** d/dx(−2/x) = d/dx(−2x⁻¹) = +2x⁻² = **+2/x²**. Two negatives; students keep one.
- **d²y/dx² vs (dy/dx)².** The second derivative of x⁴ is 12x²; the square of the first derivative is 16x⁶. Different objects, similar-looking notation.
- **Constants dressed as powers.** In y = x² + π⁴, the π⁴ differentiates to **0**. Only the *variable* carries a power rule.
- **Stopping before simplifying.** Nested answers are marked in factored form: 2x(2x + 1)⁴(7x + 1), not the unfactored sum. Pull out the lowest power of the repeated bracket, then tidy the remaining bracket.
- **Differentiability vs continuity.** Differentiable ⟹ continuous, never the reverse. |x| is continuous at 0 but the difference quotient tends to −1 from the left and +1 from the right, so f′(0) does not exist — Week 4's corner, now explained.

---

*Note on the source: this week's deck is almost entirely images — apart from the title, the learning objectives and a short prose introduction, every slide (POWER RULE, PRODUCT RULE, QUOTIENT RULE, CHAIN RULE, CONSTANT RULE, CONSTANT MULTIPLE RULE, THE FIRST PRINCIPLE ×3, IMPLICIT FUNCTION ×2, PARAMETRIC DIFFERENTIATION, PARTIAL DIFFERENTIATION, and two TASKs) carries a heading and nothing readable underneath, so the deck text contains **no formula and no worked example at all**. The accompanying Summary sub-document supplies the topic list — definition of a derivative, its geometric interpretation as the slope of the tangent, the notations f′, dy/dx, y′, orders of derivatives, and the methods listed as first principle, power, product, quotient, chain, implicit, parametric and partial — plus a structural-engineering case study with no mathematics in it. Every formula, table entry and worked example above is therefore supplied from the standard 100-level treatment against exactly those headings; the standard-derivative table (trigonometric, exponential and logarithmic entries) is named nowhere in the source but is the unavoidable exam companion to the rules the deck does name. The PDF extractor also dropped ligatures throughout the objectives ("dierentiation", "dierent"); these are restored here.*
