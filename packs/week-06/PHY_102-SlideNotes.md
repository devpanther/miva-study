# PHY_102 Week 6 — what the slide images contained that the extracted text had lost

Deck: `Peak-and-RMS-Values-of-Current-Voltage-PDF`, **21 pages**, lecturer
**Dr. Sharafadeen Adeniji, PhD Theoretical and Applied Physics**. Course: General Physics II.
Deck title as printed on the title slide: *"Peak and rms values of current and voltage"*. The
week's topic line on the summary sheet is *"Nomenclature in A.C Circuits / Peak and RMS values of
current and voltage"*.

**Pages that extracted as text** (1–6, 11, 13, 16, 19, 20): title, learning objectives,
introduction, the two "Peak value and RMS value" definition slides, the first PEAK VALUES OF
VOLTAGE AND CURRENT slide, the three PRACTICE question slides, further reading, references.

**Pages that were images** (7, 8, 9, 10, 12, 14, 15, 17, 18, and the closing page 21): `pdftotext`
recovered only their headings — PEAK VALUES OF VOLTAGE AND CURRENT ×2, RMS CURRENT AND VOLTAGE ×2,
Solution question 1, Solution to question 2, AVERAGE POWER, SOLUTION TO QUESTION 3, SUMMARY, and
Thank You. **That is every formula in the deck and all three worked solutions.** Everything below
is what was inside those pictures.

## 1. Rules and formulae that were invisible

**Slide 7 — angular frequency.**
> "The angular frequency is **ω = 2πf = 2π/T**
> *f* is the frequency of the source
> *T* is the period of the source
> The voltage is positive during one half of the cycle and negative during the other half"

Slide 7 also carries the waveform diagram (repeated on slide 8), labelled:
> "Peak Value (I_m) · Average Value (I_av) = 0.6371 I_m · RMS Value (I_rms) = 0.707 I_m ·
> Sinusodial AC Current wave", with the horizontal axis marked 0, π/2, π, 2π and the vertical axis
> "Current".

**Slide 8 — the current, from Ohm's law.**
> "According to Ohm's law:
> **I = V/R = (V_max/R) sin wt = I_max sin wt**
> I is the instantaneous current
> I_max is the peak value or maximum output current of the source (otherwise known as the
> **current amplitude**)"

**Slide 9 — why rms, and the squaring step.**
> "• Both alternating voltage and current have a zero value. So direct average gives no
> information (or useless).
> • In or der to evaluate an alternating parameter in quantity, we use root mean square (rms):
> • We square the alternating current I
> **I² = I²_max sin²wt**"

Slide 9's diagram plots I² against t: five positive humps between 0 and I²_max, with a dashed line
drawn at **I²_max / 2**.

**Slide 10 — the mean square and the two rms results.**
> "Now, we can average I²,
> **(I²)_av = ½ I²_max**
> RMS is the square root of the above equation
> **I_rms = (1/√2) I_max = 0.7071 I_max**
> So, the rms value of the voltage in a AC circuit is
> **V_rms = (1/√2) V_max = 0.7071 V_max**
> rms values are used when discussing alternating currents and voltages because AC ammeters and
> voltmeters are designed to read rms values"

Slide 10's diagram sets a sinusoidal "AC Voltage" trace — marked V_PEAK, V_ms (a misprint for
V_rms), 0, 180°, 360°, "Half cycle", "One full cycle" — beside a flat "DC Voltage" block at
**240 v**. That picture is the slide-5 definition of rms drawn: the DC level that does the same
job.

**Slide 15 — average power.**
> "Recall that the power, **P = I²R**
> By replacing I with I_rms, we have the average value of power, P as:
> **P_av = I²_rms R**
> Apply Ohm's law, **P_av = V²_rms / R**"

