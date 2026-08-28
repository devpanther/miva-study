# Friday — PHY_102 nightly check

*Numerical work with Kirchhoff's rules: single loops with opposing emfs and internal resistance, multi-loop networks solved by simultaneous equations, terminal p.d. and power balance, and the interpretation of a current that comes out negative.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**Questions 1–3 refer to this circuit.** A 9.0 V battery (r = 0.5 Ω) and a 3.0 V battery (r = 0.5 Ω) are joined in a single loop **in opposition**, in series with a 5.0 Ω resistor.

**1.** The current in the loop is:
a) 1.0 A
b) 2.0 A
c) 1.2 A
d) 1.5 A

**2.** The terminal potential difference of the 3.0 V battery is:
a) 3.5 V
b) 2.5 V
c) 3.0 V
d) 8.5 V

**3.** The rate at which the 3.0 V battery's **emf** converts electrical energy into chemical energy is:
a) 3.0 W
b) 3.5 W
c) 0.5 W
d) 9.0 W

**Questions 4–6 refer to this circuit.** Between nodes a and b: branch 1 is a 12.0 V battery in series with 3.0 Ω; branch 2 is an 8.0 V battery in series with 2.0 Ω, both **+** terminals towards a; branch 3 is a 2.0 Ω resistor.

**4.** The current in the 2.0 Ω resistor of branch 3 is:
a) 3.0 A
b) 2.4 A
c) 2.0 A
d) 4.4 A

**5.** The total power dissipated in the three resistances is:
a) 32 W
b) 24 W
c) 14 W
d) 63 W

**6.** Had the 8.0 V battery been replaced by a 4.0 V one, the current in its branch would come out negative. That would mean:
a) that branch carries current from a to b, and the 4.0 V battery is being charged
b) the arrows must be redrawn and all three equations solved again from scratch
c) that branch carries no current, the sign being an artefact of the loops chosen
d) an arithmetic slip has been made, since a real current cannot be negative

**7.** A bridge has a supply across A and C, arms A–B = 12 Ω, B–C = 6 Ω, A–D = 8 Ω, D–C = 4 Ω, and a galvanometer between B and D. The resistance between A and C is:
a) 7.2 Ω
b) 6.7 Ω
c) 30 Ω
d) 1.6 Ω

**8.** Four wires meet at a junction. One carries 4.0 A in, a second 2.0 A in, a third 9.0 A out. The fourth carries:
a) 3.0 A into the junction
b) 3.0 A out of the junction
c) 15 A into the junction
d) 5.0 A out of the junction

**9. (explain why)** A 20.0 V battery of internal resistance 1.0 Ω and an 8.0 V battery of internal resistance 1.0 Ω are connected in a single loop **in opposition**, in series with a 2.0 Ω resistor. Find the current, the terminal p.d. of each battery, and account for the whole power budget.

**10. (explain why)** Between nodes a and b: branch 1 is a 14.0 V battery in series with 2.0 Ω; branch 2 is a 12.0 V battery in series with 4.0 Ω, both **+** terminals towards a; branch 3 is a 2.0 Ω resistor. Write the junction and loop equations, solve for all three currents, and verify by power balance.

**11. (explain why)** Same layout, but now branch 1 is 18.0 V with 3.0 Ω, branch 2 is 6.0 V with 2.0 Ω, and branch 3 is 6.0 Ω. Assume both branch currents flow **up into a**. Solve, then explain in full what the sign of your answer for branch 2 tells you physically, and confirm it with a power budget.

**12. (explain why)** A student solves the network of question 10 and reports I₁ = 3.0 A, I₂ = 1.0 A, I₃ = 5.0 A; a second student reports I₁ = 4.0 A, I₂ = 1.0 A, I₃ = 5.0 A. Show which check catches each error, and explain why the junction rule alone is not a sufficient test of a solution.

---

## Answers

**1. a** — *Opposing emfs subtract; every resistance, internal included, adds.* I = (9.0 − 3.0)/(0.5 + 0.5 + 5.0) = 6.0/6.0 = **1.0 A**. (b) adds the emfs, 12.0/6.0, as though the batteries assisted each other. (c) drops the two internal resistances, 6.0/5.0. (d) ignores the smaller battery's emf but keeps its internal resistance, 9.0/6.0.

**2. a** — *A battery driven backwards has V = ε + Ir.* Current is forced into the **+** terminal of the 3.0 V cell, so V = 3.0 + (1.0)(0.5) = **3.5 V**: the terminals of a charging battery stand *above* its emf. (b) applies the discharging formula ε − Ir. (c) assumes terminal p.d. always equals emf — true only at zero current. (d) is the *other* battery's terminal p.d., 9.0 − (1.0)(0.5), misassigned.

