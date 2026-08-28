# Monday — MTH_102 nightly check

*Higher-order derivatives as concepts: what the second, third and nth derivatives mean, the prime, Leibniz dⁿy/dxⁿ and Dⁿ notations and why they are written that way, the physical reading as velocity, acceleration and jerk, and what the sign of f″(x) says about concavity, points of inflection and the second-derivative test.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The symbol d²y/dx² is correctly read as:
a) the square of dy/dx, since the numerator and the denominator have both been squared
b) the operator d/dx applied twice to y, i.e. d/dx(dy/dx) — the superscripts count differentiations
c) the derivative of y with respect to the quantity x², i.e. differentiating against a squared variable
d) dy/dx divided once more by dx, so a further division by the increment

**2.** For a particle moving in a straight line with displacement s(t), s‴(t) is:
a) the acceleration, since acceleration is the third quantity after position and speed
b) the cube of the velocity
c) zero for every motion, because acceleration is constant
d) the jerk — the rate of change of the acceleration with respect to time

**3.** f is a polynomial of degree 5. Which is true?
a) f⁽⁵⁾(x) is a non-zero constant and f⁽⁶⁾(x) = 0 for all x
b) f⁽⁵⁾(x) = 0 for all x, since five differentiations exhaust a degree-5 polynomial
c) f⁽⁵⁾(x) is linear in x and f⁽⁶⁾(x) is a non-zero constant
d) no derivative of f is ever identically zero, because a polynomial can be differentiated indefinitely

**4.** At a point where f′(a) = 0, finding f″(a) > 0 tells you that:
a) the curve is rising at x = a, since a positive second derivative means the function is increasing
b) the curve is concave up at x = a, so the stationary point is a local maximum
c) the curve is concave up at x = a, so the stationary point is a local minimum
d) x = a is a point of inflection, because f″(a) ≠ 0 rules out a turning point

**5.** For a twice-differentiable f, "f″(c) = 0" means:
a) c is certainly a point of inflection
b) c is only a candidate: it is a point of inflection if f″ actually changes sign at c
c) c is certainly a stationary point of f
d) f is a straight line near c, since zero curvature means no bending

**6.** A car's velocity is negative and its acceleration is positive. The car is:
a) moving backwards and speeding up, since a positive acceleration always increases speed
b) instantaneously at rest, since the two opposite signs cancel
c) moving backwards but slowing down, since velocity and acceleration have opposite signs
d) moving forwards, because the sign of the acceleration fixes the direction of travel

**7.** A company's profit satisfies P′(t) > 0 and P″(t) < 0. Then:
a) profit is falling, because the second derivative is negative
b) profit is rising at an ever-increasing rate
c) profit is exactly at its maximum value at this instant
d) profit is still rising, but by less and less as time goes on

**8.** For f(x) = x³, which pair of values is correct?
a) f″(x) = 6x and [f′(x)]² = 9x⁴
b) f″(x) = 9x⁴, since the double prime is shorthand for the derivative squared
c) f″(x) = 6x and [f′(x)]² = 3x⁴
d) f″(x) = 6x² and [f′(x)]² = 9x⁴

**9. (explain why)** Explain what d²y/dx² instructs you to do, why the superscripts sit on the d and on the dx rather than on y and on x, and why d²y/dx² and (dy/dx)² are different objects. Give one function where the two are visibly different.

**10. (explain why)** A student says "f″(x) > 0 means the function is increasing." State precisely what f″(x) > 0 does mean, and give a function that is decreasing on an interval while f″ > 0 throughout that interval.

**11. (explain why)** Explain, in terms of what each derivative measures, why acceleration is the *second* derivative of displacement, and why "negative acceleration" does not by itself mean "slowing down". State the correct test for speeding up.

**12. (explain why)** Explain why a polynomial of degree n must have f⁽ⁿ⁾(x) equal to a non-zero constant and f⁽ⁿ⁺¹⁾(x) = 0, and say what that constant is for f(x) = axⁿ. What does this say about how many orders of derivative a polynomial model can carry information in?

---

## Answers

**1. b** — *Leibniz notation is an operator applied repeatedly; the superscripts are counters, not exponents.* d²y/dx² is (d/dx)(d/dx)y, so the "2" records that the whole operator d/dx has acted twice — hence one 2 on the d and one on the dx. (a) reads it as an algebraic square, which is (dy/dx)², a genuinely different function; (c) attaches the 2 to the variable x alone, which would be differentiation with respect to x², a different thing again; (d) treats dy/dx as a real fraction and divides once more, but dy/dx is a single symbol standing for a limit, not a quotient of two numbers.

**2. d** — *Each derivative of displacement steps one rung up the rate-of-change ladder.* s′ = velocity, s″ = acceleration, s‴ = jerk (rate of change of acceleration), s⁽⁴⁾ = jounce. (a) is off by one — it counts s itself as a "derivative"; (b) reads the primes as powers; (c) assumes uniform acceleration, which is a special case (s quadratic in t), not a general truth — any cubic or higher s(t) has non-zero jerk.

**3. a** — *Each differentiation lowers a polynomial's degree by exactly one, so the orders run out one step later than students expect.* Degree 5 → 4 → 3 → 2 → 1 → 0: after five differentiations you are left with a constant (5!·leading coefficient ≠ 0), and the sixth kills it. (b) is off by one in the fatal direction, stopping the count one step early; (c) is off by one the other way; (d) confuses "infinitely differentiable" with "never zero" — a polynomial can always be differentiated again, but from some order on the answer is the zero function.

