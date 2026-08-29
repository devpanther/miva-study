# MTH_102 — Week 11 Summary

*Elementary Mathematics II (Calculus) · Week 11 (16 – 22 Nov 2026) · Topic: Definite Integrals — Volumes of Solids of Revolution*

## The 8 most examinable things this week

1. **Everything is one idea: V = ∫ₐᵇ A(x)dx.** Slice the solid into pieces so thin that each piece's volume is (a known area) × (a thickness), then integrate. Week 10 summed strips of area (height × dx); this week you sum slabs of volume (area × dx). Nothing else is new — the limits, the intersections and the top-minus-bottom test are all carried over unchanged.
2. **Disc method** — region revolved about an axis **that is part of its boundary**, so the cross-section perpendicular to the axis is a **solid circle** of radius R. Area πR², so **V = π∫ₐᵇ[f(x)]²dx** about the x-axis, and **V = π∫_c^d[g(y)]²dy** about the y-axis, where x = g(y). Condition: no gap between the region and the axis.
3. **Washer method** — same slicing, but there **is** a gap, so the cross-section is an annulus: **V = π∫ₐᵇ([R(x)]² − [r(x)]²)dx**, R the outer (far) radius, r the inner (near) radius. Condition: the region lies **entirely on one side** of the axis, and R ≥ r ≥ 0 throughout. **π∫(R² − r²) is not π∫(R − r)²** — you subtract *areas*, never radii.
4. **Shell method** — slice **parallel** to the axis instead. A shell of radius x, height h(x) and thickness dx unrolls into a slab 2πx by h(x) by dx, so **V = 2π∫ₐᵇ x·h(x)dx** about the y-axis (0 ≤ a < b), and **V = 2π∫_c^d y·h(y)dy** about the x-axis. Always **2π × radius × height × thickness**.
5. **The axis fixes the variable of integration, and the two families take opposite variables.** Disc/washer slices are ⟂ to the axis, so the variable runs **along** the axis: about the x-axis (or y = k) → **dx**; about the y-axis (or x = h) → **dy**. Shell slices are ∥ to the axis, so it is the other way round: about the y-axis (or x = h) → **dx**; about the x-axis (or y = k) → **dy**. Choosing the method is therefore also choosing which variable you must express everything in.
6. **Rotation about a line y = k or x = h changes only the radius, never the formula.** The radius is a **distance from the axis**: R = |f(x) − k| about y = k, and R = |x − h| about x = h. So V = π∫[f(x) − k]²dx (disc about y = k) and V = 2π∫(x − h)·h(x)dx or 2π∫(h − x)·h(x)dx about x = h, whichever keeps the radius positive. Never use f(x) itself as a radius unless the axis is y = 0.
7. **How to choose.** Ask what the slice perpendicular to the axis looks like. If each such slice is a disc or a washer whose radii you can write as functions of the variable **along** the axis, use disc/washer. If inverting the curve is impossible (y = 2x² − x³ cannot be solved for x) or the region's boundary changes formula, use **shells** — the same region often needs two washer integrals but only one shell integral, and vice versa. Both methods are always correct when they can be set up; they must give the same number, and that is your check.
8. **The four-step procedure from the deck**, in order: **(1)** sketch the region and identify the axis of revolution — *this determines the variable of integration*; **(2)** sketch the cross-section (disc, washer or shell) and pick the matching formula; **(3)** determine the boundaries of the solid; **(4)** set up the definite integral and integrate. Steps 1–3 are where the marks are lost; step 4 is Week 7 arithmetic.

## The setup, in the order it is done

