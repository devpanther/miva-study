# PHY_108 — Week 2 Retention Set

*General Physics Practical II · sit this SEVEN DAYS after the Week 2 session. Closed book.*

## Multiple choice

**1.** Ohm's law states that the current through a conductor is directly proportional to the potential difference across it, provided that:
a) the resistance is greater than 1 kΩ
b) the temperature remains constant
c) the current is measured in milliamperes
d) the resistors are connected in parallel

**2.** In the verification experiment, V is plotted against I. The gradient of the resulting line represents:
a) the current through the resistor
b) the power dissipated
c) the resistance of the resistor
d) the EMF of the DC supply

**3.** A line of V against I for an ohmic resistor should pass through the origin. A clearly non-zero intercept most likely indicates:
a) a systematic error such as meter zero error or stray contact resistance
b) that Ohm's law is disproved for all conductors
c) that the resistor is in parallel with another
d) that the voltage axis is in millivolts

**4.** Three resistors of 10 Ω, 20 Ω and 30 Ω are connected in series. The equivalent resistance is:
a) 5.45 Ω
b) 11 Ω
c) 20 Ω
d) 60 Ω

**5.** The same three resistors (10 Ω, 20 Ω, 30 Ω) connected in parallel give an equivalent resistance of about:
a) 60 Ω
b) 20 Ω
c) 5.45 Ω
d) 0.183 Ω

**6.** In a parallel connection of resistors, the quantity that is the same across every resistor is:
a) the potential difference
b) the current
c) the resistance
d) the power

**7.** Which of these is a non-ohmic component named in the lesson?
a) A 1 kΩ carbon resistor
b) A copper connecting wire
c) A breadboard jumper
d) A thermistor

**8.** In the virtual lab, the voltmeter and ammeter are connected respectively:
a) both in series with the resistor
b) voltmeter in parallel with the resistor, ammeter in series
c) voltmeter in series, ammeter in parallel
d) both in parallel with the resistor

**9.** A graph of V (in volts) against I (in mA) has a gradient of 1.03. The resistance is:
a) 1.03 kΩ
b) 1.03 Ω
c) 1.03 mΩ
d) 0.97 kΩ

**10.** After recording the readings, the procedure requires the voltage step to be repeated so that in total you obtain:
a) two readings
b) four readings
c) seven readings
d) twenty readings

**11.** The measured resistance is 1.06 kΩ and the accepted default value is 1 kΩ. The percentage error and verdict are:
a) 6 %, within the 5 % tolerance
b) 0.6 %, within tolerance
c) 60 %, outside tolerance
d) 6 %, outside the 5 % tolerance

**12.** Which statement about an ohmic resistor is correct?
a) Its resistance rises steadily as the applied voltage rises
b) Reversing the current direction simply reverses the voltage across it
c) Its V–I graph curves away from the origin at high current
d) It only obeys V = IR when connected in parallel

## Short answer

**S1.** State Ohm's law in full, write its equation defining every symbol and its unit, and explain how the form V = IR corresponds to y = mx + c for the graph drawn in this experiment.

**S2.** List, in the correct order, the main steps of the Praxilabs Ohmic Resistor procedure from connecting the circuit through to obtaining the data file, and state the range within which R₁ is set.

**S3.** A student's best-fit line of V against I (mA) passes through (0.5 mA, 0.52 V) and (4.5 mA, 4.62 V). Calculate the gradient, state the resistance in ohms, and compute the percentage error against the default value of 1 kΩ. State whether the experiment has verified Ohm's law and why.

## Answers

**1. b** — the constant-temperature proviso is part of the statement of the law; without it the resistance can drift.

**2. c** — comparing V = IR with y = mx + c, the gradient m is R (intercept c = 0).

**3. a** — theory demands zero current at zero applied voltage, so an offset is instrumental, not physical.

**4. d** — series resistances add: 10 + 20 + 30 = 60 Ω.

**5. c** — 1/R = 1/10 + 1/20 + 1/30 = 11/60, so R = 60/11 = 5.45 Ω, less than the smallest resistor.

**6. a** — parallel elements share the same two nodes, so they share the same potential difference; the currents differ.

**7. d** — thermistors (with varistors and photoresistors) change resistance with conditions, so their V–I graph is not a straight line.

**8. b** — the ammeter must carry the current it measures (series); the voltmeter must straddle the resistor (parallel).

**9. a** — volts divided by milliamperes gives kilohms, so 1.03 V/mA = 1.03 kΩ = 1030 Ω.

**10. c** — one reading is taken, then the voltage-set-and-record step is repeated six more times, giving seven points.

**11. d** — |1.06 − 1.00|/1.00 × 100 = 6 %, which exceeds the stated 5 % acceptance limit.

**12. b** — reversibility under current reversal is a listed characteristic of ohmic resistors; constant R rules out (a) and (c).

**S1.** Ohm's law: the electric current I passing through a conductor is directly proportional to the potential difference V across it, at constant temperature. V = IR, where V is potential difference in volts (V), I is current in amperes (A) and R is resistance in ohms (Ω). Plotting V on the y-axis against I on the x-axis makes V ≡ y, I ≡ x, R ≡ m (gradient) and c = 0, so the graph is a straight line through the origin whose gradient equals the resistance.

**S2.** Expand the UI (up-arrow) and zoom in to identify components; open the connection board and wire the circuit as in the figure, then zoom out; click the voltmeter and connect it, zoom out; click the ammeter and connect it, zoom out; click the DC power supply and connect it, zoom out; re-expand the UI; set R₁ within **1–20 kΩ**; apply a potential difference with the supply knob or the DC voltage slider (e.g. 1 V); press Record to log V and I; repeat the set-and-record step six more times at different voltages; on ending, an Excel sheet of the data downloads automatically.

**S3.** Gradient = (4.62 − 0.52)/(4.5 − 0.5) = 4.10/4.00 = 1.025 V/mA = 1.025 kΩ = **1025 Ω**. % error = |1025 − 1000|/1000 × 100 = **2.5 %**. This is within the 5 % tolerance and the line is straight through the origin, so Ohm's law is verified for this resistor.
