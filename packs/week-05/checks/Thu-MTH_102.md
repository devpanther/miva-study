# Thursday — MTH_102 nightly check

*Differentiation problems: the product rule, the quotient rule, the chain rule, and multi-step differentiation where two of them have to be combined and the answer factorised.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** d/dx [(2x + 1)(x² − 3)] =
a) 6x² + 2x − 6   b) 4x   c) −2x² − 2x − 6   d) 2x³ − 2x + 2

**2.** d/dx [(x² − 4)/(x + 1)] =
a) (x² + 2x + 4)/(x + 1)²   b) (−x² − 2x − 4)/(x + 1)²   c) (x² + 2x + 4)/(x + 1)   d) 2x

**3.** d/dx [√(3x² + 5)] =
a) 3x/√(3x² + 5)   b) 1/(2√(3x² + 5))   c) 6x/√(3x² + 5)   d) 3x·√(3x² + 5)

**4.** d/dx [x³(2x − 5)⁴] =
a) x²(2x − 5)³(14x − 15)   b) x²(2x − 5)³(10x − 15)   c) 24x²(2x − 5)³   d) 12x²(2x − 5)³

**5.** d/dx [(x + 1)³/x²] =
a) (x + 1)²(x − 2)/x³   b) (x + 1)²(2 − x)/x³   c) (x + 1)²(x − 2)/x   d) 3(x + 1)²/(2x)

**6.** d/dx [e^{3x²}] =
a) 6x·e^{3x²}   b) e^{3x²}   c) 6x·e^{6x}   d) 3x²·e^{3x² − 1}

**7.** d/dx [sin³(2x)] =
a) 6 sin²(2x) cos(2x)   b) 3 sin²(2x) cos(2x)   c) 3 sin²(2x)   d) 6 sin(2x) cos(2x)

**8.** d/dx [(x³ + 4x)/x] =
a) 2x   b) −2x   c) (3x² + 4)/x   d) 3x² + 4

**9. (explain why)** A student writes d/dx[(3x + 1)⁷] = 7(3x + 1)⁶. Using the chain rule as dy/du · du/dx, say exactly what has been lost and give the correct answer. Then test the student's method on (3x + 1)², which you can expand, and show what it gets wrong.

**10. (explain why)** Explain why the quotient rule numerator is u′v − uv′ and not uv′ − u′v, and demonstrate the difference on y = x²/x, whose derivative you already know without any rule.

**11. (explain why)** Differentiate y = (2x + 3)(x − 1)² twice over: once with the product and chain rules, once by expanding first. Show the two answers agree, and say which method you would use in an exam and why.

**12. (explain why)** For y = x² sin(3x), explain how you decide which rule is the *outer* structure and which is needed *inside* it, then carry out the differentiation.

---

## Answers

**1. a** — *Product rule: (uv)′ = u′v + uv′, each derivative paired with the other, undifferentiated, factor.* 2(x² − 3) + (2x + 1)(2x) = 2x² − 6 + 4x² + 2x = 6x² + 2x − 6, which expanding first (2x³ + x² − 6x − 3) confirms. (b) is "differentiate each factor and multiply", 2 × 2x; (c) is the product rule written with the quotient rule's minus sign; (d) pairs each derivative with its own factor instead of the other one.

**2. a** — *Quotient rule: (u′v − uv′)/v², with the derivative of the numerator first.* [2x(x + 1) − (x² − 4)(1)]/(x + 1)² = (2x² + 2x − x² + 4)/(x + 1)² = (x² + 2x + 4)/(x + 1)². (b) has the two numerator terms in the wrong order, which negates the whole answer; (c) forgets that the denominator is squared; (d) differentiates numerator and denominator separately, which is not a rule.

**3. a** — *Chain rule on a half power: rewrite √u as u^{1/2}, so the derivative is u′/(2√u).* (1/2)(3x² + 5)^{−1/2}·6x = 3x/√(3x² + 5). (b) drops the inner derivative 6x altogether; (c) keeps the inner derivative but loses the 1/2 that the square root supplies; (d) adds 1 to the exponent instead of subtracting, leaving the root in the numerator.

**4. a** — *Product rule with a chain rule inside it, then factor out the lowest power of the repeated bracket.* 3x²(2x − 5)⁴ + x³·4(2x − 5)³·2 = x²(2x − 5)³[3(2x − 5) + 8x] = x²(2x − 5)³(14x − 15). (b) applies the product rule correctly but drops the inner derivative 2, giving 3(2x−5) + 4x = 10x − 15; (c) multiplies the two derivatives together instead of using the product rule; (d) does both wrong things at once — multiplies the derivatives and drops the inner derivative.

