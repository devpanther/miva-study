# PHY_102 — Week 2 Summary

*General Physics II · Topic: Superposition of Forces & Electric Field · Lecturer: Dr. Sharafadeen Adeniji, PhD Theoretical and Applied Physics*

**Scope note:** this rewrite follows the deck slide-for-slide. The lecturer teaches exactly four things — Coulomb's law for a **pair** of point charges, the **principle of superposition of forces**, the definition of the **electric field E = F/q₀** with its point-charge form |E| = k|Q|/r², and the **rules for field lines** — carried by two superposition examples and three solved field problems, **every one of them collinear (one dimension, along a single line)**. She uses **k = 9.0 × 10⁹ N m²/C²** throughout; every number on her slides is computed with that value, not 8.99 × 10⁹. She does **NOT** cover: the Lorentz force, electric potential V, potential energy, work done by the field, Gauss's law, continuous charge distributions, dipoles, E = V/d for parallel plates, any numerical use of ε₀, or **any two-dimensional problem requiring resolution into components**. The week's one-page MIVA summary sheet name-drops "Lorentz force" and "electric potential" in a bullet list, but the lecturer's deck never defines, derives or works either — they are marked below as an aside, not taught here. Learn her five worked problems cold; they are the shape of the exam questions.

## The 9 most examinable things this week

1. **Coulomb's law (slide 3), her wording.** "Coulomb's law states the magnitude of the electric force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them." Written **F = k|q₁q₂|/r² = (1/4πε₀)·|q₁q₂|/r²**, with **k = 1/4πε₀ = 9.0 × 10⁹ N m²/C²**.
2. **The bars are not decoration.** She writes **|q₁q₂|**, a product of *magnitudes*. Coulomb's law as she states it gives a **magnitude only**. The direction — repulsion for like signs, attraction for unlike — comes from the picture, never from substituting a negative number.
3. **Why superposition is needed at all (slide 4).** "Coulomb's law only describe the interaction of two point charges." A third charge is outside its reach, so a new experimental principle is required.
4. **The principle of superposition of forces (slide 4), verbatim.** "Experiments have shown that when two charges exert forces simultaneously on a third charge, the total force acting on that charge is the **vector sum** of the forces that the two charges would exert individually."
5. **Her subscript convention: Fᵢⱼ means the force that charge i exerts on charge j** — source first, victim second. On slide 6 the electron is q₃, so |F₁₃| and |F₂₃| are the two pulls on the electron. On slide 10 the charge being solved for is Q₁, so F₂₁ and F₃₁ are the two forces on it. Read the *second* subscript to find whose free-body diagram you are on.
6. **Inverse square, made concrete (slide 6/7).** She labels the distances **r₁ = 1.2 nm = r** and **r₂ = 2.4 nm = 2r**, and the answers come out **16 × 10⁻¹¹ N** and **4 × 10⁻¹¹ N**. Doubling the distance quarters the force. That ratio is the whole point of the example.
7. **Electric field, definition (slide 11).** "The electric field at a point is the force a unit charge (q = +1 C) would experience if placed there." **E = F/q₀**, **SI unit N/C**. "It is a vector and its direction can be represented by electric field lines."
8. **Field of a point charge (slides 13, 14).** A test charge +q at separation r feels |F| = kQq/r²; dividing by q, **|E| = |F|/q = kQ/r²**. Direction: **radially outward from +Q**, **radially inward toward −Q**. The magnitude formula is identical for both signs — only the arrow changes.
9. **Field-line rules (slides 12, 15, 16).** Lines **start on positive charges and end on negative charges**; for a single charge they **end at infinity**. **The more closely spaced the field lines, the stronger the force.** **The direction of the field lines shows how a positive charge would move if placed at that point; a negative charge would move the opposite way.** And: "a single charge produces an electric field around itself, but the electric field cannot exert a net force [on] the charge that produces it."

## Superposition of forces — the lecturer's build

**Slide 3, INTRODUCTION.** Coulomb's law, stated as in item 1 above, with a diagram of q₁ and q₂ separated by r and the two forces Fₑ drawn pointing **away from each other** — the like-charge (repulsive) case, an equal-and-opposite Newton's-third-law pair. She writes the working form on the diagram as **Fₑ = kq₁q₂/r²**.

