# PHY_102 Week 5 — what the slide images contained that the extracted text had lost

Deck: **`Kirchoff-s-law-PDF`** (the file name misspells Kirchhoff; the title slide spells it correctly), **28 pages**, course **General Physics II**, lecturer **Dr. Sharafadeen Adeniji, PhD, Theoretical and Applied Physics**. The deck's own title is **KIRCHHOFF'S RULES**.

## Page inventory — what extracted and what did not

`pdftotext` recovered running text on most pages, so this deck was **less damaged than weeks 2, 6 and 12**. Nine pages were supplied as rendered PNGs because the extractor found nothing on them beyond a heading:

| Page | Heading | Status |
|---|---|---|
| 1 | KIRCHHOFF'S RULES (title, lecturer) | text |
| 2 | LEARNING OBJECTIVES | text |
| **3** | INTRODUCTION (RESISTORS IN PARALLEL CONNECTION) | **image — recovered here** |
| **4** | INTRODUCTION (RESISTORS IN PARALLEL CONNECTION) | **image — recovered here** |
| **5** | INTRODUCTION (RESISTORS IN SERIES CONNECTION) | **image — recovered here** |
| **6** | INTRODUCTION (RESISTORS IN SERIES CONNECTION) | **image — recovered here** |
| 7 | KIRCHHOFF'S RULES — why series/parallel is not enough | text |
| 8 | KIRCHHOFF'S RULES — junction and loop defined | text |
| 9 | JUNCTION AND LOOP — figure (a) | text (figure lost) |
| 10 | JUNCTION AND LOOP — figure (b) | text (figure lost) |
| **11** | KIRCHHOFF'S RULES — the rules | **image — recovered here** |
| 12 | KIRCHHOFF'S RULES — strategy: assume a direction | text |
| 13 | KIRCHHOFF'S RULES — strategy: emf signs | text |
| 14 | KIRCHHOFF'S RULES — strategy: IR negative | text |
| 15 | KIRCHHOFF'S RULES — strategy: IR positive | text |
| 16 | KIRCHHOFF'S RULES - EXAMPLE 1 (problem) | text (figure lost) |
| **17** | EXAMPLE 1 - SOLUTION (a) | **image — recovered here** |
| **18** | EXAMPLE 1 - SOLUTION (b) and (c) | **image — recovered here** |
| 19 | KIRCHHOFF'S RULES – EXAMPLE 2 (problem) | text (figure lost) |
| 20 | KIRCHHOFF'S RULES – SOLUTION 2 | **caption only — working NOT recovered** |
| 21 | KIRCHHOFF'S RULES – SOLUTION 2 | **caption only — working NOT recovered** |
| 22 | KIRCHHOFF'S RULES – SOLUTION 2 | **caption only — working NOT recovered** |
| 23 | KIRCHHOFF'S RULES – SOLUTION 2 | **caption only — working NOT recovered** |
| **24** | Summary — the two rules | **image — recovered here** |
| 25 | Summary — consistent sign rules | text |
| 26 | FURTHER READING | text |
| 27 | References | text |
| **28** | Thank You | **image (decorative)** |

**Nine of twenty-eight pages (32%) were image-only and are transcribed below.** The four image-only pages that actually carried mathematics — 4, 6, 17 and 18 — held **every worked number in the deck**; the extraction had none of them.

