# Friday — PHY_102 nightly check

*Problems: numerical and multi-step work on network reduction and terminal voltage, the potential and current dividers, a two-loop Kirchhoff analysis with its Thévenin check, and dipole calculations — moment, torque, energy, potential and field.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

Questions 1–3 refer to the same circuit: a battery of emf **20 V** and internal resistance **1.0 Ω** drives a **6.0 Ω** resistor in series with a parallel pair, **4.0 Ω** and **12 Ω**.

**1.** The current drawn from the battery is:
a) 2.0 A  b) 2.2 A  c) 2.7 A  d) 0.87 A

**2.** The terminal voltage of the battery while it supplies that current is:
a) 18 V  b) 20 V  c) 22 V  d) 12 V

**3.** The current in the **12 Ω** resistor is:
a) 0.50 A  b) 1.5 A  c) 1.0 A  d) 2.0 A

**4.** A 24 V supply is connected across a 4.0 Ω resistor in series with an 8.0 Ω resistor. The potential difference across the **8.0 Ω** resistor is:
a) 16 V  b) 8.0 V  c) 12 V  d) 24 V

**5.** Two batteries are joined in parallel across a common **2.0 Ω** resistor. Branch 1 is 12 V with 3.0 Ω; branch 2 is 8.0 V with 2.0 Ω. The current in the 2.0 Ω resistor is:
a) 3.0 A  b) 2.0 A  c) 1.5 A  d) 10 A

**6.** Charges of **+4.0 nC** and **−4.0 nC** are held **5.0 mm** apart. The magnitude of the dipole moment is:
a) 2.0×10⁻¹¹ C·m  b) 4.0×10⁻¹¹ C·m  c) 2.0×10⁻⁸ C·m  d) zero

**7.** A dipole of moment **1.0×10⁻¹⁰ C·m** is held at **30°** to a uniform field of **2.0×10⁵ N/C**. The torque on it is:
a) 1.0×10⁻⁵ N·m  b) 1.7×10⁻⁵ N·m  c) 2.0×10⁻⁵ N·m  d) zero

**8.** For that same dipole (p = 1.0×10⁻¹⁰ C·m, d = 2.0 cm), the electric field at a point **0.50 m** from its centre **on the axis** is about:
a) 14 N/C  b) 7.2 N/C  c) 3.6 N/C  d) 29 N/C

**9. (explain why)** For the circuit of questions 1–3, find the power delivered by the emf, the power wasted inside the battery, and the power dissipated in each of the three external resistors. Show that the external powers account for exactly the power leaving the terminals.

**10. (explain why)** For the circuit of question 5, find the Thévenin equivalent (V_Th and R_Th) that the 2.0 Ω resistor sees, and use it to recover the current through that resistor. State the Norton current as well.

**11. (explain why)** For the dipole of question 7 (p = 1.0×10⁻¹⁰ C·m in E = 2.0×10⁵ N/C), find the work an external agent must do to turn it from alignment (0°) to 90°, and from 0° to 180°. Explain why the second is exactly twice the first even though the angle is only doubled.

**12. (explain why)** For the dipole of question 8, find the potential at 0.50 m from the centre on the axis, at 60° to the axis, and on the perpendicular bisector. Explain why the dipole potential falls off as 1/r² while a single point charge's falls off as 1/r.

---

## Answers

**1. a** — *Reduce the innermost group first, and remember the internal resistance is part of the loop.* 4.0 ∥ 12 = (4)(12)/16 = 3.0 Ω; total R = 1.0 + 6.0 + 3.0 = 10.0 Ω; I = 20/10.0 = 2.0 A. (b) 2.2 A omits the internal resistance (20/9.0). (c) 2.7 A computes 1/R_p = 1/4 + 1/12 = 1/3 and forgets to invert, taking R_p = 0.33 Ω. (d) 0.87 A adds the parallel pair as if in series (20/23). Check every parallel result against the rule that it must be smaller than the smallest member.

**2. a** — *Terminal voltage is the emf minus the internal drop.* V = ε − Ir = 20 − (2.0)(1.0) = 18 V, which is also 2.0 × (6.0 + 3.0) delivered to the external network. (b) assumes terminal voltage always equals the emf, true only at zero current. (c) adds Ir instead of subtracting it. (d) is the p.d. across the 6.0 Ω alone (2.0 × 6.0), not across the terminals.

