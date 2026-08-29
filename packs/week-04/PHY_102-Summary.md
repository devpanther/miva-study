# PHY_102 — Week 4

*General Physics II · Week 4 (28 Sep – 4 Oct 2026)*

*Note on the source: both lecture decks extracted as prose only — no worked algebra, no figures — and the "electric field of an electric dipole" slide names the axial and equatorial cases but states no formula. The third strand (the weekly Summary sheet) is headed "EMF and Electric Dipoles" but its body covers EMF and dielectrics. All three are examinable, so the standard formulas for the topics the decks name are supplied below.*

## Most likely to be examined

1. **Terminal voltage of a real source:** `V = ε − I r` (discharging), `V = ε + I r` (charging). ε = emf in volts (work done by the source per coulomb driven round the circuit), I = current in amperes, r = internal resistance in ohms. Single loop: `I = ε /(R + r)`. On a plot of V (y-axis) against I (x-axis) the **y-intercept is ε and the gradient is −r, so r = −(gradient)**, in ohms. *(The deck says r is "the negative reciprocal of the slope" — wrong; the negative reciprocal has units of siemens.)*
2. **Zeroing a source** (needed for superposition and for R_Th): a zeroed **ideal voltage source becomes a short circuit** (0 Ω wire — it holds 0 V across itself at any current); a zeroed **ideal current source becomes an open circuit** (it passes 0 A at any voltage). Ideal voltage source: r = 0. Ideal current source: internal resistance infinite; a real current source = ideal current source **in parallel** with r, a real voltage source = ideal emf **in series** with r.
3. **Superposition:** the current in any branch equals the sum of the currents produced in that branch by each independent source acting alone with all other independent sources zeroed; likewise for node voltages. **Valid only for linear elements** (resistors, ideal sources), and **only for currents and voltages, never for power**, since P = I²R is quadratic.
4. **Thévenin / Norton:** any linear two-terminal network ≡ `V_Th` in series with `R_Th`, or ≡ `I_N` in parallel with `R_N`. `V_Th = V_oc` (open-circuit voltage, load removed); `R_Th = R_N` = resistance looking into the terminals with all independent sources zeroed; `I_N = I_sc` (short-circuit current); and `V_Th = I_N R_Th`.
5. **Electric dipole moment:** `p = q d`, a **vector directed from −q to +q** (physics convention; chemistry uses the reverse). Unit **C·m**; dimensions **[M⁰ L¹ T¹ I¹]**. Magnitude |p| = qd where q is the magnitude of *either* charge, not the sum.
6. **Potential of a dipole (valid for r ≫ d):** `V = (1/4πε₀) · p cos θ / r²`, with θ measured at the dipole centre from the direction of p. θ = 0° → V = kp/r² (maximum); θ = 90° → **V = 0 everywhere on the equatorial plane**. Falls as 1/r², faster than a point charge's 1/r.
7. **Field of a dipole (r ≫ d):** axial `E = (1/4πε₀)(2p/r³)`, **parallel to p**; equatorial `E = (1/4πε₀)(p/r³)`, **antiparallel to p**. Axial is exactly twice the equatorial at the same r; both fall as 1/r³.
8. **Dipole in a uniform external field:** net force **zero** (forces qE and −qE are equal and opposite); torque `τ = p × E`, magnitude `τ = pE sin θ = 2qaE sin θ` with 2a = d. Potential energy `U = −p·E = −pE cos θ`. Stable equilibrium at θ = 0° (τ = 0, U = −pE); unstable at θ = 180°. In a **non-uniform** field the net force is generally non-zero and the dipole is drawn toward the stronger field. *(A slide says a non-uniform field means the net force "will undoubtedly be greater than zero" — it is generally non-zero, but can still vanish for particular orientations or symmetry points.)*
9. **Dielectric in a capacitor:** `C = Q/V` (farads). Parallel plate in vacuum `C₀ = ε₀A/d`; with relative permittivity (dielectric constant) κ, `C = κ ε₀ A/d = κ C₀`. **At constant charge** (battery disconnected): `E = E₀/κ`, `V = V₀/κ`, `C = κC₀`. Susceptibility `χ_e = κ − 1`; permittivity `ε = κ ε₀`. Energy `U = ½CV² = ½QV = Q²/2C`.

