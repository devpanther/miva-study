# PHY_102 — Week 8 Summary

*General Physics II · Week 8 (26 Oct – 1 Nov 2026) · Topic: Magnetic Fields and Magnetic Dipoles — the dipole moment μ = NIA, torque and energy in a field, and the fields of a wire and a solenoid*

**New subject.** Weeks 6–7 were A.C. circuits — phasors, impedance, power factor. None of that is used here. This week is magnetostatics: what a magnetic dipole is, what a field does to one, and what a current does to the space around it.

## The 8 most examinable things this week

1. **A magnetic dipole is a north–south pair that cannot be split.** Cut a bar magnet in half and each half has a full N and a full S. There are **no magnetic monopoles**: every field line of **B** is a **closed loop**, so the flux out of any closed surface is zero (Gauss's law for magnetism, ΦB = 0). This is the one structural difference from electrostatics, where a single charge is perfectly possible.
2. **Magnetic dipole moment: μ = IA for one turn, μ = NIA for N turns.** A **vector**, directed along the **normal to the plane of the loop**, in the sense given by the **right-hand rule** — curl the fingers along the current, the thumb gives **μ**. Units **A·m² = J/T**. The deck's mid-lesson question is exactly this: I = 12 A, A = 1.6 m² → **μ = 19.2 A·m²**.
3. **Torque: τ = μ × B, magnitude τ = μB sin θ.** **θ is the angle between μ and B** — that is, between the **normal** to the loop and the field, **not** between the loop's plane and the field. Torque is **maximum (μB) when the plane of the loop contains B** (θ = 90°) and **zero when μ is along B** (θ = 0° or 180°). Its sense always rotates **μ towards B**.
4. **Energy: U = −μ·B = −μB cos θ.** Minimum **U = −μB** at θ = 0 (**stable** equilibrium, aligned); maximum **U = +μB** at θ = 180° (**unstable**, anti-aligned). The work needed to **flip** a dipole end for end is **ΔU = 2μB**. The minus sign in the definition is what makes "aligned" the low-energy state — exactly the deck's statement that a dipole has *lower* potential energy aligned with the field.
5. **In a uniform field the net force on a dipole is zero** — the forces on opposite sides of the loop are equal and opposite. A dipole in a uniform field **turns but does not translate**. A **net force requires a non-uniform field**, which is why a magnet is attracted to a nail (it magnetises it, then sits in the nail's non-uniform field) but a compass needle only swings.
6. **Electron magnetic moment: M = g(−eL/2m).** e = electronic charge, m = electron rest mass, L = angular momentum, **g = the g-factor** (the deck calls it the "correlation factor"): g ≈ 1 for orbital motion, g ≈ 2 for spin. The **minus sign** says **μ is antiparallel to L**, because the electron's charge is negative. Magnitude for orbital motion: **μ = eL/2m**. With L = ħ this is the **Bohr magneton μB = eħ/2m = 9.27×10⁻²⁴ J/T**.
7. **Field of a long straight wire: B = μ₀I/2πr.** Closed **concentric circles** in planes perpendicular to the wire, direction by the **right-hand grip rule** (thumb along the current, fingers curl the way B points). Strength ∝ I, ∝ 1/r. Useful constant: **μ₀/2π = 2×10⁻⁷ T·m/A**.
8. **Field inside a long solenoid: B = μnI = μ₀μᵣnI**, where **n = N/L is turns per unit length** — not N. Uniform and axial through the interior, essentially zero outside. It depends on the **permeability of the core**, **n** and **I**, and **not** on the solenoid's radius. Centre of a flat circular coil: **B = μ₀NI/2R**.

## Magnetism and field lines

Known since antiquity; every magnet has a **north** and a **south** pole. **Like poles repel, unlike poles attract.** Poles are named for the direction they seek: a compass needle's *north-seeking* end points towards the Earth's geographic north, which is therefore a magnetic **south** pole.

**Mapping the field.** Sprinkle **iron filings** (each filing becomes a tiny induced dipole and lines up), or walk a **small compass** round the magnet — **the direction of B at a point is the direction the compass's north end points.**

Rules that field lines obey:

| Rule | Consequence |
|---|---|
| Outside a magnet, lines run **N → S** | The familiar loop from one pole round to the other |
| Inside the magnet, they run **S → N** | Every line is a **closed loop** — lines never begin or end |
| Lines **never cross** | B has one definite direction at each point |
| **Denser lines = stronger field** | Strongest at the poles, weakest at the middle of the sides |
| Like poles brought together: lines **bend away** from each other and a **neutral point** forms between them | Where the two fields cancel exactly, B = 0 |

**Cutting a magnet.** Halving a bar magnet gives two shorter magnets, each with N and S. Keep going down to a single atom and you still have a dipole (an orbiting/spinning electron), never a lone pole. Contrast an **electric** dipole: pull the two charges apart and you are left with two isolated charges, which is precisely what cannot be done magnetically.

## The magnetic dipole: the two models

A magnetic dipole can be modelled either as a **current loop** or as a **pair of separated poles**. From the deck, verbatim in substance:

- The two models **give the same predictions far from the source**.
- **Inside the source region they differ.** In the pole model the field in the gap **between** the poles runs N → S, i.e. **opposite** to the moment (which points S → N); in the current-loop model the field **through** the loop is **parallel** to μ.
- The current-loop model is the physically correct one, because there are no magnetic charges. Every real magnetic moment is ultimately a circulating current or a spin.

**Why a current loop is a dipole.** A current in a loop produces, at large distances, a field of exactly the same shape as a bar magnet's — a dipole field falling as **1/r³** (on the axis, B = μ₀μ/2πz³). The face out of which **μ** points behaves as the loop's **north** pole.

## Torque and energy — the vector reasoning

Take a rectangular loop, sides a and b, current I, in a uniform **B**, free to rotate about an axis in its plane perpendicular to **B**. The two sides parallel to the axis each feel **F = BIa**, in **opposite** directions (F = IL × B), separated by a moment arm **b sin θ** where θ is the angle between the normal and **B**. Hence

**τ = (BIa)(b sin θ) = I(ab)B sin θ = μB sin θ**, and vectorially **τ = μ × B**.

Two things fall straight out of that derivation and are the source of most lost marks:

- The **forces are equal and opposite**, so **ΣF = 0**: uniform field ⇒ **no translation**.
- The lever arm is **b sin θ** with θ measured **from the normal**. When the loop's **plane contains B**, the normal is **perpendicular** to B, θ = 90°, and the torque is at its **maximum** — the orientation students most often call "θ = 0".

**Energy.** Work done by the field turning the dipole from θ₁ to θ₂ is W = ∫τ dθ, which integrates to give the potential energy

**U(θ) = −μB cos θ = −μ·B**, taking U = 0 at θ = 90°.

| θ (between **μ** and **B**) | τ = μB sin θ | U = −μB cos θ | State |
|---|---|---|---|
| 0° (aligned) | 0 | **−μB** (minimum) | **stable** equilibrium |
| 90° (plane contains B) | **μB** (maximum) | 0 | maximum torque |
| 180° (anti-aligned) | 0 | **+μB** (maximum) | **unstable** equilibrium |

Work done **by an external agent** turning the dipole from θ₁ to θ₂ is **W = U(θ₂) − U(θ₁) = μB(cos θ₁ − cos θ₂)**. Positive means you must supply energy; negative means the field releases it. Flipping from aligned to anti-aligned costs **2μB**.

## The electron's magnetic moment

An electron in a circular orbit of radius r at speed v constitutes a current **I = e/T = ev/2πr** round an area **A = πr²**, so

**μ = IA = (ev/2πr)(πr²) = evr/2 = eL/2m** (using L = mvr).

Written as a vector, and with the electron's negative charge and the g-factor put in:

**M = g(−eL/2m)** — magnitude **geL/2m**, direction **opposite to L**.

- **g ≈ 1** for orbital angular momentum, **g ≈ 2.0023** for electron **spin**. It is the factor by which the real moment differs from the naive classical eL/2m.
- The quantity **e/2m = 8.79×10¹⁰ C/kg** is the classical **gyromagnetic ratio**.
- With L quantised in units of **ħ = 1.055×10⁻³⁴ J·s**, the natural unit of atomic magnetism is the **Bohr magneton μB = eħ/2m = 9.27×10⁻²⁴ J/T**.
- **Nuclear** moments are smaller by roughly the mass ratio m_p/m_e ≈ 1836 — the proton's is 1.41×10⁻²⁶ J/T. This is why **NMR/MRI** uses radio frequencies (≈64 MHz at 1.5 T) while electron resonance needs microwaves.

## Fields produced by currents

| Source | Field | Geometry | Conditions |
|---|---|---|---|
| Long straight wire | **B = μ₀I/2πr** | concentric circles ⊥ to the wire, right-hand grip rule | r ≫ wire radius, wire long compared with r |
| Centre of a flat circular coil, N turns, radius R | **B = μ₀NI/2R** | along the axis, sense by right-hand rule | at the centre only |
| Long solenoid, n turns per metre | **B = μnI = μ₀μᵣnI** | uniform, axial, inside; ≈0 outside | length ≫ diameter; well away from the ends |
| Dipole, on axis, far field | **B = μ₀μ/2πz³** | same shape as a bar magnet's field | z ≫ loop size |

**μ₀ = 4π×10⁻⁷ T·m/A** (permeability of free space). A core of relative permeability μᵣ multiplies the field by μᵣ: soft iron gives μᵣ of a few hundred to a few thousand, which is the whole point of an electromagnet.

## Applications (as the deck gives them)

- **MRI / NMR tomography** — nuclear dipoles align with a strong field, are flipped by a radio pulse, and radiate as they relax; non-invasive, non-ionising, excellent soft-tissue contrast.
- **Electric motors** — a current loop in a field feels τ = μB sin θ; the commutator reverses I every half turn so the torque never reverses sign.
- **Credit-card strips** — data stored as the orientation of tiny permanent dipoles.
- **The Earth** as a dipole, its field reversing roughly every 200 000 years over a 4000–5000-year transition; the deck notes the (speculative) link between magnetic influence on charge flow and biological homochirality.

## Worked example 1 — moment, torque and energy of a coil

*A rectangular coil of 50 turns, 8.0 cm × 5.0 cm, carries 2.0 A in a uniform field B = 0.40 T.*

1. **Area, in SI.** A = (0.080 m)(0.050 m) = **4.0×10⁻³ m²**. (40 cm² would give an answer 10⁴ times too big.)
2. **Moment.** μ = NIA = (50)(2.0)(4.0×10⁻³) = **0.40 A·m²**, directed along the normal, right-hand rule from the current.
3. **Maximum torque**, at θ = 90° — i.e. with the **plane of the coil containing B**: τ_max = μB = (0.40)(0.40) = **0.16 N·m**.
4. **Torque with the normal at 30° to B**: τ = μB sin 30° = (0.16)(0.500) = **0.080 N·m**. Note it is sin, and note the angle is measured from the **normal**; using cos 30° here gives 0.139 N·m, the single commonest wrong answer.
5. **Energy in that orientation**: U = −μB cos 30° = −(0.16)(0.866) = **−0.139 J**. Negative, because the coil is closer to aligned than to anti-aligned.
6. **Work to flip it** from θ = 0 to θ = 180°: W = U(180°) − U(0°) = (+0.16) − (−0.16) = **0.32 J = 2μB**.
7. **Net force** on the coil in this uniform field: **zero**. It spins up about its axis; its centre of mass does not move.

## Worked example 2 — fields of a straight wire and of a solenoid

*(a) A long straight wire carries 8.0 A. Find B at 4.0 cm from it. (b) A solenoid of 500 turns wound over 25 cm carries 3.0 A. Find B inside it, and then with an iron core of μᵣ = 200.*

**(a)** B = μ₀I/2πr = (2×10⁻⁷)(8.0)/(0.040) = (1.6×10⁻⁶)/(0.040) = **4.0×10⁻⁵ T** (40 μT — about the Earth's field).
 *Direction*: if the current runs vertically **upward**, grip the wire with the right hand, thumb up: the fingers curl **anticlockwise seen from above**. At a point due **north** of the wire, B points due **west**. Horizontal, tangential — never radial, never along the wire.

**(b)** n = N/L = 500/0.25 = **2000 turns per metre** (the length must be in metres, and it is n that enters, not N).
 B = μ₀nI = (4π×10⁻⁷)(2000)(3.0) = (1.257×10⁻⁶)(6000) = **7.5×10⁻³ T**.
 With the core: B = μᵣμ₀nI = (200)(7.5×10⁻³) = **1.5 T**. The geometry is unchanged; the material multiplies the field by 200.
 *Check the sensitivity*: unwinding the same 500 turns over 50 cm halves n and halves B. Adding 500 more turns at the **same pitch** (so the solenoid doubles in length) leaves n — and therefore B — **unchanged**.

## Worked example 3 — the electron's moment, computed two ways

*An electron moves in a circle of radius r = 5.3×10⁻¹¹ m at v = 2.2×10⁶ m/s. Find its orbital magnetic moment (take g = 1). e = 1.602×10⁻¹⁹ C, m = 9.11×10⁻³¹ kg.*

**Route 1 — via angular momentum.**
L = mvr = (9.11×10⁻³¹)(2.2×10⁶)(5.3×10⁻¹¹) = **1.06×10⁻³⁴ kg·m²/s** (≈ ħ, as it should be for the ground state).
μ = eL/2m = (1.602×10⁻¹⁹)(1.06×10⁻³⁴) / (2 × 9.11×10⁻³¹) = (1.70×10⁻⁵³)/(1.82×10⁻³⁰) = **9.3×10⁻²⁴ J/T**.

**Route 2 — via μ = IA, to show it is the same statement.**
Period T = 2πr/v, so I = e/T = ev/2πr = (1.602×10⁻¹⁹)(2.2×10⁶)/(2π × 5.3×10⁻¹¹) = (3.52×10⁻¹³)/(3.33×10⁻¹⁰) = **1.06×10⁻³ A**.
A = πr² = π(5.3×10⁻¹¹)² = **8.82×10⁻²¹ m²**.
μ = IA = (1.06×10⁻³)(8.82×10⁻²¹) = **9.3×10⁻²⁴ J/T** ✔ — one Bohr magneton, by both routes.

**Direction**: **opposite** to L, because the charge is negative — the conventional current circulates the way opposite to the electron's motion.

**In a field of 0.50 T**: τ_max = μB = (9.3×10⁻²⁴)(0.50) = **4.7×10⁻²⁴ N·m**; energy to flip = 2μB = **9.3×10⁻²⁴ J = 5.8×10⁻⁵ eV**. Tiny per electron — but 10²³ of them in a gram of material is what makes bulk magnetism, and it is exactly this splitting that magnetic resonance measures.

## Worked example 4 — work, equilibrium and a non-uniform field

*A bar magnet of moment μ = 0.60 A·m² sits in a uniform field B = 0.25 T.*

1. μB = (0.60)(0.25) = **0.15 J** — the natural energy scale of the problem. Every U and every τ below is this number times a trigonometric factor.
2. **Aligned** (θ = 0): U = **−0.15 J**, τ = 0, **stable**. Nudge it and the torque pushes it back.
3. **Anti-aligned** (θ = 180°): U = **+0.15 J**, τ = 0, **unstable**. Nudge it and the torque drives it further away — a pencil balanced on its point.
4. **Turning it from 0° to 60°**: W_ext = U(60°) − U(0°) = (−0.15 × 0.500) − (−0.15) = −0.075 + 0.15 = **+0.075 J** — you must supply it.
5. **Torque at 60°**: τ = 0.15 sin 60° = (0.15)(0.866) = **0.13 N·m**, acting to reduce θ. Note you cannot get step 4 by multiplying this torque by the angle: τ × (π/3) = 0.136 J, which is wrong because the torque varies through the turn. **Use ΔU, not τ × angle.**
6. **Full flip 0° → 180°**: W = **0.30 J = 2μB**.
7. **Force**: zero throughout, because B is uniform. Placed instead near a second magnet — where B falls off with distance — the same dipole would be **pulled** towards the stronger-field region, which is the whole of what "magnetic attraction" means.

## Commonly confused

- **θ in τ = μB sin θ.** Measured from the **normal** (μ) to B, never from the loop's **plane**. "Plane parallel to B" ⇒ θ = 90° ⇒ **maximum** torque. Getting this backwards swaps sin and cos in every subsequent line.
- **sin in the torque, cos in the energy.** τ = μB sin θ, U = −μB cos θ. They are maximum/minimum in complementary places: where the torque is greatest the energy is zero, and where the energy is extreme the torque vanishes.
- **U = −μ·B, not +μ·B.** The minus is what makes alignment the low-energy state. Dropping it makes the *anti*-aligned position look stable.
- **Torque zero ≠ stable.** τ = 0 at both θ = 0 and θ = 180°. Only θ = 0 is stable; 180° is an energy **maximum**.
- **Force vs torque.** Uniform field: **torque only**, net force zero. A net force needs a **non-uniform** field. "The magnet is attracted" is never a uniform-field statement.
- **μ = NIA — do not forget N**, and do not forget to convert cm² to m² (1 cm² = 10⁻⁴ m²).
- **n vs N in the solenoid.** B = μ₀**n**I with n = N/L in turns per **metre**. Using N gives an answer wrong by the factor L.
- **The wire's field is circular, not radial.** The 1/r fall-off tempts an analogy with a line of charge, whose field *is* radial and also 1/r. The direction is completely different — B is **tangential**, perpendicular to both the current and the radius.
- **1/r for a wire, 1/r³ for a dipole.** A long wire is not a dipole; the far field of a *loop* falls as 1/r³.
- **Field lines outside vs inside.** N → S **outside**, S → N **inside**. "Lines go from N to S" without the qualifier makes them open curves, which would require monopoles.
- **The Earth's magnetic pole in the north is a magnetic south pole** — that is why a compass's north-seeking end is attracted to it.
- **The minus sign in M = g(−eL/2m)** is a statement about **direction** (μ antiparallel to L, because the charge is negative), not a negative magnitude and not the −μ·B of the energy. Two different minus signs, unrelated.
- **g is not μᵣ and not μ₀.** The g-factor is a dimensionless number near 1 or 2 attached to a particle; μᵣ is a dimensionless property of a bulk material; μ₀ is a constant of nature with units.
- **Magnetisation is not "a dipole turning to align".** The deck calls the alignment torque "magnetization"; strictly, **magnetisation M is magnetic moment per unit volume** of a material. Alignment is the mechanism; magnetisation is the resulting bulk quantity.
- **A·m² and J/T are the same unit.** Seeing both in one question is not a hint that two different quantities are involved.

*Note on the source. The Week 8 lecture deck (`Magnetic-Dipoles-PDF`) is short and almost entirely prose: it states the objectives — define a magnetic dipole, state the electron's dipole-moment formula, give applications — and then discusses them in words. **It never writes the two central equations.** "A magnetic dipole experiences a torque that tends to align it with the external field" is τ = μ × B stated verbally; "higher potential energy when aligned opposite to the field and lower potential energy when aligned with it" is U = −μ·B stated verbally; the accompanying loop and right-hand-rule figures exist only as images and are absent from the text layer. The standard 100-level treatment of exactly those stated objectives has been supplied above. Four points in the deck need correcting before they reach an exam. (i) The alignment torque is called "**magnetization**" — magnetisation is moment per unit volume, not the act of turning. (ii) "The magnetic field between poles is in the opposite direction to the magnetic moment (which points from the negative charge to the positive charge" — the bracket is a leftover from the **electric** dipole and the bracket is never closed; there are no magnetic charges, and the moment points from S to N inside the dipole. (iii) The symbol **G** in M = G(−eL/2m) is called a "correlation factor"; it is the **g-factor** (Landé/gyromagnetic factor), ≈1 orbital and ≈2 for spin. (iv) The mid-lesson question gives "current 12 A and area 1.6 units" and answers "19.2 units" — the unit is **A·m²**. The week Summary sheet covers a different and wider set of material from the deck (poles, field lines, the straight wire, the solenoid); both are treated above, since the sheet's bullets are examinable. Its claim that "a solenoid … has a magnetic field that points from left to right" is true only of its own figure — the direction follows the winding sense and the current. Ligatures are lost throughout the extraction ("dierent", "aect", "deﬁne" → "dene"), and "occurence" is the source's own spelling.*
