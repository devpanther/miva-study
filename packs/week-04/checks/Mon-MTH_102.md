# Monday — MTH_102 nightly check

*Reading limits off a graph: one-sided limit notation, open vs shaded dots, when a limit exists, limit versus f(a), and the three conditions for continuity.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** A curve rises from the left and stops at an open circle at (2, 5); to the right of x = 2 it begins again at an open circle at (2, 5) and falls away; a shaded dot sits at (2, 1). Then:
a) lim_{x→2} f(x) = 5 and f(2) = 1
b) lim_{x→2} f(x) = 1 and f(2) = 1
c) lim_{x→2} f(x) does not exist and f(2) = 1
d) lim_{x→2} f(x) = 5 and f(2) = 5

**2.** The statement lim_{x→3⁻} f(x) = 4 says that:
a) f(x) approaches 4 as x approaches 3 through values less than 3
b) f(x) approaches 4 as x approaches 3 through values less than 4
c) f(x) stays below the height 4 for every x close to 3
d) f(3) equals 4 and the graph lies below y = 4 near there

**3.** A curve heads for height 2 from both sides of x = a, where there is an open circle at (a, 2); a shaded dot sits at (a, 7). Then:
a) lim_{x→a} f(x) = 2 and f is discontinuous at a
b) lim_{x→a} f(x) = 7 and f is continuous at a
c) lim_{x→a} f(x) does not exist, as the graph breaks at a
d) lim_{x→a} f(x) = 2 and f is continuous at a

**4.** To evaluate lim_{x→a⁻} f(x) from a graph you:
a) follow the curve towards a from the left and read the height it heads for
b) read the height of whatever point is plotted at x = a on the left branch
c) follow the curve to the left of a and read the x-value it heads for
d) take the lower of the two one-sided heights, as the sign means below

**5.** f is continuous at c if and only if:
a) lim_{x→c⁻} f(x) and lim_{x→c⁺} f(x) both exist and are finite
b) f(c) is defined, lim_{x→c} f(x) exists, and the two are equal
c) f(c) is defined and f is defined on an interval containing c
d) f(c) is defined and lim_{x→c} f(x) exists, in either order

**6.** Left of x = 1 a graph plunges along that vertical line to the bottom of the page; right of x = 1 it descends from the top of the page along the same line. Then lim_{x→1} f(x):
a) does not exist; the sides run to −∞ and to +∞
b) equals +∞, since the graph is unbounded at x = 1
c) equals 0, since −∞ and +∞ cancel each other out
d) equals ∞, since both sides grow without any bound

**7.** On the vertical line x = 1 a graph shows an open circle at (1, 4) and a shaded dot at (1, −2). This tells you that:
a) f(1) = −2, and 4 is the height the curve approaches at 1
b) f(1) = 4, and −2 is a stray point unrelated to the graph
c) f takes both of the values 4 and −2 at the point x = 1
d) f(1) is undefined, because one of the two circles is open

**8.** A graph flattens onto the horizontal line y = 2 as x runs far right, having crossed that line once at x = 5; far to the left it flattens onto y = −1. Then:
a) lim_{x→+∞} f(x) = 2 and lim_{x→−∞} f(x) = −1
b) lim_{x→+∞} f(x) = 5 and lim_{x→−∞} f(x) = −1
c) lim_{x→+∞} f(x) = 2 and lim_{x→−∞} f(x) = 2
d) neither limit exists, since the graph crosses y = 2

**9. (explain why)** Explain how lim_{x→a} f(x) can exist even though f(a) is undefined, describe what the graph looks like at that point, and say why the limit is entitled to ignore x = a.

**10. (explain why)** Explain the difference between writing lim_{x→a} f(x) = DNE and writing lim_{x→a} f(x) = +∞, and why the second is still a statement that the limit does not exist.

**11. (explain why)** The graph of g(x) = |x| has a sharp corner at x = 0. Use the three conditions to decide whether g is continuous at 0, and explain what property the corner does cost g.

**12. (explain why)** State the three conditions for continuity at c, and say which one fails at (i) a hole, (ii) a jump, (iii) a vertical asymptote.

---

## Answers

**1. a** — *The limit is read from the curve, the value from the shaded dot; they are independent.* Both sides head for height 5, so the limit is 5; the only filled point above x = 2 is at height 1, so f(2) = 1. (b) reads the shaded dot as the limit — the mistake of assuming the limit must equal the value. (d) reads an open circle as the value, but an open circle marks a point deliberately *not* on the graph. (c) assumes that a mismatch between limit and value destroys the limit; in fact the limit never looks at x = 2 at all.

**2. a** — *The one-sided superscript labels the side in x, not the size of f(x).* x → 3⁻ means x creeps up to 3 from below, through 2.9, 2.99, …, and the heights settle on 4. (b) attaches the minus sign to the output value instead of the input. (c) reads the minus as "f(x) approaches 4 from below", which is a claim about y that the notation does not make. (d) confuses the limit with the function value, which the notation deliberately says nothing about.

