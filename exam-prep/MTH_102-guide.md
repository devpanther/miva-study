# MTH_102 — Elementary Mathematics II (Calculus)

*A complete revision guide covering weeks 1 to 12 of the MIVA Open University semester.*

---

## Orientation

MTH_102 is single-variable calculus. It has one subject: how quantities change, and how changes add up.

Four ideas carry the whole course.

**1. A function is a machine.** One number in, exactly one number out. Written f(x). Weeks 1–2 cover what functions are, what inputs they accept (domain), what outputs they produce (range), and the common families.

**2. A limit is what a function is heading towards.** Not what it equals at a point — what it approaches as you close in. Written lim(x→a) f(x). Weeks 3–4. Limits are the tool that makes the next two ideas possible.

**3. A derivative is an instantaneous rate of change.** Built from a limit: take the gradient of a line joining two points on a curve, then slide the points together until they touch. What survives is the gradient of the tangent at one point. Written dy/dx or f′(x). Weeks 5–6.

**4. An integral is an accumulated total.** Also built from a limit: chop a region into thin strips, add them up, then let the strips become infinitely thin. Written ∫f(x)dx. Weeks 7–12.

The link between 3 and 4 is the most important fact in the course. **Differentiation and integration undo each other.** Differentiate x³ and you get 3x². Integrate 3x² and you get x³ back, plus a constant. That is the Fundamental Theorem of Calculus, and it is why five weeks of integration can follow only two weeks of differentiation — integration is differentiation run backwards.

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

### A warning about the source material

*The lecture PDFs are almost entirely image slides. When the text was extracted, the headings survived and the mathematics did not. The Week 5 deck carries the headings POWER RULE, PRODUCT RULE, QUOTIENT RULE, CHAIN RULE, IMPLICIT FUNCTION, PARAMETRIC DIFFERENTIATION, CONSTANT RULE, THE FIRST PRINCIPLE, CONSTANT MULTIPLE RULE and PARTIAL DIFFERENTIATION — and under every one of them there is nothing at all. The same holds for most of weeks 1, 3, 6, 7, 8, 9, 10, 11 and 12.*

*So the syllabus is known — the headings say what was taught and in what order — but the rules and worked examples are gone. Everything filling such a gap here is a **reconstruction**: the standard correct statement of that topic as the course's own reading list (Stewart, Anton, Larson) gives it. Reconstructions are marked. If your lecturer used particular numbers in a particular example, those numbers are not recoverable.*

*Real slide text did survive in parts of weeks 2, 4 and 12, and is quoted and identified as such.*

---

## Part 1 — Functions: the object calculus acts on

*Weeks 1 and 2. Week 1: "Real-Valued Functions and their Properties". Week 2: "Introduction to Different Types of Functions".*

### 1.1 What a function is

**In plain words.** A function is a rule that takes an input and returns exactly one output. The Week 1 slide uses an ice cream parlour: choose vanilla, get vanilla; choose chocolate, get chocolate. One choice, one outcome, every time.

Three sets are involved: the **domain** (allowed inputs), the **codomain** (the set outputs are declared to live in) and the **range** (the outputs actually produced). The range sits inside the codomain and is often smaller. The Week 1 slide shows f(x) = x² with domain {1, 2, 3, 4, 5} and a codomain containing {1, 4, 9, 16, 25, 17, 23, 19}. Only 1, 4, 9, 16, 25 get hit; those five are the range.

A function is **real-valued** when every output is a real number. The slide "IS THIS A REAL-VALUED FUNCTION?" maps D = {A, B, C, D} into Y = {K, 3, 9, 8, 6}. The answer is no, for a precise reason: one possible output is the letter K, which is not a real number. It may still be a function; it is just not real-valued.

**Why it works.** The "exactly one output" condition is what makes calculus possible. Every later idea — the limit as x approaches a, the gradient at a point, the area under the curve — assumes one height above each x. Allow two and none of it is defined.

**Function versus relation.** A relation is any set of ordered pairs; a function is one in which no input repeats with a different output. Every function is a relation, not conversely. The Week 1 slide draws relations as the outer circle and functions as the inner one.

**Vertical line test** (quoted from Week 2). Draw any vertical line. If it ever cuts the curve more than once, the curve is not a function; if every vertical line cuts at most once, it is. A vertical line is the set of points with the same x, so two crossings means one input with two outputs.

**Injective, surjective, bijective** (Week 2 slide):

| Case | Meaning |
|---|---|
| Not a function | One element of A points to several in B |
| General function | Several elements of A may share one B |
| Injective (one-to-one) | No two inputs share an output |
| Surjective (onto) | Every element of B is hit |
| Bijective | Both — a perfect pairing |

Only a bijection has a proper inverse.

**Worked example.** Function or not, and one-to-one or not?

(a) {(1, 3), (2, 5), (3, 3), (4, 9)} — a function, since no input repeats; not one-to-one, since 1 and 3 both give 3.
(b) {(1, 3), (2, 5), (1, 7)} — not a function: input 1 gives both 3 and 7.
(c) f(x) = x² on all reals — a function, not one-to-one, since f(−3) = f(3) = 9.
(d) f(x) = 2x + 1 on all reals — a function, and one-to-one, since 2a + 1 = 2b + 1 forces a = b.

**Where people go wrong.** Confusing "one output per input" with "one input per output". A function may send many inputs to one output; x² does. It may not send one input to two outputs. Students also swap the tests: the vertical line test decides *is it a function*, the horizontal line test *is it one-to-one*.

**In the exam.** A mapping diagram or a list of pairs with "is this a function? Give a reason." The marks are in the reason — name the offending input. A circle x² + y² = 25 is the classic vertical-line-test trap.

### 1.2 Domain and range

**In plain words.** The domain is every x you may feed in; the range is every y that can come out. Finding a domain means listing what would break and excluding it.

Only three things break in this course:

1. **Division by zero** — the denominator must not be zero.
2. **Even root of a negative** — anything under a square root must be ≥ 0.
3. **Log of zero or a negative** — the argument of a log must be > 0.

Polynomials, sines, cosines and exponentials accept every real number.

**Why.** Division by zero has no answer. √(−4) is not real. And since a positive base raised to any power stays positive, a logarithm can never receive a negative input.

*Missing-material note: Week 1 has three slides headed "HOW TO FIND THE DOMAIN OF A FUNCTION" and three headed "HOW TO FIND THE RANGE OF A FUNCTION". All six are blank. The method below is a reconstruction.*

**Worked example 1.** Domain of f(x) = √(2x − 6)/(x − 5).

The root needs 2x − 6 ≥ 0, so x ≥ 3. The denominator needs x ≠ 5.

Domain: x ≥ 3 and x ≠ 5, i.e. [3, 5) ∪ (5, ∞).

**Worked example 2.** Range of g(x) = (3x + 1)/(x − 2).

Set y = (3x + 1)/(x − 2) and solve for x:

y(x − 2) = 3x + 1 → xy − 2y = 3x + 1 → xy − 3x = 2y + 1 → x(y − 3) = 2y + 1 → x = (2y + 1)/(y − 3).

Every y gives a valid x except y = 3. Range: all reals except 3.

Check: y = 3 would need 3x + 1 = 3x − 6, i.e. 1 = −6. False, so 3 is genuinely never an output.

For a quadratic, complete the square instead: h(x) = x² − 4x + 7 = (x − 2)² + 3, and since (x − 2)² ≥ 0 the range is [3, ∞).

**Where people go wrong.** Excluding a value because the *numerator* is zero there — that just means f(x) = 0, which is fine. Only the denominator matters. Also, a root in the denominator needs a strict inequality: for 1/√(x − 3) you need x > 3, not x ≥ 3.

**In the exam.** "State the domain" is near-free marks if you check the three breakers in order. Range questions attach to quadratics (complete the square) or rational functions (make x the subject).

### 1.3 Inverse functions

**In plain words.** f⁻¹ undoes f. If f sends 3 to 7, f⁻¹ sends 7 to 3. Domain and range swap.

**Why it works, and when it fails.** For an undoing to be well-defined, each output must have come from only one input. If f(−3) and f(3) both equal 9, then f⁻¹(9) has no single answer. **Only one-to-one functions have inverses** — which is why the injective/surjective slide sits so close to this material.

Method: write y = f(x), swap x and y, make y the subject.

*Missing-material note: the Week 1 slide "HOW TO FIND THE INVERSE OF A FUNCTION" is blank. Method and example are reconstructions.*

**Worked example.** Find the inverse of f(x) = (2x + 3)/(x − 4).

y = (2x + 3)/(x − 4)
y(x − 4) = 2x + 3
xy − 4y = 2x + 3
xy − 2x = 4y + 3
x(y − 2) = 4y + 3
x = (4y + 3)/(y − 2)

So f⁻¹(x) = **(4x + 3)/(x − 2)**.

Check with x = 5: f⁻¹(5) = 23/3. Feed that into f — numerator 2(23/3) + 3 = 46/3 + 9/3 = 55/3; denominator 23/3 − 12/3 = 11/3; divide: 55/11 = 5. We get 5 back. ✓

Note the swap: f is undefined at 4 and never outputs 2; f⁻¹ is undefined at 2 and never outputs 4.

**Where people go wrong.** Writing f⁻¹(x) = 1/f(x). The −1 means "inverse function", not "reciprocal": for f(x) = 2x + 3 the inverse is (x − 3)/2 and the reciprocal is 1/(2x + 3). Second error: swapping x and y and stopping without making y the subject.

**In the exam.** "Find f⁻¹(x) and state its domain." The domain of f⁻¹ is the range of f.

### 1.4 Composite functions

**In plain words.** One function fed into another. Do g first, then f. Written (f ∘ g)(x) = f(g(x)) — this formula appears verbatim on the Week 2 slide. Read inside out: the inner function acts first, even though f is written first.

**Why it works.** Composition is substitution. Wherever f's formula has an x, put the whole of g(x).

