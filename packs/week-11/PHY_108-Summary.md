# PHY_108 — Week 11

*General Physics Practical II · Week 11 (16 – 22 Nov 2026)*

**Experiment: to determine the magnitude of the magnetic permeability of free space, μ₀, from the axial field of a current-carrying circular loop.**

## The 7 things most likely to be examined

1. **Working formula (memorise exactly).** For a **single-turn** circular loop of radius `R` carrying current `I`, the flux density on the axis at distance `z` from the centre is
   **B(z) = μ₀ I R² / [ 2 (R² + z²)^{3/2} ]**
   - `B(z)` = magnetic flux density on the axis, **tesla (T)** — the sim logs it in **nT**
   - `μ₀` = permeability of free space = **4π × 10⁻⁷ T·m/A ≡ 4π × 10⁻⁷ H/m** (≈ 1.257 × 10⁻⁶)
   - `R` = loop radius, **metres (m)**; `I` = loop current, **amperes (A)**; `z` = axial distance from centre, **metres (m)**
2. **Centre special case:** put z = 0 → **B(0) = μ₀I / 2R** (the maximum). B falls off as you move along the axis; far away (z ≫ R) B ∝ 1/z³.
3. **Apparatus (5 items):** circular loop of radius R · DC power supply · ammeter · movable magnetic (Hall) probe · **tesla meter**.
4. **Procedure / readings.** Coil 1, **R = 0.10 m**; set current to **I = 1 A**; probe at the **centre, z = 0**, click *Record*; then increase z in **steps of 2 cm** (2, 4, 6 …) recording B each time, **20 readings in all (z = 0 → 38 cm)**; **repeat for Coil 2, Coil 3 …** (different R). Results download as an Excel sheet.
5. **Why each repetition exists.** The 20 z-values give the *spread of points needed for a straight-line fit* (one point cannot give a gradient, and the fit averages out probe/reading scatter). Repeating with **different coil radii** (and optionally different currents) checks that μ₀ is a **constant of free space** — independent of R and I — and gives independent values to average.
6. **The graph — this is the exam question.**
   - Compute for every reading the **factor** `x = I R² / [ 2 (R² + z²)^{3/2} ]` (units **A/m**).
   - **Plot B (y-axis, T) against x (x-axis, A/m).** The deck's `y = m x` slide is exactly this: **B = μ₀ · x**, a straight line **through the origin**.
   - **Gradient m = μ₀.** So **μ₀ = slope = ΔB/Δx**, in **T·m/A = H/m**. No further algebra needed; % error = |m − 4π×10⁻⁷|/(4π×10⁻⁷) × 100.
   - *If you compute the factor without I* (i.e. `x' = R²/[2(R²+z²)^{3/2}]`, units m⁻¹), then **slope = μ₀I** and **μ₀ = slope / I**. With I = 1 A the numbers are identical — but say which version you used.
   - Worked check: at z = 0, x = (1)(0.10²)/(2×0.001) = 5.00 A/m and B = 6285 nT = 6.285×10⁻⁶ T → m = 1.257×10⁻⁶ H/m = 4π×10⁻⁷. ✓
7. **Unit conversions that decide the mark.** The sheet gives **z in cm** and **B in nT** while **R is in m**. Convert **z → m (÷100)** and **B → T (×10⁻⁹)** *before* plotting, or the gradient is out by a factor of 10⁹.

## Sources of error / precautions

- **Probe alignment:** the Hall probe must sit *on the axis* and be oriented parallel to it — off-axis or tilted gives a low reading.
- **Zero error / stray field:** zero the tesla meter and subtract the Earth's field (≈ 50 μT is far larger than the 6 μT signal in a real lab — in the simulation it is excluded); keep magnets, motors and steel away.
- **z-origin error:** a systematic offset in locating z = 0 (centre of the coil) shifts every point; it shows up as a line that misses the origin.
- **Current drift / meter accuracy:** read I from the ammeter for each set; ammeter and tesla-meter calibration errors are systematic (they tilt the gradient), reading scatter is random (use the line of best fit, not a single point).
- **Single-turn assumption:** the formula has no N; a multi-turn coil needs B = μ₀NIR²/[2(R²+z²)^{3/2}].
- Take readings at eye level / use the recorded digital values; plot on large graph paper so the slope triangle spans most of the line.

## Deck faults to know

- The slide **heading is truncated** by the extractor: "…Magnetic-Permeability-of-" (of *Free Space*).
- The **B(z) equation and the "factor" expression are images and are missing from the text** — the deck never writes them out in words; use the standard forms above.
- **μ₀ is quoted as `4π × 10⁻⁷ T·m/A` in the theory slide and `4π × 10⁻⁷ H/m` in the summary.** These are the **same unit**, not a contradiction (1 H = 1 T·m²/A) — but quote whichever the question uses.
- The **sample data table jumps from z = 10 cm straight to z = 26 cm** — rows are missing from the printout, not from the experiment (you still take all 20 at 2 cm steps).
- The summary sheet misprints **"REPUTATION between like poles"** — it should read **REPULSION**.
- Extractor ligature damage throughout: "aect"=affect, "dierent"=different, "buon"=button, "ﬂux"=flux, "hp://"=http://.

## Commonly confused

- **B(0) = μ₀I/2R (centre of a loop)** vs **B = μ₀I/2πr (long straight wire)** vs **B = μ₀nI (solenoid)** — only the first is this experiment.
- **Permeability μ₀ (H/m)** vs **permittivity ε₀ (F/m)** vs **relative permeability μᵣ (no units)**; μ = μᵣμ₀.
- **Flux density B (T)** vs **flux Φ (Wb = T·m²)** — the tesla meter reads B, not Φ.
- **Gradient = μ₀** (factor includes I) vs **gradient = μ₀I** (factor excludes I) — state your definition of x.
- **nT vs μT vs T**, and **cm vs m** — 6285 nT = 6.285 μT = 6.285 × 10⁻⁶ T; 38 cm = 0.38 m.
- **z (along the axis, from the centre)** vs **R (radius, fixed for a coil)** — z is the variable you change, R is what you change *between* coils.
- Plotting **B against z** gives a curve that is *not* a straight line and yields no gradient — you must plot B against the computed factor.
