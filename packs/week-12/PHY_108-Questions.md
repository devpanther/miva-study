# PHY_108 — Week 12 Questions

*Young's modulus of a beam from its central depression: stress and strain, the depression formula and the gradient that gives E — sat seven days later, notes closed, as a retention test.*

## Multiple choice

**1.** Young's modulus is defined as:
A. strain ÷ stress
B. stress ÷ strain
C. force × extension
D. stress × strain

**2.** The SI unit of Young's modulus is:
A. the newton
B. it has no unit — strain is dimensionless, so the ratio is a pure number
C. N/m², i.e. the pascal
D. N/m

**3.** Tensile strain is:
A. the change in length divided by the original length; it is dimensionless
B. the force per unit area, measured in Pa
C. the load divided by the depression, measured in N/m
D. the extension multiplied by the cross-sectional area, in m³

**4.** Which item is **not** in the apparatus list for this experiment?
A. Dial gauge
B. Beams made from different materials
C. Two mounts
D. Stopwatch

**5.** For a beam of rectangular cross-section loaded at its centre, the depression is:
A. Y = mgℓ³/(48Ebd³)
B. Y = mgℓ³/(4Ebd³)
C. Y = mgℓ²/(4Ebd³)
D. Y = 4mgℓ³/(Ebd³)

**6.** The moment of inertia of a beam of rectangular cross-section, breadth b and thickness d, is:
A. bd³/12
B. db³/12
C. bd³/3
D. bd²/12

**7.** In the data analysis, the graph plotted is:
A. Y against ℓ³
B. Y against 1/m
C. Y in metres against m in kilograms
D. m against d³

**8.** The gradient s of that graph is equal to:
A. 4Ebd³/(gℓ³)
B. gℓ³/(48Ebd³)
C. Ebd³/(gℓ³)
D. gℓ³/(4Ebd³)

**9.** Young's modulus is therefore obtained from the gradient as:
A. E = 4bd³s/(gℓ³)
B. E = gℓ³/(4bd³s)
C. E = gℓ³s/(4bd³)
D. E = 4gbd³/(ℓ³s)

**10.** A student mismeasures the thickness d by 5 %. The resulting error in E is about:
A. 5 %
B. 1.7 %
C. 15 %
D. none — d cancels out

**11.** The graph of depression against load for a beam loaded within its elastic limit is:
A. a straight line passing through the origin
B. a curve of increasing gradient
C. a straight line with a large positive intercept on the Y-axis
D. a horizontal line

