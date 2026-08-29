# Thursday — MTH_102 nightly check

*Improper-integral problems: writing the limit and evaluating it, getting the p-test arithmetic right at both ends, spotting and splitting an interior singularity instead of applying the Fundamental Theorem across it, running a substitution or an integration by parts inside a limit, and building a comparison — choosing the comparison function, checking the direction of the inequality, and using limit comparison when the direct inequality points the wrong way.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** ∫₁^∞ dx/x³ =
a) 1/2   b) 1/3   c) 1   d) it diverges

**2.** ∫₀^∞ e^{−2x}dx =
a) 2   b) 1/2   c) 1   d) it diverges

**3.** ∫₀¹ dx/x^{2/3} =
a) it diverges   b) 3   c) 3/2   d) 1/3

**4.** ∫₂^∞ dx/√(x − 1) =
a) 2   b) −2   c) 1/2   d) it diverges

**5.** ∫_{−1}¹ dx/x^{4/3} =
a) −6   b) 6   c) 0   d) it diverges

**6.** ∫₁^∞ (ln x)/x dx =
a) 0, since (ln x)/x → 0 as x → ∞
b) 1/2
c) 1
d) it diverges

**7.** ∫₁^∞ dx/(x + eˣ):
a) converges, by comparison with e^{−x}, since x + eˣ > eˣ on [1, ∞)
b) diverges, by comparison with 1/x, since 1/(x + eˣ) < 1/x and ∫₁^∞ dx/x diverges
c) converges, by comparison with 1/x, since 1/(x + eˣ) < 1/x
d) diverges, because 1/(x + eˣ) has no elementary antiderivative, so no finite value can exist

**8.** ∫₁^∞ (√x + 1)/(x² + 3) dx:
a) converges — limit comparison with 1/x^{3/2} gives L = 1
b) diverges — comparison with 1/√x, which the integrand is smaller than
c) converges — direct comparison with 1/x², since the denominator has degree 2
d) diverges — limit comparison with 1/x gives L = 1

**9. (explain why)** Evaluate, showing the limit at every stage: (i) ∫₀^∞ dx/(1 + x²); (ii) ∫₀^∞ x dx/(1 + x²); (iii) ∫₀^∞ x dx/(1 + x²)². Then say in one sentence what single feature separates the divergent one from the convergent ones.

**10. (explain why)** Show that ∫₁^∞ e^{−x²}dx converges. State the inequality you use, the interval on which it holds and why it holds there, evaluate the comparison integral in full, and state precisely what has and has not been proved about the original integral.

**11. (explain why)** Decide whether ∫₀^∞ dx/(√x(1 + x)) converges. Explain why the integral must be split before any test is applied, and treat each piece separately with a named comparison and a p-test.

**12. (explain why)** Evaluate ∫₀² dx/(x − 1)^{2/3}, showing every limit, and then explain why ∫₀² dx/(x − 1)^{4/3} diverges even though the two integrands differ only in an exponent.

---

## Answers

**1. a** — *p-test at infinity: ∫₁^∞ dx/xᵖ = 1/(p − 1) for p > 1.* Here ∫₁^t x^{−3}dx = [−1/(2x²)]₁^t = 1/2 − 1/(2t²) → **1/2**. (b) is 1/p, the commonest slip — the value is 1/(p − 1), not 1/p; (c) is the answer for p = 2 and shows the exponent being read off the antiderivative rather than the integrand; (d) applies the near-zero p-test at infinity.

**2. b** — *∫₀^∞ e^{−kx}dx = 1/k for k > 0.* ∫₀^t e^{−2x}dx = [−e^{−2x}/2]₀^t = 1/2 − e^{−2t}/2 → **1/2**, since e^{−2t} → 0. (a) multiplies by the constant instead of dividing — the antiderivative of e^{−2x} is e^{−2x}/(−2), so the 2 lands in a denominator; (c) is the value for k = 1, i.e. ignoring the 2 altogether; (d) would require e^{−2t} to grow, which it does not — the sign in the exponent is what makes this convergent, and ∫₀^∞ e^{+2x}dx is the one that diverges.

**3. b** — *p-test near zero: ∫₀¹ dx/xᵖ converges for p < 1, to 1/(1 − p).* p = 2/3 < 1, and ∫_t¹ x^{−2/3}dx = [3x^{1/3}]_t¹ = 3 − 3t^{1/3} → **3**, since t^{1/3} → 0. (a) applies the infinity version of the p-test at the origin; (c) is 1/(1 − p) misread as (1 − p)⁻¹ with p taken as 1/3; (d) is p itself. Note the antiderivative: x^{1/3}/(1/3) = 3x^{1/3}, and dropping the factor 3 is the arithmetic slip behind (d).

