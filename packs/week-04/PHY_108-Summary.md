# PHY_108 — Week 4 Summary

*General Physics Practical II · Week 4 (28 Sep–4 Oct 2026) · Topic: Kirchhoff's Current Law & the Experiment to Verify KCL*

## The 8 most examinable things this week

1. **KCL (statement 1)**: *The sum of the currents that enter a junction (node) equals the sum of the currents that leave it.* **ΣI_in = ΣI_out**.
2. **KCL (statement 2, the sign-convention form)**: *The algebraic sum of all currents entering and leaving a junction is zero*, **currents entering counted positive and currents leaving counted negative**. ΣI = 0. Both forms earn marks; the second one must carry the sign convention.
3. **Physical basis**: KCL is a consequence of **conservation of electric charge** — charge is neither created nor destroyed nor allowed to pile up at a junction. (KVL, the second law, is conservation of energy, not examined this week.)
4. **The node equation for this experiment**: at node b, **I₁ + I₂ = I₃**, equivalently **−I₁ − I₂ + I₃ = 0**. The slides label this "the KVL equation" — that is a typo in the slide; it is **KCL**.
5. **The verification**: compute **I₃(computed) = I₁ + I₂** from the measured branch currents, put it beside the **directly measured I₃**, and comment. Agreement is expected to be very close — quote a **percentage difference = |I₃(computed) − I₃(measured)|/I₃(measured) × 100%**, acceptable within about **5%**.
6. **A negative ammeter reading is a result, not an error**: I₂ came out negative (e.g. −0.416 mA), meaning that branch current actually flows **out of** the node, opposite to the assumed direction. Keep the sign and add algebraically — do **not** take the magnitude.
7. **Meter placement**: **ammeter in series** in each branch whose current you want (it must carry that branch's whole current, hence very low resistance); a **voltmeter would go in parallel** across a component. Three ammeters, one per branch at the junction.
8. **Apparatus**: breadboard, **two** DC power supplies (E₁ and E₂), **five** variable resistors (R₁–R₅), **three** ammeters, connection cables.

## Aim and objectives

**Aim**: to experimentally verify Kirchhoff's Current Law.

Objectives: state KCL for electric circuits, and apply KCL at node (junction) points in an electric circuit.

## Theory in full

Circuit analysis rests on two laws published by **Kirchhoff in 1845**:
- **Kirchhoff's First Law = Current Law (KCL)** — at a junction, ΣI_in = ΣI_out; conservation of **charge**.
- **Kirchhoff's Second Law = Voltage Law (KVL)** — round any closed loop, ΣV = 0; conservation of **energy**.

A **junction (node)** is any point where three or more conductors meet. A **branch** is a conductor between two nodes.

At node b: **I₁ + I₂ = I₃** … (1), and in the algebraic form **−I₁ − I₂ + I₃ = 0** with entering currents positive.

> The slides say "the Russian scientist Justa Kirchho" — the extractor has mangled the name and the slide itself is wrong on nationality. He is **Gustav Robert Kirchhoff, a German physicist (1824–1887)**, and the laws date from **1845**. If the exam quotes the slide, the safe answer is the one on the slide (**1845**); the name and nationality are unlikely to be tested.

## Circuit and how it is connected

Two DC sources E₁ and E₂ drive current into a common node through the resistor network R₁–R₅ on the breadboard; the three branches meeting at the node each carry an ammeter.

- **Every ammeter is in series** with its branch — it must carry the entire current of that branch, and it is built with **very low resistance** so it hardly disturbs the circuit.
- **A voltmeter, if used, goes in parallel** across the component — components in parallel share the same p.d., and its **very high resistance** means it draws almost no current.
- The **sign of each ammeter reading depends on which way round its terminals are connected**; fix a direction for each branch before you start and keep it, then let the signs fall out.
- Both supplies are set to the **50 V range** (press the 50 V button above the voltage dial) before the emfs are dialled down to the working values.

## Procedure (as done in the virtual lab)

1. Select the values of **R₁ to R₅** and connect the circuit as shown in the diagram.
2. Press the **50 V button** above the voltage dial on **both** DC power supplies to set their maximum output to 50 V.
3. Adjust the **emfs of both supplies to 9 V** with the voltage dial knob.
4. Click **Record** to log the readings of the **three ammeters**.
5. **Increase the emf in regular 3 V steps** and repeat step 4 for each new value.
6. **Save the Excel file** that is downloaded, and analyse it.

## Table of readings

| R₁ (kΩ) | R₂ (kΩ) | R₃ (kΩ) | R₄ (kΩ) | R₅ (kΩ) | E₂ (V) | E₁ (V) | I₁ (mA) | I₂ (mA) | I₃ (mA) | I₃-computed (mA) |
|---|---|---|---|---|---|---|---|---|---|---|
| 10 | 1 | 2.5 | 7 | 5 | 9 | 9 | 0.895 | −0.416 | 0.479 | **0.479** |
| 10 | 1 | 2.5 | 7 | 5 | 9 | 12 | 1.055 | −0.344 | 0.711 | **0.711** |
| 10 | 1 | 2.5 | 7 | 5 | 9 | 15 | 1.215 | −0.271 | 0.944 | **0.944** |

- The **five resistances stay fixed**; one emf is held at 9 V while the other is stepped 9 → 12 → 15 V.
- Fill the last column with **I₃-computed = I₁ + I₂**, keeping signs: 0.895 + (−0.416) = **0.479 mA**; 1.055 − 0.344 = **0.711 mA**; 1.215 − 0.271 = **0.944 mA**.
- **What is compared with what**: the *computed* I₃ (from I₁ + I₂) against the *measured* I₃ read off the third ammeter, row by row. Here they match to three decimal places → **percentage difference ≈ 0%**, so KCL is verified. In a real lab, agreement **within about 5%** is accepted; a larger discrepancy means an experimental fault, not a failure of the law.

## Worked example (case study circuit)

A 6 V supply feeds three resistors in parallel, R₁ = 1 kΩ, R₂ = 3 kΩ, R₃ = 2 kΩ. Each has the full 6 V across it, so
I_R1 = 6/1000 = **6 mA**, I_R2 = 6/3000 = **2 mA**, I_R3 = 6/2000 = **3 mA**.
By KCL at the top node, **I_total = I_R1 + I_R2 + I_R3 = 11 mA**; after the first branch the wire carries I_R2 + I_R3 = 5 mA, and after the second only I_R3 = 3 mA — which is exactly what the labels on the case-study diagram show. This is the standard use of KCL: **in a parallel circuit the supply current is the sum of the branch currents**.

## Mid-lesson questions

- **Q1 (state KCL in your own words)**: the total current entering a junction equals the total current leaving it; current is conserved at a node because charge is conserved.
- **Q2 (2 A enters a three-branch junction — how much leaves?)**: **2 A** in total. Whatever enters must leave; how it splits between the two outgoing branches depends on their resistances, but the total is fixed.

## Sources of error

- **Ammeter loading**: each meter has a small but non-zero internal resistance, so inserting it slightly reduces the branch current it is measuring.
- **Zero error** on any of the three ammeters — a constant offset on one branch breaks the balance I₁ + I₂ = I₃.
- **Parallax** when reading analogue scales; **rounding/resolution** of the display (readings quoted to 3 decimal places in mA).
- **Contact and lead resistance** at breadboard holes and loose terminals — a poor contact starves one branch.
- **Tolerance of the resistors** (a nominal 10 kΩ is not exactly 10 kΩ) and **drift/instability of the DC supplies**.
- **Heating**: current warms the resistors, raising R and changing the currents during a run.
- **Reversed polarity / wrong sign convention** — the commonest way to make the numbers "fail" KCL.

## Precautions

- Check and **correct the zero** of all three ammeters before closing the circuit.
- **Set the 50 V range first**, then dial the emf — never apply more than the meters and resistors can take.
- Connect ammeters **in series only, with correct polarity**, and record the sign the meter gives.
- **Decide and label the assumed current direction** in every branch before taking readings, and keep it for the whole run.
- Push components firmly into the breadboard and **tighten all connections**; use clean, short leads.
- Allow the readings to **settle** before clicking Record; take readings at several emf values, not one.
- Keep the current small / switch off between runs so the resistors do not heat.

## Commonly confused

- **KCL vs KVL** — KCL is about **currents at a junction** (charge conserved); KVL is about **voltages round a loop** (energy conserved). The slide that writes "Using the KVL equation I₁ + I₂ = I₃" is mislabelled; that equation is KCL.
- **"Sum entering = sum leaving" vs "algebraic sum = 0"** — the same law. The second form only works if you apply the convention **entering positive, leaving negative**.
- **Negative current vs wrong reading** — a minus sign just means the true direction is opposite to the one assumed; add it algebraically rather than discarding it.
- **Ammeter vs voltmeter** — ammeter **in series**, low resistance; voltmeter **in parallel**, high resistance.
- **Node vs branch vs loop** — the node is the meeting point (KCL applies there); the loop is the closed path (KVL applies there).
- **mA vs A** — the table is in **mA**; divide by 1000 before combining with quantities in amperes.
- **Kirchhoff's *first* law = current law**, not the voltage law. Easy mark to lose.

*Note: the circuit diagram, the node-b figure and the ammeter layout are carried by slide images that the text extractor did not capture, and the procedure text says "increase E₂" while the data table actually steps E₁ (E₂ stays at 9 V). The circuit description, the error/precaution lists and the percentage-difference criterion above are the standard treatment for this experiment; take the reading table and the node equation I₁ + I₂ = I₃ as the authoritative parts of the source.*
