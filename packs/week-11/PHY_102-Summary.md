# PHY_102 — Week 11 Summary

*General Physics II · Week 11 (16 – 22 Nov 2026) · Topic: Faraday's Law and Lenz's Law — the flux rule ε = −N dΦ/dt, what the minus sign is doing, and determining the direction of an induced current*

**Week 10 opened the subject; Week 11 is the two laws themselves, done properly.** Week 10 introduced flux, quoted Faraday's law and then spent most of its length on inductance, transformers and the generator. Week 11 goes back to the two sentences that carry the whole topic and makes them precise: the exact statement of Faraday's law, the sign convention that gives the minus sign meaning, the four-step procedure for getting a direction right every time in a named geometry, and the energy argument that makes Lenz's law inevitable. **Inductance, mutual inductance and the transformer are not re-examined here.** What is new: the sign convention stated properly, the direction algorithm and its standard cases, the rotating rod ε = ½BL²ω, the induced *electric* field, and eddy currents.

## The 8 most examinable things this week

1. **Faraday's law, stated exactly: the emf induced in a circuit equals minus the rate of change of the magnetic flux linking it — ε = −N dΦ/dt**, in **volts** (1 Wb/s = 1 V). For a uniform rate, **ε = −N ΔΦ/Δt**. It is the flux **linkage** NΦ whose rate of change is taken, not Φ alone. **This is valid whether the flux changes because B changes, because the loop moves or deforms, or both** — the deck's own closing sentence, and the reason it is called *the flux rule*.
2. **The flux must be *changing*.** Faraday's own conclusion, verbatim in substance from the deck: *"the actual existence of the magnetic flux is not sufficient to produce the induced emf; the flux must be changing."* A coil sitting in the strongest steady field obtainable has **ε = 0**. Magnet stationary inside the loop ⇒ ammeter reads **zero**, even though the flux through the loop is at its largest.
3. **Φ = BA cos θ, θ measured from the *normal*, and there are exactly three ways to change it.** Differentiating a general case,
 **dΦ/dt = A cos θ (dB/dt) + B cos θ (dA/dt) − BA sin θ (dθ/dt)**
 — change **B** (electromagnet, a.c., an approaching magnet), change **A** (a sliding rod, a loop entering or leaving a field region, a coil squeezed), or change **θ** (rotate it — a generator). Any one of them induces an emf. **Relative motion is one cause among several, not the criterion.**
4. **Lenz's law — the direction. *The induced current flows in the sense whose own magnetic field opposes the change in flux that produced it.*** Not "opposes the field" — opposes the **change**. The deck's three-line working rule: the induced current's field **(1) points opposite to the external B if the external flux is increasing, (2) points along the external B if it is decreasing, (3) is zero if the flux is not changing.** Only the field *through the area enclosed by the loop* counts.
5. **The sign convention that makes the minus sign mean something.** Choose a positive **normal n̂** for the loop; Φ is positive when **B** has a component along **n̂**. The positive sense of **circulation** round the loop is then fixed by the **right hand** — curl the fingers the positive way round, the thumb points along **n̂**. With that pairing, ε = −dΦ/dt is the emf driving current in the **positive circulation sense**. Reverse your choice of **n̂** and the sign of Φ *and* the positive sense both reverse: the physical direction of the current is unchanged. **The sign is a convention; Lenz's law is not.**
6. **Lenz's law is conservation of energy.** If the induced current aided the change, the change would grow, the current would grow, the change would grow faster still — unbounded kinetic energy *and* unbounded I²R heat from no source. The observable consequence is the **retarding force**: a generator under load is harder to turn, a magnet falls slowly down a copper pipe, and the work you do against the opposition is *exactly* the electrical energy you get out.
7. **Motional emf, and its two independent derivations. ε = BLv** for a rod of length L moving at speed v with **B, L and v mutually perpendicular**. From Faraday: A = Lx ⇒ dΦ/dt = BL dx/dt. From the force law: each carrier feels **F = qv × B** along the rod, and charge piles up until the electrostatic field balances it, giving **ε = BLv** with the **v × B end positive**. The two routes must agree, and do. **A rod rotating about one end at ω sweeps ε = ½BL²ω** — the ½ is the mean speed of the rod, not an error.
8. **The emf is not a potential difference: it is the line integral of an induced electric field.** The general form of Faraday's law is **∮E·dl = −dΦ/dt**. A **changing magnetic flux creates a circulating electric field**, present whether or not a wire is there to feel it. That field is **non-conservative**: ∮E·dl ≠ 0, so "the voltage round the loop" is not zero and two voltmeters on the same two points of such a loop can legitimately read differently. It is why a ring **outside** a solenoid, where B ≈ 0 at the wire itself, still has an emf.

