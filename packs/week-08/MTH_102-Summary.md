# MTH_102 — Week 8 Summary

*Elementary Mathematics II (Calculus) · Topic: Integration Techniques & Approach · Lecturer: the Week 8 title slide carries no name (the Week 7 deck for this course names Danjuma Rose Uwanassara, MSc Mathematics)*

**Scope note:** this rewrite follows the deck slide-for-slide. The lecturer gives a **fifteen-line table of standard integrals** (slides 4–6) and then exactly **four techniques**, in this order: **substitution**, **integration by parts**, **trigonometric substitution**, **partial fractions**. She works **seven examples** and sets **four TASK questions**, none of them answered on the slides. She does **not** teach LIATE or any rule for choosing u; she does **not** do the cycling integrals ∫eˣsin(x)dx / ∫eˣcos(x)dx; she does **not** give the a-parameter trig-substitution table (x = a·sinθ, a·tanθ, a·secθ) — she factors the constant out and normalises to 1 − (something)² instead; she does **not** cover repeated linear factors, irreducible-quadratic numerators (Ax + B), improper fractions or polynomial long division, completing the square, or the f′/f logarithm shortcut. She writes **capital C** for the constant in this deck (Week 7 used lowercase c), and she writes **ln(x)** everywhere — **never ln|x|**. Learn her seven examples and her four tasks cold; they are the shape of the exam questions.

## The 9 most examinable things this week

1. **The standard-integral table is the destination (slides 4–6).** Every technique in this deck exists to convert an integral into one of those fifteen lines. She introduces the list as "common indefinite integrals that should already be familiar" — but Week 7 taught only the power rule, so for you most of this table is **new content to memorise**, not revision.
2. **The substitution formula, exactly as she states it (slide 7).** "The general substitution formula states that **∫f′(g(x))·g′(x)dx = f(g(x)) + C**. It is just the Chain Rule, written in terms of integration via the Fundamental Theorem of Calculus."
3. **On a definite integral, change the limits (slide 7).** In Example 1 she does not go back to x. She writes: "Notice that if x = 0, then u = 2, and if x = 2, then u = 4", and finishes entirely in u — ∫₀²(x+2)³dx becomes ∫₂⁴u³du. The limits are **x-values converted into u-values**, and once they are converted the answer is a number, so no back-substitution is needed.
4. **On an indefinite integral, you must go back to x.** Her Example 2 (slide 8) stops at eᵘ + C. That is an incomplete answer as printed — see the flagged note below. The answer is **e^(x²) + C**.
5. **Integration by parts, exactly as she states it (slide 10).** "Let f(x) = u and g(x) = v then we have **∫u dv = uv − ∫v du**." She gives no rule for choosing u; in her two examples the **algebraic factor is always u** (u = x, u = 3x²) and the exponential or trigonometric factor is always dv.
6. **v is the integral of dv, not dv itself.** Slide 11: "let dv = sin(x)dx. Then v = −cos(x)." The minus sign there is the whole difficulty of Example 2, and it survives into every line after it.
7. **Parts can be applied twice (slides 11–12).** ∫3x²sin(x)dx leaves ∫x·cos(x)dx behind, which is itself done by parts. Each pass drops the power of x by one.
8. **Trigonometric substitution is driven by 1 − sin²(u) = cos²(u) (slide 14).** For √(1 − x²) she sets **x = sin(u)**, so dx = cos(u)du and the root becomes √(cos²(u)) = cos(u). The integral collapses to ∫cos²(u)du, which needs the double-angle identity **cos²(u) = (1 + cos(2u))/2**, giving **u/2 + sin(2u)/4 + C**.
9. **Partial fractions: factor, split with unknowns, clear the denominator, substitute the roots (slides 19–20).** For 1/(x² + 3x) she factors to 1/(x(x+3)), writes A/x + B/(x+3), clears to 1 = A(x + 3) + B(x), and then sets **x = 0 and x = −3** to read off A = 1/3, B = −1/3. Every term then integrates by the standard line ∫x⁻¹dx = ln(x) + C.

