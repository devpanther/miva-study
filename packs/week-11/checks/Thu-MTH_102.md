# Thursday — MTH_102 nightly check

*Problems-only session on Week 11 volumes of revolution.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** The region between the parabola x = y² + 1 and the line x = 4 is revolved about the line x = 4. Find the volume.
A. 48√3π/5
B. 24√3π/5
C. 36√3π/5
D. 4√3π

**2.** The region between y = x² and y = x³ for 0 ≤ x ≤ 1 is revolved about the x-axis. Find the volume.
A. π/105
B. 12π/35
C. 2π/35
D. π/12

**3.** The region enclosed by the curve y = 4 − x² and the x-axis is revolved about the x-axis. Find the volume.
A. 256π/15
B. 32π/3
C. 128π/15
D. 512π/15

**4.** The region enclosed by y = 3x and y = x² is revolved about the y-axis. Use the shell method to find the volume.
A. 27π/4
B. 27π/2
C. 9π
D. −27π/2

**5.** The region bounded by y = x³, the y-axis and the line y = 8 is revolved about the y-axis. Find the volume.
A. 12π
B. 128π/7
C. 32π
D. 96π/5

**6.** The region under y = x², above the x-axis, from x = 0 to x = 1 is revolved about the line y = −1. Find the volume.
A. 13π/15
B. π/5
C. 28π/15
D. −7π/15

**7.** The region under y = x², above the x-axis, from x = 0 to x = 2 is revolved about the y-axis. Use the washer method, integrating in y, to find the volume.
A. 16π
B. 8π/3
C. 8π
D. −8π

**8.** The region between y = x² and y = 2x for 0 ≤ x ≤ 2 is revolved about the x-axis. A student writes V = π∫₀²(2x − x²)²dx. Which single error has been made?
A. The limits should be −2 and 2
B. (R − r)² has been used in place of R² − r²
C. π should be 2π
D. R and r have been swapped

**9. (show your working)** The region under y = x², above the x-axis, from x = 0 to x = 1 is revolved about the line y = 1. Find the volume. Show your working.

**10. (show your working)** The region under y = x, above the x-axis, from x = 0 to x = 1 is revolved about the x-axis. Find the volume by the shell method (integrating in y), then confirm it by the disc method. Show your working.

**11. (show your working)** The region enclosed by y = x² and y = x + 2 is revolved about the x-axis. Find the volume. Show your working.

**12. (show your working)** The region under y = x (0 ≤ x ≤ 1, above the x-axis) is revolved about the y-axis. A student writes V = π∫₀¹x²dx = π/3. Explain what solid that integral really measures, and set up a correct integral.

---

## Answers

**1. A** — *Disc method in y about a vertical line.* The axis is x = 4, so the radius is the horizontal distance from the line to the parabola: R(y) = 4 − (y² + 1) = 3 − y². Limits: y² + 1 = 4 gives y = ±√3. V = π∫₋√₃^√₃(3 − y²)²dy = π∫₋√₃^√₃(9 − 6y² + y⁴)dy = π[9y − 2y³ + y⁵/5]₋√₃^√₃. Using (√3)³ = 3√3 and (√3)⁵ = 9√3, the bracket at √3 is 9√3 − 6√3 + 9√3/5 = 24√3/5; the integrand is even, so V = 2π(24√3/5) = 48√3π/5 cubic units (≈ 52.2).

24√3π/5 evaluates at the upper limit only and forgets that the lower limit contributes the same again; 36√3π/5 takes (√3)⁵ as 3√3; 4√3π forgets to square the radius.

**2. C** — *Washer with two curved boundaries.* On [0, 1], x² ≥ x³, so R(x) = x² and r(x) = x³. V = π∫₀¹[(x²)² − (x³)²]dx = π∫₀¹(x⁴ − x⁶)dx = π[x⁵/5 − x⁷/7]₀¹ = π(1/5 − 1/7) = π(7 − 5)/35 = 2π/35 cubic units.

