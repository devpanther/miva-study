# MTH_102 — Week 9 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 10, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** ∫₁^∞ dx/x^{3/2} =
a) 2   b) 1/2   c) 2/3   d) it diverges

**2.** ∫₀¹ dx/x^{1/3} =
a) 3/2   b) 3   c) 2/3   d) it diverges

**3.** ∫_{−∞}⁰ eˣ dx =
a) 1   b) 0   c) −1   d) it diverges

**4.** Given 0 ≤ f(x) ≤ g(x) on [a, ∞), which conclusion is valid?
a) ∫ₐ^∞ f converges ⟹ ∫ₐ^∞ g converges
b) ∫ₐ^∞ f diverges ⟹ ∫ₐ^∞ g diverges
c) ∫ₐ^∞ g diverges ⟹ ∫ₐ^∞ f diverges
d) ∫ₐ^∞ g converges ⟹ ∫ₐ^∞ f diverges

**5.** ∫₁^∞ dx/(x² + x + 1):
a) converges, by comparison with 1/x²
b) diverges, by comparison with 1/x
c) converges, by comparison with 1/x
d) diverges, because 1/(x² + x + 1) < 1/x and ∫₁^∞ dx/x diverges

**6.** Which integral is improper at **both** ends and so must be split before testing?
a) ∫₀^∞ dx/√x   b) ∫₁^∞ dx/x²   c) ∫₀¹ dx/√x   d) ∫₀¹ dx/(1 + x)

**7.** ∫_{−1}¹ dx/x =
a) 0, since the integrand is odd and the interval symmetric
b) it diverges
c) 0, since [ln|x|]_{−1}¹ = ln 1 − ln 1
d) 2

**8.** The Limit Comparison Test lets you conclude that ∫f and ∫g behave **the same way** provided f, g > 0 and lim_{x→∞} f/g = L with:
a) L existing, finite or infinite   b) 0 < L < ∞   c) L = 1   d) L = 0

**9.** ∫₂^∞ dx/(x ln x):
a) converges, to 1/ln 2   b) it diverges   c) converges, to ln ln 2   d) converges, to 0

**10.** ∫₁^∞ (2 + cos x)/x dx:
a) diverges, since (2 + cos x)/x ≥ 1/x and ∫₁^∞ dx/x diverges
b) converges, since cos x oscillates and its contributions cancel
c) converges, since (2 + cos x)/x ≤ 3/x
d) diverges, since (2 + cos x)/x ≤ 3/x and ∫₁^∞ 3dx/x diverges

**11.** ∫₀¹ ln x dx =
a) −1   b) 1   c) 0   d) it diverges

**12.** Comparing sin²x/x² with 1/x² on [1, ∞) establishes that ∫₁^∞ (sin²x)/x² dx:
a) converges
b) converges, and equals 1
c) diverges
d) nothing, because sin²x changes sign

## Section B — Short answer (3)

**13.** Starting from the antiderivative of x^{−p}, derive the condition on p for ∫₁^∞ dx/xᵖ to converge and the condition on p for ∫₀¹ dx/xᵖ to converge, giving the value in each convergent case. Then state in one sentence why the two conditions are opposites.

**14.** Determine whether ∫₁^∞ (x + 2)/(x³ + 1) dx converges. Use the Limit Comparison Test with a comparison function you justify, compute the limit L explicitly, and then give a direct comparison that reaches the same conclusion.

**15.** The three integrals ∫₁^∞ dx/x², ∫₀¹ dx/x² and ∫₀^∞ dx/x² have the same integrand but three different treatments and two different fates. Classify each by type, state its fate with a limit computation, and say what this shows about applying a p-test without first asking where the trouble is.

## Answers

