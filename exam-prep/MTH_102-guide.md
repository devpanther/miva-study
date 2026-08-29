# MTH_102 — Elementary Mathematics II (Calculus)

*A complete revision guide covering weeks 1 to 12 of the MIVA Open University semester, rebuilt from the lecture slides themselves.*

---

## Orientation

MTH_102 is single-variable calculus. It has one subject: how quantities change, and how changes add up.

Four ideas carry the whole course.

**1. A function is a machine.** One number in, exactly one number out. Written f(x). Weeks 1–2 cover what a function is, what inputs it accepts (domain), what outputs it produces (range), how to invert one, how to compose two, and the common families.

**2. A limit is what a function is heading towards.** Not what it equals at a point — what it approaches as you close in. Written lim x→c f(x). Weeks 3–4. Limits are the tool that makes the next two ideas possible.

**3. A derivative is an instantaneous rate of change.** Built from a limit: take the gradient of a line joining two points on a curve, then slide the points together until they touch. Written dy/dx or f′(x). Weeks 5–6.

**4. An integral is an accumulated total.** Differentiation run backwards. Written ∫f(x)dx. Weeks 7–12.

The link between 3 and 4 is the most important fact in the course. **Differentiation and integration undo each other.** Differentiate x³ and you get 3x². Integrate 3x² and you get x³ back, plus a constant. That is the Fundamental Theorem of Calculus, and it is why five weeks of integration can follow only two weeks of differentiation.

| Part | Theme | Weeks |
|---|---|---|
| 1 | Functions | 1, 2 |
| 2 | Limits and continuity | 3, 4 |
| 3 | Differentiation | 5, 6 |
| 4 | Integration: the machinery | 7, 8 |
| 5 | Improper integrals | 9 |
| 6 | Area and volume by integration | 10, 11 |
| 7 | Integration applied to real problems | 12 |
| 8 | Formula and definition recap | all |

### A note on the source material

*Most of this lecturer's slides are pictures of text. Extracting them as text recovered the headings and lost the mathematics, and an earlier version of this guide was written around those headings from general calculus knowledge. It taught a course she does not teach.*

*This version is built from the rendered slide images, week by week. Every rule, every worked example and every number below is hers unless it is explicitly marked as an aside. Where she leaves a genuine gap — a rule she uses without ever stating it — the gap is named rather than quietly filled.*

**She is the syllabus.** What is not in her decks is not in this guide, and should not be in your revision. That is a saving, not a loss: the list below is material a standard calculus course would cover and she does not.

> **Not taught anywhere in MTH_102**
>
> The vertical and horizontal line tests · one-to-one, onto and the vocabulary of injections and surjections · any condition for an inverse to exist · the domain of a composite · operations f ± g, fg, f/g · completing the square as a range method · the ε–δ definition of a limit · limits at infinity by dividing through by the highest power · lim x→0 (sin x)/x = 1 as a standard result in its own right · classifying discontinuities into named types · differentiability versus continuity · tangent and normal line equations · second-derivative tests, concavity, maxima and minima · related rates and optimisation · Riemann sums and the limit definition of the integral · ln|x| with its modulus (she writes ln(x) throughout) · LIATE · the a-parameter table for trigonometric substitution · repeated linear factors or polynomial long division in partial fractions · the Limit Comparison Test · the p-test near zero · horizontal strips and area computed with respect to y · total distance as ∫|v|dt · Hooke's law and springs · population growth models.

### The errors on her slides

Several of her slides carry real mistakes — arithmetic, signs, labels. They are boxed throughout this guide like this:

> **SLIDE ERROR.** What the slide prints, what it should say, and why.

Learn the corrected version, and learn what the slide prints, because a wrong value that appears on a slide has a habit of appearing in an option list.

---

## Part 1 — Functions: the object calculus acts on

*Weeks 1 and 2. Week 1: "Working with Real-Valued Functions". Week 2: types of functions.*

### 1.1 What a function is

**In plain words.** A function is a rule that takes an input and returns exactly one output. Her Week 1 summary slide states it directly:

> "A function is a mathematical relation that assigns **exactly one output value to each input value**."

The load-bearing words are *exactly one* and *each*. Her ice-cream-parlour picture makes the same point: choose vanilla, get vanilla; choose chocolate, get chocolate. One choice, one outcome, every time.

**Function versus relation.** Her slide 9 answers this with a picture — a small circle labelled *functions (sets of ordered pairs where each input has only one output)* drawn **inside** a large circle labelled *relations (all sets of ordered pairs)*. Read the nesting: every function is a relation; not every relation is a function. A relation with one input pointing at two outputs is disqualified. Repeated **outputs** never disqualify anything.

**The three sets.** Her most useful diagram, slide 5, shows f(x) = x² with:

- **domain** {1, 2, 3, 4, 5} — what you may put in;
- **range** {1, 4, 9, 16, 25} — what actually comes out;
- a **codomain** drawn around the range that also contains 17, 23 and 19 — values no arrow ever reaches.

The range sits inside the codomain and is usually smaller. Ask yourself: is this set *drawn around* the outputs, or *made of* them?

**Real-valued.** Slide 8 maps D = {A, B, C, D} into Y = {K, 3, 9, 8, 6} and asks "IS THIS A REAL-VALUED FUNCTION?" The answer is no, for a precise reason: one possible output is the letter **K**, which is not a real number. It may still be a function; it is just not real-valued. This is the only place in the course where the "real-valued" half of the topic title is examined directly.

**Evaluating.** Substitute and follow the rule *in order*. Her two examples exist to enforce the order:

- f(x) = 2x + 3, so f(2) = 2(2) + 3 = 4 + 3 = **7** — multiply first, then add. Computing 2 + 3 first and doubling gives 10, which is wrong.
- f(x) = x² − 4, so f(3) = (3)² − 4 = 9 − 4 = **5** — square first, then subtract. Subtracting first gives (3 − 4)² = 1, which is a different function.

**Where people go wrong.** Reading "one output per input" as "one input per output". A function may send many inputs to one output; x² does.

**In the exam.** A mapping diagram or a list of pairs with "is this a function? Give a reason." The marks are in the reason — name the offending input.

> **SLIDE ERROR (Week 1, slide 21).** "As we increase x, the value of f(x) increases **exponentially**" is wrong for f(x) = x². Exponential growth has the variable in the exponent, as in 2ˣ. Here the variable is in the base, and the growth is **quadratic**. The very next sentence on the same slide correctly says "parabolic curve", so the slide contradicts itself.

> **SLIDE ERROR (Week 1, slide 25).** Two of the four summary bullets are loose. "Functions take an input (called the domain)" conflates one input with the *set* of inputs — the domain is the whole set, exactly the distinction slide 5 draws. "Functions are typically represented as x" is a typo for **f(x)**, or y = f(x); as printed it names the input, not the function. Bullets one and four of that slide are exact and quotable.

### 1.2 Finding a domain

**Her rule, verbatim (slide 13).** "For f(x) to be a defined function, the denominator can not be zero."

That is the whole method as she gives it: set the denominator ≠ 0, rearrange, and ask which real values of x that excludes.

**Her worked example.** What is the domain of f(x) = (3x + 1)/(x² + 5)?

x² + 5 ≠ 0
x² ≠ −5

> "NOTE: the square of both positive and negative numbers will always give a positive number."

Therefore no real x can break it, and **D = (−∞, ∞)**.

Read what she actually did. She did not stop because the algebra got hard — she stopped because **x² = −5 has no real solution**, so there is nothing to exclude. Writing x ≠ ±√−5 is not an answer; √−5 is not a real number.

**The shape this prepares you for.** Had the denominator been x² − 5, the domain would be every real number except ±√5. That is the version where a value genuinely is excluded, and it is the version most likely to be set.

**Roots.** She uses one square root, in the Week 1 TASK: for h(x) = √(x + 2) − 8 the quantity under the root cannot be negative, so x + 2 ≥ 0 and **D = [−2, ∞)**.

**Where people go wrong.** Excluding a value because the *numerator* is zero there — that just means f(x) = 0, which is fine. In (3x + 1)/(x² + 5) the numerator is irrelevant to the domain.

**In the exam.** She writes domains as a capital **D** in interval notation: D = (−∞, ∞), D = [−2, ∞). Never set-builder, never words. Match her.

### 1.3 Finding a range

She gives two methods and you should be able to tell which one a question wants.

**Method 1 — make x the subject.** Find the range of f(x) = 2x − 9.

> "We know that the range is the set of all possible output values (typically represented by y or f(x))."

y = 2x − 9
2x = y + 9
x = (y + 9)/2

Every real y gives a perfectly legal x — no division by zero, no root of a negative — so every y is attainable and **R = (−∞, ∞)**.

The method is doing real work even when the answer looks obvious. It is the same method that would expose an excluded y in a rational function.

**Method 2 — build the range from an inequality.** Find the range of f(x) = 2 − |x − 3|. Her four lines:

1. "For an absolute function, if **|x − 3| ≥ 0**" — an absolute value is never negative. This is the only fact about absolute value the course uses.
2. "Then, **−|x − 3| ≤ 0**" — **multiplying by −1 reverses the inequality**. This is the step students lose.
3. "Add 2 to both sides": 2 − |x − 3| ≤ 2. Adding does **not** reverse it.
4. The left-hand side is y, so y ≤ 2, i.e. **R = (−∞, 2]**.

The square bracket at 2 is there because y = 2 is attained, at x = 3.

**The TASK (slide 18), which she sets and never answers.** Domain and range of h(x) = √(x + 2) − 8.

*Domain:* x + 2 ≥ 0, so **D = [−2, ∞)**.
*Range:* √(x + 2) ≥ 0, so √(x + 2) − 8 ≥ −8, so **R = [−8, ∞)**.

Note that here, unlike the absolute-value example, **subtracting 8 does not reverse the inequality** — nothing was multiplied by a negative. Both brackets are square: h(−2) = −8 is attained.

**Where people go wrong.** Getting the reversal backwards, which turns (−∞, 2] into [2, ∞). And mixing up the brackets: [−8, ∞) — the −8 is attained, ∞ never is.

**In the exam.** This is the single most likely Week 1 template, because it is the one exercise she sets without giving an answer.

### 1.4 Inverse functions

**Her recipe, in her three words (slide 19).** *Let* y = f(x) — *Switch x with y* — *isolate the y variable*.

**Her example.** Find the inverse of f(x) = 3x − 7.

y = 3x − 7
x = 3y − 7   (switch)
3y = x + 7
y = (x + 7)/3

so **f⁻¹(x) = (x + 7)/3**.

Check it the way you would check any inverse: f(4) = 3(4) − 7 = 5, and f⁻¹(5) = (5 + 7)/3 = 4.

**Where people go wrong.** Confusing the inverse with the reciprocal — f⁻¹(x) is (x + 7)/3, while 1/f(x) is 1/(3x − 7). Compose to test: an inverse hands x back, a reciprocal hands back 1. And after switching, **isolate y, not x**; half the marks sit in that rearrangement and it is easy to solve for the wrong letter out of habit.

*Two asides, not on her slides.* She writes the answer as "f⁻¹ = (x + 7)/3" without the argument; write **f⁻¹(x) = …** in a script, since the argument is what makes it a function. And the deck never says when an inverse exists — every example she sets is a straight line, where it is automatic. She does not teach the condition and is unlikely to examine it.

### 1.5 Composite functions

**Her notation (slide 20).** f ∘ g = **f[g(x)]**, with square brackets around the inner function. The function written **nearest the x acts first**.

**Her two examples, deliberately on the same slide.** Given f(x) = 5x − 4 and g(x) = x²:

f ∘ g = f[g(x)] = f[x²] = 5(x²) − 4 = **5x² − 4**

g ∘ f = g[f(x)] = g[5x − 4] = (5x − 4)(5x − 4) = 25x² − 20x − 20x + 16 = **25x² − 40x + 16**

They are on one slide for one reason: 5x² − 4 ≠ 25x² − 40x + 16, so **f ∘ g ≠ g ∘ f**. Order is part of the question.

**Copy her expansion.** She writes (5x − 4)² the long way, as (5x − 4)(5x − 4), showing both −20x terms before collecting them into −40x. (5x − 4)² = 25x² + 16 is the single most common error in this topic, and writing the product out prevents it.

**In the exam.** Expect both composites of one pair of functions, or a numerical version: with f(x) = 2x + 3 and g(x) = x² − 1, (f ∘ g)(2) = f(3) = 9 while (g ∘ f)(2) = g(7) = 48.

### 1.6 The families of function

*Week 2 surveys the types. Her slides define them; the algebra below is the standard technique for each.*

| Family | Form | What to read off |
|---|---|---|
| Linear | f(x) = mx + b | slope m, y-intercept b |
| Quadratic | f(x) = ax² + bx + c, a ≠ 0 | opens up if a > 0, down if a < 0 |
| Exponential | f(x) = a·bˣ, b > 0, b ≠ 1 | growth if b > 1, decay if 0 < b < 1 |
| Logarithmic | f(x) = log_b x | the inverse of bˣ; argument must be > 0 |
| Absolute value | \|x\| = x if x ≥ 0, −x if x < 0 | distance from 0, so never negative |
| Piecewise | several formulas on disjoint intervals | pick the branch the input falls in |
| Polynomial | aₙxⁿ + … + a₀ | degree n, leading coefficient aₙ |
| Periodic | f(x + P) = f(x) | sin, cos have period 2π; tan has π; sin(kx) has 2π/k |

