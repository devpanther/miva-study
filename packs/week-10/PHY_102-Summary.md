# PHY_102 — Week 10 Summary

*General Physics II · Week 10 (9 – 15 Nov 2026) · Topic: Electromagnetic Induction — magnetic flux, Faraday's law, Lenz's law, motional and rotational emf, and self- and mutual inductance*

**This week inverts Week 8.** Week 8 asked what a *field* does to a *current* (τ = μ × B). Week 10 asks the reverse: what a *changing field* does to a *circuit*. Everything rests on one quantity — magnetic flux Φ — and one statement about its rate of change. The dipole moment μ = NIA is not used; the solenoid field B = μ₀nI from Week 8 **is**, because it is what you differentiate to get an inductance.

## The 8 most examinable things this week

1. **Magnetic flux: Φ = B·A = BA cos θ, unit the weber (Wb = T·m² = V·s).** **θ is the angle between B and the *normal* to the surface**, not between B and the plane. Flux is **maximum (BA) when the plane of the coil is perpendicular to B** and **zero when the plane of the coil contains B**. For a coil of N turns the quantity that matters is the **flux linkage NΦ**, also in Wb. Flux is a **scalar**; its sign follows from the normal you chose.
2. **Faraday's law: ε = −N dΦ/dt**, in volts; for a uniform rate, **ε = −N ΔΦ/Δt**. The induced emf depends on the **rate of change** of flux — **not** on B, not on Φ, and not on how much flux there is. A coil sitting in the strongest steady field in the world has **zero** emf. The deck's mid-lesson answer states this as ε = −dϕ/dt; for a coil the **N belongs there** (see the note at the end).
3. **Three, and only three, ways to change Φ = BA cos θ**: change **B** (electromagnet, a.c., a magnet moving nearer), change **A** (a sliding rod, a coil squeezed or pulled out of a field region), change **θ** (rotate the coil — this is a generator). Any of them induces an emf; **relative motion is not required**, only a changing flux.
4. **Lenz's law — what the minus sign is.** *The induced current flows in the sense whose own magnetic field opposes the **change** in flux that produced it.* Not "opposes the field" — opposes the **change**. Falling flux ⇒ induced current tries to **maintain** it; rising flux ⇒ induced current tries to **cancel** it. Practical form: **an approaching N pole meets an induced N pole (repulsion); a receding N pole meets an induced S pole (attraction).** Lenz's law is **conservation of energy** in disguise.
5. **The sign convention, stated properly.** Choose a positive normal **n̂** for the loop; Φ is positive when **B** has a component along **n̂**. The positive **circulation** sense is then fixed by the **right hand**: curl the fingers round the loop in the positive sense and the thumb points along **n̂**. With that pairing, ε = −dΦ/dt is the emf driving current in the **positive circulation sense**. Flip your choice of **n̂** and both Φ and the positive sense flip — the physics is unchanged. The sign is a convention; **Lenz's law is not**.
6. **Motional emf: ε = BLv** for a rod of length L moving at speed v perpendicular to B and to its own length. Derivable from Faraday (A = Lx, so dΦ/dt = BL dx/dt) or from the force qvB on the carriers. In a circuit of resistance R it drives **I = BLv/R**, which then feels **F = BIL = B²L²v/R directed against the motion**. Mechanical power in = electrical power out: **Fv = I²R = εI**.
7. **Rotating coil (a.c. generator): Φ = BA cos ωt, ε = NBAω sin ωt, peak ε₀ = NBAω, ω = 2πf.** The output is a **sinusoidal a.c.** of the same frequency as the rotation, with **ε_rms = ε₀/√2**. Phase trap: ε is **zero when Φ is maximum** (plane ⊥ B) and **maximum when Φ is zero** (plane contains B) — the emf follows the *slope* of the flux, not its size. Doubling the rotation rate **doubles** ε₀ and doubles f.
8. **Self- and mutual inductance.** Self: **L = NΦ/I** (henry, H = Wb/A = V·s/A = Ω·s), back-emf **ε = −L dI/dt**, stored energy **U = ½LI²**, and for a solenoid **L = μ₀μᵣN²A/ℓ** — note **N², not N**. Mutual: **M = N₂Φ₂₁/I₁**, **ε₂ = −M dI₁/dt**, with **M₁₂ = M₂₁** (the **reciprocity theorem**) and **M = k√(L₁L₂)**, 0 ≤ k ≤ 1. Ideal transformer: **V_s/V_p = N_s/N_p** and **I_pV_p = I_sV_s**.

