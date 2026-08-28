# Thursday — MTH_102 nightly check

*Evaluating limits algebraically: multi-step problems — factor-and-cancel, conjugate rationalisation, stacked fractions, one-sided and infinite limits, limits at ±∞ including surds, piecewise matching, and repeated L'Hôpital.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** lim_{x→2} (x³ − 8)/(x² − 4) equals:
a) 0   b) 2   c) 3   d) it does not exist

**2.** lim_{x→0} (√(x + 9) − 3)/x equals:
a) 0   b) 1/6   c) 1/3   d) it does not exist

**3.** lim_{x→3⁻} (x + 1)/(x − 3) is:
a) +∞   b) −∞   c) 0   d) 4

**4.** lim_{x→−∞} √(9x² + 1)/(x + 2) equals:
a) 3   b) −3   c) 0   d) 9

**5.** lim_{x→∞} (√(x² + 3x) − x) equals:
a) 0   b) 3   c) 3/2   d) ∞

**6.** lim_{x→0} [1/(x + 2) − 1/2]/x equals:
a) 1/4   b) −1/4   c) 0   d) it does not exist

**7.** f(x) = ax + 1 for x < 3 and f(x) = x² − 2 for x ≥ 3. lim_{x→3} f(x) exists exactly when a is:
a) 2   b) 8/3   c) −2   d) no value of a makes it exist

**8.** lim_{x→0} (eˣ − 1 − x)/x² equals:
a) 0   b) 1   c) 1/2   d) it does not exist

**9. (explain why)** Evaluate lim_{x→1} (x − 1)/(√x − 1), showing every step and naming the technique. Say why direct substitution alone is not enough.

**10. (explain why)** Evaluate lim_{x→2⁻} |x − 2|/(x² − 4) and lim_{x→2⁺} |x − 2|/(x² − 4) separately, and state with reasons whether lim_{x→2} |x − 2|/(x² − 4) exists.

**11. (explain why)** Evaluate lim_{x→∞} (2x² − 3x + 1)/(5x³ + x) and lim_{x→∞} (2x³ + 1)/(5x² − x), in each case by dividing through by the highest power of x, and explain what the two answers say about the graphs.

**12. (explain why)** A student writes: "lim_{x→1} (x² + 3)/(x − 1) = lim_{x→1} 2x/1 = 2 by L'Hôpital's rule." Identify the error precisely and give the correct account of this limit.

---

## Answers

**1. c** — *0/0 with polynomials: factor both parts fully, including the difference of cubes.* Substitution gives 0/0. x³ − 8 = (x − 2)(x² + 2x + 4) and x² − 4 = (x − 2)(x + 2); cancelling (x − 2), which is legal because x ≠ 2 inside the limit, leaves (x² + 2x + 4)/(x + 2) → 12/4 = 3. (b) comes from mis-factoring the difference of cubes as (x − 2)(x² + 4), giving 8/4 = 2 — revise a³ − b³ = (a − b)(a² + ab + b²). (a) reads "numerator → 0, so the answer is 0", ignoring that the denominator also collapses. (d) treats the form 0/0 as proof that the limit fails.

**2. b** — *0/0 containing a surd: multiply top and bottom by the conjugate.* Multiplying by (√(x+9) + 3)/(√(x+9) + 3) makes the numerator (x + 9) − 9 = x, so the expression is x/[x(√(x+9) + 3)] = 1/(√(x+9) + 3) → 1/6. (c) multiplies only the numerator by the conjugate (or cancels x from the top twice), doubling the result. (a) again takes the vanishing numerator as the whole story. (d) mistakes 0/0 for non-existence.

**3. b** — *c/0 is an infinite form, and its sign is read off side by side.* At x = 3 substitution gives 4/0, so this is a sign question, not an algebra question. As x → 3⁻ we have x < 3, so x − 3 is a small **negative** number while the numerator tends to 4 > 0; positive over small-negative gives large negative, so the limit is −∞. (a) is the answer from the right-hand side, x → 3⁺, where x − 3 is small positive. (d) substitutes only into the numerator. (c) inverts the effect of dividing by a quantity approaching zero.

**4. b** — *At x → −∞, √(x²) = |x| = −x, not x.* Write √(9x² + 1) = |x|√(9 + 1/x²). Dividing numerator and denominator by x and using |x|/x = −1 for x < 0 gives −√(9 + 1/x²)/(1 + 2/x) → −3. (a) is the same computation with |x| replaced by x — the single most common sign error in limits at infinity, and it is the correct answer only as x → +∞. (d) takes the square root of 9x² as 9x, forgetting the root. (c) applies "denominator wins" without comparing degrees: the numerator behaves like 3|x|, so the degrees match.

**5. c** — *∞ − ∞ is indeterminate; create a fraction with the conjugate, then divide by the highest power.* Multiplying by (√(x²+3x) + x)/(√(x²+3x) + x) gives (x² + 3x − x²)/(√(x²+3x) + x) = 3x/(√(x² + 3x) + x); dividing top and bottom by x gives 3/(√(1 + 3/x) + 1) → 3/2. (a) treats ∞ − ∞ as 0, the classic misreading of an indeterminate form as a cancellation. (d) argues that the surd grows faster than x, but they grow at the same rate — only the difference of the lower-order terms survives. (b) forgets to divide the surd by x properly, leaving 3/1.

