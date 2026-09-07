# Thursday — PHY_108 fast-hour check

*The non-ohmic resistor practical: Ohm's law, Joule's law, the two plots and the procedure.*
*5 questions, straight after the hour. Score out of 5.*

**1.** One recorded row for a tungsten resistor is V = 12.0 V, I = 0.40 A. Before plotting P against I², complete the row: find I² and P.
A. I² = 0.80 A², P = 4.80 W
B. I² = 0.160 A², P = 30.0 W
C. I² = 0.160 A², P = 4.80 W
D. I² = 0.160 A², P = 1.92 W

**2.** A graph of P (W) against I² (A²) for an iron resistor is a straight line through (0.040 A², 1.44 W) and (0.160 A², 5.76 W). What does the gradient represent, and what is its value?
A. The resistance, 36 Ω
B. The resistance, 21.6 Ω
C. The power dissipated, 36 W
D. The conductance, 0.028 Ω

**3.** A tungsten filament has resistance 20 Ω when carrying 0.50 A. When the current is raised to 1.5 A the filament heats up and its resistance becomes 40 Ω. By what factor does the heat power dissipated increase?
A. 3
B. 9
C. 6
D. 18

**4.** A device is tested with both polarities:
+2.0 V gives +0.10 A; +4.0 V gives +0.20 A
−2.0 V gives −0.02 A; −4.0 V gives −0.04 A
Find R in each direction and say whether the device obeys Ohm's law.
A. 20 Ω and 20 Ω; ohmic
B. 20 Ω forward, 100 Ω reverse; non-ohmic
C. 20 Ω forward, 100 Ω reverse; ohmic, as each branch is straight
D. 0.05 Ω forward, 0.01 Ω reverse; non-ohmic

**5.** In the tungsten resistor experiment, why should you wait a moment after changing the supply voltage before clicking Record?
A. The filament temperature, and so its resistance, needs time to settle
B. The voltmeter needs time to charge up to the new voltage
C. The supply polarity reverses briefly after each adjustment
D. The ammeter zero error drifts until the needle rests

---

## Answers

**1. C** — *Computing I² and P = IV from a recorded row.* I² = 0.40 × 0.40 = 0.160 A². Power is computed from the recorded pair as P = IV = 0.40 × 12.0 = 4.80 W.

0.80 A² doubles I instead of squaring it; 30.0 W is V/I, which is the resistance at that point (30 Ω), not the power; 1.92 W multiplies I² by V as if V were the resistance in P = I²R.

**2. A** — *Gradient of a P against I² graph as the resistance.* Joule's law P = I²R compared with y = mx + c has y = P, x = I², so the gradient m = R. Gradient = (5.76 − 1.44)/(0.160 − 0.040) = 4.32/0.120 = 36 Ω.

21.6 Ω divides by the change in I (0.40 − 0.20 = 0.20 A) instead of the change in I²; 36 W has the right number but the gradient of P against I² is a resistance, not a power; 0.028 Ω is 1/36, the reciprocal, and a conductance would be in siemens anyway.

**3. D** — *Joule heating when both current and resistance change.* P = I²R at each state: P₁ = (0.50)² × 20 = 5.0 W and P₂ = (1.5)² × 40 = 90 W, so P₂/P₁ = 18. Tripling the current alone gives a factor of 9, and the doubled resistance gives another factor of 2.

3 treats power as proportional to I rather than I²; 9 squares the current ratio but forgets that R has also doubled; 6 multiplies 3 by 2, using I instead of I².

**4. B** — *Polarity test for Ohm's law.* Forward: R = 2.0/0.10 = 4.0/0.20 = 20 Ω. Reverse: R = 2.0/0.02 = 4.0/0.04 = 100 Ω. Ohm's law requires the resistance to be independent of both the magnitude and the polarity of the applied p.d.; here R depends on polarity, so the device is non-ohmic (it behaves like a diode).

20 Ω and 20 Ω ignores the reverse readings; 'ohmic, as each branch is straight' forgets the polarity clause, since a straight segment in one direction is not enough; 0.05 Ω and 0.01 Ω are I/V, the reciprocals.

**5. A** — *Precaution: letting a self-heating conductor settle.* The resistance of the filament depends on its temperature, and the temperature is set by the Joule heating I²R. After the voltage changes the filament takes a moment to reach its new steady temperature; a reading taken too early records a current that is still drifting, so V and I do not belong to the same steady state.

A voltmeter responds essentially instantly and does not 'charge'; a DC supply does not reverse polarity when adjusted; a zero error is a fixed offset and does not drift with time.
