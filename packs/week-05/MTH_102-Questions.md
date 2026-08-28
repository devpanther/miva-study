# MTH_102 — Week 5 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 6, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** Using f′(x) = lim_{h→0} [f(x+h) − f(x)]/h with f(x) = x² + x, the difference quotient simplifies (before the limit is taken) to:
a) 2x + h + 1   b) h + 1   c) 2x + h² + 1   d) 2x + 1

**2.** If y = 3√x − 2/x², then dy/dx is:
a) 3/(2√x) + 4/x³   b) 3/(2√x) − 4/x³   c) 3/(2√x) + 4/x²   d) (3/2)√x + 4/x³

**3.** d/dx [x² sin x] =
a) 2x cos x   b) 2x sin x + x² cos x   c) 2x cos x + x² sin x   d) 2x sin x − x² cos x

**4.** d/dx [(x² + 1)/(x − 3)] =
a) (x² − 6x − 1)/(x − 3)²   b) (−x² + 6x + 1)/(x − 3)²   c) (x² − 6x − 1)/(x − 3)   d) 2x

**5.** d/dx [(2x³ + 1)⁵] =
a) 5(2x³ + 1)⁴   b) 30x²(2x³ + 1)⁴   c) 6x²(2x³ + 1)⁴   d) 15x²(2x³ + 1)⁴

**6.** d/dx (3ˣ) =
a) x·3^{x−1}   b) 3ˣ   c) 3ˣ ln 3   d) 3ˣ/ln 3

**7.** d/dx [ln(x² + 1)] =
a) 2x/(x² + 1)   b) 1/(x² + 1)   c) 1/(2x)   d) 2x·ln(x² + 1)

**8.** If y = x⁵ − 4x³, then d²y/dx² =
a) 5x⁴ − 12x²   b) 20x³ − 24x   c) 60x² − 24   d) (5x⁴ − 12x²)²

**9.** For the curve x² + xy = 4, dy/dx =
a) −(2x + y)/x   b) −2   c) (2x + y)/x   d) −(2x + y)/(x + y)

**10.** The slope of the tangent to y = x³ − 2x at the point where x = 2 is:
a) 4   b) 10   c) 12   d) 3x² − 2

**11.** d/dx [x²(3x + 1)⁴] =
a) 2x(3x + 1)³(9x + 1)   b) 24x(3x + 1)³   c) 2x(3x + 1)³(5x + 1)   d) 8x(3x + 1)³

**12.** d/dx [sin(x²)] =
a) 2x cos(x²)   b) cos(x²)   c) 2 sin x cos x   d) 2x cos(2x)

## Section B — Short answer (3)

**13.** Differentiate f(x) = 2x³ − 5x **from first principles**, showing the difference quotient in full, and state clearly at which step you are allowed to let h → 0 and why you may not do it earlier.

**14.** Differentiate y = (x² + 1)³/(2x − 1), stating which rules you use and in which order, and leave your answer fully factorised.

**15.** For the circle x² + y² = 25, find dy/dx by implicit differentiation and hence the equation of the tangent at the point (3, 4). Explain why a dy/dx factor appears when you differentiate y².

## Answers

