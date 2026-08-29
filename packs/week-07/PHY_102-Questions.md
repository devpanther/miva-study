# PHY_102 — Week 7 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 8, not this week. Notes closed. Topic: Power in an A.C. Circuit — instantaneous, real, reactive and apparent power, and the power factor.*

## Section A — Multiple choice (12)

**1.** A load takes 5.0 kVA from the mains at a power factor of 0.60 lagging. Its real and reactive powers are:
a) 3.0 kW and 5.0 kvar
b) 5.0 kW and 3.0 kvar
c) 3.0 kW and 4.0 kvar
d) 4.0 kW and 3.0 kvar

**2.** Which single expression gives the average power dissipated in **any** series AC circuit, whatever its reactance?
a) V_rms²/Z
b) I_rms²R
c) I_rms²Z
d) V_rms I_rms

**3.** In a purely resistive AC circuit the instantaneous power p(t) varies:
a) not at all — it is constant at P, because v and i are in phase
b) between −P and +P, at the supply frequency
c) between 0 and 2P, at the supply frequency
d) between 0 and 2P, at twice the supply frequency

**4.** A circuit is stated to have a power factor of 0.50. From this alone you can conclude that:
a) the real power is half the apparent power, but not whether the current leads or lags
b) the current lags the voltage by 60°, since power factor is defined for inductive loads
c) the phase angle is 30°, because cos 30° = 0.50
d) half the energy drawn is dissipated and half is destroyed in the reactance

**5.** A 6.0 Ω resistor is in series with a capacitor of reactance 8.0 Ω across a 100 V rms supply. The real power consumed is:
a) 1000 W
b) 1667 W
c) 800 W
d) 600 W

**6.** A factory raises its power factor from 0.70 to 0.95 lagging by switching a capacitor bank in parallel with its load. The real power drawn from the supply:
a) rises, because the capacitor bank supplies additional power
b) is essentially unchanged, while the line current falls
c) falls, because the capacitor cancels part of the load
d) is unchanged, and so is the line current

**7.** A series circuit of R = 5.0 Ω, L = 0.10 H and C = 10 μF is driven at its resonant frequency by a 20 V rms supply. The voltage across the capacitor is:
a) 20 V
b) 0 V
c) 400 V
d) 100 V

**8.** In that same series RLC circuit **at resonance**, the instantaneous power delivered by the source:
a) never goes negative, because the source sees a purely resistive circuit
b) goes negative twice a cycle, because L and C are still in the circuit
c) is constant, because the two reactances cancel
d) averages to zero, because all the stored energy is returned

**9.** A 2.0 kW heater and a 2.0 kW motor of power factor 0.50 both run from the same 240 V rms supply. Compared with the heater, the motor draws:
a) the same current, since the real power is the same
b) twice the current, so the supply cable must be sized for it
c) half the current, because the power factor halves the demand
d) twice the current, and delivers twice the real power

**10.** Which statement about reactive power Q is correct?
a) it is energy destroyed in the reactance, at a rate of VI sin φ watts
b) it adds arithmetically to the real power to give the apparent power
c) it is borrowed and returned each cycle, yet still loads the supply cable
d) it is zero in any circuit containing both an inductor and a capacitor

**11.** An AC supply of **peak** voltage 170 V is connected across a 34 Ω resistor. The average power dissipated is:
a) 850 W
b) 212 W
c) 600 W
d) 425 W

**12.** A single-phase load is measured to take 800 W while drawing 1000 VA. Its reactive power and power factor are:
a) 600 var and 0.80
b) 200 var and 0.80
c) 600 var and 1.25
d) 1800 var and 0.80

## Section B — Short answer (3)

**13.** Starting from p(t) = v(t)i(t) with v = V₀ sin ωt and i = I₀ sin(ωt − φ), show why the average power is V_rms I_rms cos φ and not V_rms I_rms. State exactly which term disappears on averaging and why, and use the result to explain why a pure inductor consumes nothing although both its current and its voltage are large.

**14.** Distinguish real, reactive and apparent power, giving the unit of each and the formula in terms of V_rms, I_rms and φ. Explain why they combine as S² = P² + Q² rather than S = P + Q, and explain — with a numerical illustration — why an electricity supplier bills in kWh but rates its transformers and cables in kVA.

**15.** A coil of resistance 18 Ω and inductance 76.4 mH is connected across a 240 V rms, 50 Hz supply. Find X_L, Z, the current, the power factor, and P, Q and S, verifying your P and Q by a second route. Then find the capacitance that, connected in parallel with the coil, would raise the power factor to unity, and state the new line current.

## Answers

