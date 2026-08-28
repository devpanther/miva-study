# MTH_102 — Week 7 Summary

*Elementary Mathematics II (Calculus) · Week 7 (19–25 Oct 2026) · Topic: Integrals — Indefinite and Definite Integrals*

## The 8 most examinable things this week

1. **Antiderivative and indefinite integral.** F is an antiderivative of f if F′(x) = f(x). The indefinite integral ∫f(x)dx = F(x) + C is the **whole family** of them — a set of functions, not one function.
2. **Why the + C.** Two functions with the same derivative differ by a constant, so an antiderivative is only ever determined **up to a constant**. Omitting C is a wrong answer, not an untidy one.
3. **Power rule for integration:** ∫xⁿ dx = x^{n+1}/(n+1) + C, **for n ≠ −1** — raise the power by one, then **divide** by the new power. The excluded case is ∫x⁻¹dx = **ln|x| + C**.
4. **Linearity:** ∫[k·f(x)]dx = k∫f(x)dx and ∫[f ± g]dx = ∫f dx ± ∫g dx. There is **no** product rule, quotient rule or chain rule for integration — rewrite, expand or substitute first.
5. **Standard forms:** ∫sin x dx = −cos x + C, ∫cos x dx = sin x + C, ∫sec²x dx = tan x + C, ∫eˣdx = eˣ + C, ∫e^{kx}dx = e^{kx}/k + C, ∫aˣdx = aˣ/ln a + C, ∫dx/(ax+b) = (1/a)ln|ax+b| + C. Differentiation **multiplies** by the inner derivative; integration **divides** by it — and only when the inner function is **linear**.
6. **Substitution:** put u = g(x), du = g′(x)dx, and the integral must become an integral in u alone. Reverses the chain rule.
7. **Definite integral:** ∫_a^b f(x)dx is a **number** — the limit of Riemann sums Σf(x_i*)Δx, read as the **net signed area** between y = f(x) and the x-axis over [a, b], or as the total accumulated change of a quantity whose rate is f.
8. **Fundamental Theorem of Calculus:** ∫_a^b f(x)dx = [F(x)]_a^b = F(b) − F(a) for **any** antiderivative F — which is why the arbitrary constant cancels and never appears in a definite answer.

## Indefinite integrals

**Definition.** ∫f(x)dx = F(x) + C means F′(x) = f(x). Read the parts: ∫ is the integral sign, f(x) the **integrand**, dx names the **variable of integration**, C the **constant of integration**, and the whole expression is the **indefinite integral** or **antiderivative**.

**Why C is unavoidable.** d/dx(c) = 0, so x³ + 1, x³ − 7 and x³ + √2 all have derivative 3x². Conversely if F′ = G′ on an interval then (F − G)′ = 0, so F − G is constant. Hence the antiderivatives of a given f form exactly one family F(x) + C — geometrically a stack of **vertically shifted copies** of one curve, all with the same gradient at each x. A single extra condition (a point the curve passes through, an initial value) picks one member out of the family.

**The one reliable check.** Differentiate your answer. If d/dx[your answer] = the integrand, the integral is right; if not, it is wrong. This works because integration is defined as the reverse of differentiation.

**Standard integrals** (k, a, b, n constants; C omitted from the table, never from your answer):

| ∫f(x)dx | Result | Condition |
|---|---|---|
| ∫k dx | kx | k constant |
| ∫xⁿ dx | x^{n+1}/(n+1) | n ≠ −1 |
| ∫(1/x)dx | ln\|x\| | x ≠ 0 |
| ∫(ax+b)ⁿ dx | (ax+b)^{n+1}/[a(n+1)] | n ≠ −1, inner function **linear** |
| ∫dx/(ax+b) | (1/a)ln\|ax+b\| | ax + b ≠ 0 |
| ∫eˣ dx | eˣ | |
| ∫e^{kx} dx | e^{kx}/k | k ≠ 0 |
| ∫aˣ dx | aˣ/ln a | a > 0, a ≠ 1 |
| ∫sin x dx | −cos x | |
| ∫cos x dx | sin x | |
| ∫sin(ax+b)dx | −cos(ax+b)/a | |
| ∫cos(ax+b)dx | sin(ax+b)/a | |
| ∫sec²x dx | tan x | |
| ∫cosec²x dx | −cot x | |
| ∫sec x tan x dx | sec x | |
| ∫cosec x cot x dx | −cosec x | |

**Substitution.** For ∫f(g(x))·g′(x)dx: set u = g(x), so du = g′(x)dx; the integral becomes ∫f(u)du. It works only when the **whole** of the remaining x-material can be written in u and du — the inner derivative must be present (up to a constant multiple). Then integrate in u and put g(x) back. For a **definite** integral either (i) change the limits to u-values and finish in u, or (ii) revert to x and use the original limits — never evaluate a u-antiderivative at the x-limits.

## Definite integrals

