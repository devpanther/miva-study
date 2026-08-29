# PHY_108 — Week 10 Summary

*General Physics Practical II · Week 10 (9 – 15 Nov 2026) · Topic: Experiment to determine the magnetic moment and pole strength of a bar magnet — the tangent galvanometer, the tangent law, and the tan θ against d/(d² − L²)² straight line*

## The 8 most examinable things this week

1. **Aim**: to determine the **magnetic dipole moment M of a bar magnet and its pole strength m**. Two answers are wanted, not one, and the second follows from the first by dividing by the magnet's length.
2. **The tangent law** is the whole principle of the instrument. A compass needle free to rotate sits in **two perpendicular horizontal fields**: the Earth's horizontal component **B_H (the deck calls it H₀)** and the field **B** of the bar magnet. It settles along the resultant, so **B = B_H tan θ**, where θ is measured from the direction the needle pointed *before* the magnet was brought up. The deck writes this as **H = H₀ tan θ**. In the galvanometer's original use as a current meter the same law gives **tan θ ∝ I**.
3. **The magnet must be placed end-on (the "Tan A" or Gauss A position)**: the metre stick lies **east–west**, along the *axis* of the magnet, so that the magnet's field at the needle is at **right angles** to B_H. That perpendicularity is what makes the tangent law apply; the deck's whole geometry ("a point a distance d to the right of the south pole", field lines "directed from right to left" there) is the end-on position.
4. **The end-on field of a bar magnet** of pole strength m, half-length L (so its full length is 2L) at a point a distance d from its **centre**, obtained by adding the two pole fields (equivalently, the deck's Biot–Savart integration along the magnet):
   **B = (μ₀/4π) · 2Md / (d² − L²)²** , with **M = 2mL**.
   When **d ≫ L** this collapses to the point-dipole result **B ≈ (μ₀/4π) · 2M/d³**, but the experiment does *not* use that approximation — it keeps the (d² − L²)² denominator, which is why L must be measured.
5. **Combining 2 and 4 gives the working equation**:
   **tan θ = (μ₀/4π) · (2M/B_H) · d/(d² − L²)²**
   So **tan θ_AV plotted against d/(d² − L²)² is a STRAIGHT LINE THROUGH THE ORIGIN**. That is the graph, and its gradient carries the answer.
6. **Gradient and intercept**: gradient **s = (μ₀/4π)(2M/B_H) = μ₀M/(2πB_H)**, so
   **M = (4π/μ₀) · (B_H · s / 2) = 2πB_H s/μ₀ = s · B_H × 5 × 10⁶** (SI).
   The **intercept must be zero**; a non-zero intercept means the needle was not zeroed, the stick was not east–west, or stray iron is adding a fixed field.
7. **Eight angles per distance, not one.** At each d the deck records **θ₁, θ₂** (the two ends of the needle), then **θ₃, θ₄** after clicking **REVERSE POLARITY**, and then **θ₅ … θ₈** with the magnet moved to the **other side** of the galvanometer. **θ_AV = (θ₁ + θ₂ + … + θ₈)/8**. Reading both ends kills **eccentricity** of the pivot, reversing the polarity kills the **zero error and any residual field**, and swapping sides kills the error from the magnet not being exactly centred on the needle.
8. **Pole strength last**: **m = M/(2L)**, unit **A·m** (or N/T). The magnetic moment itself is **M in A·m²** — the summary sheet is explicit that the SI unit of magnetic moment is the **ampere-metre squared**.

## Apparatus

**Metre stick · tangent galvanometer (coil + pivoted compass needle on a circular degree scale) · bar magnet.** The virtual Praxilabs bench supplies the Record and REVERSE POLARITY buttons and downloads the data as an Excel sheet.

The **metre stick is not just a ruler**: it sets the *line* along which the magnet slides, and that line must be the magnet's own axis and must run east–west. The **needle** is the actual measuring instrument; the coil is unused in this experiment (no current flows) and serves only as the mounting and the degree scale.

## Theory, stated precisely

**Symbols and units**

| Symbol | Meaning | Unit |
|---|---|---|
| M | magnetic dipole moment of the bar magnet | A·m² |
| m | pole strength | A·m |
| 2L | length of the bar magnet (L = half-length) | m |
| d | distance from the **centre of the magnet** to the **needle pivot** | m |
| θ | deflection of the needle from its undeflected (N–S) rest position | degrees |
| B | field of the bar magnet at the needle, along the magnet's axis | T |
| B_H (H₀) | horizontal component of the Earth's magnetic field | T (≈ 40 × 10⁻⁶ T = 4 × 10⁻⁵ T) |
| μ₀ | permeability of free space | 4π × 10⁻⁷ T·m/A |

**Why the needle obeys tan θ.** The needle is a small dipole with two torques on it: B_H pulling it north, and B (perpendicular to B_H) pulling it sideways. At equilibrium the two torques balance, mB_H sin θ = mB cos θ, hence **B = B_H tan θ**. Nothing about the needle's own strength survives — which is why the method needs no calibration of the needle.

**Why the field is 2Md/(d² − L²)².** The north pole sits at distance (d + L) from the point and the south pole at (d − L). Adding the two inverse-square pole fields along the axis,

**B = (μ₀/4π) m [1/(d − L)² − 1/(d + L)²] = (μ₀/4π) m · 4Ld/(d² − L²)² = (μ₀/4π) · 2Md/(d² − L²)²**

using **M = 2mL** — the deck's "magnetic dipole moment = pole strength × magnet's length". The deck reaches the same place by integrating Biot–Savart along the magnet, taking sin θ = 1 because dl and r are perpendicular (θ = 90°) at the axial point, and keeping only the horizontal component of dH because the vertical components cancel by symmetry.

**Setting B = B_H tan θ** gives the working equation of item 5. Every quantity in it except M is either measured (d, L, θ) or a known constant (μ₀, B_H).

## Procedure (in order)

1. Lay the metre stick **east–west** through the tangent galvanometer, with the galvanometer at the centre and the needle reading **zero** before the magnet is introduced.
2. Place the bar magnet at the **left end of the ruler**, its axis along the ruler, **d = 50 cm from the centre of the tangent galvanometer**.
3. Click **Record** to log the deflection angles **θ₁ and θ₂** (the two ends of the needle) for that distance.
4. Click **REVERSE POLARITY**, then click **Record** again to log **θ₃ and θ₄**.
5. Click **REVERSE POLARITY** once more so the magnet returns to its original orientation.
6. **Reduce d in 5 cm steps — 45, 40, 35, 30 cm — and repeat**, recording four angles at each distance.
7. When all four angles have been recorded at **five different distances on the left**, the magnet is **moved automatically to the right side**.
8. **Repeat everything on the right side** for the same five distances, giving **θ₅, θ₆, θ₇, θ₈**.
9. The experiment ends and an **Excel sheet downloads** with all the recorded data.
10. Compute **θ_AV = (θ₁ + … + θ₈)/8**, then **tan θ_AV** and **d/(d² − L²)²** for each row.
11. **Plot tan θ_AV against d/(d² − L²)² and find the slope s.** Then **M = 2πB_H s/μ₀** with μ₀ = 4π × 10⁻⁷ T·m/A and B_H = 40 × 10⁻⁶ T, and finally **m = M/(2L)**.

## Worked example — the deck's own data

The deck's downloaded sheet, with the magnet taken as a standard **10 cm bar (2L = 0.10 m, L = 0.05 m)**:

| d (cm) | θ₁ θ₂ θ₃ θ₄ θ₅ θ₆ θ₇ θ₈ | θ_AV (°) | tan θ_AV | d/(d² − L²)² (m⁻³) |
|---|---|---|---|---|
| 50 | 12 12 13 13 12 12 11 11 | 12.00 | 0.2126 | 8.162 |
| 45 | 16 16 15 15 15 15 15 15 | 15.25 | 0.2726 | 11.250 |
| 40 | 21 21 22 22 21 21 21 21 | 21.25 | 0.3889 | 16.125 |
| 35 | 32 32 30 30 32 32 31 31 | 31.25 | 0.6068 | 24.306 |
| 30 | 44 44 43 43 45 45 44 44 | 44.00 | 0.9657 | 39.184 |

Sample row, **d = 35 cm = 0.35 m**: θ_AV = (32+32+30+30+32+32+31+31)/8 = 250/8 = **31.25°**, tan θ_AV = **0.6068**. d² − L² = 0.1225 − 0.0025 = 0.1200 m², (d² − L²)² = 0.01440 m⁴, so d/(d² − L²)² = 0.35/0.01440 = **24.31 m⁻³**.

**Gradient**, from the first and last points:
**s = (0.9657 − 0.2126)/(39.184 − 8.162) = 0.7531/31.02 = 0.02428 m³.**

(The five individual ratios tan θ_AV ÷ x are 0.02604, 0.02423, 0.02412, 0.02497, 0.02465 — constant to about 3%, which *is* the verification that the line passes through the origin. The one stray value is at d = 50 cm, where θ is only 12° and a ±0.5° reading error is worth 4%.)

**Magnetic moment**: 2π/μ₀ = 2π/(4π × 10⁻⁷) = 5 × 10⁶ A/(T·m), so

**M = 5 × 10⁶ × s × B_H = 5 × 10⁶ × 0.02428 × 40 × 10⁻⁶ = 4.86 A·m².**

**Pole strength**: **m = M/2L = 4.86/0.10 = 48.6 A·m.**

(Using the mean of the five ratios, s = 0.02480 m³, gives M = 4.96 A·m² and m = 49.6 A·m — quote to 2 s.f. as **M ≈ 4.9 A·m², m ≈ 49 A·m**.)

## Precautions

- **Set the metre stick exactly east–west** and check the needle reads **zero** before the magnet is brought up. This is what makes the magnet's field perpendicular to B_H; without it the tangent law does not hold and the graph gains an intercept.
- **Keep the magnet horizontal, at the same level as the needle, with its axis passing through the pivot** — otherwise the field at the needle is not the pure axial field.
- **Measure d from the centre of the magnet to the centre of the needle**, not from the nearest pole. The formula's d is a centre-to-centre distance.
- **Measure the magnet's length 2L carefully** with the metre stick; L enters the abscissa squared and then squared again.
- **Remove all other magnets, iron objects, phones, keys and current-carrying wires** from the bench, and use a non-magnetic ruler.
- **Take all eight readings** at every distance — both ends of the needle, both polarities, both sides. Skipping any of them reinstates the error it was there to cancel.
- **Work in the 30°–60° band where you can.** tan θ changes fastest and most reliably near 45°; below about 15° and above about 75° a half-degree error is a large fractional error in tan θ.
- **Let the needle come fully to rest** before reading, and read it with the **eye vertically above the scale** to avoid parallax.

## Sources of error

| Error | Effect |
|---|---|
| **d measured from a pole instead of the centre** | every d is out by L; systematic, and worst at small d where the graph is most sensitive |
| **Magnet's length taken as the geometric length** | the effective magnetic length is about **0.84 ×** the geometric length (poles lie inside the ends), so L is overstated and M comes out systematically wrong |
| **B_H taken as the nominal 40 × 10⁻⁶ T** rather than the local value | **M scales directly with B_H**, so a 10% error in B_H is a 10% error in M — this is usually the largest single uncertainty |
| **Stick not exactly east–west** | the magnet's field is no longer perpendicular to B_H; the tangent law fails and the line acquires an **intercept** |
| **Stray iron or a nearby magnet** | adds a fixed field, giving a **non-zero intercept** or a systematic tilt of the line |
| **Angles read only to the nearest degree** (all the deck's data are whole degrees) | ±0.5° quantisation — about 4% in tan θ at 12°, only 1% at 44°; this is the scatter seen in the ratio column |
| **Needle eccentric on its pivot / parallax** | random scatter; largely removed by averaging the two ends and the two sides |
| **Using the far-field form 2M/d³** instead of 2Md/(d² − L²)² | at d = 30 cm with L = 5 cm the two differ by about 6%, so M is underestimated |
| **Induced magnetism** — the Earth's field and the needle slightly re-magnetise the bar, and the bar the needle | small, but means the "pole strength" is not perfectly constant across the run |

## Commonly confused

- **M (magnetic moment, A·m²) vs m (pole strength, A·m)** — they differ by the magnet's whole length: **M = 2mL**, so **m = M/2L**. Two different questions, two different units; quoting A·m² for pole strength is an automatic loss.
- **L vs 2L** — in this deck **L is the half-length** (M = 2mL, and the denominator is (d² − L²)²). If you are handed "a 10 cm magnet", **L = 0.05 m**, not 0.10 m.
- **d from the centre, not from the pole** — the deck's theory slide says "a distance d to the right of the south pole", but the formula it lands on, 2Md/(d² − L²)², is the standard **centre-to-point** result. Use centre-to-centre.
- **B_H vs H₀ vs μ₀** — B_H ≈ **40 × 10⁻⁶ T** is a *flux density*; the corresponding *field strength* is H₀ = B_H/μ₀ ≈ **32 A/m**. The deck writes "H₀ = 40 × 10⁻⁶ A/m", which mixes the two: the **number is the tesla value**. Put 40 × 10⁻⁶ T into M = 2πB_H s/μ₀ and you get a sensible few A·m²; put 40 × 10⁻⁶ A/m into M = 2πH₀s and you get 10⁻⁶ A·m², which is absurd.
- **tan θ ∝ I (galvanometer as ammeter) vs tan θ ∝ M (this experiment)** — same tangent law, different unknown. Here **no current flows at all**; the coil is inert and the deflecting field comes from the bar magnet.
- **End-on (Tan A, stick east–west) vs broadside-on (Tan B, stick north–south)** — end-on gives B = (μ₀/4π)2Md/(d² − L²)²; broadside-on gives (μ₀/4π)M/(d² + L²)^{3/2}, with a **plus** sign and a **3/2** power. Using the wrong one is the classic full-marks-to-zero slip.
- **The near-field formula vs the point-dipole formula** — 2Md/(d² − L²)² is exact for two poles; 2M/d³ is only its d ≫ L limit. This experiment deliberately works at d as small as 6L, so the exact form is required.
- **θ_AV is the mean of eight angles, then tan is taken** — take **tan(mean θ)**, not the mean of the eight tangents. The deck's own instruction computes θ_AV first.
- **Why eight readings** — two ends of the needle (eccentricity), reversed polarity (zero error and residual field), and both sides of the galvanometer (off-centre magnet). Each pair removes a *different* error; they are not repeats for the sake of averaging.
- **The graph is tan θ_AV against d/(d² − L²)², not against d, and not against 1/d³** — plotting tan θ against d gives a curve that proves nothing, and the gradient of any of these against the wrong abscissa has no physical meaning.
- **Gradient s has units m³, and M = s·B_H × 5 × 10⁶** — check dimensions before quoting: tan θ is dimensionless, x is m⁻³, so s is m³, and s·B_H/μ₀ has units T·m³/(T·m·A⁻¹) = A·m², correct for M.
- **Ferromagnetic vs paramagnetic vs diamagnetic** (from the week's summary sheet) — **ferromagnetic** (iron, nickel, cobalt) magnetise easily and **retain** the magnetisation when the field is removed, which is what makes a bar magnet and what makes electromagnets and data storage possible; paramagnetic materials are weakly attracted and lose it, diamagnetic ones are weakly repelled.

*Source note: the deck's Data Analysis slide instructs "Plot the graph of tan θ_AV against [d²/(d² − L²)²]". That abscissa cannot be right — checked against the deck's own five rows of data, tan θ_AV ÷ [d/(d² − L²)²] is constant to 3% (0.0241 to 0.0260) whereas tan θ_AV ÷ [d²/(d² − L²)²] drifts by 58% (0.0521 to 0.0822), so no straight line through the origin exists on the deck's stated axes. The standard end-on result, B = (μ₀/4π)·2Md/(d² − L²)², has **d** in the numerator, and that is what has been used above; if the marking scheme insists on the deck's d², say so and show the working, but plot d. The deck also states "H₀ = 40 × 10⁻⁶ A/m" where the value is the Earth's horizontal flux density in tesla. Every formula on the THEORY slides (Biot–Savart, the integration, the final expression for H, and the two boxed results for M and for the pole strength) is a slide image and does not survive extraction, so the symbol definitions, the algebra and the final rearrangements above are the standard treatment of the deck's stated objectives. The deck gives **no magnet length**; 2L = 10 cm is assumed for the worked example, and it is the value that makes the deck's data self-consistent. The deck lists **no precautions and no sources of error** and does not state the east–west orientation of the metre stick; those sections are the standard 100-level treatment. The extracted text also drops "fi"/"ff"/"tt" ligatures ("deﬂection", "ﬁeld", "dierent" = different, "aects" = affects, "buon" = button).*
