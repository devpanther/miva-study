# Monday — MTH_102 nightly check

*Conceptual session on Week 11 volumes of solids of revolution, as the deck builds them.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** The region under y = 3x, above the x-axis, from x = 0 to x = 2 is revolved about the x-axis. Use the disc method to find the volume.
A. 6π
B. 24π
C. 24
D. 48π

**2.** A rectangle with corners (0, 0), (3, 0), (3, 2) and (0, 2) is revolved about the x-axis. Use the disc formula V = π∫ₐᵇ[R(x)]²dx to find the volume of the solid.
A. 12π
B. 6π
C. 18π
D. 24π

**3.** The region bounded by x = 2y, the y-axis and the line y = 3 is revolved about the y-axis. Find the volume.
A. 9π
B. 72π
C. 36π
D. 18π

**4.** The region between y = x³ and y = x for 0 ≤ x ≤ 1 is revolved about the x-axis. Which is the outer radius R(x) in the washer formula?
A. R(x) = x³
B. R(x) = 1
C. R(x) = x − x³
D. R(x) = x

**5.** The region between y = x + 1 and y = 1 for 0 ≤ x ≤ 2 is revolved about the x-axis. Find the volume.
A. 8π/3
B. 2π
C. 20π/3
D. 26π/3

**6.** The region under y = 4 − x, above the x-axis, from x = 0 to x = 4 is revolved about the y-axis. Use the shell method to find the volume.
A. 128π/3
B. 32π/3
C. 16π
D. 64π/3

**7.** The region under y = x, above the x-axis, from x = 0 to x = 1 is revolved about the line y = −2. What are the outer and inner radii?
A. R = x + 2, r = 2
B. R = x, r = 0
C. R = x − 2, r = 2
D. R = x + 2, r = 0

**8.** A region is revolved about the y-axis and the disc or washer method is to be used. In which variable is the integral taken, and how must the boundary curves be written?
A. dx, with the curves written as y = f(x)
B. dy, with the curves written as x = f(y)
C. dy, with the curves written as y = f(x)
D. dx, with the curves written as x = f(y)

**9. (show your working)** The region under y = √x, above the x-axis, from x = 1 to x = 3 is revolved about the x-axis. Find the volume. Show your working.

**10. (show your working)** The region bounded by x = y², the line x = 1 and the x-axis (with y ≥ 0) is revolved about the y-axis. Find the volume. Show your working.

**11. (show your working)** The region under y = x³, above the x-axis, from x = 0 to x = 1 is revolved about the y-axis. Use the shell method to find the volume. Show your working.

**12. (show your working)** In the washer formula V = π∫ₐᵇ([R(x)]² − [r(x)]²)dx and the shell formula V = 2π∫ₐᵇ x f(x)dx, state what each of R(x), r(x), x and f(x) measures, and explain why one formula carries π and the other 2π.

---

## Answers

**1. B** — *Disc method about the x-axis.* The axis is the x-axis, so the radius of each disc is the y-value: R(x) = 3x. V = π∫₀²(3x)²dx = π∫₀²9x²dx = π[3x³]₀² = 24π cubic units.

6π forgets to square the radius, π∫₀²3x dx; 24 drops the π; 48π uses the shell coefficient 2π in a disc formula.

**2. A** — *Disc with a constant radius.* Every point of the top edge y = 2 is at distance 2 from the axis, so R(x) = 2 is constant and the solid is a cylinder. V = π∫₀³2²dx = π∫₀³4dx = π[4x]₀³ = 12π cubic units, which agrees with πr²h = π(2)²(3).

6π forgets to square the radius; 18π squares the length 3 instead of the radius 2 (π∫₀²9dy); 24π doubles the π.

**3. C** — *Disc method in y about the y-axis.* The axis is the y-axis, so integrate in y with the radius R(y) = 2y running from y = 0 to y = 3. V = π∫₀³(2y)²dy = π∫₀³4y²dy = π[4y³/3]₀³ = 36π cubic units (a cone of radius 6 and height 3).

9π forgets to square the radius; 72π uses 2π; 18π squares the 2 but not the y, giving π∫₀³4y dy.

**4. D** — *Identifying the outer radius of a washer.* R is the boundary farther from the axis of revolution. On [0, 1], x ≥ x³ (test x = 1/2: 1/2 > 1/8), and distance from the x-axis is the y-value, so the line y = x is the outer boundary: R(x) = x, and r(x) = x³.

x³ is the inner radius; 1 is the right-hand limit of integration, not a radius; x − x³ is the height of a strip, which belongs to the shell integrand, not to a washer.

