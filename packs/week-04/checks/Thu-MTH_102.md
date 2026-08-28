# Thursday — MTH_102 nightly check

*Problems: working out the graph from a formula, piecewise functions and continuity parameters, sign analysis on each side of a vertical asymptote, and classifying every discontinuity of a given function or picture.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** For f(x) = (x² − 9)/(x + 3), which is correct?
a) lim_{x→−3} f(x) = −6 and f(−3) is undefined
b) lim_{x→−3} f(x) = −6 and f(−3) = −6
c) neither the limit nor f(−3) exists, since 0/0 arises
d) lim_{x→−3} f(x) = ∞ and x = −3 is a vertical asymptote

**2.** Let f(x) = x² for x < 2, f(2) = 5, and f(x) = 6 − x for x > 2. At x = 2:
a) the limit is 4, f(2) = 5, so there is a removable discontinuity
b) the limit is 5, and f is continuous since f(2) is defined
c) the limit does not exist, since three different rules are used
d) the limit is 4, and f is continuous since both sides agree

**3.** Let f(x) = (x² − 4)/(x − 2) for x ≠ 2 and f(2) = k. f is continuous at 2 when k equals:
a) 4   b) 0   c) 2   d) no value of k works

**4.** For f(x) = 1/(x − 4), the behaviour near x = 4 is:
a) f → −∞ as x → 4⁻ and f → +∞ as x → 4⁺
b) f → +∞ as x → 4⁻ and f → −∞ as x → 4⁺
c) f → +∞ on both sides, so the limit is +∞
d) f → 0 on both sides, as the denominator shrinks

**5.** A graph rises from y = 0 on the far left, shoots up the vertical line x = −1 off the top of the page, comes up from the bottom of the page just right of x = −1, rises through an open circle at (1, 3) with a shaded dot at (1, 0), then flattens onto y = 4. Its discontinuities are:
a) infinite at x = −1 and removable at x = 1
b) infinite at x = −1 only; x = 1 is continuous as f(1) = 0
c) removable at x = −1 and jump at x = 1
d) jump at x = −1 and removable at x = 1

**6.** The graph of f(x) = (3x² + 1)/(x² − 4) has vertical asymptotes at x = ±2. Then lim_{x→+∞} f(x) is:
a) 3, the ratio of the leading coefficients
b) 0, since the denominator vanishes at x = 2
c) +∞, since the numerator is the larger one
d) undefined, because of the two vertical asymptotes

**7.** For f(x) = |x|/x, the point x = 0 is:
a) a jump discontinuity, the two sides giving −1 and 1
b) a removable discontinuity, since f(0) is undefined
c) an infinite discontinuity, since the denominator is 0
d) not a discontinuity: |x| → 0 and x → 0, so f → 0

**8.** The graph of f(x) = (x − 2)/(x² − 4) has:
a) a hole at x = 2 and a vertical asymptote at x = −2
b) vertical asymptotes at both x = 2 and at x = −2
c) holes at both x = 2 and x = −2, since (x − 2) cancels
d) a hole at x = −2 and a vertical asymptote at x = 2

**9. (explain why)** Let f(x) = 2x + a for x < 1, f(1) = 5, and f(x) = x² + b for x > 1. Find the values of a and b that make f continuous at x = 1, showing which condition each equation comes from.

**10. (explain why)** Compare the graphs of 1/(x − 4) and 1/(x − 4)² near x = 4. Explain why only one of them may be described by writing the two-sided limit as +∞, and why neither two-sided limit exists as a number.

**11. (explain why)** Explain why f(x) = sin(1/x) has no limit as x → 0, and why the discontinuity there is neither removable nor a jump.

**12. (explain why)** All you are told about a function f is that lim_{x→a⁻} f(x) = lim_{x→a⁺} f(x) = 6. State what you can and cannot conclude about f(a) and about continuity at a, and sketch in words two graphs consistent with this that differ in continuity at a.

---

## Answers

**1. a** — *Cancelling a common factor gives the limit but never repairs the domain.* (x−3)(x+3)/(x+3) = x − 3 for every x ≠ −3, so the graph is the line y = x − 3 with a hole at (−3, −6): the limit is −6. Substituting x = −3 into the **original** expression still gives 0/0, so f(−3) is undefined. (b) assumes cancelling changes the function at the missing point. (c) reads 0/0 as proof that nothing exists, forgetting that 0/0 is exactly the indeterminate case a limit is designed to settle. (d) applies "denominator zero ⟹ asymptote" without checking whether the factor cancels.

**2. a** — *A separately declared value at the point cannot override the limit.* Left: x² → 4. Right: 6 − x → 4. The one-sided limits agree, so lim_{x→2} f(x) = 4. But f(2) = 5, so condition (iii) fails: a removable discontinuity, repaired by resetting f(2) = 4. (d) treats agreement of the one-sided limits as sufficient for continuity, dropping the third condition. (b) reads the declared value as the limit. (c) assumes a change of formula automatically breaks the limit, whereas here the two formulas happen to meet at the same height.

**3. a** — *Continuity at a repaired hole forces k to be the limit.* (x−2)(x+2)/(x−2) = x + 2 for x ≠ 2, so lim_{x→2} f(x) = 4; conditions (i)–(iii) then all hold exactly when k = 4. (b) sets k to the value of the numerator at x = 2, which is 0 and not the limit. (c) reports the x-value 2 rather than the height. (d) assumes an indeterminate 0/0 point can never be made continuous — it is precisely the removable case.

