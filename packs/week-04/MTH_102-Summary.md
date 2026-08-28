# MTH_102 — Week 4 Summary

*Elementary Mathematics II (Calculus) · Week 4 (28 Sep – 4 Oct 2026) · Topic: Evaluating Limits Graphically — Continuity and Discontinuity*

## The 8 most examinable things this week

1. Reading a one-sided limit off a graph: put your finger on the curve, slide it **towards** x = a, and read the **height (y)** it heads for — never the x-value, and never the plotted endpoint.
2. **lim_{x→a} f(x) exists ⟺ lim_{x→a⁻} f(x) = lim_{x→a⁺} f(x)** (and the common value is finite). Unequal one-sided limits ⟹ **DNE**.
3. **lim_{x→a} f(x) and f(a) are two independent readings.** The limit deliberately ignores what happens *at* x = a; f(a) is read from the **filled (shaded) dot** on the vertical line x = a.
4. Dot convention: **closed/shaded dot = the point is on the graph**; **open circle = it is not**. At most one filled dot per x-value (a function has one output).
5. Continuity at c, the **three conditions**: (i) f(c) is defined; (ii) lim_{x→c} f(x) exists; (iii) lim_{x→c} f(x) = f(c). Fail any one and f is discontinuous at c.
6. The four discontinuities and their graphical signature: **removable** (hole), **jump** (finite break), **infinite** (vertical asymptote), **essential/oscillating** (no settling value).
7. Writing lim_{x→a} f(x) = +∞ is a **description of how the limit fails**, not a value: the limit still does not exist as a number.
8. Limits at infinity are read as **horizontal asymptotes** — the height the graph flattens towards as x → +∞ or x → −∞, which the graph **may cross** at finite x.

## Reading a limit off a graph — the procedure

Given a graph of f and a point x = a:

1. **From the left (lim_{x→a⁻}).** Travel along the curve from the left towards x = a. Read the y-value the curve rises or falls to. Ignore whether the endpoint is open or closed.
2. **From the right (lim_{x→a⁺}).** Same, travelling leftwards from the right of a.
3. **Compare.** Equal and finite ⟹ the two-sided limit exists and equals that common value. Different ⟹ **DNE**. One or both running off the page ⟹ infinite behaviour, so **DNE** (described as ±∞).
4. **Then, separately, read f(a).** Look straight up (or down) the vertical line x = a for the **shaded** dot; its height is f(a). Open circle only, or no dot at all ⟹ **f(a) is undefined**.

The source's worked reading: for one graph lim_{x→2⁻} f(x) = 3 while lim_{x→2⁺} f(x) = −4, so lim_{x→2} f(x) **DNE**, and yet the shaded dot gives f(2) = 1 — three different numbers, all legitimately read off one picture.

## Notation

- **lim_{x→a⁻} f(x)** — limit from the left; x approaches a through values **less than a**. The minus sign refers to the **x-side**, never to the size of f(x).
- **lim_{x→a⁺} f(x)** — limit from the right; x approaches a through values **greater than a**.
- **lim_{x→a} f(x) = L** — as x gets arbitrarily close to a (from either side, x ≠ a), f(x) gets arbitrarily close to L.
- **DNE** — does not exist. Used when the one-sided limits disagree, when either is infinite, or when the values never settle.
- **lim_{x→∞} f(x) = L / lim_{x→−∞} f(x) = L** — the graph levels off at the horizontal line y = L far to the right / far to the left.

## Continuity

**Definition.** f is continuous at a point c of its domain iff f(c) is defined, lim_{x→c} f(x) exists, and lim_{x→c} f(x) = f(c). f is continuous **on an interval** if it is continuous at every point of it.

**Graphical test.** A continuous graph is a smooth, unbroken curve — you can draw it over that stretch **without lifting your pen**. Any hole, jump, or asymptote forces the pen off the paper and marks a point of discontinuity.

