# MTH_102 — Week 1 retention set

*Elementary Mathematics II (Calculus) · sat seven days after the Week 1 sessions.*
*Notes closed. 12 multiple choice, then 3 short answers. Answers at the bottom.*

**1.** A real-valued function assigns to each element of its domain:
a) at least one real number
b) exactly one real number
c) at most one real number
d) a real number no other input shares

**2.** Which of these sets of ordered pairs is **not** a function?
a) {(1,2), (2,2), (3,2)}
b) {(0,1), (1,2), (2,3)}
c) {(1,2), (2,3), (1,4)}
d) {(−1,5), (0,5), (1,6)}

**3.** The domain of `f(x) = 1/(x² − 4)` is:
a) all reals except `±2`
b) all reals except 2
c) all reals except 4
d) `x > 2`

**4.** The domain of `f(x) = ln(x − 3)` is:
a) `x ≥ 3`
b) `x ≠ 3`
c) all reals
d) `x > 3`

**5.** The range of `f(x) = −x² + 5` is:
a) `[5, ∞)`
b) `(−∞, 5]`
c) `(−∞, 0]`
d) `[0, 5]`

**6.** Which test tells you that a function has an inverse?
a) the horizontal line test
b) the vertical line test
c) checking that the domain is all of `ℝ`
d) checking that `f(0) = 0`

**7.** If `f(x) = 3x + 2` and `g(x) = x²`, then `(f∘g)(2)` equals:
a) 64
b) 32
c) 12
d) 14

**8.** The inverse of `f(x) = (x − 5)/3` is:
a) `(x + 5)/3`
b) `3/(x − 5)`
c) `3x + 5`
d) `3x − 5`

**9.** The range of `f(x) = 2ˣ` is:
a) `(0, ∞)`
b) `[0, ∞)`
c) `ℝ`
d) `(1, ∞)`

**10.** If `dom f = [0, 10]` and `dom g = (−∞, 4)`, then `dom(f + g)` is:
a) `(−∞, 10]`
b) `[0, 4)`
c) `[0, 10]`
d) `(−∞, 4)`

**11.** The range of `f(x) = sin x` is:
a) `ℝ`
b) `[0, 1]`
c) `(−1, 1)`
d) `[−1, 1]`

**12.** If `f(a) = f(b)` always forces `a = b`, then `f` is:
a) onto
b) even
c) one-to-one
d) a relation but not a function

---

**S1.** State the domain and the range of `f(x) = √(x − 2) + 1`, and justify each in one line.

**S2.** For `f(x) = x² + 1` and `g(x) = x − 3`, find `(f∘g)(x)` and `(g∘f)(x)` in expanded form, and say in one sentence why they are not equal.

**S3.** Set out the three-step recipe for finding the inverse of a one-to-one function, then state the relationship between the domain and range of `f` and those of `f⁻¹`.

---

## Answers

**1. b** — the definition demands existence *and* uniqueness: each input gets one output, no more, no fewer.
**2. c** — the input 1 appears twice with different outputs (2 and 4); repeated *outputs*, as in (a) and (d), are permitted.
**3. a** — `x² − 4 = 0` at `x = 2` and `x = −2`, and both must be excluded.
**4. d** — the argument of a logarithm must be strictly positive, so `x − 3 > 0`.
**5. b** — `−x² ≤ 0` for all `x`, so `f(x) ≤ 5`, with 5 attained at `x = 0`.
**6. a** — the horizontal line test detects whether any output is repeated, which is exactly the one-to-one condition for invertibility.
**7. d** — inner first: `g(2) = 4`, then `f(4) = 3(4) + 2 = 14`.
**8. c** — `y = (x − 5)/3 ⟹ 3y = x − 5 ⟹ x = 3y + 5`, so `f⁻¹(x) = 3x + 5`.
**9. a** — an exponential with positive base is always positive and takes every positive value, but never reaches 0.
**10. b** — a sum is defined only where both are, so take `dom f ∩ dom g = [0, 10] ∩ (−∞, 4) = [0, 4)`.
**11. d** — the sine oscillates between −1 and 1 inclusive, attaining both endpoints.
**12. c** — that implication *is* the definition of one-to-one (injective).

**S1.** Domain `[2, ∞)`: the square root needs `x − 2 ≥ 0`. Range `[1, ∞)`: `√(x − 2) ≥ 0`, so adding 1 gives `f(x) ≥ 1`, with 1 attained at `x = 2`.

**S2.** `(f∘g)(x) = (x − 3)² + 1 = x² − 6x + 10`; `(g∘f)(x) = (x² + 1) − 3 = x² − 2`. They differ because composition applies the inner function first, so the two orders substitute into different rules — e.g. at `x = 0` they give 10 and −2.

**S3.** (i) Write `y = f(x)`. (ii) Interchange `x` and `y`. (iii) Solve the result for `y`; that is `f⁻¹(x)`. Then `dom f⁻¹ = ran f` and `ran f⁻¹ = dom f` — inputs and outputs swap roles under inversion.
