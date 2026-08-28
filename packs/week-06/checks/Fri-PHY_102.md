# Friday — PHY_102 nightly check

*Numerical A.C. work: converting between peak and rms values of current and voltage, substituting into X_L = 2πfL and X_C = 1/(2πfC) with milli- and micro- prefixes, computing the impedance, current, component voltages and phase angle of a series RLC circuit, finding the resonant frequency, and calculating average, apparent and maximum power.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** A mains socket is rated 220 V. The maximum instantaneous voltage it delivers is:
a) 156 V
b) 311 V
c) 622 V
d) 220 V

**Questions 2 and 3 refer to this circuit.** An AC generator of maximum voltage 24.0 V and frequency 60.0 Hz is connected across a resistor R = 265 Ω.

**2.** The rms current in the circuit is:
a) 90.6 mA
b) 45.3 mA
c) 128 mA
d) 64.0 mA

**3.** The **average** power dissipated in the resistor is:
a) 1.09 W
b) 2.17 W
c) 1.54 W
d) 0.544 W

**4.** A coil of inductance 40 mH is connected to a 50 Hz supply. Its reactance is:
a) 2.00 Ω
b) 12 570 Ω
c) 12.6 Ω
d) 0.0796 Ω

**5.** A 25 μF capacitor is connected to the same 50 Hz supply. Its reactance is:
a) 800 Ω
b) 0.00785 Ω
c) 1.27 × 10⁻⁴ Ω
d) 127 Ω

**Questions 6–8 refer to this circuit.** A series RLC circuit has R = 12 Ω, X_L = 20 Ω and X_C = 4 Ω, driven at 120 V rms.

**6.** The impedance of the circuit is:
a) 36 Ω
b) 20 Ω
c) 28 Ω
d) 26.8 Ω

**7.** The phase relationship between current and supply voltage is:
a) the current leads the voltage by 53.1°
b) the current lags the voltage by 36.9°
c) the current lags the voltage by 53.1°
d) the current lags the voltage by 90°

**8.** The average power drawn from the supply is:
a) 432 W
b) 720 W
c) 259 W
d) 576 W

**9. (explain why)** An AC generator of maximum voltage 170 V and frequency 60.0 Hz supplies a 25.0 Ω resistor. Find V_rms, I_max, I_rms, the average power and the maximum instantaneous power, and show explicitly that P_max = 2P_av. State which of your answers depend on the 60.0 Hz and why.

**10. (explain why)** A series circuit of R = 40 Ω, L = 0.20 H and C = 30 μF is connected to a 200 V rms, 50 Hz supply. Find X_L, X_C, Z, the current, all three component voltages and the phase angle (say whether the current leads or lags), then verify the supply voltage by vector addition and the average power by two independent routes.

**11. (explain why)** A series circuit has R = 20 Ω, L = 0.32 H and C = 20 μF across a 60 V rms supply of variable frequency. Find the resonant frequency, and the current, impedance, power factor and average power at resonance. Compare the current with its value at 50 Hz, and find the voltage across the inductor at resonance — commenting on its size relative to the supply.

**12. (explain why)** For R = 15 Ω, L = 50 mH, C = 100 μF on a 240 V rms, 50 Hz supply, a student reports X_L = 2.5 Ω, X_C = 200 Ω, Z = 217.5 Ω and I = 1.10 A. Identify **each** error, name it, and give the correct values of X_L, X_C, Z, I and the average power.

---

## Answers

**1. b** — *Quoted supply voltages are rms; V_max = √2 V_rms.* V_max = 220 × 1.414 = **311 V**. (a) divides by √2 instead of multiplying, 220/1.414 = 156 V, which would make the peak *smaller* than the effective value — impossible for any waveform. (c) is the **peak-to-peak** value, 2V_max = 622 V, the crest-to-trough swing rather than the peak measured from zero. (d) assumes peak and rms are the same number, i.e. forgets that the waveform varies at all.

**2. d** — *Convert to rms exactly once, at either end of the calculation.* V_rms = 24.0/1.414 = 16.97 V, so I_rms = 16.97/265 = **0.0640 A = 64.0 mA**. (Or I_max = 24.0/265 = 90.6 mA, then ÷ √2 → 64.0 mA.) (a) is I_max, the peak current — the √2 was never applied. (b) divides the peak by 2 instead of by √2. (c) multiplies by √2 instead of dividing, applying the conversion in the wrong direction.

**3. a** — *P_av = V_rms I_rms, both quantities rms.* (16.97)(0.0640) = **1.09 W**; check I_rms²R = (0.0640)²(265) = 1.087 W ✔ and V_rms²/R = 288.0/265 = 1.087 W ✔. (b) is P_max = V_max I_max = (24.0)(0.0906) = 2.17 W, the peak instantaneous power, which is exactly 2P_av. (c) mixes the two families, V_max × I_rms = (24.0)(0.0640) = 1.54 W — a quantity with no meaning. (d) halves the correct average a second time, as though the ½ in ½V_max I_max applied on top of the rms conversion.

