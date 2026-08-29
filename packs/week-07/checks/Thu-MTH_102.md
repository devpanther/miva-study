# Thursday — MTH_102 nightly check

*Integration problems: carrying out indefinite integrals by the power rule after rewriting, the ln|x| case, standard trigonometric and exponential forms, linear inner functions and substitution, evaluating definite integrals by F(b) − F(a) with changed limits, area problems where part of the curve lies below the axis, and fixing the constant from a given point.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** ∫(6x² − 8/x³ + 3/x)dx =
a) 2x³ − 4/x² + 3 ln|x| + C
b) 6x³ + 4/x² + 3 ln|x| + C
c) 2x³ + 4/x² + 3 ln|x| + C
d) 2x³ + 24/x⁴ + 3 ln|x| + C

**2.** ∫(4x − 1)⁷dx =
a) (4x − 1)⁸/32 + C   b) (4x − 1)⁸/8 + C   c) (4x − 1)⁸/2 + C   d) 28(4x − 1)⁶ + C

**3.** ∫e^{−3x}dx =
a) −3e^{−3x} + C   b) (1/3)e^{−3x} + C   c) e^{−3x}/(−3x) + C   d) −(1/3)e^{−3x} + C

**4.** ∫(2 sin x − 3 cos x)dx =
a) 2 cos x − 3 sin x + C
b) −2 cos x − 3 sin x + C
c) −2 cos x + 3 sin x + C
d) 2 cos x + 3 sin x + C

**5.** ∫_1^2 (3x² − 4x + 5)dx =
a) 10   b) −6   c) 6   d) 5

**6.** ∫_0^1 x(x² + 1)³dx =
a) 15/8   b) 15/4   c) 1/8   d) 15/16

**7.** The area enclosed between the curve y = x² − 4x and the x-axis is:
a) 64/3   b) 16/3   c) −32/3   d) 32/3

**8.** A curve satisfies dy/dx = 4x − 6 and passes through the point (1, 4). Its equation is:
a) y = 2x² − 6x + 4   b) y = 2x² − 6x + 8   c) y = 2x² − 6x   d) y = 2x² − 6x + C

**9. (explain why)** Evaluate ∫[(2x + 1)/√x]dx, showing the rewriting step in full, and explain why you may not integrate the numerator and the denominator separately. Verify your answer.

**10. (explain why)** Evaluate ∫_0^1 x²(x³ + 2)⁴dx by substitution, twice: once by changing the limits to u-values and once by converting back to x. State the number a student gets who evaluates the u-antiderivative at the original x-limits, and say exactly what has gone wrong.

**11. (explain why)** Find the total area enclosed between the curve y = x³, the x-axis and the lines x = −1 and x = 2. Explain why this is not the same as ∫_{−1}^{2} x³dx and give both numbers.

**12. (explain why)** A student writes ∫(2x + 5)³dx = (2x + 5)⁴/8 + C, which is correct, and then by the same reasoning writes ∫(x² + 5)³dx = (x² + 5)⁴/(8x) + C. Explain why the first works and the second does not, demonstrate the failure by differentiating, and integrate ∫(x² + 5)³dx correctly.

---

## Answers

**1. c** — *Rewrite as powers, then raise the power and divide by the new power; the exponent −1 is the one that goes to a logarithm.* 6x² → 6x³/3 = 2x³; −8x⁻³ → −8·x⁻²/(−2) = +4x⁻² = 4/x²; 3/x → 3 ln|x|. (a) loses the sign that dividing by −2 supplies — two negatives make a positive; (b) raises the power on the first term but forgets to divide by the new power 3; (d) differentiates the middle term instead of integrating it, giving 24x⁻⁴.

