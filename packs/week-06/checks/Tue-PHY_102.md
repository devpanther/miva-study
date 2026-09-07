# Tuesday — PHY_102 nightly check

*Week 6, exactly as Dr. Adeniji builds it.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** A sinusoidal supply has a peak voltage of 340 V. What is its rms voltage?
A. 481 V
B. 170 V
C. 240 V
D. 340 V

**2.** A supply has frequency 60 Hz. What is its angular frequency ω?
A. 60 rad/s
B. 377 rad/s
C. 9.55 rad/s
D. 0.0167 rad/s

**3.** A source with V = 50 sin ωt (volts) is connected across a 20 Ω resistor. What is the peak current?
A. 1.8 A
B. 3.5 A
C. 0.40 A
D. 2.5 A

**4.** An AC ammeter in series with a heater reads 4.0 A. What is the peak current through the heater?
A. 2.83 A
B. 4.0 A
C. 8.0 A
D. 5.66 A

**5.** An alternating current has peak value 6.0 A. What is the average value of I² over one complete cycle?
A. 36 A²
B. 18 A²
C. 4.24 A²
D. 0 A²

**6.** A current is given by i = 3.0 sin(200πt) A. What is its period?
A. 0.010 s
B. 0.0050 s
C. 100 s
D. 1.6 × 10⁻³ s

**7.** A source voltage is v = 60 sin(100πt) V, with t in seconds. What is the instantaneous voltage at t = 2.5 ms?
A. 60 V
B. 42 V
C. 15 V
D. 0.82 V

**8.** An AC voltmeter connected across a socket reads 230 V. Which value of the sinusoidal waveform is the meter reporting?
A. The rms value
B. The peak value
C. The trough-to-crest swing
D. The average over one cycle

**9. (show your working)** The mains supply is 230 V rms at 50 Hz. Calculate the peak voltage and the angular frequency, then write the equation for the instantaneous voltage in the form v = V_max sin ωt. Show your working.

**10. (show your working)** Starting from i = I_max sin ωt and the fact that the average of sin²ωt over a complete cycle is ½, show that I_rms = I_max/√2. Then calculate I_rms for I_max = 4.0 A. Show your working.

**11. (show your working)** An AC ammeter reads 3.0 A for the current in a 40 Ω resistor. Calculate the average power dissipated, the peak current, and the maximum instantaneous power. State what steady DC current would heat the resistor at the same average rate. Show your working.

**12. (show your working)** Explain why the plain average of a sinusoidal current over a complete cycle gives no useful information, and how squaring the current fixes the problem. State the three operations in 'root mean square' in the order they are carried out.

---

## Answers

**1. C** — *Rms value from peak value.* V_rms = 0.7071 V_max = 0.7071 × 340 = 240 V (240.4 V). Peak to rms always makes the number smaller.

481 V multiplies by 1.4142 instead, giving an rms above the peak, which no waveform can have; 170 V halves the peak instead of dividing by √2; 340 V quotes the peak as if it were the rms.

**2. B** — *Angular frequency from frequency.* ω = 2πf = 2π × 60 = 377 rad/s (376.99 to five figures).

60 rad/s uses f where ω belongs, out by a factor of 2π; 9.55 rad/s divides by 2π instead of multiplying; 0.0167 is the period T = 1/f in seconds, not an angular frequency.

**3. D** — *Peak current from peak voltage by Ohm's law.* I = V/R = (50/20) sin ωt = 2.5 sin ωt, so I_max = V_max/R = 2.5 A. Ohm's law links the two amplitudes directly.

1.8 A divides the rms voltage (35.4 V) by R, mixing an rms with a peak; 3.5 A multiplies 2.5 A by √2, as if 50 V were an rms value; 0.40 A is R/V, the ratio upside down.

**4. D** — *Peak value from an rms meter reading.* AC meters read rms, so I_rms = 4.0 A and I_max = I_rms/0.7071 = 4.0 × 1.4142 = 5.66 A.

2.83 A multiplies by 0.7071 instead of dividing, giving a peak below the rms; 4.0 A treats the meter reading as the peak; 8.0 A doubles it, confusing the peak with the trough-to-crest swing.

