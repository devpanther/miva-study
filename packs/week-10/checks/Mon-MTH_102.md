# Monday — MTH_102 nightly check

*Definite integrals and area as concepts: what the definite integral is as a limit of Riemann sums and why it measures signed rather than actual area, the exact conditions the Fundamental Theorem needs and why no constant of integration survives, why the area between two curves is an integral of top minus bottom regardless of where the x-axis lies, what an intersection point does to the setup, and how the shape of a region's boundaries decides whether the strips run vertically or horizontally.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** To say that ∫ₐᵇf(x)dx computes a **signed** area means precisely that:
a) the integral is positive whenever a < b and negative whenever a > b
b) each strip contributes f(xᵢ*)Δx, which is negative wherever f(xᵢ*) < 0, so regions below the axis are subtracted from regions above
c) the integral computes the area of the region and then attaches the sign of f(a)
d) the integral gives the area of the part above the axis minus the length of the part below it

**2.** In the definition ∫ₐᵇf(x)dx = lim_{n→∞}Σᵢ₌₁ⁿ f(xᵢ*)Δx:
a) Δx = 1/n, because the interval is rescaled to [0, 1] before the sum is formed
b) Δx = (b − a)/n, but the limit exists only if xᵢ* is taken to be the right endpoint of each subinterval
c) Δx = (f(b) − f(a))/n, the total change in the function shared out over the n strips
d) Δx = (b − a)/n, and when f is continuous on [a, b] the limit is the same for every choice of sample point xᵢ*

**3.** Two curves y = f(x) and y = g(x) lie **entirely below** the x-axis on [a, b], with f above g throughout. The area between them is ∫ₐᵇ[f(x) − g(x)]dx because:
a) the negative signs of ∫f and ∫g cancel when one is subtracted from the other
b) it is not valid — both curves must first be translated upward by a constant until they lie above the axis
c) area is defined as |∫ₐᵇf dx| − |∫ₐᵇg dx|, and that is what the formula abbreviates
d) the height of a vertical strip is f(x) − g(x), a difference of y-values, which is positive wherever f is above g whatever the signs of f and g individually

**4.** y = f(x) and y = g(x) cross at a single point x = c strictly between a and b, with f above g on [a, c] and g above f on [c, b]. The area they enclose over [a, b] is:
a) ∫ₐᵇ(f − g)dx, since the crossing does not affect the antiderivative
b) |∫ₐᵇ(f − g)dx|, since taking the modulus at the end repairs any sign the integral picked up
c) ∫ₐ^c(f − g)dx + ∫_c^b(g − f)dx
d) ∫ₐᵇ(g − f)dx, since the lower curve is always written first

**5.** The reason to set an area up as ∫_c^d[x_right(y) − x_left(y)]dy rather than in x is:
a) that a dy-integral always produces a smaller number, so it is the safer computation
b) that the region's left and right boundaries are each a single function of y over the whole region, while the top or bottom boundary changes formula partway — so horizontal strips need one integral where vertical strips need two
c) that it is required whenever any part of the region touches the y-axis
d) that it is the only way to handle a region lying below the x-axis

**6.** ∫ₐᵇf(x)dx = F(b) − F(a) requires:
a) f continuous and positive on [a, b], since otherwise F(b) − F(a) is not an area
b) f continuous on [a, b], and F the particular antiderivative whose constant of integration is zero
c) f differentiable on [a, b], with F the derivative of f
d) f continuous on [a, b], and F any antiderivative of f on [a, b]

**7.** No arbitrary constant appears in the value of a definite integral because:
a) (F(b) + C) − (F(a) + C) = F(b) − F(a), so every antiderivative of f gives the same number
b) the constant is omitted by convention to save writing, and including it would be harmless
c) a definite integral has no antiderivative at all — it is a limit of sums, and limits carry no constants
d) the constant is only needed when the integrand is discontinuous somewhere in [a, b]

