# MTH_102 — Week 12 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 13, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** Water flows into a tank at r(t) = 4t + 2 litres per minute. The volume added during the first 5 minutes is
a) 22 L   b) 50 L   c) 60 L   d) 110 L

**2.** A body starts from rest and has acceleration a(t) = 12t² m/s². Its velocity at t = 2 s is
a) 8 m/s   b) 24 m/s   c) 32 m/s   d) 48 m/s

**3.** A particle has velocity v(t) = 3t² − 6t m/s. The total distance travelled between t = 0 and t = 3 s is
a) 0 m   b) 8 m   c) 4 m   d) 9 m

**4.** The work done by a force F(x) = 3x² N in moving an object from x = 0 to x = 2 m is
a) 8 J   b) 12 J   c) 24 J   d) 4 J

**5.** A spring has spring constant k = 200 N/m. The work done in stretching it 0.2 m from its natural length is
a) 8 J   b) 40 J   c) 20 J   d) 4 J

**6.** A rectangular plate 4 m wide and 2 m deep hangs vertically with its top edge at the water surface (ρg = 9800 N/m³). The fluid force on one face is
a) 19.6 kN   b) 78.4 kN   c) 39.2 kN   d) 156.8 kN

**7.** Marginal cost is MC(q) = 2q + 5 ₦/unit and fixed cost is ₦30. The total cost of producing 10 units is
a) ₦150   b) ₦25   c) ₦250   d) ₦180

**8.** Marginal revenue is MR(q) = 20 − 0.4q ₦/unit. The total revenue from selling 25 units is
a) ₦375   b) ₦500   c) ₦250   d) ₦125

**9.** Demand is p = 30 − q and the market price is p₀ = 10. The consumer surplus is
a) 100   b) 200   c) 400   d) 600

**10.** Supply is p = 2 + 0.5q and the market price is p₀ = 10. The producer surplus is
a) 128   b) 32   c) 64   d) 160

**11.** A pollutant is discharged at rate r(t) = 100 − 5t kg/year. The total discharged over the first 10 years is
a) 750 kg   b) 1000 kg   c) 500 kg   d) 50 kg

**12.** The average value of f(t) = 3t² over the interval [0,4] is
a) 64   b) 48   c) 12   d) 16

## Section B — Short answer (3)

**13.** A body has acceleration a(t) = 2t − 6 m/s² with v(0) = 5 m/s and s(0) = 0. Over 0 ≤ t ≤ 5 s, find v(t), the displacement and the total distance travelled. State clearly where and why the interval must be split.

**14.** A vertical triangular gate has a horizontal base 6 m wide lying **in** the water surface, with its apex 4 m directly below. Taking ρg = 9800 N/m³, write down the width w(h) at depth h, set up the fluid-force integral, evaluate it, and confirm the answer with the centroid formula F = ρg·h̄·A.

**15.** In a market the demand is p = 45 − q² and the supply is p = 5 + 3q. Find the equilibrium quantity and price, then compute the consumer surplus and the producer surplus. Say in one sentence what each of the two numbers measures.

## Answers

**Section A**

1. **c) 60 L** — ∫₀⁵(4t + 2)dt = [2t² + 2t]₀⁵ = 50 + 10; 22 L is r(5), the rate at the end, and 110 L is that rate multiplied by 5.
2. **c) 32 m/s** — v = ∫12t²dt = 4t³, v(0) = 0, so v(2) = 32; 48 is a(2), and 24 comes from antidifferentiating to 6t² instead of 4t³.
3. **b) 8 m** — s = t³ − 3t²; v = 3t(t − 2) vanishes at t = 2, so distance = |s(2) − s(0)| + |s(3) − s(2)| = 4 + 4. The displacement is 0 (option a), and 9 is v(3).
4. **a) 8 J** — W = ∫₀²3x²dx = [x³]₀² = 8; 12 J is F(2) and 24 J is F(2) × 2 m.
5. **d) 4 J** — W = ½kx² = ½(200)(0.04); 8 J drops the ½, and 40 N is the force at full stretch, not the work.
6. **b) 78.4 kN** — F = 9800∫₀²h(4)dh = 9800(4)(2) = 78 400 N; 156.8 kN uses the bottom pressure over the whole area, 19.6 kN forgets the width.
7. **d) ₦180** — C(10) = ∫₀¹⁰(2q + 5)dq + 30 = 150 + 30; ₦150 omits the fixed cost and ₦25 is MC(10).
8. **a) ₦375** — R = ∫₀²⁵(20 − 0.4q)dq = 500 − 125; ₦500 drops the −0.4q term, ₦250 is (price at q = 25) × 25.
9. **b) 200** — q₀ = 20, so CS = ∫₀²⁰(30 − q − 10)dq = 400 − 200; 400 is the rectangle 20 × 20, 600 is the choke price times q₀.
10. **c) 64** — q₀ = 16, so PS = ∫₀¹⁶(10 − 2 − 0.5q)dq = 128 − 64; 128 forgets the supply term and 160 is the revenue p₀q₀.
11. **a) 750 kg** — ∫₀¹⁰(100 − 5t)dt = 1000 − 250; 1000 kg drops the −5t and 50 kg is r(10).
12. **d) 16** — (1/4)∫₀⁴3t²dt = 64/4; 64 is the integral itself (undivided), 48 is f(4) and 12 is f(2).

**Section B**

**13.** v(t) = t² − 6t + 5 = (t − 1)(t − 5), so s(t) = t³/3 − 3t² + 5t.
Displacement = s(5) − s(0) = 125/3 − 75 + 25 = **−25/3 m ≈ −8.33 m**.
v vanishes at t = 1 and t = 5, and t = 5 is an endpoint, so the only interior split is at t = 1: v > 0 on (0,1) and v < 0 on (1,5).
Distance = |s(1) − s(0)| + |s(5) − s(1)| = 7/3 + |−25/3 − 7/3| = 7/3 + 32/3 = **13 m**.
The split is needed because ∫v dt is signed: the backward motion after t = 1 cancels part of the forward motion, which is exactly what displacement should do and exactly what distance should not.

**14.** The width shrinks linearly from 6 m at h = 0 to 0 at h = 4, so w(h) = 6(4 − h)/4 = 1.5(4 − h).
F = 9800∫₀⁴ h·1.5(4 − h)dh = 14 700∫₀⁴(4h − h²)dh = 14 700[2h² − h³/3]₀⁴ = 14 700(32 − 64/3) = 14 700(32/3) = **156 800 N ≈ 156.8 kN**.
Check: the centroid of a triangle with its base in the surface and apex down lies at h̄ = 4/3 m, and A = ½(6)(4) = 12 m², so ρg h̄ A = 9800(4/3)(12) = 156 800 N ✓.

**15.** Equilibrium: 45 − q² = 5 + 3q ⇒ q² + 3q − 40 = 0 ⇒ (q + 8)(q − 5) = 0 ⇒ q₀ = 5, and p₀ = 5 + 3(5) = **20**.
CS = ∫₀⁵(45 − q² − 20)dq = ∫₀⁵(25 − q²)dq = 125 − 125/3 = **250/3 ≈ 83.33**.
PS = ∫₀⁵(20 − 5 − 3q)dq = ∫₀⁵(15 − 3q)dq = 75 − 37.5 = **37.5**.
CS is the total benefit consumers get from paying ₦20 for units they would have paid more for; PS is the total gain to producers from receiving ₦20 for units they would have supplied for less. (Their sum, 120.83, is the total surplus, the deck's measure of market efficiency.)
