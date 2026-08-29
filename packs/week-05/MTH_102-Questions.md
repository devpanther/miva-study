# MTH_102 — Week 5 retention set

*Elementary Mathematics II (Calculus) · sit this seven days after the week's study, notes closed.*

## Multiple choice

**1.** The first-principles definition of the derivative is f'(x) = lim(h→0) of which expression?
a) [f(x+h) + f(x)]/h
b) [f(x+h) − f(x)]/h
c) [f(x) − f(x−h)]/(x−h)
d) [f(x+h) − f(x)]/(x+h)

**2.** Before the limit is taken, [f(a+h) − f(a)]/h is the gradient of:
a) the tangent to the curve at x = a
b) the normal to the curve at x = a
c) the chord joining (a, f(a)) and (a+h, f(a+h))
d) the horizontal line through (a, f(a))

**3.** d/dx (5/x²) =
a) −10/x³
b) 10/x³
c) −5/x³
d) −10/x

**4.** Which rule is needed for y = (4x³ − 1)⁷?
a) product rule
b) quotient rule
c) power rule alone
d) chain rule

**5.** If y = x²(3x + 1), then dy/dx =
a) 6x
b) 3x² + 2x
c) 9x² + 2x
d) 6x³ + 2x

**6.** The quotient rule states d/dx (u/v) =
a) (uv' − u'v)/v²
b) (u'v − uv')/v²
c) (u'v − uv')/v
d) u'/v'

**7.** For x² + y² = 25, dy/dx =
a) −x/y
b) −y/x
c) x/y
d) −2x

**8.** Differentiating from first principles, f(x) = x² gives [f(x+h) − f(x)]/h equal to:
a) 2x
b) x + h
c) 2x + h²
d) 2x + h

**9.** If x = t³ and y = 2t, then dy/dx =
a) 6t²
b) 2/3
c) 2/(3t²)
d) 3t²/2

**10.** For f(x, y) = x²y³, ∂f/∂y =
a) 3x²y²
b) 2xy³
c) 2xy²
d) 6xy²

**11.** If y = x⁵ − 4x², then d²y/dx² =
a) 5x⁴ − 8x
b) 20x³ − 8
c) 20x⁴ − 8x
d) 25x⁸

**12.** A student writes d/dx[(2x + 5)⁶] = 6(2x + 5)⁵. The missing step is:
a) reducing the index to 4 instead of 5
b) adding the derivative of the constant 5
c) expanding the bracket before differentiating
d) multiplying by the derivative of the inner function, 2

## Short answer

**S1.** Differentiate f(x) = 2x² + x from first principles, showing every line of the limit.

**S2.** Differentiate y = (3x + 2)/(x − 1), stating the rule used and simplifying the numerator.

**S3.** For the curve y = x³ − 6x, find dy/dx, then find the equation of the tangent at the point where x = 2.

## Answers

**1.** b — the increment in the function over the increment in x, taken as h → 0.
**2.** c — the two named points are joined by a chord; only its limiting position is the tangent.
**3.** a — 5x⁻² differentiates to 5·(−2)x⁻³ = −10/x³.
**4.** d — the base is a function of x, not a bare x, so a factor 12x² is owed.
**5.** c — expand: 3x³ + x², so dy/dx = 9x² + 2x (same as product rule 2x(3x+1) + 3x²).
**6.** b — derivative of the top first, minus the top times derivative of the bottom, over v².
**7.** a — 2x + 2y·dy/dx = 0 gives dy/dx = −x/y.
**8.** d — (x+h)² − x² = 2xh + h², divided by h gives 2x + h; the limit then gives 2x.
**9.** c — dy/dt = 2, dx/dt = 3t², and dy/dx = (dy/dt)/(dx/dt) = 2/(3t²).
**10.** a — x² is held constant while y³ differentiates to 3y².
**11.** b — first derivative 5x⁴ − 8x, differentiated again gives 20x³ − 8.
**12.** d — the chain rule requires 6(2x+5)⁵ · 2 = 12(2x+5)⁵.

**S1.** f(x+h) = 2(x+h)² + (x+h) = 2x² + 4xh + 2h² + x + h; subtract f(x) to get 4xh + 2h² + h; divide by h to get 4x + 2h + 1; let h → 0 to get f'(x) = 4x + 1.
**S2.** Quotient rule with u = 3x+2, v = x−1: dy/dx = [3(x−1) − (3x+2)(1)]/(x−1)² = (3x − 3 − 3x − 2)/(x−1)² = −5/(x−1)².
**S3.** dy/dx = 3x² − 6; at x = 2 the gradient is 6 and y = 8 − 12 = −4; tangent y + 4 = 6(x − 2), i.e. y = 6x − 16.
