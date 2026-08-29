# PHY_102 — Week 1

*General Physics II · Week 1 (7–13 Sep 2026)*

*Source note: the week-1 slides are complete but almost entirely qualitative — methods of charging, plus a summary sheet giving the properties of charge and e ≈ −1.6×10⁻¹⁹ C. No force or field formula is written anywhere in the extracted text, yet the week's own "skills acquired" list claims you can now "calculate the force between two charged particles or the electric field at a point". The Coulomb's-law and field sections below are therefore standard content supplied to fill that gap; everything else comes straight from the slides.*

## Most likely to be examined

1. **The three methods of charging** — friction, conduction, induction — and, for each, whether contact occurs and what sign the object ends up with (conduction: **same** sign as the charger; induction with grounding: **opposite** sign).
2. **Charge is transferred, never created**: only electrons move; protons are locked in nuclei. Rubbing leaves equal and opposite charges, total unchanged.
3. **Quantisation**: q = ne. Given a charge, find the number of excess/deficit electrons; spot a charge that is *not* an integer multiple of e.
4. **Conservation on contact between identical conductors**: each ends with the **average** (q₁+q₂)/2 — signs included.
5. **Polarisation vs net charge**: a neutral conductor near a charged rod has zero net charge but separated charge; this is why a charged rod attracts neutral paper/foil of *either* rod sign.
6. **Coulomb's law**: F = kq₁q₂/r², inverse-**square**, and its vector superposition for more than two charges.
7. **Electric field**: E = F/q₀ = kQ/r², a property of the *source*, independent of the test charge; direction defined for a **positive** test charge.
8. **Why induction strengthens as the rod approaches** — the rod's field at the conductor is stronger, so more free electrons are displaced.

## Definitions

- **Electric charge (q)** — fundamental property of matter causing it to experience a force in an electric field. Two kinds: positive and negative. SI unit: coulomb (C). Like charges repel, unlike attract.
- **Elementary charge (e)** — smallest free charge, e = 1.6×10⁻¹⁹ C. Electron: −e. Proton: +e.
- **Quantisation of charge** — any net charge is an integer multiple of e: q = ne, n ∈ ℤ.
- **Conservation of charge** — the total charge of an isolated system is constant in time.
- **Additivity of charge** — the net charge of a system is the *algebraic* sum of its charges: Q = q₁+q₂+…, signs included.
- **Charging** — supplying electrons to, or removing electrons from, an object.
- **Charging by friction** — rubbing transfers electrons between two objects; the giver becomes +, the receiver −. Charges are equal and opposite ("friction charge").
- **Charging by conduction** — a charged object *touches* a neutral conductor; charge is shared, and both end with the **same** sign.
- **Charging by induction** — a charged object is brought *near* (never touching) a conductor; free charge redistributes; the conductor is momentarily **grounded** so the repelled charge escapes; the ground is removed, then the rod. The conductor keeps a charge **opposite** to the rod.
- **Polarisation** — charge separation within a body with no net charge gained or lost (induction *without* grounding). Reversible: remove the rod and the charge spreads uniformly again.
- **Grounding (earthing)** — connecting a body to the Earth, an effectively infinite reservoir of charge.
- **Static electricity** — build-up of charge on a surface, charges accumulating rather than flowing continuously as in a current.
- **Electric field** — a region around a charged object where it exerts electric force on other charges; weakens with distance. Field strength E = force per unit positive test charge.

## Formulas

| Relation | Meaning of symbols | Notes |
|---|---|---|
| q = ne | n = number of excess (−) or deficit (+) electrons; e = 1.6×10⁻¹⁹ C | n must be a whole number |
| Σq_before = Σq_after | algebraic sums | conservation; use it to check every transfer problem |
| q′ = (q₁+q₂)/2 | q′ = charge on each sphere after contact | **identical** conducting spheres only; keep signs |
| F = k q₁q₂ / r² | F in N; q in C; r = centre-to-centre separation in **m** | k = 8.99×10⁹ N·m²·C⁻²; along the line joining them |
| k = 1/(4πε₀) | ε₀ = 8.85×10⁻¹² C²·N⁻¹·m⁻² | do **not** substitute ε₀ where k belongs |
| E = F/q₀ | q₀ = test charge (C); E in N·C⁻¹ | E independent of q₀ |
| E = kQ/r² | Q = source charge | away from +Q, toward −Q |
| F = qE | force on charge q in field E | negative q ⇒ force **opposite** to E |
| E_net = ΣE⃗ᵢ, F_net = ΣF⃗ᵢ | superposition | add as **vectors**, not magnitudes |

## Worked examples

**A. Counting electrons (quantisation).** An object carries −4.8×10⁻⁷ C. How many excess electrons?
n = |q|/e = 4.8×10⁻⁷ / 1.6×10⁻¹⁹
n = (4.8/1.6) × 10⁻⁷⁻⁽⁻¹⁹⁾ = 3.0 × 10¹²
**n = 3.0×10¹² excess electrons.**

