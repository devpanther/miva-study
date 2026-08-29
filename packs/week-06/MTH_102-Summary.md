# MTH_102 — Week 6 Summary

*Elementary Mathematics II (Calculus) · Topic: Higher-Order Derivatives — Examples and Its Applications · Lecturer: the deck's own title slide gives no name; MTH_102 is taught by Danjuma Rose Uwanassara, MSc Mathematics*

**Scope note:** this rewrite follows the deck slide-for-slide. The whole of Week 6 is **one idea worked six times**: to get a higher derivative, differentiate the derivative you already have, using the ordinary rules again. She gives six worked examples and sets two TASKs. Her rule inventory is small and she supplies every rule she uses on the slide where she uses it: the power rule f′ = nx^(n−1), the derivative of a constant = 0, d(tan x)/dx = sec²x, d(ln x)/dx = 1/x, d(sin x)/dx = cos x, d(eˣ)/dx = eˣ, the chain rule, and the quotient rule.

She does **not** cover: concavity, points of inflection, the second-derivative test, maxima and minima, implicit or parametric second derivatives, partial derivatives, general nth-derivative formulas (no aⁿe^(ax), no sin(x + nπ/2), no factorials), the Leibniz expansion (uv)″ = u″v + 2u′v′ + uv″, operator notation Dⁿ, or any kinematics calculation. Slide 16 mentions acceleration and jerk **in words only** — there is no worked motion problem anywhere in the deck. Note also that although her SUMMARY slide lists the product rule, **not one of her worked examples uses it**; the only place it is needed is her second TASK, f(x) = xeˣ.

The centre of gravity of this deck is slides 10–14: a single function, ln(1 + x²), differentiated four times, with the quotient rule reapplied at every order. Five of the deck's fifteen content slides are that one problem. Learn it line by line.

## The 8 most examinable things this week

1. **A higher-order derivative is just the derivative of the previous derivative** (slide 6): "The second derivative is gotten by differentiating y′ again." There is no new machinery this week — only the Week 5 rules, applied again to whatever you have just written down.
2. **Power rule (slide 4).** "Using the power rule which says when f(x) = xⁿ, **f′ = nx^(n−1)**." And the note she puts in bold on the same slide: **the derivative of a constant is zero**, i.e. d(4)/dx = 0.
3. **Notation (slide 14), stated explicitly.** "The notation for the fourth derivative can be written as **f⁽⁴⁾(x)** or **(f‴(x))′**." From the fourth order on the prime marks are replaced by a bracketed superscript — a counter, not a power. In Leibniz form (slide 9) she writes dy/dx, d²y/dx², d³y/dx³.
4. **Rewrite roots as fractional powers before differentiating (slide 6).** √(x³) "can also be written as y = x^(3/2)". Then the exponent arithmetic is done in full: y″ = (3/2)·(1/2)x^(1/2 − 1) = (3/4)x^(−1/2).
5. **The standard derivatives she supplies, and nothing beyond them:** d(tan x)/dx = sec²x (slide 5), d(ln x)/dx = 1/x (slide 8), d(sin x)/dx = cos x and d(eˣ)/dx = eˣ (slide 9).
6. **Chain rule as she states it (slide 10):** "If y = f(u), and u = g(x), then **f′(x) = y′(u)·u′(x)**." The consequence she demonstrates on slide 9: differentiating sin(5x) deposits **another factor 5 every single time** — 5, then 25, then 125 — and e^(3x) deposits another 3 every time.
7. **Quotient rule (slide 11):** "if f(x) = u(x)/v(x) then **f′(x) = [v(x)u′(x) − u(x)v′(x)]/(v(x))²**." Numerator order matters: v·u′ first, then subtract u·v′.
8. **Once a derivative is a quotient, every higher order needs the quotient rule again** (slides 11–13). She applies it three times in succession on ln(1 + x²), each time feeding the previous numerator in as the new u and the previous denominator as the new v. The expressions grow; that is expected, not a sign of error.

## Her build, example by example

### FIRST-ORDER DERIVATIVE — Example on slide 4

**What is the first derivative of f(x) = x⁴ + 2x³ − 15x + 4?**