**4. d** — *Substituting u = x − 1 turns this into ∫₁^∞ du/√u, which is p = 1/2 < 1 at infinity, hence divergent.* Explicitly ∫₂^t (x − 1)^{−1/2}dx = [2√(x − 1)]₂^t = 2√(t − 1) → ∞. (a) is what you get by evaluating the antiderivative only at the lower limit, or by assuming √(t − 1) → 0; (b) has the sign of that same error reversed; (c) reads 1/(p − 1) with p = 1/2 and ignores that the formula only applies when p > 1 — using a convergence formula is not a substitute for checking the convergence condition. The shift by 1 changes nothing: convergence at infinity is unaffected by translation.

**5. d** — *The integrand has an infinite discontinuity at x = 0, strictly inside [−1, 1], so the Fundamental Theorem cannot be applied across it; each half must be tested, and near zero p = 4/3 > 1 diverges.* ∫₀¹ x^{−4/3}dx = lim_{t→0⁺}[−3x^{−1/3}]_t¹ = lim(−3 + 3t^{−1/3}) = +∞. (a) is precisely the blind-FTC answer, [−3x^{−1/3}]_{−1}¹ = −3 − 3 = −6, and it is self-refuting: x^{−4/3} > 0 wherever it is defined, so no correct answer can be negative; (b) is the same computation with a sign slip on (−1)^{−1/3}; (c) appeals to the integrand being even and the interval symmetric, as though the two infinities could cancel — divergence on either side kills the whole integral. Compare ∫_{−1}¹ dx/x^{2/3}, where p = 2/3 < 1 and the answer genuinely is 6.

**6. d** — *Substitution u = ln x, du = dx/x, turns the integral into ∫₀^∞ u du, which diverges.* ∫₁^t (ln x)/x dx = [(ln x)²/2]₁^t = (ln t)²/2 → ∞. (a) is the central misconception of the whole week: an integrand tending to 0 is necessary-looking but not sufficient, exactly as 1/x → 0 while ∫₁^∞ dx/x diverges; (b) is the value of ∫₀¹ u du, i.e. the right substitution with the wrong limits; (c) is ∫₁^∞ (ln x)/x² dx, a genuinely convergent neighbour — one extra power of x in the denominator flips the verdict.

**7. a** — *To prove convergence you must bound the integrand above by a convergent one; eˣ is the dominant term of the denominator, so discarding x makes the denominator smaller and the fraction larger.* For x ≥ 1, x + eˣ > eˣ > 0, so 0 < 1/(x + eˣ) < e^{−x}, and ∫₁^∞ e^{−x}dx = lim_{t→∞}(e^{−1} − e^{−t}) = 1/e, finite. Hence convergence. (b) and (c) both use the true but useless inequality 1/(x + eˣ) < 1/x: being **smaller than a divergent** function is one of the two combinations the Comparison Test says nothing about, so (b)'s conclusion is unjustified and (c)'s is right by accident with invalid reasoning; (d) confuses "no elementary antiderivative" with "no value" — deciding convergence without evaluating is the entire point of the comparison test.

**8. a** — *Keep leading terms: (√x + 1)/(x² + 3) behaves like x^{1/2}/x² = x^{−3/2}, and p = 3/2 > 1 converges.* Limit comparison with g = x^{−3/2}: lim_{x→∞} [(√x + 1)/(x² + 3)]·x^{3/2} = lim (x² + x^{3/2})/(x² + 3) = 1, and 0 < 1 < ∞, so both integrals do the same thing; ∫₁^∞ dx/x^{3/2} converges, so the given integral converges. (b) uses an inequality in the direction that proves nothing (smaller than the divergent 1/√x); (c) asserts a direct comparison that is false — the ratio to 1/x² tends to ∞, so the integrand is eventually **larger** than 1/x², which is why limit comparison is needed at all; (d) gets the limit wrong: comparing with 1/x gives L = lim x(√x + 1)/(x² + 3) = 0, not 1, and L = 0 against a divergent g yields no conclusion in any case.

**9.** *Concept: the exponent in the denominator, not the presence of an x in the numerator, decides convergence at infinity; every claim must be made through an explicit limit.*
(i) ∫₀^∞ dx/(1 + x²) = lim_{t→∞}[arctan x]₀^t = lim_{t→∞}(arctan t − 0) = **π/2**, convergent.
(ii) ∫₀^∞ x dx/(1 + x²): substitute u = 1 + x², du = 2x dx, so ∫₀^t = [½ln(1 + x²)]₀^t = ½ln(1 + t²) → ∞. **Divergent.**
(iii) ∫₀^∞ x dx/(1 + x²)²: same substitution, ∫₀^t = [−½(1 + x²)^{−1}]₀^t = ½ − 1/(2(1 + t²)) → **1/2**, convergent. (Equivalently (1/2)∫₁^∞ du/u² = 1/2.)
The separating feature is the **order of decay of the integrand**: in (i) it is ~x^{−2}, in (iii) ~x^{−3}, both faster than x^{−1}; in (ii) it is x/x² = ~x^{−1}, exactly the boundary case, and p = 1 always diverges. The x in the numerator is not itself the problem — (iii) has the same numerator and converges — the problem is that in (ii) it cancels one power from the denominator.

