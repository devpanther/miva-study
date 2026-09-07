# Thursday — PHY_108 fast-hour check

*The straight-line equation, linearising the pendulum, error types, percentage difference and the best-fit rule.*
*5 questions, straight after the hour. Score out of 5.*

**1.** Water is heated and its temperature θ is plotted against time t. The best-fit line passes through (2.0 min, 37.0 °C) and (6.0 min, 45.0 °C). Find the gradient and the y-intercept.
A. 8.0 °C/min, 21 °C
B. 2.0 °C/min, 37 °C
C. 2.0 °C/min, 33 °C
D. 0.5 °C/min, 36 °C

**2.** Simple pendulum readings:
L (m): 0.40, 0.65, 0.90
T (s): 1.27, 1.62, 1.90
The best-fit line of T² against L passes through the first and last points. Take π² = 9.87. Find g.
A. 9.88 m s⁻²
B. 3.99 m s⁻²
C. 31.3 m s⁻²
D. 158 m s⁻²

**3.** Five measurements of a line: 12.3, 12.5, 12.4, 14.6, 12.2 cm. Discard the one reading that is clearly an outlier, take the mean of the rest, and find its percentage difference from the reference length 12.6 cm.
A. +1.6 %
B. −0.25 %
C. +2.0 %
D. −2.0 %

**4.** A count follows N = N₀e^(−λt). The best-fit line of ln N against t passes through (0 s, 6.91) and (20 s, 4.91). Take e^6.91 ≈ 1000. Find λ and N₀.
A. λ = −0.10 s⁻¹, N₀ = 1000
B. λ = 0.10 s⁻¹, N₀ = 1000
C. λ = 0.10 s⁻¹, N₀ = 6.91
D. λ = 10 s⁻¹, N₀ = 1000

**5.** In timing 20 oscillations of a pendulum, a student always starts the stopwatch about 0.2 s after the bob is released, on every one of five trials. What type of error is this, and will averaging the five trials remove it?
A. Systematic error; averaging does not remove it
B. Random error; averaging removes it
C. Systematic error; averaging removes it
D. Random error; averaging does not remove it

---

## Answers

**1. C** — *Gradient and intercept from two points on a best-fit line.* Gradient m = (y₂ − y₁)/(x₂ − x₁) = (45.0 − 37.0)/(6.0 − 2.0) = 8.0/4.0 = 2.0 °C/min. Then c = y − mx at either point: 37.0 − 2.0(2.0) = 33 °C, the temperature at t = 0.

8.0 °C/min takes the rise in θ without dividing by the time interval; 2.0 °C/min with 37 °C reads the first point's y-value as the intercept instead of going back to t = 0; 0.5 °C/min is Δx/Δy, the reciprocal of the gradient.

**2. A** — *Finding g from a T² against L graph.* Square the periods first: T² = 1.61 s² and 3.61 s². Gradient = (3.61 − 1.61)/(0.90 − 0.40) = 2.00/0.50 = 3.99 s² m⁻¹. Since T² = (4π²/g)L, the gradient equals 4π²/g, so g = 4π²/gradient = 39.48/3.99 = 9.88 m s⁻².

3.99 m s⁻² stops at the gradient and calls it g; 31.3 m s⁻² uses T instead of T² on the y-axis (gradient 1.26); 158 m s⁻² multiplies the gradient by 4π² instead of dividing.

**3. D** — *Percentage difference of a mean after discarding an outlier.* 14.6 cm sits 2 cm from the others, which agree within 0.3 cm, so it is discarded. Mean of the remaining four = (12.3 + 12.5 + 12.4 + 12.2)/4 = 12.35 cm. Percentage difference = (observed − reference)/reference × 100 = (12.35 − 12.6)/12.6 × 100 = −2.0 %. The sign is negative because the observed value is below the reference.

+1.6 % keeps the outlier in the mean (12.8 cm); −0.25 % quotes the absolute difference in cm as if it were a percentage; +2.0 % drops the sign, which percentage difference must keep.

**4. B** — *Decay constant and N₀ from a ln N against t graph.* Taking ln of both sides: ln N = −λt + ln N₀, a straight line with gradient −λ and intercept ln N₀. Gradient = (4.91 − 6.91)/(20 − 0) = −0.10 s⁻¹, so λ = 0.10 s⁻¹. The intercept is ln N₀ = 6.91, so N₀ = e^6.91 ≈ 1000.

λ = −0.10 s⁻¹ forgets that the gradient is −λ, not λ; N₀ = 6.91 reads the intercept as N₀ without undoing the logarithm; λ = 10 s⁻¹ is Δt/Δ(ln N), the reciprocal of the gradient.

**5. A** — *Systematic versus random error.* The delay has the same size and the same direction every trial, so every reading is short by about 0.2 s. A consistent one-way bias is a systematic error, and averaging readings that all share the same bias leaves the bias in the mean.

Random error would scatter both ways from trial to trial (a late start on one, an early start on the next) and would shrink with averaging; that is not what is described. Systematic error can only be removed by correcting for it, for example by subtracting the known delay or timing from a mid-swing reference point.
