# MTH_102 — Week 4 Summary

*Elementary Mathematics II (Calculus) · Week 4 (28 Sep – 4 Oct 2026) · Topic: Evaluating Limits Graphically — Continuity, Discontinuity and Asymptotes*

## The 8 most examinable things this week

1. **To read lim_{x→a} f(x) off a graph, trace each branch toward the vertical line x = a and read the *height* it heads for — then ignore whatever dot sits at x = a.** The limit is about the approach, not the arrival.
2. **Filled (shaded) dot = the function's value; open circle = a point the graph deliberately misses.** f(a) is read from the filled dot on the line x = a; if no filled dot sits there, f(a) is **undefined**. A vertical line can carry many open circles but **at most one** filled dot (vertical line test).
3. **Existence test, graphically:** lim_{x→a} f(x) exists **⟺** the left branch and the right branch head for the **same finite height**. Equal heights ⟹ that height is the limit; different heights, or no height at all, ⟹ DNE.
4. **Three graphical modes of failure:** (i) **jump** — two different finite heights; (ii) **infinite** — a branch runs up or down a vertical asymptote; (iii) **oscillation** — the branch never settles (infinitely many waves squeezed toward x = a).
5. **Continuity at c needs all three:** f(c) defined, lim_{x→c} f(x) exists, and **the two are equal**. Graphically: the pen crosses x = c without lifting. Any one failing ⟹ discontinuous at c.
6. **Classification:** *removable* (limit exists, but f(c) is missing or sits elsewhere — a hole), *jump* (both one-sided limits exist, finite, unequal), *infinite* (a one-sided limit is ±∞ — vertical asymptote), *essential/oscillatory* (a one-sided limit fails to exist for a reason other than blowing up). **Only removable ones can be repaired by redefining one point.**
7. **Asymptotes are limit statements.** x = a is a **vertical** asymptote ⟺ at least one of lim_{x→a⁻} f, lim_{x→a⁺} f is ±∞. y = L is a **horizontal** asymptote ⟺ lim_{x→+∞} f = L or lim_{x→−∞} f = L. A curve **may cross a horizontal asymptote** (even infinitely often); it can **never** cross a vertical one.
8. **lim = +∞ is a description of non-existence, not a value.** Same infinity on both sides ⟹ we write lim_{x→a} f(x) = +∞ (or −∞) as shorthand for unbounded growth; opposite infinities ⟹ we write only **DNE**. In neither case does a real-number limit exist, and in neither case is f continuous at a.

## Reading a graph: the four-step procedure

For any marked point x = a on a plot of f, answer these **four separate questions in this order** — never merge them.

1. **lim_{x→a⁻} f(x)** — put a finger on the curve to the *left* of a and slide right; the height it approaches is the left limit. (Runs off the top/bottom ⟹ +∞/−∞; never settles ⟹ DNE.)
2. **lim_{x→a⁺} f(x)** — slide *leftwards* along the branch to the right of a.
3. **lim_{x→a} f(x)** — equal finite heights ⟹ that number; otherwise DNE (with the mode named).
4. **f(a)** — look **only** for a filled dot on the line x = a. No filled dot ⟹ undefined.

Then continuity is a one-line check: **is (3) a number, is (4) a number, and are they the same number?**

## Continuity — statement and conditions

**Definition.** f is **continuous at c** if all three hold: (i) c is in the domain, i.e. **f(c) is defined**; (ii) **lim_{x→c} f(x) exists** (both one-sided limits exist, are finite and agree); (iii) **lim_{x→c} f(x) = f(c)**. f is **continuous on an interval** if it is continuous at every interior point, with **one-sided** continuity at the endpoints (lim_{x→c⁺} f = f(c) at a left endpoint, lim_{x→c⁻} f = f(c) at a right endpoint).

**One-sided continuity.** f is *continuous from the left* at c if lim_{x→c⁻} f(x) = f(c); *from the right* if lim_{x→c⁺} f(x) = f(c). At a jump, f is typically continuous from exactly one side — a real, examinable distinction from being continuous.

**Pen test (the graphical form).** Continuous on an interval ⟺ the whole arc can be drawn without lifting the pen. A hole, a jump or an asymptote forces a lift.

## Classification of discontinuities at x = c

