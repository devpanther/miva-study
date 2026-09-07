# Monday — MTH_102 nightly check

*Conceptual session on Week 3, exactly as the lecturer builds it.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

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

**9. (show your working)** Evaluate lim(x→0) (eˣ − 1)/x using L'Hôpital's Rule. Name f(x), g(x), f′(x) and g′(x) in your working.

**10. (show your working)** Show that lim(x→5) 1/x² equals 1/[lim(x→5) x²] by evaluating each side separately. Show your working.

**11. (show your working)** Evaluate lim(x→0) (√(x + 1) − 1)/x. Show your working.

**12. (show your working)** In lim(x→2) (x² − 4)/(x − 2), the factor (x − 2) is cancelled even though x − 2 = 0 at x = 2. Explain why the cancellation is legitimate, and why the limit is 4 although the function is undefined at x = 2.

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

**9.** *L'Hôpital's Rule, first application.* Substitution gives (1 − 1)/0 = 0/0, an indeterminate form, so L'Hôpital applies. Set f(x) = eˣ − 1 and g(x) = x; then f′(x) = eˣ and g′(x) = 1. Replace the quotient by f′/g′: lim(x→0) eˣ/1 = e⁰ = 1.

Final answer: 1. A correct answer checks the 0/0 form, differentiates top and bottom separately (not the quotient rule), and evaluates eˣ at 0. Any working containing g² is the quotient rule and is wrong.

**10.** *Verifying the reciprocal property.* Left-hand side: lim(x→5) 1/x² = 1/5² = 1/25 by substitution. Right-hand side: lim(x→5) x² = 25, so 1/[lim x²] = 1/25. Both sides are 1/25, so L.H.S = R.H.S.

Final answer: both sides equal 1/25 (0.04). A correct answer computes the two sides independently and notes that the reciprocal property is valid here because lim x² = 25 ≠ 0.

**11.** *Limit by multiplying by the conjugate.* Substitution gives (1 − 1)/0 = 0/0. Multiply numerator and denominator by the conjugate of the numerator, √(x + 1) + 1: the numerator becomes (x + 1) − 1 = x, giving x/[x(√(x + 1) + 1)]. Cancel x: lim(x→0) 1/(√(x + 1) + 1) = 1/(1 + 1) = 1/2.

Final answer: 1/2 (0.5). A correct answer names the conjugate √(x + 1) + 1, shows the numerator collapsing to x, and cancels before substituting. 1 (forgetting the + 1 in the denominator) and 0 (reading 0/0 as 0) are wrong.

**12.** *Why cancelling a common factor inside a limit is legitimate.* Inside a limit, x approaches 2 but never equals 2, so x − 2 is close to zero but never actually zero, and dividing by it is allowed. After cancelling, (x² − 4)/(x − 2) = x + 2 at every x except 2, and the limit only looks at values near 2, not at 2 itself, so lim(x→2) (x + 2) = 4.

A correct answer says x ≠ 2 throughout the limit, that the simplified function agrees with the original everywhere except at the single point x = 2, and that a limit never inspects the point itself, so f(2) being undefined does not stop the limit being 4.
