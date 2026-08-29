# Monday — MTH_102 nightly check

*Integration concepts: the antiderivative and the indefinite integral as a family of functions, why the arbitrary constant exists, the notation ∫f(x)dx and ∫_a^b f(x)dx, what a definite integral denotes as signed area and accumulated change, the Fundamental Theorem of Calculus, and the properties and limits of the integration rules.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The statement ∫f(x)dx = F(x) + C means precisely that:
a) F′(x) = f(x), and every function whose derivative is f has the form F(x) + C
b) f′(x) = F(x), so integrating f produces the function it was differentiated from
c) F(x) + C is the area under y = f(x) from 0 to x, with C the area to the left of 0
d) F(x) is obtained by multiplying f(x) by the small quantity dx and adding the pieces up

**2.** Why does an arbitrary constant appear in every indefinite integral?
a) An indefinite integral carries no limits, so C stands in for the limits that will be substituted later.
b) Integration reverses differentiation only approximately, and C absorbs the discrepancy.
c) The derivative of a constant is 0, so infinitely many functions share the same derivative and any two of them differ only by a constant.
d) C is the value of the antiderivative at x = 0, which the integration process itself cannot supply.

**3.** For a continuous f, the symbol ∫_2^5 f(x)dx denotes:
a) a function of x whose derivative is f(x), evaluated between the limits 2 and 5
b) a number: the net signed area between y = f(x) and the x-axis over [2, 5]
c) F(5) − F(2) + C, so its value is settled only once the arbitrary constant is chosen
d) the total area enclosed between the curve and the axis over [2, 5], and so never negative

**4.** The power rule ∫xⁿdx = x^{n+1}/(n+1) + C excludes n = −1 because:
a) 1/x is undefined at x = 0, and an integrand must be defined everywhere
b) the power rule holds only for positive exponents, so every negative power is excluded
c) 1/x has no antiderivative at all
d) the formula would give x⁰/0; the antiderivative of x⁻¹ is ln|x| + C

**5.** The Fundamental Theorem of Calculus says, in essence:
a) differentiation and integration are separate processes that happen to agree for polynomials
b) the accumulation of f over [a, b] can be got from any one antiderivative: ∫_a^b f dx = F(b) − F(a)
c) the area under a curve equals the gradient of the tangent at the midpoint of the interval
d) d/dx[∫_a^b f(t)dt] = f(x), for any constants a and b

**6.** In ∫_0^3 x²dx, the letter x:
a) must be kept, because ∫_0^3 t²dt is a different quantity
b) is the variable the answer depends on, so the result is a function of x
c) is a dummy variable: writing t throughout gives the identical number, 9
d) records that the answer is to be left in terms of x once the limits are substituted

**7.** If ∫_1^4 f(x)dx = 10 and ∫_4^7 f(x)dx = −3, then ∫_7^1 f(x)dx =
a) 13   b) 7   c) −13   d) −7

**8.** A particle moves along a line with velocity v(t) m/s. The quantity ∫_0^4 v(t)dt represents:
a) the distance travelled in the first 4 seconds, necessarily positive
b) the displacement over the first 4 seconds — the net change in position
c) the average velocity over the interval from t = 0 to t = 4
d) the velocity gained, i.e. the acceleration accumulated over those 4 seconds

**9. (explain why)** Explain why ∫f(x)dx is a family of functions while ∫_a^b f(x)dx is a single number, and show algebraically why the arbitrary constant cannot affect the value of the definite integral.

**10. (explain why)** Explain why ∫dx/x cannot be done with the power rule, state what the antiderivative is, and say why the modulus signs in ln|x| are needed rather than decorative.

**11. (explain why)** A student writes down three rules: (i) ∫[f + g]dx = ∫f dx + ∫g dx, (ii) ∫[k·f]dx = k∫f dx for constant k, (iii) ∫[f·g]dx = (∫f dx)(∫g dx). Say which are valid, and disprove the invalid one with a specific counterexample.

**12. (explain why)** ∫_{−2}^{2} x³dx = 0, yet the curve y = x³ clearly encloses a visible region with the x-axis between x = −2 and x = 2. Explain why there is no contradiction, and state how you would compute the total area instead.

---

## Answers

**1. a** — *The indefinite integral is the complete family of antiderivatives of the integrand.* Integration is defined by differentiation run backwards: F is an antiderivative when F′ = f, and because any two antiderivatives differ by a constant, F(x) + C captures all of them. (b) reverses the roles of f and F, which describes differentiating F, not integrating f; (c) is the definite-integral (area) reading smuggled into an indefinite integral, and it also misreads C as an area; (d) describes the Riemann-sum construction of a *definite* integral, and dx is not a small quantity being multiplied here — it names the variable of integration.

**2. c** — *Antiderivatives are determined only up to an additive constant, because constants differentiate to zero.* x³ + 1, x³ − 7 and x³ all have derivative 3x²; conversely if F′ = G′ then (F − G)′ = 0, so F − G is constant. Hence the answer must be a whole family. (a) confuses the constant of integration with the limits of a definite integral — they are unrelated, and C is present even when limits are later supplied; (b) treats integration as an approximation, which it is not — it is exact; (d) is a plausible-sounding but false identification: the value at 0 is F(0) + C, not C, and an extra condition at *any* point (not just 0) is what fixes C.

**3. b** — *A definite integral is a number: the net signed area, area below the axis counting negative.* Both limits are constants, so nothing in the answer varies. (a) is the indefinite integral's description — a function — grafted onto limits; (c) keeps the constant of integration, but it cancels in the subtraction [F(5) + C] − [F(2) + C], which is exactly why any antiderivative may be used; (d) confuses the signed value with the total area, which is what you get only by splitting at the zeros of f and adding absolute values.

