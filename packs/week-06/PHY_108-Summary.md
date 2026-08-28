# PHY_108 — Week 6 Summary

*General Physics Practical II · Week 6 (12–18 Oct 2026) · Experiment: Charging a Capacitor — time constant and experimental capacitance*

## The 8 most examinable things this week

1. **Aim**: to investigate the **charging characteristics of a capacitor** and determine its **capacitance** and **time constant**.
2. **Charging equation**: **V(t) = V₀(1 − e^(−t/τ))** — V₀ is the maximum (supply) voltage, V(t) the voltage on the capacitor at time t, τ the time constant. Discharging is the mirror: V(t) = V₀e^(−t/τ).
3. **Time constant**: **τ = RC**, τ in seconds, R in ohms, C in farads. It is the time to charge to **63.2%** of maximum, or to discharge to **36.8%** of the initial value.
4. **Q = CV** — charge stored is proportional to voltage, the constant of proportionality being the capacitance. Q in coulombs, V in volts, C in farads. *A capacitor is a physical device; capacitance is a property of that device.*
5. **Construction**: two conductors separated by a distance d, plate area A, dielectric of permittivity ε, so **C = εA/d**. Capacitors **pass AC and block DC**; used as filters in DC supplies and as energy-storage banks for pulsed lasers.
6. **The graph**: V (y-axis) against t (x-axis) — a rising exponential asymptotic to V₀. **τ is read off it by finding 0.632V₀ on the y-axis, tracing across to the curve and down to the time axis.**
7. **The two calculations that finish the experiment**: **C = τ/R** (using the experimental τ from the graph and the known R), then **% error = [(theoretical value − experimental value)/theoretical value] × 100**.
8. **Increasing R at fixed C increases τ, so charging takes longer** — the circuit charges more slowly. Same for increasing C at fixed R. This is the standard mid-lesson question.

## Apparatus

Voltmeter · power supply · charging circuit (capacitor, resistor, switch key) · stopwatch · connecting wires · **Praxilabs virtual laboratory — RC Circuit Charging**.

The resistor, capacitor, switch and supply are in **series**; the **voltmeter is connected in parallel across the capacitor**, because it must read the p.d. across it (hence a voltmeter is made of very high resistance — see errors).

## Theory

When the plates are connected to a charging device (a battery), charge is transferred from one conductor to the other **until the potential difference between the conductors equals the potential difference between the terminals of the charging device**. That endpoint is V₀; charging stops there because there is no longer a net driving p.d.

The approach to V₀ is exponential, not linear, because the charging current is I = (V₀/R)e^(−t/τ): as V rises, the p.d. across R falls, so the current that delivers further charge falls with it. Charge follows the same law, Q(t) = Q₀(1 − e^(−t/τ)). Energy stored is E = ½CV².

| t | 1τ | 2τ | 3τ | 5τ |
|---|---|---|---|---|
| V/V₀ (charging) | 63.2% | 86.5% | 95.0% | 99.3% |
| V/V₀ (discharging) | 36.8% | 13.5% | 5.0% | 0.7% |

By convention the capacitor is taken as **fully charged after about 5τ**.

## Procedure (in order)

1. Connect the power supply and voltmeter into the charging circuit, choosing a **suitable capacitor and a suitable resistor**, wired as shown.
2. Turn on the power supply and **select the output voltage** (e.g. 15 V).
3. Turn **ON the switch key** and, with the stopwatch, **record the voltmeter reading every 10 seconds until the voltage reaches its maximum**. Take **at least 10 readings**.
4. End the trial with the **"End" button**.
5. An Excel sheet downloads containing V₀, R, C and the recorded (t, V) pairs.
6. **Plot V (y) against t (x).**
7. From the curve, **find 63.2% of the maximum voltage and trace to the time axis to get the experimental τ**.
8. With R known, compute **C = τ/R**.
9. Compute the **percentage error** of C against the nominal (theoretical) value.

## Worked example — the sample trial

Given V₀ = 1 V, R = 10 kΩ = 1.0 × 10⁴ Ω, nominal C = 1000 μF = 1.0 × 10⁻³ F.

| t (s) | 5.7 | 9.57 | 13.27 | 16.57 | 19.32 | 22.19 | 24.84 | 28.64 | 34.07 | 37.59 |
|---|---|---|---|---|---|---|---|---|---|---|
| V (V) | 0.43 | 0.62 | 0.73 | 0.81 | 0.86 | 0.89 | 0.92 | 0.94 | 0.97 | 0.98 |

