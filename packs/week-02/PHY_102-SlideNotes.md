# PHY_102 Week 2 — what the slide images contained that the extracted text had lost

Deck: `Superposition-of-force-and-Electric-Field-PDF`, **24 pages**, lecturer **Dr. Sharafadeen Adeniji, PhD Theoretical and Applied Physics**. Course banner throughout: *General physics II*. The MIVA week sheet gives the week's topic as "Coulomb's Law & Superposition Principle".

**Which pages extracted as text:** 1 (title), 2 (learning objectives), 4 (superposition of forces), 5 (Example 1 problem statement), 8 (Example 2 problem statement), 9 (heading plus the words of part a — the free-body diagrams themselves are pictures and were lost), 12 (field-line rules), 15, 16, 17 (field-line rules and captions), 21 (the third solved problem's statement).

**Which pages are images:** **13 of the 24** — pages **3, 6, 7, 10, 11, 13, 14, 18, 19, 20, 22, 23, 24**. From these, `pdftotext` recovered only the headings: INTRODUCTION, SUPERPOSITION OF FORCES: EXAMPLE 1 (×2), Solution 2b (plus a stray "N"), ELECTRIC FIELD, ELECTRIC FIELD AROUND A POSITIVE CHARGE +Q, ELECTRIC FIELD AROUND A POSITIVE CHARGE −Q, ELECTRIC FIELD, Solved problems, Solved problem, Solved problem, SUMMARY, Thank You. **Every formula, every diagram, every number and all five worked solutions were inside those pictures.** Everything below is what they contained.

## 1. Statements and rules that were invisible

**Slide 3 — INTRODUCTION, the whole of Coulomb's law, verbatim.**
> "Coulomb's law states the magnitude of the electric force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them.
> **F = k|q₁q₂|/r² = (1/4πε₀)·|q₁q₂|/r²**
> **k = 1/4πε₀ = 9.0 × 10⁹ N m²/C²**"

The slide also carries a hand-drawn panel: two spheres labelled **q₁** (blue) and **q₂** (red) separated by **r**, with an arrow **Fₑ** on each pointing **outward, away from the other** — the repulsive, equal-and-opposite pair — and the working form written between them as **Fₑ = kq₁q₂/r²**.

**Slide 11 — ELECTRIC FIELD, the definition, verbatim.**
> "The electric field at a point is the force a unit charge (q = +1 C) would experience if placed there.
> **E = F/q₀**  (both E and F drawn with vector arrows)
> The SI unit of E is N/C
> It is a vector and its direction can be represented by electric field lines"

The right-hand picture is a **+q / −q dipole with five dashed closed curves labelled V₁ … V₅** around the two charges and solid field lines running from + to −.

**Slide 13 — ELECTRIC FIELD AROUND A POSITIVE CHARGE, +Q, verbatim.**
> "A test charge, +q at separation r experiences an outward force **|F| = kQq/r²**
> But
> **|E| = |F|/q = kQ/r²**
> Direction of electric field is **radially outward**" (the last two words printed in red)

Diagram: a red **+** sphere with twelve arrows radiating outward, and beside it a small blue test charge **+q** being pushed away from a second **+** charge along the line joining them.

**Slide 14 — ELECTRIC FIELD AROUND A [NEGATIVE] CHARGE, −Q, verbatim.**
> "The magnitude of electric field at any point is still given as:
> **|E| = |F|/q = kQ/r²**
> Direction of electric field is **radially inward**" (last two words in red)

Diagram: a blue **−** sphere with twelve arrows pointing **inward** toward it.

**Slide 18 — ELECTRIC FIELD, the parallel-plate picture.** Caption "Electric field lines between two plates". A beige plate on top marked with a row of **+** signs, a blue plate below marked with a row of **−** signs, and about eighteen **straight, evenly spaced, parallel arrows** running from the top plate down to the bottom plate, labelled with a vector **E** to the right. Even spacing is the visual claim that the field between the plates is uniform. **No formula is given for it** — E = V/d does not appear in this deck.

**Slide 23 — the SUMMARY slide, verbatim.**
> "The total force on a charge is the vector sum of the forces exerted by all the other charges on it. This means that the forces from all the other charges are added together, taking into account both the magnitude and direction of each force. The resulting force is the total force on the charge.
> **ΣF = F₁ + F₂ + ⋯ F_N**  (each F with a vector arrow)
> The electric field is a vector quantity that describes the force per unit charge on a test charge at any point. The electric field produced by a point charge is directed radially away from the charge if the charge is positive, and radially towards the charge if the charge is negative.
> **|E| = |F|/q = kQ/r²**"

Those two formulas plus Coulomb's law on slide 3 are the **entire** formula inventory of the deck. There is nothing else.

## 2. Worked examples that were invisible (five of them)

**Superposition, Example 1 (slides 6 and 7).** Statement from slide 5 (which did extract): *"Two protons are 3.6 nm apart. What is the total force on an electron located on the line between them, 1.2 nm from one of the protons? (elementary charge e = 1.6 × 10⁻¹⁹ C)"*

The picture, present on both slides 6 and 7: three charges on a dashed line — **q = +e** (large red, left), **q = −e** (small blue, centre), **q = +e** (large red, right) — with the distances hand-labelled **r₁ = 1.2 nm = r** and **r₂ = 2.4 nm = 2r**, and below the electron **two arrows, one pointing left and one pointing right**. (Slide 7 shows only this picture. Slide 6 shows it together with the working, and is the one page of the deck with no "General physics II" header bar.)

The working, in a brown box on slide 6:

|F₁₃| = k·|q₁q₃|/r²
= 9.0 × 10⁹ · (1.6 × 10⁻¹⁹ × 1.6 × 10⁻¹⁹)/(1.2 × 10⁻⁹)²
**|F₁₃| = 16 × 10⁻¹¹ N**

|F₂₃| = k·|q₂q₃|/r²
= 9.0 × 10⁹ · (1.6 × 10⁻¹⁹ × 1.6 × 10⁻¹⁹)/(2.4 × 10⁻⁹)²
**|F₂₃| = 4 × 10⁻¹¹ N**

(Intermediate arithmetic, which she compresses: numerator 9.0 × 10⁹ × 2.56 × 10⁻³⁸ = 2.304 × 10⁻²⁸ in both; denominators 1.44 × 10⁻¹⁸ and 5.76 × 10⁻¹⁸.)

**The deck stops there. The total force — what the question actually asks for — is never stated.** It is 16 × 10⁻¹¹ − 4 × 10⁻¹¹ = **12 × 10⁻¹¹ N = 1.2 × 10⁻¹⁰ N toward the nearer proton**, the two attractions being oppositely directed.

**Superposition, Example 2 part b, "Solution 2b" (slide 10).** Statement from slide 8 (extracted): Q₁ = −18 μC at x₁ = −9 m, Q₂ = −12 μC at x₂ = 1 m, Q₃ = +24 μC at x₃ = 7 m.

Diagram at the top of the slide: a black dot labelled **Q₁** with a **blue arrow pointing left labelled F₂₁** and a **brown arrow pointing right labelled F₃₁**.

Working, in a brown box:

F₂₁ = k·|q₂q₁|/r² = 9.0 × 10⁹ · (18 × 10⁻⁶ × 12 × 10⁻⁶)/(10)²
**= 0.0194 N**

F₃₁ = k·|q₃q₁|/r² = 9.0 × 10⁹ · (24 × 10⁻⁶ × 18 × 10⁻⁶)/(16)²
**= 0.0152 N**

**ΣF = F₃₁ − F₂₁ = 0.0152 − 0.0194 = −0.0042 N**

The separations 10 m and 16 m are used without being derived on the slide. The negative result means **4.2 × 10⁻³ N in the −x direction**.

**Example 2 part f is set on slide 8 and never solved anywhere in the deck.** Worked out: both forces on Q₂ point +x (Q₁ repels it from the left, Q₃ attracts it from the right), F₁₂ = 9.0 × 10⁹(18 × 10⁻⁶)(12 × 10⁻⁶)/10² = 0.0194 N and F₃₂ = 9.0 × 10⁹(24 × 10⁻⁶)(12 × 10⁻⁶)/6² = 2.592/36 = 0.0720 N, so **ΣF = 0.0914 N in the +x direction**.

**Solved problem 1 (slide 19), verbatim.**
> "1. A 2.40 μC charge is subject to a 3.00 mN force due to an electric field. What is the magnitude of the electric field at the location of the charge
> Solution
> Given: q = 2.40 μC = 2.40 × 10⁻⁶ C, F = 3.00 mN = 3.00 × 10⁻³ N
> **E = F/q₀ = (3 × 10⁻³)/(2.4 × 10⁻⁶) = 1.25 × 10³ N/C = 1250 N/C**"

**Solved problem 2 (slide 20), verbatim.**
> "2. What is the direction and magnitude of the electric field due to a −6.8 μC point charge at a distance of 7.4 m?
> Given that: Q = −6.8 μC = −6.8 × 10⁻⁶ C and d = 7.4 m
> Using:
> **|E| = |F|/q = kQ/r² = 9.0 × 10⁹ (6.8 × 10⁻⁶)/(7.4²) = 1.1 × 10³ N/C = 1100 N/C**"

(6.12 × 10⁴/54.76 = 1117.6, rounded to 1.1 × 10³.) Note she declares Q as −6.8 × 10⁻⁶ C and then substitutes the **magnitude** 6.8 × 10⁻⁶. **The direction, which the question explicitly asks for, is never given** — it is radially inward, toward the charge.

**Solved problem 3 (slide 22).** Statement from slide 21 (extracted): *"A +2.00 nC point charge is at the origin, and a second −5.00 nC point charge is on the x-axis at x = 0.800 m. Find the electric field magnitude and direction at 0.200 m. Find the net electric force that the two charges would exert on an electron placed at 0.200 m."*

Hand-drawn diagram: **+2.00 nC** labelled q₁ at coordinate **0**, a small blue dot at **0.200 m**, **−5.00 nC** labelled q₂ at **0.800 m**, and **two arrows, E₁ and E₂, both drawn pointing to the right** from the field point toward q₂.

Working:

E₁ = k|q₁|/r² = (9.0 × 10⁹ × 2 × 10⁻⁹)/(0.200)²
**= 450 N/C**

E₂ = k|q₂|/r² = (9.0 × 10⁹ × 5 × 10⁻⁹)/(0.60)²
**= 125 N/C**

**E = E₁ + E₂ = 450 + 125 = 575 N/C**

**The second half of the question — the force on an electron at 0.200 m — is never answered.** It is F = |q|E = 1.6 × 10⁻¹⁹ × 575 = **9.2 × 10⁻¹⁷ N, directed along −x**, opposite to E because the electron is negative.

## 3. Notation and habits the extraction lost

- **k = 9.0 × 10⁹ N m²/C²**, not 8.99 × 10⁹. Every number on the deck follows from the rounded value. Using 8.99 × 10⁹ gives 574 N/C where she has 575, and 0.01942 where she has 0.0194 — small, but it means a student checking against her answers will think they have erred.
- **Absolute-value bars on the charges**: F = k|q₁q₂|/r², and |q₁q₃|, |q₂q₃|, |q₂q₁|, |q₃q₁|, |q₁|, |q₂| in the worked lines. She never once substitutes a signed charge.
- **Subscript order Fᵢⱼ = the force i exerts on j.** Example 1 has the electron as q₃, so its two forces are F₁₃ and F₂₃; Solution 2b has Q₁ under study, so its two forces are F₂₁ and F₃₁. The **second** subscript names the body whose free-body diagram is being drawn.
- **Distances renamed in multiples**: r₁ = 1.2 nm = **r**, r₂ = 2.4 nm = **2r**, written by hand on the Example 1 diagram. The whole example is engineered so the second force is exactly a quarter of the first.
- **Directions carried by arrows on a picture, never by algebraic signs in the formula.** The only minus sign in the entire deck's arithmetic is the one in ΣF = 0.0152 − 0.0194, and it arises from choosing +x as positive when combining two oppositely drawn arrows.
- **Vector arrows over E and F** on slides 11 and 23; plain italic F and E for magnitudes elsewhere.
- **Everything is collinear.** All three charges lie on the x-axis in Example 2; the electron lies on the line between the protons in Example 1; both point charges and the field point lie on the x-axis in solved problem 3. **The deck contains no two-dimensional problem and never resolves a force or a field into components.**

## 4. Errors and defects on the slides

1. **Slide 14 heading, substantive.** Printed "**ELECTRIC FIELD AROUND A POSITIVE CHARGE, − Q**". It should read **NEGATIVE** charge, −Q. The body text ("still given as |E| = kQ/r² … Direction of electric field is radially inward") and the diagram (arrows pointing in toward a blue minus sphere) are both correct. Only the word POSITIVE is wrong, and it has been named rather than silently fixed in the new material, because it is what appears in the exam-facing slides.
2. **Slide 8, Example 2 part labels.** The parts are lettered **a, b, f**. There are no parts c, d or e; "f" is a misprint for **c**. Worth knowing so a student does not go looking for four missing sub-questions.
3. **Slide 8 part f is never answered.** The deck sets "Find the magnitude and direction of the net electric force on charge Q₂" and provides only Solution 2b. The answer is supplied above and in `summary.md`.
4. **Example 1 has no final answer.** The slide computes the two magnitudes and stops; "the total force on an electron", the actual question, is never stated.
5. **Solved problem 2 gives no direction** although the question asks for "the direction and magnitude".
6. **Solved problem 3 answers only its first sentence.** The force on the electron is never computed.
7. **Notation, slides 13, 14, 20 and 23.** |E| is written as k**Q**/r² where it should be k**|Q|**/r², since the left-hand side is a magnitude. She behaves correctly in practice — on slide 20 she substitutes 6.8 × 10⁻⁶ after declaring Q = −6.8 × 10⁻⁶ C — but the printed formula would give a negative "magnitude" if read literally.
8. **Slide 12, dropped word.** "the electric field cannot exert a net force **[on]** the charge that produces it". The intended meaning is standard and is taught as such.
9. **Slide 22, inconsistent significant figures.** The data are given to three figures (0.800 m, 0.200 m, 2.00 nC, 5.00 nC) but the second separation is written (0.60)² rather than (0.600)². The value used is right; only the presentation is loose.
10. **Slide 4, grammar.** "Coulomb's law only describe the interaction of two point charges" — reproduced as printed above, since the sentence is quotable and worth learning.

## 5. Was the old material wrong, incomplete, or basically fine?

**It was largely correct physics and it is still being replaced wholesale, because a large part of it is not this week's syllabus and none of it is this lecturer's working.**

**a) Roughly half the old page taught material the deck never touches.** The old summary devoted named definitions, formula-table rows and two full worked examples to the **Lorentz force** F = q(E + v × B) — with a fabricated proton-in-crossed-fields calculation — and to **electric potential** V = kQ/r, potential superposition, U = qV, and a worked potential-superposition example, plus a "zero field vs zero potential" section. **The lecturer's deck contains no v, no B, no V, no J, no potential and no energy of any kind.** Those two topics appear only as two one-line bullets on the MIVA week-summary sheet, which defines neither and works neither. In the rebuild they are confined to a short, explicitly labelled aside.