## Flux — the quantity everything is about

**Definition.** Φ = B·A = **BA cos θ**, with **A** the vector of magnitude A along the surface normal. Counting field lines: Φ is the number of lines threading the loop.

| Orientation | θ (from the normal) | Φ | dΦ/dt on rotating |
|---|---|---|---|
| Plane **perpendicular** to B (face-on) | 0° | **BA** (maximum) | zero at that instant |
| Plane at 60° to B | 30° | 0.866 BA | large |
| Plane **contains** B (edge-on) | 90° | **0** | **maximum rate** |
| Plane perpendicular, coil reversed | 180° | **−BA** | zero at that instant |

- **Units:** 1 Wb = 1 T·m² = 1 V·s. B is therefore also called the *flux density*, in Wb/m² = T.
- **Flux linkage** for N turns is **NΦ**, because each turn is threaded separately and the emfs of the turns are in **series**. This is exactly the deck's first factor: *"increasing the number of turns of wire in the coil — the induced voltage will be the sum of all the individual loops."*
- A **uniform** field over a **flat** loop is the only case examined at this level; otherwise Φ = ∫B·dA.

## Faraday's law and what actually induces an emf

> **ε = −N dΦ/dt.** The emf induced in a circuit equals minus the rate of change of the flux linking it.

**Emf is not current.** An **emf** is energy given to unit charge by a non-electrostatic agency, measured in **volts**. A **broken** coil moved past a magnet has exactly the same emf across its ends as an intact one, and **zero** current. Current only follows if there is a closed path: **I = ε/R**.

**The three deck factors, and why each is really a dΦ/dt statement:**

| The deck says | In symbols | Why |
|---|---|---|
| more turns ⇒ more voltage | ε ∝ **N** | the turns' emfs add in series |
| faster movement ⇒ more voltage | ε ∝ **v** (via dΦ/dt) | the flux changes faster |
| stronger field ⇒ more voltage | ε ∝ **B** | the same fractional change moves more flux |

**Induced charge is time-independent.** Integrate I = ε/R = (N/R)|dΦ/dt| over the whole change:

**q = N ΔΦ / R.**

The **charge** that circulates depends only on the total flux change and the resistance — **not on how fast the change happens**. Doing it twice as slowly halves the emf and the current but doubles the time, and the product is the same. This is the principle of the **ballistic galvanometer** and a favourite examiner's trap.

## Lenz's law — the direction, and the energy argument

> **The induced current always flows in the direction that opposes the change producing it.**

**How to apply it, every time, in four steps:**

1. Decide the **direction of B** through the loop and whether the flux is **increasing or decreasing**.
2. The induced current's own field must **oppose that change**: it points **against** B if Φ is rising, **along** B if Φ is falling.
3. Get the current's sense from the **right-hand grip rule**: thumb along the required induced field inside the loop, fingers give the circulation.
4. Sanity-check mechanically: does the resulting force oppose the motion? It must.

**Pole form** (fastest for magnet-and-coil questions): the coil's near face becomes the pole that **fights what the magnet is doing** — **N to an approaching N** (repel it), **S to a retreating N** (hold it back). The deck's galvanometer demonstration is exactly this: needle one way going in, the **other way** coming out, zero when the magnet is at rest.

**Why it cannot be otherwise — the energy argument.** Push a magnet towards a coil. The induced current dissipates I²R as heat in the coil. That energy comes from **the work you do pushing against the repulsion**. If the induced current instead *attracted* the magnet, the magnet would be pulled in faster, generating more current, generating more attraction: unbounded kinetic energy *and* unbounded heat, from nothing. Lenz's law is therefore not an extra empirical rule but **the first law of thermodynamics applied to induction** — and it is why a generator with its load switched on is **physically harder to turn** than one running open-circuit.

