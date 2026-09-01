# Monday — MTH_102 nightly check

*Week 4 of Elementary Mathematics II, taken conceptually.*

*What the objects in a limit statement actually are, and why each continuity criterion is there.*

*The three-condition definition of continuity at a point c: f(c) defined, lim as x approaches c exists, and the two are equal.*

*One-sided limits, and the existence criterion that the left and right limits must agree on one finite real number.*

*What an open circle and a shaded dot each encode on a graph.*

*Why 'limit equals infinity' is a description of failure rather than a value.*

*The four types of discontinuity (removable, jump, infinite, essential) as names for which criterion fails and in what way.*

*Why a removable one can be repaired by redefining a single point, and a jump or infinite one cannot.*

*No computation is required. Every question asks what breaks without a given condition.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The definition of continuity at c lists 'f(c) is defined' as a separate condition, even though the third condition already says lim(x→c) f(x) = f(c). Why is the first condition not redundant?
a) Because a limit can exist without being finite, and only a finite limit can be compared with a function value in the first place
b) Because if f(c) were undefined then the two one-sided limits would automatically disagree with each other at c
c) Because the equation lim(x→c) f(x) = f(c) asserts nothing if its right-hand side names no number; the condition guarantees there is something to compare the limit with
d) Because f(c) has to be computed before the limit can be computed, so the conditions must be checked in the stated order

**2.** A curve rises without bound on both sides of x = 2, so lim(x→2⁻) f(x) = +∞ and lim(x→2⁺) f(x) = +∞. The two one-sided results are written the same, yet we still say lim(x→2) f(x) does not exist. Why?
a) Because a limit must be one finite real number that the values settle on, and +∞ records unbounded growth instead of any such number
b) Because f is undefined at x = 2, and a limit cannot exist at a point where the function has no value
c) Because agreement of the one-sided limits only counts towards existence when the function is already continuous at the point
d) Because the +∞ reached from the left is a different object from the +∞ reached from the right, so the two do not genuinely agree

**3.** Why is a removable discontinuity called removable?
a) Because the hole is a single point of zero width, so it does not disturb the overall shape of the graph
b) Because deleting the point c from the domain of f leaves a function with no discontinuity anywhere in its domain
c) Because factoring the expression and cancelling the common factor algebraically makes the discontinuity go away
d) Because lim(x→c) f(x) already exists as one finite value L, so setting f(c) := L makes all three continuity conditions hold at that point

**4.** At a jump discontinuity at x = a, why can no choice of the value f(a) make f continuous at a?
a) Because f grows without bound on at least one side of a, so no finite value assigned at a could ever match the behaviour of the curve there
b) Because continuity first requires lim(x→a) f(x) to exist, and that limit is decided by the two branches alone, which a value assigned at the single point a cannot alter
c) Because the two branches meet a with different slopes, and continuity at a point requires the slopes on the two sides to match there
d) Because at a jump the value f(a) is always undefined, and an undefined quantity cannot be given a new value by redefinition

**5.** On a graph at x = 1 both branches of the curve run into an open circle at (1, 4), and a shaded dot is plotted at (1, −2). What do the two symbols encode?
a) The open circle records the height both branches approach, so lim(x→1) f(x) = 4, while the shaded dot records the value, so f(1) = −2
b) The open circle records the value, so f(1) = 4, and the shaded dot marks a further point the curve happens to pass through
c) Both symbols record outputs of f at x = 1, so f takes the two values 4 and −2 there
d) The open circle shows f is undefined at x = 1, so f(1) does not exist and the shaded dot carries no information

**6.** A graph is an unbroken curve everywhere except that at x = c the pen must be lifted for one isolated point and then put down again immediately, the curve continuing at the same height. Which continuity condition has failed at c?
a) Condition (ii): the limit fails to exist, since the pen left the curve at c and a limit cannot survive a lift
b) No condition fails, because one isolated point has no width and so cannot affect whether f is continuous at c
c) Conditions (ii) and (iii) both fail, since a lifted pen means the left and right approaches have arrived at different heights
d) Condition (i) or condition (iii): the limit exists, but f(c) is either undefined or plotted at a different height from the limit

**7.** How does an essential discontinuity differ from an infinite discontinuity?
a) An essential discontinuity happens at a point outside the domain of f, whereas an infinite discontinuity happens at a point that is inside the domain
b) An essential discontinuity has one one-sided limit finite and the other infinite, whereas an infinite discontinuity has both one-sided limits infinite
c) At an infinite discontinuity each one-sided limit fails in a definite direction, ±∞, giving a vertical asymptote; at an essential discontinuity a one-sided limit settles on nothing at all, finite or infinite
d) An essential discontinuity is by definition one that cannot be removed, whereas an infinite discontinuity can be removed by giving f a value at the asymptote

**8.** A student verifies that lim(x→c⁻) f(x) = lim(x→c⁺) f(x) and concludes that f is continuous at c. What has actually been established, and what has not?
a) Nothing has been established, because one-sided limits carry no information about the two-sided limit at c
b) The limit at c exists, but continuity further requires f(c) to be defined and to equal that limit, and comparing the two sides tests neither
c) Continuity has been established, because equality of the one-sided limits is precisely what continuity at a point means
d) The limit exists and f(c) must equal it, because a curve necessarily passes through the height it approaches

**9. (explain why)** Explain why a removable discontinuity can be repaired by changing the function at exactly one point, while a jump discontinuity cannot be repaired by changing the function at any number of single points.

**10. (explain why)** Explain why writing lim(x→3⁺) f(x) = +∞ should be read as a description of how the limit fails rather than as a value of the limit, and what would go wrong if we treated +∞ as an ordinary answer.

**11. (explain why)** Explain why the graphical test 'you can draw the graph through the point without lifting your pen' is equivalent to the three-condition definition of continuity, saying which kind of lift corresponds to which failed condition.

**12. (explain why)** Explain why the value f(c) plays no part in computing lim(x→c) f(x), and why the definition of continuity therefore has to state the equality of limit and value as a separate condition rather than deriving it.
