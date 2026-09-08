# Thursday — MTH_102 nightly check

*Problems-only session on Week 3. Evaluate limits by her four methods.*
*12 questions, straight after the hour. Score out of 12.*

**1.** Evaluate lim(x→0) (√(x + 16) − 4)/x.
A. 1/4
B. 0
C. 1/8
D. DNE

**2.** Evaluate lim(x→4) (1/x − 1/4)/(x − 4).
A. −1/16
B. 1/16
C. −1/4
D. −1/8

**3.** Evaluate lim(x→2) (x³ − 8)/(x − 2).
A. 0
B. 12
C. 8
D. 6

**4.** Evaluate lim(x→0) (sin 5x)/(2x).
A. 1
B. 5
C. 2/5
D. 5/2

**5.** Evaluate lim(x→2) (3x)/(x − 2).
A. DNE
B. 0
C. 6
D. 3

**6.** Evaluate lim(x→1) (x² − 1)/(x² − 3x + 2).
A. 2
B. −2
C. 2/3
D. 0

**7.** Evaluate lim(x→4) (x − 4)/(√x − 2).
A. 1/4
B. 0
C. 2
D. 4

**8.** The reciprocal property lim(x→c) 1/f(x) = 1/[lim(x→c) f(x)] holds provided
A. f(c) ≠ 0
B. lim(x→c) f(x) ≠ 1
C. lim(x→c) f(x) ≠ 0
D. f(x) ≠ 0 for every x

**9.** Evaluate lim(x→9) (1/√x − 1/3)/(x − 9).
A. −1/18
B. −1/54
C. 1/54
D. −1/108

**10.** lim(x→c) f(x) = −3 and lim(x→c) g(x) = 2. Find lim(x→c) [f(x)²·g(x)], lim(x→c) f(x)/g(x) and lim(x→c) 1/f(x), in that order.
A. −18, 3/2, −1/3
B. 18, −2/3, −3
C. 18, −3/2, −1/3
D. −18, −3/2, −1/3

**11.** Evaluate lim(x→0) (1 − cos x)/x² by L'Hôpital's Rule, and say how many applications are needed.
A. 0, after one application
B. 1/2, after one application
C. 1, after two applications
D. 1/2, after two applications

**12.** A student evaluates lim(x→2) (x² + 1)/(x − 1) by L'Hôpital's Rule, differentiating top and bottom to get 2x/1 and answering 4. Identify the error and give the correct limit.
A. Substitution gives 5/1, which is not indeterminate, so the rule does not apply; the limit is 5
B. The rule was applied twice instead of once; the limit is 2
C. The quotient rule should have been used on the whole fraction; the limit is 4
D. The rule was applied to the wrong variable; the limit is 4

---

## Answers

**1. C** — *Rationalising the numerator.* 0/0, so multiply by the conjugate √(x + 16) + 4: the numerator becomes (x + 16) − 16 = x, cancel with the x below, leaving 1/(√(x + 16) + 4) → 1/(4 + 4) = 1/8.

1/4 forgets the + 4 left in the denominator and uses 1/√16; 0 reads 0/0 as zero; DNE reads 0/0 as non-existence.

**2. A** — *Clearing a complex fraction inside a limit.* Multiply numerator and denominator by the common denominator 4x: (4 − x)/[4x(x − 4)]. Write 4 − x = −1(x − 4) and cancel: lim(x→4) −1/(4x) = −1/16.

1/16 cancels 4 − x against x − 4 without the −1 and loses the sign; −1/4 forgets the factor 4 in the denominator; −1/8 evaluates 4x as 8.

**3. B** — *Limit with a difference of cubes.* 0/0, so factor: x³ − 8 = (x − 2)(x² + 2x + 4). Cancel (x − 2): lim(x→2) (x² + 2x + 4) = 4 + 4 + 4 = 12. Check by L'Hôpital: 3x²/1 = 12.

0 reads 0/0 as zero; 8 uses the wrong factor x² + 4 (drops the middle term 2x); 6 uses x² + 2, dropping both the 2x and half the constant.

