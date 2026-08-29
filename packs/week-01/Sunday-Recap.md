# Sunday recap — Week 1

*Sunday 13 September 2026, 19:00–20:00. One hour, two topics, one each, taught aloud with no notes.*

## How the topic is chosen

The topic is **not** picked from this page. Each person takes the nightly check they scored lowest on this week — lowest `score ÷ 12`, across Mon–Sat — and teaches that topic. This page is the **fallback only**: use it if the scores tie, or if checks were skipped and there is no honest lowest.

**You take the same eight courses, so do not both pick the same course.** If your lowest lands on the same course, the person with the lower ratio keeps it and the other moves to their next-lowest check *in a different course*. Two people teaching the same topic wastes half the hour.

Teaching means explaining it out loud until the other person can restate the mechanism — not reciting the summary. The listener's job is to keep asking the "why" questions below until the explanation stops being a definition and starts being a reason.

---

## Fallback topic 1 — PHY_102: charging by induction versus charging by conduction

**The claim:** contact leaves the same sign; no contact leaves the opposite sign.

**Why it tends to be misunderstood.** Both methods start the same way — a charged rod brought near a conductor — so the two get filed in memory as one procedure with a variation. The earthing step is then remembered as a place where charge is vaguely "drained off", rather than as the step that *selects which sign stays behind*. That is why so many people can state both outcomes and still not predict either one.

**Five "why" questions for the listener, easy to hard.**

1. Which particles actually move when any object is charged, and which never do?
2. In conduction, why do the rod and the sphere end up with the *same* sign?
3. In induction the rod never touches the sphere. So where does the sphere's charge come from?
4. Why must the earth connection be broken *before* the rod is taken away, and not after?
5. The rod loses charge in conduction but not in induction. Why does that difference *follow* from the two mechanisms, rather than being an extra fact to memorise?

**What a good answer contains.**

- Only electrons move, in both methods, and the sign of an object is decided by whether it has gained or lost them — protons never travel between solids.
- Conduction is direct sharing on contact: charge flows until the two bodies sit at the same potential, so both carry the same sign, and the rod ends up with less charge than it started with.
- Induction is separation followed by *selective removal*: the rod's field pushes like charge to the far side, earthing lets exactly that charge escape, and breaking the earth first traps the imbalance — leaving the opposite sign, with the rod's own charge untouched because nothing ever crossed the gap.

**Worked example.** A negatively charged rod is brought near an isolated metal sphere on an insulating stand.

*By conduction.* Touch the rod to the sphere. Electrons flow from the rod onto the sphere until both are at the same potential. Remove the rod: the sphere is left **negative** — the same sign as the rod — and the rod is now less negative than it was.

*By induction.* Hold the rod close, without touching. The sphere polarises: near side positive, far side negative, but net charge still **zero**. Now earth the far side with a wire — the repelled electrons escape to earth. **Break the earth connection while the rod is still held in place.** Only then remove the rod. The sphere is left with a net **positive** charge, opposite to the rod, and the rod's own charge is exactly what it was at the start.

*The standard error.* Remove the rod before breaking the earth, and electrons flow straight back from earth: the sphere ends up neutral and the whole procedure has done nothing. If you can explain why that happens, you understand induction.

---

## Fallback topic 2 — MTH_102: why a function must be one-to-one before it can be inverted

**The claim:** the domain, not the formula, is what decides whether an inverse exists.

**Why it tends to be misunderstood.** Inversion is learned as a three-step algorithm — write `y = f(x)`, swap `x` and `y`, solve for `y` — and the algorithm runs perfectly happily on functions that have no inverse at all. It produces something that *looks* like an answer, and nothing in the procedure raises a flag. So the condition gets treated as a footnote rather than as the thing that makes the whole operation legal.

**Five "why" questions for the listener, easy to hard.**

1. What does `f⁻¹` actually *do* to a number — in one sentence, without mentioning the algorithm?
2. If `f` sends both 2 and −2 to 4, what would `f⁻¹(4)` have to be?
3. Why does that make the reversed pairing fail to be a *function*, rather than merely being awkward?
4. `x²` has no inverse on ℝ but does have one on `[0, ∞)`. The rule never changed — so what did?
5. Given that, what is wrong with saying "the inverse of `x²` is `√x`" without further qualification?

**What a good answer contains.**

- The inverse is the *reverse pairing*: `f⁻¹` takes an output of `f` back to the input that produced it, so `f⁻¹(f(x)) = x`. It is not a rearrangement recipe — the recipe is only how you find it.
- A many-to-one `f` makes that reversal ill-defined: the shared output would need two images, which violates the very "exactly one output" clause that makes something a function in the first place.
- A function is a rule **together with a domain**. Restricting the domain so that `f` becomes one-to-one is what *creates* the inverse — and the horizontal line test is simply the graphical form of that check.

**Worked example.** Take `f(x) = x²` on domain ℝ.

Run the algorithm anyway: `y = x²` → swap → `x = y²` → solve → `y = ±√x`. **That `±` is the algorithm telling you it has failed.** For `x = 4` it offers both 2 and −2, so the result is not a function and `f` has no inverse.

Check it against the definition: `f(2) = 4` and `f(−2) = 4`, so `f⁻¹(4)` would have to be 2 and −2 at once. Graphically, the horizontal line `y = 4` meets the parabola twice.

Now restrict the domain to `[0, ∞)`. The pairs `(−2, 4)`, `(−3, 9)` and the rest are gone; every horizontal line now meets the curve at most once; and the same algorithm returns `y = +√x` only — a genuine function.

Note what swapped: `dom f = [0, ∞)` and `ran f = [0, ∞)`, so `dom f⁻¹ = ran f = [0, ∞)`.

*And the point that settles it:* restricting instead to `(−∞, 0]` is equally valid, and gives `f⁻¹(x) = −√x`. Same formula `x²`, different domain, different inverse. The inverse depends on the domain chosen, not on the formula.
