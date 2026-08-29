# Monday — MTH_102 nightly check

*Improper integrals as concepts: what the limit definition actually asserts, what separates a Type I from a Type II integral, the two p-tests and why they point in opposite directions, the exact hypotheses of the Comparison Test and the Limit Comparison Test, why non-negativity is the hypothesis that makes the comparison argument work, which orderings of f and g carry no information at all, and how the shape of an integrand decides whether it is evaluated or merely tested.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** To say that ∫ₐ^∞ f(x)dx **converges** means precisely that:
a) f(x) → 0 as x → ∞
b) ∫ₐ^t f(x)dx is a finite number for every finite t > a
c) lim_{t→∞} ∫ₐ^t f(x)dx exists and is finite
d) f is bounded on [a, ∞), so the region under the curve has finite height

**2.** Which of these is an improper integral of **Type II**?
a) ∫₁^∞ dx/x²
b) ∫₀¹ dx/(x − 2)
c) ∫₁³ dx/√(x − 1)
d) ∫_{−∞}⁰ eˣ dx

**3.** Exactly one of the following converges. Which?
a) ∫₁^∞ dx/√x
b) ∫₀¹ dx/√x
c) ∫₁^∞ dx/x
d) ∫₀¹ dx/x²

**4.** On [1, ∞) you have verified that 0 ≤ f(x) ≤ g(x), and you know ∫₁^∞ f(x)dx **converges**. What follows about ∫₁^∞ g(x)dx?
a) it converges, to a value at least as large
b) it diverges, since g is the larger function
c) it converges, but the comparison test gives no bound on its value
d) nothing at all follows

**5.** The Comparison Test requires 0 ≤ f(x) ≤ g(x), not merely f(x) ≤ g(x). The reason the **lower** bound is needed is that:
a) an integral of a negative function is undefined
b) f ≥ 0 makes F(t) = ∫ₐ^t f increasing in t, so bounding it above forces it to have a finite limit
c) without it the inequality f ≤ g could reverse for large x
d) without it the answer would be a principal value rather than an integral

**6.** For ∫₀³ dx/(x − 1)² the correct first step is to:
a) write [−1/(x − 1)]₀³ and evaluate, obtaining −3/2
b) note that the interval is finite and the integral therefore proper
c) split the integral at x = 1 and take a one-sided limit into x = 1 from each side
d) compare the integrand with 1/x² on [0, 3]

**7.** f and g are positive and continuous on [1, ∞), lim_{x→∞} f(x)/g(x) = **0**, and ∫₁^∞ g(x)dx converges. Then ∫₁^∞ f(x)dx:
a) converges, because f is eventually smaller than g
b) diverges, because a ratio tending to 0 means f is negligible and the test does not apply
c) may converge or diverge — the Limit Comparison Test needs 0 < L < ∞, so nothing can be said
d) converges only if in addition f(x) → 0 as x → ∞

**8.** To decide ∫₂^∞ (3x + 5)/(x³ + x) dx the natural comparison function is:
a) 1/x, because the numerator has degree 1
b) 1/x², because for large x the integrand behaves like 3x/x³
c) 1/x³, because the denominator has degree 3
d) 1/x⁴, because a comparison proving convergence needs a **smaller** function

**9. (explain why)** ∫₁^∞ dx/xᵖ converges exactly when p > 1, while ∫₀¹ dx/xᵖ converges exactly when p < 1. Derive both statements from the same antiderivative and explain in words why the condition reverses.

**10. (explain why)** A student writes: "1/(x ln x) < 1/x on [2, ∞), and ∫₂^∞ dx/x diverges, therefore ∫₂^∞ dx/(x ln x) diverges." State exactly which hypothesis of the Comparison Test this argument violates, and give two integrands both smaller than 1/x on [2, ∞) that behave differently, to show the reasoning can never be repaired.

**11. (explain why)** Explain why ∫_{−∞}^∞ f(x)dx must be split at some point c and both halves required to converge separately, and why lim_{t→∞}∫_{−t}^{t} 2x/(1 + x²)dx = 0 is **not** an evaluation of ∫_{−∞}^∞ 2x/(1 + x²)dx.

**12. (explain why)** For each of ∫₁^∞ dx/(x² + 3), ∫₀¹ dx/(1 − x) and ∫₁^∞ (sin²x)/x² dx: say whether it is Type I, Type II or both, and say whether you would settle it by direct evaluation or by comparison, naming the feature of the integrand that decides. Do not evaluate anything.

---

## Answers