## Motional emf — the rod on rails

A rod of length L slides at speed v on rails, B perpendicular to the plane of the circuit.

- **Flux route.** Enclosed area A = Lx, so Φ = BLx and **|ε| = dΦ/dt = BL(dx/dt) = BLv**.
- **Force route.** Each carrier feels **F = qv × B** along the rod; charge piles up at the ends until the electrostatic field balances it, at separation L: **ε = BLv**. The two routes must agree, and do.
- **Current** I = BLv/R; **retarding force** F = BIL = **B²L²v/R**, always opposing v (Lenz).
- **Power audit:** mechanical input **Fv = B²L²v²/R**, electrical output **I²R = B²L²v²/R** — identical. No energy is created; the rod is a mechanical-to-electrical converter.
- If B is **parallel** to the rod's velocity, or the rod moves **along** its own length, the swept flux does not change and **ε = 0**.

## The a.c. generator and the transformer

**Generator.** A coil of N turns, area A, spun at angular speed ω about an axis perpendicular to **B**:

**Φ(t) = BA cos ωt**  ⇒  **ε(t) = −N dΦ/dt = NBAω sin ωt**, peak **ε₀ = NBAω**, **f = ω/2π**.

The deck's bicycle dynamo is the same machine with the roles swapped — a magnet spinning inside a fixed coil rather than a coil spinning in a fixed field; *"as the magnet spins, the field around the top and bottom of the coil constantly changes between a north and a south pole,"* so the flux, and therefore the emf, alternates.

**Transformer.** Two coils on a common iron core, flux linked by the core.

**V_s/V_p = N_s/N_p**  (turns ratio); ideal power conservation **V_pI_p = V_sI_s**  ⇒  **I_s/I_p = N_p/N_s**.

- **Step-up in voltage is step-down in current**, and vice versa. A transformer never gives free power.
- **A.c. only.** With d.c., dΦ/dt = 0 after the switch-on transient, so the secondary emf is **zero**. This is the single most examinable fact about transformers.
- Real losses: **copper** (I²R in the windings), **hysteresis** in the core, **eddy currents** (suppressed by **laminating** the core), and **flux leakage** (k < 1).
- Purpose in transmission: raise V to reduce I, since line loss is **I²R** — halving the current quarters the loss.

## Self-inductance

A coil's own changing current changes its own flux, which induces an emf in itself, opposing the change (Lenz again).

**L = NΦ/I**  ⇒  **ε = −L dI/dt**  ⇒  **U = ½LI²**  ⇒  for a solenoid **L = μ₀μᵣN²A/ℓ**.

- **Unit:** the **henry**. 1 H is the inductance in which a current changing at 1 A/s induces 1 V.
- **N², not N**: doubling the turns doubles B (through n = N/ℓ) *and* doubles the number of turns the flux links, so L quadruples.
- L depends on **geometry and core material only** — never on the current in it. Inserting iron of μᵣ = 400 multiplies L by 400.
- **A steady current produces no back-emf**: ε depends on dI/dt, not on I. A large inductor carrying 10 A steadily has zero volts across its inductance.
- **The switch-off spike.** Breaking a circuit makes dI/dt enormous, so ε = L dI/dt is enormous — this is why an inductive circuit **arcs at the switch**, and why relay coils get a protective diode.
- Energy **U = ½LI²** is stored **in the magnetic field**, and is returned to the circuit when the current decays.

## Mutual inductance

Coil 1's changing current changes the flux through coil 2.

**M = N₂Φ₂₁/I₁**  ⇒  **ε₂ = −M dI₁/dt**;  **M₁₂ = M₂₁** (reciprocity);  **M = k√(L₁L₂)**, k the **coupling coefficient**.

