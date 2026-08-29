# Sunday Recap — Week 12

*Sunday 29 November 2026, 19:00–20:00. One hour total, not one hour each. Two topics: one his, one his partner's.*

## How the topic gets picked

**Your lowest nightly-check score of the week decides it.** Six checks (Mon MTH, Tue PHY, Wed COS, Thu MTH-problems, Fri PHY-problems, Sat COS-code), **twelve out of twelve each**. Whichever you scored lowest on is the topic you teach, no notes.

**You take the same eight courses, so do not both pick the same course.** Whoever scored lower on that course keeps it; the other person moves to their next-lowest score in a *different* course. Settle this in Friday's review hour, not at 19:00 on Sunday.

The two topics below are **fallbacks only** — use them if the scores tie, or if the checks got skipped and there is no score to go on.

```
19:00  he teaches (10 min)      19:10  partner asks "why" until it breaks (5 min)
19:15  partner teaches (10)     19:25  he asks "why" (5 min)
19:30  close both gaps together (20 min)    19:50  slack
```

**This is the last teaching week.** Revision starts Monday 30 November, so whatever the hour exposes tonight is a revision item, not something to leave for next week's deck. Write it down before you close the laptop.

---

## Fallback topic 1 — MTH_102: ∫v dt is a SIGNED accumulation, so it returns displacement and never distance; the repair is to split the interval at the zeros of v and add magnitudes, never to take a modulus at the end. And the constant of integration is not bookkeeping — it is a physical quantity the rate cannot contain: v(0) in kinematics, the fixed cost C(0) in economics — which is also precisely why the extra cost of moving from one output to another needs no fixed cost at all.

**Why it tends to be misunderstood.** The trouble starts with the word "total". Every application this week is the net change theorem, ∫ₐᵇ r(t)dt = f(b) − f(a), and students correctly learn to read it as "integrate the rate, get the total". What goes unnoticed is that the theorem delivers a *net* total — a bookkeeping balance in which negative contributions cancel positive ones — and that this is the right answer for some questions and the wrong one for others. Because the first dozen examples anyone meets have a positive integrand (a tank filling, a pollutant discharging, a cost accumulating), the distinction never surfaces. The signed nature of the integral is invisible until the integrand changes sign, and by then the habit is set. So a student who can integrate perfectly writes ∫₀⁴ v dt for the distance travelled and does not feel a decision being made. The second failure is the attempted repair. Told that distance needs absolute values, students write |∫₀⁴ v dt| — modulus *after* integrating — which is not a repair at all: the cancellation has already happened inside the integral, and taking the modulus of a balance that is already net gives back the same wrong number with a guaranteed positive sign, which makes it look more correct than before. The only working procedure is to find the zeros of v, integrate over each sub-interval where the sign is constant, take the modulus of each result, and add. The third failure is the constant of integration, and it hurts twice in one week because this deck uses it in two different subjects. Taught as "+C, remember to write it", it reads as a notational tax to be paid and then forgotten, so students report that a(t) determines v(t) — it does not; two bodies with identical acceleration histories and different launch speeds are indistinguishable to a(t) — and they report that MC determines C(q) — it does not; the rent is paid before the first unit is made and no derivative can see a constant. Then the same misunderstanding runs the other way on the very next question: asked for the extra cost of going from q = 2 to q = 5, the student who has finally learned to respect the fixed cost adds it in, when C(5) − C(2) cancels it exactly and the money is already spent. The tell that the wrong model is present is a student who gets every filling-tank and every accumulating-cost question right, reports total distance as a suspiciously small number whenever a particle turns round, and either always or never includes a fixed cost regardless of whether the question asks for a level or a change.

**Five escalating "why" questions for the listener:**

1. Why does ∫₃⁷ r(t)dt come out in litres when r is in litres per minute — and what in that unit calculation tells you the answer is an amount rather than a rate?
2. Why is ∫₀⁴ v dt the displacement rather than the distance, when the same integral over a positive velocity gives both?
3. Why does |∫₀⁴ v dt| fail to fix it, and what exactly has been lost by the time you reach the modulus?
4. Why can a(t), known perfectly for every instant, still not tell you v(t) — and what is the physical name of the missing information in the kinematics case and in the marginal-cost case?
5. Why must the fixed cost be added to get C(5), yet left out entirely to get the extra cost of going from q = 2 to q = 5 — and why is it the *same* fact about constants that answers both halves?

