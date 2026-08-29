# MTH_102 — Week 8 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 9, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** ∫x cos(x²)dx is evaluated by:
a) parts, with u = x and dv = cos(x²)dx
b) substitution u = x², giving (1/2)sin(x²) + C
c) parts, with u = cos(x²) and dv = x dx
d) integrating each factor: (x²/2)·sin(x²) + C

**2.** ∫x cos x dx =
a) x sin x − cos x + C   b) (x²/2)sin x + C   c) x sin x + C   d) x sin x + cos x + C

**3.** The correct partial-fraction form for (2x − 1)/((x² + 1)(x − 2)) is:
a) A/(x² + 1) + B/(x − 2)
b) A/(x + 1) + B/(x − 1) + C/(x − 2)
c) (Ax + B)/(x² + 1) + C/(x − 2)
d) (Ax + B)/(x² + 1) + (Cx + D)/(x − 2)

**4.** For ∫x²ln x dx, the right first move is:
a) parts with u = ln x, dv = x²dx
b) parts with u = x², dv = ln x dx
c) parts with u = x²ln x, dv = dx
d) substitution u = ln x, since du = dx/x

**5.** ∫₀² dx/√(16 − x²) =
a) π/3   b) π/6   c) π/12   d) π/2

**6.** Which of these is **proper**, and so ready for partial fractions with no division first?
a) (x² + 1)/(x² − 1)   b) x³/(x + 2)   c) (x² − x)/(x − 3)   d) (2x + 5)/(x² − x − 6)

**7.** ∫(3x² + 2)/(x³ + 2x − 7)dx =
a) ln|x³ + 2x − 7| + C
b) (1/3)ln|x³ + 2x − 7| + C
c) ln|3x² + 2| − ln|x³ + 2x − 7| + C
d) (3x² + 2)·ln|x³ + 2x − 7| + C

**8.** ∫₁² ln x dx =
a) 2ln2   b) 2ln2 − 2   c) 2ln2 − 1   d) (ln2)²/2

**9.** To evaluate ∫√(x² − 25)/x dx you would substitute:
a) x = 5 sinθ   b) x = 5 secθ   c) x = 5 tanθ   d) u = x² − 25

**10.** ∫(ln x)/x dx =
a) ln|ln x| + C   b) x ln x − x + C   c) (ln x)² + C   d) (ln x)²/2 + C

**11.** ∫x e^{x²}dx is done by:
a) substitution u = x², since the x supplies du/2
b) parts, with u = x and dv = e^{x²}dx
c) parts, with u = e^{x²} and dv = x dx
d) (∫x dx)(∫e^{x²}dx)

**12.** ∫x²/(x² + 1)dx =
a) x + arctan x + C
b) (1/2)ln(x² + 1) + C
c) x − arctan x + C
d) (x³/3)·(1/(x² + 1)) + C

## Section B — Short answer (3)

**13.** Evaluate ∫x²eˣdx, showing both applications of integration by parts and stating u and dv each time. Then say, in one sentence, how many applications ∫x⁵eˣdx would need and why.

**14.** Evaluate ∫(x + 7)/((x − 1)(x + 3))dx by partial fractions, showing how you obtain each constant, and check one of them by substituting a value of x that is not a root.

**15.** The three integrals ∫dx/(x² + 16), ∫x dx/(x² + 16) and ∫x²dx/(x² + 16) share a denominator but need three different treatments. Name the treatment each one needs, say what feature of the numerator decides it, and evaluate all three.

## Answers

