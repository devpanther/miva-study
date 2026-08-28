# PHY_102 — Week 3 Summary

*General Physics II · Week 3 (21–27 Sep 2026) · Topic: Electromotive Force & Energy in Electric Fields (week summary sheet: Conductors and Insulators)*

## The 8 most examinable things this week

1. **Definition of emf**: the **work done per unit charge** by a source in driving charge round the circuit — ε = W/Q, unit the **volt** (1 V = 1 J/C). It is an *energy per coulomb*, **not a force**, despite the name.
2. **ε = V + Ir** and equivalently **ε = I(R + r)**, so **V = ε − Ir** and **I = ε/(R + r)**. The term **Ir** is the "**lost volts**" dropped across the internal resistance.
3. **emf ≠ terminal potential difference.** They are equal **only when no current flows** (open circuit, or a voltmeter of infinite resistance). Once the switch is closed, V < ε, and V falls further as R falls and I rises.
4. **The V–I experiment**: vary R, plot **V against I**. Straight line, **intercept on the V-axis = ε**, **gradient = −r**. Disconnect the cell between readings so it does not drain.
5. **Dimensions of emf**: **[M¹ L² T⁻³ I⁻¹]** — work [M L² T⁻²] divided by charge [I T].
6. **Motional emf**: **ε = Bvl** for a rod of length *l* moving at speed *v* perpendicular to a field *B*; flux enclosed Φ_B = Blx. **Faraday's law**: **ε = −N dΦ_B/dt**; the minus sign (Lenz) says the induced emf **opposes the change** that caused it.
7. **Energy stored in a capacitor**: **U = ½CV² = ½QV = Q²/2C**, joules, with **Q = CV**. For a parallel-plate capacitor **C = ε₀A/d** (**C = Kε₀A/d = εA/d** with a dielectric) and **V = Ed**.
8. **Energy density of an electric field**: **u_E = ½ε₀E²**, in **J/m³** — *energy per unit volume*, not a total energy. For a parallel-plate capacitor **U = ½ε₀E²(Ad)**, where *Ad* is the volume between the plates.

## Formulas, definitions and constants (state these exactly)

**Electromotive force (definition)**
ε = W/Q — the energy (in joules) supplied by the source to each coulomb of charge passed through it. Unit: **volt (V) = J/C**. Symbol ε (or ϵ). A source of emf converts some other form of energy (chemical in a cell, mechanical in a generator) into electrical energy; one terminal becomes positive, the other negative.

**Terminal potential difference**
V — the voltage measured **across the terminals while the circuit is switched on**. Also V = IR for the external resistance. **ε = V + Ir**, so **V = ε − Ir < ε whenever current flows**; V = ε only when I = 0.

**Circuit equations**
ε = I(R + r), I = ε/(R + r), V = IR = ε − Ir. Here **R** = external (load) resistance, **r** = **internal resistance** of the cell (Ω).
**Power**: εI = I²R + I²r — the source delivers εI watts in total, I²R to the load and **I²r wasted inside the cell** as heat.
**Short circuit** (R → 0): I_max = ε/r and **V → 0** — the whole emf is lost internally.

**Determining ε and r experimentally**
Vary a variable resistor; as R increases, I decreases. Plot **V (y-axis) against I (x-axis)**: from V = ε − Ir this is a straight line of **gradient −r** and **V-intercept ε** (the voltage at which the current is zero). More R-values give more points and a more reliable fit; repeat readings, and disconnect the cell between readings because a draining cell has a rising r.

**Dimensions of emf**
ε = work × [charge]⁻¹. Work = force × displacement = [M][L T⁻²][L] = **[M¹ L² T⁻²]**. Charge = current × time = **[I¹ T¹]**. Therefore ε = [M L² T⁻²][I T]⁻¹ = **[M¹ L² T⁻³ I⁻¹]**.

