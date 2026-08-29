# MTH_102 — Week 8 Summary

*Elementary Mathematics II (Calculus) · Week 8 (26 Oct – 1 Nov 2026) · Topic: Integration Techniques and Approach*

## The 8 most examinable things this week

1. **There is no algorithm.** Differentiation has a finite set of rules that always terminate; integration does not. Every technique this week is a way of **converting an integral you cannot do into one you can** — so the working ends only when a **standard form** is reached.
2. **Substitution** (reverses the chain rule): put u = g(x), du = g′(x)dx. It succeeds only if g′(x) is present in the integrand **up to a constant multiple**. You may move a *number* across the integral sign to fix du; you may **never** move a function of x.
3. **Integration by parts** (reverses the product rule): **∫u dv = uv − ∫v du**, from d(uv) = u dv + v du. It is a **trade**, not an evaluation — it is only progress if ∫v du is easier than ∫u dv. Choose u by **LIATE** (Log, Inverse trig, Algebraic, Trig, Exponential): whichever comes first is u.
4. **The two special uses of parts:** ∫ln x dx (take dv = dx, so v = x) and the **cycling** integrals ∫eˣ sin x dx, ∫eˣ cos x dx, where the original integral I reappears and you **solve algebraically for I**.
5. **Trigonometric substitution** kills a square root using a Pythagorean identity: √(a² − x²) → x = a sinθ; √(a² + x²) → x = a tanθ; √(x² − a²) → x = a secθ. Always convert back to x with a **right-angled triangle**, not by leaving θ in the answer.
6. **Partial fractions** apply only to a **proper rational function** (degree of numerator < degree of denominator). If it is improper, **long-divide first**. Distinct linear factor → A/(x − a); repeated factor (x − a)ᵏ → one term for **every** power 1…k; irreducible quadratic → (Ax + B)/(x² + px + q).
7. **The decision:** look at the integrand's *shape*, not its difficulty. A composite with its inner derivative present → substitution. A product of two unrelated types → parts. A square root of a quadratic → trig substitution. A ratio of polynomials → divide, then partial fractions (unless the numerator is the derivative of the denominator, which is a log).
8. **The one reliable check** is unchanged from Week 7: **differentiate your answer**. If it does not return the integrand exactly, the answer is wrong.

## Standard integrals (the target forms)

Every technique aims at this table. C omitted here, never in your answer.

| ∫f(x)dx | Result | Condition |
|---|---|---|
| ∫xⁿ dx | x^{n+1}/(n+1) | n ≠ −1 |
| ∫dx/x | ln\|x\| | x ≠ 0 |
| ∫eˣ dx, ∫e^{kx}dx | eˣ, e^{kx}/k | k ≠ 0 |
| ∫aˣ dx | aˣ/ln a | a > 0, a ≠ 1 |
| ∫sin x dx, ∫cos x dx | −cos x, sin x | |
| ∫sec²x dx, ∫cosec²x dx | tan x, −cot x | |
| ∫tan x dx | −ln\|cos x\| = ln\|sec x\| | |
| ∫cot x dx | ln\|sin x\| | |
| ∫sec x dx | ln\|sec x + tan x\| | |
| ∫f′(x)/f(x) dx | ln\|f(x)\| | numerator = derivative of denominator |
| ∫dx/(a² + x²) | (1/a)·arctan(x/a) | a > 0 |
| ∫dx/√(a² − x²) | arcsin(x/a) | \|x\| < a |
| ∫dx/(x² − a²) | (1/2a)·ln\|(x − a)/(x + a)\| | \|x\| ≠ a |
| ∫dx/√(x² ± a²) | ln\|x + √(x² ± a²)\| | |

The **f′/f** line is the single most missed shortcut: ∫(2x + 1)/(x² + x + 5)dx = ln\|x² + x + 5\| + C with no partial fractions at all.

## 1. Substitution — reversing the chain rule

**Why it works.** If F′ = f then d/dx F(g(x)) = f(g(x))·g′(x). So ∫f(g(x))·g′(x)dx = F(g(x)) + C. The substitution u = g(x), du = g′(x)dx is just bookkeeping for that identity.

**The condition.** After substituting, **no x may remain** — the integral must be in u alone. Three cases:
- *g′ present exactly or up to a constant* — substitute directly (constants pass through the integral sign).
- *A leftover x that can be re-expressed* — solve u = g(x) back for x and substitute that too (see example 2).
- *Neither* — substitution fails; try another technique.

