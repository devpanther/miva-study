# MTH_102 — Week 3 Summary

*Elementary Mathematics II (Calculus) · Week 3 (21–27 Sep 2026) · Topic: Concept of Limits and their Notation — Evaluating Limits Algebraically*

## The 8 most examinable things this week

1. What lim_{x→a} f(x) = L **means**: f(x) can be forced as close to L as you like by taking x close enough to a — **with x ≠ a**. The value f(a) is irrelevant, and may not even exist.
2. **Two-sided limit exists ⟺ both one-sided limits exist and are equal.** This is the only test for existence, and the only reason a limit "does not exist" in most exam questions.
3. The **limit laws** (sum, difference, constant, constant multiple, product, quotient, power/root, composite, reciprocal, squeeze) and the hypothesis every one of them carries: **the separate limits must exist**, and for quotient/reciprocal the bottom limit must be **non-zero**.
4. **Direct substitution first.** For a polynomial or a rational function with a in its domain, lim_{x→a} f(x) = f(a). Only when substitution fails do you reach for a technique.
5. Telling an **indeterminate form (0/0, ∞/∞, 0·∞, ∞−∞, 0⁰, 1^∞, ∞⁰)** from a merely **infinite** one (c/0 with c ≠ 0). Indeterminate = "do more algebra"; c/0 = "the limit is ±∞, check each side".
6. Matching the technique to the shape: **0/0 with polynomials ⟹ factor and cancel**; **0/0 with a surd ⟹ multiply by the conjugate**; **0/0 with stacked fractions ⟹ common denominator**; **x → ±∞ ⟹ divide top and bottom by the highest power of x**.
7. **L'Hôpital's rule**: only for 0/0 or ∞/∞, and you differentiate **numerator and denominator separately** — never with the quotient rule.
8. **Continuity at a** = three conditions (f(a) defined, the limit exists, they are equal), and the three failures: **removable (hole)**, **jump**, **infinite (asymptote)**.

## Definition and notation

**lim_{x→a} f(x) = L** is read "the limit of f of x as x approaches a is L". Formally (the ε–δ picture on the slide): for every ε > 0 there is a δ > 0 such that **0 < |x − a| < δ ⟹ |f(x) − L| < ε** — whatever horizontal band L ± ε you name, some window a ± δ traps the graph inside it. The strict inequality 0 < |x − a| is what excludes x = a itself.

**One-sided limits.** lim_{x→a⁻} f(x) = L (x approaches a from the **left**, x < a); lim_{x→a⁺} f(x) = L (from the **right**, x > a). **lim_{x→a} f(x) = L if and only if lim_{x→a⁻} f(x) = lim_{x→a⁺} f(x) = L.**

**Infinite limits.** lim_{x→a} f(x) = ∞ says f grows without bound near a — it is a **description of divergence**, not a number; the limit does not "exist" in the ordinary sense. **Limits at infinity** lim_{x→±∞} f(x) = L describe end behaviour (the horizontal asymptotes of Week 2). Key fact: **lim_{x→±∞} 1/xⁿ = 0** for every n > 0.

**Continuity.** f is continuous at a if (i) f(a) is defined, (ii) lim_{x→a} f(x) exists, (iii) the two are equal. Failures: **removable** — the limit exists but f(a) is missing or wrong (a hole); **jump** — the one-sided limits exist but differ; **infinite** — a one-sided limit is ±∞ (a vertical asymptote).

## The limit laws

Assume lim_{x→a} f(x) = L and lim_{x→a} g(x) = M **both exist and are finite**. Then:

| Law | Statement |
|---|---|
| Constant | lim_{x→a} c = c |
| Identity | lim_{x→a} x = a |
| Sum / Difference | lim (f ± g) = L ± M |
| Constant multiple | lim (c·f) = c·L |
| Product | lim (f·g) = L·M |
| Quotient | lim (f/g) = L/M, **provided M ≠ 0** |
| Reciprocal | lim (1/f) = 1/L, **provided L ≠ 0** |
| Power / Root | lim (f)ⁿ = Lⁿ; lim ⁿ√f = ⁿ√L (n even needs L > 0) |
| Composite | if lim_{x→a} f(x) = b and g is continuous at b, lim_{x→a} g(f(x)) = g(b) |
| Squeeze (Sandwich) | if g(x) ≤ f(x) ≤ h(x) near a and lim g = lim h = L, then lim f = L |

**Direct substitution property.** If f is a polynomial, or a rational function with a in its domain, then lim_{x→a} f(x) = f(a). This is a *consequence* of the laws above, not a separate rule.

