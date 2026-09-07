# Thursday — MTH_102 nightly check

*Problems-only session on Week 6 higher-order derivatives.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** f(x) = 2x⁵ − x⁴ + 3x − 7. Find f‴(x).
A. 40x³ − 12x²
B. 120x² − 24x
C. 120x² − 24x + 3
D. 60x² − 24x

**2.** y = sin(2x) + e^(4x). Find d⁴y/dx⁴.
A. 16 sin(2x) + 256e^(4x)
B. −16 sin(2x) + 256e^(4x)
C. 16 cos(2x) + 256e^(4x)
D. −8 cos(2x) + 64e^(4x)

**3.** f(x) = x/(x + 1). Find f″(x).
A. 2/(x + 1)³
B. 1/(x + 1)²
C. −2/(x + 1)²
D. −2/(x + 1)³

**4.** y = 1/x. Find y⁽⁴⁾.
A. −24/x⁵
B. 6/x⁴
C. 24/x⁵
D. 4/x⁵

**5.** y = cos(2x). Find y‴.
A. 8 sin(2x)
B. −8 sin(2x)
C. −8 cos(2x)
D. 8 cos(2x)

**6.** y = √(x⁷). Find y‴.
A. (35/4)x^(3/2)
B. (105/8)x^(3/2)
C. (105/8)x^(1/2)
D. (35/8)x^(1/2)

**7.** y = 2x³ + 1/x. Find y″.
A. 12x − 2/x³
B. 12x + 2/x³
C. 6x² − 1/x²
D. 12x + 2/x²

**8.** For f(x) = ln(1 + x²), f′(x) = 2x/(1 + x²). A student then writes f″(x) = (2 − 2x²)/(1 + x²). Which step has gone wrong?
A. The chain rule was skipped in f′
B. u and v were swapped in the numerator
C. The 1 in 1 + x² should have differentiated to 1
D. The denominator was not squared

**9. (show your working)** f(x) = xe^(−x). Find f′(x), f″(x) and f‴(x), then evaluate f‴(3). Show your working, naming the rule you use at each order.

**10. (show your working)** f(x) = ln(1 + 2x²). Find f′(x) by the chain rule, then f″(x) by the quotient rule, listing u, v, u′ and v′ on one line. Show your working.

**11. (show your working)** f(x) = x⁵ − 2x². Find f⁽⁴⁾(x), and find the smallest n for which f⁽ⁿ⁾(x) = 0 for all x. Show your working.

**12. (show your working)** For y = e^(3x), every derivative is a positive multiple of y, but for y = sin(5x) the derivatives run through four different forms before repeating. Explain why, and state d⁴y/dx⁴ for each.

---

## Answers

**1. B** — *Third derivative of a polynomial.* f′(x) = 10x⁴ − 4x³ + 3; f″(x) = 40x³ − 12x²; f‴(x) = 120x² − 24x. The constant −7 dies at the first step and the 3 dies at the second.

40x³ − 12x² is f″, one order short; 120x² − 24x + 3 lets the constant 3 survive past the second derivative; 60x² − 24x drops the coefficient 2 on the leading term (2·5·4·3 = 120, not 60).

**2. A** — *Fourth derivative of a sum of sin(kx) and e^(kx).* Track each term. sin(2x): 2 cos(2x), −4 sin(2x), −8 cos(2x), 16 sin(2x); a factor 2 each time and the sign cycling +, −, −, +. e^(4x): 4e^(4x), 16e^(4x), 64e^(4x), 256e^(4x); a factor 4 each time and no sign change. So d⁴y/dx⁴ = 16 sin(2x) + 256e^(4x).

−16 sin(2x) + 256e^(4x) carries the minus of the second and third derivatives one step too far; 16 cos(2x) does not return cos to sin on the fourth step; −8 cos(2x) + 64e^(4x) is the third derivative.

**3. D** — *Second derivative by the quotient rule then the chain rule.* Quotient rule with u = x, v = x + 1: f′ = [(x + 1)·1 − x·1]/(x + 1)² = 1/(x + 1)² = (x + 1)⁻². Differentiate again with the power and chain rules: f″ = −2(x + 1)⁻³·1 = −2/(x + 1)³.

2/(x + 1)³ loses the minus from the index −2; 1/(x + 1)² is the first derivative; −2/(x + 1)² multiplies by the index but forgets to lower it.

**4. C** — *Fourth derivative of a reciprocal and its sign pattern.* y = x⁻¹. y′ = −x⁻², y″ = 2x⁻³, y‴ = −6x⁻⁴, y⁽⁴⁾ = 24x⁻⁵ = 24/x⁵. The coefficient is 1·2·3·4 = 24 and the sign alternates, ending positive on an even order.

−24/x⁵ has the sign of an odd-order derivative; 6/x⁴ stops at the third derivative and drops its minus; 4/x⁵ lowers the index four times but multiplies by the index only once.

**5. A** — *Third derivative of cos(kx), tracking the sign.* y′ = −2 sin(2x); y″ = −2·2 cos(2x) = −4 cos(2x); y‴ = −4·(−2 sin(2x)) = 8 sin(2x). The chain factor 2 appears three times (2³ = 8) and the minus from cos appears twice, which cancels.

−8 sin(2x) counts the minus once instead of twice; −8 cos(2x) does not change cos to sin on the third step; 8 cos(2x) makes both of those errors at once.

