# Monday — MTH_102 nightly check

*This session took Week 2's function material conceptually rather than computationally: what a function actually is as a rule from a domain to a codomain, and why the definition insists that every input gets exactly one output; why the vertical line test detects a failure of that clause while the horizontal line test detects a different one; what the injective, surjective and bijective conditions each rule out, and why only a bijection can be inverted; why the logarithm carries the restrictions b > 0, b ≠ 1 and x > 0, and why exponential and logarithmic functions swap domain and range; why a piecewise function's conditions must not overlap and why its branches are not required to agree at a boundary; why the absolute value is defined in two cases rather than by "dropping the minus sign"; and why the degree and leading coefficient alone govern a polynomial's behaviour far from the origin. Almost no arithmetic — the questions ask what each object is and what would go wrong without each clause.*

*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The definition of a function f: A → B says every element of A is assigned **exactly one** element of B. If "exactly one" were weakened to "at least one", what specifically breaks?
a) The domain would no longer be the whole of A.
b) The symbol f(x) would no longer name a definite value.
c) The range could become larger than the codomain.
d) The function could no longer be surjective.

**2.** The vertical line test detects the failure of which clause?
a) That the domain is an unbroken interval.
b) That every element of the codomain is used.
c) That no two inputs share an output.
d) That each input has only one output.

**3.** A map f: A → B is described as surjective but not injective. Which must be true?
a) Every element of B is reached, and some element of B twice.
b) Every element of A is reached, and some element of A twice.
c) The range is a proper subset of the codomain of f.
d) f has a well-defined inverse on the whole of B.

**4.** f: A → B is surjective but fails to be injective. What exactly goes wrong when you try to define f⁻¹?
a) f⁻¹ would have a domain larger than B.
b) f⁻¹ would be undefined at some elements of B.
c) Some element of B would have to be sent to two different elements of A.
d) f⁻¹ ∘ f would be the identity on B instead of on A.

**5.** log_b(x) is defined only for b > 0 **and b ≠ 1**. What is the reason for excluding b = 1?
a) A power of the number 1 has no defined value at all.
b) log₁(x) would come out negative whenever x is below 1.
c) The curve y = 1^x would fail to cross the y-axis anywhere.
d) Every power of 1 equals 1, so nothing else is reachable.

**6.** In f(x) = 2x + 1 for x ≤ 0 and f(x) = x² − 3 for x > 0, why is the second condition written x > 0 rather than x ≥ 0?
a) Because x = 0 is already assigned by the first branch.
b) Because the expression x² − 3 has no defined value when x is 0.
c) Because the two branches are required to agree in value at x = 0.
d) Because the graph of a function must be unbroken at a boundary.

**7.** Why is |x| defined by two cases (x if x ≥ 0, −x if x < 0) instead of the instruction "remove the minus sign"?
a) Because −x is a positive number whatever the value of x.
b) Because the graph of |x| has to be smooth at the origin.
c) Because which case applies depends on x, not on a visible sign.
d) Because absolute value is defined for real inputs only.

**8.** For a polynomial of degree n with leading coefficient aₙ, why do those two numbers alone decide the shape of the graph far from the origin?
a) Because the lower-degree terms become zero once |x| is large.
b) Because every other term, divided by aₙxⁿ, tends to 0 as |x| grows.
c) Because polynomials of equal degree have identical graphs.
d) Because a₀ is only the y-intercept and never affects shape.

**9. (explain why)** Every function is a relation, but not every relation is a function. Explain the difference using the slide's set language — "A has many B" versus "B can have many A" — and say which of those two situations is allowed.

**10. (explain why)** The vertical line test and the horizontal line test look almost identical but answer different questions. Explain what property each one is testing and why a graph can pass one and fail the other.

**11. (explain why)** Explain why f(x) = b^x and g(x) = log_b(x) are called inverses, and why the domain of one is the range of the other. Use this to explain why log_b(x) is undefined for x ≤ 0.

**12. (explain why)** A slide states that in f(x) = ax² + bx + c, "c is the y-coordinate of the vertex". Explain why this is false as written, what c genuinely is, and the one special case in which the slide's claim happens to be true.
