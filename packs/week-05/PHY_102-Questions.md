# PHY_102 — Week 5 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 6, not this week. Notes closed. Topic: Circuit Analysis — Resistors in Series and Parallel, and Kirchhoff's Rules.*

## Section A — Multiple choice (12)

**1.** In a circuit, a wire leaves the battery, turns a right angle at point c, then splits at point b into two parallel branches which rejoin at point a. The junctions are:
A. b and a only
B. b, a and c
C. c only
D. b only, since a is where branches end rather than begin

**2.** Kirchhoff's junction rule, ΣI_in = ΣI_out, is a direct statement of:
A. conservation of energy, since charge loses no energy in crossing a junction
B. conservation of charge, since charge cannot accumulate at a point in a steady current
C. Ohm's law, since the junction itself has negligible resistance
D. conservation of momentum for the drifting charge carriers

**3.** Kirchhoff's loop rule, ΣV = 0, holds around **any** closed loop because:
A. the current is the same at every point of a loop, so the voltages must cancel
B. every loop must contain at least one source, whose emf balances the drops
C. potential is single-valued, so a charge returning to its starting point returns to the same potential
D. the resistances in a loop are in series, and series resistances always add

**4.** You traverse a source of emf ε from its **+** terminal to its **−** terminal. The term entered in the loop equation is:
A. −ε, because the terminals you pass through are what set the sign
B. +ε, because a source always raises the potential of the charge passing through it
C. −ε only if the assumed current in that branch points the same way as your travel
D. zero, because the emf cancels against the drop across the internal resistance

**5.** You traverse a resistor R **opposite** to the assumed current I. The term entered is:
A. −IR, because a resistor always represents a fall in potential
B. +IR, because moving against the current takes you from low to high potential
C. −IR, because the assumed current direction is what decides the sign
D. +IR, but only when the branch also contains a source of emf

**6.** A network has 5 branches (5 unknown currents) and 3 junctions. The numbers of independent junction and loop equations available are:
A. 3 and 2
B. 2 and 3
C. 3 and 3
D. 2 and 2

**7.** A 12.0 V battery (r = 1.0 Ω) and a 6.0 V battery (r = 1.0 Ω) are joined in one loop **in opposition**, in series with a 4.0 Ω resistor. The current is:
A. 1.00 A
B. 3.00 A
C. 1.50 A
D. 4.50 A

**8.** In that same circuit, the terminal potential difference of the 6.0 V battery is:
A. 7.00 V
B. 5.00 V
C. 6.00 V
D. 11.0 V

**9.** Between nodes a and b, branch 1 is a 10.0 V battery in series with 2.0 Ω, branch 2 is a 6.0 V battery in series with 2.0 Ω (both **+** terminals towards a), and branch 3 is a 1.0 Ω resistor. The current in the 1.0 Ω resistor is:
A. 4.00 A
B. 3.33 A
C. 2.00 A
D. 5.33 A

**10.** Solving a network, a student obtains I₂ = −2.0 A for a branch. The correct reading is:
A. the branch carries 2.0 A in the direction opposite to the assumed arrow
B. the arrows must be redrawn and the whole system solved again from the start
C. a sign slip has occurred, because a physical current cannot be negative
D. the branch carries no current, the sign being an artefact of the loop chosen

**11.** For the circuit of question 9, the total power dissipated in the three resistances is:
A. 36.0 W
B. 24.0 W
C. 16.0 W
D. 64.0 W

**12.** In a bridge network with the source across a and d, arms a–b, b–d, a–c, c–d and a bridging resistor b–c, the current in the bridging branch is zero when:
A. R_ab/R_bd = R_ac/R_cd
B. R_ab × R_bd = R_ac × R_cd
C. all four arm resistances are equal, and only then
D. R_ab + R_bd = R_ac + R_cd

## Section B — Short answer (3)

**13.** State Kirchhoff's junction rule and loop rule precisely, name the conservation principle each expresses, and explain why a point where a wire simply bends, or where two wires join end to end, is not a junction.

**14.** State the two sign conventions used when travelling round a loop — one for a source of emf, one for a resistor. Explain, using a specific traversal, why the sign of the emf term does not depend on the assumed current direction while the sign of the IR term does. Then say what it means when a current comes out negative, and what you must **not** do about it.

