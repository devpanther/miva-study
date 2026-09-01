# Monday — MTH_102 nightly check

*Conceptual session on Week 12 applications of integration, exactly as the deck builds them.*

*Integrating a rate over an interval to get an accumulated total.*

*Why an initial condition is needed for an indefinite integral, and why the constant cancels in a definite one.*

*The fluid-force formula F = ∫ₐᵇ w·h(x)·L(x)dx, with w = ρg.*

*Why a varying force forces W = ∫ₐᵇ F(x)dx instead of force × distance.*

*Recovering TR from MR, and K from I(t).*

*Why equilibrium must be found before CS = ∫₀^Q₀[D(Q) − P₀]dQ and PS = ∫₀^Q₀[P₀ − S(Q)]dQ.*

*And the cumulative-consumption model C(t) = 1000e^(0.035t) − 1000.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** In her first kinematics example the car's velocity is v(t) = 2t² + 6t + 1 kmh⁻¹ and she computes ∫₀⁵ v(t)dt. What kind of quantity does that integral produce, and why?
A. A distance in km, because integrating a rate of change of position over an interval accumulates the total change over that interval
B. A speed in kmh⁻¹, because the integral of a velocity is still a velocity
C. An acceleration, because integration and differentiation both change the physical quantity by one step
D. A distance, but only because the interval happens to start at t = 0

**2.** In Example 2 she writes x(t) = ∫(6t² − 6t − 12)dt = 2t³ − 3t² − 12t + C and only then uses the words 'initial displacement is −4 m'. Why does she need that sentence at all?
A. Because the velocity function alone is not enough to integrate
B. Because the indefinite integral gives a whole family of displacement functions, and the datum picks the one member of the family that describes this body
C. Because the constant of integration is otherwise assumed to be zero by convention
D. Because displacement must always be measured from a negative starting point

**3.** Part (c) of Example 2 asks for the net displacement in the first 5 seconds, and the −4 does not appear anywhere in her working. What is the reason?
A. She dropped it by mistake; it should have been carried through
B. Net displacement is always measured from the origin, so any starting offset is ignored by definition
C. A definite integral is F(5) − F(0), so any constant added to F appears in both terms and cancels
D. The constant only matters for velocity functions, not for displacement functions

**4.** Why does the dam problem need an integral rather than a single multiplication of pressure by area?
A. Because the dam face is not flat
B. Because the weight density of water is not constant over 100 m of depth
C. Because the width L(x) of the dam changes with depth
D. Because the pressure grows with depth, so no one pressure acts on the whole face; each thin strip is at essentially one depth and the integral adds the strips

**5.** In the rope example she spends most of the slide constructing F(x) = 0.6468(60 − x) before integrating anything. What makes the '60 − x' the crux of the problem?
A. Only the rope still hanging has to be lifted, so the force needed falls from 38.8 N to 0 as x runs from 0 to 60 — a varying force, which is exactly why the work is an integral
B. It is the distance the rope still has to travel upwards
C. It converts the mass per metre into a total mass
D. It is a change of variable that makes the integral easier to evaluate

**6.** In F = ∫ₐᵇ w·h(x)·L(x)dx, what do the three factors stand for?
A. w is the width of the dam, h(x) its height, L(x) its length
B. w is the weight density ρg of the fluid, h(x) the depth of the strip at position x, L(x) the width of the face at that strip
C. w is the work done, h(x) the head of water, L(x) the load
D. w is the mass of the water, h(x) the height above the base, L(x) the perimeter

**7.** Why can neither CS = ∫₀^Q₀[D(Q) − P₀]dQ nor PS = ∫₀^Q₀[P₀ − S(Q)]dQ be started until the equilibrium has been found?
A. Because the integrals are improper until a finite upper limit is supplied
B. Because D(Q) and S(Q) are only defined at the equilibrium point
C. Because both the upper limit Q₀ and the constant P₀ inside the bracket come from solving D(Q) = S(Q)
D. Because the surpluses are equal at equilibrium, so one determines the other

