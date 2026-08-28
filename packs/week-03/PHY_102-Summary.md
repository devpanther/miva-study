# PHY_102 — Week 3 Summary

*General Physics II · Week 3 (21–27 Sep 2026) · Topic: Electromotive Force & Energy in Electric Fields*

## The 8 most examinable things this week

1. **EMF, defined**: the **work done by the source on each coulomb of charge** driven round the circuit — ε = W/Q, unit the **volt (V) = J/C**. It is *not* a force despite the name; its dimensional formula is **[M¹L²T⁻³I⁻¹]**.
2. **EMF vs terminal p.d.**: ε is what the cell *supplies*; V is what appears **across the terminals once current flows**. They are equal **only when no current flows** (open circuit / ideal voltmeter). Both are in volts; they are not the same quantity.
3. **The two circuit equations**: **ε = I(R + r)** and **ε = V + Ir**, i.e. **V = ε − Ir**. The term **Ir** is the "lost volts" — energy per coulomb dissipated *inside* the cell by its own internal resistance r.
4. **The V–I experiment**: plot terminal p.d. V (y-axis) against current I (x-axis) for several external resistances. Straight line, **gradient = −r**, **y-intercept = ε** (the voltage extrapolated to I = 0). Disconnect the cell between readings so it does not drain.
5. **Motional emf**: a rod of length l moving with speed v perpendicular to a uniform field B generates **ε = Blv**. Mechanism: the Lorentz force **F = qvB** pushes free charges along the rod; work per unit charge over length l is Bvl. **Faraday's law**: ε = −N dΦ_B/dt, with Φ_B = BA (here Φ_B = Blx).
6. **Charging a capacitor is work done**: V = Q/C, and the work the battery does — stored as **electric potential energy** — is **U = ½CV² = ½QV = Q²/2C**. Chemical energy → electrostatic potential energy.
7. **Parallel-plate relations**: **C = ε₀A/d** (vacuum), **C = εA/d = Kε₀A/d** (dielectric of constant K), and **V = Ed**. ε₀ = **8.85×10⁻¹² F/m = 8.85×10⁻¹² C²/(N·m²)**.
8. **Energy density of an electric field**: **u_E = ½ε₀E²**, units **J/m³** — energy per unit volume stored *in the field itself*, present even in empty space. Total energy between the plates = **U = ½ε₀E²(A·d)**, where **A·d is the volume** of the gap.

## Formulas, definitions and constants (state these exactly)

**Electromotive force**
ε = W/Q — the energy in joules given by the source to each coulomb of charge, unit **volt**. Symbol ε (or ϵ). Produced by an electrochemical cell, a generator, or a **changing magnetic field**. In a source, one terminal becomes positively charged and the other negatively charged.

**Circuit forms**
ε = I(R + r) , ε = V + Ir , V = ε − Ir
R = external (load) resistance, r = internal resistance of the cell, I = current, V = terminal potential difference. As R increases, I falls, the lost volts Ir shrink, and **V rises towards ε**; V = ε only in the limit I = 0.