1. **b** — *A composite whose inner derivative is present, up to a constant, is a substitution.* u = x², du = 2x dx, so x dx = du/2 and the integral is (1/2)∫cos u du = (1/2)sin(x²) + C. (a) chooses a dv you cannot integrate — ∫cos(x²)dx has no elementary antiderivative at all, which is exactly why the x must be used for du; (c) makes the traded integral ∫(x²/2)·(−sin(x²))·2x dx, worse than the original; (d) is the non-existent "integrate each factor" rule — differentiate it and the product rule returns two terms, not one.
2. **d** — *Parts with the algebraic factor as u.* u = x, dv = cos x dx ⟹ v = sin x, so ∫ = x sin x − ∫sin x dx = x sin x + cos x. (a) integrates sin x as +cos x, losing the minus that then cancels the formula's minus; (b) integrates the factors separately; (c) stops at uv and never subtracts ∫v du.
3. **c** — *An irreducible quadratic factor takes a linear numerator; a distinct linear factor takes a constant.* x² + 1 has no real roots (discriminant −4), so its numerator must be Ax + B; x − 2 is linear, so its numerator is a constant. (a) puts a constant over the quadratic, which makes the logarithmic part of the answer unobtainable and the equations inconsistent; (b) pretends x² + 1 factors as (x + 1)(x − 1) — that is x² − 1; (d) gives the **linear** factor a linear numerator, which makes that piece improper.
4. **a** — *LIATE: the logarithm is u, because differentiating it removes it and the remaining factor is easy to integrate.* du = dx/x and v = x³/3, so ∫v du = ∫x²/3 dx, purely algebraic; the answer is (x³/3)ln x − x³/9 + C. (b) needs v = ∫ln x dx, which is itself a parts problem, so the choice moves backwards; (c) makes dv = dx, v = x, and du contains the whole product rule of x²ln x — no simplification; (d) is a substitution that does not fit: du = dx/x is not present, and the leftover x² cannot be written in terms of ln x.
5. **b** — *Standard form ∫dx/√(a² − x²) = arcsin(x/a), evaluated at the limits.* [arcsin(x/4)]₀² = arcsin(1/2) − arcsin(0) = π/6. (a) is arccos(1/2), reading the wrong inverse function off the triangle; (c) divides by a as though the inner function were linear — the "divide by the inner derivative" habit does not apply to arcsin; (d) is arcsin(1), i.e. evaluating at x = 4 rather than x = 2.
6. **d** — *Proper means the numerator's degree is strictly less than the denominator's.* deg 1 < deg 2, and x² − x − 6 = (x − 3)(x + 2) factors, so the decomposition A/(x − 3) + B/(x + 2) is legitimate at once. (a) has **equal** degrees, which is improper — dividing gives 1 + 2/(x² − 1); (b) and (c) are improper by two and one degrees respectively, and both must be long-divided first. Equal degree being improper is the case most often waved through.
7. **a** — *The f′/f pattern: when the numerator is exactly the derivative of the denominator, the integral is a single logarithm.* d/dx(x³ + 2x − 7) = 3x² + 2, so ∫f′/f dx = ln|f| + C directly, with no decomposition and no substitution work beyond recognising it. (b) divides by 3 as though the inner function were linear; (c) takes logs of numerator and denominator separately, which is not a rule; (d) multiplies the numerator by the log instead of recognising it as the differential.
8. **c** — *∫ln x dx = x ln x − x, by parts with dv = dx.* [x ln x − x]₁² = (2ln2 − 2) − (1·0 − 1) = 2ln2 − 2 + 1 = 2ln2 − 1. (a) drops the −x term, i.e. evaluates ∫v du as 0 rather than as ∫dx; (b) is F(2) alone, forgetting to subtract F(1) = −1; (d) treats ln x like a power and writes (ln x)²/2, which is the antiderivative of (ln x)/x, not of ln x.
9. **b** — *√(x² − a²) calls for x = a secθ, because sec²θ − 1 = tan²θ.* Then x² − 25 = 25tan²θ and the root becomes 5tanθ. (a) gives 25sin²θ − 25 = −25cos²θ, negative under the root; (c) gives 25tan²θ − 25, which no identity turns into a square; (d) is a substitution with du = 2x dx, and there is no matching x factor in the integrand — the lone x in the denominator is not it.
10. **d** — *Substitution u = ln x, du = dx/x: the integral is ∫u du.* Hence u²/2 = (ln x)²/2 + C. (a) integrates ∫du/u instead of ∫u du — the 1/x has been used twice, once as du and once as the integrand; (b) is ∫ln x dx, a different integral; (c) forgets the ½ from ∫u du.
11. **a** — *The inner derivative of x² is 2x, and an x is present, so substitution finishes it in one line:* (1/2)e^{x²} + C. (b) requires ∫e^{x²}dx for v, which does not exist in elementary terms; (c) trades down to ∫(x²/2)e^{x²}·2x dx, a worse integral; (d) is the non-existent product rule for integration — and ∫e^{x²}dx is not elementary anyway. Compare ∫x eˣdx, which genuinely needs parts: one character's difference in the exponent changes the method completely.
12. **c** — *An improper rational integrand is divided out first, and only the remainder is a standard form.* x²/(x² + 1) = 1 − 1/(x² + 1), so the integral is x − arctan x + C. (a) makes a sign error in the division, writing 1 + 1/(x² + 1); (b) treats the numerator as the derivative of the denominator, but that derivative is 2x, not x²; (d) integrates numerator and denominator separately.
13. **∫x²eˣdx = eˣ(x² − 2x + 2) + C.** First application: u = x², dv = eˣdx ⟹ du = 2x dx, v = eˣ, giving x²eˣ − ∫2x eˣdx. Second application on ∫2x eˣdx: u = 2x, dv = eˣdx ⟹ du = 2dx, v = eˣ, giving 2x eˣ − ∫2eˣdx = 2x eˣ − 2eˣ. Substituting back: x²eˣ − 2x eˣ + 2eˣ + C = eˣ(x² − 2x + 2) + C. Check by differentiating: eˣ(x² − 2x + 2) + eˣ(2x − 2) = x²eˣ ✓. ∫x⁵eˣdx would need **five** applications, because each application differentiates the algebraic factor once and so lowers its degree by exactly one, terminating only when it reaches x⁰. — *Repeated integration by parts; the algebraic factor is u so that the process terminates.*
14. **∫(x + 7)/((x − 1)(x + 3))dx = 2ln|x − 1| − ln|x + 3| + C.** Write (x + 7)/((x − 1)(x + 3)) = A/(x − 1) + B/(x + 3) and clear denominators: x + 7 = A(x + 3) + B(x − 1). Put x = 1: 8 = 4A ⟹ A = 2. Put x = −3: 4 = −4B ⟹ B = −1. Check with a non-root value, x = 0: A(3) + B(−1) = 6 + 1 = 7, which matches the left side x + 7 = 7 ✓. Integrating term by term gives 2ln|x − 1| − ln|x + 3| + C (equivalently ln[(x − 1)²/|x + 3|] + C). — *Partial fractions with distinct linear factors; cover-up for the constants, a non-root substitution as the check.*
15. **(i) ∫dx/(x² + 16) = (1/4)arctan(x/4) + C** — numerator is a **constant**, denominator is an irreducible sum of squares, so it is the standard arctan form with a = 4 (the 1/a is easy to lose). **(ii) ∫x dx/(x² + 16) = (1/2)ln(x² + 16) + C** — the numerator is now a constant multiple of the denominator's derivative 2x, an f′/f pattern, so substitution u = x² + 16 gives (1/2)∫du/u; no modulus is needed because x² + 16 > 0 always. **(iii) ∫x²dx/(x² + 16) = x − 4arctan(x/4) + C** — the integrand is now **improper** (equal degrees), so divide first: x²/(x² + 16) = 1 − 16/(x² + 16), and ∫ = x − 16·(1/4)arctan(x/4) = x − 4arctan(x/4). The deciding feature is entirely in the numerator: a constant gives arctan, the derivative of the denominator gives a log, and a degree equal to or above the denominator's forces a division before anything else can be said. — *Technique selection for rational functions: divide if improper, log if f′/f, arctan otherwise.*
