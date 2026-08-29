# MTH_102 — Week 9 Questions

*Improper integrals: Type I, Type II, the Comparison Test and Note 1 (the p-test). Twelve multiple choice, three short answer. Answers at the bottom — work them before you look.*

## Multiple choice

**1.** Slide 4 says ∫ₐᵇ f(x)dx is an improper integral if
A. f is not differentiable somewhere on [a, b]
B. f takes negative values on [a, b]
C. a limit of integration is infinite, or f has a discontinuity on [a, b]
D. f has no antiderivative in closed form

**2.** ∫₀^∞ xe⁻ˣ dx
A. converges to 1
B. converges to 0
C. diverges to ∞
D. converges to −1

**3.** In that example, lim(t→∞) (−te⁻ᵗ) =
A. −∞
B. 0
C. −1
D. it does not exist

**4.** ∫₋∞^∞ (2x² − x + 3)dx
A. converges to 0, by symmetry
B. converges to 3
C. converges, because the two infinite halves cancel
D. diverges

**5.** The first thing to do with ∫₋₁² dx/x⁴ is
A. split at x = 0 and take a one-sided limit into 0 from each side
B. apply the FTC with −1/(3x³) straight from −1 to 2
C. compare it with 1/x² and quote Note 1
D. replace 2 by t and let t → ∞

**6.** Note 1: ∫₁^∞ (1/xᵖ)dx converges when
A. p ≥ 1
B. p < 1
C. p > 1
D. p ≤ 1

**7.** Given 0 ≤ g(x) ≤ f(x) for all x ≥ a, which conclusion does slide 10 license?
A. ∫ₐ^∞ g converges ⟹ ∫ₐ^∞ f converges
B. ∫ₐ^∞ g diverges ⟹ ∫ₐ^∞ f diverges
C. ∫ₐ^∞ f diverges ⟹ ∫ₐ^∞ g diverges
D. ∫ₐ^∞ f converges ⟹ ∫ₐ^∞ g diverges

**8.** ∫₃^∞ dx/√(x² − 1)
A. converges, since 1/√(x² − 1) ≤ 1/x
B. converges, by Note 1 with p = 2
C. diverges, since 1/√(x² − 1) ≤ 1/x
D. diverges, since 1/√(x² − 1) ≥ 1/x and ∫₃^∞ dx/x has p = 1

**9.** In Example 3 the comparison function 1/√(x³) is
A. 1/x³, so p = 3
B. 1/x^(2/3), so p = 2/3
C. 1/x^(3/2), so p = 3/2
D. 1/x^(1/3), so p = 1/3

**10.** The TASK slide: ∫₁^∞ dx/√(x⁶ + 1)
A. converges, by comparison with 1/x³, p = 3
B. diverges, by comparison with 1/x, p = 1
C. converges, by comparison with 1/x^(1/3)
D. diverges, because √(x⁶ + 1) ≥ x³

**11.** From 0 ≤ cos²x ≤ 1 and ∫₂^∞ dx/x² = 1/2, what follows about ∫₂^∞ cos²(x)/x² dx?
A. it equals 1/2
B. it equals 1/2 minus a correction
C. it diverges, because cos²x oscillates forever
D. it converges, and is at most 1/2

**12.** A student writes ∫₋₁² dx/x⁴ = [−1/(3x³)]|₋₁² = −1/24 − 1/3 = −3/8. What is wrong?
A. the antiderivative should be −1/(4x⁴)
B. the FTC was used across x = 0, where the integrand is undefined; the integral diverges
C. the limits were subtracted in the wrong order
D. nothing — −3/8 is correct

## Short answer

**13.** State the Comparison Test exactly as slide 10 states it, hypothesis included. Then name the two implications the deck does **not** license, and give the reason no conclusion is available in those two cases.

**14.** Work the TASK slide in full: determine whether ∫₁^∞ dx/√(x⁶ + 1) converges or diverges. Show each inequality step, name f and g in the lecturer's lettering, and say which clause of the theorem you are using.

**15.** Slide 9 concludes that ∫₋₁² dx/x⁴ is divergent, and states "[−1/(3x³)] → −∞ as c → 0⁻ and [−1/(3x³)] → −∞ as b → 0⁺." One of those two claims is wrong. Say which, work out what each of the two pieces actually tends to, and explain why the slide's verdict is nevertheless correct.

