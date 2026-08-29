# MTH_102 — Week 10 Summary

*Elementary Mathematics II (Calculus) · Topic: Definite Integrals — Area Between Curves · Deck: "DEFINITE INTEGRALS: AREA BETWEEN CURVES", 18 pages*

**Scope note:** this rewrite follows the deck slide-for-slide. The lecturer teaches exactly three rules — (i) area between a curve and the x-axis, in two cases depending on the sign of f; (ii) area between two curves that do not cross inside the interval, A = ∫ₐᵇ(f(x) − g(x))dx with f above g; (iii) what to do when they DO cross inside, A = A₁ + A₂ — with five worked examples and three TASKs. She does **not** cover Riemann sums or the limit definition, horizontal strips / integrating with respect to y, area against the y-axis, the properties ∫ₐᵇf = −∫bᵃf or interval additivity, the single formula ∫ₐᵇ|f(x)|dx, substitution, volumes of revolution, or average value. Every one of her five examples and three tasks is a candidate exam question. Learn them cold.

## The 8 most examinable things this week

1. **The two-case rule for a curve against the x-axis (slide 4).** "If f(x) ≥ 0 on [a, b], then the area under the curve y = f(x) over [a, b] is **∫ₐᵇf(x)dx**. If f(x) ≤ 0 on [a, b], then the area under the curve y = f(x) over [a, b] is **|∫ₐᵇf(x)dx|**." The modulus is not decoration — below the axis the integral comes out negative and an area cannot be.
2. **When no interval is given, the limits are the roots (slide 5).** "To determine the limits of integration (the points at which f(x) cuts the x-axis), we set f(x) = 0." For 5x − x² = 0 she factorises to x(5 − x) = 0, giving x = 0 or x = 5.
3. **Always test one interior point (slides 5, 9, 10).** Her habit, repeated in every example: pick a convenient point inside the interval and evaluate, to decide which case of the rule applies. Slide 5: "Taking any point, say 2 in [0,5], we see that f(x) = f(2) = 5(2) − 2² = 6 > 0."
4. **If the curve crosses the axis inside the interval, split there and add magnitudes (slide 6, Example 2).** For f(x) = x² − 1 on [0, 2] she splits at x = 1 and writes **A = |∫₀¹f(x)dx| + ∫₁²f(x)dx** — a modulus on the piece that is below the axis, none on the piece above it.
5. **Area between two curves (slide 8).** "If f(x) and g(x) are continuous with **f(x) ≥ g(x)** on [a, b], then the area of the region between the curves y = f(x) and y = g(x) from a to b is given by **A = ∫ₐᵇ(f(x) − g(x))dx**." The condition f ≥ g is part of the rule, not a footnote.
6. **Enclosed regions supply their own limits (slide 8).** "If f(x) and g(x) are enclosed without a specific interval given, we let **f(x) = g(x)**, such that x = a and x = b are the bounds of the integration."
7. **Curves that cross inside the interval force two integrals (slide 12).** With an intersection at c ∈ (a, b): **A₁ = ∫ₐᶜ(f(x) − g(x))dx** where f(x) ≥ g(x), **A₂ = ∫ᶜᵇ(g(x) − f(x))dx** where f(x) ≤ g(x), and **A = A₁ + A₂**. In each piece the function that is on top is written first, so each integral is already positive.
8. **The subtraction is a difference of y-values, so it never cares where the x-axis is.** In Example 1 on slide 9 the region straddles the axis (y = x² − 9 dips to −9) and she still just writes ∫₋₄³[(3 − x) − (x² − 9)]dx. Nothing is shifted, no modulus appears.

## Part 1 — Area between a curve and the x-axis

**The rule (slide 4), verbatim.**
> "If f(x) ≥ 0 on [a, b], then the area under the curve y = f(x) over [a, b] is ∫ₐᵇf(x)dx.
> If f(x) ≤ 0 on [a, b], then the area under the curve y = f(x) over [a, b] is |∫ₐᵇf(x)dx|."

Read the two lines as one procedure: **decide the sign first, then choose the formula.** That is what the interior test point in every example is for.

### Example 1 (slide 5) — the curve is above the axis throughout

**Find the area between the graph of the function f(x) = 5x − x² and the x-axis.**