## Standard integrals — the table she gives (slides 4, 5, 6)

**Slide 4** — introduced as "a list of common indefinite integrals that should already be familiar":

- ∫xⁿdx = x^(n+1)/(n+1) + C, n ≠ −1
- ∫x⁻¹dx = ln(x) + C
- ∫eˣdx = eˣ + C
- ∫sin(x)dx = −cos(x) + C
- ∫cos(x)dx = sin(x) + C

**Slide 5:**

- ∫sec²(x)dx = tan(x) + C
- ∫sec(x)tan(x)dx = sec(x) + C
- ∫[1/√(1 − x²)]dx = sin⁻¹ + C
- ∫[1/(1 + x²)]dx = tan⁻¹ + C
- ∫[1/(x√(x² − 1))]dx = sec⁻¹ + C

**Slide 6:**

- ∫ln(x)dx = x·ln(x) − x + C
- ∫tan(x)dx = −ln(cos(x)) + C
- ∫sec(x)dx = ln(sec(x) + tan(x)) + C
- ∫csc(x)dx = −ln(csc(x) + cot(x)) + C
- ∫cot(x)dx = ln(sin(x)) + C

Slide 6 closes: "In what follows, we present some useful integration techniques."

*Aside, not her content: the last three lines of slide 5 are printed with the argument missing — sin⁻¹, tan⁻¹, sec⁻¹ with nothing after them. They mean **sin⁻¹(x) + C**, **tan⁻¹(x) + C**, **sec⁻¹(x) + C**. Write the (x) in an exam answer; a bare sin⁻¹ is not a function value. Separately, standard textbooks write **ln|x|** with a modulus wherever this deck writes ln(x), because ln is undefined for negative arguments. She never uses the modulus anywhere in the deck — reproduce her form, but know why the bars exist if a marker asks.*

## 1. Substitution (slides 7–8)

**Her statement of the method (slide 7), verbatim:** "The general substitution formula states that ∫f′(g(x))·g′(x)dx = f(g(x)) + C. It is just the Chain Rule, written in terms of integration via the Fundamental Theorem of Calculus. This substitution is usually done in the following sense."

The formula is read right to left: if you can see an **inner function g(x)** and its **derivative g′(x) multiplying it**, the integral is just f evaluated at the inner function.

### Example 1 (slide 7) — a definite integral, with the limits changed

**Evaluate ∫₀²(x + 2)³dx.**

**Solution.** "Let u = (x + 2), so that du = dx. Notice that if x = 0, then u = 2, and if x = 2, then u = 4. Therefore,"

∫₀²(x + 2)³dx = ∫₂⁴u³du = (1/4)u⁴|₂⁴ = (1/4)(4⁴ − 2⁴) = **60**

Read every move: du = dx because the derivative of x + 2 is 1; the **limits 0 and 2 become 2 and 4** because they are x-values being converted to u-values; the power rule does the integration; the coefficient 1/4 is factored outside the bar, exactly as in Week 7. Arithmetic: 4⁴ = 256, 2⁴ = 16, 256 − 16 = 240, 240/4 = 60.

### Example 2 (slide 8) — spotting the inner function inside an exponent

**Evaluate ∫2x·e^(x²)dx.**

**Solution.** "Since the exponential component is x², we let u = x², so that du = 2x dx. Therefore,"

∫2x·e^(x²)dx = ∫e^(x²)·2x dx = ∫eᵘ du = eᵘ + C

The manoeuvre worth copying is the **middle step**: she rewrites 2x·e^(x²) as e^(x²)·2x so that the du = 2x dx block is sitting visibly at the end, ready to be swallowed whole. The choice of u is dictated by the exponent, not by the 2x.

*Flagged: the slide stops at eᵘ + C. This is an indefinite integral, so **the answer must be returned to the original variable**: since u = x², the answer is **e^(x²) + C**. Write that. An answer left in u is not an answer to the question asked — u was your own invention, and it does not appear in the problem. (Example 1 could stop in u only because changing the limits turned it into a number.) Check it: d/dx e^(x²) = e^(x²)·2x ✓.*

