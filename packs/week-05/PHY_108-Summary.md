# PHY_108 — Week 5 Summary

*General Physics Practical II · Week 5 (5–11 Oct 2026) · Experiment: Verification of Kirchhoff's Voltage Law (KVL)*

## The 8 most examinable things this week

1. **KVL (statement)**: around any closed loop in a circuit, **the sum of the voltage drops across all branches in the loop equals the sum of the emfs of the batteries in the loop** — equivalently, **the algebraic sum of all voltages around a closed loop is zero**. Σε = ΣIR, or ΣV = 0. Know both wordings.
2. **KVL rests on conservation of energy** (a charge taken once round a loop returns to the same potential). **KCL rests on conservation of charge**. That one-line pairing is a standard mark.
3. **Sign convention — resistors**: the potential difference is **positive if the resistance is traversed in the same direction as the current flowing through it, and negative otherwise**.
4. **Sign convention — sources**: the emf of the battery is **positive if the battery is traversed from its positive terminal to its negative terminal in the loop, and negative otherwise**.
5. **Last week vs this week**: KCL applies at a **node/junction** (ΣI_in = ΣI_out), verified with **ammeters in series** in each branch; KVL applies around a **closed loop/mesh**, and voltages are measured with a **voltmeter in parallel** across each element. Junctions vs loops; series vs parallel.
6. **Definitions**: a **node** is a point where two or more components meet; a **branch** is a single path connecting two nodes; a **loop (mesh)** is a closed pathway formed by interconnected branches.
7. **The three working equations** of this experiment (KCL at node b, KVL round loop 1, KVL round loop 2): **I₁ + I₂ = I₃** … (1); **I₃R₃ + I₃R₄ + I₁R₅ = E₁** … (2); **I₂R₂ − I₁R₅ + I₂R₁ = −E₂** … (3). Solve simultaneously for I₁, I₂, I₃.
8. **The verification**: solve (1)–(3) analytically, then compare the **computed I₃ with the measured I₃**; agreement (conventionally within **5%**) verifies KVL. A **negative current** (I₂ came out negative) simply means the true direction is opposite to the one assumed — it is not an error.

## Aim and apparatus

**Aim**: verification of Kirchhoff's voltage law.

**Apparatus**: breadboard; **two DC power supplies** (E₁ and E₂); **five variable resistors** (R₁–R₅); **three ammeters** (one per branch, for I₁, I₂, I₃); connection cables.

Note there is **no voltmeter in the apparatus list** — this KVL circuit is verified *indirectly*, through the branch currents predicted by the KVL loop equations. In the simpler textbook demonstration (one battery, resistors in series) a **voltmeter is connected in parallel across each resistor** and you check V_battery = V_R1 + V_R2.

## The circuit and how it is connected

Two loops sharing the middle branch that carries R₅:

