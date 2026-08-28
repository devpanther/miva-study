# PHY_102 — Week 6 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 7, not this week. Notes closed. Topic: Nomenclature in A.C. Circuits — Peak and RMS Values of Current and Voltage, Reactance, Impedance and the Series RLC Circuit.*

## Section A — Multiple choice (12)

**1.** An AC voltmeter connected across a mains socket reads 230 V. Which statement is correct?
a) The instantaneous voltage never exceeds 230 V, that being the largest value the supply produces.
b) The peak value is 163 V, since the rms is the larger of the two figures.
c) The instantaneous voltage reaches a maximum of 325 V, and a 230 V DC supply would heat a given resistor at the same average rate.
d) Averaged over a complete cycle the voltage is 230 V.

**2.** The form factor of a sinusoid is 1.11 because it is:
a) the ratio of the peak value to the rms value
b) the ratio of the rms value (0.707 V_max) to the rectified mean value (0.637 V_max)
c) the ratio of the peak value to the peak-to-peak value, doubled
d) the factor by which the rms value exceeds the peak value

**3.** In which of these series circuits does the current **lead** the supply voltage?
a) R = 30 Ω, X_L = 50 Ω, X_C = 20 Ω
b) R = 30 Ω, X_L = 50 Ω, X_C = 50 Ω
c) R = 0, X_L = 50 Ω, X_C = 20 Ω
d) R = 30 Ω, X_L = 20 Ω, X_C = 50 Ω

**4.** In a series RLC circuit the measured drops are V_R = 60 V, V_L = 120 V and V_C = 40 V. The supply voltage is:
a) 100 V
b) 220 V
c) 140 V
d) 171 V

**5.** The voltage across the capacitor of a series RLC circuit can be larger than the supply voltage because:
a) the capacitor accumulates charge cycle after cycle until its voltage rises above that of the source
b) Kirchhoff's voltage law applies only to direct-current circuits
c) the current through the capacitor is larger than the current through the other two components
d) V_L and V_C are 180° out of phase with each other and largely cancel, so Kirchhoff's voltage law is satisfied by the vector sum rather than the arithmetic sum

**6.** A series RLC circuit on a 240 V rms supply draws 5.0 A rms; its impedance is 48 Ω and its resistance 30 Ω. The average power drawn is:
a) 1200 W
b) 450 W
c) 750 W
d) 469 W

**7.** At series resonance:
a) Z is a maximum, because the two reactances add
b) Z is a minimum and equal to R, the current is a maximum, and current and supply voltage are in phase
c) the current is zero, since X_L and X_C cancel and leave no path
d) the voltages across L and across C are both zero

**8.** As the supply frequency is raised well above the resonant frequency of a series RLC circuit:
a) X_L grows and X_C shrinks, so Z rises, the circuit becomes increasingly inductive and the current lags further behind the voltage
b) both reactances grow, so Z rises and the phase angle tends towards zero
c) X_L shrinks and X_C grows, so the circuit becomes increasingly capacitive
d) Z is unchanged, since impedance is fixed by R, L and C, which are properties of the components

**9.** A resistive heater draws 5.0 A rms from a 220 V rms supply. The **maximum instantaneous** power delivered to it is:
a) 2200 W
b) 1100 W
c) 1556 W
d) 550 W

**10.** A 250 mH inductor is connected to a 400 Hz supply. Its reactance is:
a) 100 Ω
b) 628 000 Ω
c) 1.59 mΩ
d) 628 Ω

**11.** A moving-coil (DC) ammeter is placed in a circuit carrying an alternating current of peak value 3.0 A. It reads approximately:
a) 3.0 A
b) 2.12 A
c) zero
d) 1.91 A

**12.** Which statement about a pure capacitor in an AC circuit is correct?
a) It dissipates I_rms²X_C, by analogy with I_rms²R for a resistor.
b) It dissipates no average power: over each cycle it returns to the source exactly the energy it stored.
c) It blocks alternating current completely, just as it blocks direct current.
d) Its reactance rises with frequency, so it passes low frequencies more readily than high ones.

## Section B — Short answer (3)