Solution. Using the power rule which says when f(x) = xⁿ,

**f′ = nx^(n−1)**

Then, the first-order derivative is

**f′(x) = 4x³ + 6x² − 15**

**NOTE:** the derivative of a constant is zero, i.e. d(4)/dx = 0.

Term by term: x⁴ → 4x³; 2x³ → 2·3x² = 6x²; −15x → −15 (the power rule with n = 1 gives 15x⁰ = 15); +4 → 0. The constant does not become 4 and it does not survive — it vanishes.

### FIRST DERIVATIVE — Example on slide 5

**Differentiate y = 3 tan x + 3.**

Solution. Recall from the trigonometry rule, **d(tan x)/dx = sec²x**. Thus,

dy/dx = d(3 tan x)/dx + d(3)/dx

dy/dx = 3·d(tan x)/dx + 0

**dy/dx = 3 sec²x**

Two habits worth copying from the way she lays this out: she **splits the sum into separate derivatives first**, then **pulls the constant 3 outside** the derivative sign rather than absorbing it, and she writes the "+ 0" explicitly instead of silently dropping the constant term.

### SECOND-ORDER DERIVATIVE — Example on slide 6

**Given a function f(x) = √(x³). Find the second derivative.**

Solution. It can also be written as **y = x^(3/2)**.

The first derivative is **y′ = (3/2)x^(1/2)**

"The second derivative is gotten by differentiating y′ again":

y″ = (3/2)·(1/2)x^(1/2 − 1)

**y″ = (3/4)x^(−1/2)**

Read the exponent line carefully: the new exponent is **1/2 − 1 = −1/2**, and the two coefficients **multiply**, 3/2 × 1/2 = 3/4. The exponent falls by one at every differentiation even when it is a fraction, and even when it goes negative.

### TASK 1 (slide 7) — set by the lecturer, no answer given

**What is the second derivative of y = cos(3x)?**

Solution (worked here; the slide leaves it blank). The chain rule supplies a factor 3 each time, and cos differentiates to −sin.
y′ = −3 sin(3x)
y″ = −3·3 cos(3x) = **−9 cos(3x)**

Note the sign appears at the **first** step (cos → −sin), and the second step (sin → cos) contributes no new sign, so the answer is −9 cos(3x) and not +9 cos(3x). Notice too that y″ = −9y, exactly the pattern slide 9 shows for sin(5x), where two differentiations produced −25 sin(5x) = −25y.

### THIRD-ORDER DERIVATIVE — Example on slide 8

**"What is the third derivative of f(2) = ln x?"**

*(The question is misprinted. It should read f(x) = ln x, find f‴(2) — her own final line evaluates the third derivative at x = 2, which is what "f(2)" is standing in for. See the Errors section below.)*

Solution. Let y = ln x.

From the logarithmic rule: **d(ln x)/dx = 1/x**

The first derivative is **y′ = 1/x or x⁻¹**
The second derivative is **y″ = −1/x² or −x⁻²**
The third derivative is **y‴ = 2/x³ or 2x⁻³**

Thus, **f‴(2) = 2/2³ = 2/8 = 1/4.**

Where each line comes from: x⁻¹ differentiates to (−1)x⁻² = −x⁻²; then −x⁻² differentiates to −(−2)x⁻³ = +2x⁻³. The sign flips once and then flips back, and the coefficient climbs 1 → −1 → 2. The habit she is drilling is writing each answer **both ways** — as a fraction and as a negative power — because the negative-power form is the one you can differentiate again.

### THIRD DERIVATIVE — Example on slide 9

**Find the first three derivatives of sin(5x) + e^(3x).**

Solution. Let y = sin(5x) + e^(3x). *(The slide writes "Let dy/dx = sin(5x) + e^(3x)", which is a slip — everything after it treats the expression as y.)*

From the rules: **d(sin x)/dx = cos x** and **d(eˣ)/dx = eˣ**. *(The slide labels these "the logarithmic rule"; they are the trigonometric and exponential rules. The mathematics is right, the label is not.)*

