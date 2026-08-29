# PHY_108 — Week 7 Summary

*General Physics Practical II · Week 7 (19–25 Oct 2026) · Experiment: Discharging a Capacitor — time constant τ, experimental capacitance C, and the percentage error*

## The 8 most examinable things this week

1. **Aim**: to study the **discharge of a capacitor**, determine the **time constant τ**, determine the **experimental capacitance C**, and **calculate the percentage error** for C. (Four objectives — the % error is the fourth and is routinely dropped.)
2. **Discharge law**: **V(t) = V₀e^(−t/τ)** — V₀ is the maximum (fully charged) voltage, V(t) the capacitor voltage at time t. Week 6's charging law was V(t) = V₀(1 − e^(−t/τ)). Discharge has **no "1 −"**.
3. **Time constant**: **τ = RC**, seconds = ohms × farads. Putting t = τ in (2): V(τ) = V₀e^(−1) = **0.3679V₀**. So τ is **the time for the voltage to fall to 36.8% of its maximum** — not to zero, not to half.
4. **Q = CV** — charge stored is proportional to voltage, the constant of proportionality being capacitance. Q in coulombs, V in volts, C in farads. *A capacitor is a physical device; capacitance is a property of the device.*
5. **Construction**: two conductors separated by distance d, plate area A, dielectric of permittivity ε, so **C = εA/d**. Capacitors **pass AC and block DC**; used as filters in DC supplies and as energy-storage banks for pulsed lasers.
6. **Two graphs, and they must agree**: (i) **V (y) against t (x)** — falling exponential, read τ at 0.368V₀; (ii) **ln V (y) against t (x)** — a straight line, because ln V(t) = **ln V₀ − t/τ**. Gradient = **−1/τ**, intercept = **ln V₀**. "We will have two values of the time constant from the two graphs; they have to be equal."
7. **The two finishing calculations**: **C = τ/R** (experimental τ from the graph, R known), then **% error = [(theoretical − experimental)/theoretical] × 100**.
8. **Order of operations at the bench**: charge *first* (switch ON, wait until the voltmeter reaches ≈ the supply voltage), *then* **open the switch key and start the stopwatch at that instant**. At **t = 0 the voltmeter reads maximum**. Readings every **10 s**; the deck asks for **at least 7** measurements (an earlier slide says at least 10 — take 10).

## Apparatus

Voltmeter · power supply · **discharging** circuit (capacitor, resistor, switch key) · stopwatch · connecting wires · **Praxilabs virtual laboratory — RC Circuit Discharging**.

Identical to Week 6 except that the circuit and the Praxilabs module are the *discharging* ones. The **voltmeter is in parallel across the capacitor** (it must read the p.d. across it, so it is made of very high resistance — see errors).

## Theory, stated precisely

Connected to a charging device, charge transfers from one conductor to the other **until the potential difference between the conductors equals the potential difference between the terminals of the charging device**. That endpoint is V₀. When the switch is then opened, the stored charge flows back out through R and the voltage **decays exponentially**: V(t) = V₀e^(−t/τ), with Q(t) = Q₀e^(−t/τ) and I(t) = (V₀/R)e^(−t/τ) obeying the same law. The decay slows because the driving p.d. is itself what is falling: I = V/R, so as V falls the current removing the charge falls with it.

| t | 1τ | 2τ | 3τ | 5τ |
|---|---|---|---|---|
| V/V₀ — **discharging** (remaining) | 36.8% | 13.5% | 5.0% | 0.7% |
| V/V₀ — charging (gained) | 63.2% | 86.5% | 95.0% | 99.3% |

Effectively fully discharged after about **5τ**. **Larger R or larger C ⇒ larger τ ⇒ slower discharge**; τ does **not** depend on V₀.

## Procedure (in order)

