# PHY_108 — Week 3

*General Physics Practical II · Week 3 (21 – 27 Sep 2026)*

## Most likely to be examined

1. **Statement of Ohm's law (lab form):** a conducting device obeys Ohm's law if the resistance between any pair of points is independent of the *magnitude and polarity* of the applied potential difference. Formulated by Georg Simon Ohm (German physicist), 1827.
2. **Joule's law:** P = I²R — the power dissipated as heat is proportional to the *square* of the current and to the resistance. P in watts (W), I in amperes (A), R in ohms (Ω).
3. **The two graphs and what each shows:** I against V is a *curve* (non-linear, non-ohmic); P against I² is a *straight line*, verifying Joule's law, with gradient = R.
4. **Why a tungsten filament is non-ohmic:** current causes heating (P = I²R) → temperature rises → resistance rises → current stops increasing linearly with voltage; the effect is largest at high currents.
5. **Apparatus list** (voltmeter, ammeter, DC power supply, tungsten resistor, iron resistor) and the two selectable conductor materials.
6. **Procedure order**, especially: inspect circuit → select material → set V → click **Record** → increase V → Record → repeat across 0.1 V to 50 V → experiment ends and the Excel sheet downloads automatically.
7. **Non-ohmic examples and uses:** light bulbs, diodes, transistors, thermistors, LDRs. Thermistors are used in temperature sensing (ovens, air conditioning, automotive engine management) because their strongly non-linear response gives precise measurement of temperature change over a range.
8. **Computation chain in the spreadsheet:** from recorded V and I, compute I² and compute P = IV, then plot P against I².

## Aim

To study the non-linear relationship between current and voltage in a non-ohmic resistor.

## Apparatus

Voltmeter; ammeter; DC power supply; a resistor made of **tungsten**; a resistor made of **iron**. (Simulated/virtual experiment with a Record button and an automatic Excel download.)

## Theory

- Apply a uniform potential difference V across a conducting sample and measure the resulting current I. If the plotted points fall along a straight line, the ratio V/I is constant and the material is **ohmic**.
- Some elements do not obey Ohm's law: the current does not increase linearly with the applied voltage. These are **non-ohmic** (Fig. 2 in the notes; Fig. 1 is the ohmic straight line).
- **Joule's law** relates the heat generated in a conductor by the flow of current to the resistance: **P = I²R**, where P is the power dissipated as heat (W), I the current (A) and R the resistance (Ω). Current flowing against resistance generates thermal energy.
- As the current increases, the heat generated increases, the conductor's temperature rises, and R changes. The I–V response therefore becomes non-linear. The deviation from Ohm's law is most significant at high current, where the conductor heats considerably and its electrical properties change.
- Electrical power is also given by **P = IV**, which is how P is obtained from the recorded data.

## Procedure (in order)

1. Inspect the circuit connection.
2. Select the material of the conductor from the drop-down list (tungsten or iron).
3. Adjust the output voltage of the DC power supply to a low value (for example 0.1 V).
4. Click **Record** to save both readings — the voltmeter reading V and the current I.
5. Increase the applied voltage (for example to 0.3 V) and click **Record** again to save the new V and I.
6. Repeat, adjusting V several times and recording the corresponding I, covering the whole available range **0.1 V to 50 V**, using the three push buttons on the power supply above the voltage dial knob.
7. When all the data have been recorded the experiment ends automatically, and an Excel sheet containing the saved data is downloaded.

## Data analysis — what is plotted against what

| Plot | Shape | Meaning |
|---|---|---|
| **I (A) against V (V)** | Curve | The non-linear relation between I and V; V/I is not constant, so the resistor is non-ohmic |
| **P (W) against I² (A²)** | Straight line | Illustrates/verifies Joule's power law P = I²R |

- From each recorded pair, compute **I²** and compute **P = IV**.
- For the P vs I² plot, compare P = R·I² with y = mx + c: the **gradient equals R, the resistance in ohms**; the **intercept should be zero** (the line passes through the origin), since zero current dissipates zero power. A noticeably non-zero intercept signals systematic error.
- On the I–V curve, the slope at any point is 1/R at that point; because the curve bends, R is not constant — that bending is the result the experiment is designed to show.

## Precautions

- Inspect and confirm all circuit connections before applying any voltage.
- Start at the lowest voltage (0.1 V) and increase in steps; do not jump straight to a high voltage.
- Do not exceed the stated 50 V upper limit of the supply.
- Record **both** V and I at every setting, clicking Record only after the voltage has been adjusted.
- Take enough well-spread readings across the full 0.1–50 V range so the curvature is visible; points clustered only at low voltage look deceptively straight.
- Allow each reading to settle after changing the voltage, since the filament temperature — and therefore R — needs time to stabilise.
- Keep the same material selected for a complete data set; do not mix tungsten and iron readings on one graph.
- Read the meter scales squarely and record values with consistent units and significant figures.

## Sources of error

- **Self-heating of the conductor** — the very effect under study; it also means R drifts if a reading is taken before the temperature settles.
- **Instrument errors** — limited resolution of the voltmeter and ammeter, zero error, and the loading effect of the meters on the circuit.
- **Parallax and misreading** of scales, plus rounding when transferring values into the spreadsheet.
- **Too few or badly spaced data points**, especially omitting the high-voltage end where the non-linearity is strongest.
- **Drift or fluctuation of the DC supply output** between setting the voltage and clicking Record.
- **Graph-plotting error** — poor choice of scale, or forcing a straight line of best fit through data that is genuinely curved.

*(The slide deck has no explicit "Precautions" or "Sources of error" slide; the two lists above follow directly from the stated procedure and theory.)*

## Commonly confused

- **Ohmic vs non-ohmic:** ohmic means R is constant (straight I–V line through the origin); non-ohmic means R changes with voltage, current, temperature or light — *not* that the device has no resistance.
- **Which graph is straight:** I vs V is the **curve**; P vs I² is the **straight line**. Swapping these loses the entire result.
- **P = I²R vs P = IV:** both appear here. P = IV is how you *compute* P from the recorded data; P = I²R is the relation being *verified* by the linear plot.
- **The gradient of P vs I² is R, not 1/R.** (On a V–I graph the gradient is R; on an I–V graph it is 1/R — different axes, different meaning.)
- **Cause and effect:** heating causes the resistance change, which causes the non-linearity — not the other way round.
- **Tungsten's resistance *increases* with temperature** (a metal), which is why a lamp filament's I–V curve bends over; a thermistor/semiconductor typically behaves in the opposite sense.
- **Ohm's law concerns independence from magnitude *and polarity*:** a device that conducts differently in each direction (a diode) is non-ohmic even if each branch alone looks straight.
- **Joule's law is not a contradiction of Ohm's law:** Ohm's law simply stops applying once R itself changes with temperature.
