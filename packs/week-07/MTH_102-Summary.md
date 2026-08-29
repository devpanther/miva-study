# MTH_102 — Week 7 Summary

*Elementary Mathematics II (Calculus) · Topic: Integration — Indefinite and Definite Integrals · Lecturer: Danjuma Rose Uwanassara, MSc Mathematics*

**Scope note:** this rewrite follows the deck slide-for-slide. The lecturer teaches exactly three things — the definition of the indefinite integral, the power rule for xⁿ, and the Fundamental Theorem of Calculus for definite integrals — with seven worked examples and two tasks. She uses lowercase **c** for the constant and the bar notation **F(x)|ₐᵇ**. She does **not** cover substitution, trigonometric or exponential integrals, ln|x|, Riemann sums, or area properties. Learn her seven examples cold; they are the shape of the exam questions.

## The 7 most examinable things this week

1. **Definition (slide 4).** "Suppose that f is a continuous real-number function of a variable x. The indefinite integral of f is a function F such that **F′(x) = f(x)** added to the constant of integration c." Written: **∫f(x)dx = F(x) + c.**
2. **The whole point of Example 1: c is not optional.** G(x) = x² is *not* the only function whose derivative is 2x. Any real number c can be added to G, because **[G(x) + c]′ = 2x + 0 = 2x = g(x)**. Therefore **∫2x dx = x² + c**, where c can be any real number. Writing ∫2x dx = x² is an incomplete answer.
3. **Power rule (slide 7).** **∫xⁿ dx = x^(n+1)/(n+1) + c**, where n is a real number with **n ≠ −1**. Raise the power by one, then divide by the new power. It fails at n = −1 because n + 1 = 0 and you would be dividing by zero.
4. **Negative powers go through the same rule** — rewrite 2/x⁷ as 2x⁻⁷ first. The new exponent is −7 + 1 = −6 and you divide by −6, so the sign flips.
5. **Linearity (Example 4).** Split the integral term by term and pull each constant out front: ∫(11x¹⁰ − 4x⁹ + 1)dx = ∫11x¹⁰dx − ∫4x⁹dx + ∫1dx. Note ∫1dx = x comes from the power rule with n = 0: x^(0+1)/(0+1) = x.
6. **Fundamental Theorem of Calculus (slide 11).** "Let f be a continuous function of x on the interval [a, b]. If F(x) is an antiderivative of f(x), then **∫ₐᵇ f(x)dx = F(b) − F(a)**." Sometimes written **∫ₐᵇ f(x)dx = F(x)|ₐᵇ**.
7. **A definite integral evaluates to a number** (slide 11: "the result will usually be a number"), and it carries **no + c** — the constant cancels: (F(b) + c) − (F(a) + c) = F(b) − F(a).

## Indefinite integrals — the lecturer's build

**Introduction (slide 3).** "When we differentiate a function, we see its rate of change. When we integrate a function, we see its accumulated value. The indefinite integral of a function is the collection of all its possible antiderivatives. The definite integral of a function over an interval is the total area between the curve and the independent-variable axis in that interval."

**The argument in Example 1 (slides 5–6), in her order:**
- Start from f(x) = x². Its derivative is f′(x) = 2x.
- Now look at ∫2x dx. Rename the function being integrated: g(x) = 2x.
- "At first thought, it's tempting to suppose that the antiderivative of g is the function G such that G(x) = x²."
- "But the situation isn't quite so simple, because G isn't the only function of x that can be differentiated to get g. Any real number c can be added to G."
- Reason: **[G(x) + c]′ = 2x + 0 = 2x = g(x)** — "the derivative of the constant is always 0."
- Conclusion: **∫2x dx = x² + c**, c any real number.

**The one reliable check.** Her whole argument is "when we differentiate the result, we always get g back again." So: differentiate your answer. If you recover the integrand, the integral is right.

### Worked Example 2 (slide 7) — the power rule applied straight

∫x⁴dx. Using the formula, n = 4, so
**∫x⁴dx = x^(4+1)/(4+1) + c = x⁵/5 + c.**

### Worked Example 3 (slide 8) — negative exponent

∫(2/x⁷)dx. "The integral ∫(2/x⁷)dx can be written as ∫2x⁻⁷dx, implying that n = −7." Therefore
**∫(2/x⁷)dx = ∫2x⁻⁷dx = 2·x^(−7+1)/(−7+1) + c = 2·x⁻⁶/(−6) + c = −1/(3x⁶) + c.**

Read the two moves: **rewrite the fraction as a negative power first**, then let the rule do the arithmetic. Dividing by −6 is what produces the minus sign; 2/(−6) = −1/3.

### Worked Example 4 (slide 9) — splitting a polynomial

∫(11x¹⁰ − 4x⁹ + 1)dx. "The above integral can be split and evaluated in the following manner":

∫(11x¹⁰ − 4x⁹ + 1)dx = ∫11x¹⁰dx − ∫4x⁹dx + ∫1dx
= 11·x^(10+1)/(10+1) − 4·x^(9+1)/(9+1) + 1·x^(0+1)/(0+1) + C
= 11·x¹¹/11 − 4·x¹⁰/10 + 1·x¹/1 + C
= **x¹¹ − (2/5)x¹⁰ + x + C.**

Note 4/10 reduces to 2/5, and the constant term 1 is handled by the power rule with **n = 0**.

### TASK 1 (slide 10) — set by the lecturer

**Evaluate the integral ∫(2x² − 6x − 3)dx.**

