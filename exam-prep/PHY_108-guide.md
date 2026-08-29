# PHY_108 — General Practical Physics II

*Complete exam-preparation study guide. Covers weeks 1 to 12.*

---

## Orientation: what this course actually is

PHY_108 is a **laboratory course**, not a theory course. That fact should shape how you revise.

You did not attend lectures to learn new physics. You attended to learn how physics is *measured*. From Week 2 onward you ran one experiment a week in the Praxilabs virtual laboratory, recorded numbers, downloaded them as an Excel sheet, plotted a graph, took a slope, and turned that slope into a physical quantity. Then you compared it with the accepted value and quoted a percentage error.

That loop is the course.

**The loop, in six steps:**

1. **Set up the apparatus.** Know what each instrument is for and how it must be connected.
2. **Vary one quantity, measure another.** Record the pair.
3. **Linearise.** Rearrange the law so the two plotted quantities give a straight line, y = mx + c.
4. **Plot and draw a best-fit line.** Proper scale, labelled axes with units, accurate points.
5. **Take the slope.** The slope always equals a specific combination of physical constants.
6. **Extract the quantity, compare, quote a percentage error.**

Nine of the eleven experiments end exactly that way: *slope → constant → percentage error*. The two that do not (Kirchhoff's laws, Weeks 4 and 5) end in *calculated value vs measured value → comment*, which is the same discipline in different clothes.

**How the parts connect.** Week 1 is the toolkit — straight lines, linearisation, graph rules, error. It is the most heavily examined week in the course, because it is the only week whose content appears in every other week.

Weeks 2 to 5 are **DC electricity**: Ohm's law, non-ohmic conduction and Joule heating, then Kirchhoff's current and voltage laws. Weeks 6 and 7 are **capacitors** — charging and discharging, the same circuit run in opposite directions. Week 8 is **gases** (Boyle's law), Week 9 **heat** (specific heat by mixtures), Weeks 10 and 11 **magnetism** (magnetic moment; permeability of free space), Week 12 **elasticity** (Young's modulus).

The last five look unrelated. They are not. Every one is a straight-line-and-slope experiment. Boyle's law straightens when you plot 1/V against P. Young's modulus straightens when you plot depression against mass. The physics changes; the method does not.

**What the exam tests.** Naming apparatus and saying what each piece does. Stating an aim. Writing the linearised form of a law and saying what the slope equals. Reading a slope from supplied data. Converting units before substituting. Calculating a percentage error. Identifying error sources and classifying them systematic or random. Explaining *why* a step is done.

Theory appears, but it is short, and it is the theory that supports the measurement. Nobody will ask you to derive the Biot–Savart law. Somebody will ask why axes must carry units.

---

## Part 1 — The straight line: the spine of the course
*(Week 1)*

### What it is

A linear equation relates two variables so that equal steps in one give equal steps in the other. Its graph is a straight line.

> **y = mx + c**

- **y** — the dependent variable, what you measure. Vertical axis.
- **x** — the independent variable, what you change. Horizontal axis.
- **m** — the slope or gradient: the rate of change of y with respect to x.
- **c** — the y-intercept: the value of y when x = 0.

Two consequences follow at once:

- **y-intercept** = c (set x = 0).
- **x-intercept** = −c/m (set y = 0). In words: minus the y-intercept, divided by the slope.

Course examples of linear equations: y = 24x + 16, and 7y − 40x = 35 (which is y = (40/7)x + 5).

### Why it is done that way

A straight line is the only shape the eye judges reliably. Show someone a curve and ask whether it is a parabola or an exponential and they will guess wrong. Show them a straight line and they can spot a bad point, balance a best fit by eye, and read a gradient with a ruler.

More importantly, a straight line gives you **a number for free**. The slope is extracted from *all* your points at once, not from any single reading. That averaging is what makes graphical analysis more accurate than substituting one measurement into a formula. It is the same logic as the Week 1 case study on measuring a line with a ruler: take many measurements, average them, and random errors partly cancel.

Hence the course's central habit: **never analyse raw data directly if you can make it linear first.**

### Fully worked example

Two points on a graph: (x₁, y₁) = (1, 2) and (x₂, y₂) = (4, 5).

**Step 1 — slope.**

m = (y₂ − y₁)/(x₂ − x₁) = (5 − 2)/(4 − 1) = 3/3 = 1.00

**Step 2 — y-intercept.** Substitute one point:

2 = (1.00)(1) + c → c = 1.00

**Step 3 — the equation.** y = 1.00x + 1.00

**Step 4 — check with the other point.** At x = 4: y = 1.00(4) + 1.00 = 5.00 ✓

**Step 5 — x-intercept.** x = −c/m = −(1.00)/(1.00) = **−1.00**

**A second example with negative slope.** The course's second graph passes through (0, −1) and (4, −3).

m = (−3 − (−1))/(4 − 0) = −2/4 = **−0.50**

(0, −1) is already on the y-axis, so c = −1.00, and y = −0.50x − 1.00.

x-intercept: x = −c/m = −(−1.00)/(−0.50) = **−2.00**

Check: at x = −2.00, y = −0.50(−2.00) − 1.00 = 1.00 − 1.00 = 0 ✓

### Where people go wrong

- **Inverting the slope** — writing (x₂ − x₁)/(y₂ − y₁). Always rise over run.
- **Sign errors on the x-intercept.** The formula is −c/m. Two negatives make a positive, as in the second example.
- **Choosing the wrong axis.** What you *controlled* goes on x — time in the RC experiments, mass in the Young's modulus experiment.
- **Forgetting the slope carries units.** If y is in volts and x in milliamps, the slope is in V/mA, which is **kilo-ohms**, not ohms. That one loses whole marks in Week 2.

### In the exam

You get a pair of coordinates, a small table, or a sketched line, and are asked for the slope, intercept or equation. Sometimes it is dressed up: "the graph of T² against L has slope 4.02 s²/m — find g." Same question. It is testing whether you can go *from a slope back to physics*, which is step 5 of the course loop.

---

## Part 2 — Linearising non-linear equations
*(Week 1)*

### What it is

Most physical laws are not straight lines. Decay is exponential, Boyle's law is a reciprocal, the pendulum period goes as a square root. Linearisation rewrites such a law so that *some function of the measured quantities* plots straight.

**1. Logarithmic transformation** — for exponential growth or decay.

Exponential decay: N = N₀e^(−λt). Take natural logs of both sides:

ln(N) = ln(N₀) − λt

Rearrange into y = mx + c order:

ln(N) = (−λ)t + ln(N₀)

Plot **ln(N) against t**. Slope = −λ. Intercept = ln(N₀).

**2. Power-law transformation** — for a variable raised to a power.

Power law: y = kxⁿ. Take logs:

log(y) = log(k) + n·log(x) → log(y) = n·log(x) + log(k)

Plot **log(y) against log(x)**. Slope = n, the power itself. Intercept = log(k).

**3. Direct rearrangement.** Simple pendulum: T = 2π√(L/g). Square both sides: T² = (4π²/g)·L. Plot T² against L.

### The course's linearisation table

*The table appears twice in the Week 1 slides, split across two images. It is reproduced here in full.*

| Equation | Linearised form | y-axis | x-axis | Slope, m | Intercept, c |
|---|---|---|---|---|---|
| Simple pendulum: T = 2π√(L/g) | T² = (4π²/g)L | T² | L | 4π²/g | 0 |
| Hooke's law: F = kx | F = kx | F | x | k | 0 |
| Coulomb's law: F = k(q₁q₂/r²) | F = kq₁q₂·(1/r²) | F | 1/r² | kq₁q₂ | 0 |
| Boyle's law: PV = k | log(P) = −log(V) + log(k) | log(P) | log(V) | −1 | log(k) |
| Exponential decay: N = N₀e^(−λt) | ln(N) = −λt + ln(N₀) | ln(N) | t | −λ | ln(N₀) |

### Why it is done that way

Two reasons, both important.

First, **you cannot read a constant off a curve.** Plot N against t for decay and λ is buried in the shape. Plot ln(N) against t and λ is a ruler measurement.

Second, **linearising tests the law.** If the points fall on a straight line, the law holds. If they curve, the law is wrong or the experiment is faulty. A curve that "looks about right" tells you nothing; a straight line that really is straight tells you a great deal. This is exactly how Week 8 verifies Boyle's law and how Week 3 exposes tungsten as non-ohmic.

### Fully worked example

A gas obeys PV = k. Show how to test the law and extract k.

**Step 1 — the law.** PV = k, so P = k·V⁻¹.

**Step 2 — take logs.** log(P) = log(k) − log(V)

**Step 3 — y = mx + c order.** log(P) = (−1)·log(V) + log(k)

**Step 4 — identify.** y = log(P), x = log(V), m = −1, c = log(k).

**Step 5 — interpret.** If the plot is straight *and the slope is −1*, Boyle's law holds. A slope of −1.4 would mean it does not.

**Step 6 — get k.** If the intercept reads c = 0.3065, then k = 10^0.3065 = 2.026. (Check: 10^0.3 = 1.995, so a value just above 2 is right.)

### Where people go wrong

- **Using log where ln is needed.** For e^(something), use ln. For a general power law, log₁₀ is conventional; either works if you are consistent on both sides.
- **Forgetting the minus sign.** For decay the slope is −λ, so a slope of −0.0304 s⁻¹ means λ = +0.0304 s⁻¹.
- **Logging the wrong axis.** In the power-law case both axes are logged. In the exponential case only y is logged; time stays linear. Students log the time axis too and get nonsense.

### In the exam

The single most likely question in the paper. You will be handed a law you have never seen and asked: *what should be plotted against what to get a straight line, and what do the slope and intercept represent?* You do not need the physics — you need the algebra. Cover the table above and reproduce it.

*One Week 1 mid-lesson question reads only "What will the slope be if we plot :" — the equation was on an image that did not extract, and the answer slide is equally blank. Nothing is lost that the table does not already cover.*

---

## Part 3 — Graph technique
*(Week 1, applied in Weeks 2 to 12)*

### What it is

Graphing does two jobs: **visualisation** of data and relationships, and **analysis and interpretation** of results. The course gives four rules:

1. Proper scaling of axes.
2. Labelling of axes.
3. Plotting data points accurately.
4. Drawing the best-fit line or curve.

Those four lines are all the slides say. They are also worth about a fifth of a practical exam, so unpack them.

### Why — rule by rule

**Scaling.** Your points should fill at least half the grid in both directions. Cram them into a corner and you throw away precision: a slope read from a small triangle has large relative uncertainty, because the reading error at each end is a bigger fraction of a small difference. Use 1, 2, 5 or 10 units per square — never 3 or 7, or you will misplot.

**The origin is not compulsory.** Include (0, 0) only when you need the intercept, or when theory says the line must pass through the origin and you want to show it does. Week 2 needs it — "passes through the origin" is part of verifying Ohm's law. Week 12 needs it for the same reason.

**Labelling.** Every axis carries the quantity *and its unit*: "V (V)", "I (mA)", "t (s)", "Y (m)", "m (kg)". Without units the slope is meaningless and cannot become physics. This is the commonest mark lost in practical papers.

**Plotting.** Fine crosses or dots in circles, not fat blobs. Readable to the nearest small square.

**Best-fit line.** One straight line drawn with a transparent ruler, with the points balanced either side. Do **not** join the dots. Do **not** force the line through the first and last points. The line exists to average out random scatter; joining dots preserves the scatter you were removing. An outlier should be plotted, ignored when drawing the line, and mentioned in your comments — never quietly deleted.

### How to read a slope properly

1. Draw the best-fit line first.
2. Choose **two points that lie on the line**, not two data points. Data points sit off the line, and using them reintroduces the scatter you just removed.
3. Choose them **far apart**, near the two ends. A large triangle gives a small percentage uncertainty.
4. slope = (y₂ − y₁)/(x₂ − x₁), with units (unit of y)/(unit of x).

### Fully worked example

*Reconstruction: the Week 2 results table was an image that did not extract. These values are typical of the Praxilabs Ohmic Resistor experiment with R₁ at its default 1 kΩ.*

| V (V) | 1.00 | 2.00 | 3.00 | 4.00 | 5.00 | 6.00 |
|---|---|---|---|---|---|---|
| **I (mA)** | 1.02 | 1.97 | 3.04 | 3.99 | 4.96 | 6.03 |

**Step 1.** Plot V (y-axis, V) against I (x-axis, mA). Include the origin, because Ohm's law predicts the line passes through it.

**Step 2.** Draw the best-fit line. Scatter is at most 0.04 mA either side, so a single straight line through the origin fits well.

**Step 3.** Read two points **on the line**, far apart: (I = 1.00 mA, V = 0.99 V) and (I = 6.00 mA, V = 5.98 V).

**Step 4.** slope = (5.98 − 0.99) V / (6.00 − 1.00) mA = 4.99/5.00 = **0.998 V/mA**

**Step 5.** Convert: 1 V/mA = 1 V / 10⁻³ A = 10³ Ω = 1 kΩ.

R = **998 Ω** (3 s.f.)

**Step 6.** % error = |1000 − 998|/1000 × 100 = **0.2 %** — well inside the 5 % tolerance the course sets.

### Where people go wrong

- **Reading the slope from two raw data points.** The most frequent and costly mistake.
- **Using a small triangle.** If your two points are 0.5 mA apart, a 0.02 mA reading error is 4 % of the run. Spread them out and the same error is under 1 %.
- **Dropping the unit conversion.** 0.998 V/mA is 998 Ω, not 0.998 Ω. A factor of a thousand.
- **Drawing a curve because points scatter.** Scatter is random error. A gentle S drawn through six scattered points is you inventing physics.

### In the exam

Expect one of: a table with "plot a suitable graph and determine X"; a printed graph with "find the slope and hence X"; or a written question — "state four rules for a good graph", "why should the best-fit line not pass through every point?" The last kind is testing whether you understand that a graph is an *averaging device*.

---

## Part 4 — Error, uncertainty and percentage error
*(Week 1, applied in Weeks 2, 6, 7, 10, 11, 12)*

### What it is

> **Error is the difference between a measured value and the true value.**

Write that definition exactly. Note what it does not say: error is not a mistake. A mistake is dropping the thermometer. An error is the unavoidable gap between what an instrument reads and what is really there.

**Sources named in the course:** instrument errors (the limits and defects of the device), observation errors (how the observer reads the scale, including parallax), and human error (reaction time on a stopwatch, mis-recording, mis-setting).

**Two categories:**

- **Systematic errors** are caused by a consistent failure of an instrument. Every reading is pushed the same way by roughly the same amount — a voltmeter reading 0.1 V high, a rule with a worn zero end, a thermometer 2 °C out.
- **Random errors** are caused by factors that are not predictable or consistent. Readings scatter above and below the true value — fluctuation in the last digit, stopwatch variation, slightly different viewing angles.

| | Systematic | Random |
|---|---|---|
| Direction | Always the same way | Both ways |
| Repeated readings | All shifted together | Scattered about the mean |
| Reduced by averaging? | **No** | **Yes** |
| Reduced by calibrating/zeroing? | **Yes** | No |
| Shows on a graph as | Wrong intercept, line displaced | Scatter about the line |

That last row is the exam-worthy insight. A systematic error moves the whole line — it corrupts the *intercept* but often leaves the *slope* intact. A random error scatters points about the line but leaves both roughly right on average. This is a strong reason the course extracts physics from slopes rather than single readings.

### The four quantities you must calculate

**1. Actual error** (absolute error) — the amount by which an experimental value differs from the true value.

> actual error = |true value − measured value|

Course example: a man measures a rope as 6.0 m when it is truly 6.3 m. Actual error = 6.3 − 6.0 = **0.3 m**.

**2. Relative (fractional) error** = actual error / true value. For the rope: 0.3/6.3 = 0.0476, a pure ratio.

**3. Percentage error** = (actual error / true value) × 100. For the rope: **4.8 %**.

The form used from Week 6 onward:

> **% error = [(Theoretical − Experimental)/Theoretical] × 100**

Take the magnitude unless the sign is asked for.

**4. Percentage difference** — used when there is no true value, only a reference.

> **% difference = [(observed − reference)/reference] × 100**

Positive means the observed value is higher than the reference; negative means lower. It is used in physics, chemistry, economics and data analysis.

> ⚠ **Error in the material.** The Week 1 slide defines percentage difference as "(observed − Reference)/Reference" with **no × 100**. As written that is a fraction, not a percentage. Use the corrected form.

### Why it is done that way

Why a percentage at all? An absolute error means nothing alone. An error of 1 mm is catastrophic on a beam thickness of 10 mm (10 %) and irrelevant on a length of 1000 mm (0.1 %). The percentage tells you how much the error *matters*.

Why does averaging help? The Week 1 case study makes the argument: measure a line several times with a ruler and the average is a better estimate than any single measurement, because random errors that push readings up partly cancel those that push readings down. That is why Week 10 has you average **eight** deflection angles before doing anything else.

Why reverse the magnet's polarity in Week 10, and measure on both sides? Because reversing flips the direction of a systematic effect. Averaging across both orientations cancels systematic error that plain repetition cannot touch. That is genuinely clever design and a strong exam answer.

### Fully worked example

In Week 6 the capacitor is labelled C = 1000 μF. Graphical analysis gives τ = 9.97 s with R = 10 kΩ. Find C and the percentage error.

**Step 1 — convert to SI.** R = 10 kΩ = 1.00 × 10⁴ Ω

**Step 2 — apply C = τ/R.** C = 9.97/(1.00 × 10⁴) = 9.97 × 10⁻⁴ F

**Step 3 — convert.** 1 F = 10⁶ μF, so C = **997 μF** (3 s.f.)

**Step 4 — percentage error.**

% error = [(1000 − 997)/1000] × 100 = **0.3 %**

**Step 5 — comment.** Excellent agreement, well inside the 5 % this course treats as acceptable. The result confirms both the exponential charging model and τ = RC.

### Where people go wrong

- **Dividing by the experimental value.** The denominator is always the accepted, theoretical or reference value.
- **Losing the × 100.** You report 0.003 % instead of 0.3 %.
- **Confusing precision with accuracy.** A meter reading 4.9873 V is precise. If the truth is 5.4 V it is not accurate. Systematic error destroys accuracy while leaving precision intact — the most dangerous combination in a laboratory, because the readings *look* trustworthy.
- **Quoting too many significant figures.** Three is right for almost everything in this course.
- **Calling a blunder a "human error" source.** Examiners want reaction time, parallax and reading judgement — not "I wrote down the wrong number."

### In the exam

Three shapes are near-certain:

1. *Compute a percentage error.* Easy marks — do not lose them on the denominator.
2. *Distinguish systematic from random*, with an example of each and how to reduce each.
3. *State sources of error in this experiment and suggest improvements.* Answer with the apparatus in front of you: parallax on the voltmeter needle, heat loss from the calorimeter, reaction time on the stopwatch, the magnet not lying along the ruler, the beam not loaded exactly at its centre. Generic answers score badly.

> **Background (beyond the course, but useful).** When a result depends on several measured quantities, fractional errors combine. For a product or quotient, add them: if Y = A×B/C then ΔY/Y ≈ ΔA/A + ΔB/B + ΔC/C. For a power, multiply by the power: if Y ∝ d³ then ΔY/Y ≈ 3·Δd/d. This is why, in Week 12, the *thickness* must be measured far more carefully than the length.

---

## Part 5 — The standard experimental workflow
*(Weeks 2 to 12)*

### The skeleton

Every experiment runs in the Praxilabs virtual laboratory and follows the same shape. Know the shape and you can reconstruct any individual experiment under pressure.

1. **Inspect and connect.** Click a component to zoom in, make the connections shown in the figure, click away to zoom out. Repeat for the connection board, voltmeter, ammeter and power supply.
2. **Set the fixed parameters** — resistances, capacitor value, coil radius, beam material and dimensions, hot-plate temperature.
3. **Set the independent variable to its first value.**
4. **Click Record.** Every experiment in the course uses a Record button; that click captures a data pair.
5. **Step the independent variable and Record again**, at *regular intervals* — 3 V steps, 5 cm steps, 2 cm steps, 10 s intervals, 50 g steps.
6. **Take enough readings** — at least six in Week 2, at least ten in Weeks 6 and 7, five distances in Week 10, up to twenty positions in Week 11.
7. **End the experiment.** An Excel sheet downloads automatically.
8. **Analyse:** convert units → compute derived columns → plot → slope → quantity → percentage error.

### Why it is done that way

**Regular intervals** spread points evenly across the graph, so the best-fit line is supported along its whole length rather than anchored by a cluster at one end.

**Many readings** reduce random error. Six is the practical minimum for a believable line; ten is comfortable.

**Covering the full range** matters because non-linearity only shows at the extremes. Week 3 says so explicitly: "cover all the available voltage range (0.1 V to 50 V)." Take every tungsten reading between 0.1 V and 1 V and you will conclude, wrongly, that tungsten is ohmic.

**The Excel sheet** separates measurement from analysis. You record raw numbers honestly first, and only then compute derived columns. Computing as you go invites you to "correct" a reading that does not fit.

### The unit-conversion checklist

This is where most marks are lost, so make it a formal step.

| Quantity | Recorded as | Convert to | Factor |
|---|---|---|---|
| Current | mA | A | × 10⁻³ |
| Resistance | kΩ | Ω | × 10³ |
| Capacitance | μF | F | × 10⁻⁶ |
| Distance / depression | cm or mm | m | × 10⁻² or × 10⁻³ |
| Mass | g | kg | × 10⁻³ |
| Volume | ml (cm³) | m³ | × 10⁻⁶ |
| Flux density | nT | T | × 10⁻⁹ |
| Pressure | cmHg | Pa | 76 cmHg = 1.013 × 10⁵ Pa |

Week 12's instruction applies everywhere: **convert all values to the MKS system** — metres, kilograms, seconds — *before* substituting into any formula.

Temperature is the one exception. For *differences*, °C and K are interchangeable, which is why specific-heat calculations stay in °C. This course only ever uses temperature differences.

### Where people go wrong

- **Substituting kΩ where the formula expects Ω**, or grams where it expects kilograms — a factor of 1000 either way.
- **Converting only some quantities.** In Week 11 the table lists z in centimetres while R is already in metres; convert both.
- **Converting at the end instead of the start.** Convert first, then substitute once. Mixed-unit working is where sign and magnitude errors breed.
- **Recording and computing in the same step.** Write the raw readings down first. Deriving columns as you measure tempts you to "fix" a reading that does not fit.

### In the exam

Rarely a question in itself, almost always the hidden trap inside a calculation. Build the habit: before substituting anything, write your quantities in a column in SI units and check each one.

---

## Part 6 — DC circuits I: Ohm's law and resistor networks
*(Week 2)*

**Aim:** to verify Ohm's law.

**Apparatus:** breadboard; voltmeter and ammeter; DC power supply; connecting wires and bridges (jumpers); two resistors R₁ and R₂.

*Missing diagram — reconstruction.* The DC supply, the ammeter and R₁ form a **single series loop**, so all the current through R₁ also passes through the ammeter. The voltmeter is connected **in parallel across R₁ only**, so it measures the potential difference across the resistor and nothing else. On the breadboard the resistor bridges two rows; jumpers run from one end to the supply's positive rail via the ammeter, and from the other end back to the negative rail.

**Why the meters go where they go.** An ammeter measures the current *passing through* it, so it goes in series and has very low resistance so as not to disturb the circuit. A voltmeter measures the potential *difference between two points*, so it goes in parallel and has very high resistance so it draws almost no current. Swapping them is the classic laboratory disaster: a voltmeter in series nearly stops the current, and an ammeter across a supply is a short circuit.

### Theory

> **Ohm's law: the current I through a conductor is directly proportional to the potential difference V across it, at constant temperature.**
>
> **V = IR**, with R in ohms (Ω)

Ohm's law was formulated by Georg Simon Ohm, a German physicist, in 1827.

Compare with y = mx + c: V = R·I + 0. So **plot V against I and you get a straight line through the origin whose slope is R.** The zero intercept is part of the claim: a genuine ohmic conductor gives no voltage at zero current.

**A resistor** resists the flow of current. Its resistance is measured in ohms. Resistors control current and voltage in circuits, and may be connected in series or parallel.

**Series.** The same current passes through each resistor; the potential difference across each is different (unless the resistors are equal).

> R = R₁ + R₂ + R₃ + … + R_N

**Parallel.** All resistors have the same potential difference across them; the current through each is different (unless equal).

*Missing formula — reconstruction. The parallel formulae were on images that did not extract:*

> 1/R = 1/R₁ + 1/R₂ + … + 1/R_N, and for two resistors R = R₁R₂/(R₁ + R₂)

**Why these formulae.** In series, the same charge passes through each resistor in turn, so voltages add: V = IR₁ + IR₂ = I(R₁ + R₂). In parallel, the same voltage sits across each branch, so currents add: I = V/R₁ + V/R₂ = V(1/R₁ + 1/R₂). Series resistance always increases the total; parallel resistance is always *smaller than the smallest branch*, because you have added another path.

### Procedure

1. Expand the interface (up arrow, top right); scroll to zoom in and identify the components.
2. Click the connection board, wire the circuit as shown, click away to zoom out.
3. Click the voltmeter, connect it as shown, click away. Do the same for the ammeter, then the DC power supply. Expand the interface again.
4. Set R₁ (range 1–20 kΩ; default 1 kΩ).
5. Apply a potential difference using the knob on the supply or the DC voltage slider — say 1 V.
6. Click **Record** to capture V and I.
7. Repeat steps 5–6 **six times** at different potential drops. The experiment ends and an Excel sheet downloads.

**Data analysis.** Plot V (V) against I (mA) — a straight line through the origin. Deduce the slope; it equals R₁. Calculate the % error in R₁, which should be within 5 % of the default 1 kΩ. The full worked example is in Part 3: slope 0.998 V/mA = 998 Ω, 0.2 % error.

### Fully worked example — resistor networks

The course's own mid-lesson question. R₁ = 10 Ω, R₂ = 20 Ω, R₃ = 30 Ω.

**(a) Series.** R = 10 + 20 + 30 = **60 Ω**

**(b) Parallel.** *(The answer slide was an image and did not extract; this is the reconstruction.)*

1/R = 1/10 + 1/20 + 1/30

Common denominator 60:

1/R = 6/60 + 3/60 + 2/60 = 11/60

R = 60/11 = **5.45 Ω** (3 s.f.)

**Check.** 5.45 Ω is smaller than the smallest branch (10 Ω), as it must be. ✓

### Where people go wrong

- **Forgetting to invert at the end of a parallel calculation.** You get 1/R = 11/60 and write "R = 11/60 Ω" — wrong by a factor of about 30. Always take the reciprocal, then check the answer is smaller than the smallest resistor.
- **Reporting V/mA as ohms.** V/mA is kΩ.
- **Plotting I against V and calling the slope R.** With I on the y-axis the slope is 1/R, the conductance. Either is fine *if you say which*; the course specifies V vs I.

*Two small inconsistencies, noted for honesty:* the apparatus list includes R₂, but only R₁ is ever used; and the stated range for R₁ is 1–20 kΩ while the default used for the error calculation is 1 kΩ, the very bottom of that range. Neither affects the physics.

### In the exam

State Ohm's law; sketch the circuit with correct meter placement; find R from a table; combine three resistors in series and parallel; explain why the V–I graph passes through the origin. A favourite variant: 6 Ω and 3 Ω give 9 Ω in series and 2 Ω in parallel.

---

## Part 7 — DC circuits II: non-ohmic conduction and Joule's law
*(Week 3)*

**Aim:** to study the non-linear relation between current and voltage in a non-ohmic resistor.

**Apparatus:** voltmeter; ammeter; DC power supply; a resistor made of **tungsten**; a resistor made of **iron**. The circuit is identical to Week 2's — only the test element changes.

### Theory

Apply a uniform potential difference across a sample and measure the current. If the points fall on a straight line, V/I is constant and the material **obeys Ohm's law**. Stated carefully:

> A conducting device obeys Ohm's law if the resistance between any pair of points is **independent of the magnitude and polarity** of the applied potential difference.

A material that obeys it is **ohmic**. Some elements do not — the current does not increase linearly with voltage. These are **non-ohmic**.

**Why tungsten stops being ohmic.** Because of **Joule's law**, relating the heat generated in a conductor to the current:

> **P = I²R**

P is the power dissipated as heat (watts), I the current (amperes), R the resistance (ohms).

The chain of reasoning is the whole point of this week, and you should be able to write it:

1. Current flows and meets resistance.
2. That resistance dissipates energy as heat, at a rate P = I²R.
3. As current rises, heat generated rises as the *square* of the current.
4. The conductor's temperature rises.
5. For a metal, resistance increases with temperature.
6. So R is no longer constant, and the I–V relation becomes non-linear.

The effect is most significant at high currents. This is exactly why **tungsten is used in lamp filaments and heating applications**: it survives enormous temperatures, and its resistance rise is large and reproducible.

*Missing figures — reconstruction.* Fig. 1 ("Ohmic resistor") is an I–V plot that is a straight line through the origin — constant gradient, constant R. Fig. 2 ("Non-ohmic resistor") starts steeply from the origin and **bends over towards the voltage axis**: as V rises, I increases by progressively less, because the filament is hotter and its resistance higher. Both pass through the origin.

**Mid-lesson question.** Where are non-ohmic resistors used deliberately, and why? **Thermistors** in temperature-sensing circuits — semiconductor devices whose resistance changes drastically with temperature. That strong non-linearity gives precise measurement over a specific range, suiting them to temperature control in ovens, air conditioning and engine management.

Other non-ohmic devices named in the course: **light bulbs** (resistance rises as the filament heats), **diodes** (very high resistance one way, very low the other, which is why they rectify), **transistors** (resistance depends on input voltage and current), and **LDRs** (resistance depends on illumination).

### Procedure

1. Inspect the circuit connection.
2. Select the conductor material from the drop list — **tungsten or iron**.
3. Set the DC supply to a low voltage, e.g. 0.1 V, and click **Record** to save V and I.
4. Increase the voltage, e.g. to 0.3 V, and Record again.
5. Repeat, covering **the whole range, 0.1 V to 50 V**, using the three push buttons above the voltage dial to change range.
6. The experiment ends automatically and an Excel sheet downloads.

**Data analysis.** Plot I (A) against V (V) — a **curve**, showing the non-linear relation. Compute I² and P = IV, then plot P (W) against I² (A²).

> ⚠ **A contradiction in the material.** The slides say the P-against-I² graph "should be linear, illustrating Joule's power law." That is only true **if R is constant** — because the slope of P against I² *is* R. But the whole aim of the week is to show that R is **not** constant for tungsten. Both statements cannot hold over the full range.
>
> The honest reading: P = I²R is always true, but it is only a *straight line* where R is effectively constant. For iron at modest currents the plot is close to straight. For tungsten across 0.1–50 V it **curves upward**, and its local gradient at each point gives the resistance at that operating temperature. That curvature is not a failure — it is the result.

### Fully worked example

*Reconstruction: the Week 3 results table was an image. These values are representative of a tungsten filament over the specified range.*

| V (V) | I (A) | R = V/I (Ω) | P = VI (W) | I² (A²) |
|---|---|---|---|---|
| 0.1 | 0.10 | 1.00 | 0.010 | 0.010 |
| 1.0 | 0.55 | 1.82 | 0.55 | 0.303 |
| 5.0 | 1.60 | 3.13 | 8.0 | 2.56 |
| 15.0 | 2.90 | 5.17 | 43.5 | 8.41 |
| 30.0 | 4.20 | 7.14 | 126 | 17.64 |
| 50.0 | 5.40 | 9.26 | 270 | 29.16 |

**Step 1 — compute one row in full.** At V = 15.0 V, I = 2.90 A:

R = V/I = 15.0/2.90 = 5.17 Ω (3 s.f.)
P = VI = 15.0 × 2.90 = 43.5 W
I² = (2.90)² = 8.41 A²

**Step 2 — check Joule's law is self-consistent there.**

P = I²R = 8.41 × 5.17 = 43.5 W ✓ Matches P = VI exactly, as it must.

**Step 3 — read the R column.** R rises from 1.00 Ω at 0.1 V to 9.26 Ω at 50 V — a factor of **9.3**. Resistance is not constant; tungsten is non-ohmic under these conditions.

**Step 4 — interpret the P–I² plot.** Since its slope equals R, and R rises by a factor of 9.3, the plot must steepen as I² increases. It is a curve, concave upwards.

**Step 5 — conclude.** The non-linear I–V curve and the curved P–I² plot are the same phenomenon seen twice: Joule heating raises the filament temperature, which raises its resistance.

### Where people go wrong

- **Saying tungsten is "a special metal".** *Any* metal goes non-ohmic if you heat it enough by passing current through it; tungsten just survives the temperature. What has been violated is the condition in Ohm's law: *at constant temperature*.
- **Using the cold resistance in P = I²R.** Use the resistance at *that* current.
- **Confusing "non-ohmic" with "does not conduct".** Non-ohmic devices conduct well; their resistance is simply not constant.
- **Squaring after multiplying.** I²R means (I)² × R, not (IR)².

### In the exam

Define ohmic and non-ohmic; sketch the I–V graph for each; state Joule's law and explain how it accounts for non-ohmic behaviour in a filament lamp; name three non-ohmic devices and an application. A calculation may ask for P from I and R, or R from P and I.

---

## Part 8 — DC circuits III: Kirchhoff's laws
*(Weeks 4 and 5)*

Weeks 4 and 5 use **the same circuit, apparatus and data**. Week 4 verifies the current law; Week 5 verifies the voltage law and solves the whole circuit. Treat them as one topic.

**Aims.** Week 4: to verify Kirchhoff's Current Law experimentally. Week 5: verification of Kirchhoff's Voltage Law.

**Apparatus (both weeks):** breadboard; **two** DC power supplies; **five** variable resistors; **three** ammeters; connection cables.

### Vocabulary

A **node** (junction) is a point where two or more components meet. A **branch** is a single path connecting two nodes, containing one or more components in series or parallel. A **loop** (mesh) is a closed pathway formed by interconnected branches.

### The two laws

**Kirchhoff's Current Law (KCL)**, based on **conservation of charge**:

> **The sum of currents entering a junction equals the sum of currents leaving it.** Equivalently, the algebraic sum of all currents at a junction is zero, taking currents entering as positive and leaving as negative.

At node b: **I₁ + I₂ = I₃**  … (1), or −I₁ − I₂ + I₃ = 0.

**Kirchhoff's Voltage Law (KVL)**, based on **conservation of energy**:

> **Around any closed path, the sum of all voltage drops on all branches within the loop equals the sum of the emfs of the batteries within the loop.** Equivalently, the algebraic sum of all voltages round a loop is zero.

**Sign conventions** — learn these exactly as the course states them. A potential difference across a resistor is **positive** if the resistor is traversed **in the same direction as the current** through it, negative otherwise. The emf of a battery is **positive** if traversed **from positive terminal to negative terminal**, negative otherwise.

### Why these laws are true

KCL is charge conservation. A junction is a point; it cannot store charge, so whatever flows in must flow out, instant by instant.

KVL is energy conservation. Potential is energy per unit charge. Carry a unit charge round a closed loop and you return to the same potential, so every joule the battery gives it must be given back to the resistors. If the sum were not zero you could circulate repeatedly and gain energy from nothing.

*A historical error in the material:* the Week 4 slide credits "the Russian scientist Justa Kirchhoff." Gustav Kirchhoff was **German**. The date 1845 is correct.

### The circuit

*Missing diagram — reconstruction.* The circuit, referenced constantly in both weeks, did not extract, but reconstructs exactly from the three equations the course supplies. Two nodes, a and b, joined by **three branches**:

- **Middle branch:** resistor **R₅** alone, carrying **I₁**.
- **Left branch:** **R₃ and R₄ in series** with the emf **E₁**, carrying **I₃**.
- **Right branch:** **R₁ and R₂ in series** with the emf **E₂**, carrying **I₂**.

The three ammeters sit one per branch. **Loop 1** is the left branch plus the middle branch (E₁, R₃, R₄, R₅). **Loop 2** is the right branch plus the middle branch (E₂, R₁, R₂, R₅).

The three governing equations, exactly as given:

> **KCL at node b:** I₁ + I₂ = I₃  … (1)
> **KVL round loop 1:** I₃R₃ + I₃R₄ + I₁R₅ = E₁  … (2)
> **KVL round loop 2:** I₂R₂ − I₁R₅ + I₂R₁ = −E₂  … (3)

> ⚠ **Two labelling errors in the material.**
> 1. Week 5 introduces equation (3) with "Apply **KCL** to node b." It is not KCL and not at node b — equation (3) is **KVL round loop 2**. Equation (1) is the KCL equation.
> 2. Week 4's analysis says "Using the **KVL** equation I₁ + I₂ = I₃." That is **KCL**. Week 4 is the KCL experiment, so this is a slip.
>
> Neither changes a number. Both would cost marks if repeated.

### Procedure (both weeks)

1. Select R₁ through R₅ and connect the circuit as shown.
2. Set the maximum output of **both** DC supplies to 50 V by pressing the 50 V button above the voltage dial.
3. Adjust the emfs of both supplies to 9 V with the dial knob.
4. Click **Record** to capture all three ammeter readings.
5. Increase the emf in regular 3 V intervals and repeat step 4. Save the downloaded Excel file.

Week 5 continues: substitute the resistances and emfs into equations (1)–(3), solve for I₁, I₂ and I₃, repeat for different values, then compare calculated with experimental values and comment.

### The data

| R₁ (kΩ) | R₂ (kΩ) | R₃ (kΩ) | R₄ (kΩ) | R₅ (kΩ) | E₂ (V) | E₁ (V) | I₁ (mA) | I₂ (mA) | I₃ (mA) |
|---|---|---|---|---|---|---|---|---|---|
| 10 | 1 | 2.5 | 7 | 5 | 9 | 9 | 0.895 | −0.416 | 0.479 |
| 10 | 1 | 2.5 | 7 | 5 | 9 | 12 | 1.055 | −0.344 | 0.711 |
| 10 | 1 | 2.5 | 7 | 5 | 9 | 15 | 1.215 | −0.271 | 0.944 |

> ⚠ **The procedure contradicts the data.** Step 5 says "Increase the EMF **E₂** at regular intervals (3 V)." In the table E₂ is fixed at 9 V and it is **E₁** that steps 9 → 12 → 15 V. Solving the equations settles it: stepping E₁ reproduces the measured currents to better than 0.5 %, while stepping E₂ does not. **Trust the table.**

### Fully worked example 1 — verifying KCL (Week 4)

Row 1: I₁ = 0.895 mA, I₂ = −0.416 mA, I₃ = 0.479 mA.

**Step 1 — apply equation (1).**

I₃(computed) = I₁ + I₂ = 0.895 + (−0.416) = **0.479 mA**

**Step 2 — compare.** I₃(measured) = 0.479 mA. Exact agreement.

**Step 3 — other rows.** Row 2: 1.055 − 0.344 = **0.711 mA** vs 0.711 ✓. Row 3: 1.215 − 0.271 = **0.944 mA** vs 0.944 ✓.

**Step 4 — percentage difference.** [(0.479 − 0.479)/0.479] × 100 = **0 %** in all three rows.

**Step 5 — comment.** Computed and measured I₃ agree to the full precision of the instruments, so KCL is verified. The negative sign on I₂ is not an error: it means that branch's current flows *opposite* to the direction assumed when the equations were written. KCL handles this automatically, which is why it is stated as an *algebraic* sum.

### Fully worked example 2 — solving the circuit with KVL (Week 5)

Row 1: R₁ = 10 kΩ, R₂ = 1 kΩ, R₃ = 2.5 kΩ, R₄ = 7 kΩ, R₅ = 5 kΩ, E₁ = 9 V, E₂ = 9 V.

**Step 1 — choose consistent units.** Work in **volts, milliamps and kilohms**: 1 mA × 1 kΩ = 1 V exactly, so no powers of ten are needed anywhere.

**Step 2 — put numbers into the three equations.**

(1) I₁ + I₂ = I₃
(2) 2.5 I₃ + 7 I₃ + 5 I₁ = 9 → **9.5 I₃ + 5 I₁ = 9**
(3) 1 I₂ − 5 I₁ + 10 I₂ = −9 → **11 I₂ − 5 I₁ = −9**

**Step 3 — eliminate I₃** by substituting (1) into (2).

9.5(I₁ + I₂) + 5 I₁ = 9 → **14.5 I₁ + 9.5 I₂ = 9**  … (2′)

**Step 4 — make I₂ the subject of (3).** I₂ = (5 I₁ − 9)/11

**Step 5 — substitute into (2′) and multiply through by 11.**

159.5 I₁ + 47.5 I₁ − 85.5 = 99
207 I₁ = 184.5 → **I₁ = 0.8913 mA**

**Step 6 — back-substitute.** I₂ = (4.4565 − 9)/11 = **−0.4130 mA**

**Step 7 — get I₃ from (1).** I₃ = 0.8913 − 0.4130 = **0.4783 mA**

**Step 8 — compare.**

| Current | Calculated (mA) | Measured (mA) | % difference |
|---|---|---|---|
| I₁ | 0.8913 | 0.895 | +0.41 % |
| I₂ | −0.4130 | −0.416 | +0.72 % |
| I₃ | 0.4783 | 0.479 | +0.15 % |

**Step 9 — comment.** All three agree to better than 1 %, so Kirchhoff's laws are verified. The residuals match resistor tolerance and ammeter resolution — random, not systematic. *(Repeating with E₁ = 12 V gives 1.0507, −0.3406, 0.7101 mA against measured 1.055, −0.344, 0.711; with E₁ = 15 V, 1.2101, −0.2681, 0.9420 against 1.215, −0.271, 0.944.)*

### Where people go wrong

- **Dropping the sign of a negative current.** I₂ is genuinely negative. Writing 0.416 makes KCL fail and the equations unsolvable.
- **Sign errors round a loop.** Fix a direction for each current *before* you start, draw the arrows, then apply the two conventions mechanically. Do not re-decide halfway.
- **Unit chaos.** Work entirely in V/mA/kΩ, or entirely in V/A/Ω. Never mix.
- **Confusing the laws.** KCL is **currents at a node**, from **charge** conservation. KVL is **voltages round a loop**, from **energy** conservation. The material confuses them twice; do not copy that.
- **Solving three equations by trial and error.** Always eliminate I₃ with KCL first; two simultaneous equations are routine.

### In the exam

Near-certain. State both laws and the conservation principle behind each. Apply KCL to a junction with given currents (2 A entering means 2 A total leaving). Given a two-loop circuit with two emfs, write the equations and solve for the branch currents — the hardest calculation in the course, so practise the Step 3 elimination until it is automatic.

The Week 4 summary also carries a simple junction: I₁ = 0.40 A and I₂ = 0.57 A enter along wires 1 and 2, I₃ leaves along wire 3. By KCL, I₃ = **0.97 A**.

---

## Part 9 — Capacitors and RC circuits
*(Weeks 6 and 7)*

Week 6 charges a capacitor; Week 7 discharges one. The theory is shared, so it is given once.

**Aims.** Week 6: to investigate the charging characteristics of a capacitor and determine its capacitance and time constant. Week 7: to study the discharge and determine τ and C.

**Apparatus (both):** voltmeter; power supply; charging (or discharging) circuit — capacitor, resistor, switch key; stopwatch; wires; Praxilabs virtual laboratory — RC Circuit Charging / Discharging.

*Missing diagram — reconstruction.* The DC supply, switch key, resistor R and capacitor C form a **single series loop**. The voltmeter is connected **in parallel across the capacitor**, so it reads V(t) at all times. For discharging, the switch is opened once the capacitor is fully charged, leaving it to drive current backwards through R.

### Theory

**What a capacitor is.** A device that stores electric energy in the form of an electric field. It consists of two conductors (plates) separated by a small distance d, with plate area A and a dielectric of permittivity ε between them:

> **C = εA/d**

Capacitors are used as filters in DC power supplies and as energy storage banks for pulsed lasers. They pass alternating current while blocking direct current.

**Charge stored.** Connect the plates to a battery and charge transfers from one plate to the other until the potential difference between them equals that across the battery's terminals. The charge stored is directly proportional to the voltage, the constant of proportionality being the capacitance:

> **Q = CV**

Q in coulombs (C), V in volts (V), C in farads (F). *Capacitors are physical devices; capacitance is a property of devices.*

**Charging.** Close the switch and the voltage rises from zero towards a maximum V₀:

> **V(t) = V₀(1 − e^(−t/τ))**

**Discharging.** Open the switch on a charged capacitor and the voltage falls exponentially:

> **V(t) = V₀e^(−t/τ)**

**The time constant.**

> **τ = RC**, with τ in seconds, R in ohms, C in farads

τ measures how quickly the voltage responds to a sudden change in input. On **charging**, after one time constant the voltage has reached **63.2 %** of its maximum; on **discharging**, it has fallen to **36.8 %** of its initial value.

**Where those numbers come from.** Put t = τ into the discharge equation:

V(τ) = V₀e^(−τ/τ) = V₀e^(−1) = 0.3679 V₀

and 1 − 0.3679 = 0.6321 for charging. They are e⁻¹ and 1 − e⁻¹, and you should be able to derive one in a line.

**Why R and C set the speed.** A bigger R throttles the current flowing onto or off the plates; a bigger C means more charge is needed to reach a given voltage. Their product has the dimensions of time. The course's mid-lesson answer says it plainly: increase R at constant C and τ increases, so the circuit charges more slowly.

### Procedure — charging (Week 6)

1. Connect the power supply and voltmeter in the charging circuit; choose a suitable capacitor and resistor and wire them as shown.
2. Turn on the supply and choose the output voltage, e.g. 15 V.
3. Turn ON the switch key and, with a stopwatch, record the voltmeter reading **every 10 seconds** until it reaches its maximum. **Take at least 10 measurements.**
4. End the trial with the "End" button; an Excel sheet downloads.

### Procedure — discharging (Week 7)

1. Connect the supply and voltmeter in the discharging circuit; choose a suitable capacitor and resistor and wire them as shown.
2. Turn ON the supply and choose an output voltage, e.g. 15 V.
3. Turn ON the switch key — the LED lights up.
4. **Wait until the voltmeter reaches its maximum value** (approximately the supply voltage).
5. Turn OFF the switch key and record the voltmeter reading **every 10 seconds**. At zero time the reading is maximum.
6. End the trial and download the Excel sheet.

**Why step 4 matters.** Begin discharging before the capacitor is fully charged and your V₀ is not what you think it is, so every point on the curve is wrong. The wait is not optional.

*A small inconsistency:* Week 7 says "10 measurements at least" on one slide and "at least 7" on the next. Take ten.

### Data — charging (Week 6, Trial 1)

V₀ = 1 V, R = 10 kΩ, C = 1000 μF (stated)

| t (s) | 5.70 | 9.57 | 13.27 | 16.57 | 19.32 | 22.19 | 24.84 | 28.64 | 34.07 | 37.59 |
|---|---|---|---|---|---|---|---|---|---|---|
| **V (V)** | 0.43 | 0.62 | 0.73 | 0.81 | 0.86 | 0.89 | 0.92 | 0.94 | 0.97 | 0.98 |

### Fully worked example 1 — charging

**Step 1 — plot** V (y-axis) against t (x-axis): a curve rising steeply then flattening towards V₀ = 1 V.

**Step 2 — find 63.2 % of the maximum.** 0.632 × 1.00 V = **0.632 V**

**Step 3 — read the corresponding time.** Draw a horizontal line from V = 0.632 V to the curve, then drop to the time axis. From the data, V = 0.62 V at t = 9.57 s and V = 0.73 V at t = 13.27 s:

fraction = (0.632 − 0.62)/(0.73 − 0.62) = 0.012/0.11 = 0.109
t = 9.57 + 0.109 × (13.27 − 9.57) = 9.57 + 0.40

**τ = 9.97 s ≈ 10.0 s**

**Step 4 — convert R.** 10 kΩ = 1.00 × 10⁴ Ω

**Step 5 — capacitance.** C = τ/R = 9.97/(1.00 × 10⁴) = 9.97 × 10⁻⁴ F = **997 μF**

**Step 6 — percentage error.** [(1000 − 997)/1000] × 100 = **0.3 %**

**Step 7 — cross-check.** τ(theoretical) = RC = 1.00 × 10⁴ × 1000 × 10⁻⁶ = **10.0 s** ✓

### Data — discharging (Week 7, Trial 1)

V₀ = 11 V, R = 15 kΩ, C = 2200 μF (stated)

| t (s) | 3.16 | 10.03 | 20.35 | 31.33 | 40.56 | 50.80 | 58.12 | 70.04 | 79.80 | 87.59 |
|---|---|---|---|---|---|---|---|---|---|---|
| **V (V)** | 9.99 | 8.12 | 5.94 | 4.26 | 3.22 | 2.36 | 1.89 | 1.32 | 0.98 | 0.77 |
| **ln V** | 2.302 | 2.094 | 1.782 | 1.449 | 1.169 | 0.859 | 0.637 | 0.278 | −0.020 | −0.261 |

*(The ln V row is not in the source; it is computed here, as the course's step 3 requires.)*

### Fully worked example 2 — discharging, both methods

**Method A — direct reading from the decay curve.**

**Step 1.** Plot V against t: a curve falling steeply then flattening towards zero.

**Step 2.** 0.3679 × 11 = **4.047 V**

**Step 3.** Read the time at V = 4.047 V. From the data, V = 4.26 V at t = 31.33 s and 3.22 V at 40.56 s:

fraction = (4.26 − 4.047)/(4.26 − 3.22) = 0.213/1.04 = 0.2048
t = 31.33 + 0.2048 × 9.23 = 31.33 + 1.89

**τ = 33.2 s**

**Method B — the logarithmic straight line.** The better method, and the one the course asks for.

**Step 1 — linearise.** From V(t) = V₀e^(−t/τ), take natural logs:

ln V(t) = ln V₀ − t/τ → **ln V(t) = (−1/τ)·t + ln V₀**

Plot **ln V against t**: a straight line of negative slope, gradient −1/τ, intercept ln V₀.

**Step 2 — slope from two widely separated points on the line** (first and last):

m = (−0.261 − 2.302)/(87.59 − 3.16) = (−2.563)/(84.43) = **−0.03036 s⁻¹**

**Step 3 — get τ.** τ = −1/m = **32.9 s**

**Step 4 — check the intercept recovers V₀.**

c = 2.302 − (−0.03036)(3.16) = 2.302 + 0.096 = 2.398
V₀ = e^2.398 = **11.0 V** ✓ Exactly the stated supply voltage — powerful confirmation that model and data agree.

**Step 5 — compare the methods.** Method A gave 33.2 s, Method B 32.9 s. The course requires the two graphs to give equal time constants; they agree to about 1 %. ✓

**Step 6 — capacitance,** using the more reliable τ = 32.9 s with R = 1.50 × 10⁴ Ω:

C = τ/R = 32.9/(1.50 × 10⁴) = 2.193 × 10⁻³ F = **2193 μF**

**Step 7 — percentage error.** [(2200 − 2193)/2200] × 100 = **0.32 %**

**Step 8 — cross-check.** τ(theoretical) = RC = 1.50 × 10⁴ × 2200 × 10⁻⁶ = **33.0 s**. Both experimental values straddle it. ✓

### Where people go wrong

- **Using 63.2 % for discharging or 36.8 % for charging.** Charging *rises to* 63.2 %; discharging *falls to* 36.8 %. Both take one time constant. Sketch the curve and the mistake is obvious.
- **Forgetting to convert μF to F, or kΩ to Ω.** 2200 μF is 2.2 × 10⁻³ F; use 2200 and you predict a time constant of nine hours.
- **Taking ln of a voltage that has reached zero.** ln(0) is undefined. Stop while the meter still reads something.
- **Plotting log₁₀ V and using τ = −1/m.** With base-10 logs the slope is −1/(2.303τ). Use natural logs.
- **Reading τ off a charging curve without knowing V₀.** If charging is incomplete, the 63.2 % line is at the wrong height.

### In the exam

Very likely and worth a lot. Define capacitance and its unit; write Q = CV and C = εA/d; state and use τ = RC; write the charging and discharging equations; explain the meaning of 63.2 % and 36.8 % and derive one; from a table of V and t, linearise, find the slope, get τ, C and the percentage error. Also the qualitative one: "if R is doubled, what happens to the charging time?" — τ doubles, so charging takes twice as long.

---

## Part 10 — Gases: Boyle's law
*(Week 8)*

**Aim:** to verify Boyle's law.

**Apparatus:** J-tube; thermometer; pressure sensor; gas sample; Praxilabs virtual laboratory — Boyle's Law.

*Missing diagram — reconstruction.* A glass tube bent into the shape of a letter J. The **short arm is sealed at the top**; the **long arm is open to the atmosphere**. Mercury poured in at the open end runs round the bend and traps a fixed quantity of air in the closed arm. A scale beside the closed arm reads the length ℓ of the trapped air column. The open arm can be raised or lowered, changing the difference h in mercury levels between the arms. A thermometer confirms the temperature stays constant.

### Theory

> **At constant temperature, the pressure of a definite quantity of an ideal gas is inversely proportional to its volume.**
>
> **PV = constant**, or **P ∝ 1/V**, or **P₁V₁ = P₂V₂**

Boyle's law, alongside Charles's law, Avogadro's law and Gay-Lussac's law, shaped the ideal gas law, the foundation of the kinetic theory of gases. It was published by Robert Boyle in 1662 and discovered independently by the French physicist Edme Mariotte in 1679, so it is sometimes called the Boyle–Mariotte law.

**Pressure** is the force F per unit area A:

> **P = F/A**, SI unit the pascal (Pa = N/m²)
>
> **1 atm = 76 cmHg = 760 mmHg = 1.013 × 10⁵ Pa**

**The J-tube argument, step by step.** This is what the exam wants reproduced.

1. Start with mercury at the **same level in both arms** (h = 0). Equal levels means the mercury exerts no net extra pressure, so the trapped air is at atmospheric pressure: P₀ = Pₐ = 76 cmHg = 1.013 × 10⁵ Pa.
2. Note the initial trapped volume, say V₀ = 20 ml.
3. Compute the constant: P₀V₀ = 1.013 × 10⁵ Pa × 20 × 10⁻⁶ m³ = **2.026 J**. (1 ml = 1 × 10⁻⁶ m³; pressure × volume has the units of energy, hence joules.)
4. Raise the open arm by a height h. The excess mercury adds a pressure ρgh:

   > **P_f = Pₐ + ρgh** = (1.013 × 10⁵) + (13600 × 9.8 × h)

   where ρ = 13600 kg/m³ is the density of mercury and g = 9.8 m/s².
5. Find the trapped volume from the air-column length: V_f = ℓ × A. Here A = 1 cm², so numerically V_f = ℓ (ℓ in cm, V_f in cm³).
6. By Boyle's law, **P_f V_f = P₀V₀ = 2.026 J**, so **1/V_f = P_f/2.026**.
7. Plot **1/V_f against P_f**. Boyle's law predicts a **straight line through the origin** of slope 1/(P₀V₀) = 0.4936 J⁻¹. A straight line verifies the law.

> ⚠ **A notation problem.** The slide writes "V_f = ℓ" because A = 1 cm². That is a *numerical* shortcut, not an equation — a volume cannot equal a length. Write V_f = ℓ × A with A = 1 × 10⁻⁴ m², or keep ℓ in cm and V_f in cm³ and convert at the end.

### Procedure

1. Start with the mercury level on both sides (h = 0); the trapped air is at atmospheric pressure.
2. Raise the right (open) tube by h = 50 mm = 0.05 m, increasing the pressure on the trapped air. The trapped volume decreases.
3. Click **Record** to capture V_f.
4. Raise the tube again to h = 100 mm, and on through 250 mm, recording the volume at each height.
5. An Excel sheet downloads when you finish.

*A typo in the material:* the slide reads "Raise the right tube again to h = 100 **m**". It must be 100 **mm**, consistent with the 50 mm step before and the 250 mm limit after.

### Fully worked example

*Missing table — reconstruction. The Week 8 results table was an image. The table below is computed from the course's own equations with V₀ = 20 ml and A = 1 cm², and is what the virtual apparatus produces.*

**Step 1 — compute P_f at h = 0.05 m.**

ρgh = 13600 × 9.8 × 0.05 = 6664 Pa
P_f = 1.013 × 10⁵ + 6664 = **1.0796 × 10⁵ Pa**

**Step 2 — compute V_f = 2.026/P_f.**

V_f = 2.026/(1.0796 × 10⁵) = 1.877 × 10⁻⁵ m³ = **18.77 ml**

**Step 3 — compute 1/V_f.** 1/(1.877 × 10⁻⁵) = **5.329 × 10⁴ m⁻³**

**Step 4 — repeat for the other heights.**

| h (m) | ρgh (Pa) | P_f (Pa) | V_f (ml) | 1/V_f (10⁴ m⁻³) |
|---|---|---|---|---|
| 0.00 | 0 | 1.0130 × 10⁵ | 20.00 | 5.000 |
| 0.05 | 6 664 | 1.0796 × 10⁵ | 18.77 | 5.329 |
| 0.10 | 13 328 | 1.1463 × 10⁵ | 17.67 | 5.658 |
| 0.15 | 19 992 | 1.2129 × 10⁵ | 16.70 | 5.987 |
| 0.20 | 26 656 | 1.2796 × 10⁵ | 15.83 | 6.316 |
| 0.25 | 33 320 | 1.3462 × 10⁵ | 15.05 | 6.645 |

**Step 5 — plot 1/V_f (y-axis) against P_f (x-axis)** and draw the best-fit line.

**Step 6 — slope from the two extreme points on the line.**

slope = (6.645 − 5.000) × 10⁴ / [(1.3462 − 1.0130) × 10⁵]
slope = 1.645 × 10⁴ / 3.332 × 10⁴ = **0.4937 J⁻¹**

**Step 7 — compare with theory.** Predicted 1/(P₀V₀) = 1/2.026 = 0.4936 J⁻¹.

% error = [(0.4936 − 0.4937)/0.4936] × 100 = **0.02 %**

**Step 8 — check PV directly.** At h = 0.25 m: P_f V_f = 1.3462 × 10⁵ × 1.505 × 10⁻⁵ = **2.026 J** ✓ Same as P₀V₀.

**Step 9 — conclude.** The plot is a straight line through the origin and PV is constant across the whole range. Boyle's law is verified.

### Where people go wrong

- **Leaving h in centimetres in ρgh.** Enter 5 instead of 0.05 and the pressure is a hundred times too large.
- **Forgetting to add atmospheric pressure.** P_f = Pₐ + ρgh. The trapped air is already at atmospheric pressure before you raise anything.
- **Plotting P against V and expecting a straight line.** P against V is a hyperbola; you must plot against **1/V** — the Week 1 technique in action.
- **Using 76 as if it were pascals.** 76 is cmHg; in pascals it is 1.013 × 10⁵.
- **Forgetting Boyle's law requires constant temperature.** That is why a thermometer is listed — equipment whose only job is to confirm a condition of the law is met.

### In the exam

State Boyle's law in words and symbols; define pressure and give its SI unit; convert between atm, cmHg, mmHg and Pa; do a P₁V₁ = P₂V₂ calculation; explain the J-tube and why raising the open arm increases the pressure; say what graph verifies the law and what its slope means. And the favourite: "why is a thermometer included in the apparatus?"

---

## Part 11 — Heat: specific heat of a solid by the method of mixtures
*(Week 9)*

**Aim:** to determine the specific heat of a solid using the mixture method.

**Apparatus:** digital balance; hot plate; crucible tongs; glass beaker; thermometer; water reservoir; metal blocks of different materials; insulating jacket with cover; calorimeter.

*Missing diagram — reconstruction.* A metal calorimeter cup (here copper) sits inside a larger **insulating jacket**, separated by an air gap, with a **lid** on top pierced for the thermometer. Separately, a glass beaker of water stands on the hot plate; the metal block is heated in that water to a known temperature Ts before transfer with tongs into the calorimeter.

### Theory

**Specific heat capacity** of a material is a measure of how much heat energy is required to raise the temperature of unit mass (1 kg) of that material by 1 °C. It represents the material's ability to store or release heat energy.

The heat needed to raise m kilograms from Ti to Tf is:

> **Q = mc(Tf − Ti)**

The SI unit is **joules per kilogram per degree Celsius (J/kg·°C)**. Specific heat is a property of the material. Q is positive when the body acquires heat and its temperature rises, negative otherwise.

**The method of mixtures.** A hot metal block of mass ms at temperature Ts is placed in a calorimeter of mass mc containing water of mass mw, both at room temperature Tr. Heat transfer begins spontaneously until the mixture reaches a common final temperature Tf. Applying conservation of energy:

> **Heat lost by the solid = Heat gained by water and calorimeter**
>
> **ms·cs(Ts − Tf) = (mw·cw + mc·cc)(Tf − Tr)**

where cs is the unknown, cw = **4186 J/kg·°C** for water, and cc is the specific heat of the calorimeter.

**Why the calorimeter appears.** The cup is itself a lump of metal in thermal contact with the water. It warms too, and warming it costs energy. Drop the mc·cc term and you attribute all the heat gained to the water alone, so the solid appears to have released less heat than it did and cs comes out too small. This term is the calorimeter's **water equivalent**, and it is the most commonly forgotten part of the equation.

**Why insulate?** The equation assumes the *only* heat flows are from solid to water-plus-calorimeter. Heat leaking to the room breaks that assumption; the jacket and lid make it true enough. Residual leakage is a **systematic error** that always acts one way: heat lost to the room lowers Tf, making cs too small.

*Historical background from the slides:* one of the earliest calorimeters was invented by Antoine Lavoisier in the late 18th century. Joule's apparatus, developed by James Joule in the mid-19th century, investigated the relationship between mechanical work, heat and energy, and helped establish the mechanical equivalent of heat.

### Procedure

1. Drag the metal cube onto the balance to find ms; the reading appears in a callout. Click **Record**.
2. Drag the block into the glass beaker; raise the water reservoir above the beaker to fill it.
3. Place the beaker on the hot plate and drag the thermometer to it.
4. Adjust the heating temperature with the knob to **90–99 °C**. Click **Record**.
5. While the solid heats, drag the calorimeter to the balance to find mc. Click **Record**.
6. **Click the balance to tare it** before adding water.
7. Raise the water reservoir above the calorimeter, still on the balance, to add water. Click **Record** — this gives mw.
8. Drag the calorimeter into the insulating jacket; place the top cover on. The thermometer shows the water temperature Tr. Click **Record**.
9. You zoom to the hot plate; the solid has reached approximately Ts. Click **Record**.
10. Using the crucible tongs, move the hot cube to the calorimeter inside the jacket.
11. Replace the cover and read the final temperature Tf, which should be higher than Tr. Click **Record**.
12. The experiment completes and an Excel sheet downloads.

**Two steps carry the reasoning.** Taring means the reading after adding water is the mass of the *water alone*; skip it and mw is wrong by mc. The tongs are not only safety — touching the block would transfer heat and change Ts.

### The data

**Specific Heat of Solids — Material type: Copper**

| ms (g) | mc (g) | mw (g) | Tr (°C) | Ts (°C) | Tf (°C) | cw (J/kg·deg) | cc (J/kg·deg) |
|---|---|---|---|---|---|---|---|
| 8.9 | 36.36 | 68.63 | 16.1 | 91.3 | 17 | 4186 | 387 |

*Note: cc = 387 J/kg·°C is itself copper's specific heat, so the calorimeter cup is copper. Note also that ms = 8.9 g is numerically the density of copper in g/cm³, which is the mass of a 1 cm³ cube — consistent, but worth knowing.*

### Fully worked example

**Step 1 — convert masses to kilograms.**

ms = 0.0089 kg, mc = 0.03636 kg, mw = 0.06863 kg

Temperatures stay in °C, because only *differences* appear.

**Step 2 — the two temperature differences.**

Ts − Tf = 91.3 − 17.0 = 74.3 °C
Tf − Tr = 17.0 − 16.1 = 0.9 °C

**Step 3 — heat gained (right-hand side).**

mw·cw = 0.06863 × 4186 = 287.29 J/°C
mc·cc = 0.03636 × 387 = 14.07 J/°C
Sum = 301.36 J/°C
Heat gained = 301.36 × 0.9 = **271.2 J**

**Step 4 — left-hand side.**

Heat lost = 0.0089 × cs × 74.3 = 0.66127·cs

**Step 5 — equate and solve.**

0.66127·cs = 271.2
cs = 271.2/0.66127 = **410 J/kg·°C** (3 s.f.)

**Step 6 — percentage error** against copper's accepted 387 J/kg·°C:

% error = [(387 − 410)/387] × 100 = **−5.9 %**, i.e. about 6 % high

**Step 7 — comment.** The result is the right order of magnitude and correctly identifies a metal of low specific heat. A 6 % discrepancy exceeds the 5 % this course usually accepts, and the sign is informative: the value is *too high*.

The reason is visible in the data. Tf − Tr is only **0.9 °C**. If the thermometer reads to ±0.1 °C, that single difference carries roughly 11 % uncertainty, which swamps everything else. A small hot block dropped into a comparatively large mass of water barely warms it, and the result then hangs on a temperature difference barely bigger than the instrument's resolution.

**The improvement follows directly:** use a larger block, or less water, so Tf − Tr is several degrees rather than a fraction of one. That is a first-class exam answer, because it names the weak measurement instead of saying "be more careful."

### Where people go wrong

- **Omitting the calorimeter term.** With mw·cw alone the heat gained is 258.6 J, giving cs = 391 J/kg·°C — coincidentally closer here, but for the wrong reason and wrong in general.
- **Using grams while cw is in J/kg·°C.** A factor of 1000.
- **Reversing the temperature differences.** The solid *cools*: (Ts − Tf), larger first. The water *warms*: (Tf − Tr).
- **Adding cw and cc directly.** You add the products m·c, weighted by mass — not the specific heats.

### In the exam

Define specific heat capacity and its SI unit; write Q = mc ΔT; state the conservation-of-energy principle for a mixture; write the full mixture equation and identify every symbol; calculate cs from supplied data; and "state two sources of error and how you would reduce them." For that, heat loss to the surroundings (better insulation, a lid, starting the water slightly below room temperature) and the small Tf − Tr (bigger block, less water) are the strongest answers.

---

## Part 12 — Magnetism I: magnetic moment of a bar magnet
*(Week 10)*

**Aim:** to determine the magnetic dipole moment of a bar magnet and its pole strength.

**Apparatus:** metre stick; tangent galvanometer; bar magnet.

*Missing diagram — reconstruction.* A **tangent galvanometer** — a small freely pivoted compass needle at the centre of a circular coil, over an angular scale — sits at the centre of a horizontal metre rule, oriented so the needle rests along the Earth's magnetic north–south line when undisturbed. The **bar magnet** lies along the rule, on its own axis, pointing at the galvanometer (the "end-on" position). The distance d from the magnet's centre to the galvanometer is read off the rule. The magnet's field at the needle is perpendicular to the Earth's field, so the needle settles at an angle θ between them.

### Theory

**The tangent galvanometer** is an early device for measuring electric currents. It works on the **tangent law**, relating the deflection angle of a magnetic needle to the current in a nearby coil:

> **tan θ ∝ I**

The needle is free to rotate. Left alone it aligns with the Earth's field, pointing north–south under the horizontal component H₀. That alignment is the reference direction against which all deflections are measured.

**The tangent law itself.** A needle in two perpendicular horizontal fields — the Earth's H₀ pointing north, an applied field H pointing east — settles along the resultant, so:

> **H = H₀ tan θ**

Measure θ and you have measured H in units of H₀.

**The field of a bar magnet, end-on.** For a magnet of pole strength m and half-length L (total length 2L), the poles sit at distances (d − L) and (d + L) from the observation point on the axis. Combining their partly cancelling contributions:

> **H = (μ₀/4π)·2Md/(d² − L²)²**

where **M = pole strength × magnet's length = 2mL** is the magnetic dipole moment and μ₀ = 4π × 10⁻⁷ T·m/A. The course derives this by integrating dH along the magnet with the Biot–Savart law, noting that vertical components cancel by symmetry and that θ between dl and r is 90°, so sin θ = 1.

**Combining the two.** Set the magnet's field equal to H₀ tan θ:

> **tan θ = [μ₀M/(2π H₀)] · d/(d² − L²)²**

Compare with y = mx + c: plot **tan θ_AV against d/(d² − L²)²** for a straight line through the origin with slope μ₀M/(2πH₀). Hence:

> **M = 2π H₀ × slope / μ₀**, and pole strength **m = M/(2L)**

> ⚠ **Two errors in the material, and both matter.**
>
> **1. The x-axis variable.** The slide says to plot tan θ_AV against **d²/(d² − L²)²**. The correct variable, from the theory the same lecture derives, is **d/(d² − L²)²** — d to the first power. The course's own data settle it: with d/(d² − L²)² the ratio tan θ/x runs 0.0260, 0.0242, 0.0241, 0.0250, 0.0247 across the five distances — constant to about 4 %, as a line through the origin requires. With d²/(d² − L²)² it runs 0.052 to 0.082, a factor of 1.6 drift, which is no straight line at all.
>
> **2. The units of H₀.** The slide says "H₀ can be used as 40 × 10⁻⁶ **A/m**." The Earth's horizontal field is about 40 × 10⁻⁶ **tesla**; as H in A/m it would be B/μ₀ ≈ 32 A/m. The number is right, the unit wrong. Treat 40 × 10⁻⁶ as **B₀ in tesla** and the arithmetic works out.
>
> **3. The magnet's length is never stated.** Without 2L the analysis cannot be completed. The example below assumes a standard 10 cm bar magnet, L = 0.05 m — the value that makes the plot linear.

### Procedure

1. Place the magnet at the left end of the ruler, 50 cm from the centre of the tangent galvanometer.
2. Click **Record** to store the deflection angles θ₁ and θ₂ for this distance.
3. Click **REVERSE POLARITY**, click **Record** to store θ₃ and θ₄, then click **REVERSE POLARITY** again to restore the original orientation.
4. Reduce d in steps of 5 cm (45, 40, 35, 30 cm), repeating to record four angles at each distance.
5. After five distances on the left, the magnet moves automatically to the **right** side. Repeat to record θ₅ to θ₈ for the same distances. An Excel sheet downloads.

**Why eight angles at every distance?** The best piece of experimental design in the course.

- **Two angles at once (θ₁, θ₂):** the needle has two ends. Averaging both cancels error from the pivot not sitting exactly at the scale's centre.
- **Reversing the polarity (θ₃, θ₄):** flips the magnet's field direction. Any misalignment of the scale's zero relative to magnetic north shifts one pair up and the other down equally, so averaging removes it.
- **Repeating on the other side (θ₅–θ₈):** cancels systematic error from the magnet's centre or the galvanometer not sitting exactly where you think on the rule.

Plain repetition reduces **random** error. This design also cancels **systematic** error, which repetition cannot touch — exactly the distinction in Part 4.

### The data and analysis

| d (cm) | θ₁ | θ₂ | θ₃ | θ₄ | θ₅ | θ₆ | θ₇ | θ₈ |
|---|---|---|---|---|---|---|---|---|
| 50 | 12 | 12 | 13 | 13 | 12 | 12 | 11 | 11 |
| 45 | 16 | 16 | 15 | 15 | 15 | 15 | 15 | 15 |
| 40 | 21 | 21 | 22 | 22 | 21 | 21 | 21 | 21 |
| 35 | 32 | 32 | 30 | 30 | 32 | 32 | 31 | 31 |
| 30 | 44 | 44 | 43 | 43 | 45 | 45 | 44 | 44 |

Compute **θ_AV = (θ₁ + θ₂ + … + θ₈)/8**, then tan θ_AV and the geometric factor; plot and take the slope.

### Fully worked example

Take L = 0.05 m and B₀ = 40 × 10⁻⁶ T.

**Step 1 — average the angles at d = 50 cm.**

θ_AV = (12 + 12 + 13 + 13 + 12 + 12 + 11 + 11)/8 = 96/8 = **12.00°**

**Step 2 — compute x = d/(d² − L²)² at d = 0.50 m.**

d² − L² = 0.2500 − 0.0025 = 0.2475 m²; (d² − L²)² = 0.06126 m⁴
x = 0.50/0.06126 = **8.162 m⁻³**

**Step 3 — the full working table** (d in metres).

| d (m) | θ_AV (°) | tan θ_AV | (d² − L²)² (m⁴) | x = d/(d²−L²)² (m⁻³) |
|---|---|---|---|---|
| 0.50 | 12.00 | 0.2126 | 0.061256 | 8.162 |
| 0.45 | 15.25 | 0.2726 | 0.040000 | 11.250 |
| 0.40 | 21.25 | 0.3889 | 0.024806 | 16.125 |
| 0.35 | 31.25 | 0.6068 | 0.014400 | 24.306 |
| 0.30 | 44.00 | 0.9657 | 0.0076563 | 39.184 |

**Step 4 — plot tan θ_AV against x** and draw the best-fit line through the origin.

**Step 5 — slope from the two extreme points.**

slope = (0.9657 − 0.2126)/(39.184 − 8.162) = 0.7531/31.022 = **0.02428 m³**

**Step 6 — the magnetic dipole moment.** Since μ₀ = 4π × 10⁻⁷, the 2π/4π simplifies to ½:

M = B₀ × slope/(2 × 10⁻⁷) = (40 × 10⁻⁶ × 0.02428)/(2 × 10⁻⁷) = **4.86 A·m²** (3 s.f.)

**Step 7 — pole strength.** Since M = 2mL, m = M ÷ the magnet's full length:

m = 4.86/0.10 = **48.6 A·m**

**Step 8 — comment.** The plot is linear through the origin to within about 4 %, confirming the dipole model. A few A·m² is typical of a laboratory bar magnet. The main uncertainties are the angles, read to the nearest whole degree, and the magnet length, which the course did not supply.

### Where people go wrong

- **Averaging tan θ instead of averaging θ.** The course says average the *angles*, then take the tangent. Not the same thing, because tan is non-linear.
- **Leaving d in centimetres.** In x = d/(d² − L²)², a factor of 100 in d becomes 100/100⁴ = 10⁻⁶ in x.
- **Confusing pole strength with dipole moment.** M = 2mL; units A·m² for M, A·m for m.
- **Averaging only two angles, or skipping the polarity reversal.** You keep systematic error you could have removed.

### In the exam

Describe the construction and operation of a tangent galvanometer; state the tangent law and H = H₀ tan θ; explain why the magnet lies along the rule's axis and why the galvanometer must align with magnetic north; explain *why eight angles are averaged*; compute θ_AV and tan θ_AV from a supplied row. The full slope-to-M calculation is demanding; the averaging and the reasoning behind the reversal are far likelier.

Also expect the summary's definitions: magnetic moment quantifies a magnet's strength and orientation, its SI unit is the **ampere-metre squared (A·m²)**, and ferromagnetic materials (iron, nickel, cobalt) magnetise easily and retain their magnetisation, hence their use in electromagnets and data storage.

---

## Part 13 — Magnetism II: permeability of free space
*(Week 11)*

**Aim:** to determine the magnitude of the magnetic permeability of free space.

**Objectives:** measure and map the flux density along the axis of a circular loop; identify the key factors affecting it; investigate the relationship between loop current and field strength; use the data to calculate μ₀.

**Apparatus:** a circular loop of radius R; DC power supply; ammeter; movable magnetic probe; tesla meter.

*Missing diagram — reconstruction.* A single circular coil of radius R stands vertically, in series with the DC supply and ammeter so I can be set and read. A **movable magnetic probe** — a small sensor on a slider — runs along the **axis** of the loop, the line through its centre perpendicular to its plane, with its distance z read on a scale. The probe feeds a **tesla meter** displaying the flux density B at that position.

### Theory

**Oersted's discovery.** In 1820 Hans Christian Ørsted found that a compass placed near a current-carrying conductor has its needle deflected, the degree of deflection being directly proportional to the current. This observation founded electromagnetism by linking electricity to magnetism.

**The field on the axis of a circular loop.** For a single-turn loop of radius R carrying current I, at a point on the axis a distance z from the centre:

> **B(z) = μ₀IR² / [2(R² + z²)^(3/2)]**

with B in tesla, μ₀ = 4π × 10⁻⁷ T·m/A.

*This formula was on a slide image and did not extract; it is reconstructed here. The course's own data confirm it: at z = 0 with R = 0.1 m and I = 1 A it predicts B = μ₀I/(2R) = 6283 nT, and the measured value is 6285 nT.*

**Key features.** B is **maximum at the centre** (z = 0), where the formula reduces to **B = μ₀I/(2R)**, and **decreases** along the axis as (R² + z²)^(3/2) grows. **Permeability** is a measure of how easily a material can be magnetised.

**Linearisation.** Rearrange to isolate μ₀ as a slope:

B = μ₀ × [IR²/(2(R² + z²)^(3/2))]

The slide's own annotation reads "y   m   x" beneath the equation, meaning:

> **y = B**, **x = IR²/[2(R² + z²)^(3/2)]**, **slope = μ₀**, **intercept = 0**

So compute the factor for every z, plot B against it, and **the slope is μ₀ directly.** This is the most elegant analysis in the course — the answer is the gradient, with no further arithmetic.

### Procedure

1. Select the default coil 1: R = 0.10 m.
2. Adjust the current to 1 A on the digital power supply.
3. Move the magnetic probe to the centre of the coil (z = 0) and click **Record** to store the tesla meter reading.
4. Increase z in steps of 2 cm (2, 4, 6, …), recording B each time, **up to 20 readings**.
5. Repeat for different coils (Coil 2, Coil 3, …). An Excel sheet of results downloads.

**Data analysis:** compute the factor IR²/[2(R² + z²)^(3/2)] for each z; plot B against it; calculate the slope; the slope is μ₀.

### The data

R = 0.1 m, I = 1 A

| z (cm) | 0 | 2 | 4 | 6 | 8 | 10 | 26 | 28 | 30 | 32 | 34 | 36 | 38 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **B (nT)** | 6285 | 5929.0 | 5040.0 | 3950.4 | 3000.9 | 2220.2 | 289.7 | 238.5 | 199.4 | 166.4 | 140.8 | 120.6 | 103.4 |

*Note: the rows for z = 12 cm through 24 cm are absent from the extracted table — lost at a page break, not omitted by the experiment. The procedure calls for up to 20 readings; 13 appear here.*

### Fully worked example

**Step 1 — convert z to metres.** The table lists centimetres; R is in metres. z = 10 cm → 0.10 m. Essential.

**Step 2 — convert B to tesla.** 1 nT = 10⁻⁹ T, so 6285 nT = 6.285 × 10⁻⁶ T.

**Step 3 — compute F = IR²/[2(R² + z²)^(3/2)] at z = 0.**

R² = (0.10)² = 0.0100 m²
R² + z² = 0.0100 m²
(0.0100)^(3/2) = 0.0100 × √0.0100 = 0.0100 × 0.100 = 1.000 × 10⁻³
F = (1 × 0.0100)/(2 × 1.000 × 10⁻³) = **5.000 A/m**

**Step 4 — compute F at z = 0.10 m.**

R² + z² = 0.0100 + 0.0100 = 0.0200 m²
(0.0200)^(3/2) = 0.0200 × 0.14142 = 2.8284 × 10⁻³
F = 0.0100/(2 × 2.8284 × 10⁻³) = **1.7678 A/m**

**Step 5 — the working table** (first six rows).

| z (m) | B (T) | F (A/m) |
|---|---|---|
| 0.00 | 6.285 × 10⁻⁶ | 5.0000 |
| 0.02 | 5.929 × 10⁻⁶ | 4.7169 |
| 0.04 | 5.040 × 10⁻⁶ | 4.0092 |
| 0.06 | 3.950 × 10⁻⁶ | 3.1427 |
| 0.08 | 3.001 × 10⁻⁶ | 2.3874 |
| 0.10 | 2.220 × 10⁻⁶ | 1.7678 |

**Step 6 — plot B (T) against F (A/m)** and draw the best-fit line, which should pass through the origin.

**Step 7 — slope from the two extreme points.**

slope = (6.285 × 10⁻⁶ − 2.220 × 10⁻⁶)/(5.0000 − 1.7678)
slope = (4.065 × 10⁻⁶)/(3.2322) = **1.2576 × 10⁻⁶ T·m/A**

**Step 8 — that slope is μ₀.** Accepted value: 4π × 10⁻⁷ = 1.2566 × 10⁻⁶ T·m/A.

**Step 9 — percentage error.**

% error = [(1.2566 − 1.2576)/1.2566] × 100 = **−0.08 %**

**Step 10 — comment.** Agreement better than 0.1 %, with a line linear through the origin. To three significant figures, μ₀ = **1.26 × 10⁻⁶ T·m/A**.

**Step 11 — a single-point check.** At z = 0 the formula reduces to B = μ₀I/(2R), so μ₀ = 2RB/I = 2 × 0.10 × 6.285 × 10⁻⁶/1 = 1.257 × 10⁻⁶ T·m/A ✓

### Where people go wrong

- **Leaving z in centimetres.** The biggest error here. z and R must both be in metres before their squares are added.
- **Leaving B in nanotesla.** The slope then reads 1.26 × 10³ instead of 1.26 × 10⁻⁶ — nine orders of magnitude adrift.
- **Computing (R² + z²)^(3/2) as (R² + z²) × 3/2.** It is the quantity raised to the power 1.5 — multiply the quantity by its own square root.
- **Squaring R twice.** R² appears in the numerator and R² inside the bracket. Both are R², not R⁴.

### In the exam

State what Oersted discovered; write the axial-field formula and identify each symbol; give the value and units of μ₀; explain why B is maximum at the centre and falls with z; say what to plot to obtain μ₀ as a slope; evaluate B at a given z, or the factor F. A short-answer favourite: "define permeability" — a measure of how easily a material can be magnetised. The Week 11 summary quotes μ₀ as 4π × 10⁻⁷ H/m; T·m/A and H/m are equivalent.

---

## Part 14 — Elasticity: Young's modulus of a metallic beam
*(Week 12)*

**Aim:** to determine Young's modulus of a metallic beam.

**Apparatus:** dial gauge; beams made from different materials; set of masses; 2 mounts.

*Missing diagram — reconstruction.* Two rigid mounts (knife-edge supports) stand a distance ℓ apart on the bench. The metal beam rests horizontally across them, so ℓ is the span. A hanger for the masses attaches at the **exact centre**. A **dial gauge** is mounted vertically with its plunger touching the beam's midpoint, reading the downward depression Y as masses are added. A micrometer measures the breadth b and thickness d beforehand.

### Theory

**Young's modulus**, also called the **modulus of elasticity**, describes a material's stiffness and its ability to deform under load. Denoted E or Y, measured in pascals (Pa) or N/m².

> **E = Stress / Strain**

It is a direct outcome of Hooke's law of elasticity, named after Thomas Young in the 19th century, though developed in the 18th century by Leonhard Euler, who called it "the absolute elasticity."

**Stress.** When a perpendicular force F acts on a body it elongates or shortens depending on the direction of the force. The stress is **tensile stress** σ, the normal force per unit area:

> **σ = F/A**

**Strain.** The relative change in dimensions is the **strain** ε. For tensile stress:

> **ε = ΔL/L**

Strain is a ratio, so it is **dimensionless**. E therefore has the units of stress: N/m² or Pa.

**Hooke's law.** Unless the proportional limit is exceeded, stress is directly proportional to strain:

> **σ ∝ ε**, so **σ = Eε**

*The slides state "The unit for E is N/m or Pascals (Pa)". N/m is a typo for **N/m²** — newtons per metre is a spring constant, not a modulus.*

**Why it matters.** Young's modulus quantifies **stiffness** — how resistant a material is to deformation. Engineers use it for **material selection**, and it predicts **elastic behaviour**: whether a component springs back to its original shape.

**The bending-beam method.** A beam of length ℓ supported at both ends carries a mass m at its centre and suffers a depression Y at the midpoint, which can be visualised as **two opposite cantilevers** — each half a cantilever of length ℓ/2 carrying half the load. The maximum central depression is:

> **Y = mgℓ³/(48EI)**

where I is the moment of inertia (second moment of area) of the cross-section and g = 9.8 m/s². For a rectangular section:

> **I = bd³/12**

with b the breadth and d the thickness. Substituting:

Y = mgℓ³/(48E × bd³/12) = 12mgℓ³/(48Ebd³)

> **Y = mgℓ³/(4Ebd³)**

**This is a linear equation.** Treating the load mass as the independent variable:

> Y = [gℓ³/(4Ebd³)] × m + 0

Plot the depression Y against the mass m for a **straight line through the origin** with

> **slope = gℓ³/(4Ebd³)**, so **E = gℓ³/(4 b d³ × slope)**

*Reconstruction note.* The depression equation, the substituted form and the slope were all on slide images that extracted as nothing. They are reconstructed from standard beam theory and confirmed by the course's own data, which yield E = 69.0 GPa for aluminium against an accepted 69 GPa.

> ⚠ **A wording problem.** The slide says the beam is "**fixed** at both ends." A beam genuinely clamped at both ends has central depression mgℓ³/(192EI), four times smaller. The formula that reproduces the course's own data is the **simply supported** one, mgℓ³/(48EI) — the beam merely *rests* on two mounts. That is what the apparatus list implies ("2 mounts") and what the slides' own "two opposite cantilevers" picture describes: each half is a cantilever of length ℓ/2 carrying mg/2, giving δ = (mg/2)(ℓ/2)³/(3EI) = mgℓ³/(48EI). Read "fixed" as "supported". *Also:* the slides write "g = 9.8 m/s"; the unit is **m/s²**.

### Procedure

1. Select the beam material (e.g. Aluminium) from the drop list.
2. Set the length ℓ (e.g. 60–100 cm), thickness d (e.g. 0.6–1.0 cm) and breadth b (20–30 mm).
3. Start loading by selecting a mass, say 50 g. Click **Record** to capture m and the corresponding depression Y.
4. Increase the mass to 100 g and Record. Repeat several times.
5. An Excel sheet downloads. Repeat the whole process with another material, say Copper.

**Data analysis:** convert all values to MKS; plot Y (m) against m (kg); calculate the slope; use it with ℓ, b and d to find E.

### The data

**Aluminium.** Length 100.00 cm, thickness 1.00 cm, breadth 30.00 mm.

| m (g) | 50 | 100 | 200 | 300 | 400 | 500 |
|---|---|---|---|---|---|---|
| **Y (mm)** | 0.06 | 0.12 | 0.24 | 0.36 | 0.47 | 0.59 |

### Fully worked example

**Step 1 — convert everything to MKS.**

ℓ = **1.000 m**, d = **0.0100 m**, b = **0.0300 m**, g = **9.8 m/s²**

| m (kg) | 0.050 | 0.100 | 0.200 | 0.300 | 0.400 | 0.500 |
|---|---|---|---|---|---|---|
| **Y (m)** | 6.0 × 10⁻⁵ | 1.20 × 10⁻⁴ | 2.40 × 10⁻⁴ | 3.60 × 10⁻⁴ | 4.70 × 10⁻⁴ | 5.90 × 10⁻⁴ |

**Step 2 — plot Y (m) against m (kg).** The points lie on a straight line through the origin, as theory demands. That alone confirms the beam is within its elastic limit; beyond the proportional limit the line would bend over.

**Step 3 — slope from two well-separated points on the best-fit line.**

slope = (5.90 × 10⁻⁴ − 6.0 × 10⁻⁵)/(0.500 − 0.050) = (5.30 × 10⁻⁴)/(0.450) = **1.18 × 10⁻³ m/kg**

*(A least-squares fit through the origin over all six points gives 1.184 × 10⁻³ m/kg — agreement to 0.5 %, a good sign the line was drawn well.)*

**Step 4 — the denominator.**

d³ = (0.0100)³ = 1.00 × 10⁻⁶ m³
4 × b × d³ = 4 × 0.0300 × 1.00 × 10⁻⁶ = 1.200 × 10⁻⁷
× slope: 1.200 × 10⁻⁷ × 1.18 × 10⁻³ = **1.416 × 10⁻¹⁰**

**Step 5 — the numerator.** g × ℓ³ = 9.8 × (1.000)³ = **9.8**

**Step 6 — compute E.** E = 9.8/(1.416 × 10⁻¹⁰) = **6.92 × 10¹⁰ Pa = 69.2 GPa**

**Step 7 — compare** with aluminium's accepted 69 GPa: % error = [(69 − 69.2)/69] × 100 = **−0.3 %**

**Step 8 — comment.** Excellent agreement. The linear Y–m plot confirms Hooke's law over this loading range, and the modulus identifies the material as aluminium.

**Step 9 — check the units.** gℓ³/(4bd³·slope) has units (m/s²)(m³)/[(m)(m³)(m/kg)] = kg/(m·s²) = N/m² = Pa ✓

### Where people go wrong

- **Not cubing d.** With these numbers, forgetting the cube puts you out by 10 000.
- **Leaving b in millimetres** (30 mm is 0.030 m), **or Y in mm and m in grams** — the slope then comes out in mm/g, a factor of 10⁶ from m/kg.
- **Confusing the two Y's.** The course uses **Y for the depression** and **E for the modulus**.
- **Forgetting the formula already contains g.** Plot Y against **m in kilograms**, not weight in newtons. If you do plot against weight, drop the g from the E formula.
- **Measuring d carelessly.** Because d is cubed, a 1 % error in thickness becomes 3 % in E. Use a micrometer at several points and average.

### In the exam

Define stress, strain and Young's modulus; give the units of each and note that strain is dimensionless; state Hooke's law as σ = Eε; explain why E is useful to an engineer; describe measuring the depression of a loaded beam and what the dial gauge is for; state what to plot and what the slope equals; calculate E from a supplied slope and beam dimensions. A likely short question: "why is the thickness the most critical measurement?" — because it enters as d³.

---

## Errors and contradictions in the course material — consolidated

| Week | What the material says | The correction |
|---|---|---|
| 1 | % difference = (observed − reference)/reference | The **× 100** is missing |
| 1 | Reflection: "Integration is applicable to real-life scenarios…" | Pasted from a mathematics course; nothing to do with PHY_108 |
| 1 | Summary says week 1 covered Ohm's law | Ohm's law is Week 2 |
| 2 | Apparatus lists two resistors R₁ and R₂ | Only R₁ is used |
| 3 | "Plot P against I²; the graph should be linear" | Only where R is constant. For tungsten across 0.1–50 V it curves — which is the point of the week |
| 4 | "Using the **KVL** equation I₁ + I₂ = I₃" | That is **KCL** |
| 4 | "the Russian scientist Justa Kirchhoff" | **Gustav** Kirchhoff, **German** |
| 4, 5 | "Increase the EMF **E₂** at 3 V intervals" | The table steps **E₁** (9, 12, 15 V), E₂ fixed at 9 V. Solving the equations confirms the table |
| 5 | "Apply **KCL** to node b" introducing eq. (3) | Equation (3) is **KVL round loop 2** |
| 7 | "10 measurements at least" then "at least 7" | Take ten |
| 8 | "V_f = ℓ" | A numerical shortcut valid only because A = 1 cm². Volume ≠ length |
| 8 | "Raise the right tube to h = 100 **m**" | 100 **mm** |
| 10 | Plot tan θ_AV against d²/(d² − L²)² | Should be **d/(d² − L²)²**; the course's own data confirm this |
| 10 | "H₀ can be used as 40 × 10⁻⁶ **A/m**" | 40 × 10⁻⁶ **T**. As H it would be about 32 A/m |
| 10 | Length of the bar magnet | **Never stated.** Required for the analysis |
| 12 | Beam "fixed at both ends" | **Supported** at both ends; the data fit mgℓ³/(48EI), not mgℓ³/(192EI) |
| 12 | "The unit for E is N/m or Pascals" | **N/m²** |
| 12 | "g = 9.8 m/s" | **m/s²** |

---

## One-page recap

### Constants

| Constant | Value |
|---|---|
| Free-fall acceleration, g | 9.8 m/s² |
| Permeability of free space, μ₀ | 4π × 10⁻⁷ T·m/A = 1.257 × 10⁻⁶ T·m/A = 4π × 10⁻⁷ H/m |
| Specific heat of water, c_w | 4186 J/kg·°C |
| Specific heat of copper (calorimeter), c_c | 387 J/kg·°C |
| Density of mercury, ρ | 13 600 kg/m³ |
| Atmospheric pressure | 1 atm = 76 cmHg = 760 mmHg = 1.013 × 10⁵ Pa |
| Earth's horizontal field (Week 10), B₀ | 40 × 10⁻⁶ T |
| e⁻¹ / 1 − e⁻¹ | 0.368 (36.8 %) / 0.632 (63.2 %) |
| 1 ml | 1 × 10⁻⁶ m³ |

### Definitions to write verbatim

- **Error:** the difference between a measured value and the true value.
- **Systematic error:** caused by a consistent failure of an instrument; not reduced by averaging.
- **Random error:** caused by unpredictable, inconsistent factors; reduced by averaging.
- **Ohm's law:** the current through a conductor is directly proportional to the potential difference across it, at constant temperature. A device is ohmic if its resistance is independent of the magnitude and polarity of the applied p.d.
- **KCL:** the sum of currents entering a junction equals the sum leaving it (conservation of charge).
- **KVL:** around any closed loop the sum of voltage drops equals the sum of emfs; equivalently the algebraic sum of all voltages is zero (conservation of energy).
- **Capacitance:** the constant of proportionality between the charge stored and the voltage across a capacitor.
- **Time constant:** the time for the capacitor voltage to rise to 63.2 % of maximum (charging) or fall to 36.8 % of its initial value (discharging).
- **Boyle's law:** at constant temperature, the pressure of a definite quantity of an ideal gas is inversely proportional to its volume.
- **Pressure:** force per unit area.
- **Specific heat capacity:** the heat energy needed to raise the temperature of 1 kg of a material by 1 °C.
- **Tangent law:** the tangent of the deflection angle is proportional to the applied field, tan θ ∝ I.
- **Magnetic dipole moment:** pole strength × the magnet's length. SI unit A·m².
- **Permeability:** a measure of how easily a material can be magnetised.
- **Stress:** normal force per unit area. **Strain:** relative change in dimensions (dimensionless).
- **Young's modulus:** stress divided by strain; a measure of a material's stiffness.

### Formulae

| Topic | Formula |
|---|---|
| Straight line | y = mx + c; m = (y₂−y₁)/(x₂−x₁); x-intercept = −c/m |
| Exponential linearisation | ln N = −λt + ln N₀ |
| Power-law linearisation | log y = n log x + log k |
| Actual error | \|true − measured\| |
| Relative error | actual error / true value |
| Percentage error | (actual error / true value) × 100 |
| Percentage difference | [(observed − reference)/reference] × 100 |
| Ohm's law | V = IR |
| Series resistance | R = R₁ + R₂ + … + R_N |
| Parallel resistance | 1/R = 1/R₁ + 1/R₂ + … + 1/R_N |
| Joule's law | P = I²R (and P = VI) |
| KCL | I₁ + I₂ = I₃ at a node |
| KVL, loop 1 | I₃R₃ + I₃R₄ + I₁R₅ = E₁ |
| KVL, loop 2 | I₂R₂ − I₁R₅ + I₂R₁ = −E₂ |
| Capacitor charge | Q = CV |
| Parallel-plate capacitance | C = εA/d |
| Charging | V(t) = V₀(1 − e^(−t/τ)) |
| Discharging | V(t) = V₀e^(−t/τ); linearised ln V = −t/τ + ln V₀ |
| Time constant | τ = RC; C = τ/R |
| Boyle's law | PV = constant; P₁V₁ = P₂V₂ |
| Pressure | P = F/A; P_f = Pₐ + ρgh |
| Heat | Q = mc(Tf − Ti) |
| Method of mixtures | ms·cs(Ts − Tf) = (mw·cw + mc·cc)(Tf − Tr) |
| Tangent law | H = H₀ tan θ |
| Bar magnet, end-on | H = (μ₀/4π)·2Md/(d² − L²)²; M = 2mL |
| Axial field of a loop | B(z) = μ₀IR²/[2(R² + z²)^(3/2)]; at centre B = μ₀I/(2R) |
| Young's modulus | E = σ/ε; σ = F/A; ε = ΔL/L; σ = Eε |
| Beam depression | Y = mgℓ³/(48EI); I = bd³/12; hence Y = mgℓ³/(4Ebd³) |

### The standard graph procedure

1. Convert everything to MKS.
2. Choose scales that fill at least half the grid; 1, 2, 5 or 10 units per square.
3. Label both axes with quantity **and unit**.
4. Plot points as fine crosses.
5. Draw one straight best-fit line, balanced above and below; do not join the dots.
6. Take the slope from **two widely separated points on the line**.
7. Attach units to the slope.
8. Convert the slope into the required physical quantity.
9. Compute the percentage error against the accepted value.
10. Comment: is the agreement good, what dominates the error, how would you improve the experiment?

### The nine slope-to-physics conversions

| Experiment | Plot | Slope equals |
|---|---|---|
| Week 2, Ohm | V vs I | R |
| Week 3, Joule | P vs I² | R at that operating point |
| Week 7, RC discharge | ln V vs t | −1/τ |
| Week 8, Boyle | 1/V vs P | 1/(P₀V₀) |
| Week 10, bar magnet | tan θ_AV vs d/(d²−L²)² | μ₀M/(2πH₀) |
| Week 11, permeability | B vs IR²/[2(R²+z²)^(3/2)] | μ₀ |
| Week 12, Young's modulus | Y vs m | gℓ³/(4Ebd³) |
| Week 1, pendulum | T² vs L | 4π²/g |
| Week 1, Coulomb | F vs 1/r² | kq₁q₂ |

### Apparatus at a glance

| Week | Experiment | Key apparatus |
|---|---|---|
| 2 | Ohm's law | Breadboard, voltmeter, ammeter, DC supply, jumpers, resistors |
| 3 | Non-ohmic resistor | Voltmeter, ammeter, DC supply, tungsten resistor, iron resistor |
| 4 | KCL | Breadboard, two DC supplies, five variable resistors, three ammeters, cables |
| 5 | KVL | Same as Week 4 |
| 6 | Charging a capacitor | Voltmeter, power supply, capacitor, resistor, switch key, stopwatch, wires |
| 7 | Discharging a capacitor | Same as Week 6 |
| 8 | Boyle's law | J-tube, thermometer, pressure sensor, gas sample |
| 9 | Specific heat | Digital balance, hot plate, crucible tongs, glass beaker, thermometer, water reservoir, metal blocks, insulating jacket with cover, calorimeter |
| 10 | Magnetic moment | Metre stick, tangent galvanometer, bar magnet |
| 11 | Permeability | Circular loop, DC supply, ammeter, movable magnetic probe, tesla meter |
| 12 | Young's modulus | Dial gauge, beams of different materials, set of masses, 2 mounts |

### Final advice

If you remember one sentence, make it this: **every experiment in PHY_108 turns a physical law into a straight line, reads a slope, and converts that slope into a number you compare with the accepted value.** Everything else — the apparatus, the recording, the unit conversions, the error analysis — exists to make that chain of reasoning trustworthy.
