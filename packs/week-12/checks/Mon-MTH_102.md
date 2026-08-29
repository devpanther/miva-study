# Monday — MTH_102 nightly check

*Applications of integration as concepts: why integrating a rate gives a total change, why an initial condition is needed to recover velocity from acceleration, the difference between displacement and distance, why a varying force and a varying pressure both force a slice-and-sum setup, what the constant in the total-cost integral is, what consumer surplus measures, and what an average value is.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** A tank is being filled at a rate r(t) litres per minute, t in minutes. The quantity ∫₃⁷ r(t) dt represents:
a) the number of litres added to the tank between t = 3 and t = 7
b) the rate at which the tank is filling at t = 7, in litres per minute
c) the average filling rate over those four minutes, in litres per minute
d) the increase in the filling rate between t = 3 and t = 7, in litres per minute

**2.** Knowing the acceleration a(t) of a body for every t is still not enough to determine its velocity v(t) because:
a) acceleration can be negative, and a negative integrand makes the integral ambiguous
b) integrating acceleration produces a quantity with units of distance, so a term with units of velocity must be added to it
c) a definite integral cannot be evaluated until both of its limits have been specified
d) antidifferentiation fixes v only up to an additive constant, and that constant is the velocity at the chosen starting instant — the same acceleration history is consistent with any initial speed

**3.** A particle moves along a line with velocity v(t) that changes sign somewhere inside [a,b]. Then:
a) ∫ₐᵇ v dt is the total distance travelled, and ∫ₐᵇ |v| dt is the displacement
b) ∫ₐᵇ v dt is the displacement; the total distance is ∫ₐᵇ |v| dt, evaluated by splitting the interval at the zeros of v
c) the two are equal, since displacement and distance always agree over a closed interval
d) ∫ₐᵇ v dt is the displacement, and the total distance is |∫ₐᵇ v dt|

**4.** The work done by a force F(x) as an object moves from x = a to x = b is ∫ₐᵇ F(x) dx rather than F × (b − a) because:
a) force and displacement are vectors, and a product of vectors must be written as an integral
b) work is the area under the force–time graph, so time has to be integrated out
c) on a sub-interval short enough that F is essentially constant the work is F(x)Δx; adding those contributions and letting Δx → 0 is exactly the integral, and F × (b − a) is correct only when F does not vary
d) the integration is what converts newton-metres into joules

**5.** A plate is submerged vertically in a liquid of weight density ρg. The force on one face is found by cutting the plate into **horizontal** strips because:
a) the pressure ρgh depends only on the depth, so it is constant along a horizontal strip but different for every strip; the force on one strip is (ρgh)·w(h)dh and these must be added
b) the width of the plate varies with depth while the pressure does not
c) pressure acts vertically downwards, so vertical strips would feel no force at all
d) the force equals the weight of the column of liquid standing directly above the plate, and that column must be integrated over its height

**6.** If the marginal cost C′(q) = MC(q) is known, then C(q) = ∫MC(q) dq + K, where K is:
a) the marginal cost of the first unit produced
b) zero, since producing nothing costs nothing
c) the average cost per unit at the break-even output
d) the fixed cost C(0) — the cost already incurred at zero output, which no amount of marginal information can supply

**7.** At the equilibrium price p₀ and quantity q₀, the consumer surplus CS = ∫₀^{q₀}[D(q) − p₀] dq measures:
a) the total amount the consumers actually pay for the q₀ units
b) the total of the amounts consumers would have been willing to pay over and above what they did pay, added up across all q₀ units
c) the revenue producers receive in excess of what it cost them to produce the q₀ units
d) the amount the buyer of the very last unit would have paid, minus the price of that unit

**8.** A pollutant enters a lake at rate r(t) = 20 + 3t² kg/month. The average discharge rate over the first six months is (1/6)∫₀⁶ r(t) dt, and this is **not** equal to r(3) because:
a) the mean value theorem for integrals applies only to increasing functions
b) an average rate is obtained by dividing the total discharged by the total, not by the elapsed time
c) the average value is the height of the rectangle having the same area as the region under r; that height coincides with the midpoint value only when r is linear (or symmetric about the midpoint), and this r is quadratic
d) r(3) is the median rate over the interval, and the median of a positive function always exceeds its mean

**9. (explain why)** State the theorem that makes "integrate the rate to get the total" true, and explain using units why ∫₀^{10} r(t) dt is a number of kilograms when r is measured in kilograms per day. Say what the same integral would mean if r were instead a concentration in mg/L.

**10. (explain why)** A particle's velocity is positive on part of [0,4] and negative on the rest. Explain the difference between its displacement and the distance it travels, what you must do to the integral to get the distance, and why the sign of v is what forces that step.

**11. (explain why)** Work done by a variable force and fluid force on a vertical plate are set up by the same manoeuvre. Explain what the thin slice is in each case and what quantity is treated as constant on it, and explain why (pressure at the top edge) × (area of the plate) is not the fluid force.

**12. (explain why)** Explain why marginal cost alone determines total cost only up to a constant, say exactly what that constant is, and explain why the extra cost of raising output from q = 2 to q = 5 can still be computed without knowing it.
