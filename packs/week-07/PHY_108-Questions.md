# PHY_108 — Week 7 Questions

*Discharging a capacitor through a resistor: the time constant, the log plot and the experimental capacitance — sat seven days later, notes closed, as a retention test.*

## Multiple choice

**1.** The voltage across a capacitor discharging through a resistor obeys:
A. V(t) = V₀e^(−t/τ)
B. V(t) = V₀(1 − e^(−t/τ))
C. V(t) = V₀e^(t/τ)
D. V(t) = V₀(1 − e^(t/τ))

**2.** Putting t = τ into the discharge equation shows that the time constant is the time for the capacitor voltage to:
A. fall to half of its maximum value
B. fall to 36.8% of its maximum value
C. fall to zero
D. rise to 63.2% of its maximum value

**3.** The discharge law is linearised by taking natural logs. Plotting ln V against t gives a straight line whose:
A. gradient is −τ and whose intercept is V₀
B. gradient is +1/τ and whose intercept is ln V₀
C. gradient is −1/τ and whose intercept is ln V₀
D. gradient is −1/τ and whose intercept is ln(V₀ − V)

**4.** A discharge trial uses R = 15 kΩ, and the graph gives an experimental time constant of 33 s. The experimental capacitance is:
A. 4.95 × 10⁵ μF
B. 220 μF
C. 2.2 μF
D. 2200 μF

**5.** In the discharging experiment the stopwatch is started:
A. at the instant the switch key is opened, with the voltmeter at maximum
B. as soon as the power supply is switched on
C. when the switch key is closed and the LED lights up
D. when the voltmeter reading has fallen to 0.368 of its maximum, which is the definition of the time constant

**6.** The voltmeter used to follow the decay is connected across the capacitor and has a large but finite resistance. Its effect on the result is that:
A. the measured τ is too large, because the voltmeter adds resistance in series with R
B. the measured τ is too small, because the voltmeter is a second discharge path in parallel with R
C. there is no effect, because a voltmeter draws no current at all
D. the measured V₀ is too large, because the voltmeter adds its own emf

**7.** Why is the second graph (ln V against t) drawn at all, when τ can already be read off the first?
A. Because the downloaded sheet logs ln V rather than V, so the first graph cannot be drawn from it
B. To show that the discharge is linear in time
C. To obtain a best-fit value of τ that must agree with the one read off the curve
D. To obtain R independently of its marked value

**8.** Which single change would make the capacitor discharge more slowly?
A. Decreasing the resistance R
B. Decreasing the capacitance C
C. Increasing the supply voltage V₀
D. Increasing the resistance R

**9.** The capacitance of a parallel-plate capacitor is increased by:
A. increasing the plate area A
B. increasing the separation d between the plates
C. replacing the dielectric with one of lower permittivity
D. increasing the voltage applied across it

**10.** On the ln V against t graph, the intercept on the vertical axis is used to:
A. obtain τ, since the intercept equals −1/τ
B. check the fit, since e raised to the intercept should reproduce the measured maximum voltage V₀
C. obtain R, since the intercept equals ln R
D. obtain C directly, since the intercept equals ln C

**11.** Comparing last week's charging practical with this week's discharging practical, which statement is correct?
A. Both are linearised as ln V against t, but the charging line has gradient +1/τ
B. Only the discharge can be linearised; the charging curve must be read by eye
C. Charging is linearised as ln(V₀ − V) against t and discharging as ln V against t; both lines have gradient −1/τ
D. Charging is linearised as ln V against t and discharging as ln(V₀ − V) against t; both lines have gradient −1/τ

**12.** A capacitor is discharged from V₀ = 11 V with τ = 33 s. The voltmeter reading expected at t = 66 s is about:
A. 4.05 V
B. 5.50 V
C. 0.55 V
D. 1.49 V

## Short answer

**13.** Write down the discharge equation, define every symbol in it, state the formula for the time constant and say in one sentence what τ physically means for a discharging capacitor. Then give three precise differences between this week's discharging experiment and last week's charging experiment.

**14.** A trial gives V₀ = 11 V, R = 15 kΩ and a nominal capacitance of 2200 μF. The line of best fit through the ln V against t data passes through (3.16 s, 2.302) and (87.59 s, −0.261). Calculate the gradient, the time constant, the experimental capacitance and the percentage error, and state what the intercept of this line should be and what it is used for.