**Can emf be negative?** Yes. A back-emf (e.g. from an inductor, or the emf of a cell being charged) opposes the driving source, so it is entered into the circuit equation with a negative sign.

**Motional emf**
A rod of length *l* on rails in a uniform field *B* perpendicular to the plane, moving at constant speed *v*: the enclosed flux is **Φ_B = Blx** with x the rod's position. A free charge q in the rod experiences the **Lorentz force F = qvB** along the rod; the work done in carrying it from one end to the other is **W = qBvl**, so
**ε = W/q = Bvl** (with a minus sign only to fix the direction).
Consequences: current **I = Bvl/R**, retarding force on the rod **F = BIl**, and mechanical power **Fv = I²R** — the pushing agent, not the magnetic field, supplies the energy.

**Faraday's law of induction**
Any change in the magnetic flux through a coil induces an emf in it, proportional to minus the rate of change of flux:
**ε = −N dΦ_B/dt**, with N the number of turns and Φ_B = BA cos θ (weber, Wb). Applications named: **transformers** (electricity transmission on the Nigerian national grid), **generators and motors**, hydroelectric dams, and the **electromagnetic flowmeter** — a conductive liquid flowing through a magnetic field induces a voltage proportional to the average flow velocity, picked up by sensing electrodes; it has no moving parts, suits wastewater and dirty conductive liquids, and does **not** work with hydrocarbons, distilled water or non-aqueous liquids.

**Capacitance and stored energy**
**C = Q/V** (farad, F = C/V). Parallel plates: **C = ε₀A/d** in vacuum, **C = εA/d = Kε₀A/d** with a dielectric of permittivity ε and **dielectric constant K = C/C₀**, where A is the plate area (m²) and d the separation (m). **ε₀ = 8.85×10⁻¹² F/m** (= C²/N·m²).
Charging a capacitor requires **external work**: the battery moves electrons from the positive plate to the negative plate against the growing field. Because V rises from 0 to its final value as charge accumulates, the *average* voltage is V/2, so the stored **electric potential energy** is
**U = ½CV² = ½QV = Q²/2C** (joules), with **Q = CV**.
The battery does **W = QV** in total — twice the stored energy — the other half being dissipated in the circuit resistance. Chemical energy → electrostatic potential energy; discharging returns it.

**Uniform field and energy density**
Between parallel plates the field is uniform, so **V = Ed** and **E = V/d** (N/C = V/m). Substituting C = ε₀A/d and V = Ed into U = ½CV²:
**U = ½ε₀E²(Ad)**, where **Ad = volume between the plates**.
Hence the **energy density** (energy per unit volume stored in the field itself) is
**u_E = ½ε₀E²**, unit **J/m³** — with a dielectric, **u_E = ½εE² = ½Kε₀E²**.
Energy is stored *in the field*, so it persists even in empty space between the plates.

**Dielectrics and breakdown**
Faraday (1837) found that filling the gap with an insulator raises the capacitance by the factor **K**, the **dielectric constant**: K = 1 exactly in vacuum, slightly above 1 for air, larger for mineral oil, plastic, etc. A dielectric also imposes a maximum working voltage, the **breakdown potential V_max**; exceed it substantially and the material breaks down and forms a conducting path between the plates. The corresponding field limit is the material's **dielectric strength** (V/m) — the largest field it can tolerate without breaking down.
With the **battery still connected** (V fixed): C → KC, Q → KQ, E unchanged, **U → KU** (the battery supplies the extra energy).
With the **battery disconnected** (Q fixed): C → KC, V → V/K, E → E/K, **U → U/K**.

**Capacitors in combination**: parallel **C = C₁ + C₂ + …** (larger than the largest single one); series **1/C = 1/C₁ + 1/C₂ + …**. Since U = ½CV² at a given supply voltage, **a parallel set stores the most energy**.

**Application — the defibrillator**: a battery charges a capacitor to a high voltage, storing energy slowly at modest power; conducting paddles are placed on the chest and closing the switch discharges a portion of that stored energy through the patient in a few milliseconds, so the *power* delivered is enormous even though the *energy* is moderate.

