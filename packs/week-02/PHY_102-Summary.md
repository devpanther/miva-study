# PHY_102 — Week 2

*General Physics II · Week 2 (14–20 Sep 2026)*

*Source note: the extracted week-2 text is **thin**. The slide deck ("Superposition of Forces & Electric Field", Dr Sharafadeen Adeniji) gives learning objectives, the wording of the principles, and the **statements** of three problems — but every worked solution, every field-line diagram and the summary slide are images that the extractor dropped. The problems below are the lecturer's own problem statements, worked out here in full by me using standard method; the field-line rules and the Lorentz-force and potential material are the standard content for the topics the slide titles and the week summary name. Numbers in the worked examples are mine, not copied from the slides.*

## Most likely to be examined

1. **State Coulomb's law** in words and symbols, with the condition that it applies to **point charges at rest** (or uniform spheres, measuring r centre-to-centre).
2. **State the superposition principle** and use it: net force on a charge = **vector** sum of the individual pairwise Coulomb forces, each computed as if the other charges were absent.
3. **Collinear superposition** — three charges on a line (the lecturer's Example 2: −18 µC at x = −9 m, −12 µC at x = 1 m, +24 µC at x = 7 m). Find magnitude **and direction** of the net force on a named charge.
4. **Electron between two protons** (Example 1): equal-magnitude sources at unequal distances, forces opposing, net = difference.
5. **Electric field of a point charge**, E = kQ/r², and **E from F**: E = F/q₀ with q₀ a vanishingly small positive test charge; then F = qE on any charge placed there, with the force **antiparallel** to E for a negative charge.
6. **Field superposition** (the solved problem: +2.00 nC at origin, −5.00 nC at x = 0.800 m; find **E** at x = 0.200 m, then the force on an electron there).
7. **Electric-field-line rules**: start on +, end on − (or at infinity); never cross; density ∝ field strength; tangent gives direction of force on a **positive** charge.
8. **Lorentz force** F = q(E + v × B): the magnetic part needs motion, is ⊥ to v, and does **no work**. **Electric potential** V = kQ/r is a **scalar** — add algebraically with signs.

## Definitions

- **Point charge** — a charged body whose size is negligible compared with the distances involved.
- **Coulomb's law** — the electrostatic force between two point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of their separation; it acts along the line joining them (repulsive for like signs, attractive for unlike).
- **Superposition principle (forces)** — when several charges act on a charge simultaneously, the total force on it is the **vector sum** of the forces each would exert alone; the presence of a third charge does not alter the force between the other two.
- **Superposition principle (field)** — the electric field at a point due to several charges is the vector sum of the fields due to each individual charge.
- **Electric field E** — force per unit positive charge at a point: a **vector**, a property of the source charges alone, existing whether or not a test charge is there. Unit N/C (= V/m).
- **Electric field line** — a curve whose tangent at every point gives the direction of **E** there.
- **Electric potential V** — a **scalar**: the electric potential energy per unit charge at a point; unit volt (V = J/C).
- **Lorentz force** — the total force on a charge q moving with velocity **v** through fields **E** and **B**: F = q**E** + q(**v** × **B**). The second term is the magnetic force; it vanishes when v = 0 or when **v** ∥ **B**.

## Formulas

| Quantity | Formula | Symbols |
|---|---|---|
| Coulomb force (magnitude) | F = k·\|q₁q₂\| / r² | k = 1/4πε₀ = 8.99 × 10⁹ N·m²/C²; ε₀ = 8.85 × 10⁻¹² C²/N·m²; q in C; r in m |
| Superposition of forces | **F**net = **F**₁ + **F**₂ + … (vector) | each **F**ᵢ from Coulomb's law, direction from a sketch |
| Field of a point charge | E = k\|Q\|/r² | away from +Q, toward −Q |
| Field from force | **E** = **F**/q₀ | q₀ = small positive test charge |
| Force from field | **F** = q**E** | q negative ⇒ **F** opposite **E** |
| Field superposition | **E**net = **E**₁ + **E**₂ + … (vector) | resolve into components first if not collinear |
| Potential of a point charge | V = kQ/r | **signed** Q; scalar |
| Potential superposition | Vnet = ΣkQᵢ/rᵢ | algebraic sum, no directions |
| Potential energy of a charge | U = qV | J |
| Lorentz force | **F** = q(**E** + **v** × **B**) | magnetic magnitude qvB sin θ |
| Elementary charge | e = 1.60 × 10⁻¹⁹ C | electron q = −e |

## Worked examples

**A. Superposition on a line, equal sources (lecturer's Example 1).** Two protons are 3.6 nm apart; an electron lies on the line between them, 1.2 nm from one proton. Find the net force on the electron.

- Distances: r₁ = 1.2 nm = 1.2 × 10⁻⁹ m; r₂ = 3.6 − 1.2 = 2.4 nm = 2.4 × 10⁻⁹ m.
- The electron is attracted to **both** protons, so the two forces point **opposite** ways along the line. Net = difference.
- k·e² = (8.99 × 10⁹)(1.60 × 10⁻¹⁹)² = (8.99 × 10⁹)(2.56 × 10⁻³⁸) = 2.301 × 10⁻²⁸ N·m².
- F₁ = 2.301 × 10⁻²⁸ / (1.2 × 10⁻⁹)² = 2.301 × 10⁻²⁸ / 1.44 × 10⁻¹⁸ = 1.598 × 10⁻¹⁰ N (toward near proton).
- F₂ = 2.301 × 10⁻²⁸ / (2.4 × 10⁻⁹)² = 2.301 × 10⁻²⁸ / 5.76 × 10⁻¹⁸ = 3.996 × 10⁻¹¹ N (toward far proton).
- Fnet = 1.598 × 10⁻¹⁰ − 0.3996 × 10⁻¹⁰ = 1.199 × 10⁻¹⁰ N.
- **Fnet ≈ 1.20 × 10⁻¹⁰ N, directed toward the nearer proton.**

**B. Collinear superposition, mixed signs (lecturer's Example 2b, 2f).** Q₁ = −18 µC at x₁ = −9 m, Q₂ = −12 µC at x₂ = +1 m, Q₃ = +24 µC at x₃ = +7 m.

Net force on Q₁ (r₁₂ = 10 m, r₁₃ = 16 m):
- F₁₂ = (8.99 × 10⁹)(18 × 10⁻⁶)(12 × 10⁻⁶)/10² = 1.9418/100 = 1.942 × 10⁻² N — like signs, **repulsion**, so along −x.
- F₁₃ = (8.99 × 10⁹)(18 × 10⁻⁶)(24 × 10⁻⁶)/16² = 3.8837/256 = 1.517 × 10⁻² N — unlike signs, **attraction**, so along +x.
- Fnet = −1.942 × 10⁻² + 1.517 × 10⁻² = −4.25 × 10⁻³ N. **≈ 4.25 × 10⁻³ N in the −x direction.**

Net force on Q₂ (r₂₁ = 10 m, r₂₃ = 6 m):
- F₂₁ = 1.942 × 10⁻² N — repulsion from Q₁ pushes Q₂ along **+x**.
- F₂₃ = (8.99 × 10⁹)(12 × 10⁻⁶)(24 × 10⁻⁶)/6² = 2.5891/36 = 7.192 × 10⁻² N — attraction to Q₃, also along **+x**.
- Both same way ⇒ add: Fnet = 1.942 × 10⁻² + 7.192 × 10⁻² = **9.13 × 10⁻² N in the +x direction.**

**C. Field superposition, then force on a charge (lecturer's solved problem).** +2.00 nC at the origin, −5.00 nC at x = 0.800 m. Find **E** at x = 0.200 m and the force there on an electron.

- From the +2.00 nC (r = 0.200 m): E₁ = (8.99 × 10⁹)(2.00 × 10⁻⁹)/(0.200)² = 17.98/0.0400 = 449.5 N/C, pointing **away** from it ⇒ **+x**.
- From the −5.00 nC (r = 0.800 − 0.200 = 0.600 m): E₂ = (8.99 × 10⁹)(5.00 × 10⁻⁹)/(0.600)² = 44.95/0.360 = 124.9 N/C, pointing **toward** it ⇒ also **+x**.
- Same direction ⇒ add: E = 449.5 + 124.9 = 574.4 N/C. **E ≈ 574 N/C in the +x direction.**
- Force on an electron: F = |q|E = (1.60 × 10⁻¹⁹)(574.4) = 9.19 × 10⁻¹⁷ N; charge is negative ⇒ **F ≈ 9.19 × 10⁻¹⁷ N in the −x direction.**

**D. Potential superposition (same geometry).** V at x = 0.200 m:
- V₁ = (8.99 × 10⁹)(+2.00 × 10⁻⁹)/0.200 = +89.9 V; V₂ = (8.99 × 10⁹)(−5.00 × 10⁻⁹)/0.600 = −74.9 V.
- V = 89.9 − 74.9 = **+15.0 V** (scalar sum — note the fields added while the potentials nearly cancelled).

**E. Lorentz force.** A proton (q = +1.60 × 10⁻¹⁹ C) moves at v = 2.0 × 10⁵ m/s along +x through B = 0.50 T along +y and E = 300 N/C along +z.
- Magnetic: F_B = qvB sin 90° = (1.60 × 10⁻¹⁹)(2.0 × 10⁵)(0.50) = 1.60 × 10⁻¹⁴ N; direction x̂ × ŷ = ẑ ⇒ **+z**.
- Electric: F_E = qE = (1.60 × 10⁻¹⁹)(300) = 4.80 × 10⁻¹⁷ N, along **+z**.
- Total: F = 1.600 × 10⁻¹⁴ + 0.0048 × 10⁻¹⁴ = **1.605 × 10⁻¹⁴ N along +z** (the magnetic part dominates by ~330×).

## Commonly confused

- **Electric field vs electric force** — E is per unit charge and exists with no charge there; F needs a charge to act on. *Test:* if the answer's unit is N/C it is a field, if N it is a force.
- **Field (vector) vs potential (scalar)** — *Test:* if you had to draw arrows and resolve components, it was E; if you only added signed numbers, it was V.
- **kQ/r² vs kQ/r** — *Test:* units. N·m²/C² · C / m² = N/C (field); ÷ m only once gives N·m/C = J/C = volt (potential).
- **Attraction/repulsion vs the sign of x** — *Test:* never substitute signed charges into F = k|q₁q₂|/r². Get the magnitude from magnitudes, then set the direction from a free-body sketch.
- **"Forces oppose so subtract" vs "forces agree so add"** — *Test:* draw the arrow for each pairwise force **on the charge you are solving for**; two attractions to opposite sides subtract, an attraction one way plus a repulsion the same way add.
- **Zero field vs zero potential** — midway between two equal **positive** charges E = 0 but V ≠ 0; midway between equal **opposite** charges V = 0 but E ≠ 0. *Test:* ask whether the two contributions are opposite arrows (E cancels) or opposite signs (V cancels).
- **Electric force vs magnetic force in the Lorentz law** — *Test:* set v = 0. Whatever force survives is electric.
- **Coulomb's law vs Newton's law of gravitation** — same 1/r² form, but charge comes in two signs so the Coulomb force can repel; gravity only attracts.
