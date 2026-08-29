# Tuesday — PHY_102 nightly check

*Power in an A.C. circuit, the concepts: the instantaneous power p(t) = v(t)i(t) and its oscillation at twice the supply frequency, the derivation of P = V_rms I_rms cos φ, why a pure reactance dissipates no average power, and the distinction between real, reactive and apparent power with the power factor cos φ = R/Z = P/S.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** For v = V₀ sin ωt and i = I₀ sin(ωt − φ), the instantaneous power p(t) = v i can be written as a constant plus a single oscillating term. That form is:
a) (V₀I₀/2)[cos φ − cos(ωt − φ)]
b) (V₀I₀/2)[sin φ − sin(2ωt − φ)]
c) (V₀I₀/2)[cos φ − cos(2ωt − φ)]
d) V₀I₀ cos φ · sin²(ωt)

**2.** The instantaneous power in an AC circuit oscillates at:
a) the supply frequency f, in phase with the current
b) twice the supply frequency, 2f
c) half the supply frequency, f/2
d) a frequency that depends on the power factor

**3.** An ideal inductor on an AC supply carries a large current and has a large voltage across it, yet its average power is zero. The reason is that:
a) an ideal inductor carries no current, so p = vi is zero at every instant
b) the current averages to zero over a cycle, and the average of a product is the product of the averages
c) X_L is measured in ohms but is an imaginary quantity, so I²X_L cannot be a real power
d) the stored magnetic energy is returned to the source in the quarter-cycle after it is taken

**4.** For a series AC circuit, the power factor is:
a) cos φ = R/Z, the ratio of real power to apparent power
b) sin φ = X/Z, the ratio of reactive power to apparent power
c) tan φ = X/R, the ratio of reactive power to real power
d) cos φ = Z/R, so a circuit with reactance has a power factor above 1

**5.** Two loads each draw the same rms current from the same supply; one has a power factor of 0.80 lagging, the other 0.80 leading. Comparing them:
a) the lagging load consumes more, because inductive loads are the ones that do mechanical work
b) the leading load consumes negative real power, since energy flows back to the source
c) both consume the same real power, and differ only in the sign of their reactive power
d) the leading load has the larger apparent power, because of its extra charging current

**6.** A slide states that in a **purely reactive** AC circuit "the power can be calculated using P = V × I × sin(θ)". The correct reading of that expression is:
a) it is right as written — a purely reactive circuit consumes VI sin θ watts
b) it is the reactive power, measured in var; the real power consumed is zero
c) it is the apparent power, which for a purely reactive circuit is equal to VI
d) it is the real power for a capacitor only; for an inductor the sign is reversed

**7.** Over part of every cycle p(t) is negative. This means that:
a) the current has reversed direction, as it does twice in every AC cycle
b) the circuit is generating energy, which is how reactance raises the power factor
c) the measurement is faulty, since a wattmeter reading is always positive
d) energy is flowing from the circuit back to the source at that instant

**8.** Transformers and supply cables are rated in kVA rather than kW because:
a) their winding heating and core flux are set by current and voltage, not by the load's phase angle
b) the transformer itself consumes reactive power, which must be added to the load's watts
c) the power factor of a transformer is always 1, so kVA and kW are numerically equal
d) kVA is the larger number and so builds a safety margin into the nameplate

**9. (explain why)** Starting from p(t) = v(t)i(t), derive P_av = V_rms I_rms cos φ. Say precisely which term of your expression vanishes on averaging and why it vanishes, and explain what the surviving term represents physically.

**10. (explain why)** Explain why neither a pure inductor nor a pure capacitor dissipates any average power, although each carries current and has voltage across it. Then explain why this is the reason X_L and X_C enter the impedance at right angles to R rather than being added to it.

**11. (explain why)** Define real, reactive and apparent power, giving the unit of each, and explain why S² = P² + Q² rather than S = P + Q. Explain also why a power factor of 0.60 tells you the ratio of two of these quantities but not whether the current leads or lags.

**12. (explain why)** The lecture deck states both that "in a purely reactive AC circuit the power can be calculated using P = V·I·sin(θ)" and, two slides later, that "reactances do not dissipate energy". Explain why these cannot both be true as written, identify which one is right, and say what the other expression actually measures.

---

## Answers

