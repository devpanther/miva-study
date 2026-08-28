# PHY_102 — Week 4 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 5, not this week. Notes closed. Topic: Analysis of DC Circuits & Electric Dipoles.*

## Multiple choice

**1.** An **ideal voltage source** is best described as an energy source that:
A. delivers a constant current to the load regardless of the voltage developed across it
B. delivers a constant voltage across the load regardless of the current drawn by the load
C. delivers constant power to the load, so that voltage and current vary inversely
D. maintains a constant voltage only while the current drawn stays below the value set by its internal resistance

**2.** A **real current source** is modelled, and an ideal one idealised, as follows:
A. real = ideal current source in parallel with an internal resistance; ideal = infinite internal resistance
B. real = ideal current source in series with an internal resistance; ideal = zero internal resistance
C. real = ideal current source in parallel with an internal resistance; ideal = zero internal resistance
D. real = ideal current source in series with an internal resistance; ideal = infinite internal resistance

**3.** When sources are "zeroed" for a superposition calculation:
A. a dead voltage source becomes an open circuit and a zeroed current source becomes a short circuit
B. both become open circuits, since a zeroed source contributes nothing to the network
C. a dead voltage source behaves as a short circuit and a zeroed current source may be replaced by an open circuit
D. both become short circuits, since a zeroed source has no potential difference across its terminals

**4.** The method of superposition states that:
A. the current in any branch equals the sum of the currents supplied by all the sources in the circuit
B. the power dissipated in any branch equals the sum of the powers produced in that branch by each source acting alone
C. the current in any branch equals the average of the currents produced by each source acting alone
D. the current in any branch equals the sum of the currents produced in that branch by each individual independent source with all the others zeroed

**5.** The Thévenin and Norton theorems:
A. prove that any circuit can be reduced to a single resistor, and apply to all circuits without exception
B. let a network be expressed in terms of equivalent sources and resistors, are stated without proof, and apply only to networks of linear elements
C. apply only when the internal structure of the circuit is unknown, and are useless once the circuit diagram is available
D. let a network be replaced by an equivalent source and resistor, and apply to any network provided all the sources are direct-current sources

**6.** In nodal analysis (the method of node voltages):
A. KVL is applied to each node, and the reference node must be the one at the highest potential
B. both KCL and KVL must be applied at every node, which is why the method needs more equations than the loop method
C. only KCL is applied; a reference node is chosen and set to zero, the remaining node voltages are assigned relative to it, and the resulting simultaneous equations are solved
D. only KCL is applied, but the reference node is fixed by the circuit and cannot be chosen freely

**7.** A source loaded into its non-ideal region gives a terminal voltage of 9.4 V at 1.0 A and 8.8 V at 3.0 A. Its emf and internal resistance are:
A. ε = 9.7 V, r = 0.30 Ω  B. ε = 9.4 V, r = 0.30 Ω  C. ε = 9.7 V, r = 3.3 Ω  D. ε = 9.1 V, r = 0.30 Ω

**8.** An electric dipole is:
A. a single charge held at a fixed distance from an earthed plate, the dipole moment pointing away from the plate
B. a pair of equal and opposite charges separated by a small distance, with a moment directed from −q to +q in physics and from +q to −q in chemistry
C. a pair of equal and opposite charges separated by a small distance, with a moment always directed from +q to −q in every discipline
D. any pair of charges of unequal magnitude, the moment pointing from the smaller towards the larger charge

**9.** Charges of +5.0 nC and −5.0 nC are held 2.0 mm apart. The magnitude of the dipole moment, its unit and its dimensional formula are:
A. 2.5×10⁻⁶ C/m, coulomb per metre, [M⁰L⁻¹T¹I¹]
B. 2.0×10⁻¹¹ C·m, coulomb-metre, [M⁰L¹T¹I¹]
C. 1.0×10⁻⁸ C·m, coulomb-metre, [M⁰L²T¹I¹]
D. 1.0×10⁻¹¹ C·m, coulomb-metre, [M⁰L¹T¹I¹]

**10.** The potential at a point a distance r from the centre of a dipole, on a line making an angle θ with the dipole axis, is V = (1/4πε₀)(p cos θ)/r². It follows that:
A. V is greatest at θ = 90° and zero at θ = 0°
B. V is greatest at θ = 0°, where V = (1/4πε₀)p/r², and zero at θ = 90°
C. V falls off as 1/r, exactly as it does for a single point charge
D. V is zero at θ = 90°, and therefore the electric field is zero everywhere on that plane too