**Worked example.** f(x) = 2x + 1, g(x) = x² − 3.

(f ∘ g)(x) = f(x² − 3) = 2(x² − 3) + 1 = 2x² − 6 + 1 = **2x² − 5**.
(g ∘ f)(x) = g(2x + 1) = (2x + 1)² − 3 = 4x² + 4x + 1 − 3 = **4x² + 4x − 2**.

At x = 2: (f ∘ g)(2) = 8 − 5 = **3**; (g ∘ f)(2) = 16 + 8 − 2 = **22**.

Step-by-step check: g(2) = 1, then f(1) = 3 ✓. f(2) = 5, then g(5) = 22 ✓.

The answers differ. **Composition is not commutative.**

**Where people go wrong.** Doing the functions in the wrong order — that loses the whole question. And expanding (2x + 1)² as 4x² + 1, losing the 4x cross-term.

**In the exam.** "Find fg(x) and gf(x)", or "solve fg(x) = 10". For the second, form the composite first, then solve.

### 1.5 The catalogue of function types

*Week 2 — the one deck whose text largely survived. Most of what follows is quoted from the actual slides.*

**In plain words.** Different behaviours need differently shaped functions: straight-line growth, rise-then-fall, runaway growth, repetition. Learning the catalogue means you can name a family from a graph or from data.

**Linear.** f(x) = mx + b. m is the slope; b is the y-intercept, the value at x = 0. Graph: a straight line. Slide example f(x) = 2x + 3; applications given include cost C(q) = 2q + 1000 and distance d(t) = 50t + 100. *(The Week 2 summary writes the same formula as mx + c.)*

**Quadratic.** f(x) = ax² + bx + c. Graph: a parabola, opening upward if a > 0 and downward if a < 0. Slide example g(x) = −2x² + 3x + 1; applications include the arch shape y = 0.005x² − 0.1x + 5.

*Error in the course material. The Week 2 quadratic slide states "c is the y-coordinate of the vertex, which affects its vertical position." That is wrong. **c is the y-intercept**, the height at x = 0; it equals the vertex height only when b = 0. Check the slide's own example: for g(x) = −2x² + 3x + 1 the vertex is at x = −b/(2a) = −3/(−4) = 0.75, and g(0.75) = −1.125 + 2.25 + 1 = 2.125. The vertex height is 2.125, not 1; the slide's c = 1 is simply g(0). Do not repeat the claim in an exam. Its description of b is loose too — changing b moves the vertex both sideways and vertically.*

**Exponential.** f(x) = bˣ, the variable in the exponent. b > 1 grows; 0 < b < 1 decays. Slide example g(x) = 0.5ˣ. Applications: population P(t) = P₀e^(rt), decay N(t) = N₀e^(−λt), compound interest A(t) = P(1 + r/n)^(nt).

*Note: the compound-interest formula appears on the slide as "A(t) = P · (1 + nr)nt" — the extractor destroyed the fraction r/n and the exponent nt. The same happened to P₀e^(rt), which came out as "Po · ert". The correct forms are given above.*

**Logarithmic.** f(x) = log_b(x), the inverse of the exponential. Slide examples: log₁₀(x), the common logarithm, and ln x, the natural logarithm. Domain x > 0 only.

**Trigonometric,** as the Week 2 slide gives them:

| Function | Ratio | Reciprocal | Ratio |
|---|---|---|---|
| sin θ | opposite / hypotenuse | csc θ | hypotenuse / opposite |
| cos θ | adjacent / hypotenuse | sec θ | hypotenuse / adjacent |
| tan θ | opposite / adjacent | cot θ | adjacent / opposite |

Sine and cosine are periodic with period 2π and oscillate between −1 and 1; cosine is sine phase-shifted, cos x = sin(x + π/2). Used for waves, sound, light, pendulums.

**Piecewise.** Different formulas on different intervals. The slide's example: f(x) = 2x + 1 if x ≤ 0, and x² − 3 if x > 0. Decide which interval x falls in, then use that formula: f(−2) = −3; f(3) = 6. Used for temperature over a day, tiered pricing, tax bands.

**Absolute value.** |x| = x if x ≥ 0, and −x if x < 0. It measures distance from zero, so it is never negative. Graph: a V. Slide example f(x) = |x − 3| — the same V with its corner at x = 3.

**Polynomial.** f(x) = aₙxⁿ + aₙ₋₁x^(n−1) + … + a₁x + a₀, with n a non-negative integer. **Degree** is the highest power; **leading coefficient** is aₙ. Slide example f(x) = −x³ + 3x² − 2 has degree 3 and leading coefficient −1. Degree caps the turning points at n − 1; the sign of aₙ decides which way the ends point.

**Rational.** A polynomial over a polynomial. Listed but not developed on the surviving slides, and important later — rational functions are where holes and vertical asymptotes come from.

**Where people go wrong.** Confusing xᵇ with bˣ. x² is a power function, variable in the base; 2ˣ is exponential, variable in the exponent, and they behave nothing alike. Also writing |−5| = −5; absolute values are never negative.

**In the exam.** "Identify the type of function and state its parameters." Linear: m and b. Quadratic: a, b, c and the opening direction. Exponential: base, and grow or decay. Polynomial: degree and leading coefficient. Piecewise evaluation is care, not cleverness.
---

## Part 2 — Limits and continuity

*Weeks 3 and 4. Week 3: "Concept of Limits and their Notation", taught as evaluating limits algebraically. Week 4: "Understanding Continuity and Discontinuity of Limit", taught graphically.*

### 2.1 What a limit is

**In plain words.** As x closes in on some number a, what value is f(x) closing in on? Not what f(a) equals — what f(x) is heading for.

The distinction matters because f(a) may not exist while the limit is perfectly clear. Picture a road with one paving stone missing: walking towards the gap from either side, you can see exactly where the surface *would* be. That height is the limit.

**Notation.** lim(x→a) f(x) = L. One-sided: lim(x→a⁻) f(x) is the limit **from the left**, through values below a; lim(x→a⁺) f(x) is the limit **from the right**.

**The governing rule.** The limit exists if and only if the left and right limits both exist and are **equal**. If they differ, the limit does not exist (DNE). The Week 4 slide states it: if lim(x→3⁺) f(x) = lim(x→3⁻) f(x) the limit EXISTS, but if they are unequal it DOES NOT EXIST.

**Why.** A limit names a single destination. If the left road ends at 3 and the right road at −4, there is none.

*Note on the surviving Week 4 slides. Two consecutive slides headed "HOW TO FIND THE VALUE OF A LIMIT FROM A GRAPH" disagree about which point they discuss. The first gives "lim(x→2⁻) f(x) = 3 and lim(x→2⁺) f(x) = −4"; the second switches to x → 3 while its annotations show 3, 2, 1, −4 and f(2) = 1. They seem to describe one picture with labels inconsistently applied, and the picture did not extract. The mathematics is not in doubt — left ≠ right means DNE — but as printed the 2 and the 3 contradict each other.*

*The same slide says "To find f(x), we check the shaded dot towards the y-axis, i.e. f(2) = 1." The intended meaning: a **filled dot** gives the function value, an **open circle** marks a point where the function is undefined. "Towards the y-axis" is not a meaningful instruction — ignore it and look for the filled dot at that x.*

**Worked example — reading a graph.** *Reconstruction; the Week 4 graphs did not extract.* Suppose the left branch of f rises to height 3 at x = 2 and ends in an open circle, there is a filled dot at (2, 1), and the right branch starts from an open circle at height −4.

- lim(x→2⁻) f(x) = 3
- lim(x→2⁺) f(x) = −4
- lim(x→2) f(x) **does not exist**, since 3 ≠ −4
- f(2) = 1, the filled dot

Three different answers, all correct. That is the whole point: left limit, right limit and function value are three separate questions.

**Where people go wrong.** Answering "f(2) = 1, so the limit is 1." The function value is irrelevant to the limit. And giving two numbers — a limit is one number or it does not exist.

**In the exam.** A graph with a jump, hole or asymptote and four parts: left limit, right limit, the limit, f(a). Answer on four lines; marks are per part.

### 2.2 Evaluating limits algebraically

*Week 3. The slides DIRECT SUBSTITUTION (×2), FACTORIZATION METHOD (×2) and RATIONALIZATION (×2) are all blank. The methods below reconstruct what those headings name.*

Three techniques, tried in order.

**Method 1 — direct substitution.** Put x = a in. If you get a real number, that is the limit. This works whenever f is continuous at a — every polynomial, and every rational, root, exponential, log or trig function whose domain contains a.

lim(x→2) (3x² − 4x + 1) = 12 − 8 + 1 = **5**.

**Method 2 — factorisation.** Use when substitution gives 0/0. That form means numerator and denominator share a factor of (x − a). Factor, cancel, substitute.

**Worked example.** lim(x→2) (x² − 5x + 6)/(x² − 4).

Substituting: numerator 4 − 10 + 6 = 0, denominator 4 − 4 = 0. Indeterminate. Factor:

(x − 2)(x − 3) / [(x − 2)(x + 2)]

Cancel (x − 2) — legal, because we approach 2 without reaching it, so x ≠ 2 throughout.

lim(x→2) (x − 3)/(x + 2) = (−1)/4 = **−0.25**.

**Method 3 — rationalisation.** Use when substitution gives 0/0 and a root is involved. Multiply top and bottom by the conjugate.

**Worked example.** lim(x→0) (√(x + 4) − 2)/x.

Substituting: (2 − 2)/0 = 0/0. Multiply by (√(x + 4) + 2) top and bottom. The numerator becomes (x + 4) − 4 = x, so the expression is x/[x(√(x + 4) + 2)]. Cancel x:

1/(√(x + 4) + 2) → 1/(2 + 2) = **1/4**.

**Why the conjugate works.** (√A − B)(√A + B) = A − B². The root vanishes, unblocking the cancellation.

