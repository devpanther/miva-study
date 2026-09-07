# Monday — MTH_102 nightly check

*Conceptual session on Week 10 area between curves, exactly as the lecturer builds it.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** The area between y = 9 − x² and the x-axis is to be found, and no interval is given. Solve 9 − x² = 0 to find the limits of integration.
A. x = 3 only
B. x = −3 and x = 3
C. x = 0 and x = 9
D. x = −9 and x = 9

**2.** The curve y = x² + 1 lies above the x-axis. Find the area between the curve and the x-axis from x = 1 to x = 2.
A. 10/3
B. 14/3
C. 7/3
D. 3

**3.** f(x) = x² − 4 on [0, 1]. Evaluate f at the test point x = 1/2, and hence write the area between the curve and the x-axis on [0, 1] as an integral.
A. f(1/2) = −15/4, so A = |∫₀¹(x² − 4)dx|
B. f(1/2) = −15/4, so A = ∫₀¹(x² − 4)dx
C. f(1/2) = 15/4, so A = ∫₀¹(x² − 4)dx
D. f(1/2) = −3, so A = |∫₀¹(x² − 4)dx|

**4.** The line y = x + 2 and the parabola y = x² enclose a region. Find the x-values where the two curves meet.
A. x = 1 and x = −2
B. x = 2 only
C. x = −1 and x = 2
D. x = −√2 and x = √2

**5.** y = 6 − x and y = x² meet at x = −3 and x = 2. Using the test point x = 1, write the integrand for the area between the curves on [−3, 2].
A. (6 − x) + x²
B. (6 − x) − x²
C. x² − (6 − x)
D. 6 − x

**6.** On [0, 2] a curve y = f(x) runs below the x-axis, crosses it once at x = 1, then rises above it. ∫₀¹f(x)dx = −2/3 and ∫₁²f(x)dx = 4/3. Find the total area between the curve and the axis on [0, 2].
A. 4/3
B. −2/3
C. 2/3
D. 2

**7.** The graph of y = g(x) on [0, 4] is a straight line from the point (0, 4) down to the point (4, 0). Find the area between this line and the x-axis.
A. 16
B. 4
C. −8
D. 8

**8.** f(x) ≥ g(x) on [a, b], and the whole region between the two curves lies below the x-axis. Which expression gives the area between the curves?
A. |∫ₐᵇ f(x)dx| + |∫ₐᵇ g(x)dx|
B. −∫ₐᵇ (f(x) − g(x))dx
C. ∫ₐᵇ (f(x) − g(x))dx
D. ∫ₐᵇ (g(x) − f(x))dx

**9. (show your working)** Find the area between the curve y = 3x − x² and the x-axis. Show your working.

**10. (show your working)** Find the area between the curves y = x² + 1 and y = x from x = 0 to x = 2. Show your working.

**11. (show your working)** Find the area between y = sin x and the x-axis from x = 0 to x = π. Show your working.

**12. (show your working)** f(x) ≤ 0 for every x in [a, b]. Explain why the area between y = f(x) and the x-axis on [a, b] is |∫ₐᵇf(x)dx| and not ∫ₐᵇf(x)dx, and why that modulus is not enough if f changes sign inside [a, b].

---

## Answers

**1. B** — *Limits of integration from f(x) = 0.* The curve cuts the axis where 9 − x² = 0, so x² = 9 and x = −3 or x = 3. The region is enclosed between these two roots, so the limits are −3 and 3.

x = 3 only forgets the negative square root; x = 0 and x = 9 treats the expression as x(9 − x); x = −9 and x = 9 forgets to take the square root of 9.

**2. A** — *Area under a curve above the x-axis.* f ≥ 0, so A = ∫₁²(x² + 1)dx = [x³/3 + x]₁² = (8/3 + 2) − (1/3 + 1) = 14/3 − 4/3 = 10/3 square units.

14/3 forgets to subtract the value at the lower limit; 7/3 integrates x² alone and drops the + 1; 3 substitutes the limits into x² + 1 itself instead of into its antiderivative.

**3. A** — *Choosing the area formula by a sign test.* f(1/2) = (1/2)² − 4 = 1/4 − 4 = −15/4 < 0, and f has no root inside [0, 1] (its roots are ±2), so f ≤ 0 on the whole interval. Below the axis the integral is negative, so the area is its modulus: A = |∫₀¹(x² − 4)dx| = |1/3 − 4| = 11/3.

The second option keeps the negative integral as the area; the third gets the sign of f(1/2) wrong and so picks the wrong case; the fourth evaluates 2x − 4 instead of x² − 4 at the test point.

**4. C** — *Intersection points of two curves.* Set the curves equal: x + 2 = x², so x² − x − 2 = 0, (x − 2)(x + 1) = 0, giving x = −1 and x = 2. These are the limits of integration for the enclosed region.

