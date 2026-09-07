# Friday — PHY_102 nightly check

*Problem-solving hour on the same Week 4 material of General Physics II.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** A battery of emf 12 V and internal resistance 0.50 Ω drives a 3.5 Ω load. What power is dissipated in the load?
A. 36 W
B. 4.5 W
C. 31.5 W
D. 41 W

**2.** A 12 V source through 3.0 Ω and a 6.0 V source through 6.0 Ω both feed node A, which returns to ground through 2.0 Ω. Both sources have their negative terminals grounded. Using superposition, find the current in the 2.0 Ω resistor.
A. 2.0 A
B. 5.0 A
C. 2.5 A
D. 1.5 A

**3.** A 15 V source through 3.0 Ω and a 5.0 V source through 2.0 Ω both feed node A, negative terminals grounded, with nothing else connected to A. What is the Thevenin voltage between A and ground?
A. 10 V
B. 9.0 V
C. 11 V
D. 20 V

**4.** Node A is fed by a 2.0 A ideal current source (into A), by a 12 V source through a 6.0 Ω resistor, and is joined to ground by a 4.0 Ω resistor. Ground is the reference. Using nodal analysis, find V_A.
A. 8.0 V
B. 4.8 V
C. 9.6 V
D. 12 V

**5.** Charges of ±4.0 nC are 0.50 mm apart. Taking k = 9.0 × 10⁹ N·m²/C², find the potential at a point 4.0 cm from the centre of the dipole, at 60° to the dipole axis.
A. 11 V
B. 9.7 V
C. 0.23 V
D. 5.6 V

**6.** A dipole of moment 3.0 × 10⁻¹² C·m points along +x. Taking k = 9.0 × 10⁹ N·m²/C², what is the field at a point on the axis 1.0 cm from the centre?
A. 5.4 × 10⁴ N/C, parallel to p
B. 2.7 × 10⁴ N/C, antiparallel to p
C. 5.4 × 10⁴ N/C, antiparallel to p
D. 5.4 × 10² N/C, parallel to p

**7.** A dipole of moment 4.0 × 10⁻¹² C·m sits in a uniform field of 5.0 × 10⁵ N/C, initially aligned with the field. How much work must be done to rotate it until p is at 120° to E?
A. 2.0 × 10⁻⁶ J
B. 3.0 × 10⁻⁶ J
C. 1.0 × 10⁻⁶ J
D. 4.0 × 10⁻⁶ J

**8.** A circuit has two batteries and three resistors. A student solves it by superposition, finding each quantity with one battery at a time and adding. Which of these quantities is NOT correctly found by adding the single-source values?
A. Current in the 5 Ω resistor
B. Power dissipated in the 5 Ω resistor
C. Voltage across the 5 Ω resistor
D. Voltage at the node between two resistors

**9. (show your working)** An 18 V source with negligible internal resistance is in series with 6.0 Ω; a 3.0 Ω resistor runs from that junction to ground, and the output terminals are across the 3.0 Ω. Calculate V_Th, R_Th and the Norton current, then the current in a 4.0 Ω load connected across the terminals. Show your working.

**10. (show your working)** A dipole made of charges ±4.0 nC experiences a maximum torque of 6.0 × 10⁻⁷ N·m when placed in a uniform field of 3.0 × 10⁵ N/C. Calculate the dipole moment and the separation of the charges, then the torque when p is at 30° to E. Show your working.

**11. (show your working)** A 200 pF capacitor is charged to 50 V and disconnected from the supply. A slab with κ = 2.5 is then inserted to fill the gap. Calculate the charge, the stored energy before and after insertion, and the energy lost. Show your working.

**12. (show your working)** A charged parallel-plate capacitor is disconnected from its battery and a dielectric slab is inserted between the plates. Explain, in terms of what happens inside the dielectric, why the field between the plates falls and why the capacitance rises.

---

## Answers

**1. C** — *Power balance in a circuit with a real source.* First the current: I = ε/(R + r) = 12/(3.5 + 0.50) = 3.0 A. Then P = I²R = (3.0)²(3.5) = 31.5 W. Check: source supplies εI = 36 W, internal loss I²r = 4.5 W, and 31.5 + 4.5 = 36 W.