**3. a** — *In a current divider the other branch's resistance goes on top.* I₁₂ = 2.0 × 4.0/(4.0+12) = 0.50 A; equivalently the pair carries 2.0 × 3.0 = 6.0 V, so 6.0/12 = 0.50 A. (b) 1.5 A is the divider written upside down — that is the current in the 4.0 Ω. (c) 1.0 A splits the current equally, ignoring the resistances. (d) 2.0 A treats the pair as being in series with the rest and so carrying the full current. The larger resistor must take the smaller current.

**4. a** — *In a potential divider the resistor's own value goes on top.* V₈ = 24 × 8.0/(4.0+8.0) = 16 V, and V₄ = 8.0 V; the two sum to 24 V. (b) 8.0 V inverts the divider, applying the current-divider rule by mistake. (c) 12 V splits the supply equally, ignoring the resistances. (d) 24 V assumes the full supply appears across each resistor separately. Larger resistance → larger share of the voltage, because the current through both is the same.

**5. a** — *Two-loop Kirchhoff: one KCL equation and two KVL equations.* With I₁ and I₂ into the top node and I₃ down through the 2.0 Ω: I₁ + I₂ = I₃; 12 = 3.0I₁ + 2.0I₃; 8.0 = 2.0I₂ + 2.0I₃. Eliminating I₃ gives 12 = 5.0I₁ + 2.0I₂ and 4.0 = I₁ + 2.0I₂, so I₂ = 1.0 A, I₁ = 2.0 A and **I₃ = 3.0 A**. (Check: the node sits at 3.0 × 2.0 = 6.0 V, and 12 − 3(2) = 8 − 2(1) = 6.0 V from both branches.) (b) 2.0 A reports the branch-1 current I₁ and forgets that branch 2 also feeds the resistor. (c) 1.5 A is only the contribution of the 12 V source acting alone, i.e. superposition stopped halfway. (d) 10 A adds the two emfs as though the batteries were in series and puts 20 V across 2.0 Ω, ignoring both internal branch resistances and the parallel arrangement.

**6. a** — *p = qd uses one of the charges, with the separation in metres.* p = (4.0×10⁻⁹)(5.0×10⁻³) = 2.0×10⁻¹¹ C·m, directed from −q to +q. (b) uses the total charge 2q = 8.0 nC. (c) leaves d in millimetres. (d) confuses the **net charge**, which really is zero, with the dipole moment, which is not — the whole point of a dipole is that a neutral object can still have a moment.

**7. a** — *Torque uses sin θ, not cos θ, and zero net force does not mean zero torque.* τ = pE sin θ = (1.0×10⁻¹⁰)(2.0×10⁵)(0.500) = 1.0×10⁻⁵ N·m. (b) 1.7×10⁻⁵ uses cos 30° = 0.866, swapping the roles of sin and cos (cos belongs to U = −pE cos θ). (c) 2.0×10⁻⁵ ignores the angle altogether, i.e. quotes the maximum value pE that applies at 90°. (d) confuses the net **force** on a dipole in a uniform field, which is indeed zero, with the **torque**, which vanishes only at θ = 0° and 180°.

**8. a** — *On the axis E = 2kp/r³; the potential formula and the equatorial formula are the traps.* kp = (8.99×10⁹)(1.0×10⁻¹⁰) = 0.899; r³ = 0.125 m³; E = 2(0.899)/0.125 = 14 N/C, parallel to p, and d = 2.0 cm ≪ 0.50 m justifies the far-field form. (b) 7.2 N/C uses kp/r³, the **equatorial** field — half the axial value. (c) 3.6 N/C uses kp/r², which is the **potential** (3.6 V), not a field: a dipole field falls as 1/r³. (d) 29 N/C doubles again, applying a factor 2 for "two charges" on top of the 2 already contained in 2kp/r³.

