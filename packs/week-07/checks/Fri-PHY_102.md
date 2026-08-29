# Friday — PHY_102 nightly check

*Numerical work on power in an A.C. circuit: substituting into X_L = 2πfL and X_C = 1/(2πfC), computing Z, I and cos φ, then P = V_rms I_rms cos φ = I_rms²R with Q and S, checking by S² = P² + Q², and doing power-factor correction, resonance and instantaneous-power calculations.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**Questions 1–3 refer to this circuit.** A coil of resistance 9.0 Ω and inductance 38.2 mH is connected across a 120 V rms, 50 Hz supply.

**1.** The rms current drawn is:
a) 13.3 A
b) 8.00 A
c) 5.71 A
d) 10.0 A

**2.** The real power consumed is:
a) 960 W
b) 1600 W
c) 768 W
d) 576 W

**3.** The power factor is:
a) 0.60 lagging
b) 0.80 lagging
c) 0.60 leading
d) 1.67

**Questions 4–6 refer to this circuit.** A series circuit has R = 16 Ω, X_L = 30 Ω and X_C = 18 Ω across a 100 V rms supply.

**4.** The impedance is:
a) 64 Ω
b) 50.6 Ω
c) 20 Ω
d) 12 Ω

**5.** The real power consumed is:
a) 400 W
b) 500 W
c) 300 W
d) 625 W

**6.** The circuit is:
a) capacitive, with the current leading the supply voltage by 36.9°
b) inductive, with the current lagging the supply voltage by 36.9°
c) inductive, with the current lagging the supply voltage by 53.1°
d) at resonance, since R is greater than the net reactance

**Questions 7–8 refer to this circuit.** R = 20 Ω, L = 0.50 H and C = 8.0 μF in series across a 60 V rms supply, driven at the resonant frequency.

**7.** The current is:
a) 0 A
b) 0.12 A
c) 0.24 A
d) 3.00 A

**8.** The rms voltage across the inductor is:
a) 60 V
b) 0 V
c) 750 V
d) 250 V

**9. (explain why)** A coil of resistance 40 Ω and inductance 95.5 mH is connected across a 240 V rms, 50 Hz supply. Find X_L, Z, the rms current, the power factor, and P, Q and S. Verify P and Q by a second route and check the power triangle.

**10. (explain why)** A workshop draws 9.6 kW from a 240 V rms, 50 Hz supply at a power factor of 0.60 lagging. Find the apparent power, the line current and the reactive power; then find the parallel capacitance that would raise the power factor to unity, the new line current, and the fractional change in the I²R loss in the feeder cable.

**11. (explain why)** A 110 V rms, 50 Hz supply is connected first across a 22 Ω resistor and then across a pure inductor of reactance 22 Ω. For each, write p(t), and give its peak value, its average value and its ripple frequency. Explain why the two averages differ although the two rms currents are the same.

**12. (explain why)** A student analysing a series circuit with R = 8.0 Ω and X_L = 6.0 Ω on a 100 V rms supply writes: "Z = 8 + 6 = 14 Ω, so I = 100/14 = 7.14 A and P = (100)(7.14) = 714 W." Identify both errors, give the correct values of Z, I, PF, P, Q and S, and state the single check that would have exposed the mistake without redoing the whole calculation.

---

## Answers

**1. b** — *Compute the reactance first, then combine with R in quadrature.* X_L = 2πfL = 2π(50)(0.0382) = 12.0 Ω; Z = √(9² + 12²) = √(81 + 144) = √225 = 15.0 Ω; I = 120/15.0 = **8.00 A**. (a) is 120/9, ignoring the reactance altogether. (c) is 120/(9 + 12), adding R and X arithmetically instead of in quadrature. (d) is 120/12, ignoring the resistance.

**2. d** — *P = I²R; only the resistance dissipates.* P = (8.00)²(9.0) = **576 W**, and the check P = VI cos φ = (120)(8.00)(0.600) = 576 W agrees. (a) is S = VI = 960 VA, quoted as watts — the power factor has been left out. (b) is V²/R = 14 400/9, using the whole supply voltage across R although only V_R = IR = 72 V is there. (c) is I²X_L = 768 var, the **reactive** power, which nothing consumes.

