# Thursday — PHY_108 fast-hour check

*Discharging a capacitor: the decay law, the time constant, the two graphs, and the finishing calculations.*
*5 questions, straight after the hour. Score out of 5.*

**1.** A capacitor discharges from V₀ = 10.00 V. Readings every 10 s:

t (s):  0     10    20    30    40    50
V (V):  10.00 6.07  3.68  3.23  1.35  0.82

Which reading is the outlier?
A. t = 10 s
B. t = 40 s
C. t = 30 s
D. t = 50 s

**2.** For a discharging capacitor, the best-fit line of ln V (y-axis) against t (x-axis) passes through (4.0 s, 2.40) and (54.0 s, 0.40). What is the time constant τ?
A. 25.0 s
B. −25.0 s
C. 0.0400 s
D. 50.0 s

**3.** A discharge graph gives τ = 24.0 s. The resistor is 12 kΩ and the capacitor is marked 2200 μF. What is the percentage error in the experimental capacitance?
A. 0.091%
B. 10.0%
C. 91%
D. 9.1%

**4.** With R = 10 kΩ, C = 2200 μF and V₀ = 12.0 V, the voltmeter reads 4.41 V at t = 22 s after the key is opened. R is replaced by 20 kΩ with everything else unchanged. What does the voltmeter read at t = 22 s now?
A. 4.41 V
B. 7.28 V
C. 2.21 V
D. 1.62 V

**5.** The voltmeter that follows the decay is connected across the capacitor and has a large but finite resistance R_v. What is its effect on the measured time constant?
A. τ too small, since R_v is a second discharge path in parallel with R
B. τ too large, since R_v adds to R in series
C. No effect, since a voltmeter draws no current
D. τ unchanged but V₀ too large, since the meter adds an emf

---

## Answers

**1. C** — *Spotting an outlier in exponential decay readings.* In an exponential decay the voltage falls by the same factor in every equal interval. Check the ratio of each reading to the one before: 6.07/10.00 = 0.607, 3.68/6.07 = 0.606, 3.23/3.68 = 0.878, 1.35/3.23 = 0.418, 0.82/1.35 = 0.607. Only the reading at t = 30 s breaks the pattern; the expected value there is 3.68 × 0.607 = 2.23 V, so 3.23 V is a digit slip.

t = 40 s is the point after the outlier, whose ratio only looks wrong because 3.23 V is wrong; t = 10 s and t = 50 s both sit on the 0.607 pattern.

**2. A** — *Time constant from the gradient of the ln V graph.* Gradient = (0.40 − 2.40)/(54.0 − 4.0) = −2.00/50.0 = −0.0400 s⁻¹. Since ln V = ln V₀ − t/τ, the gradient is −1/τ, so τ = −1/(−0.0400) = 25.0 s.

−25.0 s attaches the minus sign to τ instead of to the gradient; a time constant cannot be negative. 0.0400 s quotes the size of the gradient as if it were τ, forgetting the reciprocal. 50.0 s is the run Δt between the two points, not τ.

**3. D** — *Experimental capacitance and percentage error.* C = τ/R = 24.0/(12 × 10³) = 2.00 × 10⁻³ F = 2000 μF. Percentage error = (theoretical − experimental)/theoretical × 100 = (2200 − 2000)/2200 × 100 = 9.1%.

10.0% divides the difference by the experimental 2000 μF instead of the nominal 2200 μF; 0.091% is the fraction 0.091 written as if it were already a percentage; 91% comes from a factor-of-ten slip that makes C = 200 μF.

**4. B** — *Effect of changing R on the discharge reading.* Originally τ = RC = 10⁴ × 2.2 × 10⁻³ = 22 s, so 22 s is one time constant and the reading is 0.368 × 12.0 = 4.41 V. Doubling R doubles τ to 44 s, so t = 22 s is now only half a time constant: V = 12.0 × e^(−22/44) = 12.0 × 0.607 = 7.28 V. A bigger R makes the discharge slower, so more voltage remains.

4.41 V assumes τ does not depend on R; 2.21 V halves the reading as if doubling R halved the voltage by Ohm's law; 1.62 V is 12.0 e⁻², which halves τ instead of doubling it.

**5. A** — *Voltmeter loading in a discharge circuit.* The meter sits in parallel with the capacitor, so charge leaks away through R_v as well as through R. The effective resistance is R∥R_v, which is less than R, so the decay is faster than it should be and the measured τ = R_eff C is too small. Then C = τ/R comes out too small as well; the remedy is a meter of very high resistance.

A series resistance would belong to an ammeter, not a voltmeter; no real meter draws zero current; a voltmeter has no emf of its own.