**Slide 4, SUPERPOSITION OF FORCES.** Three sentences, in this order:
> "Coulomb's law only describe the interaction of two point charges.
> Experiments have shown that when two charges exert forces simultaneously on a third charge, the total force acting on that charge is the vector sum of the forces that the two charges would exert individually.
> This important property is called the principle of superposition of forces."

Two things to take from the wording. First, it is an **experimental** result, not a derivation. Second, "**vector sum**" is doing all the work: the two forces are added as arrows, so along a line they **add if they point the same way and subtract if they oppose**. Nothing about the presence of the second charge alters the pairwise force from the first.

### EXAMPLE 1 (slides 5–7)

**Her problem statement (slide 5):** "Two protons are 3.6 nm apart. What is the total force on an electron located on the line between them, 1.2 nm from one of the protons? (elementary charge e = 1.6 × 10⁻¹⁹ C)"

**Her set-up (slides 6 and 7).** Three charges on a line: **q₁ = +e** (left proton), **q₃ = −e** (the electron, in the middle), **q₂ = +e** (right proton). Distances marked on the diagram as **r₁ = 1.2 nm = r** and **r₂ = 2.4 nm = 2r** — note she does the subtraction 3.6 − 1.2 = 2.4 nm silently. Under the electron she draws **two arrows, one pointing left and one pointing right**: the electron is negative, so it is **attracted to both protons**, and the two attractions pull it in **opposite** directions.

**Her working (slide 6), every line:**

|F₁₃| = k·|q₁q₃|/r²
 = 9.0 × 10⁹ · (1.6 × 10⁻¹⁹ × 1.6 × 10⁻¹⁹)/(1.2 × 10⁻⁹)²
**|F₁₃| = 16 × 10⁻¹¹ N**

|F₂₃| = k·|q₂q₃|/r²
 = 9.0 × 10⁹ · (1.6 × 10⁻¹⁹ × 1.6 × 10⁻¹⁹)/(2.4 × 10⁻⁹)²
**|F₂₃| = 4 × 10⁻¹¹ N**

The arithmetic in full, since she compresses it: the numerator is 9.0 × 10⁹ × 2.56 × 10⁻³⁸ = **2.304 × 10⁻²⁸ N·m²** in both cases. Then (1.2 × 10⁻⁹)² = 1.44 × 10⁻¹⁸ m², so 2.304 × 10⁻²⁸ / 1.44 × 10⁻¹⁸ = **1.6 × 10⁻¹⁰ N = 16 × 10⁻¹¹ N**. And (2.4 × 10⁻⁹)² = 5.76 × 10⁻¹⁸ m², so 2.304 × 10⁻²⁸ / 5.76 × 10⁻¹⁸ = **4.0 × 10⁻¹¹ N**. Because r₂ = 2r₁, the second denominator is **four times** the first, so |F₂₃| = |F₁₃|/4 — you can write the second answer down without recomputing.

**⚠ The deck stops there and never states the total force**, even though "total force" is what the question asks for. Finish it: the two attractions oppose, so the vector sum along the line is the **difference**, and it points toward the **stronger** pull, i.e. toward the **nearer** proton q₁:

**ΣF = |F₁₃| − |F₂₃| = 16 × 10⁻¹¹ − 4 × 10⁻¹¹ = 12 × 10⁻¹¹ N = 1.2 × 10⁻¹⁰ N, directed toward the nearer proton.**

Answering "16 × 10⁻¹¹ N" or "20 × 10⁻¹¹ N" are the two ways to lose this question: the first forgets the second proton entirely, the second adds two arrows that point opposite ways.

### EXAMPLE 2 (slides 8–10)

**Her problem statement (slide 8):** "A negative charge Q₁ = −18 μC is located at a point x₁ = −9 m, a negative charge Q₂ = −12 μC is located at a point x₂ = 1 m and a positive charge Q₃ = 24 μC is located at a point x₃ = 7 m.
 a. Draw free body diagrams for the electric force acting on Q₁, Q₂ and Q₃.
 b. Find the magnitude and direction of the net electric force on charge Q₁.
 f. Find the magnitude and direction of the net electric force on charge Q₂."

