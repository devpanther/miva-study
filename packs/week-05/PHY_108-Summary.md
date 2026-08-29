# PHY_108 — Week 5

*General Physics Practical II · Week 5 (5 – 11 Oct 2026)*

## Most likely to be examined

1. **Statement of KVL** — around any closed loop, the algebraic sum of all voltage drops is zero; equivalently, the sum of the voltage drops across the branches in the loop equals the sum of the emfs of the batteries in that loop. It rests on **conservation of energy**.
2. **The two sign rules**, stated exactly: a potential difference across a resistance is **positive if the resistance is traversed in the same direction as the current** flowing through it, negative otherwise; an emf is **positive if the battery is traversed from its positive terminal to its negative terminal**, negative otherwise.
3. **Definitions**: node (a point where two or more components meet), branch (a single path connecting two nodes, containing one or more elements), loop/mesh (a closed pathway formed by interconnected branches).
4. **The three circuit equations** and which law each comes from — one KCL node equation and two KVL loop equations (the deck mislabels the third; see the flag below).
5. **Apparatus list** — breadboard, **two** DC power supplies, **five** variable resistors, **three** ammeters, connection cables.
6. **Procedure order**, especially: set both supplies' maximum output to 50 V (the 50 V button) *before* dialling the emfs to 9 V; Record all three ammeters; then step the emf up in **3 V** intervals.
7. **How the law is verified** — measured currents compared against currents computed by solving the simultaneous equations; agreement verifies KVL.
8. **The sign of I2** — it comes out **negative**, meaning the true current direction is opposite to the direction assumed on the diagram. A negative answer is not an error.

## Aim

Verification of Kirchhoff's Voltage Law (KVL).

## Apparatus

Breadboard; two DC power supplies; five variable resistors (R1–R5); three ammeters; connection cables.

## Theory

- **Node** — a point or junction where two or more components (wires, electrical devices) meet.
- **Branch** — a single path connecting two nodes, consisting of one or more components in series or parallel.
- **Loop (mesh)** — a closed pathway within the circuit formed by interconnected branches.
- **KVL** — based on the principle of conservation of energy. Around any closed path, the sum of all voltage drops on all branches within the loop equals the sum of the emfs of the batteries within the loop; equivalently, the algebraic sum of all voltage drops around the loop is zero.
- **KCL** (used as the supporting equation here) — the sum of currents entering a node equals the sum of currents leaving it.

**Sign convention (as given in the deck):**
- Potential difference across a resistance: **positive** if the resistance is traversed in the same direction as the current flowing through it; **negative** otherwise.
- Emf of a battery: **positive** if the battery is traversed from its **positive terminal to its negative terminal**; **negative** otherwise.

**The circuit equations.** Symbols: E1, E2 are the two supply emfs; R1…R5 the five resistances; I1, I2, I3 the branch currents; b is the node.

- (1) KCL at node b: **I1 + I2 = I3**
- (2) KVL around loop 1: **I3·R3 + I3·R4 + I1·R5 = E1**
- (3) KVL around loop 2: **I2·R2 − I1·R5 + I2·R1 = −E2**

> **Error in the deck — do not reproduce.** The slide introduces equation (3) with "Apply KCL to node b". It is not a node equation: every term is a voltage (IR products and an emf), so it is a **KVL loop equation** for loop 2. This is the same class of slip as last week's deck. Read (3) as KVL. Its minus signs are the sign convention at work: traversing loop 2 goes *against* I1 through the shared resistor R5, and *against* the driving sense of E2.

Solving (1)–(3) simultaneously (analytically) gives I1, I2 and I3.

## Procedure (in order)

1. Select the values of R1 through R5 and connect the circuit as shown.
2. Set the maximum output voltage of **both** DC power supplies to 50 V by pressing the 50 V button above the voltage dial.
3. Adjust the emfs of both supplies to 9 V using the voltage-dial knob.
4. Click the **Record** button to record the readings of the three ammeters.
5. Increase the emf at regular **3 V** intervals and repeat step 4.
6. Substitute the values of the resistances and emfs used into equations (1), (2) and (3).
7. Solve the equations for I1, I2 and I3.
8. Repeat the above steps for different values of the resistances and of the supply emfs.
9. Compare the calculated values with the experimental values and comment on the results.

## What is measured, and how KVL is verified

**Measured:** the three branch currents I1, I2 and I3 on the three ammeters, at each setting of the resistances and emfs. Note that the quantities read are **currents, not voltages** — there is no voltmeter in the apparatus list.

