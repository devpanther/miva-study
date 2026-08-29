# Friday — PHY_102 nightly check

*Problems-only session on Week 6. Convert between peak and rms in both directions using V_rms = 0.7071 V_max and V_max = V_rms/0.7071 = 1.4142 V_rms; read I_max, ω, f and T straight off an equation of the form i = I_max sin ωt; apply Ohm's law consistently within one kind of value, I_rms = V_rms/R; and compute power with P_av = I²_rms R = V²_rms/R and P_max = V²_max/R = 2P_av. Includes all three of the lecturer's own practice questions with their arithmetic, the 120 V versus 250 V discrepancy between her Question 2 slides, and one wrong worked solution to diagnose.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** In SOLUTION TO QUESTION 3 (V_max = 24.0 V, f = 60.0 Hz, R = 265 Ω), what is the maximum power dissipated in the resistor?
A. 2.174 W
B. 1.09 W
C. 4.35 W
D. 0.0642 W

**2.** Solution to question 2 solves for the maximum voltage from an ac voltage of 250 V. What does she get?
A. 176.8 V
B. 353.56 V
C. 250 V
D. 500 V

**3.** An alternating voltage is v = 170 sin(377t) V. What are its rms value and its frequency?
A. 120 V and 377 Hz
B. 240 V and 60 Hz
C. 120 V and 60 Hz
D. 170 V and 60 Hz

**4.** An alternating current of peak value 3.0 A flows through a 20 Ω resistor. The average power dissipated is
A. 180 W
B. 45 W
C. 60 W
D. 90 W

**5.** A 4.0 Ω resistor is connected to an AC supply whose rms voltage is 12 V. The rms current and the average power are
A. 3.0 A and 36 W
B. 2.12 A and 18 W
C. 4.24 A and 72 W
D. 3.0 A and 12 W

**6.** A student answers part (b) of Question 3 by writing I = 24/265 = 0.0906 A. What has gone wrong, and what is the right answer?
A. Nothing has gone wrong; 0.0906 A is the rms current
B. The peak voltage was divided by R, which gives I_max, not I_rms; the rms current is 0.0642 A
C. The resistance should have been squared; the rms current is 0.000342 A
D. The 0.7071 factor must be applied twice; the rms current is 0.0454 A

**7.** An AC source has a period of 0.02 s. Its frequency and angular frequency are
A. 0.02 Hz and 0.126 rad s⁻¹
B. 50 Hz and 50 rad s⁻¹
C. 50 Hz and 314 rad s⁻¹
D. 314 Hz and 50 rad s⁻¹

**8.** A resistor on an AC supply dissipates an average power of 60 W. The maximum instantaneous power delivered to it is
A. 30 W
B. 42.4 W
C. 84.9 W
D. 120 W

**9.** Work PRACTICE question 1 and PRACTICE question 2 in full, as the solution slides do. For Question 2, give the answer for both of the voltages the deck prints.
*(short answer)*

**10.** Work PRACTICE QUESTION 3 in full — maximum voltage 24.0 V, frequency 60.0 Hz, R = 265 Ω — showing the arithmetic for all four parts, then check your answers to (c) and (d) against each other and say which given was never used.
*(short answer)*

**11.** An alternating current i = 8 sin(100πt) A flows through a 15 Ω resistor. Find I_max, ω, f, T, I_rms, the average power and the maximum instantaneous power, with units throughout.
*(short answer)*

**12.** An AC voltmeter across a resistor reads 110 V and an AC ammeter in series with it reads 2.5 A. Find the peak voltage, the peak current, the resistance, the average power and the maximum power. Say why the meter readings can be used directly in Ohm's law.
*(short answer)*

## Answers

**1. A** — P_max = V²_max/R = 24²/265 = 576/265 = 2.174 W. Option 2 is the average power, V²_rms/R = 17²/265 = 1.09 W — the same formula with the rms voltage, and exactly half the answer. Option 3 doubles the maximum instead of the average, applying the factor 2 to the wrong quantity. Option 4 is the rms current in amperes wearing a watt label. Check any answer against P_max = 2P_av: 2.174 is twice 1.09, and if yours is not, one of the two used the wrong voltage.

**2. B** — V_max = V_rms/0.7071 = 250/0.7071 = 353.56 V, which is the same as multiplying by 1.4142. Option 1 multiplies by 0.7071 instead of dividing, 250 × 0.7071 = 176.8 V — the factor used in the wrong direction, and it gives a peak smaller than the rms, which is impossible. Option 3 changes nothing. Option 4 doubles, confusing the peak with the trough-to-crest swing. Note that her question slide sets this problem with 120 V, not 250 V; with 120 V the answer would be 169.7 ≈ 170 V.

**3. C** — Matching to V = V_max sin ωt gives V_max = 170 V and ω = 377 rad s⁻¹, so V_rms = 0.7071 × 170 = 120 V and f = ω/2π = 377/6.283 = 60 Hz. Option 1 quotes ω as if it were the frequency — 377 is in rad s⁻¹, not Hz, and is 2π times too large. Option 2 multiplies 170 by 1.4142 instead of by 0.7071, making the rms larger than the peak. Option 4 reads the amplitude straight off as the rms value and never converts at all.

**4. D** — I_rms = 0.7071 × 3.0 = 2.121 A, so P_av = I²_rms R = (2.121)² × 20 = 4.5 × 20 = 90 W. Equivalently ½I²_max R = ½(9)(20) = 90 W. Option 1 uses the peak current, I²_max R = 9 × 20 = 180 W, which is the maximum instantaneous power, twice the average. Option 2 applies 0.7071 a second time before squaring. Option 3 forgets the square altogether, computing I_max R = 3 × 20 = 60, which is a voltage in volts, not a power.

