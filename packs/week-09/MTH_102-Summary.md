# MTH_102 — Week 9 Summary

*Elementary Mathematics II (Calculus) · Topic: Convergence and Divergence of Improper Integrals · Deck: "Comparison Test for Improper Integrals", 17 pages. The title slide carries no lecturer name this week.*

**Scope note:** this rewrite follows the deck slide-for-slide. The lecturer covers exactly six things: what makes a definite integral **improper** (slide 4); the **Type I** definitions with the limit written out (slide 5); the **Type II** definitions, including the interior-discontinuity split (slide 8); the **Comparison Test**, stated in her own lettering **0 ≤ g(x) ≤ f(x)** (slide 10); **Note 1**, the p-test **∫₁^∞ (1/xᵖ)dx converges if p > 1 and diverges if p ≤ 1** (slide 11); and four worked examples plus one TASK. She does **NOT** cover: the **Limit Comparison Test** (never mentioned); the **p-test near zero** (∫₀¹ dx/xᵖ, p < 1 — she states the p-test only at infinity); the **logarithm** — ln x appears nowhere in the deck, so ∫dx/x is never evaluated, only quoted as the p = 1 case of Note 1; **absolute convergence** or sign-changing integrands; the **principal value**; **substitution** inside an improper integral; **divergence by oscillation** (she defines it — "divergent if the limit does not exist" — but gives no example); and **any convergent Type II example at all** — her one Type II example diverges. Her Comparison Test is stated only for ∫ₐ^∞, i.e. Type I. Learn her four examples and the TASK cold; they are the shape of the exam questions.

## The 8 most examinable things this week

1. **Two triggers, and only two (slide 4).** "The definite integral ∫ₐᵇ f(x)dx is called an improper integral if **1. At least one of the limits of integration is infinite, or 2. The integrand f(x) has one or more points of discontinuity on the interval [a, b]**." Trigger 1 is Type I, trigger 2 is Type II. Before anything else, say which one you have — and check for both.
2. **The symbol has no meaning until you write the limit (slide 5).** ∫ₐ^∞ f(x)dx = **lim(t→∞) ∫ₐᵗ f(x)dx**, "provided this limit exists", and ∫₋∞ᵇ f(x)dx = **lim(t→−∞) ∫ₜᵇ f(x)dx**. You replace the infinite limit by a letter, do an ordinary definite integral, then take the limit. Marks are given for that first line.
3. **Convergent / divergent, defined by the limit (slide 5).** "The improper integrals ∫ₐ^∞ f(x)dx and ∫₋∞ᵇ f(x)dx are called **convergent if the corresponding limit exists** and **divergent if the limit does not exist**." Note what she is *not* saying: convergence is about the limit, not about whether the region is bounded.
4. **Both ends infinite means split, and both halves must already converge (slide 5, item 3).** "If ∫ₐ^∞ f(x)dx and ∫₋∞ᵇ f(x)dx **are convergent**, then ∫₋∞^∞ f(x)dx = ∫₋∞ᵃ f(x)dx + ∫ₐ^∞ f(x)dx." The convergence of the two halves is a **hypothesis**, not a conclusion — that is why Example 2 is allowed to stop as soon as one half runs to ∞.
5. **Type II takes a one-sided limit into the bad endpoint (slide 8).** Discontinuity at b: ∫ₐᵇ f = **lim(c→b⁻) ∫ₐᶜ f**. Discontinuity at a: ∫ₐᵇ f = **lim(c→a⁺) ∫_c^b f**. The arrow direction always points *into* the interval.
6. **A discontinuity strictly inside forces a split (slide 8, item 3).** "If f is continuous on [a, b] except for some c in (a, b) at which f has an infinite discontinuity, then **∫ₐᵇ f(x)dx = ∫ₐᶜ f(x)dx + ∫_c^b f(x)dx**." Type II Example 1 is built entirely on spotting that x = 0 lies inside [−1, 2].
7. **The Comparison Test, in her lettering (slide 10).** "Let f(x) and g(x) be any two continuous functions such that **0 ≤ g(x) ≤ f(x) for all x ≥ a**. Then **1. If ∫ₐ^∞ f(x)dx is convergent, then ∫ₐ^∞ g(x)dx is convergent. 2. If ∫ₐ^∞ g(x)dx is divergent, then ∫ₐ^∞ f(x)dx is divergent**." In this deck **g is the small one and f is the big one** — the opposite of most textbooks. Learn it her way: *the big one convergent drags the small one down with it; the small one divergent drags the big one up with it.*
8. **Note 1, the p-test (slide 11).** "The integral **∫₁^∞ (1/xᵖ)dx converges if p > 1 and diverges if p ≤ 1**." This is the only convergence fact in the deck that you are allowed to quote without working, and every one of her three comparison examples ends by quoting it. **p = 1 is on the divergent side.**