**8.** f is continuous on [a, b] and changes sign exactly once, at x = c in (a, b). The area actually enclosed between y = f(x) and the x-axis on [a, b] is:
a) |∫ₐᵇf(x)dx|
b) ∫ₐᵇf(x)dx
c) ∫ₐᵇ|f(x)|dx, computed as |∫ₐ^c f dx| + |∫_c^b f dx|
d) ∫ₐ^c f(x)dx − ∫_c^b f(x)dx, in that order, always

**9. (explain why)** Explain why the definite integral is *defined* as a limit of Riemann sums — say what Δx and xᵢ* are and what the sum represents geometrically — and state precisely what the Fundamental Theorem adds to that definition. Then say why the object so defined measures signed area rather than area.

**10. (explain why)** Explain why the area between two curves is set up as ∫[top − bottom]dx and not as ∫(f − g)dx with a modulus applied to the final number. State the exact role the intersection points play, and say what "top" means for a region that lies entirely below the x-axis.

**11. (explain why)** A region is bounded by the curve x = y² and the line y = x − 2. Explain why setting its area up with vertical strips forces two integrals, while horizontal strips need only one, and state the general rule this illustrates. Do not evaluate anything.

**12. (explain why)** State the three orientation and additivity properties of the definite integral (the value of ∫ₐᵃ, the effect of swapping the limits, and how an integral splits at an interior point). Explain why swapping the limits changes the sign, and say exactly what goes wrong if you write the limits of an area calculation in decreasing order.

---

## Answers

**1. b** — *Signed area comes from the sign of f inside the Riemann sum, one strip at a time.* Δx > 0 for a < b, so the sign of each term f(xᵢ*)Δx is the sign of f(xᵢ*); strips where the curve is below the axis contribute negatively and are subtracted from those above. (a) confuses the sign of the **integrand** with the sign of the **orientation** — reversing the limits does negate the integral, but that is a separate property and says nothing about f; (c) makes the sign depend on a single endpoint value, so a curve crossing the axis would be mis-signed everywhere past the crossing; (d) mixes dimensions, subtracting a length from an area, and is meaningless.

**2. d** — *Δx is the interval length shared out, and continuity buys independence of the sample point.* Δx = (b − a)/n, xᵢ* is any point of the i-th subinterval, and for f continuous on a closed bounded interval all such sums converge to the same limit — which is why the integral is well defined without specifying left, right or midpoint. (a) is the single most common formula slip: Δx = 1/n only when b − a = 1, and no rescaling happens; (b) inverts the theorem — right endpoints are a *convenient* choice for computing, not a *necessary* one for existence; (c) is a difference quotient in disguise, dividing a change in f rather than a change in x, and has the wrong units for a strip width.

**3. d** — *The strip height is a difference of ordinates and never refers to the axis.* At each x the strip runs from the lower curve up to the upper one, so its height is f(x) − g(x) > 0; the position of the x-axis has been eliminated by the subtraction. Concretely, ∫₀²[(−x² − 1) − (−x² − 5)]dx = ∫₀²4dx = 8. (a) gives the right formula for the wrong reason and collapses if one curve is above the axis and the other below — the derivation must not depend on either integral being negative; (b) is the translation superstition: adding k to both curves adds k to each integral and leaves the difference unchanged, which proves the translation was never needed; (c) subtracts magnitudes, which for a curve crossing the axis is not the area of anything.

**4. c** — *Where f − g changes sign, the region must be split and the subtraction reversed.* On [a, c] the height is f − g; on [c, b] it is g − f. Both integrands are then non-negative and both integrals are genuine areas, so they may be added. (a) integrates a quantity that is positive on one piece and negative on the other, so the pieces cancel and the total is too small; (b) is the misconception the question is built on — the cancellation happens **inside** the integral, before the modulus can act, and for y = x³ and y = x on [−1, 1] it gives 0 for an area of 1/2; (d) invents a fixed order of subtraction, which is decided by a test point, not by which curve is written first.

