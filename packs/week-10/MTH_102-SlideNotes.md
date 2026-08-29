# MTH_102 Week 10 — what the slide images contained that the extracted text had lost

Deck: `Definite-Integrals-Area-Between-Curves-PDF`, **18 pages**, course strand *Elementary Math (Calculus)*. The title slide gives the deck title only — **no lecturer name appears anywhere on the rendered pages**; on the week 7 deck for this same course the lecturer is Danjuma Rose Uwanassara, MSc Mathematics, and the template, house style and worked-example habits here are identical, but this deck itself does not name her.

Pages **2, 3 and 17** extract as text (learning objectives, introduction, further reading) and were not rendered. Page 1 (title) and page 18 (Thank You) are decorative. **Pages 4–16 are images — thirteen image-only pages**, and they carry every formula, every worked example and all three tasks. `pdftotext` recovered only their headings: AREA BETWEEN CURVES ×9, TASK ×3, SUMMARY. Everything below is what was inside those thirteen pictures.

Deck structure, page by page:

| Page | Heading | Content |
|---|---|---|
| 1 | title | DEFINITE INTEGRALS: AREA BETWEEN CURVES |
| 2–3 | (text) | learning objectives, introduction — extracted fine |
| 4 | AREA BETWEEN CURVES | the two-case rule for a curve against the x-axis |
| 5 | AREA BETWEEN CURVES | Example 1 — f(x) = 5x − x² |
| 6 | AREA BETWEEN CURVES | Example 2 — f(x) = x² − 1 on [0, 2], split at a root |
| 7 | TASK | f(x) = 6x − x² against the x-axis |
| 8 | AREA BETWEEN CURVES | the two-curve rule and where the limits come from |
| 9 | AREA BETWEEN CURVES | Example 1 — y = 3 − x and y = x² − 9 |
| 10 | AREA BETWEEN CURVES | Example 2 — f(x) = 2 − x and g(x) = 4 − x² |
| 11 | TASK | y = x² and y = 2 − x² for 0 ≤ x ≤ 2 |
| 12 | AREA BETWEEN CURVES | the intersect-on-the-interior rule, A = A₁ + A₂ |
| 13 | AREA BETWEEN CURVES | Example 1 — sin x and cos x on [0, π/2], part 1 (A₁) |
| 14 | AREA BETWEEN CURVES | Example 1 continued, part 2 (A₂) and the total |
| 15 | TASK | y = cos x and y = 2 − cos x for 0 ≤ x ≤ 2π |
| 16 | SUMMARY | three statements |
| 17 | (text) | further reading |
| 18 | — | Thank You |

Note that the example numbering **restarts in each section**: there is an Example 1 and Example 2 on slides 5–6, a *different* Example 1 and Example 2 on slides 9–10, and a third Example 1 on slides 13–14. Five worked examples and three tasks in all.

## 1. Rules that were invisible

**Slide 4 — the two-case rule, verbatim.**
> "If f(x) ≥ 0 on [a, b], then the area under the curve y = f(x) over [a, b] is
> ∫ₐᵇ f(x)dx.
> If f(x) ≤ 0 on [a, b], then the area under the curve y = f(x) over [a, b] is
> |∫ₐᵇ f(x)dx|"

(The modulus bars on the slide enclose the whole integral, drawn full-height on either side.)

**Slide 8 — the two-curve rule, verbatim.**
> "If f(x) and g(x) are continuous with f(x) ≥ g(x) on [a, b], then the area of the region between the curves y = f(x) and y = g(x) from a to b is given by
> A = ∫ₐᵇ (f(x) − g(x))dx
> If f(x) and g(x) are enclosed without a specific interval given, we let f(x) = g(x), such that x = a and x = b are the bounds of the integration."

**Slide 12 — the intersect-on-the-interior rule, verbatim.**
> "If f(x) and g(x) are defined on the interval [a, b] and intersect on the interior, c ∈ (a, b), we find all the intersections of f(x) and g(x) by letting f(x) = g(x) such that x = a, x = c and x = b are the bounds of the integration. In that case, we have
> A₁ = ∫ₐᶜ (f(x) − g(x))dx,
> where f(x) ≥ g(x), and
> A₂ = ∫ᶜᵇ (g(x) − f(x))dx,
> where f(x) ≤ g(x), so that the area bounded by f(x) and g(x) is given by
> A = A₁ + A₂."

