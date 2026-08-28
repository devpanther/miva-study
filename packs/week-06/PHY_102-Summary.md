# PHY_102 — Week 6 Summary

*General Physics II · Week 6 (12–18 Oct 2026) · Topic: Nomenclature in A.C. Circuits — Peak and RMS Values of Current and Voltage, Reactance, Impedance and the Series RLC Circuit*

## The 8 most examinable things this week

1. **The sinusoidal source.** v = V_max sin ωt and i = I_max sin(ωt ∓ φ), where **ω = 2πf = 2π/T** (rad s⁻¹), f is the frequency in Hz and T the period in s. One complete cycle = one positive half-cycle + one negative half-cycle. **V_max** (the amplitude, or peak value) is the largest instantaneous value measured **from zero**; **peak-to-peak = 2V_max**.
2. **RMS is defined by equal heating, not by geometry.** The rms value of an alternating current is **the steady direct current that would dissipate the same average power in the same resistance**. For a *sinusoid only*: **I_rms = I_max/√2 = 0.707 I_max** and **V_rms = V_max/√2 = 0.707 V_max**, equivalently **I_max = √2 I_rms = 1.414 I_rms**.
3. **Where the √2 comes from.** i² = I_max² sin²ωt, and sin²ωt = ½(1 − cos 2ωt) averages to **½** over a whole cycle. So the **mean square** is I_max²/2 and its root is I_max/√2. The factor is the square root of the mean of the *square* — nothing to do with averaging the sinusoid itself.
4. **The full-cycle mean of a sinusoid is zero**; the useful average is the **rectified mean over a half-cycle**, **I_av = (2/π)I_max = 0.637 I_max**. Hence **form factor = I_rms/I_av = 0.707/0.637 = 1.11** and **peak (crest) factor = I_max/I_rms = √2 = 1.414**. Quoted mains values (220 V, 240 V) are always **rms**.
5. **Average power.** In a resistor, **P_av = I_rms²R = V_rms²/R = V_rms I_rms = ½ V_max I_max**, and the **maximum instantaneous power is P_max = V_max I_max = 2P_av**. In the general AC circuit, **P_av = V_rms I_rms cos φ**, where **cos φ = R/Z** is the power factor. **A pure inductor or capacitor dissipates zero average power** — energy stored in one quarter-cycle is returned in the next.
6. **Phase relationships, one per element** (with the *current* as reference, since the current is common in series):
 · **Resistor** — v and i **in phase**; V_R = IR.
 · **Inductor** — voltage **leads** current by **90°**, because v_L = L(di/dt) and the derivative of a sine is a cosine; **X_L = ωL = 2πfL** (Ω), rising with frequency.
 · **Capacitor** — voltage **lags** current by **90°**, because i = C(dv/dt); **X_C = 1/ωC = 1/(2πfC)** (Ω), falling with frequency.
 Mnemonic: **ELI the ICE man** — in L, E (voltage) leads I; in C, I leads E.
7. **Series RLC by vector (phasor) addition.** The **current is common**, the voltage drops are not in phase, so Kirchhoff's voltage law is applied **vectorially**:
 **V_s = √(V_R² + (V_L − V_C)²)**, **Z = √(R² + (X_L − X_C)²)**, **I = V_s/Z**, **tan φ = (X_L − X_C)/R = (V_L − V_C)/V_R**.
 **X_L > X_C → inductive**, current **lags** V, φ positive (lagging). **X_C > X_L → capacitive**, current **leads** V, φ negative (leading).
8. **Series resonance.** When **X_L = X_C**, the reactances cancel: **f₀ = 1/(2π√(LC))**, **Z = R (a minimum)**, **I = V/R (a maximum)**, **φ = 0**, **power factor = 1**, and the circuit behaves as pure resistance. V_L and V_C are then equal, opposite, and each may be **many times the supply voltage** — this is not a violation of KVL, because they cancel in the vector sum.

## Definitions of the AC quantities, stated exactly

| Quantity | Symbol | For a sinusoid | Meaning |
|---|---|---|---|
| Instantaneous value | v, i | V_max sin ωt | value at one instant |
| Peak (maximum) value | V_max, I_max | — | greatest instantaneous value, measured from zero |
| Peak-to-peak | V_pp | 2V_max | crest to trough |
| Mean over a full cycle | — | **0** | positive and negative halves cancel |
| Rectified mean (half-cycle) | V_av | (2/π)V_max = 0.637 V_max | area under a half-cycle ÷ its length |
| RMS (effective) value | V_rms | V_max/√2 = 0.707 V_max | the equivalent DC for power |
| Form factor | — | 1.11 | rms ÷ rectified mean |
| Peak factor | — | 1.414 | peak ÷ rms |

