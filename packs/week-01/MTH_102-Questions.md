# MTH_102 — Week 1 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 2, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** A relation f from X to Y is a function precisely when:
a) every element of Y is used at least once
b) each element of X is assigned to exactly one element of Y
c) no two elements of X share an image
d) the graph is a smooth unbroken curve

**2.** For f: ℝ → ℝ, f(x) = x² + 3, which is true?
a) range = codomain = ℝ
b) range = [3, ∞), codomain = ℝ
c) range = ℝ, codomain = [3, ∞)
d) range and codomain are always identical by definition

**3.** The vertical line test fails for a curve. This tells you:
a) the curve is not one-to-one
b) the curve has no inverse
c) the curve is not the graph of a function
d) the domain is not all of ℝ

**4.** Domain of f(x) = (x−1)/(x²−9):
a) ℝ   b) ℝ \ {3}   c) ℝ \ {−3, 3}   d) ℝ \ {1, 3}

**5.** Domain of g(x) = √(5−2x):
a) x ≥ 5/2   b) x ≤ 5/2   c) x > 5/2   d) x ≤ −5/2

**6.** Domain of h(x) = log(x−4):
a) x ≥ 4   b) x > 4   c) x ≠ 4   d) x > 0

**7.** f is one-to-one (injective) means:
a) each input has exactly one output
b) f(x₁) = f(x₂) implies x₁ = x₂
c) the range equals the codomain
d) f is increasing everywhere

**8.** f⁻¹ exists (as a function on the whole range) if and only if f is:
a) continuous   b) onto only   c) one-to-one only   d) bijective

**9.** f(x) = 2x + 3, g(x) = x². Then (f∘g)(−2) =
a) 1   b) 11   c) −1   d) 49

**10.** With the same f and g, (g∘f)(−2) =
a) 11   b) 1   c) −1   d) 121

**11.** If f(x) = (x−7)/3, then f⁻¹(x) =
a) 3/(x−7)   b) 3x + 7   c) (x+7)/3   d) 3x − 7

**12.** Range of f(x) = x² + 4x + 9:
a) [9, ∞)   b) [5, ∞)   c) (−∞, 5]   d) ℝ

## Section B — Short answer (3)

**13.** State the domain of h(x) = √(x+3)/(x−2), giving the rule that produces each restriction.

**14.** Let f(x) = 5/(x−1) and g(x) = x + 4. Find (f∘g)(x), evaluate (f∘g)(0), and state the domain of f∘g.

**15.** Define *bijective*. Hence explain why f: ℝ → ℝ, f(x) = x², has no inverse function.

## Answer key

1. **b** — *Definition of a function*: uniqueness of output for each input.
2. **b** — *Range ⊆ codomain*: x² ≥ 0 so outputs start at 3; the codomain is still the declared ℝ.
3. **c** — *Vertical line test*: two intersections mean one input with two outputs.
4. **c** — *Domain of a rational function*: x²−9 = (x−3)(x+3) = 0 at x = ±3.
5. **b** — *Even-root rule*: 5−2x ≥ 0 ⟹ x ≤ 5/2.
6. **b** — *Logarithm rule*: argument strictly positive, x−4 > 0.
7. **b** — *Injectivity*: distinct inputs give distinct outputs; (a) is just function-ness.
8. **d** — *Invertibility*: f⁻¹ exists iff f is bijective.
9. **b** — *Composite order*: g first, g(−2) = 4, then f(4) = 11.
10. **b** — *f∘g ≠ g∘f*: f(−2) = −1, then g(−1) = 1.
11. **b** — *Finding an inverse*: y = (x−7)/3 ⟹ 3y = x − 7 ⟹ x = 3y + 7.
12. **b** — *Range by completing the square*: x²+4x+9 = (x+2)² + 5 ≥ 5.
13. **x ≥ −3 and x ≠ 2, i.e. [−3, 2) ∪ (2, ∞)** — *Two domain rules combined*: radicand ≥ 0 gives x + 3 ≥ 0; denominator ≠ 0 gives x ≠ 2.
14. **(f∘g)(x) = 5/(x+3); (f∘g)(0) = 5/3; domain = ℝ \ {−3}** — *Composite construction and its domain*: g(x) must lie in dom(f), so x + 4 ≠ 1.
15. **Bijective = injective and surjective.** f(x) = x² is not injective (f(−3) = f(3) = 9) and not surjective onto ℝ (no real x gives −4), so no inverse function exists — *f⁻¹ exists iff f is bijective*.