**Slide 16 — the SUMMARY slide, verbatim (typos included).**
> "The area **bounbed** by the region of a function f(x) defined on [a, b] is given by
> ∫ₐᵇ f(x)dx.
> The area **bounbed** by f(x) and g(x) defined on [a, b] is given by
> A = ∫ₐᵇ (f(x) − g(x))dx
> If f(x) and g(x) intersect at c ∈ (a, b), then
> A₁ = ∫ₐᶜ (f(x) − g(x))dx, and A₂ = ∫ᶜᵇ (g(x) − f(x))dx,
> so that the area bounded by f(x) and g(x) is given by
> A = A₁ + A₂."

That is the **entire** rule inventory of the deck. Three rules, one of them in two cases. There is no fourth formula anywhere in it.

## 2. Worked examples that were invisible (five of them)

### Slide 5 — Example 1 (area against the x-axis, curve above)

> "**Example 1.** Find the area between the graph of the function f(x) = 5x − x² and the x-axis.
> **Solution**
> To determine the limits of integration (the points at which f(x) cuts the x-axis), we set f(x) = 0, that is,
> 5x − x² = 0, so that x(5 − x) = 0, implying that x = 0 or x = 5.
> Taking any point, say 2 in [0,5], we see that f(x) = f(2) = 5(2) − 2² = 6 > 0. Therefore, the area is given by"

A = ∫₀⁵ f(x)dx = ∫₀⁵ 5x − x² dx = [5x²/2 − x³/3]₀⁵
= [5(5)²/2 − 5³/3] − [5(0)²/2 − 0³/3] = 125/6 = 20.83

> "Hence, the area is 20.83 square units."

Verification: 125/2 − 125/3 = (375 − 250)/6 = 125/6 = 20.8333… ✓

### Slide 6 — Example 2 (curve crosses the axis inside the interval)

> "**Example 2.** Find the area bounded by the curve f(x) = x² − 1, the x-axis and the lines x = 0 and x = 2.
> **Solution**
> The points at which f(x) cuts the x-axis is given by
> x² − 1 = 0, so that x = −1 or x = 1. Since x = 1 is between 0 and 2, then the required region cuts x-axis at x = 1. In [0,1], f(x) ≤ 0 and in [1,2], f(x) ≥ 0. Therefore, the area is given by"

A = |∫₀¹ f(x)dx| + ∫₁² f(x)dx = |∫₀¹ (x² − 1)dx| + ∫₁² (x² − 1)dx
= |[x³/3 − x]₀¹| + [x³/3 − x]₁²
= (|(1³/3 − 1) − (0³/3 − 0)|) + ([2³/3 − 2] − [1³/3 − 1])
= 2/3 + 4/3 = 2

> "Hence, the area is 2 square units."

Verification: first piece 1/3 − 1 = −2/3, magnitude 2/3 ✓; second piece (8/3 − 2) − (1/3 − 1) = 2/3 + 2/3 = 4/3 ✓; total 2 ✓.

**Worth recording:** the unsplit integral ∫₀²(x² − 1)dx = 8/3 − 2 = 2/3, which is numerically identical to the magnitude of the first piece. A student who fails to split lands on 2/3 and it can look as though it came from somewhere legitimate.

### Slide 9 — Example 1 (two curves, no interval given)

> "**Example 1**
> Find the area bounded by y = 3 − x and y = x² − 9.
> **Solution**
> Setting 3 − x = x² − 9, we have (x + 4)(x − 3) = 0, so that x = −4 and x = 3. Let f(x) = 3 − x and g(x) = x² − 9. Taking any point, say x = 2 in [−4,3], we see that f(2) = 1 and g(2) = −5. Therefore, f(x) ≥ g(x). The area is given by"

A = ∫₋₄³ (f(x) − g(x))dx = ∫₋₄³ [(3 − x) − (x² − 9)]dx
= [12x − x³/3 − x²/2]₋₄³ = 45/2 − (−104)/3 = 343/6 = 57.17

> "Hence, the required area is 57.17 square units"

