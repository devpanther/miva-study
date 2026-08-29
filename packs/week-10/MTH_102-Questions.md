# MTH_102 — Week 10 Questions
*Definite integrals: area between curves. Twelve multiple choice, three short answer. Answers at the bottom — work them before you look.*

## Multiple choice

**1.** By slide 4, if f(x) ≤ 0 on [a, b], the area between y = f(x) and the x-axis is
A. ∫ₐᵇ f(x)dx
B. |∫ₐᵇ f(x)dx|
C. −f(b) + f(a)
D. ∫ₐᵇ f(x)dx + c

**2.** In Example 1 the lecturer gets the limits for f(x) = 5x − x² by
A. reading them off the question
B. setting f′(x) = 0
C. solving 5x − x² = 0, giving x = 0 and x = 5
D. substituting x = 2 into f

**3.** ∫₀⁵(5x − x²)dx =
A. 125/6
B. 125/2
C. 125/3
D. −125/6

**4.** TASK 1: the area between f(x) = 6x − x² and the x-axis is
A. 18
B. 72
C. 108
D. 36

**5.** In Example 2, f(x) = x² − 1 on [0, 2], she splits at x = 1 because
A. x = 1 is halfway along
B. f ≤ 0 on [0,1] and f ≥ 0 on [1,2]
C. x = −1 lies outside [0, 2]
D. x³/3 − x is undefined at x = 1

**6.** That area is
A. 2
B. 2/3
C. 4/3
D. −2/3

**7.** Slide 8: two curves enclosed with no interval given. The limits come from
A. the roots of f(x) = 0
B. the roots of g(x) = 0
C. solving f(x) = g(x)
D. solving f′(x) = g′(x)

**8.** y = 3 − x and y = x² − 9 meet at
A. x = −4 and x = 3
B. x = −3 and x = 3
C. x = 4 and x = −3
D. x = 0 and x = 3

**9.** The area they bound is
A. 45/2
B. −73/6
C. 343/6
D. 104/3

**10.** For f(x) = 2 − x and g(x) = 4 − x², the correct integrand is
A. (2 − x) − (4 − x²)
B. (4 − x²) − (2 − x)
C. |(2 − x) − (4 − x²)|
D. (4 − x²) + (2 − x)

**11.** To locate where sin x meets cos x on [0, π/2], she
A. equates the derivatives
B. sets sin x + cos x = 0
C. tests x = π/2
D. divides to get tan x = 1, so x = π/4

**12.** The area between y = sin x and y = cos x for 0 ≤ x ≤ π/2 is
A. 2/√2 − 1
B. 0
C. 2 − 2√2
D. 2√2 − 2

## Short answer

**13.** State both cases of the slide 4 rule exactly as the deck gives them, and explain in one sentence why the second case needs a modulus while the first does not.

**14.** Work TASK 1 in full: find the area between f(x) = 6x − x² and the x-axis. Show where the limits come from, show the interior test point, and say why no modulus appears.

**15.** Work TASK 2 in full: find the area bounded by y = x² and y = 2 − x² for 0 ≤ x ≤ 2. Say why slide 8's single formula is not enough here, and state what a single integral over [0, 2] would have given.

---

## Answers

**1. B.** Below the axis the integral is negative, so the area is its magnitude. A is the first case of the rule, for f ≥ 0, and would report a negative area. C substitutes the limits into f instead of into an antiderivative. D adds a constant of integration to a definite integral, which never carries one.

**2. C.** "To determine the limits of integration (the points at which f(x) cuts the x-axis), we set f(x) = 0" — factorising to x(5 − x) = 0. A is false; the question gives no interval. B finds the turning point x = 5/2, not the roots. D is the *test* step, which comes after the limits and only decides the sign.

**3. A.** [5x²/2 − x³/3]₀⁵ = 125/2 − 125/3 = (375 − 250)/6 = 125/6 ≈ 20.83. B keeps 5x²/2 and drops the cubic term. C keeps the cubic term and drops the first. D evaluates lower minus upper, reversing the limits.

**4. D.** 6x − x² = 0 gives x = 0, 6; f(3) = 9 > 0; [3x² − x³/3]₀⁶ = 108 − 72 = 36. A integrates only to x = 3, stopping at the vertex rather than the root. B is the 216/3 = 72 term alone. C is 3(6)² alone, dropping the cubic term.

**5. B.** The curve is below the axis on the first piece and above it on the second, so each piece needs its own case of the slide 4 rule. A is a coincidence, not a reason. C is true but is the reason x = −1 is *discarded*, not the reason for splitting. D is false — the antiderivative is a polynomial, defined everywhere.

