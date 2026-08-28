# PHY_102 — Week 5 Summary

*General Physics II · Week 5 (5 – 11 Oct 2026) · Topic: Kirchhoff's Rules — circuit analysis by the junction and loop rules (with Ohm's law, series and parallel resistors)*

## The 8 most examinable things this week

1. **Why Kirchhoff at all**: some networks **cannot be reduced to series and/or parallel combinations** — a bridge is the standard example, where no two resistors are purely in series (they do not carry the same current) and no two are purely in parallel (they do not share both end nodes). For those, Gustav **Kirchhoff's** two rules replace the reduction. Series/parallel is still the faster route whenever it works.
2. **Junction and loop, defined**: a **junction** (node) is a point where **three or more conductors meet**; a **loop** is **any closed conducting path**. A point where only **two** conductors meet is *not* a junction — it is just a bend in one branch, and the same current passes through it.
3. **Junction rule (KCL) — conservation of charge**: *the algebraic sum of the currents into any junction is zero*, **ΣI = 0**, currents *into* the junction counted **+** and *out* counted **−**; equivalently **ΣI_in = ΣI_out**. It holds because in a steady current **charge cannot pile up at a point**. Unit: amperes (A).
4. **Loop rule (KVL) — conservation of energy**: *the algebraic sum of the potential changes round any closed loop is zero*, **ΣV = 0**. It holds because potential is single-valued: return to your starting point and you must be back at the same potential, i.e. a unit charge carried round the loop gains exactly as much energy from emfs as it loses in IR drops. Unit: volts (V).
5. **The four sign rules (memorise as two pairs)**. First assume and mark a current direction in **every branch** — any guess will do. Then pick a starting point and a sense of travel round the loop, and collect terms as you meet them:
   - source traversed **from − to +**: **+ε**; source traversed **from + to −**: **−ε**;
   - resistor traversed **in the same direction as the assumed current**: **−IR** (you are going *down* the potential); resistor traversed **opposite to the assumed current**: **+IR** (a rise of potential).
6. **The emf sign and the IR sign obey different tests.** The **emf** sign depends only on the **battery's polarity versus your direction of travel** — the assumed current is irrelevant to it. The **IR** sign depends on **your direction of travel versus the assumed current** — the battery's polarity is irrelevant to it. **Internal resistance r is an ordinary resistor** in that branch and takes the **IR** rule, never the emf rule.
7. **How many equations, and which**: for **b** unknown branch currents in a network with **n** junctions, exactly **n − 1** junction equations are independent (the last one is the sum of the others) and exactly **b − (n − 1) = b − n + 1** loops give independent equations. Together: **b equations for b unknowns**. Extra loops are legitimate but **dependent** — good as checks, useless as equations.
8. **A negative answer is a valid answer**: it means the current has the magnitude you calculated but flows **opposite to the direction you assumed**. Nothing needs rewriting; the sign convention was applied consistently to the assumed direction, so the algebra corrects your guess for you. A negative current through a battery usually means that battery is being **charged**, and its terminal voltage is then **V = ε + Ir**, not ε − Ir.

## Statements, formulas and units (state these exactly)

**Ohm's law.** **V = IR**, with current **I** in amperes (A), potential difference **V** in volts (V) and resistance **R** in ohms (Ω = V/A). Power **P = VI = I²R = V²/R** in watts (W).

**Series.** Same current through every element; **R_series = R₁ + R₂ + … + R_n** — the total resistance is the **sum** of the individual resistances, and is larger than the largest of them.

**Parallel.** Same potential difference across every element; **1/R_parallel = 1/R₁ + 1/R₂ + … + 1/R_n** — the **inverse** of the total is the **sum of the inverses**, and the total is smaller than the smallest of them. For two: **R = R₁R₂/(R₁ + R₂)**.

**Junction rule.** ΣI = 0 at every junction (in +, out −). **Conservation of charge.**

**Loop rule.** ΣV = 0 round every closed conducting path, using the four sign rules above. **Conservation of energy.**

