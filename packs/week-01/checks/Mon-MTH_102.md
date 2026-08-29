# Monday — MTH_102 nightly check

*This session took Week 1's material — real-valued functions, domain, codomain, range, the vertical and horizontal line tests, inverses and composites — and treated it conceptually rather than computationally. It asked what each object actually is: what a function is as a set of ordered pairs, why the definition insists on "each input, exactly one output", and what breaks in the notation `f(x)` if that clause is dropped. It looked at why domain restrictions arise from the arithmetic itself (no real even root of a negative, no division by zero, no log of a non-positive) rather than being conventions. It separated range from codomain — computed versus declared — and separated the vertical line test from the horizontal line test by the question each answers. It closed on why one-to-one is precisely the condition for an inverse to exist, why the domain of a composite carries a two-part clause, and why the domain and range trade places under inversion. Almost no arithmetic.*

*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** A relation pairs the input 2 with both 5 and 7. Dropping the "exactly one output" clause from the definition of a function would principally cost us:
a) the ability to draw a graph
b) the existence of a domain
c) the meaning of the symbol `f(2)`
d) the ability to list ordered pairs

**2.** For `f : ℝ → ℝ`, `f(x) = x²`, the codomain is `ℝ` but the range is `[0, ∞)`. The distinction matters because:
a) the codomain is declared, the range is computed
b) the range is always smaller than the domain
c) the codomain lists the inputs
d) the range is the set of permitted `x`-values

**3.** A curve is met twice by some vertical line. This disqualifies it as the graph of a function because:
a) the curve is not continuous at that point
b) the curve fails to be one-to-one there
c) the domain is empty at that `x`
d) those two points share an `x` but differ in `y`

**4.** `f(x) = ∛(x − 5)` has domain all of `ℝ`, while `g(x) = √(x − 5)` has domain `x ≥ 5`. The reason is:
a) the cube root grows more slowly than the square root
b) no real number squares to a negative, but every real is some real's cube
c) the cube root is one-to-one and the square root is not
d) the cube root's graph passes the vertical line test

**5.** The definition of `f∘g` carries the clause "`x` must lie in `dom g` **and** `g(x)` must lie in `dom f`". The second half is there because:
a) `g(x)` is handed to `f` as an input, so it must be legal for `f`
b) `f` and `g` are required to share a domain
c) composition is not commutative
d) `f∘g` is required to be one-to-one

**6.** Requiring `f` to be one-to-one before `f⁻¹` exists is necessary because:
a) a many-to-one `f` has no graph to reflect
b) `f⁻¹` must be given by the same rule as `f`
c) reflecting a curve in `y = x` destroys continuity
d) reversing a many-to-one pairing gives some input two outputs

**7.** If `f` is invertible, the domain of `f⁻¹` is:
a) the domain of `f`
b) the range of `f`
c) the whole of `ℝ`
d) the codomain of `f`

**8.** Which pairing is still a legitimate function?
a) inputs 1 and 2 are each sent to both 3 and 4
b) input 1 is sent to 3 and also to 5
c) inputs 1 and 2 are both sent to 3
d) input 1 is left unassigned

**9. (explain why)** The vertical line test and the horizontal line test look like the same trick turned sideways, but they answer two different questions. State the question each one answers, and say why passing the first tells you nothing about the second.

**10. (explain why)** `f(x) = x²` on domain `ℝ` has no inverse, but the very same formula on domain `[0, ∞)` does. The rule never changed. Explain why the domain, and not the formula, is what decides.

**11. (explain why)** Explain why a function's range can be smaller than its codomain but never larger — and why writing `f : ℝ → ℝ` is not a claim that every real number is an output.

**12. (explain why)** `f⁻¹(x)` and `1/f(x)` are different objects. Say what each one does, and give the one-line check that separates them for any particular `f`.
