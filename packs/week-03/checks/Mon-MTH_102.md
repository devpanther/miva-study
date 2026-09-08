# Monday — MTH_102 nightly check

*Conceptual session on Week 3, exactly as the lecturer builds it.*
*12 questions, straight after the hour. Score out of 12.*

**1.** Evaluate lim(x→−2) (x² + 3x − 1).
A. −3
B. −11
C. 9
D. 1

**2.** Which of these limits can be evaluated by direct substitution alone?
A. lim(x→2) (x² − 4)/(x − 2)
B. lim(x→1) (x³ + 2)/(x² − 4)
C. lim(x→0) (√(x + 9) − 3)/x
D. lim(x→0) (sin x)/x

**3.** Evaluate lim(x→3) (x² − 9)/(x − 3).
A. 0
B. DNE
C. 6
D. 3

**4.** lim(x→c) f(x) = 4 and lim(x→c) g(x) = −2. Find lim(x→c) [3f(x) − g(x)].
A. 10
B. 6
C. −24
D. 14

**5.** Evaluate lim(x→1) (2x + 1)³.
A. 27
B. 9
C. 3
D. 8

**6.** Evaluate lim(x→3) (2x²)/(5x).
A. 18/5
B. 6/5
C. 2/5
D. 90

**7.** If 4 − x² ≤ f(x) ≤ 4 + x² for all x, find lim(x→0) f(x).
A. 0
B. 8
C. 4
D. Cannot be found without knowing f

**8.** Direct substitution in lim(x→5) (x² − 25)/(x − 5) gives 0/0. Which conclusion is correct?
A. The limit is 0
B. The limit is 1
C. The limit does not exist
D. The limit may still exist; more algebra is needed

**9.** Evaluate lim(x→0) (eˣ − 1)/x by L'Hôpital's Rule. Which quotient f′(x)/g′(x) do you evaluate, and what is the limit?
A. eˣ/1, limit 1
B. eˣ/1, limit 0
C. eˣ/x, so the limit does not exist
D. (xeˣ − eˣ + 1)/x², limit 0

**10.** Evaluate lim(x→5) 1/x² and 1/[lim(x→5) x²] separately. What is the value they share?
A. 25
B. 1/10
C. 1/25
D. 1/5

**11.** Evaluate lim(x→0) (√(x + 1) − 1)/x.
A. 0
B. 1/2
C. 1
D. 2

**12.** In lim(x→2) (x² − 4)/(x − 2) the factor (x − 2) is cancelled even though x − 2 = 0 at x = 2. Why is that cancellation legitimate?
A. The form 0/0 equals 1, so the two copies of the factor cancel
B. Cancelling a common factor is allowed in any fraction, zero or not
C. After cancelling, the function is defined at x = 2, so the hole closes
D. x only approaches 2 and never equals it, so x − 2 is close to zero but never zero

---

## Answers

**1. A** — *Limit by direct substitution.* The expression is a polynomial, so substitute x = −2: (−2)² + 3(−2) − 1 = 4 − 6 − 1 = −3.

−11 treats (−2)² as −4; 9 loses the sign of x in the 3x term (4 + 6 − 1); 1 adds the constant instead of subtracting it (4 − 6 + 1).

**2. B** — *Recognising when substitution applies.* Substitution works when it gives a well-defined expression. At x = 1, (x³ + 2)/(x² − 4) = 3/(−3) = −1: a negative denominator is a perfectly good non-zero number, so the limit is −1 by substitution.

