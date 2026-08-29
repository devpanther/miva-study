# MTH_102 Week 8 — what the slide images contained that the extracted text had lost

Deck: `Integration-Techniques-Approach-PDF`, **24 pages**. The title slide (p1) carries the course strip "Elementary Math (calculus)" and the title INTEGRATION TECHNIQUES & APPROACH, but — unlike the Week 7 deck — **no lecturer name**. The Week 7 deck for this course names **Danjuma Rose Uwanassara, MSc Mathematics**.

**What extracted as text:** page 2 (LEARNING OBJECTIVES), page 3 (INTRODUCTION), page 23 (FURTHER READING), and the title/thank-you wording on pages 1 and 24.

**What did not:** **pages 4–22 — nineteen pages — are images.** `pdftotext` recovered only their headings, in this sequence: STANDARD INTEGRALS ×3, SUBSTITUTION ×2, TASK, INTEGRATION BY PARTS ×3, TASK, TRIGONOMETRIC SUBSTITUTION ×4, TASK, PARTIAL FRACTIONS ×2, TASK, SUMMARY. Every formula, every worked example, every task and every answer sat inside those nineteen pictures. Everything below is what was inside them.

For the record, the two pages that did extract:

> **LEARNING OBJECTIVES (p2).** "Upon completion of this unit, you should be able to: identify some rules of integration; evaluate integrals using the standard formula; evaluate integrals using some useful techniques such as substitution, integration by parts, etc."

> **INTRODUCTION (p3).** "The problem of calculating the derivative of an elementary function can always be solved by a systematic application of the standard rules. However, the inverse problem of integration is very different and has no such clear-cut solution. In this note, we discuss some standard techniques for computing integrals: substitution methods, integration by parts, trigonometric substitution, and partial fractions."

---

## 1. The standard-integral table that was invisible (slides 4, 5, 6)

**Slide 4**, verbatim intro:
> "Here is a list of common indefinite integrals that should already be familiar:"

> ∫xⁿdx = x^(n+1)/(n+1) + C, n ≠ −1
> ∫x⁻¹dx = ln(x) + C
> ∫eˣdx = eˣ + C
> ∫sin(x)dx = −cos(x) + C
> ∫cos(x)dx = sin(x) + C

**Slide 5** (no text besides the formulas):
> ∫sec²(x)dx = tan(x) + C
> ∫sec(x)tan(x)dx = sec(x) + C
> ∫[1/√(1 − x²)]dx = sin⁻¹ + C
> ∫[1/(1 + x²)]dx = tan⁻¹ + C
> ∫[1/(x√(x² − 1))]dx = sec⁻¹ + C

**Slide 6:**
> ∫ln(x)dx = x·ln(x) − x + C
> ∫tan(x)dx = −ln(cos(x)) + C
> ∫sec(x)dx = ln(sec(x) + tan(x)) + C
> ∫csc(x)dx = −ln(csc(x) + cot(x)) + C
> ∫cot(x)dx = ln(sin(x)) + C
>
> "In what follows, we present some useful integration techniques."

**Fifteen lines in total.** This is the entire formula inventory the deck supplies before the techniques start; no further standard forms are added anywhere. Note that the deck writes **ln(x)** and never **ln|x|**, and that the three inverse-trigonometric lines on slide 5 are printed **without their arguments**.

## 2. Substitution — statement and both examples (slides 7–8)

**Slide 7, the statement, verbatim:**
> "The general substitution formula states that ∫f′(g(x))·g′(x)dx = f(g(x)) + C. It is just the Chain Rule, written in terms of integration via the Fundamental Theorem of Calculus. This substitution is usually done in the following sense."

**Slide 7, Example 1, verbatim:**
> "**Example 1.** Evaluate ∫₀²(x + 2)³dx.
> **Solution.** Let u = (x + 2), so that du = dx. Notice that if x = 0, then u = 2, and if x = 2, then u = 4. Therefore,
> ∫₀²(x + 2)³dx = ∫₂⁴u³du = (1/4)u⁴|₂⁴ = (1/4)(4⁴ − 2⁴) = 60"

(Arithmetic behind the last step, which the slide does not show: 4⁴ = 256, 2⁴ = 16, 256 − 16 = 240, 240/4 = 60.)

**Slide 8, Example 2, verbatim:**
> "**Example 2.** Evaluate ∫2xe^(x²)dx.
> **Solution.** Since the exponential component is x², we let u = x², so that du = 2x dx. Therefore,
> ∫2xe^(x²)dx = ∫e^(x²)2x dx = ∫eᵘdu = eᵘ + C"

The working ends there, in u. See §7.2.

## 3. TASK slides — all four, none answered on the slides

