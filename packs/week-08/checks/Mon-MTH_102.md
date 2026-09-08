# Monday — MTH_102 nightly check

*Conceptual session on Week 8 integration techniques, exactly as she builds them.*
*12 questions, straight after the hour. Score out of 12.*

**1.** Using the table of standard integrals, find ∫(sec²(x) + 1/x) dx.
A. tan(x) − 1/x² + C
B. tan(x) + ln(x) + C
C. sec(x) + ln(x) + C
D. sec³(x)/3 + ln(x) + C

**2.** Find ∫cos(3x) dx.
A. 3sin(3x) + C
B. −sin(3x)/3 + C
C. sin(3x) + C
D. sin(3x)/3 + C

**3.** Using cos²(u) = (1 + cos(2u))/2, find ∫cos²(u) du.
A. u/2 + sin(2u)/4 + C
B. cos³(u)/3 + C
C. u/2 − sin(2u)/4 + C
D. sin²(u)/2 + C

**4.** Find ∫3x²·e^(x³) dx.
A. 3x²·e^(x³) + C
B. eᵘ + C
C. x³·e^(x³) + C
D. e^(x³) + C

**5.** For ∫x²·eˣ dx you take u = x² and dv = eˣ dx. Which line correctly applies ∫u dv = uv − ∫v du?
A. x²eˣ + ∫2x·eˣ dx
B. x²eˣ − ∫2x·eˣ dx
C. x²eˣ − ∫x²·eˣ dx
D. 2x·eˣ − ∫x²·eˣ dx

**6.** Find ∫x·cos(x) dx by parts.
A. x·sin(x) − cos(x) + C
B. (x²/2)·sin(x) + C
C. x·sin(x) + cos(x) + C
D. −x·sin(x) + cos(x) + C

**7.** Before a trigonometric substitution, √(16 − 9x²) is rewritten in the form a√(1 − (bx)²). Which is correct?
A. 4√(1 − (3x/4)²)
B. 16√(1 − (3x/4)²)
C. 4√(1 − (9x/16)²)
D. 4 − 3x

**8.** Which of these integrands is the one to attack with partial fractions?
A. x·eˣ
B. √(1 − x²)
C. (3x + 1)/((x − 1)(x + 2))
D. 2x·e^(x²)

**9.** Write 1/((x − 1)(x + 2)) as A/(x − 1) + B/(x + 2), and hence find ∫1/((x − 1)(x + 2)) dx.
A. (1/3)ln|x − 1| − (1/3)ln|x + 2| + C
B. (1/3)ln|x − 1| + (1/3)ln|x + 2| + C
C. 3ln|x − 1| − 3ln|x + 2| + C
D. ln|x − 1| − ln|x + 2| + C

**10.** Evaluate ∫₀¹ (x + 1)⁵ dx using the substitution u = x + 1, converting the limits to u.
A. 1/6
B. 21/2
C. 32/3
D. 63/5

**11.** The table of standard integrals gives ∫ln(x) dx = x·ln(x) − x + C. Differentiate x·ln(x) − x to check that line.
A. ln(x) + 1
B. 1/x − 1
C. ln(x)
D. ln(x) − 1

**12.** With u = x + 2, ∫₀² (x + 2)³ dx can be finished as (1/4)u⁴|₂⁴ = 60, but ∫2x·e^(x²) dx with u = x² must not be left as eᵘ + C. What is the difference?
A. The limits were converted to u, so the definite integral is a number; the indefinite one must return to x
B. Definite integrals never need the substitution undone, while indefinite ones only need + C added
C. u = x + 2 is linear, so it may be left; u = x² is not linear and may not
D. Both may be left in u; the second is written back only for tidiness

---

## Answers

**1. B** — *Using the table of standard integrals.* Two table lines: ∫sec²(x) dx = tan(x) + C and ∫x⁻¹ dx = ln(x) + C. Add them: tan(x) + ln(x) + C. Check: d/dx tan(x) = sec²(x) and d/dx ln(x) = 1/x.

tan(x) − 1/x² differentiates 1/x instead of integrating it; sec(x) + ln(x) confuses the sec² line with the sec·tan line, since ∫sec(x)tan(x) dx = sec(x); sec³(x)/3 applies the power rule to sec²(x), which is not a power of x.

**2. D** — *Substitution with a linear inner function.* Let u = 3x, so du = 3 dx and dx = du/3. Then ∫cos(3x) dx = (1/3)∫cos(u) du = (1/3)sin(u) + C = sin(3x)/3 + C. Check: d/dx [sin(3x)/3] = 3cos(3x)/3 = cos(3x).

3sin(3x) multiplies by 3 instead of dividing, which is what the chain rule does on differentiating, not integrating; −sin(3x)/3 uses the sign of ∫sin, but ∫cos = +sin; sin(3x) forgets the 1/3 from dx = du/3.

**3. A** — *Integrating cos² with the double-angle identity.* ∫cos²(u) du = ∫(1/2 + cos(2u)/2) du = u/2 + (1/2)·sin(2u)/2 + C = u/2 + sin(2u)/4 + C. The extra 2 in the denominator comes from integrating cos(2u), whose inner function 2u has derivative 2.

