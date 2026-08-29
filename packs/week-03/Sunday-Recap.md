# Sunday recap — Week 3

*Sunday 27 September 2026, 19:00–20:00. One topic each, taught aloud, no notes.*

**Pick the topic from the scores first.** Each of you takes the check you scored lowest on this week and teaches that topic. **Do not both pick the same course** — if your lowest lands on the same course, whoever scored the lower ratio keeps it and the other takes their next-lowest from a different course. The two topics below are a **fallback only**, for a week where the scores tie or the checks were skipped.

## MTH_102 — The limit of f at a is decided by the values of f near a, never by f(a) itself

The limit of f at a is fixed entirely by the values of f at points close to a, and never by f(a). That is why (x² − 4)/(x − 2) has limit 4 at x = 2 although the function has no value there, and it is why cancelling the factor (x − 2) is legitimate rather than a fudge.

**Why it goes wrong.** Students read lim_{x→a} f(x) as an instruction to substitute a into f, so the limit becomes, in their heads, a slow way of computing f(a). The model survives because for polynomials, and for rational functions whose denominator is non-zero at a, the two genuinely coincide — and those are most of the examples they see. It breaks only at the holes, jumps and 0/0 forms that this topic exists to handle.

1. Why does the definition insist on 0 < |x − a| rather than just |x − a| < δ?
2. Why can (x² − 4)/(x − 2) have a limit of 4 at x = 2 when the function has no value at x = 2?
3. Why is cancelling the factor (x − 2) legitimate here, when that factor is zero at the very point we are heading towards?
4. Why does continuity have to be stated as a separate three-part condition instead of following automatically from the limit existing?
5. Why does this same idea explain what is going on when L'Hôpital's Rule is applied to a 0/0 quotient?

**What a good answer contains.**
- It states the punctured-neighbourhood point explicitly: the definition constrains only x with 0 < |x − a| < δ, so f(a) is never consulted and can be changed, or left undefined, without altering the limit.
- It uses that to justify cancellation: the reduced function agrees with the original at every x except a, and since limits never look at a, the two functions must have the same limit there.
- It separates limit from value with a concrete case of each kind — a hole, where the limit exists but f(a) does not, and a jump such as |x|/x at 0, where the one-sided limits disagree so no limit exists at all — and it names continuity as the extra demand that f(a) exists and equals the limit.

**Worked example.** Evaluate lim_{x→2} (x² − 4)/(x − 2).
1. Substitute: (4 − 4)/(2 − 2) = 0/0 — indeterminate, so substitution is unavailable and x = 2 is not in the domain.
2. Factor the numerator as a difference of squares: x² − 4 = (x − 2)(x + 2).
3. Cancel: for every x ≠ 2, (x − 2)(x + 2)/(x − 2) = x + 2. The cancellation is valid precisely because the limit process only uses x ≠ 2, where (x − 2)/(x − 2) is genuinely 1.
4. The reduced function x + 2 is a polynomial, hence continuous, so lim_{x→2} (x + 2) = 4. **The limit is 4.**
5. Interpret: f(2) does not exist, so f is not continuous at 2; but the limit does exist, so the discontinuity is **removable** — defining f(2) = 4 patches the hole.
6. Cross-check with L'Hôpital: differentiating numerator and denominator separately gives 2x/1 = 4 at x = 2 — the same answer, for the same reason, namely that both routes strip out the common vanishing factor (x − 2).

## PHY_102 — A cell's emf is fixed, but its terminal voltage is not

A cell's emf is a fixed property of its chemistry, but the voltage you can measure across its terminals is not: as soon as current flows, a p.d. of Ir is dropped across the cell's own internal resistance and dissipated inside the cell, so V = ε − Ir. Emf is energy supplied per coulomb, and only the part left after the internal loss reaches the external circuit.

**Why it goes wrong.**
Students treat "the emf" and "the battery's voltage" as the same number and solve loops with I = ε/R. The habit survives because in most textbook and lab circuits the external resistance is far larger than r, so V is within a per cent of ε and the wrong method still gives nearly the right answer. It only breaks visibly at high current, near short circuit, or in the V–I graph experiment, where the slope is the whole point.

1. Why is emf measured in volts and not in newtons, if it is called a force?
2. Why does a voltmeter read 1.5 V across an idle torch cell but only 1.2 V once the bulb is lit?
3. Why does the loop equation use R + r rather than R alone, when the resistor is the only thing you can see?
4. Why is the gradient of the V against I graph equal to −r, and why is the intercept, not the gradient, the emf?
5. Why does a nearly short-circuited cell get hot while delivering almost no useful power to the external circuit?

**What a good answer contains.**
Emf is defined as work done per unit charge, ε = W/Q, so its unit is the volt (joule per coulomb) and its dimension is [M¹ L² T⁻³ I⁻¹]; it is a property of the source, fixed by its chemistry.
The current in a single loop is the same everywhere, so the emf is shared between the external and internal drops: ε = IR + Ir = I(R + r), which rearranges to V = ε − Ir; the lost volts Ir are dissipated as heat inside the cell.
The measurement follows from this: V = ε − rI is a straight line of gradient −r with V-axis intercept ε, so extrapolating to zero current is the only condition under which terminal p.d. and emf coincide.

**Worked example.**
A cell of emf 1.50 V and internal resistance 0.50 Ω is connected first to R = 2.5 Ω, then to R = 0.10 Ω.

*Case 1:* I = ε/(R + r) = 1.50/(2.5 + 0.50) = 0.50 A. Terminal p.d. V = ε − Ir = 1.50 − 0.50 × 0.50 = 1.25 V; check V = IR = 0.50 × 2.5 = 1.25 V. Power to the load = I²R = 0.625 W; power wasted inside = I²r = 0.125 W.

*Case 2:* I = 1.50/(0.10 + 0.50) = 2.5 A. V = 1.50 − 2.5 × 0.50 = 0.25 V. Power to the load = I²R = 0.625 W, but power wasted inside = I²r = 3.13 W — five times more heat in the cell than useful output.

*Moral:* the same cell, with the same emf, delivers 1.25 V or 0.25 V depending only on the load, and the naive I = ε/R would have predicted 0.60 A and 15 A. Reading the graph back: the two points (0.50 A, 1.25 V) and (2.5 A, 0.25 V) give gradient (0.25 − 1.25)/(2.5 − 0.50) = −0.50 V/A, so r = 0.50 Ω, and the intercept at I = 0 is 1.50 V, the emf.