**Slide 18 — the SUMMARY slide.**
> "We have discussed the meaning and formulas for calculating the peak and rms values of current
> and voltage.
> RMS is the square root of the current is given as:
> **I_rms = (1/√2) I_max = 0.7071 I_max**
> While the rms value of the voltage in a AC circuit is
> **V_rms = (1/√2) V_max = 0.7071 V_max**
> rms values are used when discussing alternating currents and voltages because AC ammeters and
> voltmeters are designed to read rms values"

**That is the complete formula inventory of the deck**: ω = 2πf = 2π/T; V = V_max sin ωt;
I = (V_max/R) sin ωt = I_max sin ωt; I² = I²_max sin²ωt; (I²)_av = ½I²_max;
I_rms = 0.7071 I_max; V_rms = 0.7071 V_max; P_av = I²_rms R = V²_rms/R; and, used only inside the
Question 3 solution, P_max = V²_max/R. There is no other formula anywhere in the 21 pages.

## 2. The definitions that *did* survive extraction (kept here for completeness)

**Slide 4.**
> "Peak Value refers to the maximum instantaneous value that a waveform reaches during one
> complete cycle. It represents the highest point of the waveform and is typically measured from
> the zero reference point."

**Slide 5.**
> "Root Mean Square (RMS) value is a measure of the magnitude of an alternating current (AC) or
> voltage. It represents the equivalent direct current (DC) value that would produce the same
> amount of power dissipation in a resistive load."

**Slide 3 (Introduction).**
> "An alternating current (AC) is a type of current that changes direction over time. A complete
> cycle of AC consists of two parts: a positive half-cycle and a negative half-cycle. When AC is
> graphed, the positive half-cycle starts at zero, rises to a maximum positive value, and then
> returns to zero. The negative half-cycle starts at zero, falls to a maximum negative value, and
> then returns to zero. This graph is called a sinusoidal waveform."

**Slide 6.**
> "The output of an AC power source is sinusoidal and varies with time according to the following
> equation: **V = V_max sin ωt**. V is the instantaneous voltage. V_max is the peak value or
> maximum output voltage of the source (otherwise known as the voltage amplitude). ω is the
> angular frequency of the AC voltage."

**Slide 2 (Learning objectives).** "Explain peak value and RMS value of current and voltage; State
the formula to calculate peak and RMS value of current; Solve simple and complex problems on peak
value and RMS value of alternating current and voltage."

## 3. The three worked solutions that were invisible

### Solution question 1 (slide 12) — for PRACTICE question 1 (slide 11, text)

Question (extracted as text): *"Typical household circuit operates with an rms voltage of 120 V.
What is the maximum, or peak value of the voltage in the circuit?"*

Solution, verbatim from the image:
> "Using **V_rms = (1/√2) V_max**
> **V_max = V_rms √2**
> **∴ V_max = 120√2 = 170 V**"

(120 × 1.4142 = 169.7, rounded to 170 V.)

### Solution to question 2 (slide 14) — for PRACTICE question 2 (slide 13, text)

Question **as set on slide 13** (extracted as text): *"For a particular device, the house ac
voltage is **120 V** and the ac current is 10 A. What are their maximum values?"*

Question **as restated inside the solution image on slide 14**: *"For a particular device, the
house ac voltage is **250 V** and the ac current is 10 A. What are their maximum values?"*

Solution, verbatim from the image:
> "**I_rms = 0.7071 I_max**
> **I_max = I_rms / o.7071 = 10 / 0.7071 = 14.14 A**
> Also,
> **V_rms = 0.7071 V_max**
> **V_max = V_rms / o.7071 = 250 / 0.7071 = 353.56 V**"

Arithmetic verified: 10 ÷ 0.7071 = 14.142 ✔; 250 ÷ 0.7071 = 353.556 ✔. (The denominator is
printed as "o.7071" — a letter o for the zero — in both fractions.)

### SOLUTION TO QUESTION 3 (slide 17) — for PRACTICE QUESTION 3 (slide 16, text)