## What makes an integral improper — slide 4

> "The definite integral ∫ₐᵇ f(x)dx is called an improper integral if
> 1. At least one of the limits of integration is infinite, or
> 2. The integrand f(x) has one or more points of discontinuity on the interval [a, b]."

Her introduction (slide 3) states the motive for the whole week: *"Sometimes it is difficult to find the exact value of an improper integral by antidifferentiation. However, it is still possible to determine whether an improper integral converges or diverges. The idea is to compare the integral to one whose behaviour we already know."* That sentence is the licence for everything from slide 10 onwards: comparison answers **converges or diverges**, and nothing else. It never produces a value.

## Type I improper integrals — slide 5

> 1. If ∫ₐᵗ f(x)dx exists for every number **t ≥ a**, then **∫ₐ^∞ f(x)dx = lim(t→∞) ∫ₐᵗ f(x)dx**, provided this limit exists.
> 2. If ∫ₜᵇ f(x)dx exists for every number **t ≤ b**, then **∫₋∞ᵇ f(x)dx = lim(t→−∞) ∫ₜᵇ f(x)dx**, provided this limit exists.
> The improper integrals ∫ₐ^∞ f(x)dx and ∫₋∞ᵇ f(x)dx are called **convergent** if the corresponding limit exists and **divergent** if the limit does not exist.
> 3. If ∫ₐ^∞ f(x)dx and ∫₋∞ᵇ f(x)dx are convergent, then **∫₋∞^∞ f(x)dx = ∫₋∞ᵃ f(x)dx + ∫ₐ^∞ f(x)dx**.

*(Aside on her notation: in clause 3 the hypothesis is written with **b** and the conclusion splits at **a**. Read the split point as one single number — she splits at 0 in Example 2 — and read the hypothesis as "both halves converge". Nothing mathematical hangs on the letter.)*

### Type I, Example 1 (slide 6) — an exponential, integration by parts, and L'Hôpital

**Determine whether ∫₀^∞ xe⁻ˣ dx is convergent or divergent.**

Solution, exactly as she writes it:

∫₀^∞ xe⁻ˣdx = lim(t→∞) ∫₀ᵗ xe⁻ˣdx = lim(t→∞) [−xe⁻ˣ − e⁻ˣ]|₀ᵗ
= lim(t→∞)[−te⁻ᵗ − e⁻ᵗ + 0 + e⁻⁰] = lim(t→∞)[−te⁻ᵗ − e⁻ᵗ + 1]

"Notice that lim(t→∞)[−te⁻ᵗ] → −∞/∞. Therefore, applying **L'Hôpital's Rule**, we have"

lim(t→∞)[−te⁻ᵗ] = lim(t→∞)[−t/eᵗ] = lim(t→∞)[−1/eᵗ] = 0, so that

∫₀^∞ xe⁻ˣdx = lim(t→∞)[−te⁻ᵗ − e⁻ᵗ + 1] = (0 + 0 + 1) = **1**.

"Therefore, ∫₀^∞ xe⁻ˣdx **converges to 1**."

