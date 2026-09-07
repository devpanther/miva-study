# Thursday — MTH_102 nightly check

*Week 4 of Elementary Mathematics II worked as problems: taking numbers off graphs and out of formulas.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** f(x) = (x² − 4)/(x² − 5x + 6). Classify the discontinuities at x = 2 and at x = 3.
A. Infinite at 2, removable at 3
B. Removable at both
C. Infinite at both
D. Removable at 2, infinite at 3

**2.** f(x) = kx − 1 for x ≤ 1 and f(x) = x² + 2 for x > 1. Find the value of k that makes f continuous at x = 1.
A. k = 4
B. k = 3
C. k = 2
D. k = −4

**3.** h(x) = |x|/x. Find lim(x→0⁻) h(x), lim(x→0⁺) h(x) and lim(x→0) h(x).
A. 1, 1, 1
B. −1, 1, DNE
C. −1, 1, 0
D. 0, 0, 0

**4.** Find lim(x→3⁻) (x + 2)/(x − 3).
A. 5
B. +∞
C. −∞
D. 0

**5.** f(x) = x + 1 for x < 0; f(x) = x² for 0 ≤ x < 2; f(x) = 6 − x for x ≥ 2. At which of the points x = 0 and x = 2 is f discontinuous?
A. x = 0 only
B. x = 2 only
C. Both x = 0 and x = 2
D. Neither

**6.** On a graph, both branches of a curve run into an open circle at (2, 3), and a solid dot sits at (2, 0). Which single change makes f continuous at x = 2?
A. Redefine f(2) = 0
B. Redefine f(2) = 1.5
C. No single value can work
D. Redefine f(2) = 3

**7.** f(x) = |x − 1| + 1/(x + 2). At which x is f discontinuous?
A. x = 1 only
B. x = −2 only
C. x = 1 and x = −2
D. Nowhere

**8.** Which set of readings makes lim(x→c) f(x) exist while f is still discontinuous at c?
A. lim(x→c⁻) f(x) = 4, lim(x→c⁺) f(x) = 1, f(c) = 4
B. lim(x→c⁻) f(x) = 4, lim(x→c⁺) f(x) = 4, f(c) = 4
C. lim(x→c⁻) f(x) = 4, lim(x→c⁺) f(x) = 4, f(c) = 1
D. lim(x→c⁻) f(x) = +∞, lim(x→c⁺) f(x) = 4, f(c) = 4

**9. (show your working)** A graph has a vertical dashed line at x = −1. To its left the curve climbs upward hugging the line; to its right it plunges downward hugging the line. There is no dot at x = −1. State lim(x→−1⁻) f(x), lim(x→−1⁺) f(x), lim(x→−1) f(x) and f(−1), classify the discontinuity, and say whether choosing a value for f(−1) could repair it. Show your working.

**10. (show your working)** f(x) = x² for x < 1; f(x) = ax + b for 1 ≤ x < 3; f(x) = 2x + 1 for x ≥ 3. Find a and b so that f is continuous at both x = 1 and x = 3. Show your working.

**11. (show your working)** f(x) = (x² − 4)/(x − 2) for x < 2, and f(x) = 3x − 2 for x ≥ 2. Decide whether f is continuous at x = 2 by checking the three conditions. Show your working.

**12. (show your working)** At x = 4 both branches of a graph run into an open circle at (4, 2), and a solid dot sits at (4, 7). A student writes 'jump discontinuity, because the graph jumps from 2 to 7'. Explain what the student has confused and give the correct classification.

---

## Answers

**1. D** — *Classifying the discontinuities of a rational function.* Factor: (x − 2)(x + 2) / ((x − 2)(x − 3)) = (x + 2)/(x − 3) for x ≠ 2. At x = 2 the factor cancels and lim(x→2) f(x) = 4/(−1) = −4, a finite limit with f(2) undefined: removable (a hole at (2, −4)). At x = 3 the reduced denominator is still 0 while the numerator is 5, so the one-sided limits are ±∞: infinite (vertical asymptote).

'Infinite at 2, removable at 3' swaps the two points; 'removable at both' cancels a factor that is not there; 'infinite at both' reads the zeros of the denominator without factoring first.

**2. A** — *Choosing a constant to make a piecewise function continuous.* Continuity at the join needs the two one-sided limits to agree with f(1). Left (and value): k(1) − 1 = k − 1. Right: 1² + 2 = 3. Set k − 1 = 3, so k = 4. Check: both pieces give 3 at x = 1.

k = 3 forgets the −1 and equates k to 3 directly; k = 2 moves the 1 across with the wrong sign (k + 1 = 3); k = −4 substitutes x = −1 instead of x = 1 into the left piece.

**3. B** — *One-sided limits of |x|/x at 0.* For x < 0, |x| = −x so h(x) = −x/x = −1; for x > 0, |x| = x so h(x) = 1. Hence lim(x→0⁻) h(x) = −1 and lim(x→0⁺) h(x) = 1. The sides disagree, so lim(x→0) h(x) = DNE (a jump at 0, with h(0) undefined).

'1, 1, 1' treats |x| as x on the left; '−1, 1, 0' averages the two sides instead of declaring DNE; '0, 0, 0' confuses h with |x| itself.