## The experiment the law came from

**1831, Michael Faraday and (independently) Joseph Henry.** A loop of wire is connected to a sensitive ammeter, and a bar magnet is moved:

| What is done | Ammeter | Why |
|---|---|---|
| Magnet moved **towards** the loop | deflects one way | Φ through the loop **rising** |
| Magnet moved **away** from the loop | deflects the **opposite** way | Φ **falling** — the change has reversed sign |
| Magnet held **stationary inside** the loop | **zero** | Φ is large but **constant**: dΦ/dt = 0 |
| **Loop** moved towards or away from a fixed magnet | deflects, exactly as before | only the **relative** motion, and hence dΦ/dt, matters |

The last two rows carry the physics. The third kills "flux causes emf" — the flux is at its *maximum* there and the emf is zero. The fourth says the loop cannot tell which of the two is moving; it detects only the change in the field threading it. Faraday's conclusions, in the deck's own order: an electric current can be induced in a loop by a changing magnetic field; **the induced current exists only while the field through the loop is changing**; the induced current is produced by an **induced emf**; and a current can therefore be produced **with no battery in the circuit at all**.

## Faraday's law, term by term

> **ε = −N dΦ/dt**  (SI: volts, with Φ in webers, t in seconds, 1 Wb = 1 T·m² = 1 V·s)

| Symbol | Means | Units | Trap |
|---|---|---|---|
| ε | induced **emf** — energy per unit charge given by a non-electrostatic agency | V | not a current, and not a potential difference (see §*induced E field*) |
| N | number of turns **linked** by the flux | — | the turns' emfs are in **series**, so they add; N multiplies ε, not Φ |
| Φ | flux through **one** turn, **BA cos θ** | Wb | θ from the **normal**; Φ is a **scalar** whose sign follows the chosen normal |
| dΦ/dt | the **rate** of change | Wb/s = V | the whole of the physics is here; B and Φ themselves are irrelevant |
| − | **Lenz's law** | — | a statement about **direction**, never "a negative voltage" |

**Emf is not current.** Faraday's law contains no resistance and says nothing about the circuit being closed. A **cut** coil moved past a magnet has exactly the same emf across its ends as an intact one, and **zero** current. Current follows only from Ohm's law, **I = ε/R**, once there is a closed path.

**Induced charge.** Integrating I = (N/R)|dΦ/dt| over the whole change gives

**q = N ΔΦ / R** — independent of how long the change takes.

Slow the change down tenfold and ε and I fall tenfold while the time rises tenfold; the charge is identical. This is the ballistic-galvanometer principle and a standing examiner's trap.

## The minus sign, and Lenz's law

> **Lenz's law: the induced current in a loop flows in the direction that creates a magnetic field opposing the *change* in magnetic flux through the area enclosed by the loop.** Equivalently: the induced effects always tend to **keep the original flux through the circuit from changing**.

The deck's two half-sentences are worth memorising as a pair:

- **External field getting weaker** ⇒ the induced current tries to **replace the "missing" flux** — its own field points the **same way** as B.
- **External field getting stronger** ⇒ the induced current tries to **cancel the "extra" flux** — its own field points **opposite** to B.

So "the induced field is always opposite to B" is **wrong half the time**. It is opposite only when the flux is *rising*.

**Pole form** (fastest for magnet-and-coil questions). The coil's near face becomes whichever pole **fights what the magnet is doing**:

| Magnet's pole facing the coil | Motion | Coil's near face | Force on magnet |
|---|---|---|---|
| N | approaching | **N** | repulsion |
| N | receding | **S** | attraction |
| S | approaching | **S** | repulsion |
| S | receding | **N** | attraction |

In every row the force **opposes the motion**. That is the whole content of Lenz's law in one column.

## Determining the direction — the four-step algorithm

