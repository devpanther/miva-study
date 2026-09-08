# Monday — MTH_102 nightly check

*Conceptual session on Week 12 applications of integration, exactly as the deck builds them.*
*12 questions, straight after the hour. Score out of 12.*

**1.** A body moves with velocity v(t) = 3t² + 2 m/s. Find the distance it travels in the first 2 seconds.
A. 14 m
B. 12 m
C. 28 m
D. 10 m

**2.** A body has velocity v(t) = 4t − 1 m/s and its initial displacement is x(0) = 3 m. Find its displacement function x(t).
A. x(t) = 2t² − t − 3
B. x(t) = 2t² − t
C. x(t) = 4t² − t + 3
D. x(t) = 2t² − t + 3

**3.** A vertical rectangular gate 4 m wide and 3 m deep has its top edge level with the water surface. Water has density 1000 kg/m³ and g = 9.8 m/s². Which integral gives the fluid force on the gate?
A. ∫₀³ 9800·x·4 dx
B. ∫₀³ 9800·4 dx
C. ∫₀⁴ 9800·x·3 dx
D. ∫₀³ 1000·x·4 dx

**4.** A force F(x) = 6x newtons acts on an object as it moves along a line from x = 0 to x = 3 m. Find the work done.
A. 54 J
B. 18 J
C. 27 J
D. 9 J

**5.** A firm's marginal revenue is MR(Q) = 60 − 2Q. Find the extra revenue earned when sales rise from Q = 5 to Q = 10 units.
A. 225
B. 500
C. 40
D. 200

**6.** A graph of a factory's discharge rate r(t), in tonnes per day, is a straight line rising from (0, 0) to (5, 10). Find the total amount discharged in the first 5 days.
A. 10 t
B. 50 t
C. 12.5 t
D. 25 t

**7.** A resource is consumed at the rate 20e^(0.05t) thousand tonnes per year, t years from now. Find the total consumed over the next 10 years.
A. 400e^0.5 ≈ 659.5
B. e^0.5 − 1 ≈ 0.65
C. 400(e^0.5 − 1) ≈ 259.5
D. 20e^0.5 ≈ 33.0

**8.** A body's velocity has antiderivative F(t), so its position is x(t) = F(t) + C for some constant C. What is the net displacement of the body between t = 1 and t = 4?
A. F(4) − F(1) + C
B. F(4) − F(1)
C. F(4) + C
D. F(4) − F(1) + 2C

**9.** Water flows into an empty tank at the rate 4t litres per minute, where t is in minutes. Find the time at which the tank holds 200 litres.
A. t = 50 minutes
B. t ≈ 14.1 minutes
C. t = 10 minutes
D. t ≈ 7.1 minutes

**10.** A resource is consumed at the rate C′(t) = 50e^(0.1t) thousand tonnes per year, t years after 2020, and nothing has been consumed at t = 0. Find the model C(t).
A. C(t) = 50e^(0.1t) − 50
B. C(t) = 500e^(0.1t) − 500
C. C(t) = 5e^(0.1t) − 5
D. C(t) = 500e^(0.1t)

**11.** The rate of investment is I(t) = 3√t thousand naira per year. Find the capital accumulated between the 1st and the 4th years.
A. 3 thousand naira
B. 16 thousand naira
C. 31.5 thousand naira
D. 14 thousand naira

**12.** A dam face has its top edge at the water surface. In F = ∫ₐᵇ w·h(x)·L(x)dx, what does w·h(x) stand for, and why is an integral needed at all?
A. The pressure at depth h(x); pressure grows with depth, so no single pressure covers the whole face
B. The weight of the water sitting above the strip; that weight changes along the face
C. The force on the strip; the strips have different widths L(x)
D. The pressure at the base of the dam; only the width L(x) varies with depth

---

## Answers

**1. B** — *Distance as the integral of velocity.* Velocity is the rate of change of position, so the distance covered from t = 0 to t = 2 is the integral of v: ∫₀²(3t² + 2)dt = [t³ + 2t]₀² = (8 + 4) − 0 = 12 m. v > 0 throughout, so this is also the total distance.

14 m is v(2), the speed at the end, not a distance; 28 m multiplies that final speed by 2 s as if the speed were constant; 10 m integrates the constant 2 as 2 instead of 2t.

**2. D** — *Displacement function from velocity and an initial condition.* x(t) = ∫(4t − 1)dt = 2t² − t + C. Substituting t = 0 kills the first two terms, so x(0) = C = 3 and x(t) = 2t² − t + 3.

2t² − t − 3 has the sign of the constant wrong; 2t² − t drops the constant and gives x(0) = 0, contradicting the data; 4t² − t + 3 forgets to divide 4t by the new power 2.

**3. A** — *Setting up the fluid-force integral.* F = ∫ₐᵇ w·h(x)·L(x)dx with weight density w = ρg = 1000 × 9.8 = 9800 N/m³, depth h(x) = x measured down from the surface (0 to 3 m), and width L(x) = 4 m at every depth. So F = ∫₀³ 9800·x·4 dx (= 176 400 N).