**Where people go wrong.** Working before checking the form. 5/0 is not indeterminate — the limit is infinite and factoring will not help. 0/5 is simply 0. Only 0/0 and ∞/∞ need work. Students also multiply out the rationalised denominator, which is wasted effort — leave it factored.

**In the exam.** Three or four limits, each built for one method. No root and 0/0 → factor. A root and 0/0 → rationalise. Anything else → substitute.

### 2.3 Indeterminate forms and L'Hôpital's Rule

**In plain words.** 0/0 tells you nothing on its own: the answer could be 5, or 0, or infinity, depending on *how* top and bottom approach zero.

**The rule.** If lim(x→a) f(x)/g(x) gives 0/0 or ∞/∞, then lim f(x)/g(x) = lim f′(x)/g′(x), provided that second limit exists. Differentiate top and bottom **separately**, and repeat if still indeterminate.

*Missing-material note: both Week 3 slides headed L'HOPITAL'S RULE are blank; the statement above is standard. Note that the course introduces the rule in week 3, before derivatives are taught in week 5. Read section 3.3 first if the derivatives are unfamiliar.*

**Why it works.** Near a, both functions look like straight lines through zero: f(x) ≈ f′(a)(x − a) and g(x) ≈ g′(a)(x − a). The ratio's (x − a) cancels, leaving f′(a)/g′(a).

**Worked example 1.** lim(x→0) (sin 3x)/(5x). Substituting gives 0/0.

Top derivative 3 cos 3x; bottom derivative 5. So lim (3 cos 3x)/5 = 3(1)/5 = **3/5**.

**Worked example 2 — applying it twice.** lim(x→0) (1 − cos x)/x². Substituting gives 0/0. First application: sin x over 2x, still 0/0. Second: cos x over 2 → **1/2**.

**Where people go wrong.** Using the quotient rule instead. L'Hôpital involves no squared denominator. And applying it when the form is not indeterminate — lim(x→0) (cos x)/x is 1/0, not 0/0, and forcing the rule gives a wrong answer.

**In the exam.** Write "this is of the form 0/0" before applying the rule. It earns a mark and prevents misuse.

### 2.4 Properties of limits

*Week 3 lists ten properties on one surviving slide and gives each a blank slide of its own. The list is real; the statements are reconstructions.*

With lim(x→a) f(x) = L and lim(x→a) g(x) = M, both existing:

| Property | Statement |
|---|---|
| Sum | lim [f + g] = L + M |
| Difference | lim [f − g] = L − M |
| Constant | lim k = k |
| Constant multiple | lim [k·f] = kL |
| Product | lim [f·g] = LM |
| Quotient | lim [f/g] = L/M, provided M ≠ 0 |
| Power | lim [f]ⁿ = Lⁿ |
| Composite | lim g(f(x)) = g(L), if g is continuous at L |
| Reciprocal | lim [1/f] = 1/L, provided L ≠ 0 |

**Squeeze theorem.** If g(x) ≤ f(x) ≤ h(x) near a and both g and h tend to L, then so does f. If the functions above and below are forced to the same value, the one trapped between has nowhere else to go.

**Worked example.** lim(x→0) x² sin(1/x).

Substitution fails: sin(1/x) has no limit at 0, since 1/x runs to infinity and the sine oscillates forever. But sine is always between −1 and 1, so for x ≠ 0:

−1 ≤ sin(1/x) ≤ 1

Multiply by x², which is positive so the inequalities keep direction:

−x² ≤ x² sin(1/x) ≤ x²

Both bounds tend to 0, so the trapped function does too. Answer **0**.

**Where people go wrong.** Using the quotient property when M = 0. The condition is not decoration — factor, rationalise or use L'Hôpital instead.

**In the exam.** Usually indirect: given lim f = 4 and lim g = −2, find lim(3f − g²) = 3(4) − (−2)² = 12 − 4 = 8. The squeeze theorem always involves a bounded oscillating factor such as sin(1/x).

### 2.5 Continuity

**In plain words.** Continuous at a point means you can draw through it without lifting your pen.

**Formal definition, quoted from Week 4.** f is continuous at c if:

1. f(c) is defined.
2. lim(x→c) f(x) exists.
3. lim(x→c) f(x) = f(c).

**Why three conditions.** Each can fail alone. A hole fails (1); a jump fails (2); a curve approaching height 4 with its filled dot at height 1 satisfies (1) and (2) but fails (3). Each failure has its own name and its own look on a graph.

**Worked example.** For what k is f continuous at x = 2, where f(x) = (x² − 4)/(x − 2) for x ≠ 2 and f(2) = k?

Condition 1 holds for any k. For condition 2, (x² − 4)/(x − 2) = (x − 2)(x + 2)/(x − 2) = x + 2 for x ≠ 2, so the limit is 4. Condition 3 then forces **k = 4**. Any other k leaves a removable discontinuity.

**In the exam.** Either "show f is continuous at x = a" — state and check all three conditions explicitly — or "find k making f continuous", where you set left limit = right limit = f(a) and solve.

### 2.6 Types of discontinuity

*Week 4 names four types. The illustrations did not extract; descriptions combine surviving slide text with reconstructed pictures.*

**1. Removable (a hole).** The slide: these "occur when a function has a point where it's not defined, but the gap can be 'filled' to make the function continuous at that point. The graph will show an open circle or 'hole'." Left and right limits agree; the function value is missing or misplaced. Fill the hole with the limit value and continuity returns.

The slide's Example 1: f(x) = (x² − 1)/(x − 1) at x → 1. Factoring gives x + 1 for x ≠ 1, so the limit is 2, while f(1) is 0/0. A hole at (1, 2).

**2. Jump.** The slide: the graph "will have a break or gap" and the function "approaches different values from the left and right." Both one-sided limits exist but differ, and you cannot fill a jump with one point. Piecewise functions produce these.

**3. Infinite.** The slide: this happens "when a function approaches positive infinity or negative infinity as x approaches a specific point", and "the graph will show a vertical asymptote". The Week 4 example: lim(x→3⁺) f(x) = +∞ and lim(x→3⁻) f(x) = −∞, so the limit is DNE, and with no filled dot at x = 3, f(3) is undefined too. f(x) = 1/(x − 3) behaves this way.

**4. Essential.** Named on the slide, never described. *Reconstruction: an essential discontinuity is one where a one-sided limit fails to exist at all — not by running to infinity but by oscillating without settling. f(x) = sin(1/x) at x = 0 is the standard example. Some textbooks use "essential" as an umbrella for every non-removable discontinuity; since jump and infinite are already listed separately here, the oscillating case is almost certainly what was meant.*

**Worked example.** Classify the discontinuities of f(x) = (x² − 9)/(x² − 2x − 3).

Factor: (x − 3)(x + 3) over (x − 3)(x + 1). The denominator vanishes at x = 3 and x = −1.

At x = 3: the (x − 3) cancels, leaving (x + 3)/(x + 1), which at x = 3 is 6/4 = 1.5. The limit exists but f(3) is undefined. **Removable — a hole at (3, 1.5).**

At x = −1: nothing cancels. The numerator there is (−4)(2) = −8, non-zero, while the denominator goes to 0, so the function blows up. **Infinite — vertical asymptote at x = −1.**

**Where people go wrong.** Assuming every zero of the denominator is an asymptote. It is only an asymptote if the factor does *not* cancel. Factor first, every time.

**In the exam.** "Identify and classify all discontinuities." Factor top and bottom, find the denominator's zeros, decide cancel-or-not for each, name the type and give the location.

### 2.7 Limits at infinity

*Background note: the Week 3 summary mentions behaviour "as they approach particular points or infinity" but no surviving slide develops it. Improper integrals in week 9 need it, so a short treatment follows.*

lim(x→∞) f(x) = L means f settles to L as x grows without bound. The one fact you need: **lim(x→∞) 1/xᵖ = 0 for any p > 0.** For a rational function, divide top and bottom by the highest power in the denominator: lim(x→∞) (3x² + 5x)/(2x² − 1) becomes (3 + 5/x)/(2 − 1/x²) → 3/2.

Shortcut: equal degrees → ratio of leading coefficients; bottom degree higher → 0; top degree higher → infinite.

---

## Part 3 — Differentiation

*Weeks 5 and 6. Week 5: "Definition of Derivatives and its Geometric Representation". Week 6: "Higher-Order Derivatives".*

### 3.1 What a derivative is

**In plain words.** The rate at which a function changes at one instant. If s(t) is where a car is at time t, s′(t) is its speed right now, not its average over the journey.

**Geometric meaning,** quoted from Week 5: the derivative is "the slope of the tangent line to the curve of the function at a specific point." Why it is the same thing: join two points on a curve; that line's gradient is the average rate of change. Slide the second point into the first and the line pivots until it touches at one point — the tangent — whose gradient is the instantaneous rate.

**Notation.** f′(x), dy/dx, y′, df/dx, d/dx[f(x)] all mean the same. Leibniz notation, dy/dx, is better when you must say *with respect to which variable*, which matters for implicit, parametric and partial differentiation.

### 3.2 Differentiation from first principles

*Missing-material note: Week 5's three slides headed THE FIRST PRINCIPLE are blank. Definition and example are reconstructions.*

**The definition.**

f′(x) = lim(h→0) [f(x + h) − f(x)] / h

The fraction is the gradient between the point at x and one a distance h further along. Letting h → 0 collapses them together. You cannot simply set h = 0 — that gives 0/0. Every h in the numerator must cancel against the h in the denominator first.

**Worked example.** Differentiate f(x) = 3x² − 2x from first principles.

f(x + h) = 3(x + h)² − 2(x + h) = 3x² + 6xh + 3h² − 2x − 2h.

Subtract f(x) = 3x² − 2x: the 3x² and −2x cancel, leaving 6xh + 3h² − 2h. (They must cancel; otherwise the limit would be infinite.)

Divide by h: 6x + 3h − 2.

Let h → 0: f′(x) = **6x − 2**.

