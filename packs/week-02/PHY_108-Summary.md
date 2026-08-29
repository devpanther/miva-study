# PHY_108 — Week 2

*General Physics Practical II · Week 2 (14–20 Sep 2026)*

*Note on source: the slide text extracted well, but every displayed equation image was dropped — the parallel-resistance formula slides came through blank. The parallel formulas below are reconstructed from the mid-lesson question/answer slides and standard physics; everything else is directly from the slides.*

## Most likely to be examined

1. **State Ohm's law precisely**: the current *I* through a conductor is directly proportional to the potential difference *V* across it, **provided the temperature (and other physical conditions) stay constant**. The temperature proviso is the mark-earning clause.
2. **V = IR mapped onto y = mx + c**: plotting **V (y-axis) against I (x-axis)** gives a straight line through the **origin**; the **gradient = R**, and **c = 0** confirms no stray EMF/offset.
3. **Series formula**: R = R₁ + R₂ + … + R_N — same current through each, voltages differ.
4. **Parallel formula**: 1/R = 1/R₁ + 1/R₂ + … + 1/R_N — same voltage across each, currents differ; equivalent R is always **smaller than the smallest** resistor.
5. **Percentage error** in the measured R against the nominal value, and the pass criterion **within 5 %** of the default 1 kΩ.
6. **Unit trap**: the virtual lab plots V in volts against I in **milliamperes**, so the raw gradient is in **kΩ**, not Ω. Multiply by 10³ (or divide mA by 1000) before quoting in ohms.
7. **Ohmic vs non-ohmic**: ohmic = constant R, straight V–I line through origin, reversible under current reversal. Non-ohmic examples named in the slides: **varistor, photoresistor (LDR), thermistor** — curved V–I graph.
8. **Apparatus and correct meter connection**: ammeter **in series** with the resistor, voltmeter **in parallel** across it.

## Definitions and formulas

- **Ohm's law**: V = IR, with *V* = potential difference (volts, V), *I* = current (amperes, A), *R* = resistance (ohms, Ω). Formulated by **Georg Simon Ohm**, German physicist, **1827**.
- **Resistor**: a device that resists the flow of current; resistance measured in ohms (Ω); used to control current and voltage in a circuit.
- **Ohmic resistance**: a property of a material whose resistance stays **constant** over a wide range of current and voltage. Ohmic resistors: R independent of applied V or I; behaviour **reversible** — reverse the current and the voltage across it simply reverses.
- **Non-ohmic**: R varies with V, I or temperature — varistors, photoresistors, thermistors.
- **Series**: same current in each element, different potential differences (unless resistors are equal). R = R₁ + R₂ (two); R = R₁ + R₂ + R₃ + … + R_N (many).
- **Parallel**: same potential difference across each element, different currents (unless equal). 1/R = 1/R₁ + 1/R₂, i.e. for two resistors R = R₁R₂/(R₁ + R₂); generally 1/R = Σ(1/Rᵢ).

**Apparatus**: breadboard; voltmeter and ammeter; DC power supply; connecting wires and bridges (jumpers); two resistors R₁ and R₂. (Run as the **Praxilabs virtual "Ohmic Resistor" lab**.)

**Procedure, in order**
1. Click the up-arrow (top right of the UI) to see the whole circuit; scroll-wheel to zoom in and identify components.
2. Click the connection board and wire the circuit as shown in the figure; click anywhere on the board to zoom out.
3. Click the **voltmeter**, connect it (in parallel with the resistor), zoom out.
4. Click the **ammeter**, connect it (in series), zoom out.
5. Click the **DC power supply**, connect it, zoom out. Expand the UI again with the down-arrow.
6. Set the value of **R₁ in the range 1–20 kΩ**.
7. Apply a potential difference using either the knob on the DC supply or the DC voltage slider on the UI; set it to a chosen value (say 1 V).
8. Press **Record** to log both V and I.
9. Repeat steps 7–8 **six more times** at different potential drops.
10. On ending, an **Excel sheet of the recorded data downloads automatically**.

**Data analysis / graph**
- Plot **V (volts) on the y-axis against I (mA) on the x-axis**. Expect a straight line **through the origin**.
- **Gradient = R** — the magnitude of the resistance used (R₁). **Intercept = 0** physically: zero applied voltage gives zero current, so a non-zero intercept means a systematic error (meter zero error, contact/lead resistance, or a stray EMF).
- Gradient from two well-separated points on the **best-fit line** (never raw data points): m = (V₂ − V₁)/(I₂ − I₁).
- **Percentage error**: % error = |R_measured − R_accepted| / R_accepted × 100 %. Accepted (default) value R₁ = **1 kΩ**; the result should agree **within 5 %**.

## Worked example

Recorded pairs: (1.0 V, 1.02 mA), (2.0 V, 1.98 mA), (3.0 V, 3.05 mA), (4.0 V, 3.96 mA).

Gradient using the first and last points on the best-fit line:
m = (4.0 − 1.0) V / (3.96 − 1.02) mA = 3.0 / 2.94 = **1.02 V/mA = 1.02 kΩ = 1020 Ω**.

% error = |1020 − 1000| / 1000 × 100 = **2.0 %** — inside the 5 % tolerance, so Ohm's law is verified.

Combination check with the mid-lesson values R₁ = 10 Ω, R₂ = 20 Ω, R₃ = 30 Ω:
- Series: R = 10 + 20 + 30 = **60 Ω**.
- Parallel: 1/R = 1/10 + 1/20 + 1/30 = 6/60 + 3/60 + 2/60 = 11/60, so R = 60/11 = **5.45 Ω** (smaller than the smallest, 10 Ω — the sanity check).

## Commonly confused

- **Series vs parallel** — ask "is the *current* forced to be the same, or the *voltage*?" Same current → series; same voltage → parallel.
- **Ohmic vs non-ohmic** — is the V–I graph a straight line through the origin? Straight → ohmic; curved → non-ohmic.
- **Gradient vs a single V/I ratio** — for a true ohmic resistor they agree; quote the **gradient of the best-fit line** because it averages all seven readings, while V/I from one point carries that point's full error.
- **Ammeter vs voltmeter placement** — the ammeter must carry the current it measures (series, low resistance); the voltmeter must straddle the two points whose difference it measures (parallel, high resistance).
- **kΩ vs Ω** — check the current axis: if I is in mA, a gradient of "1" means 1 kΩ, not 1 Ω.
- **Resistance vs resistivity** — resistance is the property of *this* component in ohms; resistivity is a property of the *material*, independent of its dimensions.
- **% error vs % difference** — % error compares your value to a known accepted value (1 kΩ here); % difference compares two equally uncertain measurements.
