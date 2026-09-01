# Thursday — MTH_102 nightly check

*Problems-only session on Week 9.*

*Evaluate Type I integrals by writing ∫ₐ^∞ f(x)dx = lim(t→∞) ∫ₐᵗ f(x)dx and finishing the limit, including the L'Hôpital step on −te⁻ᵗ.*

*Split ∫₋∞^∞ and stop at the first divergent half.*

*Split ∫₋₁² dx/x⁴ at the interior discontinuity, and get the signs right.*

*Then run her four-step comparison template — drop the additive term, take the root, flip on reciprocals, read off p.*

*Run it on ∫₁^∞ dx/√(x⁵ + 3), ∫₂^∞ cos²(x)/x^(3/2) dx, ∫₃^∞ dx/√(x⁴ + 9) and the TASK, ∫₁^∞ dx/√(x⁶ + 1), quoting Note 1 each time.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Evaluate ∫₀^∞ xe⁻ˣ dx.
A. 1
B. 0
C. −1
D. It diverges

**2.** Evaluate ∫₃^∞ dx/x².
A. 1/9
B. 1/3
C. 3
D. It diverges

**3.** Evaluate ∫₁^∞ dx/x^(3/2).
A. It diverges
B. 1/2
C. 2
D. 2/3

**4.** By Note 1, which of these diverges?
A. ∫₁^∞ dx/x^(5/2)
B. ∫₁^∞ dx/x²
C. ∫₁^∞ dx/x^(1.01)
D. ∫₁^∞ dx/x^(2/3)

**5.** The TASK slide: determine whether ∫₁^∞ dx/√(x⁶ + 1) converges or diverges.
A. Converges: 1/√(x⁶ + 1) ≤ 1/x³, and p = 3 > 1
B. Diverges: 1/√(x⁶ + 1) ≥ 1/x³, and p = 3 > 1
C. Converges: 1/√(x⁶ + 1) ≤ 1/x⁶, and p = 6 > 1
D. Diverges: comparison with 1/x, which has p = 1

**6.** Determine whether ∫₋₁² dx/x⁴ converges or diverges, and give its value if it has one.
A. It converges to −3/8
B. It converges to 3/8
C. It diverges
D. It converges to −1/24

**7.** Determine whether ∫₁^∞ dx/√(x⁵ + 3) converges or diverges.
A. Diverges, by comparison with 1/x, which has p = 1
B. Converges: 1/√(x⁵ + 3) ≤ 1/x^(5/2), and p = 5/2 > 1
C. Converges: 1/√(x⁵ + 3) ≤ 1/x⁵, and p = 5 > 1
D. No conclusion is available, because the inequality points the wrong way

**8.** A student writes: on [2, ∞), 1/√(x² + 1) ≤ 1/x; ∫₂^∞ dx/x diverges by Note 1 since p = 1; therefore ∫₂^∞ dx/√(x² + 1) diverges. What is wrong?
A. Nothing — both the inequality and the conclusion follow correctly
B. The inequality is backwards; in fact 1/√(x² + 1) ≥ 1/x
C. Note 1 is stated for ∫₁^∞ and cannot be used with a lower limit of 2
D. The reasoning is invalid: the given function is the smaller one, and a divergent larger function licenses no conclusion about what sits underneath it

**9.** Work Type I Example 1 in full: determine whether ∫₀^∞ xe⁻ˣ dx converges or diverges. Show the limit line, verify the antiderivative by differentiating it, and show the L'Hôpital step explicitly.
*(short answer)*

**10.** Work Type I Example 2 in full: determine whether ∫₋∞^∞ (2x² − x + 3)dx converges or diverges. Show the split, the two independent limits, the antiderivative, and say at what point in the working you are entitled to stop.
*(short answer)*

**11.** Work Type II Example 1 in full: determine whether ∫₋₁² dx/x⁴ converges or diverges. Justify the split, evaluate each piece with correct signs, and say what the naive Fundamental Theorem answer would have been and why it is visibly impossible.
*(short answer)*

**12.** Decide each of these by the lecturer's comparison template, showing every inequality step and naming f, g and the clause used: (a) ∫₂^∞ cos²(x)/x^(3/2) dx, and (b) ∫₃^∞ dx/√(x⁴ + 9).
*(short answer)*

## Answers

**1. A** — Write it as lim(t→∞) ∫₀ᵗ xe⁻ˣdx = lim(t→∞)[−xe⁻ˣ − e⁻ˣ]|₀ᵗ = lim(t→∞)(−te⁻ᵗ − e⁻ᵗ + 1). The middle term e⁻ᵗ → 0, and −te⁻ᵗ = −t/eᵗ is −∞/∞, so L'Hôpital gives −1/eᵗ → 0. Total: 0 + 0 + 1 = 1. Option 2 loses the +1, which comes from subtracting the value −1 that the antiderivative takes at x = 0. Option 3 keeps that −1 without flipping its sign under the subtraction. Option 4 is what you get from claiming −te⁻ᵗ → −∞; the exponential beats the linear factor.