---

## Answers

**1. C.** Slide 4 gives exactly two triggers: an infinite limit of integration, or a point of discontinuity of the integrand on [a, b]. A confuses continuity with differentiability — neither is the criterion, and a discontinuity is what matters. B is irrelevant; sign has nothing to do with it (Example 1's ln-free polynomial and the −3/8 trap both involve signs without being the issue). D describes a reason to use the Comparison Test, not a definition of improper.

**2. A.** ∫₀^∞ xe⁻ˣdx = lim(t→∞)[−xe⁻ˣ − e⁻ˣ]|₀ᵗ = lim(−te⁻ᵗ − e⁻ᵗ + 1) = 0 + 0 + 1 = 1. B forgets the lower-limit contribution, which is where the 1 comes from. C is what you get by claiming −te⁻ᵗ → −∞ (or +∞) instead of applying L'Hôpital. D drops the sign when subtracting the value at 0, which is −1.

**3. B.** −te⁻ᵗ = −t/eᵗ is of the form −∞/∞, so L'Hôpital differentiates top and bottom: −1/eᵗ → 0. A is the standard error — reading "t → ∞" off the numerator and ignoring that the exponential in the denominator grows faster. C guesses the coefficient. D confuses an indeterminate form with a non-existent limit; the indeterminate form is what L'Hôpital exists to resolve.

**4. D.** The right-hand half, lim(b→∞)[2x³/3 − x²/2 + 3x]|₀ᵇ, runs to ∞, and clause 3 of slide 5 only lets you add the two halves **if both converge**. One divergent half ends it. A and C are the same illegal move — cancelling +∞ against −∞, which the definition forbids because each half must converge on its own. B invents a finite value from the constant term.

**5. A.** 1/x⁴ is undefined at x = 0, which lies strictly inside [−1, 2], so slide 8 clause 3 applies: split at 0 and take lim(c→0⁻) on the left and lim(b→0⁺) on the right. B is the trap the example is built around and yields the impossible −3/8. C is a Type I tool applied to a Type II problem, and 1/x⁴ is not smaller than 1/x² near 0 anyway. D invents an infinite limit; both limits here are finite numbers.

**6. C.** Note 1, verbatim: converges if p > 1, diverges if p ≤ 1. A and D both put the boundary p = 1 on the convergent side, and Example 2 depends on p = 1 being **divergent**. B is the rule for the singularity at 0 — a rule this deck never states — applied at the wrong end.

**7. B.** Clause 2: the small one divergent drags the big one up with it. A is the false converse in the convergent direction — 0 ≤ 1/x² ≤ 1/x has convergent ∫g and divergent ∫f. C is the false converse in the divergent direction, refuted by the same pair. D is not a comparison statement at all; a convergent upper bound can never force divergence underneath it.

**8. D.** x² − 1 < x² ⟹ √(x² − 1) < x ⟹ 1/√(x² − 1) > 1/x. So 1/x is g, the messy one is f, ∫₃^∞ dx/x diverges by Note 1 with p = 1, and clause 2 gives divergence. A and C both invert the reciprocal step and get the inequality backwards. B misreads p: the exponent under the root is 2, but the function is not 1/x², and in any case Note 1 applies to the comparison function, not to whatever is under a radical.

**9. C.** √(x³) = x^(3/2), so 1/√(x³) = 1/x^(3/2) and p = 3/2, which exceeds 1 — hence convergence by Note 1. A forgets the square root entirely. B inverts the fractional exponent. D takes the cube root instead of the square root of the cube.

**10. A.** For x ≥ 1, x⁶ + 1 ≥ x⁶, so √(x⁶ + 1) ≥ x³ and therefore 1/√(x⁶ + 1) ≤ 1/x³. With f = 1/x³ (p = 3 > 1, convergent) and g the given integrand, clause 1 gives convergence. B compares with the wrong power. C halves the exponent instead of halving 6 to 3. D states a correct inequality but reads it backwards: a bigger denominator makes the fraction **smaller**, which is exactly what makes convergence available.

**11. D.** 0 ≤ cos²x/x² ≤ 1/x² on [2, ∞), and ∫₂^∞ dx/x² = 1/2 converges, so by clause 1 the given integral converges — and being under a function whose integral is 1/2, its value is at most 1/2. A is the deck's own warning: 1/2 is the value of the **comparison** integral, not of this one. B invents a computable correction; comparison never produces a value. C treats oscillation as divergence, but cos²x is squared and never negative, and it is divided by x² anyway.

**12. B.** −1/(3x³) is discontinuous at x = 0, which sits inside [−1, 2], so the Fundamental Theorem does not apply across the interval; splitting at 0 shows both pieces run to +∞ and the integral diverges. The tell-tale is that a strictly positive integrand has produced a negative answer. A is wrong — ∫x⁻⁴dx = x⁻³/(−3) = −1/(3x³), which is what the slide uses. C would only flip the sign to +3/8, which is still not an answer to a divergent integral. D accepts the trap.

**13.** Slide 10, verbatim in substance: *let f(x) and g(x) be any two continuous functions such that **0 ≤ g(x) ≤ f(x) for all x ≥ a**; then (1) if ∫ₐ^∞ f(x)dx is convergent, then ∫ₐ^∞ g(x)dx is convergent, and (2) if ∫ₐ^∞ g(x)dx is divergent, then ∫ₐ^∞ f(x)dx is divergent.* The non-negativity 0 ≤ g is part of the hypothesis, not decoration. The two implications **not** licensed are: *∫ₐ^∞ g convergent ⟹ ∫ₐ^∞ f convergent*, and *∫ₐ^∞ f divergent ⟹ ∫ₐ^∞ g divergent*. Both fail for the same reason: knowing that the **smaller** function encloses finite area puts no ceiling on the larger one, and knowing that the **larger** one encloses infinite area puts no floor under the smaller one. A single pair settles both — take g(x) = 1/x² and f(x) = 1/x on [1, ∞), where 0 ≤ g ≤ f, ∫g converges by Note 1 (p = 2) and ∫f diverges by Note 1 (p = 1). So the small one can converge while the big one diverges, which refutes both. If your comparison lands in one of these two boxes it has told you nothing and you need a different comparison function; the deck offers no other tool.

**14.** **It converges.** Working, in the lecturer's order: for all x ≥ 1, **x⁶ + 1 ≥ x⁶**; taking square roots preserves the inequality between non-negative quantities, so **√(x⁶ + 1) ≥ √(x⁶) = x³** (the last equality holds because x ≥ 1 > 0, so x³ is positive and √(x⁶) = |x³| = x³); taking reciprocals of positive quantities **reverses** it, giving **1/√(x⁶ + 1) ≤ 1/x³**. Let **f(x) = 1/x³** and **g(x) = 1/√(x⁶ + 1)**; both are continuous and positive on [1, ∞), so **0 ≤ g(x) ≤ f(x)** for all x ≥ 1. Now ∫₁^∞ (1/x³)dx has **p = 3 > 1**, so by **Note 1** it is convergent. By **clause 1** of the Comparison Test — the big one convergent forces the small one convergent — **∫₁^∞ dx/√(x⁶ + 1) converges.** No value is claimed and none is available by this method; all that also follows is that the integral is at most ∫₁^∞ dx/x³ = 1/2.

**15.** The wrong claim is the **first**: "[−1/(3x³)] → −∞ as c → 0⁻". As c approaches 0 from below, c is a small negative number, so c³ is a small negative number, 3c³ → 0⁻, and −1/(3c³) → **+∞**, not −∞. Working each piece out fully, with F(x) = −1/(3x³):
**Left piece:** lim(c→0⁻) F(x)|₋₁ᶜ = lim(c→0⁻) (−1/(3c³) − (−1/(3(−1)³))) = lim(c→0⁻) (−1/(3c³) − 1/3) = **+∞**.
**Right piece:** lim(b→0⁺) F(x)|_b² = lim(b→0⁺) (−1/24 − (−1/(3b³))) = lim(b→0⁺) (−1/24 + 1/(3b³)) = **+∞**.
So both pieces tend to +∞. Note that the slide's second claim, −1/(3b³) → −∞ as b → 0⁺, is true **about the expression**, but b is the **lower** limit of the right-hand integral, so that value is subtracted and the piece itself goes to +∞ — the slide's phrasing invites you to read a −∞ into the answer that is not there. The verdict is nevertheless correct: divergence only requires that a limit fail to exist as a finite number, and here neither piece has a finite limit, so **∫₋₁² dx/x⁴ is divergent** — as the slide says. Write +∞ for both pieces in a script, and say so.