1. **a** — *The difference quotient is simplified before the limit is taken*: f(x+h) − f(x) = (2xh + h² + h), and dividing by h gives 2x + h + 1. (b) comes from expanding (x+h)² as x² + h² and losing the cross term 2xh; (c) divides only some terms by h; (d) is the limit itself, i.e. the answer to the next step, not to the one asked.
2. **a** — *Power rule after rewriting, with the negative-exponent sign trap*: y = 3x^{1/2} − 2x⁻², so dy/dx = (3/2)x^{−1/2} + 4x⁻³. (b) forgets that (−2)·(−2) = +4; (c) fails to reduce the exponent; (d) adds 1 to the exponent instead of subtracting.
3. **b** — *Product rule (uv)′ = u′v + uv′*. (a) is "differentiate each factor and multiply"; (c) pairs each derivative with the wrong factor; (d) imports the quotient rule's minus sign.
4. **a** — *Quotient rule*: [2x(x−3) − (x²+1)]/(x−3)² = (x² − 6x − 1)/(x−3)². (b) has the numerator terms swapped (uv′ − u′v); (c) forgets to square the denominator; (d) differentiates top and bottom separately.
5. **b** — *Chain rule*: 5(2x³+1)⁴ × inner derivative 6x². (a) drops the inner derivative entirely; (c) keeps the inner derivative but loses the outer factor 5; (d) uses 3x² as the inner derivative, forgetting the coefficient 2.
6. **c** — *Variable exponent, not variable base*: d/dx(aˣ) = aˣ ln a. (a) misapplies the power rule, which needs a constant exponent; (b) treats every exponential as if it were eˣ; (d) is the integration formula.
7. **a** — *Chain rule on ln u: u′/u*. (b) drops the inner derivative; (c) differentiates the inside and then puts it in the denominator; (d) treats ln like a power.
8. **b** — *Second derivative = differentiate twice*: y′ = 5x⁴ − 12x², y″ = 20x³ − 24x. (a) stops at the first derivative; (c) is the third derivative; (d) reads the double prime as a square.
9. **a** — *Implicit differentiation, with the product rule on xy*: 2x + (y + x·dy/dx) = 0, so dy/dx = −(2x + y)/x. (b) differentiates xy as x·dy/dx only, dropping the y term; (c) drops the sign when transposing; (d) differentiates xy as x·dy/dx + y·dy/dx.
10. **b** — *f′(a) is the gradient of the tangent at x = a*: y′ = 3x² − 2, so y′(2) = 10. (a) evaluates the function, not the derivative; (c) differentiates x³ but drops the −2x term; (d) never substitutes x = 2, so it is a function, not a slope.
11. **a** — *Product rule with the chain rule inside it*: 2x(3x+1)⁴ + 12x²(3x+1)³ = 2x(3x+1)³(9x + 1). (b) multiplies the two derivatives together; (c) applies the product rule correctly but drops the inner derivative 3; (d) multiplies the derivatives and drops the inner derivative too.
12. **a** — *Chain rule on a composite, not a power of sin*: outer sin → cos, inner x² → 2x. (b) drops the inner derivative; (c) is d/dx(sin²x), a different function; (d) also differentiates the argument inside the cosine.
13. **f′(x) = 6x² − 5.** f(x+h) = 2(x+h)³ − 5(x+h) = 2x³ + 6x²h + 6xh² + 2h³ − 5x − 5h. Subtracting f(x): 6x²h + 6xh² + 2h³ − 5h = h(6x² + 6xh + 2h² − 5). Dividing by h (legitimate because h ≠ 0 while the limit is being taken) gives 6x² + 6xh + 2h² − 5; **only now** may h → 0, giving **6x² − 5**. Substituting h = 0 earlier gives 0/0, an indeterminate form, exactly the situation Weeks 3–4 dealt with by simplifying first. — *Derivative as the limit of the difference quotient.*
14. **dy/dx = 2(x² + 1)²(5x² − 3x − 1)/(2x − 1)².** Quotient rule outermost, chain rule inside it to differentiate the numerator: u = (x²+1)³ so u′ = 3(x²+1)²·2x = 6x(x²+1)²; v = 2x − 1 so v′ = 2. Then dy/dx = [6x(x²+1)²(2x−1) − 2(x²+1)³]/(2x−1)² = 2(x²+1)²[3x(2x−1) − (x²+1)]/(2x−1)² = 2(x²+1)²(5x² − 3x − 1)/(2x−1)². — *Quotient rule with an embedded chain rule; factor out the lowest power of the repeated bracket.*
15. **dy/dx = −x/y; at (3, 4) the slope is −3/4 and the tangent is 3x + 4y = 25** (from y − 4 = −(3/4)(x − 3)). Differentiating both sides with respect to x: 2x + 2y·dy/dx = 0. The dy/dx appears because y is a **function of x**, so y² is a composite function of x and the chain rule gives d/dx(y²) = 2y·(dy/dx); writing 2y alone would be differentiating with respect to y, not x. — *Implicit differentiation as the chain rule applied to y-terms.*