**Straight lines.** m = (y₂ − y₁)/(x₂ − x₁), then y − y₁ = m(x − x₁). Through (−2, 5) and (4, −7): m = −12/6 = −2, so y = −2x + 1.

**Quadratics.** The vertex sits at x = −b/2a, and its height is f(−b/2a). For f(x) = x² + 6x + 5: x = −6/2 = −3 and f(−3) = 9 − 18 + 5 = −4, so the vertex is **(−3, −4)**. The discriminant Δ = b² − 4ac decides the roots: Δ > 0 two, Δ = 0 one repeated, Δ < 0 none. x² − 4x + 7 has Δ = 16 − 28 = −12, so it never meets the x-axis.

> **SLIDE ERROR (Week 2).** The slide says that in f(x) = ax² + bx + c the constant **c is the y-coordinate of the vertex**, and that b "shifts the parabola horizontally". Neither is true. Put x = 0 and you get c, so **c is the y-intercept**; the vertex is at x = −b/2a, which equals 0 only when b = 0. For f(x) = x² + 6x + 5 the y-intercept is 5 and the vertex height is −4 — two different numbers, on the same slide's own example.

**Exponentials and logarithms are inverses.** b^y = x is the same statement as y = log_b x. So log₃81 asks "3 to what power is 81?" and the answer is **4**, not 27 and not 9. Solve 3·2ˣ = 96 by isolating first: 2ˣ = 32 = 2⁵, so x = 5. Solve 2^(x+1) = 8^(x−1) by matching bases: 8 = 2³, so x + 1 = 3x − 3 and x = 2.

Log laws: log(MN) = log M + log N; log(M/N) = log M − log N; log(Mᵏ) = k log M. Only the *product* splits. Always check the domain first — for log₁₀x + log₁₀(x − 3) = 1 you need x > 3, which is what rejects the root x = −2 and leaves **x = 5**.

**Absolute value.** |2x − 5| = 7 splits into two cases, 2x − 5 = 7 and 2x − 5 = −7, giving x = 6 and x = −1. An inequality unfolds instead of splitting: |x − 3| < 5 means −5 < x − 3 < 5, so **−2 < x < 8**. And |x| = k has no solution when k < 0, because a distance cannot be negative.

**Piecewise.** The only requirement is that each input falls in exactly one branch. For f(x) = 2x + 1 on x ≤ 0 and x² − 3 on x > 0, the value f(0) = 1 comes from the first branch, because x = 0 satisfies x ≤ 0. The branches need not agree at the boundary.

**Polynomials.** For f(x) = 5 − 2x⁴ + x³ the degree is 4 and the leading coefficient is −2 — the highest power present, and *its* coefficient, not the constant term. For large |x| the leading term decides both tails.

---

## Part 2 — Limits and continuity

*Weeks 3 and 4. Week 3: evaluating limits algebraically. Week 4: continuity and reading limits off a graph.*

### 2.1 What a limit is

lim x→c f(x) is the value f(x) heads towards as x closes in on c. It is not f(c). The limit is built only from x **near** c and never from x = c itself — which is exactly why a function can have a limit at a point where it is not even defined.

She writes the point being approached as **c**, never a. There is no ε–δ definition anywhere in the course; a picture of one sits on an objectives slide and is never explained.

**Her four methods, and how to tell which one a question wants:**

1. **Substitute first.** If you get a number, you are finished.
2. **0/0 with polynomials** → factorise and cancel.
3. **0/0 with a square root** → multiply by the conjugate of the numerator.
4. **A small fraction inside a big one** → multiply through by the common denominator.
5. **0/0 or ∞/∞ that resists all of that** → L'Hôpital.

### 2.2 Direct substitution

**Her statement (slide 4).** "This is the simplest method and applies when substituting the value of c directly into the function results in a **well-defined expression**."

lim x→3 (x² + 2x − 3) = 9 + 6 − 3 = 15 − 3 = **12**. She keeps the line 15 − 3; copy that, it is a mark for visible arithmetic.

lim x→2 (x³ − 3)/(x² − 6) = (8 − 3)/(4 − 6) = 5/(−2) = **−2.5**.

That second example exists to make one point: **the denominator did not have to be positive, or pretty, for substitution to be legal.** 4 − 6 = −2 is a perfectly good non-zero number. Do not go hunting for a factorisation; there is nothing indeterminate here.

**Where people go wrong.** Treating an ugly answer as a failure. Only 0/0 stops you.

### 2.3 Factorisation

**Her statement (slide 6).** "When direct substitution results in an indeterminate form, factoring and simplification can help."

Her sequence is fixed: **substitute → get 0/0 → factor → cancel the common factor → substitute again.**

**Example.** lim x→2 (x² − 4)/(x − 2). Substitution gives 0/0. Factor: (x − 2)(x + 2)/(x − 2). Cancel, then substitute: **4**.

The cancellation needs a justification she does not give on the slide, so hold it yourself: **throughout a limit, x is close to 2 but never equal to 2**, so x − 2 is never actually zero and dividing by it is legal. The simplified function x + 2 agrees with the original everywhere except the single point x = 2, and the limit never inspects that point.

**Complex fractions live here too.** lim x→2 (1/x − 1/2)/(x − 2). She multiplies numerator and denominator by the common denominator **2x**:

(1/x − 1/2)·2x = 2 − x, and (x − 2)·2x = 2x(x − 2), giving (2 − x)/[2x(x − 2)].

Then — and this is the whole question — she factors out −1:

2 − x = **−1(x − 2)**

so the expression becomes −1/(2x), and substituting x = 2 gives **−1/4**.

**Her TASK (slide 8), unanswered on the slide.** lim x→3 (x³ − 27)/(x − 3). The difference of cubes is x³ − 27 = (x − 3)(x² + 3x + 9), so the limit is 9 + 9 + 9 = **27**. L'Hôpital confirms it: 3x²/1 at x = 3 is 27.

**Where people go wrong.** Cancelling 2 − x against x − 2 directly. That flips a sign and turns −1/4 into +1/4. Write 2 − x = −1(x − 2) first, every time.

### 2.4 Rationalisation

**Her statement (slide 9).** "Useful when dealing with limits involving square roots or complex fractions."

Multiply numerator and denominator by the **conjugate of the numerator** — the numerator is where the root is.

**Example.** lim x→0 (√(x + 9) − 3)/x. Multiply by (√(x + 9) + 3)/(√(x + 9) + 3):

[(x + 9) − 9]/[x(√(x + 9) + 3)] = x/[x(√(x + 9) + 3)] = 1/(√(x + 9) + 3)

Substituting x = 0 gives 1/(3 + 3) = **1/6**.

**Example.** lim x→4 (√x − 2)/(x − 4). The conjugate gives (x − 4)/[(x − 4)(√x + 2)] = 1/(√x + 2) = **1/4**. One line shorter, because (√x − 2)(√x + 2) = x − 4 exactly.

**Her TASK (slide 11), unanswered, and it needs both methods at once.** lim x→4 (1/√x − 1/2)/(x − 4).

Clear the complex fraction with the common denominator 2√x: 1/√x − 1/2 = (2 − √x)/(2√x), so the whole expression is (2 − √x)/[2√x(x − 4)].

Factor the difference of squares in √x: x − 4 = (√x − 2)(√x + 2).

Write 2 − √x = **−1(√x − 2)** — the same −1 move as before — and cancel:

−1/[2√x(√x + 2)], which at x = 4 is −1/[2(2)(4)] = **−1/16**.

Both of the week's minus signs, in −1/4 and in −1/16, come from that one rewrite.

### 2.5 L'Hôpital's Rule

**Her statement (slide 12).** "L'Hôpital's Rule essentially allows you to replace the original function with its derivatives in situations where direct substitution results in an indeterminate form."

So lim f(x)/g(x) becomes **lim f′(x)/g′(x)** — top and bottom differentiated **separately**. This is not the quotient rule. If a g² appears in your working, you used the wrong rule.

**Her layout, worth copying exactly.** For lim x→0 (sin x)/x:

f(x) = sin x, g(x) = x
f′(x) = cos x, g′(x) = 1
lim x→0 (cos x)/1 = cos(0)/1 = **1**

Naming f and g and differentiating each on its own line makes it visually impossible to slide into the quotient rule.

**Repeat while the form survives.** For lim x→∞ x²/eˣ:

lim 2x/eˣ — still ∞/∞, "so we differentiate again"
lim 2/eˣ = 2/∞ = **0**

The rule is applied as many times as the indeterminate form survives, and **not once more**. Re-check the form before each new application, and stop the moment it is no longer indeterminate.

*Asides, not on her slides.* Her "2/∞ = 0" is informal shorthand; properly, eˣ → ∞ so the fraction is driven to 0. And she never states the hypotheses — f and g differentiable near c with g′ ≠ 0. The one hypothesis you must never skip is the indeterminate form itself: applying L'Hôpital to a quotient that is not 0/0 or ∞/∞ gives a wrong answer.

### 2.6 The ten properties of a limit

She names ten and gives each its own slide with a small worked illustration. Being able to **name all ten** is a realistic exam ask.

| Property | Statement | Her example |
|---|---|---|
| Sum | lim[f + g] = lim f + lim g | lim x→2 (3x + 4x) = 6 + 8 = 14 |
| Difference | lim[f − g] = lim f − lim g | lim x→−3 (7x − 2x) = −21 + 6 = −15 |
| Constant | lim k = k | lim x→1 5 = 5 |
| Constant multiple | lim k f = k lim f | lim 3f = 3(4) = 12 |
| Product | lim[f·g] = lim f · lim g | 4 × 6 = 24 |
| Quotient | lim f/g = lim f / lim g, **provided lim g ≠ 0** | lim x→4 6x²/5x = 96/20 = 4.8 |
| Power | lim[fⁿ] = [lim f]ⁿ | lim x→0 (x + 4)³ = 4³ = 64 |
| Composite | named on her list | slide content not recoverable |
| Squeeze | see below | 5 ≤ f(x) ≤ 5 forces lim f = 5 |
| Reciprocal | lim 1/f = 1/lim f, **provided lim f ≠ 0** | 1/6² = 1/36 |

**The two provisos are the examinable half.** Quotient needs lim g ≠ 0; Reciprocal needs lim f ≠ 0. That is exactly the condition that fails in a 0/0 problem, which is why factorisation and rationalisation exist at all.

**Two details in her examples.** The Difference example turns on a sign: 7(−3) − 2(−3) = −21 **+** 6 = −15, because subtracting a negative adds. The Constant Multiple example is answered **without ever knowing what f is** — you are handed the limits, not the functions, and that is the exam shape.

**Squeeze Theorem, in her lettering.** "If f(x) ≤ g(x) ≤ h(x) for all x in some interval containing c except possibly at c itself, and lim f = lim h = L, then lim g = L." The **squeezed** function is **g**; the bounds are f below and h above. The two outer limits must come out **equal**, or the theorem tells you nothing.

> **SLIDE ERROR (Week 3, slide 23).** Her example states the bounds as 5 − x³ ≤ f(x) ≤ 5 + x³ and then prints the next two lines with **5 − x³ on both sides**. The upper bound must be 5 + x³. Written correctly, 5 ≤ f(x) ≤ 5 and lim x→0 f(x) = 5. The answer 5 is right either way, which is precisely why the typo is easy to miss. Note also that the example calls the squeezed function f while the theorem two lines above calls it g — the letters swap inside one slide.

> **SLIDE ERROR (Week 3, slide 27).** The summary says "lim x→∞ f(x) represents the limit approaching x from the right while lim x→−∞ f(x) is used when the limit approaches x from the left." That confuses two different things. **lim x→∞ and lim x→−∞ are limits at infinity** — end behaviour, with no finite point involved. A one-sided limit approaches a **finite** point c and is written lim x→c⁺ or lim x→c⁻. If a question quotes this back at you, say so.

### 2.7 Continuity, and reading a limit off a graph

*Week 4. The definitions here are the deck's; the graphs are reconstructed from it.*

**Continuity at a point — the three conditions, in order.** f is continuous at c if

(i) f(c) is defined; (ii) lim x→c f(x) exists; (iii) lim x→c f(x) = f(c).

All three. Failing any one makes f discontinuous at c. Graphically: you can draw the curve through the point **without lifting your pen**.

**One-sided limits.** lim x→c⁻ f(x) is the height the curve runs into from the left (x < c); lim x→c⁺ f(x) is the height it runs into from the right (x > c).

**The existence rule.** lim x→c f(x) exists **iff** the two one-sided limits agree and are finite. If they differ, the limit **does not exist (DNE)**.

**Reading the graph.** Three things to pick off, and they are different things:

- the height the left branch runs into → lim x→c⁻;
- the height the right branch runs into → lim x→c⁺;
- the **shaded (solid) dot** at x = c → f(c).

An **open circle** marks a height the curve approaches but does not take. It contributes to a one-sided limit and contributes **nothing** to f(c). Only a filled dot may be quoted as a function value.

**Worked example — a break.** For x < 2 the curve runs into height 3 and stops at an open circle at (2, 3). For x > 2 it starts at an open circle at (2, −4) and continues down. A solid dot sits at (2, 1).

lim x→2⁻ f(x) = 3, lim x→2⁺ f(x) = −4. They differ, so **lim x→2 f(x) = DNE**. And f(2) = **1**, the solid dot. Note that f(2) *is* defined here and the function is still discontinuous — being defined is only condition (i) of three.

