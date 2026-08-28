# PHY_102 — Week 2 Summary

*General Physics II · Week 2 (14–20 Sep 2026) · Topic: Coulomb's Law & the Superposition Principle*

## The 8 most examinable things this week

1. **Coulomb's law, stated in words**: the electrostatic force between two point charges is *directly proportional to the product of the magnitudes of the charges* and *inversely proportional to the square of the distance between them*, directed along the line joining them.
2. **F = k|q₁q₂|/r²**, with **k = 8.99×10⁹ N·m²/C²** (use 9.0×10⁹ if told to), **k = 1/(4πε₀)**, **ε₀ = 8.85×10⁻¹² C²/(N·m²)**.
3. **The vector form** and the sign rule: keep the *signed* product and the force comes out with its own direction; or use magnitudes and decide attract/repel by inspection. Do one or the other, never both.
4. **Superposition**: the net force on a charge is the **vector sum** of the individual pairwise forces. Each pair obeys Coulomb's law **as if the other charges were absent** — there is no shielding.
5. **Collinear superposition**: put everything on one axis, give each force a **+ or −**, then add algebraically. Two guaranteed marks are lost by adding magnitudes.
6. **2-D superposition**: resolve into components, ΣFₓ and ΣF_y separately, then F = √(ΣFₓ² + ΣF_y²) and θ = tan⁻¹(ΣF_y/ΣFₓ).
7. **Null points / equilibrium positions**: set the two magnitudes equal and solve. **Like charges → the null point lies between them, nearer the smaller charge. Unlike charges → outside the pair, beyond the smaller charge.**
8. **Electric field**: **E = F/q₀** (N/C) and **E = k|q|/r²** for a point charge; then **F = qE**, with the force on a negative charge *opposite* to E.

## Formulas, definitions and constants (state these exactly)

**Coulomb's law (magnitude)**
F = k|q₁||q₂| / r² , k = 8.99×10⁹ N·m²/C² = 1/(4πε₀), ε₀ = 8.85×10⁻¹² C²/(N·m²)

**Coulomb's law (vector form)**
**F**₁₂ = k q₁q₂ / r₁₂² · **r̂**₁₂ — the force *on* q₂ *by* q₁, where **r̂**₁₂ is the unit vector pointing **from q₁ towards q₂** and r₁₂ is their separation. With the charges entered *with their signs*: a **positive product** gives a force along **r̂** (pushed away → repulsion); a **negative product** gives a force along −**r̂** (pulled back → attraction). Newton's third law: **F**₂₁ = −**F**₁₂ — equal magnitude, opposite direction, *even when the charges are wildly unequal*.

**Validity**: point charges (or uniform spheres, using centre-to-centre r), at rest, in vacuum/air. k is the vacuum value; in a medium of permittivity ε the force is smaller by a factor ε/ε₀.

**Superposition principle**
When several charges act simultaneously on a charge q, the total force on q is the vector sum of the forces each other charge would exert on it *individually*:
**F**_net = **F**₁ + **F**₂ + **F**₃ + … = Σ **F**ᵢ
The same statement for fields: **E**_net = Σ **E**ᵢ. Superposition is what extends a two-body law to any number of charges.

**Electric field (definition)**
**E** = **F**/q₀ — the force per unit positive test charge placed at that point. Units **N/C**. q₀ is taken vanishingly small so that it does not disturb the source charges. **E** is a property of the *source* charges and of the *point*; it exists whether or not a test charge sits there, and does **not** depend on q₀.

**Field of a point charge**
E = k|q|/r² , directed **radially outward from a positive charge and radially inward toward a negative charge**.

**Force on a charge in a field**
**F** = q**E**. Positive q → force along **E**; negative q → force opposite to **E**, same magnitude |q|E.

**Field lines**: start on positive charges, end on negative charges (or run to infinity for an isolated charge); their direction is the direction a *positive* charge would be pushed; the **more closely spaced the lines, the stronger the field**. Lines never cross. **A charge feels no net force from its own field.**

**Also named this week (one line each)**: the **Lorentz force**, **F** = q(**E** + **v**×**B**) — the magnetic part acts only on a *moving* charge; **electric potential**, a **scalar** quantity describing the field at a point (developed later).

## Worked example 1 — two-charge Coulomb force

q₁ = +4.0 μC and q₂ = −6.0 μC, separated by 0.20 m. Find the force on each.

1. Magnitudes in SI: 4.0×10⁻⁶ C, 6.0×10⁻⁶ C. Product = 2.4×10⁻¹¹ C².
2. r² = (0.20)² = 0.040 m².
3. F = (8.99×10⁹)(2.4×10⁻¹¹)/0.040 = 0.2158/0.040 = **5.4 N**.
4. Signs: unlike charges → **attractive**, along the line joining them. Each charge feels 5.4 N pulling it toward the other (third law), *not* 5.4 N and something smaller.

## Worked example 2 — three-charge collinear superposition

Two protons are 3.6 nm apart. Find the total force on an electron on the line between them, 1.2 nm from one proton. (e = 1.6×10⁻¹⁹ C)