**5. B** — *Mean of the squared current.* I² = I²_max sin²ωt, and the average of sin²ωt over a cycle is ½, so (I²)_av = ½I²_max = ½ × 36 = 18 A². Its square root, 4.24 A, is the rms current.

36 A² is I²_max itself, forgetting the ½; 4.24 A² is the rms current wearing the wrong unit; 0 is the average of I, not of I², which is exactly why squaring is needed.

**6. A** — *Period from the angular frequency in an equation.* Compare with i = I_max sin ωt: ω = 200π rad/s. Then f = ω/2π = 100 Hz and T = 1/f = 0.010 s (equivalently T = 2π/ω).

0.0050 s takes 200 as the frequency and computes 1/200; 100 s reads the frequency as if it were the period; 1.6 × 10⁻³ s is 1/ω, forgetting the 2π.

**7. B** — *Instantaneous value from the source equation.* ωt = 100π × 0.0025 = 0.25π rad = 45°, so v = 60 sin 45° = 60 × 0.7071 = 42 V (42.4 V).

60 V is the peak, reached only when ωt = 90°; 15 V drops the π (sin 0.25 rad = 0.247); 0.82 V feeds 0.785 into a calculator set to degrees.

**8. A** — *What AC meters read.* AC ammeters and voltmeters are designed to read rms values, the equivalent DC value that would dissipate the same power in a resistor. A 230 V reading therefore implies a peak of 230 × 1.4142 = 325 V.

The peak is larger than any rms reading; the trough-to-crest swing is twice the peak and is never displayed; the average over a full cycle is zero, which is why meters cannot be built to read it.

**9.** *Writing the source equation from rms voltage and frequency.* V_max = V_rms/0.7071 = 230 × 1.4142 = 325 V (325.3 V). ω = 2πf = 2π × 50 = 314 rad/s (314.2). So v = 325 sin(314t) volts, with t in seconds and 314t in radians.

A correct answer states V_max = 325 V (accept 324 to 326), ω = 314 rad/s (accept 314 to 315) and v = 325 sin(314t). Writing v = 230 sin(314t) uses the rms as the amplitude, and v = 325 sin(50t) uses f in place of ω; both are wrong.

**10.** *Derivation of the rms current.* Square: i² = I²_max sin²ωt. Average over a cycle: (i²)_av = I²_max × (sin²ωt)_av = ½I²_max. Root: I_rms = √(½I²_max) = I_max/√2 = 0.7071 I_max. For I_max = 4.0 A: I_rms = 4.0/1.4142 = 2.83 A (2.828 A).

A correct answer shows the three steps in order (square, average, square root), arrives at I_max/√2, and gives 2.83 A (accept 2.8 to 2.9). Averaging before squaring gives zero and is wrong; leaving the answer as 8.0 A² (the mean square) is incomplete.

**11.** *Average power from an rms current.* The meter reads rms, so P_av = I²_rms R = (3.0)²(40) = 360 W. Peak current I_max = 3.0 × 1.4142 = 4.24 A. Maximum instantaneous power P_max = I²_max R = (4.24)²(40) = 720 W, exactly 2P_av. A steady DC current of 3.0 A would dissipate the same 360 W, which is what the rms value means.

A correct answer states 360 W, 4.24 A (accept 4.2 to 4.3), 720 W and a DC current of 3.0 A. Using the peak current in P_av (720 W) or quoting 4.24 A as the equivalent DC current is wrong.

**12.** *Why rms rather than the plain average.* A sinusoidal current is positive for one half-cycle and negative for the other, and the two halves are mirror images, so over a complete cycle they cancel and the average is zero. That would falsely suggest the current does no heating. Squaring removes the sign: i² = I²_max sin²ωt is never negative, so it has a genuine non-zero average, ½I²_max, and this mean square is also what fixes the heating because power goes as i². The operations, in order: square the instantaneous value, take the mean over a cycle, take the square root.

A correct answer says the full-cycle mean is zero because positive and negative halves cancel, that squaring makes every value non-negative (and matches P = i²R), and lists square, mean, root in that order.
