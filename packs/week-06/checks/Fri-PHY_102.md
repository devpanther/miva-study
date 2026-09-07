# Friday — PHY_102 nightly check

*Problems-only session on Week 6.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** A source v = 170 sin(377t) V is connected across a 34 Ω resistor. Which equation gives the current in amperes?
A. i = 3.5 sin(377t)
B. i = 5.0 sin(377t)
C. i = 5.0 sin(60t)
D. i = 7.1 sin(377t)

**2.** An AC voltmeter reads 48 V across a 12 Ω resistor. What does an AC ammeter in series with the resistor read?
A. 4.0 A
B. 5.66 A
C. 2.83 A
D. 0.25 A

**3.** The instantaneous power in a resistor carrying a sinusoidal current rises to a maximum of 800 W. What is the average power?
A. 800 W
B. 566 W
C. 200 W
D. 400 W

**4.** A supply has frequency 60 Hz. How many complete cycles does it make in 0.25 s?
A. 240
B. 94
C. 0.0042
D. 15

**5.** A lamp is rated 60 W at 120 V rms. What is the peak current through it when operating normally?
A. 0.50 A
B. 0.35 A
C. 0.71 A
D. 1.0 A

**6.** A voltage is v = 100 sin(100πt) V, with t in seconds. Starting from t = 0, at what time does v first reach 50 V?
A. 5.0 ms
B. 1.67 ms
C. 8.3 ms
D. 95 ms

**7.** A heater dissipates an average power of 800 W when connected to a sinusoidal supply. Its resistance is 32 Ω. What is the peak voltage of the supply?
A. 226 V
B. 160 V
C. 113 V
D. 25 V

**8.** A problem gives a generator's peak voltage, its frequency, and the resistance of the resistor it drives, and asks for the rms current and the average power. Which given quantity is not needed?
A. The resistance
B. The peak voltage
C. The frequency
D. All three are needed

**9. (show your working)** An AC generator with a peak voltage of 36.0 V and a frequency of 50.0 Hz is connected to a 120 Ω resistor. Calculate the rms voltage, the rms current, the average power and the maximum power dissipated. State which given quantity is unused and check the ratio of the two powers. Show your working.

**10. (show your working)** A question sheet states a device's supply as 110 V rms in the question but 220 V rms in the answer key; both give the rms current as 5.0 A. Calculate the peak voltage for each figure and the peak current, and state which part of the answer is unaffected by the discrepancy. Show your working.

**11. (show your working)** A student's working for a 50 Ω heater on a 240 V rms supply reads: 'V_max = 240 × 0.7071 = 170 V; I_max = 170/50 = 3.4 A; P_av = (3.4)² × 50 = 578 W.' Identify each error and calculate the correct V_max, I_max, I_rms and P_av. Show your working.

**12. (show your working)** Ohm's law v = iR holds at every instant for a resistor on a sinusoidal supply. Explain why it may also be written I_rms = V_rms/R, and why P_av = I²_rms R gives the true average power with no extra numerical factor.

---

## Answers

**1. B** — *Current equation from the voltage equation.* i = v/R = (170/34) sin(377t) = 5.0 sin(377t) A. In a resistor the current has the same sin ωt as the voltage and the amplitude I_max = V_max/R.

3.5 sin(377t) uses the rms voltage 120 V for the amplitude; 5.0 sin(60t) replaces ω = 377 rad/s by the frequency 60 Hz; 7.1 sin(377t) multiplies the correct amplitude by √2.

**2. A** — *Ohm's law with rms values.* Both meters read rms, and Ohm's law holds within one kind of value: I_rms = V_rms/R = 48/12 = 4.0 A. No conversion factor is needed because the same 0.7071 divides out of both amplitudes.

5.66 A converts the answer to a peak value, which the meter does not display; 2.83 A applies 0.7071 to a value that is already rms; 0.25 A is R/V.

**3. D** — *Average power from maximum power.* P_max = I²_max R and P_av = I²_rms R with I_rms = I_max/√2, so P_av = P_max/2 = 400 W. Peak power in a resistor is always exactly twice the average.

800 W equates average with maximum; 566 W divides by √2 once, forgetting that power goes as the square of the current; 200 W divides by 4.

**4. D** — *Cycles from frequency and time.* Frequency is cycles per second, so cycles = f × t = 60 × 0.25 = 15. Equivalently T = 1/60 s and 0.25/(1/60) = 15.

240 divides f by t instead of multiplying; 94 is ωt = 377 × 0.25, the angle in radians, not the number of cycles; 0.0042 is t/f, which has no meaning here.

**5. C** — *Peak current from a power rating.* Ratings are rms: P_av = V_rms I_rms, so I_rms = 60/120 = 0.50 A. Then I_max = 0.50 × 1.4142 = 0.71 A (0.707 A).

