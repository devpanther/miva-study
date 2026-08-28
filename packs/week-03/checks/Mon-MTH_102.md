# Monday — MTH_102 nightly check

*Limits theory: the limit laws and their conditions, indeterminate forms, and why each algebraic technique is allowed.*
*Sit cold, notes closed, 8 minutes. Score out of 6.*

**1.** lim_{x→2} f(x) = 6 and lim_{x→2} g(x) = 0. What can be concluded about lim_{x→2} f(x)/g(x)?
a) It is 0, since the quotient law gives 6/0 and anything over an infinite quantity vanishes
b) It does not exist, because the quotient law requires the denominator's limit to be non-zero
c) The quotient law does not apply, so nothing follows from it alone; the behaviour must be settled by examining the sign of g near 2, and here it is an infinite limit rather than a 0/0 case
d) It is 6, since g contributes nothing once its limit is 0

**2.** Substituting x = 4 into (x² − 3x − 4)/(x − 4) gives 0/0. This tells you:
a) The limit is 1, since any quantity divided by itself is 1
b) The limit does not exist, since the function is undefined at x = 4
c) The limit is 0, since the numerator approaches 0
d) Nothing about the value yet — only that substitution has failed and that (x − 4) is a common factor waiting to be cancelled

**3.** f is defined by f(x) = (x² − 9)/(x − 3) for x ≠ 3 and f(3) = 10. Then lim_{x→3} f(x) is:
a) 6, because the limit depends only on values of x near 3 with x ≠ 3, where f(x) = x + 3
b) 10, because the limit of a function at a point is its value there
c) It does not exist, because the defined value 10 disagrees with the surrounding values
d) 0/0, an indeterminate form, since the formula still breaks down at x = 3

**4.** Which use of L'Hôpital's Rule on lim_{x→1} (x² + 3)/(x − 1) is correct?
a) Apply it: the limit is lim 2x/1 = 2
b) Apply it using the quotient rule on the top and bottom together
c) Do not apply it: substitution gives 4/0, which is not an indeterminate form, so the rule's hypothesis fails and the limit must be handled as an infinite limit instead
d) Apply it twice, giving lim 2/0, which shows the limit does not exist

**5. (explain why)** In evaluating lim_{x→3} (x² − 9)/(x − 3) you cancel the factor (x − 3), even though at x = 3 that factor is zero and dividing by zero is forbidden. Explain precisely why the cancellation is legitimate, and what property of a limit makes it so.

**6. (explain why)** Explain why 0/0 is called an *indeterminate* form while 5/0 is not. Give two limits that both produce the form 0/0 but have different answers, and say what 5/0 actually tells you to do next.

---

## Answers

**1. c** — *The quotient law is a conditional statement; when its hypothesis (lim g ≠ 0) fails, the law is simply silent — it neither gives a value nor forbids one.* With lim f = 6 ≠ 0 and lim g = 0, the quotient is of the determinate form k/0, so |f/g| grows without bound; whether that is +∞, −∞ or a two-sided non-existence is decided by the sign of g on each side of 2. It is *not* 0/0, so no cancelling could help. (a) invents a rule and confuses 6/0 with 6/∞; (b) is the commonest error — treating a failed hypothesis as a proof of non-existence, when in fact plenty of 0-denominator cases (every 0/0 that cancels) have perfectly good limits; (d) treats "limit 0" as "contributes nothing", which is what happens in a *sum*, not a quotient.

**2. d** — *An indeterminate form is a report on the method, not on the function.* 0/0 says only that substitution cannot decide the limit. For a rational function it carries one concrete piece of information: since x = 4 is a root of both polynomials, the Factor Theorem guarantees (x − 4) divides both — here (x − 4)(x + 1)/(x − 4) = x + 1 → 5. (a) treats the symbols 0/0 as arithmetic; they are a limiting *form*, and both zeros arrive at different rates. (b) confuses "undefined at a point" with "no limit there" — the limit deliberately ignores x = 4. (c) reads only the numerator and ignores that the denominator is racing to zero as well.

**3. a** — *A limit is determined entirely by values of f at points near a with x ≠ a; the value f(a) is irrelevant to it.* For every x ≠ 3, f(x) = (x−3)(x+3)/(x−3) = x + 3, so the limit is 3 + 3 = 6. (The mismatch with f(3) = 10 means f is *discontinuous* at 3 — a different statement from the limit failing.) (b) is the substitution reflex applied where continuity has not been checked; it is only valid when f is continuous at a, which is exactly what is false here. (c) confuses discontinuity with non-existence of a limit — the one-sided limits are both 6, so the limit exists. (d) reports the form of the original formula while ignoring that the formula was already simplified for x ≠ 3.

**4. c** — *L'Hôpital's Rule applies only to the forms 0/0 and ∞/∞; the form must be checked before every application.* Here x = 1 gives 4/0, a determinate infinite form: as x → 1⁺ the value → +∞, as x → 1⁻ it → −∞, so the two-sided limit does not exist. (a) is the trap — the mechanics of the rule "work" and hand you the confident, wrong answer 2. (b) misremembers the rule as differentiating the quotient; it is f′/g′, two separate derivatives, not (f/g)′. (d) compounds the error by re-applying the rule to a form that was never eligible, and then reads a correct conclusion off invalid working.

**5.** *Concept: the limit at a depends only on the punctured neighbourhood of a — the values at x ≠ a.* By definition, lim_{x→a} f(x) concerns x satisfying **0 < |x − a| < δ**; the strict left-hand inequality excludes x = a itself, so the value (or non-value) of f at a never enters. Consequently the two functions (x² − 9)/(x − 3) and x + 3 are **equal at every point the limit inspects** — they differ only at x = 3, where the first is undefined. Two functions that agree on a punctured neighbourhood of 3 must have the same limit there, so lim_{x→3} (x² − 9)/(x − 3) = lim_{x→3} (x + 3) = 6. At no stage is anything divided by zero: the cancellation is performed under the standing assumption x ≠ 3, not at x = 3.

**6.** *Concept: indeterminate means the form alone does not determine the answer; determinate means it does.* 0/0 is indeterminate because both parts are shrinking and the answer depends on their **relative rates**, which the form hides: lim_{x→0} x²/x = 0, lim_{x→0} x/x = 1, lim_{x→0} 3x/x = 3 and lim_{x→0} x/x² = ∞ — every one is 0/0, and every answer is different. Since the form supplies no value, you must transform the expression (factor and cancel, rationalise, combine fractions, or apply L'Hôpital). 5/0 is **not** indeterminate: the numerator is settling on a non-zero number while the denominator shrinks, so the quotient's size necessarily grows without bound — the form *has* determined the magnitude. What is left to do is not algebra but signs: test the denominator on each side of a; matching infinities give lim = +∞ or −∞, opposite ones mean the limit does not exist.
