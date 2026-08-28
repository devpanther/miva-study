# Sunday Recap — Week 3

*Sunday 27 September 2026, 19:00–20:00. One hour total, not one hour each. Two topics: one his, one his partner's.*

## How the topic gets picked

**Your lowest nightly-check score of the week decides it.** Six checks (Mon MTH, Tue PHY, Wed COS, Thu MTH-problems, Fri PHY-problems, Sat COS-code), **twelve out of twelve each from this week onward**. Whichever you scored lowest on is the topic you teach, no notes.

**You take the same eight courses, so do not both pick the same course.** Whoever scored lower on that course keeps it; the other person moves to their next-lowest score in a *different* course. Settle this in Friday's review hour, not at 19:00 on Sunday.

The two topics below are **fallbacks only** — use them if the scores tie, or if the checks got skipped and there is no score to go on.

```
19:00  he teaches (10 min)      19:10  partner asks "why" until it breaks (5 min)
19:15  partner teaches (10)     19:25  he asks "why" (5 min)
19:30  close both gaps together (20 min)    19:50  slack
```

---

## Fallback topic 1 — MTH_102: Indeterminate forms — reading the shape of a limit and choosing the technique it demands

**Why it tends to be misunderstood.** Students learn the four techniques — substitute, factor, conjugate, divide by the highest power — as four disconnected recipes, and then guess between them under exam pressure instead of *diagnosing* the limit first. The diagnosis is the whole skill, and it turns on one distinction almost nobody states cleanly: **0/0 is indeterminate, but c/0 with c ≠ 0 is not**. The first means "the algebra is hiding a cancellation, go and find it"; the second means "the limit is ±∞, and you now have to check each side separately, because the two sides usually disagree". A student who blurs them either writes "does not exist" for a perfectly good 0/0 limit or writes "∞" for one that was 0/0 all along. Underneath sits a second confusion: substituting to get 0/0 does **not** show the limit fails to exist — substitution is only a *test*, and its failure means the limit laws' hypotheses were not met, not that there is no answer. A third layer is the belief that the limit and the function value are the same thing, so a hole "makes the limit undefined"; the definition explicitly excludes x = a, which is exactly why limits can see past holes. Finally, students reach for L'Hôpital's rule as a first move rather than a last one, and then differentiate the quotient with the quotient rule — differentiating numerator and denominator *separately* is the whole point of the rule, and using the quotient rule silently answers a different question.

**Five escalating "why" questions for the listener:**

1. Why is 0/0 called *indeterminate* while 5/0 is not — what different thing is each one telling you to do next?
2. Why does the definition of a limit deliberately exclude x = a, and why does that make lim_{x→2} (x²−4)/(x−2) = 4 even though the function is undefined at 2?
3. Why does multiplying by the conjugate remove a 0/0 in (√(x+4) − 2)/x, when it looks like it only makes the expression bigger?
4. Why do you divide by the *highest power in the denominator* for a limit at infinity, and why does that rule turn into "compare the degrees" for a rational function?
5. Why does substitution giving 0/0 fail to prove that the limit does not exist, and what is the only thing that ever proves a two-sided limit does not exist?

**What a good answer contains:**

- Names the diagnosis step first: always substitute; if you get a number, that *is* the limit (the laws apply); if you get **0/0** the expression has a removable common factor and needs algebra; if you get **c/0 with c ≠ 0** the answer is **±∞** and you check the left and right sides by sign.
- Matches shape to technique and says why each works: polynomials → factor and cancel the (x − a) that caused the 0/0; surds → conjugate, because (√A − B)(√A + B) = A − B² kills the root and exposes the same factor; stacked fractions → common denominator; x → ±∞ → divide top and bottom by the highest power, then use 1/xⁿ → 0.
- States the only existence test — **the two one-sided limits must both exist and be equal** — and notes that the limit is about approach, never about f(a), so a hole is invisible to it.

**Worked example.** Evaluate each, naming the diagnosis first.

**(a)** lim_{x→3} (x² − 9)/(x² − x − 6). Substituting: (9−9)/(9−3−6) = **0/0**, indeterminate, so factor: (x−3)(x+3) / ((x−3)(x+2)). Cancel the (x−3) — legitimate because x ≠ 3 throughout the limit process — leaving (x+3)/(x+2), which now takes substitution: **6/5**.

**(b)** lim_{x→0} (√(x+9) − 3)/x. Substituting: (3−3)/0 = **0/0**. Conjugate: multiply top and bottom by (√(x+9) + 3). The numerator becomes (x+9) − 9 = x, so the quotient is x / (x(√(x+9)+3)) = 1/(√(x+9)+3). Now substitute: 1/(3+3) = **1/6**.

**(c)** lim_{x→2} (x+1)/(x−2). Substituting: 3/0 — **not** indeterminate, so no algebra will help. Check sides: as x → 2⁻ the top → 3 > 0 and the bottom → 0⁻, so f → **−∞**; as x → 2⁺, f → **+∞**. The two-sided limit **does not exist**, and the honest answer says so *and* gives both one-sided behaviours.

