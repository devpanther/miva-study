# Sunday Recap — Week 9

*Sunday 8 November 2026, 19:00–20:00. One hour total, not one hour each. Two topics: one his, one his partner's.*

> **Checkpoint week.** The end-semester mocks in `packs/mock-endsemester/` cover Weeks 5–9, one timed paper per course. Start them in Saturday's catch-up hour, notes closed and to time. If a mock score is clearly worse than any nightly check this week, **let the mock decide Sunday's topic instead** — five weeks of accumulated fog is worth more of this hour than one bad evening.

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

## Fallback topic 1 — PHY_102: The magnetic part of the Lorentz force is perpendicular to the velocity at every instant, so it does exactly zero work: a magnetic field bends a charged particle's path but can never change its speed or its kinetic energy, and everything else in the topic - the circular orbit, the speed-independent period, the crossed-field selector - is a consequence of that one geometric fact.

**Why it tends to be misunderstood.** The misunderstanding forms because 'force' arrives already fused with 'accelerate', and 'accelerate' has meant 'speed up' since secondary school. A student who computes a magnetic force of 0.30 N therefore concludes that something is being sped up, and the deck encourages it outright, stating that 'in Lorentz force, the work done is proportional to the charge q, and the velocity v of the charge' and that 'work is done on moving charges when in a magnetic field'. Both sentences are false: it is the force, not the work, that is proportional to q and v, and the work is identically zero. The second root is that the perpendicularity is easy to recite and hard to use. Students memorise 'F is perpendicular to v and B' as a direction rule serving the right-hand rule, and never connect it to work as the integral of F.dl, so the geometric fact and its energetic consequence sit in separate compartments. The belief survives self-checking because nothing in a routine calculation contradicts it: 'find the force', 'find the radius' and 'find the period' all come out right whether or not the student thinks work is being done. The error surfaces only when a question asks for the kinetic energy after several revolutions, or the work over a stated distance - at which point force times distance yields a confident, plausible, wrong number. It is masked further by the cyclotron, where protons demonstrably gain energy inside a magnet, so the wrong picture appears to be confirmed by the very device that refutes it.

**Five escalating "why" questions for the listener:**

1. Why does a magnetic field exert no force at all on a stationary charge, when an electric field of the same strength exerts a large one?
2. Why is the magnetic force always perpendicular to the velocity, rather than merely sometimes perpendicular?
3. Why does a force that is perpendicular to the velocity do no work, when it plainly produces a real acceleration and a visibly curved path?
4. Why, then, does the period of the circular orbit not depend on the speed, and what would have to be true of the motion for the period to depend on it?
5. Why does a cyclotron raise a proton to many MeV inside a magnetic field, if the magnetic field can do no work - and which field is actually paying for the energy at each step?

**What a good answer contains:**

- It must state that F = q(v cross B) is perpendicular to v by the definition of the cross product, so the instantaneous power F.v is zero and the work integral of F.dl vanishes over every path, however long.
- It must separate 'no work' from 'no force' and from 'no acceleration', saying that the acceleration q*v*B/m is real and centripetal, changing the direction of the velocity while leaving its magnitude untouched, so speed and kinetic energy are conserved but momentum and velocity are not.
- It must attribute any actual gain of energy to the electric term qE alone - naming the cyclotron's accelerating gap, where the alternating voltage does the work while the magnetic field merely returns the proton to that gap at intervals fixed by T = 2*pi*m/(qB).

**Worked example.**

A proton (m = 1.67x10^-27 kg, q = 1.60x10^-19 C) enters a uniform field B = 0.25 T at v = 3.0x10^6 m/s perpendicular to the field. Find the force on it, the radius and period of its orbit, and its kinetic energy after ten complete revolutions.
Step 1. Magnetic force: F = q*v*B*sin(90 degrees) = (1.60x10^-19)(3.0x10^6)(0.25) = 1.2x10^-13 N. It is a real, non-zero force.
Step 2. Direction: F = q*v cross B is perpendicular to the plane containing v and B, so it is perpendicular to v at this instant - and, since v turns with the force, at every later instant too.
Step 3. Radius: setting the magnetic force equal to the centripetal requirement, q*v*B = m*v^2/r gives r = m*v/(q*B) = (1.67x10^-27)(3.0x10^6)/[(1.60x10^-19)(0.25)] = (5.01x10^-21)/(4.00x10^-20) = 0.125 m.
Step 4. Period: T = 2*pi*r/v = 2*pi*m/(q*B) = 2*pi*(1.67x10^-27)/(4.00x10^-20) = 2.6x10^-7 s. Note that v has cancelled, so the period is the same at any speed.
Step 5. Kinetic energy on entry: KE = 0.5*m*v^2 = 0.5*(1.67x10^-27)(3.0x10^6)^2 = 7.5x10^-15 J, about 47 keV.
Step 6. Kinetic energy after ten revolutions: 7.5x10^-15 J, exactly as on entry. The only force acting is perpendicular to the velocity, so its power F.v is zero and the work done over ten revolutions - or ten million - is zero. The speed is unchanged, therefore so are the radius and the period.
The wrong approach: a student who has fused 'force' with 'speeding up' computes the distance travelled in ten revolutions, s = 10 * 2*pi*r = 10 * 2*pi*(0.125) = 7.85 m, multiplies by the force, W = (1.2x10^-13)(7.85) = 9.4x10^-13 J, and reports a final kinetic energy of 7.5x10^-15 + 9.4x10^-13 = 9.5x10^-13 J - a proton that has gained more than a hundred times its entry energy from a static magnet. The arithmetic is faultless and the physics is impossible: it invents energy from nothing. The error is using W = F*s, which is valid only when F is parallel to the displacement, on a force that is at 90 degrees to the displacement at every point, where the correct factor cos(90 degrees) = 0 kills the whole integral. A second, subtler version of the same mistake inserts cos(theta) using the angle between v and B rather than the angle between F and dl; here that would give a non-zero answer whenever v is not perpendicular to B, which is equally wrong, since F is perpendicular to dl regardless of the value of theta.

