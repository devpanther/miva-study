# MTH_102 — Week 11 Questions

*Volumes of solids of revolution: disc, washer and shell, exactly as the deck teaches them. Twelve multiple choice, three short answer. Answers at the bottom — work them before you look.*

## Multiple choice

**1.** The deck's disc-method formula for y = f(x) revolved about the x-axis is
A. V = 2π∫ₐᵇ x f(x) dx
B. V = π∫ₐᵇ [R(x)]² dx
C. V = π∫ₐᵇ R(x) dx
D. V = ∫ₐᵇ [R(x)]² dx

**2.** Disc Example 1: R(x) = (−x + 1), a = 0, b = 1. The volume is
A. π/3
B. π/2
C. −π/3
D. π

**3.** TASK: f(x) = √x, the x-axis, x = 1 and x = 4, about the x-axis. The volume is
A. 14π/3
B. 15π/2
C. 8π
D. 17π/2

**4.** Washer Example 1 revolves the region bounded by y = x², y = x⁵, x = 0, x = 1 about the x-axis. The outer radius R(x) is
A. x⁵, the smaller function
B. x² − x⁵, the height of the region
C. x², the curve farther from the x-axis on [0, 1]
D. √y, the inverse of x²

**5.** π∫₀¹ ([x²]² − [x⁵]²) dx =
A. 9π/220
B. 16π/55
C. π/6
D. 6π/55

**6.** Washer Example 2 revolves the region bounded by x = y², x = 3 about the y-axis. She uses
A. R = 3, r = y², limits 0 to √3
B. R = y², r = 3, limits 0 to √3
C. R = 3, r = y², limits 0 to 3
D. R = 3, r = y⁴, limits 0 to 9

**7.** In V = 2π∫ₐᵇ x f(x) dx, the two factors x and f(x) are
A. the height of the shell and its radius
B. the thickness and the circumference
C. the radius of revolution and the height of the strip
D. the radius and its square

**8.** Shell Example 1 rotates y = 2x² − x³, y = 0 about the y-axis. The limits are
A. 0 and 1, where the curve is increasing
B. 0 and 3, from the degree of the polynomial
C. −2 and 2, by symmetry
D. 0 and 2, from setting f(x) = 0

**9.** 2π∫₀² (2x³ − x⁴) dx =
A. 16π/5
B. 8π/5
C. 64π/5
D. 16π

**10.** In Shell Example 2 she writes f(y) = 1 − y². It is
A. √x rewritten with x replaced by y
B. the outer radius minus the inner radius
C. the length of the horizontal strip, from x = y² across to x = 1
D. the height of the region above the x-axis

**11.** TASK: the region under y = x² over [0, 2] rotated about y = −1. The radii are
A. R = x², r = 0
B. R = x² − 1, r = 1
C. R = x² + 1, r = 0
D. R = x² + 1, r = 1

**12.** The washer integrand is [R]² − [r]², not (R − r)², because
A. (R − r)² is negative whenever r is bigger than R
B. the cross-section is an annulus, of area πR² − πr² — the hole is removed, and (R − r)² is not that area
C. the deck's formula only applies when r = 0
D. R − r is the height of a strip, which belongs to the shell formula

## Short answer

**13.** Write out the three formulas from the deck's SUMMARY slide exactly as it gives them, and say in one line what each of R(x), r(x), x and f(x) measures. State which formula carries π and which carries 2π, and why.

**14.** Work the washer TASK in full: the region under y = x² over [0, 2], rotated about the line y = −1. State both radii, expand, integrate, and give the number. Name the one step where the shifted axis has to be handled.

**15.** The shell slide says "The shell method is used when integrating along an axis parallel to the axis of revolution." Test that sentence against her own Shell Example 1 and Shell Example 2, and say what the sentence should read.

---

## Answers

**1. B.** The deck states V = π∫ₐᵇ[R(x)]²dx, with the radius squared and π outside. A is the shell formula. C forgets the square, so it computes an area-like quantity, not a volume. D drops the π, which is the area of the circular cross-section.

**2. A.** V = π∫₀¹[(−x + 1)]²dx = π[−(−x + 1)³/3]₀¹ = π(0 − (−1/3)) = π/3. B is π∫₀¹(1 − x)dx — the square was dropped. C comes from writing the antiderivative as +(−x+1)³/3 and losing the minus that the inner derivative −1 supplies. D treats the radius as the constant 1 rather than the shrinking (1 − x).

**3. B.** R(x) = √x, so [√x]² = x and V = π∫₁⁴ x dx = π[x²/2]₁⁴ = π(8 − 1/2) = 15π/2. A integrates √x without squaring it, giving 14π/3. C substitutes only the upper limit. D adds the two limit values instead of subtracting.

**4. C.** On [0, 1], x² ≥ x⁵, and the axis is the x-axis, so x² is the farther boundary and gives the outer radius; x⁵ is the inner one. A reverses them, which flips the sign of the answer. B is the height of the region, which is the shell integrand, not a washer radius. D inverts the function, which is only done when integrating in y.

