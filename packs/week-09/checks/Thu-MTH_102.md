# Thursday — MTH_102 nightly check

*Problems-only session on Week 9.*
*12 questions, straight after the hour. Score out of 12.*

**1.** Evaluate ∫₀^∞ x·e^(−2x) dx.
A. 1/2
B. −1/4
C. divergent
D. 1/4

**2.** Determine ∫₋∞^∞ x³ dx.
A. divergent
B. 0
C. +∞
D. −∞

**3.** Evaluate ∫₀¹ 1/(1 − x)² dx.
A. 1
B. −1
C. divergent
D. 0

**4.** Evaluate ∫₀⁸ x^(−1/3) dx.
A. 4
B. 6
C. 8/3
D. divergent

**5.** Determine whether ∫₃^∞ 1/√(x² − 4) dx converges or diverges, and by which comparison.
A. converges, since 1/√(x² − 4) ≤ 1/x
B. converges, p = 2
C. diverges, p = 1/2
D. diverges, since 1/√(x² − 4) ≥ 1/x and ∫₃^∞ 1/x dx has p = 1

**6.** Determine whether ∫₂^∞ cos²(x)/x^(3/2) dx converges or diverges.
A. diverges, because cos²(x) oscillates
B. converges, and equals √2
C. converges, p = 3/2
D. diverges, p = 2/3

**7.** Evaluate ∫₀^∞ x·e^(−x²) dx.
A. 1/2
B. 1
C. −1/2
D. divergent

**8.** A student argues: on [1, ∞), 0 ≤ 1/x² ≤ 1/x; ∫₁^∞ 1/x² dx converges; therefore ∫₁^∞ 1/x dx converges. Which line is wrong?
A. The inequality 1/x² ≤ 1/x on [1, ∞)
B. The conclusion: convergence passes down to the smaller function, not up to the larger
C. The claim that ∫₁^∞ 1/x² dx converges
D. Nothing; the argument is valid

**9.** Determine whether ∫₁^∞ 1/√(x⁸ + 2) dx converges or diverges, and say by which comparison.
A. Diverges, since 1/√(x⁸ + 2) ≥ 1/x⁴ and p = 4 > 1
B. Converges, since 1/√(x⁸ + 2) ≤ 1/x⁴ and p = 4 > 1
C. Converges, since 1/√(x⁸ + 2) ≤ 1/x⁸ and p = 8 > 1
D. Converges to 1/3, by comparison with ∫₁^∞ 1/x⁴ dx

**10.** Evaluate ∫₋∞^∞ 1/(1 + x²) dx by splitting at 0 and taking each half as its own limit.
A. π
B. π/2
C. 0
D. Divergent

**11.** Evaluate ∫₁^∞ (x + 1)/x³ dx.
A. 1
B. 1/2
C. −3/2
D. 3/2

**12.** A student writes ∫₋₁² 1/x⁴ dx = [−1/(3x³)]₋₁² = −1/24 − 1/3 = −3/8. What is wrong, and what is the correct verdict?
A. The antiderivative should be −1/(4x³), which gives −1/32 − 1/4
B. Nothing is wrong; a definite integral is allowed to be negative
C. 1/x⁴ is undefined at x = 0 inside [−1, 2], so the integral is improper and divergent
D. The limits were subtracted the wrong way round; the value is 3/8

---

## Answers

**1. D** — *Type I integral needing parts and L'Hôpital.* By parts (u = x, dv = e^(−2x) dx, v = −e^(−2x)/2): ∫x·e^(−2x) dx = −x·e^(−2x)/2 − e^(−2x)/4. Then lim(t→∞) [−t·e^(−2t)/2 − e^(−2t)/4 + 1/4]. The term −t/(2e^(2t)) is −∞/∞; L'Hôpital gives −1/(4e^(2t)) → 0, and e^(−2t) → 0, so the integral is 1/4.

1/2 uses −e^(−2x)/2 for the second term, forgetting to divide by 2 again when integrating v; −1/4 subtracts the lower-limit value in the wrong direction; divergent claims −t·e^(−2t) → −∞, but the exponential wins.

**2. A** — *Both limits infinite: split and check each half.* Split at 0. Right half: lim(b→∞) [x⁴/4]₀ᵇ = lim(b→∞) b⁴/4 = ∞, so this half already diverges and the integral is divergent. (The left half lim(a→−∞) [x⁴/4]ₐ⁰ = −a⁴/4 → −∞ as well.) The definition requires both halves to converge before anything is added.

0 cancels the two halves against each other, or uses the symmetric ∫₋ₜᵗ x³ dx = 0, which is not the definition; +∞ and −∞ each report one half and ignore the other.

**3. C** — *Type II integral divergent at the upper limit.* The integrand blows up at x = 1, the upper limit, so ∫₀¹ (1 − x)⁻² dx = lim(c→1⁻) ∫₀ᶜ (1 − x)⁻² dx. The antiderivative is 1/(1 − x) (check: d/dx (1 − x)⁻¹ = (1 − x)⁻²). So the limit is lim(c→1⁻) [1/(1 − x)]₀ᶜ = lim(c→1⁻) (1/(1 − c) − 1) = ∞. The limit does not exist, so the integral is divergent.

1 treats 1/(1 − c) as tending to 0 and uses the wrong sign on the antiderivative; −1 treats 1/(1 − c) as 0 and keeps only the lower-limit term; 0 assumes the two limit values cancel.

