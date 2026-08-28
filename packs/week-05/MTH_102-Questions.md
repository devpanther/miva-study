# MTH_102 — Week 5 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 6, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** The derivative of f at x is defined as:
a) lim_{h→0} [f(x + h) − f(x)]/h   b) lim_{h→0} [f(x + h) − f(x)]/(x + h)   c) [f(x + h) − f(x)]/h for the smallest possible h   d) lim_{h→0} [f(x + h) + f(x)]/h

**2.** Geometrically, f′(a) is:
a) the slope of the secant line joining (a, f(a)) to (a + h, f(a + h))
b) the slope of the tangent to y = f(x) at (a, f(a)), obtained as the limit of secant slopes
c) the equation of the tangent line to y = f(x) at (a, f(a))
d) the rate at which x changes with respect to y at the point (a, f(a))

**3.** Differentiating f(x) = 3x² − 5x + 2 from first principles gives f′(x) =
a) 6x + 3h − 5   b) 6x − 5   c) 6x   d) 6x² − 5

**4.** If f(x) = 4x³ − 2/x + 5√x, then f′(x) =
a) 12x² − 2/x² + 5/(2√x)   b) 12x² + 2/x² + 5/(2√x)   c) 12x² + 2/x² + (5/2)√x   d) 12x² + 2/x² + 5/(2x)

**5.** d/dx (x² + π⁴) equals:
a) 2x   b) 2x + 4π³   c) 2x + π⁴   d) 2x + 1

**6.** If y = (x² + 3)(2x − 1), then dy/dx =
a) 4x   b) 6x² − 2x + 6   c) 4x² − 2x   d) 2x² + 6

**7.** If y = x/(x + 1), then dy/dx =
a) 1/(x + 1)²   b) −1/(x + 1)²   c) 1   d) 1/(x + 1)

**8.** If y = (4x − 7)⁶, then dy/dx =
a) 6(4x − 7)⁵   b) 24(4x − 7)⁶   c) 24(4x − 7)⁵   d) 6(4x − 7)⁵(4x)

**9.** If y = x²(x³ + 1)⁴, then dy/dx, fully factored, is:
a) 2x(x³ + 1)³(7x³ + 1)   b) 24x³(x³ + 1)³   c) 2x(x³ + 1)³(x³ + 2x + 1)   d) 12x⁴(x³ + 1)³

**10.** d/dx (2ˣ) equals:
a) x·2^(x−1)   b) 2ˣ   c) 2ˣ ln 2   d) 2ˣ/ln 2

**11.** If y = x⁴, then d²y/dx² =
a) 4x³   b) 12x²   c) 16x⁶   d) 24x

**12.** Differentiating x² + y² = 25 implicitly gives dy/dx =
a) 2x + 2y   b) −x/y   c) x/y   d) −y/x

## Section B — Short answer (3)

**13.** Differentiate f(x) = 1/x **from first principles**, showing every algebraic step. Then explain what the limit is doing, why the cancellation of h is legitimate even though the quotient reads 0/0 at h = 0, and why the answer could not have been obtained by simply substituting h = 0 into the original quotient.

**14.** State the product, quotient and chain rules exactly, each with its condition. Then differentiate y = (2x − 1)³/(x² + 1) completely, naming at each step which rule you are using and why, and simplify the answer to fully factored form.

**15.** (i) Find dy/dx for x² + xy + y² = 7 by implicit differentiation, and explain precisely why every y-term acquires a factor of dy/dx — i.e. which rule forces it. (ii) For the parametric curve x = t² + 1, y = t³ − t, find dy/dx in terms of t and state the condition under which the method is valid. (iii) For f(x, y) = x²y³, write down ∂f/∂x and ∂f/∂y and say in one sentence what distinguishes a partial derivative from an ordinary one.

## Answers

