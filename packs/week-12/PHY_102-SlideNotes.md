# PHY_102 Week 12 — what the slide images contained that the extracted text had lost

Deck: `Step-Up-and-Step-Down-Transformer-PDF`, **23 pages**, lecturer **Dr. Sharafadeen Adeniji, PhD, Theoretical and Applied Physics**. Deck title: **TRANSFORMERS**. A separate one-page companion, `Summary`, carries the week's "In Summary" sheet, bullet summary and case study.

**Which pages extracted as text:** 1 (title), 2 (learning objectives), 3 (introduction), 4–7 (the four prose "HOW TRANSFORMERS WORK" slides), 11 ("Transformer" / impedance matching), 12, 14, 16 (the Example 1 problem statement, repeated verbatim three times), 18 (the Example 2 problem statement), 22 (SUMMARY), 23 (Thank You).

**Which pages are images: 8, 9, 10, 13, 15, 17, 19, 20, 21 — nine slides.** `pdftotext` recovered from them only the headings: HOW TRANSFORMERS WORK ×2, ENERGY CONSIDERATION IN TRANSFORMER, TRANSFORMER: EXAMPLE 1 ×3, TRANSFORMER: EXAMPLE 2 ×3. **Every equation in the deck and every line of both worked solutions was inside those nine pictures.** The extraction saw the two problem statements but none of the answers, and not one of the three numbered equations.

## 1. Equations and rules that were invisible

**Slide 8 — HOW TRANSFORMERS WORK, verbatim.**
> "When the magnetic flux changes because of changing currents in the two coils, the resulting induced emfs are
> **ε₁ = −N₁ dΦ_B/dt and ε₂ = −N₂ dΦ_B/dt. ……………1**
> The flux per turn Φ_B is the same in both the primary and secondary. Equations 1 above also show that the induced emf per turn is the same in the two coils.
> Hence, the ratio of the secondary emf ε₂ to the primary emf ε₁ is equal at any instant to ratio of secondary to primary turns.
> Mathematically, **ε₂/ε₁ = N₂/N₁ … … … … … … … … . . 2**"

**Slide 9 — HOW TRANSFORMERS WORK, verbatim.**
> "In an ideal transformer, the induced emfs ε₁ and ε₂ in the primary and secondary windings are equal to the terminal voltages, respectively.
> Mathematically, **V₂/V₁ = N₂/N₁ … … … … … … … … . . 3**
> When **N₂ > N₁**, the transformer is referred to as a **step-up** transformer.
> When **N₂ < N₁**, the transformer is referred to as a **step-down** transformer."

**Slide 10 — ENERGY CONSIDERATION IN TRANSFORMER, verbatim.**
> "The power input into the primary equals the power output at the secondary.
> **I₁V₁ = I₂V₂**
> The equivalent resistance of the load resistance when viewed from the primary is:
> **V₁/I₁ = R/(N₂/N₁)²**"

That is the **entire** equation inventory of the deck: three numbered relations and two energy relations. There is no efficiency formula, no current–turns formula, no loss formula and no transmission formula anywhere in it.

## 2. Worked examples that were invisible (two, in three parts each)

### TRANSFORMER: EXAMPLE 1 — the coffeemaker

Problem statement (slides 12, 14, 16 — extracted as text, repeated identically before each solution page):
> "A friend returns to the United States from Europe with a 960-W coffeemaker, designed to operate from a 240-V line. (a) What can she do to operate it at the USA-standard 120 V? (b) What current will the coffeemaker draw from the 120-V line? (c) What is the resistance of the coffeemaker? (The voltages are rms values.)"

**Slide 13 — part (a), verbatim from the image.**
> "a. Given that: V₁ = 120 V and V₂ = 240 V
> Using, N₂/N₁ = V₂/V₁ = 240/120 = 2
> This means the secondary coil (connected to the coffeemaker) should have twice as many turns as the primary coil."