**11.** The electric field at a point on the perpendicular bisector of a dipole is directed:
A. along the dipole moment
B. perpendicular to the dipole moment
C. opposite to the dipole moment
D. at 45° to the dipole moment

**12.** A permanent dipole of moment p is placed in a uniform external field E at an angle θ. Then:
A. the net force is zero and the torque is pE sin θ, which turns p into alignment with E
B. the net force is zero and the torque is zero, since the forces on the two charges cancel exactly
C. the net force is 2qE along the field and the torque is pE cos θ
D. the net force is zero and the torque is pE sin θ, but only if the dipole is free to move towards the stronger part of the field

## Short answer

**13.** State the rules for zeroing an independent voltage source and an independent current source in a superposition calculation, explain physically why each rule is what it is, and say in what sense the lesson calls the two cases "complementary". Then state the superposition principle for currents and for node voltages, and name the class of circuit elements to which it (and Thévenin/Norton) is restricted.

**14.** Define the electric dipole and its moment, giving the magnitude, the direction, the SI unit and the dimensional formula. Write the expression for the potential due to a dipole and evaluate it at θ = 0° and θ = 90°. Explain why the potential vanishes on the equatorial plane while the electric field there does not, and state the direction of that field. Finish by explaining, in terms of dipole moment, the difference between a polar and a non-polar molecule, with one example of each.

**15.** A 12 V source in series with 2 Ω and a 6 V source in series with 3 Ω both feed a common top node; a 6 Ω load runs from that node to the common rail. Find the load current (a) by superposition and (b) by reducing the rest of the circuit to its Thévenin equivalent, giving V_Th and R_Th. State the Norton equivalent, and find the power dissipated in the load. Show your working.

## Answers

**1. B** — *An ideal voltage source holds its voltage whatever current is drawn.* That is the definition given in the lesson; it requires zero internal resistance in series, since any internal drop Ir would make the terminal voltage depend on I. A defines the ideal *current* source. C describes a constant-power source, which is neither. D is the description of a **real** source — the point of the *ideal* one is that no such limit exists.

**2. A** — *Real current source = ideal current source in parallel with r; ideal current source has r = ∞.* The parallel model is what makes the delivered current fall as the load voltage rises, since more current is then diverted through r; an infinite r diverts none, which is exactly the ideal case. B and D put r in series, which is the **voltage**-source model. C has the right topology but the wrong ideal limit: a zero parallel resistance would short the source's output entirely.

**3. C** — *Dead voltage source → short circuit; zeroed current source → open circuit.* With a dead voltage source both of its sides are at the same potential, so it behaves as if shorted by a connecting wire; a current source with zero output carries no current, which is exactly an open circuit. A is the inversion — the single most damaging error in superposition, since it removes conducting paths that exist and creates ones that do not. B treats "zeroing" as "deleting" and forgets the wire the dead voltage source leaves behind. D applies the voltage-source rule to both: a zeroed current source does not have zero volts across it, it has zero current through it.

**4. D** — *Superposition, stated exactly.* The lesson gives it in two halves: the current in any branch is the sum of the currents produced in that branch by each individual independent source with all the others zeroed, and the voltage at any node is the sum of the voltages produced there by each source alone. A adds the sources' *output* currents rather than their separate contributions **to that branch**. B is the classic trap: power is quadratic in current, so powers never superpose — add the currents first, then square. C invents an averaging that has no basis.

**5. B** — *Equivalent sources and resistors, stated without proof, for linear networks only.* The theorems let a "black box" be represented by an equivalent source plus a resistor (V_Th in series with R_Th, or I_N in parallel with R_N), and the lesson stresses both that they are statements given without proof and that they apply **only to networks of linear elements** such as voltage sources and resistors. A overreaches wildly and drops the linearity condition. C contradicts the lesson, which says explicitly that the theorems are useful even when the diagram *is* known, as one more way of reducing complexity. D swaps the real restriction (linearity) for a false one (direct current) — a network of diodes on DC is still outside the theorems.

**6. C** — *Nodal analysis: the four-step recipe, using only KCL.* Choose a reference node and set it to zero (usually the one connected to the negative side of the voltage source), assign V₁, V₂, … to the others, apply **KCL** at each, and solve the simultaneous equations. KVL is not needed, because giving each node a single potential makes every loop sum telescope to zero automatically. A swaps the law and invents a rule about the highest potential. B doubles the work with an equation set that is not independent. D is right about KCL but wrong about the reference: the lesson calls the choice **arbitrary**, and only *usually* best taken at the negative terminal.

