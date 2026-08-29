# MTH_102 — Week 8 Questions
*Integration techniques: substitution, integration by parts, trigonometric substitution, partial fractions. Twelve multiple choice, three short answer. Answers at the bottom — work them before you look.*

## Multiple choice

**1.** The deck's general substitution formula is
A. ∫f(g(x))·g′(x)dx = f′(g(x)) + C
B. ∫f′(g(x))dx = f(g(x)) + C
C. ∫f′(g(x))·g′(x)dx = f(g(x)) + C
D. ∫f′(x)·g′(x)dx = f(x)g(x) + C

**2.** In Example 1 she puts u = x + 2 in ∫₀²(x + 2)³dx. The limits become
A. 2 to 4
B. 0 to 2
C. −2 to 0
D. 2 to 6

**3.** ∫2x·e^(x²)dx =
A. x²·e^(x²) + C
B. e^(x²) + C
C. 2e^(x²) + C
D. e^(x²)/(2x) + C

**4.** ∫x·eˣdx =
A. x·eˣ + eˣ + C
B. (x²/2)eˣ + C
C. x·eˣ + C
D. x·eˣ − eˣ + C

**5.** ∫₀¹ x·eˣ dx =
A. 1
B. e − 1
C. 0
D. e

**6.** ∫x·ln(x)dx =
A. (x²/2)ln(x) + x²/4 + C
B. x·ln(x) − x + C
C. (x²/2)·(1/x) + C
D. (x²/2)ln(x) − x²/4 + C

**7.** ∫3x²sin(x)dx =
A. 3x²cos(x) + 6(x·sin(x) + cos(x)) + C
B. −3x²cos(x) + 6(x·sin(x) + cos(x)) + C
C. −3x²cos(x) − 6x·sin(x) + C
D. −x³cos(x) + C

**8.** For ∫√(1 − x²)dx she substitutes
A. u = 1 − x²
B. x = cos(u)
C. x = sin(u), dx = cos(u)du
D. x = tan(u), dx = sec²(u)du

**9.** ∫cos²(u)du =
A. cos³(u)/3 + C
B. sin²(u)/2 + C
C. u/2 − sin(2u)/4 + C
D. u/2 + sin(2u)/4 + C

**10.** Her first move on ∫√(4 − 9x²)dx is to rewrite the integrand as
A. 2√(1 − (3x/2)²)
B. 4√(1 − (3x/2)²)
C. 2√(1 − (9x/4)²)
D. √4 − √(9x²)

**11.** Clearing 1/(x(x + 3)) = A/x + B/(x + 3) gives 1 = A(x + 3) + B(x). Then
A. A = 3, B = −3
B. A = 1, B = −1
C. A = 1/3, B = −1/3
D. A = 1/3, B = 1/3

**12.** ∫[(5x + 7)/((x − 1)(x + 3))]dx =
A. 2ln(x − 1) + 3ln(x + 3) + C
B. 3ln(x − 1) + 2ln(x + 3) + C
C. 3ln(x − 1) − 2ln(x + 3) + C
D. 5ln(x − 1) + 7ln(x + 3) + C

## Short answer

**13.** Slide 8 ends the working for ∫2x·e^(x²)dx at "eᵘ + C". Say what is missing, give the complete answer, and explain why Example 1 on slide 7 was allowed to finish in u when this one is not.

**14.** Work ∫3x²sin(x)dx in full, as she does across slides 11 and 12. Name the source of every minus sign that appears.

**15.** Evaluate the fourth TASK, ∫[(5x + 7)/((x − 1)(x + 3))]dx, showing the four steps of her partial-fractions method, and verify your A and B by recombining the fractions.

---

## Answers

**1. C.** ∫f′(g(x))·g′(x)dx = f(g(x)) + C — the chain rule read backwards, which is exactly how she describes it. A puts the prime on the wrong side and would be differentiation. B drops the g′(x) factor, which is the whole condition for the method to apply. D invents a product rule for integrals; no such rule exists.

**2. A.** The limits are x-values converted to u-values through u = x + 2: x = 0 gives u = 2, x = 2 gives u = 4. B leaves the old x-limits in place while integrating in u, which is the standard fatal error. C converts by subtracting 2 instead of adding. D applies u = x + 2 to the upper limit only in a doubled form.

**3. B.** u = x², du = 2x dx, so the integral is ∫eᵘdu = eᵘ + C = e^(x²) + C. A multiplies by u instead of leaving eᵘ alone. C keeps a 2 that was already consumed by du = 2x dx. D divides by 2x, treating the substitution as though du were dx.

**4. D.** Parts with u = x, dv = eˣdx gives x·eˣ − ∫eˣdx = x·eˣ − eˣ + C. A gets the sign of the ∫v du term wrong; the formula subtracts. B integrates each factor separately, which is never legitimate. C forgets the ∫v du term entirely. Differentiating D returns eˣ + x·eˣ − eˣ = x·eˣ.

**5. A.** Using F(x) = x·eˣ − eˣ: at x = 1, e − e = 0; at x = 0, 0 − 1 = −1. So 0 − (−1) = 1. B evaluates only the x·eˣ term. C stops at F(1) = 0 and forgets to subtract F(0). D forgets the −eˣ term at the upper limit.

