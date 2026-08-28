# MTH_102 — Week 6 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 7, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** If y = 2x⁶ − 5x⁴ + 3x, then d⁴y/dx⁴ =
a) 240x³ − 120x   b) 720x² − 120   c) 720x²   d) 1440x

**2.** For y = e^{−2x}, the nth derivative dⁿy/dxⁿ is:
a) −2ⁿe^{−2x}   b) 2ⁿe^{−2x}   c) (−2)ⁿe^{−2x}   d) (−2)ⁿe^{−2nx}

**3.** The nth derivative of y = sin x is:
a) sin(x + nπ/2)   b) (−1)ⁿ sin x   c) sin x for every n   d) cos(nx)

**4.** d²/dx² [x² ln x] =
a) 2 ln x + 2   b) 2/x   c) 2 ln x + 1   d) 2 ln x + 3

**5.** For f(x) = 2x³ − 9x² + 12x, the stationary point at x = 1 is:
a) a local minimum, since f″(1) = 6 > 0
b) a local maximum, since f″(1) = −6 < 0
c) a local minimum, since f″(1) = −6 < 0
d) a point of inflection, since f′(1) = 0

**6.** For y = x⁴, the point x = 0 is:
a) a point of inflection, because y″(0) = 0
b) a local maximum
c) a local minimum, even though y″(0) = 0
d) neither a stationary point nor an inflection

**7.** A particle has s = 2t³ − 15t² + 24t + 5 (m, t ≥ 0 s). Its velocity is least at t =
a) 1 s   b) 4 s   c) 0 s   d) 2.5 s

**8.** On an interval a curve has f′(x) < 0 and f″(x) < 0 throughout. On that interval the curve is:
a) falling, and falling ever more steeply
b) falling, but flattening out
c) rising, and bending downwards
d) falling with a constant gradient

**9.** For the curve x² − y² = 16, d²y/dx² =
a) 16/y³   b) −16/y³   c) 1/y   d) (y² + x²)/y³

**10.** If u and v are functions of x, then (uv)″ =
a) u″v + uv″   b) u″v″   c) 2u′v′   d) u″v + 2u′v′ + uv″

**11.** If y = (3x − 2)⁵, then y‴ =
a) 60(3x − 2)²   b) 540(3x − 2)²   c) 1620(3x − 2)²   d) 180(3x − 2)²

**12.** For s(t) = t⁴ − 4t³ + 6t² (m, s), the jerk at t = 2 s is:
a) 12 m/s³   b) 24 m/s³   c) 24t − 24 m/s³   d) 8 m/s³

## Section B — Short answer (3)

**13.** Find d²y/dx² for y = x²e^{3x}, showing each use of the product and chain rules. Then state what the (incorrect) formula u″v + uv″ would have produced, identify the missing term by name, and give its value here.

**14.** For f(x) = 2x³ − 3x² − 36x + 5, find and classify all stationary points using the second-derivative test, and find the point of inflection. Say what you would have had to do instead if f″ had come out as 0 at one of the stationary points, and why the test is silent there.

**15.** A student writes: "d²y/dx² has a 2 above and a 2 below, so for y = x³ I can just square dy/dx and get 9x⁴." Explain what d²y/dx² actually instructs you to do, compute it correctly, and give a dimensional argument (using displacement, velocity and acceleration) showing that the two expressions cannot possibly denote the same quantity.

## Answers

