# PHY_102 — Week 5

*General Physics II · Week 5 (5 – 11 Oct 2026)*

*Note on the source: most of this week's deck is images — the "resistors in series / parallel" slides, both Kirchhoff worked examples and the whole bridge-circuit solution extract as titles with no equations. The scope below is the scope the slide titles name (series and parallel combination, junction and loop rules, a two-battery circuit, a bridge circuit); the physics and the worked numbers are supplied to standard.*

## Most likely to be examined

1. **Kirchhoff's junction (current) rule.** At any junction, ΣI = 0 with currents in counted positive and out negative; equivalently Σ I_in = Σ I_out. Expresses conservation of charge in the steady state. For a network with *n* junctions only *n* − 1 of these equations are independent.
2. **Kirchhoff's loop (voltage) rule.** Around any closed loop, Σ ΔV = 0 — the algebraic sum of the potential changes (emfs *and* IR terms) is zero. Expresses conservation of energy per unit charge / single-valuedness of potential.
3. **The four traversal sign rules** (box below) — this is where marks are actually lost.
4. **Series combination:** R_eq = R₁ + R₂ + … + R_n. Same current in every element; potential differences add.
5. **Parallel combination:** 1/R_eq = 1/R₁ + 1/R₂ + … + 1/R_n. Same potential difference across every element; currents add. R_eq is always **smaller than the smallest** branch resistance.
6. **Ohm's law / defining relation of resistance:** V = IR, with V in volts (V), I in amperes (A), R in ohms (Ω); 1 Ω = 1 V A⁻¹.
7. **Real source with internal resistance:** terminal p.d. V_ab = ε − Ir when discharging, ε + Ir when being charged. Power delivered by a source = εI; power dissipated in a resistance = I²R = V²/R = VI, in watts (W).
8. **Meaning of a negative current in a Kirchhoff solution:** the magnitude is right, the real current runs opposite to the arrow you drew. Nothing needs redoing.

## Definitions and laws, stated exactly

**Junction (node).** A point in a circuit where three or more conductors meet. A point where only two conductors meet is *not* a junction — the same current passes through, so there is nothing to divide.

**Loop.** Any closed conducting path in the circuit. Loops may overlap; only *independent* loops (each introducing at least one branch not already used) give new equations.

**Branch.** A path between two junctions carrying one single current.

**Kirchhoff's junction rule.** For any junction, Σ I = 0, currents entering taken as positive and leaving as negative. Physical content: charge is conserved and, in the steady state, cannot accumulate at a point, so charge arrives and departs at equal rates.

**Kirchhoff's loop rule.** For any closed loop, Σ ΔV = 0. Physical content: electric potential is a single-valued function of position, so a charge carried once round a closed path returns to the potential it started at; the energy it gains from sources equals the energy it loses in resistances.

**Ohm's law.** For an ohmic conductor at fixed temperature, I ∝ V, so V = IR with R constant. (R = V/I *defines* resistance for any element; it is Ohm's *law* only when R is constant.)

### Sign convention — the traversal box

Pick a direction to *walk* each loop (clockwise or anticlockwise; either works). Pick an arrow for the assumed current in each branch (any direction; a wrong guess costs nothing). Then, going round:

| What you traverse | Term entered |
|---|---|
| Resistor R, walking **with** the assumed current I | **− IR** (walking downhill in potential) |
| Resistor R, walking **against** the assumed current I | **+ IR** (walking uphill) |
| Source, entering the **−** terminal and leaving the **+** | **+ ε** |
| Source, entering the **+** terminal and leaving the **−** | **− ε** |

Two rules that decide most marks:

* The sign of a **resistor** term depends on the traversal direction *relative to the assumed current arrow*.
* The sign of an **emf** term depends only on the *order in which you cross the terminals*. It does not depend on the current direction, on whether the battery is charging or discharging, or on which way you are going round.
* Internal resistance *r* is just an ordinary resistor sitting in the same branch as the source: a battery traversed − to + while carrying I out of its + terminal contributes **+ ε − Ir**.