**1. c** — *P = S cos φ, Q = S sin φ; the three form a 3–4–5 triangle.* P = 5.0 × 0.60 = **3.0 kW**; sin φ = 0.80, so Q = 5.0 × 0.80 = **4.0 kvar** (and 3² + 4² = 5² ✔). (a) subtracts nothing and simply quotes S as Q, i.e. assumes S = Q. (b) interchanges P and Q, using the power factor as the *reactive* factor. (d) uses sin φ for P and cos φ for Q — the same swap, applied to a correctly computed pair.

**2. b** — *Only the resistance dissipates, so P = I_rms²R always.* Substituting V = IZ and cos φ = R/Z into P = VI cos φ gives I²R identically. (a) V²/Z equals VI = S, the **apparent** power. (c) I²Z is also S. (d) VI is S again — all three ignore the power factor and are correct only when PF = 1. Note that V_rms²/R is *not* on the list, and would be wrong too unless the whole supply voltage sits across R.

**3. d** — *For a resistor p = V₀I₀ sin²ωt = P(1 − cos 2ωt).* It never goes negative (v and i reverse together), its minimum is 0, its maximum is 2P, and the ripple is at **2f** because the product completes two cycles for every one of the supply. (a) confuses the average with the instantaneous value. (b) describes a pure reactance, whose p swings symmetrically about zero. (c) has the right envelope but the wrong frequency — the single most common slip on this topic.

**4. a** — *cos φ is an even function, so the number alone cannot say whether φ is positive or negative.* PF = P/S = 0.50 fixes the ratio; "lagging" or "leading" must be stated separately. (b) asserts a convention that does not exist — capacitive loads have power factors too. (c) uses sin 30° = 0.50 in place of cos; cos⁻¹(0.50) is 60°. (d) treats reactive power as destroyed rather than borrowed and returned.

**5. d** — *P = I²R; only R dissipates.* Z = √(6² + 8²) = 10 Ω, I = 100/10 = 10 A, so P = (10)²(6) = **600 W**. (a) is S = VI = 1000 VA, the apparent power, quoted as watts. (b) is V²/R = 10 000/6, using the supply voltage across R although only V_R = 60 V is there. (c) is I²X_C = 800 var — the reactive power, which is consumed by nothing.

**6. b** — *Correction changes Q, not P.* The capacitor bank supplies leading vars that cancel most of the load's lagging vars; the load still requires exactly the same real power, so P is unchanged while S = P/PF falls from P/0.70 to P/0.95 and the line current falls with it. (a) treats a capacitor as a source of energy. (c) confuses reduced *apparent* power with reduced consumption. (d) forgets that the whole point of correction is the current reduction.

**7. c** — *At resonance the individual reactive voltages can far exceed the supply.* ω₀ = 1/√(LC) = 1/√(0.10 × 10⁻⁵) = 1000 rad s⁻¹, X_C = 1/(ω₀C) = 100 Ω, Z = R = 5.0 Ω, I = 20/5.0 = 4.0 A, so V_C = (4.0)(100) = **400 V** (Q-factor = 100/5 = 20). (a) assumes the drop across one element cannot exceed the supply. (b) confuses "V_L and V_C cancel in the vector sum" with "each is zero". (d) quotes X_C in ohms as though it were the voltage.

**8. a** — *At resonance φ = 0, so p(t) = P(1 − cos 2ωt) ≥ 0 exactly as for a resistor.* p goes negative only when cos φ < 1, i.e. when there is a **net** reactance; at resonance there is none. (b) reasons from the presence of L and C rather than from φ — energy does slosh between L and C, but it never returns to the source. (c) confuses zero net reactance with zero ripple; the 2ω ripple is still there. (d) confuses the source's average power (V²/R, a maximum here) with the zero average of a pure reactance.

**9. b** — *S = P/PF, and the cable carries S, not P.* Heater: I = 2000/240 = 8.3 A. Motor: S = 2000/0.50 = 4000 VA, so I = 4000/240 = 16.7 A — **twice**. (a) assumes equal watts means equal amps, true only at equal power factor. (c) inverts the relation, dividing by PF the wrong way. (d) doubles the real power as well, when by hypothesis both are 2.0 kW.

**10. c** — *Reactive power transports no net energy but does occupy the conductors.* The extra current it requires produces genuine I²R heating in the supply line and in the transformer — which is exactly why correcting the power factor pays. (a) calls it dissipation and gives it the wrong unit; Q is in var, not watts. (b) would make 800 W and 600 var into 1400 VA instead of 1000 VA. (d) assumes L and C always cancel; they cancel only at resonance, where X_L = X_C.

**11. d** — *AC power formulae take rms values.* V_rms = 170/√2 = 120.2 V, so P = V_rms²/R = 14 450/34 = **425 W** (equivalently V₀²/2R = 28 900/68). (a) uses the peak voltage in V²/R and so doubles the answer. (b) halves twice, applying the √2 to the power instead of to the voltage. (c) is a plausible-looking round number with no derivation.

