# PHY_108 — Week 1 Summary

*General Physics Practical II · Week 1 (7–13 Sep 2026) · Topic: Equation of a Straight Line & Error*

## The 6 most examinable things this week

1. y = mx + c: m = slope = (y₂−y₁)/(x₂−x₁); c = y-intercept (value of y when x = 0); x-intercept = −c/m.
2. Two linearisation techniques: **logarithmic transformation** (exponential growth/decay) and **power-law (log-log) transformation** (for y = kxⁿ).
3. The full linearisation table below — given any of these equations, know exactly what goes on each axis and what the slope and intercept equal.
4. Error = measured value − true value. Errors are **systematic** (consistent instrument fault) or **random** (unpredictable, inconsistent factors).
5. Actual error, relative/fractional error, percentage error, percentage difference — four related but distinct formulas.
6. Graphing guidelines: proper scaling, labelled axes, accurate plotting, best-fit line or curve.

## Equation of a straight line

y = mx + c, where y = dependent variable, x = independent variable, m = slope (rate of change of y with respect to x), c = y-intercept.

- **y-intercept**: value of y when x = 0 → c.
- **x-intercept**: value of x when y = 0 → x = −c/m.

## Linearisation techniques

- **Logarithmic transformation** — take ln of both sides of an exponential equation. N = N₀e^(−λt) → ln(N) = −λt + ln(N₀).
- **Power-law transformation** — take log of both sides of y = kxⁿ → log(y) = n·log(x) + log(k). Plot log(y) against log(x): slope m = n, intercept c = log(k).

## The linearisation table (reproduce this exactly)

| Equation | Linearised form | y-axis | x-axis | Slope m | Intercept c |
|---|---|---|---|---|---|
| Simple pendulum: T = 2π√(L/g) | T² = 4π²(L/g) | T² | L | 4π²/g | 0 |
| Hooke's law: F = kx | F = kx | F | x | k | 0 |
| Coulomb's law: F = k(q₁q₂/r²) | F = kq₁q₂ · (1/r²) | F | 1/r² | kq₁q₂ | 0 |
| Boyle's law | log(P) = log(k) − log(V) | log(P) | log(V) | −1 | log(k) |
| Exponential decay: N = N₀e^(−λt) | ln(N) = −λt + ln(N₀) | ln(N) | t (time) | −λ | ln(N₀) |

## Error analysis

- **Error** = measured value − true value. Sources: instrument errors, observation errors, human error.
- **Systematic error**: caused by a consistent failure of an instrument — biases every result in the same direction, does not average out.
- **Random error**: caused by factors that are not predictable or consistent — scatters results both ways, averages out over repeated readings.
- **Actual error** = |experimental value − true value|. A rope measured as 6.0 m against a true 6.3 m gives an actual error of 0.3 m.
- **Relative (fractional) error** = actual error ÷ true value.
- **Percentage error** = (actual error ÷ true value) × 100%.
- **Percentage difference** = (observed value − reference value) ÷ reference value. Positive means the observed value is higher than the reference; negative means lower.

**Graphing guidelines**: proper scaling of axes, labelling of axes, plotting data points accurately, drawing the best-fit line or curve. Linear equations generate straight-line graphs, and the slope represents the rate of change (gradient).

## Worked example — linearising exponential decay

N = N₀e^(−λt). Take ln of both sides: ln(N) = −λt + ln(N₀). Plot ln(N) on the y-axis against t on the x-axis; the line has slope m = −λ and intercept c = ln(N₀).

Suppose the best-fit line through the plotted ln(N) vs t data has slope −0.25 s⁻¹. Since m = −λ, **λ = 0.25 s⁻¹**, the decay constant.

## Commonly confused

- **Systematic vs random error** — systematic is consistent, one-directional and instrument-caused (it does not average out); random is inconsistent and unpredictable (it does average out over repeated readings).
- **Percentage error vs percentage difference** — percentage error compares a measurement against a known true value via the actual error; percentage difference compares an observed value against a reference value directly, (observed − reference)/reference, and its sign carries direction.
- **Slope of a linearised plot vs the original constant** — the slope is rarely the constant itself. For the pendulum the slope is 4π²/g, not g; for Coulomb's law it is kq₁q₂, not k. You must extract the physical constant algebraically.
- **Which variable goes on which axis** — always match the rearranged equation to y = mx + c term by term. For Boyle's law it is log(P) against log(V), not P against V; for decay it is ln(N) against t, not against ln(t).
