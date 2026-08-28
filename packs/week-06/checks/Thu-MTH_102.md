# Thursday — MTH_102 nightly check

*Higher-order derivative problems: computing second, third and fourth derivatives of polynomials, products, quotients and composites, building the general nth-derivative formula for e^{ax}, sin(ax), 1/(ax+b) and 1/x, taking implicit second derivatives, and running displacement to velocity to acceleration on a motion problem.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** If y = 4x⁵ − 3x⁴ + 2x − 9, then d³y/dx³ =
a) 80x³ − 36x²   b) 240x² − 72x   c) 240x² − 72x + 2   d) 480x − 72

**2.** d²/dx² [x e^{2x}] =
a) e^{2x}(2x + 3)   b) 4e^{2x}   c) 4e^{2x}(x + 1)   d) e^{2x}(4x + 2)

**3.** If y = e^{3x}, then dⁿy/dxⁿ =
a) 3ⁿe^{3x}   b) 3ⁿ⁻¹e^{3x}   c) 3e^{3x}   d) e^{3x}

**4.** The fourth derivative of y = sin 2x is:
a) sin 2x   b) 16 cos 2x   c) −16 sin 2x   d) 16 sin 2x

**5.** If y = 1/x, then y⁽⁴⁾ =
a) −24/x⁵   b) 24/x⁴   c) −1/x⁵   d) 24/x⁵

**6.** For the circle x² + y² = 25, d²y/dx² =
a) −x/y   b) −25/y³   c) −1/y   d) (x² − y²)/y³

**7.** A particle moves so that s = 2t³ − 9t² + 12t (metres, t ≥ 0 seconds). Its acceleration at the **second** instant at which it is at rest is:
a) 6 m/s²   b) −6 m/s²   c) 0 m/s²   d) −18 m/s²

**8.** d²/dx² [x³ ln x] =
a) 6x ln x   b) 6x ln x + 3x   c) 6x ln x + 5x   d) 6x ln x + 2x

**9. (explain why)** Find the general nth derivative of y = 1/(3x + 1), and say separately where the sign (−1)ⁿ, the factorial n! and the power 3ⁿ each come from. State y‴ explicitly as a check.

**10. (explain why)** For y = x²e^{−x}, find d²y/dx². Then explain why the formula (uv)″ = u″v + uv″ is wrong, state the correct expansion, and show numerically at x = 1 how far the wrong formula misses by.

**11. (explain why)** For f(x) = x⁴ − 4x³, find the stationary points and classify them using the second derivative. Explain exactly what goes wrong at x = 0, what you do instead, and locate all points of inflection.

**12. (explain why)** For the curve xy = 12, find d²y/dx² twice over: once by implicit differentiation and once by making y the subject. Show the two agree, and explain why the implicit route obliges you to substitute dy/dx back in before you can finish.

---

## Answers

**1. b** — *Differentiate three times, in order; constants die at the first step and never return.* y′ = 20x⁴ − 12x³ + 2; y″ = 80x³ − 36x²; y‴ = 240x² − 72x. (a) stops after two differentiations; (c) carries the +2 down a further step, but it had already become 0 in y″; (d) is y⁽⁴⁾ — one differentiation too many.

**2. c** — *Every order needs the full product rule again, and the chain factor 2 reappears each time e^{2x} is differentiated.* y′ = e^{2x} + 2x e^{2x} = e^{2x}(1 + 2x); y″ = 2e^{2x}(1 + 2x) + e^{2x}(2) = e^{2x}(4x + 4) = 4e^{2x}(x + 1). (a) drops the chain factor 2 on the second differentiation of e^{2x}; (d) differentiates only the exponential factor of y′ and forgets the product rule's second term; (b) is "differentiate each factor and multiply" applied twice, 1 × 2e^{2x} then 4e^{2x}.

**3. a** — *Each differentiation of e^{ax} reproduces the function and leaves one more factor of a behind.* y′ = 3e^{3x}, y″ = 9e^{3x}, y‴ = 27e^{3x}, so y⁽ⁿ⁾ = 3ⁿe^{3x}. (b) is off by one, as if the first derivative supplied no factor; (c) gives only the first derivative, treating higher orders as if nothing further accumulated; (d) treats e^{3x} as though it were eˣ and forgets the chain rule entirely.

**4. d** — *The trigonometric functions cycle with period 4 while the chain factor 2 multiplies up once per order.* y′ = 2cos 2x, y″ = −4 sin 2x, y‴ = −8 cos 2x, y⁽⁴⁾ = 16 sin 2x = 2⁴ sin 2x. (a) has the cycle right but drops the inner derivative at all four steps; (b) miscounts the cycle by one, stopping at the cos stage; (c) applies a blanket (−1)ⁿ sign, but the signs run +, −, −, + over four steps, not alternately.

**5. d** — *Repeated differentiation of x⁻¹: the exponent falls by one each time, so the coefficients build the factorial and the sign alternates.* y′ = −x⁻², y″ = 2x⁻³, y‴ = −6x⁻⁴, y⁽⁴⁾ = 24x⁻⁵ = 24/x⁵; in general y⁽ⁿ⁾ = (−1)ⁿ n!/x^{n+1}, and (−1)⁴ = +1. (a) applies the alternating sign one step out of phase; (b) uses x^n instead of x^{n+1} in the denominator, forgetting that x⁻¹ has already used one power; (c) tracks the powers but never accumulates the coefficients 1, 2, 6, 24.

