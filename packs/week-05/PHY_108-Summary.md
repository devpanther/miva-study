# PHY_108 — Week 5 Summary

*General Physics Practical II · Week 5 (5 – 11 Oct 2026) · Topic: Experiment on Verification of Kirchhoff's Voltage Law (KVL)*

## The 7 most examinable things this week

1. **Aim**: to experimentally verify Kirchhoff's Voltage Law (KVL) — following on from Week 4, which verified Kirchhoff's **Current** Law (KCL) on the same style of circuit.
2. **KVL, stated precisely**: around any closed loop (mesh) in a circuit, the sum of all voltage drops across the branches in the loop equals the sum of the emfs of the batteries in the loop. Equivalently: around any closed loop, the **algebraic sum of all voltage changes is zero**. KVL follows from **conservation of energy** — a charge that returns to its starting point around a loop has zero net change in potential energy.
3. **Sign convention (learn the standard form)**: traversing a **resistor in the same direction as the assumed current** gives a potential **drop** (negative term); traversing it **opposite** to the assumed current gives a potential **rise** (positive term). Traversing a **battery from − to +** terminal gives a positive emf term; traversing **+ to −** gives a negative emf term. *(The source theory slide states both of these backwards — see Commonly confused.)*
4. **Node, branch, loop — the vocabulary this experiment is built on**: a **node** is a point where two or more components meet; a **branch** is a single path connecting two nodes; a **loop (mesh)** is a closed path formed by interconnected branches. Verifying KVL means checking that the voltage-drop bookkeeping works out around a *loop*, not at a node.
5. **Apparatus**: identical to Week 4 — a breadboard, **two** DC power supplies (E1, E2), **five** variable resistors (R1–R5), **three** ammeters, and connecting cables.
6. **The three simultaneous equations solved for this circuit**: (1) KCL at node b: I1 + I2 = I3; (2) KVL around loop 1: I3R3 + I3R4 + I1R5 = E1; (3) KVL around loop 2: I2R2 − I1R5 + I2R1 = −E2. *(The source mislabels equation 3 as "Apply KCL to node b" a second time — it is plainly a second loop equation, built from resistor IR terms, not a node current-sum. Learn it as "loop 2".)* Solving all three simultaneously (analytically) gives I1, I2, I3 — this experiment uses KCL **and** KVL together, which is why the learning objectives list both laws.
7. **Table and comparison**: for each row the resistor values (R1–R5), both emfs, and the branch currents I1, I2 are recorded; **I3-computed = I1 + I2** is then found and compared against the **third ammeter's directly measured I3**. Close agreement supports the loop equations (and hence KVL) used to derive them. As in Week 4, the source table's separate "measured I3" column did not survive PDF extraction — treat "compare computed I3 against measured I3" as the method, using the worked I3-computed values below as the reference calculation.

## Apparatus and circuit

Breadboard, two DC power supplies (E1, E2), five variable resistors R1–R5, three ammeters (one per branch current I1, I2, I3), and connecting cables. R1–R5 are wired on the breadboard exactly as the given circuit diagram shows, forming a two-loop network with node b joining the branches carrying I1, I2 and I3.

## Procedure

1. Select the values of R1 through R5 and connect the circuit as shown in the given diagram.
2. Set the maximum output voltage of **both** DC power supplies to 50 V by pressing the 50 V button above the voltage-dial knob.
3. Adjust the emfs of both supplies to 9 V using the voltage-dial knob.
4. Click **Record** to log the readings of the three ammeters.
5. Increase E2 at regular **3 V** intervals and repeat step 4 at each new value.
6. Substitute the resistance and emf values used into Equations (1), (2) and (3).
7. Solve the three simultaneous equations analytically for I1, I2 and I3.
8. Repeat the above for different resistance and emf values.
9. Compare the calculated values against the experimental (measured) values and comment on the results.

## Data analysis and comparison

Sample recorded rows (R1 = 10 kΩ, R2 = 1 kΩ, R3 = 2.5 kΩ, R4 = 7 kΩ, R5 = 5 kΩ, E2 = 9 V):

| E1 (V) | I1 (mA) | I2 (mA) | I3-computed = I1+I2 (mA) |
|---|---|---|---|
| 9  | 0.895 | −0.416 | 0.479 |
| 12 | 1.055 | −0.344 | 0.711 |
| 15 | 1.215 | −0.271 | 0.944 |

- These are worked from Equations (1)–(3): solving the loop and node equations analytically gives I1, I2, I3 for each set of resistances and emfs; I3-computed = I1 + I2 is the check value.
- Compare I3-computed against the **third ammeter's directly measured I3** for the same row — reasonable agreement is the experimental verification of KVL (via the loop equations that produced I1 and I2).
- *Source note*: this week's recorded table is numerically identical to Week 4's KCL table — a likely re-use of the same sample data across both practical write-ups. Treat the **method** (build the three equations, solve, compare) as what is examinable, not this specific numeric set.

## Precautions and sources of error

- Wire R1–R5 exactly as the circuit diagram specifies — a swapped resistor position changes every loop equation and invalidates the row.
- Press the **50 V** range button on both supplies *before* dialling in the emf, so neither supply is clipped or misread partway through the run.
- Fix a **consistent traversal direction** (clockwise or counter-clockwise) for each loop before assigning signs to IR and emf terms — mixing directions mid-loop is the single most common way to get KVL "wrong" on paper even when the circuit is right.
- Keep the emf step size a consistent **3 V** and record with **Record** after every step.
- Read I1, I2 (and I3, where measured) from the **same recorded row** before computing I3-computed = I1 + I2 — pairing values from different rows silently breaks the comparison.
- Note the **sign** on each ammeter reading (I2 is negative throughout) before using it — dropping a sign makes every downstream calculation wrong even though the magnitudes look reasonable.

## Commonly confused

- **KVL vs KCL** — KVL sums *voltages* to zero around a *loop* (conservation of energy); KCL sums *currents* to zero at a *node/junction* (conservation of charge). This week verifies KVL; Week 4 verified KCL. This experiment's circuit needs **both** laws together (one KCL equation, two KVL equations) to solve for I1, I2, I3.
- **Loop vs junction** — a junction (node) is a *point*; a loop (mesh) is a *closed path* made of branches. KVL is evaluated by traversing a loop, term by term, not by looking at any single point.
- **Sign convention, correctly**: resistor traversed **with** the assumed current → drop (negative term); traversed **against** it → rise (positive term). Battery traversed **− to +** → positive emf term; **+ to −** → negative. *The source theory slide states the resistor rule and the battery rule the wrong way round; use the standard rule above — it is also the rule the same week's companion material (PHY_102) states correctly.*
- **Equation (3) is a loop equation, not a node equation** — the source labels it "Apply KCL to node b" a second time; by its structure (I2R2 − I1R5 + I2R1 = −E2, built from IR terms) it is KVL applied to loop 2.
- **"I3-computed" here means I1 + I2**, purely because the table's separate measured-I3 column did not survive extraction (same issue as Week 4) — don't confuse it with a value read directly off the third ammeter.
- **Kirchhoff's laws, correctly attributed**: both laws were formulated by **Gustav Kirchhoff**, a German physicist, in **1845** — not a Russian scientist.