*Solution.* "To determine the limits of integration (the points at which f(x) cuts the x-axis), we set f(x) = 0, that is,
5x − x² = 0, so that x(5 − x) = 0, implying that x = 0 or x = 5.
Taking any point, say 2 in [0,5], we see that f(x) = f(2) = 5(2) − 2² = 6 > 0. Therefore, the area is given by"

A = ∫₀⁵f(x)dx = ∫₀⁵(5x − x²)dx = [5x²/2 − x³/3]₀⁵
= [5(5)²/2 − 5³/3] − [5(0)²/2 − 0³/3]
= 125/6 = **20.83**

Hence, the area is **20.83 square units.**

Check the arithmetic she compresses: 5(25)/2 = 125/2 and 125/3, so 125/2 − 125/3 = (375 − 250)/6 = **125/6** ≈ 20.83. The lower limit contributes 0, but she still writes the whole bracket out — copy that habit; it is where marks live.

### Example 2 (slide 6) — the curve crosses the axis inside the interval

**Find the area bounded by the curve f(x) = x² − 1, the x-axis and the lines x = 0 and x = 2.**

*Solution.* "The points at which f(x) cuts the x-axis is given by x² − 1 = 0, so that x = −1 or x = 1. Since x = 1 is between 0 and 2, then the required region cuts x-axis at x = 1. In [0,1], f(x) ≤ 0 and in [1,2], f(x) ≥ 0. Therefore, the area is given by"

A = |∫₀¹f(x)dx| + ∫₁²f(x)dx = |∫₀¹(x² − 1)dx| + ∫₁²(x² − 1)dx
= |[x³/3 − x]₀¹| + [x³/3 − x]₁²
= (|(1³/3 − 1) − (0³/3 − 0)|) + ([2³/3 − 2] − [1³/3 − 1])
= 2/3 + 4/3 = **2**

Hence, the area is **2 square units.**

Three things this example is built to teach:
- **The interval is given but the root is not.** She solves x² − 1 = 0 anyway, gets x = ±1, and then *checks which root is inside [0, 2]*. x = −1 is discarded; x = 1 is the split point.
- **The modulus goes on the piece that is below the axis only.** |∫₀¹| and then a bare ∫₁².
- **Splitting genuinely changes the answer.** The unsplit integral ∫₀²(x² − 1)dx = 8/3 − 2 = 2/3, which is not 2. Worth noticing that 2/3 is also the magnitude of the first piece — so a student who forgets to split can land on a number that looks like it came from somewhere.

### TASK 1 (slide 7) — set by the lecturer, not answered

**Find the area between the graph of the function f(x) = 6x − x² and the x-axis.**

*Solution, in her Example 1 shape.* Set f(x) = 0: 6x − x² = 0, so x(6 − x) = 0, giving x = 0 or x = 6.
Test an interior point: f(3) = 6(3) − 3² = 18 − 9 = 9 > 0, so f(x) ≥ 0 on [0, 6] and no modulus is needed.

A = ∫₀⁶(6x − x²)dx = [6x²/2 − x³/3]₀⁶ = [3x² − x³/3]₀⁶
= [3(6)² − 6³/3] − [0 − 0] = (108 − 72) − 0 = **36**

Hence the area is **36 square units.**

## Part 2 — Area between two curves that do not cross inside

**The rule (slide 8), verbatim.**
> "If f(x) and g(x) are continuous with f(x) ≥ g(x) on [a, b], then the area of the region between the curves y = f(x) and y = g(x) from a to b is given by
> A = ∫ₐᵇ(f(x) − g(x))dx
> If f(x) and g(x) are enclosed without a specific interval given, we let f(x) = g(x), such that x = a and x = b are the bounds of the integration."

So the procedure is: **solve f = g for the limits, test an interior point to see which is on top, then integrate (top − bottom).**

### Example 1 (slide 9) — a line and a parabola

**Find the area bounded by y = 3 − x and y = x² − 9.**

*Solution.* "Setting 3 − x = x² − 9, we have (x + 4)(x − 3) = 0, so that x = −4 and x = 3. Let f(x) = 3 − x and g(x) = x² − 9. Taking any point, say x = 2 in [−4,3], we see that f(2) = 1 and g(2) = −5. Therefore, f(x) ≥ g(x). The area is given by"

A = ∫₋₄³(f(x) − g(x))dx = ∫₋₄³[(3 − x) − (x² − 9)]dx
= [12x − x³/3 − x²/2]₋₄³
= 45/2 − (−104)/3 = 343/6 = **57.17**

