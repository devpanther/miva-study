# Thursday — MTH_102 nightly check

*Week 4 of Elementary Mathematics II worked as problems: taking numbers off graphs and out of formulas.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** A vertical dashed line sits at x = −1. To its left the curve climbs upward hugging the line; to its right it plunges downward hugging the line. There is no dot at x = −1. Give lim(x→−1⁻) f(x), lim(x→−1⁺) f(x), lim(x→−1) f(x), f(−1), the type of discontinuity, and whether choosing a value for f(−1) repairs it.
A. +∞, −∞, DNE, undefined; infinite, not repairable
B. +∞, −∞, ∞, f(−1) = ∞; infinite, repairable by setting f(−1) = ∞
C. −∞, +∞, DNE, undefined; jump, not repairable
D. +∞, −∞, DNE, undefined; removable, repairable by setting f(−1) = 0

**10.** f(x) = x² for x < 1; f(x) = ax + b for 1 ≤ x < 3; f(x) = 2x + 1 for x ≥ 3. Find a and b so that f is continuous at both x = 1 and x = 3.
A. a = 2, b = −1
B. a = 4, b = −3
C. a = 3, b = −2
D. a = 3, b = 2

**11.** f(x) = (x² − 4)/(x − 2) for x < 2, and f(x) = 3x − 2 for x ≥ 2. Give f(2), the left limit and the right limit at x = 2, and say whether f is continuous there.
A. f(2) = 4, left undefined because of 0/0, right 4; not continuous
B. f(2) = 0, left 4, right 4; not continuous
C. f(2) = 4, left 0, right 4; not continuous
D. f(2) = 4, left 4, right 4; continuous

**12.** At x = 4 both branches of a graph run into an open circle at (4, 2), and a solid dot sits at (4, 7). A student calls this a jump discontinuity because the graph jumps from 2 to 7. What is the correct classification, and what was confused?
A. Jump; the student is right, since the heights 2 and 7 differ
B. Removable; a jump needs the two one-sided limits to differ, but here both are 2
C. Infinite; a gap of 5 between the curve and the dot is a break of infinite type
D. Removable; the limit is 7 and the value f(4) = 2

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

**9. A** — *Reading an infinite discontinuity from a graph.* Climbing without bound on the left gives lim(x→−1⁻) f(x) = +∞ and plunging on the right gives lim(x→−1⁺) f(x) = −∞. Neither is a real number and they disagree, so lim(x→−1) f(x) is DNE, and with no dot drawn f(−1) is undefined. A vertical asymptote like this is an infinite discontinuity, and no choice of f(−1) can repair it, because repair requires a limit to match and there is none.

Writing the limit as ∞ treats a failure as a value, swapping the signs misreads the two branches, and 'removable' would need both sides to run into the same finite height.

**10. C** — *Two constants for continuity at two joins.* Matching at x = 1: the left limit is 1² = 1 and the middle piece gives a + b, so a + b = 1. Matching at x = 3: the middle piece gives 3a + b and the right piece gives 2(3) + 1 = 7, so 3a + b = 7. Subtracting the first equation from the second gives 2a = 6, so a = 3 and b = 1 − 3 = −2, and the middle piece is 3x − 2, which checks out as 1 at x = 1 and 7 at x = 3.

b = 2 is a sign slip in the last step, and a = 2 or a = 4 comes from mismatching one of the two joins.

**11. D** — *Continuity at a join where one piece needs factoring.* x = 2 belongs to the second piece, so f(2) = 3(2) − 2 = 4 and the function is defined. On the left, substituting straight into (x² − 4)/(x − 2) gives 0/0, so factor: (x − 2)(x + 2)/(x − 2) = x + 2, and the left limit is 4. On the right, lim (3x − 2) = 4 as well, so the two-sided limit is 4 and equals f(2): f is continuous at x = 2.

Calling the left limit undefined mistakes 0/0 for an answer, a left limit of 0 reads the numerator alone, and f(2) = 0 uses the first piece where its condition fails.

**12. B** — *Removable versus jump classification from a graph.* The test for a jump compares the left limit with the right limit, not the limit with the value. Here both branches run into the same height, so lim(x→4) f(x) = 2 exists, and the dot at (4, 7) is simply f(4) sitting off the curve. A limit that exists but does not match the function value is the removable case, and redefining f(4) = 2 would close it up.

The last option has the limit and the value swapped, and 'infinite' would need a branch running off without bound.
