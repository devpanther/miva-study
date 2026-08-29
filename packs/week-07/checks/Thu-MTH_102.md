# Thursday — MTH_102 nightly check

*Problems-only session on Week 7 integration. Apply ∫xⁿdx = x^(n+1)/(n+1) + c to polynomials, negative powers and fractions rewritten as powers; then evaluate definite integrals by the Fundamental Theorem, F(x)|ₐᵇ = F(b) − F(a). Includes both tasks the lecturer set — ∫(2x² − 6x − 3)dx and ∫₋₁²(7x − 5)dx — plus limits that are negative, antiderivatives that carry a minus sign, and one worked solution to diagnose.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Evaluate ∫(x³ + 1/x³)dx.
A. x⁴/4 + 1/(2x²) + c
B. x⁴/4 − 1/(2x²) + c
C. x⁴/4 − 1/(4x⁴) + c
D. 3x² − 3/x⁴ + c

**2.** Evaluate ∫(3/x⁵)dx.
A. 3/(4x⁴) + c
B. −3/(6x⁶) + c
C. −1/(2x⁴) + c
D. −3/(4x⁴) + c

**3.** The first TASK slide asks for ∫(2x² − 6x − 3)dx. What is it?
A. (2/3)x³ − 3x² − 3x + c
B. (2/3)x³ − 6x² − 3x + c
C. 2x³ − 3x² − 3x + c
D. (2/3)x³ − 3x² − 3 + c

**4.** A student writes: ∫₂³(1/x²)dx = (1/x)|₂³ = 1/3 − 1/2 = −1/6. What is the actual value, and what went wrong?
A. −1/6; the working is correct
B. 1/6; the limits were taken in the wrong order
C. 1/6; the antiderivative of x⁻² is −1/x, not 1/x
D. −1/6; the sign is right but the constant of integration was dropped

**5.** Evaluate ∫₀⁴ 6x dx.
A. 24
B. 96
C. 16
D. 48

**6.** The second TASK slide asks for ∫₋₁²(7x − 5)dx. What is it?
A. −9/2
B. 9/2
C. 5/2
D. 4

**7.** Evaluate ∫₋₁⁴(3x² − 6)dx.
A. 33
B. 95
C. 35
D. 25

**8.** Evaluate ∫₋₂¹ 3x² dx.
A. −7
B. 9
C. 7
D. −9

**9.** Work the first TASK slide in full: evaluate ∫(2x² − 6x − 3)dx, then verify your answer.
*(short answer)*

**10.** Work the second TASK slide in full: evaluate ∫₋₁²(7x − 5)dx. Show the substitution at x = −1 explicitly, term by term.
*(short answer)*

**11.** Evaluate ∫₂³(1/x²)dx following the lecturer's Example 3: state f(x) as a power, state F(x), and factor the minus sign out of the evaluation.
*(short answer)*

**12.** Evaluate ∫(2/x⁷)dx. State the value of n you are using and show the division step.
*(short answer)*

## Answers

**1. B** — The second term is x⁻³; the new power is −3 + 1 = −2 and you divide by −2, giving x⁻²/(−2) = −1/(2x²). Option 1 keeps the term positive, the classic slip of ignoring that the divisor is negative. Option 3 subtracts 1 from the exponent instead of adding, producing x⁻⁴. Option 4 differentiates both terms instead of integrating them.

**2. D** — Rewrite as ∫3x⁻⁵dx; the new power is −4, so 3x⁻⁴/(−4) = −3/(4x⁴). Option 1 loses the sign that dividing by −4 produces. Option 2 goes the wrong way on the exponent, to −6, which is the differentiation direction. Option 3 divides the 3 away as well as using the wrong constant — it comes from mistakenly writing x⁻⁴/(−2).

**3. A** — 2x³/3, then 6x²/2 = 3x², then 3x. Option 2 forgets to divide the 6 by the new power 2. Option 3 forgets to divide the 2 by the new power 3. Option 4 leaves the constant term −3 unintegrated; ∫3dx = 3x, by the power rule with n = 0, not 3. Differentiating option 1 returns 2x² − 6x − 3, which none of the others do.

