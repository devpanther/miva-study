# Monday — MTH_102 nightly check

*Week 5 differentiation treated conceptually: what the derivative is, and why. Covers the first-principles definition f'(x) = lim(h to 0) [f(x+h) - f(x)]/h and why h must approach zero without reaching it; the geometric picture of the tangent as the limiting position of a chord; why each rule takes the form it does (product rule as two separate contributions to the change in a product, quotient rule as a consequence of writing u/v as u times v to the power minus one, chain rule as composition of rates); what higher-order derivatives measure; why implicit differentiation produces a dy/dx factor while partial differentiation does not; and what fails when a function has a corner. No computation is asked for beyond checking a claim.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** In f'(a) = lim(h to 0) [f(a+h) - f(a)]/h, why must h be allowed to approach 0 but never actually be set equal to 0?
a) Because substituting h = 0 gives 0/0, which has no value; the limit names the number the quotient approaches without ever attaining it
b) Because substituting h = 0 would make f(a+h) undefined for most functions of interest
c) Because h must remain strictly positive, since a negative h would measure the chord on the wrong side of the point
d) Because h = 0 is in fact permitted, and the limit notation is a historical convention retained for tidiness

**2.** Before the limit is taken, what does the quantity [f(a+h) - f(a)]/h represent on the graph of y = f(x)?
a) The gradient of the tangent to the curve at x = a
b) The gradient of the chord joining the points (a, f(a)) and (a+h, f(a+h))
c) The average of the tangent gradients at x = a and at x = a+h
d) The vertical gap between the curve and its tangent line at x = a

**3.** Why does the derivative of a product uv contain two terms, u'v + uv', rather than a single term?
a) Because differentiation is applied to each factor in turn and the two results are then added
b) Because u and v each have their own tangent line, and the tangent to the product is the sum of those two tangents
c) Because over a small increment the product changes by (change in u) times v plus u times (change in v), the product of the two changes being negligible in the limit
d) Because the product rule is simply the chain rule applied once to u and once to v

**4.** In dy/dx = (dy/du)(du/dx), why are the two rates multiplied rather than added?
a) Because du cancels in the fraction (dy/du)(du/dx), and cancellation is only valid for products
b) Because addition would give the wrong physical units, whereas multiplication keeps the result dimensionless
c) Because the outer function must be evaluated at u rather than at x, and multiplication is the only operation that respects that substitution
d) Because rates of change compose: if u changes k times as fast as x, and y changes m times as fast as u, then y changes mk times as fast as x

**5.** Why is the numerator of the quotient rule u'v - uv' rather than uv' - u'v?
a) Because the numerator has to come out positive whenever the quotient is an increasing function
b) Because the derivative of a denominator carries a minus sign in every rule of differentiation
c) Because u/v = u times v to the power -1, and the product plus chain rules give u'v^-1 - uv^-2 v', which over the common denominator v squared is (u'v - uv')/v squared
d) Because the order is only a convention; either arrangement is acceptable provided it is used consistently

**6.** Why does f(x) = |x| have no derivative at x = 0?
a) Because |x| is not continuous at x = 0
b) Because the difference quotient tends to -1 as h approaches 0 from the left and to +1 from the right, so no single limit exists
c) Because the gradient at x = 0 is infinite, as it is at a vertical tangent
d) Because |x| is defined piecewise, and a piecewise function is never differentiable where the pieces meet

**7.** What does the second derivative f''(x) measure?
a) The rate at which the gradient of the curve is itself changing
b) The square of the first derivative, since differentiating twice multiplies the rate by itself
c) The gradient of the tangent line drawn to the tangent line
d) The total change in the function across two successive intervals of x

**8.** When x squared plus y squared = 25 is differentiated with respect to x, why does the y squared term give 2y(dy/dx) rather than just 2y?
a) Because dy/dx is a constant of differentiation that appears whenever two variables occur in one equation
b) Because the equation has not been solved for y, so a factor dy/dx is inserted to keep the two sides balanced
c) Because y is squared, and the chain rule contributes one extra factor for every power above the first
d) Because y stands for a function of x, so d(y squared)/dx = d(y squared)/dy times dy/dx = 2y times dy/dx

**9. (explain why)** Explain why the gradient of the tangent at a point must be defined as a limit of chord gradients, rather than computed directly from the single point at which the tangent touches the curve.

**10. (explain why)** Explain why d/dx[c f(x)] = c f'(x) is valid while d/dx[f(x)g(x)] = f'(x)g'(x) is not, in terms of what happens to the difference quotient in each case.

**11. (explain why)** Explain why, in computing the partial derivative of f(x, y) with respect to x, the variable y is held constant, and why no dy/dx factor appears even though the function contains y.

**12. (explain why)** Explain why, for a curve given parametrically by x = x(t) and y = y(t), the gradient is dy/dx = (dy/dt)/(dx/dt), and explain what goes wrong at a value of t where dx/dt = 0.