**13.** For a sinusoidal supply, define the peak value, the peak-to-peak value, the rectified mean value and the rms value, giving each as a multiple of V_max. State the form factor and the peak factor and say which ratio each is. Then explain why supply voltages are quoted as rms values, and exactly what would go wrong if the mean value were quoted instead.

**14.** A series circuit of R = 25 Ω, L = 0.12 H and C = 60 μF is connected across a 150 V rms, 50 Hz supply. Find the two reactances, the impedance, the current, all three component voltages and the phase angle, stating whether the current leads or lags. Verify the supply voltage by vector addition, find the average power by two routes, and state the resonant frequency — using it to confirm the character of the circuit at 50 Hz.

**15.** A series RLC circuit is tested at two frequencies. At 40 Hz the current is found to **lead** the supply voltage by 35°; at 90 Hz it **lags** it by 28°. Explain what this tells you about the resonant frequency, what happened to X_L and X_C between the two measurements, and what a third measurement made exactly at f₀ would show. Explain also why, for a fixed rms supply voltage, the average power is greatest at resonance.

## Answers

**1. c** — *Quoted AC voltages are rms, and rms is defined by equal heating.* V_max = √2(230) = 325 V, so the instantaneous value does exceed 230 V for part of each half-cycle; and the whole point of the rms definition is that 230 V AC and 230 V DC heat a given resistor identically. (a) treats the meter reading as the maximum, i.e. confuses rms with peak. (b) divides by √2 instead of multiplying and then compounds the error by asserting the peak is smaller than the rms — impossible for any waveform. (d) confuses rms with the mean; the mean of a sinusoid over a full cycle is exactly **zero**.

**2. b** — *Form factor = rms ÷ rectified mean.* 0.707/0.637 = 1.11. It measures how peaked a waveform is relative to its average magnitude, and it is the number a rectifier-type meter's scale is calibrated with. (a) is the **peak factor** (crest factor), V_max/V_rms = √2 = 1.414 — the two factors are constantly swapped. (c) is a ratio that is 1 by construction (V_max/2V_max, doubled) and describes nothing. (d) reverses the inequality: the rms value is always *less* than the peak, never greater.

**3. d** — *Current leads when the net reactance is capacitive, X_C > X_L.* Here X = 20 − 50 = −30 Ω, tan φ = −30/30 = −1, so φ = −45° and the current leads by 45°. (a) has X = +30 Ω: inductive, so the current **lags** — the mirror-image error. (b) has X_L = X_C, which is resonance: current and voltage are **in phase**, neither leading nor lagging. (c) has X_L > X_C with R = 0, giving the most strongly *lagging* case in the list, a full 90° behind — chosen by anyone who reads "the capacitor is present" as "capacitive".

**4. a** — *KVL in an AC circuit is a vector sum: V_s = √(V_R² + (V_L − V_C)²).* V_L − V_C = 80 V, so V_s = √(60² + 80²) = √(3600 + 6400) = √10 000 = **100 V**. (b) adds all three arithmetically, 60 + 120 + 40 = 220 V, describing an instant that never occurs. (c) gets the net reactive drop right but then adds it to V_R arithmetically, 60 + 80 = 140 V, forgetting the 90° that still separates them. (d) **adds** V_L and V_C instead of subtracting: √(60² + 160²) = 171 V, missing the fact that they are in direct opposition.

**5. d** — *Reactive voltages oppose one another, so each may exceed their resultant.* V_L leads the current by 90° and V_C lags it by 90°, so they are 180° apart; at the instant V_C is at its peak, V_L is at its opposite peak and V_R is passing through zero, and the instantaneous sum is still only the supply voltage. Near resonance the individual drops can be Q times the supply. (a) invents a DC-style accumulation; in the steady state the capacitor's charge simply oscillates and nothing builds up cycle to cycle. (b) is false — KVL holds instant by instant in any circuit; it is the *addition of amplitudes* that must be done vectorially. (c) contradicts the defining property of a series circuit, in which the current is common to every component.