1. **Which way does the external B point through the loop, and is the flux rising or falling?** (Into the page? Out of it? Up the axis?)
2. **Which way must the induced field point inside the loop?** Rising ⇒ **against** B. Falling ⇒ **along** B. Constant ⇒ no current at all.
3. **Convert that field into a circulation with the right hand.** *Loop version:* point the right **thumb** along the required induced field **inside the loop**; the **fingers curl** the way the current flows. (The deck uses the equivalent *wire version*: grip one side of the loop with the right hand so that the fingers, where they pass through the interior, point along the required induced field; the **thumb** then gives the current in that side. Both give the same answer — do not mix them.)
4. **Sanity-check mechanically.** Does the resulting force oppose the motion / the change? It must. If it does not, you have made a sign error.

**The standard cases, worth knowing cold** (all viewed from the front of the page):

| External B through the loop | Change | Induced B inside the loop | Induced current |
|---|---|---|---|
| **out of** the page | increasing | **into** the page | **clockwise** |
| **out of** the page | decreasing | **out of** the page | **anticlockwise** |
| **into** the page | increasing | **out of** the page | **anticlockwise** |
| **into** the page | decreasing | **into** the page | **clockwise** |
| any | constant | none | **zero** |

Both of the deck's worked cases sit in this table: *"a field out of the page that decreases to zero"* ⇒ **anticlockwise**; *"no field increasing to a field out of the page"* ⇒ **clockwise**; and its Step 1 / Step 2 example, *"B out of the page and increasing"* ⇒ induced field into the page ⇒ **clockwise**.

**Mnemonic that never fails:** anticlockwise current (seen from the front) makes flux **out of** the page; clockwise makes flux **into** the page. Everything else is bookkeeping.

## Lenz's law as energy conservation

Push a magnet N-first towards a coil closed through a resistor. The induced current dissipates **I²R** as heat. That energy has one and only one source: **the work you do pushing against the repulsion.** Now suppose the current ran the other way. The coil's near face would be an S pole, the magnet would be **pulled in**, it would accelerate, dΦ/dt would rise, the current would rise, the attraction would rise — the magnet gains kinetic energy *and* the resistor gains heat, from nothing whatever. That is a perpetual-motion machine of the first kind, so the induced current cannot flow that way.

Three consequences you are expected to state:

- **A generator on open circuit is easy to turn; close the load and it fights you.** The shaft power you supply is the electrical power you take out (plus losses). Switching on a bicycle lamp makes the wheel harder to turn *immediately*.
- **Magnetic braking.** A magnet dropped down a copper pipe reaches a **terminal speed** at which the rate of heat production in the pipe equals **mgv**, the rate at which it loses gravitational potential energy. Slot the pipe lengthways so the induced current has no closed path and it falls at very nearly g.
- **Eddy currents** are ordinary induced currents flowing in bulk metal rather than in a wire. They are useful (induction hobs, eddy-current brakes, metal detectors) and wasteful (transformer cores, which are therefore **laminated** to break their paths).

## Motional emf — the two routes, and why they must agree

A rod of length L slides at speed v on rails, **B** perpendicular to the plane of the circuit.

- **Flux route.** Enclosed area A = Lx, so Φ = BLx and **|ε| = dΦ/dt = BL(dx/dt) = BLv**.
- **Force route.** Each free charge in the rod moves with it, so it feels **F = qv × B** directed along the rod. Charge separates until the electrostatic field E = vB it builds up cancels the magnetic push. Multiplying by the length: **ε = BLv**, with the **v × B end at the higher potential**. The rod is a **source of emf** — a battery of internal emf BLv — whether or not the rails are there.
- **Current** I = BLv/R; **retarding force** F = BIL = **B²L²v/R**, always against **v**.
- **Power audit:** mechanical **Fv = B²L²v²/R** = electrical **I²R = εI**. Nothing is created; the rod is a converter.
- **Zero cases:** rod moving **along its own length**; **v parallel to B**; loop moving entirely **inside** a uniform field region (no swept edge is exposed, so A, B and θ are all constant).
- **Rod rotating about one end** at angular speed ω, with B along the axis: each element dr at radius r moves at v = ωr and contributes B(ωr)dr, so **ε = ∫₀ᴸ Bωr dr = ½BL²ω**. Equivalently BLv̄ with v̄ = ½Lω, the **mean** speed of the rod. The tip speed Lω gives twice the right answer.

## The induced electric field

