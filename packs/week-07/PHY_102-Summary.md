# PHY_102 — Week 7 Summary

*General Physics II · Week 7 (19–25 Oct 2026) · Topic: Power in an A.C. Circuit — Instantaneous, Real, Reactive and Apparent Power, and the Power Factor*

## The 8 most examinable things this week

1. **p(t) = v(t) i(t) always.** The DC relation P = VI survives into AC as an *instantaneous* statement. What fails is the shortcut of multiplying two steady numbers: in AC both v and i are functions of time, so the product is a function of time too and must be **averaged over a whole cycle** before it can be called "the power".
2. **The instantaneous power splits into a constant plus a ripple.** With v = V₀ sin ωt and i = I₀ sin(ωt − φ), the identity sin A sin B = ½[cos(A−B) − cos(A+B)] gives
 **p(t) = (V₀I₀/2)[cos φ − cos(2ωt − φ)]**.
 The first term is constant; the second is a pure sinusoid of **twice the supply frequency** whose average over a cycle is **zero**.
3. **Hence the master formula: P_av = ½V₀I₀ cos φ = V_rms I_rms cos φ.** The whole of the average power sits in the constant term. The ripple carries no net energy — it only sloshes it.
4. **P = I_rms²R, always.** Substituting V_rms = I_rms Z and cos φ = R/Z gives P = I_rms Z · I_rms · (R/Z) = **I_rms²R**. **Only the resistance dissipates.** X_L and X_C carry current and hold voltage but consume nothing on average.
5. **The three powers, and their units.**
 **Apparent power S = V_rms I_rms** — volt-amperes (VA);
 **Real (true, active) power P = V_rms I_rms cos φ = I²R** — watts (W);
 **Reactive power Q = V_rms I_rms sin φ = I²X** — volt-amperes reactive (var).
 They form a right-angled triangle: **S² = P² + Q²**. They do **not** add arithmetically.
6. **Power factor PF = P/S = cos φ = R/Z**, dimensionless, **0 ≤ PF ≤ 1**. It is the fraction of the volt-amperes drawn that actually does work. **cos φ is an even function**, so the number alone does not say whether the current leads or lags — always write "0.8 **lagging**" (inductive) or "0.8 **leading**" (capacitive).
7. **Negative instantaneous power means energy flowing back to the source.** p(t) dips below zero for part of every cycle in **any** circuit with a net reactance (its minimum is S(cos φ − 1)), and **never** in a purely resistive one. For a pure L or C the negative and positive areas are exactly equal, so P_av = 0.
8. **Resonance is the unity-power-factor condition.** At **X_L = X_C** (ω₀ = 1/√(LC)), Z falls to R, φ = 0, PF = 1, the current is maximum and the real power **V_rms²/R** is maximum — even though L and C are still in the circuit, the source sees pure resistance and p(t) never goes negative.

## Instantaneous power: the derivation in full

Take the supply as reference, v = V₀ sin ωt, and let the current lag by φ (φ > 0 inductive, φ < 0 capacitive, φ = φ_v − φ_i):

 p(t) = V₀I₀ sin ωt · sin(ωt − φ) = **(V₀I₀/2)[cos φ − cos(2ωt − φ)]**

Read the two terms:

| Term | Value | Behaviour over a cycle |
|---|---|---|
| (V₀I₀/2) cos φ | constant | the **average power P**, in watts |
| −(V₀I₀/2) cos(2ωt − φ) | sinusoid at **2ω** | averages to **zero**; amplitude = S |

So p(t) oscillates about P with amplitude S = V₀I₀/2, i.e. between **S(cos φ − 1)** and **S(cos φ + 1)**. Three consequences worth memorising:

- The power ripple is at **2f** (100 Hz on a 50 Hz supply), not f — v and i each reverse sign together, so their product completes two cycles for every one of the supply.
- **p_min = S(cos φ − 1) ≤ 0**, and it is zero **only** when φ = 0. Any reactance at all ⇒ p goes negative twice per cycle.
- For a resistor (φ = 0), p = V₀I₀ sin²ωt = P(1 − cos 2ωt), which swings from **0 to 2P** — the **peak instantaneous power is twice the average**.

**Why averaging matters and averaging the current does not.** The full-cycle mean of i is zero, but the mean of *p* is not, because p is a product of two quantities that reverse *together* in a resistor. The average of a product is **not** the product of the averages; that error, applied to a resistor, would predict that a mains lamp gives out no light.

## The three powers and the power triangle