**Definite integrals.** Either change the limits to u-values (u = g(a) to u = g(b)) and finish in u, **or** return to x before substituting the original limits. Never mix the two.

**Worked example 1.** ∫₀¹ x(x² + 1)³dx. Let u = x² + 1 ⟹ du = 2x dx ⟹ x dx = du/2. Limits: x = 0 → u = 1; x = 1 → u = 2.
= (1/2)∫₁² u³du = (1/2)[u⁴/4]₁² = (1/2)(16/4 − 1/4) = (1/2)(15/4) = **15/8.**

**Worked example 2 (leftover x).** ∫x√(x − 1) dx. Let u = x − 1 ⟹ x = u + 1, dx = du.
= ∫(u + 1)u^{1/2}du = ∫(u^{3/2} + u^{1/2})du = (2/5)u^{5/2} + (2/3)u^{3/2} + C = **(2/5)(x − 1)^{5/2} + (2/3)(x − 1)^{3/2} + C.**

## 2. Integration by parts — reversing the product rule

**Derivation.** d(uv) = u dv + v du. Integrate both sides: uv = ∫u dv + ∫v du, hence

**∫u dv = uv − ∫v du**   (definite form: ∫_a^b u dv = [uv]_a^b − ∫_a^b v du)

**Choosing u and dv.** dv must be something you can integrate; u should be something that *simplifies* when differentiated. **LIATE** ranks the candidates for u: **L**ogarithmic, **I**nverse trigonometric, **A**lgebraic, **T**rigonometric, **E**xponential. In ∫x³ ln x dx, "L" beats "A", so u = ln x, dv = x³dx.

**What parts does not promise.** It does not evaluate the integral; it exchanges it. If the new ∫v du is worse than the old one, the choice was wrong — swap u and dv and start again.

**Worked example 3.** ∫x e^{2x}dx. u = x, dv = e^{2x}dx ⟹ du = dx, v = e^{2x}/2.
= x·e^{2x}/2 − ∫(e^{2x}/2)dx = xe^{2x}/2 − e^{2x}/4 + C.
*Check:* d/dx[xe^{2x}/2 − e^{2x}/4] = e^{2x}/2 + xe^{2x} − e^{2x}/2 = xe^{2x} ✓

**Worked example 4 (the dv = dx trick).** ∫ln x dx. u = ln x, dv = dx ⟹ du = dx/x, v = x.
= x ln x − ∫x·(1/x)dx = x ln x − ∫dx = **x ln x − x + C.**
Hence ∫₁^e ln x dx = [x ln x − x]₁^e = (e − e) − (0 − 1) = **1.**

**Worked example 5 (parts twice).** ∫x²sin x dx. u = x², dv = sin x dx ⟹ v = −cos x.
= −x²cos x + ∫2x cos x dx. Apply parts again to ∫2x cos x dx with u = 2x, dv = cos x dx, v = sin x:
= 2x sin x − ∫2 sin x dx = 2x sin x + 2cos x.
So ∫x²sin x dx = **−x²cos x + 2x sin x + 2cos x + C.** Each application drops the power of x by one; a xⁿ factor needs n applications.

**Worked example 6 (cycling).** I = ∫eˣcos x dx. Take u = cos x, dv = eˣdx ⟹ v = eˣ:
I = eˣcos x + ∫eˣsin x dx. Now J = ∫eˣsin x dx with u = sin x, dv = eˣdx:
J = eˣsin x − ∫eˣcos x dx = eˣsin x − I.
Therefore I = eˣcos x + eˣsin x − I ⟹ 2I = eˣ(sin x + cos x) ⟹ **I = eˣ(sin x + cos x)/2 + C.**
The second application must keep the exponential as dv again; swapping roles the second time undoes the first and gives the useless identity I = I.

## 3. Trigonometric substitution

Used when the integrand contains a **square root of a quadratic** (or that quadratic to a half-integer power) and no substitution reaches it.

| Expression | Substitution | dx | Identity used | Root becomes |
|---|---|---|---|---|
| √(a² − x²) | x = a sinθ, −π/2 ≤ θ ≤ π/2 | a cosθ dθ | 1 − sin²θ = cos²θ | a cosθ |
| √(a² + x²) | x = a tanθ, −π/2 < θ < π/2 | a sec²θ dθ | 1 + tan²θ = sec²θ | a secθ |
| √(x² − a²) | x = a secθ, 0 ≤ θ < π/2 | a secθ tanθ dθ | sec²θ − 1 = tan²θ | a tanθ |

