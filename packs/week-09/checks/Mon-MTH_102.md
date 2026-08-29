# Monday — MTH_102 nightly check

*Conceptual session on Week 9 exactly as the deck builds it: the two triggers that make ∫ₐᵇ f(x)dx improper; the Type I definitions ∫ₐ^∞ f(x)dx = lim(t→∞) ∫ₐᵗ f(x)dx and ∫₋∞ᵇ f(x)dx = lim(t→−∞) ∫ₜᵇ f(x)dx, with convergent meaning the limit exists; why ∫₋∞^∞ must be split and why one divergent half ends the question; the three Type II clauses and the one-sided limits c → b⁻ and c → a⁺; the Comparison Test in her lettering 0 ≤ g(x) ≤ f(x), its two valid conclusions and the two that prove nothing; and Note 1, ∫₁^∞ (1/xᵖ)dx converges if p > 1 and diverges if p ≤ 1.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Slide 4 lists exactly two conditions under which the definite integral ∫ₐᵇ f(x)dx is called improper. Which pair is it?
A. At least one limit of integration is infinite, or the integrand has one or more points of discontinuity on [a, b]
B. The integrand is discontinuous, or the integrand takes negative values on [a, b]
C. The interval is infinite, or the antiderivative cannot be written in closed form
D. The integrand is not differentiable on [a, b], or the interval is unbounded

**2.** What does the symbol ∫ₐ^∞ f(x)dx actually mean, according to slide 5?
A. The area under f from a onwards, computed directly by the Fundamental Theorem
B. F(∞) − F(a), where F is any antiderivative of f
C. lim(t→∞) ∫ₐᵗ f(x)dx, provided that limit exists
D. The sum of ∫ₐ^b f(x)dx over every b greater than a

**3.** On slide 5 she says the improper integrals ∫ₐ^∞ f(x)dx and ∫₋∞ᵇ f(x)dx are called convergent or divergent according to what test?
A. Convergent if the integrand tends to 0, divergent otherwise
B. Convergent if the corresponding limit exists, divergent if the limit does not exist
C. Convergent if the region under the curve is bounded, divergent if it is unbounded
D. Convergent if the integrand is positive throughout, divergent if it changes sign

**4.** Slide 5 clause 3 says: if ∫ₐ^∞ f(x)dx and ∫₋∞ᵇ f(x)dx are convergent, then ∫₋∞^∞ f(x)dx = ∫₋∞ᵃ f(x)dx + ∫ₐ^∞ f(x)dx. What is the role of the words 'are convergent'?
A. They are the conclusion — splitting the integral is what proves each half converges
B. They are a reminder that the split point must be chosen where f is continuous
C. They are optional; the sum formula holds for any f
D. They are a hypothesis — you may only add the two halves once both are known to converge, so a single divergent half makes the whole integral divergent

**5.** Slide 8 clause 1 covers f continuous on [a, b) with an infinite discontinuity at b, and gives ∫ₐᵇ f(x)dx = lim(c→b⁻) ∫ₐᶜ f(x)dx. Why is the limit one-sided, and from that side?
A. Because the moving endpoint c must stay inside the interval [a, b) where f is continuous, so it can only approach b from below
B. Because f is only defined for x less than b anywhere on the real line
C. Because a two-sided limit would give an answer twice as large
D. Because b⁻ is a notation for the value of b in the previous step of the calculation

**6.** Slide 8 clause 3 deals with f continuous on [a, b] except at some c strictly inside (a, b) where it has an infinite discontinuity. What must you do, and what goes wrong if you do not?
A. Shift the interval to avoid c; otherwise the answer is only approximate
B. Split as ∫ₐᶜ f + ∫_c^b f and take a one-sided limit into c from each side; otherwise you apply the Fundamental Theorem across a point where the integrand is undefined and can get an impossible answer
C. Take the limit as c approaches both a and b at once; otherwise you double-count the middle
D. Nothing special — the single point c has zero width, so it cannot affect a definite integral

**7.** Note 1 on slide 11 states the p-test for ∫₁^∞ (1/xᵖ)dx. Where does the boundary case p = 1 fall, and how does Example 2 depend on that?
A. p = 1 converges, and Example 2 uses it to prove ∫₃^∞ dx/√(x² − 1) converges
B. p = 1 is not covered by Note 1, so Example 2 evaluates ∫₃^∞ dx/x directly instead
C. p = 1 diverges — Note 1 says converges if p > 1 and diverges if p ≤ 1 — and Example 2 uses ∫₃^∞ dx/x as the divergent smaller function that drags 1/√(x² − 1) up with it
D. p = 1 diverges, but Example 2 avoids it by comparing with 1/x² instead