**7. A** — *V = ε − Ir is a straight line, so r = −(slope) and ε is the intercept at I = 0.* Slope = (8.8 − 9.4)/(3.0 − 1.0) = −0.60/2.0 = −0.30 V/A → r = 0.30 Ω; ε = V + Ir = 9.4 + (1.0)(0.30) = 9.7 V (check: 8.8 + 3.0 × 0.30 = 9.7 V ✓). B takes the largest measured terminal voltage as the emf, but 9.4 V was already measured with 1.0 A flowing. C uses the "negative reciprocal of the slope" (1/0.30 = 3.3 Ω) — a phrasing that belongs to the reversed I-against-V plot; on a V-against-I plot the gradient is −r itself. D averages the two terminal voltages, interpolating instead of extrapolating to I = 0.

**8. B** — *Definition of a dipole and the two conventions for the direction of p.* A dipole is a pair of equal and opposite charges +q and −q separated by a small distance d; p = qd points **from −q to +q in physics**, and the opposite way in chemistry. A describes an induced image-charge arrangement, not a dipole. C states the chemistry convention as universal. D drops the defining requirement that the charges be equal in magnitude, without which the moment is not origin-independent.

**9. D** — *p = qd, unit C·m, dimension [M⁰L¹T¹I¹].* p = (5.0×10⁻⁹)(2.0×10⁻³) = 1.0×10⁻¹¹ C·m, and since charge = current × time = [I¹T¹] and distance = [L¹], the dimension is [M⁰L¹T¹I¹]. A divides charge by distance instead of multiplying. B uses 2qd, double-counting the second charge — the magnitude is *either* charge times the **full** separation (when the separation is written 2a, the 2 is already inside d). C leaves the separation in millimetres, a factor of 10³.

**10. B** — *V = (1/4πε₀)(p cos θ)/r²: maximum on the axis, zero on the equatorial plane, falling as 1/r².* At θ = 0°, cos θ = 1 and V = (1/4πε₀)p/r²; at θ = 90°, cos θ = 0 and V = 0 at every distance. A inverts the angular dependence. C confuses the dipole's 1/r² potential with the 1/r of a point charge — the faster fall-off is the signature of the cancelling pair. D draws the wrong conclusion from V = 0: potential is a **scalar** sum and cancels there, but the field is a **vector** sum and is non-zero on that plane.

**11. C** — *On the perpendicular bisector the axis-perpendicular components cancel and the resultant is antiparallel to p.* At a point equidistant from the two charges the fields E₊q and E₋q are equal in magnitude; resolving them, the components perpendicular to the dipole axis cancel and the components along the axis add, giving a resultant directed **opposite to the dipole moment** (that is, from +q back towards −q). A gives the direction on the *axial* line, not the equatorial one. B would require the two contributions to be at right angles, which they are not. D has no basis in the geometry — the cancellation is exact, not partial.

**12. A** — *Uniform field: zero net force, torque τ = p × E of magnitude pE sin θ, driving alignment.* The forces +qE and −qE cancel as vectors, but they act at different points, so they form a couple of moment qE × 2a sin θ = pE sin θ, whose value is independent of the origin precisely because the net force is zero. The torque falls to zero when p is aligned with E — which is why polar molecules line up with an applied field. B is the common half-truth: cancelling forces at *different points of application* still give a couple. C invents a net force in a uniform field (a net force appears only if E is **non-uniform**) and swaps sin for cos. D attaches a spurious condition — the torque exists whether or not the dipole is free to translate; translation matters only in a non-uniform field, where a net force also appears.

**13.** *Zeroing rules, their physical basis, and the linearity restriction.* A **zeroed independent voltage source is replaced by a short circuit** — a plain connecting wire. Physically, setting its emf to zero forces both of its terminals to the same potential, and the element that guarantees zero potential difference is a wire; the lesson puts it as "the source behaves electrically as if it were shorted by a connecting wire". A **zeroed independent current source is replaced by an open circuit**: setting its output to zero forces zero current through that branch, and the element that guarantees zero current is a break. The two are **complementary** in that each is defined by the quantity it holds fixed — a voltage source is zeroed by imposing zero volts (short), a current source by imposing zero amps (open) — so the replacements are duals of one another, exactly as the ideal internal resistances are duals (r = 0 in series against r = ∞ in parallel). The principle itself: **the current in any branch of a circuit equals the sum of the currents produced in that branch by each individual independent source acting alone with all the others zeroed, and the voltage at any node equals the sum of the voltages produced at that node in the same way.** It applies — as do the Thévenin and Norton theorems — **only to networks of linear elements**, that is, voltage sources and resistors. Note also that only currents and voltages superpose, never powers, since P = I²R is quadratic.