Multiply every side of the impedance triangle (R, X, Z) by I_rms²:

| Impedance triangle | × I_rms² | Power triangle | Unit |
|---|---|---|---|
| R | → | **P = I²R = VI cos φ** | W |
| X = X_L − X_C | → | **Q = I²X = VI sin φ** | var |
| Z = √(R² + X²) | → | **S = I²Z = VI** | VA |

- **S² = P² + Q²**, **tan φ = Q/P = X/R**, **cos φ = P/S = R/Z**.
- **Q > 0** for a net inductive circuit, **Q < 0** for a net capacitive one — an inductor and a capacitor in the same circuit swap energy with each other, which is why their reactive powers subtract.
- **Only P is billed** (energy = P × t, in kWh). But cables, switchgear and transformers must carry the full current, so they are rated in **kVA**. A 0.5 PF load draws twice the current of a unity-PF load of the same wattage and causes **four times** the I²R loss in the supply line.

## Element by element

| | Resistor | Inductor | Capacitor |
|---|---|---|---|
| Phase of i relative to v | in phase, φ = 0 | lags 90°, φ = +90° | leads 90°, φ = −90° |
| p(t) | P(1 − cos 2ωt) | −V_rms I_rms sin 2ωt | +V_rms I_rms sin 2ωt |
| Sign of p | never negative | negative half the time | negative half the time |
| **Average power** | **V_rms I_rms = I²R** | **0** | **0** |
| Reactive power | 0 | +I²X_L | −I²X_C |
| Energy | converted irreversibly to heat | stored in **magnetic** field, returned | stored in **electric** field, returned |

For a pure reactance the energy shuttled per quarter-cycle is finite and calculable — for an inductor it is ½LI₀², borrowed on one quarter-cycle and repaid on the next — so the *transfer* is real even though the *dissipation* is zero.

## Power factor: what it is and what it costs

**PF = cos φ = P/S = R/Z.** A PF of 0.8 lagging means 80 % of the volt-amperes drawn do work; the remaining reactive component is borrowed and returned every cycle but still occupies the cable.

**Correction.** A lagging (inductive) load is corrected by a capacitor **in parallel** with it: the capacitor's leading reactive power cancels part of the load's lagging Q, leaving P untouched and reducing the line current.

 **Q_C = P(tan φ₁ − tan φ₂)**  and  **C = Q_C / (ω V_rms²)**

Correcting to unity requires Q_C = Q_load, and the new line current is simply **I = P/V_rms**.

## Worked example 1 — instantaneous versus average power in a resistor

*A 240 V rms, 50 Hz supply is connected across R = 60 Ω. Write p(t); give its peak value, its average value and its frequency.*

1. V₀ = √2 × 240 = **339.4 V**; I₀ = V₀/R = 339.4/60 = **5.657 A**; I_rms = 4.00 A.
2. Resistor ⇒ v and i in phase ⇒ p = V₀I₀ sin²ωt = (339.4)(5.657) sin²ωt = **1920 sin²(314.2 t) W**.
3. Using sin²x = ½(1 − cos 2x): **p(t) = 960(1 − cos 628.3 t) W**.
4. **Peak p = 1920 W** (when sin ωt = ±1); **minimum p = 0**; **average P = 960 W**; ripple frequency = 2f = **100 Hz**.
5. Checks: P = V_rms I_rms = (240)(4.00) = 960 W ✔; P = V_rms²/R = 57 600/60 = 960 W ✔; P = I_rms²R = (16.0)(60) = 960 W ✔. And note **P_peak = 2P_av**, as it must be for a resistor.
6. *Contrast*: put a pure inductor of X_L = 60 Ω on the same supply. I_rms is still 4.00 A, but now p(t) = −(240)(4.00) sin 2ωt = **−960 sin(628.3 t) W** — same amplitude, same 100 Hz, but swinging **±960 W** about zero. **P_av = 0.** Identical current, identical voltage, no power consumed.

## Worked example 2 — series RL: the complete power set

*R = 30 Ω in series with L = 127 mH across 200 V rms, 50 Hz. Find X_L, Z, I, PF, P, Q and S.*

