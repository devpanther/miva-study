# Thursday — MTH_102 nightly check

*Computation pass on Week 12: evaluating her seven worked examples and close variants of them.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** A body has velocity v(t) = 3t² − 12 m/s. Find its net displacement over the first 3 seconds.
A. 9 m
B. 15 m
C. −9 m
D. 23 m

**2.** A rectangular dam is 40 m high and 150 m wide, with its top level with the water surface. Take ρ = 1000 kg/m³ and g = 9.8 m/s². Find the total fluid force on the dam face.
A. 2.352 × 10⁹ N
B. 1.176 × 10⁹ N
C. 1.2 × 10⁸ N
D. 5.88 × 10⁷ N

**3.** A 40 m rope of mass 80 g/m hangs over the edge of a cliff. Take g = 9.8 m/s². Find the work done in pulling the whole rope up to the top.
A. 627.2 J
B. 1254.4 J
C. 627 200 J
D. 800 J

**4.** A company's marginal revenue is MR(Q) = 200 − 4Q + 3Q², and its total revenue at Q = 1 is 210. Find the total revenue function TR(Q).
A. TR(Q) = 200Q − 2Q² + Q³ + 210
B. TR(Q) = 200Q − 4Q² + 3Q³ + 11
C. TR(Q) = 200Q − 2Q² + Q³
D. TR(Q) = 200Q − 2Q² + Q³ + 11

**5.** The rate of investment is I(t) = 6√t. The capital growth from the 1st year to the Tth year is 104. Find T.
A. T = 27
B. T = 9
C. T = 3
D. T = 26

**6.** The demand function is D(Q) = 90 − 3Q and the market equilibrium is Q₀ = 10, P₀ = 60. Find the consumer surplus.
A. 300
B. 750
C. 150
D. 600

**7.** For a product, the demand function is D(Q) = 200 − 12Q and the supply function is S(Q) = 40 + Q². Find the equilibrium quantity Q₀ and price P₀.
A. Q₀ = 8, P₀ = 104
B. Q₀ = −20, P₀ = 440
C. Q₀ = 8, P₀ = 200
D. Q₀ = 8, P₀ = 136

**8.** A body has velocity v(t) and ∫₀⁴v(t)dt = 0. Which statement must be true?
A. The velocity was zero throughout [0, 4]
B. The body did not move during [0, 4]
C. The total distance travelled was zero
D. The body finished where it started

**9. (show your working)** A resource is consumed at 40e^(0.02t) thousand tonnes per year, t years after 2010, with C(0) = 0. Find the model C(t) for the total consumed, then the year in which a reserve of 1000 thousand tonnes runs out. Show your working.

**10. (show your working)** The demand function is D(Q) = 250 − 5Q and the supply function is S(Q) = 100 + Q². Find the equilibrium quantity and price, then compute the producer surplus. Show your working.

**11. (show your working)** A body has velocity v(t) = 3t² − 6t m/s and initial displacement x(0) = 5 m. Find (a) the displacement function x(t), (b) x(2), and (c) the displacement between t = 1 and t = 3. Show your working.

**12. (show your working)** CS = ∫₀^Q₀[D(Q) − P₀]dQ and PS = ∫₀^Q₀[P₀ − S(Q)]dQ. Explain why D(Q) − P₀ is a gain to consumers, why P₀ − S(Q) is a gain to producers, and why both integrals stop at Q₀.

---

## Answers

**1. C** — *Net displacement as a signed definite integral.* Net displacement = ∫₀³(3t² − 12)dt = [t³ − 12t]₀³ = 27 − 36 = −9 m. The body ends 9 m on the negative side of where it started: v < 0 on (0, 2) (it goes backwards 16 m) and v > 0 on (2, 3) (it comes forward 7 m).

9 m drops the sign, which reverses the direction of the result; 15 m is v(3), the velocity at the end; 23 m is 16 + 7, the total distance travelled, but net displacement is the signed sum, −16 + 7.

