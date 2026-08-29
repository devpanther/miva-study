# PHY_102 — General Physics II

*A complete exam-preparation study guide covering weeks 1 to 12.*

---

## Orientation

PHY_102 is one course about one thing: **electric charge, and what happens when it sits still, moves, or changes**. Five ideas carry everything else.

**1. Charge comes in two kinds and is conserved.** Like repels like; unlike attracts. Net charge is never created or destroyed, only moved — and in a solid, only electrons move.

**2. Charge makes a field; a field pushes charge.** A charge does not reach across space. It fills space with a field **E**, and a second charge in that field feels **F = qE**. "Field first, force second" is the most useful habit in the course.

**3. Moving charge makes a magnetic field.** Static charge makes only **E**; charge in motion makes **B** as well. That is the bridge from weeks 1–7 (electricity) to weeks 8–12 (magnetism).

**4. A changing magnetic field makes an emf.** Faraday's law — generators, transformers, the national grid.

**5. Energy is conserved, and every minus sign protects that.** The minus in Lenz's law, in Faraday's law, in U = −μ·B, and the sign rules in Kirchhoff's loop rule. None are decoration.

**How the parts connect.** Week 1 defines charge and the three ways of charging a body. Week 2 builds Coulomb's law, superposition and the electric field — and it is the most heavily drilled week of the course, with five worked problems. Weeks 3 and 4 turn to sources: what drives a current (emf), what it loses inside itself (Ir), how energy is stored in a field (capacitors and dielectrics), and how a network is solved (superposition, Thévenin). Week 4 also carries the electric dipole. Week 5 is Kirchhoff's rules, which are trivial as rules and murderous as signs. Weeks 6 and 7 do alternating current: first the vocabulary of peak and rms values, then power and the power factor. Weeks 8 and 9 introduce **B**: what a field does to a dipole, then what it does to a single moving charge. Weeks 10 and 11 run that backwards — a changing flux makes an emf — and week 12 turns Faraday's law into a piece of hardware.

**About the source.** Your lecturer is **Dr. Sharafadeen Adeniji**. Several of her decks are pictures of text, so a plain text extraction of them recovers headings and nothing else: in week 2, thirteen of twenty-four pages; in week 6, ten of twenty-one; in week 12, nine of twenty-three. **Every formula and every worked solution in those decks was inside the pictures.** Weeks 2, 5, 6 and 12 have been read back off the rendered slide images, so the numbers on this page for those weeks are hers, line by line. Where a slide is wrong — and several are — the error is boxed where it occurs and collected again at the end.

> ⚠ **The constant this course uses is k = 9.0 × 10⁹ N m²/C².** Every number on her slides follows from that rounded value. If you use a more precise one you will get 574 N/C where her slide reads 575, 0.01942 N where she writes 0.0194, and you will think you have made a mistake. Match her constant and your arithmetic matches hers.

**A note on the week map.** A week's lecture deck and its one-page LMS "summary sheet" often name different topics, and occasionally the sheet is simply the wrong document. Where that happens it is said plainly in the relevant Part, because revising from the wrong sheet is the most expensive mistake available to you.

---

## Part 1 — Electric charge and charging
*(Week 1)*

### What it is

Charge is a property some particles have, as mass is a property all have. There are two kinds — positive (proton) and negative (electron), equal in size. Neutrons have none. Three rules, worth memorising word for word:

- **Additivity.** Charges add algebraically with their signs: +5 μC and −3 μC total +2 μC. Charge is a **scalar**.
- **Conservation.** The total charge of an isolated system is constant in time.
- **Quantisation.** Charge exists only as whole multiples of **e = 1.6 × 10⁻¹⁹ C**, so **q = ne** with n an integer. There is no half-electron of charge.

Unit: the coulomb, about 6.25 × 10¹⁸ elementary charges.

**Electric field**, introduced here and developed in Part 2: the region round a charged object in which it exerts a force on other charges, quantified as **force per unit positive test charge**.

### Why it works

An atom has equal numbers of electrons and protons, so it is neutral, and so is anything built from atoms. Protons sit locked in the nucleus; electrons sit outside and are loosely held in some materials. **Only electrons move.** An object that becomes positive did not gain protons — it lost electrons. That asymmetry is the whole story of charging.

**Friction.** Rub two different materials; electrons transfer to whichever holds them more tightly. That one becomes negative, the other positive — equal and opposite, by conservation.

**Conduction.** Touch a charged conductor to a neutral one; charge flows across and they share it. **Both end up with the same sign.**

**Induction.** Bring a charged rod *near* a neutral conductor without touching. Free electrons rearrange — repelled to the far side by a negative rod, leaving the near side positive. The conductor is still neutral overall; this stage is **polarisation**, not charging. Now earth it, and the repelled electrons escape to the ground. **Remove the earth wire first, then the rod.** The conductor is left with the **opposite sign to the rod**, and the rod has lost nothing.

Two consequences worth having ready. **Induction strengthens as the rod approaches**, because the rod's field at the conductor is stronger and displaces more free electrons. And **a charged rod attracts neutral paper or foil whichever sign the rod carries**, because polarisation always brings the opposite sign nearer.

**Identical conductors in contact** share the total equally: **q′ = (q₁ + q₂)/2**, signs included. Two spheres of +12 nC and −4 nC end at +4.0 nC each, not +8.0 nC.

**Grounding (earthing)** is a connection to the Earth, an effectively infinite reservoir of charge. **Static electricity** is charge that has built up and stayed put — it stays put on insulators, because there are no free electrons to carry it away.

### Worked example

**A plastic rod rubbed with wool acquires −3.2 nC. (a) How many electrons moved, and which way? (b) What charge is left on the wool?**

(a) Q = −3.2 × 10⁻⁹ C. Quantisation gives n = |Q|/e = (3.2 × 10⁻⁹)/(1.6 × 10⁻¹⁹).
3.2/1.6 = 2.0 and 10⁻⁹/10⁻¹⁹ = 10¹⁰, so **n = 2.0 × 10¹⁰ electrons**.
The coulombs cancel — a count has no units, which is the right check. The rod ended negative, so it *gained* them: they moved **from the wool to the rod**.

(b) Charge before = 0, so charge after = 0: **Q_wool = +3.2 nC**. Check: (+3.2) + (−3.2) = 0 ✓

*Her own version of this calculation: an object carrying −4.8 × 10⁻⁷ C holds n = 4.8 × 10⁻⁷/1.6 × 10⁻¹⁹ = **3.0 × 10¹² excess electrons**; and rubbing glass with silk to move 2.5 × 10¹⁰ electrons gives q = ne = 4.0 nC, so **glass +4.0 nC and silk −4.0 nC**.*

### Where people go wrong

- **Saying protons moved.** Never. Positive means missing electrons.
- **Reversing conduction and induction.** Conduction gives the **same** sign; induction with grounding gives the **opposite** sign. The test is: did the charged object touch?
- **Earthing order.** Remove the ground connection *before* the rod, or the electrons flow straight back and the sphere ends neutral.
- **Calling a polarised object charged.** Before earthing, its net charge is still exactly zero.
- **Forgetting to halve on contact.** (q₁ + q₂)/2, with signs.
- **Prefix slips.** nC = 10⁻⁹, μC = 10⁻⁶, pC = 10⁻¹². Most lost marks in this course are powers of ten.

### In the exam

Expect a definition question (the three properties of charge; define induction), where the marks are in the precise wording; a sign-tracking question ("a negative rod near an earthed sphere — final charge?" → positive); a sharing calculation on identical spheres; and a quantisation calculation, which is one division. The photocopier case study is fair game: a photoconductive drum is charged to a high voltage, light from the white parts of the page discharges those regions, toner is attracted only to the still-charged regions, transfers to paper, and heat fuses it.

---

## Part 2 — Coulomb's law, superposition and the electric field
*(Week 2 — the most heavily drilled week of the course)*

### What it is

Her deck teaches exactly four things, and every problem in it is **collinear** — everything lies on one line, and she never once resolves a force or a field into components.

**1. Coulomb's law, in her words.** "Coulomb's law states the magnitude of the electric force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them."

**F = k|q₁q₂|/r² = (1/4πε₀)|q₁q₂|/r², with k = 1/4πε₀ = 9.0 × 10⁹ N m²/C²**

**2. The bars are not decoration.** She writes **|q₁q₂|**, a product of *magnitudes*, so the law gives a **magnitude only**. The direction — repulsion for like signs, attraction for unlike — comes from the picture, never from substituting a negative number.

**3. The principle of superposition of forces**, verbatim: "Coulomb's law only describe the interaction of two point charges. Experiments have shown that when two charges exert forces simultaneously on a third charge, the total force acting on that charge is the **vector sum** of the forces that the two charges would exert individually."

**4. The electric field**, verbatim: "The electric field at a point is the force a unit charge (q = +1 C) would experience if placed there."

**E = F/q₀**, SI unit **N/C**, a vector; and for a point charge **|E| = |F|/q = kQ/r²**, radially **outward from +Q**, radially **inward toward −Q**.

Her notation: **F_ij means the force that charge i exerts on charge j** — source first, victim second. Read the *second* subscript to know whose free-body diagram you are on.

**Field-line rules**, her three: lines start on positive charges and end on negative charges, or at infinity for a single charge; **the more closely spaced the lines, the stronger the force**; and **the direction of the lines shows how a positive charge would move**, a negative charge moving the opposite way. She adds that a charge feels **no net force from its own field**, which is why you never include a charge's own contribution when finding the field acting on it.

Between **parallel plates** the lines are straight, evenly spaced and parallel, running from the + plate to the − plate: the field there is **uniform**. She gives no formula for it — E = V/d is not in this deck.

### Why it works

The inverse square is geometry. Influence spreading outward covers a sphere of area 4πr²; double the distance and it covers four times the area, so its intensity quarters. She makes this concrete by labelling her Example 1 distances **r₁ = 1.2 nm = r** and **r₂ = 2.4 nm = 2r**, so that the two answers come out 16 × 10⁻¹¹ N and 4 × 10⁻¹¹ N — exactly a factor of four, which you can write down without recomputing.

**The field formula is Coulomb's law with one test charge divided out.** Her slide-13 derivation is two lines: a test charge +q at separation r feels |F| = kQq/r², so |E| = |F|/q = kQ/r². That is why **E is a property of the source alone** — the q you brought has cancelled and is gone — and why doubling the test charge doubles F but leaves E untouched.

**Method, every time.** Magnitudes first, directions second, then add signed values along your chosen axis. On a line, **same direction ⇒ add, opposite directions ⇒ subtract**, and the answer points the way the bigger arrow points. Whether you add or subtract is decided by the free-body diagram, before any arithmetic happens.

> ⚠ **Slide error (week 2, slide 14).** The slide is headed "**ELECTRIC FIELD AROUND A POSITIVE CHARGE, − Q**". It should read **NEGATIVE**. The body text ("direction of electric field is radially inward") and the diagram — arrows pointing in toward a minus sphere — are both correct; only the heading word is wrong. Do not copy "positive" into a script.

> ⚠ **Notation, slides 13, 14, 20, 23.** She prints |E| = k**Q**/r² where strictly it should be k**|Q|**/r², since the left side is a magnitude. In practice she behaves correctly — on slide 20 she declares Q = −6.8 × 10⁻⁶ C and then substitutes 6.8 × 10⁻⁶ — so do the same: feed in the magnitude, state the direction separately.

### Worked example 1 — superposition of forces (her Example 1)

**"Two protons are 3.6 nm apart. What is the total force on an electron located on the line between them, 1.2 nm from one of the protons?"** (e = 1.6 × 10⁻¹⁹ C)

Three charges on a line: q₁ = +e (left proton), q₃ = −e (the electron), q₂ = +e (right proton), with r₁ = 1.2 nm and r₂ = 3.6 − 1.2 = 2.4 nm. The electron is negative, so it is **attracted to both protons**, and because they lie on opposite sides the two pulls **oppose**.

|F₁₃| = k|q₁q₃|/r₁² = 9.0 × 10⁹ (1.6 × 10⁻¹⁹ × 1.6 × 10⁻¹⁹)/(1.2 × 10⁻⁹)² = **16 × 10⁻¹¹ N**
|F₂₃| = k|q₂q₃|/r₂² = 9.0 × 10⁹ (1.6 × 10⁻¹⁹ × 1.6 × 10⁻¹⁹)/(2.4 × 10⁻⁹)² = **4 × 10⁻¹¹ N**

*(The numerator is 9.0 × 10⁹ × 2.56 × 10⁻³⁸ = 2.304 × 10⁻²⁸ in both; the denominators are 1.44 × 10⁻¹⁸ and 5.76 × 10⁻¹⁸.)*

> ⚠ **Her deck stops there and never states the total force**, which is what the question asks for. Finish it: the two attractions oppose, so the vector sum is the **difference**, pointing toward the **nearer** proton:
> **ΣF = 16 × 10⁻¹¹ − 4 × 10⁻¹¹ = 12 × 10⁻¹¹ N = 1.2 × 10⁻¹⁰ N, toward the nearer proton.**

Answering "16 × 10⁻¹¹ N" forgets the second proton; answering "20 × 10⁻¹¹ N" adds two arrows that point opposite ways.

### Worked example 2 — three charges on a line (her Example 2)

**Q₁ = −18 μC at x₁ = −9 m, Q₂ = −12 μC at x₂ = 1 m, Q₃ = +24 μC at x₃ = 7 m.** Separations, which she uses without stating them: r₁₂ = 10 m, r₁₃ = 16 m, r₂₃ = 6 m. Take +x to the right.

**(a) The free-body diagrams.** On Q₁: Q₂ is negative and to the right, so it repels **left**; Q₃ is positive and to the right, so it attracts **right**. On Q₂: Q₁ repels it **right**, Q₃ attracts it **right** — both the same way. On Q₃: both negatives lie to its left and both attract, so **both arrows point left**.

**(b) Net force on Q₁.**
F₂₁ = 9.0 × 10⁹ (18 × 10⁻⁶ × 12 × 10⁻⁶)/(10)² = 1.944/100 = **0.0194 N** (leftward)
F₃₁ = 9.0 × 10⁹ (24 × 10⁻⁶ × 18 × 10⁻⁶)/(16)² = 3.888/256 = **0.0152 N** (rightward)
**ΣF = F₃₁ − F₂₁ = 0.0152 − 0.0194 = −0.0042 N**

Read the minus as a **direction**: **4.2 × 10⁻³ N in the −x direction**. Note that the *nearer* charge wins even though Q₃ is twice as large, because 16 m is 1.6 times 10 m and 1.6² = 2.56 more than cancels the factor 2.

**(c) Net force on Q₂** — set on her slide, never solved. Both arrows point +x, so they **add**:
F₁₂ = 9.0 × 10⁹ (18 × 10⁻⁶ × 12 × 10⁻⁶)/(10)² = **0.0194 N**, +x
F₃₂ = 9.0 × 10⁹ (24 × 10⁻⁶ × 12 × 10⁻⁶)/(6)² = 2.592/36 = **0.0720 N**, +x
**ΣF = 0.0914 N = 9.14 × 10⁻² N in the +x direction.**

F₁₂ and F₂₁ have the **same magnitude**, 0.0194 N — Newton's third law. Getting different numbers for those two means you have mixed up a separation.

> ⚠ **Slide error (week 2, slide 8).** The example's parts are lettered **a, b, f**. There are no parts c, d or e; "f" is a misprint for **c**. Do not go looking for four missing sub-questions.

### Worked example 3 — her three solved field problems

**1. "A 2.40 μC charge is subject to a 3.00 mN force due to an electric field. What is the magnitude of the electric field?"**

E = F/q₀ = (3.00 × 10⁻³)/(2.40 × 10⁻⁶) = **1.25 × 10³ N/C = 1250 N/C**

The whole problem is the prefix conversion, m = 10⁻³ and μ = 10⁻⁶. **No value of k appears** — this is the *defining* equation, not the point-charge formula. Answering "1250 N" is a unit error worth as much as an arithmetic one.

**2. "What is the direction and magnitude of the electric field due to a −6.8 μC point charge at a distance of 7.4 m?"**

|E| = k|Q|/r² = 9.0 × 10⁹ (6.8 × 10⁻⁶)/(7.4²) = 6.12 × 10⁴/54.76 = **1.1 × 10³ N/C**

> ⚠ **Incomplete on the slide.** The question asks for direction *and* magnitude; she gives only the magnitude. The direction is **radially inward, toward the charge**, because the source is negative. Write both.

**3. "A +2.00 nC point charge is at the origin, and a second −5.00 nC point charge is on the x-axis at x = 0.800 m. Find the electric field magnitude and direction at 0.200 m. Find the net electric force on an electron placed at 0.200 m."**

Her diagram settles the direction before any arithmetic: **E₁ points away from the positive q₁** (rightward, since the field point is to its right) and **E₂ points toward the negative q₂** (rightward again, since q₂ is further right). Same direction ⇒ **add**.

E₁ = k|q₁|/r₁² = (9.0 × 10⁹ × 2 × 10⁻⁹)/(0.200)² = 18/0.0400 = **450 N/C**
E₂ = k|q₂|/r₂² = (9.0 × 10⁹ × 5 × 10⁻⁹)/(0.600)² = 45/0.360 = **125 N/C**
**E = 450 + 125 = 575 N/C in the +x direction**

