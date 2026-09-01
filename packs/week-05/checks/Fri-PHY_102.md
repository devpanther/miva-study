# Friday — PHY_102 nightly check

*Computation on Week 5.*

*Evaluating 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ⋯ 1/R_N and inverting it. Adding series resistances.*

*Then running Dr Adeniji's Example 1 end to end.*

*The loop equation −I(4 Ω) − 4 V − I(7 Ω) + 12 V − I(2 Ω) − I(3 Ω) = 0, giving 8 V = I(16 Ω) and I = 0.5 A.*

*The potential difference V_ab = (0.5)(7) + 4 + (0.5)(4) = 9.5 V, checked by both paths.*

*The emf powers P = εI of +6 W and −2 W, and the I²R energy balance.*

*Plus setting up the junction and loop equations for a bridge.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** R₁ = 4 Ω, R₂ = 6 Ω and R₃ = 10 Ω are connected in parallel. The equivalent resistance is
A. 20 Ω
B. 0.52 Ω
C. 1.94 Ω
D. 2.40 Ω

**2.** R₁ = 3 Ω, R₂ = 5 Ω, R₃ = 9 Ω and R₄ = 10 Ω are connected in series. The equivalent resistance is
A. 27 Ω
B. 1.34 Ω
C. 0.74 Ω
D. 6.75 Ω

**3.** Example 1's loop equation is −I(4 Ω) − 4 V − I(7 Ω) + 12 V − I(2 Ω) − I(3 Ω) = 0. Solving it gives
A. I = 1.0 A
B. I = 0.5 A
C. I = 0.25 A
D. I = 2.0 A

**4.** With I = 0.5 A, Example 1 part (b) computes V_ab = (0.5)(7) + 4 + (0.5)(4). The value is
A. 3.5 V
B. 5.5 V
C. 6.0 V
D. 9.5 V

**5.** In Example 1, the power output of the emf of the 4 V battery, P = εI, comes out as
A. 6 W
B. 2 W
C. −2 W
D. −8 W

**6.** Three resistors of 3 Ω, 6 Ω and 9 Ω are connected in parallel. R_eq is
A. 1.64 Ω
B. 18 Ω
C. 0.61 Ω
D. 2.00 Ω

**7.** A single loop contains a 10 V battery and a 4 V battery connected so that they oppose each other, together with resistances of 2 Ω, 3 Ω, 4 Ω and 6 Ω. The current in the loop is
A. 0.93 A
B. 2.5 A
C. 0.67 A
D. 0.4 A

**8.** In Example 1, I = 0.5 A and the four resistances total 16 Ω. The power dissipated in all the resistances together, I²R, is
A. 8 W
B. 4 W
C. 2 W
D. 16 W

**9.** Evaluate the equivalent resistance of 4 Ω, 6 Ω and 10 Ω in parallel, showing the common denominator explicitly, and state two checks on your answer.
*(short answer)*

**10.** Write out Example 1's loop equation term by term, justify the sign of each of the six terms, and solve for I with units carried through.
*(short answer)*

**11.** Example 1 finds V_ab = 9.5 V by the lower path. Verify the same value by the upper path, and say what the agreement of the two routes demonstrates.
*(short answer)*

**12.** A bridge circuit has nodes a, b, c, d. A battery of emf 13 V sits between d and a with its + at a. The arms are a→b = 1 Ω, a→c = 1 Ω, b→c = 1 Ω, b→d = 1 Ω, c→d = 2 Ω. Assume currents I₁ (a→b), I₂ (a→c), I₃ (b→d), I₄ (c→d) and I₅ (b→c). Write the two junction equations and the loop equation for the loop a→b→c→a, and say what a solution I₅ = −1 A would mean.
*(short answer)*

## Answers

**1. C** — Over a common denominator of 60: 1/4 = 15/60, 1/6 = 10/60, 1/10 = 6/60, so 1/R_eq = 31/60 and R_eq = 60/31 = 1.94 Ω — below the smallest branch, as it must be. Option 1 adds the resistances as if they were in series. Option 2 is 31/60 left un-inverted; that number is a reciprocal resistance in Ω⁻¹, not a resistance, and it is the single most common lost mark on this slide. Option 4 drops the 1/10 term, since 1/4 + 1/6 = 5/12 inverts to 2.40 Ω.

**2. A** — R_eq = 3 + 5 + 9 + 10 = 27 Ω, which is larger than the biggest single resistor, 10 Ω — that comparison is the fastest sanity check there is. Option 2 applies the parallel formula (1/3 + 1/5 + 1/9 + 1/10 = 67/90, inverted to 1.34 Ω). Option 3 is that same parallel sum with the inversion forgotten. Option 4 is the arithmetic mean, which no rule in the deck produces.

**3. B** — The emf terms give 12 V − 4 V = 8 V and the resistance terms give 4 + 7 + 2 + 3 = 16 Ω, so 8 V = I(16 Ω) and I = 8/16 = 0.5 A. Option 1 comes from adding the emfs, 12 + 4 = 16 V, instead of subtracting — but the batteries face each other, so only their difference drives the current. Option 3 halves the emf difference by keeping only the 4 V. Option 4 inverts the division, computing 16/8; the units expose it, since a current must come out as volts divided by ohms.

