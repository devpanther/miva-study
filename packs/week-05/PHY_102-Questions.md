# PHY_102 — Week 5 Questions

*Kirchhoff's rules, with resistors in series and parallel. Twelve multiple choice, three short answer. Answers at the bottom — work them before you look.*

## Multiple choice

**1.** R₁ = 4 Ω, R₂ = 6 Ω and R₃ = 10 Ω are connected in parallel. R_eq is
A. 20 Ω
B. 0.52 Ω
C. 1.94 Ω
D. 2.40 Ω

**2.** R₁ = 3 Ω, R₂ = 5 Ω, R₃ = 9 Ω and R₄ = 10 Ω are in series. R_eq is
A. 27 Ω
B. 1.34 Ω
C. 0.74 Ω
D. 6.75 Ω

**3.** In a parallel connection, the quantity that is the same for every resistor is the
A. current
B. power
C. resistance
D. voltage

**4.** The deck defines a junction as a point where
A. exactly two conductors meet
B. three or more conductors meet
C. the circuit changes direction
D. a battery is connected

**5.** You travel through a resistor R in the same direction as the assumed current I. The term you write is
A. +IR
B. zero
C. −IR
D. +IR or −IR, set by the nearest emf

**6.** You travel through a source of emf ε crossing its **+** terminal first and its **−** terminal second. The term is
A. −ε
B. +ε
C. zero
D. +ε if you travel with the current

**7.** Example 1's loop gives −I(4 Ω) − 4 V − I(7 Ω) + 12 V − I(2 Ω) − I(3 Ω) = 0. The current is
A. 1.0 A
B. 0.5 A
C. 0.25 A
D. 2.0 A

**8.** In Example 1, V_ab = (0.5)(7) + 4 + (0.5)(4) equals
A. 3.5 V
B. 5.5 V
C. 6.0 V
D. 9.5 V

**9.** In Example 1, the power output of the 4 V battery is
A. 6 W
B. 2 W
C. −2 W
D. −8 W

**10.** You solve a network and get I₅ = −1 A. This means
A. an arithmetic error was made
B. that branch carries no current
C. the current there is falling with time
D. the current is 1 A, flowing opposite to your arrow

**11.** ΣI = 0 at a junction expresses the conservation of
A. energy
B. charge
C. power
D. potential

**12.** The deck introduces Kirchhoff's rules because
A. some circuits cannot be categorized as series and/or parallel
B. Ohm's law fails at large currents
C. real batteries have internal resistance
D. resistors heat up and change value

## Short answer

**13.** State both of Kirchhoff's rules as the deck states them, name the conservation law behind each, and give the sign to be entered in all four traversal cases.

**14.** Write out Example 1's loop equation term by term, justifying the sign of each of the six terms, and solve for I. State the units at every step.

**15.** Explain why the deck gives P₄ᵥ = εI = (−4)(0.5) = −2 W with a minus sign, what that says physically about the 4 V battery, and show that energy still balances for the circuit as a whole.

---

## Answers

**1. C.** 1/R_eq = 1/4 + 1/6 + 1/10 = 15/60 + 10/60 + 6/60 = 31/60, so R_eq = 60/31 = 1.94 Ω — and it must sit below 4 Ω, the smallest branch. A adds them as if they were in series. B is 31/60 left un-inverted, the classic slip: that number is a reciprocal resistance, not a resistance. D drops the 1/10 term (1/4 + 1/6 = 5/12 → 2.40 Ω).

**2. A.** Series resistances simply add: 3 + 5 + 9 + 10 = 27 Ω, and the total must exceed the largest single resistor. B applies the parallel formula (67/90 inverted). C applies the parallel formula and then forgets to invert. D is the average, which no rule produces.

**3. D.** Slide 3: "A parallel connection splits the current in the resistors while the voltage across each resistor is the same." A is the series property. B is false — with a common V, P = V²/R differs from branch to branch. C is false; the resistors are generally unequal.

**4. B.** Slide 8: "A point in a circuit where three or more conductors meet is called a junction." A is exactly the case slide 11 labels "Not a Junction" — with two conductors nothing divides. C and D invent geometric criteria the deck never uses; Example 1's circuit has four corners and no junction at all.

