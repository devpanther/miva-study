# Friday — PHY_102 nightly check

*Problems hour: numerical and multi-step work on this week's material — superposition with correctly zeroed sources, nodal analysis by KCL, Thévenin and Norton equivalents, extracting ε and r from a V–I pair on a real source, and dipole calculations (p = qd, V = (1/4πε₀)p cos θ/r², τ = pE sin θ).*
*Sit cold, notes closed, 8 minutes. Score out of 6.*

**1.** A 10 V source in series with 5 Ω and a 20 V source in series with 10 Ω both feed a common node; a 10 Ω load runs from that node to the common rail. By superposition, the current in the 10 Ω load is:
a) 1.67 A
b) 0.50 A
c) 1.00 A
d) 2.50 A

**2.** A single unknown node sits at voltage V. It is joined to a 12 V source through a 3 Ω resistor, to the reference rail through a 6 Ω resistor, and is fed by an ideal 1.0 A current source that delivers its current **into** the node. Nodal analysis gives V =
a) 6 V
b) 10 V
c) 12 V
d) 2 V

**3.** A real voltage source is loaded until it behaves non-ideally. Its terminal voltage is 11.6 V when it delivers 2.0 A, and 11.0 V when it delivers 5.0 A. Its emf and internal resistance are:
a) ε = 11.6 V, r = 0.20 Ω
b) ε = 12.0 V, r = 5.0 Ω
c) ε = 11.3 V, r = 0.20 Ω
d) ε = 12.0 V, r = 0.20 Ω

**4.** Charges of +3.0 nC and −3.0 nC are held 2.0 mm apart and placed in a uniform field of 4.0×10⁵ N/C, with the dipole axis at 30° to the field. The torque on the dipole is:
a) 2.4×10⁻⁶ N·m
b) 1.2×10⁻⁶ N·m
c) zero
d) 2.1×10⁻⁶ N·m

**5. (multi-step problem — show your working)** An 18 V source in series with 3 Ω and a 9 V source in series with 6 Ω both feed a common top node; a 4 Ω load runs from that node to the common rail. (a) Find the load current **by superposition**, showing each source's separate contribution. (b) Verify it by replacing everything except the load with its **Thévenin equivalent** (give V_Th and R_Th), and state the Norton equivalent. (c) Find the power dissipated in the load. (d) Show, with numbers, that adding the two sources' separate *powers* in the load does **not** give the right answer, and say why.

**6. (multi-step problem — show your working)** Charges of +4.0 nC and −4.0 nC are separated by 3.0 mm. Take 1/4πε₀ = 8.99×10⁹ N·m²/C². (a) Find the dipole moment and state its direction. (b) Find the potential at a distance 0.15 m from the centre of the dipole at θ = 0°, θ = 60° and θ = 90°. (c) The dipole is now placed in a uniform field of 2.0×10⁵ N/C at 45° to the field: find the torque, the maximum possible torque, and the net force. (d) State what changes if the field is **non-uniform** and the dipole happens to lie parallel to it.

---

## Answers

**1. c** — *Superpose the branch currents, zeroing the other source correctly each time: a dead voltage source is a short, not a gap.*
With the 20 V source **shorted**: the load 10 Ω is in parallel with the 10 Ω of that branch, giving 5.0 Ω; total = 5 + 5.0 = 10 Ω; source current = 10/10 = 1.00 A; node voltage = 1.00 × 5.0 = 5.0 V; load current = 5.0/10 = 0.50 A.
With the 10 V source **shorted**: 5 Ω ∥ 10 Ω (load) = 3.33 Ω; total = 10 + 3.33 = 13.3 Ω; source current = 20/13.3 = 1.50 A; node voltage = 1.50 × 3.33 = 5.0 V; load current = 0.50 A.
Both contributions flow the same way, so I = 0.50 + 0.50 = **1.00 A** (nodal check: V/10 + (V − 10)/5 + (V − 20)/10 = 0 → 4V = 40 → V = 10 V → I = 1.00 A ✓).
(a) 1.67 A is what you get by **opening** the dead voltage sources instead of shorting them: 10/(5 + 10) = 0.67 A plus 20/(10 + 10) = 1.00 A. It is the exact signature of the reversed zeroing rule. (b) 0.50 A is one contribution reported as the answer — the superposition stopped halfway. (d) 2.50 A adds the two **total source currents** (1.00 + 1.50) rather than the two currents each source drives *through the load branch*; only the branch contributions may be added.