**6. D.** u = ln(x), dv = x dx gives (x²/2)ln(x) − ∫(x/2)dx = (x²/2)ln(x) − x²/4 + C. A has the sign of the second term wrong. B is ∫ln(x)dx from her standard-integrals table, not this integral. C multiplies v by du instead of integrating v du.

**7. B.** v = −cos(x) gives −3x²cos(x); the double negative turns − ∫ −cos(x)(6x dx) into +6∫x·cos(x)dx; and ∫x·cos(x)dx = x·sin(x) + cos(x). A loses the minus that comes from v = −cos(x). C loses the +6cos(x) and the sign inside the second bracket. D integrates 3x² and sin(x) separately as though the integral of a product were the product of integrals.

**8. C.** x = sin(u) makes 1 − x² into 1 − sin²(u) = cos²(u), killing the root, and dx = cos(u)du. A is an ordinary substitution, but 1 − x² has derivative −2x, which is not present. B would work up to sign but is not what the slide does, and it forces dx = −sin(u)du. D is the substitution for √(1 + x²), where the sign is a plus.

**9. D.** Use cos²(u) = (1 + cos(2u))/2: the u/2 comes from the 1/2, and (1/2)·sin(2u)/2 = sin(2u)/4 from the cosine, the extra 2 in the denominator coming from the chain rule on 2u. A applies the power rule to a trig function, which is meaningless here. B is the antiderivative of sin(u)cos(u), a different integrand. C flips the sign, as if the identity were (1 − cos(2u))/2, which is sin².

**10. A.** 4 − 9x² = 4(1 − 9x²/4) = 4(1 − (3x/2)²), and √4 = 2 comes outside the root. B takes the 4 out without square-rooting it. C squares the constant incorrectly — (9x/4)² is not 9x²/4. D splits a root over a difference, which is never valid: √(4 − 9x²) is not 2 − 3x.

**11. C.** At x = 0, 1 = 3A so A = 1/3; at x = −3, 1 = −3B so B = −1/3. A inverts both fractions, reading 3A = 1 as A = 3. B forgets to divide by 3 at all. D loses the minus that comes from B(−3) = 1.

**12. B.** 5x + 7 = A(x + 3) + B(x − 1). At x = 1, 12 = 4A so A = 3; at x = −3, −8 = −4B so B = 2. A swaps the two constants, which is what happens if you substitute x = 1 into the wrong bracket. C loses the sign of B, which is positive here. D reads the numerator's coefficients straight off as the partial-fraction constants.

**13.** What is missing is the return to the original variable. u = x² was introduced by you and does not appear in the question, so an answer containing u is not an answer: the complete result is **e^(x²) + C**. Example 1 could stop in u because it was a *definite* integral and she had converted the limits along with the variable (x = 0 → u = 2, x = 2 → u = 4). Once the limits are u-limits, evaluating the antiderivative between them produces a number — 60 — and no variable survives, so there is nothing left to convert back. An indefinite integral has no limits to absorb the substitution, so the variable must be undone explicitly. Check: d/dx e^(x²) = e^(x²)·2x, the original integrand.

**14.** u = 3x², du = 6x dx; dv = sin(x)dx, v = −cos(x). Then
∫3x²sin(x)dx = 3x²(−cos(x)) − ∫ −cos(x)(6x dx) = −3x²cos(x) + 6∫x·cos(x)dx.
For ∫x·cos(x)dx take u = x, dv = cos(x)dx, so du = dx, v = sin(x):
∫x·cos(x)dx = x·sin(x) − ∫sin(x)dx = x·sin(x) + cos(x).
Therefore ∫3x²sin(x)dx = **−3x²cos(x) + 6(x·sin(x) + cos(x)) + C**.
Three minus signs, three different sources: (i) the minus in −3x²cos(x) comes from **v = −cos(x)**, because ∫sin(x)dx = −cos(x); (ii) the minus in the parts formula, −∫v du, meets that same −cos(x) inside the integral, and the two cancel to give **+6∫x·cos(x)dx**; (iii) inside the second application, −∫sin(x)dx again meets ∫sin = −cos and becomes **+cos(x)**. Only one constant C is added, at the very end.

**15.** Step 1, factor: the denominator (x − 1)(x + 3) is already factored. Step 2, split with unknowns: (5x + 7)/((x − 1)(x + 3)) = A/(x − 1) + B/(x + 3). Step 3, clear the denominator: 5x + 7 = A(x + 3) + B(x − 1). Step 4, substitute the roots of the factors: at x = 1, 12 = 4A so A = 3; at x = −3, −8 = −4B so B = 2. Hence
∫[(5x + 7)/((x − 1)(x + 3))]dx = ∫(3/(x − 1) + 2/(x + 3))dx = **3ln(x − 1) + 2ln(x + 3) + C**,
each term being the standard line ∫x⁻¹dx = ln(x) + C. Verification by recombining: 3(x + 3) + 2(x − 1) = 3x + 9 + 2x − 2 = 5x + 7, which is the original numerator, so A = 3 and B = 2 are right. (Her deck writes ln without absolute-value bars; the standard form is ln|x − 1| and ln|x + 3|.)
