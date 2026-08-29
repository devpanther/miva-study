# PHY_102 — General Physics II

*A complete exam-preparation study guide covering weeks 1 to 12.*

---

## Orientation

PHY_102 is one course about one thing: **electric charge, and what happens when it sits still, moves, or changes**. Five ideas carry everything else.

**1. Charge comes in two kinds and is conserved.** Like repels like; unlike attracts. Net charge is never created or destroyed, only moved.

**2. Charge makes a field; a field pushes charge.** A charge does not reach across space. It fills space with a field E, and a second charge in that field feels F = qE. "Field first, force second" is the most useful habit in the course.

**3. Moving charge makes a magnetic field.** Static charge makes only E; charge in motion makes B as well. That is the bridge from Weeks 1–7 (electricity) to Weeks 8–12 (magnetism).

**4. A changing magnetic field makes an electric field.** Faraday's law — generators, transformers, the national grid.

**5. Energy is conserved, and every minus sign protects that.** The minus in Lenz's law, in Faraday's law, the sign rules in Kirchhoff's loop rule. None are decoration.

**How the parts connect.** Weeks 1–2 build the field from charge; Gauss's law is a shortcut for finding it. Week 4 adds potential and the dipole — how real molecules behave. Week 3 stores energy in a field with a capacitor. Weeks 3–5 turn to circuits: what drives current (emf), what resists it (resistance), how to solve a network. Weeks 6–7 repeat that for alternating current, where phase matters. Weeks 8–9 introduce B and the force on moving charge. Weeks 10–12 close the loop: changing flux drives current, and a transformer is that turned into hardware.

**About the source.** These decks are diagram-heavy and many slides were images that extracted as nothing, including most worked solutions. Where that happens the solution here is reconstructed and labelled. Several slides contain outright errors; these are flagged where they occur and collected at the end.

The week mapping is inconsistent: a week's lecture PDF and its "In Summary" sheet often cover different topics. Week 3's PDFs are emf and energy in fields while its summary is conductors and insulators; Week 9's PDF is the Lorentz force while its summary is electromagnetic waves; Week 11's PDF is Faraday and Lenz while its summary is Gauss's law. **All of it is examinable**, so all of it is taught here, organised by theme with the source week named.

---

## Part 1 — Electric charge and charging
*(Week 1)*

### What it is

Charge is a property some particles have, as mass is a property all have. There are two kinds — positive (proton) and negative (electron), equal in size. Neutrons have none. Three rules, worth memorising word for word:

- **Additivity.** Charges add algebraically with their signs: +5 μC and −3 μC total +2 μC. Charge is a scalar.
- **Conservation.** Total charge in an isolated system never changes.
- **Quantisation.** Charge exists only as whole multiples of e = 1.6 × 10⁻¹⁹ C, so Q = ne. There is no half-electron of charge.

Unit: the coulomb, about 6.25 × 10¹⁸ elementary charges.

### Why it works

An atom has equal electrons and protons, so it is neutral, and so is anything made of them. Protons sit locked in the nucleus; electrons sit outside and are loosely held in some materials. **Only electrons move.** An object that becomes positive did not gain protons — it lost electrons. That asymmetry is the whole story of charging.

**Friction.** Rub two different materials; electrons transfer to whichever holds them more tightly. That one becomes negative, the other positive — equal and opposite, by conservation.

**Conduction.** Touch a charged conductor to a neutral one; charge flows across and they share it. **Both end up with the same sign.**

**Induction.** Bring a charged rod *near* a neutral conductor. Free electrons rearrange — repelled to the far side by a negative rod, leaving the near side positive. The conductor is still neutral overall; this stage is **polarisation**, not charging. Earth it and the repelled electrons escape. Remove the earth wire *first*, then the rod. **The conductor is left with the opposite sign to the rod**, and the rod has lost nothing.

*Diagram missing; the induction slides were images. Reconstruction, four frames: (1) metal sphere on an insulating stand, + and − signs evenly spread, negative rod approaching from the left; (2) all − signs pushed to the right face, + signs bunched on the left face; (3) a wire from the sphere's right side to a ground symbol, arrow showing electrons leaving; (4) wire cut, rod withdrawn, + signs spread evenly over the whole sphere.*

The deck's mid-lesson question: induction gets **stronger as the rod gets closer**, because its field at the conductor is stronger. Charge that builds up and stays put is **static electricity** — it stays put on insulators because there are no free electrons to carry it away.

### Worked example

**A plastic rod rubbed with wool acquires −3.2 nC. (a) How many electrons moved, and which way? (b) What charge is left on the wool?**

Q = −3.2 × 10⁻⁹ C. Quantisation: n = |Q|/e = (3.2 × 10⁻⁹)/(1.6 × 10⁻¹⁹).
3.2/1.6 = 2.0; 10⁻⁹/10⁻¹⁹ = 10¹⁰. **n = 2.0 × 10¹⁰ electrons.**
The coulombs cancel — a count has no units, which is the right check. The rod ended negative, so it *gained* them: they moved **from the wool to the rod**.

(b) Charge before = 0, so charge after = 0: **Q_wool = +3.2 nC**. Check: (+3.2) + (−3.2) = 0 ✓

### Where people go wrong

- **Saying protons moved.** Never. Positive means missing electrons.
- **Reversing conduction and induction.** Conduction gives the **same** sign; induction the **opposite**.
- **Earthing order.** Remove the ground connection *before* the rod, or the electrons flow straight back.
- **Calling a polarised object charged.** Before earthing its net charge is still zero.
- **Prefix slips.** nC = 10⁻⁹, μC = 10⁻⁶, pC = 10⁻¹². Most lost marks here are powers of ten.

### In the exam

Expect a definition question (the three properties of charge; define induction), where marks come from precise wording; a sign-tracking question ("a negative rod near an earthed sphere — final charge?" → positive); and a quantisation calculation, which is one division. The photocopier case study is fair game: a photoconductive drum is charged to high voltage, light from the white parts discharges those regions, toner is attracted only to the still-charged regions, transfers to paper, and heat fuses it.

---

## Part 2 — Coulomb's law, superposition and the electric field
*(Week 2)*

### What it is

Two point charges push or pull along the line joining them, with a force proportional to each charge and inversely proportional to the square of their separation:

**F = k q₁q₂/r²**, with k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C², ε₀ = 8.85 × 10⁻¹² C²/(N·m²)

The law handles **two** charges only — hence **superposition: the total force on a charge is the vector sum of the forces each other charge would exert alone.** Charges do not interfere; each pair acts independently.

Rather than "what force does Q₁ exert on Q₂", ask "what does Q₁ do to the space around it?" That is the **electric field**:

**E = F/q₀** (N/C), so **F = qE**, and for a point charge **E = kQ/r²**

E points away from a positive charge, toward a negative one. Superposition applies to fields exactly as to forces.

### Why it works

The inverse square is geometry. Influence spreading outward covers a sphere of area 4πr²; double the distance and it covers four times the area, so its intensity quarters. Gravity, light and sound behave the same way for the same reason.

**Handling signs.** Put **magnitudes** into the formula — always positive. Decide direction separately: alike → repel, unlike → attract. Only then attach + or − for your axis. Do not let the algebra choose the direction; it will not do it reliably.

**Field lines: start on +, end on −** (or run to infinity for a lone charge); **denser lines mean a stronger field**; a line's direction is where a **positive** test charge would move; lines never cross; a charge feels no force from its own field.

*Diagrams missing — five "electric field" slides were pure images. Reconstruction: **+Q**, straight lines radiating outward, arrows away. **−Q**, the same lines with arrows inward. **Two unlike charges**, curved lines leaving + and arcing into −, densest in the gap. **Two like charges**, lines curving away from each other, field zero at the midpoint. **Parallel plates**, straight evenly spaced parallel lines from + plate to − plate, bowing outward only at the edges — a uniform field.*

*Source typo: one slide is titled "ELECTRIC FIELD AROUND A POSITIVE CHARGE, − Q". Lines converging on −Q is the field around a negative charge.*

### Worked example 1 — superposition of forces

*The deck's Example 1; the question survives, the solution slides were images. Reconstruction.*

**Two protons are 3.6 nm apart. Find the total force on an electron on the line between them, 1.2 nm from one proton.**

Proton A at x = 0, proton B at x = 3.6 nm, electron at x = 1.2 nm, so r_A = 1.2 nm and r_B = 2.4 nm; take +x rightward. **Directions first:** the electron is negative and both protons positive, so A pulls it −x and B pulls it +x.

ke² = (8.99 × 10⁹)(2.56 × 10⁻³⁸) = 2.301 × 10⁻²⁸ N·m²
F_A = 2.301 × 10⁻²⁸ / 1.44 × 10⁻¹⁸ = **1.598 × 10⁻¹⁰ N**, −x
F_B = 2.301 × 10⁻²⁸ / 5.76 × 10⁻¹⁸ = **3.995 × 10⁻¹¹ N**, +x
F_net = −1.598 × 10⁻¹⁰ + 0.3995 × 10⁻¹⁰ = **−1.20 × 10⁻¹⁰ N**

**1.20 × 10⁻¹⁰ N toward the nearer proton.** Check: B is twice as far, so its force should be a quarter of A's — 1.598/4 = 0.400 ✓

*The deck's Example 2 is the same method with three charges: Q₁ = −18 μC at x = −9 m, Q₂ = −12 μC at x = +1 m, Q₃ = +24 μC at x = +7 m, separations 10 m, 16 m and 6 m. On Q₁: 0.01942 N leftward from Q₂ (repulsion) and 0.01517 N rightward from Q₃ (attraction), so **F₁ = 4.25 × 10⁻³ N to the left** — a small difference of two similar numbers. On Q₂ both contributions point right, 0.01942 N and 0.07192 N, so **F₂ = 9.13 × 10⁻² N to the right**.*

### Worked example 2 — field, then force

*The deck's "Solved problem"; solution slides blank. Reconstruction.*

**+2.00 nC at the origin, −5.00 nC at x = 0.800 m. Find E at x = 0.200 m, then the force on an electron placed there.**

Distances r₁ = 0.200 m, r₂ = 0.600 m. **Directions:** the + charge pushes a positive test charge away → +x; the − charge, lying to the right, pulls it → +x. Both the same way.
E₁ = (8.99 × 10⁹)(2.00 × 10⁻⁹)/0.0400 = 17.98/0.0400 = **449.5 N/C**
E₂ = (8.99 × 10⁹)(5.00 × 10⁻⁹)/0.360 = 44.95/0.360 = **124.9 N/C**
**E = 574.4 N/C along +x**

F = |q|E = (1.60 × 10⁻¹⁹)(574.4) = 9.19 × 10⁻¹⁷ N; the electron is negative, so the force is **opposite** to E: **9.19 × 10⁻¹⁷ N in −x**. Units: C × N/C = N ✓

The Week 2 summary also names the **Lorentz force**, F = q(E + v × B). Only the electric half belongs here; the magnetic half is Part 12.

### Where people go wrong

- **Forgetting to square r** — the commonest omission in the course.
- **Not converting prefixes** — and r is squared, so a nanometre slip becomes a factor of 10¹⁸.
- **Using the wrong pair's separation.** Label every distance before calculating.
- **Adding magnitudes when the forces oppose.** On Q₁ above the answer is a *difference*; adding gives 0.0346 N, which is wrong.
- **Confusing E and F.** E exists whether or not a charge is there (N/C); F needs a charge (N).
- **Field direction for an electron.** The field points where a *positive* charge would go.

### In the exam

Coulomb's law must be stated with **both** proportionalities *and* the direction along the line of centres; the superposition principle must include the word *vector*. Collinear multi-charge force problems are the standard calculation — draw the axis, mark positions, get each distance and magnitude, get each direction by attract/repel, add signed values, since most marks are for method. Expect a field-then-force question, a "where is the field zero?" question (outside the pair on the side of the smaller charge for unlike charges, between them for like charges), and a field-line sketch from the five pictures above.

