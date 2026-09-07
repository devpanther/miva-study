# Thursday — PHY_108 fast-hour check

*Verifying Kirchhoff's Voltage Law: its basis, the circuit equations, the sign rules, the procedure and a negative current.*
*5 questions, straight after the hour. Score out of 5.*

**1.** A single loop contains a 12 V supply, a 2 kΩ resistor, a 4 kΩ resistor and a 3 V supply connected so that it opposes the 12 V one. Use KVL to find the current in the loop.
A. 2.5 mA
B. 1.5 A
C. 1.5 mA
D. 4.5 mA

**2.** In the KVL circuit, loop 1 gives I3·R3 + I3·R4 + I1·R5 = E1. With R3 = 2.5 kΩ, R4 = 7 kΩ, R5 = 5 kΩ, E1 = 9 V and the measured I3 = 0.479 mA, compute I1.
A. 0.890 mA
B. 1.80 mA
C. 2.71 mA
D. 0.468 mA

**3.** Walking once round a loop you pass: a 6 V battery from + to −; a 2 kΩ resistor carrying 1.5 mA in your direction of travel; a 4 kΩ resistor carrying 1.5 mA against your direction; then a battery of emf E from − to +. Using the sign rules (resistor p.d. positive when traversed with the current, emf positive when traversed + to −, total zero), find E.
A. 15 V
B. 9 V
C. −3 V
D. 3 V

**4.** A resistance is set to R = 2.5 kΩ (2 significant figures) and the ammeter in that branch reads I = 0.479 mA (3 significant figures). Give the p.d. across R to the correct number of significant figures.
A. 1.1975 V
B. 1.2 V
C. 1.20 V
D. 1.198 V

**5.** Resistor R5 carries I1 and lies on the branch shared by both loops. In loop 1 its term is +I1·R5, in loop 2 it is −I1·R5. Why do the signs differ?
A. I1 reverses direction between the two loops
B. R5 has a negative resistance in loop 2
C. Loop 1 is a KCL equation and loop 2 a KVL equation
D. The two loops traverse R5 in opposite directions relative to I1

---

## Answers

**1. C** — *Loop current from KVL with two emfs.* Going round the loop, the sum of emfs equals the sum of IR drops: 12 − 3 = I(2 + 4), so I = 9 V/6 kΩ = 1.5 mA. Volts divided by kilohms gives milliamps directly.

2.5 mA adds the two emfs (15/6) instead of subtracting the opposing one; 1.5 A forgets that the resistances are in kΩ; 4.5 mA divides by only the 2 kΩ resistor and leaves the 4 kΩ out of the loop.

**2. A** — *Solving a KVL loop equation for a branch current.* Because kΩ × mA = V, substitute directly: 0.479(2.5 + 7) + 5·I1 = 9, so 4.55 + 5·I1 = 9 and I1 = (9 − 4.55)/5 = 0.890 mA. An ammeter in that branch reading about 0.89 to 0.90 mA would confirm the loop equation.

1.80 mA is 9/5, ignoring the drop across R3 and R4 altogether; 2.71 mA adds the 4.55 V instead of subtracting it; 0.468 mA divides the remaining 4.45 V by R3 + R4 instead of by R5.

**3. D** — *Applying the KVL sign rules around a loop.* Term by term: the 6 V battery traversed + to − counts +6; the 2 kΩ resistor traversed with the current counts +(1.5)(2) = +3; the 4 kΩ resistor traversed against the current counts −(1.5)(4) = −6; the battery E traversed − to + counts −E. Sum to zero: 6 + 3 − 6 − E = 0, so E = 3 V.

15 V counts both resistor terms as positive (6 + 3 + 6); 9 V has the resistor rule backwards (6 − 3 + 6); −3 V counts the unknown battery as +E because it forgets that − to + is the negative sense.

**4. B** — *Significant figures in a product of readings.* V = IR = 0.479 mA × 2.5 kΩ = 1.1975 V, and kΩ × mA gives volts directly. A product is quoted to the significant figures of the least precise factor, here 2.5 kΩ with 2 s.f., so V = 1.2 V.

1.1975 V keeps every calculator digit, claiming 5 s.f. from a 2 s.f. resistance; 1.20 V and 1.198 V quote 3 and 4 s.f., matching the ammeter rather than the least precise reading.

**5. D** — *Sign of a shared branch in two loop equations.* The p.d. across a resistor is positive when it is traversed in the direction of its current and negative when traversed against it. Loop 1 runs through R5 along I1 and loop 2 runs through it the other way, so the same physical drop I1·R5 enters the two equations with opposite signs.

I1 is one current with one direction and does not change between loops; a resistance is never negative; both equations contain IR products and emfs, so both are KVL loop equations.
