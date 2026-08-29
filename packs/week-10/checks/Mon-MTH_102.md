# Monday — MTH_102 nightly check

*Conceptual session on Week 10 area between curves exactly as the lecturer builds it: the two-case rule on slide 4 (∫ₐᵇf(x)dx when f(x) ≥ 0, |∫ₐᵇf(x)dx| when f(x) ≤ 0); finding limits by setting f(x) = 0 and testing an interior point; splitting at a root when the curve crosses the axis inside the interval; the two-curve rule A = ∫ₐᵇ(f(x) − g(x))dx with its condition f(x) ≥ g(x) and limits from f(x) = g(x); and slide 12's A = A₁ + A₂ when the curves intersect at c ∈ (a, b), including why one integral over the whole interval lets the pieces cancel.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Slide 4 gives two formulas for the area between y = f(x) and the x-axis over [a, b]. What decides which one you use?
A. The sign of f(x) on [a, b]: the plain integral ∫ₐᵇf(x)dx if f(x) ≥ 0, the modulus |∫ₐᵇf(x)dx| if f(x) ≤ 0
B. Whether a and b are themselves positive numbers
C. Whether the interval [a, b] is symmetric about the origin
D. Whether f is increasing or decreasing on [a, b]

**2.** In Example 1 she solves 5x − x² = 0 to get x = 0 and x = 5, and then writes 'Taking any point, say 2 in [0,5], we see that f(2) = 5(2) − 2² = 6 > 0.' What is that second step for?
A. To find out whether f is positive or negative between the roots, and so which case of the slide 4 rule to apply
B. To check that the two roots were computed correctly
C. To find the maximum value of f on the interval
D. To supply a third limit of integration

**3.** Slide 8 states A = ∫ₐᵇ(f(x) − g(x))dx. What condition does the slide attach to this formula, and what does that condition do?
A. f(x) ≥ 0 on [a, b], so that the region lies above the x-axis
B. f(x) ≥ g(x) on [a, b], so that the subtraction is top minus bottom and every strip height is positive
C. a ≥ 0 and b ≥ 0, so that the limits are non-negative
D. Neither curve may cross the x-axis on [a, b]

**4.** Two curves enclose a region and the question gives no interval. Where do the limits a and b come from?
A. From the roots of f(x) = 0
B. From solving f(x) = g(x)
C. From the turning points of f(x) − g(x)
D. They are taken as 0 and 1 by convention

**5.** Slide 12 replaces one integral with A = A₁ + A₂ when f and g intersect at c strictly inside [a, b]. What goes wrong with a single integral ∫ₐᵇ(f(x) − g(x))dx there?
A. The antiderivative is undefined at x = c
B. Every interval must be halved before integrating
C. f − g changes sign at c, so the piece where g is on top enters negatively and partly or wholly cancels the piece where f is on top
D. A definite integral is only defined when the integrand keeps a constant sign

**6.** In Example 1 on slides 13–14 the total area between y = sin x and y = cos x on [0, π/2] is 2√2 − 2, but the single unsplit integral ∫₀^(π/2)(cos x − sin x)dx = [sin x + cos x]₀^(π/2) = (1 + 0) − (0 + 1) = 0. What does that show?
A. That sin x and cos x never actually meet on [0, π/2]
B. That the antiderivative [sin x + cos x] must be wrong
C. That a single integral across an interior crossing measures the difference of the two lobes, not their total, and vanishes entirely when the lobes are congruent
D. That the area between any two curves over a symmetric interval is zero

**7.** The SUMMARY slide writes: 'The area bounded by the region of a function f(x) defined on [a, b] is given by ∫ₐᵇf(x)dx.' Compared with slide 4, what has been left out?
A. The requirement that a < b
B. The constant of integration c
C. The requirement that f be differentiable on [a, b]
D. The condition f(x) ≥ 0, and with it the whole second case, |∫ₐᵇf(x)dx| for f(x) ≤ 0

