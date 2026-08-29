# PHY_108 — Week 11 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 12, not this week. Notes closed.*

## Section A - Multiple choice (12)

**1.** In 1820 Hans Christian Ørsted discovered that when a compass is placed near a current-carrying conductor:
a) the compass needle is demagnetised by the current
b) the needle deflects, by an amount that grows with the magnitude of the current
c) the needle deflects by an angle exactly equal to the current in amperes
d) a current is induced in the compass needle's pivot

**2.** For a **single circular loop** of radius R carrying current I, the magnetic flux density at a point on the axis a distance z from the centre is:
a) B = μ₀IR²/[2(R² + z²)^{3/2}]
b) B = μ₀IR/[2(R + z)³]
c) B = μ₀IR²/[4π(R² + z²)]
d) B = μ₀I/[2π(R² + z²)^{1/2}]

**3.** The deck's Coil 1 has R = 0.10 m and carries I = 1 A in one turn. The flux density **at the centre** of the coil is:
a) 6.28 × 10⁻⁶ T
b) 1.26 × 10⁻⁵ T
c) 6.28 × 10⁻⁷ T
d) 1.26 × 10⁻⁶ T

**4.** The permeability of free space is:
a) 8.85 × 10⁻¹² F/m
b) 4π × 10⁻⁷ H/m, equivalently 4π × 10⁻⁷ T·m/A
c) 4π × 10⁻⁷ T/(A·m)
d) 4π × 10⁻⁷ A/(T·m)

**5.** To obtain a **straight line through the origin** from the recorded data, you plot:
a) B against z
b) B against 1/z³
c) B against the factor IR²/[2(R² + z²)^{3/2}]
d) B² against (R² + z²)

**6.** With R = 0.10 m and I = 1 A, the value of the factor IR²/[2(R² + z²)^{3/2}] at **z = 8 cm** is:
a) 2.38 A/m
b) 4.76 A/m
c) 9.77 A/m
d) 0.857 A/m

**7.** From the deck's own data (R = 0.10 m, I = 1 A): at z = 0 the factor is 5.000 A/m and B = 6285 nT; at z = 10 cm the factor is 1.768 A/m and B = 2220 nT. The gradient of the B-against-factor graph is:
a) 1.26 × 10⁻⁶ H/m
b) 1.26 × 10³ H/m
c) 6.28 × 10⁻⁶ H/m
d) 1.26 × 10⁻⁷ H/m

**8.** The gradient of that graph is equal to μ₀, and its unit is therefore:
a) tesla
b) T·m/A, that is H/m
c) A/m
d) T·A/m

**9.** A student's graph is an excellent straight line but cuts the **B-axis well above the origin**. The most likely cause is:
a) the readings at large z were only about 100 nT and are noisy
b) the Tesla meter was not zeroed, so the Earth's field is added to every reading
c) the coil radius was measured to the outside of the winding instead of the mean
d) the current drifted downwards as the coil warmed up

**10.** A coil of **50 turns** and radius 0.05 m carries 2 A. The flux density at its centre is:
a) 1.26 × 10⁻³ T
b) 2.51 × 10⁻³ T
c) 2.51 × 10⁻⁵ T
d) 1.26 × 10⁻⁴ T

**11.** Along the axis of a loop of radius R, the flux density falls to **half** its central value at approximately:
a) z = 0.5R
b) z = 0.77R
c) z = R
d) z = 2R

**12.** A magnetic medium has permeability μ = 6.28 × 10⁻⁴ H/m. Its relative permeability μ_r is:
a) 500
b) 500 H/m
c) 2.0 × 10⁻³
d) 7.9 × 10⁻¹⁰

## Section B - Short answer (3)

**13.** State the aim of this experiment and list the apparatus, saying what each item is for. State Ørsted's 1820 observation and why it underlies the experiment. Write down the expression for the flux density on the axis of a single circular loop, defining every symbol and its SI unit, and show what it becomes at the centre of the loop. Finally, explain how that expression is turned into a straight-line graph: what is plotted against what, what the gradient equals, and what the intercept should be.

