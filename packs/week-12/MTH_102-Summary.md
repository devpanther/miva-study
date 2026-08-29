# MTH_102 — Week 12

*Elementary Mathematics II (Calculus) · Week 12 (23 – 29 Nov 2026)*

*Note: this week's deck is a review/consolidation deck and its slide bodies are images that did not extract — only the learning objectives, the section titles (kinematics, fluid force, work and energy, marginal analysis, environmental science) and the written summary came through. The formulas and worked examples below are the standard ones for exactly those named techniques, supplied here so the scope is usable. Nothing outside what the deck names has been added.*

## Most likely to be examined

1. **Net change**: ∫ₐᵇ f′(t) dt = f(b) − f(a). Integrate a **rate** over an interval, get the **total accumulated** over that interval. Every application this week is this one statement in different units.
2. **Kinematics**: a(t) → v(t) → s(t) by antidifferentiation, each step needing an **initial condition** to fix the constant. Displacement = ∫ₐᵇ v dt; **distance = ∫ₐᵇ |v| dt**, split at the zeros of v.
3. **Work by a variable force**: W = ∫ₐᵇ F(x) dx. Spring (Hooke, F = kx): W = ½k(b² − a²).
4. **Fluid force on a vertical plate**: F = ρg ∫ₐᵇ h·w(h) dh, h = depth, w(h) = width of the strip at that depth. (Check: F = ρg·h̄·A, h̄ = centroid depth.)
5. **Marginal analysis**: C(q) = ∫₀^q MC dq + **C(0)** (fixed cost); extra cost from q₁ to q₂ = ∫_{q₁}^{q₂} MC dq — no fixed cost involved. Same for R from MR; profit change = ∫(MR − MC) dq, maximised where MR = MC.
6. **Consumer / producer surplus**: CS = ∫₀^{q₀}[D(q) − p₀] dq, PS = ∫₀^{q₀}[p₀ − S(q)] dq, with (q₀, p₀) from D(q) = S(q).
7. **Environmental accumulation**: total pollutant / population change over [0,T] = ∫₀^T r(t) dt; exponential model P(t) = P₀e^{kt}.
8. **Average value**: f̄ = (1/(b−a))∫ₐᵇ f dt — the height of the rectangle with the same area, *not* f at the midpoint.

**Earlier techniques this deck revisits.** The definite integral and the Fundamental Theorem (Week 9–10); antiderivatives plus an initial condition; substitution and the standard forms ∫eᵏᵗ dt = eᵏᵗ/k, ∫xⁿ dx = x^{n+1}/(n+1); and area between curves (Week 10), which is what the surplus formulas are. The slicing idea from Week 11's volumes reappears intact: cut the quantity into pieces small enough that the varying quantity is constant on each piece, write the piece, integrate.

## The one idea everything comes from

If a quantity Q changes at rate r(t), then over a slice of width dt the change is **dQ = r(t) dt**, so Q(b) − Q(a) = ∫ₐᵇ r dt. Force varying with position, pressure varying with depth, cost varying with output — each is "the thing is constant on a small enough slice". Units settle every question: (litres/min)·(min) = litres; (N)·(m) = J; (N/m²)·(m²) = N; (₦/unit)·(unit) = ₦; (kg/day)·(day) = kg.

**Symbols.** ρ = density, g = 9.8 m/s², ρg = weight density (water: 9800 N/m³). h = depth *below the surface* (not height above the bed). w(h) = plate width at depth h. k = spring constant (N/m), x = extension *from natural length*. MC, MR = derivatives of total cost and total revenue. D(q) = the price consumers will pay for the q-th unit; S(q) = the price producers need for it.

## Worked examples

**1. Kinematics.** a(t) = 6t − 12 m/s², v(0) = 9 m/s, s(0) = 0, over 0 ≤ t ≤ 4.
v = 3t² − 12t + 9 (the +9 is v(0)); s = t³ − 6t² + 9t.
Displacement = s(4) − s(0) = 64 − 96 + 36 = **4 m**. v = 3(t−1)(t−3) vanishes at t = 1, 3, so split:
|s(1) − s(0)| + |s(3) − s(1)| + |s(4) − s(3)| = 4 + 4 + 4 = **12 m of distance**. Displacement ≠ distance whenever v changes sign.

**2. Work, variable force.** F(x) = 2x + 3x² N, x from 0 to 3 m: W = ∫₀³(2x + 3x²)dx = [x² + x³]₀³ = 9 + 27 = **36 J**.
**Spring.** 12 N holds the spring 0.3 m past natural length ⇒ k = 12/0.3 = 40 N/m. Stretching from 0 to 0.5 m: W = ∫₀^{0.5}40x dx = 20(0.25) = **5 J**. (F × d = 12 × 0.5 = 6 J is wrong: the force is not 12 N throughout.)