**8.** In the copper example she integrates the consumption rate to get C(t) = 1000e^(0.035t) + c, then sets C(0) = 0. What does C(t) count, and what is the condition doing?
A. C(t) is the rate of consumption t years after 2005, and C(0) = 0 says nothing was being consumed in 2005
B. C(t) is the remaining stock of copper, and C(0) = 0 says the reserves start empty
C. C(t) is the average annual consumption, and C(0) = 0 fixes the units
D. C(t) is the cumulative amount consumed since 2005, and C(0) = 0 says nothing has yet been consumed at the moment the clock starts, which forces c = −1000

**9.** Name the single idea that all five of this week's applications share, and show it running through three of her examples in three different sets of units.
*(short answer)*

**10.** Explain why the rope's work cannot be computed as force × distance, and say what number that shortcut would give and why it is wrong.
*(short answer)*

**11.** Her Example 1 calls ∫₀⁵ v(t)dt 'the distance travelled', while Example 2 part (c) calls ∫₀⁵ v(t)dt 'the net displacement'. Explain why both labels are defensible on her own examples, and what a student must be careful about.
*(short answer)*

**12.** Three of her examples supply an extra piece of data after the integration: x(0) = −4, TR(2) = 260, and C(0) = 0. Say what each is for, and explain what makes the middle one different from the other two.
*(short answer)*

## Answers

**1. A** — Velocity is the rate of change of position, so ∫ₐᵇ v dt is the accumulated change in position between a and b — the units multiply out as (km/h)(h) = km. Option 2 confuses the integrand with the integral; v(5) = 81 km/h is the speed at the end, and it is the most common wrong answer in this whole week. Option 3 has the direction of the operation backwards: differentiating position gives velocity, so integrating velocity returns to position, never to acceleration. Option 4 is a misreading — the accumulation argument works for any limits a and b; starting at 0 only makes the lower bracket vanish arithmetically.

**2. B** — Every function 2t³ − 3t² − 12t + C has the same derivative, so the velocity alone cannot distinguish them; they differ only in where the origin sits. The datum x(0) = −4 selects C = −4 and so selects one curve. Option 1 is false — the integration is done before the datum is used. Option 3 states a convention where there is none: assuming C = 0 would put the body at the origin at t = 0, contradicting the question. Option 4 mistakes an arbitrary feature of this example for a rule.

**3. C** — With antiderivative F(t) + C, the theorem gives (F(5) + C) − (F(0) + C) = F(5) − F(0); the C cancels, which is why the bracket on her slide reads [2t³ − 3t² − 12t]₀⁵. Option 1 is wrong and worth being sure about — carrying the −4 in and subtracting once gives 111, which is the position x(5), not the change. Option 2 has it exactly backwards: net displacement ignores the offset because it is a change, not because it is measured from the origin. Option 4 invents a distinction the mathematics does not make.

**4. D** — Pressure at depth h is w·h, so it runs from 0 at the surface to a maximum at the base; multiplying any single pressure by the whole area is therefore wrong, and slicing into horizontal strips of near-constant depth is what makes the multiplication legitimate on each piece. Option 1 is false — this dam face is a flat rectangle. Option 2 is false: w = ρg = 9800 is a constant and she pulls it straight out of the integral. Option 3 is false for this example specifically — L(x) = 300 everywhere, which is why 9800 × 300 comes out front as 2.94 × 10⁶; the varying factor is h(x) = x alone.

**5. A** — The pull only has to support what is still over the edge, and that shrinks as you haul, so F is a function of x rather than a constant, and W = ∫F dx replaces force × distance. Option 2 misreads the variable: x is how much rope has been pulled up, and 60 − x is a length of rope, not a distance yet to be travelled. Option 3 confuses two separate steps — the conversion is 66 g/m to 0.066 kg/m, and it happens before the 60 − x appears. Option 4 treats a piece of physics as a piece of algebra; nothing here is a substitution.

**6. B** — w·h(x) is the pressure at depth h(x), and multiplying by the width L(x) and the thickness dx gives the force on one strip; adding the strips is the integral. Option 1 is the trap her own wording invites, since she calls h(x) 'the height of the dam at a point x' while using it as a depth measured down from the surface. Option 3 mixes symbols from different applications. Option 4 gets the direction wrong — measuring height upward from the base would put zero pressure at the bottom, which is the reverse of reality — and w is a density, not a mass.

