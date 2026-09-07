# Friday — PHY_102 nightly check

*Computation on Week 5.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** A single loop contains a 15 V battery (internal resistance 1.0 Ω) and a 5.0 V battery (internal resistance 2.0 Ω) connected so they oppose each other, plus external resistors of 4.0 Ω and 3.0 Ω. What current flows?
A. 2.0 A
B. 1.0 A
C. 1.4 A
D. 1.5 A

**2.** In a loop, a 15 V battery drives 1.0 A into the positive terminal of a 5.0 V battery. What is the power output of the 5.0 V battery's emf?
A. +5 W
B. 15 W
C. −5 W
D. 10 W

**3.** In a bridge circuit the assumed currents are I₁ from a to b, I₂ from a to c, I₃ from b to d, I₄ from c to d and I₅ from c to b. Which is the junction-rule equation at b?
A. I₁ = I₃ + I₅
B. I₁ + I₅ = I₃
C. I₁ + I₃ = I₅
D. I₁ + I₃ + I₅ = 0

**4.** In a bridge circuit R₁ sits between a and b, R₅ between b and c and R₂ between a and c. The assumed currents are I₁ from a to b, I₅ from c to b and I₂ from a to c. Travelling the loop a → b → c → a, which loop equation is correct?
A. −I₁R₁ + I₅R₅ + I₂R₂ = 0
B. −I₁R₁ − I₅R₅ + I₂R₂ = 0
C. −I₁R₁ + I₅R₅ − I₂R₂ = 0
D. −I₁R₁ − I₅R₅ − I₂R₂ = 0

**5.** Resistors of 2.0 Ω, 5.0 Ω and 10 Ω are in parallel, and that group is in series with 2.75 Ω across a 12 V battery of negligible internal resistance. What current does the battery supply?
A. 3.4 A
B. 0.61 A
C. 3.0 A
D. 4.4 A

**6.** A 4.0 V battery has internal resistance 2.0 Ω. Another battery in the same loop drives 0.50 A into its positive terminal. What is the potential difference between the 4.0 V battery's terminals?
A. 3.0 V
B. 4.0 V
C. 1.0 V
D. 5.0 V

**7.** Walking from point a to point b you pass through a 3.0 Ω resistor in the direction of its 2.0 A current, then through a 9.0 V battery from − to +, then through a 1.0 Ω resistor against its 2.0 A current. What is V_b − V_a?
A. 5 V
B. 13 V
C. −13 V
D. 17 V

**8.** You have written a correct loop equation travelling clockwise. A friend travels anticlockwise round the same loop with the same current arrows. How does the friend's equation compare with yours?
A. Only the emf terms change sign
B. Only the IR terms change sign
C. The current comes out with the opposite sign
D. Every term changes sign; the same current results

**9. (show your working)** Three branches join top node A to bottom node B. Branch 1: a 12 V battery (+ toward A) in series with 2.0 Ω. Branch 2: a 4.0 Ω resistor. Branch 3: a 6.0 V battery (+ toward A) in series with 2.0 Ω. Assume currents I₁ and I₃ upward toward A and I₂ downward through the 4.0 Ω. Calculate all three currents and interpret any negative one. Show your working.

**10. (show your working)** Going clockwise from point a round a single loop: a 2.0 Ω resistor, a 4.0 V battery crossed + to −, its 1.0 Ω internal resistance, point b, a 4.0 Ω resistor, a 12 V battery crossed − to +, its 1.0 Ω internal resistance, back to a. Calculate the current, then V_ab = V_a − V_b by both paths from b to a. Show your working.

**11. (show your working)** A bridge has arms a→b 1.0 Ω, a→c 1.0 Ω, b→d 1.0 Ω, c→d 2.0 Ω and b→c 1.0 Ω, with a battery from d to a. Solving gives I₁ (a→b) = 3.0 A and I₅ (b→c) = −0.50 A. Use the junction rule at b to find I₃ (b→d), the loop a→b→c→a to find I₂ (a→c), then find I₄ (c→d). State the true direction in arm b→c. Show your working.

**12. (show your working)** In one circuit a 4.0 V battery appears as −4.0 V in the loop equation but as +4.0 V when the potential difference between two points is computed along a path through it. Explain how the same battery can carry both signs, and state what the sign of an emf term depends on.

---

## Answers

**1. B** — *Current in a loop with two opposing batteries.* Travel with the current (driven by the stronger battery): +15 − I(1.0) − 5.0 − I(2.0) − I(4.0) − I(3.0) = 0. The emfs give 15 − 5.0 = 10 V; the resistances total 1.0 + 2.0 + 4.0 + 3.0 = 10 Ω. So 10 V = I(10 Ω) and I = 1.0 A.

2.0 A adds the emfs, which is the aiding case; 1.4 A uses 10 V over the external 7.0 Ω only, forgetting the internal resistances; 1.5 A uses the 15 V battery alone.

**2. C** — *Power output of a battery being charged.* P = εI with the emf entered with the sign it takes in the loop equation. Travelling with the current you cross the 5.0 V battery + to −, so ε = −5.0 V and P = (−5.0)(1.0) = −5 W: the battery absorbs 5 W, it is being charged.

+5 W has the right size but treats the battery as discharging; 15 W is the 15 V battery's output; 10 W is the net power of the two emfs together.

**3. B** — *Junction equation at a bridge node.* At b, I₁ arrives from a and I₅ arrives from c; only I₃ leaves toward d. In = out gives I₁ + I₅ = I₃.

I₁ = I₃ + I₅ treats I₅ as leaving b, which contradicts its c-to-b arrow; I₁ + I₃ = I₅ has I₃ entering and I₅ leaving, both reversed; I₁ + I₃ + I₅ = 0 gives every current the same sign, as if all three entered.

