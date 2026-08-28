# PHY_108 — Week 6 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 7, not this week. Notes closed.*

## Section A - Multiple choice (12)

**1.** A capacitor charges through a resistor from a steady supply. After one time constant the voltage across the capacitor is what fraction of its maximum?
a) 36.8%
b) 50%
c) 63.2%
d) 99.3%

**2.** In the RC charging circuit the resistance R is doubled while C is held constant. What happens to the time constant and to the charging time?
a) τ halves and the capacitor charges faster
b) τ is unchanged, because τ depends only on C
c) τ doubles but the charging time is unchanged
d) τ doubles and the capacitor charges more slowly

**3.** A trial uses R = 10 kΩ, and the graph gives an experimental time constant of 9.97 s. The experimental capacitance is:
a) 997 μF
b) 99.7 μF
c) 997 000 μF
d) 9.97 μF

**4.** Which describes the graph plotted in this experiment and how τ is taken from it?
a) V against t; τ is the gradient of the line
b) V against t; τ is the time at which V reaches 63.2% of its maximum value
c) t against V; τ is the intercept on the V-axis
d) V against t; τ is the time at which V first reaches its maximum value

**5.** To obtain τ from a straight line of gradient −1/τ instead of by eye, you would plot:
a) V against t
b) ln V against t
c) ln(V₀ − V) against t
d) 1/V against t

**6.** The percentage error in the capacitance is calculated as:
a) [(theoretical − experimental)/theoretical] × 100
b) [(theoretical − experimental)/experimental] × 100
c) [(experimental − theoretical)/experimental] × 100
d) (experimental/theoretical) × 100

**7.** A parallel-plate capacitor has its plate separation d halved, everything else unchanged. Its capacitance:
a) halves
b) doubles
c) is unchanged
d) is quartered

**8.** Why does the charging curve flatten off as time goes on?
a) As V rises, the p.d. across the resistor falls, so the charging current falls
b) The capacitance of the capacitor falls as charge accumulates on it
c) The resistor heats up, so its resistance rises
d) The emf of the supply falls as it delivers charge

**9.** A voltmeter of relatively low resistance is connected across the capacitor. The effect on the results is that:
a) there is none, since a voltmeter draws no current
b) the apparent time constant increases, because the meter adds resistance to the circuit
c) both the maximum voltage recorded and the apparent time constant are reduced
d) the capacitance calculated from τ/R comes out larger than the true value

**10.** A capacitor charged to 12 V is discharged through a resistor with τ = 4 s. The voltage across it after 4 s is about:
a) 7.6 V
b) 4.4 V
c) 6.0 V
d) 0 V

**11.** After how many time constants is a charging capacitor about 99.3% charged?
a) 2
b) 3
c) 10
d) 5

**12.** A student sets up the circuit with R = 1 kΩ and C = 100 μF and takes voltmeter readings every 10 seconds. The main problem with this choice is:
a) the capacitor will be damaged by the current
b) τ is only 0.1 s, so the capacitor is fully charged long before the first reading and no curve can be plotted
c) τ is 100 s, so the experiment takes an impractically long time
d) the voltmeter will read zero throughout, because C is too small

## Section B - Short answer (3)

**13.** Write the charging equation for the voltage across a capacitor, defining every symbol, and give the equation for the time constant with the unit of each quantity. Then explain in physical terms why the voltage rises quickly at first and slowly later, and state what fraction of the maximum voltage has been reached at t = τ and at t = 5τ.

**14.** A trial is run with V₀ = 15 V, R = 47 kΩ and a capacitor marked 100 μF. The graph shows the capacitor voltage reaching 9.48 V at t = 4.9 s. Show why 9.48 V is the voltage you look for, find the experimental time constant and the experimental capacitance, and calculate the percentage error. Compare your τ with the value predicted by τ = RC.

**15.** A student's experimental capacitance differs from the marked value by 22%. Give four distinct possible causes and, for each, say whether it drives the computed capacitance too high, too low, or in an indeterminate direction. Then state two precautions that would reduce the error and say what each one prevents.

## Answers