**Worked example — a hole.** f(x) = (x² − 1)/(x − 1). Substitution gives 0/0, which is a signal to factor, not a verdict of DNE. Cancel: f(x) = x + 1 for every x ≠ 1, so both one-sided limits are 2 and **lim x→1 f(x) = 2**. But f(1) = 0/0 is undefined, so condition (i) fails. The graph is the line y = x + 1 with an open circle at (1, 2).

**Worked example — an asymptote.** A vertical dashed line at x = 3, the curve plunging on the left and climbing on the right, no dot of any kind. Then lim x→3⁻ = −∞ and lim x→3⁺ = +∞. Neither is a real number, so **lim x→3 f(x) = DNE** and f(3) is undefined. Writing "lim = +∞" is a *description of how the limit fails*, not a value.

**A corner is not a break.** g(x) = |x| has a sharp corner at 0, yet lim x→0⁻ = lim x→0⁺ = 0 = g(0), so it is **continuous** at 0. Continuity is about lifting the pen, not about smoothness of direction.

**Where people go wrong.** Answering "DNE" without saying which limit is meant — at a break the two-sided limit is DNE while both one-sided limits exist perfectly well. And quoting an open circle as a function value.

**In the exam.** A graph with four things to read off: the two one-sided limits, the two-sided limit, and f(c). Read them in that order and the fourth answer falls out of the first three.

---

## Part 3 — Differentiation

*Weeks 5 and 6. Week 5: nine rules, each introduced by a worked example. Week 6: one idea — differentiate again — worked six times.*

### 3.1 The power rule

**Her statement (slide 4).** "when f(x) = xⁿ, **f′(x) = nx^(n−1)**." Multiply by the old power, then drop the power by one.

f(x) = x⁴ gives f′(x) = 4x³.

**Her second example, and the line she writes out separately.** f(x) = 3x¹⁰⁰ − 4x.

f′(x) = (3×100)x⁹⁹ − (4×1)x⁰ = 300x⁹⁹ − 4x⁰ = **300x⁹⁹ − 4**, "where x⁰ = 1".

Two habits to copy. She writes the coefficient multiplication **explicitly as (3×100)** rather than doing it in her head, so the 3 never gets dropped. And she treats **x as x¹**, so its derivative is 1·x⁰ = 1. The derivative of −4x is −4, not −4x⁰ left standing.

**Roots are fractional powers.** ⁵√(x³) = x^(3/5), so its derivative is (3/5)x^(3/5 − 1) = (3/5)x^(−2/5) = 3/(5·⁵√(x²)). The exponent arithmetic is 3/5 − 5/5 = −2/5.

> **SLIDE ERROR (Week 5, slide 20).** The solution line prints "³√(x⁵) can also be written as x^(3/5)". ³√(x⁵) is x^(5/3); the index and the power have been swapped inside the radical. The **question** is ⁵√(x³), and ⁵√(x³) = x^(3/5) is correct, so every line after it is right. Read the radical from the question. The same slide is titled CONSTANT MULTIPLE RULE but contains no constant multiple at all — it is a power-rule example with a fractional index. She never states the constant multiple rule anywhere; she only uses it silently.

**Note what she never names.** She differentiates 3x¹⁰⁰ − 4x term by term without ever calling it a sum rule. There is no named sum or difference rule in this course — she just does it.

### 3.2 First principles

**Her formula (slide 17).** **f′(x) = lim h→0 [f(x + h) − f(x)]/h.** Her summary slide calls this "the limit definition of the derivative" and calls the power rule "the general rule of differentiation" — that pairing is a likely one-mark question.

**Example 1.** Differentiate y = 3x from first principles.

f′(x) = lim h→0 [3(x + h) − 3x]/h = lim h→0 [3x + 3h − 3x]/h = lim h→0 3h/h = lim h→0 3 = **3**

The pattern: **substitute into f(x + h), expand, cancel the terms common to f(x + h) and f(x), divide out the h, then let h → 0.** The h must cancel from the denominator *before* the limit is taken — that is the only reason the answer is finite.

**Example 2, the deck's hardest single calculation.** Differentiate y = √x from first principles.

f′(x) = lim h→0 [√(x + h) − √x]/h

Multiply above and below by the conjugate √(x + h) + √x:

= lim h→0 [(x + h) − x]/[h(√(x + h) + √x)]
= lim h→0 h/[h(√(x + h) + √x)]
= lim h→0 1/(√(x + h) + √x)
= 1/(√x + √x) = **1/(2√x)**

The **conjugate multiplier** is the whole trick: it turns the numerator into h, and that h cancels the h below. Without it, h = 0 gives 0/0. Note her last two lines — she puts h = 0 *inside the surd* first, getting √x + √x, and only then writes 2√x.

Cross-check with the power rule: √x = x^(1/2), so f′ = (1/2)x^(−1/2) = 1/(2√x). The two methods agreeing is the deck's implicit argument for why the power rule is "the general rule".

**Where people go wrong.** Substituting h = 0 before cancelling — that gives 0/0. If an h still survives in your answer, you have not finished.

**In the exam.** She never uses first principles on a quadratic; her two examples are y = 3x and y = √x. Expect one of those two shapes, and expect the limit to be written out.

### 3.3 Product and quotient

**Product rule, in her order (slide 6).** "when f(x) = u(x)·v(x) we have **f′(x) = u(x)v′(x) + u′(x)v(x)**." She writes the undifferentiated first factor times the derivative of the second, first. Addition is commutative so either order is right, but matching her layout stops you losing track of which pair you have done.

Her procedure is always the same: **list u, v, u′, v′ on one line, substitute, simplify.**

**Example.** f(x) = x²·sin x. u = x², v = sin x, u′ = 2x, v′ = cos x, so f′(x) = **x² cos x + 2x sin x**.

*A genuine gap in the deck.* She uses d/dx(sin x) = cos x here and d/dx(cos x) = −sin x elsewhere **without ever stating either as a rule**. Memorise the pair. The minus sign on cos is where most marks in this week are lost.

**Example.** f(x) = (4x + 6)(2x³ − 5x). u = 4x + 6, v = 2x³ − 5x, u′ = 4, v′ = 6x² − 5.

f′(x) = (4x + 6)(6x² − 5) + (2x³ − 5x)(4)
= (24x³ − 20x + 36x² − 30) + (8x³ − 20x)
= **32x³ + 36x² − 40x − 30**

Check by expanding first: f(x) = 8x⁴ + 12x³ − 20x² − 30x, so f′ = 32x³ + 36x² − 40x − 30.

> **SLIDE ERROR (Week 5, slide 7), two of them.** (i) The substitution line prints `(4x + 6)(6x − 5)` — the **square on 6x² has been lost**, even though the line directly above correctly gives v′ = 6x² − 5. (ii) The final line prints **8x³ + 24x² − 32x − 30**, which is not the derivative of anything on the slide; it is not even what the misprinted version would give (that would be 8x³ + 24x² − 4x − 30). The correct answer is **32x³ + 36x² − 40x − 30**, confirmed by expanding before differentiating.

**Quotient rule, in her order (slide 8).** "given f(x) = u(x)/v(x), then **f′(x) = [v(x)u′(x) − u(x)v′(x)]/(v(x))²**." The **v u′ term comes first and carries the plus**; the u v′ term carries the minus. Reversing them negates the whole answer.

**Example.** f(x) = x/cos x. u = x, v = cos x, u′ = 1, v′ = −sin x.

f′(x) = [cos x·1 − x(−sin x)]/cos²x = **(cos x + x sin x)/cos²x**

Watch what the double negative does: u v′ = x(−sin x) = −x sin x, and the rule subtracts it, so −(−x sin x) = **+x sin x**. Two sign changes in a row.

> **SLIDE ERROR (Week 5, slide 8).** The final line prints **(cos x + sin x)/cos²x** — the factor **x has been dropped** from the second term. The line immediately above has it. The correct answer is (cos x + x sin x)/cos²x.

**Example.** f(x) = (6x − 3)/(5x²). u = 6x − 3, v = 5x², u′ = 6, v′ = 10x.

f′(x) = [5x²·6 − (6x − 3)(10x)]/(5x²)²
= (30x² − 60x² + 30x)/25x⁴
= (−30x² + 30x)/25x⁴ = **6(1 − x)/(5x³)**

Two moves to watch: **(5x²)² = 25x⁴**, squaring the coefficient as well as the power; and subtracting (6x − 3)(10x) = 60x² − 30x turns −30x into **+30x**. The tidy-up divides top and bottom by 5x.

**Where people go wrong.** Believing (uv)′ = u′v′. Test it on the example above: u′v′ = 4(6x² − 5) = 24x² − 20, nothing like the right answer. Differentiation does not distribute over multiplication.

### 3.4 The chain rule

**Her statement (slide 10).** "when f(x) = f(g(x)), if y = f(u) where u = g(x), then **f′(x) = y′(u)·u′(x)**."

Differentiate the outside in terms of u, differentiate the inside, multiply, then **put u back**.

**Example.** f(x) = cos(x²). Let u = x², so y = cos u.

y′(u) = −sin u, u′(x) = 2x
f′(x) = −sin(u)·2x = **−2x sin(x²)**

Answering −2x sin(u) leaves the answer in the wrong variable — the substitution was yours, and it must be undone.

**Her TASK 1 (slide 11), unanswered.** f(x) = (2x − 4)². With u = 2x − 4, y = u²:

f′(x) = 2u·2 = 4(2x − 4) = **8x − 16**

Check by expanding: f(x) = 4x² − 16x + 16, f′ = 8x − 16. The answer 2(2x − 4) = 4x − 8 is what you get if you forget u′(x) = 2, and that is the entire point of the task.

**The test.** Is the base anything other than a bare x? Then a factor u′(x) is owed.

### 3.5 Implicit differentiation

**The mechanism.** Differentiate both sides with respect to x. Every y that gets differentiated leaves behind a factor **dy/dx** — that factor *is* the chain rule's u′(x), because y is itself a function of x. Then collect all the dy/dx terms on one side, **factorise**, and divide.

**Example 1.** x² + y² = 25.

2x + 2y(dy/dx) = 0
dy/dx = −2x/2y = **−x/y**

Her phrase for the second term is "applying the chain rule for y²". The right-hand side, a constant, differentiates to 0.

**Example 2.** xy + 6x⁴ = y.

y + x(dy/dx) + 24x³ = dy/dx
x(dy/dx) − dy/dx = −24x³ − y
(dy/dx)(x − 1) = −(24x³ + y)
**dy/dx = −(24x³ + y)/(x − 1)**

Three ideas stacked. **xy needs the product rule**, giving y·1 + x(dy/dx). **Every dy/dx goes to one side.** **Then factorise it out** — this is the step students skip, and without it there is nothing to divide by.

**The test for when a dy/dx appears.** Is the letter you are differentiating different from the variable you are differentiating with respect to? If so, a dy/dx factor is owed.

### 3.6 Parametric differentiation

**Her rule (slide 14).** **dy/dx = dy/dt ÷ dx/dt.** Note she writes it as a division, not as a product of fractions.

**Example.** x(t) = 2t + 1, y(t) = t² − t.

x′(t) = 2, y′(t) = 2t − 1, so **dy/dx = (2t − 1)/2**

The answer is legitimately left **in terms of t**. There is no requirement to eliminate the parameter, and she does not.

**Her TASK 2 (slide 15), unanswered.** x(t) = t⁴, y(t) = 7t² − 5t gives x′ = 4t³, y′ = 14t − 5, so **dy/dx = (14t − 5)/(4t³)**, valid for t ≠ 0.

**Where people go wrong.** Quoting dy/dt as the gradient. Re-parametrise t → 2t and the gradient of the curve must not change, but dy/dt does.

### 3.7 Constant and partial derivatives

**Constant rule (slide 16).** "Since the function has no variable, it is a constant. Therefore dy/dx = 0." Her NOTE: **the derivative of a constant is zero.**

Her test is a test on the whole expression: has it no variable in it? Then it is a constant. This is what kills the 25 in x² + y² = 25. The −5 inside 7t² − 5t is not such a case — that term still carries a t.

**Partial differentiation (slide 21).** "For ∂f/∂x we treat **y** as a constant. For ∂f/∂y we treat **x** as a constant." Nothing more — no chain rule for partials, no mixed second partials.

**Example.** f(x, y) = 3x² + 2xy − y³.

- **∂f/∂x = 6x + 2y**: 3x² → 6x; 2xy → 2y (y is a constant multiplier); −y³ → 0.
- **∂f/∂y = 2x − 3y²**: 3x² → 0; 2xy → 2x; −y³ → −3y².

The pattern: **any term without the variable you are differentiating by dies**, by the constant rule.

> **SLIDE ERROR (Week 5, slide 21).** The second answer is labelled "**∂f/∂x** = 2x − 3y²". The expression is right but the label is not — it is ∂f/∂y. The words directly above it say "For ∂f/∂y we treat x as a constant", so the intent is unambiguous.

**Partial versus implicit.** In ∂f/∂y the other variable is a **genuine constant** and contributes no dy/dx. That is the exact opposite of implicit differentiation, and the two topics sit nine slides apart in the same deck.

### 3.8 Higher-order derivatives

*Week 6 is one idea worked six times: to get a higher derivative, differentiate the derivative you already have, using the ordinary rules again. There is no new machinery.*

**Notation.** f′, f″, f‴, then **f⁽⁴⁾(x)** — a bracketed superscript that **counts differentiations**, not a power. Her slide states it: "the notation for the fourth derivative can be written as f⁽⁴⁾(x) or (f‴(x))′." In Leibniz form: dy/dx, d²y/dx², d³y/dx³.