**5. C.** Slide 14: travelling with the current is travelling "in the direction of decreasing potential", so the term is negative. A is the rule applied in reverse — that is slide 15's case, travelling against the current. B confuses "no emf" with "no potential change". D invents a dependence on the emf; the IR sign depends only on travel direction versus the current arrow.

**6. A.** Slide 13: "when we travel from + to − the emf is considered to be negative." B reverses it. C would delete the battery from the equation. D is the specific error the deck guards against — the emf sign depends only on the order in which the terminals are crossed, never on the current.

**7. B.** The emfs give 12 − 4 = 8 V and the resistances give 4 + 7 + 2 + 3 = 16 Ω, so 8 V = I(16 Ω) and I = 8/16 = 0.5 A. A comes from using 16 V (adding the emfs instead of subtracting). C halves the emf difference by using 4 V. D comes from inverting the division, 16/8.

**8. D.** 3.5 + 4 + 2 = 9.5 V. A keeps only the 7 Ω term. B loses the 4 Ω term. C drops the 7 Ω term. Checking by the upper path — 12 − (0.5)(2) − (0.5)(3) = 9.5 V — settles it.

**9. C.** P = εI with the emf entered as −4 V, because the current is pushed into that battery's + terminal: (−4)(0.5) = −2 W, so it absorbs 2 W. A is the 12 V battery's output. B has the right size and the wrong sign, i.e. treats it as discharging. D uses the 16 Ω total instead of the emf.

**10. D.** Slide 17's "since I is positive, our assumed current direction is correct" has the obvious converse: a negative value means right magnitude, reversed direction. A and C describe things that did not happen — the equations are still satisfied. B confuses a negative number with zero.

**11. B.** Slide 24: the junction rule "is based on the law of conservation of charge, which states that charge cannot be created or destroyed." A is what the **loop** rule rests on. C and D are not conserved quantities in this sense at all.

**12. A.** Slide 7, verbatim: "some circuits cannot be categorized into series and/or parallel connection", and the bridge in Example 2 is exactly such a network. B is false and never claimed. C is true of the batteries in Example 1 but is not the reason the rules are introduced — internal resistances are handled as ordinary series resistors. D is not discussed anywhere in the deck.

**13.** *Junction rule:* the algebraic sum of the currents into any junction is zero, ΣI = 0 — equivalently the total current entering equals the total current leaving; it rests on **conservation of charge**, since no charge can accumulate at a junction. *Loop rule:* the sum of the potential changes around any closed loop is zero, ΣV = 0; it rests on **conservation of energy**. The four traversal signs: source crossed **− then +** ⇒ **+ε**; source crossed **+ then −** ⇒ **−ε**; resistor traversed **with** the assumed current ⇒ **−IR**; resistor traversed **against** the assumed current ⇒ **+IR**.

**14.** Starting at *a* and travelling counterclockwise, with the current:
−I(4 Ω): bottom branch, walking with the current through the internal resistance of the 4 V battery ⇒ negative.
−4 V: crossing that battery + then − ⇒ negative emf.
−I(7 Ω): up the right side, with the current ⇒ negative.
+12 V: crossing the 12 V battery − then + ⇒ positive emf.
−I(2 Ω): along the top, with the current ⇒ negative.
−I(3 Ω): down the left side, with the current ⇒ negative, arriving back at *a*.
Sum: −I(4 Ω) − 4 V − I(7 Ω) + 12 V − I(2 Ω) − I(3 Ω) = 0. The emfs give 12 V − 4 V = 8 V; the resistances give 4 + 7 + 2 + 3 = 16 Ω. Hence **8 V = I(16 Ω)**, so **I = 8 V / 16 Ω = 0.5 A**. Volts divided by ohms gives amperes, which confirms the units. I is positive, so the assumed direction was right.

**15.** The 4 V battery is traversed from + to − in the direction of the current, so its emf enters the equations as **−4 V**; putting that into P = εI gives (−4)(0.5) = −2 W. Physically the stronger 12 V battery drives current **into** the 4 V battery's positive terminal, so it is being **charged**: its power *output* is negative because it is **absorbing** 2 W rather than delivering any. Energy still balances: the emfs together deliver 6 W + (−2 W) = 4 W, and the resistances dissipate I²R_total = (0.5)²(16 Ω) = 0.25 × 16 = 4 W. Delivered equals dissipated, which is the conservation of energy the loop rule expresses.