**5. C** — *Washer method about the x-axis.* The region does not touch the axis, so it is a washer with R(x) = x + 1 (the farther boundary) and r(x) = 1. V = π∫₀²[(x + 1)² − 1²]dx = π∫₀²(x² + 2x)dx = π[x³/3 + x²]₀² = π(8/3 + 4) = 20π/3 cubic units.

8π/3 integrates (R − r)² = x², the difference squared instead of the squares subtracted; 2π forgets to square either radius; 26π/3 adds the squares instead of subtracting them.

**6. D** — *Shell method about the y-axis.* For a shell the radius is x (distance from the y-axis) and the height is f(x) = 4 − x. V = 2π∫₀⁴x(4 − x)dx = 2π∫₀⁴(4x − x²)dx = 2π[2x² − x³/3]₀⁴ = 2π(32 − 64/3) = 2π(32/3) = 64π/3 cubic units.

128π/3 squares the height, 2π∫x(4 − x)²dx; 32π/3 uses π instead of 2π; 16π leaves out the radius x and integrates 2π∫(4 − x)dx.

**7. A** — *Radii measured from a shifted axis.* Every radius is a distance from the line y = −2. The far boundary y = x is at distance x − (−2) = x + 2, so R = x + 2; the near boundary y = 0 is at distance 0 − (−2) = 2, so r = 2. The region does not reach the axis, so there is a hole and the inner radius is not zero.

R = x, r = 0 ignores the shift entirely; R = x − 2 shifts in the wrong direction; R = x + 2, r = 0 shifts the outer radius but fills in a hole that is really there.

**8. B** — *The axis of revolution fixes the variable of integration.* For discs and washers the slices are perpendicular to the axis of revolution and the integral runs along it. Revolving about the y-axis means the discs are stacked in y, so the integral is dy and each radius must be a distance measured horizontally, which needs the curves in the form x = f(y). For example x = y² + 1 or x = 3.

dx with y = f(x) is the set-up for the x-axis; the other two mix a variable of integration with curves written in the wrong form, so the radius would not be a function of the integration variable.

**9.** *Disc method with a square-root radius.* The axis is the x-axis, so R(x) = √x with a = 1, b = 3. Squaring removes the root: [√x]² = x. V = π∫₁³(√x)²dx = π∫₁³x dx = π[x²/2]₁³ = π(9/2 − 1/2) = 4π.

Final answer: 4π cubic units (also accepted: 12.57). The working must show the radius squared to x and the bracket evaluated at both limits. Integrating √x without squaring gives (2/3)(3√3 − 1)π and is wrong; π(9/2) = 9π/2 forgets the lower limit.

**10.** *Washer method in y about the y-axis.* The axis is the y-axis, so integrate in y. At height y the region runs from the parabola x = y² out to the line x = 1, so the far boundary gives R(y) = 1 (constant) and the near boundary gives r(y) = y². The curves meet where y² = 1, so y runs from 0 to 1. V = π∫₀¹[1² − (y²)²]dy = π∫₀¹(1 − y⁴)dy = π[y − y⁵/5]₀¹ = π(1 − 1/5) = 4π/5.

Final answer: 4π/5 cubic units (also accepted: 0.8π or 2.51). A correct answer identifies R = 1, r = y², limits 0 to 1, and subtracts the squares. π∫(1 − y²)²dy = 8π/15 uses (R − r)² and is wrong; π∫₀¹(1 − y²)dy = 2π/3 forgets to square r.

**11.** *Shell method for a region under a curve.* A vertical strip at position x has radius x (its distance from the y-axis) and height f(x) = x³. V = 2π∫₀¹x·x³dx = 2π∫₀¹x⁴dx = 2π[x⁵/5]₀¹ = 2π/5.

Final answer: 2π/5 cubic units (also accepted: 0.4π or 1.26). The working must show the integrand x·f(x) = x⁴, the coefficient 2π and the evaluation at 1. π/5 uses π instead of 2π; 2π∫₀¹x³dx = π/2 forgets the radius x; 2π∫₀¹x·x⁶dx squares the height, which the shell formula never does.

**12.** *Meaning of the radii and heights in the volume formulas.* R(x) is the outer radius: the distance from the axis of revolution to the boundary farther from it. r(x) is the inner radius: the distance from the axis to the nearer boundary. In the shell formula x is the radius of the shell, its distance from the axis of revolution, and f(x) is the height of the vertical strip that sweeps out the shell. The π in the washer formula comes from the area of a circular cross-section, πR² − πr² for an annulus, which is then integrated along the axis. The 2π in the shell formula comes from unrolling the cylindrical shell into a rectangle of length 2π × radius (the circumference) and height f(x), so the integrand is circumference × height with no square anywhere.

A correct answer names outer radius, inner radius, shell radius and strip height, and links π to the area of a circle and 2π to the circumference.