**What a good answer contains:**

- It must state the net change theorem with the word *net* doing real work: ∫ₐᵇ r dt = f(b) − f(a) is a **balance**, in which intervals where r < 0 subtract from intervals where r > 0, and it must give the two cases — that this cancellation is exactly what displacement means, and exactly what distance must not do. It should confirm the reading dimensionally, (units of r)×(units of t), since that is what identifies the answer as litres, joules, naira or kilograms.
- It must give the working procedure for distance, not just the formula ∫|v|dt: locate the zeros of v, integrate over each sub-interval separately, take the modulus of each result, add. And it must say why the modulus has to go *inside*: after integrating, the forward and backward motion have already cancelled, so no operation applied to that single number can recover what was cancelled.
- It must treat the constant of integration as a physical fact rather than notation: antidifferentiation determines the function only up to an additive constant, so the initial condition v(0) or the fixed cost C(0) supplies information the rate genuinely does not contain. It must then close the loop by noting that this same fact makes the constant vanish from every *difference* — C(5) − C(2) = ∫₂⁵MC dq with no fixed cost in it — so the fixed cost matters for a level and is irrelevant to a change.

**Worked example.** One velocity function, four questions, four different right answers.

Take **v(t) = t² − 4t + 3 m/s on 0 ≤ t ≤ 4**, with s(0) = 0. Note first that v = (t − 1)(t − 3), so v > 0 on [0,1), v < 0 on (1,3), v > 0 on (3,4]. Antidifferentiating, s(t) = t³/3 − 2t² + 3t.

Step 1. **Displacement over [0,4].** This is the signed accumulation, and it is what ∫v dt gives directly:
∫₀⁴(t² − 4t + 3)dt = [t³/3 − 2t² + 3t]₀⁴ = (64/3 − 32 + 12) = **4/3 m**.
Nothing needs to be done to this. The particle ends 4/3 m to the right of where it started, and the integral has already accounted for the fact that it spent two seconds travelling the other way.

Step 2. **Total distance over [0,4].** Split at the zeros t = 1 and t = 3:
∫₀¹ = [t³/3 − 2t² + 3t]₀¹ = 1/3 − 2 + 3 = **+4/3**
∫₁³ = (9 − 18 + 9) − (4/3) = 0 − 4/3 = **−4/3**
∫₃⁴ = (64/3 − 32 + 12) − 0 = **+4/3**
Distance = |4/3| + |−4/3| + |4/3| = **4 m**.
The WRONG APPROACH is |∫₀⁴ v dt| = |4/3| = 4/3 m, which is simply the displacement wearing a modulus sign. Look at what the split reveals: the middle leg is worth −4/3, and in Step 1 it silently annihilated the first leg's +4/3. That is the entire content of the distinction. The cheap check is that distance must exceed |displacement| whenever v changes sign, and 4 > 4/3 as required — whereas the wrong answer returns the displacement exactly, which should be read as a warning, not a coincidence.

Step 3. **Why the split is at the zeros of v, not anywhere convenient.** Suppose you split at t = 2 instead: ∫₀² = 8/3 − 8 + 6 = 2/3 and ∫₂⁴ = 4/3 − 2/3 = 2/3, and adding magnitudes gives 4/3 — the wrong answer again. The zeros of v are the only points that matter because they are where the integrand changes sign, and therefore the only places where cancellation can begin. Splitting at a point where v does not change sign accomplishes nothing at all; splitting at every point where it does is both necessary and sufficient. The WRONG APPROACH here is treating "split the interval" as a ritual rather than as a statement about where the sign changes.

Step 4. **The same fact in money.** MC(q) = 3q² − 4q + 10 ₦/unit, fixed cost ₦50, so C(q) = q³ − 2q² + 10q + 50.
*Level:* C(5) = 125 − 50 + 50 + 50 = **₦175**. The fixed cost is in it, because C(5) is a total.
*Change:* the extra cost of going from q = 2 to q = 5 is ∫₂⁵MC dq = [q³ − 2q² + 10q]₂⁵ = 125 − 20 = **₦105**. The fixed cost is not in it — and not because we chose to leave it out, but because it appears identically in C(5) and in C(2) and cancels in the subtraction.
The WRONG APPROACH is ₦155, adding the ₦50 to the change; the rent is not paid a second time for having produced three more units. A second WRONG APPROACH is MC(5) − MC(2) = 65 − 14 = ₦51, which differences the *rate* instead of accumulating it — the exact analogue of reading v(4) when you were asked how far the particle went.

