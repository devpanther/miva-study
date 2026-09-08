# Tuesday — PHY_102 nightly check

*Week 6, exactly as Dr. Adeniji builds it.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** A mains supply is 230 V rms at 50 Hz. Which equation gives the instantaneous voltage in volts, with t in seconds?
A. v = 230 sin(314t)
B. v = 325 sin(50t)
C. v = 325 sin(314t)
D. v = 163 sin(314t)

**10.** For i = I_max sin ωt the average of sin²ωt over a complete cycle is ½. Carrying out the three root-mean-square steps in the right order, what is I_rms in terms of I_max, and its value for I_max = 4.0 A?
A. I_max²/2; 8.0 A²
B. 0; 0 A
C. I_max/√2; 2.83 A
D. I_max√2; 5.66 A

**11.** An AC ammeter reads 3.0 A for the current in a 40 Ω resistor. What are the average power dissipated, the peak current, and the maximum instantaneous power?
A. 360 W; 4.24 A; 720 W
B. 720 W; 4.24 A; 1440 W
C. 360 W; 2.12 A; 180 W
D. 180 W; 4.24 A; 360 W

**12.** Why does the plain average of a sinusoidal current over a complete cycle tell you nothing about its heating, and what do the three steps of 'root mean square' do, in order?
A. The average is I_max/2, which is too small; the steps are root, then mean, then square
B. The average is zero because the current stops twice a cycle; the steps are mean, then square, then root
C. The average is I_max, which is too large; squaring corrects it, then the mean and root are taken
D. The average is zero because the two half-cycles cancel; square to remove the sign, take the mean, then take the root

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

**9. C** — *Writing the source equation from rms voltage and frequency.* The amplitude of v = V_max sin ωt is the peak value, V_max = V_rms√2 = 230 × 1.4142 = 325 V, and ω = 2πf = 2π(50) = 314 rad/s. So v = 325 sin(314t).

230 sin(314t) uses the rms value as the amplitude; 325 sin(50t) puts the frequency where the angular frequency belongs; 163 sin(314t) multiplies by 0.7071 when it should divide.

**10. C** — *Derivation of the rms current.* Square first: i² = I_max² sin²ωt. Take the mean over a cycle: (i²)_av = ½I_max². Then take the root: I_rms = √(½I_max²) = I_max/√2 = 0.7071 I_max, which for I_max = 4.0 A is 2.83 A.

I_max²/2 stops at the mean square and still has units of A²; zero is what averaging before squaring gives; multiplying by √2 instead of dividing converts the wrong way.

**11. A** — *Average power from an rms current.* An AC ammeter reads rms, so P_av = I_rms²R = (3.0)²(40) = 360 W. The peak current is I_max = 3.0√2 = 4.24 A, and the maximum instantaneous power is I_max²R = (4.24)²(40) = 720 W, exactly twice the average, as it always is for a resistor.

720 W as the average uses the peak current in P_av; 2.12 A multiplies by 0.7071 instead of dividing; 180 W puts a spurious ½ into P = I²R, which already averages correctly with rms values.

**12. D** — *Why rms rather than the plain average.* Over a full cycle the positive and negative half-cycles are mirror images, so they cancel and the mean is zero, which would wrongly suggest no heating at all. Squaring removes the sign, and it is also the right thing physically because power goes as i², so the mean square ½I_max² is genuine; the root then brings the answer back to amperes. Square, mean, root, in that order.

The current does not stop twice a cycle, it reverses; and the average is neither I_max/2 nor I_max but zero.