**6. c** — *P_av = VI cos φ with cos φ = R/Z, equivalently I²R.* cos φ = 30/48 = 0.625, so P = (240)(5.0)(0.625) = **750 W**; check I²R = (25)(30) = 750 W ✔. (a) is the **apparent** power VI = 1200 VA — the power factor omitted, i.e. the circuit treated as if it were DC. (b) computes I²(Z − R) = (25)(18) = 450 W, the supposed "power in the reactance", which is not a power at all: L and C dissipate nothing. (d) squares the power factor, 1200 × 0.625² = 469 W.

**7. b** — *At series resonance the reactances cancel, leaving the minimum impedance.* X_L = X_C makes the net reactance zero, so Z = R, I = V/R is maximal, φ = 0 and the power factor is unity. (a) has the reactances adding rather than cancelling, and describes the parallel-resonant behaviour instead. (c) reads "cancel" as "block": cancellation removes *opposition*, so the current is larger than at any other frequency, not zero. (d) confuses a zero **resultant** with zero components — V_L and V_C are individually large, equal and opposite.

**8. a** — *X_L = 2πfL rises with f while X_C = 1/(2πfC) falls with it.* Well above f₀ the inductive term dominates, X_L − X_C is large and positive, Z rises and φ → +90°, so the current lags further and further. (b) has X_C growing with frequency — the relationship inverted — and would give a phase angle tending to zero, which happens only *at* resonance. (c) inverts both dependences at once, and would place the capacitive region above f₀ instead of below it. (d) treats impedance as a fixed component property; it is R, L and C that are fixed, while Z depends on frequency through them.

**9. a** — *In a resistor the instantaneous power peaks at V_max I_max = 2P_av.* P_av = V_rms I_rms = (220)(5.0) = 1100 W, and p(t) = V_max I_max sin²ωt swings between 0 and V_max I_max = (√2 × 220)(√2 × 5.0) = 2 × 1100 = **2200 W**. (b) gives the average when the maximum was asked for. (c) applies the √2 once instead of twice, converting only one of the two quantities. (d) halves the average instead of doubling it, as though the ½ in ½V_max I_max applied to the rms values.

**10. d** — *X_L = 2πfL, with L in henries.* 250 mH = 0.250 H, so X_L = 2π(400)(0.250) = **628 Ω**. (a) uses f instead of ω = 2πf, giving 400 × 0.250 = 100 Ω, a factor 6.28 too small. (b) leaves L in millihenries, 2π(400)(250), a thousand times too big. (c) takes the reciprocal, applying the capacitive formula to an inductor.

**11. c** — *A moving-coil meter deflects linearly with current, so it responds to the mean, which is zero.* Over a full cycle the positive and negative half-cycles cancel exactly; the pointer at most trembles about zero at the supply frequency. It is precisely this that forces AC instruments to use a squaring (moving-iron or thermal) movement, or a rectifier. (a) is the peak value, which no meter reads directly. (b) is the rms value, 3.0/√2 = 2.12 A, which a *moving-iron* meter would read. (d) is the rectified mean, 0.637 × 3.0 = 1.91 A, which is what a rectifier meter's movement actually senses before its scale is multiplied by the form factor 1.11 to display 2.12 A.

**12. b** — *A pure reactance stores and returns energy; it dissipates none.* Instantaneous power into a capacitor is positive for one quarter-cycle (charging) and equally negative for the next (discharging back into the source), so the average is zero — equivalently P = VI cos 90° = 0. (a) is the "reactance is a kind of resistance" error; I²X_C is reactive volt-amperes, not watts. (c) over-generalises the DC behaviour: a capacitor blocks DC but *passes* AC, the more readily the higher the frequency. (d) inverts the frequency dependence — X_C = 1/(2πfC) **falls** as f rises.