**Gap that remains.** Pages 20–23, the four-slide solution to Example 2 (the bridge circuit), extracted only the repeated caption "The figure below shows a 'bridge' circuit. Find the current in each resistor." Because each of those pages carries that caption as real text, they were not classified as image-only and were **not supplied as PNGs**. Her working for Example 2 is therefore still missing. The rebuild states this openly and supplies a clearly-labelled substitute bridge worked in full (values from Young & Freedman, the deck's own first reference) so that the method is demonstrated; those numbers are **not** hers and are marked as such in `summary.md`.

## 1. Slide 3 — resistors in parallel (image)

> "When two or more resistors are connected as shown below, they are said to be in parallel configuration.
> A parallel connection splits the current in the resistors while the voltage across each resistor is the same.
> In parallel connection, the equivalent resistance is given as:
> **1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ⋯ 1/R_N**"

Figure on the same slide: a source with **+** at top and **−** at bottom labelled **V**, a total current **I_total** entering top-left, and downward branch-current arrows **I₁, I₂, … I_n** through resistors **R₁, R₂, … R_n** drawn in parallel between the two rails, with a dashed break before the nth branch.

## 2. Slide 4 — the parallel worked instance (image)

> "For instance, if R₁ = 4 Ω, R₂ = 6 Ω, and R₃ = 10 Ω, find the equivalent resistor.
> Using 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ⋯ 1/R_N
> **1/R_eq = 1/4 + 1/6 + 1/10**
> **1/R_eq = 31/60**
> **R_eq = 60/31 = 1.94 Ω**"

Verified: over the common denominator 60, 15/60 + 10/60 + 6/60 = 31/60; 60/31 = 1.9355… = 1.94 Ω to three significant figures. The intermediate step 15/60 + 10/60 + 6/60 is **not shown on the slide** — she jumps straight to 31/60.

## 3. Slide 5 — resistors in series (image)

> "When two or more resistors are connected as shown below, they are said to be in series configuration.
> If the resistors are in *series*, the current must be the same in all of them, but the voltage may vary.
> In series connection, the equivalent resistance is given as:
> **R_eq = R₁ + R₂ + R₃ + ⋯ R_N**"

Figure: four resistors **R₁ R₂ R₃ R₄** in a single line across the top of one rectangular loop, with a battery at the bottom, **+** terminal marked.

## 4. Slide 6 — the series worked instance (image)

> "For instance, if R₁ = 3 Ω, R₂ = 5 Ω, R₃ = 9 Ω and R₄ = 10 Ω,
> Using: R_eq = R₁ + R₂ + R₃ + ⋯ R_N
> **R_eq = 3 + 5 + 9 + 10**
> **R_eq = 27 Ω**"

Note: unlike slide 4 this one **never states the instruction** ("find the equivalent resistance"); it lists the values and begins computing.

## 5. Slide 11 — the rules, and the junction/loop figure (image)

> "The two Kirchhoff's rules are given below:
> **Kirchhoff's junction rule:** *The algebraic sum of the currents into any junction is zero.*
> Mathematically,
> **ΣI = 0**
> In other words, there is no charge can accumulate at a junction, so the total charge that enters the junction per unit time must equal the total charge that leave per unit time."

The figure on this slide is the "figure (a)" referred to by the text of slide 9. It shows a network with two sources **ε₁** and **ε₂**, each with its internal resistance **r₁** and **r₂** and its **+** terminal marked, plus an external resistor **R** on the right branch. Three loops are drawn and labelled **Loop 1** (the outer path), **Loop 2** and **Loop 3** (the two inner meshes). Four points are called out by leader lines: **a — "Junction"**, **b — "Junction"**, **c — "Not a Junction"**, **d — "Not a Junction"**.

That figure is the missing companion to the slide-9 sentence "points a and b (as shown in figure (a)) are junctions. However, points c and d are not", which extracted as text with no picture.

## 6. Slides 17 and 18 — EXAMPLE 1, the only fully worked circuit in the deck (images)

**The circuit, drawn identically on both slides.** One rectangular loop. **Top branch, left to right:** a **2 Ω** resistor, then a **12 V** battery with **+** on its left; point **b** is the dot at the top-right corner. **Right side:** a **7 Ω** resistor. **Bottom branch, left to right:** a **4 Ω** resistor, then a **4 V** battery with **+** on its left; point **a** is the dot at the bottom-left corner. **Left side:** a **3 Ω** resistor. Current arrows **I** are marked: **down** the left side, **rightward** along the bottom, **up** the right side, **leftward** along the top. A curved double arrow in the centre is labelled **"Travel"** and runs the same way round.

So the 2 Ω and 4 Ω are the internal resistances of the 12 V and 4 V batteries, and the 3 Ω and 7 Ω are "the two resistors" of the problem statement.

### Slide 17 — part (a), verbatim

> "a. Starting at *a* and traveling counterclockwise with the current, we add potential increases and decreases and equate the sum to zero
> **−I(4 Ω) − 4 V − I(7 Ω) + 12 V − I(2 Ω) − I(3 Ω) = 0**
> **∴ 8 V = I(16 Ω)**
> **i.e. I = 8/16 = 0.5 A**
> Since I is positive, our assumed current direction is correct."

Verified: emfs 12 − 4 = 8 V; resistances 4 + 7 + 2 + 3 = 16 Ω; I = 8 V / 16 Ω = 0.5 A.

### Slide 18 — parts (b) and (c), verbatim

> "b. To find Vab the potential at *a* with respect to *b*, we start at *b* and add potential changes as we go toward *a*. There are two paths from *b* to *a*; taking the lower one, we find:
> **V_ab = (0.5)(7) + 4 + (0.5)(4) = 9.5 V**
>
> c. the power output of the emf of each battery is given as:
> **P₁₂ᵥ = εI = (12)(0.5) = 6 W**
> **P₄ᵥ = εI = (−4)(0.5) = −2 W**"

Verified: 3.5 + 4 + 2 = 9.5 V. Cross-checked by the upper path, which the slide mentions but does not compute: +12 − (0.5)(2) − (0.5)(3) = 12 − 1.0 − 1.5 = 9.5 V ✓. Power cross-check: 6 W + (−2 W) = 4 W delivered, and I²R_total = (0.5)²(16) = 4 W dissipated ✓.

The sign of P₄ᵥ is deliberate and is the most instructive thing on the slide: the 4 V battery's emf enters as **−4 V** because the current is driven **into** its + terminal, so it is being charged and its power output is negative — it absorbs 2 W.

## 7. Slide 24 — the Summary slide (image)

> "Kirchhoff's junction rule, also known as Kirchhoff's current law, states that the total current entering a junction must equal the total current leaving the junction. This is based on the law of conservation of charge, which states that charge cannot be created or destroyed.
> **ΣI = 0 … … … … . Junction rule**
> Kirchhoff's loop rule, also known as Kirchhoff's voltage law, states that the sum of the voltage drops around any closed loop in a circuit must be zero. This is based on the law of conservation of energy, which states that energy cannot be created or destroyed
> **ΣV = 0 … … … … … loop rule**"

This is the **only** place in the deck where the loop rule is stated in words or symbols.

## 8. Slide 28 (image)

Decorative closing slide: "**Thank You**". No content.

## 9. Notation and habits the extraction lost

- **Units carried inside the algebra.** She writes `−I(4 Ω)`, `+12 V`, `8 V = I(16 Ω)` — resistance and voltage units live inside the equation rather than being appended at the end. Copying this makes the final division self-checking (V ÷ Ω = A).
- **R_eq** is her symbol for equivalent resistance throughout, with the subscript lowercase.
- **The last term of both combination formulas is written without a plus sign**: `1/R₁ + 1/R₂ + 1/R₃ + ⋯ 1/R_N` and `R₁ + R₂ + R₃ + ⋯ R_N`. The plus is absorbed into the ellipsis. Purely typographic.
- **"For instance, if …"** is how she opens both worked combination examples — they are illustrations inside the introduction slides, not numbered Examples. Only the two Kirchhoff problems are labelled "EXAMPLE 1" and "EXAMPLE 2".
- **P = εI** is written with the Greek epsilon for emf, and the emf carries its **sign** into the formula, as in `(−4)(0.5)`.
- **"Travel"** is her label for the loop-traversal direction on the circuit diagram — a distinct arrow from the current arrows **I**, and drawn in a different style. That visual separation of "which way I walk" from "which way I assume the current flows" is the pedagogical point of the figure and was completely lost in extraction.

## 10. Errors, gaps and imprecisions on the slides

1. **Slide 11 promises two rules and delivers one.** The slide opens "The two Kirchhoff's rules are given below:" and then gives only the junction rule. The loop rule appears nowhere until the Summary, slide 24. Since Example 1 uses the loop rule on slide 17 without it ever having been stated, a student following the deck linearly meets ΣV = 0 in use before meeting it as a rule. Flagged in `summary.md`; both rules are taught together there.
2. **Slide 11, grammar.** "there is no charge can accumulate at a junction" and "the total charge that leave per unit time" — should read "no charge can accumulate" and "that leaves per unit time". The physics is right; only the sentence is broken.
3. **Slide 24, imprecision worth naming.** "the sum of the **voltage drops** around any closed loop in a circuit must be zero." Taken literally that omits the emfs, and a loop of nothing but resistive drops could sum to zero only if the current were zero. Her own Example 1 puts +12 V and −4 V into the same sum as the four IR terms, so what ΣV = 0 really adds is **every potential change**. Taught as "sum of potential changes" in the rebuild, with the slide's wording quoted and the discrepancy named.
4. **Slide 25, a conflation.** "it is important to decide whether to define currents as flowing clockwise or counterclockwise around the loop. Once the direction of the current flow has been defined, all voltage drops must be assigned positive or negative signs depending on whether the voltage drop is in the same direction as the current flow or in the opposite direction." This merges two separate choices — the loop-traversal direction and the branch-current arrows — and mentions only voltage drops, silently dropping the emf terms that slide 13 was about. Slides 12–15 state the four rules correctly and separately; those are what the rebuild teaches.
5. **Slide 6 states no question.** It gives four resistance values and computes, without ever asking for the equivalent resistance. Harmless, but it means the slide cannot be quoted as an exam-style question without adding the instruction.
6. **Missing plus signs before the final term** of both combination formulas (slides 3, 4, 5, 6). Typographic only.
7. **The file name misspells the lecturer's subject**: `Kirchoff-s-law-PDF`, one *h* short, and singular "law" where the deck teaches two rules. The slides themselves spell "KIRCHHOFF'S RULES" correctly.
8. **No error was found in any of the arithmetic.** 31/60 → 1.94 Ω, 3+5+9+10 = 27 Ω, 8 V / 16 Ω = 0.5 A, 3.5+4+2 = 9.5 V, (12)(0.5) = 6 W and (−4)(0.5) = −2 W are all correct, and the two independent checks available (V_ab by the upper path; emf power against I²R) both confirm the numbers.

## 11. Was the old material broken, or was it substantially fine?

**Verdict: it was half right, and the half that was missing is the half he is examined on.** This is not a case like weeks 2, 6 and 12, where the old page taught the wrong topic. Stated plainly:

**What the old `PHY_102-Summary.md` got right.** Its physics is sound and its *scope* is broadly the deck's scope: series and parallel combination, the junction and loop rules with the correct conservation laws, and — importantly — a four-line traversal sign table that matches slides 13, 14 and 15 exactly. It correctly reads a negative current as a reversed arrow, correctly explains that a parallel equivalent is below the smallest branch, and it carried an honest footnote admitting the deck had extracted as titles. It also spotted, independently and correctly, the slide-25 conflation of traversal direction with current direction and the "voltage drops" omission of the emfs. On the physics, there is nothing in it to retract.

**What was actually broken.**
- **It contains none of the lecturer's four worked calculations.** Not 4 ∥ 6 ∥ 10 = 1.94 Ω, not 3 + 5 + 9 + 10 = 27 Ω, and — most seriously — not one line of Example 1, which is the only circuit the deck solves end to end and therefore the most likely template for an exam question. Its three worked examples (a 30 V battery with 6 ∥ 12; a three-branch two-battery network; a balanced bridge) are all invented, and none of them resembles the shape of hers.
- **It teaches material she never covers.** The Wheatstone balance condition R₁/R₂ = R₃/R₄ appears in the summary *and twice in the question set*, yet the deck never mentions bridge balance — its bridge is solved by brute-force Kirchhoff. Also added: counting n − 1 independent junction equations, single-valuedness of potential, terminal p.d. ε − Ir as a headline rule, Ohm's law as a law distinct from the definition of resistance, and non-ohmic elements (diode, filament, thermistor). None of that is in the deck. In a twelve-question retention set, two questions on Wheatstone balance is two questions spent off-syllabus.
- **It never states Example 1's specific results**, so nothing in the old material would let Gift recognise a 12 V/2 Ω against 4 V/4 Ω loop, or explain why P₄ᵥ = −2 W is a correct answer rather than a mistake.

**Conclusion.** The rebuild is justified, but it is a *repair*, not a replacement of something worthless: the old page's framework and sign table survive into the new one essentially intact, and what is added is her four worked calculations in full, her wording, her "Travel" convention, the +6 W / −2 W power result with its energy check, and the removal of the off-syllabus Wheatstone material. If the old file had to be kept, it would not mislead Gift about the physics — but it would leave him unable to answer the one question this deck most obviously sets.
