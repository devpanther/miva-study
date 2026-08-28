# Friday — PHY_102 problems nightly check

*Coulomb's law, superposition and charge quantisation calculations.*
*Sit cold, notes closed, 8 minutes. Score out of 6. Constants: k = 8.99×10⁹ N·m²/C², e = 1.602×10⁻¹⁹ C.*

**1.** Two point charges, q₁ = +5.0 μC and q₂ = −2.0 μC, are 0.30 m apart in vacuum. The magnitude of the force between them is closest to:
a) 1.0 N  b) 0.30 N  c) 3.0 N  d) 1.0×10⁻⁶ N

**2.** A charge of +3.0 μC sits at x = 0 and a charge of −3.0 μC at x = 0.40 m. A +2.0 μC charge is placed at the midpoint, x = 0.20 m. The net force on it is:
a) 2.7 N directed toward the negative charge
b) zero, because the two source charges are equal and opposite
c) 1.3 N directed toward the negative charge
d) 2.7 N directed toward the positive charge

**3.** An object carries a net charge of −8.0×10⁻¹⁹ C. The number of excess electrons on it is:
a) 5  b) 8  c) 0.20  d) 1.3×10⁻³⁷

**4.** Two point charges exert a force F on each other. One of the charges is now tripled and the separation is halved. The new force is:
a) 12F  b) 6F  c) 1.5F  d) 24F

**5. (explain why)** A charge of +q is at x = 0 and a charge of +4q is at x = 0.60 m. Find the point on the line between them where a small test charge feels **zero** net force, and show the reasoning that fixes which side of the midpoint it lies on.

**6. (explain why)** Charges of +2.0 μC at x = 0 and +8.0 μC at x = 0.30 m are fixed on a line. A charge of −1.0 μC is placed at x = 0.10 m. Work out the net force on it, and explain what the result tells you about how distance and charge magnitude compete.

---

## Answers

**1. a** — *Coulomb's law with correct unit conversion and squaring of r.* F = (8.99×10⁹)(5.0×10⁻⁶)(2.0×10⁻⁶)/(0.30)² = 0.0899/0.090 ≈ 1.0 N, attractive. (b) is what you get by dividing by r instead of r²; (c) comes from the slip (0.30)² = 0.03; (d) comes from reading μC as nC.

**2. a** — *Superposition: add force vectors, not charge magnitudes.* The positive source repels the test charge toward +x and the negative source attracts it toward +x, so the two 1.35 N contributions add to 2.7 N pointing at the negative charge. (b) is the common error of cancelling because the sources are ±equal; (c) counts only one source; (d) reverses the direction.

**3. a** — *Quantisation, n = q/e.* n = (8.0×10⁻¹⁹)/(1.602×10⁻¹⁹) = 5. (b) reads the coefficient as the count; (c) inverts the division; (d) multiplies instead of dividing.

**4. a** — *The inverse-square law scales with r², not r.* F ∝ q₁q₂/r², so tripling a charge gives ×3 and halving r gives ×2² = 4, hence ×12. (b) forgets to square the distance factor; (d) wrongly squares the charge factor too.

**5.** *Concept: the null point between two like charges lies nearer the weaker charge.* Set kq/x² = k(4q)/(0.60 − x)². Taking square roots, (0.60 − x)/x = 2, so 0.60 − x = 2x and **x = 0.20 m from the +q charge** (0.40 m from the +4q). It must sit nearer the smaller charge because only extra distance from the larger charge, working through the 1/r² factor, can bring the two magnitudes into balance; the factor-of-4 in charge is offset by a factor-of-2 in distance.

**6.** *Concept: superposition with attractive forces, and the dominance of the inverse-square distance factor.* The net force is **zero**. From the +2.0 μC at r = 0.10 m: F₁ = k(2.0×10⁻⁶)(1.0×10⁻⁶)/(0.10)² = 1.80 N, attractive, in the −x direction. From the +8.0 μC at r = 0.20 m: F₂ = k(8.0×10⁻⁶)(1.0×10⁻⁶)/(0.20)² = 1.80 N, attractive, in the +x direction. They are equal and opposite, so the resultant is zero. Quadrupling the charge is exactly cancelled by doubling the distance (2/0.01 = 8/0.04 = 200): in Coulomb's law distance is the more powerful variable, so the larger charge does not automatically win.