- **Slide 9 (closing the SUBSTITUTION section):** "Evaluate ∫₀¹ xeˣdx"
- **Slide 13 (closing INTEGRATION BY PARTS):** "Evaluate ∫x ln(x)dx"
- **Slide 18 (closing TRIGONOMETRIC SUBSTITUTION):** "Evaluate ∫√(1 + x²)dx"
- **Slide 21 (closing PARTIAL FRACTIONS):** "Evaluate ∫[(5x + 7)/((x − 1)(x + 3))]dx."

Each TASK slide contains that single line and nothing else. Worked answers, supplied in the new summary because the deck supplies none:

- ∫₀¹xeˣdx = (xeˣ − eˣ)|₀¹ = (e − e) − (0 − 1) = **1**
- ∫x·ln(x)dx = (x²/2)ln(x) − x²/4 + C  [u = ln(x), dv = x dx]
- ∫√(1 + x²)dx = (1/2)[x√(1 + x²) + ln(x + √(1 + x²))] + C  [x = tan(u), then ∫sec³(u)du by parts]
- ∫[(5x + 7)/((x − 1)(x + 3))]dx = **3ln(x − 1) + 2ln(x + 3) + C**  [A = 3 at x = 1, B = 2 at x = −3]

## 4. Integration by parts — statement and both examples (slides 10–12)

**Slide 10, verbatim:**
> "Let f(x) = u and g(x) = v then we have ∫u dv = uv − ∫v du.
> **Example 1.** Evaluate ∫xeˣdx.
> **Solution:** Let u = x. Then du = dx. Also, let dv = eˣdx. Then v = eˣ. Therefore, we have
> ∫xeˣdx = xeˣ − ∫eˣdx = xeˣ − eˣ + C"

**Slide 11, verbatim:**
> "**Example 2.** Evaluate ∫3x²sin(x)dx.
> **Solution:** Let u = 3x². Then du = 6xdx. Also, let dv = sin(x)dx. Then v = −cos(x). Therefore, we have
> ∫3x²sin(x)dx = 3x²(−cos(x)) − ∫ −cos(x)(6xdx)
> = −3x²cos(x) + 6∫xcos(x)dx
> To again evaluate ∫xcos(x)dx, let u = x and dv = cos(x) dx. Then du = dx, v = sin(x), so that
> ∫xcos(x)dx = xsin(x) − ∫sin(x) dx = xsin(x) + cos(x)"

**Slide 12, verbatim:**
> "Finally, we have
> ∫3x²sin(x)dx = −3x²cos(x) + 6(xsin(x) + cos(x)) + C"

No rule for choosing u is given anywhere — no LIATE, no ranking, no discussion. In both examples the algebraic factor is u and the exponential or trigonometric factor is dv. The cycling integrals ∫eˣsin(x)dx and ∫eˣcos(x)dx do not appear.

## 5. Trigonometric substitution — statement and both examples (slides 14–17)

**Slide 14, verbatim:**
> "To evaluate the following type of integrals, some trigonometric substitutions are required.
> **Example 1.** Evaluate ∫√(1 − x²)dx
> **Solution.** Here, we let x = sin(u), so that dx = cos(u) du. Hence, our integral becomes
> ∫√(1 − x²)dx = ∫√(1 − sin²(u))cos(u) du
> = ∫√(cos²(u))cos(u) du = ∫√(cos²(u))cos(u) du = ∫cos²(u)du"

(The middle expression is genuinely printed twice on the slide; it is a repetition, not a further step.)

**Slide 15, verbatim:**
> "Noting that cos²(u) = (1 + cos(2u))/2, we have
> ∫cos²(u)du = u/2 + sin(2u)/4 + C
> Setting back u = sin⁻¹(x), we obtain
> ∫√(1 − x²)dx = sin⁻¹(x)/2 + sin(2sin⁻¹(x))/4 + C
> To further simplify this, notice that sin(2u) = 2sin(u)cos(u) = 2sin(sin⁻¹(x))√(1 − sin²(u)) = 2x√(1 − sin²(sin⁻¹(x))) = 2x√(1 − x²). Hence,
> ∫√(1 − x²)dx = sin⁻¹(x)/2 + x√(1 − x²)/2 + C."

**Slide 16, verbatim** (headed "Example 1." a second time):
> "**Example 1.** Evaluate ∫√(4 − 9x²)dx
> **Solution.** Let us rewrite the integral in the following manner
> ∫√(4 − 9x²)dx = ∫√(4(1 − (3x/2)²))dx = ∫2√(1 − (3x/2)²)dx.
> Now, let 3x/2 = sin(u), so that dx = (2/3)cos(u) du. Hence, our integral becomes
> ∫2√(1 − (3x/2)²)dx = ∫2√(1 − sin²(u))(2/3)cos(u) du
> = (4/3)∫cos²(u)du = 4u/6 + 4sin(2u)/12 + C"