**4. C** — *Sign analysis of a one-sided limit at a vertical asymptote.* As x → 3⁻ the numerator tends to 5 (positive) while the denominator x − 3 is a small negative number (x is just below 3). Positive over small negative is large negative, so the limit is −∞; the graph plunges down the left side of the asymptote x = 3.

5 stops at the numerator and ignores the denominator; +∞ gets the sign of x − 3 wrong for x just below 3; 0 treats a nonzero number over zero as if it were zero over something.

**5. A** — *Locating the discontinuities of a piecewise function.* At x = 0: left limit 0 + 1 = 1, right limit 0² = 0; they differ, so f is discontinuous at 0 (a jump). At x = 2: left limit 2² = 4, right limit 6 − 2 = 4, and f(2) = 6 − 2 = 4; all three agree, so f is continuous at 2.

'x = 2 only' checks 2 with the wrong pieces or misreads 1 = 0; 'both' assumes every join is a break; 'neither' evaluates f(0) = 0 and f(2) = 4 and stops without comparing the sides.

**6. D** — *Repairing a removable discontinuity.* Both sides approach height 3, so lim(x→2) f(x) = 3 exists; the only failure is f(2) = 0 ≠ 3. Moving the dot up to (2, 3) fills the hole and all three conditions hold, so redefine f(2) = 3.

f(2) = 0 is what it already is, and it is off the curve; 1.5 averages the value and the limit, which fixes nothing; 'no single value' would be right for a jump or an asymptote, but here the limit exists.

**7. B** — *Corner versus asymptote when locating discontinuities.* |x − 1| is defined everywhere and has a sharp corner at x = 1, but a corner is not a break: its limit at 1 is 0 = |1 − 1|. The term 1/(x + 2) is undefined at x = −2 and its one-sided limits there are ±∞, a vertical asymptote. So the only discontinuity is at x = −2 (infinite).

'x = 1 only' mistakes the corner for a break and ignores the division by zero; 'both' counts the corner as well; 'nowhere' overlooks that 1/(x + 2) has no value at −2.

**8. C** — *Limit exists but continuity fails.* The limit exists when both one-sided limits are the same finite number, and continuity then needs that number to equal f(c). Readings 4, 4 with f(c) = 1 give a limit of 4 that does not match the value: the limit exists, continuity fails (removable).

4, 1, 4 has unequal sides, so the limit itself does not exist; 4, 4, 4 satisfies all three conditions, so f is continuous; +∞, 4, 4 has an unbounded side, so the limit does not exist.

**9.** *Reading an infinite discontinuity from a graph.* Left: the curve rises without bound as x → −1 from below, so lim(x→−1⁻) f(x) = +∞. Right: it falls without bound, so lim(x→−1⁺) f(x) = −∞. Neither is a real number (and they disagree), so lim(x→−1) f(x) = DNE. There is no solid dot, so f(−1) is undefined.

This is an infinite discontinuity with a vertical asymptote at x = −1. It cannot be repaired: the limit does not exist, so no value assigned to f(−1) can equal it. A correct answer gives +∞, −∞, DNE, undefined (or DNE), 'infinite', and 'no, because the limit does not exist'. Writing lim(x→−1) f(x) = ∞ as if it were a value, or suggesting a very large f(−1), is wrong.

**10.** *Two constants for continuity at two joins.* At x = 1: left limit 1² = 1; right limit and value a(1) + b = a + b. Continuity needs a + b = 1. At x = 3: left limit 3a + b; right limit and value 2(3) + 1 = 7. Continuity needs 3a + b = 7. Subtract the first equation from the second: 2a = 6, so a = 3, then b = 1 − 3 = −2.

Final answer: a = 3, b = −2, so the middle piece is 3x − 2. Check: 3(1) − 2 = 1 and 3(3) − 2 = 7. A correct answer sets up both equations from matching one-sided limits and solves them; a = 3 with b = 2 (sign slip) or a + b = 1 alone (only one join checked) is wrong.

**11.** *Continuity at a join where one piece needs factoring.* (i) x = 2 belongs to the second piece: f(2) = 3(2) − 2 = 4, defined. (ii) Left: for x < 2, (x² − 4)/(x − 2) = (x − 2)(x + 2)/(x − 2) = x + 2, so lim(x→2⁻) f(x) = 4; substituting 2 directly gives 0/0, which is why you factor. Right: lim(x→2⁺) (3x − 2) = 4. The sides agree, so lim(x→2) f(x) = 4. (iii) 4 = f(2).

All three hold, so f is continuous at x = 2. A correct answer shows the factor-and-cancel step giving 4 on the left, 4 on the right, f(2) = 4, and concludes 'continuous'. Claiming the left limit is undefined because of 0/0, or evaluating f(2) with the first piece, is wrong.

**12.** *Removable versus jump classification from a graph.* The student compared the limit with the function value instead of comparing the two one-sided limits. A jump means the left and right branches run into different heights; here both branches run into the same height, 2, so lim(x→4) f(x) = 2 exists. The dot at (4, 7) is f(4), which is simply off the curve. That is the removable case: the limit exists but does not equal f(4), and redefining f(4) = 2 would repair it.

A correct answer says the test for a jump is left limit versus right limit (not limit versus value), notes both sides give 2, and classifies the point as a removable discontinuity (a hole with a misplaced dot).
