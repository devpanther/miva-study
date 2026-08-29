# MTH_102 — Week 7 Questions
*Integration: indefinite and definite integrals. Twelve multiple choice, three short answer. Answers at the bottom — work them before you look.*

## Multiple choice

**1.** In the lecturer's definition, ∫f(x)dx = F(x) + c holds precisely when
A. F′(x) = f(x)
B. f′(x) = F(x)
C. F(x) = f(x) + c
D. F(x) = f(b) − f(a)

**2.** ∫√x dx =
A. (3/2)x^(3/2) + c
B. (2/3)x^(3/2) + c
C. (1/2)x^(−1/2) + c
D. x^(3/2) + c

**3.** ∫(3/x⁵)dx =
A. 3/(4x⁴) + c
B. −3/(6x⁶) + c
C. −3/(4x⁴) + c
D. −15/x⁶ + c

**4.** The power rule ∫xⁿdx = x^(n+1)/(n+1) + c excludes n = −1 because
A. x⁻¹ is negative and integrals cannot be negative
B. x⁰ equals 1, so the answer would be a constant
C. 1/x is not continuous at x = 0, so it has no antiderivative anywhere
D. at n = −1 the denominator n + 1 is 0, so the formula divides by zero

**5.** ∫(2x² − 6x − 3)dx =
A. (2/3)x³ − 6x² − 3x + c
B. (2/3)x³ − 3x² − 3x + c
C. 2x³ − 3x² − 3x + c
D. 4x − 6 + c

**6.** In Example 4 the lecturer evaluates the third term of ∫(11x¹⁰ − 4x⁹ + 1)dx as x^(0+1)/(0+1). What is she doing?
A. Treating the constant 1 as the constant of integration
B. Using a separate rule that says the integral of any constant is that constant
C. Applying the same power rule with n = 0, since 1 = x⁰
D. Differentiating the constant term, which gives 0

**7.** ∫₀⁴ 6x dx =
A. 24
B. 96
C. 16
D. 48

**8.** ∫₋₁² (7x − 5)dx =
A. −9/2
B. 9/2
C. 5/2
D. 4

**9.** ∫₋₁⁴ (3x² − 6)dx =
A. 33
B. 95
C. 35
D. 25

**10.** ∫₁⁴ (1/x²)dx =
A. −3/4
B. −1/4
C. 5/4
D. 3/4

**11.** The lecturer justifies the constant of integration with the line [G(x) + c]′ = 2x + 0 = 2x = g(x). The "+ 0" appears because
A. the derivative of a constant is always 0
B. c is defined to be zero unless stated otherwise
C. the integral of 0 is 0
D. g(x) = 2x has no constant term

**12.** A student evaluates ∫₀³ 4x dx as 4x|₀³ = 12 − 0 = 12. The error is that
A. the constant of integration was omitted
B. the limits were substituted into the integrand f(x) = 4x instead of into the antiderivative F(x) = 2x²
C. the limits were used in the wrong order
D. 4x is not continuous on [0, 3], so the theorem does not apply

## Short answer

**13.** State the power rule for integration exactly as the deck states it, including the restriction on n, and explain in one sentence why that restriction is necessary.

**14.** Evaluate ∫(2/x⁷)dx, showing every step the lecturer shows. Identify which single step is responsible for the minus sign in the final answer.

**15.** The Definite Integrals Example 2 slide writes the second line as "3∫₋₁⁵ x²dx − 6∫₋₁⁵ x dx". Say what is wrong with the second integral, what it should read, and explain why the slide's final answer of 90 is nevertheless correct.

---

## Answers

**1. A.** The definition slide: F is a function such that F′(x) = f(x), added to the constant of integration c. B reverses the two functions; C confuses the integral with a vertical shift of f; D is the definite-integral formula.

**2. B.** n = 1/2, so the new exponent is 3/2 and you divide by 3/2 — which is multiplying by 2/3. A multiplies by 3/2 instead of dividing. C differentiates instead of integrating. D forgets to divide at all.

