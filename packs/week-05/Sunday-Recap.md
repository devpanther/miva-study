# Sunday Recap — Week 5

*Sunday 11 October 2026, 19:00–20:00. One hour total, not one hour each. Two topics: one his, one his partner's.*

> **Checkpoint week.** The mid-semester mocks in `packs/mock-midsemester/` cover Weeks 1–4, one timed paper per course. Sit them in Saturday's catch-up hour, notes closed and to time. If a mock score is clearly worse than any nightly check this week, **let the mock decide Sunday's topic instead** — four weeks of accumulated fog is worth more of this hour than one bad evening.

## How the topic gets picked

**Your lowest nightly-check score of the week decides it.** Six checks (Mon MTH, Tue PHY, Wed COS, Thu MTH-problems, Fri PHY-problems, Sat COS-code), **twelve out of twelve each**. Whichever you scored lowest on is the topic you teach, no notes.

**You take the same eight courses, so do not both pick the same course.** Whoever scored lower on that course keeps it; the other person moves to their next-lowest score in a *different* course. Settle this in Friday's review hour, not at 19:00 on Sunday.

The two topics below are **fallbacks only** — use them if the scores tie, or if the checks got skipped and there is no score to go on.

```
19:00  he teaches (10 min)      19:10  partner asks "why" until it breaks (5 min)
19:15  partner teaches (10)     19:25  he asks "why" (5 min)
19:30  close both gaps together (20 min)    19:50  slack
```

---

## Fallback topic 1 — MTH_102: The chain rule — why the inner derivative is not optional

**Why it tends to be misunderstood.** The chain rule is the single most-dropped mark in first-year calculus, and the reason is that its output *looks right* without the inner derivative. A student who writes d/dx sin(3x) = cos(3x) has produced something with the correct shape — a cosine, the right argument — and nothing in the expression flags the missing factor of 3. Contrast a botched product rule, which usually produces something visibly wrong. So the error survives self-checking. Underneath sit three deeper confusions. First, students do not consciously **decompose** the function: they never ask "what is the outer function and what is the inner one", so they cannot apply a rule whose statement is entirely about that split. Second, they treat the power rule as attaching to whatever is in the brackets: d/dx (x² + 1)⁵ becomes 5(x² + 1)⁴, which is the power rule applied as if the inner function were x itself — the rule d/dx xⁿ = nxⁿ⁻¹ is a statement about **x**, and the moment the base is anything else the chain rule is what extends it. Third, they mix the three rules up structurally: the product rule adds two terms, the quotient rule subtracts in a fixed order over v², and the chain rule multiplies — so writing (uv)′ = u′v′ or (f(g))′ = f′(g′) are the same underlying error, a belief that differentiation distributes across whatever operation is in front of them. It does not; only sums and differences behave that way, and that is exactly why sums get a one-line rule and products, quotients and compositions get three separate ones. A fourth and quieter failure is not recognising that a function is composite at all — √(3x + 1), e^{x²} and ln(5x) all look atomic until you name the outer and inner pieces.

**Five escalating "why" questions for the listener:**

1. Why is d/dx sin(3x) equal to 3cos(3x) and not cos(3x) — where does the 3 physically come from?
2. Why does the power rule d/dx xⁿ = nxⁿ⁻¹ **not** directly give the derivative of (x² + 1)⁵, and what has to be added?
3. Why does differentiation distribute across a sum but not across a product, a quotient or a composition?
4. Why does dy/dx = (dy/du)(du/dx) look like cancelling du, and why is that a useful mnemonic but not a proof?
5. Why does a chain-rule problem with three nested layers, like sin²(3x + 1), need the rule applied twice, and how do you know when to stop?

**What a good answer contains:**

- States the rule in both notations and names the parts: **d/dx[f(g(x))] = f′(g(x))·g′(x)**, equivalently **dy/dx = (dy/du)(du/dx)** with u = g(x) — differentiate the **outer** function leaving the inner one untouched, then **multiply by the derivative of the inner**.
- Explains *why* the factor is there: if the inner function changes k times as fast as x, the composite changes k times as fast too — the rates multiply. In sin(3x), u = 3x runs three times as fast as x, so the output oscillates three times as fast, and 3 is that rate ratio.
- Contrasts the three rules by structure so they cannot be swapped: **(uv)′ = u′v + uv′** (two terms added), **(u/v)′ = (u′v − uv′)/v²** (order matters, denominator squared), **chain = outer′ × inner′** (multiplied) — and notes that only sums and constant multiples let you differentiate term by term.

