# MTH_102 — Week 4 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 5, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** On a graph of f, the branch to the left of x = 2 rises to an open circle at (2, 5), the branch to the right falls to an open circle at (2, 5), and a filled dot sits at (2, −3). Then lim_{x→2} f(x) equals:
a) −3   b) 5   c) it does not exist, since 5 ≠ −3   d) 1, the average of the two

**2.** For the function of question 1, f is:
a) continuous at 2, since both one-sided limits agree
b) discontinuous at 2 with a removable discontinuity, repaired by setting f(2) = 5
c) discontinuous at 2 with a jump discontinuity of size 8
d) undefined at 2, so the question of continuity does not arise

**3.** Which of these is **not** one of the three ways a limit can fail to exist at a point?
a) jump   b) infinite   c) oscillation   d) f(a) being undefined

**4.** lim_{x→1⁻} f(x) = +∞ and lim_{x→1⁺} f(x) = +∞. The correct conclusion is:
a) the limit exists and equals +∞, so the existence test is satisfied
b) no real-number limit exists; we write lim_{x→1} f(x) = +∞ as a description, and x = 1 is a vertical asymptote
c) the limit does not exist and x = 1 is a jump discontinuity
d) f is continuous at 1 provided f(1) is defined

**5.** f(x) = 3x + k for x < 1 and f(x) = x² + 4 for x ≥ 1. The value of k making f continuous at x = 1 is:
a) k = 2, so that both one-sided limits equal 5 and f(1) = 5
b) k = 4, so that the two formulas look alike
c) k = 5, so that 3(1) + k equals f(1)
d) no value of k works, because two different formulas always produce a jump

**6.** The line x = a is a vertical asymptote of f exactly when:
a) f(a) is undefined
b) at least one of lim_{x→a⁻} f(x), lim_{x→a⁺} f(x) is +∞ or −∞
c) both one-sided limits at a are infinite and have the same sign
d) lim_{x→a} f(x) fails to exist

**7.** Which statement about the graph of f(x) = 2x/(x² + 1) is correct?
a) y = 0 is a horizontal asymptote at both ends, and the graph crosses it at the origin
b) y = 0 is not an asymptote, since the graph touches the x-axis
c) x = ±1 are vertical asymptotes, since x² + 1 vanishes there
d) y = 2 is the horizontal asymptote, from the ratio of leading coefficients

**8.** f(x) = (x² − 4)/(x − 2) for x ≠ 2, with f(2) = 4. At x = 2 the graph has:
a) a removable discontinuity (a hole at (2, 4))
b) no discontinuity at all — it is the line y = x + 2 with a filled dot at (2, 4)
c) a jump discontinuity, since two rules are used
d) an infinite discontinuity, since the denominator vanishes

**9.** f(x) = 7 − x for x ≤ 3 and f(x) = x + 2 for x > 3. Then:
a) lim_{x→3} f(x) = 4 and f is continuous at 3
b) lim_{x→3} f(x) does not exist: a jump, with left limit 4 and right limit 5; f is continuous from the left at 3
c) lim_{x→3} f(x) = 4.5, midway between the two branch heights
d) lim_{x→3} f(x) does not exist: a removable discontinuity, since only one point needs moving

**10.** Near x = 0, the graph of sin(1/x) shows a discontinuity that is:
a) a jump, since the curve keeps flipping between −1 and 1
b) infinite, since infinitely many waves are packed into every interval
c) essential (oscillatory): the one-sided limits do not exist at all, and the function stays bounded, so there is no asymptote
d) removable, since redefining the value at 0 would settle the behaviour

**11.** For f(x) = (2 − x)/(x − 3), the behaviour at x = 3 is:
a) lim_{x→3⁻} f = +∞ and lim_{x→3⁺} f = −∞
b) lim_{x→3⁻} f = −∞ and lim_{x→3⁺} f = +∞
c) −∞ on both sides, since the numerator tends to −1
d) a hole, since −1/0 is indeterminate and (x − 3) cancels

**12.** A vertical line drawn at x = a on the graph of a function may carry:
a) at most one open circle and at most one filled dot
b) any number of open circles but at most one filled dot
c) any number of filled dots, provided they are joined by branches
d) either one open circle or one filled dot, never both

## Section B — Short answer (3)

