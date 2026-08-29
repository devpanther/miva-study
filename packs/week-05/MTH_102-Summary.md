# MTH_102 — Week 5 Summary

*Elementary Mathematics II (Calculus) · Topic: Differentiation — Formulae, Rules & Examples · Lecturer: Danjuma Rose Uwanassara, MSc Mathematics*

**Scope note:** this rewrite follows the deck slide-for-slide. The lecturer teaches **nine rules, one at a time, each introduced by a worked example rather than by a statement** — power, product, quotient, chain, implicit, parametric, constant, first principle, and partial — plus two TASK slides she sets and never answers. Her habit is fixed: *state the rule in u/v letters, list u, v, u′, v′ on one line, substitute, simplify.* She does **not** cover the sum/difference rule as a named formula, tangent and normal line equations, second or higher-order derivatives, differentiability versus continuity, related rates, optimisation, logarithmic or exponential derivatives, or a table of trigonometric derivatives — she simply **uses** d/dx(sin x) = cos x and d/dx(cos x) = −sin x without ever stating them, which is the one genuine gap in the deck (see the aside under Product Rule). Nor does she use first principles on a quadratic; her two first-principle examples are y = 3x and y = √x. Learn her eleven worked examples cold — they are the shape of the exam questions.

> **Three slides in this deck contain arithmetic or labelling errors** (slides 7, 8 and 21, plus a typo on 20). They are named in full below. Do not copy them into a script.

## The 10 most examinable things this week

1. **Power rule (slide 4).** "The power rule states that when f(x) = xⁿ, **f′(x) = nx^(n−1)**." Multiply by the old power, then drop the power by one.
2. **x⁰ = 1 (slide 5).** She writes it out as a separate line — "where, x⁰ = 1" — because it is what turns −4x^(1−1) into −4. The derivative of the term −4x is −4, not −4x⁰ left standing.
3. **Product rule in her order (slide 6).** "when f(x) = u(x)·v(x) we have **f′(x) = u(x)v′(x) + u′(x)v(x)**." She writes the *undifferentiated first factor times the derivative of the second* first. Addition is commutative so either order is right, but match her layout and you will not lose track of which pair you have already done.
4. **Quotient rule in her order (slide 8).** "given f(x) = u(x)/v(x), then **f′(x) = [v(x)u′(x) − u(x)v′(x)] / (v(x))²**." The **v u′ term comes first** and carries the plus; the u v′ term carries the minus. Reversing them flips the sign of the whole answer.
5. **Chain rule (slide 10).** "when f(x) = f(g(x)), if y = f(u) where u = g(x), then **f′(x) = y′(u)·u′(x)**." Differentiate the outside in terms of u, differentiate the inside, multiply, then put u back.
6. **Implicit differentiation (slides 12–13).** Differentiate both sides with respect to x; every y that gets differentiated leaves behind a factor **dy/dx**; then collect all dy/dx terms on one side, factorise, and isolate.
7. **Parametric rule (slide 14).** "**dy/dx = dy/dt ÷ dx/dt**." Not dy/dt on its own, and note she writes it as a division, not as a product of two fractions.
8. **Constant rule (slide 16).** "Since the function has no variable, it is a constant. Therefore dy/dx = 0." Her NOTE: "**The derivative of a constant is zero.**"
9. **First principle (slide 17).** "**f′(x) = lim(h→0) [f(x+h) − f(x)] / h**." The summary slide calls this "the **limit definition of the derivative**" and calls the power rule "the **general rule of differentiation**" — that pairing is a likely one-mark question.
10. **Partial differentiation (slide 21).** "For ∂f/∂x we treat **y** as a constant. For ∂f/∂y we treat **x** as a constant." Nothing more — no chain rule for partials, no mixed second partials.

## The rules, in her order, with every worked example

### POWER RULE — Example 1 (slide 4)

**Differentiate f(x) = x⁴.**

> The power rule states that when f(x) = xⁿ, f′(x) = nx^(n−1).

From the given question,
f′(x) = 4x^(4−1)
Hence, **f′(x) = 4x³.**

### POWER RULE — Example 2 (slide 5)

**Find the derivative of f(x) = 3x¹⁰⁰ − 4x.**

f′(x) = (3×100)x^(100−1) − (4×1)x^(1−1)
= 300x⁹⁹ − 4x⁰
= **300x⁹⁹ − 4**