1. Connect the power supply and voltmeter in the discharge circuit; choose a suitable **capacitor and resistor** and wire them in as shown.
2. Turn **ON** the power supply and select an output voltage (e.g. 15 V).
3. Turn **ON** the switch key — the LED lights.
4. **Wait until the voltmeter reaches its maximum** (approximately the supply voltage). This is V₀.
5. Turn **OFF** the switch key and, with the stopwatch, **record the voltmeter reading every 10 s**. At least 7 readings (take 10). At zero time the reading is maximum.
6. End the trial with the **"End"** button; an Excel sheet downloads with V₀, R, C and the (t, V) pairs.
7. **Plot V (y) against t (x)**; read τ where V = 0.3679V₀.
8. **Plot ln V (y) against t (x)**; τ = −1/gradient.
9. **C = τ/R**, then the **percentage error** against the nominal C.

## Worked example — the sample trial

V₀ = 11 V, R = 15 kΩ = 1.5 × 10⁴ Ω, nominal C = 2200 μF. Theoretical τ = RC = 1.5 × 10⁴ × 2.2 × 10⁻³ = **33.0 s**.

| t (s) | 3.16 | 10.03 | 20.35 | 31.33 | 40.56 | 50.8 | 58.12 | 70.04 | 79.8 | 87.59 |
|---|---|---|---|---|---|---|---|---|---|---|
| V (V) | 9.99 | 8.12 | 5.94 | 4.26 | 3.22 | 2.36 | 1.89 | 1.32 | 0.98 | 0.77 |
| ln V | 2.302 | 2.094 | 1.782 | 1.449 | 1.169 | 0.859 | 0.637 | 0.278 | −0.020 | −0.261 |

**Graph 1 (V against t).** 0.3679 × 11 = **4.05 V**. This falls between (31.33, 4.26) and (40.56, 3.22). Interpolating: (4.26 − 4.05)/(4.26 − 3.22) = 0.212/1.04 = 0.204, so t = 31.33 + 0.204 × 9.23 = **τ ≈ 33.2 s**.

**Graph 2 (ln V against t).** Using the first and last points of the best-fit line: gradient = (−0.261 − 2.302)/(87.59 − 3.16) = −2.563/84.43 = **−0.03036 s⁻¹**, so τ = −1/gradient = **32.9 s**. Intercept = ln V₀ = 2.302 − (−0.03036)(3.16) = **2.398**, and e^2.398 = **11.0 V** — which reproduces the measured V₀, confirming the fit. The two τ values (33.2 s and 32.9 s) agree, as required.

**Capacitance.** C = τ/R = 32.9/(1.5 × 10⁴) = **2.19 × 10⁻³ F ≈ 2.19 × 10³ μF**.