**8.** You have continuous functions with 0 ≤ g(x) ≤ f(x) for all x ≥ a, and you have established that ∫ₐ^∞ g(x)dx converges. What does the theorem on slide 10 let you conclude about ∫ₐ^∞ f(x)dx?
A. That it converges as well
B. That it diverges
C. That it converges, and to a value at least as large
D. Nothing at all — this is one of the two directions the theorem does not cover

**9.** State the Comparison Test exactly as slide 10 states it, hypothesis included, and explain in your own words which of f and g is the larger function in her lettering and how you would remember the two conclusions.
*(short answer)*

**10.** Explain why ∫₋₁² dx/x⁴ is an improper integral at all, given that both its limits of integration are finite numbers, and say what the deck requires you to do about it.
*(short answer)*

**11.** The deck's introduction says: 'Sometimes it is difficult to find the exact value of an improper integral by antidifferentiation. However, it is still possible to determine whether an improper integral converges or diverges.' Explain what the Comparison Test does and does not give you, using her Example 1 on ∫₂^∞ cos²(x)/x² dx.
*(short answer)*

**12.** Type I Example 1 reaches lim(t→∞)[−te⁻ᵗ − e⁻ᵗ + 1] and the lecturer pauses to apply L'Hôpital's Rule. Explain what needed resolving, how she resolves it, and what the common wrong answer is.
*(short answer)*

## Answers

**1. A** — Her definition has one clause about the limits of integration and one about the integrand: infinite limit (Type I), or a discontinuity somewhere on [a, b] (Type II). Option 2 imports sign, which is irrelevant — plenty of proper integrals are negative. Option 3 confuses a reason to reach for the Comparison Test with the definition; ∫₀^∞ xe⁻ˣdx has a perfectly ordinary antiderivative and is still improper. Option 4 swaps continuity for differentiability; the definition only asks about discontinuity.

**2. C** — She defines it: if ∫ₐᵗ f(x)dx exists for every t ≥ a, then ∫ₐ^∞ f(x)dx = lim(t→∞) ∫ₐᵗ f(x)dx, provided this limit exists. You replace ∞ by a letter, do an ordinary definite integral, then take the limit — and the first line is worth marks on its own. Option 1 skips the definition and applies the Fundamental Theorem where it does not apply. Option 2 treats ∞ as a number you can substitute into F; it is not one. Option 4 invents an infinite sum, a different object altogether.

**3. B** — Her wording is exact: convergent if the corresponding limit exists, divergent if it does not. Option 1 names a necessary-looking condition that is not sufficient — 1/x tends to 0 and ∫₁^∞ dx/x still diverges by Note 1 with p = 1. Option 3 is the intuition students carry in and it is wrong in both directions: the region under 1/x² from 1 onwards is unbounded in extent yet the integral converges. Option 4 has nothing to do with it; cos²(x)/x² is positive and convergent, 1/x is positive and divergent.

**4. D** — Convergence of the halves is what licenses the sum, which is exactly why Type I Example 2 can stop the moment one half runs to ∞ and write 'diverges'. Option 1 reverses hypothesis and conclusion. Option 2 states something true of Type II splitting, not of this clause. Option 3 is the error that produces the illegal cancellation of +∞ against −∞; the definition forbids it precisely by making convergence a hypothesis.

**5. A** — Every ∫ₐᶜ in the limit has to be an ordinary proper integral, so c must sit where f is continuous — inside [a, b). That forces c → b⁻. The mirror clause has the interval (a, b] and the limit c → a⁺: the arrow always points into the interval. Option 2 confuses a local blow-up with a domain restriction; f is usually defined past b, it is just not integrable up to it. Option 3 invents an arithmetic effect limits do not have. Option 4 misreads the minus superscript as bookkeeping rather than as 'from below'.

**6. B** — Her clause 3 splits at the bad point and each piece is then a Type II integral of clause 1 or clause 2 type. Type II Example 1 is built on it: ∫₋₁² dx/x⁴ ignores the split and the Fundamental Theorem returns −3/8, a negative number for a strictly positive integrand, which is impossible. Option 1 changes the question. Option 3 misreads which letter is moving. Option 4 is the seductive one — a single point does not matter for a bounded function, but here the function is unbounded near it, and that is the entire difference.