| Step | What you do | What goes wrong if you skip it |
|---|---|---|
| 1 | Sketch the region and draw the axis of revolution | You cannot see whether the axis touches the region, so disc and washer look identical |
| 2 | Solve f(x) = g(x) (or the y-version) for the limits | You revolve the wrong interval |
| 3 | Decide the slice direction — ⟂ to the axis (disc/washer) or ∥ (shell) | You integrate dx when the radius is a function of y |
| 4 | Write the radius (or radii) as a **distance from the axis**, not as a y-value | Rotation about y = k comes out as if it were about y = 0 |
| 5 | Square the radii **separately** for a washer, then subtract | You compute π∫(R − r)²dx, which is a smaller, meaningless number |
| 6 | Integrate and attach π (disc/washer) or 2π (shell) | The answer is off by the very factor that makes it a volume |

## 0. Why the integrand is what it is

**Disc.** Cut the solid by a plane ⟂ to the x-axis at position x. Because every point of the region at that x has been swept through a full circle about the axis, the cut is a circle of radius R(x) = the distance from the axis to the curve. Its area is πR(x)². A slab of thickness dx has volume πR²dx, and V = π∫ₐᵇR(x)²dx.

**Washer.** If the region does not reach the axis, the same cut removes a concentric hole of radius r(x). Area = πR² − πr² = π(R² − r²). The hole must be punched out of the *area*, which is why the squares are taken before the subtraction.

**Shell.** Take a vertical strip of the region at x, of height h(x) and width dx, and revolve **that strip** about the y-axis. It sweeps a thin cylindrical tube of radius x and height h(x). Slit and unroll it: a rectangular slab of length 2πx (the circumference), height h(x) and thickness dx, so dV = 2πx·h(x)dx. Exactly, the tube's volume is π(x + dx)²h − πx²h = πh(2x·dx + dx²), and the dx² term vanishes in the limit — the approximation is exact to first order, which is all an integral needs.

## 1. Disc method

**V = π∫ₐᵇ[f(x)]²dx** (about the x-axis) — region bounded by y = f(x), the x-axis, x = a and x = b.
**V = π∫_c^d[g(y)]²dy** (about the y-axis) — region bounded by x = g(y), the y-axis, y = c and y = d.

**Worked example 1 (about the x-axis).** The region under y = √x from x = 0 to x = 4, revolved about the x-axis.
Radius R(x) = √x, so R² = x.
V = π∫₀⁴(√x)²dx = π∫₀⁴x dx = π[x²/2]₀⁴ = π(16/2) = **8π.**
Note the squaring kills the root before any integration is attempted; students who integrate √x first and square afterwards get π(16/3)² and nothing recoverable.

**Worked example 2 (about the y-axis).** The region bounded by y = x², the y-axis and the line y = 4 (first quadrant), revolved about the y-axis.
The axis is the y-axis, so slices ⟂ to it are horizontal and the variable is **y**. Invert: x = √y, so R(y) = √y and R² = y, with y from 0 to 4.
V = π∫₀⁴y dy = π[y²/2]₀⁴ = **8π.**
(The region here is the one Week 10 gave area 16/3 — the same region, a different question.)

**Worked example 3 (the volume of a sphere).** Revolve the semicircle y = √(r² − x²), −r ≤ x ≤ r, about the x-axis.
V = π∫₋ᵣʳ(r² − x²)dx = π[r²x − x³/3]₋ᵣʳ = π[(r³ − r³/3) − (−r³ + r³/3)] = π(2r³ − 2r³/3) = **4πr³/3.**
The cone follows the same way: y = (r/h)x on [0, h] about the x-axis gives V = π(r²/h²)∫₀ʰx²dx = π(r²/h²)(h³/3) = **πr²h/3.**

## 2. Washer method

**V = π∫ₐᵇ([R(x)]² − [r(x)]²)dx**, R = distance from axis to the **outer** boundary, r = distance to the **inner** boundary.