**3. a** — *εI is the chemical conversion; VI and I²r are different quantities.* The emf term converts εI = (3.0)(1.0) = **3.0 W** back into chemical energy. (b) is VI = (3.5)(1.0), the *total* power delivered to the battery at its terminals, of which 0.5 W is wasted as heat. (c) is that waste alone, I²r = (1.0)²(0.5). (d) is the output of the 9.0 V battery's emf. Note the budget: 9.0 W supplied = 3.0 W stored + 6.0 W dissipated in the three resistances.

**4. a** — *Two-loop solve.* With I₁, I₂ up into a and I₃ down through branch 3: I₁ + I₂ = I₃; 12.0 − 3I₁ − 2I₃ = 0; 8.0 − 2I₂ − 2I₃ = 0. Solving gives I₁ = 2.0 A, I₂ = 1.0 A, **I₃ = 3.0 A** (and V_ab = 6.0 V, confirmed by both branches). (b) is branch 1 alone, 12.0/5.0, ignoring the second source. (c) is branch 2 alone, 8.0/4.0. (d) adds those two independent answers, which counts the shared 2.0 Ω twice.

**5. a** — *ΣI²R must equal ΣεI.* (2.0)²(3.0) + (1.0)²(2.0) + (3.0)²(2.0) = 12 + 2 + 18 = **32 W**, matching ΣεI = (12.0)(2.0) + (8.0)(1.0) = 32 W. (b) counts only the 12 V source's output. (c) uses ΣIR instead of ΣI²R. (d) puts the full 3.0 A through every resistor, (3.0)²(3.0 + 2.0 + 2.0).

**6. a** — *A negative current means the arrow, not the arithmetic, was wrong.* With V_ab then exceeding 4.0 V, branch 2 carries current from a down to b — into the **+** terminal of the 4.0 V battery, which is therefore being charged by the 12.0 V one. (b) re-solving with the arrow reversed simply returns the same magnitude with a plus sign; the minus sign has already told you everything. (c) confuses a negative value with zero; the branch genuinely carries current. (d) treats the sign as absolute rather than relative to an arrow you were free to draw either way.

**7. a** — *Balanced bridge: the bridging branch may be removed.* 12/6 = 8/4 = 2, so B and D are at the same potential and the galvanometer carries no current. The network is then (12 + 6) in parallel with (8 + 4) = 18 × 12/30 = **7.2 Ω**. (b) is (12 ∥ 6) + (8 ∥ 4) = 4.0 + 2.67, pairing the two arms of the *same* branch as though they were in parallel — they share only one node. (c) puts all four in series. (d) puts all four in parallel. (Shorting B to D instead of cutting the branch also gives 7.2 Ω, since they are at equal potential — a useful cross-check, and the reason a *balanced* bridge is the one case where reduction works.)

**8. a** — *ΣI_in = ΣI_out with an unknown that comes out reversed.* Inflow so far 4.0 + 2.0 = 6.0 A against 9.0 A leaving, so the fourth wire must supply the missing 3.0 A: **3.0 A into the junction**. (b) has the sign the wrong way and would leave 12 A in against 9 A out. (c) adds every quoted current, ignoring direction. (d) balances the 9.0 A against only the first inflow, 9.0 − 4.0.

**9.** *Concept: single loop with opposing emfs — current, terminal p.d.s, and the full power budget.* Only one loop and no junction, so one equation. Walking round in the sense the 20 V battery drives: 20.0 − I(1.0) − I(2.0) − 8.0 − I(1.0) = 0, i.e. **20.0 − 8.0 = I(1.0 + 2.0 + 1.0)**, giving 12.0 = 4.0I and **I = 3.0 A**. Terminal p.d.s: the 20 V battery discharges (current leaves its + terminal), V = ε − Ir = 20.0 − (3.0)(1.0) = **17.0 V**; the 8 V battery is being charged (current enters its + terminal), V = ε + Ir = 8.0 + (3.0)(1.0) = **11.0 V**. **Power budget**: the 20 V emf delivers εI = (20.0)(3.0) = **60.0 W**. Of this, the 8 V emf absorbs εI = (8.0)(3.0) = **24.0 W** as chemical energy, and the resistances dissipate I²ΣR = (9.0)(1.0 + 2.0 + 1.0) = **36.0 W** — 9.0 W in each internal resistance and 18.0 W in the 2.0 Ω. Check: 24.0 + 36.0 = 60.0 W ✔. Note also that the charging battery receives VI = (11.0)(3.0) = 33.0 W at its terminals, of which 24.0 W is stored and 9.0 W wasted in its own r.

