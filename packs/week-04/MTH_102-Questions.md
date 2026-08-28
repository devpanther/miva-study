# MTH_102 — Week 4 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 5, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** From a graph you read lim_{x→2⁻} f(x) = 3 and lim_{x→2⁺} f(x) = −4. Then lim_{x→2} f(x) is:
a) −1   b) 3   c) −4   d) does not exist

**2.** A curve approaches height 4 from both sides of x = 3, where there is an open circle at (3, 4); a shaded dot sits at (3, 2). Then f(3) equals:
a) 4   b) 2   c) 3   d) it is undefined

**3.** f is continuous at c if and only if:
a) lim_{x→c⁻} f(x) and lim_{x→c⁺} f(x) both exist and are finite
b) f(c) is defined and f is defined on an open interval containing c
c) f(c) is defined, lim_{x→c} f(x) exists, and the two are equal
d) lim_{x→c} f(x) exists and f(c) is defined

**4.** A graph is unbroken except for a single open circle at (5, 1), with no other point plotted above x = 5. This is a:
a) jump discontinuity   b) infinite discontinuity   c) removable discontinuity   d) essential discontinuity

**5.** To the left of x = 3 a graph plunges to −∞ along the line x = 3; to its right it descends from +∞ along the same line, and no dot is plotted at x = 3. Which is correct?
a) lim_{x→3} f(x) = 0 and f(3) = 0
b) lim_{x→3} f(x) = +∞ and f(3) is undefined
c) lim_{x→3} f(x) does not exist and f(3) is undefined
d) lim_{x→3} f(x) does not exist and f(3) = 3

**6.** For f(x) = (x² − 1)/(x − 1), lim_{x→1} f(x) is:
a) 0, since the numerator vanishes at x = 1
b) 2, and f(1) is undefined
c) 2, and f(1) = 2
d) it does not exist, since substitution gives 0/0

**7.** Read graphically, lim_{x→3} (2x + 1) is:
a) 7   b) 3   c) 1   d) 2

**8.** For g(x) = |x|, the one-sided limit lim_{x→0⁺} g(x) is:
a) 1, the slope of the right arm
b) 0
c) it does not exist, because the V has a corner at 0
d) −0, approached from below

**9.** A jump discontinuity at x = a is characterised by:
a) one-sided limits that both exist, are finite, and are unequal
b) one-sided limits that agree, with f(a) missing or misplaced
c) at least one one-sided limit equal to +∞ or −∞
d) a function value f(a) that is defined but the graph has a corner there

**10.** A graph levels off onto the horizontal line y = −2 as x runs far to the right, having crossed that line once at x = 4. Then lim_{x→+∞} f(x) is:
a) 4   b) −2   c) it does not exist, since the graph crosses y = −2   d) +∞

**11.** Which statement is always true?
a) If lim_{x→c} f(x) exists then f is continuous at c
b) If f(c) is defined then f is continuous at c
c) If f is continuous at c then lim_{x→c} f(x) = f(c)
d) If f is discontinuous at c then lim_{x→c} f(x) does not exist

**12.** The graph of f has a vertical asymptote at x = 1. At x = 1 the function has:
a) a removable discontinuity   b) a jump discontinuity   c) no discontinuity, only an asymptote   d) an infinite discontinuity

## Section B — Short answer (3)

**13.** A graph rises from the left to a shaded dot at (1, 2); to the right of x = 1 it starts at an open circle at (1, −3) and falls away. State lim_{x→1⁻} f(x), lim_{x→1⁺} f(x), lim_{x→1} f(x) and f(1), name the type of discontinuity, and say whether it can be repaired.

**14.** Let f(x) = x + 4 for x < 2, f(2) = 7, and f(x) = 3x for x > 2. Test continuity at x = 2 using the three conditions, stating which (if any) fails, and say what single change would make f continuous at 2.

**15.** Describe the graphical signature of a removable, a jump and an infinite discontinuity, and explain in each case which of the three continuity conditions fails.

## Answers

1. **d** — *Existence criterion*: the two-sided limit exists only if the one-sided limits are equal; 3 ≠ −4, so DNE. Averaging them to −1 treats limits as something to be combined.
2. **b** — *The filled dot gives the value, the open circle gives the limit*: f(3) = 2, while lim_{x→3} f(x) = 4.
3. **c** — *Three conditions of continuity*: defined, limit exists, and the two agree. (a) drops the value entirely, (d) drops the equality, (b) confuses "defined near c" with continuous.
4. **c** — *Removable discontinuity (hole)*: the one-sided limits agree at 1, but f(5) is undefined, so condition (i) fails; defining f(5) = 1 repairs it.
5. **c** — *Infinite discontinuity*: −∞ on the left and +∞ on the right, so no number is approached and no shaded dot exists. "+∞" would be wrong because the two sides disagree in sign.
6. **b** — *Cancelling gives the limit, not the domain*: (x−1)(x+1)/(x−1) = x + 1 for x ≠ 1, so the limit is 2, but the original expression is still 0/0 at x = 1, so f(1) is undefined.
7. **a** — *Continuous function: the limit is the value*: 2(3) + 1 = 7, and the straight line has no break at x = 3.
8. **b** — *One-sided limit from the right arm*: on x > 0, |x| = x, whose height shrinks to 0. The corner affects differentiability, not the limit.
9. **a** — *Jump discontinuity*: both sides settle, on different heights. (b) is removable, (c) is infinite, (d) is a corner — continuous, not discontinuous.
10. **b** — *Limit at infinity = horizontal asymptote*: the crossing at x = 4 is finite behaviour and irrelevant; only where the graph settles far to the right matters.
11. **c** — *Continuity implies the limit equals the value*: that is condition (iii). (a) and (b) each keep only one of the three conditions; (d) forgets that a hole is a discontinuity whose limit exists.
12. **d** — *Infinite discontinuity*: a vertical asymptote is precisely the graphical signature of a one-sided limit running to ±∞.
13. lim_{x→1⁻} f(x) = **2**, lim_{x→1⁺} f(x) = **−3**, so **lim_{x→1} f(x) DNE**; f(1) = **2** (the shaded dot). This is a **jump discontinuity**, and it **cannot be repaired** — no choice of f(1) can make two different one-sided limits agree. — *Jump discontinuity: finite but unequal one-sided limits.*
14. (i) f(2) = **7**, defined. (ii) lim_{x→2⁻} f(x) = 2 + 4 = **6** and lim_{x→2⁺} f(x) = 3(2) = **6**, so the limit **exists and equals 6**. (iii) 6 ≠ 7, so **condition (iii) fails** — a **removable discontinuity**. Redefining **f(2) = 6** makes f continuous at 2. — *Three-condition test on a piecewise function.*
15. **Removable**: an open circle with the curve otherwise unbroken; the one-sided limits agree, so the limit exists, and what fails is (i) f(c) undefined or (iii) f(c) ≠ the limit. **Jump**: the curve breaks and restarts at a different height; both one-sided limits are finite but unequal, so (ii) fails. **Infinite**: a vertical asymptote with the graph running off to ±∞; at least one one-sided limit is infinite, so (ii) fails and normally (i) as well. — *Classifying discontinuities by which continuity condition fails.*
