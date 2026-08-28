# Tuesday — PHY_102 nightly check

*Electromotive force: definition, unit and dimension; terminal potential difference and internal resistance; the V–I determination of ε and r; motional and induced emf; energy stored in a capacitor and the energy density of an electric field.*
*Sit cold, notes closed, 8 minutes. Score out of 6.*

**1.** A cell of emf ε and internal resistance r drives a current through an external resistance R. The value of R is now **increased**, nothing else changing. The terminal potential difference:
a) falls, because a larger external resistance takes a larger share of the available voltage and leaves less across the terminals
b) rises towards ε, because the current falls and the lost volts Ir shrink with it; V = ε only in the limit I = 0
c) is unchanged, since ε and r are fixed properties of the cell and V = ε − Ir therefore has a fixed value
d) rises, and so does ε, because ε = I(R + r) grows as R grows

**2.** In the laboratory determination of ε and r, the terminal p.d. V is plotted on the y-axis against the current I on the x-axis for several settings of a variable resistor. The graph is a straight line, and:
a) the gradient is +r and the y-intercept is the terminal p.d. at maximum current
b) the gradient is −R, the external resistance, and the y-intercept is ε
c) the gradient is −r and the y-intercept is ε, the p.d. extrapolated back to zero current
d) the gradient is −r, but the intercept is ε only for a cell of negligible internal resistance; otherwise the intercept reads ε − Ir

**3.** A conducting rod slides along rails at constant speed v, perpendicular to a **uniform, time-independent** magnetic field B. Which statement correctly accounts for the emf?
a) No emf is induced: Faraday's law requires a magnetic field that changes with time, and B here is constant
b) The free charges in the rod feel a Lorentz force qvB directed along the rod, which drives them to one end; the work per unit charge over the length l is Bvl, so ε = Blv even though B is steady
c) The emf arises from the resistance of the rod opposing the current through it; a rod of zero resistance would generate no emf
d) The emf appears only once the circuit is closed and a current flows, since emf is defined by ε = I(R + r)

**4.** For the uniform field between the plates of a parallel-plate capacitor of plate area A and separation d in vacuum, the quantity ½ε₀E²:
a) is the total energy stored, in joules; multiplying it by the volume Ad converts it into the energy density
b) is the energy per unit volume, in J/m³, and the total stored energy is obtained by multiplying it by the plate area A, since the field exists only at the plates
c) applies only when a dielectric fills the gap, because empty space contains no matter and therefore stores no energy
d) is the energy per unit volume, in J/m³; the total stored energy is ½ε₀E²(A·d), and doubling E quadruples both

**5. (explain why)** Electromotive force and terminal potential difference are both measured in volts, yet they are not the same quantity. Explain what each one *is*, say precisely what the difference between them (the quantity Ir) represents physically and where that energy goes, and state the one condition under which the two are numerically equal.

**6. (explain why)** The result U = ½ε₀E²(A·d) is normally read as "the energy is stored **in the field**", not "on the plates". Explain what in the expression justifies that reading. Then explain why filling the gap with a dielectric does not let you store unlimited energy, naming the property of the material that sets the limit.

---

## Answers

**1. b** — *Terminal p.d. is set by the current, not by the external resistance directly: V = ε − Ir.* Raising R lowers I = ε/(R + r); the lost volts Ir fall in proportion, so V climbs towards ε and reaches it only when I = 0 (open circuit). Numerically: ε = 1.5 V, r = 0.50 Ω gives V = 1.25 V with R = 2.5 Ω but V = 1.43 V with R = 10 Ω. (a) is the everyday "bigger resistance drops more voltage" intuition, applied to the wrong resistor — R does drop more volts, but those volts *are* the terminal p.d. (c) spots correctly that ε and r are fixed but forgets that **I** is not; Ir is not a constant. (d) misreads ε = I(R + r) as a formula for a varying ε — the product I(R + r) is constant precisely because I falls as R rises.

