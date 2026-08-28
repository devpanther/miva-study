# MTH_102 — Week 7 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 8, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** ∫(x² − 3/x⁴ + 4)dx =
a) x³/3 + 1/x³ + 4x + C   b) x³/3 − 1/x³ + 4x + C   c) x³/3 + 12/x⁵ + 4x + C   d) x³/3 + 1/x³ + 4 + C

**2.** ∫(5/x + e^{2x})dx =
a) 5 ln|x| + 2e^{2x} + C   b) 5 ln|x| + e^{2x}/2 + C   c) −5/x² + e^{2x}/2 + C   d) 5 ln|x| + e^{2x} + C

**3.** ∫√x(x − 1)dx =
a) (2/3)x^{3/2}(x²/2 − x) + C
b) (5/2)x^{5/2} − (3/2)x^{3/2} + C
c) (2/5)x^{5/2} − (2/3)x^{3/2} + C
d) (2/5)x^{5/2} + (2/3)x^{3/2} + C

**4.** ∫_{−1}^{1}(x³ + x)dx =
a) 3/4   b) 0   c) 3/2   d) 1

**5.** ∫sin 3x dx =
a) −(cos 3x)/3 + C   b) −3 cos 3x + C   c) (cos 3x)/3 + C   d) −cos 3x + C

**6.** ∫dx/(2x + 5) =
a) ln|2x + 5| + C   b) 2 ln|2x + 5| + C   c) (1/2)ln|2x + 5| + C   d) −1/(2x + 5)² + C

**7.** ∫_1^2 [2x/(x² + 1)]dx =
a) ln 3   b) ln 5   c) (1/2)ln(5/2)   d) ln(5/2)

**8.** The area enclosed between the curve y = 4 − x² and the x-axis is:
a) 16/3   b) 32/3   c) 16   d) 0

**9.** If ∫_0^3 f(x)dx = 8 and ∫_0^3 g(x)dx = −2, then ∫_0^3 [2f(x) − 3g(x)]dx =
a) 10   b) 14   c) 22   d) −22

**10.** Which pair of functions are antiderivatives of the **same** function?
a) eˣ and e^{−x}   b) x³ and 3x²   c) ln x and 1/x   d) sin²x and −cos²x

**11.** A particle moves with velocity v = 3t² − 12t m/s. Its displacement between t = 0 and t = 3 seconds is:
a) −81 m   b) −27 m   c) −9 m   d) 27 m

**12.** d/dx[∫_1^x (t³ + 1)dt] =
a) 3x²   b) x⁴/4 + x − 5/4   c) x³ + 1   d) 0

## Section B — Short answer (3)

**13.** A curve has gradient dy/dx = 4x − 3/x² at every point and passes through (1, 2). Find its equation, and explain in one sentence what role the point plays that the gradient function alone cannot.

**14.** Find the total area enclosed between the curve y = x² − 3x, the x-axis and the lines x = 0 and x = 4. State also the value of ∫_0^4 (x² − 3x)dx and explain, in terms of what the definite integral measures, why the two numbers differ.

**15.** Evaluate ∫_1^e dx/x, explaining why the power rule cannot be used here and what replaces it. Then evaluate ∫_{−e}^{−1} dx/x and say what feature of the antiderivative makes that second integral possible to write down at all.

## Answers