Question (extracted as text, and restated in full on the solution image): *"An AC generator with a
maximum voltage of 24.0 V and a frequency of 60.0 Hz is connected to a resistor with a resistance
R = 265 Ω. Find (a) the rms voltage (b) the rms current in the circuit. Determine (c) the average
and (d) maximum power dissipated in the resistor."*

Solution, verbatim from the image:
> "a. The rms voltage is given as: **V_rms = 0.7071 V_max = 0.7071 × 24 = 17.0 V**
> b. The rms current is given as: **I_rms = V_rms / R = 17 / 265 = 0.0642 A**
> c. The average power, **P_av = V²_rms / R = 17² / 265 = 1.09 W**
> d. The maximum power, **P_max = V²_max / R = (24)² / 265 = 2.174 W**"

Arithmetic verified: 0.7071 × 24 = 16.970 → 17.0 ✔; 17 ÷ 265 = 0.06415 → 0.0642 ✔;
289 ÷ 265 = 1.0906 → 1.09 ✔; 576 ÷ 265 = 2.1736 → 2.174 ✔. The ratio P_max/P_av = 1.995, i.e. 2 up
to the rounding of 16.97 to 17.0, as required by (V_max/V_rms)² = 2.

**The frequency 60.0 Hz is given and never used**, because the load is purely resistive.

## 4. Notation the extraction lost

- **Subscripted max, rms and av throughout**: V_max, I_max, V_rms, I_rms, (I²)_av, P_av, P_max.
  She never writes V_p, V_pk, V_eff or V̄.
- **The argument of the sine is typed as "wt"** (a Latin w) on slides 8 and 9, although the same
  quantity is defined as ω on slide 7. It is the same ω.
- **0.7071 as the working constant, not 1/√2 or 0.707.** Every numerical solution divides or
  multiplies by 0.7071 explicitly. The diagram label alone uses the shorter 0.707.
- **Division by 0.7071 rather than multiplication by √2** in Solution 2 (`I_rms / 0.7071`), while
  Solution 1 multiplies by √2 (`V_rms √2`). The deck uses both directions of the same operation
  and it is worth being fluent in each.
- **P_max = V²_max/R** appears only inside the Question 3 solution image; it is never stated on the
  AVERAGE POWER slide, so a text-only reading of the deck would not know she uses it.
- **The mean-square line drawn at I²_max/2** on slide 9's diagram — the visual justification of the
  ½ that the deck otherwise asserts without derivation.
- The graph label **"Average Value (I_av) = 0.6371 I_m"**, which is the only appearance of an
  average value anywhere in the deck.

## 5. Errors and misprints on the slides

1. **Slides 13 and 14 — substantive, and the important one.** The PRACTICE question 2 slide sets
   the house ac voltage at **120 V**; the Solution to question 2 image restates the same question
   with **250 V** and solves it at 250 V, giving V_max = 353.56 V. The deck never reconciles the
   two. With 120 V the answer would be 120/0.7071 = 169.7 ≈ **170 V** — identical to the answer to
   Question 1, which is the likely reason the number was changed on the solution slide. **Both
   answers are taught in the new material and the discrepancy is named**, because whichever figure
   appears in an exam paper, the method is the same and the student should not be thrown by
   recognising the mismatch. The current part is unaffected: 10 A rms → 14.14 A peak either way.
2. **Slide 7 diagram — numerical misprint.** The waveform is labelled "Average Value (I_av) =
   **0.6371** I_m". The rectified half-cycle mean of a sinusoid is 2/π = **0.6366** I_m. The label
   is also the only place this quantity occurs — it is never defined, derived or used — so the
   misprint has no consequence for any calculation, but the correct value is stated in the new
   material so that a student who is asked about it does not reproduce 0.6371.
3. **Slide 14 — typographic.** The denominator is printed **"o.7071"** with a lower-case letter o
   in place of the leading zero, in both fractions. The computed values are correct.