Faraday's law in its general form makes no mention of wires:

**∮E·dl = −dΦ/dt.**

A changing magnetic flux produces a **circulating electric field** in the space around it. When a conducting loop happens to lie there, that field pushes its free charges round and we call ∮E·dl the emf. Three examinable consequences:

- **The emf exists even where B = 0.** A ring of radius 5 cm placed coaxially round a solenoid of radius 2 cm has essentially **no field at the wire** — yet the flux **through the area it encloses** is changing, so it has an emf. What enters Faraday's law is the flux through the **enclosed area**, not the field at the conductor.
- **The induced E field is non-conservative.** Electrostatic fields satisfy ∮E·dl = 0, so they define a potential; induced fields do not. Strictly, the induced emf is **not** a potential difference, and there is no consistent "voltage" you can attach to the points of such a loop.
- **The two emfs are physically different but numerically identical.** A moving rod in a static field is charge-pushing by **v × B** (magnetic); a stationary loop in a changing field is charge-pushing by an **induced E** (electric). The flux rule ε = −dΦ/dt covers both — and gives the same answer for the "magnet moving" and "loop moving" versions of Faraday's experiment, which is what the deck's fourth observation is really recording.

## Worked example 1 — the flux changing because B changes

*A flat circular coil of **250 turns**, radius **5.0 cm**, lies with its **plane perpendicular to** a uniform field directed **out of the page**. The field falls steadily from **0.80 T to 0.20 T in 0.40 s**. Total circuit resistance **15 Ω**.*

1. **Area in SI.** A = πr² = π(0.050)² = **7.85×10⁻³ m²**. (Radius not diameter; πr² not 2πr; metres not centimetres — leaving r in cm inflates the answer by 10⁴.)
2. **Angle.** The **plane** is perpendicular to B, so the **normal is along B**: **θ = 0, cos θ = 1**. This is the maximum-flux orientation, and "plane perpendicular to B" is the phrase most often mis-converted into θ = 90°.
3. **Rate.** dB/dt = (0.20 − 0.80)/0.40 = **−1.50 T/s**. Only the **change** 0.60 T enters. Using the final field 0.20 T, or the sum 1.00 T, are the two standard wrong substitutions.
4. **Emf.** |ε| = N A |dB/dt| = (250)(7.85×10⁻³)(1.50) = **2.9 V** (2.945 V). Note N is inside — a single turn would give only 11.8 mV.
5. **Current.** I = ε/R = 2.945/15 = **0.196 A ≈ 0.20 A**.
6. **Direction.** B is **out of the page and decreasing**, so the induced current must **maintain** out-of-page flux inside the loop ⇒ by the right hand, **anticlockwise** seen from the front. Note carefully that the induced field here points **with** B, not against it — because it is the **loss** of flux that is being opposed.
7. **Charge circulated.** q = N ΔΦ/R = (250)(7.85×10⁻³)(0.60)/15 = 1.178/15 = **7.9×10⁻² C (79 mC)**. Repeat the fall over 4.0 s instead of 0.40 s: ε drops to 0.29 V and I to 0.020 A, but q is **still 79 mC**.
8. **Heat.** W = εI Δt = (2.945)(0.196)(0.40) = **0.23 J**, supplied by whatever agency is reducing the field.
9. **Contrast.** Had the coil's **plane contained B** throughout (θ = 90°), Φ = 0 at every instant and **ε = 0**, however violently B was changed. And with B held at a steady 0.80 T, ε = 0 as well — the largest flux in the problem, and no emf at all.

## Worked example 2 — the flux changing because the area changes

*A square loop of side **0.20 m** and total resistance **0.50 Ω** is pulled at a steady **2.5 m/s** out of a region of uniform field **B = 0.30 T into the page**, moving in the plane of the page.*

