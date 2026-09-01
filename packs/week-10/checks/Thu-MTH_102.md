# Thursday — MTH_102 nightly check

*Problems-only session on Week 10.*

*Compute areas between a curve and the x-axis, with limits found from f(x) = 0: ∫₀⁵(5x − x²)dx, and the split case for x² − 1 on [0, 2].*

*Compute areas between two curves, with limits from f(x) = g(x): y = 3 − x with y = x² − 9, and 2 − x with 4 − x².*

*Then across an interior crossing, using A = A₁ + A₂.*

*Includes all three TASKs the lecturer set and never answered: 6x − x² against the axis; y = x² with y = 2 − x² on [0, 2]; and y = cos x with y = 2 − cos x on [0, 2π].*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Example 1: f(x) = 5x − x² cuts the x-axis at x = 0 and x = 5, and f(2) = 6 > 0. Evaluate ∫₀⁵(5x − x²)dx.
A. 125/6
B. 125/2
C. 125/3
D. −125/6

**2.** TASK 1: find the area between the graph of f(x) = 6x − x² and the x-axis.
A. 36
B. 18
C. 72
D. 108

**3.** Example 2: find the area bounded by f(x) = x² − 1, the x-axis and the lines x = 0 and x = 2.
A. 2/3
B. 2
C. 4/3
D. −2/3

**4.** Find the area between the curve y = 4 − x² and the x-axis.
A. 16/3
B. 32/3
C. 16
D. −32/3

**5.** Example 1 of the two-curve section: find the area bounded by y = 3 − x and y = x² − 9.
A. 45/2
B. −73/6
C. 343/6
D. 104/3

**6.** Example 2 of the two-curve section: find the area enclosed by f(x) = 2 − x and g(x) = 4 − x².
A. 10/3
B. 13/6
C. 9/2
D. −9/2

**7.** TASK 2: find the area bounded by y = x² and y = 2 − x² for 0 ≤ x ≤ 2.
A. 4/3
B. −4/3
C. 8/3
D. 4

**8.** TASK 3: find the area bounded by y = cos x and y = 2 − cos x for 0 ≤ x ≤ 2π.
A. 0
B. 2π
C. 8π
D. 4π

**9.** Work TASK 1 in full: find the area between f(x) = 6x − x² and the x-axis. Show where the limits come from, show the interior test, and say why no modulus is needed.
*(short answer)*

**10.** Work TASK 2 in full: find the area bounded by y = x² and y = 2 − x² for 0 ≤ x ≤ 2. Show both pieces, and state what a single integral over [0, 2] would have given.
*(short answer)*

**11.** Work TASK 3 in full: find the area bounded by y = cos x and y = 2 − cos x for 0 ≤ x ≤ 2π. Explain why this one does not need splitting even though it follows two slides that do.
*(short answer)*

**12.** Reproduce Example 1 of the two-curve section in full: y = 3 − x and y = x² − 9. Show the factorisation, the test point, the integrand, and both substitutions written out, including the value at x = −4.
*(short answer)*

## Answers

**1. A** — [5x²/2 − x³/3]₀⁵ = (125/2 − 125/3) − 0 = (375 − 250)/6 = 125/6 ≈ 20.83 square units. Option 2 keeps 5x²/2 = 125/2 and drops the cubic term entirely. Option 3 keeps 125/3 and drops the first term. Option 4 evaluates lower limit minus upper limit; reversing the order negates the whole answer, and a negative number cannot be an area.

**2. A** — 6x − x² = 0 gives x(6 − x) = 0, so x = 0 and x = 6; f(3) = 18 − 9 = 9 > 0, so no modulus. [3x² − x³/3]₀⁶ = 108 − 72 = 36 square units. Option 2 integrates only to x = 3, stopping at the turning point instead of the root. Option 3 is the 6³/3 = 72 term alone. Option 4 is 3(6)² = 108 alone, dropping the cubic term — notice that the correct answer is the difference of options 3 and 4.