**1. c** — *An improper integral is defined as a limit; convergence is the assertion that this limit exists and is finite.* (a) is a condition on the integrand, not on the integral, and it is neither sufficient (1/x → 0 yet ∫₁^∞ dx/x diverges) nor, for integrals, even necessary; (b) is true for **every** improper integral of a continuous function on [a, ∞) — each truncation is an ordinary Riemann integral — so it says nothing and cannot be the definition; (d) confuses a bounded integrand with a finite integral: 1/x is bounded on [1, ∞) and its integral is infinite.

**2. c** — *Type II means the integrand becomes infinite on a finite interval.* 1/√(x − 1) → ∞ as x → 1⁺, and the interval [1, 3] is finite, so it is Type II with the singularity at the lower endpoint. (a) and (d) have infinite intervals and continuous integrands, so both are Type I; (b) is the trap: x − 2 vanishes at x = 2, but 2 is **outside** [0, 1], so 1/(x − 2) is continuous on the whole interval and the integral is entirely proper. Reading the denominator without checking whether its zero lies in the interval is the standard misclassification.

**3. b** — *The p-test near a singularity is the mirror image of the p-test at infinity.* ∫₀¹ dx/x^{1/2} has p = 1/2 < 1, so it converges, to 1/(1 − p) = 2. (a) has p = 1/2 at **infinity**, where convergence needs p > 1, so it diverges; (c) is p = 1, the boundary case, divergent at either end; (d) has p = 2 near **zero**, where large p is fatal — the integrand blows up too fast, and ∫₀¹ dx/x² diverges even though ∫₁^∞ dx/x² converges. Options (a) and (d) are exactly the same two exponents applied at the wrong end.

**4. d** — *Smaller than convergent proves convergence; convergent below proves nothing above.* The test runs in one direction only: bounding a function **above** by something integrable is informative, bounding it **below** is not. Both outcomes are genuinely possible: 1/x² ≤ 1/x² gives a convergent g, while 1/x² ≤ 1/x gives a divergent g, with the same convergent f. (a) is the false converse; (b) mistakes "larger" for "large enough to diverge" — size at a point says nothing about the tail's total; (c) hides the same false converse inside a caveat about values.

**5. b** — *Non-negativity is what converts "bounded above" into "convergent".* Because f ≥ 0, F(t) = ∫ₐ^t f never decreases as t grows; because f ≤ g, F(t) ≤ ∫ₐ^∞ g for all t. An increasing function bounded above must approach a finite limit — that is the entire proof, and it collapses without monotonicity. (a) is false: ∫₁^∞ (−1/x²)dx = −1 is perfectly well defined; (c) is not a consequence of dropping f ≥ 0 — the inequality is assumed to hold throughout, sign or no sign; (d) confuses this test with the separate issue of splitting a doubly infinite integral. For sign-changing f the repair is to compare **|f|** with g and invoke absolute convergence.

**6. c** — *An infinite discontinuity strictly inside the interval makes the integral improper of Type II there, and the Fundamental Theorem does not apply across it.* The integrand blows up at x = 1 ∈ (0, 3), so ∫₀³ = lim_{t→1⁻}∫₀^t + lim_{s→1⁺}∫_s³, and here both limits are +∞, so it diverges. (a) applies the FTC to an antiderivative that is not continuous on [0, 3] and returns **−3/2** — a negative number for a strictly positive integrand, which is the built-in absurdity that should catch it; (b) checks only the interval and ignores the integrand, which is precisely the definition of Type II; (d) is a legitimate-sounding move that is useless: the trouble is at x = 1, not at ∞, and 1/x² is itself unbounded at 0.

**7. a** — *L = 0 gives a one-way conclusion, and it is the useful way here.* f/g → 0 means that eventually f(x) < g(x) (take ε = 1 in the definition of the limit), so f is eventually dominated by an integrable function and the ordinary Comparison Test applies: ∫f converges. (c) is the most attractive wrong answer — it correctly recalls that the **two-way** conclusion needs 0 < L < ∞, but forgets that the degenerate cases still give one implication each (L = 0: g converges ⟹ f converges; L = ∞: g diverges ⟹ f diverges); (b) treats "negligible" as a reason to abandon the test, when negligibility is exactly what makes it work; (d) adds an irrelevant condition — f → 0 is neither needed nor sufficient.

**8. b** — *Comparison is decided by the order of growth, obtained by keeping only leading terms.* For large x, (3x + 5)/(x³ + x) ≈ 3x/x³ = 3/x², so the comparison function is 1/x² (p = 2 > 1, convergent), and the constant 3 is irrelevant. (a) reads only the numerator; (c) reads only the denominator — both ignore that it is the **difference** of degrees, 3 − 1 = 2, that fixes the exponent; (d) inverts the logic of the test: to prove convergence you must bound the integrand **above** by something convergent, so a smaller comparison function is exactly the useless direction, and in any case ∫₂^∞dx/x⁴ being convergent tells you nothing about a larger integrand.

