# Thursday — MTH_102 nightly check

*Computation pass on Week 5.*
*12 questions, straight after the hour. Score out of 12.*

**1.** Find f′(x) for f(x) = (3x − 2)(x³ + 4x), giving the answer as an expanded polynomial.
A. 9x² + 12
B. 3x³ + 12x
C. 12x³ − 6x² + 24x − 8
D. 6x³ − 6x² − 8

**2.** Find f′(x) for f(x) = (sin x)/x.
A. (x cos x − sin x)/x²
B. (sin x − x cos x)/x²
C. (x cos x + sin x)/x²
D. cos x

**3.** Find f′(x) for f(x) = cos(2x³).
A. 6x² sin(2x³)
B. −sin(2x³)
C. −sin(6x²)
D. −6x² sin(2x³)

**4.** f(x) = √(x² + 9). Find f′(3).
A. √2/12
B. √2/2
C. √2
D. 3

**5.** Find f′(x) for f(x) = 3/x² + 4√x.
A. 6/x³ + 2/√x
B. −6/x³ + 2/√x
C. −6/x³ + 4/√x
D. −3/x³ + 2/√x

**6.** A curve is given by x = t³ + 1 and y = t² − 3t. Find the gradient dy/dx at the point where t = 2.
A. 1/12
B. 12
C. 1
D. 1/6

**7.** f(x, y) = x²y³ + 3x − 2y. Find ∂f/∂x and ∂f/∂y.
A. ∂f/∂x = 3x²y² − 2, ∂f/∂y = 2xy³ + 3
B. ∂f/∂x = 2x + 3, ∂f/∂y = 3y² − 2
C. ∂f/∂x = 2xy³ + 3 − 2y, ∂f/∂y = 3x²y² + 3x − 2
D. ∂f/∂x = 2xy³ + 3, ∂f/∂y = 3x²y² − 2

**8.** A student writes the quotient rule as f′ = [u v′ − v u′]/v² instead of [v u′ − u v′]/v². What does the student's formula produce?
A. The correct derivative
B. The reciprocal of the correct derivative
C. The negative of the correct derivative
D. The derivative of v/u

**9.** Differentiate f(x) = x² − 4x from first principles. Which expression is left after dividing by h, and what is f′(x)?
A. 2xh + h² − 4h, so f′(x) = 0
B. x + h − 4, so f′(x) = x − 4
C. 2x + h, so f′(x) = 2x
D. 2x + h − 4, so f′(x) = 2x − 4

**10.** Differentiate y = x² cos(3x).
A. 2x cos(3x) + 3x² sin(3x)
B. 2x cos(3x) − 3x² sin(3x)
C. 2x cos(3x) − x² sin(3x)
D. −6x² sin(3x)

**11.** The curve x² + xy + y² = 7 passes through (1, 2). Differentiate implicitly and find the gradient of the curve at (1, 2).
A. dy/dx = −2x/(2y), so the gradient is −1/2
B. dy/dx = −(2x)/(x + 2y), so the gradient is −2/5
C. dy/dx = −(2x + y)/(x + 2y), so the gradient is −4/5
D. dy/dx = −(2x + y)/(x + 2y), so the gradient is 4/5

**12.** A student differentiates f(x) = (5x + 1)³ and writes f′(x) = 3(5x + 1)². What has been left out, and what is the correct derivative?
A. The inner derivative 5, so f′(x) = 15(5x + 1)²
B. Nothing, since f′(x) = 3(5x + 1)² is already correct
C. The inner derivative 5x, so f′(x) = 15x(5x + 1)²
D. The product rule, so f′(x) = 3(5x + 1)² + 5(5x + 1)³

---

## Answers

**1. C** — *Product rule on two polynomials, checked by expanding.* u = 3x − 2, v = x³ + 4x, u′ = 3, v′ = 3x² + 4. f′ = u v′ + u′ v = (3x − 2)(3x² + 4) + 3(x³ + 4x) = 9x³ + 12x − 6x² − 8 + 3x³ + 12x = 12x³ − 6x² + 24x − 8. Check by expanding first: f(x) = 3x⁴ − 2x³ + 12x² − 8x, whose derivative is the same.

9x² + 12 is u′v′, differentiating both factors at once; 3x³ + 12x is only the u′v term, with the u v′ term forgotten; 6x³ − 6x² − 8 subtracts the two terms instead of adding them.

**2. A** — *Quotient rule with a trigonometric numerator.* u = sin x, v = x, u′ = cos x, v′ = 1. f′ = [v u′ − u v′]/v² = [x cos x − sin x·1]/x² = (x cos x − sin x)/x².

(sin x − x cos x)/x² has the numerator terms reversed, which is the negative of the right answer; (x cos x + sin x)/x² uses a plus, the product rule's sign; cos x differentiates the top and bottom separately, as cos x/1.

**3. D** — *Chain rule on cosine of a polynomial.* Let u = 2x³, so y = cos u. y′(u) = −sin u and u′(x) = 6x². The chain rule gives f′(x) = −sin u·6x² = −6x² sin(2x³), with u put back at the end.