63.2% of V₀ = 0.632 × 1 = **0.632 V**. This lies between the points (9.57, 0.62) and (13.27, 0.73). Interpolating: slope = (0.73 − 0.62)/(13.27 − 9.57) = 0.11/3.70 = 0.0297 V s⁻¹; the extra 0.012 V needs 0.012/0.0297 = 0.40 s. So **τ_exp = 9.57 + 0.40 ≈ 9.97 s ≈ 10.0 s**.

C_exp = τ/R = 9.97/1.0 × 10⁴ = **9.97 × 10⁻⁴ F = 997 μF**.

% error = (1000 − 997)/1000 × 100 = **0.3%**.

Cross-check: theoretical τ = RC = 10⁴ × 10⁻³ = **10 s**, which the graph reproduces.

## The graph, its gradient and intercept

- **As prescribed (V against t)**: a curve, so there is no single gradient. Its **intercept on the V-axis is 0** (an uncharged capacitor), its **asymptote is V₀**, and its **initial gradient is V₀/τ** — the tangent drawn at the origin cuts the line V = V₀ at exactly t = τ, which is the second way of reading τ off the same graph.
- **Linearised (the more accurate method)**: take logs of V₀ − V = V₀e^(−t/τ) to get **ln(V₀ − V) = ln V₀ − t/τ**. Plotting ln(V₀ − V) against t gives a **straight line of gradient −1/τ** (so τ = −1/gradient) and **intercept ln V₀**. Use this when asked to obtain τ from a best-fit line rather than by eye.

## Precautions

- **Discharge the capacitor completely before each trial**, so V really starts from zero.
- **Observe the polarity** of an electrolytic capacitor (+ to the positive supply terminal) and do not exceed its **rated working voltage**.
- **Start the stopwatch at the exact instant the switch key is closed**, and read the voltmeter at the instant of timing.
- Choose R and C large enough that **τ is comfortably longer than reaction time** — with τ = 10 s, 10-second readings are practical.
- Take readings **until the voltage is steady**, so V₀ (the asymptote) is well established; at least 10 points.
- Read the voltmeter **with the eye perpendicular to the scale**, and check its **zero** before switching on.
- Keep connections tight and leads short.

## Sources of error

- **Reaction time** in starting the stopwatch and in taking simultaneous readings of clock and meter — the dominant random error.
- **Voltmeter loading**: the meter is in parallel with C, so its finite resistance provides a leakage path; it lowers the observed V₀ and shortens the apparent τ. A voltmeter of very high resistance minimises this.
- **Leakage current through the dielectric**, for the same reason.
- **Component tolerance**: electrolytic capacitors are typically ±20%, so the "theoretical" C used in the % error is itself uncertain — a large % error may be the nominal value's fault, not the measurement's.
- **Lead and internal resistance** of the supply add to R, so the effective R exceeds the marked value.
- **Reading τ by eye off a hand-drawn curve**, and uncertainty in fixing the asymptote V₀.
- **Parallax and zero error** on the voltmeter; **temperature drift** of R and C.

## Commonly confused

- **τ = RC vs τ = R/C or C/R** — the time constant is the *product*. Dimension check: Ω × F = s.
- **63.2% vs 36.8%** — 63.2% is what has been *gained* while charging; 36.8% is what *remains* while discharging. They add to 100%.
- **C = τ/R vs C = τR** — C = τ/R follows from τ = RC.
- **kΩ vs Ω in C = τ/R** — using 10 instead of 10⁴ gives an answer out by a factor of 1000. Convert R to ohms first.
- **The capacitor is not "full" at t = τ** — it is 63.2% charged; effectively full at ~5τ.
- **Charging slows because the current falls, not because the capacitor "gets tired"** — the p.d. across R falls as V rises, so I = (V₀ − V)/R falls.
- **Passes AC, blocks DC** — the reverse statement is a common slip.
- **Ammeter in series, voltmeter in parallel** — here the voltmeter goes *across the capacitor*, never in series with it.

*Note: the circuit diagram, the graph showing the 63.2% construction and the walk-through video sit inside slide images, and the extracted text drops "fi"/"ff" ligatures throughout ("field" → "eld", "difference" → "dierence", "button" → "buon"). The source lists no precautions or sources of error and gives no linearised plot; those sections, the energy formula and the 5τ convention are the standard 100-level treatment of the deck's stated objectives.*
