# MTH_102 — Week 4

*Elementary Mathematics II (Calculus) · Week 4 (28 Sep – 4 Oct 2026)*

*Note on the source: the lecture text extracted well, but every graph in the deck is an image, so the numbers attached to the graphs (Task 1, the "find the limit from a graph" slides) arrive garbled or incomplete, and "essential discontinuity" is named in the list of types but never defined. The graphs below are reconstructed descriptions consistent with the deck, and the standard definition of essential discontinuity is supplied.*

## Most likely to be examined

1. **The three conditions for continuity at a point.** f is continuous at c (c in the domain of f) iff: (i) f(c) is defined; (ii) lim(x→c) f(x) exists; (iii) lim(x→c) f(x) = f(c). All three, in that order — failing any one makes f discontinuous at c.
2. **Existence criterion for a two-sided limit.** lim(x→c) f(x) = L exists iff lim(x→c⁻) f(x) = lim(x→c⁺) f(x) = L, with L a *finite real number*. If lim(x→c⁻) f(x) ≠ lim(x→c⁺) f(x), the limit **DNE**.
3. **Reading a graph.** lim(x→c⁻) f(x) = the height the curve runs into from the left; lim(x→c⁺) f(x) = the height it runs into from the right; f(c) = the **shaded (solid) dot** at x = c. An open circle "○" marks a point where the curve is *not* defined and contributes nothing to f(c).
4. **Classifying a discontinuity from the pair (L⁻, L⁺)**: removable if L⁻ = L⁺ = L finite but f(c) ≠ L or f(c) undefined (a *hole*); jump if L⁻, L⁺ both finite but L⁻ ≠ L⁺ (a *break*); infinite if L⁻ or L⁺ is ±∞ (a *vertical asymptote*); essential if a one-sided limit fails to exist at all (wild oscillation), so no finite or infinite value can be assigned.
5. **The standard removable example.** f(x) = (x² − 1)/(x − 1); factor x² − 1 = (x−1)(x+1), cancel to get x + 1 for x ≠ 1, so lim(x→1) f(x) = 2 while f(1) is undefined — a hole at (1, 2).
6. **The basic graphical limit.** lim(x→3) (2x + 1) = 7, read off the straight line of slope m = 2 and y-intercept c = 1, which has no break, hole or jump at x = 3.
7. **The one-sided example.** g(x) = |x| is the V-shaped graph through the origin; lim(x→0⁺) |x| = 0 (and lim(x→0⁻) |x| = 0, g(0) = 0, so |x| is continuous at 0).
8. **The infinite case.** If lim(x→3⁺) f(x) = +∞ and lim(x→3⁻) f(x) = −∞, then lim(x→3) f(x) = DNE; and if there is no shaded dot at x = 3, f(3) is undefined.

## The substance

**Why continuity is a limit topic.** Continuity of a function *at a point* is defined using limits. Limits decide whether a function is continuous at a specific point: for continuity at c, the limit as x → c must exist **and** equal f(c). If the limit does not exist, or exists but is not equal to f(c), f is not continuous at c.

**Definition (continuity at a point).** f is continuous at a point c in its domain if

&nbsp;&nbsp;(i) f(c) is defined &nbsp;&nbsp;(ii) lim(x→c) f(x) exists &nbsp;&nbsp;(iii) lim(x→c) f(x) = f(c)

**Graphical statement of continuity.** On a graph, continuity is a smooth, unbroken curve: at a point of continuity you can draw the graph through that point **without lifting your pen**. Any hole, jump, or disruption at a particular point signals a discontinuity there.

**One-sided limits.**
- lim(x→c⁻) f(x) — the value f approaches as x moves toward c from the **left** (x < c).
- lim(x→c⁺) f(x) — the value f approaches as x moves toward c from the **right** (x > c).

**Existence rule.** If lim(x→c⁺) f(x) = lim(x→c⁻) f(x) the limit is said to **EXIST**; if lim(x→c⁺) f(x) ≠ lim(x→c⁻) f(x) the limit **DOES NOT EXIST (DNE)**. To analyse a discontinuity you always check how the function approaches the point from both sides: *if the approaches differ, it is a discontinuity.*

**The four types of discontinuity.**

| Type | One-sided limits | f(c) | Graphical cue |
|---|---|---|---|
| Removable (hole) | L⁻ = L⁺ = L, finite | undefined, or defined but ≠ L | open circle at (c, L) |
| Jump | L⁻, L⁺ finite, L⁻ ≠ L⁺ | may be either value or neither | curve breaks and restarts at a different height |
| Infinite | L⁻ and/or L⁺ = ±∞ | usually undefined | vertical asymptote at x = c; curve rises or falls indefinitely |
| Essential | at least one one-sided limit fails to exist (oscillation) | usually undefined | curve oscillates without settling as x → c |