**4. c** — *The second-derivative test: at a stationary point, positive concavity means the curve bends upwards, so the point is the bottom of a bowl.* f′(a) = 0 makes the tangent horizontal, and f″(a) > 0 makes the gradient increasing through a — negative just before, zero at a, positive just after, i.e. a minimum. (a) confuses f″ > 0 with f′ > 0, concavity with increase; (b) gets the concavity right but inverts the conclusion; (d) confuses the two zero-tests — an inflection needs f″ to change sign, and f″(a) ≠ 0 is exactly what rules an inflection *out*.

**5. b** — *f″(c) = 0 is necessary but not sufficient for an inflection; the concavity has to actually change.* y = x⁴ has y″ = 12x², which is 0 at x = 0 but non-negative on both sides — the curve is concave up throughout, so x = 0 is a minimum, not an inflection. (a) is the standard error, treating a necessary condition as sufficient; (c) confuses f″ = 0 (candidate inflection) with f′ = 0 (stationary point) — for y = x⁴ + x both happen to be different points; (d) confuses "the second derivative vanishes at one point" with "the second derivative is identically zero", which is what a straight line requires.

**6. c** — *Speed changes according to whether velocity and acceleration have the same sign, not according to the sign of the acceleration alone.* Since d/dt(½v²) = v·a, the speed |v| falls exactly when v·a < 0. Here v < 0 and a > 0, so v·a < 0: the car is travelling in the negative direction and its speed is decreasing. (a) treats "positive acceleration" as "getting faster", ignoring the direction of travel; (b) invents a cancellation — velocity and acceleration are independent quantities and neither forces the other to be zero; (d) confuses the sign of a with the direction of motion, which is fixed by the sign of v.

**7. d** — *The first derivative gives the direction of change, the second gives how that rate is itself changing.* P′ > 0 says profit is increasing; P″ < 0 says the rate of increase is falling, so the graph rises while bending over (concave down). (a) reads P″ as if it were P′; (b) ignores the sign of P″ entirely; (c) confuses P″ < 0 with P′ = 0 — a maximum needs the *first* derivative to vanish, and here it does not.

**8. a** — *The prime counts differentiations; squaring multiplies a derivative by itself. They are unrelated operations.* f′(x) = 3x², so f″(x) = 6x, whereas [f′(x)]² = (3x²)² = 9x⁴. (b) reads the double prime as a square, giving 9x⁴ where 6x belongs; (c) squares the power of x but forgets to square the coefficient 3; (d) differentiates 3x² by multiplying by the exponent but never reducing the power, leaving 6x² instead of 6x.

**9.** *Concept: d²y/dx² is repeated application of the operator d/dx, not an algebraic square.* d²y/dx² instructs you to differentiate y with respect to x, then differentiate the result with respect to x again: (d/dx)(dy/dx). Because it is the *operator* d/dx that is repeated, the counter goes on the d in the numerator and on the whole dx in the denominator — d²y/d²x would wrongly attach it to the variable, and no d may be cancelled, because dy/dx is a single symbol for a limit and not a ratio of two quantities. (dy/dx)² is by contrast one derivative multiplied by itself. For y = x³: d²y/dx² = 6x, while (dy/dx)² = (3x²)² = 9x⁴ — different degree, different value at every x except where they coincide. A dimensional check settles it: with y in metres and x in seconds, d²y/dx² is in m/s² but (dy/dx)² is in m²/s².

**10.** *Concept: f′ controls whether the curve rises; f″ controls only how the curve bends.* f″(x) > 0 means the **gradient is increasing** — the curve is concave up, lying above each of its tangent lines. It says nothing at all about whether f itself is rising: the gradient may be increasing from −5 to −1 and still be negative throughout. Example: f(x) = e^{−x}. Then f′(x) = −e^{−x} < 0 for every x, so f is decreasing everywhere; but f″(x) = e^{−x} > 0 for every x, so f is concave up everywhere. A simpler instance is f(x) = x² on x < 0: f′ = 2x < 0 (falling) while f″ = 2 > 0 (concave up). The four sign combinations of f′ and f″ are independent.

**11.** *Concept: each derivative measures the rate of change of the one below it; the sign of a alone does not determine what happens to speed.* Velocity is the rate of change of displacement, v = ds/dt. Acceleration is the rate of change of velocity, a = dv/dt = d/dt(ds/dt) = d²s/dt² — it is second because it is one rate of change applied to another, not because of anything about the units. "Negative acceleration" means the velocity is **decreasing** (becoming more negative or less positive), which is not the same as the speed |v| falling. Since d/dt(½v²) = v·a, speed increases when **v and a have the same sign** and decreases when they have opposite signs. So a particle with v = −4 m/s and a = −2 m/s² is speeding up, moving faster and faster in the negative direction, despite the negative acceleration.

**12.** *Concept: differentiation lowers polynomial degree by exactly one, so the information runs out at a known order.* Differentiating axᵏ gives kaxᵏ⁻¹: the degree drops by exactly 1 each time and the leading coefficient stays non-zero (k ≠ 0 while k ≥ 1). Starting from degree n, after n differentiations the degree is 0 — a constant — and after n + 1 it is the zero function, which then stays zero forever. For f(x) = axⁿ the successive leading coefficients are an, an(n−1), an(n−1)(n−2), …, so f⁽ⁿ⁾(x) = **a·n!**, e.g. f(x) = 3x⁵ gives f⁽⁵⁾ = 3·120 = 360. The consequence for modelling: a polynomial of degree n carries genuine information in only n orders of derivative. A quadratic displacement model has constant acceleration and zero jerk built in — it cannot describe changing acceleration, so if jerk matters you need at least a cubic.
