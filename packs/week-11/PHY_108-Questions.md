# PHY_108 — Week 11 Questions

*The permeability of free space from the axial field of a current-carrying circular loop: the working formula, the computed factor and the gradient that is μ₀ — sat seven days later, notes closed, as a retention test.*

## Multiple choice

**1.** The axial flux density of a single-turn circular loop at distance z from its centre is:
A. μ₀IR / [2(R² + z²)^(3/2)]
B. μ₀IR² / [2(R² + z²)^(3/2)]
C. μ₀IR² / [2(R² + z²)^(1/2)]
D. μ₀I / [2π(R² + z²)]

**2.** Which item is **not** listed in the apparatus for this experiment?
A. Search coil and galvanometer
B. Tesla meter
C. Movable magnetic probe
D. DC power supply

**3.** Putting z = 0 in the working formula gives the field at the centre of the loop:
A. μ₀I/2πR
B. μ₀IR/2
C. μ₀I/2R
D. μ₀nI

**4.** In the data analysis, B is plotted against a computed factor. The x-axis quantity is:
A. z
B. z²
C. 1/z³
D. I R² / [2(R² + z²)^(3/2)]

**5.** If the plotted factor includes the current I, the gradient of the B-against-factor graph is equal to:
A. μ₀I
B. μ₀
C. μ₀/I
D. 2μ₀R

**6.** The SI unit of that gradient is:
A. T·m/A, i.e. H/m
B. tesla
C. A/m
D. weber

**7.** How many readings of B are taken for one coil, and at what step in z?
A. 10 readings, 5 cm steps
B. 12 readings, 2 cm steps
C. 20 readings, 2 cm steps
D. 20 readings, 1 cm steps

**8.** The default settings for the first run are:
A. R = 1.0 m, I = 0.1 A
B. R = 0.10 cm, I = 10 A
C. R = 0.20 m, I = 2 A
D. R = 0.10 m, I = 1 A

**9.** The experiment is repeated for Coil 2, Coil 3 and so on mainly in order to:
A. increase the magnetic field
B. confirm that μ₀ is independent of the loop radius and give independent values to average
C. warm up the tesla meter
D. reduce the Earth's field

**10.** The Excel sheet lists z in cm and B in nT. A student who plots the raw numbers without converting B gets a gradient wrong by a factor of about:
A. 10⁹
B. 10⁻⁹
C. 10²
D. 4π

**11.** Oersted's 1820 observation was that a compass needle near a current-carrying conductor:
A. is unaffected
B. always points north
C. deflects by an angle proportional to the current
D. deflects only for alternating current

**12.** A student's best-fit line of B against the factor does **not** pass through the origin. The most likely cause is:
A. the current was too large
B. μ₀ is not constant
C. the coil has more than one turn
D. a zero error on the tesla meter, or a wrongly located z = 0

## Short answer

**13.** State the working formula for this experiment, define every symbol with its SI unit, and give the accepted value of μ₀ in two equivalent unit forms. Then state what the formula reduces to at the centre of the loop.

**14.** Describe the graph used in the data analysis: what is plotted on each axis (with units), what the gradient equals, and the algebra that turns the gradient into μ₀. Explain what changes if the computed factor omits the current I. Then use the deck's own z = 0 row (R = 0.10 m, I = 1 A, B = 6285 nT) to check the gradient.

**15.** Give four sources of error in this experiment and the precaution against each, and state clearly which are systematic and which are random.

## Answers

**1. B** — *the working formula*: B(z) = μ₀IR²/[2(R² + z²)^(3/2)]. R is **squared** on top and the bracket carries the **3/2** power. Option A has R to the first power, so the expression no longer reduces to μ₀I/2R at z = 0. Option C uses the 1/2 power, which is the distance itself rather than its cube and gives the wrong fall-off. Option D is the field of a **long straight wire**, μ₀I/2πr, dressed up with the loop's bracket — a different geometry entirely.

**2. A** — *the apparatus list*: circular loop of radius R, DC power supply, ammeter, movable magnetic probe, tesla meter. There is **no search coil and no galvanometer** — the field is read directly off the tesla meter by a Hall probe, not induced in a coil. Options B, C and D are all on the list.

