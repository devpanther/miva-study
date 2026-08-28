# Monday — MTH_102 nightly check

*Concept and notation of a limit: the definition, one-sided limits and existence, the limit laws and their hypotheses, indeterminate versus infinite forms, continuity and the three kinds of discontinuity.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The statement lim_{x→2} f(x) = 5 means:
a) f(2) is defined and equals 5, so the limit is found by evaluating f at 2
b) f(x) can be made as close to 5 as we wish by taking x close enough to 2, with x ≠ 2
c) f(x) approaches 5 as x is taken larger and larger without any bound
d) f(x) approaches 5 but is never permitted to take the value 5 itself

**2.** f(x) = x + 1 for every x ≠ 2, and f(2) = 7. Then lim_{x→2} f(x) is:
a) 7, since the limit is the value the function takes at the point
b) 3, since the limit depends only on values near x = 2, not at x = 2
c) non-existent, since f is discontinuous at x = 2 and so has no limit there
d) 3 from the left and 7 from the right, so the two-sided limit fails

**3.** For a function f it is known that lim_{x→1⁻} f(x) = 4, lim_{x→1⁺} f(x) = 4 and f(1) = 9. Then:
a) lim_{x→1} f(x) = 4, and f is discontinuous at x = 1
b) lim_{x→1} f(x) = 9, because the function is actually defined at that point
c) the limit does not exist, because the one-sided values disagree with f(1)
d) lim_{x→1} f(x) = 4, and f is continuous at x = 1 since the limit exists

**4.** Direct substitution into lim_{x→3} g(x) produces the expression 7/0. The correct conclusion is:
a) the limit is 0, since dividing by something tiny makes the answer small
b) the form is indeterminate, so the expression must be factored and cancelled
c) the form is not indeterminate; |g| grows without bound, so check each side
d) the limit is 7, since the numerator is what decides the value of the quotient

**5.** The rule lim_{x→a}[f(x) + g(x)] = lim f + lim g is correctly described by:
a) it holds for any two functions at all, since addition is always permitted
b) it holds when both separate limits exist; the sum can have a limit when neither does
c) it holds only when f and g are each continuous at the point x = a
d) it holds unless one of the two separate limits happens to be equal to zero

**6.** Suppose lim_{x→1} f(x) = 0 and lim_{x→1} g(x) = 0. Which conclusion do the limit laws justify?
a) lim_{x→1} f(x)g(x) = 0
b) lim_{x→1} f(x)/g(x) = 1
c) lim_{x→1} f(x)/g(x) = 0
d) lim_{x→1} f(x)/g(x) does not exist

**7.** The function f(x) = (x² − 1)/(x − 1) at x = 1 has:
a) a removable discontinuity: the limit is 2 but f(1) is not defined
b) an infinite discontinuity, since the denominator is zero at that point
c) a jump discontinuity, the one-sided limits there being 1 and −1
d) no discontinuity at all, since the expression simplifies to x + 1

**8.** The Squeeze theorem lets you conclude that lim_{x→0} f(x) = 0 from:
a) f(x) ≤ x² for all x near 0, together with the fact that x² → 0
b) −x² ≤ f(x) ≤ x² for all x near 0, and both bounds tending to 0
c) f being bounded near 0, together with some other function tending to 0
d) f(x) ≤ g(x) for all x near 0, for some function g with limit 0 at 0

**9. (explain why)** Explain why lim_{x→2} f(x) can exist even though f(2) is undefined, and why it can fail to exist even though f(2) is perfectly well defined. Give a short example of each.

**10. (explain why)** State precisely the condition under which lim_{x→a} f(x) exists, and use it to explain why lim_{x→0} |x| exists but lim_{x→0} |x|/x does not.

**11. (explain why)** Direct substitution can produce 0/0 or it can produce 5/0. Explain what each of these tells you, why only one of them is called *indeterminate*, and what you should do next in each case.

**12. (explain why)** State the Squeeze theorem, then use it to explain why lim_{x→0} x² sin(1/x) = 0 — and say why the product law for limits cannot be used to get this answer.

---

## Answers

**1. b** — *The limit is a statement about the approach, with the point itself deliberately excluded.* The formal version is: for every ε > 0 there is a δ > 0 with 0 < |x − 2| < δ ⟹ |f(x) − 5| < ε; the "0 <" is exactly the exclusion of x = 2. (a) confuses the limit with the function value — true only when f happens to be continuous there. (c) is the definition of a limit at infinity, x → ∞, not x → 2. (d) adds a prohibition the definition never makes: a constant function has limit 5 everywhere and takes the value 5 everywhere.

**2. b** — *The limit ignores f(a) entirely.* The limit is computed from values of f at x near but not equal to 2, and every one of those is x + 1, so the limit is 3. (a) evaluates instead of taking a limit. (c) confuses discontinuity with non-existence of the limit — this is precisely a *removable* discontinuity, where the limit does exist. (d) invents a one-sided split; both sides use the same formula x + 1, so both give 3.

**3. a** — *Continuity needs three conditions, and the limit needs only one.* Both one-sided limits are 4 and agree, so the limit is 4; but f(1) = 9 ≠ 4, so condition (iii) of continuity fails and there is a removable discontinuity. (b) takes the function value as the limit whenever it exists. (c) thinks f(a) participates in whether the limit exists — it never does. (d) treats "the limit exists" as the whole of continuity, forgetting the value must match.