**3. B** — x² − 1 = 0 gives x = ±1 and only x = 1 is in [0, 2]. On [0,1] f ≤ 0 and on [1,2] f ≥ 0, so A = |∫₀¹(x² − 1)dx| + ∫₁²(x² − 1)dx = |1/3 − 1| + ((8/3 − 2) − (1/3 − 1)) = 2/3 + 4/3 = 2. Option 1 is the unsplit integral ∫₀²(x² − 1)dx = 8/3 − 2 = 2/3, which is also numerically the first piece's magnitude — a wrong method landing on a familiar-looking number. Option 3 is the second piece only. Option 4 is the first piece with the modulus dropped.

**4. B** — 4 − x² = 0 gives x = ±2; f(0) = 4 > 0, so the plain integral applies. [4x − x³/3]₋₂² = (8 − 8/3) − (−8 + 8/3) = 16/3 + 16/3 = 32/3. Option 1 integrates only from 0 to 2, taking half the region — the shortcut is to double that, not to use it as the answer. Option 3 comes from dropping the −x³/3 term and computing 4x from −2 to 2. Option 4 has the limits reversed.

**5. C** — 3 − x = x² − 9 gives (x + 4)(x − 3) = 0, so x = −4 and x = 3; at x = 2, f = 1 and g = −5, so f is on top. The integrand is 12 − x − x², giving [12x − x²/2 − x³/3]₋₄³. At x = 3: 36 − 4.5 − 9 = 45/2. At x = −4: −48 − 8 + 64/3 = −104/3. So A = 45/2 − (−104/3) = 45/2 + 104/3 = 343/6 ≈ 57.17 square units. Option 1 is the upper-limit value alone, from forgetting to subtract. Option 2 is 45/2 − 104/3, the error of not doubling the minus when subtracting a negative — the single most common slip in this example. Option 4 is the magnitude of the lower-limit value alone.

**6. C** — 2 − x = 4 − x² gives x² − x − 2 = 0, (x − 2)(x + 1) = 0, so x = −1 and x = 2; at x = 1, f = 1 and g = 3, so g is on top and the integrand is (4 − x²) − (2 − x) = 2 + x − x². Then [2x + x²/2 − x³/3]₋₁² = 10/3 − (−7/6) = 27/6 = 9/2 = 4.5 square units. Option 1 is the upper-limit value 10/3 with the lower limit not subtracted. Option 2 is 10/3 − 7/6 = 13/6, from treating the lower value as +7/6 instead of −7/6. Option 4 subtracts in the order f − g, which the test point rules out, and returns a negative number.

**7. D** — x² = 2 − x² gives x² = 1, and only x = 1 lies in [0, 2], so the curves cross inside and slide 12 applies. On [0,1] the test x = 0 gives 0 against 2, so 2 − x² is on top: A₁ = ∫₀¹(2 − 2x²)dx = 2 − 2/3 = 4/3. On [1,2] the test x = 2 gives 4 against −2, so x² is on top: A₂ = ∫₁²(2x² − 2)dx = (16/3 − 4) − (2/3 − 2) = 8/3. A = 4/3 + 8/3 = 4 square units. Option 1 is A₁ only. Option 3 is A₂ only. Option 2 is the single unsplit integral ∫₀²(2 − 2x²)dx = 4 − 16/3 = −4/3 — negative, and even its magnitude is not the area, because the pieces cancelled before any modulus could be applied.

**8. D** — cos x = 2 − cos x gives 2cos x = 2, cos x = 1, so x = 0 and x = 2π — both are endpoints, so there is no interior crossing and one integral suffices. At x = π, cos π = −1 and 2 − cos π = 3, so 2 − cos x is on top: A = ∫₀^(2π)(2 − 2cos x)dx = [2x − 2sin x]₀^(2π) = (4π − 0) − (0 − 0) = 4π ≈ 12.57 square units. Option 1 assumes the cosine terms cancel over a full period, forgetting the constant 2 that survives. Option 2 integrates (1 − cos x) instead of (2 − 2cos x), losing the factor of 2 in the difference. Option 3 doubles the answer by splitting at x = π, where the curves do not in fact meet.