**14.** Give the procedure of the experiment in order, from selecting the coil to obtaining a value of μ₀ from the graph. Then give **four precautions** and **four sources of error**, saying in each case what the precaution protects, or what the error does to the measured value of μ₀.

**15.** For the deck's Coil 1, R = 0.10 m and I = 1 A. Two of the recorded rows are **z = 4 cm, B = 5039.95 nT** and **z = 30 cm, B = 199.35 nT**. Compute the factor IR²/[2(R² + z²)^{3/2}] for each row, find the gradient of the B-against-factor graph, state the value of μ₀ it gives, and compute the percentage error against the accepted value. Then: if the same coil, at the same current, were wound round a core in which the flux density at the centre became 3.15 × 10⁻³ T, what would the relative permeability of the core material be, and what is the difference between μ, μ₀ and μ_r?

## Answers

**1. b** — *Ørsted, 1820*: the needle **deflects**, and "the degree of deflection is directly proportional to the current's magnitude", as the deck's THEORY slide puts it. This is the founding observation of electromagnetism — a current is a source of magnetic field — and it is why a loop of wire has a field to measure at all. Option a is the reverse: a current does not wipe out a needle's magnetisation. Option c confuses "proportional to" with "numerically equal to"; the constant of proportionality depends on the geometry and on the Earth's field, which is precisely what a tangent galvanometer exploits. Option d describes **induction** (Faraday, 1831), a different discovery eleven years later, and induction needs a *changing* field, not a steady current.

**2. a** — *the axial field of a loop*: Biot–Savart applied to a circular loop gives **B = μ₀IR²/[2(R² + z²)^{3/2}]**. Option b writes (R + z)³ instead of (R² + z²)^{3/2} — you must square R and z, add, and only then take the 3/2 power; the two agree nowhere except in the limits. Option c drops the 3/2 power to 1 (an inverse-square rather than the correct dependence) and keeps a stray 4π that the ∮dl = 2πR integration has already cancelled. Option d is the field of a **long straight wire**, μ₀I/2πr, with r dressed up — no R² in the numerator, so it does not even reduce to μ₀I/2R at z = 0.

**3. a** — *the centre-field special case*: at z = 0 the formula collapses to **B₀ = μ₀I/2R** = (4π × 10⁻⁷ × 1)/(2 × 0.10) = 1.2566 × 10⁻⁶/0.20 = **6.28 × 10⁻⁶ T**, which is 6283 nT — the deck's own first data point reads 6285 nT. Option b divides by R instead of 2R, doubling the answer, the commonest slip in this formula. Option c is a decade slip. Option d is the numerical value of **μ₀ itself** written as if it were a field; if your "answer" is 1.26 × 10⁻⁶ you have almost certainly copied the constant instead of using it.

**4. b** — *value and unit of μ₀*: **4π × 10⁻⁷ = 1.257 × 10⁻⁶**, in **H/m**, identically **T·m/A** (since 1 H = 1 Wb/A = 1 T·m²/A). The deck's THEORY slide writes T·m/A and its summary sheet writes H/m; both are correct. Option a is **ε₀**, the permittivity of free space, in farads per metre — the electric partner of μ₀, linked to it by c = 1/√(μ₀ε₀), and the classic swap. Option c inverts the metre: T/(A·m) is not T·m/A. Option d is the reciprocal unit altogether, which is what 1/μ₀ would carry.

**5. c** — *linearising*: B is not linear in z, so B against z is a bell-shaped curve. Writing **x = IR²/[2(R² + z²)^{3/2}]** makes **B = μ₀x**, of the form y = mx with **no constant term** — a straight line through the origin whose gradient is the answer. (That factor is exactly the field strength **H** in A/m, so the graph is B against H and the gradient is B/H = μ₀ by definition.) Option a is the raw curve; no gradient on it means anything. Option b is the **far-field** approximation only: B ≈ μ₀IR²/2z³ holds for z ≫ R and is 11 % wrong at z = 38 cm for this coil, and hopeless near z = 0 where it diverges. Option d squares one axis and takes the wrong power on the other; it linearises nothing.

