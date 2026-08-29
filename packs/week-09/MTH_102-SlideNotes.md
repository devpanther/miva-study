# MTH_102 Week 9 — what the slide images contained that the extracted text had lost

Deck: `Comparison-Test-for-Improper-Integrals-PDF`, **17 pages**, course branding "Elementary Math (calculus)". **No lecturer is named on the title slide this week** (the Week 7 deck names Danjuma Rose Uwanassara, MSc Mathematics; this deck carries no name at all).

**Pages that extracted as text: 1 (title), 2 (LEARNING OBJECTIVES), 3 (INTRODUCTION), 16 (FURTHER READING), 17 (THANK YOU).**
**Pages 4–15 are images.** `pdftotext` recovered only their headings, and nothing else:

> IMPROPER INTEGRALS · TYPE I IMPROPER INTEGRALS ×3 · TYPE II IMPROPER INTEGRALS ×2 · COMPARISON TEST FOR IMPROPER INTEGRALS ×4 · TASK · SUMMARY

That is **twelve image pages** containing every definition, the theorem, Note 1, all four worked examples and the TASK. Everything below is what was inside those twelve pictures.

## 0. What DID extract, for the record

**Slide 2 — Learning objectives.** "Upon completion of this unit, you should be able to: identify and determine the convergence or divergence of improper integral of type I; identify and determine the convergence or divergence of improper integral of type II; use comparison test to determine the convergence or divergence of improper integrals."

**Slide 3 — Introduction.** "Sometimes it is difficult to find the exact value of an improper integral by antidifferentiation. However, it is still possible to determine whether an improper integral converges or diverges. The idea is to compare the integral to one whose behavior we already know."

**Slide 16 — Further reading.** Stewart; Anton, Bivens and Davis; Gibilisco; Wrede and Spiegel; Dass; Stroud. No content.

## 1. Definitions, theorem and rules that were invisible

**Slide 4 — the definition of an improper integral, verbatim.**
> "The definite integral ∫ₐᵇ f(x)dx is called an improper integral if
> 1. At least one of the limits of integration is infinite, or
> 2. The integrand f(x) has one or more points of discontinuity on the interval [a, b]."

**Slide 5 — TYPE I IMPROPER INTEGRALS, verbatim.**
> "1. If ∫ₐᵗ f(x)dx exists for every number t ≥ a, then ∫ₐ^∞ f(x)dx = lim_{t→∞} ∫ₐᵗ f(x)dx, provided this limit exists.
> 2. If ∫ₜᵇ f(x)dx exists for every number t ≤ b, then ∫₋∞ᵇ f(x)dx = lim_{t→−∞} ∫ₜᵇ f(x)dx, provided this limit exists.
> The improper integrals ∫ₐ^∞ f(x)dx and ∫₋∞ᵇ f(x)dx are called convergent if the corresponding limit exists and divergent if the limit does not exist.
> 3. If ∫ₐ^∞ f(x)dx and ∫₋∞ᵇ f(x)dx are convergent, then ∫₋∞^∞ f(x)dx = ∫₋∞ᵃ f(x)dx + ∫ₐ^∞ f(x)dx."

**Slide 8 — TYPE II IMPROPER INTEGRALS, verbatim.**
> "1. If f is continuous on the interval [a, b) and has an infinite discontinuity at b, then ∫ₐᵇ f(x)dx = lim_{c→b⁻} ∫ₐᶜ f(x)dx.
> 2. If f is continuous on the interval (a, b] and has an infinite discontinuity at a, then ∫ₐᵇ f(x)dx = lim_{c→a⁺} ∫_c^b f(x)dx.
> 3. If f is continuous on the interval [a, b] except for some c in (a, b) at which f has an infinite discontinuity, then ∫ₐᵇ f(x)dx = ∫ₐᶜ f(x)dx + ∫_c^b f(x)dx."

