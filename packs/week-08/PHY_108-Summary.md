# PHY_108 — Week 8 Summary

*General Physics Practical II · Week 8 (26 Oct – 1 Nov 2026) · Experiment to verify Boyle's law — the J-tube, P = P_a + ρgh, and the 1/V against P straight line*

## The 8 most examinable things this week

1. **Aim**: to verify Boyle's law. **Statement**: *at constant temperature, the pressure of a definite (fixed) quantity of an ideal gas is inversely proportional to its volume*. Both conditions must be quoted — **constant temperature** and **fixed mass of gas**. A statement without them earns nothing.
2. **Mathematically**: **PV = constant**, equivalently **P ∝ 1/V**, equivalently **P₁V₁ = P₂V₂**. For n moles the constant is nRT, which is why it is fixed only when T and n are fixed.
3. **Pressure** is the force per unit area, **P = F/A**. SI unit the **pascal**, **1 Pa = 1 N/m²**. At sea level atmospheric pressure supports 76 cm of mercury: **1 atm = 76 cmHg = 760 mmHg = 1.013 × 10⁵ Pa**.
4. **The J-tube**: a tube with **one closed end and one open end**. Mercury poured in at the open end **traps a fixed column of air in the closed limb**. With the **mercury levels equal in both limbs (h = 0), the trapped air is at atmospheric pressure**, P₀ = P_a.
5. **Raising the open limb by h** adds the weight of the excess mercury column: **Δp = ρgh**, so **P_f = P_a + ρgh** with **ρ = 13 600 kg/m³** (mercury) and **g = 9.8 m/s²**. h is the **vertical difference between the two mercury levels**, in metres.
6. **Volume from a length**: the bore is uniform, so **V_f = ℓA** where ℓ is the length of the trapped air column. In this experiment **A = 1 cm²**, so V_f is *numerically* equal to ℓ (ℓ in cm ⇒ V in cm³).
7. **The two graphs, and only one of them verifies the law**: **P against V is a rectangular hyperbola** (an *isotherm*) — it falls steeply, approaches both axes and meets neither, and no eye can tell a hyperbola from any other decreasing curve. **P against 1/V (or 1/V against P) is a STRAIGHT LINE THROUGH THE ORIGIN** — that is the verification, because linearity is testable and the origin is a prediction.
8. **Gradient and intercept**: on **P (y) against 1/V (x)** the **gradient = PV = the constant** (= 2.026 J for the deck's sample gas) and the **intercept = 0**. On the deck's own axes, **1/V (y) against P (x)**, the **gradient = 1/(PV) = 0.494 J⁻¹** and again the **intercept = 0**. A **non-zero intercept means a systematic error**, most often atmospheric pressure left out of P.

## Apparatus

**J-tube · thermometer · pressure sensor · gas sample (the trapped air) · Praxilabs virtual laboratory — Boyle's Law.**

The **thermometer is not decoration**: it is there to confirm the *constant-temperature* condition, without which the experiment measures nothing. The **pressure sensor** reads the pressure of the trapped gas directly, as a check on the calculated P_a + ρgh.

## Theory, stated precisely

Boyle's law (published by **Robert Boyle in 1662**, discovered independently by **Edme Mariotte in 1679**, hence the **Boyle–Mariotte law**) is one of the empirical gas laws — with **Charles's, Avogadro's and Gay-Lussac's** laws — that combine into the **ideal gas law**, the foundation of the kinetic theory of gases.

*Why it is true, mechanically*: at constant temperature the molecules keep the same mean speed, so each wall collision delivers the same mean momentum. Halving the volume **doubles the number density**, so the walls are struck **twice as often** — the pressure doubles. Pressure is a collision *rate* effect, not a molecular-speed effect; speed is what changes when T changes.

**The deck's worked set-up.** Trapped air V₀ = 20 ml = 20 × 10⁻⁶ m³ at P₀ = P_a = 1.013 × 10⁵ Pa, so

**P₀V₀ = 1.013 × 10⁵ × 20 × 10⁻⁶ = 2.026 J**  (Pa × m³ = J; 1 ml = 1 cm³ = 1 × 10⁻⁶ m³)

Every later pair must reproduce that same product: **P_f V_f = P₀V₀ = 2.026**, i.e. **1/V_f = P_f / 2.026**.

## Procedure (in order)

1. Set the J-tube with the **mercury at the same level in both limbs, h = 0**. The trapped air is then at **atmospheric pressure**; record V₀ and the temperature.
2. **Raise the open (right) limb** by dragging it upward through **h = 50 mm = 5 cm = 0.05 m**. The pressure on the trapped air increases.
3. **Observe that the trapped air column has shortened** — the volume has decreased.
4. Click **Record** to log this value of the volume V_f.
5. **Repeat in 50 mm steps to h = 100, 150, 200 and 250 mm**, recording V_f at each height.
6. On finishing, an **Excel sheet downloads** with the recorded data.
7. **Compute P_f = P_a + ρgh** for each height and **1/V_f** for each recorded volume.
8. **Plot 1/V_f against P_f** (or P_f against 1/V_f). A **straight line through the origin verifies Boyle's law**; check also that the **product P_f V_f is constant** down the table.

## Worked example — the six heights

ρg = 13 600 × 9.8 = **133 280 Pa per metre of mercury**.

| h (mm) | ρgh (Pa) | P_f = P_a + ρgh (Pa) | V_f = 2.026/P_f (cm³) | 1/V_f (×10⁴ m⁻³) | P_f V_f (J) |
|---|---|---|---|---|---|
| 0 | 0 | 101 300 | 20.00 | 5.000 | 2.026 |
| 50 | 6 664 | 107 964 | 18.77 | 5.329 | 2.026 |
| 100 | 13 328 | 114 628 | 17.67 | 5.658 | 2.026 |
| 150 | 19 992 | 121 292 | 16.70 | 5.987 | 2.026 |
| 200 | 26 656 | 127 956 | 15.83 | 6.316 | 2.026 |
| 250 | 33 320 | 134 620 | 15.05 | 6.645 | 2.026 |

Sample: h = 0.15 m ⇒ ρgh = 13 600 × 9.8 × 0.15 = **19 992 Pa**; P_f = 101 300 + 19 992 = **121 292 Pa**; V_f = 2.026/121 292 = **1.670 × 10⁻⁵ m³ = 16.70 cm³**, so the air column is ℓ = 16.70 cm.

**Gradient of the 1/V against P line**, from the h = 100 mm and h = 250 mm points:
(6.645 − 5.658) × 10⁴ / (134 620 − 114 628) = 9 868 / 19 992 = **0.4936 J⁻¹**, and **1/(P₀V₀) = 1/2.026 = 0.4936 J⁻¹** — they agree, and the line extrapolates to the origin. Turning the axes round, the gradient of **P against 1/V is 1/0.4936 = 2.026 J = P₀V₀**, the constant itself. **Boyle's law is verified.**

## Precautions

- **Work slowly and let the gas settle after each compression.** Compressing a gas warms it; read the volume only when the thermometer has returned to room temperature. This is the precaution that protects the *constant-temperature* condition.
- **The closed limb must be gas-tight** and no air must bubble past the mercury — this protects the *fixed-mass* condition.
- **Keep the tube vertical** and take h as the **vertical difference of the two mercury surfaces**, not the distance the limb was dragged.
- **Avoid parallax**: read both mercury levels and the air column with the eye horizontal and perpendicular to the scale; read the **top of the mercury meniscus** (mercury is convex).
- **Start with the levels equal** so the zero of the pressure scale really is atmospheric, and take P_a from a barometer rather than assuming 1.013 × 10⁵ Pa.
- **The trapped air must be dry** and the mercury clean; do not let the air column become too short to measure.
- **Mercury is toxic** — do not spill it, and keep it in a closed apparatus (the virtual laboratory removes this hazard).

## Sources of error

| Error | Effect |
|---|---|
| **Compression heats the gas**; volume read before it cools | V too large at high P, so **PV drifts upward** and the line curves |
| **Atmospheric pressure omitted** from P (only ρgh used) | line is shifted sideways — **positive intercept on the 1/V axis**, no longer through the origin |
| **Dead space / non-uniform bore**, so V ≠ ℓA exactly | systematic volume offset — intercept and curvature |
| **Leakage past the seal** | mass of gas not fixed; PV falls steadily down the table |
| **Water vapour in the trapped air** | its saturated vapour pressure adds to P and does not obey Boyle's law |
| **Parallax and zero error** in reading levels, ℓ and the sensor | random scatter about the line |
| **ρ of mercury varies with temperature**; g taken as 9.8 | small systematic error in every ρgh |
| **Real-gas deviation** at high pressure | the ideal-gas assumption fails; PV is no longer exactly constant |

## Commonly confused

- **Boyle vs Charles vs Gay-Lussac** — Boyle: **T constant**, P ∝ 1/V. Charles: **P constant**, V ∝ T. Gay-Lussac: **V constant**, P ∝ T. Test: name the quantity held constant first; it is never the one in the proportionality.
- **P against V vs P against 1/V** — the first is a **hyperbola** and proves nothing by eye; only the second is the **straight line** that verifies the law.
- **Gradient of P vs 1/V (= PV = 2.026 J) vs gradient of 1/V vs P (= 1/PV = 0.494 J⁻¹)** — reciprocals of each other. Check which quantity is on the y-axis before quoting either.
- **P_f = P_a + ρgh, not ρgh** — the mercury column is the *increase*; the trapped gas already stood at atmospheric pressure when h = 0.
- **h is a level difference, not a tube length** — and it must be in metres for ρgh to give pascals.
- **"Fixed quantity of gas" is part of the law** — dropping it makes the statement false the moment gas leaks.
- **1 ml = 1 cm³ = 10⁻⁶ m³**, and **1 atm = 76 cmHg = 760 mmHg** — the cm/mm swap is a factor of 10.
- **Pressure rises because collisions are more frequent, not faster** — at constant T the molecular speeds are unchanged.

*Note: the deck's figures of the J-tube, the Δp = ρgh formula slide (captioned "the pressure is given by:" with the expression itself inside an image), one blank THEORY slide, the graph of 1/V against P, the entire "Data Analysis" slide and the walk-through video are all slide images, so no experimental data table survives extraction. The six-row table above is therefore computed from the deck's own quoted values (V₀ = 20 ml, P₀ = 1.013 × 10⁵ Pa, A = 1 cm², P₀V₀ = 2.026 J) at the six heights the procedure specifies. The extracted text also drops "fi"/"ff"/"tt" ligatures ("Marioe" = Mariotte, "aributed" = attributed, "deﬁne", "ﬁxed") and misprints step 5 as "h = 100 m" for 100 mm. The deck lists no precautions and no sources of error; those two sections are the standard 100-level treatment of its stated objectives.*
