# Friday — PHY_102 nightly check

*Numerical magnetic-dipole work: computing μ = NIA with areas converted to m², torque μB sin θ and its maximum, energy −μB cos θ and the work to rotate or flip a dipole, B = μ₀I/2πr for a straight wire and B = μnI for a solenoid with turns per unit length and a core, the electron's moment from L, and the unit, angle and direction traps in each.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

*Take μ₀ = 4π×10⁻⁷ T·m/A, e = 1.60×10⁻¹⁹ C, mₑ = 9.11×10⁻³¹ kg.*

**Questions 1–3 refer to this coil.** A rectangular coil of **40 turns**, measuring **6.0 cm × 4.0 cm**, carries **2.5 A** and sits in a uniform field of **0.30 T**.

**1.** The magnitude of its magnetic dipole moment is:
a) 6.0×10⁻³ A·m²
b) 0.24 A·m²
c) 2.4×10³ A·m²
d) 0.072 A·m²

**2.** The coil is held with its **normal at 30° to B**. The torque on it is:
a) 0.072 N·m
b) 0.062 N·m
c) 0.036 N·m
d) 0.018 N·m

**3.** The work that must be done to turn the coil from **fully aligned** (μ along B) to **fully anti-aligned** is:
a) 0.144 J
b) 0.072 J
c) 0.226 J
d) zero

**Questions 4–5 refer to this wire.** A very long straight vertical wire carries **6.0 A vertically upward**.

**4.** The magnitude of B at a point **3.0 cm** from the wire is:
a) 4.0×10⁻⁷ T
b) 8.0×10⁻⁵ T
c) 1.3×10⁻⁴ T
d) 4.0×10⁻⁵ T

**5.** At a point **due north** of the wire, the field points:
a) horizontally, due west
b) horizontally, due east
c) vertically upward, parallel to the current
d) horizontally, due north — directly away from the wire

**Questions 6–7 refer to this solenoid.** A solenoid of **600 turns** wound over a length of **30 cm** carries **2.0 A**.

**6.** With an air core, the field well inside it is:
a) 1.5×10⁻³ T
b) 5.0×10⁻⁵ T
c) 5.0×10⁻³ T
d) 2.5×10⁻³ T

**7.** An iron core of relative permeability **250** is now inserted, everything else unchanged. The interior field becomes:
a) 5.0×10⁻³ T
b) 1.3 T
c) 3.1×10⁻⁴ T
d) 2.0×10⁻⁵ T

**8.** An electron has orbital angular momentum L = 1.05×10⁻³⁴ J·s. Taking g = 1, the **magnitude** of its orbital magnetic moment is:
a) 1.8×10⁻²³ J/T
b) 4.6×10⁻²⁴ J/T
c) −9.2×10⁻²⁴ J/T
d) 9.2×10⁻²⁴ J/T

**9. (explain why)** A **circular** coil of 25 turns and radius 5.0 cm carries 1.2 A in a uniform field of 0.50 T. Find (i) its magnetic dipole moment, (ii) the maximum torque it can experience, (iii) its potential energy when the normal makes 60° with B, and (iv) the work done **by the field** as it turns from that orientation into alignment. Say what the sign of your answer to (iv) means.

**10. (explain why)** Two long parallel straight wires, 10 cm apart, each carry 5.0 A. Find the magnitude of the field each produces at the midpoint between them, then find the **resultant** field at that midpoint when (i) the currents are in the **same** direction and (ii) they are in **opposite** directions. Explain the difference in terms of the direction of each field, not merely the arithmetic.

**11. (explain why)** A solenoid 40 cm long is to produce an interior field of 12 mT with a current of 3.0 A and an air core. How many turns are needed? Then find the current that would give the same 12 mT if an iron core of relative permeability 200 were inserted and the winding left alone. Explain which quantity in B = μnI each step is solving for, and why the answer to the first part does not depend on the solenoid's diameter.

**12. (explain why)** An electron with magnetic moment 9.3×10⁻²⁴ J/T sits in the 1.5 T field of an MRI magnet. Find its potential energy when aligned and when anti-aligned, and the energy needed to flip it. Convert that energy to electronvolts, and to the frequency of a photon that would supply it (h = 6.63×10⁻³⁴ J·s). Then explain why a real MRI scanner at 1.5 T operates at about **64 MHz** rather than the frequency you just computed.

---

## Answers

**1. b** — *μ = NIA, with the area in m².* A = (0.060)(0.040) = 2.4×10⁻³ m², so μ = (40)(2.5)(2.4×10⁻³) = **0.24 A·m²**. (a) is 6.0×10⁻³, the moment of a **single** turn — N was dropped. (c) is 2.4×10³, the result of leaving the area as 24 cm²; the factor 10⁴ between cm² and m² makes this the most spectacular of the unit errors. (d) is 0.072, which is μB — the **torque** in N·m, computed instead of the moment, by multiplying in the field that has nothing to do with the coil's own moment.