**The standard derivatives she supplies, and nothing beyond them:** d(tan x)/dx = sec²x, d(ln x)/dx = 1/x, d(sin x)/dx = cos x, d(eˣ)/dx = eˣ.

**Example — a polynomial.** f(x) = x⁴ + 2x³ − 15x + 4 gives f′(x) = **4x³ + 6x² − 15**. The constant does not become 4 and it does not survive; it vanishes.

**Example — a constant multiple survives.** y = 3 tan x + 3 gives dy/dx = 3·sec²x + 0 = **3 sec²x**. Do not confuse "the derivative of a constant is 0" with "constants disappear from products".

**Example — rewrite the root first.** f(x) = √(x³) = x^(3/2).

y′ = (3/2)x^(1/2), then y″ = (3/2)(1/2)x^(1/2 − 1) = **(3/4)x^(−1/2)**

The coefficients **multiply** and the exponent falls by one even when it is a fraction, and even when it goes negative.

**Example — negative powers.** f(x) = ln x.

y′ = 1/x = x⁻¹; y″ = −x⁻²; y‴ = 2x⁻³, so **f‴(2) = 2/2³ = 1/4**

The sign flips once and then flips back, and the coefficient climbs 1 → −1 → 2. Her habit of writing each answer **both ways** — as a fraction and as a negative power — exists because the negative-power form is the one you can differentiate again.

**Example — the chain factor comes back every time.** For sin(5x) + e^(3x):

dy/dx = 5cos(5x) + 3e^(3x)
d²y/dx² = −25sin(5x) + 9e^(3x)
d³y/dx³ = **−125cos(5x) + 27e^(3x)**

Track the two coefficients separately: **5 → 25 → 125** with the sign cycling +, −, −; and **3 → 9 → 27** with **no sign change ever**, because eᵘ reproduces itself. The argument 5x never changes; the coefficient in front grows.

**Her TASK 1 (slide 7), unanswered.** y = cos(3x): y′ = −3sin(3x), y″ = **−9cos(3x)**. The sign appears at the *first* step, and the second contributes none.

**Her TASK 2 (slide 15), unanswered, and the only place the product rule is needed.** f(x) = xeˣ:

f′ = (x + 1)eˣ, f″ = (x + 2)eˣ, f‴ = (x + 3)eˣ, so **f‴(2) = 5e² ≈ 36.95**

Each differentiation adds exactly 1 to the bracket.

**The deck's main exercise — ln(1 + x²), differentiated four times.** Five of its fifteen content slides are this one problem.

Chain rule first: with u = 1 + x², f′(x) = (1/u)(2x) = **2x/(1 + x²)**.

That is a quotient, so every order after it needs the quotient rule again. With u = 2x, v = 1 + x², u′ = 2, v′ = 2x:

f″(x) = [(1 + x²)2 − 2x(2x)]/(1 + x²)² = **(2 − 2x²)/(1 + 2x² + x⁴)**

She expands the denominator rather than leaving it bracketed, and carries the expansion forward. Applying the quotient rule twice more gives

f‴(x) = (4x⁵ − 8x³ − 12x)/(1 + 4x² + 6x⁴ + 4x⁶ + x⁸)

and then the fourth derivative, whose numerator is

−12x¹² + 24x¹⁰ + 204x⁸ + 336x⁶ + 204x⁴ + 24x² − 12

over (1 + 4x² + 6x⁴ + 4x⁶ + x⁸)².

> **SLIDE ERROR (Week 6, slides 13–14).** The slide prints the fourth-derivative numerator as −12x¹² + **40**x¹⁰ + **568**x⁸ + **416**x⁶ + **240**x⁴ + 24x² − 12. Four of the seven coefficients are wrong. The set-up on slide 13 — the u, v, u′, v′ and the quotient-rule line — is completely correct; only the final expansion is not. Learn the method from her and take the numbers from here.

*A checking aside, not on her slides:* since 1 + 4x² + 6x⁴ + 4x⁶ + x⁸ is (1 + x²)⁴, the correct fourth derivative collapses to −12(x⁴ − 6x² + 1)/(1 + x²)⁴. She never simplifies, and you should answer her way — but this factorisation is a fast way to check your own expansion.

> **SLIDE ERRORS (Week 6, minor).** Slides 8 and 15 both write "the third derivative of **f(2)** = ln x" and "of **f(2)** = xeˣ"; f(2) is a number and cannot be differentiated. Read them as f(x) = …, find f‴(2). Slide 9 writes "Let **dy/dx** = sin(5x) + e^(3x)" where it means "Let y = …", and labels the trigonometric and exponential rules as "the logarithmic rule". Every derivative she then writes is correct.

**What Week 6 does not contain.** Concavity, points of inflection, the second-derivative test, maxima and minima, general nth-derivative formulas, the Leibniz expansion, or any worked motion problem. Her only application claim is that the **second derivative is acceleration** and the **third is jerk**, stated in words.

---

## Part 4 — Integration: the machinery

*Weeks 7 and 8. Week 7: the indefinite integral, the power rule, the Fundamental Theorem. Week 8: a table of standard integrals and four techniques.*

### 4.1 The indefinite integral, and why + c is not optional

**Her definition (slide 4).** "Suppose that f is a continuous real-number function of a variable x. The indefinite integral of f is a function F such that **F′(x) = f(x)** added to the constant of integration c." Written **∫f(x)dx = F(x) + c**.

**Her Example 1 is an argument, not a calculation.** Start from f(x) = x², whose derivative is 2x. Now look at ∫2x dx.

> "At first thought, it's tempting to suppose that the antiderivative of g is the function G such that G(x) = x². But the situation isn't quite so simple, because G isn't the only function of x that can be differentiated to get g. Any real number c can be added to G."

Because [G(x) + c]′ = 2x + 0 = 2x, **∫2x dx = x² + c** for any real c. Writing ∫2x dx = x² is an incomplete answer, and this whole example exists to stop you doing it.

**The one reliable check.** Her own justification is "when we differentiate the result, we always get g back again". So: **differentiate your answer.** If you recover the integrand, the integral is right. It takes ten seconds and catches nearly every error in this Part.

### 4.2 The power rule for integration

**Her rule (slide 7).** **∫xⁿ dx = x^(n+1)/(n+1) + c**, where n is real and **n ≠ −1**.

Raise the power by one, then **divide** by the new power. Differentiation multiplies by the old power; integration divides by the new one. n = −1 is excluded for an arithmetic reason: n + 1 = 0, and you cannot divide by zero.

**∫x⁴dx = x⁵/5 + c.**

**Negative powers go through the same rule.** ∫(2/x⁷)dx: rewrite as ∫2x⁻⁷dx, so n = −7 and the new exponent is −6:

= 2·x⁻⁶/(−6) + c = **−1/(3x⁶) + c**

Dividing by −6 is what produces the minus sign, and 2/(−6) = −1/3. Students routinely leave this positive.

**Linearity.** Split term by term and pull each constant out front:

∫(11x¹⁰ − 4x⁹ + 1)dx = 11·x¹¹/11 − 4·x¹⁰/10 + x + C = **x¹¹ − (2/5)x¹⁰ + x + C**

Note **∫1 dx = x**, which is the power rule with n = 0: x^(0+1)/(0+1) = x. It is not 1 and it is not 0.

**Her TASK 1 (slide 10).** ∫(2x² − 6x − 3)dx = **(2/3)x³ − 3x² − 3x + c**. Check by differentiating: 2x² − 6x − 3.

**Where people go wrong.** ∫[f·g]dx is **not** (∫f)(∫g). Linearity licenses sums, differences and constant multiples, and nothing else.

### 4.3 Definite integrals and the Fundamental Theorem

**Her theorem (slide 11).** "Let f be a continuous function of x on the interval [a, b]. If F(x) is an antiderivative of f(x), then **∫ₐᵇ f(x)dx = F(b) − F(a)**." Sometimes written **F(x)|ₐᵇ**.

A definite integral evaluates to **a number**, and it carries **no + c** — the constant cancels: (F(b) + c) − (F(a) + c) = F(b) − F(a).

**Example.** ∫₀³ 4x dx. Here f(x) = 4x and F(x) = 2x², so

∫₀³ 4x dx = 2x²|₀³ = 2(3² − 0²) = **18**

Her habit: the coefficient 2 is **factored outside** the evaluation, so you substitute only into x². What is substituted is **F**, not f — f(3) − f(0) = 12 is the wrong number and a very common one.

**Example with a negative lower limit.** ∫₋₁⁵ (3x² − 6)dx.

= x³|₋₁⁵ − 6x|₋₁⁵ = (5³ − (−1)³) − 6(5 − (−1)) = 126 − 36 = **90**

The trap the example is built around: **(−1)³ = −1**, so 5³ − (−1)³ = 125 + 1 = 126, not 124. And 5 − (−1) = 6, not 4.

**Example with a negative antiderivative.** ∫₂³ (1/x²)dx. Rewrite 1/x² as x⁻², so F(x) = x⁻¹/(−1) = −1/x:

= (−1/x)|₂³ = −(1/3 − 1/2) = −(−1/6) = **1/6**

Two things at once: rewrite as a power so the rule applies, and factor the minus out of the evaluation.

**Her TASK 2 (slide 15).** ∫₋₁² (7x − 5)dx with F(x) = 7x²/2 − 5x: F(2) = 14 − 10 = 4 and F(−1) = 7/2 + 5 = 17/2, so the answer is 4 − 17/2 = **−4.5**. A negative answer is perfectly legitimate — a definite integral is a signed quantity.

**Where people go wrong.** Upper minus lower, in that order; reversing it flips the sign of the whole answer. And answering with a + c on a definite integral, or with a bare number to an indefinite one — either is a category error.

> **SLIDE ERROR (Week 7, slide 13).** The second line prints "− 6∫₋₁⁵ **x** dx". It must be ∫₋₁⁵ dx, that is ∫₋₁⁵ 1 dx, since G(x) = −6x. Every line after it is correct and the answer 90 is correct.

### 4.4 The table of standard integrals

*Week 8 opens with fifteen lines she introduces as "common indefinite integrals that should already be familiar". Week 7 taught only the power rule, so for you most of this table is new content to memorise, not revision. Every technique in the week exists to convert an integral into one of these lines.*

| | |
|---|---|
| ∫xⁿdx = x^(n+1)/(n+1) + C, n ≠ −1 | ∫x⁻¹dx = ln(x) + C |
| ∫eˣdx = eˣ + C | ∫sin(x)dx = −cos(x) + C |
| ∫cos(x)dx = sin(x) + C | ∫sec²(x)dx = tan(x) + C |
| ∫sec(x)tan(x)dx = sec(x) + C | ∫[1/√(1 − x²)]dx = sin⁻¹(x) + C |
| ∫[1/(1 + x²)]dx = tan⁻¹(x) + C | ∫[1/(x√(x² − 1))]dx = sec⁻¹(x) + C |
| ∫ln(x)dx = x·ln(x) − x + C | ∫tan(x)dx = −ln(cos(x)) + C |
| ∫sec(x)dx = ln(sec(x) + tan(x)) + C | ∫csc(x)dx = −ln(csc(x) + cot(x)) + C |
| ∫cot(x)dx = ln(sin(x)) + C | |

> **SLIDE ERROR (Week 8, slide 5).** The three inverse-trigonometric lines print as "= sin⁻¹ + C", "= tan⁻¹ + C", "= sec⁻¹ + C" with the argument missing. Write sin⁻¹(x), tan⁻¹(x), sec⁻¹(x); a bare sin⁻¹ is not a value.

> **NOTATION, not an error but worth knowing.** She writes **ln(x)** everywhere, never ln|x|. Standard textbooks carry the modulus because ln is undefined for negative arguments. Reproduce her form on her paper; know why the bars exist if a marker asks. Note also that she switches to a **capital C** for the constant in Week 8, having used lowercase c in Week 7.

### 4.5 Substitution

**Her statement (slide 7).** "The general substitution formula states that **∫f′(g(x))·g′(x)dx = f(g(x)) + C**. It is just the Chain Rule, written in terms of integration via the Fundamental Theorem of Calculus."

Read it right to left: if you can see an **inner function g(x)** and its **derivative multiplying it**, the integral is f evaluated at the inner function.

**Example 1 — a definite integral, with the limits changed.** ∫₀²(x + 2)³dx.

> "Let u = (x + 2), so that du = dx. Notice that if x = 0, then u = 2, and if x = 2, then u = 4."

∫₀²(x + 2)³dx = ∫₂⁴u³du = (1/4)u⁴|₂⁴ = (256 − 16)/4 = **60**

The limits are **x-values converted into u-values**. Once they are converted the answer is a number, so there is no need to return to x.

**Example 2 — spotting the inner function inside an exponent.** ∫2x·e^(x²)dx.

> "Since the exponential component is x², we let u = x², so that du = 2x dx."

She rewrites 2x·e^(x²) as e^(x²)·2x so the du block sits visibly at the end, ready to be swallowed whole, and gets ∫eᵘdu = eᵘ + C.

> **SLIDE ERROR (Week 8, slide 8).** The slide stops at **eᵘ + C**. This is an indefinite integral, so the answer must be returned to the original variable: since u = x², the answer is **e^(x²) + C**. An answer left in u is not an answer to the question asked — u was your own invention and does not appear in the problem. (Example 1 could stop in u only because changing the limits turned it into a number.) Check: d/dx e^(x²) = 2x e^(x²).