- M depends on the **geometry of the pair**: number of turns of each, area, separation, alignment, and the **core material** — exactly the summary sheet's list.
- **Reciprocity** is not obvious and is examinable: it does not matter which coil you call the primary; the mutual inductance is one number for the pair.
- **k = 1** means every line of flux from coil 1 threads coil 2 (a tightly wound, iron-cored transformer); air-cored coils far apart have k ≪ 1.
- Two coaxial solenoids, the inner of N₁ turns, the outer N₂, sharing length ℓ and area A: **M = μ₀μᵣN₁N₂A/ℓ**, from which **M/L₁ = N₂/N₁** immediately.

## Worked example 1 — flux, Faraday's law and induced charge

*A flat circular coil of **120 turns**, radius **4.0 cm**, lies with its plane **perpendicular to** a uniform field. The field falls steadily from **0.60 T to 0.10 T in 0.20 s**. Total circuit resistance **8.0 Ω**.*

1. **Area, in SI.** A = πr² = π(0.040)² = **5.03×10⁻³ m²**. (Radius, not diameter; πr², not 2πr; metres, not centimetres — leaving r = 4.0 cm gives an answer 10⁴ times too large.)
2. **Angle.** The **plane** is perpendicular to B, so the **normal is parallel to B**: **θ = 0**, cos θ = 1. This is the *maximum-flux* orientation, and the sentence "plane perpendicular to B" is the one students most often convert into θ = 90°.
3. **Flux before and after.** Φ₁ = (0.60)(5.03×10⁻³) = 3.02×10⁻³ Wb; Φ₂ = (0.10)(5.03×10⁻³) = 5.03×10⁻⁴ Wb.
4. **Change in flux linkage.** ΔΦ = 5.03×10⁻⁴ − 3.02×10⁻³ = **−2.51×10⁻³ Wb**; N ΔΦ = −0.302 Wb.
5. **Emf.** ε = −N ΔΦ/Δt = −(−0.302)/0.20 = **+1.5 V** (1.51 V). Note the whole of the physics is in the *change* 0.50 T; using the final field 0.10 T, or the sum 0.70 T, are the two standard wrong substitutions.
6. **Current.** I = ε/R = 1.51/8.0 = **0.19 A**.
7. **Direction.** Say B points **out of the page** and is **decreasing**. The induced current must **maintain** out-of-page flux, so by the right-hand grip rule it flows **anticlockwise** as seen from the front. Note it does *not* flow so as to oppose B — it flows *with* B, because it is the **loss** of flux that is being opposed.
8. **Charge circulated.** q = N ΔΦ/R = 0.302/8.0 = **3.8×10⁻² C (38 mC)**. Repeat the whole experiment over 2.0 s instead of 0.20 s: ε and I both fall by ten, but q is **still 38 mC**.
9. **Contrast.** Had the coil's **plane contained B** throughout (θ = 90°), Φ = 0 at every instant, so **ε = 0** no matter how violently B was changed.

## Worked example 2 — motional emf and the energy audit

*A rod of length **0.25 m** slides at **4.0 m/s** on frictionless rails, B = **0.35 T** perpendicular to the plane of the circuit, total resistance **0.50 Ω**.*

1. **Emf.** ε = BLv = (0.35)(0.25)(4.0) = **0.35 V**.
2. **Current.** I = ε/R = 0.35/0.50 = **0.70 A**, flowing in the sense that opposes the *increase* in enclosed area.
3. **Force on the rod from that current.** F = BIL = (0.35)(0.70)(0.25) = **0.061 N**, directed **against** the motion. Equivalently F = B²L²v/R = (0.1225)(0.0625)(4.0)/0.50 = 0.061 N ✔.
4. **Mechanical power you must supply** to hold the speed constant: P = Fv = (0.061)(4.0) = **0.245 W**.
5. **Electrical power dissipated**: P = I²R = (0.70)²(0.50) = **0.245 W** ✔, and εI = (0.35)(0.70) = 0.245 W ✔. Three routes, one number: nothing is created.
6. **Release the rod** (mass m, no applied force). The retarding force B²L²v/R is proportional to v, so the rod **decelerates exponentially**, v = v₀e^(−t/τ) with τ = mR/B²L². It never quite stops, and **all** its kinetic energy ends up as heat in R.
7. **If Lenz's law ran the other way**, the force would be forward: the rod would accelerate for ever while also delivering ever more electrical power. That is the perpetual-motion machine Lenz's law exists to forbid.