1. **X_L = 2πfL** = 2π(50)(0.127) = **40.0 Ω**.
2. **Z = √(R² + X_L²)** = √(900 + 1600) = √2500 = **50.0 Ω**.
3. **I = V/Z** = 200/50.0 = **4.00 A**.
4. **PF = cos φ = R/Z** = 30/50 = **0.600 lagging**; φ = cos⁻¹0.600 = **53.1°** (current lags).
5. **P = VI cos φ** = (200)(4.00)(0.600) = **480 W**. Check by I²R = (16.0)(30) = 480 W ✔.
6. **Q = VI sin φ** = (200)(4.00)(0.800) = **640 var** (inductive). Check by I²X_L = (16.0)(40) = 640 var ✔.
7. **S = VI** = (200)(4.00) = **800 VA**. Check by I²Z = (16.0)(50) = 800 VA ✔.
8. Triangle check: P² + Q² = 480² + 640² = 230 400 + 409 600 = 640 000 = 800² = S² ✔.
 Note P ≠ V²/R here: 200²/30 = 1333 W is nearly three times too big, because 200 V is across the **whole circuit**, not across R. The voltage across R is only V_R = IR = 120 V, and 120²/30 = 480 W ✔.

## Worked example 3 — series RLC with a leading power factor

*R = 12 Ω, X_L = 5 Ω, X_C = 21 Ω, supply 240 V rms. Find everything.*

1. **Net reactance X = X_L − X_C** = 5 − 21 = **−16 Ω** — negative, so the circuit is **capacitive** and the current **leads**.
2. **Z = √(12² + (−16)²)** = √(144 + 256) = √400 = **20.0 Ω**. (Note the reactances **subtract** before squaring; adding them would give √(144 + 676) = 28.6 Ω, a common wrong answer.)
3. **I = 240/20.0 = 12.0 A.**
4. **PF = R/Z = 12/20 = 0.600 leading**; φ = **−53.1°**.
5. **P = (240)(12.0)(0.600) = 1728 W** = I²R = (144)(12) = 1728 W ✔.
6. **Q = (240)(12.0)(0.800) = 2304 var, capacitive** (take it as −2304 var) = I²|X| = (144)(16) = 2304 var ✔.
7. **S = (240)(12.0) = 2880 VA**; check 1728² + 2304² = 2 985 984 + 5 308 416 = 8 294 400 = 2880² ✔.
8. Voltage check: V_R = 144 V, V_L = 60 V, V_C = 252 V; √(144² + (60 − 252)²) = √(20 736 + 36 864) = √57 600 = **240 V** ✔ — the individual drops sum to 456 V arithmetically but 240 V vectorially.
 **The power factor is 0.600 in Example 2 and 0.600 here, and both consume different wattages only because V and I differ — the *sign* of φ never affects P.**

## Worked example 4 — power factor correction

*A workshop draws 4.4 kW at 220 V rms, 50 Hz, at a power factor of 0.80 lagging. Find the line current; then find the parallel capacitance that raises the power factor to unity, and the new line current.*

1. **S = P/PF** = 4400/0.80 = **5500 VA**; **I = S/V** = 5500/220 = **25.0 A**.
2. sin φ₁ = 0.60, so **Q_load = S sin φ₁** = (5500)(0.60) = **3300 var, lagging**.
3. For unity PF the capacitor must supply all of it: **Q_C = 3300 var**.
4. **C = Q_C/(ωV²)** = 3300 / [(314.16)(220²)] = 3300/15 205 000 = 2.17 × 10⁻⁴ F = **217 μF**.
 (Check: I_C = ωCV = (314.16)(2.17×10⁻⁴)(220) = 15.0 A, and Q_C = (220)(15.0) = 3300 var ✔.)
5. **New line current**: the real power is unchanged, so I = P/V = 4400/220 = **20.0 A**.
6. **What was gained**: the same 4.4 kW is delivered by 20 A instead of 25 A. The I²R loss in the supply cable falls by (20/25)² = 0.64 — a **36 % reduction** — and the transformer feeding it now needs only 4.4 kVA of capacity instead of 5.5 kVA. **Not one watt of the load's consumption has changed.**

## Worked example 5 — power at resonance

*R = 10 Ω, L = 0.20 H, C = 20 μF in series across 100 V rms. Find the resonant frequency and the power there; compare with the power at 50 Hz.*