**13.** A function f is plotted as follows. For x < −1 the curve rises and ends at an **open circle at (−1, 3)**; a **filled dot** sits at **(−1, 1)**; for −1 < x < 2 the curve begins at an **open circle at (−1, 3)** and falls to an **open circle at (2, 0)**; a **filled dot** sits at **(2, 4)**; for x > 2 the curve descends from far up the right-hand side of the line x = 2 and flattens toward height **−1** as x grows large.
Give lim_{x→−1⁻} f, lim_{x→−1⁺} f, lim_{x→−1} f, f(−1); then lim_{x→2⁻} f, lim_{x→2⁺} f, lim_{x→2} f, f(2). State whether f is continuous at each of −1 and 2, naming the type of any discontinuity, and write down every asymptote together with the limit statement it encodes.

**14.** State the three conditions for continuity at a point c, and for each of the four types of discontinuity (removable, jump, infinite, essential) give the graphical characteristic, which condition or conditions fail, one explicit example function, and whether the break can be repaired by redefining f at a single point.

**15.** Explain the difference between lim_{x→2} 1/(x − 2) and lim_{x→2} 1/(x − 2)², describing both graphs near x = 2. Say why one of them is written "= +∞" while the other is written only "DNE", and why neither limit exists as a number.

## Answers

