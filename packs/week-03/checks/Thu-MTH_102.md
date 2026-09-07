# Thursday — MTH_102 nightly check

*Problems-only session on Week 3. Evaluate limits by her four methods.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

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

**9. (show your working)** Evaluate lim(x→9) (1/√x − 1/3)/(x − 9). Show the common denominator, the factorisation of x − 9, and the −1 rewrite in your working.

**10. (show your working)** lim(x→c) f(x) = −3 and lim(x→c) g(x) = 2. Find lim(x→c) [f(x)²·g(x)], lim(x→c) f(x)/g(x) and lim(x→c) 1/f(x), naming the property used each time. Show your working.

**11. (show your working)** Evaluate lim(x→0) (1 − cos x)/x² using L'Hôpital's Rule. State how many times you apply it and what tells you to stop. Show your working.

**12. (show your working)** A student evaluates lim(x→2) (x² + 1)/(x − 1) by L'Hôpital's Rule: differentiating top and bottom gives 2x/1, so the answer is 4. Identify the error and give the correct limit.

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

**9.** *Complex fraction with a square root.* Common denominator of 1/√x and 1/3 is 3√x: 1/√x − 1/3 = (3 − √x)/(3√x), so the expression is (3 − √x)/[3√x(x − 9)]. Factor x − 9 = (√x − 3)(√x + 3) and write 3 − √x = −1(√x − 3). Cancel (√x − 3): lim(x→9) −1/[3√x(√x + 3)] = −1/[3(3)(3 + 3)] = −1/54.

Final answer: −1/54 (about −0.0185). A correct answer shows 3√x as the common denominator, the difference-of-squares factorisation of x − 9, and the −1 factored out; +1/54 (sign lost by cancelling 3 − √x against √x − 3 directly) is wrong.

**10.** *Combining limit properties with given limits.* Power and product: lim [f²·g] = [lim f]²·lim g = (−3)²(2) = 18. Quotient (lim g = 2 ≠ 0): lim f/g = −3/2. Reciprocal (lim f = −3 ≠ 0): lim 1/f = 1/(−3) = −1/3.

Final answer: 18, −3/2, −1/3. A correct answer names the power, product, quotient and reciprocal properties and notes the nonzero provisos are satisfied. −18 (squaring −3 to −9), 3/2 (sign lost) and −3 (reciprocal confused with the value) are wrong.

**11.** *L'Hôpital's Rule applied twice.* Substitution: (1 − 1)/0 = 0/0. First application: f′ = sin x, g′ = 2x, giving lim (sin x)/(2x), which at x = 0 is again 0/0, so apply the rule a second time: (cos x)/2, which at x = 0 is 1/2, a well-defined value, so stop.

Final answer: 1/2, after two applications. A correct answer re-checks the form after each application and stops the moment substitution gives a number. Applying the rule a third time (to −sin x/0) is wrong; stopping after one application and reading (sin 0)/0 = 0 is wrong.

**12.** *L'Hôpital's Rule needs an indeterminate form.* L'Hôpital's Rule may only be used when substitution gives an indeterminate form such as 0/0 or ∞/∞. Here substitution gives (4 + 1)/(2 − 1) = 5/1 = 5, which is well defined, so the rule does not apply and the answer 4 is wrong. The correct limit is 5, by direct substitution.

A correct answer states that the form was not indeterminate, that the rule was therefore not allowed, and gives 5 as the limit.
