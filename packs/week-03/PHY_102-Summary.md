# PHY_102 — Week 3

*General Physics II · Week 3 (21 – 27 Sep 2026)*

*Note on the source: the week has three strands — the **Electromotive Force** deck, the **Energy in Electric Fields** deck, and **conductors and insulators**, which survives only in the week's summary sheet, so that strand is thinner than the other two. Three slides contain errors; they are corrected below and flagged, because you must not reproduce them in an exam.*

## Most likely to be examined

1. **EMF, terminal p.d. and the loop equation.** ε = V + Ir, so V = ε − Ir; and round the whole loop ε = I(R + r), so I = ε/(R + r). ε (volt) is the energy the source gives per coulomb; V is the p.d. across the terminals with the circuit on; I is the current (A); r the internal and R the external resistance (Ω). ε = V only when I = 0.
2. **EMF as work per unit charge:** ε = W/Q, unit volt = joule per coulomb. Dimension **[M¹ L² T⁻³ I⁻¹]** (work M L² T⁻², charge I T).
3. **Motional emf:** ε = Bvl, with B = flux density (T) perpendicular to the plane, l = rod length in the field (m), v = speed perpendicular to the rod (m/s). From the Lorentz force F = qvB on a carrier: W = qBvl, so ε = W/q = Bvl. Enclosed flux Φ_B = Blx.
4. **Faraday's law:** ε = −N dΦ_B/dt. N = number of turns; Φ_B = BA cos θ in webers (Wb = T·m²). The minus sign is Lenz's law — direction only, not magnitude.
5. **Energy stored in a capacitor:** U = ½CV² = ½QV = Q²/2C (J), with V = Q/C. This is also the work the battery does separating charge, i.e. chemical energy converted to electrostatic potential energy.
6. **Energy density of an electric field:** u_E = ½ε₀E² (J/m³); with a dielectric u_E = ½εE² = ½Kε₀E². Total energy in a parallel-plate capacitor U = ½ε₀E²(A·d), where A·d is the volume between the plates.
7. **Conductor vs insulator:** a conductor allows electricity to flow because electrons move freely from atom to atom; it has low resistance/resistivity and **zero electric field inside it** in electrostatic equilibrium. An insulator has no free electrons and a high resistivity, so it resists the flow of electricity (and of heat and sound).
8. **Parallel-plate capacitance and the dielectric constant:** C = ε₀A/d in vacuum, C = Kε₀A/d = εA/d with a dielectric; V = Ed. K (dielectric constant) is 1 in vacuum, slightly above 1 in air, and greater than 1 in every solid or liquid dielectric.

## The substance

**Electromotive force.** EMF is the electric potential produced by an electrochemical cell or by a changing magnetic field; it is the work done on a unit charge in driving it round the circuit. Symbol ε (or ϵ), unit volt. It is *not* a force despite the name. A cell converts chemical energy to electrical energy, making one terminal positive and one negative.

- ε = V + Ir and ε = I(R + r); on load V < ε, the "lost volts" Ir being dissipated inside the cell.
- ε can be taken as **negative** when the source opposes the incoming power — e.g. the back-emf of an inductor, whose direction is opposite to the driving supply.
- **Experiment (V–I graph):** vary R with a variable resistor, read V (voltmeter) and I (ammeter). Plot V against I: it is a straight line V = ε − rI, so the **intercept on the V axis = ε** and the **gradient = −r**. As R increases, I falls. Take many readings for a reliable fit, repeat them, and disconnect the cell between readings so it does not drain and shift the values.
- **Application:** the electromagnetic (magflow) flowmeter — coils make a field B, the conducting liquid is the moving conductor, and the induced voltage, proportional to the average flow velocity, is read by electrodes and converted to volumetric flow rate from the pipe dimensions. No moving parts; works for conductive/water-based liquids, not hydrocarbons or distilled water. Faraday's law also underlies transformers, generators and motors.

**Motional emf setup.** A rod PQ of length l = RS slides on rails in loop PQRS, in a uniform, time-independent B perpendicular to the plane, at constant v on a frictionless surface. The enclosed area changes, Φ_B = Blx with x = RQ changing in time, so dΦ/dt = Blv and ε = Bvl.

**Energy in electric fields.** Charging a capacitor needs external work: electrons are moved from one plate to the other against the field that builds up. That work is stored as electric potential energy U between the plates; discharging returns it. In a **defibrillator**, a battery charges a capacitor to a high voltage slowly (modest power), then a switch dumps a portion of the stored energy through the paddles in milliseconds (very high power).