**4. D** — 3.5 + 4 + 2 = 9.5 V, so a sits 9.5 V above b. Option 1 keeps only the 7 Ω term and forgets that the walk continues along the bottom branch. Option 2 loses the 4 Ω term. Option 3 loses the 7 Ω term. The independent check settles it: walking the upper path instead gives 12 − (0.5)(2) − (0.5)(3) = 12 − 1.0 − 1.5 = 9.5 V, the same number by a completely different route.

**5. C** — That battery is traversed from + to − in the direction of the current, so its emf enters as −4 V and P = (−4)(0.5) = −2 W. The negative sign says it is absorbing 2 W: the 12 V battery is driving current into its positive terminal, charging it. Option 1 is the 12 V battery's output, (12)(0.5) = 6 W. Option 2 has the right magnitude with the sign of a discharging battery. Option 4 multiplies by the wrong quantity, using the 16 Ω loop total rather than the 4 V emf.

**6. A** — Over a denominator of 18: 1/3 = 6/18, 1/6 = 3/18, 1/9 = 2/18, so 1/R_eq = 11/18 and R_eq = 18/11 = 1.64 Ω, comfortably below 3 Ω. Option 2 adds the resistances. Option 3 is 11/18 = 0.61 left un-inverted. Option 4 drops the 1/9 term, since 1/3 + 1/6 = 1/2 inverts to exactly 2 Ω — a suspiciously round answer, which is itself a warning sign.

**7. D** — Opposing emfs subtract: 10 V − 4 V = 6 V. The resistances are all in one loop, so they add: 2 + 3 + 4 + 6 = 15 Ω. Then 6 V = I(15 Ω) and I = 0.4 A, exactly the structure of Example 1. Option 1 adds the emfs to get 14 V. Option 2 divides the wrong way, 15/6. Option 3 ignores the opposing battery altogether and uses 10 V.

**8. B** — I²R = (0.5)²(16) = 0.25 × 16 = 4 W, which matches the net emf output 6 W + (−2 W) = 4 W — the energy balance that conservation of energy demands. Option 1 uses IR rather than I²R, computing (0.5)(16). Option 3 forgets to square and instead halves. Option 4 uses I = 1 A. The habit worth keeping is doing this check every time: if emf power out and I²R do not agree, a sign in the loop equation is wrong.

**9.** Model answer: 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ = 1/4 + 1/6 + 1/10. The lowest common denominator of 4, 6 and 10 is 60, giving 15/60 + 10/60 + 6/60 = 31/60. Therefore 1/R_eq = 31/60 and, inverting, R_eq = 60/31 = 1.94 Ω. Check one: the answer is smaller than 4 Ω, the smallest branch, as every parallel combination must be. Check two: the units. Each term 1/R has units of Ω⁻¹, so 31/60 is a reciprocal resistance and only becomes a resistance after inversion — an answer of 0.52 Ω would have failed both checks at once.

**10.** Model answer, starting at a and travelling counterclockwise with the current. −I(4 Ω): along the bottom, walking with the current through the 4 V battery's internal resistance, so by slide 14 the IR term is negative. −4 V: crossing that battery + terminal first, − second, so by slide 13 the emf is negative. −I(7 Ω): up the right side, with the current, negative. +12 V: crossing the 12 V battery − first, + second, so the emf is positive. −I(2 Ω): along the top, with the current, negative. −I(3 Ω): down the left side, with the current, negative, arriving back at a. The sum is zero: −I(4 Ω) − 4 V − I(7 Ω) + 12 V − I(2 Ω) − I(3 Ω) = 0. Collecting, the emfs give 12 V − 4 V = 8 V and the resistances give 4 + 7 + 2 + 3 = 16 Ω, so 8 V = I(16 Ω) and I = 8 V / 16 Ω = 0.5 A. Volts divided by ohms is amperes, confirming the units, and I is positive, so the assumed direction was correct.

**11.** Model answer: walk from b to a over the top. First the 12 V battery, crossed − then +, contributing +12 V. Then the 2 Ω resistor, travelled in the same direction as the current, contributing −I(2) = −(0.5)(2) = −1.0 V. Then down the left side through the 3 Ω, again with the current, contributing −I(3) = −(0.5)(3) = −1.5 V. Total V_ab = 12 − 1.0 − 1.5 = 9.5 V, matching the lower path's 3.5 + 4 + 2 = 9.5 V. What the agreement demonstrates is the loop rule itself: potential difference between two points does not depend on the route taken, which is the same statement as ΣV = 0 round the closed loop formed by the two paths. In an exam it is the quickest way to catch a dropped minus sign, because a single sign error makes the two routes disagree.

**12.** Model answer. At junction b, I₁ arrives while I₃ and I₅ leave, so I₁ = I₃ + I₅. At junction c, I₂ and I₅ arrive while I₄ leaves, so I₄ = I₂ + I₅. The junction at d gives I₃ + I₄ = I₁ + I₂, which is just those two added and carries no new information. For the loop a→b→c→a: a to b travels with I₁ through 1 Ω, giving −I₁(1); b to c travels with I₅ through 1 Ω, giving −I₅(1); c to a travels against I₂ through 1 Ω, giving +I₂(1). Hence −I₁ − I₅ + I₂ = 0, that is I₂ = I₁ + I₅. A solution I₅ = −1 A does not signal an error: it means the bridge arm carries 1 A flowing from c to b, opposite to the assumed arrow, with the magnitude exactly as computed. It should also be noted why Kirchhoff is needed here at all — no two arms of a bridge carry the same current and no two span the same pair of points, so neither the series nor the parallel rule applies.