**6. A.** |∫₀¹(x² − 1)dx| + ∫₁²(x² − 1)dx = |−2/3| + 4/3 = 2/3 + 4/3 = 2. B is the unsplit integral ∫₀²(x² − 1)dx = 8/3 − 2 = 2/3 — which happens to equal the first piece's magnitude, so it looks right. C is the second piece only. D is the first piece with the modulus omitted.

**7. C.** "If f(x) and g(x) are enclosed without a specific interval given, we let f(x) = g(x), such that x = a and x = b are the bounds of the integration." A and B are the Part 1 method — where a *single* curve cuts the axis — and give the wrong points entirely. D finds where the curves are parallel, not where they meet.

**8. A.** 3 − x = x² − 9 rearranges to x² + x − 12 = 0, i.e. (x + 4)(x − 3) = 0. B solves x² − 9 = 0 instead, using only one curve. C gets the factorisation signs backwards, reading (x + 4)(x − 3) as x = 4, −3. D takes x = 0 as an intersection because 3 − 0 = 3 looks convenient; it is not a solution.

**9. C.** Integrand (3 − x) − (x² − 9) = 12 − x − x²; [12x − x²/2 − x³/3]₋₄³ = 45/2 − (−104/3) = 343/6 ≈ 57.17. A is the upper-limit value alone. B is 45/2 − 104/3, from failing to double the minus when subtracting a negative — the classic error here. D is the magnitude of the lower-limit value alone.

**10. B.** At the test point x = 1, f(1) = 1 and g(1) = 3, so g is on top and the integrand is g − f. A subtracts in the order the functions were named, which is the wrong way round here and gives −4.5. C uses a modulus to repair the wrong order; the deck never uses a modulus between two curves. D adds the curves, which computes nothing meaningful.

**11. D.** "let sin(x) = cos(x). Then sin(x)/cos(x) = 1 or tan(x) = 1, implying that x = π/4." A finds where cos x = −sin x, a different equation. B gives tan x = −1, so x = 3π/4, outside the interval. C is the endpoint, where sin and cos are 1 and 0 and do not meet.

**12. D.** A₁ = 2/√2 − 1 and A₂ = −1 + 2/√2, so A = 4/√2 − 2 = 2√2 − 2 ≈ 0.83. A is A₁ only, half the region. B is the single unsplit integral ∫₀^(π/2)(cos x − sin x)dx = (1 + 0) − (0 + 1) = 0 — the two lobes cancel exactly, which is precisely why the split is compulsory. C reverses the sign of the whole answer and is negative, so it cannot be an area.

**13.** Slide 4: "If f(x) ≥ 0 on [a, b], then the area under the curve y = f(x) over [a, b] is ∫ₐᵇf(x)dx. If f(x) ≤ 0 on [a, b], then the area under the curve y = f(x) over [a, b] is |∫ₐᵇf(x)dx|." The modulus is needed in the second case because when the curve lies below the axis every strip contributes a negative amount, so the definite integral comes out negative; an area cannot be negative, so its magnitude is taken. In the first case the integral is already non-negative and the modulus would do nothing.

**14.** Limits: set f(x) = 0, so 6x − x² = 0, x(6 − x) = 0, giving x = 0 and x = 6 — these are the points at which the curve cuts the x-axis, and with no interval given they are the limits of integration. Test point: take x = 3 in [0, 6]; f(3) = 6(3) − 3² = 18 − 9 = 9 > 0, so f(x) ≥ 0 across the whole interval. That is why no modulus appears: the first case of the slide 4 rule applies. Then A = ∫₀⁶(6x − x²)dx = [3x² − x³/3]₀⁶ = [3(36) − 216/3] − [0 − 0] = 108 − 72 = 36. Hence the area is 36 square units.

**15.** Slide 8's formula A = ∫ₐᵇ(f − g)dx requires f ≥ g across the whole of [a, b], and that fails here: x² = 2 − x² gives 2x² = 2, x = ±1, and x = 1 lies strictly inside [0, 2], so the curves cross on the interior and slide 12's A = A₁ + A₂ applies instead. Testing x = 0 gives x² = 0 against 2 − x² = 2, so 2 − x² is on top on [0, 1]; testing x = 2 gives 4 against −2, so x² is on top on [1, 2]. Then A₁ = ∫₀¹(2 − 2x²)dx = [2x − 2x³/3]₀¹ = 2 − 2/3 = 4/3, and A₂ = ∫₁²(2x² − 2)dx = [2x³/3 − 2x]₁² = (16/3 − 4) − (2/3 − 2) = 4/3 + 4/3 = 8/3. So A = 4/3 + 8/3 = 4 square units. A single integral ∫₀²[(2 − x²) − x²]dx = [2x − 2x³/3]₀² = 4 − 16/3 = −4/3 — negative, so it cannot be an area, and even its magnitude 4/3 is wrong, because the two pieces partly cancelled before the modulus could be applied.
