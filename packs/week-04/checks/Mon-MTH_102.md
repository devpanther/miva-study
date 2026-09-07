# Monday — MTH_102 nightly check

*Week 4 of Elementary Mathematics II, taken conceptually.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** For x < 1 a curve rises and ends in an open circle at (1, 5). For x > 1 the curve begins at a solid dot at (1, 2) and continues to the right. Find lim(x→1⁻) f(x).
A. 2
B. DNE
C. 5
D. 1

**2.** At x = 3 both branches of a curve run into an open circle at (3, 4). A solid dot sits at (3, −1). State f(3).
A. −1
B. 4
C. Undefined
D. 3

**3.** g(x) = |x|. Find lim(x→0⁻) g(x) and g(0).
A. DNE and 0
B. −1 and 1
C. 0 and undefined
D. 0 and 0

**4.** lim(x→5⁻) f(x) = 2, lim(x→5⁺) f(x) = −2 and f(5) = 2. Find lim(x→5) f(x).
A. 2
B. DNE
C. −2
D. 0

**5.** A table gives f(2.9) = 5.8, f(2.99) = 5.98, f(2.999) = 5.998, and f(3.1) = 6.2, f(3.01) = 6.02, f(3.001) = 6.002. Estimate lim(x→3) f(x).
A. 6
B. 3
C. 5.998
D. DNE

**6.** The graph of f(x) = 3x + 5 is an unbroken straight line. Find lim(x→−2) f(x).
A. 5
B. 3
C. 11
D. −1

**7.** f(x) = x + 3 for every x ≠ 2, and f(2) = 9. Find lim(x→2) f(x) and say whether f is continuous at x = 2.
A. 9; continuous
B. 5; not continuous
C. 5; continuous
D. DNE; not continuous

**8.** lim(x→a⁻) f(x) = 1 and lim(x→a⁺) f(x) = 4. A student defines f(a) = 4 so that f becomes continuous at a. Why does this fail?
A. f(a) should be 1, the left-hand value
B. f(a) should be 2.5, the average of 1 and 4
C. lim(x→a) f(x) still does not exist
D. It does not fail; f is now continuous at a

**9. (show your working)** For x < −1 a curve falls and ends in an open circle at (−1, 2). For x > −1 the curve starts at a solid dot at (−1, 5) and continues. State lim(x→−1⁻) f(x), lim(x→−1⁺) f(x), lim(x→−1) f(x) and f(−1), and name the type of discontinuity. Show your working.

**10. (show your working)** f(x) = (x² − x − 6)/(x − 3). Find lim(x→3) f(x), state whether f(3) is defined, and name the type of discontinuity at x = 3. Show your working.

**11. (show your working)** f(x) = x² for x ≤ 1 and f(x) = 2 − x for x > 1. Check the three continuity conditions at x = 1 and state whether f is continuous there. Show your working.

**12. (show your working)** Explain why lim(x→c) f(x) exists only when lim(x→c⁻) f(x) and lim(x→c⁺) f(x) agree on the same finite real number. Describe both ways the criterion can fail and say what each looks like on a graph.

---

## Answers

**1. C** — *Left-hand limit from a described graph.* The left-hand limit is the height the curve runs into as x approaches 1 from values below 1. The left branch runs into the open circle at height 5, and an open circle still shows the approach height, so lim(x→1⁻) f(x) = 5.

2 is the right-hand limit and also f(1), read from the solid dot; DNE is the two-sided limit, which fails because 5 ≠ 2, but the question asks for one side only; 1 is the x-value, not a height.

**2. A** — *Function value from a shaded dot.* The value f(3) is the height of the solid (shaded) dot on the line x = 3, so f(3) = −1. The open circle marks a height the curve approaches but does not take.

4 is lim(x→3) f(x), the approach height, not the value; 'undefined' would be right only if there were no solid dot at all; 3 is the input, not the output.

**3. D** — *One-sided limit of the absolute value at its corner.* For x < 0, |x| = −x, so as x → 0⁻ the heights are 0.5, 0.1, 0.01, … → 0. So lim(x→0⁻) |x| = 0, and g(0) = |0| = 0. The V has a sharp corner at the origin but no break, so the function is continuous there.

'DNE and 0' treats the corner as a break; '−1 and 1' confuses |x| with |x|/x, whose sides are −1 and 1; '0 and undefined' forgets that |0| = 0 is a perfectly good value.

**4. B** — *Existence of a two-sided limit from the one-sided limits.* A two-sided limit exists only when the left and right limits agree on one finite number. Here 2 ≠ −2, so lim(x→5) f(x) = DNE.

2 quotes the left limit or the value f(5), neither of which decides the two-sided limit; −2 quotes the right limit only; 0 averages the two sides, which is never how a limit is found.