**5. A** — I_rms = V_rms/R = 12/4.0 = 3.0 A, and P_av = I²_rms R = 9 × 4.0 = 36 W, which agrees with V²_rms/R = 144/4.0 = 36 W. Option 2 converts the 12 V a second time, as if it were a peak value. Option 3 converts it in the wrong direction, multiplying by 1.4142. Option 4 has the current right but computes I R instead of I²R, dropping the square that makes it a power.

**6. B** — 24 V is V_max, so 24/265 = 0.0906 A is I_max. Her part (a) converts first, V_rms = 0.7071 × 24 = 17.0 V, and then I_rms = 17/265 = 0.0642 A. The student's number is not wrong as a peak current — it is simply an answer to a different question, and 0.7071 × 0.0906 = 0.0642 confirms the two are consistent. Option 3 invents a squared resistance that has no place in Ohm's law. Option 4 is the opposite error, converting an already-converted figure and halving the true answer.

**7. C** — f = 1/T = 1/0.02 = 50 Hz, and ω = 2π/T = 2πf = 2π(50) = 314 rad s⁻¹. Option 1 quotes the period itself as the frequency. Option 2 sets ω equal to f, the single commonest slip, out by a factor of 6.28. Option 4 swaps the two numbers and their units — 314 is an angular frequency in rad s⁻¹ and can never be a count of cycles per second here.

**8. D** — P_av = V²_rms/R and P_max = V²_max/R with the same R, so the ratio is (V_max/V_rms)² = (√2)² = 2, giving 120 W. Her Question 3 shows it numerically: 2.174 W against 1.09 W. Option 1 halves instead of doubling. Options 2 and 3 apply √2 once — multiplying or dividing by 1.4142 — forgetting that power depends on the voltage squared, so the factor gets squared too.

**9.** Question 1: a household circuit at an rms voltage of 120 V. From V_rms = (1/√2)V_max, rearrange to V_max = V_rms √2, so V_max = 120√2 = 169.7 ≈ 170 V. Question 2: an ac current of 10 A and an ac voltage that the question slide gives as 120 V and the solution slide gives as 250 V. Current, unaffected by the discrepancy: I_rms = 0.7071 I_max, so I_max = I_rms/0.7071 = 10/0.7071 = 14.14 A. Voltage, both ways: with 250 V, V_max = 250/0.7071 = 353.56 V, which is what the solution slide prints; with 120 V, V_max = 120/0.7071 = 169.7 ≈ 170 V, the same answer as Question 1. A good answer names the inconsistency explicitly rather than silently choosing one figure, states the formula before substituting, and carries the unit V or A on every line.

**10.** (a) V_rms = 0.7071 V_max = 0.7071 × 24 = 16.97 ≈ 17.0 V. (b) I_rms = V_rms/R = 17/265 = 0.06415 ≈ 0.0642 A, that is 64.2 mA. (c) P_av = V²_rms/R = 17²/265 = 289/265 = 1.0906 ≈ 1.09 W; the second route on slide 15 agrees, I²_rms R = (0.0642)² × 265 = 0.004122 × 265 = 1.09 W. (d) P_max = V²_max/R = 24²/265 = 576/265 = 2.1736 ≈ 2.174 W. Check: P_max/P_av = 2.174/1.09 = 1.995, which is 2 to within the rounding of 16.97 to 17.0, exactly as required since the ratio is (V_max/V_rms)² = 2. The unused given is the frequency, 60.0 Hz: the load is a pure resistor, R does not depend on frequency, and no formula in any of the four parts contains f. A good answer states that explicitly rather than quietly ignoring it.

**11.** Match i = I_max sin ωt: I_max = 8 A and ω = 100π = 314.16 rad s⁻¹. Then f = ω/2π = 314.16/6.2832 = 50 Hz and T = 1/f = 0.02 s (equivalently T = 2π/ω). I_rms = 0.7071 I_max = 0.7071 × 8 = 5.66 A. Average power P_av = I²_rms R = (5.657)² × 15 = 32 × 15 = 480 W — note (I²)_av = ½I²_max = ½(64) = 32 A², so the 32 can be written down without rounding. Maximum instantaneous power P_max = I²_max R = 64 × 15 = 960 W, which is 2 × 480 W as it must be. A good answer keeps ω in rad s⁻¹ and f in Hz and does not interchange them, and notes that the angle 100πt is in radians.

**12.** Slide 10: AC ammeters and voltmeters are designed to read rms values, so V_rms = 110 V and I_rms = 2.5 A. Peaks: V_max = 110/0.7071 = 155.6 V and I_max = 2.5/0.7071 = 3.54 A. Resistance: R = V_rms/I_rms = 110/2.5 = 44 Ω — legitimate because both readings are the same kind of value, so the 0.7071 divides out; the same R follows from V_max/I_max = 155.6/3.54 = 44 Ω, which is a useful check. Average power: P_av = I²_rms R = (2.5)² × 44 = 6.25 × 44 = 275 W, agreeing with V²_rms/R = 12100/44 = 275 W. Maximum power: P_max = V²_max/R = (155.6)²/44 = 24211/44 = 550 W, which is 2 × 275 W. A good answer states the reason the readings are rms rather than assuming it, and never mixes a peak with an rms inside one application of Ohm's law.