---

## Part 3 — Electric flux and Gauss's law
*(Week 11 summary)*

### What it is

**Electric flux** counts how many field lines pass through a surface:

**Φ_E = E A cos θ** (N·m²/C)

θ is the angle between E and the **normal** to the surface — the perpendicular sticking out of it, not the surface itself. Field along the normal (θ = 0) gives maximum flux, Φ = EA. Field lying flat in the surface (θ = 90°) gives zero: the lines skim past without going through.

**Gauss's law.** For any **closed** surface: **Φ_E = Q_enclosed / ε₀**. The total flux out equals the charge inside, divided by ε₀. Nothing else matters.

### Why it works

Field lines start on positive charge and end on negative charge; they begin and end nowhere else. Enclose a positive charge and every line must escape through your surface — net outward flux, depending only on how much charge is inside. Enclose nothing and every line that enters must leave, so each entry cancels an exit and the net is zero. A charge just *outside* contributes nothing net: in one side, out the other.

That reasoning gives every consequence in the Week 11 bullet list:

| Situation | Net flux |
|---|---|
| No charge inside | Zero |
| Equal + and − inside | Zero |
| Charge only outside | Zero |
| Charge inside doubled | Doubled |
| Box or sphere made bigger | Unchanged |

**Size and shape are irrelevant. Only enclosed charge matters.** That is the striking part, and exactly what examiners probe.

### Worked example

**q = +5.00 μC at the centre of a sphere of radius 0.300 m. Find the flux by Gauss's law, then find E at the surface and compute the flux directly, as a check.**

Φ = q/ε₀ = (5.00 × 10⁻⁶)/(8.85 × 10⁻¹²): 5.00/8.85 = 0.5650 and 10⁻⁶/10⁻¹² = 10⁶
**Φ = 5.65 × 10⁵ N·m²/C**

E = kq/r² = (8.99 × 10⁹)(5.00 × 10⁻⁶)/0.0900 = 4.495 × 10⁴/0.0900 = **4.994 × 10⁵ N/C**
A = 4πr² = 4π(0.0900) = 1.131 m². The field is radial, so perpendicular to the sphere everywhere, cos θ = 1:
Φ = EA = (4.994 × 10⁵)(1.131) = **5.65 × 10⁵ N·m²/C** ✓

The agreement is not luck: the 4πr² of the sphere cancels the r² in the field and the 4π inside k = 1/(4πε₀), leaving q/ε₀ with no radius in it. **That cancellation is Gauss's law.**

### Where people go wrong

- **Using the angle to the surface instead of to the normal.** A field parallel to a flat surface gives *zero* flux.
- **Thinking a bigger surface catches more flux.** E falls as 1/r², A grows as r²; they cancel exactly.
- **Counting charge that sits outside.** Enclosed means enclosed.
- **Swapping ε₀ and k** — that scales the answer by 4π.
- **Applying it to an open surface.** The surface must be closed.

### In the exam

The typical question is short: a cube contains +3q, −q and +2q — flux? Answer (3q − q + 2q)/ε₀ = 4q/ε₀, testing whether you add signed charges then divide once. The typical traps are a charge placed just outside and a surface doubled in size; the typical calculation is the point-charge-in-a-sphere above. You may also be asked why the law is useful: with symmetry you can pull E out and solve in one line rather than summing over every piece of charge.
---

## Part 4 — Electric potential and the electric dipole
*(Week 4; potential also named in Week 2)*

### What it is

**Electric potential V** is the electric potential energy **per unit charge** at a point: V = U/q, in joules per coulomb = **volts**.

Potential is a **scalar**, and that is why it is worth having: adding fields means adding vectors with components and angles, but adding potentials means adding signed numbers. For a point charge, **V = kQ/r** — note **r**, not r². Potential falls as 1/r; the field falls as 1/r². A negative charge has negative potential. In a uniform field, **V = Ed**.

An **electric dipole** is two equal and opposite charges, +q and −q, a small distance d apart. It matters because most real molecules are dipoles: in HCl or H₂O the electrons are shared unevenly, so one end is slightly negative. The molecule is neutral overall but not electrically featureless.

**Dipole moment p = q d** — a **vector**, magnitude q × d (the size of *either* charge, not their sum), unit **C·m**, dimensions [M⁰ L¹ T¹ I¹]. **Direction: from the negative charge to the positive charge.** That is the physics convention; the deck warns explicitly that chemistry uses the reverse. The line along p is the **axis**; the midpoint of the charges is the **centre**.

### Why it works

**Potential of a dipole**, for r much greater than d:

**V = (1/4πε₀) × (p cos θ)/r²**

At **θ = 0°** (on the axis) cos θ = 1 and V is maximum. At **θ = 90°** (the perpendicular bisector, or *equatorial plane*) cos θ = 0 and **V = 0** — because every point there is equally far from +q and −q, so +kq/r and −kq/r cancel exactly. Note the r²: a dipole's potential falls faster than a single charge's, because at distance the two charges nearly cancel.

**Field of a dipole:** add E₋ and E₊ by the parallelogram law. On the perpendicular bisector the charges are equidistant, so |E₊| = |E₋|; the components perpendicular to the axis cancel and the axial components add, both pointing from + toward −. So **on the equatorial plane V = 0 but E is not — it points opposite to p.** A favourite question, because it shows V = 0 does not imply E = 0.

*Diagram missing (reconstruction). Draw −q left and +q right on a horizontal axis, midpoint O, with p as an arrow from −q to +q. Mark P directly above O. From P draw one arrow pointing away from +q (up-and-left) and one toward −q (down-and-left), equal length. Vertical components cancel; the resultant points horizontally left, opposite to p.*

**A dipole in a uniform field E.** The +q end feels +qE, the −q end −qE: equal and opposite, so **the net force is zero — the dipole does not drift**. But they act at different places, forming a couple, so there is a **torque**:

**τ = pE sin θ**, or **τ = p × E**

perpendicular to the plane of p and E. The torque rotates the dipole until p aligns with E, where sin θ = 0 and **τ = 0** — the stable position. This is why polar molecules align in a field. **If the field is non-uniform** the two forces differ, so there is a **net force as well** — which is why a charged rod attracts scraps of paper: it polarises them, then pulls the near end harder than it pushes the far end.

*Source error. The deck writes the torque as "τ = 2 q an E sinθ". There is no quantity "an". With separation 2a, p = 2qa, so τ = 2qaE sin θ = pE sin θ.*

**Polar molecules** have a permanent moment (HCl, NaOH, H₂O) and align in a field. **Non-polar molecules** have bond dipoles that cancel by symmetry (CO₂, O₂, methane): CO₂ has two polar C=O bonds but is linear and symmetric, so they cancel. This is the "physical significance" the objectives ask for — **the dipole moment reveals a molecule's geometry and orientation in three dimensions**, and a zero moment implies a symmetric shape.

### Worked example

**+2.0 nC and −2.0 nC are 3.0 mm apart. (a) Find p. (b) Find V at 0.25 m from the centre, at 60° to the axis. (c) In a uniform field of 5.0 × 10⁴ N/C with p at 30° to it, find the torque. (d) Find V on the perpendicular bisector.**

(a) q = 2.0 × 10⁻⁹ C, d = 3.0 × 10⁻³ m → **p = qd = 6.0 × 10⁻¹² C·m**

(b) cos 60° = 0.500.
(8.99 × 10⁹)(6.0 × 10⁻¹²) = 5.394 × 10⁻²; × 0.500 = 2.697 × 10⁻²; r² = 0.0625 m²
**V = 2.697 × 10⁻²/0.0625 = 0.432 V**

(c) sin 30° = 0.500. (6.0 × 10⁻¹²)(5.0 × 10⁴) = 3.0 × 10⁻⁷; × 0.500 = **1.5 × 10⁻⁷ N·m**
Units: (C·m)(N/C) = N·m ✓ — a torque.

(d) θ = 90°, cos 90° = 0, so **V = 0** at any distance. The field there is not zero; it points opposite to p.

### Where people go wrong

- **Using 2q in p = qd.** It is one charge's magnitude times the separation.
- **Reversing p.** Physics: negative → positive. If you have done chemistry, flip consciously.
- **Using 1/r for a dipole's potential.** A point charge gives kQ/r; a dipole gives kp cos θ/r².
- **Concluding E = 0 wherever V = 0.** On the equatorial plane V = 0 and E is at its maximum for that distance.
- **Expecting a dipole to drift in a uniform field.** Net force zero — it rotates in place.
- **Measuring θ from the wrong line.** θ is measured from the dipole axis.

### In the exam

A definition block — define a dipole, give the moment formula, unit and direction. A substitution — p = qd, then V or τ, watching the mm-to-m conversion. A conceptual direction question — field on the perpendicular bisector (opposite to p), torque when p is aligned with E (zero), net force in a uniform field (zero). A polar/non-polar classification, where the reason is always symmetry.

---

## Part 5 — Conductors and insulators
*(Week 3 summary)*

### What it is

A **conductor** has electrons belonging to the material as a whole rather than to any one atom, free to drift. Apply a potential difference and you get a current. Metals, salt solutions and the human body are conductors — hence electrical safety.

An **insulator** has every electron tightly bound to its own atom, so nothing drifts: glass, rubber, plastic, dry wood, dry air, mineral oil. The Week 3 sheet names glass as the classic high-resistivity example, with plastic and rubber the practical ones.

The measurable property is **resistivity ρ**. Copper is about 10⁻⁸ Ω·m, good glass 10¹² Ω·m or more — twenty orders of magnitude apart.

### Why it works

The sheet lists three conductor characteristics, and each follows from the first.

**Free electrons** — the defining property.

**Zero field inside, in electrostatic equilibrium.** Suppose there *were* a field inside: the free electrons would feel a force and move, and would keep moving until they had piled up so as to cancel it — a fraction of a nanosecond. So in the steady state the internal field must be zero, because if it were not, charges would still be moving and it would not be a steady state. This self-correcting argument is what the examiner wants, not the bare assertion.

Two consequences: **all excess charge sits on the outer surface** (charge inside would create a field there), and **a hollow conductor shields its interior** — the Faraday cage, which is why you are safe in a car during lightning.

**Low resistance** — free electrons mean charge flows easily.

Insulators have no free electrons, resist electricity, heat and sound, and hold a static charge indefinitely because it cannot spread. That is why you charge a plastic rod by friction, not a metal one held in your hand — on metal the charge would run to earth through you. Insulators can, however, be **polarised**: bound charges shift slightly within each atom without leaving it, which is the basis of dielectrics in Part 6.

**Temperature**, raised in the Week 3 questions-to-ponder: in a **metal**, heating *increases* resistance, because vibrating atoms scatter the drifting electrons more. In a **semiconductor** and most insulators, heating *decreases* resistance, because it frees more carriers. Opposite behaviours, and the difference is worth a mark.

Applications from the sheet: conductors in thermometers, food foil and engine components; insulators as cable sheathing, rubber gloves and ceramic pylon insulators. The case study's conclusion: conductive material carries current where you want it, insulating material stops it going where you do not, and damaged insulation is a hazard.

### Worked example

**A solid copper sphere of radius 0.10 m carries +8.0 nC in electrostatic equilibrium. Find (a) E at 0.05 m from the centre, (b) E just outside the surface, (c) where the charge sits.**

(a) The point is *inside* the metal. In electrostatic equilibrium **E = 0** — no calculation is possible or needed.

(c) All the excess charge sits on the **outer surface**, uniformly, because the sphere is symmetric.