> **MISPLACED TASK (Week 8, slide 9).** ∫₀¹x·eˣdx closes the substitution section but cannot be done by substitution — there is no inner function whose derivative is present. It is an integration-by-parts problem, and its indefinite version is literally the next slide's example. Using ∫x·eˣdx = x·eˣ − eˣ + C: (1·e − e) − (0 − 1) = **1**. The upper limit contributes exactly zero; the whole answer comes from the lower limit, where e⁰ = 1.

### 4.6 Integration by parts

**Her statement (slide 10).** "Let f(x) = u and g(x) = v then we have **∫u dv = uv − ∫v du**."

The procedure: name **u** and **dv**, differentiate u to get **du**, **integrate dv to get v**, then assemble uv − ∫v du. She gives no rule for choosing u — no LIATE anywhere in this course.

**Example 1.** ∫x·eˣ dx. Let u = x (so du = dx) and dv = eˣdx (so v = eˣ):

∫x·eˣdx = x·eˣ − ∫eˣdx = **x·eˣ − eˣ + C**

Why the choice works: differentiating x turns it into 1 and makes it vanish from the leftover integral; eˣ is unchanged by integration, so nothing gets worse. The reverse choice would give x²eˣ/2 − ∫(x²/2)eˣdx, in which the power of x has gone **up**.

**Example 2 — parts applied twice.** ∫3x²·sin(x)dx. Let u = 3x², du = 6x dx, dv = sin(x)dx, so **v = −cos(x)**:

∫3x²sin x dx = 3x²(−cos x) − ∫−cos x (6x dx) = −3x²cos x + 6∫x cos x dx

Now do ∫x cos x dx by parts again, with u = x and dv = cos x dx, so v = sin x:

∫x cos x dx = x sin x − ∫sin x dx = x sin x + cos x

Finally:

**∫3x²sin x dx = −3x²cos x + 6(x sin x + cos x) + C**

Three sign events, all examinable:

- **v = −cos x**, because ∫sin x dx = −cos x. That minus is why the first term is negative.
- **−∫−cos x(6x dx) becomes +6∫x cos x dx.** Two minuses make a plus, and the 6 comes out front.
- **−∫sin x dx = +cos x**, from ∫sin = −cos again.

Note that she leaves the 6 outside until the final line, and that C is added **once**, at the very end — not at each pass.

**Her TASK 2 (slide 13), unanswered.** ∫x·ln(x)dx. Here the habit her two examples establish — algebraic factor as u — gives the wrong answer, because ln(x) is not something you can easily integrate. Take **u = ln x** (du = dx/x) and **dv = x dx** (v = x²/2):

∫x ln x dx = (x²/2)ln x − ∫(x²/2)(1/x)dx = (x²/2)ln x − (1/2)∫x dx = **(x²/2)ln x − x²/4 + C**

The real constraint is that **dv must be something you can integrate.**

### 4.7 Trigonometric substitution

**Her framing (slide 14).** "To evaluate the following type of integrals, some trigonometric substitutions are required." No a-parameter table; she normalises instead.

**Example — ∫√(1 − x²)dx.** Let **x = sin(u)**, so dx = cos(u)du:

∫√(1 − sin²u)·cos u du = ∫√(cos²u)·cos u du = ∫cos²u du

**1 − sin²u = cos²u is the entire reason for the substitution** — it removes the root. But cos²u cannot be integrated as it stands, so the double-angle identity is compulsory:

cos²u = (1 + cos 2u)/2, so ∫cos²u du = u/2 + sin(2u)/4 + C

(The extra 2 in the denominator of sin(2u)/4 comes from the chain rule on cos(2u).) Setting back, u = sin⁻¹(x), and unfolding sin(2u) = 2 sin u cos u = 2x√(1 − x²):

**∫√(1 − x²)dx = sin⁻¹(x)/2 + x√(1 − x²)/2 + C**

**Example — ∫√(4 − 9x²)dx, where the rewrite is the technique.** She factors the constant out of the root so that what remains is literally 1 − (something)²:

4 − 9x² = 4(1 − 9x²/4) = 4(1 − (3x/2)²), and √4 = 2 comes outside

∫√(4 − 9x²)dx = ∫2√(1 − (3x/2)²)dx

Now substitute on the **whole bracket**: 3x/2 = sin(u). Differentiating, (3/2)dx = cos u du, so **dx = (2/3)cos(u)du** — the reciprocal of 3/2, and forgetting it is the standard way to lose this question. The two constants multiply: 2 × 2/3 = 4/3, giving (4/3)∫cos²u du and finally

**∫√(4 − 9x²)dx = 2sin⁻¹(3x/2)/3 + x√(4 − 9x²)/2 + C**

> **SLIDE ERRORS (Week 8).** Slide 16 is headed **"Example 1"** for the second time, so the section has two Example 1s and no Example 2 — refer to them by their integrands. Slide 15 prints a chain with mixed variables, "2sin(sin⁻¹(x))√(1 − sin²(u))", half converted to x and half still in u; the next expression fixes it and the final answer is correct.

**Her TASK 3 (slide 18), unanswered, and the only task needing a technique she never demonstrates.** ∫√(1 + x²)dx. The root is a **plus**, so the identity that fits is 1 + tan²u = sec²u. With x = tan u, dx = sec²u du:

∫sec³u du = (1/2)[sec u tan u + ln(sec u + tan u)]

reached by parts and then solving algebraically for the integral, so that

**∫√(1 + x²)dx = (1/2)[x√(1 + x²) + ln(x + √(1 + x²))] + C**

Every ingredient is somewhere in her deck, but she never combines them. Know the answer; do not expect to reconstruct it under time pressure.

### 4.8 Partial fractions

**Her framing (slide 19).** "Some integrals are evaluated by first resolving them into partial fractions."

**Four steps: factor, split with unknowns, clear the denominator, substitute the roots.**

**Example 1.** ∫[1/(x² + 3x)]dx. Factor: 1/(x(x + 3)). Split: A/x + B/(x + 3). Clear: **1 = A(x + 3) + Bx**.

Now substitute the roots of the factors, each of which kills one unknown:

at x = 0: 1 = 3A, so **A = 1/3**
at x = −3: 1 = −3B, so **B = −1/3**

∫[1/(x² + 3x)]dx = **(1/3)ln(x) − (1/3)ln(x + 3) + C**

Note that B came out **negative** and that the negative is carried into the integral as a subtraction. Both terms integrate by the same standard line ∫x⁻¹dx = ln(x) + C.

**Example 2.** ∫[(7x − 6)/((x − 2)(x + 3))]dx. Already factored, so: 7x − 6 = A(x + 3) + B(x − 2).

at x = 2: 8 = 5A, so **A = 8/5**
at x = −3: −27 = −5B, so **B = 27/5** — two negatives giving a positive, which is where this example is easiest to lose

= **(8/5)ln(x − 2) + (27/5)ln(x + 3) + C**

**Her TASK 4 (slide 21), unanswered.** ∫[(5x + 7)/((x − 1)(x + 3))]dx. Clearing gives 5x + 7 = A(x + 3) + B(x − 1); at x = 1, 12 = 4A so A = 3; at x = −3, −8 = −4B so B = 2. Answer: **3ln(x − 1) + 2ln(x + 3) + C**. Check the split: 3(x + 3) + 2(x − 1) = 5x + 7.

**The four techniques, in her order, are the examinable spine of Week 8:** substitution, integration by parts, trigonometric substitution, partial fractions. Be able to name one integrand each is for.

---

## Part 5 — Improper integrals

*Week 9. Six things: what makes an integral improper, the Type I definitions, the Type II definitions, the Comparison Test, the p-test, and four worked examples.*

### 5.1 What makes an integral improper

**Her slide 4, verbatim.** "The definite integral ∫ₐᵇ f(x)dx is called an improper integral if

1. At least one of the limits of integration is infinite, or
2. The integrand f(x) has one or more points of discontinuity on the interval [a, b]."

Trigger 1 is **Type I**, trigger 2 is **Type II**. Before anything else, say which one you have — and check for both.

Her motive, from the introduction: "Sometimes it is difficult to find the exact value of an improper integral by antidifferentiation. However, it is still possible to determine whether an improper integral converges or diverges." That sentence licenses everything in section 5.2: comparison answers **converges or diverges** and nothing else. It never produces a value.

### 5.2 Type I — an infinite limit

**The definitions (slide 5).**

∫ₐ^∞ f(x)dx = **lim t→∞ ∫ₐᵗ f(x)dx**, provided the limit exists
∫₋∞ᵇ f(x)dx = **lim t→−∞ ∫ₜᵇ f(x)dx**, provided the limit exists

They are **convergent** if the corresponding limit exists and **divergent** if it does not. Note what that is *not* saying: convergence is about the limit, not about whether the region looks bounded.

**The symbol has no meaning until you write the limit.** Replacing the infinite limit by a letter is the first line of every Type I answer, and marks are given for it. An answer that jumps straight to a number is unsupported even when the number is right.

**Both ends infinite means split — and both halves must already converge.** "If ∫ₐ^∞ f and ∫₋∞ᵇ f **are convergent**, then ∫₋∞^∞ f = ∫₋∞ᵃ f + ∫ₐ^∞ f." The convergence of the two halves is a **hypothesis**, not a conclusion.

**Example 1.** Determine whether ∫₀^∞ xe⁻ˣ dx converges.

∫₀^∞ xe⁻ˣdx = lim t→∞ [−xe⁻ˣ − e⁻ˣ]|₀ᵗ = lim t→∞ [−te⁻ᵗ − e⁻ᵗ + 1]

> "Notice that lim [−te⁻ᵗ] → −∞/∞. Therefore, applying L'Hôpital's Rule, we have"

lim t→∞ [−t/eᵗ] = lim t→∞ [−1/eᵗ] = 0

so the value is 0 + 0 + 1 and **∫₀^∞ xe⁻ˣdx converges to 1**.

Four separate marks in that: replace ∞ by t; get the antiderivative (by parts, u = x and dv = e⁻ˣdx, giving −xe⁻ˣ − e⁻ˣ); notice the lower limit contributes **+1**, since the value there is −1 and it is subtracted; and handle −te⁻ᵗ with L'Hôpital. Writing "−te⁻ᵗ → −∞ because t → ∞" is the standard wrong answer — **the exponential wins.**

**Example 2 — a fast exit.** ∫₋∞^∞ (2x² − x + 3)dx.

She splits at 0 and gives the two moving limits **two different letters**, a → −∞ and b → ∞. The antiderivative is 2x³/3 − x²/2 + 3x, and on the right-hand piece 2b³/3 drives the value to +∞. That alone settles it: **divergent**.

**Do not try to cancel the two infinities.** The definition requires each half to converge on its own, so one divergent half ends the question.

### 5.3 Type II — a discontinuity

**The definitions (slide 8).**

1. Discontinuity at b: ∫ₐᵇ f = **lim c→b⁻ ∫ₐᶜ f**
2. Discontinuity at a: ∫ₐᵇ f = **lim c→a⁺ ∫_c^b f**
3. Discontinuity at some c strictly inside (a, b): **∫ₐᵇ f = ∫ₐᶜ f + ∫_c^b f**

Read the bracket shapes: the square bracket is the good end, the round bracket is the bad end. The one-sided arrow always points **into** the interval.

**Example — the discontinuity is inside the interval.** ∫₋₁² (1/x⁴)dx. The function is undefined at **x = 0**, which lies strictly between −1 and 2, so split there:

∫₋₁²(1/x⁴)dx = lim c→0⁻ [−1/(3x³)]|₋₁ᶜ + lim b→0⁺ [−1/(3x³)]|_b²

Left piece: −1/(3c³) − 1/3, and as c → 0⁻ the number c³ is small and **negative**, so −1/(3c³) → **+∞**.
Right piece: −1/24 + 1/(3b³), and as b → 0⁺ this → **+∞**.

Both pieces run to +∞, so the integral is **divergent**.

> **SLIDE ERROR (Week 9, slide 9).** The slide says "[−1/(3x³)] → **−∞** as c → 0⁻". It does not: c³ approaches 0 from below, so −1/(3c³) → **+∞**. Her verdict, divergent, is right; the sign is not. Write +∞ for both pieces.

**The examinable point of this example.** If you fail to notice the discontinuity and apply the Fundamental Theorem straight across, you get [−1/(3x³)]|₋₁² = −1/24 − 1/3 = −3/8: a **negative** answer for a strictly **positive** integrand, which is impossible. **Scan the interval for zeros of the denominator before you integrate anything.**

### 5.4 The Comparison Test and the p-test

**Her theorem (slide 10).** "Let f(x) and g(x) be any two continuous functions such that **0 ≤ g(x) ≤ f(x) for all x ≥ a**. Then

1. If ∫ₐ^∞ f(x)dx is convergent, then ∫ₐ^∞ g(x)dx is convergent,
2. If ∫ₐ^∞ g(x)dx is divergent, then ∫ₐ^∞ f(x)dx is divergent."

**Get her letters the right way round.** In this course **g is underneath and f is on top** — the opposite of most textbooks. So: *the big one convergent drags the small one down with it; the small one divergent drags the big one up with it.*

**The two combinations she does not state give you nothing.** "∫f divergent" says nothing about the smaller g. "∫g convergent" says nothing about the bigger f. If your comparison lands in one of those boxes, find a different comparison function — there is no Limit Comparison Test in this course.