Four moves worth naming, because each is a separate mark:
- **Replace ∞ by t first.** Everything after that is an ordinary definite integral.
- **The antiderivative is −xe⁻ˣ − e⁻ˣ.** The deck does not show the by-parts working; it is u = x, dv = e⁻ˣdx, so v = −e⁻ˣ and ∫xe⁻ˣdx = −xe⁻ˣ + ∫e⁻ˣdx = −xe⁻ˣ − e⁻ˣ. Check it by differentiating: (−xe⁻ˣ − e⁻ˣ)′ = −e⁻ˣ + xe⁻ˣ + e⁻ˣ = xe⁻ˣ. ✓
- **The lower limit contributes +1**, because subtracting the value at 0, which is −0·e⁰ − e⁰ = −1, adds 1. Her "+ 0 + e⁻⁰" is that subtraction written out.
- **−te⁻ᵗ is an indeterminate form.** Rewriting e⁻ᵗ as 1/eᵗ turns −te⁻ᵗ into −t/eᵗ, which is −∞/∞, and L'Hôpital differentiates top and bottom to −1/eᵗ → 0. Writing "−te⁻ᵗ → −∞ because t → ∞" is the standard wrong answer: **the exponential wins**.

### Type I, Example 2 (slide 7) — both limits infinite, and a fast exit

**Determine whether ∫₋∞^∞ (2x² − x + 3)dx is convergent or divergent.**

∫₋∞^∞(2x² − x + 3)dx = ∫₋∞⁰(2x² − x + 3)dx + ∫₀^∞(2x² − x + 3)dx
= lim(a→−∞) ∫ₐ⁰ (2x² − x + 3)dx + lim(b→∞) ∫₀ᵇ (2x² − x + 3)dx
= lim(a→−∞) [2x³/3 − x²/2 + 3x]|ₐ⁰ + lim(b→∞) [2x³/3 − x²/2 + 3x]|₀ᵇ = **∞**

"Therefore, ∫₋∞^∞(2x² − x + 3)dx **diverges**."

What to copy from this example:
- **She splits at 0** and gives the two moving limits **two different letters**, a → −∞ and b → ∞. They are independent; you may not tie them together as a single t.
- The antiderivative is the ordinary power rule term by term: 2x³/3 − x²/2 + 3x.
- On the right-hand piece, 2b³/3 dominates and drives the value to +∞. That alone settles it. Under her clause 3 the two-piece formula only applies **if both halves converge**, so once one half fails the whole integral is divergent and there is nothing left to compute.
- **Do not try to cancel the two infinities.** The left piece is 0 − (2a³/3 − a²/2 + 3a); as a → −∞ the bracket → −∞, so subtracting it gives +∞ too. But even had they been +∞ and −∞, cancelling them is not permitted — the definition requires each half to converge on its own.

## Type II improper integrals — slide 8

> 1. If f is continuous on the interval **[a, b)** and has an infinite discontinuity at **b**, then **∫ₐᵇ f(x)dx = lim(c→b⁻) ∫ₐᶜ f(x)dx**.
> 2. If f is continuous on the interval **(a, b]** and has an infinite discontinuity at **a**, then **∫ₐᵇ f(x)dx = lim(c→a⁺) ∫_c^b f(x)dx**.
> 3. If f is continuous on **[a, b]** except for some **c in (a, b)** at which f has an infinite discontinuity, then **∫ₐᵇ f(x)dx = ∫ₐᶜ f(x)dx + ∫_c^b f(x)dx**.

Read the bracket shapes: **the square bracket is the good end, the round bracket is the bad end**. In clause 1 the interval is [a, b) — b is excluded because that is where f blows up — and the moving limit creeps up to it from the left, c → b⁻. In clause 2 it is (a, b] and the limit creeps down to a from the right, c → a⁺. The one-sided arrow always points *into* the interval you are integrating over.

