# Monday — MTH_102 nightly check

*Integration techniques as concepts: what substitution, integration by parts, trigonometric substitution and partial fractions each are, the exact condition each one needs before it may be used, which differentiation rule each one reverses and why that makes it work, and how the shape of an integrand decides which technique it needs.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The formula ∫u dv = uv − ∫v du is obtained by:
a) integrating both sides of the chain rule d/dx f(g(x)) = f′(g(x))·g′(x)
b) integrating both sides of the quotient rule, since a product can be written as a division
c) integrating both sides of d(uv) = u dv + v du and rearranging
d) applying linearity, since ∫(u + v)dx = ∫u dx + ∫v dx

**2.** Which integral is immediately ready for the substitution u = x² + 1, in the sense that it converts to an integral in u alone after moving only a constant?
a) ∫(x² + 1)⁵dx
b) ∫x(x² + 1)⁵dx
c) ∫x²(x² + 1)⁵dx
d) ∫x(x³ + 1)⁵dx

**3.** An integrand contains √(x² − 9). The right substitution, and the reason, is:
a) x = 3 tanθ, because tan²θ + 1 = sec²θ turns the root into 3secθ
b) x = 3 sinθ, because 1 − sin²θ = cos²θ turns the root into 3cosθ
c) x = 9 secθ, because 9 is the constant appearing under the root
d) x = 3 secθ, because sec²θ − 1 = tan²θ turns the root into 3tanθ

**4.** In ∫x³ln x dx the standard choice is u = ln x, dv = x³dx. The reason is:
a) u must always be whichever factor is written last
b) ln x differentiates to 1/x, which removes the logarithm, and x³ can be integrated — so the traded integral ∫v du is purely algebraic
c) x³ differentiates to 3x², which is simpler than x³, so the factor that simplifies on differentiation is x³
d) the choice does not matter; either assignment gives the same answer, only with more lines of working

**5.** Before (x³ + 1)/(x² − 4) can be split into partial fractions you must:
a) factor the numerator, since x³ + 1 = (x + 1)(x² − x + 1)
b) do nothing further — the decomposition works for any ratio of polynomials
c) divide out, because the numerator's degree is not less than the denominator's
d) substitute u = x² − 4, since the denominator is a difference of squares

**6.** The correct partial-fraction form for (5x + 1)/((x + 2)(x − 1)²) is:
a) A/(x + 2) + B/(x − 1)²
b) A/(x + 2) + (Bx + C)/(x − 1)²
c) (Ax + B)/(x + 2) + (Cx + D)/(x − 1)²
d) A/(x + 2) + B/(x − 1) + C/(x − 1)²

**7.** You substitute u = g(x) into a definite integral ∫₀² f(x)dx. You must then:
a) keep 0 and 2 as the limits and evaluate the antiderivative in u at them
b) replace the limits 0 and 2 by g(0) and g(2), or else return to x before substituting the original limits
c) keep 0 and 2 but swap them if g is decreasing on the interval
d) drop the limits, since the substitution has turned the problem into an indefinite integral, and add + C

**8.** The standard route to ∫x dx/(x² + 6x + 8) is:
a) the substitution u = x² + 6x + 8, since there is an x in the numerator
b) integration by parts, with u = x and dv = dx/(x² + 6x + 8)
c) partial fractions, after factoring the denominator as (x + 2)(x + 4)
d) trigonometric substitution, after completing the square to (x + 3)² − 1

**9. (explain why)** There is no "product rule for integration", yet integration by parts comes directly from the product rule. Explain how, and state precisely what parts does and does not promise you about the integral you started with.

**10. (explain why)** A student integrating ∫(x² − 1)⁴dx writes "let u = x² − 1, du = 2x dx, so dx = du/(2x), giving (1/2x)∫u⁴du = (x² − 1)⁵/(10x)". Name the exact step that is illegal, state the general rule about what may and may not be moved across the integral sign, and say how you would show the answer is wrong in one line.

**11. (explain why)** Explain why the substitution x = a sinθ removes the root in √(a² − x²), why θ is restricted to −π/2 ≤ θ ≤ π/2, and how you get from an answer written in θ back to an answer in x.

