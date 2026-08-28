# Sunday Recap — Week 1

*Sunday 13 September 2026, 19:00–20:00. One hour total, not one hour each. Two topics: one his, one his partner's.*

## How the topic gets picked

**Your lowest nightly-check score of the week decides it.** Six checks (Mon MTH, Tue PHY, Wed COS, Thu MTH-problems, Fri PHY-problems, Sat COS-code), six out of six each. Whichever you scored lowest on is the topic you teach, no notes.

**You take the same eight courses, so do not both pick the same course.** Whoever scored lower on that course keeps it; the other person moves to their next-lowest score in a *different* course. Settle this in Friday's review hour, not at 19:00 on Sunday.

The two topics below are **fallbacks only** — use them if the scores tie, or if the checks got skipped and there is no score to go on.

```
19:00  he teaches (10 min)      19:10  partner asks "why" until it breaks (5 min)
19:15  partner teaches (10)     19:25  he asks "why" (5 min)
19:30  close both gaps together (20 min)    19:50  slack
```

---

## Fallback topic 1 — PHY_102: Charging by induction and the role of the ground connection

**Why it tends to be misunderstood.** Students memorise the phrase "induction charges an object without touching it" but never track what actually moves, so they default to conduction thinking and predict the object ends up with the same sign as the rod. The ground wire is treated as a decorative step rather than the escape route that makes the charge permanent, and the order of removal (wire first, then rod) is learned as a ritual instead of a consequence. Textbook phrasing that says "the positive charges move to the near end" compounds the damage, because in a metal only electrons ever move.

**Five escalating "why" questions for the listener:**

1. Walk me through what happens when a negatively charged rod is brought near a neutral metal sphere — what physically moves, and in which direction?
2. You said the near side becomes positive. Which particles actually travelled to make that happen, and where are the protons during all of this?
3. Why does the sphere still end up with a net charge after grounding, when before grounding it was only polarised and would go back to neutral?
4. Why must the ground wire be removed before the rod, and not the other way round? Predict the sphere's final charge if you reverse the order, and say why.
5. If the rod were positive instead of negative, which way do the electrons flow through the ground wire, and what sign does the sphere end up with? Now explain why the sphere's final charge does not depend on how much charge the rod itself carries.

**What a good answer contains:**

- Only free electrons move in the metal; a positive region means an electron deficit, never migrated protons, and the near face's sign is opposite to the rod's.
- Grounding provides a path for electrons to leave (negative rod) or enter (positive rod) the sphere, converting temporary polarisation into a real net charge opposite in sign to the rod.
- The ground must be broken while the rod is still present, because the rod's field is what holds the imbalance in place; remove the rod first and the electrons flow back and the sphere returns to neutral.

**Worked example.** A neutral metal sphere sits on an insulating stand and a negatively charged plastic rod is brought close without touching it. The rod's field repels the sphere's free electrons to the far side, so the far side is negative and the near side is positive by electron deficit, with the sphere's total charge still zero. A wire is now connected from the sphere to earth, and the repelled electrons flow down the wire into the ground, because the earth is an effectively infinite reservoir and the rod keeps pushing them away. The wire is disconnected while the rod is still in place, trapping the electron shortage on the sphere. The rod is then withdrawn, and with no field to hold it the remaining positive charge redistributes uniformly over the sphere's surface. The sphere is left permanently positive, opposite in sign to the rod, and the rod has lost no charge of its own. Had the rod been removed before the wire, the electrons would simply have flowed back up from earth and the sphere would have ended neutral.

---

## Fallback topic 2 — MTH_102: The domain of a composite function f∘g

**Why it tends to be misunderstood.** Students compute (f∘g)(x), simplify the formula, and then read the domain off the simplified expression as if it were an ordinary function, losing restrictions that came from g. They also assume the domain of f∘g is just the domain of g, forgetting the second condition that g(x) must itself be an admissible input for f. Simplification is where the damage happens: cancelling a factor silently deletes a point that was never legal in the first place.

**Five escalating "why" questions for the listener:**

1. For f(x) = 1/(x−2) and g(x) = √x, what is the formula for (f∘g)(x) and what is its domain?
2. Why is x = 4 excluded, when 4 is a perfectly legal input for g?
3. Why do we also still require x ≥ 0, even though the number √x − 2 would make sense for some negative x if we allowed complex values?
4. Write the general rule for the domain of f∘g in set-builder form, and explain why it must be a subset of the domain of g rather than the domain of f.
5. For f(x) = 1/(x−1) and g(x) = x² you get 1/(x²−1). If instead f(x) = (x²−1)/(x−1) and you simplify to x + 1, what has the simplification destroyed, and what does that tell you about when it is safe to read a domain off a simplified formula?

**What a good answer contains:**

- The domain of f∘g is {x : x ∈ dom(g) **and** g(x) ∈ dom(f)} — two conditions, both compulsory.
- It is always a subset of dom(g), never larger, and it can be strictly smaller because some legal inputs of g produce outputs that f cannot accept.
- The domain must be fixed from the *unsimplified* composite: cancelling or simplifying can hide an excluded point, so restrictions are recorded before any algebra is done.

**Worked example.** Take f(x) = 1/(x−2) and g(x) = √x. Condition 1: x must be in dom(g), so x ≥ 0. Condition 2: g(x) must be in dom(f), so √x ≠ 2, giving x ≠ 4. Form the composite: (f∘g)(x) = f(√x) = 1/(√x − 2). Domain = [0, 4) ∪ (4, ∞), a proper subset of dom(g) = [0, ∞). Check a value: (f∘g)(9) = 1/(3 − 2) = 1, legal. Check the excluded value: (f∘g)(4) = 1/(2 − 2) is undefined, confirming the exclusion. Contrast the reverse order: (g∘f)(x) = √(1/(x−2)) needs 1/(x−2) ≥ 0 and x ≠ 2, giving domain (2, ∞) — a completely different set, so f∘g ≠ g∘f.

---

## Reserve topic (if both fallbacks are already used) — COS_102: The compiler / interpreter / assembler chain

Students memorise "a compiler turns code into machine code" from general knowledge and never notice that this course splits the job in two: the **compiler stops at assembly language** and the **assembler** finishes the trip to machine code. The **interpreter** then gets lumped in as "a slower compiler" rather than being recognised as the one translator that goes from high-level language to machine code **directly**, skipping assembly entirely.

Probe with: Why can a computer not simply run the C or Java source the programmer typed? → Why does the course say the compiler produces assembly rather than machine code — what is left for another tool to do? → Why is assembly needed at all, if the interpreter can reach machine code directly? → Why is the interpreter's route different *in kind* rather than just faster or slower? → What would a programmer actually notice differently when an error appears, depending on which route their language uses?

A good answer names the input and output of each tool: compiler takes high-level and gives assembly; assembler takes assembly and gives machine code; interpreter takes high-level and gives machine code. The trap to catch: saying "the compiler produces machine code" collapses two tools into one and leaves the assembler with no job in the chain.