**6. a** — *evaluating the factor*: R² + z² = 0.0100 + 0.0064 = 0.0164 m²; (0.0164)^{3/2} = 0.0164 × √0.0164 = 0.0164 × 0.12806 = 2.100 × 10⁻³ m³; so x = (1 × 0.0100)/(2 × 2.100 × 10⁻³) = **2.38 A/m**. Option b, 4.76, **omits the factor 2** in the denominator — exactly double. Option c, 9.77, uses **2z³** in place of 2(R² + z²)^{3/2}, i.e. the far-field form, and is four times too big at a distance where z is smaller than R. Option d, 0.857, uses **(R + z)³ = 0.18³** instead of (R² + z²)^{3/2}, the same error as distractor 2b.

**7. a** — *reading the gradient*: gradient = ΔB/Δx with **B converted to tesla**: (6285 − 2220) × 10⁻⁹ / (5.000 − 1.768) = 4.065 × 10⁻⁶/3.232 = **1.258 × 10⁻⁶ ≈ 1.26 × 10⁻⁶ H/m**, which is 4π × 10⁻⁷ to within 0.1 %. Option b, 1.26 × 10³, is what you get by leaving **B in nanotesla** — a factor of 10⁹, and the single commonest wreck in this experiment; the giveaway is that no permeability is of order a thousand H/m. Option c, 6.28 × 10⁻⁶, is the flux density **at the centre** in tesla, i.e. reading a data point instead of a gradient. Option d is a decade slip, and would imply μ₀ ten times smaller than the constant every formula on the sheet uses.

**8. b** — *the unit of the gradient*: y is B in **tesla**, x is the factor in **A/m**, so the gradient carries T ÷ (A·m⁻¹) = **T·m/A = H/m** — which is the unit of permeability, confirming the identification of the slope with μ₀. Option a is the unit of the **y-axis alone**, i.e. what you get by forgetting to divide by x. Option c is the unit of the **x-axis alone** (field strength H). Option d multiplies where it should divide by the metre; it is not a unit of any quantity in the experiment.

**9. b** — *what an intercept means*: B = μ₀x has **no constant term**, so a genuine intercept can only come from a field present when the loop's contribution is not. The Earth's field is about **50 μT — roughly eight times the loop's own 6.3 μT central field** — so an unzeroed Tesla meter puts a large constant offset on every point and lifts the whole line off the origin. Option a produces **scatter about** the line at the far end, not a bodily shift of it. Option c mis-scales the **x**-values, changing the gradient (and hence μ₀) systematically, but the line still aims at the origin. Option d makes x too large for the later points, bending the line slightly and biasing the gradient — again a gradient effect, not an intercept.

**10. a** — *N turns*: for N turns, B₀ = **μ₀NI/2R** = (4π × 10⁻⁷ × 50 × 2)/(2 × 0.05) = 1.2566 × 10⁻⁴/0.10 = **1.26 × 10⁻³ T**. Option b, 2.51 × 10⁻³, divides by **R** rather than 2R. Option c, 2.51 × 10⁻⁵, **omits N** and treats the coil as a single turn — the deck's formulae are all one-turn formulae, so this is the trap of quoting the deck verbatim without adapting it. Option d, 1.26 × 10⁻⁴, comes from entering the radius as **0.5 m** instead of 0.05 m, a straight decade slip.

**11. b** — *the half-value distance*: setting B(z)/B(0) = R³/(R² + z²)^{3/2} = 1/2 gives (R² + z²)^{3/2} = 2R³, so R² + z² = 2^{2/3}R² = 1.587R² and **z = √0.587 R = 0.766R** — about 7.7 cm for the deck's 10 cm coil, and the deck's own table does cross half of 6285 nT between z = 6 cm and z = 8 cm. Option a, 0.5R, is a guess by symmetry with the radius and gives B/B₀ = 0.72, not 0.5. Option c, z = R, gives B/B₀ = 1/2^{3/2} = **0.354**, not a half — a tempting answer because the *denominator* doubles there, but it is then raised to the 3/2 power. Option d, 2R, leaves only 0.089 of the central field.