Verification. Integrand: 12 − x − x². Antiderivative 12x − x²/2 − x³/3 (she prints the last two terms in the reverse order, which is the same function).
At x = 3: 36 − 4.5 − 9 = 22.5 = 45/2 ✓
At x = −4: −48 − 8 + 64/3 = −56 + 64/3 = (−168 + 64)/3 = −104/3 ✓
A = 45/2 + 104/3 = (135 + 208)/6 = 343/6 = 57.1666… ✓

**Two intermediate values she does not print** and that a student must supply: 45/2 and −104/3. The slide jumps from the bracket straight to "45/2 − (−104)/3". The whole difficulty of the example is compressed into that one printed subtraction of a negative.

### Slide 10 — Example 2 (the second-named function is on top)

> "**Example 2**
> Find the area enclosed by the curves f(x) = 2 − x and g(x) = 4 − x².
> **Solution**
> Setting f(x) = g(x), we have x = −1 and x = 2. Taking x = 1, we see that, g(x) ≥ f(x). Therefore, the area is given by"

A = ∫₋₁² (g(x) − f(x))dx = ∫₋₁² [(4 − x²) − (2 − x)]dx
= [2x − x³/3 + x²/2]₋₁² = 10/3 − (−7)/6 = 9/2 = 4.5

> "Hence, the required area is 4.5 square units."

Verification. 2 − x = 4 − x² ⟹ x² − x − 2 = 0 ⟹ (x − 2)(x + 1) = 0 ⟹ x = −1, 2 ✓ (she gives the roots without the algebra).
At x = 1: f = 1, g = 3, so g ≥ f ✓.
Integrand 2 + x − x², antiderivative 2x + x²/2 − x³/3 ✓ (she prints 2x − x³/3 + x²/2).
At x = 2: 4 + 2 − 8/3 = 6 − 8/3 = 10/3 ✓
At x = −1: −2 + 1/2 + 1/3 = −7/6 ✓
A = 10/3 + 7/6 = 27/6 = 9/2 = 4.5 ✓

**This is the example that fixes the order of subtraction.** f is named first in the question and subtracted second, because the interior test says g is on top. It is the deck's own refutation of "subtract in the order they were written".

### Slides 13 and 14 — Example 1 (curves crossing inside the interval)

Slide 13:
> "**Example 1**
> Find the area bounded by y = sin(x) and y = cos(x) for 0 ≤ x ≤ π/2.
> **Solution**
> To obtain the intersection points, let sin(x) = cos(x). Then sin(x)/cos(x) = 1 or tan(x) = 1, implying that x = π/4. Now, we know that cos(x) ≥ sin(x) when 0 ≤ x ≤ π/4 and sin(x) ≥ cos(x) when π/4 ≤ x ≤ π/2. Therefore, we have"

A₁ = ∫₀^(π/4) (cos(x) − sin(x))dx = [sin(x) + cos(x)]₀^(π/4)
= (1/√2 + 1/√2) − (0 + 1) = 2/√2 − 1

Slide 14:
> "Similarly,"

A₂ = ∫_(π/4)^(π/2) (sin(x) − cos(x))dx = [−cos(x) − sin(x)]_(π/4)^(π/2)
= (0 − 1) − (−1/√2 − 1/√2) = −1 + 2/√2

> "Therefore, the area bounded by y = sin(x) and y = cos(x) for 0 ≤ x ≤ π/2 is given by"

A = A₁ + A₂ = (2/√2 − 1) + (−1 + 2/√2) = 2√2 − 2

> "Hence, the required area is (2√2 − 2) square units."

Verification. A₁: [sin + cos] at π/4 is 1/√2 + 1/√2 = 2/√2; at 0 it is 0 + 1 = 1 ✓. A₂: [−cos − sin] at π/2 is −0 − 1 = −1 (she prints this as "(0 − 1)"); at π/4 it is −1/√2 − 1/√2 ✓. Sum: 4/√2 − 2 = 2√2 − 2 ≈ 0.8284 ✓.

**The single unsplit integral** ∫₀^(π/2)(cos x − sin x)dx = [sin x + cos x]₀^(π/2) = (1 + 0) − (0 + 1) = **0**. The two lobes are congruent and cancel exactly. This is the deck's strongest demonstration of why slide 12 exists, and it is not stated on the slide — it has to be pointed out.

## 3. Tasks that were invisible (three, none answered)