The first derivative is **dy/dx = 5 cos(5x) + 3e^(3x)**
The second derivative is **d²y/dx² = −25 sin(5x) + 9e^(3x)**
The third derivative is **d³y/dx³ = −125 cos(5x) + 27e^(3x)**

This is the deck's clearest demonstration of the chain factor. Track the two coefficients separately:
- **sin(5x):** 5 → 25 → 125, one factor of 5 per differentiation, with the sign cycling +, −, − as cos, −sin, −cos.
- **e^(3x):** 3 → 9 → 27, one factor of 3 per differentiation, with **no sign change ever**, because eᵘ reproduces itself.

The exponent 5x and 3x never changes. It is the coefficient in front that grows, not the argument.

### FOURTH DERIVATIVE — Example on slides 10–14 (the deck's main exercise)

**Find the fourth derivative of ln(1 + x²).**

**Step 1 — the first derivative, by the chain rule (slide 10).**

Let f(x) = ln(1 + x²). Recall from the chain rule: if **y = f(u)** and **u = g(x)**, then **f′(x) = y′(u)·u′(x)**.

From the above question, **y = ln(u) where u = (1 + x²)**, so

y′(u) = 1/u,  u′(x) = 2x

Therefore the first derivative is f′(x) = (1/u)·2x

**f′(x) = 2x/(1 + x²)**

**Step 2 — the second derivative, by the quotient rule (slide 11).**

"The first derivative f′(x) = 2x/(1 + x²) **is a quotient.**" Recall the quotient rule: if f(x) = u(x)/v(x), then

**f′(x) = [v(x)u′(x) − u(x)v′(x)]/(v(x))²**

Thus u(x) = 2x, v(x) = 1 + x², u′(x) = 2, v′(x) = 2x.

f″(x) = [(1 + x²)·2 − 2x(2x)]/(1 + x²)²

f″(x) = (2 + 2x² − 4x²)/[(1 + x²)(1 + x²)]

**f″(x) = (2 − 2x²)/(1 + 2x² + x⁴)**

She expands the denominator (1 + x²)² into 1 + 2x² + x⁴ rather than leaving it bracketed — that expansion is what she carries forward into the next step.

**Step 3 — the third derivative, quotient rule again (slide 12).**

"Differentiating the second derivative, we get"

u(x) = 2 − 2x²,  v(x) = 1 + 2x² + x⁴
u′(x) = −4x,   v′(x) = 4x + 4x³

f‴(x) = [(1 + 2x² + x⁴)(−4x) − (2 − 2x²)(4x + 4x³)]/(1 + 2x² + x⁴)²

f‴(x) = [−4x − 8x³ − 4x⁵ − 8x − 8x³ + 8x³ + 8x⁵]/[(1 + 2x² + x⁴)(1 + 2x² + x⁴)]

**f‴(x) = (4x⁵ − 8x³ − 12x)/(1 + 4x² + 6x⁴ + 4x⁶ + x⁸)**

Check the collection of terms yourself, it is where marks are lost: x terms −4x − 8x = **−12x**; x³ terms −8x³ − 8x³ + 8x³ = **−8x³**; x⁵ terms −4x⁵ + 8x⁵ = **+4x⁵**. And the denominator: (1 + 2x² + x⁴)² = **1 + 4x² + 6x⁴ + 4x⁶ + x⁸**.

**Step 4 — the fourth derivative, quotient rule a third time (slides 13–14).**

"Lastly, differentiating the third derivative, we obtain"

u(x) = 4x⁵ − 8x³ − 12x,   v(x) = 1 + 4x² + 6x⁴ + 4x⁶ + x⁸
u′(x) = 20x⁴ − 24x² − 12,  v′(x) = 8x + 24x³ + 24x⁵ + 8x⁷

f⁽⁴⁾(x) = [(1 + 4x² + 6x⁴ + 4x⁶ + x⁸)(20x⁴ − 24x² − 12) − (8x + 24x³ + 24x⁵ + 8x⁷)(4x⁵ − 8x³ − 12x)]/(1 + 4x² + 6x⁴ + 4x⁶ + x⁸)²

