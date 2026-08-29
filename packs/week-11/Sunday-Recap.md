# Sunday Recap — Week 11

*Sunday 22 November 2026, 19:00–20:00. One hour total, not one hour each. Two topics: one his, one his partner's.*

## How the topic gets picked

**Your lowest nightly-check score of the week decides it.** Six checks (Mon MTH, Tue PHY, Wed COS, Thu MTH-problems, Fri PHY-problems, Sat COS-code), **twelve out of twelve each**. Whichever you scored lowest on is the topic you teach, no notes.

**You take the same eight courses, so do not both pick the same course.** Whoever scored lower on that course keeps it; the other person moves to their next-lowest score in a *different* course. Settle this in Friday's review hour, not at 19:00 on Sunday.

The two topics below are **fallbacks only** — use them if the scores tie, or if the checks got skipped and there is no score to go on.

```
19:00  he teaches (10 min)      19:10  partner asks "why" until it breaks (5 min)
19:15  partner teaches (10)     19:25  he asks "why" (5 min)
19:30  close both gaps together (20 min)    19:50  slack
```

---

## Fallback topic 1 — PHY_102: Lenz's law says the induced current opposes the CHANGE in flux, not the field itself, so a field that is decreasing gets HELPED by the induced field rather than fought; the minus sign in emf = −N dΦ/dt is not a separate empirical rule but conservation of energy written down, and the direction it fixes is always read from the induced field required INSIDE the loop, never from the field outside it.

**Why it tends to be misunderstood.** "Opposes" is an ordinary English word carrying an ordinary English object, and the object students silently attach to it is *the field*. Once that reading is in place it survives every worked example in which the flux happens to be increasing — which is most of them, because the demonstration everybody remembers is a north pole pushed towards a coil. The model gives the right answer there for the wrong reason, so it is never corrected, and it fails silently in exactly the cases that carry marks. Pull the same magnet away and the student, reasoning that the induced field must fight the external one, produces a current in precisely the wrong sense; the correct answer has the induced field pointing *along* the external field, propping up a flux that is draining away. The second casualty is the minus sign. Taught as a bookkeeping convention — "remember to write the minus" — it becomes something to be dropped as soon as a magnitude is wanted, and with it goes the only physical content Faraday's law has about direction. A student who cannot say why the sign must be negative cannot answer the question that follows: what would happen if it were positive. The third failure is subtler and shows up in circuit-and-rod problems. Asked which way the current flows, students reason from the field in the region where the magnet is, or from the field outside the loop, rather than from the field required *within the area the loop encloses* — and the deck's three rules are stated about the interior for exactly that reason. The tell that the wrong model is present is a student who gets every "magnet approaching" question right and every "magnet receding", "current being switched off" and "field collapsing" question wrong, and who reports the retarding force on a sliding rod as helping the motion whenever the rod moves back the way it came.

**Five escalating "why" questions for the listener:**

1. Why, when a north pole is pushed towards a loop, does the loop's near face have to become a north pole — and which quantity is it that the induced current is set up to oppose?
2. Why does that same reasoning give an induced field pointing *along* the external field when the magnet is pulled away, even though the law is stated as "opposition"?
3. Why must the sign be negative — what could you build, and what would it produce, if the induced current reinforced the change instead?
4. Why does the direction have to be read from the field the induced current makes *inside* the loop, when the same current makes a field outside the loop too, pointing the other way?
5. Why does the retarding force on a rod sliding on rails always oppose the *motion*, whichever direction the rod moves and whichever way B points — and why is the energy audit F·v = I²R the same statement as the minus sign?

**What a good answer contains:**

- It must state the law with its correct object: the induced current flows in the sense whose own magnetic field opposes **the change in the flux through the loop**, so an increasing external flux is met by an induced field pointing the other way and a decreasing one by an induced field pointing the same way — and it must give the third case, that a steady flux, however large, induces nothing at all.
- It must derive the minus sign from energy rather than assert it: if the induced effect reinforced the change, the change would amplify itself without limit and deliver electrical energy from nothing, so the sign is fixed by conservation of energy, and the same argument is what makes the magnetic force on a current-carrying rod retard whatever motion is producing the emf.
- It must name the procedure and be able to run it: identify the external field through the loop's enclosed area and whether that flux is growing or shrinking, deduce the direction the induced field must point **inside** the loop, then apply the right-hand grip rule — thumb along that induced field, fingers give the current sense — noting that the field outside the loop is irrelevant to the argument.

**Worked example.**

The same loop, lying flat in the plane of the page, in four situations. Decide the sense of the induced current in each.

Step 1. **B out of the page, increasing** from 0.20 T to 0.60 T. The external flux is out of the page and growing, so the induced field inside the loop must point **into the page** to oppose the growth. Right hand, thumb into the page, fingers curl **clockwise** — the induced current is clockwise. This is the case everybody gets right.

