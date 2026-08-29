# MTH_102 Week 3 — what the slide images contained that the extracted text had lost

Deck: `Week-3_-Evaluating-Limit-Algebraically-PDF`, **29 pages**, lecturer **Danjuma Rose Uwanassara, MSc Mathematics**.

**What extracted and what did not.** Only six pages carry real body text: page 2 (LEARNING OBJECTIVES), page 3 (INTRODUCTION — heading plus the graphic labels "y gets closer to 4… as we get closer to x = 6"), page 14 (PROPERTIES OF A LIMIT, the full ten-item list), pages 25 and 26 (APPLICATIONS OF LIMIT, four numbered uses), and page 28 (FURTHER READING). Page 1 and page 29 extract fully but carry only the title and "Thank You". Page 22 (LIMIT OF A COMPOSITE FUNCTION) extracted its heading plus four stray diagram labels — `f(x)`, `g(x)`, `lim g(f(x))`, `lim g(f(x))` — and nothing else.

**Twenty pages are pure picture and gave `pdftotext` a heading and nothing more:** 4, 5 (DIRECT SUBSTITUTION ×2), 6 (FACRORIZATION METHOD — misspelled in the source), 7 (FACTORIZATION METHOD), 8 (TASK), 9, 10 (RATIONALIZATION ×2), 11 (TASK), 12, 13 (L'HOPITAL'S RULE ×2), 15–21 (LIMIT OF A SUM, DIFFERENCE, CONSTANT, CONSTANT MULTIPLE RULE, PRODUCT, QUOTIENT, POWER), 23 (SQUEEZE THEOREM), 24 (LIMIT OF A RECIPROCAL), 27 (SUMMARY). **Every statement of every method, every one of the eight worked examples, both TASKs, every property formula, all ten property examples, and the entire closing summary lived inside those pictures.** Everything below is what was inside them.

## 1. The four methods, as stated on the slides

**Slide 4 — direct substitution, verbatim.**
> "This is the simplest method and applies when substituting the value of *c* directly into the function results in a well-defined expression."

**Slide 6 — factorization, verbatim.**
> "When direct substitution results in an indeterminate form, factoring and simplification can help."

**Slide 9 — rationalization, verbatim.**
> "Useful when dealing with limits involving square roots or complex fractions."
> "Rationalize the numerator by multiplying both the numerator and denominator by the conjugate of the numerator."

**Slide 12 — L'Hôpital's Rule, verbatim.**
> "L'Hôpital's Rule essentially allows you to replace the original function with its derivatives in situations where direct substitution results in an indeterminate form."

There is no other statement of method anywhere in the deck. In particular there is **no** ε–δ definition (page 2 carries a picture of one, with the labels L+E, a−d, a+d, but no words), **no** one-sided limit notation, **no** definition of continuity, and **no** list of the indeterminate forms.

## 2. Worked examples that were invisible (eight of them)

**Direct substitution, slide 4.** "Evaluate lim x→3 x² + 2x − 3." "Solution: Substitute x = 3 into the expression:"
= (3)² + 2(3) − 3
= 9 + 6 − 3
= 15 − 3
= **12**

**Direct substitution, slide 5.** "Evaluate lim x→2 (x³ − 3)/(x² − 6)." "Solution: Substitute x = 2 into the expression:"
= (2³ − 3)/(2² − 6)
= (8 − 3)/(4 − 6) = 5/(−2)
= **−2.5 or −2½**

**Factorization, slide 6.** "Evaluate lim x→2 (x² − 4)/(x − 2)."
> "Solution: You notice how if we use direct substitution it will result to an indeterminate form. i.e. (2² − 4)/(2 − 2) = 0/0
> Now, let's factor the numerator: (x − 2)(x + 2)
> so that, lim x→2 [(x − 2)(x + 2)]/(x − 2)
> Thus, cancel the common factor to get lim x→2 (x + 2) = (2 + 2) = 4"

