# Tuesday — PHY_102 nightly check

*Power in an A.C. circuit, as concepts.*
*12 questions, straight after the hour. Score out of 12.*

**1.** A 240 V rms supply drives 5.0 A rms through a load at power factor 0.80. Calculate the average (real) power consumed.
A. 960 W
B. 1200 W
C. 720 W
D. 1500 W

**2.** A single-phase load is metered at 1.8 kW real power while drawing 2.4 kVA apparent power. Calculate its power factor.
A. 0.88
B. 1.33
C. 0.66
D. 0.75

**3.** A motor draws an apparent power of 2500 VA and consumes 1500 W of real power. Calculate the reactive power.
A. 1000 var
B. 4000 var
C. 2915 var
D. 2000 var

**4.** A load draws an apparent power of 500 VA at a power factor of 0.60. The instantaneous power p(t) oscillates about its average value with amplitude S. Calculate the minimum value of p(t).
A. −200 W
B. −500 W
C. +300 W
D. −400 W

**5.** A supply voltage is v(t) = 170 sin(377t) V, with t in seconds. Calculate the frequency at which the instantaneous power delivered to a load pulsates.
A. 60 Hz
B. 754 Hz
C. 120 Hz
D. 377 Hz

**6.** An inductive load has a power factor of 0.50 lagging. Calculate the angle by which the current lags the supply voltage.
A. 26.6°
B. 60°
C. 30°
D. 28.6°

**7.** A 2.0 kW heater (PF = 1) and a 2.0 kW motor (PF = 0.50) each run from a 240 V rms supply. Calculate how much more rms current the motor draws than the heater.
A. 16.7 A
B. 0 A
C. 8.3 A
D. 4.2 A

**8.** A load's power factor is quoted as simply 0.80, with no further information. Which one of the following can you NOT deduce from that number?
A. The ratio P/S
B. Whether the current leads or lags the voltage
C. The size of the phase angle between v and i
D. The fraction of the volt-amperes that does work

**9.** A supply v(t) = 100 sin ωt V drives a current i(t) = 4.0 sin(ωt − 60°) A through a load. Calculate the average power and the apparent power.
A. P = 200 W, S = 200 VA
B. P = 173 W, S = 200 VA
C. P = 100 W, S = 200 VA
D. P = 200 W, S = 400 VA

**10.** A pure capacitor of reactance 25 Ω is connected across a 100 V rms supply. Calculate the rms current, the average power consumed and the reactive power.
A. 4.0 A, 0 W, 400 var
B. 4.0 A, 400 W, 0 var
C. 4.0 A, 400 W, 400 var
D. 4.0 A, 0 W, 100 var

**11.** With v = V₀ sin ωt and i = I₀ sin(ωt − φ), and using sin A sin B = ½[cos(A − B) − cos(A + B)], which expression equals p(t) = vi?
A. (V₀I₀/2)[cos φ + cos(2ωt − φ)]
B. V₀I₀[cos φ − cos(2ωt − φ)]
C. (V₀I₀/2)[cos φ − cos(ωt − φ)]
D. (V₀I₀/2)[cos φ − cos(2ωt − φ)]

**12.** The instantaneous power p(t) drawn by a load dips below zero for part of every cycle. What does that tell you about the load?
A. A pure resistor behaves the same way whenever v and i are both negative
B. Energy flows back to the source at those instants, so the load must contain reactance
C. The average power over a full cycle is negative
D. The power factor of the load is greater than 1

---

## Answers

**1. A** — *Real power from P = Vrms Irms cos φ.* P = V_rms I_rms cos φ = (240)(5.0)(0.80) = 960 W.

1200 W is V I with the power factor left out, which is the apparent power S in VA, not watts; 720 W uses sin φ = 0.60 instead of cos φ and is the reactive power in var; 1500 W divides by the power factor instead of multiplying.

**2. D** — *Power factor as the ratio P/S.* PF = P/S = 1.8/2.4 = 0.75. The power factor is the fraction of the volt-amperes drawn that does work, and it can never exceed 1.

1.33 is S/P, the ratio upside down, and is impossible because it is greater than 1; 0.66 is Q/S = sin φ, the reactive factor, with Q = √(2.4² − 1.8²) = 1.59 kvar; 0.88 is Q/P = tan φ.

**3. D** — *Reactive power from the power triangle S² = P² + Q².* S² = P² + Q², so Q = √(S² − P²) = √(2500² − 1500²) = √(6 250 000 − 2 250 000) = √4 000 000 = 2000 var. It is a 3-4-5 triangle scaled by 500.