**8.** In Example 2 on slide 10 the lecturer names f(x) = 2 − x first and g(x) = 4 − x² second, then integrates (g(x) − f(x)). Why that order?
A. Because g was defined second, and the second function is always the one subtracted from
B. Because g is a quadratic and quadratics are always taken as the upper curve
C. Because the region lies below the x-axis, which reverses the subtraction
D. Because her test at x = 1 gives f(1) = 1 and g(1) = 3, so g is on top there, and slide 8 requires the upper function to be written first

**9.** State both cases of the slide 4 rule as the deck gives them, and explain why the second case needs a modulus while the first does not.
*(short answer)*

**10.** A question asks for the area enclosed by two curves and gives no interval. Set out, in order, the full procedure slide 8 prescribes, and say what each step prevents you getting wrong.
*(short answer)*

**11.** State slide 12's rule for curves that intersect at c ∈ (a, b), explain how you decide which function is written first in each of the two integrals, and say why no modulus appears anywhere in this rule.
*(short answer)*

**12.** Explain why 'take the modulus at the end', that is computing |∫ₐᵇ(f(x) − g(x))dx| across a crossing, is not a substitute for splitting. Use one of the deck's own examples as evidence.
*(short answer)*

## Answers

**1. A** — Every strip below the axis contributes a negative amount to the integral, so on an interval where f ≤ 0 the integral is negative and the area is its magnitude; where f ≥ 0 the integral is already the area. Option 2 confuses the sign of the limits with the sign of the function — a and b are just x-values and never enter the choice. Option 3 imports a symmetry idea the deck never uses. Option 4 confuses monotonicity with sign: f(x) = x² − 1 on [0,1] is increasing and still negative, which is exactly the case in her Example 2.

**2. A** — The roots tell you where the region starts and ends; they say nothing about whether the region sits above or below the axis, and that is what selects between ∫ₐᵇf and |∫ₐᵇf|. Option 2 misreads it as verification — substituting an interior point cannot confirm a root. Option 3 would need f′(x) = 0, giving x = 5/2, not x = 2; and the maximum plays no part in the area formula. Option 4 invents an extra bound; splitting happens at roots or intersections, never at a test point.

**3. B** — The slide's wording is 'If f(x) and g(x) are continuous with f(x) ≥ g(x) on [a, b]'. The height of a vertical strip is (upper y) − (lower y), so writing the lower function first would make every height negative and the answer the negative of the area. Option 1 attaches the wrong inequality — her Example 1 on slide 9 has g dipping to −9 and the formula still applies unchanged. Options 3 and 4 both put conditions on position relative to the axis, which is irrelevant: a difference of y-values does not know where the axis is.

**4. B** — Slide 8: 'If f(x) and g(x) are enclosed without a specific interval given, we let f(x) = g(x), such that x = a and x = b are the bounds of the integration.' An enclosed region is bounded by where the two curves meet. Option 1 is the Part 1 method for a single curve against the axis — a different equation giving different points; for y = 3 − x and y = x² − 9 it would give x = 3 and x = ±3 rather than x = −4 and x = 3. Option 3 finds where the gap between the curves is widest, not where it closes. Option 4 is invented.

**5. C** — Past c the roles swap: f − g becomes negative, so the single integral reports the difference of the two lobes rather than their total. Option 1 is false — the antiderivatives here are polynomials and trig functions, defined everywhere. Option 2 is not a rule; TASK 3's curves meet only at the endpoints and need one integral. Option 4 is false: her own slide 6 evaluates ∫₀¹(x² − 1)dx, whose integrand is negative, without difficulty — the integral exists, it just is not the area.

**6. C** — The lobe on [0, π/4] and the lobe on [π/4, π/2] are mirror images, each of area 2/√2 − 1, so they cancel exactly in one integral and add to 2√2 − 2 when handled separately. Option 1 contradicts the slide, which finds the meeting point at tan x = 1, x = π/4. Option 2 is wrong — differentiating sin x + cos x returns cos x − sin x, the integrand. Option 4 over-generalises a coincidence into a rule; the cancellation comes from the crossing, not from the interval.

