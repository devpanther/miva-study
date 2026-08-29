# Tuesday — PHY_102 nightly check

*Conceptual session on Week 5 exactly as Dr Adeniji builds it: parallel splits current with one common voltage and 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ⋯ 1/R_N, series shares one current with R_eq = R₁ + R₂ + R₃ + ⋯ R_N; junction as a point where three or more conductors meet and loop as any closed conducting path; the junction rule ΣI = 0 as conservation of charge and the loop rule ΣV = 0 as conservation of energy; and her four traversal sign rules — − to + is +ε, + to − is −ε, with the current is −IR, against the current is +IR — plus what the sign of the answer means.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Slide 3 says a parallel connection 'splits the current in the resistors while the ... across each resistor is the same'. Which quantity is the same for every resistor in a parallel connection?
A. The current
B. The power dissipated
C. The resistance
D. The voltage

**2.** Slide 8 gives the deck's definition of a junction. A junction is a point in a circuit where
A. a battery is joined to the rest of the circuit
B. three or more conductors meet
C. the wire changes direction
D. the current changes value

**3.** Travelling round a loop you pass through a source of emf ε, crossing its − terminal first and its + terminal second. What term goes into the loop equation?
A. +ε
B. −ε
C. Zero, since a source has no resistance
D. +ε only if you are travelling with the assumed current

**4.** You travel through a resistor R in the direction opposite to the assumed current I. Slides 14 and 15 say the term is
A. −IR, because current always falls in potential
B. zero, because you are moving against the flow
C. +IR, because this represents a rise of potential
D. +IR or −IR, decided by whichever emf is nearer

**5.** Slide 7 gives the reason Kirchhoff's rules are introduced at all. What is it?
A. Some circuits cannot be categorized into series and/or parallel connection
B. Ohm's law stops working when several batteries are present
C. Real batteries have internal resistance, which series and parallel rules cannot handle
D. The parallel formula becomes too long for more than three resistors

**6.** The Summary slide pairs each rule with a conservation law. Which pairing does it give?
A. ΣI = 0 with conservation of energy; ΣV = 0 with conservation of charge
B. Both rules with conservation of energy
C. ΣI = 0 with conservation of charge; ΣV = 0 with conservation of energy
D. Both rules with conservation of momentum in the charge carriers

**7.** Slide 17 ends 'Since I is positive, our assumed current direction is correct.' What follows if a current had instead come out negative?
A. The loop equation must be rewritten with the arrow reversed
B. That branch actually carries no current
C. An arithmetic mistake has been made somewhere
D. The magnitude is correct and the true current runs opposite to the drawn arrow

**8.** In writing a loop equation you make two separate choices: the direction of each branch-current arrow, and the direction you walk the loop. What is the relationship between them?
A. They must always agree, or the sign rules break down
B. They are independent; reversing the walk multiplies the whole loop equation by −1 and changes no answer
C. The walk direction fixes the current direction automatically
D. Reversing the walk direction changes the emf signs but not the IR signs

**9.** State both of Kirchhoff's rules the way the deck states them, in symbols and in words, and name the conservation law each one rests on.
*(short answer)*

**10.** Example 1's circuit contains four resistors and two batteries, yet the solution never uses the junction rule. Explain why not, and say what feature of a circuit forces the junction rule to be used.
*(short answer)*

**11.** In Example 1 part (a) the 4 V battery contributes −4 V, but in part (b) the same battery contributes +4 V. Explain why, without appealing to any change in the circuit.
*(short answer)*

**12.** Explain why a parallel equivalent resistance is always smaller than the smallest resistor in the combination, and say what the single most common mistake with her parallel formula is.
*(short answer)*

## Answers

**1. D** — In parallel every resistor is connected across the same two points, so the same potential difference V appears across each one; what divides is the current, which is why the reciprocals add. Option 1 is the series property — series elements sit on one path with no junction between them, so one current serves them all. Option 2 is false: with a common V, P = V²/R is largest in the smallest resistor. Option 3 is false in general; the resistors in her example are 4 Ω, 6 Ω and 10 Ω.

**2. B** — Her words: 'A point in a circuit where three or more conductors meet is called a junction, while a loop is any closed conducting path.' Three or more is what makes a split possible, and a split is what ΣI = 0 constrains. Option 1 is wrong — Example 1 has two batteries and no junction anywhere. Option 3 is the trap her figure prints as 'Not a Junction' at points c and d: a corner joins only two conductors, so nothing divides. Option 4 confuses the definition with its consequence.

**3. A** — Slide 13: 'when we travel through a source in the direction from − to + the emf is considered to be positive.' Crossing − then + is a rise in potential, so the term is +ε. Option 2 reverses the rule. Option 3 confuses emf with internal resistance — the internal resistance is a separate IR term in the same branch. Option 4 is the error the deck is built to prevent: the current direction sets the sign of IR terms, never of emf terms, which is why the same 4 V battery contributes −4 V in Example 1(a) and +4 V in Example 1(b).

