# Thursday — MTH_102 nightly check

*Problems-only session on Week 7 integration.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** Find ∫(2x + 1)² dx.
A. (4/3)x³ + 2x² + x + c
B. (2x + 1)³/3 + c
C. 4x³ + 4x² + x + c
D. (4/3)x³ + 4x² + x + c

**2.** Find ∫(x² + 1/x²) dx.
A. x³/3 + 1/x + c
B. 2x − 2/x³ + c
C. x³/3 − 1/x + c
D. x³/3 − 1/(3x³) + c

**3.** Find ∫(6/x⁴) dx.
A. 2/x³ + c
B. −6/(5x⁵) + c
C. −24/x⁵ + c
D. −2/x³ + c

**4.** Evaluate ∫₋₁³ (2x − 4) dx.
A. 0
B. −8
C. 8
D. −3

**5.** Evaluate ∫₁³ (2/x²) dx.
A. 4/3
B. −4/3
C. −8/3
D. −16/9

**6.** Find the number b > 0 for which ∫₀ᵇ 2x dx = 25.
A. 25/2
B. 5/√2
C. 5
D. 25

**7.** Evaluate ∫₁⁴ (1/√x) dx.
A. 1/2
B. 4
C. 1
D. 2

**8.** Which of these rewritings of an integral is NOT justified by splitting and constant multiples?
A. ∫(x³ + x) dx = ∫x³ dx + ∫x dx
B. ∫7x² dx = 7∫x² dx
C. ∫(x³ · x) dx = (∫x³ dx)(∫x dx)
D. ∫(x³ − x) dx = ∫x³ dx − ∫x dx

**9. (show your working)** Find ∫(2x² + 3x − 4) dx and check your answer by differentiating. Show your working.

**10. (show your working)** Evaluate ∫₋₂¹ (3x² − 2) dx. Show the substitution at x = −2 term by term. Show your working.

**11. (show your working)** Evaluate ∫₁² (x² − 1)/x² dx by first dividing each term of the numerator by x². Show your working.

**12. (show your working)** A student evaluates ∫₀³ 6x dx as 6x|₀³ = 18 − 0 = 18. Explain what the student substituted the limits into, why that is wrong, and give the correct value.

---

## Answers

**1. A** — *Expanding before integrating.* Expand first: (2x + 1)² = 4x² + 4x + 1. Then integrate term by term: 4x³/3 + 4x²/2 + x + c = (4/3)x³ + 2x² + x + c. (The form (2x + 1)³/6 + c is the same family, since it expands to (4/3)x³ + 2x² + x + 1/6.)

(2x + 1)³/3 applies the power rule to 2x + 1 as if it were x and ignores the factor 2 inside; 4x³ + 4x² + x raises each power but never divides; (4/3)x³ + 4x² + x divides the first term but forgets to divide 4x by 2.

**2. C** — *Integrating positive and negative powers together.* Write 1/x² as x⁻². Then ∫x² dx = x³/3 and ∫x⁻² dx = x⁻¹/(−1) = −1/x, so the integral is x³/3 − 1/x + c. Check: d/dx (x³/3 − 1/x) = x² + 1/x².

x³/3 + 1/x loses the minus sign that comes from dividing by −1; 2x − 2/x³ differentiates instead of integrating; x³/3 − 1/(3x³) subtracts 1 from the exponent of x⁻² instead of adding it.

**3. D** — *Rewriting a fraction as a negative power.* Rewrite 6/x⁴ as 6x⁻⁴, so n = −4. The new exponent is −3 and you divide by −3: 6·x⁻³/(−3) + c = −2x⁻³ + c = −2/x³ + c. Check: d/dx (−2x⁻³) = 6x⁻⁴.

2/x³ loses the minus sign from dividing by −3; −6/(5x⁵) lowers the exponent to −5 instead of raising it to −3; −24/x⁵ differentiates 6x⁻⁴ instead of integrating it.

**4. B** — *Definite integral with a negative lower limit.* F(x) = x² − 4x. F(3) = 9 − 12 = −3. F(−1) = (−1)² − 4(−1) = 1 + 4 = 5. So the integral is F(3) − F(−1) = −3 − 5 = −8. A negative answer is legitimate: 2x − 4 is below the axis for most of [−1, 3].

0 comes from writing −4(−1) as −4, giving F(−1) = −3; 8 subtracts in the wrong order, F(−1) − F(3); −3 is F(3) alone, forgetting the lower limit.

