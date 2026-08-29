# Thursday — MTH_102 nightly check

*Integration technique problems: carrying out substitutions including the ones that need a leftover x re-expressed and the ones that change the limits of a definite integral, integrating by parts once, twice and in the cycling case where you solve for the integral, converting an integrand under a trigonometric substitution and getting back to x, and doing long division and partial-fraction decomposition before integrating — with the sign and constant traps at each step.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** ∫₁² x(x² − 1)³dx =
a) 81/4   b) 15/8   c) 81/8   d) 243/8

**2.** ∫x e^{3x}dx =
a) (x e^{3x})/3 − e^{3x}/3 + C
b) (x e^{3x})/3 − e^{3x}/9 + C
c) x e^{3x} − e^{3x} + C
d) (x²/2)e^{3x} + C

**3.** ∫x ln x dx =
a) x ln x − x + C
b) (x²/2)ln x − x²/2 + C
c) (x²/2)(1/x) + C
d) (x²/2)ln x − x²/4 + C

**4.** Writing (4x − 5)/((x − 2)(x + 1)) = A/(x − 2) + B/(x + 1), the constants are:
a) A = 3, B = 1   b) A = 1, B = 3   c) A = 1, B = −3   d) A = 3, B = −9

**5.** Under the substitution x = 3 tanθ, the integral ∫dx/(x² + 9)² becomes:
a) (1/3)∫dθ
b) (1/27)∫dθ
c) (1/27)∫sec²θ dθ
d) (1/27)∫cos²θ dθ

**6.** ∫₀^π x sin x dx =
a) π²/2   b) 0   c) π   d) −π

**7.** ∫eˣ sin x dx =
a) eˣ(sin x − cos x)/2 + C
b) eˣ(sin x + cos x)/2 + C
c) −eˣ cos x + C
d) eˣ sin x − eˣ cos x + C

**8.** ∫(2x + 1)/(x − 3) dx =
a) 2x + ln|x − 3| + C
b) ln|2x + 1| − ln|x − 3| + C
c) 2x + 7ln|x − 3| + C
d) (x² + x)/(x²/2 − 3x) + C

**9. (explain why)** Evaluate ∫x²cos x dx. Show both applications of parts, state what u and dv are each time, and say what would have gone wrong had you taken u = cos x on the first application.

**10. (explain why)** Evaluate ∫x√(x + 2) dx. Explain why the substitution does not finish at du = dx and what extra step the leftover x forces on you.

**11. (explain why)** Evaluate ∫(x² + x + 2)/(x(x² + 1))dx by partial fractions. Justify the form you write down, and explain why the term over x² + 1 splits into two different kinds of integral.

**12. (explain why)** Evaluate ∫√(4 − x²)dx. State the substitution and its θ-range, show the identity that removes the root, show the step needed before cos²θ can be integrated, and complete the return to x.

---

## Answers

**1. c** — *Substitution in a definite integral: divide by the constant in du, and move the limits with the variable.* u = x² − 1, du = 2x dx so x dx = du/2; x = 1 → u = 0 and x = 2 → u = 3. The integral is (1/2)∫₀³u³du = (1/2)[u⁴/4]₀³ = (1/2)(81/4) = 81/8. (a) forgets the ½ from x dx = du/2; (b) keeps the **x**-limits 1 and 2 and evaluates the u-antiderivative at them, giving (1/2)(16 − 1)/4 = 15/8 — the classic definite-substitution error; (d) expands (x² − 1)³ as x⁶ − 1, losing the cross terms, and integrates ∫₁²(x⁷ − x)dx = 243/8.

**2. b** — *Parts with u = x: v is the integral of dv, and the second term must be integrated too.* u = x, dv = e^{3x}dx ⟹ du = dx, v = e^{3x}/3. Then ∫ = xe^{3x}/3 − ∫e^{3x}/3 dx = xe^{3x}/3 − e^{3x}/9. (a) forgets the second division by 3 when integrating e^{3x}/3; (c) takes v = e^{3x}, dropping the ⅓ that ∫e^{3x}dx supplies, in both terms; (d) integrates the two factors separately and multiplies, which is the non-existent "product rule for integration". Differentiating (b) returns e^{3x}/3 + xe^{3x} − e^{3x}/3 = xe^{3x} ✓.