**2. c** — *τ = μB sin θ, θ measured from the normal.* τ = (0.24)(0.30) sin 30° = (0.072)(0.500) = **0.036 N·m**. (a) is 0.072, the **maximum** torque μB, quoted without using the angle at all. (b) is 0.062 = μB cos 30° — the sin/cos swap, which is what you get by treating the given angle as though it were measured from the plane. (d) halves the correct answer, from a spurious ½ imported from formulas like ½LI² or from the "average" torque.

**3. a** — *Flip energy = 2μB.* U = −μB cos θ, so U(0°) = −0.072 J and U(180°) = +0.072 J; the work is the difference, (+0.072) − (−0.072) = **0.144 J**. (b) is 0.072, i.e. |U(180°)| alone — forgetting that the starting energy was not zero but −μB. (c) is 0.226 = τ_max × π, the error of treating the torque as constant over the turn; it varies as sin θ, so the work must come from ΔU, not from τ × angle. (d) reads "the two energies have equal magnitude" as "the change is zero", ignoring the sign that carries all the physics.

**4. d** — *B = μ₀I/2πr, with μ₀/2π = 2×10⁻⁷.* B = (2×10⁻⁷)(6.0)/(0.030) = 1.2×10⁻⁶/0.030 = **4.0×10⁻⁵ T**. (a) is 4.0×10⁻⁷, from leaving r as 3.0 cm — a factor of 100. (b) is 8.0×10⁻⁵, exactly twice the answer, from writing μ₀I/πr: the 2 in 2πr has been lost. (c) is 1.3×10⁻⁴, from μ₀I/2r — the **circular-loop centre** formula B = μ₀I/2R applied to a straight wire, dropping the π.

**5. a** — *Right-hand grip rule: the field is tangential, in circles round the wire.* Point the right thumb up, along the current; the fingers curl **anticlockwise as seen from above**. Standing due north of the wire and facing it, the tangent to that anticlockwise circle points **due west**. (b) is the same circle traversed the wrong way — the error of using the left hand, or of pointing the thumb along the field instead of the current. (c) makes B parallel to its own source; B is always perpendicular to the current, since B ∝ I × r̂. (d) imports the radial pattern of the electric field of a line charge, which has the same 1/r fall-off and a completely different direction.

**6. c** — *B = μ₀nI with n = N/L in turns per metre.* n = 600/0.30 = 2000 m⁻¹, so B = (4π×10⁻⁷)(2000)(2.0) = **5.0×10⁻³ T**. (a) is 1.5×10⁻³, from using N = 600 in place of n — the standard solenoid error, and note it is *smaller* than the truth here only because 600 < 2000. (b) is 5.0×10⁻⁵, from n = 600/30 with the length left in centimetres. (d) halves the answer, applying the loop formula's factor of 2 to a solenoid.

**7. b** — *A core multiplies the field by μᵣ: B = μᵣμ₀nI.* B = (250)(5.0×10⁻³) = **1.3 T** (1.26 T). (a) assumes the core makes no difference, which would leave electromagnets pointless. (c) is 3.1×10⁻⁴ = μᵣμ₀, the permeability itself quoted as though it were the field — nI has been dropped, and the units are wrong (T·m/A, not T). (d) divides by 250 instead of multiplying: a ferromagnetic core concentrates flux, it does not dilute it.

**8. d** — *μ = geL/2m.* μ = (1.60×10⁻¹⁹)(1.05×10⁻³⁴)/(2 × 9.11×10⁻³¹) = 1.68×10⁻⁵³/1.82×10⁻³⁰ = **9.2×10⁻²⁴ J/T** — one Bohr magneton, as expected for L = ħ. (a) is 1.8×10⁻²³, exactly twice, from dividing by m instead of 2m. (b) is 4.6×10⁻²⁴, half the answer, from dividing by 4m — the 2 applied twice. (c) has the right number with a minus sign: the question asks for a **magnitude**, and the minus sign in M = g(−eL/2m) states a *direction* (μ antiparallel to L), never a negative size.

**9.** *Concept: μ = NIA for a circular coil, with τ_max = μB, U = −μB cos θ, and the sign of the work.* **(i)** A = πr² = π(0.050)² = 7.85×10⁻³ m²; μ = NIA = (25)(1.2)(7.85×10⁻³) = **0.236 A·m²**. (Radius, not diameter; and π r², not 2πr.) **(ii)** τ_max occurs at θ = 90°, i.e. with the plane of the coil containing B: τ_max = μB = (0.236)(0.50) = **0.118 N·m**. **(iii)** U(60°) = −μB cos 60° = −(0.118)(0.500) = **−5.89×10⁻² J**. It is negative because 60° is nearer the aligned orientation than the anti-aligned one. **(iv)** Turning to θ = 0 takes U from −0.0589 J to U(0°) = −μB = −0.118 J. The work done **by the field** is W = −ΔU = −[(−0.118) − (−0.0589)] = **+5.89×10⁻² J**. The positive sign means the field does the work: the dipole is falling into its energy minimum, exactly as a mass falls, and if nothing damps it, it will overshoot and oscillate about θ = 0. An **external** agent doing the same rotation would do −0.0589 J, i.e. would have to absorb that energy to bring the coil to rest at alignment.