**12. (explain why)** You are given ∫dx/(x² − 9), ∫x dx/(x² − 9) and ∫dx/√(9 − x²). Name the technique each one needs and say exactly which feature of the integrand decides it. Do not evaluate them.

---

## Answers

**1. c** — *Integration by parts is the product rule read backwards.* From d(uv) = u dv + v du, integrating gives uv = ∫u dv + ∫v du, and rearranging isolates ∫u dv. (a) is the origin of **substitution**, not parts — that is the standard swap of the two techniques' provenance; (b) invents a rule: no integration technique this week comes from the quotient rule, and rewriting a product as a division does not help; (d) is linearity, which only splits sums and constant multiples and never touches a product.

**2. b** — *Substitution needs the inner derivative present up to a constant multiple.* With u = x² + 1, du = 2x dx, so x dx = du/2 and the integral becomes (1/2)∫u⁵du. In (a) there is no x factor at all, so dx = du/(2x) leaves an x that cannot be removed; in (c) the factor is x², an **even** power — one x pairs with du, and the leftover single x is not expressible as a function of u without a square root, so this needs a different route; (d) has the right *shape* but the wrong inner function — its inner derivative is 3x², so u = x² + 1 simply does not appear in it. Matching the pattern by eye rather than checking g′ is the error.

**3. d** — *Trig substitution is chosen by which Pythagorean identity kills the particular root.* Setting x = 3secθ gives x² − 9 = 9(sec²θ − 1) = 9tan²θ, so the root becomes 3tanθ. (a) would give 9tan²θ − 9 = 9(tan²θ − 1), which is not a perfect square and simplifies to nothing; (b) gives 9sin²θ − 9 = −9cos²θ, a negative under the root; (c) uses a² = 9 where the substitution needs **a = 3** — the constant substituted is the square root of the constant in the expression, and x = 9secθ gives 81sec²θ − 9, which factors as 9(9sec²θ − 1) and no identity applies.

**4. b** — *In parts, dv must be integrable and u should collapse when differentiated.* ln x has no standard antiderivative available before this week, so it cannot be dv; and differentiating it gives 1/x, so ∫v du = ∫(x⁴/4)(1/x)dx = ∫x³/4 dx is elementary. (a) is a mnemonic that does not exist — position on the page decides nothing; (c) applies the right criterion (simplifies on differentiation) but ignores the other half of it, that the remaining factor must be integrable as dv, and ln x is not; (d) is false: with u = x³ and dv = ln x dx you cannot even find v, and in general a wrong choice makes ∫v du harder, not merely longer.

**5. c** — *Partial fractions require a proper rational function.* deg(x³ + 1) = 3 ≥ deg(x² − 4) = 2, so long division must come first: (x³ + 1)/(x² − 4) = x + (4x + 1)/(x² − 4), and only the remainder is decomposed. (a) factors the wrong polynomial — decomposition works on the **denominator**'s factors; (b) is the belief that causes the error, and it produces an inconsistent system of equations with no solution; (d) tries a substitution whose du = 2x dx is nowhere present in the integrand.

**6. d** — *A repeated linear factor contributes one term for every power up to its multiplicity.* (x − 1)² needs both B/(x − 1) and C/(x − 1)²; with three unknowns over a cubic denominator the system is exactly determined. (a) omits the first-power term, and the resulting equations are inconsistent; (b) treats (x − 1)² as an **irreducible quadratic** and gives it a linear numerator — but (x − 1)² is a repeated *linear* factor, and irreducible means the quadratic has no real roots; (c) puts linear numerators over linear denominators, which makes each piece improper and defeats the whole point of the decomposition.

**7. b** — *A substitution changes the variable, so the limits, which are values of that variable, must change with it.* The limits 0 and 2 are x-values; the antiderivative is now a function of u, so it must be evaluated at the corresponding u-values g(0) and g(2). The alternative is equally valid: back-substitute to get an antiderivative in x and use 0 and 2 unchanged. (a) evaluates a u-function at x-numbers, which is the single most common definite-substitution error; (c) invents a rule about direction — a decreasing g simply produces an upper u-limit smaller than the lower one, and you leave it that way; (d) confuses a change of variable with a change of the kind of integral: the value is still a number and no + C appears.