**1. a** — *The derivative is the limit of the difference quotient: the change in f divided by the change in x, as the change in x shrinks to nothing.* (b) divides by x + h rather than by the increment h, so it is not a rate of change at all. (c) treats the derivative as a very-small-h approximation; there is no "smallest possible h", and the derivative is an exact limit, not an estimate. (d) adds where the definition subtracts, which measures nothing.
**2. b** — *The secant through (a, f(a)) and (a + h, f(a + h)) has slope [f(a+h) − f(a)]/h; letting h → 0 swings the secant onto the tangent, and the limiting slope is f′(a).* (a) is the pre-limit object, correct only before the limit is taken; (c) confuses a number with a line — the tangent's equation is y = f(a) + f′(a)(x − a), of which f′(a) is only the slope; (d) inverts the roles, which would be dx/dy.
**3. b** — *First principles: expand f(x + h), subtract f(x), factor out h, cancel while h ≠ 0, then let h → 0.* f(x + h) − f(x) = 6xh + 3h² − 5h = h(6x + 3h − 5); dividing by h gives 6x + 3h − 5; letting h → 0 gives **6x − 5**. (a) is the quotient with the limit never taken — the commonest incomplete answer. (c) differentiates only the leading term, treating −5x as a constant. (d) applies the power rule by multiplying by the exponent without reducing it.
**4. b** — *Rewrite roots and reciprocals as powers first: f(x) = 4x³ − 2x⁻¹ + 5x^(1/2).* Then 12x² − 2(−1)x⁻² + 5(1/2)x^(−1/2) = **12x² + 2/x² + 5/(2√x)**. (a) keeps the minus sign on the middle term, forgetting that the negative exponent supplies a second minus; (c) multiplies by ½ but does not reduce the exponent, leaving (5/2)x^(1/2); (d) mishandles x^(−1/2) as x⁻¹, giving 5/(2x) instead of 5/(2√x).
**5. a** — *π⁴ is a number, not a power of the variable, so the constant rule kills it.* d/dx(x²) = 2x and d/dx(π⁴) = 0. (b) applies the power rule to π as though it were the variable; (c) copies the constant through unchanged, as in integration; (d) treats the constant as differentiating to 1.
**6. b** — *Product rule: u′v + uv′, two added terms.* u = x² + 3, u′ = 2x; v = 2x − 1, v′ = 2. So 2x(2x − 1) + (x² + 3)(2) = 4x² − 2x + 2x² + 6 = **6x² − 2x + 6**. Check by expanding first: y = 2x³ − x² + 6x − 3, y′ = 6x² − 2x + 6 ✓. (a) is u′v′ = 2x·2, the product-of-derivatives error, and is of the wrong degree entirely; (c) is the first term alone; (d) is the second term alone — and note (c) + (d) = (b), so both are half-finished correct work.
**7. a** — *Quotient rule (u′v − uv′)/v², in that order, over v squared.* [1·(x + 1) − x·1]/(x + 1)² = **1/(x + 1)²**, positive everywhere, as the graph's rising branches require. (b) reverses the numerator and gives the exact negative; (c) is u′/v′ = 1/1, the quotient-of-derivatives error, claiming a constant slope for a curve that flattens toward y = 1; (d) forgets to square the denominator.
**8. c** — *Chain rule: outer derivative at the inner function, times the inner derivative.* 6(4x − 7)⁵ · 4 = **24(4x − 7)⁵**. (a) drops the inner derivative — the commonest error in the topic, wrong by a factor of 4 everywhere. (b) applies the inner derivative but never reduces the outer exponent. (d) multiplies by the inner *function's* leading term rather than its derivative, producing the wrong structure as well as the wrong number.
**9. a** — *Outermost structure is a product; the second factor needs the chain rule, and the inner derivative 3x² must survive.* u = x², u′ = 2x; v = (x³ + 1)⁴, v′ = 4(x³ + 1)³·3x² = 12x²(x³ + 1)³. So y′ = 2x(x³ + 1)⁴ + 12x⁴(x³ + 1)³ = 2x(x³ + 1)³[(x³ + 1) + 6x³] = **2x(x³ + 1)³(7x³ + 1)**. (c) is the same computation with the inner derivative forgotten (v′ taken as 4(x³+1)³), which factors to 2x(x³+1)³(x³ + 2x + 1) — the closest miss. (b) is u′v′ = 2x·12x²(x³+1)³, the product-of-derivatives error. (d) is the second term alone.
**10. c** — *In 2ˣ the exponent varies and the base is fixed, so no power rule applies: d/dx(aˣ) = aˣ ln a.* (a) is the headline error, applying the power rule with the roles of base and exponent swapped. (b) is the eˣ answer, correct only when the base is e, since ln e = 1. (d) inverts the constant, which belongs to the integral ∫aˣ dx = aˣ/ln a.
**11. b** — *d²y/dx² means differentiate, then differentiate again.* y′ = 4x³, y″ = **12x²**. (a) stops after one differentiation; (c) squares the first derivative, misreading the notation as (dy/dx)²; (d) differentiates a third time.
**12. b** — *Differentiate both sides with respect to x, using the chain rule on every y-term because y is a function of x: d/dx(y²) = 2y·dy/dx.* 2x + 2y·dy/dx = 0 ⟹ dy/dx = −2x/2y = **−x/y**. (a) differentiates y² as though y were the variable of differentiation and never solves for dy/dx; (c) loses the sign when moving 2x across; (d) inverts the fraction, which would be dx/dy.
**13.** *Concept: the derivative is the limit of a difference quotient, and the algebra that removes the 0/0 is licensed by the fact that h is never zero during the approach.* **Set-up:** f′(x) = lim_{h→0} [f(x + h) − f(x)]/h with f(x) = 1/x, so the quotient is [1/(x + h) − 1/x]/h. **Combine the numerator over a common denominator:** 1/(x + h) − 1/x = [x − (x + h)]/[x(x + h)] = **−h/[x(x + h)]**. **Divide by h:** the whole quotient is −h/[x(x + h)] · 1/h = **−1/[x(x + h)]**, the h cancelling. **Take the limit:** as h → 0, x + h → x, so the expression tends to −1/(x·x) = **−1/x²**. (This agrees with the power rule, since 1/x = x⁻¹ gives −1x⁻² .) **What the limit is doing:** it reports the height the difference quotient heads for as h shrinks, and — exactly as in Week 3 — it never inspects h = 0 itself. **Why the cancellation is legitimate:** throughout the approach h is a non-zero number, so −h/[x(x + h)] ÷ h is ordinary division by a non-zero quantity; the simplified expression −1/[x(x + h)] agrees with the original quotient at every h ≠ 0, hence has the same limit. **Why substitution fails:** setting h = 0 in the original quotient gives [1/x − 1/x]/0 = 0/0, which is not a number and carries no information; substitution is valid only where an expression is already continuous, and this one is undefined at h = 0. The whole point of the derivative is that a quotient can be indeterminate at a point and still approach a definite value near it. (Domain note: x ≠ 0 throughout, and for small enough h also x + h ≠ 0.)
**14.** **The rules.** *Product:* if u and v are differentiable at x, d/dx(uv) = **u′v + uv′**. *Quotient:* if u and v are differentiable at x and **v ≠ 0**, d/dx(u/v) = **(u′v − uv′)/v²**. *Chain:* if y = f(u) with u = g(x), g differentiable at x and f differentiable at g(x), then **dy/dx = (dy/du)(du/dx) = f′(g(x))·g′(x)**. **The problem.** y = (2x − 1)³/(x² + 1). The **outermost** structure is a quotient — one whole expression divided by another — so the quotient rule governs, with u = (2x − 1)³ and v = x² + 1 (never zero, so the condition holds for all real x). The numerator is itself a **composite**, so u′ needs the **chain rule**: with outer w³ and inner w = 2x − 1, u′ = 3(2x − 1)²·**2** = **6(2x − 1)²**. The denominator needs only the power and constant rules: v′ = **2x**. **Assemble:** dy/dx = [6(2x − 1)²(x² + 1) − (2x − 1)³(2x)]/(x² + 1)². **Simplify:** the lowest power of the repeated bracket is (2x − 1)², so factor it out: = (2x − 1)²[6(x² + 1) − 2x(2x − 1)]/(x² + 1)² = (2x − 1)²[6x² + 6 − 4x² + 2x]/(x² + 1)² = (2x − 1)²(2x² + 2x + 6)/(x² + 1)² = **2(2x − 1)²(x² + x + 3)/(x² + 1)²**. **Check at x = 0:** the formula gives 2·1·3/1 = 6; directly, u = −1, u′ = 6, v = 1, v′ = 0, so (6·1 − (−1)·0)/1 = 6 ✓. Note that x² + x + 3 has discriminant 1 − 12 < 0, so it never vanishes and the only stationary point is x = ½.
**15.** *Concept: implicit, parametric and partial differentiation are all the chain rule and the ordinary rules applied under a change of what is being held fixed.* **(i) Implicit.** Differentiate x² + xy + y² = 7 term by term with respect to x, remembering that y is a **function of x**: d/dx(x²) = 2x; d/dx(xy) needs the **product rule**, giving y + x·dy/dx; d/dx(y²) needs the **chain rule** — outer w², inner w = y(x) — giving 2y·dy/dx; and d/dx(7) = 0. So 2x + y + x·dy/dx + 2y·dy/dx = 0, hence dy/dx(x + 2y) = −(2x + y) and **dy/dx = −(2x + y)/(x + 2y)** (valid where x + 2y ≠ 0). Every y-term acquires the factor dy/dx because differentiating a function *of y* with respect to *x* is differentiating a composite: the chain rule says the outer derivative must be multiplied by the rate at which the inner variable y itself changes with x, which is precisely dy/dx. The answer legitimately contains both x and y, since the relation defines y only implicitly. **(ii) Parametric.** dx/dt = 2t and dy/dt = 3t² − 1, so **dy/dx = (dy/dt)/(dx/dt) = (3t² − 1)/(2t)**, valid wherever **dx/dt ≠ 0**, i.e. t ≠ 0. This is again the chain rule: dy/dt = (dy/dx)(dx/dt), rearranged. At t = 0 the formula fails and the curve has a vertical tangent at (1, 0). **(iii) Partial.** ∂f/∂x = **2xy³** (y held constant, so y³ rides through as a constant multiplier) and ∂f/∂y = **3x²y²** (x held constant). A partial derivative differs from an ordinary one in that the function has **several independent variables** and all but one are frozen, so ∂f/∂x measures the rate of change along the x-direction alone, whereas an ordinary derivative applies to a function of a single variable and no freezing is needed.