Step 2. **B out of the page, decreasing** from 0.60 T to 0.20 T. The flux is still out of the page, but it is now shrinking, so the induced field inside the loop points **out of the page** — the *same* way as the external field — trying to replace what is being lost. Thumb out of the page, fingers curl **counterclockwise**. The WRONG APPROACH is to reason "Lenz means oppose the field, the field is out of the page, so the induced field is into the page, so clockwise" — which reproduces the Step 1 answer and is exactly backwards. Note what has and has not changed between the two steps: the field direction is identical in both, and only the *sign of dΦ/dt* differs. That is the whole content of the law.

Step 3. **A magnet's north pole withdrawn from above the loop.** Flux downward through the loop is decreasing, so the induced field inside the loop points **downward** to sustain it, which makes the loop's upper face a **south** pole — and a south pole attracts the receding north pole, dragging it back. The WRONG APPROACH is to say the loop always repels the magnet; it repels an approaching pole and attracts a receding one, and both are the same rule. Check it by energy: in each case the magnetic force resists whatever you are doing, so your hand does work, and that work is what appears as I²R in the loop. If the loop attracted the approaching magnet instead, the magnet would accelerate inwards, driving a larger current, which would attract it harder — a runaway delivering unlimited energy from a single push. That impossibility is the minus sign.

Step 4. **A rod of length L = 0.25 m sliding at v = 3.0 m/s on rails, B = 0.40 T into the page, R = 1.5 Ω.** |ε| = BLv = 0.30 V and I = 0.20 A. The enclosed area is growing, so the flux into the page is increasing, so the induced field inside the loop must point out of the page and the current runs **counterclockwise**. The force on the rod is F = BIL = 0.020 N directed **against** v. Now push the rod the other way at the same speed: the enclosed area shrinks, the current reverses, and F reverses too — so it is *again* against the motion. Audit the energy: P_mech = Fv = 0.060 W and P_elec = I²R = (0.20)²(1.5) = 0.060 W, equal in both directions. The WRONG APPROACH is to fix the current's direction once from the picture and carry it over when the motion reverses, which produces a force that drives the rod faster and manufactures power — the same impossibility as Step 3, in circuit form.

Conclusion: in all four situations the external field's direction alone predicted nothing. What decided the answer every time was whether the flux through the enclosed area was rising or falling.

---

## Fallback topic 2 — MTH_102: Every radius in a solid of revolution is a DISTANCE FROM THE AXIS, not a value of the function, and the integrand is the AREA of a cross-section — so a washer subtracts squared radii, π∫(R² − r²), never the square of a difference, π∫(R − r)²; moving the axis to y = k changes every radius to |f(x) − k| without changing the formula at all; and a shell carries only ONE power of its radius with a factor 2π in front, because it is a rolled-up rectangle rather than a disc.

**Why it tends to be misunderstood.** The whole of last week was areas between curves, where the integrand genuinely is a difference of *y*-values, top minus bottom, and where the answer is obtained by subtracting first and integrating second. That habit is a week old and completely automatic by now, and volumes look like the same problem with a π in front. So the student writes π∫(R − r)² dx, or worse π∫(R − r) dx, and the algebra goes through without complaint — nothing in the working signals an error, and the number that comes out is plausible. It is wrong because the object being integrated is not a height at all: it is an *area*, the area of the annulus you actually see when you slice the solid perpendicular to the axis, and the area of an annulus is πR² − πr², a difference of two circle areas. (R − r)² is the square of the annulus's *width*, a quantity with no geometric role whatsoever. The second half of the confusion is what R and r are. Students read them off the functions — "R = f(x)" — which is true only when the axis of revolution happens to be y = 0, and every single problem in the first week of the topic is about the x-axis, so the shortcut is never punished. Move the axis to y = −1 and the student who memorised R = f(x) is now silently wrong by a constant, while the student who understood "R is the distance from the axis to the far edge of the region" writes R = f(x) + 1 without any new rule being needed. Third, the shell formula gets cross-contaminated: having just learnt that discs square their radius, students square the shell's radius too, or drop the 2π to match the disc's single π. A shell is not a disc — it is a rectangle 2π·radius long, height h, thickness dx — so the radius appears once and the 2π is the unrolled circumference. The reliable tell that the wrong model is present: the student is fluent about the x-axis and the y-axis, and stalls completely at "rotate about the line y = 2".

**Five escalating "why" questions for the listener:**

