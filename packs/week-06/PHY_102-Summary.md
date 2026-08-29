# PHY_102 — Week 6 Summary

*General Physics II · Topic: Nomenclature in A.C. Circuits — Peak and RMS Values of Current and Voltage · Lecturer: Dr. Sharafadeen Adeniji, PhD Theoretical and Applied Physics*

**Scope note:** this rewrite follows the deck slide-for-slide. The lecturer teaches one chain of
ideas and nothing else: the sinusoidal source **V = V_max sin ωt**; the angular frequency
**ω = 2πf = 2π/T**; the current that follows from Ohm's law, **I = (V_max/R) sin ωt = I_max sin ωt**;
why a plain average of an alternating quantity is useless; the squaring fix, **I² = I²_max sin²ωt**
with **(I²)_av = ½I²_max**; the two results **I_rms = (1/√2)I_max = 0.7071 I_max** and
**V_rms = (1/√2)V_max = 0.7071 V_max**; and average power **P_av = I²_rms R = V²_rms/R**. She then
works **three practice questions**, which are the whole of her problem-solving content.

She does **NOT** cover, anywhere in these 21 pages: inductive or capacitive reactance (X_L, X_C),
impedance Z, the series RLC circuit, phasor diagrams, resonance, phase angle φ, power factor
cos φ, peak-to-peak value, form factor, peak (crest) factor, or the trigonometric derivation
sin²ωt = ½(1 − cos 2ωt) that produces the ½. The **average value 0.6371 I_m appears only as a
label on a diagram** (slide 7, repeated on slide 8) — she never defines it, never derives it and
never uses it in a calculation.

*Aside, clearly marked:* the week's **summary sheet** (a separate document from the deck) does
discuss series RLC circuits, reactances and Kirchhoff's voltage law applied vectorially. **None of
it is taught in this deck.** Phasor diagrams, resonance and power factor are the subject of the
**Week 7** deck, "Phasor Diagrams and Power in an AC Circuit". Do not spend Week 6 revision on
RLC algebra; spend it on the three practice questions below, which are the shape of the exam
questions.

## The 8 most examinable things this week

1. **Peak value, defined (slide 4).** "Peak Value refers to the **maximum instantaneous value**
   that a waveform reaches during one complete cycle. It represents the highest point of the
   waveform and is typically **measured from the zero reference point**." Measured from zero — not
   from trough to crest.
2. **RMS value, defined (slide 5).** "Root Mean Square (RMS) value is a measure of the magnitude
   of an alternating current (AC) or voltage. It represents the **equivalent direct current (DC)
   value that would produce the same amount of power dissipation in a resistive load**." RMS is
   defined by **equal heating**, not by the shape of the curve.
3. **The source equation (slide 6).** **V = V_max sin ωt**, where V is the *instantaneous* voltage
   (volts), V_max is the peak value or maximum output voltage — "otherwise known as the **voltage
   amplitude**" — and ω is the angular frequency of the AC voltage.
4. **Angular frequency (slide 7).** **ω = 2πf = 2π/T**, with f the frequency of the source (Hz)
   and T the period of the source (s). ω is in **radians per second**, and the ωt inside the sine
   is an **angle in radians**, never in hertz and never in degrees.
5. **The current follows from Ohm's law (slide 8).** **I = V/R = (V_max/R) sin ωt = I_max sin ωt.**
   Read off the identification: **I_max = V_max/R**. I is the instantaneous current; I_max is "the
   peak value or maximum output current of the source (otherwise known as the **current
   amplitude**)".
6. **Why a direct average fails, and the fix (slide 9).** "Both alternating voltage and current
   have a **zero value**. So direct average gives no information (or useless). In order to
   evaluate an alternating parameter in quantity, we use **root mean square (rms)**: we square the
   alternating current I" — **I² = I²_max sin²ωt**. Squaring destroys the sign, so the negative
   half-cycle stops cancelling the positive one.
7. **The mean square and the √2 (slide 10).** **(I²)_av = ½ I²_max**, and "RMS is the square root
   of the above equation": **I_rms = (1/√2) I_max = 0.7071 I_max**, and likewise
   **V_rms = (1/√2) V_max = 0.7071 V_max**. Her closing line, repeated on the SUMMARY slide: "rms
   values are used when discussing alternating currents and voltages because **AC ammeters and
   voltmeters are designed to read rms values**."
8. **Average power (slide 15).** "Recall that the power, **P = I²R**. By replacing I with I_rms,
   we have the average value of power, P as: **P_av = I²_rms R**. Apply Ohm's law,
   **P_av = V²_rms/R**." Her Question 3 then uses **P_max = V²_max/R** for the maximum power.

