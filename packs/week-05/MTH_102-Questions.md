# MTH_102 — Week 5 Questions
*Differentiation: formulae, rules and examples. Twelve multiple choice, three short answer. Answers at the bottom — work them before you look.*

## Multiple choice

**1.** The lecturer states the power rule as
A. f′(x) = nx^(n+1)
B. f′(x) = (n−1)xⁿ
C. f′(x) = nx^(n−1)
D. f′(x) = xⁿ/n

**2.** For f(x) = 3x¹⁰⁰ − 4x, f′(x) =
A. 300x⁹⁹ − 4x⁰
B. 300x⁹⁹ − 4
C. 300x⁹⁹ − 4x
D. 100x⁹⁹ − 4

**3.** For f(x) = x²·sin x, f′(x) =
A. x² cos x + 2x sin x
B. 2x cos x
C. x² cos x − 2x sin x
D. 2x sin x + x² sin x

**4.** For f(x) = (4x + 6)(2x³ − 5x), f′(x) =
A. 8x³ + 24x² − 32x − 30
B. 24x³ − 20x
C. 24x² − 20
D. 32x³ + 36x² − 40x − 30

**5.** The lecturer's quotient rule reads f′(x) =
A. [u(x)v′(x) − v(x)u′(x)] / (v(x))²
B. [v(x)u′(x) − u(x)v′(x)] / (v(x))²
C. [v(x)u′(x) − u(x)v′(x)] / v(x)
D. u′(x)/v′(x)

**6.** For f(x) = x / cos(x), f′(x) =
A. [cos x + sin x] / cos²x
B. [cos x − x sin x] / cos²x
C. [cos x + x sin x] / cos²x
D. 1 / (−sin x)

**7.** For f(x) = (6x − 3)/(5x²), f′(x) =
A. 6(1 − x) / 5x³
B. 6(x − 1) / 5x³
C. 6 / 10x
D. (30x² + 30x) / 5x⁴

**8.** For f(x) = cos(x²), f′(x) =
A. −sin(x²)
B. −sin(2x)
C. 2x cos(x²)
D. −2x sin(x²)

**9.** TASK slide 11: for f(x) = (2x − 4)², f′(x) =
A. 4x − 8
B. 8x − 16
C. 2(2x − 4)²
D. 4x² − 16x

**10.** Differentiating xy + 6x⁴ = y with respect to x gives dy/dx =
A. −24x³ − y
B. (24x³ + y) / (x − 1)
C. −(24x³ + y) / (x − 1)
D. 24x³ / (1 − x)

**11.** TASK slide 15: for x(t) = t⁴ and y(t) = 7t² − 5t, dy/dx =
A. 14t − 5
B. 4t³ / (14t − 5)
C. (14t − 5) / 4t
D. (14t − 5) / 4t³

**12.** For f(x, y) = 3x² + 2xy − y³, ∂f/∂y =
A. 2x − 3y²
B. 6x + 2y
C. 2xy − 3y²
D. −3y²

## Short answer

**13.** Differentiate y = √x from the first principle, showing every line the lecturer shows. Name the algebraic step that makes the limit possible and say why it is needed.

**14.** The PRODUCT RULE slide for f(x) = (4x + 6)(2x³ − 5x) prints its final line as f′(x) = 8x³ + 24x² − 32x − 30. Show that this is wrong, give the correct derivative, and say which earlier line on the slide is also misprinted.

**15.** Both slide 13 (implicit) and slide 21 (partial) differentiate an expression containing two letters, yet only one of them produces dy/dx factors. Explain the difference, using d/dx(y²) and ∂/∂x(y³) as your two examples.

---

## Answers

**1. C.** Multiply by the old power, then reduce the power by one: nx^(n−1). A raises the power instead of lowering it, which is the integration pattern. B drops the coefficient onto the wrong place, decrementing n in the multiplier rather than in the exponent. D divides by n, again integration rather than differentiation.

**2. B.** (3×100)x⁹⁹ − (4×1)x⁰ = 300x⁹⁹ − 4x⁰, and the slide states separately that x⁰ = 1, so the answer is 300x⁹⁹ − 4. A stops one line early and leaves x⁰ standing. C fails to differentiate the second term at all. D forgets to multiply by the coefficient 3, giving 100 instead of 300.

**3. A.** With u = x², v = sin x, u′ = 2x, v′ = cos x, her formula uv′ + u′v gives x² cos x + 2x sin x. B is u′v′, the rule students invent. C flips the plus to a minus, which is the quotient rule's sign, not the product rule's. D differentiates only one factor per term, leaving sin x undifferentiated in the second.

**4. D.** uv′ + u′v = (4x + 6)(6x² − 5) + 4(2x³ − 5x) = 24x³ + 36x² − 20x − 30 + 8x³ − 20x = 32x³ + 36x² − 40x − 30. **A is the value printed on the slide, and it is wrong** — expanding f(x) = 8x⁴ + 12x³ − 20x² − 30x first confirms 32x³ + 36x² − 40x − 30. B is only the first product, uv′, with the u′v term forgotten. C is u′v′.