(b) Outside, the sphere behaves exactly like a point charge at its centre, with r = 0.10 m:
E = (8.99 × 10⁹)(8.0 × 10⁻⁹)/(0.0100) = 71.92/0.0100 = **7.19 × 10³ N/C**, radially outward.

**Note the jump:** zero just inside, 7.19 × 10³ N/C just outside. That discontinuity is real, caused by the sheet of surface charge.

### Where people go wrong

- **Dropping the condition.** "No field inside a conductor" holds *in electrostatic equilibrium*. A conductor carrying a steady current does have a field inside — that field drives the current.
- **Putting excess charge in the middle.** It always goes to the surface.
- **Assuming insulators cannot be charged.** They can, and hold it better than conductors. What they cannot do is *conduct*.
- **Reversing the temperature effect for semiconductors.**
- **Confusing resistance with resistivity.** ρ is a material property; R = ρL/A belongs to a particular object.

### In the exam

Almost always a **compare-and-contrast**, often as a table: electron mobility, internal field in equilibrium, resistivity, plus examples. Or a **justify-it** question — "explain why E = 0 inside a conductor in equilibrium" — where the self-correcting argument earns the marks. Or an **applied safety question**: identify a hazard, name the material choice that fixes it.

---

## Part 6 — Capacitance, dielectrics and energy in the electric field
*(Week 3 "Energy in Electric Fields"; Week 4 summary)*

### What it is

A capacitor is two conductors separated by an insulator — usually two parallel plates. Connect a battery and it pulls electrons off one plate onto the other, leaving +Q and −Q. The capacitor stays neutral overall; the charge has been *separated*, and separated charge is stored energy.

**C = Q/V**, unit coulomb per volt = **farad (F)**. A farad is huge; real capacitors are μF, nF or pF.

**C = ε₀A/d** (vacuum or air), **C = Kε₀A/d** (with a dielectric of constant K)

Bigger plates hold more charge; a smaller gap holds more, because the plates pull on each other more strongly across a short distance. Between the plates the field is **uniform**, so **V = Ed**.

### Why it works

**Why storing charge stores energy.** The first electron across is free. Once one plate is slightly negative, the next must be pushed against the repulsion of those already there, and each costs more. The cost rises linearly from 0 to V, so the average is V/2 and the total work is

**U = ½QV = ½CV² = Q²/2C**

Three forms of one equation, from Q = CV. The battery converts **chemical energy into electrostatic potential energy**. Discharge it and you get the energy back — very fast if the resistance is low. That is a **defibrillator**: a battery charges the capacitor to high voltage over seconds at modest power; closing the switch dumps a large fraction of that energy through the patient in milliseconds. Same energy, tiny time, enormous power.

**Energy lives in the field.** Substitute V = Ed and C = ε₀A/d into U = ½CV²:
U = ½(ε₀A/d)(Ed)² = ½ε₀E²(A·d), and A·d is the **volume** between the plates. So

**u_E = U/volume = ½ε₀E²** (J/m³)

The energy is not "on the plates"; it is **in the field**, spread through the space between them. Wherever there is a field there is energy at density ½ε₀E², even in vacuum — the deck says it plainly: *"even in a space devoid of matter, energy persists."* With a dielectric, replace ε₀ by ε = Kε₀.

*Source contradiction. One Week 3 slide says "the energy stored in the capacitor can be calculated using U = ½εE²". That is energy **per unit volume**, not total. Two slides later the deck gives the total correctly as ½ε₀E²(A·d). Use u = ½ε₀E² for density and U = ½ε₀E²(Ad) for total.*

**Dielectrics.** Slide an insulating slab into the gap and the capacitance rises by a factor **K**, the **dielectric constant**. Faraday discovered this in 1837, and the SI unit of capacitance carries his name. K = 1 exactly in vacuum, 1.0006 for air (so air is treated as vacuum), and the Week 4 summary gives 7.0 for glass.

*Why:* the dielectric has no free electrons, but its bound charges shift — each molecule stretches slightly, or an existing molecular dipole rotates to align. This is **polarisation**. It leaves negative bound charge on the face next to the positive plate and positive bound charge next to the negative plate, and those bound charges set up a field *opposing* the plates' field. The net field inside is **reduced**; at fixed plate charge a smaller field means smaller V; and since C = Q/V, smaller V means **larger C**. **Electric susceptibility** measures how easily a material polarises; high susceptibility gives high K.

Three benefits, all in the Week 4 summary: more capacitance, a reduced internal field (valuable at high voltage), and physical separation preventing a short circuit.

**Breakdown.** Push the voltage too high and the field strips electrons from the dielectric's atoms, it conducts, and a spark jumps. **Dielectric strength** is the maximum field it withstands (V/m); times the plate separation it gives **V_max**, the **breakdown potential** — which is why every capacitor carries a working voltage. Lightning is dielectric breakdown of air.

**Combinations.** The deck's mid-lesson question asks when capacitors store maximum energy: **in parallel**, because **C_parallel = C₁ + C₂ + …** exceeds the largest single capacitor and U = ½CV² grows with C. In series they combine reciprocally, **1/C_series = 1/C₁ + 1/C₂ + …**, giving less than the smallest. **This is the opposite of the resistor rules**, and that reversal is examined.

### Worked example

**A parallel-plate capacitor has A = 0.020 m², d = 0.0050 m, vacuum between the plates, and E = 200 N/C. Find C, V, Q, the energy density and the total energy — then check the total two ways.**

C = ε₀A/d = (8.85 × 10⁻¹²)(0.020)/(0.0050): numerator 1.77 × 10⁻¹³, ÷ 5.0 × 10⁻³ → **C = 3.54 × 10⁻¹¹ F = 35.4 pF**

*Source error. The deck works this same example and gives "≈3.54 × 10⁻¹² F" — wrong by a factor of ten. The same slide writes the area as "0.022", a mangled "0.02 m²".*

V = Ed = (200)(0.0050) = **1.0 V**. Units: (N/C)(m) = J/C = V ✓
Q = CV = **3.54 × 10⁻¹¹ C**
u = ½ε₀E² = ½(8.85 × 10⁻¹²)(4.00 × 10⁴) = ½(3.54 × 10⁻⁷) = **1.77 × 10⁻⁷ J/m³**

*The deck gives this number as "≈1.77 × 10⁻⁷ J" and calls it the stored energy. The number is right; the unit is not — it is joules per cubic metre.*

Volume = Ad = 1.0 × 10⁻⁴ m³, so U = (1.77 × 10⁻⁷)(1.0 × 10⁻⁴) = **1.77 × 10⁻¹¹ J**
Check: ½CV² = ½(3.54 × 10⁻¹¹)(1.0)² = **1.77 × 10⁻¹¹ J** ✓

The two routes agree exactly — and this is precisely the check that exposes the deck's factor-of-ten slip.

*Extension: with a dielectric of K = 5 and the charge held fixed, C′ = 5C, V′ = Q/C′ = 0.20 V, E′ = 40 N/C = E/K, and U′ = Q²/2C′ = U/5.*

*Second source error. The Week 3 dielectric exercise instructs "E′ = E × K½". That is not a correct relation in any standard case: at constant charge E′ = E/K; at constant voltage E′ = E, since E = V/d. The same exercise asks you to find K from C = 3 μF with A = 0.02 m², d = 0.005 m, which gives K = Cd/(ε₀A) ≈ 8.5 × 10⁴ — physically absurd, as real dielectrics range from 1 to a few thousand. Its data are self-inconsistent; use the worked example above instead.*

### Where people go wrong

- **Confusing energy with energy density.** ½ε₀E² is per cubic metre; multiply by Ad.
- **Reversing the series/parallel rules.** Capacitors in parallel **add**; in series they combine reciprocally — the reverse of resistors. The most-examined trap here.
- **Thinking a dielectric increases the field.** It reduces the field and increases C.
- **Using ½CV² when V has changed.** Disconnected → Q fixed, use Q²/2C. Still connected → V fixed, use ½CV².
- **Thinking a charged capacitor carries net charge.** It carries +Q and −Q; net zero.
- **Forgetting d is in the denominator.** Pulling the plates apart *decreases* C.

### In the exam

Substitutions on C = ε₀A/d and U = ½CV² are guaranteed; show the unit conversions. **The energy-density derivation** is a likely "show that": start from ½CV², substitute V = Ed and C = ε₀A/d, cancel, identify Ad as the volume — four lines, learn them. **A dielectric explanation** must run the full chain: polarisation → opposing field from bound charges → reduced net field → reduced V at fixed Q → larger C = Q/V. Naming K alone gets half marks. And **the defibrillator**: slow charge at low power, fast discharge at high power.
---

## Part 7 — Electromotive force, internal resistance and terminal voltage
*(Week 3 "Electromotive Force"; Week 4 summary)*

### What it is

Charge loses energy in resistors, so something must put it back or current would stop instantly. **Electromotive force (ε) is the energy supplied by the source per unit charge passing through it** — joules per coulomb, so **the unit is the volt**. The name is misleading: **emf is not a force**. If asked for its unit, say volt, never newton. Sources: batteries (chemical → electrical), generators (mechanical → electrical), solar cells, thermocouples.

A real battery resists current through its own chemicals, modelled as an **internal resistance r** in series with a perfect source ε.

*Diagram missing (reconstruction). A box labelled "real battery" containing a cell symbol ε in series with a resistor r, with terminals a and b emerging. Outside, a load resistor R between a and b; current I circulates.*

Some voltage is dropped across r inside and never reaches the outside, leaving the **terminal potential difference**:

**V = ε − Ir**, so **ε = V + Ir** and **I = ε/(R + r)**

**At zero current V = ε** — a voltmeter across a disconnected battery reads its emf; this is the deck's definition, *emf equals the terminal potential difference when no current flows*. **Under load V is always less than ε**, and the shortfall grows with current — which is why headlights dim when the starter turns. An **ideal source has r = 0**.

### Why it works

**Measuring ε and r.** Connect the cell to a variable resistor with an ammeter in series and a voltmeter across the terminals; vary R and record I and V. **Plot V against I.** From V = ε − Ir this is a straight line: the **intercept on the V-axis is ε** and the **gradient is −r**. Take many readings, and **disconnect the cell between them**, because a connected cell drains and its emf drifts.

**Dimensions of emf** (a stated objective, so learn the derivation):
Work = force × displacement = mass × acceleration × displacement = [M][L T⁻²][L] = **[M¹ L² T⁻²]**
Charge = current × time = **[I¹ T¹]**
emf = work ÷ charge = **[M¹ L² T⁻³ I⁻¹]** — the same as potential difference, as it must be.

**Emf can be negative.** The deck's example is an inductor generating an emf opposing the incoming power. A sign on an emf states its direction relative to your chosen loop; a battery being charged has its emf opposing the current and absorbs energy.

**Motional emf.** An emf needs no chemistry. Slide a rod of length l along rails at speed v, in a field B perpendicular to the circuit plane; the loop's area changes, so the flux Φ = Blx changes. Each free charge q in the rod is carried at speed v through B and feels F = qvB along the rod, sweeping charge to one end. The work carrying q the length l is W = qvBl, and emf is work per unit charge:

**ε = W/q = Bvl**

*The deck renders this as "∈ = wq=Bvl", a mangling of ε = W/q = Bvl.* Its mid-lesson question: a 0.7 m bar at 1 m/s in B = 20 T gives ε = (20)(1)(0.7) = **14 V**. The deck writes E = −vLB and notes correctly that the minus sign carries only directional information.

**The electromagnetic flow meter**, the deck's application. Coils produce a field across a pipe, and the **conducting liquid is the moving conductor**: flowing at v across B through a pipe of width l it generates ε = Bvl, detected by electrodes in the pipe wall. Since B and l are fixed, the voltage is **proportional to the average flow velocity**, and a transmitter converts it to volumetric flow rate. No moving parts, so it survives dirty liquids — but it will **not** work on hydrocarbons or distilled water, which cannot carry the charge.

