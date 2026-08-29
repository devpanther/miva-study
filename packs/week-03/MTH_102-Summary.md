# MTH_102 — Week 3

*Elementary Mathematics II (Calculus) · Week 3 (21 – 27 Sep 2026)*

*Note: the Week 3 deck ("Evaluating Limits Algebraically") is almost entirely images — the extracted text gives only slide titles (DIRECT SUBSTITUTION, FACTORIZATION METHOD, RATIONALIZATION, L'HÔPITAL'S RULE, the ten limit properties, APPLICATIONS). No formula or worked example survived extraction. The scope below is the deck's own list of topics, filled in with the standard content for each, so the week is still usable for revision.*

## Most likely to be examined

1. **Definition of a limit.** lim_{x→a} f(x) = L means f(x) can be made arbitrarily close to L by taking x sufficiently close to a **but not equal to a**. Formally (ε–δ, the picture on the objectives slide): for every ε > 0 there is δ > 0 with 0 < |x − a| < δ ⟹ |f(x) − L| < ε.
2. **One-sided limits and the existence test.** lim_{x→a} f(x) = L ⟺ lim_{x→a⁻} f(x) = lim_{x→a⁺} f(x) = L. If the two one-sided limits differ, the limit does not exist (jump discontinuity).
3. **Direct substitution and when it is legal.** For polynomials and for rational functions with non-zero denominator at a, lim_{x→a} f(x) = f(a). Continuity at a: f(a) defined, lim_{x→a} f(x) exists, and the two are equal.
4. **Factorization method for 0/0.** lim_{x→2} (x² − 4)/(x − 2) = lim_{x→2} (x+2)(x−2)/(x−2) = lim_{x→2} (x + 2) = 4. Cancellation is valid because x ≠ 2 throughout the limit process.
5. **Rationalization method for 0/0 with radicals.** Multiply by the conjugate: lim_{x→0} (√(x+9) − 3)/x = lim_{x→0} x/[x(√(x+9)+3)] = 1/6.
6. **L'Hôpital's Rule.** If lim_{x→a} f(x)/g(x) has the form 0/0 or ∞/∞, with f, g differentiable near a and g′(x) ≠ 0, then lim_{x→a} f(x)/g(x) = lim_{x→a} f′(x)/g′(x), provided that limit exists. Differentiate numerator and denominator **separately** — never the quotient rule.
7. **The limit laws**: sum, difference, constant, constant multiple, product, quotient (needs lim g ≠ 0), power, composite (needs outer function continuous), reciprocal (needs lim f ≠ 0). Every law presupposes the individual limits exist.
8. **Squeeze (Sandwich) Theorem.** If g(x) ≤ f(x) ≤ h(x) near a and lim_{x→a} g(x) = lim_{x→a} h(x) = L, then lim_{x→a} f(x) = L. Standard use: lim_{x→0} x² sin(1/x) = 0.

## Definitions

- **Limit.** lim_{x→a} f(x) = L: f(x) → L as x → a with x ≠ a. The value f(a) is irrelevant; it may be undefined, or defined and different from L.
- **ε–δ definition.** ∀ ε > 0 ∃ δ > 0 : 0 < |x − a| < δ ⟹ |f(x) − L| < ε.
- **Left-hand limit** lim_{x→a⁻} f(x): x approaches a through values **less** than a. **Right-hand limit** lim_{x→a⁺} f(x): through values **greater** than a.
- **Continuity at a point.** f is continuous at a ⟺ (i) f(a) is defined, (ii) lim_{x→a} f(x) exists, (iii) lim_{x→a} f(x) = f(a).
- **Discontinuities.** *Removable* (limit exists but f(a) is undefined or different — a "hole"); *jump* (one-sided limits exist but differ); *infinite* (a one-sided limit is ±∞, i.e. a vertical asymptote).
- **Indeterminate forms.** 0/0, ∞/∞, 0·∞, ∞ − ∞, 1^∞, 0⁰, ∞⁰. "Indeterminate" means the form alone does not decide the limit — more algebra is needed. Note that a/0 with a ≠ 0 is **not** indeterminate.
- **Limit at infinity.** lim_{x→∞} f(x) = L: f(x) → L as x grows without bound (horizontal asymptote y = L).

