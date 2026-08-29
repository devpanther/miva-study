# PHY_108 — Week 12

*General Physics Practical II · Week 12 (23 – 29 Nov 2026) · Thursday FAST hour*

**Experiment: to determine the Young modulus E of a metallic rod (beam) from the central depression produced by a hanging load.**

## Most likely to be examined

1. **Definitions, with units.**
   - **Stress σ = F/A** — normal force per unit area, **N/m² = pascal (Pa)**. Perpendicular force → **tensile stress** (elongates) or compressive (shortens).
   - **Strain ε = Δℓ/ℓ** — relative change in dimension, **dimensionless (no unit)**.
   - **Young modulus E (or Y) = stress/strain = σ/ε = (F/A)/(Δℓ/ℓ) = Fℓ/(AΔℓ)**, unit **N/m² = Pa**. It is the *modulus of elasticity* — it quantifies **stiffness**, i.e. resistance to deformation under load.
   - **Hooke's law:** σ ∝ ε **provided the proportional limit is not exceeded**; the constant of proportionality is E, so σ = Eε.
   - History: named after **Thomas Young** (19th c.); first developed by **Leonhard Euler** (18th c.) as "the absolute elasticity".
2. **The depression (bending) formula — this is the working equation.** A beam of length **ℓ**, supported/fixed at both ends, carrying a mass **m** hung at its **centre**, suffers a central depression **Y**. Treated as two opposite cantilevers:
   **Y = m g ℓ³ / (48 E I)**
   - `Y` = central depression, **m**; `m` = load, **kg**; `g = 9.8 m/s²`; `ℓ` = beam length, **m**; `I` = moment of inertia (second moment of area) of the cross-section, **m⁴**.
3. **Rectangular cross-section:** **I = b d³ / 12**, where **b** = breadth/width (m) and **d** = thickness/depth (m). Substituting:
   **Y = m g ℓ³ / (4 E b d³)** — a **linear** equation of the form y = sx with x = m.
4. **The graph (the exam question).** Plot **Y (y-axis, metres) against m (x-axis, kilograms)**: a **straight line through the origin**.
   - **Gradient s = Y/m = g ℓ³ / (4 E b d³)**, unit **m/kg**.
   - Rearranged: **E = g ℓ³ / (4 b d³ s)**, unit **Pa**.
5. **Apparatus (4 items):** **dial gauge** (reads the depression) · **beams made of different materials** · **set of masses** · **2 mounts** (the supports).
6. **Procedure, in order.** (1) Select the material from the drop list (e.g. Aluminium). (2) Set **length ℓ** (60–100 cm), **thickness d** (0.6–1.0 cm) and **breadth b** (20–30 mm). (3) Load the beam at its centre with the first mass (**50 g**). (4) Click **Record** to log m and the corresponding depression Y. (5) Increase to **100 g** and Record. (6) Repeat for further masses (200, 300, 400, 500 g). (7) An **Excel sheet** of the data downloads. (8) **Repeat the whole process for another material** (say Copper) — different material ⇒ different slope ⇒ different E, which is the point of the experiment.
7. **Data analysis, in order.** (1) **Convert everything to MKS/SI** — g→kg, mm and cm→m. (2) Plot **Y (m) vs m (kg)**. (3) Compute the **slope**. (4) Put the slope with ℓ, b, d into **E = gℓ³/(4bd³s)**.
8. **Worked example (the deck's own aluminium data).** ℓ = 100.00 cm = **1.00 m**; d = 1.00 cm = **0.010 m**; b = 30.00 mm = **0.030 m**; m = 50 g → Y = 0.06 mm, … , m = 500 g → Y = 0.59 mm.
   Gradient s = ΔY/Δm = (0.59 − 0.06) × 10⁻³ m / (0.500 − 0.050) kg = 0.53 × 10⁻³ / 0.450 = **1.18 × 10⁻³ m/kg**.
   E = gℓ³/(4 b d³ s) = (9.8 m/s² × (1.00 m)³) / (4 × 0.030 m × (0.010 m)³ × 1.18 × 10⁻³ m/kg)
   = 9.8 / (1.416 × 10⁻¹⁰) = **6.9 × 10¹⁰ Pa ≈ 69 GPa** — the accepted value for aluminium (~70 GPa). ✓
   *Units check:* (m·s⁻²·m³)/(m·m³·m·kg⁻¹) = kg·m⁻¹·s⁻² = N/m² = Pa. ✓

## Sources of error and precautions

- **d is cubed** — a 5 % error in the thickness gives ~15 % error in E. Measure d (and b) with a micrometer/vernier at several points and average; this is the single largest error source. ℓ is cubed too, so measure the span between mounts carefully.
- **Dial-gauge zero error** — zero the gauge with the beam unloaded before adding the first mass; an offset shifts every reading and pushes the line off the origin.
- **Load position** — the mass must hang exactly at the **mid-point**; an off-centre load reduces the depression (systematic).
- **Elastic limit / permanent set** — keep loads small enough that the beam returns to zero when unloaded; exceeding the proportional limit destroys the straight line.
- **Reading scatter and parallax** — take all six loads and use the **best-fit line's gradient**, never a single (m, Y) pair; a large slope triangle reduces the random error.
- **Beam must rest flat on both mounts**, not rocking, and readings taken after the beam settles.

## Commonly confused

- **Stress (Pa)** vs **strain (no unit)** vs **E (Pa)** — E has the same unit as stress because strain is dimensionless. The deck misprints "the unit for E is **N/m** or Pascals"; it is **N/m²**.
- **48 vs 192 vs 4.** Y = mgℓ³/**48**EI (this deck, two-cantilever picture — its data reproduces 69 GPa for aluminium); some texts use **192** for a genuinely clamped-clamped beam. After substituting I = bd³/12 the 48 becomes **Y = mgℓ³/(4Ebd³)** — the 4 is not a different formula.
- **I = bd³/12 (thickness cubed)** vs **db³/12** — the cube goes on **d**, the dimension in the direction of bending.
- **b (breadth, given in mm)** vs **d (thickness, given in cm)** vs **ℓ (length, given in cm)** — three different units in the same table; convert all to metres first.
- **Gradient s = gℓ³/(4Ebd³)** — E is in the **denominator**, so a **stiffer material gives a smaller slope** (less depression per kg). Copper (~120 GPa) gives a shallower line than aluminium.
- **Y the depression (metres)** vs **Y the symbol some books use for Young's modulus** — this deck uses Y for the depression and E (or Y) for the modulus; define your symbols in the answer.
- **Mass m (kg)** vs **weight/load mg (N)** — the graph is against **m**, so g stays inside the gradient expression.
