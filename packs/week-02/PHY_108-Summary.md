# PHY_108 — Week 2 Summary

*General Physics Practical II · Week 2 (14–20 Sep 2026) · Topic: Ohmic Resistance & the Experiment to Verify Ohm's Law*

## The 7 most examinable things this week

1. **Ohm's law**: the current I through a conductor is directly proportional to the potential difference V across it, **provided the temperature (and other physical conditions) stay constant**. V = IR. The temperature condition is the marks-bearing half of the statement.
2. **Circuit rule**: ammeter **in series** with the resistor (it must carry the same current), voltmeter **in parallel** across it (it must share the same p.d.). Swap them and you short the circuit or read nothing.
3. **The V–I graph**: plot V (y-axis) against I (x-axis) → straight line **through the origin**. **Gradient = R**. Compare V = IR with y = mx + c: y ≡ V, x ≡ I, m ≡ R, c = 0.
4. **Ohmic vs non-ohmic**: ohmic → R constant, V–I straight through origin (metal wire, standard resistor at constant temperature). Non-ohmic → R varies with V or I, V–I curved (filament lamp, thermistor, varistor, LDR/photoresistor, diode).
5. **Series**: R = R₁ + R₂ + … + R_N (same current, p.d. divides). **Parallel**: 1/R = 1/R₁ + 1/R₂ + … + 1/R_N; for two, R = R₁R₂/(R₁ + R₂) (same p.d., current divides).
6. **Percentage error** on the measured resistance = |R_measured − R_true|/R_true × 100%; the lab expects agreement within **5%** of the nominal value (e.g. 1 kΩ).
7. **Precautions/errors**: check and correct **zero error** on both meters; read scales **eye perpendicular to the pointer** (parallax); open the key between readings so the wire does not **heat up and raise R**; tighten terminals against **contact resistance**.

## Apparatus and circuit

Apparatus: DC power supply (or cell/battery), the resistor(s) R₁ and R₂ under test, **ammeter** (low resistance), **voltmeter** (high resistance), **rheostat** (variable resistor, to vary the current), **key/switch**, connecting wires, jumpers/bridges and a breadboard or connection board.

Circuit: power supply → key → ammeter → rheostat → resistor R, all in one loop (**series**); voltmeter connected **across R only** (**parallel**).

- **Ammeter in series** because the same current must pass through it; it is made of very low resistance so it barely alters the current.
- **Voltmeter in parallel** because components in parallel share the same p.d.; it is made of very high resistance so it draws almost no current from R.
- **Rheostat in series** to change the current in steps without changing the source voltage.
- **Key/switch** to close the circuit only while taking a reading.

## Procedure (as done in the virtual lab)

1. Connect the circuit: connection board first, then voltmeter across R, then ammeter in series, then the DC power supply.
2. Set the value of R₁ (range 1–20 kΩ in the simulation).
3. Apply a potential difference using the knob on the DC power supply or the DC voltage slider — start at a low value (say 1 V).
4. **Record** the pair of readings V and I.
5. Adjust the voltage (or the rheostat) to a new value and record again — **repeat for at least six or seven different values** of the potential difference.
6. End the run; the data are exported to a spreadsheet.
7. Plot V against I, draw the best-fit straight line, find its gradient, and compare with the nominal resistance.

## Tabulation

| S/N | V (V) | I (mA) | I (A) | R = V/I (Ω) |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| … | | | | |
| 7 | | | | |

Convert mA to A (**÷1000**) before computing R, or your resistance is out by a factor of 1000. Each row should give roughly the same R; the mean of the R column is a second, independent estimate to check against the gradient.

## The V–I graph and its gradient

- Plot **V on the y-axis, I on the x-axis**. Points should lie on a straight line **passing through the origin** (V = 0 when I = 0).
- **Gradient m = ΔV/ΔI = (V₂ − V₁)/(I₂ − I₁) = R**, in ohms — take two well-separated points **on the best-fit line**, not two raw data points.
- If instead you plot **I against V**, the gradient is **1/R** (the conductance G, in siemens). Read the axes before quoting a value.
- A line through the origin confirms **direct proportionality**; a straight line with a non-zero intercept indicates a systematic fault (e.g. meter zero error), not Ohm's law failing.
- **% error** = |gradient value − nominal value| / nominal value × 100%, expected ≤ 5%.

## Ohm's law: statement and conditions

**V = IR**, R in ohms (Ω); 1 Ω = 1 V/A. Also I = V/R and R = V/I. Formulated by **Georg Simon Ohm** (German physicist, **1827**).

Conditions for it to hold: constant temperature, and constant physical conditions generally (no change in length, cross-sectional area or material of the conductor). Ohm's law is **not** a universal law — it is a property of certain materials, and R = V/I is only *constant* for those.

## Ohmic vs non-ohmic conductors

| | Ohmic | Non-ohmic |
|---|---|---|
| R with V or I | constant | varies |
| V–I graph | straight line through origin | curved |
| Obeys V = IR with constant R | yes | no |
| Reversing current | V reverses symmetrically | may be asymmetric (e.g. diode) |
| Examples | metallic conductors, standard/carbon resistors at fixed temperature | filament lamp, thermistor, varistor, photoresistor (LDR), semiconductor diode, electrolytes |

## Worked example — reading R off the graph

Best-fit line passes through (I = 2.0 mA, V = 2.0 V) and (I = 6.0 mA, V = 6.1 V).
Gradient = (6.1 − 2.0) V / (6.0 − 2.0) × 10⁻³ A = 4.1 / 4.0 × 10⁻³ = **1025 Ω ≈ 1.03 kΩ**.
Against a nominal 1 kΩ: % error = (25/1000) × 100% = **2.5%** — within the 5% tolerance.

## Series and parallel (mid-lesson questions)

R₁ = 10 Ω, R₂ = 20 Ω, R₃ = 30 Ω.
- **Series**: R = 10 + 20 + 30 = **60 Ω**. Note R_series is always larger than the largest resistor.
- **Parallel**: 1/R = 1/10 + 1/20 + 1/30 = 6/60 + 3/60 + 2/60 = 11/60, so R = 60/11 ≈ **5.45 Ω**. Note R_parallel is always smaller than the smallest resistor — a useful sanity check.

## Precautions and sources of error

- **Zero error**: check both meters read zero before the key is closed; correct every reading by the zero offset. A zero error puts a non-zero intercept on the V–I line.
- **Parallax error**: read the pointer with the eye directly above/perpendicular to it, using the mirror strip on the scale where one is fitted.
- **Heating of the wire**: current warms the conductor, raising its resistance and bending the V–I line — keep currents small and open the key between readings so the wire cools.
- **Contact/lead resistance**: loose terminals and dirty contacts add unwanted resistance and give a high R; tighten all connections and use clean, short leads.
- Avoid exceeding the meters' ranges; connect meters with correct polarity (+ to +); take several readings and use a best-fit line rather than a single point.

## Commonly confused

- **Ammeter vs voltmeter placement** — ammeter series/low resistance, voltmeter parallel/high resistance. Never in the other arrangement.
- **Gradient of V–I vs gradient of I–V** — R vs 1/R.
- **"Ohm's law fails" vs "the conductor is non-ohmic"** — the law is a statement about proportionality under constant temperature; a filament lamp simply is not an ohmic conductor.
- **mA vs A** — the simulation records current in mA; convert before dividing.
