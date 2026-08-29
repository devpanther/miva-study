# MTH_102 — Week 2

*Elementary Mathematics II (Calculus) · Week 2 (14–20 Sep 2026)*

*Note on the source: the slide text extracted cleanly, but the deck is a survey of function **types** with no worked algebra, and every graph is an image that the extractor dropped. I have kept all the slides' definitions and filled out the standard technique (composition, domains, completing the square, log/exponential solving, absolute-value cases, end behaviour) so the week is examinable. One slide claim is mathematically wrong and is flagged in "Commonly confused": for f(x) = ax² + bx + c, c is **not** the y-coordinate of the vertex and b does **not** simply "shift the parabola horizontally".*

## Most likely to be examined

1. **Definition of a function** — a rule assigning to *every* element of the domain A *exactly one* element of the codomain B. Both clauses (totality and uniqueness) must be quoted.
2. **Vertical line test** — if any vertical line meets the curve more than once the graph is a relation, not a function; if every vertical line meets it at most once, it is a function.
3. **Injective / surjective / bijective**, and composition (f ∘ g)(x) = f(g(x)) — including that f ∘ g ≠ g ∘ f in general.
4. **Identify a function type from its equation** and read off its parameters: m and b for a line, a, b, c for a quadratic, base b for exponential/log, degree n and leading coefficient aₙ for a polynomial.
5. **Quadratics**: complete the square, get vertex (−b/2a, f(−b/2a)), direction from sign of a, roots from the discriminant.
6. **Exponential ↔ logarithm as inverses**: b^y = x ⇔ y = log_b x, with the restrictions b > 0, b ≠ 1, x > 0; solving equations of the form A·b^x = C.
7. **Piecewise and absolute-value functions**: choosing the branch, evaluating at boundary points, solving |ax + b| = c by two cases.
8. **Polynomial degree and leading coefficient** and the end behaviour they force.

## Definitions

- **Relation**: any set of ordered pairs (x, y). **Function** f: A → B: a relation in which every x ∈ A appears in exactly one pair. A = **domain**, B = **codomain**, {f(x) : x ∈ A} = **range** (range ⊆ codomain).
- **Injective (one-to-one)**: f(x₁) = f(x₂) ⇒ x₁ = x₂. No element of B is hit twice. Detected by the *horizontal* line test.
- **Surjective (onto)**: every b ∈ B equals f(x) for some x ∈ A, i.e. range = codomain.
- **Bijective**: injective and surjective. Exactly the functions with an inverse f⁻¹: B → A.
- **Composition**: (f ∘ g)(x) = f(g(x)); g runs first. Defined only where g(x) lies in the domain of f.
- **Linear function**: f(x) = mx + b; m = slope, b = y-intercept. Graph is a straight line.
- **Quadratic function**: f(x) = ax² + bx + c with a ≠ 0; graph is a parabola, opening up if a > 0, down if a < 0.
- **Exponential function**: f(x) = a·b^x, base b > 0, b ≠ 1; growth if b > 1, decay if 0 < b < 1.
- **Logarithmic function**: f(x) = log_b x, the inverse of b^x; b > 0, b ≠ 1, argument x > 0.
- **Absolute value**: |x| = x if x ≥ 0, −x if x < 0. It is the distance of x from 0, so |x| ≥ 0 always.
- **Piecewise function**: several formulas on disjoint intervals whose union is the domain.
- **Polynomial**: f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀, n a non-negative integer = **degree**, aₙ ≠ 0 = **leading coefficient**.
- **Periodic**: f(x + P) = f(x) for all x; smallest such P > 0 is the **period**.

## Formulas

| Object | Formula | Symbols |
|---|---|---|
| Slope from two points | m = (y₂ − y₁)/(x₂ − x₁) | (x₁,y₁), (x₂,y₂) on the line |
| Point–slope line | y − y₁ = m(x − x₁) | m slope |
| Vertex of parabola | x_v = −b/2a, y_v = f(x_v) | from f(x)=ax²+bx+c |
| Completed square | a(x − h)² + k, h = −b/2a, k = c − b²/4a | vertex (h, k) |
| Roots | x = (−b ± √(b² − 4ac))/2a | Δ = b² − 4ac: Δ>0 two roots, Δ=0 one, Δ<0 none |
| y-intercept | f(0) = c | any function: set x = 0 |
| Exponential ↔ log | b^y = x ⇔ y = log_b x | b > 0, b ≠ 1, x > 0 |
| Log laws | log(MN)=log M+log N; log(M/N)=log M−log N; log(Mᵏ)=k log M | M, N > 0 |
| Change of base | log_b x = ln x / ln b | any convenient base |
| Compound interest | A(t) = P(1 + r/n)^{nt} | P principal, r rate, n periods/yr |
| Continuous growth/decay | P(t) = P₀e^{rt}; N(t) = N₀e^{−λt} | r growth rate, λ decay constant |
| Trig ratios | sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj | csc, sec, cot are their reciprocals |
| Periods | sin, cos: 2π (range [−1,1]); tan: π | for sin(kx): period 2π/k |
| End behaviour | sign of aₙxⁿ decides both tails | n even: tails agree; n odd: tails oppose |

## Worked examples