**15.** Between nodes a and b, branch 1 contains a 10.0 V battery in series with 1.0 Ω, branch 2 contains a 12.0 V battery in series with 3.0 Ω (both **+** terminals towards a), and branch 3 contains a 1.0 Ω resistor. Find all three currents, and verify your answer by a power balance.

## Answers

**1. A** — *Definition of a junction.* A junction is a point where **three or more** conductors meet; b (where the branches split) and a (where they rejoin) qualify. B counts the corner c, but only two conductors meet there and the current is unchanged through it. C inverts the definition entirely. D forgets that a rejoining point is as much a junction as a splitting one.

**2. B** — *Junction rule and conservation of charge.* A junction stores no charge, so in the steady state the inflow per second equals the outflow per second. A swaps the two rules — energy conservation is the **loop** rule. C mistakes the rule for an idealisation about wire resistance; it holds for any junction, however resistive. D imports a mechanical conservation law that plays no part here.

**3. C** — *Loop rule and conservation of energy.* Potential is a single-valued function of position, so returning to the starting point returns you to the same potential and the algebraic sum of the changes is zero; per coulomb, energy supplied = energy dissipated. A confuses the constant-current property of a **series** branch with the loop rule. B is false — the rule applies to a loop containing no source at all. D confuses a computational shortcut with the underlying principle.

**4. A** — *emf sign convention.* Travelling + → − is a fall, so the term is −ε; travelling − → + it is +ε. The rule reads the **terminals**, never the current. B asserts a rise regardless of direction of travel. C is the classic error of letting the current arrow decide a battery's sign. D confuses the emf term with the terminal p.d.

**5. B** — *Resistor sign convention.* Current flows from high to low potential through a resistor, so walking against the current takes you uphill: **+IR**. A is the "a resistor always drops" error. C states the rule backwards. D invents a condition; the rule is unconditional.

**6. B** — *Counting independent equations.* n − 1 = 2 independent junction equations and b − n + 1 = 5 − 3 + 1 = 3 independent loop equations, totalling 5 — exactly the number of unknown currents. A uses all n junctions (the third is the sum of the other two) and then under-counts loops. C over-counts to 6 equations. D leaves the system under-determined.

**7. A** — *Single loop with opposing emfs.* Opposing emfs **subtract**, all resistances (internal ones included) **add**: I = (12.0 − 6.0)/(1.0 + 1.0 + 4.0) = 6.0/6.0 = 1.00 A. B adds the emfs instead of subtracting them (18/6). C ignores the two internal resistances (6.0/4.0). D ignores the second battery altogether and its resistance.

**8. A** — *Terminal p.d. of a battery being charged.* The current is driven backwards through the 6.0 V cell, entering its **+** terminal, so V = ε + Ir = 6.0 + (1.00)(1.0) = 7.00 V. B applies the discharging formula ε − Ir. C assumes terminal p.d. always equals emf, true only at zero current. D is the terminal p.d. of the *other* battery misassigned (12.0 − 1.0 = 11.0 V).

**9. A** — *Two-loop network.* With I₁, I₂ up into a and I₃ down through the 1.0 Ω: I₁ + I₂ = I₃, 10.0 − 2I₁ − I₃ = 0 and 6.0 − 2I₂ − I₃ = 0. Eliminating gives I₁ = 3.00 A, I₂ = 1.00 A, **I₃ = 4.00 A** (and V_ab = 4.0 V, consistent by both branches). B treats branch 1 alone (10.0/3.0). C treats branch 2 alone (6.0/3.0). D adds those two independent answers, which double-counts the shared resistor.

**10. A** — *Interpreting a negative current.* The magnitude is right; only the assumed arrow was backwards. B wastes time — re-solving with reversed arrows returns the same magnitude with a plus sign and no new information. C misunderstands that the sign is relative to an arbitrary chosen arrow, not an absolute physical quantity. D confuses "negative" with "zero"; the branch genuinely carries 2.0 A.

