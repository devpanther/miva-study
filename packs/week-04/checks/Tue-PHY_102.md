# Tuesday — PHY_102 nightly check

*Concepts and basic technique: ideal and real sources of emf, zeroed sources, series/parallel identification, the method of superposition, Thévenin/Norton and nodal analysis, and the definition, direction and field behaviour of an electric dipole.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** An **ideal voltage source** is best described as one that:
a) delivers a constant voltage across the load whatever current the load draws; its internal resistance is zero
b) delivers a constant current to the load whatever voltage appears across it; its internal resistance is zero
c) delivers a constant voltage across the load whatever current the load draws; its internal resistance is infinite
d) delivers constant power to the load whatever the load is; its internal resistance equals the load resistance

**2.** A **real current source** is modelled as an ideal current source together with an internal resistance, arranged and valued as:
a) in parallel with it, ideally infinite
b) in series with it, ideally zero
c) in series with it, ideally infinite
d) in parallel with it, ideally zero

**3.** To apply the method of superposition to a circuit containing one voltage source and one current source, the source **not** being considered is handled by:
a) shorting the voltage source, or opening the current source, leaving all resistances in place
b) opening the voltage source, or shorting the current source, leaving all resistances in place
c) shorting both of them, since a zeroed source can support no potential difference at all
d) deleting each source together with the resistance in its own branch from the diagram

**4.** A resistor in a two-source linear network carries 2.0 A when the first source acts alone and 3.0 A in the same direction when the second acts alone. With both sources active, the current is 5.0 A and the power dissipated is:
a) 25R watts, because power is quadratic in current and so cannot itself be superposed
b) 13R watts, because each source dissipates its own power independently of the other
c) 5R watts, because power divides between the sources exactly as the current does
d) 6R watts, because the power follows from the product of the two separate currents

**5.** Two resistors in a circuit diagram are genuinely **in series** when:
a) they meet at a node to which nothing else is joined, so the same current passes through both
b) they are drawn one after another along the same wire, whatever else is joined between them
c) they have the same potential difference across them, so the current divides between them
d) they carry currents in the same direction, whether or not other branches join them

**6.** For a linear two-terminal network, the Thévenin voltage and Thévenin resistance are obtained as:
a) the open-circuit terminal voltage, and the terminal resistance with all independent sources zeroed
b) the short-circuit terminal current, and the terminal resistance with the load still connected
c) the open-circuit terminal voltage, and the terminal resistance with all independent sources active
d) the voltage measured across the load, and the sum of every resistance appearing in the network

**7.** In nodal analysis, one node is chosen as the reference node so that:
a) its voltage may be set to zero, leaving the other node voltages as the unknowns in the KCL equations
b) the current entering it is zero, which removes one equation from the simultaneous set
c) it carries the largest current in the circuit, which makes the remaining equations easier to solve
d) the potential difference across every source in the circuit is thereby forced to be zero

**8.** The electric dipole moment of charges +q and −q separated by d has magnitude qd and, by the physics convention, is directed:
a) from the negative charge toward the positive charge, along the dipole axis
b) from the positive charge toward the negative charge, along the dipole axis
c) outward from the centre of the pair, in the direction of any applied external field
d) perpendicular to the line joining the charges, that is, along the equatorial plane

**9. (explain why)** Explain why a dipole placed in a **uniform** external field experiences zero net force but a non-zero torque. State the two orientations for which the torque vanishes and say which of them is the stable one, and why.

**10. (explain why)** A student writes: "A zeroed voltage source and a zeroed current source are both simply removed from the circuit." Say precisely what each is replaced by, explain why the two replacements are different, and state what happens to their internal resistances.

**11. (explain why)** Explain why the electric potential of a dipole is zero at every point on its perpendicular bisector while the electric field there is **not** zero, and state the direction of that field relative to **p**.

**12. (explain why)** Distinguish a **polar** from a **non-polar** molecule in terms of dipole moment, give one example of each, and say what a polar molecule does when an external electric field is applied.

