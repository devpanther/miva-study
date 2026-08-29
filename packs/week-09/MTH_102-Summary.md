# MTH_102 — Week 9 Summary

*Elementary Mathematics II (Calculus) · Week 9 (2 – 8 Nov 2026) · Topic: Convergence and Divergence of Improper Integrals (Comparison Test)*

## The 8 most examinable things this week

1. **An improper integral is not an integral until a limit says it is.** ∫ₐ^∞ f(x)dx is *defined* as lim_{t→∞} ∫ₐ^t f(x)dx. The symbol has no meaning on its own; you must write the limit, evaluate the proper integral first, and only then take the limit. "Converges" means that limit exists and is **finite**; anything else — ∞, −∞, or no limit at all (oscillation) — is **divergence**.
2. **Type I = infinite interval.** One or both limits of integration are ±∞, the integrand being continuous throughout. ∫ₐ^∞, ∫_{−∞}^b, and ∫_{−∞}^∞.
3. **Type II = infinite integrand.** The interval is finite but f has an **infinite discontinuity** (vertical asymptote) at an endpoint or at an interior point. The limit is taken as the variable approaches the bad point **from inside the interval**: t → b⁻ or t → a⁺.
4. **The two p-tests, and they point opposite ways.**
   ∫₁^∞ dx/xᵖ **converges ⟺ p > 1** (value 1/(p − 1));  ∫₀¹ dx/xᵖ **converges ⟺ p < 1** (value 1/(1 − p)).
   Both fail at p = 1: ∫₁^∞ dx/x and ∫₀¹ dx/x both diverge. Far out, large p helps; near a singularity, small p helps.
5. **Splitting is compulsory, and every piece must converge.** ∫_{−∞}^∞ f = ∫_{−∞}^c f + ∫_c^∞ f, and the whole thing converges **only if both halves do separately**. Likewise an interior singularity at c ∈ (a,b) forces ∫ₐ^b = ∫ₐ^c + ∫_c^b. If either half diverges the whole integral diverges — cancellation of +∞ against −∞ is not allowed.
6. **Comparison Test.** Let f and g be continuous with **0 ≤ f(x) ≤ g(x) for all x ≥ a**. Then:
   - ∫ₐ^∞ g converges ⟹ ∫ₐ^∞ f converges (*smaller than convergent is convergent*);
   - ∫ₐ^∞ f diverges ⟹ ∫ₐ^∞ g diverges (*bigger than divergent is divergent*).
   The **other two combinations give no information at all.** Non-negativity is not decoration: it is what makes ∫ₐ^t f increasing in t, so that "bounded above" forces a limit.
7. **Limit Comparison Test.** If f, g > 0 on [a, ∞) and lim_{x→∞} f(x)/g(x) = L with **0 < L < ∞**, then ∫ₐ^∞ f and ∫ₐ^∞ g **both converge or both diverge**. This is the tool when the inequality points the wrong way (e.g. 1/(x² − 1) > 1/x²); you compare with the **dominant-term** function you get by keeping only the fastest-growing terms.
8. **How to choose the comparison function.** Keep the leading behaviour and throw away everything of lower order: at ∞, (x + 1)/(x³ + 2) behaves like x/x³ = 1/x²; 1/√(x⁴ + 1) behaves like 1/x²; near 0, 1/(√x(1 + x)) behaves like 1/√x. Then apply a p-test to the simplified function. Bounded oscillations are absorbed into constants: 1 ≤ 2 + sin x ≤ 3.

## Type I improper integrals — definitions

| Integral | Definition | Converges when |
|---|---|---|
| ∫ₐ^∞ f dx | lim_{t→∞} ∫ₐ^t f dx | the limit is finite |
| ∫_{−∞}^b f dx | lim_{t→−∞} ∫_t^b f dx | the limit is finite |
| ∫_{−∞}^∞ f dx | ∫_{−∞}^c f + ∫_c^∞ f, any c | **both** pieces converge |

The choice of c in the last line does not affect convergence or the value, because ∫_c^{c′} f is an ordinary finite number.

**Worked example 1 (Type I, both outcomes).**
∫₁^∞ dx/x² = lim_{t→∞}[−1/x]₁^t = lim_{t→∞}(1 − 1/t) = **1 — converges.**
∫₁^∞ dx/x = lim_{t→∞}[ln x]₁^t = lim_{t→∞} ln t = ∞ — **diverges.**
Nothing separates these two integrands visually; only the exponent p decides.

