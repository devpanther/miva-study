# Thursday — PHY_108 fast-hour check

*Charging a capacitor: the time constant, obtaining C from the graph, the circuit wiring, capacitor behaviour and the procedure.*
*5 questions, straight after the hour. Score out of 5.*

**1.** A capacitor charges through R = 22 kΩ from a 12 V supply. Voltmeter readings:
t (s): 0, 10, 22, 30, 50, 80
V (V): 0, 4.38, 7.59, 8.93, 10.76, 11.68
From these readings find the time constant τ and the capacitance C.
A. τ = 10 s, C = 450 μF
B. τ = 22 s, C = 1000 μF
C. τ = 80 s, C = 3600 μF
D. τ = 22 s, C = 1.0 F

**2.** A capacitor charges from zero towards V₀ = 15 V with time constant τ = 8 s. Take e⁻² = 0.135. What does the voltmeter across it read at t = 16 s?
A. 15 V
B. 2.0 V
C. 9.5 V
D. 13.0 V

**3.** An RC charging circuit uses R = 10 kΩ and C = 470 μF. Find τ, then state what happens to the time taken to reach 63.2 % of the supply voltage when R is replaced by 47 kΩ with C unchanged.
A. τ = 4.7 s; it rises to 22 s
B. τ = 0.0047 s; it rises to 0.022 s
C. τ = 4.7 s; it falls to 1.0 s
D. τ = 4.7 s; it is unchanged, since τ depends only on C

**4.** For a charging capacitor, ln(V₀ − V) is plotted against t. The best-fit line passes through (0 s, 2.71) and (40 s, 1.11). Take e^2.71 ≈ 15. Find τ and V₀.
A. τ = 0.040 s, V₀ = 15 V
B. τ = 25 s, V₀ = 2.71 V
C. τ = 25 s, V₀ = 15 V
D. τ = −25 s, V₀ = 15 V

**5.** Before each charging trial the capacitor must be fully discharged. What error does this precaution prevent?
A. The supply voltage V₀ being exceeded on the capacitor
B. A current surge damaging the voltmeter
C. The stopwatch running from a non-zero reading
D. V starting above zero, so 63.2 % of V₀ is reached too early and τ comes out too small

---

## Answers

**1. B** — *Time constant from the 63.2 % point and C = τ/R.* τ is the time to reach 63.2 % of the maximum: 0.632 × 12 = 7.58 V, which the table reaches at t = 22 s, so τ = 22 s. Then C = τ/R with R in ohms: 22/22 000 = 1.0 × 10⁻³ F = 1000 μF.

τ = 10 s uses 36.8 % (4.4 V), which is the discharging fraction; τ = 80 s takes the time to get near the maximum, but the capacitor only reaches 99 % at about 5τ; C = 1.0 F leaves R as 22 instead of converting kΩ to Ω, a factor of 1000 out.

**2. D** — *Capacitor voltage from the charging equation.* t = 16 s is 2τ, so V = V₀(1 − e^(−t/τ)) = 15(1 − e⁻²) = 15(1 − 0.135) = 15 × 0.865 = 13.0 V. After two time constants the capacitor is 86.5 % charged.

15 V assumes the capacitor is already full, which takes about 5τ; 2.0 V is 15e⁻², the discharging equation applied to a charging capacitor; 9.5 V is the 63.2 % value at one time constant, not two.

**3. A** — *Effect of changing R on the time constant.* τ = RC = (10 × 10³)(470 × 10⁻⁶) = 4.7 s. The time to reach 63.2 % is τ itself, and τ is proportional to R, so with 47 kΩ it becomes 4.7 × 4.7 = 22 s: the capacitor charges more slowly because the larger R limits the charging current.

0.0047 s uses 10 Ω instead of 10 kΩ; 1.0 s divides by the ratio of resistances instead of multiplying; 'unchanged' forgets that τ is the product RC and depends on both.

**4. C** — *Time constant from a ln(V₀ − V) against t graph.* V₀ − V = V₀e^(−t/τ), so ln(V₀ − V) = −t/τ + ln V₀: a straight line of gradient −1/τ and intercept ln V₀. Gradient = (1.11 − 2.71)/(40 − 0) = −0.040 s⁻¹, so τ = −1/(−0.040) = 25 s. Intercept 2.71 = ln V₀, so V₀ = e^2.71 ≈ 15 V.

τ = 0.040 s reads the magnitude of the gradient as τ instead of taking its reciprocal; V₀ = 2.71 V forgets to undo the logarithm at the intercept; τ = −25 s keeps the sign of the gradient, but the gradient is −1/τ so τ itself is positive.

**5. D** — *Precaution: discharging the capacitor before a trial.* The charging equation V = V₀(1 − e^(−t/τ)) assumes V = 0 at t = 0. If charge is left over from a previous trial, the curve starts part-way up, the 63.2 % level is crossed sooner than one true time constant, and the measured τ and the capacitance C = τ/R both come out too small.

The capacitor can never exceed V₀ whatever its starting charge; a voltmeter in parallel is not exposed to a surge; the stopwatch is a separate instrument that is reset by hand and has nothing to do with the charge on the capacitor.
