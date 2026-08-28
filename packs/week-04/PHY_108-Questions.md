# PHY_108 — Week 4 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 5, not this week. Notes closed.*

## Multiple choice (12)

**1.** The aim of this week's experiment is to:
A) Measure the resistance of five variable resistors  B) Experimentally verify Kirchhoff's Current Law  C) Determine the internal resistance of a DC power supply  D) Verify Kirchhoff's Voltage Law around a loop

**2.** Besides the breadboard and connecting cables, the apparatus for this experiment consists of:
A) One DC power supply, three variable resistors, two ammeters  B) Two DC power supplies, five variable resistors, three ammeters  C) Two DC power supplies, two variable resistors, five ammeters  D) One DC power supply, five variable resistors, one ammeter

**3.** Kirchhoff's Current Law is correctly stated as:
A) The sum of currents entering a junction equals the sum of currents leaving it  B) The sum of voltages around any closed loop is zero  C) The current through a resistor is proportional to the voltage across it  D) The sum of currents entering a junction is always greater than the sum leaving it

**4.** KCL follows directly from the principle of:
A) Conservation of energy  B) Conservation of charge  C) Conservation of momentum  D) Conservation of resistance

**5.** Using the entering-current-positive convention at node b, the correct algebraic form of KCL for this circuit is:
A) I1 + I2 + I3 = 0  B) I1 + I2 − I3 = 0  C) I1 − I2 + I3 = 0  D) I1 + I2 = −I3

**6.** At a circuit junction, a current of 4 mA and a current of 3 mA both flow into the junction along two separate branches, and only one branch carries current away. By KCL, the current leaving in that third branch is:
A) 1 mA  B) 3.5 mA  C) 7 mA  D) 12 mA

**7.** In the recorded data (R1 = 10 kΩ, R2 = 1 kΩ, R3 = 2.5 kΩ, R4 = 7 kΩ, R5 = 5 kΩ, E2 = 9 V), the row for E1 = 12 V gives I1 = 1.055 mA and I2 = −0.344 mA. Using I3-computed = I1 + I2, the computed I3 for this row is:
A) 0.711 mA  B) 1.399 mA  C) −0.711 mA  D) 0.344 mA

**8.** For the row with E1 = 9 V (E2 = 9 V), I1 = 0.895 mA and I2 = −0.416 mA. The computed I3, and the correct interpretation of the negative sign on I2, are:
A) I3 = 1.311 mA; the ammeter for that branch is faulty  B) I3 = 0.479 mA; the actual current in that branch flows opposite to the assumed reference direction  C) I3 = 0.479 mA; no current actually flows in that branch  D) I3 = −0.479 mA; the result shows KCL is violated

**9.** After I3-computed = I1 + I2 is calculated for each row, it is:
A) Discarded, since only I1 and I2 matter  B) Compared with the third ammeter's directly measured I3, to check they agree and so verify KCL  C) Used to recalculate R1 through R5  D) Averaged with I1 and I2 to get a single current value

**10.** Before adjusting the emf of either DC supply, the student must first:
A) Press the 50 V button above the voltage-dial knob to set the maximum output range  B) Short-circuit the ammeters  C) Disconnect R1 from the breadboard  D) Set both supplies to 0 V and leave them there

**11.** In the procedure, one supply's emf is increased from 9 V in regular steps of:
A) 1 V  B) 3 V  C) 5 V  D) 9 V

**12.** Once all the rows for a run have been recorded, the student must:
A) Manually copy each reading into a lab notebook only  B) Save the Excel file that is downloaded with the recorded readings  C) Reset R1–R5 to zero before saving anything  D) Discard the readings and repeat the run from scratch

## Short answer (3)

**13.** State Kirchhoff's Current Law in your own words, and give its two equivalent algebraic expressions (one written as "sum in = sum out", one written as an algebraic sum equal to zero with a sign convention).

**14.** Using the row E2 = 9 V, E1 = 15 V, with I1 = 1.215 mA and I2 = −0.271 mA, calculate I3-computed. Then explain in one sentence what it means, physically, when this computed value agrees closely with the third ammeter's directly measured I3.

**15.** List and briefly justify three precautions a student should observe when running this experiment, drawing on the apparatus, the procedure, and the data-analysis stage.

## Answers

**1. B** — *aim*: the experiment's stated aim is to experimentally verify Kirchhoff's Current Law, not to measure component values or verify KVL.
**2. B** — *apparatus*: a breadboard, two DC power supplies, five variable resistors (R1–R5), three ammeters, and connecting cables.
**3. A** — *KCL statement*: the sum of currents entering a junction equals the sum leaving it; option B describes KVL, option C describes Ohm's law, and option D is simply false (the two sums are equal, not one greater than the other).
**4. B** — *basis of KCL*: KCL is a direct consequence of conservation of charge — charge cannot accumulate at, or vanish from, a junction.
**5. B** — *node equation*: with entering currents positive, I1 + I2 − I3 = 0, which rearranges to the equivalent form I1 + I2 = I3 used in the data analysis.
**6. C** — *calculation*: by KCL the current leaving equals the total current entering, so 4 mA + 3 mA = 7 mA; 3.5 mA is the (irrelevant) average and 12 mA the (irrelevant) product of the two entering currents.
**7. A** — *calculation*: I3-computed = I1 + I2 = 1.055 + (−0.344) = 0.711 mA; option B (1.399 mA) wrongly adds the magnitudes instead of the signed values, and option D just repeats I2's magnitude.
**8. B** — *calculation and sign convention*: I3-computed = 0.895 + (−0.416) = 0.479 mA; the negative sign on I2 means that branch's current actually flows opposite to the direction assumed as the reference, not that the branch is dead or the meter faulty.
**9. B** — *comparison*: I3-computed is compared against the third ammeter's directly measured I3; close agreement between the calculated and experimental values is the experimental verification of KCL.
**10. A** — *setup step*: the 50 V button above the voltage-dial knob must be pressed on both supplies first, to fix their maximum output range before the emf is dialled in.
**11. B** — *procedure*: the stepped supply's emf is increased in regular 3 V intervals (e.g. 9 V, 12 V, 15 V), with the three ammeters recorded again at each step.
**12. B** — *end of run*: the readings are exported automatically, and the student must save the downloaded Excel file containing all recorded rows.
**13.** *KCL in words*: at any junction (node) in a circuit, the total current flowing in must equal the total current flowing out, because charge cannot build up or disappear at a point in a circuit. *Two equivalent forms*: (i) sum of currents entering = sum of currents leaving; (ii) the algebraic sum of all currents at the junction is zero, taking currents entering the junction as positive and currents leaving as negative (e.g. I1 + I2 − I3 = 0 at node b, for two currents entering and one leaving).
**14.** *Calculation*: I3-computed = I1 + I2 = 1.215 + (−0.271) = 0.944 mA. *Explanation*: when this value calculated from the two branch currents closely matches the current read directly off the third ammeter, it confirms that the current entering the junction (I1 and I2) equals the current leaving it (I3), which is the experimental verification of Kirchhoff's Current Law.
**15.** *Precautions* (any three): wire R1 through R5 exactly as the circuit diagram specifies, since a misplaced resistor changes every branch current and invalidates the row; press the 50 V range button on both supplies before dialling in the emf, so the output is not clipped or misread; keep the emf step size a consistent 3 V and click Record after every step, so the run is evenly sampled; read I1, I2 and I3 from the same recorded row before computing I3-computed = I1 + I2, since mixing values from different rows breaks the comparison; and note the sign of each ammeter reading (a negative sign shows reversed current direction, not zero current) before using it in the KCL sum.
