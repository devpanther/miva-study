# PHY_108 — Week 5 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 6. Notes closed.*

## Multiple choice (12)

**1.** The aim of this week's experiment is to:
A) Experimentally verify Kirchhoff's Current Law  B) Experimentally verify Kirchhoff's Voltage Law  C) Determine the internal resistance of the DC power supplies  D) Measure the values of the five variable resistors

**2.** The apparatus for this experiment consists of:
A) One DC power supply, five variable resistors, three ammeters  B) Two DC power supplies, five variable resistors, three ammeters  C) Two DC power supplies, three variable resistors, five ammeters  D) Two DC power supplies, five variable resistors, two ammeters

**3.** Kirchhoff's Voltage Law is correctly stated as:
A) The sum of currents entering a junction equals the sum leaving it  B) Around any closed loop, the algebraic sum of all voltage drops and emfs equals zero  C) The voltage across a resistor is proportional to the square of the current through it  D) Around any closed loop, the sum of voltage drops must exceed the sum of the emfs

**4.** KVL follows directly from the principle of:
A) Conservation of charge  B) Conservation of energy  C) Conservation of momentum  D) Conservation of mass

**5.** Which of the following is the correct definition of a "loop" in this circuit?
A) A point where two or more components meet  B) A single path connecting two nodes, consisting of one or more elements  C) A closed pathway formed by interconnected branches  D) The junction at which KCL is applied

**6.** Using the standard sign convention, traversing a resistor in the **same** direction as the assumed current gives:
A) A positive (rise) term  B) A negative (drop) term  C) A zero term  D) A term that depends on the resistor's value, not its direction

**7.** Using the standard sign convention, traversing a battery from its **negative** to its **positive** terminal gives:
A) A negative emf term  B) A positive emf term  C) No contribution to the loop sum  D) A term equal to IR

**8.** In the theory, equation (3) — I2R2 − I1R5 + I2R1 = −E2 — is labelled "Apply KCL to node b" a second time. By its structure (built entirely from IR terms), what is it actually?
A) A second KCL node equation  B) KVL applied to loop 2  C) Ohm's Law applied to R2  D) The definition of a branch

**9.** A single-loop circuit consists of a battery of emf 15 V (negligible internal resistance) in series with three resistors R1 = 2 kΩ, R2 = 3 kΩ and R3, carrying a steady current of 1.5 mA around the loop. Applying KVL, the voltage drop across R3, and the value of R3, are:
A) 7.5 V; 5 kΩ  B) 9.0 V; 6 kΩ  C) 5.0 V; 3.3 kΩ  D) 15 V; 10 kΩ

**10.** Using the recorded row R3 = 2.5 kΩ, R4 = 7 kΩ, R5 = 5 kΩ, I1 = 1.055 mA and I3-computed = I1 + I2 = 0.711 mA, apply loop equation (2), I3R3 + I3R4 + I1R5, and compare the result with E1 = 12 V. The left-hand side evaluates to approximately:
A) 6.75 V, showing KVL fails for this row  B) 12.03 V, closely matching E1 and supporting KVL  C) 5.28 V, about half of E1  D) 19.03 V, roughly 1.6 × E1

**11.** Before adjusting the emf of either DC supply, the student must first:
A) Press the 50 V button above the voltage-dial knob to set the maximum output range  B) Short the two ammeters together  C) Set R1–R5 to their maximum resistance  D) Disconnect one of the two loops

**12.** After I3-computed is found for a row, the experimental verification of KVL rests on:
A) Comparing I3-computed with the third ammeter's directly measured I3, expecting close agreement  B) Comparing I3-computed with I1 alone  C) Discarding I3-computed and using only the resistor values  D) Averaging I3-computed across all rows to get a single constant

## Short answer (3)

**13.** State Kirchhoff's Voltage Law in your own words. Give (a) the "sum of drops = sum of emfs" form and (b) the "algebraic sum = zero" form, and briefly state the sign convention for a resistor and for a battery.

**14.** Using the row E2 = 9 V, E1 = 15 V (R3 = 2.5 kΩ, R4 = 7 kΩ, R5 = 5 kΩ, I1 = 1.215 mA, I2 = −0.271 mA): compute I3-computed = I1 + I2, then evaluate loop equation (2), I3R3 + I3R4 + I1R5, and compare the result to E1. What does the agreement (or disagreement) tell you about KVL?

**15.** List and briefly justify three precautions a student should observe when running this KVL experiment, drawing on apparatus setup, sign/direction bookkeeping, and data-row consistency.