### Worked example

**A cell of ε = 12.0 V and r = 0.50 Ω drives an external 5.50 Ω. Find the current, the terminal voltage, and the power in R, in r, and in total — then check the balance.**

I = ε/(R + r) = 12.0/6.00 = **2.00 A**
V = ε − Ir = 12.0 − (2.00)(0.50) = **11.0 V**. Cross-check: IR = (2.00)(5.50) = 11.0 V ✓
P_R = I²R = (4.00)(5.50) = **22.0 W**
P_r = I²r = (4.00)(0.50) = **2.00 W**
P_total = εI = (12.0)(2.00) = **24.0 W**
Balance: 22.0 + 2.00 = 24.0 W ✓

The cell converts 24.0 W of chemical energy; 22.0 W reaches the load and 2.00 W heats the cell — efficiency 91.7 %. Always finish with this balance; it catches arithmetic slips.

### Where people go wrong

- **Calling emf a force** and giving newtons.
- **Writing V = ε + Ir.** The internal drop *subtracts*; a loaded battery always reads below its emf.
- **Using R instead of R + r.** The current is limited by the whole loop.
- **Reading the V–I gradient as +r.** It is −r; the line slopes down.
- **Confusing emf with terminal voltage.** Equal only at zero current.

### In the exam

Define emf (energy per unit charge, volts). The standard calculation: given ε, r and R find I, V and the powers, ending with εI = I²R + I²r. A **graph question** — ε from the intercept, r from minus the gradient. The **dimensional derivation** to M¹L²T⁻³I⁻¹. **Motional emf**, ε = Blv. And the **flow meter**, including why it fails on non-conducting liquids.

---

## Part 8 — Direct-current circuits
*(Weeks 4 and 5)*

### What it is

**Ohm's law: V = IR.** **Power: P = VI = I²R = V²/R.** Conventional current flows from + round to − through the external circuit; electrons drift the other way, but conventional current is what you use.

**Series.** One path, so the **same current** through every element and the voltages **add**: **R_series = R₁ + R₂ + …**, always **larger than the largest**. Voltage divides in proportion to resistance.

**Parallel.** Both ends on the same two nodes, so the **same voltage** across each and the currents **add**: **1/R_parallel = 1/R₁ + 1/R₂ + …**, always **smaller than the smallest**, because an extra path can only make flow easier. For two resistors R₁R₂/(R₁ + R₂); for n identical ones, R/n.

*Diagram missing — four Week 5 slides on series and parallel resistors were pure images. Reconstruction: for series, a battery with R₁, R₂, R₃ in a single line, one loop, one current arrow. For parallel, a battery with three resistors side by side, each bridging the same top and bottom wires, the current splitting at the top node and recombining at the bottom.*

### Why it works

**Sources** *(Week 4)*. An **ideal voltage source** holds its voltage regardless of load current; internal resistance zero. A **real** one sags at high current — plot terminal V against output I and **r is the negative reciprocal of the slope**. A **zeroed voltage source** has both terminals at the same potential, so it behaves as a **plain wire**. An **ideal current source** holds its current regardless of load voltage; internal resistance **infinite**. Real ones are rare, built from a voltage source with a large series resistor or from a transistor, and behave like an ideal source **in parallel** with a finite resistance. A **zeroed current source** is an **open circuit**.

| Source | Zeroed version |
|---|---|
| Voltage source | replace with a wire (short) |
| Current source | replace with a break (open) |

**Superposition in circuits:** *the current in any branch equals the sum of the currents each independent source would produce alone, with all others zeroed; the same for node voltages.* Zero the others using the table, solve, record signed branch currents, repeat, add. It works only for **linear** elements — and not for power, since power goes as I² and squares do not add.

**Thévenin and Norton.** Sometimes the contents are unknown — a **"black box"**. Thévenin: any linear network, seen from two terminals, behaves as one voltage source V_Th in series with one resistance R_Th. Norton: as one current source I_N in parallel with R_N = R_Th, where I_N = V_Th/R_Th. The deck gives these without proof and notes they are useful even when the structure *is* known, since they collapse a network into two components — but **only for linear elements**.

**Kirchhoff's rules** *(Week 5)*, for circuits — a bridge, for instance — that cannot be reduced by series and parallel at all.

- A **junction** is a point where **three or more** conductors meet; a **loop** is any closed conducting path.
- **Junction rule:** ΣI_in = ΣI_out. *Charge is conserved and cannot pile up at a point.*
- **Loop rule:** the algebraic sum of potential changes round any closed loop is zero. *Energy is conserved — return to the start and you are at the same potential.*

**The sign convention, which is where the marks go:**

1. **Assume a current direction in every branch and mark it on the diagram.** A wrong guess returns a negative number meaning "that size, the other way" — a correct answer, not an error.
2. Choose a travel direction round the loop and keep it.
3. Through a source **− to +: +ε**; **+ to −: −ε**.
4. Through a resistor **with the assumed current: −IR** (downhill in potential).
5. Through a resistor **against the assumed current: +IR** (uphill).

Rules 4 and 5 trip everyone. Remember physically: current flows from high to low potential through a resistor, so following the current means dropping.

**Nodal analysis** needs only the junction rule. The deck's recipe: choose a reference node and set it to zero (usually the one at the negative terminal); assign V₁, V₂, … to the others; apply the junction rule at each, writing every branch current as (voltage difference)/resistance; then solve.

### Worked example — a two-loop network

*The Week 5 deck's Kirchhoff examples, including a bridge circuit stated four times over consecutive slides, carry no numbers and no extractable diagram. This is a reconstruction of the standard type.*

**A 12 V battery in series with 2 Ω is the left branch; a 6 V battery in series with 3 Ω is the right branch; a 6 Ω resistor is the middle branch. All three join the same top node a and bottom node b, both battery + terminals facing a. Find the three currents.**

*Diagram (reconstruction). Two horizontal wires joined by three vertical branches: left, 12 V cell (+ at top) with 2 Ω; middle, 6 Ω alone; right, 6 V cell (+ at top) with 3 Ω. Top node a, bottom node b.*

Assume I₁ up the left branch into a, I₂ up the right branch into a, I₃ down the middle from a to b.

Junction at a: **I₁ + I₂ = I₃**
Left loop: **12 − 2I₁ − 6I₃ = 0**
Right loop: **6 − 3I₂ − 6I₃ = 0**

Substituting I₃ = I₁ + I₂: 12 = 8I₁ + 6I₂ … (1) and 6 = 6I₁ + 9I₂ … (2)
From (1): I₁ = 1.5 − 0.75I₂. Into (2): 6 = 9 − 4.5I₂ + 9I₂ = 9 + 4.5I₂, so 4.5I₂ = −3 and **I₂ = −0.667 A**.
I₁ = 1.5 + 0.500 = **2.00 A**; I₃ = 2.00 − 0.667 = **1.33 A**

**The minus sign:** the right branch actually carries 0.667 A *downward* — the 12 V battery is charging the 6 V one. Nothing has gone wrong.
Check loop 1: 12 − 4 − 8 = 0 ✓  Check loop 2: 6 + 2 − 8 = 0 ✓

*A single-loop version — two opposing batteries with internal resistances in one series loop — takes one line: with ε₁ = 12 V, ε₂ = 6 V opposing and 6 Ω total resistance, I = (12 − 6)/6 = 1.00 A. The 12 V cell supplies 12 W, the 6 V cell absorbs 6 W (it is being charged), and 6 W is dissipated in the resistances.*

*Source note. The Week 4 deck's mid-lesson question asks the line voltage of a "3-∅ 120° VSI" from a 24 V DC supply, giving 24/√2 = 16.97 V. That is power-electronics material well outside a 100-level syllabus and unconnected to the lesson. Note the figure in case it reappears; do not revise around it.*

### Where people go wrong

- **Forgetting to invert.** 1/R₁ + 1/R₂ gives you **1/R**. If your parallel total exceeds the smallest resistor you forgot — use that as a free check every time.
- **Mixing up what is shared.** Series shares *current*; parallel shares *voltage*.
- **Using series/parallel on a bridge.** It has neither; it needs Kirchhoff.
- **Changing loop direction mid-loop**, or "fixing" a negative current by flipping signs. Report it as a reversed current.
- **Too few independent equations.** With n unknown currents you need n; a loop that is a combination of two others gives nothing new.
- **Ignoring internal resistance** when the question supplies it.

### In the exam

**Reduction problems** — collapse a network one pair at a time, redrawing after each step. **Single-loop Kirchhoff** with two opposing batteries and internal resistances: find I, a potential difference V_ab, and each source's power — practically guaranteed. **Two-loop Kirchhoff** as above: marks are given simply for marking assumed directions on the diagram, so do it, then write one junction and two loop equations and check both loops at the end. **Definitions:** both rules and the conservation law each expresses; junction and loop. **Week 4 concepts:** ideal voltage source (r = 0), ideal current source (r infinite), zeroed voltage source (a wire), zeroed current source (an open circuit), what Thévenin and Norton do, and their linear-only restriction.

---

## Part 9 — Alternating current: peak values, rms values and power
*(Weeks 6 and 7)*

### What it is

An **alternating current** reverses periodically and varies continuously. Nigerian mains is nominally 230 V at 50 Hz. A cycle has a positive half (rising from zero to a maximum and back) and a negative half, tracing a **sinusoidal waveform**:

**v = V_max sin ωt**, with **ω = 2πf = 2π/T**

**Peak value** is the largest instantaneous value in a cycle. It is real — insulation must withstand it — but a poor description of what a supply *delivers*, since the waveform is at its peak only for an instant.

**Rms value** is the number that makes AC comparable to DC: **the value of the steady direct current that would dissipate the same average power in the same resistor.** Learn that sentence; the word *power* must appear.

### Why it works

The plain average of a full sine cycle is zero — the halves cancel. But power is P = i²R, and **squaring makes every value positive**, so the negative half heats just as much as the positive. Take the mean of i², then the square root to return to amperes. For a sine wave the mean square is exactly half the peak squared, so

**I_rms = I_max/√2 = 0.707 I_max**, **V_rms = V_max/√2**, and inversely **V_max = 1.414 V_rms**

The √2 applies **only to sinusoids**. **A supply quoted without qualification is rms**, and meters read rms.

**Power** *(Week 7)*. **Impedance Z** is the total opposition to AC, in ohms. **Instantaneous power** p = vi varies through the cycle and can be positive (absorbing) or negative (returning energy) — the deck's mid-lesson question asks which quantity varies in both magnitude and sign over a cycle, and the answer is instantaneous power, which is exactly why it is rarely used.

**Average (real) power: P = V_rms I_rms cos φ**, where φ is the phase angle and **cos φ is the power factor**. **Apparent power S = V_rms I_rms** (volt-amperes). **PF = P/S = cos φ**, so **P = VI × PF**.

**Purely resistive:** V and I in phase, φ = 0, PF = 1, and everything collapses to the DC forms **P = VI = I²R = V²/R** with rms values.

**Purely reactive** (ideal capacitor or inductor): current 90° out of phase, cos 90° = 0, **average real power zero**. Energy flows in during one quarter-cycle and straight back out the next. Reactances **store and return** energy; they do not dissipate it. That is why an ideal capacitor never gets hot.

*Source error. The Week 7 deck says "In a purely reactive AC circuit … P = V × I × sin(θ)". That is the **reactive power** (in VAR), not real power. Real power in a pure reactance is **zero** — as the same deck says correctly a few slides later. Use P = VI cos φ in every case. (Smaller slips on the same slide: "I² × R Was" is "Watts", and the quantities are labelled DC in the middle of an AC lesson.)*