**Worked example 4 (about the x-axis).** Region between y = x and y = x², 0 ≤ x ≤ 1, revolved about the x-axis.
On (0, 1), x > x² (test x = ½: ½ > ¼), so the line is the outer boundary: R = x, r = x².
V = π∫₀¹(x² − x⁴)dx = π[x³/3 − x⁵/5]₀¹ = π(1/3 − 1/5) = **2π/15.**
*The wrong route:* π∫₀¹(x − x²)²dx = π∫₀¹(x² − 2x³ + x⁴)dx = π(1/3 − 1/2 + 1/5) = **π/30**, a quite different number. (R − r)² ≠ R² − r².

**Worked example 5 (limits from the intersections).** Region enclosed by y = 2x and y = x², about the x-axis.
Intersections: x² = 2x ⟹ x(x − 2) = 0 ⟹ x = 0, 2. At x = 1, 2x = 2 > 1 = x², so the line is outer.
V = π∫₀²(4x² − x⁴)dx = π[4x³/3 − x⁵/5]₀² = π(32/3 − 32/5) = 32π(5 − 3)/15 = **64π/15.**

**Worked example 6 (same region, other axis).** The region of example 4 (y = x, y = x², 0 ≤ x ≤ 1) about the **y-axis**.
Now slices ⟂ to the y-axis are horizontal, so the variable is **y** and both boundaries must be written x = x(y): the parabola is x = √y and the line is x = y, with 0 ≤ y ≤ 1. At y = ¼: √y = ½ > ¼ = y, so the **parabola** is now the outer boundary.
V = π∫₀¹(y − y²)dy = π[y²/2 − y³/3]₀¹ = π(1/2 − 1/3) = **π/6.**
Which curve is "outer" is decided by the axis, not by the picture in x — swapping the axis swapped the roles.

## 3. Shell method

**V = 2π∫ₐᵇ x·h(x)dx** (about the y-axis), h(x) = y_top(x) − y_bottom(x), 0 ≤ a < b.
**V = 2π∫_c^d y·h(y)dy** (about the x-axis), h(y) = x_right(y) − x_left(y), 0 ≤ c < d.

**Worked example 7 (about the y-axis, with a washer check).** Region bounded by y = x², y = 0 and x = 2, revolved about the y-axis.
Shells: radius x, height x², thickness dx, x from 0 to 2.
V = 2π∫₀²x·x²dx = 2π∫₀²x³dx = 2π[x⁴/4]₀² = 2π(4) = **8π.**
*Check by washers,* which needs the y-variable: at height y the solid runs from x = √y (inner) to x = 2 (outer), 0 ≤ y ≤ 4.
V = π∫₀⁴(4 − y)dy = π[4y − y²/2]₀⁴ = π(16 − 8) = **8π** ✓. Two methods, two variables, one number.

**Worked example 8 (where discs and washers cannot go).** Region bounded by y = 2x² − x³ and y = 0, revolved about the y-axis.
Roots: x²(2 − x) = 0 ⟹ x = 0, 2, and the curve is above the axis on (0, 2).
Shells: V = 2π∫₀²x(2x² − x³)dx = 2π∫₀²(2x³ − x⁴)dx = 2π[x⁴/2 − x⁵/5]₀² = 2π(8 − 32/5) = 2π(8/5) = **16π/5.**
A washer setup would need x as a function of y — that is solving a cubic for x, which you cannot do. This is the standard reason shells exist, and the standard exam signal for using them.

**Worked example 9 (about the x-axis, so the shells are horizontal).** Region bounded by y = √x, y = 0 and x = 4, revolved about the **x**-axis, by shells.
Shells parallel to the x-axis have radius y and thickness dy; at height y the strip runs from x = y² (the curve) to x = 4, so h(y) = 4 − y², with 0 ≤ y ≤ 2.
V = 2π∫₀²y(4 − y²)dy = 2π∫₀²(4y − y³)dy = 2π[2y² − y⁴/4]₀² = 2π(8 − 4) = **8π** ✓ — the same solid as worked example 1, by the other family of slices.

## 4. Rotation about a line y = k or x = h

The radius is always the **distance from the axis to the boundary**, so subtract the axis's coordinate:

