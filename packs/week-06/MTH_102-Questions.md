# MTH_102 — Week 6 Questions
*Higher-order derivatives: her six worked examples and her two TASKs. Twelve multiple choice, three short answer. Answers at the bottom — work them before you look.*

## Multiple choice

**1.** For f(x) = x⁴ + 2x³ − 15x + 4, f′(x) =
A. 4x³ + 6x² − 15 + 4
B. 4x³ + 2x² − 15
C. 4x³ + 6x² − 15
D. 4x³ + 6x² − 15x

**2.** Differentiate y = 3 tan x + 3.
A. 3 sec²x
B. 3 sec²x + 3
C. sec²x
D. 3 sec²x + 1

**3.** For f(x) = √(x³), the second derivative is
A. (3/2)x^(1/2)
B. (3/4)x^(1/2)
C. (3/2)x^(−1/2)
D. (3/4)x^(−1/2)

**4.** The TASK slide asks for the second derivative of y = cos(3x). It is
A. −3 sin(3x)
B. −9 cos(3x)
C. 9 cos(3x)
D. −9 sin(3x)

**5.** The third derivative of y = ln x is
A. 2x⁻³
B. −2x⁻³
C. x⁻³
D. −x⁻²

**6.** With f(x) = ln x, f‴(2) =
A. 1/8
B. −1/4
C. 1/4
D. 1/3

**7.** For y = sin(5x) + e^(3x), d³y/dx³ =
A. −25 sin(5x) + 9e^(3x)
B. 125 cos(5x) + 27e^(3x)
C. −125 cos(5x) − 27e^(3x)
D. −125 cos(5x) + 27e^(3x)

**8.** The first derivative of ln(1 + x²) is
A. 1/(1 + x²)
B. 2x/(1 + x²)
C. 2x
D. 2x(1 + x²)

**9.** Her second derivative of ln(1 + x²) is
A. (2 − 2x²)/(1 + 2x² + x⁴)
B. (2x² − 2)/(1 + 2x² + x⁴)
C. (2 + 2x²)/(1 + 2x² + x⁴)
D. (2 − 4x²)/(1 + x²)²

**10.** The quotient rule as slide 11 states it: if f(x) = u(x)/v(x), then f′(x) =
A. [u(x)v′(x) − v(x)u′(x)]/(v(x))²
B. [v(x)u′(x) + u(x)v′(x)]/(v(x))²
C. [v(x)u′(x) − u(x)v′(x)]/v(x)
D. [v(x)u′(x) − u(x)v′(x)]/(v(x))²

**11.** The TASK slide asks for the third derivative of f(x) = xeˣ. It is
A. (x + 2)eˣ
B. (x + 3)eˣ
C. xeˣ
D. eˣ

**12.** Slide 14 says f⁽⁴⁾(x) can also be written as
A. [f(x)]⁴
B. 4f(x)
C. (f‴(x))′
D. f(4)

## Short answer

**13.** State the chain rule and the quotient rule exactly as slides 10 and 11 state them, and explain why the ln(1 + x²) example needs the chain rule once but the quotient rule three times.

**14.** Work the second TASK slide in full: find the third derivative of f(x) = xeˣ and evaluate it at x = 2. Name the rule you use at each order and say why it is needed here but nowhere else in the deck.

**15.** The FOURTH DERIVATIVE slide prints f⁽⁴⁾(x) with numerator −12x¹² + 40x¹⁰ + 568x⁸ + 416x⁶ + 240x⁴ + 24x² − 12. Show that this is wrong, give the correct numerator, and say which part of the slide is nevertheless reliable.

---

## Answers

**1. C.** Power rule term by term: 4x³, then 2·3x² = 6x², then −15, then the constant 4 differentiates to 0. A keeps the constant, contradicting her own bold NOTE that d(4)/dx = 0. B differentiates 2x³ as 2x² — the coefficient 3 from the power was dropped. D leaves −15x undifferentiated; the power rule with n = 1 gives 15x⁰ = 15.

**2. A.** d(tan x)/dx = sec²x, the constant multiple 3 comes straight out, and d(3)/dx = 0. B keeps the trailing constant instead of killing it. C loses the multiplier 3, confusing "the derivative of a constant is 0" with "constants disappear". D is the same error as B with a wrong value attached.

**3. D.** Rewrite √(x³) as x^(3/2). Then y′ = (3/2)x^(1/2) and y″ = (3/2)(1/2)x^(1/2 − 1) = (3/4)x^(−1/2). A stops at the first derivative. B multiplies the coefficients correctly but leaves the exponent at 1/2 instead of subtracting 1. C reduces the exponent but forgets that the second differentiation also multiplies by 1/2.

**4. B.** y′ = −3 sin(3x) (cos → −sin, chain factor 3), then y″ = −3·3 cos(3x) = −9 cos(3x). A is only the first derivative. C drops the minus that appeared at the first step. D differentiates once more in form but not in the trigonometric function — sin does not stay sin.

**5. A.** y′ = x⁻¹, y″ = −x⁻², y‴ = −(−2)x⁻³ = 2x⁻³. B keeps the minus from the second derivative; the second differentiation flips it back. C has the right power but loses the factor 2 that comes from the exponent −2. D stops one order early.

