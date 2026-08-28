# PHY_102 — Week 5 Summary

*General Physics II · Week 5 (5–11 Oct 2026) · Topic: Circuit Analysis — Resistors in Series and Parallel, and Kirchhoff's Rules*

## The 8 most examinable things this week

1. **A junction (node) is a point where three or more conductors meet.** A mere corner, or a point where two wires join end to end, is **not** a junction — the current there is the same on both sides. **A loop is any closed conducting path**, and it need not contain a source.
2. **Kirchhoff's current (junction) rule**: the algebraic sum of the currents at any junction is zero — **ΣI_in = ΣI_out**, equivalently **ΣI = 0** with currents into the junction counted positive. It expresses **conservation of charge**: charge cannot pile up at a point in the steady state.
3. **Kirchhoff's voltage (loop) rule**: the algebraic sum of the potential differences around any closed loop is zero — **ΣV = 0**, i.e. **Σε = ΣIR** around the loop. It expresses **conservation of energy**: potential is single-valued, so a coulomb returning to its starting point has given back exactly the energy it received.
4. **Sign rule for a source** (from the slides, verbatim): travelling through a source **from − to + the emf is positive**; travelling **from + to − the emf is negative**. This depends **only on the terminals you pass through** — never on the assumed current direction.
5. **Sign rule for a resistor** (from the slides, verbatim): travelling through a resistor **in the same direction as the assumed current the IR term is negative** (you are descending in potential); travelling **opposite to the assumed current the IR term is positive** (a rise). This depends **only on the assumed current arrow** — never on where the batteries are.
6. **How many equations**: with *b* branches (so *b* unknown currents) and *n* junctions, you get **n − 1 independent junction equations** and **b − n + 1 independent loop equations**, totalling exactly *b*. The *n*th junction equation is the sum of the others; any loop that is a combination of loops already used gives **no new information**. A good working rule: **each new loop must contain at least one branch not yet used**.
7. **Procedure**: collapse every genuine series/parallel group first (**R_s = ΣR**, **1/R_p = Σ1/R**); assign and *mark* a current arrow in every remaining branch; write the junction equations; write independent loop equations with the two sign rules; solve simultaneously. **A negative answer means the arrow was drawn backwards — the magnitude is still correct and nothing needs re-solving.**
8. **Check by power balance**: **Σ εI (sources) = Σ I²R (all resistances, internal ones included)**, with a source whose current *enters its + terminal* counted as **absorbing** εI (it is being charged). Terminal p.d.: **V = ε − Ir** discharging, **V = ε + Ir** charging.

## The two rules, stated exactly

