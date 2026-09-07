# Monday — MTH_102 nightly check

*Conceptual session on Week 9, exactly as the deck builds it.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** Classify ∫₁⁵ 1/(x − 3) dx.
A. Type I: a limit of integration is infinite
B. Type II: 1/(x − 3) is discontinuous at x = 3, inside [1, 5]
C. Not improper: both limits are finite
D. Type II: 1/(x − 3) is discontinuous at x = 1

**2.** Evaluate ∫₂^∞ 1/x³ dx.
A. 1/8
B. −1/8
C. 1/4
D. divergent

**3.** By Note 1 (∫₁^∞ 1/xᵖ dx converges if p > 1, diverges if p ≤ 1), what happens to ∫₁^∞ 1/√x dx, and what is p?
A. converges, p = 1/2
B. converges, p = 2
C. diverges, p = 1/2
D. diverges, p = 2

**4.** The curve y = 1/x² rises without bound as x → 0⁺. Evaluate ∫₀¹ 1/x² dx.
A. −1
B. divergent
C. 1
D. 0

**5.** Where must ∫₀⁵ 1/(x − 2)² dx be split before any limit is taken?
A. at x = 0
B. no split is needed
C. at x = 5/2, the midpoint
D. at x = 2, into ∫₀² and ∫₂⁵

**6.** 0 ≤ g(x) ≤ f(x) for all x ≥ 1, and ∫₁^∞ f(x) dx = 4. What can be said about ∫₁^∞ g(x) dx?
A. converges, and equals 4
B. diverges
C. nothing can be concluded
D. converges, and is at most 4

**7.** Which inequality holds for all x ≥ 1?
A. 1/√(x⁴ + 5) ≤ 1/x²
B. 1/√(x⁴ + 5) ≥ 1/x²
C. 1/√(x⁴ + 5) ≤ 1/x⁴
D. 1/√(x⁴ + 5) ≥ 1/x⁴

**8.** ∫₋∞^∞ f(x) dx is split at 0. The right half lim(b→∞) ∫₀ᵇ f(x) dx is +∞ and the left half lim(a→−∞) ∫ₐ⁰ f(x) dx is −∞. What is ∫₋∞^∞ f(x) dx?
A. 0
B. +∞
C. divergent
D. −∞

**9. (show your working)** Evaluate ∫₋∞⁰ eˣ dx. Write the integral as a limit first, then evaluate the limit. Show your working.

**10. (show your working)** Evaluate ∫₀⁴ 1/√(4 − x) dx. Say where the integrand is discontinuous, write the one-sided limit, and evaluate it. Show your working.

**11. (show your working)** Use the Comparison Test to decide whether ∫₁^∞ 1/(x² + 1) dx converges or diverges. Show each inequality step, name f and g with 0 ≤ g(x) ≤ f(x), and quote Note 1. Show your working.

**12. (show your working)** Explain what it means to say ∫ₐ^∞ f(x) dx is convergent, and why writing ∫ₐ^∞ f(x) dx = F(∞) − F(a) is not acceptable working.

---

## Answers

**1. B** — *Identifying an improper integral and its type.* Check both triggers. The limits 1 and 5 are finite, so it is not Type I. The integrand 1/(x − 3) has a zero denominator at x = 3, and 3 lies strictly inside [1, 5], so the integrand has a point of discontinuity on the interval: Type II, and it must be split at x = 3.

Type I needs an infinite limit, and there is none; finite limits do not make an integral proper when the integrand blows up inside; x = 1 gives 1/(1 − 3) = −1/2, which is perfectly finite.

**2. A** — *Type I integral evaluated by a limit.* Write the limit: ∫₂^∞ x⁻³ dx = lim(t→∞) ∫₂ᵗ x⁻³ dx = lim(t→∞) [−1/(2x²)]₂ᵗ = lim(t→∞) (−1/(2t²) + 1/8) = 0 + 1/8 = 1/8. The limit exists, so the integral converges to 1/8.

−1/8 uses +1/(2x²) as the antiderivative, losing the sign from dividing by −2; 1/4 uses −1/x² as the antiderivative, forgetting the 1/2; divergent is what you write if you assume an infinite interval always gives infinite area, but 1/x³ shrinks fast enough.

**3. C** — *Reading p from a root and applying the p-test.* 1/√x = 1/x^(1/2), so p = 1/2. Since 1/2 ≤ 1, Note 1 says the integral diverges. Directly: lim(t→∞) [2√x]₁ᵗ = lim(t→∞) (2√t − 2) = ∞.

converges, p = 1/2 has the right p but puts it on the wrong side of 1; p = 2 confuses the square root with a square, and 1/x² would converge; diverges, p = 2 gets the verdict right by accident with the wrong p.

**4. B** — *Type II integral that diverges at the lower limit.* The discontinuity is at the lower limit, so ∫₀¹ x⁻² dx = lim(c→0⁺) ∫_c¹ x⁻² dx = lim(c→0⁺) [−1/x]_c¹ = lim(c→0⁺) (−1 + 1/c). As c → 0⁺, 1/c → ∞, so the limit does not exist and the integral is divergent.

−1 is −1/x at the upper limit alone, treating the lower-limit term 1/c as if it were 0; 1 makes the same error with the sign of the antiderivative wrong; 0 assumes a limit of integration at 0 contributes nothing.