## Worked example 3 — the a.c. generator

*A coil of **200 turns**, area **150 cm²**, rotates at **50 rev/s** in a field of **0.080 T**.*

1. **Area in SI.** 150 cm² = 150 × 10⁻⁴ = **1.50×10⁻² m²**.
2. **Angular speed.** ω = 2πf = 2π(50) = **314 rad/s**. (Using f = 50 in place of ω is wrong by 2π ≈ 6.28 — the commonest generator error.)
3. **Peak emf.** ε₀ = NBAω = (200)(0.080)(1.50×10⁻²)(314) = **75 V** (75.4 V).
4. **R.m.s. emf.** ε_rms = ε₀/√2 = 75.4/1.414 = **53 V**. Meters read this; the peak is what the insulation must survive.
5. **Output frequency.** **50 Hz** — one full sine cycle per revolution.
6. **Phase.** ε(t) = ε₀ sin ωt with Φ = BA cos ωt: the emf is **zero** at t = 0, when the coil is face-on and the flux is **greatest**, and **maximum** a quarter turn later, when the coil is edge-on and the flux is **zero**.
7. **Sensitivity.** Spinning at 100 rev/s doubles ε₀ to 151 V **and** doubles f to 100 Hz; the power into a fixed resistor therefore goes up **four-fold**, which is why the shaft becomes markedly harder to turn.

## Worked example 4 — self-inductance, back-emf, energy, and mutual inductance

*A solenoid: length **30 cm**, **800 turns**, cross-sectional area **5.0 cm²**, air core. A second coil of **150 turns** is wound tightly over its middle.*

1. **Self-inductance.** L = μ₀N²A/ℓ = (4π×10⁻⁷)(800²)(5.0×10⁻⁴)/(0.30) = (1.2566×10⁻⁶)(6.4×10⁵)(5.0×10⁻⁴)/0.30 = **1.34×10⁻³ H (1.34 mH)**.
2. **Check it against L = NΦ/I** at I = 2.5 A. n = 800/0.30 = 2667 m⁻¹; B = μ₀nI = (1.2566×10⁻⁶)(2667)(2.5) = 8.38×10⁻³ T; Φ = BA = 4.19×10⁻⁶ Wb; NΦ = 3.35×10⁻³ Wb; L = NΦ/I = 3.35×10⁻³/2.5 = **1.34×10⁻³ H** ✔. The two definitions are the same statement.
3. **Back-emf** while the current rises uniformly 0 → 2.5 A in 10 ms: dI/dt = 2.5/0.010 = **250 A/s**; |ε| = L dI/dt = (1.34×10⁻³)(250) = **0.34 V**. Note the emf is set by the **rate**, not by the 2.5 A.
4. **Energy stored** at 2.5 A: U = ½LI² = ½(1.34×10⁻³)(6.25) = **4.2×10⁻³ J (4.2 mJ)**. It is in the field, and comes back out when the current decays.
5. **Mutual inductance.** M = μ₀N₁N₂A/ℓ = (1.2566×10⁻⁶)(800)(150)(5.0×10⁻⁴)/0.30 = **2.51×10⁻⁴ H (0.251 mH)**. Shortcut: M/L₁ = N₂/N₁ = 150/800, so M = 1.34×10⁻³ × 0.1875 = 2.51×10⁻⁴ H ✔.
6. **Emf in the second coil** during the same 250 A/s change: ε₂ = M dI₁/dt = (2.51×10⁻⁴)(250) = **6.3×10⁻² V (63 mV)**.
7. **Coupling.** L₂ = μ₀N₂²A/ℓ = 4.71×10⁻⁵ H, so √(L₁L₂) = √(1.34×10⁻³ × 4.71×10⁻⁵) = 2.51×10⁻⁴ H, giving **k = M/√(L₁L₂) = 1.00** — perfect coupling, consistent with winding one coil directly on the other.
8. **Reciprocity check.** Drive the 150-turn coil instead and M is the *same* 0.251 mH: at 250 A/s it would induce 63 mV in the 800-turn coil. **M₁₂ = M₂₁.**
9. **Add an iron core of μᵣ = 400**: every one of L₁, L₂ and M is multiplied by 400 (L₁ = 0.54 H, M = 0.10 H), and the back-emf in step 3 becomes **134 V** — which is why switching off an iron-cored inductor makes a spark.

