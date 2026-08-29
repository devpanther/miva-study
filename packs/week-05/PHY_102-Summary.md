# PHY_102 — Week 5 Summary

*General Physics II · Topic: Kirchhoff's Rules (approached through resistors in parallel and in series) · Lecturer: Dr. Sharafadeen Adeniji, PhD, Theoretical and Applied Physics*

**Scope note:** the deck is called **KIRCHHOFF'S RULES** and it does four things and no more: it recalls the **parallel** combination rule and works one instance (4 Ω, 6 Ω, 10 Ω), recalls the **series** rule and works one instance (3 Ω, 5 Ω, 9 Ω, 10 Ω), defines **junction** and **loop** and states the **junction rule ΣI = 0** and (on the Summary slide) the **loop rule ΣV = 0**, and then spends five slides on a **problem-solving strategy that is entirely about signs**, followed by two examples — a single-loop two-battery circuit worked in full, and a bridge circuit. She does **not** derive the combination rules, does **not** state Ohm's law as a law anywhere in the deck (she uses V = IR only implicitly, inside the IR terms), does **not** mention terminal potential difference ε − Ir, does **not** mention the Wheatstone balance condition R₁/R₂ = R₃/R₄, does **not** count independent equations, and does **not** discuss non-ohmic elements, capacitors or RC circuits. The examinable core is **sign discipline plus arithmetic**. Learn Example 1's three parts line by line; it is the shape of the exam question.

## The 9 most examinable things this week

1. **Parallel combination (slide 3).** "A parallel connection splits the current in the resistors while the voltage across each resistor is the same." **1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ⋯ 1/R_N.** The formula gives you **1/R_eq**, not R_eq — you must invert at the end.
2. **Series combination (slide 5).** "If the resistors are in *series*, the current must be the same in all of them, but the voltage may vary." **R_eq = R₁ + R₂ + R₃ + ⋯ R_N.**
3. **When the rules run out (slide 7).** "However, some circuits cannot be categorized into series and/or parallel connection. To find the currents in this network of resistors, we will apply the techniques developed by the German Physicist, Gustav Kirchhoff." That sentence is the reason Kirchhoff exists in this course.
4. **Junction and loop, her definitions (slide 8).** "A point in a circuit where **three or more conductors meet** is called a **junction**, while a **loop** is any **closed conducting path**." Two conductors meeting is not a junction — points *c* and *d* on her figure (a) are explicitly labelled **"Not a Junction"** (slide 11).
5. **Junction rule (slide 11).** "*The algebraic sum of the currents into any junction is zero.*" **ΣI = 0.** Her gloss: "no charge can accumulate at a junction, so the total charge that enters the junction per unit time must equal the total charge that leaves per unit time." Conservation of **charge** (slide 24).
6. **Loop rule (slide 24).** **ΣV = 0** around any closed loop. Conservation of **energy**.
7. **emf sign rule (slide 13).** "When we travel through a source in the direction from **− to + the emf is positive**; when we travel from **+ to − the emf is negative**." This depends only on the order in which you cross the terminals — never on which way the current runs.
8. **IR sign rule (slides 14–15).** Travel through a resistor **in the same direction as the assumed current → the IR term is negative** ("the current goes in the direction of decreasing potential"). Travel **opposite to the assumed current → the IR term is positive** ("this represents a rise of potential").
9. **Reading the sign of the answer (slide 17).** "Since I is positive, our assumed current direction is correct." The corollary, which she leaves you to draw: a **negative** current means the magnitude is right and the true direction is the reverse of your arrow. Nothing is redone.

## Resistors in parallel — her build

**Slide 3.** "When two or more resistors are connected as shown below, they are said to be in parallel configuration. A parallel connection splits the current in the resistors while the voltage across each resistor is the same. In parallel connection, the equivalent resistance is given as:

**1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ⋯ 1/R_N**"