π/105 integrates (x² − x³)², the difference squared; 12π/35 adds 1/5 and 1/7 instead of subtracting; π/12 forgets to square the radii, π∫(x² − x³)dx.

**3. D** — *Disc method with limits from the roots.* Limits: 4 − x² = 0 gives x = −2 and x = 2. R(x) = 4 − x², so V = π∫₋₂²(4 − x²)²dx = π∫₋₂²(16 − 8x² + x⁴)dx = π[16x − 8x³/3 + x⁵/5]₋₂². At x = 2 the bracket is 32 − 64/3 + 32/5 = (480 − 320 + 96)/15 = 256/15, and the even integrand doubles it: V = 512π/15 cubic units (≈ 107.2).

256π/15 integrates from 0 to 2 only; 32π/3 forgets to square the radius; 128π/15 has the sign of the x⁵/5 term wrong, 32 − 64/3 − 32/5.

**4. B** — *Shell method for a region between two curves.* Limits: 3x = x² gives x(x − 3) = 0, so x = 0 and x = 3. On (0, 3) the line is on top (at x = 1: 3 > 1), so the strip height is 3x − x² and its radius is x. V = 2π∫₀³x(3x − x²)dx = 2π∫₀³(3x² − x³)dx = 2π[x³ − x⁴/4]₀³ = 2π(27 − 81/4) = 2π(27/4) = 27π/2 cubic units.

27π/4 uses π instead of 2π; 9π leaves out the radius x, 2π∫(3x − x²)dx; −27π/2 takes the height as x² − 3x, bottom minus top.

**5. D** — *Disc method in y after inverting the curve.* The axis is the y-axis, so write the curve as x = y^(1/3); the radius at height y is R(y) = y^(1/3) and y runs from 0 to 8. V = π∫₀⁸(y^(1/3))²dy = π∫₀⁸y^(2/3)dy = π[3y^(5/3)/5]₀⁸ = π(3/5)(8^(5/3)) = π(3/5)(32) = 96π/5 cubic units (≈ 60.3).

12π integrates y^(1/3) without squaring it, π(3/4)(16); 128π/7 is π∫₀²(x³)²dx, the volume about the x-axis instead; 32π forgets the factor 3/5 from integrating y^(2/3).

**6. A** — *Washer about a shifted horizontal axis.* Radii are distances from y = −1: R(x) = x² − (−1) = x² + 1 and r(x) = 0 − (−1) = 1. V = π∫₀¹[(x² + 1)² − 1²]dx = π∫₀¹(x⁴ + 2x² + 1 − 1)dx = π∫₀¹(x⁴ + 2x²)dx = π[x⁵/5 + 2x³/3]₀¹ = π(1/5 + 2/3) = 13π/15 cubic units.

π/5 ignores the shift and rotates about the x-axis; 28π/15 shifts the outer radius but leaves r = 0, filling a hole that is there; −7π/15 shifts the wrong way, using R = x² − 1.

**7. C** — *Washer in y with the inner radius from the inverted curve.* At height y the region runs from the curve x = √y out to the line x = 2, so R(y) = 2 and r(y) = √y, with y from 0 to 4 (the curve reaches y = 2² = 4). V = π∫₀⁴[2² − (√y)²]dy = π∫₀⁴(4 − y)dy = π[4y − y²/2]₀⁴ = π(16 − 8) = 8π cubic units. The shell method gives the same: 2π∫₀²x·x²dx = 2π(4) = 8π.

16π forgets to subtract the inner radius; 8π/3 integrates (2 − √y)², the difference squared; −8π swaps the two radii.

**8. B** — *Why the washer subtracts squares.* The cross-section is an annulus of area πR² − πr², so the integrand must be R² − r² = (2x)² − (x²)² = 4x² − x⁴, giving 64π/15. Squaring the difference gives (2x − x²)² = 4x² − 4x³ + x⁴, a different and smaller integrand, giving 16π/15.