**10.** *Concept: comparison decides convergence for integrands with no elementary antiderivative, and concludes convergence only, never a value.* e^{−x²} has no antiderivative in elementary terms, so evaluation is not available; comparison is. **Inequality:** for x ≥ 1 we have x² ≥ x, hence −x² ≤ −x, hence 0 < e^{−x²} ≤ e^{−x}, using that eᵗ is increasing. The interval [1, ∞) matters: on (0, 1) the inequality reverses (there x² < x), but convergence depends only on the tail, so an eventual inequality is enough — and here the integral starts at 1 anyway. **Comparison integral:** ∫₁^∞ e^{−x}dx = lim_{t→∞}[−e^{−x}]₁^t = lim_{t→∞}(e^{−1} − e^{−t}) = 1/e, finite. Both functions are non-negative and continuous on [1, ∞), so the Comparison Test applies in its convergent direction (smaller than convergent): **∫₁^∞ e^{−x²}dx converges.** What has *not* been proved is any value for it: the argument only gives the bound 0 < ∫₁^∞ e^{−x²}dx ≤ 1/e. Writing "= 1/e" would be wrong.

**11.** *Concept: an integral improper at two places must be split, because the definition applies to one bad point at a time, and each end may need a different comparison and a different p-test.* The integrand 1/(√x(1 + x)) is unbounded as x → 0⁺ (Type II there) and the interval runs to ∞ (Type I there). The limit definition handles exactly one problem point per limit, so write ∫₀^∞ = ∫₀¹ + ∫₁^∞ (any interior split point does; 1 is convenient). **Near 0:** on (0, 1], 1 + x ≥ 1, so 0 < 1/(√x(1 + x)) ≤ 1/√x. ∫₀¹ dx/x^{1/2} has p = 1/2 < 1, so it converges (to 2); by comparison, ∫₀¹ of the given integrand converges. **Near ∞:** on [1, ∞), 1 + x > x, so √x(1 + x) > √x·x = x^{3/2}, hence 0 < 1/(√x(1 + x)) < 1/x^{3/2}. ∫₁^∞ dx/x^{3/2} has p = 3/2 > 1, so it converges (to 2); by comparison, ∫₁^∞ of the given integrand converges. Both halves converge, so **the whole integral converges.** Note the two p-tests point opposite ways — p = 1/2 is what saves the left end, p = 3/2 the right — which is exactly why a single test applied to the whole range would be meaningless. (For completeness, u = √x gives the value π, but convergence is all that was asked.)

**12.** *Concept: an interior infinite discontinuity forces a split into two one-sided limits, and the p-test near the singularity — p < 1 converges — decides each piece.* The integrand is undefined at x = 1, which lies inside [0, 2], so ∫₀² = lim_{t→1⁻}∫₀^t + lim_{s→1⁺}∫_s². An antiderivative is 3(x − 1)^{1/3} (defined for negative arguments too, since cube roots of negatives exist).
Left piece: lim_{t→1⁻} [3(x − 1)^{1/3}]₀^t = lim_{t→1⁻} (3(t − 1)^{1/3} − 3(−1)^{1/3}) = 0 − 3(−1) = **3**.
Right piece: lim_{s→1⁺} [3(x − 1)^{1/3}]_s² = 3(1)^{1/3} − lim_{s→1⁺}3(s − 1)^{1/3} = 3 − 0 = **3**.
Both converge, so ∫₀² dx/(x − 1)^{2/3} = 3 + 3 = **6**.
For (x − 1)^{−4/3} the exponent near the singularity is p = 4/3 > 1, which fails the near-singularity p-test: an antiderivative is −3(x − 1)^{−1/3}, and lim_{s→1⁺}∫_s² = lim_{s→1⁺}(−3 + 3(s − 1)^{−1/3}) = +∞. One divergent piece is enough, so the whole integral **diverges**. The difference between 2/3 and 4/3 is the difference between a spike that is integrable and one that is not: near the bad point the integrand must blow up *slower* than 1/(x − 1) for the area to stay finite. Applying the Fundamental Theorem straight through would give [−3(x − 1)^{−1/3}]₀² = −3 − 3 = −6, a negative number for a positive integrand — the visible sign that the interior singularity was missed.