- **Slide 7, TASK:** "Find the area between the graph of the function f(x) = 6x − x² and the x-axis."
  → roots x(6 − x) = 0 give x = 0, 6; f(3) = 9 > 0; [3x² − x³/3]₀⁶ = 108 − 72 = **36 square units**.
- **Slide 11, TASK:** "Find the area bounded by y = x² and y = 2 − x² for 0 ≤ x ≤ 2."
  → x² = 2 − x² gives x = ±1, and x = 1 is interior to [0, 2], so slide 12 applies. A₁ = ∫₀¹(2 − 2x²)dx = 2 − 2/3 = 4/3; A₂ = ∫₁²(2x² − 2)dx = (16/3 − 4) − (2/3 − 2) = 8/3. A = **4 square units**. (Unsplit: ∫₀²(2 − 2x²)dx = 4 − 16/3 = −4/3, negative and wrong in magnitude too.)
- **Slide 15, TASK:** "Find the area bounded by y = cos(x) and y = 2 − cos(x) for 0 ≤ x ≤ 2π."
  → cos x = 2 − cos x gives cos x = 1, i.e. x = 0 and x = 2π, **both endpoints**, so no split. At x = π, 2 − cos x = 3 > −1 = cos x. A = ∫₀^(2π)(2 − 2cos x)dx = [2x − 2sin x]₀^(2π) = **4π square units** ≈ 12.57.

The deck sets all three and answers none. Note that TASK 2 is a slide-12 problem and TASK 3 is deliberately **not** — it looks like one and is not. That contrast is almost certainly the point of setting them together.

## 4. Notation and habits the extraction lost

- **Modulus bars around a whole definite integral**, |∫ₐᵇf(x)dx|, drawn full-height. Used only in slide 4's second case and on the negative *piece* in slide 6 — never around a two-curve integral.
- **Square-bracket evaluation** [F(x)]ₐᵇ with the limits stacked at the right-hand bracket. Note this differs from the week 7 deck, which used the bar F(x)|ₐᵇ. Both appear in this course; either is safe to write.
- **The interior test point, every single time.** "Taking any point, say 2 in [0,5]…", "Taking any point, say x = 2 in [−4,3]…", "Taking x = 1, we see that…". Three of the five examples state it explicitly and the other two rely on it.
- **f and g named explicitly before integrating** on slides 9 and 10 ("Let f(x) = 3 − x and g(x) = x² − 9"), so the subtraction order can be justified in words.
- **Decimal answers alongside the exact fraction**: 125/6 = 20.83, 343/6 = 57.17, 9/2 = 4.5. She reports both. The trig example is the exception — left exact as 2√2 − 2.
- **"square units" on every answer.** Five for five.
- **1/√2 rather than √2/2** for sin(π/4) and cos(π/4), and the intermediate form 2/√2 kept unsimplified until the last line, where 4/√2 becomes 2√2.
- **Antiderivative terms printed out of standard order** on slides 9 and 10 — [12x − x³/3 − x²/2] and [2x − x³/3 + x²/2]. Correct, just not in descending powers.
- **Missing brackets round an integrand** on slide 5: "∫₀⁵ 5x − x² dx" rather than ∫₀⁵(5x − x²)dx. Harmless here; do not copy it under time pressure, because it is how sign errors start.

## 5. Errors and imprecisions on the slides