**Note 1, the p-test (slide 11).** **∫₁^∞ (1/xᵖ)dx converges if p > 1 and diverges if p ≤ 1.** This is the only convergence fact you may quote without working, and every one of her comparison examples ends by quoting it. **p = 1 is on the divergent side.**

**Example 1 — bounding an oscillation.** ∫₂^∞ cos²(x)/x² dx.

Since 0 ≤ cos²x ≤ 1, dividing by the positive quantity x² gives 0 ≤ cos²x/x² ≤ 1/x². Take f(x) = 1/x² and g(x) = cos²(x)/x². Then ∫₂^∞ dx/x² = 1/2, which converges, so by clause 1 the original **converges**.

Two things to take. **cos²x is squared, so it never goes negative** — that is what makes the hypothesis 0 ≤ g hold; with cos x/x² the theorem would not apply at all. And **she only gets convergence, never a value**: the number 1/2 belongs to the comparison integral. Writing "∫₂^∞ cos²(x)/x² dx = 1/2" is a real error; all you may claim is that it is at most 1/2.

**Example 2 — the divergent direction.** ∫₃^∞ dx/√(x² − 1). For x ≥ 3, x² − 1 < x², so √(x² − 1) < x, and taking reciprocals of two positive numbers **reverses** the inequality: 1/√(x² − 1) > 1/x. Here g(x) = 1/x is the small one, whose integral diverges by Note 1 with p = 1, so by clause 2 the original **diverges**.

This is the one example where the messy integrand is the **larger** function, and it is the only one that can produce a divergence verdict.

**Example 3 — the template.** ∫₁^∞ dx/√(x³ + 7). Four steps, in this order, every time:

1. **Throw away the additive junk to make the denominator smaller:** x³ + 7 ≥ x³.
2. **Take the root, which preserves the inequality:** √(x³ + 7) ≥ √(x³).
3. **Take reciprocals, which reverses it:** 1/√(x³ + 7) ≤ 1/√(x³). *This is the step students drop.*
4. **Rewrite as a power and read off p:** √(x³) = x^(3/2), so p = 3/2 > 1 and the comparison integral converges.

Therefore ∫₁^∞ dx/√(x³ + 7) **converges**.

**Her TASK (slide 14), unanswered.** ∫₁^∞ dx/√(x⁶ + 1). Same four steps: x⁶ + 1 ≥ x⁶, so √(x⁶ + 1) ≥ x³ (valid because x ≥ 1 > 0), so the integrand is at most 1/x³, where p = 3 > 1. **Converges.**

> **SLIDE ERROR (Week 9, slide 11).** The comparison line prints "lim x→∞ ∫₂^∞ (1/x²)dx" — the limit variable collides with the variable of integration, and the upper limit is still ∞, so there is nothing left to take a limit of. It should read lim t→∞ ∫₂ᵗ (1/x²)dx. The value 1/2 is correct.

**Where people go wrong.** Applying the p-test to something that is not a pure power. Note 1 is about 1/xᵖ; 1/√(x³ + 7) is not, so you must compare first and quote Note 1 about the *comparison* function. And note the p-test here is stated only **at infinity** — she gives you no rule at a singularity, so do not invent one.

---

## Part 6 — Area and volume by integration

*Weeks 10 and 11. Week 10: three area rules with five examples and three tasks. Week 11: three volume formulas with six examples and three tasks. Every integrand in Week 11 is a polynomial.*

### 6.1 Area between a curve and the x-axis

**Her rule (slide 4), verbatim.**

> "If f(x) ≥ 0 on [a, b], then the area under the curve y = f(x) over [a, b] is **∫ₐᵇf(x)dx**.
> If f(x) ≤ 0 on [a, b], then the area under the curve y = f(x) over [a, b] is **|∫ₐᵇf(x)dx|**."

Read it as one procedure: **decide the sign first, then choose the formula.** The modulus is not decoration — below the axis the integral comes out negative, and an area cannot be.

**When no interval is given, the limits are the roots.** "To determine the limits of integration (the points at which f(x) cuts the x-axis), we set f(x) = 0."

**Always test one interior point.** This is her habit in every single example, and it is what decides which case of the rule applies.

**Example 1.** Area between f(x) = 5x − x² and the x-axis.

Roots: 5x − x² = x(5 − x) = 0, so x = 0 and x = 5.
Test: f(2) = 10 − 4 = 6 > 0, so f ≥ 0 and no modulus is needed.

A = ∫₀⁵(5x − x²)dx = [5x²/2 − x³/3]₀⁵ = 125/2 − 125/3 = **125/6 ≈ 20.83 square units**

The lower limit contributes 0, but she still writes the whole bracket out. Copy that habit; it is where marks live when the lower limit is not 0.

**Example 2 — the curve crosses inside the interval.** Area bounded by f(x) = x² − 1, the x-axis, x = 0 and x = 2.

Roots: x = ±1. **x = −1 is outside [0, 2] and is discarded; x = 1 is the split point.** On [0, 1] the curve is below the axis; on [1, 2] it is above.

A = |∫₀¹(x² − 1)dx| + ∫₁²(x² − 1)dx = |−2/3| + 4/3 = **2 square units**

Three things this teaches. The interval was given but the root was not — solve for it anyway. **The modulus goes on the piece below the axis only.** And splitting genuinely changes the answer: the unsplit ∫₀²(x² − 1)dx = 2/3, which is not 2 — and which happens to equal the first piece's magnitude, so a student who forgets to split can land on a number that looks like it came from somewhere.

**Her TASK 1 (slide 7), unanswered.** Area between f(x) = 6x − x² and the x-axis. Roots x = 0 and x = 6; f(3) = 9 > 0, so no modulus; A = [3x² − x³/3]₀⁶ = 108 − 72 = **36 square units**.

### 6.2 Area between two curves

**Her rule (slide 8), verbatim.**

> "If f(x) and g(x) are continuous with **f(x) ≥ g(x)** on [a, b], then the area of the region between the curves … is given by **A = ∫ₐᵇ(f(x) − g(x))dx**.
> If f(x) and g(x) are enclosed without a specific interval given, we let **f(x) = g(x)**, such that x = a and x = b are the bounds of the integration."

The condition f ≥ g is part of the rule, not a footnote. So the procedure is: **solve f = g for the limits, test an interior point to see which is on top, then integrate (top − bottom).**

**Example 1 — a line and a parabola.** y = 3 − x and y = x² − 9.

Intersections: 3 − x = x² − 9 gives x² + x − 12 = (x + 4)(x − 3) = 0, so x = −4 and x = 3.
Test at x = 2: f(2) = 1 and g(2) = −5, so f is on top.

A = ∫₋₄³[(3 − x) − (x² − 9)]dx = [12x − x²/2 − x³/3]₋₄³ = 45/2 − (−104/3) = **343/6 ≈ 57.17 square units**

The single most likely slip is writing 45/2 − 104/3 = −73/6, having failed to double the minus. **Subtracting a negative adds.**

Note also that the region straddles the axis — the parabola dips to y = −9 — and she still writes plain (f − g) with no modulus and no shifting. **The strip height is a difference of y-values; where the x-axis sits is irrelevant to it.**

**Example 2 — the one where the second-named function is on top.** f(x) = 2 − x and g(x) = 4 − x².

Intersections: 2 − x = 4 − x² gives x² − x − 2 = 0, so x = −1 and x = 2.
Test at x = 1: f(1) = 1 and g(1) = 3, so **g is on top**, and she writes **g − f**.

A = ∫₋₁²[(4 − x²) − (2 − x)]dx = [2x − x³/3 + x²/2]₋₁² = 10/3 − (−7/6) = **9/2 = 4.5 square units**

**This is the example to remember for the order of subtraction.** She named f first in the question and still subtracted it second, because the test point said so. The order is decided by the test, never by which curve was written first.

### 6.3 Curves that cross inside the interval

**Her rule (slide 12).** With an intersection at c ∈ (a, b):

A₁ = ∫ₐᶜ(f(x) − g(x))dx where f ≥ g, A₂ = ∫ᶜᵇ(g(x) − f(x))dx where f ≤ g, and **A = A₁ + A₂**

**In each piece, the function on top is written first.** That is what makes each piece non-negative, which is why no modulus appears anywhere in this rule — the difference from the modulus in 6.1. The labels A₁ and A₂ assume f is on top first; if the test point says otherwise, swap the integrands.

**Example — sin and cos over [0, π/2].**

She finds the crossing by dividing, not by inspection: sin x = cos x ⇒ sin x/cos x = 1 ⇒ tan x = 1 ⇒ **x = π/4**. Reproduce that line. Then cos ≥ sin on [0, π/4] and sin ≥ cos on [π/4, π/2]:

A₁ = ∫₀^(π/4)(cos x − sin x)dx = [sin x + cos x]₀^(π/4) = (1/√2 + 1/√2) − 1 = 2/√2 − 1
A₂ = ∫_(π/4)^(π/2)(sin x − cos x)dx = [−cos x − sin x]_(π/4)^(π/2) = (0 − 1) − (−2/√2) = −1 + 2/√2

**A = A₁ + A₂ = 4/√2 − 2 = 2√2 − 2 ≈ 0.83 square units**

She keeps sin(π/4) as **1/√2**, not √2/2. And watch the second antiderivative: the integrand sin x − cos x integrates to −cos x − sin x, with **both** signs negative.

**The trap, and the clearest demonstration in the deck of why this rule exists.** The single unsplit integral ∫₀^(π/2)(cos x − sin x)dx = (1 + 0) − (0 + 1) = **0**. The two lobes are congruent and cancel exactly.

*Aside: these are the deck's first integrals that are not powers of x. Week 7 never stated ∫sin x dx or ∫cos x dx. Memorise the pair — ∫cos x dx = sin x + c and ∫sin x dx = −cos x + c — because the example assumes them.*

**Her TASK 2 (slide 11), unanswered, and it is a crossing problem in disguise.** Area bounded by y = x² and y = 2 − x² for 0 ≤ x ≤ 2. Setting x² = 2 − x² gives x = ±1, and x = 1 lies **inside** [0, 2]. On (0, 1) the curve 2 − x² is on top; on (1, 2) x² is on top.

A₁ = ∫₀¹(2 − 2x²)dx = 4/3, A₂ = ∫₁²(2x² − 2)dx = 8/3, so **A = 4 square units**

A single integral over [0, 2] would give −4/3 — negative, and its magnitude is not the area either.

**Her TASK 3 (slide 15), unanswered, and it is the counterweight.** Area bounded by y = cos x and y = 2 − cos x for 0 ≤ x ≤ 2π. Setting cos x = 2 − cos x gives cos x = 1, so x = 0 and x = 2π — **both intersections are the endpoints**, so the curves never cross on the interior and no split is needed. Testing x = π shows 2 − cos x is on top:

A = ∫₀^(2π)(2 − 2cos x)dx = [2x − 2sin x]₀^(2π) = **4π square units ≈ 12.57**

After two slides of splitting, the reflex is to split again. **Check where the intersections actually are first.**

> **SLIDE WARNING (Week 10, slide 16).** Her summary compresses the three rules and **drops both sign conditions**: line 1 omits f(x) ≥ 0 and drops the modulus case entirely, and line 2 omits f(x) ≥ g(x). Her own Examples 2 on slides 6 and 10 need exactly those conditions. If a question asks you to "state the formula", state it **with its condition** — quote slides 4, 8 and 12, not the summary. (The summary slide also misspells "bounded" as "bounbed", twice.)

### 6.4 Volumes of revolution

**Definitions (slide 4).** "If a region in the plane is revolved about a given line, the resulting solid is a **solid of revolution**, and the line is called the **axis of revolution**."

**Her four-step procedure, in her words.** (1) Sketch the area and determine the axis of revolution — **this determines the variable of integration**. (2) Sketch the cross-section (disc, shell, washer) and determine the appropriate formula. (3) Determine the boundaries of the solid. (4) Set up the definite integral, and integrate.

**The three formulas, each stated twice, once in x and once in y:**

| Method | In x | In y |
|---|---|---|
| Disc | V = π∫ₐᵇ[R(x)]²dx | V = π∫ₐᵇ[R(y)]²dy |
| Washer | V = π∫ₐᵇ([R(x)]² − [r(x)]²)dx | V = π∫ₐᵇ([R(y)]² − [r(y)]²)dy |
| Shell | V = 2π∫ₐᵇ x f(x)dx | V = 2π∫ₐᵇ y f(y)dy |

**π for discs and washers, 2π for shells.** The π is the area of a circle; the 2π is the circumference of the unrolled shell. **There is no square in the shell integrand** — radius times height, both to the first power.

*Aside: her disc slide says "R(x) is the region". In every worked example R(x) is a **length** — the distance from the axis out to the curve. Read R as a radius.*

**Disc Example 1.** R bounded by y = −x + 1, the x-axis, x = 0 and x = 1, revolved about the x-axis. The radius is f(x) itself, because the distance from the x-axis up to the curve is the y-value:

V = π∫₀¹(−x + 1)²dx = π[−(−x + 1)³/3]₀¹ = **π/3 cubic units**

*She has reversed a chain rule there. The deck never teaches substitution, so if that step is uncomfortable, expand: (1 − x)² = 1 − 2x + x², and ∫₀¹(1 − 2x + x²)dx = 1 − 1 + 1/3 = 1/3. Same answer, Week 7 tools only.*

**Disc Example 2 — in y, about the line x = 3.** The region between x = y² + 1 and x = 3.