**Verification:** the resistance and emf values actually used are substituted into the KCL/KVL equations, which are solved analytically for I1, I2 and I3. The computed I3 is tabulated in a column beside the measured I3. If computed and measured currents agree within experimental uncertainty at every setting — and continue to agree when the resistances and emfs are changed — the loop equations, and hence KVL, are verified.

**Sample data** (R1 = 10 kΩ, R2 = 1 kΩ, R3 = 2.5 kΩ, R4 = 7 kΩ, R5 = 5 kΩ, E2 = 9 V; kΩ multiplied by mA gives volts directly, so no unit conversion is needed):

| E1 (V) | I1 (mA) | I2 (mA) | I3 (mA) |
|---|---|---|---|
| 9  | 0.895 | −0.416 | 0.479 |
| 12 | 1.055 | −0.344 | 0.711 |
| 15 | 1.215 | −0.271 | 0.944 |

Two things the table shows at a glance: **I1 + I2 = I3 in every row** (KCL holds), and **I2 is negative** — the direction assumed for I2 on the diagram is opposite to the actual one. Solving (1)–(3) for the first row gives I1 = 0.891, I2 = −0.413, I3 = 0.478 mA, matching the measured values to about 1 %.

## Precautions and sources of error

*The deck has no precautions slide and no sources-of-error slide; the following are derived from its stated procedure and theory.*

**Precautions**
- Press the 50 V range button **before** dialling the emfs, so the voltage dial reads on the correct range.
- Set both supplies to exactly 9 V at the start, and step only in exact 3 V intervals.
- Connect the ammeters **in series** in their branches and observe polarity, so a reversed current registers as a negative reading rather than reading zero or deflecting off-scale.
- Fix the assumed direction of each current on the diagram before recording, and keep that assignment unchanged for all readings — the signs in equations (2) and (3) depend on it.
- Traverse each loop consistently in one direction when applying the sign convention.
- Check that every breadboard connection is firm before switching on; a loose lead adds unknown series resistance.
- Substitute the resistance values actually set (measured), not the nominal ones, into the equations.
- Do not exceed the supplies' rated output, and switch off before rewiring.

**Sources of error**
- Tolerance and setting error of the variable resistors: the resistance substituted into the equations differs from the resistance actually in the circuit.
- Instrumental error in the ammeters — calibration error, limited resolution of the last digit, parallax on an analogue scale.
- The finite internal resistance of the ammeters, added in series with each branch, lowers the measured currents slightly below the ideal computed values.
- Internal resistance of the DC supplies, so the terminal voltage is slightly below the dialled 9 / 12 / 15 V.
- Contact and lead resistance at breadboard connections.
- Drift of the supply voltage and heating of the resistors during a run.
- Rounding when solving the simultaneous equations, and sign errors when reading or recording a reversed current.

## Commonly confused

- **KVL vs. KCL.** *Discriminating test:* look at what the equation contains. A **KCL** equation is written at a **node** and contains **currents only** — no resistances and no emfs (e.g. I1 + I2 = I3). A **KVL** equation is written around a **closed loop** and every term has units of volts — IR products and emfs (e.g. I3R3 + I3R4 + I1R5 = E1). KCL expresses conservation of **charge** at a point; KVL expresses conservation of **energy** around a path. This is exactly the trap the deck falls into when it labels equation (3) "KCL".
- **"Sum of drops = sum of emfs" vs. "algebraic sum = 0".** These are the same law rearranged. The deck's two sign rules belong to the **sum-of-drops-equals-zero** form, in which a battery traversed from + to − counts as a positive drop. If instead you put the drops on the left and the emfs on the right, an emf counts **positive on the right when traversed from − to +**. Choose one form and stay in it; mixing the two flips a sign.
- **A negative current is not a wrong answer.** I2 < 0 simply means the real direction is opposite to the arrow assumed on the diagram; the magnitude is still correct. Do not "fix" it by dropping the minus sign.
- **This experiment measures currents, not voltages.** The KVL loop equations are verified *through* the currents they predict. Do not write that voltmeter readings were taken.
- **Branch vs. loop.** A branch is a single path between two nodes; a loop is closed and returns to its starting point.
- **R5 is the shared branch.** It carries I1 and appears in both loop equations, with opposite sign in each because the two loops traverse it in opposite senses. Getting that sign wrong is the commonest route to a wrong I2.
