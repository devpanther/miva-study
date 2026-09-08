# Thursday — MTH_102 nightly check

*Problems-only session on Week 10.*
*12 questions, straight after the hour. Score out of 12.*

**1.** Find the area between the curve y = x² − 3x and the x-axis from x = 0 to x = 4.
A. 19/3
B. 9/2
C. 11/6
D. 8/3

**2.** Find the area of the region enclosed by the line y = x + 4 and the parabola y = x² − 2x.
A. 56/3
B. −125/6
C. 125/6
D. 33/2

**3.** Find the area of the region enclosed by the parabolas y = x² and y = 8 − x².
A. 32/3
B. 64/3
C. 80/3
D. −64/3

**4.** Find the total area between the curves y = x³ and y = x from x = 0 to x = 2.
A. 9/4
B. 2
C. 1/4
D. 5/2

**5.** Find the area between the curves y = cos x and y = 3 − cos x from x = 0 to x = π.
A. 3π − 4
B. 6π
C. 3π
D. −3π

**6.** The area between the curve y = x² and the x-axis from x = 0 to x = a (with a > 0) is 9 square units. Find a.
A. a = 3
B. a = 27
C. a = ∛9
D. a = 3√2

**7.** Find the area between the curve y = x² − 2x − 8 and the x-axis from x = −1 to x = 3.
A. 52/3
B. 92/3
C. −92/3
D. 24

**8.** Two curves y = f(x) and y = g(x) cross once at x = c inside [a, b]. A₁ = ∫ₐᶜ(f(x) − g(x))dx > 0 and A₂ = ∫ᶜᵇ(g(x) − f(x))dx > 0. What is the single integral ∫ₐᵇ(f(x) − g(x))dx equal to?
A. A₁ + A₂
B. 0
C. |A₁ − A₂|
D. A₁ − A₂

**9.** Find the total area between the curves y = sin x and y = cos x from x = 0 to x = π.
A. √2 − 1
B. 1 + √2
C. 2√2
D. −2

**10.** Find the total area of the region enclosed by the curve y = x³ and the line y = 4x.
A. 4
B. 0
C. 16
D. 8

**11.** Find the area of the region enclosed by the curve y = x³ − 6x² + 9x and the x-axis.
A. 189/4
B. 27/4
C. 243/4
D. −27/4

**12.** Both y = f(x) and y = g(x) cross the x-axis inside [a, b], but f(x) ≥ g(x) throughout [a, b]. Which expression gives the area between the two curves?
A. ∫ₐᵇ(f(x) − g(x))dx, in one piece
B. ∫ₐᵇ|f(x)|dx + ∫ₐᵇ|g(x)|dx
C. The interval split at every root of f and of g, with the pieces added
D. ∫(f(x) − g(x))dx over only the part of [a, b] where both curves are above the axis

---

## Answers

**1. A** — *Area against the axis with a split at a root.* x² − 3x = x(x − 3) is zero at x = 3, inside [0, 4]; f ≤ 0 on [0, 3] and f ≥ 0 on [3, 4]. With F(x) = x³/3 − 3x²/2: |F(3) − F(0)| = |9 − 27/2| = 9/2 and F(4) − F(3) = (64/3 − 24) − (−9/2) = −8/3 + 9/2 = 11/6. A = 9/2 + 11/6 = 27/6 + 11/6 = 38/6 = 19/3 square units.

9/2 is the piece below the axis only; 11/6 is the piece above only; 8/3 is the magnitude of the unsplit integral ∫₀⁴(x² − 3x)dx = −8/3, in which the pieces cancel.

**2. C** — *Area enclosed by a line and a parabola.* Limits: x + 4 = x² − 2x gives x² − 3x − 4 = (x − 4)(x + 1) = 0, so x = −1 and x = 4. At x = 0 the line gives 4 and the parabola 0, so the line is on top. A = ∫₋₁⁴[(x + 4) − (x² − 2x)]dx = ∫₋₁⁴(3x + 4 − x²)dx = [3x²/2 + 4x − x³/3]₋₁⁴ = 56/3 − (−13/6) = 112/6 + 13/6 = 125/6 square units.

56/3 is the value at the upper limit alone; −125/6 subtracts parabola minus line, the wrong order; 33/2 is 56/3 − 13/6, from failing to double the minus when subtracting the negative lower-limit value.

**3. B** — *Area enclosed by two parabolas.* Limits: x² = 8 − x² gives x² = 4, so x = −2 and x = 2. At x = 0, 8 − x² = 8 is above x² = 0, so A = ∫₋₂²[(8 − x²) − x²]dx = ∫₋₂²(8 − 2x²)dx = [8x − 2x³/3]₋₂² = (16 − 16/3) − (−16 + 16/3) = 32 − 32/3 = 64/3 square units.

32/3 integrates from 0 to 2 only and forgets the left half; 80/3 is ∫₋₂²(8 − x²)dx, the area under the top curve with the lower curve never subtracted; −64/3 subtracts in the wrong order.

**4. D** — *Area between curves that cross inside the interval.* x³ = x gives x(x² − 1) = 0, so the curves cross at x = 1 inside [0, 2]. On [0, 1] the line is on top (at x = 1/2: 1/2 > 1/8); on [1, 2] the cubic is on top (at x = 2: 8 > 2). A₁ = ∫₀¹(x − x³)dx = 1/2 − 1/4 = 1/4 and A₂ = ∫₁²(x³ − x)dx = (4 − 2) − (1/4 − 1/2) = 9/4. A = 1/4 + 9/4 = 10/4 = 5/2 square units.