## Formulas — properties of limits

Assume lim_{x→a} f(x) = L and lim_{x→a} g(x) = M, both existing.

| Property | Statement |
|---|---|
| Sum | lim [f(x) + g(x)] = L + M |
| Difference | lim [f(x) − g(x)] = L − M |
| Constant | lim_{x→a} c = c |
| Constant multiple | lim [c·f(x)] = c·L |
| Product | lim [f(x)·g(x)] = L·M |
| Quotient | lim [f(x)/g(x)] = L/M, **provided M ≠ 0** |
| Power / root | lim [f(x)]ⁿ = Lⁿ; lim ⁿ√(f(x)) = ⁿ√L (need L ≥ 0 if n is even) |
| Composite | if lim_{x→a} f(x) = L and g is continuous at L, then lim_{x→a} g(f(x)) = g(L) |
| Reciprocal | lim 1/f(x) = 1/L, **provided L ≠ 0** |
| Identity / linear | lim_{x→a} x = a; lim_{x→a} (mx + c) = ma + c |
| Squeeze | g ≤ f ≤ h near a and lim g = lim h = L ⟹ lim f = L |

Other standard results: lim_{x→0} (sin x)/x = 1; lim_{x→0} (1 − cos x)/x = 0; lim_{x→∞} (1 + 1/x)^x = e. For a rational function as x → ∞: equal degrees ⟹ ratio of leading coefficients; numerator degree lower ⟹ 0; numerator degree higher ⟹ ±∞.

**Choosing the method (exam decision tree).**
1. Try direct substitution. A number ⟹ done.
2. Non-zero number over 0 ⟹ the limit is ±∞ (check the sign from each side); the two-sided limit does not exist.
3. 0/0 ⟹ indeterminate: factor and cancel (polynomials), multiply by the conjugate (radicals), clear the compound fraction (fractions within fractions), or apply L'Hôpital.
4. x → ∞ giving ∞/∞ ⟹ divide top and bottom by the highest power of x in the denominator, or apply L'Hôpital.

## Worked examples

**1 — Direct substitution.** Evaluate lim_{x→3} (2x² − 5x + 1).
A polynomial is continuous everywhere, so substitution is legal.
= 2(3)² − 5(3) + 1 = 18 − 15 + 1 = **4**.

**2 — Direct substitution, rational function.** Evaluate lim_{x→1} (x + 4)/(x² + 2).
Denominator at x = 1 is 1 + 2 = 3 ≠ 0, so the quotient law applies.
= (1 + 4)/(1 + 2) = **5/3**.

**3 — Factorization.** Evaluate lim_{x→3} (x² − 9)/(x² − 4x + 3).
Substitute: (9 − 9)/(9 − 12 + 3) = 0/0 — indeterminate, so factor.
x² − 9 = (x − 3)(x + 3);  x² − 4x + 3 = (x − 3)(x − 1).
lim_{x→3} [(x − 3)(x + 3)]/[(x − 3)(x − 1)] = lim_{x→3} (x + 3)/(x − 1)   (cancel x − 3; valid since x ≠ 3)
= (3 + 3)/(3 − 1) = 6/2 = **3**.

**4 — Rationalization.** Evaluate lim_{x→4} (√x − 2)/(x − 4).
Substitute: (2 − 2)/(4 − 4) = 0/0. Multiply above and below by the conjugate √x + 2:
= lim_{x→4} [(√x − 2)(√x + 2)]/[(x − 4)(√x + 2)] = lim_{x→4} (x − 4)/[(x − 4)(√x + 2)]
= lim_{x→4} 1/(√x + 2) = 1/(2 + 2) = **1/4**.

**5 — L'Hôpital's Rule (0/0).** Evaluate lim_{x→0} (sin 3x)/(5x).
Substitute: 0/0, and both functions are differentiable near 0.
d/dx(sin 3x) = 3 cos 3x;  d/dx(5x) = 5.
= lim_{x→0} (3 cos 3x)/5 = 3(1)/5 = **3/5**.