Check against the power rule: 6x − 2 ✓.

**Where people go wrong.** Expanding (x + h)² as x² + h². It is x² + 2xh + h², and losing the cross-term destroys the answer. Also dividing by h before the non-h terms have cancelled.

**In the exam.** The steps above are the mark scheme. Do not use the power rule and call it first principles — the examiner wants the limit written and the cancellation shown.

### 3.3 The rules of differentiation

*Missing-material note: every rule slide in Week 5 — POWER, PRODUCT, QUOTIENT, CHAIN, CONSTANT, CONSTANT MULTIPLE — is blank. The standard statements follow.*

| Rule | Statement |
|---|---|
| Constant | d/dx(k) = 0 |
| Power | d/dx(xⁿ) = n x^(n−1) |
| Constant multiple | d/dx[k f] = k f′ |
| Sum / difference | d/dx[f ± g] = f′ ± g′ |
| Product | d/dx[uv] = u′v + uv′ |
| Quotient | d/dx(u/v) = (u′v − uv′)/v² |
| Chain | d/dx[f(g(x))] = f′(g(x))·g′(x) |

Standard derivatives: xⁿ → nx^(n−1); sin x → cos x; cos x → −sin x; tan x → sec²x; eˣ → eˣ; e^(kx) → k e^(kx); ln x → 1/x; aˣ → aˣ ln a.

**Why the constant rule is zero.** A constant function does not change; its graph is horizontal; a horizontal line has gradient 0.

**Why the product rule is not u′v′.** If it were, differentiating x·x = x² would give 1·1 = 1 instead of 2x. The correct rule gives 1·x + x·1 = 2x ✓. Both factors change, so the product changes on two fronts.

**Power rule with awkward powers.** Differentiate y = 4x³ − 7/x² + 5√x.

Rewrite as powers: 4x³ − 7x⁻² + 5x^(1/2).

- 4x³ → 12x²
- −7x⁻² → −7(−2)x⁻³ = 14/x³
- 5x^(1/2) → 5(1/2)x^(−1/2) = 5/(2√x)

dy/dx = **12x² + 14/x³ + 5/(2√x)**.

**Product rule.** y = (2x + 1)(x² − 3). u = 2x + 1, u′ = 2; v = x² − 3, v′ = 2x.

dy/dx = 2(x² − 3) + (2x + 1)(2x) = 2x² − 6 + 4x² + 2x = **6x² + 2x − 6**.

Check by expanding first: y = 2x³ + x² − 6x − 3, derivative 6x² + 2x − 6 ✓.

**Quotient rule.** y = (2x + 1)/(x² + 3). u = 2x + 1, u′ = 2; v = x² + 3, v′ = 2x.

Numerator: 2(x² + 3) − (2x + 1)(2x) = 2x² + 6 − 4x² − 2x = −2x² − 2x + 6.

dy/dx = **(−2x² − 2x + 6)/(x² + 3)²**.

**Chain rule.** y = (3x² + 5)⁴. Differentiate the outside keeping the inside intact: 4(3x² + 5)³. Multiply by the inside's derivative, 6x.

dy/dx = **24x(3x² + 5)³**.

**Where people go wrong.** Forgetting the inner derivative in the chain rule. Reversing the quotient rule's numerator — it is top-derivative times bottom *minus* top times bottom-derivative, and swapping flips the sign. And using the power rule on 1/x² without rewriting it as x⁻².

**In the exam.** A five-part question, one rule per part. Identify the structure first: a product needs the product rule, a fraction the quotient rule, a bracket-to-a-power the chain rule. Nested rules are normal.

### 3.4 Implicit differentiation

**In plain words.** Sometimes y is tangled up with x in one equation, like x² + y² = 25, rather than given as a formula. Implicit differentiation finds dy/dx without untangling.

**Why it works.** You treat y as a function of x without ever writing that function down. So differentiating any term containing y triggers the chain rule and produces a dy/dx factor: y² becomes 2y·dy/dx, not 2y.

**Worked example.** Find dy/dx given x²y + y³ = 10.

x²y is a product: d/dx(x²y) = 2xy + x²(dy/dx).
y³: chain rule gives 3y²(dy/dx).
10: gives 0.

2xy + x²(dy/dx) + 3y²(dy/dx) = 0
(dy/dx)(x² + 3y²) = −2xy
dy/dx = **−2xy/(x² + 3y²)**

The answer contains both x and y. That is normal and correct.

**Where people go wrong.** Differentiating y³ as 3y² and omitting the dy/dx. That single omission is the difference between the method working and not.

**In the exam.** Circles and conics: x² + y² = 25 gives dy/dx = −x/y, usually followed by "find the tangent at (3, 4)" — gradient −3/4, so y − 4 = −(3/4)(x − 3).

### 3.5 Parametric differentiation

**In plain words.** x and y are both given in terms of a third variable t. Think of t as time and (x(t), y(t)) as a moving point.

**The formula.** dy/dx = (dy/dt)/(dx/dt). It follows from the chain rule: dy/dt = (dy/dx)(dx/dt), so divide through by dx/dt.

**Worked example.** x = t² + 1, y = t³ − 3t. Find dy/dx at t = 2.

dx/dt = 2t; dy/dt = 3t² − 3. So dy/dx = (3t² − 3)/(2t).

At t = 2: (12 − 3)/4 = **9/4 = 2.25**.

**Where people go wrong.** Dividing the wrong way. dy goes on top, matching dy/dx. For the second derivative, d²y/dx² is *not* (d²y/dt²)/(d²x/dt²); the correct route is [d/dt(dy/dx)]/(dx/dt).

**In the exam.** Substitution into the formula, then usually a tangent-line question at a given t.

### 3.6 Partial differentiation

*The Week 5 deck ends with a blank slide headed PARTIAL DIFFERENTIATION — a preview of a multivariable topic. Brief reconstruction below.*

**In plain words.** For f(x, y), the partial derivative ∂f/∂x asks how f changes when you nudge x while holding y still. The curly ∂ signals that other variables are frozen. Method: treat every other variable as a constant and differentiate as usual.

**Worked example.** f(x, y) = x³y² + 4x − 7y.

For ∂f/∂x, y is a constant: x³y² → 3x²y² (the y² rides along as a coefficient); 4x → 4; −7y → 0.

∂f/∂x = **3x²y² + 4**.

For ∂f/∂y, x is a constant: x³y² → 2x³y; 4x → 0; −7y → −7.

∂f/∂y = **2x³y − 7**.

**Where people go wrong.** Differentiating both variables at once. In ∂f/∂x the y is a number, not a variable.

**In the exam.** At most one short part: "find ∂z/∂x and ∂z/∂y". Easy marks if you remember to freeze the other variable.

### 3.7 Higher-order derivatives

*Week 6. The entire deck's mathematics is missing — FIRST-ORDER DERIVATIVE, SECOND-ORDER DERIVATIVE, THIRD-ORDER DERIVATIVE and five separate slides headed FOURTH DERIVATIVE are all blank. The introduction and week summary survive and are quoted; examples are reconstructions.*

**In plain words.** Differentiate, then differentiate the answer, then that. The Week 6 introduction: "we're familiar with the first derivative, which tells us about the rate of change of a function. But what if we desire to understand how this rate of change itself changes, and then how that change is changing, and so forth?"

**Notation.**

| Order | Prime | Leibniz |
|---|---|---|
| First | f′(x) | dy/dx |
| Second | f″(x) | d²y/dx² |
| Third | f‴(x) | d³y/dx³ |
| nth | f⁽ⁿ⁾(x) | dⁿy/dxⁿ |

From the fourth onwards use the bracketed superscript: f⁽⁴⁾, not f″″.

**Physical meaning,** from the Week 6 summary: "the first derivative gives the rate of change, the second derivative gives the acceleration, and the third derivative gives the jerk." For position s(t): s′ = velocity, s″ = acceleration, s‴ = jerk, how abruptly the acceleration changes.

**Mathematical meaning of the second derivative.** It measures concavity. f″ > 0 means the curve bends upward like a cup, so a stationary point there is a minimum; f″ < 0 means it bends downward, so a stationary point is a maximum. That is the second-derivative test, and it is the main reason higher derivatives appear in a first-year syllabus.

**Worked example 1.** Differentiate y = x⁵ − 3x⁴ + 2x² − 7 repeatedly.

y′ = 5x⁴ − 12x³ + 4x; y″ = 20x³ − 36x² + 4; y‴ = 60x² − 72x; y⁽⁴⁾ = 120x − 72; y⁽⁵⁾ = 120; y⁽⁶⁾ = 0.

A degree-n polynomial has a constant nth derivative and zero beyond. Degree 5 here, so y⁽⁵⁾ is constant ✓.

**Worked example 2 — motion.** A particle has s(t) = t³ − 6t² + 9t metres after t seconds. Find velocity and acceleration at t = 1 and interpret.

v(t) = 3t² − 12t + 9; a(t) = 6t − 12.

v(1) = 3 − 12 + 9 = **0 m/s**. a(1) = 6 − 12 = **−6 m/s²**.

The particle is momentarily at rest and the acceleration is negative, so it is about to move backwards. With v = 0 and a < 0, t = 1 is a local maximum of position — the far point of this leg.

**Where people go wrong.** Writing d²y/dx² as (dy/dx)². They are unrelated: for y = x², (dy/dx)² = 4x² but d²y/dx² = 2. Also stopping a round early.

**In the exam.** Either "find the third derivative", which is easy marks, or a kinematics problem where you differentiate twice and interpret the signs — in words, not just numbers.
---

## Part 4 — Integration: the machinery

*Weeks 7 and 8. Week 7: "Integration" — indefinite and definite integrals. Week 8: "Methods of Integration".*

### 4.1 What integration is

**In plain words.** Integration is differentiation run backwards, and also the adding-up of infinitely many infinitely small pieces; the Fundamental Theorem says those are the same operation. The Week 7 introduction: "When we differentiate a function, we see its rate of change. When we integrate a function, we see its accumulated value."