Solution: split and apply the rule to each term.
∫2x²dx = 2·x³/3 = (2/3)x³ ; ∫6x dx = 6·x²/2 = 3x² ; ∫3 dx = 3x.
**∫(2x² − 6x − 3)dx = (2/3)x³ − 3x² − 3x + c.**
Check by differentiating: 2x² − 6x − 3 ✓

## Definite integrals — the lecturer's build

**Slide 11.** "When a definite integral is evaluated, the result will usually be a number. Definite integrals can be evaluated by applying the following Fundamental Theorem of Calculus.
**Theorem.** Let f be a continuous function of x on the interval [a, b]. If F(x) is an antiderivative of f(x), then
**∫ₐᵇ f(x)dx = F(b) − F(a).**
Sometimes, this is written as **∫ₐᵇ f(x)dx = F(x)|ₐᵇ**."

### Worked Example 1 (slide 12)

∫₀³ 4x dx. "By the above Fundamental Theorem of Calculus, f(x) = 4x and F(x) = 2x². Therefore,"
**∫₀³ 4x dx = 2x²|₀³ = 2(3² − 0²) = 18.**

Her habit worth copying: the coefficient 2 is **factored outside** the evaluation, so you substitute only into x² and subtract. What is substituted is **F**, not f — f(3) − f(0) = 12 − 0 = 12 is the wrong number.

### Worked Example 2 (slide 13) — negative lower limit

∫₋₁⁵ (3x² − 6)dx. "Here, we can have f(x) = 3x² and g(x) = −6, so that F(x) = x³ and G(x) = −6x. Therefore,"

∫₋₁⁵ (3x² − 6)dx = 3∫₋₁⁵ x²dx − 6∫₋₁⁵ dx
= x³|₋₁⁵ − 6x|₋₁⁵
= (5³ − (−1)³) − 6(5 − (−1))
= 126 − 36 = **90.**

The trap the example is built around: **(−1)³ = −1**, so 5³ − (−1)³ = 125 + 1 = **126**, not 124. And 5 − (−1) = 6, not 4.

*(The slide's second line is misprinted as "− 6∫₋₁⁵ x dx". It must be ∫₋₁⁵ dx, i.e. ∫₋₁⁵ 1 dx, since G(x) = −6x. Every line after it is correct and the answer 90 is correct — copy the corrected line above, not the slide's.)*

### Worked Example 3 (slide 14) — a negative antiderivative

∫₂³ (1/x²)dx. "From the given integral, we have f(x) = 1/x² = x⁻² so that F(x) = −1/x. Therefore,"
**∫₂³ (1/x²)dx = (−1/x)|₂³ = −(1/3 − 1/2) = 1/6.**

Two things at once: 1/x² is **rewritten as x⁻²** so the power rule applies (giving x⁻¹/(−1) = −1/x), and the minus is **factored out** of the evaluation so the bracket is (upper − lower) = 1/3 − 1/2 = −1/6, then negated to +1/6.

### TASK 2 (slide 15) — set by the lecturer

**Evaluate the integral ∫₋₁² (7x − 5)dx.**

Solution: F(x) = 7x²/2 − 5x.
At x = 2: 7(4)/2 − 5(2) = 14 − 10 = 4.
At x = −1: 7(1)/2 − 5(−1) = 7/2 + 5 = 17/2.
**∫₋₁² (7x − 5)dx = 4 − 17/2 = −9/2 = −4.5.**

A negative answer is perfectly legitimate — the definite integral is a signed quantity, and most of this interval lies below the axis.

### Her closing SUMMARY slide (16)

- An indefinite integral is of the form **∫f(x)dx = F(x) + c**, where c is the constant of integration.
- Indefinite integrals are evaluated using **∫xⁿdx = x^(n+1)/(n+1) + c**, n a real number with **n ≠ −1**.
- A definite integral is evaluated using the Fundamental Theorem of Calculus. It results as **∫ₐᵇ f(x)dx = F(b) − F(a)**.

## Commonly confused

- **Dropping + c.** The entirety of her Example 1 exists to stop this. ∫2x dx = x² scores badly; ∫2x dx = x² + c is the answer.
- **Raise then divide, not raise then multiply.** ∫x⁴dx = x⁵/5, not 5x⁵. Differentiation multiplies by the old power; integration divides by the new one.
- **n = −1 is excluded**, and the reason is arithmetic: n + 1 = 0. Do not try to force x⁰/0.
- **Negative exponents flip signs.** ∫2x⁻⁷dx divides by −6, so the answer is **negative**: −1/(3x⁶). Students routinely leave it as +1/(3x⁶).
- **Rewrite fractions and roots as powers before integrating.** 2/x⁷ → 2x⁻⁷; 1/x² → x⁻². The rule only sees xⁿ.
- **Substitute into F, not f.** ∫₀³4x dx = 2x²|₀³, not 4x|₀³.
- **Negative limits.** (−1)³ = −1 and subtracting it **adds**. Example 2's 126 depends entirely on getting this right.
- **Upper minus lower, in that order.** F(b) − F(a). Reversing it flips the sign of the whole answer.
- **A definite integral has no + c**; an indefinite one is not a number. Answering "x²/… + c" to ∫ₐᵇ, or a bare number to ∫f(x)dx, is a category error.
- **∫1 dx = x**, not 1 and not 0. It is the power rule with n = 0.
- **∫[f·g]dx is not (∫f)(∫g).** The deck only ever splits **sums, differences and constant multiples** — that is all linearity licenses.
- **Check by differentiating.** It is the lecturer's own justification and it catches every one of the errors above in ten seconds.