**1. c** — *the time constant as a fraction*: τ is defined as the time to reach 1 − e⁻¹ = 63.2% of the maximum on charging. Option a is 36.8%, the fraction *remaining* on discharging (the mirror figure, and the commonest swap); b confuses τ with a "half-life"-style halfway point, which for an exponential is 0.693τ, not τ; d is the ~99.3% reached only after about 5τ.

**2. d** — *τ = RC*: doubling R doubles the product RC, and a larger τ means the voltage takes proportionally longer to reach any given fraction of V₀, so the circuit charges more slowly. Option a inverts the proportionality; b forgets that τ depends on both R and C; c is the standard half-answer — it gets τ right but does not connect τ to the charging time, which is the whole point of the mid-lesson question.

**3. a** — *C = τ/R, with R in ohms*: 10 kΩ = 1.0 × 10⁴ Ω, so C = 9.97/1.0 × 10⁴ = 9.97 × 10⁻⁴ F = 997 μF. Option c is what you get by leaving R as the number "10" (kΩ not converted) — the classic factor-of-1000 slip; b is a further order-of-magnitude slip using 100 kΩ; d confuses the prefix μ with a further division by 10⁶.

**4. b** — *reading τ off the charging curve*: the prescribed plot is V on the y-axis against t on the x-axis, and the instruction is to determine 63.2% of the maximum voltage and trace across to the curve and down to the time axis. Option a assumes the plot is a straight line — it is an exponential, so it has no single gradient (its *initial* gradient is V₀/τ, not τ); c reverses the axes; d confuses τ with the time to reach V₀, which in principle is never reached and in practice is ~5τ.

**5. c** — *linearising the exponential*: V₀ − V = V₀e^(−t/τ), so ln(V₀ − V) = ln V₀ − t/τ, a straight line of gradient −1/τ and intercept ln V₀. Option b would only be linear for a *discharging* capacitor (V = V₀e^(−t/τ)); a is the curve itself; d applies the log trick to the wrong function.

**6. a** — *percentage error convention*: the deviation is always divided by the accepted (theoretical) value, not the measured one. Option b and c divide by the experimental value, which changes the denominator each time and makes results incomparable; d is a ratio, not an error, and would give 100% for a perfect measurement.

**7. b** — *C = εA/d*: capacitance is inversely proportional to plate separation, so halving d doubles C. Option a treats the relation as direct proportion; d applies an inverse-square law, which belongs to fields between point charges, not to parallel-plate capacitance; c ignores the geometry entirely.

**8. a** — *the mechanism behind the exponential*: the charging current is I = (V₀ − V)/R = (V₀/R)e^(−t/τ). As charge builds up, V rises, the p.d. left across R shrinks, and the current that delivers further charge shrinks with it — the capacitor charges itself more and more slowly. Options b, c and d all invent a change in a component (C, R or the emf) to explain a shape that follows purely from the circuit equation with all three constant.

**9. c** — *voltmeter loading*: the meter sits in parallel with the capacitor, so it draws a leakage current. The capacitor then charges towards V₀R_V/(R + R_V) rather than V₀, and the effective time constant becomes (R ∥ R_V)C, which is smaller than RC. Option a states the ideal-meter assumption, which is exactly what fails here; b would be true if the meter were in *series*, which is where an ammeter goes; d gets the direction backwards — a shorter apparent τ gives a *smaller* computed C = τ/R.

**10. b** — *discharging exponential*: V = V₀e^(−t/τ) = 12 × e⁻¹ = 12 × 0.368 = 4.4 V, i.e. 36.8% of the initial value. Option a is 63.2% of 12 V — the charging fraction applied to a discharge, the single most common error here; c assumes a linear fall to half; d assumes the capacitor is fully discharged in one time constant.

**11. d** — *the 5τ convention*: 1 − e⁻⁵ = 0.9933, so after 5τ the capacitor is 99.3% charged and is conventionally taken as full. Options a and b give 86.5% and 95.0%, both short of 99.3%; c is far past the convention (1 − e⁻¹⁰ ≈ 99.995%) and would waste the whole session.

