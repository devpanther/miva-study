# Tuesday — PHY_102 nightly check

*Concepts and basic technique: what emf is and how it differs from terminal pd, internal resistance and the V–I graph, the dimensions of emf, the mechanism of motional emf and Faraday's law, energy density versus total energy in a capacitor, dielectrics and breakdown, conductors and insulators. No multi-step calculation.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** A cell's emf and its terminal potential difference are numerically equal when:
a) no current is drawn, so nothing is dropped across the internal resistance
b) the external resistance is very small, so almost all the emf reaches the load
c) the internal resistance is equal in size to the external resistance
d) the cell is short-circuited, so the full emf appears across the terminals

**2.** Electromotive force is correctly described as:
a) the force, in newtons, that a source exerts on the charge carriers in the circuit
b) the energy supplied by the source to each coulomb of charge passed through it
c) the potential difference across the terminals while the circuit is switched on
d) the current the source drives divided by the total resistance of the circuit

**3.** The dimensional formula of emf is [M¹ L² T⁻³ I⁻¹] because emf is:
a) work divided by current, and work has dimensions [M L² T⁻²]
b) work divided by charge, and charge has dimensions [I T]
c) force divided by charge, and force has dimensions [M L T⁻²]
d) power divided by current squared, as for a resistance

**4.** The terminal voltage of a cell is plotted against the current drawn. The V-axis intercept and the gradient of the straight line give:
a) the emf and −r
b) the emf and −R
c) the internal resistance and −ε
d) the voltage at maximum current and +r

**5.** A rod slides along rails at speed v in a field B perpendicular to the plane of the circuit. The emf Bvl arises because:
a) the magnetic force does work on the free charges, giving Bvl joules per coulomb
b) the force qvB drives free charges along the rod until an opposing field balances it
c) the rod's resistance converts its kinetic energy into electrical energy at the rate Bvl
d) the circuit's resistance changes as the rod moves, and that change induces a voltage

**6.** In Faraday's law ε = −N dΦ_B/dt, the minus sign records that:
a) the induced emf is always a negative number, since energy leaves the circuit
b) the induced emf opposes the change in flux that produced it
c) the flux through the coil always decreases once an emf has been induced
d) the emf reverses direction each time the coil completes one full turn

**7.** The expression ½ε₀E² gives:
a) the total energy stored in a parallel-plate capacitor, in joules
b) the energy stored per unit volume of the field, in J/m³
c) the work done in carrying unit charge across the plates, in volts
d) the energy stored per unit area of one plate, in J/m²

**8.** Which statement about a conductor in electrostatic equilibrium is correct?
a) The field inside is zero, once the free electrons have rearranged to cancel it
b) The field inside is large, since free electrons are present to carry it
c) Its resistivity is high, which is what lets its electrons move freely
d) It has no free electrons, so charge passes straight through it unimpeded

**9. (explain why)** A student reads 1.5 V across a cell with a high-resistance voltmeter and nothing else connected, then connects a torch bulb and reads 1.2 V. Say what each reading is called, explain where the missing 0.3 V has gone, and state what happens to the second reading if the bulb is replaced by one of *lower* resistance.

**10. (explain why)** A charged parallel-plate capacitor is **disconnected** from its battery, and a dielectric slab of constant K is then slid between the plates. Explain what happens to Q, C, V, E and the stored energy U, and explain why the answer for U is different if the battery is instead left connected.

**11. (explain why)** Explain, using units, why ½ε₀E² cannot be the total energy stored in a capacitor, and state exactly how it is related to the total energy U for a parallel-plate capacitor of plate area A and separation d.

**12. (explain why)** A rod moving on rails in a magnetic field delivers electrical energy to a resistor. Explain why the magnetic field cannot be the source of that energy, identify what actually supplies it, and state the relationship this implies between the force needed to keep the rod moving and the power dissipated.

---

## Answers