**12.** Stress is directly proportional to strain (Hooke's law) provided:
A. the load is heavy enough
B. the beam is made of copper
C. the beam is at least 1 m long
D. the proportional limit is not exceeded

## Short answer

**13.** Define stress and strain, giving the SI unit of each, and state the relation between them and Young's modulus. Explain why Young's modulus has the same unit as stress.

**14.** State the depression formula used in this experiment, define every symbol with its SI unit, substitute the moment of inertia for a rectangular cross-section, and show how the gradient of the depression-against-mass graph is turned into Young's modulus.

**15.** List the apparatus, outline the procedure in order, and give four sources of error with the precaution against each. Say which quantity must be measured most carefully and why.

## Answers

**1. B** — *definition*: E = stress/strain, a direct consequence of Hooke's law, σ = Eε. Option A inverts it and would make a stiff material have a *small* modulus. Option C is a quantity with the units of energy, not of stiffness. Option D multiplies where the definition divides, and would make E depend on how hard you pull.

**2. C** — *unit*: strain is a ratio of two lengths and so is dimensionless; dividing stress by a pure number cannot change the unit, so E carries the unit of stress, **N/m² = Pa** (typically GPa for metals). Option B is the trap that follows from remembering only that strain has no unit — it is stress, not strain, that fixes the unit of E. Option A is the unit of force. Option D is the deck's own misprint: the theory slide reads "The unit for E is N/m or Pascals (Pa)", which should be **N/m²**.

**3. A** — *definition of strain*: strain ε = Δℓ/ℓ, the **relative** change in dimension, so it has no unit. Option B defines **stress**, σ = F/A, which is what strain is paired with, not what it is. Option C invents a quantity with the units of a spring constant. Option D multiplies an extension by an area, giving a volume, which is not a strain at all.

**4. D** — *the apparatus list*: dial gauge, beams made from different materials, a set of masses, and 2 mounts. **No timing is involved** in this experiment, so there is no stopwatch — the depression is a static reading taken once the load has settled. Options A, B and C are all on the list.

**5. B** — *the depression formula with I substituted*: Y = mgℓ³/(48EI) with I = bd³/12 gives Y = 12mgℓ³/(48Ebd³) = **mgℓ³/(4Ebd³)**; the 48 becomes 4 once the 12 is brought up. Option A is the form before I has been substituted, so it double-counts the geometry. Option C has ℓ squared instead of cubed. Option D turns the divisor 4 into a multiplier, changing E by a factor of 16.

**6. A** — *second moment of area*: **I = bd³/12**, where **d is the thickness measured along the direction of bending** and is the dimension that is cubed. Option B swaps b and d, which is the same beam turned on its side — a real and much stiffer configuration, but not this one. Option C uses the /3 form, which applies about an edge rather than about the centroid. Option D loses one power of d.

**7. C** — *the prescribed plot*: convert everything to MKS first, then plot the **depression Y in metres (y-axis) against the load m in kilograms (x-axis)**. The relation Y = [gℓ³/(4Ebd³)]·m is linear in m with no constant term, so the plot is a straight line through the origin. Options A and D vary quantities that are held fixed throughout a run — ℓ and d are set once at the start. Option B would produce a curve, since Y is proportional to m, not to 1/m.

**8. D** — *the gradient*: writing Y = [gℓ³/(4Ebd³)]·m, everything in the bracket is constant during a run, so the bracket **is** the slope, **s = gℓ³/(4Ebd³)**, with unit m/kg. Option B is the slope before I was substituted. Options A and C are the reciprocal-style forms with E in the numerator, which is where E ends up only after the rearrangement of question 9.

**9. B** — *rearranging for E*: from s = gℓ³/(4Ebd³), multiply both sides by E and divide by s to get **E = gℓ³/(4bd³s)**, in pascals. Option A has E proportional to s, but a *larger* slope means a *floppier* beam and so a smaller E. Option C leaves s in the numerator for the same reason. Option D scrambles the placement of g and ℓ³.

**10. C** — *error propagation through a cube*: d appears **cubed** in E = gℓ³/(4bd³s), so a fractional error in d is roughly **tripled** in E: 3 × 5 % ≈ **15 %**. Option A forgets the cube. Option B divides by three instead of multiplying — the mistake of treating the cube as a cube root. Option D is false: d does not cancel, and it is the most error-sensitive quantity in the whole experiment.

**11. A** — *shape of the graph*: within the elastic limit Y ∝ m with no constant term, so the line is **straight and passes through the origin**. Option B is what happens *beyond* the proportional limit, where the beam yields and depression grows faster than load. Option C is the signature of a **dial-gauge zero error**, not of the physics. Option D would mean the beam did not deflect at all under load.

**12. D** — *the condition on Hooke's law*: stress is proportional to strain only while the **proportional (elastic) limit is not exceeded**; beyond it the line bends over and E can no longer be read from a slope. Option A inverts the condition — a heavier load makes the failure *more* likely, not less. Options B and C name a particular material and a particular length, but Hooke's law is a general statement whose only condition is the one in option D.

**13.** **Stress σ = F/A**, the normal (perpendicular) force per unit area, unit **N/m² = pascal (Pa)**. **Strain ε = Δℓ/ℓ**, the relative change in dimension, **dimensionless** — a ratio of two lengths. Below the proportional limit Hooke's law gives σ ∝ ε, so **σ = Eε** and **E = σ/ε = (F/A)/(Δℓ/ℓ) = Fℓ/(AΔℓ)**. Because strain is a pure number, dividing stress by it cannot change the unit, so **E is also in Pa** (typically GPa for metals: aluminium ≈ 70 GPa, copper ≈ 120 GPa). E measures **stiffness** — resistance to elastic deformation — and is used to select materials for bridges, aircraft wings, springs and implants.

**14.** A beam of length ℓ supported at both ends and loaded at its centre behaves as two opposite cantilevers, and the maximum (central) depression is
**Y = m g ℓ³ / (48 E I)** — Y = central depression (m); m = suspended mass (kg); g = 9.8 m/s²; ℓ = length of the beam between the mounts (m); E = Young's modulus (Pa); I = moment of inertia of the cross-section (m⁴).
For a rectangular section **I = b d³/12** (b = breadth, m; d = thickness/depth, m), so
**Y = m g ℓ³ / (4 E b d³)**, which is linear in m.
Plotting **Y (m) against m (kg)** gives a straight line **through the origin** of gradient
**s = g ℓ³ / (4 E b d³)** (unit m/kg), hence **E = g ℓ³ / (4 b d³ s)** in Pa.
*Worked check with the deck's aluminium data* (ℓ = 1.00 m, d = 0.010 m, b = 0.030 m, Y = 0.06 mm at 50 g rising to 0.59 mm at 500 g): s = (0.53 × 10⁻³ m)/(0.450 kg) = 1.18 × 10⁻³ m/kg, so E = (9.8 × 1.00³)/(4 × 0.030 × 10⁻⁶ × 1.18 × 10⁻³) = 6.9 × 10¹⁰ Pa ≈ **69 GPa**, the accepted value for aluminium. (The deck describes the beam as "fixed at both ends", which would give the 192 form and E = 17 GPa — three times too small for aluminium. The data fit the simply-supported 48 form, so that is the one used here.)

**15.** *Apparatus:* dial gauge, beams made from different materials, a set of masses, and 2 mounts.
*Procedure:* select the beam material from the drop list; set the length ℓ (60–100 cm), thickness d (0.6–1.0 cm) and breadth b (20–30 mm); hang the first mass (50 g) at the centre of the beam; click Record to log m and the corresponding depression Y; increase the load to 100 g and record again; repeat for 200, 300, 400 and 500 g; download the Excel sheet of results; repeat the whole run with a different material (e.g. copper). Then convert all readings to MKS, plot Y against m, find the slope and compute E = gℓ³/(4bd³s).
*Errors and precautions:* (i) **Error in the thickness d** — d is **cubed** in E, so a 5 % error becomes ~15 %; measure d (and b) with a micrometer at several points and average. **This is the quantity that must be measured most carefully**; ℓ, also cubed, comes next. (ii) **Dial-gauge zero error** — zero the gauge with the beam unloaded, otherwise every depression is offset and the line misses the origin (systematic). (iii) **Load not at the mid-point** — hang the masses exactly at the centre, since an off-centre load gives a smaller depression (systematic). (iv) **Exceeding the elastic/proportional limit** — keep the loads modest and check that the beam returns to zero when unloaded, otherwise the graph curves and Hooke's law fails. Reading scatter and parallax are **random** and are reduced by taking all six loads and using a large best-fit-line slope triangle rather than a single pair of values.
