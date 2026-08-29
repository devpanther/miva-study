# MTH_102 — Week 1

*Elementary Mathematics II (Calculus) · Week 1 (7–13 Sep 2026)*

*Source note: the extracted Week 1 slides are **thin**. The narrative summary and the definition/objective slides came through, but every technical slide ("HOW TO FIND THE DOMAIN / RANGE / INVERSE", "HOW TO SOLVE A COMPOSITE FUNCTION", "GRAPHICAL REPRESENTATION", "TASK") is a title with the actual working held in an image the extractor dropped. Everything below under Formulas and Worked examples is the **standard content for exactly those slide titles**, supplied by me — the algebra is right and is what MIVA will examine, but the specific numbers on the lecturer's slides may differ.*

## Most likely to be examined

1. **State the definition of a function** and decide, from a set of ordered pairs, an arrow diagram or a graph, whether a given relation is a function — the test being whether any *input* is repeated with two different outputs.
2. **Find the domain** of an algebraic function: exclude zeros of denominators, force the inside of an even root to be ≥ 0, force the argument of a logarithm to be > 0, then intersect the conditions.
3. **Find the range**, by completing the square (quadratics), by solving `y = f(x)` for `x` and asking which `y` are attainable (rationals), or by reading a known parent graph.
4. **Find the inverse** of a one-to-one function by swapping `x` and `y` and solving for `y`, and state `dom f⁻¹ = ran f`, `ran f⁻¹ = dom f`.
5. **Form and evaluate composites** `(f∘g)(x) = f(g(x))`, including `(f∘g)(a)` at a number, and show `f∘g ≠ g∘f` in general.
6. **Find the domain of a composite** — the two-part condition `x ∈ dom g` **and** `g(x) ∈ dom f` (the part most candidates drop).
7. **Vertical line test vs horizontal line test** — which one certifies "is a function" and which certifies "has an inverse".
8. **Operations on functions**: `f ± g`, `fg`, `f/g` with the domain rule `dom f ∩ dom g` (and `g(x) ≠ 0` for the quotient).

## Definitions

- **Relation** — any set of ordered pairs `(x, y)`. No restriction at all.
- **Function** `f : X → Y` — a relation that assigns to **each** `x ∈ X` **exactly one** `y ∈ Y`. Two clauses: *each* (nothing in `X` is left unassigned) and *exactly one* (nothing in `X` is assigned twice). Every function is a relation; not every relation is a function.
- **Real-valued function** — a function whose outputs are real numbers, i.e. `f : X → ℝ` with `X ⊆ ℝ` in this course.
- **Domain** `dom f` — the set of legal inputs `x`. **Codomain** `Y` — the target set, *declared* when the function is written. **Range** (image) `ran f = {f(x) : x ∈ dom f}` — the outputs actually achieved. Always `ran f ⊆ Y`, often strictly.
- **One-to-one (injective)** — `f(a) = f(b) ⟹ a = b`; no output is hit twice.
- **Onto (surjective)** — `ran f = Y`. **Bijective** — both.
- **Inverse function** `f⁻¹` — exists iff `f` is one-to-one (on its stated domain), and satisfies `f⁻¹(f(x)) = x` for all `x ∈ dom f` and `f(f⁻¹(y)) = y` for all `y ∈ ran f`. Its graph is the reflection of the graph of `f` in the line `y = x`.
- **Composite** `(f∘g)(x) = f(g(x))` — apply `g` first, hand its output to `f`.
- **Vertical line test** — a curve in the plane is the graph of a function of `x` iff no vertical line meets it more than once.
- **Horizontal line test** — a function is one-to-one (so invertible) iff no horizontal line meets its graph more than once.

## Formulas

| Situation | Rule | Why |
|---|---|---|
| Domain of `p(x)/q(x)` | `{x : q(x) ≠ 0}` | division by 0 undefined |
| Domain of `ⁿ√(g(x))`, `n` **even** | `g(x) ≥ 0` | no real even root of a negative |
| Domain of `ⁿ√(g(x))`, `n` **odd** | all reals (no restriction) | every real is an odd power of a real |
| Domain of `ln g(x)` / `log g(x)` | `g(x) > 0` | log undefined at 0 and below |
| Domain of `f ± g`, `fg` | `dom f ∩ dom g` | both must be defined |
| Domain of `f/g` | `dom f ∩ dom g`, `g(x) ≠ 0` | plus no zero denominator |
| Domain of `f∘g` | `{x ∈ dom g : g(x) ∈ dom f}` | `g(x)` is fed to `f` as an input |
| Inverse recipe | write `y = f(x)`, swap `x ↔ y`, solve for `y` | reverses the pairing |
| Inverse domains | `dom f⁻¹ = ran f`, `ran f⁻¹ = dom f` | inputs and outputs trade places |
| Quadratic `ax² + bx + c` | vertex form `a(x + b/2a)² + (c − b²/4a)`; range `[c − b²/4a, ∞)` if `a > 0`, `(−∞, c − b²/4a]` if `a < 0` | square term is ≥ 0 |
| Parent ranges | `x²`: `[0,∞)` · `√x`: `[0,∞)` · `1/x`: `ℝ\{0}` · `aˣ (a>0)`: `(0,∞)` · `ln x`: `ℝ` · `sin x`, `cos x`: `[−1,1]` | memorise |