**9.** *Concept: both p-tests come from the single antiderivative x^{1−p}/(1 − p); which end is dangerous depends on whether the exponent 1 − p drives that power to 0 or to ∞.* For p ≠ 1, ∫ dx/xᵖ = x^{1−p}/(1 − p). **At infinity:** ∫₁^t = (t^{1−p} − 1)/(1 − p). If p > 1 then 1 − p < 0 and t^{1−p} → 0, so the limit is 1/(p − 1), finite — convergent. If p < 1 then 1 − p > 0 and t^{1−p} → ∞ — divergent. **At zero:** ∫_t¹ = (1 − t^{1−p})/(1 − p). If p < 1 then 1 − p > 0 and t^{1−p} → 0, giving 1/(1 − p) — convergent. If p > 1 then t^{1−p} → ∞ — divergent. The case p = 1 is handled separately by ln, and diverges at both ends. In words: at infinity the enemy is a **tail that decays too slowly**, so you need the integrand to shrink fast, i.e. **large p**; near zero the enemy is a **spike that grows too fast**, so you need the integrand to blow up gently, i.e. **small p**. The same exponent that makes 1/x² safe far away (it decays quickly) makes it fatal near 0 (it blows up quickly). p = 1 is the exact dividing line and fails on both sides.

**10.** *Concept: the Comparison Test concludes only from "smaller than convergent" and "bigger than divergent"; being smaller than a divergent function is one of the two combinations that carry no information.* The argument uses f ≤ g with ∫g divergent and concludes that ∫f diverges — but the divergence half of the test runs the other way: it needs the **smaller** function to diverge in order to conclude that the larger one does. Here 1/(x ln x) is the smaller function and 1/x the larger, so the hypothesis "∫ (smaller) diverges" was never established; the argument establishes nothing. That it can never be repaired is shown by two integrands both lying under 1/x on [2, ∞) with opposite behaviour: ∫₂^∞ dx/(x ln x) = lim_{t→∞}[ln ln x]₂^t = ∞, **divergent**, while ∫₂^∞ dx/(x(ln x)²) = lim_{t→∞}[−1/ln x]₂^t = 1/ln 2, **convergent**. Since the same hypothesis ("smaller than the divergent 1/x") holds for both, no valid theorem can draw a conclusion from it. Incidentally the student's *answer* for 1/(x ln x) is correct — it does diverge — but the reasoning is invalid, and in an examination the reasoning is what is marked.

**11.** *Concept: a doubly infinite integral is defined as the sum of two independent limits, and a single symmetric limit is a different object (the Cauchy principal value).* By definition ∫_{−∞}^∞ f = ∫_{−∞}^c f + ∫_c^∞ f for any convenient c, with **each** piece required to converge on its own; the choice of c is immaterial because moving it changes each piece by the same finite amount ∫_c^{c′} f. The reason both halves are required is that ∫_{−∞}^∞ must not depend on how the two infinities are approached — if one half is +∞ and the other −∞, different rates of approach give different answers, so no single value can be assigned. For 2x/(1 + x²): ∫₀^t 2x/(1 + x²)dx = ln(1 + t²) → ∞, so the right half diverges and therefore the whole integral **diverges**, full stop. The symmetric limit lim_{t→∞}∫_{−t}^t is 0 only because the odd integrand makes the two halves cancel **at the same rate**; take ∫_{−t}^{2t} instead and you get ln(1 + 4t²) − ln(1 + t²) → ln 4. That the answer depends on the route is exactly why the symmetric value is called the principal value and is not accepted as the integral.

**12.** *Concept: type is decided by where the trouble is (infinite interval, infinite integrand, or both), and method is decided by whether an antiderivative is available.* **∫₁^∞ dx/(x² + 3):** Type I only — the interval is infinite and x² + 3 never vanishes, so the integrand is continuous on [1, ∞). **Direct evaluation**, because a standard antiderivative exists, (1/√3)arctan(x/√3). **∫₀¹ dx/(1 − x):** Type II only — the interval is finite, but the denominator vanishes at the upper endpoint x = 1, so the integrand is unbounded there. **Direct evaluation** by a one-sided limit, since −ln|1 − x| is available (it diverges). **∫₁^∞ (sin²x)/x² dx:** Type I — infinite interval, and the integrand is continuous everywhere on it (there is no singularity, sin²x being bounded). **Comparison**, because sin²x/x² has no elementary antiderivative; the decisive feature is 0 ≤ sin²x ≤ 1, so 0 ≤ sin²x/x² ≤ 1/x², and ∫₁^∞ dx/x² converges. Note that comparison here yields **convergence only**, not the value.