**12. a** — *S² = P² + Q² and PF = P/S.* Q = √(1000² − 800²) = √(1 000 000 − 640 000) = √360 000 = **600 var**, and PF = 800/1000 = **0.80**. (b) subtracts the powers arithmetically, S − P, which is what S² = P² + Q² exists to forbid. (c) has Q right but inverts the power factor to S/P, giving an impossible value above 1. (d) adds instead of subtracting, S + P.

**13.** *Concept: the average power is the constant term of p(t); the 2ω term integrates to zero.* With v = V₀ sin ωt and i = I₀ sin(ωt − φ), p(t) = V₀I₀ sin ωt sin(ωt − φ). Using sin A sin B = ½[cos(A − B) − cos(A + B)], **p(t) = (V₀I₀/2)[cos φ − cos(2ωt − φ)]**. The first term is a constant; the second is a pure sinusoid at **twice** the supply frequency, and the integral of a sinusoid over a whole number of cycles is zero, so it contributes nothing to the mean. Hence **P_av = (V₀I₀/2) cos φ = V_rms I_rms cos φ**, since V_rms I_rms = (V₀/√2)(I₀/√2) = V₀I₀/2. The factor cos φ is therefore not a fudge but the *entire* surviving average: V_rms I_rms would be the answer only if φ = 0. For a **pure inductor** φ = +90°, so cos φ = 0 and P_av = 0, while p(t) = −V_rms I_rms sin 2ωt swings symmetrically between ±V_rms I_rms. Both V_rms and I_rms are large and the instantaneous power is large, but it is **positive for two quarter-cycles and equally negative for the other two**: energy taken from the source to build the magnetic field (a maximum of ½LI₀²) is handed straight back in the following quarter-cycle. Nothing is converted irreversibly, so nothing is consumed.

**14.** *Concept: the power triangle, and why plant is rated in VA.* **Real (true, active) power P = V_rms I_rms cos φ = I_rms²R**, unit the **watt (W)** — the rate of irreversible conversion to heat or mechanical work; this is what a meter registers and what appears on a bill. **Reactive power Q = V_rms I_rms sin φ = I_rms²X**, unit the **volt-ampere reactive (var)** — the rate at which energy is alternately stored in and returned from the magnetic and electric fields; its average net transfer over a cycle is zero. **Apparent power S = V_rms I_rms**, unit the **volt-ampere (VA)** — simply the product of the two meter readings, which is what determines the current in the conductors. They combine as **S² = P² + Q²** because P and Q are the projections of the same VI on to axes **90° apart**: P follows the resistive (in-phase) component of the current and Q the reactive (quadrature) component, and perpendicular components add by Pythagoras, not arithmetically. Numerically: a load taking 800 W at 600 var has S = √(800² + 600²) = 1000 VA, not 1400 VA — the difference of 400 VA is what arithmetic addition would invent. **Why kWh but kVA**: the supplier sells energy, which is P × t, so kWh is the correct billing unit. But its cable heating is I²R and its transformer's core flux is set by V — neither of which knows anything about φ. A 100 kW load at PF 0.50 draws the same current as a 200 kW load at unity PF and needs the same 200 kVA transformer, while paying for only half as much energy. That is why supply contracts penalise a poor power factor, and why correction capacitors are installed.

**15.** *Concept: a complete AC power calculation, cross-checked, followed by power-factor correction.* **Reactance**: X_L = 2πfL = 2π(50)(0.0764) = **24.0 Ω**. **Impedance**: Z = √(18² + 24²) = √(324 + 576) = √900 = **30.0 Ω**. **Current**: I = V/Z = 240/30.0 = **8.00 A**. **Power factor**: cos φ = R/Z = 18/30 = **0.600 lagging** (φ = 53.1°, current lagging, since the coil is inductive). **Real power**: P = VI cos φ = (240)(8.00)(0.600) = **1152 W**; check by I²R = (64.0)(18) = 1152 W ✔. **Reactive power**: Q = VI sin φ = (240)(8.00)(0.800) = **1536 var**; check by I²X_L = (64.0)(24) = 1536 var ✔. **Apparent power**: S = VI = (240)(8.00) = **1920 VA**; check 1152² + 1536² = 1 327 104 + 2 359 296 = 3 686 400 = 1920² ✔. **Correction to unity**: the capacitor must supply the whole of the coil's lagging reactive power, Q_C = 1536 var, so **C = Q_C/(ωV²) = 1536/[(314.16)(240²)] = 1536/18 096 000 = 8.49 × 10⁻⁵ F ≈ 84.9 μF**. (Check: I_C = ωCV = (314.16)(8.49 × 10⁻⁵)(240) = 6.40 A, and (240)(6.40) = 1536 var ✔.) **New line current**: with PF = 1 the supply carries only the real component, I = P/V = 1152/240 = **4.80 A** — down from 8.00 A for exactly the same 1152 W, so the I²R loss in the feeder falls to (4.80/8.00)² = 36 % of its former value.