| Type | Limit behaviour | What the graph shows | Repairable? |
|---|---|---|---|
| **Removable (hole)** | lim_{x→c} f exists (finite) but f(c) undefined, or f(c) ≠ limit | Open circle on the curve; possibly a stray filled dot elsewhere on the line x = c | **Yes** — redefine f(c) := the limit |
| **Jump** | lim_{x→c⁻} and lim_{x→c⁺} both exist, finite, **unequal** | Two branch-ends at different heights; a vertical gap | No |
| **Infinite** | at least one one-sided limit is ±∞ | Vertical asymptote at x = c; branch(es) shoot off | No |
| **Essential / oscillatory** | a one-sided limit fails to exist and not by blowing up | Endless compressed waves, no settling height | No |

**Note.** "f(c) is undefined" is **not** a classification and not a mode of limit failure — a hole, a jump *and* an asymptote can all sit at an undefined point, and the limit may still be a perfectly good number.

## Worked examples — one per technique

**(1) Reading a limit at a continuous point.** f(x) = 2x + 1. *Graph:* an unbroken straight line, y-intercept 1, slope 2 (one right, two up), no dots missing anywhere. At x = 3 the left branch climbs to height 7 and the right branch descends to height 7; the point (3, 7) is on the line as a filled dot. So lim_{x→3⁻} = 7, lim_{x→3⁺} = 7, **lim_{x→3} (2x + 1) = 7**, f(3) = 7, and since 7 = 7 the function is **continuous** at 3. This is why direct substitution worked in Week 3 — substitution *is* the continuity condition.

**(2) A one-sided limit read graphically.** g(x) = |x|. *Graph:* a V with its vertex a filled dot at (0, 0); the left arm falls from upper-left to the vertex with slope −1, the right arm rises from the vertex with slope +1. Coming in from the right, the height drops toward 0, so **lim_{x→0⁺} |x| = 0**; from the left it also drops toward 0, so lim_{x→0⁻} |x| = 0. Equal, so lim_{x→0} |x| = 0 = g(0): **continuous** at 0 (the corner is not a discontinuity — a corner breaks *differentiability*, not continuity).

**(3) Removable discontinuity — the hole.** f(x) = (x² − 1)/(x − 1). For every x ≠ 1 this equals x + 1. *Graph:* the straight line y = x + 1 with a single **open circle at (1, 2)** and **no filled dot anywhere on the line x = 1**. Both branches head for height 2, so lim_{x→1} f(x) = **2**; f(1) is **undefined**, so condition (i) fails and f is **discontinuous** at 1 — **removably**, since defining f(1) := 2 fills the hole and makes it continuous.

**(4) Removable with a misplaced value.** Same formula but with the extra rule f(1) = 5. *Graph:* the line y = x + 1, an **open circle at (1, 2)**, and a lone **filled dot at (1, 5)** floating above the line. Now f(1) *is* defined and the limit *does* exist — condition (iii) is what fails: 2 ≠ 5. Still **removable**; the repair is to move the filled dot down to (1, 2).

**(5) The trap: a 0/0 formula that is nevertheless continuous.** f(x) = (x² − 4)/(x − 2) for x ≠ 2, with f(2) = 4. Off x = 2 the graph is the line y = x + 2, which heads for height 4 from both sides, and the rule supplies a **filled dot exactly at (2, 4)** — on the line. Limit = 4, f(2) = 4, so f is **continuous at 2**, with no visible break at all. *A formula that reads 0/0 at a point does not by itself put a discontinuity there.*

**(6) Jump discontinuity, and one-sided continuity.** f(x) = 5 − x for x ≤ 2, f(x) = x² for x > 2. *Graph:* a falling line to the left ending in a **filled dot at (2, 3)**; a rising parabola to the right starting from an **open circle at (2, 4)**. So lim_{x→2⁻} = 3, lim_{x→2⁺} = 4 — both exist, both finite, **unequal** ⟹ **lim_{x→2} f(x) DNE**, a **jump** of size 1. f(2) = 3, which equals the left limit, so f is **continuous from the left** at 2 but **not continuous** at 2. Not repairable: no single value of f(2) can close a gap between two different heights.

**(7) Infinite discontinuity — opposite signs.** f(x) = 1/(x − 3). *Graph:* two branches either side of the vertical line x = 3. For x slightly less than 3 the denominator is a small **negative** number, so the left branch plunges down the asymptote: **lim_{x→3⁻} = −∞**. For x slightly more than 3 it is small **positive**, so the right branch climbs it: **lim_{x→3⁺} = +∞**. Both branches flatten toward the horizontal line y = 0 far out. Conclusion: **lim_{x→3} f(x) DNE** — and we may *not* write it as ±∞ either, since the two sides disagree. There is no dot at x = 3: f(3) undefined. **Infinite discontinuity**; **vertical asymptote x = 3**; **horizontal asymptote y = 0**.