**Why rms and not the mean.** Power in a resistance goes as **i²R**, and i² is positive in both half-cycles, so it has a genuine non-zero average; the current itself averages to zero and would predict zero heating. This is why "rms" is also called the **effective** value: a 240 V rms AC supply lights a lamp exactly as brightly as a 240 V DC supply. It also explains why a **moving-coil (DC) meter reads ~0** in an AC circuit while a **moving-iron or thermal meter reads the rms value** — the second responds to i².

**Reactance is not resistance.** X_L and X_C are measured in ohms and do limit the current (V = IX), but they **dissipate no energy** — they store it and give it back. This is precisely why they enter Z at 90° to R rather than adding to it.

| | R | L | C |
|---|---|---|---|
| Opposition (Ω) | R | X_L = 2πfL | X_C = 1/(2πfC) |
| Frequency dependence | none | ∝ f | ∝ 1/f |
| Phase of V relative to I | 0° | +90° (leads) | −90° (lags) |
| Average power | I_rms²R | 0 | 0 |
| At f → 0 (DC) | R | 0 (short) | ∞ (block) |
| At f → ∞ | R | ∞ (block) | 0 (short) |

## Worked example 1 — peak, rms and power in a resistive AC circuit

*An AC generator of maximum voltage 24.0 V and frequency 60.0 Hz is connected to R = 265 Ω. Find (a) the rms voltage, (b) the rms current, (c) the average power, (d) the maximum power dissipated.*

(a) V_rms = V_max/√2 = 24.0/1.41421 = **16.97 V**.
(b) I_rms = V_rms/R = 16.97/265 = **0.0640 A = 64.0 mA**. (Equivalently I_max = 24.0/265 = 0.0906 A, then I_rms = 0.0906/1.41421 = 0.0640 A — *the same √2 must be applied once, not twice*.)
(c) P_av = V_rms I_rms = (16.97)(0.0640) = **1.09 W**. Cross-check: V_rms²/R = 288.0/265 = 1.087 W ✔ and I_rms²R = (0.0640)²(265) = 1.087 W ✔.
(d) P_max = V_max I_max = (24.0)(0.0906) = **2.17 W**, which is exactly **2P_av** — the instantaneous power in a resistor oscillates between 0 and 2P_av at twice the supply frequency, never going negative.
The 60.0 Hz is not needed for any part: in a **purely resistive** circuit nothing depends on frequency.

## Worked example 2 — full series RLC solve

*R = 30 Ω, L = 0.1 H, C = 50 μF, supplied with 100 V rms at 50 Hz. Find X_L, X_C, Z, I, the three component voltages, the phase angle and the average power.*

1. **ω = 2πf = 2π(50) = 314.16 rad s⁻¹.** (Using f = 50 here instead of ω is the single commonest error in the whole topic.)
2. **X_L = ωL = (314.16)(0.1) = 31.4 Ω.**
 **X_C = 1/(ωC) = 1/[(314.16)(50 × 10⁻⁶)] = 1/0.015708 = 63.7 Ω.** (50 μF = 50 × 10⁻⁶ F, *not* 50.)
3. **Net reactance X = X_L − X_C = 31.4 − 63.7 = −32.2 Ω** — negative, so the circuit is **capacitive**.
4. **Z = √(R² + X²) = √(30² + 32.2²) = √(900 + 1040) = √1940 = 44.0 Ω.** (Note the sign of X is irrelevant here because it is squared; it matters only for φ.)
5. **I = V_s/Z = 100/44.0 = 2.27 A** — the same current in all three components.
6. **V_R = IR = (2.27)(30) = 68.1 V; V_L = IX_L = (2.27)(31.4) = 71.3 V; V_C = IX_C = (2.27)(63.7) = 145 V.**
 Arithmetic sum = 284 V, which is nonsense. **Vector sum**: √(68.1² + (71.3 − 145)²) = √(4640 + 5360) = √10000 = **100 V ✔** — the supply, as KVL requires.
 Note **V_C = 145 V exceeds the 100 V supply**. Perfectly legal: V_L and V_C are 180° apart and cancel each other before the resultant is taken.
7. **tan φ = X/R = −32.2/30 = −1.075 → φ = −47.1°.** The current **leads** the supply voltage by **47.1°** (capacitive). Power factor cos φ = R/Z = 30/44.0 = **0.681 leading**.
8. **P_av = V_rms I_rms cos φ = (100)(2.27)(0.681) = 155 W.** Cross-check I²R = (2.27)²(30) = **155 W ✔** — all of it in the resistor; L and C dissipate nothing.
9. **Resonance for the same components**: f₀ = 1/(2π√(LC)) = 1/(2π√(0.1 × 50 × 10⁻⁶)) = 1/(2π × 2.236 × 10⁻³) = **71.2 Hz**. Since 50 Hz < 71.2 Hz the circuit is capacitive, exactly as the sign of X said. Driven at 71.2 Hz instead, Z would fall to 30 Ω and I would rise to 3.33 A.

