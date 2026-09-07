# Friday — PHY_102 nightly check

*Numerical work on power in an A.C. circuit.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

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

**9. (show your working)** A coil of resistance 24 Ω and inductance 57.3 mH is connected across a 120 V rms, 50 Hz supply. Calculate X_L, Z, the rms current, the power factor, and P, Q and S, then check that S² = P² + Q². Show your working.

**10. (show your working)** A workshop draws 6.0 kW from a 240 V rms, 50 Hz supply at a power factor of 0.75 lagging. Calculate the apparent power, the line current and the reactive power. Then calculate the parallel capacitance that raises the power factor to unity, and the new line current. Show your working.

**11. (show your working)** R = 25 Ω, L = 0.50 H and C = 8.0 μF are in series across a 100 V rms, 50 Hz supply. Calculate X_L, X_C, Z, the rms current, the power factor and the real power. State whether the current leads or lags and whether 50 Hz is above or below resonance. Show your working.

**12. (show your working)** For a series RL circuit on a 200 V rms supply, one student calculates the real power as V²/R using 200 V, and another as I²R. Explain why the two answers differ, which one is correct, and what voltage would make the V²/R form correct.

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

**9.** *Complete power set for a series RL circuit with cross-check.* X_L = 2πfL = 2π(50)(0.0573) = 18.0 Ω. Z = √(24² + 18²) = √900 = 30.0 Ω. I = V/Z = 120/30 = 4.00 A. PF = cos φ = R/Z = 24/30 = 0.800 lagging (φ = 36.9°, inductive, so the current lags). P = V I cos φ = (120)(4.00)(0.800) = 384 W, and by the second route I²R = (16)(24) = 384 W. Q = V I sin φ = (120)(4.00)(0.600) = 288 var inductive, and I²X_L = (16)(18) = 288 var. S = V I = 480 VA. Check: 384² + 288² = 147 456 + 82 944 = 230 400 = 480².

Final answers: X_L = 18.0 Ω, Z = 30.0 Ω, I = 4.00 A, PF = 0.80 lagging, P = 384 W, Q = 288 var, S = 480 VA (accept each within 1%). V²/R = 600 W is not the real power, because only V_R = IR = 96 V sits across the resistance; a student who writes 600 W has used the wrong voltage.

**10.** *Power factor correction with a parallel capacitor.* S = P/PF = 6000/0.75 = 8000 VA, and I = S/V = 8000/240 = 33.3 A. Q = √(S² − P²) = √(8000² − 6000²) = √(28 × 10⁶) = 5292 var lagging (equivalently S sin φ with sin φ = 0.661). For unity power factor the capacitor must supply all of it: Q_C = 5292 var, so C = Q_C/(ωV²) = 5292/[(314.2)(240²)] = 5292/(1.81 × 10⁷) = 2.92 × 10⁻⁴ F = 292 μF. The real power is unchanged, so the new line current is I = P/V = 6000/240 = 25.0 A.

Final answers: S = 8.0 kVA, I = 33.3 A, Q = 5.29 kvar (accept 5.25 to 5.35), C = 292 μF (accept 285 to 300 μF), new I = 25.0 A. A correct answer must show that P stays at 6.0 kW while the current falls from 33.3 A to 25.0 A. Using f = 50 instead of ω = 314 in C = Q/(ωV²) gives 1840 μF and is wrong.

**11.** *Series RLC power off resonance.* X_L = 2πfL = (314.2)(0.50) = 157 Ω. X_C = 1/(2πfC) = 1/[(314.2)(8.0 × 10⁻⁶)] = 398 Ω. Net X = 157 − 398 = −241 Ω (capacitive), so Z = √(25² + 241²) = √(625 + 57 990) = 242 Ω. I = 100/242 = 0.413 A. PF = R/Z = 25/242 = 0.103 leading. P = I²R = (0.413)²(25) = 4.27 W. Since X_C exceeds X_L the current leads and 50 Hz is below the resonant frequency (f₀ = 1/(2π√(LC)) = 79.6 Hz).

Final answers: X_L = 157 Ω, X_C = 398 Ω, Z = 242 Ω, I = 0.41 A (accept 0.40 to 0.42), PF = 0.10 leading, P = 4.3 W (accept 4.1 to 4.4 W), current leading, below resonance. Adding the reactances to get X = 555 Ω, or using V²/R = 400 W for the power, is wrong; 400 W is what the circuit would consume only at resonance.

**12.** *Why P = I²R is safe and V²/R with the supply voltage is not.* P = V²/R assumes that the whole voltage V sits across the resistance. In a series RL circuit the supply voltage is shared between R and X_L in quadrature, so the resistor only has V_R = IR across it, which is less than 200 V. Using 200 V in V²/R therefore overestimates the power by the factor (Z/R)². P = I²R is always correct because the same current flows through every series element and only the resistance dissipates energy.

A correct answer says the supply voltage is not the voltage across R, that I²R is right, and that V²/R would be right only with V_R = IR (the resistor's own drop, or the supply voltage in a purely resistive circuit or at resonance). Saying that both formulas are always equivalent because they are in DC is wrong.