**3. d** — *LIATE puts the logarithm in u; the traded integral is then purely algebraic.* u = ln x, dv = x dx ⟹ du = dx/x, v = x²/2. So ∫ = (x²/2)ln x − ∫(x²/2)(1/x)dx = (x²/2)ln x − ∫(x/2)dx = (x²/2)ln x − x²/4. (b) integrates x/2 as x²/2, dropping the ½; (c) differentiates ln x and multiplies by the integral of x, i.e. treats the product as separable; (a) is ∫ln x dx, the right answer to a different question — the x factor has been ignored.

**4. b** — *Cover-up: clear the denominators, then substitute each root in turn.* 4x − 5 = A(x + 1) + B(x − 2). Put x = 2: 3 = 3A ⟹ A = 1. Put x = −1: −9 = −3B ⟹ B = 3. (a) attaches each constant to the wrong factor — the value found by setting x = 2 belongs over (x − 2); (c) mishandles −9 = −3B and keeps a minus sign that the two negatives cancel; (d) reads off the left-hand sides 3 and −9 as the answers without dividing by the bracket values 3 and −3.

**5. d** — *Every part of the integrand must be converted: the differential as well as the expression.* x = 3tanθ gives dx = 3sec²θ dθ and x² + 9 = 9tan²θ + 9 = 9sec²θ, so (x² + 9)² = 81sec⁴θ. Hence the integrand is 3sec²θ dθ/(81sec⁴θ) = (1/27)·(1/sec²θ)dθ = (1/27)cos²θ dθ. (a) squares nothing — it uses (x² + 9) in place of (x² + 9)², giving 3sec²θ/(9sec²θ); (b) squares the constant but not the secant, using 81sec²θ; (c) inverts the ratio sec²θ/sec⁴θ, turning it into sec²θ instead of cos²θ. Note that the answer will still need cos²θ = (1 + cos 2θ)/2 before it can be integrated.

**6. c** — *Definite parts: [uv] evaluated at the limits, then the remaining integral.* u = x, dv = sin x dx ⟹ v = −cos x. ∫₀^π x sin x dx = [−x cos x]₀^π + ∫₀^π cos x dx = (−π·(−1) − 0) + [sin x]₀^π = π + 0 = π. (d) takes v = cos x instead of −cos x, flipping the sign of the whole answer; (a) integrates the factors separately, giving [(x²/2)(−cos x)]₀^π = π²/2; (b) assumes the positive and negative halves cancel, which is true over [0, 2π] but false over [0, π], where sin x ≥ 0 throughout and the integrand x sin x is never negative — so the answer cannot possibly be 0.

**7. a** — *The cycling case: apply parts twice with the same role for eˣ, then solve algebraically for I.* Let I = ∫eˣsin x dx. Taking u = sin x, dv = eˣdx: I = eˣsin x − ∫eˣcos x dx. Applying parts again to ∫eˣcos x dx with u = cos x, dv = eˣdx gives eˣcos x + ∫eˣsin x dx = eˣcos x + I. So I = eˣsin x − eˣcos x − I ⟹ 2I = eˣ(sin x − cos x) ⟹ I = eˣ(sin x − cos x)/2. (b) is the answer to ∫eˣcos x dx — the two are constantly swapped; (c) stops after treating ∫eˣcos x as though it vanished; (d) reaches 2I correctly but reports 2I as I, forgetting to halve. Differentiating (a): eˣ(sin x − cos x)/2 + eˣ(cos x + sin x)/2 = eˣ sin x ✓.

**8. c** — *An improper rational integrand must be divided out before anything else.* 2x + 1 = 2(x − 3) + 7, so (2x + 1)/(x − 3) = 2 + 7/(x − 3) and the integral is 2x + 7ln|x − 3| + C. (a) divides carelessly, writing the remainder as 1 instead of 7 — check by multiplying back: 2(x − 3) + 1 = 2x − 5 ≠ 2x + 1; (b) takes the log of numerator and denominator separately, which is not a rule; (d) integrates top and bottom independently and divides, the quotient version of the same non-existent rule.