*(The part labelled **f** should read **c** — there are no parts c, d, e. It is a misprint on the slide, not a missing section.)*

**The separations, which she uses without stating them:** r₁₂ = 1 − (−9) = **10 m**; r₁₃ = 7 − (−9) = **16 m**; r₂₃ = 7 − 1 = **6 m**.

#### Part a — the three free-body diagrams

Take **+x to the right**. Signs first, then arrows.
- **On Q₁ (−18 μC, at x = −9):** Q₂ is negative and lies to the right, so the force is **repulsive → arrow to the left (−x)**. Q₃ is positive and lies to the right, so the force is **attractive → arrow to the right (+x)**. This is exactly the picture at the top of slide 10: **F₂₁ pointing left, F₃₁ pointing right.**
- **On Q₂ (−12 μC, at x = 1):** Q₁ is negative and lies to the left, so **repulsion pushes Q₂ to the right (+x)**. Q₃ is positive and lies to the right, so **attraction pulls Q₂ to the right (+x)**. **Both arrows point the same way.**
- **On Q₃ (+24 μC, at x = 7):** Q₁ and Q₂ are both negative and both lie to the left, so **both attractions pull Q₃ to the left (−x)**. Both arrows point the same way.

That is the lesson of part a in one line: **whether you end up adding or subtracting is decided by the diagram, before any arithmetic.**

#### Part b — net force on Q₁ (slide 10, "Solution 2b"), her working in full

F₂₁ = k·|q₂q₁|/r² = 9.0 × 10⁹ · (18 × 10⁻⁶ × 12 × 10⁻⁶)/(10)²
**= 0.0194 N**

F₃₁ = k·|q₃q₁|/r² = 9.0 × 10⁹ · (24 × 10⁻⁶ × 18 × 10⁻⁶)/(16)²
**= 0.0152 N**

**ΣF = F₃₁ − F₂₁ = 0.0152 − 0.0194 = −0.0042 N**

The arithmetic behind her two numbers: 9.0 × 10⁹ × 216 × 10⁻¹² = 1.944, and 1.944/100 = **0.01944 ≈ 0.0194 N**. Then 9.0 × 10⁹ × 432 × 10⁻¹² = 3.888, and 3.888/256 = **0.015187 ≈ 0.0152 N**.

**Read the minus sign.** She has taken **+x as positive** and written the sum as F₃₁ (rightward) minus F₂₁ (leftward). The result is negative, which means the net force is **4.2 × 10⁻³ N in the −x direction** — to the left, away from the other two charges. Note that the **nearer** charge Q₂ wins even though Q₃ carries the larger charge, because 16 m is 1.6 times 10 m and the square of that, 2.56, more than cancels the factor 24/12 = 2.

#### Part f — net force on Q₂ (set on slide 8, never solved on the deck)

Both forces on Q₂ point **+x** (from part a), so they **add**:

F₁₂ = k·|q₁q₂|/r₁₂² = 9.0 × 10⁹ · (18 × 10⁻⁶ × 12 × 10⁻⁶)/(10)² = 1.944/100 = **0.0194 N**, along **+x** (repulsion from Q₁, which sits to the left).
F₃₂ = k·|q₃q₂|/r₂₃² = 9.0 × 10⁹ · (24 × 10⁻⁶ × 12 × 10⁻⁶)/(6)² = 2.592/36 = **0.0720 N**, along **+x** (attraction to Q₃, which sits to the right).

**ΣF = 0.0194 + 0.0720 = 0.0914 N = 9.14 × 10⁻² N in the +x direction.**

Notice F₁₂ and F₂₁ have the **same magnitude, 0.0194 N** — Newton's third law — but opposite directions and different roles: one appears on Q₁'s diagram pointing left, the other on Q₂'s diagram pointing right. Getting a *different* magnitude for those two is a sign you have mixed up a separation.

## Electric field — the lecturer's build

**Slide 11, ELECTRIC FIELD.** Verbatim:
> "The electric field at a point is the force a unit charge (q = +1 C) would experience if placed there.
> **E = F/q₀**
> The SI unit of E is N/C
> It is a vector and its direction can be represented by electric field lines"

