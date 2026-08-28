# Sunday Recap — Week 2

*Sunday 20 September 2026, 19:00–20:00. One hour total, not one hour each. Two topics: one his, one his partner's.*

## How the topic gets picked

**Your lowest nightly-check score of the week decides it.** Six checks (Mon MTH, Tue PHY, Wed COS, Thu MTH-problems, Fri PHY-problems, Sat COS-code), six out of six each. Whichever you scored lowest on is the topic you teach, no notes.

**You take the same eight courses, so do not both pick the same course.** Whoever scored lower on that course keeps it; the other person moves to their next-lowest score in a *different* course. Settle this in Friday's review hour, not at 19:00 on Sunday.

The two topics below are **fallbacks only** — use them if the scores tie, or if the checks got skipped and there is no score to go on.

```
19:00  he teaches (10 min)      19:10  partner asks "why" until it breaks (5 min)
19:15  partner teaches (10)     19:25  he asks "why" (5 min)
19:30  close both gaps together (20 min)    19:50  slack
```

---

## Fallback topic 1 — PHY_102: The superposition principle — combining Coulomb forces and fields as vector sums

**Why it tends to be misunderstood.** Superposition looks trivially easy when it is stated — "just add up the forces" — and that is exactly why it costs marks. The word *add* hides the fact that the operation is a **vector** sum, so a student who has correctly computed every individual magnitude can still get the wrong answer by combining them arithmetically, or by cancelling the source charges (+4 and −4 look like they should give zero) instead of resolving the actual force directions. A second layer is the pairwise independence superposition asserts: everyday intuition says objects in between block things, so students expect a third charge placed between two others to screen the force between them, when in fact each pairwise Coulomb force is completely unaffected and superposition only adds new terms. A third layer is sign handling — the vector form already encodes attraction and repulsion in the signed product, so a student who substitutes signed charges *and then* flips the direction by inspection uses the sign twice and reverses the answer. Finally the inverse-square weighting is consistently underestimated: the distance ratio is squared while the charge ratio is not, so intuition about which charge dominates is often wrong, and null-point problems get the right algebra applied to the wrong geometry (between the charges for a like pair, outside for an unlike pair).

**Five escalating "why" questions for the listener:**

1. Why is superposition a vector sum rather than a sum of magnitudes, and when is arithmetic addition legitimate?
2. Why does placing a third charge between two others leave the force between those two completely unchanged?
3. Why does the vector form F = (k q₁q₂ / r²) r̂ give the direction automatically, and why is applying "like repels, unlike attracts" on top of it an error?
4. Why can there be no zero-force point *between* two unlike charges, while for two like charges the null point must lie between them and nearer the smaller one?
5. Why does the location of a null point not depend on the size or sign of the charge you place there?

**What a good answer contains:**

- States superposition as: the net force (or field) on a charge is the **vector sum** of the forces each other charge would produce individually, each computed by Coulomb's law *as if the others were absent* — so charges never screen one another.
- Shows the method: free-body diagram, resolve each contribution into components along fixed axes with explicit signs, sum components separately, then recombine with Pythagoras and arctan(F_y/F_x) — never by adding magnitudes.
- Handles signs once and only once, and applies the inverse-square weighting explicitly, noting that a factor in distance counts squared while a factor in charge counts linearly.

**Worked example.** A +2.0 μC charge q₀ sits at the origin. A +8.0 μC charge is at (0.30 m, 0) and a +6.0 μC charge is at (0, 0.30 m). Find the net force on q₀. Both separations are 0.30 m, so r² = 0.090 m² in each case. From the 8.0 μC charge: F₁ = (8.99×10⁹)(8.0×10⁻⁶)(2.0×10⁻⁶)/0.090 = **1.60 N**; all charges positive, so q₀ is pushed directly away, along −x. From the 6.0 μC charge: F₂ = (8.99×10⁹)(6.0×10⁻⁶)(2.0×10⁻⁶)/0.090 = **1.20 N**, pushing q₀ along −y. Superpose by components: ΣF_x = −1.60 N, ΣF_y = −1.20 N. Magnitude: F = √(1.60² + 1.20²) = √4.00 = **2.0 N**. Direction: tan θ = 1.20/1.60 = 0.75, so θ = **37° below the −x axis** (about 217° anticlockwise from +x). Note that adding the magnitudes arithmetically would have given 2.8 N — a 40 % error — and that the two forces are perpendicular here only because of where the charges happened to sit; in general every contribution must be resolved before it is added.

---

## Fallback topic 2 — MTH_102: Rational functions — holes vs vertical asymptotes, the degree rules, and rational inequalities