Her circuit diagram carries the labelling to copy: a single source of p.d. **V** with **+** at the top and **−** at the bottom, a total current **I_total** entering at the top-left, and the branch currents **I₁, I₂, … I_n** each drawn as a downward arrow through **R₁, R₂, … R_n**. Read the diagram as the sentence: one V across all of them, the I's splitting.

Units throughout: **R in ohms (Ω)**, **I in amperes (A)**, **V in volts (V)**. In the parallel formula every term has units of **Ω⁻¹**, which is why the final inversion is not optional — an answer left as 31/60 is a reciprocal resistance, not a resistance.

### Worked instance (slide 4)

**"For instance, if R₁ = 4 Ω, R₂ = 6 Ω, and R₃ = 10 Ω, find the equivalent resistor."**

Using 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ⋯ 1/R_N,

**1/R_eq = 1/4 + 1/6 + 1/10**

The common denominator is 60: 1/4 = 15/60, 1/6 = 10/60, 1/10 = 6/60, and 15 + 10 + 6 = 31.

**1/R_eq = 31/60**

**R_eq = 60/31 = 1.94 Ω**

Two checks worth doing every time. First, **invert**: she goes from 31/60 to 60/31, not to 31/60 Ω. Second, **1.94 Ω is smaller than 4 Ω**, the smallest of the three — a parallel equivalent is always below the smallest branch, because adding another branch adds another route for current and can only lower the total resistance. If your parallel answer comes out bigger than one of the resistors, you have forgotten to invert.

## Resistors in series — her build

**Slide 5.** "When two or more resistors are connected as shown below, they are said to be in series configuration. If the resistors are in *series*, the current must be the same in all of them, but the voltage may vary. In series connection, the equivalent resistance is given as:

**R_eq = R₁ + R₂ + R₃ + ⋯ R_N**"

Her diagram: four resistors R₁ R₂ R₃ R₄ strung end to end round a single loop with one battery, the **+** terminal marked. There is no junction anywhere on that loop — which is exactly why one current serves the whole circuit.

### Worked instance (slide 6)

**"For instance, if R₁ = 3 Ω, R₂ = 5 Ω, R₃ = 9 Ω and R₄ = 10 Ω,"**

Using R_eq = R₁ + R₂ + R₃ + ⋯ R_N,

**R_eq = 3 + 5 + 9 + 10**

**R_eq = 27 Ω**

*(Aside: the slide states the values but never actually writes the instruction "find the equivalent resistance" — it just starts computing. The intent is obvious. Note also that 27 Ω is larger than the largest single resistor, 10 Ω: series always adds up, parallel always comes down. That single sentence sorts out most confusion between the two formulas.)*

## Why Kirchhoff — slides 7 to 10

**Slide 7, verbatim.** "However, some circuits cannot be categorized into series and/or parallel connection. To find the currents in this network of resistors, we will apply the techniques developed by the German Physicist, Gustav Kirchhoff."

**Slide 8, verbatim.** "The two terms we use often in these rules are: junction and loop. A point in a circuit where three or more conductors meet is called a junction, while a loop is any closed conducting path."

**Slide 9.** "Based on the above definition, points **a** and **b** (as shown in figure (a)) are junctions. However, points **c** and **d** are not."

**Slide 10.** "Also, points **a, b, c,** and **d** in figure (b) are junctions, but points **e** and **f** are not. Take note of the blue lines as they show some loops within these circuits."

The figure on slide 11 is figure (a) with the labels printed on it: **a** — "Junction", **b** — "Junction", **c** — "Not a Junction", **d** — "Not a Junction", and three loops drawn and labelled **Loop 1, Loop 2, Loop 3**, with two emfs ε₁ and ε₂ each carrying an internal resistance r₁ and r₂, and one external resistor R. Loop 1 is the outer path; Loops 2 and 3 are the two inner meshes. That one picture is the whole vocabulary of the week.

The distinction is worth stating in a form you can apply: at a two-conductor point the current has nowhere to go but onward, so nothing divides and there is nothing for the junction rule to say. At a three-conductor point the current must split or merge, and that split is what ΣI = 0 constrains.