*(Aside on her notation: **c** does two different jobs on this slide — it is the moving limit in clauses 1 and 2, and the fixed bad point in clause 3. In Example 1 she uses c for the moving limit on the left of the bad point and b for the moving limit on the right. Do not read her c as always meaning the same thing; read what it is approaching.)*

### Type II, Example 1 (slide 9) — the discontinuity is inside the interval

**Determine whether ∫₋₁² (1/x⁴) dx is convergent or divergent.**

"The function is undefined at **x = 0**. Therefore, we could define this integral as"

∫₋₁²(1/x⁴)dx = ∫₋₁⁰(1/x⁴)dx + ∫₀²(1/x⁴)dx

∫₋₁²(1/x⁴)dx = lim(c→0⁻) ∫₋₁ᶜ (1/x⁴)dx + lim(b→0⁺) ∫_b² (1/x⁴)dx
= lim(c→0⁻) [−1/(3x³)]|₋₁ᶜ + lim(b→0⁺) [−1/(3x³)]|_b²

"Notice that [−1/(3x³)] → −∞ as c → 0⁻ and [−1/(3x³)] → −∞ as b → 0⁺. Therefore, ∫₋₁²(1/x⁴)dx is **divergent**."

The verdict is right, the split is right, the antiderivative is right — **but the slide's sign on the first limit is wrong, and the second line is easy to misread.** Do the substitutions out in full:

- Antiderivative: ∫x⁻⁴dx = x⁻³/(−3) = **−1/(3x³)**.
- **Left piece.** [−1/(3x³)]|₋₁ᶜ = −1/(3c³) − (−1/(3(−1)³)) = −1/(3c³) − 1/3. As c → 0⁻, c is a small **negative** number, so c³ is a small negative number and −1/(3c³) → **+∞**, not −∞. The left piece → **+∞**.
- **Right piece.** [−1/(3x³)]|_b² = −1/24 − (−1/(3b³)) = −1/24 + 1/(3b³). As b → 0⁺, 1/(3b³) → +∞, so the right piece → **+∞**.

Both pieces run to **+∞**, so the integral is divergent — which is what she concludes. See the errors section below; do not reproduce her "−∞" in a script.

**The point of this example, and it is the examinable one:** 1/x⁴ is undefined at x = 0, and 0 lies **strictly between** −1 and 2. If you fail to notice and just apply the Fundamental Theorem across the whole interval, you get [−1/(3x³)]|₋₁² = −1/24 − 1/3 = −3/8: a **negative** answer for a strictly **positive** integrand, which is impossible. Scan the interval for zeros of the denominator before you integrate anything.

## The Comparison Test — slide 10

> **Theorem.** Let f(x) and g(x) be any two continuous functions such that **0 ≤ g(x) ≤ f(x) for all x ≥ a**. Then
> 1. If ∫ₐ^∞ f(x)dx is **convergent**, then ∫ₐ^∞ g(x)dx is **convergent**,
> 2. If ∫ₐ^∞ g(x)dx is **divergent**, then ∫ₐ^∞ f(x)dx is **divergent**.

**Get her letters the right way round.** In this deck **g is underneath and f is on top**: 0 ≤ g ≤ f. So clause 1 says *the small one inherits convergence from the big one*, and clause 2 says *the big one inherits divergence from the small one*. In every one of her three examples, **f is the simple comparison function she already knows** and **g is the messy integrand she was asked about** — except Example 2, where the messy one is the bigger one and so plays the role of f. Read which is which from the inequality, never from the name.

**The two combinations she does not state give you nothing.** "∫f divergent" says nothing about the smaller g, and "∫g convergent" says nothing about the bigger f. If your comparison lands in one of those two boxes, the comparison is useless and you must find a different comparison function — the deck offers no other tool, since it never introduces the Limit Comparison Test.

### Comparison, Example 1 (slide 11) — bounding an oscillation, and Note 1

**Determine whether ∫₂^∞ cos²(x)/x² dx converges or diverges.**