- **Removable discontinuity ("hole"):** the function is not defined at the point (or is defined at the wrong height), but the gap can be *filled* — redefine f(c) := L — to make f continuous there. As x approaches the point the function approaches one particular value.
- **Infinite discontinuity:** f approaches +∞ or −∞ as x → c. Vertical asymptote; the function rises or falls indefinitely.
- **Jump discontinuity:** a sudden jump in value at x = a. The graph has a break or gap, and the function approaches **different** values from the left and the right.
- **Essential discontinuity:** the failure cannot be described by a single finite value or by ±∞ at all — no repair and no asymptote captures it.

**Note on "limit = ∞".** Writing lim(x→3⁺) f(x) = +∞ is a *description of how the limit fails*, not a value: ∞ is not a real number, so the two-sided limit is DNE.

**Practical applications** (named in the week's summary strand): engineering, physics, economics and computer science — analysing system behaviour, describing motion and phenomena, modelling markets and trends, optimising algorithms. The week's case study is *Evaluating Limits and Continuity in Bridge Design*: engineers use graphical evaluation of limits to check that bridge segments join continuously (span, traffic load, environmental and geological factors), because a discontinuity at a joint is a structural failure.

## Worked examples

### Example 1 — Basic limit read off a graph: lim(x→3) (2x + 1)

1. Identify the shape: f(x) = 2x + 1 is a straight line with **slope m = 2** and **y-intercept c = 1**.
2. Plot it: from (0, 1), for every 1 unit right the line rises 2 units — through (1, 3), (2, 5), (3, 7), (4, 9).
3. Locate x = 3 on the x-axis and travel up to the curve.
4. Approach from the left (x = 2.9, 2.99, …): heights 6.8, 6.98, … → **7**, so lim(x→3⁻) = 7.
5. Approach from the right (x = 3.1, 3.01, …): heights 7.2, 7.02, … → **7**, so lim(x→3⁺) = 7.
6. The two agree, and there is no break, hole or jump on the line at x = 3, so the limit exists:
   **lim(x→3) (2x + 1) = 2(3) + 1 = 6 + 1 = 7.**
7. Check continuity: f(3) = 7 is defined, the limit exists, and they are equal — so f is continuous at 3 (the pen never lifts).

### Example 2 — One-sided limit read off a graph: lim(x→0⁺) |x|

1. Plot g(x) = |x|: a **V-shaped graph** with vertex at the origin, symmetric about the y-axis; the right arm is y = x (x ≥ 0), the left arm is y = −x (x < 0).
2. The superscript "+" says: use **only the right side of the origin, x > 0**.
3. Locate x = 0 and walk in along the right arm: x = 0.5 → g = 0.5; x = 0.1 → g = 0.1; x = 0.01 → g = 0.01.
4. The heights decrease smoothly to 0, so **lim(x→0⁺) |x| = 0**.
5. For comparison, the left arm gives g(−0.01) = 0.01 → **lim(x→0⁻) |x| = 0** too.
6. Since L⁻ = L⁺ = 0 and g(0) = |0| = 0, the two-sided limit exists and equals g(0): |x| is **continuous at 0** despite the sharp corner. (A corner is not a discontinuity.)

### Example 3 — Removable discontinuity: f(x) = (x² − 1)/(x − 1), limit as x → 1

1. Try direct substitution: (1² − 1)/(1 − 1) = 0/0 — **indeterminate**, so substitution alone decides nothing. It is a signal to factor, not a verdict of DNE.
2. Factor the numerator (difference of two squares): x² − 1 = (x − 1)(x + 1).
3. f(x) = (x − 1)(x + 1)/(x − 1) = **x + 1 for every x ≠ 1**. The cancellation is legal because in a limit x → 1 we never set x = 1, so x − 1 ≠ 0.
4. Left: lim(x→1⁻) (x + 1) = 2. Right: lim(x→1⁺) (x + 1) = 2. Equal, so **lim(x→1) f(x) = 2**.
5. Value: f(1) = 0/0 is **undefined**, so condition (i) of continuity fails.
6. Classification: L⁻ = L⁺ = 2 finite but f(1) undefined → **removable discontinuity**. The graph is the line y = x + 1 with an **open circle at (1, 2)**.
7. Repair: define F(x) = f(x) for x ≠ 1 and F(1) = 2. Now all three conditions hold and F is continuous at 1 — this is exactly what "removable" means.

### Example 4 — Jump discontinuity read off a graph

*The graph:* for x < 2 the curve rises and runs into height 3 at x = 2, ending in an open circle at (2, 3). For x > 2 the curve starts at an open circle at (2, −4) and continues downward. A single **shaded dot sits at (2, 1)**.

1. Left branch: as x → 2 from below the heights climb toward 3, so **lim(x→2⁻) f(x) = 3**.
2. Right branch: as x → 2 from above the heights come in at −4, so **lim(x→2⁺) f(x) = −4**.
3. Compare: 3 ≠ −4, so **lim(x→2) f(x) = DNE**.
4. Value: read the shaded dot toward the y-axis — **f(2) = 1**. (The two open circles contribute nothing.)
5. Classify: both one-sided limits are finite but unequal → **jump discontinuity** at x = 2.
6. Continuity check: condition (ii) already fails, so f is not continuous at 2 — and no choice of f(2) can fix it, since the failure is that the two sides disagree with each other.

### Example 5 — Infinite discontinuity read off a graph

*The graph:* a vertical dashed line at x = 3. To the left of it the curve plunges downward hugging the line; to the right it climbs upward hugging the line. There is no dot of any kind at x = 3.

1. Right: as x → 3⁺ the heights grow past 10, 100, 1000 without bound → **lim(x→3⁺) f(x) = +∞**.
2. Left: as x → 3⁻ the heights fall past −10, −100, −1000 without bound → **lim(x→3⁻) f(x) = −∞**.
3. Neither one-sided limit is a real number, and in any case they disagree, so **lim(x→3) f(x) = DNE**.
4. Value: there is **no shaded dot** toward the y-axis at x = 3, so **f(3) is undefined (DNE)**.
5. Classify: unbounded behaviour with a vertical asymptote → **infinite discontinuity** at x = 3.
6. It is not removable: no single number assigned to f(3) can make the limit exist, because the limit does not exist to begin with.

### Example 6 — Task-1 style graph reading (all four quantities)

*The graph:* for x < 3 the curve rises to a solid dot at (3, 4). For x > 3 the curve begins at an open circle at (3, 2) and continues to the right.

1. **lim(x→3⁻) f(x) = 4** — the height the left branch runs into.
2. **lim(x→3⁺) f(x) = 2** — the height the right branch starts from (the open circle still shows the approach height).
3. 4 ≠ 2, so **lim(x→3) f(x) = DNE**.
4. **f(3) = 4** — the shaded dot, not the open circle.
5. Type: finite, unequal one-sided limits → **jump discontinuity**. Note that f(3) *is* defined here; a discontinuity does not require the function to be undefined.

## Commonly confused

- **lim(x→c) f(x) versus f(c).** The limit is built only from x near c, never from x = c itself; f(c) is a single plotted point. *Test:* cover the point x = c with your thumb — anything you can still read off the graph is the limit; anything hidden is f(c).
- **Open circle versus shaded dot.** An open circle says "the curve approaches this height here but is not defined here"; a shaded dot says "this is f(c)". *Test:* only a filled dot may be quoted as a function value.
- **Removable versus jump.** Both show a break at a point. *Test:* compare L⁻ and L⁺. Equal → removable (one hole, fixable by redefining one point). Unequal → jump (two different heights, unfixable by any single value).
- **Jump versus infinite.** Both have the two branches disagreeing. *Test:* are the one-sided limits *finite numbers*? Finite and unequal → jump. At least one is ±∞ (curve hugging a vertical line) → infinite.
- **"Limit equals infinity" versus "limit exists".** *Test:* a limit exists only if it is a single **finite real number**. lim = +∞ is a statement that the limit fails to exist, in a particular unbounded way.
- **Two-sided DNE versus one-sided DNE.** At a jump the two-sided limit is DNE but both one-sided limits exist perfectly well. *Test:* say which limit you mean before answering "DNE".
- **Corner versus discontinuity.** |x| has a sharp corner at 0 yet is continuous there. *Test:* continuity is about lifting the pen, not about smoothness of direction; a corner never lifts the pen.
- **"Defined at c" versus "continuous at c".** Example 6 has f(3) = 4 defined and is still discontinuous. *Test:* being defined is only condition (i) of three.
- **0/0 versus DNE.** Getting 0/0 by substitution means *indeterminate* — factor and cancel first. *Test:* only after simplifying may you decide whether the limit exists.
- **Essential versus infinite.** Both are "bad" discontinuities. *Test:* infinite means the one-sided limits run to ±∞ (a definite direction, an asymptote); essential means a one-sided limit fails even to do that — the values oscillate and settle on nothing.
