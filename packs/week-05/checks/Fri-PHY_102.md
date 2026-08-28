# Friday — PHY_102 nightly check

*Problems hour: numerical, multi-step network solving with Kirchhoff's rules — single-loop circuits with opposing emfs and internal resistances, the junction rule with mixed current signs, two-loop networks solved from a junction equation plus loop equations, batteries under charge (V = ε + Ir, εI absorbed), and an unbalanced bridge that no series/parallel reduction can touch.*
*Sit cold, notes closed, 8 minutes. Score out of 6.*

**1.** A single series loop contains four elements. Travelling **clockwise** from point a you meet, in order: the **24 V** battery, entered at its **−** terminal (internal resistance **1 Ω**); a **5 Ω** resistor; the **6 V** battery, entered at its **+** terminal (internal resistance **2 Ω**); and a **4 Ω** resistor back to a. Assume the current **I flows clockwise**. Then I =
a) 1.5 A
b) 2.5 A
c) 2.0 A
d) 3.33 A

**2.** Four branches meet at junction a. The assumed directions are: **I₁ into** the junction, **I₂ into** the junction, **I₃ out of** the junction and **I₄ out of** the junction. Solving the network gives **I₁ = 2.5 A**, **I₂ = −1.5 A** and **I₃ = 0.4 A**. Then I₄ =
a) 0.6 A
b) 3.6 A
c) 4.4 A
d) −0.6 A

**3.** Two branches feed a common node a; node b is the bottom rail. Branch 1 is a **12 V** battery (− terminal on the rail, internal resistance negligible) in series with **2 Ω**. Branch 2 is a **6 V** battery (− terminal on the rail, internal resistance negligible) in series with **3 Ω**. Branch 3 is a **6 Ω** resistor from a down to b. The current in the **6 V branch** is:
a) 0.67 A, flowing from node a through the 3 Ω into the 6 V battery, which is therefore being charged
b) 0.67 A, flowing out of the 6 V battery towards node a, which is therefore discharging
c) 1.33 A, flowing out of the 6 V battery towards node a
d) 2.00 A, flowing from node a through the 3 Ω into the 6 V battery

**4.** A **12 V** battery of internal resistance **0.5 Ω** is being charged: the charger forces **4.0 A** into its **+** terminal. Its terminal potential difference, and the rate at which energy is stored chemically in it, are:
a) 14.0 V and 48 W
b) 10.0 V and 48 W
c) 14.0 V and 56 W
d) 10.0 V and 40 W

**5. (multi-step problem — show your working)** A **12 V** source of negligible internal resistance is connected between node **A** and node **D**. Four arms and a galvanometer branch complete a bridge: **2 Ω** from A to B, **4 Ω** from A to C, **4 Ω** from B to D, **2 Ω** from C to D, and a **5 Ω** galvanometer branch from B to C. Take V_D = 0, so V_A = 12 V. (a) Show, in one sentence each, why the 2 Ω and 4 Ω arms on the left are neither in series nor in parallel with anything. (b) State the balance condition for this bridge and show that it is **not** satisfied. (c) Apply the junction rule at B and at C to find V_B and V_C, then give the current in **each** of the five resistors, stating the direction of the galvanometer current. (d) Find the total current drawn from the source, and check your answer by a power audit.

**6. (multi-step problem — show your working)** Battery **A** (emf **12 V**, internal resistance **1 Ω**) and battery **B** (emf **3 V**, internal resistance **1 Ω**) are connected **in parallel** — both **+** terminals to node a, both **−** terminals to node b — and a **2 Ω** load resistor runs from a to b. Assume **I₁ flows from battery A into node a**, **I₂ flows from battery B into node a**, and **I₃ flows from a through the load to b**. (a) Write the junction equation and two independent loop equations, naming the sign rule used for every term. (b) Solve for I₁, I₂, I₃. (c) Interpret the sign of I₂ and state the terminal voltage of **each** battery. (d) Give a complete power audit: the output of each emf, the dissipation in each internal resistance, the dissipation in the load, and show that the books balance.

---

## Answers

**1. a** — *Opposing emfs subtract, resistances always add; the internal resistances belong in the loop like any other resistor.* Travelling clockwise, you go through the 24 V battery from **− to +** (**+24**) and through the 6 V battery from **+ to −** (**−6**); every resistor, including both internal resistances, is traversed **along** the assumed current, so every IR term is negative: 24 − 1I − 5I − 6 − 2I − 4I = 0 → **18 = 12I → I = 1.5 A**. (b) 2.5 A comes from **adding** the emfs, 30/12 — the error of reading both batteries as driving the same way round the loop, when the second is entered at its + terminal and therefore opposes. (c) 2.0 A is 18/9: the net emf is right but the **two internal resistances have been left out** of the total, a habit carried over from problems with ideal sources. (d) 3.33 A is 30/9, both errors at once — emfs added *and* internal resistances dropped.

