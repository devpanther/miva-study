# MTH_102 — Week 11 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 12, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** The region under y = √x, above y = 0, from x = 0 to x = 4, is rotated about the x-axis. The volume is
a) 16π   b) 8π   c) 4π   d) 32π/3

**2.** The region under y = x², above y = 0, from x = 0 to x = 2, is rotated about the x-axis. The volume is
a) 8π/3   b) 32π/3   c) 16π/5   d) 32π/5

**3.** The region under y = 1/x, above y = 0, from x = 1 to x = 2, is rotated about the x-axis. The volume is
a) π/2   b) π ln 2   c) 3π/8   d) π/4

**4.** Rotating the semicircle y = √(r² − x²), −r ≤ x ≤ r, about the x-axis gives a volume of
a) 2πr³/3   b) πr³   c) 4πr³/3   d) 2πr³

**5.** The region bounded by y = x² and y = 4 is rotated about the x-axis. The volume is
a) 512π/15   b) 128π/5   c) 64π/5   d) 256π/5

**6.** The region between y = x and y = x² is rotated about the line x = 2. The volume is
a) π/6   b) π/2   c) 2π/15   d) π/3

**7.** The region bounded by y = x³, y = 1 and x = 0 is rotated about the y-axis. The volume is
a) π/5   b) 2π/7   c) 3π/5   d) 3π/7

**8.** The region under y = sin x, above y = 0, from x = 0 to x = π, is rotated about the x-axis. The volume is
a) π²/2   b) 2π   c) π²   d) π²/4

**9.** The region bounded by y = (r/h)x, y = 0 and x = h (with r, h > 0) is rotated about the x-axis. The volume is
a) πr²h   b) πr²h/3   c) 2πr²h/3   d) πrh²/3

**10.** The region under y = 4 − x², above the x-axis, is rotated about the x-axis. The volume is
a) 256π/5   b) 128π/15   c) 32π/3   d) 512π/15

**11.** The region between y = x and y = x² is rotated about the line y = 1. The volume is
a) π/5   b) 8π/15   c) 2π/15   d) π/30

**12.** The region under y = eˣ, above y = 0, from x = 0 to x = 1, is rotated about the x-axis. The volume is
a) π(e − 1)   b) π(e² − 1)   c) π(e² − 1)/2   d) πe²/2

## Section B — Short answer (3)

**13.** The region bounded by y = x² and y = 2x is rotated about the line y = −2. Set up the definite integral and evaluate it. State clearly which curve gives the outer radius and why.

**14.** The region bounded by y = √x, y = 0 and x = 4 is rotated about the y-axis. Compute the volume **twice** — once by shells in x and once by washers in y — and state the inner and outer radii used in the y-setup.

**15.** The triangle bounded by y = x, y = 2 − x and y = 0 is rotated about the **x-axis**. Explain why a single disk integral will not do, set up the integrals required, and evaluate.

## Answers

**Section A**

1. **b) 8π** — π∫₀⁴(√x)²dx = π∫₀⁴x dx = π·8.
2. **d) 32π/5** — π∫₀²x⁴dx = π·32/5; 8π/3 is the area-style slip and 32π/3 drops the square.
3. **a) π/2** — π∫₁²x⁻²dx = π[−1/x]₁² = π(1 − ½); π ln 2 is what you get by forgetting to square.
4. **c) 4πr³/3** — π∫₋ᵣʳ(r² − x²)dx = π(2r³ − 2r³/3) = 4πr³/3, the sphere.
5. **d) 256π/5** — washer with R = 4, r = x² over [−2,2]: π∫₋₂²(16 − x⁴)dx = 256π/5; 512π/15 is the solid under y = 4 − x².
6. **b) π/2** — shells, radius 2 − x, height x − x²: 2π∫₀¹(2 − x)(x − x²)dx = 2π(1 − 1 + ¼).
7. **c) 3π/5** — disks in y of radius x = y^(1/3): π∫₀¹y^(2/3)dy = 3π/5; shells give 2π∫₀¹x(1 − x³)dx = 3π/5 too.
8. **a) π²/2** — π∫₀^π sin²x dx = π·(π/2); 2π forgets the square.
9. **b) πr²h/3** — π∫₀^h(rx/h)²dx = π(r²/h²)(h³/3), the cone formula.
10. **d) 512π/15** — π∫₋₂²(4 − x²)²dx = π∫₋₂²(16 − 8x² + x⁴)dx = 512π/15; 256π/5 is the *other* region, between y = x² and y = 4.
11. **a) π/5** — R = 1 − x², r = 1 − x: π∫₀¹[(1 − x²)² − (1 − x)²]dx = π∫₀¹(2x − 3x² + x⁴)dx = π(1 − 1 + 1/5).
12. **c) π(e² − 1)/2** — π∫₀¹e^(2x)dx = π[e^(2x)/2]₀¹ = π(e² − 1)/2; π(e − 1) forgets to square.

**Section B**

**13.** Curves meet where x² = 2x ⇒ x = 0, 2; on (0,2) the line y = 2x is above y = x², so it is farther from y = −2 and gives the outer radius. R = 2x + 2, r = x² + 2, so
V = π∫₀²[(2x + 2)² − (x² + 2)²]dx = π∫₀²(4x² + 8x + 4 − x⁴ − 4x² − 4)dx = π∫₀²(8x − x⁴)dx = π[4x² − x⁵/5]₀² = π(16 − 32/5) = **48π/5**.

**14.** Shells in x: radius x, height √x, x from 0 to 4: V = 2π∫₀⁴x^(3/2)dx = 2π[(2/5)x^(5/2)]₀⁴ = 2π(64/5) = **128π/5**.
Washers in y: the region's right boundary is the fixed line x = 4 and its left boundary is the curve x = y² (invert y = √x), with y from 0 to 2. So R = 4 (constant), r = y², and V = π∫₀²(16 − y⁴)dy = π(32 − 32/5) = 128π/5. ✓
The inner radius is y², not √y — √y is the wrong inversion; solving y = √x for x gives x = y².

**15.** The upper boundary of the region changes at x = 1 (from y = x to y = 2 − x), so no single formula f(x) describes the disk radius across [0,2]; the integral must be split there.
V = π∫₀¹x²dx + π∫₁²(2 − x)²dx = π[x³/3]₀¹ + π[−(2 − x)³/3]₁² = π/3 + π/3 = **2π/3**.
(Equivalently, by symmetry about x = 1, twice the first cone: 2·π/3.)