## The rest of the substance

**DC circuit vocabulary.** Circuit analysis = solving for all unknown branch currents, node voltages and effective resistances. Series `R_s = R₁ + R₂ + …`; parallel `1/R_p = 1/R₁ + 1/R₂ + …`. KCL: the algebraic sum of currents into a node is zero. KVL: the algebraic sum of emfs and IR drops round a closed loop is zero. *(A nodal-analysis slide writes "KCR"; read it as KCL.)*

**Nodal analysis, the deck's four-step recipe.** (i) Choose a reference node and set its voltage to zero — conventionally the node joined to the negative terminal of the source; the choice is arbitrary because only potential *differences* are physical. (ii) Label the remaining node voltages V₁, V₂, … (iii) Apply KCL at each non-reference node, writing each branch current as (far-end voltage − node voltage)/resistance. (iv) Solve the simultaneous equations.

**Ideal vs real sources.** Ideal voltage source: constant V across the load whatever current is drawn. Real cell: beyond a certain current the terminal voltage falls, attributed to an effective internal resistance r in series with the emf. Ideal current source: constant I into the load whatever voltage develops; real current sources are uncommon and are usually a voltage source with a large series resistor, or a transistor/IC circuit. **Power accounting:** `εI = I²R + I²r` — the source delivers εI, the load dissipates I²R, and I²r is wasted inside the source.