**3. C.** Rewrite as ∫3x⁻⁵dx. New exponent −5 + 1 = −4, divide by −4: 3x⁻⁴/(−4) = −3/(4x⁴). A loses the minus that comes from dividing by −4. B subtracts 1 from the exponent instead of adding. D differentiates.

**4. D.** n + 1 = 0 and division by zero is undefined; the formula simply has nothing to say there. A and B are irrelevant observations. C is false — 1/x has antiderivatives on any interval not containing 0; the issue is with this formula, not with the function.

**5. B.** Term by term: 2x³/3, then 6x²/2 = 3x², then 3x. A forgets to divide 6 by the new power 2. C forgets to divide 2 by the new power 3. D differentiates the integrand.

**6. C.** She writes the constant 1 as x⁰ and runs it through ∫xⁿdx with n = 0, giving x¹/1 = x. A confuses the integrand's constant term with the constant of integration. B invents a rule that would give ∫1dx = 1, which differentiates to 0, not 1. D is the opposite operation.

**7. D.** F(x) = 3x², so 3x²|₀⁴ = 3(16 − 0) = 48. A substitutes into the integrand 6x. B doubles — using 6x² as the antiderivative. C uses x² without the coefficient.

**8. A.** F(x) = 7x²/2 − 5x. At 2: 14 − 10 = 4. At −1: 7/2 + 5 = 17/2. 4 − 17/2 = −9/2. B takes lower minus upper. C mishandles the sign of −5(−1), using −5 instead of +5. D evaluates the upper limit only and forgets to subtract.

**9. C.** F(x) = x³ − 6x, so (64 − 24) − (−1 + 6) = 40 − 5 = 35. A comes from taking (−1)³ = +1. B forgets the −6x term entirely. D drops the sign on the lower limit's −6x.

**10. D.** Rewrite 1/x² as x⁻²; F(x) = x⁻¹/(−1) = −1/x, so (−1/x)|₁⁴ = −(1/4 − 1) = 3/4. A integrates x⁻² to +1/x, losing the minus. B substitutes the upper limit only. C is an arithmetic slip on −(1/4 − 1).

**11. A.** Differentiating the constant kills it, which is exactly why every value of c produces the same derivative and therefore why the antiderivative is a whole family. B is false — c can be any real number. C is a true statement about a different thing. D confuses the integrand with the answer.

**12. B.** The Fundamental Theorem substitutes into F, not f: 2x²|₀³ = 2(9 − 0) = 18. A is irrelevant — a definite integral has no + c. C would only flip the sign. D is false; 4x is continuous everywhere.

**13.** ∫xⁿdx = x^(n+1)/(n+1) + c, where n is a real number with n ≠ −1. The restriction is necessary because at n = −1 the denominator n + 1 equals 0, and the expression divides by zero.

**14.** ∫(2/x⁷)dx = ∫2x⁻⁷dx (rewriting the fraction as a negative power, so n = −7) = 2·x^(−7+1)/(−7+1) + c = 2·x⁻⁶/(−6) + c = −1/(3x⁶) + c. The minus sign comes from the division step: the new power is −6, and dividing 2 by −6 gives −1/3. Nothing in the rewriting or the exponent arithmetic introduces it.

**15.** With g(x) = −6, the antiderivative is G(x) = −6x, so the term being integrated is the constant 1, not x: the line should read 3∫₋₁⁵ x²dx − 6∫₋₁⁵ dx (equivalently − 6∫₋₁⁵ 1 dx). As printed, 6∫₋₁⁵ x dx would give 3x²|₋₁⁵ = 72, not 36. The answer 90 is still correct because the very next line of the slide reverts to the correct antiderivative, writing x³|₋₁⁵ − 6x|₋₁⁵, and everything from there — (125 + 1) − 6(6) = 126 − 36 = 90 — follows correctly. The misprint is confined to that one line.