**8. c** — *A ratio of polynomials whose denominator factors over the reals is partial-fraction work.* x² + 6x + 8 = (x + 2)(x + 4), so the integrand splits into constants over linear factors and integrates to logs. (a) fails the substitution condition: du = (2x + 6)dx, and the numerator is x, not a constant multiple of 2x + 6 — you would have to write x = ½(2x + 6) − 3, which still leaves a piece needing partial fractions; (b) chooses a dv that is exactly the integral you are trying to do, so parts makes it worse, not better; (d) is not impossible, but completing the square is what you do when the quadratic is **irreducible** or sits under a root — here the denominator factors over the reals, so trig substitution imports arcsecs and back-substitution for an answer that two logs would have given directly.

**9.** *Concept: parts is the product rule integrated, and it trades one integral for another rather than evaluating it.* Differentiation has a product rule because (uv)′ is determined by u, v and their derivatives. Integration has no such rule: ∫f·g dx cannot be built from ∫f and ∫g (test it — ∫x·x dx = x³/3, but (x²/2)(x²/2) = x⁴/4). What can be done is to integrate the product rule itself: from d(uv) = u dv + v du, integrating gives uv = ∫u dv + ∫v du, i.e. **∫u dv = uv − ∫v du**. So parts promises only an **exchange**: the integral ∫u dv is replaced by a boundary term uv and a different integral ∫v du. It promises nothing about that new integral being easier — that depends entirely on the choice of u and dv, which is why a bad choice can produce a harder integral and the correct response is to swap the roles and start again.

**10.** *Concept: only constants may be moved across the integral sign; a function of x may not, so a missing variable factor cannot be manufactured.* The illegal step is writing "(1/2x)∫u⁴du" — pulling 1/(2x) outside the integral. ∫k·f = k∫f holds for a **constant** k because k is unaffected by the variable being integrated; 1/(2x) varies with the very variable being integrated (and, once the substitution is made, is not even expressible in u without a root), so it cannot be pulled out. Equivalently: substitution requires g′(x) to be **present in the integrand up to a constant multiple**, and here g′ = 2x is simply absent. The one-line disproof is to differentiate the claimed answer: d/dx[(x² − 1)⁵/(10x)] needs the quotient rule and gives [10x(x² − 1)⁴·2x − (x² − 1)⁵]/(10x²), which is not (x² − 1)⁴. The correct route is to expand the bracket and integrate term by term.

**11.** *Concept: trig substitution replaces a sum or difference of squares by a Pythagorean identity so that the root becomes a perfect square.* Putting x = a sinθ gives a² − x² = a² − a²sin²θ = a²(1 − sin²θ) = a²cos²θ, so √(a² − x²) = a|cosθ| — the root disappears because a² cos²θ is an exact square, which is precisely what a² − x² was not. Restricting θ to [−π/2, π/2] does two things: cosθ ≥ 0 there, so the modulus can be dropped and √(a² − x²) = a cosθ; and sin is one-to-one there, so θ = arcsin(x/a) is well defined and every x in (−a, a) is reached exactly once. To return to x, use the right-angled triangle the substitution describes — opposite x, hypotenuse a, adjacent √(a² − x²) — giving sinθ = x/a, cosθ = √(a² − x²)/a, tanθ = x/√(a² − x²) and θ = arcsin(x/a). An answer left in θ is not an answer to the question asked, because the question was about x.

**12.** *Concept: the technique is chosen by the shape of the integrand, and three integrands that look alike can need three different techniques.* ∫dx/(x² − 9): the denominator is a **difference of squares that factors over the reals**, (x − 3)(x + 3), and the numerator is a constant — **partial fractions** (equivalently, the standard form giving (1/6)ln|(x − 3)/(x + 3)|). ∫x dx/(x² − 9): the numerator is now **a constant multiple of the derivative of the denominator** (2x), so it is an f′/f pattern — **substitution** u = x² − 9, giving a single log. ∫dx/√(9 − x²): the quadratic is **under a root and in the form a² − x²**, which nothing rational can remove — **trigonometric substitution** x = 3sinθ (it is also a standard form, arcsin(x/3)). The decisive features are, in order: is there a root over the quadratic; is the numerator the denominator's derivative; does the denominator factor over the reals.