**3. a** — *The limit existing is only one of the three conditions for continuity.* The curve settles on 2 from both sides, so the limit is 2; but the shaded dot gives f(a) = 7, so condition (iii), lim = f(a), fails and f is discontinuous (a removable discontinuity). (d) is the standard error of treating "the limit exists" as sufficient for continuity. (b) reads the shaded dot as the limit. (c) assumes a break in the picture kills the limit, but a hole leaves both one-sided approaches intact.

**4. a** — *A one-sided limit is about the trend of the heights, not about the plotted endpoint.* You slide along the curve towards x = a from the left and record the y-value it is heading for, whether the endpoint is open, closed, or absent. (b) reads the endpoint, which is f(a) (if it is a shaded dot) and not the limit. (c) swaps the axes: the x-value always heads to a, so it carries no information. (d) reads the minus sign as "the lower value", a misreading of the notation.

**5. b** — *All three conditions are needed: defined, limit exists, and equal.* (a) drops the function value entirely, so it would call a hole continuous. (d) keeps both objects but drops the requirement that they agree, so it would call the shaded-dot-off-the-curve picture continuous. (c) confuses "f is defined near c" with continuity — a jump function is defined everywhere and still discontinuous.

**6. a** — *An infinite one-sided limit is a failure, and two failures of opposite sign cannot be combined.* The values run down without bound on the left and down from above without bound on the right, so no single number is approached: the limit does not exist, and x = 1 is a vertical asymptote (an infinite discontinuity). (b) picks one side and ignores the other. (d) ignores the signs, which are exactly what distinguishes this from 1/(x−1)². (c) treats +∞ and −∞ as numbers that can be averaged.

**7. a** — *A function has exactly one output at each input: the shaded dot.* The open circle at (1, 4) says (1, 4) is not on the graph, and it is there to tell you where the curve was heading, i.e. the limit; the shaded dot says f(1) = −2. (b) reads the open circle as the value. (c) forgets that a graph with two points on one vertical line is not a function. (d) treats the presence of an open circle as proof that f(1) is undefined, which is only true when there is no shaded dot anywhere on that vertical line.

**8. a** — *A limit at infinity is the height the graph settles onto, and the two ends are read separately.* (d) assumes a horizontal asymptote cannot be crossed; crossings at finite x are irrelevant, since the limit only describes far-out behaviour (only *vertical* asymptotes cannot be crossed). (b) reports the x-coordinate of the crossing instead of the height. (c) assumes one horizontal asymptote must serve both ends; a graph may settle onto different heights left and right.

**9.** *Concept: the limit describes the approach to a, not the state at a.* The definition of lim_{x→a} f(x) = L quantifies over x close to a **with x ≠ a**; the point x = a is excluded by construction, so whether f is defined there is irrelevant to the limit. Graphically the curve runs unbroken up to x = a from both sides and heads for the same height L, but the point (a, L) is punched out and drawn as an **open circle**, with no shaded dot anywhere on the line x = a. Example: f(x) = (x² − 1)/(x − 1) equals x + 1 for every x ≠ 1, so the graph is the line y = x + 1 with a hole at (1, 2): lim_{x→1} f(x) = 2 while f(1) is undefined (0/0). This is a **removable** discontinuity, repaired by defining f(1) = 2.

**10.** *Concept: "= +∞" describes the manner of the failure; it is not a value.* "DNE" is the blanket statement that no number L is approached — typically because the one-sided limits settle on different heights (a jump), or because the values never settle at all (oscillation). "lim_{x→a} f(x) = +∞" is the more informative statement that the values grow beyond every bound as x approaches a from both sides; since +∞ is not a real number, no real L is approached, so this is a special *case* of the limit not existing, reported with extra information. Graphically it means a **vertical asymptote** at x = a with the curve running off the top of the page on both sides (e.g. 1/(x−a)²). If the two sides run to −∞ and +∞ respectively, you may not even write ±∞ for the two-sided limit — only DNE, with the one-sided behaviour stated separately.

**11.** *Concept: continuity is about no break, not about no corner.* (i) g(0) = |0| = 0, defined. (ii) On the right arm g(x) = x, so lim_{x→0⁺}|x| = 0; on the left arm g(x) = −x, so lim_{x→0⁻}|x| = 0; the two agree, so the limit exists and equals 0. (iii) 0 = g(0). All three conditions hold, so **g is continuous at 0** — and indeed you can trace the whole V without lifting your pen. What the corner costs is **differentiability**: the left arm has slope −1 and the right arm slope +1, so there is no single tangent line at the origin. Continuity is required for differentiability, not the other way round.

**12.** *Concept: each discontinuity type is a named failure of one of the three conditions.* The conditions are (i) **f(c) is defined**; (ii) **lim_{x→c} f(x) exists**; (iii) **lim_{x→c} f(x) = f(c)**.
(i) **Hole (removable):** the one-sided limits agree, so (ii) holds; what fails is (i) if there is no shaded dot, or (iii) if the shaded dot sits off the curve at a different height.
(ii) **Jump:** both one-sided limits exist and are finite but are unequal, so **(ii) fails** — and once (ii) fails, (iii) cannot be tested. f(c) is often perfectly well defined, which is exactly why (i) alone proves nothing.
(iii) **Vertical asymptote (infinite):** at least one one-sided limit is +∞ or −∞, so no real number is approached and **(ii) fails**; f(c) is normally undefined as well, so (i) fails too.