The θ-range is what lets you write √(a²cos²θ) = a cosθ **without a modulus** — on that range cosθ, secθ and tanθ are non-negative. Note the substituted constant is **a**, not a²: for √(9 − x²), a = 3.

**Getting back to x.** Draw the right-angled triangle the substitution describes. For x = 3 sinθ: opposite = x, hypotenuse = 3, adjacent = √(9 − x²), so sinθ = x/3, cosθ = √(9 − x²)/3, θ = arcsin(x/3). An answer left in θ is incomplete.

**Worked example 7.** ∫√(9 − x²)dx. Put x = 3 sinθ, dx = 3cosθ dθ, √(9 − x²) = 3cosθ.
= ∫9cos²θ dθ = 9∫(1 + cos 2θ)/2 dθ = (9/2)θ + (9/4)sin 2θ = (9/2)θ + (9/2)sinθ cosθ.
Back-substitute: = (9/2)arcsin(x/3) + (9/2)·(x/3)·(√(9 − x²)/3) = **(9/2)arcsin(x/3) + x√(9 − x²)/2 + C.**
(The double-angle step is compulsory: cos²θ has no elementary antiderivative until it is written as (1 + cos 2θ)/2.)

**Worked example 8.** ∫dx/(x² + 4)^{3/2}. Put x = 2 tanθ, dx = 2sec²θ dθ, x² + 4 = 4sec²θ so (x² + 4)^{3/2} = 8sec³θ.
= ∫2sec²θ dθ/(8sec³θ) = (1/4)∫cosθ dθ = (1/4)sinθ + C = **x/(4√(x² + 4)) + C.**

## 4. Partial fractions

For **rational** integrands P(x)/Q(x) only.

**Step 0 — properness.** If deg P ≥ deg Q, do polynomial **long division** first: P/Q = (polynomial) + (proper remainder)/Q. E.g. (x + 3)/(x − 1) = 1 + 4/(x − 1), so ∫(x + 3)/(x − 1)dx = x + 4ln|x − 1| + C.

**Step 1 — factor Q completely** over the reals. **Step 2 — write the correct form:**

| Factor of Q | Contributes |
|---|---|
| distinct linear (x − a) | A/(x − a) |
| repeated linear (x − a)ᵏ | A₁/(x − a) + A₂/(x − a)² + … + A_k/(x − a)ᵏ |
| irreducible quadratic x² + px + q | (Ax + B)/(x² + px + q) |
| repeated irreducible quadratic, power k | one (Ax + B)-type term for each power up to k |

A quadratic is **irreducible** when its discriminant p² − 4q < 0. **Step 3 — clear denominators** and find the constants, either by substituting the roots (the cover-up method) or by comparing coefficients.

**Worked example 9 (distinct linear).** ∫(3x + 11)/((x − 3)(x + 2))dx.
3x + 11 = A(x + 2) + B(x − 3). Put x = 3: 20 = 5A ⟹ A = 4. Put x = −2: 5 = −5B ⟹ B = −1.
= ∫[4/(x − 3) − 1/(x + 2)]dx = **4ln|x − 3| − ln|x + 2| + C.**

**Worked example 10 (repeated linear).** (2x + 3)/(x − 1)² = A/(x − 1) + B/(x − 1)².
2x + 3 = A(x − 1) + B. Put x = 1: B = 5. Compare x-coefficients: A = 2.
∫ = 2ln|x − 1| − 5/(x − 1) + C.

**Worked example 11 (irreducible quadratic).** ∫(2x² − x + 4)/(x(x² + 4))dx.
Form: A/x + (Bx + C)/(x² + 4). Clearing: 2x² − x + 4 = A(x² + 4) + (Bx + C)x.
x = 0 ⟹ 4 = 4A ⟹ A = 1. Coefficient of x²: 2 = A + B ⟹ B = 1. Coefficient of x: −1 = C.
= ∫[1/x + (x − 1)/(x² + 4)]dx = ln|x| + (1/2)ln(x² + 4) − (1/2)arctan(x/2) + C.
The quadratic piece always splits into an **f′/f log** part and an **arctan** part — separate them before integrating.

