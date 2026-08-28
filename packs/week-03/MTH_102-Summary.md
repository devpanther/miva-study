# MTH_102 — Week 3 Summary

*Elementary Mathematics II (Calculus) · Week 3 (21–27 Sep 2026) · Topic: Concept of Limits and their Notation — Evaluating Limits Algebraically*

## The 8 most examinable things this week

1. **lim_{x→a} f(x) = L means f(x) gets arbitrarily close to L as x gets close to a from either side — it says nothing about f(a).** f need not be defined at a, and if it is, f(a) may differ from L.
2. **Existence test:** lim_{x→a} f(x) exists **⟺** lim_{x→a⁻} f(x) and lim_{x→a⁺} f(x) both exist **and are equal**.
3. **Direct substitution first, always** — it is valid whenever f is continuous at a (all polynomials everywhere; a rational function wherever its denominator is non-zero; roots, exp, log, sin, cos inside their domains).
4. Substitution giving **0/0** is *indeterminate*: it means "the method failed", not "no limit". Substitution giving **k/0 with k ≠ 0** is **not** indeterminate — it is an infinite limit, and you decide ±∞ by signs.
5. **0/0 in a rational function ⟹ (x − a) is a common factor.** Factor and cancel. In a surd, multiply by the **conjugate**. In a stack of fractions, combine over a common denominator first.
6. **Limits at infinity:** divide numerator and denominator by the **highest power of x in the denominator**; every c/xⁿ term dies. Equivalently, compare degrees: deg N < deg D ⟹ 0; equal ⟹ ratio of leading coefficients; deg N > deg D ⟹ ±∞.
7. **The limit laws only apply when the individual limits exist (and, for a quotient, when the bottom limit is non-zero).** Quoting a law outside its hypotheses is the single commonest lost mark.
8. **L'Hôpital's Rule:** for **0/0 or ∞/∞ only**, differentiate top and bottom **separately** — never with the quotient rule — and re-substitute.

## Notation, one-sided limits, and existence

- Written **lim_{x→a} f(x) = L**, read "the limit of f of x as x approaches a is L". Formally: for every ε > 0 there is a δ > 0 such that 0 < |x − a| < δ ⟹ |f(x) − L| < ε. The strict inequality **0 < |x − a|** is the whole point: x = a itself is excluded.
- **Left limit** lim_{x→a⁻} f(x): x → a through values **less than** a. **Right limit** lim_{x→a⁺}: through values **greater than** a.
- **A limit fails to exist** in exactly three ways: (i) **jump** — the two one-sided limits exist but differ; (ii) **infinite** — f grows without bound near a (some texts write = ±∞ but strictly the limit does not exist as a number); (iii) **oscillation** — f never settles, e.g. sin(1/x) as x → 0.
- **Continuity at a** = all three of: f(a) is defined, lim_{x→a} f(x) exists, and the two are **equal**. A hole (removable discontinuity) breaks only the third; a jump breaks the second; an asymptote breaks both.

## The limit laws (conditions in bold)

Assume **lim_{x→a} f(x) = L and lim_{x→a} g(x) = M both exist and are finite**. Then:

| Law | Statement | Extra condition |
|---|---|---|
| Constant | lim c = c | — |
| Identity | lim x = a | — |
| Sum / Difference | lim (f ± g) = L ± M | — |
| Constant multiple | lim (c·f) = c·L | — |
| Product | lim (f·g) = L·M | — |
| Quotient | lim (f/g) = L/M | **M ≠ 0** |
| Reciprocal | lim (1/f) = 1/L | **L ≠ 0** |
| Power | lim [f(x)]ⁿ = Lⁿ | n a positive integer |
| Root | lim ⁿ√f(x) = ⁿ√L | **L ≥ 0 if n is even** |
| Composite | lim g(f(x)) = g(L) | **g continuous at L** |

**Squeeze (Sandwich) Theorem.** If **g(x) ≤ f(x) ≤ h(x) for all x near a** (except possibly at a) **and** lim_{x→a} g(x) = lim_{x→a} h(x) = L, then lim_{x→a} f(x) = L. Both outer limits must be the **same** L.

**Direct Substitution Theorem.** If f is a polynomial, or a rational function with **denominator non-zero at a**, then lim_{x→a} f(x) = f(a).

**Indeterminate forms:** 0/0, ∞/∞, 0·∞, ∞ − ∞, 1^∞, 0⁰, ∞⁰. **Determinate (so *not* to be "resolved"):** k/0 (k ≠ 0) → infinite; 0/k = 0; ∞ + ∞ = ∞; ∞·∞ = ∞.

**L'Hôpital's Rule.** If f and g are differentiable near a (g′ ≠ 0 near a) and f(x)/g(x) → **0/0 or ∞/∞**, then lim f(x)/g(x) = lim f′(x)/g′(x), **provided that second limit exists or is ±∞**. Check the form *before* every application; re-apply only if the new quotient is again 0/0 or ∞/∞.

## Worked examples — one per technique

**(1) Direct substitution.** lim_{x→2} (3x² − 5x + 4)/(x + 1). The denominator at x = 2 is 3 ≠ 0, so the function is continuous there: substitute. (12 − 10 + 4)/3 = 6/3 = **2**.