**b) None of the lecturer's five worked solutions appeared.** The old page's worked examples were reconstructions: it took her *problem statements* for Example 1, Example 2 and the two-charge field problem and then solved them independently with **k = 8.99 × 10⁹**, arriving at 1.199 × 10⁻¹⁰ N, 1.942 × 10⁻², 1.517 × 10⁻², 9.13 × 10⁻² and 574 N/C where her slides read **16 × 10⁻¹¹ and 4 × 10⁻¹¹, 0.0194, 0.0152, and 450 + 125 = 575**. Her intermediate lines, her |F₁₃|/|F₂₃| labelling, her r/2r device, her ΣF = F₃₁ − F₂₁ sign convention and her free-body sketch were all absent. **Her solved problems 1 and 2 — the 2.40 μC/3.00 mN problem giving 1250 N/C and the −6.8 μC at 7.4 m problem giving 1100 N/C — did not appear at all**, in any form; they were entirely lost with the images, and they are the two simplest and most likely exam questions in the deck.

**c) It invented content that reads as taught but is not.** A twelve-row formula table (including V = kQ/r, Vnet = ΣkQᵢ/rᵢ, U = qV, F = q(E + v × B), ε₀ = 8.85 × 10⁻¹² C²/N m²), a definitions list including "electric potential" and "Lorentz force", and eight "field-line rules" of which the deck states three. It also asserted **k = 8.99 × 10⁹ N m²/C²** as *the* constant; the deck says **9.0 × 10⁹**, and a student who reproduces 8.99 will not match any answer the lecturer marks against.

**d) It missed everything the deck gets wrong or leaves unfinished.** No mention of the slide-14 heading misprint, the a/b/f lettering, the unanswered Example 1, the unanswered part f, the missing direction in solved problem 2, or the unanswered force in solved problem 3. Those six items are precisely where a student sitting with the slides alone will get stuck.

**e) What it got right and is preserved.** The physics of collinear superposition, the insistence on magnitudes-then-directions, E versus V as vector versus scalar (kept only inside the aside), and the electron-force sign rule are all sound, and the corresponding material survives in the rebuild — but stated in her notation, against her numbers, and confined to her syllabus.

The old page carried an honest footnote saying that the worked numbers were the author's own and not copied from the slides. That footnote was accurate. This rebuild removes the need for it: every number above is off the slide.