Limits by solving: y² + 1 = 3 gives y = ±√2. Radius: R(y) = 3 − (y² + 1) = **2 − y²**.

V = π∫₋√2^√2 (2 − y²)²dy = π∫(4 − 4y² + y⁴)dy = π[4y − 4y³/3 + y⁵/5]₋√2^√2 = **64√2π/15 cubic units**

The integrand is even, so the value at −√2 is the negative of that at +√2 and the subtraction **doubles** it: 32√2/15 becomes 64√2/15.

> **SLIDE MISPRINT (Week 11, slide 7).** The middle expression prints π∫[(4 − 4y² + y⁴)]²dy, with the square still attached after the bracket has already been expanded. The square must be dropped once you expand; the next line and the answer are correct.

**Her disc TASK (slide 8), unanswered.** f(x) = √x, the x-axis, x = 1 and x = 4, about the x-axis. **The squaring is the whole point**: [√x]² = x, so

V = π∫₁⁴ x dx = π[x²/2]₁⁴ = **15π/2 cubic units**

A student who integrates √x itself gets 14π/3 and has computed nothing.

**Washer — the disc with a hole punched through it.** Its area is πR² − πr², so the π comes out front and **the squares subtract**. π∫(R − r)²dx is a different and always smaller number.

**Washer Example 1.** y = x², y = x⁵, x = 0, x = 1, about the x-axis. On [0, 1] every higher power is smaller, so x² ≥ x⁵: **R(x) = x², r(x) = x⁵**.

V = π∫₀¹(x⁴ − x¹⁰)dx = π[x⁵/5 − x¹¹/11]₀¹ = π(1/5 − 1/11) = **6π/55 cubic units**

Squaring the difference instead would give 9π/220 — a different number, and the standard wrong one.

**Washer Example 2 — in y, about the y-axis.** x = y², x = 3, about the y-axis. The far boundary is the vertical line, so **R(y) = 3 is a constant** and r(y) = y². Limits from y² = 3:

V = π∫₀^√3 (9 − y⁴)dy = π[9y − y⁵/5]₀^√3 = **36√3π/5 cubic units**

R being constant is normal and does not mean you have made a mistake. *Her limits run from 0 to √3, i.e. the first-quadrant half; taking −√3 to √3 would double the answer.*

**Her washer TASK (slide 12), unanswered — and the axis has moved.** The region under y = x² on [0, 2], rotated about the line **y = −1**. Every radius is now a distance from y = −1:

R(x) = x² − (−1) = **x² + 1**, r(x) = 0 − (−1) = **1**

V = π∫₀²([x² + 1]² − 1)dx = π∫₀²(x⁴ + 2x²)dx = π(32/5 + 16/3) = **176π/15 cubic units**

**Subtract the axis before squaring.** Squaring first and shifting afterwards is a different and wrong number.

**Shell.** Her formula reads: x is the **radius** (distance from the axis out to the strip) and f(x) is the **height** (the length of the strip). Multiply them, multiply by 2π, integrate.

**Shell Example 1 — about the y-axis.** y = 2x² − x³ and y = 0. Limits from f(x) = 0: x²(2 − x) = 0 gives x = 0 and x = 2.

V = 2π∫₀² x(2x² − x³)dx = 2π∫₀²(2x³ − x⁴)dx = 2π[x⁴/2 − x⁵/5]₀² = 2π(8 − 32/5) = **16π/5 cubic units**

**Shell Example 2 — about the x-axis, integrating in y.** The region under y = √x from 0 to 1. Invert: **x = y²**, not √y. The strip is now horizontal at height y; it starts on the curve at x = y² and ends at the right-hand edge x = 1, so its length is **f(y) = 1 − y²**, and its radius is y:

V = 2π∫₀¹ y(1 − y²)dy = 2π[y²/2 − y⁴/4]₀¹ = **π/2 cubic units**

Free check: the same solid by discs is π∫₀¹[√x]²dx = π[x²/2]₀¹ = π/2. Two of her three methods agreeing on one solid is the best self-test in the deck.

**Her shell TASK (slide 16), unanswered.** The region between y = x and y = x², about the y-axis. x = x² gives x = 0 and x = 1; on (0, 1) the line is above the parabola, so the strip height is **f(x) = x − x²**:

V = 2π∫₀¹ x(x − x²)dx = 2π[x³/3 − x⁴/4]₀¹ = 2π(1/12) = **π/6 cubic units**

Her formula is stated for a single f, but both this task and Shell Example 2 need the **difference of two boundaries**. Read f as "height of the strip" throughout.

> **SLIDE ERROR (Week 11, slide 13).** "The shell method is used when integrating along an axis **parallel** to the axis of revolution." Her own two examples say the opposite: Example 1 revolves about the y-axis and integrates dx; Example 2 revolves about the x-axis and integrates dy. The reliable version: **for discs and washers you integrate along the axis of revolution; for shells you integrate perpendicular to it.** Say "perpendicular" and back it with her examples.

> **SLIDE ERROR (Week 11, slide 10).** The slide is headed "VOLUMES BY INTEGRATION: **DISC** METHOD" but the working uses R and r and the washer formula. Do not conclude that the disc formula subtracts anything.

**The three TASK answers she never gave: 15π/2, 176π/15, π/6.** They are the most likely exam templates in the week, precisely because she sets them and leaves them open.

---

## Part 7 — Integration applied to real problems

*Week 12. Five application areas, seven worked examples, and nothing else. Every one is a definite or indefinite integral of a polynomial, a square root, or e^(kt), evaluated with the tools of Weeks 7–11.*

**The one principle underneath all of it:** **integrate a rate over an interval and you get the total accumulated over that interval.**

### 7.1 Kinematics

**Example 1 — integrate a velocity, get a distance.** v(t) = 2t² + 6t + 1 km/h; find the distance travelled in the first 5 hours.

x = ∫₀⁵(2t² + 6t + 1)dt = [2t³/3 + 3t² + t]₀⁵ = 83.33 + 75 + 5 = **163.3 km**

**The rate at the end is not the total.** v(5) = 81 km/h is a speed; the integral is a distance. Reading the integrand at the upper limit is the single most common wrong answer in this week's material.

*Aside: calling this "distance" is safe only because v is positive throughout [0, 5], so the car never reverses. She does not make the distance/displacement distinction anywhere.*

**Example 2 — an initial condition, then a definite integral.** v(t) = 6t² − 6t − 12 m/s, with initial displacement −4 m.

**(a) The displacement function.** x(t) = ∫(6t² − 6t − 12)dt = 2t³ − 3t² − 12t + C. Substituting t = 0 kills the first three terms, so x(0) = C, and the given value reads straight off: **x(t) = 2t³ − 3t² − 12t − 4**.

**(b) At t = 3.** x(3) = 54 − 27 − 36 − 4 = **−13 m**. A negative displacement is fine — the body is 13 m on the negative side of the origin.

**(c) The net displacement in the first 5 seconds.**

∫₀⁵(6t² − 6t − 12)dt = [2t³ − 3t² − 12t]₀⁵ = 250 − 75 − 60 = **115 m**

**The most instructive thing in the whole week is that the −4 disappeared here.** Part (a) needed it; part (c) does not, because the constant cancels: (F(5) + C) − (F(0) + C) = F(5) − F(0). Carrying the −4 in and subtracting it once gives 111, which is x(5) — the body's *position* after 5 seconds, not the *change* in its position. Both are meaningful numbers; only one answers the question.

*Aside: v(t) = 6(t − 2)(t + 1) is negative on (0, 2) and positive on (2, 5), so the body goes back 20 m and then forward 135 m. The net 115 m is the sum of the signed pieces; the total distance would be 155 m. She neither asks for it nor teaches how to get it.*

### 7.2 Fluid force

**Her formula (slide 7).** **F = ∫ₐᵇ w·h(x)·L(x)dx**, where **w = ρg** is the weight density of water, h(x) is the depth of the strip and L(x) is the width of the face there. For water, **w = ρg = (1000)(9.8) = 9800**.

**Example — a rectangular dam**, 100 m high and 300 m wide, top level with the water surface.

F = ∫₀¹⁰⁰ (9800)(x)(300)dx = 2.94 × 10⁶ [x²/2]₀¹⁰⁰ = 2.94 × 10⁶ × 5000 = **1.47 × 10¹⁰ N**

9800 × 300 = 2.94 × 10⁶ is pulled out front as a constant, and [x²/2] from 0 to 100 is 5000.

**Why an integral is needed at all:** the depth, and therefore the pressure, **increases as you go down**, so you cannot multiply one pressure by the whole area. The strip at depth x carries essentially constant pressure w·x; integrating adds the strips up.

> **SLIDE ERROR (Week 12, slide 7).** The weight density is printed as **9800 N/m²**. Weight density ρg has units of newtons per **cubic** metre: kg/m³ × m/s² = N/m³. The number is right; the unit is not. Note also that her h(x) = x is measured **downward from the surface** — a depth, not a height above the base. It works cleanly here only because the top of the dam is level with the water.

### 7.3 Work and energy

**Her formula (slide 8).** **W = ∫ₐᵇ F(x)dx.** The examinable half is *building* F(x) before you integrate.

**Example — a 60 m rope of mass 66 g/m hanging over a cliff, pulled to the top.** Her order:

- Assume the rope has been pulled **x** m, so the amount still hanging is **(60 − x)** m.
- 66 g/m = **0.066 kg/m**, so the hanging mass is 0.066(60 − x) kg.
- Weight = mass × g, so **F(x) = 9.8(0.066)(60 − x) = 0.6468(60 − x)**.

W = ∫₀⁶⁰ 0.6468(60 − x)dx = [0.6468(60x − x²/2)]₀⁶⁰ = 0.6468 × 1800 = **1164.24 J**

Three examinable moves, in order: **convert the units** (leave it in grams and every joule is 1000 times too large); **weight = mass × g**, which is where 9.8 enters; and **the hanging length is 60 − x, not x and not 60**. The force starts at 38.8 N and falls to 0, which is exactly why W = F × d is unavailable — using the constant 38.8 N would give 2328 J.

### 7.4 Marginal analysis in economics

**Total from marginal (slide 9).** **TR(Q) = ∫MR(Q)dQ**, with the constant fixed by a given data point.

MR = 100 + 20Q + 3Q², and TR(2) = 260.

TR(Q) = 100Q + 10Q² + Q³ + C, and TR(2) = 200 + 40 + 8 + C = 248 + C

248 + C = 260, so **C = 12** and TR(Q) = 100Q + 10Q² + Q³ + 12.

**An initial condition is an equation to solve, not a value to copy.** Setting C = 260 is the error this example is designed to catch.

**Capital growth (slide 10).** **K = ∫ₐᵇ I(t)dt.** With I(t) = 6√t between the 4th and 9th years, rewrite √t as t^(1/2) first:

K = 6∫₄⁹ t^(1/2)dt = 4t^(3/2)|₄⁹ = 4(27) − 4(8) = **76**

The antiderivative: t^(3/2) divided by 3/2 is t^(3/2) × 2/3, and 6 × 2/3 = 4. Then 9^(3/2) = 27 and 4^(3/2) = 8.

> **SLIDE ERROR (Week 12, slide 10).** The slide prints the final answer as **"= 4"**. Every line before it is correct — the rewrite, the antiderivative 4t^(3/2), the limits — and those lines evaluate to **76**. The 4 is the coefficient of t^(3/2), left stranded where the answer should be. Quote 76.

*Note also the other error this example invites: 6√9 − 6√4 = 6 substitutes into the integrand instead of the antiderivative.*

**Consumer and producer surplus (slides 11–12).** Demand D(Q) = 1000 − 25Q, supply S(Q) = 100 + Q².

**Equilibrium first — the order is not negotiable**, because both surplus integrals contain Q₀ and P₀:

1000 − 25Q = 100 + Q² ⇒ Q² + 25Q − 900 = 0 ⇒ Q = (−25 ± 65)/2

so Q = 20 or Q = −45; **a negative quantity is meaningless, so Q₀ = 20**, and P₀ = D(20) = **500** (check: S(20) = 500).

CS = ∫₀^Q₀ [D(Q) − P₀]dQ = ∫₀²⁰(500 − 25Q)dQ = [500Q − 25Q²/2]₀²⁰ = 10000 − 5000 = **5000**

PS = ∫₀^Q₀ [P₀ − S(Q)]dQ = ∫₀²⁰(400 − Q²)dQ = [400Q − Q³/3]₀²⁰ = 8000 − 2666.67 ≈ **5333**

Which way round each bracket goes: consumers gain when the price they *would* have paid, D(Q), exceeds what they *do* pay, P₀; producers gain when what they *receive*, P₀, exceeds what they *needed*, S(Q). The two numbers here are close enough that swapping them looks plausible and scores nothing.

### 7.5 Environmental science

**Example — copper consumption at 35e^(0.035t) thousand metric tons per year, t years since 2005.**

**(a) A model for the total consumed.**

C(t) = ∫35e^(0.035t)dt = **1000e^(0.035t) + c**

because 35 ÷ 0.035 = 1000. The condition "nothing consumed yet" is C(0) = 0, and e⁰ = 1, so 0 = 1000 + c and c = −1000:

**C(t) = 1000e^(0.035t) − 1000**

*Aside: the rule ∫e^(kt)dt = e^(kt)/k + c is used here and appears on no slide of the deck. It is the one formula you have to bring with you. **Divide** by k; multiplying would give 1.225 instead of 1000.*

**(b) When 750 thousand metric tons are exhausted.**