**Junction rule (Kirchhoff's first rule / KCL)**
For any junction, Σ I = 0, where currents flowing *into* the junction are taken positive and currents flowing *out* negative. Equivalently: **the total current entering a junction equals the total current leaving it.**
*Physical basis*: **conservation of charge**, applied to a steady current. A junction has no capacity to store charge, so whatever flows in per second must flow out per second. (This is exactly why it is a *steady*-current rule: if charge could accumulate — as on a capacitor plate — the statement would fail.)

**Loop rule (Kirchhoff's second rule / KVL)**
For any closed loop, Σ V = 0 — the algebraic sum of the emfs and the IR terms encountered on one complete circuit of the loop is zero.
*Physical basis*: **conservation of energy**. The electrostatic potential V is a single-valued function of position; going right round a loop returns you to the same point and therefore to the same potential, so the net change must be zero. Per coulomb: the energy handed out by the sources equals the energy dissipated in the resistances.

**The sign table** — apply these two decisions *independently*, one for the source, one for the resistor:

| What you traverse | Direction of travel | Term you write |
|---|---|---|
| Source of emf ε | from − to + (a rise) | **+ε** |
| Source of emf ε | from + to − (a fall) | **−ε** |
| Resistor R carrying assumed current I | **with** the arrow | **−IR** |
| Resistor R carrying assumed current I | **against** the arrow | **+IR** |

The *direction you choose to walk the loop* is arbitrary: walking the other way multiplies every term by −1 and gives the same equation. The *assumed current arrows* are arbitrary too — but once drawn they must be used consistently in every equation.

**Series and parallel (use these first)**
Series — same current through each, p.d.s add: **R_s = R₁ + R₂ + …**
Parallel — same p.d. across each, currents add: **1/R_p = 1/R₁ + 1/R₂ + …**
**Ohm's law V = IR**, with V in volts, I in amperes, R in ohms (Ω).
These reductions only work where the topology genuinely *is* series or parallel. In a **bridge** network no two resistors are in series (a junction interrupts them) and no two are in parallel (they do not share both ends), so the reduction stalls and Kirchhoff's rules are the only route.

**Solution procedure (six steps)**
1. Redraw and label; reduce any true series/parallel groups.
2. Assume a current direction in **every** branch and draw the arrow on the diagram. Guessing wrong costs nothing.
3. Apply the junction rule at n − 1 junctions to eliminate variables early.
4. Choose b − n + 1 loops, each with a branch not previously used; travel each loop from a marked starting point, writing +ε/−ε and −IR/+IR as you meet them.
5. Solve the simultaneous equations (substitution or elimination).
6. Interpret the signs, then **check by power balance** and by re-substituting into one unused loop.

## Worked example 1 — single loop, two opposing emfs with internal resistance

A 16.0 V battery of internal resistance r₁ = 1.0 Ω and an 8.0 V battery of internal resistance r₂ = 1.0 Ω are connected in a single loop **in opposition** (both + terminals pointing the same way round the loop), together with R₁ = 5.0 Ω and R₂ = 1.0 Ω. Find (a) the current, (b) the terminal p.d. of each battery, (c) the power output of each emf.

1. One loop, one unknown — the junction rule is not needed (there are no junctions).
2. Assume I clockwise, in the sense the 16 V battery drives. Walk clockwise from the negative terminal of the 16 V cell:
 **+16.0 − I(1.0) − I(5.0) − 8.0 − I(1.0) − I(1.0) = 0**
 The 8.0 V appears as **−8.0** because, walking this way, we enter it at its **+** terminal. Every resistance appears as −IR because we walk with the arrow.
3. **16.0 − 8.0 = I(1.0 + 5.0 + 1.0 + 1.0) → 8.0 = 8.0 I → I = 1.00 A.**
 Note the structure: **opposing emfs subtract, all resistances add** — internal ones included.
4. Terminal p.d. of the 16 V battery (current leaves its + terminal → **discharging**): V = ε − Ir = 16.0 − (1.00)(1.0) = **15.0 V**.
 Terminal p.d. of the 8 V battery (current enters its + terminal → **being charged**): V = ε + Ir = 8.0 + (1.00)(1.0) = **9.0 V**.
5. Power output of each emf: P₁ = ε₁I = (16.0)(1.00) = **16.0 W delivered**; P₂ = ε₂I = (8.0)(1.00) = **8.0 W absorbed** (converted back to chemical energy).
6. Balance: delivered 16.0 W = absorbed 8.0 W + dissipated I²ΣR = (1.00)²(8.0) = 8.0 W. ✔ Of the 9.0 W the small battery receives (V I = 9.0 × 1.00), 8.0 W is stored chemically and 1.0 W is wasted as I²r₂ heating inside it.

## Worked example 2 — two-loop network by simultaneous equations, checked by power

Two batteries feed a common resistor between nodes a (top) and b (bottom). Branch 1: ε₁ = 10.0 V in series with R₁ = 2.0 Ω. Branch 2: ε₂ = 9.0 V in series with R₂ = 3.0 Ω. Both batteries have their **+ terminal towards a**. Branch 3: R₃ = 2.0 Ω. Find every current.

1. **Count**: b = 3 branches → 3 unknowns; n = 2 junctions (a and b) → **1** junction equation; loops **b − n + 1 = 2**.
2. Assume I₁ and I₂ flow **up towards a** in branches 1 and 2, and I₃ flows **down from a to b** through R₃.
 Junction a: **I₁ + I₂ = I₃.**
3. Loop 1 (up branch 1, down branch 3), starting at b: +10.0 − 2.0I₁ − 2.0I₃ = 0 → **I₁ + I₃ = 5.0**
 Loop 2 (up branch 2, down branch 3), starting at b: +9.0 − 3.0I₂ − 2.0I₃ = 0 → **3I₂ + 2I₃ = 9.0**
4. Substitute I₃ = I₁ + I₂:
 2I₁ + I₂ = 5.0 …(i)
 2I₁ + 5I₂ = 9.0 …(ii)
 (ii) − (i): 4I₂ = 4.0 → **I₂ = 1.00 A**; then from (i) **I₁ = 2.00 A**, and **I₃ = 3.00 A**.
5. **Power check.** Delivered by the sources: ε₁I₁ + ε₂I₂ = (10.0)(2.00) + (9.0)(1.00) = 20.0 + 9.0 = **29.0 W**.
 Dissipated: I₁²R₁ + I₂²R₂ + I₃²R₃ = (4.00)(2.0) + (1.00)(3.0) + (9.00)(2.0) = 8.0 + 3.0 + 18.0 = **29.0 W**. ✔
6. Second check: V_ab = I₃R₃ = 6.00 V, and each branch agrees — 10.0 − (2.00)(2.0) = 6.0 V, 9.0 − (1.00)(3.0) = 6.0 V. A network solved correctly gives **one** value of V_ab by every route.

## Worked example 3 — an assumed current comes out negative

Same layout as above, but now ε₁ = 12.0 V with R₁ = 2.0 Ω, ε₂ = 4.0 V with R₂ = 2.0 Ω (both **+** towards a), and R₃ = 3.0 Ω. Assume, as before, that **both** I₁ and I₂ flow up into node a, with I₃ down through R₃.

1. Junction a: I₁ + I₂ = I₃.
2. Loop 1: 12.0 − 2.0I₁ − 3.0I₃ = 0. Loop 2: 4.0 − 2.0I₂ − 3.0I₃ = 0.
3. Eliminating I₃ = I₁ + I₂: **5I₁ + 3I₂ = 12.0** and **3I₁ + 5I₂ = 4.0**.
 ×5 and ×3: 25I₁ + 15I₂ = 60.0; 9I₁ + 15I₂ = 12.0. Subtracting: 16I₁ = 48.0 → **I₁ = 3.00 A**.
 Then 3(3.00) + 5I₂ = 4.0 → **I₂ = −1.00 A**, and **I₃ = I₁ + I₂ = 2.00 A**.
4. **What the minus sign means.** The magnitude 1.00 A is correct; only the *arrow* was wrong. Branch 2 actually carries **1.00 A from a down to b** — into the **+** terminal of the 4.0 V battery. That battery is therefore **being charged** by the 12.0 V battery. **Do not go back and re-solve with the arrow reversed**; and do not quietly drop the sign — I₂ = −1.00 A must be substituted *with its sign* into I₃ and into every later expression.
5. Consistency: V_ab = I₃R₃ = (2.00)(3.0) = 6.0 V. Branch 1: 12.0 − (3.00)(2.0) = 6.0 V ✔. Branch 2: the terminal p.d. of the charging battery is ε₂ + Ir = 4.0 + (1.00)(2.0) = 6.0 V ✔ — note the **+** sign, because it is being charged.
6. Power: delivered (12.0)(3.00) = 36.0 W. Absorbed chemically by battery 2: (4.0)(1.00) = 4.0 W. Dissipated: (9.00)(2.0) + (1.00)(2.0) + (4.00)(3.0) = 18.0 + 2.0 + 12.0 = 32.0 W. And 36.0 = 4.0 + 32.0 ✔.

## Worked example 4 — a bridge circuit (where series/parallel fails)

A 14.0 V source of negligible internal resistance is connected across a and d. The arms are: a–b = 1.0 Ω, a–c = 2.0 Ω, b–d = 2.0 Ω, c–d = 1.0 Ω, and a bridging resistor b–c = 1.0 Ω. Find the current in each resistor.

1. **Why Kirchhoff is compulsory**: a–b and b–d are not in series, because current leaves at the junction b; a–b and a–c are not in parallel, because they do not share both ends. Nothing reduces.
2. Let **x** = current a→b, **y** = current a→c, **z** = current b→c through the bridge. Junction b gives current b→d = **x − z**; junction c gives current c→d = **y + z**. Three unknowns, so three independent loops.
3. Loop a→b→c→a: −1.0x − 1.0z + 2.0y = 0 → **2y = x + z**.
 Loop b→d→c→b: −2.0(x − z) + 1.0(y + z) + 1.0z = 0 → **2x = y + 4z**.
 Loop a→b→d (through the source): 14.0 = 1.0x + 2.0(x − z) → **14.0 = 3x − 2z**.
4. From the first two: x = 2y − z, so y + 4z = 2(2y − z) → 6z = 3y → **y = 2z**, hence **x = 3z**.
 Then 14.0 = 9z − 2z = 7z → **z = 2.00 A**, **y = 4.00 A**, **x = 6.00 A**.
5. So: a–b **6.00 A**, a–c **4.00 A**, bridge b–c **2.00 A from b to c**, b–d **4.00 A**, c–d **6.00 A**. Total from the source = x + y = **10.0 A**, so the network behaves as 14.0/10.0 = **1.40 Ω**.
6. Power check: source (14.0)(10.0) = 140 W; dissipation 36(1.0) + 16(2.0) + 4(1.0) + 16(2.0) + 36(1.0) = 36 + 32 + 4 + 32 + 36 = **140 W** ✔.
7. **Balance condition**: had the arms satisfied R_ab/R_bd = R_ac/R_cd, the bridge current z would be **zero**, b and c would sit at the same potential, and only then could the network be finished with series/parallel arithmetic.

## Commonly confused

- **Which rule is which conservation law**: the **junction** rule is **charge**; the **loop** rule is **energy**. Swapping them is the single most common one-mark loss on a "state and explain" question.
- **A corner is not a junction.** Three or more conductors must meet. In the lecture figure, a and b are junctions but c and d are not — the current is unchanged through c and d, so writing a junction equation there yields I = I.
- **The two sign rules are independent decisions.** The emf sign is fixed by which terminal you enter; the IR sign is fixed by whether you walk with or against the *arrow*. Students routinely make the battery sign depend on the current, or the resistor sign depend on the battery.
- **"A resistor always gives −IR."** Only if you traverse it *with* the assumed current. Walk against the arrow and it is **+IR**, because you are climbing in potential.
- **Reversing the walk direction changes the answer.** It does not: every term flips sign, so the equation is the same one multiplied by −1.
- **A negative current means an error.** It means the arrow was drawn backwards. Report the magnitude with the corrected direction; keep the minus sign in all substitutions; never re-solve.
- **Too many equations.** With 3 unknowns, writing 2 junction equations at 2 junctions plus 3 loop equations gives a redundant, easily-contradicted set. n − 1 junctions and b − n + 1 loops, no more.
- **Choosing a "new" loop that isn't new.** In a two-loop network the outer perimeter is the *sum* of the two inner loops; it adds nothing.
- **Forgetting internal resistance.** r sits inside the loop equation like any other resistance, and inside the I²R total when checking power. Terminal p.d. equals ε only at zero current.
- **Charging vs discharging.** Current leaving the + terminal → the source delivers εI and V = ε − Ir. Current entering the + terminal → the source absorbs εI and V = ε + Ir.
- **εI versus I²R versus VI.** εI is the chemical-to-electrical conversion rate; I²r is the heat wasted inside the source; VI = (ε ∓ Ir)I is what actually crosses the terminals. For a charging battery all three are different numbers.
- **Applying series/parallel to a bridge.** Resistors in the two arms on the same side of a bridge are neither in series (a junction taps between them) nor in parallel (they share only one end). Reducing them anyway is the classic wrong answer.
- **ΣI_in = ΣI_out vs ΣI = 0.** Identical statements; just do not use both conventions in one equation, or currents get counted twice with the wrong sign.

*Note: the lecture deck for this week is unusually thin as extracted. The slides state the problem-solving strategy and both sign conventions in words — those survive and are quoted above — but the slide carrying the **actual equations of the two rules** is blank in the text layer, as are the figures defining junctions a, b and non-junctions c, d, and the whole of the deck's Example 1 (two batteries with internal resistance) and Example 2 (the bridge circuit), whose working existed only as images. The standard 100-level treatment of the stated objectives has been supplied above, with worked examples of exactly the two types the deck set. Ligatures are also lost throughout the source ("Kirchho", "dierent", "baeries", "ﬁnd" → "nd"). One further inconsistency in the week Summary sheet: its case study is titled "Analysing Capacitors in Electrical Devices" but its introduction, methodology and results are entirely about resistors and Ohm's law — treat the title as a slip and the resistor content as the intended material.*
