# PHY_102 — Week 4 Summary

*General Physics II · Week 4 (28 Sep–4 Oct 2026) · Topic: Analysis of DC Circuits, EMF & Electric Dipoles*

## The 8 most examinable things this week

1. **Real source of emf**: an emf ε in series with an **internal resistance r**. Terminal voltage **V = ε − Ir** — it *falls* as the load draws more current. An **ideal voltage source** has **r = 0** and holds V constant whatever the current.
2. **Ideal current source**: delivers a constant current whatever voltage appears across the load; its internal resistance is **infinite**. A **real** current source = ideal current source **in parallel** with a finite internal resistance. (Voltage source → r in *series*; current source → r in *parallel*.)
3. **Zeroing a source**: a dead/zeroed **voltage** source behaves as a **short circuit** (a plain wire); a zeroed **current** source behaves as an **open circuit** (a break). The two are complementary, and you need both for superposition.
4. **Method of superposition**: the current in any branch equals the **sum of the currents produced in that branch by each independent source acting alone, with all the others zeroed**; likewise for node voltages. Valid only for **linear elements** (ohmic resistors, ideal sources), and **never for power**.
5. **Thévenin / Norton**: any linear two-terminal network ≡ **V_Th in series with R_Th**, or **I_N in parallel with R_N**. **V_Th = open-circuit voltage**, **I_N = short-circuit current**, **R_Th = R_N = resistance looking into the terminals with all independent sources zeroed**, and **V_Th = I_N R_Th**.
6. **Kirchhoff and nodal analysis**: **KCL** ΣI_in = ΣI_out at a node (charge conservation); **KVL** ΣV = 0 round a closed loop (energy conservation). Nodal recipe: pick a reference node and set it to 0 V (usually the battery's negative terminal) → label V₁, V₂, … → apply **KCL at each remaining node** → solve.
7. **Electric dipole**: charges **+q and −q** a small distance **d** apart. **p = qd**, a **vector** of unit **C·m**, dimension **[M⁰L¹T¹I¹]**, directed **from −q to +q** (physics convention; Chemistry uses the opposite). Potential at (r, θ) from the centre, for r ≫ d: **V = (1/4πε₀)·p cos θ / r²** — so V = kp/r² **on the axis** and **V = 0 everywhere on the perpendicular bisector**.
8. **Dipole in a uniform field E**: net force **zero** (equal and opposite forces qE and −qE), but a **torque τ = pE sin θ**, i.e. **τ = p × E**, turning p into alignment with E. Potential energy **U = −p·E = −pE cos θ**. In a **non-uniform** field the net force is *not* zero.

## Formulas, definitions and constants (state these exactly)

**Sources of emf**
Ideal voltage source: constant V regardless of I; **r = 0**. Real: **V = ε − Ir** (V = terminal voltage, ε = emf in volts, I = output current, r = internal resistance in Ω). Plotting **V against I** gives a straight line of intercept **ε** and slope **−r**, so **r = −(slope)**; plotting I against V instead gives slope −1/r, i.e. r is then the *negative reciprocal* of the slope. Ideal current source: constant I regardless of V; **r = ∞**; real current source = ideal source **in parallel** with r.

**Dependent (controlled) sources** — four types, identified by what controls them: **VCVS, VCCS, CCVS, CCCS** (voltage- or current-controlled voltage or current source). They are drawn as diamonds, independent sources as circles. **Dependent sources are never zeroed** in superposition — only *independent* sources are.

**Series and parallel**
Series: the elements share a node with **nothing else attached**, so they carry the **same current**. **R_s = R₁ + R₂ + R₃ + …**
Parallel: both ends common, so the **same potential difference** across each. **1/R_p = 1/R₁ + 1/R₂ + …**, and for two, **R_p = R₁R₂/(R₁+R₂)**. R_p is always **smaller than the smallest** resistor in the group.

**Potential divider** (resistors in series carrying the same current I):
**V_i = V_total · R_i /(R₁+R₂+…)** — the **larger** resistance takes the **larger** share of voltage.

**Current divider** (two resistors in parallel sharing a current I):
**I₁ = I·R₂/(R₁+R₂)**, **I₂ = I·R₁/(R₁+R₂)** — note the **other** resistance sits on top; the **smaller** resistance takes the **larger** share of current.

**Kirchhoff's rules**
KCL (junction rule): **ΣI = 0** at a node, currents in positive, currents out negative — conservation of charge.
KVL (loop rule): **ΣV = 0** round any closed loop — conservation of energy. Sign convention: across a resistor, −IR if you traverse it *with* the assumed current, +IR against it; across a cell, +ε entering at − and leaving at +, −ε the other way. A negative answer means the assumed direction was backwards; the magnitude is still right.

**Superposition (method)**
I_branch = Σ (contribution of each independent source alone, others zeroed); V_node = Σ (contribution of each source alone). Contributions **add as signed quantities** — they can subtract. Because **P = I²R is quadratic**, powers may **not** be superposed.

**Thévenin and Norton**
V_Th = open-circuit terminal voltage; R_Th = terminal resistance with independent voltage sources shorted and current sources opened; Norton: I_N = short-circuit current, R_N = R_Th, **V_Th = I_N R_Th**. Applicable **only to linear networks** — the theorems are stated without proof, and are the standard way to handle a "black box" whose internals are unknown.

**Electric dipole**
**p = q d**, direction **−q → +q**, unit **C·m**. The line through both charges is the **dipole axis**; the midpoint is the **centre**.
Potential (r ≫ d, θ measured from p at the centre): **V = (1/4πε₀)·(p cos θ)/r²**. θ = 0° → **V = kp/r²**; θ = 90° → **V = 0**.
Field on the **axis** (r ≫ d): **E_axial = (1/4πε₀)·2p/r³ = 2kp/r³**, directed **parallel to p**.
Field on the **perpendicular bisector / equatorial plane** (r ≫ d): **E_eq = (1/4πε₀)·p/r³ = kp/r³**, directed **antiparallel to p** (the vertical components of E₊ and E₋ cancel, the components along the axis add).
So at equal r, **E_axial = 2 E_eq**, and both fall off as **1/r³** — faster than a point charge's 1/r², because the two charges nearly cancel at large distance.
Exact forms (with a = d/2): axial **E = k·2pr/(r²−a²)²**; equatorial **E = kp/(r²+a²)^{3/2}**.

**Dipole in an external field**
Uniform E: **F_net = qE + (−q)E = 0**; **τ = qE · d sin θ = pE sin θ**, vectorially **τ = p × E**, direction perpendicular to the plane of p and E (out of the page for the standard diagram). τ = 0 when **θ = 0°** (stable, U = −pE minimum) and **θ = 180°** (unstable, U = +pE maximum). **U = −pE cos θ**, and the work done by an external agent turning p from θ₁ to θ₂ is **W = pE(cos θ₁ − cos θ₂) = ΔU**.
Non-uniform E: net force **≠ 0** (the two charges sit in different field strengths), plus a torque.

**Physical significance**
**Polar molecules** have a permanent net dipole moment (HCl, NaOH, H₂O) — the centres of positive and negative charge do not coincide — and **align with an applied field**. **Non-polar molecules** (CO₂, O₂, CH₄) have individual moments that cancel, so **p = 0**. Dipole moment fixes the geometry and orientation of a molecule in 3-D.

**From the week's Summary sheet (EMF and dielectrics)**
EMF is what maintains a steady current in a circuit; sources include batteries, generators and solar cells; it is measured with a **voltmeter** (connected **in parallel**, high resistance). A **dielectric** is a non-conducting material placed between capacitor plates: it **polarises**, which **reduces the field between the plates**, **increases the capacitance** (**C = Q/V**, unit farad) and **prevents short circuits / dielectric breakdown**. Relative permittivity: air ≈ **1.0006**, glass ≈ **7.0**. **Electric susceptibility** measures how easily a dielectric polarises.

## Worked example 1 — series/parallel reduction and terminal voltage

A battery of emf **20 V** and internal resistance **1.0 Ω** supplies a **6.0 Ω** resistor in series with a parallel pair, **4.0 Ω** and **12 Ω**. Find the current drawn, the terminal voltage and the current in each parallel branch.

1. Parallel pair first (innermost group): R_p = (4.0)(12)/(4.0+12) = 48/16 = **3.0 Ω**. Note it is smaller than 4.0 Ω, as it must be.
2. Total resistance of the loop: R = r + 6.0 + R_p = 1.0 + 6.0 + 3.0 = **10.0 Ω**.
3. Current from the battery: I = ε/R = 20/10.0 = **2.0 A**.
4. Terminal voltage: V = ε − Ir = 20 − (2.0)(1.0) = **18 V**. (Check: the *external* network takes 2.0 × 9.0 = 18 V. ✓)
5. Across the parallel pair: V_p = I R_p = 2.0 × 3.0 = **6.0 V** — the *same* 6.0 V across both branches.
6. Branch currents: I₄ = 6.0/4.0 = **1.5 A**, I₁₂ = 6.0/12 = **0.50 A**. They sum to 2.0 A ✓.

## Worked example 2 — potential divider and current divider

(a) A **24 V** supply is across **4.0 Ω** in series with **8.0 Ω**. Find the p.d. across the 8.0 Ω.
V₈ = 24 × 8.0/(4.0+8.0) = 24 × 2/3 = **16 V** (and V₄ = 8.0 V; they sum to 24 V). The **larger** resistor takes the **larger** voltage.

(b) A current of **3.0 A** enters a parallel pair, **2.0 Ω** and **6.0 Ω**. Find each branch current.
I₂ = 3.0 × 6.0/(2.0+6.0) = **2.25 A**; I₆ = 3.0 × 2.0/8.0 = **0.75 A**. Sum = 3.0 A ✓.
Check by voltage: 2.25 × 2.0 = 4.5 V and 0.75 × 6.0 = 4.5 V — equal, as parallel demands. The **smaller** resistor takes the **larger** current, which is why the *other* resistance appears on top in the divider.

## Worked example 3 — Kirchhoff loop analysis (two loops)

Two batteries are connected in parallel across a common resistor. Branch 1: emf **12 V** with **3.0 Ω**. Branch 2: emf **8.0 V** with **2.0 Ω**. Both feed **R₃ = 2.0 Ω** between the same two nodes. Find all three currents.

1. Assume I₁ and I₂ flow **into** the top node and I₃ flows **down** through R₃.
2. **KCL**: I₁ + I₂ = I₃.
3. **KVL, loop of branch 1 and R₃**: 12 = 3.0 I₁ + 2.0 I₃.
4. **KVL, loop of branch 2 and R₃**: 8.0 = 2.0 I₂ + 2.0 I₃.
5. Substitute I₃ = I₁ + I₂: 12 = 5.0 I₁ + 2.0 I₂ … (i); 8.0 = 2.0 I₁ + 4.0 I₂, i.e. 4.0 = I₁ + 2.0 I₂ … (ii).
6. From (ii), I₁ = 4.0 − 2.0 I₂. Into (i): 5(4.0 − 2.0 I₂) + 2.0 I₂ = 12 → 20 − 8.0 I₂ = 12 → **I₂ = 1.0 A**.
7. So **I₁ = 2.0 A** and **I₃ = 3.0 A**.
8. Check the node voltage: V across R₃ = 3.0 × 2.0 = 6.0 V; branch 1 gives 12 − 3.0(2.0) = 6.0 V ✓; branch 2 gives 8.0 − 2.0(1.0) = 6.0 V ✓. All three agree, which is the sign that the algebra is right.

## Worked example 4 — the same circuit by superposition

1. **8.0 V source zeroed** → replace it by a **wire**, leaving its 2.0 Ω in place. The 12 V source then sees 3.0 Ω in series with (2.0 ∥ 2.0 = 1.0 Ω) = 4.0 Ω, so it drives 12/4.0 = 3.0 A. Equal parallel resistances split it equally: **1.5 A down through R₃**, 1.5 A back through the 2.0 Ω of branch 2.
2. **12 V source zeroed** → replace it by a wire. The 8.0 V source sees 2.0 Ω in series with (3.0 ∥ 2.0 = 1.2 Ω) = 3.2 Ω, so it drives 8.0/3.2 = 2.5 A. Current divider: through R₃, 2.5 × 3.0/(3.0+2.0) = **1.5 A**; through the 3.0 Ω of branch 1, 2.5 × 2.0/5.0 = 1.0 A.
3. **Superpose, with signs.** In R₃ both contributions point downward: I₃ = 1.5 + 1.5 = **3.0 A** ✓. In branch 1 they oppose: I₁ = 3.0 − 1.0 = **2.0 A** ✓. In branch 2 they oppose: I₂ = 2.5 − 1.5 = **1.0 A** ✓.
4. **Do not superpose power**: the true power in R₃ is I₃²R₃ = 9 × 2.0 = 18 W, *not* 1.5²(2.0) + 1.5²(2.0) = 9 W.

## Worked example 5 — Thévenin equivalent of the same circuit

Find the Thévenin equivalent seen by R₃, then recover I₃.

1. **Remove R₃** (open circuit). The two batteries now sit in one loop, opposing: circulating current = (12 − 8.0)/(3.0 + 2.0) = **0.80 A**, flowing out of the 12 V source.
2. **V_Th** = open-circuit voltage across the terminals = 12 − (0.80)(3.0) = **9.6 V**. (Check from the other side: 8.0 + (0.80)(2.0) = 9.6 V ✓.)
3. **R_Th** = resistance at those terminals with both emfs **shorted** = 3.0 ∥ 2.0 = (3.0)(2.0)/5.0 = **1.2 Ω**.
4. Reconnect R₃: I₃ = V_Th/(R_Th + R₃) = 9.6/(1.2 + 2.0) = 9.6/3.2 = **3.0 A** ✓ — the same answer as Kirchhoff and superposition.
5. **Norton form**: I_N = V_Th/R_Th = 9.6/1.2 = **8.0 A** in parallel with **1.2 Ω** — the short-circuit current you would measure across the open terminals.

## Worked example 6 — dipole moment

Charges **+4.0 nC** and **−4.0 nC** are held **5.0 mm** apart. Find the dipole moment.

1. Convert: q = 4.0×10⁻⁹ C, d = 5.0×10⁻³ m.
2. p = qd = (4.0×10⁻⁹)(5.0×10⁻³) = **2.0×10⁻¹¹ C·m**.
3. Direction: **from the −4.0 nC charge toward the +4.0 nC charge**, along the axis.
4. Use **one** charge, not the sum: the net charge is zero, but p is *not*. (For comparison, an electron and proton 1.0 Å apart give p = (1.6×10⁻¹⁹)(1.0×10⁻¹⁰) = 1.6×10⁻²⁹ C·m — the molecular scale.)

## Worked example 7 — torque and potential energy in a uniform field

A dipole of moment **p = 1.0×10⁻¹⁰ C·m** is held at **30°** to a uniform field **E = 2.0×10⁵ N/C**.

1. Net force: **zero** — the field is uniform, so qE and −qE cancel exactly.
2. Torque: τ = pE sin θ = (1.0×10⁻¹⁰)(2.0×10⁵)(sin 30° = 0.500) = **1.0×10⁻⁵ N·m**, turning p toward E, directed perpendicular to the plane containing p and E.
3. Potential energy: U = −pE cos θ = −(1.0×10⁻¹⁰)(2.0×10⁵)(0.866) = **−1.73×10⁻⁵ J**.
4. Work by an external agent to turn it to 90°: W = U(90°) − U(30°) = 0 − (−1.73×10⁻⁵) = **+1.73×10⁻⁵ J**.
5. Work to flip it right over, 0° → 180°: W = pE(cos 0 − cos 180°) = 2pE = 2(1.0×10⁻¹⁰)(2.0×10⁵) = **4.0×10⁻⁵ J**. At 0° the torque is zero and the energy is a **minimum** (stable); at 180° the torque is again zero but the energy is a **maximum** (unstable — the least nudge flips it).

## Worked example 8 — field and potential of a dipole, on axis and on the bisector

The same dipole, p = **1.0×10⁻¹⁰ C·m**, d = 2.0 cm. Find E and V at **r = 0.50 m** from the centre (r ≫ d, so the far-field forms apply). Take k = 8.99×10⁹ N·m²/C².

1. kp = (8.99×10⁹)(1.0×10⁻¹⁰) = 0.899 N·m²/C; r² = 0.250 m², r³ = 0.125 m³.
2. **On the axis**: E = 2kp/r³ = 2(0.899)/0.125 = **14 N/C**, directed **along p** (from −q toward +q).
3. **On the perpendicular bisector**: E = kp/r³ = 0.899/0.125 = **7.2 N/C**, directed **opposite to p** — exactly half the axial value, because on the bisector the components perpendicular to the axis cancel and only the (smaller) parallel components survive.
4. **Potential on the axis** (θ = 0°): V = kp cos 0/r² = 0.899/0.250 = **3.6 V**.
5. **Potential on the bisector** (θ = 90°): cos 90° = 0, so **V = 0** — every point of the bisector is equidistant from +q and −q, so their potentials (a *scalar* sum) cancel exactly.
6. **At θ = 60°**: V = 3.6 × cos 60° = **1.8 V**.
7. Sanity check on the exponents: V ∝ 1/r², E ∝ 1/r³ — one power of r *faster* than a single point charge (V ∝ 1/r, E ∝ 1/r²), because at large r the two opposite charges very nearly cancel.

## Commonly confused

- **emf vs terminal voltage**: ε is fixed by the chemistry of the cell; V = ε − Ir is what the external circuit actually receives, and it drops as I rises. They are equal **only** when I = 0 (open circuit) or r = 0 (ideal source).
- **Which source gets which internal resistance**: voltage source → r in **series**, ideal when **r = 0**; current source → r in **parallel**, ideal when **r = ∞**. Swapping these is the single most punished slip in this topic.
- **Zeroed voltage vs zeroed current source**: dead voltage source → **short** (wire), dead current source → **open** (gap). "Zeroed" never means "delete the branch and its resistor" — the internal resistance stays.
- **Superposing power**: currents and voltages superpose; **power does not**, because P = I²R is not linear. Add the currents first, then square.
- **Current divider written upside down**: the current in R₁ is I·R₂/(R₁+R₂) — the *other* resistance on top. If your bigger resistor came out with the bigger current, you have inverted it. In the **potential** divider the resistor's *own* value goes on top.
- **"They look in series on the diagram"**: series requires that *no third branch* joins between the two elements. Two resistors drawn end to end with a wire tapping off between them are **not** in series.
- **R_p bigger than its parts**: a parallel combination is always **smaller than the smallest** member. If 4 Ω ∥ 12 Ω came out above 4 Ω, you forgot to invert 1/R_p.
- **Net charge vs dipole moment**: a dipole has **zero net charge** but a **non-zero** p = qd. Use *one* charge in p = qd, not 2q.
- **Direction convention**: in **physics** p points **−q → +q**; in **chemistry** the arrow is drawn the other way. Exam answers here follow physics.
- **V = 0 does not mean E = 0**: on the perpendicular bisector the potential cancels (scalars, equal and opposite) but the field does **not** (vectors whose axial components add). Conversely E can be zero where V is not.
- **sin θ vs cos θ**: torque uses **sin θ** (maximum at 90°, zero when aligned); potential energy and potential use **cos θ** (extreme when aligned, zero at 90°). Mixing them costs the whole mark.
- **Torque zero ⇒ equilibrium, not stability**: θ = 0° and θ = 180° both give τ = 0. Only θ = 0° is stable (U = −pE, minimum).
- **Uniform vs non-uniform field**: net force on a dipole is zero **only** in a uniform field. In a non-uniform field it is dragged toward the stronger region as well as being turned.
- **1/r² vs 1/r³**: dipole **potential** ∝ 1/r², dipole **field** ∝ 1/r³, and the axial field is **twice** the equatorial field at the same r. Using kp/r² for a field is the standard error.

*Note: the slide decks for this week state the learning objectives (identifying dependent sources, identifying series and parallel elements, superposition and equivalent circuits, the dipole field and potential) but carry much of the actual working in slide images that the text extractor dropped — the torque derivation arrives garbled as "τ = 2 q an E sinθ" (it should read τ = 2qa·E sin θ = pE sin θ with d = 2a), the equations for the axial and equatorial dipole fields are never written out, potential energy U = −pE cos θ is not stated at all, and the "mid-lesson question" on 3-phase inverter line voltage belongs to a power-electronics course rather than to this one and can be ignored. The formulas, worked reductions, divider rules, Kirchhoff/Thévenin treatment and dipole field results above are the standard 100-level treatment, consistent with the named references (Halliday & Resnick; Young & Freedman; Sanny, Ling & Moebs).*