36 W is the total power the source delivers, not what the load gets; 4.5 W is the power wasted inside the battery; 41 W uses I = 12/3.5 = 3.43 A, forgetting the internal resistance.

**2. C** — *Superposition in a two-source network.* 12 V alone (6.0 V source shorted): it sees 3.0 + (6.0 ∥ 2.0) = 3.0 + 1.5 = 4.5 Ω, so I = 2.67 A and V_A = 2.67 × 1.5 = 4.0 V, giving 4.0/2.0 = 2.0 A down through the 2.0 Ω. 6.0 V alone (12 V shorted): 6.0 + (3.0 ∥ 2.0) = 7.2 Ω, I = 0.833 A, V_A = 1.0 V, giving 0.50 A, also downward. Same direction, so I = 2.0 + 0.50 = 2.5 A.

2.0 A is the 12 V contribution alone; 1.5 A subtracts the two contributions although both push current the same way; 5.0 A is 12/3 + 6/6, the current with node A shorted to ground, not with the 2.0 Ω in place.

**3. B** — *Open-circuit voltage of a two-source node.* V_Th is the open-circuit voltage. With no load the current from the 15 V side equals the current into the 5.0 V side: (15 − V)/3.0 = (V − 5.0)/2.0, so 30 − 2V = 3V − 15, 5V = 45, V_Th = 9.0 V. (R_Th would be 3.0 ∥ 2.0 = 1.2 Ω.)

10 V is the plain average of the two emfs, ignoring the unequal resistances; 20 V adds the emfs as if in series; 11 V weights each emf by its own resistance, (15 × 3 + 5 × 2)/5, the wrong way round: the lower-resistance branch pulls V_A toward itself.

**4. C** — *Nodal analysis with a current source.* KCL at A, currents in = currents out: 2.0 + (12 − V_A)/6.0 = V_A/4.0. Multiply by 12: 24 + 24 − 2V_A = 3V_A, so 5V_A = 48 and V_A = 9.6 V. Check by superposition: current source alone through 6.0 ∥ 4.0 = 2.4 Ω gives 4.8 V; voltage source alone gives 12 × 4/10 = 4.8 V; sum 9.6 V.

4.8 V is one source's contribution only; 12 V assumes the node sits at the source emf as if the 6.0 Ω dropped nothing; 8.0 V is 2.0 A × 4.0 Ω, treating the zeroed voltage-source branch as an open circuit instead of a wire.

**5. D** — *Dipole potential at an angle to the axis.* p = qd = (4.0 × 10⁻⁹)(0.50 × 10⁻³) = 2.0 × 10⁻¹² C·m, and r/d = 80 so the far-field formula applies. V = kp cos θ/r² = (9.0 × 10⁹)(2.0 × 10⁻¹²)(0.50)/(0.040)² = 9.0 × 10⁻³/1.6 × 10⁻³ = 5.6 V (5.625 V to three figures).

11 V drops the cos 60° factor, which is the on-axis value; 9.7 V uses sin 60° instead of cos; 0.23 V forgets to square r.

**6. A** — *Axial field of a dipole with direction.* On the axis E = 2kp/r³ = 2(9.0 × 10⁹)(3.0 × 10⁻¹²)/(0.010)³ = 0.054/1.0 × 10⁻⁶ = 5.4 × 10⁴ N/C, and on the axis the field points the same way as p (along +x) on both sides of the dipole.

2.7 × 10⁴ N/C antiparallel is the equatorial result, half the size and reversed; 5.4 × 10⁴ N/C antiparallel has the right size but the equatorial direction; 5.4 × 10² N/C divides by r² instead of r³.

**7. B** — *Work to rotate a dipole in a field.* U = −pE cos θ with pE = (4.0 × 10⁻¹²)(5.0 × 10⁵) = 2.0 × 10⁻⁶ J. At 0°: U = −2.0 × 10⁻⁶ J. At 120°: U = −(2.0 × 10⁻⁶)(−0.50) = +1.0 × 10⁻⁶ J. Work done = ΔU = 1.0 × 10⁻⁶ − (−2.0 × 10⁻⁶) = 3.0 × 10⁻⁶ J.

