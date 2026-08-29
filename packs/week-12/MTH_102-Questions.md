# MTH_102 — Week 12 Questions

*Application of integration to real-life problems: kinematics, fluid force, work, marginal analysis, environmental science. Twelve multiple choice, three short answer. Every number comes from the lecturer's own seven examples. Answers at the bottom — work them before you look.*

## Multiple choice

**1.** A car has v(t) = 2t² + 6t + 1 kmh⁻¹. The distance travelled in the first 5 hours is
A. 163.3 km
B. 81 km
C. 405 km
D. 330 km

**2.** A body has v(t) = 6t² − 6t − 12 m/s with initial displacement −4 m. Its displacement function is
A. 2t³ − 3t² − 12t
B. 2t³ − 3t² − 12t − 4
C. 2t³ − 3t² − 12t + 4
D. 12t − 6

**3.** For that same body, x(3) =
A. 24 m
B. −9 m
C. −13 m
D. −5 m

**4.** The net displacement of that body in the first 5 seconds is
A. 111 m
B. 155 m
C. 108 m
D. 115 m

**5.** In the fluid-force formula, the weight density of water is
A. ρg = (1000)(9.8) = 9800
B. ρ = 1000
C. g = 9.8
D. ρgh = (1000)(9.8)(100) = 980 000

**6.** A rectangular dam is 100 m high and 300 m wide, top level with the surface. The fluid force on its face is
A. 2.94 × 10¹⁰ N
B. 1.47 × 10¹⁰ N
C. 2.94 × 10⁶ N
D. 1.47 × 10⁸ N

**7.** A 60 m rope of mass 66 g/m hangs over a cliff. After x m has been pulled up, the force function is
A. 646.8(60 − x)
B. 0.6468(60)
C. 0.6468(60 − x)
D. 0.6468x

**8.** The work done in pulling that whole rope up is
A. 2328.48 J
B. 1800 J
C. 3492.72 J
D. 1164.24 J

**9.** MR = 100 + 20Q + 3Q² and TR(2) = 260. The total revenue function is
A. 100Q + 10Q² + Q³ + 12
B. 100Q + 10Q² + Q³ + 260
C. 100Q + 20Q² + 3Q³ + 12
D. 100Q + 10Q² + Q³

**10.** The rate of investment is I(t) = 6√t. The capital growth between the 4th and 9th years is
A. 4
B. 76
C. 108
D. 6

**11.** D(Q) = 1000 − 25Q and S(Q) = 100 + Q². The equilibrium is
A. Q₀ = −45, P₀ = 2125
B. Q₀ = 20, P₀ = 400
C. Q₀ = 20, P₀ = 500
D. Q₀ = 20, P₀ = 1000

**12.** For that market, the producer surplus is
A. 8000
B. 2667
C. 5000
D. 5333

## Short answer

**13.** In Example 2 the constant is C = −4 in part (a), but no constant appears anywhere in part (c). Explain both facts, and say exactly what number you get, and what it means, if you wrongly carry the −4 into part (c).

**14.** Set up the fluid-force integral for her dam from scratch, saying what each of w, h(x) and L(x) stands for, evaluate it in full, and state the unit error printed on that slide.

**15.** Write down her copper model, then find the year the 750 thousand metric tons are exhausted, showing the logarithm step. There is a misprint in the last line of that slide — identify it and show why the printed value 15.989 is nevertheless correct.

---

## Answers

**1. A.** ∫₀⁵(2t² + 6t + 1)dt = [2t³/3 + 3t² + t]₀⁵ = 83.3 + 75 + 5 = 163.3. B is v(5) = 81, the speed at the end, not a distance. C is that speed multiplied by 5 hours, which would only be valid if v were constant. D antidifferentiates 2t² to 2t³ without dividing by 3, giving 250 + 75 + 5.

**2. B.** ∫(6t² − 6t − 12)dt = 2t³ − 3t² − 12t + C, and x(0) = C = −4. A drops the constant, so it gives x(0) = 0, contradicting the data. C solves x(0) = −4 with the wrong sign. D differentiates the velocity instead of integrating it.

**3. C.** 2(27) − 3(9) − 12(3) − 4 = 54 − 27 − 36 − 4 = −13. A is v(3) = 54 − 18 − 12 = 24, substituting into the velocity instead of the displacement. B forgets the −4. D uses C = +4.

**4. D.** ∫₀⁵(6t² − 6t − 12)dt = [2t³ − 3t² − 12t]₀⁵ = 250 − 75 − 60 = 115. A is x(5) = 111 — the body's *position*, obtained by carrying the −4 through and subtracting nothing. B is the total distance, 20 m backwards then 135 m forwards; "net" means the signed sum, not the sum of magnitudes. C is v(5) = 108.

**5. A.** Weight density is w = ρg, density times gravity: 1000 × 9.8 = 9800. B and C each take one factor alone. D multiplies in the depth as well, which gives the *pressure at the base* — a different quantity, and the very thing the integral exists to avoid using. (The slide prints the unit as N/m²; it should be N/m³.)

**6. B.** F = ∫₀¹⁰⁰(9800)(x)(300)dx = 2.94 × 10⁶[x²/2]₀¹⁰⁰ = 2.94 × 10⁶ × 5000 = 1.47 × 10¹⁰. A forgets to divide by 2 — equivalently, it applies the full-depth pressure to the whole face. C stops at the constant 9800 × 300 and never integrates. D uses [x/2] instead of [x²/2], losing a factor of 100.

