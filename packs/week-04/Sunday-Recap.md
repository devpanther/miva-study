# Sunday Recap — Week 4

*Sunday 4 October 2026, 19:00–20:00. One hour total, not one hour each. Two topics: one his, one his partner's.*

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

## Fallback topic 1 — MTH_102: The limit and the function value are two separate readings

**Why it tends to be misunderstood.** Every earlier year of maths trains one reflex — *to find the value at x = a, put a in* — and this week's material exists to break it. Reading limits off a graph makes the split visible: the limit is about the height the curve **heads towards** as you slide in from each side, and f(a) is a single dot sitting on the vertical line x = a. They usually agree, which is precisely why students never notice they are different questions, and then a hole or a jump appears and the whole reading collapses. Four specific errors follow. First, students read the **x-value** rather than the height: asked for lim_{x→2} f(x) they answer 2. Second, they read the **plotted endpoint** instead of the trend — at an open circle at (2, 5) the limit *is* 5, because the circle marks where the curve is heading even though the point itself is missing. Third, they think a discontinuity means the limit fails; at a removable discontinuity the limit exists perfectly well and it is f(a) that is missing or misplaced, and only a **jump** (unequal one-sided limits) or an **infinite** discontinuity actually kills it. Fourth, they treat "lim = ∞" as an answer of the same kind as "lim = 3", when it is a description of *how* the limit fails to exist. Behind all four is a habit of reading a graph as a picture rather than as two independent measurements — one taken by approaching, one taken by landing.

**Five escalating "why" questions for the listener:**

1. Why is lim_{x→2} f(x) a statement about the *height* the curve approaches and never about the number 2 itself?
2. Why does an open circle at (2, 5) with the curve running into it from both sides give lim_{x→2} f(x) = 5, even though f(2) is not 5 and may not exist?
3. Why can a function have a perfectly good limit at a point where it is discontinuous, and which of the three continuity conditions is the one that fails there?
4. Why does a jump discontinuity destroy the two-sided limit while a removable one does not — what exactly is different about the two pictures?
5. Why is writing lim_{x→3} f(x) = +∞ *not* the same kind of answer as lim_{x→3} f(x) = 7, and what is it actually telling you about the graph?

**What a good answer contains:**

- Separates the two readings explicitly: **the limit** is found by sliding in along the curve from the left and from the right and reading the **y-height** each side heads for, deliberately ignoring x = a; **f(a)** is read from the **filled dot** on the line x = a (an open circle means no point there).
- States the existence test — the limit exists exactly when the two one-sided limits exist and are **equal** — and the three conditions for continuity at c: f(c) defined, the limit exists, and the two are equal.
- Classifies the failures by picture: **removable** (limit exists, f(c) missing or displaced — a hole); **jump** (one-sided limits both exist but differ); **infinite** (a one-sided limit runs off to ±∞ — a vertical asymptote); and notes that "= ±∞" records how the limit failed rather than supplying a value.

**Worked example.** A single graph, read four times. Take f defined so that: for x < 1 the curve rises smoothly to an open circle at (1, 3); there is a filled dot at (1, 5) sitting on its own; for x > 1 the curve starts again at an open circle at (1, 3) and continues smoothly upward. Then at x = 4 the curve comes in from the left to a filled dot at (4, 2), and restarts on the right at an open circle at (4, 6). Near x = 7 the curve runs off to +∞ on both sides.

- **At x = 1:** lim_{x→1⁻} f(x) = **3** and lim_{x→1⁺} f(x) = **3**, so **lim_{x→1} f(x) = 3**. But **f(1) = 5** (the filled dot). Condition (i) holds and (ii) holds; **(iii) fails**, so f is discontinuous at 1 — a **removable** discontinuity. Redefining f(1) = 3 would repair it, which is what "removable" means.
- **At x = 4:** lim_{x→4⁻} f(x) = **2**, lim_{x→4⁺} f(x) = **6**. Unequal, so **lim_{x→4} f(x) does not exist** — a **jump** discontinuity. Note f(4) = 2 *is* defined; a defined value does not rescue the limit, and this is exactly the case where condition (ii) is the one that fails.
- **At x = 7:** both one-sided limits run to +∞. We write lim_{x→7} f(x) = +∞ to describe the vertical asymptote, but the limit **does not exist** as a number, and f(7) is undefined — an **infinite** discontinuity, failing (i) and (ii).
- **A contrast worth stating out loud:** at x = 1 the limit exists and the function value is wrong; at x = 4 the function value exists and the limit is wrong. Two different failures, two different repairs — and no way to tell them apart if you only ever substitute.

---

## Fallback topic 2 — PHY_102: The electric dipole in a uniform field — zero net force, non-zero torque