Conclusion: 4/3 m, 4 m, ₦175 and ₦105 all came out of two functions and one theorem. What separated them each time was whether the question asked for a **net balance** or an **unsigned total**, and whether it asked for a **level** or a **change** — never anything about how to do the integration.

---

## Fallback topic 2 — PHY_102: A transformer is not an amplifier. It buys voltage with current at an exactly equal rate, V₁I₁ = V₂I₂, so the turns ratio multiplies voltage by N₂/N₁ and divides current by the very same factor — but it transforms a load resistance by the SQUARE of that ratio, (N₁/N₂)²R, which is a different rule and not a harder version of the same one. And none of it functions on DC, because every volt the device produces comes from dΦ/dt and a steady current has none.

**Why it tends to be misunderstood.** A step-up transformer takes in 240 V and puts out 2400 V, and there is no honest way to look at that for the first time without feeling that something has been gained. Nothing in the everyday meaning of "step up" suggests a price, and the device has no moving parts, no fuel and no obvious cost, so the intuition that forms is of an amplifier — energy in, more energy out. It survives longer than it should because the first questions asked about transformers are voltage questions, and the transformer equation V₂/V₁ = N₂/N₁ answers all of them without ever mentioning current. The correction, when it comes, is usually delivered as a second formula to memorise, V₁I₁ = V₂I₂, rather than as the reason the first formula cannot mean what the student thought; so the two sit side by side, and under exam pressure the student reaches for the turns ratio and applies it to whatever quantity the question names. That produces the characteristic error of scaling the current the same way as the voltage — multiplying both by N₂/N₁ — which quadruples the power and, if anyone checked, would be visibly creating energy from nothing. The second casualty is resistance. Told that voltage scales by the ratio and current by its inverse, the natural extrapolation is that resistance scales by the ratio too; but R = V/I, and dividing something that has been multiplied by n by something that has been divided by n multiplies by n², so the load looks like (N₁/N₂)²R to the source. Because the square is never *derived* in front of most students — merely stated in the context of impedance matching, which sounds like a specialist topic — it gets remembered as an unrelated fact about loudspeakers rather than as the direct consequence of the two rules they already hold. The third failure is DC, and it is the one that shows the model is missing rather than wrong. Asked why a transformer cannot run a 12 V DC device from the mains, a student with the amplifier picture has nothing to say: the device changes voltages, 12 V is a voltage, so it should work. The answer requires knowing that the transformer is a Faraday's-law device end to end — the secondary emf is −N₂dΦ/dt — and that a steady primary current gives a steady core flux and hence exactly zero output. The tell that the wrong model is present is a student who computes secondary voltages flawlessly, scales currents the wrong way whenever a question crosses from one winding to the other, quotes the turns ratio when asked what resistance the supply is driving, and cannot say what a transformer does on DC beyond guessing that it "probably still works but less well".

**Five escalating "why" questions for the listener:**

1. Why does the transformer equation V₂/V₁ = N₂/N₁ hold at all — what is the same for both coils, and what does each turn contribute?
2. Why must the secondary current go *down* when the secondary voltage goes up, and what statement of physics fixes the two ratios as exact reciprocals rather than merely opposite in tendency?
3. Why is a load resistance transformed by the *square* of the turns ratio when voltage and current are each transformed by only the first power — and can you get the square out of the two rules rather than recalling it?
4. Why does connecting an 8 Ω loudspeaker directly to an amplifier of 800 Ω internal resistance deliver less power to it than putting a lossy transformer in between, even though the transformer can only waste energy?
5. Why does a transformer produce nothing at all on DC — and, given that answer, why does the output frequency equal the input frequency no matter what the turns ratio is?

**What a good answer contains:**