**Measuring emf.** A voltmeter across a cell reads the *terminal* voltage; it reads the emf only in the limit of zero current, i.e. open circuit or an ideal (infinite-resistance) meter. *(The Summary sheet's bullet "voltmeters are used to measure EMF" is only true under that condition.)*

**Dipole physics.** A dipole is a pair of equal and opposite charges q and −q separated by a small distance d; the midpoint is the centre and the line through both charges is the axis. The field at a general point is obtained by superposing E₊q and E₋q (Coulomb's law plus superposition, combined by the parallelogram rule). On the perpendicular bisector the two magnitudes are equal, the components perpendicular to the axis cancel, and the resultant points from +q toward −q, i.e. **opposite to p**.

**Polar and non-polar molecules.** Polar: the centres of positive and negative charge do not coincide, so there is a permanent net dipole moment (HCl, H₂O, NaOH); these align with an applied field. Non-polar: the individual bond moments cancel, net p = 0 (CO₂, O₂, CH₄). The dipole moment reveals molecular geometry and orientation in 3-D space.

**Dielectrics (Summary strand).** Non-conducting materials placed between capacitor plates. An applied field **polarises** them — charge shifts within each molecule — producing bound surface charges whose own field opposes the applied field. Consequences: E is reduced by the factor κ, C rises by the factor κ, more energy is stored at a given voltage, and the reduced internal field raises the voltage the gap can withstand before **dielectric breakdown** (the slab also physically stops the plates touching, i.e. prevents a short). Example κ values from the sheet: air 1.0006, glass ≈ 7.

*(One further caution: the DC deck's mid-lesson question asks for the line voltage of a three-phase 120° voltage-source inverter, V_L = V_DC/√2 = 16.97 V for V_DC = 24 V. That is power-electronics material, not DC circuit analysis; the arithmetic is right but the topic is off-syllabus for this deck — do not generalise "divide by √2" to anything else this week.)*

## Worked examples

**A. Real source: terminal voltage and power.** ε = 12.0 V, r = 0.50 Ω, load R = 5.5 Ω.
I = ε/(R + r) = 12.0/(5.5 + 0.50) = 12.0/6.0 = **2.00 A**.
V = ε − Ir = 12.0 − (2.00)(0.50) = **11.0 V**. Check: V = IR = 2.00 × 5.5 = 11.0 V ✓
Power: source εI = 12.0 × 2.00 = 24.0 W; load I²R = (2.00)²(5.5) = 22.0 W; internal I²r = (2.00)²(0.50) = 2.0 W; 22.0 + 2.0 = 24.0 W ✓
*Same cell into 55 Ω: I = 12/55.5 = 0.216 A, V = 11.89 V — the "battery = fixed 12 V" model is nearly right here, which is exactly why it survives.*

**B. Superposition.** A 12 V source through 4 Ω and a 6 V source through 2 Ω both feed node A; A returns to ground through R₃ = 4 Ω. Find the current in R₃.
*12 V alone* (6 V source replaced by a wire): the 12 V source sees 4 Ω in series with (2 ∥ 4) = 2×4/6 = 1.333 Ω, total 5.333 Ω. I = 12/5.333 = 2.25 A, V_A = 2.25 × 1.333 = 3.00 V, so I₃′ = 3.00/4 = **0.75 A** downward.
*6 V alone* (12 V source replaced by a wire): 2 Ω in series with (4 ∥ 4) = 2.00 Ω, total 4.00 Ω. I = 6/4 = 1.50 A, V_A = 1.50 × 2.00 = 3.00 V, so I₃″ = **0.75 A** downward.
Same direction ⇒ I₃ = 0.75 + 0.75 = **1.50 A**, V_A = 6.00 V.
*Do not add powers:* true power in R₃ = (1.50)²(4) = 9.0 W, whereas adding single-source powers gives 2 × (0.75)²(4) = 4.5 W — wrong.

**C. Nodal analysis (same circuit, independent check).** Reference = ground; unknown V_A. KCL, currents in = currents out:
(12 − V_A)/4 + (6 − V_A)/2 = V_A/4. ×4: (12 − V_A) + 2(6 − V_A) = V_A → 24 − 3V_A = V_A → **V_A = 6.00 V**, I₃ = 6.00/4 = **1.50 A** ✓ (agrees with B).

**D. Thévenin and Norton (same circuit, R₃ as the load).** Remove R₃ first.
V_Th = V_oc: (12 − V)/4 = (V − 6)/2 → 12 − V = 2V − 12 → **V_Th = 8.00 V**.
R_Th: zero both sources (each becomes a wire) → 4 ∥ 2 = 8/6 = **1.333 Ω**.
Reconnect R₃: I₃ = V_Th/(R_Th + R₃) = 8.00/(1.333 + 4) = 8.00/5.333 = **1.50 A** ✓
Norton: I_N = V_Th/R_Th = 8.00/1.333 = **6.00 A**, R_N = 1.333 Ω. Direct check of I_sc (A shorted to ground): 12/4 + 6/2 = 3 + 3 = 6.00 A ✓

**E. Dipole potential.** q = 2.0 nC, d = 1.0 mm ⇒ p = qd = (2.0×10⁻⁹)(1.0×10⁻³) = 2.0×10⁻¹² C·m. Find V at r = 5.0 cm, θ = 60°. (r/d = 50 ≫ 1, so the far-field formula is legitimate.)
V = kp cos θ/r² = (8.99×10⁹)(2.0×10⁻¹²)(0.500)/(0.050)² = (1.798×10⁻²)(0.500)/(2.50×10⁻³) = **3.6 V**.
At θ = 90° on the same sphere, V = 0 exactly.

**F. Dipole field, axial vs equatorial.** Same p, same r = 5.0 cm, r³ = 1.25×10⁻⁴ m³.
Axial: E = 2kp/r³ = 2(8.99×10⁹)(2.0×10⁻¹²)/(1.25×10⁻⁴) = 3.596×10⁻²/1.25×10⁻⁴ = **2.9×10² N/C**, parallel to p.
Equatorial: E = kp/r³ = **1.4×10² N/C**, antiparallel to p. Ratio exactly 2:1.

**G. Torque and energy of a dipole in a field.** p = 2.0×10⁻¹² C·m in a uniform E = 3.0×10⁵ N/C at θ = 30°.
τ = pE sin θ = (2.0×10⁻¹²)(3.0×10⁵)(0.500) = **3.0×10⁻⁷ N·m**, perpendicular to the p–E plane, turning p toward E.
U = −pE cos θ = −(2.0×10⁻¹²)(3.0×10⁵)(0.866) = **−5.2×10⁻⁷ J**.
Work to rotate to θ = 90°: W = ΔU = 0 − (−5.2×10⁻⁷) = **+5.2×10⁻⁷ J** must be supplied.
Net force = 0 throughout, because E is uniform.

**H. Capacitor with a dielectric, charge held constant.** Parallel plates A = 2.0×10⁻² m², d = 1.0 mm, air.
C₀ = ε₀A/d = (8.85×10⁻¹²)(2.0×10⁻²)/(1.0×10⁻³) = **1.77×10⁻¹⁰ F = 177 pF**.
Charged to V₀ = 100 V: Q = C₀V₀ = **1.77×10⁻⁸ C = 17.7 nC**; E₀ = V₀/d = 1.0×10⁵ V/m.
Disconnect the battery, insert a κ = 5.0 slab. Q is now fixed:
C = κC₀ = **885 pF**; V = Q/C = 1.77×10⁻⁸/8.85×10⁻¹⁰ = **20 V** (= V₀/κ ✓); E = E₀/κ = **2.0×10⁴ V/m**.
Energy before ½QV₀ = ½(1.77×10⁻⁸)(100) = 8.85×10⁻⁷ J; after ½QV = 1.77×10⁻⁷ J — energy **falls** by the factor κ, the difference being work done by the fringing field pulling the slab in. Susceptibility χ_e = κ − 1 = **4.0**.

## Commonly confused

- **Emf vs terminal voltage.** ε is the source's own work per coulomb and is fixed; V is what appears at the terminals and depends on current. *Test:* is current flowing? If I = 0, V = ε; otherwise V = ε − Ir < ε on discharge.
- **Zeroed voltage source vs zeroed current source.** Short circuit vs open circuit — complementary, and swapping them is the commonest superposition error. *Test:* ask what the dead element forces. Zero volts across it → a wire; zero amps through it → a break.
- **r = −slope vs r = −1/slope on a V–I graph.** *Test:* units. Slope of V against I is V/A = Ω, so r = −slope; a reciprocal would give Ω⁻¹.
- **Superposing currents vs superposing powers.** Currents and voltages superpose; powers do not. *Test:* is the quantity linear in the source strengths? P ∝ I² is not.
- **V_Th vs the node voltage with the load still attached.** V_Th is the **open-circuit** voltage: 8.00 V in example D, not the 6.00 V measured with R₃ in place. *Test:* did you delete the load before finding the voltage?
- **Axial vs equatorial dipole field.** Same 1/r³ law, but axial is twice as large and **parallel** to p; equatorial is **antiparallel**. *Test:* on the axis you are nearer one charge; on the bisector you are equidistant, so only the axis-parallel components survive, pointing +q → −q.
- **V = 0 does not mean E = 0.** On the equatorial plane V = 0 everywhere, yet E = kp/r³ ≠ 0. *Test:* E is the gradient of V — V can be zero on a surface while changing rapidly across it.
- **p = qd uses one charge, not both.** Magnitude = (magnitude of either charge) × separation, not 2qd. *Test:* the object is neutral overall, so "adding the two charges" is meaningless.
- **Physics vs chemistry dipole direction.** Physics: −q → +q. Chemistry: +q → −q. *Test:* in any PHY_102 answer use −q → +q, and say which convention you are using.
- **Dielectric at constant charge vs constant voltage.** Battery disconnected (Q fixed): V and E fall by κ, stored energy falls. Battery still attached (V fixed): Q rises by κ, E is unchanged, stored energy rises. *Test:* is the source still connected?
- **κ vs ε vs χ_e.** ε = κε₀ and χ_e = κ − 1. *Test:* κ is dimensionless and ≥ 1; ε carries F/m.
- **Net force vs net torque on a dipole.** Uniform field: force zero, torque generally non-zero. Aligned or anti-aligned in a *non-uniform* field: torque zero, force non-zero. *Test:* torque asks about orientation (sin θ); force asks about the field gradient.