*Diagram missing (reconstruction). Three curves on one time axis for a pure resistor: voltage as a sine wave; current as a sine wave exactly on top of it, same zeros and peaks; power as their product — a sine-squared curve touching zero at every zero crossing, **always positive**, at twice the frequency, with a dashed line through its midpoint marking the average.*

The deck's reasoning, exactly what an "explain why" question wants: in the positive half-cycle voltage and current are both positive so power is positive; in the negative half-cycle both are negative, and **negative times negative is positive**, so power is positive again. The resistor absorbs energy throughout and never returns it, and the average is half the peak. In a **purely inductive** circuit, self-inductance opposes any change in current, so current lags voltage and power is positive in some quarter-cycles and negative in others, averaging to zero.

### Worked example

*The Week 6 deck's Practice Question 3; solution slide was an image. Reconstruction.*

**An AC generator of maximum voltage 24.0 V and frequency 60.0 Hz drives R = 265 Ω. Find the rms voltage and current, and the average and maximum power.**

V_rms = 24.0/1.414 = **16.97 V**
The circuit is purely resistive, so Ohm's law applies to rms values directly:
I_rms = 16.97/265 = **0.0640 A = 64.0 mA**
P_avg = I_rms²R = (4.096 × 10⁻³)(265) = **1.086 W**. Cross-check: V_rms I_rms = (16.97)(0.0640) = 1.086 W ✓
I_max = 24.0/265 = 0.0906 A, so P_max = (8.208 × 10⁻³)(265) = **2.175 W**. Cross-check: V_max²/R = 576/265 = 2.174 W ✓

**P_max/P_avg = 2.00** — the average power is exactly half the maximum in a resistive AC circuit, from the two factors of √2. Use it as a check on any answer of this type.

The 60.0 Hz was never needed: in a purely resistive circuit nothing depends on frequency. Spotting an unused datum is worth a mark — it usually means the examiner is testing whether you know that *reactance*, not resistance, is frequency-dependent.

*Two shorter deck examples: 120 V rms mains has V_max = 1.414 × 120 = **169.7 V**; a device at 120 V and 10 A has maxima 169.7 V and **14.14 A**. For a 230 V Nigerian supply, V_max = **325 V** — what the insulation must survive.*

### Where people go wrong

- **Dividing when you should multiply by √2.** Peak is always **larger** than rms.
- **Assuming a quoted mains voltage is a peak.** It is rms.
- **Using P = VI in a reactive circuit.** That is apparent power; real power needs cos φ.
- **Believing an ideal capacitor dissipates power.** It does not.
- **Mixing rms and peak in one formula**, or substituting f where ω belongs (an error of 6.28).

### In the exam

**Define rms** — the DC value producing the same average power in the same resistive load. **Convert** rms ↔ peak, nearly certain. **A full resistive AC problem** on the pattern above, ending with the average-is-half-maximum check. **Explain the power waveform** with the negative-times-negative argument. **Power factor** — define as P/S = cos φ, give 1 for a pure resistor and 0 for a pure reactance, and say that a low power factor means the supply carries current doing no useful work.
---

## Part 10 — Phasors, reactance, series RLC circuits and resonance
*(Weeks 6 and 7 summaries)*

### What it is

In an AC circuit the voltages across R, L and C peak at **different times**, so you cannot add their sizes: thirty volts and forty volts out of phase do not make seventy.

A **phasor** is a rotating arrow representing a sinusoid — length the magnitude (conventionally the rms value), angle the phase. All phasors rotate at the same ω, so their relative angles are fixed and you can freeze the picture and treat them as static vectors. Then out-of-phase quantities add by **vector addition**. A phasor's angle is a phase in time, not a direction in space; that is the difference from an ordinary vector.

### Why it works

**Resistor.** V and I **in phase**; opposition **R**, independent of frequency.

**Inductor.** A coil opposes any *change* in current, so current cannot rise until after the voltage has: **voltage leads current by 90°**. Opposition is **X_L = ωL = 2πfL** (ohms), which **increases with frequency** — the faster the current tries to change, the harder the coil fights.

**Capacitor.** Charge must arrive before a voltage can appear, so current comes first: **current leads voltage by 90°**. Opposition is **X_C = 1/(ωC)**, which **decreases with frequency** — at high frequency the plates never charge up much. At DC, X_C is infinite: a capacitor blocks DC completely.

Mnemonic **CIVIL**: in a **C**apacitor **I** leads **V**; in an inductor (**L**) **V** leads **I**.

**Series RLC.** All three carry the **same current**, so I is the reference: V_R is in phase with I, V_L is 90° ahead, V_C is 90° behind. V_L and V_C are therefore **180° apart** and partly cancel.

*Diagram missing (reconstruction). Phasor diagram: a horizontal arrow right labelled I and V_R; a vertical arrow up labelled V_L; a vertical arrow down labelled V_C. Subtract to get one net vertical arrow (V_L − V_C). The hypotenuse from the origin to its tip is the supply voltage V, at angle φ to the horizontal.*

Kirchhoff's voltage law still holds, but **vectorially**: V = √(V_R² + (V_L − V_C)²). Dividing by the common current,

**Z = √(R² + (X_L − X_C)²)** and **V = IZ**, with **tan φ = (X_L − X_C)/R**

X_L > X_C → **inductive**, current **lags**. X_C > X_L → **capacitive**, current **leads**. Equal → purely resistive. The Week 6 summary calls this a **second-order circuit**, because it has two energy-storage elements: L stores magnetically, C electrically.

**Resonance: X_L = X_C.** The reactances cancel exactly, so Z is at its **minimum** (equal to R), the current is at its **maximum** (V/R), φ = 0 and the power factor is 1. Setting ωL = 1/(ωC):

**ω₀ = 1/√(LC)**, so **f₀ = 1/(2π√(LC))**

This is how a radio tunes: vary C until the resonant frequency matches the station, and every other frequency is suppressed. The Week 7 case study applies the same idea to loudspeakers, where resonance is an unwanted peak damped out by enclosure design.

### Worked example

**R = 50.0 Ω, L = 0.100 H, C = 20.0 μF, on a 230 V rms, 50.0 Hz supply. Find X_L, X_C, Z, I, φ, the real power and the resonant frequency.**

ω = 2π(50.0) = **314.2 rad/s**
X_L = ωL = (314.2)(0.100) = **31.42 Ω**
ωC = (314.2)(20.0 × 10⁻⁶) = 6.283 × 10⁻³, so X_C = 1/(6.283 × 10⁻³) = **159.2 Ω**
X_L − X_C = −127.7 Ω
Z = √(2500 + 16308) = √18808 = **137.1 Ω** — the sign vanishes in the squaring, and Z is always positive
I = V/Z = 230/137.1 = **1.677 A rms**
tan φ = −127.7/50.0 = −2.554, so φ = **−68.6°**: X_C dominates, the circuit is **capacitive** and the **current leads by 68.6°**
cos φ = 0.3647 (the power factor)
P = VI cos φ = (230)(1.677)(0.3647) = **140.7 W**. Cross-check: I²R = (1.677)²(50.0) = 140.6 W ✓ — all the real power is in R
Apparent power S = VI = 385.7 VA, far larger than the 140.7 W consumed; that gap is the cost of a poor power factor.
LC = 2.00 × 10⁻⁶, √(LC) = 1.414 × 10⁻³, so **f₀ = 1/(2π × 1.414 × 10⁻³) = 112.5 Hz**

**Sanity check:** the supply at 50 Hz is *below* resonance, and below resonance a series RLC circuit is capacitive — exactly what φ said.

### Where people go wrong

- **Adding V_R, V_L, V_C — or R, X_L, X_C — arithmetically.** They combine by Pythagoras.
- **Using f instead of ω** in X_L = ωL: an error of 2π.
- **Forgetting to invert in X_C = 1/(ωC).** Compute ωC, then take the reciprocal.
- **Not converting μF and mH.**
- **Reversing lead and lag.** X_C dominant → capacitive → current **leads**. Use CIVIL.
- **Thinking Z is smallest at high frequency.** It is smallest at *resonance* and rises on both sides.

### In the exam

The standard calculation is the sequence above, and it comes out cleanly if you keep the order ω, X_L, X_C, Z, I, φ, P. **Resonance** — state the condition, derive f₀, describe the behaviour (Z = R minimum, I maximum, φ = 0, PF = 1). **Phasor sketching**, with I as the reference axis. **Conceptual:** which reactance grows with frequency (inductive), which shrinks (capacitive), what a capacitor does to DC (blocks it), what an inductor does to steady DC (passes it freely).

---

## Part 11 — Magnetic fields and magnetic dipoles
*(Week 8)*

### What it is

A magnet fills the space around it with a **magnetic field B**, in **teslas**. The Earth's field is about 5 × 10⁻⁵ T, a fridge magnet 5 × 10⁻³ T, an MRI scanner 1.5–3 T. The older unit is the gauss: **1 T = 10⁴ G**.

**Field lines** run out of the north pole, round through space, into the south pole, and continue S to N *inside* the magnet — so every line is a **closed loop**. The direction at a point is where a small compass needle's north points; denser lines mean a stronger field. Map them with iron filings or small compasses. Unlike poles attract, like poles repel, and between two north poles the lines bend sharply away from each other.

**No magnetic monopoles.** Cut a bar magnet in half and you get two shorter magnets, each with its own N and S. **This is the deepest difference between magnetism and electricity:** isolated charges exist, isolated poles do not — which is why every field line closes on itself and there is no magnetic Gauss's law with a source term.

### Why it works

**All magnetic fields are produced by moving charge** — the deck states it: *all magnetic fields are caused by the free flow of charges.* Even a permanent magnet works this way, through the orbital and spin motion of its electrons.

**Straight wire.** The field forms **concentric circles around the wire**: **B = μ₀I/(2πr)**, with μ₀ = 4π × 10⁻⁷ T·m/A. Direction by the **right-hand grip rule**: thumb along the conventional current, curled fingers give the circling field.

**Solenoid.** Each turn's field adds to the next, so inside it is strong and nearly **uniform** along the axis; outside it looks like a bar magnet's. **B = μ₀ n I**, where n = N/L is turns **per unit length**. The Week 8 summary lists the three factors: the permeability of the core material, the turns per unit length and the current. An iron core multiplies B by hundreds or thousands, since μ replaces μ₀. Curl your right fingers with the current round the turns and the thumb points to the north end.

*Diagram missing (reconstruction). Straight wire: a vertical wire with an upward current arrow and three concentric circles round it in a horizontal plane, arrowheads anticlockwise viewed from above. Solenoid: a helix of about eight turns, four straight parallel arrows inside along the axis all the same way, and the return field looping outside from one end to the other exactly like a bar magnet's.*

**Magnetic dipoles.** A **magnetic dipole** is a north and a south pole a small distance apart. A bar magnet is one; so, crucially, is a **current loop**. The two models — poles and current loop — give **identical predictions far from the source** but differ inside it, and the current-loop picture is the physically correct one.

**μ = IA** (or **NIA** for N turns), a **vector**, in **A·m² = J/T**. Curl the right fingers with the current round the loop and the thumb points along μ, straight **through** the loop.

In an external field a dipole feels a **torque τ = μB sin θ** that aligns it with the field — **magnetisation**, and the reason a compass needle turns north. Because the torque works to align it, the dipole has **lower potential energy aligned with the field and higher energy against it**.

**The electron's moment:** the deck gives **M = g(−eL/2m)**, with L the angular momentum and g a numerical factor. The deck calls g the "correlation factor"; the standard name is the **g-factor**, close to 2 for spin. The minus sign is there because the charge is negative, so the moment points **opposite** to the angular momentum. The content: **angular momentum and magnetic moment are proportional** — a spinning charge is a tiny current loop.