**4. A** — *Loop equation round a bridge mesh.* a → b is with I₁, so −I₁R₁. b → c is against I₅ (its arrow runs c to b), so +I₅R₅. c → a is against I₂ (arrow a to c), so +I₂R₂. Sum to zero: −I₁R₁ + I₅R₅ + I₂R₂ = 0.

−I₅R₅ ignores the c-to-b arrow and signs the middle term by the travel direction alone; −I₂R₂ treats c → a as travelling with I₂; all three negative signs every term by travel direction with no reference to the current arrows.

**5. C** — *Reducing a three-branch parallel group in series with a resistor.* 1/R_p = 1/2.0 + 1/5.0 + 1/10 = 0.50 + 0.20 + 0.10 = 0.80 Ω⁻¹, so R_p = 1.25 Ω. R_eq = 1.25 + 2.75 = 4.0 Ω, and I = 12/4.0 = 3.0 A.

3.4 A adds the un-inverted 0.80 to 2.75 as if it were a resistance; 0.61 A adds all four resistors in series (19.75 Ω); 4.4 A ignores the parallel group and uses 12/2.75.

**6. D** — *Terminal p.d. of a battery being charged.* Walk across the battery from − to + against the current: +4.0 (emf, crossed − to +) + (0.50)(2.0) (against the current, +IR) = 5.0 V. A battery being charged has a terminal p.d. above its emf.

3.0 V subtracts Ir, which is the discharging case; 4.0 V ignores the internal resistance; 1.0 V is the Ir drop alone.

**7. A** — *Potential difference along a path with mixed elements.* Add the signed changes: with the current through 3.0 Ω gives −(2.0)(3.0) = −6.0 V; − to + through the battery gives +9.0 V; against the current through 1.0 Ω gives +(2.0)(1.0) = +2.0 V. V_b − V_a = −6.0 + 9.0 + 2.0 = 5 V, so b is 5 V above a.

13 V flips both IR signs (+6 − 2); −13 V flips the emf sign; 17 V makes every term positive.

**8. D** — *Travel direction versus current arrow.* Reversing the travel direction reverses the order in which every battery's terminals are crossed and reverses whether each resistor is walked with or against its arrow, so every term changes sign. That multiplies the whole equation by −1, which has the same solution. Only reversing a current arrow would change the sign of that current.

The other options treat the emf and IR sign rules as if they responded differently to the travel direction, or confuse the travel direction with the current arrow.

**9.** *Two-loop circuit by junction and loop rules.* Junction A: I₁ + I₃ = I₂. Loop through branch 1 and branch 2 (up branch 1, down branch 2): 12 − 2.0I₁ − 4.0I₂ = 0. Loop through branch 3 and branch 2: 6.0 − 2.0I₃ − 4.0I₂ = 0. From the loops I₁ = 6.0 − 2.0I₂ and I₃ = 3.0 − 2.0I₂; substitute into the junction: 9.0 − 4.0I₂ = I₂, so I₂ = 1.8 A, I₁ = 2.4 A, I₃ = −0.60 A. Check: V_A = 4.0 × 1.8 = 7.2 V = 12 − 2.0 × 2.4.

A correct answer gives I₁ = 2.4 A, I₂ = 1.8 A, I₃ = −0.60 A and says the negative sign means 0.60 A flows downward in branch 3, into the 6.0 V battery's positive terminal, so it is being charged. Accept I₃ = 0.60 A stated with the reversed direction.

**10.** *Potential difference between two points by two paths.* Loop clockwise with the current: −2.0I − 4.0 − 1.0I − 4.0I + 12 − 1.0I = 0, so 8.0 = 8.0I and I = 1.0 A clockwise (the 12 V battery wins). Path b → a clockwise (with the current): −(1.0)(4.0) + 12 − (1.0)(1.0) = 7.0 V. Path b → a anticlockwise (against the current): +(1.0)(1.0) + 4.0 + (1.0)(2.0) = 7.0 V. Both agree: V_ab = 7.0 V, a is 7.0 V above b.

A correct answer states I = 1.0 A and V_ab = 7.0 V from both paths, with the signs shown. Getting different values from the two paths signals a sign error and is wrong.

**11.** *Using junction and loop equations with a negative current.* Junction b: I₁ = I₃ + I₅, so I₃ = 3.0 − (−0.50) = 3.5 A. Loop a→b→c→a: −I₁(1.0) − I₅(1.0) + I₂(1.0) = 0, so I₂ = I₁ + I₅ = 3.0 − 0.50 = 2.5 A. Junction c: I₄ = I₂ + I₅ = 2.5 − 0.50 = 2.0 A. Check loop b→d→c→b: −I₃(1.0) + I₄(2.0) + I₅(1.0) = −3.5 + 4.0 − 0.50 = 0. I₅ negative means 0.50 A actually flows from c to b.

A correct answer states I₃ = 3.5 A, I₂ = 2.5 A, I₄ = 2.0 A and that 0.50 A flows c → b. Using I₃ = 2.5 A (adding the negative current the wrong way) is wrong.

**12.** *Sign of an emf term.* The sign of an emf term depends only on the order in which the battery's terminals are crossed during the traversal: − to + gives +ε, + to − gives −ε. It does not depend on which way the current flows through the battery or on whether the battery is charging or discharging. In the loop equation the battery was walked + to −, giving −4.0 V; on the second path it was walked in the opposite direction, − to +, giving +4.0 V. The battery itself is unchanged.

A correct answer says the sign is fixed by traversal direction relative to the terminals, quotes − to + as positive and + to − as negative, and states that the current direction does not affect the emf sign.
