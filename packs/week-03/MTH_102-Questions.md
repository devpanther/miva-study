# MTH_102 — Week 3 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 4, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** lim_{x→3} (2x² − x + 1) equals:
a) 22   b) 16   c) 18   d) it does not exist, since no technique has been applied

**2.** f is continuous at x = a exactly when:
a) f(a) is defined
b) lim_{x→a} f(x) exists
c) f(a) is defined, lim_{x→a} f(x) exists, and the two are equal
d) f is given by a single formula near a

**3.** lim_{x→4} (x² − 16)/(x − 4) equals:
a) 0   b) 8   c) 16   d) it does not exist

**4.** lim_{x→0} (√(x + 4) − 2)/x equals:
a) 1/4   b) 0   c) 1/2   d) it does not exist

**5.** lim_{x→∞} (4x² + 3)/(2x² − x) equals:
a) 0   b) 2   c) ∞   d) −3

**6.** lim_{x→∞} (5x + 2)/(x² + 1) equals:
a) 5   b) ∞   c) 0   d) 5/2

**7.** Which of the following is **not** an indeterminate form?
a) 0/0   b) ∞/∞   c) 0 · ∞   d) 6/0

**8.** lim_{x→0} |x|/x is:
a) 1   b) 0   c) −1   d) non-existent, since the one-sided limits are 1 and −1

**9.** The quotient law lim (f/g) = (lim f)/(lim g) is guaranteed when:
a) both limits exist and the limit of g is not zero
b) both limits exist
c) f and g are both polynomials
d) the limit of f is not zero

**10.** If −x² ≤ f(x) ≤ x² for all x near 0, then lim_{x→0} f(x):
a) is 0, by the Squeeze theorem
b) cannot be determined without a formula for f
c) is 0 only if f is continuous at 0
d) equals f(0), whatever that is

**11.** L'Hôpital's rule may be applied **directly** to:
a) lim_{x→2} (x + 1)/(x − 2)
b) lim_{x→0} (sin x)/x
c) lim_{x→1} (x² + 1)/(x + 1)
d) lim_{x→0} (x + 1)/x

**12.** lim_{x→2⁺} 1/(x − 2) is:
a) 0   b) −∞   c) +∞   d) 1/2

## Section B — Short answer (3)

**13.** Evaluate lim_{x→1} (x³ − 1)/(x² − 1), showing every step and naming the technique you used.

**14.** For f(x) = 3x − 1 when x < 2 and f(x) = x² + k when x ≥ 2, find the value of k for which lim_{x→2} f(x) exists, and state the limit.

**15.** State in words what lim_{x→a} f(x) = L means, and give one example of a function where the limit exists but f(a) does not, and one where f(a) exists but the limit does not.

## Answers

1. **b** — *Direct substitution for a polynomial*: 2(9) − 3 + 1 = 16. Substitution is the first move, and for a polynomial it is always valid.
2. **c** — *The three conditions for continuity*: existence of the value, existence of the limit, and their agreement. Any one alone is not enough — a hole satisfies (b) but not (a).
3. **b** — *Factor and cancel a 0/0 form*: (x−4)(x+4)/(x−4) = x + 4 for x ≠ 4, so the limit is 8.
4. **a** — *Rationalise the surd with its conjugate*: multiplying by (√(x+4) + 2) turns the top into x, leaving 1/(√(x+4) + 2) → 1/4.
5. **b** — *Equal degrees at infinity ⟹ ratio of leading coefficients*: divide by x², giving (4 + 3/x²)/(2 − 1/x) → 4/2 = 2.
6. **c** — *deg N < deg D at infinity ⟹ 0*: divide by x², giving (5/x + 2/x²)/(1 + 1/x²) → 0.
7. **d** — *Indeterminate versus infinite*: 6/0 carries information — the quotient grows without bound, so the limit is ±∞ (check each side). The other three are genuinely indeterminate and demand rewriting.
8. **d** — *Two-sided limit exists only if the one-sided limits agree*: for x > 0, |x|/x = 1; for x < 0, |x|/x = −1.
9. **a** — *Hypotheses of the quotient law*: both separate limits must exist and the denominator's limit must be non-zero; when it is zero the law is silent, and you must distinguish 0/0 from c/0.
10. **a** — *Squeeze (Sandwich) theorem*: f is trapped between two functions with the common limit 0, so f is forced to 0 — no formula for f, and no continuity, is needed.
11. **b** — *L'Hôpital requires the form 0/0 or ∞/∞*: (sin x)/x gives 0/0 at x = 0. The others substitute to 3/0, 2/2 and 1/0 — none indeterminate, so the rule does not apply.
12. **c** — *One-sided infinite limit by sign*: for x slightly greater than 2, x − 2 is a small positive number, so the reciprocal is large and positive.
13. **3/2** — *Factorisation of a 0/0 form using the difference of cubes and difference of squares*: x³ − 1 = (x − 1)(x² + x + 1), x² − 1 = (x − 1)(x + 1). Cancelling (x − 1), valid since x ≠ 1 inside the limit, leaves (x² + x + 1)/(x + 1) → 3/2. (L'Hôpital gives 3x²/2x → 3/2 as well.)
14. **k = 1, limit 5** — *A piecewise limit exists only if the one-sided limits match at the joint*: lim_{x→2⁻} f = 3(2) − 1 = 5 and lim_{x→2⁺} f = 4 + k, so 4 + k = 5 gives k = 1 and the common value 5.
15. It means f(x) can be made **as close to L as we please** by taking x sufficiently close to a **but not equal to a**; equivalently, for every ε > 0 there is a δ > 0 with 0 < |x − a| < δ ⟹ |f(x) − L| < ε. Limit without a value: f(x) = (x² − 4)/(x − 2) at a = 2 — f(2) is undefined but the limit is 4. Value without a limit: f(x) = |x|/x extended by f(0) = 0 — f(0) exists but the one-sided limits are −1 and 1, so no limit. — *The limit describes the approach, never the point itself.*