**f⁽⁴⁾(x) = (−12x¹² + 24x¹⁰ + 204x⁸ + 336x⁶ + 204x⁴ + 24x² − 12)/(1 + 4x² + 6x⁴ + 4x⁶ + x⁸)²**

**The slide prints a different numerator — −12x¹² + 40x¹⁰ + 568x⁸ + 416x⁶ + 240x⁴ + 24x² − 12 — and it is wrong.** The line above is the correct expansion. Do not copy the slide's version. The arithmetic is spelled out in full in `notes.md` and again in the Errors section below.

Slide 14 closes with the notation point: **"the notation for the fourth derivative can be written as f⁽⁴⁾(x) or (f‴(x))′."**

*Aside (not on the slides, and clearly marked as such): since 1 + 4x² + 6x⁴ + 4x⁶ + x⁸ is (1 + x²)⁴, the correct fourth derivative collapses to **−12(x⁴ − 6x² + 1)/(1 + x²)⁴**. She never simplifies, and you should present the answer her way in an exam. But this factorisation is a quick way to check your own expansion.*

### TASK 2 (slide 15) — set by the lecturer, no answer given

**"Find the third derivative of f(2) = xeˣ"**

*(Same misprint as slide 8: read it as f(x) = xeˣ, find f‴(2).)*

Solution (worked here; the slide leaves it blank). This is the **only** place in the deck where the product rule is needed — (uv)′ = u′v + uv′ — and it must be applied afresh at every order.

f(x) = xeˣ
f′(x) = 1·eˣ + x·eˣ = **(x + 1)eˣ**
f″(x) = 1·eˣ + (x + 1)eˣ = **(x + 2)eˣ**
f‴(x) = 1·eˣ + (x + 2)eˣ = **(x + 3)eˣ**

Then **f‴(2) = (2 + 3)e² = 5e² ≈ 36.95.**

The pattern is worth noticing: each differentiation adds exactly 1 to the bracket, because eˣ is unchanged and the product rule contributes a fresh eˣ every time.

## APPLICATION TO THE REAL-WORLD (slide 16)

Her words, and this is all she claims — there is no worked motion problem in the deck:

- "Higher-order derivatives play a significant role in understanding motion. The **second derivative represents acceleration** which we often see in Physics."
- "For instance, when plotting the position of a car over time, the second derivative gives us the acceleration (how the car is speeding up or slowing down), and the **third derivative tells us about jerk** (how the acceleration is changing)."
- "In analyzing **electrical circuits, control systems, vibrations in structures** etc."
- "For example, in an alternating current (AC) circuit, the second derivative **(V″(t))** may help determine how quickly the voltage is oscillating, aiding in the analysis and design of electrical systems."

## Her closing SUMMARY slide (18)

- "Higher-order derivatives refer to derivatives of a function **beyond the first order**. The nth derivative of a function f(x) is denoted by **f⁽ⁿ⁾(x)**."
- "They can be calculated using differentiation rules such as: the **power rule, product rule, chain rule**, etc., applied **iteratively**."
- "Higher-order derivatives affect the **smoothness and behaviour** of functions — functions become smoother as the order of derivatives increases."
- "They provide a deeper understanding of a function's behaviour, revealing information about **acceleration, jerk**, and other complex aspects."
- "In physics, higher-order derivatives help model motion and forces. Engineers use them in **signal processing and control systems**. Economists analyze **growth and utility functions** with their aid."

## Errors and misprints on the slides — name them, do not copy them