**Worked example.** Five, in ascending nastiness.

**(1)** y = (x² + 1)⁵. Outer: (·)⁵; inner: u = x² + 1. dy/du = 5u⁴, du/dx = 2x, so **dy/dx = 5(x² + 1)⁴ · 2x = 10x(x² + 1)⁴**. Sanity check by expanding the easy case (x² + 1)² = x⁴ + 2x² + 1, whose derivative is 4x³ + 4x = 4x(x² + 1) — and the rule gives 2(x²+1)·2x = 4x(x²+1) ✓.

**(2)** y = √(3x + 1) = (3x + 1)^{1/2}. dy/dx = ½(3x + 1)^{−1/2} · 3 = **3 / (2√(3x + 1))**. Dropping the inner 3 would have given half the right answer.

**(3)** y = e^{x²}. Outer eᵘ (its own derivative), inner u = x², so **dy/dx = 2x·e^{x²}**. Note the answer is *not* e^{2x}; the exponent is untouched and the inner derivative multiplies out front.

**(4) Product and chain together.** y = x³ sin(2x). Product rule with u = x³, v = sin(2x): u′ = 3x², and v′ needs the chain rule = 2cos(2x). So **dy/dx = 3x² sin(2x) + 2x³ cos(2x)**. Two rules, one after the other — identify the outermost operation first (here a product), and let the pieces call whichever rule they need.

**(5) Chain twice.** y = sin²(3x + 1) = [sin(3x + 1)]². Outermost is a square: 2[sin(3x+1)] × d/dx[sin(3x+1)]. That inner derivative is itself a chain: cos(3x+1) × 3. So **dy/dx = 6 sin(3x + 1) cos(3x + 1)**. You stop when the innermost function is plain x, whose derivative is 1 — which is exactly why nobody notices the chain rule on d/dx sin x.

---

## Fallback topic 2 — PHY_102: Kirchhoff's laws — the sign convention is the whole difficulty

**Why it tends to be misunderstood.** Both laws are one sentence each and students can recite them within minutes, which produces a dangerous confidence: the laws are trivial, the **bookkeeping** is not, and every lost mark lives in the bookkeeping. Four things go wrong. First, students believe they must guess the current directions *correctly* before starting, and freeze, or redraw the circuit repeatedly. The directions are assumptions; a negative answer simply means that current runs the other way, and the magnitude is still right — that is the single most reassuring fact in the topic and almost nobody is told it plainly. Second, the sign rule for traversing an element gets applied by feel rather than by rule: going through a resistor **with** the assumed current is a **drop** (−IR) and against it a **rise** (+IR); going through a battery from **−** to **+** is a rise (+ε) and from + to − a fall (−ε), and *the direction you walk the loop is your choice but must stay fixed for the whole loop*. Students change direction halfway, or attach the sign to the battery's orientation on the page rather than to the order in which they meet its terminals. Third, they do not count equations: a network needs one KCL equation per node **minus one** (the last is not independent) plus enough KVL loops to cover every branch, and students either write too few and cannot solve, or write every possible loop and get a redundant equation that collapses to 0 = 0 and makes them think they have made a mistake. Fourth, the physical content gets lost: KCL is **charge conservation** (charge does not pile up at a junction) and KVL is **energy conservation** (a coulomb returning to its starting point has had exactly as much energy given to it as taken from it) — a student who knows this cannot write an equation with all the terms the same sign, because that would say energy was created going round the loop.

**Five escalating "why" questions for the listener:**