## Worked example 3 — reading the phase angle backwards from data

*A series RLC circuit draws 4.0 A rms from a 200 V rms supply, and the current lags the voltage by 60°. Find Z, R, the net reactance and the average power.*

Z = V/I = 200/4.0 = **50 Ω**. Lagging → **inductive**, so X_L − X_C is **positive**.
R = Z cos φ = 50 cos 60° = 50(0.500) = **25 Ω**. X = Z sin φ = 50 sin 60° = 50(0.866) = **+43.3 Ω**.
Check: √(25² + 43.3²) = √(625 + 1875) = √2500 = 50 ✔.
P_av = VI cos φ = (200)(4.0)(0.500) = **400 W**; check I²R = (16.0)(25) = **400 W ✔**.
The circuit *appears* to draw VI = 800 VA, but only 400 W is real power — the other 400 var surges in and out of the reactance every cycle without being consumed.

## Commonly confused

- **Peak vs rms.** V_max = √2 V_rms (multiply) and V_rms = V_max/√2 (divide). Going the wrong way turns 240 V into 170 V instead of 339 V. Mains figures quoted anywhere are **rms**.
- **Peak vs peak-to-peak.** V_pp = 2V_max. An oscilloscope trace 6 cm tall about the axis has V_max = 3 cm worth, not 6.
- **RMS vs average.** rms = 0.707 V_max, rectified mean = 0.637 V_max, full-cycle mean = **0**. The rms is the root of the mean of the **square**; it is not any kind of average of the waveform itself.
- **ω vs f.** X_L = 2πfL, not fL; X_C = 1/(2πfC), not 1/(fC). Dropping the 2π scales every reactance by 6.28.
- **X_L vs X_C.** X_L = ωL (rises with f); X_C = 1/ωC (falls with f). Writing X_C = ωC is the standard slip and gives a number ~10⁴ times too small.
- **Prefixes.** mH = 10⁻³ H, μF = 10⁻⁶ F, and both must be converted **before** substitution. A capacitance left in μF gives a reactance a million times too small.
- **Which leads in which element.** In **L** the *voltage* leads the current; in **C** the *current* leads the voltage. Stating "the current leads in an inductor" reverses the whole circuit's character.
- **Leading vs lagging for the circuit.** X_L > X_C → inductive → current **lags**, φ > 0. X_C > X_L → capacitive → current **leads**, φ < 0. Decide from the *net* reactance, never from which component "looks bigger" on the diagram.
- **Adding impedances arithmetically.** Z ≠ R + X_L + X_C, and Z ≠ R + (X_L − X_C). Only the quadrature form √(R² + (X_L − X_C)²) is correct, because the drops peak at different instants.
- **Adding component voltages arithmetically.** V_s ≠ V_R + V_L + V_C. Use √(V_R² + (V_L − V_C)²). This is why V_C or V_L may legitimately exceed the supply.
- **Reactance treated as resistance in power.** P = I²R only. I²X_L is not a power — it is reactive volt-amperes. The average power in a pure L or C is exactly **zero**.
- **VI vs VI cos φ.** VI is the apparent power (VA); the real average power is VI cos φ (W). They coincide only when φ = 0, i.e. a purely resistive circuit or one at resonance.
- **P_max vs P_av.** In a resistor P_max = V_max I_max = 2P_av. Reporting the peak power as the power dissipated doubles the answer.
- **Resonance means the current is zero.** It is the opposite: at series resonance Z is at its **minimum** (= R) and the current at its **maximum**. The reactances cancel each other, they do not block the circuit.
- **"V_L and V_C are zero at resonance."** They are **equal and opposite** — individually they can be enormous (Q = X_L/R times the supply), but their vector sum is zero.
- **Frequency-independence.** A purely resistive AC circuit does not care about f at all; the moment L or C is present, every one of Z, I, φ and P depends on it.

---

*Note on the source: this week's lecture deck extracts as slide titles only for its quantitative content — PEAK VALUES OF VOLTAGE AND CURRENT (two slides), RMS CURRENT AND VOLTAGE (two slides), AVERAGE POWER, Solution question 1, Solution to question 2, SOLUTION TO QUESTION 3 and SUMMARY are all blank in the text layer because the formulae and worked solutions sit inside slide images. What survives is the definitions of peak and rms value in words, the source equation V = V_max sin ωt, and the three practice questions themselves (household 120 V rms → peak; 120 V and 10 A ac → maximum values; the 24.0 V, 60.0 Hz, 265 Ω generator), which are reproduced and worked above. The week summary sheet then covers a wider brief than the deck — series RLC circuits, phase relationships, reactance, impedance, Kirchhoff's voltage law applied vectorially, and leading/lagging phase angle — and the standard 100-level treatment of exactly those named objectives has been supplied above. Ligatures are lost throughout the source ("dierent" for "different", "reect" for "reflect").*