**1. c** — *Instantaneous power decomposed by the product-to-sum identity.* sin A sin B = ½[cos(A − B) − cos(A + B)] with A = ωt and B = ωt − φ gives (V₀I₀/2)[cos φ − cos(2ωt − φ)]: a constant term carrying the whole average, plus a double-frequency ripple. (a) keeps the ripple at ω, the classic slip of forgetting that A + B = 2ωt − φ. (b) applies the identity for cos A cos B or simply interchanges sine and cosine, which would make the average power zero for a resistor. (d) is the correct form only for φ = 0 and then multiplies it again by cos φ, double-counting the power factor.

**2. b** — *The power ripple is at twice the supply frequency.* v and i each change sign twice per cycle and, in a resistor, do so together, so their product completes **two** cycles for every one of the supply — the 2ωt in the answer to question 1. (a) confuses the frequency of the current with that of its square. (c) inverts the relation. (d) confuses the ripple's **frequency**, which is always 2f, with its **offset**, which is what cos φ sets.

**3. d** — *A reactance stores energy and gives it back; it does not convert it.* Over one quarter-cycle the source pours energy into the magnetic field (up to ½LI₀²); over the next it is returned, so p(t) is positive for two quarter-cycles and equally negative for the other two and the mean is exactly zero. (a) is simply false — the current is V/X_L, and is large at low frequency. (b) invokes a rule that does not exist: the average of a product is not the product of the averages, as a resistor proves, where i averages to zero yet p does not. (c) confuses the algebraic bookkeeping of complex impedance with the physics; I²X_L is a perfectly real number of var.

**4. a** — *Power factor is the resistive side over the hypotenuse.* PF = P/S = (VI cos φ)/(VI) = cos φ, and from the impedance triangle cos φ = R/Z. (b) is the *reactive* factor — a real quantity, but it gives Q/S, not P/S. (c) is tan φ, which is Q/P, not the power factor. (d) inverts the ratio and would give values greater than 1, which is impossible: no circuit can consume more watts than the volt-amperes it draws.

**5. c** — *cos φ is an even function; the sign of φ lives entirely in Q.* P = VI cos φ, and cos(+36.9°) = cos(−36.9°) = 0.80, so both loads consume the same watts. What differs is Q = VI sin φ, positive (lagging, inductive) for one and negative (leading, capacitive) for the other — which is exactly why one can be used to correct the other. (a) confuses a mechanical application with the mathematics. (b) confuses a **leading current** with **reverse power flow**; a capacitive load still consumes. (d) is wrong because S = VI depends only on the two magnitudes, which are equal by hypothesis.

**6. b** — *VI sin θ is reactive power, in var, not power consumed.* It measures the rate at which energy is borrowed from and returned to the source. In a purely reactive circuit θ = ±90°, so VI sin θ = ±VI: the **whole** apparent power is reactive and the real power is **zero**. (a) takes the slide literally and contradicts the deck's own correct statement that reactances do not dissipate energy. (c) confuses Q with S — they are equal in magnitude here only because P = 0, so it gives the right number for the wrong quantity and fails as soon as any resistance is present. (d) invents a distinction between L and C; both dissipate nothing, and the sign of Q reflects lead or lag, not consumption.

**7. d** — *Negative instantaneous power is a reverse flow of energy.* During those instants v and i have opposite signs, so the circuit is returning stored field energy to the source rather than taking it. (a) is true but irrelevant — in a resistor the current reverses too, yet v reverses with it and p stays positive throughout. (b) confuses returning borrowed energy with creating it, and reverses the effect of reactance on the power factor. (c) treats a real physical feature of p(t) as an instrument fault; a wattmeter reads the **average**, which is what stays positive for a passive load.

**8. a** — *Plant is limited by current and by voltage, neither of which knows the phase angle.* Copper loss is I²R and core flux is set by V, so a 100 kW load at PF 0.50 stresses the transformer exactly as hard as a 200 kW load at unity — hence a VA rating. (b) invents a load: the transformer's own magnetising vars are small and are not what the rating expresses. (c) is false — a transformer's power factor is whatever its load makes it. (d) mistakes a physical limit for marketing; the nameplate figure is the real ceiling, not padding.