1. **a** — *Power rule after rewriting, with the sign that a negative exponent supplies*: −3x⁻⁴ integrates to −3·x⁻³/(−3) = x⁻³ = 1/x³, and ∫4 dx = 4x. (b) loses the sign, forgetting that dividing by −3 flips it; (c) differentiates the middle term instead of integrating it; (d) integrates the constant 4 as 4 rather than 4x, treating it as though it were already an antiderivative.
2. **b** — *The n = −1 case gives a logarithm; e^{kx} is divided by k*: 5/x → 5 ln|x| and e^{2x} → e^{2x}/2. (a) multiplies by the inner derivative, which is the differentiation rule; (d) forgets the factor entirely, treating e^{2x} like eˣ; (c) differentiates 5/x rather than integrating it.
3. **c** — *Expand before integrating; there is no product rule for integration*: √x(x − 1) = x^{3/2} − x^{1/2}, giving (2/5)x^{5/2} − (2/3)x^{3/2}. (a) integrates each factor separately and multiplies the results, which is not a valid rule; (b) multiplies by the new exponent instead of dividing by it; (d) drops the minus sign carried through from the bracket.
4. **b** — *Definite integral of an odd function over a symmetric interval — the two signed pieces cancel*: [x⁴/4 + x²/2]_{−1}^{1} = (1/4 + 1/2) − (1/4 + 1/2) = 0. (a) substitutes the upper limit only; (c) reports the total area, 3/4 + 3/4, when the question asked for the integral; (d) mishandles the even powers at x = −1, taking (−1)⁴ or (−1)² as negative.
5. **a** — *Integrating a linear inner function divides by the inner derivative, and sin integrates to −cos*: ∫sin 3x dx = −(cos 3x)/3. (b) multiplies by 3 rather than dividing; (d) drops the factor of 3 altogether; (c) keeps the factor but loses the minus sign, i.e. integrates sin as though it were cos.
6. **c** — *∫dx/(ax + b) = (1/a)ln|ax + b|*: the inner derivative is 2, so the answer carries a factor 1/2. (a) omits it; (b) multiplies by 2 instead of dividing; (d) treats 1/(2x + 5) as a power to be differentiated rather than as the logarithm case.
7. **d** — *Recognise the integrand as u′/u, so the antiderivative is ln|u|*: [ln(x² + 1)]_1^2 = ln 5 − ln 2 = ln(5/2). (a) subtracts the arguments instead of dividing them — ln 5 − ln 2 is ln(5/2), not ln 3; (b) ignores the lower limit; (c) inserts a spurious 1/2, as though the 2x in the numerator needed dividing out when in fact it is exactly the derivative required.
8. **b** — *Area between the curve and the axis, taken between the roots*: 4 − x² = 0 at x = ±2, and [4x − x³/3]_{−2}^{2} = (8 − 8/3) − (−8 + 8/3) = 32/3. (a) integrates only from 0 to 2, taking half the region; (c) drops the x³/3 term; (d) assumes the symmetry makes the two halves cancel — but both halves lie **above** the axis here, so they add.
9. **c** — *Linearity of the definite integral: constants come out, sums and differences split*: 2(8) − 3(−2) = 16 + 6 = 22. (a) mishandles the double negative, computing 16 − 6; (b) forgets the factor 2 on f; (d) attaches the minus sign to the whole expression instead of only to the g-term.
10. **d** — *Two functions with the same derivative differ by a constant*: d/dx(sin²x) = 2 sin x cos x and d/dx(−cos²x) = 2 sin x cos x; consistently, sin²x − (−cos²x) = 1, a constant. (b), (c) pair a function with its own **derivative**, not with a fellow antiderivative; (a) pairs two functions whose derivatives are eˣ and −e^{−x}, which are not equal and do not even have the same sign.
11. **b** — *Displacement is the integral of velocity: ∫_0^3 v dt = s(3) − s(0)*: [t³ − 6t²]_0^3 = 27 − 54 = −27 m. (d) gives the **distance** travelled (or simply drops the sign); since v = 3t(t − 4) ≤ 0 throughout [0, 3] the particle moves steadily backwards, so the displacement must be negative; (a) integrates −12t as −12t², forgetting to divide by the new power; (c) substitutes into v rather than into its antiderivative, v(3) − v(0) = −9.
12. **c** — *Fundamental Theorem of Calculus, Part 1: differentiating an accumulation returns the integrand*: with the variable as the upper limit, d/dx∫_1^x f(t)dt = f(x) = x³ + 1. (b) evaluates the integral correctly but then forgets to differentiate; (a) differentiates the integrand instead of recognising that integration and differentiation cancel; (d) is the answer when **both** limits are constants, which is not the case here.
13. **y = 2x² + 3/x − 3.** Integrate: dy/dx = 4x − 3x⁻², so y = 2x² − 3·x⁻¹/(−1) + C = 2x² + 3/x + C (note the two minus signs producing +3/x). Substituting the point (1, 2): 2 + 3 + C = 2, so C = −3. The gradient function fixes only the **shape** of the curve — every member of the family 2x² + 3/x + C has that gradient, since a constant differentiates to 0 — and the point selects which vertical translate of that shape is the curve in question. — *Indefinite integration gives a family; a boundary condition picks one member.*
14. **Total area = 19/3; ∫_0^4 (x² − 3x)dx = −8/3.** The curve y = x(x − 3) crosses the axis at x = 0 and x = 3, so split there. With F(x) = x³/3 − 3x²/2: F(0) = 0, F(3) = 9 − 27/2 = −9/2, F(4) = 64/3 − 24 = −8/3. So ∫_0^3 = −9/2 (the curve is below the axis) and ∫_3^4 = −8/3 + 9/2 = 11/6 (above). Total area = 9/2 + 11/6 = 19/3; the plain integral over [0, 4] is −9/2 + 11/6 = −8/3. They differ because a definite integral measures **net signed** area, counting the sub-axis piece negatively, whereas "the area enclosed" counts every piece positively; the two agree only when the curve keeps one sign throughout. — *Signed area vs total area; split at the zeros of the integrand.*
15. **∫_1^e dx/x = 1 and ∫_{−e}^{−1} dx/x = −1.** The power rule ∫xⁿdx = x^{n+1}/(n+1) requires n + 1 ≠ 0, and here n = −1 would give x⁰/0 — a division by zero, so the rule has nothing to say; what replaces it is d/dx(ln|x|) = 1/x, giving ∫dx/x = ln|x| + C. Then [ln|x|]_1^e = ln e − ln 1 = 1 − 0 = 1, and [ln|x|]_{−e}^{−1} = ln 1 − ln e = 0 − 1 = −1. The second integral is writable only because of the **modulus**: on the interval [−e, −1] the integrand 1/x is perfectly well defined (and negative), but ln x is not defined for negative x; ln|x| = ln(−x) there, and its derivative is (−1)/(−x) = 1/x, the correct integrand. The negative value is the signed area of a region lying below the axis. — *The n = −1 exception, and why ln|x| carries the modulus.*