1. Geometry: proton A at x = 0, proton B at x = 3.6 nm, electron at x = 1.2 nm. So r_A = 1.2×10⁻⁹ m, r_B = 2.4×10⁻⁹ m.
2. k e² = (8.99×10⁹)(1.6×10⁻¹⁹)² = 2.30×10⁻²⁸ N·m².
3. From A: F_A = 2.30×10⁻²⁸/(1.44×10⁻¹⁸) = 1.60×10⁻¹⁰ N, **attractive → toward A, i.e. −x**.
4. From B: F_B = 2.30×10⁻²⁸/(5.76×10⁻¹⁸) = 4.00×10⁻¹¹ N, **attractive → toward B, i.e. +x**.
5. Vector sum on one axis = algebraic sum: F_net = −1.60×10⁻¹⁰ + 0.40×10⁻¹⁰ = **1.2×10⁻¹⁰ N toward the nearer proton**.

Note the structure: halving the distance to B relative to A made F_A **four** times F_B, not twice.

## Worked example 3 — 2-D superposition (component resolution)

q₀ = +2.0 μC sits at the origin. q₁ = +8.0 μC is at (0.30 m, 0) and q₂ = +6.0 μC is at (0, 0.30 m). Find the net force on q₀.

1. Both separations are 0.30 m, so r² = 0.090 m² for both.
2. F₁ = (8.99×10⁹)(8.0×10⁻⁶)(2.0×10⁻⁶)/0.090 = 1.60 N. All charges positive → q₀ is **pushed away from q₁**, i.e. along **−x**.
3. F₂ = (8.99×10⁹)(6.0×10⁻⁶)(2.0×10⁻⁶)/0.090 = 1.20 N, pushed away from q₂, i.e. along **−y**.
4. Components: ΣFₓ = −1.60 N, ΣF_y = −1.20 N.
5. Magnitude: F = √(1.60² + 1.20²) = √(2.56 + 1.44) = √4.00 = **2.0 N**.
6. Direction: tan θ = |ΣF_y|/|ΣFₓ| = 1.20/1.60 = 0.75 → θ = **36.9° below the −x axis** (i.e. 217° measured anticlockwise from +x).

Arithmetic addition would have given 2.8 N — the classic error.

## Worked example 4 — null point / equilibrium position

q₁ = +9.0 μC at x = 0 and q₂ = +4.0 μC at x = 0.50 m. Where on the line can a third charge sit in equilibrium?

1. Like charges → the point must be **between** them (only there do the two forces oppose). Let it be at distance x from q₁, so 0.50 − x from q₂.
2. Set magnitudes equal: k q₃(9.0)/x² = k q₃(4.0)/(0.50 − x)² — note **q₃ and k cancel**, so the answer depends only on the two fixed charges.
3. Take square roots: 3/x = 2/(0.50 − x) → 1.5 − 3x = 2x → 5x = 1.5.
4. **x = 0.30 m from the 9.0 μC charge** (0.20 m from the 4.0 μC charge) — nearer the *smaller* charge, as it must be.
5. If instead q₂ were −4.0 μC: between them both forces point the same way, so the null point moves **outside the pair, beyond the smaller charge**, and the equation becomes 3/x = 2/(x − 0.50), giving x = 1.5 m.

## Worked example 5 — electric field of point charges, then the force

A +2.00 nC charge is at the origin and a −5.00 nC charge is on the x-axis at x = 0.800 m. Find **E** at x = 0.200 m, and the force on an electron placed there.

1. From the +2.00 nC, r = 0.200 m: E₁ = (8.99×10⁹)(2.00×10⁻⁹)/0.0400 = **450 N/C**, directed **away** from a positive charge → **+x**.
2. From the −5.00 nC, r = 0.600 m: E₂ = (8.99×10⁹)(5.00×10⁻⁹)/0.360 = **125 N/C**, directed **toward** a negative charge → **+x**.
3. Superpose: both point the same way, so E = 450 + 125 = **575 N/C in the +x direction**.
4. Force on an electron: F = |q|E = (1.602×10⁻¹⁹)(575) = **9.2×10⁻¹⁷ N**, directed **−x**, i.e. *opposite* to **E** because the electron is negative.

## Commonly confused

- **Force vs field**: **E** = k|q|/r² has *one* charge in it and exists at an empty point; F = k|q₁q₂|/r² needs *two*. If your "field" answer has two charges multiplied together, you have computed a force.
- **k vs ε₀**: k = 8.99×10⁹ N·m²/C² is the Coulomb constant; ε₀ = 8.85×10⁻¹² C²/(N·m²) is the permittivity of free space, and k = 1/(4πε₀). A **larger** permittivity means a **weaker** force.
- **Adding magnitudes instead of vectors**: superposition is a *vector* sum. Two forces of 3 N and 4 N can give 7 N, 1 N, or 5 N depending on direction.
- **Signs used twice**: either substitute signed charges into the vector form, or use magnitudes and fix the direction by "like repels, unlike attracts". Doing both flips the direction back.
- **r vs r²**: forgetting to square the distance, and forgetting to convert cm → m and nm → m *before* squaring, are the two most common numerical losses.
- **Third law with unequal charges**: a 1 μC and a 100 μC charge exert **equal and opposite** forces on each other. The *accelerations* differ, not the forces.
- **Shielding**: placing a third charge between two others does **not** change the force between them. Superposition adds a new force; it does not modify the old ones.
- **Null point on the wrong side**: for **unlike** charges there is *never* a zero-force point between them (both forces point the same way) — it lies outside, beyond the weaker charge. For **like** charges it is always between.
- **Self-force**: a charge produces a field but feels no net force from its own field.
- **The test charge in E = F/q₀**: doubling q₀ doubles F, so E is unchanged. E belongs to the source, not to the probe.