**2. a** — *For a linear inner function, integrate as a power and divide by the inner derivative as well as by the new power.* The new power is 8 and the inner derivative is 4, so the divisor is 8 × 4 = 32; check by differentiating: (1/32)·8(4x−1)⁷·4 = (4x−1)⁷ ✓. (b) divides by the new power only, dropping the inner derivative — the answer is then 4 times too big; (c) multiplies by the inner derivative instead of dividing, which is the differentiation habit applied to an integral; (d) differentiates the bracket rather than integrating it.

**3. d** — *Integrating e^{kx} divides by k; here k = −3, so a factor −1/3 appears.* Check: d/dx[−(1/3)e^{−3x}] = −(1/3)(−3)e^{−3x} = e^{−3x} ✓. (a) multiplies by the inner derivative — that is what differentiation does; (b) gets the size right but loses the minus sign, which is fatal here since the divisor is −3 and not 3; (c) divides by the whole inner function −3x rather than by its derivative, which is never legal — the divisor must be a constant.

**4. b** — *Integration reverses the derivative signs: sin integrates to −cos and cos integrates to +sin.* ∫2 sin x dx = −2 cos x and ∫(−3 cos x)dx = −3 sin x. (a) integrates sin as +cos, i.e. copies the derivative of sin instead of reversing it; (c) integrates cos as −sin, importing the minus sign from d/dx(cos x); (d) makes both errors, which is exactly the answer you get by differentiating the integrand instead of integrating it.

**5. c** — *Evaluate the antiderivative at both limits and subtract: F(b) − F(a).* F(x) = x³ − 2x² + 5x, so F(2) = 8 − 8 + 10 = 10 and F(1) = 1 − 2 + 5 = 4, giving 10 − 4 = 6. (a) substitutes the upper limit only and forgets to subtract F(1); (b) subtracts in the wrong order, F(1) − F(2), which is the value of ∫_2^1 instead; (d) substitutes into the **integrand** rather than the antiderivative: f(2) − f(1) = 9 − 4 = 5.

**6. a** — *Substitute u = x² + 1, carry the factor from du = 2x dx, and move the limits with it.* x dx = du/2 and the limits run u = 1 to u = 2, so the integral is (1/2)∫_1^2 u³du = (1/2)[u⁴/4]_1^2 = (16 − 1)/8 = 15/8. (b) treats du as x dx and so loses the factor 1/2, doubling the answer; (c) uses the correct u-antiderivative u⁴/8 but evaluates it at the **x**-limits 0 and 1, giving (1 − 0)/8 — the single most common substitution error; (d) applies the 1/2 a second time to an expression that already contains it.

**7. d** — *The curve lies below the axis between its roots, so the integral is negative and the area is its magnitude.* y = x(x − 4) meets the axis at x = 0 and x = 4, and ∫_0^4 (x² − 4x)dx = [x³/3 − 2x²]_0^4 = 64/3 − 32 = −32/3, so the area is 32/3. (c) reports the signed value as an area, and an area cannot be negative; (a) integrates x² and forgets the −4x term entirely; (b) stops at the vertex x = 2, integrating over only half the region.

**8. b** — *Integrate to get the family, then use the given point to fix C.* y = 2x² − 6x + C; substituting (1, 4): 2 − 6 + C = 4, so C = 8. (a) sets C equal to the y-coordinate of the point, which would only be right if the rest of the expression vanished there; (c) takes C = 0 because the derivative shows no constant term — but the constant is precisely the information differentiation destroyed; (d) stops at the family and never uses the point, so it does not answer the question asked.

**9.** *Concept: a quotient must be rewritten as separate powers before integrating — there is no quotient rule for integration.* Rewrite: (2x + 1)/√x = (2x + 1)x^{−1/2} = 2x^{1/2} + x^{−1/2}. Then
∫2x^{1/2}dx = 2·x^{3/2}/(3/2) = (4/3)x^{3/2}, and ∫x^{−1/2}dx = x^{1/2}/(1/2) = 2x^{1/2}.
**∫[(2x + 1)/√x]dx = (4/3)x^{3/2} + 2√x + C = (4/3)x√x + 2√x + C.**
You may not integrate top and bottom separately because integration only splits over **sums** and **constant multiples**; a quotient (or product) of two functions has no such rule, as the derivative rules that would have to be reversed — quotient and product — each produce two terms, not one. Verify by differentiating: (4/3)(3/2)x^{1/2} + 2·(1/2)x^{−1/2} = 2√x + 1/√x = (2x + 1)/√x ✓.

