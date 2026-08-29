# Thursday — MTH_102 nightly check

*Area problems carried out: finding intersection points and using them as limits, splitting an interval at every root and every crossing, deciding top from bottom by a test point, computing an area with horizontal strips and against the y-axis, and evaluating a definite integral from the Riemann-sum definition — with the sign, limit, symmetry and orientation traps at each step.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The area enclosed between y = x³ and the x-axis for −1 ≤ x ≤ 2 is:
a) 15/4   b) 17/4   c) 4   d) 1/4

**2.** The area enclosed between y = x and y = x² from x = 0 to x = 1 is:
a) 1/2   b) 1/3   c) 1/6   d) −1/6

**3.** The area enclosed by y = 8 − x² and y = x² is:
a) 32/3   b) 32   c) 128/3   d) 64/3

**4.** The total area enclosed by y = x³ and y = x is:
a) 0   b) 1/2   c) 1/4   d) 1

**5.** The region bounded by x = y² and y = x − 2 is set up with horizontal strips. The correct integral is:
a) ∫₋₁²[y² − (y + 2)]dy
b) ∫₀⁴[(y + 2) − y²]dy
c) ∫₋₁²[(y + 2) − y²]dy
d) ∫₁⁴[√x − (x − 2)]dx

**6.** The area enclosed by y = x² and y = x + 6 is:
a) 95/6   b) −125/6   c) 125/3   d) 125/6

**7.** For ∫₁⁵f(x)dx approximated by n equal subintervals with right endpoints, the strip width and the sample points are:
a) Δx = 5/n and xᵢ = 5i/n
b) Δx = 4/n and xᵢ = 1 + 4i/n
c) Δx = 4/n and xᵢ = 4i/n
d) Δx = 1/n and xᵢ = 1 + i/n

**8.** The area of the region in the first quadrant bounded by y = x², the y-axis and the line y = 4 is:
a) 8/3   b) 8   c) 16/3   d) 64/3

**9. (explain why)** For y = x² − 4x on the interval 0 ≤ x ≤ 5, compute both the value of ∫₀⁵(x² − 4x)dx and the total area enclosed between the curve and the x-axis. Show where you split and why, and explain what the difference between the two numbers means.

**10. (explain why)** Find the area enclosed between y = sin x and y = cos x from x = 0 to x = π/2. Show how you locate the crossing, how you decide which curve is on top on each piece, and state what the single integral ∫₀^{π/2}(cos x − sin x)dx gives and why that is not the area.

**11. (explain why)** Evaluate the area of the region bounded by x = y² and the line y = x − 2, using horizontal strips. Show the intersection algebra, justify the order "right minus left", and say what the vertical-strip setup would have required instead.

**12. (explain why)** Evaluate ∫₀¹x²dx from the Riemann-sum definition using right endpoints, stating Δx and xᵢ and using Σᵢ₌₁ⁿi² = n(n + 1)(2n + 1)/6. Then state exactly what changes in the sum if the interval is [0, 2] instead, and check your answer against the Fundamental Theorem.

---

## Answers

**1. b** — *Split at the root, take magnitudes, add.* x³ changes sign at x = 0, which lies inside [−1, 2]. ∫₋₁⁰x³dx = [x⁴/4]₋₁⁰ = 0 − 1/4 = −1/4, so that piece has area 1/4; ∫₀²x³dx = 16/4 = 4. Total = 4 + 1/4 = 17/4. (a) is the unsplit integral ∫₋₁²x³dx = 4 − 1/4 = 15/4, the **signed** area — the classic answer to a question that was not asked; (c) keeps only the piece from 0 to 2, discarding the region to the left of the origin; (d) keeps only the piece from −1 to 0. Any answer smaller than 4 is impossible on inspection, since the right-hand piece alone has area 4.

**2. c** — *Test a point to fix the order of subtraction, then integrate the difference.* At x = ½, the line is at 1/2 and the parabola at 1/4, so the line is on top. A = ∫₀¹(x − x²)dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6. (a) is ∫₀¹x dx, the area under the line alone, i.e. forgetting to subtract the lower boundary; (b) is ∫₀¹x²dx, the area under the parabola alone; (d) subtracts in the order the question happens to name the curves, (x² − x), and reports the negative as an area.

**3. d** — *Intersections give the limits; the region is symmetric, but the shortcut is 2∫₀², not ∫₀².* x² = 8 − x² ⟹ x = ±2, and at x = 0 the curve 8 − x² is above. A = ∫₋₂²[(8 − x²) − x²]dx = ∫₋₂²(8 − 2x²)dx = [8x − 2x³/3]₋₂² = (16 − 16/3) − (−16 + 16/3) = 32 − 32/3 = 64/3. (a) is ∫₀²(8 − 2x²)dx = 32/3, exactly half — the symmetry was noticed and then not used; (b) is ∫₋₂²8 dx = 32, dropping the −2x² term; (c) doubles the correct answer, applying the symmetry factor 2 to an integral that already ran over the whole interval.