The other three all give 0/0 at the point: (4 − 4)/(2 − 2), (3 − 3)/0 and (sin 0)/0. Each needs more work (factoring, the conjugate, L'Hôpital).

**3. C** — *Limit by factoring and cancelling.* Substitution gives 0/0, so factor: x² − 9 = (x − 3)(x + 3). Cancel the common factor (legal because x never equals 3 inside the limit) to get lim(x→3) (x + 3) = 6.

0 treats 0/0 as zero; DNE treats 0/0 as non-existence, but the form decides nothing; 3 substitutes into x alone after cancelling, forgetting the + 3.

**4. D** — *Sum, difference and constant multiple rules.* Split with the rules: lim [3f − g] = 3·lim f − lim g = 3(4) − (−2) = 12 + 2 = 14.

10 subtracts 2 instead of subtracting −2; 6 forgets the constant multiple 3 (4 + 2); −24 multiplies 3, 4 and −2 as if the rule were a product.

**5. A** — *Limit of a power.* Take the limit first, then the power: [lim(x→1) (2x + 1)]³ = (2 + 1)³ = 3³ = 27.

9 multiplies 3 by the exponent instead of cubing; 3 takes the limit and forgets the cube; 8 cubes the 2x and drops the + 1.

**6. B** — *Limit of a quotient.* The limit of the denominator is 15 ≠ 0, so the quotient rule applies: [lim 2x²]/[lim 5x] = 2(9)/(5·3) = 18/15 = 6/5.

18/5 forgets the x in the denominator; 2/5 cancels x² against x completely instead of leaving one x; 90 multiplies 18 by 5 instead of dividing.

**7. C** — *Squeeze Theorem.* Both bounds have the same limit at 0: lim (4 − x²) = 4 and lim (4 + x²) = 4. f is trapped between them, so by the Squeeze Theorem lim(x→0) f(x) = 4.

0 takes the limit of x² alone; 8 adds the two bounds; 'cannot be found' misses the point of the theorem, which gives the limit without a formula for f.

**8. D** — *Meaning of the indeterminate form 0/0.* 0/0 is indeterminate: the form itself decides nothing, so you must do more algebra. Here factoring gives lim (x + 5) = 10, a perfectly good limit.

'The limit is 0' treats 0/0 as ordinary division into zero; 'the limit is 1' treats any number over itself as 1; 'does not exist' confuses the function being undefined at 5 with the limit failing.

**9. A** — *L'Hôpital's Rule, first application.* Substituting x = 0 gives (1 − 1)/0 = 0/0, an indeterminate form, so the rule is allowed. Take f(x) = eˣ − 1 and g(x) = x separately, so f′(x) = eˣ and g′(x) = 1, and the new quotient is eˣ/1, whose value at 0 is e⁰ = 1.

eˣ/x differentiates only the numerator, (xeˣ − eˣ + 1)/x² applies the quotient rule instead of the rule itself, and reading e⁰ as 0 gives the limit 0.

**10. C** — *Verifying the reciprocal property.* Direct substitution on the left gives 1/5² = 1/25. On the right, lim(x→5) x² = 25 first, and then the reciprocal is 1/25. Both sides come to 1/25, or 0.04, which is what the reciprocal property predicts, and it is valid here because lim x² = 25 is not zero.

25 forgets to take the reciprocal at all, 1/5 forgets to square, and 1/10 comes from differentiating x² instead of substituting into it.

**11. B** — *Limit by multiplying by the conjugate.* Substitution gives (1 − 1)/0 = 0/0, so multiply top and bottom by the conjugate √(x + 1) + 1. The numerator collapses to (x + 1) − 1 = x, leaving x/[x(√(x + 1) + 1)], and cancelling x gives 1/(√(x + 1) + 1), which at x = 0 is 1/(1 + 1) = 1/2.

1 comes from forgetting the + 1 left in the denominator, 0 comes from reading 0/0 as zero, and 2 inverts the final fraction.

**12. D** — *Why cancelling a common factor inside a limit is legitimate.* Inside a limit x runs towards 2 without ever arriving, so x − 2 is a small nonzero number throughout and dividing by it is legal. Once cancelled, the expression equals x + 2 at every x except 2 itself, and a limit only inspects nearby values, so lim(x→2) (x + 2) = 4 even though f(2) is undefined.

0/0 is not 1, cancelling a genuinely zero factor is not allowed, and cancelling does not change the original function's domain.