## Worked example 5 — the ideal transformer

*Primary **4800 turns** on **240 V** a.c.; the secondary is to run a **3.0 Ω** lamp at **6.0 V**.*

1. **Secondary turns.** N_s = N_p(V_s/V_p) = 4800 × (6.0/240) = **120 turns**.
2. **Secondary current.** I_s = V_s/R = 6.0/3.0 = **2.0 A**. Output power = V_sI_s = **12 W**.
3. **Primary current** (ideal): I_p = P/V_p = 12/240 = **0.050 A**. Check against the ratio: I_p/I_s = N_s/N_p = 120/4800 = 1/40, and 2.0/40 = 0.050 A ✔.
4. **Read the trade-off.** The voltage is stepped **down** by 40, so the current is stepped **up** by 40. Power is the same on both sides; a transformer redistributes V and I, never manufactures watts.
5. **On d.c.**: after the switch-on transient, dΦ/dt = 0 ⇒ **V_s = 0**. The lamp does not light — and meanwhile the primary, with no back-emf to limit it, draws a current limited only by its own small resistance and burns out.
6. **Real device**: efficiency 95–99 %, the shortfall being copper I²R loss, hysteresis, eddy currents (reduced by **laminating** the core) and leakage flux (k < 1).

## Commonly confused

- **ε depends on dΦ/dt, not on Φ and not on B.** A coil in a huge *steady* field has **zero** emf; a coil in a tiny but *rapidly changing* field can have a large one. This is the single most common error of the whole topic.
- **Motion is not the criterion — flux change is.** A completely stationary coil inside a solenoid whose current is rising has an emf. Conversely a coil translating at constant velocity *entirely inside* a uniform field has **none**, because Φ never changes. (The deck asserts the opposite; see the note.)
- **θ is measured from the normal.** "Plane perpendicular to B" ⇒ θ = 0 ⇒ **Φ maximum**. "Plane contains B" ⇒ θ = 90° ⇒ **Φ = 0**. Reading θ from the plane swaps sin and cos everywhere downstream.
- **Flux maximum ⇒ emf zero.** In a rotating coil the emf is the *slope* of the flux curve, so the two are a quarter-cycle out of step. Students routinely report peak emf at the face-on position, which is precisely where it vanishes.
- **Lenz opposes the *change*, not the field.** Decaying flux is opposed by a current whose field points the **same** way as B. "The induced field is always opposite to B" is wrong half the time.
- **Emf ≠ current.** An open coil has an emf and no current. Faraday's law gives ε; Ohm's law then gives I = ε/R. Questions that never mention resistance are asking only for ε.
- **The minus sign in ε = −N dΦ/dt is Lenz's, and it means direction.** It never means "the emf is a negative number", and it is a different animal from the minus in ε = −L dI/dt (same origin) and from the minus in Week 8's U = −μ·B (unrelated).
- **N belongs in Faraday's law for a coil.** ε = −N dΦ/dt. Writing ε = −dΦ/dt and then wondering why more turns give more voltage is exactly the deck's inconsistency.
- **Induced charge q = NΔΦ/R is independent of the time taken.** Slow the change down and the current is smaller for longer; the charge is identical. "Flip it faster to move more charge" is false.
- **ε = BLv needs all three perpendicular.** L is the length **across** the motion; a rod sliding along its own length, or moving parallel to B, generates nothing.
- **The retarding force on a generator is the point, not a nuisance.** F = B²L²v/R is where the electrical energy comes from. A generator with an open circuit is easy to turn; connect the load and it fights you.
- **L depends on geometry and core, never on I.** L = μ₀μᵣN²A/ℓ contains no current. "The inductance doubles when the current doubles" is wrong; the *stored energy quadruples*, because U = ½LI².
- **N² in the inductance, N in the flux.** Doubling the turns of a solenoid quadruples L (twice the field, twice the linkage). Using N instead of N² is the standard inductance slip.
- **A steady current gives no back-emf.** ε = L dI/dt = 0 when dI/dt = 0, however large I is. And ½LI² is an **energy in joules**, not a voltage.
- **1 H = 1 V·s/A, 1 Wb = 1 T·m² = 1 V·s.** Mixing henries with webers, or quoting a flux in teslas, loses marks that cost nothing to keep.
- **Transformers do not work on d.c.**, and they do not "induce a current" in the secondary — they induce an **emf**, which drives a current only if the secondary circuit is closed.
- **A step-up transformer steps the current *down*.** V_pI_p = V_sI_s. Believing that both rise is believing in free energy — the same error Lenz's law forbids.
- **Mutual inductance is one number per pair: M₁₂ = M₂₁.** It does not depend on which coil you drive, however different their turn counts.
- **Self- vs mutual inductance.** Self: a coil's current inducing an emf **in itself** (ε = −L dI/dt). Mutual: coil 1's current inducing an emf **in coil 2** (ε₂ = −M dI₁/dt). A transformer uses M; a spark at a switch is L.
- **Eddy currents are induced currents, not a separate law.** Laminating a core interrupts their paths; it does nothing to the useful flux.

