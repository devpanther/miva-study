# PHY_108 — Week 1

*General Physics Practical II · Week 1 (7–13 Sep 2026)*

*Note on source: the slide text extracted well, but three things were images and did not extract — (i) the formula boxes for relative error and percentage error, (ii) the two worked graphing slides, (iii) the mid-lesson question. The week summary also names an **Ohm's law** verification (plot V against I) that has no slides in the extract. Those four items below are filled from the slide titles/summary line plus standard practical-physics definitions, and are marked with †.*

## Most likely to be examined

1. **State and use y = mx + c** — identify dependent/independent variable, gradient and intercept, and compute the gradient from two points on the *best-fit line*: m = (y₂ − y₁)/(x₂ − x₁).
2. **Linearise the simple pendulum**: T = 2π√(L/g) ⇒ T² = (4π²/g)L. Plot T² (y) against L (x); slope = 4π²/g, intercept = 0; hence **g = 4π²/slope**.
3. **Linearise exponential decay**: N = N₀e^(−λt) ⇒ ln N = −λt + ln N₀. Plot ln N (y) against t (x); slope = −λ, intercept = ln N₀.
4. **Linearise a power law**: y = kxⁿ ⇒ log y = n log x + log k. Plot log y against log x; slope = n, intercept = log k.
5. **Error analysis**: distinguish systematic from random error, and compute absolute error, relative (fractional) error, percentage error and percentage difference.
6. **Graph-drawing marks in a practical report**: sensible scale, both axes labelled with quantity *and* unit, points plotted accurately, a single best-fit straight line (never dot-to-dot), gradient triangle drawn large.
7. **Ohm's law verification†**: V = IR; plot V (y) against I (x); the gradient is the resistance R of the conductor, and a straight line through the origin verifies Ohm's law.
8. **Repeated measurement**: the mean of several measurements is the best estimate ("most likely value") of a quantity, because it reduces random error.

## Definitions and formulas

**Equation of a straight line** — the mathematical representation of a linear relationship between two variables:

> **y = mx + c**
> y = dependent variable (vertical axis); x = independent variable (horizontal axis);
> m = slope/gradient = rate of change of y with respect to x; c = y-intercept = value of y when x = 0.

- **y-intercept** = c (value of y where the line cuts the y-axis, x = 0).
- **x-intercept**: set y = 0 ⇒ 0 = mx + c ⇒ **x = −c/m = −(y-intercept)/slope**.
- **Gradient from two points**: m = (y₂ − y₁)/(x₂ − x₁), e.g. (1,2) and (4,5) ⇒ m = 3/3 = 1. A negative gradient, e.g. (0,−1) and (4,−3), gives m = (−3 − (−1))/(4 − 0) = −0.5.

**Linearisation** — rewriting a non-linear relation so that a plot of a chosen function of the variables gives a straight line.
- *Logarithmic transformation* — for exponential growth/decay.
- *Power-law transformation* — for one variable raised to a power.

| Equation | Linearised form | y-axis | x-axis | Slope m | Intercept c |
|---|---|---|---|---|---|
| Simple pendulum: T = 2π√(L/g) | T² = (4π²/g)L | T² | L | 4π²/g | 0 |
| Hooke's law: F = kx | F = kx | F | x | k | 0 |
| Coulomb's law: F = kq₁q₂/r² | F = kq₁q₂·(1/r²) | F | 1/r² | kq₁q₂ | 0 |
| Boyle's law: log P = log k − log V | log P = −log V + log k | log P | log V | −1 | log k |
| Exponential decay: N = N₀e^(−λt) | ln N = −λt + ln N₀ | ln N | t | −λ | ln N₀ |
| Power law: y = kxⁿ | log y = n log x + log k | log y | log x | n | log k |

**Why graph in physics** — to visualise data and relationships, and to analyse and interpret experimental results. **Guidelines**: proper scaling of axes, labelling of axes, plotting data points accurately, drawing the best-fit line or curve. Linear equations generate straight-line graphs; the slope represents the rate of change.

**Error** — the difference between a measured value and the true value.
- **Sources**: instrument error, observation error, human error.
- **Systematic error** — caused by a consistent failure/bias of an instrument (same direction every time; e.g. a zero error). Not reduced by repeating.
- **Random error** — caused by factors that are not predictable or consistent (scatter either side of the true value). Reduced by averaging repeated readings.

**Error formulas** (†the boxed formulas were images in the slides; standard forms):
- **Actual (absolute) error** = |true value − measured value|. *Slide example*: rope measured as 6.0 m instead of 6.3 m ⇒ actual error = 6.3 − 6.0 = **0.3 m**.
- **Relative (fractional) error** = actual error / true value.
- **Percentage error** = (actual error / true value) × 100%.
- **Percentage difference** = (observed value − reference value) / reference value ( × 100%). **Positive** ⇒ observed is higher than reference; **negative** ⇒ observed is lower. Note it is *signed*, unlike percentage error.
- **Best estimate of a repeated measurement** = arithmetic mean of the readings; averaging reduces the impact of random error.

**Apparatus and procedure (generic Week-1 practical, from the case study + summary)†**
- *Line-length case study*: metre rule/ruler → measure the line several times → compute the mean → the mean is the most likely length.
- *Ohm's law*: battery/DC source, rheostat, ammeter (in series), voltmeter (in parallel with the conductor), key, connecting wires. Procedure: connect the circuit → vary the rheostat → record paired I and V readings for at least five settings → tabulate → plot V against I → draw the best-fit line → gradient = R. A straight line through the origin verifies V ∝ I (Ohm's law).

## Worked example

A pendulum gives, from a T²-against-L graph, two points **on the best-fit line**: (L = 0.20 m, T² = 0.86 s²) and (L = 0.80 m, T² = 3.32 s²).

1. Slope: m = (3.32 − 0.86)/(0.80 − 0.20) = 2.46/0.60 = **4.10 s² m⁻¹**.
2. Since m = 4π²/g ⇒ g = 4π²/m = 39.478/4.10 = **9.63 m s⁻²**.
3. Percentage error against the accepted g = 9.81 m s⁻²:
 actual error = 9.81 − 9.63 = 0.18; % error = (0.18/9.81) × 100 = **1.8 %**.
4. As a percentage difference: (9.63 − 9.81)/9.81 × 100 = **−1.8 %** (negative ⇒ observed value is below the reference).

## Commonly confused

| Pair | One-line discriminating test |
|---|---|
| Percentage error vs percentage difference | Error divides by the **true/accepted** value and is quoted as a magnitude; difference divides by a **reference** value and keeps its **sign** (+ = observed higher). |
| Systematic vs random error | Repeat the measurement: if the deviation stays the same size and direction it is systematic; if it scatters both ways it is random. |
| Slope of the graph vs the physical constant | The slope is only *equal to a combination* of constants — for the pendulum the slope is 4π²/g, so you must still invert it to get g. |
| y-intercept vs x-intercept | y-intercept: set x = 0 (gives c). x-intercept: set y = 0 (gives −c/m). |
| ln vs log₁₀ | Use **ln** when the equation contains e (exponential decay); use **log₁₀** for power laws and Boyle's-law type products — mixing them changes the intercept, not the slope's meaning. |
| Best-fit line vs joining the points | Read the gradient from two widely separated points **lying on the drawn line**, never from two raw data points. |
| Accuracy vs precision | Accuracy = closeness to the true value (hurt by systematic error); precision = closeness of repeats to each other (hurt by random error). |