**4. C** — Her wording on slide 15: travelling opposite to the assumed current 'the IR term is positive because this represents a rise of potential' — you are walking uphill against the drop. Option 1 is slide 14's case, travelling with the current, and applying it here is the commonest sign error in the whole topic. Option 2 invents a rule; the potential change is real either way. Option 4 makes IR depend on emfs, which it never does.

**5. A** — Her sentence: 'However, some circuits cannot be categorized into series and/or parallel connection. To find the currents in this network of resistors, we will apply the techniques developed by the German Physicist, Gustav Kirchhoff.' The bridge in Example 2 is exactly such a network: no two of its arms carry the same current and no two span the same pair of points. Option 2 is false and never claimed. Option 3 is tempting because Example 1 does have internal resistances, but they are handled as ordinary series resistors — that is not the obstacle. Option 4 confuses length with impossibility.

**6. C** — The junction rule counts charge per unit time in and out of a point, so it is conservation of charge — 'no charge can accumulate at a junction'. The loop rule adds up energy per unit charge gained and lost on a round trip, so it is conservation of energy. Option 1 swaps them, which is the answer a student gives from memory rather than meaning. Option 2 loses the distinction entirely. Option 4 imports a mechanics idea that plays no role in circuit analysis.

**7. D** — The arrow you drew is only a definition of which direction counts as positive in that branch; the algebra reports back with a sign. A negative value therefore means the size is right and the direction is the reverse of your guess, and nothing needs redoing. Option 1 wastes time and gives the identical answer with the sign flipped. Option 2 confuses a negative number with zero. Option 3 is the panic response — the equations are still satisfied, so there is no error to find.

**8. B** — Both choices are free. Reversing the walk flips the sign of every term at once, so the equation is the same equation multiplied by −1 and the solution is untouched. Reversing a current arrow instead flips the sign of that one current in the answer. Option 1 is contradicted by any shared branch, which is walked one way in one loop and the other way in the neighbouring loop while keeping a single current arrow. Option 3 removes a choice that is genuinely yours. Option 4 is half right and therefore dangerous: reversing the walk flips both kinds of term, since you cross the terminals in the opposite order and travel through resistors the opposite way too.

**9.** A good answer gives, first, the junction rule: the algebraic sum of the currents into any junction is zero, ΣI = 0 — equivalently, the total current entering a junction equals the total current leaving it, because no charge can accumulate at a point. That rests on conservation of charge. Second, the loop rule: the sum of the potential changes around any closed loop is zero, ΣV = 0. That rests on conservation of energy — a unit charge carried once round a closed path gains from the emfs exactly what it loses in the resistances. It is worth adding that 'algebraic' in the junction rule means signed: a current leaving is a negative current entering, so at a junction fed by I₁ and I₂ and drained by I₃, ΣI = 0 reads I₁ + I₂ − I₃ = 0.

**10.** A good answer applies her own definition. Example 1 is a single closed rectangle: every point on it joins exactly two conductors, so by the slide-8 definition there is no junction anywhere in the circuit. With no junction there is nothing for ΣI = 0 to constrain, and one single current I passes through all four resistors and both batteries — which is why the loop equation has just one unknown. The junction rule becomes necessary as soon as a point joins three or more conductors, because the current must then split or merge and the branch currents become separate unknowns; Example 2's bridge, with five arms and two inner junctions, is exactly that case.

**11.** A good answer says nothing about the battery has changed — only the direction of travel. In part (a) she walks the bottom branch left to right, crossing that battery's + terminal first and its − terminal second, which by slide 13 makes the emf negative: −4 V. In part (b) she walks from b toward a, so the bottom branch is crossed right to left, entering at − and leaving at +, which makes the emf positive: +4 V. The rule depends only on the order in which the two terminals are crossed. A useful contrast to add: the IR terms also flip between the two parts, but for a different reason — there the sign turns on travel direction relative to the assumed current, which is why the 4 Ω term is −I(4) in part (a) and +(0.5)(4) in part (b).

**12.** A good answer reasons physically: every extra branch is another path the current can take between the same two points, so adding a branch can only increase the total current for a fixed voltage, and by V = IR that means a lower equivalent resistance. Hence R_eq must sit below even the smallest branch — in her example, 1.94 Ω below 4 Ω. The standard mistake is stopping at 1/R_eq: the formula sums reciprocals, so 1/4 + 1/6 + 1/10 = 31/60 is a reciprocal resistance in Ω⁻¹, and the answer only becomes a resistance after inverting to 60/31 = 1.94 Ω. Quoting 0.52 Ω is that error. A good answer names the check too: if a parallel answer comes out larger than one of the branches, the inversion was skipped.
