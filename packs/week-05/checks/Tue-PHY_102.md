# Tuesday — PHY_102 nightly check

*Kirchhoff's two rules as concepts: junctions and loops, the conservation principle behind each rule, the sign conventions for traversing a source and a resistor, and how the equations for a network are set up and counted.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** A wire turns a right angle at point c, and nothing else is attached there. Point c is not a junction because:
a) only two conductors meet, so the junction equation there reduces to I = I
b) the potential is the same on either side of a bend, so no equation is possible
c) a bend has negligible resistance and therefore cannot alter the current
d) junctions exist only where a resistor or a source is attached to the wire

**2.** The junction rule ΣI_in = ΣI_out is a statement that:
a) charge does not pile up at a junction, because charge is conserved and the current steady
b) energy is conserved, because charge crossing a junction loses none of its energy
c) every point of a junction is at the same potential, so the currents must match
d) a junction has negligible resistance, so no current is lost in crossing it

**3.** The loop rule ΣV = 0 holds around every closed loop because:
a) the current is the same at every point of a loop, so the potentials must cancel
b) potential is single-valued, so returning to a point returns you to its potential
c) each loop contains a source whose emf is matched by the drops around it
d) the resistances round a loop are in series, and series resistances always add

**4.** Walking clockwise round a loop you meet, in order: a battery entered at its **−** terminal (emf ε₁); a resistor R₁ whose current arrow points clockwise; a battery entered at its **+** terminal (emf ε₂); a resistor R₂ whose current arrow points **anti**clockwise. The loop equation is:
a) ε₁ − IR₁ − ε₂ + IR₂ = 0
b) ε₁ − IR₁ + ε₂ − IR₂ = 0
c) ε₁ + IR₁ − ε₂ − IR₂ = 0
d) ε₁ − IR₁ − ε₂ − IR₂ = 0

**5.** On a finished diagram the current arrow in one branch is reversed, nothing else is altered, and the loop equations are rewritten. Compared with the originals:
a) the emf terms keep their signs; only that branch's IR terms change sign
b) both the emf terms and the IR terms of that branch change sign
c) only the emf term changes sign, the battery now opposing the current
d) nothing changes, since an arrow is only a guess until the currents are found

**6.** A network has 6 branches, carrying 6 unknown currents, and 4 junctions. The independent junction and loop equations number:
a) 3 and 3
b) 4 and 2
c) 3 and 4
d) 4 and 3

**7.** Having written loop equations for the left and the right mesh of a two-loop network, a student writes a third for the outer perimeter. That equation:
a) is the sum of the first two, so a junction equation is still needed
b) is a third independent equation, so the junction rule is not needed at all
c) is invalid, because the perimeter omits the branch shared by the two meshes
d) contradicts the other two unless every loop is walked in the same sense

**8.** The junction rule is stated for steady currents. It would fail at a junction where:
a) one branch runs to a capacitor plate while the capacitor is charging
b) the branches meeting there have very unequal resistances
c) one of the branches meeting there happens to carry no current
d) four conductors rather than three happen to meet at the point

**9. (explain why)** Explain how conservation of charge produces the junction equation, and how conservation of energy produces the loop equation. In each case, say what would have to be true of a circuit for that rule to fail.

**10. (explain why)** Between nodes a and b there are three branches: a battery ε₁ with internal resistance r₁; a battery ε₂ with internal resistance r₂; and a resistor R. **Set up, without solving**, the full set of equations. State how many junction equations and how many loop equations are independent, and explain why the second junction equation is not one of them.

**11. (explain why)** One student walks a loop clockwise, another walks the same loop anticlockwise using the same current arrows. Explain the relationship between the two equations they obtain, whether either direction is the "correct" one, and what genuinely must be kept consistent between equations.

**12. (explain why)** Explain why the series and parallel formulas cannot finish a bridge circuit, identifying the exact topological feature that defeats each formula, and say what has to be true of the arm resistances before series/parallel reduction becomes legitimate again.

---

## Answers

**1. a** — *A junction needs three or more conductors; with two, the rule is empty.* Every charge arriving at a bend has exactly one way out, so ΣI_in = ΣI_out becomes I = I and contributes no equation — which is why the lecture figure calls a and b junctions but not c and d. (b) is true but irrelevant: the junction rule is about current, not potential, and a genuine junction is also a single potential. (c) treats the rule as an approximation about ideal wire; the rule holds at a resistive junction too. (d) invents a component-based definition — three wires meeting in mid-air is a junction.

**2. a** — *Junction rule = conservation of charge in the steady state.* A point has no capacity to store charge, so the inflow per second must equal the outflow per second. (b) swaps the two rules: energy conservation is the **loop** rule. (c) states a true fact about a node's potential and then misuses it as the reason for a statement about currents. (d) mistakes the rule for a claim about lossless wires; it would hold even if the junction dissipated energy.

**3. b** — *Loop rule = conservation of energy, via the single-valuedness of potential.* Return to your starting point and you are at the same potential, so the algebraic sum of every rise and fall is zero; per coulomb, what the sources hand out is what the resistances take back. (a) borrows the constant-current property of a **series branch** and applies it to potentials. (c) is false: the rule applies to a loop containing no source whatever, where the drops simply cancel among themselves. (d) confuses a method of adding resistances with the reason the rule is true.

**4. a** — *The two sign rules are independent decisions.* − to + gives **+ε₁**; walking **with** R₁'s arrow gives **−IR₁**; entering the second battery at its **+** terminal gives **−ε₂**; walking **against** R₂'s arrow gives **+IR₂**. (b) lets the current arrow decide the battery signs — the commonest error; a battery's terminals are physically fixed, so its potential step cannot depend on a guess. (c) has the resistor rule exactly backwards (with the arrow = fall, against = rise). (d) is "a resistor always gives −IR", applied to R₂ without looking at its arrow.

