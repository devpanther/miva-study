# Thursday — PHY_108 fast-hour check

*Verifying Kirchhoff's Current Law: the principle, sign convention, readings and KCL versus KVL.*
*5 questions, straight after the hour. Score out of 5.*

**1.** At a node, ammeters read I1 = 1.375 mA and I2 = −0.198 mA for the two currents assumed to enter, and I3 = 1.184 mA for the current leaving. Compute I3 from KCL and its percentage difference from the measured I3.
A. 1.573 mA, +33 %
B. 1.177 mA, −0.007 %
C. 1.177 mA, +0.6 %
D. 1.177 mA, −0.6 %

**2.** Four wires meet at a junction. Ammeters show 2.4 mA and 1.1 mA entering and 0.8 mA leaving. The fourth ammeter is wired to read positive for a current entering the junction. What does it read?
A. −2.7 mA
B. +2.7 mA
C. −4.3 mA
D. +0.5 mA

**3.** Readings at one node (I1, I2 entering; I3 leaving), in mA:
E1 = 6 V: 0.640, −0.512, 0.128
E1 = 9 V: 0.820, −0.430, 0.390
E1 = 12 V: 1.000, −0.348, 0.925
E1 = 15 V: 1.180, −0.266, 0.914
In which row does the I3 reading fail the KCL check?
A. E1 = 6 V
B. E1 = 9 V
C. E1 = 12 V
D. E1 = 15 V

**4.** A branch of the KCL circuit is a 1.0 kΩ resistor across 9.0 V. An ammeter of internal resistance 50 Ω is inserted in series to measure the branch current. By what percentage is the measured current below the true value?
A. 5.0 %
B. 4.8 %
C. 5.3 %
D. 0.43 %

**5.** Kirchhoff's First Law is applied at a node and his Second Law around a closed loop. Which conservation principle lies behind each?
A. First Law: energy; Second Law: charge
B. First Law: charge; Second Law: energy
C. Both laws: conservation of charge
D. Both laws: conservation of energy

---

## Answers

**1. D** — *Computing I3 = I1 + I2 with a negative reading.* KCL at the node: I3 = I1 + I2, adding algebraically and keeping the sign of I2: 1.375 + (−0.198) = 1.177 mA. Percentage difference = (computed − measured)/measured × 100 = (1.177 − 1.184)/1.184 × 100 = −0.6 %, close agreement, so KCL holds for this row.

1.573 mA drops the minus sign on I2 and adds the magnitudes, which would wrongly suggest KCL fails by a third; −0.007 % quotes the difference in mA as if it were a percentage; +0.6 % has the sign backwards, since the computed value is below the measured one.

**2. A** — *Finding the unknown current at a junction with its sign.* Entering positive, leaving negative, algebraic sum zero: 2.4 + 1.1 − 0.8 + I4 = 0, so I4 = −2.7 mA. Total entering is 3.5 mA and only 0.8 mA is accounted for leaving, so 2.7 mA must leave through the fourth wire; an ammeter set to read entering as positive therefore shows −2.7 mA.

+2.7 mA has the magnitude but the wrong sign, since the current leaves; −4.3 mA adds all three readings without regard to direction; +0.5 mA is 2.4 − 1.1 − 0.8, subtracting the 1.1 mA as if it were leaving, and then also forgets that the balancing current must leave.

**3. C** — *Checking each row against KCL.* For each row compute I1 + I2 and compare with I3: 0.640 − 0.512 = 0.128 (matches); 0.820 − 0.430 = 0.390 (matches); 1.000 − 0.348 = 0.652, but I3 was recorded as 0.925; 1.180 − 0.266 = 0.914 (matches). The 12 V row fails, so its I3 reading should be re-taken; 0.925 looks like a misread or mis-typed 0.652.

The 6 V row is not suspect just because I3 is small: 0.128 is exactly I1 + I2. The 9 V and 15 V rows also balance to the last decimal place.

**4. B** — *Ammeter internal resistance as a source of error.* Without the meter, I = 9.0/1000 = 9.00 mA. With the meter in series the branch resistance is 1050 Ω, so I = 9.0/1050 = 8.57 mA. Fall = (9.00 − 8.57)/9.00 × 100 = 4.8 %. This loading effect is why ammeters must have as low a resistance as possible.

5.0 % takes the meter resistance as a fraction of the resistor alone, 50/1000, instead of 50/1050; 5.3 % subtracts the meter resistance instead of adding it (9.0/950 = 9.47 mA); 0.43 % quotes the drop in mA as if it were a percentage.

**5. B** — *KCL versus KVL and their conservation principles.* The Current Law (First Law) says the algebraic sum of currents at a node is zero because charge cannot pile up or vanish at a junction: conservation of charge. The Voltage Law (Second Law) says the algebraic sum of emfs and potential drops around any closed loop is zero because a charge carried once round a loop returns with the same energy: conservation of energy.

Swapping them pairs each law with the wrong principle; assigning one principle to both misses that KCL is about current at a point while KVL is about potential around a path.