**3. a** — *PF = cos φ = R/Z, and an inductive circuit lags.* 9/15 = **0.600**, and since the reactance is inductive the current lags the voltage, so it is 0.600 **lagging**. (b) is sin φ = X/Z = 12/15, the reactive factor. (c) has the right number but the wrong sense — leading would require a net capacitive reactance. (d) is Z/R = 15/9, an inverted ratio that is impossible: a power factor above 1 would mean more watts consumed than volt-amperes drawn.

**4. c** — *Net reactance first: X_L and X_C subtract, then combine with R in quadrature.* X = 30 − 18 = 12 Ω, so Z = √(16² + 12²) = √(256 + 144) = √400 = **20 Ω**. (a) adds all three as though they were series resistances. (b) is √(16² + 48²) = 50.6 Ω, adding the two reactances instead of subtracting them. (d) is the net reactance alone, ignoring R.

**5. a** — *P = I²R.* I = 100/20 = 5.00 A, so P = (25.0)(16) = **400 W**; check by VI cos φ = (100)(5.00)(0.800) = 400 W. (b) is S = VI = 500 VA with the power factor omitted. (c) is I²X = (25.0)(12) = 300 var, the reactive power. (d) is V²/R = 10 000/16, again using the supply voltage across R rather than V_R = 80 V (and 80²/16 = 400 W ✔).

**6. b** — *X_L > X_C makes it inductive; tan φ = X/R fixes the angle.* The net reactance is +12 Ω, so the current **lags**, and tan φ = 12/16 = 0.750 gives φ = **36.9°** (cos φ = 0.800 ✔). (a) has the character backwards, which would need X_C > X_L. (c) has the character right but inverts the tangent, using tan φ = R/X = 16/12 to get 53.1°. (d) confuses "resistance dominates the net reactance" with resonance; resonance requires X_L = X_C exactly, and here they differ by 12 Ω.

**7. d** — *At resonance the reactances cancel and Z falls to R.* ω₀ = 1/√(LC) = 1/√[(0.50)(8.0 × 10⁻⁶)] = 1/√(4.0 × 10⁻⁶) = 500 rad s⁻¹, so X_L = X_C = 250 Ω and Z = R = 20 Ω, giving I = 60/20 = **3.00 A** — a maximum. (a) is the parallel (rejector) resonance result, where the impedance is a maximum, applied to a series circuit. (b) is 60/√(20² + 500²), adding the reactances instead of subtracting them. (c) is 60/250, using X_L alone as the impedance.

**8. c** — *At resonance V_L and V_C are equal, opposite, and each may greatly exceed the supply.* V_L = I X_L = (3.00)(250) = **750 V**, and V_C is the same 750 V in antiphase, so they cancel in the vector sum and the supply still sees only V_R = (3.00)(20) = 60 V ✔. The factor 750/60 = 12.5 is the Q-factor, X_L/R = 250/20. (a) assumes no drop can exceed the supply. (b) confuses "V_L and V_C cancel each other" with "each is zero". (d) quotes the reactance in ohms as though it were a voltage.

**9.** *Concept: the full power set for a series RL circuit, cross-checked two ways.* **Reactance**: X_L = 2πfL = 2π(50)(0.0955) = **30.0 Ω**. **Impedance**: Z = √(40² + 30²) = √(1600 + 900) = √2500 = **50.0 Ω**. **Current**: I = V/Z = 240/50.0 = **4.80 A**. **Power factor**: cos φ = R/Z = 40/50 = **0.800 lagging** (φ = 36.9°, current lagging, since the reactance is inductive). **Real power**: P = VI cos φ = (240)(4.80)(0.800) = **921.6 W**; second route, P = I²R = (23.04)(40) = 921.6 W ✔. **Reactive power**: Q = VI sin φ = (240)(4.80)(0.600) = **691.2 var** inductive; second route, Q = I²X_L = (23.04)(30) = 691.2 var ✔. **Apparent power**: S = VI = (240)(4.80) = **1152 VA**, and also I²Z = (23.04)(50) = 1152 VA ✔. **Triangle check**: P² + Q² = 921.6² + 691.2² = 849 346.6 + 477 757.4 = 1 327 104 = 1152² = S² ✔. Note that V²/R = 57 600/40 = 1440 W is **not** the answer — only V_R = IR = 192 V sits across the resistance, and 192²/40 = 921.6 W ✔.

