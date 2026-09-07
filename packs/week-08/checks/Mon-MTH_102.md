# Monday — MTH_102 nightly check

*Conceptual session on Week 8 integration techniques, exactly as she builds them.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

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

**9. (show your working)** Write 1/((x − 1)(x + 2)) as A/(x − 1) + B/(x + 2), find A and B by substituting the roots, then find ∫1/((x − 1)(x + 2)) dx. Show your working.

**10. (show your working)** Evaluate ∫₀¹ (x + 1)⁵ dx using the substitution u = x + 1. Convert the limits to u and finish in u. Show your working.

**11. (show your working)** The table gives ∫ln(x) dx = x·ln(x) − x + C. Verify this line by differentiating x·ln(x) − x. Show your working.

**12. (show your working)** With u = x + 2, ∫₀² (x + 2)³ dx can be finished as (1/4)u⁴|₂⁴ = 60 without ever returning to x, but ∫2x·e^(x²) dx with u = x² must not be left as eᵘ + C. Explain the difference.

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

**9.** *Partial fractions with a constant numerator.* Clear the denominator: 1 = A(x + 2) + B(x − 1). At x = 1: 1 = 3A, so A = 1/3. At x = −2: 1 = −3B, so B = −1/3. Then ∫1/((x − 1)(x + 2)) dx = ∫(1/3 · 1/(x − 1) − 1/3 · 1/(x + 2)) dx = (1/3)ln(x − 1) − (1/3)ln(x + 2) + C.

Final answer: (1/3)ln(x − 1) − (1/3)ln(x + 2) + C. Also accepted: (1/3)ln((x − 1)/(x + 2)) + C, or with ln|x − 1| and ln|x + 2|. The working must show the cleared equation, the two substitutions x = 1 and x = −2, and A = 1/3, B = −1/3. B = +1/3 (losing the sign from B(−3) = 1) or A = 3 (reading 3A = 1 upside down) is wrong.

**10.** *Definite integral by substitution with converted limits.* u = x + 1 gives du = dx. Convert the limits: x = 0 gives u = 1, x = 1 gives u = 2. So ∫₀¹ (x + 1)⁵ dx = ∫₁² u⁵ du = (1/6)u⁶|₁² = (1/6)(64 − 1) = 63/6 = 21/2. Because the limits were converted, the answer is a number and no return to x is needed.

Final answer: 21/2 (also accepted: 10.5 or 63/6). The working must show the new limits 1 and 2 and the evaluation (1/6)(2⁶ − 1⁶). Keeping the old limits 0 and 1 in u gives (1/6)(1 − 0) = 1/6 and is wrong; expanding (x + 1)⁵ and integrating is accepted if it reaches 21/2.

**11.** *Checking a standard integral by differentiating.* Use the product rule on x·ln(x): d/dx [x·ln(x)] = 1·ln(x) + x·(1/x) = ln(x) + 1. Then d/dx [x·ln(x) − x] = ln(x) + 1 − 1 = ln(x), which is the integrand, so the table line is correct.

A correct answer shows the product rule giving ln(x) + 1, subtracts the derivative of x, and states that the result ln(x) matches the integrand. Getting ln(x) + 1 and stopping (forgetting to differentiate the −x) does not verify the line; writing d/dx ln(x) = 1/x alone is not the check.

**12.** *When an answer may be left in u.* In the definite integral the limits were converted along with the variable (x = 0 gives u = 2, x = 2 gives u = 4), so evaluating the antiderivative between the u-limits produces a number, 60. No variable survives, so there is nothing to convert back. The indefinite integral has no limits to absorb the substitution: u was introduced by you and does not appear in the question, so the answer must be set back to x, giving e^(x²) + C.

A correct answer says that converted limits turn a definite integral into a number, that an indefinite integral must be expressed in the original variable, and states e^(x²) + C as the complete answer.