9/4 is the second piece only; 2 is the magnitude of the single integral ∫₀²(x − x³)dx = 2 − 4 = −2, where the pieces cancel; 1/4 is the first piece only.

**5. C** — *Area between trigonometric curves without a crossing.* Check for crossings: cos x = 3 − cos x gives cos x = 3/2, impossible, so the curves never meet and one integral suffices. At x = 0: 3 − cos 0 = 2 > cos 0 = 1, so y = 3 − cos x is on top throughout. A = ∫₀^π[(3 − cos x) − cos x]dx = ∫₀^π(3 − 2cos x)dx = [3x − 2sin x]₀^π = (3π − 0) − (0 − 0) = 3π square units.

3π − 4 integrates cos x to −cos x (the antiderivative of sin x), giving [3x + 2cos x]₀^π = (3π − 2) − 2; 6π integrates over [0, 2π] instead of the given [0, π]; −3π subtracts in the wrong order.

**6. A** — *Finding a limit from a given area.* x² ≥ 0, so A = ∫₀ᵃx²dx = [x³/3]₀ᵃ = a³/3. Set a³/3 = 9, so a³ = 27 and a = 3. Check: ∫₀³x²dx = 27/3 = 9.

a = 27 stops at a³ = 27 without taking the cube root; a = ∛9 forgets to multiply by 3 and solves a³ = 9; a = 3√2 integrates x instead of x², solving a²/2 = 9.

**7. B** — *Area below the axis on an interval with a negative lower limit.* Roots: x² − 2x − 8 = (x − 4)(x + 2) = 0 gives x = −2 and x = 4, both outside [−1, 3], so f does not change sign there; f(0) = −8 < 0, so the curve is below the axis on the whole interval and A = |∫₋₁³(x² − 2x − 8)dx|. With F(x) = x³/3 − x² − 8x: F(3) = 9 − 9 − 24 = −24 and F(−1) = −1/3 − 1 + 8 = 20/3, so the integral is −24 − 20/3 = −92/3 and A = 92/3 square units.

52/3 evaluates F(−1) with the wrong sign, giving −24 + 20/3; −92/3 forgets the modulus and reports a negative area; 24 is the upper-limit value alone.

**8. D** — *What a single integral across a crossing computes.* Integrals add over adjacent intervals: ∫ₐᵇ(f − g)dx = ∫ₐᶜ(f − g)dx + ∫ᶜᵇ(f − g)dx = A₁ + (−A₂) = A₁ − A₂, because on [c, b] the integrand f − g is the negative of g − f. The true area is A₁ + A₂, so the single integral undercounts by 2A₂.

A₁ + A₂ is the area, not the single integral; 0 happens only in the special case A₁ = A₂ (as for sin x and cos x on [0, π/2]); |A₁ − A₂| is the modulus of the single integral, which still is not the area.

**9. C** — *Area between sine and cosine across a crossing.* They cross where tan x = 1, that is x = π/4. On [0, π/4] cosine is on top; on [π/4, π] sine is. A₁ = ∫₀^(π/4)(cos x − sin x)dx = √2 − 1 and A₂ = ∫_(π/4)^π(sin x − cos x)dx = 1 + √2, so the total area is 2√2 square units.

√2 − 1 and 1 + √2 are single pieces; −2 is the value of one integral ∫₀^π(cos x − sin x)dx taken straight across the crossing, and a negative number cannot be an area.

**10. D** — *Area enclosed by a cubic and a line through the origin.* Intersections: x³ = 4x gives x(x − 2)(x + 2) = 0, so x = −2, 0, 2, and the curves cross at 0, so split there. On [−2, 0] the cubic is on top: ∫₋₂⁰(x³ − 4x)dx = 4. On [0, 2] the line is on top: ∫₀²(4x − x³)dx = 4. Total 8 square units.

4 is one lobe; 0 comes from a single integral across the crossing, where the two lobes cancel; 16 doubles the total instead of the single lobe.

**11. B** — *Area between a cubic and the x-axis with a repeated root.* Factorise: x³ − 6x² + 9x = x(x − 3)², so the curve meets the axis at x = 0 and at the double root x = 3, where it touches without crossing. Test x = 1: 4 > 0, so the region on [0, 3] is above the axis. A = [x⁴/4 − 2x³ + 9x²/2]₀³ = 81/4 − 54 + 81/2 = 27/4 square units.

189/4 writes ∫9x dx as 9x² without halving; 243/4 drops the −6x² term; −27/4 has a sign error in the evaluation, and an area cannot be negative.

**12. A** — *When a split is needed for two curves.* The height of a vertical strip between the curves is f(x) − g(x), a difference of y-values, and it stays non-negative across the whole interval because f is on top throughout. Where either curve meets the x-axis is irrelevant, since the axis is not a boundary of this region, so one integral does it. A split is needed only where f(x) = g(x) inside (a, b), because there the integrand changes sign.

The second option measures areas against the axis, not between the curves; the third splits at the wrong points; the fourth throws away part of the region.