**12. a** — *relative permeability is a pure number*: **μ_r = μ/μ₀** = 6.28 × 10⁻⁴/1.2566 × 10⁻⁶ = **500**, dimensionless. Option b attaches **H/m** to it; μ and μ₀ carry H/m, their **ratio does not**, and writing a unit on μ_r is a units error even though the number is right. Option c, 2.0 × 10⁻³, is **μ₀/μ**, the ratio inverted. Option d, 7.9 × 10⁻¹⁰, is the **product** μ × μ₀ — dimensionally H²/m², a quantity that means nothing.

**13.** *Aim, apparatus, theory and the graph.* **Aim**: to determine the magnitude of the **magnetic permeability of free space, μ₀**, by mapping the magnetic flux density along the axis of a circular current-carrying loop. **Apparatus**: a **circular loop of known radius R** (the source of the field, and the geometry the whole formula depends on); a **DC power supply** (drives a steady current); an **ammeter** (reads I, which appears linearly in the working formula and must be known, not assumed); a **movable magnetic probe** (a Hall probe that can be traversed along the axis, since the experiment is a scan in z); and a **Tesla meter** (reads the flux density directly, in nanotesla on this bench). **Ørsted, 1820**: a compass placed near a current-carrying conductor has its needle **deflected**, by an amount that increases with the current. That observation established that an electric current produces a magnetic field, which is the premise of the whole experiment — without it a loop of wire would have no field to map, and there would be no constant linking current to field to measure. **The working formula**, for a single turn:

**B(z) = μ₀ I R² / [2 (R² + z²)^{3/2}]**

where **B(z)** is the magnetic flux density on the axis at distance z from the centre, in **tesla (T)**; **I** is the current in the loop, in **amperes (A)**; **R** is the radius of the loop, in **metres (m)**; **z** is the axial distance from the **centre of the loop**, in **metres**; and **μ₀** is the permeability of free space, **4π × 10⁻⁷ H/m = 4π × 10⁻⁷ T·m/A**. (For N turns, multiply by N.) **At the centre**, z = 0, so (R² + z²)^{3/2} = R³ and

**B₀ = μ₀I R²/2R³ = μ₀I/2R**,