> where, x⁰ = 1

Two things to copy. She writes the coefficient multiplication **explicitly as (3×100)** rather than doing it in her head — do the same and you will not drop the 3. And she treats **x as x¹**, so its derivative is 1·x⁰ = 1. This is the only place in the deck where a sum of terms is differentiated term by term; she never names that as a "sum rule", she just does it.

### PRODUCT RULE — Example 1 (slide 6)

**Find f′(x) of f(x) = x²·sin x.**

> The product rule states that when f(x) = u(x)·v(x) we have, f′(x) = u(x)v′(x) + u′(x)v(x)

From the given question,
u(x) = x², v(x) = sin x, u′(x) = 2x, v′(x) = cos x
**f′(x) = x² cos x + 2x sin x**

*Aside — a gap in the deck.* She uses **d/dx(sin x) = cos x** here and **d/dx(cos x) = −sin x** on slides 8 and 10 without ever stating either as a rule. They are not derived anywhere in this deck. Memorise the pair: sin differentiates to cos; cos differentiates to **minus** sin. The minus sign on cos is where most marks are lost in this week's material.

### PRODUCT RULE — Example 2 (slide 7) — *and the slide's arithmetic is wrong*

**Find the first derivative of f(x) = (4x + 6)(2x³ − 5x).**

u(x) = (4x + 6), v(x) = (2x³ − 5x), u′(x) = 4, v′(x) = 6x² − 5

Substituting into f′(x) = u v′ + u′ v:
f′(x) = (4x + 6)(6x² − 5) + (2x³ − 5x)(4)
= (24x³ − 20x + 36x² − 30) + (8x³ − 20x)
= **32x³ + 36x² − 40x − 30**

**Check by expanding first:** f(x) = 8x⁴ + 12x³ − 20x² − 30x, so f′(x) = 32x³ + 36x² − 40x − 30 ✓

> **Two errors on this slide.** (i) The substitution line is printed as `(4x + 6)(6x − 5)` — the **square on 6x² has been lost**, even though the line directly above correctly gives v′(x) = 6x² − 5. (ii) The "simplify to get" line is printed as **f′(x) = 8x³ + 24x² − 32x − 30**, which is not the derivative of anything on the slide — it is not even what the misprinted `(6x − 5)` version would give (that would be 8x³ + 24x² − 4x − 30). The correct answer is **32x³ + 36x² − 40x − 30**, confirmed by expanding the product before differentiating. Learn the correct value; if the misprinted number appears as an option in an exam, it is a distractor.

### QUOTIENT RULE — Example 1 (slide 8) — *the slide drops an x*

**Differentiate f(x) = x / cos(x).**

> The quotient rule states that given f(x) = u(x)/v(x), then f′(x) = [v(x)u′(x) − u(x)v′(x)] / (v(x))²

u(x) = x, v(x) = cos(x), u′(x) = 1, v′(x) = −sin(x)

f′(x) = [cos(x)·1 − x·(−sin(x))] / (cos(x))²
= **[cos(x) + x sin(x)] / cos²(x)**

> **Error on this slide.** The final line is printed as **[cos(x) + sin(x)] / cos²(x)** — the factor **x has been dropped from the second term**. The line immediately above it has it: `− x.(− sin(x))`, and a minus times a minus gives **+ x sin(x)**, not + sin(x). The correct answer is (cos x + x sin x)/cos²x.

Note also what the double negative is doing: **u(x)v′(x) = x·(−sin x) = −x sin x**, and the rule subtracts it, so **−(−x sin x) = +x sin x**. That is two sign changes in a row, which is exactly why the slide lost the term.

### QUOTIENT RULE — Example 2 (slide 9)

**Find the derivative of f(x) = (6x − 3)/(5x²).**

u(x) = (6x − 3), v(x) = 5x², u′(x) = 6, v′(x) = 10x

f′(x) = [5x²·6 − (6x − 3)·10x] / (5x²)²
f′(x) = (30x² − 60x² + 30x) / 25x⁴ = (−30x² + 30x) / 25x⁴
**f′(x) = 6(1 − x) / 5x³**

