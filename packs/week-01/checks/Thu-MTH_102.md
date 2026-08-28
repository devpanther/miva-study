# Thursday — MTH_102 problems nightly check

*Computing domains, ranges, inverses and composites.*
*Sit cold, notes closed, 8 minutes. Score out of 6.*

**1.** The domain of f(x) = √(x+2)/(x−3) is:
a) [−2, ∞)
b) [−2, 3) ∪ (3, ∞)
c) (−2, 3) ∪ (3, ∞)
d) ℝ \ {3}

**2.** The range of f(x) = −x² + 4x − 1 is:
a) [3, ∞)
b) (−∞, 3]
c) (−∞, −3]
d) [−1, ∞)

**3.** If f(x) = (2x−1)/(x+3), then f⁻¹(x) =
a) (x+3)/(2x−1)
b) (3x+1)/(2−x)
c) (3x+1)/(x−2)
d) (1−2x)/(x+3)

**4.** If f(x) = 1/(x−1) and g(x) = x², the domain of f∘g is:
a) ℝ
b) ℝ \ {1}
c) ℝ \ {−1, 1}
d) ℝ \ {0, 1}

**5. (show your work)** Let f(x) = 3x − 2 and g(x) = √(x+1). Compute (g∘f)(5) and state the domain of g∘f.

**6. (show your work)** Find the range of f(x) = (x+2)/(x−4) by algebraic inversion, and point to the single step that reveals the excluded value.

---

## Answers

**1. b** — *Two domain rules applied together.* √(x+2) needs x + 2 ≥ 0 ⟹ x ≥ −2, and the radicand may equal 0, so −2 is included (that kills c); the denominator needs x ≠ 3 (a ignores this); the square root still restricts x below (d ignores this). Domain = [−2, 3) ∪ (3, ∞).

**2. b** — *Range by completing the square with a negative leading coefficient.* −x²+4x−1 = −(x−2)² + 3. Since −(x−2)² ≤ 0, f(x) ≤ 3, attained at x = 2. Option (a) is what you get by reading the vertex as a minimum rather than a maximum.

**3. b** — *Inverse by solving for x.* y(x+3) = 2x−1 ⟹ x(y−2) = −1 − 3y ⟹ x = (3y+1)/(2−y). Option (a) is 1/f(x), the classic inverse-versus-reciprocal error; (c) drops the sign when dividing by (y−2); (d) treats "inverse" as "negate".

**4. c** — *Domain of a composite, not domain of g.* (f∘g)(x) = 1/(x²−1), so x² − 1 ≠ 0 ⟹ x ≠ 1 **and** x ≠ −1. Option (b) is the near-universal slip of solving only x = 1; (a) uses dom(g) = ℝ and forgets that g(x) must land in dom(f).

**5.** *Concept: composite evaluation and dom(g∘f) = {x ∈ dom(f) : f(x) ∈ dom(g)}.* (g∘f)(5) = g(3·5 − 2) = g(13) = √14. Domain: need f(x) + 1 ≥ 0 ⟹ (3x − 2) + 1 ≥ 0 ⟹ 3x − 1 ≥ 0 ⟹ **x ≥ 1/3**, i.e. [1/3, ∞).

**6.** *Concept: range by algebraic inversion.* y = (x+2)/(x−4) ⟹ y(x−4) = x+2 ⟹ yx − 4y = x + 2 ⟹ yx − x = 2 + 4y ⟹ **x(y−1) = 4y + 2** ⟹ x = (4y+2)/(y−1). The revealing step is factoring out x to get the coefficient (y−1): division is impossible when y = 1, so **range = ℝ \ {1}**.