**Applications.** **MRI**, from NMR: hydrogen nuclei in the body are magnetic dipoles; a strong field partially aligns them, radio waves flip them, and the signal they emit as they relax is reconstructed into an image — non-invasive, non-ionising, excellent soft-tissue contrast. **The Earth** is itself a large dipole; the deck notes its field reverses roughly every 200,000 years, each reversal taking 4,000–5,000 years. Also **motors, credit card strips, loudspeakers, hard disks**.

### Worked example

**(a) A loop carries 12 A and encloses 1.6 m² — find its magnetic moment. (b) A long straight wire carries 10 A — find B at 5.0 cm. (c) A solenoid 0.50 m long with 1000 turns carries 3.0 A — find B inside.**

(a) μ = IA = (12)(1.6) = **19.2 A·m²**
*(The deck's mid-lesson question, answered there as "19.2 units". The unit is A·m², or J/T.)*

(b) r = 0.050 m. B = μ₀I/(2πr) = (4π × 10⁻⁷)(10)/(2π × 0.050). Cancel π: (4 × 10⁻⁷)(10)/(0.100) = **4.0 × 10⁻⁵ T** — about the Earth's field, which is why a compass near a mains cable misbehaves.

(c) n = 1000/0.50 = 2000 turns per metre.
B = μ₀nI = (1.257 × 10⁻⁶)(2000)(3.0) = (2.513 × 10⁻³)(3.0) = **7.54 × 10⁻³ T**

Check the direction of change: doubling the turns, the current, or adding an iron core all raise B; lengthening the solenoid at fixed N lowers n and so lowers B.

### Where people go wrong

- **Using N instead of n** in B = μ₀nI. Divide the total turns by the length.
- **Saying a cut magnet gives an isolated pole.** It never does.
- **Forgetting to convert cm to m**, or using the left hand.
- **Three meanings of μ** in one topic: magnetic moment (A·m²), permeability μ₀ (T·m/A), and the prefix micro.
- **Drawing field lines that start and stop.** They are always closed loops.
- **Saying a loop's moment points along the current.** It points **through** the loop.

### In the exam

Define a magnetic dipole and state μ = IA with its unit and direction rule. **Substitutions:** μ = IA, B = μ₀I/(2πr), B = μ₀nI. **Right-hand rule questions** — given a current, state the field direction, or identify a coil's north end; practise physically with your hand. **Explain-why:** stronger field where lines are closer; why monopoles do not exist; what happens to a dipole in an external field. **Application:** MRI in two or three sentences.

---

## Part 12 — The Lorentz force and the force on a current
*(Week 9)*

### What it is

A charge q moving at velocity v through fields E and B feels the **Lorentz force**:

**F = qE + q(v × B)**

**The electric term F = qE** acts whether or not the charge moves, along E for a positive charge. **The magnetic term** has magnitude **F = qvB sin θ**, θ being the angle between v and B, with three strange features, all examinable:

1. **Zero if the charge is not moving.**
2. **Zero if v is parallel to B** (sin θ = 0) — which is why charged particles spiral *along* field lines rather than cross them.
3. **Perpendicular to both v and B** — not along the field, not along the motion, but at right angles to the plane containing them.

**Direction — right-hand rule 1**, as the deck states it: thumb along **v**, fingers along **B**, and the force on a **positive** charge comes out perpendicular to the palm. For a **negative** charge, reverse it.

### Why it works

Because F is always perpendicular to v, it is always perpendicular to the motion, and work is force times displacement *along the force*. So:

**A magnetic force does no work. It changes the direction of the velocity, never its magnitude.**

A charge moving perpendicular to a uniform field therefore travels in a **circle** at constant speed — a constant-magnitude force always at right angles to v is exactly a centripetal force. Setting qvB = mv²/r gives **r = mv/(qB)**.

*Source error. The deck says "In Lorentz force, the work done is proportional to the charge q, and the velocity v of the charge." That is wrong for the magnetic part, and contradicts the same deck's correct statement that the force is perpendicular to the velocity. A magnetic force does **zero** work; only the electric part qE does work. If asked whether a magnetic field can speed a particle up, the answer is no.*

From F = qvB, **1 T = 1 N/(C·m/s) = 1 N/(A·m)**.

**Force on a wire.** A current is a stream of moving charges, so a wire in a field feels a force. The deck derives it: an element of length dl carries dq = λ dl moving at v, so dF = (λ dl)v × B, and since I = λv, **dF = I dl × B**. For a straight wire of length L:

**F = BIL sin θ**

maximum when the wire is perpendicular to B, zero when it lies along B. Same right-hand rule, thumb along the current.

*Source note. The deck writes these with a factor of 1/c, which belongs to the Gaussian (cgs) system; it says it is working in cgs and then switches to SI for the tesla. **In SI, which your exam uses, there is no c: F = BIL sin θ.***

**Applications.** **Motors:** a coil in a field carries opposite currents on its two sides, so one side is pushed up and the other down — a **torque** — and a commutator reverses the current each half-turn to keep it one way. **Generators** are the same machine run backwards (Part 13). **Maglev trains** float on strong magnets, removing rolling friction, and are propelled by the Lorentz force against guideway coils. **Mass spectrometers** bend particles into circles of radius r = mv/(qB); since r depends on m/q, different masses separate.

### Worked example

**An electron moves at 2.0 × 10⁶ m/s perpendicular to a uniform field of 0.50 T. Find (a) the force, (b) the radius of its path, (c) the work done by the field over one full circle.**

(a) sin 90° = 1. F = qvB = (1.60 × 10⁻¹⁹)(2.0 × 10⁶)(0.50) = (3.20 × 10⁻¹³)(0.50) = **1.60 × 10⁻¹³ N**

(b) r = mv/(qB), m = 9.11 × 10⁻³¹ kg.
Numerator (9.11 × 10⁻³¹)(2.0 × 10⁶) = 1.822 × 10⁻²⁴; denominator (1.60 × 10⁻¹⁹)(0.50) = 8.00 × 10⁻²⁰
r = **2.28 × 10⁻⁵ m = 22.8 μm**

(c) **Zero.** The force is perpendicular to v at every instant; the speed after one circle is unchanged.

**Check:** the centripetal force needed is mv²/r = (9.11 × 10⁻³¹)(4.0 × 10¹²)/(2.28 × 10⁻⁵) = 1.60 × 10⁻¹³ N — the same as part (a), as it must be ✓

*The deck's own examples: a charge of 2.5 C in E = 5 and B = 7.25 units at v = 1.5 m/s gives F = qE + qvB = 12.5 + 27.19 = **39.7 units**. And "a 5 C charge in a 25 N/C field: F = qE = 125 N/s" — the number is right but **force is measured in newtons, not newtons per second**. A wire 0.30 m long carrying 4.0 A at right angles to 0.25 T feels F = BIL = **0.30 N**.*

### Where people go wrong

- **Forgetting sin θ.** If v is parallel to B the force is zero, not maximum.
- **Using the left hand**, or forgetting to reverse the direction for an electron.
- **Believing a magnetic field can speed a particle up.** Only an electric field can.
- **Keeping the deck's 1/c in an SI calculation.**
- **Mixing up the three right-hand rules:** RHR-1 (thumb v or I, fingers B, palm F) for force; the grip rule (thumb current, fingers curl B) for the field round a wire; the loop rule (fingers curl with current, thumb μ) for a coil's moment.

### In the exam

**State the law** F = q(E + v × B) and give the magnetic magnitude as qvB sin θ. **Direction questions** with v and B given as arrows or "into the page" — say which hand and which charge sign. **Substitutions:** F = qvB sin θ or F = BIL sin θ. **A "show that"** deriving r = mv/(qB) by equating qvB to mv²/r. **Conceptual:** why the magnetic force does no work; why particles follow field lines. **Applications:** motor, generator, maglev, mass spectrometer.
---

## Part 13 — Electromagnetic induction: Faraday's law and Lenz's law
*(Weeks 10 and 11; motional emf from Week 3)*

### What it is

**Electromagnetic induction is the production of an emf in a conductor by a changing magnetic field.** Faraday discovered it in the 1830s, alongside Joseph Henry. It is how essentially all the world's electricity is generated.

Faraday's experiments, which you should be able to recount: a coil is joined to a galvanometer; move a magnet **towards** the coil and the needle deflects one way; move it **away** and it deflects the other way; **hold it still, even inside the coil, and the needle reads zero**; hold the magnet still and move the coil instead and it deflects again. Move the magnet back and forth continuously and you get an alternating current.

The third observation contains the conclusion: **flux alone produces nothing. Only a *changing* flux does.**

**Magnetic flux Φ_B = B A cos θ**, unit the **weber (Wb)**; 1 Wb = 1 T·m². θ is the angle between B and the **normal** to the loop. Since flux depends on B, A and θ, there are **three ways to change it**, and all three are examined: **change B** (move a magnet, change a nearby current); **change A** (slide or stretch a conductor — the sliding rod of Part 7); **change θ** (rotate the loop — how a generator works).

### Why it works

**Faraday's law:** the emf induced in a closed loop equals minus the rate of change of flux through it, with each of N turns contributing:

**ε = −N dΦ/dt**, or **ε = −N ΔΦ/Δt** (Wb/s = V)

The deck's phrasing: *a voltage is induced whenever relative motion exists between a conductor and a magnetic field, and its magnitude is proportional to the rate of change of flux.* The Week 10 deck lists three ways to increase it: **more turns** (each loop's emf adds in series — hence N), **faster motion**, **stronger field**.

**Lenz's law** explains the minus sign: **the induced current flows in the direction that creates a magnetic field opposing the change in flux that produced it.** Notice the word *change* — the induced field does not oppose the external field, it opposes the change in it. Flux **increasing** → induced field **opposite** to the external field. Flux **decreasing** → induced field in the **same** direction, replacing what is lost. Flux **constant** → no induced field at all. Only the field **inside the loop** counts.

**Why it must be so — conservation of energy.** If the induced current *helped* the change, pushing a magnet towards a coil would produce a current that pulled the magnet in harder, making more current, pulling harder still: unlimited energy from one push. Impossible. The induced effect must oppose the change, so you must do work to keep the change going — and that work is exactly the electrical energy you get out. Push a magnet into a coil and you feel resistance; that resistance is where the electricity comes from.

**Applying Lenz's law — two steps.** *(The Week 11 deck works this with diagrams that extracted only as caption fragments. Reconstruction of the method and its cases.)*
**Step 1.** Find the external field's direction and whether the flux is rising or falling; decide which way the **induced** field must point inside the loop.
**Step 2.** Apply the **right-hand grip rule**. For a loop drawn flat on the page: induced field **out of the page → anticlockwise current**; **into the page → clockwise current**.

- *Deck case A:* a field out of the page decreasing to zero. Flux is falling, so the induced field must **replace** it — out of the page — giving an **anticlockwise** current.
- *Deck case B:* no field, increasing to a field out of the page. Flux rising, so the induced field must **oppose** — into the page — giving a **clockwise** current.
- *Deck case C:* a loop already in a field out of the page, which then increases. Same as B: **clockwise**. (The deck describes gripping the loop with fingertips facing into the page and reading the thumb, which gives clockwise. B and C are the same situation and agree — a check on the method.)

**Motional emf** is a special case with changing area: Φ = Blx, so dΦ/dt = Blv and **ε = Blv**. Its direction follows from Lenz's law and also from the Lorentz force on the charges in the rod; the two must agree. There is a mechanical consequence: the induced current is itself in the field, so the rod feels a force BIl **opposing its motion**. You must keep pushing, and the work done against that force is exactly the electrical energy generated — Lenz's law expressed as a force.

**Generators.** Rotate a coil in a field: θ changes continuously, so Φ = BA cos θ changes continuously and an emf appears continuously. Because θ varies sinusoidally with time, so does the emf — **a rotating coil in a uniform field produces sinusoidal AC**. That is the physical origin of alternating current. The deck's **bicycle dynamo** is the smallest version: a permanent magnet spun by the wheel inside a fixed coil, so the field through the coil alternates between north and south. Pedal faster and the lamp brightens, because ε depends on dΦ/dt.