The second distance is **0.800 − 0.200 = 0.600 m**, the distance from the source to the field point. Using 0.800 m gives 70.3 N/C and is the single commonest way to lose this problem.

> ⚠ **The deck never answers its own second sentence.** Finish it with F = qE:
> |F| = (1.60 × 10⁻¹⁹)(575) = **9.2 × 10⁻¹⁷ N**, and because the electron is **negative** the force is **opposite to E**, i.e. **9.2 × 10⁻¹⁷ N in the −x direction**. Nothing about E changed; only the sign of q.

### Where people go wrong

- **Substituting signed charges into F = k|q₁q₂|/r².** She never does. Magnitudes in, direction off the sketch.
- **Forgetting to square r** — the commonest omission in the whole course. Halving r must quadruple F, not double it.
- **Not converting prefixes**, and r is squared, so a slip of 10³ becomes a factor of 10⁶.
- **Using the wrong pair's separation.** Label every distance before calculating.
- **Adding when the arrows oppose.** Example 1 subtracts (16 − 4); Example 2(c) adds (0.0194 + 0.0720). Same principle, different pictures.
- **Losing the direction half of the answer.** Both parts of Example 2 ask for "magnitude **and** direction". A bare "0.0042 N" is half a mark.
- **Confusing E and F.** N/C is a field, N is a force. E = F/q₀ divides by a charge; F = qE multiplies by one.
- **Thinking E depends on what you put there.** The test charge cancels: |E| = kQ/r² contains only the source and the distance.
- **Assuming the bigger charge wins.** On Q₁ the 24 μC at 16 m loses to the 12 μC at 10 m, because distance enters squared.

### In the exam

State Coulomb's law with **both** proportionalities *and* the direction along the line of centres, and state superposition with the words **vector sum**. Expect one collinear multi-charge force problem worked exactly like her Example 2 — draw the axis, mark the positions, get each distance, get each magnitude, get each direction by attract/repel, add signed values — since most of the marks are for method. Expect a "field from a measured force" one-liner (1250 N/C), a point-charge field with its direction (1100 N/C inward), and a two-charge field superposition (575 N/C). Learn her five answers cold: **16 and 4 × 10⁻¹¹ N (net 12 × 10⁻¹¹ N); 0.0194 and 0.0152 N (net 4.2 × 10⁻³ N in −x); 1250 N/C; 1100 N/C inward; 450 + 125 = 575 N/C in +x, and the electron force 9.2 × 10⁻¹⁷ N in −x.**

> **Not in this week.** The week-2 LMS summary sheet name-drops "electric potential" and a magnetic force on a moving charge in a bullet list. The deck defines neither, derives neither and works neither. Know the one-line definitions in case a definition question appears; do not spend revision time on V = kQ/r or on q(v × B) for this week — the magnetic force is Part 12, and it is week 9's business.

---

## Part 3 — Electromotive force, internal resistance and terminal voltage
*(Weeks 3 and 4)*

### What it is

**Electromotive force (emf, ε)** is the energy a source gives to each coulomb it drives round the circuit: **ε = W/Q**, unit the **volt** = joule per coulomb. Despite the name it is **not a force**. A cell converts chemical energy into electrical energy, making one terminal positive and the other negative.

A real source has **internal resistance r**, so some of that energy is spent inside the source itself:

**ε = V + Ir**, hence **V = ε − Ir** (discharging), **V = ε + Ir** (charging)
Round a single loop, **ε = I(R + r)**, hence **I = ε/(R + r)**

**Dimensions of emf:** work is M L² T⁻², charge is I T, so **[ε] = M¹ L² T⁻³ I⁻¹**.

**Ideal sources.** An ideal voltage source holds V constant whatever current is drawn (r = 0); an ideal current source pushes I constant whatever voltage develops (internal resistance infinite). A real voltage source is an ideal emf **in series** with r; a real current source is an ideal current source **in parallel** with r.

### Why it works

ε is the *cause* and V is what survives to the terminals. With no current there is nothing to lose, so V = ε; with current flowing, the "lost volts" **Ir** are dissipated inside the cell and V is always smaller. That is why a voltmeter across a cell reads the emf only in the limit of zero current — an ideal, infinite-resistance meter, or an open circuit.

**Power accounting** falls straight out: multiply ε = I(R + r) by I to get

**εI = I²R + I²r** — the source delivers εI, the load dissipates I²R, and I²r is wasted inside.

**The V–I experiment.** Vary R with a rheostat, read V on a voltmeter and I on an ammeter, and plot **V against I**. Since V = ε − rI, the graph is a straight line:

- the **intercept on the V axis is ε** (the voltage extrapolated to I = 0);
- the **gradient is −r**, so **r = −(gradient)**.

Take many readings, repeat them, and disconnect the cell between readings so it does not drain and shift the values.

> ⚠ **Slide error (week 4).** The deck says the internal resistance is "the negative reciprocal of the slope". It is not. The slope of V against I is already in volts per ampere, i.e. **ohms**, so **r = −(slope)**; a reciprocal would give siemens. Check the units and the error announces itself.

> ⚠ **Loose statement (week 4 summary sheet).** "Voltmeters are used to measure EMF" is true only at zero current. On load, a voltmeter reads the **terminal** voltage.

**Motional emf**, which week 3 introduces here and week 10 develops: a rod of length l moving at speed v perpendicular to a field B sweeps out area, so the flux enclosed by its circuit changes and

**ε = Bvl**

with B in tesla, l the length of rod *in the field* in metres, and v the speed perpendicular to the rod. The carriers in the rod feel a magnetic force qvB along its length; work qBvl per carrier divided by q gives Bvl. This is one instance of **Faraday's law, ε = −N dΦ_B/dt**, whose minus sign is Lenz's law and carries direction only.

**Application named in the deck: the electromagnetic (magflow) flowmeter.** Coils make a field B, the conducting liquid is the moving conductor, and the induced voltage — proportional to the average flow velocity — is read by electrodes and converted to a volumetric flow rate from the pipe dimensions. No moving parts. It works for conductive, water-based liquids, and not for hydrocarbons or distilled water.

### Worked example

**A cell of ε = 1.5 V and internal resistance r = 0.5 Ω drives R = 2.5 Ω.**

I = ε/(R + r) = 1.5/(2.5 + 0.5) = 1.5/3.0 = **0.5 A**
V = ε − Ir = 1.5 − (0.5)(0.5) = **1.25 V**
Check: V = IR = (0.5)(2.5) = 1.25 V ✓ Lost volts Ir = 0.25 V; power wasted inside = I²r = 0.125 W.

**Getting ε and r from a graph.** Readings (0.20 A, 1.40 V) and (0.80 A, 1.10 V).
Gradient = (1.10 − 1.40)/(0.80 − 0.20) = −0.30/0.60 = −0.50 V/A ⇒ **r = 0.50 Ω**
ε = V + Ir = 1.40 + (0.20)(0.50) = **1.50 V**

**A bigger source.** ε = 12.0 V, r = 0.50 Ω, R = 5.5 Ω.
I = 12.0/6.0 = **2.00 A**; V = 12.0 − 1.00 = **11.0 V** = IR ✓
Power: source 24.0 W, load I²R = 22.0 W, internal I²r = 2.0 W, and 22.0 + 2.0 = 24.0 ✓
*Put the same cell into 55 Ω and I = 0.216 A, V = 11.89 V — the "battery = fixed 12 V" model is nearly right at small currents, which is exactly why it survives.*

