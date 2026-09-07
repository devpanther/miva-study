# Monday — MTH_102 nightly check

*Week 6 higher-order derivatives, exactly as the deck builds them.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** f(x) = x⁵ − 3x³ + 7x − 2. Find f″(x).
A. 5x⁴ − 9x² + 7
B. 20x³ − 9x
C. 20x³ − 18x
D. 20x³ − 18x + 7

**2.** Differentiate y = 4 tan x − 1.
A. 4 sec²x
B. 4 sec²x − 1
C. sec²x
D. 4 sec x

**3.** y = √(x⁵). Find the second derivative d²y/dx².
A. (5/2)x^(3/2)
B. (15/4)x^(3/2)
C. (5/4)x^(1/2)
D. (15/4)x^(1/2)

**4.** y = 3/x². Find y″.
A. −18/x⁴
B. 18/x⁴
C. −6/x³
D. 6/x⁴

**5.** y = sin(4x). Find y″.
A. −16 sin(4x)
B. −4 sin(4x)
C. 16 sin(4x)
D. −16 cos(4x)

**6.** y = e^(2x). Find the third derivative d³y/dx³.
A. e^(2x)
B. 2e^(2x)
C. 6e^(2x)
D. 8e^(2x)

**7.** y = (2x + 1)³. Find y″.
A. 6(2x + 1)²
B. 24(2x + 1)
C. 12(2x + 1)
D. 24(2x + 1)²

**8.** What does the notation f⁽⁴⁾(x) mean?
A. f(x) evaluated at x = 4
B. [f(x)]⁴, the fourth power of f
C. (f‴(x))′, the derivative of the third derivative
D. 4·f′(x)

**9. (show your working)** y = ln x. Find y′, y″ and y‴, writing each answer both as a fraction and as a negative power of x. Show your working.

**10. (show your working)** A particle's position at time t is s(t) = t³ − 6t² + 9t. Find its velocity and its acceleration at t = 4, and state which derivative of s each one is. Show your working.

**11. (show your working)** y = 2 sin x − 3 cos x. Find y″ and show that y″ = −y. Show your working.

**12. (show your working)** Explain what a higher-order derivative is and why finding one needs no new rule. Using y = x^(3/2), say which expression you differentiate to get y″, and why the coefficients multiply while the index falls by 1 each time.

---

## Answers

**1. C** — *Second derivative of a polynomial.* Differentiate once: f′(x) = 5x⁴ − 9x² + 7 (the constant −2 goes to 0). Differentiate f′ again: 20x³ − 18x + 0, so f″(x) = 20x³ − 18x.

5x⁴ − 9x² + 7 stops at the first derivative; 20x³ − 9x lowers the power of −9x² but forgets to multiply by the 2; 20x³ − 18x + 7 keeps the constant 7 from f′, when the derivative of a constant is zero.

**2. A** — *Derivative of tan x with a constant multiple and a constant term.* Split the sum: dy/dx = d(4 tan x)/dx − d(1)/dx = 4·d(tan x)/dx − 0. Since d(tan x)/dx = sec²x, dy/dx = 4 sec²x.

4 sec²x − 1 keeps the constant term, which should differentiate to 0; sec²x throws away the multiplier 4, confusing 'a constant differentiates to 0' with 'constants disappear from products'; 4 sec x forgets the square in the derivative of tan x.

**3. D** — *Second derivative with a fractional index.* Rewrite the root as a power: y = x^(5/2). First derivative: y′ = (5/2)x^(3/2). Differentiate y′ again: y″ = (5/2)·(3/2)x^(3/2 − 1) = (15/4)x^(1/2), which is (15/4)√x.

(5/2)x^(3/2) is the first derivative only; (15/4)x^(3/2) multiplies the coefficients but forgets to lower the index a second time; (5/4)x^(1/2) uses 1/2 as the multiplier instead of the actual index 3/2.

**4. B** — *Second derivative with a negative index.* Rewrite as a power: y = 3x⁻². Then y′ = 3(−2)x⁻³ = −6x⁻³, and y″ = −6(−3)x⁻⁴ = 18x⁻⁴ = 18/x⁴. The sign flips at each step: negative, then back to positive.

−18/x⁴ keeps the minus from the first derivative instead of flipping it again; −6/x³ is the first derivative; 6/x⁴ lowers the index twice but multiplies by −2 only once, missing the factor −3.

**5. A** — *Chain factor deposited at every order.* Chain rule with u = 4x: y′ = cos(4x)·4 = 4 cos(4x). Differentiate again, and the chain rule deposits another 4: y″ = 4·(−sin(4x))·4 = −16 sin(4x). Note y″ = −16y.