**Definition.** Divide [a, b] into n strips of width Δx = (b − a)/n, take a sample point x_i* in each and form Σ_{i=1}^{n} f(x_i*)Δx. Then

**∫_a^b f(x)dx = lim_{n→∞} Σ_{i=1}^{n} f(x_i*)Δx.**

The value is a **number**: the net area between the curve and the x-axis, counting area **above** the axis as positive and area **below** as negative. Equivalently, if f is the rate of change of a quantity Q, ∫_a^b f is the **total change** in Q from a to b.

**Fundamental Theorem of Calculus.**
- *Part 1:* d/dx[∫_a^x f(t)dt] = f(x) — differentiating an accumulation gives back the rate. (Note the upper limit must be the variable; with two constant limits the derivative is 0, since a constant is being differentiated.)
- *Part 2 (the evaluation theorem):* ∫_a^b f(x)dx = F(b) − F(a) where F′ = f.

**Why C cancels.** Using F(x) + C: [F(b) + C] − [F(a) + C] = F(b) − F(a). Any antiderivative gives the same number, so C is written in indefinite work and dropped in definite work.

**x is a dummy variable.** ∫_0^3 x²dx and ∫_0^3 t²dt are the same number, 9. Nothing about the answer depends on the letter; that is what distinguishes a definite integral from an indefinite one, whose answer *is* a function of x.

**Properties** (f, g continuous on the interval; k constant):

| Property | Statement |
|---|---|
| Zero width | ∫_a^a f(x)dx = 0 |
| Reversing limits | ∫_b^a f(x)dx = −∫_a^b f(x)dx |
| Constant multiple | ∫_a^b k·f(x)dx = k∫_a^b f(x)dx |
| Sum/difference | ∫_a^b [f ± g]dx = ∫_a^b f dx ± ∫_a^b g dx |
| Additivity of intervals | ∫_a^c f dx + ∫_c^b f dx = ∫_a^b f dx |
| Constant integrand | ∫_a^b k dx = k(b − a) |
| Average value | mean of f on [a, b] = (1/(b − a))∫_a^b f dx |

**Area vs the value of the integral.** ∫_a^b f dx is the *net signed* area. For the **total** area enclosed between the curve and the axis, find where f = 0 inside [a, b], integrate over each piece separately and add the **absolute values**.

## Worked examples

**(1) Power rule after rewriting.** ∫(4x³ + 6/x² + 5/x)dx.
Rewrite: 4x³ + 6x⁻² + 5x⁻¹. Then 4·x⁴/4 = x⁴; 6·x⁻¹/(−1) = −6/x; 5x⁻¹ is the excluded case, giving 5 ln|x|.
**= x⁴ − 6/x + 5 ln|x| + C.** Check by differentiating: 4x³ + 6x⁻² + 5/x ✓ (note −6x⁻¹ differentiates to **+**6x⁻²).

**(2) Expand or divide first — there is no product or quotient rule.** ∫(2x + 1)(x − 3)dx = ∫(2x² − 5x − 3)dx = **(2/3)x³ − (5/2)x² − 3x + C.**
∫[(x³ + 3x − 2)/x²]dx = ∫(x + 3x⁻¹ − 2x⁻²)dx = **x²/2 + 3 ln|x| + 2/x + C** (since −2·x⁻¹/(−1) = +2/x).

**(3) Trigonometric and exponential.** ∫(3 sin x − 4e^{2x} + sec²x)dx = **−3 cos x − 2e^{2x} + tan x + C.**
The signs are the mirror image of differentiation: cos differentiates to −sin, so **sin integrates to −cos**. And e^{2x} is **divided** by 2, where differentiating would have multiplied by 2.

**(4) Linear inner function.** ∫(2x + 3)⁵dx = (2x + 3)⁶/(6·2) = **(2x + 3)⁶/12 + C.** Check: (1/12)·6(2x+3)⁵·2 = (2x+3)⁵ ✓. This shortcut is legitimate **only** because the inner derivative 2 is a constant; ∫(x² + 3)⁵dx is **not** (x² + 3)⁶/(6·2x).

**(5) Substitution.** ∫6x²√(x³ + 1) dx. Put u = x³ + 1, du = 3x²dx, so 6x²dx = 2du.
= ∫2√u du = 2·(2/3)u^{3/2} = **(4/3)(x³ + 1)^{3/2} + C.** Check: (4/3)(3/2)(x³+1)^{1/2}·3x² = 6x²√(x³+1) ✓.

**(6) Definite integral, straight evaluation.** ∫_1^3 (x² + 2x)dx = [x³/3 + x²]_1^3 = (9 + 9) − (1/3 + 1) = 18 − 4/3 = **50/3.**
Note what was substituted: the **antiderivative** at the limits, not the integrand — f(3) − f(1) = 15 − 3 = 12 is a different (and wrong) number.