∫₀³ 9800·4 dx leaves out the depth, treating the pressure as the same at every level; ∫₀⁴ 9800·x·3 dx swaps the width and the depth; ∫₀³ 1000·x·4 dx uses ρ instead of ρg and is 9.8 times too small.

**4. C** — *Work done by a variable force.* The force changes with position, so W = ∫₀³F(x)dx = ∫₀³6x dx = [3x²]₀³ = 27 J.

54 J is F(3) × 3, the final force times the distance, which is only valid for a constant force; 18 J integrates the constant 6 and forgets the x; 9 J integrates 6x to x² instead of 3x².

**5. A** — *Integrating a marginal function over an interval.* Marginal revenue is the rate of change of total revenue, so the extra revenue is ∫₅¹⁰(60 − 2Q)dQ = [60Q − Q²]₅¹⁰ = (600 − 100) − (300 − 25) = 500 − 275 = 225.

500 evaluates the antiderivative at Q = 10 only; 40 is MR(10), the rate at the end; 200 multiplies that rate by the 5 extra units as if MR were constant.

**6. D** — *Total from a rate read off a graph.* The line through (0, 0) and (5, 10) is r(t) = 2t. The total discharged is the integral of the rate, ∫₀⁵2t dt = [t²]₀⁵ = 25 tonnes, which is the area of the triangle under the line (½ × 5 × 10).

10 t is the rate on day 5, not a total; 50 t is the rectangle 5 × 10, treating the final rate as if it had applied all along; 12.5 t halves the triangle a second time.

**7. C** — *Total from an exponential rate.* Total = ∫₀¹⁰20e^(0.05t)dt. Since ∫e^(kt)dt = e^(kt)/k, this is [20e^(0.05t)/0.05]₀¹⁰ = [400e^(0.05t)]₀¹⁰ = 400e^0.5 − 400 = 400(e^0.5 − 1) ≈ 259.5 thousand tonnes.

400e^0.5 forgets to subtract the value at the lower limit (e⁰ = 1, not 0); e^0.5 − 1 multiplies by 0.05 instead of dividing by it; 20e^0.5 is the rate at t = 10, not a total.

**8. B** — *The constant cancels in a definite integral.* Net displacement is the change in position: x(4) − x(1) = (F(4) + C) − (F(1) + C) = F(4) − F(1), which is exactly ∫₁⁴v(t)dt. The constant cancels, so a definite integral never needs an initial condition.

F(4) − F(1) + C subtracts the constant only once; F(4) + C is the position at t = 4, not the change in position; F(4) − F(1) + 2C adds the constant at both ends instead of cancelling it.

**9. C** — *Finding the time for an accumulated total.* The volume held after t minutes is the integral of the rate: V(t) = ∫₀ᵗ4u du = [2u²]₀ᵗ = 2t². Set 2t² = 200, so t² = 100 and t = 10 minutes, discarding the negative root. Check: V(10) = 2(100) = 200 L.

t = 50 sets the rate itself equal to 200; t ≈ 14.1 solves t² = 200 and loses the factor 2; t ≈ 7.1 uses V(t) = 4t², raising the power without dividing by it.

**10. B** — *Building an accumulation model from an exponential rate.* Since ∫e^(kt)dt = e^(kt)/k, C(t) = ∫50e^(0.1t)dt = (50/0.1)e^(0.1t) + c = 500e^(0.1t) + c. The condition C(0) = 0 with e⁰ = 1 gives 0 = 500 + c, so c = −500 and C(t) = 500e^(0.1t) − 500, also written 500(e^(0.1t) − 1).

5e^(0.1t) − 5 multiplies by 0.1 instead of dividing; 50e^(0.1t) − 50 never divides at all; 500e^(0.1t) omits c and gives C(0) = 500, contradicting the condition.

**11. D** — *Capital growth as the integral of the rate of investment.* K = ∫₁⁴3t^(1/2)dt. Raise the power to 3/2 and divide by 3/2: 3 × (2/3)t^(3/2) = 2t^(3/2). So K = [2t^(3/2)]₁⁴ = 2(8) − 2(1) = 14 thousand naira, using 4^(3/2) = (√4)³ = 8.

3 substitutes the limits into I(t) rather than the antiderivative; 16 forgets the lower limit; 31.5 multiplies by 3/2 instead of dividing.

**12. A** — *Why fluid force needs an integral.* Water pressure at depth h is w·h, where w = ρg is the weight density (about 9800 N/m³ for water). The face spans every depth from 0 at the surface to its full height, so there is no one pressure to multiply by the area. Cutting the face into thin horizontal strips of width L(x) at depth h(x) makes the pressure essentially constant on each strip, so its force is w·h(x)·L(x)dx and the integral adds them up.

The force on the strip is the whole integrand, not w·h(x), so the third option is off by the factor L(x)dx; the second confuses pressure with weight; the fourth freezes the pressure at one depth, which is exactly what the integral avoids.
