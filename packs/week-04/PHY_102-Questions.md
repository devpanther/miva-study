# PHY_102 — Week 4 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 5, not this week. Notes closed. Topic: Analysis of DC Circuits, EMF & Electric Dipoles.*

## Section A — Multiple choice (12)

**1.** An **ideal voltage source** is one that:
A. delivers a constant current to the load whatever voltage appears across it
B. delivers a constant voltage across the load whatever current the load draws
C. delivers a constant power to the load whatever the load resistance is
D. delivers a voltage that rises steadily as the load draws more current

**2.** A cell of emf 12 V has an internal resistance of 0.50 Ω. When it supplies 4.0 A, its terminal voltage is:
A. 10 V  B. 12 V  C. 14 V  D. 2.0 V

**3.** For the purposes of circuit analysis, a "dead" or zeroed **voltage** source may be replaced by:
A. an open circuit, since no current can leave it
B. a resistor equal to its internal resistance in parallel
C. a short circuit, since both of its terminals are at the same potential
D. nothing at all — the whole branch is deleted from the diagram

**4.** The method of superposition states that the current in any branch of a linear circuit equals:
A. the sum of the currents produced in that branch by each independent source acting alone, the others zeroed
B. the sum of the currents produced in every other branch of the circuit by all the sources together
C. the current produced by the largest source, since the smaller sources are negligible
D. the average of the currents produced in that branch by each source acting alone

**5.** A 4.0 Ω resistor and a 12 Ω resistor are connected in parallel. Their combined resistance is:
A. 16 Ω  B. 8.0 Ω  C. 3.0 Ω  D. 0.33 Ω

**6.** An 18 V supply is connected across a 3.0 Ω resistor in series with a 6.0 Ω resistor. The potential difference across the 6.0 Ω resistor is:
A. 6.0 V  B. 9.0 V  C. 12 V  D. 18 V

**7.** A current of 1.2 A enters a parallel combination of a 2.0 Ω and a 4.0 Ω resistor. The current in the 4.0 Ω resistor is:
A. 0.40 A  B. 0.60 A  C. 0.80 A  D. 1.2 A

**8.** In Thévenin's theorem, V_Th and R_Th for a linear two-terminal network are:
A. the short-circuit current and the sum of all the resistances in the network
B. the voltage across the load and the resistance of the load itself
C. the open-circuit terminal voltage and the terminal resistance with the sources still active
D. the open-circuit terminal voltage and the terminal resistance with all independent sources zeroed

**9.** For two charges +q and −q separated by a distance d, the electric dipole moment:
A. has magnitude qd and points from the negative charge toward the positive charge
B. has magnitude qd and points from the positive charge toward the negative charge
C. has magnitude 2qd and points along the perpendicular bisector of the pair
D. is zero, because the two charges are equal and opposite so the net charge vanishes

**10.** Charges of +3.0 nC and −3.0 nC are held 2.0 mm apart. The magnitude of the dipole moment is:
A. 6.0×10⁻¹² C·m  B. 1.2×10⁻¹¹ C·m  C. 6.0×10⁻⁹ C·m  D. 1.5×10⁻⁶ C·m

**11.** A dipole of moment 2.0×10⁻⁸ C·m lies perpendicular to a uniform field of 3.0×10⁴ N/C. The torque on it is:
A. zero, because the net force on a dipole in a uniform field is zero
B. 6.0×10⁻⁴ N·m
C. 6.7×10⁻¹³ N·m
D. 1.5×10³ N·m

**12.** At the same distance r (with r much greater than d) from the centre of a dipole, the field on the axis compared with the field on the perpendicular bisector is:
A. equal in magnitude, and in the same direction as the dipole moment in both cases
B. half as large, and antiparallel to the dipole moment on the axis
C. twice as large, and parallel to the dipole moment while the bisector field is antiparallel
D. twice as large, and both fields point along the dipole moment

## Section B — Short answer (3)

**13.** Define **emf**, **terminal voltage** and **internal resistance**, and write the equation relating them. A cell's terminal voltage is measured as 9.0 V when it supplies no current and 6.0 V when it supplies 3.0 A. Find its emf and internal resistance, and explain what an *ideal* voltage source would give in the same test.

**14.** State the **method of superposition**. Explain exactly how a voltage source and a current source are each "zeroed" when they are not the source being considered, and explain why the method may be used to combine currents but **not** to combine the powers dissipated in a resistor.

**15.** Define an **electric dipole** and its **dipole moment**, giving the unit and the direction convention used in physics. A dipole of moment 4.0×10⁻⁹ C·m is held at 60° to a uniform field of 5.0×10⁴ N/C. Find the net force on it, the torque on it, and its potential energy. State the orientation of stable equilibrium.

## Answers

**1. B** — *Definition of an ideal voltage source.* Constant voltage regardless of the current drawn, i.e. internal resistance zero. A is the definition of an ideal **current** source; C invents a constant-power source; D reverses the real behaviour, in which the terminal voltage **falls** as the current rises.

**2. A** — *Terminal voltage of a real source.* V = ε − Ir = 12 − (4.0)(0.50) = 10 V. B assumes terminal voltage always equals the emf (true only at zero current); C adds Ir instead of subtracting it; D computes Ir alone and reports the *lost* volts rather than the terminal voltage.

**3. C** — *Zeroing a voltage source.* With zero emf both of its terminals sit at the same potential, so it behaves electrically as a plain connecting wire. A is the rule for a zeroed **current** source (the two are complementary); B invents a parallel resistance; D wrongly deletes the branch — the internal resistance and the wire path both remain.

