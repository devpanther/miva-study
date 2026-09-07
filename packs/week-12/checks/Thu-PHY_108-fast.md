# Thursday — PHY_108 fast-hour check

*The Young modulus beam experiment: definitions, the depression formula, apparatus and the gradient.*
*5 questions, straight after the hour. Score out of 5.*

**1.** A copper beam loaded at its centre gives these dial-gauge readings:

m (g):   50    100   200   300   400   500
Y (mm):  0.04  0.08  0.16  0.25  0.33  0.41

Using the points at 100 g and 500 g, what is the gradient of the Y (m) against m (kg) graph in SI units?
A. 8.25 × 10⁻⁷ m/kg
B. 0.825 m/kg
C. 8.25 × 10⁻⁴ m/kg
D. 1.21 × 10³ m/kg

**2.** A beam of length ℓ = 80.0 cm, thickness d = 0.80 cm and breadth b = 25.0 mm rests on two mounts. Its Y against m graph has gradient s = 8.25 × 10⁻⁴ m/kg. Take g = 9.8 m/s². What is the Young modulus of the material?
A. 475 GPa
B. 119 GPa
C. 12.2 GPa
D. 9.9 GPa

**3.** A wire 2.0 m long with cross-sectional area 2.0 mm² extends by 0.50 mm under a tension of 40 N. What is the Young modulus of the wire?
A. 8.0 × 10¹⁰ Pa
B. 2.0 × 10⁷ Pa
C. 4.0 × 10¹⁰ Pa
D. 8.0 × 10⁴ Pa

**4.** A beam of thickness 0.50 cm shows a central depression of 0.48 mm under a 500 g load. It is replaced by a beam of the same material, length and breadth but thickness 1.00 cm. What depression does the same load produce?
A. 0.24 mm
B. 0.12 mm
C. 0.96 mm
D. 0.06 mm

**5.** Before any mass is added the dial gauge already reads 0.03 mm, and the student does not zero it. What does this do to the graph of Y against m?
A. Intercept of 0.03 mm, gradient unchanged
B. Gradient increased, line still through the origin
C. Line curves upward at large loads
D. Intercept of 0.03 mm, gradient reduced

---

## Answers

**1. C** — *Gradient of depression against load in SI units.* Convert both axes: 0.41 mm = 0.41 × 10⁻³ m, 0.08 mm = 0.08 × 10⁻³ m, 500 g = 0.500 kg, 100 g = 0.100 kg. Gradient s = ΔY/Δm = (0.41 − 0.08) × 10⁻³/(0.500 − 0.100) = 0.33 × 10⁻³/0.400 = 8.25 × 10⁻⁴ m/kg.

8.25 × 10⁻⁷ converts Y to metres but leaves m in grams; 0.825 converts m to kilograms but leaves Y in millimetres; 1.21 × 10³ is the reciprocal Δm/ΔY.

**2. B** — *Young modulus from the gradient and the beam dimensions.* In metres: ℓ = 0.800 m, d = 0.0080 m, b = 0.0250 m. From Y = mgℓ³/(4Ebd³) the gradient is s = gℓ³/(4Ebd³), so E = gℓ³/(4bd³s) = (9.8 × 0.512)/(4 × 0.0250 × 5.12 × 10⁻⁷ × 8.25 × 10⁻⁴) = 5.018/(4.224 × 10⁻¹¹) = 1.19 × 10¹¹ Pa = 119 GPa, close to copper's accepted 120 GPa.

475 GPa drops the factor 4; 9.9 GPa keeps the 48 from Y = mgℓ³/(48EI) after already substituting I = bd³/12, so the 12 is counted twice; 12.2 GPa cubes b instead of d.

**3. A** — *Young modulus from stress over strain.* Stress = F/A = 40/(2.0 × 10⁻⁶) = 2.0 × 10⁷ Pa. Strain = Δℓ/ℓ = 0.50 × 10⁻³/2.0 = 2.5 × 10⁻⁴, no unit. E = stress/strain = 2.0 × 10⁷/2.5 × 10⁻⁴ = 8.0 × 10¹⁰ Pa.

2.0 × 10⁷ Pa is the stress alone; 4.0 × 10¹⁰ Pa divides the stress by the extension in metres instead of by the strain; 8.0 × 10⁴ Pa leaves the area as 2.0 instead of converting mm² to m².

**4. D** — *Effect of thickness on the depression.* Y = mgℓ³/(4Ebd³), so with everything else fixed Y ∝ 1/d³. Doubling d divides the depression by 2³ = 8: Y = 0.48/8 = 0.06 mm. This is why d is the measurement that matters most.

0.24 mm halves Y as if it fell linearly with d; 0.12 mm divides by 4, treating d as squared; 0.96 mm doubles Y, as though a thicker beam sagged more.

**5. A** — *Effect of a dial-gauge zero error on the graph.* A zero error adds the same 0.03 mm to every reading, so each point is lifted by the same amount: the line keeps its slope but no longer passes through the origin, cutting the Y-axis at 0.03 mm. Because E is taken from the gradient, the result is unaffected provided the gradient is measured from the best-fit line and not from a single (m, Y) pair.

A constant offset cannot change the gradient in either direction; curvature at large loads is the sign of exceeding the proportional limit, not of a zero error.