**5. a** — *The emf sign reads terminals; the IR sign reads the arrow.* Reversing an arrow reverses only what "with the current" and "against the current" mean, so only that branch's IR terms flip; the battery's terminals have not moved. (b) makes the battery's sign follow the current. (c) makes the same mistake in the opposite direction, and additionally imagines a battery "opposing" the current changes its emf term rather than the sign of the answer. (d) mistakes the arbitrariness of the *choice* for irrelevance of the *bookkeeping*: once drawn, the arrow governs every IR term written.

**6. a** — *n − 1 junction equations and b − n + 1 loop equations, totalling b.* Here 4 − 1 = 3 and 6 − 4 + 1 = 3, giving 6 equations for 6 unknowns. (b) uses all four junction equations — but the fourth is the sum of the other three — and then under-counts loops. (c) and (d) both produce 7 equations for 6 unknowns, an over-determined set that will appear to contradict itself the moment a sign is slipped.

**7. a** — *A loop that is a combination of loops already used carries no new information.* Walk the perimeter and the shared middle branch is traversed once in each mesh equation with opposite signs, so it cancels: the perimeter equation is exactly (left mesh) + (right mesh). Three unknowns still need a third equation, and it must come from the junction rule. (b) is the trap this question is built on. (c) is false — the perimeter is a perfectly valid closed conducting path; it is redundant, not invalid. (d) confuses a redundancy with an inconsistency; sense of travel only multiplies an equation by −1.

**8. a** — *The rule assumes charge cannot accumulate; a charging capacitor is exactly where it does.* While the plate is charging, more charge arrives along that branch than leaves it, so ΣI_in ≠ ΣI_out at the junction feeding it. (b) is irrelevant: unequal resistances change how the current *divides*, never the total. (c) is a legitimate case — a zero current is simply a zero term. (d) confuses the number of conductors with the validity of the rule, which holds for any number from three upward.

**9.** *Concept: each rule is one conservation law written for a circuit.* **Charge → junction rule.** Charge is neither created nor destroyed, and a junction is a geometrical point with no capacity to store it. In a steady current the charge in any small region around the junction is constant in time, so the rate at which charge arrives must equal the rate at which it leaves: ΣI_in = ΣI_out, or ΣI = 0 with a sign convention. **Energy → loop rule.** In an electrostatic field the potential V is a single-valued function of position, so moving a charge round any closed path and back to the start returns it to the same potential; the algebraic sum of the potential changes is therefore zero. Per coulomb this says the energy the sources supply (the emfs) is exactly the energy the resistances remove (the IR terms): Σε = ΣIR. **Failure conditions.** The junction rule fails whenever charge really can accumulate at or beyond the junction — the classic case being a branch running to a capacitor plate during charging, where the current is not steady. The loop rule fails whenever the electric field is not conservative, i.e. when a changing magnetic flux links the loop and induces an emf that is not localised in any component; potential is then no longer single-valued and Σε = ΣIR must be replaced by Faraday's law.

**10.** *Concept: setting up and counting the equations before any algebra.* Draw an arrow in each of the three branches — say I₁ and I₂ flow **up into a** through the two battery branches and I₃ flows **down from a to b** through R. **Junction equations**: there are n = 2 junctions (a and b), so **n − 1 = 1** is independent — at a, I₁ + I₂ = I₃. **Loop equations**: b − n + 1 = 3 − 2 + 1 = **2**. Loop 1 (up branch 1, down branch 3, starting at b): +ε₁ − I₁r₁ − I₃R = 0. Loop 2 (up branch 2, down branch 3): +ε₂ − I₂r₂ − I₃R = 0. That is three equations for the three unknown currents — no more are needed and no more may be used. **Why the second junction equation is not independent**: junction b gives I₃ = I₁ + I₂, which is the equation at a rearranged. Every current that enters a must leave b, so the two statements carry the same content; in general the n junction equations sum identically to 0 = 0, so exactly one is always redundant.

**11.** *Concept: the sense of travel is arbitrary; the arrows are not.* Every term the second student writes is the negative of the corresponding term of the first — a source entered at − going clockwise is entered at + going anticlockwise, and a resistor walked with the arrow one way is walked against it the other. So the second equation is the first multiplied by −1: the same equation, and it yields identical currents. **Neither direction is "correct"**, and in particular there is no requirement to walk in the direction of the current — walking against it is often easier to keep straight. What must be kept consistent is (i) the **current arrows**, which are fixed once drawn and govern every IR sign in every equation, and (ii) walking each individual loop in one unbroken sense from a marked starting point, rather than changing direction part-way round.

**12.** *Concept: series and parallel are topological claims, and a bridge satisfies neither.* Two resistors are in **series** only if the whole of the current through one passes through the other, i.e. the point between them is a two-conductor point. In a bridge, the point between an upper and a lower arm is where the bridging resistor is attached — three conductors meet, current splits off there, so those two arms are **not** in series. Two resistors are in **parallel** only if they share **both** ends, so that the same potential difference stands across each. In a bridge, the two upper arms share the supply node but their other ends are different nodes joined only through the bridge, so they are **not** in parallel. Every pair fails one test or the other, the reduction stalls at the first step, and Kirchhoff's rules — three unknown branch currents and three independent loops — are the only route. Reduction becomes legitimate again exactly when the bridge is **balanced**, R_ab/R_bd = R_ac/R_cd: the two mid-points are then at the same potential, no current flows in the bridging branch, that branch may be removed, and the network collapses into two series pairs in parallel.