**6. C.** f‴(x) = 2x⁻³, so f‴(2) = 2/2³ = 2/8 = 1/4. A substitutes into x⁻³ alone and forgets the coefficient 2. B carries the sign of the second derivative through. D evaluates 2³ as 6 rather than 8, giving 2/6.

**7. D.** Each differentiation of sin(5x) supplies another 5 (5, 25, 125) with the sign cycling +, −, −; each differentiation of e^(3x) supplies another 3 (3, 9, 27) with no sign change. A is the second derivative, one order short. B loses the minus on the cosine term. C applies the minus to the exponential too, but eᵘ never changes sign.

**8. B.** Chain rule with y = ln u, u = 1 + x²: y′(u) = 1/u and u′(x) = 2x, so f′(x) = (1/u)·2x = 2x/(1 + x²). A forgets the inner derivative u′ = 2x entirely. C keeps only the inner derivative and discards 1/u. D multiplies by u instead of dividing by it.

**9. A.** Quotient rule with u = 2x, v = 1 + x², u′ = 2, v′ = 2x: [(1 + x²)2 − 2x(2x)]/(1 + x²)² = (2 + 2x² − 4x²)/(1 + 2x² + x⁴) = (2 − 2x²)/(1 + 2x² + x⁴). B is the numerator written in the reverse order, u·v′ − v·u′, which gives exactly the negative. C never subtracts u·v′ at all. D forgets the +2x² produced by (1 + x²)·2.

**10. D.** v·u′ first, then subtract u·v′, all over v squared. A reverses the numerator and so gives the negative of every quotient derivative. B uses a plus, which is the product rule's structure, not the quotient rule's. C forgets to square the denominator — that alone would have made her f″ come out as (2 − 2x²)/(1 + x²) instead of over (1 + x²)².

**11. B.** Product rule at each order: f′ = eˣ + xeˣ = (x + 1)eˣ; f″ = eˣ + (x + 1)eˣ = (x + 2)eˣ; f‴ = eˣ + (x + 2)eˣ = (x + 3)eˣ. A stops at the second derivative. C is the false rule "the derivative of xeˣ is xeˣ because eˣ reproduces itself", which ignores the x factor. D differentiates only the eˣ and throws the x away.

**12. C.** The fourth derivative is the derivative of the third, so f⁽⁴⁾(x) = (f‴(x))′; the bracketed superscript counts differentiations. A reads the superscript as a power, which is exactly what the brackets are there to prevent. B invents a constant multiple. D reads f⁽⁴⁾(x) as the function evaluated at 4, the same confusion that produced the slide's own misprint "f(2) = ln x".

**13.** Chain rule (slide 10): if y = f(u) and u = g(x), then f′(x) = y′(u)·u′(x). Quotient rule (slide 11): if f(x) = u(x)/v(x), then f′(x) = [v(x)u′(x) − u(x)v′(x)]/(v(x))². The chain rule is needed once, at the very start, because ln(1 + x²) is a composite — a logarithm of a function of x — and nothing else in the problem is composite. It produces f′(x) = 2x/(1 + x²), which is a **quotient**. From that point on every derivative is again a quotient of two polynomials, so the quotient rule is required at the second, third and fourth orders: three times. The key point is that the rule you need is dictated by the shape of the expression you are currently differentiating, not by the shape of the original function.

**14.** f(x) = xeˣ is a product of x and eˣ, so the product rule (uv)′ = u′v + uv′ applies at every order.
f′(x) = 1·eˣ + x·eˣ = (x + 1)eˣ
f″(x) = 1·eˣ + (x + 1)eˣ = (x + 2)eˣ
f‴(x) = 1·eˣ + (x + 2)eˣ = (x + 3)eˣ
Therefore f‴(2) = (2 + 3)e² = **5e² ≈ 36.95**.
Each order needs the product rule again, because each answer is still a product — you cannot differentiate the bracket and the eˣ separately. This is the only place in the deck where the product rule is used: the SUMMARY slide lists it among the rules, but none of the six worked examples calls for it, so this TASK is the deck's sole test of it.

**15.** Expand the two products on the slide's own quotient-rule line. First, (1 + 4x² + 6x⁴ + 4x⁶ + x⁸)(20x⁴ − 24x² − 12) = 20x¹² + 56x¹⁰ + 12x⁸ − 112x⁶ − 148x⁴ − 72x² − 12. Second, (8x + 24x³ + 24x⁵ + 8x⁷)(4x⁵ − 8x³ − 12x) = 32x¹² + 32x¹⁰ − 192x⁸ − 448x⁶ − 352x⁴ − 96x². Subtracting the second from the first gives
**−12x¹² + 24x¹⁰ + 204x⁸ + 336x⁶ + 204x⁴ + 24x² − 12**,
so four of the printed coefficients — 40, 568, 416 and 240 — should be 24, 204, 336 and 204. Only the x¹², x² and constant terms are right. What *is* reliable is everything above the final line: the identification of u, v, u′ and v′, and the quotient-rule expression itself, are all correct. The failure is confined to the expansion. A quick independent check: the denominator 1 + 4x² + 6x⁴ + 4x⁶ + x⁸ is (1 + x²)⁴, and the correct numerator factors as −12(1 + x²)⁴(x⁴ − 6x² + 1), so f⁽⁴⁾(x) reduces to −12(x⁴ − 6x² + 1)/(1 + x²)⁴ — the printed numerator does not factor that way at all.