**15.** State the apparatus used in this experiment and the procedure in the correct order. Then give three sources of error, and for each say whether it makes the measured time constant too large or too small, and why.

## Answers

**1. A** — *discharge law*: V(t) = V₀e^(−t/τ), the mirror of the charging law. Option B is the charging law (the "1 −" form) — the single most common substitution. Options C and D have a positive exponent, which would make the voltage grow without limit. Test by putting t = 0: discharging must give V₀, charging must give 0.

**2. B** — *meaning of τ*: V(τ) = V₀e^(−1) = 0.3679V₀, so 36.8% of the maximum *remains*. Option D is the charging figure (63.2% *gained*); the two add to 100% and are constantly swapped. Option C confuses τ with the time to discharge completely (about 5τ). Option A assumes a half-life, which is 0.693τ, not τ.

**3. C** — *linearisation*: ln V(t) = ln V₀ − t/τ, of the form y = c + mx with m = −1/τ and c = ln V₀. Option A forgets that logs were taken, so it quotes τ and V₀ unlogged. Option B drops the minus sign that comes from the decaying exponential. Option D imports the *charging* linearisation ln(V₀ − V), and in any case an intercept cannot contain the variable V.

**4. D** — *C = τ/R with units*: C = 33/(15 × 10³) = 2.2 × 10⁻³ F = 2200 μF. Option C is the answer of someone who divided by 15 instead of 15 000 — the kΩ-to-Ω slip, out by a factor of 1000. Option A is C = τR. Option B is a factor-of-10 arithmetic error.

**5. A** — *procedure and its order*: the capacitor is first charged with the key closed until the voltmeter reads approximately the supply voltage; *opening* the key starts the discharge, and that instant is t = 0, where the voltmeter reading is maximum. Options B and C describe the charging phase of Week 6. Option D would start the clock a full time constant late, so every recorded time would be short by τ.

**6. B** — *voltmeter loading*: the meter is in parallel with the capacitor, so charge leaks away through it as well as through R. The effective resistance is R∥R_v, which is smaller than R, so the decay is faster and the measured τ = R_eff C is too small — and hence C = τ/R comes out too small too. Option A has the meter in series, which is where an ammeter goes. Option C is the ideal-meter assumption, which is exactly what this error is about. Option D invents an emf a voltmeter does not have.

**7. C** — *why two graphs*: reading 0.368V₀ off a hand-drawn curve uses one point and the eye; the log plot uses every reading through a best-fit straight line. The deck's own instruction is that the two values "have to be equal", so the comparison is an internal consistency check. Option A is false — the sheet logs V against t, and the first graph is drawn straight from it. Option B is the opposite of the truth: the decay is exponential, which is precisely why logs are taken. Option D confuses which quantity is known and which is deduced — R is known and C is deduced.

**8. D** — *τ = RC controls the rate*: increasing R (or C) increases τ, and a larger τ means a slower discharge. Options A and B both decrease τ and speed the discharge up. Option C encodes the belief that a bigger starting voltage takes longer to drain — but τ is fixed by R and C alone, and the *fraction* remaining after any given time is unchanged by V₀.

**9. A** — *C = εA/d*: capacitance rises with plate area and permittivity and falls with separation. Option B increases d and so reduces C. Option C reduces ε and so reduces C. Option D confuses Q = CV with the definition of C: raising V raises the stored charge, not the capacitance — a capacitor is a device, capacitance is a fixed property of that device.

**10. B** — *intercept of the log plot*: the intercept is ln V₀, so exponentiating it should return the measured maximum voltage; agreement confirms the fit and the value of V₀ used. Option A confuses intercept with gradient (the gradient is −1/τ). Options C and D put quantities in the intercept that simply are not in the equation ln V = ln V₀ − t/τ.

**11. C** — *contrasting the two linearisations*: charging is V = V₀(1 − e^(−t/τ)), so V₀ − V = V₀e^(−t/τ) and one must plot ln(V₀ − V); discharging is already a pure exponential, so ln V is plotted directly. Both give gradient −1/τ and intercept ln V₀ — that is the point of the comparison. Option D swaps them. Option A would need a growing exponential. Option B is false: both linearise.