**1. b** — *The limit is read from the branches; the filled dot is the one point the limit ignores.* Both branches head for height 5, so the limit is 5. (a) reads f(2) and calls it the limit; (c) mistakes a limit-vs-value mismatch for non-existence — that mismatch breaks continuity, not the limit; (d) averages, which no definition licenses.
**2. b** — *Continuity needs f(2) defined, the limit to exist, **and** the two to be equal.* Here 5 ≠ −3, so the third condition fails; since the limit exists the break is removable, repaired by setting f(2) = 5. (a) checks two conditions of three; (c) is the wrong type — a jump requires the two **branches** to disagree, not the branch and the dot; (d) is false, f(2) = −3 is defined.
**3. d** — *"Undefined at a" says nothing about the branches.* A hole, a jump and an asymptote can all sit at an undefined point, and the limit may still be a perfectly good number, as in (x² − 1)/(x − 1) at x = 1.
**4. b** — *The existence test demands two **finite**, equal one-sided values.* Matching infinities earn the notation = +∞ as a description of unbounded growth and nothing more; the picture is a vertical asymptote and an infinite discontinuity. (a) treats +∞ as a number; (c) misclassifies — a jump needs finite one-sided limits; (d) is impossible, since no real value of f(1) can equal +∞.
**5. a** — *Continuity at a joint means left limit = right limit = the value at the joint.* Right side and value: 1² + 4 = 5. Left side: 3(1) + k = 3 + k. Setting 3 + k = 5 gives **k = 2**. (b) matches constants by appearance rather than by limits; (c) sets k itself equal to 5, forgetting the 3(1); (d) repeats the myth that two formulas force a jump.
**6. b** — *One infinite one-sided limit is enough.* f(x) = 1/(x − 3) has −∞ on the left and +∞ on the right and x = 3 is an asymptote all the same. (a) confuses undefined with unbounded — holes are undefined too; (c) over-tightens and would deny the 1/(x − 3) case; (d) is too loose — jumps and oscillations kill limits with no asymptote present.
**7. a** — *A horizontal asymptote is a statement about x → ±∞ only, so crossings at finite x are permitted.* deg N = 1 < deg D = 2 gives limit 0 at both ends, and f(0) = 0 puts the curve on the asymptote at the origin. (b) repeats the "never touches" folklore; (c) solves x² + 1 = 0 as if it were x² − 1 = 0 — the denominator never vanishes; (d) applies the equal-degree rule to unequal degrees.
**8. b** — *0/0 in the formula does not by itself put a break in the graph.* For x ≠ 2 the function is x + 2, whose branches meet at height 4, and the second rule supplies exactly f(2) = 4 — so the circle is filled and all three continuity conditions hold. (a) is the near miss: the formula is undefined at 2, but the definition is not. (c) counts rules instead of comparing one-sided limits; (d) confuses 0/0 with k/0.
**9. b** — *Unequal finite one-sided limits ⟹ a jump; the value then decides one-sided continuity.* Left: 7 − 3 = 4; right: 3 + 2 = 5. The "≤" puts x = 3 in the left piece, so f(3) = 4 = the left limit and f is continuous from the left but not continuous. (a) accepts the left branch alone; (c) averages; (d) misuses "removable", which requires the branches to already agree.
**10. c** — *Every interval around 0 contains infinitely many complete waves between −1 and 1, so no branch heads for any height.* (a) needs both one-sided limits to exist and be finite — they do not exist at all; (b) requires unboundedness, but |sin(1/x)| ≤ 1; (d) needs the limit to exist first, which is exactly what fails.
**11. a** — *Magnitude from k/0, sign from testing the denominator on each side against the sign of the numerator.* The numerator tends to −1. For x < 3, x − 3 < 0 and negative/negative = positive ⟹ +∞; for x > 3, negative/positive ⟹ −∞. (b) is the sign slip from recalling 1/x with its positive numerator; (c) forgets that the denominator changes sign across 3; (d) misreads −1/0 as indeterminate — only 0/0 is, and a non-zero numerator forbids cancellation.
**12. b** — *A function assigns exactly one value to each input, so at most one filled dot per vertical line (the vertical line test); open circles mark heights that are only approached, and a piecewise definition can leave several of them at one x.* (a) needlessly limits the open circles; (c) breaks the definition of a function; (d) forbids the standard removable-discontinuity picture, which has both.
**13.** **At x = −1:** lim_{x→−1⁻} f = **3**, lim_{x→−1⁺} f = **3**, so lim_{x→−1} f = **3**; f(−1) = **1**. Conditions (i) and (ii) hold, (iii) fails, so f is **not continuous** at −1; the break is **removable**, repaired by redefining f(−1) := 3. **At x = 2:** lim_{x→2⁻} f = **0**, lim_{x→2⁺} f = **+∞**, so lim_{x→2} f **does not exist**; f(2) = **4**. Since one one-sided limit is infinite, this is an **infinite discontinuity**. **Asymptotes:** **x = 2** is a vertical asymptote, encoding lim_{x→2⁺} f(x) = +∞ (one infinite one-sided limit is enough); **y = −1** is a horizontal asymptote, encoding lim_{x→+∞} f(x) = −1.
**14.** **Continuity at c:** (i) f(c) is defined; (ii) lim_{x→c} f(x) exists — both one-sided limits exist, are finite and agree; (iii) lim_{x→c} f(x) = f(c). **Removable:** an open circle on the curve, with either no filled dot on the line x = c or a stray one elsewhere; **(i) alone**, or **(iii) alone**, fails; example (x² − 1)/(x − 1) at x = 1, limit 2, f(1) undefined; **repairable** — set f(1) := 2. **Jump:** two branch-ends at different finite heights, a vertical gap; **(ii)** fails; example |x|/x at x = 0, left −1 and right +1; **not repairable**. **Infinite:** a vertical asymptote, with at least one branch running off along the line x = c; **(ii)** fails (and usually (i)); example 1/(x − 3) at x = 3, −∞ on the left and +∞ on the right; **not repairable**. **Essential (oscillatory):** endlessly compressed waves with no settling height, function bounded, no asymptote; **(ii)** fails because a one-sided limit does not itself exist; example sin(1/x) at x = 0; **not repairable**. Only the removable case is repairable, because it is the only one in which the branches already agree on a finite height.
**15.** For **1/(x − 2)**, the denominator is negative just left of 2 and positive just right of it, so lim_{x→2⁻} = **−∞** (the left branch plunges down the line x = 2) and lim_{x→2⁺} = **+∞** (the right branch climbs it); both branches flatten toward y = 0 far out. For **1/(x − 2)²** the denominator is a square, hence positive on both sides, so lim_{x→2⁻} = lim_{x→2⁺} = **+∞**: both branches climb the asymptote and the whole graph lies above the x-axis. Because the second function fails in the **same** way on both sides, one symbol describes the entire neighbourhood and we write lim_{x→2} 1/(x − 2)² = **+∞**; for the first the two sides run to opposite infinities, so no single description exists and the only honest answer is **DNE**. This is a difference of notation, not of status: +∞ is **not a real number**, so neither function has a limit at 2 — "= +∞" reports *how* the limit fails, not a value it attains. Both are infinite discontinuities and x = 2 is a vertical asymptote of each; neither is removable, since removability requires the branches to already agree on a **finite** height.