**Factorization, slide 7 — a complex fraction.** "Evaluate lim x→2 (1/x − 1/2)/(x − 2)."
> "Solution: This is a complex fraction. We multiply the numerator and denominator by the common denominator i.e. **2x**,
> lim x→2 (2 − x)/[2x(x − 2)]
> Then, we factor out **−1**, to get
> lim x→2 [−1(x − 2)]/[2x(x − 2)] = lim x→2 (−1)/(2x) = (−1)/(2(2)) = **−1/4**"

**Rationalization, slide 9.** "Evaluate lim x→0 (√(x+9) − 3)/x."
> "Solution: Rationalize the numerator by multiplying both the numerator and denominator by the conjugate of the numerator:
> lim x→0 [(√(x+9) − 3)/x]·[(√(x+9) + 3)/(√(x+9) + 3)] = lim x→0 [(x + 9) − 9]/[x(√(x+9) + 3)] = lim x→0 x/[x(√(x+9) + 3)]
> Since x is common, cancel it out so that we have:
> lim x→0 1/(√(x + 9) + 3) = 1/(√(0 + 9) + 3) = 1/(√9 + 3) = 1/(3 + 3) = **1/6**"

**Rationalization, slide 10.** "Evaluate lim x→4 (√x − 2)/(x − 4)."
lim x→4 [(√x − 2)/(x − 4)]·[(√x + 2)/(√x + 2)]
= lim x→4 (x − 4)/[(x − 4)(√x + 2)]
= lim x→4 1/(√x + 2)
= 1/(√4 + 2) = 1/(2 + 2) = **1/4**

**L'Hôpital, slide 12.** "Evaluate lim x→0 (sin x)/x."
> "Solution: Given lim x→0 f(x)/g(x), and applying L'Hopital's rule, such that
> f(x) = sin x, g(x) = x
> f′(x) = cos x, g′(x) = 1
> we have lim x→0 f′(x)/g′(x), to be lim x→0 (cos x)/1
> = cos(0)/1 = 1/1 = **1**"

**L'Hôpital, slide 13.** "Evaluate lim x→∞ x²/eˣ."
> "Solution: lim x→∞ 2x/eˣ
> Since direct substitution results to an indeterminate form, so we differentiate again,
> lim x→∞ 2/eˣ = 2/e^∞ = 2/∞ = **0**"

Note that the first line of the slide 13 solution is already one application of the rule; the slide never labels it as such.

## 3. Tasks that were invisible (both, with no answers given)

