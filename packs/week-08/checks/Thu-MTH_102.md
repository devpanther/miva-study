# Thursday — MTH_102 nightly check

*Problems-only session on Week 8 integration techniques.*
*12 questions, straight after the hour. Score out of 12.*

**1.** Evaluate ∫₀² x·eˣ dx.
A. e² − 1
B. e² + 1
C. e²
D. 2e² + 1

**2.** Find ∫x³·ln(x) dx.
A. (x⁴/4)·ln(x) − x⁴/16 + C
B. (x⁴/4)·ln(x) + x⁴/16 + C
C. (x⁴/4)·ln(x) − x⁴/4 + C
D. (x⁴/4)·(1/x) + C

**3.** Find ∫x²·cos(x) dx.
A. x²·sin(x) − 2x·cos(x) + 2sin(x) + C
B. x²·sin(x) + 2x·cos(x) + C
C. x²·sin(x) + 2x·cos(x) − 2sin(x) + C
D. (x³/3)·sin(x) + C

**4.** Evaluate ∫₀² x·(x² + 1)³ dx.
A. 156
B. 2
C. 78
D. 625/8

**5.** Find ∫(x + 7)/((x − 1)(x + 3)) dx by partial fractions.
A. 2ln(x − 1) + ln(x + 3) + C
B. −ln(x − 1) + 2ln(x + 3) + C
C. ln(x − 1) + 7ln(x + 3) + C
D. 2ln(x − 1) − ln(x + 3) + C

**6.** Evaluate ∫₂³ 1/(x(x + 1)) dx.
A. ln(3/4)
B. ln(8/9)
C. ln(1/2)
D. ln(9/8)

**7.** For ∫√(25 − 4x²) dx you normalise to 5√(1 − (2x/5)²) and set 2x/5 = sin(u). The integral becomes k∫cos²(u) du. Find k.
A. 25/2
B. 2
C. 25
D. 5/2

**8.** Which choice of u and dv makes ∫x·sin(x) dx come out in one application of parts?
A. u = sin(x), dv = x dx
B. u = x, dv = sin(x) dx
C. u = x·sin(x), dv = dx
D. u = 1, dv = x·sin(x) dx

**9.** Find ∫√(9 − 4x²) dx by normalising the root to 3√(1 − (2x/3)²) and substituting 2x/3 = sin(u).
A. (9/2)sin⁻¹(2x/3) + (x/2)√(9 − 4x²) + C
B. (9/4)sin⁻¹(3x/2) + (x/2)√(9 − 4x²) + C
C. (9/4)sin⁻¹(2x/3) − (x/2)√(9 − 4x²) + C
D. (9/4)sin⁻¹(2x/3) + (x/2)√(9 − 4x²) + C

**10.** Evaluate ∫₁ᵉ ln(x) dx.
A. e − 1
B. 0
C. 1
D. −1

**11.** Find ∫x·e^(−x²) dx by substitution.
A. (x²/2)e^(−x²) + C
B. −(1/2)e^(−x²) + C
C. (1/2)e^(−x²) + C
D. −2e^(−x²) + C

**12.** The substitution u = x² works for ∫2x·e^(x²) dx but no substitution works for ∫x·eˣ dx. What is the reason?
A. In x·eˣ the factor x is not the derivative of the exponent x, so no u collapses the integral
B. eˣ has no elementary antiderivative, while e^(x²) does
C. Only powers of x may be substituted, and x² is a power while x is not
D. A product of two functions can never be integrated by substitution

---

## Answers

**1. B** — *Definite integral by parts.* By parts with u = x, dv = eˣ dx: ∫x·eˣ dx = x·eˣ − eˣ. Evaluate: at x = 2, 2e² − e² = e²; at x = 0, 0 − 1 = −1. So the integral is e² − (−1) = e² + 1.

e² − 1 adds the lower-limit value instead of subtracting it; e² forgets the lower limit entirely; 2e² + 1 forgets the −eˣ term at the upper limit.

**2. A** — *Integration by parts with a logarithm.* Take u = ln(x), dv = x³ dx, so du = (1/x) dx and v = x⁴/4. Then ∫x³·ln(x) dx = (x⁴/4)·ln(x) − ∫(x⁴/4)(1/x) dx = (x⁴/4)·ln(x) − (1/4)∫x³ dx = (x⁴/4)·ln(x) − x⁴/16 + C. ln(x) must be u because x³ is easy to integrate and ln(x) is not.

The + x⁴/16 version has the sign of the ∫v du term wrong; − x⁴/4 forgets to divide by 4 again when integrating x³/4; (x⁴/4)·(1/x) multiplies v by du instead of integrating v du.

**3. C** — *Integration by parts applied twice.* First pass, u = x², dv = cos(x) dx: x²·sin(x) − ∫2x·sin(x) dx. Second pass on ∫2x·sin(x) dx, u = 2x, dv = sin(x) dx, v = −cos(x): −2x·cos(x) + ∫2cos(x) dx = −2x·cos(x) + 2sin(x). Combine: x²·sin(x) − (−2x·cos(x) + 2sin(x)) = x²·sin(x) + 2x·cos(x) − 2sin(x) + C.

The − 2x·cos(x) + 2sin(x) version forgets the minus in front of the second-pass result; x²·sin(x) + 2x·cos(x) stops after the second uv term and drops the last integral; (x³/3)·sin(x) integrates the two factors separately.