### TASK 1 (slide 9) — set by the lecturer, not answered

**Evaluate ∫₀¹ x·eˣ dx.**

*Flagged: this TASK sits at the end of the SUBSTITUTION section, but it cannot be done by substitution — there is no inner function whose derivative is present. It needs integration by parts, and its indefinite version is literally **Example 1 of the very next slide**. Treat slide 9 as a bridge into the next section, not as substitution practice.*

**Solution.** From slide 10, ∫x·eˣdx = x·eˣ − eˣ + C. So

∫₀¹x·eˣdx = (x·eˣ − eˣ)|₀¹ = (1·e¹ − e¹) − (0·e⁰ − e⁰) = (e − e) − (0 − 1) = **1**

The upper limit gives exactly zero, and the whole answer comes from the lower limit, where e⁰ = 1.

## 2. Integration by parts (slides 10–12)

**Her statement (slide 10), verbatim:** "Let f(x) = u and g(x) = v then we have **∫u dv = uv − ∫v du**."

The procedure she demonstrates: name **u** and **dv**, differentiate u to get **du**, integrate dv to get **v**, then assemble uv − ∫v du.

### Example 1 (slide 10)

**Evaluate ∫x·eˣ dx.**

**Solution.** "Let u = x. Then du = dx. Also, let dv = eˣdx. Then v = eˣ. Therefore, we have"

∫x·eˣdx = x·eˣ − ∫eˣdx = **x·eˣ − eˣ + C**

Why this choice works: differentiating x turns it into 1 and makes it vanish from the leftover integral; eˣ is unchanged by integration, so nothing gets worse. The reverse choice (u = eˣ, dv = x dx) would give x²eˣ/2 − ∫(x²/2)eˣdx, in which the power of x has gone **up**. Check the answer: d/dx(x·eˣ − eˣ) = eˣ + x·eˣ − eˣ = x·eˣ ✓.

### Example 2 (slides 11–12) — parts applied twice

**Evaluate ∫3x²·sin(x)dx.**

**Solution.** "Let u = 3x². Then du = 6x dx. Also, let dv = sin(x)dx. Then v = −cos(x). Therefore, we have"

∫3x²sin(x)dx = 3x²(−cos(x)) − ∫ −cos(x)(6x dx)
= −3x²cos(x) + 6∫x·cos(x)dx

"To again evaluate ∫x·cos(x)dx, let u = x and dv = cos(x)dx. Then du = dx, v = sin(x), so that"

∫x·cos(x)dx = x·sin(x) − ∫sin(x)dx = x·sin(x) + cos(x)

**Finally (slide 12), we have**

**∫3x²sin(x)dx = −3x²cos(x) + 6(x·sin(x) + cos(x)) + C**

Three sign events, all of them examinable:
- **v = −cos(x)**, because ∫sin(x)dx = −cos(x). That minus is why the first term is −3x²cos(x).
- **− ∫ −cos(x)(6x dx) becomes +6∫x·cos(x)dx.** Two minuses make the plus; the 6 comes out front.
- **− ∫sin(x)dx = +cos(x)**, again from ∫sin = −cos.

Note also that she leaves the 6 outside and only multiplies it in on the final line, and that the constant C is added only once, at the very end — not at each pass.

### TASK 2 (slide 13) — set by the lecturer, not answered

**Evaluate ∫x·ln(x)dx.**

**Solution.** The algebraic factor cannot be u here, because ln(x) is not something you can integrate by any line of her table other than the ∫ln(x)dx line. Take **u = ln(x)**, so du = (1/x)dx, and **dv = x dx**, so v = x²/2.

∫x·ln(x)dx = (x²/2)ln(x) − ∫(x²/2)(1/x)dx
= (x²/2)ln(x) − (1/2)∫x dx
= **(x²/2)ln(x) − x²/4 + C**

*Aside: this task is the one place where "put the algebraic factor as u" — the habit both of her examples establish — gives the wrong answer. The real constraint is that **dv must be something you can integrate**, and x is far easier to integrate than ln(x). Check: d/dx[(x²/2)ln(x) − x²/4] = x·ln(x) + (x²/2)(1/x) − x/2 = x·ln(x) + x/2 − x/2 = x·ln(x) ✓.*