**13.** *Concept: the four descriptors of an alternating waveform, and why rms is the standard.* For v = V_max sin ωt: the **peak (maximum) value** V_max is the greatest instantaneous value, measured from zero; the **peak-to-peak value** is 2V_max, the full crest-to-trough swing; the **rectified mean value** is the average of one half-cycle, V_av = (2/π)V_max = **0.637 V_max** (the mean over a *complete* cycle is zero, since the halves cancel); and the **rms (effective) value** is V_rms = V_max/√2 = **0.707 V_max**, the square root of the mean of v². The **form factor** is rms ÷ rectified mean = 0.707/0.637 = **1.11**; the **peak (crest) factor** is peak ÷ rms = **1.414**. Supply voltages are quoted as rms because **power is what matters and power goes as the square**: P = V_rms²/R, so the rms value is by definition the DC voltage that would do the same job, and every rating — of a cable, a fuse, a heater, an insulation class — follows directly from it. If the mean were quoted instead, two things would break. First, the full-cycle mean of a sinusoid is exactly **zero**, which would describe every AC supply in the world as 0 V. Second, even using the rectified mean, 0.637 V_max, the figure would under-state the heating: power would come out as (0.637/0.707)² = 0.81 of the true value, a 19% error — and, worse, the ratio between mean and rms is a *different* number for a square or a triangular wave, so the quoted figure would not mean the same thing from one waveform to the next. The rms value alone makes the same power statement for every waveform.

**14.** *Concept: the complete series RLC calculation with independent checks.* **ω = 2π(50) = 314.16 rad s⁻¹.** **X_L = ωL = (314.16)(0.12) = 37.7 Ω.** **X_C = 1/(ωC) = 1/[(314.16)(60 × 10⁻⁶)] = 1/(0.018850) = 53.1 Ω.** **Net X = 37.7 − 53.1 = −15.4 Ω** — negative, hence **capacitive**. **Z = √(25² + 15.4²) = √(625 + 236) = √861 = 29.3 Ω.** **I = 150/29.3 = 5.11 A** (common to all three). **Voltages**: V_R = (5.11)(25) = **128 V**; V_L = (5.11)(37.7) = **193 V**; V_C = (5.11)(53.1) = **271 V**. **Vector check**: √(128² + (193 − 271)²) = √(16 380 + 6080) = √22 460 = **150 V ✔**, while the arithmetic sum, 592 V, is meaningless. **Phase**: tan φ = −15.4/25 = −0.614, φ = **−31.6°** — the current **leads** the supply voltage by 31.6°, as a capacitive circuit must. **Average power, route 1**: cos φ = R/Z = 25/29.3 = 0.852, P = (150)(5.11)(0.852) = **653 W**. **Route 2**: P = I²R = (5.11)²(25) = (26.1)(25) = **653 W ✔** — every watt of it in the resistor. **Resonance**: f₀ = 1/(2π√(LC)) with LC = (0.12)(60 × 10⁻⁶) = 7.2 × 10⁻⁶ and √(LC) = 2.683 × 10⁻³, so f₀ = 1/0.016860 = **59.3 Hz**. The supply is at 50 Hz, **below** f₀, so X_C must exceed X_L and the circuit must be capacitive with a leading current — exactly what the sign of φ said, an independent confirmation of the whole calculation.

**15.** *Concept: reading a circuit's character off its phase angle, and why resonance maximises the real power.* A **leading** current at 40 Hz means X_C > X_L there, so the circuit is capacitive and 40 Hz lies **below** the resonant frequency. A **lagging** current at 90 Hz means X_L > X_C, an inductive circuit, so 90 Hz lies **above** it. Because φ changes sign exactly once, at f₀, the resonant frequency **must lie between 40 Hz and 90 Hz**; it is not the midpoint, and since |φ| is larger at 40 Hz than at 90 Hz, 40 Hz is the further of the two from resonance. Between the measurements, **X_L = 2πfL rose** — more than doubling, since f did — while **X_C = 1/(2πfC) fell** by the same factor, so the difference X_L − X_C moved from negative to positive; the two curves cross at f₀. A measurement made exactly at **f₀** would show **φ = 0**, current and supply voltage in phase, the **minimum** impedance Z = R, the **maximum** current V/R, a **unity power factor**, and equal, opposite voltages across L and C. **Why the power is greatest there**: P_av = VI cos φ = V(V/Z)(R/Z) = V²R/Z², so with V and R fixed it is largest when **Z is smallest**; Z = √(R² + (X_L − X_C)²) is smallest exactly when the reactive term vanishes, i.e. at resonance, where Z = R and P = V²/R. Equivalently P = I²R with the current at its maximum. Away from resonance two effects work together against the power: the current falls because Z is larger, *and* a smaller fraction of the apparent power VI is real, because cos φ = R/Z has dropped below 1.