**5. B.** The v u′ term comes first and carries the plus; the u v′ term is subtracted; the whole thing sits over (v(x))². A has the two terms the wrong way round, which negates the answer. C uses v instead of v². D is the rule students invent by analogy with u′v′.

**6. C.** u = x, v = cos x, u′ = 1, v′ = −sin x, so f′ = [cos x·1 − x·(−sin x)]/cos²x = (cos x + x sin x)/cos²x. **A is the value printed on the slide, and it is wrong** — the x was dropped from the second term. B keeps the minus and so misses that minus times minus is plus. D differentiates numerator and denominator separately.

**7. A.** [5x²·6 − (6x − 3)·10x]/(5x²)² = (30x² − 60x² + 30x)/25x⁴ = (−30x² + 30x)/25x⁴ = 6(1 − x)/5x³. B has the bracket reversed, which flips the sign of the whole expression. C differentiates top and bottom separately. D fails to distribute the minus over both terms of (6x − 3)(10x), and squares only the x in the denominator.

**8. D.** With u = x², y′(u) = −sin u and u′(x) = 2x, so f′ = −sin(x²)·2x = −2x sin(x²). A applies the outer derivative but omits the inner derivative u′(x) = 2x. B differentiates the inside and then puts it inside the sine, which is not what the chain rule says. C loses the minus sign on the derivative of cosine and fails to change cos to sin.

**9. B.** u = 2x − 4, y = u², so f′ = 2u·u′ = 2(2x − 4)(2) = 8x − 16. A is what you get by forgetting u′(x) = 2 — the exact error the TASK is set to catch. C differentiates the outside but never reduces the power. D differentiates only the expanded 4x² term and drops the rest.

**10. C.** y + x(dy/dx) + 24x³ = dy/dx, so x(dy/dx) − dy/dx = −24x³ − y, then (dy/dx)(x − 1) = −(24x³ + y), giving dy/dx = −(24x³ + y)/(x − 1). A stops before dividing by the factored (x − 1). B loses the minus sign when factorising the right-hand side. D forgets that the product xy also contributes a y term by the product rule.

**11. D.** x′(t) = 4t³, y′(t) = 14t − 5, and dy/dx = dy/dt ÷ dx/dt = (14t − 5)/4t³. A gives dy/dt alone, which is not the gradient of the curve. B inverts the division. C differentiates t⁴ as though it were t², losing two powers.

**12. A.** Holding x constant: 3x² → 0, 2xy → 2x, −y³ → −3y². Hence 2x − 3y². B is ∂f/∂x — and it is worth noting the slide itself mislabels this answer as ∂f/∂x. C differentiates 2xy with respect to neither variable cleanly, keeping an x and a y. D forgets that 2xy still contains a y and so contributes 2x.

**13.** f′(x) = lim(h→0) [√(x + h) − √x]/h. Multiply above and below by the conjugate (√(x + h) + √x):
f′(x) = lim(h→0) {[√(x + h) − √x]/h}·[(√(x + h) + √x)/(√(x + h) + √x)]
= lim(h→0) [(x + h) − x] / [h(√(x + h) + √x)]
= lim(h→0) h / [h(√(x + h) + √x)]
= lim(h→0) 1 / (√(x + h) + √x)
= 1/(√(x + 0) + √x) = **1/(2√x)**.
The step that makes the limit possible is **multiplying by the conjugate**. It is needed because the difference of two surds cannot be simplified as it stands, so substituting h = 0 straight into the original quotient gives 0/0. The conjugate turns the numerator into a difference of two squares, (x + h) − x = h, and that h cancels the h in the denominator — after which h = 0 can be substituted safely.

**14.** Substituting u = 4x + 6, v = 2x³ − 5x, u′ = 4, v′ = 6x² − 5 into f′ = uv′ + u′v gives (4x + 6)(6x² − 5) + 4(2x³ − 5x) = 24x³ + 36x² − 20x − 30 + 8x³ − 20x = **32x³ + 36x² − 40x − 30**. The independent check is to expand first: f(x) = 8x⁴ + 12x³ − 20x² − 30x, which differentiates term by term to the same thing. The printed 8x³ + 24x² − 32x − 30 has the wrong leading coefficient, the wrong x² coefficient and the wrong x coefficient. The **earlier misprinted line is the substitution line**, which reads (4x + 6)(**6x − 5**) — the square has been lost from 6x², even though the line above it correctly gives v′(x) = 6x² − 5. (Even that misprinted version would give 8x³ + 24x² − 4x − 30, so the final line does not follow from it either.)

**15.** The difference is what the other letter is assumed to be. On slide 13, y is an **unknown function of x**, so differentiating it with respect to x needs the chain rule: d/dx(y²) = 2y·**dy/dx**, and every such term leaves a dy/dx behind, which is why the answer has to be collected and factorised. On slide 21, x and y are **independent variables**, so when we compute ∂/∂x we treat y as a genuine constant: ∂/∂x(y³) = **0**, exactly as the constant rule says, with no dy/dx factor because y does not vary with x at all. Same-looking expressions, opposite assumptions — one produces dy/dx terms everywhere, the other annihilates whole terms.