0.50 A stops at the rms current; 0.35 A multiplies by 0.7071 instead of dividing; 1.0 A doubles the rms value.

**6. B** — *Time at which the instantaneous value reaches a given level.* 50 = 100 sin(100πt) means sin(100πt) = 0.5, so the first solution is 100πt = π/6 rad (30°). Then t = (π/6)/(100π) = 1/600 s = 1.67 ms.

5.0 ms is the quarter period, when v first reaches the peak of 100 V; 8.3 ms is the second time v = 50 V, on the way back down (100πt = 5π/6); 95 ms puts 30 degrees directly into 100πt = 30 without converting to radians.

**7. A** — *Peak voltage from average power and resistance.* P_av = V²_rms/R, so V_rms = √(P_av R) = √(800 × 32) = √25600 = 160 V. Then V_max = 160 × 1.4142 = 226 V.

160 V stops at the rms value; 113 V multiplies the rms by 0.7071 instead of 1.4142; 25 V is P/R = 25 without taking the square root.

**8. C** — *Redundant data in a resistive AC problem.* For a pure resistor, I_rms = V_rms/R = 0.7071 V_max/R and P_av = V²_rms/R contain no frequency: R is a constant of the component and the rms conversion factor is the same at every frequency. The frequency is a redundant given.

The peak voltage is needed to get V_rms, and R is needed for both the current and the power. Frequency would matter only for components (inductors, capacitors) that this circuit does not contain.

**9.** *Full resistive AC calculation from peak voltage.* V_rms = 0.7071 × 36.0 = 25.5 V. I_rms = V_rms/R = 25.5/120 = 0.212 A. P_av = V²_rms/R = (25.5)²/120 = 648/120 = 5.4 W (check: I²_rms R = (0.212)²(120) = 5.4 W). P_max = V²_max/R = (36.0)²/120 = 1296/120 = 10.8 W. The 50.0 Hz is unused because nothing in a purely resistive circuit depends on frequency. P_max/P_av = 10.8/5.4 = 2, as it must be.

A correct answer gives 25.5 V (accept 25.4 to 25.6), 0.212 A (accept 0.21 to 0.22), 5.4 W, 10.8 W, names the frequency as unused and shows the ratio 2. Using V_max in the average power (10.8 W) or applying 0.7071 twice (I = 0.15 A) is wrong.

**10.** *Converting rms to peak values.* V_max = V_rms/0.7071 = 1.4142 V_rms. For 110 V: V_max = 155.6 V (156 V). For 220 V: V_max = 311.1 V (311 V). The current is the same on both versions: I_max = 5.0/0.7071 = 7.07 A. The peak current is unaffected by the discrepancy; only the peak voltage changes, and it doubles because the rms figure doubled.

A correct answer gives 156 V and 311 V (accept 155 to 157 and 310 to 312), 7.07 A (accept 7.0 to 7.1), and says the current part is unaffected. Multiplying by 0.7071 (77.8 V, 156 V, 3.5 A) converts in the wrong direction and is wrong.

**11.** *Diagnosing a peak and rms calculation.* Error 1: rms to peak requires multiplying by 1.4142 (dividing by 0.7071), so V_max = 240 × 1.4142 = 339 V, not 170 V. Error 2: I_max = V_max/R = 339/50 = 6.79 A follows from the corrected peak; the student's 3.4 A is really I_rms/√2 in disguise. Error 3: P_av must use the rms current, not the peak: I_rms = V_rms/R = 240/50 = 4.8 A, so P_av = (4.8)²(50) = 1152 W = 1.15 kW (or V²_rms/R = 240²/50). The student's P_av used a peak-labelled current in an average-power formula, and the wrongly converted voltage.

A correct answer names the wrong-direction conversion and the use of a peak current in P_av, and gives V_max = 339 V (accept 338 to 340), I_max = 6.79 A (accept 6.7 to 6.9), I_rms = 4.8 A and P_av = 1152 W (accept 1.15 kW). P_max = 2304 W may be mentioned but is not required.

**12.** *Why rms values obey Ohm's law and the power formula.* Since R is constant, i = v/R at every instant means the current waveform is the voltage waveform scaled by 1/R: I_max = V_max/R. Both amplitudes are converted to rms by the same factor 0.7071, so the factor cancels and I_rms = V_rms/R as well; Ohm's law holds between any matching pair of values (peak with peak, rms with rms) but not across a mixed pair. For power, the instantaneous power is i²R, so the average power is (i²)_av R. The rms value is defined so that I²_rms is exactly (i²)_av, the mean of the squared current; substituting it into P = I²R therefore gives the true average with no further factor.

A correct answer says R is constant so both amplitudes scale by the same factor, and that I²_rms equals the mean of i² by definition, which is precisely what P = i²R averages.
