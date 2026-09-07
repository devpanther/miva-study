# Thursday — PHY_108 fast-hour check

*Specific heat of a solid by mixtures: unit, energy balance, calorimeter term and apparatus.*
*5 questions, straight after the hour. Score out of 5.*

**1.** Method of mixtures, one run:

solid block      m_s = 50.0 g   T_s = 95.0 °C
copper calorimeter  m_c = 40.0 g   c_c = 387 J/kg·°C
water            m_w = 100.0 g  c_w = 4186 J/kg·°C
T_r = 20.0 °C   T_f = 27.0 °C

What is the specific heat of the solid?
A. 862 J/kg·°C
B. 894 J/kg·°C
C. 0.894 J/kg·°C
D. 810 J/kg·°C

**2.** The mixtures experiment is repeated with several blocks of one material. Heat gained by water plus calorimeter, Q (y-axis, J), is plotted against m_s(T_s − T_f) (x-axis, kg·°C). The best line passes through (0.20, 200) and (0.60, 560). What is the specific heat of the material?
A. 933 J/kg·°C
B. 1.11 × 10⁻³ J/kg·°C
C. 900 J/kg·°C
D. 1000 J/kg·°C

**3.** In a mixtures run the thermometer is read to ±0.05 °C. It gives T_r = 16.1 °C and T_f = 17.0 °C. What is the percentage uncertainty in the temperature rise (T_f − T_r)?
A. 11%
B. 0.6%
C. 5.6%
D. 0.3%

**4.** A copper calorimeter of mass 40.0 g has specific heat 387 J/kg·°C; water has c_w = 4186 J/kg·°C. What is the water equivalent of the calorimeter, the mass of water that would absorb the same heat for the same temperature rise?
A. 15.5 g
B. 40.0 g
C. 3700 g
D. 3.7 g

**5.** The hot block is carried slowly from the beaker to the calorimeter, losing heat to the air on the way, but T_s is recorded as the beaker temperature. What does this do to the computed c_s?
A. Too high: (T_f − T_r) is overstated
B. Unchanged: the loss cancels on both sides
C. Too low: (T_s − T_f) is overstated
D. Too low: m_s is overstated

---

## Answers

**1. B** — *Specific heat of a solid by the method of mixtures.* Masses in kg. Heat gained = (m_w c_w + m_c c_c)(T_f − T_r) = (0.100 × 4186 + 0.040 × 387)(27.0 − 20.0) = (418.6 + 15.5)(7.0) = 3039 J. Heat lost = m_s c_s (T_s − T_f) = 0.050 × c_s × 68.0 = 3.40 c_s. Equating: c_s = 3039/3.40 = 894 J/kg·°C.

862 J/kg·°C leaves out the calorimeter term 15.5 J/°C; 810 J/kg·°C uses (T_s − T_r) = 75.0 °C for the solid's drop instead of (T_s − T_f); 0.894 comes from keeping the masses in grams against specific heats quoted per kilogram.

**2. C** — *Specific heat from the gradient of Q against m(T_s − T_f).* Heat lost = heat gained gives Q = c_s · m_s(T_s − T_f), so the gradient of the line is c_s. Gradient = (560 − 200)/(0.60 − 0.20) = 360/0.40 = 900 J/kg·°C. The line has intercept 200 − 900 × 0.20 = +20 J, so it does not pass through the origin: a little heat was gained from elsewhere.

1000 J/kg·°C is Q/x at the first point alone, which wrongly assumes the line goes through the origin; 933 J/kg·°C is the same mistake at the second point; 1.11 × 10⁻³ is the reciprocal of the gradient.

**3. A** — *Percentage uncertainty in a small temperature difference.* The rise is 17.0 − 16.1 = 0.9 °C. Each reading carries ±0.05 °C and a difference adds the absolute uncertainties, so the rise is 0.9 ± 0.1 °C. Percentage uncertainty = 0.1/0.9 × 100 = 11%. This is why a tiny rise is the weakest number in the experiment and passes straight into c_s.

5.6% counts the uncertainty of only one of the two readings; 0.6% divides 0.1 °C by T_f = 17.0 °C instead of by the rise; 0.3% divides 0.05 °C by T_r.

**4. D** — *Water equivalent of a calorimeter.* Heat capacity of the calorimeter = m_c c_c = 0.040 × 387 = 15.5 J/°C. A mass m of water with the same heat capacity satisfies m × 4186 = 15.5, so m = 15.5/4186 = 3.70 × 10⁻³ kg = 3.7 g. In the energy balance the calorimeter counts as 3.7 g of extra water.

15.5 g quotes the heat capacity in J/°C as if it were a mass; 40.0 g is the calorimeter's own mass, ignoring that copper stores far less heat per gram than water; 3700 g reads the 3.70 × 10⁻³ kg as 3.70 kg.

**5. C** — *Effect of heat lost in transfer on the mixtures result.* The block reaches the water below the recorded T_s, so the heat that actually arrives is less than m_s c_s (T_s − T_f) credits it with. In c_s = (m_w c_w + m_c c_c)(T_f − T_r)/[m_s (T_s − T_f)] the numerator is the real (smaller) heat gained while the denominator uses the overstated drop, so c_s comes out too low. The remedy is the tongs: transfer fast and submerge at once.

The loss does not cancel, because it appears in only one side of the balance; m_s is weighed and unaffected; (T_f − T_r) is understated, not overstated, so c_s cannot come out high.