- The field between parallel plates is uniform, so the energy density is uniform between the plates and approximately zero outside; total U = u_E × volume = ½ε₀E² × Ad.
- **Dielectrics** (Faraday, 1837): filling the gap with an insulator (mineral oil, plastic) multiplies the capacitance by K, the dielectric constant.
- **Breakdown potential V_max:** the largest p.d. the dielectric can hold. Exceed it substantially and the dielectric breaks down, forming a conducting path between the plates. The corresponding field limit is the material's **dielectric strength** (V/m).
- **Maximum energy from a set of capacitors** is obtained in **parallel**: C_parallel = ΣC is larger than any individual capacitance (in series C_eq is smaller than the smallest), and U = ½CV² grows with C at fixed V.

**Conductors and insulators.** *(Third strand of the week; the summary sheet is the only source, so no formulae are given there.)*

- **Conductor:** a material that allows electricity to flow through it, by letting electrons move from atom to atom. Characteristics named: **free movement of electrons**, **zero electric field inside** (in electrostatic equilibrium), and **low resistance** (low resistivity). Applications named: thermometers, food-storage foils, vehicle engines.
- **Insulator:** a material that resists the flow of electricity because of its **high resistivity**; it has **no free electrons**, and it protects against the passage of electricity, heat and sound. Examples named: glass (high resistivity), plastic, rubber.
- **The basic differences** are three: whether electrons are free to move, whether an electric field can exist inside the material, and whether the material facilitates or resists the flow of electricity.
- **Electrical safety (case study).** Conductive material in an electrical system causes accidents if it is not properly insulated; correctly chosen insulators prevent them by blocking current where it is not wanted, protecting people and structures. The sheet also flags that **temperature variation changes a material's conductivity**, and so its safety behaviour.
- **Link to the rest of the week:** the dielectric in a capacitor is an insulator — that is why charge stays on the plates — and the wires and plates are conductors, which is why the whole of each plate sits at one potential.

**Slide corrections (do not reproduce these).** (i) The deck writes "U = ½εE²" and quotes 1.77 × 10⁻⁷ **J**. That expression is an energy *density*, so the answer is 1.77 × 10⁻⁷ **J/m³**; multiply by the volume Ad to get joules. (ii) The deck's Example 1 quotes C ≈ 3.54 × 10⁻¹² F for A = 0.02 m², d = 0.005 m; the correct value is 3.54 × 10⁻¹¹ F. (iii) The dielectric hint "E′ = E × K^½" is not a standard result: at **constant charge** E′ = E/K, at **constant voltage** E′ = E. State which quantity is held fixed before changing E.

## Worked examples

**1 — EMF, internal resistance, terminal p.d.** A cell of ε = 1.5 V and r = 0.5 Ω drives R = 2.5 Ω.
I = ε/(R + r) = 1.5/(2.5 + 0.5) = 1.5/3.0 = **0.5 A**.
V = ε − Ir = 1.5 − (0.5)(0.5) = 1.5 − 0.25 = **1.25 V**.
Check: V = IR = 0.5 × 2.5 = 1.25 V. Lost volts Ir = 0.25 V; power wasted inside = I²r = 0.125 W.

**2 — Getting ε and r from a V–I graph.** Readings (I, V): (0.20 A, 1.40 V) and (0.80 A, 1.10 V).
Gradient = (1.10 − 1.40)/(0.80 − 0.20) = −0.30/0.60 = −0.50 V/A, so **r = 0.50 Ω**.
Intercept: ε = V + Ir = 1.40 + 0.20 × 0.50 = **1.50 V** (the voltage extrapolated to I = 0).