**4. c** — *X_L = 2πfL, with L in henries.* 40 mH = 0.040 H, so X_L = 2π(50)(0.040) = **12.6 Ω**. (a) uses f in place of ω = 2πf: 50 × 0.040 = 2.00 Ω, a factor 6.28 too small. (b) leaves L in millihenries: 2π(50)(40) = 12 570 Ω, a thousand times too big. (d) takes the reciprocal, applying the capacitor formula to an inductor.

**5. d** — *X_C = 1/(2πfC), with C in farads.* 25 μF = 25 × 10⁻⁶ F, so 2πfC = 314.16 × 25 × 10⁻⁶ = 7.854 × 10⁻³ and X_C = **127 Ω**. (a) drops the 2π: 1/(50 × 25 × 10⁻⁶) = 800 Ω. (b) is the intermediate product 2πfC = 0.00785 Ω — the formula used without inverting it. (c) leaves C in microfarads: 1/(314.16 × 25) = 1.27 × 10⁻⁴ Ω, a million times too small. A sanity check catches all three: a few tens of microfarads at mains frequency is worth of order a hundred ohms, never milliohms or megohms.

**6. b** — *Impedance adds in quadrature, and it is the **difference** of the reactances that enters.* X = X_L − X_C = 20 − 4 = 16 Ω, so Z = √(12² + 16²) = √(144 + 256) = √400 = **20 Ω**. (a) adds all three arithmetically, 12 + 20 + 4 = 36 Ω, ignoring phase entirely. (c) gets the net reactance right but then adds it to R arithmetically, 12 + 16 = 28 Ω. (d) **adds** the reactances instead of subtracting them: √(12² + 24²) = 26.8 Ω, forgetting that V_L and V_C are in direct opposition.

**7. c** — *tan φ = (X_L − X_C)/R, and a positive net reactance means a lagging current.* tan φ = 16/12 = 1.333, φ = **53.1°**, and since X_L > X_C the circuit is inductive, so the current **lags** the supply voltage. (a) has the correct magnitude with the character reversed — that is the capacitive case, X_C > X_L. (b) inverts the ratio, arctan(12/16) = 36.9°, i.e. uses tan φ = R/X, which measures the angle from the reactance axis instead of from the voltage. (d) ignores R, which is what would make the angle a full 90°.

**8. a** — *P_av = VI cos φ, with cos φ = R/Z; equivalently P = I²R.* I = 120/20 = 6.00 A and cos φ = 12/20 = 0.600, so P = (120)(6.00)(0.600) = **432 W**; check I²R = (6.00)²(12) = 432 W ✔. (b) is the **apparent** power VI = 720 VA, the power factor omitted — the answer you get by treating the circuit as if it were DC. (c) squares the power factor, 720 × 0.36 = 259 W. (d) uses the net reactance in place of the resistance, I²X = (36.0)(16) = 576 W; reactance carries no average power at all.

**9.** *Concept: peak-to-rms conversion in a purely resistive AC circuit, and the factor of two between average and peak power.* **V_rms** = V_max/√2 = 170/1.4142 = **120 V**. **I_max** = V_max/R = 170/25.0 = **6.80 A**. **I_rms** = I_max/√2 = 6.80/1.4142 = **4.81 A** (equally, V_rms/R = 120/25.0 = 4.81 A — the conversion may be done before or after dividing by R, but only **once**). **Average power**: P_av = V_rms I_rms = (120)(4.81) = **578 W**; cross-checks I_rms²R = (4.81)²(25.0) = 578 W, and exactly V_max²/2R = 28 900/50.0 = 578 W. **Maximum instantaneous power**: p(t) = i²R peaks when i = I_max, so P_max = I_max²R = (6.80)²(25.0) = **1156 W**, which is also V_max I_max = (170)(6.80). And **2P_av = 2(578) = 1156 W ✔**. The reason is that p(t) = V_max I_max sin²ωt oscillates between 0 and V_max I_max while sin²ωt averages to ½ — the same ½ that produced the √2. **Frequency**: none of these answers depends on the 60.0 Hz. In a purely resistive circuit there is no reactance, so Z = R at every frequency; f would enter only through X_L = 2πfL or X_C = 1/(2πfC), and here L = C = 0. (It does fix how *often* the power peaks — 120 times a second, twice per cycle — but not its average or peak value.)