x = 1 and x = −2 has the factor signs backwards; x = 2 only drops the negative root; x = ±√2 loses the x term and solves x² = 2.

**5. B** — *Choosing top minus bottom by a test point.* At x = 1: 6 − 1 = 5 and 1² = 1, so the line is on top. The strip height is top minus bottom, (6 − x) − x² = 6 − x − x², which is what is integrated from −3 to 2.

(6 − x) + x² adds the curves instead of subtracting; x² − (6 − x) subtracts in the wrong order and gives a negative result; 6 − x forgets to subtract the lower curve at all.

**6. D** — *Adding areas across an axis crossing.* Split at the crossing and take the modulus of the piece below the axis: A = |−2/3| + 4/3 = 2/3 + 4/3 = 2 square units.

4/3 counts only the piece above the axis; −2/3 is the piece below with no modulus; 2/3 is the single integral ∫₀²f(x)dx = −2/3 + 4/3, in which the two pieces partly cancel.

**7. D** — *Setting up an area from a described graph.* The line has intercept 4 and gradient (0 − 4)/(4 − 0) = −1, so g(x) = 4 − x, which is ≥ 0 on [0, 4]. A = ∫₀⁴(4 − x)dx = [4x − x²/2]₀⁴ = 16 − 8 = 8 square units, which agrees with the triangle formula ½ × 4 × 4.

16 integrates the constant 4 alone and forgets the −x; 4 halves the triangle a second time; −8 integrates x − 4, the line written upside down.

**8. C** — *Area between curves below the x-axis.* The height of a vertical strip is the difference of the two y-values, f(x) − g(x), which is ≥ 0 wherever f is on top, whether or not the y-values themselves are negative. So A = ∫ₐᵇ(f(x) − g(x))dx with no modulus and no sign change. For example f(x) = −x² and g(x) = −4 on [−2, 2] give ∫(4 − x²)dx = 32/3 > 0.

The first option adds two areas against the axis, which is not the region between the curves; the second flips a sign that is already correct and gives a negative number; the fourth subtracts bottom minus top and is also negative.

**9.** *Area between a parabola and the x-axis.* No interval is given, so the limits are the roots: 3x − x² = x(3 − x) = 0 gives x = 0 and x = 3. Test an interior point: f(1) = 3 − 1 = 2 > 0, so the curve is above the axis on [0, 3] and no modulus is needed. A = ∫₀³(3x − x²)dx = [3x²/2 − x³/3]₀³ = (27/2 − 9) − 0 = 9/2.

Final answer: 9/2 square units (also accepted: 4.5). The working must show the roots from f(x) = 0, a sign check, and the evaluated bracket. 27/2 alone forgets the cubic term; −9/2 has the integrand upside down.

**10.** *Area between two curves on a given interval.* Decide which curve is on top with a test point: at x = 1, x² + 1 = 2 and x = 1, so y = x² + 1 is on top (in fact x² + 1 − x = (x − 1/2)² + 3/4 > 0 everywhere, so the curves never cross). A = ∫₀²[(x² + 1) − x]dx = ∫₀²(x² − x + 1)dx = [x³/3 − x²/2 + x]₀² = 8/3 − 2 + 2 = 8/3.

Final answer: 8/3 square units (also accepted: 2.67 or 2⅔). A correct answer names the top curve, integrates top minus bottom over [0, 2] and evaluates at both limits. −8/3 comes from subtracting in the wrong order; 14/3 forgets to subtract the lower curve.

**11.** *Area under a sine curve.* sin x ≥ 0 on [0, π] (test x = π/2: sin(π/2) = 1 > 0), so A = ∫₀^π sin x dx. The antiderivative of sin x is −cos x, so A = [−cos x]₀^π = −cos π − (−cos 0) = −(−1) + 1 = 2.

Final answer: 2 square units. The working must use ∫sin x dx = −cos x, with cos π = −1 and cos 0 = 1. −2 comes from using cos x as the antiderivative, [cos x]₀^π = −1 − 1; 0 comes from taking cos π = 1 instead of −1. Neither is accepted.

**12.** *Why the modulus in the area formula.* When f ≤ 0 every strip contributes a negative amount, so ∫ₐᵇf(x)dx comes out negative (or zero); an area cannot be negative, so the area is the magnitude of the integral, |∫ₐᵇf(x)dx|. If f changes sign at some c inside [a, b], the negative contribution from one side and the positive contribution from the other cancel inside the single integral before any modulus is applied, so |∫ₐᵇf(x)dx| is smaller than the true area (it can even be 0). The remedy is to split at c and add |∫ₐᶜf(x)dx| and |∫ᶜᵇf(x)dx| separately.

A correct answer says the integral is negative below the axis, that the modulus restores a positive area, and that with a sign change the pieces cancel so the split must happen before taking magnitudes.