## The two rules

**Slide 11, verbatim.**

> "The two Kirchhoff's rules are given below:
> **Kirchhoff's junction rule:** *The algebraic sum of the currents into any junction is zero.*
> Mathematically, **ΣI = 0**
> In other words, there is no charge can accumulate at a junction, so the total charge that enters the junction per unit time must equal the total charge that leave per unit time."

The word doing the work is **algebraic**. ΣI = 0 is a sum of *signed* numbers: a current flowing **out** of the junction enters the sum as a **negative current in**. So at a junction where I₁ and I₂ arrive and I₃ leaves, ΣI = 0 reads I₁ + I₂ − I₃ = 0, i.e. I₁ + I₂ = I₃ — which is the form the Summary slide states in words.

**Slide 24 (Summary), verbatim.**

> "Kirchhoff's junction rule, also known as Kirchhoff's **current law**, states that the total current entering a junction must equal the total current leaving the junction. This is based on the law of **conservation of charge**, which states that charge cannot be created or destroyed.
> **ΣI = 0 … Junction rule**
> Kirchhoff's loop rule, also known as Kirchhoff's **voltage law**, states that the sum of the voltage drops around any closed loop in a circuit must be zero. This is based on the law of **conservation of energy**, which states that energy cannot be created or destroyed.
> **ΣV = 0 … loop rule**"

**Flag — the loop rule is stated late.** Slide 11 announces "the two Kirchhoff's rules are given below" and then prints only the junction rule. The loop rule ΣV = 0 does not appear in words anywhere until the Summary slide 24, although Example 1 (slide 17) uses it. If an exam asks you to "state the two rules", give both from slide 24: ΣI = 0 at a junction (conservation of charge) and ΣV = 0 round a loop (conservation of energy).

*(Aside on wording: the Summary says the sum of the **voltage drops** round a loop is zero. Taken literally that would leave the batteries out, and a loop of nothing but resistive drops could only sum to zero if the current were zero. What ΣV = 0 actually adds is every **potential change** — the emfs as well as the IR terms — which is precisely what she does on slide 17, where the +12 V and the −4 V sit in the same sum as the four IR terms. Read "ΣV" as "sum of potential changes".)*

## The problem-solving strategy — slides 12 to 15

This is the part that is marked. Four slides, and every one of them is about a sign.

**Slide 12.** "**Problem-solving strategy.** It is very important we assume a direction for the current in each branch of the circuit and mark it on a diagram of the circuit."

**Slide 13.** "Then, take note of a starting point in the circuit and imagine traveling around a loop, adding emfs and IR terms as we come across them. When we travel through a source in the direction from **− to +** the emf is considered to be **positive**; when we travel from **+ to −** the emf is considered to be **negative**."

**Slide 14.** "**Problem-solving strategy.** If we travel through a resistor **in the same direction as the assumed current**, the IR term is **negative** because the current goes in the direction of decreasing potential."

**Slide 15.** "**Problem-solving strategy.** If we travel through a resistor **in the direction opposite to the assumed current**, the IR term is **positive** because this represents a rise of potential."

Collected, that is the entire toolkit:

| What you walk through | Sign of the term |
|---|---|
| Source, crossing **− then +** | **+ ε** |
| Source, crossing **+ then −** | **− ε** |
| Resistor, walking **with** the assumed current | **− IR** |
| Resistor, walking **against** the assumed current | **+ IR** |

Two independent choices are being made and they must not be confused. The **current arrow** on each branch is a *definition of what counts as positive current there*; you may draw it either way and the algebra will correct you with a minus sign. The **travel direction** round the loop is a separate choice; reversing it multiplies the entire loop equation by −1 and changes no answer at all. The emf sign depends only on the travel direction relative to the battery's terminals; the IR sign depends on the travel direction relative to the current arrow.

