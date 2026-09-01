# Thursday — MTH_102 nightly check

*Computation pass on Week 12: evaluating her seven worked examples and close variants of them.*

*∫₀⁵(2t² + 6t + 1)dt for the car.*

*x(t) = 2t³ − 3t² − 12t − 4, and the 115 m net displacement.*

*The dam force 2.94 × 10⁶[x²/2]₀¹⁰⁰. The rope work 0.6468[60x − x²/2]₀⁶⁰.*

*TR from MR, with TR(2) = 260.*

*The capital growth 4t^(3/2)|₄⁹ that the slide mis-states.*

*And the surplus pair CS = 5000 and PS ≈ 5333, for D(Q) = 1000 − 25Q against S(Q) = 100 + Q².*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Evaluate ∫₀⁵(2t² + 6t + 1)dt, the distance the car covers in the first 5 hours.
A. 163.3 km
B. 81 km
C. 405 km
D. 330 km

**2.** Using the same car velocity v(t) = 2t² + 6t + 1, how far does it travel in the first 3 hours?
A. 37 km
B. 48 km
C. 84 km
D. 111 km

**3.** A body has v(t) = 6t² − 6t − 12 m/s with initial displacement −4 m. Find x(3).
A. 24 m
B. −9 m
C. −13 m
D. −5 m

**4.** For that same body, evaluate ∫₀⁵(6t² − 6t − 12)dt.
A. 111 m
B. 155 m
C. 108 m
D. 115 m

**5.** A 60 m rope of mass 66 g/m hangs over a cliff. Evaluate W = ∫₀⁶⁰ 0.6468(60 − x)dx.
A. 1164.24 J
B. 2328.48 J
C. 1800 J
D. 3492.72 J

**6.** For the 100 m by 300 m dam with its top at the water surface, evaluate F = ∫₀¹⁰⁰(9800)(x)(300)dx.
A. 2.94 × 10¹⁰ N
B. 1.47 × 10¹⁰ N
C. 2.94 × 10⁶ N
D. 1.47 × 10⁸ N

**7.** MR = 100 + 20Q + 3Q² and TR(2) = 260. Find the constant in TR(Q).
A. C = 260
B. C = 0
C. C = 12
D. C = 20

**8.** For D(Q) = 1000 − 25Q and S(Q) = 100 + Q², with Q₀ = 20 and P₀ = 500, evaluate the consumer surplus.
A. 10 000
B. 5333
C. 2500
D. 5000

**9.** Evaluate the capital growth K = ∫₄⁹ 6√t dt in full. State what the slide prints as the answer and why that is wrong.
*(short answer)*

**10.** For D(Q) = 1000 − 25Q and S(Q) = 100 + Q², find the equilibrium quantity and price and then compute the producer surplus, showing the quadratic in full.
*(short answer)*

**11.** Copper is consumed at the rate 35e^(0.035t) thousand metric tons per year, t years after 2005. Build the cumulative model and find the year in which 750 thousand metric tons have been consumed, showing the logarithm step. Identify the misprint on that slide.
*(short answer)*

**12.** Using her rope set-up unchanged, how much work is done in pulling up only the first 30 m of the 60 m rope? Show the working and say why the answer is more than half of 1164.24 J.
*(short answer)*

## Answers

**1. A** — The antiderivative is 2t³/3 + 3t² + t, so at t = 5 it is 250/3 + 75 + 5 = 83.33 + 80 = 163.33, and the lower limit contributes 0. Option 2 is v(5) = 50 + 30 + 1 = 81, the speed at the end rather than the distance. Option 3 is that speed times 5 hours, which would only be right if the car held a constant 81 km/h. Option 4 antidifferentiates 2t² as 2t³ instead of 2t³/3, giving 250 + 75 + 5.

**2. B** — [2t³/3 + 3t² + t]₀³ = 2(27)/3 + 3(9) + 3 = 18 + 27 + 3 = 48 km, and the lower limit again contributes 0. Option 1 is v(3) = 18 + 18 + 1 = 37, the speed at the end rather than the distance. Option 3 antidifferentiates 2t² as 2t³ without dividing by 3, giving 54 + 27 + 3. Option 4 is v(3) multiplied by 3 hours, which assumes a constant speed the car never has. The habit that protects you is hers: write the full bracket, substitute term by term, then add.

**3. C** — x(t) = 2t³ − 3t² − 12t − 4, so x(3) = 2(27) − 3(9) − 12(3) − 4 = 54 − 27 − 36 − 4 = −13 m. Option 1 is v(3) = 54 − 18 − 12 = 24, substituting into the velocity instead of the displacement. Option 2 forgets the −4, i.e. never used the initial condition. Option 4 solves x(0) = −4 with the wrong sign and uses C = +4.

**4. D** — [2t³ − 3t² − 12t]₀⁵ = 250 − 75 − 60 − 0 = 115 m. Option 1 is x(5) = 111: the −4 was carried in and subtracted only once, giving the position rather than the change. Option 2 is the total distance — the body goes back 20 m to t = 2 and then forward 135 m — which is not what a signed integral returns. Option 3 is v(5) = 150 − 30 − 12 = 108, the integrand at the upper limit.

**5. A** — 0.6468[60x − x²/2]₀⁶⁰ = 0.6468(3600 − 1800) = 0.6468 × 1800 = 1164.24 J. Option 2 is the starting force 0.6468 × 60 = 38.8 N multiplied by the whole 60 m, valid only for a constant force and exactly double the truth because F is linear. Option 3 evaluates the bracket correctly but never multiplies by the coefficient 0.6468. Option 4 adds x²/2 instead of subtracting it, giving 0.6468(3600 + 1800).