**11. A** — *Power balance.* ΣI²R = (3.00)²(2.0) + (1.00)²(2.0) + (4.00)²(1.0) = 18.0 + 2.0 + 16.0 = 36.0 W, which equals ΣεI = (10.0)(3.00) + (6.0)(1.00) = 36.0 W. B counts only the larger source's contribution. C uses ΣIR instead of ΣI²R for the total. D applies the total current 4.00 A to every resistor.

**12. A** — *Wheatstone balance condition.* The bridge current vanishes when b and c sit at the same potential, which requires the two arms to divide the supply in the same **ratio**: R_ab/R_bd = R_ac/R_cd. B replaces the ratio condition with a product (this is the cross-product form only if written R_ab R_cd = R_ac R_bd — as stated it pairs the wrong resistors). C mistakes one special case for the general condition. D treats a potential divider as an additive rather than a proportional device.

**13.** *The two rules and the definition of a junction.* **Junction rule**: at any junction the algebraic sum of the currents is zero — the total current entering equals the total current leaving (ΣI_in = ΣI_out). It expresses **conservation of charge**: charge is neither created nor destroyed, and in a steady current it cannot accumulate at a point, since a junction has no capacity to store it. **Loop rule**: around any closed loop the algebraic sum of the potential differences — the emfs and the IR terms taken with their signs — is zero (ΣV = 0, i.e. Σε = ΣIR). It expresses **conservation of energy**: electric potential is a single-valued function of position, so a charge carried right round a loop comes back to the same potential, having given up exactly the energy the sources handed it. A **junction requires three or more conductors to meet**. Where a wire merely bends, or two wires join end to end, only two conductors meet: every charge arriving must leave along the one available path, so the junction equation reduces to I = I and yields nothing. In the lecture figure this is exactly why a and b are junctions while c and d are not.

**14.** *Sign conventions, and reading a negative current.* **Source**: travelling through it from **− to +** the emf enters as **+ε**; from **+ to −** it enters as **−ε**. **Resistor**: travelling **with** the assumed current arrow the term is **−IR** (the current runs from high to low potential, so you descend); travelling **against** the arrow it is **+IR** (you climb). Example: walk clockwise round a loop and meet a battery whose + terminal you reach first. You write **−ε**, and it makes no difference whatever whether the branch's current arrow points clockwise or anticlockwise — a battery's terminals are physically fixed, so its potential step is fixed. The IR term is different because I is not a fixed physical thing but a *label attached to an arrow you drew*; the term −IR encodes "the potential falls in the direction of that arrow", so which way you walk relative to the arrow is precisely what sets its sign. A **negative** result for a current means only that the arrow was drawn the wrong way round: the magnitude is correct and the branch carries that current in the opposite sense. You must **not** re-solve the system with the arrow reversed (it returns the same number with the sign flipped), and you must **not** drop the minus sign — it has to be carried, with its sign, into the junction equation and into every subsequent substitution.

**15.** *Two-loop network with a power-balance check.* Take I₁ (branch 1) and I₂ (branch 2) flowing **up into a**, and I₃ flowing **down through the 1.0 Ω** from a to b. Junction a: I₁ + I₂ = I₃. Loop 1: 10.0 − 1.0I₁ − 1.0I₃ = 0. Loop 2: 12.0 − 3.0I₂ − 1.0I₃ = 0. Substituting I₃ = I₁ + I₂: 2I₁ + I₂ = 10.0 and I₁ + 4I₂ = 12.0. Multiplying the second by 2 and subtracting: 7I₂ = 14.0, so **I₂ = 2.00 A**, **I₁ = 4.00 A**, **I₃ = 6.00 A**. Check V_ab = I₃R₃ = 6.0 V, and from each branch 10.0 − (4.00)(1.0) = 6.0 V and 12.0 − (2.00)(3.0) = 6.0 V — one value by every route. **Power balance**: delivered by the sources, ΣεI = (10.0)(4.00) + (12.0)(2.00) = 40.0 + 24.0 = 64.0 W; dissipated, ΣI²R = (16.0)(1.0) + (4.00)(3.0) + (36.0)(1.0) = 16.0 + 12.0 + 36.0 = 64.0 W. The two agree, so the solution is consistent.