**12. b** — *choosing R and C so the timing is possible*: τ = 10³ × 100 × 10⁻⁶ = 0.1 s, so the capacitor is effectively fully charged in about 0.5 s — long before a 10-second reading interval can capture a single point on the rising part of the curve. The sample trial deliberately uses R = 10 kΩ with C = 1000 μF to give τ = 10 s, comfortably longer than reaction time. Option c inverts the arithmetic; a and d invent failures of the components rather than of the timing.

**13.** *Charging equation, time constant, and the shape of the curve*. **V(t) = V₀(1 − e^(−t/τ))**, where V(t) is the p.d. across the capacitor at time t, V₀ is the maximum (supply) voltage the capacitor charges towards, t is the time from closing the switch, and τ is the time constant. **τ = RC**, with τ in seconds (s), R in ohms (Ω) and C in farads (F). Physically, the charging current is I = (V₀ − V)/R: at t = 0 the capacitor is empty, the whole supply voltage appears across the resistor, and the current — and so the rate of charge delivery — is at its maximum V₀/R. As charge accumulates, V rises, the p.d. remaining across R falls, and the current falls with it, so each successive increment of charge arrives more slowly and the curve flattens towards the asymptote V₀. At **t = τ, V = 63.2% of V₀**; at **t = 5τ, V = 99.3% of V₀**, which is why the capacitor is taken as fully charged after about five time constants.

**14. τ_exp = 4.9 s; C_exp ≈ 104 μF; percentage error ≈ 4.3%; τ from RC = 4.7 s** — *reading τ from the 63.2% point and comparing with theory*. You look for 9.48 V because that is 63.2% of the maximum: 0.632 × 15 = 9.48 V, and by definition the capacitor reaches that value at t = τ. So **τ_exp = 4.9 s**. Then C = τ/R with R in ohms: R = 47 kΩ = 4.7 × 10⁴ Ω, so **C_exp = 4.9/4.7 × 10⁴ = 1.043 × 10⁻⁴ F = 104.3 μF**. Percentage error = [(theoretical − experimental)/theoretical] × 100 = [(100 − 104.3)/100] × 100 = **−4.3%, i.e. 4.3% in magnitude**; the negative sign simply says the measured capacitance came out above the marked value. Predicted τ = RC = 4.7 × 10⁴ × 100 × 10⁻⁶ = **4.7 s**, against 4.9 s measured — the same 4% discrepancy seen the other way round, which is well inside the ±20% tolerance typical of an electrolytic capacitor.

**15.** *Diagnosing a large percentage error and controlling it*. Causes (any four): **(i) tolerance of the marked capacitance** — an electrolytic capacitor is typically ±20%, so the "theoretical" value in the error formula is itself uncertain and a 22% discrepancy may mean the marking is wrong rather than the measurement; direction **indeterminate**. **(ii) Voltmeter loading or leakage through the dielectric** — charge drains in parallel with the capacitor, so the observed maximum voltage and the apparent τ are both reduced, and C = τ/R comes out **too low**. **(iii) The capacitor was not fully discharged before the trial**, so V starts above zero and 0.632V₀ is reached earlier than it should be; τ and hence C come out **too low** (misjudging the asymptote V₀ downwards from an incomplete curve does the same thing). **(iv) Starting the stopwatch late**, after the switch key is closed, so every recorded time is smaller than the true elapsed time; τ and C come out **too low**. **(v) Lead resistance and the supply's internal resistance** add to the marked R, so the true time constant is set by a larger resistance than the one used in C = τ/R, and the computed C comes out **too high**. Precautions (any two): **discharge the capacitor completely before each run**, which prevents a false non-zero starting voltage from shortening the measured τ; **use a voltmeter of very high resistance and take readings until the voltage is steady**, which prevents leakage from depressing V₀ and fixes the asymptote from which 63.2% is calculated; **choose R and C so that τ is much longer than reaction time** (τ ≈ 10 s in the sample trial), which prevents timing error from dominating; and **convert R to ohms before dividing**, which prevents the factor-of-1000 error in C.