**2. B** — lim(t→∞)[−1/x]|₃ᵗ = lim(t→∞)(−1/t + 1/3) = 1/3, since −1/t → 0. Note 1 only tells you it converges; the limit tells you to what. Option 1 substitutes 3 into the integrand 1/x² instead of into the antiderivative −1/x. Option 3 inverts the answer. Option 4 confuses p = 2 with the divergent side of Note 1; p = 2 > 1 converges.

**3. C** — The antiderivative of x^(−3/2) is x^(−1/2)/(−1/2) = −2/√x, so lim(t→∞)[−2/√x]|₁ᵗ = lim(t→∞)(−2/√t + 2) = 2. Option 1 misapplies Note 1: p = 3/2 > 1, the convergent side. Option 2 is 1/p, guessed rather than derived. Option 4 comes from dividing by the new power 3/2 without the sign, i.e. treating the exponent as +3/2 instead of −3/2.

**4. D** — Note 1: ∫₁^∞ (1/xᵖ)dx converges if p > 1 and diverges if p ≤ 1. Here p = 2/3, and 2/3 < 1, so it diverges. Options 1 and 2 have p = 5/2 and p = 2, both comfortably above 1. Option 3 is the one that catches people out — 1.01 is barely above 1, but Note 1 draws a hard line and 1.01 > 1, so it converges. Only the exponent's position relative to 1 matters, never how close it is.

**5. A** — For x ≥ 1, x⁶ + 1 ≥ x⁶, so √(x⁶ + 1) ≥ √(x⁶) = x³, and taking reciprocals of positives reverses it: 1/√(x⁶ + 1) ≤ 1/x³. With f = 1/x³ (convergent, p = 3 > 1 by Note 1) and g the given integrand, clause 1 gives convergence. Option 2 fails to flip the inequality at the reciprocal step, which is the single most common error in this topic. Option 3 forgets to take the square root, so the exponent is not halved. Option 4 compares with the wrong power and then draws divergence from an inequality that would in any case be the useless direction.

**6. C** — 1/x⁴ is undefined at x = 0, inside [−1, 2], so slide 8 clause 3 forces the split. With F(x) = −1/(3x³): the left piece is lim(c→0⁻)(−1/(3c³) − 1/3) = +∞, since c³ → 0 from below; the right piece is lim(b→0⁺)(−1/24 + 1/(3b³)) = +∞. Neither limit is finite, so the integral diverges. Option 1 is exactly what the Fundamental Theorem returns if you drive straight through x = 0 — and its negativity, for a strictly positive integrand, is the tell that something is wrong. Option 2 is that same slip with the limits reversed. Option 4 is the upper-limit term alone.

**7. B** — For x ≥ 1, x⁵ + 3 ≥ x⁵, so √(x⁵ + 3) ≥ √(x⁵) = x^(5/2), hence 1/√(x⁵ + 3) ≤ 1/x^(5/2). Note 1 with p = 5/2 > 1 gives convergence of the comparison integral, and clause 1 carries it back. Option 1 compares with a function that is far too large and in the useless direction besides. Option 3 skips the square root, leaving p = 5 — the verdict survives by luck, but the comparison function is wrong and the inequality as stated is false. Option 4 misreads the direction: dropping the +3 makes the denominator smaller and hence the fraction bigger, so the given integrand really is the smaller one, which is exactly the case clause 1 handles.

**8. D** — The inequality is right — x² + 1 > x² gives √(x² + 1) > x and so 1/√(x² + 1) < 1/x — but it makes the given integrand g, the smaller function, and 1/x the larger f. The theorem offers only 'f convergent ⟹ g convergent' and 'g divergent ⟹ f divergent'; 'f divergent ⟹ ?' is one of the two boxes that carry no information, as 1/x² sitting under the divergent 1/x shows. Option 1 accepts an invalid proof of a verdict that happens to be true — a real trap, because being right by accident earns nothing. Option 2 misstates a correct inequality. Option 3 is a red herring: the finite piece ∫₁² dx/x is an ordinary number and cannot change a tail's fate, which is why Example 2 applies Note 1 at lower limit 3.