- **Slide 8, TASK:** "Find the limit of the function lim x→3 (x³ − 27)/(x − 3)." → factor x³ − 27 = (x − 3)(x² + 3x + 9), cancel, substitute: 9 + 9 + 9 = **27**. (L'Hôpital agrees: 3x²/1 at x = 3 is 27.)
- **Slide 11, TASK:** "Evaluate lim x→4 (1/√x − 1/2)/(x − 4)." → 1/√x − 1/2 = (2 − √x)/(2√x); x − 4 = (√x − 2)(√x + 2); 2 − √x = −1(√x − 2); cancel to −1/[2√x(√x + 2)]; at x = 4 this is −1/[2(2)(4)] = **−1/16**.

The deck sets both and answers neither. Both are strong candidates for assessment, and the second one is the hardest single item in the week because it needs the complex-fraction move and the difference-of-squares factorization at the same time.

## 4. The ten properties and their formulas

**Slide 14 (this page DID extract as text), verbatim.**
> "Properties of limits are fundamental rules that help simplify the evaluation of limits and provide insights into the behavior of functions as they approach certain values. Here are some of the key properties of limits:
> ● Limit of a Sum ● Limit of a Difference ● Limit of a Constant ● Constant Multiple Rule ● Limit of a Product ● Limit of a Quotient ● Limit of a Power ● Limit of a Composite Function ● Squeeze Theorem ● Limit of a Reciprocal"

The next ten slides give one property each. **Every formula and every example below was invisible to the extraction.**

**Slide 15 — Limit of a Sum.** lim x→c [f(x) + g(x)] = lim x→c f(x) + lim x→c g(x). "In other words, the limit of a sum is the sum of the limits."
Example: lim x→2 (3x + 4x) = lim x→2 3x + lim x→2 4x = 3(2) + 4(2) = 6 + 8 = **14**

**Slide 16 — Limit of a Difference.** lim x→c [f(x) − g(x)] = lim x→c f(x) − lim x→c g(x). "In other words, the limit of a difference is the difference of the limits."
Example: lim x→−3 (7x − 2x) = lim x→−3 7x − lim x→−3 2x = 7(−3) − 2(−3) = −21 + 6 = **−15**

**Slide 17 — Limit of a Constant.** lim x→c k = k. "The limit of a constant is the constant itself."
Example: lim x→1 5 = **5**

**Slide 18 — Constant Multiple Rule.** lim x→c k f(x) = k · lim x→c f(x). "A constant multiple can be factored out of the limit."
Example: "If lim x→c f(x) = 4, what is lim x→c 3f(x)?" — "Recall from the constant multiple rule that lim x→c 3f(x) = 3 · lim x→c f(x) = 3(4) = **12**"

**Slide 19 — Limit of a Product.** lim x→c [f(x)·g(x)] = lim x→c f(x) · lim x→c g(x). "The limit of a product is the product of the limits."
Example: "If lim x→2 (2x) = 4, and lim x→2 (3x) = 6. Then, lim x→2 [(2x)·(3x)] = lim x→2 (2x) · lim x→2 (3x) = 4·6 = **24**"

**Slide 20 — Limit of a Quotient.** lim x→c f(x)/g(x) = [lim x→c f(x)]/[lim x→c g(x)], **provided lim x→c g(x) ≠ 0.** "The limit of a quotient is the quotient of the limits as long as the denominator's limit is not zero."
Example: lim x→4 6x²/5x = [lim x→4 6x²]/[lim x→4 5x] = 6(4)²/[5(4)] = 96/20 = **4.8**

**Slide 21 — Limit of a Power.** lim x→c [f(x)ⁿ] = [lim x→c f(x)]ⁿ. "The limit of a power is the power of the limit."
Example: lim x→0 (x + 4)³ = [lim x→0 (x + 4)]³ = (0 + 4)³ = 4³ = **64**

**Slide 22 — Limit of a Composite Function.** *Not recoverable.* This page was not among the rendered images, and its text extraction produced only the heading and the labels `f(x)`, `g(x)`, `lim g(f(x))`, `lim g(f(x))`. **No statement of the property and no worked example could be reproduced.** The new material names the property, flags the gap explicitly, and does not put a textbook statement into her mouth.

**Slide 23 — Squeeze Theorem (Sandwich Theorem), verbatim.**
> "If f(x) ≤ g(x) ≤ h(x) for all x in some interval containing c except possibly at c itself. lim x→c f(x) = lim x→c h(x) = L, then lim x→c g(x) = L. This theorem helps determine the limit of a function trapped between two other functions with known limits."
Example: "If 5 − x³ ≤ f(x) ≤ 5 + x³ what is lim x→0 f(x)?"
Slide's working, **as printed**: lim x→0 (5 − x³) ≤ f(x) ≤ lim x→0 (5 − x³) ; then (5 − 0³) ≤ f(x) ≤ (5 − 0³) ; then 5 ≤ f(x) ≤ 5 ; "Therefore, lim x→0 f(x) = **5**." (See §6 — the upper bounds are misprinted.)

**Slide 24 — Limit of a Reciprocal.** lim x→c 1/f(x) = 1/[lim x→c f(x)], **provided lim x→c f(x) ≠ 0.** "The limit of a reciprocal is the reciprocal of the limit, as long as the limit of the original function is not zero."
Example: "Given lim x→6 (1/x²) = 1/[lim x→6 (x²)], prove that the left-hand side is equal to the right-hand side."
Solution: (1/6²) = 1/(6²) ⟹ 1/36 = 1/36. "Therefore, the L.H.S = R.H.S"

## 5. The SUMMARY slide (27), verbatim — invisible to the extraction

> "1. Limit describes the behavior of a function as its input (typically denoted as x) gets closer to a specific point (usually denoted as c).
> 2. It's notation is lim x→c f(x)
> 3. lim x→∞ f(x) represents the limit approaching x from the right while lim x→−∞ f(x) is used when the limit approaches x from the left on the graph.
> 4. From the various properties of limits, we can evaluate limits algebraically using various methods."

## 6. Errors and misprints on the slides

1. **Slide 23 (Squeeze Theorem), substantive.** The example states the bounds correctly as 5 − x³ ≤ f(x) ≤ 5 + x³, but **both working lines print the upper bound as the lower one**: "lim x→0 (5 − x³) ≤ f(x) ≤ lim x→0 (5 − x³)" and then "(5 − 0³) ≤ f(x) ≤ (5 − 0³)". As printed the inequality claims f is trapped between one function and itself. The lines should read `lim x→0 (5 − x³) ≤ f(x) ≤ lim x→0 (5 + x³)` and `(5 − 0³) ≤ f(x) ≤ (5 + 0³)`. **The final answer of 5 is correct**, because x³ → 0 as x → 0 and so both the correct upper bound and the misprinted one evaluate to 5 at the limit point — which is exactly why the defect is easy to miss. The corrected lines are what have been taught in the new material, with the misprint flagged so it is not copied into an exam script. There is a second, smaller inconsistency on the same slide: the theorem calls the squeezed function **g**, while the example calls it **f**.
2. **Slide 27 (SUMMARY), substantive and conceptual.** Point 3 conflates **limits at infinity** with **one-sided limits**. lim x→∞ f(x) and lim x→−∞ f(x) describe end behaviour as x grows without bound in either direction; no finite point is approached, so "from the right" and "from the left" do not apply to them. The right-hand and left-hand limits at a finite point c are written lim x→c⁺ f(x) and lim x→c⁻ f(x), notation that appears nowhere in this deck. The new material reproduces the slide's wording verbatim and then names the error plainly, because a student who repeats point 3 in an exam will lose the mark.
3. **Slide 6, typographic.** The title is printed **FACRORIZATION METHOD**. Slide 7 has it right. This one survives in the extracted text, so it is also in the source file and not a rendering artefact.
4. **Slide 19, typographic.** The product is printed as "= 4.6", using a dot for multiplication. It means 4 × 6, and the next line's 24 confirms it — but read literally it looks like the decimal 4.6.
5. **Slide 13, informal notation.** She writes 2/e^∞ = 2/∞ = 0. Treating ∞ as a value to divide by is shorthand, not algebra. The answer is right.
6. **Slide 12, omitted hypotheses.** L'Hôpital is applied without checking that the form is 0/0 (it is) and without ever stating the rule's conditions — differentiability near c and g′(x) ≠ 0. Slide 13 does re-check the form in words. The new material notes the omission as a marked aside rather than folding textbook hypotheses into her teaching.

## 7. Notation and habits the extraction lost

- **She uses c, not a, for the point approached** — lim x→c throughout, on the method slides and on all ten property slides.
- **The two-line substitution habit** on slide 4: 9 + 6 − 3, then 15 − 3, then 12. Arithmetic is displayed rather than done in the head.
- **The −1 rewrite** as an explicit, named step: "Then, we factor out −1, to get". It appears on slide 7 and is needed again in the slide 11 TASK. It is her signature move for a reversed bracket.
- **Complex fractions are filed under FACTORIZATION** (slide 7), even though slide 9 lists "complex fractions" as a use for rationalization. The deck is internally inconsistent about which heading owns them; the *technique* she actually applies to (1/x − 1/2)/(x − 2) is clearing by the common denominator, not conjugates.
- **The f / g / f′ / g′ four-line layout** for L'Hôpital (slide 12), which is what keeps the rule visually distinct from the quotient rule.
- **Squeeze Theorem lettering is reversed from the usual textbook**: her bounds are f and h and the squeezed function is g, where most books squeeze f between g and h.
- **Property examples are stated in terms of known limits, not known functions** (slides 18, 19): "If lim x→c f(x) = 4, what is lim x→c 3f(x)?" — the function is never named. That is the shape those questions take.
- **"Prove that L.H.S = R.H.S"** as an instruction (slide 24): evaluate both sides independently and set them side by side.

## 8. Was the old summary wrong, incomplete, or basically fine?

**Most of its mathematics is true, but it is largely the wrong week's material, and none of the deck's distinctive content is in it.** It carried an honest footnote admitting it had been written from the slide titles alone because the deck extracted as headings only. That footnote was accurate, and this rebuild removes the need for it. Four problems:

**a) Roughly half the page is off-syllabus.** The old summary taught, at length: the ε–δ definition; one-sided limits with x→a⁻/x→a⁺ notation and the existence test; continuity at a point as a three-condition definition; the classification of discontinuities into removable, jump and infinite; a seven-item catalogue of indeterminate forms; limits at infinity handled by dividing by the highest power, with the leading-coefficient shortcuts; the standard limits lim (sin x)/x = 1, lim (1 − cos x)/x = 0 and lim (1 + 1/x)ˣ = e; and a four-branch "exam decision tree" of its own invention. **None of that is in the deck.** She never writes x→c⁺ or x→c⁻ once, never defines continuity, never lists the indeterminate forms, and reaches x²/eˣ by L'Hôpital rather than by any degree comparison.