"For all x ≥ 2, it can be seen that since **0 ≤ cos²(x) ≤ 1**, then **cos²(x)/x² ≤ 1/x²**. Let **f(x) = 1/x²** and **g(x) = cos²(x)/x²**. Then **0 ≤ g(x) ≤ f(x)**. Now,"

∫₂^∞ f(x)dx = ∫₂^∞ (1/x²)dx = lim(t→∞) ∫₂ᵗ (1/x²)dx = (−1/∞ − (−1)/2) = **1/2**

"Since ∫₂^∞ (1/x²)dx is convergent, then by the comparison test, ∫₂^∞ cos²(x)/x² dx is also **convergent**."

> **Note 1.** The integral **∫₁^∞ (1/xᵖ)dx converges if p > 1 and diverges if p ≤ 1**.

Three things to take:
- **cos²x is squared, so it never goes negative.** 0 ≤ cos²x ≤ 1 is what makes the non-negativity hypothesis 0 ≤ g hold. Had the integrand been cos x / x², her theorem would not apply at all.
- **Dividing a bounded numerator by x² gives you the bound for free.** 0 ≤ cos²x ≤ 1 ⟹ 0 ≤ cos²x/x² ≤ 1/x², because x² > 0 on [2, ∞) and dividing an inequality by a positive quantity preserves it.
- **She only gets convergence, never a value.** The number 1/2 is the value of ∫₂^∞ dx/x², the *comparison* integral. All that follows about the original is ∫₂^∞ cos²(x)/x² dx ≤ 1/2. Writing "= 1/2" is a real error and a common one.

