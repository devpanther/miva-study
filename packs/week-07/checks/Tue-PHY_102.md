# Tuesday — PHY_102 nightly check

*Power in an A.C. circuit, as concepts.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

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

**9. (show your working)** A supply v(t) = 100 sin ωt V drives a current i(t) = 4.0 sin(ωt − 60°) A through a load. Calculate the average power and the apparent power. Show your working.

**10. (show your working)** A pure capacitor of reactance 25 Ω is connected across a 100 V rms supply. Calculate the rms current, the average power consumed and the reactive power. Show your working.

**11. (show your working)** With v = V₀ sin ωt and i = I₀ sin(ωt − φ), use the identity sin A sin B = ½[cos(A − B) − cos(A + B)] to write p(t) = vi as a constant plus one oscillating term. Hence show P = Vrms Irms cos φ. Show your working.

**12. (show your working)** The instantaneous power p(t) drawn by a load is measured and found to dip below zero for part of every cycle. Explain what a negative instantaneous power means physically, and whether this could happen for a purely resistive load.

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

**9.** *Average power from peak values and phase angle.* The amplitudes are peak values, so P = ½V₀I₀ cos φ = ½(100)(4.0)cos 60° = (200)(0.500) = 100 W. Equivalently V_rms = 70.7 V, I_rms = 2.83 A and P = (70.7)(2.83)(0.500) = 100 W. Apparent power S = ½V₀I₀ = V_rms I_rms = 200 VA.

Final answers: P = 100 W (accept 99 to 101 W) and S = 200 VA (accept 199 to 201 VA). Q = 173 var may be given as well but is not required. P = 400 W comes from using peak values without the ½ and dropping cos φ; P = 200 W drops cos φ only, which is S quoted as watts; both are wrong.

**10.** *Average and reactive power of a pure reactance.* I = V/X_C = 100/25 = 4.0 A. In a pure capacitor the current leads the voltage by 90°, so cos φ = cos 90° = 0 and the average power P = V I cos φ = 0 W: energy is stored in the electric field for a quarter cycle and returned in the next, and none is dissipated. The reactive power is Q = V I sin φ = (100)(4.0)(1) = 400 var, capacitive (leading), which may be written −400 var.

Final answers: I = 4.0 A, P = 0 W, Q = 400 var (accept 400 var capacitive, 400 var leading or −400 var). Also accepted: Q = I²X_C = (16)(25) = 400 var or V²/X_C = 400 var. Writing P = 400 W confuses reactive with real power and is wrong.

**11.** *Deriving average power from the instantaneous power.* p(t) = V₀I₀ sin ωt sin(ωt − φ). With A = ωt and B = ωt − φ, A − B = φ and A + B = 2ωt − φ, so p(t) = (V₀I₀/2)[cos φ − cos(2ωt − φ)]. The first term is a constant; the second is a sinusoid at 2ω whose average over any whole number of cycles is zero. So the average power is P = (V₀I₀/2) cos φ, and since V_rms = V₀/√2 and I_rms = I₀/√2, V_rms I_rms = V₀I₀/2, giving P = V_rms I_rms cos φ.

A correct answer must show the product form (V₀I₀/2)[cos φ − cos(2ωt − φ)], state that the cos(2ωt − φ) term averages to zero because it is a sinusoid over whole cycles, and convert V₀I₀/2 to V_rms I_rms. Writing the second term as cos(2ωt) without the φ, or claiming the ripple is at ω rather than 2ω, loses the derivation.

**12.** *Meaning of negative instantaneous power.* p(t) = v(t)i(t) is the rate at which energy flows from the source into the load. A negative value means that, at that instant, energy is flowing back from the load to the source: the load's reactance (inductor or capacitor) is returning energy it stored earlier in its magnetic or electric field. It cannot happen for a pure resistor, because v and i are in phase there, so they are always both positive or both negative and their product is never negative. The minimum of p(t) is S(cos φ − 1), which is zero only when φ = 0.

A correct answer says negative p means energy returning to the source (not an error and not negative average power), attributes it to stored energy in a reactance, and states that a resistor's p(t) is never negative because v and i have the same sign at every instant.