This one is fully correct and it is the cleanest example in the deck. Watch the two moves: **(5x²)² = 25x⁴**, squaring both the 5 and the x²; and the final tidy-up divides top and bottom by a common 5x, since 30x(1 − x)/25x⁴ = 6(1 − x)/5x³. Sign discipline matters at the second line — subtracting (6x − 3)(10x) = 60x² − 30x gives **−60x² + 30x**, so the −30x becomes +30x.

### CHAIN RULE — Example (slide 10)

**What is the first derivative of f(x) = cos(x²)?**

> The chain rule states that when f(x) = f(g(x)), if y = f(u) where u = g(x), then f′(x) = y′(u)·u′(x)

From the given question,
if y = cos(x²), then y = cos(u)
y′(u) = −sin(u), and u′(x) = 2x
f′(x) = −sin(u)·2x = −sin(x²)·2x
Therefore, **f′(x) = −2x sin(x²)**

The step worth naming out loud is the substitution back: she computes the derivative in terms of **u**, then replaces u by x² only at the end. Answering −2x sin(u) leaves the answer in the wrong variable.

### TASK 1 (slide 11) — set by the lecturer, no answer given

**What is the first derivative of f(x) = (2x − 4)²?**

Solution by the chain rule. Let u = 2x − 4, so y = u².
y′(u) = 2u, u′(x) = 2.
f′(x) = 2u·2 = 4u = **4(2x − 4) = 8x − 16.**

Check by expanding first: f(x) = 4x² − 16x + 16, so f′(x) = 8x − 16 ✓
The answer 2(2x − 4) = 4x − 8 is what you get if you forget u′(x) = 2. That is the whole point of the task.

### IMPLICIT FUNCTION — Example 1 (slide 12)

**Differentiate x² + y² = 25.**

> We have to differentiate both sides with respect to x: d/dx(x² + y²) = d/dx(25)
> Applying the chain rule for y²:

2x + 2y(dy/dx) = 0

Isolate dy/dx:
dy/dx = −2x / 2y
**dy/dx = −x / y**

The whole mechanism is in her phrase "applying the chain rule for y²": y is a function of x, so d/dx(y²) = 2y · dy/dx. The extra **dy/dx factor is the chain rule's u′(x)**. The right-hand side, a constant 25, differentiates to 0 by the constant rule.

### IMPLICIT FUNCTION — Example 2 (slide 13)

**Differentiate xy + 6x⁴ = y.**

d/dx(xy + 6x⁴) = d/dx(y)

y + x(dy/dx) + 24x³ = dy/dx

x(dy/dx) − dy/dx = −24x³ − y

Isolate dy/dx:
(dy/dx)(x − 1) = −(24x³ + y)
∴ **dy/dx = −(24x³ + y) / (x − 1)**

Three separate ideas stacked in one example. **The term xy needs the product rule**, giving y·1 + x·(dy/dx) = y + x dy/dx. **Every dy/dx is collected to the left** and everything else to the right. **Then factorise dy/dx out** — this is the step students skip, and without it there is nothing to divide by. (The slide prints a stray "1." at the start of the first working line; it is a list-numbering artefact, not mathematics.)

### PARAMETRIC DIFFERENTIATION — Example (slide 14)

**Consider the parametric equations x(t) = 2t + 1, y(t) = t² − t.**

First differentiate x and y with respect to t,
x′(t) = 2, y′(t) = 2t − 1

From the parametric rule, **dy/dx = dy/dt ÷ dx/dt**
**dy/dx = (2t − 1) / 2**

The answer is legitimately left **in terms of t**. There is no requirement to eliminate the parameter, and she does not.

### TASK 2 (slide 15) — set by the lecturer, no answer given

**Consider the parametric equations x(t) = t⁴, y(t) = 7t² − 5t.**

Solution: x′(t) = 4t³, y′(t) = 14t − 5.
**dy/dx = (14t − 5) / 4t³** (valid for t ≠ 0, since x′(t) = 0 there).

### CONSTANT RULE (slide 16)

**Find the derivative of y = 5.**

> Since the function has no variable, it is a constant. Therefore, dy/dx = 0.
> **NOTE:** The derivative of a constant is zero.

Her test is stated in words and is worth keeping: **has the expression no variable in it? Then it is a constant and its derivative is 0.** This is what kills the 25 on slide 12. Note it is a test on the whole expression — the −5 inside 7t² − 5t is not such a case, because that term still carries a t.

