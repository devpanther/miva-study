# PHY_108 — Week 12 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 13, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** Young's modulus is defined as
a) strain ÷ stress
b) stress ÷ strain
c) force × extension
d) stress × strain

**2.** The SI unit of Young's modulus is
a) N/m
b) it has no unit — strain is dimensionless, so the ratio is a pure number
c) N/m², i.e. the pascal
d) the newton

**3.** Tensile strain is
a) the change in length divided by the original length, and is dimensionless
b) the force per unit area, measured in Pa
c) the load divided by the depression, measured in N/m
d) the extension multiplied by the cross-sectional area, in m³

**4.** Which item is **not** in the apparatus list for this experiment?
a) Dial gauge  B. Beams made from different materials  C. Two mounts  D. Stopwatch

**5.** For a beam of rectangular cross-section loaded at its centre, the depression is
a) Y = mgℓ³/(48Ebd³)
b) Y = mgℓ³/(4Ebd³)
c) Y = mgℓ²/(4Ebd³)
d) Y = 4mgℓ³/(Ebd³)

**6.** The moment of inertia of a beam of rectangular cross-section, breadth b and thickness d, is
a) bd³/12  B. db³/12  C. bd³/3  D. bd²/12

**7.** In the data analysis, the graph plotted is
a) Y against ℓ³  B. Y against 1/m  C. Y in metres against m in kilograms  D. m against d³

**8.** The gradient s of that graph is equal to
a) 4Ebd³/(gℓ³)  B. gℓ³/(48Ebd³)  C. Ebd³/(gℓ³)  D. gℓ³/(4Ebd³)

**9.** Young's modulus is therefore obtained from the gradient as
a) E = 4bd³s/(gℓ³)  B. E = gℓ³/(4bd³s)  C. E = gℓ³s/(4bd³)  D. E = 4gbd³/(ℓ³s)

**10.** A student mismeasures the thickness d by 5 %. The resulting error in E is about
a) 5 %  B. 1.7 %  C. 15 %  D. none — d cancels out

**11.** The graph of depression against load for a beam loaded within its elastic limit is
a) a straight line passing through the origin
b) a curve of increasing gradient
c) a straight line with a large positive intercept on the Y-axis
d) a horizontal line

**12.** Stress is directly proportional to strain (Hooke's law) provided
a) the load is heavy enough  B. the beam is made of copper  C. the beam is at least 1 m long  D. the proportional limit is not exceeded

## Section B — Short answer (3)

**13.** Define stress and strain, giving the SI unit of each, and state the relation between them and Young's modulus. Explain why Young's modulus has the same unit as stress.

**14.** State the depression formula used in this experiment, define every symbol with its SI unit, substitute the moment of inertia for a rectangular cross-section, and show how the gradient of the depression-against-mass graph is turned into Young's modulus.

**15.** List the apparatus, outline the procedure in order, and give four sources of error with the precaution against each. Say which quantity must be measured most carefully and why.

---

## Answers

**Section A**

