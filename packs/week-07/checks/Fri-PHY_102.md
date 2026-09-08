# Friday — PHY_102 nightly check

*Numerical work on power in an A.C. circuit.*
*12 questions, straight after the hour. Score out of 12.*

**1.** A 15 Ω resistor is in series with a 159 μF capacitor across a 150 V rms, 50 Hz supply. Calculate the rms current.
A. 10 A
B. 6.0 A
C. 4.3 A
D. 7.5 A

**2.** A series circuit has R = 8.0 Ω, X_L = 22 Ω and X_C = 16 Ω. Calculate its impedance.
A. 10 Ω
B. 46 Ω
C. 39 Ω
D. 14 Ω

**3.** A series circuit has R = 9.0 Ω, X_L = 4.0 Ω and X_C = 16 Ω. Calculate its power factor and state whether the current leads or lags.
A. 0.60 lagging
B. 0.80 leading
C. 0.60 leading
D. 1.67 leading

**4.** A series circuit carries 3.0 A rms through X_L = 30 Ω and X_C = 10 Ω. Calculate the net reactive power.
A. 270 var
B. 60 var
C. 360 var
D. 180 var

**5.** A 12 Ω resistor is in series with a reactance of 16 Ω across a 100 V rms supply. Calculate the real power dissipated.
A. 833 W
B. 500 W
C. 400 W
D. 300 W

**6.** R = 20 Ω, L = 0.10 H and C = 40 μF are in series across a 120 V rms supply whose frequency is set to the resonant frequency. Calculate the rms current.
A. 2.4 A
B. 6.0 A
C. 1.2 A
D. 0 A

**7.** A 10 Ω resistor is connected across v(t) = 50 sin(100πt) V, with t in seconds. Calculate the instantaneous power at t = 1.0 ms.
A. 24 W
B. 125 W
C. 226 W
D. 7.5 × 10⁻³ W

**8.** A series RLC circuit is driven at a frequency below its resonant frequency. Compared with resonance, what are its power factor and the phase of its current?
A. Less than 1, current lagging
B. Less than 1, current leading
C. Equal to 1, current in phase
D. Greater than 1, current leading

**9.** A coil of resistance 24 Ω and inductance 57.3 mH is connected across a 120 V rms, 50 Hz supply. Calculate the rms current, the power factor and the real power.
A. 5.00 A, 1.00, 600 W
B. 4.00 A, 0.60 lagging, 288 W
C. 4.00 A, 0.80 lagging, 384 W
D. 4.00 A, 0.80 lagging, 480 W

**10.** A workshop draws 6.0 kW from a 240 V rms, 50 Hz supply at a power factor of 0.75 lagging. Calculate the capacitance that must be connected in parallel to raise the power factor to unity.
A. 1840 μF
B. 442 μF
C. 332 μF
D. 292 μF

**11.** R = 25 Ω, L = 0.50 H and C = 8.0 μF are in series across a 100 V rms, 50 Hz supply. Calculate the impedance and the real power dissipated.
A. 242 Ω, 4.3 W
B. 556 Ω, 0.81 W
C. 242 Ω, 400 W
D. 266 Ω, 3.5 W

**12.** For a series RL circuit on a 200 V rms supply, one student computes the real power as V²/R using 200 V, and another as I²R. Which statement is correct?
A. V²/R is correct, because the supply voltage is what drives the resistor
B. Both are correct, since P = V²/R = I²R in any circuit
C. I²R is correct, because only IR of the 200 V sits across the resistance
D. Neither is correct, because the real power of an RL circuit is V I

---

## Answers

**1. B** — *Current in a series RC circuit via X_C = 1/(2πfC).* X_C = 1/(2πfC) = 1/(2π × 50 × 159 × 10⁻⁶) = 1/0.0500 = 20.0 Ω. Z = √(R² + X_C²) = √(15² + 20²) = √625 = 25 Ω. I = V/Z = 150/25 = 6.0 A.

10 A is 150/15, ignoring the capacitor; 7.5 A is 150/20, ignoring the resistor; 4.3 A is 150/(15 + 20), adding R and X arithmetically instead of in quadrature.

**2. A** — *Impedance of a series RLC circuit with reactances subtracting.* The two reactances are 180° apart, so they subtract: X = X_L − X_C = 22 − 16 = 6.0 Ω. Then Z = √(R² + X²) = √(64 + 36) = √100 = 10 Ω.

39 Ω adds the reactances before squaring, √(8² + 38²); 46 Ω adds all three arithmetically; 14 Ω adds R and the net X arithmetically instead of in quadrature.

**3. C** — *Power factor cos φ = R/Z with leading or lagging.* X = X_L − X_C = 4.0 − 16 = −12 Ω. The net reactance is capacitive, so the current leads. Z = √(9² + 12²) = √225 = 15 Ω and PF = R/Z = 9/15 = 0.60 leading.

0.60 lagging has the right number but ignores the sign of X: with X_C larger than X_L the circuit is capacitive, not inductive; 0.80 is X/Z = 12/15, the reactive factor sin φ; 1.67 is Z/R, upside down, and no power factor can exceed 1.