**10.** *Concept: superposition of two wire fields, decided by direction and not by magnitude.* Each wire is 5.0 cm = 0.050 m from the midpoint, so each contributes B = μ₀I/2πr = (2×10⁻⁷)(5.0)/(0.050) = **2.0×10⁻⁵ T**. **(i) Same direction**: take both currents out of the page. Each field circles its own wire anticlockwise. At the midpoint, the left wire's field points **up** the page and the right wire's field points **down** the page — the point lies on opposite sides of the two wires, so the two circulations run oppositely there. The fields **cancel**: the resultant is **zero**. **(ii) Opposite directions**: reversing one current reverses its whole circulation, so at the midpoint both fields now point the **same** way and they **add**: 2 × 2.0×10⁻⁵ = **4.0×10⁻⁵ T**, directed in the plane containing the two wires and perpendicular to the line joining them, in the sense given by the grip rule applied to either wire. The lesson is that "same direction" and "opposite direction" produce the *opposite* of what naive addition suggests: parallel currents give zero field between them (though they attract each other), antiparallel currents give the maximum field between them (though they repel). Magnitudes alone cannot tell you which; only the grip rule applied separately to each wire can.

**11.** *Concept: rearranging B = μnI for whichever quantity is unknown.* **First part — solve for n, hence N.** n = B/(μ₀I) = 12×10⁻³ / [(4π×10⁻⁷)(3.0)] = 12×10⁻³/3.77×10⁻⁶ = **3.18×10³ turns per metre**. Over a length of 0.40 m this is N = nL = (3183)(0.40) ≈ **1.3×10³ turns** (1273). Check: (4π×10⁻⁷)(3183)(3.0) = 1.20×10⁻² T ✔. **Second part — solve for I with μᵣ = 200.** B = μᵣμ₀nI, so with n and B fixed the current must fall by the factor μᵣ: I = 3.0/200 = **0.015 A (15 mA)**. **Why the diameter does not enter**: B = μnI contains no radius. Ampère's law on a rectangular loop of length ℓ lying inside the solenoid, one long side on the axis and the other outside where B ≈ 0, gives Bℓ = μ(nℓ)I — the enclosed current is set by how many turns the path threads, which depends on ℓ and n only. Widening the coil enlarges the area each turn encloses but spreads the same current over a proportionally larger cross-section, leaving the field per unit length of winding untouched. A wider solenoid therefore needs the same n and the same I; what it does need is more wire per turn, and so more power for the same field.

**12.** *Concept: dipole energies, the flip energy 2μB, and interpreting the number it gives.* **Energies**: U = −μ·B, so aligned U = −μB = −(9.3×10⁻²⁴)(1.5) = **−1.4×10⁻²³ J**, and anti-aligned U = **+1.4×10⁻²³ J**. **Flip energy**: ΔU = 2μB = **2.79×10⁻²³ J**. **In electronvolts**: 2.79×10⁻²³/1.60×10⁻¹⁹ = **1.7×10⁻⁴ eV** — five thousand times smaller than the ~1 eV of a visible photon, so this is a very weak splitting. **Photon frequency**: f = ΔU/h = 2.79×10⁻²³/6.63×10⁻³⁴ = **4.2×10¹⁰ Hz ≈ 42 GHz**, a microwave frequency. **Why an MRI scanner uses 64 MHz instead**: the number just computed is for an **electron** moment, and that is electron spin resonance, not MRI. Medical MRI flips the magnetic moments of **hydrogen nuclei — protons** — in the body's water. A proton's moment is smaller than an electron's by roughly the mass ratio mₚ/mₑ ≈ 1836, since the moment scales as e/2m: it is 1.41×10⁻²⁶ J/T. Repeating the same calculation, ΔU = 2μB = 2(1.41×10⁻²⁶)(1.5) = 4.2×10⁻²⁶ J, and f = 4.2×10⁻²⁶/6.63×10⁻³⁴ = **6.4×10⁷ Hz = 64 MHz**, in the radio band — which is exactly the operating frequency of a 1.5 T clinical scanner, and the reason MRI is non-ionising: a 10⁻⁷ eV photon cannot break anything. The physics is identical; only the mass in e/2m has changed, and the factor of ~2000 in the mass moves the answer from microwaves to radio.