**5. a** — *Quotient rule with a chain rule in the numerator, then cancel one x.* [3(x + 1)²·x² − (x + 1)³·2x]/x⁴ = x(x + 1)²[3x − 2(x + 1)]/x⁴ = (x + 1)²(x − 2)/x³. (b) reverses the numerator order, turning x − 2 into 2 − x; (c) divides by x² instead of (x²)² = x⁴; (d) differentiates top and bottom separately.

**6. a** — *Chain rule on e^u: e^u·u′, and the exponent itself is untouched.* Inner function 3x² has derivative 6x, so the answer is 6x·e^{3x²}. (b) drops the inner derivative, which would only be right for eˣ; (c) differentiates the exponent *inside* the exponential as well as outside, which double-counts it; (d) applies the power rule to an exponential, whose exponent is not a constant.

**7. a** — *A double composition: the outer power, then sin, then the inner 2x — every layer contributes a factor.* y = [sin(2x)]³, so dy/dx = 3[sin(2x)]²·cos(2x)·2 = 6 sin²(2x) cos(2x). (b) handles the power and the sine but forgets the innermost derivative 2; (c) stops after the power rule, never differentiating the sine; (d) uses the wrong outer power — it is the derivative of sin²(2x), not sin³(2x).

**8. a** — *Simplify before differentiating: a single-term denominator cancels and the quotient rule is unnecessary.* (x³ + 4x)/x = x² + 4, so the derivative is 2x. (The quotient rule, used correctly, gives the same: [(3x² + 4)x − (x³ + 4x)]/x² = 2x³/x² = 2x.) (b) is the quotient rule with the numerator terms swapped; (c) differentiates the numerator and leaves the denominator alone; (d) differentiates numerator and denominator separately.

**9.** *Concept: the chain rule multiplies by the derivative of the inner function; omitting it is the single commonest lost mark.* Writing y = u⁷ with u = 3x + 1 gives dy/du = 7u⁶ and du/dx = **3**, so dy/dx = 7(3x + 1)⁶ × 3 = **21(3x + 1)⁶**. The student has computed dy/du and stopped, i.e. differentiated with respect to the bracket rather than with respect to x. Test on (3x + 1)²: expanding gives 9x² + 6x + 1, whose derivative is 18x + 6 = 6(3x + 1); the student's method gives 2(3x + 1) = 6x + 2, which is three times too small — exactly the factor du/dx = 3 that was dropped.

**10.** *Concept: the quotient rule is not symmetric — swapping the numerator terms negates the whole derivative.* The rule is (u/v)′ = (u′v − uv′)/v²: the derivative of the **top** times the bottom comes first. Take y = x²/x, which simplifies to y = x, so dy/dx = 1. With u = x², v = x: correct order gives (2x·x − x²·1)/x² = (2x² − x²)/x² = x²/x² = **1** ✓. Swapped order gives (x²·1 − 2x·x)/x² = −x²/x² = **−1** ✗ — the right size but the wrong sign, every time. The order is forced by the way the rule is derived (from the product rule applied to u = (u/v)·v), so it cannot be chosen for convenience.

**11.** *Concept: product-plus-chain and expand-first are two valid routes to one derivative, and they must agree.* **Route 1.** u = 2x + 3, u′ = 2; v = (x − 1)², v′ = 2(x − 1). dy/dx = 2(x − 1)² + (2x + 3)·2(x − 1) = 2(x − 1)[(x − 1) + (2x + 3)] = **2(x − 1)(3x + 2)**. **Route 2.** y = (2x + 3)(x² − 2x + 1) = 2x³ − 4x² + 2x + 3x² − 6x + 3 = 2x³ − x² − 4x + 3, so dy/dx = 6x² − 2x − 4 = 2(3x² − x − 2) = **2(3x + 2)(x − 1)** — the same. They must agree because both differentiate the same function, and a function has only one derivative. In an exam the rules are safer: expanding is only available for small integer powers (it is hopeless for (x − 1)⁷ or for sin(3x)), and each extra expansion is another chance for an arithmetic slip — but expanding a small case is an excellent way to *check* a rule you are unsure of, as in question 9.

**12.** *Concept: identify the outermost operation first; the chain rule then handles whatever sits inside a factor.* Read the expression as a whole: y is one thing **multiplied by** another, x² and sin(3x), so the **outer** structure is a product and the product rule governs the layout. Only when you go to differentiate the second factor does a composition appear — sin(of 3x) — so the chain rule is used *inside* the product rule, not instead of it. Then u = x², u′ = 2x; v = sin(3x), v′ = cos(3x)·3 = 3cos(3x). Hence **dy/dx = 2x sin(3x) + 3x² cos(3x)**. The two commonest wrecks are writing 2x·3cos(3x) (product of derivatives) and writing 2x sin(3x) + x² cos(3x) (chain rule's inner derivative 3 dropped).