**10.** *Concept: after substituting, everything in the integral must be in u — including the limits.* Put u = x³ + 2, so du = 3x²dx, i.e. x²dx = du/3. **Changing the limits:** x = 0 gives u = 2 and x = 1 gives u = 3, so
∫_0^1 x²(x³ + 2)⁴dx = (1/3)∫_2^3 u⁴du = (1/3)[u⁵/5]_2^3 = (243 − 32)/15 = **211/15.**
**Converting back:** (1/3)(u⁵/5) = (x³ + 2)⁵/15, and [(x³ + 2)⁵/15]_0^1 = (3⁵ − 2⁵)/15 = (243 − 32)/15 = **211/15** ✓ — the two routes must agree, and checking one against the other is the safest habit.
A student who evaluates the u-antiderivative u⁵/15 at the x-limits 0 and 1 gets (1 − 0)/15 = **1/15**, which is wrong by a factor of over 200. The error is a mismatch of variable and limits: the numbers 0 and 1 are values of x, and once the integral has been rewritten in u the limits must be the corresponding values of u. Either change them or change back — never mix the two.

**11.** *Concept: total area needs the curve split at every point where it crosses the axis, then the absolute values added.* y = x³ crosses the axis at x = 0, so split there.
∫_{−1}^{0} x³dx = [x⁴/4]_{−1}^{0} = 0 − 1/4 = −1/4 (the curve is below the axis on that stretch), so the area of that piece is 1/4.
∫_0^2 x³dx = [x⁴/4]_0^2 = 4 − 0 = 4, above the axis.
**Total area = 1/4 + 4 = 17/4 square units.**
The plain definite integral is ∫_{−1}^{2} x³dx = [x⁴/4]_{−1}^{2} = 4 − 1/4 = **15/4**, which is smaller by 1/2 — exactly twice the sub-axis piece, because that piece was subtracted instead of added. The definite integral measures **net signed** area; "the area enclosed" means total area, so the two questions have different answers whenever the curve changes sign inside the interval. If the question had run from −2 to 2, the two numbers would have been 0 and 8.

**12.** *Concept: dividing by the inner derivative is only legal when that derivative is a constant — otherwise it is a function of x and cannot be pulled through the integral.* The first is right because the inner function 2x + 5 is **linear**: its derivative is the constant 2, and constants may be moved in and out of an integral freely. Check: d/dx[(2x+5)⁴/8] = 4(2x+5)³·2/8 = (2x+5)³ ✓.
The second is wrong because the inner derivative 2x is a **variable**. Dividing by it treats it as a constant, and differentiating the result exposes this — the quotient rule now produces a second term that has no business being there:
d/dx[(x² + 5)⁴/(8x)] = [4(x²+5)³(2x)(8x) − (x²+5)⁴·8]/(64x²) = (x² + 5)³(7x² − 5)/(8x²),
which is **not** (x² + 5)³. At x = 1 the integrand is 6³ = 216 while the differentiated "answer" gives 216·2/8 = 54 — out by a factor of 4.
Substitution does not rescue it either: u = x² + 5 needs du = 2x dx, and there is no x in the integrand to supply it. (By contrast ∫x(x² + 5)³dx **does** work, precisely because that x is present.) The correct route here is to expand:
(x² + 5)³ = x⁶ + 15x⁴ + 75x² + 125, so **∫(x² + 5)³dx = x⁷/7 + 3x⁵ + 25x³ + 125x + C.**
