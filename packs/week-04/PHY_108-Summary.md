# PHY_108 — Week 4 Summary

*General Physics Practical II · Week 4 (28 Sep – 4 Oct 2026) · Topic: Experiment on Verification of Kirchhoff's Current Law (KCL)*

## The 8 most examinable things this week

1. **Aim**: to experimentally verify Kirchhoff's Current Law (KCL).
2. **KCL, stated precisely**: the sum of the currents entering a junction (node) equals the sum of the currents leaving it. Equivalently, the algebraic sum of all currents at a junction is zero, with currents entering taken as positive and currents leaving taken as negative. KCL follows from **conservation of charge** — charge cannot pile up or vanish at a node.
3. **The node equation used in this experiment**: at node b, I₁ + I₂ = I₃, i.e. I₁ + I₂ − I₃ = 0 (entering currents positive).
4. **Apparatus**: a breadboard, **two** DC power supplies, **five** variable resistors (R1–R5), **three** ammeters, and connecting cables.
5. **Circuit arrangement**: R1–R5 are wired on the breadboard exactly as the given circuit diagram shows; the two DC supplies (labelled E1 and E2) drive the network, and the three ammeters read the branch currents I1, I2, I3 that meet at the junction where I1 + I2 = I3.
6. **Procedure sequence**: choose values for R1–R5 and wire the circuit as shown → press the **50 V** button above the voltage-dial knob on both supplies to set their maximum output range → set both emfs to **9 V** → click **Record** to log the three ammeter readings → step one supply's emf in **3 V** increments (9 V, 12 V, 15 V) while holding the other supply fixed, recording after each step → save the Excel file that is downloaded.
7. **Table and comparison**: for each row the sheet records R1–R5, E1, E2, and the signed ammeter readings I1 and I2; from these, **I3-computed = I1 + I2** is calculated. This computed value is then **compared against the third ammeter's directly measured I3** — close agreement between the calculated and experimental values is what confirms KCL.
8. **Sign convention**: I2 is recorded as **negative** throughout the data (e.g. −0.416 mA, −0.344 mA, −0.271 mA). This does not mean "no current" or a faulty meter — it means the actual current in that branch flows **opposite to the assumed reference direction**; its magnitude still enters the KCL sum, with a minus sign.

## Apparatus and circuit

Apparatus: breadboard, two DC power supplies (E1, E2), five variable resistors R1–R5, three ammeters (one per branch current I1, I2, I3), and connecting cables. The student sets the resistor values, wires the circuit on the breadboard as diagrammed, and reads the three ammeters at the junction (node b) where I1 and I2 combine to give I3.

## Procedure

1. Select the values of R1 through R5 and connect the circuit as shown in the given diagram.
2. Set the maximum output voltage of **both** DC power supplies to 50 V by pressing the 50 V button above the voltage-dial knob.
3. Adjust the emfs of both supplies to 9 V using the voltage-dial knob.
4. Click **Record** to log the readings of the three ammeters (I1, I2, I3).
5. Increase one supply's emf at regular 3 V intervals and repeat step 4 at each new value.
6. Save the Excel file that is downloaded, containing all recorded rows.

*Note on step 5*: the source procedure text names E2 as the supply that is stepped, but the recorded data table instead shows **E2 held fixed at 9 V** while **E1 is stepped through 9 V, 12 V, 15 V** (3 V increments). Learn the *method* (hold one supply fixed, step the other by 3 V, record after each step) rather than memorising which label is which — the two source materials disagree on the label.

## Data analysis and comparison

Sample recorded rows (R1 = 10 kΩ, R2 = 1 kΩ, R3 = 2.5 kΩ, R4 = 7 kΩ, R5 = 5 kΩ, E2 = 9 V fixed):

| E1 (V) | I1 (mA) | I2 (mA) | I3-computed = I1+I2 (mA) |
|---|---|---|---|
| 9  | 0.895 | −0.416 | 0.479 |
| 12 | 1.055 | −0.344 | 0.711 |
| 15 | 1.215 | −0.271 | 0.944 |

- Compute **I3-computed = I1 + I2** for each row (this *is* the KCL equation I1 + I2 = I3 applied to the two measured branch currents).
- Compare I3-computed against the **third ammeter's directly measured I3** for the same row. Reasonable agreement between the two values is the experimental verification of KCL; the source table's measured-I3 column did not survive extraction cleanly, so treat "compare computed vs measured I3" as the method to apply to your own lab readout, using the worked I3-computed values above as the reference calculation.

## Precautions and sources of error

- Wire R1–R5 exactly as the circuit diagram specifies — a swapped resistor position changes every branch current and invalidates the row.
- Press the **50 V** range button on both supplies *before* dialling in the emf, so the supply is not clipped or misread partway through the run.
- Keep the step size a consistent **3 V** and record with **Record** after every step — skipped or uneven steps under-sample the comparison between computed and measured I3.
- Read I1, I2 (and I3, where measured) from the **same recorded row** before computing I3-computed = I1 + I2 — pairing values from different rows silently breaks the comparison.
- Note the **sign** on each ammeter reading before using it — dropping a negative sign (as on I2 here) will make I3-computed wrong even though the magnitudes look reasonable.

## Commonly confused

- **KCL (current law) vs KVL (voltage law)** — KCL is about currents summing to zero at a *node/junction* (conservation of charge); KVL is a separate law about voltages summing to zero around a *loop*. This experiment verifies KCL only.
- **I3-computed vs I3-measured** — these are two *different* quantities in this experiment: one is calculated from I1 + I2 using KCL, the other is read directly off the third ammeter. The experiment's whole point is comparing them, not treating them as the same number.
- **A negative ammeter reading is not an error** — I2 is negative in every row because its actual current direction is opposite to the assumed reference direction, not because the branch carries "no current" or the meter is broken.
- **Which supply is stepped** — the written procedure names E2, but the recorded table steps E1 in 3 V increments with E2 fixed; don't assume the label in the procedure text always matches the table exactly.
- **Kirchhoff's laws, correctly attributed**: Kirchhoff's current and voltage laws were formulated by **Gustav Kirchhoff**, a German physicist, in **1845** — some source material garbles this attribution; the physics (conservation of charge at a node) is what matters for the exam, not the mangled name.