**3. C** — *the centre of the loop*: at z = 0 the bracket becomes (R²)^(3/2) = R³, so B = μ₀IR²/(2R³) = **μ₀I/2R**, the maximum value on the axis. Option A is again the long-straight-wire result. Option B has R in the numerator, which would make a bigger loop give a bigger central field — the opposite of the truth. Option D is the field inside a **solenoid** of n turns per metre.

**4. D** — *what goes on the x-axis*: the deck's "y = m x" slide means B = μ₀ × factor, so the factor is everything in the formula except μ₀, namely **I R²/[2(R² + z²)^(3/2)]**, in A/m. Options A and B plot z or z² directly, which give curves with no usable gradient. Option C is the far-field 1/z³ approximation, which is only valid for z ≫ R and fails badly at the small z where most of the readings are taken.

**5. B** — *the gradient is the answer*: with I inside the factor, B = μ₀x exactly, so the slope of B against x **is μ₀ itself** and no further algebra is needed. Option A is the slope you get when I is left **out** of the factor. Option C inverts that. Option D invents an R-dependence, but the whole point of repeating with different coils is that the slope does **not** depend on R.

**6. A** — *unit of the slope*: slope = B/x = tesla ÷ (A/m) = **T·m/A**, which is the same unit as **H/m** (1 H = 1 T·m²/A). The deck quotes μ₀ as 4π × 10⁻⁷ T·m/A on the theory slide and 4π × 10⁻⁷ H/m on the summary sheet — the same unit, not a contradiction. Option B is the unit of B alone, i.e. what you would get by forgetting to divide. Option C is the unit of the factor x, the denominator. Option D is the unit of magnetic **flux** Φ, not of flux density or of permeability.

**7. C** — *the readings*: the probe starts at the centre, z = 0, and z is then increased in **steps of 2 cm** (2, 4, 6 …), **up to 20 readings in all**, taking the run out to z = 38 cm. Options A, B and D each get one half of that right and the other wrong. Note that the deck's printed sample table jumps from z = 10 cm to z = 26 cm — rows are missing from the printout, not from the experiment.

**8. D** — *the default first run*: Coil 1 has **R = 0.10 m**, and the digital power supply is set to **I = 1 A** (other currents may be explored). Option A swaps the two numbers. Option B mixes the unit up — 0.10 cm would be a loop a millimetre across. Option C is the second coil's kind of setting, not the default.

**9. B** — *why repeat with other coils*: μ₀ is a **constant of free space**, so the slope must come out the same whatever the loop radius (and whatever the current). Getting the same value from Coil 2 and Coil 3 is the check that the result is a property of space and not of this particular apparatus, and it gives independent values to average. Option A is true but is not a reason — a stronger field is not the aim. Option C invents an instrument-warm-up step the procedure does not contain. Option D is false: changing R does nothing to the Earth's field.

**10. A** — *the unit trap*: B is logged in **nanotesla**, so the true value is the logged number × 10⁻⁹. Plotting the raw nT figures makes every y-value 10⁹ times too large, and the slope with it. Option B has the correction the right size but the wrong way round — it is the factor you multiply by, not the factor the answer is out by. Option C is the cm-to-m factor for z, which distorts the x-axis but is not the dominant error here. Option D is the constant in μ₀ and has nothing to do with units of the data. (Leaving z in cm as well distorts the computed factor on top of this.)

**11. C** — *Oersted, 1820*: placing a compass near a current-carrying conductor deflects the needle, and the **degree of deflection is proportional to the magnitude of the current** — the observation that founded electromagnetism and the reason a current can be used to produce a measurable field at all. Option A denies the discovery. Option B describes a compass with no current present. Option D is false: the deflection is a DC effect, and it was DC that Oersted used.