**5. b** — *The strip direction is chosen so that every boundary of the region is one formula in the variable of integration.* Horizontal strips are worth using precisely when the left and right boundaries are single functions of y while the top or bottom boundary is piecewise in x; the dy-setup then needs one integral rather than two. (a) is arithmetic superstition — both setups compute the same number, and neither is systematically smaller; (c) confuses the y-axis with the y-variable: a region can touch the y-axis and still be simplest in x; (d) confuses being below the axis with being sideways — a region below the x-axis is handled perfectly well by vertical strips, since top − bottom is sign-free.

**6. d** — *Continuity of f on the closed interval, and any antiderivative.* If F′ = f, so is F + C, and the theorem's conclusion is unaffected — that freedom is the theorem's content, not a loophole. (a) attaches a positivity condition the theorem does not have — F(b) − F(a) is always the signed area, and it is only its *interpretation* as an area that needs f ≥ 0; (b) invents a normalisation that is never needed and would have to be checked; (c) reverses the roles: F is the antiderivative of f, i.e. F′ = f, and demanding that f be differentiable asks for more than the theorem needs (continuity of f is enough).

**7. a** — *The constant cancels in the subtraction, which is exactly why "any antiderivative" is allowed.* Evaluating the same C at both limits and subtracting removes it, so the number F(b) − F(a) does not depend on which antiderivative was chosen. (b) treats a theorem as a typographical convention — the constant is not omitted, it is annihilated, and a "+ C" left in an answer signals that the student thinks the result is a family of functions rather than a number; (c) is half-true and wholly misleading: the integral is indeed defined as a limit of sums, but it is *evaluated* through an antiderivative, and the question is why that antiderivative's constant does not survive; (d) invents a condition — discontinuity would threaten the theorem's applicability altogether, not the constant.

**8. c** — *Area is ∫|f|; in practice, split at the roots and add the magnitudes.* Because f changes sign at c, |f| = f on one side and −f on the other, so ∫ₐᵇ|f| = |∫ₐ^c f| + |∫_c^b f|. (a) applies the modulus after the two contributions have already cancelled, so it under-reports whenever both signs occur — for y = sin x on [0, 2π] it gives 0 instead of 4; (b) is the signed area, which is what "find the area" is explicitly not asking for; (d) happens to be right in the one case where f > 0 on (a, c) and f < 0 on (c, b), and wrong with the signs the other way round — the word "always" is what breaks it, and the safe statement is to take magnitudes rather than to memorise an order.

**9.** *Concept: the definite integral is defined as a limit of approximating rectangles, the Fundamental Theorem is what makes it computable, and the sign of f inside the sum is what makes it signed.* Partition [a, b] into n equal subintervals, each of width **Δx = (b − a)/n**, and in the i-th subinterval pick any sample point xᵢ*. The product f(xᵢ*)Δx is the (signed) area of a rectangle of width Δx and height f(xᵢ*), so the Riemann sum Σᵢ₌₁ⁿ f(xᵢ*)Δx is the total area of a staircase approximating the region between the curve and the axis. Refining the partition, ∫ₐᵇf(x)dx = lim_{n→∞}Σᵢ₌₁ⁿ f(xᵢ*)Δx; if f is continuous on [a, b] this limit exists and is independent of the sample points. The definition, however, computes nothing — it only says what the number *is*, and evaluating it directly needs summation formulas that exist for very few functions. The **Fundamental Theorem** supplies the evaluation: if F is any antiderivative of f then ∫ₐᵇf(x)dx = F(b) − F(a), which converts a limit of sums into two substitutions and a subtraction, and links integration to differentiation. Finally, the object so defined is a **signed** area because Δx > 0 while f(xᵢ*) carries the sign of the function: rectangles under the axis enter the sum negatively. So ∫ₐᵇf dx reports the area above the axis **minus** the area below it, and the actual enclosed area is ∫ₐᵇ|f(x)|dx.

