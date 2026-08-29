# MTH_102 Week 5 — what the slide images contained that the extracted text had lost

Deck: `Differentiation-Formulae-Rules-Examples-PDF`, **24 pages**, lecturer **Danjuma Rose Uwanassara, MSc Mathematics**. Pages 1–3 (title, LEARNING OBJECTIVES, INTRODUCTION), 23 (FURTHER READING) and 24 (Thank You) extract as text. **Pages 4–22 are images — nineteen consecutive pages, the entire body of the lecture.** `pdftotext` recovered only their headings, in this order:

> POWER RULE, POWER RULE, PRODUCT RULE, PRODUCT RULE, QUOTIENT RULE, QUOTIENT RULE, CHAIN RULE, TASK, IMPLICIT FUNCTION, IMPLICIT FUNCTION, PARAMETRIC DIFFERENTIATION, TASK, CONSTANT RULE, THE FIRST PRINCIPLE, THE FIRST PRINCIPLE, THE FIRST PRINCIPLE (cont'd), CONSTANT MULTIPLE RULE, PARTIAL DIFFERENTIATION, SUMMARY

Nine rule statements, eleven worked examples, two unanswered TASKs and the whole SUMMARY slide were inside those nineteen pictures. Everything below is what they contained.

## 1. What the text extraction DID recover (for the record)

**Slide 1 — title.** "DIFFERENTIATION: FORMULAE, RULES & EXAMPLES / Danjuma Rose Uwanassara / MSc Mathematics"

**Slide 2 — LEARNING OBJECTIVES.**
> "Upon completion of this unit, you should be able to: identify the rules of differentiation; know the different formulas for finding derivatives; solve different examples on differentiation."

**Slide 3 — INTRODUCTION.**
> "In calculus, the derivative is a fundamental mathematical concept that measures how a function changes as its input (independent variable) changes. Geometrically, it represents the slope or rate of change of a function at a specific point. The derivative is a central tool in calculus and plays a crucial role in understanding motion, rates of growth, optimization, and more."

**Slide 23 — FURTHER READING.** Stewart, *Calculus*; Anton, Bivens & Davis, *Calculus: Early Transcendentals*; Larson & Edwards, *Calculus*.

Note that slide 3 is the deck's **only** mention of the geometric/slope interpretation, and it is one sentence with no diagram, no tangent, no chord and no worked example. The separate written "Summary" strand for the week is titled *Definition of Derivatives and its Geometric Representation* and mentions orders of derivatives and geometric interpretation — but **the deck itself teaches neither**. That mismatch is the single biggest trap in this week.

## 2. Rules that were invisible — verbatim, in her wording

**Slide 4 — the power rule.**
> "The power rule states that when f(x) = xⁿ ... f′(x) = nx^(n−1)"

**Slide 5 — the x⁰ note.**
> "where, x⁰ = 1"

**Slide 6 — the product rule.**
> "The product rule states that when f(x) = u(x).v(x) we have, f′(x) = u(x)v′(x) + u′(x)v(x)"

**Slide 8 — the quotient rule.**
> "The quotient rule states that given f(x) = u(x)/v(x) ... Then, f′(x) = [v(x)u′(x) − u(x)v′(x)] / (v(x))²"

**Slide 10 — the chain rule.**
> "The chain rule states that when f(x) = f(g(x)), if y = f(u), where u = g(x). Then, f′(x) = y′(u).u′(x)"

**Slide 12 — the implicit method, in words.**
> "We have to differentiate both sides with respect to x ... Applying the chain rule for y² ... Isolate dy/dx"

**Slide 14 — the parametric rule.**
> "From the parametric rule, dy/dx = dy/dt ÷ dx/dt"

**Slide 16 — the constant rule.**
> "Since the function has no variable, it is a constant. Therefore, dy/dx = 0.
> **NOTE:** The derivative of a constant is zero."

**Slide 17 — the first principle.**
> "Recall the formula, f′(x) = lim(h→0) [f(x+h) − f(x)] / h"

**Slide 21 — partial differentiation, in words.**
> "For ∂f/∂x we treat y as a constant. ... For ∂f/∂y we treat x as a constant."

**Slide 22 — the SUMMARY slide, verbatim.**
> "The derivative of f(x) with respect to x is denoted as f′(x), y′, dy/dx, df/dx, ẏ (where y is a function of x).
> The power rule can be considered as the general rule of differentiation while the first principle is called the 'limit definition of the derivative'.
> There are various rules and formulas for finding derivatives of products, quotients, and compositions of functions."

That is the **entire** rule inventory of the deck. There is no sum rule, no constant multiple rule (despite a slide titled with that name), no trigonometric derivative table, no exponential or logarithmic derivative, no statement about higher-order derivatives, no tangent or normal formula, and no differentiability criterion anywhere.

## 3. Worked examples that were invisible — eleven of them, full working

**Slide 4 — POWER RULE, Example 1.** Differentiate f(x) = x⁴.
f′(x) = 4x^(4−1); hence **f′(x) = 4x³**.

**Slide 5 — POWER RULE, Example 2.** Find the derivative of f(x) = 3x¹⁰⁰ − 4x.
f′(x) = (3×100)x^(100−1) − (4×1)x^(1−1)
= 300x⁹⁹ − 4x⁰
= **300x⁹⁹ − 4** ("where, x⁰ = 1")

**Slide 6 — PRODUCT RULE, Example 1.** Find f′(x) of f(x) = x².sin x.
u(x) = x², v(x) = sin x, u′(x) = 2x, v′(x) = cos x
**f′(x) = x² cos x + 2x sin x**

**Slide 7 — PRODUCT RULE, Example 2.** Find the first derivative of f(x) = (4x + 6)(2x³ − 5x).
u(x) = (4x + 6), v(x) = (2x³ − 5x), u′(x) = 4, v′(x) = 6x² − 5
Printed substitution line: `f′(x) = (4x + 6)(6x − 5) + (2x³ − 5x)(4)`
Printed final line: `f′(x) = 8x³ + 24x² − 32x − 30`
**Both of those lines are wrong — see §5.1. Correct answer: 32x³ + 36x² − 40x − 30.**

**Slide 8 — QUOTIENT RULE, Example 1.** Differentiate f(x) = x/cos(x).
u(x) = x, v(x) = cos(x), u′(x) = 1, v′(x) = −sin(x)
f′(x) = [cos(x).1 − x.(−sin(x))] / (cos(x))²
Printed final line: `f′(x) = [cos(x) + sin(x)] / cos²(x)`
**That final line is wrong — see §5.2. Correct answer: [cos(x) + x sin(x)] / cos²(x).**

**Slide 9 — QUOTIENT RULE, Example 2.** Find the derivative of f(x) = (6x − 3)/(5x²).
u(x) = (6x − 3), v(x) = 5x², u′(x) = 6, v′(x) = 10x
f′(x) = [5x².6 − (6x − 3).10x] / (5x²)²
f′(x) = (30x² − 60x² + 30x)/25x⁴ = (−30x² + 30x)/25x⁴
**f′(x) = 6(1 − x)/5x³** — fully correct as printed.

**Slide 10 — CHAIN RULE.** What is the first derivative of f(x) = cos(x²)?
if y = cos(x²), then y = cos(u); y′(u) = −sin(u), and u′(x) = 2x
f′(x) = −sin(u).2x = −sin(x²).2x
Therefore, **f′(x) = −2x sin(x²)** — correct as printed.

**Slide 12 — IMPLICIT FUNCTION, Example 1.** Differentiate x² + y² = 25.
d/dx(x² + y²) = d/dx(25); "Applying the chain rule for y²:"
2x + 2y(dy/dx) = 0
dy/dx = −2x/2y
**dy/dx = −x/y** — correct as printed.

**Slide 13 — IMPLICIT FUNCTION, Example 2.** Differentiate xy + 6x⁴ = y.
d/dx(xy + 6x⁴) = d/dx(y)
y + x(dy/dx) + 24x³ = dy/dx   *(the slide prints a stray "1." at the start of this line — a list-numbering artefact)*
x(dy/dx) − dy/dx = −24x³ − y
(dy/dx)(x − 1) = −(24x³ + y)
∴ **dy/dx = −(24x³ + y)/(x − 1)** — correct as printed.

**Slide 14 — PARAMETRIC DIFFERENTIATION.** x(t) = 2t + 1, y(t) = t² − t.
x′(t) = 2, y′(t) = 2t − 1
dy/dx = dy/dt ÷ dx/dt
**dy/dx = (2t − 1)/2** — correct as printed, and deliberately left in terms of t.

**Slide 16 — CONSTANT RULE.** Find the derivative of y = 5. **dy/dx = 0.**

**Slide 17 — THE FIRST PRINCIPLE, Example 1.** Differentiate y = 3x using the first principle.
f′(x) = lim(h→0) [3(x + h) − 3x]/h
f′(x) = lim(h→0) [3x + 3h − 3x]/h
f′(x) = lim(h→0) 3h/h
f′(x) = lim(h→0) 3
Therefore, **y′ = 3**

**Slides 18–19 — THE FIRST PRINCIPLE, Example 2.** Differentiate y = √x using the first principle.
Slide 18:
f′(x) = lim(h→0) [√(x + h) − √x]/h
f′(x) = lim(h→0) {[√(x + h) − √x]/h} · [(√(x + h) + √x)/(√(x + h) + √x)]
f′(x) = lim(h→0) [(x + h) − (x)] / [h(√(x + h) + √x)]
Slide 19 (headed "cont'd"):
f′(x) = lim(h→0) (x + h − x) / [h(√(x + h) + √x)]
f′(x) = lim(h→0) h / [h(√(x + h) + √x)]
f′(x) = lim(h→0) 1 / (√(x + h) + √x)
f′(x) = 1 / (√(x + 0) + √x)
**f′(x) = 1/(2√x)**

**Slide 20 — CONSTANT MULTIPLE RULE.** Differentiate y = ⁵√(x³) with respect to x.
Printed solution line: `³√(x⁵) can also be written as x^(3/5)` — **the radical is misprinted, see §5.4.**
Using the power rule, y′ = nx^(n−1):
y′ = (3/5)x^(3/5 − 1)
y′ = (3/5)x^(−2/5)
or **y′ = 3/(5·⁵√(x²))**

**Slide 21 — PARTIAL DIFFERENTIATION.** f(x, y) = 3x² + 2xy − y³; find ∂f/∂x and ∂f/∂y.
"For ∂f/∂x we treat y as a constant." → **∂f/∂x = 6x + 2y**
"For ∂f/∂y we treat x as a constant." → printed as `∂f/∂x = 2x − 3y²`, **label misprinted, see §5.3.** The expression 2x − 3y² is correct and is **∂f/∂y**.

## 4. Tasks that were invisible (both, with no answers given)

- **Slide 11, TASK:** "What is the first derivative of f(x) = (2x − 4)²?" → by the chain rule with u = 2x − 4: 2u·2 = 4(2x − 4) = **8x − 16**. Verified by expanding first: 4x² − 16x + 16 → 8x − 16. The trap answer is 2(2x − 4) = 4x − 8, obtained by omitting u′(x) = 2.
- **Slide 15, TASK:** "Consider the parametric equations x(t) = t⁴, y(t) = 7t² − 5t." → x′(t) = 4t³, y′(t) = 14t − 5, so **dy/dx = (14t − 5)/4t³**, valid for t ≠ 0.

The deck sets both and answers neither.

## 5. Errors and misprints on the slides

**5.1 — Slide 7 (PRODUCT RULE Example 2): two errors, one substantive.**
(a) The substitution line prints `(4x + 6)(6x − 5)`. The **square on 6x² has been dropped**, even though the line immediately above correctly states v′(x) = 6x² − 5.
(b) The "or simplify to get" line prints **f′(x) = 8x³ + 24x² − 32x − 30**. This does not follow from either reading of the line above it. With the correct v′ = 6x² − 5:
(4x + 6)(6x² − 5) + 4(2x³ − 5x) = 24x³ + 36x² − 20x − 30 + 8x³ − 20x = **32x³ + 36x² − 40x − 30**.
Independent check by expanding first: f(x) = 8x⁴ + 12x³ − 20x² − 30x, whose derivative is 32x³ + 36x² − 40x − 30. ✓
(For completeness: even the misprinted bracket (6x − 5) would give 8x³ + 24x² − 4x − 30, not the printed value — so the final line is a third distinct wrong number.) **The correct value 32x³ + 36x² − 40x − 30 is what the new material teaches**, with the printed value named as an error so it is not copied into a script.

**5.2 — Slide 8 (QUOTIENT RULE Example 1): a dropped factor.**
The final line prints `f′(x) = [cos(x) + sin(x)]/cos²(x)`. The **x has been dropped from the second term**. The line above it is correct: `[cos(x).1 − x.(− sin(x))]/(cos(x))²`, and −x·(−sin x) subtracted gives **+x sin x**. Correct answer: **[cos(x) + x sin(x)]/cos²(x)**. This is a double-sign step (a minus from v′ = −sin x, and the rule's own minus), which is presumably how the term was mangled.

**5.3 — Slide 21 (PARTIAL DIFFERENTIATION): a duplicated label.**
Both answers are labelled **∂f/∂x**. The second, 2x − 3y², is mathematically correct but is **∂f/∂y**; the prose directly above it says "For ∂f/∂y we treat x as a constant", so the intent is unambiguous and only the symbol is wrong.

**5.4 — Slide 20 (CONSTANT MULTIPLE RULE): a swapped radical, plus a misnamed slide.**
The question is **y = ⁵√(x³)**. The solution's first line prints "**³√(x⁵)** can also be written as x^(3/5)". ³√(x⁵) is x^(5/3); it is ⁵√(x³) that equals x^(3/5). The index and the power have been transposed inside the radical. Because the exponent she then uses is 3/5, which matches the **question**, every subsequent line is correct and the answer 3/(5·⁵√(x²)) is right.
Separately, **the slide is misnamed**: it contains no constant multiple whatsoever — it is a power-rule example with a fractional index. The constant multiple rule d/dx[c·f(x)] = c·f′(x) is **never stated anywhere in this deck**, though it is used silently on slides 5, 7 and 9.

**5.5 — Slide 13, cosmetic.** A stray "1." precedes the first working line. It is list numbering, not mathematics.

**5.6 — A genuine gap, not an error.** The deck **uses** d/dx(sin x) = cos x (slide 6) and d/dx(cos x) = −sin x (slides 8 and 10) without ever stating, deriving or tabulating them. A student working only from the deck has no source for these two facts. The new summary flags this as a clearly-marked aside rather than folding a trigonometric derivative table into the teaching, because a table is not what she examines on.

## 6. Was the old summary wrong, incomplete, or basically fine?

**Most of its mathematics is true, but it is the wrong material for this week and it contains none of the lecturer's eleven worked examples. It is being replaced, not patched.** Four problems:

**a) It contained none of her examples and neither of her tasks.** The old page's thirteen worked examples were all invented: 3x² − 2x from first principles, 1/x from first principles, 4√x + 5/x³, x³(2x + 5), (2x + 3)/(x² − 1), (3x² + 1)⁵, √(4x − 7), x²y = 6, x = t², y = t³, x⁴ − 3x², x³y² + 4x − y, and a tangent to y = x² at x = 3. **Not one** of the deck's actual examples appeared: x⁴; 3x¹⁰⁰ − 4x; x² sin x; (4x + 6)(2x³ − 5x); x/cos x; (6x − 3)/5x²; cos(x²); x² + y² = 25; xy + 6x⁴ = y; x = 2t + 1, y = t² − t; y = 5; y = 3x from first principles; y = √x from first principles; ⁵√(x³); 3x² + 2xy − y³. Neither TASK slide appeared either — and the TASKs are the most likely assessment templates in the deck.

**b) Out of scope in both directions.** It taught, at length, material the lecturer never covers: the alternative limit form f′(a) = lim(x→a)[f(x) − f(a)]/(x − a), δ-notation with δy/δx, the chord-to-tangent geometric argument in full, tangent and normal line equations, orders of derivatives up to the nth, differentiability implying continuity with the |x| counterexample, a named sum/difference rule, and a named constant multiple rule. None of that is on any of the nineteen image pages. Simultaneously it **omitted** things the lecturer does teach: her explicit x⁰ = 1 line, her conjugate-multiplication technique for √x — the deck's single hardest step — and her SUMMARY slide's naming of the power rule as "the general rule of differentiation" and the first principle as "the limit definition of the derivative".

**c) Wrong orderings for the two rules where order is visible.** It stated the product rule as (uv)′ = u′v + uv′ and the quotient rule as (u/v)′ = (u′v − uv′)/v². She writes them the other way round: **u(x)v′(x) + u′(x)v(x)** and **[v(x)u′(x) − u(x)v′(x)]/(v(x))²**. For the product rule this is harmless. For the quotient rule it is the same expression, but a student who has memorised one layout and is shown the other under exam pressure is one transcription slip away from negating the whole answer, and her layout is the one that will be on the paper.

**d) It could not warn about the slide errors, because it never saw them.** The old page reproduced none of slides 7, 8, 20 or 21, so a student revising from it would meet the wrong product-rule answer, the dropped x in the quotient answer, the swapped radical and the duplicated partial-derivative label for the first time in the exam hall. Three of those four are now named explicitly in the new summary, in the questions, and in the Thursday check.

The old page carried an honest note at the top admitting the deck extracted as slide titles only and that the content below was "the standard content for exactly the topics those two strands name". That note was accurate and it is exactly the bug: the standard content is not this lecturer's content. The replacement removes the need for it.