1. Why is KCL a statement about conservation of charge, and what would it mean physically if it failed at a junction?
2. Why is it safe to *assume* a current direction that turns out to be wrong, and what exactly does the negative sign in the answer tell you?
3. Why does traversing a resistor in the direction of the assumed current give −IR, while traversing a battery from − to + gives +ε regardless of which way the current flows through it?
4. Why does a circuit with n nodes give only n − 1 independent KCL equations, and why does the nth one add nothing?
5. Why does going round a loop and adding every term with the same sign guarantee you have made an error, whatever the numbers are?

**What a good answer contains:**

- States both laws with their conservation principle attached: **KCL** — the sum of currents entering a junction equals the sum leaving (**charge conservation**, since charge cannot accumulate at a point); **KVL** — the algebraic sum of potential differences round any closed loop is **zero** (**energy conservation**, since a charge returning to its start returns to the same potential).
- Gives the procedure as a fixed drill: label every branch current with an assumed direction → write KCL at all but one node → choose loops and a traversal direction for each and hold it → apply the sign rules (**resistor: −IR with the current, +IR against it; source: +ε from − to +, −ε from + to −**) → solve the simultaneous equations → read a negative current as "right magnitude, opposite direction".
- Checks the result rather than trusting it: substitute back into an unused loop, and confirm the **power balance** — total power delivered by the sources equals total I²R dissipated.

**Worked example.** A single loop first, then two loops.

**(1) Two opposing emfs.** A 12 V battery (internal resistance 0.5 Ω) and a 6 V battery (internal resistance 0.3 Ω) are connected in series **in opposition** — their positive terminals facing each other — with an external 5.2 Ω resistor. Assume the current I flows clockwise, driven by the 12 V cell. Walking the loop clockwise: +12 (through the 12 V cell from − to +), then −I(0.5) inside it, then −I(5.2) through the resistor, then −6 (through the 6 V cell from + to −, since it opposes), then −I(0.3). KVL: 12 − 6 − I(0.5 + 5.2 + 0.3) = 0, so **I = 6/6.0 = 1.0 A** clockwise. The 12 V cell delivers 12 W, the 6 V cell **absorbs** 6 W (it is being charged), and 1.0² × 6.0 = 6 W is dissipated: 12 = 6 + 6 ✓.

**(2) Two loops, and a negative answer.** Two batteries drive a shared middle branch: ε₁ = 10 V through R₁ = 2 Ω into node A, ε₂ = 4 V through R₂ = 1 Ω into the same node A, and a common R₃ = 3 Ω from A back to the shared negative rail. Assume I₁ and I₂ both flow *into* A and I₃ flows *out of* A through R₃.

KCL at A: **I₁ + I₂ = I₃**.
Left loop (ε₁, R₁, R₃): 10 − 2I₁ − 3I₃ = 0.
Right loop (ε₂, R₂, R₃): 4 − 1I₂ − 3I₃ = 0.

Substitute I₃ = I₁ + I₂: 10 = 2I₁ + 3I₁ + 3I₂ = 5I₁ + 3I₂, and 4 = I₂ + 3I₁ + 3I₂ = 3I₁ + 4I₂. Solving: from the second, I₂ = (4 − 3I₁)/4. Substituting into the first: 10 = 5I₁ + 3(4 − 3I₁)/4 ⟹ 40 = 20I₁ + 12 − 9I₁ ⟹ 28 = 11I₁ ⟹ **I₁ = 2.55 A**. Then **I₂ = (4 − 7.64)/4 = −0.91 A** and **I₃ = 2.55 − 0.91 = 1.64 A**.

The negative I₂ is the point of the example: the 4 V battery is not driving current into A at all — it is being driven backwards by the stronger 10 V branch, at 0.91 A. Nothing needs redoing; the assumption was wrong and the algebra said so. Check with the unused outer loop (ε₁, R₁, R₂, ε₂): 10 − 2(2.55) − 1(−0.91)·(−1) − 4 ≈ 10 − 5.09 − 0.91 − 4 = 0 ✓. Power: sources 10 × 2.55 = 25.5 W delivered, 4 × 0.91 = 3.6 W absorbed by the reversed cell; dissipation 2(2.55)² + 1(0.91)² + 3(1.64)² = 13.0 + 0.83 + 8.07 ≈ 21.9 W, and 25.5 − 3.6 = 21.9 ✓.
