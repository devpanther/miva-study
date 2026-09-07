# Thursday — MTH_102 nightly check

*Problems-only session on Week 8 integration techniques.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

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

**9. (show your working)** Find ∫√(9 − 4x²) dx. Normalise the root to 3√(1 − (2x/3)²), substitute 2x/3 = sin(u), integrate cos²(u), and set back to x. Show your working.

**10. (show your working)** Evaluate ∫₁ᵉ ln(x) dx. Show your working.

**11. (show your working)** Find ∫x·e^(−x²) dx by substitution. State u, du, and how the factor x dx is replaced. Show your working.

**12. (show your working)** Explain why ∫x·eˣ dx cannot be done by substitution and needs integration by parts, and state the parts formula you would use.

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

**9.** *Trigonometric substitution with a normalised root.* √(9 − 4x²) = 3√(1 − (2x/3)²). Let 2x/3 = sin(u), so dx = (3/2)cos(u) du and the root becomes 3cos(u). The integral is 3·(3/2)∫cos²(u) du = (9/2)(u/2 + sin(2u)/4) + C = 9u/4 + (9/8)sin(2u) + C. Set back: u = sin⁻¹(2x/3), and sin(2u) = 2sin(u)cos(u) = 2·(2x/3)·(√(9 − 4x²)/3) = 4x√(9 − 4x²)/9, so (9/8)sin(2u) = x√(9 − 4x²)/2.

Final answer: (9/4)sin⁻¹(2x/3) + (x/2)√(9 − 4x²) + C. Also accepted: 9sin⁻¹(2x/3)/4 + x√(9 − 4x²)/2 + C, or the unsimplified 9u/4 + (9/8)sin(2u) + C with u = sin⁻¹(2x/3) stated. The working must show dx = (3/2)cos(u) du, the factor 9/2, and the double-angle identity. Using dx = (2/3)cos(u) du gives the wrong factor 2 and is wrong.

**10.** *Definite integral of a logarithm.* From the table (or parts with u = ln(x), dv = dx), ∫ln(x) dx = x·ln(x) − x. Evaluate: at x = e, e·ln(e) − e = e − e = 0; at x = 1, 1·ln(1) − 1 = 0 − 1 = −1. So ∫₁ᵉ ln(x) dx = 0 − (−1) = 1.

Final answer: 1. The working must state the antiderivative x·ln(x) − x, use ln(e) = 1 and ln(1) = 0, and subtract the lower-limit value −1. Getting −1 (forgetting to subtract) or e − 1 (using only x·ln(x)) is wrong.

**11.** *Substitution when du needs a constant adjusted.* Let u = −x², so du = −2x dx and x dx = −du/2. Then ∫x·e^(−x²) dx = ∫eᵘ·(−1/2) du = −(1/2)eᵘ + C = −(1/2)e^(−x²) + C. Check: d/dx [−(1/2)e^(−x²)] = −(1/2)·e^(−x²)·(−2x) = x·e^(−x²).

Final answer: −(1/2)e^(−x²) + C. Also accepted: −e^(−x²)/2 + C, or the same result reached with u = x² (du = 2x dx, giving −(1/2)e^(−u)). The working must name u, show du and the factor −1/2, and set back to x. Leaving the answer in u, or writing e^(−x²) + C without the −1/2, is wrong.

**12.** *Recognising when substitution fails and parts is needed.* Substitution needs an inner function whose derivative is present as a factor: ∫f′(g(x))·g′(x) dx = f(g(x)) + C. In x·eˣ the only inner function is x itself, whose derivative is 1, and the factor x is not the derivative of anything inside the exponential, so no u makes the integral collapse to ∫f′(u) du. The integrand is a product of two unrelated factors, which is the signal for parts: ∫u dv = uv − ∫v du, with u = x and dv = eˣ dx, giving x·eˣ − eˣ + C.

A correct answer says the derivative of the inner function is not present, states ∫u dv = uv − ∫v du, and chooses u = x, dv = eˣ dx. Contrast with 2x·e^(x²), where 2x is the derivative of the exponent and substitution works.
