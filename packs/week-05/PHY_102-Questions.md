# PHY_102 — Week 5 retention set

*General Physics II · Week 5 (5 – 11 Oct 2026) · sit this seven days after the material, notes closed*

Circuit analysis: Ohm's law, resistors in series and parallel, Kirchhoff's junction and loop rules.

## Multiple choice

**1.** Resistors of 2 Ω, 3 Ω and 6 Ω are connected in parallel. The equivalent resistance is
a) 1 Ω b) 3.7 Ω c) 11 Ω d) 2 Ω

**2.** Kirchhoff's junction rule is a statement of the conservation of
a) energy b) potential difference c) electric charge d) power

**3.** In writing a loop equation, you traverse a resistor R in the *same* direction as the assumed current I. The term you enter is
a) +IR b) −IR c) +I/R d) zero, because resistors carry no emf

**4.** You traverse a source of emf ε entering at its **+** terminal and leaving at its **−** terminal. The term you enter is
a) +ε always b) +ε if the assumed current is with you c) zero d) −ε always

**5.** A 4 Ω and a 12 Ω resistor in series are connected across an ideal 32 V battery. The current in the 4 Ω resistor is
a) 2.0 A b) 8.0 A c) 2.7 A d) 10.7 A

**6.** Which circuit cannot be reduced to a single resistance using only the series and parallel rules?
a) three resistors all connected between the same two nodes
b) a Wheatstone bridge with an unbalanced bridge arm
c) two resistors in series, that combination in parallel with a third
d) four equal resistors in a single ring driven by one battery

**7.** After solving a two-loop network you obtain I₂ = −0.8 A. The correct interpretation is
a) the magnitude is wrong and the equations must be rewritten
b) the current in that branch is decreasing with time
c) a sign error was made, since current cannot be negative
d) the current is 0.8 A flowing opposite to the arrow you assumed

**8.** A cell of emf 12 V and internal resistance 0.5 Ω delivers 4.0 A. Its terminal potential difference is
a) 12 V b) 14 V c) 10 V d) 2 V

**9.** A 12 Ω and a 4 Ω resistor are in parallel. The equivalent resistance is
a) 16 Ω b) 3 Ω c) 8 Ω d) 6 Ω

**10.** A network has 3 junctions. The number of *independent* junction equations you can write is
a) 2 b) 3 c) 1 d) 6

**11.** In a series combination, the quantity that is the same in every element is the
a) potential difference b) power dissipated c) current d) resistance

**12.** In a balanced Wheatstone bridge, R₁ = 10 Ω and R₂ = 40 Ω form one branch, R₃ = 25 Ω and R₄ the other, with the galvanometer between the midpoints. R₄ is
a) 10 Ω b) 6.25 Ω c) 40 Ω d) 100 Ω

## Short answer

**S1.** State Kirchhoff's junction rule and Kirchhoff's loop rule precisely, and name the conservation law each one expresses. For the loop rule, give the sign to be entered in all four traversal cases (resistor with the current, resistor against the current, source − to +, source + to −).

**S2.** A 30 V battery of internal resistance 1.0 Ω is connected to a 5.0 Ω resistor in series with a parallel combination of 6.0 Ω and 12.0 Ω. Find (a) the total resistance, (b) the current drawn from the battery, (c) the terminal potential difference, (d) the current in the 6.0 Ω resistor. Show your working with units.

**S3.** A student solving a two-loop network draws all three branch-current arrows pointing towards the same node, and worries that this is "physically impossible" so the answer will be wrong. Explain why the choice of arrows cannot make the solution wrong, and state precisely what the algebra does to record an arrow that was drawn the wrong way.

---

## Answers

**1. a** — 1/R = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 1, so R = 1 Ω (and it must be below the smallest, 2 Ω).

**2. c** — It says charge arrives at and leaves a junction at equal rates, because charge is conserved and cannot pile up in the steady state.

**3. b** — Moving with the current inside a resistor is moving from higher to lower potential, so the potential change is −IR.

**4. d** — The emf sign depends only on the order in which the terminals are crossed; entering + and leaving − is a fall of ε, regardless of the current.

**5. a** — R = 4 + 12 = 16 Ω; I = 32/16 = 2.0 A, and the same current passes through both series resistors.

**6. b** — In an unbalanced bridge no two resistors carry the same current or span the same pair of nodes, so neither combination rule applies; Kirchhoff's rules are needed.

**7. d** — A negative result means only that the true direction is opposite to the assumed one; the magnitude is correct and nothing needs redoing.

**8. c** — V = ε − Ir = 12 − (4.0)(0.5) = 10 V.

**9. b** — 1/R = 1/12 + 1/4 = 1/12 + 3/12 = 4/12, so R = 3 Ω.

**10. a** — With n junctions only n − 1 equations are independent; the third is the sum of the other two and adds no information.

**11. c** — Series elements lie on one path with no junction between them, so the same charge per second passes through each; it is the potential differences that add.

**12. d** — Balance requires R₁/R₂ = R₃/R₄, so 10/40 = 25/R₄ and R₄ = 25 × 4 = 100 Ω.

**S1.** Junction rule: at any junction the algebraic sum of currents is zero (total entering = total leaving) — conservation of electric charge in the steady state. Loop rule: around any closed loop the algebraic sum of the potential changes, emfs and IR terms together, is zero — conservation of energy per unit charge, equivalently the fact that potential is single-valued so a round trip returns to the starting potential. Signs: resistor traversed with the assumed current, −IR; resistor traversed against it, +IR; source entered at − and left at +, +ε; source entered at + and left at −, −ε.

**S2.** (a) Parallel pair: 1/R_p = 1/6.0 + 1/12.0 = 3/12 → R_p = 4.0 Ω; R_total = 1.0 + 5.0 + 4.0 = 10.0 Ω. (b) I = ε/R_total = 30/10.0 = 3.0 A. (c) V = ε − Ir = 30 − (3.0)(1.0) = 27 V. (d) P.d. across the parallel pair = I R_p = 3.0 × 4.0 = 12 V, so I₆ = 12/6.0 = 2.0 A (and I₁₂ = 1.0 A, which sums back to 3.0 A as the junction rule requires).

**S3.** The arrows are not a claim about nature; they are a definition of what counts as positive current in each branch, and the loop and junction equations are written consistently with whatever definition is chosen. Both rules are linear in the currents, so a definition that happens to be reversed simply produces the same solution with that current's sign flipped. The algebra records a badly drawn arrow by returning a negative value for that current: the magnitude is the true current and the true direction is opposite to the arrow. An impossible-looking set of arrows (all into one node) is therefore fine — the junction equation I₁ + I₂ + I₃ = 0 then forces at least one of them to come out negative, which is exactly the algebra telling you which branch actually flows outwards.