**9.** *Concept: the average power is the constant term of p(t); the double-frequency term integrates to zero.* Write v = V₀ sin ωt and i = I₀ sin(ωt − φ), where φ is the angle by which the current lags the voltage. Then p(t) = V₀I₀ sin ωt sin(ωt − φ), and applying sin A sin B = ½[cos(A − B) − cos(A + B)] gives **p(t) = (V₀I₀/2)[cos φ − cos(2ωt − φ)]**. The second term is a pure sinusoid of angular frequency **2ω**; the integral of any sinusoid over a whole number of periods is zero, so it contributes **nothing** to the mean, however large its amplitude. Only the first term survives, and it is a constant, so it is its own average: **P_av = (V₀I₀/2) cos φ**. Since V_rms I_rms = (V₀/√2)(I₀/√2) = V₀I₀/2, this is **P_av = V_rms I_rms cos φ**. Physically, the constant term is the part of the energy flow that goes **one way only** — the irreversible conversion in the resistance — while the 2ω term is the reversible sloshing of energy into and out of the magnetic and electric fields, which transports energy back and forth but delivers none over a full cycle. Note that p(t) oscillates about P with amplitude V₀I₀/2 = S, so it dips below zero whenever cos φ < 1.

**10.** *Concept: reactances store and return energy rather than converting it, which is why they act at 90° to R.* In an inductor the voltage leads the current by exactly 90°, so p = vi is positive while both have the same sign and negative while they have opposite signs — and because the offset is a quarter of a period, the positive and negative areas over one cycle are **exactly equal**. Energy taken from the source builds the magnetic field (peak store ½LI₀²) and is handed back intact in the following quarter-cycle. The same argument runs for a capacitor with the current leading by 90° and the store ½CV₀². Formally, cos(±90°) = 0, so P = V_rms I_rms cos φ = 0. **Why this makes them perpendicular in the impedance:** the average power delivered to an element is V_rms I_rms cos φ, i.e. it depends only on the component of the voltage that is **in phase** with the current. A resistor's voltage is entirely in phase (all of it does work); a reactance's voltage is entirely in quadrature (none of it does work). "In phase" and "in quadrature" are perpendicular directions in the phasor plane, so the resistive and reactive voltage drops — and hence R and X — must be combined by Pythagoras, Z = √(R² + X²), not by arithmetic addition. If they simply added, a reactance would raise the dissipation exactly as a resistance does, which the zero-average result forbids.

**11.** *Concept: the power triangle — three different quantities with three different units.* **Real (true, active) power P = V_rms I_rms cos φ = I²R**, in **watts (W)**: the rate of irreversible conversion to heat or work, and the only one that is "consumed". **Reactive power Q = V_rms I_rms sin φ = I²X**, in **volt-amperes reactive (var)**: the rate at which energy is exchanged with the magnetic and electric fields, averaging to zero net transfer. **Apparent power S = V_rms I_rms = I²Z**, in **volt-amperes (VA)**: the product of the two meter readings, which is what fixes the current the conductors must carry. **Why S² = P² + Q²**: P follows the component of the current in phase with the voltage and Q the component in quadrature with it. These are two perpendicular components of the same current, so multiplying each by V_rms gives two perpendicular sides of a right-angled triangle whose hypotenuse is S — the power triangle is just the impedance triangle scaled by I². Adding them arithmetically would count the same volt-amperes twice: 800 W with 600 var gives 1000 VA, not 1400 VA. **Why 0.60 does not fix lead or lag**: PF = cos φ, and cos is an **even** function, so φ = +53.1° and φ = −53.1° give the identical power factor. The two cases differ only in the sign of sin φ, i.e. of Q — inductive (current lagging, Q positive) or capacitive (current leading, Q negative). This is why a power factor must always be quoted as "0.60 lagging" or "0.60 leading".

**12.** *Concept: the deck's "P = VI sin θ" is reactive power, and its own later statement is the correct one.* The two statements are contradictory because the first assigns a **non-zero** consumption to a circuit that the second says consumes **nothing**: in a purely reactive circuit θ = ±90°, so VI sin θ = ±VI, the entire apparent power — the largest value the expression can take, in a circuit that by the second statement dissipates none of it. **The second statement is the correct one.** A reactance stores energy for a quarter-cycle and returns it in the next, so its average power is exactly zero; equivalently P = VI cos θ with θ = ±90° gives cos θ = 0. **What the first expression really is**: **Q = V_rms I_rms sin θ**, the **reactive power**, measured in **volt-amperes reactive (var)** — the amplitude of the energy shuttling back and forth, not a rate of consumption. The correct general statement of power in an AC circuit is P = V_rms I_rms cos θ = I_rms²R, which automatically returns zero for a pure reactance (R = 0) and V_rms I_rms for a pure resistance (θ = 0). A useful sanity check on any such formula: it must give zero for R = 0 and must never exceed V_rms I_rms.
