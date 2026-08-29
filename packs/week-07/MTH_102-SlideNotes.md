# MTH_102 Week 7 — what the slide images contained that the extracted text had lost

Deck: `Integrals-Definite-and-Indefinite-Integrals-PDF`, 18 pages, lecturer **Danjuma Rose Uwanassara, MSc Mathematics**. Pages 1–3, 17 and 18 extract as text (title, learning objectives, introduction, further reading, thank-you). **Pages 4–16 are images.** `pdftotext` recovered only their headings: INDEFINITE INTEGRALS ×6, TASK, DEFINITE INTEGRALS ×4, TASK, SUMMARY. Everything below is what was inside those thirteen pictures.

## 1. Definitions and rules that were invisible

**Slide 4 — the definition, verbatim.**
> "Suppose that f is a continuous real-number function of a variable x. The indefinite integral of f is a function F such that F′(x) = f(x) added to the constant of integration c. This is written as follows: ∫f(x)dx = F(x) + c."

**Slide 7 — the power rule, verbatim.**
> ∫xⁿdx = x^(n+1)/(n+1) + c, "where n is a real number with n ≠ −1."

**Slide 11 — the Fundamental Theorem, verbatim.**
> "When a definite integral is evaluated, the result will usually be a number. Definite integrals can be evaluated by applying the following Fundamental Theorem of Calculus.
> **Theorem.** Let f be a continuous function of x on the interval [a, b]. If F(x) is an antiderivative of f(x), then ∫ₐᵇ f(x)dx = F(b) − F(a).
> Sometimes, this is written as ∫ₐᵇ f(x)dx = F(x)|ₐᵇ."

**Slide 16 — the SUMMARY slide.** Three statements only: the form ∫f(x)dx = F(x) + c with c the constant of integration; the power rule with n ≠ −1; and "A definite integral is evaluated using the Fundamental Theorem of Calculus. It results as ∫ₐᵇf(x)dx = F(b) − F(a)."

That is the **entire** rule inventory of the deck. There is no second formula anywhere.

## 2. Worked examples that were invisible (seven of them)

**Indefinite, Example 1 (slides 5 and 6)** — a two-slide argument, not a calculation. Starts from f(x) = x², f′(x) = 2x; poses ∫2x dx; renames the integrand g(x) = 2x; says it is "tempting to suppose that the antiderivative of g is the function G such that G(x) = x²"; objects that "G isn't the only function of x that can be differentiated to get g. Any real number c can be added to G"; and closes on slide 6 with the justification **[G(x) + c]′ = 2x + 0 = 2x = g(x)** because "the derivative of the constant is always 0", concluding **∫2x dx = x² + c** "where c can be any real number."

**Indefinite, Example 2 (slide 7).** ∫x⁴dx, n = 4: ∫x⁴dx = x^(4+1)/(4+1) + c = x⁵/5 + c.

**Indefinite, Example 3 (slide 8).** ∫(2/x⁷)dx. "can be written as ∫2x⁻⁷dx, implying that n = −7."
∫(2/x⁷)dx = ∫2x⁻⁷dx = 2·x^(−7+1)/(−7+1) + c = 2·x⁻⁶/(−6) + c = **−1/(3x⁶) + c**.

**Indefinite, Example 4 (slide 9).** ∫(11x¹⁰ − 4x⁹ + 1)dx, "split and evaluated in the following manner":
= ∫11x¹⁰dx − ∫4x⁹dx + ∫1dx
= 11·x^(10+1)/(10+1) − 4·x^(9+1)/(9+1) + 1·x^(0+1)/(0+1) + C
= 11·x¹¹/11 − 4·x¹⁰/10 + 1·x¹/1 + C
= **x¹¹ − (2/5)x¹⁰ + x + C**.

**Definite, Example 1 (slide 12).** ∫₀³4x dx, with f(x) = 4x and F(x) = 2x²:
∫₀³4x dx = **2x²|₀³ = 2(3² − 0²) = 18**.

**Definite, Example 2 (slide 13).** ∫₋₁⁵(3x² − 6)dx, with "f(x) = 3x² and g(x) = −6, so that F(x) = x³ and G(x) = −6x":
= 3∫₋₁⁵x²dx − 6∫₋₁⁵ dx = x³|₋₁⁵ − 6x|₋₁⁵ = (5³ − (−1)³) − 6(5 − (−1)) = **126 − 36 = 90**.

**Definite, Example 3 (slide 14).** ∫₂³(1/x²)dx, with "f(x) = 1/x² = x⁻² so that F(x) = −1/x":
= **(−1/x)|₂³ = −(1/3 − 1/2) = 1/6**.

## 3. Tasks that were invisible (both, with no answers given)

- **Slide 10, TASK:** "Evaluate the integral ∫(2x² − 6x − 3)dx." → (2/3)x³ − 3x² − 3x + c.
- **Slide 15, TASK:** "Evaluate the integral ∫₋₁²(7x − 5)dx." → −9/2.