which is the maximum value of B; the field decreases monotonically as the probe moves away in either direction. **The graph**: B is not linear in z, so define the **factor x = IR²/[2(R² + z²)^{3/2}]**, computed row by row from the downloaded data. Then **B = μ₀x**, which is y = mx. **Plot B (in tesla) on the y-axis against x (in A/m) on the x-axis**; the result is a **straight line through the origin**, and the **gradient is μ₀ itself**, in T·m/A = H/m. The **intercept must be zero**, since the equation has no constant term; a non-zero intercept means a background field (usually the Earth's, if the Tesla meter was not zeroed) has been added to every reading. Note that x is numerically the **magnetic field strength H** at that point, so the graph is B against H and its gradient is B/H — the definition of permeability.

**14.** *Procedure, precautions and errors.* **Procedure**: (1) select the coil and note its radius — the default is **Coil 1, R = 0.10 m**; (2) set the current on the digital power supply to **1 A** and confirm it on the ammeter; (3) place the movable magnetic probe at the **centre of the coil, z = 0**, on the axis; (4) click **Record** to store the Tesla meter reading; (5) move the probe out along the axis in **steps of 2 cm** (2, 4, 6, 8 …), recording B at each position, for **20 readings in all**, so the scan ends at z = 38 cm; (6) **repeat for the other coils** (Coil 2, Coil 3 …) of different radius, as a check that the same constant emerges from every geometry; (7) on completion an **Excel sheet** of z and B downloads; (8) convert z to metres and B to tesla, compute **x = IR²/2(R² + z²)^{3/2}** for every row, **plot B against x**, measure the **slope**, and quote it as μ₀ with a percentage error against 4π × 10⁻⁷ H/m. **Precautions** (any four): **zero the Tesla meter with the current off, in place**, because the Earth's ≈ 50 μT field is several times the loop's own field and would otherwise offset every reading — this is what keeps the line through the origin; **keep the probe exactly on the axis and with its sensitive direction along the axis**, since a Hall probe reads only the component along its own normal and a tilt φ scales every reading by cos φ; **measure z from the plane of the loop**, not from the former or the clamp, so that the origin of the scan is the origin of the formula; **measure R as the mean radius of the winding** from several diameters, because R enters as R²/(R² + z²)^{3/2} and is the quantity μ₀ is most sensitive to; **check the current on the ammeter at every point**, as the coil warms and I drifts; **remove iron, magnets and other current-carrying leads from the bench** and twist the coil leads together so their own fields cancel; **let each reading settle before recording**, and if possible take readings at +z and −z to confirm the field is symmetric about z = 0. **Sources of error** (any four, with effect): **Tesla meter not zeroed / Earth's field included** — a constant offset on every B, giving a **non-zero intercept**, and a wildly wrong μ₀ if it is computed from a single point rather than a gradient; **probe off-axis or tilted** — readings systematically low, so **μ₀ comes out low**; **R measured to the inner or outer edge of the winding rather than the mean** — a direct systematic error in every x and therefore in the gradient, usually the largest single contribution; **current drift as the coil heats** — x is computed with a current the coil no longer carries, biasing the gradient; **z measured from the wrong origin** — the whole scan is shifted, and the line curves slightly rather than merely tilting; **leaving B in nT or z in cm** — factors of 10⁹ and 10², an absurd rather than an inaccurate answer; **Tesla meter resolution at large z**, where readings fall to ~100 nT — random scatter that dominates the far end of the graph; **treating a multi-turn coil as one turn** — μ₀ out by exactly the factor N. (The medium being air rather than vacuum contributes only about 0.00004 % and is negligible, which is why the experiment can legitimately claim to measure μ₀.)

**15. Gradient 1.259 × 10⁻⁶ H/m, so μ₀ ≈ 1.26 × 10⁻⁶ H/m, 0.21 % high; μ_r ≈ 500.** *The calculation.* **Factor at z = 4 cm = 0.04 m**: R² + z² = 0.0100 + 0.0016 = 0.0116 m²; √0.0116 = 0.10770, so (0.0116)^{3/2} = 0.0116 × 0.10770 = 1.2494 × 10⁻³ m³; x = (1 × 0.0100)/(2 × 1.2494 × 10⁻³) = **4.0021 A/m**, with B = 5039.95 nT = **5.03995 × 10⁻⁶ T**. **Factor at z = 30 cm = 0.30 m**: R² + z² = 0.0100 + 0.0900 = 0.1000 m²; (0.1000)^{3/2} = 0.1000 × 0.31623 = 3.1623 × 10⁻² m³; x = 0.0100/(2 × 3.1623 × 10⁻²) = **0.1581 A/m**, with B = 199.35 nT = **1.9935 × 10⁻⁷ T**. **Gradient**: (5.03995 × 10⁻⁶ − 1.9935 × 10⁻⁷)/(4.0021 − 0.1581) = 4.8406 × 10⁻⁶/3.8440 = **1.2593 × 10⁻⁶ H/m**. **So μ₀ = 1.26 × 10⁻⁶ T·m/A**, against the accepted 4π × 10⁻⁷ = 1.25664 × 10⁻⁶ H/m. **Percentage error** = (1.2593 − 1.25664)/1.25664 × 100 = **0.21 %** — well inside the tolerance of a practical of this kind, and a fit through all the recorded rows does better still (about 0.07 %). *The core.* With the core in place the centre field is B = 3.15 × 10⁻³ T where free space gave B₀ = μ₀I/2R = 6.285 × 10⁻⁶ T at the same current, so the field has been multiplied by **3.15 × 10⁻³/6.285 × 10⁻⁶ = 501 ≈ 500**, and since the geometry and current are unchanged this factor **is** the relative permeability: **μ_r ≈ 500**. *The three quantities.* **μ₀** is the permeability of **free space**, a fixed constant, 4π × 10⁻⁷ H/m. **μ** is the permeability of **a particular medium**, also in H/m, defined by **μ = B/H**; for the core here μ = μ_r μ₀ = 500 × 1.2566 × 10⁻⁶ = **6.28 × 10⁻⁴ H/m**. **μ_r = μ/μ₀** is the **dimensionless** ratio of the two, carrying no unit at all; it is ≈ 1 for air and vacuum (which is why this experiment, performed in air, measures μ₀), and in the hundreds or thousands for ferromagnetic materials. It is not the same as the susceptibility, χ = μ_r − 1.