**Worked example 2 (the general p-test at ∞).** For p ≠ 1,
∫₁^t dx/xᵖ = [x^{1−p}/(1 − p)]₁^t = (t^{1−p} − 1)/(1 − p).
As t → ∞: if p > 1 then 1 − p < 0 and t^{1−p} → 0, giving **1/(p − 1)**; if p < 1 then 1 − p > 0 and t^{1−p} → ∞, so it **diverges**. The case p = 1 is done separately by the log above.

**Worked example 3 (exponential, and by parts under a limit).**
∫₀^∞ e^{−3x}dx = lim_{t→∞}[−e^{−3x}/3]₀^t = lim(−e^{−3t}/3 + 1/3) = **1/3.** In general ∫₀^∞ e^{−kx}dx = 1/k for k > 0, and diverges for k ≤ 0.
∫₁^∞ (ln x)/x² dx: by parts, u = ln x, dv = x^{−2}dx ⟹ v = −1/x, so ∫₁^t = [−ln x/x]₁^t + ∫₁^t dx/x² = (−ln t/t + 0) + (1 − 1/t). Since ln t/t → 0, the value is **1 — converges.**

**Worked example 4 (both limits infinite).** ∫_{−∞}^∞ dx/(1 + x²) = ∫_{−∞}^0 + ∫₀^∞ = lim_{t→−∞}[arctan x]_t^0 + lim_{t→∞}[arctan x]₀^t = π/2 + π/2 = **π.**
By contrast ∫_{−∞}^∞ x dx **diverges**: ∫₀^t x dx = t²/2 → ∞. Writing lim_{t→∞}∫_{−t}^t x dx = 0 is the *principal value*, not the integral, and is not an accepted answer.

## Type II improper integrals — definitions

If f is continuous on [a, b) and **unbounded as x → b⁻**: ∫ₐ^b f = lim_{t→b⁻} ∫ₐ^t f.
If f is continuous on (a, b] and unbounded as x → a⁺: ∫ₐ^b f = lim_{t→a⁺} ∫_t^b f.
If f is unbounded at an **interior** point c: ∫ₐ^b f = lim_{t→c⁻}∫ₐ^t f + lim_{s→c⁺}∫_s^b f, and both must converge.

**Worked example 5 (Type II at the lower endpoint).** ∫₀¹ dx/√x. The integrand blows up at x = 0, so
= lim_{t→0⁺}[2√x]_t¹ = lim_{t→0⁺}(2 − 2√t) = **2 — converges**, even though the region is unbounded in height.
Compare ∫₀¹ dx/x = lim_{t→0⁺}(−ln t) = ∞ — **diverges.** The p-test near 0 is the mirror image of the one at ∞: **p < 1 converges.**

**Worked example 6 (the interior-singularity trap).** ∫_{−1}¹ dx/x². Applying the Fundamental Theorem blindly gives [−1/x]_{−1}¹ = −1 − 1 = **−2**, which is impossible: the integrand is positive everywhere it is defined, so any answer must be positive. The integrand is undefined at x = 0, *inside* the interval, so the FTC does not apply. Correctly: ∫₀¹ dx/x² = lim_{t→0⁺}(1/t − 1) = ∞, so the integral **diverges**. Always scan the interval for zeros of the denominator before integrating.

**Worked example 7 (Type II with a finite value at a log singularity).** ∫₀¹ ln x dx = lim_{t→0⁺}[x ln x − x]_t¹ = (0 − 1) − lim_{t→0⁺}(t ln t − t) = −1 − 0 = **−1 — converges**, using t ln t → 0.

## The Comparison Test

**Statement.** Suppose f and g are continuous and **0 ≤ f(x) ≤ g(x)** for all x ≥ a.
(i) If ∫ₐ^∞ g(x)dx converges, then ∫ₐ^∞ f(x)dx converges.
(ii) If ∫ₐ^∞ f(x)dx diverges, then ∫ₐ^∞ g(x)dx diverges.

**Why it works.** Because f ≥ 0, the function F(t) = ∫ₐ^t f is **increasing** in t. Because f ≤ g, it is **bounded above** by ∫ₐ^∞ g. An increasing function bounded above has a finite limit — that is the whole proof. Remove non-negativity and F need not be increasing; remove the bound and nothing forces a limit. The same statement holds verbatim for Type II integrals with the inequality on the interval next to the singularity.

**What it never tells you.** If f ≤ g and ∫f converges, ∫g may do either. If f ≤ g and ∫g diverges, ∫f may do either. The classic demonstration: 1/(x(ln x)²) < 1/x on [2, ∞) and ∫₂^∞ dx/x diverges — yet ∫₂^∞ dx/(x(ln x)²) = lim[−1/ln x]₂^t = **1/ln 2, convergent**. Meanwhile 1/(x ln x) < 1/x too, and ∫₂^∞ dx/(x ln x) = lim[ln ln x]₂^t = ∞, **divergent**. Two integrands both smaller than a divergent one, going opposite ways — the "wrong direction" genuinely carries no information.