## Worked examples

**1 — Domain (root + denominator together).** Find `dom f`, `f(x) = √(x + 4)/(x − 1)`.
Root: `x + 4 ≥ 0 ⟹ x ≥ −4`. Denominator: `x − 1 ≠ 0 ⟹ x ≠ 1`.
Intersect: `x ≥ −4` and `x ≠ 1`. **`dom f = [−4, 1) ∪ (1, ∞)`**

**2 — Range by completing the square.** `f(x) = x² − 6x + 11`.
`x² − 6x + 11 = (x² − 6x + 9) + 2 = (x − 3)² + 2`. Since `(x − 3)² ≥ 0` for all real `x`, `f(x) ≥ 2`, with equality at `x = 3`. **`ran f = [2, ∞)`**

**3 — Range by solving for x.** `f(x) = (2x + 1)/(x − 3)`.
Set `y = (2x + 1)/(x − 3)` → `y(x − 3) = 2x + 1` → `yx − 3y = 2x + 1` → `yx − 2x = 3y + 1` → `x(y − 2) = 3y + 1` → `x = (3y + 1)/(y − 2)`.
This has a solution `x` for every `y` except `y = 2`. **`ran f = ℝ \ {2}`** (note `dom f = ℝ \ {3}` — a different number).

**4 — Inverse of a rational function.** `f(x) = (3x − 2)/(x + 4)`.
`y = (3x − 2)/(x + 4)` → `y(x + 4) = 3x − 2` → `yx + 4y = 3x − 2` → `yx − 3x = −2 − 4y` → `x(y − 3) = −(4y + 2)` → `x = (4y + 2)/(3 − y)`.
Swap names: **`f⁻¹(x) = (4x + 2)/(3 − x)`**, with `dom f⁻¹ = ℝ \ {3} = ran f`.
*Check:* `f(2) = 4/6 = 2/3`; `f⁻¹(2/3) = (8/3 + 2)/(3 − 2/3) = (14/3)/(7/3) = 2` ✓

**5 — Composite and its domain.** `f(x) = 1/(x − 2)`, `g(x) = √x`. Find `f∘g` and its domain.
`(f∘g)(x) = f(√x) = 1/(√x − 2)`.
Condition 1, `x ∈ dom g`: `x ≥ 0`. Condition 2, `g(x) ∈ dom f`: `√x ≠ 2 ⟹ x ≠ 4`.
**`(f∘g)(x) = 1/(√x − 2)`, domain `[0, 4) ∪ (4, ∞)`**

**6 — Composite at a point, order matters.** `f(x) = 2x − 1`, `g(x) = x² + x`. Find `(g∘f)(3)`.
Inner first: `f(3) = 2(3) − 1 = 5`. Then `g(5) = 25 + 5 = 30`. **`(g∘f)(3) = 30`**
Compare `(f∘g)(3)`: `g(3) = 12`, `f(12) = 23`. **`30 ≠ 23`, so `f∘g ≠ g∘f`.**

**7 — Quotient of functions.** `f(x) = √(x − 1)`, `g(x) = x − 5`. Find `dom(f/g)`.
`dom f = [1, ∞)`, `dom g = ℝ`; intersection `[1, ∞)`. Then `g(x) ≠ 0 ⟹ x ≠ 5`.
**`dom(f/g) = [1, 5) ∪ (5, ∞)`**

## Commonly confused

| Pair | One-line discriminating test |
|---|---|
| Relation vs function | Look only at the **inputs**: if any input appears twice with different outputs, it is a relation but not a function. Repeated *outputs* are fine. |
| Range vs codomain | Ask "is this set *declared* or *computed*?" — codomain is declared in `f : X → Y`; range is what the rule actually produces. |
| Vertical vs horizontal line test | Vertical answers "**is** it a function?"; horizontal answers "does it **have an inverse**?" |
| `f⁻¹(x)` vs `1/f(x)` | Compose it with `f`: an inverse gives `x` back; a reciprocal gives `1`. `f(x)=2x` ⟹ `f⁻¹(x)=x/2`, but `1/f(x)=1/(2x)`. |
| `f∘g` vs `g∘f` | Read right to left: the function written **nearest the `x`** acts first. Test with one number — they almost never agree. |
| `(f∘g)(x)` vs `f(x)·g(x)` | Composition substitutes; multiplication multiplies. `f=x²,g=x+1`: composite `(x+1)²`, product `x²(x+1)`. |
| `dom(f∘g)` vs `dom f ∩ dom g` | After simplifying the composite, go **back** and re-impose `x ∈ dom g`; simplification can silently restore points `g` never allowed. |
| Even vs odd root restriction | `√`, `⁴√` need the inside `≥ 0`; `∛`, `⁵√` accept everything. Count the index: even ⟹ restrict. |
| Domain exclusion vs range exclusion (rationals) | Excluded `x` comes from the **denominator zero**; excluded `y` is the **horizontal asymptote** `y = a/c` for `(ax+b)/(cx+d)`. Different numbers. |