**10.** *Concept: the complete series RLC calculation, checked two ways.* **ω = 2πf = 2π(50) = 314.16 rad s⁻¹.** **X_L = ωL = (314.16)(0.20) = 62.8 Ω.** **X_C = 1/(ωC) = 1/[(314.16)(30 × 10⁻⁶)] = 1/(9.425 × 10⁻³) = 106.1 Ω.** Net **X = 62.8 − 106.1 = −43.3 Ω**, negative, so the circuit is **capacitive**. **Z = √(40² + 43.3²) = √(1600 + 1872) = √3472 = 58.9 Ω.** **I = V/Z = 200/58.9 = 3.39 A**, common to all three components. **Component voltages**: V_R = (3.39)(40) = **136 V**; V_L = (3.39)(62.8) = **213 V**; V_C = (3.39)(106.1) = **360 V**. **Vector check**: √(136² + (213 − 360)²) = √(18 500 + 21 600) = √40 100 = **200 V ✔**, the supply — while the arithmetic sum, 709 V, is meaningless. Note V_C alone is nearly twice the supply, which is legitimate because V_L opposes it directly. **Phase**: tan φ = −43.3/40 = −1.082, so φ = **−47.2°**: the current **leads** the supply voltage by 47.2°, as a capacitive circuit must. **Average power, route 1**: cos φ = R/Z = 40/58.9 = 0.679, so P = VI cos φ = (200)(3.39)(0.679) = **461 W**. **Route 2**: P = I²R = (3.39)²(40) = (11.5)(40) = **461 W ✔**. All the power is in R; L and C between them return everything they take. (For reference f₀ = 1/(2π√(0.20 × 30 × 10⁻⁶)) = 65.0 Hz, and since 50 Hz < 65.0 Hz the circuit must indeed be capacitive — an independent confirmation of the sign of φ.)

**11.** *Concept: resonance — where the reactances cancel, the current maximises, and the component voltages can far exceed the supply.* **f₀ = 1/(2π√(LC))**: LC = (0.32)(20 × 10⁻⁶) = 6.4 × 10⁻⁶, √(LC) = 2.530 × 10⁻³, so f₀ = 1/(2π × 2.530 × 10⁻³) = 1/0.015895 = **62.9 Hz**. **At resonance**: ω₀ = 2π(62.9) = 395.3 rad s⁻¹, X_L = (395.3)(0.32) = 126.5 Ω and X_C = 1/[(395.3)(20 × 10⁻⁶)] = 126.5 Ω ✔ — equal, so the net reactance is zero, **Z = R = 20.0 Ω** (its minimum), **I = 60/20.0 = 3.00 A** (its maximum), **φ = 0**, **power factor = 1**, and **P = VI = (60)(3.00) = 180 W** = I²R = (9.00)(20.0) ✔. **At 50 Hz** instead: X_L = (314.16)(0.32) = 100.5 Ω, X_C = 1/[(314.16)(20 × 10⁻⁶)] = 159.2 Ω, X = −58.6 Ω, Z = √(400 + 3437) = 61.9 Ω, so **I = 60/61.9 = 0.969 A** — under a third of the resonant current, and the circuit is capacitive because 50 Hz lies below f₀. **Voltage across L at resonance**: V_L = IX_L = (3.00)(126.5) = **380 V**, more than **six times** the 60 V supply; V_C is the identical 380 V, exactly opposite, so their vector sum is zero and KVL is satisfied by V_R = (3.00)(20.0) = 60 V alone. The multiplying factor is Q = X_L/R = 126.5/20.0 = 6.3. This is the practical hazard of a lightly damped series circuit at resonance: components rated for the supply voltage can be destroyed by the internal voltages.

**12.** *Concept: three separable substitution errors — f used in place of ω, twice, and then arithmetic addition of impedances.* **Error 1 — the 2π omitted in X_L.** The student wrote X_L = fL = (50)(0.050) = 2.5 Ω. The formula is X_L = 2πfL, so **X_L = 2π(50)(0.050) = (314.16)(0.050) = 15.7 Ω**, a factor 2π = 6.28 larger. **Error 2 — the 2π omitted in X_C.** The student wrote X_C = 1/(fC) = 1/[(50)(100 × 10⁻⁶)] = 1/0.005 = 200 Ω. Correctly, **X_C = 1/(2πfC) = 1/[(314.16)(100 × 10⁻⁶)] = 1/0.031416 = 31.8 Ω** — here the same 6.28 makes the answer *smaller*, because the 2π sits in the denominator. Note that the prefixes themselves were converted correctly; the sole fault is f for ω. **Error 3 — impedances added arithmetically.** The student wrote Z = R + X_L + X_C = 15 + 2.5 + 200 = 217.5 Ω. Impedance adds **in quadrature**, and the two reactances **subtract**: X = X_L − X_C = 15.7 − 31.8 = −16.1 Ω, so **Z = √(15² + 16.1²) = √(225 + 260) = √485 = 22.0 Ω**. **Correct results**: X_L = **15.7 Ω**, X_C = **31.8 Ω**, Z = **22.0 Ω**, **I = 240/22.0 = 10.9 A** (not 1.10 A — the wrongly inflated Z throttled the current by a factor of ten), φ = arctan(−16.1/15) = **−47.1°**, current **leading**, so the circuit is capacitive. **Average power** = I²R = (10.9)²(15) = (118.8)(15) = **1780 W**; check VI cos φ = (240)(10.9)(15/22.0 = 0.681) = 1780 W ✔. An order-of-magnitude check would have caught the whole thing at once: with only 15 Ω of resistance on a 240 V supply, the current cannot possibly be about 1 A unless the reactances are enormous, and 50 mH at mains frequency is worth only tens of ohms.