**9.** A good answer follows her Example 1 exactly. Limits: no interval is given, so set f(x) = 0; 6x − x² = 0 factorises as x(6 − x) = 0, giving x = 0 and x = 6, the points at which the curve cuts the x-axis. Test: take a point inside, say x = 3; f(3) = 6(3) − 3² = 18 − 9 = 9 > 0, so f(x) ≥ 0 across [0, 6] and the first case of slide 4 applies — hence no modulus. Evaluate: A = ∫₀⁶(6x − x²)dx = [6x²/2 − x³/3]₀⁶ = [3x² − x³/3]₀⁶ = (3(36) − 216/3) − (0 − 0) = 108 − 72 = 36. Conclude with the units: the area is 36 square units. Credit the explicit lower-limit bracket even though it is zero; that is her habit and it is where the marks sit.

**10.** A good answer first checks for a crossing: x² = 2 − x² gives 2x² = 2, x² = 1, x = ±1, and only x = 1 lies in [0, 2], so c = 1 and slide 12's A = A₁ + A₂ applies rather than slide 8's single formula. Then it tests each sub-interval: at x = 0, x² = 0 and 2 − x² = 2, so 2 − x² is on top on [0,1]; at x = 2, x² = 4 and 2 − x² = −2, so x² is on top on [1,2]. A₁ = ∫₀¹[(2 − x²) − x²]dx = ∫₀¹(2 − 2x²)dx = [2x − 2x³/3]₀¹ = 2 − 2/3 = 4/3. A₂ = ∫₁²[x² − (2 − x²)]dx = ∫₁²(2x² − 2)dx = [2x³/3 − 2x]₁² = (16/3 − 4) − (2/3 − 2) = 4/3 + 4/3 = 8/3. A = 4/3 + 8/3 = 4 square units. Finally: a single integral ∫₀²(2 − 2x²)dx = 4 − 16/3 = −4/3, which is negative and whose magnitude 4/3 is also wrong, because the second lobe entered with the opposite sign and cancelled part of the first.

**11.** A good answer solves for the intersections first: cos x = 2 − cos x gives 2cos x = 2, so cos x = 1, and on [0, 2π] that happens at x = 0 and x = 2π only. Both are endpoints, so there is no c strictly inside the interval and slide 12 does not apply — this is a slide 8 problem. Test x = π: cos π = −1 and 2 − cos π = 3, so 2 − cos x is on top throughout. A = ∫₀^(2π)[(2 − cos x) − cos x]dx = ∫₀^(2π)(2 − 2cos x)dx = [2x − 2sin x]₀^(2π) = (4π − 2sin 2π) − (0 − 2sin 0) = 4π − 0 = 4π square units, about 12.57. The point of the task is that splitting is triggered by an interior intersection, not by the presence of trigonometric functions or by a long interval; always solve f = g and look at where the solutions actually fall.

**12.** A good answer sets 3 − x = x² − 9, rearranges to x² + x − 12 = 0 and factorises to (x + 4)(x − 3) = 0, giving x = −4 and x = 3. It then tests x = 2 in [−4, 3]: f(2) = 1 and g(2) = −5, so f(x) ≥ g(x) and the integrand is f − g = (3 − x) − (x² − 9) = 12 − x − x². The antiderivative is 12x − x²/2 − x³/3 (the slide writes the last two terms in the other order, which is the same function). At x = 3: 12(3) − 9/2 − 27/3 = 36 − 4.5 − 9 = 45/2. At x = −4: 12(−4) − 16/2 − (−64)/3 = −48 − 8 + 64/3 = −56 + 64/3 = −104/3. Then A = 45/2 − (−104/3) = 45/2 + 104/3 = (135 + 208)/6 = 343/6 ≈ 57.17 square units. The step to emphasise is the double minus: subtracting −104/3 adds it. Writing 45/2 − 104/3 gives −73/6, a negative number that cannot be an area — which is itself the check that something went wrong.
