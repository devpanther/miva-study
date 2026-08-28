# PHY_102 — Week 4 Summary

*General Physics II · Week 4 (28 Sep – 4 Oct 2026) · Topic: Analysis of DC Circuits & Electric Dipoles*

## The 8 most examinable things this week

1. **Ideal vs real sources**: an **ideal voltage source** holds a constant voltage across the load *whatever current is drawn* — internal resistance **r = 0**, in **series**. An **ideal current source** delivers a constant current *whatever voltage develops* across the load — internal resistance **r = ∞**, in **parallel**. Real sources sag: a real cell's terminal voltage falls as I rises; a real current source's output current falls as the load voltage rises.
2. **The zeroing rules (memorise the pair)**: a **dead/zeroed voltage source behaves as a short circuit** (a plain wire — both of its sides sit at the same potential); a **zeroed current source is replaced by an open circuit**. The two are **complementary**, and getting them the wrong way round destroys every superposition answer.
3. **Method of superposition**: *the current in any branch equals the sum of the currents produced in that branch by each individual independent source acting alone, with all the others zeroed; the voltage at any node equals the sum of the voltages produced at that node by each source alone.* Superpose **currents and voltages** — never powers.
4. **Thévenin and Norton**: any linear two-terminal network ("**black box**") can be replaced by an equivalent source plus a resistor — **V_Th in series with R_Th** (Thévenin) or **I_N in parallel with R_N** (Norton), with **R_Th = R_N** and **V_Th = I_N R_N**. Stated **without proof**, and valid **only for networks of linear elements** (voltage sources and resistors). Useful even when the diagram *is* known, as a way of reducing complexity.
5. **Nodal analysis (method of node voltages)**: a variation on Kirchhoff's rules that needs **only KCL**. Four-step recipe: **(i)** choose a reference node and set it to zero volts (arbitrary, but conventionally the node joined to the negative terminal of the source); **(ii)** assign V₁, V₂, … to the remaining nodes; **(iii)** apply **KCL** at each; **(iv)** solve the simultaneous equations.
6. **Electric dipole**: a pair of equal and opposite charges **+q and −q separated by a small distance d**; midpoint = **centre of the dipole**; the line through the charges = **axis of the dipole**. **Dipole moment p = qd**, a **vector directed from −q to +q** (physics convention; **chemistry uses the reverse**). Unit **coulomb-metre (C·m)**; dimensional formula **[M⁰L¹T¹I¹]**.
7. **Potential of a dipole** at distance r from the centre, at angle θ to the axis (r ≫ d): **V = (1/4πε₀)·(p cos θ)/r²**. At **θ = 0° (on the axis): V = (1/4πε₀)p/r²**, the maximum. At **θ = 90° (equatorial plane): V = 0** — yet **E is not zero there**; on the perpendicular bisector the two fields' components perpendicular to the axis cancel and the resultant points **opposite to p**.
8. **Dipole in a uniform external field**: forces +qE and −qE give **net force zero** but act at different points, so there is a **torque τ = pE sin θ**, i.e. **τ = p × E**, which turns p into alignment with E (**τ = 0 when p ∥ E**). Because the net force vanishes, the torque is **independent of the origin** taken. In a **non-uniform** field there is also a **net force**, even when the torque is zero.

## Definitions, statements and constants (state these exactly)

**Voltage sources.** Ideal: constant terminal voltage regardless of load current; r = 0. Real: beyond a certain current the terminal voltage falls, an effect attributed to an **effective internal resistance r in series with the battery's emf**. Measuring r: plot **terminal voltage V (y) against output current I (x)** in the non-ideal region — the line is **V = ε − Ir**, so **r = −(slope)** and ε is the intercept. *(The lecture slide says r is "the negative reciprocal of the slope" — that is only true for the reversed plot of I against V. On a V-vs-I plot the slope is −r itself; use r = −ΔV/ΔI.)*

**Current sources.** Ideal: constant current regardless of load voltage; r = ∞. Real: models as an **ideal current source in parallel with an internal resistance**; the delivered current falls once the load voltage rises past a point. Real current sources are much less common than real voltage sources — built from a voltage source with a **large series resistor**, or from a transistor/IC circuit, usually met as a special power supply.

**Zeroed sources.** Dead voltage source → **short circuit**; zeroed current source → **open circuit**; "in a sense complementary".