**4. C** — x⁻² integrates to x⁻¹/(−1) = −1/x, so the correct working is (−1/x)|₂³ = −(1/3 − 1/2) = 1/6. Option 1 accepts a wrong antiderivative — differentiating 1/x gives −1/x², not 1/x². Option 2 identifies the right answer for the wrong reason: the limits were in the correct order, upper minus lower, so reversing them would introduce a second error rather than fix this one. Option 4 is doubly wrong: the sign is not right, and a definite integral has no constant.

**5. D** — F(x) = 3x², so 3x²|₀⁴ = 3(4² − 0²) = 3(16) = 48. Option 1 substitutes into the integrand 6x rather than into F. Option 2 uses 6x² as the antiderivative, forgetting to divide by the new power. Option 3 uses x² and drops the coefficient entirely.

**6. A** — F(x) = 7x²/2 − 5x. At x = 2: 14 − 10 = 4. At x = −1: 7/2 + 5 = 17/2, because −5(−1) = +5. So 4 − 17/2 = −9/2. Option 2 computes lower minus upper. Option 3 comes from writing −5(−1) as −5, giving 4 − 3/2. Option 4 evaluates the upper limit and forgets to subtract the lower one. A negative answer is legitimate here and should not prompt a hunt for a lost minus sign.

**7. C** — F(x) = x³ − 6x, so (4³ − 24) − ((−1)³ − 6(−1)) = (64 − 24) − (−1 + 6) = 40 − 5 = 35. Option 1 arises from taking (−1)³ = +1. Option 2 drops the −6x term altogether, leaving 64 + 1. Option 4 mishandles the sign of −6(−1) at the lower limit, using −6 − 1 instead of −1 + 6.

**8. B** — F(x) = x³, so x³|₋₂¹ = 1³ − (−2)³ = 1 − (−8) = 9. Option 1 subtracts 8 instead of −8, i.e. treats (−2)³ as +8. Option 3 gets the magnitude of that slip but not its sign. Option 4 reverses the limits. The whole question turns on one fact — an odd power keeps the sign of a negative base — and no amount of vocabulary substitutes for it.

**9.** A good answer splits the integral term by term, applies ∫xⁿdx = x^(n+1)/(n+1) + c to each — 2x³/3, 6x²/2 = 3x², 3x from the constant with n = 0 — assembles (2/3)x³ − 3x² − 3x + c, keeps the constant of integration, and then differentiates the result to recover 2x² − 6x − 3. Credit the verification step explicitly: it is the deck's own justification for the whole method, and it is the only check available since the slide gives no answer.

**10.** A good answer states F(x) = 7x²/2 − 5x, then substitutes: at x = 2, 7(2)²/2 − 5(2) = 14 − 10 = 4; at x = −1, 7(−1)²/2 − 5(−1) = 7/2 + 5 = 17/2, spelling out that (−1)² = 1 and that subtracting a negative gives +5. It concludes 4 − 17/2 = −9/2 in the order F(b) − F(a), and should note that no + c appears and that a negative value is a legitimate answer rather than a sign error.

**11.** A good answer writes f(x) = 1/x² = x⁻², obtains F(x) = x⁻¹/(−1) = −1/x, and then evaluates as the slide does: (−1/x)|₂³ = −(1/3 − 1/2). It should carry out the bracket first, 1/3 − 1/2 = −1/6, and then negate to get +1/6, noting that the order inside the bracket is still upper minus lower — the minus that was factored out sits in front of the whole bracket and does not swap the limits.

**12.** A good answer rewrites 2/x⁷ as 2x⁻⁷ and says explicitly that n = −7, computes the new exponent −7 + 1 = −6, divides by it — 2·x⁻⁶/(−6) — and simplifies 2/(−6) to −1/3, giving −1/(3x⁶) + c with the constant retained. It should identify the division by −6 as the source of the minus sign, and can verify by differentiating −(1/3)x⁻⁶ to get 2x⁻⁷.