**Nothing this week is a vector.** Current here is a signed scalar attached to a branch, potential difference is a signed scalar attached to a pair of points, and all the direction information in the problem is carried by those signs and by the arrows you drew. That is why sign discipline replaces the vector diagrams of earlier weeks — and why losing one minus sign loses the whole question.

## KIRCHHOFF'S RULES — EXAMPLE 1 (slides 16–18)

**The problem, slide 16, verbatim.** "The circuit below contains two batteries, each with an emf and an internal resistance, and two resistors. Find (a) the current in the circuit, (b) the potential difference V_ab and (c) the power output of the emf of each battery."

**The circuit (drawn on slides 17 and 18).** A single rectangular loop. Along the **top**: a **2 Ω** resistor and then a **12 V** battery with its **+** terminal on the left; point **b** sits at the top-right corner. Down the **right** side: a **7 Ω** resistor. Along the **bottom**: a **4 Ω** resistor and a **4 V** battery, **+** on the left; point **a** sits at the bottom-left corner. Up the **left** side: a **3 Ω** resistor. The assumed current **I** is marked with arrows: **down** the left side, **left-to-right** along the bottom, **up** the right side, **right-to-left** along the top. A curved arrow in the middle is labelled **"Travel"** and runs the same way.

Identify the parts before touching the algebra: **2 Ω is the internal resistance of the 12 V battery**, **4 Ω is the internal resistance of the 4 V battery**, and **3 Ω and 7 Ω are the two external resistors** — that is what "two batteries, each with an emf and an internal resistance, and two resistors" means. All four are in one series loop.

**There are no junctions in this circuit.** Every point on it joins exactly two conductors, so the junction rule has nothing to say and one single current I serves the whole loop. Example 1 is a pure loop-rule problem.

### Example 1 (a) — the current

Slide 17, verbatim: "Starting at *a* and traveling counterclockwise with the current, we add potential increases and decreases and equate the sum to zero"

**−I(4 Ω) − 4 V − I(7 Ω) + 12 V − I(2 Ω) − I(3 Ω) = 0**

**∴ 8 V = I(16 Ω)**

**i.e. I = 8/16 = 0.5 A**

"Since I is positive, our assumed current direction is correct."

Term by term, so the signs can be defended rather than remembered:

- **−I(4 Ω)** — leaving *a* along the bottom, walking with the current through the 4 Ω. Same direction as the current ⇒ negative.
- **−4 V** — continuing along the bottom into the 4 V battery. Its **+** is on the left, so travelling left-to-right we cross **+ then −** ⇒ negative emf.
- **−I(7 Ω)** — up the right side, with the current ⇒ negative.
- **+12 V** — turning left along the top, we meet the 12 V battery from its right-hand side. Its **+** is on the left, so we cross **− then +** ⇒ positive emf.
- **−I(2 Ω)** — still moving leftward along the top, with the current ⇒ negative.
- **−I(3 Ω)** — down the left side, with the current ⇒ negative, and we are back at *a*.

Collecting: the emfs give **12 V − 4 V = 8 V**; the resistances give **4 + 7 + 2 + 3 = 16 Ω**, so the IR terms give **−I(16 Ω)**. Hence 8 V − I(16 Ω) = 0, i.e. **8 V = I(16 Ω)** and

**I = 8 V / 16 Ω = 0.5 A**

Copy her habit of **carrying the units inside the algebra** — I(4 Ω), 8 V, I(16 Ω). It makes the final division self-checking: volts divided by ohms is amperes, so an answer in the wrong units announces itself.

The two batteries **oppose each other**: the 12 V drives the current the way we assumed, the 4 V pushes back. Only their **difference**, 8 V, is available to drive current through the 16 Ω.

### Example 1 (b) — the potential difference V_ab

Slide 18, verbatim: "To find V_ab the potential at *a* with respect to *b*, we start at *b* and add potential changes as we go toward *a*. There are two paths from *b* to *a*; taking the lower one, we find:"