**4. a** — *A simple pole changes sign across the asymptote; check each side separately.* For x just below 4 the denominator x − 4 is a small **negative** number, so 1/(x−4) is large and negative; for x just above 4 it is small and positive, so the quotient is large and positive. (b) has the signs the wrong way round. (c) is the behaviour of 1/(x−4)², where the square kills the sign change. (d) inverts the reciprocal: a shrinking denominator makes the quotient large, not small.

**5. a** — *A vertical asymptote is an infinite discontinuity; a stray shaded dot is a removable one.* At x = −1 the curve runs to +∞ from the left and up from −∞ on the right, so the limit fails infinitely. At x = 1 both sides head for height 3 while f(1) = 0, so the limit exists and only condition (iii) fails. (b) treats "f(1) is defined" as proving continuity. (d) calls an infinite break a jump, but a jump requires both one-sided limits to be **finite**. (c) mislabels an asymptote as a hole and a misplaced point as a jump.

**6. a** — *A limit at infinity is decided by the leading terms, independently of any vertical asymptote.* Dividing through by x² gives (3 + 1/x²)/(1 − 4/x²) → 3/1 = 3, so the graph settles onto y = 3 far to the right. (b) misapplies the deg N < deg D rule and confuses a vertical asymptote with the behaviour at infinity. (c) compares only the numerators' constants; the degrees are equal, so neither runs away. (d) assumes vertical asymptotes at finite x can spoil the far-out behaviour, but the two questions are entirely separate.

**7. a** — *The sign of x, not its size, is what breaks this function at 0.* For x > 0, |x|/x = x/x = 1; for x < 0, |x|/x = (−x)/x = −1. Both one-sided limits exist and are finite but differ, so the limit does not exist: a jump of height 2. (b) assumes any undefined point is a hole, but a hole needs the two sides to **agree**. (c) applies "denominator zero ⟹ asymptote" without checking that the values here stay bounded at ±1. (d) cancels the 0/0 to 0, ignoring that the quotient is ±1 everywhere except at 0.

**8. a** — *Only the factor that cancels gives a hole; the surviving one gives an asymptote.* (x − 2)/((x − 2)(x + 2)) = 1/(x + 2) for x ≠ 2, so at x = 2 the limit is 1/4 and there is a hole at (2, 1/4); at x = −2 nothing cancels, and 1/(x+2) runs to −∞ from the left and +∞ from the right. (b) treats both denominator zeros as asymptotes. (c) over-generalises the cancellation to a factor it never touched. (d) swaps the two roles.

**9.** *Concept: continuity at a junction gives one equation per side, each from a specific condition.* Condition (i) is already satisfied: f(1) = 5 is declared. Condition (ii) requires the one-sided limits to agree: lim_{x→1⁻} f(x) = 2(1) + a = **2 + a**, and lim_{x→1⁺} f(x) = 1² + b = **1 + b**. Condition (iii) requires that common value to equal f(1) = 5. So set 2 + a = 5 ⟹ **a = 3**, and 1 + b = 5 ⟹ **b = 4**; then both one-sided limits are 5, the limit exists and equals 5 = f(1). Graphically the left line ends at (1, 5), the right parabola starts at (1, 5), and the shaded dot sits at (1, 5) — one unbroken curve, no lift of the pen. Note that matching the two sides to each other alone (2 + a = 1 + b) would only remove the jump; it would still leave a hole or a misplaced dot unless the common value is 5.

**10.** *Concept: whether the two sides run to infinity with the same sign decides which description is legitimate.* For **1/(x − 4)** the denominator is negative just left of 4 and positive just right, so the graph plunges to −∞ on the left of the asymptote x = 4 and comes down from +∞ on its right; because the two sides disagree in sign, no single symbol describes them, and the only correct two-sided statement is **DNE**, with lim_{x→4⁻} = −∞ and lim_{x→4⁺} = +∞ stated separately. For **1/(x − 4)²** the square makes the denominator positive on both sides, so the graph runs off the top of the page on both sides and we may write **lim_{x→4} f(x) = +∞**. In neither case does the limit exist as a **number**: +∞ is not a real value but a description of unbounded growth, so both are infinite discontinuities with vertical asymptote x = 4.

**11.** *Concept: an essential (oscillating) discontinuity is a failure to settle, not a break or a blow-up.* As x → 0 the input 1/x runs off to ±∞, so sin(1/x) completes infinitely many full oscillations in any interval around 0, taking every value in [−1, 1] infinitely often no matter how close to 0 you look. There is therefore no single height L the values approach from either side: **neither one-sided limit exists**, so the two-sided limit does not exist. It is not **removable**, because that needs both sides to agree on one finite value that could be plugged in — here no candidate value exists, and redefining f(0) changes one point while leaving the wobble untouched. It is not a **jump**, because a jump needs both one-sided limits to exist finitely and merely differ. It is not **infinite** either: the values stay trapped between −1 and 1, so nothing runs to ±∞. This is the fourth type, an **essential discontinuity**.

**12.** *Concept: the one-sided limits fix the limit but say nothing whatever about the value.* **Can conclude:** lim_{x→a} f(x) exists and equals **6**, since the two one-sided limits agree and are finite; so condition (ii) holds and there is neither a jump nor an infinite discontinuity at a. **Cannot conclude:** anything about f(a) — the data never looks at x = a, so f(a) may be 6, may be some other number, or may be undefined; hence continuity at a is **undecidable** from this information alone. Two consistent pictures: (1) a smooth unbroken curve through the shaded dot (a, 6) — here f(a) = 6, all three conditions hold, and f is **continuous** at a; (2) the same curve with an **open circle** at (a, 6) and a shaded dot at (a, 1) — the approach is identical, but f(a) = 1 ≠ 6, condition (iii) fails, and f has a **removable discontinuity**. (A third picture, the open circle with no shaded dot at all, fails condition (i).)