**3. Fluid force.** Rectangular plate 2 m wide, 3 m deep, top edge 1 m below the surface, water ρg = 9800 N/m³. Strip at depth h has width 2, so
F = 9800∫₁⁴ h·2 dh = 9800[h²]₁⁴ = 9800(16 − 1) = **147 000 N**. Check: h̄ = 2.5 m, A = 6 m², ρg h̄ A = 9800(2.5)(6) = 147 000 ✓.

**4. Marginal analysis.** MC(q) = 3q² − 4q + 10 ₦/unit, fixed cost ₦50.
C(q) = q³ − 2q² + 10q + 50. Cost of going from q = 2 to q = 5: ∫₂⁵ MC dq = [q³ − 2q² + 10q]₂⁵ = 125 − 20 = **₦105** (the ₦50 cancels — it is already spent).
**Profit.** MR = 60 − 2q, MC = 12 + q: they meet at q = 16, and the profit gained in getting there is ∫₀¹⁶(48 − 3q)dq = 768 − 384 = **₦384**.

**5. Surplus.** Demand p = 50 − 2q, supply p = 5 + q. Equilibrium: 50 − 2q = 5 + q ⇒ q₀ = 15, p₀ = ₦20.
CS = ∫₀¹⁵(50 − 2q − 20)dq = [30q − q²]₀¹⁵ = 450 − 225 = **225**.
PS = ∫₀¹⁵(20 − 5 − q)dq = [15q − q²/2]₀¹⁵ = 225 − 112.5 = **112.5**. Total surplus 337.5 is the market-efficiency measure.

**6. Environmental accumulation.** Discharge rate r(t) = 60e^{0.1t} kg/day. Over the first 10 days:
∫₀¹⁰60e^{0.1t}dt = (60/0.1)[e^{0.1t}]₀¹⁰ = 600(e − 1) ≈ **1031 kg**.
**Average value.** r(t) = 20 + 3t² kg/month on [0,6]: total = 120 + 216 = 336 kg, average = 336/6 = **56 kg/month**, while r(3) = 47 — the midpoint value is not the average unless r is linear.
**Population.** P′ = r(t) ⇒ P(T) = P₀ + ∫₀^T r dt; constant relative growth P′ = kP ⇒ P = P₀e^{kt}.

*The deck also names pharmacokinetics (total drug exposure = ∫C(t)dt, the area under the concentration curve), medical imaging, electric and magnetic fields, and force distribution in structures as further destinations for the same integral — no separate formulas were given for them.*

## Commonly confused

- **Rate vs amount** — r(T) is a rate at an instant; ∫₀^T r dt is the amount. Reading the rate at the end as the total is the single most common slip.
- **Displacement vs distance** — ∫v dt is signed. If v changes sign you must split at its zeros and add magnitudes; |∫v dt| is not the distance.
- **Dropping the constant of integration** — a(t) alone never determines v; v(0) does. In the definite version the "constant" is the lower limit, which is why ∫₀^T is not the same as an indefinite antiderivative evaluated at T.
- **F × d for a varying force** — valid only for constant F. Likewise pressure × area is valid only if the pressure is the same everywhere on the plate, which it never is on a vertical one.
- **Depth vs height, top vs centroid** — h is measured downward from the free surface; using the depth of the top edge underestimates the fluid force, using the bottom edge overestimates it. Only the centroid depth works as a shortcut, and only for a flat plate.
- **Fixed cost in the wrong place** — it appears in total cost C(q), never in the *change* ∫_{q₁}^{q₂}MC dq, and it never moves the profit-maximising output (its derivative is zero).
- **Marginal differenced instead of integrated** — MC(5) − MC(2) is a change in the *rate*; the extra cost is ∫₂⁵ MC dq.
- **CS vs PS vs revenue** — CS is above the price line and below demand; PS is below the price line and above supply; p₀q₀ is the money actually changing hands and is neither.
- **Surplus without the equilibrium** — both integrals run from 0 to q₀, so D(q) = S(q) must be solved first; using the choke price or a guessed quantity invalidates both.
- **Average value ÷ wrong thing** — divide the accumulated total by the *length of the interval*, not by the total itself or by the number of data points.
- **eᵏᵗ integrals** — ∫eᵏᵗ dt = eᵏᵗ/k: divide by k, don't multiply, and don't forget the −1 from the lower limit.