**Why it tends to be misunderstood.** Students meet rational functions as a list of separate rules and never see that all of them come from one idea: what happens to a quotient when the denominator gets small, and what happens when x gets large. So they set the denominator to zero and declare a vertical asymptote *without first cancelling*, drawing an asymptote where the graph in fact has a single missing point; they take the ratio of leading coefficients as a reflex whenever they see a fraction, producing a horizontal asymptote for a function that actually has an oblique one or none; they treat a horizontal asymptote as a barrier the curve cannot cross, when it is only a claim about the far left and far right; and, worst of all in an exam, they treat a rational **inequality** like a rational **equation** and multiply both sides by the denominator — legitimate for an equation, not for an inequality, because the denominator changes sign across its own zero and the direction flips on one side but not the other. The habits reinforce each other: a student who never factors first will never notice a hole, and a student who never draws a sign chart has no way of seeing that the solution set usually comes in two disconnected pieces.

**Five escalating "why" questions for the listener:**

1. Why does a factor that cancels give a hole rather than a vertical asymptote, and how do you find the height of that hole?
2. Why is the ratio of leading coefficients the horizontal asymptote only when the degrees are equal, and what replaces it when the numerator degree is one higher?
3. Why can a graph cross its horizontal asymptote but never its vertical asymptote?
4. Why is it wrong to multiply both sides of (x+1)/(x−3) ≤ 2 by (x−3), even though the same move is fine for the equation (x+1)/(x−3) = 2?
5. Why does the sign of a factored expression change at a root of odd multiplicity but not at one of even multiplicity — and why is the root still excluded from a strict inequality either way?

**What a good answer contains:**

- Factor numerator and denominator *first*: cancelled factors give **holes** (height read off the reduced function), surviving denominator zeros give **vertical asymptotes**.
- Compare degrees for the far-out behaviour: lower → y = 0; equal → ratio of leading coefficients; one higher → an **oblique** asymptote found by long division. A horizontal or oblique asymptote may be crossed at finite x.
- For an inequality: move everything to one side over a common denominator, mark the zeros of numerator and denominator on a sign chart, test one value per interval, include numerator zeros only when the inequality is non-strict, and always exclude denominator zeros.

**Worked example.** Sketch f(x) = (x²−4)/(x²−x−6), then solve f(x) ≥ 0. **Factor:** f(x) = (x−2)(x+2)/((x−3)(x+2)). The (x+2) cancels, so x = −2 is a **hole**, not an asymptote; the reduced function is (x−2)/(x−3), and the hole sits at height (−2−2)/(−2−3) = 4/5 — the open point (−2, 0.8). **Vertical asymptote:** the surviving denominator zero, x = 3. **Intercepts:** numerator of the reduced function vanishes at x = 2 → (2, 0); f(0) = (−4)/(−6) = 2/3 → (0, 2/3). **Far-out behaviour:** degrees equal, so horizontal asymptote y = 1/1 = 1; writing f(x) = 1 + 1/(x−3) shows f → 1 from above as x → +∞ and from below as x → −∞, and that f = 1 has no solution, so the graph never crosses it. **At the vertical asymptote:** as x → 3⁻ the numerator → 1 and the denominator → 0⁻, so f → −∞; as x → 3⁺, f → +∞. **Sign chart** on (x−2)/(x−3) with critical values 2 and 3: at x = 0, (−2)/(−3) > 0; at x = 2.5, (0.5)/(−0.5) < 0; at x = 4, 2/1 > 0. So **f(x) ≥ 0 on (−∞, 2] ∪ (3, ∞), minus the hole at x = −2** — x = 2 is included since f(2) = 0, x = 3 is excluded since f is undefined there, and x = −2 must be struck out because f is undefined there too.

---

## Reserve topic (if both fallbacks are already used) — COS_102: What "unsolvable" actually means

The word arrives with an everyday meaning already attached, and the course explicitly says that meaning is wrong: unsolvable problems are **not** problems for which no solution can possibly be found. Students read the slide, nod, and then reason from the everyday sense anyway — concluding that unsolvable means "nobody has cracked it yet", or "very hard", or "the answer does not exist". Three categories then collapse into one. A **non-routine** problem lacks a *standard* method but yields to a novel one built through critical study and creativity; an **unsolvable** problem lacks any systematic method for deciding it *in general*, though particular instances may be settled easily; an **undecidable** problem is the sharp subset where no algorithm returns an accurate true/false for every input.

Probe with: The course says unsolvable problems are not ones for which no solution can be found — so what exactly is it that cannot be done? → Why "unsolvable *decision* problems" rather than just "unsolvable problems"? → Why can originality rescue a non-routine problem but never an undecidable one? → In the BOB → BOOOB derivation the string grows to seven letters before shrinking to five; why does that single fact explain why no systematic method exists? → "Does my code have a bug" is undecidable, yet programmers find bugs every day — how are both true?

A good answer says: unsolvable = no algorithm decides the question *in general*, which is why the course says *decision* problems; undecidable is the sharpened form and a subset; non-routine is a different axis entirely — no *standard* method, but a novel one can be developed. The trap to catch: "unsolvable means give up", or the belief that enough creativity beats the halting problem.
