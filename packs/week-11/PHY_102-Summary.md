# PHY_102 — Week 11

*General Physics II · Week 11 (16 – 22 Nov 2026)*

Topic: **Faraday's Law of Induction and Lenz's Law.**

*Warning: the Week 11 "Summary" PDF on the LMS is the wrong document. Its title says Faraday and Lenz's laws, but its whole body — the In Summary paragraph, the eight bullets and the case study — is about Gauss's law and electric flux, an earlier topic. Do not revise Week 11 from it. Revise from the lecture deck and from this page.*

## The 7 things most likely to be examined

1. **Only a *changing* flux induces an emf.** A large steady flux gives zero emf. Faraday's own conclusion in the deck: "The actual existence of the magnetic flux is not sufficient to produce the induced emf; the flux must be changing."
2. **ε = −N dΦ_B/dt** — magnitude and the meaning of the minus sign (Lenz).
3. **Φ_B = B·A·cos θ, θ measured from the *normal* to the loop**, not from the plane of the loop.
4. **Three independent ways flux changes**: B changes, A changes, θ changes. The flux rule is valid for all three, and for combinations.
5. **Motional emf** ε = B·L·v, and the **retarding force** F = B²L²v/R that follows from it (energy conservation).
6. **Generator**: ε = N·B·A·ω·sin(ωt), ε_peak = NBAω, ε_rms = ε_peak/√2.
7. **Lenz direction procedure**: (i) which way does the *external* flux through the loop point and is it growing or shrinking; (ii) induced B inside the loop opposes that *change*; (iii) right-hand grip rule → current sense.

## Definitions and formulae

**Magnetic flux** Φ_B = ∫ B·dA. For a uniform field over a flat loop:

    Φ_B = B*A*cos θ          [Wb = weber = T·m² = V·s]

