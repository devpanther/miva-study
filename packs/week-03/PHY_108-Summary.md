# PHY_108 — Week 3 Summary

*General Physics Practical II · Week 3 (21–27 Sep 2026) · Topic: Experiment to Verify the Nonlinear Relationship Between Current and Voltage in a Non-Ohmic Resistor*

## The 7 most examinable things this week

1. **Aim**: study the nonlinear relation between current and voltage in a non-ohmic resistor (a conductor whose resistance is *not* independent of the applied p.d.).
2. **Apparatus**: voltmeter, ammeter, DC power supply, a resistor made of **Tungsten**, a resistor made of **Iron** — the material is chosen from a drop-down list before each run.
3. **Why it's nonlinear — the physics chain**: current → Joule heating **P = I²R** → the conductor's temperature rises → its resistance R changes with temperature → V/I is no longer constant → the I–V graph curves instead of running straight through the origin. This is the "reciprocal relation between heat dissipated and current" from the learning objectives, stated properly: heat dissipated is proportional to the **square** of the current (and to R), not a simple 1:1 ratio.
4. **Procedure range**: start the applied voltage at about **0.1 V**, record V and I, then step it up (e.g. 0.3 V, …) using the three push buttons above the voltage-dial knob, covering the **full range from 0.1 V to 50 V**, recording a V–I pair at each step.
5. **Graph 1 — I (A) vs V (V)**: a **curve**, not a straight line — this is the direct evidence of non-ohmic behaviour.
6. **Graph 2 — P (W) vs I² (A²)**: compute P = IV and I² for every recorded row, then plot P against I². This comes out **straight (through the origin)**, and its **gradient equals R** — compare P = R·I² with y = mx + c: y ≡ P, x ≡ I², m ≡ R, c = 0. This is the graph that "illustrates Joule's power law."
7. **Why Tungsten**: very high melting point combined with high resistivity that rises sharply with temperature, so a tungsten filament can be driven to incandescence (glowing hot) by self-heating without melting — hence its use in heating elements and lamps. Iron is included as a second metal for comparison; both are non-ohmic once self-heating becomes significant.

## Apparatus and circuit

Apparatus: voltmeter, ammeter, DC power supply, and two interchangeable resistor samples — one of **Tungsten**, one of **Iron**. The virtual-lab circuit is fixed (voltmeter across the resistor, ammeter in series, as in the Ohm's-law circuit from Week 2); the student's only circuit action is to **inspect the connection** and **select the conductor material** from the drop-down list before recording data.

## Procedure

1. Inspect the circuit connection and select the conductor material (Tungsten or Iron) from the drop list.
2. Set the DC supply to a low output, e.g. **0.1 V**; click **Record** to save the voltmeter reading V and the ammeter reading I.
3. Increase the voltage (e.g. to 0.3 V); click **Record** again.
4. Repeat, stepping the voltage up across the **entire available range, 0.1 V to 50 V**, using the three push buttons above the voltage-dial knob, recording a V–I pair at each step.
5. When all readings are taken, the experiment **ends automatically** and an **Excel sheet of the recorded data (V, I) is downloaded**.

## Data analysis and the two graphs

- From each recorded row, compute **I²** and **P = IV**.
- **Plot I (A) against V (V)** → a curve, showing the nonlinear I–V relation of the non-ohmic material.
- **Plot P (W) against I² (A²)** → a straight line; its gradient is **R**, since P = I²R. This confirms Joule's law even though the raw I–V relation is curved.

## Precautions and sources of error

- Select the **correct material** from the drop-down before recording — Tungsten and Iron have different resistivities and temperature coefficients, so a run mixes badly if the material is changed mid-way.
- Cover the **entire voltage range (0.1 V–50 V)** with enough steps; too few points, or points bunched at one end, under-samples the curve and hides the nonlinearity the graph is meant to show.
- Compute **I² and P = IV from the same recorded row** (matching V and I) — pairing values across different rows silently corrupts both graphs.
- Read the axes before quoting a result: the gradient of **P vs I²** is R; the gradient of the raw **I vs V** graph is *not* a constant R at all, because that graph is curved.

## Commonly confused

- **"Non-ohmic" does not mean "no relationship between V and I"** — it means the relationship is not the simple straight line V = IR with constant R; I still depends on V, just nonlinearly.
- **The I–V curve vs the P–I² line** — the first is deliberately curved (that is the whole point of the experiment); the second is deliberately straight, and it is the straight one whose gradient gives R.
- **Joule's law is P = I²R, not P = I·R** — heat dissipated scales with the *square* of the current.
- **Tungsten's role**: it is used in lamps/heating elements *because* it is strongly non-ohmic (R rises a lot with temperature) and has a very high melting point — not because it is a well-behaved ohmic conductor.
