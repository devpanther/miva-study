# PHY_102 — Week 6 Questions
*Peak and rms values of current and voltage. Twelve multiple choice, three short answer. Everything here comes from Dr. Adeniji's own slides — no reactance, no impedance, no phasors. Answers at the bottom; work them before you look.*

## Multiple choice

**1.** The deck defines the **peak value** of a waveform as
A. the full swing from trough to crest
B. the maximum instantaneous value in a cycle, measured from zero
C. the reading an AC voltmeter displays
D. 0.7071 × I_max

**2.** The deck defines the **rms value** as
A. the DC value that would dissipate the same power in a resistive load
B. the average of the waveform over one complete cycle
C. the maximum instantaneous value of the waveform
D. the average of the waveform over one half-cycle

**3.** A supply is quoted as 240 V. Its peak voltage is
A. 170 V
B. 120 V
C. 339 V
D. 480 V

**4.** A source has f = 50 Hz. Its angular frequency ω is
A. 50 rad s⁻¹
B. 7.96 rad s⁻¹
C. 0.02 rad s⁻¹
D. 314 rad s⁻¹

**5.** In (I²)_av = ½ I²_max, the ½ is the average value over a complete cycle of
A. sin²ωt
B. sin ωt
C. I_max
D. √2

**6.** In her Question 3 (V_max = 24.0 V, R = 265 Ω), the rms current is
A. 0.0906 A
B. 0.0642 A
C. 0.0454 A
D. 0.0642 mA

**7.** In a resistor, the maximum power dissipated compared with the average power is
A. equal to it
B. half of it
C. twice it
D. √2 times it

**8.** An alternating current is i = 8 sin(100πt) A. Its rms value is
A. 8 A
B. 314 A
C. 11.3 A
D. 5.66 A

**9.** An AC source of maximum voltage 100 V feeds R = 50 Ω. The average power is
A. 100 W
B. 200 W
C. 50 W
D. 1.41 W

**10.** Question 3 supplies a frequency of 60.0 Hz but never uses it. Why?
A. 60 Hz is a standard value and is simply assumed
B. it cancels between P_av and P_max
C. the circuit is purely resistive, so nothing asked depends on frequency
D. rms values are averages over a cycle, which removes the frequency

**11.** The Practice question 2 slide and its solution slide disagree about
A. the current: 10 A on one, 14.14 A on the other
B. the ac voltage: 120 V on the question, 250 V in the solution
C. the factor: 0.7071 on one, 1.4142 on the other
D. nothing — the two slides agree

**12.** Her slide-8 chain I = V/R = (V_max/R) sin ωt = I_max sin ωt establishes that
A. the current lags the voltage by 90° in a resistor
B. I_rms = V_max/R
C. R depends on the frequency of the source
D. I_max = V_max/R, and by the same factor I_rms = V_rms/R

## Short answer

**13.** State the two rms formulae exactly as the SUMMARY slide states them, and give each rearranged to find the peak value. Then explain, using her slide-9 argument, why the rms value rather than the plain average is used to describe an alternating quantity, and say precisely what "root mean square" instructs you to do in what order.

**14.** Work PRACTICE QUESTION 3 in full — an AC generator of maximum voltage 24.0 V and frequency 60.0 Hz across R = 265 Ω; find (a) the rms voltage, (b) the rms current, (c) the average power and (d) the maximum power. Show the arithmetic for each. Then state which given is never used and why, and verify the relationship between your answers to (c) and (d).

**15.** The Practice question 2 slide sets the house ac voltage at 120 V; the solution slide solves it at 250 V. Set out both answers in full, say which part of the question is unaffected by the discrepancy, and explain what a student should write in an exam if this question appears with only one of the two figures given.

---

## Answers

**1. B.** Slide 4: "the maximum instantaneous value that a waveform reaches during one complete cycle… typically measured from the zero reference point." A is the trough-to-crest swing, which is **twice** the peak — a quantity the deck never names. C is the rms value, which is what meters read (slide 10). D inverts the rms formula and would make the peak smaller than the rms, which is impossible.

**2. A.** Slide 5: "the equivalent direct current (DC) value that would produce the same amount of power dissipation in a resistive load." B is exactly the thing slide 9 rejects — the full-cycle average is **zero**. C is the peak value. D is the rectified half-cycle mean (0.6366 V_max), which appears on her diagram as a label but is never defined or used.

**3. C.** Quoted supply voltages are rms because meters read rms, so V_max = 1.4142 × 240 = **339 V**. A multiplies by 0.7071 instead of by √2 — the factor used in the wrong direction, and it gives a peak *smaller* than the rms, which no waveform can have. B halves. D doubles, confusing peak with the trough-to-crest swing.

**4. D.** ω = 2πf = 2π(50) = **314 rad s⁻¹**. A uses f where ω belongs, out by 6.28. B divides by 2π instead of multiplying. C is the period T = 1/f = 0.02 s, in seconds, not an angular frequency at all — check the units before you answer.

**5. A.** I² = I²_max sin²ωt, so averaging I² means averaging sin²ωt, whose mean over a cycle is ½. B is the average of the *unsquared* sinusoid, which is **zero** — the very reason she squares. C is a constant, so its average is itself, not ½. D is the factor that comes *out* at the end, after the square root, not the thing being averaged.

**6. B.** V_rms = 0.7071 × 24 = 17.0 V, then I_rms = V_rms/R = 17/265 = **0.0642 A**. A is I_max = V_max/R = 24/265 = 0.0906 A — the conversion never done. C applies 0.7071 a second time to an already-converted figure, 0.0642 × 0.7071 = 0.0454 A. D is the right number with the wrong prefix: 0.0642 A is 64.2 mA, not 0.0642 mA.