1000 var is S − P, subtracting the powers arithmetically, which the triangle forbids; 4000 var is S + P; 2915 var is √(S² + P²), adding inside the root instead of subtracting.

**4. A** — *Minimum instantaneous power S(cos φ − 1).* p(t) = P − S cos(2ωt − φ) swings between P − S and P + S. The average is P = S cos φ = (500)(0.60) = 300 W, so the minimum is 300 − 500 = −200 W, that is, S(cos φ − 1). The negative part of the cycle is energy returning to the source.

−500 W is −S, forgetting that the swing is centred on P rather than on zero; +300 W is the average power, not the minimum; −400 W is minus the reactive power S sin φ, which is not a value p(t) takes on this basis.

**5. C** — *Instantaneous power ripples at twice the supply frequency.* ω = 377 rad/s, so the supply frequency is f = ω/2π = 377/6.283 = 60 Hz. The product v(t)i(t) contains cos(2ωt − φ), so the power completes two cycles for every one of the voltage: 2f = 120 Hz.

60 Hz is the supply frequency, forgetting the doubling; 377 Hz reads ω as if it were f, skipping the 2π; 754 Hz doubles ω but still never divides by 2π.

**6. B** — *Phase angle from the power factor.* PF = cos φ, so φ = cos⁻¹(0.50) = 60°. Lagging means the current reaches its peak 60° after the voltage does.

30° is sin⁻¹(0.50), using sin in place of cos; 26.6° is tan⁻¹(0.50); 28.6° reads 0.50 as an angle in radians and converts it to degrees.

**7. C** — *Line current from real power and power factor.* The cable carries S = P/PF, and I = S/V. Heater: I = 2000/240 = 8.33 A. Motor: S = 2000/0.50 = 4000 VA, so I = 4000/240 = 16.67 A. The difference is 16.67 − 8.33 = 8.3 A.

16.7 A is the motor's whole current, not the extra; 0 A assumes equal watts means equal amps, which holds only at equal power factor; 4.2 A multiplies by the power factor instead of dividing, so it makes the motor draw less than the heater.

**8. B** — *Power factor is even in φ: lagging versus leading.* cos φ is an even function: cos(+36.9°) = cos(−36.9°) = 0.80. The number fixes P/S, the size of the angle (36.9°) and the fraction of S that is real power, but it cannot say whether φ is positive (inductive, current lags) or negative (capacitive, current leads). That is why a power factor is always written with the word lagging or leading attached.

The other three options are all exactly what PF = P/S = cos φ tells you directly.

**9. C** — *Average power from peak values and phase angle.* The amplitudes given are peak values, so P = ½V₀I₀ cos φ = ½(100)(4.0)(cos 60°) = 100 W, and S = V_rms I_rms = ½V₀I₀ = 200 VA.

P = 200 W drops cos φ and so quotes the apparent power in watts; P = 173 W uses sin φ, which is the reactive power in var; the pair 200 W and 400 VA treats the peak values as rms and loses the ½ throughout.

**10. A** — *Average and reactive power of a pure reactance.* I = V/X_C = 100/25 = 4.0 A. The current leads the voltage by 90° in a pure capacitor, so cos φ = 0 and P = V I cos φ = 0 W: energy stored in the electric field each quarter cycle is returned in the next. The reactive power is Q = V I sin φ = 400 var, equally I²X_C = (16)(25) = 400 var.

400 W as the real power calls stored energy dissipated energy; 400 W together with 400 var counts the same energy twice; 100 var is I X_C with the current not squared.

**11. D** — *Deriving average power from the instantaneous power.* With A = ωt and B = ωt − φ, A − B = φ and A + B = 2ωt − φ, so p(t) = V₀I₀ sin ωt sin(ωt − φ) = (V₀I₀/2)[cos φ − cos(2ωt − φ)]. The constant term is the average power (V₀I₀/2)cos φ = V_rms I_rms cos φ, and the 2ω term averages to zero over whole cycles.

The + version has the sign of the identity wrong; the version without the ½ drops the factor the identity carries; cos(ωt − φ) puts the ripple at the supply frequency instead of twice it.

**12. B** — *Meaning of negative instantaneous power.* p(t) = v(t)i(t) is the rate at which energy flows from the source into the load, so p < 0 means energy is returning to the source: a reactance is giving back what it stored in its magnetic or electric field. The swing is p = P − S cos(2ωt − φ), whose minimum P − S = S(cos φ − 1) is negative for any φ ≠ 0.

A pure resistor never does this, because v and i share a sign at every instant so their product is never negative; the full-cycle average stays positive at P = S cos φ; and no power factor can exceed 1.