**7. C** — Q₀ is the positive root of 1000 − 25Q = 100 + Q², and P₀ = D(Q₀) = 500; without both numbers neither integrand nor either limit is known. Option 1 misuses 'improper', which describes infinite limits or unbounded integrands, not a missing symbol. Option 2 is false — both functions are defined for every Q; equilibrium is just where they agree. Option 4 is false in this very example, where CS = 5000 and PS ≈ 5333 are different numbers.

**8. D** — The rate is C′(t) = 35e^(0.035t), so its integral C(t) is a running total of copper consumed since 2005; at t = 0 that total is necessarily zero, and since e⁰ = 1 the equation 0 = 1000 + c gives c = −1000, hence C(t) = 1000e^(0.035t) − 1000. Option 1 confuses C with C′ — the rate at t = 0 is 35, not 0. Option 2 reverses the direction: a stock that starts empty could never be exhausted, and part (b) sets C(t) equal to 750, the amount consumed, not what remains. Option 3 misnames an accumulation as an average and gives the condition no real work to do.

**9.** A good answer states the idea: if a quantity varies, cut the range into pieces small enough that it is effectively constant on each, multiply on the piece, and integrate to add the pieces — equivalently, the integral of a rate over an interval is the total accumulated over that interval. It should then instantiate it: velocity varies with time, so ∫₀⁵ v dt gives (km/h)(h) = km, the 163.3 km of Example 1; the force on the rope varies with how much has been pulled, so ∫₀⁶⁰ F(x)dx gives (N)(m) = J, the 1164.24 J; marginal revenue varies with quantity, so ∫MR dQ gives (revenue per unit)(units) = revenue, the TR(Q) of the marginal-analysis example. Credit for noticing that the units of the answer are always the units of the integrand multiplied by the units of the variable of integration, which is the fastest check available.

**10.** A good answer says: force × distance is valid only when the force is the same throughout the motion. Here the pull only has to support the rope still hanging, which is (60 − x) m, so F(x) = 9.8(0.066)(60 − x) = 0.6468(60 − x) newtons — it starts at 0.6468(60) = 38.8 N when the whole rope is over the edge and falls to 0 as the last of it comes up. Multiplying the starting force by the full 60 m gives 38.8 × 60 = 2328.48 J, exactly twice the true answer, because it charges the maximum force for the whole haul. The correct calculation integrates: W = ∫₀⁶⁰ 0.6468(60 − x)dx = 0.6468(3600 − 1800) = 1164.24 J. It is worth adding that the factor of exactly 2 arises because F is linear in x, so the average force is half the maximum — the same reason the dam integral produces x²/2.

**11.** A good answer notices that ∫v dt is a signed quantity — it is always the net displacement — and that it equals the distance only when v does not change sign on the interval. In Example 1, v(t) = 2t² + 6t + 1 is positive for every t in [0, 5], since all three terms are positive, so the car never reverses and the two quantities coincide: 163.3 km is both. In Example 2, v(t) = 6t² − 6t − 12 = 6(t − 2)(t + 1) is negative on (0, 2) and positive on (2, 5), so the two do differ and she correctly says 'net displacement', not 'distance'. The care needed: never assume the two are the same without checking the sign of v, and note that the deck never asks for a total distance and never teaches splitting at the zeros of v, so that technique is background rather than syllabus here.

**12.** A good answer says all three do the same job — an indefinite integral produces a family of functions differing by a constant, and each datum is an equation that pins the constant down. x(0) = −4: substituting t = 0 into 2t³ − 3t² − 12t + C kills the first three terms, so C = −4 is read straight off. C(0) = 0: substituting t = 0 into 1000e^(0.035t) + c and using e⁰ = 1 gives 0 = 1000 + c, so c = −1000. What makes TR(2) = 260 different is that the condition is not given at zero, so nothing vanishes and it must be solved as a genuine equation: TR(2) = 200 + 40 + 8 + C = 248 + C, and 248 + C = 260 gives C = 12. The examinable warning is that C = 260 is wrong; the given value is the value of the whole function, not the value of the constant.