1. **ω₀ = 1/√(LC)** = 1/√[(0.20)(20×10⁻⁶)] = 1/√(4×10⁻⁶) = 1/(2×10⁻³) = **500 rad s⁻¹**, so **f₀ = 500/2π = 79.6 Hz**.
2. At ω₀: X_L = ω₀L = (500)(0.20) = **100 Ω**; X_C = 1/(ω₀C) = 1/[(500)(20×10⁻⁶)] = **100 Ω**. They cancel, so **Z = R = 10 Ω**.
3. **I = 100/10 = 10.0 A** (a maximum); **PF = 1**; **P = V²/R = 100²/10 = 1000 W** = I²R = (100)(10) ✔.
4. **V_L = IX_L = 1000 V** and **V_C = IX_C = 1000 V** — each **ten times** the supply, but 180° apart, so they cancel exactly in the vector sum. (The factor 10 is the quality factor, Q-factor = X_L/R = 100/10.)
5. At 50 Hz instead (ω = 314.2): X_L = 62.8 Ω, X_C = 1/[(314.2)(2×10⁻⁵)] = 159.2 Ω, X = −96.3 Ω, Z = √(100 + 9277) = **96.8 Ω**, I = 1.03 A, PF = 10/96.8 = 0.103, and **P = I²R = 10.7 W**.
6. So moving off resonance by 30 Hz drops the real power from **1000 W to 10.7 W**. Resonance is the frequency at which a series RLC circuit accepts the most power — an *acceptor* circuit.

## Commonly confused

- **P versus S.** P = VI cos φ (watts) is consumed; S = VI (volt-amperes) is merely drawn. Writing P = VI in an AC circuit is only right when PF = 1. *Test*: does your answer use cos φ? If not, you have computed S.
- **"P = V I sin θ is the power in a reactive circuit."** It is the **reactive power Q**, in var — the rate at which energy is borrowed and returned, not consumed. In a purely reactive circuit θ = ±90°, so this expression equals ±VI, i.e. the *whole* apparent power is reactive and the real power is **zero**.
- **P = V²/R with the supply voltage.** Legal only if the whole supply voltage sits across R — i.e. only in a purely resistive circuit or at resonance. Otherwise use **P = I²R**, which is always safe, or V_R²/R with the resistor's own drop.
- **cos φ = R/Z versus sin φ = X/Z.** The power factor is the **R** side over the hypotenuse. Using X/Z gives the *reactive* factor and inverts every answer.
- **PF = Z/R.** Impossible: it exceeds 1. The power factor can never leave [0, 1].
- **Lagging versus leading.** cos(+53°) = cos(−53°), so PF alone cannot distinguish them. Inductive ⇒ current **lags**, Q positive; capacitive ⇒ current **leads**, Q negative. Always name it.
- **Adding X_L and X_C.** They **subtract**: X = X_L − X_C, because they are 180° apart. Only then is X combined with R in quadrature.
- **S = P + Q.** No: **S² = P² + Q²**. 480 W and 640 var give 800 VA, not 1120 VA.
- **"A reactance wastes energy."** It wastes none itself, but the extra current it forces through the *supply cable* does waste I²R there. That is why reactive power is worth correcting even though it consumes nothing.
- **Power ripple frequency.** 2f, not f. On a 50 Hz supply the lamp filament is heated 100 times a second.
- **"Negative power means an error."** It means energy returning to the source during that instant. Only its **average** over a full cycle is the quantity called "the power".
- **"L and C present ⇒ p(t) goes negative."** Not at resonance: there X_L = X_C, φ = 0, and the source sees pure resistance. Energy still sloshes between L and C, but never back to the source.
- **Peak versus average.** For a resistor P_peak = 2P_av, and V₀I₀ = 2P_av. Using peak values in P = VI doubles every answer; AC power formulae take **rms** values throughout.
- **Q-factor versus reactive power Q.** Same letter, unrelated: one is the resonance sharpness X_L/R, the other is measured in var.

*Note on the source. The Week 7 deck is textually complete but contains two slips that must not be carried into an exam. (i) It writes "In a purely reactive AC circuit … the power can be calculated using P = V × I × sin(θ)". That expression is the **reactive** power Q, not the power consumed; the deck contradicts itself two slides later with the correct statement that "reactances do not dissipate energy", and the average real power in a purely reactive circuit is **zero**. (ii) It writes "P = V × I = V²/R = I² × R Watts. Where: V is the dc voltage, I is the dc current" while discussing an AC resistor — in AC these must be **rms** values, and V²/R must use the voltage across R. Ligatures are lost throughout ("dierent", "diicult", "eective", "Was" for "Watts"), and the deck's figures — the v, i and p waveforms for a pure resistor, and the purely inductive waveforms — exist only as images and do not appear in the text layer; they are reconstructed in the table above. The week's Summary sheet also covers **phasor diagrams and series resonance**, which were taught in Week 6 and are used here only as the tools for computing φ and the unity-PF condition.*