1. **Emf while it is leaving.** Only the side still inside the field sweeps flux: |ε| = BLv = (0.30)(0.20)(2.5) = **0.15 V**. (Equivalently dΦ/dt = B L dx/dt.)
2. **Current.** I = 0.15/0.50 = **0.30 A**.
3. **Direction.** Flux **into** the page is **decreasing**, so the induced current must **maintain** into-page flux ⇒ **clockwise**.
4. **Force.** Only the conductor still in the field carries current *in* the field, so **F = BIL = (0.30)(0.30)(0.20) = 1.8×10⁻² N**, directed **back into the field region** — against the pull. Equivalently F = B²L²v/R = (0.09)(0.04)(2.5)/0.50 = 0.018 N ✔. The trailing side is outside the field and feels nothing; the two sides perpendicular to the motion carry equal and opposite forces that cancel.
5. **Power audit.** Mechanical Fv = (0.018)(2.5) = **4.5×10⁻² W**; electrical I²R = (0.30)²(0.50) = **4.5×10⁻² W** ✔; εI = (0.15)(0.30) = 4.5×10⁻² W ✔.
6. **The whole journey.** Entering the region: emf 0.15 V, current **anticlockwise** (into-page flux *rising*), force again backwards. **Entirely inside**: all four sides in the field, A, B and θ constant, **ε = 0** and no force. **Leaving**: 0.15 V again, current **clockwise** — same magnitude, **reversed sense**. The emf–time graph is two equal rectangular pulses of opposite sign with a gap between them.
7. **Energy.** Pulling it right out through the 0.20 m of travel takes t = 0.20/2.5 = 0.080 s, so the work done is (0.018)(0.20) = **3.6×10⁻³ J**, all of it appearing as heat: (4.5×10⁻²)(0.080) = 3.6×10⁻³ J ✔.

## Worked example 3 — the flux changing because the angle changes

*A coil of **50 turns** and area **4.0×10⁻³ m²** sits in a uniform field **B = 0.25 T** with its **normal along B**. Resistance **5.0 Ω**.*

1. **Initial flux linkage.** Φ₁ = BA = (0.25)(4.0×10⁻³) = 1.0×10⁻³ Wb; NΦ₁ = **5.0×10⁻² Wb**.
2. **Turn it through 90°** (normal now perpendicular to B) **in 0.10 s.** Φ₂ = 0, so |ΔΦ| = 1.0×10⁻³ Wb and |ε| = N|ΔΦ|/Δt = (50)(1.0×10⁻³)/0.10 = **0.50 V**.
3. **Flip it through 180° instead**, in the same 0.10 s. The normal now points **against** B, so **Φ₂ = −BA**: the flux has not merely vanished, it has **reversed sign**. |ΔΦ| = |−1.0×10⁻³ − 1.0×10⁻³| = **2BA = 2.0×10⁻³ Wb**, and |ε| = (50)(2.0×10⁻³)/0.10 = **1.0 V** — exactly **twice** the 90° answer. Quoting BA instead of 2BA here is the single commonest error in rotation problems, and it is a factor of two, not a rounding slip.
4. **Charge for the flip.** q = N ΔΦ/R = (50)(2.0×10⁻³)/5.0 = **2.0×10⁻² C (20 mC)** — and the same 20 mC however slowly you turn it over.
5. **Spin it continuously at 30 rev/s.** ω = 2πf = 2π(30) = **188.5 rad/s** (using f in place of ω is a factor 2π ≈ 6.28). Φ(t) = BA cos ωt, so ε(t) = NBAω sin ωt with peak **ε₀ = NBAω = (50)(0.25)(4.0×10⁻³)(188.5) = (0.050)(188.5) = 9.4 V**, and ε_rms = 9.4/√2 = **6.7 V**.
6. **Phase.** The emf is **zero when the flux is greatest** (face-on) and **greatest when the flux is zero** (edge-on): the emf tracks the **slope** of the flux, not its size. Reporting peak emf in the face-on position is the classic generator inversion.
7. **A geometry that gives nothing.** Spin the same coil about an axis lying **along B**, with the coil's plane containing B. The normal stays perpendicular to B, Φ = 0 at every instant, and **ε = 0** at 30 rev/s or at 30 000 — no matter what NBAω evaluates to.

## Worked example 4 — the rotating rod, and a solenoid-and-ring

*(a) A rod of length **0.50 m** rotates about one end at **120 rev/min** in a field of **0.20 T** parallel to the rotation axis. (b) A long solenoid of radius **2.0 cm** has **1500 turns per metre** and its current is rising at **25 A/s**. A ring of **20 turns** and radius **5.0 cm** is placed coaxially around it.*