**4. d** — *The excluded case is the one where the formula divides by zero, and it is filled by the logarithm.* With n = −1, n + 1 = 0, so x^{n+1}/(n+1) = x⁰/0 is meaningless; instead d/dx(ln|x|) = 1/x supplies the missing antiderivative. (a) confuses a point where the *integrand* is undefined with a failure of the *formula* — 1/x² is also undefined at 0 and yet the power rule handles it fine, giving −1/x; (b) is simply false: ∫x⁻³dx = −x⁻²/2 works perfectly well; (c) is the strongest misconception — 1/x does have an antiderivative, just not a power one.

**5. b** — *The theorem connects accumulation to antidifferentiation, which is what makes definite integrals computable.* It replaces the limit of Riemann sums by a subtraction of two values of any single antiderivative. (a) denies the connection the theorem asserts; (c) mixes up the two branches of calculus — gradients belong to derivatives, and no midpoint gradient gives an area; (d) is Part 1 corrupted: the correct statement has the *variable* as the upper limit, d/dx∫_a^x f(t)dt = f(x). With both limits constant the integral is a fixed number, so its derivative is 0.

**6. c** — *The variable of integration in a definite integral is a dummy: the value depends on f and the limits, not on the letter.* ∫_0^3 x²dx = [x³/3]_0^3 = 9 and ∫_0^3 t²dt = 9 likewise. (a) treats a change of letter as a change of function; (b) and (d) both confuse the definite integral with the indefinite one — after substituting the limits there is no x left to depend on, which is precisely the structural difference between the two objects.

**7. d** — *Additivity over adjoining intervals, followed by the reversal of limits.* ∫_1^7 = ∫_1^4 + ∫_4^7 = 10 + (−3) = 7, and reversing the limits changes the sign: ∫_7^1 = −7. (b) does the additivity correctly but ignores that the limits are given the other way round; (a) subtracts the second integral instead of adding it, 10 − (−3) = 13, i.e. treats the negative value as though the minus sign meant "take away"; (c) makes both errors at once.

**8. b** — *The integral of a rate of change over an interval is the total (net) change in the quantity itself.* Velocity is ds/dt, so ∫_0^4 v dt = s(4) − s(0), the displacement — negative if the particle finishes behind where it started. (a) is the *distance*, which requires splitting at the times when v changes sign and adding absolute values; (c) forgets the division by the interval length — the average velocity is (1/4)∫_0^4 v dt; (d) integrates the wrong function: accumulating acceleration gives the change in velocity, ∫_0^4 a dt.

**9.** *Concept: indefinite integral = family of functions; definite integral = one number, and C cancels in the subtraction.* An indefinite integral asks "which functions have derivative f?" — and since the derivative of a constant is 0, there are infinitely many, differing only by that constant, so the answer must be written F(x) + C. A definite integral asks "how much accumulates between a and b?" — the limits are numbers, so the answer is a number. Using the general antiderivative to evaluate it: ∫_a^b f(x)dx = [F(x) + C]_a^b = [F(b) + C] − [F(a) + C] = **F(b) − F(a)**; the +C appears in both bracketed values and subtracts out. This is why the theorem may say "*any* antiderivative F" — the choice cannot change the answer — and why writing + C after a definite answer is wrong.

**10.** *Concept: n = −1 is the one exponent the power rule cannot reach, and the logarithm fills the gap.* The power rule ∫xⁿdx = x^{n+1}/(n+1) requires n + 1 ≠ 0; at n = −1 it produces x⁰/0, a division by zero, so the rule is silent there rather than merely inconvenient. The antiderivative is **ln|x| + C**, because d/dx(ln x) = 1/x. The modulus is needed because the integrand 1/x is perfectly well defined for **negative** x, while ln x is not: for x < 0 write ln|x| = ln(−x), whose derivative by the chain rule is (−1)/(−x) = 1/x — the same function. So ln|x| is an antiderivative of 1/x on both sides of the origin, whereas ln x silently restricts you to x > 0 and would make ∫_{−3}^{−1} dx/x impossible to write down.

**11.** *Concept: integration is linear — it splits over sums and pulls out constant factors — but there is no product rule for integration.* (i) and (ii) are **valid**: they follow from the corresponding derivative rules, since differentiating F + G gives f + g and differentiating kF gives kf. (iii) is **false**. Counterexample: take f(x) = g(x) = x. Then ∫[x·x]dx = ∫x²dx = x³/3 + C, whereas (∫x dx)(∫x dx) = (x²/2)(x²/2) = x⁴/4 — not even the same degree, so no choice of constants can reconcile them. The structural reason is that differentiation of a product gives *two* terms, u′v + uv′, so nothing about a product survives being run backwards term by term; products must be dealt with by expanding, by substitution, or (later) by parts.

**12.** *Concept: a definite integral is net signed area, so regions below the axis cancel regions above.* On [−2, 0] the curve y = x³ lies **below** the axis, so that part contributes a negative amount; on [0, 2] it lies above and contributes the equal positive amount. Explicitly, ∫_{−2}^{0} x³dx = [x⁴/4] = 0 − 4 = −4 and ∫_0^2 x³dx = 4 − 0 = +4, and the sum is 0. Nothing has vanished: the integral was never a measure of how much region exists, but of net accumulation, and here the accumulation over the second half exactly undoes the first. For the **total area** you split at the zero of the integrand (x = 0), integrate each piece separately and add the **absolute values**: |−4| + |4| = **8** square units. The same distinction is what separates displacement (∫v dt) from distance travelled.