**Self-inductance** *(Week 10 summary)*. A coil's own current makes flux through itself, so if that current changes an emf is induced **in the coil itself**: **ε = −L dI/dt**, with L in **henries (H)**. By Lenz's law this **back-emf opposes the change in current** — resisting an increase, sustaining a decrease. This is why an inductor makes current lag voltage in AC, and why switching off a motor or relay can produce a large spike and a visible spark: dI/dt is huge at that instant.

**Mutual inductance.** A changing current in coil 1 induces an emf in a nearby coil 2: **ε₂ = −M dI₁/dt**, M also in henries. It depends, per the Week 10 summary, on **coil geometry, number of turns, distance between the coils and core material**. The **reciprocity theorem**: **M is the same whichever coil you drive** — a favourite short-answer question.

### Worked example

**A coil of 200 turns encloses 0.010 m² with the field perpendicular to its plane. The field rises steadily from 0.20 T to 0.60 T in 0.10 s, and the coil's resistance is 4.0 Ω. Find the flux change, the emf, the current and its direction (field out of the page). Then, if a second coil has M = 0.020 H with this one, find the emf induced in it when the current here changes at 50 A/s.**

Perpendicular to the plane means parallel to the normal, so θ = 0 and cos θ = 1.
Φ_initial = (0.20)(0.010) = 2.0 × 10⁻³ Wb; Φ_final = (0.60)(0.010) = 6.0 × 10⁻³ Wb
**ΔΦ = 4.0 × 10⁻³ Wb**
|ε| = N ΔΦ/Δt = (200)(4.0 × 10⁻³)/(0.10) = (200)(4.0 × 10⁻²) = **8.0 V** (Wb/s = V ✓)
I = ε/R = 8.0/4.0 = **2.0 A**

Direction: flux out of the page is **increasing**, so the induced field must be **into the page**, needing a **clockwise** current seen from the front.

Mutual: |ε₂| = M dI₁/dt = (0.020)(50) = **1.0 V**. Units: H × A/s = (V·s/A)(A/s) = V ✓

**Checks:** doubling the turns would double the emf; halving the time would too; reversing the direction of the field change reverses the current without changing its size.

### Where people go wrong

- **Thinking a large flux gives an emf.** Only a *changing* flux does.
- **Forgetting N** — the most common numerical error here.
- **Computing ΔB and calling it ΔΦ.** Multiply by the area (and cos θ).
- **Getting Lenz's law backwards.** The induced field opposes the *change*: if flux is falling, it points the *same* way as the external field.
- **Using θ to the plane of the loop.** It is measured to the **normal**: flat in the field gives maximum flux, θ = 0; edge-on gives zero flux, θ = 90°.
- **Confusing self with mutual inductance.** Self: one coil, its own current. Mutual: two coils.

### In the exam

State Faraday's law (rate of change of flux, with the minus sign) and Lenz's law (opposes the *change*), and say what principle Lenz's law expresses — conservation of energy. Then the numerical pattern above: flux before, flux after, divide by time, multiply by N, Ohm's law. A direction question on a loop in a rising, falling or removed field, showing both steps. A description of the magnet-and-galvanometer experiment, including that a stationary magnet gives nothing. The three ways to change flux, with a device for each. Definitions of flux, self-inductance, mutual inductance and reciprocity.

---

## Part 14 — Transformers
*(Week 12)*

### What it is

A transformer changes the voltage of an alternating supply. It is why the world's grids run on AC.

The argument is **transmission loss**, P_loss = I²R in the cable — proportional to the **square** of the current. To deliver a fixed power P = VI over distance you want the current as small as possible, so the voltage as high as possible. Generate at moderate voltage, **step up** to hundreds of kilovolts for long lines, then **step down** in stages to a safe level. Nigeria's network transmits at 330 kV and 132 kV and steps down to 415 V three-phase and 230 V single-phase.

**This is only possible with AC.** A transformer needs a *changing* flux; steady DC gives a steady flux and no output at all, apart from a pulse at switch-on.

### Why it works

*Diagram missing (reconstruction). A rectangular iron core of stacked thin sheets. On the left limb a coil of N₁ turns connected to an AC source V₁; on the right limb a coil of N₂ turns across a load resistor, output V₂. A closed loop of flux arrows circulates round the core, linking both coils. Label left "primary", right "secondary".*

The **primary** (N₁ turns) takes the input, the **secondary** (N₂ turns) feeds the load, and both are wound on a common **iron core**, which increases the flux and carries almost all of it from one coil to the other. The core is **laminated** — thin sheets insulated from each other — to suppress **eddy currents**, circulating currents induced in the core itself that waste energy as heat; the insulation confines them to each thin sheet. The two coils are **not electrically connected**: energy passes entirely through the magnetic field, giving useful **electrical isolation**.

The sequence: AC in the primary → alternating flux in the core → the core carries it to the secondary → the changing flux induces an alternating emf there → the secondary drives the load. **All voltages and currents have the same frequency as the source.** A transformer changes voltage, never frequency. The whole device is an application of **mutual inductance**.

Because the same flux threads every turn of both coils, each turn has the same induced emf, so the total is proportional to turns:

**V₂/V₁ = N₂/N₁** — **N₂ > N₁ → step-up; N₂ < N₁ → step-down.**

In an **ideal** transformer there are no losses, so **P₁ = P₂**, that is **V₁I₁ = V₂I₂**, giving **I₂/I₁ = N₁/N₂**. **Voltage and current go opposite ways:** step up the voltage and the current falls by the same factor. You never get more power out than in.

A transformer also transforms **resistance**: since V and I change by reciprocal factors, R_seen = (N₁/N₂)² R_load. Choosing a turns ratio to match source to load for maximum power transfer is **impedance matching**.

**Real losses.** Real transformers reach **90–99 %** efficiency, which the deck states.

| Loss | Cause | Reduced by |
|---|---|---|
| Copper (heat) | I²R in the windings | thicker, lower-resistance conductors |
| Eddy current | currents induced in the core | laminating the core |
| Hysteresis | re-magnetising the core each cycle | soft magnetic material, e.g. silicon steel |
| Flux leakage | flux that misses the secondary | closer coupling, better core design |
| Mechanical | vibration and the audible hum | tighter clamping of the laminations |

### Worked example — the deck's two problems

*Both Week 12 examples are stated in the deck with the solutions shown only as images. Reconstructions.*

**Example 1. A 960 W coffeemaker designed for 240 V is brought to a country with a 120 V supply. (a) What is needed? (b) What current will it draw from the 120 V line? (c) What is the coffeemaker's resistance? (rms values.)**

(a) It needs 240 V from a 120 V supply, so a **step-up transformer** with N₂/N₁ = 240/120 = **2**.
(b) Ideal transformer, so the line supplies the full 960 W: I₁ = 960/120 = **8.0 A**.
Cross-check: on the appliance side I₂ = 960/240 = 4.0 A, and I₁/I₂ = 2 = N₂/N₁ ✓
(c) The resistance is set by the appliance's design conditions, 960 W at 240 V:
R = V²/P = 57 600/960 = **60 Ω**. Cross-check: 240/4.0 = 60 Ω ✓ and I²R = (4.0)²(60) = 960 W ✓

**The trap:** using 120 V gives 15 Ω, which is wrong. The resistance belongs to the appliance and does not change; it is the voltage across it that must be restored to 240 V.

**Example 2. A hair dryer rated 1600 W at 120 V is taken to a 240 V country. (a) What is needed? (b) What current from the 240 V outlet? (c) What resistance will it *appear* to have at 240 V?**

(a) A **step-down transformer**, N₂/N₁ = 120/240 = **1/2**.
(b) I₁ = 1600/240 = **6.67 A**. Cross-check: on the dryer side I₂ = 1600/120 = 13.3 A, ratio 2 = N₁/N₂ ✓ — a step-down transformer raises the secondary current, as it must.
(c) Seen from the line, the whole combination: R_apparent = V₁²/P = 57 600/1600 = **36 Ω**. Cross-check: 240/6.67 = 36 Ω ✓

Compare with the dryer's **actual** resistance, (120)²/1600 = **9.0 Ω**. And 36 = 2² × 9 = (N₁/N₂)² × R_actual ✓ — the impedance transformation predicted above. The phrase "appears to have" tells you which question is being asked.

### Where people go wrong

- **Inverting the turns ratio.** Write V₂/V₁ = N₂/N₁, then check the answer moves the voltage the way the question needs.
- **Assuming the current ratio matches the voltage ratio.** It is the **inverse**.
- **Thinking a transformer produces power, or changes the frequency.** Neither.
- **Trying to use one on DC.** No changing flux, no output.
- **Confusing the appliance's real resistance with the resistance seen through the transformer.** They differ by (turns ratio)².
- **Saying the core is laminated "to make it stronger".** It is to suppress eddy currents.

### In the exam

Define a transformer and distinguish step-up from step-down by turns ratio, saying which way each moves the current. The standard calculation gives you two of V₁, V₂, N₁, N₂ plus a power rating and asks for the rest — always check the direction and cross-check with P₁ = P₂. Expect explain-why questions: why AC rather than DC for transmission; why transmission is at high voltage (losses are I²R, so cut the current); why the core is laminated and why it is iron; why a transformer fails on DC. Expect to name four losses with cause and mitigation, and to say that the principle is mutual inductance and Faraday's law.

---

## Part 15 — Electromagnetic oscillations and waves
*(Week 9 summary)*

### What it is

A changing magnetic field produces an electric field (Faraday). A changing electric field produces a magnetic field. Together they give something self-sustaining.

Shake a charge in an antenna. Its motion makes an oscillating electric field; that changing E makes an oscillating B beside it; that changing B makes another E further along. The disturbance regenerates itself as it travels, needing **no medium at all**. That is an **electromagnetic wave** — how sunlight crosses the vacuum of space and how a radio signal reaches a phone.

*Diagram missing (reconstruction). A horizontal axis for the direction of travel. In the vertical plane, a sine wave labelled E. In the horizontal plane perpendicular to the page, an identical sine wave labelled B, in step with E — peaking together, zero together. E, B and the direction of travel are mutually perpendicular, like three edges at the corner of a box.*

Properties: **E ⊥ B**, both **⊥ to the direction of travel** (so the wave is **transverse**), **E and B oscillate in phase**, **no medium is needed**, and in vacuum every electromagnetic wave travels at **c = 3.00 × 10⁸ m/s** regardless of frequency.

### Why it works

**c = f λ.** Because c is fixed, **frequency and wavelength are inversely proportional** — high frequency always means short wavelength.

One **photon** carries **E = hf = hc/λ**, with h = 6.63 × 10⁻³⁴ J·s. High frequency means high photon energy, which is the whole reason gamma rays are dangerous and radio waves are not.

**The spectrum** is one continuous range divided by convention, in order of **increasing frequency** and so decreasing wavelength and increasing photon energy:

| Band | Typical wavelength | Typical use |
|---|---|---|
| Radio | > 1 m | broadcasting, mobile networks, Wi-Fi |
| Microwave | 1 mm – 1 m | radar, satellite links, ovens |
| Infrared | 700 nm – 1 mm | heat, remote controls, thermal cameras |
| Visible | 400 – 700 nm | sight, optical fibre |
| Ultraviolet | 10 – 400 nm | sterilisation, sunburn, vitamin D |
| X-ray | 0.01 – 10 nm | medical imaging, security scanning |
| Gamma | < 0.01 nm | radiotherapy, nuclear decay |

Visible light is a narrow slice, violet at about 400 nm to red at about 700 nm. Mnemonic, low to high frequency: **R**adio, **M**icrowave, **I**nfrared, **V**isible, **U**ltraviolet, **X**-ray, **G**amma.