6x² sin(2x³) loses the minus sign that comes with differentiating cos; −sin(2x³) forgets the inner derivative 6x²; −sin(6x²) differentiates the inside and then puts it inside the sine, which is not what the chain rule says.

**4. B** — *Chain rule with a square root, evaluated at a point.* Write f(x) = (x² + 9)^(1/2). With u = x² + 9: f′(x) = (1/2)u^(−1/2)·2x = x/√(x² + 9). At x = 3: 3/√18 = 3/(3√2) = 1/√2 = √2/2.

√2/12 forgets the inner derivative 2x, giving 1/(2√18); √2 forgets the 1/2 from the power rule, giving 6/√18; 3 drops the (x² + 9)^(−1/2) factor altogether and keeps only (1/2)(2x) = x.

**5. B** — *Power rule with negative and fractional indices together.* Rewrite as powers: f(x) = 3x^(−2) + 4x^(1/2). Then 3x^(−2) → 3(−2)x^(−3) = −6x^(−3) = −6/x³, and 4x^(1/2) → 4(1/2)x^(−1/2) = 2x^(−1/2) = 2/√x. So f′(x) = −6/x³ + 2/√x.

6/x³ + 2/√x loses the minus sign that comes from the index −2; −6/x³ + 4/√x forgets to multiply by the index 1/2; −3/x³ + 2/√x lowers the power but forgets to multiply by the old index −2.

**6. A** — *Parametric gradient at a given parameter value.* dx/dt = 3t² and dy/dt = 2t − 3, so dy/dx = (2t − 3)/(3t²). At t = 2: (4 − 3)/(3·4) = 1/12.

12 divides the wrong way round, dx/dt ÷ dy/dt; 1 is dy/dt at t = 2 on its own, which is not the gradient of the curve; 1/6 differentiates t³ as 3t instead of 3t², giving a denominator of 6.

**7. D** — *Partial derivatives with a mixed product term.* For ∂f/∂x hold y constant: x²y³ → 2x·y³ (y³ is a constant multiplier); 3x → 3; −2y → 0. So ∂f/∂x = 2xy³ + 3. For ∂f/∂y hold x constant: x²y³ → x²·3y²; 3x → 0; −2y → −2. So ∂f/∂y = 3x²y² − 2.

The first option has the two answers swapped; the second throws the held-constant variable away instead of keeping it as a multiplier; the third forgets that a term without the differentiation variable is a constant and differentiates to 0.

**8. C** — *Order of terms in the quotient rule.* u v′ − v u′ = −(v u′ − u v′), so the student's numerator is the negative of the correct one over the same v². Every answer comes out with the wrong sign, which is why the order of the two terms matters in the quotient rule but not in the product rule, where the terms are added.

It is not the correct derivative, because subtraction is not commutative; it is not the reciprocal, since the denominator v² is unchanged; the derivative of v/u would be [u v′ − v u′]/u², with u² underneath, not v².

**9. D** — *First principles on a quadratic.* f(x + h) = (x + h)² − 4(x + h) = x² + 2xh + h² − 4x − 4h, and subtracting f(x) = x² − 4x cancels the x² and −4x to leave 2xh + h² − 4h. Every term carries an h, so dividing by h gives 2x + h − 4, and only now is it safe to let h → 0, giving f′(x) = 2x − 4.

2xh + h² − 4h is the numerator before dividing, 2x + h forgets the −4x term, and x + h − 4 divides only part of the expression.

**10. B** — *Combining the product rule and the chain rule.* Use the product rule with u = x² and v = cos(3x), so u′ = 2x. For v′ the chain rule applies: the outer derivative of cos is −sin, and the inner derivative of 3x is 3, so v′ = −3 sin(3x). Then dy/dx = u′v + uv′ = 2x cos(3x) − 3x² sin(3x).

Dropping the inner 3 gives −x² sin(3x), losing the minus on cos′ gives the + version, and −6x² sin(3x) differentiates only the cosine and never uses the product rule.

**11. C** — *Implicit differentiation with collection, evaluated at a point.* Term by term: x² gives 2x, xy needs the product rule and gives y + x(dy/dx), y² gives 2y(dy/dx) by the chain rule, and 7 gives 0. Collecting, (dy/dx)(x + 2y) = −(2x + y), so dy/dx = −(2x + y)/(x + 2y), and at (1, 2) that is −(2 + 2)/(1 + 4) = −4/5, or −0.8.

+4/5 loses the overall minus, −2x/(2y) ignores the xy term entirely, and −2x/(x + 2y) forgets the y that the product rule contributes.

**12. A** — *The inner derivative in the chain rule.* The base is not x but u = 5x + 1, a function of x, so f is the composite u³ and the chain rule requires the outer derivative 3u² to be multiplied by the inner derivative u′ = 5. That factor records how fast the inside moves as x moves, and leaving it out under-counts the rate of change fivefold. The correct derivative is 3(5x + 1)²·5 = 15(5x + 1)².

The inner derivative is 5, not 5x, and there is no product here for the product rule to act on.