750 = 1000e^(0.035t) − 1000 ⇒ e^(0.035t) = 1.75 ⇒ t = ln(1.75)/0.035 = **15.989 ≈ 16 years**

16 years after 2005 is **2021**.

The shape of part (b) is the examinable thing: **set the accumulated total equal to the stock, isolate the exponential, take natural logs, divide by k, add to the base year.**

> **SLIDE ERROR (Week 12, slide 14).** The denominator is printed **0.0035**; it must be **0.035**, the coefficient in the exponent. Her printed answer 15.989 is correct, so only the denominator is wrong — with 0.0035 you would get 159.89 years and the year 2165.

---

## Part 8 — Recap: every formula and definition in the course

### Functions (weeks 1–2)

- **Function**: a relation assigning **exactly one output to each input**. Functions sit **inside** relations. **Domain** = allowed inputs, **codomain** = the set outputs are declared to live in, **range** = the outputs actually produced.
- **Real-valued** = every output is a real number.
- **Domain**: her rule is the denominator ≠ 0; also, nothing negative under a square root. Write it as **D = (…)** in interval notation.
- **Range**, two methods: make x the subject and ask which y are legal; or build a chain of inequalities from |·| ≥ 0 or √· ≥ 0. **Multiplying by −1 reverses an inequality; adding does not.**
- **Inverse**: *let* y = f(x), *switch* x with y, *isolate* y. f⁻¹(x) ≠ 1/f(x).
- **Composite**: f ∘ g = f[g(x)] — the function nearest the x acts first, and f ∘ g ≠ g ∘ f.
- Linear mx + b; quadratic ax² + bx + c with vertex at x = −b/2a and **c the y-intercept**; discriminant Δ = b² − 4ac; exponential a·bˣ (decay when 0 < b < 1); log_b x, the inverse of bˣ, argument > 0; |x| ≥ 0 always; piecewise branches on disjoint intervals; polynomial degree = highest power present and leading coefficient = its coefficient; sin and cos have period 2π, tan has π, sin(kx) has 2π/k.

### Limits and continuity (weeks 3–4)

- Substitute first; a well-defined expression, however ugly, is a finished answer. Only 0/0 stops you.
- **0/0 with polynomials** → factor and cancel, legal because x is near c but never equal to c. **A small fraction inside a big one** → multiply through by the common denominator. **2 − x = −1(x − 2)**, every time.
- **0/0 with a root** → multiply by the conjugate **of the numerator**.
- **L'Hôpital**: lim f/g = lim f′/g′, differentiating top and bottom separately; repeat while the form stays indeterminate and stop the moment it does not.
- The ten properties: sum, difference, constant, constant multiple, product, quotient (**lim g ≠ 0**), power, composite, squeeze, reciprocal (**lim f ≠ 0**).
- **Squeeze**, her letters: f ≤ g ≤ h with lim f = lim h = L forces lim g = L. The two outer limits must be **equal**.
- **Continuity at c**: f(c) defined, the limit exists, and they are equal — all three.
- A limit exists **iff** the left and right limits agree and are finite. Otherwise **DNE**. On a graph: the shaded dot is f(c); an open circle is not.
- lim = ±∞ describes *how* a limit fails; it is not a value. A corner is not a break.

### Differentiation (weeks 5–6)

- **Power**: f(x) = xⁿ gives f′ = nx^(n−1), with **x⁰ = 1**. Roots are fractional powers.
- **First principles**: f′(x) = lim h→0 [f(x + h) − f(x)]/h. Cancel the h before letting h → 0. √x needs the conjugate and gives 1/(2√x).
- **Product**, her order: f′ = u v′ + u′ v. **Quotient**, her order: f′ = (v u′ − u v′)/v², with the denominator **squared**.
- **Chain**: f′(x) = y′(u)·u′(x), then put u back.
- **Implicit**: every differentiated y leaves a dy/dx; collect, **factorise**, divide.
- **Parametric**: dy/dx = dy/dt ÷ dx/dt; leaving the answer in t is correct.
- **Constant**: no variable means derivative 0. **Partial**: freeze the other variable; any term without your variable dies.
- Standard derivatives she uses: sin → cos, cos → **−sin**, tan → sec², ln x → 1/x, eˣ → eˣ. (She states the last three; she uses the first two without ever stating them.)
- **Higher orders**: differentiate what you just wrote. f⁽⁴⁾(x) counts differentiations. The chain factor returns at **every** order: sin(5x) gives 5, 25, 125. Once a derivative is a quotient, the quotient rule applies at every order after it. Second derivative = acceleration, third = jerk.

### Integration (weeks 7–8)

- **∫f(x)dx = F(x) + c** where F′ = f. The **+ c is not optional**; check any integral by differentiating your answer.
- **∫xⁿdx = x^(n+1)/(n+1) + c, n ≠ −1** — raise the power, then **divide** by the new power. ∫1 dx = x. Rewrite fractions and roots as powers first; negative exponents flip signs.
- **FTC**: ∫ₐᵇ f = F(b) − F(a), a number, with **no + c**. Substitute into **F**, not f. Upper minus lower.
- Her fifteen-line standard-integral table is Week 8's foundation, and most of it is new material to memorise.
- **Substitution**: ∫f′(g(x))g′(x)dx = f(g(x)) + C — the chain rule backwards. On a definite integral, **convert the limits** and finish in u. On an indefinite one, **go back to x**.
- **By parts**: ∫u dv = uv − ∫v du, and **v is the integral of dv** — which is why dv = sin x dx gives v = −cos x. Choose u so that differentiating it makes the leftover integral simpler; the real constraint is that dv must be integrable. Apply twice when a power of x survives.
- **Trigonometric substitution**: kill the root with 1 − sin²u = cos²u; ∫cos²u du then needs cos²u = (1 + cos 2u)/2. Normalise a constant out of the root first — 4 − 9x² = 4(1 − (3x/2)²) — and remember dx = (2/3)cos u du, not (3/2).
- **Partial fractions**: factor, split with unknowns, clear the denominator, **substitute the roots** (each kills one unknown). Every resulting term is a logarithm.

### Improper integrals, area, volume, applications (weeks 9–12)

- **Improper** = an infinite limit (Type I) or a discontinuity on the interval (Type II). Replace the bad endpoint by a letter and **write the limit** — that line is worth marks.
- Convergent iff the limit exists. Two infinite ends need **two independent letters** and **both halves must converge**; one divergent half ends the question. A discontinuity **inside** the interval forces a split there.
- **Comparison, her lettering 0 ≤ g ≤ f**: ∫f convergent ⇒ ∫g convergent; ∫g divergent ⇒ ∫f divergent. The other two directions prove nothing. Comparison gives a **verdict, never a value**.
- **p-test**: ∫₁^∞ dx/xᵖ converges if p > 1, diverges if **p ≤ 1**. Taking reciprocals **reverses** an inequality.
- **Area under a curve**: ∫f if f ≥ 0, |∫f| if f ≤ 0; find the limits by setting f(x) = 0 and **test an interior point**; split at any root inside the interval and put the modulus on the piece below the axis only.
- **Area between curves**: solve f = g for the limits, test a point to see which is on top, integrate **top − bottom**. If they cross inside, A = A₁ + A₂ with the top function written first in each piece — no modulus. The strip height is a difference of y-values, so the x-axis is irrelevant.
- **Disc** V = π∫[R]²dx; **washer** V = π∫([R]² − [r]²)dx, **subtracting the squares, not the radii**; **shell** V = 2π∫x f(x)dx with **no square**. π twice, 2π once. R is the boundary **farther from the axis**. If the axis moves, **subtract the axis before squaring**. Discs and washers integrate along the axis of revolution; shells integrate **perpendicular** to it.
- **Applications**: integrate a rate to get a total. An indefinite integral needs one data point to pin the constant; a definite one does not, because the constant cancels. F = ∫w·h(x)·L(x)dx with **w = ρg = 9800 N/m³**; W = ∫F(x)dx, building F first; TR = ∫MR dQ; K = ∫I(t)dt; equilibrium before surplus, CS = ∫[D − P₀], PS = ∫[P₀ − S]; and **∫e^(kt)dt = e^(kt)/k**.

### Every slide error in the course, in one place

| Week | Slide | What it prints | What is correct |
|---|---|---|---|
| 1 | 21 | x² "increases exponentially" | it grows **quadratically** |
| 1 | 22 | f(x) = x + 2 gives y = 2, 1, 0 | **2, 3, 4**; the printed table is that of 2 − x |
| 1 | 25 | "an input (called the domain)" | the **domain is the set** of inputs |
| 2 | — | c is the vertex's y-coordinate | c is the **y-intercept** |
| 3 | 23 | upper bound 5 − x³ | **5 + x³**; the limit is 5 either way |
| 3 | 27 | x→∞ means "from the right" | it is **end behaviour**, not a one-sided limit |
| 5 | 7 | (6x − 5); final answer 8x³ + 24x² − 32x − 30 | (6x² − 5); **32x³ + 36x² − 40x − 30** |
| 5 | 8 | (cos x + sin x)/cos²x | **(cos x + x sin x)/cos²x** |
| 5 | 20 | ³√(x⁵) = x^(3/5) | the question is ⁵√(x³) = x^(3/5) |
| 5 | 21 | second answer labelled ∂f/∂x | it is **∂f/∂y** |
| 6 | 13–14 | numerator … 40x¹⁰ + 568x⁸ + 416x⁶ + 240x⁴ … | **24x¹⁰ + 204x⁸ + 336x⁶ + 204x⁴** |
| 7 | 13 | − 6∫₋₁⁵ x dx | − 6∫₋₁⁵ dx |
| 8 | 8 | ∫2xe^(x²)dx = eᵘ + C | **e^(x²) + C** |
| 8 | 5 | sin⁻¹ + C, tan⁻¹ + C, sec⁻¹ + C | write the argument (x) |
| 9 | 9 | −1/(3x³) → −∞ as c → 0⁻ | → **+∞**; both pieces run to +∞ |
| 9 | 11 | lim x→∞ ∫₂^∞ | lim **t**→∞ ∫₂**ᵗ** |
| 10 | 16 | the two area formulas without conditions | quote slides 4, 8 and 12, **with** f ≥ 0 and f ≥ g |
| 11 | 13 | shells integrate **parallel** to the axis | **perpendicular** to it |
| 11 | 10 | headed DISC METHOD | it is a **washer** example |
| 12 | 7 | ρg = 9800 N/m² | **N/m³** |
| 12 | 10 | capital growth = 4 | **76** |
| 12 | 14 | t = ln(1.75)/0.0035 | /**0.035**, giving 16 years and 2021 |

### The tasks she sets and never answers

These are the likeliest exam templates in the whole course, because she wrote them as questions and left them open.

| Week | Task | Answer |
|---|---|---|
| 1 | domain and range of h(x) = √(x + 2) − 8 | D = [−2, ∞), R = [−8, ∞) |
| 3 | lim x→3 (x³ − 27)/(x − 3) | 27 |
| 3 | lim x→4 (1/√x − 1/2)/(x − 4) | −1/16 |
| 5 | derivative of (2x − 4)² | 8x − 16 |
| 5 | dy/dx for x = t⁴, y = 7t² − 5t | (14t − 5)/(4t³) |
| 6 | second derivative of cos(3x) | −9cos(3x) |
| 6 | third derivative of xeˣ at 2 | 5e² ≈ 36.95 |
| 7 | ∫(2x² − 6x − 3)dx | (2/3)x³ − 3x² − 3x + c |
| 7 | ∫₋₁²(7x − 5)dx | −4.5 |
| 8 | ∫₀¹ x eˣ dx | 1 |
| 8 | ∫x ln x dx | (x²/2)ln x − x²/4 + C |
| 8 | ∫√(1 + x²)dx | (1/2)[x√(1 + x²) + ln(x + √(1 + x²))] + C |
| 8 | ∫[(5x + 7)/((x − 1)(x + 3))]dx | 3ln(x − 1) + 2ln(x + 3) + C |
| 9 | ∫₁^∞ dx/√(x⁶ + 1) | converges, by comparison with 1/x³ |
| 10 | area between 6x − x² and the x-axis | 36 |
| 10 | area between x² and 2 − x² on [0, 2] | 4 |
| 10 | area between cos x and 2 − cos x on [0, 2π] | 4π |
| 11 | √x about the x-axis, 1 ≤ x ≤ 4 | 15π/2 |
| 11 | y = x² on [0, 2] about y = −1 | 176π/15 |
| 11 | between y = x and y = x² about the y-axis | π/6 |

### Final exam checklist

1. **+ c on every indefinite integral; never on a definite one.**
2. Substitute into **F**, not f, and take upper minus lower.
3. Say "this is 0/0" before using L'Hôpital, and stop as soon as the form is no longer indeterminate.
4. Pay the inner derivative in every chain rule, and put u back at the end.
5. Quotient rule: **v u′ − u v′**, over **v squared**.
6. Square the radius in disc and washer volumes; do not square anything in a shell.
7. Set f(x) = 0 or f(x) = g(x) to get limits, and **test an interior point** before choosing the formula.
8. Split at any root inside the interval; put the modulus on the piece below the axis only.
9. Write the limit line for every improper integral, and check the interval for a discontinuity before integrating.
10. Areas and volumes are never negative; displacements and definite integrals can be.
11. Report square units for an area and cubic units for a volume — she does, in every example.
12. **Verify any integration by differentiating your answer.** It is her own justification, it takes ten seconds, and it catches most of the errors above.