**Conductors and insulators** (from the week's summary sheet)
**Conductors** allow charge to flow: they have **free (delocalised) electrons** moving from atom to atom, **low resistivity**, and — in electrostatic equilibrium — **zero electric field inside** the material, because the free charges rearrange until any internal field is cancelled. Uses: wiring, thermometers, food-storage foil, vehicle engines.
**Insulators** resist the flow of charge: **no free electrons**, **high resistivity**, and they also block the passage of heat and sound. Examples: glass, plastic, rubber. The three basic differences to quote: **electron mobility, presence or absence of an internal electric field, and whether the material facilitates or resists current**. Raising the temperature generally *decreases* the conductivity of a metal and *increases* that of a semiconductor/insulator — a safety consideration.

## Worked examples

### Worked example 1 — emf, terminal voltage and internal resistance

A cell of emf 12 V and internal resistance 2.0 Ω is connected to a 10 Ω resistor.

1. Total resistance = R + r = 10 + 2.0 = 12 Ω.
2. I = ε/(R + r) = 12/12 = **1.0 A**.
3. Lost volts = Ir = (1.0)(2.0) = 2.0 V.
4. Terminal pd V = ε − Ir = 12 − 2.0 = **10 V**. Check: V = IR = (1.0)(10) = 10 V. ✓
5. Power book-keeping: εI = 12 W total; I²R = 10 W to the load; I²r = 2.0 W wasted in the cell. 10 + 2 = 12 ✓

The commonest slip is step 2: using I = ε/R = 1.2 A, which ignores r and then gives V = 9.6 V.

### Worked example 2 — finding ε and r from two readings (the V–I graph)

A cell drives 2.0 A through a 5.0 Ω resistor and 1.0 A through an 11.0 Ω resistor. Find ε and r.

1. Write ε = I(R + r) for each: 2.0(5.0 + r) = 1.0(11.0 + r).
2. 10 + 2r = 11 + r → **r = 1.0 Ω**.
3. ε = 2.0(5.0 + 1.0) = **12 V**.
4. Graphically: V₁ = I₁R₁ = 10 V at I = 2.0 A; V₂ = I₂R₂ = 11 V at I = 1.0 A. Gradient = (11 − 10)/(1.0 − 2.0) = **−1.0 Ω = −r**; extrapolating to I = 0 gives V = **12 V = ε**. ✓

### Worked example 3 — motional emf, current, force and power

A bar of length 0.70 m slides at 1.0 m/s along rails in a field of 20 T out of the page (the lecture's own numbers). Total circuit resistance 2.0 Ω.

1. ε = Bvl = (20)(1.0)(0.70) = **14 V**.
2. I = ε/R = 14/2.0 = **7.0 A**.
3. Retarding force on the bar: F = BIl = (20)(7.0)(0.70) = 98 N, so the agent must push with **98 N** to keep v constant.
4. Mechanical power supplied: P = Fv = (98)(1.0) = **98 W**. Electrical power dissipated: I²R = (49)(2.0) = **98 W**. ✓

The two are equal because the **magnetic force does no work**; the energy comes from whatever pushes the bar.

### Worked example 4 — Faraday's law

A coil of 500 turns and area 4.0×10⁻³ m² sits perpendicular to a field that falls uniformly from 0.80 T to zero in 0.20 s. Find the induced emf.

1. dB/dt = 0.80/0.20 = 4.0 T/s.
2. dΦ_B/dt = A dB/dt = (4.0×10⁻³)(4.0) = 1.6×10⁻² Wb/s.
3. |ε| = N dΦ_B/dt = (500)(1.6×10⁻²) = **8.0 V**.
4. The minus sign: the induced current flows in the sense that *maintains* the dying flux.

### Worked example 5 — capacitance, energy, and energy density (the lecture's numbers, done carefully)

A parallel-plate capacitor in vacuum has A = 0.020 m², d = 5.0×10⁻³ m, and the field between the plates is E = 200 N/C.

1. C = ε₀A/d = (8.85×10⁻¹²)(0.020)/(5.0×10⁻³) = **3.54×10⁻¹¹ F** (35.4 pF).
2. V = Ed = (200)(5.0×10⁻³) = **1.0 V**.
3. U = ½CV² = ½(3.54×10⁻¹¹)(1.0)² = **1.77×10⁻¹¹ J**.
4. Energy density u_E = ½ε₀E² = ½(8.85×10⁻¹²)(200)² = ½(8.85×10⁻¹²)(4.0×10⁴) = **1.77×10⁻⁷ J/m³**.
5. Volume between the plates = Ad = (0.020)(5.0×10⁻³) = 1.0×10⁻⁴ m³.
6. Cross-check: u_E × (Ad) = (1.77×10⁻⁷)(1.0×10⁻⁴) = **1.77×10⁻¹¹ J** — the same as step 3. ✓

**Note carefully**: 1.77×10⁻⁷ is the energy **per cubic metre**, not the energy stored. The two differ here by a factor of 10⁴ — the volume.

### Worked example 6 — the three forms of U

A 20 μF capacitor is charged to 300 V.

1. Q = CV = (20×10⁻⁶)(300) = **6.0×10⁻³ C**.
2. U = ½CV² = ½(20×10⁻⁶)(9.0×10⁴) = **0.90 J**.
3. U = ½QV = ½(6.0×10⁻³)(300) = 0.90 J ✓
4. U = Q²/2C = (3.6×10⁻⁵)/(4.0×10⁻⁵) = 0.90 J ✓
5. The battery did W = QV = 1.8 J. Half is stored; the other 0.90 J was dissipated as heat in the charging circuit.

### Worked example 7 — dielectric inserted, battery disconnected

A 4.0 μF capacitor is charged to 100 V and then **disconnected**. A slab of dielectric constant K = 5.0 is slid in.

1. Q = CV = (4.0×10⁻⁶)(100) = 4.0×10⁻⁴ C, and Q is now **fixed**.
2. C′ = KC = 20 μF.
3. V′ = Q/C′ = (4.0×10⁻⁴)/(2.0×10⁻⁵) = **20 V** = V/K. Hence E′ = E/K.
4. U = ½CV² = ½(4.0×10⁻⁶)(10⁴) = 2.0×10⁻² J; U′ = Q²/2C′ = (1.6×10⁻⁷)/(4.0×10⁻⁵) = **4.0×10⁻³ J = U/K**.
5. The energy **falls**; the missing energy is the work the field does pulling the slab in.
6. If the battery had been **left connected**, V would stay at 100 V, Q would rise to KQ, and U = ½C′V² = **5×** the original — the battery supplying the extra.

### Worked example 8 — series vs parallel storage

Two 6.0 μF capacitors across a 20 V supply.

1. Parallel: C = 6.0 + 6.0 = 12 μF; U = ½(12×10⁻⁶)(400) = **2.4×10⁻³ J**.
2. Series: 1/C = 1/6 + 1/6 → C = 3.0 μF; U = ½(3.0×10⁻⁶)(400) = **6.0×10⁻⁴ J**.
3. Parallel stores **4×** as much. At a fixed V, U ∝ C, and parallel always gives the **largest** equivalent capacitance — this is the answer to "when do we get maximum energy from a set of capacitors?"

### Worked example 9 — work done moving charge, and the defibrillator

A 50 μF capacitor is charged to 4.0 kV and delivers 80% of its energy in 5.0 ms.

1. Q = CV = (50×10⁻⁶)(4.0×10³) = **0.20 C**.
2. U = ½CV² = ½(50×10⁻⁶)(1.6×10⁷) = **400 J**.
3. Energy delivered = 0.80 × 400 = **320 J**.
4. Average power = 320/(5.0×10⁻³) = **6.4×10⁴ W = 64 kW** — modest energy, enormous power, which is the whole design idea.
5. Work done moving a charge through a pd: W = qV. Moving one microcoulomb across the fully charged plates costs (1.0×10⁻⁶)(4.0×10³) = 4.0×10⁻³ J. Equivalently, a 9.0 V cell that pushes 200 C round a circuit does W = εQ = 1.8×10³ J.

## Commonly confused

- **emf vs terminal potential difference**: ε is what the source *generates* per coulomb; V is what the *external circuit receives* per coulomb. ε = V + Ir. They coincide **only at I = 0**. Both are in volts — that is why the distinction gets marked.
- **"Force" in electromotive force**: it is **not a force**. Its unit is the volt (J/C) and its dimensions are [M L² T⁻³ I⁻¹], not [M L T⁻²]. Answering "newtons" throws the mark away.
- **½ε₀E² vs ½CV²**: the first is an energy **density** (J/m³), the second a **total energy** (J). They are linked by U = u_E × (Ad). If your "energy in joules" came straight out of ½ε₀E² without multiplying by a volume, it is wrong by a factor of the volume.
- **Dividing by d**: C = ε₀A/d. Forgetting the /d, or leaving d in millimetres, are the two standard numerical losses. Likewise E = V/d, not V·d.
- **Which quantity is held fixed when a dielectric goes in**: **battery connected → V fixed, U rises by K**; **battery disconnected → Q fixed, U falls by K**. Say which one before you write anything.
- **Forgetting the ½ in ½CV²**: the voltage climbs from 0 to V as the capacitor charges, so the average is V/2. W = QV is the work done by the *battery*; ½QV is what ends up *stored*.
- **I = ε/R instead of ε/(R + r)**: the internal resistance is in series with the load and must go into the total before you find the current.
- **Gradient of the V–I graph**: it is **−r**, not r and not −R. A negative gradient is expected; quote r as a positive resistance.
- **The minus sign in Faraday's law**: it encodes *opposition* (Lenz's law), not a negative numerical answer. Give the magnitude and describe the direction in words.
- **Magnetic force doing work**: it does not. In motional emf the magnetic force merely redirects charge; the energy is supplied by the agent pushing the rod, which is why Fv = I²R exactly.
- **Series vs parallel for energy**: parallel gives the **larger** equivalent capacitance and so more stored energy at the same supply voltage — the opposite of the resistor intuition.
- **Dielectric constant vs permittivity**: K is a **dimensionless ratio** (C/C₀, = 1 in vacuum); ε = Kε₀ is the permittivity in F/m. **Breakdown potential V_max** is a voltage; **dielectric strength** is the corresponding field in V/m.
- **Conductor "zero field inside"**: this is the *electrostatic* case, where free charges have finished rearranging. It does not mean a current-carrying wire has no field along it.

*Note: the extracted lecture text drops ligatures ("dierent", "baery", "eect") and loses the equations that sat in slide images — Faraday's law itself, and the ε = W/q line of the motional-emf derivation. Two numerical results in the "Energy in Electric Fields" slides are also wrong as printed: the capacitance in Example 1 is given as 3.54×10⁻¹² F when ε₀A/d = 3.54×10⁻¹¹ F, and "U = ½εE² ≈ 1.77×10⁻⁷ J" is an energy **density** in J/m³, not a total energy in joules (the actual stored energy is 1.77×10⁻¹¹ J). The dielectric exercise as set is also inconsistent — C = 3 μF with those plate dimensions implies K ≈ 8×10⁴, far beyond any real dielectric — and its hint E′ = E×K^½ is not the standard result (E′ = E/K at fixed charge, E unchanged at fixed voltage). The standard 100-level treatment has been given above throughout, with the source's own numbers reworked correctly. The Week 3 summary sheet is on a different topic (Conductors and Insulators) from the two lecture decks; its content is included in full above.*
