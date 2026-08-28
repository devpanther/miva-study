# Thursday — MTH_102 nightly check

*MTH_102 problems: evaluating limits end to end — factor-and-cancel, conjugates, limits at infinity, one-sided and infinite cases.*
*Sit cold, notes closed, 8 minutes. Score out of 6.*

**1.** lim_{x→2} (x² + x − 6)/(x² − 4) equals:
a) 5/4
b) 1, obtained by cancelling the x² from the top and the bottom to leave (x − 6)/(−4)
c) 0, since the numerator is zero at x = 2
d) It does not exist, since substitution gives 0/0 and the function is undefined at x = 2

**2.** lim_{x→9} (√x − 3)/(x − 9) equals:
a) 0, since the numerator approaches √9 − 3 = 0
b) It does not exist, because the form 0/0 has no value
c) 1/6
d) 1/3, from rationalising and then evaluating 1/√x at x = 9

**3.** lim_{x→−∞} √(9x² + 1)/(x + 2) equals:
a) 3, since √(9x² + 1) behaves like √(9x²) = 3x and the +2 is negligible
b) −3
c) 9, the ratio of the leading coefficient 9 to the leading coefficient 1
d) −∞, since the numerator involves x² while the denominator involves only x

**4.** f(x) = x² + 1 for x < 1 and f(x) = 3x for x ≥ 1. Then lim_{x→1} f(x) is:
a) 3, since x = 1 belongs to the second piece, so f(1) = 3 is the limit
b) 5/2, the value midway between the two one-sided limits
c) 2, obtained from the piece x² + 1 that governs the approach to 1
d) It does not exist: lim_{x→1⁻} f(x) = 2 and lim_{x→1⁺} f(x) = 3, and unequal one-sided limits mean no limit

**5. (explain why)** Evaluate lim_{x→0} [√(1 + x) − √(1 − x)]/x, showing every step. State what substitution gives, why that forbids stopping there, which technique you choose and why, and what the final value is.

**6. (explain why)** Explain fully why lim_{x→1} (x + 2)/(x − 1) does **not** exist, while lim_{x→1} (x + 2)/(x − 1)² **is** +∞ — and why neither of them can be attacked by factoring and cancelling.

---

## Answers

**1. a** — *0/0 in a rational function means (x − a) divides both polynomials; factor fully, then cancel that factor only.* (x² + x − 6)/(x² − 4) = [(x + 3)(x − 2)]/[(x − 2)(x + 2)] = (x + 3)/(x + 2) for x ≠ 2, giving 5/4. (b) is illegal cancellation — you may cancel common *factors*, never matching *terms* inside sums; the x² is not a factor of either polynomial. (c) reads only the numerator and ignores that the denominator is going to zero at the same time. (d) treats "undefined at the point" and "form 0/0" as proof that no limit exists; the limit never evaluates at x = 2, and here it exists perfectly well.

**2. c** — *A surd difference over a vanishing denominator is cleared by multiplying top and bottom by the conjugate, which turns the difference of roots into a difference of squares.* (√x − 3)/(x − 9) × (√x + 3)/(√x + 3) = (x − 9)/[(x − 9)(√x + 3)] = 1/(√x + 3) for x ≠ 9, → 1/(3 + 3) = 1/6. (a) evaluates the numerator alone and forgets that x − 9 is also collapsing. (b) mistakes an indeterminate form for a verdict — 0/0 is the signal to transform, not to stop. (d) rationalises correctly and then drops the "+3": the surviving denominator is √x + 3, not √x, which is exactly the halving that separates 1/6 from 1/3.

**3. b** — *For x → −∞, √(x²) = |x| = −x, so pulling x out of a square root flips the sign.* Divide top and bottom by x, but inside the root divide by √(x²) = −x (since x < 0): √(9x² + 1)/(x + 2) = [−√(9 + 1/x²)]/(1 + 2/x) → −3/1 = −3. (a) is the whole point of the question — it uses √(9x²) = 3x, which is true only for x ≥ 0, and is the single commonest error in limits at −∞. (c) compares leading coefficients without ever taking the square root, ignoring that √(9x²) contributes 3, not 9. (d) counts the x² under the root as a degree-2 term; the root halves the degree, so the top and bottom both grow like |x| and the ratio is finite.

**4. d** — *A two-sided limit exists only if both one-sided limits exist and are equal; the value f(1) is irrelevant to either.* Approaching from below uses x² + 1 → 2; from above uses 3x → 3; 2 ≠ 3, so the limit does not exist (a jump discontinuity). (a) substitutes the function value, which decides *continuity*, not the limit — and only after the limit is known to exist. (c) evaluates one side only and reports it as the answer, the error of forgetting that x → 1 means from both directions. (b) invents an averaging rule; a limit is a value the function actually approaches, and f never comes near 5/2 on either side.

**5.** *Concept: 0/0 with a difference of square roots ⟹ multiply by the conjugate.* Substituting x = 0 gives (√1 − √1)/0 = 0/0 — indeterminate, so the value is undecided and the expression must be transformed. The obstruction is the difference of two surds, so multiply top and bottom by the conjugate **√(1 + x) + √(1 − x)**:
numerator → (1 + x) − (1 − x) = **2x**, so the expression becomes 2x / [x(√(1+x) + √(1−x))].
Now x ≠ 0 throughout the approach, so the x cancels legitimately, leaving **2/[√(1 + x) + √(1 − x)]** — a function that is continuous at 0, so substitute: 2/(1 + 1) = **1**.
(Check with L'Hôpital: derivatives give [1/(2√(1+x)) + 1/(2√(1−x))]/1 → 1/2 + 1/2 = 1 ✓.)

**6.** *Concept: k/0 with k ≠ 0 is a determinate infinite form; the sign of the denominator on each side decides whether it is +∞, −∞ or a non-existent limit.* In both, substituting x = 1 gives numerator → 3 ≠ 0 and denominator → 0. Because the numerator does **not** vanish, x = 1 is not a common root of top and bottom, so (x − 1) is not a common factor and there is nothing to cancel — factoring is unavailable, and this is not a 0/0 case at all (which also disqualifies L'Hôpital's Rule).
**First limit:** x − 1 is **negative** for x < 1 and **positive** for x > 1. So (x + 2)/(x − 1) → 3/0⁻ = **−∞** as x → 1⁻ and → 3/0⁺ = **+∞** as x → 1⁺. The two sides disagree, so the limit **does not exist** — not even as an infinity.
**Second limit:** (x − 1)² is **positive on both sides** (squaring destroys the sign difference), so the quotient → 3/0⁺ = **+∞** from the left and from the right. The behaviour is the same on both sides, so we write lim_{x→1} (x + 2)/(x − 1)² = **+∞** — a description of unbounded growth, not a finite value.