**3 — Motional emf and its energy balance.** A rod l = 0.50 m slides at v = 3.0 m/s across B = 0.40 T (perpendicular to the plane); rail-circuit resistance R = 2.0 Ω.
ε = Bvl = 0.40 × 3.0 × 0.50 = **0.60 V**. I = ε/R = 0.60/2.0 = **0.30 A**.
Force needed to keep it moving: F = BIl = 0.40 × 0.30 × 0.50 = 0.060 N; mechanical power = Fv = 0.18 W.
Check: electrical power = I²R = (0.30)² × 2.0 = 0.18 W — the mechanical work is exactly the electrical energy produced.
(Deck's version: l = 0.7 m, v = 1 m/s, B = 20 T gives ε = 1 × 0.7 × 20 = **14 V**; the minus sign gives direction only.)

**4 — Faraday's law with N turns.** A 200-turn coil has its flux fall from 0.030 Wb to 0.010 Wb in 0.10 s.
ε = −N ΔΦ/Δt = −200 × (0.010 − 0.030)/0.10 = −200 × (−0.20) = **+40 V** (magnitude 40 V; the sign says the induced current opposes the decrease).

**5 — Capacitance, field energy and energy density.** Parallel plates, A = 0.02 m², d = 0.005 m, vacuum, E = 200 N/C.
C = ε₀A/d = (8.85 × 10⁻¹² × 0.02)/0.005 = **3.54 × 10⁻¹¹ F**.
V = Ed = 200 × 0.005 = **1.0 V**; Q = CV = 3.54 × 10⁻¹¹ C.
u_E = ½ε₀E² = ½ × 8.85 × 10⁻¹² × (200)² = **1.77 × 10⁻⁷ J/m³**.
Volume = Ad = 0.02 × 0.005 = 1.0 × 10⁻⁴ m³, so U = u_E·Ad = **1.77 × 10⁻¹¹ J**.
Check by the other route: U = ½CV² = ½ × 3.54 × 10⁻¹¹ × (1.0)² = 1.77 × 10⁻¹¹ J.

**6 — Adding a dielectric at constant charge.** Same capacitor, now filled with K = 4.
C′ = Kε₀A/d = 4 × 3.54 × 10⁻¹¹ = **1.42 × 10⁻¹⁰ F**. Charge is unchanged, so V′ = Q/C′ = 1.0/4 = **0.25 V** and E′ = V′/d = E/K = **50 N/C**.
U′ = Q²/2C′ = U/4 = **4.43 × 10⁻¹² J** — the energy falls because the dielectric is pulled in, i.e. the field does work on it.
(If instead the battery stays connected, V is fixed: E′ = E, C′ = 4C, Q′ = 4Q and U′ = ½C′V² = 4U.)

**7 — Defibrillator.** C = 100 µF charged to V = 5.0 kV.
U = ½CV² = ½ × 100 × 10⁻⁶ × (5.0 × 10³)² = ½ × 10⁻⁴ × 2.5 × 10⁷ = **1250 J**.
If delivered in 2.0 ms, P = U/t = 1250/0.0020 = **6.25 × 10⁵ W** — huge power from a modest battery, because the fill is slow and the release fast.

## Commonly confused

- **EMF ε vs terminal p.d. V.** Test: is current flowing? With I = 0 they are equal; with I > 0, V = ε − Ir is always smaller. ε is a property of the source; V depends on the load.
- **"EMF is a force."** Test: its unit. Volts (J/C), not newtons — it is energy per unit charge.
- **Total resistance in ε = I(R + r).** A student who writes I = ε/R gets too large a current. Test: does the loop include the cell? Then r belongs in the sum.
- **V–I gradient = r vs = −r.** Test: V falls as I rises, so the slope is negative; r is its magnitude. The intercept, not the slope, gives ε.
- **Energy U (J) vs energy density u_E (J/m³).** Test: does the expression contain a volume? ½ε₀E² is per cubic metre; multiply by Ad for joules. ½CV² is already joules.
- **U = ½CV² vs U = QV.** Test: the p.d. rises from 0 to V as charge is added, so the average is ½V; QV (no half) is the work when the p.d. is held constant, e.g. by a battery, and half of that is lost elsewhere.
- **Series vs parallel for maximum stored energy.** Test: which combination has the larger C_eq at the same V? Parallel adds capacitances; series always gives less than the smallest.
- **Adding a dielectric at constant Q vs constant V.** Test: is the battery still connected? Connected means V is fixed, so Q and U rise by K. Disconnected means Q is fixed, so V, E and U fall by K.
- **Zero field inside a conductor vs reduced field inside a dielectric.** Test: does the material have free electrons? A conductor's free charges rearrange until the internal field is exactly zero; an insulator's charges are bound, so its polarisation only *reduces* the field by the factor K — never to zero.
- **Conductor vs insulator.** Test: resistivity, and whether electrons are free. Low resistivity and mobile electrons make a conductor (copper, metal foil); high resistivity and bound electrons make an insulator (glass, plastic, rubber). An insulator is not "a conductor that needs more voltage" — pushed far enough it breaks down rather than conducting normally.
- **Breakdown potential vs dielectric strength.** Test: the units. V_max is in volts and belongs to that capacitor's geometry; dielectric strength is in V/m and belongs to the material.
- **Faraday's minus sign.** Test: are you asked for a size or a direction? The minus is Lenz's law; drop it when reporting a magnitude.