**7. D** — Slide 4 states two cases with a sign condition on each; the summary keeps only the first formula and drops the condition, so as written it would report a negative number as an area for any curve below the axis — contradicting her own Example 2 on slide 6. Option 1 is a convention the deck never raises. Option 2 belongs to indefinite integrals; definite ones carry no c. Option 3 names the wrong hypothesis — slide 8 asks for continuity, not differentiability, and slide 4 asks for neither. Revise from slides 4, 8 and 12; treat slide 16 as an index to them.

**8. D** — The slide's own words are 'Taking x = 1, we see that, g(x) ≥ f(x)', and slide 8's condition is f(x) ≥ g(x) for the formula as written — so with g on top the roles are swapped and the integrand is g − f. Option 1 turns a coincidence of this one example into a rule; in Example 1 on slide 9 the first-named f is on top. Option 2 is false: in slide 9's example the parabola x² − 9 is the lower curve. Option 3 is the persistent 'shift it above the axis' superstition — the strip height is a difference of y-values and does not depend on where the axis is.

**9.** A good answer quotes both: if f(x) ≥ 0 on [a, b] the area under y = f(x) over [a, b] is ∫ₐᵇf(x)dx; if f(x) ≤ 0 on [a, b] it is |∫ₐᵇf(x)dx|. The explanation should be about sign, not about convention: the definite integral accumulates f(x) times a positive width, so where f is negative every contribution is negative and the integral comes out negative. An area is a non-negative quantity, so the magnitude is taken. In the first case the integral is already non-negative and the modulus would change nothing. Credit any answer that notes the modulus is applied per piece, as in Example 2, not to the whole interval at once.

**10.** A good answer gives three steps in order. First, solve f(x) = g(x): 'If f(x) and g(x) are enclosed without a specific interval given, we let f(x) = g(x), such that x = a and x = b are the bounds of the integration' — this prevents integrating over an invented interval, which is how whole questions are lost. Second, take a convenient point strictly between the two solutions and evaluate both functions there, to see which is on top — this prevents subtracting in the wrong order and reporting the negative of the area, which is precisely why Example 2 on slide 10 integrates g − f. Third, integrate (upper − lower) between the two limits and report the answer in square units. It is worth adding that the condition in the rule is f(x) ≥ g(x), a comparison between the two curves, and has nothing to do with either curve's position relative to the x-axis.

**11.** A good answer states it: A₁ = ∫ₐᶜ(f(x) − g(x))dx where f(x) ≥ g(x), A₂ = ∫ᶜᵇ(g(x) − f(x))dx where f(x) ≤ g(x), and A = A₁ + A₂. On the decision: test one point inside each of the two sub-intervals and put whichever function is larger there first — the labels A₁ and A₂ on the slide assume f is on top first and g on top second, which is a labelling convention, not a fact about the curves; if the test says otherwise you swap the integrands. On the modulus: because the upper function is written first in each piece, each integrand is non-negative throughout its own interval, so each integral is already a positive area and they simply add. The modulus in Part 1 exists only because there the integrand is f itself, whose sign you do not control.

**12.** A good answer makes the timing the point: the cancellation happens inside the integral, before the modulus is ever applied, so the modulus can only fix a sign, never restore a lost quantity. The strongest evidence in the deck is Example 1 on slides 13–14: ∫₀^(π/2)(cos x − sin x)dx = [sin x + cos x]₀^(π/2) = (1 + 0) − (0 + 1) = 0, and |0| = 0, while the true area is 2√2 − 2. TASK 2 gives a second case: ∫₀²[(2 − x²) − x²]dx = 4 − 16/3 = −4/3, whose magnitude 4/3 is nothing like the correct 4. The modulus is legitimate only where the integrand keeps one sign across the whole interval, which is exactly the situation slide 4 covers and slide 12 does not.