### THE FIRST PRINCIPLE — Example 1 (slide 17)

**Differentiate y = 3x using the first principle.**

> Recall the formula, f′(x) = lim(h→0) [f(x+h) − f(x)] / h, where f(x) = 3x

f′(x) = lim(h→0) [3(x + h) − 3x] / h
f′(x) = lim(h→0) [3x + 3h − 3x] / h
f′(x) = lim(h→0) 3h / h
f′(x) = lim(h→0) 3
Therefore, **y′ = 3**

Every line of the pattern is here: **substitute into f(x + h), expand, cancel the terms common to f(x + h) and f(x), divide out the h, then let h → 0.** The h must cancel from the denominator before the limit is taken — that is the only reason the answer is finite.

### THE FIRST PRINCIPLE — Example 2 (slides 18–19)

**Differentiate y = √x using the first principle.**

f′(x) = lim(h→0) [√(x + h) − √x] / h

Multiply above and below by the conjugate:
f′(x) = lim(h→0) {[√(x + h) − √x] / h} · [(√(x + h) + √x) / (√(x + h) + √x)]
f′(x) = lim(h→0) [(x + h) − (x)] / [h(√(x + h) + √x)]

*(continued on slide 19)*

f′(x) = lim(h→0) (x + h − x) / [h(√(x + h) + √x)]
f′(x) = lim(h→0) h / [h(√(x + h) + √x)]
f′(x) = lim(h→0) 1 / (√(x + h) + √x)
f′(x) = 1 / (√(x + 0) + √x)
**f′(x) = 1 / (2√x)**

This is the deck's hardest single example and the most likely long question. The trick is the **conjugate multiplier**: multiplying (√(x+h) − √x) by (√(x+h) + √x) gives (x + h) − x = h, by difference of two squares, and that h is what cancels the h in the denominator. Without it, substituting h = 0 gives 0/0 and you are stuck. Note the last two lines: she puts **h = 0 inside the surd** first, getting √x + √x, and only then writes it as 2√x.

Cross-check against the power rule: √x = x^(1/2), so f′(x) = (1/2)x^(−1/2) = 1/(2√x) ✓ — the two methods agree, which is the deck's implicit argument for why the power rule is "the general rule".

### CONSTANT MULTIPLE RULE (slide 20) — *misnamed slide, and a typo in the first line*

**Differentiate y = ⁵√(x³) with respect to x.**

⁵√(x³) can also be written as **x^(3/5)**

Using the power rule, y′ = nx^(n−1):
y′ = (3/5)x^(3/5 − 1)
y′ = (3/5)x^(−2/5)
or **y′ = 3 / (5·⁵√(x²))**

> **Typo on this slide.** The solution's first line is printed as "**³√(x⁵)** can also be written as x^(3/5)". ³√(x⁵) is x^(5/3), not x^(3/5) — the index and the power have been swapped inside the radical. The **question** is ⁵√(x³), and ⁵√(x³) = x^(3/5) is correct, so the exponent she actually uses is right and every line after it is right. Read the radical from the question, not from the solution line.
>
> **The slide is also misnamed.** It is titled CONSTANT MULTIPLE RULE but contains **no constant multiple at all** — it is a power-rule example with a fractional index. The constant multiple rule (d/dx[c·f(x)] = c·f′(x)) is never stated in this deck; she only ever uses it silently, as when 3x¹⁰⁰ differentiates to 300x⁹⁹ on slide 5.

The move to learn regardless: **a root is a fractional power.** The n-th root of x^m is x^(m/n). Then 3/5 − 1 = 3/5 − 5/5 = **−2/5**, and a negative fractional exponent goes back under the line as 1/⁵√(x²).

### PARTIAL DIFFERENTIATION (slide 21) — *label misprint*

**Consider f(x, y) = 3x² + 2xy − y³. Find the partial derivatives ∂f/∂x and ∂f/∂y.**

For ∂f/∂x we treat **y** as a constant:
**∂f/∂x = 6x + 2y**

For ∂f/∂y we treat **x** as a constant:
**∂f/∂y = 2x − 3y²**