**V_ab = (0.5)(7) + 4 + (0.5)(4) = 9.5 V**

Read **V_ab = V_a − V_b**: "the potential at *a* with respect to *b*". Walking **b → a by the lower path**, against the current all the way:

- **+ (0.5)(7) = +3.5 V** — down the right side through the 7 Ω, walking **opposite** to the current (it flows upward) ⇒ IR term **positive**.
- **+ 4 V** — leftward along the bottom into the 4 V battery, crossing **− then +** ⇒ emf **positive**. (Going this way we cross the terminals in the opposite order to part (a), which is why the same battery contributed −4 there and +4 here. Same battery, same emf; different traversal.)
- **+ (0.5)(4) = +2 V** — continuing leftward through the 4 Ω, again **against** the current ⇒ positive.

**V_ab = 3.5 + 4 + 2 = 9.5 V**, and *a* is at the **higher** potential.

**Check it by the other path**, which is what "there are two paths" is inviting. Walking **b → a over the top**: through the 12 V battery crossing − then + gives **+12 V**; through the 2 Ω with the current gives **−(0.5)(2) = −1.0 V**; down the left through the 3 Ω with the current gives **−(0.5)(3) = −1.5 V**. Total **12 − 1.0 − 1.5 = 9.5 V** ✓. Two independent routes, same number — that agreement is exactly the content of the loop rule, and it is the fastest way to catch a sign error under exam conditions.

### Example 1 (c) — the power output of each emf

Slide 18, verbatim: "the power output of the emf of each battery is given as:"

**P₁₂ᵥ = εI = (12)(0.5) = 6 W**

**P₄ᵥ = εI = (−4)(0.5) = −2 W**

The formula is **P = εI**, in **watts (W)**, since V × A = W. The signs are the whole point:

- The 12 V battery has the current leaving its **+** terminal — it is **discharging**, doing work on the circuit, and its output is **+6 W**.
- The 4 V battery has the current driven **into** its **+** terminal by the stronger battery — it is being **charged**. Its emf enters the loop equation as **−4 V**, so its power output is **−2 W**. A negative power output means the source is **absorbing** 2 W rather than delivering it.

**Energy check.** Net power delivered by the emfs = 6 W + (−2 W) = **4 W**. Power dissipated in all the resistances = I²R_total = (0.5)²(16) = 0.25 × 16 = **4 W** ✓. Nothing is unaccounted for — which is the conservation of energy that the Summary slide says the loop rule rests on.

*(Aside — not on the slides, but it is the standard cross-check and takes ten seconds. Terminal p.d. of the discharging battery: ε − Ir = 12 − (0.5)(2) = 11 V. Terminal p.d. of the charging battery: ε + Ir = 4 + (0.5)(4) = 6 V. Round the loop: 11 V must equal 6 V + (0.5)(3) + (0.5)(7) = 6 + 1.5 + 3.5 = 11 V ✓.)*

## KIRCHHOFF'S RULES — EXAMPLE 2 (slide 19)

**The problem, verbatim.** "The figure below shows a 'bridge' circuit. Find the current in each resistor."

Her solution runs over **four slides (20–23)**, all headed "KIRCHHOFF'S RULES – SOLUTION 2", each repeating the problem line. **The working on those four slides is in images that were not recoverable for this rebuild**, so the numbers below are *not* hers. What survives is the method, which is the same one she has just laid out, and the reason a bridge is here at all: it is precisely the network slide 7 promised — one that **cannot** be reduced by series and parallel, because no two of its five resistors carry the same current and no two span the same pair of points.

Her method, applied to any bridge:
1. Mark an assumed current arrow on **every one of the five arms** — five unknowns.
2. Write the **junction rule** at the two inner junctions.
3. Write the **loop rule** round enough loops to finish the set, using the four sign rules.
4. Solve, and read any **negative** current as "right size, opposite direction".

### Added worked bridge — clearly marked as NOT from the recovered slides