**Slide 10 — the COMPARISON TEST, verbatim.**
> "**Theorem.** Let f(x) and g(x) be any two continuous functions such that 0 ≤ g(x) ≤ f(x) for all x ≥ a. Then
> 1. If ∫ₐ^∞ f(x)dx is convergent, then ∫ₐ^∞ g(x)dx is convergent,
> 2. If ∫ₐ^∞ g(x)dx is divergent, then ∫ₐ^∞ f(x)dx is divergent."

**Slide 11 — Note 1, verbatim (the deck's only p-test).**
> "**Note 1.** The integral ∫₁^∞ (1/xᵖ)dx converges if p > 1 and diverges if p ≤ 1."

**Slide 15 — the SUMMARY slide, verbatim.**
> "The definite integral is called an improper integral if at least one of its limits is infinite, or the integrand has one or more points of discontinuity on the interval of definition.
> If f(x) and g(x) are any two continuous functions such that 0 ≤ g(x) ≤ f(x) for all x ≥ a. Then if ∫ₐ^∞ f(x)dx is convergent, then so is ∫ₐ^∞ g(x)dx. If ∫ₐ^∞ g(x)dx is divergent, then so is ∫ₐ^∞ f(x)dx.
> The integral ∫₁^∞ (1/xᵖ)dx converges if p > 1 and diverges if p ≤ 1."

That is the **entire** rule inventory of the deck. There is no fourth definition, no second test, no other formula anywhere.

## 2. Worked examples that were invisible (four of them)

**TYPE I, Example 1 (slide 6).** "Determine whether ∫₀^∞ xe⁻ˣdx is convergent or divergent."
> ∫₀^∞ xe⁻ˣdx = lim_{t→∞} ∫₀ᵗ xe⁻ˣdx = lim_{t→∞} [−xe⁻ˣ − e⁻ˣ]|₀ᵗ
> = lim_{t→∞}[−te⁻ᵗ − e⁻ᵗ + 0 + e⁻⁰] = lim_{t→∞}[−te⁻ᵗ − e⁻ᵗ + 1].
> "Notice that lim_{t→∞}[−te⁻ᵗ] → −∞/∞. Therefore, applying L'Hopital Rule, we have
> lim_{t→∞}[−te⁻ᵗ] = lim_{t→∞}[−t/eᵗ] = lim_{t→∞}[−1/eᵗ] = 0, so that
> ∫₀^∞ xe⁻ˣdx = lim_{t→∞}[−te⁻ᵗ − e⁻ᵗ + 1] = (0 + 0 + 1) = **1**.
> Therefore, ∫₀^∞ xe⁻ˣdx converges to 1."

The by-parts working that produces −xe⁻ˣ − e⁻ˣ is **not shown** on the slide; the antiderivative simply appears. (u = x, dv = e⁻ˣdx, v = −e⁻ˣ, so ∫xe⁻ˣdx = −xe⁻ˣ + ∫e⁻ˣdx = −xe⁻ˣ − e⁻ˣ. Differentiating back: −e⁻ˣ + xe⁻ˣ + e⁻ˣ = xe⁻ˣ ✓.) This is the only place in the deck where L'Hôpital's Rule or integration by parts appears.

**TYPE I, Example 2 (slide 7).** "Determine whether ∫₋∞^∞(2x² − x + 3)dx is convergent or divergent."
> ∫₋∞^∞(2x² − x + 3)dx = ∫₋∞⁰(2x² − x + 3)dx + ∫₀^∞(2x² − x + 3)dx
> = lim_{a→−∞} ∫ₐ⁰ (2x² − x + 3)dx + lim_{b→∞} ∫₀ᵇ (2x² − x + 3)dx
> = lim_{a→−∞} [2x³/3 − x²/2 + 3x]|ₐ⁰ + lim_{b→∞} [2x³/3 − x²/2 + 3x]|₀ᵇ = **∞**
> "Therefore, ∫₋∞^∞(2x² − x + 3)dx diverges."

She splits at **0**, and uses **two different letters** for the two moving limits: a → −∞ on the left, b → ∞ on the right. She does not evaluate the brackets further; the line ends "= ∞".

**TYPE II, Example 1 (slide 9).** "Determine whether ∫₋₁²(1/x⁴)dx is convergent or divergent."
> "The function is undefined at x = 0. Therefore, we could define this integral as
> ∫₋₁²(1/x⁴)dx = ∫₋₁⁰(1/x⁴)dx + ∫₀²(1/x⁴)dx
> ∫₋₁²(1/x⁴)dx = lim_{c→0⁻} ∫₋₁ᶜ (1/x⁴)dx + lim_{b→0⁺} ∫_b² (1/x⁴)dx
> = lim_{c→0⁻} [−1/(3x³)]|₋₁ᶜ + lim_{b→0⁺} [−1/(3x³)]|_b²
> Notice that [−1/(3x³)] → −∞ as c → 0⁻ and [−1/(3x³)] → −∞ as b → 0⁺. Therefore, ∫₋₁²(1/x⁴)dx is **divergent**."

Correct working of the two pieces (see the errors section — the slide's first sign is wrong):
Left: lim_{c→0⁻}(−1/(3c³) − 1/3) = **+∞**. Right: lim_{b→0⁺}(−1/24 + 1/(3b³)) = **+∞**.

**COMPARISON, Example 1 (slide 11).** "Determine whether ∫₂^∞ cos²(x)/x² dx converges or diverges."
> "For all x ≥ 2, it can be seen that since 0 ≤ cos²(x) ≤ 1, then cos²(x)/x² ≤ 1/x². Let f(x) = 1/x² and g(x) = cos²(x)/x². Then 0 ≤ g(x) ≤ f(x). Now,
> ∫₂^∞ f(x)dx = ∫₂^∞ (1/x²)dx = lim_{x→∞} ∫₂^∞ (1/x²)dx = (−1/∞ − (−1)/2) = **1/2**
> Since ∫₂^∞ (1/x²)dx is convergent, then by the comparison test, ∫₂^∞ cos²(x)/x² dx is also convergent."

(The limit line as printed is defective — see errors 2 below. The corrected line is lim_{t→∞} ∫₂ᵗ (1/x²)dx.)

**COMPARISON, Example 2 (slide 12).** "Determine whether ∫₃^∞ 1/√(x² − 1) dx converges or diverges."
> "For all x ≥ 3, it can be seen that 1/√(x² − 1) ≥ 1/x. By the p-integral test, ∫₃^∞ (1/x)dx diverges by the above Note 1, since p = 1. Therefore, by the comparison test, ∫₃^∞ 1/√(x² − 1) dx is **divergent**."

No f/g labels are given on this slide; the roles are g(x) = 1/x (smaller, divergent) and f(x) = 1/√(x² − 1) (larger), so it is clause 2. She does not show the reciprocal step that produces the inequality (x² − 1 < x² ⟹ √(x² − 1) < x ⟹ 1/√(x² − 1) > 1/x).

**COMPARISON, Example 3 (slide 13).** "Determine whether ∫₁^∞ 1/√(x³ + 7) dx converges or diverges."
> "For all x ≥ 1, it can be seen that x³ + 7 ≥ x³, and √(x³ + 7) ≥ √(x³), implying that 1/√(x³ + 7) ≤ 1/√(x³). Let f(x) = 1/√(x³) and g(x) = 1/√(x³ + 7). Then 0 ≤ g(x) ≤ f(x). Now,
> ∫₁^∞ f(x)dx = ∫₁^∞ (1/√(x³))dx = ∫₁^∞ (1/x^(3/2))dx. By the above Note 1, p = 3/2 > 1. Therefore, ∫₁^∞ (1/x^(3/2))dx is convergent. By the comparison test, ∫₁^∞ 1/√(x³ + 7) dx is **convergent**."

This is the fullest of the three and is the template all comparison questions should be answered in.

## 3. The TASK that was invisible (slide 14, no answer given)

> **TASK.** "Determine whether ∫₁^∞ 1/√(x⁶ + 1) dx converges or diverges."

The deck sets it and never answers it. Worked solution in her template:
for x ≥ 1, x⁶ + 1 ≥ x⁶ ⟹ √(x⁶ + 1) ≥ √(x⁶) = x³ ⟹ 1/√(x⁶ + 1) ≤ 1/x³.
f(x) = 1/x³, g(x) = 1/√(x⁶ + 1), so 0 ≤ g ≤ f. p = 3 > 1, so ∫₁^∞ dx/x³ converges by Note 1.
By clause 1, **∫₁^∞ dx/√(x⁶ + 1) converges.**

## 4. Notation and habits the extraction lost

- **Her comparison lettering is reversed from most textbooks: 0 ≤ g(x) ≤ f(x)** — g is the SMALL function, f is the BIG one. Every one of the three examples labels them this way. Answers written with the textbook convention 0 ≤ f ≤ g will read as stating the theorem backwards.
- **f is the comparison function, g is the question** — except in Example 2, where the messy integrand is the larger and so plays the role of f. The letters follow the inequality, not the origin of the function.
- **Two different letters for two moving limits** (a and b in Type I Example 2; c and b in Type II Example 1). She never uses a single symmetric limit.
- **She writes the limit line before doing anything else**, every single time.
- **Note 1 is quoted by name** in all three comparison examples ("by the above Note 1"), including for p = 1 in Example 2 — she never evaluates ∫dx/x, because **ln x appears nowhere in this deck**.
- **Bar notation F(x)|ₐᵇ** for evaluation, as in Week 7.
- **"−1/∞" written literally** (slide 11), rather than as a limit of −1/t.
- **The indeterminate form is labelled −∞/∞** on slide 6 before L'Hôpital is applied.
- **Roots are converted to fractional powers only at the last step**: √(x³) is kept as a root through the inequality chain and becomes x^(3/2) only when Note 1 is invoked.

## 5. Errors and misprints on the slides

1. **Slide 9 (Type II Example 1) — a genuine sign error, substantive.** The slide asserts "[−1/(3x³)] → −∞ as c → 0⁻". It tends to **+∞**: as c → 0⁻, c is negative, so c³ is negative, 3c³ → 0 from below, and −1/(3c³) → +∞. Worked properly, the **left piece** is −1/(3c³) − 1/3 → +∞ and the **right piece** is −1/24 + 1/(3b³) → +∞ (the value at the lower limit b is subtracted, which flips the −∞ she quotes into +∞). Both pieces run to **+∞**. Her verdict, divergent, is correct — divergence needs only the failure of a finite limit — but the stated reason has the sign wrong in one place and is misleading in the other. **The corrected working is what has been taught in the new material**, with the misprint flagged so it is not copied into an exam script.
2. **Slide 11 (Comparison Example 1) — a notation misprint.** The line is printed "lim_{x→∞} ∫₂^∞ (1/x²)dx". Two defects at once: the limit variable is **x**, colliding with the variable of integration, and the integral's upper limit is still **∞** rather than the new variable, so there is nothing for the limit to act on. The line should read **lim_{t→∞} ∫₂ᵗ (1/x²)dx**. The arithmetic that follows, (−1/∞ − (−1)/2) = 1/2, is correct and is [−1/x] evaluated from 2 upward.
3. **Slide 5 clause 3 — a letter collision, cosmetic.** The hypothesis is stated about ∫ₐ^∞ f(x)dx and ∫₋∞ᵇ f(x)dx, but the conclusion splits at **a**: ∫₋∞^∞ f = ∫₋∞ᵃ f + ∫ₐ^∞ f. The b of the hypothesis and the a of the conclusion are meant to be the same split point. Nothing mathematical is wrong.
4. **Slide 8 — c does two jobs.** In clauses 1 and 2 it is the moving limit; in clause 3 it is the fixed interior bad point. In Example 1 (slide 9) she then uses c for the moving limit on the left of the bad point and b on the right. Read what each letter approaches, not the letter.
5. **Slide 12 — Note 1 applied at a lower limit of 3** although Note 1 is stated for ∫₁^∞. This is legitimate (the finite piece ∫₁³ dx/x is an ordinary number and cannot change the tail's fate) but the deck does not say so.

## 6. Was the old summary wrong, incomplete, or basically fine?

**Nearly everything in the old summary is mathematically true, and it is being replaced rather than patched, because it is not this lecturer's week.** It carried an honest footnote admitting it was written from the objectives and week-summary sheet because the deck extracted as headings only. That footnote was accurate; the replacement removes the need for it. Four problems:

**a) Substantially out of scope.** The old summary taught, at length: the **Limit Comparison Test** (statement, the 0 < L < ∞ condition, the degenerate L = 0 and L = ∞ cases, and a full worked example), the **p-test near zero** (∫₀¹ dx/xᵖ converges ⟺ p < 1, with values), **ln|x| and logarithm antiderivatives** throughout (∫dx/x = ln x, ∫dx/(x ln x) = ln ln x, ∫dx/(x(ln x)²) = −1/ln x, ∫₀¹ ln x dx = −1), **arctan** (∫₋∞^∞ dx/(1 + x²) = π), **absolute convergence** for sign-changing integrands, the **principal value**, **substitution** (u = √x, u = ln x), **divergence by oscillation** (∫₀^∞ cos x dx), a "deciding what to do" decision table, and the counterexample pair 1/(x ln x) versus 1/(x(ln x)²). **None of this is in the deck.** The lecturer states one definition of improper, two sets of definitional clauses, one theorem, and one p-test — at infinity only. A student who revised the old page spent most of their time on material she never taught, while the deck's actual content — four worked examples and one TASK, all turning on the same four-step comparison template — occupied a small fraction of the page.

**b) It contained none of the lecturer's four worked examples or her TASK.** The old summary had thirteen "worked examples", every one invented: ∫₁^∞ dx/x², ∫₀^∞ e^(−3x)dx, ∫₁^∞ (ln x)/x² dx, ∫₋∞^∞ dx/(1 + x²), ∫₀¹ dx/√x, ∫₋₁¹ dx/x², ∫₀¹ ln x dx, ∫₁^∞ e^(−x²)dx, ∫₁^∞ (2 + sin x)/x dx, ∫₁^∞ dx/√(x⁴ + 1), ∫₂^∞ (x + 1)/(x³ − 3)dx, ∫₀¹ dx/(∛x(1 + x)), ∫₂^∞ dx/ln x. Not one of the actual examples — **∫₀^∞ xe⁻ˣdx, ∫₋∞^∞(2x² − x + 3)dx, ∫₋₁² dx/x⁴, ∫₂^∞ cos²(x)/x² dx, ∫₃^∞ dx/√(x² − 1), ∫₁^∞ dx/√(x³ + 7)** — appeared anywhere on it, and neither did **the TASK, ∫₁^∞ dx/√(x⁶ + 1)**, which is the single most likely template for assessment.

**c) It stated the Comparison Test with the letters the wrong way round for this deck.** The old summary wrote "0 ≤ f(x) ≤ g(x)", the textbook convention. **The lecturer writes 0 ≤ g(x) ≤ f(x)** on slide 10, repeats it on the summary slide 15, and labels f and g that way in all three examples. A student who has memorised the old page will read her theorem as saying the opposite of what it says. The old question set made the same swap (its question 4 stem was "Given 0 ≤ f(x) ≤ g(x)").

**d) It never mentioned L'Hôpital's Rule or integration by parts**, both of which appear in Type I Example 1 and are the entire technical content of that slide, and it never mentioned that the deck's Comparison Test is stated **for Type I only** — the old page applied comparison to Type II integrals in two of its examples, which is standard mathematics but is not licensed by anything on her slides.

The one substantive thing the old page got right that the deck does not state outright is that comparison decides convergence and never produces a value; that point has been carried over, anchored to her Example 1 and its 1/2.
