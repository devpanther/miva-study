# Monday — MTH_102 nightly check

*Differentiation concepts: the derivative from first principles, its geometric meaning, the notations dy/dx, f′(x), D_x y and higher orders, and the basic rules — constant, power, constant multiple, sum and difference.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Which of these is the definition of the derivative of f at x?
a) lim_{h→0} [f(x+h) − f(x)]/h
b) lim_{h→0} [f(x+h) − f(x)]/x
c) lim_{x→0} [f(x+h) − f(x)]/h
d) [f(x+h) − f(x)]/h evaluated at h = 0

**2.** Differentiating f(x) = 1/x from first principles gives:
a) −1/x², after combining the fractions and cancelling the h
b) 1/x², since subtracting the two fractions gives h in the numerator
c) −1/[x(x+h)], which is the value of the quotient
d) −2/x³, by the power rule applied to the reciprocal

**3.** d/dx (1/∛x) =
a) −(1/3)x^{−4/3}   b) (1/3)x^{−4/3}   c) −(1/3)x^{2/3}   d) −3x^{−4/3}

**4.** If f(x) = 5x³ − 7x + 2π, then f′(x) =
a) 15x² − 7   b) 15x² − 7 + 2π   c) 15x² − 7 + 2   d) 15x² − 7x

**5.** For y = f(x), which statement is **false**?
a) dy/dx, y′, f′(x) and D_x y all denote the same derivative.
b) d²y/dx² means the derivative of dy/dx, i.e. differentiate the function twice.
c) dy/dx is the quotient of two small quantities dy and dx, so a dx may be cancelled against a dx elsewhere.
d) f′(a) is a number: the gradient of the tangent to y = f(x) at the point where x = a.

**6.** "f′(2) = 3" means:
a) the value of f at x = 2 is 3
b) the tangent to y = f(x) at x = 2 has gradient 3, so near x = 2 a small increase δ in x raises y by about 3δ
c) the graph rises 3 units for every 1 unit of x, at every point of the curve
d) the average rate of change of f between x = 0 and x = 2 is 3

**7.** For y = (3x⁴ − 2x)/x², dy/dx =
a) 6x + 2/x²   b) 6x − 2/x²   c) (12x³ − 2)/(2x)   d) 6x + 2/x³

**8.** If f(x) = 2x⁴ − x³ + 5x, then f″(x) =
a) 8x³ − 3x² + 5   b) 24x² − 6x   c) 48x − 6   d) (8x³ − 3x² + 5)²

**9. (explain why)** Using the difference quotient, explain why the derivative of any constant function f(x) = c is 0, and say precisely how "f′(x) = 0" differs in meaning from "f(x) = 0".

**10. (explain why)** A student writes: "the power rule gives d/dx(x²) = 2x, so the same rule gives d/dx(2ˣ) = x·2^{x−1}." Explain exactly what condition the power rule requires, why the second statement fails it, and state the correct derivative of 2ˣ.

**11. (explain why)** Explain why f′(x) = lim_{h→0} [f(x+h) − f(x)]/h cannot be evaluated by simply putting h = 0, and how the limit work of Weeks 3–4 gets round it. Illustrate with f(x) = x².

**12. (explain why)** A student differentiates y = 4x³ correctly as y′ = 12x², then differentiates y = (4x)³ the same way and again writes 12x². Explain which rule has been misapplied and give the correct derivative.

---

## Answers

**1. a** — *The derivative is the limit of the difference quotient as the increment tends to zero.* The increment is h, so h is what is divided by and h is what tends to 0. (b) divides by x instead of the increment, which would not even have the units of a gradient; (c) lets the wrong variable tend to 0 — x is held fixed while the chord shrinks; (d) is the quotient with h = 0 substituted, which is 0/0 and undefined — the whole point of the limit is to avoid that substitution.

**2. a** — *First principles on a reciprocal: combine the fractions before cancelling.* [1/(x+h) − 1/x]/h = [x − (x+h)]/[h·x(x+h)] = −h/[h·x(x+h)] = −1/[x(x+h)] → −1/x² as h → 0. (b) reverses the subtraction (x + h − x instead of x − (x+h)) and so loses the minus sign; (c) is the correct quotient but stops before letting h → 0, so it is not yet a derivative; (d) differentiates 1/x² rather than 1/x.

**3. a** — *Power rule with a negative fractional exponent: rewrite first, then subtract 1 from the exponent.* 1/∛x = x^{−1/3}, so the derivative is (−1/3)x^{−1/3−1} = −(1/3)x^{−4/3}. (b) drops the minus sign that the negative exponent supplies; (c) adds 1 to the exponent instead of subtracting (−1/3 + 1 = 2/3); (d) uses the reciprocal of the exponent, 3, as the coefficient instead of the exponent itself.