**Problem-solving strategy (the lesson's own recipe).** (i) Assume a direction for the current in **each branch** and **mark it on the diagram**. (ii) Choose a starting point and imagine **travelling round a loop**, adding emf and IR terms as you meet them. (iii) Apply the junction rule at n − 1 junctions and the loop rule to b − n + 1 loops. (iv) Solve the simultaneous equations; interpret any negative current as a reversed direction.

**Battery terminal voltage.** Discharging (current leaves the **+** terminal): **V_terminal = ε − Ir**. Charging (current is forced **into** the + terminal): **V_terminal = ε + Ir**. The emf's power output is **P = εI** (negative — absorbed — when the battery is being charged); the internal dissipation is **I²r**.

**Consistency, in the lesson's words.** Kirchhoff's rules must be applied with **consistent sign rules**: once you have fixed the current directions and the sense in which you travel each loop, every term must be signed by that same convention throughout. Traversing a loop the other way multiplies the whole equation by **−1** and changes nothing.

## Worked example 1 — single loop, two batteries with internal resistance

Four elements in one series loop. Going clockwise from point **a** you meet, in order: the **7 Ω** resistor (to point **b**); the **4 V** battery entered at its **+** terminal (internal resistance **3 Ω**); a **4 Ω** resistor; the **12 V** battery entered at its **−** terminal (internal resistance **2 Ω**), back to a. Assume **I clockwise**.

1. **Loop rule, travelling clockwise** (so every resistor is traversed *along* I → all IR terms negative):
   −7I − 4 − 3I − 4I + 12 − 2I = 0.
2. Collect: **12 − 4 = (7 + 3 + 4 + 2)I → 8 = 16I → I = 0.50 A**, positive, so the guess was right. Note the **net emf is the difference**, 12 − 4 = 8 V, because the batteries oppose each other; the resistances always **add**.
3. **V_ab** across the 7 Ω, with the current flowing a → b through it: **V_ab = IR = 0.50 × 7 = +3.5 V** (a is the higher potential).
4. **Terminal voltages**: 12 V battery is **discharging**, V = 12 − (0.50)(2) = **11.0 V**; the 4 V battery has current forced into its + terminal, so it is being **charged**, V = 4 + (0.50)(3) = **5.5 V**.
5. **Power output of each emf**: 12 V battery, P = εI = **+6.0 W** delivered; 4 V battery, P = εI = **−2.0 W**, i.e. it **absorbs** 2.0 W. Audit: 6.0 W in = 2.0 W stored chemically + I²ΣR = (0.25)(16) = **4.0 W** dissipated ✓.

## Worked example 2 — a full two-loop network, end to end

Two branches feed a common top node **a**; node **b** is the bottom rail. **Branch 1**: 12 V battery (− terminal on the rail) in series with **4 Ω**, assumed current **I₁ from b to a**. **Branch 2**: 6 V battery (− terminal on the rail) in series with **2 Ω**, assumed current **I₂ from b to a**. **Branch 3**: **3 Ω** from a down to b, assumed current **I₃ from a to b**. (This is the Week 4 superposition/Thévenin circuit — solved here by Kirchhoff alone, and it must give the same answer.)

1. **Count first.** b = 3 branches, n = 2 junctions (a and b) → **1** junction equation and **3 − 2 + 1 = 2** loop equations. Three equations, three unknowns.
2. **Junction rule at a** (in +, out −): **I₁ + I₂ − I₃ = 0**.
3. **Loop 1**, travelling b → 12 V battery → 4 Ω → a → 3 Ω → b. Through the source **− to +**: **+12**. Through 4 Ω **along** I₁: **−4I₁**. Through 3 Ω **along** I₃: **−3I₃**. So **12 − 4I₁ − 3I₃ = 0**.
4. **Loop 2**, travelling b → 6 V battery → 2 Ω → a → 3 Ω → b, by the same rules: **6 − 2I₂ − 3I₃ = 0**.
5. **Eliminate I₃ = I₁ + I₂**: 12 = 7I₁ + 3I₂ and 6 = 3I₁ + 5I₂. Solving: **I₂ = 3/13 = 0.231 A**, **I₁ = 21/13 = 1.615 A**, **I₃ = 24/13 = 1.846 A**. All positive → all three guesses were right.
6. **Checks.** Node a sits at 3I₃ = **5.54 V** — the Week 4 nodal answer ✓. The **outer loop** (b → 12 V → 4 Ω → a → 2 Ω → 6 V → b) gives 12 − 4I₁ + 2I₂ − 6 = 12 − 6.462 + 0.462 − 6 = 0 ✓, and note it is just **loop 1 minus loop 2** — a check, not a fourth equation. Power: sources 12(1.615) + 6(0.231) = **20.77 W**; dissipation 4I₁² + 2I₂² + 3I₃² = **20.77 W** ✓.
7. **If you had guessed I₂ downwards** (a to b), the loop-2 equation becomes 6 + 2I₂ − 3I₃ = 0 and the answer comes out **I₂ = −3/13 A** — same physics, sign flipped by your own labelling.

## Worked example 3 — counting equations for a bridge, and the balance condition

A 12 V source spans nodes **A** (top) and **D** (bottom). **2 Ω** runs A→B, **4 Ω** runs A→C, **4 Ω** runs B→D, **2 Ω** runs C→D, and a **5 Ω** galvanometer branch runs **B→C**.

1. **Why series/parallel fails**: the 2 Ω (A→B) and 4 Ω (B→D) are *not* in series, because the 5 Ω branch drains current away at B; the two upper arms are *not* in parallel, because they do not share both ends. Hence Kirchhoff.
2. **Counting**: b = **6** branches (including the source branch), n = **4** junctions (A, B, C, D) → **3** independent junction equations and **6 − 4 + 1 = 3** independent loop equations. Six equations for six branch currents. Because the source has negligible internal resistance the two rail potentials are known, which cuts it to two unknowns (V_B, V_C) in practice.
3. **Balance condition**: the galvanometer branch carries **no current** when **R_AB/R_BD = R_AC/R_CD**, i.e. **R_AB·R_CD = R_AC·R_BD**. Here 2 × 2 = 4 against 4 × 4 = 16, so this bridge is **unbalanced** and current does flow in the 5 Ω branch.
4. **Answer** (setting V_D = 0, V_A = 12 V and applying the junction rule at B and at C): V_B = **7.30 V**, V_C = **4.70 V**; currents **2.35 A** in each 2 Ω, **1.83 A** in each 4 Ω, and **0.52 A from B to C** in the 5 Ω; the source supplies **4.17 A**. Check: 12 × 4.17 = 50.1 W in, and ΣI²R = 50.1 W out ✓.

## Commonly confused

- **A junction needs three or more conductors.** Where only two wires meet there is no branching, no choice of path and nothing for the junction rule to say — writing an equation there gives the useless identity I = I. In the lesson's figures, points c, d, e and f are *not* junctions for exactly this reason.
- **Which rule is which conservation law**: the **junction** rule is **charge** conservation, the **loop** rule is **energy** conservation. Swapping them is a guaranteed lost mark, and the two are not interchangeable — a loop equation written at a junction, or a current balance written round a loop, is meaningless.
- **The emf sign is not set by the current.** Travelling **− to +** through a source gives **+ε** whichever way the current is assumed to flow, and whether the battery is charging or discharging. Only the **IR** term looks at the current.
- **Which way the IR sign goes**: travelling **with** the assumed current means going **downhill** in potential, so the term is **−IR**; against it, **+IR**. Students who "always write −IR" get every equation right only by accident, and get the outer-loop check wrong every time.
- **Internal resistance is not part of the emf.** In a loop equation a battery contributes **two** terms, ±ε *and* ∓Ir, signed by two different tests. Merging them into a single "±(ε − Ir)" works only for a discharging battery traversed one particular way.
- **Opposing batteries: emfs subtract, resistances add.** In Worked example 1 the driving voltage is 12 − 4 = 8 V but the total resistance is 2 + 4 + 3 + 7 = 16 Ω. Adding the emfs (16 V) doubles the answer; subtracting resistances is meaningless.
- **A negative current is not an error.** It means "same size, opposite direction". Do not go back and re-solve — that just flips the sign again. Similarly, **traversing the loop the other way** multiplies the whole equation by −1 and gives the identical solution.
- **Counting loops is not counting closed paths.** Three parallel branches between two junctions offer **three** traceable closed paths but only **two** independent loop equations (b − n + 1 = 3 − 2 + 1 = 2). Using all three gives a dependent set that collapses on solving; using only one leaves the system underdetermined.
- **Both junctions of a two-node network give the same equation.** With n = 2 you get n − 1 = **one** independent junction equation; the equation at b is exactly the equation at a multiplied by −1.
- **Terminal voltage: ε − Ir or ε + Ir.** Subtract when the battery **discharges** (current out of the + terminal), add when it is being **charged** (current forced into the + terminal). A charging battery reads *above* its emf, which is why the terminal voltage of a car battery rises while the alternator runs.
- **A bridge is not reducible.** Do not try to "combine" bridge arms in series or parallel; and note that the balance condition is a **ratio** condition, R₁R₄ = R₂R₃, not an equality of individual resistances.
- **Source title garbled**: the slide deck is labelled "Kirchoff's law" (singular). There are **two rules**, and the name has **two h's** — Kirchhoff. The Summary sub-document's case study is also mis-titled "Analysing Capacitors in Electrical Devices" while its entire content is about **resistors**; there are no capacitors in this week's material.
