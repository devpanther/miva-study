# Monday — MTH_102 nightly check

*Volumes of revolution as concepts: what the solid is, why each integrand is a cross-sectional area, where the radius is measured from, why a washer subtracts squared radii, what changes when the axis moves off a coordinate axis, and when the variable of integration must be y.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** In the disk formula V = π∫ₐᵇ [f(x)]² dx, the factor π[f(x)]² is:
a) the circumference of the solid at x
b) the volume of the slice at x
c) the area of the circular cross-section cut by the plane through x perpendicular to the x-axis
d) the curved surface area of the solid between a and x

**2.** A region with f(x) > g(x) > 0 on [a,b] is rotated about the x-axis. The volume is π∫ₐᵇ(f² − g²)dx and not π∫ₐᵇ(f − g)²dx because:
a) the cross-section is an annulus, and its area is the big disk's area minus the small disk's area — a difference of squares, whereas (f − g)² is the square of a difference
b) (f − g)² is harder to integrate, so the expanded form is preferred
c) the two expressions are equal, but the first is conventional
d) (f − g)² would give the area of the plane region rather than the volume

**3.** A region lying entirely above the x-axis, under y = f(x) and above y = 0, is rotated about the line y = −2. The outer radius at x is:
a) f(x)
b) f(x) − 2
c) 2 − f(x)
d) f(x) + 2

**4.** The region between y = x and y = x² on [0,1] is rotated about the line y = 2. Which curve supplies the outer radius?
a) y = x, because it is the upper curve
b) y = x², because it is the curve farther from the line y = 2
c) neither — the radii are equal, so the volume is zero
d) y = x on [0, ½] and y = x² on [½, 1], since they swap over

**5.** In the shell formula dV = 2π·(radius)·(height)·dx, the factor 2π appears because:
a) unrolling the thin cylindrical shell gives a flat rectangle whose length is the shell's circumference, 2π × radius
b) each vertical strip generates two shells, one on each side of the axis
c) the area of a circle, πr², is doubled to account for both faces of the shell
d) the shell is swept through a full turn, and 2π converts degrees to radians

**6.** Using disks about the y-axis, a curve given as y = f(x) must first be rewritten as x = g(y) because:
a) integrals in y are always easier than integrals in x
b) the disk formula only accepts functions of y by convention
c) rotating about a vertical axis reverses the roles of the coordinates, so f must be replaced by its negative
d) the slices perpendicular to the y-axis are horizontal, so the disk radius must be expressed as a length measured in the x-direction at a given height y

**7.** The plain disk formula (rather than a washer) is legitimate exactly when:
a) the axis of revolution is horizontal
b) the region touches the axis of revolution along the whole interval, so the slices are full circles with no hole
c) the bounding function is non-negative on [a,b]
d) the region is bounded and the integrand is continuous

**8.** The region under y = 4 − x², above the x-axis, from x = −2 to x = 2, is rotated about the y-axis. A student writes 2π∫₋₂² x(4 − x²)dx and obtains 0. The reason is:
a) the solid really has zero volume, since the region is symmetric about the y-axis
b) the height should have been squared, and squaring removes the sign problem
c) the shell radius is the distance |x|, so the negative half contributes a negative integrand; the left and right halves sweep the same solid, so one should integrate from 0 to 2 with radius x
d) the limits should be the y-values 0 and 4, not the x-values −2 and 2

**9. (explain why)** Explain, in terms of what a cross-section of the solid actually looks like, why the washer integrand is π(R² − r²) and not π(R − r)². State what R and r mean.

**10. (explain why)** The disk integrand contains a squared radius but the shell integrand contains the radius only to the first power. Explain why, by saying what each element of volume is geometrically.

**11. (explain why)** Explain how the axis of revolution fixes the variable of integration for the disk/washer method, and why the very same axis forces the opposite variable when you use shells.

**12. (explain why)** A region lies above y = 0 and below y = f(x) on [a,b]. Explain precisely what changes in the washer setup when the axis moves from the x-axis to the line y = k with k < 0, and explain why you cannot get the new volume by computing the volume about the x-axis and then adding a correction for the shift.