**5. D.** π∫₀¹(x⁴ − x¹⁰)dx = π[x⁵/5 − x¹¹/11]₀¹ = π(1/5 − 1/11) = 6π/55. A is π∫₀¹(x² − x⁵)²dx = 9π/220, the classic "square the difference" error. B adds 1/5 and 1/11 instead of subtracting. C forgets to square both radii, giving π(1/3 − 1/6) = π/6.

**6. A.** The axis is the y-axis; the far boundary is the line x = 3, so R = 3, and the near boundary is the parabola, so r = y². Setting y² = 3 gives the upper limit √3. B swaps outer and inner. C uses the x-value 3 as a y-limit — the limits must be values of the variable of integration. D squares y² a second time before it reaches the formula, which already squares it.

**7. C.** x is the distance from the axis of revolution out to the strip, and f(x) is the strip's height; 2π·radius is the circumference of the unrolled shell. A swaps them. B is the right picture with the wrong labels — the thickness is dx. D invents a square that the shell formula does not have.

**8. D.** She sets f(x) = 0: 2x² − x³ = x²(2 − x) = 0, giving x = 0 and x = 2. A guesses from the shape of the graph rather than solving. B reads the limit off the degree of the polynomial, which means nothing. C imposes a symmetry the curve does not have — 2x² − x³ is not even.

**9. A.** 2π[x⁴/2 − x⁵/5]₀² = 2π(8 − 32/5) = 2π(8/5) = 16π/5. B uses π instead of 2π, the single most common shell slip. C keeps only the x⁵/5 term with the 2π. D forgets to subtract the second term at all, giving 2π(8).

**10. C.** The strip is horizontal at height y; it begins on the curve, where x = y², and ends at the region's right edge, the line x = 1, so its length is 1 − y². A confuses inverting the function with renaming the variable — y = √x inverts to x = y², not to 1 − y². B describes a washer, and there are no radii being subtracted here. D describes a vertical strip, but this integral is in y.

**11. D.** Every radius is a distance from y = −1: the far boundary y = x² gives R = x² − (−1) = x² + 1, and the near boundary y = 0 gives r = 0 − (−1) = 1. A ignores the shifted axis completely. B subtracts 1 instead of adding it, mistaking the direction of the shift. C shifts the outer radius correctly but leaves the inner one at 0, filling in a hole that is genuinely there.

**12. B.** The cross-section is a disc with a disc removed, so its area is πR² − πr²; that is what the formula integrates. A is false in the deck's setting — R is defined as the outer radius, so R ≥ r, and (R − r)² would be positive anyway; the objection is that it is the wrong quantity, not that it has the wrong sign. C is untrue: with r = 0 the washer formula reduces to the disc formula, which is when it is not needed. D is a true statement about the shell formula, but it does not explain why the washer subtracts squares.

**13.** The SUMMARY slide gives: disc, V = π∫ₐᵇ[R(x)]²dx; washer, V = π∫ₐᵇ([R(x)]² − [r(x)]²)dx; shell, V = 2π∫ₐᵇ x f(x)dx. R(x) is the outer radius — the distance from the axis of revolution to the farther boundary of the region. r(x) is the inner radius — the distance to the nearer boundary. In the shell formula x is the radius of revolution, the distance from the axis to the strip, and f(x) is the height of that strip. Disc and washer carry π because the cross-section is a circle or an annulus and π is what turns a radius into an area. The shell carries 2π because the cross-section is a cylinder unrolled into a rectangle whose length is the circumference 2π·radius.

**14.** The region sits between y = 0 and y = x² for 0 ≤ x ≤ 2, and the axis has moved to y = −1, so both radii are distances from that line: R(x) = x² − (−1) = x² + 1 for the far boundary, r(x) = 0 − (−1) = 1 for the near one. The region never touches y = −1, so there is a hole and this is a washer.
V = π∫₀²([x² + 1]² − [1]²)dx = π∫₀²(x⁴ + 2x² + 1 − 1)dx = π∫₀²(x⁴ + 2x²)dx = π[x⁵/5 + 2x³/3]₀² = π(32/5 + 16/3) = π(96 + 80)/15 = 176π/15 cubic units.
The step that must be handled is the shift itself: subtract the axis from each boundary **before** squaring. Squaring first and then adding 1, π∫₀²(x⁴ + 1 − 1)dx = 32π/5, is a different and wrong answer.

**15.** Her own examples contradict the sentence. Shell Example 1 rotates about the **y-axis** and integrates **dx**; Shell Example 2 rotates about the **x-axis** and integrates **dy**. In both, the variable of integration runs **perpendicular** to the axis of revolution, not parallel to it. The sentence should read: the shell method is used when integrating along an axis **perpendicular** to the axis of revolution. That is also what distinguishes it from the disc and washer methods, where the variable of integration runs **along** the axis of revolution — Disc Example 1 rotates about the x-axis and integrates dx, Washer Example 2 rotates about the y-axis and integrates dy. The formulas on the slide are correct; only the describing sentence is wrong, so nothing computed from that slide is affected.
