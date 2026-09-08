# Monday — MTH_102 nightly check

*Week 6 higher-order derivatives, exactly as the deck builds them.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** y = ln x. Find y′, y″ and y‴.
A. 1/x, 1/x², 1/x³
B. 1/x, −1/x², 6/x⁴
C. 1/x, −1/x², 2/x³
D. 1/x, −1/x², −2/x³

**10.** A particle's position at time t is s(t) = t³ − 6t² + 9t. Find its velocity and its acceleration at t = 4.
A. v = 4, a = 9
B. v = 9, a = 12
C. v = 12, a = 9
D. v = 9, a = 24

**11.** y = 2 sin x − 3 cos x. Find y″ and say how it relates to y.
A. y″ = 2 sin x − 3 cos x, which equals y
B. y″ = −2 cos x − 3 sin x, which equals −y′
C. y″ = 2 cos x + 3 sin x, which equals y′
D. y″ = −2 sin x + 3 cos x, which equals −y

**12.** For y = x^(3/2), which expression do you differentiate to obtain y″, and what is y″?
A. Differentiate y′ = (3/2)x^(1/2), giving y″ = (3/4)x^(−1/2)
B. Differentiate y = x^(3/2) a second time, giving y″ = (3/2)x^(1/2)
C. Differentiate y′ = (3/2)x^(1/2), giving y″ = (3/2)x^(−1/2)
D. Differentiate y′ = (3/2)x^(1/2), giving y″ = (1/2)x^(−1/2)

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

**9. C** — *Successive derivatives of ln x.* Start from d(ln x)/dx = 1/x, which is x⁻¹. The power rule then gives y″ = (−1)x⁻² = −1/x², and differentiating again gives y‴ = (−1)(−2)x⁻³ = 2x⁻³ = 2/x³. The signs run plus, minus, plus and the coefficients run 1, 1, 2.

−2/x³ carries the minus through instead of letting the two negatives cancel, 1/x² and 1/x³ never pick up a sign at all, and 6/x⁴ is the fourth derivative's magnitude rather than the third.

**10. B** — *Second derivative as acceleration.* Velocity is the first derivative: v(t) = 3t² − 12t + 9, so v(4) = 48 − 48 + 9 = 9. Acceleration is the derivative of velocity, the second derivative of s: a(t) = 6t − 12, so a(4) = 24 − 12 = 12.

v = 4 substitutes t = 4 into s itself and gives the position, not the velocity; swapping 12 and 9 mixes up which derivative is which; and a = 24 forgets the −12 in 6t − 12.

**11. D** — *Sign cycle of sin and cos under repeated differentiation.* First, y′ = 2 cos x − 3(−sin x) = 2 cos x + 3 sin x, the minus appearing because cos differentiates to −sin. Differentiating again, y″ = 2(−sin x) + 3 cos x = −2 sin x + 3 cos x. Comparing, −y = −(2 sin x − 3 cos x) = −2 sin x + 3 cos x, which is exactly y″, so y″ = −y.

The option with no sign change never applies d(cos)/dx = −sin, and the other two quote y′ rather than y″.

**12. A** — *Higher-order derivatives as repeated differentiation.* A higher-order derivative is just the derivative of the previous derivative, so no new rule is needed: you apply the ordinary rules to whatever you last wrote down. Here y′ = (3/2)x^(1/2), and y″ comes from differentiating that expression, not the original y: the power rule brings down the current index 1/2 and lowers it by 1, giving (3/2)(1/2)x^(−1/2) = (3/4)x^(−1/2).

Differentiating y again returns y′, and the other two forget to multiply the coefficients or drop the 3/2 entirely.
