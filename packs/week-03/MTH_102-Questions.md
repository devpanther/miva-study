# MTH_102 — Week 3 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 4, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** lim_{x→3} (2x² − 4x + 1) equals:
a) 5   b) 7   c) 13   d) it does not exist

**2.** lim_{x→4} (x² − 16)/(x − 4) equals:
a) 0   b) 8   c) 16   d) it does not exist, since f(4) is undefined

**3.** lim_{x→0} (√(x + 9) − 3)/x equals:
a) 0   b) 1/3   c) 1/6   d) it does not exist

**4.** lim_{x→∞} (4x³ − x)/(2x³ + 5x²) equals:
a) 0   b) 2   c) 4/5   d) ∞

**5.** lim_{x→∞} (5x + 3)/(x² − 1) equals:
a) 0   b) 5   c) 5/1 = 5x   d) ∞

**6.** Which of these is **not** an indeterminate form?
a) 0/0   b) ∞/∞   c) ∞ − ∞   d) 7/0

**7.** lim_{x→a} f(x) = 4 and lim_{x→a} g(x) = 0. Which statement is correct?
a) lim f/g = 0 by the quotient law
b) The quotient law does not apply, because it requires the denominator's limit to be non-zero
c) lim f/g = 4, since dividing by something tending to 0 changes nothing
d) lim f/g is an indeterminate form 0/0 and must be factored

**8.** g(x) = 2x + 1 for x < 3 and g(x) = x² − 2 for x ≥ 3. Then lim_{x→3} g(x) is:
a) 7, since both one-sided limits equal 7
b) it does not exist, because g is given by two different formulas at x = 3
c) 5, from the left-hand piece only
d) it does not exist, because g is discontinuous at x = 3

**9.** lim_{x→0} x² cos(1/x) equals:
a) it does not exist, since cos(1/x) oscillates without limit
b) 1, since cos 0 = 1
c) 0, by the Squeeze Theorem, since −x² ≤ x² cos(1/x) ≤ x²
d) it cannot be found without L'Hôpital's Rule

**10.** lim_{x→1} (x³ − 1)/(x² − 1) equals:
a) 1   b) 3/2   c) 0   d) 3/2 only if L'Hôpital's Rule is allowed; by factoring it is 1

**11.** lim_{x→2} (x + 5)/(x − 2)² is:
a) +∞   b) it does not exist: +∞ on the right and −∞ on the left   c) 0   d) 7/4

**12.** f(x) = (x² − 1)/(x − 1) for x ≠ 1, and f(1) = 7. Then lim_{x→1} f(x) equals:
a) 7   b) 2   c) it does not exist   d) 0/0, indeterminate

## Section B — Short answer (3)

**13.** Evaluate lim_{x→1} (x³ − 1)/(x − 1) in **two** ways — by factorisation and by L'Hôpital's Rule — and state the condition that had to hold before the second method was permitted.

**14.** Evaluate lim_{x→∞} (3x² − x + 2)/(1 − 5x²), showing the divide-by-the-highest-power working. Then state the general rule for a rational function as x → ∞ in all three degree cases.

**15.** State the three distinct ways in which lim_{x→a} f(x) can fail to exist, and give one example of each.

## Answers

**1. b** — *Direct substitution*: a polynomial is continuous everywhere, so substitute: 18 − 12 + 1 = 7.
**2. b** — *Factor and cancel a 0/0*: (x−4)(x+4)/(x−4) = x + 4 for x ≠ 4, so the limit is 8. Being undefined **at** x = 4 is irrelevant — the limit inspects only x ≠ 4.
**3. c** — *Conjugate*: multiply by (√(x+9) + 3)/(√(x+9) + 3) to get x/[x(√(x+9) + 3)] = 1/(√(x+9) + 3) → 1/6. (1/3 is the answer you get by dropping the "+3".)
**4. b** — *Equal degrees ⟹ ratio of leading coefficients*: dividing by x³ gives (4 − 1/x²)/(2 + 5/x) → 4/2 = 2.
**5. a** — *deg N < deg D ⟹ 0*: dividing by x² gives (5/x + 3/x²)/(1 − 1/x²) → 0/1 = 0.
**6. d** — *Determinate vs indeterminate*: with a non-zero numerator over a vanishing denominator the magnitude must grow without bound, so the form already determines the behaviour; only the sign is left to check.
**7. b** — *The quotient law is conditional on lim g ≠ 0*: when that fails the law says nothing. Here lim f = 4 ≠ 0, so it is the determinate form 4/0 (an infinite limit), not 0/0 — so (d) is also wrong.
**8. a** — *A limit exists iff both one-sided limits exist and agree*: left 2(3) + 1 = 7, right 3² − 2 = 7. They match, so the limit is 7 (and g is in fact continuous there). Two formulas do not by themselves cause a jump.
**9. c** — *Squeeze Theorem*: cos(1/x) has no limit at 0 so the product law is unavailable, but −1 ≤ cos(1/x) ≤ 1 gives bounds −x² and x², both → 0.
**10. b** — *0/0, resolved either way*: factoring gives (x−1)(x²+x+1)/[(x−1)(x+1)] = (x²+x+1)/(x+1) → 3/2; L'Hôpital gives 3x²/2x → 3/2. The two methods must agree — (d) invents a disagreement.
**11. a** — *k/0 with an always-positive denominator*: the numerator → 7 > 0 and (x − 2)² > 0 on **both** sides, so the quotient → +∞ from both sides. (b) is the answer for the **unsquared** denominator, where the sign does differ across x = 2.
**12. b** — *The limit ignores f(a)*: for every x ≠ 1, f(x) = x + 1, so the limit is 2. The mismatch with f(1) = 7 makes f discontinuous at 1; it does not destroy the limit.
**13.** **3.** *Factorisation*: x³ − 1 = (x − 1)(x² + x + 1), so the quotient is x² + x + 1 for x ≠ 1, → 1 + 1 + 1 = **3**. *L'Hôpital*: substitution first gives **0/0**, which is the condition that had to be verified — the rule applies only to 0/0 or ∞/∞. Then differentiate top and bottom **separately**: 3x²/1 → 3.
**14.** **−3/5.** Divide every term by x², the highest power in the denominator: (3 − 1/x + 2/x²)/(1/x² − 5) → (3 − 0 + 0)/(0 − 5) = −3/5. *General rule*: deg N < deg D ⟹ limit 0; deg N = deg D ⟹ ratio of the leading coefficients; deg N > deg D ⟹ ±∞ (sign from the leading coefficients). Care with roots: √(x²) = |x|, which is −x as x → −∞.
**15.** **(i) Jump** — the one-sided limits exist but differ: lim_{x→0} |x|/x, which is −1 from the left and +1 from the right. **(ii) Infinite** — f grows without bound near a: lim_{x→0} 1/x, which is −∞ from the left and +∞ from the right (and even lim_{x→0} 1/x², which is +∞ on both sides, has no *finite* value). **(iii) Oscillation** — f never settles: lim_{x→0} sin(1/x), which sweeps the whole interval [−1, 1] infinitely often in every neighbourhood of 0. — *Note that "f(a) is undefined" is on none of these lists: it is compatible with a perfectly good limit.*