**1. Composition.** f(x) = 2x + 3, g(x) = x² − 1. Find (f ∘ g)(2) and (g ∘ f)(2).
(f ∘ g)(2) = f(g(2)); g(2) = 2² − 1 = 3; f(3) = 2(3) + 3 = 9.
(g ∘ f)(2) = g(f(2)); f(2) = 2(2) + 3 = 7; g(7) = 7² − 1 = 48.
**(f ∘ g)(2) = 9, (g ∘ f)(2) = 48 — composition is not commutative.**

**2. Linear function from two points.** Line through (−2, 5) and (4, −7).
m = (−7 − 5)/(4 − (−2)) = −12/6 = −2.
y − 5 = −2(x − (−2)) = −2(x + 2) = −2x − 4, so y = −2x + 1.
**f(x) = −2x + 1; slope −2, y-intercept 1.**

**3. Quadratic — completing the square.** f(x) = 2x² − 12x + 7.
= 2(x² − 6x) + 7 = 2(x² − 6x + 9 − 9) + 7 = 2(x − 3)² − 18 + 7 = 2(x − 3)² − 11.
a = 2 > 0, so it opens upward; y-intercept f(0) = 7; Δ = 144 − 56 = 88 > 0, two real roots.
**Vertex (3, −11), minimum value −11, axis of symmetry x = 3.**

**4. Exponential equation.** Solve 3·2^x = 96.
2^x = 96/3 = 32. Since 32 = 2⁵, **x = 5.** (General route: x = log₂32 = ln32/ln2 = 5.)

**5. Logarithmic equation.** Solve log₁₀x + log₁₀(x − 3) = 1.
Domain first: x > 0 and x − 3 > 0 ⇒ x > 3.
log₁₀[x(x − 3)] = 1 ⇒ x(x − 3) = 10¹ = 10 ⇒ x² − 3x − 10 = 0 ⇒ (x − 5)(x + 2) = 0 ⇒ x = 5 or x = −2.
x = −2 fails x > 3 and is rejected. **x = 5.**

**6. Absolute value equation and inequality.** Solve |2x − 5| = 7, then |2x − 5| < 7.
Case 1: 2x − 5 = 7 ⇒ 2x = 12 ⇒ x = 6. Case 2: 2x − 5 = −7 ⇒ 2x = −2 ⇒ x = −1.
Inequality: −7 < 2x − 5 < 7 ⇒ −2 < 2x < 12 ⇒ −1 < x < 6.
**x = 6 or x = −1; and |2x − 5| < 7 ⇔ −1 < x < 6.**

**7. Piecewise evaluation.** f(x) = 3x + 4 if x ≤ 1; x² if x > 1. Find f(1), f(3), f(−2).
x = 1 satisfies x ≤ 1 ⇒ first branch: f(1) = 3(1) + 4 = 7.
x = 3 satisfies x > 1 ⇒ second branch: f(3) = 9. x = −2 ⇒ first branch: f(−2) = −2.
**f(1) = 7, f(3) = 9, f(−2) = −2** (the branches need not agree at x = 1; the jump from 7 to 1⁺ is legal).

**8. Polynomial degree and end behaviour.** f(x) = −x³ + 3x² − 2.
Degree n = 3 (odd), leading coefficient aₙ = −1 (negative). For large |x| the term −x³ dominates.
x → +∞: −x³ → −∞. x → −∞: −x³ → +∞. y-intercept f(0) = −2.
**Degree 3, leading coefficient −1; falls to −∞ on the right, rises to +∞ on the left.**

## Commonly confused

- **c vs the vertex y-coordinate (the slide's error).** c = f(0) is the *y-intercept*. Test: put x = 0 — you get c, and the vertex sits at x = −b/2a, which is 0 only when b = 0.
- **Vertical vs horizontal line test.** Vertical = "is it a function?" (uniqueness of output). Horizontal = "is it injective?" (uniqueness of input). Test: ask whether you are checking outputs per input or inputs per output.
- **Injective vs surjective.** Injective: no B is hit twice. Surjective: no B is missed. Test: is the failure a *collision* or a *gap*?
- **Range vs codomain.** Codomain is declared; range is achieved. Test: they are equal exactly when f is surjective.
- **f ∘ g vs g ∘ f.** Test: read the inner function first — in f(g(x)), g acts on x.
- **f⁻¹(x) vs 1/f(x).** Inverse undoes f; reciprocal divides. Test: does f⁻¹(f(x)) = x hold? For 1/f it does not.
- **Exponential x^b vs b^x.** Power function has the variable in the base; exponential has it in the exponent. Test: where is x sitting?
- **log(M + N) vs log M + log N.** Only the *product* splits: log M + log N = log(MN). Test: substitute M = N = 1 — the false rule gives 0 = 0 but M=N=10 gives log 20 ≠ 2.
- **|x| = x vs |x| = ±x.** |x| is a single non-negative number; the *two cases* apply to the expression inside, not to the output. Test: is x negative? Then |x| = −x, which is positive.
- **|x| = k with k < 0.** No solution, because a distance cannot be negative. Test: squaring both sides destroys this and manufactures false roots.
- **Piecewise ≠ continuous.** Branches need not meet at the boundary. Test: the only requirement is that each input falls in exactly one branch.