**Why it tends to be misunderstood.** Students carry over one rule from mechanics — *no net force means nothing happens* — and a dipole in a uniform field breaks it in the most visible way possible: the forces on +q and −q are equal in size and opposite in direction, so they cancel exactly and the dipole's centre of mass does not accelerate, yet the dipole visibly **turns**. The reason is that the two forces do not act at the same point: they form a **couple**, and a couple has zero resultant but non-zero torque. A student who has only ever computed ΣF concludes that a dipole in a field is in equilibrium, which is wrong in the one way the exam always tests. The second trap is the direction of **p**: physics defines it from **−q to +q**, chemistry the other way, and a student who mixes conventions gets the sign of U = −p·E backwards and predicts that alignment is the *high*-energy state. The third is reading the minus sign in U = −pE cos θ as decoration rather than as physics — it is what makes θ = 0° (aligned, U = −pE) the stable minimum and θ = 180° (anti-aligned, U = +pE) the unstable maximum, with θ = 90° the zero. The fourth is forgetting the word *uniform*: the force cancellation depends on both charges feeling the **same** E, so in a non-uniform field there is a net force as well as a torque — which is why a charged rod attracts neutral paper. And the fifth is the τ = pE sin θ factor: torque is **maximum at θ = 90°**, not at θ = 0°, which is the opposite of what students guess from "the field is trying hardest to align it when it is nearly aligned".

**Five escalating "why" questions for the listener:**

1. Why is the net force on a dipole in a *uniform* field exactly zero, and why does the dipole nevertheless rotate?
2. Why is the torque τ = pE sin θ largest when the dipole is *perpendicular* to the field and zero when it is aligned or anti-aligned?
3. Why does U = −p·E carry a minus sign, and why does that make the aligned position a *minimum* of energy rather than a maximum?
4. Why are θ = 0° and θ = 180° both positions of zero torque, and yet only one of them a stable equilibrium — what test tells them apart?
5. Why does a charged plastic comb attract small neutral scraps of paper, given that the paper has no net charge and a dipole in a uniform field feels no net force?

**What a good answer contains:**

- Defines the dipole and its moment: charges **+q and −q** separated by **d**, with **p = qd** a vector of unit **C·m** pointing **from −q to +q**; and states that in a uniform field the two forces are **+qE and −qE**, equal and opposite, so **ΣF = 0**.
- Explains the couple: the forces act at points separated by d, so they exert a torque **τ = pE sin θ** (vector form **τ = p × E**), maximal at θ = 90°, zero at 0° and 180°, and always in the sense that rotates **p** towards **E**.
- Uses the energy to sort the equilibria: **U = −p·E = −pE cos θ**, so U(0°) = **−pE** (minimum, **stable** — nudge it and the torque pushes it back), U(90°) = 0, U(180°) = **+pE** (maximum, **unstable** — nudge it and the torque drives it further away); and notes that in a **non-uniform** field the cancellation fails and there is a net force towards the stronger field.

**Worked example.** A dipole of charges ±2.0 nC separated by 3.0 mm sits in a uniform field E = 5.0 × 10⁴ N/C, at 30° to the field.

**Dipole moment:** p = qd = (2.0 × 10⁻⁹ C)(3.0 × 10⁻³ m) = **6.0 × 10⁻¹² C·m**.

**Net force:** each charge feels qE = (2.0 × 10⁻⁹)(5.0 × 10⁴) = 1.0 × 10⁻⁴ N, one along +E and one along −E, so **ΣF = 0** — the dipole does not translate.

**Torque:** τ = pE sin θ = (6.0 × 10⁻¹²)(5.0 × 10⁴) sin 30° = (3.0 × 10⁻⁷)(0.50) = **1.5 × 10⁻⁷ N·m**, acting to rotate p towards E. Check the extremes: at θ = 90° the same dipole would feel τ = 3.0 × 10⁻⁷ N·m, the maximum; at θ = 0° or 180°, τ = 0.

**Potential energy:** U = −pE cos θ = −(3.0 × 10⁻⁷) cos 30° = −(3.0 × 10⁻⁷)(0.866) = **−2.6 × 10⁻⁷ J**.

**Work to flip it end-to-end (θ = 30° → 210°, i.e. reversing p):** U(210°) = −(3.0 × 10⁻⁷) cos 210° = +2.6 × 10⁻⁷ J, so **W = ΔU = 5.2 × 10⁻⁷ J** must be done against the field. Rotating instead from 0° to 180° would cost the full **2pE = 6.0 × 10⁻⁷ J** — the largest possible, from the stable minimum to the unstable maximum.

**The paper scrap:** the comb's field is *non-uniform*, strongest near the comb. It induces a dipole in the paper with the near end oppositely charged; the near end sits in a stronger field than the far end, so the two forces no longer cancel and there is a net pull towards the comb. Uniformity, not neutrality, is what made ΣF vanish in the first place.