1. **Slide 16 (SUMMARY), substantive — both sign conditions dropped.** Line 1 gives the area as ∫ₐᵇf(x)dx with **no requirement that f(x) ≥ 0**, and omits slide 4's second case |∫ₐᵇf(x)dx| entirely. As written it would return a negative number as an area for any curve below the axis — contradicting her own Example 2 two sections earlier. Line 2 gives A = ∫ₐᵇ(f(x) − g(x))dx with **no requirement that f(x) ≥ g(x)**, contradicting her own Example 2 on slide 10, which subtracts in the opposite order precisely because of that condition. The new summary states the rules from slides 4, 8 and 12 with their conditions, and flags slide 16 as an index rather than a statement.
2. **Slide 16, typographic.** "bounbed" for "bounded", twice, in consecutive lines. Harmless but it confirms the summary slide was assembled in a hurry, which is consistent with the dropped conditions.
3. **Slide 4, loose wording.** "the area under the curve y = f(x)" is used for the f ≤ 0 case too, where the region is really *above* the curve and below the axis. "Between the curve and the x-axis" is what is meant. Not an error in the mathematics.
4. **Slide 12, a labelling convention presented as a fact.** A₁ is defined with f on top and A₂ with g on top. That ordering is not forced by anything — it is just the order in which the labels were assigned. If the interior test says g is on top on the *first* piece, the integrands swap. Her own TASK 2 is exactly that case: on [0,1] it is 2 − x² that is on top, so the first integral is (2 − x²) − x², the reverse of the slide's A₁ template. The invariant is "upper function first in each piece", not "f first then g". This has been taught as the invariant in the new material.
5. **Slides 13–14 use antiderivatives the course has never stated.** ∫cos x dx = sin x and ∫sin x dx = −cos x are both used and neither has appeared on any MTH_102 slide: week 7 gave only the power rule ∫xⁿdx = x^(n+1)/(n+1) + c, n ≠ −1. This is a genuine gap in the material, not a mistake. The new summary flags it as an aside and states both antiderivatives explicitly, since the example — and TASK 3 — cannot be done without them.
6. **Slide 5, minor.** "we see that f(x) = f(2) = 5(2) − 2² = 6" conflates the function with its value at a point. Read it as f(2) = 6.

## 6. Was the old summary wrong, incomplete, or basically fine?

**Almost every mathematical statement in it is true, but it is the wrong material for this week and is being replaced rather than patched.** Four problems:

**a) Substantially out of scope.** The old summary taught, at length: the Riemann-sum definition with Δx = (b − a)/n, sample points and the limit as n → ∞, plus a full worked example evaluating ∫₀¹x²dx from first principles; horizontal strips and integration with respect to y, with two worked examples; area between a curve and the **y-axis**, A = ∫x dy; the orientation and additivity properties ∫ₐᵃf = 0, ∫ₐᵇf = −∫bᵃf, ∫ₐᵇf + ∫bᶜf = ∫ₐᶜf; the single formula A = ∫ₐᵇ|f(x)|dx; the inequality ∫|f| ≥ |∫f|; and even-function symmetry shortcuts. **None of this is anywhere in the deck.** The lecturer teaches three rules and nothing else. A student revising the old page spent a large share of the time on material she never taught and cannot set, and the questions followed it — MCQ 5 asks about x = 1 − y² and the y-axis, MCQ 10 asks which region needs two vertical integrals but one horizontal one, and short answer 15 requires a horizontal-strip setup for y² = 4x. Those are three of fifteen questions on a technique the deck does not contain.

**b) It contained none of the lecturer's five worked examples and none of her three tasks.** The old summary's ten worked examples were all invented: ∫₁³x²dx, y = x³ on [−1, 2], y = x² − 2x − 3, y = x and y = x², y = 8 − x² and y = x², y = x³ and y = x, y = −x² − 1 and y = −x² − 5, x = y² with y = x − 2, y = x² with the y-axis, and the Riemann sum for ∫₀¹x²dx. Not one of the actual examples — 5x − x², x² − 1 on [0,2], (3 − x) against (x² − 9), (2 − x) against (4 − x²), sin against cos on [0, π/2] — appeared anywhere on it, and neither did TASK 1, TASK 2 or TASK 3, which are the most likely templates for assessment.

**c) It never covered the trigonometric example, which is a third of the teaching.** Slides 12–15 — the intersect-on-the-interior rule, its only worked example, and TASK 3 — are entirely trigonometric. The old summary contained no trig integral at all except a single passing mention that ∫₀^(2π)sin x dx = 0. The values sin(π/4) = cos(π/4) = 1/√2, the manoeuvre sin x = cos x ⟹ tan x = 1, the antiderivative pair, and the final form 2√2 − 2 were all absent.

**d) Its answer key was unusable as written.** Of the twelve multiple-choice answers, ten were option **a** and two were **b** — no answer anywhere was c or d. Options were also run together on one line ("a) 36   b) 18   c) 54   d) 27") rather than one per line, which is the wrong shape for reading on a phone.

The old page carried an honest footnote admitting it had been written from the objectives and the week-summary sheet because the deck extracted as headings only. That footnote was accurate, and it correctly identified the failure. The replacement removes the need for it.