2.0 × 10⁻⁶ J is pE, the work to reach 90° only; 1.0 × 10⁻⁶ J is the final energy alone, forgetting the starting energy is negative; 4.0 × 10⁻⁶ J is 2pE, the work to reach 180°.

**8. B** — *Limits of superposition.* Superposition holds for quantities that are linear in the source strengths: branch currents and voltages add. Power P = I²R is quadratic, so (I₁ + I₂)²R ≠ I₁²R + I₂²R; the cross term 2I₁I₂R is lost. Power must be computed from the total current.

The current, the voltage across a resistor and a node voltage are all linear in the sources and superpose correctly.

**9.** *Thevenin equivalent and load current.* V_Th = open-circuit voltage = voltage across the 3.0 Ω by the divider rule = 18 × 3.0/(6.0 + 3.0) = 6.0 V. R_Th: short the 18 V source, then 6.0 and 3.0 are in parallel at the terminals, R_Th = 6.0 × 3.0/9.0 = 2.0 Ω. I_N = V_Th/R_Th = 3.0 A. Load: I = V_Th/(R_Th + R_L) = 6.0/(2.0 + 4.0) = 1.0 A. Check directly: 3.0 ∥ 4.0 = 1.71 Ω, I_source = 18/7.71 = 2.33 A, V_A = 4.0 V, I_L = 4.0/4.0 = 1.0 A.

A correct answer states V_Th = 6.0 V, R_Th = 2.0 Ω, I_N = 3.0 A and I_L = 1.0 A. V_Th = 18 V (no divider) or R_Th = 9.0 Ω (series instead of parallel) is wrong.

**10.** *Dipole moment and separation from maximum torque.* τ = pE sin θ is a maximum when sin θ = 1, so p = τ_max/E = 6.0 × 10⁻⁷/3.0 × 10⁵ = 2.0 × 10⁻¹² C·m. Then d = p/q = 2.0 × 10⁻¹²/4.0 × 10⁻⁹ = 5.0 × 10⁻⁴ m = 0.50 mm. At 30°: τ = pE sin 30° = (6.0 × 10⁻⁷)(0.50) = 3.0 × 10⁻⁷ N·m.

A correct answer states p = 2.0 × 10⁻¹² C·m, d = 0.50 mm (5.0 × 10⁻⁴ m) and τ = 3.0 × 10⁻⁷ N·m. Using 2q for the charge (d = 0.25 mm) or cos 30° for the torque (5.2 × 10⁻⁷ N·m) is wrong.

**11.** *Energy change when a dielectric is inserted at constant charge.* Q = C₀V₀ = (200 × 10⁻¹²)(50) = 1.0 × 10⁻⁸ C, fixed once the supply is removed. Before: U₀ = ½C₀V₀² = ½(200 × 10⁻¹²)(50)² = 2.5 × 10⁻⁷ J. After: C = κC₀ = 500 pF, V = Q/C = 20 V, U = ½QV = ½(1.0 × 10⁻⁸)(20) = 1.0 × 10⁻⁷ J, equal to U₀/κ. Energy lost = 2.5 × 10⁻⁷ − 1.0 × 10⁻⁷ = 1.5 × 10⁻⁷ J, the work done by the field pulling the slab in.

A correct answer states Q = 1.0 × 10⁻⁸ C, U₀ = 2.5 × 10⁻⁷ J, U = 1.0 × 10⁻⁷ J and a loss of 1.5 × 10⁻⁷ J; also accepted U = Q²/2C. An energy that rises by κ describes the supply-still-connected case and is wrong.

**12.** *Polarisation of a dielectric.* The field of the plates polarises the dielectric: in each molecule the positive and negative charge centres are pulled slightly apart (or permanent dipoles line up), so a layer of bound negative charge appears on the face next to the positive plate and bound positive charge on the other face. These bound charges produce a field that opposes the applied field, so the net field inside falls to E₀/κ. With Q fixed, V = Ed falls by the same factor, and C = Q/V rises by κ.

A correct answer mentions polarisation (charge shifting within molecules), bound surface charge, an opposing internal field giving E = E₀/κ, then V = Ed falling and C = Q/V rising.