**1. a** — *emf and terminal pd coincide only at zero current.* From ε = V + Ir, setting I = 0 kills the Ir term and V = ε; that is why an open-circuit reading with a high-resistance voltmeter measures the emf. (b) has it backwards: a small R means a *large* current, so Ir is large and V is furthest below ε. (c) is the maximum-power-transfer condition, R = r, at which V = ε/2 — it is a different question being confused with this one. (d) is the extreme case of (b): on short circuit V = IR → 0, and the *whole* emf is lost internally, not delivered.

**2. b** — *emf is an energy per unit charge.* ε = W/Q, joules per coulomb, i.e. volts. (a) is the trap laid by the word "force": emf has dimensions [M L² T⁻³ I⁻¹], not [M L T⁻²], and is never quoted in newtons. (c) defines the *terminal potential difference*, the quantity examiners ask you to distinguish from emf — it is smaller than ε whenever current flows. (d) is a mangled Ohm's law and gives amperes per ohm, not volts.

**3. b** — *the dimensions follow from work ÷ charge.* Work = force × displacement = [M][L T⁻²][L] = [M L² T⁻²]; charge = current × time = [I T]; dividing gives [M¹ L² T⁻³ I⁻¹]. (a) divides by current alone, losing one power of T and landing on [M L² T⁻² I⁻¹] — the single commonest slip, from forgetting that charge is not current. (c) is force per unit charge, which is the electric field, [M L T⁻³ I⁻¹]. (d) is resistance, [M L² T⁻³ I⁻²] — note the I⁻², which is the giveaway.

**4. a** — *V = ε − Ir is y = c + mx.* Plotting V against I gives intercept c = ε at I = 0 and gradient m = −r; the internal resistance is the magnitude of the (negative) gradient. (b) confuses the internal resistance with the external one, but R is the quantity being *varied* to generate the points, so it cannot also be the gradient. (c) swaps intercept and gradient — a dimensional impossibility, since the intercept is on a voltage axis. (d) misreads the intercept: I = 0 is the *smallest* current, not the largest, and a positive gradient would mean the terminal voltage rises as more current is drawn.

**5. b** — *motional emf comes from the Lorentz force on the free charges in the rod.* Each free charge q shares the rod's velocity v, so it feels qvB along the rod; charge piles up at the ends until the electrostatic field this creates just balances the magnetic push, and the resulting potential difference per unit charge is Bvl. (a) states the classic error that the *magnetic* force does the work — a magnetic force is always perpendicular to the velocity of the charge it acts on and does no net work; the energy comes from the agent pushing the rod. (c) confuses the seat of the emf with dissipation in a resistance, and Bvl is a voltage, not a rate of energy transfer. (d) blames a changing resistance; what actually changes is the *area* of the circuit, hence the enclosed flux Φ_B = Blx.

**6. b** — *the minus sign is Lenz's law.* The induced emf, and the current it drives, act so as to oppose the change in flux that created them — which is what makes induction consistent with energy conservation. (a) reads the sign as arithmetic; the sign describes a *direction*, and the magnitude N dΦ_B/dt is what you quote. (c) confuses the opposition to *change* with an opposition to the flux itself: if the flux is falling, the induced current acts to *maintain* it. (d) describes what a rotating coil in an AC generator happens to do, not what the minus sign in the law means.

**7. b** — *½ε₀E² is an energy density.* Check the units: ε₀ is in F/m = C²/(N·m²) and E² is in (N/C)², giving N/m² = J/m³ — energy per unit volume. For a parallel-plate capacitor the total is U = ½ε₀E²(Ad). (a) is the error printed in this week's slides, where 1.77×10⁻⁷ J/m³ is quoted as 1.77×10⁻⁷ J; it is out by a factor of the volume. (c) confuses energy per *charge* (volts) with energy per *volume*. (d) uses the plate area rather than the volume between the plates, so it is out by a factor of d.