| Axis | Disc / washer | Shell |
|---|---|---|
| x-axis (y = 0) | dx; R = f(x) | dy; radius = y, height = x_R(y) − x_L(y) |
| y = k | **dx**; R = \|f(x) − k\|, r = \|g(x) − k\| | dy; radius = \|y − k\| |
| y-axis (x = 0) | dy; R = g(y) | dx; radius = x, height = y_T(x) − y_B(x) |
| x = h | **dy**; R = \|g(y) − h\| | **dx**; radius = \|x − h\| |

**Condition.** The region must lie **entirely on one side** of the axis of revolution. If it straddles the axis the two halves sweep into the same space and the integral double-counts; take only the further boundary, i.e. revolve the larger half.

**Worked example 10 (washer about y = −1).** Region bounded by y = x², y = 0, x = 0 and x = 2, revolved about the line **y = −1**.
The axis is not a boundary of the region (the region's lowest edge is y = 0, one unit above it), so this is a **washer**, not a disc.
Outer radius (axis to the parabola): R = x² − (−1) = x² + 1. Inner radius (axis to y = 0): r = 0 − (−1) = 1.
V = π∫₀²[(x² + 1)² − 1²]dx = π∫₀²(x⁴ + 2x² + 1 − 1)dx = π∫₀²(x⁴ + 2x²)dx = π[x⁵/5 + 2x³/3]₀² = π(32/5 + 16/3) = π(96 + 80)/15 = **176π/15.**
Writing R = x² (forgetting the shift) gives π∫₀²x⁴dx = 32π/5, which is the volume about y = 0 — the wrong solid entirely.

**Worked example 11 (shell about x = 3).** The same region (y = x², y = 0, 0 ≤ x ≤ 2), revolved about the line **x = 3**.
The axis is vertical, so shells are vertical and the variable is **x**. The region lies to the **left** of x = 3, so the radius is 3 − x (positive on [0, 2]); the height is x².
V = 2π∫₀²(3 − x)x²dx = 2π∫₀²(3x² − x³)dx = 2π[x³ − x⁴/4]₀² = 2π(8 − 4) = **8π.**
Using x − 3 as the radius gives −8π; a negative volume means the radius was written the wrong way round, not that the answer needs a modulus at the end.

## 5. Choosing between disc/washer and shell

| The situation | Use |
|---|---|
| The axis is a boundary of the region, slices ⟂ to it are full circles | disc |
| There is a gap between the region and the axis, region on one side | washer |
| The curve cannot be inverted for the ⟂ variable (cubics, transcendentals) | shell |
| The region's ⟂ cross-section changes formula partway (two washer integrals) | shell — usually one integral |
| The region's ∥ cross-section changes formula partway | disc/washer |
| Region bounded by x = f(y), revolved about the y-axis | disc/washer in y |
| Region bounded by y = f(x), revolved about the y-axis | shell in x |
| Both set up cleanly | either — do one, use the other as a check |

## Commonly confused

- **Disc vs washer.** The axis being a *boundary of the region* is what makes it a disc. "y = x² revolved about the x-axis, 0 ≤ x ≤ 2" is a disc; the same region revolved about y = −1 is a washer, because the strip no longer reaches the axis.
- **π∫(R² − r²)dx vs π∫(R − r)²dx.** The first is right; the second is the commonest single error in the topic. For y = x over y = x² on [0, 1] they give 2π/15 and π/30 — not even close.
- **Squaring after integrating.** π[∫f(x)dx]² is not π∫[f(x)]²dx. Square the radius **first**, then integrate; that is also what makes ∫(√x)²dx trivial.
- **Forgetting the π (or writing 2π for a disc).** Disc and washer carry **π**, shell carries **2π** — π from the area of a circle, 2π from a circumference. Swapping them scales the answer by 2 or ½ with everything else right.
- **Integrating dx when you have rotated about the y-axis with washers.** Discs/washers about a vertical axis must be in **y**, which means inverting the curve first. A washer integral about the y-axis containing dx has already gone wrong.
- **Shells and washers take opposite variables.** About the y-axis: washers in dy, shells in dx. Getting this backwards is not a slip in bookkeeping; it means the slices are being taken in the wrong direction relative to the axis.
- **Radius vs y-value.** About y = k the radius is f(x) − k, not f(x); about x = h it is |x − h|, not x. The radius is a *distance*, so it is measured from the axis and it is never negative.
- **Shell height vs the function.** The height is top − bottom, exactly as in Week 10. When the lower boundary is the x-axis it happens to equal f(x); when it is another curve it is f(x) − g(x), and using f(x) alone silently adds the solid under g.
- **Which curve is "outer".** It is decided by distance from the *axis*, not by which curve is higher on the page. Revolving the region between y = x and y = x² about the x-axis makes the line outer; about the y-axis the parabola is outer.
- **A region that straddles the axis.** Revolving −1 ≤ y ≤ 1 about the x-axis does not give twice the volume; the two halves sweep the same solid. Use the half further from the axis, once.
- **Limits are values of the variable of integration.** In a dy-integral the limits are y-values, obtained from the intersection points' **y**-coordinates. Carrying x-limits into a dy-integral is the same error Week 10 punished in horizontal strips.
- **"Area between curves" answers reused as volumes.** ∫(f − g)dx is an area; nothing about it becomes a volume by multiplying by π at the end. The squares have to happen inside the integral.
- **The intersections still have to be solved for.** As in Week 10, an *enclosed* region's limits are the roots of f(x) = g(x); for volumes there is the extra trap that the axis (e.g. x = 2 or y = 4) may supply one limit and the curve the other.
- **Negative "volumes".** A negative result means an inner and outer radius were swapped, or a shell radius was written h − x when it should be x − h. Volumes are positive; fix the setup, do not take a modulus.
- **The variable inside the integrand.** Every symbol in a dx-integral must be a function of x, and every symbol in a dy-integral a function of y. A stray y in a dx-integral is the signal that the curve was never inverted.
- **Splitting.** If the outer and inner boundaries exchange roles inside the interval, or the boundary changes formula, split the integral at that point — one integral cannot represent two shapes, exactly as in Week 10.
- **The check nobody does.** Set the solid up the other way (shells if you used washers) and compare. Both are exact; disagreement locates the error immediately, and worked examples 7 and 9 above show the check working.

---

*Note on the source: this week's deck extracts as slide titles only — LEARNING OBJECTIVES, INTRODUCTION, VOLUMES BY INTEGRATION, then three slides headed DISC METHOD, a TASK, WASHER METHOD, DISC METHOD, WASHER METHOD, a TASK, three slides headed SHELL METHOD, a TASK, then Summary and Further Reading — because every formula, diagram and worked example sits inside a slide image that the text extractor cannot read. What does extract is the objectives (identify problems associated with volumes of objects by means of integration; obtain the volumes of objects by integration using the disc method, the washer method and the shell method), the introduction ("the applications of definite integrals to calculating volumes of solid shapes are considered. The idea will be to dissect the three dimensional objects into pieces that resemble discs or shells, whose volumes can be approximated. The volume of the object is obtained in the form of disks or a set of embedded shells, integrated over given intervals") and the four-step procedure quoted in point 8 above — sketch the area and determine the axis of revolution, "this determines the variable of integration"; sketch the cross-section (disc, shell, washer) and determine the appropriate formula; determine the boundaries of the solid; set up the definite integral and integrate. The week summary sheet adds only that there are two common categories of solid of revolution — a curve rotated about the x-axis and a region enclosed by two curves rotated about the x-axis — that disc, shell and washer are the three common methods, and an automobile-engine case study using the disc method. Every formula, statement and example above is the standard 100-level treatment of exactly those named objectives.*