**7. C** — Note 1 is stated as converges if p > 1, diverges if p ≤ 1, so the boundary belongs to divergence — and Example 2 quotes exactly that, calling ∫₃^∞ dx/x divergent 'since p = 1'. Option 1 puts the boundary on the wrong side and would reverse the verdict. Option 2 is what many textbooks do, using a logarithm, but this deck never introduces ln x and simply quotes Note 1. Option 4 invents a different comparison; comparing 1/√(x² − 1) with the convergent 1/x² would in any case be the useless direction.

**8. D** — Her theorem runs the other way: convergence travels DOWNWARDS from f to g, and divergence travels UPWARDS from g to f. A finite area underneath puts no ceiling on the function above it. One pair settles it: on [1, ∞) take g = 1/x² and f = 1/x, so 0 ≤ g ≤ f, and by Note 1 ∫g converges (p = 2) while ∫f diverges (p = 1) — a convergent smaller one sitting under a divergent bigger one. Option 1 is the false converse of clause 1. Option 2 is equally unfounded; f could just as easily converge, as it does with g = 1/x³ and f = 1/x². Option 3 adds an inequality on values to a conclusion the theorem never reaches, and the value inequality points the wrong way besides.

**9.** A good answer reproduces the hypothesis first — f and g continuous with 0 ≤ g(x) ≤ f(x) for all x ≥ a — then both clauses: if ∫ₐ^∞ f(x)dx is convergent then ∫ₐ^∞ g(x)dx is convergent; if ∫ₐ^∞ g(x)dx is divergent then ∫ₐ^∞ f(x)dx is divergent. It should say clearly that in this deck g is the SMALLER function and f is the LARGER one, which is the reverse of most textbooks, and offer a memory hook such as: the big one convergent drags the small one down with it, the small one divergent drags the big one up with it. It should also note that 0 ≤ g is part of the hypothesis, not decoration — without non-negativity the areas can cancel and the argument collapses.

**10.** A good answer goes back to slide 4: an integral is improper if a limit is infinite OR the integrand has a point of discontinuity on the interval. Here the limits −1 and 2 are finite, so trigger 1 does not apply — but 1/x⁴ is undefined at x = 0, and 0 lies strictly between −1 and 2, so trigger 2 does. That makes it Type II with an INTERIOR discontinuity, so slide 8 clause 3 applies: split as ∫₋₁⁰ + ∫₀², then take lim(c→0⁻) on the left piece and lim(b→0⁺) on the right. The answer should stress that the integral looks completely ordinary on the page and the only way to spot it is to check the zeros of the denominator against the interval before integrating, and can add the consequence of not doing so: the Fundamental Theorem applied straight through returns −3/8, a negative number for a strictly positive integrand.

**11.** A good answer separates the verdict from the number. In Example 1 she bounds 0 ≤ cos²(x) ≤ 1, divides by the positive x² to get 0 ≤ cos²(x)/x² ≤ 1/x², sets f = 1/x² and g = cos²(x)/x², evaluates ∫₂^∞ dx/x² = 1/2, and concludes by clause 1 that the original converges. The 1/2 is the value of the COMPARISON integral, not of the original — cos²x has no elementary antiderivative in this combination, which is why comparison was needed. All that follows about the original is that it converges and is at most 1/2. Writing ∫₂^∞ cos²(x)/x² dx = 1/2 is a genuine error. The answer should also note that squaring the cosine is what makes 0 ≤ g hold; with cos x itself the hypothesis fails.

**12.** A good answer identifies the problem: as t → ∞ the factor −t tends to −∞ while e⁻ᵗ tends to 0, so −te⁻ᵗ is an indeterminate product. Rewriting e⁻ᵗ as 1/eᵗ turns it into −t/eᵗ, which the slide labels −∞/∞ — a quotient of two quantities both running to infinity, so L'Hôpital's Rule applies. Differentiating numerator and denominator gives −1/eᵗ, and since eᵗ → ∞ this tends to 0. Hence the whole bracket tends to 0 + 0 + 1 = 1 and the integral converges to 1. The common wrong answer is to read −t → −∞ off the front and declare the limit −∞ (hence divergence); the point is that the exponential in the denominator grows faster than any polynomial, so it wins. A good answer may also note that the +1 comes from subtracting the value of −xe⁻ˣ − e⁻ˣ at x = 0, which is −1.