Hence, the required area is **57.17 square units.**

The arithmetic she leaves out, worth writing yourself:
- Integrand: (3 − x) − (x² − 9) = **12 − x − x²**, antiderivative 12x − x²/2 − x³/3 (she writes the two negative terms in the other order — same thing).
- At x = 3: 12(3) − 27/3 − 9/2 = 36 − 9 − 4.5 = **45/2**.
- At x = −4: 12(−4) − (−64)/3 − 16/2 = −48 + 64/3 − 8 = −56 + 64/3 = **−104/3**.
- A = 45/2 − (−104/3) = 45/2 + 104/3 = (135 + 208)/6 = **343/6** ≈ 57.17.

The single most likely slip: writing 45/2 − 104/3 = −73/6 because the minus already in front of 104/3 was not doubled with the value's own minus. **Subtracting a negative adds.**

### Example 2 (slide 10) — the one where the SECOND function is on top

**Find the area enclosed by the curves f(x) = 2 − x and g(x) = 4 − x².**

*Solution.* "Setting f(x) = g(x), we have x = −1 and x = 2. Taking x = 1, we see that, g(x) ≥ f(x). Therefore, the area is given by"

A = ∫₋₁²(g(x) − f(x))dx = ∫₋₁²[(4 − x²) − (2 − x)]dx
= [2x − x³/3 + x²/2]₋₁²
= 10/3 − (−7)/6 = 9/2 = **4.5**

Hence, the required area is **4.5 square units.**

Fill in her gaps:
- 2 − x = 4 − x² gives x² − x − 2 = 0, (x − 2)(x + 1) = 0, so x = −1, 2.
- At x = 1: f(1) = 1, g(1) = 3, so **g is on top** — which is why she writes **g − f**, not f − g.
- Integrand: (4 − x²) − (2 − x) = **2 − x² + x**, antiderivative 2x − x³/3 + x²/2.
- At x = 2: 4 − 8/3 + 2 = 6 − 8/3 = **10/3**. At x = −1: −2 + 1/3 + 1/2 = **−7/6**.
- A = 10/3 + 7/6 = (20 + 7)/6 = 27/6 = **9/2 = 4.5**.

**This is the example to remember for the order of subtraction.** She named f first in the question and still subtracted it second, because the test point said so. The order is decided by the test, never by which curve was written first.

### TASK 2 (slide 11) — set by the lecturer, not answered

**Find the area bounded by y = x² and y = 2 − x² for 0 ≤ x ≤ 2.**

*Solution.* This is a slide-12 problem, not a slide-8 one — the curves cross inside the interval.
Set x² = 2 − x²: 2x² = 2, x² = 1, so x = ±1; only **x = 1** is in [0, 2], so c = 1.
Test in (0, 1), say x = 0: x² = 0 and 2 − x² = 2, so **2 − x² is on top** there.
Test in (1, 2), say x = 2: x² = 4 and 2 − x² = −2, so **x² is on top** there.

A₁ = ∫₀¹[(2 − x²) − x²]dx = ∫₀¹(2 − 2x²)dx = [2x − 2x³/3]₀¹ = 2 − 2/3 = **4/3**
A₂ = ∫₁²[x² − (2 − x²)]dx = ∫₁²(2x² − 2)dx = [2x³/3 − 2x]₁² = (16/3 − 4) − (2/3 − 2) = 4/3 + 4/3 = **8/3**
A = A₁ + A₂ = 4/3 + 8/3 = **4**

Hence the area is **4 square units.** (A single integral ∫₀²[(2 − x²) − x²]dx = [2x − 2x³/3]₀² = 4 − 16/3 = −4/3 — negative, and its magnitude 4/3 is not the area either. The split is compulsory.)

## Part 3 — Curves that intersect inside the interval

**The rule (slide 12), verbatim.**
> "If f(x) and g(x) are defined on the interval [a, b] and intersect on the interior, c ∈ (a, b), we find all the intersections of f(x) and g(x) by letting f(x) = g(x) such that x = a, x = c and x = b are the bounds of the integration. In that case, we have
> A₁ = ∫ₐᶜ(f(x) − g(x))dx, where f(x) ≥ g(x), and
> A₂ = ∫ᶜᵇ(g(x) − f(x))dx, where f(x) ≤ g(x), so that the area bounded by f(x) and g(x) is given by A = A₁ + A₂."

