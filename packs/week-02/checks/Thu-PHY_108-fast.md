# Thursday — PHY_108 fast-hour check

*Ohm's law and its proviso, non-ohmic devices, parallel behaviour, meter placement and the milliamp unit trap.*
*5 questions, straight after the hour. Score out of 5.*

**1.** Ohm's law readings for a nominal 1 kΩ resistor:
V (V): 1.0, 2.0, 3.0, 4.0, 5.0
I (mA): 0.96, 1.94, 2.88, 3.86, 4.80
The best-fit line of V against I passes through the first and last points. Find R in ohms and the percentage error.
A. 1.04 Ω, 4.2 %
B. 1040 Ω, 4.2 %
C. 960 Ω, 4.0 %
D. 1040 Ω, 0.042 %

**2.** V and I are recorded for a fixed resistor:
V (V): 1.0, 2.0, 3.0, 4.0, 5.0, 6.0
I (mA): 0.50, 1.01, 1.49, 2.40, 2.51, 3.00
Which reading is the outlier that should be re-taken?
A. 2.0 V, 1.01 mA
B. 3.0 V, 1.49 mA
C. 5.0 V, 2.51 mA
D. 4.0 V, 2.40 mA

**3.** A 12 V supply drives a single 12 Ω resistor and the ammeter in the supply line reads 1.0 A. A 6 Ω resistor is then connected in parallel with the 12 Ω one. What does the ammeter read now?
A. 3.0 A
B. 0.67 A
C. 2.0 A
D. 0.50 A

**4.** A filament lamp gives:
V (V): 1.0, 2.0, 4.0, 8.0
I (A): 0.50, 0.80, 1.10, 1.40
Find its resistance at 1.0 V and at 8.0 V, and classify the lamp.
A. 2.0 Ω and 5.7 Ω; ohmic
B. 0.50 Ω and 0.18 Ω; non-ohmic
C. 2.0 Ω and 5.7 Ω; non-ohmic
D. 2.0 Ω and 2.0 Ω; ohmic

**5.** A V against I graph for a fixed resistor is a good straight line of gradient 1.02 kΩ, but it cuts the V axis at +0.15 V instead of the origin. What does the intercept indicate?
A. The resistor is non-ohmic
B. A systematic error such as a meter zero error
C. The resistance is really 0.15 kΩ
D. The temperature rose during the readings

---

## Answers

**1. B** — *Resistance from the gradient of a V against I graph in milliamps.* Gradient = (5.0 − 1.0) V/(4.80 − 0.96) mA = 4.0/3.84 = 1.04 V/mA. Volts per milliamp are kilohms, so R = 1.04 kΩ = 1040 Ω. Percentage error = |1040 − 1000|/1000 × 100 = 4.2 %, inside the 5 % tolerance.

1.04 Ω forgets that the current axis is in mA, so the gradient is 1000 times too small; 960 Ω uses ΔI/ΔV, the reciprocal of the gradient (that is the conductance in mS); 0.042 % leaves out the factor of 100 in the percentage.

**2. D** — *Spotting an outlier from the V/I ratio.* For a fixed resistor V/I should be the same for every pair. The ratios are 2.00, 1.98, 2.01, 1.67, 1.99 and 2.00 kΩ. Five agree at about 2.0 kΩ; the 4.0 V reading gives 1.67 kΩ, so 2.40 mA is the odd one out (a value of about 2.0 mA would fit) and it should be repeated.

1.01 mA, 1.49 mA and 2.51 mA each differ from the trend by 0.01 mA, which is ordinary scatter, not an outlier.

**3. A** — *Change in supply current when a parallel branch is added.* In parallel both resistors sit across the full 12 V. Equivalent R = (12 × 6)/(12 + 6) = 4 Ω, so I = 12/4 = 3.0 A. Equivalently, the 12 Ω branch still carries 1.0 A and the new 6 Ω branch adds 12/6 = 2.0 A; the ammeter in the supply line reads the sum.

0.67 A treats the pair as a series 18 Ω; 2.0 A counts only the new branch and forgets the original 1.0 A; 0.50 A assumes adding a resistor must halve the current, but a parallel branch lowers the total resistance and raises the current.

**4. C** — *Resistance from V/I at two points and the ohmic test.* R = V/I at each point: 1.0/0.50 = 2.0 Ω and 8.0/1.40 = 5.7 Ω. The resistance rises with current because the filament heats up, so the temperature proviso of Ohm's law is not met and the V against I graph curves: the lamp is non-ohmic.

0.50 Ω and 0.18 Ω are I/V, the reciprocal; 2.0 Ω and 5.7 Ω with 'ohmic' has the numbers but misses that a changing R is exactly what non-ohmic means; 2.0 Ω and 2.0 Ω assumes the first ratio holds for all readings instead of computing the second.

**5. B** — *Meaning of a non-zero intercept on a V against I graph.* V = IR has no constant term: zero current must mean zero potential difference, so the line should pass through the origin. A constant offset of 0.15 V on every reading, with the gradient unaffected, is the signature of a systematic error, typically a voltmeter zero error or a stray emf in the leads.

A non-ohmic resistor or a temperature rise would bend the line, not shift it while keeping it straight; the resistance is the gradient, 1.02 kΩ, and the intercept is not a resistance at all.