## 3. Trigonometric substitution (slides 14–17)

**Her framing (slide 14):** "To evaluate the following type of integrals, some trigonometric substitutions are required."

### Example 1 (slides 14–15) — ∫√(1 − x²)dx

**Solution (slide 14).** "Here, we let x = sin(u), so that dx = cos(u) du. Hence, our integral becomes"

∫√(1 − x²)dx = ∫√(1 − sin²(u))·cos(u)du
= ∫√(cos²(u))·cos(u)du = ∫cos²(u)du

**Slide 15.** "Noting that cos²(u) = (1 + cos(2u))/2, we have"

∫cos²(u)du = u/2 + sin(2u)/4 + C

"Setting back u = sin⁻¹(x), we obtain"

∫√(1 − x²)dx = sin⁻¹(x)/2 + sin(2·sin⁻¹(x))/4 + C

"To further simplify this, notice that

sin(2u) = 2sin(u)cos(u) = 2sin(sin⁻¹(x))√(1 − sin²(u)) = 2x√(1 − sin²(sin⁻¹(x))) = 2x√(1 − x²). Hence,"

**∫√(1 − x²)dx = sin⁻¹(x)/2 + x√(1 − x²)/2 + C**

Four separate ideas in one example:
- **1 − sin²(u) = cos²(u)** is the entire reason for the substitution: it removes the square root.
- **cos²(u) cannot be integrated as it stands.** The double-angle identity is compulsory. Integrating (1 + cos(2u))/2 term by term gives u/2 and then (1/2)·sin(2u)/2 = sin(2u)/4 — the extra 2 in the denominator comes from the chain rule on cos(2u).
- **Setting back** means solving x = sin(u) for u, i.e. u = sin⁻¹(x).
- **sin(2u) must be unfolded** with sin(2u) = 2sin(u)cos(u) before it can be written in x. That is what turns sin(2·sin⁻¹(x))/4 into 2x√(1 − x²)/4 = x√(1 − x²)/2.

### "Example 1" again (slides 16–17) — ∫√(4 − 9x²)dx