**2. b** — *KCL at the node, with the injected current on the correct side of the equation.* Take all resistive currents as leaving the node and the source current as entering: (V − 12)/3 + V/6 = 1.0. Multiply by 6: 2V − 24 + V = 6 → 3V = 30 → **V = 10 V**. (Check: current out through 6 Ω = 1.67 A; current in through 3 Ω = (12 − 10)/3 = 0.67 A; 0.67 + 1.0 = 1.67 A ✓.) (a) 6 V comes from putting the injected current on the wrong side — writing (V − 12)/3 + V/6 + 1.0 = 0, i.e. treating a current arriving at the node as one leaving it; the sign of a current source is the commonest slip in nodal analysis. (c) 12 V assumes the node sits at the source voltage, forgetting the drop across the 3 Ω in series with it — that would be true only if no current flowed through it. (d) 2 V drops the 12 V source altogether (V/3 + V/6 = 1.0), treating the 3 Ω as though it ran to the reference rail.

**3. d** — *V = ε − Ir is a straight line: r = −(slope) = −ΔV/ΔI, and ε is the intercept at I = 0.* Slope = (11.0 − 11.6)/(5.0 − 2.0) = −0.60/3.0 = −0.20 V/A, so **r = 0.20 Ω**; then ε = V + Ir = 11.6 + (2.0)(0.20) = **12.0 V** (check with the second point: 11.0 + (5.0)(0.20) = 12.0 V ✓). (b) takes the **negative reciprocal** of the slope, r = 1/0.20 = 5.0 Ω — the phrasing used on the lecture slide, but it belongs to a plot of I against V; on a V-against-I plot the gradient is −r itself. Test it: r = 5.0 Ω would mean lost volts of 10 V at 2.0 A, so ε would be 21.6 V, contradicting the second reading. (a) takes the **largest measured terminal voltage** as the emf; 11.6 V was measured with 2.0 A already flowing, so it is short of ε by 0.40 V. (c) averages the two terminal voltages, which interpolates a point on the line instead of extrapolating to I = 0.

**4. b** — *τ = pE sin θ, with p = qd using either charge and the full separation.* p = qd = (3.0×10⁻⁹)(2.0×10⁻³) = 6.0×10⁻¹² C·m; τ = pE sin θ = (6.0×10⁻¹²)(4.0×10⁵)(sin 30° = 0.500) = **1.2×10⁻⁶ N·m**. (a) 2.4×10⁻⁶ N·m is pE with the sin θ dropped — that is the *maximum* torque, reached at θ = 90°, not the value at 30°. (d) 2.1×10⁻⁶ N·m uses cos 30° = 0.866 instead of sin 30°; the cosine belongs in the dipole *potential*, the sine in the torque, and swapping them makes the torque largest exactly where it should be zero. (c) "zero" confuses the vanishing of the **net force** in a uniform field with the vanishing of the **torque**: the forces cancel as vectors but act at different points, so they still form a couple. Torque is zero only at θ = 0° and 180°.

