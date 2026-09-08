# Thursday — MTH_102 nightly check

*Computation pass on Week 12: evaluating her seven worked examples and close variants of them.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** A resource is consumed at 40e^(0.02t) thousand tonnes per year, t years after 2010, with C(0) = 0. In which year is a reserve of 1000 thousand tonnes exhausted?
A. 2213 (t ≈ 203 years)
B. 2065 (t ≈ 54.9 years)
C. 2045 (t ≈ 34.7 years)
D. 2030 (t ≈ 20.3 years)

**10.** The demand function is D(Q) = 250 − 5Q and the supply function is S(Q) = 100 + Q². Find the producer surplus at equilibrium.
A. 2000/3 ≈ 666.7
B. 250
C. 1000
D. 2750/3 ≈ 916.7

**11.** A body has velocity v(t) = 3t² − 6t m/s and initial displacement x(0) = 5 m. Find x(t) and the displacement between t = 1 and t = 3.
A. x(t) = t³ − 3t² + 5, displacement 5 m
B. x(t) = t³ − 3t², displacement 2 m
C. x(t) = t³ − 3t² + 5, displacement 2 m
D. x(t) = t³ − 3t² + 5, displacement 8 m

**12.** In CS = ∫₀^Q₀[D(Q) − P₀]dQ and PS = ∫₀^Q₀[P₀ − S(Q)]dQ, why do both integrals stop at Q₀?
A. Beyond Q₀ the demand and supply curves cross, so the two integrands would cancel
B. Only Q₀ units are traded: past it no consumer would buy and no producer would sell at P₀
C. Q₀ is where D(Q) reaches zero, so there is nothing further to add
D. The integrals converge up to Q₀ and diverge beyond it

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

**9. D** — *Exhaustion time from an exponential consumption model.* C(t) = ∫40e^(0.02t)dt = (40/0.02)e^(0.02t) + c = 2000e^(0.02t) + c, and C(0) = 0 gives c = −2000. Set 2000e^(0.02t) − 2000 = 1000, so e^(0.02t) = 1.5 and 0.02t = ln 1.5 = 0.4055, giving t = 20.27 years, that is the year 2030.

2213 divides ln 1.5 by 0.002; 2065 solves e^(0.02t) = 3 by dividing 3000 by 1000 instead of 2000; 2045 solves e^(0.02t) = 2, taking the reserve as the coefficient 2000.

**10. A** — *Producer surplus after finding equilibrium.* Equilibrium: 250 − 5Q = 100 + Q² gives Q² + 5Q − 150 = (Q + 15)(Q − 10) = 0, so Q₀ = 10 after discarding Q = −15, and P₀ = 250 − 50 = 200 (check S(10) = 200). Then PS = ∫₀¹⁰[P₀ − S(Q)]dQ = ∫₀¹⁰(100 − Q²)dQ = [100Q − Q³/3]₀¹⁰ = 1000 − 1000/3 = 2000/3.

250 is the consumer surplus ∫₀¹⁰[D(Q) − P₀]dQ; 1000 drops the −Q³/3 term; 2750/3 integrates D(Q) − S(Q) instead of P₀ − S(Q).

**11. C** — *Position function from velocity and displacement over an interval.* x(t) = ∫(3t² − 6t)dt = t³ − 3t² + C, and x(0) = C = 5, so x(t) = t³ − 3t² + 5. The displacement from t = 1 to t = 3 is x(3) − x(1) = 5 − 3 = 2 m, the same as ∫₁³(3t² − 6t)dt = [t³ − 3t²]₁³ = 0 − (−2) = 2 m, since the constant cancels.

The second option never uses x(0) = 5 to fix C; 5 m reports the position x(3) rather than a change; 8 m adds x(3) and x(1) instead of subtracting.

**12. B** — *Why the surplus integrals stop at the equilibrium quantity.* D(Q) is what a consumer would have paid for the Q-th unit and S(Q) is the least a producer would accept for it, while every unit actually changes hands at the single price P₀. So D(Q) − P₀ is the saving on a unit and P₀ − S(Q) is the extra received on it. Only Q₀ units are traded, because beyond Q₀ demand has fallen below P₀ and supply costs more than P₀, so there is no further surplus to add.

The curves cross at Q₀ itself, not beyond it; D(Q₀) = P₀, not 0; and these are ordinary definite integrals, so convergence is not the issue.
