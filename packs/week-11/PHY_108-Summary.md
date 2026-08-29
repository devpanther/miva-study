# PHY_108 — Week 11 Summary

*General Physics Practical II · Week 11 (16 – 22 Nov 2026) · Topic: Experiment to determine the magnitude of the magnetic permeability of free space — the axial field of a circular current loop, B plotted against IR²/2(R² + z²)^{3/2}, and the gradient that IS μ₀*

## The 8 most examinable things this week

1. **Aim**: to determine the **magnitude of the magnetic permeability of free space, μ₀**, by measuring the magnetic flux density along the axis of a **circular current-carrying loop**. The answer you are working towards is a number you already know — **4π × 10⁻⁷ ≈ 1.257 × 10⁻⁶ H/m** — so the mark is in the method, the graph and the percentage error, not in the constant.
2. **The working formula** (the deck's THEORY slide, where it is a slide image):
   **B(z) = μ₀ I R² / [2 (R² + z²)^{3/2}]**
   for a **single turn**. B(z) is the flux density in **tesla** at a point on the **axis** a distance **z (m)** from the centre; **I** is the current in **amperes**; **R** is the loop radius in **metres**; **μ₀ = 4π × 10⁻⁷ T·m/A = 4π × 10⁻⁷ H/m**. For **N turns**, multiply by N.
3. **At the centre, z = 0**, the formula collapses to **B₀ = μ₀I/2R** — the single most quoted result of the topic. For the deck's coil (R = 0.10 m, I = 1 A) that is B₀ = (4π × 10⁻⁷ × 1)/(2 × 0.10) = **6.28 × 10⁻⁶ T = 6283 nT**, and the deck's own first data point reads **6285 nT**. B is a **maximum at z = 0** and falls away on both sides.
4. **The linearising trick — what "the factor" is.** B is not linear in z, so you do not plot B against z. Define
   **x = I R² / [2 (R² + z²)^{3/2}]**, computed row by row from the Excel sheet.
   Then **B = μ₀ x**, a straight line **through the origin**. That x is exactly the **magnetic field strength H** at the point, in **A/m** — so the graph is literally **B against H**, and the gradient is **B/H = μ₀**, the definition of permeability.
5. **Gradient and intercept**: **gradient = μ₀**, in **T/(A·m⁻¹) = T·m/A = H/m**. The **intercept must be zero**. A non-zero intercept means a **background field the Tesla meter was not zeroed against** — and note the Earth's field (≈ 50 μT) is about **eight times larger** than the loop's own 6.3 μT central field, so zeroing is not optional here. (If you compute the factor **without** the current, x′ = R²/2(R² + z²)^{3/2} in m⁻¹, the gradient is **μ₀I** and you must divide by I. Say on the script which x you used.)
6. **Apparatus** — a **circular loop of known radius R**, a **DC power supply**, an **ammeter** to read I, a **movable magnetic probe** (a Hall probe), and a **Tesla meter** to read B. The probe must sit **on the axis** with its sensitive direction **along the axis**.
7. **Procedure in one line**: fix R and I, put the probe at **z = 0**, record B, then step the probe out in **2 cm intervals up to 20 readings in all (z = 0 … 38 cm)**, recording B each time; repeat with the other coils (different R) to check that the same μ₀ comes out of every coil.
8. **Permeability generally**: for a **medium**, **μ = B/H**, and **μ = μ_r μ₀**, where **μ_r = μ/μ₀** is the dimensionless **relative permeability**. Air and vacuum have μ_r ≈ 1 (this is why the experiment done in air gives μ₀); soft iron has μ_r in the thousands. Permeability is **not** "how easily a material magnetises" — that is susceptibility, χ = μ_r − 1.

## Apparatus

**A circular loop of radius R · DC power supply · ammeter · movable magnetic probe · Tesla meter.** The Praxilabs virtual bench supplies the **Record** button, a coil selector (Coil 1: R = 0.10 m, Coil 2, Coil 3 …) and downloads an **Excel sheet** at the end.

Each item earns its place: the **ammeter** fixes I, which appears linearly in the formula; the **radius R** appears squared and then inside a 3/2 power, so it is the measurement the answer is most sensitive to; the **magnetic probe** must be *movable along the axis* because the whole experiment is a scan of z; the **Tesla meter** reads B directly in **nanotesla (nT)** in this deck — the units on that display are the single commonest source of a factor-of-10⁹ blunder.

## Theory, stated precisely

**Symbols and units**

| Symbol | Meaning | Unit |
|---|---|---|
| B(z) | magnetic flux density on the axis, distance z from the centre | T (deck reads nT; 1 nT = 10⁻⁹ T) |
| I | current in the loop | A |
| R | radius of the loop | m |
| z | axial distance from the **centre of the loop** | m (deck's table is in cm) |
| N | number of turns (1 in this deck) | — |
| μ₀ | permeability of free space | 4π × 10⁻⁷ H/m = 4π × 10⁻⁷ T·m/A |
| H | magnetic field strength, H = B/μ₀ | A/m |
| μ_r | relative permeability, μ/μ₀ | dimensionless |

**Where the experiment starts historically.** **Hans Christian Ørsted (1777–1851)** found in **1820** that a compass placed near a current-carrying conductor **deflects**, and that the deflection grows with the current. That single observation joined electricity to magnetism: a current *is* a source of magnetic field. Everything in this practical — that a loop of wire has a field at all, that the field is proportional to I, that a constant μ₀ links the two — descends from it.

**Deriving B(z) by Biot–Savart.** Each element **dl** of the loop contributes
**dB = (μ₀/4π) · I dl sin θ / r²**.
On the axis, **dl is perpendicular to r** everywhere, so **sin θ = 1**, and **r² = R² + z²**. By symmetry the components perpendicular to the axis cancel in pairs around the loop, leaving only the **axial** component, which is dB multiplied by **R/r**:
**dB_z = (μ₀/4π) · I dl R / (R² + z²)^{3/2}**.
Integrating dl once round the loop gives **∮dl = 2πR**, so

**B(z) = (μ₀/4π) · I (2πR) R / (R² + z²)^{3/2} = μ₀ I R² / [2 (R² + z²)^{3/2}]**.

**Three checks on the formula.** (i) At **z = 0** it gives **μ₀I/2R** — maximum, as the deck says. (ii) For **z ≫ R** it becomes **μ₀IR²/2z³ = (μ₀/4π)·2m_loop/z³** with **m_loop = IπR²** the loop's magnetic dipole moment — the same inverse-cube axial dipole field met in Week 10 for the bar magnet. (iii) The field falls to **half** its central value at **z = 0.766 R** (set (R² + z²)^{3/2} = 2R³), which for R = 10 cm is z ≈ 7.7 cm — and the deck's table indeed passes through half of 6285 nT between z = 6 and z = 8 cm.

**Why μ₀ can be extracted at all.** B = μ₀ x with x = IR²/2(R² + z²)^{3/2} contains only quantities you measure or set. Every point of the scan is an independent estimate of μ₀; the graph is the fair way of combining them and the straight line through the origin is the evidence that the inverse-3/2-power law is right.

## Procedure (in order)

1. **Select Coil 1, R = 0.10 m** (the default).
2. **Set the current to 1 A** on the digital power supply and check it on the ammeter. (Other currents may be explored; keep I fixed for one scan.)
3. **Move the magnetic probe to the centre of the coil, z = 0**, on the axis.
4. **Click Record** to store the reading shown on the Tesla meter.
5. **Increase z in steps of 2 cm** — 2, 4, 6, 8 … — recording B at each position, **20 readings in all** (so the scan ends at **z = 38 cm**).
6. **Repeat for the other coils** (Coil 2, Coil 3 …) with their different radii.
7. On completion an **Excel sheet of z and B downloads**.
8. **Analysis**: convert z to metres and B to tesla; compute the factor **x = IR²/2(R² + z²)^{3/2}** for every row; **plot B (y) against x (x)**; take the **slope**; the slope **is μ₀**. Compare with 4π × 10⁻⁷ H/m and quote a percentage error.

## Worked example — the deck's own data (R = 0.10 m, I = 1 A)

| z (cm) | z (m) | (R² + z²)^{3/2} (m³) | x = IR²/2(R²+z²)^{3/2} (A/m) | B (nT) | B (T) | B/x (H/m) |
|---|---|---|---|---|---|---|
| 0 | 0.00 | 1.0000 × 10⁻³ | 5.0000 | 6285.00 | 6.28500 × 10⁻⁶ | 1.2570 × 10⁻⁶ |
| 2 | 0.02 | 1.0606 × 10⁻³ | 4.7143 | 5928.99 | 5.92899 × 10⁻⁶ | 1.2577 × 10⁻⁶ |
| 4 | 0.04 | 1.2494 × 10⁻³ | 4.0021 | 5039.95 | 5.03995 × 10⁻⁶ | 1.2593 × 10⁻⁶ |
| 6 | 0.06 | 1.5860 × 10⁻³ | 3.1525 | 3950.37 | 3.95037 × 10⁻⁶ | 1.2531 × 10⁻⁶ |
| 8 | 0.08 | 2.1002 × 10⁻³ | 2.3807 | 3000.93 | 3.00093 × 10⁻⁶ | 1.2605 × 10⁻⁶ |
| 10 | 0.10 | 2.8284 × 10⁻³ | 1.7678 | 2220.22 | 2.22022 × 10⁻⁶ | 1.2559 × 10⁻⁶ |
| 26 | 0.26 | 2.1617 × 10⁻² | 0.2313 | 289.73 | 2.89730 × 10⁻⁷ | 1.2526 × 10⁻⁶ |
| 28 | 0.28 | 2.6270 × 10⁻² | 0.1902 | 238.54 | 2.38540 × 10⁻⁷ | 1.2539 × 10⁻⁶ |
| 30 | 0.30 | 3.1623 × 10⁻² | 0.1581 | 199.35 | 1.99350 × 10⁻⁷ | 1.2608 × 10⁻⁶ |
| 32 | 0.32 | 3.7683 × 10⁻² | 0.1327 | 166.43 | 1.66430 × 10⁻⁷ | 1.2543 × 10⁻⁶ |
| 34 | 0.34 | 4.4514 × 10⁻² | 0.1123 | 140.82 | 1.40820 × 10⁻⁷ | 1.2537 × 10⁻⁶ |
| 36 | 0.36 | 5.2159 × 10⁻² | 0.0959 | 120.59 | 1.20590 × 10⁻⁷ | 1.2580 × 10⁻⁶ |
| 38 | 0.38 | 6.0670 × 10⁻² | 0.0824 | 103.35 | 1.03350 × 10⁻⁷ | 1.2540 × 10⁻⁶ |

**Sample row, z = 8 cm = 0.08 m**: R² + z² = 0.0100 + 0.0064 = **0.0164 m²**; (0.0164)^{3/2} = 0.0164 × √0.0164 = 0.0164 × 0.12806 = **2.1002 × 10⁻³ m³**; so
**x = (1 × 0.0100)/(2 × 2.1002 × 10⁻³) = 0.0100/4.2004 × 10⁻³ = 2.381 A/m**, and B = 3000.93 nT = **3.00093 × 10⁻⁶ T**.

**Gradient**, taking the first and last points (the widest baseline available):
**slope = (6.28500 − 0.10335) × 10⁻⁶ / (5.0000 − 0.0824) = 6.18165 × 10⁻⁶ / 4.9176 = 1.2570 × 10⁻⁶ H/m.**

**Hence μ₀ = 1.257 × 10⁻⁶ H/m ≈ 1.26 × 10⁻⁶ T·m/A.**

**Percentage error**: accepted μ₀ = 4π × 10⁻⁷ = 1.25664 × 10⁻⁶ H/m, so
**(1.2570 − 1.25664)/1.25664 × 100 = 0.03 %.**

(A least-squares fit through all thirteen extracted rows gives **slope 1.2575 × 10⁻⁶ H/m, intercept −4.4 × 10⁻¹⁰ T** — i.e. **0.07 % high and through the origin to within a thousandth of the smallest reading**. The column of individual ratios B/x runs from 1.2526 to 1.2608 × 10⁻⁶, a spread of only **0.7 %**, and it does **not** drift systematically with z — that constancy is the real verification that the (R² + z²)^{3/2} law is correct.)

**Sanity check at the far end**: the point-dipole approximation μ₀IR²/2z³ at z = 38 cm predicts 114.5 nT against the exact 103.6 nT — **11 % too high**. The full formula, not the far-field one, is what this experiment uses.

## Precautions

- **Zero the Tesla meter with the current switched off, in situ.** The Earth's field (≈ 50 μT) is roughly **eight times** the loop's central field (6.3 μT); an unzeroed probe puts a large constant offset on every reading and a large intercept on the graph. This is the single most important precaution in the experiment.
- **Keep the probe exactly on the axis**, not merely near it; off-axis the simple formula does not apply at all.
- **Align the probe's sensitive axis parallel to the coil axis.** A Hall probe reads the component along its own normal, so a tilt of angle φ scales every reading by cos φ — a systematic under-reading and a systematically low μ₀.
- **Measure z from the plane (centre) of the loop**, not from the coil former, the clamp or the edge of the winding.
- **Measure R to the mean radius of the winding**, and take a mean of several diameters. R enters as R²/(R² + z²)^{3/2}; a 1 % error in R is roughly a 1 % error in μ₀ at z = 0 and worse further out.
- **Hold the current steady and read it on the ammeter for every point** — the coil warms, its resistance rises and I drifts downward during a long scan.
- **Remove iron, magnets, phones and other current-carrying leads from the bench**, and keep the leads to the coil twisted together so their own fields cancel.
- **Let the reading settle** before clicking Record, and take readings on both sides (+z and −z) if the apparatus allows, to confirm the field is symmetric about z = 0 and that z = 0 was correctly located.

## Sources of error

| Error | Effect |
|---|---|
| **Tesla meter not zeroed / Earth's field included** | a constant offset on every B — the line acquires a **non-zero intercept** and the gradient is only mildly affected, but μ₀ read off as B/x at a single point is badly wrong |
| **Probe off the axis, or tilted** | readings low by cos φ (tilt) or by an unmodelled radial term (off-axis); **systematically low μ₀** |
| **z measured from the wrong origin** | the whole scan is shifted; the x-values are wrong, the line curves slightly and the gradient is biased |
| **R measured to the wrong radius** (inner vs outer vs mean of the winding) | appears as R² over (R² + z²)^{3/2} — a **direct systematic error in μ₀**, usually the largest single term |
| **Current drift as the coil heats**, or I read once and assumed constant | x is computed with a current the coil no longer carries; gradient biased |
| **Treating the coil as one turn when it has N turns**, or vice versa | μ₀ out by exactly the factor N |
| **Leaving B in nT or z in cm** | a factor of **10⁹** or of 10²–10³; the answer is absurd rather than merely inaccurate |
| **Finite thickness of the winding** — a real coil is not a mathematical circle | small systematic deviation, worst near z = 0 where the field varies fastest across the winding |
| **Resolution of the Tesla meter** at large z (readings of ~100 nT) | random scatter that dominates the far end of the graph; those points deserve least weight |
| **The medium is air, not vacuum** | μ_r(air) = 1.0000004, so this contributes about **0.00004 %** — utterly negligible next to everything above, and the reason the experiment can claim to measure μ₀ at all |

## Commonly confused

- **μ₀ (permeability of free space) vs μ (permeability of a medium) vs μ_r (relative permeability)** — **μ = μ_r μ₀**. μ₀ = 4π × 10⁻⁷ H/m is a fixed constant of the vacuum; μ is a property of a material with the same units; **μ_r is a pure number** with no units. Quoting "μ_r = 1.26 × 10⁻⁶" is a units error, not an arithmetic one.
- **Permeability vs susceptibility** — the deck's line "permeability is a measure of how easily a material can be magnetised" describes **susceptibility**, **χ = μ_r − 1**. Permeability is defined by **μ = B/H**; free space has permeability but cannot be magnetised at all.
- **Permeability μ₀ vs permittivity ε₀** — magnetic vs electric, **4π × 10⁻⁷ H/m** vs **8.85 × 10⁻¹² F/m**. They are linked by **c = 1/√(μ₀ε₀)**. Writing ε₀ where μ₀ is wanted is an instant zero.
- **B (flux density, tesla) vs H (field strength, A/m) vs Φ (flux, weber)** — **B = μ₀H** in free space and **Φ = B·A**. The **plotted factor x in this experiment IS H**, which is why the gradient B/H is μ₀ and why its unit works out as T·m/A.
- **H/m vs T·m/A** — the same unit written two ways (1 H = 1 Wb/A = 1 T·m²/A). The deck's THEORY slide says T·m/A and its summary sheet says H/m; both are right, and either is accepted.
- **nanotesla vs tesla** — the deck's table is in **nT**. 6285 nT = 6.285 × 10⁻⁶ T. Forgetting this gives a "μ₀" of about 1.26 × 10³ instead of 1.26 × 10⁻⁶.
- **B at the centre, μ₀I/2R, vs B on the axis, μ₀IR²/2(R² + z²)^{3/2}** — the first is only the z = 0 case of the second. Using μ₀I/2R at every z gives a flat line and no gradient at all.
- **(R² + z²)^{3/2} vs (R + z)³ vs R³ + z³** — only the first is right. It means "square R, square z, add, take the square root, cube it" (or: multiply the sum by its own square root).
- **B against z vs B against the factor** — B against z is a **bell-shaped curve** peaking at z = 0, and no straight-edge laid on it means anything. Only **B against IR²/2(R² + z²)^{3/2}** is the straight line through the origin whose gradient is the answer.
- **Whether the current is inside the plotted factor** — if x includes I, gradient = μ₀; if x is only R²/2(R² + z²)^{3/2}, gradient = **μ₀I** and you must divide by I. Both are defensible; only saying which one you did is not optional.
- **One turn vs N turns** — every formula on this deck is for **one turn**. For N turns B = μ₀NIR²/2(R² + z²)^{3/2} and B₀ = μ₀NI/2R.
- **This loop's field vs Week 10's bar magnet field** — a loop gives μ₀IR²/2(R² + z²)^{3/2}; a bar magnet end-on gives (μ₀/4π)·2Md/(d² − L²)². Both reduce to the same **inverse-cube dipole** form far away, but they are different experiments with different unknowns.
- **Ørsted's discovery** — the compass needle **deflects**, and the *deflection* grows with the *current*. He did not discover μ₀, did not state an inverse-square law, and did not build the loop formula; Biot, Savart and Ampère supplied those.
- **The intercept is not the Earth's field made useful** — it is contamination. Zero the meter and the intercept should vanish; if it does not, the reading, not the theory, is at fault.

*Source note: every formula on this deck is a slide image and does not survive text extraction — the THEORY slide gives only the symbol list ("B(z)", "μ₀ … 4π × 10⁻⁷ T.m/A", "R", "I") beneath a missing equation, and the Data Analysis slide says "calculate the factor," and then shows the factor as a picture. **B(z) = μ₀IR²/2(R² + z²)^{3/2}, the factor x = IR²/2(R² + z²)^{3/2}, the Biot–Savart derivation and the identification of the gradient with μ₀ are therefore reconstructed here and then checked against the deck's own data table — they fit it to 0.07 %** (the thirteen extracted rows give B/x constant at 1.2526–1.2608 × 10⁻⁶ H/m with no drift, and a least-squares gradient of 1.2575 × 10⁻⁶ H/m against the true 1.25664 × 10⁻⁶), so the reconstruction is certainly what the deck intends. Two smaller points. First, the deck's data table is **truncated in extraction**: the procedure calls for 20 readings at 2 cm intervals (z = 0 to 38 cm) and the table's last row is z = 38, but the rows for **z = 12, 14, 16, 18, 20, 22 and 24 cm are missing** from the extracted text — the seven gap rows are not in the source, so the worked example above uses the thirteen that survive. Second, the deck's **objective 3** promises an investigation of "the relationship between the intensity of the current passing through the circular loop and the resulting magnetic field strength", but the stated procedure fixes I at 1 A and varies only z; delivering that objective requires the parenthesised aside "(Other current values can be explored)" to be taken up — repeat the z = 0 reading at several currents and confirm B₀ ∝ I. The deck's remark that "permeability is a measure of how easily a material can be magnetized" is loose (that is susceptibility) and is corrected above. The deck lists **no precautions and no sources of error**, gives **no worked analysis**, and does not state that the Tesla meter must be zeroed against the Earth's field; those sections, the μ = μ_r μ₀ treatment of the permeability of a medium, the half-value distance z = 0.766R and the far-field limit are the standard 100-level treatment of its stated objectives. The extractor drops "fi"/"ff"/"tt" ligatures ("ﬂux", "ﬁeld", "aect" = affect, "dierent" = different, "buon" = button, "signiﬁcant"), and the summary sheet's figure caption "REPUTATION BETWEEN LIKE POLES" is a typo for REPULSION.*