**4. b** — *Two curves crossing at an interior point enclose two lobes, and both must be counted.* x³ = x ⟹ x(x − 1)(x + 1) = 0 ⟹ x = −1, 0, 1. On (−1, 0), at x = −½: x³ = −1/8 is above x = −1/2, so ∫₋₁⁰(x³ − x)dx = [x⁴/4 − x²/2]₋₁⁰ = 0 − (1/4 − 1/2) = 1/4. On (0, 1), at x = ½: x = 1/2 is above x³ = 1/8, so ∫₀¹(x − x³)dx = 1/2 − 1/4 = 1/4. Total = 1/2. (a) is the single integral ∫₋₁¹(x − x³)dx, which is 0 because the integrand is odd on a symmetric interval — and applying a modulus to it still gives 0, which is why the modulus-at-the-end habit fails here more visibly than anywhere else; (c) counts one lobe only, forgetting that x = 0 is a third intersection; (d) doubles the interval length instead of the lobe area.

**5. c** — *Horizontal strips run from the left boundary to the right boundary, and the limits are y-values.* Write the line as x = y + 2 and solve y² = y + 2 ⟹ y² − y − 2 = 0 ⟹ y = −1, 2. At y = 0 the line gives x = 2 and the parabola x = 0, so the line is on the right and the integrand is (y + 2) − y². (a) subtracts right from left and yields −9/2; (b) uses the **x**-coordinates of the region, 0 and 4, as if they were y-limits — a change of variable must change the limits with it; (d) is a single integral in x, which cannot represent this region: for 0 ≤ x ≤ 1 the lower boundary is y = −√x, not the line, so the x-setup needs two integrals.

**6. d** — *Solve for the intersections, check the factorisation, then integrate top minus bottom.* x² = x + 6 ⟹ x² − x − 6 = 0 ⟹ (x − 3)(x + 2) = 0 ⟹ x = −2, 3; between them the line is on top (at x = 0, 6 > 0). A = ∫₋₂³(x + 6 − x²)dx = [x²/2 + 6x − x³/3]₋₂³ = 27/2 − (−22/3) = 81/6 + 44/6 = 125/6. (a) is 95/6, what you get from the limits −3 and 2 — the roots with their signs flipped, the commonest slip in factorising x² − x − 6; (b) subtracts parabola minus line; (c) mishandles the common denominator at the end, adding 27/2 and 22/3 as though both were thirds.

**7. b** — *Δx is the interval length over n, and the right endpoint is a + iΔx — the offset a is not optional.* Here b − a = 5 − 1 = 4, so Δx = 4/n, and the right end of the i-th subinterval is 1 + i(4/n). (a) uses b rather than b − a for the length and then starts the sample points at the origin; (c) has the right Δx but drops the offset, so the sample points sweep [0, 4] instead of [1, 5] — they land in the wrong place while the width is right, which is why this one survives a careless check; (d) is the reflex Δx = 1/n, correct only when the interval has length 1.

**8. c** — *Bounded by the y-axis means the strips are horizontal and the integration is in y.* Invert the curve: x = √y, and the strips run from x = 0 to x = √y for 0 ≤ y ≤ 4. A = ∫₀⁴√y dy = [(2/3)y^{3/2}]₀⁴ = (2/3)(8) = 16/3. (a) is ∫₀²x²dx = 8/3, the region on the **other** side of the parabola, between the curve and the x-axis — the two regions are complementary, not identical; (b) is the enclosing rectangle 2 × 4 = 8, and indeed 8 − 8/3 = 16/3, which is the alternative route; (d) is ∫₀⁴y²dy, obtained by renaming the variable in x² without actually inverting the relation.

**9.** *Concept: the signed value of an integral and the area it bounds are different numbers, and the split happens at the roots of the integrand.* The roots are x² − 4x = x(x − 4) = 0, so x = 0 and x = 4; only x = 4 is interior to [0, 5]. The parabola opens upward, so it is **below** the axis on (0, 4) and **above** it on (4, 5).
∫₀⁴(x² − 4x)dx = [x³/3 − 2x²]₀⁴ = 64/3 − 32 = −32/3.
∫₄⁵(x² − 4x)dx = (125/3 − 50) − (64/3 − 32) = 61/3 − 18 = 7/3.
So the **signed** integral is ∫₀⁵(x² − 4x)dx = −32/3 + 7/3 = **−25/3**, and the **total area** is 32/3 + 7/3 = 39/3 = **13**.
The difference is the whole point of the week: the integral treats the portion below the axis as negative and subtracts it, so −25/3 says "there is 32/3 more region below the axis than above it"; the area question asks for ∫₀⁵|x² − 4x|dx, which adds the magnitudes and gives 13. A student who never splits reports −25/3, notices it is negative, takes the modulus and reports 25/3 — a number that is neither the signed value nor the area.

