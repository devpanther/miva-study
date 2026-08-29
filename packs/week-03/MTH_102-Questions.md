# MTH_102 — Week 3 retention set

*Elementary Mathematics II (Calculus) · sat seven days after Week 3 · notes closed*

## Multiple choice

**1.** lim_{x→2} (x² − 4)/(x − 2) equals
a) 0
b) the limit does not exist, because the function is undefined at x = 2
c) 4
d) 2

**2.** L'Hôpital's Rule may be applied to lim_{x→a} f(x)/g(x) only when
a) direct substitution produces 0/0 or ∞/∞, and f and g are differentiable near a
b) f and g are both polynomials
c) the limit is known in advance to exist
d) f(a) = 0 and g(a) ≠ 0

**3.** lim_{x→0} (√(x + 1) − 1)/x equals
a) 0
b) 1
c) the limit does not exist
d) 1/2

**4.** For f(x) = |x − 5|/(x − 5), lim_{x→5} f(x) is
a) 1
b) non-existent, because the left-hand limit is −1 and the right-hand limit is 1
c) 0
d) −1

**5.** lim_{x→∞} (4x³ + 2x)/(7x³ − x² + 1) equals
a) 4/7
b) 0
c) ∞
d) 4

**6.** The quotient law lim (f/g) = (lim f)/(lim g) requires one extra hypothesis. Which?
a) f must be continuous at a
b) f(a) must be defined
c) lim_{x→a} g(x) ≠ 0
d) g must be a polynomial

**7.** lim_{x→0} x sin(1/x) equals
a) 1
b) 0
c) the limit does not exist, because sin(1/x) oscillates without settling
d) ∞

**8.** Which of these is **not** an indeterminate form?
a) ∞ − ∞
b) 1^∞
c) 0 · ∞
d) 5/0

**9.** lim_{x→0} (sin 5x)/(2x) equals
a) 5
b) 0
c) 5/2
d) 2/5

**10.** f(x) = (x² − x − 6)/(x − 3) is undefined at x = 3. What value assigned to f(3) makes f continuous there?
a) 5
b) 3
c) 0
d) No value works; the discontinuity is not removable

**11.** By L'Hôpital's Rule, lim_{x→∞} (ln x)/x equals
a) 1
b) ∞
c) e
d) 0

**12.** lim_{x→3} f(x) exists if and only if
a) f(3) is defined
b) lim_{x→3⁻} f(x) and lim_{x→3⁺} f(x) both exist and are equal
c) f is a polynomial on some interval containing 3
d) f(3) = 0

## Short answer

**S1.** Evaluate lim_{x→9} (√x − 3)/(x − 9). Name the method, show every step, and say in one sentence why direct substitution failed.

**S2.** State L'Hôpital's Rule precisely, including its hypotheses. Then give one concrete limit for which applying the rule produces a *wrong* answer, and explain which hypothesis was violated.

**S3.** For f(x) = 2x + 1 when x < 1, and f(x) = 4 − x when x ≥ 1, determine lim_{x→1} f(x) and decide whether f is continuous at x = 1. Justify each step from the definitions.

## Answers

**1. c** — 0/0, so factor: (x+2)(x−2)/(x−2) → x + 2 → 4; being undefined at 2 does not stop the limit existing.
**2. a** — The rule is licensed only by an indeterminate quotient form plus differentiability of f and g near a (with g′ ≠ 0).
**3. d** — Multiply by the conjugate √(x+1)+1: x/[x(√(x+1)+1)] → 1/(1+1) = 1/2.
**4. b** — Right of 5, |x−5| = x−5 giving 1; left of 5, |x−5| = −(x−5) giving −1; unequal one-sided limits ⟹ no limit.
**5. a** — Equal degrees as x → ∞, so the limit is the ratio of leading coefficients, 4/7.
**6. c** — Division by a limit of zero is undefined, so the law is stated only for lim g ≠ 0; g(a) itself is irrelevant.
**7. b** — −|x| ≤ x sin(1/x) ≤ |x| and both bounds tend to 0, so the Squeeze Theorem forces the limit to 0.
**8. d** — With a non-zero numerator over 0 the limit is ±∞ or non-existent; the form already determines the outcome, so it is not indeterminate.
**9. c** — L'Hôpital (or sin u ≈ u): (5 cos 5x)/2 → 5/2.
**10. a** — (x−3)(x+2)/(x−3) → x + 2, whose limit at 3 is 5; matching f(3) to the limit removes the hole.
**11. d** — Form ∞/∞; differentiating gives (1/x)/1 = 1/x → 0, so logarithms grow slower than x.
**12. b** — Existence of a two-sided limit is exactly agreement of the two one-sided limits; the value f(3) plays no part.

**S1.** Substitution gives (3 − 3)/(9 − 9) = 0/0, indeterminate, so substitution fails. Use **rationalization**: multiply numerator and denominator by the conjugate √x + 3 to get (x − 9)/[(x − 9)(√x + 3)] = 1/(√x + 3) for x ≠ 9; the limit is 1/(3 + 3) = **1/6**.

**S2.** *Statement:* if f and g are differentiable on an open interval containing a (except possibly at a), g′(x) ≠ 0 there, and lim_{x→a} f(x)/g(x) is of the form 0/0 or ∞/∞, then lim_{x→a} f(x)/g(x) = lim_{x→a} f′(x)/g′(x) provided the latter limit exists (or is ±∞). *Misapplication:* lim_{x→0} (cos x)/(x + 1) is 1/1 = 1 by substitution, but differentiating top and bottom gives (−sin x)/1 → 0. The violated hypothesis is the indeterminate-form condition: the quotient was never 0/0 or ∞/∞, so the rule does not apply. A full answer must say that the form must be re-checked before *each* application.

**S3.** Left-hand: for x < 1 the rule is 2x + 1, so lim_{x→1⁻} f(x) = 2(1) + 1 = 3. Right-hand: for x ≥ 1 the rule is 4 − x, so lim_{x→1⁺} f(x) = 4 − 1 = 3. The one-sided limits agree, so **lim_{x→1} f(x) = 3**. For continuity check all three conditions: f(1) = 4 − 1 = 3 is defined, the limit exists and equals 3, and 3 = 3 — so f **is continuous** at x = 1. (A piecewise rule change does not by itself create a discontinuity; only a mismatch does.)
