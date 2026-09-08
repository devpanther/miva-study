# Monday — MTH_102 nightly check

*Conceptual session on Week 7 integration, exactly as she builds it.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** Find ∫√x dx by first writing √x as a power of x.
A. (3/2)x^(3/2) + c
B. (2/3)x^(3/2) + c
C. (1/2)x^(−1/2) + c
D. (2/3)x^(1/2) + c

**10.** Evaluate ∫₁² 2x dx using F(x) = x², then again using F(x) = x² + 5. What pair of values do you get?
A. 3 and 8
B. 4 and 9
C. 3 and 9
D. 3 and 3

**11.** A student writes ∫x⁵ dx = 5x⁴ + c. Differentiate the student's answer, then give the correct integral.
A. 20x³, and ∫x⁵ dx = x⁶/6 + c
B. 20x³, and ∫x⁵ dx = x⁶ + c
C. 20x⁴, and ∫x⁵ dx = x⁶/6 + c
D. 5x⁵, and ∫x⁵ dx = 6x⁶ + c

**12.** The derivative of x² + c is 2x for every real number c. What does that make the answer ∫2x dx = x²?
A. Complete, since c matters only in definite integrals
B. Incomplete: it names one antiderivative instead of the whole family x² + c
C. Wrong: the derivative of x² is 2, not 2x
D. Incomplete: the answer should be x² + 2x + c

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

**9. B** — *Power rule with a fractional exponent.* Write √x = x^(1/2), so n = 1/2. Raise the power to 3/2 and divide by 3/2, which is the same as multiplying by 2/3: ∫x^(1/2) dx = x^(3/2)/(3/2) + c = (2/3)x^(3/2) + c.

Check by differentiating: d/dx (2/3)x^(3/2) = (2/3)(3/2)x^(1/2) = √x. (3/2)x^(3/2) + c multiplies by the new power instead of dividing; (1/2)x^(−1/2) + c differentiates √x instead of integrating it; (2/3)x^(1/2) + c divides correctly but never raises the power.

**10. D** — *Constant of integration cancels in a definite integral.* With F(x) = x²: F(2) − F(1) = 4 − 1 = 3. With F(x) = x² + 5: F(2) − F(1) = (4 + 5) − (1 + 5) = 9 − 6 = 3. The 5 is added at the upper limit and subtracted again at the lower one, so (F(b) + c) − (F(a) + c) = F(b) − F(a) for every c. That is why a definite integral never carries + c.

3 and 8 adds the 5 at the upper limit only; 3 and 9 evaluates the second version at x = 2 alone; 4 and 9 forgets the lower limit both times.

**11. A** — *Checking an antiderivative by differentiating.* d/dx (5x⁴ + c) = 20x³, which is not x⁵, so the claim fails its own check. The student differentiated instead of integrating: multiplied by the old power and lowered it. Integration goes the other way, raise the power to 6 and divide by 6, giving ∫x⁵ dx = x⁶/6 + c, and d/dx (x⁶/6) = x⁵ confirms it.

x⁶ + c raises the power but forgets to divide; 20x⁴ mishandles the power drop in the derivative; 6x⁶ + c multiplies by the new power instead of dividing.

**12. B** — *Why the constant of integration is required.* The indefinite integral of 2x is every function whose derivative is 2x. Differentiating a constant gives 0, so x², x² + 1 and x² − 7 all have derivative 2x. Writing x² alone picks one member of that family and drops the rest, so the full answer is x² + c with c any real number.

The first option has the roles reversed: it is the definite integral where c cancels and is not needed. The third misreads d/dx x² = 2x. The fourth invents an extra 2x that has no source.