**10.** *Concept: power-factor correction changes Q and the current, never P.* **Apparent power**: S = P/PF = 9600/0.600 = **16 000 VA = 16.0 kVA**. **Line current**: I = S/V = 16 000/240 = **66.7 A**. **Reactive power**: sin φ = 0.800, so Q = S sin φ = (16 000)(0.800) = **12 800 var = 12.8 kvar**, lagging. **Correction to unity**: the capacitor must supply all of it, Q_C = 12 800 var, so **C = Q_C/(ωV²) = 12 800/[(314.16)(240²)] = 12 800/18 096 000 = 7.07 × 10⁻⁴ F ≈ 707 μF**. (Check: I_C = ωCV = (314.16)(7.07 × 10⁻⁴)(240) = 53.3 A, and (240)(53.3) = 12 800 var ✔ — note this large current circulates only between the capacitor and the load, not in the feeder.) **New line current**: with PF = 1 the supply carries only the in-phase component, I = P/V = 9600/240 = **40.0 A**, down from 66.7 A. **Feeder loss**: it goes as I², so it falls to (40.0/66.7)² = **0.360**, a **64 % reduction**, while the workshop still consumes exactly 9.6 kW. The transformer requirement drops from 16.0 kVA to 9.6 kVA.

**11.** *Concept: the same rms current can carry all the power or none of it, depending on φ.* **Resistor.** I = 110/22 = 5.00 A rms; V₀ = √2(110) = 155.6 V and I₀ = √2(5.00) = 7.071 A, so V₀I₀ = 1100 W. With v and i in phase, p = V₀I₀ sin²ωt = **1100 sin²(314.2 t) = 550[1 − cos(628.3 t)] W**. **Peak = 1100 W**, minimum = 0, **average = 550 W** (= V_rms I_rms = (110)(5.00) ✔ = I²R = (25.0)(22) ✔), **ripple frequency = 2f = 100 Hz**, and p is **never negative**. **Inductor.** X_L = 22 Ω gives the same I = 5.00 A rms, but the current lags by 90°, so i = −I₀ cos ωt and p = −V₀I₀ sin ωt cos ωt = −(V₀I₀/2) sin 2ωt = **−550 sin(628.3 t) W**. **Peak = ±550 W**, **average = 0**, ripple frequency again **100 Hz**, and p is negative for exactly half of every cycle. **Why the averages differ**: P = V_rms I_rms cos φ, and the two circuits differ only in φ — 0° for the resistor (cos φ = 1) and 90° for the inductor (cos φ = 0). In the resistor v and i reverse together, so their product is positive throughout and every joule delivered becomes heat. In the inductor they are a quarter-cycle apart, so the positive and negative areas are exactly equal: the energy taken to build the field (peak ½LI₀² = 550/ω = 1.75 J per quarter-cycle) is handed straight back. Identical rms current, identical rms voltage, 550 W versus 0 W.

**12.** *Concept: reactance adds in quadrature, and VI is apparent power, not real power.* **Error 1** — Z was found by adding R and X_L **arithmetically**. They are 90° apart, so Z = √(R² + X_L²) = √(64 + 36) = √100 = **10.0 Ω**, not 14 Ω. **Error 2** — the power factor was omitted: (100)(7.14) is an **apparent** power in VA, and real power requires the factor cos φ. **Correct values**: Z = **10.0 Ω**; I = 100/10.0 = **10.0 A**; cos φ = R/Z = 8/10 = **0.800 lagging** (φ = 36.9°); P = VI cos φ = (100)(10.0)(0.800) = **800 W**; Q = VI sin φ = (100)(10.0)(0.600) = **600 var**; S = VI = **1000 VA**; and S² = 800² + 600² = 640 000 + 360 000 = 1 000 000 = 1000² ✔. **The one check that exposes it**: the real power must also equal **I²R**. The student's own numbers give I²R = (7.14)²(8.0) = 408 W, nowhere near the 714 W claimed — two routes to the same quantity disagreeing by three-quarters. (Equivalently, P can never exceed VI cos φ ≤ VI, and the claim P = VI asserts a power factor of 1 in a circuit that plainly has 6 Ω of reactance.) Computing P by both VI cos φ and I²R, and confirming S² = P² + Q², catches essentially every slip of this kind in one line each.
