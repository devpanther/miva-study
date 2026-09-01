# Thursday — MTH_102 nightly check

*Problems-only session on Week 11 volumes of revolution.*

*Set up and evaluate π∫ₐᵇ[R]²dx, π∫ₐᵇ([R]² − [r]²)dx and 2π∫ₐᵇ x f(x)dx on the deck's own numbers.*

*Her six worked examples. Then all three unanswered TASKs: √x from 1 to 4; y = x² over [0,2] about y = −1; and y = x against y = x² about the y-axis.*

*Plus irrational limits (√2, √3), a shifted axis, and one solid computed twice as a cross-check.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Disc Example 2: revolving the region between x = y² + 1 and x = 3 about the line x = 3, she gets R(y) = 2 − y² with limits −√2 to √2. Evaluate π∫₋√2^√2 (4 − 4y² + y⁴)dy.
A. 64√2π/15
B. 32√2π/15
C. 8√2π/3
D. 94√2π/15

**2.** Washer Example 2: R(y) = 3, r(y) = y², about the y-axis. Evaluate π∫₀^√3 (9 − y⁴)dy.
A. 2√3π
B. 36√3π/5
C. −108π/5
D. −36√3π/5

**3.** TASK slide: revolve f(x) = √x, the x-axis, and the lines x = 1 and x = 4 about the x-axis. The volume is
A. 14π/3
B. 8π
C. 15π/2
D. 17π/2

**4.** TASK slide: rotate about the y-axis the region between y = x and y = x². The volume is
A. π/12
B. 2π/15
C. π/3
D. π/6

**5.** The region under y = 2x, above the x-axis, from x = 0 to x = 3, is revolved about the x-axis. The volume is
A. 36π
B. 9π
C. 18π
D. 108π

**6.** The region bounded by y = x and y = x² on [0, 1] is revolved about the x-axis. The volume is
A. π/6
B. 2π/15
C. π/30
D. 8π/15

**7.** Use the shell method: the region under y = x², above y = 0, from x = 0 to x = 2, revolved about the y-axis. The volume is
A. 4π
B. 32π/5
C. 8π
D. 16π

**8.** TASK slide: the region under y = x² over [0, 2] is rotated about the line y = −1. The volume is
A. 206π/15
B. 22π/5
C. 32π/5
D. 176π/15

**9.** Work Disc Example 2 in full: revolve the region between x = y² + 1 and x = 3 about the line x = 3. Find the limits, state the radius, and evaluate — showing the powers of √2 explicitly.
*(short answer)*

**10.** Work the shell TASK in full: rotate about the y-axis the region between y = x and y = x². Show how you get the limits and the strip height.
*(short answer)*

**11.** Evaluate π∫₀^√3 (9 − y⁴)dy by hand, showing the power of √3, and say where each of the 9 and the y⁴ came from in Washer Example 2.
*(short answer)*

**12.** Shell Example 2 finds the volume of the solid from rotating the region under y = √x on [0, 1] about the x-axis, and gets π/2. Compute the same volume by her disc formula instead, and say what the agreement proves.
*(short answer)*

## Answers

**1. A** — The antiderivative is 4y − 4y³/3 + y⁵/5. At y = √2, using (√2)³ = 2√2 and (√2)⁵ = 4√2, it is 4√2 − 8√2/3 + 4√2/5 = √2(60 − 40 + 12)/15 = 32√2/15. The integrand is even, so the value at −√2 is the negative of that and the subtraction doubles it: 64√2/15. Option 2 is the value at the upper limit alone — the lower limit was never subtracted. Option 3 forgets to square (2 − y²) and integrates it raw. Option 4 uses the curve's own x-value y² + 1 as the radius instead of the distance 3 − (y² + 1) to the axis.

**2. B** — The antiderivative is 9y − y⁵/5. At y = √3, (√3)⁵ = 9√3, so it is 9√3 − 9√3/5 = (45√3 − 9√3)/5 = 36√3/5, and the lower limit contributes 0. Option 1 forgets to square both radii and integrates 3 − y² instead. Option 3 uses 3 as the upper limit — but 3 is an x-value, and the variable of integration is y, whose upper value is √3; the negative result is the tell that the limit is wrong. Option 4 swaps R and r, integrating y⁴ − 9, which reverses the sign; a negative volume is always a setup error, never an answer.

**3. C** — R(x) = √x, so [R(x)]² = x and V = π∫₁⁴ x dx = π[x²/2]₁⁴ = π(16/2 − 1/2) = 15π/2. Option 1 integrates √x without squaring it, giving π[2x^(3/2)/3]₁⁴ = 14π/3 — the commonest error on this task, and it never touches the disc formula at all. Option 2 substitutes only the upper limit, π(16/2), forgetting F(b) − F(a). Option 4 adds the two limit values instead of subtracting, π(8 + 1/2).

**4. D** — Solve x = x² for the limits: x(1 − x) = 0, so 0 and 1. On (0,1) the line is above the parabola, so the strip height is x − x², the radius is x, and V = 2π∫₀¹ x(x − x²)dx = 2π∫₀¹(x² − x³)dx = 2π[x³/3 − x⁴/4]₀¹ = 2π(1/12) = π/6. Option 1 uses π instead of 2π. Option 3 forgets to multiply by the radius x, integrating the height alone: 2π(1/2 − 1/3) = π/3. Option 2 is the answer for the wrong axis — washers about the x-axis, π∫₀¹(x² − x⁴)dx = 2π/15.