**2. B** — *Fluid force on a rectangular dam.* w = ρg = 9800 N/m³, h(x) = x from 0 to 40, L(x) = 150. F = ∫₀⁴⁰9800·x·150 dx = 1 470 000∫₀⁴⁰x dx = 1 470 000[x²/2]₀⁴⁰ = 1 470 000 × 800 = 1.176 × 10⁹ N.

2.352 × 10⁹ N forgets to divide by 2 in [x²/2], equivalent to applying the base pressure to the whole face; 1.2 × 10⁸ N uses ρ = 1000 instead of ρg = 9800; 5.88 × 10⁷ N integrates 1 instead of x, leaving the depth out.

**3. A** — *Work done pulling up a hanging rope.* After x m has been pulled up, (40 − x) m still hangs, with mass 0.08(40 − x) kg (80 g/m = 0.08 kg/m), so the force is F(x) = 9.8 × 0.08 × (40 − x) = 0.784(40 − x) N. W = ∫₀⁴⁰0.784(40 − x)dx = 0.784[40x − x²/2]₀⁴⁰ = 0.784(1600 − 800) = 0.784 × 800 = 627.2 J.

1254.4 J is the starting force 31.36 N times 40 m, valid only for a constant force; 627 200 J never converts grams to kilograms; 800 J integrates (40 − x) but drops the coefficient 0.784.

**4. D** — *Total revenue from marginal revenue with a data point.* TR(Q) = ∫(200 − 4Q + 3Q²)dQ = 200Q − 2Q² + Q³ + C. Then TR(1) = 200 − 2 + 1 + C = 199 + C = 210, so C = 11 and TR(Q) = 200Q − 2Q² + Q³ + 11.

+ 210 copies the given revenue straight into C instead of solving 199 + C = 210; 200Q − 4Q² + 3Q³ + 11 fails to divide by the new powers; leaving the constant off gives TR(1) = 199, not 210.

**5. B** — *Finding the time from a given capital growth.* K = ∫₁ᵀ6t^(1/2)dt = [4t^(3/2)]₁ᵀ = 4T^(3/2) − 4. Set 4T^(3/2) − 4 = 104, so T^(3/2) = 27, and T = 27^(2/3) = (∛27)² = 9. Check: 4(9^(3/2)) − 4 = 4(27) − 4 = 104.

T = 27 stops at T^(3/2) = 27 without undoing the power; T = 3 takes the cube root of 27 but forgets to square it; T = 26 treats t^(3/2) as t and solves 4T − 4 = 100.

**6. C** — *Consumer surplus at a given equilibrium.* CS = ∫₀^Q₀[D(Q) − P₀]dQ = ∫₀¹⁰(90 − 3Q − 60)dQ = ∫₀¹⁰(30 − 3Q)dQ = [30Q − 3Q²/2]₀¹⁰ = 300 − 150 = 150.

300 keeps only the 30Q term and drops the −3Q²/2; 750 is ∫₀¹⁰(90 − 3Q)dQ, the total willingness to pay, with the price P₀ never subtracted; 600 is P₀ × Q₀, the amount actually spent.

**7. A** — *Market equilibrium from demand equals supply.* Set D(Q) = S(Q): 200 − 12Q = 40 + Q², so Q² + 12Q − 160 = 0, (Q + 20)(Q − 8) = 0, giving Q = 8 or Q = −20. A negative quantity is meaningless, so Q₀ = 8. Then P₀ = D(8) = 200 − 96 = 104, and S(8) = 40 + 64 = 104 confirms it.

Q₀ = −20 takes the negative root; P₀ = 200 is D(0), the price at zero quantity; P₀ = 136 evaluates 200 − 8·8, squaring Q in the demand function.

**8. D** — *Interpreting a zero net displacement.* ∫₀⁴v(t)dt = x(4) − x(0) is the net displacement, the change in position. Zero net displacement means x(4) = x(0): the body is back at its starting point. For example, with v(t) = 2t − 4: ∫₀⁴(2t − 4)dt = 16 − 16 = 0, yet the body moves back 4 m and then forward 4 m.