## 5. Choosing the technique

| The integrand looks like | Do this first |
|---|---|
| f(g(x))·g′(x) — a composite with its inner derivative present | substitution u = g(x) |
| f′(x)/f(x) | write down ln\|f(x)\| — no work needed |
| product of two unrelated types (x·eˣ, x ln x, x sin x) | parts, u by LIATE |
| a lone ln x or arcsin x | parts with dv = dx |
| eˣsin x, eˣcos x | parts twice, then solve for I |
| √(a² ± x²), √(x² − a²) | trigonometric substitution |
| polynomial / polynomial | divide if improper, then partial fractions |
| quadratic under a root that is not in a² ± x² form | complete the square, then substitute |
| a product of powers of x that can simply be expanded | expand and use the power rule |

## Commonly confused

- **Substitution vs parts.** ∫x e^{x²}dx is substitution (u = x², the x supplies du/2); ∫x eˣdx is parts (nothing is the derivative of anything else). One character's difference, completely different method.
- **"Adjusting" du with a function of x.** ∫(x² − 1)⁴dx ≠ (x² − 1)⁵/(5·2x). Only **constants** may be moved across the integral sign. Differentiate the fake answer and you get a quotient-rule mess, not the integrand.
- **∫u dv = uv − ∫v du, not uv − ∫u dv or uv + ∫v du.** The minus sign and the swap of which factor is differentiated both come from d(uv) = u dv + v du.
- **v is ∫dv, not dv.** In ∫x e^{2x}dx, v = e^{2x}/2 — the ½ is dropped constantly, and again in the second term.
- **Parts "failing" because an integral remains.** ∫eˣcos x dx returning to itself is the method **working**; the answer comes from solving 2I = … , not from giving up.
- **LIATE is a heuristic for u, not for dv.** It also cannot rescue a dv you cannot integrate: in ∫x³ln x dx the real constraint is that x³ is integrable and ln x is not (yet).
- **a versus a² in trig substitution.** √(9 − x²) needs x = 3 sinθ, not x = 9 sinθ.
- **sin vs tan vs sec.** A **minus** inside with x² second (a² − x²) → sin; a **plus** → tan; a minus with x² **first** (x² − a²) → sec. Getting this wrong leaves a root that will not simplify.
- **Leaving the answer in θ.** arcsin(x/3) and √(9 − x²)/3 must replace θ and cosθ; the triangle is how.
- **Partial fractions on an improper fraction.** (x³ + 1)/(x² − 4) must be divided first; forcing A/(x − 2) + B/(x + 2) gives an unsolvable system.
- **Repeated factor with only the top power.** (x − 1)² contributes **two** terms, A/(x − 1) and B/(x − 1)²; omitting the first makes the equations inconsistent.
- **Irreducible quadratic with a constant numerator.** Over x² + 4 the numerator must be **Bx + C**, not B alone — otherwise the log part cannot appear.
- **Partial fractions where a log will do.** ∫(2x + 1)/(x² + x + 5)dx is ln|x² + x + 5| + C; the denominator is irreducible and the numerator is already its derivative.
- **∫dx/(x² + a²) vs ∫dx/(x² − a²).** Plus gives **arctan**; minus factors and gives a **log**. The sign changes the whole shape of the answer.
- **Dropping + C**, still, and the modulus in every ln from an integration.

---

*Note on the source: this week's deck extracts as slide titles only — STANDARD INTEGRALS (three slides), SUBSTITUTION (two), TASK, INTEGRATION BY PARTS (three), TASK, TRIGONOMETRIC SUBSTITUTION (four), TASK, PARTIAL FRACTIONS (two), TASK, SUMMARY — because every formula and worked example sits inside a slide image that the text extractor cannot read. What does extract is the objectives (identify some rules of integration; evaluate integrals using the standard formula; evaluate integrals using some useful techniques such as substitution, integration by parts, etc.) and the introduction: "The problem of calculating the derivative of an elementary function can always be solved by a systematic application of the standard rules. However, the inverse problem of integration is very different and has no such clear-cut solution. In this note, we discuss some standard techniques for computing integrals: substitution methods, integration by parts, trigonometric substitution, and partial fractions." The week summary sheet adds only the constant-multiple, sum, difference and substitution rules and a daily-sales case study. Every formula, statement and example above is the standard 100-level treatment of exactly those named objectives.*
