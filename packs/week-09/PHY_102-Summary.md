# PHY_102 — Week 9 Summary

*General Physics II · Week 9 (2 – 8 Nov 2026) · Topic: The Lorentz Force — F = q(E + v × B), the magnetic force on a moving charge and on a current-carrying conductor, and (from the week's summary sheet) electromagnetic waves and the spectrum*

**Continues from Week 8.** Week 8 asked what a field *does to a dipole* (τ = μ × B, U = −μ·B). This week asks what a field does to a **single moving charge**, and then adds up those charges to recover the force on a wire — which is where last week's τ = μ × B actually came from. Nothing about phasors or impedance is used.

## The 8 most examinable things this week

1. **The Lorentz force law: F = qE + q(v × B) = q(E + v × B).** The total electromagnetic force on a point charge. **F** in newtons, **q** in coulombs (**signed**), **E** in N/C = V/m, **v** in m/s, **B** in tesla. The two terms are **added as vectors**, never as numbers, and only coincide in direction by accident.
2. **Magnitude of the magnetic part: F = qvB sin θ**, where **θ is the angle between v and B**. It is **zero if the charge is at rest (v = 0)** and **zero if v is parallel or antiparallel to B** (θ = 0° or 180°), and **maximum, qvB, when v ⊥ B**. This is why charged particles **spiral along** field lines rather than cross them. The **electric** part qE has no such condition: it acts on a charge whether it moves or not.
3. **Direction: right-hand rule 1 (RHR-1), as the deck states it.** Point the **thumb along v**, the **fingers along B**, and **F comes out of the palm** — for a **positive** charge. For a **negative** charge the force is the **opposite** way. **F is perpendicular to the plane containing v and B**, hence perpendicular to *both* — never along B, never along v.
4. **The magnetic force does no work.** Because **F ⊥ v** always, power P = **F·v = 0**: the magnetic force changes the **direction** of v and never its **magnitude**. A magnetic field cannot speed a particle up, cannot change its kinetic energy, and cannot start a particle moving from rest. Only the **electric** term qE does work. (The deck's sentence "work is done on moving charges when in a magnetic field" is wrong; see the note at the end.)
5. **Uniform B, with v ⊥ B ⇒ uniform circular motion.** qvB supplies the centripetal force: qvB = mv²/r, so **r = mv/(qB) = p/(qB)**, and **T = 2πm/(qB)**, **f_c = qB/(2πm)**. The **period and frequency do not depend on the speed or the radius** — the basis of the cyclotron. If v has a component **along** B, that component is untouched and the path is a **helix** of **pitch = v∥T**.
6. **Crossed fields (velocity selector): a charge goes straight through undeflected when qE = qvB, i.e. v = E/B.** The selected speed is **independent of q and of m**, and is the same for positive and negative particles, because both forces reverse together. Faster particles are deflected by the magnetic force, slower ones by the electric force.
7. **Force on a current-carrying conductor: dF = I dl × B; for a straight wire in a uniform field F = I L × B, magnitude F = BIL sin θ**, with **θ the angle between the current direction and B**. It follows from the single-charge law: with linear charge density λ and drift speed v, dq = λ dl and **I = λv**, so dF = (dq)v × B = (λ dl)v × B = **I dl × B**. Zero when the wire lies **along** B; maximum **BIL** when the wire is **⊥** to B. Direction by RHR-1 with the **conventional current** in place of v.
8. **Electromagnetic waves (the week's summary sheet).** An oscillating **E** field generates an oscillating **B** field and vice versa; the wave is **transverse**, with **E ⊥ B**, and **both ⊥ to the direction of propagation** (that direction is the direction of **E × B**). All travel in vacuum at **c = 3.00×10⁸ m/s**, so **c = fλ**. The **spectrum**, in order of **increasing frequency and decreasing wavelength**: **radio → microwave → infrared → visible → ultraviolet → X-rays → gamma rays**. Energy per photon **E = hf = hc/λ** with **h = 6.63×10⁻³⁴ J·s**; total energy of n photons **= nhf**.

## The two components, separately

| | Electric part | Magnetic part |
|---|---|---|
| Formula | **F_E = qE** | **F_B = q v × B**, F = qvB sin θ |
| Needs the charge to move? | **No** | **Yes** — zero if v = 0 |
| Direction | **Along E** for q > 0, **opposite E** for q < 0 | **⊥ to both v and B**; RHR-1, reversed for q < 0 |
| Depends on an angle? | No | Yes: **sin θ**, θ between v and B |
| Does work? | **Yes** — changes speed and KE | **No** — F ⊥ v, so P = F·v = 0 |
| Effect on the path | Accelerates along the field | **Bends** the path at constant speed |
| Zero when | E = 0 | v = 0, **or v ∥ B**, or B = 0 |

The deck's first two slides say exactly this: "a positive charge q moving in an electric field will experience a force in the same direction as the electric field", and "the magnitude of the magnetic force depends on both the charge of the particle and its **velocity perpendicular to** the magnetic field lines" — the second clause is the sin θ.

## Units, and the cgs trap

- **Tesla:** **1 T = 1 N/(C·m s⁻¹) = 1 N/(A·m) = 1 kg·s⁻²·A⁻¹ = 1 Wb/m².** The deck's "the Tesla equals a Newton/(coulomb × meter/sec)" is just B = F/(qv) rearranged.
- **Gauss:** **1 T = 10⁴ G**, so **1 G = 10⁻⁴ T**. (The extractor prints 10⁴ as "104".) The Earth's field ≈ 0.5 G = 5×10⁻⁵ T; a 2.5 T MRI magnet is 2.5×10⁴ G.
- **E** is measured in **N/C**, identical to **V/m**.
- **The factor 1/c.** The deck writes dF = (λ dl)(v/c) × B and dF = (I/c) dl × B. That **1/c belongs to Gaussian (cgs) units only**. In **SI** — which is what every Miva numerical question uses — there is **no c**: **F = qv × B** and **dF = I dl × B**. Dividing an SI answer by 3×10⁸ is a guaranteed loss of marks.
- A tesla is a very large unit. Laboratory fields are millitesla; if a numerical answer comes out in hundreds of tesla, a unit conversion has gone wrong.

## Geometry: why the force is where it is

**v × B is a cross product**, so everything follows from two properties of it:

- **Magnitude = vB sin θ.** Parallel vectors give **zero** (the deck: "if the two vectors are parallel, their cross product will be equal to zero"); perpendicular vectors give the maximum.
- **Direction ⊥ to the plane of the two vectors**, sense by the right hand.

Hence: **F ⊥ v** (so no work, so constant speed), and **F ⊥ B** (so the component of motion along B is never affected). Split **v** into **v∥** (along B) and **v⊥** (perpendicular to B). The magnetic force acts only on **v⊥**, turning it in a circle of radius **r = mv⊥/qB**, while **v∥** sails on unchanged. The two together make a **helix**. If v∥ = 0 it is a circle; if v⊥ = 0 it is a straight line along the field line.

**Sign check.** Reversing the sign of q reverses **F**. Reversing the direction of **v** also reverses **F**. Reversing **both** leaves **F** unchanged — which is why an electron and a proton fired the *same* way in the same field curve *opposite* ways, but an electron beam and a positive-ion beam moving in *opposite* directions curve the *same* way.

## From one charge to a whole wire

Take a wire of cross-section carrying free charges of linear density **λ** drifting at **v**. In a length **dl**:

**dq = λ dl** ⟹ **dF = (dq) v × B = (λ dl) v × B**, and since **I = λv**, **dF = I dl × B**.

The deck's remark that "these two formulas are completely the same" is the point: writing the current as a scalar and giving the **direction to dl** is the same statement as writing the current as a vector. For a straight wire of length L in a uniform field:

**F = I L × B**, **F = BIL sin θ**, θ between the **current** and **B**.

This is the bridge back to Week 8: two opposite sides of a current loop feel **BIL** in opposite directions, giving a **couple** τ = μB sin θ with **μ = NIA**, and zero net force. Everything about motors follows from it.

**What one magnet does to another.** The deck asks the question and answers it correctly: all magnetic fields are ultimately produced by **moving charges** (orbital and spin currents in the atoms), so magnet-on-magnet forces are the same qv × B force acting between circulating currents. There is no separate "magnetic charge" force law.

## Applications named in the deck

- **Electric motors** — a current loop in a field feels F = BIL on each side, hence a torque; the commutator reverses I each half-turn so the torque keeps one sign.
- **Maglev trains** — superconducting or electromagnet coils levitate the train and the same force propels it along the guideway, removing rolling friction.
- **Particle accelerators and mass spectrometers** — B bends (r = mv/qB, so heavier or faster ions bend less), E accelerates. The division of labour is exactly the "no work" property.
- **Wireless communication** (the summary sheet's case study) — an oscillating current in a transmitter aerial makes an oscillating **E**, which makes an oscillating **B**, which propagates as a radio wave; the receiver reads it back as a driven current. Higher frequency ⇒ shorter wavelength ⇒ more bandwidth and smaller aerials, but poorer diffraction round obstacles and shorter range.

## Worked example 1 — the deck's own mid-lesson question, done properly

*A charge q = 2.5 C moves at v = 1.5 m/s in a region where E = 5 N/C and B = 7.25 T. Find the Lorentz force.*

1. **Electric part.** F_E = qE = (2.5)(5) = **12.5 N**, along **E**.
2. **Magnetic part, assuming v ⊥ B** (θ = 90°, sin θ = 1): F_B = qvB sin θ = (2.5)(1.5)(7.25)(1) = **27.19 N**, perpendicular to both v and B.
3. **If — and only if — the two forces happen to point the same way**, they add arithmetically: F = 12.5 + 27.19 = **39.69 N ≈ 39.68**, which is the deck's answer (option a).
4. **The honest statement of the assumptions.** Adding the magnitudes requires **both** that θ = 90° **and** that **F_E is parallel to F_B**. Neither is given in the question.
5. **Change one assumption: let E be parallel to B.** Then F_E lies along **B**, while F_B is ⊥ **B** — the two are **perpendicular**, so
 F = √(12.5² + 27.19²) = √(156.25 + 739.2) = √895.4 = **29.9 N**, not 39.7 N.
6. **Change the other: let v make 30° with B.** F_B = (27.19)(sin 30°) = **13.59 N**, and with F_E parallel to it, F = 12.5 + 13.59 = **26.1 N**.
7. **Let v be parallel to B.** F_B = **0** and the whole force is the electric 12.5 N. The particle accelerates in a straight line along **E** and the magnetic field might as well not be there.

**Moral:** *the Lorentz force is a vector sum*. Adding 12.5 and 27.19 is a special case, not a rule.

## Worked example 2 — crossed fields and the velocity selector

*A charge q = +2.0 μC travels at v = 5.0×10⁵ m/s along **+x**. The field B = 0.40 T lies along **+y** and the field E = 2.0×10⁵ V/m lies along **−z**.*

1. **Magnetic force.** x̂ × ŷ = **ẑ**, so F_B = qvB ẑ = (2.0×10⁻⁶)(5.0×10⁵)(0.40) = (2.0×10⁻⁶)(2.0×10⁵) = **0.40 N in +z**.
2. **Electric force.** F_E = qE = (2.0×10⁻⁶)(2.0×10⁵) = **0.40 N in −z** (q positive, so along **E**).
3. **Net force = 0.** The particle crosses the region in a **straight line at constant speed**. Check with the selector condition: **v = E/B = (2.0×10⁵)/(0.40) = 5.0×10⁵ m/s** ✔.
4. **A slower particle, v = 2.5×10⁵ m/s.** F_B = 0.20 N (+z), F_E = 0.40 N (−z) — unchanged, since it does not depend on v — so the net force is **0.20 N in −z**: the slow particle is swept **towards −z**, i.e. the way the electric force points. A faster one is swept **+z**.
5. **Change the sign of the charge.** Both forces reverse together, so the balance still holds: the selected speed **E/B** is the same for electrons and for positive ions, and does not involve **m** at all. That is exactly what makes it a *speed* filter and not a mass filter.
6. **Add a second stage.** Beyond the slit, with E switched off, the same B bends the beam to radius **r = mv/qB** — now the radius *does* depend on m/q, and the device has become a **mass spectrometer**.

## Worked example 3 — circular and helical motion of a proton

*A proton (m = 1.67×10⁻²⁷ kg, q = 1.60×10⁻¹⁹ C) enters a uniform field B = 0.25 T at v = 3.0×10⁶ m/s, initially **perpendicular** to B.*

1. **Set the magnetic force equal to the centripetal force**: qvB = mv²/r ⟹ **r = mv/(qB)**.
2. **Radius.** r = (1.67×10⁻²⁷)(3.0×10⁶)/[(1.60×10⁻¹⁹)(0.25)] = (5.01×10⁻²¹)/(4.00×10⁻²⁰) = **0.125 m = 12.5 cm**.
3. **Period.** T = 2πr/v = 2πm/(qB) = 2π(1.67×10⁻²⁷)/(4.00×10⁻²⁰) = **2.62×10⁻⁷ s**; cyclotron frequency f = 1/T = **3.8 MHz**. Note **v has cancelled**: speed the proton up and the radius grows in exact proportion, so the lap time is unchanged.
4. **Kinetic energy.** KE = ½mv² = ½(1.67×10⁻²⁷)(3.0×10⁶)² = **7.5×10⁻¹⁵ J ≈ 47 keV**, and it is **the same after one lap, ten laps, or a million** — the magnetic force does no work.
5. **Now send it in at 30° to B.** v⊥ = v sin 30° = **1.5×10⁶ m/s**, v∥ = v cos 30° = **2.6×10⁶ m/s**.
 Radius uses **v⊥ only**: r = (1.67×10⁻²⁷)(1.5×10⁶)/(4.00×10⁻²⁰) = **0.063 m**.
 The period is **unchanged** at 2.62×10⁻⁷ s (it never contained v).
 **Pitch** (advance per turn) = v∥T = (2.6×10⁶)(2.62×10⁻⁷) = **0.68 m**. The path is a helix of radius 6.3 cm and pitch 68 cm.
6. **An electron in the same field at the same speed** would orbit with r = (9.11×10⁻³¹/1.67×10⁻²⁷) × 0.125 m = **6.8×10⁻⁵ m**, about 1836 times smaller, and would circulate **the opposite way round**.

## Worked example 4 — force on a current-carrying wire

*A straight wire of length L = 25 cm carries I = 8.0 A in a uniform field B = 0.30 T. The wire makes an angle of 40° with the field.*

1. **Convert first.** L = 25 cm = **0.25 m**. (Leaving it in centimetres multiplies the answer by 100.)
2. **F = BIL sin θ** = (0.30)(8.0)(0.25)(sin 40°) = (0.60)(0.643) = **0.386 N ≈ 0.39 N**.
3. **The maximum**, with the wire ⊥ to B: F = BIL = **0.60 N**. **The minimum**, with the wire **along** B: **zero** — a wire laid along the field lines feels nothing, however large the current.
4. **Direction.** RHR-1 with the **conventional current** in the role of v: thumb along I, fingers along B, force out of the palm — **perpendicular to the plane containing the wire and B**, so it pushes the wire **sideways**, never along itself and never along B.
5. **Reverse the current** and the force reverses. **Reverse the field too** and it is back as it was — which is why a d.c. motor needs a **commutator** to reverse I every half turn, and why an a.c. motor works at all.
6. **Cross-check with the single-charge picture.** If the wire holds n = 8.5×10²⁸ free electrons per m³ in a cross-section A = 1.0 mm², the drift speed is v = I/(nAe) ≈ 5.9×10⁻⁴ m/s — under a millimetre per second. The force per electron is minute; **F = BIL is the sum of ~10²² of them**, which is why a whole wire jumps while no individual electron does anything dramatic.

## Worked example 5 — electromagnetic waves and photons

*(a) An FM station broadcasts at f = 100 MHz. (b) Green light has λ = 500 nm. Take c = 3.00×10⁸ m/s, h = 6.63×10⁻³⁴ J·s.*

**(a)** λ = c/f = (3.00×10⁸)/(1.00×10⁸) = **3.00 m**.
 Photon energy E = hf = (6.63×10⁻³⁴)(1.00×10⁸) = **6.63×10⁻²⁶ J = 4.1×10⁻⁷ eV**.
 A 20 kW transmitter therefore emits n = P/E = (2.0×10⁴)/(6.63×10⁻²⁶) = **3.0×10²⁹ photons per second** — so many that the radiation behaves as a smooth classical wave.

**(b)** f = c/λ = (3.00×10⁸)/(5.00×10⁻⁷) = **6.00×10¹⁴ Hz**.
 E = hf = (6.63×10⁻³⁴)(6.00×10¹⁴) = **3.98×10⁻¹⁹ J = 2.5 eV** — about 10¹⁹ times the FM photon, which is why light can eject electrons and FM radio cannot.
 **Total energy of 5.0×10¹⁵ such photons** = nhf = (5.0×10¹⁵)(3.98×10⁻¹⁹) = **2.0×10⁻³ J**.

**Checks that catch errors.** λ and f are **inversely** proportional, so a *larger* frequency must give a *smaller* wavelength; nm = 10⁻⁹ m and MHz = 10⁶ Hz; and c = fλ holds **in vacuum** — in a medium of refractive index n the speed and the wavelength both fall by n while **f is unchanged**.

## Commonly confused

- **F = qE + qv × B is a vector sum.** The two terms point in different directions unless the geometry makes them agree. Adding the magnitudes — as the deck's mid-lesson answer does — is only valid when F_E ∥ F_B.
- **The magnetic force does no work; the electric force does.** F_B ⊥ v ⇒ P = F·v = 0 ⇒ **constant speed, constant kinetic energy**. A magnetic field bends; it never accelerates in the sense of speeding up. "Work is done on moving charges in a magnetic field" (deck) is false.
- **"No work" ≠ "no acceleration".** There is a real centripetal acceleration a = qvB/m; it is **perpendicular** to v, so it changes direction only. Acceleration and speeding-up are not the same thing.
- **θ in F = qvB sin θ is between v and B**, not between v and F (which is always 90°) and not the angle to any wall or plate.
- **sin, not cos.** Maximum force when **v ⊥ B**; **zero** when v ∥ B. Using cos inverts both statements — the single commonest wrong answer in this topic.
- **A stationary charge feels qE but no magnetic force at all.** A charge at rest in a pure magnetic field stays at rest forever.
- **F is perpendicular to B, so it is never "along the field".** Nor is it along v. It is ⊥ to the plane of the two.
- **RHR-1 gives the force on a *positive* charge.** For an electron, work out the positive-charge answer and then **reverse it**; do not switch to the left hand halfway through a question and forget which convention you are in.
- **r = mv/qB depends on speed, T = 2πm/qB does not.** Doubling v doubles the radius and leaves the period alone. Momentum, not speed, is what r really measures: r = p/qB.
- **The velocity selector's v = E/B contains no q and no m.** It filters *speed*, identically for electrons and ions. The mass dependence only appears in the second, magnet-only stage.
- **Crossed fields: the electric force does not depend on v, the magnetic force does.** That asymmetry is the whole mechanism — it is why exactly one speed passes.
- **The SI law has no 1/c.** The deck's dF = (I/c) dl × B is the **cgs/Gaussian** form. In SI, **dF = I dl × B**.
- **1 T = 10⁴ G, not 10⁴ T = 1 G.** The tesla is the big unit; the gauss is the small one.
- **F = BIL sin θ takes θ between the *current* and B** — not between the wire and the force, and not between B and the plane of anything.
- **N, not N/s.** The deck's "F = 125 N/s" is a slip; force is measured in **newtons**.
- **In an EM wave, E and B are perpendicular to *each other* and to the direction of travel** — the wave is **transverse**, and there is no longitudinal component. "E is along the direction of propagation" is the standard wrong answer.
- **c = fλ: f and λ are inversely related.** Gamma rays have the **highest** frequency and the **shortest** wavelength; radio waves the reverse. Both ends of the spectrum travel at the same speed c in vacuum.
- **Photon energy depends on frequency, not on intensity.** A brighter red lamp emits *more* photons, not *more energetic* ones; E = hf.

*Note on the source. The Week 9 deck (`Lorentz-Force-PDF`) extracts as continuous prose rather than as slide titles, so the substance above is the deck's own — F_e = qE, F_m = q(v × B), F = qvB sin θ, RHR-1, dq = λ dl, I = λv, dF = I dl × B, the tesla, 1 T = 10⁴ G, and the motor/maglev applications are all in the text layer. **Four things in it must be corrected before they reach an exam.** (i) "In Lorentz force, the **work done** is proportional to the charge q, and the velocity v of the charge" and "**work is done** on moving charges when in a magnetic field" — it is the **force**, not the work, that is proportional to q and v; the magnetic force is perpendicular to v and therefore does **exactly zero** work. (ii) The law is written in **cgs** with factors of 1/c (dF = (I/c) dl × B); every Miva numerical question is in **SI**, where the c does not appear. (iii) The solved example ends "F = 125 **N/s**" — the unit of force is the newton. (iv) The mid-lesson question adds the electric and magnetic magnitudes arithmetically (12.5 + 27.19 = 39.68), which silently assumes both that v ⊥ B and that the two forces are parallel; Worked example 1 above shows what the answer becomes when either assumption is dropped. Ligatures are lost throughout the extraction ("ﬁeld" → "eld", "ﬂow" → "ow", "diﬀerent" → "dierent", "Jeﬀ Sanny" → "Je Sanny"), and "104 G" is 10⁴ G. The deck's figures — the v, B and F triad, the right-hand-rule hand, and the current-element diagram — exist only as images and are absent from the text layer, so the vector reasoning, the circular-motion results **r = mv/qB** and **T = 2πm/qB**, the helical pitch and the crossed-field condition **v = E/B** have been supplied here as the standard 100-level treatment of exactly the deck's stated objectives ("discuss the Lorentz force law", "explain the Lorentz force in terms of potentials", "solve complex problems on the Lorentz force law", and the deck's own mention of "the motion of electrons in a magnetic field"). The separate **week summary sheet** is on a different topic again — **electromagnetic oscillations and waves**: E and B mutually perpendicular and perpendicular to propagation, c = fλ, the spectrum from radio to gamma, and the calculation of wavelength, energy per photon and total radiated energy. Both strands are treated above, since the sheet's bullets are examinable.*
