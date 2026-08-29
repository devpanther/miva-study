# MTH_102 — Week 11

*Elementary Mathematics II (Calculus) · Week 11 (16 – 22 Nov 2026)*

*Note: the slide bodies in this week's deck are images and did not extract — only the learning objectives, the four-step setup procedure and the slide titles (disc, washer, shell, TASK) came through. The formulas and worked examples below are the standard ones for the three methods the deck names, supplied here so the scope is usable.*

## Most likely to be examined

1. Disk method about the x-axis: **V = π∫ₐᵇ [f(x)]² dx**.
2. Washer method: **V = π∫ₐᵇ ([R]² − [r]²) dx** — squares subtracted, *never* (R − r)².
3. Shell method: **V = 2π∫ₐᵇ (radius)(height) dx** — one power of the radius, factor 2π.
4. Finding the limits by solving f(x) = g(x) (intersections), not reading them off the picture.
5. Rotation about a line **y = k** or **x = h**: every radius becomes a *distance*, |curve − axis|.
6. Integrating in **y** (rewrite x = g(y)) when slices perpendicular to the axis are horizontal.
7. Deciding disk/washer vs shell from the geometry, and splitting a region when one formula fails on part of it.

## The deck's four-step procedure

1. Sketch the region and identify the axis of revolution — **this fixes the variable of integration**.
2. Sketch the cross-section (disc, washer or shell) and pick the matching formula.
3. Determine the boundaries of the solid (solve for the intersections).
4. Set up the definite integral and integrate.

## The one idea everything comes from

Slice the solid perpendicular to the axis of revolution. Each slice is a thin plate of thickness ds and **cross-sectional area A(s)**, so

  **V = ∫ₐᵇ A(s) ds**  (s = x if the axis is horizontal, s = y if the axis is vertical)

- Slice ⟂ to axis and the slice is a **full circle** ⇒ A = πR² (disk).
- Slice ⟂ to axis and the slice is an **annulus** (the axis is offset from the region, so there is a hole) ⇒ A = π(R² − r²) (washer).
- Slice **parallel** to the axis instead ⇒ the strip sweeps a **cylindrical shell**: unrolled it is a rectangle of length 2π·(radius), height h, thickness dx ⇒ dV = 2π·(radius)(height) dx.

**Symbols.** R = outer radius = distance from the axis of revolution to the *far* boundary of the region. r = inner radius = distance from the axis to the *near* boundary. radius (shell) = distance from the axis to the *strip itself*. height (shell) = length of the strip = (upper − lower) if the strip is vertical, (right − left) if horizontal. a, b = the values of the *variable of integration* at the two ends of the region.

**Radii when the axis moves.** Axis y = k, curve y = f(x): radius = |f(x) − k|. Axis x = h, strip at x: shell radius = |x − h|. Axis is the x-axis ⇒ k = 0; y-axis ⇒ h = 0.

**Choosing the variable.** Disks/washers: the variable of integration is the one measured **along** the axis (x for a horizontal axis, y for a vertical axis). Shells: the opposite one. If the axis is vertical and the boundary is given as y = f(x) that you cannot invert, use shells in x; if it inverts easily, washers in y work too — both must give the same number.

**Validity.** Disk/washer needs the axis to lie *outside* the interior of the region (touching an edge is fine); otherwise slices overlap on rotation and you must split the region. Shell needs the strip to run from one boundary of the region to the other without leaving it — if the "upper" curve changes partway, **split at the crossover** and add the integrals.

**Check (Pappus):** V = 2π·d̄·A, with A the region's area and d̄ the distance from its centroid to the axis. Also sanity-check against a sphere (4πr³/3) or cone (πr²h/3).

## Worked examples

**1. Disk, about the x-axis.** y = x², from x = 0 to 2, rotated about the x-axis.
V = π∫₀² (x²)² dx = π∫₀² x⁴ dx = π[x⁵/5]₀² = **32π/5**.

