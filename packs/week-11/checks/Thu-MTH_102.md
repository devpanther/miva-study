# Thursday — MTH_102 nightly check

*Volume problems carried out: finding the intersections that give the limits, writing outer and inner radii as distances from the axis, squaring before integrating, setting up shells with radius × height × thickness, rotating about lines y = k and x = h, and checking one method against the other — with the squaring, radius, limit and dx-versus-dy traps at every step.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The region under y = x + 1 from x = 0 to x = 2, revolved about the x-axis, has volume:
a) 26π/3   b) 4π   c) 8π/3   d) 9π

**2.** The region enclosed by y = x² and y = 4, revolved about the x-axis, has volume:
a) 32π/3   b) 128π/5   c) 256π/5   d) 512π/15

**3.** The region bounded by y = √x, y = 0 and x = 4, revolved about the **y-axis**, has volume:
a) 8π   b) 32π/3   c) 64π/5   d) 128π/5

**4.** The region bounded by y = x², y = 0, x = 0 and x = 1, revolved about the line **y = 2**, has volume:
a) −17π/15   b) π/5   c) 17π/15   d) 23π/15

**5.** The region bounded by y = x³, y = 0 and x = 2 is revolved about the line **x = 2**. The correct set-up is:
a) 2π∫₀²(x − 2)x³dx
b) 2π∫₀²(2 − x)x³dx
c) 2π∫₀²x·x³dx
d) π∫₀²(2 − x)²dx

**6.** The region bounded by y = x², the y-axis and the line y = 4 (first quadrant), revolved about the **y-axis**, has volume:
a) 8π   b) 16π/3   c) 32π/5   d) 64π/3

**7.** The region under y = √(9 − x²), −3 ≤ x ≤ 3, revolved about the x-axis, has volume:
a) 18π   b) 36π   c) 9π²/2   d) 72π

**8.** The region bounded by y = x², y = 0, x = 1 and x = 2, revolved about the **y-axis**, has volume:
a) 15π/4   b) 17π/6   c) 15π/2   d) 31π/5

**9. (explain why)** The region enclosed by y = 2x and y = x² is revolved (i) about the x-axis and (ii) about the y-axis. Find both volumes, showing how you obtain the limits, which boundary is outer in each case and why, and which method you use for each and why.

**10. (explain why)** The region bounded by y = x³, y = 0 and x = 2 is revolved about the y-axis. Evaluate the volume **twice** — once by shells and once by washers — showing the limits, the radii and the inversion in full, and say what the agreement of the two numbers does and does not prove about your working.

**11. (explain why)** The region bounded by y = √x, y = 0 and x = 4 is revolved about the line **y = 2**. Set up and evaluate the volume, stating the outer and inner radii as distances. Then say what number you would have obtained had you written the inner radius as √x − 2, and what solid, if any, that corresponds to.

**12. (explain why)** The region enclosed by y = x − x² and the x-axis is revolved about the y-axis. Explain why the washer method is impractical here and the shell method is not, set up the shell integral with its radius, height and limits justified, and evaluate it.

---

## Answers

**1. a** — *Disc method: square the radius first, then integrate, then subtract at both limits.* R(x) = x + 1, so V = π∫₀²(x + 1)²dx = π[(x + 1)³/3]₀² = π(27/3 − 1/3) = 26π/3. (b) is π∫₀²(x + 1)dx = π(2 + 2) = 4π — the radius was never squared, so an area has been reported as a volume; (c) is π∫₀²x²dx = 8π/3, obtained by squaring only the x and dropping the +1, i.e. rotating y = x instead; (d) is π[(x+1)³/3] evaluated at the upper limit alone, 27π/3 = 9π — the lower limit contributes (0 + 1)³/3 = 1/3 and is not zero just because x = 0.