**6. C** — *Third derivative with a fractional index.* y = x^(7/2). y′ = (7/2)x^(5/2); y″ = (7/2)(5/2)x^(3/2) = (35/4)x^(3/2); y‴ = (35/4)(3/2)x^(1/2) = (105/8)x^(1/2). Each step multiplies by the current index and lowers it by 1.

(35/4)x^(3/2) is the second derivative; (105/8)x^(3/2) multiplies by 3/2 but forgets to lower the index; (35/8)x^(1/2) multiplies by 1/2 (the new index) instead of 3/2 (the index being differentiated).

**7. B** — *Second derivative of a mixed polynomial and reciprocal.* Rewrite: y = 2x³ + x⁻¹. y′ = 6x² − x⁻²; y″ = 12x + 2x⁻³ = 12x + 2/x³. The reciprocal term's sign flips at each differentiation: negative in y′, positive again in y″.

12x − 2/x³ keeps the minus from y′ instead of flipping it; 6x² − 1/x² is the first derivative; 12x + 2/x² multiplies by the index −2 but forgets to lower it to −3.

**8. D** — *Quotient rule denominator at higher orders.* With u = 2x and v = 1 + x², the quotient rule gives f″ = [v u′ − u v′]/v² = [(1 + x²)·2 − 2x·2x]/(1 + x²)² = (2 − 2x²)/(1 + x²)². The student's numerator is right; the denominator must be v² = (1 + x²)², not v.

The chain rule was applied correctly in f′ (the 2x is the inner derivative); swapping u and v would give (2x² − 2), the negative numerator, which did not happen; the constant 1 differentiates to 0, and the student's numerator already reflects that.

**9.** *Third derivative of a product with an exponential, evaluated.* Product rule at every order, with d(e^(−x))/dx = −e^(−x) by the chain rule. f′ = 1·e^(−x) + x·(−e^(−x)) = (1 − x)e^(−x). f″ = (−1)e^(−x) + (1 − x)(−e^(−x)) = (−1 − 1 + x)e^(−x) = (x − 2)e^(−x). f‴ = 1·e^(−x) + (x − 2)(−e^(−x)) = (1 − x + 2)e^(−x) = (3 − x)e^(−x). Then f‴(3) = (3 − 3)e^(−3) = 0.

Final answer: f′ = (1 − x)e^(−x), f″ = (x − 2)e^(−x), f‴ = (3 − x)e^(−x), and f‴(3) = 0. A correct answer applies the product rule three times, keeps the minus from e^(−x), factors e^(−x) out each time, and gets 0 at x = 3. Treating the derivative of xe^(−x) as e^(−x) alone, or of e^(−x) as e^(−x), is wrong.

**10.** *Chain rule then quotient rule on a logarithm of a polynomial.* Chain rule: y = ln u with u = 1 + 2x², so y′(u) = 1/u and u′(x) = 4x, giving f′(x) = 4x/(1 + 2x²). This is a quotient, so use the quotient rule for f″: u = 4x, v = 1 + 2x², u′ = 4, v′ = 4x. f″ = [v u′ − u v′]/v² = [(1 + 2x²)·4 − 4x·4x]/(1 + 2x²)² = (4 + 8x² − 16x²)/(1 + 2x²)² = (4 − 8x²)/(1 + 2x²)².

Final answer: f′(x) = 4x/(1 + 2x²), f″(x) = (4 − 8x²)/(1 + 2x²)²; also accepted with the denominator expanded as 1 + 4x² + 4x⁴, or the numerator factored as 4(1 − 2x²). A correct answer shows the inner derivative 4x in f′ and the v u′ − u v′ order in f″. (8x² − 4)/(1 + 2x²)² has the numerator reversed and is wrong.

**11.** *Order at which a polynomial's derivatives vanish.* f′ = 5x⁴ − 4x; f″ = 20x³ − 4; f‴ = 60x²; f⁽⁴⁾ = 120x; f⁽⁵⁾ = 120; f⁽⁶⁾ = 0. Each differentiation lowers the degree by 1, so a degree-5 polynomial becomes a constant at the fifth derivative and zero at the sixth.

Final answer: f⁽⁴⁾(x) = 120x and n = 6. A correct answer shows the chain of derivatives (or argues from the degree: degree 5, so the 6th derivative is the first to vanish). Answering n = 5 confuses 'constant' with 'zero': f⁽⁵⁾ = 120 is not zero.

**12.** *Why exponentials keep their sign and trig derivatives cycle.* e^(3x) differentiates to itself times the inner derivative 3, so each order multiplies by 3 and never changes the function or its sign: 3e^(3x), 9e^(3x), 27e^(3x), 81e^(3x). sin(5x) also picks up a factor 5 each time, but sin and cos swap at every step and the minus enters when cos is differentiated: 5 cos(5x), −25 sin(5x), −125 cos(5x), 625 sin(5x). It takes four steps to return to a positive multiple of sin(5x), because the pattern sin → cos → −sin → −cos → sin has period four.

A correct answer says the exponential reproduces itself (only the chain factor 3 accumulates) while sin and cos alternate and the minus comes from d(cos)/dx = −sin, and gives d⁴y/dx⁴ = 81e^(3x) and 625 sin(5x).