**14.** *The dipole, its moment, its potential, and polar vs non-polar molecules.* An **electric dipole** is a pair of equal and opposite charges, +q and −q, separated by a small distance d; the midpoint of the two charges is the **centre** of the dipole and the line joining them is its **axis**. The **dipole moment** is a vector of magnitude **|p| = qd** — either charge multiplied by the separation — directed **from −q to +q** in the physics convention (chemistry takes the reverse). Its SI unit is the **coulomb-metre (C·m)** and its dimensional formula is **[M⁰L¹T¹I¹]**. The **potential** at a point a distance r from the centre, on a line at angle θ to the axis, is **V = (1/4πε₀)·(p cos θ)/r²**. At **θ = 0°**, cos θ = 1, so V = (1/4πε₀)p/r² — the maximum, on the axis. At **θ = 90°**, cos θ = 0, so **V = 0** at every distance on the equatorial plane. The field does not vanish there because **potential is a scalar and field is a vector**: on the perpendicular bisector every point is equidistant from the two charges, so the two scalar contributions +q/r and −q/r cancel exactly, but the two field vectors are not opposite — resolving them, the components perpendicular to the axis cancel while the components along the axis reinforce, leaving a resultant field **antiparallel to p** (pointing from +q back towards −q). Finally, a **polar molecule** is one with a net (permanent) dipole moment, because the centres of positive and negative charge do **not** coincide — HCl or NaOH, for example — and such molecules **align themselves with an applied external field**. A **non-polar molecule** is one whose individual bond dipole moments **cancel**, so the centres of positive and negative charge coincide, the separation is effectively zero and the net moment is zero — CO₂, O₂ or methane, for example.

**15.** *Superposition and Thévenin on the same two-source circuit; they must agree.*
**(a) Superposition.**
12 V alone (the 6 V source **shorted**): 3 Ω ∥ 6 Ω = 2.0 Ω; total = 2 + 2.0 = 4.0 Ω; source current = 12/4.0 = 3.0 A; node voltage = 3.0 × 2.0 = 6.0 V; load current = 6.0/6 = **1.00 A**.
6 V alone (the 12 V source **shorted**): 2 Ω ∥ 6 Ω = 1.5 Ω; total = 3 + 1.5 = 4.5 Ω; source current = 6/4.5 = 1.33 A; node voltage = 1.33 × 1.5 = 2.0 V; load current = 2.0/6 = **0.333 A**.
Both contributions are in the same direction, so **I_load = 1.00 + 0.333 = 1.33 A**, with the node at 6.0 + 2.0 = 8.0 V.
(Nodal check: (V − 12)/2 + (V − 6)/3 + V/6 = 0 → ×6: 3V − 36 + 2V − 12 + V = 0 → 6V = 48 → V = 8.0 V → I = 8.0/6 = 1.33 A ✓.)
**(b) Thévenin.** Remove the 6 Ω load. Open-circuit voltage: (V − 12)/2 + (V − 6)/3 = 0 → 3V − 36 + 2V − 12 = 0 → 5V = 48 → **V_Th = 9.6 V**. Zero both sources by **shorting** them: **R_Th = 2 ∥ 3 = 1.2 Ω**. Reconnect the load: I = V_Th/(R_Th + R_L) = 9.6/(1.2 + 6) = 9.6/7.2 = **1.33 A** ✓.
**Norton equivalent:** I_N = V_Th/R_Th = 9.6/1.2 = **8.0 A in parallel with 1.2 Ω**; the current divider gives 8.0 × 1.2/(1.2 + 6) = **1.33 A** ✓.
**Power in the load:** P = I²R = (1.33)²(6) = **10.7 W** (= V²/R = 8.0²/6 ✓). Note that the two sources' separate powers in the load, (1.00)²(6) = 6.0 W and (0.333)²(6) = 0.67 W, total only 6.67 W — powers do not superpose, because P is quadratic in I.