**Two kinds,** also from that introduction. The **indefinite integral** is "the collection of all its possible antiderivatives" — a family of functions, written ∫f(x)dx = F(x) + C. The **definite integral** over an interval is "the total area between the curve and the independent-variable axis in that interval" — a number.

**Why +C is not optional.** Differentiating kills constants: x³, x³ + 7 and x³ − 500 all have derivative 3x². Running backwards from 3x², you cannot know which constant was there, so you report all of them at once.

### 4.2 Indefinite integrals and standard forms

*Missing-material note: Week 7's six slides headed INDEFINITE INTEGRALS and four headed DEFINITE INTEGRALS are blank, as are Week 8's three headed STANDARD INTEGRALS. Reconstruction follows.*

**Power rule.** ∫xⁿdx = x^(n+1)/(n+1) + C, for every n except n = −1.

n = −1 is excluded because the formula would divide by zero; the correct result there is ∫x⁻¹dx = ln|x| + C. Memorise that exception separately.

Verify any integration formula by differentiating it: d/dx[x^(n+1)/(n+1)] = (n+1)xⁿ/(n+1) = xⁿ ✓. Do this in the exam whenever you are unsure.

| ∫f(x)dx | Result |
|---|---|
| ∫k dx | kx + C |
| ∫xⁿdx (n ≠ −1) | x^(n+1)/(n+1) + C |
| ∫(1/x)dx | ln\|x\| + C |
| ∫eˣdx | eˣ + C |
| ∫e^(kx)dx | e^(kx)/k + C |
| ∫aˣdx | aˣ/ln a + C |
| ∫sin x dx | −cos x + C |
| ∫cos x dx | sin x + C |
| ∫sec²x dx | tan x + C |
| ∫dx/(1 + x²) | arctan x + C |
| ∫dx/√(1 − x²) | arcsin x + C |

**Linearity** (Week 8 summary): constants come out of the integral, and sums and differences split.

There is **no product rule and no quotient rule for integration.** ∫(f·g)dx is not (∫f)(∫g). The Week 8 introduction says so: derivatives "can always be solved by a systematic application of the standard rules. However, the inverse problem of integration is very different and has no such clear-cut solution."

**Worked example 1.** ∫(4x³ − 6x² + 2x − 5)dx term by term: 4x⁴/4 = x⁴; −6x³/3 = −2x³; 2x²/2 = x²; −5x. Answer **x⁴ − 2x³ + x² − 5x + C**. Differentiate to check ✓.

**Worked example 2 — rewrite first.** ∫(3/x² + 2√x)dx. As powers: 3x⁻² + 2x^(1/2).

3x⁻¹/(−1) = −3/x, and 2x^(3/2)/(3/2) = (4/3)x^(3/2).

Answer **−3/x + (4/3)x^(3/2) + C**.

**Where people go wrong.** Omitting +C — a mark every time. Using the power rule on 1/x and producing x⁰/0. Integrating a product term by term as if a product rule existed.

**In the exam.** Several short indefinite integrals, one standard form each. Rewrite roots and reciprocals as powers before starting.

### 4.3 Definite integrals and the Fundamental Theorem

**In plain words.** A definite integral has limits and produces a number: the signed area between the curve and the x-axis from a to b.

**The Fundamental Theorem.** If F is any antiderivative of f,

∫ from a to b of f(x)dx = F(b) − F(a)

Carry the C through and you get (F(b) + C) − (F(a) + C) — it cancels. Never write +C on a definite integral.

**Why "signed".** Below the axis f(x) is negative, so those strips subtract. A definite integral can be zero or negative. If a question asks for *area* and the curve crosses the axis inside the interval, split it — see 6.1.

**Worked example 1.** ∫ from 1 to 3 of (3x² − 2x)dx. Antiderivative x³ − x².

F(3) = 27 − 9 = 18; F(1) = 1 − 1 = 0. Answer **18**.

**Worked example 2 — a negative result.** ∫ from 0 to 2 of (x² − 4)dx. F(x) = x³/3 − 4x.

F(2) = 8/3 − 8 = −16/3; F(0) = 0. Answer **−16/3 ≈ −5.333**.

Negative because the parabola lies entirely below the axis on [0, 2]. The *area* is 16/3; the *integral* is −16/3. Two different questions.

**Useful properties.** ∫ from a to a = 0. Swapping limits flips the sign. Adjacent intervals add: ∫ from a to b + ∫ from b to c = ∫ from a to c.

**Where people go wrong.** Computing F(a) − F(b). Substituting into f instead of F. Writing +C. And working in degrees — in calculus **angles are always radians**.

**In the exam.** Marks split between the antiderivative, both substitutions and the arithmetic. Write the square-bracket line explicitly so the first mark survives an arithmetic slip.

### 4.4 Integration by substitution

*Missing-material note: Week 8's two SUBSTITUTION slides are blank. Standard method below.*

**In plain words.** Substitution is the chain rule reversed. If the integrand contains a function and, as a separate factor, that function's derivative, rename the inner function u and the integral collapses to a standard form.

**Method.** Choose u = the inner function (inside a bracket, root or exponent). Compute du = (du/dx)dx. Replace everything, leaving no x behind. Integrate in u. For an indefinite integral substitute back; for a definite one, change the limits to u-values instead and never substitute back.

**Why it works.** By the chain rule, ∫F′(g(x))g′(x)dx = F(g(x)) + C. The pattern "function of g, times g′" is exactly what substitution detects.

**Worked example 1 — indefinite.** ∫2x(x² + 1)⁵dx.

u = x² + 1, du = 2x dx — exactly what is present.

∫u⁵du = u⁶/6 + C = **(x² + 1)⁶/6 + C**.

Check: differentiating gives 6(x² + 1)⁵·2x/6 = 2x(x² + 1)⁵ ✓.

**Worked example 2 — definite, limits changed.** ∫ from 0 to 2 of x√(x² + 1)dx.

u = x² + 1, du = 2x dx, so x dx = du/2. New limits: x = 0 → u = 1; x = 2 → u = 5.

(1/2)∫ from 1 to 5 of u^(1/2)du = (1/2)(2/3)[u^(3/2)] from 1 to 5 = (1/3)(5√5 − 1).

5√5 = 11.1803, minus 1 is 10.1803, divided by 3: **≈ 3.393**.

**Where people go wrong.** Leaving an x in the u-integral — if one survives, the substitution has failed. And changing the limits *and* substituting back.

**In the exam.** The derivative of your u will be sitting in the integrand, up to a constant multiple. Scan for that pairing.

### 4.5 Integration by parts

*Missing-material note: Week 8's three INTEGRATION BY PARTS slides are blank. Standard reconstruction.*

**In plain words.** The product rule reversed. Use it for a product of two *unrelated* functions — one you want to differentiate away, one you can integrate.

**The formula.** ∫u dv = uv − ∫v du.

**Why it works.** From (uv)′ = u′v + uv′, integrate both sides: uv = ∫u′v dx + ∫uv′ dx, then rearrange.

**Choosing u — LIATE.** Whichever type comes first in this list becomes u: **L**ogarithmic, **I**nverse trig, **A**lgebraic, **T**rigonometric, **E**xponential. The logic: u should get simpler when differentiated. Polynomials do; eˣ and sin x never do.

**Worked example 1.** ∫x e^(2x)dx.

Algebraic beats exponential, so u = x, dv = e^(2x)dx. Then du = dx and v = e^(2x)/2.

∫x e^(2x)dx = x e^(2x)/2 − ∫e^(2x)/2 dx = **x e^(2x)/2 − e^(2x)/4 + C**.

Check by differentiating: e^(2x)/2 + x e^(2x) − e^(2x)/2 = x e^(2x) ✓.

**Worked example 2 — the ln x trick.** ∫ln x dx. There seems to be one function; treat it as ln x times 1.

u = ln x, dv = dx, so du = (1/x)dx and v = x.

∫ln x dx = x ln x − ∫x·(1/x)dx = **x ln x − x + C**.

Check: ln x + x(1/x) − 1 = ln x ✓.

**Where people go wrong.** Choosing u and dv the wrong way round, producing a harder integral. If that happens, stop and swap. Also forgetting the minus sign before the second integral.

**In the exam.** Recognisable by shape: x times sin, x times eˣ, x times ln, or a lone ln x. State u and dv before starting. ∫x²eˣdx needs the formula twice — that is expected.

### 4.6 Trigonometric substitution

*Missing-material note: Week 8's four TRIGONOMETRIC SUBSTITUTION slides are blank. Standard reconstruction.*

**In plain words.** When a square root of a sum or difference of squares blocks you, replace x with a trig function so a Pythagorean identity collapses the root.

| Expression | Substitute | Identity | Root becomes |
|---|---|---|---|
| √(a² − x²) | x = a sin θ | 1 − sin²θ = cos²θ | a cos θ |
| √(a² + x²) | x = a tan θ | 1 + tan²θ = sec²θ | a sec θ |
| √(x² − a²) | x = a sec θ | sec²θ − 1 = tan²θ | a tan θ |

**Worked example 1.** ∫dx/√(9 − x²).

a = 3, so x = 3 sin θ and dx = 3 cos θ dθ. The root: √(9 − 9sin²θ) = √(9cos²θ) = 3 cos θ.

∫(3 cos θ dθ)/(3 cos θ) = ∫dθ = θ + C.

From sin θ = x/3: answer **arcsin(x/3) + C**.

**Worked example 2.** ∫√(4 − x²)dx.

a = 2, x = 2 sin θ, dx = 2 cos θ dθ, root = 2 cos θ.

∫4cos²θ dθ. Use cos²θ = (1 + cos 2θ)/2: 2∫(1 + cos 2θ)dθ = 2θ + sin 2θ + C.

