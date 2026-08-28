# PHY_108 — Week 4 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 5, not this week. Notes closed.*

## Section A - Multiple choice (12)

**1.** Kirchhoff's Current Law states that at any junction in a circuit:
A) The sum of the voltages is zero  B) The sum of the currents entering equals the sum of the currents leaving  C) The current is the same in every branch  D) The total resistance equals the sum of the branch resistances

**2.** KCL is a direct consequence of the conservation of:
A) Energy  B) Momentum  C) Electric charge  D) Power

**3.** In the algebraic form of KCL, ΣI = 0, the usual sign convention takes currents:
A) Entering the junction as negative and leaving as positive  B) Entering as positive and leaving as negative  C) All currents as positive  D) Clockwise as positive

**4.** Kirchhoff's *second* law deals with:
A) Currents at a junction  B) The sum of p.d.s round a closed loop  C) The resistance of a parallel network  D) The heating effect of a current

**5.** The apparatus list for this experiment includes:
A) One power supply, two resistors and one ammeter  B) Two DC power supplies, five variable resistors and three ammeters  C) A rheostat, a voltmeter and a metre bridge  D) Three voltmeters and one ammeter

**6.** At node b in the experiment's circuit, the correct node equation is:
A) I₁ + I₂ + I₃ = 0  B) I₁ = I₂ + I₃  C) I₁ + I₂ = I₃  D) I₁ − I₂ − I₃ = 0

**7.** In one run, I₁ = 1.055 mA and I₂ = −0.344 mA. The computed value of I₃ is:
A) 1.399 mA  B) 0.711 mA  C) −0.711 mA  D) 0.344 mA

**8.** The negative sign on the I₂ reading means:
A) The ammeter is faulty  B) The current in that branch is smaller than assumed  C) The current in that branch actually flows opposite to the assumed direction  D) The reading should be discarded

**9.** Each of the three ammeters is connected:
A) In parallel with its branch  B) In series in its branch  C) Across the power supply  D) Between the two power supplies

**10.** An ammeter is built with very low resistance so that:
A) It draws no current from the branch  B) It barely alters the current it is measuring  C) It can measure high voltages  D) It protects the voltmeter

**11.** In the procedure, both DC supplies are first set to a maximum output of 50 V and their emfs adjusted to 9 V; the run then continues by:
A) Changing R₁ in steps of 1 kΩ  B) Increasing the emf in regular 3 V steps and recording again  C) Reversing the ammeters  D) Replacing the breadboard

**12.** A student measures I₃ = 0.500 mA while I₁ + I₂ gives 0.479 mA. The percentage difference, and the verdict, are:
A) 4.2%, KCL verified within the usual 5% tolerance  B) 21%, KCL disproved  C) 0.021%, KCL verified  D) 4.2%, KCL disproved

## Section B - Short answer (3)

**13.** State Kirchhoff's Current Law in both of its usual forms, name the conservation principle it rests on, and write the node equation for a junction where I₁ and I₂ enter and I₃ leaves.

**14.** From the experiment: R₁ = 10 kΩ, R₂ = 1 kΩ, R₃ = 2.5 kΩ, R₄ = 7 kΩ, R₅ = 5 kΩ, E₂ = 9 V, E₁ = 15 V gives I₁ = 1.215 mA, I₂ = −0.271 mA and a measured I₃ = 0.944 mA. Compute I₃ from I₁ and I₂, find the percentage difference from the measured value, and comment on the result.

**15.** State four precautions taken in this experiment and, for each, the source of error it guards against.

## Answers

**1. B** — *statement of KCL*: ΣI_in = ΣI_out at every junction.
**2. C** — *physical basis*: charge cannot be created, destroyed or accumulated at a node; energy conservation is KVL, not KCL.
**3. B** — *sign convention*: entering positive, leaving negative, so that −I₁ − I₂ + I₃ = 0 is the same statement as I₁ + I₂ = I₃.
**4. B** — *KCL vs KVL*: the first law is the current law (junctions); the second is the voltage law (closed loops, conservation of energy).
**5. B** — *apparatus*: breadboard, two DC power supplies, five variable resistors, three ammeters and connection cables.
**6. C** — *node equation*: two currents enter and one leaves, so I₁ + I₂ = I₃, i.e. −I₁ − I₂ + I₃ = 0.
**7. B** — *algebraic addition*: 1.055 + (−0.344) = 0.711 mA. Keep the sign; do not add magnitudes.
**8. C** — *meaning of a negative reading*: the assumed direction was wrong, so that branch is really carrying current away from the node. The reading is valid and is used with its sign.
**9. B** — *ammeter placement*: in series, so it carries the whole current of the branch it measures.
**10. B** — *ammeter design*: a low internal resistance adds almost nothing to the branch, so the current is essentially undisturbed.
**11. B** — *procedure*: after setting the 50 V range and 9 V emfs, the emf is raised in 3 V intervals and the three ammeters recorded at each step; the data are saved to Excel.
**12. A** — *percentage difference*: |0.479 − 0.500|/0.500 × 100% = 4.2%, inside the ~5% tolerance, so the discrepancy is experimental (meter resolution, loading, contact resistance) and KCL stands.
**13.** *Statement and node equation*: (i) The sum of the currents entering a junction equals the sum of the currents leaving it, ΣI_in = ΣI_out. (ii) The algebraic sum of all the currents entering and leaving a junction is zero, ΣI = 0, with currents entering taken as positive and currents leaving as negative. It rests on the **conservation of electric charge** — charge is neither created nor destroyed, and none accumulates at the junction. For the junction described: **I₁ + I₂ = I₃**, or equivalently −I₁ − I₂ + I₃ = 0.
**14. I₃(computed) = 0.944 mA; percentage difference = 0%** — *verification of KCL*: I₁ + I₂ = 1.215 + (−0.271) = 0.944 mA, identical to the measured 0.944 mA, so |0.944 − 0.944|/0.944 × 100% = 0%. Comment: the computed and measured values of I₃ agree, so the current entering node b equals the current leaving it and Kirchhoff's Current Law is verified; any small difference in a real lab (up to about 5%) would be attributed to ammeter resistance and zero error, resistor tolerance and contact resistance, not to a failure of the law.
**15.** *Precautions and the errors they guard against* (any four): **check and correct the ammeter zeros** — a zero error is a systematic offset that unbalances I₁ + I₂ = I₃; **connect every ammeter in series and with correct polarity** — wrong connection short-circuits the branch or reverses the sign of the reading; **fix and label an assumed current direction in each branch before starting** — mixing conventions midway makes correct data appear to violate KCL; **press the 50 V range button before dialling the emf** — prevents overloading the meters and resistors; **push components firmly into the breadboard and tighten connections** — avoids contact and lead resistance that starves one branch; **let readings settle before clicking Record and keep currents small / switch off between runs** — avoids fluctuation and the heating that raises the resistances during a run.