**7. C.** The rope still hanging is (60 − x) m, its mass is 0.066(60 − x) kg, and weight = mass × g gives 9.8(0.066)(60 − x) = 0.6468(60 − x). A never converts 66 g/m to 0.066 kg/m, so it is 1000 times too big. B holds the hanging length at 60 m, which makes the force constant and defeats the whole example. D uses the length already pulled up instead of the length still hanging.

**8. D.** W = ∫₀⁶⁰0.6468(60 − x)dx = 0.6468[60x − x²/2]₀⁶⁰ = 0.6468(3600 − 1800) = 1164.24. A is the starting force 38.8 N times the full 60 m, valid only for a constant force. B integrates but drops the coefficient 0.6468. C adds x²/2 instead of subtracting it.

**9. A.** ∫(100 + 20Q + 3Q²)dQ = 100Q + 10Q² + Q³ + C; TR(2) = 200 + 40 + 8 + C = 248 + C = 260, so C = 12. B copies 260 straight into C instead of solving the equation. C fails to divide by the new powers, keeping 20 and 3. D drops the constant, which gives TR(2) = 248, not 260.

**10. B.** 6∫₄⁹t^(1/2)dt = 4t^(3/2)|₄⁹ = 4(27) − 4(8) = 108 − 32 = 76. A is the value printed on the slide, which is a misprint — the coefficient 4 left where the answer should be. C evaluates the upper limit only and forgets to subtract. D is I(9) − I(4) = 18 − 12, substituting into the integrand instead of the antiderivative.

**11. C.** 1000 − 25Q = 100 + Q² gives Q² + 25Q − 900 = 0, with roots 20 and −45; take the positive one, Q₀ = 20, then P₀ = D(20) = 1000 − 500 = 500 (and S(20) = 100 + 400 = 500 confirms it). A takes the negative root, which is a meaningless quantity. B drops the +100 in S(Q). D quotes D(0) = 1000, the price at zero quantity, instead of the price at equilibrium.

**12. D.** PS = ∫₀²⁰(500 − 100 − Q²)dQ = [400Q − Q³/3]₀²⁰ = 8000 − 2666.67 = 5333.33 ≈ 5333. A drops the −Q³/3 term. B evaluates only that term. C is the consumer surplus, 5000 — the two are close in size, which is precisely why they are easy to swap.

**13.** Part (a) is an **indefinite** integral: x(t) = ∫v dt = 2t³ − 3t² − 12t + C is a whole family of displacement functions, one for every real C, and they differ only in where the origin sits. The physical datum "initial displacement is −4 m" means x(0) = −4; substituting t = 0 kills the first three terms, so x(0) = C, and C = −4. Part (c) is a **definite** integral, ∫₀⁵v dt = x(5) − x(0), and any constant cancels: (F(5) + C) − (F(0) + C) = F(5) − F(0) = 250 − 75 − 60 = 115 m. That is why the slide writes [2t³ − 3t² − 12t]₀⁵ with no −4 in sight. If you carry the −4 through and add it once, you get 250 − 75 − 60 − 4 = **111 m**, which is x(5) — the body's *position* after 5 seconds, measured from the origin. It is a perfectly real number, but it answers a different question: net displacement is a *change* in position and is blind to where the origin was placed.

**14.** Let w be the weight density of the fluid, h(x) the depth of the horizontal strip at position x below the surface, and L(x) the width of the dam face at that strip. For water, w = ρg = (1000)(9.8) = 9800 N/m³. The top of the dam is level with the surface, so the depth runs from 0 to 100 and h(x) = x; the face is rectangular, so L(x) = 300 for every x. Then
F = ∫ₐᵇ w·h(x)·L(x)dx = ∫₀¹⁰⁰(9800)(x)(300)dx = 2.94 × 10⁶∫₀¹⁰⁰ x dx = 2.94 × 10⁶[x²/2]₀¹⁰⁰ = 2.94 × 10⁶(5000 − 0) = **1.47 × 10¹⁰ N**.
The integral is necessary because the pressure w·h grows with depth, so no single pressure applies to the whole face; each thin strip is at essentially one depth, and the integral adds the strips. **The slide prints the weight density as 9800 N/m², which is the wrong unit** — ρg has units (kg/m³)(m/s²) = N/m³. The number 9800 and the final answer are both correct.

**15.** Consumption runs at C′(t) = 35e^(0.035t) thousand metric tons per year, so
C(t) = ∫35e^(0.035t)dt = (35/0.035)e^(0.035t) + c = 1000e^(0.035t) + c.
Nothing has been consumed at the start, C(0) = 0, and e⁰ = 1, so 0 = 1000 + c and c = −1000. The model is **C(t) = 1000e^(0.035t) − 1000**.
Setting C(t) = 750: 750 = 1000e^(0.035t) − 1000, so 1000e^(0.035t) = 1750, so e^(0.035t) = 1.750. Taking natural logs, 0.035t = ln(1.750) = 0.5596, so t = 0.5596/0.035 = **15.989 ≈ 16 years**, and 2005 + 16 = **2021**.
**The misprint is in the denominator: the slide writes t = ln(1.750)/0.0035, with an extra zero.** It must be 0.035, the coefficient in the exponent, because taking logs of e^(0.035t) gives 0.035t. The printed value 15.989 is correct precisely because it was computed with 0.035; the printed 0.0035 would give 159.89 years and the year 2165, which is not what the slide concludes.