**7. C.** P_max/P_av = (V_max/V_rms)² = (√2)² = **2**. Her Q3 shows it: 2.174 W against 1.09 W. A forgets that instantaneous power in a resistor swings between 0 and its peak. B inverts the ratio. D applies √2 once instead of squaring it — the classic slip of forgetting that power goes as V², so the voltage factor gets squared too.

**8. D.** In i = I_max sin ωt, I_max = 8 A, so I_rms = 0.7071 × 8 = **5.66 A**. A quotes the amplitude as though it were the rms value. B is ω = 100π = 314 rad s⁻¹ — an angular frequency in rad s⁻¹, not a current in amperes. C multiplies by 1.414 instead of dividing, giving an rms larger than the peak.

**9. A.** V_rms = 0.7071 × 100 = 70.71 V, so P_av = V²_rms/R = 5000/50 = **100 W**. B uses V²_max/R = 10 000/50 = 200 W, which is P_**max**, exactly twice. C applies 0.7071 twice (V = 50 V) before squaring. D forgets to square at all: 70.71/50 = 1.41, which is an ampere figure wearing a watt label.

**10. C.** The load is a plain resistor, and none of V_rms, I_rms, P_av or P_max contains f — recognising a redundant given is part of the question. A is not a reason, it is a guess. B is false: P_max and P_av are computed independently and neither contains f to cancel. D confuses the averaging *inside* the rms definition with the circuit's response; a circuit containing L or C would depend on f however the values were averaged.

**11. B.** Slide 13 sets the ac voltage at 120 V; slide 14 solves it with 250 V and gets V_max = 250/0.7071 = 353.56 V. A is not a disagreement — 10 A is the given rms current and 14.14 A is the answer derived from it. C is false: 0.7071 and 1.4142 are reciprocals and both slides use them consistently. D is the answer to avoid; the discrepancy is real and you should name it.

**12. D.** Dividing V = V_max sin ωt by R gives (V_max/R) sin ωt, and matching it to I_max sin ωt identifies **I_max = V_max/R**; since both amplitudes carry the same 0.7071 to become rms values, I_rms = V_rms/R too, which is how her Q3 part (b) proceeds. A is false — in a resistor voltage and current share the same sin ωt and are in phase; a 90° lag belongs to components this deck never covers. B crosses an rms value with a peak value, out by √2. C is false: R is a constant of the component.

**13.** *Concept: the two formulae, both directions, and the logic behind rms.* The SUMMARY slide gives **I_rms = (1/√2) I_max = 0.7071 I_max** and **V_rms = (1/√2) V_max = 0.7071 V_max**. Rearranged: **I_max = √2 I_rms = I_rms/0.7071 = 1.4142 I_rms**, and **V_max = √2 V_rms = V_rms/0.7071 = 1.4142 V_rms**. Why rms and not the average: slide 9 says "Both alternating voltage and current have a zero value. So direct average gives no information (or useless)" — the instantaneous value is positive through one half-cycle and negative through the other, so over a complete cycle the two halves cancel exactly and the mean is zero, which would falsely predict that an alternating current does no heating. Squaring removes the sign: I² = I²_max sin²ωt is never negative, so it has a genuine non-zero mean, (I²)_av = ½I²_max, and the square root of that mean is a number that can stand in for the current. It is also the physically right number, because power in a resistance goes as I², so the mean of I² is exactly what determines the heating — which is why slide 5 can define the rms as the equivalent DC value. **Order of operations, from the name read backwards:** square the instantaneous value first, take the mean of the squares second, take the square root third. Not the mean of the roots, not the square of the mean.

**14.** *Concept: the full resistive AC calculation, with a redundant given.* **(a) V_rms = 0.7071 V_max = 0.7071 × 24 = 16.97 ≈ 17.0 V.** **(b) I_rms = V_rms/R = 17/265 = 0.06415 ≈ 0.0642 A** (64.2 mA). **(c) P_av = V²_rms/R = 17²/265 = 289/265 = 1.0906 ≈ 1.09 W**; the cross-check I²_rms R = (0.0642)² × 265 = 0.004122 × 265 = 1.09 W ✔ agrees, and both routes are on slide 15. **(d) P_max = V²_max/R = 24²/265 = 576/265 = 2.1736 ≈ 2.174 W.** **The unused given is the frequency, 60.0 Hz.** The load is a pure resistor, and R does not depend on frequency, so none of V_rms, I_rms, P_av or P_max contains f anywhere; the number is there to be recognised as redundant. **Verification of (c) against (d):** P_max/P_av = 2.174/1.09 = 1.995 ≈ **2**, exactly as it must be, since P_max/P_av = (V_max/V_rms)² = (√2)² = 2. The small shortfall from exactly 2 is only the rounding of 16.97 V to 17.0 V. If your P_max does not come out at twice your P_av, one of the two used the wrong voltage.

**15.** *Concept: naming a misprint rather than quietly picking one figure.* **With 250 V (the figure the solution slide actually uses):** V_rms = 0.7071 V_max, so V_max = V_rms/0.7071 = 250/0.7071 = **353.56 V**. **With 120 V (the figure the question slide sets):** V_max = 120/0.7071 = 169.7 ≈ **170 V** — which is the same answer as Practice question 1, and that duplication is the likely reason the figure was altered on the solution slide. **The part unaffected is the current:** the question gives an ac current of 10 A on both slides, so I_max = I_rms/0.7071 = 10/0.7071 = **14.14 A** either way. **In an exam:** use whichever figure the question paper actually gives you, state the formula V_max = √2 V_rms before substituting so the method earns its marks independently of the number, and quote the answer with its unit. If both figures somehow appear, say in one line that the question is internally inconsistent, choose the one in the question stem, and give the other answer in brackets — that is worth more than silently computing one of them.