1. **b** — *Differentiate four times; each pass drops the degree by one and kills the term below it.* y′ = 12x⁵ − 20x³ + 3, y″ = 60x⁴ − 60x², y‴ = 240x³ − 120x, y⁽⁴⁾ = 720x² − 120. (a) stops at the third derivative; (c) drops the constant that differentiating −120x produces; (d) is y⁽⁵⁾, one step too far.
2. **c** — *e^{ax} reproduces itself and deposits one factor of a per differentiation, sign included.* y′ = −2e^{−2x}, y″ = 4e^{−2x}, y‴ = −8e^{−2x}, so y⁽ⁿ⁾ = (−2)ⁿe^{−2x} and the sign alternates with n. (a) keeps a single minus sign whatever n is, so it is wrong for every even n; (b) drops the sign entirely; (d) multiplies the exponent by n as well, confusing the chain factor with the exponent itself.
3. **a** — *The sine derivatives cycle cos, −sin, −cos, sin with period 4, which is exactly a phase shift of π/2 per differentiation.* Check n = 1: sin(x + π/2) = cos x ✓; n = 2: sin(x + π) = −sin x ✓. (b) alternates every step, but the true signs run +, −, −, +; (c) treats sin like eˣ, as if it were its own derivative; (d) changes the frequency instead of the phase, which is what a chain rule on sin(nx) would do — a different function altogether.
4. **d** — *Product rule at both orders; the second term of the first derivative must be differentiated too.* y′ = 2x ln x + x²(1/x) = 2x ln x + x; y″ = [2 ln x + 2x(1/x)] + 1 = 2 ln x + 2 + 1 = 2 ln x + 3. (a) forgets to differentiate the +x; (c) drops the 2x(1/x) = 2 from the product rule inside the first term; (b) differentiates only the logarithm and abandons the product rule.
5. **b** — *Second-derivative test: negative second derivative at a stationary point means concave down, hence a maximum.* f′ = 6x² − 18x + 12 = 6(x − 1)(x − 2), so x = 1 is stationary; f″ = 12x − 18, so f″(1) = −6 < 0 and the point is a local maximum. (a) makes the arithmetic slip 18 − 12 instead of 12 − 18; (c) evaluates f″ correctly but inverts the rule; (d) confuses "f′ = 0" with an inflection — inflections need f″ to change sign.
6. **c** — *f″(c) = 0 is a necessary, not a sufficient, condition for an inflection.* y′ = 4x³ = 0 at x = 0, so the point is stationary; y″ = 12x² is 0 at x = 0 but positive on both sides, so the concavity never changes and the first-derivative sign runs − then +, giving a minimum. (a) is the classic error of reading a zero second derivative as an inflection; (b) inverts the direction; (d) ignores that y′(0) = 0, which makes it stationary by definition.
7. **d** — *Velocity is least where its own derivative, the acceleration, is zero — not where the velocity itself is zero.* v = 6t² − 30t + 24, a = 12t − 30 = 0 at t = 2.5 s, and a changes from negative to positive there, so v is at a minimum (v(2.5) = −13.5 m/s). (a) and (b) are the roots of v = 0, i.e. the instants of *rest*, which answer a different question; (c) takes the initial instant, where v = 24 m/s is in fact the largest velocity of the early motion.
8. **a** — *f′ gives direction, f″ gives what is happening to that gradient; both negative means a negative gradient becoming more negative.* The curve descends, and because f″ < 0 the gradient keeps decreasing (say −1, then −3, then −7), so the descent steepens. (b) is the picture for f′ < 0 with f″ > 0, the opposite concavity; (c) misreads the sign of f′; (d) is the case f″ = 0, a straight line.
9. **b** — *Implicit second derivative, then simplify using the original equation.* 2x − 2y·y′ = 0 gives y′ = x/y; y″ = [y − x·y′]/y² = [y − x²/y]/y² = (y² − x²)/y³, and since x² − y² = 16, y² − x² = −16, so y″ = −16/y³. (a) uses x² − y² = 16 the right way up but forgets the numerator is y² − x²; (c) differentiates x/y as though y were constant; (d) imports the circle's y″ = −(y² + x²)/y³ structure, which belongs to x² + y² = r², not to a hyperbola.
10. **d** — *(uv)′ = u′v + uv′ is a sum of two products, so differentiating it needs the product rule twice more, giving three terms.* (u′v + uv′)′ = (u″v + u′v′) + (u′v′ + uv″) = u″v + 2u′v′ + uv″. (a) is the standard error, losing the cross term; (b) is "differentiate each factor twice and multiply"; (c) keeps only the cross term.
11. **c** — *The chain factor 3 reappears once per differentiation and multiplies up with the falling exponents.* y′ = 5(3x−2)⁴·3 = 15(3x−2)⁴; y″ = 15·4(3x−2)³·3 = 180(3x−2)³; y‴ = 180·3(3x−2)²·3 = 1620(3x−2)², i.e. 5·4·3·3³. (a) drops the inner derivative at all three stages (5·4·3 only); (d) picks it up once; (b) picks it up twice.
12. **b** — *Jerk is the third derivative of displacement, so differentiate three times before substituting.* v = 4t³ − 12t² + 12t, a = 12t² − 24t + 12, jerk = 24t − 24; at t = 2 this is 24 m/s³. (a) is a(2) = 12, one order short; (d) is v(2) = 8, two orders short; (c) is the correct jerk function but never evaluated at t = 2, so it is not a value.
13. **d²y/dx² = e^{3x}(9x² + 12x + 2).** u = x², v = e^{3x}. y′ = 2x e^{3x} + x²·3e^{3x} = e^{3x}(3x² + 2x) — the chain rule supplies the 3 on e^{3x}. Differentiating again, product rule once more: y″ = 3e^{3x}(3x² + 2x) + e^{3x}(6x + 2) = e^{3x}(9x² + 6x + 6x + 2) = e^{3x}(9x² + 12x + 2). The formula u″v + uv″ gives 2e^{3x} + x²·9e^{3x} = e^{3x}(9x² + 2); the missing piece is the **cross term 2u′v′** = 2(2x)(3e^{3x}) = **12x e^{3x}**, exactly the difference. — *Repeated product rule with an embedded chain rule; (uv)″ = u″v + 2u′v′ + uv″.*
14. **Local maximum at (−2, 49), local minimum at (3, −76), inflection at (½, −13.5).** f′(x) = 6x² − 6x − 36 = 6(x − 3)(x + 2), so the stationary points are x = 3 and x = −2. f″(x) = 12x − 6. f″(3) = 30 > 0 ⟹ concave up ⟹ minimum, f(3) = 54 − 27 − 108 + 5 = −76. f″(−2) = −30 < 0 ⟹ concave down ⟹ maximum, f(−2) = −16 − 12 + 72 + 5 = 49. f″ = 0 at x = ½, and 12x − 6 changes sign there, so (½, −13.5) is a genuine point of inflection. Had f″ been 0 at a stationary point, the test would be **inconclusive**: a zero second derivative is compatible with a maximum, a minimum or a stationary inflection (compare y = −x⁴, y = x⁴ and y = x³, all with y′ = y″ = 0 at the origin). The fallback is the **first-derivative sign test** — examine the sign of f′ just left and just right of the point: − then + is a minimum, + then − a maximum, no change a stationary inflection. — *Second-derivative test and its failure case.*
15. **d²y/dx² = 6x, not 9x⁴.** d²y/dx² is shorthand for (d/dx)(dy/dx): apply the operator d/dx to y, then apply it to the result. The superscripts are counters recording *how many times* the operator has acted — one on the d in the numerator, one on the whole dx in the denominator — so nothing is being squared and no d may be cancelled, because dy/dx is a single symbol for a limit rather than a ratio of two numbers. For y = x³: dy/dx = 3x², so d²y/dx² = 6x, whereas (dy/dx)² = (3x²)² = 9x⁴ — a different function of different degree. Dimensionally: if y is a displacement in metres and x a time in seconds, then dy/dx is a velocity in m/s, d²y/dx² is an acceleration in m/s², but (dy/dx)² is a velocity squared in m²/s². An acceleration and a squared velocity have different units, so no algebraic identity could ever equate them. — *Leibniz notation as a repeated operator, not an algebraic power.*
