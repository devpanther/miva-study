# Thursday — MTH_102 nightly check

*Problems-only session on Week 3. Evaluate limits by her four methods.*

*Direct substitution on polynomials and rational functions.*

*Factorization and cancellation for 0/0.*

*Clearing a complex fraction by its common denominator, with the −1 rewrite.*

*Multiplying by the conjugate of the numerator for square roots.*

*And L'Hôpital's Rule, with the form re-checked after each application.*

*Includes both TASKs the lecturer set — lim x→3 (x³ − 27)/(x − 3) and lim x→4 (1/√x − 1/2)/(x − 4) — plus one wrong solution to diagnose.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Evaluate lim x→4 (x² + 3x − 5).
A. 28
B. 33
C. 23
D. 15

**2.** Evaluate lim x→1 (x³ − 2)/(x² − 5).
A. 1/4
B. −1/4
C. −4
D. Does not exist

**3.** Evaluate lim x→3 (x² − 9)/(x − 3).
A. 0
B. 3
C. Does not exist
D. 6

**4.** Evaluate lim x→0 (√(x + 4) − 2)/x.
A. 1/2
B. 1/4
C. 0
D. Does not exist

**5.** Evaluate lim x→3 (1/x − 1/3)/(x − 3).
A. −1/9
B. 1/9
C. −1/3
D. 0

**6.** Evaluate lim x→0 (sin x)/(3x).
A. 3
B. 0
C. 1/3
D. 1

**7.** Evaluate lim x→1 (2x + 3)⁴.
A. 20
B. 625
C. 125
D. 81

**8.** A student writes: lim x→2 (x² − 4)/(x − 2) = (4 − 4)/(2 − 2) = 0/0 = 0, so the limit is 0. What is wrong?
A. Nothing — 0/0 evaluates to 0
B. The answer 0 is right but the working should cite the quotient property
C. The limit does not exist, because the function is undefined at x = 2
D. 0/0 is indeterminate, not 0; factoring and cancelling gives lim x→2 (x + 2) = 4

**9.** Work the slide 11 TASK in full: evaluate lim x→4 (1/√x − 1/2)/(x − 4). Show the common denominator, the factorization of x − 4, and the −1 rewrite.
*(short answer)*

**10.** Evaluate lim x→9 (√x − 3)/(x − 9) using her conjugate method. Show every line.
*(short answer)*

**11.** Evaluate lim x→∞ x³/eˣ. State how many times you apply L'Hôpital's Rule and what tells you to stop.
*(short answer)*

**12.** Evaluate lim x→2 (x² + 3x − 10)/(x − 2) by factorization, then verify the answer by a second method from the deck.
*(short answer)*

## Answers

**1. C** — Substituting gives (4)² + 3(4) − 5 = 16 + 12 − 5 = 28 − 5 = 23. Option 1 stops at 16 + 12 and never subtracts the 5 — exactly the slip her slide 4 layout is designed to prevent by writing the 15 − 3 line out. Option 2 flips the sign of the constant and adds 5. Option 4 reads 4² as 4 × 2 = 8, giving 8 + 12 − 5. No method is needed here: substitution gives a well-defined expression, so it is the answer.

**2. A** — (1³ − 2)/(1² − 5) = (1 − 2)/(1 − 5) = (−1)/(−4) = 1/4. Two negatives divide to a positive. Option 2 handles one minus and forgets the other, which is the commonest error on this shape. Option 3 inverts the fraction, reading −4/−1. Option 4 treats a negative denominator as a failure of substitution; it is not — only a zero denominator with a zero numerator stops you, as slide 5 shows with 5/(−2).

**3. D** — Substitution gives 0/0, so factor: x² − 9 = (x − 3)(x + 3), cancel the common factor and substitute again into x + 3 to get 3 + 3 = 6. Option 1 reads 0/0 as 0. Option 2 substitutes into the numerator's remaining factor without adding the 3, or stops at x. Option 3 mistakes 'undefined at the point' for 'the limit fails to exist' — the function is indeed undefined at 3, and the limit is still 6.

**4. B** — Multiply top and bottom by √(x + 4) + 2. The numerator becomes (x + 4) − 4 = x, so the x cancels and you are left with 1/(√(x + 4) + 2) → 1/(2 + 2) = 1/4. Option 1 forgets the '+ 2' still sitting in the denominator and evaluates 1/√4. Option 3 substitutes into the original numerator and stops at 0/0 read as 0. Option 4 repeats the 0/0-means-non-existence error.