Convert back. θ = arcsin(x/2); sin θ = x/2; cos θ = √(4 − x²)/2. Then sin 2θ = 2 sin θ cos θ = 2(x/2)(√(4 − x²)/2) = x√(4 − x²)/2.

Answer **2 arcsin(x/2) + x√(4 − x²)/2 + C**.

**Where people go wrong.** Converting x but not dx. And leaving the answer in θ — unless the limits were changed, it must come back to x.

**In the exam.** The root tells you which pattern you have. Sketching a right-angled triangle with x and a on the right sides makes the conversion back safer.

### 4.7 Partial fractions

*Missing-material note: Week 8's two PARTIAL FRACTIONS slides are blank. Standard reconstruction.*

**In plain words.** Split one fraction with a factorisable denominator into simpler fractions you can already integrate. It works because ∫dx/(x − k) = ln|x − k| + C is a standard form.

**Procedure.** (1) If the numerator's degree is ≥ the denominator's, divide first. (2) Factorise the denominator. (3) One fraction per factor: linear (x − a) → A/(x − a); repeated (x − a)² → A/(x − a) + B/(x − a)²; irreducible quadratic → (Ax + B)/(x² + bx + c). (4) Multiply through to clear fractions. (5) Find the constants by substituting values that kill factors. (6) Integrate each piece.

**Worked example.** ∫(5x − 4)/(x² − x − 2)dx.

Degrees are fine, so factorise: x² − x − 2 = (x − 2)(x + 1).

Write (5x − 4)/[(x − 2)(x + 1)] = A/(x − 2) + B/(x + 1), so 5x − 4 = A(x + 1) + B(x − 2).

x = 2: 6 = 3A → **A = 2**.
x = −1: −9 = −3B → **B = 3**.

Check at x = 0: A(1) + B(−2) = 2 − 6 = −4, and the left side at x = 0 is −4 ✓.

∫[2/(x − 2) + 3/(x + 1)]dx = **2 ln|x − 2| + 3 ln|x + 1| + C**.

**Where people go wrong.** Skipping the long division when the top degree is too high — the split then produces nonsense. Dropping the modulus bars in the logarithm; ln of a negative is undefined, and the bars make the formula valid on both sides of an asymptote. Using only A/(x − a)² for a repeated factor instead of the two-term form.

**In the exam.** Recognisable by a factorisable denominator. Substituting killing values beats comparing coefficients.

---

## Part 5 — Improper integrals

*Week 9: "Convergence and Divergence of Improper Integrals". Every mathematical slide — IMPROPER INTEGRALS, TYPE I (×3), TYPE II (×2), COMPARISON TEST (×4) — is blank. The objectives and introduction survive and are quoted; the rest is reconstruction.*

### 5.1 What an improper integral is

**In plain words.** An ordinary definite integral has finite limits and a well-behaved function between them. An improper integral breaks one of those conditions: either the interval is infinitely long, or the function blows up inside it.

**Type I — infinite interval.**

∫ from a to ∞ of f(x)dx = lim(t→∞) ∫ from a to t of f(x)dx

**Type II — infinite discontinuity.** If f blows up at b:

∫ from a to b of f(x)dx = lim(t→b⁻) ∫ from a to t of f(x)dx

**Why limits are needed.** The Fundamental Theorem requires substituting a *number* into the antiderivative, and ∞ is not a number. So substitute a finite t, evaluate, then take the limit. Every improper integral question starts with that rewrite. A finite limit means the integral **converges**, and that number is its value; ±∞ or no limit means it **diverges**.

**Worked example 1 — Type I, converging.** ∫ from 1 to ∞ of dx/x².

lim(t→∞) [−1/x] from 1 to t = lim(t→∞) (1 − 1/t) = 1 − 0 = **1**.

An infinitely long region with finite area.

**Worked example 2 — Type I, diverging.** ∫ from 1 to ∞ of dx/x.

lim(t→∞) [ln x] from 1 to t = lim(t→∞) ln t = ∞. **Diverges.**

Note how close the two are: 1/x² converges, 1/x does not. The tail of 1/x² shrinks fast enough; the tail of 1/x does not.

**Worked example 3 — Type II.** ∫ from 0 to 1 of dx/√x, where the integrand blows up at the lower limit: lim(t→0⁺) [2√x] from t to 1 = lim(t→0⁺)(2 − 2√t) = **2**. Converges.

**The p-test — the most useful fact here.**

| Integral | Converges | Diverges |
|---|---|---|
| ∫ from 1 to ∞ of dx/xᵖ | p > 1 | p ≤ 1 |
| ∫ from 0 to 1 of dx/xᵖ | p < 1 | p ≥ 1 |

The rows are opposites, and that is not a coincidence. On an infinite interval the problem is the tail, so the function must shrink fast — large p. Near zero the problem is the spike, so it must blow up slowly — small p. p = 1 diverges in both.

**Where people go wrong.** Substituting ∞ into the antiderivative and writing "−1/∞ = 0" with no limit anywhere; the answer may come out right but the method loses marks and fails on harder cases. Also failing to notice an integral is improper at all — check whether the integrand blows up inside the limits first.

**In the exam.** "Determine whether the integral converges or diverges, and if it converges find its value." Set up the limit on line one; state the conclusion in words at the end.

### 5.2 The comparison test

**In plain words,** from the Week 9 introduction: "Sometimes it is difficult to find the exact value of an improper integral by antidifferentiation. However, it is still possible to determine whether an improper integral converges or diverges. The idea is to compare the integral to one whose behaviour we already know."

**The statement.** Suppose 0 ≤ f(x) ≤ g(x) for all x ≥ a. Then:

- If ∫g **converges**, ∫f converges.
- If ∫f **diverges**, ∫g diverges.

**Why.** Both measure area under non-negative curves, and f's region sits inside g's. Finite area for the bigger forces finite area for the smaller; infinite area for the smaller forces infinite for the bigger. Direction matters: a small integral converging says nothing about the big one, and a big integral diverging says nothing about the small one.

*The Week 9 summary puts this loosely as "if one integral dominates the other, the smaller one behaves the same way." That is only half right — correct for convergence, wrong for divergence. Use the two bullet points above.*

**Worked example 1 — convergence.** Show ∫ from 1 to ∞ of e^(−x²)dx converges.

e^(−x²) has no elementary antiderivative, so comparison is the only route.

For x ≥ 1, x² ≥ x, so −x² ≤ −x, so e^(−x²) ≤ e^(−x).

∫ from 1 to ∞ of e^(−x)dx = lim(t→∞)[−e^(−x)] from 1 to t = lim(t→∞)(e^(−1) − e^(−t)) = 1/e.

The larger integral converges, so **the original converges**, with value at most 1/e ≈ 0.368.

**Worked example 2 — divergence.** Show ∫ from 1 to ∞ of dx/(x + √x) diverges.

For x ≥ 1, √x ≤ x, so x + √x ≤ 2x. Taking reciprocals reverses it: 1/(x + √x) ≥ 1/(2x).

∫ from 1 to ∞ of dx/(2x) diverges by the p-test with p = 1. The smaller function's integral diverges, so **the larger one diverges**.

**Where people go wrong.** Getting the inequality backwards — write the chain out and check which function is on top. Forgetting that both functions must be non-negative throughout. And comparing to a function whose behaviour you never established: state *why* the comparison integral converges or diverges, usually by the p-test.

**In the exam.** The question names a function you cannot integrate. Find a simpler bound whose behaviour follows from the p-test — for large x, drop the smaller terms: 1/(x² + 3x + 1) behaves like 1/x², and 1/√(x³ + 1) like 1/x^(3/2). Then set up the inequality rigorously.
---

## Part 6 — Area and volume by integration

*Weeks 10 and 11. Week 10: "The Area of a Definite Curve". Week 11: "The Volume of a Definite Curve". Both decks are almost entirely blank — nine slides headed AREA BETWEEN CURVES in week 10 and nine headed VOLUMES BY INTEGRATION in week 11, with nothing under them. The introductions and the four-step procedure survive and are quoted; formulas and examples are reconstructions.*

### 6.1 Area under a curve

**In plain words.** ∫ from a to b of f(x)dx gives the area between the curve and the x-axis, counted positively above the axis and negatively below.

**Why — the strip argument.** The Week 10 summary describes it exactly: "breaking down the region into infinitesimally small vertical strips, meticulously calculating each strip's area, and then summing them up." A strip at position x has width Δx and height f(x), so area f(x)Δx. Adding them gives Σf(x)Δx — a **Riemann sum**, also named in that summary. Let the strips become infinitely thin: the Σ becomes ∫ and the Δx becomes dx. That is where the notation comes from.

**Signed area.** For the **net** value, integrate straight through. For the **total geometric area**, find where the curve crosses the axis, split there, and take absolute values before adding.

**Worked example.** Total area between y = x² − 4, the x-axis, and the lines x = 0 and x = 3.

Crossings: x² − 4 = 0 at x = ±2, so x = 2 lies inside the interval. On [0, 2] the curve is below the axis (at x = 0, y = −4); on [2, 3] it is above (at x = 3, y = 5).

Piece 1: ∫ from 0 to 2 of (x² − 4)dx = [x³/3 − 4x] from 0 to 2 = 8/3 − 8 = −16/3. Area 16/3.

Piece 2: ∫ from 2 to 3 = (9 − 12) − (8/3 − 8) = −3 + 16/3 = 7/3.

Total area = 16/3 + 7/3 = **23/3 ≈ 7.667 square units**.

The plain integral over [0, 3] would give −16/3 + 7/3 = −3, which is the net value, not the area.

**Where people go wrong.** Integrating straight through when the curve crosses the axis, and reporting a number too small — or a negative "area". Areas are never negative. Solve f(x) = 0 first, every time.

**In the exam.** "Find the area bounded by the curve and the x-axis between x = a and x = b." Check for crossings first.

### 6.2 Area between two curves

**The formula.** Area = ∫ from a to b of [f(x) − g(x)]dx, where f is the upper curve throughout.

