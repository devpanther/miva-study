# Friday — PHY_102 nightly check

*Problems-only session on Week 6.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** An AC generator with a peak voltage of 36.0 V and a frequency of 50.0 Hz is connected to a 120 Ω resistor. What are the rms voltage, the rms current, the average power and the maximum power?
A. 25.5 V; 0.212 A; 5.40 W; 10.8 W
B. 25.5 V; 0.212 A; 10.8 W; 21.6 W
C. 50.9 V; 0.424 A; 21.6 W; 43.2 W
D. 25.5 V; 0.150 A; 2.70 W; 5.40 W

**10.** A device draws 5.0 A rms. What is the peak current, and what is the peak voltage if the supply is 110 V rms, and if it is 220 V rms?
A. 3.54 A; 77.8 V; 156 V
B. 7.07 A; 156 V; 311 V
C. 7.07 A; 311 V; 156 V
D. 10 A; 220 V; 440 V

**11.** A student writes, for a 50 Ω heater on a 240 V rms supply: V_max = 240 × 0.7071 = 170 V, then I_max = 170/50 = 3.4 A, then P_av = (3.4)² × 50 = 578 W. What are the correct V_max, I_rms and P_av?
A. 170 V; 3.4 A; 578 W
B. 339 V; 6.79 A; 2304 W
C. 339 V; 4.8 A; 1152 W
D. 339 V; 4.8 A; 576 W

**12.** Ohm's law v = iR holds at every instant for a resistor on a sinusoidal supply. Why may it also be written I_rms = V_rms/R, and why does P_av = I_rms²R need no extra numerical factor?
A. R is constant, so peak and rms values are equal, and P = I²R holds for any current at all
B. Rms values are averages, and the average of a product equals the product of the averages
C. The two 0.7071 factors multiply to ½, which is exactly the factor P_av = ½P_max needs
D. Both waveforms scale by the same 0.7071, so it cancels; and I_rms² is by definition the mean of i², which is what P = i²R averages

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

**9. A** — *Full resistive AC calculation from peak voltage.* V_rms = 0.7071 × 36.0 = 25.5 V, so I_rms = 25.5/120 = 0.212 A and P_av = V_rms²/R = 648/120 = 5.40 W. The maximum power is V_max²/R = 1296/120 = 10.8 W, twice the average. The 50.0 Hz is never used, since nothing in a purely resistive circuit depends on frequency.

10.8 W as the average uses the peak voltage in P_av; the third option converts the wrong way with √2; the fourth applies 0.7071 a second time to the current.

**10. B** — *Converting rms to peak values.* Peak is rms times √2: I_max = 5.0 × 1.4142 = 7.07 A. For the 110 V supply V_max = 110 × 1.4142 = 156 V, and for 220 V it is 311 V, double the first because the rms figure doubled. The current is the same whichever supply voltage is quoted.

The first option multiplies by 0.7071 and so converts in the wrong direction; the third swaps the two voltages; the last doubles instead of using √2.

**11. C** — *Diagnosing a peak and rms calculation.* Going from rms to peak means multiplying by √2, not by 0.7071, so V_max = 240 × 1.4142 = 339 V and I_max = 339/50 = 6.79 A. Average power must be built from rms values: I_rms = 240/50 = 4.8 A, so P_av = (4.8)²(50) = 1152 W, the same as V_rms²/R.

170 V and 578 W are the student's two errors left uncorrected; 2304 W puts the peak current into an average-power formula (it is P_max); 576 W halves a formula that needs no extra factor.

**12. D** — *Why rms values obey Ohm's law and the power formula.* Because R is constant, the current waveform is just the voltage waveform scaled by 1/R, so I_max = V_max/R; converting both amplitudes to rms multiplies each by the same 0.7071, which cancels and leaves I_rms = V_rms/R. For power, the instantaneous value is i²R, so the average is (i²)_av R, and the rms current is defined precisely so that I_rms² equals (i²)_av. No extra factor is needed.

Peak and rms are not equal; averages of products are not products of averages; and the ½ of P_av = ½P_max is already inside the rms definition, not applied twice.