## Her development, in her order

### Slide 3 — Introduction (what a cycle is)

"An alternating current (AC) is a type of current that **changes direction over time**. A complete
cycle of AC consists of two parts: a **positive half-cycle and a negative half-cycle**. When AC is
graphed, the positive half-cycle starts at zero, rises to a maximum positive value, and then
returns to zero. The negative half-cycle starts at zero, falls to a maximum negative value, and
then returns to zero. This graph is called a **sinusoidal waveform**."

The sign convention that matters for the rest of the week is here: the instantaneous value is a
**signed** quantity — positive for half the cycle, negative for the other half. Peak and rms values
are **magnitudes**; they are always quoted positive.

### Slides 6–7 — the source and its angular frequency

**V = V_max sin ωt**, with **ω = 2πf = 2π/T** (slide 7 adds: "f is the frequency of the source, T
is the period of the source"). Slide 7 closes with the sentence that fixes the sign convention:
"The voltage is **positive during one half of the cycle and negative during the other half**."

Units, carefully: f in Hz (s⁻¹), T in s, ω in **rad s⁻¹**. The three are one equation read three
ways — f = 1/T, ω = 2πf, ω = 2π/T. If a question gives you ω and asks for f, divide by 2π; if it
gives f and asks for ω, multiply. Substituting f where ω belongs scales the angle by 6.28.

*Note on her notation:* in the typeset formulae she writes the argument of the sine as **wt**
(a Latin w) rather than ωt, on slides 8 and 9. It is the same angular frequency ω defined on
slide 7. Write ω in your own work.

### Slide 8 — the current, from Ohm's law

**I = V/R = (V_max/R) sin ωt = I_max sin ωt.**

Two things are being asserted at once, and both are examinable. First, in a **resistor** the
current is in step with the voltage — the same sin ωt, no phase shift, no extra angle. Second, the
amplitudes are related by Ohm's law: **I_max = V_max/R** (amperes = volts ÷ ohms). Because the
relation is a plain proportionality, the *same* factor 0.7071 converts each amplitude to its rms
value, so **I_rms = V_rms/R** as well. That is why Question 3 can go straight from V_rms to I_rms
without ever computing I_max.

### Slides 9–10 — why rms, and where the √2 comes from

Her argument in three moves:

1. **The problem.** "Both alternating voltage and current have a zero value. So direct average
   gives no information (or useless)." Over a whole cycle the positive and negative halves cancel
   exactly, so the mean of I is zero — which would predict that an AC current does no heating at
   all, which is false.
2. **The fix.** Square it: **I² = I²_max sin²ωt.** Her diagram on slide 9 plots I² against t: the
   squared current never goes below zero, oscillates between 0 and I²_max, and visibly has its
   mean line at **I²_max / 2**.
3. **The result.** "Now, we can average I²": **(I²)_av = ½ I²_max.** "RMS is the square root of the
   above equation": **I_rms = (1/√2) I_max = 0.7071 I_max**, and **V_rms = (1/√2) V_max =
   0.7071 V_max**.

Read the name backwards to remember the order of operations: **root** of the **mean** of the
**square**. Square first, average second, square-root third. It is *not* the average of the
waveform and it is *not* the square root of the average.

Her slide-10 diagram makes the physical claim visually: an AC voltage waveform with V_peak and
V_rms marked, set beside a flat **240 V DC** line. That is the definition from slide 5 drawn — the
DC voltage that heats a resistor at the same average rate.

*Numerical values worth holding:* 1/√2 = 0.7071, and √2 = 1.4142. Going peak → rms you
**multiply by 0.7071** (the answer gets smaller). Going rms → peak you **multiply by 1.4142**, or
equivalently **divide by 0.7071** (the answer gets bigger). The rms value of a sinusoid is always
less than its peak value; if your answer says otherwise, you have used the factor the wrong way.

### Slide 15 — average power

"Recall that the power, **P = I²R**. By replacing I with I_rms, we have the average value of
power, P as: **P_av = I²_rms R**. Apply Ohm's law, **P_av = V²_rms/R**."

The reason this works is the whole point of rms and is worth being able to say: power in a
resistance goes as the **square** of the current, and the mean of I² is exactly I²_rms by
definition, so putting the rms value into P = I²R gives the true average power with no correction
factor at all. Watts, with I in amperes and R in ohms.

---

## The three practice questions, worked as she works them

### PRACTICE question 1 (slide 11) — Solution question 1 (slide 12)

**"Typical household circuit operates with an rms voltage of 120 V. What is the maximum, or peak
value of the voltage in the circuit?"**

Using **V_rms = (1/√2) V_max**

**V_max = V_rms √2**

**∴ V_max = 120√2 = 170 V**

Every line of that is on the slide. Note the direction: she has been *given* the rms value and
wants the peak, so she **rearranges to multiply by √2**. 120 × 1.4142 = 169.7, which she rounds to
**170 V**. The two numbers 120 V and 170 V are worth memorising as a pair — they are the standard
US mains figures and she reuses 120 V in Question 2.

### PRACTICE question 2 (slide 13) — Solution to question 2 (slide 14)

**As set on slide 13:** "For a particular device, the house ac voltage is **120 V** and the ac
current is 10 A. What are their maximum values?"

**As restated and solved on slide 14:** "For a particular device, the house ac voltage is
**250 V** and the ac current is 10 A. What are their maximum values?"

**⚠ The two slides give different voltages. This is a genuine misprint in the deck** — see the note
below. Here is her working exactly as printed on slide 14, using 250 V:

**I_rms = 0.7071 I_max**

**I_max = I_rms / 0.7071 = 10 / 0.7071 = 14.14 A**

Also,

**V_rms = 0.7071 V_max**

**V_max = V_rms / 0.7071 = 250 / 0.7071 = 353.56 V**

Check the arithmetic yourself: 10 ÷ 0.7071 = 14.142 ✔ and 250 ÷ 0.7071 = 353.56 ✔. Both are the
given rms values **multiplied by 1.4142**, which is the same operation written as a division by
0.7071.

**⚠ The misprint, named so you are not caught by it.** Slide 13 sets the problem with an ac
voltage of **120 V**; slide 14 solves it with **250 V**. One of the two is wrong and the deck never
reconciles them. If the intended figure is 120 V, the answer is
**V_max = 120 / 0.7071 = 169.7 ≈ 170 V** — the same answer as Question 1, which is very likely why
the figure was changed on the solution slide, to avoid repeating it. **Be able to produce both
numbers**: 120 V rms → 170 V peak, and 250 V rms → 353.56 V peak. The current part is unaffected:
10 A rms → 14.14 A peak either way. (Slide 14 also prints the denominator as "o.7071" twice, with
a letter o for the zero. Read it as 0.7071.)

### PRACTICE QUESTION 3 (slide 16) — SOLUTION TO QUESTION 3 (slide 17)

**"An AC generator with a maximum voltage of 24.0 V and a frequency of 60.0 Hz is connected to a
resistor with a resistance R = 265 Ω. Find (a) the rms voltage (b) the rms current in the circuit.
Determine (c) the average and (d) maximum power dissipated in the resistor."**

**(a) The rms voltage is given as:**
**V_rms = 0.7071 V_max = 0.7071 × 24 = 17.0 V**

**(b) The rms current is given as:**
**I_rms = V_rms / R = 17 / 265 = 0.0642 A**

**(c) The average power, P_av = V²_rms / R = 17² / 265 = 1.09 W**

**(d) The maximum power, P_max = V²_max / R = (24)² / 265 = 2.174 W**

Every number checks: 0.7071 × 24 = 16.97 ≈ 17.0 V ✔; 17 ÷ 265 = 0.06415 ≈ 0.0642 A ✔;
17² = 289 and 289 ÷ 265 = 1.0906 ≈ 1.09 W ✔; 24² = 576 and 576 ÷ 265 = 2.1736 ≈ 2.174 W ✔.

Four things about this solution are worth taking away:

- **She converts once, at the start.** V_max → V_rms happens in part (a), and every later part uses
  the rms figure. Applying 0.7071 a second time somewhere downstream is the standard way to halve
  your own answer.
- **Ohm's law is used with rms on both sides.** I_rms = V_rms / R is legitimate because the same
  factor 0.7071 divides out of both amplitudes. Mixing them — V_rms / R to get I_max, or
  V_max / R to get I_rms — is the error to watch for.
- **P_av uses V_rms; P_max uses V_max.** Both are V²/R with the *same* R. The ratio is fixed:
  **P_max / P_av = (V_max / V_rms)² = (√2)² = 2**, and indeed 2.174 ≈ 2 × 1.09. Peak power in a
  resistor is exactly **twice** the average power, always.
- **The 60.0 Hz is not used in any part.** The circuit is a **pure resistor**, and nothing in
  V_rms, I_rms, P_av or P_max depends on frequency. The number is there to be ignored — recognising
  a redundant given is itself an exam skill.

### SUMMARY slide (18) — what she says the week was

"We have discussed the meaning and formulas for calculating the peak and rms values of current and
voltage.
**I_rms = (1/√2) I_max = 0.7071 I_max**
While the rms value of the voltage in a AC circuit is
**V_rms = (1/√2) V_max = 0.7071 V_max**
rms values are used when discussing alternating currents and voltages because AC ammeters and
voltmeters are designed to read rms values."

Two formulae and one sentence about meters. That is the examinable core of the week.

## Commonly confused

- **Which way the factor goes.** V_rms = 0.7071 V_max (peak → rms, *smaller*);
  V_max = 1.4142 V_rms = V_rms/0.7071 (rms → peak, *bigger*). Getting it backwards turns 240 V rms
  into 170 V instead of 339 V. The rms value of a sinusoid can never exceed its peak.
- **Multiplying by 0.7071 twice.** In Question 3, V_rms is already the converted figure; dividing
  it again by √2 to get "the rms current" gives 0.0454 A, not 0.0642 A.
- **Peak measured from zero, not trough to crest.** Slide 4 says "measured from the zero reference
  point". The trough-to-crest swing is twice the peak — and the deck never names it or uses it.
- **Instantaneous vs peak vs rms.** V is the value at one instant and is **signed** (negative for
  half of every cycle). V_max and V_rms are **magnitudes** and are quoted positive. A question that
  says "the voltage is 250 V" without qualification means the rms value, because that is what the
  meter reads.
- **The full-cycle average is zero, and that is her actual argument.** Slide 9's "Both alternating
  voltage and current have a zero value" means *zero average value over a complete cycle* — the
  instantaneous values are obviously not all zero. Quote it as "the mean over a complete cycle is
  zero" so the sentence is defensible.
- **Root of the mean of the square, in that order.** Not the mean of the root, not the square of
  the mean. Square first (which kills the sign), then average, then take the root.
- **ω is not f.** ω = 2πf rad s⁻¹. At 50 Hz, ω = 314 rad s⁻¹; at 60 Hz, ω = 377 rad s⁻¹. Writing
  sin(50t) for a 50 Hz source is out by a factor of 6.28.
- **ωt is an angle in radians.** Setting a calculator to degrees and evaluating sin(314 × 0.001)
  gives nonsense.
- **P_av = I²_rms R, never I²_max R.** Using the peak current doubles the power. Equivalently,
  P_av = V²_rms/R and P_max = V²_max/R, and P_max = 2P_av exactly.
- **I_max = V_max/R, I_rms = V_rms/R — never crossed.** Ohm's law relates amplitudes to amplitudes
  and rms values to rms values, because R is a constant and both sides scale by the same 0.7071.
- **0.6371 I_m is a diagram label, not a result.** It appears on her waveform picture as "Average
  Value" and is never defined, derived or used. (It is also mistyped: the rectified half-cycle mean
  of a sinusoid is 2/π = **0.6366** I_max, not 0.6371.) Do not build an answer on it.
