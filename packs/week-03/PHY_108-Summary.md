# PHY_108 — Week 3 Summary

*General Physics Practical II · Week 3 (21–27 Sep 2026) · Experiment to Verify the Nonlinear Relationship Between Current and Voltage in a Non-Ohmic Resistor*

## The 8 most examinable things this week

1. **Aim**: to study the **nonlinear relation between current and voltage in a non-ohmic resistor** — specifically a **tungsten** filament and an **iron** conductor, whose resistance rises as they heat up.
2. **Ohm's law, stated the way this lesson states it**: a conducting device obeys Ohm's law **if the resistance between any pair of points is independent of the magnitude and polarity of the applied potential difference**. Georg Simon Ohm, German, **1827**. "Independent of magnitude *and polarity*" is the marks-bearing phrase.
3. **Joule's law**: **P = I²R** — the power dissipated as heat is proportional to the **square of the current** and to the resistance. P in watts (W), I in amperes (A), R in ohms (Ω).
4. **The mechanism of non-ohmic behaviour** (the whole point of the experiment): current → heat by I²R → temperature of the conductor rises → **resistance R rises** → the I–V curve **bends over** (flattens). Most pronounced at **high currents**.
5. **Two graphs, and only one of them is straight**: **I against V is a curve** (non-linear, flattening as V rises, because R is growing); **P against I² is a straight line** whose **gradient = R**, verifying Joule's law.
6. **Apparatus**: voltmeter, ammeter, DC power supply, a resistor of **tungsten**, a resistor of **iron**. Ammeter **in series**, voltmeter **in parallel** across the resistor.
7. **Voltage range**: record from **0.1 V up to 50 V**, several values covering the whole range, using the three push buttons above the voltage dial knob; press **Record** at each setting. Data export automatically to an Excel sheet when the run ends.
8. **Tungsten in lamps and heaters**: very high melting point (~3422 °C), high resistivity, glows white-hot without melting or oxidising away in the sealed bulb — so it can reach incandescence. Its resistance when hot is many times its cold resistance, which is exactly why a lamp is non-ohmic.

## Aim and objectives

Aim: study the nonlinear relation between current and voltage in a non-ohmic resistor.

Objectives: explain how **resistance changes with temperature**; relate the **heat dissipated** to the **current flow**; explain **why tungsten is used** in heating applications and lamps; appreciate the intricacy of electrical conduction.

## Theory in one paragraph

Apply a uniform p.d. across a sample and measure the current. If the plotted points fall on a **straight line**, V/I is constant and the material is **ohmic**. Some elements do not obey Ohm's law: the current does not increase linearly with the applied voltage. **Joule's law** explains why. Current through a conductor meets resistance, and that resistance generates **thermal energy** at a rate **P = I²R**. As the current rises, the heat generated rises (as I²), the conductor's temperature rises, and the temperature change alters **R**. Because R is no longer constant, the response to V is **nonlinear** — the I–V graph curves instead of running straight. The effect is significant at high current, where the conductor heats considerably.

## Apparatus and circuit

- **DC power supply** — variable output, 0.1 V to 50 V, set by a dial knob with three push buttons for coarse/fine steps.
- **Ammeter** — **in series** with the test resistor, so it carries the same current; very low resistance.
- **Voltmeter** — **in parallel**, connected **across the resistor only**, so it shares its p.d.; very high resistance.
- **Test resistor** — selected from a drop-down list: **tungsten** or **iron**.

Circuit loop: DC supply → ammeter → test resistor → back to supply; voltmeter bridged across the resistor.

## Procedure (in order)

1. **Inspect the circuit connection** — check ammeter in series, voltmeter across the resistor.
2. **Select the material** of the conductor from the drop list: **tungsten** or **iron**.
3. Adjust the DC power supply output to a **low voltage** (for example **0.1 V**).
4. Click **Record** to save the pair of readings, voltmeter **V** and ammeter **I**.
5. **Increase** the applied voltage (for example to **0.3 V**) and click **Record** again.
6. **Repeat**, adjusting V several times and recording the corresponding I, **covering the whole available range 0.1 V to 50 V**, using the three push buttons above the voltage dial.
7. When all data are recorded the experiment **ends automatically** and an **Excel sheet** of the saved data is downloaded.
8. Analyse: plot **I against V**; compute **I²** and **P = IV**; plot **P against I²**.

## Table of readings

| S/N | V (V) | I (A) | I² (A²) | P = IV (W) | R = V/I (Ω) |
|---|---|---|---|---|---|
| 1 | 0.1 | | | | |
| 2 | 0.3 | | | | |
| … | | | | | |
| n | 50.0 | | | | |

The R column is the giveaway: for an **ohmic** conductor it stays constant down the table; for **tungsten** or **iron** it **increases** steadily as V and I rise. Convert mA to A (÷1000) before computing anything.