**2. a** — *The junction rule is algebraic: a current that solves to a negative value in its assumed direction must be entered with that minus sign, not with its magnitude.* Taking currents in as positive: I₁ + I₂ − I₃ − I₄ = 0 → 2.5 + (−1.5) − 0.4 − I₄ = 0 → **I₄ = 0.6 A**, positive, so it does flow out of the junction as assumed. Physically I₂ is 1.5 A flowing *out of* a, so the current genuinely arriving is only 2.5 − 1.5 = 1.0 A, and it splits into 0.4 A and 0.6 A. (b) 3.6 A drops the minus sign on I₂ and treats a 1.5 A outflow as a 1.5 A inflow — the single commonest slip once negative solutions appear. (c) 4.4 A does the same thing to I₂ **and** puts I₃ on the wrong side, adding all three magnitudes as though every one of them entered the junction. (d) −0.6 A has the right magnitude but comes from writing the balance backwards (out minus in), and would be reported as 0.6 A flowing *into* the junction — which contradicts the 0.4 A and 1.0 A already accounted for.

**3. a** — *Solve for the node potential first; a branch whose battery emf is below the node potential has current driven backwards into it and is being charged.* Junction rule at a, all currents taken as leaving: (V − 12)/2 + (V − 6)/3 + V/6 = 0. Multiply by 6: 3V − 36 + 2V − 12 + V = 0 → 6V = 48 → **V = 8.0 V**. Then the 12 V branch delivers (12 − 8)/2 = **2.00 A** into a, the load carries 8/6 = **1.33 A**, and the 6 V branch carries (8 − 6)/3 = **0.67 A** flowing **from a into the battery** — the node sits *above* the 6 V emf, so current is forced into that battery's + terminal and it is **being charged**. Check: 2.00 = 0.67 + 1.33 ✓. Its internal resistance is negligible, so its terminal voltage is just its emf, 6 V; the extra 2 V between it and node a is the drop across the 3 Ω of its own branch, and that is what drives the charging current. (b) has the right magnitude but the wrong direction, the answer you get if you assume every battery in a circuit must discharge. (c) 1.33 A is the **load** current reported for the wrong branch. (d) 2.00 A is the **12 V branch** current attached to the 6 V branch — right direction for that branch, wrong branch and wrong number.

**4. a** — *A battery under charge reads ε + Ir at its terminals; of the power pushed into it, εI is stored chemically and I²r is wasted as heat in the internal resistance.* The charger must overcome the emf **and** drive current through r, so **V = ε + Ir = 12 + (4.0)(0.5) = 14.0 V**. The total power delivered into the terminals is VI = 14.0 × 4.0 = 56 W, but only the part that works against the emf is stored: **P_chem = εI = 12 × 4.0 = 48 W**, the remaining I²r = (4.0)²(0.5) = 8 W going to heat inside the battery (48 + 8 = 56 ✓). (b) uses **ε − Ir**, the discharging formula; that would say the charger's voltage is *below* the battery's own emf, in which case no current could be forced in at all — the sign of the internal drop reverses with the direction of the current. (c) has the terminal voltage right but calls the whole 56 W chemical storage, ignoring the I²r loss that is dissipated inside the battery and is precisely why charging is not 100% efficient. (d) makes both errors, and its 40 W is 10.0 × 4.0, the input power computed from the wrong terminal voltage.

