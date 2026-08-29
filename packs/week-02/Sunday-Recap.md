# Sunday recap — Week 2

*Sunday 20 September 2026, 19:00–20:00. One hour, two topics, one each, taught aloud with no notes.*

## How the topic is chosen

The topic is **not** picked from this page. Each person takes the nightly check they scored lowest on this week — lowest `score ÷ 12`, across Mon–Sat — and teaches that topic. This page is the **fallback only**: use it if the scores tie, or if checks were skipped and there is no honest lowest.

**You take the same eight courses, so do not both pick the same course.** If your lowest lands on the same course, the person with the lower ratio keeps it and the other moves to their next-lowest check *in a different course*. Two people teaching the same topic wastes half the hour.

Teaching means explaining it out loud until the other person can restate the mechanism — not reciting the summary. The listener's job is to keep asking the "why" questions below until the explanation stops being a definition and starts being a reason.

---

## Fallback topic 1 — PHY_102: why E can vanish where V does not, and V vanish where E does not

**The claim:** the electric field is a vector and the potential is a scalar, and almost everything that looks paradoxical about the pair follows from that one fact.

**Why it tends to be misunderstood.** `E` and `V` are introduced in the same breath, both fall off with distance, and both are computed from the same charges — so they get filed as two names for roughly one thing. That makes it seem impossible that one could be exactly zero at the very point where the other is largest. It is not impossible; it is the normal case, and it happens in *opposite* configurations for the two quantities.

**Five "why" questions for the listener, easy to hard.**

1. What is the unit of `E` and what is the unit of `V` — and what does each unit tell you the quantity is *per unit of*?
2. Why does a field contribution need a direction, while a potential contribution needs only a sign?
3. At the midpoint between two equal **positive** charges, what are the two field arrows doing, and what are the two potential numbers doing?
4. Now make one of those charges negative. Which of `E` and `V` is zero at the midpoint, and which is at a maximum?
5. Why can you *not* recover `E` at a point just by dividing `V` at that point by a distance?

**What a good answer contains.**

- `E` is **force** per unit charge (N/C, a vector); `V` is **energy** per unit charge (J/C, a scalar). The whole difference is that force has a direction and energy does not.
- Field contributions therefore add as arrows that can point against each other and cancel; potential contributions add as signed numbers, which cancel only when the charges differ in sign.
- Hence two **like** charges give `E = 0` and `V` at a maximum at the midpoint, while two **unlike** charges of equal magnitude give `V = 0` and `E` at a maximum there. The two quantities vanish in opposite configurations — and neither can be got from the other by a simple division.

**Worked example.** Two charges of `+q` sit a distance `2a` apart. Take the midpoint M.

*Field.* The left charge pushes a positive test charge to the right with magnitude `kq/a²`. The right charge pushes it to the left with the same magnitude `kq/a²`. Equal arrows, opposite directions → **E = 0** at M.

*Potential.* Each contributes `+kq/a`, a positive number with no direction → **V = 2kq/a**, a maximum, not zero.

Now flip the right-hand charge to `−q`.

*Field.* The `+q` pushes the test charge to the right with `kq/a²`; the `−q` **pulls** it to the right with `kq/a²`. Both now point the same way → **E = 2kq/a²**, a maximum.

*Potential.* `+kq/a` from one and `−kq/a` from the other → **V = 0**.

The two cases have swapped exactly.

*The trap worth naming.* In that second case `V = 0` at M while `E` is at its largest — which is precisely why you cannot divide `V` by a distance to recover `E`. The real relation is that `E` measures the **rate at which V changes with position**, and a quantity can pass through zero while changing very fast indeed.

---

## Fallback topic 2 — COS_102: what "unsolvable" and "undecidable" actually claim

**The claim:** both words are statements about the existence of a *method*, not about the existence of an *answer*.

**Why it tends to be misunderstood.** In ordinary speech "unsolvable" means "has no answer", so the technical sense gets read that way — and "undecidable" then sounds like a stronger word for "very hard indeed". Both readings are wrong. The lecture slide explicitly warns against the first, and it is exactly the kind of line that gets skimmed.

**Five "why" questions for the listener, easy to hard.**

1. In this course, what is being claimed when a problem is called unsolvable — something about the answer, or about something else?
2. Take one specific program and one specific input. Does the question "does it halt?" have an answer at all?
3. If every individual case *has* an answer, what is it that the halting problem says cannot be done?
4. Why does a faster computer, or more memory, not help with an undecidable problem, when it plainly does help with a merely difficult one?
5. Why are undecidable problems described as a *subset* of unsolvable ones, rather than as a separate category?

**What a good answer contains.**

- It states the lesson's own correction outright: unsolvable problems are **not** problems for which no solution can be found — the claim is that no systematic method exists for **deciding them for every input**.
- It separates the individual case from the general procedure: any particular program either halts on a given input or does not, so every instance has a true answer. What fails to exist is *one algorithm returning the right answer for all instances*.
- It distinguishes proved impossibility from cost: difficulty is about time and resources, where a faster machine helps; undecidability has been **proved**, so no machine, however fast, can do it. Undecidable problems sit inside the unsolvable ones as exactly those decision problems for which this has been established.

**Worked example.** Ask for `H(P, I)`: a program that reads any program `P` and input `I` and prints HALTS or LOOPS, correctly, every time.

*First, note the answer exists case by case.* `while true do nothing` loops. `print 1 and stop` halts. Each individual question has a definite true answer — so this is **not** a case of "no answer exists".

*Now suppose `H` existed.* Build a program `D` that takes a program `P`, runs `H` on the pair `(P, P)`, and then does the **opposite** of what `H` says:

- if `H` reports HALTS → `D` enters an infinite loop;
- if `H` reports LOOPS → `D` stops immediately.

*Run `D` on itself.*

- If `D` halts, then `H(D, D)` reported HALTS — but `D` was built to loop in that case, so it does **not** halt.
- If `D` loops, then `H(D, D)` reported LOOPS — but `D` was built to stop in that case, so it **does** halt.

Either branch contradicts itself, so no such `H` can exist.

*Note carefully what has been proved:* not that some particular program's behaviour is unknowable, but that **no single general method works for every input**. That is the whole difference between undecidable and merely difficult — and it is why a faster machine changes nothing at all.