**12. D** — *what an intercept means*: B = μ₀x predicts a line **through the origin**, so an intercept is an instrumental fault, not a failure of physics — a **zero error on the tesla meter** (every reading offset by a constant) or a **wrongly located z = 0** (the probe not started at the true centre of the coil). Option A is wrong: a larger current changes the slope's x-values, not the intercept. Option B is not a possibility — μ₀ is a defined constant of free space. Option C would multiply every B by N and so change the **gradient**, not lift the line off the origin.

**13.** *The working formula and its symbols.* **B(z) = μ₀ I R² / [2 (R² + z²)^(3/2)]**, for a **single-turn** circular loop.
- **B(z)** = magnetic flux density on the axis at distance z from the centre, in **tesla (T)** — the simulator logs it in **nT**, so multiply by 10⁻⁹ before use;
- **μ₀** = permeability of free space, the quantity being measured;
- **I** = current in the loop, in **amperes (A)**;
- **R** = radius of the loop, in **metres (m)**;
- **z** = axial distance from the centre of the loop, in **metres (m)** — the sheet logs it in cm, so divide by 100.

Accepted value: **μ₀ = 4π × 10⁻⁷ T·m/A = 4π × 10⁻⁷ H/m ≈ 1.257 × 10⁻⁶**. The two unit forms are identical (1 H = 1 T·m²/A), and the deck quotes both. At the **centre** of the loop, z = 0, the bracket becomes R³ and the formula reduces to **B(0) = μ₀I/2R**, which is the maximum field on the axis; far away, z ≫ R, B falls off as 1/z³.

**14.** *The graph, the gradient and the check.* For each recorded pair (z, B), compute the **factor x = I R²/[2(R² + z²)^(3/2)]**, with z and R in metres and I in amperes, so that x is in **A/m**. **Plot B (y-axis, in tesla — convert the logged nT by × 10⁻⁹) against x (x-axis, in A/m).** Since B = μ₀x, the plot is a straight line **through the origin** of the form y = mx, and the **gradient m = μ₀ directly**, read as m = ΔB/Δx in **T·m/A = H/m**; compare with 4π × 10⁻⁷ for the percentage error. **If the factor is computed without I**, i.e. x′ = R²/[2(R² + z²)^(3/2)] in m⁻¹, then B = (μ₀I)x′, the **gradient equals μ₀I**, and **μ₀ = gradient / I**. With the default I = 1 A the two definitions give the same number, so always state which one you used. **Check on the deck's own first row**: at z = 0 with R = 0.10 m and I = 1 A, x = (1)(0.10²)/[2 × (0.10²)^(3/2)] = 0.01/(2 × 0.001) = **5.00 A/m**, and B = 6285 nT = **6.285 × 10⁻⁶ T**, so m = 6.285 × 10⁻⁶ / 5.00 = **1.257 × 10⁻⁶ H/m = 4π × 10⁻⁷**. The deck's data reproduce the accepted value exactly.

**15.** *Four errors, their precautions, and their character.*
(i) **Probe alignment and z-origin.** The Hall probe must lie **on the axis**, oriented parallel to it, and z must be measured from the true centre of the coil; an off-axis or tilted probe reads low, and a mislocated z = 0 shifts every point and pushes the line off the origin. **Systematic.**
(ii) **Tesla-meter zero error and stray fields.** Zero the meter before use and keep magnets, motors and steel away; in a real laboratory the Earth's field (≈ 50 μT) is far larger than the ≈ 6 μT signal, though the simulation excludes it. **Systematic.**
(iii) **Ammeter and tesla-meter calibration, and current drift.** Read I from the ammeter for every set and keep the supply steady; a calibration error tilts the gradient rather than scattering the points. **Systematic.**
(iv) **Reading and plotting scatter.** Small fluctuations in the displayed B and in reading the graph are **random**; they are minimised by taking all 20 readings, repeating with several coils, and taking the gradient from a large best-fit-line triangle rather than from a single point.
Note also that the formula assumes **one turn**: a multi-turn coil would need the extra factor N, B = μ₀NIR²/[2(R² + z²)^(3/2)]. And the unit conversions — **z in cm → m** and **B in nT → T** — must be done before plotting, or the gradient is out by a factor of 10⁹.