**2. Washer, about the x-axis.** Region between y = x and y = x². Intersections: x = x² ⇒ x(1 − x) = 0 ⇒ x = 0, 1. On (0,1), x > x², so the far curve from the x-axis is y = x: R = x, r = x².
V = π∫₀¹ (x² − x⁴) dx = π[x³/3 − x⁵/5]₀¹ = π(1/3 − 1/5) = **2π/15**.
(π∫₀¹(x − x²)² dx = π/30 is the classic wrong answer.)

**3. Shell, about the y-axis.** Same region, rotated about the y-axis. Vertical strip at x: radius = x, height = x − x².
V = 2π∫₀¹ x(x − x²) dx = 2π∫₀¹ (x² − x³) dx = 2π(1/3 − 1/4) = **π/6**.

**4. Rotation about x = 3 (a line, not an axis).** Region under y = x², above y = 0, from x = 0 to 2, about the vertical line x = 3. The region lies to the left of the axis, so shell radius = 3 − x (positive throughout), height = x².
V = 2π∫₀² (3 − x)x² dx = 2π∫₀² (3x² − x³) dx = 2π[x³ − x⁴/4]₀² = 2π(8 − 4) = **8π**.

**5. Rotation about y = −1 (washers with a shifted axis).** Same region, about y = −1. Far boundary is y = x² ⇒ R = x² − (−1) = x² + 1; near boundary is y = 0 ⇒ r = 0 − (−1) = 1.
V = π∫₀² [(x² + 1)² − 1²] dx = π∫₀² (x⁴ + 2x²) dx = π(32/5 + 16/3) = **176π/15**.

**6. Integrating in y.** Region bounded by y = x², x = 0 and y = 4, rotated about the **y-axis**. Horizontal slices are full disks of radius x = √y, y from 0 to 4.
V = π∫₀⁴ (√y)² dy = π∫₀⁴ y dy = π[y²/2]₀⁴ = **8π**.
Shell check in x: 2π∫₀² x(4 − x²) dx = 2π[2x² − x⁴/4]₀² = 2π(8 − 4) = 8π. ✓

**7. Splitting a region.** Triangle bounded by y = x, y = 2 − x, y = 0, about the y-axis. In x the top boundary changes at x = 1, so shells split: 2π∫₀¹ x·x dx + 2π∫₁² x(2 − x) dx = 2π/3 + 4π/3 = **2π**. In y no split is needed: washers with R = 2 − y, r = y give π∫₀¹[(2 − y)² − y²] dy = π∫₀¹(4 − 4y) dy = 2π. ✓ Choosing the right variable removed the split.

## Commonly confused

- **π∫(R² − r²) vs π∫(R − r)²** — areas of annuli subtract, radii do not. (R − r)² is always too small.
- **Forgetting to square** — π∫f(x) dx computes nothing; π∫[f(x)]² dx is the volume.
- **π vs 2π** — disks/washers carry π (area of a circle); shells carry 2π (circumference).
- **Squaring in shells** — the shell integrand is radius × height to the *first* power; squaring it is dimensionally wrong (that would be length⁴·dx).
- **Radius vs coordinate** — about y = k the radius is f(x) − k, not f(x); about x = h it is |x − h|, not x. Subtract *before* squaring: π∫[(f − k)² − (g − k)²] ≠ π∫(f² − g²) − stuff.
- **Which curve is R** — R is the one *farther from the axis*, which is not always the "upper" one. Rotating the region between y = x and y = x² about **y = 2**, the farther curve is y = x² (it is lower, hence more distant from y = 2): V = π∫₀¹[(2 − x²)² − (2 − x)²] dx = 8π/15.
- **Limits from the picture** — always solve f(x) = g(x); and when integrating in y the limits are y-values, not x-values.
- **Disk where a washer is needed** — if the region does not touch the axis there is a hole; the disk formula silently fills it in.
- **Region straddling the axis** — e.g. rotating about the x-axis a region partly below it: the radius is |y|, and if the region lies on both sides you must not add the two pieces as separate solids (they overlap). Rotate the larger side only, or split correctly.
- **"Area between curves" formula reused** — ∫(f − g) dx is an area, not a volume; the volume needs squares (washer) or the 2π·radius factor (shell).