**(a) Rotating rod.**
1. ω = 2πf = 2π(120/60) = 2π(2.0) = **12.57 rad/s**. (Using 120 directly as ω, or 2.0 as ω, are the two standard slips.)
2. ε = ½BL²ω = ½(0.20)(0.50)²(12.57) = ½(0.20)(0.25)(12.57) = **0.31 V**.
3. *Why the ½*: the far end moves at Lω = 6.28 m/s but the pivot end does not move at all; the emf is BLv̄ with **v̄ = ½Lω = 3.14 m/s**. Using the tip speed gives 0.63 V, exactly double.
4. The **outer end** is at the higher potential if B is along the rotation axis in the sense that makes v × B point outward — settle it with F = qv × B, never by guessing.

**(b) Solenoid and ring.**
1. **Field rate inside the solenoid.** B = μ₀nI ⇒ dB/dt = μ₀n(dI/dt) = (4π×10⁻⁷)(1500)(25) = **4.71×10⁻² T/s**.
2. **Which area?** B is essentially **zero outside** the solenoid, so the flux through the ring is B times the **solenoid's** cross-section, not the ring's: A = π(0.020)² = **1.257×10⁻³ m²**. Using the ring's own area π(0.050)² = 7.85×10⁻³ m² inflates the answer by 6.25 and is the trap the question exists for.
3. **Rate of change of flux.** dΦ/dt = (4.71×10⁻²)(1.257×10⁻³) = **5.92×10⁻⁵ Wb/s**.
4. **Emf.** ε = N dΦ/dt = (20)(5.92×10⁻⁵) = **1.2×10⁻³ V (1.2 mV)**.
5. **Induced electric field at the ring.** Per turn, ∮E·dl = E(2πr) = 5.92×10⁻⁵ V, so E = 5.92×10⁻⁵/(2π × 0.050) = **1.9×10⁻⁴ V/m** — and it is there **whether or not the ring is**. Remove the wire and the circulating E field remains.
6. **Direction.** If B inside the solenoid points **up** the axis and is **increasing**, the induced current in the ring must produce **downward** flux inside itself ⇒ it flows **clockwise seen from above** (looking along B). Nothing in the problem moves.

## Commonly confused

- **ε depends on dΦ/dt — not on Φ, not on B, not on how strong anything is.** Faraday's own conclusion is that the *existence* of flux is not sufficient. The stationary magnet inside the loop, with the largest flux in the whole experiment and zero emf, is the deck's own proof.
- **Lenz opposes the *change*, not the field.** Rising flux ⇒ induced field **against** B. **Falling flux ⇒ induced field along B.** "The induced field is always opposite to B" is wrong exactly half the time, and it is wrong in the deck's very first illustrated case.
- **The minus sign means direction, not sign of a number.** ε = −N dΦ/dt never asserts "the emf is negative volts". It ties the sense of the current to the chosen positive normal.
- **Reversing your chosen normal changes nothing physical.** Both Φ and the positive circulation sense flip together. Students who "get a negative answer" and reverse the current direction on that basis alone are guessing.
- **Lenz's law gives only the direction.** It contains no magnitude at all; the size comes from Faraday's law and from Ohm's law after it.
- **The flux that matters is through the *enclosed area*, not the field at the wire.** A ring outside a solenoid sits where B ≈ 0 and still has an emf. Conversely the huge field just outside the loop's boundary contributes nothing.
- **Emf ≠ current, and "induces a current" is loose.** Faraday's law induces an **emf**; a current flows only if the path closes. A cut coil has the full emf and no current. Questions that never mention R are asking only for ε.
- **N multiplies the emf, not the flux per turn.** Φ = BA cos θ is per turn; the linkage NΦ is what you differentiate. Writing ε = −dΦ/dt for a 250-turn coil under-reports by 250.
- **Flipping a coil through 180° gives ΔΦ = 2BA, not BA.** The flux reverses sign, it does not merely disappear. Turning through 90° gives BA. A factor of two, every time.
- **ε = BLv is for a *sliding* rod; ε = ½BL²ω is for a rod *rotating* about one end.** The ½ is the mean speed of the rod, not a fudge; using the tip speed doubles the answer.
- **In ε = BLv, B, L and v must be mutually perpendicular.** A rod sliding along its own length, or moving parallel to B, generates nothing.
- **Motion is neither necessary nor sufficient.** Stationary coil in a rising field: emf. Loop drifting entirely inside a uniform field: none. The criterion is dΦ/dt.
- **Faster does not move more charge.** q = NΔΦ/R is independent of the time taken. Doubling the speed doubles ε and I and halves the duration.
- **"Plane perpendicular to B" ⇒ θ = 0 ⇒ maximum flux.** θ is measured from the **normal**. Reading it from the plane swaps sin and cos in everything downstream.
- **Flux maximum ⇒ emf zero.** In a rotating coil the emf is the *slope* of the flux, so the two are a quarter-cycle apart.
- **There are two right-hand rules in this topic and mixing them is fatal.** *Loop:* thumb along the induced B **inside** the loop, fingers give the current. *Straight wire:* thumb along the current, fingers give B. The deck uses the wire version on one side of the loop; both are correct, neither is the other.
- **The retarding force is the mechanism, not a defect.** It is how mechanical work becomes electrical energy. "Frictionless rails" removes mechanical friction, never the magnetic opposition.
- **Eddy currents are ordinary induced currents in bulk metal** — no new law. Laminating a core interrupts their paths and leaves the useful flux alone.
- **The induced electric field is non-conservative**, so the induced emf is strictly *not* a potential difference and ∮E·dl ≠ 0 round the loop.
- **This week's minus sign is Lenz's.** It is unrelated to the minus in Week 8's U = −μ·B, and it is the *same* one that reappears in ε = −L dI/dt.