**What circuit analysis is.** Solving for all unknown circuit parameters: the **currents in the branches**, the **voltages at the nodes**, the **effective resistances between nodes**, or combinations of these.

**Electric dipole moment.** |p| = q × d — the product of *either* charge with the distance between them (not of both charges added). Polar molecules (HCl, NaOH) have a net dipole moment and **align with an external field**; non-polar molecules (CO₂, O₂, methane) have individual moments that **cancel**, because the centres of positive and negative charge coincide, so p = 0. The dipole moment fixes the **geometry and orientation of a compound in 3-D space**.

**Torque derivation.** Separation written as 2a (so p = q·2a = qd): τ = (force) × (perpendicular arm) = **qE × 2a sin θ = 2qaE sin θ = pE sin θ**, direction normal to the plane containing p and E. *(The slide's "τ = 2 q an E sinθ" is an OCR mangling of 2qaE sin θ.)*

**Constants.** 1/4πε₀ = **8.99×10⁹ N·m²/C²**; ε₀ = **8.85×10⁻¹² C²/(N·m²)**.

## Worked example 1 — one circuit, three methods (superposition)

A 12 V source with 4 Ω in series, and a 6 V source with 2 Ω in series, both feed a common top node; a 3 Ω resistor runs from that node to the common (zero) node. Find the current in the 3 Ω branch.

1. **12 V alone** (6 V source *shorted*): 3 Ω ∥ 2 Ω = 6/5 = 1.2 Ω; total = 4 + 1.2 = 5.2 Ω; source current = 12/5.2 = 2.31 A; node voltage = 2.31 × 1.2 = 2.77 V; so I₃′ = 2.77/3 = **0.923 A** (down).
2. **6 V alone** (12 V source *shorted*): 3 Ω ∥ 4 Ω = 12/7 = 1.714 Ω; total = 2 + 1.714 = 3.714 Ω; source current = 6/3.714 = 1.615 A; node voltage = 1.615 × 1.714 = 2.77 V; I₃″ = **0.923 A** (down).
3. Same direction, so **I₃ = 0.923 + 0.923 = 1.85 A** (exactly 24/13 A).

## Worked example 2 — the same circuit by nodal analysis

1. Take the bottom rail as reference (0 V) — it is the node joined to the negative terminals. One unknown node voltage V.
2. **KCL at the node** (all currents taken as leaving): V/3 + (V − 12)/4 + (V − 6)/2 = 0.
3. ×12: 4V + 3V − 36 + 6V − 36 = 0 → 13V = 72 → **V = 5.54 V**.
4. I₃ = V/3 = 5.54/3 = **1.85 A** ✓ — agrees with superposition, as it must. Note that **only KCL was used**: KVL is satisfied automatically once each node carries a single potential.

## Worked example 3 — the same circuit by Thévenin and Norton

Look back into the network from the two ends of the 3 Ω resistor, with that resistor removed.

1. **V_Th (open-circuit voltage)**: with 3 Ω gone, one current circulates from the 12 V source through 4 Ω and 2 Ω into the 6 V source: I = (12 − 6)/(4 + 2) = 1.0 A. Node voltage = 12 − (1.0)(4) = **8.0 V** (check: 6 + (1.0)(2) = 8.0 V ✓).
2. **R_Th**: zero both voltage sources (**short** each), leaving 4 Ω ∥ 2 Ω = **1.33 Ω**.
3. Reconnect the load: I₃ = V_Th/(R_Th + 3) = 8.0/(1.33 + 3) = 8.0/4.33 = **1.85 A** ✓.
4. **Norton form**: I_N = V_Th/R_Th = 8.0/1.33 = **6.0 A** in parallel with **1.33 Ω**; current divider gives I₃ = 6.0 × 1.33/(1.33 + 3) = **1.85 A** ✓. Three methods, one answer.

## Worked example 4 — internal resistance of a real source from two readings

A supply reads V = 11.6 V at I = 2.0 A and V = 11.0 V at I = 5.0 A.

1. Slope = (11.0 − 11.6)/(5.0 − 2.0) = −0.60/3.0 = **−0.20 V/A**, so **r = 0.20 Ω**.
2. Intercept: ε = V + Ir = 11.6 + (2.0)(0.20) = **12.0 V** (check: 11.0 + 5.0 × 0.20 = 12.0 V ✓).
3. Taking the "negative reciprocal" instead would give r = 5.0 Ω — 25× too big, and inconsistent with ε = V + Ir.

## Worked example 5 — a real current source under load

An ideal 10 mA source in parallel with r = 100 kΩ drives a load R.

1. Current divider: I_load = I_s · r/(r + R). With R = 1 kΩ: I_load = 10 × 100/101 = **9.90 mA**, essentially ideal; V_load = 9.9 V.
2. With R = 50 kΩ: I_load = 10 × 100/150 = **6.67 mA**, and V_load = 6.67 mA × 50 kΩ = **333 V**. The current has sagged because the load voltage rose — exactly the real-source behaviour, and it is why an **ideal** current source needs **r = ∞**.

## Worked example 6 — dipole potential and torque

Charges +2.0 nC and −2.0 nC separated by d = 4.0 mm.

1. **p = qd** = (2.0×10⁻⁹)(4.0×10⁻³) = **8.0×10⁻¹² C·m**, directed from −q to +q.
2. Potential at r = 0.20 m, θ = 60°: V = (8.99×10⁹)(8.0×10⁻¹²)(cos 60°)/(0.20)² = (8.99×10⁹)(8.0×10⁻¹²)(0.500)/0.0400 = **0.90 V**.
3. On the axis (θ = 0°): V = **1.80 V** — twice as large, the maximum. On the equatorial plane (θ = 90°): **V = 0**, at every distance.
4. Place the dipole in a uniform E = 5.0×10⁵ N/C at θ = 30°: **net force = 0**; τ = pE sin θ = (8.0×10⁻¹²)(5.0×10⁵)(0.500) = **2.0×10⁻⁶ N·m**.
5. Maximum torque at θ = 90°: τ_max = pE = **4.0×10⁻⁶ N·m**; τ = 0 at θ = 0° and θ = 180°, but only θ = 0° (p aligned with E) is the position the torque drives it towards.

## Commonly confused

- **Zeroing a voltage source vs a current source**: dead voltage source → **wire (short)**; zeroed current source → **break (open)**. Swapping them is the single most destructive error in superposition. Sanity check: a source with zero volts across it can be replaced by anything with zero volts across it — a wire; a source pushing zero amps can be replaced by anything carrying zero amps — a gap.
- **r = 0 vs r = ∞**: **ideal voltage** source has **zero** internal resistance **in series**; **ideal current** source has **infinite** internal resistance **in parallel**. The models are duals, not variants of one another.
- **Superposing powers**: currents and voltages superpose; **power does not**, because P = I²R is quadratic. Add the branch currents first, *then* square.
- **"Negative reciprocal of the slope"**: on a **V-vs-I** plot the gradient **is −r** (as in Week 3). The reciprocal form belongs to the I-vs-V plot. Check your number against ε = V + Ir before trusting it.
- **Thévenin resistance is not the sum of the resistances**: zero the sources first, then combine what is left as seen from the terminals — here 4 ∥ 2 = 1.33 Ω, not 6 Ω.
- **Linearity is a precondition**: superposition, Thévenin and Norton apply **only to linear elements** (voltage sources, resistors). A diode or any non-linear element voids them.
- **Direction of p**: **−q to +q in physics**, the opposite in chemistry. An exam answer that says "positive to negative" without naming the chemistry convention is marked wrong.
- **p = qd, not 2qd**: use *either* charge, times the *full* separation. When the separation is written 2a, p = q(2a) — the 2 is already inside d.
- **V = 0 on the equatorial plane does not mean E = 0**: the **potential** is a scalar sum and the two equal-and-opposite contributions cancel there; the **field** is a vector sum, and there the components perpendicular to the axis cancel while the components along the axis add, giving a resultant **antiparallel to p**.
- **Zero net force ≠ zero torque**: in a uniform field the dipole feels **no net force but a real torque**. In a non-uniform field it feels a **net force**, and that force survives even in the p ∥ E and p ∥ −E positions where the torque is zero.
- **Both τ = 0 positions are not equivalent**: p parallel to E is the stable alignment the torque drives towards; p antiparallel is the unstable one — the source lists both as zero-torque cases, which is true but not the whole story.
- **Non-polar does not mean uncharged**: CO₂ and O₂ contain charges; their **individual dipole moments cancel** because the centres of positive and negative charge coincide, giving p = 0.
- **Off-syllabus mid-lesson item**: the slide's 3-phase 120° VSI question expects V_line = V_DC/√2 = 0.707 × 24 = **16.97 V**. It belongs to power electronics, not DC circuit analysis — learn the number, do not look for physics in it.