**4. D** — *L'Hôpital's Rule with one application.* 0/0, so differentiate top and bottom separately: f′(x) = 5 cos 5x, g′(x) = 2, giving lim(x→0) 5 cos(5x)/2 = 5(1)/2 = 5/2.

1 assumes every (sin ·)/(·) limit is 1 without matching the arguments; 5 forgets the 2 in the denominator; 2/5 inverts the answer.

**5. A** — *Nonzero over zero is not indeterminate.* Substitution gives 6/0, not 0/0. A nonzero number over a quantity shrinking to zero grows without bound: just above 2 the fraction is large positive, just below 2 it is large negative. No single value is approached, so the limit does not exist (DNE).

0 treats anything over 0 as 0; 6 ignores the denominator entirely; 3 applies L'Hôpital (3/1) to a form that is not indeterminate.

**6. B** — *Factoring both numerator and denominator.* 0/0, so factor both: (x − 1)(x + 1)/[(x − 1)(x − 2)]. Cancel (x − 1): lim(x→1) (x + 1)/(x − 2) = 2/(−1) = −2.

2 loses the sign of the denominator 1 − 2; 2/3 factors the denominator wrongly as (x − 1)(x + 2); 0 reads 0/0 as zero.

**7. D** — *Rationalising the denominator.* 0/0, and the root is in the denominator, so multiply by its conjugate √x + 2: the denominator becomes x − 4, which cancels with the numerator, leaving lim(x→4) (√x + 2) = 2 + 2 = 4.

1/4 is the reciprocal limit (√x − 2)/(x − 4), the wrong way up; 0 reads 0/0 as zero; 2 forgets the + 2 after cancelling and evaluates √x alone.

**8. C** — *Proviso on the reciprocal property.* The right-hand side divides by lim f(x), so that limit must be nonzero; the property carries exactly this proviso.

f(c) ≠ 0 is about the value at c, which a limit never inspects; lim f ≠ 1 is an invented condition; f(x) ≠ 0 for every x is not enough, since f(x) = x is never zero near 0 yet 1/x has no limit there because lim f = 0.

**9. B** — *Complex fraction with a square root.* Put the top over the common denominator 3√x: 1/√x − 1/3 = (3 − √x)/(3√x), so the whole expression is (3 − √x)/[3√x(x − 9)]. Factor x − 9 = (√x − 3)(√x + 3) and write 3 − √x = −(√x − 3); cancelling (√x − 3) leaves −1/[3√x(√x + 3)], which at x = 9 is −1/[3(3)(6)] = −1/54, about −0.0185.

+1/54 loses the minus by cancelling 3 − √x against √x − 3 directly, −1/18 drops the factor 3√x, and −1/108 doubles a factor in the denominator.

**10. C** — *Combining limit properties with given limits.* By the power and product rules, lim [f²·g] = (−3)²(2) = 9 × 2 = 18. The quotient rule applies because lim g = 2 ≠ 0, giving −3/2. The reciprocal rule applies because lim f = −3 ≠ 0, giving −1/3.

−18 squares −3 to −9, 3/2 loses the sign of f, and −2/3 and −3 come from inverting the quotient and confusing the reciprocal with the value itself.

**11. D** — *L'Hôpital's Rule applied twice.* Substitution gives (1 − 1)/0 = 0/0, so apply the rule: f′ = sin x and g′ = 2x give lim (sin x)/(2x), which at 0 is again 0/0. Apply it a second time: cos x over 2, which at 0 is 1/2, a definite number, and that is the signal to stop.

Stopping after one application and reading (sin 0)/0 as 0 gives the wrong answer, as does claiming 1/2 arrives in one step, and a third application would differentiate a quotient that is no longer indeterminate.

**12. A** — *L'Hôpital's Rule needs an indeterminate form.* L'Hôpital's Rule is only licensed when substitution produces an indeterminate form such as 0/0 or ∞/∞. Here substitution gives (4 + 1)/(2 − 1) = 5/1 = 5, a perfectly good number, so the rule is not available and the answer 4 is simply wrong. Direct substitution is the correct method and the limit is 5.

The other options accept the answer 4 and blame the wrong rule or the wrong variable, when the real fault is using the rule at all.