The deck sets both and answers neither.

## 4. Notation the extraction lost

- **Lowercase c** for the constant of integration everywhere (slides 4–8, 11, 16). Capital C appears only inside Example 4 on slide 9 — the deck is internally inconsistent about the case.
- **Bar notation F(x)|ₐᵇ**, with the limits stacked to the right of the bar — never square brackets [F(x)]ₐᵇ.
- **Coefficient factored outside the evaluation**: she writes 2x²|₀³ = 2(3² − 0²), substituting only into x² and multiplying afterwards. Same on slide 13: 6x|₋₁⁵ becomes 6(5 − (−1)).
- **Minus factored in front of the bracket**: (−1/x)|₂³ = −(1/3 − 1/2), keeping upper-minus-lower inside the bracket.
- **g/G as a second function pair** on slide 13, used to name the constant term −6 and its antiderivative −6x — a labelling habit unique to this lecturer and worth mirroring in answers.
- **Exponent arithmetic left unsimplified for one line**: x^(4+1)/(4+1), x^(−7+1)/(−7+1), x^(0+1)/(0+1) are all shown before being reduced. She is deliberately displaying the substitution into n.

## 5. Errors on the slides

1. **Slide 9 (Indefinite Example 4), typographic.** The split is printed as `∫11x¹⁰dx − ∫4x⁹dx ∫1dx` — the **plus sign before the third integral is missing**. Every subsequent line uses it correctly and the answer x¹¹ − (2/5)x¹⁰ + x + C is right.
2. **Slide 13 (Definite Example 2), substantive.** The second line reads `3∫₋₁⁵x²dx − 6∫₋₁⁵ x dx`. That last integral must be **∫₋₁⁵ dx** (equivalently ∫₋₁⁵1dx), since the term is the constant −6 and she has just declared G(x) = −6x. As printed, 6∫₋₁⁵x dx would evaluate to 3x²|₋₁⁵ = 72, not the 36 she uses. The **next** line reverts to the correct x³|₋₁⁵ − 6x|₋₁⁵, so the final answer 90 is correct; the defect is confined to that one line. **The corrected line is what has been taught in the new material**, with the misprint flagged so it is not copied into an exam script.
3. **Slide 4, minor imprecision.** "The indefinite integral of f is a function F such that F′(x) = f(x) added to the constant of integration c" reads as though the indefinite integral were the single function F. Her own Example 1 corrects this two slides later: the indefinite integral is the **family** F(x) + c. The new summary states the definition as she gives it and then lets Example 1 do the correcting, as she does.

## 6. Was the old summary wrong, incomplete, or basically fine?

**It was not wrong — every mathematical statement in it is true — but it was the wrong material for this week, and it is being replaced rather than patched.** Three problems:

**a) Massively out of scope.** The old summary taught, at length, substitution (with two worked examples and a limits-changing rule), ∫x⁻¹dx = ln|x| + C, a sixteen-row table of trigonometric and exponential standard forms, Riemann sums and the limit definition, FTC Part 1 (d/dx∫ₐˣf(t)dt = f(x)), a seven-row properties table, net signed area versus total area, average value, dummy variables, and initial-condition/kinematics problems. **None of this is in the deck.** The lecturer covers one rule for indefinite integrals and one theorem for definite integrals. A student who revised the old page spent most of their time on material the lecturer never taught and will very likely not set, while the deck's actual content — power-rule drill on negative exponents, and FTC evaluation with negative limits — occupied a small fraction of the page.

**b) It contained none of the lecturer's seven worked examples or either of her tasks.** The old summary's nine worked examples were all invented (∫(4x³ + 6/x² + 5/x)dx, ∫6x²√(x³+1)dx, and so on). Not one of the actual examples — ∫x⁴dx, ∫2x⁻⁷dx, ∫(11x¹⁰ − 4x⁹ + 1)dx, ∫₀³4x dx, ∫₋₁⁵(3x² − 6)dx, ∫₂³x⁻²dx — appeared anywhere on it, and neither did the two TASK questions, which are the most likely templates for assessment.

**c) Wrong notation throughout.** It used capital C for the constant and square brackets [F(x)]ₐᵇ for evaluation. The lecturer uses lowercase c and F(x)|ₐᵇ, and factors coefficients and signs outside the bar in a distinctive way. It also asserted ∫x⁻¹dx = ln|x| + C as "the excluded case" of the power rule; the deck states only n ≠ −1 and never supplies the logarithm, so a student answering with ln|x| is going beyond the taught syllabus — worth knowing, but it should be labelled as such, not presented as this week's content.

The old page also carried an honest footnote admitting it was written from the objectives and the week-summary sheet because the deck extracted as headings only. That footnote was accurate. The replacement removes the need for it.
