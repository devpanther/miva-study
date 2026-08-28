# MTH_102 — Week 1 Summary

*Elementary Mathematics II (Calculus) · Week 1 (7–13 Sep 2026) · Topic: Real-Valued Functions and their Properties*

## The 7 most examinable things this week

1. The precise definition of a function and how it differs from a mere relation.
2. Domain, codomain, range — and that **range ⊆ codomain**, often properly.
3. The vertical line test (tests *function-ness*), and the horizontal line test (tests *injectivity*).
4. The three domain rules: denominator ≠ 0; even-root radicand ≥ 0; log argument > 0.
5. Finding a range — by algebraic inversion (rational) and by completing the square (quadratic).
6. Finding f⁻¹, with the domain/range swap stated: dom(f⁻¹) = ran(f), ran(f⁻¹) = dom(f).
7. Composites: (f∘g)(x) = f(g(x)), f∘g ≠ g∘f in general, and the domain of f∘g is **not** the domain of g.

## Definitions (state these exactly)

- **Relation**: any set of ordered pairs. **Function** f: X → Y: a relation in which *each* element of the domain X is assigned to *exactly one* element of the codomain Y. So a function is a relation; not every relation is a function. Many-to-one is allowed; one-to-many is not.
- **Real-valued function**: a function whose outputs are real numbers (here X ⊆ ℝ too).
- **Domain** = set of admissible inputs. **Codomain** = the declared target set Y. **Range** = f(X) = {f(x) : x ∈ X}, the outputs *actually attained*. Always range ⊆ codomain.
- **Vertical line test**: a curve is the graph of a function iff no vertical line meets it more than once (two hits = one input with two outputs).
- **One-to-one (injective)**: f(x₁) = f(x₂) ⟹ x₁ = x₂. **Onto (surjective)**: range = codomain. **Bijective**: both.
- **Horizontal line test**: f is injective iff no horizontal line meets the graph more than once. **f⁻¹ exists iff f is bijective.**
- **Composite**: (f∘g)(x) = f(g(x)); in general f∘g ≠ g∘f.

## Worked examples

**(1a) Domain of a rational function.** f(x) = (2x+3)/(x²−5x+6). Set denominator ≠ 0: x²−5x+6 = (x−2)(x−3) ≠ 0 ⟹ x ≠ 2, x ≠ 3. **Domain = ℝ \ {2, 3}.**

**(1b) Domain of a square-root function.** g(x) = √(7−2x). Radicand ≥ 0: 7−2x ≥ 0 ⟹ −2x ≥ −7 ⟹ x ≤ 7/2 (inequality reverses on dividing by −2). **Domain = (−∞, 7/2].**

**(2a) Range by algebraic inversion.** f(x) = (2x+1)/(x−3). Put y = (2x+1)/(x−3) ⟹ y(x−3) = 2x+1 ⟹ yx − 3y = 2x + 1 ⟹ yx − 2x = 1 + 3y ⟹ x(y−2) = 3y+1 ⟹ x = (3y+1)/(y−2). This is defined for every y except y = 2. **Range = ℝ \ {2}.**

**(2b) Range by completing the square.** f(x) = x² − 6x + 11 = (x² − 6x + 9) + 2 = (x−3)² + 2. Since (x−3)² ≥ 0, f(x) ≥ 2, with equality at x = 3. **Range = [2, ∞)** (codomain ℝ, so range ⊊ codomain).

**(3) Inverse function.** f(x) = (3x−5)/(x+2), domain ℝ\{−2}, range ℝ\{3}. Put y = (3x−5)/(x+2) ⟹ y(x+2) = 3x−5 ⟹ yx + 2y = 3x − 5 ⟹ yx − 3x = −5 − 2y ⟹ x(y−3) = −(2y+5) ⟹ x = (2y+5)/(3−y). Swap names: **f⁻¹(x) = (2x+5)/(3−x)**, with **dom(f⁻¹) = ℝ\{3} = ran(f)** and **ran(f⁻¹) = ℝ\{−2} = dom(f)**.

**(4) Composite: value and domain.** f(x) = 1/(x−2), g(x) = √x. (f∘g)(x) = f(√x) = 1/(√x − 2). Evaluate: (f∘g)(9) = 1/(3−2) = **1**. Domain: need x ∈ dom(g) ⟹ x ≥ 0; and g(x) ∈ dom(f) ⟹ √x ≠ 2 ⟹ x ≠ 4. **Domain = [0,4) ∪ (4,∞).** Note (g∘f)(x) = √(1/(x−2)), domain (2,∞) — so f∘g ≠ g∘f.

## Commonly confused

- **Range vs codomain** — codomain is declared; range is achieved. x²+1 on ℝ→ℝ has codomain ℝ but range [1,∞).
- **f⁻¹(x) vs 1/f(x)** — the inverse *function* vs the reciprocal. For f(x)=2x, f⁻¹(x)=x/2 but 1/f(x)=1/(2x).
- **f∘g vs g∘f** — order matters; f(g(x)) applies g first.
- **Relation vs function** — every function is a relation; a relation fails to be a function the moment one input has two outputs.
- **Domain of f∘g vs domain of g** — dom(f∘g) = {x ∈ dom(g) : g(x) ∈ dom(f)} ⊆ dom(g); it can be strictly smaller.

---

*Note on the source: several slides in this week's deck ("How to find the domain / range / inverse", "How to solve a composite function", "Graphical representation") carried their content as images, so no text was extracted from them. The treatment above reconstructs the standard 100-level material those slide titles name.*