- **Frequency is often a redundant given.** In a purely resistive AC circuit, none of V_rms,
  I_rms, P_av or P_max depends on f. Question 3 supplies 60.0 Hz and never uses it.
- **Do not import Week 7.** Reactance, impedance, phase angle, power factor and resonance are not
  in this deck. If a Week 6 question mentions an inductor or a capacitor, it is not from these
  slides.

## To have understood the week, you should be able to say out loud

- What a complete cycle of AC is, and that the instantaneous value is positive through one half of
  it and negative through the other.
- The peak value is the maximum instantaneous value in a cycle, **measured from zero**.
- The rms value is the **equivalent DC value that would dissipate the same power in a resistive
  load** — and that this, not the shape of the curve, is what defines it.
- Why the plain average is useless (it is zero over a cycle) and why squaring fixes it (I² is
  never negative).
- That (I²)_av = ½I²_max, so I_rms = I_max/√2 = 0.7071 I_max, and the same for voltage.
- ω = 2πf = 2π/T, in rad s⁻¹, and how to get any one of ω, f, T from another.
- I = I_max sin ωt with I_max = V_max/R, and that the same relation holds for the rms pair.
- P_av = I²_rms R = V²_rms/R, and that the maximum power V²_max/R is exactly twice it.
- Why meters are calibrated in rms, and therefore why "the mains is 240 V" is a statement about
  rms and implies a peak of 339 V.
- All three of her practice questions from memory, including that Q2's own two slides disagree
  about whether the supply is 120 V or 250 V.
