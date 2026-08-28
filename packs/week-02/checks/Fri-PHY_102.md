# Friday — PHY_102 nightly check

*PHY_102 problems: multi-charge superposition calculations, component resolution, equilibrium/null points, and ratio and scaling problems.*
*Sit cold, notes closed, 8 minutes. Score out of 6.*

**1.** Q₁ = +4.0 μC is fixed at x = 0 and Q₂ = −4.0 μC is fixed at x = 0.60 m. A charge q₃ = +2.0 μC is placed at x = 0.30 m. Each of the two charges alone would exert about 0.80 N on q₃. The **net** force on q₃ is:
a) zero, because the two source charges are equal and opposite
b) 0.80 N in the +x direction
c) 1.6 N in the −x direction, toward the +4.0 μC charge
d) 1.6 N in the +x direction, toward the −4.0 μC charge

**2.** A charge at the origin is acted on by two forces from two other charges: 6.0×10⁻³ N along +x and 8.0×10⁻³ N along +y. The resultant force is:
a) 1.0×10⁻² N at 53° above the +x axis
b) 1.4×10⁻² N at 45° above the +x axis
c) 1.0×10⁻² N at 37° above the +x axis
d) 2.0×10⁻³ N along the +y axis

**3.** A charge of +9.0 μC is fixed at x = 0 and a charge of −4.0 μC is fixed at x = 1.0 m. A third point charge placed on the x-axis experiences **zero** net force at:
a) x = 0.60 m
b) x = 3.0 m
c) x = −3.0 m
d) x = 0.50 m

**4.** Two point charges separated by r exert a force F on each other. One charge is then **tripled**, the other is **halved**, and the separation is **doubled**. The new force is:
a) 3F/2
b) 3F/4
c) 3F/8
d) 6F

**5. (explain why)** A student locates the null point between two fixed positive charges by placing a +1.0 μC charge on the line and solving for zero net force. She then repeats the calculation with a −3.0 μC charge and gets exactly the same position. Explain why the third charge's size and sign make no difference, and explain why the null point always lies **nearer the smaller** of the two fixed charges.

**6. (explain why)** In a collinear three-charge problem, moving the test point from 1.0 cm to 3.0 cm from a source charge cuts the force to **one-ninth**, not one-third. Explain why. Then use the same reasoning to explain why, in a typical three-charge line problem, the **nearer** charge usually dominates the net force even when it is the charge of smaller magnitude.

---

## Answers

**1. d** — *Collinear superposition: add the force **vectors**, not the source charges.* q₃ is **repelled** by the +4.0 μC on its left (pushed toward +x) and **attracted** by the −4.0 μC on its right (pulled toward +x). Both forces point the same way, so they add: 0.80 + 0.80 = 1.6 N in +x. (a) is the trap — it cancels the *charges* (+4 and −4) instead of resolving the *forces*, and is what you get by never drawing the free-body diagram. (b) adds only one contribution or averages them. (c) gets the magnitude right but reverses both directions, i.e. treats attraction as repulsion.

**2. a** — *Component resolution: Pythagoras for the magnitude, arctan(F_y/F_x) for the angle.* F = √((6.0)² + (8.0)²)×10⁻³ = 1.0×10⁻² N, and tan θ = F_y/F_x = 8.0/6.0 = 1.33, so θ = 53° **above the +x axis**. (b) adds the magnitudes arithmetically (6.0 + 8.0 = 14) and guesses 45°, the error superposition exists to prevent. (c) has the correct magnitude but inverts the tangent ratio (arctan 6/8 = 37°) — the single commonest slip in 2-D problems, so check which component is on top. (d) subtracts the magnitudes, which is only valid for anti-parallel forces.

**3. b** — *Null point geometry for **unlike** charges: it lies outside the pair, beyond the smaller charge.* Between two unlike charges, the force from one is repulsive and the other attractive but **both point the same way**, so cancellation there is impossible. Outside, on the side of the weaker (−4.0 μC) charge, the extra distance to the stronger charge can compensate: 9/x² = 4/(x − 1)² → 3/x = 2/(x − 1) → x = 3.0 m. (a) = 0.60 m is exactly what you get by applying the **like-charge** "between them" equation 3/x = 2/(1 − x) — the right algebra with the wrong geometry. (c) puts the point beyond the *larger* charge, where the stronger, nearer charge always wins and no solution exists. (d) is the midpoint, which is only the null point when the two charges are equal *and* like.

**4. c** — *Scaling by proportional reasoning: F ∝ q₁q₂/r².* The numerator changes by 3 × ½ = 3/2 and the denominator by 2² = 4, so F → (3/2)/4 = **3F/8**. (b) = 3F/4 comes from dividing by 2 instead of 2² — forgetting that the distance is squared. (a) tracks only the charges and ignores the separation. (d) multiplies by both charge factors as though they were 3 and 2 and drops the distance entirely.

**5.** *Concept: the null point depends only on the two source charges, because the probe cancels out of the equation.* Setting the two magnitudes equal gives k|q₃||Q₁|/x² = k|q₃||Q₂|/(d − x)², and |q₃| — like k — appears on **both** sides and divides out; the resulting equation contains only Q₁, Q₂ and the geometry. Changing the probe's sign merely reverses **both** forces at once, so wherever they cancelled before they still cancel. As for the location: the two forces can only oppose each other at a point *between* two like charges, and to balance a larger charge against a smaller one the point must be **farther from the larger** charge, since the 1/r² fall-off is what compensates for the bigger numerator. That places it nearer the smaller charge — and in the 9 : 1 case, three times as far from the big charge as from the small one, because the distances scale as the square roots of the charges.

**6.** *Concept: the inverse-square dependence, and why proximity beats magnitude.* The distance enters Coulomb's law as r², not r: tripling r multiplies r² by 9, so the force falls by a factor of 9. The force is not proportional to distance in any direct way, and "three times as far so one-third the force" is 1/r reasoning smuggled in from formulas like F ∝ 1/r. The consequence for a three-charge line: the ratio of the two forces on the middle charge is (Q_near/Q_far) × (r_far/r_near)², so the distance ratio is **squared** while the charge ratio is not. A charge half the size but at half the distance produces ½ × 4 = **twice** the force of its larger partner. This is why you must always compute both contributions rather than assuming the bigger charge wins — and why answers should be checked by asking whether the net force sensibly leans toward the nearer charge.