**8. a** — *free charges in a conductor rearrange until the internal field vanishes.* If any field remained inside, the free electrons would still be in motion; equilibrium is precisely the state in which they have stopped, which requires E = 0 inside the material. (b) mistakes the *presence* of mobile charge for the presence of a field — the mobility is exactly why the field cannot survive. (c) inverts the definition: conductors have *low* resistivity, insulators high. (d) describes an insulator, and even then "charge passes straight through" is wrong — an insulator resists the flow of charge.

**9.** *Concept: emf, terminal potential difference and the lost volts Ir.* The first reading, taken with a high-resistance voltmeter and nothing else in the circuit, draws essentially no current, so it is the **emf**: ε = 1.5 V. The second, taken with the bulb drawing current, is the **terminal potential difference**: V = 1.2 V. The missing 0.3 V is the **"lost volts" Ir** — the potential difference dropped across the cell's own **internal resistance**, representing energy per coulomb converted to heat *inside* the cell rather than delivered to the bulb. From ε = V + Ir, if the bulb draws (say) 0.30 A then r = 0.3/0.3 = 1.0 Ω. Replacing the bulb with one of **lower** resistance increases the current (I = ε/(R + r)), which increases Ir, so the terminal voltage reading **falls further below 1.5 V**. In the limit R → 0 (short circuit) the reading tends to zero.

**10.** *Concept: which quantity is held fixed decides everything when a dielectric is inserted.* With the battery **disconnected**, the plates are isolated, so **Q is fixed**. The dielectric raises the capacitance: **C → KC**. Since V = Q/C, the voltage **falls to V/K**, and since E = V/d the field **falls to E/K** (the polarised dielectric sets up an opposing field that partly cancels the original). The stored energy U = Q²/2C therefore **falls to U/K**. The energy is not destroyed: the field pulls the slab in, so the "missing" energy is the mechanical work the field does on the slab. If instead the battery is **left connected**, the fixed quantity is **V**, not Q: E = V/d is unchanged, Q rises to KQ, and U = ½CV² **rises to KU**, the battery supplying the extra energy by pushing more charge onto the plates. Same slab, same K, opposite conclusions — so always state which of Q and V is being held constant before writing anything down.

**11.** *Concept: an energy density is a total energy only after multiplication by a volume.* ε₀ is measured in F/m and E in N/C (= V/m), so ½ε₀E² has units (F/m)(V/m)² = (F·V²)/m³ = J/m³. That is **joules per cubic metre**, an energy *density*, and it can never be an energy in joules. For a parallel-plate capacitor the field is uniform between the plates and essentially zero outside, so the total stored energy is the density multiplied by the volume it occupies:
**U = ½ε₀E² × (A·d)**, where A·d is the volume between the plates.
This is the same statement as U = ½CV²: substituting C = ε₀A/d and V = Ed into ½CV² gives ½(ε₀A/d)(Ed)² = ½ε₀E²(Ad). If an "energy in joules" has been obtained directly from ½ε₀E² without multiplying by Ad, it is wrong by exactly that factor.

**12.** *Concept: the magnetic force does no work; the energy comes from the agent pushing the rod.* The magnetic force on a charge, qv × B, is always perpendicular to that charge's velocity, so it can change the direction of the charge's motion but can never do net work on it — a magnetic field cannot be a source of energy. What it does is act as an intermediary, separating charge along the rod and thereby setting up the emf. The energy delivered to the resistor comes from **the external agent that keeps the rod moving at constant speed**. Once a current I flows, the field exerts a retarding force **F = BIl** on the current-carrying rod (this is Lenz's law again — it opposes the motion), so the agent must push with an equal force to hold the speed constant. The mechanical power supplied is therefore
**Fv = (BIl)v = I(Bvl) = Iε = I²R**,
exactly the electrical power dissipated. If the agent stops pushing, the retarding force decelerates the rod, its kinetic energy is drained into the resistor, and the current dies away.
