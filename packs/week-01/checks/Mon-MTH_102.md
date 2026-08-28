# Monday — MTH_102 nightly check

*Real-valued functions: relation vs function, domain/codomain/range, vertical line test.*
*Sit cold, notes closed, 8 minutes. Score out of 6.*

**1.** The vertical line test works because:
a) a function's graph must be one unbroken curve
b) a vertical line x = a gathers every point of the graph whose input is a, so two intersections mean the single input a has been given two outputs
c) it checks that every real number appears as an input
d) it checks that no two different inputs produce the same output

**2.** A mapping diagram has domain X = {1, 2, 3, 4}, codomain Y = {5, 6, 7, 8}, with arrows 1→5, 2→5, 3→6, 4→7. Which statement is correct?
a) It is not a function, because two elements of X map to the same element of Y
b) It is not a function, because 8 is not the image of any element of X
c) It is a function with range {5, 6, 7} and codomain {5, 6, 7, 8}
d) It is a function with range {5, 6, 7, 8}

**3.** For f: ℝ → ℝ, f(x) = x², which statement is correct?
a) f is one-to-one, since each x produces exactly one value x²
b) f is onto, since x² is a real number for every real x
c) f is neither one-to-one nor onto: f(−2) = f(2) = 4, and no real x gives f(x) = −1
d) f is bijective, so f⁻¹(x) = √x is a function on ℝ

**4.** The rule y² = x (x ≥ 0, y real) does not define y as a function of x. The precise reason is:
a) x = 0 produces only the single value y = 0
b) for x = 4 the rule assigns both y = 2 and y = −2, so one input carries two outputs
c) the graph is not a straight line
d) negative values of x are excluded, so the domain is not all of ℝ

**5. (explain why)** A student writes: "The range of f: ℝ → ℝ, f(x) = x² + 1 is ℝ, because the codomain is ℝ." Explain precisely what is wrong, and state the actual range.

**6. (explain why)** The vertical line test and the horizontal line test are not two versions of the same check. Say exactly which property each one tests, and what a failure of each one tells you.

---

## Answers

**1. b** — *Mechanism of the vertical line test.* The line x = a is exactly the set of points with first coordinate a; if the graph meets it twice, the input a has two images, which the definition of a function forbids. (a) confuses functions with continuous curves; (c) confuses the test with a statement about the domain; (d) describes the horizontal line test.

**2. c** — *Range ⊆ codomain; many-to-one is legal.* A function only requires each input to have exactly one output — repeated outputs are allowed (kills a), and unused codomain elements are allowed (kills b, which is really the definition of *onto*). (d) is the standard error of treating codomain as the range.

**3. c** — *Function-ness, injectivity and surjectivity are three different conditions.* (a) mistakes the defining property of a function for injectivity; (b) mistakes well-definedness for surjectivity — being onto ℝ would require negatives to be attained; (d) assumes bijectivity in order to get an inverse.

**4. b** — *One-to-many disqualifies a relation from being a function.* The failure is a single input with two outputs, not the shape of the graph (c) or the size of the domain (d) — a function's domain need not be all of ℝ.

**5.** *Concept: range ⊆ codomain, usually properly.* The codomain is the declared target set, chosen in advance; the range is the set of values f actually attains. Since x² ≥ 0 for all real x, f(x) ≥ 1, so the **range is [1, ∞)**, a proper subset of the codomain ℝ.

**6.** *Concept: vertical test = function-ness; horizontal test = injectivity.* The vertical line test asks whether the curve is a function at all — failure means some input has two outputs. The horizontal line test asks whether an existing function is one-to-one — failure means two different inputs share an output, so f is not invertible on that domain.