- It must derive the turns ratio rather than assert it: one alternating flux Φ in the core threads **every** turn of both windings, so each turn carries the same induced emf −dΦ/dt; multiplying by the number of turns gives V₁ = −N₁dΦ/dt and V₂ = −N₂dΦ/dt, hence V₁/N₁ = V₂/N₂. It must then say that the current ratio is a **separate** statement, coming from conservation of energy (P₁ = P₂ ideally), and that this is why voltage gain is paid for by current loss at exactly the same factor — a transformer transfers power, it does not make any.
- It must obtain the resistance rule from the other two in front of the listener: the source sees V₁/I₁; substituting V₁ = V₂(N₁/N₂) and I₁ = I₂(N₂/N₁) gives V₁/I₁ = (N₁/N₂)²(V₂/I₂) = (N₁/N₂)²R. The square must be explained as one factor from the voltage and one from the current, not memorised, and it should be connected to impedance matching: choosing the ratio so the transformed load equals the source's own internal resistance is the condition for maximum power transfer.
- It must identify the transformer as a Faraday's-law device throughout, so that the AC requirement is a consequence and not an extra rule: steady DC gives a steady core flux, dΦ/dt = 0, and hence zero secondary emf after the switch-on transient. It should add that the turns ratio scales the *size* of the emf but not the *rate* at which the flux reverses, which is why the output frequency always equals the source frequency, and that a transformer therefore cannot rectify — 12 V AC is not 12 V DC.

**Worked example.** One transformer, one appliance, four questions.

A **60 W, 24 V** soldering iron is to be run from the **240 V rms** mains through an ideal transformer whose primary has **1200 turns**.

Step 1. **The turns ratio and the secondary winding.** V₂/V₁ = N₂/N₁ gives N₂ = 1200 × 24/240 = **120 turns**. This is a step-down transformer, N₂ < N₁.
The WRONG APPROACH is 1200 × 240/24 = 12 000 turns, inverting the ratio. The structural check costs nothing: you want *less* voltage out, so you want *fewer* turns out.

Step 2. **The current in each winding.** In the iron itself, I₂ = P/V₂ = 60/24 = **2.5 A**. From the mains, do *not* rescale that with the turns ratio — use the power balance, which is the whole point: P₁ = P₂ = 60 W, so I₁ = 60/240 = **0.25 A**.
The WRONG APPROACH is to say "step-down transformer, so the current steps down too", giving 0.25 A in the iron and something smaller still at the wall. Notice the two ratios: the voltage fell by 10 and the current rose by 10, and the product 240 × 0.25 = 24 × 2.5 = 60 W is identical on both sides. That equality *is* the answer to "does it amplify?".

Step 3. **What resistance the mains appears to be driving.** The iron's own resistance is R = V₂²/P = 24²/60 = **9.6 Ω**. But the mains sees V₁/I₁ = 240/0.25 = **960 Ω**, and the square rule confirms it: (N₁/N₂)²R = 10² × 9.6 = 960 Ω ✓.
The WRONG APPROACH is 10 × 9.6 = 96 Ω, using the first power of the ratio. Watch where the square comes from in the arithmetic itself: the voltage the source supplies is 10× larger *and* the current it supplies is 10× smaller, and 10 divided by 1/10 is 100. There is no third rule here — only the two you already have, divided.

Step 4. **The same physics at the other end of the scale.** A station delivers 100 kW along a line of resistance 4.0 Ω. At 1.0 kV the line current is I = P/V = 100 A and the waste is I²R = 100² × 4.0 = **40 kW** — nearly half the power, gone as heat. Step the transmission voltage up to 10 kV and I = 10 A, so the waste is 10² × 4.0 = **400 W = 0.40 kW**.
The WRONG APPROACH is expecting a tenfold saving for a tenfold voltage; it is a hundredfold, because V enters twice — once in I = P/V, and once again because the heating is quadratic in that current, P_loss = I²R = P²R/V². And note what has *not* happened: the 100 kW delivered is the same in both cases. The transformer bought nothing; it simply moved the power along the line as a small current at high voltage rather than a large current at low voltage, and I²R punishes only the current.

Conclusion: 120 turns, 0.25 A against 2.5 A, 960 Ω against 9.6 Ω, and 40 kW against 0.40 kW — every one of them came from the same two statements, V₂/V₁ = N₂/N₁ and V₁I₁ = V₂I₂. Not one of the four answers required, or permitted, any energy to be created.
