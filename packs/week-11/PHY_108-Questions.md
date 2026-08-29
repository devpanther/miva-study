# PHY_108 — Week 11 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 12, not this week. Notes closed.*

## Section A — Multiple choice (12)

**A1.** The axial flux density of a single-turn circular loop at distance z from its centre is
A. μ₀IR / [2(R² + z²)^{3/2}]
B. μ₀IR² / [2(R² + z²)^{3/2}]
C. μ₀IR² / [2(R² + z²)^{1/2}]
D. μ₀I / [2π(R² + z²)]

**A2.** Which item is **not** listed in the apparatus for this experiment?
A. Tesla meter  B. Movable magnetic probe  C. Search coil and galvanometer  D. DC power supply

**A3.** Putting z = 0 in the working formula gives the field at the centre of the loop:
A. μ₀I/2πR  B. μ₀I/2R  C. μ₀IR/2  D. μ₀nI

**A4.** In the data analysis, B is plotted against the computed factor. The x-axis quantity is
A. z  B. z²  C. I R² / [2(R² + z²)^{3/2}]  D. 1/z³

**A5.** If the plotted factor includes the current I, the gradient of the B-vs-factor graph is equal to
A. μ₀I  B. μ₀/I  C. μ₀  D. 2μ₀R

**A6.** The SI unit of the gradient in A5 is
A. tesla  B. T·m/A, i.e. H/m  C. A/m  D. weber

**A7.** How many readings of B are taken for one coil, and at what step in z?
A. 10 readings, 5 cm steps  B. 20 readings, 2 cm steps  C. 20 readings, 1 cm steps  D. 12 readings, 2 cm steps

**A8.** The default settings for the first run are
A. R = 0.10 m, I = 1 A  B. R = 1.0 m, I = 0.1 A  C. R = 0.10 cm, I = 10 A  D. R = 0.20 m, I = 2 A

**A9.** The experiment is repeated for Coil 2, Coil 3, etc. mainly in order to
A. increase the magnetic field  B. confirm that μ₀ is independent of the loop radius and obtain independent values to average  C. warm up the tesla meter  D. reduce the Earth's field

**A10.** The Excel sheet lists z in cm and B in nT. If a student plots the raw numbers without converting, the gradient will be wrong by a factor of about
A. 10⁻⁹  B. 10²  C. 10⁹ (plus a distorted x-axis from the un-converted z)  D. 4π

**A11.** Oersted's 1820 observation was that a compass needle near a current-carrying conductor
A. is unaffected  B. deflects by an angle proportional to the current  C. always points north  D. deflects only for AC

**A12.** A student's best-fit line of B against the factor does **not** pass through the origin. The most likely cause is
A. the current was too large  B. a zero error on the tesla meter or a wrongly located z = 0  C. μ₀ is not constant  D. the coil has more than one turn

## Section B — Short answer (3)

**B1.** State the working formula for this experiment, define every symbol with its SI unit, and give the accepted value of μ₀ in two equivalent unit forms.

**B2.** Describe the graph used in the data analysis: what is plotted on each axis (with units), what the gradient equals, and the algebra that turns the gradient into μ₀. Explain what changes if the computed factor omits the current I.

**B3.** Give four sources of error in this experiment and the precaution against each, and state clearly which are systematic and which are random.

---

## Answers

**Section A**

- **A1 — B.** B(z) = μ₀IR²/[2(R²+z²)^{3/2}]; R is squared on top and the bracket carries the 3/2 power.
- **A2 — C.** The apparatus list is loop, DC power supply, ammeter, movable magnetic probe, tesla meter — no search coil/galvanometer.
- **A3 — B.** At z = 0 the bracket becomes R³, leaving μ₀I/2R, the maximum value.
- **A4 — C.** The factor is I R²/[2(R²+z²)^{3/2}] so that B = μ₀ × factor is linear.
- **A5 — C.** With I inside the factor, B = μ₀x, so the slope is μ₀ itself.
- **A6 — B.** Slope = B/x = T ÷ (A/m) = T·m/A = H/m.
- **A7 — B.** z is increased in 2 cm steps from z = 0, up to 20 readings in all (0 → 38 cm).
- **A8 — A.** Coil 1 default R = 0.10 m, current set to 1 A.
- **A9 — B.** μ₀ is a constant of free space; a value independent of R (and of I) validates the result.
- **A10 — C.** B in nT is 10⁻⁹ T, so the slope is inflated by ~10⁹; leaving z in cm also distorts the factor.
- **A11 — B.** Oersted found the deflection proportional to the magnitude of the current.
- **A12 — B.** B = μ₀x predicts a line through the origin; an intercept signals a zero/offset error, not a physics failure.

**Section B**

**B1.** B(z) = μ₀ I R² / [2 (R² + z²)^{3/2}], for a **single-turn** circular loop.
B(z) = magnetic flux density on the axis at distance z from the centre, in tesla (T); μ₀ = permeability of free space, the quantity being measured; I = current in the loop, in amperes (A); R = radius of the loop, in metres (m); z = axial distance from the centre of the loop, in metres (m).
Accepted value: μ₀ = 4π × 10⁻⁷ **T·m/A** = 4π × 10⁻⁷ **H/m** ≈ 1.257 × 10⁻⁶ (the two unit forms are identical, and the deck quotes both).
At the centre (z = 0) this reduces to B = μ₀I/2R, the maximum field.

**B2.** For each recorded pair (z, B) compute the factor x = I R²/[2(R² + z²)^{3/2}], with z and R in metres and I in amperes, so x is in A/m. **Plot B (y-axis, in tesla — convert the logged nT by ×10⁻⁹) against x (x-axis, in A/m).** Since B = μ₀x, the plot is a straight line through the origin of the form y = mx, and the **gradient m = μ₀ directly**, read as m = ΔB/Δx in T·m/A = H/m; compare with 4π × 10⁻⁷ for the percentage error.
If the factor is computed **without** I, i.e. x′ = R²/[2(R² + z²)^{3/2}] in m⁻¹, then B = (μ₀I)x′, the gradient equals **μ₀I**, and μ₀ = gradient / I. With the default I = 1 A the two give the same number, so state which definition you used.

**B3.** (i) *Probe alignment/orientation* — the Hall probe must lie on the axis, parallel to it, and z measured from the true centre of the coil; misalignment or a mislocated z = 0 is **systematic** (it shifts every point and pushes the line off the origin). (ii) *Tesla-meter zero error and stray fields* (Earth's field, nearby magnets, motors, steel) — zero the meter before use and keep magnetic material away; **systematic**. (iii) *Ammeter/tesla-meter calibration and current drift* — check I on the ammeter for every set and keep the supply steady; calibration error is **systematic** and tilts the gradient. (iv) *Reading and plotting scatter* — small fluctuations in the displayed B and in reading the graph are **random**; minimised by taking all 20 readings, repeating with several coils, and taking the gradient from a large best-fit line rather than a single point. Also note the formula assumes one turn, so a multi-turn coil would need the extra factor N.