−4 sin(4x) collects the factor 4 only once, when each differentiation supplies one; 16 sin(4x) loses the minus that comes from differentiating cos; −16 cos(4x) has the right coefficient but does not change cos back to sin.

**6. D** — *Repeated derivatives of e^(kx).* Each differentiation of e^(2x) leaves e^(2x) unchanged and multiplies by the inner derivative 2: y′ = 2e^(2x), y″ = 4e^(2x), y‴ = 8e^(2x). The coefficient is 2³ = 8 and the exponent 2x never changes.

e^(2x) treats e^(2x) like eˣ and ignores the chain factor; 2e^(2x) collects the factor 2 once instead of three times; 6e^(2x) adds the three factors (2 + 2 + 2) instead of multiplying them.

**7. B** — *Second derivative with the chain rule on a bracket.* Chain rule with u = 2x + 1: y′ = 3u²·2 = 6(2x + 1)². Differentiate y′ with the chain rule again: y″ = 6·2(2x + 1)·2 = 24(2x + 1), which expands to 48x + 24.

6(2x + 1)² is the first derivative; 12(2x + 1) forgets the inner derivative 2 on the second pass; 24(2x + 1)² multiplies by the power but never lowers it.

**8. C** — *Bracketed superscript notation for higher derivatives.* From the fourth order on, prime marks are replaced by a bracketed superscript that counts how many times f has been differentiated: f⁽⁴⁾(x) = (f‴(x))′. In Leibniz form it is d⁴y/dx⁴.

f(4) with no superscript brackets would be the value at x = 4; [f(x)]⁴ reads the counter as a power, which is exactly what the brackets are there to prevent; 4·f′(x) invents a constant multiple.

**9.** *Successive derivatives of ln x.* From d(ln x)/dx = 1/x: y′ = 1/x = x⁻¹. Differentiate the power: y″ = (−1)x⁻² = −x⁻² = −1/x². Differentiate again: y‴ = −(−2)x⁻³ = 2x⁻³ = 2/x³.

Final answer: y′ = 1/x (x⁻¹), y″ = −1/x² (−x⁻²), y‴ = 2/x³ (2x⁻³). A correct answer shows each derivative obtained from the previous one by the power rule, with the sign going +, −, + and the coefficient 1, 1, 2. Writing y‴ = −2/x³ (carrying the minus through) or 1/x³ (dropping the factor 2) is wrong.

**10.** *Second derivative as acceleration.* Velocity is the first derivative: v(t) = s′(t) = 3t² − 12t + 9, so v(4) = 48 − 48 + 9 = 9. Acceleration is the second derivative, the derivative of velocity: a(t) = s″(t) = 6t − 12, so a(4) = 24 − 12 = 12.

Final answer: velocity 9 (first derivative of s), acceleration 12 (second derivative of s). A correct answer shows both derivatives, substitutes t = 4, and identifies velocity as ds/dt and acceleration as d²s/dt². Substituting t = 4 into s itself (giving 4) is the position, not the velocity.

**11.** *Sign cycle of sin and cos under repeated differentiation.* y′ = 2 cos x − 3(−sin x) = 2 cos x + 3 sin x. Differentiate again: y″ = 2(−sin x) + 3 cos x = −2 sin x + 3 cos x. Compare with y: −y = −(2 sin x − 3 cos x) = −2 sin x + 3 cos x, which is exactly y″.

Final answer: y″ = −2 sin x + 3 cos x = −y. A correct answer has the minus appear when cos is differentiated (twice: once in y′, once in y″) and states the comparison with −y explicitly. y″ = 2 sin x − 3 cos x (no sign change) or y′ = 2 cos x − 3 sin x (minus on cos lost) is wrong.

**12.** *Higher-order derivatives as repeated differentiation.* A higher-order derivative is the derivative of a derivative: y″ is the derivative of y′, y‴ the derivative of y″, and so on. No new rule is needed because at each order you simply apply the ordinary rules (power, chain, product, quotient) to whatever expression you have just written down. For y = x^(3/2), y′ = (3/2)x^(1/2), and y″ is found by differentiating that expression, not the original: the power rule multiplies by the current index 1/2 and lowers it by 1, giving (3/2)(1/2)x^(−1/2) = (3/4)x^(−1/2). The coefficient multiplies because each application brings down the current index; the index falls by 1 because that is what the power rule does every time, fractions and negatives included.

A correct answer says 'derivative of the previous derivative', names the rules as the ordinary ones reused, differentiates y′ (not y) to get y″, and gives (3/4)x^(−1/2).
