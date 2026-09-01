# Thursday — MTH_102 nightly check

*Week 4 of Elementary Mathematics II worked as problems: taking numbers off graphs and out of formulas.*

*Reading lim as x approaches c from the left, from the right, the two-sided limit, and the value f(c), from a described graph.*

*Classifying the point as removable, jump or infinite from the pair of one-sided limits.*

*The algebraic cases the deck uses: lim(x→3) of 2x+1 read off a line of slope 2 and intercept 1; lim(x→1) of (x²−1)/(x−1) by factoring and cancelling; and one-sided limits of |x| and |x|/x at 0.*

*Then choosing a constant that makes a piecewise function continuous at its joining point.*

*Also diagnosing wrong routes. In particular, treating the indeterminate form 0/0 as proof that a limit does not exist, and checking a classification against the graph before quoting it.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** A graph shows: for x < 2 the curve rises and ends in an open circle at (2, 3); for x > 2 the curve begins at an open circle at (2, −4) and falls; a shaded dot is plotted at (2, 1). What is lim(x→2) f(x)?
a) 3, because the left branch arrives at the point first and sets the value of the limit there
b) 1, because f(2) = 1 is the only value actually attained at x = 2 and the limit must take it
c) −0.5, the average of the two heights 3 and −4 that the branches arrive at
d) It does not exist, because lim(x→2⁻) f(x) = 3 and lim(x→2⁺) f(x) = −4 are unequal

**2.** For the same graph (left branch into an open circle at (2, 3), right branch from an open circle at (2, −4), shaded dot at (2, 1)), what kind of discontinuity is at x = 2?
a) Jump discontinuity, because both one-sided limits are finite and they differ from each other
b) Removable discontinuity, because the shaded dot at (2, 1) only needs moving to close the gap
c) Infinite discontinuity, because the function falls by 7 units in no distance at all across x = 2
d) No discontinuity, because f(2) = 1 is defined and a defined function value means the function is continuous there

**3.** Evaluate lim(x→1) (x² − 1)/(x − 1) and state f(1) for f(x) = (x² − 1)/(x − 1).
a) The limit is 0 and f(1) = 0, because both the numerator and the denominator vanish at x = 1
b) The limit is 2 and f(1) is undefined, so the graph is the line y = x + 1 carrying a hole at (1, 2)
c) The limit does not exist and f(1) = 1, because the denominator is zero at x = 1
d) The limit is 2 and f(1) = 2, because cancelling the factor gives x + 1, which is perfectly defined at x = 1

**4.** You evaluate lim(x→3) (2x + 1) graphically by drawing the line of slope 2 and y-intercept 1, then approaching x = 3 from both sides. What do you read off, and why?
a) 1, the y-intercept, since that is the height at which the graph meets the vertical axis
b) 2, the slope, since near x = 3 the function is changing at the rate of 2 units per unit
c) 7, since the line is unbroken at x = 3 and both branches run into the height 2(3) + 1 = 7
d) Nothing; a limit cannot be read off a graph and must be obtained algebraically instead

**5.** For h(x) = |x|/x, what are the readings at x = 0?
a) lim(x→0⁻) h(x) = −1 and lim(x→0⁺) h(x) = 1, so lim(x→0) h(x) does not exist: a jump discontinuity at 0
b) lim(x→0) h(x) = 0, because the numerator |x| approaches 0 as x approaches 0 from either side
c) lim(x→0) h(x) = 1, because |x| and x always have the same magnitude, so the quotient is 1 throughout
d) lim(x→0) h(x) is ±∞, because the denominator approaches 0, which always produces an infinite discontinuity

**6.** A graph has a vertical dashed line at x = 3: to its left the curve plunges downward hugging the line, to its right it climbs upward hugging the line, and no dot of any kind is plotted at x = 3. Which reading is correct?
a) lim(x→3) f(x) = ∞ and f(3) = ∞, since both branches run off the top and bottom of the page
b) lim(x→3) f(x) does not exist and f(3) is undefined; the point is an infinite discontinuity
c) lim(x→3) f(x) does not exist but f(3) = 0, the height at which the asymptote crosses the x-axis
d) The discontinuity is removable, since redefining f(3) at a finite height closes the gap between the branches

**7.** A student writes: 'Substituting x = 1 into (x² − 1)/(x − 1) gives 0/0, which is undefined, therefore lim(x→1) f(x) does not exist.' Which correction is right?
a) Substitute a nearby value such as x = 1.001, read off 2.001, and quote that as the exact value of the limit
b) The conclusion is right; the correct description is that f has an infinite discontinuity at x = 1
c) 0/0 should be read as 1, since a quantity divided by itself is 1, so the limit is 1
d) 0/0 is an indeterminate form, not a verdict — it instructs you to factor and cancel: (x−1)(x+1)/(x−1) = x + 1 for x ≠ 1, so the limit is 2

**8.** Let f(x) = x² for x < 2 and f(x) = kx for x ≥ 2. Which value of k makes f continuous at x = 2, and on what grounds?
a) k = 4, so that the second branch kx delivers the value 4 that x² has at the joining point
b) k = 0, so that the second branch is flat at height 0 and therefore introduces no jump at x = 2
c) k = 2, because continuity needs lim(x→2⁻) f(x) = 4 to equal lim(x→2⁺) f(x) = 2k, which also equals f(2) = 2k
d) No value of k works, because x² and kx are different formulas and the graph must break where the formula changes

**9. (explain why)** Explain why getting 0/0 when you substitute into a quotient does not entitle you to write 'limit DNE', and explain what the form is actually telling you about the numerator and denominator.

**10. (explain why)** Explain why testing continuity of a piecewise function at its joining point x = a requires three separate evaluations, and why confirming that the two formulas give the same number at x = a can still leave the function discontinuous there.

**11. (explain why)** On the graph with lim(x→2⁻) f(x) = 3, lim(x→2⁺) f(x) = −4 and a shaded dot at (2, 1), explain why the reading f(2) = 1 makes no difference to your answer for lim(x→2) f(x), and what it would take to change that answer.

**12. (explain why)** Explain why a graph with a vertical asymptote at x = 3 cannot be made continuous there by defining f(3) to be some very large number, and describe the check you would run on your classification before writing 'infinite discontinuity' as your answer.