**Slide 17, verbatim:**
> "By substituting the value of u and further simplifying, we have
> ∫√(4 − 9x²)dx
> = 2sin⁻¹(3x/2)/3 + 2sin(sin⁻¹(3x/2))cos(sin⁻¹(3x/2))/3 + C
> = 2sin⁻¹(3x/2)/3 + x√(4 − 9x²)/2 + C"

Both results check out. For slide 17's second term: sin(u) = 3x/2 and cos(u) = √(1 − 9x²/4) = √(4 − 9x²)/2, so 2·(3x/2)·(√(4 − 9x²)/2)/3 = x√(4 − 9x²)/2.

**There is no a-parameter substitution table in this deck.** She does not write x = a·sinθ, x = a·tanθ, x = a·secθ. Her only device for a constant in front of x² is to **factor it out of the root** and normalise to 1 − (something)². The tangent and secant substitutions are never demonstrated — even though slide 18's TASK requires the tangent one.

## 6. Partial fractions — both examples (slides 19–20)

**Slide 19, verbatim:**
> "Some integrals are evaluated by first resolving them into partial fractions.
> **Example 1.** Evaluate ∫[1/(x² + 3x)]dx.
> **Solution.** Factoring 1/(x² + 3x), we get 1/(x(x+3)), so that 1/(x(x+3)) = A/x + B/(x+3). By clearing the denominator, we have 1 = A(x + 3) + B(x). Setting x = 0 and x = −3 yield A = 1/3, B = −1/3. Therefore,
> ∫[1/(x² + 3x)]dx = ∫((1/3)/x − (1/3)/(x + 3))dx = (1/3)ln(x) − (1/3)ln(x + 3) + C"

**Slide 20, verbatim:**
> "**Example 2.** Evaluate ∫[(7x − 6)/((x − 2)(x + 3))]dx.
> **Solution.** Resolving into partial fractions, we have (7x − 6)/((x − 2)(x + 3)) = A/(x − 2) + B/(x + 3). By clearing the denominator, we have 7x − 6 = A(x + 3) + B(x − 2), so that A = 8/5, B = 27/5. Therefore,
> ∫[(7x − 6)/((x − 2)(x + 3))]dx = ∫((8/5)/(x − 2) + (27/5)/(x + 3))dx = (8/5)ln(x − 2) + (27/5)ln(x + 3) + C"

Both are verified: slide 19, x = 0 gives 1 = 3A so A = 1/3, and x = −3 gives 1 = −3B so B = −1/3. Slide 20, x = 2 gives 8 = 5A so A = 8/5, and x = −3 gives −27 = −5B so B = 27/5.

**Only distinct linear factors appear.** No repeated factor, no irreducible quadratic with an (Ax + B) numerator, no improper fraction requiring long division, and no f′/f shortcut. The neither-example-nor-mention list is as important as the content.

## 7. The SUMMARY slide (22), verbatim

> "Some standard techniques for computing integrals of a function have been discussed.
> There are standard integrals for some well-known functions. The general rule for integrating a basic function is given by ∫xⁿdx = x^(n+1)/(n+1) + C, n ≠ −1.
> There are various techniques and approach for evaluating integrals, including substitution methods, integration by parts, trigonometric substitution, and partial fractions."

## 8. Notation the extraction lost

- **Capital C** for the constant of integration throughout this deck. (Week 7 used lowercase c almost everywhere. The two decks are inconsistent with each other.)
- **ln(x), never ln|x|.** No absolute value appears in any logarithm anywhere in the deck — not in the standard table, not in ∫tan(x)dx, not in either partial-fractions answer.
- **sin⁻¹, tan⁻¹, sec⁻¹** rather than arcsin, arctan, arcsec.
- **u, not θ**, as the trigonometric-substitution variable — and "setting back" as her phrase for reversing the substitution.
- **Bar notation** again on slide 7: (1/4)u⁴|₂⁴, with the coefficient factored outside the bar, exactly as in Week 7.
- **Constants left unsimplified for a line**: 4u/6 and 4sin(2u)/12 on slide 16 are only reduced on the following slide, and 2sin⁻¹(3x/2)/3 is her simplified form of 4u/6.
- **She writes the dv choice as a differential**, "let dv = sin(x)dx", and the resulting v without one, "Then v = −cos(x)". That distinction is the mechanical core of the method.

## 9. Errors and misprints on the slides