*(The slide is labelled **Example 1** a second time. It is the section's **second** example — see the misprint note at the end.)*

**Solution (slide 16).** "Let us rewrite the integral in the following manner"

∫√(4 − 9x²)dx = ∫√(4(1 − (3x/2)²))dx = ∫2√(1 − (3x/2)²)dx

"Now, let 3x/2 = sin(u), so that dx = (2/3)cos(u)du. Hence, our integral becomes"

∫2√(1 − (3x/2)²)dx = ∫2√(1 − sin²(u))·(2/3)cos(u)du
= (4/3)∫cos²(u)du = 4u/6 + 4sin(2u)/12 + C

**Slide 17.** "By substituting the value of u and further simplifying, we have"

∫√(4 − 9x²)dx
= 2sin⁻¹(3x/2)/3 + 2sin(sin⁻¹(3x/2))cos(sin⁻¹(3x/2))/3 + C
= **2sin⁻¹(3x/2)/3 + x√(4 − 9x²)/2 + C**

The **rewrite is the technique**. She does not offer a table of x = a·sinθ substitutions; she **factors the constant out of the root** so that what remains is literally 1 − (something)², the exact form Example 1 handled:

4 − 9x² = 4(1 − 9x²/4) = 4(1 − (3x/2)²), and √4 = 2 comes outside.

Then the substitution is on the **whole bracket**: 3x/2 = sin(u). Differentiating, (3/2)dx = cos(u)du, so **dx = (2/3)cos(u)du** — the 2/3 is the reciprocal of 3/2, and forgetting it is the standard way to lose this question. The two constants multiply: 2 × (2/3) = 4/3.

The last line's arithmetic, spelled out: sin(u) = 3x/2 and cos(u) = √(1 − 9x²/4) = √(4 − 9x²)/2, so
2·sin(u)·cos(u)/3 = 2·(3x/2)·(√(4 − 9x²)/2)/3 = x√(4 − 9x²)/2.

### TASK 3 (slide 18) — set by the lecturer, not answered

**Evaluate ∫√(1 + x²)dx.**

*Aside: this is much harder than either example she works, and it is the only task in the deck that needs a technique she never demonstrates. It is done here in full because it is on her slide.*

**Solution.** The root is a **plus**, so 1 − sin² is no use; the identity that fits is 1 + tan²(u) = sec²(u). Let **x = tan(u)**, so dx = sec²(u)du and √(1 + x²) = √(sec²(u)) = sec(u).

∫√(1 + x²)dx = ∫sec(u)·sec²(u)du = ∫sec³(u)du

Now integrate ∫sec³(u)du **by parts**, taking the u-part to be sec(u) and dv = sec²(u)du, so v = tan(u) and d(sec(u)) = sec(u)tan(u)du. Writing I = ∫sec³(u)du:

I = sec(u)tan(u) − ∫sec(u)tan²(u)du
= sec(u)tan(u) − ∫sec(u)(sec²(u) − 1)du     [since tan² = sec² − 1]
= sec(u)tan(u) − I + ∫sec(u)du
2I = sec(u)tan(u) + ln(sec(u) + tan(u))     [the ∫sec(u)du line from slide 6]
I = (1/2)[sec(u)tan(u) + ln(sec(u) + tan(u))]

Setting back: tan(u) = x and sec(u) = √(1 + x²). Therefore

**∫√(1 + x²)dx = (1/2)[x√(1 + x²) + ln(x + √(1 + x²))] + C**

Every ingredient is somewhere in her deck — parts from slide 10, ∫sec(x)dx from slide 6, setting back from slide 15 — but she never combines them, and the "solve algebraically for I" step appears nowhere else. Know the answer; do not expect to reconstruct it under time pressure without having seen it once.

## 4. Partial fractions (slides 19–20)

**Her framing (slide 19):** "Some integrals are evaluated by first resolving them into partial fractions."

### Example 1 (slide 19)

**Evaluate ∫[1/(x² + 3x)]dx.**

**Solution.** "Factoring 1/(x² + 3x), we get 1/(x(x+3)), so that

1/(x(x+3)) = A/x + B/(x+3).

By clearing the denominator, we have **1 = A(x + 3) + B(x)**. Setting x = 0 and x = −3 yield A = 1/3, B = −1/3. Therefore,"

∫[1/(x² + 3x)]dx = ∫(1/3 · 1/x − 1/3 · 1/(x+3))dx = **(1/3)ln(x) − (1/3)ln(x + 3) + C**

The arithmetic she skips: at x = 0, 1 = A(3) + B(0) = 3A, so A = 1/3. At x = −3, 1 = A(0) + B(−3) = −3B, so B = −1/3. **The values chosen for x are the roots of the factors** — each one kills one unknown.

Note that B came out **negative**, and that the negative is carried into the integral as a subtraction. Note also that both terms integrate by the same standard line, ∫x⁻¹dx = ln(x) + C, and that the second gives ln(x + 3) — she does not stop to justify the shift, but it is a substitution u = x + 3 with du = dx.

### Example 2 (slide 20)

**Evaluate ∫[(7x − 6)/((x − 2)(x + 3))]dx.**

**Solution.** "Resolving into partial fractions, we have

(7x − 6)/((x − 2)(x + 3)) = A/(x − 2) + B/(x + 3).

By clearing the denominator, we have **7x − 6 = A(x + 3) + B(x − 2)**, so that A = 8/5, B = 27/5. Therefore,"

∫[(7x − 6)/((x − 2)(x + 3))]dx = ∫(8/5 · 1/(x−2) + 27/5 · 1/(x+3))dx = **(8/5)ln(x − 2) + (27/5)ln(x + 3) + C**

The arithmetic she skips: at x = 2, 7(2) − 6 = 8 = A(5), so A = 8/5. At x = −3, 7(−3) − 6 = −27 = B(−5), so B = 27/5 — **two negatives giving a positive**, which is where this example is easiest to lose. Here the denominator is already factored, so there is no factoring step; the numerator being 7x − 6 rather than 1 changes nothing about the method.

### TASK 4 (slide 21) — set by the lecturer, not answered

**Evaluate ∫[(5x + 7)/((x − 1)(x + 3))]dx.**

**Solution.** Write (5x + 7)/((x − 1)(x + 3)) = A/(x − 1) + B/(x + 3). Clearing:

5x + 7 = A(x + 3) + B(x − 1)

At x = 1: 5 + 7 = 12 = A(4), so **A = 3**.
At x = −3: −15 + 7 = −8 = B(−4), so **B = 2**.

∫[(5x + 7)/((x − 1)(x + 3))]dx = ∫(3/(x − 1) + 2/(x + 3))dx = **3ln(x − 1) + 2ln(x + 3) + C**

Check the split: 3(x + 3) + 2(x − 1) = 3x + 9 + 2x − 2 = 5x + 7 ✓.

## Her closing SUMMARY slide (22)

> "Some standard techniques for computing integrals of a function have been discussed.
> There are standard integrals for some well-known functions. The general rule for integrating a basic function is given by **∫xⁿdx = x^(n+1)/(n+1) + C, n ≠ −1**.
> There are various techniques and approach for evaluating integrals, including **substitution methods, integration by parts, trigonometric substitution, and partial fractions**."

That four-item list is the examinable spine of the week.

## Errors and misprints on the slides — named, so they are not copied

1. **Slide 16, labelling.** The second trigonometric-substitution example is headed **"Example 1"**, the same label as slide 14. The section therefore has two Example 1s and no Example 2. Refer to them by their integrands (√(1 − x²) and √(4 − 9x²)) rather than by number.
2. **Slide 8, incomplete answer.** ∫2x·e^(x²)dx is left as **eᵘ + C**. For an indefinite integral you must set back: **e^(x²) + C**.
3. **Slide 5, missing arguments.** The inverse-trigonometric lines print as "= sin⁻¹ + C", "= tan⁻¹ + C", "= sec⁻¹ + C" with no (x). Read and write them as sin⁻¹(x) + C, tan⁻¹(x) + C, sec⁻¹(x) + C.
4. **Slide 15, mixed variables in one expression.** The chain reads "2sin(sin⁻¹(x))√(1 − sin²(u))" — the first factor has already been converted to x while the second is still in u. The very next expression fixes it, writing √(1 − sin²(sin⁻¹(x))), and the final answer is correct. Do not copy the mixed line.
5. **Slide 9, misplaced TASK.** ∫₀¹x·eˣdx closes the SUBSTITUTION section but is an integration-by-parts problem, answered by the very next slide's example.
6. **No absolute values in any logarithm** (slides 4, 6, 19, 20). She writes ln(x), ln(cos(x)), ln(x + 3). The standard form carries a modulus: ln|x|, ln|cos(x)|, ln|x + 3|. Reproduce her notation on her paper; know the difference.

## To have understood the week, be able to say out loud

- The substitution formula and the sentence that justifies it: it is the chain rule read backwards.
- Why Example 1 never returns to x (the limits were converted) and why Example 2 must (there are no limits, so u must be eliminated).
- ∫u dv = uv − ∫v du, and that **v is the integral of dv** — which is why dv = sin(x)dx gives v = −cos(x).
- Why u = x beats u = eˣ in ∫x·eˣdx: differentiating x removes it, integrating x makes it worse.
- Why ∫3x²sin(x)dx needs two passes, and where each of its three minus signs comes from.
- That trigonometric substitution exists to kill a root via 1 − sin²(u) = cos²(u), and that ∫cos²(u)du then requires cos²(u) = (1 + cos(2u))/2.
- How √(4 − 9x²) is normalised to 2√(1 − (3x/2)²), and why dx = (2/3)cos(u)du rather than (3/2)cos(u)du.
- The four steps of partial fractions — factor, split with unknowns, clear the denominator, substitute the roots — and that every resulting term is a logarithm.
- The four techniques of the summary slide, in her order, and one integrand that each one is for.