*(Reconstructed practice, with values from Young & Freedman — the text the deck lists as its first reference — so that there is at least one bridge worked end to end. Treat the method as examinable and these particular numbers as practice.)*

A **13 V** battery of negligible internal resistance is connected between **a** and **d**, **+** at *a*. The arms are: **a→b = 1 Ω**, **a→c = 1 Ω**, **b→d = 1 Ω**, **c→d = 2 Ω**, and the bridge arm **b→c = 1 Ω**.

**Step 1 — assume directions.** I₁ from a→b, I₂ from a→c, I₃ from b→d, I₄ from c→d, I₅ from b→c.

**Step 2 — junction rule.**
At **b**: I₁ arrives, I₃ and I₅ leave ⇒ **I₁ = I₃ + I₅**  …(i)
At **c**: I₂ and I₅ arrive, I₄ leaves ⇒ **I₄ = I₂ + I₅**  …(ii)
(The junction at *d* gives I₃ + I₄ = I₁ + I₂, which is just (i) and (ii) added — no new information.)

**Step 3 — loop rule, loop a→b→c→a.**
a→b with I₁ through 1 Ω ⇒ −I₁(1); b→c with I₅ through 1 Ω ⇒ −I₅(1); c→a against I₂ through 1 Ω ⇒ +I₂(1).
−I₁ − I₅ + I₂ = 0 ⇒ **I₂ = I₁ + I₅**  …(iii)

**Step 4 — loop rule, loop b→d→c→b.**
b→d with I₃ through 1 Ω ⇒ −I₃(1); d→c against I₄ through 2 Ω ⇒ +2I₄; c→b against I₅ through 1 Ω ⇒ +I₅.
**−I₃ + 2I₄ + I₅ = 0**  …(iv)

**Step 5 — loop rule, loop a→b→d→battery→a.**
a→b ⇒ −I₁(1); b→d ⇒ −I₃(1); through the battery from − to + ⇒ +13 V.
**13 − I₁ − I₃ = 0**  …(v)

**Step 6 — solve.** From (i), I₃ = I₁ − I₅. From (iii) and (ii), I₄ = I₂ + I₅ = (I₁ + I₅) + I₅ = I₁ + 2I₅.
Substitute into (iv): −(I₁ − I₅) + 2(I₁ + 2I₅) + I₅ = 0
⇒ −I₁ + I₅ + 2I₁ + 4I₅ + I₅ = 0 ⇒ **I₁ + 6I₅ = 0** ⇒ **I₅ = −I₁/6**.
Substitute into (v): 13 = I₁ + I₃ = I₁ + (I₁ − I₅) = 2I₁ + I₁/6 = 13I₁/6 ⇒ **I₁ = 6 A**.

Then **I₅ = −1 A**, **I₃ = 6 − (−1) = 7 A**, **I₂ = 6 + (−1) = 5 A**, **I₄ = 5 + (−1) = 4 A**.

**Step 7 — read the negative.** I₅ = −1 A does not mean an error. It means the bridge arm carries **1 A from c to b**, opposite to the arrow drawn. Exactly the situation slide 17's remark points at: a positive answer confirms the assumption, a negative one reverses it.

**Step 8 — check.** Current out of the battery = I₁ + I₂ = 6 + 5 = 11 A; current back into it = I₃ + I₄ = 7 + 4 = 11 A ✓. Equivalent resistance of the whole network = 13 V / 11 A = **1.18 Ω** — and note that no combination of series and parallel steps could have produced it.

## Her closing Summary (slides 24–25)

Slide 24 is the two rules, quoted in full above. Slide 25 adds the warning:

> "It is important to note that Kirchhoff's rules must be applied with **consistent sign rules**. For example, when using Kirchhoff's loop rule, it is important to decide whether to define currents as flowing clockwise or counterclockwise around the loop. Once the direction of the current flow has been defined, all voltage drops must be assigned positive or negative signs depending on whether the voltage drop is in the same direction as the current flow or in the opposite direction."