**10.** *Concept: setting up and solving a two-loop network, then confirming it by power.* Take I₁ and I₂ up into a, I₃ down through branch 3. **Junction a**: I₁ + I₂ = I₃ (the equation at b is the same statement rearranged). **Loop 1** (up branch 1, down branch 3): 14.0 − 2.0I₁ − 2.0I₃ = 0. **Loop 2** (up branch 2, down branch 3): 12.0 − 4.0I₂ − 2.0I₃ = 0. Substituting I₃ = I₁ + I₂: 4I₁ + 2I₂ = 14.0 and 2I₁ + 6I₂ = 12.0, i.e. 2I₁ + I₂ = 7.0 and I₁ + 3I₂ = 6.0. Eliminating: 5I₂ = 5.0, so **I₂ = 1.0 A**, **I₁ = 3.0 A**, **I₃ = 4.0 A**. Cross-check on V_ab: I₃R₃ = 8.0 V, and 14.0 − (3.0)(2.0) = 8.0 V, 12.0 − (1.0)(4.0) = 8.0 V — one value by every route. **Power balance**: sources ΣεI = (14.0)(3.0) + (12.0)(1.0) = 42.0 + 12.0 = **54.0 W**; resistances ΣI²R = (9.0)(2.0) + (1.0)(4.0) + (16.0)(2.0) = 18.0 + 4.0 + 32.0 = **54.0 W** ✔.

**11.** *Concept: reading a negative current, and confirming it with the power budget.* Equations: I₁ + I₂ = I₃; 18.0 − 3.0I₁ − 6.0I₃ = 0; 6.0 − 2.0I₂ − 6.0I₃ = 0. Substituting I₃ = I₁ + I₂ gives 9I₁ + 6I₂ = 18.0 and 6I₁ + 8I₂ = 6.0, i.e. 3I₁ + 2I₂ = 6.0 and 3I₁ + 4I₂ = 3.0. Subtracting: 2I₂ = −3.0, so **I₂ = −1.5 A**, then **I₁ = 3.0 A** and **I₃ = I₁ + I₂ = 1.5 A**. **What the sign means**: the magnitude 1.5 A is correct; only the assumed arrow was wrong. Branch 2 actually carries **1.5 A from a down to b**, into the **+** terminal of the 6.0 V battery, which is therefore **being charged** by the 18.0 V battery — its terminal p.d. is ε + Ir = 6.0 + (1.5)(2.0) = 9.0 V, which duly equals V_ab = I₃R₃ = (1.5)(6.0) = 9.0 V. You must *not* re-solve with the arrow reversed, and you must carry the minus sign into the junction equation — dropping it would have given I₃ = 4.5 A and wrecked everything downstream. **Power budget**: the 18 V emf delivers (18.0)(3.0) = 54.0 W; the 6 V emf absorbs (6.0)(1.5) = 9.0 W; the resistances dissipate (9.0)(3.0) + (2.25)(2.0) + (2.25)(6.0) = 27.0 + 4.5 + 13.5 = 45.0 W. Check: 9.0 + 45.0 = 54.0 W ✔.

**12.** *Concept: the junction rule and the power balance are independent checks, and only the second tests the loop equations.* The correct answer is I₁ = 3.0, I₂ = 1.0, I₃ = 4.0 A. **First student** (3.0, 1.0, 5.0): the **junction rule** fails at once, since 3.0 + 1.0 ≠ 5.0 — so the slip is in the substitution or the final arithmetic, not in the loop set-up, and it is caught in one line. **Second student** (4.0, 1.0, 5.0): the junction rule is **satisfied**, 4.0 + 1.0 = 5.0, so that check passes an answer that is nevertheless wrong. Test the loop equations instead: 14.0 − 2.0(4.0) − 2.0(5.0) = −4.0 ≠ 0. The power balance catches it just as surely: sources give (14.0)(4.0) + (12.0)(1.0) = 68.0 W while the resistances demand (16.0)(2.0) + (1.0)(4.0) + (25.0)(2.0) = 86.0 W — an 18 W discrepancy, which is impossible. **Why the junction rule is not sufficient**: it constrains only how the currents divide, and infinitely many sets of currents divide correctly; it says nothing about the *magnitudes*, which are fixed by the emfs and resistances through the loop equations. The power balance, by contrast, uses every emf and every resistance, so it tests the loop equations and the junction equation together — which is why it is the check worth doing at the end of every network problem.