*(Aside on the slide's second line: it is printed as "lim(x→∞) ∫₂^∞ (1/x²)dx" — the limit variable is written as x, colliding with the variable of integration, and the upper limit still reads ∞ rather than the new letter. The corrected line, which is what is written above, is lim(t→∞) ∫₂ᵗ (1/x²)dx. Her arithmetic, (−1/∞ − (−1)/2) = 1/2, is just [−1/x] evaluated from 2 upward and is correct.)*

### Comparison, Example 2 (slide 12) — the divergent direction

**Determine whether ∫₃^∞ 1/√(x² − 1) dx converges or diverges.**

"For all x ≥ 3, it can be seen that **1/√(x² − 1) ≥ 1/x**. By the p-integral test, **∫₃^∞ (1/x)dx diverges** by the above Note 1, since **p = 1**. Therefore, by the comparison test, ∫₃^∞ 1/√(x² − 1) dx is **divergent**."

Where the inequality comes from, spelled out: x² − 1 < x², so √(x² − 1) < x for x ≥ 3, and taking reciprocals of two positive numbers **reverses** the inequality: 1/√(x² − 1) > 1/x. In her lettering, **g(x) = 1/x** (the small one, whose integral she knows diverges) and **f(x) = 1/√(x² − 1)** (the big one). That is clause 2: ∫g divergent ⟹ ∫f divergent.

Notice the deliberate design: this is the one example where the messy integrand is the **larger** function, and it is the only one that can produce a divergence verdict. The direction of the inequality decides which verdict is even available to you.

*(Aside: Note 1 is stated for ∫₁^∞ and she applies it here to ∫₃^∞. That is legitimate — the finite piece ∫₁³ dx/x is an ordinary number and cannot change whether the tail converges. Any positive lower limit gives the same verdict.)*

### Comparison, Example 3 (slide 13) — the pattern to copy

**Determine whether ∫₁^∞ 1/√(x³ + 7) dx converges or diverges.**

"For all x ≥ 1, it can be seen that **x³ + 7 ≥ x³**, and **√(x³ + 7) ≥ √(x³)**, implying that **1/√(x³ + 7) ≤ 1/√(x³)**. Let **f(x) = 1/√(x³)** and **g(x) = 1/√(x³ + 7)**. Then **0 ≤ g(x) ≤ f(x)**. Now,"

∫₁^∞ f(x)dx = ∫₁^∞ (1/√(x³))dx = ∫₁^∞ (1/x^(3/2))dx. "By the above Note 1, **p = 3/2 > 1**. Therefore, ∫₁^∞ (1/x^(3/2))dx is **convergent**. By the comparison test, ∫₁^∞ 1/√(x³ + 7) dx is **convergent**."

This is the template. Four steps, in this order, every time:
1. **Throw away the additive junk in the denominator to make it smaller**: x³ + 7 ≥ x³.
2. **Take the square root, which preserves the inequality** for non-negative quantities: √(x³ + 7) ≥ √(x³).
3. **Take reciprocals, which reverses it**: 1/√(x³ + 7) ≤ 1/√(x³). This is the step students drop.
4. **Rewrite the root as a power and read off p**: √(x³) = x^(3/2), so p = 3/2 > 1, convergent by Note 1, and the comparison carries the verdict back to the original.

### TASK (slide 14) — set by the lecturer, not answered

**Determine whether ∫₁^∞ 1/√(x⁶ + 1) dx converges or diverges.**

It is Example 3 with the numbers changed; run the same four steps.

For all x ≥ 1, **x⁶ + 1 ≥ x⁶**, so **√(x⁶ + 1) ≥ √(x⁶) = x³** (valid because x ≥ 1 > 0), implying **1/√(x⁶ + 1) ≤ 1/x³**.
Let **f(x) = 1/x³** and **g(x) = 1/√(x⁶ + 1)**. Then **0 ≤ g(x) ≤ f(x)** on [1, ∞).
∫₁^∞ (1/x³)dx has **p = 3 > 1**, so it is convergent by Note 1.
By clause 1 of the Comparison Test, **∫₁^∞ 1/√(x⁶ + 1) dx converges.**

The one place to be careful: √(x⁶) = x³ only because x is positive on [1, ∞). In general √(x⁶) = |x³|.

### Her closing SUMMARY slide (15)

> - "The definite integral is called an improper integral if at least one of its limits is infinite, or the integrand has one or more points of discontinuity on the interval of definition."
> - "If f(x) and g(x) are any two continuous functions such that 0 ≤ g(x) ≤ f(x) for all x ≥ a. Then if ∫ₐ^∞ f(x)dx is convergent, then so is ∫ₐ^∞ g(x)dx. If ∫ₐ^∞ g(x)dx is divergent, then so is ∫ₐ^∞ f(x)dx."
> - "The integral ∫₁^∞ (1/xᵖ)dx converges if p > 1 and diverges if p ≤ 1."

Three statements. That is the whole examinable inventory of the week.

## Errors and misprints on the slides — name them, do not copy them

1. **Slide 9, Type II Example 1 — a genuine sign error.** The slide says "[−1/(3x³)] → −∞ as c → 0⁻". It does not: as c → 0⁻, c³ → 0 from **below**, so −1/(3c³) → **+∞**. The correct statement is that the **left piece** tends to +∞ (because −1/(3c³) − 1/3 → +∞) and the **right piece** also tends to +∞ (because the value at the lower limit b is subtracted: −1/24 − (−1/(3b³)) = −1/24 + 1/(3b³) → +∞). Her conclusion, divergent, is correct. If this appears in an exam, write **+∞ for both pieces** and say the integral diverges.
2. **Slide 11, Comparison Example 1 — a notation misprint.** The line reads "lim(x→∞) ∫₂^∞ (1/x²)dx". The limit variable must be a new letter and it must be the integral's upper limit: **lim(t→∞) ∫₂ᵗ (1/x²)dx**. As printed, x is simultaneously the variable of integration and the variable going to ∞, and the upper limit is already ∞ so there is nothing left to take a limit of. The value 1/2 is correct.
3. **Slide 5, clause 3 — a letter collision.** The hypothesis names ∫₋∞ᵇ but the conclusion splits at a: ∫₋∞^∞ f = ∫₋∞ᵃ f + ∫ₐ^∞ f. Read both as the same split point. Nothing mathematical is wrong; the letters just do not line up.
4. **Slide 8 — c used for two different things**, the moving limit in clauses 1 and 2 and the fixed interior bad point in clause 3. Read what the letter is approaching rather than the letter itself.

## Commonly confused

- **Not writing the limit.** ∫ₐ^∞ f dx = lim(t→∞) ∫ₐᵗ f dx is the first line of every Type I answer. An answer that jumps straight to a number is unsupported even when the number is right.
- **Her g is the small one.** 0 ≤ g ≤ f. Most textbooks write 0 ≤ f ≤ g. Quoting the theorem with the letters swapped reverses both conclusions.
- **The two useless directions.** *Big one convergent ⟹ small one convergent* and *small one divergent ⟹ big one divergent* are the only two. "The small one converges, so the big one does" and "the big one diverges, so the small one does" are both false, and both are the natural thing to write when you have not checked which side of the inequality your integrand is on.
- **p = 1 diverges.** Note 1 says converges if p > 1, diverges if **p ≤ 1**. The boundary belongs to the divergent side. Example 2 turns on exactly this.
- **Taking reciprocals reverses the inequality.** x³ + 7 ≥ x³ becomes 1/√(x³ + 7) ≤ 1/√(x³). Carrying the ≥ through unchanged flips the verdict and turns a correct proof into a false one.
- **Comparison gives a verdict, not a value.** ∫₂^∞ cos²(x)/x² dx is **not** 1/2. 1/2 is the value of the comparison integral, and all you may claim is that the original is at most 1/2 and converges.
- **Missing a discontinuity inside the interval.** ∫₋₁²(1/x⁴)dx looks like an ordinary definite integral. It is not — x = 0 is inside. Check the denominator's zeros against the interval before writing anything.
- **−te⁻ᵗ does not tend to −∞.** It is −∞/∞ and L'Hôpital gives 0. The exponential beats the polynomial. This is the whole second half of Type I Example 1.
- **Two infinite limits need two independent letters.** a → −∞ and b → ∞, as in Example 2. Tying them into one symmetric limit is a different (and, for this deck, wrong) object.
- **One divergent half is enough.** Clause 3 requires both halves to converge before the sum formula even applies, so as soon as one half runs to ∞, stop and write "divergent".
- **√(x⁶) = x³ needs x > 0.** True on [1, ∞), which is why the TASK's interval matters.
- **Applying the p-test to something that is not 1/xᵖ.** Note 1 is about a pure power. 1/√(x³ + 7) is not a pure power; you must compare it to one first, then quote Note 1 about the comparison function.
- **The p-test in this deck is only at infinity.** ∫₁^∞ dx/xᵖ. The deck states nothing about ∫₀¹ dx/xᵖ, so do not quote a "p < 1" rule at a singularity — she has not given you one.

## What to be able to say out loud

- The two things that make an integral improper, and which one you are looking at.
- The Type I definition with the limit written out, in both directions, and the sentence "convergent if the limit exists, divergent if it does not."
- Why ∫₋∞^∞ must be split, and why one divergent half ends the question.
- The three Type II clauses, and specifically that a discontinuity **inside** the interval forces a split at that point.
- The Comparison Test in her exact lettering, 0 ≤ g ≤ f, both valid conclusions, and the two combinations that prove nothing.
- Note 1, including that p = 1 diverges.
- All four of her worked examples end to end: ∫₀^∞ xe⁻ˣdx = 1 with L'Hôpital; ∫₋∞^∞(2x² − x + 3)dx diverges; ∫₋₁²dx/x⁴ diverges after splitting at 0; ∫₂^∞cos²(x)/x²dx converges, ∫₃^∞dx/√(x² − 1) diverges, ∫₁^∞dx/√(x³ + 7) converges.
- The TASK: ∫₁^∞ dx/√(x⁶ + 1) converges, by comparison with 1/x³ and p = 3 > 1.
