# Monday — MTH_102 nightly check

*Week 5 differentiation, exactly as she builds it.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** Differentiate f(x) = 2x⁵ − 7x + 3.
A. 10x⁴ − 7x
B. 10x⁴ − 7
C. 2x⁴ − 7
D. 10x⁴ − 4

**2.** Differentiate y = ⁴√(x³) with respect to x.
A. (3/4)x^(−1/4)
B. (3/4)x^(1/4)
C. (4/3)x^(1/3)
D. x^(−1/4)

**3.** Find f′(x) for f(x) = x³ sin x.
A. 3x² cos x
B. x³ cos x − 3x² sin x
C. 3x² sin x + x³ sin x
D. 3x² sin x + x³ cos x

**4.** Find f′(x) for f(x) = (2x + 1)/x².
A. 2(x + 1)/x³
B. 1/x
C. −2(x + 1)/x³
D. (−2x² − 2x)/x²

**5.** Find f′(x) for f(x) = (3x + 1)⁴.
A. 12(3x + 1)³
B. 4(3x + 1)³
C. 12(3x + 1)⁴
D. 3(3x + 1)³

**6.** Differentiate x³ + y² = 10 implicitly with respect to x and make dy/dx the subject.
A. dy/dx = 3x²/(2y)
B. dy/dx = −3x²/(2y)
C. dy/dx = −2y/(3x²)
D. dy/dx = −3x²

**7.** A curve is given by x = 3t + 2 and y = t² + 4t. Find dy/dx.
A. 2t + 4
B. 3/(2t + 4)
C. 3(2t + 4)
D. (2t + 4)/3

**8.** In f′(x) = lim(h→0) [f(x + h) − f(x)]/h, the h in the denominator must be cancelled before h → 0 is taken. Why?
A. So that the final answer contains no x
B. h is a constant, and constants differentiate to 0
C. Substituting h = 0 before cancelling gives 0/0
D. f(x + h) has to equal f(x) at the end

**9. (show your working)** f(x, y) = 4x³ − 5xy + 2y². Find ∂f/∂x and ∂f/∂y. Show your working.

**10. (show your working)** Differentiate y = 5x − 2 from first principles, using f′(x) = lim(h→0) [f(x + h) − f(x)]/h. Show every line of working.

**11. (show your working)** Find the gradient of the curve y = x³ − 2x² at the point where x = 2, and state what this number represents geometrically. Show your working.

**12. (show your working)** When y depends on x, d/dx(y²) = 2y·dy/dx. In partial differentiation, ∂/∂x(y²) = 0. Explain why the same expression y² is treated so differently in the two settings.

---

## Answers

**1. B** — *Power rule on a polynomial.* Term by term with f′(x) = nx^(n−1): 2x⁵ → (2×5)x⁴ = 10x⁴; −7x = −7x¹ → −7x⁰ = −7; the constant 3 → 0. So f′(x) = 10x⁴ − 7.

10x⁴ − 7x leaves the x on the second term instead of dropping its power to x⁰ = 1; 2x⁴ − 7 lowers the power but forgets to multiply by the old power 5; 10x⁴ − 4 keeps the constant 3 alive, when the derivative of a constant is zero.

**2. A** — *Power rule with a fractional index.* A root is a fractional power: ⁴√(x³) = x^(3/4). Then y′ = (3/4)x^(3/4 − 1) = (3/4)x^(−1/4), which can also be written 3/(4·⁴√x).

(3/4)x^(1/4) adds 1 to the index instead of subtracting; (4/3)x^(1/3) reads the radical the wrong way round, as x^(4/3); x^(−1/4) subtracts 1 correctly but forgets to multiply by the old index 3/4.

**3. D** — *Product rule with a trigonometric factor.* Set u = x³, v = sin x, so u′ = 3x², v′ = cos x. The product rule f′ = u v′ + u′ v gives x³ cos x + 3x² sin x.

3x² cos x is u′v′, differentiating both factors at once, which is not a rule; x³ cos x − 3x² sin x uses a minus sign, which belongs to the quotient rule, not the product rule; 3x² sin x + x³ sin x leaves sin x undifferentiated in the second term.

**4. C** — *Quotient rule with a power in the denominator.* u = 2x + 1, v = x², u′ = 2, v′ = 2x. The quotient rule f′ = [v u′ − u v′]/v² gives [x²·2 − (2x + 1)·2x]/x⁴ = (2x² − 4x² − 2x)/x⁴ = (−2x² − 2x)/x⁴ = −2x(x + 1)/x⁴ = −2(x + 1)/x³.

2(x + 1)/x³ has the two terms of the numerator the wrong way round, which negates the answer; 1/x differentiates top and bottom separately as 2/(2x); (−2x² − 2x)/x² forgets to square the denominator.