cos³(u)/3 applies the power rule to a trigonometric function, which is not valid; u/2 − sin(2u)/4 uses the sign of the sin² identity, (1 − cos(2u))/2; sin²(u)/2 is the integral of sin(u)cos(u), a different integrand.

**4. D** — *Substitution where the derivative of the inner function is present.* The exponent is x³, so let u = x³; then du = 3x² dx, which is exactly the other factor. The integral becomes ∫eᵘ du = eᵘ + C, and setting back u = x³ gives e^(x³) + C. Check: d/dx e^(x³) = e^(x³)·3x².

3x²·e^(x³) treats eˣ as unchanged by integration and ignores that the 3x² was absorbed into du; eᵘ + C is not set back to x, and u was your own invention; x³·e^(x³) multiplies by the inner function instead of leaving eᵘ alone.

**5. B** — *Setting up integration by parts.* From u = x² comes du = 2x dx; from dv = eˣ dx comes v = ∫eˣ dx = eˣ. Then uv − ∫v du = x²eˣ − ∫eˣ·2x dx = x²eˣ − ∫2x·eˣ dx. The power of x has dropped from 2 to 1, which is what makes the choice productive.

The + version has the sign of the formula wrong; x²eˣ − ∫x²·eˣ dx uses u in place of du and goes nowhere; 2x·eˣ − ∫x²·eˣ dx has u and du swapped in the uv term.

**6. C** — *Integration by parts, one application.* Let u = x, dv = cos(x) dx, so du = dx and v = sin(x). Then ∫x·cos(x) dx = x·sin(x) − ∫sin(x) dx = x·sin(x) − (−cos(x)) + C = x·sin(x) + cos(x) + C. Check: d/dx [x·sin(x) + cos(x)] = sin(x) + x·cos(x) − sin(x) = x·cos(x).

x·sin(x) − cos(x) forgets that ∫sin(x) dx = −cos(x), so the two minus signs should cancel; (x²/2)·sin(x) integrates the two factors separately, which is never valid; −x·sin(x) + cos(x) has the sign of the uv term wrong.

**7. A** — *Normalising a root for trigonometric substitution.* Factor 16 out of the bracket: 16 − 9x² = 16(1 − 9x²/16) = 16(1 − (3x/4)²). Then √16 = 4 comes outside: √(16 − 9x²) = 4√(1 − (3x/4)²). The bracket is now 1 − (something)², ready for 3x/4 = sin(u).

16√(...) takes the 16 outside without square-rooting it; 4√(1 − (9x/16)²) squares wrongly, since (9x/16)² = 81x²/256, not 9x²/16; 4 − 3x splits a root over a difference, which is never valid.

**8. C** — *Choosing the technique from the shape of the integrand.* Partial fractions is for a fraction whose denominator factors into linear pieces: (3x + 1)/((x − 1)(x + 2)) splits into A/(x − 1) + B/(x + 2), and each piece integrates to a logarithm.

x·eˣ is a product of an algebraic and an exponential factor, which is integration by parts; √(1 − x²) needs the trigonometric substitution x = sin(u); 2x·e^(x²) has the derivative of the exponent sitting beside it, which is plain substitution.

**9. A** — *Partial fractions with a constant numerator.* Clear the denominator: 1 = A(x + 2) + B(x − 1). Put x = 1: 1 = 3A, so A = 1/3. Put x = −2: 1 = −3B, so B = −1/3. Integrating term by term gives (1/3)ln|x − 1| − (1/3)ln|x + 2| + C, which may also be written (1/3)ln|(x − 1)/(x + 2)| + C.

The second option loses the sign in B(−3) = 1; the third reads 3A = 1 upside down as A = 3; the fourth ignores the factor 3 in both substitutions.

**10. B** — *Definite integral by substitution with converted limits.* u = x + 1 gives du = dx, and the limits convert: x = 0 gives u = 1, x = 1 gives u = 2. So the integral is ∫₁² u⁵ du = (1/6)u⁶|₁² = (1/6)(64 − 1) = 63/6 = 21/2. Because the limits moved with the variable, the answer is a number and no return to x is needed.

1/6 keeps the old limits 0 and 1 in u; 32/3 evaluates at the upper limit only; 63/5 divides by the old power 5 instead of the new power 6.

**11. C** — *Checking a standard integral by differentiating.* Use the product rule on x·ln(x): d/dx [x·ln(x)] = 1·ln(x) + x·(1/x) = ln(x) + 1. Subtracting the derivative of x gives ln(x) + 1 − 1 = ln(x), which is the integrand, so the table line is correct.

ln(x) + 1 stops before differentiating the −x; 1/x − 1 skips the product rule and differentiates ln(x) alone; ln(x) − 1 subtracts the 1 that the product rule produced instead of adding it.

**12. A** — *When an answer may be left in u.* Converting the limits (x = 0 gives u = 2, x = 2 gives u = 4) turns the definite integral into a number, 60, with no variable left to convert back. An indefinite integral has no limits to absorb the substitution, and u was your own invention, so the answer must be expressed in the original variable: e^(x²) + C.

The second option confuses + C with the return to x; the third invents a rule about linearity; the fourth treats an answer in an undefined letter as acceptable.