---

## Answers

**1. a** — *An ideal voltage source is defined by constant voltage, which requires zero internal resistance.* Constant V regardless of the current drawn; any internal resistance would make V = ε − Ir sag as I rises. (b) is the definition of an ideal **current** source; (c) attaches the current source's condition (r → ∞) to the voltage source — infinite series resistance would deliver no current at all; (d) invents a constant-power source and imports the maximum-power-transfer condition r = R_load. Revise: which quantity each ideal source holds fixed.

**2. a** — *A real current source is an ideal source in parallel with a finite internal resistance; ideal means that resistance is infinite.* A current source must divert its shortfall somewhere as the load voltage rises, and only a **parallel** path can do that; making that path infinite sends all the current to the load. (b) and (c) apply the **voltage** source's series arrangement; (d) has the arrangement right but the ideal limit backwards — zero parallel resistance would short-circuit the source and deliver nothing to the load. Revise: voltage source → r in series, ideal r = 0; current source → r in parallel, ideal r = ∞.

**3. a** — *Zeroing is complementary: no emf means a wire, no current means a gap.* A voltage source of zero emf holds both terminals at the same potential, which is what a connecting wire does; a current source delivering zero current is what a break in the wire does. (b) is the swap, the commonest error in the whole method. (c) applies the voltage-source rule to both and would wrongly force the current source's terminals to equal potential. (d) confuses "zeroed" with "deleted": the internal resistance and the branch geometry must stay, or the network you analyse is no longer the same network.

**4. a** — *Superposition is a theorem about linear quantities; power is quadratic and is therefore excluded.* Currents and voltages superpose, so I = 2.0 + 3.0 = 5.0 A, and only then is the power computed: P = I²R = 25R. (b) adds the separately computed powers 4R + 9R, the classic error — it ignores the cross term 2(2.0)(3.0)R = 12R. (c) treats power as linear in current. (d) manufactures 6R from the cross-product alone. Revise: superpose currents first, square afterwards.

**5. a** — *Series is defined by a shared current, which requires an unbranched junction, not merely a straight-looking wire.* If a third branch taps in between the two resistors, part of the current leaves and the two no longer carry the same current. (b) reads the drawing rather than the topology — this is the trap the definition exists to close. (c) is the definition of **parallel**. (d) is true of many arrangements that are not series, including the branches of a parallel pair fed from a common node. Revise: same current → series; same voltage → parallel.

**6. a** — *V_Th is what the terminals show with nothing drawing current; R_Th is what the terminals show with the sources' driving action removed.* Open-circuit means no current, so no internal drop, giving the full equivalent emf; zeroing the independent sources (voltage → short, current → open) leaves only the resistive skeleton seen from the terminals. (b) mixes in the Norton quantity and leaves the load attached, though the load is exactly what the equivalent must be independent of. (c) forgets to zero the sources, so the "resistance" measured would include their emfs. (d) is the naive reading of both quantities. Revise: V_Th = open-circuit voltage, I_N = short-circuit current, R_Th = R_N, V_Th = I_N R_Th.

**7. a** — *The reference node fixes the arbitrary constant in potential, turning node voltages into solvable unknowns.* Only potential *differences* are physical, so one node may be assigned 0 V freely (usually the negative terminal of the source); KCL at each remaining node then gives one equation per unknown. (b) confuses node **voltage** with node **current** — KCL holds at every node, including the reference one. (c) invents a selection rule from current size; the choice is arbitrary and only convenience decides it. (d) misreads "zero reference" as forcing every source to zero, which would erase the circuit's drive. Revise: the four-step nodal recipe.

**8. a** — *The dipole moment is defined from the negative charge to the positive charge in physics.* p = qd using **one** of the charges, directed along the dipole axis from −q to +q; the axis is the line joining them. (b) is the **chemistry** convention, deliberately offered because the slides warn about it — correct in a chemistry paper, wrong here. (c) confuses the definition with the field-alignment behaviour: p exists and has its direction before any field is applied. (d) confuses the dipole axis with the equatorial plane, where the *field* (not p) points antiparallel to p. Revise: magnitude qd, unit C·m, direction −q → +q.