That is the message of the whole week: **the rules are trivial, the signs are the exam.** Slides 26 and 27 give the further reading and references — Young, Freedman and Ford, *University Physics with Modern Physics*, 13th ed., and Walker, Resnick and Halliday, *Fundamentals of Physics* — and slide 28 is the thank-you.

## Commonly confused

- **Forgetting to invert the parallel formula.** 1/4 + 1/6 + 1/10 = 31/60 is **1/R_eq**. The answer is 60/31 = 1.94 Ω. Writing 0.52 Ω is the single most common lost mark on slide 4's example.
- **Using the parallel rule for series or vice versa.** Series **adds** and always lands **above** the largest resistor (27 Ω > 10 Ω). Parallel always lands **below** the smallest (1.94 Ω < 4 Ω). Check your answer against that before anything else.
- **"Same current" versus "same voltage".** Series: same **current**, voltage divides. Parallel: same **voltage**, current divides. Her slides 3 and 5 say exactly this and it decides half the multiple-choice questions.
- **Calling every corner a junction.** Three or more conductors, or it is not a junction — slide 11 prints "Not a Junction" on two of them. Example 1's circuit has none at all, which is why one current I serves the whole loop.
- **Confusing the travel direction with the current arrow.** They are separate decisions. Reversing the travel direction just multiplies the loop equation by −1. Reversing a current arrow flips the sign of that current in the answer.
- **Signing an emf by the current direction.** The emf sign comes **only** from the order in which you cross the terminals: − then + is **+ε**, + then − is **−ε**. The same 4 V battery is −4 V in part (a) and +4 V in part (b) of Example 1, because she walks it the other way. Nothing about the battery changed.
- **Signing an IR term by the travel direction alone.** It is the travel direction **relative to the assumed current**: with the current ⇒ **−IR**, against it ⇒ **+IR**.
- **Dropping the emfs out of ΣV = 0.** "Sum of the voltage drops" is loose wording; the sum is over **all** potential changes, batteries included. Leaving out the +12 V turns Example 1 into 0 = I(16 Ω) and I = 0.
- **Panicking at a negative current.** "Since I is positive, our assumed current direction is correct" — so a negative I means the direction is simply the other way, at the magnitude computed. Do not re-solve.
- **Thinking a negative power is impossible.** P₄ᵥ = −2 W is the answer she gives. It says the 4 V battery is being **charged**, absorbing 2 W. The books balance: 6 − 2 = 4 W delivered, I²R = (0.25)(16) = 4 W dissipated.
- **Adding emfs that oppose.** 12 V and 4 V facing each other give **8 V**, not 16 V. Look at which terminal each + points toward before adding.
- **Losing the units.** IR is A × Ω = V, εI is V × A = W, and V ÷ Ω = A. Carrying units through, as she does in "8 V = I(16 Ω)", catches the errors that pure numbers hide.

## What you should be able to say out loud

- Series adds resistances and shares one current; parallel adds reciprocals and shares one voltage — and I must invert at the end.
- A junction is where three or more conductors meet; a loop is any closed conducting path.
- ΣI = 0 at every junction, and it is conservation of charge; ΣV = 0 round every loop, and it is conservation of energy.
- I mark an assumed current on every branch, pick a travel direction, and sign each term by two rules: **− to + is +ε, + to − is −ε**, and **with the current is −IR, against it is +IR**.
- Some networks — the bridge — cannot be reduced by series and parallel at all, which is why the rules exist.
- In Example 1 the loop gives 8 V = I(16 Ω), so I = 0.5 A; V_ab = 3.5 + 4 + 2 = 9.5 V by the lower path and 12 − 1.0 − 1.5 = 9.5 V by the upper; and the emf powers are +6 W and −2 W, summing to the 4 W the resistors dissipate.
- A positive current confirms my assumed direction; a negative one has the right magnitude and the opposite direction, and I change nothing.