1. **Slide 16, mislabelling.** The second trigonometric-substitution example is headed **"Example 1."**, duplicating slide 14's label. The section has two Example 1s and no Example 2. The new material refers to them by integrand instead.
2. **Slide 8, incomplete answer.** ∫2xe^(x²)dx is left as **eᵘ + C**. Since the integral is indefinite there are no limits to absorb the substitution, so u must be eliminated: the answer is **e^(x²) + C**. The new material gives the complete answer and flags the omission rather than silently correcting it.
3. **Slide 5, missing arguments.** Three lines print as "= sin⁻¹ + C", "= tan⁻¹ + C", "= sec⁻¹ + C" with no (x) anywhere. They mean sin⁻¹(x) + C, tan⁻¹(x) + C, sec⁻¹(x) + C.
4. **Slide 15, mixed variables inside one chain.** "2sin(sin⁻¹(x))√(1 − sin²(u))" has its first factor converted to x and its second still in u. The next expression in the same chain fixes it, and the final answer is correct.
5. **Slide 9, misplaced TASK.** ∫₀¹xeˣdx closes the SUBSTITUTION section but is not a substitution problem; its indefinite form is Example 1 of the next section, one slide later.
6. **Slide 18, out-of-reach TASK.** ∫√(1 + x²)dx requires the tangent substitution (never demonstrated), the ∫sec(x)dx standard form, integration by parts on ∫sec³(u)du, and the trick of solving algebraically for a repeated integral (which appears nowhere in the deck). Every ingredient is somewhere in the deck; the combination is not. It is worked in full in the new material.
7. **No absolute values in any logarithm** — see §8. Not an error inside her own convention, but it will be marked as one by any textbook, so it is named rather than silently changed.

## 10. Was the old summary wrong, incomplete, or basically fine?

**Nothing in it is mathematically false, and it is a good general account of the topic — but it is not this lecturer's week, and it fails in the specific ways that cost marks.** Four problems:

**a) It contains none of her seven worked examples and none of her four tasks.** Not one of ∫₀²(x + 2)³dx, ∫2xe^(x²)dx, ∫xeˣdx, ∫3x²sin(x)dx, ∫√(1 − x²)dx, ∫√(4 − 9x²)dx, ∫[1/(x² + 3x)]dx or ∫[(7x − 6)/((x − 2)(x + 3))]dx appears anywhere on it. Its eleven worked examples are all invented substitutes — ∫₀¹x(x² + 1)³dx, ∫x√(x − 1)dx, ∫xe^(2x)dx, ∫x²sin(x)dx, ∫eˣcos(x)dx, ∫√(9 − x²)dx, ∫dx/(x² + 4)^(3/2), ∫(3x + 11)/((x − 3)(x + 2))dx, and so on. The four TASK slides — the single most likely templates for assessment, since the lecturer set them herself — are absent, and so are their answers.

**b) A large fraction of it is out of scope.** The old page teaches **LIATE** as a rule for choosing u (she gives no rule at all); the **cycling integrals** ∫eˣsin(x)dx and ∫eˣcos(x)dx solved by algebra for I (never in the deck); the **a-parameter trig-substitution table** with x = a·sinθ, a·tanθ, a·secθ and the right-angled-triangle back-substitution (she instead factors the constant out of the root, which is a different technique with different arithmetic — the 2/3 in dx = (2/3)cos(u)du has no counterpart in the table method); **repeated linear factors** and **irreducible-quadratic numerators** (Ax + B); **polynomial long division** for improper fractions; **completing the square**; the **f′/f logarithm shortcut**, which the old page calls "the single most missed shortcut"; and a fourteen-row standard-integral table containing ∫aˣdx, ∫cosec²x dx, ∫dx/(x² − a²), ∫dx/√(x² ± a²) — none of which is on her three slides. A student revising from it spends most of the time on material the lecturer never taught.

**c) The scope error runs in both directions.** Because the page was written from the objectives rather than the slides, it also **omits** things she does teach: her three-slide standard-integral table as she actually lists it (with ∫csc(x)dx, ∫cot(x)dx, ∫sec(x)tan(x)dx, ∫ln(x)dx and the three inverse-trigonometric lines), her statement of substitution as ∫f′(g(x))·g′(x)dx = f(g(x)) + C, and the normalise-the-root method that both of her trigonometric examples turn on.

**d) Wrong notation.** The old page uses **ln|x| with modulus bars everywhere**, LaTeX-style fraction and exponent markup that renders as literal `xⁿ⁺¹` and `e^(2x)` on a phone, and square brackets [uv]ₐᵇ for evaluation. The deck uses ln(x) with no bars and the bar notation |ₐᵇ. The old page also honestly footnoted that it had been written from the objectives because the deck extracted as headings only — an accurate admission, and exactly the bug this rebuild removes.
