# Sunday recap — Week 4

*Sunday 4 October 2026, 19:00–20:00. One topic each, taught aloud, no notes.*

**Pick the topic from the scores first.** Each of you takes the check you scored lowest on this week and teaches that topic. **Do not both pick the same course** — if your lowest lands on the same course, whoever scored the lower ratio keeps it and the other takes their next-lowest from a different course. The two topics below are a **fallback only**, for a week where the scores tie or the checks were skipped.

## MTH_102 — The limit at c and the value f(c) are two independent readings; continuity is the claim that they agree

The limit of f at c and the value f(c) are two separate pieces of information taken from the same graph. Everything in Week 4 follows from that split: the limit is built only from x ≠ c, so redefining f(c) can repair a hole but can never repair a jump or an asymptote.

**Why it goes wrong.** Students hold the model "the limit is what you get by plugging c in", and it survives because on every unbroken graph they meet — lines, polynomials, |x| — substitution does give the right answer, so the model is only ever punished at a hole, a jump, or a 0/0.

1. Why does the definition of continuity list three conditions instead of simply saying lim(x→c) f(x) = f(c)?
2. Why is f(c) read from the shaded dot on a graph and never from an open circle, even when the open circle is the height both branches approach?
3. Why can direct substitution be trusted for lim(x→3) (2x + 1) but not for lim(x→1) (x² − 1)/(x − 1)?
4. Why can a removable discontinuity be repaired by redefining the function at a single point while a jump discontinuity cannot be repaired at all?
5. Why does lim(x→3⁺) f(x) = +∞ count as the limit failing to exist, when we have written down an answer for it?

**What a good answer contains.**

- It says that lim(x→c) f(x) is computed from values of f at points other than c, so f(c) can be changed, removed or misplaced without altering the limit — which is exactly why the equality of limit and value has to be imposed as its own condition rather than derived.
- It matches each type of discontinuity to the condition it breaks: removable breaks (i) or (iii) with the limit intact, so setting f(c) := L repairs it; jump and infinite break (ii) itself, because L⁻ ≠ L⁺ or a side runs to ±∞, and (ii) is a fact about the branches that no single value can touch.
- It carries a concrete instance through: (x² − 1)/(x − 1) has limit 2 at x = 1 with f(1) undefined, so a hole at (1, 2) that redefinition fills — set against a graph whose branches arrive at 3 and −4, where the limit is DNE and no value of f(2) helps.

**Worked example.**

Take f(x) = (x² − 1)/(x − 1) at x = 1.

1. Substitute: (1 − 1)/(1 − 1) = 0/0 — indeterminate, so substitution decides nothing. It tells us only that numerator and denominator share the factor (x − 1).
2. Factor the numerator as a difference of two squares: x² − 1 = (x − 1)(x + 1).
3. Cancel — legally, because a limit as x → 1 uses only x ≠ 1, so x − 1 ≠ 0 throughout: f(x) = x + 1 for all x ≠ 1.
4. One-sided limits: lim(x→1⁻) (x + 1) = 2 and lim(x→1⁺) (x + 1) = 2. They agree on a finite number, so **lim(x→1) f(x) = 2**.
5. The value: f(1) is still 0/0, **undefined** — cancelling changed the formula but never the domain.
6. Classify: limit exists and is finite, value missing → **removable discontinuity**; the line y = x + 1 with an open circle at (1, 2).
7. Repair: define F(x) = f(x) for x ≠ 1 and F(1) = 2. Now F(1) is defined, the limit exists, and they are equal, so F is continuous at 1.
8. The contrast that makes the point: on a graph whose left branch runs into 3 at x = 2 and whose right branch starts from −4, with a shaded dot at (2, 1), we read lim(x→2⁻) f(x) = 3, lim(x→2⁺) f(x) = −4, so lim(x→2) f(x) = DNE and f(2) = 1. Here step 7 is impossible: 3 ≠ −4 is a statement about the branches, and every candidate value for f(2) leaves it standing.

## COS_102 — Big O describes growth rate, not running time

Big O does not tell you how long an algorithm takes; it describes the growth rate — how the work changes as the input size n changes. That is why the algorithm with the enormous constant, 1000N, is the better one even though it is a thousand times slower than N squared at N = 1, and why the two only trade places at N = 1000.

**Why it goes wrong.**

Students treat a Big O class as a speed label stuck to the algorithm — 'O(n squared) is slow, O(n) is fast' — and the model survives because textbook and exam examples always use inputs large enough that the lower-growth algorithm really is the faster one, so the wrong reasoning keeps producing the right answer.

1. Why does Big O describe a growth rate rather than a number of seconds?
2. Why is 1000N considered the more efficient algorithm when its constant is a thousand times larger than the constant in N squared?
3. Why does the comparison between 1000N and N squared flip exactly at N = 1000, and what does that tell you about which algorithm to choose for small inputs?
4. Why can two algorithms that are both O(n) still differ by a factor of ten in the time they actually take?
5. Why does the course still need posterior analysis at all, once priori analysis has told us the growth rates of every candidate?

**What a good answer contains.**

- A real explanation says what Big O is a statement about: the number of times the work is done as a function of n, counted from the structure of the algorithm before any code exists, not a measured duration.
- It shows the crossover concretely — 1000N beats N squared only once N passes 1000 — and draws the right conclusion: growth rate decides which algorithm wins eventually, and 'eventually' can be a long way off.
- It closes the loop by naming the two analyses: priori analysis gives the growth rate and is machine- and language-independent; posterior analysis, after implementation, is the only thing that gives actual space and running time.

**Worked example.**

```
Compare two algorithms for the same problem: A does 1000N steps, B does N squared steps.
N = 1:      A = 1,000        B = 1              -> B wins by 1000x
N = 10:     A = 10,000       B = 100            -> B wins by 100x
N = 100:    A = 100,000      B = 10,000         -> B still wins by 10x
N = 1000:   A = 1,000,000    B = 1,000,000      -> they tie; this is the crossover
N = 10,000: A = 10,000,000   B = 100,000,000    -> A wins by 10x
N = 100,000:A = 100,000,000  B = 10,000,000,000 -> A wins by 100x
```

Read off the mechanism: multiplying N by 10 multiplies A's work by 10 and B's work by 100. A's cost grows in step with the data; B's grows with the square of it, so every tenfold increase in data costs B a further factor of ten relative to A. Nothing about the constant 1000 can stop that, because the constant is applied once while the extra factor of N compounds — which is exactly what Big O keeps and the constant is exactly what it discards, leaving O(N) for A and O(N squared) for B.

The honest caveat, which is the part students miss: if this system will only ever see N below 1000, B is the right choice and Big O is not the deciding argument. Big O tells you which algorithm survives growth; it is posterior analysis, after implementation, that tells you how many seconds either one takes on your machine today.