**5. A** — R(x) = 2x, so [R(x)]² = 4x² and V = π∫₀³ 4x²dx = π[4x³/3]₀³ = π(4·27/3) = 36π. Option 2 forgets to square: π∫₀³2x dx = π[x²]₀³ = 9π. Option 3 squares only the x and not the coefficient, using 2x² instead of 4x². Option 4 loses the division by the new power, using 4x³ as the antiderivative of 4x². The check is the cone formula: radius 6, height 3, πr²h/3 = π·36·3/3 = 36π.

**6. B** — On (0,1), x ≥ x², so R = x and r = x², giving V = π∫₀¹(x² − x⁴)dx = π[x³/3 − x⁵/5]₀¹ = π(1/3 − 1/5) = 2π/15. Option 1 forgets to square both radii: π∫₀¹(x − x²)dx = π/6 — which is an area times π, not a volume. Option 3 squares the difference instead of subtracting the squares: π∫₀¹(x − x²)²dx = π/30. Option 4 adds the two terms, π(1/3 + 1/5), rather than subtracting.

**7. C** — Radius x, height x², so V = 2π∫₀² x·x²dx = 2π∫₀² x³dx = 2π[x⁴/4]₀² = 2π(4) = 8π. Option 1 uses π in place of 2π. Option 2 is the disc answer about the wrong axis, π∫₀²(x²)²dx = 32π/5 — the right region, revolved the wrong way. Option 4 uses x⁴/2 as the antiderivative of x³, dividing by the old power rather than the new one.

**8. D** — Distances from y = −1: R = x² + 1 and r = 0 − (−1) = 1. So V = π∫₀²([x² + 1]² − 1)dx = π∫₀²(x⁴ + 2x²)dx = π[x⁵/5 + 2x³/3]₀² = π(32/5 + 16/3) = 176π/15. Option 1 shifts the outer radius but leaves r = 0, filling in a hole that is really there: π∫₀²(x⁴ + 2x² + 1)dx = 206π/15. Option 2 shifts only the inner radius, using R = x² and r = 1. Option 3 ignores the shift altogether and computes the solid about the x-axis, π∫₀²x⁴dx = 32π/5.

**9.** A good answer follows her order. Limits first: set y² + 1 = 3, so y² = 2 and y = ±√2, giving a = −√2, b = √2. Radius next: the axis is the vertical line x = 3, so the radius at height y is the horizontal distance R(y) = 3 − (y² + 1) = 2 − y². Then V = π∫₋√2^√2 (2 − y²)²dy = π∫₋√2^√2 (4 − 4y² + y⁴)dy, and the antiderivative is 4y − 4y³/3 + y⁵/5. The powers must be shown: (√2)³ = 2√2 and (√2)⁵ = 4√2, so at y = √2 the bracket is 4√2 − 8√2/3 + 4√2/5 = √2(60 − 40 + 12)/15 = 32√2/15. Since every term is odd in y, the value at −√2 is −32√2/15, and subtracting doubles the total: V = 64√2π/15 cubic units. Two things to flag: the slide misprints the expanded integrand as [(4 − 4y² + y⁴)]², with a square that must be dropped once the bracket is expanded; and the problem statement stops at 'about the line' without naming it, which the radius 2 − y² settles as x = 3.

**10.** A good answer solves for the limits rather than reading them off: x = x² gives x(1 − x) = 0, so a = 0 and b = 1. It then identifies the strip: vertical, at distance x from the y-axis, so the radius is x; running from the lower boundary y = x² up to the upper boundary y = x, so the height is f(x) = x − x² — positive throughout (0,1), which confirms the ordering. Then V = 2π∫₀¹ x(x − x²)dx = 2π∫₀¹ (x² − x³)dx = 2π[x³/3 − x⁴/4]₀¹ = 2π(4 − 3)/12 = 2π/12 = π/6 cubic units. It should note that her formula 2π∫x f(x)dx is stated for a single f, but f is really the height of the strip — exactly as in her Shell Example 2, where f(y) = 1 − y² is also a difference of two boundaries. Common losses: multiplying by 2π but forgetting the radius x, which gives π/3; or squaring the height, which the shell formula never does.

**11.** A good answer sources the integrand first: revolving about the y-axis, the far boundary is the vertical line x = 3, so R(y) = 3 and [R(y)]² = 9 — a constant, because a vertical line is the same distance from the y-axis at every height. The near boundary is the parabola x = y², so r(y) = y² and [r(y)]² = y⁴. Hence the integrand 9 − y⁴. The limit comes from y² = 3, so y = √3. Then the antiderivative is 9y − y⁵/5, and at y = √3 we need (√3)⁵ = (√3)⁴·√3 = 9√3, giving 9√3 − 9√3/5 = (45√3 − 9√3)/5 = 36√3/5; the lower limit gives 0. So V = 36√3π/5 cubic units. It is worth saying that a constant R is normal and not a sign of error, and that 3 must not be used as the upper limit — 3 is an x-value and the integration is in y.

**12.** A good answer does both. By shells: x = y² so the horizontal strip at height y runs from x = y² across to x = 1, giving f(y) = 1 − y², radius y, limits 0 to 1, and V = 2π∫₀¹ y(1 − y²)dy = 2π∫₀¹(y − y³)dy = 2π[y²/2 − y⁴/4]₀¹ = 2π(1/2 − 1/4) = π/2. By discs: the axis is the x-axis and the region touches it along the whole interval, so each vertical slice is a full circle of radius R(x) = √x, and V = π∫₀¹[√x]²dx = π∫₀¹ x dx = π[x²/2]₀¹ = π/2. The agreement proves the two formulas describe the same solid rather than two different ones — the disc slices it perpendicular to the axis, the shell slices it parallel, and both must total the same volume. Since the deck gives no answers to its TASKs, doing a solid both ways is the only self-check available; it catches a dropped 2π, a missing square, or a wrongly inverted boundary immediately.