**4. D** — *Net reactive power Q = I²(X_L − X_C).* The inductor absorbs I²X_L = (9)(30) = 270 var while the capacitor supplies I²X_C = (9)(10) = 90 var, and the two swap energy with each other, so they subtract: Q = I²(X_L − X_C) = 9 × 20 = 180 var, inductive.

360 var adds the two reactive powers instead of subtracting; 270 var is the inductor's share alone, forgetting the capacitor; 60 var is I × X without squaring the current.

**5. D** — *Real power P = I²R in a series circuit.* Z = √(12² + 16²) = 20 Ω, I = 100/20 = 5.0 A, and only the resistance dissipates: P = I²R = (25)(12) = 300 W. Check: V_R = IR = 60 V and V_R²/R = 3600/12 = 300 W.

833 W is V²/R with the full supply voltage, but only 60 V of the 100 V sits across R; 500 W is V I = S, the apparent power, with the power factor 0.60 forgotten; 400 W is I²X = 25 × 16, the reactive power in var.

**6. B** — *Current at series resonance, Z = R.* ω₀ = 1/√(LC) = 1/√(0.10 × 40 × 10⁻⁶) = 1/√(4 × 10⁻⁶) = 500 rad/s, at which X_L = ω₀L = 50 Ω and X_C = 1/(ω₀C) = 50 Ω. They cancel, Z = R = 20 Ω, and I = 120/20 = 6.0 A, the maximum this circuit can draw.

1.2 A adds the two reactances instead of cancelling them, giving Z = √(20² + 100²) = 102 Ω; 2.4 A is 120/X_L, using one reactance as the impedance; 0 A confuses the cancelling of X_L and X_C with the circuit being open.

**7. A** — *Instantaneous power at a given time.* At t = 1.0 × 10⁻³ s the phase is ωt = 100π × 0.001 = 0.1π rad = 18°, so v = 50 sin 18° = 50 × 0.309 = 15.45 V. Then p = v²/R = 15.45²/10 = 23.9 W ≈ 24 W (equivalently i = v/R = 1.545 A and p = vi).

125 W is the average power V₀²/2R, not the value at this instant; 226 W uses cos in place of sin (v = 47.6 V); 7.5 × 10⁻³ W comes from a calculator left in degree mode, evaluating sin(0.314°) instead of sin(0.314 rad).

**8. B** — *Power factor and phase of a series RLC circuit off resonance.* Below resonance ω is small, so X_L = ωL is small and X_C = 1/ωC is large: the net reactance is capacitive, Z exceeds R, PF = R/Z drops below 1, and the current leads the voltage.

Lagging would need X_L greater than X_C, which happens above resonance; PF = 1 with the current in phase is the resonance condition itself; a power factor greater than 1 is impossible because R can never exceed Z.

**9. C** — *Current, power factor and real power of a series RL circuit.* X_L = 2πfL = 2π(50)(0.0573) = 18.0 Ω, so Z = √(24² + 18²) = 30.0 Ω, I = 120/30.0 = 4.00 A, PF = R/Z = 0.800 lagging and P = I²R = (16)(24) = 384 W, the same as V I cos φ.

5.00 A with 600 W ignores the reactance and uses V/R and V²/R; 288 W uses sin φ = 0.600, which gives the reactive power in var; 480 W is V I = S, the apparent power, with the power factor left out.

**10. D** — *Power factor correction with a parallel capacitor.* S = P/PF = 6000/0.75 = 8000 VA and Q = √(S² − P²) = 5292 var lagging. The capacitor must supply all of that, so C = Q/(ωV²) = 5292/[(314.2)(240²)] = 2.92 × 10⁻⁴ F = 292 μF. The real power is unchanged, so the line current drops from 33.3 A to 25.0 A.

1840 μF uses f = 50 in place of ω = 314; 442 μF puts the apparent power S into the formula instead of Q; 332 μF puts the real power P there, which a capacitor never has to supply.

**11. A** — *Series RLC power off resonance.* X_L = 2πfL = 157 Ω and X_C = 1/(2πfC) = 398 Ω, so the net reactance is 157 − 398 = −241 Ω, capacitive, and Z = √(25² + 241²) = 242 Ω. Then I = 100/242 = 0.413 A and P = I²R = (0.413)²(25) = 4.3 W.

556 Ω adds the two reactances instead of subtracting them; 400 W is V²/R, which would need all 100 V across R when in fact only 10.3 V is; 266 Ω adds R and X arithmetically rather than in quadrature.

**12. C** — *Why P = I²R is safe and V²/R with the supply voltage is not.* In a series circuit the same current flows through every element and only R dissipates energy, so P = I²R is always right. The supply voltage divides between R and X_L in quadrature, so the resistor carries only V_R = IR, and putting 200 V into V²/R overstates the power by the factor (Z/R)².

V²/R is right only with V_R, or with the supply voltage when the circuit is purely resistive or at resonance; the two forms agree only when Z = R; and V I is the apparent power S, not the real power.