*(The deck's Summary slide says you must "decide whether to define currents as flowing clockwise or counterclockwise around the loop" and then sign "all voltage drops" by whether they agree with the current flow. That conflates the loop-traversal direction with the branch-current arrows — a branch shared by two loops is walked one way in one loop and the other way in the other, with the same current arrow — and it mentions only IR drops, silently dropping the emf terms, which is exactly the omission that produces a wrong loop equation. Use the four-line box above.)*

*(The deck's case study is titled "Analysing Capacitors in Electrical Devices" but is about resistors throughout; capacitors are not part of this week's physics. Ignore the title.)*

### Which method applies

* Reducible by series/parallel → do that; it is faster and less error-prone.
* Not reducible (bridge circuits; more than one emf in different branches) → Kirchhoff. A bridge is the standard example: no two of its resistors carry the same current (so not series) and no two span the same pair of nodes (so not parallel).
* **Balanced bridge:** with arms R₁, R₂ in series in one branch and R₃, R₄ in the other, and a galvanometer between the midpoints, the galvanometer current is zero when R₁/R₂ = R₃/R₄. With no current in the bridge arm the rest reduces by series and parallel.

## Worked examples

### A — Series and parallel with internal resistance

A 30 V battery of internal resistance r = 1 Ω supplies a 5 Ω resistor in series with a parallel pair, 6 Ω and 12 Ω. Find every current, the terminal p.d., and check the power.

1. Parallel pair: 1/R_p = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 → R_p = **4 Ω**. (Smaller than 6 Ω, as it must be.)
2. Total resistance: R_tot = r + 5 + R_p = 1 + 5 + 4 = **10 Ω**.
3. Main current: I = ε/R_tot = 30/10 = **3.0 A**.
4. Terminal p.d.: V = ε − Ir = 30 − (3.0)(1) = **27 V**.
5. P.d. across the parallel pair: V_p = I R_p = 3.0 × 4 = **12 V** (the same across both branches).
6. Branch currents: I₆ = 12/6 = **2.0 A**; I₁₂ = 12/12 = **1.0 A**. Check: 2.0 + 1.0 = 3.0 A ✓ (junction rule).
7. Power check: source delivers εI = 30 × 3.0 = 90 W. Dissipated: I²r = 9 W, I²(5) = 45 W, V_p²/R_p = 144/4 = 36 W. Total 9 + 45 + 36 = **90 W** ✓

### B — Two-loop network, solved end to end (with a negative current)

Two batteries and one resistor are connected in parallel between nodes **a** (top) and **b** (bottom):
branch 1, ε₁ = 12 V with r₁ = 1 Ω; branch 2, ε₂ = 6 V with r₂ = 1 Ω; branch 3, R = 4 Ω.
Both batteries have their + terminals towards **a**.

**Step 1 — assume directions.** Let I₁ flow b → a through battery 1, I₂ flow b → a through battery 2, and I₃ flow a → b through R. (These are guesses.)

**Step 2 — junction rule at a.** In: I₁ + I₂. Out: I₃.

  **I₃ = I₁ + I₂**  …(i)

**Step 3 — loop 1** (battery 1 and R). Start at b, walk up branch 1 to a, then down through R back to b.

* Up through battery 1: enter −, leave + → **+ε₁**; through r₁ walking with the current → **−I₁r₁**.
* Down through R: walking with I₃ → **−I₃R**.

  12 − (1)I₁ − 4I₃ = 0  …(ii)

**Step 4 — loop 2** (battery 2 and R), the same walk on branch 2:

  6 − (1)I₂ − 4I₃ = 0  …(iii)

**Step 5 — solve.** From (ii): I₁ = 12 − 4I₃. From (iii): I₂ = 6 − 4I₃. Substitute into (i):

  I₃ = (12 − 4I₃) + (6 − 4I₃) = 18 − 8I₃ → 9I₃ = 18 → **I₃ = 2.0 A**

  I₁ = 12 − 4(2.0) = **4.0 A**  I₂ = 6 − 4(2.0) = **−2.0 A**

**Step 6 — read the negative sign.** I₂ = −2.0 A means the current in branch 2 is 2.0 A flowing **a → b**, i.e. *into* the + terminal of the 6 V battery: that battery is being charged, not discharged. The arrow was drawn backwards; the answer is not wrong.

**Step 7 — checks.**

* Junction: I₁ + I₂ = 4.0 + (−2.0) = 2.0 A = I₃ ✓
* Node p.d. by all three routes: via branch 1, V_ab = ε₁ − I₁r₁ = 12 − 4 = 8 V; via branch 2, V_ab = ε₂ − I₂r₂ = 6 − (−2)(1) = 8 V; via branch 3, V_ab = I₃R = 2 × 4 = 8 V ✓ All agree.
* Power: battery 1 delivers ε₁I₁ = 48 W; battery 2 absorbs ε₂|I₂| = 12 W. Dissipation: I₁²r₁ = 16 W, I₂²r₂ = 4 W, I₃²R = 16 W → 36 W. In = 48 W; out = 36 + 12 = **48 W** ✓

### C — Balanced bridge

A bridge has R₁ = 100 Ω and R₂ = 200 Ω in series in the left branch, R₃ = 300 Ω and unknown R₄ in the right branch, and a galvanometer between the two midpoints. For zero galvanometer deflection:

  R₁/R₂ = R₃/R₄ → 100/200 = 300/R₄ → R₄ = 300 × 2 = **600 Ω**

Why: zero galvanometer current means the two midpoints sit at the same potential, so the same p.d. is divided in the same ratio by both branches. With the bridge arm carrying no current it may be removed, and the network becomes (100 + 200) in parallel with (300 + 600) = 300 ∥ 900 = **225 Ω**.

## Commonly confused

* **Series vs parallel.** Test: two elements are in series only if *the same current must pass through both* (no junction between them); in parallel only if *both ends connect to the same pair of nodes*. Being drawn side by side on the page proves nothing.
* **Loop-traversal direction vs assumed current direction.** Two independent choices. Reversing the traversal multiplies the whole loop equation by −1 and changes no answer; reversing a current arrow flips the sign of that current in the answer. Test: ask "am I choosing how to walk, or what to call positive?"
* **emf vs terminal potential difference.** ε is fixed by the cell; V_ab = ε − Ir falls as the current drawn rises, and *exceeds* ε when the cell is being charged. Test: is current leaving the + terminal (discharging, V < ε) or entering it (charging, V > ε)?
* **"Voltage drop" vs "potential change".** A loop equation adds potential *changes*, which are negative when you walk downhill. Entering "drops" as positive numbers on both sides of the loop is the usual route to a sign error.
* **A negative current vs an arithmetic mistake.** Test: substitute back. If the junction rule and every loop equation are satisfied, the negative sign is physical (reversed direction), not an error.
* **Junction rule vs "current gets used up".** Current is not consumed by a resistor; charge in equals charge out. What is consumed is *energy*, which is what the loop rule accounts for.
* **All equations vs independent equations.** With *n* junctions the *n*th junction equation is the sum of the other *n* − 1 and adds nothing; likewise a third loop in a two-loop network is the sum of the other two. Test: count the unknown branch currents and stop when you have that many independent equations.
* **Ohm's law vs the definition of resistance.** R = V/I defines resistance at the operating point for any element; Ohm's law is the extra claim that R stays constant as V changes (false for a diode, a lamp filament, a thermistor).