**5. A** — Multiply numerator and denominator by the common denominator 3x: the top becomes 3 − x, the bottom 3x(x − 3). Write 3 − x = −1(x − 3), cancel, and you have −1/(3x) = −1/(3(3)) = −1/9. Option 2 cancels 3 − x against x − 3 without the −1 and loses the sign, which is the error slide 7 is built to prevent. Option 3 cancels correctly but drops the x from 3x, substituting nothing. Option 4 is the 0/0-means-0 error again.

**6. C** — The form is 0/0. With f(x) = sin x and g(x) = 3x, f′(x) = cos x and g′(x) = 3, so the limit is cos(0)/3 = 1/3. Option 1 inverts the fraction. Option 2 substitutes into the original and reads 0/0 as 0. Option 4 recalls slide 12's answer of 1 and forgets that the denominator's derivative is 3, not 1 — the tell that a memorised answer was used instead of the rule.

**7. B** — By the power property, [lim x→1 (2x + 3)]⁴ = (2 + 3)⁴ = 5⁴ = 625. Option 1 multiplies by the exponent instead of raising to it, 4 × 5. Option 3 raises to the wrong power, 5³. Option 4 substitutes into the constant term only, 3⁴, dropping the 2x. Her slide 21 does exactly this in three lines — limit, then power, then arithmetic.

**8. D** — 0/0 is a signal to keep working, not a value. Factor the numerator as (x − 2)(x + 2), cancel the (x − 2) — legitimate because x is near 2 but never equal to 2 — and substitute to get 4. Option 1 states the error itself. Option 2 accepts a wrong number and compounds it by quoting the quotient property, which is unavailable here precisely because lim (x − 2) = 0 violates its proviso. Option 3 swaps one wrong conclusion for another: undefined at the point and no limit at the point are different claims, and this function has a perfectly good limit of 4.

**9.** A good answer clears the complex fraction first: the common denominator of 1/√x and 1/2 is 2√x, so 1/√x − 1/2 = (2 − √x)/(2√x), and the whole expression is (2 − √x)/[2√x(x − 4)]. It then factors the denominator as a difference of squares in √x, x − 4 = (√x − 2)(√x + 2), and rewrites 2 − √x = −1(√x − 2) — the same move as slide 7 — so the (√x − 2) cancels, leaving −1/[2√x(√x + 2)]. Substituting x = 4: −1/[2(2)(2 + 2)] = −1/16. Credit naming where the minus comes from (the −1 rewrite, nothing else) and noting that the slide gives no answer, so the check is to substitute a value close to 4, say x = 4.1, and confirm the expression is small and negative.

**10.** A good answer multiplies numerator and denominator by the conjugate of the numerator, √x + 3: lim x→9 [(√x − 3)/(x − 9)]·[(√x + 3)/(√x + 3)] = lim x→9 (x − 9)/[(x − 9)(√x + 3)], since (√x − 3)(√x + 3) = x − 9 exactly. Cancel the common (x − 9) to get lim x→9 1/(√x + 3) = 1/(√9 + 3) = 1/(3 + 3) = 1/6. It should state first that substitution gives (3 − 3)/(9 − 9) = 0/0, which is what licenses the method, and should keep the '+ 3' in the final denominator — dropping it and writing 1/√9 = 1/3 is the standard wrong answer here. Structurally this is her slide 10 example with 4 replaced by 9.

**11.** A good answer notes the form is ∞/∞ and applies the rule three times, re-checking after each: x³/eˣ → 3x²/eˣ (still ∞/∞) → 6x/eˣ (still ∞/∞) → 6/eˣ. At that point the numerator is the constant 6 and eˣ grows without bound, so the form is no longer indeterminate and the limit is 0. What tells you to stop is re-substitution, not the number of steps — her slide 13 wording is 'since direct substitution results to an indeterminate form, so we differentiate again', so the test is applied fresh each time. Note that eˣ differentiates to itself and so never changes, which is why the numerator is the only thing that can end the process, and why an exponential beats every power.

**12.** A good answer substitutes first: (4 + 6 − 10)/(2 − 2) = 0/0, indeterminate, so factorize. The quadratic factors as (x + 5)(x − 2), giving lim x→2 [(x + 5)(x − 2)]/(x − 2) = lim x→2 (x + 5) = 7 after cancelling the common factor. The verification uses L'Hôpital, which the 0/0 form licenses: f(x) = x² + 3x − 10 and g(x) = x − 2 give f′(x) = 2x + 3 and g′(x) = 1, so the limit is (2(2) + 3)/1 = 7. Both methods give 7. Credit the habit itself — when two of her methods apply to the same problem, running both is a free check, and it is the only check available on the TASK slides, which give no answers.