**6. B** — Pull the constants out: 9800 × 300 = 2.94 × 10⁶, then [x²/2]₀¹⁰⁰ = 10000/2 = 5000, so F = 2.94 × 10⁶ × 5000 = 1.47 × 10¹⁰ N. Option 1 omits the division by 2 — the same number you get by applying the deepest pressure to the whole face, which overcounts every strip above the base. Option 3 stops at the constant and never integrates. Option 4 uses [x/2] in place of [x²/2] and so loses a factor of 100.

**7. C** — TR(Q) = 100Q + 10Q² + Q³ + C, and TR(2) = 200 + 40 + 8 + C = 248 + C; setting 248 + C = 260 gives C = 12. Option 1 copies the given value straight into C, which is the standard error whenever the condition is given away from Q = 0. Option 2 ignores the condition altogether, which would make TR(2) = 248, not 260. Option 4 loses the Q³ term when substituting, getting 240 + C = 260 — a reminder to check that every term of the antiderivative is evaluated, not just the ones you wrote first.

**8. D** — CS = ∫₀²⁰(1000 − 25Q − 500)dQ = ∫₀²⁰(500 − 25Q)dQ = [500Q − 25Q²/2]₀²⁰ = 10 000 − 5000 = 5000. Option 1 keeps only the first term, forgetting −25Q²/2. Option 2 is the producer surplus, 16000/3 ≈ 5333 — the two are close in size and easy to swap, so always check which bracket you formed. Option 3 halves the answer, typically by writing 25Q²/2 as 25Q²/4 or by using an upper limit of 10.

**9.** A good answer rewrites first: 6√t = 6t^(1/2), so n = 1/2, the new power is 3/2, and dividing by 3/2 means multiplying by 2/3 — giving 6 × (2/3) t^(3/2) = 4t^(3/2). Then evaluate: K = 4t^(3/2)|₄⁹ = 4(9^(3/2)) − 4(4^(3/2)). Since 9^(3/2) = (√9)³ = 3³ = 27 and 4^(3/2) = (√4)³ = 2³ = 8, K = 4(27) − 4(8) = 108 − 32 = 76. The slide prints the final answer as 4, which is simply the coefficient of t^(3/2) left standing where the number should be; every earlier line of the slide is correct and those lines give 76. Quote 76 and say so plainly, because this misprint will otherwise be copied into an exam script. A student answering 6 has substituted into the integrand, I(9) − I(4) = 18 − 12, instead of into the antiderivative.

**10.** A good answer sets D(Q) = S(Q): 1000 − 25Q = 100 + Q², so Q² + 25Q − 900 = 0. By the formula, Q = (−25 ± √(625 + 3600))/2 = (−25 ± √4225)/2 = (−25 ± 65)/2, giving Q = 20 or Q = −45; a negative quantity is meaningless, so Q₀ = 20. Then P₀ = D(20) = 1000 − 500 = 500, checked against S(20) = 100 + 400 = 500. The producer surplus is PS = ∫₀²⁰[P₀ − S(Q)]dQ = ∫₀²⁰(500 − 100 − Q²)dQ = ∫₀²⁰(400 − Q²)dQ = [400Q − Q³/3]₀²⁰ = 8000 − 8000/3 = 16000/3 = 5333.33, which the slide rounds to 5333. Credit for keeping the bracket the right way round — P₀ minus S(Q) for producers, D(Q) minus P₀ for consumers — and for discarding the negative root explicitly rather than silently.

**11.** A good answer integrates the rate: C(t) = ∫35e^(0.035t)dt = (35/0.035)e^(0.035t) + c = 1000e^(0.035t) + c, noting that ∫e^(kt)dt = e^(kt)/k means dividing by k, and 35 ÷ 0.035 = 1000. Applying C(0) = 0 with e⁰ = 1 gives 0 = 1000 + c, so c = −1000 and C(t) = 1000e^(0.035t) − 1000. Then set C(t) = 750: 1000e^(0.035t) = 1750, so e^(0.035t) = 1.750; taking natural logs, 0.035t = ln(1.750) = 0.5596, so t = 0.5596/0.035 = 15.989 ≈ 16 years, and 2005 + 16 = 2021. The misprint is in the slide's last line, which writes the denominator as 0.0035 rather than 0.035; the denominator must be the coefficient in the exponent, because that is what taking logs leaves behind. The printed value 15.989 is right because it was computed with 0.035 — with 0.0035 it would read 159.89 years, i.e. the year 2165, which contradicts the slide's own conclusion.

**12.** A good answer keeps F(x) = 0.6468(60 − x) and changes only the upper limit: W = ∫₀³⁰ 0.6468(60 − x)dx = 0.6468[60x − x²/2]₀³⁰ = 0.6468(1800 − 450) = 0.6468 × 1350 = 873.18 J. It should then explain the comparison: the force is largest at the start, 38.8 N, and falls linearly to 0.6468(30) = 19.4 N by the halfway point and to 0 at the end, so the first half of the haul is done against the heavier part of the load. Numerically the first 30 m takes 873.18 J and the last 30 m only 1164.24 − 873.18 = 291.06 J, a ratio of exactly 3 to 1 — which is what a linearly decreasing force always gives. The examinable point is that only the limits change; the force function is built once from the physics and then reused.