**Percentage error** = (2200 − 2193)/2200 × 100 ≈ **0.3%**. (From graph 1's τ = 33.2 s: C = 2.21 × 10³ μF, ≈ 0.6% error.)

## The graphs — gradient and intercept

- **V against t**: a falling exponential, **intercept on the V-axis = V₀**, **asymptote V = 0**. No single gradient; the **initial gradient is −V₀/τ**, so the tangent drawn at t = 0 cuts the time axis at exactly **t = τ** — a second way of reading τ off the same curve.
- **ln V against t**: a **straight line**, **gradient −1/τ** (τ = −1/gradient; the gradient is negative because the voltage is falling), **intercept ln V₀**. This is the accurate method: it uses every data point rather than one point read by eye. Note the practical advantage over charging — for discharging you plot **ln V** directly; for charging you must first form **ln(V₀ − V)**.

## Charging (Week 6) vs discharging (Week 7)

| | Charging | Discharging |
|---|---|---|
| Equation | V = V₀(1 − e^(−t/τ)) | **V = V₀e^(−t/τ)** |
| At t = 0 | V = 0 | **V = V₀ (maximum)** |
| At t = τ | 63.2% of V₀ | **36.8% of V₀** |
| Curve | rises, asymptote V₀ | **falls, asymptote 0** |
| Timing starts | when the switch key is **closed** | when the switch key is **opened** |
| Linearised plot | ln(V₀ − V) vs t | **ln V vs t** |
| Gradient of that line | −1/τ | −1/τ (**same**) |
| Intercept | ln V₀ | ln V₀ (**same**) |
| τ, C, % error | τ = RC, C = τ/R, same formula | **identical** |

## Precautions

- **Charge fully before opening the key** — wait until the voltmeter is steady at ≈ the supply voltage. If V₀ is not really the maximum, every ln V value and the intercept are wrong.
- **Start the stopwatch at the exact instant the switch key is opened**, and read the meter at the instant of timing.
- **Observe the polarity** of an electrolytic capacitor and never exceed its **rated working voltage**.
- Choose R and C so that **τ is comfortably longer than reaction time** (here τ = 33 s, so 10-s readings are easy), and take **7–10 readings spread over several time constants** so the line is well defined.
- Read the voltmeter with the **eye perpendicular to the scale**; check its **zero**; keep connections tight and leads short.
- **Safety**: a charged capacitor stores real energy and can give a shock — **discharge it through a resistor before handling**, and between trials.

## Sources of error

- **Reaction time** in starting the stopwatch and in reading clock and meter together — the dominant random error; it makes the recorded times late, so **τ comes out too large**.
- **Voltmeter loading**: the meter sits in parallel with C, so it is a *second* discharge path. The effective resistance is R∥R_v, **less than R**, so the measured **τ is too small** and hence **C = τ/R too small**. Use a voltmeter of very high resistance.
- **Leakage through the dielectric** — same mechanism, same direction of error.
- **Component tolerance**: electrolytics are typically ±20%, so the "theoretical" 2200 μF is itself uncertain; a large % error may be the nominal value's fault, not the measurement's.
- **Lead and contact resistance** add to R, so the effective R exceeds the marked value used in C = τ/R.
- Reading τ **by eye off a hand-drawn curve**, and uncertainty in fixing V₀.
- **Late readings**: at large t, V is small and the percentage reading error is large, distorting the far end of the ln V line.
- **Parallax and zero error**; **temperature drift** of R and C.

## Commonly confused

- **Charging vs discharging equation** — V₀(1 − e^(−t/τ)) vs V₀e^(−t/τ). Test: put t = 0. Charging must give 0; discharging must give V₀.
- **63.2% vs 36.8%** — 63.2% is what has been *gained* in charging; 36.8% is what *remains* in discharging. They sum to 100%.
- **τ is not the time to discharge fully** — it is 36.8% remaining; effectively empty at ~5τ. And the half-life is 0.693τ, not τ.
- **τ = RC, not R/C**; **C = τ/R, not τR**. Dimension check: Ω × F = s.
- **kΩ vs Ω in C = τ/R** — using 15 instead of 1.5 × 10⁴ is out by a factor of 1000.
- **Gradient of ln V vs t is −1/τ, not −τ** — and it is *negative*; quoting τ = −32.9 s means the sign was attached to the wrong quantity.
- **ln V vs ln(V₀ − V)** — plot ln V for discharging; ln(V₀ − V) is the *charging* linearisation.
- **τ does not depend on V₀** — changing the supply voltage changes V₀ and every reading, but not the time constant.
- **Passes AC, blocks DC** — the reverse statement is a common slip.

*Note: the circuit diagram, the exponential-decay figure and the walk-through video sit inside slide images, and the extracted text drops "fi"/"ff" ligatures throughout ("field" → "eld", "difference" → "dierence", "button" → "buon"). The deck gives an inconsistent minimum number of readings (10 in one slide, 7 in another) and lists no precautions or sources of error; those sections, the 5τ convention and the tangent construction are the standard 100-level treatment of the deck's stated objectives. Applications named in the source: filters in DC supplies, energy-storage banks for pulsed lasers, timing control, backup power and voltage stabilisation; the case study installs a capacitor bank on an industrial motor drive, raising torque 10% and cutting speed ripple 20% by reducing voltage fluctuation and harmonics.*