**(2) Factor and cancel (0/0).** lim_{x→3} (x² − x − 6)/(x² − 9). Substitution gives 0/0 ⟹ (x − 3) divides both. = [(x − 3)(x + 2)]/[(x − 3)(x + 3)] = (x + 2)/(x + 3) **for every x ≠ 3**, and the limit only looks at x ≠ 3 — so cancelling is legal, no division by zero occurs. Now substitute: 5/6. **= 5/6.**

**(3) Rationalising a surd conjugate.** lim_{x→0} (√(x + 4) − 2)/x → 0/0. Multiply top and bottom by the conjugate √(x + 4) + 2:
[(x + 4) − 4] / [x(√(x + 4) + 2)] = x/[x(√(x + 4) + 2)] = 1/(√(x + 4) + 2) for x ≠ 0 → 1/(2 + 2) = **1/4**.

**(4) Complex fraction (combine first).** lim_{h→0} [1/(2 + h) − 1/2]/h → 0/0. Common denominator on top: [2 − (2 + h)]/[2(2 + h)] = −h/[2(2 + h)]. Divide by h: −1/[2(2 + h)] → **−1/4**.

**(5) Limit at infinity — divide by the highest power.** lim_{x→∞} (3x² − 4x + 1)/(5x² + 7x). Highest power in the denominator is x²; divide every term by x²: (3 − 4/x + 1/x²)/(5 + 7/x). Each c/xⁿ → 0, leaving **3/5** (the ratio of leading coefficients, as the degree rule predicts). Same method: (2x + 3)/(x² + 1) → 0/1 = **0**; (x³ + 1)/(x² + 1) → **∞**. **Watch the sign with roots:** √(x²) = |x|, which is **−x** when x < 0, so lim_{x→−∞} √(9x² + 1)/(x + 2) = **−3**, not +3.

**(6) One-sided limits and failure to exist.** f(x) = |x − 2|/(x − 2). For x > 2, |x − 2| = x − 2 so f = **+1**; for x < 2, |x − 2| = −(x − 2) so f = **−1**. Hence lim_{x→2⁺} f = 1, lim_{x→2⁻} f = −1; they differ, so **lim_{x→2} f(x) does not exist** (a jump). Note f is nowhere near "undefined-therefore-no-limit": the reason is the mismatch, not the hole.

**(7) Infinite limit from k/0 — and why the square matters.** lim_{x→1} (x + 2)/(x − 1)² → 3/0⁺. (x − 1)² > 0 on **both** sides, so f → **+∞** from both sides. But lim_{x→1} (x + 2)/(x − 1) → 3/0 with the denominator **negative on the left and positive on the right**: −∞ and +∞, so that limit **does not exist**, not even as an infinity. Neither is 0/0, so no cancelling is possible.

**(8) L'Hôpital's Rule.** lim_{x→1} (x³ − 1)/(x² − 1) → 0/0 ✓. Differentiate separately: 3x²/2x → 3/2. **= 3/2.** Check by factoring: [(x−1)(x²+x+1)]/[(x−1)(x+1)] = (x²+x+1)/(x+1) → 3/2 ✓. (∞/∞ version: lim_{x→∞} (2x² + 1)/(x² − 3) → 4x/2x = 2.)

**(9) Squeeze Theorem.** lim_{x→0} x² sin(1/x). sin(1/x) has no limit at 0, so no product law. But −1 ≤ sin(1/x) ≤ 1 for all x ≠ 0, so **−x² ≤ x² sin(1/x) ≤ x²**, and both outer functions → 0. Hence the limit is **0**.

## Commonly confused

- **0/0 vs k/0.** 0/0 is indeterminate — keep working. 5/0 is *determinate*: an infinite limit; cancelling is impossible and attempting it is a fabrication.
- **"The limit is f(a)."** Only when f is continuous at a. lim_{x→1} (x² − 1)/(x − 1) = 2 even though f(1) is undefined — and if a piecewise rule *defined* f(1) = 7, the limit would still be 2.
- **Cancelling "divides by zero".** It does not: the cancelled expression equals the original for **all x ≠ a**, and the limit never evaluates at a.
- **Quotient law with a zero bottom.** lim g = 0 makes the law inapplicable; it does **not** prove the quotient's limit fails to exist.
- **L'Hôpital by the quotient rule.** The rule is f′/g′, two separate derivatives — not (f/g)′.
- **L'Hôpital on the wrong form.** Applying it to 3/0 or to 2/5 gives a confidently wrong number; check the form every single time.
- **√(x²) = x.** True only for x ≥ 0; for x → −∞ it is −x, which flips the sign of the answer.
- **One-sided infinities.** ±∞ on the two sides ⟹ the limit does **not exist**; the *same* infinity on both sides ⟹ we write = +∞ (or −∞) as a description of the behaviour.
- **Squeeze with mismatched bounds.** If the two bounding limits differ, the theorem says nothing at all.

---

*Note on the source: this week's deck lists its techniques by slide title — direct substitution, factorisation, rationalisation, L'Hôpital's Rule, the ten limit properties (sum, difference, constant, constant multiple, product, quotient, power, composite, Squeeze, reciprocal) — but every formula, example and TASK slide was carried as an image, so the deck text contains no worked mathematics. The summary sheet adds only the notation, one-sided/continuity vocabulary, the indeterminate-form remark and a structural-engineering case study. The statements, conditions and worked examples above are the standard 100-level treatment of exactly those named headings.*