**(7) Definite integral by substitution, limits changed.** ∫_0^2 x(x² + 1)³dx. Put u = x² + 1, du = 2x dx, so x dx = du/2; when x = 0, u = 1 and when x = 2, u = 5.
= (1/2)∫_1^5 u³du = (1/2)[u⁴/4]_1^5 = (1/8)(625 − 1) = **78.**
The same by reverting: (x²+1)⁴/8 evaluated from 0 to 2 gives (625 − 1)/8 = 78 ✓. Using the **x**-limits on the **u**-antiderivative would have given (16 − 0)/8 = 2, which is the classic wrong answer.

**(8) Signed area vs total area.** y = x² − 1 on [0, 2], which crosses the axis at x = 1.
∫_0^1 (x² − 1)dx = [x³/3 − x]_0^1 = 1/3 − 1 = −2/3 (below the axis).
∫_1^2 (x² − 1)dx = (8/3 − 2) − (1/3 − 1) = 2/3 + 2/3 = 4/3 (above).
**Net value of ∫_0^2 = −2/3 + 4/3 = 2/3; total area = 2/3 + 4/3 = 2.** Two different questions, two different answers.

**(9) Fixing the constant from a condition.** A curve has dy/dx = 3x² − 2x and passes through (2, 5).
y = x³ − x² + C; at x = 2: 8 − 4 + C = 5, so C = **1** and **y = x³ − x² + 1.** The condition selects one curve from the family; without it the answer is the family.
Same structure in kinematics (Weeks 5–6 run backwards): a = dv/dt, so v = ∫a dt with C = v(0); v = ds/dt, so s = ∫v dt with C = s(0). Displacement over [t₁, t₂] is ∫_{t₁}^{t₂} v dt; **distance travelled** needs the total-area treatment of example (8).

## Commonly confused

- **∫xⁿ vs the case n = −1.** x^{n+1}/(n+1) fails at n = −1 because it gives x⁰/0. ∫dx/x = ln|x| + C; ∫dx/x² = −1/x + C (a power, not a log).
- **Divide, don't multiply.** ∫e^{5x}dx = e^{5x}/5, ∫cos 3x dx = (sin 3x)/3. The habit of multiplying by the inner derivative belongs to differentiation.
- **The shortcut is for linear inner functions only.** ∫(3x − 1)⁴dx = (3x−1)⁵/15, but ∫(x² − 1)⁴dx must be expanded or substituted; (x²−1)⁵/(5·2x) is not an antiderivative — differentiate it and you do not get back (x²−1)⁴.
- **∫sin x = −cos x, ∫cos x = sin x.** The minus sign moves to the other function when you integrate.
- **∫[f·g]dx ≠ (∫f)(∫g).** Test: ∫x·x dx = x³/3, but (x²/2)(x²/2) = x⁴/4. Same for quotients. Only sums, differences and constant multiples split.
- **Indefinite = family of functions; definite = one number.** An answer of "x³/3 + C" to ∫_0^2 x²dx is a category error, and so is "8/3" to ∫x²dx.
- **Dropping + C**, or keeping it in a definite integral where it has already cancelled.
- **Substituting into f instead of F.** The evaluation is F(b) − F(a), where F is the antiderivative.
- **Order of the limits.** F(b) − F(a), upper minus lower; swapping them flips the sign, which is exactly what ∫_b^a = −∫_a^b records.
- **A definite integral of 0 does not mean "no area".** ∫_{−1}^{1} x³dx = 0 because the two halves cancel; the total area is 1/2.
- **Substitution left half-done.** Either every x (including dx) becomes u and du, or the substitution is illegal; and either the limits change with it or you convert back before substituting.
- **ln|x| needs the modulus.** 1/x is defined for negative x too, and d/dx ln|x| = 1/x on both sides of 0; writing ln x silently assumes x > 0.
- **d/dx[∫_a^x f(t)dt] = f(x), but d/dx[∫_a^b f(t)dt] = 0** — the second is a constant, so its derivative is zero, not f.
- **Average value vs total.** The mean of f over [a, b] is ∫_a^b f dx divided by (b − a); the integral alone is the accumulation, not the average.

---

*Note on the source: this week's deck extracts as slide titles only — INDEFINITE INTEGRALS (six slides), TASK, DEFINITE INTEGRALS (four slides), TASK, SUMMARY — because every formula and worked example sits inside a slide image that the text extractor cannot read. What does extract is the objectives (know the difference between indefinite and definite integrals; solve problems involving indefinite integrals; solve problems involving definite integrals) and the introduction: "When we differentiate a function, we see its rate of change. When we integrate a function, we see its accumulated value… The indefinite integral of a function is the collection of all its possible antiderivatives. The definite integral of a function over an interval is the total area between the curve and the independent-variable axis in that interval." The week summary sheet adds the named techniques — the power rule for xⁿ, trigonometric integrals, exponential integrals and integration by substitution — and then gives only a structural-engineering case study. Every formula, statement and example above is the standard 100-level treatment of exactly those named objectives.*