**4. C** — *Substitution in a definite integral with converted limits.* Let u = x² + 1, so du = 2x dx and x dx = du/2. Limits: x = 0 gives u = 1, x = 2 gives u = 5. The integral becomes (1/2)∫₁⁵ u³ du = (1/2)·(u⁴/4)|₁⁵ = (1/8)(625 − 1) = 624/8 = 78.

156 forgets the 1/2 from x dx = du/2; 2 keeps the old x-limits 0 and 2 after switching to u; 625/8 forgets the lower limit.

**5. D** — *Partial fractions with a linear numerator.* Write (x + 7)/((x − 1)(x + 3)) = A/(x − 1) + B/(x + 3) and clear: x + 7 = A(x + 3) + B(x − 1). At x = 1: 8 = 4A, so A = 2. At x = −3: 4 = −4B, so B = −1. Hence the integral is 2ln(x − 1) − ln(x + 3) + C. Check: 2(x + 3) − (x − 1) = x + 7.

2ln(x − 1) + ln(x + 3) loses the sign of B from B(−4) = 4; −ln(x − 1) + 2ln(x + 3) has A and B swapped; ln(x − 1) + 7ln(x + 3) reads the numerator's coefficients off as A and B.

**6. D** — *Definite integral by partial fractions.* 1/(x(x + 1)) = A/x + B/(x + 1) gives 1 = A(x + 1) + Bx; x = 0 gives A = 1, x = −1 gives B = −1. So the antiderivative is ln(x) − ln(x + 1). Evaluate: (ln 3 − ln 4) − (ln 2 − ln 3) = 2ln 3 − ln 4 − ln 2 = ln(9/8).

ln(3/4) is the upper limit alone, forgetting to subtract the lower; ln(8/9) subtracts in the wrong order; ln(1/2) adds the lower-limit value instead of subtracting it, giving ln 2 − ln 4.

**7. A** — *Constant factor produced by a trigonometric substitution.* From 2x/5 = sin(u), differentiate: (2/5) dx = cos(u) du, so dx = (5/2)cos(u) du. The root becomes 5√(1 − sin²(u)) = 5cos(u). So the integrand is 5cos(u)·(5/2)cos(u) du = (25/2)cos²(u) du, and k = 25/2.

2 uses dx = (2/5)cos(u) du, forgetting to take the reciprocal of 2/5; 25 multiplies 5 by 5 and drops the 1/2 in dx; 5/2 is the dx factor alone, forgetting the 5 that came out of the root.

**8. B** — *Choosing u and dv in integration by parts.* Choose u so that du is simpler and dv so that v is no worse: u = x gives du = dx, removing the x, and dv = sin(x) dx gives v = −cos(x). The leftover integral ∫−cos(x) dx is a table line, so one pass finishes it.

u = sin(x), dv = x dx gives v = x²/2 and the leftover ∫(x²/2)cos(x) dx, where the power of x has gone up; u = x·sin(x), dv = dx leaves ∫x·(sin(x) + x·cos(x)) dx, worse than the start; u = 1, dv = x·sin(x) dx requires integrating the original problem to find v.

**9. D** — *Trigonometric substitution with a normalised root.* With 2x/3 = sin(u), dx = (3/2)cos(u) du and the root becomes 3cos(u), so the integral is (9/2)∫cos²(u) du = (9/2)(u/2 + sin(2u)/4) + C. Set back with u = sin⁻¹(2x/3) and sin(2u) = 2 sin(u) cos(u) = 4x√(9 − 4x²)/9, giving (9/4)sin⁻¹(2x/3) + (x/2)√(9 − 4x²) + C.

9/2 uses dx = 3cos(u) du and doubles the first term; sin⁻¹(3x/2) inverts the ratio inside the arcsine; the minus sign comes from mishandling the double-angle term.

**10. C** — *Definite integral of a logarithm.* An antiderivative is x·ln(x) − x. At x = e: e·ln(e) − e = e − e = 0. At x = 1: 1·ln(1) − 1 = 0 − 1 = −1. So the integral is 0 − (−1) = 1.

e − 1 uses only x·ln(x) and drops the −x; 0 comes from taking ln(1) = 1 at the lower limit; −1 forgets to subtract the lower value and reports it instead.

**11. B** — *Substitution when du needs a constant adjusted.* Let u = −x², so du = −2x dx and the factor x dx is replaced by −du/2. Then the integral is −(1/2)∫eᵘ du = −(1/2)e^(−x²) + C. Check: d/dx [−(1/2)e^(−x²)] = −(1/2)e^(−x²)(−2x) = x·e^(−x²).

(1/2)e^(−x²) + C loses the minus sign from du; −2e^(−x²) + C multiplies by −2 instead of dividing; (x²/2)e^(−x²) + C integrates the x factor on its own, which the product forbids.

**12. A** — *Recognising when substitution fails and parts is needed.* Substitution undoes the chain rule: it needs ∫f′(g(x))·g′(x) dx, so the derivative of the inner function must already sit there as a factor. In 2x·e^(x²) the exponent is x² and its derivative 2x is present. In x·eˣ the exponent is x, whose derivative is 1, and the spare x is not the derivative of anything inside, so parts is required: ∫u dv = uv − ∫v du with u = x and dv = eˣ dx gives x·eˣ − eˣ + C.

eˣ integrates to itself, so the second option is false; the third invents a rule about powers; the fourth is contradicted by 2x·e^(x²) itself.