### Worked example

**(a) A Nigerian FM station broadcasts at 95.1 MHz — find the wavelength. (b) Find the photon energy of green light at 550 nm. (c) Compare the two photon energies.**

(a) f = 9.51 × 10⁷ Hz. λ = c/f = (3.00 × 10⁸)/(9.51 × 10⁷) = **3.16 m** — about the length of a small car, which is why an FM aerial is roughly a metre, a simple fraction of a wavelength.

(b) λ = 5.50 × 10⁻⁷ m, so f = (3.00 × 10⁸)/(5.50 × 10⁻⁷) = 5.45 × 10¹⁴ Hz.
E = hf = (6.63 × 10⁻³⁴)(5.45 × 10¹⁴): 6.63 × 5.45 = 36.1 and 10⁻³⁴ × 10¹⁴ = 10⁻²⁰
E = **3.61 × 10⁻¹⁹ J**, or 3.61 × 10⁻¹⁹/1.60 × 10⁻¹⁹ = **2.26 eV**

(c) E_FM = (6.63 × 10⁻³⁴)(9.51 × 10⁷) = 6.30 × 10⁻²⁶ J.
Ratio = 3.61 × 10⁻¹⁹/6.30 × 10⁻²⁶ = **5.7 × 10⁶** — a green photon carries about six million times the energy of an FM photon, which is why light can trigger a chemical reaction in the retina and radio waves cannot.
**Check:** since E = hf the energy ratio must equal the frequency ratio: 5.45 × 10¹⁴/9.51 × 10⁷ = 5.7 × 10⁶ ✓

### Where people go wrong

- **Not converting MHz or nm.** 95.1 MHz = 9.51 × 10⁷ Hz; 550 nm = 5.50 × 10⁻⁷ m.
- **Reversing frequency and wavelength.** Gamma rays have the highest frequency and the shortest wavelength.
- **Thinking colours travel at different speeds in vacuum.** They do not. (In glass they differ slightly — dispersion — but that is beyond this course.)
- **Believing EM waves need a medium.** Sound does; light does not.
- **Using E = hf with λ in nanometres.** Convert to metres, find f, then multiply by h.

### In the exam

Substitution with c = fλ in either direction is almost guaranteed, as is photon energy E = hf or hc/λ. Expect a spectrum-ordering question, or one asking which of a pair has the longer wavelength. Expect to list four properties of electromagnetic waves — transverse, E ⊥ B ⊥ direction of travel, no medium required, speed c in vacuum. And expect to explain the origin: how an oscillating electric field in a transmitter creates a magnetic field and hence a propagating wave.

---

## Recap: formulas, constants and definitions

### Constants

| Symbol | Value |
|---|---|
| e | 1.60 × 10⁻¹⁹ C (elementary charge) |
| k | 8.99 × 10⁹ N·m²/C² (= 1/4πε₀) |
| ε₀ | 8.85 × 10⁻¹² F/m |
| μ₀ | 4π × 10⁻⁷ T·m/A |
| c | 3.00 × 10⁸ m/s |
| m_e | 9.11 × 10⁻³¹ kg |
| h | 6.63 × 10⁻³⁴ J·s |
| — | 1 T = 10⁴ G; √2 = 1.414 |

### Electrostatics, flux, potential, dipoles

| Formula | Meaning |
|---|---|
| Q = n e | quantisation of charge |
| F = k q₁q₂/r² | Coulomb's law |
| E = F/q; E = kQ/r²; F = qE | electric field (N/C) and force |
| Φ_E = E A cos θ; Φ_E = Q_enclosed/ε₀ | electric flux; Gauss's law |
| V = U/q; V = kQ/r; V = Ed | electric potential (volts) |
| p = q d | electric dipole moment (C·m), directed − → + |
| V = (1/4πε₀)(p cos θ/r²) | potential due to a dipole |
| τ = pE sin θ = p × E | torque on an electric dipole |

### Capacitors

| Formula | Meaning |
|---|---|
| C = Q/V; C = ε₀A/d; C = Kε₀A/d | capacitance (farad), vacuum and dielectric |
| U = ½QV = ½CV² = Q²/2C | energy stored |
| u_E = ½ε₀E²; U = ½ε₀E²(Ad) | energy density (J/m³) and total energy |
| C_parallel = C₁ + C₂ + …; 1/C_series = 1/C₁ + 1/C₂ + … | parallel and series |

### DC circuits

| Formula | Meaning |
|---|---|
| I = Q/t; V = IR; P = VI = I²R = V²/R | current, Ohm's law, power |
| ε = V + Ir; V = ε − Ir; I = ε/(R + r) | emf, terminal voltage, current |
| R_series = R₁ + R₂ + …; 1/R_parallel = 1/R₁ + 1/R₂ + … | series and parallel |
| ΣI_in = ΣI_out; ΣV = 0 round a loop | Kirchhoff (charge; energy) |
| [emf] = M¹L²T⁻³I⁻¹ | dimensions of emf |

### AC circuits

| Formula | Meaning |
|---|---|
| v = V_max sin ωt; ω = 2πf | instantaneous voltage; angular frequency |
| V_rms = V_max/√2; I_rms = I_max/√2 | rms values |
| X_L = ωL; X_C = 1/(ωC) | reactances (Ω) |
| Z = √(R² + (X_L − X_C)²); V = IZ | impedance; Ohm's law for AC |
| tan φ = (X_L − X_C)/R | phase angle |
| PF = cos φ = P/S; P = VI cos φ; S = VI | power factor, real power, apparent power |
| f₀ = 1/(2π√(LC)) | resonance, where X_L = X_C and Z = R |

### Magnetism and induction

| Formula | Meaning |
|---|---|
| F = q(E + v × B); F = qvB sin θ | Lorentz force; magnetic part |
| r = mv/(qB); F = BIL sin θ | circular path radius; force on a wire |
| B = μ₀I/(2πr); B = μ₀nI | field around a wire; inside a solenoid |
| μ = I A; τ = μB sin θ; M = g(−eL/2m) | magnetic moment (A·m²); torque; electron moment |
| Φ_B = B A cos θ | magnetic flux (weber) |
| ε = −N dΦ/dt; ε = Blv | Faraday's law; motional emf |
| ε = −L dI/dt; ε₂ = −M dI₁/dt | self and mutual inductance (henry) |
| V₂/V₁ = N₂/N₁; I₂/I₁ = N₁/N₂; V₁I₁ = V₂I₂ | transformer relations |
| c = fλ; E = hf = hc/λ | wave equation; photon energy |

### Definitions to state word for word

**Quantisation of charge** — charge exists only in whole multiples of e. **Conservation of charge** — the total charge of an isolated system is constant. **Coulomb's law** — the force between two point charges is proportional to the product of their magnitudes and inversely proportional to the square of their separation, along the line joining them. **Superposition** — the total force or field is the vector sum of the individual contributions. **Electric field** — force per unit positive charge. **Electric potential** — potential energy per unit charge. **Gauss's law** — the flux through a closed surface equals the enclosed charge divided by ε₀. **Electric dipole** — equal and opposite charges a small distance apart; p = qd, directed − to +. **Capacitance** — charge stored per unit potential difference. **Dielectric constant K** — the factor by which a material increases capacitance relative to vacuum. **Breakdown potential** — the maximum voltage a dielectric withstands before conducting. **Conductor** — has free electrons; zero internal field in electrostatic equilibrium. **Insulator** — no free electrons; resists current. **Electromotive force** — energy supplied per unit charge; unit the volt. **Terminal potential difference** — the voltage across a source under load, V = ε − Ir. **Junction** — where three or more conductors meet; **loop** — any closed conducting path. **Kirchhoff's rules** — current in equals current out at a junction; potential changes sum to zero round a loop. **Peak value** — the maximum instantaneous value in a cycle. **Rms value** — the steady DC that dissipates the same average power in the same resistor. **Power factor** — real power divided by apparent power, cos φ. **Resonance** — X_L = X_C, giving minimum impedance, maximum current and a purely resistive circuit. **Magnetic dipole moment** — current times enclosed area, directed through the loop by the right-hand rule. **Lorentz force** — F = qE + q(v × B). **Magnetic flux** — B A cos θ, with θ measured to the normal. **Electromagnetic induction** — the production of an emf by a changing magnetic flux. **Faraday's law** — induced emf equals minus the rate of change of flux. **Lenz's law** — the induced current opposes the change that produced it; a consequence of energy conservation. **Self-inductance** — a changing current in a coil induces an opposing emf in that same coil. **Mutual inductance** — a changing current in one coil induces an emf in another, the same either way round. **Transformer** — changes AC voltage by mutual inductance between two coils on a common core, V₂/V₁ = N₂/N₁.

### Errors in the course material, collected

1. **Week 3.** Capacitance given as 3.54 × 10⁻¹² F; for A = 0.02 m², d = 0.005 m the correct value is **3.54 × 10⁻¹¹ F**.
2. **Week 3.** "U = ½εE²" labelled total energy; it is the **energy density** (J/m³). The same deck gives the correct total, ½ε₀E²(Ad), two slides later — the slides contradict each other.
3. **Week 3.** The dielectric exercise says "E′ = E × K½". No standard case gives that: at constant charge E′ = E/K; at constant voltage E′ = E.
4. **Week 3.** The same exercise's data are inconsistent — C = 3 μF with that geometry implies K ≈ 8.5 × 10⁴, far outside any real dielectric.
5. **Week 4.** The "3-∅ 120° VSI" mid-lesson question is power-electronics material outside this syllabus and unconnected to the lesson.
6. **Week 4.** Dipole torque written "τ = 2 q an E sinθ"; there is no quantity "an". It is τ = 2qaE sin θ = pE sin θ.
7. **Week 7.** "P = V × I × sin(θ)" for a purely reactive circuit is **reactive** power, not real power. Real power in a pure reactance is **zero**, as the same deck says elsewhere.
8. **Week 9.** "The work done is proportional to the charge q and the velocity v" is wrong for the magnetic force, which does **no work**.
9. **Week 9.** "F = (5)(25) ⇒ F = 125 N/s" — force is measured in **newtons**.
10. **Week 9.** The force-on-a-current derivation carries cgs factors of 1/c into an otherwise SI treatment. In SI, F = BIL sin θ.
11. **Week 2.** A slide titled "ELECTRIC FIELD AROUND A POSITIVE CHARGE, − Q" — a typo for the field around a negative charge.
12. **Week 8.** The electron's g-factor is called the "correlation factor".

### Where the source was too thin to teach from directly

Reconstructed here because the slides carried no extractable text:

- **Week 2** — all field-line diagrams and the solutions to both superposition examples and the solved field problem. The questions survive; the working does not.
- **Week 5** — the entire Kirchhoff worked-example set and the four series/parallel introduction slides. The bridge circuit is stated four times over consecutive slides with no numbers and no diagram at all; the two-loop example in Part 8 stands in for it.
- **Week 6** — the derivations of peak and rms, the average-power slide, and all three practice-question solutions.
- **Week 7** — **phasor diagrams, series RLC circuits and resonance exist only as bullet points on the summary sheet**, with no teaching slides behind them; the lecture PDF covers only power in an AC circuit. Part 10 is built from those bullets plus standard physics.
- **Week 9** — **the entire electromagnetic-waves and spectrum topic exists only as a summary bullet list**; the lecture PDF is on the Lorentz force. Part 15 is built from those bullets.
- **Week 10** — self and mutual inductance likewise appear only on the summary sheet.
- **Week 11** — Gauss's law appears only on the summary sheet, and all the Lenz's law worked diagrams extracted as isolated caption fragments.
- **Week 12** — both transformer examples and the energy-consideration slide.

*End of guide.*