*Note on the source. The Week 10 lecture deck (`Electromagnetic-Induction-PDF`) is discursive prose. It states three objectives — define electromagnetic induction, **calculate induced emf and current**, explain how a changing field produces a current — and then **writes exactly one equation in the whole deck**: ε = −dϕ/dt, buried in the answer to the mid-lesson question. Φ = BA cos θ, ε = −N dΦ/dt, ε = BLv, ε = NBAω sin ωt, L = NΦ/I, ε = −L dI/dt, U = ½LI², M = N₂Φ₂₁/I₁ and V_s/V_p = N_s/N_p are all absent, and the magnet-and-galvanometer, dynamo and transformer figures exist only as images with no text layer, so the second objective is unsupported by anything calculable. The standard 100-level treatment of exactly those stated objectives has been supplied above. Five points need correcting before they reach an exam. **(i)** *"For Faraday's law to hold true there must be movement between the coil and the magnetic field"* — **false**, and the deck contradicts it two slides later with the transformer, in which nothing moves at all. The criterion is a **changing flux**, of which relative motion is only one cause. Faraday's law is likewise quoted as *"a voltage is induced whenever relative motion exists between a conductor and a magnetic field"*; the correct statement is *whenever the flux linking the circuit changes*. **(ii)** The formula is given as ε = −dϕ/dt with **no N**, while the deck simultaneously argues that more turns give more voltage; for a coil it must be **ε = −N dΦ/dt**. **(iii)** *"The negative sign indicates the direction of the emf induced. This is Faraday's second law"* — the sign is **Lenz's law**, and it should be named as such and justified by energy conservation. **(iv)** *"An alternating current passes through the primary … which induces an alternating current in the secondary"* — it induces an **emf**; a current flows only if the secondary circuit is closed. The deck's own opening definition has the same slip, defining induction as "a current produced because of voltage production". **(v)** *"An increase in the number of turns results in an increase in the magnetic field strength"* is true only at fixed length: B = μ₀nI depends on turns **per metre**, so turns added by lengthening the coil change nothing. Note also that the deck and the week's Summary sheet **name different topics**: the deck is *Electromagnetic Induction*, the sheet is *Self and Mutual Inductances*, and neither contains a single inductance formula — both bodies of material are treated above, since both are examinable. Further-reading item 2 ("6.3 Applying Gauss's Law") is a copy-paste error, irrelevant to induction. Ligatures are lost throughout the extraction ("ﬂux" → "ux", "ﬁeld" → "eld", "deﬁne" → "dene", "dierent", "oered"), and "baeries" is *batteries*, "boom" is *bottom*, "Clis" is *Cliffs*.*