**The inequality only has to hold eventually.** Behaviour on any finite piece [a, N] contributes a finite number and cannot change convergence, so "for all x ≥ N" is enough. This is why "for x ≥ 1, e^{−x²} ≤ e^{−x}" is legitimate even though the inequality reverses on (0,1).

**Worked example 8 (comparison, convergent).** ∫₁^∞ e^{−x²}dx. There is no elementary antiderivative, so evaluation is impossible; only convergence can be decided. For x ≥ 1, x² ≥ x ⟹ −x² ≤ −x ⟹ **0 ≤ e^{−x²} ≤ e^{−x}**. And ∫₁^∞ e^{−x}dx = lim_{t→∞}(e^{−1} − e^{−t}) = 1/e, finite. By comparison (i), ∫₁^∞ e^{−x²}dx **converges.** Note what is and is not claimed: convergence, not a value.

**Worked example 9 (comparison, divergent).** ∫₁^∞ (2 + sin x)/x dx. Since −1 ≤ sin x ≤ 1, we have 2 + sin x ≥ 1, so **(2 + sin x)/x ≥ 1/x > 0** on [1, ∞). ∫₁^∞ dx/x diverges, so by comparison (ii) the given integral **diverges.** The oscillation is irrelevant once it is trapped between constants.

**Worked example 10 (choosing the comparison at ∞).** ∫₁^∞ dx/√(x⁴ + 1). Since x⁴ + 1 > x⁴, √(x⁴ + 1) > x², so **0 < 1/√(x⁴ + 1) < 1/x²**, and ∫₁^∞ dx/x² converges (p = 2 > 1). Hence **converges.** Making the denominator *bigger* makes the fraction *smaller* — the direction of the inequality flips when you pass to reciprocals, and that flip is the step most often botched.

**Worked example 11 (limit comparison, when the inequality points the wrong way).** ∫₂^∞ (x + 1)/(x³ − 3) dx. Dominant behaviour is x/x³ = 1/x². But (x + 1)/(x³ − 3) > 1/x² for large x, so direct comparison with a convergent integral is useless. Take g = 1/x²:
lim_{x→∞} [(x + 1)/(x³ − 3)] ÷ [1/x²] = lim (x³ + x²)/(x³ − 3) = **1**, and 0 < 1 < ∞.
Since ∫₂^∞ dx/x² converges, the given integral **converges**. (Alternative direct route: for x ≥ 2, x³ − 3 ≥ x³/2 and x + 1 ≤ 2x, so the integrand ≤ 4/x².)

**Worked example 12 (comparison on a Type II integral).** ∫₀¹ dx/(∛x · (1 + x)). The singularity is at x = 0. On (0, 1], 1 + x ≥ 1, so **0 < 1/(∛x(1 + x)) ≤ 1/x^{1/3}**, and ∫₀¹ dx/x^{1/3} converges because p = 1/3 < 1. Hence **converges.**

**Worked example 13 (divergence by comparison at a Type II endpoint, and a mixed integral).** ∫₂^∞ dx/ln x: for x ≥ 2, ln x < x, so 1/ln x > 1/x > 0; ∫₂^∞ dx/x diverges, so this **diverges.**
∫₀^∞ dx/(√x(1 + x)) is improper at **both** ends — Type II at 0, Type I at ∞ — so split at 1. On (0,1] compare with 1/√x (p = 1/2 < 1, converges); on [1,∞), √x(1 + x) > x^{3/2}, so the integrand < 1/x^{3/2} (p = 3/2 > 1, converges). Both halves converge, so the whole integral **converges.** (Its value is π, by u = √x.)

## Deciding what to do

| The integral looks like | Do this |
|---|---|
| limits ±∞, integrand continuous | Type I: write the limit, integrate, take the limit |
| finite limits, denominator zero at an endpoint | Type II: one-sided limit into the bad endpoint |
| finite limits, denominator zero **inside** | split at the bad point, both halves must converge |
| both ends bad (∞ and a singularity) | split at a convenient interior point, treat each end separately |
| xᵖ alone | p-test — but check *which* p-test: at ∞ or at 0 |
| an antiderivative you cannot find (e^{−x²}, 1/ln x, sin²x/x²) | comparison or limit comparison — decide convergence only |
| a messy quotient of polynomials/roots | keep leading terms, compare with 1/xᵏ, use limit comparison if the inequality misbehaves |
| bounded oscillation (sin, cos) in the numerator | bound it by constants, then compare |
| f changes sign | test ∫\|f\| by comparison; if that converges, so does ∫f (absolute convergence) |