**2. c** — *Washer: outer radius is the boundary further from the axis, and the squares are taken before the subtraction.* Intersections: x² = 4 ⟹ x = ±2. The axis is y = 0, and on (−2, 2) the line y = 4 is further from it than the parabola, so R = 4 and r = x². V = π∫₋₂²(16 − x⁴)dx = π[16x − x⁵/5]₋₂² = π(64 − 64/5) = 256π/5. (a) is π∫₋₂²(4 − x²)dx = 32π/3, the Week 10 **area** multiplied by π — no squaring anywhere; (b) is the integral taken from 0 to 2 only, exactly half, the classic loss of the symmetric left-hand half; (d) is π∫₋₂²(4 − x²)²dx = 512π/15, the (R − r)² error — and note it is smaller than the true answer, as (R − r)² < R² − r² always is when r > 0.

**3. d** — *Shells about a vertical axis: radius x, height y, thickness dx, and the factor is 2π.* V = 2π∫₀⁴x·√x dx = 2π∫₀⁴x^{3/2}dx = 2π[(2/5)x^{5/2}]₀⁴ = 2π(2/5)(32) = 128π/5. (c) is 64π/5, the same integral with π instead of 2π — the shell factor is a circumference, not an area; (b) is 2π∫₀⁴√x dx = 32π/3, in which the radius x was omitted and only the height integrated, so every shell has been given radius 1; (a) is 8π, the volume of the *same region about the x-axis* by discs — the right region, the wrong axis, and a warning that a plausible-looking number proves nothing about the set-up.

**4. c** — *The radius is the distance from the axis, and the axis y = 2 lies above the whole region, so the outer boundary is the one that is lowest.* The region runs from y = 0 up to y = x² on [0, 1], and every point of it is below y = 2. The furthest boundary from the axis is y = 0, giving R = 2 − 0 = 2; the nearest is the parabola, giving r = 2 − x². V = π∫₀¹[4 − (2 − x²)²]dx = π∫₀¹(4x² − x⁴)dx = π(4/3 − 1/5) = 17π/15. (d) is 23π/15, from using R = x² + 2 — the shift was added instead of subtracted, which is the correct move for an axis *below* the region and wrong for one above it; (b) is π∫₀¹x⁴dx = π/5, the volume about y = 0, i.e. the shift ignored entirely; (a) is the correct integrand with R and r interchanged, and a negative volume is always the signature of that swap, never something to be repaired with a modulus.

**5. b** — *A shell's radius is the distance from the axis, so for a region lying to the left of x = 2 it is 2 − x.* The axis is vertical, so shells are vertical and the variable is dx; the shell at x has radius 2 − x (non-negative on [0, 2]), height x³ − 0, thickness dx, giving 2π∫₀²(2 − x)x³dx. (a) reverses the radius to x − 2, which is negative throughout the interval and delivers the true volume with a minus sign; (c) uses radius x, which is the distance from the **y-axis** — it silently answers a different question, and it is the error that survives longest because the integral is perfectly easy; (d) applies the disc formula, π∫R²dx, to a shell radius: the disc formula needs slices perpendicular to the axis, and slices perpendicular to a vertical axis are stacked in y, so a dx there is impossible on its own terms.

**6. a** — *Discs about a vertical axis are stacked in y, so the curve must be inverted and the limits must be y-values.* x = √y, R(y) = √y, and y runs from 0 to 4: V = π∫₀⁴(√y)²dy = π∫₀⁴y dy = π(8) = 8π. (c) is π∫₀²x⁴dx = 32π/5, the disc formula applied in x — that computes the solid formed by rotating the region under the parabola about the **x**-axis, a different region and a different axis; (d) is π∫₀⁴y²dy = 64π/3, obtained by renaming x as y in "π∫x²" without ever inverting the relation — the commonest of all dy errors, because it looks like a change of variable and is only a change of letter; (b) is 16π/3, which is π times the Week 10 area of this region, the reflex of decorating an area with π.

**7. b** — *Revolving a semicircular region of radius r about its diameter generates the sphere, V = 4πr³/3.* R(x) = √(9 − x²), so R² = 9 − x² and V = π∫₋₃³(9 − x²)dx = π[9x − x³/3]₋₃³ = π[(27 − 9) − (−27 + 9)] = 36π, which is 4π(3)³/3 ✓. (a) is 18π, the integral from 0 to 3 only — half the interval, and the fact that it is exactly half the right answer makes it very easy to accept; (c) is π∫₋₃³√(9 − x²)dx = π(9π/2) = 9π²/2, the radius never squared, and a π² in a volume is always a sign that an area formula has been used where a squared radius belonged; (d) is 72π, from doubling 36π on the grounds that the semicircle has "two halves" about the axis — but the upper and lower halves sweep the *same* ball, and counting both counts the sphere twice.