## Answers

**1. B** — *aim*: the stated aim is to experimentally verify Kirchhoff's Voltage Law; Week 4 verified Kirchhoff's Current Law on the same style of circuit.
**2. B** — *apparatus*: a breadboard (not itself an option here), two DC power supplies, five variable resistors (R1–R5), three ammeters, and connecting cables.
**3. B** — *KVL statement*: around any closed loop, the algebraic sum of voltage drops and emfs is zero; option A describes KCL, C misstates Ohm's law, and D is simply false (the sums are equal, not one exceeding the other).
**4. B** — *basis of KVL*: KVL is a direct consequence of conservation of energy — a charge returning to its starting point around a loop has zero net change in potential energy.
**5. C** — *definitions*: option A defines a node, option B defines a branch, and a loop is the closed pathway formed by interconnected branches; option D is not a definition of anything in the theory.
**6. B** — *sign convention (resistor)*: traversing a resistor in the same direction as the assumed current represents a potential drop, i.e. a negative term in the loop sum.
**7. B** — *sign convention (battery)*: traversing a battery from − to + is a potential rise, i.e. a positive emf term. (Note: the source theory slide states this backwards — use this standard rule, which also matches the correct statement in this week's companion PHY_102 material.)
**8. B** — *equation identification*: equation (3) is built entirely from IR terms (I2R2, I1R5, I2R1) equated to an emf, which is the structure of a loop (KVL) equation, not a node current sum — it is KVL applied to loop 2, mislabelled in the source.
**9. A** — *calculation*: V_R1 = 1.5 mA × 2 kΩ = 3 V; V_R2 = 1.5 mA × 3 kΩ = 4.5 V; by KVL, V_R3 = 15 V − 3 V − 4.5 V = 7.5 V; R3 = 7.5 V ÷ 1.5 mA = 5 kΩ. Option B wrongly assumes a 9 V drop split evenly; C subtracts incorrectly; D treats the full emf as a single drop across R3 alone.
**10. B** — *calculation*: I3(R3+R4) = 0.711 mA × 9.5 kΩ = 6.75 V; I1R5 = 1.055 mA × 5 kΩ = 5.28 V; sum ≈ 12.03 V, which closely matches E1 = 12 V and supports KVL for this row. Option A gives only the first term, C only the second, and D wrongly adds instead of using the correct products.
**11. A** — *setup step*: the 50 V button above the voltage-dial knob must be pressed on both supplies first, to fix their maximum output range before the emf is dialled in.
**12. A** — *comparison*: I3-computed is compared against the third ammeter's directly measured I3; close agreement between the calculated (loop-equation) and experimental values is the experimental verification of KVL.
**13.** *KVL in words*: around any closed loop in a circuit, the total potential change must be zero, because a charge that returns to its starting point after a full loop has no net change in potential energy (conservation of energy). *Two equivalent forms*: (a) sum of voltage drops across the branches in the loop = sum of the emfs of the batteries in the loop; (b) the algebraic sum of all voltage changes around the loop is zero. *Sign convention*: a resistor traversed in the same direction as the assumed current gives a negative (drop) term, traversed against it gives a positive (rise) term; a battery traversed from − to + gives a positive emf term, traversed + to − gives a negative emf term.
**14.** *Calculation*: I3-computed = I1 + I2 = 1.215 + (−0.271) = 0.944 mA. Loop equation (2): I3R3 + I3R4 + I1R5 = 0.944 mA × 9.5 kΩ + 1.215 mA × 5 kΩ = 8.968 V + 6.075 V = 15.04 V. *Explanation*: this is very close to E1 = 15 V, so the loop equation built from the assumed current directions and sign convention balances against the supplied emf — this agreement between the calculated loop sum and the actual supply voltage is what experimentally verifies KVL for this row.
**15.** *Precautions* (any three): wire R1–R5 exactly as the circuit diagram specifies, since a misplaced resistor changes every loop equation and invalidates the row; press the 50 V range button on both supplies before dialling in the emf, so the output is not clipped or misread; fix one consistent traversal direction (clockwise or counter-clockwise) per loop before assigning + / − signs to IR and emf terms, since mixing directions mid-loop is the most common source of a wrong KVL sum even when the circuit itself is correct; read I1, I2 (and I3, where measured) from the same recorded row before computing I3-computed = I1 + I2, since mixing values from different rows breaks the comparison; and note the sign of each ammeter reading (I2 is negative throughout) before using it, since dropping a sign makes every downstream loop calculation wrong even though the magnitudes look reasonable.