**5. A** — *Definite integral of a negative power.* Rewrite 2/x² as 2x⁻², so F(x) = 2x⁻¹/(−1) = −2/x. Then (−2/x)|₁³ = −2/3 − (−2) = −2/3 + 2 = 4/3. Factoring the minus out: −2(1/3 − 1) = −2(−2/3) = 4/3.

−4/3 uses +2/x as the antiderivative, losing the sign from dividing by −1; −8/3 adds F(1) instead of subtracting it, −2/3 + (−2); −16/9 substitutes into the integrand 2/x² instead of into F.

**6. C** — *Solving for an unknown limit of integration.* F(x) = x², so ∫₀ᵇ 2x dx = b² − 0 = b². Set b² = 25, and since b > 0, b = 5. Check: ∫₀⁵ 2x dx = 25 − 0 = 25.

25/2 solves 2b = 25, substituting the limit into the integrand 2x instead of into F; 5/√2 uses 2x² as the antiderivative, solving 2b² = 25; 25 forgets to take the square root of b² = 25.

**7. D** — *Definite integral with a root in the denominator.* Rewrite 1/√x as x^(−1/2). The new exponent is 1/2 and you divide by 1/2, which doubles: F(x) = 2x^(1/2) = 2√x. Then 2√x|₁⁴ = 2(2) − 2(1) = 4 − 2 = 2.

1/2 multiplies by the new exponent 1/2 instead of dividing, using F = (1/2)√x; 4 is F(4) alone, forgetting the lower limit; 1 uses F = √x, forgetting to divide by 1/2.

**8. C** — *What linearity of the integral licenses.* Splitting licenses sums, differences and constant multiples only. The integral of a product is not the product of the integrals: ∫x³·x dx = ∫x⁴ dx = x⁵/5 + c, while (x⁴/4)(x²/2) = x⁶/8, which is not even the right power of x.

The sum, the difference and the constant multiple rewritings are all valid, because integration is linear.

**9.** *Integrating a polynomial term by term.* Split the integral and apply the power rule to each term: ∫2x² dx = 2x³/3, ∫3x dx = 3x²/2, ∫4 dx = 4x. So ∫(2x² + 3x − 4) dx = (2/3)x³ + (3/2)x² − 4x + c. Check: d/dx [(2/3)x³ + (3/2)x² − 4x] = 2x² + 3x − 4.

Final answer: (2/3)x³ + (3/2)x² − 4x + c. Also accepted: 2x³/3 + 3x²/2 − 4x + c. The working must show each term divided by its new power and the differentiation check. 2x³ + 3x² − 4x + c (no division) and (2/3)x³ + (3/2)x² − 4 + c (constant not integrated to 4x) are wrong; an answer without + c is incomplete.

**10.** *Definite integral with a cubed negative limit.* F(x) = x³ − 2x. At x = 1: 1 − 2 = −1. At x = −2: (−2)³ − 2(−2) = −8 + 4 = −4. So ∫₋₂¹ (3x² − 2) dx = F(1) − F(−2) = −1 − (−4) = −1 + 4 = 3.

Final answer: 3. A correct answer states F(x) = x³ − 2x, shows (−2)³ = −8 and −2(−2) = +4 at the lower limit, and subtracts F(−2) = −4 to get 3. Taking (−2)³ as +8 gives F(−2) = 12 and the wrong answer −13; writing −2(−2) = −4 gives F(−2) = −12 and the wrong answer 11.

**11.** *Dividing before integrating a definite integral.* Divide: (x² − 1)/x² = x²/x² − 1/x² = 1 − x⁻². Integrate: F(x) = x − x⁻¹/(−1) = x + 1/x. Evaluate: F(2) = 2 + 1/2 = 5/2, F(1) = 1 + 1 = 2, so the integral is 5/2 − 2 = 1/2.

Final answer: 1/2 (also accepted: 0.5). The working must show the rewrite to 1 − x⁻², the antiderivative x + 1/x with the plus sign (from dividing x⁻² by −1 and then subtracting), and F(2) − F(1). Using x − 1/x as F gives 3/2 − 0 = 3/2 and is wrong; integrating numerator and denominator separately is not a valid method.

**12.** *Substituting limits into the antiderivative, not the integrand.* The Fundamental Theorem says ∫ₐᵇ f(x) dx = F(b) − F(a), where F is an antiderivative of f. The student substituted the limits into f(x) = 6x itself; the limits must go into F(x) = 3x². Correctly: 3x²|₀³ = 3(9) − 3(0) = 27.

A correct answer says the limits were put into the integrand instead of the antiderivative, states F(x) = 3x² (from integrating 6x), and gives 27. Also accepted: 3(3² − 0²) = 27. An answer that only says the arithmetic is wrong, without naming F, is incomplete.