The other three options confuse net displacement with motion: v need not be zero, the body can move, and the distance travelled (8 m in the example) is not zero; only the signed sum of the backward and forward parts is.

**9.** *Exhaustion time from an exponential consumption model.* C(t) = ∫40e^(0.02t)dt = (40/0.02)e^(0.02t) + c = 2000e^(0.02t) + c, and C(0) = 0 gives 0 = 2000 + c, so c = −2000 and C(t) = 2000e^(0.02t) − 2000. Set C(t) = 1000: 2000e^(0.02t) = 3000, so e^(0.02t) = 1.5. Take natural logs: 0.02t = ln 1.5 = 0.4055, so t = 0.4055/0.02 = 20.27 years. Then 2010 + 20.27 gives the year 2030.

Final answer: C(t) = 2000e^(0.02t) − 2000, t ≈ 20.3 years, exhausted in 2030 (also accepted: t = 20.27, or 'about 20 years, in 2030'). The working must show the division by 0.02, the use of C(0) = 0, the isolation of the exponential and the log step. Dividing ln 1.5 by 0.002 gives 203 years and is wrong; solving 2000e^(0.02t) = 1000 (forgetting the −2000) gives a negative time and is wrong.

**10.** *Producer surplus after finding equilibrium.* Equilibrium: 250 − 5Q = 100 + Q², so Q² + 5Q − 150 = 0, (Q + 15)(Q − 10) = 0; discard Q = −15, so Q₀ = 10 and P₀ = D(10) = 250 − 50 = 200 (check: S(10) = 100 + 100 = 200). Producer surplus: PS = ∫₀^Q₀[P₀ − S(Q)]dQ = ∫₀¹⁰(200 − 100 − Q²)dQ = ∫₀¹⁰(100 − Q²)dQ = [100Q − Q³/3]₀¹⁰ = 1000 − 1000/3 = 2000/3 ≈ 666.67.

Final answer: Q₀ = 10, P₀ = 200, PS = 2000/3 ≈ 666.7 (also accepted: 666.67 or 667). The working must show the quadratic, the rejection of the negative root, P₀ from either function, and the integrand P₀ − S(Q) from 0 to Q₀. ∫₀¹⁰(250 − 5Q − 200)dQ = 250 is the consumer surplus, not the producer surplus; 1000 alone forgets the −Q³/3 term.

**11.** *Position function, position at a time and change in position.* (a) x(t) = ∫(3t² − 6t)dt = t³ − 3t² + C, and x(0) = C = 5, so x(t) = t³ − 3t² + 5. (b) x(2) = 8 − 12 + 5 = 1 m. (c) Displacement from t = 1 to t = 3 is x(3) − x(1) = (27 − 27 + 5) − (1 − 3 + 5) = 5 − 3 = 2 m, or equivalently ∫₁³(3t² − 6t)dt = [t³ − 3t²]₁³ = 0 − (−2) = 2 m; the constant 5 cancels.

Final answer: x(t) = t³ − 3t² + 5, x(2) = 1 m, displacement 2 m. The working must find C from x(0) = 5 and either subtract positions or evaluate the definite integral without the constant. x(3) = 5 alone is a position, not a displacement; v(2) = 0 is not x(2).

**12.** *Meaning of the surplus integrands and their limits.* D(Q) is the price a consumer would have been willing to pay for the Q-th unit, but every unit sells at the single market price P₀, so D(Q) − P₀ is the saving on that unit; adding those savings over all units sold, from 0 to Q₀, gives the consumer surplus. S(Q) is the lowest price at which a producer would supply the Q-th unit, but it is sold at P₀, so P₀ − S(Q) is the extra received on that unit; summing from 0 to Q₀ gives the producer surplus. Both stop at Q₀ because only Q₀ units are actually traded: beyond it D(Q) < P₀ (no consumer would buy at P₀) and S(Q) > P₀ (no producer would sell at P₀), so there are no further units and no further surplus.

A correct answer identifies D(Q) as willingness to pay, S(Q) as the minimum acceptable price, P₀ as the common price actually paid, and Q₀ as the quantity actually traded.