Two points about how she has written it:
- **The labels A₁ and A₂ assume f is on top first and g on top second.** That is a labelling convention, not a fact about the curves. If the test point says g is on top on the *first* piece, you swap the two integrands. What is invariant is: **in each piece, the function on top is written first.**
- Because the top function is always written first, **each piece is already non-negative** and you simply add. No modulus appears anywhere in Part 3 — that is the difference between this rule and the modulus in Part 1.

### Example 1 (slides 13 and 14) — sin and cos over [0, π/2]

**Find the area bounded by y = sin(x) and y = cos(x) for 0 ≤ x ≤ π/2.**

*Solution (slide 13).* "To obtain the intersection points, let sin(x) = cos(x). Then sin(x)/cos(x) = 1 or tan(x) = 1, implying that x = π/4. Now, we know that cos(x) ≥ sin(x) when 0 ≤ x ≤ π/4 and sin(x) ≥ cos(x) when π/4 ≤ x ≤ π/2. Therefore, we have"

A₁ = ∫₀^(π/4)(cos(x) − sin(x))dx = [sin(x) + cos(x)]₀^(π/4)
= (1/√2 + 1/√2) − (0 + 1) = **2/√2 − 1**

*Solution continued (slide 14).* "Similarly,"

A₂ = ∫_(π/4)^(π/2)(sin(x) − cos(x))dx = [−cos(x) − sin(x)]_(π/4)^(π/2)
= (0 − 1) − (−1/√2 − 1/√2) = **−1 + 2/√2**

"Therefore, the area bounded by y = sin(x) and y = cos(x) for 0 ≤ x ≤ π/2 is given by"

A = A₁ + A₂ = (2/√2 − 1) + (−1 + 2/√2) = **2√2 − 2**

Hence, the required area is **(2√2 − 2) square units.**

Notes on her working, all of it examinable:
- **She finds the crossing by dividing, not by inspection**: sin x = cos x ⇒ sin x/cos x = 1 ⇒ tan x = 1 ⇒ x = π/4. Reproduce that line.
- **The antiderivatives**: ∫cos x dx = sin x and ∫sin x dx = −cos x, so the bracket on slide 14 is [−cos x − sin x]. Note the sign on the second term is **minus**, because the integrand there is (sin x − cos x): the sin integrates to −cos, and the −cos integrates to −sin.
- **Values used**: sin(π/4) = cos(π/4) = **1/√2** (she keeps it in this form, not √2/2); sin(π/2) = 1, cos(π/2) = 0; sin 0 = 0, cos 0 = 1.
- **The final simplification**: 2/√2 + 2/√2 = 4/√2 = **2√2**, so A = 2√2 − 2 ≈ 0.828.
- **The trap**: the single unsplit integral ∫₀^(π/2)(cos x − sin x)dx = [sin x + cos x]₀^(π/2) = (1 + 0) − (0 + 1) = **0**. The two lobes are congruent and cancel exactly. This is the clearest demonstration in the whole deck of why slide 12 exists.

*Aside (not on a slide): these are the deck's first integrals that are not powers of x. Week 7 gave only ∫xⁿdx = x^(n+1)/(n+1) + c and never stated ∫sin x dx or ∫cos x dx. This example uses both. Memorise the pair — ∫cos x dx = sin x + c and ∫sin x dx = −cos x + c — because the deck assumes them without ever writing them down.*

### TASK 3 (slide 15) — set by the lecturer, not answered

**Find the area bounded by y = cos(x) and y = 2 − cos(x) for 0 ≤ x ≤ 2π.**

*Solution.* Set cos x = 2 − cos x: 2cos x = 2, cos x = 1, so x = 0 and x = 2π on this interval. **Both intersections are the endpoints** — the curves do not cross on the interior, so despite appearances this is a slide-8 problem, not a slide-12 one.
Test x = π: cos π = −1 and 2 − cos π = 3, so **2 − cos x is on top** throughout.

A = ∫₀^(2π)[(2 − cos x) − cos x]dx = ∫₀^(2π)(2 − 2cos x)dx
= [2x − 2sin x]₀^(2π) = (4π − 2 sin 2π) − (0 − 2 sin 0) = (4π − 0) − 0 = **4π**

Hence the area is **4π square units** (≈ 12.57).

This task is the counterweight to Example 1: after two slides of splitting, the natural reflex is to split again. Check the intersections first — cos x = 1 only at the endpoints, so there is nothing to split.

