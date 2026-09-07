# Monday — MTH_102 nightly check

*Conceptual session on Week 7 integration, exactly as she builds it.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** Find ∫x⁶ dx.
A. 7x⁷ + c
B. 6x⁵ + c
C. x⁷/7 + c
D. x⁵/5 + c

**2.** Which of these functions has derivative 8x³?
A. 2x⁴ + 7
B. 24x²
C. 8x⁴
D. 4x⁴

**3.** Find ∫5 dx.
A. 5 + c
B. 0
C. 5x²/2 + c
D. 5x + c

**4.** Find ∫x⁻³ dx.
A. −3x⁻⁴ + c
B. −1/(2x²) + c
C. 1/(2x²) + c
D. −1/(4x⁴) + c

**5.** F′(x) = 3x² and F(1) = 5. Find F(x).
A. x³ + 5
B. x³
C. x³ − 4
D. x³ + 4

**6.** Evaluate ∫₀² 3x² dx.
A. 8
B. 12
C. 24
D. 8 + c

**7.** The graph of f(x) = 3 is a horizontal line at height 3. Evaluate ∫₁⁴ 3 dx, the area between the line and the x-axis from x = 1 to x = 4.
A. 3
B. 12
C. 9
D. 15

**8.** The power rule ∫xⁿ dx = x^(n+1)/(n+1) + c is stated with the restriction n ≠ −1. What goes wrong at n = −1?
A. x⁻¹ is negative, so it cannot be integrated
B. x⁰ = 1, so the answer would be a constant
C. n + 1 = 0, so the formula divides by zero
D. 1/x has no antiderivative at all

**9. (show your working)** Find ∫√x dx by first writing √x as a power of x. State the value of n you use. Show your working.

**10. (show your working)** Evaluate ∫₁² 2x dx twice: first using F(x) = x², then using F(x) = x² + 5. Show that both give the same number and say why. Show your working.

**11. (show your working)** A student writes ∫x⁵ dx = 5x⁴ + c. Differentiate the student's answer to show it is wrong, name the mistake, and give the correct integral. Show your working.

**12. (show your working)** Explain, using differentiation, why ∫2x dx = x² is an incomplete answer and ∫2x dx = x² + c is the full answer.

---

## Answers

**1. C** — *Power rule for integration.* Raise the power by one, then divide by the new power: n = 6, so ∫x⁶ dx = x⁷/7 + c. Check: d/dx (x⁷/7) = 7x⁶/7 = x⁶.

7x⁷ multiplies by the new power instead of dividing; 6x⁵ differentiates instead of integrating; x⁵/5 lowers the power instead of raising it.

**2. A** — *Recognising an antiderivative by differentiating.* Differentiate each candidate. d/dx (2x⁴ + 7) = 8x³ + 0 = 8x³, so 2x⁴ + 7 is an antiderivative of 8x³; the constant 7 disappears on differentiating, which is exactly why any constant may be added.

24x² is the derivative of 8x³, not a function whose derivative is 8x³; 8x⁴ differentiates to 32x³, the result of raising the power without dividing by 4; 4x⁴ differentiates to 16x³, the result of dividing 8 by 2 instead of by the new power 4.

**3. D** — *Integrating a constant.* Write 5 as 5x⁰ and use the power rule with n = 0: 5·x¹/1 + c = 5x + c. Check: d/dx (5x) = 5.

5 + c leaves the constant unchanged, which differentiates to 0, not 5; 0 is the derivative of a constant, not its integral; 5x²/2 treats the integrand as 5x instead of 5.

**4. B** — *Power rule with a negative exponent.* n = −3, so the new exponent is −3 + 1 = −2 and you divide by −2: x⁻²/(−2) + c = −1/(2x²) + c. The minus sign comes from dividing by the negative new power.

−3x⁻⁴ differentiates instead of integrating; 1/(2x²) forgets that dividing by −2 makes the answer negative; −1/(4x⁴) subtracts 1 from the exponent instead of adding it.

**5. D** — *Fixing the constant of integration from a given value.* Integrate first: F(x) = ∫3x² dx = x³ + c. Then use the condition: F(1) = 1 + c = 5, so c = 4 and F(x) = x³ + 4. Check: F′(x) = 3x² and F(1) = 5.