**9.** *Concept: a uniform field gives equal and opposite forces on the two charges, so the resultant vanishes but the couple does not.* The charge +q feels qE and the charge −q feels −qE. Since E has the **same magnitude and direction at both charges**, these forces are equal and opposite, so F_net = qE + (−qE) = **0** and the dipole does not translate. They do not, however, act at the same point: they are separated by the perpendicular distance d sin θ, so they form a **couple**, whose moment is τ = qE·d sin θ = **pE sin θ**, i.e. **τ = p × E**. (Because the net force is zero, the torque has the same value about any origin.) The torque vanishes when sin θ = 0, that is at **θ = 0°** (p parallel to E) and **θ = 180°** (p antiparallel). Only **θ = 0° is stable**: the potential energy U = −pE cos θ is a **minimum** (−pE) there, so any small displacement produces a restoring torque, whereas at 180° U is a maximum (+pE) and the least disturbance flips the dipole right over. In a **non-uniform** field the two forces are unequal and the net force is no longer zero.

**10.** *Concept: "zeroed" means set the source's own output to zero, not remove the branch it sits in.* A **zeroed voltage source** has zero emf, so both of its terminals sit at the same potential — electrically identical to a **short circuit**, a plain connecting wire. A **zeroed current source** delivers zero current, which is what a break in the wire does — it is replaced by an **open circuit**. The replacements differ because the two sources are defined by different constraints: a voltage source fixes the potential difference (zero difference = a wire), while a current source fixes the current (zero current = a gap). They are complementary in exactly this sense. Any **internal resistance stays in the circuit**: r is a property of the real component, not of its emf or its current output, so in superposition you short the ideal emf but leave its series r, and open the ideal current source but leave its parallel r. Deleting a whole branch would change the network's resistance and give the wrong branch currents.

**11.** *Concept: potential is a scalar sum and cancels; field is a vector sum whose components partly survive.* Every point P on the perpendicular bisector is **equidistant** from +q and −q. The potential is a **scalar** sum, V = kq/r₊ + k(−q)/r₋, and with r₊ = r₋ the two terms are equal in magnitude and opposite in sign, so **V = 0** exactly, at every such point and at every distance. This also follows from V = kp cos θ/r² with θ = 90°, since cos 90° = 0. The field is a **vector** sum and cannot cancel the same way: E₊ points away from +q and E₋ points toward −q. Resolving them, the components **perpendicular to the dipole axis are equal and opposite and cancel**, while the components **parallel to the axis are equal and add**. The resultant is therefore non-zero, lies along the axis, and points **antiparallel to p** (from the +q side back toward the −q side), with magnitude kp/r³ for r ≫ d. So V = 0 does not imply E = 0: E measures how fast V *changes* with position, and although V is zero all along the bisector, it changes as you step off it.

**12.** *Concept: polarity is decided by whether the individual bond moments cancel, i.e. whether the centres of positive and negative charge coincide.* A **polar molecule** has a **permanent net dipole moment**: the centre of positive charge and the centre of negative charge do **not** coincide, so p = qd ≠ 0 — for example **HCl** (also NaOH, H₂O). A **non-polar molecule** has individual bond dipole moments that **cancel by symmetry**, giving a **net dipole moment of zero** — for example **CO₂** (also O₂, CH₄); note that CO₂ has polar bonds but is linear and symmetric, so the two moments are equal and opposite. When an external field is applied, a polar molecule experiences a torque τ = pE sin θ and **rotates to align its dipole moment with the field** (its alignment resisted by thermal motion); a non-polar molecule has no permanent p to align, though the field induces a small one by displacing its charge. This alignment and displacement is what dielectric polarisation is, and it is why a dielectric weakens the field inside a capacitor and raises its capacitance.