**4. A** — *Statement of the superposition method.* One independent source at a time, all others zeroed, then add the contributions **with their signs**. B misplaces the branch; C treats superposition as an approximation in which small sources are dropped; D averages instead of summing.

**5. C** — *Two resistors in parallel.* R_p = (4.0)(12)/(4.0+12) = 48/16 = 3.0 Ω. A adds them as though in series; B takes the arithmetic mean; D computes 1/R_p = 1/4 + 1/12 = 1/3 and forgets to invert. A parallel combination is always **smaller than the smallest** member — 3.0 Ω passes that test.

**6. C** — *Potential divider.* V₆ = 18 × 6.0/(3.0+6.0) = 12 V. A inverts the divider and puts the *other* resistance on top (that is the **current** divider rule); B splits the supply equally, ignoring the resistances; D assumes the full supply appears across each resistor.

**7. A** — *Current divider.* I₄ = I·R₂/(R₁+R₂) = 1.2 × 2.0/6.0 = 0.40 A; the **other** resistance goes on top, so the larger resistor takes the smaller current. C is the divider written upside down (that is the current in the 2.0 Ω); B splits the current equally; D treats the resistors as being in series and carrying the same current.

**8. D** — *Thévenin's theorem.* V_Th is the open-circuit voltage at the terminals; R_Th is the resistance looking into the terminals with every independent voltage source shorted and every independent current source opened. C makes the standard slip of leaving the sources active; A is a Norton/series mix-up; B leaves the load in place, which is exactly what the equivalent is meant to replace.

**9. A** — *Definition and direction of dipole moment.* p = qd, using **one** of the charges, directed from −q to +q along the dipole axis. B is the chemistry convention, not the physics one; C doubles the charge and points along the wrong line; D confuses the **net charge** (which is indeed zero) with the dipole moment (which is not).

**10. A** — *Numerical dipole moment.* p = qd = (3.0×10⁻⁹)(2.0×10⁻³) = 6.0×10⁻¹² C·m. B uses the total charge 2q = 6.0 nC; C leaves d in millimetres; D divides instead of multiplying. Convert to metres before multiplying.

**11. B** — *Torque on a dipole in a uniform field.* τ = pE sin θ = (2.0×10⁻⁸)(3.0×10⁴)(sin 90° = 1) = 6.0×10⁻⁴ N·m — and 90° is where the torque is **greatest**. A confuses zero net **force** (correct, the field is uniform) with zero **torque**; C divides p by E; D divides E by p. Zero torque happens at θ = 0° and 180°, not at 90°.

**12. C** — *Axial versus equatorial field of a dipole.* E_axial = 2kp/r³ **parallel** to p; E_eq = kp/r³ **antiparallel** to p; so the axial field is twice the equatorial one and they point opposite ways. A drops the factor 2; B inverts the ratio; D gets the factor right but the bisector direction wrong — on the bisector the components perpendicular to the axis cancel and the surviving component points from +q back toward −q.

**13.** *emf, terminal voltage and internal resistance.* The **emf** ε of a source is the energy it supplies per unit charge driven round the circuit (volts) — the potential difference across its terminals when it delivers **no** current. The **internal resistance** r is the effective resistance of the source itself, in **series** with the emf. The **terminal voltage** V is the potential difference actually available to the external circuit: **V = ε − Ir**, so V falls linearly as the current drawn rises. From the data: at I = 0, V = ε, so **ε = 9.0 V**. At I = 3.0 A, 6.0 = 9.0 − 3.0r → 3.0r = 3.0 → **r = 1.0 Ω**. (Equivalently, the V-against-I graph is a straight line of intercept ε and slope −r.) An **ideal** source has r = 0, so it would read 9.0 V at **both** currents — the terminal voltage would not sag at all.

**14.** *Method of superposition.* In a network of **linear** elements, the current in any branch equals the sum of the currents produced in that branch by each **independent** source acting alone with all the other independent sources zeroed; the same holds for the voltage at any node. To zero a **voltage** source, replace it by a **short circuit** (a wire), because a zeroed emf puts both its terminals at the same potential; to zero a **current** source, replace it by an **open circuit** (a gap), because a source delivering zero current is equivalent to a break. In both cases any internal resistance stays in the circuit. The contributions are then added **as signed quantities**, so they may partly cancel. Power may **not** be superposed because P = I²R is **quadratic**, not linear: if two sources separately drive 1.5 A each through a 2.0 Ω resistor in the same direction, the true power is (3.0)²(2.0) = 18 W, whereas adding the separate powers gives 4.5 + 4.5 = 9 W. Always superpose the **currents** first, then square.

**15.** *Electric dipole in a uniform field.* An **electric dipole** is a pair of equal and opposite charges, +q and −q, separated by a small distance d; the midpoint of the pair is the centre and the line through them is the dipole axis. Its **dipole moment** is the vector **p = qd**, of magnitude qd, unit **C·m**, directed (in physics) **from −q toward +q**. In a **uniform** field the two forces qE and −qE are equal and opposite, so the **net force is zero**. The torque is τ = pE sin θ = (4.0×10⁻⁹)(5.0×10⁴)(sin 60° = 0.866) = **1.73×10⁻⁴ N·m**, directed so as to turn p into line with E. The potential energy is U = −pE cos θ = −(4.0×10⁻⁹)(5.0×10⁴)(cos 60° = 0.500) = **−1.0×10⁻⁴ J**. **Stable equilibrium is at θ = 0°**, with p aligned with E: there τ = 0 and U = −pE = −2.0×10⁻⁴ J is a minimum. (θ = 180° also gives τ = 0 but is *unstable*, since U is then a maximum.)