**B. Friction transfer (conservation).** Rubbing glass with silk moves 2.5×10¹⁰ electrons from glass to silk. Find both charges.
Magnitude: q = ne = (2.5×10¹⁰)(1.6×10⁻¹⁹) = 4.0×10⁻⁹ C
Glass lost electrons ⇒ +4.0 nC. Silk gained them ⇒ −4.0 nC.
Check: (+4.0) + (−4.0) = 0 = charge before rubbing. ✔
**Glass +4.0 nC, silk −4.0 nC.**

**C. Contact between identical spheres, then the force.** Spheres of +12 nC and −4 nC touch and separate, ending 6.0 cm apart.
q′ = (q₁+q₂)/2 = (+12 + (−4))/2 nC = +8/2 = **+4.0 nC each**
F = kq′²/r² = (8.99×10⁹)(4.0×10⁻⁹)² / (0.060)²
numerator: (8.99×10⁹)(1.6×10⁻¹⁷) = 1.438×10⁻⁷
denominator: (0.060)² = 3.6×10⁻³
F = 1.438×10⁻⁷ / 3.6×10⁻³ = 4.0×10⁻⁵ N
**F = 4.0×10⁻⁵ N, repulsive (both now positive).**

**D. Coulomb's law direct.** +3.0 μC and −3.0 μC, 5.0 cm apart in vacuum.
F = (8.99×10⁹)(3.0×10⁻⁶)(3.0×10⁻⁶) / (0.050)²
numerator: (8.99×10⁹)(9.0×10⁻¹²) = 8.09×10⁻²
denominator: (0.050)² = 2.5×10⁻³
F = 8.09×10⁻² / 2.5×10⁻³ = 32 N
**F = 32 N, attractive.**

**E. Field of a point charge, then force in it.** Q = +5.0 nC; find E at r = 3.0 cm, and the force on a −2.0 nC charge placed there.
E = kQ/r² = (8.99×10⁹)(5.0×10⁻⁹) / (0.030)² = 44.95 / 9.0×10⁻⁴ = 5.0×10⁴ N·C⁻¹, directed **away** from Q.
F = |q|E = (2.0×10⁻⁹)(5.0×10⁴) = 1.0×10⁻⁴ N, directed **toward** Q (charge is negative).
**E = 5.0×10⁴ N·C⁻¹ outward; F = 1.0×10⁻⁴ N inward.**

**F. Superposition — where is E zero?** +1.0 μC at x = 0, +4.0 μC at x = 0.60 m. Find the point between them where E = 0.
Set magnitudes equal: kQ₁/x² = kQ₂/(0.60 − x)²
√Q₁ / x = √Q₂ / (0.60 − x) ⇒ (0.60 − x)/x = √(4.0/1.0) = 2
0.60 − x = 2x ⇒ 3x = 0.60 ⇒ x = 0.20 m
**E = 0 at 0.20 m from the 1.0 μC charge** (nearer the *smaller* charge, as it must be).

**G. Induction, sign reasoning.** A **negative** rod is held near an isolated metal sphere; the sphere is grounded, ground removed, then rod removed.
Rod repels the sphere's free electrons to the far side → grounding lets those electrons escape to Earth → ground removed while rod still present → rod removed, remaining positive charge spreads uniformly.
**Sphere ends positively charged — opposite to the rod, with the rod's own charge unchanged.**

## Commonly confused

- **Conduction vs induction** — *Test:* did the charged object touch? If yes, conduction, same sign; if no (and grounding was used), induction, opposite sign.
- **Induction with grounding vs plain polarisation** — *Test:* was there a path to Earth? No path ⇒ no net charge, effect vanishes when the rod leaves.
- **Electron transfer vs proton transfer** — *Test:* in solids only electrons move. If your explanation has protons flowing, it is wrong.
- **Charge created vs charge transferred** — *Test:* add up the charges before and after; if the total changed, your account violates conservation.
- **Force F vs field E** — *Test:* does doubling the test charge change the number? If yes, it is F; E is fixed by the source alone.
- **k vs ε₀** — *Test:* k = 8.99×10⁹ multiplies; ε₀ = 8.85×10⁻¹² appears only as 1/(4πε₀).
- **1/r vs 1/r²** — *Test:* halving r must quadruple F or E, not double it.
- **Attraction because of opposite net charge vs attraction because of induced polarisation** — *Test:* is the attracted body a *neutral* one? Then it is polarisation, and it would still be attracted by a rod of the opposite sign.
- **Quantisation vs conservation** — *Test:* quantisation restricts *which values* a charge may take; conservation restricts *how a total may change*.
- **cm vs m in Coulomb's law** — *Test:* r is squared, so an unconverted centimetre costs a factor of 10⁴, not 10².