**4. B** — *Convergent Type II integral at the lower limit.* x^(−1/3) is undefined at x = 0, so write lim(c→0⁺) ∫_c⁸ x^(−1/3) dx. Power rule: new exponent 2/3, divide by 2/3, so F(x) = (3/2)x^(2/3). Then lim(c→0⁺) [(3/2)x^(2/3)]_c⁸ = (3/2)(8^(2/3)) − 0 = (3/2)(4) = 6. The limit exists, so the integral converges to 6.

4 uses x^(2/3) without the 3/2; 8/3 multiplies by 2/3 instead of dividing by it; divergent assumes every blow-up at an endpoint gives infinite area, but here c^(2/3) → 0.

**5. D** — *Comparison Test in the divergent direction.* For x ≥ 3, x² − 4 < x², so √(x² − 4) < x, and reciprocals reverse: 1/√(x² − 4) > 1/x. So g(x) = 1/x is the smaller function and f(x) = 1/√(x² − 4) the larger. ∫₃^∞ 1/x dx diverges by Note 1 with p = 1, and clause 2 (the smaller one divergent forces the larger one divergent) gives divergence.

converges with ≤ 1/x has the reciprocal step backwards; p = 2 reads the exponent under the root as the p of the comparison function; p = 1/2 halves the wrong thing, since √(x²) = x gives p = 1.

**6. C** — *Comparison with a bounded trigonometric numerator.* 0 ≤ cos²(x) ≤ 1, and dividing by the positive x^(3/2) keeps the inequality: 0 ≤ cos²(x)/x^(3/2) ≤ 1/x^(3/2). With f(x) = 1/x^(3/2), p = 3/2 > 1, so ∫₂^∞ f dx converges by Note 1 (its value is √2), and clause 1 makes the smaller integral converge too.

Oscillation is harmless here because cos² is never negative and is bounded by 1; √2 is the value of the comparison integral, not of this one, which is only known to be at most √2; p = 2/3 inverts the exponent and would wrongly put it on the divergent side.

**7. A** — *Type I integral needing a substitution.* With u = −x², du = −2x dx, the antiderivative is −(1/2)e^(−x²). Then lim(t→∞) [−(1/2)e^(−x²)]₀ᵗ = lim(t→∞) (−(1/2)e^(−t²) + 1/2) = 0 + 1/2 = 1/2. The limit exists, so the integral converges to 1/2.

1 forgets the factor 1/2 from x dx = −du/2; −1/2 subtracts the lower-limit value in the wrong direction; divergent assumes the infinite interval gives infinite area, but e^(−t²) → 0.

**8. B** — *Invalid direction of the Comparison Test.* The Comparison Test with 0 ≤ g ≤ f says: f convergent forces g convergent, and g divergent forces f divergent. Here g = 1/x² is the smaller function, and knowing the smaller one converges says nothing about the larger one. In fact ∫₁^∞ 1/x dx diverges (p = 1), so the conclusion is false.

The inequality is correct for x ≥ 1, since x² ≥ x there; ∫₁^∞ 1/x² dx does converge, p = 2 > 1; the argument is not valid because it uses one of the two directions the theorem does not license.

**9. B** — *Comparison template with a root in the denominator.* For x ≥ 1: x⁸ + 2 ≥ x⁸, so √(x⁸ + 2) ≥ x⁴, and taking reciprocals reverses it to 1/√(x⁸ + 2) ≤ 1/x⁴. The larger integral ∫₁^∞ 1/x⁴ dx has p = 4 > 1 and converges, so the smaller one converges as well.

The first option writes the reciprocal step with the inequality the wrong way round and flips the verdict; the third forgets the square root, which halves the exponent; the fourth turns the bound 1/3 into a value, when only 'at most 1/3' follows.

**10. A** — *Both limits infinite with both halves convergent.* The antiderivative is tan⁻¹(x). Right half: lim(b→∞) [tan⁻¹(x)]₀ᵇ = π/2 − 0 = π/2. Left half: lim(a→−∞) [tan⁻¹(x)]ₐ⁰ = 0 − (−π/2) = π/2. Both halves are finite, so the integral converges to π/2 + π/2 = π.

π/2 reports one half only; 0 subtracts the halves instead of adding them; divergent ignores that tan⁻¹ is bounded, so each half has a finite limit.

**11. D** — *Type I integral after splitting the integrand.* Split the integrand first: (x + 1)/x³ = x⁻² + x⁻³, with antiderivative −1/x − 1/(2x²). Then the integral is lim(t→∞) [−1/t − 1/(2t²)] − (−1 − 1/2) = 0 + 3/2 = 3/2, so it converges to 3/2.

1 keeps only the x⁻² term; 1/2 keeps only the x⁻³ term; −3/2 subtracts the limits in the wrong order.

**12. C** — *Why the Fundamental Theorem cannot be used across a discontinuity.* 1/x⁴ is positive wherever it is defined, so a negative answer is impossible on sight. The cause is that 1/x⁴ is undefined at x = 0, which lies inside [−1, 2], so the Fundamental Theorem may not be applied straight across. Split at 0 and take one-sided limits: both ∫₋₁⁰ and ∫₀² give +∞, so the integral is divergent.

The antiderivative −1/(3x³) is in fact correct, so the first option is false; a positive integrand rules out the second; and reversing the limits only changes the sign of an answer that should never have been computed.
