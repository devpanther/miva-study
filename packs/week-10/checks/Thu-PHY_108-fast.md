# Thursday — PHY_108 fast-hour check

*Magnetic moment of a bar magnet: tangent law, set-up, eight readings and the graph.*
*5 questions, straight after the hour. Score out of 5.*

**1.** At one distance from the tangent galvanometer the eight recorded deflections are:

θ₁ θ₂ θ₃ θ₄ θ₅ θ₆ θ₇ θ₈ (degrees):  26  26  24  24  25  25  26  26

What value of tan θ_AV goes on the graph?
A. 0.488
B. 0.472
C. 0.445
D. 0.466

**2.** A bar magnet 12 cm long has its centre 30 cm from the needle of a tangent galvanometer. What is the value of d/(d² − L²)² for this position, with L the half-length?
A. 37.0 m⁻³
B. 52.5 m⁻³
C. 12.1 m⁻³
D. 40.2 m⁻³

**3.** The graph of tan θ_AV against d/(d² − L²)² has gradient s = 0.0180 m³. The magnet is 12 cm long. Take B_H = 40 × 10⁻⁶ T and μ₀ = 4π × 10⁻⁷ T·m/A. What is the pole strength of the magnet?
A. 30 A·m
B. 60 A·m
C. 15 A·m
D. 0.43 A·m

**4.** With the magnet's centre 50 cm from the needle the average deflection is 12.0°. The magnet is moved in to 25 cm. Treating the magnet as a point dipole (d much larger than L), what deflection is expected?
A. 23.0°
B. 40.4°
C. 24.0°
D. 59.5°

**5.** At each distance the deflection is recorded, then the polarity of the bar magnet is reversed and the deflection recorded again. Which error does averaging the two readings remove?
A. Eccentricity of the needle on its pivot
B. A zero error of the degree scale
C. The magnet not being centred on the needle
D. Parallax in reading the scale

---

## Answers

**1. B** — *Average deflection and its tangent from eight readings.* Average the angles first: θ_AV = (26 + 26 + 24 + 24 + 25 + 25 + 26 + 26)/8 = 202/8 = 25.25°. Then tan 25.25° = 0.472.

0.488 is tan 26°, the most frequent reading instead of the mean; 0.466 is tan 25°, the mean rounded down to a whole degree, which throws away the quarter-degree the averaging bought; 0.445 is tan 24°, the smallest reading.

**2. D** — *Evaluating the abscissa d/(d² − L²)².* Work in metres with the half-length: d = 0.30 m, L = 0.06 m. d² − L² = 0.0900 − 0.0036 = 0.0864 m², so (d² − L²)² = 7.465 × 10⁻³ m⁴ and d/(d² − L²)² = 0.30/7.465 × 10⁻³ = 40.2 m⁻³.

52.5 m⁻³ uses the full length 0.12 m as L; 37.0 m⁻³ is the point-dipole 1/d³, dropping the L correction entirely; 12.1 m⁻³ puts d² instead of d in the numerator.

**3. A** — *Magnetic moment and pole strength from the gradient.* The gradient is s = (μ₀/4π)(2M/B_H), so M = 2πB_H s/μ₀ = (2π/4π × 10⁻⁷) × 40 × 10⁻⁶ × 0.0180 = 5 × 10⁶ × 7.2 × 10⁻⁷ = 3.6 A·m². Then M = 2mL with 2L the full length, so m = M/(2L) = 3.6/0.12 = 30 A·m.

60 A·m divides by the half-length 0.06 m instead of the full length; 15 A·m drops the factor 2 in 2Md, making M = 1.8 A·m²; 0.43 A·m multiplies M by 0.12 instead of dividing.

**4. D** — *Scaling of the deflection with distance.* For a point dipole B ∝ 1/d³, and the tangent law gives tan θ = B/B_H, so tan θ ∝ 1/d³. Halving d multiplies tan θ by 2³ = 8: tan θ₂ = 8 × tan 12.0° = 8 × 0.2126 = 1.700, so θ₂ = 59.5°. Note that it is the tangent that scales, not the angle.

24.0° doubles the angle itself, as if θ were proportional to 1/d; 40.4° uses an inverse-square law, multiplying tan θ by 4; 23.0° only doubles tan θ.

**5. B** — *Purpose of reversing the magnet's polarity.* Reversing the polarity swings the needle the other way. A constant zero offset of the scale (or a small residual field) adds to one reading and subtracts from the other, so it cancels when the two are averaged.

Eccentricity of the pivot is removed by reading both ends of the needle; an off-centre magnet is removed by repeating on the other side of the galvanometer; parallax is removed by reading with the eye vertically above the scale, not by any averaging.