**5.** *Concept: superposition adds branch currents (never powers); Thévenin collapses everything but the load into one source and one resistor; both must give the same load current.*
**(a) Superposition.**
18 V alone (9 V source **shorted**): 6 Ω ∥ 4 Ω = 24/10 = 2.40 Ω; total = 3 + 2.40 = 5.40 Ω; source current = 18/5.40 = 3.33 A; node voltage = 3.33 × 2.40 = 8.0 V; **I_load′ = 8.0/4 = 2.00 A**.
9 V alone (18 V source **shorted**): 3 Ω ∥ 4 Ω = 12/7 = 1.714 Ω; total = 6 + 1.714 = 7.714 Ω; source current = 9/7.714 = 1.167 A; node voltage = 1.167 × 1.714 = 2.0 V; **I_load″ = 2.0/4 = 0.50 A**.
Same direction, so **I_load = 2.00 + 0.50 = 2.50 A**, and the node sits at 8.0 + 2.0 = 10.0 V.
(Nodal check: (V − 18)/3 + (V − 9)/6 + V/4 = 0 → ×12: 4V − 72 + 2V − 18 + 3V = 0 → 9V = 90 → V = 10.0 V → I = 2.50 A ✓.)
**(b) Thévenin.** Remove the 4 Ω load. Open-circuit node voltage: (V − 18)/3 + (V − 9)/6 = 0 → 2V − 36 + V − 9 = 0 → 3V = 45 → **V_Th = 15.0 V**. Zero both sources (short each): **R_Th = 3 ∥ 6 = 2.0 Ω**. Reconnect the load: I = 15.0/(2.0 + 4) = **2.50 A** ✓. Norton: **I_N = V_Th/R_Th = 7.5 A in parallel with 2.0 Ω**; the current divider gives 7.5 × 2.0/(2.0 + 4) = 2.50 A ✓.
**(c) Power in the load** = I²R = (2.50)²(4) = **25 W** (= V²/R = 10.0²/4 ✓).
**(d) Powers do not superpose.** From the separate contributions: (2.00)²(4) = 16 W and (0.50)²(4) = 1 W, total 17 W — not 25 W. The reason is that power is **quadratic** in the current, P = I²R, while superposition is a consequence of **linearity**: (I′ + I″)² = I′² + 2I′I″ + I″², and the cross term 2I′I″R = 2(2.00)(0.50)(4) = 8 W is precisely what the naive sum leaves out (16 + 1 + 8 = 25 W ✓). Always superpose the currents or voltages first, then square.

**6.** *Concept: p = qd; the dipole potential falls as 1/r² and carries the cos θ factor; the torque carries sin θ; a uniform field gives torque but no net force.*
**(a)** p = qd = (4.0×10⁻⁹)(3.0×10⁻³) = **1.2×10⁻¹¹ C·m**, a vector directed **from the −4.0 nC charge towards the +4.0 nC charge** (physics convention; chemistry reverses it), along the axis of the dipole.
**(b)** V = (1/4πε₀)(p cos θ)/r². Common factor: (8.99×10⁹)(1.2×10⁻¹¹)/(0.15)² = (0.1079)/(0.0225) = 4.79 V.
θ = 0°: cos 0° = 1 → **V = 4.79 V** (the maximum, on the axis).
θ = 60°: cos 60° = 0.500 → **V = 2.40 V**.
θ = 90°: cos 90° = 0 → **V = 0**, at every distance on the equatorial plane. Note that E is **not** zero there: it points antiparallel to p.
**(c)** τ = pE sin θ = (1.2×10⁻¹¹)(2.0×10⁵)(sin 45° = 0.7071) = **1.70×10⁻⁶ N·m**. Maximum torque τ_max = pE = (1.2×10⁻¹¹)(2.0×10⁵) = **2.4×10⁻⁶ N·m**, at θ = 90°. **Net force = 0**, because +qE and −qE are equal and opposite in a uniform field; the torque nevertheless exists because the two forces act at different points, and it turns p towards alignment with E.
**(d)** If the field is **non-uniform**, the two charges sit in different field strengths, so the forces no longer cancel and there is a **net force on the dipole** — it is dragged towards the stronger field region. With p parallel (or antiparallel) to E the **torque is zero in both cases**, yet that net force remains. So "zero torque" must never be read as "nothing happens to the dipole" unless the field is uniform as well.