Two traps. (1) The laws are **one-way**: lim (f + g) can exist while neither lim f nor lim g does — e.g. f = 1/x, g = −1/x at 0. (2) The quotient law is **silent**, not false, when M = 0; it simply does not apply, and you must look at the numerator to decide between 0/0 (indeterminate) and c/0 (infinite).

## Indeterminate forms and the named techniques

**Indeterminate:** 0/0, ∞/∞, 0·∞, ∞ − ∞, 0⁰, 1^∞, ∞⁰. These carry **no information** — the answer can be any number, or ±∞, or nothing; you must rewrite. **Not indeterminate:** c/0 (c ≠ 0) → ±∞; 0/c → 0; ∞ + ∞ → ∞; ∞·c → ±∞.

- **Direct substitution** — always try first.
- **Factorisation** — for 0/0 in polynomials. Factor top and bottom, cancel the common factor (legal because x ≠ a inside a limit), then substitute. Useful identities: a² − b² = (a−b)(a+b); a³ − b³ = (a−b)(a² + ab + b²); a³ + b³ = (a+b)(a² − ab + b²).
- **Rationalisation** — for 0/0 containing a square root. Multiply top **and** bottom by the conjugate (√A − B ↦ √A + B), use (√A − B)(√A + B) = A − B², cancel, substitute.
- **Common denominator** — for ∞ − ∞ or stacked fractions: combine into a single fraction first.
- **Divide by the highest power of x** — for x → ±∞. Then every 1/xⁿ term dies. Equivalently: deg N < deg D ⟹ 0; deg N = deg D ⟹ ratio of leading coefficients; deg N > deg D ⟹ ±∞.
- **L'Hôpital's rule** — if lim f/g is of the form 0/0 or ∞/∞ and f, g are differentiable near a with g′ ≠ 0, then **lim f/g = lim f′/g′**, and may be repeated while the form stays indeterminate. Differentiate top and bottom **separately**; check the form again before each application.
- **Squeeze theorem** — for oscillating factors the product law cannot handle, e.g. sin(1/x).
- **Special limits** worth knowing: lim_{x→0} (sin x)/x = 1, lim_{x→0} (1 − cos x)/x = 0, lim_{x→0} (1 + x)^{1/x} = e.

## Worked examples

**(1) Direct substitution.** lim_{x→3} (2x² − x + 1). Polynomial, so substitute: 2(9) − 3 + 1 = **16**. Nothing further is needed — no "technique" is required when the function is defined and continuous at the point.

**(2) Factor and cancel (0/0).** lim_{x→2} (x³ − 8)/(x² − 4). Substitution gives **0/0**, so factor: x³ − 8 = (x − 2)(x² + 2x + 4) and x² − 4 = (x − 2)(x + 2).
(x−2)(x² + 2x + 4) / [(x−2)(x+2)] = (x² + 2x + 4)/(x + 2) for x ≠ 2. Substitute: (4 + 4 + 4)/4 = **3**.
The cancellation is legal precisely because the limit never evaluates at x = 2.

**(3) Rationalising a conjugate (0/0 with a surd).** lim_{x→0} (√(x + 9) − 3)/x. Substitution gives 0/0. Multiply by (√(x+9) + 3)/(√(x+9) + 3):
numerator → (x + 9) − 9 = x, so the quotient is x / [x(√(x+9) + 3)] = 1/(√(x+9) + 3).
Substitute: 1/(3 + 3) = **1/6**. (Same trick for lim_{x→1} (x − 1)/(√x − 1): the conjugate gives √x + 1 → **2**.)

**(4) Limits at infinity — divide by the highest power.** lim_{x→∞} (3x² − 5x + 1)/(2x² + 7). Divide every term by x²:
(3 − 5/x + 1/x²)/(2 + 7/x²) → (3 − 0 + 0)/(2 + 0) = **3/2**.
**Sign trap with roots:** lim_{x→−∞} √(9x² + 1)/(x + 2). Here √(9x² + 1) = |x|√(9 + 1/x²), and for x < 0, |x| = **−x**. Dividing by x: (−√(9 + 1/x²))/(1 + 2/x) → **−3** (it is +3 as x → +∞).

**(5) ∞ − ∞ by conjugate.** lim_{x→∞} (√(x² + 3x) − x) is **∞ − ∞**, not 0. Multiply by (√(x²+3x) + x)/(√(x²+3x) + x): the top becomes (x² + 3x) − x² = 3x, so the expression is 3x/(√(x² + 3x) + x). Divide by x: 3/(√(1 + 3/x) + 1) → 3/(1 + 1) = **3/2**.