1. **a** — *p-test at infinity: ∫₁^∞ dx/xᵖ = 1/(p − 1) when p > 1.* p = 3/2, so the value is 1/(1/2) = 2; explicitly [−2x^{−1/2}]₁^t = 2 − 2/√t → 2. (b) is 1/p; (c) is 1/(p + 1), read off the wrong step of the power rule; (d) applies the near-zero rule (p < 1 converges) at the wrong end — 3/2 > 1 is precisely the convergent case here.
2. **a** — *p-test near zero: ∫₀¹ dx/xᵖ = 1/(1 − p) when p < 1.* p = 1/3, so the value is 1/(2/3) = 3/2; explicitly [3x^{2/3}/2]_t¹ → 3/2. (b) is the antiderivative constant for x^{−2/3}, i.e. the right method applied to the wrong exponent; (c) is p read as the answer; (d) applies the infinity test at the origin, where small p is exactly what makes the singularity mild enough to integrate.
3. **a** — *∫_{−∞}^b f = lim_{t→−∞}∫_t^b f.* Here lim_{t→−∞}[eˣ]_t⁰ = lim(1 − e^t) = 1, since e^t → 0 as t → −∞. (b) assumes e^t → 1; (c) has the subtraction reversed; (d) supposes eˣ grows as x → −∞, confusing the two ends of the exponential — it is ∫₀^∞ eˣ dx that diverges.
4. **b** — *Bigger than divergent is divergent; smaller than convergent is convergent. Those two, and no others.* If the smaller function already encloses infinite area, the larger one must too. (a) is the false converse in the convergent direction — 1/x² ≤ 1/x has convergent f and divergent g; (c) is the false converse in the divergent direction, and 1/x² ≤ 1/x again refutes it; (d) is not even a comparison statement, since a convergent upper bound can never force divergence below it.
5. **a** — *Keep leading terms and bound above by a convergent p-integral.* For x ≥ 1, x² + x + 1 > x² > 0, so 0 < 1/(x² + x + 1) < 1/x², and ∫₁^∞ dx/x² converges (p = 2). (b) and (d) rest on the true but useless inequality 1/(x² + x + 1) < 1/x: smaller than divergent proves nothing, and here it happens to point at the wrong verdict as well; (c) reaches the right verdict from the same invalid inequality, and would earn no marks — the comparison function for a convergence proof must itself converge.
6. **a** — *Improper at both ends: Type II at 0 because 1/√x → ∞ there, and Type I at ∞ because the interval is unbounded.* It must be split, e.g. at 1, and each piece tested separately (here ∫₀¹ converges, p = 1/2 < 1, but ∫₁^∞ diverges, p = 1/2 < 1 at infinity, so the whole thing diverges). (b) is Type I only; (c) is Type II only; (d) is entirely proper — 1 + x never vanishes on [0, 1].
7. **b** — *An infinite discontinuity at an interior point forces a split, and here each half diverges.* ∫₀¹ dx/x = lim_{t→0⁺}(−ln t) = ∞, so the integral diverges regardless of the other half. (a) and (c) are the two faces of the same error: applying the FTC or a symmetry argument across a point where the integrand is undefined. The symmetric limit lim_{ε→0}(∫_{−1}^{−ε} + ∫_ε¹) is 0, but that is the principal value, not the integral; (d) is an arithmetic guess with no derivation.
8. **b** — *The two-way conclusion requires the ratio to settle on a strictly positive finite number.* Then f and g are eventually within constant multiples of each other in both directions, so neither can converge without the other. (a) admits L = 0 and L = ∞, which give only one-way implications (L = 0: g convergent ⟹ f convergent; L = ∞: g divergent ⟹ f divergent); (c) is unnecessarily strict — any L in (0, ∞) works, and requiring L = 1 would make the test nearly unusable; (d) names one of the two degenerate cases as though it were the hypothesis.
9. **b** — *Substitute u = ln x, du = dx/x: the integral becomes ∫_{ln 2}^∞ du/u, a p = 1 integral, which diverges.* Explicitly [ln ln x]₂^t = ln ln t − ln ln 2 → ∞. (a) is the value of the neighbouring convergent integral ∫₂^∞ dx/(x(ln x)²) = 1/ln 2 — the extra power of ln x is the whole difference; (c) is the lower-limit term alone, mistaken for the answer; (d) confuses the integrand tending to 0 with the integral being 0. Note both integrands are smaller than 1/x, which is why "smaller than divergent" can never be conclusive.
10. **a** — *Bound the oscillation below by a constant, then compare with the divergent 1/x.* Since cos x ≥ −1, we have 2 + cos x ≥ 1 > 0, so (2 + cos x)/x ≥ 1/x on [1, ∞); ∫₁^∞ dx/x diverges, so by the divergent half of the comparison test the given integral diverges. (b) treats bounded oscillation as if it produced cancellation, but the integrand here is strictly positive and never cancels anything; (c) and (d) both use the upper bound 3/x — a correct inequality, but pointing at a divergent function from below, which supports neither conclusion. (c) additionally draws a convergence conclusion from a divergent comparison, which is impossible in any direction.
11. **a** — *Type II at x = 0, evaluated by parts inside a limit.* ∫ln x dx = x ln x − x, so ∫_t¹ ln x dx = (0 − 1) − (t ln t − t), and t ln t → 0 as t → 0⁺, so the limit is −1. (b) drops the sign, or evaluates only the upper limit; (c) assumes the singularity forces cancellation to 0; (d) assumes any infinite discontinuity means divergence — the integrand is unbounded at 0, but only mildly, and the area is finite. A negative answer is correct here because ln x < 0 on (0, 1).
12. **a** — *Comparison decides convergence and nothing else.* 0 ≤ sin²x ≤ 1, so 0 ≤ sin²x/x² ≤ 1/x² on [1, ∞), and ∫₁^∞ dx/x² converges; hence the given integral converges. (b) misreads the comparison as an evaluation — all that follows is ∫₁^∞ sin²x/x² dx ≤ 1, and the actual value is smaller; (c) is the wrong verdict from the right inequality; (d) confuses sin x, which changes sign, with sin²x, which never does — squaring is exactly what makes the non-negativity hypothesis hold.
13. **∫₁^∞ dx/xᵖ converges ⟺ p > 1, with value 1/(p − 1); ∫₀¹ dx/xᵖ converges ⟺ p < 1, with value 1/(1 − p).** For p ≠ 1 the antiderivative is x^{1−p}/(1 − p). At infinity: ∫₁^t = (t^{1−p} − 1)/(1 − p); if p > 1 then 1 − p < 0 so t^{1−p} → 0 and the limit is 1/(p − 1); if p < 1 then t^{1−p} → ∞ and it diverges. Near zero: ∫_t¹ = (1 − t^{1−p})/(1 − p); if p < 1 then t^{1−p} → 0 and the limit is 1/(1 − p); if p > 1 then t^{1−p} → ∞ and it diverges. In both cases p = 1 must be done separately with ln, and diverges: [ln x]₁^t → ∞ and [ln x]_t¹ = −ln t → ∞. The conditions are opposites because a large p makes xᵖ **big far away** (a fast-decaying integrand, which is what a convergent tail needs) but also **small near 0** (a fast-blowing-up integrand, which is what makes a singularity non-integrable) — the same exponent helps at one end exactly as much as it hurts at the other. — *The two p-tests, derived from one antiderivative.*
14. **Converges.** Comparison function: for large x the integrand behaves like x/x³ = 1/x², since only leading terms survive, so take g(x) = 1/x². Both f(x) = (x + 2)/(x³ + 1) and g are positive and continuous on [1, ∞). Limit: L = lim_{x→∞} f/g = lim_{x→∞} x²(x + 2)/(x³ + 1) = lim (x³ + 2x²)/(x³ + 1) = 1, and 0 < 1 < ∞, so f and g behave the same way. ∫₁^∞ dx/x² converges (p = 2 > 1), therefore **∫₁^∞ (x + 2)/(x³ + 1) dx converges.** Direct comparison: on [1, ∞), x + 2 ≤ 3x and x³ + 1 > x³, so 0 < (x + 2)/(x³ + 1) < 3x/x³ = 3/x², and ∫₁^∞ 3dx/x² = 3 converges; the same conclusion follows, with the constant 3 harmlessly absorbed. Neither argument gives the value — only convergence. — *Limit comparison by dominant term, with a direct comparison as a check; a positive constant multiple never changes convergence.*
15. **(i) ∫₁^∞ dx/x² — Type I, converges to 1.** The interval is infinite, the integrand continuous on it: lim_{t→∞}[−1/x]₁^t = lim(1 − 1/t) = 1. **(ii) ∫₀¹ dx/x² — Type II at the lower endpoint, diverges.** The interval is finite but 1/x² → ∞ as x → 0⁺: lim_{t→0⁺}[−1/x]_t¹ = lim(−1 + 1/t) = +∞. **(iii) ∫₀^∞ dx/x² — improper at both ends, diverges.** It must be split, ∫₀¹ + ∫₁^∞; the second piece converges by (i) but the first diverges by (ii), and one divergent piece is enough to make the whole integral divergent. What this shows is that "p = 2 > 1, therefore convergent" is not a statement about the function 1/x² at all — it is a statement about its behaviour **at infinity**, and it says nothing about a singularity at the origin, where the relevant test is p < 1 and p = 2 fails it. Before any p-test is quoted you must first locate where the integral is improper, and if it is improper in two places you must split and test each place with the test that belongs there. — *Locate the impropriety first; the same exponent gives opposite verdicts at the two ends.*