1. **Slide 13/14, substantive arithmetic error.** The fourth derivative's numerator is printed as −12x¹² + 40x¹⁰ + 568x⁸ + 416x⁶ + 240x⁴ + 24x² − 12. Expanding her own quotient-rule line gives −12x¹² + **24**x¹⁰ + **204**x⁸ + **336**x⁶ + **204**x⁴ + 24x² − 12. Four of the seven coefficients are wrong. The set-up on slide 13 (the u, v, u′, v′ and the quotient-rule line) is completely correct; only the final expansion is wrong. Learn the method from her, take the numbers from this page.
2. **Slide 8, misprinted question.** "What is the third derivative of **f(2)** = ln x?" — f(2) is a number, not a function, so it cannot be differentiated. It should read f(x) = ln x, find f‴(2). Her own last line, f‴(2) = 1/4, shows that is what was meant.
3. **Slide 15, same misprint.** "Find the third derivative of **f(2)** = xeˣ" — read as f(x) = xeˣ, find f‴(2).
4. **Slide 9, two slips.** "Let **dy/dx** = sin(5x) + e^(3x)" should be "Let **y** = sin(5x) + e^(3x)"; as printed, the derivatives would all be one order out. And "From the **logarithmic** rule: d(sin x)/dx = cos x and d(eˣ)/dx = eˣ" mislabels the trigonometric and exponential rules as logarithmic. Every derivative she then writes is correct.
5. **Slide 10, garbled chain-rule statement.** "Recall from chain rule, given f(x) = g(f(x))" uses f on both sides. It should be a composite of two different functions — which is exactly what the next two lines say properly with y = f(u), u = g(x). Her application to ln(1 + x²) is correct.
6. **Slide 8, typo.** "The third derivative **is is**".

## Commonly confused

- **f⁽⁴⁾(x) is not [f(x)]⁴.** The bracketed superscript counts differentiations. Her slide 14 note exists precisely to make this unambiguous: f⁽⁴⁾(x) = (f‴(x))′.
- **The derivative of a constant is 0, not the constant.** Slide 4's NOTE. The +4 in x⁴ + 2x³ − 15x + 4 disappears; the +3 in 3 tan x + 3 disappears.
- **A constant multiple survives.** 3 tan x → 3 sec²x. Do not confuse "the derivative of a constant is 0" with "constants disappear from products".
- **Differentiate the answer, not the original.** The second derivative of √(x³) comes from differentiating (3/2)x^(1/2), not from differentiating x^(3/2) a second time in isolation.
- **The chain factor comes back every time.** sin(5x) gives 5, then 25, then 125 — not 5 once. This is the single biggest source of lost marks in her slide-9 example.
- **e^(3x) never changes sign; sin and cos do.** In d³y/dx³ = −125 cos(5x) + 27e^(3x), the minus belongs to the trigonometric term alone.
- **Quotient rule order.** [v·u′ − u·v′]/v², numerator **v·u′ first**. Reversing it flips the sign of the whole derivative.
- **Once you have a quotient, you keep the quotient rule.** Slides 11, 12 and 13 are the same rule three times. There is no shortcut in this deck.
- **Rewrite roots and reciprocals as powers before differentiating.** √(x³) → x^(3/2); 1/x² → x⁻². The power rule only sees xⁿ.
- **Fractional exponents fall by 1 like any other.** 3/2 → 1/2 → −1/2. Students often stop at 1/2 or write 1/4.
- **Do not simplify her denominators away mid-problem.** She carries (1 + x²)² forward as 1 + 2x² + x⁴ and squares that again to 1 + 4x² + 6x⁴ + 4x⁶ + x⁸. Answer in her form.
- **Nothing about concavity, maxima, minima or inflection is in this deck.** If a question asks you to classify a stationary point, it is not from Week 6 material.

## What you should be able to say out loud

That a higher-order derivative is nothing more than differentiating again, and that the only thing that changes with order is which rule the current expression demands. That the power rule is f′ = nx^(n−1) and the derivative of a constant is zero. That √(x³) must be rewritten as x^(3/2) first, and that 1/2 − 1 = −1/2. That d(tan x)/dx = sec²x, d(ln x)/dx = 1/x, d(sin x)/dx = cos x and d(eˣ)/dx = eˣ. That the chain rule is f′(x) = y′(u)·u′(x), and that it therefore hands you another factor of 5 for every differentiation of sin(5x) — 5, 25, 125 — and another 3 for every differentiation of e^(3x). That the quotient rule is [v·u′ − u·v′]/v² and that once the first derivative of ln(1 + x²) turns out to be a quotient, you are using it at every order after that. That the third derivative of ln x is 2x⁻³, so f‴(2) = 1/4. That f⁽⁴⁾(x) means (f‴(x))′ and not the fourth power. And that the second derivative is acceleration while the third is jerk — the only application claim the deck makes.