**8. c** — *Shells with an inner limit: the radius is still x, and the limits are the x-values that bound the region.* V = 2π∫₁²x·x²dx = 2π∫₁²x³dx = 2π[x⁴/4]₁² = 2π(4 − 1/4) = 2π(15/4) = 15π/2. (a) is 15π/4, the same integral with π in place of 2π; (b) is 2π∫₁²(x − 1)x²dx = 17π/6, from taking the radius as x − 1 because the region starts at x = 1 — but the radius is the distance from the **axis of revolution**, not from the near edge of the region, and the axis is x = 0; (d) is π∫₁²x⁴dx = 31π/5, the disc formula in x, which cannot describe a rotation about a vertical axis at all. Note that this solid is a genuine tube with a cylindrical hole of radius 1, and any correct method must reflect that.

**9.** *Concept: the same region gives two different solids about two different axes, and which boundary is "outer" is decided by distance from the axis, not by which curve is higher on the page.*
Limits first: 2x = x² ⟹ x(x − 2) = 0 ⟹ **x = 0 and x = 2**, so the region runs from (0, 0) to (2, 4). Test x = 1: the line gives y = 2, the parabola y = 1, so the **line is above** the parabola throughout.
**(i) About the x-axis.** Slices perpendicular to a horizontal axis are stacked in x, so this is a washer integral in dx. Distance from y = 0 to the line is 2x, to the parabola x²; the line is above and both are positive, so R = 2x and r = x².
V = π∫₀²[(2x)² − (x²)²]dx = π∫₀²(4x² − x⁴)dx = π[4x³/3 − x⁵/5]₀² = π(32/3 − 32/5) = 32π(5 − 3)/15 = **64π/15.**
**(ii) About the y-axis.** Both boundaries are given as y = f(x), so shells avoid inverting anything: the shell at x has radius x, height (top − bottom) = 2x − x², thickness dx, and x still runs 0 to 2.
V = 2π∫₀²x(2x − x²)dx = 2π∫₀²(2x² − x³)dx = 2π[2x³/3 − x⁴/4]₀² = 2π(16/3 − 4) = 2π(4/3) = **8π/3.**
The two numbers are different because they are different solids: about the x-axis the far boundary is the line, about the y-axis the far boundary from the axis is the **parabola** (at height y, x = √y lies further out than x = y/2), and the "top" curve of part (i) has become the *inner* boundary in part (ii). Nothing about the picture in x tells you which is outer; only distance from the stated axis does.

**10.** *Concept: shells and washers slice the same solid in perpendicular directions, so they must agree — and their agreement checks the arithmetic and the radii, but not the region.*
**By shells** (axis vertical ⟹ vertical tubes ⟹ dx). Radius x, height x³ − 0, limits x = 0 to 2:
V = 2π∫₀²x·x³dx = 2π∫₀²x⁴dx = 2π[x⁵/5]₀² = 2π(32/5) = **64π/5.**
**By washers** (axis vertical ⟹ horizontal annuli ⟹ dy). Invert the curve: y = x³ ⟹ x = y^{1/3}. The solid's corner is (2, 8), so y runs 0 to 8. At height y the solid runs from the curve out to the line x = 2, so the inner radius is y^{1/3} and the outer radius is the constant 2:
V = π∫₀⁸[2² − (y^{1/3})²]dy = π∫₀⁸(4 − y^{2/3})dy = π[4y − (3/5)y^{5/3}]₀⁸ = π[32 − (3/5)(32)] = 32π(1 − 3/5) = **64π/5** ✓
(using 8^{5/3} = (8^{1/3})⁵ = 2⁵ = 32).
What the agreement proves: that the squaring, the inversion, the limits and the integration are consistent — two independent routes with different integrands, different variables and different limits landing on the same number is very strong evidence that none of those steps is wrong. What it does **not** prove: that you revolved the right region or about the right axis. Both calculations started from the same reading of the question, so a misread boundary (say, taking x = 2 as y = 2) would corrupt both identically and they would still agree. The check is on the machinery, not on the interpretation — for that you need the sketch.