## The two graphs — what is plotted and what it means

**Graph 1: I (y-axis) against V (x-axis).**
A **curve**, not a straight line — it starts steep near the origin and **bends towards the V-axis** (flattens) as V increases, because R is growing with temperature. It still passes through the **origin** (no current at no voltage). The curvature is the direct evidence of **non-ohmic** behaviour. At any point, R = V/I is the **chord** from the origin to that point, and it gets larger along the curve; the **tangent** is *not* R, which is the classic trap.

**Graph 2: P (W, y-axis) against I² (A², x-axis).**
A **straight line through the origin**, confirming **P ∝ I²** — Joule's power law. Comparing **P = RI²** with **y = mx + c**: y ≡ P, x ≡ I², **m ≡ R**, c = 0. So the **gradient of the P–I² graph is the resistance in ohms**. Take two well-separated points **on the best-fit line**, not two raw data points: R = (P₂ − P₁)/(I₂² − I₁²).

Note that P is computed as **P = IV** from the measured pair, and plotted against I² computed from the same pair — so the straight line is a genuine check that P = I²R holds.

## Ohmic vs non-ohmic

| | Ohmic | Non-ohmic |
|---|---|---|
| R as V or I changes | constant | varies |
| I–V graph | straight line through origin | curve through origin |
| Independent of polarity | yes | not necessarily (e.g. diode) |
| Examples | carbon and metal-alloy resistors, copper/aluminium wires, nichrome and tungsten **heating elements** at steady temperature | **light bulbs** (filament heats and R rises), **diodes** (conduct one way only), **transistors** (R depends on input V and I), **thermistors**, **LDRs** |

## Why tungsten, and where non-ohmic parts are used deliberately

**Tungsten**: highest melting point of the metals, so a filament can be driven white-hot without melting; it withstands repeated heating cycles and has a resistance that rises strongly with temperature — hence lamps and heating elements. **Nichrome** is the other standard heating-element alloy named in the case study.

**Mid-lesson question and answer**: a real-world use of a deliberately non-ohmic resistor is the **thermistor** in temperature-sensing circuits — a semiconductor device whose resistance changes drastically with temperature. It is preferred because its **non-linear** behaviour gives **precise measurement of temperature changes over a specific range**; that sensitivity suits temperature control in **ovens, air-conditioning systems and automotive engine management**. Also examinable: the **LDR (light dependent resistor)**, whose resistance falls as illumination rises, used for light detection.

## Precautions and sources of error

- **Heating of the conductor is the effect under study, not an error here** — but it must be allowed to reach a steady value before recording, or readings taken while the filament is still warming will scatter off the curve.
- **Zero error** on both meters: check they read zero with the supply off and correct every reading; a zero error puts a false intercept on the P–I² line.
- **Parallax error**: read each scale with the eye perpendicular to the pointer.
- **Take readings across the full 0.1–50 V range** and use enough points — too few, or all bunched at low voltage, and the curve looks like a straight line and you wrongly conclude the resistor is ohmic.
- **Do not exceed the meter ranges or the resistor's rating**; observe correct **polarity** (+ to +) — for a truly ohmic device reversing polarity must give the same magnitude of R.
- **Contact/lead resistance** at loose or dirty terminals adds unwanted resistance and inflates R.
- Use a **best-fit line** on the P–I² plot rather than joining points dot-to-dot, and a **smooth freehand curve** on the I–V plot rather than a ruler.

## Commonly confused

- **I–V curve vs P–I² line** — the first is deliberately curved (that is the result); the second must be straight (that is the verification of Joule's law). Do not expect a straight line on the first graph.
- **R from the I–V curve** — R = V/I is the **chord** from the origin, *not* the tangent's gradient at the point, and *not* the gradient of the whole curve.
- **Gradient of P vs I² = R**, whereas the gradient of V vs I (Week 2, ohmic case) = R as well, but the gradient of I vs V = 1/R. Read the axes before quoting a value.
- **P = I²R vs P = IV vs P = V²/R** — all three are the same relation via V = IR; in this lab P is *computed* as IV and *checked* against I²R.
- **"Non-ohmic" vs "Ohm's law fails"** — the law is a description of certain materials, not a universal law; a lamp is simply not ohmic.
- **Tungsten as heating element (ohmic in the table) vs tungsten filament (non-ohmic here)** — a metal at a *steady* temperature is ohmic; the same metal *allowed to heat up under increasing current* is not.

*Note: the extracted PDF text carries no circuit diagram, no worked figures and no filled Excel sheet — those are slide images (Fig. 1 ohmic, Fig. 2 non-ohmic, the walk-through video and the sample data sheet). The circuit description, table layout, the gradient-of-P-against-I² treatment and the precautions above are the standard treatment for this experiment, supplied to fill those gaps.*