**6. b** — *Stacked fractions: combine over a common denominator before doing anything else.* The numerator is [2 − (x + 2)]/[2(x + 2)] = −x/[2(x + 2)], so the whole expression is −x/[2x(x + 2)] = −1/[2(x + 2)] → −1/4. (a) loses the minus sign when subtracting (x + 2) from 2. (c) substitutes into the numerator alone and sees 0. (d) treats 0/0 as failure. (This limit is the derivative of 1/x at x = 2, which is −1/x² = −1/4 — a useful check.)

**7. a** — *A piecewise limit exists only if the two formulas agree in the limit at the joint.* Left limit: lim_{x→3⁻}(ax + 1) = 3a + 1. Right limit: lim_{x→3⁺}(x² − 2) = 9 − 2 = 7. Existence requires 3a + 1 = 7, so a = 2. (b) comes from using x² instead of x² − 2 on the right, giving 3a + 1 = 9. (c) is a sign slip in solving 3a = 6. (d) assumes a change of formula at a point must always break the limit, when in fact matching the two one-sided values repairs it exactly.

**8. c** — *L'Hôpital may be repeated, but the form must be re-checked before every application.* At x = 0 the form is 0/0; differentiating top and bottom separately gives (eˣ − 1)/(2x), still 0/0 at 0; differentiating again gives eˣ/2 → 1/2. (b) stops after one application and reports the derivative ratio incorrectly, or uses only lim eˣ = 1. (a) stops after one application and substitutes 0/0 as 0. (d) reads the repeated indeterminate form as failure. A common invisible error here is differentiating with the quotient rule instead of differentiating numerator and denominator separately — the rule is not about (f/g)′.

**9.** *Concept: 0/0 with a surd — rationalise with the conjugate (or factor the difference of squares in √x).* Substitution gives (1 − 1)/(1 − 1) = 0/0, which is indeterminate and so gives no value; it only tells you that (x − 1) and (√x − 1) share a vanishing factor. Multiply numerator and denominator by the conjugate √x + 1: the denominator becomes (√x − 1)(√x + 1) = x − 1, so the expression is (x − 1)(√x + 1)/(x − 1) = √x + 1 for x ≠ 1. Substituting now: **2**. Equivalently, factor the numerator as a difference of squares in √x: x − 1 = (√x − 1)(√x + 1), and cancel directly. Either way the cancellation is legitimate because the limit never evaluates the expression at x = 1.

**10.** *Concept: an absolute value must be resolved side by side, because its sign rule changes at the point.* Factor the denominator: x² − 4 = (x − 2)(x + 2). **From the left** (x < 2): |x − 2| = −(x − 2), so the quotient is −(x − 2)/[(x − 2)(x + 2)] = −1/(x + 2) → **−1/4**. **From the right** (x > 2): |x − 2| = x − 2, so the quotient is 1/(x + 2) → **+1/4**. Both one-sided limits exist and are finite, but −1/4 ≠ 1/4, so **lim_{x→2} does not exist** — a jump discontinuity. Note that the failure is not caused by the denominator vanishing: the (x − 2) cancels on both sides. It is caused solely by the sign the absolute value contributes.

**11.** *Concept: at infinity, divide top and bottom by the highest power of x present, then use 1/xⁿ → 0.* **First limit:** divide by x³ — (2/x − 3/x² + 1/x³)/(5 + 1/x²) → 0/5 = **0** (deg N < deg D). **Second limit:** divide by x³ — (2 + 1/x³)/(5/x − 1/x²) → 2/0⁺ = **+∞**; the limit does not exist as a finite number and the function diverges (deg N > deg D). What this says about the graphs: the first has the horizontal asymptote **y = 0**, so it flattens onto the x-axis far to the right; the second has **no horizontal asymptote** at all — because the degrees differ by exactly one, it instead hugs the oblique line found by long division, y = (2/5)x + 2/25. In neither case is 2/5 a horizontal asymptote; that ratio applies only when the degrees are equal.

**12.** *Concept: L'Hôpital's rule has an entrance condition, and applying it to a non-indeterminate form gives a confidently wrong number.* The error is at the first equality. L'Hôpital's rule applies **only** when direct substitution gives 0/0 or ∞/∞. Here substitution gives (1 + 3)/(1 − 1) = **4/0**, which is not indeterminate: it is an infinite form. So the rule may not be used, and its output 2 is meaningless. The correct account: since the numerator tends to 4 > 0 and the denominator tends to 0, the quotient grows without bound, and the sign is decided on each side. As x → 1⁻, x − 1 is a small negative number, so the quotient → **−∞**; as x → 1⁺, x − 1 is small positive, so the quotient → **+∞**. The two sides disagree, so **lim_{x→1} (x² + 3)/(x − 1) does not exist**, and the graph has a vertical asymptote at x = 1. The lesson: check the form *before* every application of the rule, and again before each repeat.