**Slide 15 — part (b), verbatim from the image.**
> "b. We find the rms current I₁ in the 120-V primary by using
> **P_av = V₁I₁**
> where P_av is the average power drawn by the coffeemaker and hence the power supplied by the 120-V line.
> **∴ I₁ = P_av/V₁ = 960/120 = 8.0 A**
> Therefore, the secondary current is,
> **I₂ = P_av/V₂ = 960/240 = 4.0 A**"

**Slide 17 — part (c), verbatim from the image.**
> "c. Given that: V₁ = 120 V, I₁ = 8.0 A, and N₂/N₁ = V₂/V₁ = 240/120 = 2,
> **∴ V₁/I₁ = 120/8 = 15 Ω**
> Using,
> **V₁/I₁ = R/(N₂/N₁)²**
> **∴ R = (V₁/I₁)(N₂/N₁)² = 15(2)² = 60 Ω**"

Consistency checks performed on the rebuild (not on the slides): I₁V₁ = 8.0 × 120 = 960 W = I₂V₂ = 4.0 × 240 = 960 W ✓; R = V₂/I₂ = 240/4.0 = 60 Ω ✓; R = V₂²/P_av = 57600/960 = 60 Ω ✓. Every number on slides 13, 15 and 17 is correct.

### TRANSFORMER: EXAMPLE 2 — the hair dryer

Problem statement (slide 18 — extracted as text):
> "You plan to take your hair dryer to Europe, where the electrical outlets put out 240 V instead of the 120 V seen in the United States. The dryer puts out 1600 W at 120 V. (a) What could you do to operate your dryer via the 240-V line in Europe? (b) What current will your dryer draw from a European outlet? (c) What resistance will your dryer appear to have when operated at 240 V?"

**Slide 19 — part (a), verbatim from the image.**
> "a. Given that: V₁ = 240 V and V₂ = 120 V
> Using, N₂/N₁ = V₂/V₁ = 120/240 = 1/2
> This means the secondary coil should have half as many turns as the primary coil."

**Slide 20 — part (b), verbatim from the image.**
> "b. We find the rms current I₁ in the 240-V primary by using
> **P_av = V₁I₁**
> **∴ I₁ = P_av/V₁ = 1600/240 = 6.67 A**
> Therefore, the secondary current is,
> **I₂ = P_av/V₂ = 1600/120 = 13.3 A**"

**Slide 21 — part (c), verbatim from the image, in full.**
> "Given that: V₁ = 240 V, I₁ = 6.67 A, and N₂/N₁ = V₂/V₁ = 120/240 = 1/2,
> **∴ V₁/I₁ = 240/6.67 = 36 Ω**"

That is the entire content of slide 21. It ends there.

Checks performed on the rebuild: 1600/240 = 20/3 = 6.666… A, quoted as 6.67 A; 1600/120 = 40/3 = 13.33… A, quoted as 13.3 A; 240 ÷ (20/3) = 36 Ω exactly, while 240/6.67 = 35.98, so her 36 Ω is the exact figure rather than a rounding of the printed division. I₂/I₁ = 2 = N₁/N₂ ✓; I₁V₁ ≈ 1600 W ≈ I₂V₂ ✓. Every number on slides 19, 20 and 21 is correct.

## 3. Prose slides that extracted as text but matter for scope