**Dimension of EMF** (derive it, don't quote it)
ε = Work × Charge⁻¹. Work = force × displacement = mass × acceleration × displacement = [M][L T⁻²][L] = **[M¹L²T⁻²]**. Charge = current × time = **[I¹T¹]**. So ε = [M¹L²T⁻²][I¹T¹]⁻¹ = **[M¹L²T⁻³I⁻¹]**.

**Motional and induced emf**
Φ_B = Blx (loop area grows as the rod slides); Lorentz force on a carrier F = qvB; W = QBvl; ε = W/Q = **Blv**. Sign: ε = −Blv, the minus sign giving *direction* only. **Faraday's law**: any change in the magnetic flux through a coil induces an emf proportional to minus the rate of change of flux, ε = −N dΦ_B/dt (N = number of turns). Applications named: transformers, generators, hydroelectric dams, and the **electromagnetic flowmeter** (conducting liquid is the moving conductor; induced voltage ∝ average flow velocity; no moving parts, so it suits wastewater and dirty conductive liquids, but not hydrocarbons or distilled water).

**Can emf be negative?** Yes — e.g. the back-emf of an inductor opposes the incoming power, so its direction is opposite to the real power and it is taken as negative.

**Energy stored in a capacitor**
V = Q/C , **U = W = ½CV² = ½QV = Q²/(2C)** (joules). The battery does this work by separating charge, moving electrons from the plate that becomes positive to the plate that becomes negative.

**Uniform field in a parallel-plate capacitor**
E is uniform between the plates and ≈ zero outside, so the energy density is uniform too.
C = εA/d , V = Ed , **u_E = ½ε₀E² (J/m³)** , **U = u_E × (A·d) = ½ε₀E²Ad (J)**.
With a dielectric of constant K: ε = Kε₀, C = Kε₀A/d = KC₀, u_E = ½Kε₀E².

**Dielectrics** (Faraday, 1837): an insulator (mineral oil, plastic) between the plates multiplies the capacitance by the **dielectric constant K**. K = 1 in vacuum by definition, and only slightly above 1 for air. A dielectric also imposes a maximum working voltage **V_max, the breakdown potential**; exceed it substantially and the material breaks down and forms a conducting path between the plates. Each material has a **dielectric strength** — the largest field it tolerates without breaking down. *(The lesson's dielectric exercise then uses E′ = E√K and u′ = ½ε₀E′².)*

**Application — the defibrillator**: a battery charges a capacitor to a high voltage, storing energy slowly (modest power); closing the switch dumps a portion of that stored energy from paddle to paddle through the patient in a very short time — high power from modest stored energy.

**Capacitors in parallel store the most energy** for a given supply voltage, because the equivalent capacitance in parallel exceeds the largest individual capacitance, and U = ½CV² grows with C.

## Worked example 1 — terminal p.d. and lost volts

A cell of ε = 1.5 V and r = 0.50 Ω is connected across R = 2.5 Ω. Find I, V and the power wasted inside the cell.

1. ε = I(R + r) → I = 1.5/(2.5 + 0.50) = 1.5/3.0 = **0.50 A**. (Using I = ε/R would give 0.60 A — the classic slip.)
2. Lost volts: Ir = 0.50 × 0.50 = 0.25 V.
3. V = ε − Ir = 1.5 − 0.25 = **1.25 V**, which is also IR = 0.50 × 2.5 = 1.25 V ✓.
4. Power inside the cell = I²r = (0.50)²(0.50) = **0.125 W**; delivered to R = I²R = 0.625 W; total = εI = 0.75 W ✓.

## Worked example 2 — finding ε and r from two readings (the V–I experiment)

With a 4.0 Ω load the current is 0.30 A; with a 9.0 Ω load it is 0.15 A. Find ε and r.

1. ε is the *same* in both cases: 0.30(4.0 + r) = 0.15(9.0 + r).
2. 1.20 + 0.30r = 1.35 + 0.15r → 0.15r = 0.15 → **r = 1.0 Ω**.
3. ε = 0.30(4.0 + 1.0) = **1.5 V** (check: 0.15 × 10.0 = 1.5 V ✓).
4. Terminal p.d.s: V₁ = 1.5 − 0.30(1.0) = 1.20 V; V₂ = 1.5 − 0.15(1.0) = 1.35 V. **The bigger load gives the bigger terminal p.d.**, because the current — not the resistance — sets the lost volts.

## Worked example 3 — motional emf

A rod of length 0.70 m slides along rails at 1.0 m/s, perpendicular to a field of 20 T. The circuit's total resistance is 2.0 Ω.

1. ε = Blv = 20 × 0.70 × 1.0 = **14 V**. (The minus sign in ε = −Blv fixes direction only.)
2. I = ε/R_total = 14/2.0 = **7.0 A**.
3. Note that B is *constant in time*: the flux Φ_B = Blx still changes because **x changes**, which is what Faraday's law responds to.

## Worked example 4 — capacitance, charge and energy by two routes

A parallel-plate capacitor in vacuum has A = 0.020 m², d = 5.0 mm, and 12 V across it.

1. C = ε₀A/d = (8.85×10⁻¹²)(0.020)/(0.0050) = **3.54×10⁻¹¹ F**.
2. Q = CV = (3.54×10⁻¹¹)(12) = **4.25×10⁻¹⁰ C**.
3. E = V/d = 12/0.0050 = **2.4×10³ V/m**.
4. Route A: U = ½CV² = ½(3.54×10⁻¹¹)(144) = **2.55×10⁻⁹ J**.
5. Route B: u_E = ½ε₀E² = ½(8.85×10⁻¹²)(2.4×10³)² = 2.55×10⁻⁵ J/m³; volume = Ad = 0.020 × 0.0050 = 1.0×10⁻⁴ m³; U = (2.55×10⁻⁵)(1.0×10⁻⁴) = **2.55×10⁻⁹ J** ✓ — the two routes must agree.

## Worked example 5 — energy density vs total energy

Same plates (A = 0.020 m², d = 5.0 mm), vacuum, but now the field is stated directly as E = 200 N/C.

1. u_E = ½ε₀E² = ½(8.85×10⁻¹²)(200)² = ½(8.85×10⁻¹²)(4.0×10⁴) = **1.77×10⁻⁷ J/m³**.
2. Volume = Ad = 1.0×10⁻⁴ m³.
3. U = u_E × Ad = **1.77×10⁻¹¹ J**.
4. Stopping at step 1 and writing "1.77×10⁻⁷ J" is the single most common error here — that number is a **density**, in J/m³, not an energy. Doubling E to 400 N/C **quadruples** both.

## Commonly confused

- **EMF vs terminal p.d.**: same unit, different quantity. ε = energy supplied per coulomb; V = p.d. actually available at the terminals with current flowing. V < ε whenever I > 0, and V = ε only at I = 0.
- **"Lost volts" Ir depends on I, not on R**: a *larger* external resistance means a *smaller* current, *smaller* Ir, and therefore a *larger* terminal p.d. Students routinely reason "more resistance, more voltage dropped, less at the terminals" — backwards.
- **I = ε/R instead of I = ε/(R + r)**: r is in series with R and must be included, or every downstream number is wrong.
- **The V–I graph**: gradient is **−r** (negative, and it gives the *internal*, not the external, resistance); the **intercept** is ε. Reading the gradient as +r or as R loses the whole question.
- **ε is a constant of the cell**: in ε = I(R + r), ε does not fall when I falls. It is I and V that change.
- **Motional emf needs relative motion, not a time-varying B**: a steady 20 T field still gives an emf because Φ_B = Blx changes as x changes. "Constant B ⇒ no emf" is wrong.
- **Energy vs energy density**: U = ½CV² is in **joules**; u_E = ½ε₀E² is in **J/m³**. Multiply the density by the gap volume **A·d** to get the energy. (The lecture slide writes "U = ½εE²" — dimensionally that is a density; treat it as u_E.)
- **The ½ in ½CV² and ½ε₀E²**: it is there because the voltage builds from 0 to V as the charge accumulates, so the *average* p.d. during charging is V/2. Dropping it doubles every answer.
- **Squares are unforgiving**: U ∝ V² and u ∝ E², so doubling the field quadruples the stored energy; and convert mm → m *before* using d.
- **Dielectric effects**: K > 1 raises the capacitance (C = KC₀) but also brings a **breakdown potential** V_max — the ceiling on how much you can store is set by dielectric strength, not by C alone. K = 1 exactly in vacuum, barely above 1 in air.
- **Series vs parallel for stored energy**: at a given supply voltage, **parallel** wins, because C_parallel > any single C and U = ½CV². Series *reduces* the equivalent capacitance.
- **"EMF is a force"**: it is not. Its unit is the volt (J/C), and its dimensions are [M¹L²T⁻³I⁻¹] — nothing like the newton's [M¹L¹T⁻²].