**Motional emf with its energy audit.** A rod l = 0.50 m slides at v = 3.0 m/s across B = 0.40 T, circuit resistance R = 2.0 Ω.
ε = Bvl = (0.40)(3.0)(0.50) = **0.60 V**; I = ε/R = **0.30 A**
Force to keep it moving: F = BIl = (0.40)(0.30)(0.50) = 0.060 N; mechanical power Fv = **0.18 W**
Electrical power I²R = (0.30)²(2.0) = **0.18 W** ✓ — the mechanical work is exactly the electrical energy produced.
*(The deck's own version: l = 0.7 m, v = 1 m/s, B = 20 T gives ε = 14 V.)*

**Faraday with N turns.** A 200-turn coil's flux falls from 0.030 Wb to 0.010 Wb in 0.10 s.
ε = −N ΔΦ/Δt = −200 × (−0.020)/0.10 = **40 V** in magnitude; the sign says the induced current opposes the decrease.

### Where people go wrong

- **ε versus V.** With I = 0 they are equal; with I > 0, V = ε − Ir is always smaller. ε belongs to the source; V depends on the load.
- **"emf is a force."** Its unit is the volt, J/C, not the newton.
- **Writing I = ε/R.** If the loop includes the cell, r belongs in the sum, and leaving it out always gives too large a current.
- **Slope versus reciprocal on the V–I graph.** r = −(slope), in ohms. The **intercept**, not the slope, gives ε.
- **Charging versus discharging.** V = ε + Ir when current is driven *into* the + terminal. A negative power output means exactly this (see Part 8).
- **Dropping Faraday's minus sign into a magnitude.** It is Lenz's law; drop it when reporting a size, keep it when asked for a direction.

### In the exam

Expect a single-loop calculation — find I, then V, then the power split — and a V–I graph question where the marks are for identifying the intercept as ε and minus the gradient as r. Be able to define emf in one sentence (**work done per unit charge in driving it round the circuit**), give its unit and its dimensions, and state ε = Bvl with each symbol named. The magflow meter is a likely short-answer application.

---

## Part 4 — Energy in the electric field: capacitance and dielectrics
*(Week 3 "Energy in Electric Fields"; week 4 summary)*

### What it is

A **capacitor** stores charge, and with it energy, in the field between two conductors.

**C = Q/V** (farad); parallel plates in vacuum **C₀ = ε₀A/d**; with a dielectric **C = κε₀A/d = κC₀**
**V = Ed** between parallel plates
**U = ½CV² = ½QV = Q²/2C** (joules)
**u_E = ½ε₀E²** (joules per cubic metre); with a dielectric u_E = ½κε₀E²
Total energy in a parallel-plate capacitor: **U = u_E × (A·d)**, A·d being the volume between the plates

**κ (the dielectric constant, also written K)** is the factor by which a material multiplies the capacitance: 1 in vacuum, 1.0006 in air, about 7 in glass. Susceptibility **χ_e = κ − 1**; permittivity **ε = κε₀**.

**Breakdown potential V_max** is the largest p.d. a particular capacitor's dielectric can hold; exceed it and the dielectric breaks down and conducts. The corresponding field limit, in V/m, is the material's **dielectric strength**. Note the units: V_max belongs to the geometry, dielectric strength to the material.

### Why it works

Charging a capacitor needs external work: electrons are dragged from one plate to the other against the field that is building up as they go. Because the p.d. rises from 0 to V as the charge accumulates, the *average* p.d. during the process is ½V, and the work is **½QV**, not QV. That work is stored as electrostatic potential energy in the field, and discharging gives it back.

**Why the energy lives in the field, not on the plates.** Between parallel plates the field is uniform, so the energy density ½ε₀E² is the same everywhere between them and essentially zero outside. Multiply by the volume Ad and you get the same total that ½CV² gives, by a completely different route. Two independent formulas agreeing is the check to run.

**What a dielectric does.** An applied field polarises the insulating slab — charge shifts within each molecule — producing bound surface charges whose own field **opposes** the applied one. Consequences: the internal field is reduced by κ, the capacitance rises by κ, more energy can be stored at a given voltage, the gap withstands more volts before breakdown, and the slab physically stops the plates touching.

**Everything then depends on one question: is the battery still connected?**

| | Battery **disconnected** (Q fixed) | Battery **connected** (V fixed) |
|---|---|---|
| C | ×κ | ×κ |
| Q | unchanged | ×κ |
| V | ÷κ | unchanged |
| E | ÷κ | unchanged |
| U | ÷κ | ×κ |

**Maximum stored energy from a set of capacitors** comes from connecting them in **parallel**: C_parallel = ΣC is larger than any one of them, while a series combination is smaller than the smallest, and U = ½CV² grows with C at fixed V.

> ⚠ **Slide errors (week 3).** Three, all worth naming.
> **(i)** The deck writes "U = ½εE²" and quotes **1.77 × 10⁻⁷ J**. That expression is an energy **density**, so the figure is **1.77 × 10⁻⁷ J/m³**; multiply by the volume Ad to get joules.
> **(ii)** For A = 0.02 m² and d = 0.005 m it quotes **C ≈ 3.54 × 10⁻¹² F**. The correct value is **3.54 × 10⁻¹¹ F** — one power of ten out.
> **(iii)** The dielectric hint "E′ = E × K^½" is not a standard result in any case. At **constant charge** E′ = E/κ; at **constant voltage** E′ = E. State which quantity is held fixed before you change anything.

### Worked example

**Parallel plates, A = 0.02 m², d = 0.005 m, vacuum, with E = 200 N/C between them.**

C = ε₀A/d = (8.85 × 10⁻¹² × 0.02)/0.005 = **3.54 × 10⁻¹¹ F**
V = Ed = 200 × 0.005 = **1.0 V**; Q = CV = **3.54 × 10⁻¹¹ C**
u_E = ½ε₀E² = ½(8.85 × 10⁻¹²)(200)² = **1.77 × 10⁻⁷ J/m³**
Volume = Ad = 1.0 × 10⁻⁴ m³, so **U = u_E·Ad = 1.77 × 10⁻¹¹ J**
Check by the other route: U = ½CV² = ½(3.54 × 10⁻¹¹)(1.0)² = 1.77 × 10⁻¹¹ J ✓

**Now fill it with a dielectric of κ = 4, battery disconnected.**
C′ = κC = **1.42 × 10⁻¹⁰ F**; Q is fixed, so V′ = V/κ = **0.25 V** and E′ = E/κ = **50 N/C**
U′ = Q²/2C′ = U/4 = **4.43 × 10⁻¹² J** — the energy *falls*, the difference being the work the fringing field does pulling the slab in.
*(Battery left connected instead: V is fixed, so E′ = E, Q′ = 4Q and U′ = 4U.)*

**A second dielectric case, at 100 V.** A = 2.0 × 10⁻² m², d = 1.0 mm, air.
C₀ = (8.85 × 10⁻¹²)(2.0 × 10⁻²)/(1.0 × 10⁻³) = **1.77 × 10⁻¹⁰ F = 177 pF**
Charged to 100 V: Q = **17.7 nC**, E₀ = V/d = 1.0 × 10⁵ V/m
Disconnect, insert κ = 5.0: C = **885 pF**, V = Q/C = **20 V**, E = **2.0 × 10⁴ V/m**, χ_e = κ − 1 = **4.0**

**The defibrillator.** C = 100 μF charged to V = 5.0 kV.
U = ½CV² = ½(10⁻⁴)(2.5 × 10⁷) = **1250 J**
Delivered in 2.0 ms: P = U/t = 1250/0.0020 = **6.25 × 10⁵ W** — enormous power from a modest battery, because the fill is slow and the release is fast.

### Where people go wrong

- **Energy U (J) versus energy density u_E (J/m³).** Does the expression contain a volume? ½ε₀E² is per cubic metre; ½CV² is already joules.
- **U = ½CV² versus QV.** The p.d. rises from zero as charge is added, so the average is ½V. QV with no half is the work when the p.d. is *held* constant.
- **Forgetting to square V**, which turns 1250 J into 0.25 J.
- **Series versus parallel for maximum energy.** Parallel adds capacitances; series always gives less than the smallest.
- **Constant Q versus constant V.** The single question that decides every dielectric problem: is the battery still attached?
- **Zero field in a conductor versus reduced field in a dielectric.** A conductor's free charges rearrange until the internal field is *exactly* zero; a dielectric's bound charges only reduce it by κ, never to zero.
- **κ, ε and χ_e.** κ is dimensionless and at least 1; ε = κε₀ carries F/m; χ_e = κ − 1.

### In the exam

Expect a parallel-plate calculation ending in either the stored energy or the energy density — and read carefully which one is wanted, since the deck itself confuses them. Expect a dielectric question that turns on whether the battery is connected. Be able to define capacitance, dielectric constant and breakdown potential in one line each, and to say why the energy is ½QV rather than QV. The defibrillator is the deck's named application and the obvious short-answer candidate.

---

## Part 5 — Conductors and insulators
*(Week 3 summary sheet — the only source for this strand, so it is qualitative)*

### What it is

A **conductor** allows electricity to flow through it, because electrons move freely from atom to atom. Named characteristics: **free movement of electrons**, **zero electric field inside** in electrostatic equilibrium, and **low resistance** (low resistivity). Named applications: thermometers, food-storage foils, vehicle engines.

An **insulator** resists the flow of electricity because of its **high resistivity**; it has **no free electrons**, and it protects against the passage of electricity, heat and sound. Named examples: glass, plastic, rubber.

**The three basic differences**, and this is the shape of the exam answer: whether electrons are free to move; whether an electric field can exist inside the material; and whether the material facilitates or resists the flow of electricity.

### Why it works

In a metal, each atom releases one or more outer electrons into a shared "sea" that belongs to the solid rather than to any atom. Apply a field and those electrons drift, which is a current. Apply a field to an *isolated* conductor and they drift only until they have piled up at the surfaces, where their own field exactly cancels the applied one — after which nothing moves. That is why **the field inside a conductor in electrostatic equilibrium is exactly zero**, and why all of a conductor sits at a single potential.

In an insulator the electrons are bound to particular atoms. A field can distort the charge distribution within each molecule — that is polarisation, and it is what makes a dielectric useful — but nothing is free to travel, so no current flows and the internal field is only *reduced*, not cancelled.

**Link to the rest of the course.** The dielectric in a capacitor is an insulator, which is why the charge stays on the plates; the wires and the plates are conductors, which is why the whole of each plate sits at one potential. The two ideas are not separate topics.

**Electrical safety, the sheet's case study.** Conductive material in an electrical system causes accidents if it is not properly insulated; correctly chosen insulators block current where it is not wanted and so protect people and structures. The sheet also flags that **temperature changes a material's conductivity**, and so its safety behaviour.

### Worked example

*This strand has no formulae in the source, so the "worked example" is a reasoned comparison of the kind the exam asks for in words.*

**Why does a charged rod attract an uncharged metal sphere and also an uncharged plastic bead?**

In the **metal**, the free electrons migrate bodily — toward the rod if it is positive, away if it is negative — so one face of the sphere carries the opposite sign to the rod and the other face the same sign. The opposite sign is nearer, and Coulomb's law is an inverse-square law, so the attraction beats the repulsion. Net charge on the sphere: still exactly zero.

In the **plastic**, no electron can leave its molecule. Each molecule instead stretches slightly, its centre of negative charge shifting a little way toward the rod. The bead's surface acquires a thin layer of bound charge of the opposite sign, and the same inverse-square argument gives attraction — but weaker, because the displacement is a fraction of a molecule rather than the width of the sphere.

**Both are attracted, whichever sign the rod carries**, and neither has gained any net charge. The difference is the *mechanism*: free electrons moving through the material versus bound electrons stretching inside molecules.

### Where people go wrong

- **"An insulator is a conductor that needs more voltage."** No. Push an insulator hard enough and it **breaks down** — the dielectric fails and a conducting path forms — rather than conducting normally.
- **Confusing zero field in a conductor with a reduced field in a dielectric.** Exactly zero versus divided by κ.
- **Forgetting the "in electrostatic equilibrium" clause.** A conductor carrying a current certainly has a field inside it; that field is what drives the current.
- **Listing resistance instead of resistivity.** Resistance depends on the shape of the sample; **resistivity** is the material property.

### In the exam

This strand is examined in words: define conductor and insulator, give the three basic differences, name two examples and one application of each, and explain the safety case study. The likely trap is a multiple-choice item that pairs "free electrons" with "high resistivity" or attaches "zero internal field" to the insulator — read the pairing, not just the words.

---

## Part 6 — DC network analysis: sources, superposition, Thévenin and Norton
*(Week 4)*

### What it is

Circuit analysis means solving for the unknown branch currents, node voltages and effective resistances of a network.

**Combination rules.** Series **R_s = R₁ + R₂ + …**; parallel **1/R_p = 1/R₁ + 1/R₂ + …**
**KCL:** the algebraic sum of the currents into a node is zero. **KVL:** the algebraic sum of the emfs and IR drops round a closed loop is zero. *(A nodal-analysis slide writes "KCR"; read it as KCL.)*

**Zeroing a source** — needed for superposition and for R_Th:

| Source killed | Becomes | Because |
|---|---|---|
| Ideal **voltage** source | **short circuit** (a wire) | it holds 0 V across itself at any current |
| Ideal **current** source | **open circuit** (a break) | it passes 0 A at any voltage |

**Superposition.** The current in any branch is the sum of the currents produced in that branch by each independent source acting alone, with the others zeroed. Valid **only for linear elements**, and **only for currents and voltages, never for power**.

**Thévenin and Norton.** Any linear two-terminal network is equivalent to **V_Th in series with R_Th**, or to **I_N in parallel with R_N**, where

**V_Th = V_oc** (open-circuit voltage, load removed); **R_Th = R_N** = the resistance looking into the terminals with all independent sources zeroed; **I_N = I_sc**; and **V_Th = I_N R_Th**.

**Nodal analysis, her four-step recipe.** (i) Choose a reference node and set it to zero volts — conventionally the one joined to the negative terminal, though the choice is arbitrary because only potential *differences* are physical. (ii) Label the remaining node voltages. (iii) Apply KCL at each non-reference node, writing every branch current as (far-end voltage − node voltage)/resistance. (iv) Solve the simultaneous equations.

### Why it works

**Superposition works because the circuit equations are linear.** Doubling every source doubles every current; adding two sets of sources adds their currents. **Power is quadratic**, P = I²R, so it does not superpose — and this is not a technicality, it is the difference between 4.5 W and 9.0 W in the example below.

**Zeroing is not "deleting".** A dead voltage source still *is* something: a piece of wire that forces zero volts across itself. A dead current source is a gap that forces zero amps. Swapping the two is the commonest superposition error, and it changes the topology of the circuit.

**Thévenin works because a linear two-terminal box is fully described by two numbers.** Measure the voltage with nothing attached and the resistance with the sources dead, and you know everything the box can do to any load you connect. The load must be removed *first*: V_Th is the **open-circuit** voltage, not the voltage you measure with the load in place.

### Worked example — one circuit, four methods

*A 12 V source through 4 Ω and a 6 V source through 2 Ω both feed node A; A returns to ground through R₃ = 4 Ω. Find the current in R₃.*

**By superposition.**
*12 V alone* (the 6 V source replaced by a wire): the source sees 4 Ω in series with (2 ∥ 4) = 1.333 Ω, total 5.333 Ω, so I = 2.25 A, V_A = 2.25 × 1.333 = 3.00 V and I₃′ = 3.00/4 = **0.75 A** down.
*6 V alone* (the 12 V source replaced by a wire): 2 Ω in series with (4 ∥ 4) = 2.00 Ω, total 4.00 Ω, so I = 1.50 A, V_A = 3.00 V and I₃″ = **0.75 A** down.
Same direction, so **I₃ = 1.50 A** and V_A = 6.00 V.

**The power warning.** True power in R₃ = (1.50)²(4) = **9.0 W**. Adding the two single-source powers gives 2 × (0.75)²(4) = 4.5 W — **wrong by a factor of two**, and this is exactly why the rule says currents and voltages only.

**By nodal analysis.** (12 − V_A)/4 + (6 − V_A)/2 = V_A/4. Multiply by 4: (12 − V_A) + 2(6 − V_A) = V_A ⇒ 24 = 4V_A ⇒ **V_A = 6.00 V**, I₃ = **1.50 A** ✓

**By Thévenin,** with R₃ as the load. Remove R₃ first.
V_Th = V_oc: (12 − V)/4 = (V − 6)/2 ⇒ 12 − V = 2V − 12 ⇒ **V_Th = 8.00 V**
R_Th: zero both sources ⇒ 4 ∥ 2 = **1.333 Ω**
Reconnect R₃: I₃ = 8.00/(1.333 + 4) = **1.50 A** ✓

**By Norton.** I_N = V_Th/R_Th = 8.00/1.333 = **6.00 A**, R_N = 1.333 Ω. Check I_sc directly with A shorted to ground: 12/4 + 6/2 = 3 + 3 = **6.00 A** ✓

**Note the two different voltages.** V_Th = 8.00 V with the load removed; V_A = 6.00 V with the load in place. Confusing them is the classic Thévenin error.

### Where people go wrong

- **Zeroed voltage source versus zeroed current source.** Short versus open. Ask what the dead element *forces*.
- **Superposing powers.** Currents and voltages superpose; P ∝ I² does not.
- **V_Th taken with the load still attached.** Delete the load, then measure.
- **Forgetting to invert the parallel formula** (see Part 8, where it costs a whole question).
- **Using superposition on a non-linear element.** The rule needs resistors and ideal sources.

### In the exam

Expect one network solved twice — by superposition and then by nodal analysis, or by Thévenin — with marks for method at every stage. Be ready to state what each ideal source becomes when it is zeroed, and to say in one sentence why powers may not be added. If the question asks for the current *and* the power in a branch, compute the current first and square it once, at the end.

---

## Part 7 — The electric dipole
*(Week 4)*

### What it is

An **electric dipole** is a pair of equal and opposite charges +q and −q separated by a small distance d. The midpoint is its centre and the line through both charges is its axis.

**Dipole moment: p = qd**, a **vector directed from −q to +q** in the physics convention (chemistry uses the reverse — say which you are using). Unit **C·m**. The magnitude uses **one** charge, not their sum.

For r ≫ d:

**Potential:** **V = (1/4πε₀) p cos θ/r²**, θ measured at the centre from the direction of p. At θ = 0 it is maximum; **at θ = 90° it is zero everywhere on the equatorial plane**. It falls as 1/r², faster than a point charge's 1/r.

**Field:** axial **E = (1/4πε₀)(2p/r³)**, **parallel to p**; equatorial **E = (1/4πε₀)(p/r³)**, **antiparallel to p**. Both fall as **1/r³**, and the axial value is exactly **twice** the equatorial one at the same r.

**In a uniform external field:** net force **zero**; torque **τ = p × E**, magnitude **τ = pE sin θ**; potential energy **U = −p·E = −pE cos θ**. Stable at θ = 0 (τ = 0, U = −pE); unstable at θ = 180°. In a **non-uniform** field the net force is generally non-zero and the dipole is drawn toward the stronger field.

**Polar and non-polar molecules.** Polar: the centres of positive and negative charge do not coincide, so there is a permanent moment (HCl, H₂O, NaOH), and these align with an applied field. Non-polar: the bond moments cancel and p = 0 (CO₂, O₂, CH₄). The dipole moment is what reveals molecular geometry and orientation in three dimensions.

### Why it works

**Why the axial field is twice the equatorial field.** On the axis you are nearer one charge than the other, so the two contributions point the same way and their difference is reinforced by the 1/r² asymmetry. On the perpendicular bisector you are equidistant from both, the components perpendicular to the axis cancel exactly, and only the components along the axis survive — pointing from +q toward −q, i.e. **opposite to p**. Do the algebra and the ratio comes out at exactly 2:1.

**Why V = 0 on the bisector but E is not.** Potential is a scalar: equal distances from equal and opposite charges give kq/r + k(−q)/r = 0. Field is a vector: the two contributions do not cancel, they add to something pointing along −p. So **V = 0 does not mean E = 0** — the potential is zero *on that surface* while changing rapidly *across* it, and E is the gradient of V.

**Why the net force is zero but the torque is not.** In a uniform field the forces on the two ends are qE and −qE: equal in size, opposite in direction, so they sum to zero. But they act at different points, so they form a **couple**, and the couple turns the dipole until p lines up with E. That is why a polar molecule in a uniform field rotates without drifting, and why a non-uniform field is needed to pull it anywhere.

> ⚠ **Slide imprecision (week 4).** A slide says that in a non-uniform field the net force "will undoubtedly be greater than zero". It is *generally* non-zero, but it can still vanish for particular orientations or at symmetry points. "Generally non-zero" is the defensible wording.

> ⚠ **Slide error (week 4).** The dipole torque is printed as "τ = 2 q an E sinθ". There is no quantity "an": it is **τ = 2qaE sin θ = pE sin θ**, with 2a = d the separation.

### Worked example

*q = 2.0 nC and −2.0 nC separated by d = 1.0 mm, so **p = qd = (2.0 × 10⁻⁹)(1.0 × 10⁻³) = 2.0 × 10⁻¹² C·m**, directed from −q to +q.*

**Potential at r = 5.0 cm, θ = 60°.** (r/d = 50 ≫ 1, so the far-field formula is legitimate.)
V = kp cos θ/r² = (9.0 × 10⁹)(2.0 × 10⁻¹²)(0.500)/(0.050)² = (1.8 × 10⁻²)(0.500)/(2.50 × 10⁻³) = **3.6 V**
At θ = 90° on the same sphere, **V = 0 exactly**.

**Field at the same r = 5.0 cm**, where r³ = 1.25 × 10⁻⁴ m³.
Axial: E = 2kp/r³ = 2(9.0 × 10⁹)(2.0 × 10⁻¹²)/(1.25 × 10⁻⁴) = **2.9 × 10² N/C, parallel to p**
Equatorial: E = kp/r³ = **1.4 × 10² N/C, antiparallel to p** — ratio exactly 2:1 ✓

**Torque and energy** in a uniform E = 3.0 × 10⁵ N/C at θ = 30°.
τ = pE sin θ = (2.0 × 10⁻¹²)(3.0 × 10⁵)(0.500) = **3.0 × 10⁻⁷ N·m**, turning p toward E
U = −pE cos θ = −(2.0 × 10⁻¹²)(3.0 × 10⁵)(0.866) = **−5.2 × 10⁻⁷ J**
Work to rotate to θ = 90°: W = ΔU = 0 − (−5.2 × 10⁻⁷) = **+5.2 × 10⁻⁷ J**, which must be supplied
**Net force = 0 throughout**, because E is uniform.

### Where people go wrong

- **p = qd uses one charge.** Not 2qd. The object is neutral overall, so "adding the two charges" is meaningless.
- **Forgetting to convert mm to m** before multiplying.
- **Axial versus equatorial.** Same 1/r³ law, but axial is twice as large and **parallel** to p; equatorial is **antiparallel**.
- **Assuming V = 0 implies E = 0.** On the equatorial plane V = 0 everywhere and E = kp/r³ ≠ 0.
- **sin in the torque, cos in the energy.** τ = pE sin θ and U = −pE cos θ. Using cos 30° for a torque is the standard slip.
- **Net force versus net torque.** Uniform field: force zero, torque generally non-zero. Aligned in a *non-uniform* field: torque zero, force non-zero.
- **Physics versus chemistry direction.** In any PHY_102 answer, −q → +q, and say so.

### In the exam

Expect a definition of the dipole moment with its direction and unit, a comparison of the axial and equatorial fields (the 2:1 ratio and the two directions), and a torque-or-energy calculation in a uniform field where the marks turn on sin versus cos and on the net force being zero. The polar/non-polar molecule list is a cheap definition mark.

---

## Part 8 — Kirchhoff's rules
*(Week 5)*

### What it is

Her deck does four things: recalls the two combination rules and works one instance of each, defines junction and loop, states the two rules, and then spends five slides on a problem-solving strategy that is **entirely about signs**.

**Parallel.** "A parallel connection splits the current in the resistors while the voltage across each resistor is the same."
**1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ⋯ 1/R_N** — this gives you 1/R_eq, so **you must invert at the end**.

**Series.** "If the resistors are in series, the current must be the same in all of them, but the voltage may vary."
**R_eq = R₁ + R₂ + R₃ + ⋯ R_N**

**Why Kirchhoff exists**, verbatim: "some circuits cannot be categorized into series and/or parallel connection. To find the currents in this network of resistors, we will apply the techniques developed by the German Physicist, Gustav Kirchhoff."

**Junction and loop**, verbatim: "A point in a circuit where **three or more conductors meet** is called a junction, while a loop is any **closed conducting path**." Two conductors meeting is *not* a junction — her figure prints "Not a Junction" on two such corners.

**Junction rule:** "The algebraic sum of the currents into any junction is zero." **ΣI = 0** — conservation of **charge**.
**Loop rule:** **ΣV = 0** round any closed loop — conservation of **energy**.

**The four sign rules**, which are the examinable core:

| What you walk through | Sign of the term |
|---|---|
| Source, crossing **− then +** | **+ε** |
| Source, crossing **+ then −** | **−ε** |
| Resistor, walking **with** the assumed current | **−IR** |
| Resistor, walking **against** the assumed current | **+IR** |

### Why it works

**The junction rule is charge conservation.** No charge can accumulate at a junction, so whatever arrives per second must leave per second. The word doing the work is **algebraic**: a current flowing *out* enters the sum as a negative current *in*, so I₁ + I₂ − I₃ = 0 is the same statement as I₁ + I₂ = I₃.

**The loop rule is energy conservation.** Carry a coulomb once round a closed path and it must come back to the same potential, so the gains and losses cancel.

**Two independent choices are being made, and confusing them is what loses the question.** The **current arrow** you draw on a branch is a *definition of what counts as positive current there*; you may draw it either way and the algebra will correct you with a minus sign. The **travel direction** round the loop is a separate choice; reversing it multiplies the whole equation by −1 and changes no answer at all. The emf sign depends only on the travel direction relative to the battery's terminals; the IR sign depends only on the travel direction relative to the current arrow.

**Nothing this week is a vector.** Current here is a signed scalar attached to a branch and potential difference is a signed scalar attached to a pair of points. All the direction information is carried by those signs and by the arrows you drew — which is why sign discipline replaces the vector diagrams of week 2, and why one lost minus sign loses the whole question.

**Two sanity checks worth doing every time.** A **series** equivalent must land *above* the largest resistor; a **parallel** equivalent must land *below* the smallest. If a parallel answer comes out bigger than one of the branches, you forgot to invert.

> ⚠ **Slide gap (week 5, slide 11).** The slide announces "the two Kirchhoff's rules are given below" and then prints only the **junction** rule. The loop rule ΣV = 0 appears nowhere in words until the Summary slide, although Example 1 uses it before then. If you are asked to "state the two rules", give both: **ΣI = 0** at a junction (charge) and **ΣV = 0** round a loop (energy).

> ⚠ **Slide imprecision (week 5, Summary).** It says "the sum of the **voltage drops** around any closed loop must be zero". Taken literally that leaves the batteries out, and a loop of nothing but resistive drops could sum to zero only if the current were zero. What ΣV = 0 adds is **every potential change**, emfs included — which is exactly what she does in Example 1, where +12 V and −4 V sit in the same sum as the four IR terms.

### Worked example 1 — the two combination rules

**"If R₁ = 4 Ω, R₂ = 6 Ω and R₃ = 10 Ω, find the equivalent resistor."**
1/R_eq = 1/4 + 1/6 + 1/10. Over the common denominator 60: 15/60 + 10/60 + 6/60 = **31/60**
**R_eq = 60/31 = 1.94 Ω** — and 1.94 < 4, the smallest branch ✓
*Writing 0.52 Ω is 31/60 left uninverted, and it is the single most common lost mark on this slide.*

**"If R₁ = 3 Ω, R₂ = 5 Ω, R₃ = 9 Ω and R₄ = 10 Ω":** R_eq = 3 + 5 + 9 + 10 = **27 Ω**, and 27 > 10 ✓

### Worked example 2 — her Example 1, the only circuit the deck solves end to end

*One rectangular loop. Along the top: a 2 Ω resistor then a 12 V battery, + on its left; point b at the top-right corner. Down the right: 7 Ω. Along the bottom: a 4 Ω resistor then a 4 V battery, + on its left; point a at the bottom-left corner. Up the left: 3 Ω. The assumed current runs down the left side, rightward along the bottom, up the right and leftward along the top, and a curved arrow labelled "Travel" runs the same way.*

Identify the parts before touching the algebra: **2 Ω is the internal resistance of the 12 V battery, 4 Ω is the internal resistance of the 4 V battery**, and 3 Ω and 7 Ω are the two external resistors. **There are no junctions in this circuit** — every point joins exactly two conductors — so one single current I serves the whole loop and this is a pure loop-rule problem.

**(a) The current.** Starting at *a* and travelling counterclockwise with the current:

**−I(4 Ω) − 4 V − I(7 Ω) + 12 V − I(2 Ω) − I(3 Ω) = 0**

Term by term: −I(4 Ω), walking with the current; −4 V, crossing that battery **+ then −**; −I(7 Ω), with the current; **+12 V**, crossing that battery **− then +**; −I(2 Ω) and −I(3 Ω), both with the current. Collecting, the emfs give 12 − 4 = **8 V** and the resistances give 4 + 7 + 2 + 3 = **16 Ω**:

**8 V = I(16 Ω) ⇒ I = 0.5 A**

"Since I is positive, our assumed current direction is correct." The two batteries **oppose** each other, so only their **difference**, 8 V, is available to drive current.

**(b) The potential difference V_ab.** Walking from b to a by the lower path, against the current all the way:

**V_ab = (0.5)(7) + 4 + (0.5)(4) = 3.5 + 4 + 2 = 9.5 V**, so *a* is at the higher potential.

Every term is positive: the two resistors are crossed **against** the current, and the 4 V battery is crossed **− then +** this time — the same battery that contributed −4 V in part (a), because she walks it the other way. **Check by the upper path**, which is what "there are two paths" invites: +12 for the battery crossed − then +, then −(0.5)(2) = −1.0 and −(0.5)(3) = −1.5 for two resistors crossed with the current. **12 − 1.0 − 1.5 = 9.5 V** ✓ Two independent routes giving the same number *is* the loop rule, and it is the fastest way to catch a sign error under exam conditions.

**(c) The power output of each emf.**

**P₁₂ᵥ = εI = (12)(0.5) = 6 W**  **P₄ᵥ = εI = (−4)(0.5) = −2 W**

The 12 V battery has current leaving its + terminal: it is **discharging** and delivers 6 W. The 4 V battery has current driven **into** its + terminal by the stronger one: it is being **charged**, and a negative power output means it is **absorbing** 2 W. **Energy check:** 6 − 2 = 4 W delivered, and I²R_total = (0.5)²(16) = 4 W dissipated ✓

*A ten-second cross-check she does not do: terminal p.d. of the discharging battery ε − Ir = 12 − 1 = 11 V; of the charging battery ε + Ir = 4 + 2 = 6 V; and round the loop 11 = 6 + 1.5 + 3.5 ✓*

### Worked example 3 — a bridge, solved by brute force

*Her Example 2 is a bridge circuit — "the figure below shows a 'bridge' circuit; find the current in each resistor" — and her four solution slides could not be recovered. The method below is hers; **these particular numbers are not**, and are supplied so that the method is demonstrated end to end.*

A 13 V battery of negligible internal resistance between **a** and **d**, + at *a*. Arms: a→b = 1 Ω, a→c = 1 Ω, b→d = 1 Ω, c→d = 2 Ω, bridge arm b→c = 1 Ω.

**1. Assume a direction on every arm** — five unknowns: I₁ (a→b), I₂ (a→c), I₃ (b→d), I₄ (c→d), I₅ (b→c).
**2. Junction rule.** At b: **I₁ = I₃ + I₅**. At c: **I₄ = I₂ + I₅**. *(d gives nothing new.)*
**3. Loop a→b→c→a:** −I₁ − I₅ + I₂ = 0 ⇒ **I₂ = I₁ + I₅**
**4. Loop b→d→c→b:** −I₃ + 2I₄ + I₅ = 0
**5. Loop a→b→d→battery→a:** **13 − I₁ − I₃ = 0**
**6. Solve.** I₃ = I₁ − I₅ and I₄ = I₁ + 2I₅, so step 4 becomes I₁ + 6I₅ = 0, i.e. **I₅ = −I₁/6**. Then 13 = 2I₁ + I₁/6 = 13I₁/6 ⇒ **I₁ = 6 A**, and **I₅ = −1 A, I₃ = 7 A, I₂ = 5 A, I₄ = 4 A**.
**7. Read the negative.** I₅ = −1 A is not an error: the bridge arm carries **1 A from c to b**, opposite to the arrow drawn.
**8. Check.** Out of the battery I₁ + I₂ = 11 A; back into it I₃ + I₄ = 11 A ✓ The whole network's equivalent resistance is 13/11 = 1.18 Ω — and no sequence of series and parallel steps could have produced it, which is the reason bridges are here at all.

### Where people go wrong

- **Forgetting to invert the parallel formula.** 31/60 is 1/R_eq, not R_eq.
- **Calling every corner a junction.** Three or more conductors, or it is not one.
- **Signing an emf by the current direction.** It comes **only** from the order in which you cross the terminals.
- **Signing an IR term by the travel direction alone.** It is the travel direction *relative to the assumed current*.
- **Dropping the emfs out of ΣV = 0.** Leaving out the +12 V turns Example 1 into I = 0.
- **Adding emfs that oppose.** 12 V against 4 V gives 8 V, not 16 V. Look at which way each + points first.
- **Panicking at a negative current.** Right magnitude, opposite direction, nothing redone.
- **Thinking a negative power is impossible.** −2 W means the source is absorbing 2 W.
- **Losing the units.** Copy her habit of carrying them inside the algebra — "8 V = I(16 Ω)" makes the final division self-checking, because volts ÷ ohms is amperes.

### In the exam

Her Example 1 is the shape of the question: a single loop with two opposing batteries, each with an internal resistance, and two external resistors, asking for the current, a potential difference between two named points, and the power output of each emf. Be able to produce **I = 0.5 A, V_ab = 9.5 V by either path, and +6 W and −2 W summing to the 4 W the resistors dissipate**. Expect also one combination calculation (invert!), the two definitions, and the two rules with their conservation laws named.

---

## Part 9 — Alternating current: peak and rms values
*(Week 6)*

### What it is

Her deck teaches one chain of ideas and nothing else.

**Peak value**, verbatim: "the **maximum instantaneous value** that a waveform reaches during one complete cycle … typically **measured from the zero reference point**." Measured from zero — not trough to crest.

**RMS value**, verbatim: "a measure of the magnitude of an alternating current or voltage. It represents the **equivalent direct current (DC) value that would produce the same amount of power dissipation in a resistive load**." RMS is defined by **equal heating**, not by the shape of the curve.

**The source:** **V = V_max sin ωt**, with V the instantaneous voltage and V_max the peak value or **voltage amplitude**.
**Angular frequency:** **ω = 2πf = 2π/T**, in **rad s⁻¹**.
**The current, from Ohm's law:** **I = V/R = (V_max/R) sin ωt = I_max sin ωt**, so **I_max = V_max/R**.
**The squaring step:** **I² = I²_max sin²ωt**, whose mean is **(I²)_av = ½I²_max**.
**The results:** **I_rms = (1/√2)I_max = 0.7071 I_max** and **V_rms = (1/√2)V_max = 0.7071 V_max**.
**Average power:** **P_av = I²_rms R = V²_rms/R**; and inside her question 3, **P_max = V²_max/R**.

That is the complete formula inventory of the deck. Her closing sentence, repeated on the summary slide: "rms values are used when discussing alternating currents and voltages because **AC ammeters and voltmeters are designed to read rms values**."

### Why it works

**Why the plain average is useless.** Over a complete cycle the positive and negative halves cancel exactly, so the mean of I is zero — which would predict that an alternating current does no heating at all, and a mains lamp gives out no light. Her slide puts it as "both alternating voltage and current have a zero value. So direct average gives no information (or useless)."

**Why squaring fixes it.** I² is never negative, so the negative half-cycle stops cancelling the positive one. Her slide-9 diagram plots I² against t: it oscillates between 0 and I²_max with its mean line drawn at exactly **I²_max/2**. Take the square root of that mean and you have the rms value.

**Read the name backwards to get the order right: root of the mean of the square.** Square first, average second, square-root third. It is not the average of the waveform, and it is not the square root of the average of the waveform.

**Why rms is the right definition.** Power in a resistance goes as the **square** of the current, and the mean of I² is I²_rms by construction, so substituting the rms value into P = I²R gives the true average power with **no correction factor at all**. That is the entire justification, and it is why a meter is calibrated in rms.

**Numbers to hold:** 1/√2 = 0.7071 and √2 = 1.4142. Peak → rms, **multiply by 0.7071** and the answer gets **smaller**; rms → peak, **multiply by 1.4142** or divide by 0.7071 and it gets **bigger**. The rms value of a sinusoid can never exceed its peak; if your answer says otherwise, you have used the factor the wrong way.

**Because the relation I = V/R is a plain proportionality, the same 0.7071 divides out of both sides**, so **I_rms = V_rms/R** as well as I_max = V_max/R. Never cross them.

> ⚠ **Slide error (week 6, slides 13 and 14) — the substantive one.** Practice question 2 is **set** with a house ac voltage of **120 V** and **solved** with **250 V**. The deck never reconciles them. Be able to produce both: 120 V rms → **170 V** peak, and 250 V rms → **353.56 V** peak. The current part is unaffected: 10 A rms → 14.14 A peak either way. (The likely reason for the change is that 120 V would simply repeat the answer to question 1.)

> ⚠ **Slide error (week 6, slide 7 diagram).** The waveform is labelled "Average Value (I_av) = **0.6371** I_m". The rectified half-cycle mean of a sinusoid is 2/π = **0.6366** I_m. It is also the *only* appearance of an average value anywhere in the deck — never defined, never derived, never used — so do not build an answer on it.

> ⚠ **Wording (week 6, slide 9).** "Both alternating voltage and current have a zero value" is literally false as printed; she means the **average over a complete cycle** is zero. Quote it that way and the sentence is defensible.

### Worked example — her three practice questions

**1. "Typical household circuit operates with an rms voltage of 120 V. What is the maximum, or peak value of the voltage?"**

Using V_rms = (1/√2)V_max, **V_max = V_rms√2 = 120√2 = 170 V** (169.7, rounded).
Note the direction of the operation: given the rms and wanting the peak, she **multiplies by √2**. The pair 120 V and 170 V is worth memorising.

**2. "For a particular device, the house ac voltage is 250 V and the ac current is 10 A. What are their maximum values?"** *(the solution slide's figures — see the error box above)*

I_max = I_rms/0.7071 = 10/0.7071 = **14.14 A**
V_max = V_rms/0.7071 = 250/0.7071 = **353.56 V**

Both are the rms values multiplied by 1.4142, written as a division by 0.7071. *(Her slide prints the denominator as "o.7071", with a letter o for the zero.)*

**3. "An AC generator with a maximum voltage of 24.0 V and a frequency of 60.0 Hz is connected to a resistor R = 265 Ω. Find (a) the rms voltage (b) the rms current. Determine (c) the average and (d) maximum power dissipated."**

(a) **V_rms = 0.7071 V_max = 0.7071 × 24 = 17.0 V**
(b) **I_rms = V_rms/R = 17/265 = 0.0642 A**
(c) **P_av = V²_rms/R = 17²/265 = 1.09 W**
(d) **P_max = V²_max/R = 24²/265 = 2.174 W**

Four things to take from this solution:

- **She converts once, at the start.** Every later part uses the rms figure. Applying 0.7071 a second time downstream is the standard way to halve your own answer (it would give 0.0454 A in part b).
- **Ohm's law is used with rms on both sides.** Mixing them — V_rms/R for I_max, or V_max/R for I_rms — is the error to watch for; V_max/R would give 0.0906 A.
- **P_av uses V_rms; P_max uses V_max**, both with the same R, so **P_max/P_av = (V_max/V_rms)² = 2** exactly. Peak power in a resistor is always twice the average.
- **The 60.0 Hz is never used.** The load is a pure resistor, and none of V_rms, I_rms, P_av or P_max depends on frequency. Recognising a redundant given is itself an exam skill.

### Where people go wrong

- **Which way the factor goes.** Getting it backwards turns 240 V rms into 170 V instead of 339 V.
- **Multiplying by 0.7071 twice.**
- **Peak measured trough to crest.** It is measured from zero; the full swing is twice the peak, and the deck never names it.
- **Instantaneous versus peak versus rms.** V is signed and negative for half of every cycle; V_max and V_rms are magnitudes and always quoted positive. An unqualified "the voltage is 250 V" means the **rms** value, because that is what the meter reads.
- **ω is not f.** At 50 Hz, ω = 314 rad/s; at 60 Hz, ω = 377 rad/s. Writing sin(50t) is out by 6.28. And ωt is an angle in **radians** — a calculator left in degrees gives nonsense.
- **P_av = I²_max R.** Using the peak current doubles the power.

### In the exam

Expect one conversion in each direction, and one full four-part generator problem exactly like her question 3. Learn her six answers: **170 V; 14.14 A and 353.56 V; 17.0 V, 0.0642 A, 1.09 W and 2.174 W.** Be able to define peak and rms in her words, state ω = 2πf = 2π/T, and explain in two sentences why the plain average fails and why squaring repairs it.

> **Not in this week.** Reactance, impedance, phasor diagrams, resonance, phase angle and power factor appear **nowhere** in this deck — the week's LMS summary sheet mentions series RLC circuits, but nothing behind it is taught. They belong to **Part 10** and are week 7's material. If a question set for this week mentions an inductor or a capacitor, it is not from these slides.

---

## Part 10 — Power in an AC circuit: real, reactive and apparent
*(Week 7)*

### What it is

**p(t) = v(t) i(t) always.** The DC relation P = VI survives into AC as an *instantaneous* statement; what fails is multiplying two steady numbers, because both v and i are functions of time and the product must be **averaged over a whole cycle** before it can be called "the power".

With v = V₀ sin ωt and i = I₀ sin(ωt − φ), the identity sin A sin B = ½[cos(A − B) − cos(A + B)] gives

**p(t) = (V₀I₀/2)[cos φ − cos(2ωt − φ)]**

a **constant** plus a **ripple at twice the supply frequency** whose average over a cycle is zero. Hence the master formula:

**P_av = ½V₀I₀ cos φ = V_rms I_rms cos φ**

and, substituting V_rms = I_rms Z and cos φ = R/Z, **P = I²_rms R**. **Only the resistance dissipates.**

**The three powers, and their units:**

**Apparent power S = V_rms I_rms** — volt-amperes (VA)
**Real (true, active) power P = V_rms I_rms cos φ = I²R** — watts (W)
**Reactive power Q = V_rms I_rms sin φ = I²X** — volt-amperes reactive (var)

They form a right-angled triangle: **S² = P² + Q²**, **tan φ = Q/P = X/R**, **cos φ = P/S = R/Z**. They do **not** add arithmetically.

**Power factor PF = cos φ = P/S = R/Z**, dimensionless, between 0 and 1. Because cos is an even function, the number alone cannot say whether the current leads or lags: always write "0.8 **lagging**" (inductive) or "0.8 **leading**" (capacitive).

**Resonance is the unity-power-factor condition:** at **X_L = X_C** (ω₀ = 1/√(LC)) the impedance falls to R, φ = 0, PF = 1, the current is maximum and the real power V²_rms/R is maximum.

### Why it works

**Why the ripple is at 2f.** Both v and i reverse sign together in a resistor, so their product completes two cycles for every one of the supply. On a 50 Hz supply a lamp filament is heated 100 times a second.

**Why only R consumes.** Multiply every side of the impedance triangle (R, X, Z) by I²_rms and you get the power triangle (P, Q, S). The resistance side becomes watts, dissipated irreversibly as heat; the reactance side becomes var, energy borrowed on one quarter-cycle and repaid on the next. An inductor stores ½LI₀² in its **magnetic** field and gives it all back; a capacitor does the same in its **electric** field. The *transfer* is real; the *dissipation* is zero.

**Why p(t) goes negative.** p oscillates about P with amplitude S, i.e. between S(cos φ − 1) and S(cos φ + 1). The minimum is negative unless φ = 0, so **any reactance at all sends power back to the source twice per cycle** — and a purely resistive circuit never does. For a resistor, p = P(1 − cos 2ωt), swinging from 0 to 2P, which is why **peak instantaneous power is twice the average**.

**Why the power factor costs money.** Only P is billed, in kWh. But cables, switchgear and transformers must carry the full **current**, so they are rated in kVA. A 0.5 PF load draws twice the current of a unity-PF load of the same wattage and causes **four times** the I²R loss in the supply line. Correction puts a **capacitor in parallel** with a lagging load: its leading reactive power cancels part of the load's lagging Q, leaving P untouched and reducing the line current.

**Q_C = P(tan φ₁ − tan φ₂)** and **C = Q_C/(ωV²_rms)**; corrected to unity, the new line current is just **I = P/V_rms**.

> ⚠ **Slide error (week 7).** The deck writes "In a purely reactive AC circuit … the power can be calculated using P = V × I × sin(θ)". That expression is the **reactive** power Q, in var — not the power consumed. In a purely reactive circuit the average **real** power is exactly **zero**, which is what the same deck says two slides later when it states that reactances do not dissipate energy.

> ⚠ **Slide error (week 7).** It writes "P = V × I = V²/R = I² × R Watts. Where: V is the **dc** voltage, I is the **dc** current" while discussing an AC resistor. In AC these must be **rms** values, and V²/R must use the voltage **across R**, not the supply voltage.

### Worked example 1 — a resistor, instantaneous versus average

*240 V rms, 50 Hz across R = 60 Ω.*

V₀ = √2 × 240 = **339.4 V**; I₀ = 339.4/60 = **5.657 A**; I_rms = **4.00 A**
Resistor ⇒ v and i in phase ⇒ p = V₀I₀ sin²ωt = **1920 sin²(314.2 t) W**, i.e. **960(1 − cos 628.3 t) W**
**Peak p = 1920 W; minimum p = 0; average P = 960 W; ripple frequency 2f = 100 Hz**
Checks: V_rms I_rms = 960 W ✓ V²_rms/R = 57600/60 = 960 W ✓ I²_rms R = (16.0)(60) = 960 W ✓ and P_peak = 2P_av ✓

*Contrast: a pure inductor of X_L = 60 Ω on the same supply carries the same 4.00 A, but p(t) = −960 sin(628.3 t) W — the same amplitude at the same 100 Hz, swinging **±960 W about zero**. **P_av = 0.** Identical current, identical voltage, nothing consumed.*

### Worked example 2 — series RL, the complete power set

*R = 30 Ω in series with L = 127 mH across 200 V rms, 50 Hz.*

X_L = 2πfL = 2π(50)(0.127) = **40.0 Ω**
Z = √(R² + X²_L) = √(900 + 1600) = **50.0 Ω**
I = V/Z = 200/50.0 = **4.00 A**
PF = cos φ = R/Z = 30/50 = **0.600 lagging**, φ = **53.1°**
P = VI cos φ = (200)(4.00)(0.600) = **480 W**, checked by I²R = (16.0)(30) = 480 W ✓
Q = VI sin φ = (200)(4.00)(0.800) = **640 var** (inductive), checked by I²X_L ✓
S = VI = **800 VA**, checked by I²Z ✓ and by P² + Q² = 480² + 640² = 800² ✓

**Note that P ≠ V²/R here:** 200²/30 = 1333 W is nearly three times too big, because 200 V is across the **whole circuit**. The voltage across R alone is IR = 120 V, and 120²/30 = 480 W ✓

### Worked example 3 — series RLC with a leading power factor

*R = 12 Ω, X_L = 5 Ω, X_C = 21 Ω, supply 240 V rms.*

Net reactance **X = X_L − X_C = −16 Ω** — negative, so the circuit is **capacitive** and the current **leads**
Z = √(12² + 16²) = **20.0 Ω**. *(The reactances subtract before squaring; adding them gives √(144 + 676) = 28.6 Ω, a common wrong answer.)*
I = 240/20.0 = **12.0 A**; PF = 12/20 = **0.600 leading**, φ = **−53.1°**
P = (240)(12.0)(0.600) = **1728 W** = I²R ✓ Q = **2304 var, capacitive** S = **2880 VA**, and 1728² + 2304² = 2880² ✓
Voltage check: V_R = 144 V, V_L = 60 V, V_C = 252 V, and √(144² + (60 − 252)²) = **240 V** ✓ — the drops sum to 456 V arithmetically but 240 V vectorially.

### Worked example 4 — power factor correction

*A workshop draws 4.4 kW at 220 V rms, 50 Hz at PF 0.80 lagging.*

S = P/PF = 4400/0.80 = **5500 VA**; I = S/V = **25.0 A**
sin φ₁ = 0.60, so Q_load = (5500)(0.60) = **3300 var lagging**; for unity PF the capacitor must supply all of it
C = Q_C/(ωV²) = 3300/[(314.16)(220²)] = **217 μF**
**New line current** = P/V = 4400/220 = **20.0 A**
The same 4.4 kW now arrives on 20 A instead of 25 A: the cable's I²R loss falls by (20/25)² = 0.64, a **36 % reduction**, and the feeding transformer needs 4.4 kVA instead of 5.5 kVA. **Not one watt of the load's consumption has changed.**

### Worked example 5 — power at resonance

*R = 10 Ω, L = 0.20 H, C = 20 μF in series across 100 V rms.*

ω₀ = 1/√(LC) = 1/√(4 × 10⁻⁶) = **500 rad s⁻¹**, so **f₀ = 79.6 Hz**
There X_L = ω₀L = **100 Ω** and X_C = 1/(ω₀C) = **100 Ω**: they cancel, so **Z = R = 10 Ω**
I = 100/10 = **10.0 A** (a maximum); **PF = 1**; **P = V²/R = 1000 W**
V_L = V_C = **1000 V** each — ten times the supply, but 180° apart, so they cancel exactly in the vector sum
At 50 Hz instead: X_L = 62.8 Ω, X_C = 159.2 Ω, Z = 96.8 Ω, I = 1.03 A and **P = 10.7 W**. Moving 30 Hz off resonance drops the real power from 1000 W to 10.7 W.

### Where people go wrong

- **P versus S.** P = VI cos φ (watts) is consumed; S = VI (volt-amperes) is merely drawn. If your answer contains no cos φ, you have computed S.
- **VI sin θ called "the power".** It is the **reactive** power, in var.
- **P = V²/R with the supply voltage.** Legal only in a purely resistive circuit or at resonance. **P = I²R is always safe.**
- **cos φ = R/Z, not X/Z**, and never Z/R — a power factor above 1 is impossible.
- **Adding X_L and X_C.** They subtract; only then is X combined with R in quadrature.
- **S = P + Q.** No: S² = P² + Q². 480 W and 640 var give 800 VA, not 1120 VA.
- **Lagging versus leading.** cos(+53°) = cos(−53°), so always name it.
- **"A reactance wastes energy."** It wastes none itself; the extra current it forces through the supply cable wastes I²R **there**, which is why correction is worth doing.
- **Peak values in an AC power formula.** They all take rms. For a resistor P_peak = 2P_av.
- **Q-factor versus reactive power Q.** Same letter, unrelated: one is X_L/R, the other is in var.

### In the exam

Expect a full series-circuit solve: find the reactance, then Z, then I, then the power factor with its lagging/leading label, then P, Q and S with a triangle check. Expect a power-factor-correction question ending in the new line current, and a resonance question ending in "the impedance is R, the power factor is 1, the current and the real power are maxima". State the master formula with the words "cos φ", and be able to say why a reactance consumes nothing on average.

---

## Part 11 — Magnetic fields and magnetic dipoles
*(Week 8)*

### What it is

A **magnetic dipole is a north–south pair that cannot be split.** Cut a bar magnet in half and each half has a full N and a full S. **There are no magnetic monopoles**, so every field line of **B** is a **closed loop** and the flux out of any closed surface is zero. This is the one structural difference from electrostatics, where a single charge is perfectly possible.

**Magnetic dipole moment: μ = IA for one turn, μ = NIA for N turns.** A **vector** along the **normal to the plane of the loop**, in the sense given by the right-hand rule — curl the fingers along the current and the thumb gives μ. Unit **A·m² = J/T**. *(Her mid-lesson question: I = 12 A, A = 1.6 m² ⇒ **μ = 19.2 A·m²**.)*

**Torque: τ = μ × B, magnitude τ = μB sin θ**, where **θ is the angle between μ and B** — that is, between the **normal** and the field, **not** between the loop's plane and the field.

**Energy: U = −μ·B = −μB cos θ.** Minimum −μB at θ = 0 (**stable**, aligned); maximum +μB at θ = 180° (**unstable**). Flipping a dipole end for end costs **ΔU = 2μB**.

**In a uniform field the net force is zero.** A dipole in a uniform field **turns but does not translate**; a net force requires a **non-uniform** field.

**Electron magnetic moment: M = g(−eL/2m)**, with g the **g-factor** — about 1 for orbital motion and about 2 for spin. The minus sign says μ is **antiparallel to L**, because the charge is negative. With L = ħ this is the **Bohr magneton, μ_B = eħ/2m = 9.27 × 10⁻²⁴ J/T**.

**Fields produced by currents:**

| Source | Field | Geometry |
|---|---|---|
| Long straight wire | **B = μ₀I/2πr** | concentric circles perpendicular to the wire, right-hand grip rule |
| Centre of a flat coil, N turns, radius R | **B = μ₀NI/2R** | along the axis |
| Long solenoid, n turns per metre | **B = μnI = μ₀μ_r nI** | uniform and axial inside, ≈ 0 outside |
| Dipole, on axis, far field | **B = μ₀μ/2πz³** | same shape as a bar magnet's |

**μ₀ = 4π × 10⁻⁷ T·m/A**, and the useful shortcut **μ₀/2π = 2 × 10⁻⁷ T·m/A**.

**Field-line rules for magnets:** outside a magnet the lines run **N → S**; inside they run **S → N**, so every line is closed. Lines never cross; denser lines mean a stronger field, so the field is strongest at the poles. Bring like poles together and the lines bend away from each other, leaving a **neutral point** between them where B = 0. **Map the field** with iron filings, each of which becomes a tiny induced dipole, or with a small compass, whose north end points along **B**.

### Why it works

**Where the torque formula comes from.** Take a rectangular loop of sides a and b carrying I in a uniform **B**, free to rotate about an axis in its plane. The two sides parallel to the axis each feel **F = BIa** in **opposite** directions, separated by a moment arm **b sin θ** with θ measured from the normal. So

**τ = (BIa)(b sin θ) = I(ab)B sin θ = μB sin θ**

Two things fall straight out and are the source of most lost marks. The **forces are equal and opposite**, so ΣF = 0 and a uniform field gives no translation. And **θ is measured from the normal**, so the torque is a **maximum when the loop's plane contains B** — the orientation students most often call "θ = 0".

**Where the energy formula comes from.** The work done by the field turning the dipole is W = ∫τ dθ, which integrates to **U = −μB cos θ**, taking U = 0 at θ = 90°.

| θ (between μ and B) | τ = μB sin θ | U = −μB cos θ | State |
|---|---|---|---|
| 0° (aligned) | 0 | **−μB** | **stable** |
| 90° (plane contains B) | **μB** (maximum) | 0 | maximum torque |
| 180° (anti-aligned) | 0 | **+μB** | **unstable** |

Where the torque is greatest the energy is zero, and where the energy is extreme the torque vanishes. **Torque zero does not mean stable** — it is zero at both ends, and only θ = 0 is a minimum.

**Why a current loop is a dipole.** At large distances the field of a current loop has exactly the same shape as a bar magnet's, falling as **1/r³**, and the face out of which μ points behaves as the loop's **north** pole. The two models — a current loop, or a pair of separated poles — agree far from the source but differ inside it: in the pole model the field *between* the poles runs N → S, opposite to the moment, while in the loop model the field *through* the loop is parallel to μ. The current loop is the physically correct one, because there are no magnetic charges: every real magnetic moment is ultimately a circulating current or a spin.

**The electron's moment, derived.** An electron in a circular orbit of radius r at speed v is a current I = e/T = ev/2πr round an area πr², so μ = IA = evr/2 = **eL/2m** using L = mvr. That is the classical result; the g-factor is the correction by which the real moment differs from it.

> ⚠ **Slide errors (week 8).** Four, and all four are wording rather than arithmetic.
> **(i)** The alignment torque is called "**magnetization**". Magnetisation is magnetic moment **per unit volume** of a material; alignment is the mechanism, magnetisation is the resulting bulk quantity.
> **(ii)** "The magnetic field between poles is in the opposite direction to the magnetic moment (which points from the negative charge to the positive charge" — the bracket is a leftover from the **electric** dipole and is never closed. There are no magnetic charges; the moment points from S to N inside the dipole.
> **(iii)** The symbol in M = G(−eL/2m) is called a "**correlation factor**". It is the **g-factor**.
> **(iv)** The mid-lesson question gives "current 12 A and area 1.6 units" and answers "19.2 units". The unit is **A·m²**.

### Worked example 1 — moment, torque and energy of a coil

*A rectangular coil of 50 turns, 8.0 cm × 5.0 cm, carries 2.0 A in a uniform field B = 0.40 T.*

Area in SI: A = (0.080)(0.050) = **4.0 × 10⁻³ m²** *(40 cm² would give an answer 10⁴ times too big)*
μ = NIA = (50)(2.0)(4.0 × 10⁻³) = **0.40 A·m²**, along the normal
**Maximum torque**, at θ = 90°, i.e. with the plane of the coil containing B: τ_max = μB = **0.16 N·m**
**Torque with the normal at 30° to B:** τ = μB sin 30° = **0.080 N·m** *(cos 30° here gives 0.139 N·m, the commonest wrong answer)*
**Energy there:** U = −μB cos 30° = **−0.139 J**, negative because the coil is closer to aligned than to anti-aligned
**Work to flip it** from 0° to 180°: W = (+0.16) − (−0.16) = **0.32 J = 2μB**
**Net force** in this uniform field: **zero** — it spins up about its axis, and its centre of mass does not move.

### Worked example 2 — the fields of a wire and a solenoid

*(a) A long straight wire carries 8.0 A. Find B at 4.0 cm. (b) A solenoid of 500 turns wound over 25 cm carries 3.0 A; find B inside, and then with an iron core of μ_r = 200.*

**(a)** B = μ₀I/2πr = (2 × 10⁻⁷)(8.0)/(0.040) = **4.0 × 10⁻⁵ T** (40 μT, about the Earth's field).
*Direction:* with the current running vertically upward, grip the wire with the right hand, thumb up, and the fingers curl anticlockwise seen from above. At a point due **north** of the wire, **B points due west** — horizontal and tangential, never radial and never along the wire.

**(b)** n = N/L = 500/0.25 = **2000 turns per metre** — the length in metres, and it is **n** that enters, not N.
B = μ₀nI = (4π × 10⁻⁷)(2000)(3.0) = **7.5 × 10⁻³ T**
With the core: B = μ_rμ₀nI = (200)(7.5 × 10⁻³) = **1.5 T**. The geometry is unchanged; the material multiplies the field by 200.
*Sensitivity check:* unwinding the same 500 turns over 50 cm halves n and halves B; adding 500 more turns at the **same pitch**, so that the solenoid doubles in length, leaves n — and therefore B — **unchanged**.

### Worked example 3 — the electron's moment, two ways

*An electron moves in a circle of radius 5.3 × 10⁻¹¹ m at 2.2 × 10⁶ m/s (g = 1).*

**Via angular momentum:** L = mvr = (9.11 × 10⁻³¹)(2.2 × 10⁶)(5.3 × 10⁻¹¹) = **1.06 × 10⁻³⁴ kg·m²/s** (≈ ħ, as it should be)
μ = eL/2m = (1.602 × 10⁻¹⁹)(1.06 × 10⁻³⁴)/(1.82 × 10⁻³⁰) = **9.3 × 10⁻²⁴ J/T**

**Via μ = IA:** I = ev/2πr = **1.06 × 10⁻³ A**; A = πr² = **8.82 × 10⁻²¹ m²**; μ = IA = **9.3 × 10⁻²⁴ J/T** ✓ — one Bohr magneton, by both routes, and the direction is **opposite to L**.

*In a field of 0.50 T: τ_max = μB = 4.7 × 10⁻²⁴ N·m and the energy to flip it is 2μB = 9.3 × 10⁻²⁴ J. Tiny per electron — but 10²³ of them in a gram of material is what makes bulk magnetism, and this splitting is exactly what magnetic resonance measures.*

### Where people go wrong

- **θ measured from the plane.** It is measured from the **normal**. "Plane parallel to B" ⇒ θ = 90° ⇒ **maximum** torque.
- **sin in the torque, cos in the energy.**
- **U = +μ·B.** The minus is what makes alignment the low-energy state.
- **Torque zero taken as stable.** It is zero at 0° *and* 180°; only 0° is stable.
- **Forgetting N in μ = NIA**, or leaving the area in cm².
- **n versus N in the solenoid.** B = μ₀nI with n in turns per **metre**.
- **Thinking the wire's field is radial.** It is **tangential**, perpendicular to both the current and the radius — a long wire is not a line of charge.
- **1/r for a wire, 1/r³ for a dipole.**
- **"Lines go from N to S" with no qualifier.** Outside the magnet, yes; inside, S → N, or the lines would be open curves and monopoles would exist.
- **Three different μ symbols.** μ is the moment (A·m²), μ₀ is a constant of nature, μ_r is a dimensionless property of a material — and g is none of them.

### In the exam

Expect μ = NIA with a unit conversion built in, a torque-and-energy question that turns on the angle being measured from the normal, and one field calculation from either the wire formula or the solenoid formula. Be able to say why a magnet cannot be cut into monopoles, why a uniform field gives torque but no force, and what the applications are: **MRI/NMR**, electric **motors** (the commutator reverses I every half turn so the torque never reverses), credit-card strips, and the Earth's own dipole field.

---

## Part 12 — The force on a moving charge and on a current
*(Week 9)*

### What it is

**The total electromagnetic force on a point charge: F = qE + q(v × B) = q(E + v × B).** The two terms are **added as vectors**, never as numbers, and they coincide in direction only by accident. F in newtons, q in coulombs (**signed**), E in N/C = V/m, v in m/s, B in tesla.

**Magnitude of the magnetic part: F = qvB sin θ**, with **θ the angle between v and B**. It is **zero if the charge is at rest** and **zero if v is parallel or antiparallel to B**, and **maximum, qvB, when v ⊥ B**. The electric part qE has no such condition: it acts whether the charge moves or not.

**Direction — right-hand rule 1, as the deck states it.** Thumb along **v**, fingers along **B**, and **F comes out of the palm** — for a **positive** charge. For a negative charge, work out the positive answer and then **reverse it**. F is perpendicular to the plane containing v and B, so it is never along B and never along v.

**Circular motion.** With v ⊥ B, the magnetic force supplies the centripetal force: qvB = mv²/r, so

**r = mv/(qB) = p/(qB)**,  **T = 2πm/(qB)**,  **f_c = qB/(2πm)**

The **period does not depend on the speed or the radius** — the basis of the cyclotron. A component of v *along* B is untouched, so the general path is a **helix** of pitch v∥T.

**Crossed fields (velocity selector).** A charge passes straight through when qE = qvB, i.e. **v = E/B** — a condition containing **neither q nor m**.

**Force on a current-carrying conductor: dF = I dl × B**, and for a straight wire in a uniform field **F = I L × B**, magnitude **F = BIL sin θ** with θ between the **current** and B.

**Units.** **1 T = 1 N/(A·m) = 1 Wb/m²**, and **1 T = 10⁴ G**, so the Earth's field of about 0.5 G is 5 × 10⁻⁵ T. A tesla is a very large unit; laboratory fields are millitesla, and an answer in hundreds of tesla means a conversion has gone wrong.

### Why it works

**Everything follows from two properties of the cross product.** Its magnitude is vB sin θ, so parallel vectors give zero and perpendicular vectors give the maximum. Its direction is perpendicular to the plane of the two vectors. Hence **F ⊥ v** and **F ⊥ B**.

**F ⊥ v is why the magnetic force does no work.** Power is F·v, and that is exactly zero: the magnetic force changes the **direction** of the velocity and never its **magnitude**. A magnetic field cannot speed a particle up, cannot change its kinetic energy, and cannot start a particle moving from rest. Only the electric term does work.

**"No work" is not "no acceleration".** There is a real centripetal acceleration a = qvB/m; it is perpendicular to v, so it turns the particle without changing its speed.

**F ⊥ B is why motion along the field is untouched.** Split v into v∥ (along B) and v⊥ (perpendicular). The force acts only on v⊥, turning it in a circle of radius mv⊥/qB, while v∥ sails on unchanged. The two together make a helix; with v∥ = 0 it is a circle, with v⊥ = 0 a straight line along the field line.

**Sign check.** Reversing q reverses F; reversing v reverses F; reversing **both** leaves F unchanged. So an electron and a proton fired the *same* way in the same field curve *opposite* ways, but an electron beam and a positive-ion beam moving in *opposite* directions curve the *same* way.

**From one charge to a whole wire.** With free charges of linear density λ drifting at v, a length dl holds dq = λ dl, so dF = (dq)v × B = (λ dl)v × B, and since **I = λv**, **dF = I dl × B**. Writing the current as a scalar and giving the direction to dl is the same statement as writing the current as a vector. This is also the bridge back to Part 11: two opposite sides of a current loop feel BIL in opposite directions, giving the couple τ = μB sin θ with μ = NIA, and zero net force. Everything about motors follows.

**What one magnet does to another.** All magnetic fields are ultimately produced by **moving charges** — orbital and spin currents in atoms — so magnet-on-magnet forces are the same qv × B force acting between circulating currents. There is no separate "magnetic charge" force law.

> ⚠ **Slide errors (week 9).** Four, and the first two are the dangerous ones.
> **(i)** "In [the] force, the **work done** is proportional to the charge q, and the velocity v of the charge", and "**work is done** on moving charges when in a magnetic field". It is the **force**, not the work, that is proportional to q and v; the magnetic force is perpendicular to v and does **exactly zero** work.
> **(ii)** The law is written in **cgs** with factors of 1/c: dF = (I/c) dl × B. Every Miva numerical question is in **SI**, where **dF = I dl × B** with no c at all. Dividing an SI answer by 3 × 10⁸ is a guaranteed loss of marks.
> **(iii)** The solved example ends "F = 125 **N/s**". The unit of force is the **newton**.
> **(iv)** The mid-lesson question adds the electric and magnetic magnitudes arithmetically, 12.5 + 27.19 = 39.68 N, which silently assumes both that v ⊥ B **and** that the two forces are parallel. Neither is given. See Worked example 1.

### Worked example 1 — the deck's own mid-lesson question, done honestly

*q = 2.5 C moves at v = 1.5 m/s where E = 5 N/C and B = 7.25 T.*

Electric part: F_E = qE = (2.5)(5) = **12.5 N**, along **E**.
Magnetic part, **assuming v ⊥ B**: F_B = qvB sin θ = (2.5)(1.5)(7.25) = **27.19 N**, perpendicular to both v and B.
**If — and only if — the two happen to point the same way**, they add: F = **39.68 N**, which is the deck's answer.

Now change one assumption at a time, which is the point of the exercise:
- **E parallel to B:** F_E lies along B while F_B is perpendicular to it, so the two are perpendicular and F = √(12.5² + 27.19²) = **29.9 N**.
- **v at 30° to B:** F_B = 27.19 sin 30° = 13.59 N, so with the two parallel, F = **26.1 N**.
- **v parallel to B:** F_B = **0**, and the whole force is the electric 12.5 N. The particle accelerates in a straight line and the magnetic field might as well not be there.

**Moral: it is a vector sum.** Adding 12.5 and 27.19 is a special case, not a rule.

### Worked example 2 — crossed fields and the velocity selector

*q = +2.0 μC travels at 5.0 × 10⁵ m/s along +x; B = 0.40 T along +y; E = 2.0 × 10⁵ V/m along −z.*

Magnetic force: x̂ × ŷ = ẑ, so F_B = qvB = (2.0 × 10⁻⁶)(5.0 × 10⁵)(0.40) = **0.40 N in +z**
Electric force: F_E = qE = **0.40 N in −z**
**Net force zero**: the particle crosses in a straight line at constant speed, and the selector condition confirms it: **v = E/B = 5.0 × 10⁵ m/s** ✓

*A slower particle at 2.5 × 10⁵ m/s: F_B halves to 0.20 N while F_E is unchanged, so the net 0.20 N sweeps it toward −z. A faster one is swept +z. **Change the sign of the charge** and both forces reverse together, so the balance still holds: the selected speed E/B is the same for electrons and heavy ions and contains no m at all. Beyond the slit, with E switched off, the same B bends the beam to r = mv/qB — and now the radius does depend on m/q, so the device has become a **mass spectrometer**.*

### Worked example 3 — circular and helical motion

*A proton (m = 1.67 × 10⁻²⁷ kg, q = 1.60 × 10⁻¹⁹ C) enters B = 0.25 T at v = 3.0 × 10⁶ m/s, perpendicular to the field.*

r = mv/(qB) = (5.01 × 10⁻²¹)/(4.00 × 10⁻²⁰) = **0.125 m = 12.5 cm**
T = 2πm/(qB) = **2.62 × 10⁻⁷ s**, so f = **3.8 MHz**. **v has cancelled**: speed the proton up and the radius grows in exact proportion, so the lap time is unchanged.
KE = ½mv² = **7.5 × 10⁻¹⁵ J ≈ 47 keV**, and it is the same after one lap, ten laps or a million — the magnetic force does no work.

*Send it in at 30° to B instead: v⊥ = 1.5 × 10⁶ and v∥ = 2.6 × 10⁶ m/s. The radius uses **v⊥ only**, r = **0.063 m**; the period is **unchanged**; and the pitch is v∥T = **0.68 m**. The path is a helix of radius 6.3 cm and pitch 68 cm. An electron at the same speed in the same field would orbit 1836 times more tightly, and the opposite way round.*

### Worked example 4 — force on a current-carrying wire

*L = 25 cm carrying I = 8.0 A in B = 0.30 T, the wire at 40° to the field.*

Convert first: L = **0.25 m**.
F = BIL sin θ = (0.30)(8.0)(0.25)(0.643) = **0.386 N ≈ 0.39 N**
**Maximum**, wire perpendicular to B: **0.60 N**. **Minimum**, wire **along** B: **zero** — a wire laid along the field lines feels nothing, however large the current.
*Direction:* right-hand rule with the **conventional current** in the role of v, so the force is perpendicular to the plane containing the wire and B — it pushes the wire **sideways**, never along itself. Reverse the current and the force reverses; reverse the field too and it is back as it was, which is why a d.c. motor needs a commutator and why an a.c. motor works at all.

### Worked example 5 — electromagnetic waves and photons
*(the week's summary-sheet strand)*

An oscillating **E** field generates an oscillating **B** field and vice versa, so the wave propagates. It is **transverse**: **E ⊥ B**, and **both ⊥ to the direction of travel**, which is the direction of E × B. All frequencies travel in vacuum at **c = 3.00 × 10⁸ m/s**, so **c = fλ**. The spectrum, in order of **increasing frequency and decreasing wavelength**: **radio → microwave → infrared → visible → ultraviolet → X-rays → gamma rays**. Photon energy **E = hf = hc/λ**, with h = 6.63 × 10⁻³⁴ J·s, and n photons carry nhf.

**(a) An FM station at 100 MHz.** λ = c/f = (3.00 × 10⁸)/(1.00 × 10⁸) = **3.00 m**
E = hf = (6.63 × 10⁻³⁴)(1.00 × 10⁸) = **6.63 × 10⁻²⁶ J = 4.1 × 10⁻⁷ eV**
A 20 kW transmitter emits n = P/E = **3.0 × 10²⁹ photons per second** — so many that the radiation behaves as a smooth classical wave.

**(b) Green light, λ = 500 nm.** f = c/λ = **6.00 × 10¹⁴ Hz**; E = hf = **3.98 × 10⁻¹⁹ J = 2.5 eV**, about 10¹⁹ times the FM photon, which is why light can eject electrons and FM radio cannot. Total energy of 5.0 × 10¹⁵ such photons = **2.0 × 10⁻³ J**.

*Checks that catch errors: a larger frequency must give a smaller wavelength; nm = 10⁻⁹ m and MHz = 10⁶ Hz; and c = fλ holds **in vacuum** — in a medium the speed and the wavelength both fall by the refractive index while **f is unchanged**.*

### Where people go wrong

- **Adding the two force magnitudes.** It is a vector sum unless the geometry makes them parallel.
- **"The magnetic force does work."** It does not: F ⊥ v ⇒ constant speed, constant kinetic energy.
- **sin, not cos.** Maximum force when v ⊥ B, zero when v ∥ B. Using cos inverts both statements.
- **A stationary charge in a magnetic field.** It feels nothing and stays at rest forever.
- **Right-hand rule for a negative charge.** Get the positive answer, then reverse it — do not switch hands halfway through.
- **r depends on speed, T does not.**
- **Putting q or m into v = E/B.** Neither is there.
- **Carrying the deck's 1/c into an SI calculation.**
- **1 T = 10⁴ G**, not the other way round.
- **"E is along the direction of propagation."** The standard wrong answer about EM waves; they are transverse.
- **"Brighter light means more energetic photons."** No — *more* photons. E = hf.

### In the exam

Expect F = qvB sin θ or F = BIL sin θ with an angle chosen to test whether you know which two things it lies between, plus a unit conversion. Expect r = mv/qB, and be ready to say that the period is independent of speed. The velocity selector and the mass spectrometer are the standard applications, along with motors and maglev. From the summary-sheet strand, expect c = fλ and E = hf as one-step calculations and the spectrum in order.

---

## Part 13 — Electromagnetic induction: Faraday's law and Lenz's law
*(Weeks 10 and 11)*

### What it is

**Magnetic flux: Φ = B·A = BA cos θ**, unit the **weber** (Wb = T·m² = V·s), with **θ measured between B and the *normal* to the surface**. For N turns the quantity that matters is the **flux linkage NΦ**. Flux is a **scalar**.

| Orientation | θ (from the normal) | Φ |
|---|---|---|
| Plane **perpendicular** to B (face-on) | 0° | **BA**, maximum |
| Plane at 30° to B | 60° | 0.5 BA |
| Plane **contains** B (edge-on) | 90° | **0** |

**Faraday's law: ε = −N dΦ/dt**, or **ε = −N ΔΦ/Δt** for a uniform rate. The emf depends on the **rate of change** of flux — not on B, not on Φ, and not on how much flux there is.

**Three, and only three, ways to change Φ = BA cos θ:** change **B**, change **A** (a sliding rod, a coil pulled out of a field), or change **θ** (rotate the coil — a generator). Any of them induces an emf; **relative motion is not required**.

**Lenz's law.** *The induced current flows in the sense whose own magnetic field opposes the **change** in flux that produced it.* Not "opposes the field" — opposes the **change**. Rising flux ⇒ the induced field fights it; falling flux ⇒ the induced field tries to maintain it. In pole form: **an approaching N pole meets an induced N pole (repulsion); a receding N pole meets an induced S pole (attraction).**

**Induced current and charge.** I = |ε|/R, and integrating over the whole change,

**q = N ΔΦ/R** — independent of how fast the change happens.

**Motional emf: ε = BLv**, giving I = BLv/R and a retarding force **F = BIL = B²L²v/R** directed **against** the motion.

**Rotating coil (a.c. generator):** **Φ = BA cos ωt**, so **ε = NBAω sin ωt**, with **ε_peak = NBAω**, **ω = 2πf** and **ε_rms = ε_peak/√2**.

### Why it works

**Why ε tracks the rate and not the amount.** Faraday's law is a derivative. A coil sitting in the strongest steady field in the world has exactly zero emf; a coil in a weak but rapidly changing field can have a large one. Her deck says it outright: "the actual existence of the magnetic flux is not sufficient to produce the induced emf; **the flux must be changing**."

**Why flux maximum means emf zero.** In a rotating coil the emf is the **slope** of the flux curve, and the slope of a cosine is zero at its peak. So the emf vanishes when the coil is face-on — where the flux is greatest — and is maximum a quarter-turn later, when the coil is edge-on and the flux is zero. Students routinely report peak emf at exactly the position where it vanishes.

**Why Lenz's law must be true.** Push a magnet toward a coil; the induced current dissipates I²R as heat, and that energy comes from **the work you do pushing against the repulsion**. If the induced current instead *attracted* the magnet, the magnet would be pulled in faster, generating more current, generating more attraction — unbounded kinetic energy *and* unbounded heat, from nothing. Lenz's law is therefore not an extra empirical rule but **the first law of thermodynamics applied to induction**, and it is why a generator with its load switched on is physically harder to turn than one running open-circuit.

**How to apply Lenz's law, every time, in four steps.** (1) Decide the direction of B through the loop and whether the flux is increasing or decreasing. (2) The induced current's own field must **oppose that change** — against B if Φ is rising, along B if Φ is falling. (3) Get the current's sense from the right-hand grip rule: thumb along the required induced field inside the loop, fingers give the circulation. (4) Sanity-check mechanically: does the resulting force oppose the motion? It must.

**Why the induced charge is time-independent.** q = NΔΦ/R contains no time. Slow the change down and the current is smaller for exactly as much longer; the product is identical. "Flip it faster to move more charge" is false, and this is a favourite examiner's trap.

**Emf is not current.** An emf is energy given to unit charge by a non-electrostatic agency, in volts. A **broken** coil moved past a magnet has exactly the same emf across its ends as an intact one, and zero current. Faraday's law gives ε; Ohm's law then gives I = ε/R.

> ⚠ **Slide errors (week 10).** Five, and the first is the worst.
> **(i)** "For Faraday's law to hold true there must be **movement** between the coil and the magnetic field" — **false**, and the deck contradicts it two slides later with the transformer, in which nothing moves at all. The criterion is a **changing flux**.
> **(ii)** The formula is given as ε = −dΦ/dt with **no N**, while the deck simultaneously argues that more turns give more voltage. For a coil it must be **ε = −N dΦ/dt**.
> **(iii)** "The negative sign indicates the direction of the emf induced. This is Faraday's **second law**" — the sign is **Lenz's law**, and it should be named as such.
> **(iv)** "An alternating current … **induces an alternating current** in the secondary" — it induces an **emf**; a current flows only if the secondary circuit is closed.
> **(v)** "An increase in the number of turns results in an increase in the magnetic field strength" is true only at fixed length, since B = μ₀nI depends on turns **per metre**.

> ⚠ **Wrong document (week 11).** The LMS "Summary" PDF for week 11 is titled Faraday's and Lenz's laws, but its entire body — the summary paragraph, the bullets and the case study — is about **Gauss's law and electric flux**, an earlier topic. **Do not revise week 11 from it.** Revise from the lecture deck and from this Part.

### Worked example 1 — changing B, and the charge that flows

*A flat circular coil of **120 turns**, radius **4.0 cm**, lies with its plane perpendicular to a uniform field. B falls steadily from **0.60 T to 0.10 T in 0.20 s**. Total circuit resistance **8.0 Ω**.*

A = πr² = π(0.040)² = **5.03 × 10⁻³ m²** *(radius not diameter; πr² not 2πr; metres not centimetres)*
The **plane** is perpendicular to B, so the **normal is parallel to B**: θ = 0 and cos θ = 1 — the maximum-flux orientation.
ΔΦ = (0.50)(5.03 × 10⁻³) = 2.51 × 10⁻³ Wb, so NΔΦ = 0.302 Wb
**ε = NΔΦ/Δt = 0.302/0.20 = 1.5 V**. All the physics is in the **change**, 0.50 T; using the final field 0.10 T or the sum 0.70 T are the two standard wrong substitutions.
I = ε/R = **0.19 A**
**Direction:** if B points out of the page and is **decreasing**, the induced current must **maintain** out-of-page flux, so by the grip rule it flows **anticlockwise**. Note it flows *with* B, not against it, because it is the **loss** of flux that is being opposed.
**Charge:** q = NΔΦ/R = 0.302/8.0 = **3.8 × 10⁻² C (38 mC)** — and repeating the experiment over 2.0 s gives one-tenth the emf and current for ten times as long, and **still 38 mC**.
*Contrast: had the coil's plane contained B throughout, Φ = 0 at every instant and **ε = 0** however violently B was changed.*

**Her week-11 version of the same problem:** 200 turns, radius 5.0 cm (A = 7.854 × 10⁻³ m²), B rising from 0.100 T to 0.500 T in 0.200 s, R = 8.0 Ω.
dB/dt = 2.00 T/s ⇒ **ε = 200 × 7.854 × 10⁻³ × 2.00 = 3.14 V**; **I = 0.393 A**; **q = 0.0785 C**, confirmed by q = IΔt = 0.393 × 0.200 ✓

### Worked example 2 — motional emf and the energy audit

*A rod of length **0.25 m** slides at **4.0 m/s** on frictionless rails, B = **0.35 T** perpendicular to the circuit, total resistance **0.50 Ω**.*

ε = BLv = **0.35 V**; I = ε/R = **0.70 A**, in the sense that opposes the *increase* in enclosed area
F = BIL = (0.35)(0.70)(0.25) = **0.061 N**, against the motion — equivalently B²L²v/R ✓
Mechanical power to hold the speed: Fv = **0.245 W**; electrical power I²R = **0.245 W** ✓ and εI = 0.245 W ✓ Three routes, one number.
*Release the rod and the retarding force B²L²v/R is proportional to v, so it decelerates exponentially and **all** its kinetic energy ends as heat in R. If Lenz's law ran the other way the force would be forward, and the rod would accelerate for ever while delivering ever more power — the perpetual-motion machine the law exists to forbid.*

*A second set, from week 11: L = 0.25 m, v = 3.0 m/s, B = 0.40 T into the page, R = 1.5 Ω gives ε = **0.30 V**, I = **0.20 A**, F = **0.020 N**, and P_mech = P_elec = **0.060 W**. Direction: the enclosed area is growing, so into-page flux is increasing, so the induced field inside the loop points **out of the page** and the current is **anticlockwise**.*

### Worked example 3 — the a.c. generator

*A coil of **200 turns**, area **150 cm²**, rotating at **50 rev/s** in **0.080 T**.*

A = 150 cm² = **1.50 × 10⁻² m²**; ω = 2πf = **314 rad/s** *(using f = 50 in place of ω is wrong by 6.28 — the commonest generator error)*
ε₀ = NBAω = (200)(0.080)(1.50 × 10⁻²)(314) = **75 V**
ε_rms = ε₀/√2 = **53 V** — what a meter reads; the peak is what the insulation must survive
Output frequency: **50 Hz**, one full sine cycle per revolution
**Phase:** ε = ε₀ sin ωt while Φ = BA cos ωt, so the emf is **zero** when the coil is face-on and the flux greatest, and **maximum** a quarter-turn later.
*Spinning at 100 rev/s doubles ε₀ to 151 V and doubles f to 100 Hz, so the power into a fixed resistor goes up four-fold — which is why the shaft becomes markedly harder to turn.*

*Her week-11 version: 100 turns, 0.020 m², 50 Hz, B = 0.25 T gives ω = 314.16 rad/s, **ε_peak = 157.1 V**, **ε_rms = 111.1 V**, and at a normal 30° from B, ε = 157.1 sin 30° = **78.5 V**. Contrast an **average**: turning the same coil from θ = 0 to θ = 90° in 0.25 s gives |ε_av| = NΔΦ/Δt = **2.0 V**, which says nothing at all about the peak.*

### Where people go wrong

- **ε depends on dΦ/dt, not on Φ and not on B.** The single most common error of the topic.
- **θ read from the plane.** "Plane perpendicular to B" ⇒ θ = 0 ⇒ Φ maximum. "Inclined at 30° to B" usually means the *plane*, so θ = 60°.
- **Flux maximum taken as emf maximum.** They are a quarter-cycle apart.
- **"Lenz opposes the field."** It opposes the **change**. Decaying flux is opposed by a current whose field points the *same* way as B.
- **Emf confused with current.** An open coil has an emf and no current.
- **q = NΔΦ/R treated as time-dependent.** It is not.
- **ε = BLv without all three perpendicular.** A rod sliding along its own length, or moving parallel to B, generates nothing.
- **ω versus f in the generator.** ε₀ = NBAω = 2πfNBA.
- **The minus sign read as "a negative number".** It is Lenz's law, and it means direction.

### In the exam

Expect one "coil in a changing field" calculation ending in ε, then I, then possibly q — with the area conversion and the angle-from-the-normal both built in as traps. Expect one Lenz direction question ("clockwise or anticlockwise?") where the marks are for the reasoning steps, and one generator question where ω = 2πf is the whole difficulty. Be able to state Faraday's law with the N in it, state Lenz's law in terms of the **change**, and give the energy argument for why it must be so.

---

## Part 14 — Self and mutual inductance
*(Week 10 summary strand)*

### What it is

**Self-inductance.** A coil's own changing current changes its own flux, which induces an emf in itself opposing the change.

**L = NΦ/I** ⇒ **ε = −L dI/dt** ⇒ **U = ½LI²**, and for a solenoid **L = μ₀μ_r N²A/ℓ** — note **N², not N**.

Unit: the **henry**, H = Wb/A = V·s/A. One henry is the inductance in which a current changing at 1 A/s induces 1 V.

**Mutual inductance.** Coil 1's changing current changes the flux through coil 2.

**M = N₂Φ₂₁/I₁** ⇒ **ε₂ = −M dI₁/dt**, with **M₁₂ = M₂₁** (the **reciprocity theorem**) and **M = k√(L₁L₂)**, where 0 ≤ k ≤ 1 is the **coupling coefficient**.

For two coaxial solenoids sharing length ℓ and area A, **M = μ₀μ_r N₁N₂A/ℓ**, from which **M/L₁ = N₂/N₁** immediately.

### Why it works

**Why N² and not N.** Doubling the turns doubles the field inside (through n = N/ℓ) *and* doubles the number of turns that the flux links. Two factors of N, so L quadruples.

**Why L does not depend on the current.** L = μ₀μ_r N²A/ℓ contains no I. It is fixed by geometry and core material alone. Inserting iron of μ_r = 400 multiplies L by 400; changing the current changes nothing about L, though the **stored energy** ½LI² quadruples when the current doubles.

**Why a steady current gives no back-emf.** ε = −L dI/dt, so a large inductor carrying 10 A steadily has zero volts across its inductance. The emf is set by the **rate**, never by the amount.

**Why switching off makes a spark.** Breaking a circuit makes dI/dt enormous, so L dI/dt is enormous. That is why an inductive circuit arcs at the switch and why relay coils get a protective diode.

**Why reciprocity is not obvious but is true.** M depends on the geometry of the *pair* — the turns of each, the area, the separation, the alignment and the core. It comes out to one number, so it does not matter which coil you call the primary. A small coil driving a large one induces exactly as much as the reverse.

### Worked example

*A solenoid: length **30 cm**, **800 turns**, cross-sectional area **5.0 cm²**, air core. A second coil of **150 turns** is wound tightly over its middle.*

**1. Self-inductance.** L = μ₀N²A/ℓ = (4π × 10⁻⁷)(800²)(5.0 × 10⁻⁴)/(0.30) = **1.34 × 10⁻³ H = 1.34 mH**

**2. Check it against L = NΦ/I** at I = 2.5 A. n = 800/0.30 = 2667 m⁻¹; B = μ₀nI = 8.38 × 10⁻³ T; Φ = BA = 4.19 × 10⁻⁶ Wb; NΦ = 3.35 × 10⁻³ Wb; L = NΦ/I = **1.34 × 10⁻³ H** ✓ The two definitions are the same statement.

**3. Back-emf** while the current rises uniformly from 0 to 2.5 A in 10 ms: dI/dt = **250 A/s**, so |ε| = L dI/dt = **0.34 V**. The emf is set by the rate, not by the 2.5 A.

**4. Energy stored** at 2.5 A: U = ½LI² = ½(1.34 × 10⁻³)(6.25) = **4.2 × 10⁻³ J = 4.2 mJ**, held in the field and returned when the current decays.

**5. Mutual inductance.** M = μ₀N₁N₂A/ℓ = **2.51 × 10⁻⁴ H = 0.251 mH**. Shortcut: M/L₁ = N₂/N₁ = 150/800, so M = 1.34 mH × 0.1875 ✓

**6. Emf in the second coil** during the same 250 A/s change: ε₂ = M dI₁/dt = **6.3 × 10⁻² V = 63 mV**

**7. Coupling.** L₂ = μ₀N₂²A/ℓ = 4.71 × 10⁻⁵ H, so √(L₁L₂) = 2.51 × 10⁻⁴ H and **k = 1.00** — perfect coupling, consistent with winding one coil directly on the other.

**8. Reciprocity check.** Drive the 150-turn coil instead and M is the *same* 0.251 mH: at 250 A/s it induces the same **63 mV** in the 800-turn coil.

**9. Add an iron core of μ_r = 400** and every one of L₁, L₂ and M is multiplied by 400 (L₁ = 0.54 H, M = 0.10 H), so the back-emf in step 3 becomes **134 V** — which is why switching off an iron-cored inductor makes a spark.

### Where people go wrong

- **N instead of N².** The standard inductance slip.
- **"L doubles when the current doubles."** L contains no current. The stored **energy** quadruples.
- **Expecting a back-emf from a steady current.** dI/dt = 0 ⇒ ε = 0, however large I is.
- **Quoting ½LI² as a voltage.** It is an energy, in joules.
- **Mixing henries and webers.** 1 H = 1 V·s/A; 1 Wb = 1 T·m² = 1 V·s.
- **Thinking M depends on which coil you drive.** M₁₂ = M₂₁.
- **Confusing self and mutual.** Self: a coil inducing an emf **in itself** (a spark at a switch). Mutual: coil 1 inducing an emf **in coil 2** (a transformer).

### In the exam

Expect L = μ₀N²A/ℓ with the area in cm² and the length in cm as the two conversions, then a back-emf from a stated dI/dt, then ½LI². Expect one mutual-inductance item, most likely the reciprocity statement or ε₂ = M dI₁/dt. Know the unit of the henry in at least two equivalent forms.

---

## Part 15 — Transformers
*(Week 12)*

### What it is

Her deck builds one chain of three numbered equations, adds one energy statement and one resistance formula, and then works two examples in three parts each.

**Why AC at all (slide 3):** "AC is better than DC for electric power distribution because it is much easier to step voltage levels up and down in AC … This is done using transformers, **which can only be used with AC**."

**The hardware (slide 4):** two coils on an iron core. The side connected to the **input AC source is the primary, with N₁ turns**; the other, connected to a resistor of resistance R, is the **secondary, with N₂ turns**. The core increases the magnetic flux and provides a medium for the flux to pass from one coil to the other.

**Equation 1 — the two induced emfs:**
**ε₁ = −N₁ dΦ_B/dt and ε₂ = −N₂ dΦ_B/dt**

**Equation 2 — the emf ratio:** because the flux per turn is the same in both coils, the induced emf per turn is the same in both, so
**ε₂/ε₁ = N₂/N₁**

**Equation 3 — the voltage ratio, for an ideal transformer only:**
**V₂/V₁ = N₂/N₁**

**Step-up and step-down are defined by turns:** **N₂ > N₁ is step-up; N₂ < N₁ is step-down.**

**Energy consideration:** **I₁V₁ = I₂V₂** — power in equals power out.

**Resistance transformation:** **V₁/I₁ = R/(N₂/N₁)²** — and the turns ratio enters **squared**.

**Impedance matching:** "A transformer may be used to **match resistances** between the primary circuit and the load. This way, **maximum power transfer** can be achieved … the transformer 'transforms' not only voltages and currents, but **resistances** as well."

**Two facts about the hardware:** the core is **laminated** — thin sheets of metal insulated from each other — "to minimize eddy current losses"; and "all of the currents and voltages in the transformer have the **same frequency** as the AC source". An ideal transformer has no losses; real ones reach 90 % to 99 %.

### Why it works

**Read the chain as an argument, because that is how she writes it.** Equation 1 is Faraday's law applied twice to **one shared flux**. Divide the second by the first and the dΦ_B/dt cancels — **and so do the two minus signs**, which is why equation 2 is sign-free and why no sign has been lost. Equation 3 is not algebra at all: it is equation 2 **plus the physical assumption** that in an ideal transformer each winding's induced emf equals the voltage measured at its terminals. Collapsing ε and V into one symbol from the start destroys the whole argument.

**Why voltage is bought with current.** I₁V₁ = I₂V₂ is the only current relation she gives. Step the voltage up by two and the current steps down by two. She never writes I₂/I₁ = N₁/N₂, though both her examples silently exhibit it — 8.0/4.0 = 2 and 13.3/6.67 = 2.

**Why the resistance ratio is squared.** V₁/I₁ = R/(N₂/N₁)². For a step-up transformer N₂/N₁ > 1, so the denominator exceeds 1 and the load looks **smaller** from the primary than it really is: a 60 Ω coffeemaker looks like 15 Ω to the 120 V line. This is the formula students most often apply to the first power, and it is the single most likely place to lose marks this week.

**Why a transformer needs AC.** The whole of equation 1 is a d/dt. On DC, once the switch-on transient has passed, dΦ_B/dt = 0 and the secondary emf is **zero** — and meanwhile the primary, with no back-emf to limit it, draws a current limited only by its own small resistance.

**Why the core is laminated.** A solid core would let large eddy currents circulate in it, dissipating energy as heat. Thin insulated sheets interrupt those loops without disturbing the useful flux.

**Why any of this matters.** Line loss in a transmission cable is I²R, so raising the voltage to lower the current for the same power cuts the loss quadratically — halving the current quarters the loss. That is the reason for the national grid.

### Worked example 1 — the coffeemaker (her Example 1)

**"A friend returns to the United States from Europe with a 960-W coffeemaker, designed to operate from a 240-V line. (a) What can she do to operate it at the USA-standard 120 V? (b) What current will the coffeemaker draw from the 120-V line? (c) What is the resistance of the coffeemaker? (The voltages are rms values.)"**

**(a)** The supply is the primary, the appliance is the secondary: **V₁ = 120 V and V₂ = 240 V**.
**N₂/N₁ = V₂/V₁ = 240/120 = 2** — "the secondary coil should have **twice as many turns** as the primary". Since N₂ > N₁, it is a **step-up** transformer.

**(b)** Using **P_av = V₁I₁**, where P_av is the power drawn by the coffeemaker and hence supplied by the line:
**I₁ = P_av/V₁ = 960/120 = 8.0 A** and **I₂ = P_av/V₂ = 960/240 = 4.0 A**
The question asked what is drawn **from the 120-V line**, so the answer is **8.0 A**; the 4.0 A flows in the coffeemaker itself. Check: I₁V₁ = I₂V₂ = 960 W ✓ and the current ratio 2 is the **inverse** of the voltage ratio.

**(c)** V₁/I₁ = 120/8 = **15 Ω**, and then
**R = (V₁/I₁)(N₂/N₁)² = 15(2)² = 60 Ω**
The 15 Ω is what the line *appears* to be driving; the 60 Ω is the appliance. The whole part turns on the factor 4, not 2. Independent check: R = V₂/I₂ = 240/4.0 = 60 Ω ✓

### Worked example 2 — the hair dryer (her Example 2)

**"You plan to take your hair dryer to Europe, where the outlets put out 240 V instead of 120 V. The dryer puts out 1600 W at 120 V. (a) What could you do to operate it from the 240-V line? (b) What current will it draw from a European outlet? (c) What resistance will it appear to have when operated at 240 V?"**

**(a)** **V₁ = 240 V and V₂ = 120 V**, so **N₂/N₁ = 120/240 = 1/2** — "the secondary coil should have **half as many turns**". Since N₂ < N₁, this is a **step-down** transformer, the mirror image of Example 1 with the same two numbers swapped between primary and secondary.

**(b)** **I₁ = P_av/V₁ = 1600/240 = 6.67 A** (exactly 20/3) and **I₂ = P_av/V₂ = 1600/120 = 13.3 A** (exactly 40/3).
The answer is **6.67 A** from the outlet; the dryer's element carries 13.3 A. Check: I₂/I₁ = 2 = N₁/N₂ ✓

**(c)** **V₁/I₁ = 240/6.67 = 36 Ω** — and that is her final line, and it is the correct answer to the question asked, because (c) asks what the dryer will **appear** to have.

> ⚠ **Slide gap (week 12, slide 21).** She lists N₂/N₁ = 1/2 among the givens and then **never uses it**, and never states the dryer's own resistance. Complete the line yourself, because the two examples ask for different things:
> **R = (V₁/I₁)(N₂/N₁)² = 36 × (1/2)² = 9 Ω**, confirmed by V₂/I₂ = 120/13.3 = 9 Ω and by V₂²/P_av = 14400/1600 = 9 Ω.
> **Example 1(c) asks for the appliance's own resistance (60 Ω) and multiplies by the ratio squared; Example 2(c) asks for the apparent resistance (36 Ω) and stops before that multiplication.** Read which one the question wants. A student who has pattern-matched only Example 1 will answer 9 Ω here; one who has pattern-matched only Example 2 will answer 15 Ω there.

### Where people go wrong

- **Which side is 1?** The primary is the side connected to the **input source**, always — even when the appliance is rated for the other voltage. Get this backwards and every part of both examples inverts.
- **Step-up defined by "the bigger number".** It is defined by **N₂ > N₁**.
- **Looking for a lost minus sign in ε₂/ε₁ = N₂/N₁.** The two cancelled.
- **Treating equation 3 as algebra.** It carries the ideal-transformer assumption.
- **Writing I₂/I₁ = N₂/N₁.** The currents go the **other** way: I₁V₁ = I₂V₂.
- **Answering with the wrong current.** Example 1 produces 8.0 A and 4.0 A on the same slide; the **line** current is the primary current.
- **Applying the turns ratio to the first power in the resistance formula.** (2)² = 4, so 15 × 4 = 60, not 30.
- **Apparent versus actual resistance.** V₁/I₁ is what the source sees; R is what the appliance is; they differ by (N₂/N₁)².
- **Attributing lamination to hysteresis.** The deck names **eddy currents** only, and never mentions hysteresis at all.
- **Expecting the frequency to change.** Turns ratios scale voltages and currents, never frequencies.

### In the exam

Her two examples are the shape of the question, and there are six part-answers to have by heart: **2, 8.0 A, 60 Ω** and **1/2, 6.67 A, 36 Ω** — plus the missing **9 Ω**. For each one, be able to say which of her three equations you used. Expect also a conceptual item on why transformers need AC, on what lamination is for, or on why a step-up transformer steps the current down.

*(A closing sentence from her Summary slide, worth knowing but not calculable: "Transformers are also used to **isolate electrical circuits** from each other." Nothing earlier in the deck develops it. The week's companion summary sheet also says transformers "convert high voltage, low current to low voltage, and high current" — that describes only **step-down** operation, and her own Example 1 is the reverse.)*

---

## Recap: constants, formulas and definitions

### Constants

| Symbol | Value |
|---|---|
| e | 1.6 × 10⁻¹⁹ C (elementary charge) |
| **k** | **9.0 × 10⁹ N m²/C² (= 1/4πε₀) — the value she uses throughout** |
| ε₀ | 8.85 × 10⁻¹² C²/N·m² (appears only inside k) |
| μ₀ | 4π × 10⁻⁷ T·m/A; μ₀/2π = 2 × 10⁻⁷ T·m/A |
| c | 3.00 × 10⁸ m/s |
| m_e | 9.11 × 10⁻³¹ kg |
| h | 6.63 × 10⁻³⁴ J·s |
| μ_B | 9.27 × 10⁻²⁴ J/T (Bohr magneton) |
| — | 1 T = 10⁴ G; √2 = 1.4142; 1/√2 = 0.7071 |

### Electrostatics and the electric field

| Formula | Meaning |
|---|---|
| q = ne | quantisation of charge |
| q′ = (q₁ + q₂)/2 | identical conductors after contact |
| F = k q₁q₂ /r², using magnitudes | Coulomb's law — direction read off the diagram |
| E = F/q₀; E = kQ/r²; F = qE | field (N/C), point-charge field, force on a charge |
| ΣF = F₁ + F₂ + ⋯ F_N | superposition, as a **vector** sum |
| p = qd | electric dipole moment (C·m), directed −q → +q |
| V = kp cos θ/r² | dipole potential; zero on the equatorial plane |
| E = 2kp/r³ (axial), kp/r³ (equatorial) | dipole field, parallel and antiparallel to p |
| τ = pE sin θ; U = −pE cos θ | torque and energy of a dipole in a uniform field |

### Capacitors and dielectrics

| Formula | Meaning |
|---|---|
| C = Q/V; C₀ = ε₀A/d; C = κε₀A/d | capacitance (farad), vacuum and dielectric |
| V = Ed | uniform field between parallel plates |
| U = ½CV² = ½QV = Q²/2C | energy stored (J) |
| u_E = ½ε₀E²; U = u_E(Ad) | energy density (J/m³) and total energy |
| χ_e = κ − 1; ε = κε₀ | susceptibility and permittivity |

### DC circuits

| Formula | Meaning |
|---|---|
| ε = W/Q; [ε] = M¹L²T⁻³I⁻¹ | emf as work per unit charge, and its dimensions |
| ε = V + Ir; V = ε − Ir; I = ε/(R + r) | terminal voltage and the single loop |
| εI = I²R + I²r | power delivered, dissipated and wasted |
| V–I graph: intercept = ε, gradient = −r | measuring a cell |
| R_eq = R₁ + R₂ + ⋯; 1/R_eq = 1/R₁ + 1/R₂ + ⋯ | series and parallel (**invert at the end**) |
| ΣI = 0 (charge); ΣV = 0 (energy) | Kirchhoff's junction and loop rules |
| − to + is +ε; + to − is −ε; with I is −IR; against I is +IR | the four sign rules |
| V_Th = V_oc; R_Th with sources zeroed; I_N = V_Th/R_Th | Thévenin and Norton |

### AC circuits

| Formula | Meaning |
|---|---|
| V = V_max sin ωt; ω = 2πf = 2π/T | the source and its angular frequency |
| I = I_max sin ωt with I_max = V_max/R | current in a resistor |
| (I²)_av = ½I²_max | the mean square |
| I_rms = 0.7071 I_max; V_rms = 0.7071 V_max | rms values (and rms → peak is ×1.4142) |
| P_av = I²_rms R = V²_rms/R; P_max = V²_max/R | average and maximum power; P_max = 2P_av |
| X_L = 2πfL; X_C = 1/2πfC; X = X_L − X_C | reactances, which **subtract** |
| Z = √(R² + X²); I = V/Z | impedance |
| P = VI cos φ = I²R; Q = VI sin φ; S = VI | real (W), reactive (var), apparent (VA) |
| S² = P² + Q²; PF = cos φ = P/S = R/Z | the power triangle and the power factor |
| ω₀ = 1/√(LC), where X_L = X_C, Z = R, PF = 1 | resonance |

### Magnetism and induction

| Formula | Meaning |
|---|---|
| F = q(E + v × B); F = qvB sin θ | total force on a charge; its magnetic part |
| r = mv/qB; T = 2πm/qB; v = E/B | circular path, period, velocity selector |
| F = BIL sin θ | force on a current-carrying wire |
| B = μ₀I/2πr; B = μ₀nI; B = μ₀NI/2R | wire, solenoid (n = N/ℓ), centre of a coil |
| μ = NIA; τ = μB sin θ; U = −μB cos θ | magnetic moment (A·m² = J/T), torque, energy |
| M = g(−eL/2m) | electron magnetic moment; μ antiparallel to L |
| Φ = BA cos θ (θ from the **normal**) | magnetic flux (Wb) |
| ε = −N dΦ/dt; ε = BLv; q = NΔΦ/R | Faraday's law, motional emf, induced charge |
| ε = NBAω sin ωt; ε_peak = NBAω | the a.c. generator |
| F = B²L²v/R | retarding force on a moving rod |
| L = NΦ/I = μ₀μ_r N²A/ℓ; ε = −L dI/dt; U = ½LI² | self-inductance (henry) |
| M = N₂Φ₂₁/I₁ = k√(L₁L₂); ε₂ = −M dI₁/dt | mutual inductance; M₁₂ = M₂₁ |
| ε₂/ε₁ = N₂/N₁; V₂/V₁ = N₂/N₁; I₁V₁ = I₂V₂ | transformer relations |
| V₁/I₁ = R/(N₂/N₁)² | resistance seen through a transformer (**squared**) |
| c = fλ; E = hf = hc/λ | wave equation and photon energy |

### Definitions to state word for word

**Quantisation of charge** — charge exists only in whole multiples of e. **Conservation of charge** — the total charge of an isolated system is constant. **Additivity** — the net charge is the algebraic sum of the individual charges, signs included. **Charging by conduction** — contact with a charged body; both end with the same sign. **Charging by induction** — a charged body brought near, then grounding, then removing the ground and finally the rod; the conductor keeps the opposite sign. **Polarisation** — charge separation with no net charge gained or lost. **Coulomb's law** — the magnitude of the force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them. **Superposition of forces** — when two charges exert forces simultaneously on a third, the total force is the **vector sum** of the forces each would exert individually. **Electric field** — the force a unit positive charge would experience if placed at that point; unit N/C. **Electric dipole moment** — p = qd, directed from −q to +q. **Capacitance** — charge stored per unit potential difference. **Dielectric constant** — the factor by which a material multiplies capacitance. **Breakdown potential** — the largest p.d. a dielectric can hold before it conducts. **Conductor** — free electrons, low resistivity, zero internal field in electrostatic equilibrium. **Insulator** — no free electrons, high resistivity. **Electromotive force** — the work done on a unit charge in driving it round the circuit; unit the volt. **Terminal potential difference** — the voltage across a source under load, V = ε − Ir. **Junction** — a point where three or more conductors meet. **Loop** — any closed conducting path. **Kirchhoff's junction rule** — the algebraic sum of the currents into any junction is zero (conservation of charge). **Kirchhoff's loop rule** — the sum of the potential changes round any closed loop is zero (conservation of energy). **Peak value** — the maximum instantaneous value in a cycle, measured from the zero reference point. **RMS value** — the equivalent DC value that would produce the same power dissipation in a resistive load. **Power factor** — real power divided by apparent power, cos φ. **Resonance** — X_L = X_C, giving minimum impedance, maximum current and unity power factor. **Magnetic dipole moment** — current times enclosed area, directed along the normal by the right-hand rule. **Magnetic flux** — BA cos θ, with θ measured to the **normal**. **Electromagnetic induction** — the production of an emf by a changing magnetic flux. **Faraday's law** — the induced emf equals minus N times the rate of change of flux. **Lenz's law** — the induced current opposes the **change** that produced it; a consequence of energy conservation. **Self-inductance** — a changing current in a coil induces an opposing emf in that same coil. **Mutual inductance** — a changing current in one coil induces an emf in another, and it is the same number either way round. **Step-up transformer** — one with N₂ > N₁.

### Errors in the course material, collected

Every one of these is on a slide you may be examined from. Know the correct version, and know what the slide prints.

1. **Week 2, slide 14 — heading.** "ELECTRIC FIELD AROUND A POSITIVE CHARGE, − Q" should read **NEGATIVE**. The body text and the diagram are correct: the field around −Q is radially **inward**.
2. **Week 2, slide 8 — lettering.** The example's parts are labelled a, b, **f**; "f" is a misprint for **c**. There are no parts c, d, e.
3. **Week 2 — unfinished answers.** Example 1 never states the total force (**12 × 10⁻¹¹ N toward the nearer proton**); part c is never solved (**9.14 × 10⁻² N in +x**); solved problem 2 gives no direction (**radially inward**); solved problem 3 never computes the force on the electron (**9.2 × 10⁻¹⁷ N in −x**).
4. **Week 2 — notation.** |E| is printed as kQ/r² where it should be k|Q|/r². She substitutes the magnitude in practice; do the same.
5. **Week 3.** "U = ½εE² = 1.77 × 10⁻⁷ **J**" — that is an energy **density**, so **J/m³**. The total is 1.77 × 10⁻¹¹ J.
6. **Week 3.** C = 3.54 × 10⁻¹² F for A = 0.02 m², d = 0.005 m. The correct value is **3.54 × 10⁻¹¹ F**.
7. **Week 3.** "E′ = E × K^½" is not a standard result. At constant charge E′ = E/κ; at constant voltage E′ = E.
8. **Week 4.** Internal resistance called "the negative reciprocal of the slope" of the V–I line. It is **minus the slope**; a reciprocal has units of siemens.
9. **Week 4.** Dipole torque printed "τ = 2 q an E sinθ". There is no quantity "an": **τ = 2qaE sin θ = pE sin θ**.
10. **Week 4.** "A non-uniform field means the net force will undoubtedly be greater than zero" — it is *generally* non-zero, but can vanish at symmetry points.
11. **Week 4.** The mid-lesson three-phase inverter question is power-electronics material, off-syllabus for this deck.
12. **Week 5, slide 11.** Announces two rules and prints only the junction rule; the loop rule appears first on the Summary slide. State both.
13. **Week 5, Summary.** "The sum of the **voltage drops** … must be zero" leaves the emfs out. ΣV = 0 sums **all potential changes**.
14. **Week 6, slides 13 and 14.** Practice question 2 is set at **120 V** and solved at **250 V**. Both answers: 170 V and 353.56 V; the current gives 14.14 A either way.
15. **Week 6, slide 7.** "Average Value = 0.6371 I_m" — the rectified half-cycle mean is 2/π = **0.6366** I_m, and the quantity is never used anywhere in the deck.
16. **Week 6, slide 9.** "Both alternating voltage and current have a zero value" means the **average over a complete cycle** is zero.
17. **Week 7.** "P = V × I × sin(θ)" for a purely reactive circuit is the **reactive** power Q, in var. The real power there is **zero**.
18. **Week 7.** "V is the dc voltage, I is the dc current" while discussing an AC resistor — they must be **rms** values, and V²/R must use the voltage across R.
19. **Week 8.** The alignment torque called "magnetization"; magnetisation is moment **per unit volume**.
20. **Week 8.** The g-factor called a "correlation factor"; and a stray bracket about charges left over from the **electric** dipole.
21. **Week 9.** "Work is done on moving charges when in a magnetic field" — the magnetic force does **exactly zero** work.
22. **Week 9.** cgs factors of 1/c carried into an SI treatment. In SI, **dF = I dl × B**.
23. **Week 9.** "F = 125 **N/s**" — force is measured in newtons.
24. **Week 9.** The mid-lesson question adds the electric and magnetic force magnitudes arithmetically; that is a vector sum, valid only under two unstated assumptions.
25. **Week 10.** "There must be movement between the coil and the magnetic field" — **false**; the criterion is a changing flux, and the deck's own transformer contradicts it.
26. **Week 10.** Faraday's law written with **no N**; for a coil it is ε = −N dΦ/dt. The minus sign is **Lenz's law**, not "Faraday's second law".
27. **Week 10.** "Induces an alternating **current** in the secondary" — it induces an **emf**.
28. **Week 11.** The LMS "Summary" PDF is **the wrong document**: it is titled Faraday and Lenz but its body is Gauss's law and electric flux. Revise week 11 from the deck.
29. **Week 12, slide 21.** Lists N₂/N₁ = 1/2 among the givens and never uses it; the dryer's own resistance, **9 Ω**, is never stated.
30. **Week 12, summary sheet.** "They convert high voltage, low current to low voltage, and high current" describes only **step-down** operation.

### Where the source was too thin, and what was done about it

- **Weeks 2, 5, 6 and 12** were rebuilt by reading the rendered slide images directly, because a text extraction of those decks recovers only headings. **Every number quoted for those weeks on this page is hers**, taken off the slide.
- **Week 5, slides 20–23** — her four-slide solution to the bridge circuit could not be recovered. The bridge in Part 8 is worked with substitute numbers, clearly marked; **the method is hers, the numbers are not**.
- **Weeks 1, 3, 4, 8, 9 and 10** are prose decks that state their objectives and then discuss them in words, writing few or no equations — week 10 writes exactly one equation in the entire deck. The standard 100-level treatment of exactly those stated objectives is supplied here, with every slide error named.
- **Week 8's** two central equations, τ = μ × B and U = −μ·B, are stated only **verbally** on the slides ("a torque that tends to align it with the field"; "lower potential energy when aligned with it").
- **Week 9's** electromagnetic-waves strand and **week 10's** inductance strand exist only as bullet lists on the weekly summary sheets. Both are examinable, so both are taught here — Parts 12 and 14.
- **Weekly summary sheets frequently name a different topic from the deck they accompany**, and for week 11 the sheet is simply the wrong document. Where a sheet's bullets are examinable they are taught; where a sheet contradicts the deck, the deck wins and the discrepancy is named.

*End of guide.*