- **Slide 3:** "AC is better than DC for electric power distribution because it is much easier to step voltage levels up and down in AC … This is done using transformers, which can only be used with AC."
- **Slide 4:** primary = "the side connected to the input AC voltage source", N₁ turns; secondary "is connected to a resistor" and has N₂ turns; the core "is used to increase the magnetic flux and to provide a medium for the flux to pass from one coil to the other."
- **Slide 5:** "An alternating voltage V₁ is applied to the primary coil, and the output voltage V₂ is across the resistor of **resistance R**." — this is the only definition of the R that appears in slide 10's formula. Then: "To minimize eddy current losses, the core of a transformer is laminated … The insulation prevents the eddy currents from flowing from one sheet of metal to the next."
- **Slide 6:** "In an ideal transformer, there are no energy losses in the windings or the core … Most transformers are very efficient, with power efficiencies of 90% to 99%."
- **Slide 7:** five bullets ending "All of the currents and voltages in the transformer have the same frequency as the AC source."
- **Slide 11:** "A transformer may be used to match resistances between the primary circuit and the load. This way, maximum power transfer can be achieved … In stereo terminology, this technique is called impedance matching. In other words, the transformer 'transforms' not only voltages and currents, but resistances as well."
- **Slide 22 (SUMMARY):** voltage change for long-distance transmission, plus one new claim — "Transformers are also used to isolate electrical circuits from each other."

## 4. Notation the extraction lost

- **Subscripts 1 and 2, never p and s.** The deck uses N₁/N₂, V₁/V₂, I₁/I₂, ε₁/ε₂ throughout. (The companion Summary sheet's diagram uses Np/Ns, Vp/Vs — a different convention in the same week's materials.)
- **ε for emf and V for terminal voltage, kept apart** until slide 9 explicitly identifies them for the ideal transformer. Collapsing them from the start destroys the deck's argument.
- **Φ_B for flux per turn**, written on the slide as a phi with subscript B.
- **Equation numbers 1, 2, 3** trailing dotted leaders, referred back to as "Equations 1 above".
- **P_av**, not P, for the average power — used in both examples as the bridge between the wattage rating and the currents.
- **The ratio is always written N₂/N₁ and V₂/V₁**, secondary over primary, in that order, in every one of the six part-solutions.
- **The "Given that … Using … ∴" template**, used identically in Example 1(a), 1(c), 2(a) and 2(c). Answers written in her style should follow it.
- **Ohms written with Ω, currents to two or three significant figures with a trailing .0** (8.0 A, 4.0 A) — the rms convention is stated once, in the Example 1 problem statement.

## 5. Errors, gaps and imprecisions found

1. **Slide 21 stops one line short — a gap, not an error.** It lists N₂/N₁ = 1/2 among its givens and then never uses it, and it never states the dryer's own resistance. The answer 36 Ω is correct for the question asked ("what resistance will your dryer *appear* to have when operated at 240 V"), so the slide is not wrong; but the parallel with Example 1(c) is broken, because there the deck went one step further and multiplied by (N₂/N₁)² to reach the appliance's actual resistance. The missing line, supplied in the new material and clearly marked as such: R = (V₁/I₁)(N₂/N₁)² = 36 × (1/2)² = **9 Ω**, confirmed by V₂/I₂ = 120/13.3 = 9 Ω and by V₂²/P_av = 14400/1600 = 9 Ω. A student who has only pattern-matched "Example 1(c) ended at 60 Ω" will answer Example 2(c) with 9 Ω and lose the marks; one who has only pattern-matched "Example 2(c) ended at 36 Ω" will answer Example 1(c) with 15 Ω. Both examples are taught with this contrast made explicit.
2. **The deck never states a current–turns relation.** It gives only I₁V₁ = I₂V₂ and, in the examples, P_av = V₁I₁. The relation I₂/I₁ = N₁/N₂ follows in one line from equation 3 and the power equation, and both examples silently exhibit it (8.0/4.0 = 2; 13.3/6.67 = 2), but she never writes it. The new material teaches the power equation as she gives it and points out the inverse behaviour as an observation about her own numbers, not as a fourth formula.
3. **Efficiency is quoted but never used.** Slide 6 gives "90% to 99%" and slide 10 then assumes exactly 100% (I₁V₁ = I₂V₂). No efficiency formula appears anywhere in the deck, and no efficiency is ever calculated. The idealisation is flagged in the rebuild; no η = P_out/P_in formula has been introduced, because it is not on the deck.
4. **Eddy currents are the only loss named.** Hysteresis, copper/I²R loss, flux leakage and mechanical loss appear nowhere in the lecture deck. The companion **Summary sheet** does mention "heat, hysteresis, and mechanical losses" — so those three words exist somewhere in the week's materials, but with no definition, no cure and no formula. They are noted in the rebuild as belonging to the summary sheet rather than taught as deck content.
5. **The companion Summary sheet contains one loose statement:** "They convert high voltage, low current to low voltage, and high current." That describes only step-down operation; a step-up transformer does exactly the reverse, as the deck's own Example 1 shows. It is worth knowing the sentence is there and worth not repeating it as a definition.
6. **Slide 22's isolation claim is undeveloped.** "Transformers are also used to isolate electrical circuits from each other" appears once, on the closing slide, with nothing earlier in the deck supporting it and no isolation transformer discussed. Recorded as a quotable sentence, not as examinable technique.
7. **No arithmetic error was found on any slide.** Every one of the nine image pages checks out, including the two roundings on slides 20 and 21.

