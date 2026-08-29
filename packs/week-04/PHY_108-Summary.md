# PHY_108 — Week 4

*General Physics Practical II · Week 4 (28 Sep – 4 Oct 2026)*

## Most likely to be examined

1. **Statement of KCL**: the sum of currents entering a junction equals the sum of currents leaving it; equivalently, the algebraic sum of all currents at a node is zero.
2. **The sign convention used in this experiment**: currents **entering** the junction are **positive**, currents **leaving** are **negative**. Hence at node b, `I1 + I2 = I3` is written as `-I1 - I2 + I3 = 0`.
3. **The physical principle KCL rests on**: conservation of electric charge — charge is neither created nor destroyed nor accumulated at a node.
4. **Apparatus list** (5 items): breadboard, two DC power supplies, five variable resistors (R1–R5), three ammeters, connection cables.
5. **Procedure order**: set R1–R5 and wire the circuit → set both supplies to the 50 V maximum-output range → set both emfs to 9 V → Record the three ammeter readings → increase the emf in 3 V steps and re-record → save the Excel file.
6. **How the law is verified from the readings**: compute `I3(computed) = I1 + I2` from the measured I1 and I2, compare with the measured I3, and comment on the agreement.
7. **Meaning of a negative ammeter reading** (I2 is negative in every row): the current physically flows opposite to the assumed positive direction, i.e. it leaves the junction rather than entering it.
8. **The numbers themselves**: with R1=10 kΩ, R2=1 kΩ, R3=2.5 kΩ, R4=7 kΩ, R5=5 kΩ and E2=9 V — (9 V: 0.895, -0.416, 0.479), (12 V: 1.055, -0.344, 0.711), (15 V: 1.215, -0.271, 0.944) mA. In every row I1 + I2 reproduces I3 exactly.

## The experiment

**Aim.** To verify Kirchhoff's Current Law experimentally.

**Objectives.** State KCL for electric circuits; apply KCL at a node (junction) of an electric circuit.

**Apparatus.** Breadboard; two DC power supplies; five variable resistors; three ammeters; connection cables.

**Theory.** Circuit analysis rests on two laws formulated by Kirchhoff in 1845: the First Law (Current Law, KCL) and the Second Law (Voltage Law, KVL). KCL follows from conservation of charge and states that the sum of the currents entering a junction equals the sum of the currents leaving it; equivalently, the algebraic sum of all currents at the junction is zero. Symbols: **I1, I2** are the branch currents fed into node b from the two source branches; **I3** is the current leaving node b through the third branch; **E1, E2** are the emfs of the two DC supplies; **R1–R5** are the branch resistances.

**Sign convention.** Entering = positive, leaving = negative. So `I1 + I2 = I3` (equation 1) and `-I1 - I2 + I3 = 0`. A reading that comes out negative simply means that branch's current runs against the assumed positive sense.

**Procedure (in order).**
1. Select values for R1 through R5 and connect the circuit as shown in the diagram.
2. Set the maximum output voltage of both DC supplies to 50 V (press the 50 V button above the voltage dial).
3. Adjust the emfs of both supplies to 9 V using the voltage dial knob.
4. Click **Record** to log the readings of the three ammeters (I1, I2, I3).
5. Increase the emf in regular 3 V steps (9 → 12 → 15 V) and repeat step 4 at each step.
6. Save the downloaded Excel file of results.

**What is measured.** The three currents I1, I2, I3 (in mA) at each emf setting, with R1–R5 held fixed at 10, 1, 2.5, 7 and 5 kΩ.

| E2 (V) | E1 (V) | I1 (mA) | I2 (mA) | I3 (mA) | I3 computed = I1 + I2 |
|---|---|---|---|---|---|
| 9 | 9 | 0.895 | -0.416 | 0.479 | 0.479 |
| 9 | 12 | 1.055 | -0.344 | 0.711 | 0.711 |
| 9 | 15 | 1.215 | -0.271 | 0.944 | 0.944 |

**How the law is verified.** For each row, compute I3(computed) = I1 + I2 from the measured I1 and I2 (keeping the sign of I2), then compare it with the measured I3 and comment on the result. Agreement across all rows — i.e. at several different emf settings and therefore several different current magnitudes — shows that no charge accumulates at the node, confirming KCL. The verification is a row-by-row comparison, not an average.

**Precautions.** *(The deck has no precautions slide; these are derived from the stated procedure and theory.)*
- Select the 50 V output range before turning up the dial, so the supply is never driven past its chosen maximum.
- Connect every ammeter **in series** in its branch, never across a component, and observe meter polarity so the sign convention is preserved.
- Record and keep the sign of each reading — do not write I2 as a bare 0.416 mA.
- Hold R1–R5 fixed while stepping the emf; change only one variable (the emf) at a time.
- Change the emf in the specified regular 3 V steps and let readings settle before pressing Record.
- Check that all breadboard connections are firm and that the circuit matches the diagram before powering up.
- Read all three ammeters at the same setting, and take them at the same node.

**Sources of error.** *(Also derived, for the same reason.)*
- Ammeter internal resistance (burden voltage) loading the branch and slightly altering the very currents being measured.
- Instrument zero error, calibration error, and finite display resolution/rounding of the mA readings.
- Tolerance in the variable resistors — the nominal 10, 1, 2.5, 7 and 5 kΩ are not the exact values.
- Drift or inaccuracy in the emf actually delivered by the supplies relative to the dial setting (9, 12, 15 V).
- Contact and lead resistance at breadboard connections, and loose or intermittent connections.
- Sign/polarity errors from reversing a meter's terminals.
- Self-heating of the resistors changing their resistance as the current rises.

## Commonly confused

- **KCL vs KVL.** KCL (First Law) is about currents at a *node* and comes from charge conservation; KVL (Second Law) is about voltages around a *loop*. The deck's Data Analysis slide mislabels `I1 + I2 = I3` as "the KVL equation" — it is the KCL equation.
- **The sign convention runs one way only.** Entering positive, leaving negative. Flipping it (leaving positive) gives `I1 + I2 - I3 = 0` — same physics, different bookkeeping. Never mix the two within one node equation.
- **A negative current is not an error.** I2 is negative in all three rows because that branch's current leaves the node; you still add it algebraically, so I1 + I2 comes out *smaller* than I1.
- **I3(computed) vs I3(measured).** The computed column is derived from I1 and I2; the measured column comes from the third ammeter. Verification means comparing the two, not copying one into the other.
- **Which emf is stepped.** The procedure says increase E2 in 3 V intervals, but the data table holds E2 at 9 V and steps E1 (9, 12, 15 V). Exam-safe statement: one supply is held at 9 V while the other is raised in 3 V steps.
- **Which supply setting is which.** "50 V" is the maximum-output *range* button; "9 V" is the actual emf set on the dial. Two different steps.
- **Kirchhoff himself.** The deck prints "Justa Kirchhoff … Russian scientist"; he was Gustav Kirchhoff, a German physicist. The two laws and the date (1845) are right.
- **Ammeter vs voltmeter connection.** Ammeters go in series with the branch whose current they measure; voltmeters go in parallel. Only ammeters are used in this experiment.