**(6) One-sided limits, and when the two-sided limit fails.** f(x) = (x + 1)/(x − 3) at x = 3. Substitution gives 4/0 — **not indeterminate**, so check signs. As x → 3⁻ the top → 4 > 0 and the bottom → 0⁻, so f → **−∞**; as x → 3⁺ the bottom → 0⁺, so f → **+∞**. The one-sided limits differ, so **lim_{x→3} f(x) does not exist** (an infinite discontinuity).
Contrast lim_{x→3} 1/(x−3)² : the bottom is 0⁺ from both sides, so both one-sided limits are +∞ and we write lim = **+∞** — still not a finite limit, but the two sides now agree.

**(7) Piecewise and absolute value.** lim_{x→2} |x − 2|/(x² − 4). Rewrite the absolute value by side.
Left (x < 2): |x − 2| = 2 − x = −(x − 2), so the quotient is −(x−2)/[(x−2)(x+2)] = −1/(x + 2) → **−1/4**.
Right (x > 2): |x − 2| = x − 2, giving 1/(x + 2) → **+1/4**.
Different one-sided limits ⟹ **the limit does not exist** (jump). Same method for f(x) = {ax + 1, x < 3; x² − 2, x ≥ 3}: left limit 3a + 1, right limit 7, so the limit exists only when 3a + 1 = 7, i.e. **a = 2** — matching the two formulas at the joint, not evaluating one of them.

**(8) L'Hôpital's rule (and the squeeze theorem).** lim_{x→0} (eˣ − 1 − x)/x² is 0/0. Differentiate top and bottom separately: (eˣ − 1)/(2x) — still 0/0 — again: eˣ/2 → **1/2**. Always re-check the form before reapplying; had the second step given 3/4 you would stop and read off 3/4.
**Squeeze:** lim_{x→0} x² sin(1/x). The product law fails because lim sin(1/x) does not exist. But −1 ≤ sin(1/x) ≤ 1, so **−x² ≤ x² sin(1/x) ≤ x²**, and both bounds → 0, so the limit is **0**.

## Commonly confused

- **The limit vs the value of the function** — lim_{x→a} f(x) never consults f(a). f can be undefined at a and still have a limit; f can be defined at a and have no limit.
- **"Indeterminate" vs "does not exist"** — 0/0 means *the form tells you nothing yet*, not that the answer is missing. Most 0/0 questions have a perfectly good finite answer after one line of algebra.
- **c/0 called indeterminate** — 7/0 is not indeterminate; it is an infinite limit, and the work is a sign check on each side, not factoring.
- **Cancelling |x − a| against (x − a)** — legal only on the right, where the absolute value is positive; on the left it costs a minus sign. This is what turns an apparently removable point into a jump.
- **Using the quotient law when the bottom limit is 0** — the law simply does not apply; nothing may be concluded from it either way.
- **L'Hôpital on a non-indeterminate form** — applying it to (x² + 3)/(x − 1) at x = 1 (form 4/0) gives 2x/1 → 2, which is flatly wrong: the true behaviour is −∞ / +∞ from the two sides.
- **L'Hôpital done with the quotient rule** — the rule differentiates numerator and denominator *separately*; (f/g)′ is a different expression entirely.
- **Forgetting |x| = −x for x < 0** when a square root meets x → −∞ — the commonest sign error in limits at infinity.
- **Squeeze theorem with a one-sided bound** — f(x) ≤ h(x) alone proves nothing; you need functions on *both* sides with the *same* limit.
- **Stopping L'Hôpital too early or too late** — check the form after every differentiation; once it is no longer 0/0 or ∞/∞, substitute.

---

*Note on the source: this week's deck lists its objectives — define the limit, evaluate limits by direct substitution, factorisation and rationalisation, handle indeterminate forms with L'Hôpital's rule, and know the properties of a limit — and then names each item on slides ("DIRECT SUBSTITUTION", "FACTORIZATION METHOD", "RATIONALIZATION", "L'HOPITAL'S RULE", "LIMIT OF A SUM" … "SQUEEZE THEOREM", "LIMIT OF A RECIPROCAL") with every statement, example and task carried entirely by slide images that the text extraction could not read; the week summary adds only a bullet list and a bridge case study. The definitions, laws, forms, techniques and worked examples above are the standard 100-level treatment of exactly the objectives and slide headings the deck names.*
