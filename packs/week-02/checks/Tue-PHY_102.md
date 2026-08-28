# Tuesday — PHY_102 nightly check

*Coulomb's law: statement, constants, vector form and sign conventions; the superposition principle; the electric field concept.*
*Sit cold, notes closed, 8 minutes. Score out of 6.*

**1.** Two point charges q₁ and q₂ are clamped a fixed distance apart and exert a force of 6.0 N on each other. A third charge q₃ is now clamped on the line **exactly midway between them**, without moving q₁ or q₂. The force that q₁ now exerts on q₂ is:
a) still exactly 6.0 N; q₃ adds a further force on each of them but does not alter the q₁–q₂ force
b) less than 6.0 N, because q₃ partially screens q₂ from q₁
c) zero, because q₃ intercepts the field lines running between them
d) still 6.0 N only if q₃ happens to be neutral; any charged q₃ changes it

**2.** The vector form of Coulomb's law is **F**₁₂ = (k q₁q₂ / r₁₂²) **r̂**₁₂, where **F**₁₂ is the force on q₂ due to q₁ and **r̂**₁₂ points from q₁ toward q₂. You substitute q₁ = +3.0 μC and q₂ = −5.0 μC **with their signs**. The expression returns:
a) a vector along +**r̂**₁₂, since the magnitude of a force can never be negative
b) a negative number that should be reported as "a repulsive force of negative magnitude"
c) the same vector you obtain by using the magnitudes and *then* reversing the direction because the charges are unlike
d) a vector along −**r̂**₁₂ — q₂ is pulled back toward q₁, i.e. attraction, with no further sign reasoning needed

**3.** A test charge of +2.0 nC placed at point P feels a force of 8.0×10⁻⁶ N. It is removed and a −6.0 nC charge is placed at exactly the same point P, with the source charges untouched. The electric field **at P** is now:
a) three times larger and reversed in direction
b) unchanged in both magnitude and direction
c) the same magnitude but reversed in direction
d) zero, because a negative charge cannot define a field

**4.** Which statement about the constants in Coulomb's law is correct?
a) k = 4πε₀, so a medium of larger permittivity gives a larger force between the same charges
b) k = 1/(4πε₀), so a medium of larger permittivity **strengthens** the force between the same two charges
c) k = 1/(4πε₀), so replacing the vacuum with a medium of **larger** permittivity **weakens** the force between the same two charges at the same separation
d) ε₀ = 8.99×10⁹ C²/(N·m²) and k = 8.85×10⁻¹² N·m²/C²

**5. (explain why)** Superposition is always stated as a **vector** sum, never as a sum of magnitudes. Explain why, and describe one specific arrangement of three charges in which the net force on one of them is **smaller** than the force either of the other two would exert on it alone.

**6. (explain why)** The electric field is defined using a positive test charge, yet the field of a **negative** point charge is drawn pointing **toward** the charge. Explain why. Then explain why that charge feels no net force from the field it produces itself.

---

## Answers

**1. a** — *Superposition: forces are pairwise and additive, and charges do not shield one another.* Each pair obeys Coulomb's law using only that pair's charges and separation, so the q₁–q₂ force is untouched at 6.0 N; what changes is the *net* force on q₁ and on q₂, since a new term is added to the vector sum. (b) and (c) import the everyday idea of "blocking", which has no counterpart in Coulomb's law — electrostatic force is not a beam that can be intercepted. (d) invents a condition: even a charged q₃ contributes an extra force rather than modifying an existing one.

**2. d** — *Sign convention in the vector form: the signed product carries the direction.* q₁q₂ < 0 makes the whole coefficient negative, so the force lies along −**r̂**₁₂ — pointing from q₂ back toward q₁, which is exactly attraction. (a) confuses "magnitude" with the vector's component along **r̂**. (b) treats the negative sign as a defective magnitude rather than as direction information. (c) is the commonest error of all — using the sign **twice**, once in the algebra and once again "by inspection", which flips the direction back to repulsion. Use signed charges *or* magnitudes-plus-inspection, never both.

**3. b** — *The field is a property of the source charges and of the point, not of the probe.* **E** = **F**/q₀ is a *ratio*: putting a bigger or oppositely signed charge at P changes the force it feels in exactly the same proportion, leaving E = 4.0×10³ N/C in the same direction. (a) and (c) confuse the field with the *force on the new charge*, which does indeed grow threefold and reverse. (d) mistakes the sign of the probe for the existence of the field.

**4. c** — *k = 1/(4πε₀): permittivity sits in the denominator.* Because ε₀ (or ε for a medium) is in the denominator, a larger permittivity gives a smaller constant and therefore a weaker force — the medium "permits" the field more readily and screens the interaction. (a) inverts the relationship; (b) has the correct formula but reads the inverse dependence backwards, which is the real discriminator here; (d) swaps the two numerical values and their units.

**5.** *Concept: superposition is a vector sum, so direction is part of the addition.* Forces have direction, and two forces of the same size acting in different directions do not combine to twice that size — the sum depends on the angle between them, giving anything from the difference of the magnitudes (opposite directions) to their sum (same direction). Concrete arrangement: put a +2 μC charge at the origin with a +5 μC charge at x = +0.10 m and another +5 μC charge at x = −0.10 m. Each outer charge alone would push the middle charge with a substantial force, but the two forces are equal and exactly opposite, so the net force is **zero** — smaller than either alone. (Any arrangement with the two forces more than 90° apart works.)

**6.** *Concept: field direction is the direction of the force on a positive test charge; and a charge exerts no net force on itself.* By definition **E** = **F**/q₀ with q₀ **positive**, so the field arrow at each point shows which way a positive test charge would be pushed. A positive test charge near a negative source is **attracted**, i.e. pulled inward, so the arrows — and the field lines — point radially inward, terminating on the negative charge. As for self-force: the field a charge creates is spherically symmetric about the charge itself, so there is no preferred direction for it to push in; every element of that field is matched by an opposite one, and a net self-force would let an isolated charge accelerate itself, violating momentum conservation. A charge's field acts on *other* charges only.