**4. a** — *Constant rule and constant multiple rule.* 2π is a number, so its derivative is 0; the coefficients 5 and 7 stay put while only the powers of x change. (b) copies the constant down instead of killing it; (c) treats 2π as though the π were the variable; (d) differentiates 5x³ correctly but leaves the x on the linear term, confusing d/dx(7x) = 7 with 7x.

**5. c** — *dy/dx is a single symbol for a limit, not a ratio of two numbers.* It is the limit of the genuine ratio Δy/Δx, but dy and dx are not separately defined quantities that can be cancelled; the chain rule dy/dx = (dy/du)(du/dx) only looks like cancellation because of a theorem, not because it is arithmetic on fractions. (a), (b) and (d) are all true: the four notations are interchangeable, the second derivative is the derivative of the derivative, and evaluating f′ at a point gives a number, the tangent gradient.

**6. b** — *The derivative is a local, instantaneous rate of change: the gradient of the tangent at one point.* (a) confuses f′(2) with f(2) — the derivative's value with the function's value; (c) turns a local gradient into a global one, which would make f a straight line; (d) is the gradient of a chord (an average rate of change over an interval), which is what the derivative is the limit of, not what it equals.

**7. a** — *Rewrite a quotient as separate powers before differentiating; watch the sign a negative exponent produces.* (3x⁴ − 2x)/x² = 3x² − 2x^{−1}, so dy/dx = 6x − 2(−1)x^{−2} = 6x + 2x^{−2}. (b) keeps the leading minus and forgets that the exponent −1 supplies a second one, so two minus signs are collapsed into one; (c) differentiates numerator and denominator separately, which is not a rule at all; (d) reduces the exponent from −1 to −3 instead of −2.

**8. b** — *The second derivative is obtained by differentiating twice, in order.* f′(x) = 8x³ − 3x² + 5, and differentiating again gives 24x² − 6x. (a) stops after one differentiation; (c) is f‴(x) — one differentiation too many; (d) reads the double prime as an exponent and squares the first derivative.

**9.** *Concept: a constant function has zero change, so every difference quotient is exactly 0 before any limit is taken.* For f(x) = c, f(x+h) − f(x) = c − c = 0, so the quotient is 0/h = 0 for every h ≠ 0, and the limit of the constant 0 is 0. Geometrically the graph is a horizontal line, whose tangent everywhere is that same horizontal line, of gradient 0. "f′(x) = 0" says the **output never changes** as x changes — the height is fixed, at whatever value c happens to be; "f(x) = 0" says the **output itself is zero** — the graph is the x-axis. f(x) = 7 has f′(x) = 0 but f(x) ≠ 0 anywhere.

**10.** *Concept: the power rule needs a variable base and a constant exponent; 2ˣ has the opposite arrangement.* d/dx(xⁿ) = n·xⁿ⁻¹ is proved for a fixed number n sitting in the exponent and x in the base. In 2ˣ the base 2 is fixed and the **exponent** is the variable, so the rule does not apply and "x·2^{x−1}" is meaningless as a derivative. The correct rule is d/dx(aˣ) = aˣ·ln a, so **d/dx(2ˣ) = 2ˣ ln 2**. Quick sanity check: 2ˣ grows without bound in a way proportional to its own size, and aˣ ln a reproduces that; x·2^{x−1} would be 0 at x = 0, whereas the tangent to 2ˣ at x = 0 clearly has positive slope (ln 2 ≈ 0.69).

**11.** *Concept: the difference quotient is 0/0 at h = 0, so it must be simplified algebraically before the limit is taken.* Setting h = 0 immediately gives [f(x) − f(x)]/0 = 0/0, which is indeterminate — it has no value. The Week 3–4 method is to do algebra that is valid for every h ≠ 0 (expand, subtract, factor h out, cancel it), producing an expression that is defined at h = 0, and only then substitute. For f(x) = x²: [(x+h)² − x²]/h = (2xh + h²)/h = h(2x + h)/h = 2x + h for h ≠ 0, and letting h → 0 gives **f′(x) = 2x**. The cancellation is legal precisely because h is never actually equal to 0 — it only approaches it.

**12.** *Concept: the constant multiple rule applies to a constant multiplying the whole function, not to a constant sitting inside a bracket that is then raised to a power.* In 4x³ the 4 multiplies x³, so d/dx(4x³) = 4·3x² = 12x². In (4x)³ the 4 is **inside** the cube and gets cubed too: (4x)³ = 4³x³ = 64x³, so the derivative is **192x²**. The safest route at this stage is to simplify the bracket before differentiating; the same answer comes from the chain rule, 3(4x)²·4 = 3·16x²·4 = 192x². A quick check at x = 1 confirms the scale: (4x)³ is 64 times bigger than x³, so its gradient must be 64 times bigger than 3x², not 4 times.
