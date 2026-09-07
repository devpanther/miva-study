# Thursday — PHY_108 fast-hour check

*Verifying Boyle's law with a J-tube: the conditions, the pressure formula, and the straight-line graph.*
*5 questions, straight after the hour. Score out of 5.*

**1.** In a J-tube the open limb is raised until the mercury levels differ by 200 mm. Take P_a = 1.013 × 10⁵ Pa, ρ(mercury) = 13 600 kg/m³ and g = 9.8 m/s². What is the pressure of the trapped air?
A. 2.67 × 10⁴ Pa
B. 1.28 × 10⁵ Pa
C. 7.46 × 10⁴ Pa
D. 2.68 × 10⁷ Pa

**2.** Boyle's law readings on trapped air in a tube of bore 1 cm², P in kPa and air-column length ℓ in cm:

h (mm):   0      50     100    150    200    250
P (kPa):  101.3  108.0  114.6  121.3  128.0  134.6
ℓ (cm):   20.00  18.77  17.67  16.70  15.20  15.05

Which reading does not fit the law?
A. h = 250 mm
B. h = 50 mm
C. h = 150 mm
D. h = 200 mm

**3.** For a fixed mass of gas at constant temperature, the graph of 1/V (y-axis, in m⁻³) against P (x-axis, in Pa) is a straight line through (1.05 × 10⁵, 4.20 × 10⁴) and (1.35 × 10⁵, 5.40 × 10⁴). What is the constant PV for this gas?
A. 2.50 J
B. 0.400 J
C. 2.50 × 10⁴ J
D. 2.50 × 10⁻³ J

**4.** Air is trapped in a J-tube at atmospheric pressure with the mercury levels equal. Take P_a = 1.013 × 10⁵ Pa, ρ(mercury) = 13 600 kg/m³ and g = 9.8 m/s². By what level difference h must the open limb be raised to halve the volume of the trapped air?
A. 380 mm
B. 76 mm
C. 760 mm
D. 1520 mm

**5.** In the Boyle's law experiment, a straight line of 1/V against P is only accepted as verification if it passes through the origin. Why must it?
A. The gas pressure is zero when h = 0
B. PV = k gives 1/V = P/k, a line with no added constant
C. The volume is measured from the closed end of the tube
D. 1/V reaches zero when P equals atmospheric pressure

---

## Answers

**1. B** — *Pressure of trapped gas from the mercury level difference.* h must be in metres: h = 0.200 m. The excess mercury column adds ρgh = 13 600 × 9.8 × 0.200 = 26 656 Pa to the atmospheric pressure the gas already had, so P = 101 300 + 26 656 = 127 956 Pa ≈ 1.28 × 10⁵ Pa.

2.67 × 10⁴ Pa is ρgh alone, forgetting that the gas was at atmospheric pressure when h = 0; 7.46 × 10⁴ Pa subtracts the column instead of adding it; 2.68 × 10⁷ Pa leaves h in millimetres.

**2. D** — *Testing readings with the product PV.* With A = 1 cm², ℓ stands for V, so Boyle's law needs Pℓ to be the same in every row. Multiply across: 101.3 × 20.00 = 2026, 108.0 × 18.77 = 2027, 114.6 × 17.67 = 2025, 121.3 × 16.70 = 2026, 128.0 × 15.20 = 1946, 134.6 × 15.05 = 2026. The h = 200 mm row is 4% low; the column should have read 2026/128.0 = 15.83 cm.

h = 250 mm looks odd only because the drop from 15.20 to 15.05 is so small, which is the outlier's doing; h = 50 mm and h = 150 mm both give the product 2026.

**3. A** — *Constant PV from the gradient of the 1/V against P line.* Gradient = Δ(1/V)/ΔP = (5.40 − 4.20) × 10⁴ / (1.35 − 1.05) × 10⁵ = 1.20 × 10⁴ / 3.00 × 10⁴ = 0.400 J⁻¹. Since 1/V = P/(PV), the gradient is 1/(PV), so PV = 1/0.400 = 2.50 J. Check with one point: 1.05 × 10⁵ / 4.20 × 10⁴ = 2.50 J.

0.400 J quotes the gradient itself as the constant, forgetting the reciprocal; 2.50 × 10⁴ J drops the 10⁴ on the 1/V values; 2.50 × 10⁻³ J converts P to kPa before dividing.

**4. C** — *Level difference needed for a given compression.* Boyle: P₁V₁ = P₂V₂, so halving V doubles P from P_a to 2P_a. The extra pressure is ρgh = 2P_a − P_a = P_a, so h = P_a/(ρg) = 101 300/(13 600 × 9.8) = 0.760 m = 760 mm. This is just the height of the mercury column that the atmosphere itself supports.

380 mm makes the mercury column supply only half of P_a, forgetting that the gas must reach 2P_a; 1520 mm makes the column supply the whole 2P_a, forgetting the gas already had P_a; 76 mm is 76 cm written in the wrong unit.

**5. B** — *Why the linearised Boyle's law graph passes through the origin.* Boyle's law is PV = k. Rearranged, 1/V = (1/k)P, which has the form y = mx with gradient 1/k and intercept zero. So the law predicts not only a straight line but one through the origin; a non-zero intercept means a systematic error, usually atmospheric pressure left out of P.

At h = 0 the gas is at atmospheric pressure, not zero; how the volume is read has nothing to do with the intercept; 1/V can never be zero for a finite volume.