- **Loop 1**: E₁ → R₃ → R₄ (carrying I₃) → the shared branch R₅ (carrying I₁) and back to E₁.
- **Loop 2**: E₂ → R₁ → R₂ (carrying I₂) → the same shared branch R₅ and back to E₂.
- **Node b** is where the three branches meet: I₁ and I₂ flow in, I₃ flows out, so **I₁ + I₂ = I₃**.
- Each **ammeter is in series** in its own branch (it must carry that branch's current, so it is made of very low resistance). A **voltmeter, where used, goes in parallel** across the element (it must share the p.d., so it is made of very high resistance).
- Both DC supplies feed the network; **R₅ is the shared branch**, which is why I₁ appears in both loop equations with opposite signs.

## Procedure (in order)

1. Select values for **R₁ through R₅** and connect the circuit as shown.
2. Set the **maximum output of both DC supplies to 50 V** (press the 50 V button above the voltage dial).
3. **Adjust both emfs to 9 V** with the voltage dial knob.
4. Click **Record** to log the readings of the **three ammeters** (I₁, I₂, I₃).
5. **Increase the emf in regular 3 V steps** and repeat step 4 (the sample table runs 9 V → 12 V → 15 V).
6. **Substitute** the resistances and emfs used into equations (1), (2) and (3).
7. **Solve** the equations for I₁, I₂ and I₃.
8. **Repeat** for different values of the resistances and the emfs.
9. **Compare** the calculated values with the experimental values and **comment on the result**.

## Table of readings

| R₁ (kΩ) | R₂ (kΩ) | R₃ (kΩ) | R₄ (kΩ) | R₅ (kΩ) | E₂ (V) | E₁ (V) | I₁ (mA) | I₂ (mA) | I₃ (mA) | I₃ computed (mA) |
|---|---|---|---|---|---|---|---|---|---|---|
| 10 | 1 | 2.5 | 7 | 5 | 9 | 9 | 0.895 | −0.416 | 0.479 | |
| 10 | 1 | 2.5 | 7 | 5 | 9 | 12 | 1.055 | −0.344 | 0.711 | |
| 10 | 1 | 2.5 | 7 | 5 | 9 | 15 | 1.215 | −0.271 | 0.944 | |

Work in **kΩ with mA** and the products come out directly in **volts** (kΩ × mA = V) — no conversion needed. The last column is the value you compute from (1)–(3); the comparison of the last two columns is the verification.

## Worked example (row 1: E₁ = E₂ = 9 V)

(2): I₃(2.5 + 7) + 5I₁ = 9, and with I₃ = I₁ + I₂ → **14.5I₁ + 9.5I₂ = 9**.
(3): I₂(1 + 10) − 5I₁ = −9 → **11I₂ − 5I₁ = −9**, so I₂ = (5I₁ − 9)/11.
Substituting: 159.5I₁ + 47.5I₁ − 85.5 = 99 → 207I₁ = 184.5 → **I₁ = 0.891 mA**; **I₂ = −0.413 mA**; **I₃ = 0.478 mA**.
Measured I₃ = 0.479 mA. **% difference = |0.479 − 0.478|/0.478 × 100% ≈ 0.2%** — well inside the 5% tolerance, so KVL is verified.

## Precautions and sources of error

- **Assume and mark current directions on the diagram first**, then keep those directions throughout; a sign flipped halfway destroys the equations.
- **Traverse each loop in one consistent sense** (all clockwise, or all anticlockwise) and apply the two sign rules above without exception.
- **Zero error** on the ammeters — check each reads zero before the supply is switched on and correct every reading.
- **Parallax error** — read the pointer with the eye perpendicular to the scale.
- **Contact/lead resistance** — loose or dirty terminals on the breadboard add unwanted resistance and shift the currents; press connections home and use clean short leads.
- **Heating of the resistors** at higher emf raises their resistance; keep currents small and do not leave the supply on between readings.
- **Do not exceed meter ranges**; observe correct **polarity** on meters and supplies, and cross-check that the supplies are still at the set emf (loading can pull them down).
- **Internal resistance of the sources** is neglected in equations (2) and (3); it is a systematic reason for a small residual disagreement.
- **Rounding** — carry enough significant figures through the simultaneous equations before comparing.

## Commonly confused

- **KCL vs KVL** — KCL: at a **junction**, conservation of **charge**, ΣI_in = ΣI_out. KVL: round a **loop**, conservation of **energy**, Σε = ΣIR. Last week was junctions; this week is loops.
- **Ammeter vs voltmeter** — ammeter **in series**, low resistance, reads branch current; voltmeter **in parallel**, high resistance, reads p.d. across an element.
- **Node vs branch vs loop** — a point, a path between two points, a closed path.
- **"Sum of voltage drops = sum of emfs" vs "algebraic sum = 0"** — the same law; the second just moves the emfs to the other side with their signs.
- **A negative current is not a wrong answer** — it means the assumed direction was opposite to the actual one; the magnitude still stands.
- **kΩ × mA = V** — mixing kΩ with A (or Ω with mA) throws the answer out by 1000.

*Note: the circuit diagram, the node/loop labelling and the walk-through video are carried by slide images, and the extracted text is garbled in places (missing "fi"/"ff" ligatures; equation (3) is captioned "Apply KCL to node b" when it is in fact KVL round loop 2; step 5 says "increase E₂" while the table actually steps E₁ from 9 V to 15 V with E₂ fixed at 9 V; no percentage tolerance is quoted). The circuit description, the 5% acceptance criterion and the precautions above are the standard treatment supplied to fill those gaps.*