**6. b** — *Implicit second derivative: differentiate the first derivative, substitute dy/dx back in, then simplify with the original equation.* 2x + 2y·y′ = 0 gives y′ = −x/y. Then y″ = −[(1)(y) − x·y′]/y² = −[y − x(−x/y)]/y² = −(y² + x²)/y³ = −25/y³. (a) just repeats the first derivative; (c) differentiates −x/y as though y were a constant, which ignores that y is a function of x; (d) uses y′ = +x/y, losing the minus sign from the first derivative, which flips y² + x² to y² − x².

**7. a** — *"At rest" is v = 0, not a = 0; solve for the times first, then evaluate the second derivative at the right one.* v = 6t² − 18t + 12 = 6(t − 1)(t − 2), so the particle is at rest at t = 1 s and t = 2 s; a = 12t − 18, and at the second of those, t = 2, a = 24 − 18 = 6 m/s². (b) evaluates at t = 1, the first instant of rest; (c) confuses "at rest" with "zero acceleration" — a = 0 happens at t = 1.5 s, when v = −1.5 m/s and the particle is moving; (d) gives a(0), the initial acceleration, rather than the acceleration at the stated instant.

**8. c** — *Product rule on the first derivative as well: both of its terms must be differentiated.* y′ = 3x² ln x + x³·(1/x) = 3x² ln x + x²; y″ = [6x ln x + 3x²·(1/x)] + 2x = 6x ln x + 3x + 2x = 6x ln x + 5x. (b) differentiates the first term of y′ correctly but forgets the +x² term altogether; (d) differentiates the +x² term but drops the 3x²·(1/x) = 3x arising from the product rule inside the first term; (a) applies the false formula (uv)″ = u″v, differentiating only the polynomial factor twice.

**9.** *Concept: the general nth derivative of a negative power, with three separate sources of structure.* Write y = (3x + 1)⁻¹. Then y′ = −1(3x + 1)⁻²·3 = −3(3x + 1)⁻²; y″ = (−3)(−2)(3x + 1)⁻³·3 = 18(3x + 1)⁻³; **y‴ = 18(−3)(3x + 1)⁻⁴·3 = −162(3x + 1)⁻⁴.** In general
**y⁽ⁿ⁾ = (−1)ⁿ·n!·3ⁿ·(3x + 1)^{−(n+1)}.**
The three pieces have three separate origins: the **sign** (−1)ⁿ comes from the exponent being negative, so each differentiation brings down a negative number; the **factorial** n! comes from the magnitudes of those numbers, 1, 2, 3, …, multiplying up as the exponent falls (1, then 1·2, then 1·2·3); the **3ⁿ** comes from the chain rule, which supplies the inner derivative 3 exactly once per differentiation. Check n = 3: (−1)³·6·27 = −162 ✓, matching the direct computation.

**10.** *Concept: the second derivative of a product has three terms, not two — the cross term 2u′v′ is what the false rule loses.* With u = x², v = e^{−x}: y′ = 2x e^{−x} − x² e^{−x} = e^{−x}(2x − x²). Differentiating again, product rule once more: y″ = −e^{−x}(2x − x²) + e^{−x}(2 − 2x) = e^{−x}(x² − 2x + 2 − 2x) = **e^{−x}(x² − 4x + 2).** The formula (uv)″ = u″v + uv″ is wrong because (uv)′ = u′v + uv′ is itself a *sum of two products*, and each of them needs the product rule again: (uv)″ = (u″v + u′v′) + (u′v′ + uv″) = **u″v + 2u′v′ + uv″.** Here u″v = 2e^{−x}, 2u′v′ = 2(2x)(−e^{−x}) = −4x e^{−x}, uv″ = x²e^{−x}, and their sum is e^{−x}(x² − 4x + 2) ✓. The false formula gives e^{−x}(x² + 2); at x = 1 the correct value is e⁻¹(1 − 4 + 2) = −e⁻¹ ≈ −0.368, while the false one gives 3e⁻¹ ≈ +1.104 — wrong even in sign, missing by 4e⁻¹.

**11.** *Concept: the second-derivative test is inconclusive exactly when f″ = 0, and the fallback is the sign of f′ either side.* f′(x) = 4x³ − 12x² = 4x²(x − 3), so the stationary points are **x = 0** and **x = 3**. f″(x) = 12x² − 24x = 12x(x − 2). At x = 3, f″(3) = 36 > 0, so (3, **−27**) is a **local minimum**. At x = 0, f″(0) = 0, so the test gives no information — a zero second derivative is consistent with a maximum, a minimum or an inflection. Fall back on the sign of f′: for x < 0, 4x² > 0 and (x − 3) < 0 so f′ < 0; for 0 < x < 3, again 4x² > 0 and (x − 3) < 0 so f′ < 0. The gradient does **not change sign**, so x = 0 is neither a maximum nor a minimum — it is a **stationary point of inflection**. Inflections are where f″ = 12x(x − 2) changes sign: at **x = 0** (positive to negative) and **x = 2** (negative to positive), giving the points (0, **0**) and (2, **−16**).

**12.** *Concept: implicit second derivatives must be reduced to x and y, which forces the substitution of the first derivative.* **Implicitly:** differentiate xy = 12 with the product rule: y + x·y′ = 0, so y′ = −y/x. Differentiate again, product rule on x·y′: y′ + (y′ + x·y″) = 0, i.e. 2y′ + x·y″ = 0, so y″ = −2y′/x. This still contains y′, which is a *function of x*, not a constant — so you must put y′ = −y/x back in: y″ = −2(−y/x)/x = **2y/x²**. **Explicitly:** y = 12/x = 12x⁻¹, so y′ = −12x⁻², y″ = 24x⁻³ = **24/x³**. The two agree: substituting y = 12/x into 2y/x² gives 2(12/x)/x² = 24/x³ ✓. The general rule is that d²y/dx² must be expressed in x and y alone; leaving a dy/dx in the answer means the differentiation has not been finished.