**9.** *Concept: parts applied repeatedly, once per power of x, with u chosen so that the algebraic factor is the one that degrades.* First application: u = x², dv = cos x dx ⟹ du = 2x dx, v = sin x, giving ∫x²cos x dx = x²sin x − ∫2x sin x dx. Second application on ∫2x sin x dx: u = 2x, dv = sin x dx ⟹ du = 2dx, v = −cos x, giving −2x cos x + ∫2cos x dx = −2x cos x + 2sin x. Substituting back, with the minus sign in front of the whole bracket:
**∫x²cos x dx = x²sin x + 2x cos x − 2sin x + C.**
Check: d/dx = 2x sin x + x²cos x + 2cos x − 2x sin x − 2cos x = x²cos x ✓.
Had u = cos x been chosen first, du = −sin x dx and v = x³/3, so the traded integral would be ∫(x³/3)sin x dx — the power of x has gone **up**, and every further application makes it worse. The algebraic factor must be u precisely because differentiating it lowers its degree, so the process terminates after two steps.

**10.** *Concept: a substitution is complete only when no x remains — a leftover x is removed by solving the substitution backwards, not by leaving it in.* Put u = x + 2, so du = dx. That converts √(x + 2) into √u, but the standalone factor x is still an x, and an integral containing both u and x is not an integral in one variable. The extra step is to solve the substitution for x: x = u − 2. Then
∫x√(x + 2)dx = ∫(u − 2)u^{1/2}du = ∫(u^{3/2} − 2u^{1/2})du = (2/5)u^{5/2} − (4/3)u^{3/2} + C
= **(2/5)(x + 2)^{5/2} − (4/3)(x + 2)^{3/2} + C.**
This is the case people abandon too early: substitution has no requirement that the inner derivative "cancel" the leftover factor — it only requires that everything be expressible in u, and a linear substitution always allows that. (Multiplying out u^{1/2} into the bracket before integrating is compulsory; ∫(u − 2)u^{1/2}du is not (u − 2)·(2/3)u^{3/2}.)

**11.** *Concept: the decomposition form is dictated by the factors of the denominator, and an irreducible quadratic needs a linear numerator, which then splits into a log part and an arctan part.* x² + 1 has discriminant −4 < 0, so it is irreducible over the reals and must carry a **linear** numerator; x is a distinct linear factor and carries a constant. So write
(x² + x + 2)/(x(x² + 1)) = A/x + (Bx + C)/(x² + 1) ⟹ x² + x + 2 = A(x² + 1) + (Bx + C)x.
Put x = 0: 2 = A. Compare x²: 1 = A + B ⟹ B = −1. Compare x: 1 = C. So the integrand is 2/x + (1 − x)/(x² + 1), and
∫ = 2ln|x| + ∫dx/(x² + 1) − ∫x dx/(x² + 1) = **2ln|x| + arctan x − (1/2)ln(x² + 1) + C.**
The split is forced because the two pieces of a linear numerator do different jobs: the **x** part is (up to the factor ½) the derivative of x² + 1, so it integrates to a logarithm by substitution; the **constant** part has no such match and integrates to an inverse tangent. Writing B alone over x² + 1 would make the logarithm impossible to produce and the system of equations inconsistent.

**12.** *Concept: trigonometric substitution turns a difference of squares into a perfect square, and the resulting even power of cosine needs the double-angle identity before it can be integrated.* Put x = 2sinθ with −π/2 ≤ θ ≤ π/2, so dx = 2cosθ dθ and
4 − x² = 4 − 4sin²θ = 4(1 − sin²θ) = 4cos²θ ⟹ √(4 − x²) = 2cosθ (no modulus needed, since cosθ ≥ 0 on that range).
∫√(4 − x²)dx = ∫(2cosθ)(2cosθ)dθ = 4∫cos²θ dθ = 4∫(1 + cos 2θ)/2 dθ = 2θ + sin 2θ = 2θ + 2sinθcosθ.
Return to x by the triangle (opposite x, hypotenuse 2, adjacent √(4 − x²)): θ = arcsin(x/2), sinθ = x/2, cosθ = √(4 − x²)/2. Hence
**∫√(4 − x²)dx = 2arcsin(x/2) + x√(4 − x²)/2 + C.**
The two steps most often skipped are the double-angle rewrite — ∫cos²θ dθ is not (cos³θ)/3 or anything like it — and the final conversion: an answer containing θ is not an answer in x.