**Why it works.** The vertical strip now runs from the lower curve to the upper one, so its height is f(x) − g(x). This holds even when both curves are below the x-axis, because the subtraction cancels the shared negative part. All you must get right is which curve is on top.

**Four steps.** Solve f(x) = g(x) for the limits; test a point between them to see which is on top; integrate (top − bottom); evaluate.

**Worked example.** Area enclosed between y = x² and y = x + 2.

Intersections: x² = x + 2 → x² − x − 2 = 0 → (x − 2)(x + 1) = 0 → x = −1 and x = 2.

At x = 0 the parabola gives 0 and the line gives 2, so the **line is on top**.

Area = ∫ from −1 to 2 of [(x + 2) − x²]dx. Antiderivative x²/2 + 2x − x³/3.

At x = 2: 2 + 4 − 8/3 = 6 − 8/3 = 10/3.
At x = −1: 1/2 − 2 + 1/3 = 3/6 − 12/6 + 2/6 = −7/6.

Area = 10/3 + 7/6 = 20/6 + 7/6 = 27/6 = **9/2 = 4.5 square units**.

**Worked example — curves that swap over.** Total area between y = x³ and y = x from x = −1 to x = 1.

x³ = x gives x(x² − 1) = 0, so x = −1, 0, 1. Three intersections means the top curve changes.

On (0, 1), at x = 0.5: x = 0.5 beats x³ = 0.125, so the **line is on top**.
On (−1, 0), at x = −0.5: x³ = −0.125 beats x = −0.5, so the **cubic is on top**.

From 0 to 1: ∫(x − x³)dx = [x²/2 − x⁴/4] = 1/2 − 1/4 = 1/4.
From −1 to 0: ∫(x³ − x)dx = [x⁴/4 − x²/2] from −1 to 0 = 0 − (1/4 − 1/2) = 1/4.

Total **1/2 square unit**. The two halves being equal is the expected symmetry for two odd functions.

**Where people go wrong.** Subtracting the wrong way, giving a negative area. Missing a crossing between the outer intersections — integrating (x − x³) straight from −1 to 1 gives exactly 0, the net value, not the area.

**In the exam.** "Find the points of intersection, then find the area." The intersection step carries its own marks. State which curve you are treating as upper and why.

### 6.3 Volumes of revolution — the disc method

**In plain words.** Spin a region about a line and you get a solid. Slice perpendicular to the axis and each slice is a disc, like a coin. Add up the coins.

**The Week 11 four-step procedure,** quoted: "1. Sketch the area and determine the axis of revolution (this determines the variable of integration). 2. Sketch the cross-section (disc, shell, washer) and determine the appropriate formula. 3. Determine the boundaries of the solid. 4. Set up the definite integral, and integrate."

**The formula,** revolving y = f(x) about the x-axis:

V = π ∫ from a to b of [f(x)]²dx

A slice at x is a disc of radius f(x) and thickness dx, so its volume is π[f(x)]²dx.

**A check on the formula.** Revolve the semicircle y = √(r² − x²) from −r to r: V = π∫(r² − x²)dx = π[r²x − x³/3] from −r to r = π(2r³ − 2r³/3) = **4πr³/3**, the known volume of a sphere. The formula is right.

**Worked example.** The region under y = √x above the x-axis, up to x = 4, is rotated about the x-axis.

V = π∫ from 0 to 4 of x dx = π[x²/2] from 0 to 4 = **8π ≈ 25.13 cubic units**.

Revolving about the y-axis instead: write x in terms of y and use V = π∫ from c to d of [g(y)]²dy.

**Where people go wrong.** Forgetting to square the function — π∫f(x)dx is the commonest single error here. Also forgetting the π, and revolving about the y-axis while still integrating dx.

### 6.4 The washer method

**In plain words.** If the region does not touch the axis, the solid has a hole. Each slice is a washer — a disc with a smaller disc punched out.

**The formula.** V = π∫ from a to b of ([R(x)]² − [r(x)]²)dx, with R the outer radius and r the inner. The washer's area is πR² − πr².

**Worked example.** The region between y = x² and y = 2x is rotated about the x-axis.

Intersections: x² = 2x → x(x − 2) = 0 → x = 0, 2. At x = 1 the line gives 2 and the parabola 1, so **R = 2x, r = x²**.

V = π∫ from 0 to 2 of (4x² − x⁴)dx = π[4x³/3 − x⁵/5] from 0 to 2 = π(32/3 − 32/5)

Common denominator 15: 160/15 − 96/15 = 64/15.

V = **64π/15 ≈ 13.40 cubic units**.

**Where people go wrong.** Writing π∫(R − r)²dx instead of π∫(R² − r²)dx. They differ, since (R − r)² = R² − 2Rr + r². The squares are subtracted, not the radii. This is the defining error of the method.

### 6.5 The shell method

**In plain words.** Instead of slicing across, wrap the solid in thin cylindrical shells, like onion layers. Unroll one and it is a thin sheet of height f(x), length 2πx and thickness dx.

**The formula,** revolving about the **y-axis**:

V = 2π ∫ from a to b of x·f(x)dx

Use shells when the region is described in x but you are revolving about the y-axis (or vice versa). The disc method would force you to rewrite the function with x as the subject, which is sometimes impossible.

**Worked example.** The region bounded by y = x², the x-axis and x = 2, revolved about the y-axis.

V = 2π∫ from 0 to 2 of x·x²dx = 2π[x⁴/4] from 0 to 2 = 2π(4) = **8π cubic units**.

**Cross-check by washers in y.** The region runs from y = 0 to y = 4, and at height y the solid runs from x = √y to x = 2: V = π∫ from 0 to 4 of (4 − y)dy = π[4y − y²/2] = π(16 − 8) = 8π ✓. Two methods, one answer — verify volumes this way when you have time.

**Where people go wrong.** Dropping the factor of x — it is the radius and the whole point of the method. Dropping the 2π. And mixing coordinates: shells about the y-axis integrate in x, which feels wrong but is correct.

**In the exam.** "The region bounded by … is rotated through 2π radians about the x-axis. Find the volume." Decide first whether the region touches the axis (disc), leaves a gap (washer), or would be awkward to invert (shell). Sketch even roughly — that is what tells you which radius is outer.

---

## Part 7 — Integration applied to real problems

*Week 12: "Application of Integration to Real-Life Problems". The slides — KINEMATICS (×3), FLUID FORCE, WORK AND ENERGY, MARGINAL ANALYSIS (×4), ENVIRONMENTAL SCIENCE (×2) — are all blank. The summary survives and is quoted; the problems are reconstructions of the standard type each heading names.*

*Filing note: the Week 12 lecture file is named "Review-of-Key-Concepts-and-Practical-Problem-Solving", but its title slide reads "INTEGRATION: APPLICATION OF INTEGRATION TO REAL-LIFE PROBLEMS", matching the week summary. There is no separate revision deck in the source — if your timetable promised a week 12 review, what you were given is applications.*

**The organising principle for all of Part 7.** Every application here has one shape:

> You are given a **rate**. You want a **total**. Integrate the rate over the interval.

Velocity is the rate of change of position — integrate for distance. Marginal cost is the rate of change of cost — integrate for total cost. Discharge rate, force varying with distance, growth rate: same move. Five applications, one idea, five sets of units. The Week 12 summary: "Integration serves as a bridge between abstract mathematical concepts and practical problem-solving," across "physics, engineering, economics, environmental science, and medicine."

### 7.1 Kinematics

Differentiation goes position → velocity → acceleration. Integration goes back the other way, and each integration introduces a constant fixed by an initial condition.

**Worked example 1.** A particle starts at the origin with velocity 2 m/s and has acceleration a(t) = 6t m/s². Find v and s at t = 3.

v(t) = ∫6t dt = 3t² + C₁. Since v(0) = 2, C₁ = 2, so v(t) = 3t² + 2.
s(t) = ∫(3t² + 2)dt = t³ + 2t + C₂. Since s(0) = 0, C₂ = 0.

At t = 3: v = 27 + 2 = **29 m/s**; s = 27 + 6 = **33 m**.

**Worked example 2 — displacement versus distance.** v(t) = 3t² − 12 m/s over the first 3 seconds.

**Displacement** is the plain integral: [t³ − 12t] from 0 to 3 = 27 − 36 = **−9 m**. The particle finishes 9 m behind its start.

**Distance** needs a split where v changes sign: 3t² − 12 = 0 at t = 2. On [0, 2] v is negative (v(0) = −12); on [2, 3] it is positive (v(3) = 15).

∫ from 0 to 2 = 8 − 24 = −16, so 16 m travelled.
∫ from 2 to 3 = (27 − 36) − (8 − 24) = −9 + 16 = 7, so 7 m travelled.

Total distance **23 m**.

**Where people go wrong.** Treating displacement and distance as the same. They differ whenever the object reverses. Also forgetting the constants, or the initial conditions that pin them down.

**In the exam.** Very common. Read whether it wants displacement or distance travelled — different words, different answers.

### 7.2 Work and energy

**In plain words.** Work is force times distance, but only when the force is constant. When force varies with position, integrate: W = ∫ from a to b of F(x)dx. Over a tiny displacement dx the force is effectively constant, so the work is F(x)dx.

**Hooke's law.** A spring resists stretching with F(x) = kx, where k is the spring constant in N/m.

**Worked example.** k = 200 N/m. Find the work done stretching the spring 0.3 m from its natural length.

W = ∫ from 0 to 0.3 of 200x dx = 100[x²] from 0 to 0.3 = 100(0.09) = **9 joules**.

Not 200 × 0.3 = 60 J. The force starts at zero and only reaches its maximum at the end, which is exactly why integration is needed.

**Where people go wrong.** Using W = Fd with the final force. Also confusing extension with total length — the limits are extensions measured from the unstretched position.

### 7.3 Fluid force

**In plain words.** Water pressure rises with depth, so a submerged vertical surface feels more force at the bottom. Slice horizontally and add the strips.