**4. c** — *c/0 with c ≠ 0 is an infinite form, not an indeterminate one.* A fixed non-zero numerator over something shrinking to zero gives quotients of unbounded size, so the limit is +∞ or −∞ — and which one depends on the sign of the denominator on each side, so both sides must be checked separately (they may disagree, in which case the two-sided limit does not exist). (a) reverses the effect of dividing by a small number. (b) is the standard confusion of 7/0 with 0/0; there is nothing to cancel, since the numerator has no zero factor at x = 3. (d) ignores the denominator altogether.

**5. b** — *Every limit law is conditional on the separate limits existing, and none of them can be run backwards.* If lim f = L and lim g = M both exist then the sum limit is L + M. But the converse fails: with f(x) = 1/x and g(x) = −1/x at a = 0, neither limit exists, yet f + g = 0 has limit 0. (a) drops the hypothesis and licenses exactly that false converse. (c) demands continuity, which is sufficient but far stronger than needed — the limits need not be the function values, or even exist as values. (d) imports the non-zero condition from the *quotient* law, where it belongs to the denominator only.

**6. a** — *The product law applies; the quotient law does not.* Both limits exist, so lim fg = 0 × 0 = 0. For the quotient the denominator's limit is 0, so the quotient law gives nothing at all: the form is 0/0, which is indeterminate. (b) is the "0/0 cancels to 1" reflex; take f = 2x, g = x at 0, whose quotient tends to 2. (c) is the "zero on top makes the whole thing zero" reflex, which ignores that the bottom is also collapsing. (d) treats indeterminate as synonymous with non-existent; with f = 2x, g = x the limit exists and is 2, so the form alone decides nothing.

**7. a** — *Cancelling changes the formula but not the domain.* (x² − 1)/(x − 1) = (x−1)(x+1)/(x−1) = x + 1 for x ≠ 1, so the limit is 2, while f(1) is undefined — a hole, repairable by defining f(1) = 2. (b) is the reflex that any zero denominator means an asymptote; here the zero cancels. (c) describes what |x−1|/(x−1) would do, which is a genuinely different function. (d) simplifies and then forgets that x = 1 was thrown out of the domain to do so — the simplified line is not equal to f at that point.

**8. b** — *Squeezing needs bounds on both sides with the same limit.* Trapping f between −x² and x², both of which tend to 0, forces f to 0. (a) and (d) give an upper bound only: f could plunge to −∞ or oscillate below and still satisfy them. (c) confuses bounded with squeezed — sin(1/x) is bounded near 0 and has no limit there.

**9.** *Concept: the limit is determined by values near a, never by the value at a.* The limit at 2 depends only on f(x) for x close to but different from 2, so the presence or absence of f(2) is irrelevant to it. **Limit but no value:** f(x) = (x² − 4)/(x − 2); f(2) is 0/0, undefined, but for x ≠ 2 the function equals x + 2, so lim_{x→2} f(x) = 4. **Value but no limit:** f(x) = 1 for x < 2 and f(x) = 3 for x ≥ 2; f(2) = 3 is perfectly well defined, but the left limit is 1 and the right limit is 3, so no two-sided limit exists. The two ideas are independent, and continuity is exactly the special case where both exist and coincide.

**10.** *Concept: existence of a two-sided limit is precisely agreement of the two one-sided limits.* lim_{x→a} f(x) = L if and only if lim_{x→a⁻} f(x) and lim_{x→a⁺} f(x) both exist and both equal L. For f(x) = |x|: on the right |x| = x → 0, on the left |x| = −x → 0; the two agree, so the limit is **0**. For f(x) = |x|/x: on the right |x| = x, so the quotient is the constant **1**; on the left |x| = −x, so the quotient is the constant **−1**. Both one-sided limits exist, but 1 ≠ −1, so the two-sided limit **does not exist** — a jump. Note that nothing here is caused by the denominator being zero; it is caused by the absolute value changing sign rule at 0.

**11.** *Concept: indeterminate means "no information yet", infinite means "information, now check the sign".* **0/0** arises when numerator and denominator both vanish at a. It is indeterminate because the answer can be anything: 2x/x → 2, x²/x → 0, x/x² → ±∞. It never means the limit fails; it means the shared factor must be removed — factor and cancel, rationalise a surd with its conjugate, combine stacked fractions, or apply L'Hôpital's rule. **5/0** arises when only the denominator vanishes. It is *not* indeterminate: the quotient necessarily grows without bound, so the answer is +∞ or −∞ and the remaining work is a sign check on each side (numerator sign against the sign of the denominator as x → a⁻ and as x → a⁺). If the two sides give opposite infinities, the two-sided limit does not exist. Factoring and L'Hôpital are both wrong moves here — L'Hôpital applied to 5/0 will confidently return a finite number that is not the limit.

**12.** *Concept: the Squeeze (Sandwich) theorem replaces a factor with no limit by bounds that do have one.* **Statement:** if g(x) ≤ f(x) ≤ h(x) for all x in some interval around a (except possibly at a itself), and lim_{x→a} g(x) = lim_{x→a} h(x) = L, then lim_{x→a} f(x) = L. **Application:** for every x ≠ 0, −1 ≤ sin(1/x) ≤ 1. Multiplying through by x² ≥ 0 (which preserves the inequalities) gives −x² ≤ x² sin(1/x) ≤ x². Since lim_{x→0} (−x²) = 0 and lim_{x→0} x² = 0, the middle function is squeezed to **0**. **Why not the product law:** it requires *both* factors to have limits, and lim_{x→0} sin(1/x) does not exist — as x → 0 the argument 1/x runs off to infinity and the sine oscillates between −1 and 1 without settling. So the product law's hypothesis fails and it may not be invoked; the boundedness of the oscillating factor, plus a factor going to 0, is exactly what the Squeeze theorem is for.