**9.** *Concept: power accounting — P = εI is generated, I²r is lost internally, and the rest must appear in the external resistors.* From Q1–Q3: I = 2.0 A, terminal voltage 18 V, the pair carries 6.0 V with 1.5 A in the 4.0 Ω and 0.50 A in the 12 Ω. Power delivered by the emf: P = εI = 20 × 2.0 = **40 W**. Wasted internally: P_r = I²r = (2.0)²(1.0) = **4.0 W**. Delivered to the external network: P = VI = 18 × 2.0 = **36 W**, and 40 − 4 = 36 ✓. Externally: the 6.0 Ω dissipates I²R = (2.0)²(6.0) = **24 W**; the 4.0 Ω dissipates (1.5)²(4.0) = **9.0 W** (or 6.0²/4.0); the 12 Ω dissipates (0.50)²(12) = **3.0 W** (or 6.0²/12). Total external = 24 + 9.0 + 3.0 = **36 W**, exactly the power leaving the terminals ✓. Note the pattern: in **series** the larger resistor dissipates more, but in **parallel** the *smaller* resistor dissipates more, because there the shared quantity is voltage and P = V²/R.

**10.** *Concept: Thévenin reduces everything but the resistor of interest to one emf and one series resistance.* Remove the 2.0 Ω, leaving the two batteries in a single loop, opposing each other: circulating current = (12 − 8.0)/(3.0 + 2.0) = 0.80 A, driven by the 12 V source. **V_Th** = open-circuit voltage at those terminals = 12 − (0.80)(3.0) = **9.6 V** (check from the other branch: 8.0 + (0.80)(2.0) = 9.6 V ✓ — both must agree, since it is one pair of terminals). **R_Th** = resistance seen at the terminals with both emfs **shorted** (internal resistances left in place) = 3.0 ∥ 2.0 = 6.0/5.0 = **1.2 Ω**. Reconnecting the load: I = V_Th/(R_Th + R) = 9.6/(1.2 + 2.0) = 9.6/3.2 = **3.0 A**, agreeing exactly with the Kirchhoff answer in Q5. The **Norton** equivalent is I_N = V_Th/R_Th = 9.6/1.2 = **8.0 A** in parallel with the same 1.2 Ω — that is the current the terminals would deliver if shorted.

**11.** *Concept: rotational work against the field is the change in U = −pE cos θ, and cos θ changes by 1 over the first quadrant but by 2 over the full flip.* Here pE = (1.0×10⁻¹⁰)(2.0×10⁵) = 2.0×10⁻⁵ J. Using U = −pE cos θ: U(0°) = −2.0×10⁻⁵ J, U(90°) = 0, U(180°) = +2.0×10⁻⁵ J. Work done by the external agent = ΔU, so **W(0° → 90°) = 0 − (−2.0×10⁻⁵) = 2.0×10⁻⁵ J** and **W(0° → 180°) = 2.0×10⁻⁵ − (−2.0×10⁻⁵) = 4.0×10⁻⁵ J = 2pE**. The second is exactly twice the first because the work depends on **cos θ**, not on θ: cos runs from 1 to 0 over the first 90° and from 0 to −1 over the second 90°, so each quadrant costs the same pE, giving 2pE in total. (The *torque* is very unequal across the two quadrants — it peaks at 90° and dies away to zero at 180° — but the work integrates the torque over angle, and the two halves come out equal.) θ = 0° is the stable minimum; θ = 180° is the unstable maximum, which is why the full flip is the most expensive rotation available.

**12.** *Concept: V = kp cos θ/r², a scalar sum of two nearly cancelling terms.* With kp = 0.899 and r² = 0.250 m²: on the **axis** (θ = 0°), V = kp/r² = 0.899/0.250 = **3.6 V**; at **θ = 60°**, V = 3.6 × cos 60° = **1.8 V**; on the **perpendicular bisector** (θ = 90°), cos 90° = 0, so **V = 0**. The 1/r² dependence arises because the two charges are **equal and opposite**: at distance r the individual potentials +kq/r₊ and −kq/r₋ are each of order kq/r, but they very nearly cancel, and what survives is proportional to their *difference* in distance, r₋ − r₊ ≈ d cos θ. Since V = kq(r₋ − r₊)/(r₊r₋) ≈ kq·d cos θ/r² = kp cos θ/r², one extra power of r appears in the denominator. A single point charge has nothing to cancel against, so its potential keeps the full kq/r. The same argument applied to the field gives the dipole 1/r³ against a point charge's 1/r², and it is why dipole effects fade so much faster with distance.