**11.** *Concept: rotating about y = 2 makes every radius a distance from that line, and the boundary that is furthest from the line is the outer one — here the x-axis, not the curve.*
On [0, 4] the region lies between y = 0 and y = √x, and √4 = 2, so the curve just reaches the axis of revolution at the right-hand end and the region lies entirely **below** y = 2. Distances from the axis: to y = 0 it is 2 − 0 = **2** (outer), to the curve it is 2 − √x (inner), which runs from 2 down to 0. There is therefore a washer at every x except the last:
V = π∫₀⁴[2² − (2 − √x)²]dx = π∫₀⁴[4 − (4 − 4√x + x)]dx = π∫₀⁴(4√x − x)dx = π[(8/3)x^{3/2} − x²/2]₀⁴ = π[(8/3)(8) − 8] = π(64/3 − 24/3) = **40π/3.**
*(Check by shells, which about a horizontal axis are horizontal and so run in dy: radius 2 − y, height 4 − y², y from 0 to 2 — V = 2π∫₀²(2 − y)(4 − y²)dy = 2π∫₀²(8 − 4y − 2y² + y³)dy = 2π[8y − 2y² − 2y³/3 + y⁴/4]₀² = 2π[16 − 8 − 16/3 + 4] = 2π(20/3) = 40π/3 ✓.)*
Had the inner radius been written as **√x − 2**, it would have been negative everywhere on [0, 4), but squaring hides that: (√x − 2)² = (2 − √x)², so this particular slip happens to give the same 40π/3. That is exactly why it is dangerous — the sign error is invisible here and fatal elsewhere, for instance the moment the region straddles the line and the two expressions stop describing the same distance. The error that does change the answer is using **√x + 2** or plain **√x** as a radius: √x alone gives π∫₀⁴x dx = 8π, the volume about y = 0, i.e. the shift forgotten; and radii must always be checked for non-negativity before they are squared, not after.

**12.** *Concept: shells need the boundary as y = f(x) and washers need it as x = g(y), so a curve that cannot be inverted single-valuedly decides the method for you.*
The region: y = x − x² meets y = 0 where x(1 − x) = 0, i.e. **x = 0 and x = 1**, and the parabola opens downward, so the region is the arch above the x-axis on [0, 1] with maximum y = 1/4 at x = 1/2.
**Why washers are impractical.** About the y-axis, washers are horizontal annuli at height y, and they need the *two* x-values on the curve at that height — the roots of x² − x + y = 0, namely x = (1 ± √(1 − 4y))/2. The parabola is not one-to-one on [0, 1], so the inversion produces two branches: the left branch is the inner radius and the right branch is the outer, y runs only from 0 to 1/4, and the integrand becomes π[((1 + √(1 − 4y))/2)² − ((1 − √(1 − 4y))/2)²] = π√(1 − 4y). It is doable here, but it required solving a quadratic and identifying which root is which — and for a cubic such as y = 2x² − x³ the same step is impossible.
**Shells.** The axis is vertical, so the tubes are vertical and the variable is dx, with no inversion at all. The tube at x has **radius x** (its distance from the y-axis), **height (top − bottom) = (x − x²) − 0**, thickness dx, and x runs over the region, **0 to 1**:
V = 2π∫₀¹x(x − x²)dx = 2π∫₀¹(x² − x³)dx = 2π[x³/3 − x⁴/4]₀¹ = 2π(1/3 − 1/4) = 2π(1/12) = **π/6.**
*(The washer route confirms it: π∫₀^{1/4}√(1 − 4y)dy = π[−(1/6)(1 − 4y)^{3/2}]₀^{1/4} = π/6 ✓ — same solid, far more work, and two chances to attach the branches the wrong way round.)*