1. Why is the thing inside the integral π[f(x)]² rather than f(x) — what does that expression measure, and what are its units before dx is attached?
2. Why is the washer π∫(R² − r²)dx and not π∫(R − r)²dx, when for *areas* between curves last week you did subtract before integrating?
3. Why is R the distance from the axis to the far boundary rather than simply the value of the function — and what does R become when the axis is the line y = k instead of y = 0?
4. Why does the shell formula carry 2π and only one power of the radius, when the disc formula carries π and two — and where does each factor come from geometrically?
5. Why can the same solid be computed by washers in y and by shells in x and give the same number, and what feature of a region decides which of the two is actually workable?

**What a good answer contains:**

- It must identify the integrand as a **cross-sectional area** and the integral as V = ∫A(s)ds, so that slicing perpendicular to the axis gives a full circle (disc, A = πR²) when the region touches the axis and an annulus (washer, A = πR² − πr²) when it does not, and it must say explicitly that the annulus's area is a difference of two circle areas, which is why the radii are squared *before* subtracting.
- It must define R and r as distances measured **from the axis of revolution** to the far and near boundaries of the region, and demonstrate that this single definition already handles a shifted axis — R = |f(x) − k| for the axis y = k — so that no new formula is required when the axis moves off a coordinate axis.
- It must derive the shell rather than recite it: a strip **parallel** to the axis at distance ρ, of height h and thickness dx, sweeps a cylinder which unrolls into a rectangle of length 2πρ and height h, giving dV = 2πρh dx — one power of ρ, and the 2π is a circumference, not half a disc — and it must state that disc/washer requires the axis to lie outside the interior of the region, or the slices overlap and the region has to be split.

**Worked example.**

One region, the area between y = x and y = x² on [0, 1], rotated about four different axes. The region's two boundaries are the same throughout; only the axis moves.

Step 1. **About the x-axis (washers).** Slice perpendicular to the axis: at each x the slice is an annulus. Far boundary from the axis is y = x, near boundary is y = x², so R = x and r = x².
V = π∫₀¹(x² − x⁴)dx = π[x³/3 − x⁵/5]₀¹ = π(1/3 − 1/5) = **2π/15**.
The WRONG APPROACH is π∫₀¹(x − x²)²dx = π∫₀¹(x² − 2x³ + x⁴)dx = π(1/3 − 1/2 + 1/5) = **π/30**, which is four times too small. Notice it is not obviously absurd — it is positive, it has a π, the integral evaluates cleanly. Nothing but understanding catches it.

Step 2. **About the y-axis (shells).** Now the axis is vertical, so slice with vertical strips *parallel* to it. The strip at x has radius x (its distance from the line x = 0) and height x − x² (upper curve minus lower).
V = 2π∫₀¹x(x − x²)dx = 2π∫₀¹(x² − x³)dx = 2π(1/3 − 1/4) = **π/6**.
The WRONG APPROACH is 2π∫₀¹x²(x − x²)dx, squaring the shell radius by analogy with the disc. Sanity check the structure instead: length × height × thickness = (2πx)(x − x²)(dx), three factors, one power of x from the circumference.

Step 3. **About the line y = −1 (washers with a shifted axis).** Same slices as Step 1, but every radius is now measured from y = −1. The far boundary is still y = x, so R = x − (−1) = x + 1; the near boundary is y = x², so r = x² + 1.
V = π∫₀¹[(x + 1)² − (x² + 1)²]dx = π∫₀¹[(x² + 2x + 1) − (x⁴ + 2x² + 1)]dx = π∫₀¹(2x − x² − x⁴)dx = π(1 − 1/3 − 1/5) = **7π/15**.
The WRONG APPROACH is to keep R = x and r = x² and "add the shift at the end", or to write R − r = (x + 1) − (x² + 1) = x − x² and conclude the shift cancels. It does not cancel: squaring first and subtracting second is not the same as subtracting first, which is the identical error as Step 1 wearing a different hat. Note the volume grew from 2π/15 to 7π/15 — moving the axis away from the region must increase the volume, and that is the cheap check.

Step 4. **About the line x = 2 (shells with a shifted axis).** Vertical strips again, but the radius is now the distance from x = 2, and the region lies to the *left* of the axis, so radius = 2 − x, which is positive throughout [0, 1]. Height is unchanged at x − x².
V = 2π∫₀¹(2 − x)(x − x²)dx = 2π∫₀¹(2x − 3x² + x³)dx = 2π(1 − 1 + 1/4) = **π/2**.
The WRONG APPROACH is radius = x − 2, which is negative on the whole region and returns −π/2; a negative volume is the one error in this topic the arithmetic does announce, so take the announcement and re-read the geometry rather than taking a modulus at the end.

Conclusion: four different answers — 2π/15, π/6, 7π/15, π/2 — from one region and one pair of curves. Nothing changed except the distance from each boundary to the axis, which is the only thing R, r and the shell radius have ever meant.