---

## Fallback topic 2 — MTH_102: The Comparison Test draws a conclusion in only two of the four possible pairings of f against g, so an integrand shown to be smaller than a divergent one, or larger than a convergent one, has not been tested at all and the argument establishes nothing.

**Why it tends to be misunderstood.** The test is remembered as a slogan about size rather than as two separate one-directional implications. A student learns that comparison relates a hard integral to an easy one, and then reasons informally: this integrand is smaller than 1/x, and (integral of 1/x) is infinite, so surely there is a lot of area here too. The informal picture is seductive because in most textbook exercises the guessed verdict happens to be correct, so the invalid step is never punished by a wrong answer. That is exactly why it survives self-checking: the student compares their final verdict with the answer key, sees agreement, and concludes the reasoning was sound, when in fact only the conclusion was lucky. The structural reason the two bad pairings are useless is that convergence at infinity is a statement about the total accumulated area, and knowing only that a function lies below something with infinite area constrains nothing, since both finite and infinite area are available below any divergent curve. The decisive demonstration is that 1/(x ln x) and 1/(x (ln x)^2) both lie strictly below 1/x on [2, infinity), yet the first diverges and the second converges; no theorem can distinguish them from the shared hypothesis, so no theorem can conclude from it. Marks are awarded for the implication used, not for the verdict reached.

**Five escalating "why" questions for the listener:**

1. State the Comparison Test in full. Which two implications does it give, and what are the two remaining pairings of hypothesis and conclusion that it does not give?
2. Why does the test require 0 <= f(x) <= g(x) rather than just f(x) <= g(x)? What breaks in the proof if f is allowed to be negative?
3. A student argues that (integral from 2 to infinity of dx/(x ln x)) diverges because 1/(x ln x) < 1/x and (integral of dx/x) diverges. The verdict is correct. Why is the argument still worth no marks?
4. Produce two functions both strictly less than 1/x on [2, infinity) whose improper integrals behave differently, and explain why their existence proves that no valid theorem can conclude anything from 'smaller than a divergent function'.
5. When the direct inequality points in the useless direction, what do you do instead, what exactly must the limit L satisfy, and what weaker conclusions do you still get when L = 0 or L = infinity?

**What a good answer contains:**

- It must state the two valid implications precisely -- smaller than convergent implies convergent, and bigger than divergent implies divergent -- and identify the other two pairings as carrying no information at all.
- It must explain the mechanism rather than restate the rule: because f >= 0, the truncated integral F(t) = (integral from a to t of f) is increasing in t, and because f <= g it is bounded above, and an increasing function bounded above must approach a finite limit.
- It must supply a concrete counterexample pair, such as 1/(x ln x) which diverges and 1/(x (ln x)^2) which converges, both lying below the divergent 1/x, and draw the conclusion that a correct verdict reached by an invalid implication is still an invalid argument.

**Worked example.**

Question: decide whether (integral from 2 to infinity of dx/(x (ln x)^2)) converges.
Step 1. Identify the type. The interval is infinite and the integrand is continuous on [2, infinity), since ln x > 0 there; this is Type I, so the integral means lim as t -> infinity of (integral from 2 to t of dx/(x (ln x)^2)).
Step 2. The wrong approach, first version. 'For x >= 2, ln x > 1 so x (ln x)^2 > x, hence 1/(x (ln x)^2) < 1/x. Since (integral from 2 to infinity of dx/x) diverges, the given integral diverges.' The inequality is true. The implication is not one the Comparison Test provides: it needs the SMALLER function to diverge in order to conclude divergence of the larger, and here the smaller function is the one being tested. Nothing has been established.
Step 3. Why no repair is possible. On the same interval 1/(x ln x) < 1/x as well, and (integral from 2 to infinity of dx/(x ln x)) genuinely diverges while the integral in question converges. Two functions satisfying identical hypotheses behave oppositely, so no theorem can decide from those hypotheses.
Step 4. The wrong approach, second version. 'Compare with 1/x^2, since 1/(x (ln x)^2) < 1/x^2.' This inequality is false for large x: x (ln x)^2 grows more slowly than x^2, so the integrand is eventually LARGER than 1/x^2. Guessing an inequality without checking it is the second half of the same habit.
Step 5. The correct route. There is an antiderivative, so evaluate. Substitute u = ln x, du = dx/x, with x = 2 giving u = ln 2 and x = t giving u = ln t. The integral becomes (integral from ln 2 to ln t of du/u^2) = [-1/u] from ln 2 to ln t = 1/ln 2 - 1/ln t.
Step 6. Take the limit. As t -> infinity, ln t -> infinity so 1/ln t -> 0, and the value is 1/ln 2, which is finite. Therefore the integral CONVERGES, to 1/ln 2.
Step 7. The lesson. The wrong approach in Step 2 produced the verdict 'diverges', which is not merely unjustified but actually false, while the identical argument applied to 1/(x ln x) would have produced a true verdict from the same invalid step. A conclusion that is right for the wrong reason is indistinguishable, from inside the student's own working, from one that is simply wrong.