The limits 0 and 2 are right (the curves meet at x = 0 and x = 2); π is correct for a washer; 2x ≥ x² on [0, 2], so R = 2x and r = x² are in the right order.

**9.** *Washer about an axis above the region.* Radii are distances from the line y = 1. The boundary farther from that line is the x-axis, at distance 1 − 0 = 1, so R(x) = 1; the nearer boundary is the curve, at distance 1 − x², so r(x) = 1 − x². V = π∫₀¹[1² − (1 − x²)²]dx = π∫₀¹[1 − (1 − 2x² + x⁴)]dx = π∫₀¹(2x² − x⁴)dx = π[2x³/3 − x⁵/5]₀¹ = π(2/3 − 1/5) = 7π/15.

Final answer: 7π/15 cubic units (also accepted: 1.47). A correct answer identifies R = 1 and r = 1 − x² as distances from y = 1, subtracts the squares and evaluates. π∫₀¹(x² + 1)²dx − π = 13π/15 shifts the wrong way (that is the solid about y = −1); π∫x⁴dx = π/5 ignores the shift.

**10.** *Cross-checking a volume by two methods.* Shells: the axis is the x-axis, so the strips are horizontal at height y, with radius y. The strip runs from the line x = y to the edge x = 1, so its length is f(y) = 1 − y, and y runs from 0 to 1. V = 2π∫₀¹y(1 − y)dy = 2π∫₀¹(y − y²)dy = 2π[y²/2 − y³/3]₀¹ = 2π(1/2 − 1/3) = 2π(1/6) = π/3. Discs: R(x) = x, so V = π∫₀¹x²dx = π[x³/3]₀¹ = π/3. The two agree, as they must, since they measure the same cone.

Final answer: π/3 cubic units by both methods (also accepted: 1.05). The working must show f(y) = 1 − y, the 2π, and the disc integral π∫x²dx. 2π∫₀¹y·y dy = 2π/3 takes the strip length as y instead of 1 − y and is wrong.

**11.** *Washer with limits from the intersection of two curves.* Boundaries: x² = x + 2 gives x² − x − 2 = (x − 2)(x + 1) = 0, so x = −1 and x = 2. On (−1, 2) the line is farther from the x-axis (at x = 0: 2 > 0), so R(x) = x + 2 and r(x) = x². V = π∫₋₁²[(x + 2)² − (x²)²]dx = π∫₋₁²(x² + 4x + 4 − x⁴)dx = π[x³/3 + 2x² + 4x − x⁵/5]₋₁². At x = 2 the bracket is 8/3 + 8 + 8 − 32/5 = 184/15; at x = −1 it is −1/3 + 2 − 4 + 1/5 = −32/15. V = π(184/15 + 32/15) = 216π/15 = 72π/5.

Final answer: 72π/5 cubic units (also accepted: 14.4π or 45.2). A correct answer finds the limits by solving x² = x + 2, identifies R = x + 2 and r = x², subtracts the squares and evaluates at both limits, remembering that subtracting −32/15 adds. π(184/15 − 32/15) = 152π/15 has that sign wrong; using (x + 2 − x²)² as the integrand squares the difference and is wrong.

**12.** *Matching the formula to the axis of revolution.* π∫ₐᵇ[f(x)]²dx is the disc formula for revolution about the x-axis: it stacks discs of radius f(x) = x along the x-axis, so π/3 is the volume of the cone made by spinning the region about the x-axis, not the y-axis. For the y-axis, either integrate along that axis with washers in y, where at height y the region runs from x = y to x = 1, giving V = π∫₀¹(1² − y²)dy = 2π/3, or use shells in x with radius x and height x, giving V = 2π∫₀¹x·x dx = 2π/3. Both give 2π/3, which is not π/3.

A correct answer says the student's integral is the disc formula about the x-axis, and gives either π∫₀¹(1 − y²)dy or 2π∫₀¹x²dx (value 2π/3) for the y-axis.