## Commonly confused

- **Type I versus Type II.** Type I is an infinite *interval*; Type II is an infinite *integrand* on a finite interval. ∫₀^∞ dx/√x is both at once and must be split.
- **The two p-tests run opposite ways.** p > 1 converges at ∞; p < 1 converges at 0. Students memorise one and apply it at the other end. Sanity check: 1/x² is *harmless* far away but *lethal* near zero.
- **p = 1 belongs to neither side.** ∫₁^∞ dx/x and ∫₀¹ dx/x both diverge; 1/x is the exact boundary, and boundaries are always divergent here.
- **Applying the FTC across a hidden singularity.** ∫_{−1}¹ dx/x² = −2 and ∫₀² dx/(x − 1) = 0 are both nonsense produced by the same error: substituting limits into an antiderivative that is not continuous on the whole interval.
- **"It diverges to ∞" versus "the limit does not exist".** ∫₀^∞ cos x dx diverges because sin t oscillates, not because it grows. Both count as divergence; neither has a value.
- **The principal value is not the integral.** ∫_{−∞}^∞ x dx and ∫_{−∞}^∞ 2x/(1 + x²)dx diverge, even though the symmetric limit is 0 in each case. Every piece must converge **on its own**.
- **A convergent integral over an unbounded region.** Infinite length or infinite height does not force an infinite value: ∫₁^∞ dx/x² = 1 and ∫₀¹ dx/√x = 2 are finite. "The area is unbounded, so it diverges" is not an argument.
- **Comparison direction.** *Smaller than convergent* ⟹ convergent; *bigger than divergent* ⟹ divergent. The other two orderings prove nothing whatsoever — and both counterexamples (1/(x ln x), 1/(x(ln x)²)) sit under the same divergent 1/x.
- **Dropping the non-negativity hypothesis.** The comparison test as stated needs 0 ≤ f ≤ g. For sign-changing f, compare **|f|** with g and quote absolute convergence; comparing f itself with g when f can be negative proves nothing.
- **Reciprocal flips the inequality.** x⁴ + 1 > x⁴ gives 1/√(x⁴ + 1) < 1/x². Carrying the inequality through unchanged reverses the conclusion and turns a correct convergence proof into a false one.
- **Comparison gives convergence, not a value.** "∫₁^∞ e^{−x²}dx = 1/e" is wrong; the correct statement is ∫₁^∞ e^{−x²}dx ≤ 1/e, and the integral converges.
- **Limit comparison with L = 0 or L = ∞.** The two-way conclusion needs 0 < L < ∞. If L = 0 you only get "g converges ⟹ f converges"; if L = ∞ you only get "g diverges ⟹ f diverges". Quoting the full theorem with a degenerate L is a standard mark-loser.
- **Choosing a comparison function by size instead of order.** 1/(x² + 1000) and 1/x² differ hugely in value but not in behaviour; comparison is about the **exponent**, not the constants.
- **Forgetting that finite pieces are free.** "The inequality fails on [0,1] so the test can't be used" is wrong: convergence at ∞ depends only on the tail, so an eventual inequality suffices.
- **Writing lim before integrating, or omitting it entirely.** Marks are given for the statement ∫ₐ^∞ f = lim_{t→∞}∫ₐ^t f; an answer that never shows a limit is an unsupported answer even when the number is right.

---

*Note on the source: this week's deck extracts as slide titles only — LEARNING OBJECTIVES, INTRODUCTION, IMPROPER INTEGRALS, TYPE I IMPROPER INTEGRALS (three slides), TYPE II IMPROPER INTEGRALS (two), COMPARISON TEST FOR IMPROPER INTEGRALS (four), TASK, SUMMARY, FURTHER READING — because every definition, formula and worked example sits inside a slide image that the text extractor cannot read. What does extract is the objectives (identify and determine the convergence or divergence of improper integrals of type I; the same for type II; use the comparison test to determine the convergence or divergence of improper integrals) and the introduction: "Sometimes it is difficult to find the exact value of an improper integral by antidifferentiation. However, it is still possible to determine whether an improper integral converges or diverges. The idea is to compare the integral to one whose behaviour we already know." The week summary sheet adds only that improper integrals are "integrals with infinite intervals or discontinuities", that they either converge to a finite value or diverge, that the comparison test settles complex cases by comparison with known ones, and a case study on heat dissipation in materials. Every definition, statement, test and example above is the standard 100-level treatment of exactly those named objectives.*