**10.** *Concept: two curves crossing inside the interval force a split, and a symmetric crossing makes the unsplit integral vanish.* The crossing is where sin x = cos x, i.e. tan x = 1, i.e. **x = π/4** in [0, π/2].
On (0, π/4), test x = 0: cos 0 = 1 > sin 0 = 0, so **cos is on top**.
∫₀^{π/4}(cos x − sin x)dx = [sin x + cos x]₀^{π/4} = (√2/2 + √2/2) − (0 + 1) = √2 − 1.
On (π/4, π/2), test x = π/2: sin = 1 > cos = 0, so **sin is on top**.
∫_{π/4}^{π/2}(sin x − cos x)dx = [−cos x − sin x]_{π/4}^{π/2} = (0 − 1) − (−√2/2 − √2/2) = √2 − 1.
**Total area = 2(√2 − 1) = 2√2 − 2 ≈ 0.83.**
The single integral ∫₀^{π/2}(cos x − sin x)dx = [sin x + cos x]₀^{π/2} = (1 + 0) − (0 + 1) = **0**. That is the *signed* area of the region: the two lobes are congruent reflections of one another about x = π/4, so one enters positively and the other negatively and they cancel exactly. It is not the area, and no modulus applied afterwards can recover it, because the cancellation occurred inside the integral. A zero answer to an area question is always a signal that a crossing was missed.

**11.** *Concept: horizontal strips, with the limits taken as y-values and the integrand as right boundary minus left.* Express both boundaries as functions of y: the parabola is x = y², and the line y = x − 2 rearranges to x = y + 2. Equating, y² = y + 2 ⟹ y² − y − 2 = 0 ⟹ (y − 2)(y + 1) = 0 ⟹ **y = −1 and y = 2** (corner points (1, −1) and (4, 2)). Test y = 0: the line gives x = 2, the parabola x = 0, so the **line is the right boundary** throughout −1 ≤ y ≤ 2. A horizontal strip has width (x_right − x_left) and thickness dy, and that width must be positive, which is what fixes the order:
A = ∫₋₁²[(y + 2) − y²]dy = [y²/2 + 2y − y³/3]₋₁²
 = (2 + 4 − 8/3) − (1/2 − 2 + 1/3) = 10/3 − (−7/6) = 10/3 + 7/6 = 20/6 + 7/6 = **27/6 = 9/2.**
With vertical strips the same region needs **two** integrals, because the lower boundary changes formula at x = 1: for 0 ≤ x ≤ 1 the strip runs from y = −√x to y = √x (both ends on the parabola), and for 1 ≤ x ≤ 4 it runs from y = x − 2 up to y = √x. Same answer, twice the work, and one extra opportunity to lose the lower half of the parabola.

**12.** *Concept: the definite integral is a limit of Riemann sums, and the Fundamental Theorem is a shortcut for that limit, not a separate definition.* On [0, 1] with n equal subintervals, **Δx = (1 − 0)/n = 1/n** and the right endpoint of the i-th subinterval is **xᵢ = 0 + i(1/n) = i/n**. The Riemann sum is
Σᵢ₌₁ⁿ f(xᵢ)Δx = Σᵢ₌₁ⁿ (i/n)²(1/n) = (1/n³)Σᵢ₌₁ⁿ i² = (1/n³)·n(n + 1)(2n + 1)/6 = (n + 1)(2n + 1)/(6n²).
Expanding, (2n² + 3n + 1)/(6n²) = 1/3 + 1/(2n) + 1/(6n²) → **1/3** as n → ∞. So ∫₀¹x²dx = 1/3.
On [0, 2] two things change and only two: **Δx = 2/n** and **xᵢ = 2i/n**. The sum becomes Σ(2i/n)²(2/n) = (8/n³)Σi² = 8·(n + 1)(2n + 1)/(6n²) → 8/3. Note that both the sample points and the width scale — changing only one of them is the standard error, and it is why Δx = 1/n must never be written by reflex.
Check by the Fundamental Theorem: [x³/3]₀¹ = 1/3 ✓ and [x³/3]₀² = 8/3 ✓. The theorem replaces a summation identity and a limit with one antiderivative and two substitutions; the definition is what it is standing in for, and it is the definition that explains why the result is a signed area.