**6 — L'Hôpital's Rule (∞/∞), applied twice.** Evaluate lim_{x→∞} x²/e^x.
Form ∞/∞ ⟹ lim_{x→∞} 2x/e^x — still ∞/∞ ⟹ lim_{x→∞} 2/e^x = **0**.
Re-check the form after each application; stop the moment it is no longer indeterminate.

**7 — One-sided limits / existence.** For f(x) = |x|/x, find lim_{x→0} f(x).
x > 0: |x| = x so f(x) = 1 ⟹ lim_{x→0⁺} f(x) = 1.
x < 0: |x| = −x so f(x) = −1 ⟹ lim_{x→0⁻} f(x) = −1.
1 ≠ −1, so **the limit does not exist** (jump discontinuity at 0). f(0) being undefined is not itself the reason.

**8 — Squeeze Theorem.** Evaluate lim_{x→0} x² sin(1/x).
sin(1/x) has no limit at 0, so the product law is unusable. But −1 ≤ sin(1/x) ≤ 1 for x ≠ 0, hence
−x² ≤ x² sin(1/x) ≤ x².
lim_{x→0}(−x²) = 0 and lim_{x→0} x² = 0, so by the Squeeze Theorem the limit is **0**.

**9 — Limit at infinity.** Evaluate lim_{x→∞} (3x² − x + 2)/(5x² + 7).
Divide top and bottom by x², the highest power in the denominator:
= lim_{x→∞} (3 − 1/x + 2/x²)/(5 + 7/x²) = (3 − 0 + 0)/(5 + 0) = **3/5**.

**10 — Continuity check and classification.** Is f(x) = (x² − 1)/(x − 1) continuous at x = 1?
f(1) = 0/0 is undefined, so condition (i) fails ⟹ **not continuous at 1**.
But lim_{x→1} (x − 1)(x + 1)/(x − 1) = lim_{x→1} (x + 1) = 2 exists, so the discontinuity is **removable**: defining f(1) = 2 repairs it.

## Commonly confused

- **lim_{x→a} f(x) vs f(a).** The limit ignores the point a; f(a) is the value at the point. *Test:* you can change f(a) freely without changing the limit — so they are different objects.
- **"Limit does not exist" vs "f is undefined at a".** (x² − 4)/(x − 2) is undefined at 2 yet its limit there is 4. *Test:* ask whether f(x) settles on one number from both sides; that alone decides existence.
- **0/0 vs a/0 with a ≠ 0.** 0/0 is indeterminate — keep working. a/0 is not indeterminate: the limit is ±∞ / does not exist. *Test:* does the numerator also tend to 0?
- **L'Hôpital's Rule vs the Quotient Rule.** L'Hôpital gives f′/g′ (differentiate separately); the quotient rule gives (f′g − fg′)/g². *Test:* if a g² appears in your working you used the wrong rule.
- **Applying L'Hôpital when the form is not indeterminate.** lim_{x→0} (cos x)/(x + 1) = 1 by substitution, but L'Hôpital would give (−sin x)/1 → 0, which is wrong. *Test:* substitute first; only 0/0 or ∞/∞ licenses the rule.
- **"Illegal" cancellation of (x − a).** Cancelling inside a limit is legitimate because x ≠ a throughout; it would be illegal only as a claim about the value *at* a. *Test:* the simplified function agrees with the original everywhere except the single point a, and limits never inspect that point.
- **Quotient law used without its hypothesis.** lim(f/g) = L/M requires M ≠ 0; students apply it to 0/0 and conclude the limit fails to exist. *Test:* check M ≠ 0 before quoting the law.
- **Squeeze Theorem bounds.** The two bounding functions must have the *same* limit; bounds with different limits prove nothing. *Test:* did lim g and lim h come out equal?
- **One-sided notation.** x → a⁻ means x is *below* a, not that x is negative. *Test:* with a = 3, x → 3⁻ means x = 2.9, 2.99, …
- **Composite limit.** lim g(f(x)) = g(lim f(x)) requires g continuous at the inner limit L. *Test:* if g jumps at L, moving the limit inside is invalid.
