# Thursday — PHY_108 fast-hour check

*Finding the permeability of free space from a circular loop's axial field: formula, apparatus, readings, gradient.*
*5 questions, straight after the hour. Score out of 5.*

**1.** A single-turn circular loop of radius 0.20 m carries 1.5 A. Taking μ₀ = 4π × 10⁻⁷ T·m/A, what flux density does the tesla meter read at the centre of the loop?
A. 1.50 μT
B. 9.42 μT
C. 4.71 μT
D. 0.188 μT

**2.** For a loop of radius R = 0.10 m carrying I = 2.0 A, the probe sits at z = 10 cm on the axis. What is the value of the plotted factor I R²/[2(R² + z²)^(3/2)] at this point?
A. 3.54 A/m
B. 10.0 A/m
C. 0.0707 A/m
D. 1.00 × 10⁻⁵ A/m

**3.** B (y-axis, logged in nT) is plotted against the factor x = I R²/[2(R² + z²)^(3/2)] (x-axis, A/m). The best line passes through (1.00, 1450) and (5.00, 6450). What value of μ₀ does the gradient give?
A. 1.25 × 10³ T·m/A
B. 1.45 × 10⁻⁶ T·m/A
C. 1.29 × 10⁻⁶ T·m/A
D. 1.25 × 10⁻⁶ T·m/A

**4.** With R = 0.10 m the tesla meter reads 6285 nT at the centre of the loop. The probe is moved along the axis to z = 20 cm. What reading is expected there?
A. 3143 nT
B. 562 nT
C. 1571 nT
D. 786 nT

**5.** A student's graph of B against the factor I R²/[2(R² + z²)^(3/2)] is a good straight line, but it cuts the B-axis at +200 nT instead of passing through the origin. What is the most likely cause?
A. The coil has more than one turn
B. The current was set too high
C. A zero error on the tesla meter
D. z was recorded in centimetres

---

## Answers

**1. C** — *Flux density at the centre of a current loop.* At the centre z = 0, so B(0) = μ₀I/(2R) = (4π × 10⁻⁷ × 1.5)/(2 × 0.20) = 1.885 × 10⁻⁶/0.40 = 4.71 × 10⁻⁶ T = 4.71 μT.

1.50 μT is μ₀I/(2πR), the field of a long straight wire; 9.42 μT drops the factor 2 in the denominator; 0.188 μT is μ₀IR/2, putting R on top so that a bigger loop would give a bigger field.

**2. A** — *Evaluating the axial-field factor.* Convert z to metres: z = 0.10 m. R² + z² = 0.0100 + 0.0100 = 0.0200 m², and (0.0200)^(3/2) = 0.0200 × √0.0200 = 0.0200 × 0.1414 = 2.828 × 10⁻³ m³. Then x = (2.0 × 0.0100)/(2 × 2.828 × 10⁻³) = 0.0200/5.657 × 10⁻³ = 3.54 A/m.

10.0 A/m ignores z and evaluates the centre value; 1.00 × 10⁻⁵ A/m leaves z as 10 (metres); 0.0707 A/m uses the power 1/2 instead of 3/2 on the bracket.

**3. D** — *Permeability of free space from the gradient of B against the factor.* B = μ₀x, so the gradient is μ₀. Gradient = (6450 − 1450)/(5.00 − 1.00) = 5000/4.00 = 1250 nT·m/A = 1.25 × 10⁻⁶ T·m/A, within 0.5% of 4π × 10⁻⁷. The line has intercept 1450 − 1250 × 1.00 = +200 nT, so it does not pass through the origin.

1.25 × 10³ forgets to convert nT to T (× 10⁻⁹); 1.45 × 10⁻⁶ is B/x at the first point, which wrongly assumes the line goes through the origin; 1.29 × 10⁻⁶ is the same mistake at the second point.

**4. B** — *Fall-off of the axial field with distance.* B(z)/B(0) = R³/(R² + z²)^(3/2). With R = 0.10 m and z = 0.20 m: R² + z² = 0.0500 m², (0.0500)^(3/2) = 0.01118 m³, and R³ = 0.00100 m³, so the ratio is 0.0894 and B = 6285 × 0.0894 = 562 nT.

786 nT applies the far-field 1/z³ law (ratio 1/8) at a point only two radii away, where it is not yet valid; 1571 nT uses an inverse-square ratio R²/z² = 1/4; 3143 nT halves the reading as if B fell linearly with z.

**5. C** — *Diagnosing a non-zero intercept on the B against factor graph.* B = μ₀x has no constant term, so an intercept means every reading carries the same fixed offset: a tesla meter that reads 200 nT with no current, or a stray field. Zeroing the meter before use removes it.

Extra turns multiply every B by N and so change the gradient, not the intercept; a larger current changes the x-values, not the intercept; z in cm distorts the spacing of the x-values and bends the line, but does not lift it off the origin.