**5. A** — *Estimating a limit from a table of values.* From the left the heights 5.8, 5.98, 5.998 climb toward 6; from the right the heights 6.2, 6.02, 6.002 fall toward 6. Both sides settle on the same number, so lim(x→3) f(x) = 6.

3 is the input being approached, not the output; 5.998 is the last entry in the table, not the number the entries are heading for; DNE wrongly reads 5.998 ≠ 6.002 as the two sides disagreeing, when both are closing in on 6.

**6. D** — *Limit of a linear function read from its graph.* The line has slope 3 and y-intercept 5 and has no hole, jump or break at x = −2, so both sides run into the height of the line there: 3(−2) + 5 = −6 + 5 = −1.

5 is the y-intercept, where the line meets the y-axis, not its height at x = −2; 3 is the slope; 11 drops the sign of −2 and computes 3(2) + 5.

**7. B** — *Continuity when the function value is off the curve.* The limit uses only x near 2, never x = 2 itself, so lim(x→2) f(x) = 2 + 3 = 5. But f(2) = 9 ≠ 5, so the third continuity condition fails and f is not continuous at 2 (a removable discontinuity: a hole at (2, 5) with a stray dot at (2, 9)).

'9; continuous' lets the value f(2) dictate the limit; '5; continuous' finds the limit but forgets to compare it with f(2); 'DNE' treats the misplaced dot as if it broke the limit, which depends only on the approach from both sides.

**8. C** — *Why a jump discontinuity cannot be repaired.* Continuity needs lim(x→a) f(x) to exist and to equal f(a). The two-sided limit fails because the sides disagree (1 ≠ 4), and no choice of f(a) changes what the sides approach. A jump is a failure of the second condition, so redefining one point cannot fix it.

Choosing 1 or 2.5 for f(a) still leaves the one-sided limits at 1 and 4; 'now continuous' matches f(a) to one side only, but the other side still disagrees.

**9.** *Reading all four quantities from a graph.* Left branch: the curve runs into height 2 as x → −1 from below, so lim(x→−1⁻) f(x) = 2 (the open circle still shows the approach height). Right branch: it starts at height 5, so lim(x→−1⁺) f(x) = 5. Since 2 ≠ 5, lim(x→−1) f(x) = DNE. The solid dot gives the value: f(−1) = 5.

Both one-sided limits are finite but unequal, so this is a jump discontinuity. A correct answer states 2, 5, DNE, 5 and 'jump'; 'does not exist' or 'no limit' is accepted for DNE. Writing f(−1) = 2 (reading the open circle) or lim(x→−1) f(x) = 5 (taking one side as the two-sided limit) is wrong.

**10.** *Removable discontinuity of a rational function.* Substituting x = 3 gives (9 − 3 − 6)/(3 − 3) = 0/0, which is indeterminate and only tells you to factor. x² − x − 6 = (x − 3)(x + 2), so for x ≠ 3, f(x) = x + 2, and lim(x→3) f(x) = 3 + 2 = 5 from both sides. At x = 3 itself the denominator is 0, so f(3) is undefined.

The limit exists and is finite but f(3) is undefined, so this is a removable discontinuity: the line y = x + 2 with a hole at (3, 5). A correct answer shows the factorisation, gives the limit 5, says f(3) is undefined (or 'does not exist'), and says 'removable' (or 'a hole'). Writing 'limit DNE because 0/0' is wrong.

**11.** *Continuity of a piecewise function at its join.* (i) f(1) uses the first piece because 1 ≤ 1: f(1) = 1² = 1, so f is defined at 1. (ii) Left: lim(x→1⁻) x² = 1. Right: lim(x→1⁺) (2 − x) = 2 − 1 = 1. They agree, so lim(x→1) f(x) = 1 exists. (iii) lim(x→1) f(x) = 1 = f(1).

All three conditions hold, so f is continuous at x = 1. A correct answer shows f(1) = 1, both one-sided limits equal to 1, the comparison with f(1), and the conclusion 'continuous'. Using the wrong piece for f(1) (giving 2 − 1 = 1 by luck here) should still be marked down if the reasoning says x = 1 belongs to the second piece.

**12.** *Existence criterion for a two-sided limit.* A two-sided limit is a single number that f gets close to no matter which side x comes from. If the left and right approaches give different finite heights (say 3 from the left and −4 from the right) there is no single number, so the limit does not exist; on the graph the curve breaks and restarts at a different height, a jump. If one side runs off to +∞ or −∞ the heights never settle on any real number, so again the limit does not exist; the graph hugs a vertical asymptote and rises or falls without bound.

A correct answer says the limit must be one finite real number, names the two failures (sides disagree; a side is unbounded), and describes the jump and the vertical asymptote. It should be clear that 'limit = ∞' is a description of failure, not a value.