## Her closing SUMMARY slide (16)

> "The area bounbed [*sic*] by the region of a function f(x) defined on [a, b] is given by ∫ₐᵇf(x)dx.
> The area bounbed [*sic*] by f(x) and g(x) defined on [a, b] is given by A = ∫ₐᵇ(f(x) − g(x))dx.
> If f(x) and g(x) intersect at c ∈ (a, b), then A₁ = ∫ₐᶜ(f(x) − g(x))dx, and A₂ = ∫ᶜᵇ(g(x) − f(x))dx, so that the area bounded by f(x) and g(x) is given by A = A₁ + A₂."

**Warning about this slide.** It is a compression of slides 4, 8 and 12 and it **drops both sign conditions**:
- Line 1 omits **f(x) ≥ 0**, and omits the second case |∫ₐᵇf(x)dx| for f(x) ≤ 0 entirely — even though her own Example 2 on slide 6 needs it.
- Line 2 omits **f(x) ≥ g(x)** — even though her own Example 2 on slide 10 subtracts in the other order because of it.

Revise from slides 4, 8 and 12, and treat slide 16 as an index to them. If an exam question asks you to "state the formula", state it **with its condition** — that is what the original slides do.

## Commonly confused

- **Modulus on the piece, not on the whole.** Slide 6 writes |∫₀¹f| + ∫₁²f. It does **not** write |∫₀²f|. A modulus applied after the two pieces have already cancelled repairs nothing.
- **Split at roots (Part 1) versus split at intersections (Part 3).** For a curve against the axis you split where **f(x) = 0**; for two curves you split where **f(x) = g(x)**. Different equations, different points.
- **Discard roots that lie outside the interval.** Example 2 solves x² − 1 = 0 and gets x = ±1, then keeps only x = 1 "since x = 1 is between 0 and 2".
- **Top minus bottom, decided by a test point.** Her Example 2 on slide 10 subtracts g − f even though f was named first. Test, then write.
- **Subtracting a negative adds.** 45/2 − (−104/3) = 343/6, not −73/6. Example 1 on slide 9 is built on this and so is Example 2 on slide 10 (10/3 − (−7/6) = 9/2).
- **Curves below the axis need no shifting.** In slide 9 the parabola runs down to y = −9 and she still writes plain (f − g). The strip height is a difference of y-values; the axis is irrelevant to it.
- **Not every pair of curves needs a split.** TASK 3's curves meet only at x = 0 and x = 2π — the endpoints — so one integral does it. Check where the intersections actually are before reaching for A₁ + A₂.
- **The unsplit integral is often a plausible-looking wrong number.** Example 2 (slide 6): 2/3 instead of 2. Example 1 (slides 13–14): **0** instead of 2√2 − 2. TASK 2: −4/3 instead of 4.
- **∫sin x dx = −cos x, with the minus.** On slide 14 the integrand sin x − cos x integrates to −cos x − sin x. Both signs are easy to lose.
- **1/√2 is her form for sin(π/4)**, and 2/√2 simplifies to √2. Her final answer 2√2 − 2 comes from 4/√2 − 2.
- **Report square units.** Every one of her five examples ends "the area is … square units". Say it.
- **Slide 16 is not the statement of the rules.** It leaves out f ≥ 0 and f ≥ g. Quote slides 4, 8 and 12 instead.

## What you should be able to say out loud

1. "To find the area between a curve and the x-axis I first find where the curve cuts the axis by setting f(x) = 0, then I test an interior point. If f is positive there I integrate straight; if it is negative I take the modulus of the integral."
2. "If the curve changes sign inside the interval, I split at the root, put a modulus round the piece that is below the axis, and add."
3. "To find the area between two curves I solve f(x) = g(x) for the limits when none are given, test an interior point to see which curve is on top, and integrate top minus bottom."
4. "The height of the strip is a difference of y-values, so it does not matter whether the curves are above or below the x-axis."
5. "If the two curves cross at a point c strictly inside the interval, I work out A₁ from a to c and A₂ from c to b, putting the top function first in each, and add them. One integral over the whole interval would let the two pieces cancel."
6. "sin x = cos x when tan x = 1, that is x = π/4; cos is on top before it and sin is on top after it; and the total area is 2√2 − 2."
7. "The summary slide states the two main formulas without their conditions — f ≥ 0 in the first and f ≥ g in the second — so I quote slides 4, 8 and 12 instead."