**5.** *Concept: a bridge is the standard network that no series/parallel reduction reaches, so the junction rule at the two free nodes is the whole method; balance is a ratio condition, and an unbalanced bridge carries current in the galvanometer branch.*
**(a)** The 2 Ω (A→B) and 4 Ω (B→D) are **not in series** because they do not carry the same current — the 5 Ω branch drains current away at B. The 2 Ω (A→B) and 4 Ω (A→C) are **not in parallel** because they share only node A, not both end nodes (their far ends, B and C, are different nodes at different potentials).
**(b)** Balance requires **R_AB/R_BD = R_AC/R_CD**, equivalently R_AB·R_CD = R_AC·R_BD. Here 2 × 2 = 4 but 4 × 4 = 16, so the bridge is **unbalanced** and the 5 Ω branch carries current.
**(c)** Junction rule at **B**, all currents leaving: (V_B − 12)/2 + V_B/4 + (V_B − V_C)/5 = 0 → ×20: 10V_B − 120 + 5V_B + 4V_B − 4V_C = 0 → **19V_B − 4V_C = 120**.
Junction rule at **C**: (V_C − 12)/4 + V_C/2 + (V_C − V_B)/5 = 0 → ×20: 5V_C − 60 + 10V_C + 4V_C − 4V_B = 0 → **19V_C − 4V_B = 60**.
Solving: **V_B = 168/23 = 7.30 V**, **V_C = 108/23 = 4.70 V**.
Currents: 2 Ω (A→B): (12 − 7.30)/2 = **2.35 A**; 4 Ω (A→C): (12 − 4.70)/4 = **1.83 A**; 5 Ω (B→C): (7.30 − 4.70)/5 = **0.52 A**, flowing **from B to C** because B is at the higher potential; 4 Ω (B→D): 7.30/4 = **1.83 A**; 2 Ω (C→D): 4.70/2 = **2.35 A**.
Junction checks: at B, 2.35 = 0.52 + 1.83 ✓; at C, 1.83 + 0.52 = 2.35 ✓.
**(d)** Total from the source = 2.35 + 1.83 = **4.17 A**, so P_in = 12 × 4.17 = **50.1 W**. Dissipation: 2(2.35)² + 4(1.83)² + 4(1.83)² + 2(2.35)² + 5(0.52)² = 11.02 + 13.34 + 13.34 + 11.02 + 1.36 = **50.1 W** ✓. (Note the symmetry R_AB = R_CD = 2 Ω and R_AC = R_BD = 4 Ω, which is why the two 2 Ω arms carry equal currents and the two 4 Ω arms do too — but the bridge is still unbalanced, because balance is about the **ratios down each side**, not about matching opposite arms.)

**6.** *Concept: two batteries of different emf in parallel do not simply share the load — the stronger one supplies the load and charges the weaker one, and the algebra reports that with a negative current in the branch you guessed wrong.*
**(a) Count**: b = 3 branches, n = 2 junctions → **1** junction equation and **3 − 2 + 1 = 2** loop equations.
*Junction rule at a* (in +, out −): **I₁ + I₂ − I₃ = 0**.
*Loop 1*, travelling b → battery A → node a → load → b: through A from **− to +** gives **+12**; through A's internal 1 Ω **along** I₁ gives **−1·I₁**; through the 2 Ω load **along** I₃ gives **−2·I₃**. So **12 − I₁ − 2I₃ = 0**.
*Loop 2*, travelling b → battery B → node a → load → b, by the same three tests: **3 − I₂ − 2I₃ = 0**.
**(b)** Substitute I₃ = I₁ + I₂: 12 = I₁ + 2I₁ + 2I₂ = 3I₁ + 2I₂, and 3 = 2I₁ + 3I₂. From the second equation, I₂ = (3 − 2I₁)/3; substituting into the first, 12 = 3I₁ + 2(3 − 2I₁)/3 → 36 = 9I₁ + 6 − 4I₁ → 5I₁ = 30 → **I₁ = 6.0 A**, hence **I₂ = (3 − 12)/3 = −3.0 A** and **I₃ = 6.0 + (−3.0) = 3.0 A**.
(Node check: V_a = 2I₃ = **6.0 V**; then I₁ = (12 − 6)/1 = 6.0 A ✓ and I₂ = (6 − 3)/1 = 3.0 A *out of* a ✓.)
**(c)** **I₂ = −3.0 A** means 3.0 A flowing **opposite to the assumption** — that is, from node a *into* battery B, entering its **+** terminal. Battery B is therefore **being charged** by battery A. Terminal voltages: battery A is discharging, V = ε − I₁r = 12 − (6.0)(1) = **6.0 V**; battery B is charging, V = ε + |I₂|r = 3 + (3.0)(1) = **6.0 V** — equal, as they must be, since both batteries are connected across the same pair of nodes, and equal to V_a ✓.
**(d) Power audit.** Emf of A delivers εI = 12 × 6.0 = **72 W**. Dissipated in A's internal resistance: I₁²r = (6.0)²(1) = **36 W**. Dissipated in B's internal resistance: I₂²r = (3.0)²(1) = **9 W**. Stored chemically in B: εI = 3 × 3.0 = **9 W** (a *negative* output, i.e. absorbed). Dissipated in the load: I₃²R = (3.0)²(2) = **18 W**. Total accounted for: 36 + 9 + 9 + 18 = **72 W** ✓. Note the moral: barely a quarter of battery A's output reaches the load — most of it is burned in the two internal resistances and pushed into charging B. That is why unequal batteries should never be paralleled.