**The formula.** F = ρg∫(depth)×(width)dy, with ρ = 1000 kg/m³ for water and g = 9.8 m/s². Pressure at depth y is ρgy, so a strip of width w(y) and thickness dy takes force ρgy·w(y)dy.

**Worked example.** A vertical rectangular dam face is 10 m wide and holds water 5 m deep. Find the total force.

Measure y downward from the surface, 0 to 5; the width is constant at 10.

F = 1000 × 9.8 × 10 × [y²/2] from 0 to 5 = 98,000 × 12.5 = **1,225,000 N**, or 1.225 MN.

**Where people go wrong.** Using the bottom depth for the whole plate. The pressure is not uniform — that is the point of the integral. Also switching the direction of y midway; pick one, state it, be consistent.

### 7.4 Marginal analysis in economics

**In plain words.** "Marginal" means "derivative". Marginal cost is C′(x), so total cost comes back by integration — and the constant of integration is the **fixed cost**, what you pay when you produce nothing. That gives +C a concrete meaning.

C(x) = ∫MC(x)dx + fixed cost. R(x) = ∫MR(x)dx. Profit = R(x) − C(x).

**Worked example 1.** MC(x) = 3x² − 4x + 20 naira per unit; fixed costs ₦500. Find the cost of 10 units and the extra cost of going from 10 to 20 units.

C(x) = x³ − 2x² + 20x + C, and C(0) = 500 gives C(x) = x³ − 2x² + 20x + 500.

C(10) = 1000 − 200 + 200 + 500 = **₦1500**.
C(20) = 8000 − 800 + 400 + 500 = ₦8100.
Extra cost = 8100 − 1500 = **₦6600**.

The extra cost is also just ∫ from 10 to 20 of MC(x)dx, which avoids the constant entirely. Same answer.

**Worked example 2 — consumer surplus.** Demand is p = 50 − 2q; the market settles at q = 15.

Price: p = 50 − 30 = ₦20.

Consumer surplus is the area between the demand curve and the price line — what buyers were willing to pay, less what they paid.

∫ from 0 to 15 of (50 − 2q)dq = [50q − q²] from 0 to 15 = 750 − 225 = 525.
Actually paid = 20 × 15 = 300.

CS = 525 − 300 = **₦225**.

**Where people go wrong.** Setting the constant to zero and losing the fixed cost. Confusing marginal cost (the derivative) with average cost (C(x)/x).

**In the exam.** "Given the marginal cost function and fixed costs, find the total cost function." Integration with a named constant. Surplus questions need a sketch.

### 7.5 Environmental science and population

**In plain words.** When something is discharged, consumed or produced at a varying rate, integrating the rate gives the accumulated total. The Week 12 summary lists "demand and supply, consumer surplus, population models" here.

**Worked example 1 — cumulative pollutant.** A factory discharges at r(t) = 100e^(0.05t) kg per day. Find the total over the first 10 days.

∫ from 0 to 10 of 100e^(0.05t)dt = [2000e^(0.05t)] from 0 to 10 = 2000(e^(0.5) − 1) = 2000(1.64872 − 1) = **≈ 1297.4 kg**.

This is exactly the Week 12 case study, which describes "a factory discharges a pollutant into a river at a varying rate over a specific period" and computes the total as "the integral of the rate of discharge."

**Worked example 2 — population.** With growth rate P′(t) = 500e^(0.02t) per year, the increase over 10 years is ∫ from 0 to 10 of 500e^(0.02t)dt = [25000e^(0.02t)] from 0 to 10 = 25000(1.2214 − 1) = **≈ 5535 individuals**.

**Where people go wrong.** Integrating e^(kt) without dividing by k. The reverse chain rule demands it: ∫e^(0.05t)dt = 20e^(0.05t). Missing the /k is the commonest slip here.

**In the exam.** Word problems that reduce to a one-line integral. Extract the rate and the interval, write the integral before touching numbers, state the units.

---

## Part 8 — Recap: every formula and definition in the course

### Functions (weeks 1–2)

- **Function**: exactly one output per input. **Domain**: exclude zero denominators, negatives under even roots, non-positive log arguments. **Range**: the outputs produced.
- **Vertical line test**: a function if no vertical line cuts the curve twice. **Injective**: no two inputs share an output. **Surjective**: every codomain element hit. **Bijective**: both.
- **Inverse**: swap x and y, make y the subject; exists only if f is one-to-one; f⁻¹(x) ≠ 1/f(x).
- **Composite**: (f ∘ g)(x) = f(g(x)) — inner first, not commutative.
- Linear mx + b; quadratic ax² + bx + c with vertex at x = −b/(2a) and c the y-intercept; exponential bˣ; logarithmic log_b(x) with domain x > 0; |x| = x if x ≥ 0, −x if x < 0; polynomial degree = highest power, leading coefficient = its coefficient.
- sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj; csc, sec, cot are their reciprocals in that order.

### Limits (weeks 3–4)

- The limit exists **iff** left limit = right limit.
- Substitute first. 0/0 without a root → factorise; 0/0 with a root → rationalise by the conjugate.
- **L'Hôpital**: for 0/0 or ∞/∞, lim f/g = lim f′/g′, differentiating top and bottom separately.
- **Squeeze**: g ≤ f ≤ h with g, h → L forces f → L. lim(x→∞) 1/xᵖ = 0 for p > 0.
- Limit laws: sum, difference, constant, constant multiple, product, quotient (M ≠ 0), power, composite, reciprocal.
- **Continuity at c**: f(c) defined, the limit exists, and they are equal.
- Discontinuities: **removable** (hole), **jump** (one-sided limits differ), **infinite** (asymptote), **essential** (a one-sided limit fails through oscillation).

### Differentiation (weeks 5–6)

- **First principles**: f′(x) = lim(h→0)[f(x + h) − f(x)]/h; geometrically the gradient of the tangent.
- d/dx(k) = 0; d/dx(xⁿ) = nx^(n−1); (kf)′ = kf′; (f ± g)′ = f′ ± g′.
- **Product** (uv)′ = u′v + uv′; **quotient** (u/v)′ = (u′v − uv′)/v²; **chain** d/dx f(g(x)) = f′(g(x))g′(x).
- sin → cos; cos → −sin; tan → sec²; eˣ → eˣ; e^(kx) → k e^(kx); ln x → 1/x; aˣ → aˣ ln a.
- **Implicit**: every y-term gains a dy/dx factor. **Parametric**: dy/dx = (dy/dt)/(dx/dt). **Partial**: ∂f/∂x freezes the other variables.
- Orders f′, f″, f‴, f⁽⁴⁾; position → velocity → acceleration → jerk. f″ > 0 concave up (minimum); f″ < 0 concave down (maximum).

### Integration (weeks 7–8)

- ∫xⁿdx = x^(n+1)/(n+1) + C for n ≠ −1; ∫(1/x)dx = ln|x| + C; ∫eˣdx = eˣ + C; ∫e^(kx)dx = e^(kx)/k + C; ∫aˣdx = aˣ/ln a + C.
- ∫sin x dx = −cos x + C; ∫cos x dx = sin x + C; ∫sec²x dx = tan x + C; ∫dx/(1 + x²) = arctan x + C; ∫dx/√(1 − x²) = arcsin x + C.
- Constants come out and sums split; there is no product or quotient rule.
- **Fundamental Theorem**: ∫ from a to b of f = F(b) − F(a). No +C on a definite integral; swapping limits flips the sign; adjacent intervals add.
- **Substitution**: u = inner function, convert dx via du, change limits for definite integrals.
- **By parts**: ∫u dv = uv − ∫v du, choosing u by **LIATE**.
- **Trig substitution**: √(a² − x²) → a sin θ; √(a² + x²) → a tan θ; √(x² − a²) → a sec θ.
- **Partial fractions**: divide if needed, factorise, one term per factor, substitute killing values, integrate to logarithms.

### Improper integrals, area, volume, applications (weeks 9–12)

- **Type I** (infinite limit) and **Type II** (infinite discontinuity at an endpoint): replace the bad endpoint by t and take the limit. Finite ⇒ **converges**; otherwise **diverges**.
- **p-test**: ∫ from 1 to ∞ of dx/xᵖ converges iff p > 1; ∫ from 0 to 1 of dx/xᵖ converges iff p < 1.
- **Comparison**, 0 ≤ f ≤ g: ∫g converges ⇒ ∫f converges; ∫f diverges ⇒ ∫g diverges.
- Area under a curve: ∫f(x)dx, signed — for total area split at every axis crossing and take absolute values. Area between curves: ∫[top − bottom]dx, limits from f = g.
- **Disc** V = π∫[f(x)]²dx; **washer** V = π∫([R]² − [r]²)dx, subtracting the squares not the radii; **shell** V = 2π∫x·f(x)dx. Sphere check: 4πr³/3.
- Applications principle: **integrate a rate to get a total**. Kinematics a → v → s with initial conditions; displacement is the plain integral, distance splits at every sign change of v.
- Work W = ∫F(x)dx with F = kx; fluid force F = ρg∫(depth)(width)dy, ρ = 1000, g = 9.8.
- C(x) = ∫MC(x)dx + fixed cost; profit = R − C; consumer surplus = ∫ from 0 to q* of (demand)dq − p*q*; accumulated quantity = ∫(rate)dt, with ∫e^(kt)dt = e^(kt)/k.

### Final exam checklist

1. Angles in radians, never degrees.
2. +C on every indefinite integral; never on a definite one.
3. State "this is of the form 0/0" before using L'Hôpital.
4. Square the function in disc and washer volumes.
5. Multiply by the inner derivative in the chain rule.
6. Split the integral at every axis crossing when the question says "area".
7. Show the limit set-up for every improper integral.
8. State which curve is on top before subtracting.
9. Areas and distances are never negative; displacements can be.
10. Verify any integration by differentiating your answer — ten seconds, and it catches most errors.