**b) It missed most of her worked examples and both of her TASKs.** Three of its ten examples happen to coincide with hers because they are textbook-standard — (x² − 4)/(x − 2) → 4, (√(x+9) − 3)/x → 1/6, (√x − 2)/(x − 4) → 1/4 — and lim x²/eˣ appears in both. But her slide 4 polynomial, her slide 5 rational function with its negative denominator, her slide 7 complex fraction with the −1 rewrite, her slide 12 sin x/x, and **all ten property examples** were absent, as were **both TASK slides** — the two questions most likely to be reused verbatim in assessment. The old questions set never mentioned either TASK either.

**c) The properties were reorganised out of recognition.** The old page gave an eleven-row table including "Identity / linear" and a merged "Power / root" row, and folded Squeeze in as a table entry. Her deck names **exactly ten** properties, in a fixed order, with no identity/linear rule and no root rule, and gives Squeeze a full slide of its own. "Name the ten properties" is a plausible exam question that the old page could not have been revised from. It also stated the Squeeze Theorem with the standard lettering (g ≤ f ≤ h) rather than hers (f ≤ g ≤ h), and illustrated it with x² sin(1/x) instead of her 5 ± x³.

**d) It could not flag the slide errors, because it never saw the slides.** The FACRORIZATION misprint, the Squeeze slide's duplicated lower bound, and — most seriously — the SUMMARY slide's claim that lim x→∞ means "approaching from the right" all went unmentioned. That last one is a false statement sitting in the lecturer's own closing summary, and it is exactly the kind of thing that ends up in an exam question. A revision page that does not name it leaves the student to memorise it.

**On the old questions set specifically:** of its twelve multiple-choice items, roughly half test material the deck never covers — |x − 5|/(x − 5) and one-sided existence, x sin(1/x), the indeterminate-form catalogue, removable discontinuity repair, (ln x)/x, the two-sided existence criterion, and rational limits at infinity by leading coefficients. Short answer S3 is a piecewise-continuity question, a topic that does not appear anywhere in the deck. Its answer-letter spread was fine and its explanations were sound; the problem was the syllabus, not the craft.