## 6. Was the old material wrong, incomplete, or basically fine?

**Nothing in the old summary is physically false, and it carried an honest footnote admitting the deck's key slides were images. But it was written by reconstructing "the standard formulae the deck's worked examples use" from the headings, and that reconstruction over-taught the week substantially.** Four problems:

**a) Out of scope, at length.** The old page taught an efficiency formula and worked a numerical efficiency problem (its "Worked example 3": 240 V × 8.00 A in, 100 V × 18.0 A out, 93.8%, 120 W lost); a transmission-loss calculation ("Worked example 4": 200 kW at 2.0 kV versus 20 kV, 30 kW versus 300 W); a numerical impedance-matching problem ("Worked example 5": 500 Ω amplifier into a 5.0 Ω loudspeaker, 10 : 1); hysteresis loss and its cure; copper loss and its cure; flux leakage; mechanical/humming loss; core loss versus copper loss at no load; the 1 : 1 isolation transformer; and the behaviour of a transformer on DC including switch-on transients. **None of that is in the deck.** Three of its five worked examples were invented, and they occupied roughly as much of the page as the lecturer's own two.

**b) The lecturer's argument was replaced by a shortcut.** The old page wrote "V₁ = −N₁ dΦ/dt, V₂ = −N₂ dΦ/dt ⇒ V₁/N₁ = V₂/N₂", collapsing emf and terminal voltage into one symbol from the first line. The deck's whole build is that they are **not** the same thing: equation 1 and equation 2 are about ε, and equation 3 exists precisely because slide 9 adds the ideal-transformer assumption that lets you swap ε for V. The old page also had no equation numbering, so a student could not connect an answer to "equation 2" or "equation 3" as she does.

**c) Her formula was rewritten.** Slide 10 says **V₁/I₁ = R/(N₂/N₁)²**. The old page states it as R_apparent = (N₁/N₂)²·R. That is algebraically the same, but it is not what will be on the exam paper, and the substitution R = (V₁/I₁)(N₂/N₁)² that Example 1(c) actually performs never appears in that form on the old page.

**d) Her worked examples were present but re-derived, not reproduced.** The old page did contain the coffeemaker and the dryer, and reached the right numbers — but by its own route: Example 1(c) was computed as R = V₂²/P = 240²/960 = 60 Ω, which is *not* how she does it (she goes V₁/I₁ = 15 Ω, then × (N₂/N₁)²), and her step is the one that examines the squared turns ratio. Its Example 2(c) gave 36 Ω and 9 Ω together without noting that the deck itself stops at 36 Ω and never mentions 9 Ω — so the very contrast between the two parts, which is the most likely thing to be tested, was invisible. Neither the three numbered equations, nor P_av, nor the "Given that … Using … ∴" template, nor the intermediate 15 Ω as she writes it, appeared anywhere on the page.

The replacement teaches the deck: three equations in her numbering, six part-answers in her steps, and the two gaps on slides 21 and 10 named as gaps rather than silently filled.