**(d)** lim_{x→∞} (3x² − x)/(5x² + 4). Substituting gives ∞/∞. Divide top and bottom by x²: (3 − 1/x)/(5 + 4/x²). Every 1/xⁿ → 0, so the limit is **3/5** — the ratio of leading coefficients, which is the degree rule from Week 2 falling out of the same manoeuvre.

Note what (a) and (c) have in common and where they part: both have a zero denominator at the target, and only factoring reveals which is which.

---

## Fallback topic 2 — PHY_102: emf versus terminal potential difference — what internal resistance actually does

**Why it tends to be misunderstood.** The name is the first trap: *electromotive force* is not a force at all, it is **work per unit charge**, measured in volts, and a student who carries the word "force" into the problem starts reaching for newtons. The second and costlier trap is treating ε and V as two names for the same quantity. They are equal in exactly one situation — **no current flowing** — and every closed-circuit question hinges on their being different. A student who writes V = ε with the switch closed loses the whole question, and a student who *knows* the formula ε = V + Ir often still cannot say what the Ir term physically is: it is energy that the cell spends heating itself, so it never reaches the load. The third layer is direction of change. Because I = ε/(R + r), lowering the external resistance **raises** the current and therefore **raises** the lost volts, so the terminal voltage falls as you demand more from the cell — which is why a torch dims when the battery is old (r has risen) and why a short circuit gives the maximum possible current and a terminal voltage of essentially zero. Students routinely predict this backwards, reasoning that less resistance should mean more voltage. The fourth is the graph: in the V–I experiment the plotted line has **intercept ε and gradient −r**, and the minus sign is not a sign convention to be ignored — it *is* the statement that terminal voltage falls off with current, and reporting r as negative shows the graph was never understood as a physical claim.

**Five escalating "why" questions for the listener:**

1. Why is emf measured in volts and not in newtons, and what exactly is the "work per unit charge" being counted?
2. Why does the voltmeter read the full ε on an open circuit but less than ε the moment the switch closes?
3. Why does *decreasing* the external resistance R make the terminal voltage V go *down*, when the cell has not changed at all?
4. Why is the gradient of the V-against-I graph equal to −r rather than +r, and why does that intercept give ε?
5. Why does an old battery still show nearly its full rated voltage on a multimeter yet fail to run a motor — and what has actually changed inside it?

**What a good answer contains:**

- Defines **ε = W/Q** as the energy in joules the source gives to each coulomb it drives round the circuit (unit V = J/C), and **V** as the potential difference measured *across the terminals while current flows*, equal to IR.
- Derives the relation rather than quoting it: the emf supplied per coulomb is split between the external circuit and the cell's own resistance, so **ε = V + Ir = I(R + r)**, hence **V = ε − Ir**, and V = ε only when I = 0. In power terms, **εI = I²R + I²r** — the I²r term is heat wasted inside the cell.
- Reads the consequences off those equations: smaller R → larger I → larger lost volts Ir → smaller V; short circuit (R → 0) gives I_max = ε/r with V → 0; and on the V–I graph, V = ε − rI is a straight line of intercept **ε** and gradient **−r**.

**Worked example.** A cell of emf 1.5 V and internal resistance 0.50 Ω is connected to an external resistor R.

**With R = 4.0 Ω:** I = ε/(R + r) = 1.5/4.5 = **0.333 A**. Lost volts Ir = 0.333 × 0.50 = 0.167 V, so the terminal voltage V = 1.5 − 0.167 = **1.33 V**. Power to the load I²R = (0.333)² × 4.0 = **0.444 W**; power wasted in the cell I²r = (0.333)² × 0.50 = **0.056 W**; total εI = 1.5 × 0.333 = 0.50 W ✓.

**With R = 1.0 Ω:** I = 1.5/1.5 = **1.0 A**, Ir = 0.50 V, so V = **1.0 V** — the terminal voltage has *fallen* by a third because the current tripled. Load power 1.0 W, wasted power 0.50 W.

**Short circuit (R = 0):** I = 1.5/0.50 = **3.0 A**, V = 1.5 − 3.0 × 0.50 = **0 V**. All 4.5 W of it is dissipated inside the cell — which is why the cell gets hot and why this is not a thing to try with a real battery.

**Getting ε and r from two readings:** the two rows above give (I, V) = (0.333, 1.33) and (1.0, 1.0). Gradient = (1.0 − 1.33)/(1.0 − 0.333) = −0.33/0.667 = **−0.50**, so **r = 0.50 Ω**; extrapolating to I = 0 gives V = 1.0 + 0.50 × 1.0 = **1.5 V = ε**. That is the whole V–I experiment in two points: intercept ε, gradient −r.

An old battery is a cell whose r has grown to several ohms. On a multimeter almost no current flows, so V ≈ ε and the reading still looks fine; put it under a real load and the Ir term eats nearly the whole emf.