**12. D** — *two time constants*: t = 66 s = 2τ, so V = 11 × e⁻² = 11 × 0.135 = 1.49 V, i.e. 13.5% remaining. Option A is the 1τ value (0.368 × 11 = 4.05 V) — reading the table one column too early. Option B halves the voltage, treating τ as a half-life. Option C applies 5% (the 3τ figure).

**13.** *Discharge law, τ, and the contrast with charging*. **V(t) = V₀e^(−t/τ)**, where V(t) is the voltage across the capacitor at time t, V₀ the maximum voltage on the capacitor at the instant the switch key is opened (approximately the supply voltage), t the time since that instant, and τ the time constant. **τ = RC**, with R in ohms, C in farads and τ in seconds. Physically, **τ is the time for the capacitor voltage to fall to 0.3679 (36.8%) of its maximum value**. Differences from Week 6 (any three): the equation has no "1 −" term, so **at t = 0 the voltage is maximum rather than zero** and the curve **falls to an asymptote of zero rather than rising to V₀**; **timing begins when the switch key is opened**, after the capacitor has already been charged to its maximum, rather than when the key is closed; **at t = τ the reading is 36.8% of V₀, not 63.2%**; and the **linearised plot is ln V against t**, whereas charging requires ln(V₀ − V) against t. Everything downstream — τ = RC, C = τ/R, the percentage error, the apparatus and the voltmeter in parallel across the capacitor — is unchanged.

**14. Gradient = −0.03036 s⁻¹; τ ≈ 32.9 s; C ≈ 2.19 × 10⁻³ F ≈ 2.19 × 10³ μF; percentage error ≈ 0.3%; intercept = ln V₀ ≈ 2.398** — *reading τ and C from the log plot*. Gradient = (−0.261 − 2.302)/(87.59 − 3.16) = −2.563/84.43 = −0.03036 s⁻¹. Since the gradient is −1/τ, τ = 1/0.03036 = **32.9 s** (compare the theoretical τ = RC = 1.5 × 10⁴ × 2.2 × 10⁻³ = 33.0 s). Then C = τ/R = 32.9/(1.5 × 10⁴) = **2.193 × 10⁻³ F = 2193 μF**. Percentage error = (2200 − 2193)/2200 × 100 = **0.3%**. The **intercept is ln V₀**: extrapolating the line to t = 0 gives 2.302 − (−0.03036)(3.16) = 2.398, and e^2.398 = 11.0 V, which reproduces the measured V₀ — so the intercept is used as a check on the fit and on the value of V₀ assumed in the analysis, not to obtain τ.

**15.** *Apparatus, procedure and errors*. **Apparatus**: voltmeter; power supply; discharging circuit (capacitor, resistor, switch key); stopwatch; connecting wires; the Praxilabs virtual RC Circuit Discharging laboratory. The voltmeter is connected in parallel across the capacitor. **Procedure**: (1) connect the power supply and voltmeter into the discharging circuit with a suitable capacitor and resistor; (2) turn on the power supply and select an output voltage, e.g. 15 V; (3) close the switch key — the LED lights; (4) wait until the voltmeter reaches its maximum, approximately the supply voltage; (5) open the switch key and, starting the stopwatch at that instant, record the voltmeter reading every 10 s, taking at least 7 (preferably 10) readings, the reading at t = 0 being the maximum; (6) end the trial and download the data; (7) plot V against t and read τ at 0.368V₀; (8) plot ln V against t and take τ = −1/gradient; (9) compute C = τ/R and the percentage error. **Sources of error** (any three, with direction): **voltmeter loading** — the meter in parallel with the capacitor is a second discharge path, so the effective resistance is R∥R_v < R and the measured **τ is too small**; **leakage through the dielectric** — the same parallel-path mechanism, so again **τ too small**; **reaction time** in starting the stopwatch after the key is opened — the recorded times are systematically late relative to true t = 0, which shifts the line and makes **τ appear too large**; **lead and contact resistance** in series with R makes the effective resistance larger than the marked value, so the true τ is larger than RC and **C = τ/R is overestimated** when the marked R is used; also **parallax and zero error** on the voltmeter and **component tolerance** (±20% on electrolytics), which corrupts the "theoretical" C against which the percentage error is computed rather than the measurement itself.