**10.** *Concept: the integrand of an area is a strip height, which must be non-negative pointwise; the modulus belongs inside the integral, and intersection points are where the height changes formula.* A vertical strip at x runs from the lower boundary to the upper one, so its height is (top − bottom) and its area is (top − bottom)dx. Summing gives A = ∫ₐᵇ[f(x) − g(x)]dx **provided f is above g at every x in [a, b]** — that proviso is the whole argument. If the curves cross inside the interval, f − g is positive on one part and negative on the other, and the integral adds a positive area to a negative one; the two partly or entirely cancel **before** any modulus can be applied, so |∫(f − g)dx| is not the area. The correct object is ∫|f − g|dx, which in practice means splitting the interval at every crossing and integrating (top − bottom) on each piece with the roles taken in whichever order is correct there. The **intersection points** therefore do two jobs: for a region merely enclosed by the two curves they supply the limits a and b, obtained by solving f(x) = g(x); and any intersection strictly inside the interval is a point at which the region must be split and the subtraction reversed. For a region lying entirely below the x-axis, "top" still means **the curve with the greater y-value**, and nothing changes: top − bottom is a difference of ordinates, so it is positive whenever the ordering is right, and the position of the axis has already been subtracted out. The habitual translation of such curves upward is unnecessary — adding k to both leaves f − g unchanged.

**11.** *Concept: integrate in the variable in which every boundary of the region is a single function; a boundary that changes formula partway is what forces a split.* The intersections are found from y² = y + 2, i.e. y² − y − 2 = 0, giving y = −1 and y = 2, so the corner points are (1, −1) and (4, 2). With **vertical** strips the top boundary is the upper half of the parabola, y = √x, all the way from x = 0 to x = 4; but the bottom boundary is not one thing. For 0 ≤ x ≤ 1 the strip's lower end is the *lower half of the parabola*, y = −√x; for 1 ≤ x ≤ 4 it is the *line*, y = x − 2. The formula for the strip height therefore changes at x = 1, and one integral cannot represent both, so the area is ∫₀¹[√x − (−√x)]dx + ∫₁⁴[√x − (x − 2)]dx — two integrals, and the first also requires recognising that both ends lie on the same curve. With **horizontal** strips the left boundary is x = y² and the right boundary is x = y + 2 for every y from −1 to 2, with no change of formula anywhere, so A = ∫₋₁²[(y + 2) − y²]dy is a single integral. The general rule: choose the strip direction so that the two boundaries the strip meets are each given by one equation across the whole region — that is a property of the region's geometry, not a matter of preference, and the number obtained is the same either way.

**12.** *Concept: orientation and additivity are conventions forced on the integral by consistency, and an area calculation must respect them.* The three properties are: **∫ₐᵃf(x)dx = 0** (an interval of zero width contains no area); **∫ₐᵇf(x)dx = −∫_bᵃf(x)dx** (reversing the limits negates the value); and **∫ₐᵇf dx + ∫_b^c f dx = ∫ₐ^c f dx** (an integral splits at any interior point — and, with the sign convention in force, at points outside the interval too). The reason swapping the limits changes the sign is visible in the Riemann sum: Δx = (b − a)/n, so integrating from b to a makes Δx negative, and every term f(xᵢ*)Δx is negated. Equivalently, it is what the third property demands: putting c = a in the additivity rule gives ∫ₐᵇ + ∫_bᵃ = ∫ₐᵃ = 0. The consequence for area work is direct: an area computed with the limits written in decreasing order comes out as the **negative** of the true area, because the whole integral has been reversed. The fix is to write the limits left to right (or, for horizontal strips, bottom to top) and re-integrate, not to delete the minus sign — because a minus sign has two possible causes, reversed limits and a reversed order of subtraction, and only inspecting the setup distinguishes them. The third property is also what licenses splitting at an intersection point: ∫ₐᵇ = ∫ₐ^c + ∫_c^b is exactly the step that lets the two pieces of a crossing region be treated separately.