**2. c** — *V = ε − Ir is a straight line of the form y = c + mx, with m = −r and c = ε.* Rearranged, V = −rI + ε: the gradient is the *negative internal* resistance and the intercept is the emf, i.e. the terminal p.d. extrapolated to zero current — which is exactly the "no current flows" condition in the definition of emf. (a) drops the minus sign and misidentifies the intercept as a value at maximum current, which is where the line ends, not where it crosses the axis. (b) confuses the resistance being varied (R) with the one the gradient measures (r); R changes from point to point and cannot be a single gradient. (d) is the trap for someone half-remembering the rule: the intercept is ε for *every* cell — a large r simply makes the line steeper, it does not shift the intercept.

**3. b** — *Motional emf comes from the Lorentz force on carriers in a moving conductor; the flux changes because the area changes.* Each carrier moving with the rod at speed v across B feels F = qvB along the rod; pushing charge the length l does work W = QBvl, and emf is work per unit charge, so ε = Blv. Equivalently Φ_B = Blx changes because **x** changes, not because B does. (a) is the single commonest misconception this week — Faraday's law responds to a changing *flux*, and area change qualifies. (c) inverts cause and effect: resistance limits the resulting current, it does not generate the emf; the emf is there on open circuit with no current at all. (d) treats ε = I(R + r) as a *definition* of emf rather than as a circuit consequence, and so wrongly makes the emf conditional on a current flowing.

**4. d** — *u_E = ½ε₀E² is an energy density (J/m³); energy = density × volume, and the volume is A·d.* Check the units: (C²/N·m²)(N/C)² = N/m² = J/m³. The field is essentially uniform inside the gap and essentially zero outside it, so the total is simply u_E × Ad. Because E is squared, doubling the field quadruples both the density and the total. (a) inverts density and total — the error that turns 1.77×10⁻¹¹ J into 1.77×10⁻⁷ J. (b) has the right units but the wrong geometry: multiplying a per-volume quantity by an area cannot give joules, and it ignores the gap thickness entirely. (c) mistakes "no matter" for "no energy": the whole point of the energy-density result is that the field stores energy in empty space.

**5.** *Concept: emf is energy supplied per coulomb by the source; terminal p.d. is energy delivered per coulomb to the external circuit; the difference is dissipated inside the cell.* The **emf** ε = W/Q is the work the source does on each coulomb of charge in driving it round the circuit — the full energy per coulomb the chemical (or induced) process makes available. The **terminal potential difference** V is the p.d. actually measured across the cell's terminals once the circuit is switched on, i.e. the energy per coulomb that reaches the external resistance. Since real cells have internal resistance r, driving a current I through the cell's own material dissipates **Ir** joules per coulomb as heat *inside the cell* — the "lost volts". Hence V = ε − Ir, always less than ε when current flows. They are numerically equal in exactly one situation: **when no current flows** (I = 0 — the open-circuit condition, or measurement with an ideal infinite-resistance voltmeter), which is why the intercept of the V–I graph reads the emf.

**6.** *Concept: the energy is expressed entirely in terms of the field and the volume it occupies; and dielectric strength, not capacitance, caps the storage.* Two features justify the "in the field" reading. First, the expression contains **no reference to charge or to the plates** — only E, the permittivity, and the volume Ad. Second, that volume is precisely the region where the field exists: inside the gap E is uniform, outside it E ≈ 0, and the energy comes out as (energy per unit volume) × (volume of field), exactly as if the energy were distributed through the space itself. This is why the same expression u_E = ½ε₀E² is used for fields in empty space where there is no capacitor at all — energy persists in a region devoid of matter. As for the limit: a dielectric of constant K raises the capacitance to C = Kε₀A/d and so raises ½CV² at a given V, but every dielectric has a **dielectric strength**, the maximum electric field it can tolerate. Exceed it and the material breaks down and becomes a conducting path between the plates, discharging the capacitor. That fixes a **breakdown potential V_max = (dielectric strength) × d** for the device, so the largest energy it can ever hold is ½CV_max², not an unlimited amount.