**5. D** — *Splitting at an interior discontinuity.* 1/(x − 2)² is undefined at x = 2, and 2 lies strictly between 0 and 5. An interior infinite discontinuity forces a split at that point: ∫₀⁵ = ∫₀² + ∫₂⁵, with lim(c→2⁻) on the first piece and lim(c→2⁺) on the second.

x = 0 is a limit of integration where the integrand is finite, 1/4; a split is needed because applying the Fundamental Theorem across x = 2 is invalid; the midpoint has no special role, the split must be at the discontinuity itself.

**6. D** — *Comparison Test: convergence passes down to the smaller function.* This is clause 1 of the Comparison Test: the larger function f has a convergent integral, so the smaller function g does too. Because g ≤ f everywhere on [1, ∞), the area under g cannot exceed the area under f, so ∫₁^∞ g(x) dx ≤ 4. The test gives a verdict and a bound, never the exact value.

equals 4 claims the comparison integral's value for g, which the test never gives; diverges is impossible for a non-negative function trapped under a finite area; nothing can be concluded is the situation for the two invalid directions, but this is a valid one.

**7. A** — *Building a comparison inequality with reciprocals.* Three steps. Drop the additive term: x⁴ + 5 ≥ x⁴. Take square roots, which preserves the inequality for non-negative quantities: √(x⁴ + 5) ≥ √(x⁴) = x². Take reciprocals of positive quantities, which reverses it: 1/√(x⁴ + 5) ≤ 1/x².

≥ 1/x² carries the inequality through the reciprocal step without reversing it; the 1/x⁴ options forget to take the square root of x⁴, and neither holds for all x ≥ 1 (at x = 2, 1/√21 ≈ 0.22 is larger than 1/16, while at x = 1 it is smaller than 1).

**8. C** — *One divergent half makes the whole integral divergent.* The definition only assigns a value to ∫₋∞^∞ when both halves converge on their own; then the value is their sum. Here neither half converges, so the integral is divergent. Nothing may be cancelled, because the two limits use independent letters a and b and are never taken together.

0 cancels +∞ against −∞, which the definition forbids; +∞ and −∞ each look at only one half and ignore the other.

**9.** *Type I integral with a lower limit of −∞.* By definition, ∫₋∞⁰ eˣ dx = lim(t→−∞) ∫ₜ⁰ eˣ dx = lim(t→−∞) [eˣ]ₜ⁰ = lim(t→−∞) (e⁰ − eᵗ) = lim(t→−∞) (1 − eᵗ). As t → −∞, eᵗ → 0, so the limit is 1 − 0 = 1. The limit exists, so the integral converges to 1.

Final answer: 1 (converges to 1). The working must show the limit line with t → −∞, the antiderivative eˣ, and eᵗ → 0. Writing e⁻^∞ directly without the limit is not acceptable working; getting −1 (subtracting in the wrong order) or claiming divergence because the interval is infinite is wrong.

**10.** *Type II integral with a discontinuity at the upper limit.* 1/√(4 − x) is undefined at x = 4, the upper limit, so ∫₀⁴ (4 − x)^(−1/2) dx = lim(c→4⁻) ∫₀ᶜ (4 − x)^(−1/2) dx. The antiderivative is −2√(4 − x) (check: its derivative is −2·(1/2)(4 − x)^(−1/2)·(−1) = (4 − x)^(−1/2)). So the limit is lim(c→4⁻) [−2√(4 − x)]₀ᶜ = lim(c→4⁻) (−2√(4 − c) + 2√4) = 0 + 4 = 4.

Final answer: 4 (converges to 4). The working must name x = 4 as the discontinuity, use c → 4⁻, state the antiderivative −2√(4 − x), and show √(4 − c) → 0. Using +2√(4 − x) gives −4 and is wrong; claiming divergence because the integrand blows up is wrong, since the limit exists.

**11.** *Comparison Test with a simple denominator bound.* For all x ≥ 1, x² + 1 ≥ x², so taking reciprocals of positive quantities reverses the inequality: 1/(x² + 1) ≤ 1/x². Let f(x) = 1/x² and g(x) = 1/(x² + 1); both are continuous and positive on [1, ∞), so 0 ≤ g(x) ≤ f(x). ∫₁^∞ 1/x² dx has p = 2 > 1, so by Note 1 it converges (its value is 1). By clause 1 of the Comparison Test, the larger function convergent forces the smaller one convergent, so ∫₁^∞ 1/(x² + 1) dx converges.

Final answer: converges. A correct answer shows x² + 1 ≥ x², reverses to 1/(x² + 1) ≤ 1/x², names f = 1/x² and g = 1/(x² + 1), quotes p = 2 > 1, and concludes convergence. It may add that the value is at most 1, but must not claim the value is 1.

**12.** *Definition of convergence of a Type I integral.* The symbol ∫ₐ^∞ f(x) dx is defined as lim(t→∞) ∫ₐᵗ f(x) dx: replace the infinite limit by a letter t, evaluate the ordinary definite integral F(t) − F(a), then let t → ∞. The integral is convergent if that limit exists as a finite number, and divergent if it does not. F(∞) is not acceptable because ∞ is not a number that can be substituted into a function; the only meaning available is the limit of F(t) as t grows, and that limit must be shown to exist.

A correct answer states the limit definition with t → ∞, says convergent means the limit exists (finite) and divergent means it does not, and explains that ∞ cannot be substituted, so the limit line must be written.