> **Error on this slide.** The second answer is labelled "**∂f/∂x** = 2x − 3y²". The expression 2x − 3y² is correct, but it is **∂f/∂y**, not ∂f/∂x — the slide prints the same symbol twice. The words directly above it say "For ∂f/∂y we treat x as a constant", so the intent is unambiguous.

Term by term, so you can see where each piece went:
- **∂f/∂x:** 3x² → 6x. 2xy → 2y (y is a constant multiplier, x differentiates to 1). −y³ → 0 (no x in it, so it is a constant).
- **∂f/∂y:** 3x² → 0 (no y in it). 2xy → 2x. −y³ → −3y².

The pattern: **any term without the variable you are differentiating by dies**, by the constant rule.

### Her closing SUMMARY slide (22)

> The derivative of f(x) with respect to x is denoted as **f′(x), y′, dy/dx, df/dx, ẏ** (where y is a function of x).
>
> The **power rule** can be considered as **the general rule of differentiation** while the **first principle** is called the **"limit definition of the derivative"**.
>
> There are various rules and formulas for finding derivatives of **products, quotients, and compositions** of functions.

Note the fifth notation — **ẏ**, y-dot — which appears nowhere else in the deck.

## Commonly confused

- **The product rule is not (uv)′ = u′v′.** Test it on Example 2: u′v′ = 4(6x² − 5) = 24x² − 20, whereas the answer is 32x³ + 36x² − 40x − 30. Differentiation does not distribute over multiplication.
- **Quotient-rule order.** She writes **v u′ − u v′**, over v². The positive term is the one with the *denominator's* function undifferentiated. Swapping the two terms gives exactly the negative of the right answer.
- **The denominator is (v(x))², not v(x).** On slide 9 that means (5x²)² = **25x⁴**, squaring the coefficient too.
- **Chain rule versus power rule alone.** (2x − 4)² does **not** differentiate to 2(2x − 4). You owe the inner derivative, 2. Test: is the base anything other than a bare x? Then a factor u′(x) is owed.
- **Leaving the answer in u.** Put the inside function back: −2x sin(x²), not −2x sin(u).
- **The minus on cos.** d/dx(cos x) = −sin x. It is why the chain-rule answer on slide 10 is negative and why the quotient-rule answer on slide 8 comes out **positive**, via the double negative.
- **d(y²)/dx versus d(y²)/dy.** Implicitly, y is a function of x, so d/dx(y²) = 2y·**dy/dx**. Test: is the letter you are differentiating different from the variable you differentiate with respect to? If so, a dy/dx factor appears.
- **Forgetting to factorise dy/dx.** On slide 13 the answer only exists because x(dy/dx) − dy/dx is rewritten as (dy/dx)(x − 1). Without that step there is nothing to divide by.
- **Partial versus implicit.** In ∂f/∂y the other variable is a **genuine constant** and contributes no dy/dx. This is the exact opposite of implicit differentiation, and the two topics sit nine slides apart in the same deck.
- **Parametric: dy/dt is not the gradient.** Divide by dx/dt. Test: re-parametrise t → 2t; the gradient of the curve must not change, but dy/dt does.
- **Taking the limit too early in first principles.** The h must cancel out of the denominator *first*. If an h still survives in your answer, you have not finished; if you substituted h = 0 before cancelling, you got 0/0.
- **Not spotting when the conjugate is needed.** Any first-principles question with a square root needs the conjugate multiplier. It is the only algebraic trick in the deck.
- **x⁰ = 1, not 0.** Slide 5 states it separately for a reason. The derivative of −4x is −4.
- **The three slide errors.** Product Example 2's final line, Quotient Example 1's dropped x, and the Partial slide's duplicated ∂f/∂x label. Know the corrected versions.

## What you should be able to say out loud

- The power rule, the product rule in her order, the quotient rule in her order, the chain rule, the parametric rule, and the first-principles formula, from memory, without looking.
- Why (2x − 4)² differentiates to 8x − 16 and not 4x − 8, in one sentence about the inner derivative.
- Why differentiating y² with respect to x produces a dy/dx, and why differentiating y³ with respect to y does not.
- The five steps of a first-principles calculation, and why the conjugate is needed for √x.
- Why every term of 3x² + 2xy − y³ that lacks a y vanishes from ∂f/∂y.
- That the power rule is "the general rule of differentiation" and the first principle is "the limit definition of the derivative" — her words, on the summary slide.