*Note on the source. The Week 11 lecture deck (`Faraday-s-Law-and-Lenz-s-Law-PDF`) is in two halves of very unequal quality. The **Lenz's law half is genuinely good**: the increasing/decreasing rule is stated in three clean lines, the two illustrated cases (a field out of the page decaying to zero ⇒ anticlockwise; no field rising to a field out of the page ⇒ clockwise) are both **correct**, the two-step direction example is correct, the minus sign is correctly identified as Lenz's law, and it is correctly attributed to **conservation of energy**. The **Faraday half does not survive the extraction at all**: **five consecutive slides headed "FARADAY'S LAW OF INDUCTION" and both slides headed "FARADAY'S LAW OF INDUCTION: example" carry no text whatever** — the equation, the definition of flux and both worked examples existed only as images, so **ε = −N dΦ/dt, Φ = BA cos θ and the weber are nowhere written in the deck**, and the second learning objective ("use Faraday's law to determine the magnitude of induced emf") is left with nothing calculable behind it. The standard 100-level treatment of exactly the three stated objectives has been supplied above, together with the sign convention, the direction algorithm, motional emf and the induced electric field, none of which the deck reaches. Errors and defects to flag before they reach an exam. **(i) The week's Summary sheet is about the wrong topic entirely.** Its header reads "Topic: Faraday and Lenz's Laws", and its body then says *"This week, you learned about **Gauss's Law**… the total **electric** flux through any closed surface is proportional to the total electric charge enclosed"*, followed by eight bullets on electric flux, a case study on **capacitors**, and a personal reflection on "this lesson on Gauss's law". **Every word of it is electrostatics; none of it is induction.** It is a copy-paste from an earlier week and should be ignored for Week 11 — with one caution, that "the angle θ is important" and "maximum flux when the normal and the field are parallel" happen to be true of magnetic flux too, for the same geometric reason. **(ii)** The closing slide's *"Lenz's law can be derived from Faraday's law"* is textbook phrasing (Young & Freedman) and is defensible only if the minus sign is taken as given; the honest statement is that **the minus sign *is* Lenz's law**, and that what justifies it is **energy conservation**, exactly as the deck itself says four slides earlier. Treat the two statements as one, not as two independent claims. **(iii)** *"Only the Magnetic Field within the loop counts; disregard the Magnetic Field outside"* is a serviceable working rule but is loosely put: what counts is the **flux through the area enclosed by the loop**, which is why a ring encircling a solenoid has an emf even though B at the wire is zero. **(iv)** Motional emf is not mentioned anywhere in the deck, although determining the direction of the induced current in a moving conductor is squarely within the third objective; it is treated above. **(v)** The deck says *"the direction was arbitrarily chosen to be negative"* of the first ammeter deflection — a fair statement about the meter, but it should not be confused with the minus sign in Faraday's law, which is not arbitrary. Ligatures are lost throughout the extraction ("ﬂux" → "ux", "ﬁeld" → "eld"/"fied", "sufficient" → "suicient", "different" → "dierent"), and "baery" is **battery**.*