Both **E** and **F** carry vector arrows on the slide. The test charge in the denominator is **positive**, which is why **E always points the way a positive charge would be pushed**. Rearranged, **F = q₀E**: for a positive charge the force is along E; for a negative charge it is **antiparallel to E**, and it is the sign of q, not any change in E, that flips it.

**Slide 12, ELECTRIC FIELD (rules).** Verbatim:
> "Electric field lines start on positive charges and end on negative charges or in case of a single charge, electric field lines end at infinity.
> A single charge produces an electric field around itself, but the electric field cannot exert a net force [on] the charge that produces it.
> Usually, a charge sets up an electric field that exerts a force on a second charge."

*(The word "on" is missing from the second sentence on the slide. The meaning is clear: **a charge feels no net force from its own field**, which is why you never include a charge's own contribution when computing the field acting on it.)*

**Slide 13, ELECTRIC FIELD AROUND A POSITIVE CHARGE, +Q.** Her derivation, in her order:
> "A test charge, +q at separation r experiences an outward force **|F| = kQq/r²**
> But **|E| = |F|/q = kQ/r²**
> Direction of electric field is **radially outward**"

That two-line derivation is the exam-worthy part: the field formula is Coulomb's law **with one factor of the test charge divided out**. Which is also why E is a property of the source Q and r alone — the q you brought has cancelled and is gone.

**Slide 14, ELECTRIC FIELD AROUND A [NEGATIVE] CHARGE, −Q.**
> "The magnitude of electric field at any point is still given as: **|E| = |F|/q = kQ/r²**
> Direction of electric field is **radially inward**"

**⚠ Error on the slide.** The title is printed "**ELECTRIC FIELD AROUND A POSITIVE CHARGE, − Q**". It should read **NEGATIVE** charge, −Q. The body text and the diagram (arrows pointing in toward a blue minus sphere) are both correct — only the heading word is wrong. Do not copy "positive" into an exam script.

*(A second, smaller point of notation on both slides: since |E| is a magnitude, the numerator should strictly be **|Q|**. She writes Q. When Q is negative, feed the **magnitude** into the formula and state the direction — inward — separately. She does exactly this on slide 20.)*

**Slides 15 and 16, ELECTRIC FIELD (more rules).** Verbatim:
> "Electric field lines start on positive charges and end on negative charges
> The more closely spaced the field lines, the stronger the force"
> "The direction of the field lines show how a positive charge would move if placed at that point. A negative charge would move the opposite way."

**Slides 17 and 18, the two pictures.** Slide 17: field lines **between two charges** — a dipole pattern, lines leaving +q, curving round, entering −q. Slide 18: field lines **between two plates** — the positive plate on top, the negative plate below, and a set of **straight, evenly spaced, parallel arrows pointing from + to −**, labelled **E**. Even spacing is the visual statement that the field between plates is **uniform**: same magnitude and direction everywhere between them. (She gives no formula for that field — E = V/d is not in this deck.)

### Solved problem 1 (slide 19) — getting E from a measured force

**"A 2.40 μC charge is subject to a 3.00 mN force due to an electric field. What is the magnitude of the electric field at the location of the charge?"**

Given: q = 2.40 μC = 2.40 × 10⁻⁶ C, F = 3.00 mN = 3.00 × 10⁻³ N.

**E = F/q₀ = (3 × 10⁻³)/(2.4 × 10⁻⁶) = 1.25 × 10³ N/C = 1250 N/C**

The whole problem is the **prefix conversion**: μ = 10⁻⁶ and m = 10⁻³. Dividing 3/2.4 gives 1.25 and the powers give 10⁻³⁻⁽⁻⁶⁾ = 10³. No value of k appears anywhere — this is the *defining* equation, not the point-charge formula.

### Solved problem 2 (slide 20) — field of a negative point charge

**"What is the direction and magnitude of the electric field due to a −6.8 μC point charge at a distance of 7.4 m?"**

Given: Q = −6.8 μC = −6.8 × 10⁻⁶ C, d = 7.4 m.

**|E| = |F|/q = kQ/r² = 9.0 × 10⁹ · (6.8 × 10⁻⁶)/(7.4²) = 1.1 × 10³ N/C = 1100 N/C**

Arithmetic: 9.0 × 10⁹ × 6.8 × 10⁻⁶ = 6.12 × 10⁴; 7.4² = 54.76; 6.12 × 10⁴/54.76 = 1117.6, which she rounds to **1.1 × 10³ N/C**. Note that although she declares Q = −6.8 × 10⁻⁶ C, she substitutes **6.8 × 10⁻⁶** — the magnitude — because |E| is a magnitude.

**⚠ Incomplete on the slide.** The question asks for **direction and magnitude**; the slide gives only the magnitude. The direction is **radially inward, i.e. toward the charge** (slide 14), because the source is negative. Write both.

### Solved problem 3 (slides 21–22) — superposition of two fields

**Her problem statement (slide 21):** "A +2.00 nC point charge is at the origin, and a second −5.00 nC point charge is on the x-axis at x = 0.800 m. Find the electric field magnitude and direction at 0.200 m. Find the net electric force that the two charges would exert on an electron placed at 0.200 m."

**Her diagram (slide 22):** q₁ = +2.00 nC at 0, the field point marked at **0.200 m**, q₂ = −5.00 nC at **0.800 m**, and **two arrows, E₁ and E₂, both drawn pointing to the right (+x)**. That picture is the answer to the direction question, and it is settled before any arithmetic: **E₁ points away from the positive q₁** (so, rightward, since the field point is to its right) and **E₂ points toward the negative q₂** (so, rightward again, since q₂ is further right). Same direction ⇒ **add the magnitudes**.

**Her working, every line:**

E₁ = k|q₁|/r² = (9.0 × 10⁹ × 2 × 10⁻⁹)/(0.200)²
**= 450 N/C**

E₂ = k|q₂|/r² = (9.0 × 10⁹ × 5 × 10⁻⁹)/(0.60)²
**= 125 N/C**

**E = E₁ + E₂ = 450 + 125 = 575 N/C**

The arithmetic: 9.0 × 10⁹ × 2 × 10⁻⁹ = 18, and 18/0.0400 = **450**. Then 9.0 × 10⁹ × 5 × 10⁻⁹ = 45, and 45/0.360 = **125**. The distance in the second one is **0.800 − 0.200 = 0.600 m**, which she writes as 0.60 — the separation from the field point to q₂, **not** 0.800 m. Using 0.800 gives 70.3 N/C and is the single commonest way to lose this problem. **E = 575 N/C in the +x direction.**

**⚠ The deck never answers the second sentence of its own question** — the force on an electron placed at 0.200 m. Finish it with **F = qE**:

|F| = |q|E = (1.60 × 10⁻¹⁹ C)(575 N/C) = **9.2 × 10⁻¹⁷ N**

and because the electron's charge is **negative**, the force is **opposite to E**, so **9.2 × 10⁻¹⁷ N in the −x direction**. The field points +x; the electron is pushed −x. Nothing about E changed — only the sign of q.

### Her SUMMARY slide (23)

> "The total force on a charge is the vector sum of the forces exerted by all the other charges on it. This means that the forces from all the other charges are added together, taking into account both the magnitude and direction of each force. The resulting force is the total force on the charge.
> **ΣF = F₁ + F₂ + ⋯ F_N**  (each F carrying a vector arrow)
> The electric field is a vector quantity that describes the force per unit charge on a test charge at any point. The electric field produced by a point charge is directed radially away from the charge if the charge is positive, and radially towards the charge if the charge is negative.
> **|E| = |F|/q = kQ/r²**"

Two formulas, and that is the deck's entire inventory besides Coulomb's law itself.

## Aside — what the week's summary sheet mentions but the lecturer never teaches

The one-page MIVA week-2 summary sheet lists, in a bullet list only, "Lorentz force: a magnetic force that acts on a moving charged particle in a magnetic field" and "Electric potential: a scalar quantity that describes the electric field at a point". **Neither appears anywhere in the lecture deck** — no definition, no formula, no worked example, no diagram. Know the two sentences above in case a one-mark definition question appears; do not spend revision time on q(v × B), on V = kQ/r, or on potential-energy problems for this week. Everything the lecturer will set comes from the five worked problems above.

## What you should be able to say out loud

- Coulomb's law in her words, with **|q₁q₂|**, the 1/r², and **k = 9.0 × 10⁹ N m²/C²** — and why the bars mean the law gives a magnitude only.
- Why superposition has to be stated separately: **Coulomb's law only describes two point charges.**
- The superposition principle in her words, with **"vector sum"** emphasised, and the practical consequence: **on a line, same direction ⇒ add, opposite directions ⇒ subtract, and the direction of the answer is that of the bigger arrow.**
- That **Fᵢⱼ** is the force **i exerts on j**, so the second subscript names whose free-body diagram you are drawing.
- **E = F/q₀**, in **N/C**, a **vector**, defined with a **positive** test charge — and **|E| = kQ/r²**, the same law with one test charge divided out.
- **Radially outward from +Q, radially inward toward −Q**, and that the magnitude formula is the same for both.
- The three line rules: start on +, end on − or at infinity; **closer spacing = stronger force**; the lines show which way a **positive** charge would move, and a negative charge moves the opposite way.
- **F = qE**: for an electron the force is **antiparallel to E**.
- All five worked answers from memory: **16 × 10⁻¹¹ N and 4 × 10⁻¹¹ N (net 12 × 10⁻¹¹ N)**; **0.0194 N, 0.0152 N, net −0.0042 N (i.e. 4.2 × 10⁻³ N in −x)**; **1250 N/C**; **1100 N/C inward**; **450 + 125 = 575 N/C in +x**, and the electron force **9.2 × 10⁻¹⁷ N in −x**.

## Commonly confused

- **Substituting signed charges into F = k|q₁q₂|/r².** She never does. Put in **magnitudes**, get a positive number, then read the direction off the sketch. Feeding in −18 × 10⁻⁶ produces a spurious minus that has nothing to do with the direction of anything.
- **"Negative charges repel positive"** — no. Unlike signs **attract**. In Example 1 the electron is pulled toward *both* protons; the forces oppose because the protons are on **opposite sides**, not because the signs differ.
- **Adding when you should subtract.** Two forces on the same charge add only if their **arrows** agree. Example 1 subtracts (16 − 4); Example 2 part f adds (0.0194 + 0.0720). Same principle, different pictures.
- **Losing the direction half of the answer.** Both parts of Example 2 say "magnitude **and direction**". A bare "0.0042 N" is half a mark. Say **−x**, or "to the left, away from Q₂ and Q₃".
- **Misreading her minus sign.** In "ΣF = 0.0152 − 0.0194 = −0.0042 N" the minus in the *answer* is a **direction** (−x), not a negative force magnitude. Forces do not have negative magnitudes.
- **Using the wrong r in field superposition.** For q₂ at x = 0.800 m and the field point at x = 0.200 m, r = **0.600 m**, not 0.800 m. The distance is always **source to field point**.
- **Mixing up E and F.** If the unit is **N/C** it is a field; if it is **N** it is a force. E = F/q₀ divides by a charge; F = qE multiplies by one. Answering 1250 N to solved problem 1 is a unit error worth as much as an arithmetic one.
- **Thinking E depends on what you put there.** The test charge cancels: |E| = kQ/r² contains only the **source** charge and the distance. The field is there whether or not anything is placed in it.
- **Direction of the force on a negative charge.** F = qE, so an electron accelerates **opposite** to E. Both solved problem 3 and the "a negative charge would move the opposite way" rule on slide 16 turn on this.
- **k versus ε₀.** k = 1/4πε₀ = **9.0 × 10⁹ N m²/C²** in this deck. ε₀ appears only inside the definition of k; she never uses its numerical value. Match her 9.0 × 10⁹ and her answers will match yours (with 8.99 × 10⁹ you get 574 N/C where she has 575).
- **Inverse square, not inverse.** Double the separation and the force falls to **a quarter**, as 16 × 10⁻¹¹ → 4 × 10⁻¹¹ shows. Triple it and it falls to a ninth.
- **The bigger charge does not automatically win.** On Q₁, the 24 μC at 16 m loses to the 12 μC at 10 m, because distance enters squared.
- **Slide 14's title says "POSITIVE CHARGE, −Q".** It is a misprint for **negative**. The field around −Q is radially **inward**.