**5. A** — *Chain rule on a bracket raised to a power.* Let u = 3x + 1, so y = u⁴. Then y′(u) = 4u³ and u′(x) = 3, and the chain rule f′(x) = y′(u)·u′(x) gives 4u³·3 = 12(3x + 1)³.

4(3x + 1)³ forgets the inner derivative u′(x) = 3; 12(3x + 1)⁴ multiplies by the old power but never lowers it; 3(3x + 1)³ keeps the inner derivative but drops the 4 from the outer power rule.

**6. B** — *Implicit differentiation of a two-term equation.* Differentiate both sides with respect to x: x³ → 3x²; y² → 2y·(dy/dx) by the chain rule, because y depends on x; 10 → 0. So 3x² + 2y(dy/dx) = 0, and dy/dx = −3x²/(2y).

3x²/(2y) loses the minus sign when 3x² is moved across; −2y/(3x²) is the reciprocal, dividing the wrong way; −3x² treats d/dx(y²) as just dy/dx, forgetting the factor 2y.

**7. D** — *Parametric differentiation.* Differentiate each with respect to t: dx/dt = 3 and dy/dt = 2t + 4. The parametric rule dy/dx = dy/dt ÷ dx/dt gives (2t + 4)/3, left in terms of t.

2t + 4 is dy/dt on its own, which is not the gradient of the curve; 3/(2t + 4) divides the wrong way round, giving dx/dy; 3(2t + 4) multiplies the two rates instead of dividing them.

**8. C** — *Why the h must cancel in a first-principles limit.* At h = 0 the numerator f(x + h) − f(x) is f(x) − f(x) = 0 and the denominator is 0, so putting h = 0 straight in gives the indeterminate form 0/0 and decides nothing. Expanding, cancelling the common terms and dividing out the h leaves an expression that has a value at h = 0, and that value is the derivative.

The answer normally does contain x (f′(x) = 3 is the exception, not the rule); h is a variable tending to 0, not a constant; and f(x + h) equals f(x) only in the limit, which is exactly what the quotient is measuring.

**9.** *Partial derivatives of a polynomial in two variables.* For ∂f/∂x treat y as a constant: 4x³ → 12x²; −5xy → −5y (y is a constant multiplier and x differentiates to 1); 2y² → 0 (no x in it). So ∂f/∂x = 12x² − 5y. For ∂f/∂y treat x as a constant: 4x³ → 0; −5xy → −5x; 2y² → 4y. So ∂f/∂y = −5x + 4y.

Final answer: ∂f/∂x = 12x² − 5y and ∂f/∂y = 4y − 5x (either order of the terms is accepted). A correct answer shows that terms without the differentiation variable vanish by the constant rule. Leaving 2y² alive in ∂f/∂x, or writing dy/dx factors anywhere, is wrong: in partial differentiation the other variable is a genuine constant.

**10.** *First principles on a linear function.* f(x + h) = 5(x + h) − 2 = 5x + 5h − 2. Then f(x + h) − f(x) = (5x + 5h − 2) − (5x − 2) = 5h. Divide by h: 5h/h = 5. Take the limit: lim(h→0) 5 = 5. So f′(x) = 5.

Final answer: f′(x) = 5 (also accepted: dy/dx = 5, y′ = 5). A correct answer must substitute x + h into the whole function, cancel the 5x and −2 terms, divide out the h, and only then let h → 0. Substituting h = 0 before cancelling (giving 0/0) or leaving an h in the answer is wrong.

**11.** *Derivative as the gradient of the tangent at a point.* Differentiate: dy/dx = 3x² − 4x. Substitute x = 2: 3(4) − 4(2) = 12 − 8 = 4. So the gradient is 4. Geometrically, 4 is the slope of the tangent line to the curve at the point (2, 0): the curve is rising there, 4 units up for every 1 unit across.

Final answer: gradient 4, the slope of the tangent at x = 2. A correct answer shows the derivative 3x² − 4x, the substitution, and the value 4, and says 'slope of the tangent' (or 'rate of change of y with respect to x' at that point). Substituting x = 2 into y itself, giving 0, is the height of the point, not the gradient.

**12.** *Implicit versus partial treatment of the other variable.* The difference is what y is assumed to be. In implicit differentiation, y is an unknown function of x, so y² is a composite function of x and the chain rule applies: differentiate the outside (2y) and multiply by the inside derivative dy/dx. In partial differentiation, x and y are independent variables; when differentiating with respect to x, y is held fixed, so y² is a constant and its derivative is 0 by the constant rule.

A correct answer says: implicit means y is a function of x (chain rule, dy/dx appears); partial means y is an independent variable held constant (constant rule, term vanishes). It should name the chain rule and the constant rule.