1. **b** — E = stress/strain, a direct consequence of Hooke's law.
2. **c** — Strain is dimensionless, so E carries the unit of stress: N/m² = Pa. (The deck's "N/m" is a misprint.)
3. **a** — Strain is the relative change in dimension, Δℓ/ℓ, so it has no unit; option B defines stress.
4. **d** — The list is dial gauge, beams of different materials, a set of masses and 2 mounts — no timing is involved.
5. **b** — Y = mgℓ³/(48EI) with I = bd³/12 gives Y = mgℓ³/(4Ebd³); the 48 becomes 4 after the 12 is substituted.
6. **a** — I = bd³/12 — the thickness (the dimension along the bending) is the one cubed.
7. **c** — Convert to MKS first, then plot depression Y (m) against load m (kg).
8. **d** — From Y = [gℓ³/(4Ebd³)]·m, the bracket is the slope, in m/kg.
9. **b** — Rearranging the slope expression: E = gℓ³/(4bd³s), in Pa.
10. **c** — d appears cubed in E, so the fractional error is roughly tripled: 3 × 5 % ≈ 15 %.
11. **a** — Y ∝ m with no constant term, so the line is straight and passes through the origin.
12. **d** — Proportionality holds only below the proportional (elastic) limit; beyond it the line bends over.

**Section B**

**13.** **Stress σ = F/A**, the normal (perpendicular) force per unit area, unit **N/m² = pascal (Pa)**. **Strain ε = Δℓ/ℓ**, the relative change in dimension, **dimensionless** — a ratio of two lengths. Below the proportional limit Hooke's law gives σ ∝ ε, so **σ = Eε** and **E = σ/ε = (F/A)/(Δℓ/ℓ) = Fℓ/(AΔℓ)**. Because strain is a pure number, dividing stress by it cannot change the unit, so **E is also in Pa** (typically GPa for metals: aluminium ≈ 70 GPa, copper ≈ 120 GPa). E measures **stiffness** — resistance to elastic deformation — and is used to select materials for bridges, aircraft wings, springs and implants.

**14.** A beam of length ℓ supported at both ends and loaded at its centre behaves as two opposite cantilevers, and the maximum (central) depression is
**Y = m g ℓ³ / (48 E I)** — Y = central depression (m); m = suspended mass (kg); g = 9.8 m/s²; ℓ = length of the beam between the mounts (m); E = Young's modulus (Pa); I = moment of inertia of the cross-section (m⁴).
For a rectangular section **I = b d³/12** (b = breadth, m; d = thickness/depth, m), so
**Y = m g ℓ³ / (4 E b d³)**, which is linear in m.
Plotting **Y (m) against m (kg)** gives a straight line **through the origin** of gradient
**s = g ℓ³ / (4 E b d³)** (unit m/kg), hence **E = g ℓ³ / (4 b d³ s)** in Pa.
*Worked check with the deck's aluminium data* (ℓ = 1.00 m, d = 0.010 m, b = 0.030 m, Y = 0.06 mm at 50 g rising to 0.59 mm at 500 g): s = (0.53 × 10⁻³ m)/(0.450 kg) = 1.18 × 10⁻³ m/kg, so E = (9.8 × 1.00³)/(4 × 0.030 × 10⁻⁶ × 1.18 × 10⁻³) = 6.9 × 10¹⁰ Pa ≈ **69 GPa**, the accepted value for aluminium.

**15.** *Apparatus:* dial gauge, beams made from different materials, a set of masses, and 2 mounts.
*Procedure:* select the beam material from the drop list; set the length ℓ (60–100 cm), thickness d (0.6–1.0 cm) and breadth b (20–30 mm); hang the first mass (50 g) at the centre of the beam; click Record to log m and the corresponding depression Y; increase the load to 100 g and record again; repeat for 200, 300, 400 and 500 g; download the Excel sheet of results; repeat the whole run with a different material (e.g. copper). Then convert all readings to MKS, plot Y against m, find the slope and compute E = gℓ³/(4bd³s).
*Errors and precautions:* (i) **Error in the thickness d** — d is **cubed** in E, so a 5 % error becomes ~15 %; measure d (and b) with a micrometer at several points and average. **This is the quantity that must be measured most carefully**; ℓ, also cubed, comes next. (ii) **Dial-gauge zero error** — zero the gauge with the beam unloaded, otherwise every depression is offset and the line misses the origin (systematic). (iii) **Load not at the mid-point** — hang the masses exactly at the centre, since an off-centre load gives a smaller depression (systematic). (iv) **Exceeding the elastic/proportional limit** — keep the loads modest and check that the beam returns to zero when unloaded, otherwise the graph curves and Hooke's law fails. Reading scatter and parallax are **random** and are reduced by taking all six loads and using a large best-fit-line slope triangle rather than a single pair of values.