**Continuity is not smoothness.** f(x) = |x| has a sharp corner at x = 0, but lim_{x→0⁻}|x| = 0 = lim_{x→0⁺}|x| = |0|, so it is **continuous** there. A corner is a failure of differentiability (Week 5's business), not of continuity.

## The four types of discontinuity

| Type | Graphical signature | Limit behaviour | Which condition fails |
|---|---|---|---|
| **Removable (hole)** | open circle; curve otherwise unbroken | lim exists (both sides agree) | f(c) undefined, or defined but ≠ the limit |
| **Jump** | break; graph restarts at a different height | both one-sided limits exist and are **finite** but **unequal** | the limit does not exist |
| **Infinite** | vertical asymptote; graph runs off to ±∞ | at least one one-sided limit is +∞ or −∞ | the limit does not exist (and f(c) usually undefined) |
| **Essential / oscillating** | endless wobble that never settles, e.g. sin(1/x) near 0 | neither one-sided limit exists, finite or infinite | the limit does not exist |

**Removable** is the only one you can repair: define (or redefine) f(c) to be the common limit L, and the three conditions are all satisfied. A jump, an asymptote or an oscillation cannot be fixed by moving one point.

## Worked examples

**(1) Two-sided limit from one-sided behaviour.** A graph climbs steadily from the left and stops at an **open circle at (2, 5)**; on the right of x = 2 the curve begins again at an **open circle at (2, 5)** and falls away; a **shaded dot sits at (2, 1)**.
Left: lim_{x→2⁻} f(x) = **5**. Right: lim_{x→2⁺} f(x) = **5**. They agree, so **lim_{x→2} f(x) = 5**. The value is read from the shaded dot: **f(2) = 1**. Since 5 ≠ 1, condition (iii) fails: **removable discontinuity at x = 2**, repaired by resetting f(2) = 5.

**(2) A limit that fails to exist — jump.** A graph runs along a curve to a **shaded dot at (2, 3)**, then restarts at an **open circle at (2, −4)** and continues down to the right.
lim_{x→2⁻} f(x) = **3**, lim_{x→2⁺} f(x) = **−4**. Both exist and are finite but they disagree, so **lim_{x→2} f(x) DNE** — a **jump discontinuity**. Note f(2) = 3 is perfectly well defined; a defined value does **not** rescue the limit. Same reading algebraically: f(x) = |x − 2|/(x − 2) has left limit −1, right limit +1 at x = 2.

**(3) Limit vs function value at a removable discontinuity.** f(x) = (x² − 1)/(x − 1). Factor: (x − 1)(x + 1)/(x − 1) = **x + 1 for every x ≠ 1**. So the graph is the straight line y = x + 1 with a **hole punched out at (1, 2)**.
lim_{x→1} f(x) = **2** (the graph heads for height 2 from both sides), but **f(1) is undefined** — substituting gives 0/0. Condition (i) fails. Defining f(1) = 2 fills the hole and makes f continuous. Never write "f(x) = x + 1" without the qualifier x ≠ 1: the two functions differ at exactly one point.

**(4) Infinite limits and a vertical asymptote read graphically.** A graph falls steeply downwards as x approaches 3 from the left, hugging the vertical line x = 3 and running off the bottom of the page; to the right of 3 it comes down from the top of the page, hugging the same line; there is **no shaded dot anywhere on x = 3**.
lim_{x→3⁻} f(x) = **−∞**, lim_{x→3⁺} f(x) = **+∞**, therefore **lim_{x→3} f(x) DNE** and **f(3) is undefined** — an **infinite discontinuity**, with **vertical asymptote x = 3**. (Compare f(x) = 1/(x − 3)² whose graph goes to **+∞ on both sides**: we may write lim_{x→3} f(x) = +∞ as a description, but there is still no number the values approach, so the limit does not exist.)

**(5) Limits at infinity.** A graph rises from the far left, crosses the horizontal line y = 2 once at x = 5, turns over, and flattens down onto y = 2 as x runs right; on the far left it flattens onto y = −1.
lim_{x→+∞} f(x) = **2** and lim_{x→−∞} f(x) = **−1**. The single crossing at x = 5 is irrelevant: a horizontal asymptote is a statement about **far-out behaviour only**, and the two ends may have different asymptotes.

**(6) Testing continuity at a point with the three conditions.** f(x) = 2x + 1 at x = 3 (the source's basic example). (i) f(3) = 2(3) + 1 = **7**, defined. (ii) Sliding along the line from the left gives values rising to 7, from the right values falling to 7, so lim_{x→3} f(x) = **7**, exists. (iii) 7 = 7. All three hold ⟹ **f is continuous at 3**, and the graph shows it: an unbroken straight line of slope 2 and y-intercept 1, no hole, jump or break at x = 3.
Contrast g(x) = x² for x < 2, g(2) = 5, g(x) = 6 − x for x > 2: lim_{x→2⁻} g = 4 and lim_{x→2⁺} g = 4, so the limit exists and equals 4, but g(2) = 5 ≠ 4 — condition (iii) fails, **removable discontinuity**.

**(7) One-sided limit where only one side matters.** g(x) = |x|, the V with vertex at the origin. lim_{x→0⁺}|x|: look only at the right arm, y = x for x > 0; as x shrinks to 0 the height shrinks to **0**. So lim_{x→0⁺}|x| = **0** (and the left arm gives the same, so the two-sided limit is 0 and g is continuous at 0).

## Commonly confused

- **The limit at a vs the value at a** — lim_{x→a} f(x) never looks at x = a. A shaded dot parked away from the curve changes f(a) and nothing else.
- **"The graph is broken at a, so the limit doesn't exist"** — false for a hole: both sides still head for the same height, so the limit exists; only the *value* is wrong or missing.
- **"The limit exists, so f is continuous there"** — continuity needs all three conditions; a hole has a perfectly good limit and is still discontinuous.
- **"f(a) is defined, so f is continuous at a"** — the jump in worked example (2) has f(2) = 3 defined and is still discontinuous.
- **The minus in x→a⁻** — it labels the **side of a in x**, not values below a in y.
- **DNE vs = +∞** — both mean the limit fails; "+∞" additionally tells you *how* (unbounded growth) rather than *which side won*.
- **Open circle read as the function value** — an open circle marks a point deliberately **not** on the graph; it tells you the limit, not f(a).
- **Corner vs break** — |x| at 0 is continuous (no lift of the pen) even though it is not smooth.
- **Denominator zero ⟹ vertical asymptote** — only if the factor survives cancelling; (x² − 1)/(x − 1) has a hole at x = 1, not an asymptote.
- **Crossing a horizontal asymptote** — permitted, and common; crossing a **vertical** asymptote is not, since f is undefined there.

---

*Note on the source: this week's deck states the learning objectives, the definition of continuity by the three conditions, the four named discontinuity types with their one-line graphical descriptions, and three worked evaluations (lim_{x→3}(2x+1) = 7, lim_{x→0⁺}|x| = 0, and the hole in (x² − 1)/(x − 1)). Everything else it teaches is carried by slide images: the reading exercises ("Task 1", the graph giving lim_{x→2⁻} = 3, lim_{x→2⁺} = −4, f(2) = 1, and the ±∞ graph at x = 3) survive in the extraction only as loose axis numbers. The graph descriptions, the existence criterion, the essential/oscillating case, the limits-at-infinity material and the repair rule above are the standard 100-level treatment those slides carry.*