**9.** A good answer opens with the definition line: ∫₀^∞ xe⁻ˣdx = lim(t→∞) ∫₀ᵗ xe⁻ˣdx. It names the antiderivative −xe⁻ˣ − e⁻ˣ (from parts with u = x and dv = e⁻ˣdx, giving v = −e⁻ˣ and ∫xe⁻ˣdx = −xe⁻ˣ + ∫e⁻ˣdx = −xe⁻ˣ − e⁻ˣ) and checks it: the derivative of −xe⁻ˣ − e⁻ˣ is −e⁻ˣ + xe⁻ˣ + e⁻ˣ = xe⁻ˣ, the integrand. It then evaluates: [−xe⁻ˣ − e⁻ˣ]|₀ᵗ = (−te⁻ᵗ − e⁻ᵗ) − (0 − 1) = −te⁻ᵗ − e⁻ᵗ + 1, spelling out that the lower limit contributes +1. It resolves the indeterminate term by rewriting −te⁻ᵗ as −t/eᵗ, identifying the form −∞/∞, applying L'Hôpital to get −1/eᵗ, and noting that eᵗ → ∞ so the limit is 0. It concludes the whole limit is 0 + 0 + 1 = 1, so the integral converges to 1. Credit the explicit statement that this is a convergent integral WITH a value — unlike anything decided by comparison.

**10.** A good answer splits at 0 as she does: ∫₋∞^∞(2x² − x + 3)dx = ∫₋∞⁰(2x² − x + 3)dx + ∫₀^∞(2x² − x + 3)dx, then writes the two halves with DIFFERENT moving letters, lim(a→−∞)∫ₐ⁰ and lim(b→∞)∫₀ᵇ, noting that they are independent and may not be tied into one symmetric limit. The antiderivative is the term-by-term power rule, 2x³/3 − x²/2 + 3x. Evaluating the right half gives 2b³/3 − b²/2 + 3b − 0, which is dominated by 2b³/3 and runs to +∞. That is the stopping point: clause 3 of slide 5 permits the two halves to be added only IF both converge, so a single divergent half settles the question and the integral diverges. A strong answer adds that the left half also runs to +∞ — it is 0 − (2a³/3 − a²/2 + 3a) and 2a³/3 → −∞ as a → −∞ — but stresses that even if the two halves had run to +∞ and −∞, cancelling them would not be permitted.

**11.** A good answer notices first that 1/x⁴ is undefined at x = 0 and that 0 lies strictly inside [−1, 2], so slide 8 clause 3 applies: ∫₋₁² = ∫₋₁⁰ + ∫₀², i.e. lim(c→0⁻)∫₋₁ᶜ dx/x⁴ + lim(b→0⁺)∫_b² dx/x⁴. The antiderivative is ∫x⁻⁴dx = x⁻³/(−3) = −1/(3x³). Left piece: (−1/(3c³)) − (−1/(3(−1)³)) = −1/(3c³) − 1/3, and as c → 0⁻ the number c³ is small and NEGATIVE, so −1/(3c³) → +∞; the piece tends to +∞. Right piece: (−1/24) − (−1/(3b³)) = −1/24 + 1/(3b³) → +∞ as b → 0⁺. Neither limit is finite, so the integral diverges. The naive route gives [−1/(3x³)]|₋₁² = −1/24 − 1/3 = −3/8, which is impossible because 1/x⁴ is strictly positive wherever it is defined, so no correct answer can be negative — that impossibility is the diagnostic. A strong answer also notes that the slide's own line, '→ −∞ as c → 0⁻', has the sign wrong; both pieces go to +∞.

**12.** For (a): since 0 ≤ cos²(x) ≤ 1 for every x, and x^(3/2) > 0 on [2, ∞), dividing the inequality by the positive x^(3/2) preserves it, giving 0 ≤ cos²(x)/x^(3/2) ≤ 1/x^(3/2). Set f(x) = 1/x^(3/2) and g(x) = cos²(x)/x^(3/2), so 0 ≤ g ≤ f. By Note 1, p = 3/2 > 1, so ∫₂^∞ dx/x^(3/2) converges; by clause 1, ∫₂^∞ cos²(x)/x^(3/2) dx converges. No value is obtained. For (b): for x ≥ 3, x⁴ + 9 ≥ x⁴, so √(x⁴ + 9) ≥ √(x⁴) = x² (valid because x > 0), and taking reciprocals of positive quantities REVERSES the inequality: 1/√(x⁴ + 9) ≤ 1/x². Set f(x) = 1/x² and g(x) = 1/√(x⁴ + 9), so 0 ≤ g ≤ f. By Note 1, p = 2 > 1, so ∫₃^∞ dx/x² converges; by clause 1, ∫₃^∞ dx/√(x⁴ + 9) converges. Credit in both parts for stating the non-negativity, for the reciprocal flip in (b), and for saying explicitly that the conclusion is convergence and not a value; a strong answer notes that squaring the cosine in (a) is what makes 0 ≤ g hold, and that with cos x alone the theorem's hypothesis would fail.