4. **Slide 9 — loose wording.** "Both alternating voltage and current have a zero value" is
   literally false as written (the instantaneous values are mostly non-zero); she means the
   **average over a complete cycle** is zero. The new material states the intended claim and flags
   the wording, because quoting the slide verbatim in an exam script would read as an error.
5. **Slide 9 — typographic.** "In **or der** to evaluate…" (a broken word), and the slide-7/8
   diagram spells "**Sinusodial**" for sinusoidal.
6. **Slide 10 diagram — typographic.** The waveform's rms level is labelled "**V_ms**", missing the
   r; and the DC block is labelled "240 **v**" with a lower-case v.
7. **Slide 18 — garbled sentence.** "RMS is the square root of the current is given as" is not a
   sentence. The intended meaning is that the rms current is the square root of the mean square,
   as slide 10 correctly says. The formulae beneath it are correct.

## 6. Was the old summary wrong, incomplete, or basically fine?

**It was not internally wrong — the physics it states is standard and mostly correct — but it was
teaching a different week, and it is being replaced rather than patched.** Four problems:

**a) Most of it is out of scope.** The old summary taught, at length, inductive and capacitive
reactance (X_L = 2πfL, X_C = 1/2πfC), impedance Z = √(R² + (X_L − X_C)²), the full series RLC
solve, phasor/vector addition of component voltages, tan φ = (X_L − X_C)/R, leading versus lagging
phase, power factor cos φ = R/Z, apparent power and reactive volt-amperes, series resonance and
f₀ = 1/(2π√(LC)), the ELI-the-ICE-man mnemonic, and a six-row table of R/L/C behaviour at f → 0 and
f → ∞. **None of that is anywhere in the deck.** Dr. Adeniji covers peak values, rms values and
average power in a resistor, full stop. Those topics belong to the **Week 7** deck, "Phasor
Diagrams and Power in an AC Circuit". The old page took its brief from the week's *summary sheet*,
which does mention series RLC, and then supplied a standard textbook treatment of it — exactly the
failure mode the rebuild exists to fix.

**b) It contained none of her three worked solutions, and it got one of the three questions
wrong.** Its own footnote admitted the solutions were blank in the text layer, and it then
reconstructed only the third (the 24.0 V / 60.0 Hz / 265 Ω generator) — as an invented "Worked
example 1" with different numbers from hers: it computed V_rms = 16.97 V where she writes 17.0 V,
then took a different route to I_rms, and used P_max = V_max I_max where she uses V²_max/R.
Questions 1 and 2 were named but never worked. Worse, it recorded Question 2 as "**120 V** and
10 A → maximum values", because 120 V is the figure on the text slide — it could not see that the
solution slide uses **250 V and gets 353.56 V**, so it missed the deck's one substantive misprint
entirely.

**c) Its two other worked examples were invented.** "Worked example 2 — full series RLC solve"
(R = 30 Ω, L = 0.1 H, C = 50 μF, 100 V at 50 Hz) and "Worked example 3 — reading the phase angle
backwards" (4.0 A from 200 V, 60° lagging) are not in the deck in any form, and neither is any
quantity they compute.

**d) Notation and emphasis.** The old page introduced V_pp, form factor, peak factor, the
rectified mean as a working quantity, sin²ωt = ½(1 − cos 2ωt), moving-coil versus moving-iron
meters, and P_av = V_rms I_rms cos φ. None of these appears in the deck. Two of them are actively
misleading for this week: the deck's only mention of an average value is a diagram label it never
uses, and it never writes power as VI at all — only as I²R and V²/R.

The old questions file inherited all of this: of its twelve multiple-choice items, **nine** turn on
reactance, impedance, phase, resonance or power factor, and two of the three short-answer questions
are full RLC computations. A student who revised from it would have spent most of the week on
material the lecturer has not yet taught, and would have seen none of her three practice questions
— which are the most likely templates for assessment.
