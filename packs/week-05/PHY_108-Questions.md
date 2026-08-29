# PHY_108 — Week 5 retention set

*Verification of Kirchhoff's Voltage Law. Sit this seven days after the lesson, closed book.*

## Multiple choice

**1.** Kirchhoff's Voltage Law is a statement of the conservation of:
a) charge
b) energy
c) momentum
d) magnetic flux

**2.** Which set is the apparatus list for this experiment?
a) Breadboard, one DC supply, three fixed resistors, two voltmeters, cables
b) Breadboard, two DC supplies, three variable resistors, five ammeters, cables
c) Breadboard, two DC supplies, five variable resistors, three ammeters, cables
d) Breadboard, one DC supply, five variable resistors, one ammeter, one voltmeter, cables

**3.** In this experiment the instruments actually read:
a) the three branch currents
b) the voltage drop across each of the five resistors
c) the emf of each supply only
d) the resistance of each branch

**4.** A **branch** in an electrical circuit is best defined as:
a) any point where two or more components meet
b) a closed pathway formed by interconnected branches
c) the region of a circuit carrying the largest current
d) a single path connecting two nodes, containing one or more components

**5.** Following the procedure, what is done **immediately before** adjusting the emfs of both supplies to 9 V?
a) The Record button is clicked to log the three ammeter readings
b) The maximum output of both supplies is set to 50 V using the 50 V button
c) The equations are solved for I1, I2 and I3
d) The resistances are increased in 3 V intervals

**6.** By the deck's sign convention, the potential difference across a resistance is taken as **positive** when:
a) the resistance is traversed in the same direction as the current flowing through it
b) the resistance is traversed opposite to the current flowing through it
c) the resistance is larger than the other resistances in the loop
d) the current through it is negative

**7.** Which equation could only have come from KVL, not KCL?
a) I1 + I2 = I3
b) I3 − I1 = I2
c) I3R3 + I3R4 + I1R5 = E1
d) I1 = I2 + I3

**8.** In the recorded data, I2 comes out negative at every setting. This means:
a) an ammeter is faulty and the run must be repeated
b) KVL has failed for that loop
c) the resistance R2 was set too low
d) the actual direction of I2 is opposite to the direction assumed on the circuit diagram

**9.** After step 4, the procedure calls for the emf to be increased:
a) continuously until the supply reaches its 50 V maximum
b) in regular intervals of 3 V, repeating the recording at each setting
c) in regular intervals of 9 V, recording once at the end
d) only after all five resistances have been changed

**10.** With R in kΩ and currents in mA, the product I·R comes out directly in:
a) milliamps
b) kilo-ohms
c) volts
d) microvolts

**11.** How is KVL verified from the readings?
a) The currents computed by solving the KCL/KVL equations are compared with the currents measured by the ammeters
b) The measured voltage across each resistor is added up and shown to equal 50 V
c) The resistances are summed and compared with the total emf
d) The ammeter readings are plotted against time and shown to be constant

**12.** Which of these is a genuine source of error in this experiment?
a) The finite speed of the electrons in the connecting cables
b) The magnetic field of the Earth acting on the breadboard
c) The fact that the loop is traversed clockwise rather than anticlockwise
d) The internal resistance of the ammeters, added in series with each branch

## Short answer

**S1.** State Kirchhoff's Voltage Law, name the conservation principle it rests on, and give both sign rules used in this experiment (for a resistance and for a battery).

**S2.** You are shown two equations from the deck: (i) I1 + I2 = I3 and (ii) I2R2 − I1R5 + I2R1 = −E2. Say which law each expresses and give the test you used to decide. Note that the deck itself labels one of them incorrectly — say which, and what the correct label is.

**S3.** List three precautions and three sources of error for this experiment, and explain in one sentence why the shared resistor R5 appears with a minus sign in the loop-2 equation.

---

## Answers

**1. b** — KVL is derived from conservation of energy; conservation of charge gives KCL.

**2. c** — Breadboard, two DC power supplies, five variable resistors, three ammeters, connection cables; note there is no voltmeter.

**3. a** — Three ammeters record I1, I2 and I3; voltages are computed, not measured.

**4. d** — A node is the junction, a loop is the closed pathway; a branch is the single path between two nodes.

**5. b** — Order is: connect circuit, press the 50 V range button on both supplies, then dial both emfs to 9 V.

**6. a** — Traversing a resistance along the current direction is a drop and is taken positive; the reverse is negative.

**7. c** — Every term is a voltage (IR products and an emf), so it is a loop equation; the other three contain currents only and are node equations.

**8. d** — A negative solution simply reverses the assumed arrow; the magnitude is still correct and nothing has failed.

**9. b** — Step 5 increases the emf in regular 3 V intervals and repeats the recording (9, 12, 15 V in the sample table).

**10. c** — kΩ × mA = 10³ Ω × 10⁻³ A = volts, so the tabulated values can be substituted without conversion.

**11. a** — The equations are solved analytically for I1, I2, I3 and the computed I3 is compared with the measured I3 at each setting.

**12. d** — Ammeter internal resistance adds to each branch and slightly lowers the measured currents; the others are not real effects here (traversal direction only changes signs consistently, not the result).

**S1.** Around any closed loop the algebraic sum of all voltage drops is zero — equivalently the sum of the voltage drops across the branches equals the sum of the emfs of the batteries in that loop. It rests on conservation of energy. Sign rules: a potential difference across a resistance is positive if the resistance is traversed in the same direction as the current through it, negative otherwise; an emf is positive if the battery is traversed from its positive terminal to its negative terminal, negative otherwise.

**S2.** (i) is KCL — it contains currents only and is written at node b. (ii) is KVL — every term is a voltage (IR products and an emf) and it is written around loop 2. The test is what the terms are made of: currents only, at a point, means KCL; volts, around a closed path, means KVL. The deck labels (ii) "Apply KCL to node b", which is wrong; it should read "Apply KVL to loop 2".

**S3.** Precautions (any three): press the 50 V range button before dialling the emfs; connect the ammeters in series with correct polarity so a reversed current reads negative; fix the assumed current directions before recording and keep them unchanged; check all breadboard connections are firm; use the resistance values actually set when substituting; traverse each loop in one consistent direction. Errors (any three): resistor tolerance and setting error; ammeter calibration/resolution error and parallax; ammeter internal resistance in series with the branch; internal resistance of the supplies lowering the terminal emf; contact and lead resistance; supply drift and resistor heating; rounding or sign errors in solving the equations. R5 carries I1 and is shared between the two loops, so loop 2 traverses it against the direction of I1 — by the sign convention that term is therefore negative.