x³ + 5 uses the given value 5 as c without evaluating x³ at x = 1; x³ drops the constant entirely, giving F(1) = 1; x³ − 4 has the sign of c wrong, from 1 + c = 5 solved as c = 1 − 5.

**6. A** — *Definite integral by the Fundamental Theorem.* An antiderivative of 3x² is F(x) = x³. By the Fundamental Theorem, ∫₀² 3x² dx = F(2) − F(0) = 8 − 0 = 8.

12 substitutes x = 2 into the integrand 3x² instead of into F; 24 uses 3x³ as the antiderivative, forgetting to divide by 3; 8 + c adds a constant to a definite integral, which is a number and carries no c.

**7. C** — *Definite integral as area under a horizontal line.* F(x) = 3x, so ∫₁⁴ 3 dx = 3x|₁⁴ = 3(4) − 3(1) = 12 − 3 = 9. This is the rectangle of width 4 − 1 = 3 and height 3.

3 is the height of the line, not the area; 12 is F(4) alone, forgetting to subtract F(1); 15 adds F(1) instead of subtracting it.

**8. C** — *Why the power rule excludes n = −1.* At n = −1 the new exponent is n + 1 = 0 and the formula asks for x⁰/0. Division by zero is undefined, so the formula has nothing to say there; that is the only reason for the restriction.

x⁻¹ is not always negative and sign never blocks integration; x⁰ = 1 is true but the trouble is the denominator, not the numerator; 1/x does have an antiderivative, it is just not given by this formula.

**9.** *Power rule with a fractional exponent.* √x = x^(1/2), so n = 1/2. The new exponent is 1/2 + 1 = 3/2 and you divide by 3/2, which is the same as multiplying by 2/3: ∫x^(1/2) dx = x^(3/2)/(3/2) + c = (2/3)x^(3/2) + c. Check: d/dx (2/3)x^(3/2) = (2/3)(3/2)x^(1/2) = √x.

Final answer: (2/3)x^(3/2) + c. Also accepted: 2x^(3/2)/3 + c, (2/3)x√x + c, or 2√(x³)/3 + c. The working must show n = 1/2 and the division by 3/2. (3/2)x^(3/2) multiplies by the new power instead of dividing and is wrong; an answer without + c is incomplete.

**10.** *Constant of integration cancels in a definite integral.* With F(x) = x²: F(2) − F(1) = 4 − 1 = 3. With F(x) = x² + 5: F(2) − F(1) = (4 + 5) − (1 + 5) = 9 − 6 = 3. The 5 is added at the upper limit and subtracted again at the lower limit, so it cancels: (F(b) + c) − (F(a) + c) = F(b) − F(a) for any c.

Final answer: 3 both times. A correct answer shows both evaluations reaching 3 and states that the added constant cancels in F(b) − F(a), which is why a definite integral never carries + c. Getting 8 for the second evaluation (adding 5 only once) is wrong.

**11.** *Checking an antiderivative by differentiating.* Differentiate the claimed answer: d/dx (5x⁴ + c) = 20x³, which is not x⁵, so the answer is wrong. The student differentiated instead of integrating (multiplied by the old power and lowered it). Integration goes the other way: raise the power to 6 and divide by 6.

Final answer: ∫x⁵ dx = x⁶/6 + c. Also accepted: (1/6)x⁶ + c. A correct answer shows the derivative 20x³ (or at least that it is not x⁵), says the student differentiated rather than integrated, and gives x⁶/6 + c. Check: d/dx (x⁶/6) = x⁵.

**12.** *Why the constant of integration is required.* The indefinite integral of 2x is every function whose derivative is 2x, not just one of them. Since the derivative of any constant is 0, [x² + c]′ = 2x + 0 = 2x for every real number c, so x² + 1, x² − 7 and x² + 100 are all antiderivatives of 2x. Writing x² alone names one member of the family and silently drops the rest; x² + c names them all.

A correct answer states that differentiating a constant gives 0, so x² + c has derivative 2x for every c, and concludes that the integral is the whole family x² + c, with c any real number.