**(8) Infinite discontinuity — matching signs.** f(x) = 1/(x − 3)². The denominator is positive on **both** sides, so both branches climb the asymptote: lim_{x→3⁻} = lim_{x→3⁺} = **+∞**, and we write **lim_{x→3} f(x) = +∞** as a description. There is still **no number** for the limit and f is still discontinuous (infinite) at 3 — writing "= +∞" records *how* it fails, not that it succeeded.

**(9) Oscillatory (essential) discontinuity.** f(x) = sin(1/x) for x ≠ 0. *Graph:* far from 0 the waves are wide; as x → 0 they compress without limit, so that in **every** interval (0, δ) the curve completes infinitely many full oscillations between the heights −1 and +1, touching both endlessly. No branch heads for any single height, so **lim_{x→0⁺} does not even exist** — hence neither does lim_{x→0}. It is **not** a jump (a jump needs both one-sided limits to *exist*) and **not** infinite (f stays inside [−1, 1], so there is no asymptote). Contrast x sin(1/x), whose oscillations are squeezed between −|x| and |x| and which therefore *does* tend to 0.

**(10) Asymptotes as limit statements.** f(x) = 2x/(x² + 1). *Graph:* passes through the origin, rises to a peak at (1, 1), falls back and flattens along the x-axis; mirror-image below the axis for x < 0. Since lim_{x→+∞} f = 0 and lim_{x→−∞} f = 0, **y = 0 is a horizontal asymptote at both ends** — and the curve **crosses it at (0, 0)**, which is entirely legal: a horizontal asymptote constrains only the far-out behaviour. The denominator x² + 1 is never zero, so there is **no vertical asymptote** anywhere and f is continuous on all of ℝ.

## Commonly confused

- **The limit vs the value.** Reading f(a) off the filled dot and calling it the limit is the single commonest graph error. The limit is set by the *branches*; f(a) is set by the *dot*. They agree exactly when f is continuous at a.
- **"f(a) undefined ⟹ no limit."** False, and it is the point of the whole hole discussion: (x² − 1)/(x − 1) has no value at 1 and a limit of 2.
- **"f(a) ≠ limit ⟹ no limit."** Also false. The mismatch destroys *continuity*, not the limit — that is precisely the removable case.
- **Open circle vs filled dot.** An open circle marks a height the graph approaches but does not attain; only a filled dot reports a function value. Two filled dots on one vertical line would break the definition of a function.
- **Jump vs oscillation.** A jump requires **both** one-sided limits to exist and be finite. If a one-sided limit itself fails to exist, the discontinuity is essential, not a jump.
- **±∞ and the existence test.** "Both sides give +∞, so they agree, so the limit exists" — no. The existence test requires two **finite**, equal values. Matching infinities earn the notation = +∞ and nothing more.
- **Vertical asymptote vs hole.** Both can occur where a denominator vanishes. 0/0 that cancels ⟹ hole; k/0 with k ≠ 0 ⟹ asymptote. Check the numerator before you decide.
- **"An asymptote is a line the curve never touches."** Wrong for horizontal asymptotes: 2x/(x² + 1) crosses y = 0, and sin(x)/x crosses it infinitely often. Only *vertical* asymptotes are untouchable, and only because the function is undefined there.
- **Corners and cusps.** |x| at 0 and x^(2/3) at 0 have sharp points but are perfectly continuous. Sharpness is a derivative issue; only breaks, holes and blow-ups are continuity issues.
- **Removable means "repairable at one point".** Jumps, asymptotes and oscillations cannot be fixed by redefining a single value, no matter how the graph is redrawn.

---

*Note on the source: this week's deck carries its learning objectives, the three-condition definition of continuity, the pen test, the four named discontinuity types and two graphical walkthroughs (f(x) = 2x + 1 at x = 3, and g(x) = |x| as x → 0⁺), but every graph and every TASK is an image, so the deck text contains no readable plots — the numbers it does quote (lim_{x→2⁻} f = 3, lim_{x→2⁺} f = −4, f(2) = 1; and lim_{x→3⁻} f = −∞, lim_{x→3⁺} f = +∞ with f(3) undefined) are reproduced above in the four-step procedure and Example 7. "Essential" discontinuity is named on a slide but never defined, and oscillation, horizontal asymptotes and one-sided continuity do not appear at all; they are supplied here from the standard 100-level treatment because they are the natural exam extensions of exactly those headings and were prefigured by Week 3.*