- B = magnetic flux density (tesla, T); A = area enclosed by the loop (m²);
- θ = angle between **B** and the **area vector A** (the outward normal to the loop's plane).
- θ = 0 → loop plane ⊥ B → **maximum** flux. θ = 90° → loop plane contains B → **zero** flux.

**Faraday's law of induction.** The induced emf in a closed loop equals the negative of the time rate of change of magnetic flux through the loop:

    ε = − N * dΦ_B/dt        [V = Wb/s]

- N = number of turns (dimensionless); each turn links the same flux, so emfs add in series.
- ε is an **emf**, in volts — not a force. It is distributed round the loop; there is no single "seat" of it.
- Expanded for a uniform field: ε = −N * d(B*A*cos θ)/dt, so
      ε = −N [ A cos θ · dB/dt + B cos θ · dA/dt − B A sin θ · dθ/dt ].
  Only the terms that actually vary contribute.
- **Average emf** over a finite interval: |ε_av| = N|ΔΦ_B|/Δt. Use this when given "from … to … in … seconds"; use the derivative when given a function of time.

**Induced current and charge.** For a loop of total resistance R (Ω):

    I = |ε|/R                q = ∫I dt = N|ΔΦ_B|/R

The transferred charge q (C) depends only on the *total* flux change and R — **not** on how fast the change happened. Fast change → big current, short time; slow change → small current, long time; same q.

**Motional emf.** A conducting bar of length L (m) sliding at speed v (m/s) on rails, B ⊥ plane of circuit and v ⊥ L:

    dA/dt = L*v   ⇒   |ε| = B*L*v,   I = BLv/R,   F_retard = B*I*L = B²L²v/R

- The retarding force always **opposes the motion** (Lenz). Mechanical power supplied = P = F*v = B²L²v²/R = I²R = electrical power dissipated. This *is* the energy argument for the minus sign.

**Rotating loop (a.c. generator).** N turns, area A, uniform B, rotating at angular speed ω (rad/s), θ = ωt:

    Φ_B = B*A*cos(ωt)   ⇒   ε = N*B*A*ω*sin(ωt)
    ε_peak = N*B*A*ω,   ω = 2πf,   ε_rms = ε_peak/√2 ≈ 0.707 ε_peak

- ε is zero when the flux is **maximum** (loop ⊥ B) and maximum when the flux is **zero** (loop ∥ B) — emf tracks the *slope* of Φ, not Φ.

**Lenz's law.** The induced current in a loop flows in the direction that creates a magnetic field opposing **the change** in flux through the area enclosed by the loop. The deck's three working rules — the induced field inside the loop:
1. points **opposite** to the external field if the external flux is **increasing**;
2. points **along** the original external field if the external flux is **decreasing** (it tries to "replace the missing" field);
3. is **zero** if the flux is not changing.
Only the field **within** the loop counts; disregard the field outside it. Lenz's law is a direct consequence of conservation of energy: if the induced current reinforced the change, the change would grow itself and produce energy from nothing.

**Right-hand grip rule.** Point the right thumb along the *required induced B inside the loop*; the curled fingers give the current sense. Equivalently: induced B out of the page ⇒ counterclockwise current; into the page ⇒ clockwise.

---

## Worked example 1 — changing B (and the charge that flows)

*A 200-turn circular coil of radius 5.0 cm lies with its plane perpendicular to a uniform field. B rises uniformly from 0.100 T to 0.500 T in 0.200 s. The coil has total resistance 8.0 Ω. Find the induced emf, the current, and the charge circulated.*

A = πr² = π(0.050)² = 7.854×10⁻³ m². Plane ⊥ B ⇒ normal ∥ B ⇒ θ = 0, cos θ = 1.
dB/dt = (0.500 − 0.100)/0.200 = 2.00 T/s.
|ε| = N A cos θ · dB/dt = 200 × 7.854×10⁻³ × 1 × 2.00 = **3.14 V**.
I = ε/R = 3.14/8.0 = **0.393 A**.
q = N|ΔΦ|/R = 200 × (7.854×10⁻³ × 0.400)/8.0 = 0.628/8.0 = **0.0785 C**.
*Check:* q = I·Δt = 0.393 × 0.200 = 0.0785 C ✓ (agrees only because dB/dt is constant here).

## Worked example 2 — motional emf, retarding force, energy

*A rod of length L = 0.25 m slides at v = 3.0 m/s on frictionless rails in a field B = 0.40 T directed into the page, perpendicular to the circuit plane. Circuit resistance R = 1.5 Ω. Find ε, I, the force needed to keep v constant, and check the power balance.*

|ε| = BLv = 0.40 × 0.25 × 3.0 = **0.30 V**.
I = 0.30/1.5 = **0.20 A**. Direction (Lenz): the enclosed area is growing, so flux into the page is increasing; induced B inside the loop must point **out of the page**; by the grip rule the induced current is **counterclockwise**.
Retarding magnetic force on the rod: F = BIL = 0.40 × 0.20 × 0.25 = **0.020 N**, directed opposite v. The applied force must equal this for constant speed.
Power balance: P_mech = Fv = 0.020 × 3.0 = 0.060 W; P_elec = I²R = (0.20)² × 1.5 = 0.060 W ✓.
*Note the scaling:* ε ∝ v, I ∝ v, F ∝ v, but **P ∝ v²**.

## Worked example 3 — rotating loop (generator), and average vs instantaneous

*A 100-turn coil of area 0.020 m² rotates at 50 Hz in a uniform field B = 0.25 T about an axis perpendicular to B. Find ε_peak, ε_rms, and the instantaneous emf when the coil's normal is 30° from B.*

ω = 2πf = 2π(50) = 314.16 rad/s.  **(Trap: ω is not 50.)**
ε_peak = NBAω = 100 × 0.25 × 0.020 × 314.16 = **157.1 V**.
ε_rms = 157.1/√2 = **111.1 V**.
θ = ωt = 30° ⇒ ε = ε_peak sin 30° = 157.1 × 0.500 = **78.5 V**.
*Contrast (average):* if instead the same coil is simply **turned** from θ = 0 to θ = 90° in 0.25 s, |ε_av| = N|ΔΦ|/Δt = 100 × (0.25 × 0.020 × |cos90° − cos0°|)/0.25 = 100 × 0.005/0.25 = **2.0 V** — an *average*, which says nothing about the peak.

## Worked example 4 — pure Lenz (the deck's own case)

*A loop lies in a uniform field directed out of the page; B increases in magnitude. Which way is the induced current?*

Step 1 — external flux is **out of the page and increasing**, so the induced field inside the loop must point **into the page** (rule 1) to oppose the increase.
Step 2 — right-hand grip rule: thumb into the page ⇒ fingers curl **clockwise** ⇒ induced current is **clockwise**.
*The mirror case:* field out of the page **decreasing** ⇒ induced field inside the loop is out of the page (rule 2) ⇒ **counterclockwise** current.

---

## Commonly confused

- **Flux vs rate of change of flux.** Maximum Φ ⇒ *zero* emf (the slope of cos is zero at its peak). A magnet held stationary inside a loop gives a big flux and no current at all.
- **θ from the normal, not the plane.** "The loop is inclined at 30° to the field" usually means the *plane* is at 30°, so θ = 60° and Φ = BA cos60° = 0.5BA. Read the wording, then draw the normal.
- **"Opposes the field" vs "opposes the *change* in flux."** If B is out of the page and *decreasing*, the induced field is also out of the page — it aids the external field while opposing its decrease.
- **Only the flux *through the loop* matters.** Field lines outside the enclosed area are irrelevant, however strong.
- **Changing B ≠ changing flux.** If the loop's plane contains B (θ = 90°), Φ = 0 at all times, so dΦ/dt = 0 and ε = 0 no matter how fast B changes.
- **ω vs f.** ε_peak = NBAω = 2πfNBA. Forgetting the 2π gives an answer 6.28× too small.
- **Peak vs rms vs average.** ε_rms = ε_peak/√2 applies to the *sinusoidal* generator output; N|ΔΦ|/Δt is a time-average over a stated interval and is a different quantity.
- **emf vs current.** ε exists whether or not the loop is closed; current needs a complete circuit. An open-ended rod moving in B still has an emf across its ends, but I = 0 and hence no retarding force.
- **Charge q is time-independent.** Halving Δt doubles I and halves the duration — q = NΔΦ/R is unchanged.
- **Lenz is not an extra law.** It is the minus sign in Faraday's law, and it is a statement of energy conservation, not a separate empirical rule.
