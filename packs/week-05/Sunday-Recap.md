# Sunday recap — Week 5

*Sunday 11 October 2026, 19:00–20:00. One topic each, taught aloud, no notes.*

**Pick the topic from the scores first.** Each of you takes the check you scored lowest on this week and teaches that topic. **Do not both pick the same course** — if your lowest lands on the same course, whoever scored the lower ratio keeps it and the other takes their next-lowest from a different course. The two topics below are a **fallback only**, for a week where the scores tie or the checks were skipped.

## PHY_102 — The current arrows are a definition, not a guess: a negative current is a correct answer

The arrows you draw for the branch currents are not a prediction you have to get right; they define which direction counts as positive in each branch. The signs in a loop equation are then fixed by the direction you walk the loop, not by the direction the current really flows. A current that comes out negative is a correct answer with the arrow drawn the other way round.

**Why it goes wrong.** Students treat the arrows as a prediction that must be correct before the equations are valid, so a negative current reads as an error to be hunted down. The belief survives because in every single-loop circuit with one battery the obvious guess really is the true direction — guessing right and being right never come apart until a second emf is put into the circuit.

1. Why are we allowed to draw a current arrow before we know which way the current actually flows?
2. Why does the sign of an IR term depend on the direction you walk the loop, while the sign of an emf term does not?
3. Why does reversing one arrow change nothing except the sign of that one current in the answer?
4. Why does a negative current in the answer not mean an equation was written wrongly, and what test separates the two cases?
5. Why can you draw all three branch arrows pointing into the same node and still get the right answer out?

**What a good answer contains.**

* It says the arrow defines what counts as positive current in that branch, and that every junction and loop equation is then written consistently with that definition, so the physics enters only through the emfs, the resistances and the way the circuit is wired.
* It says both Kirchhoff rules are linear in the currents, so replacing a current by its negative reproduces the same system; a reversed definition therefore returns the same magnitude with the opposite sign, and the answer is read off, not redone.
* It gives the discriminating test between a reversed arrow and a real mistake: put the solution back into the junction equation and every loop equation, and check the power balance; if they all close, the minus sign is physical and means the current runs against the arrow.

**Worked example.**

Nodes a (top) and b (bottom) are joined by three parallel branches: a 12 V battery with internal resistance 1 Ω, a 6 V battery with internal resistance 1 Ω (both + terminals towards a), and a 4 Ω resistor. Assume I₁ and I₂ flow b → a inside the batteries and I₃ flows a → b through the resistor.

* Junction rule at a: I₃ = I₁ + I₂
* Loop with the 12 V battery and the resistor, walked b → a then a → b: enter the battery at − and leave at +, giving +12; traverse r₁ with the current, giving −(1)I₁; traverse the 4 Ω with I₃, giving −4I₃. So **12 − I₁ − 4I₃ = 0**.
* The same walk on the second branch: **6 − I₂ − 4I₃ = 0**.

Hence I₁ = 12 − 4I₃ and I₂ = 6 − 4I₃. Substituting into the junction equation: I₃ = 18 − 8I₃, so 9I₃ = 18 and **I₃ = 2.0 A**, giving **I₁ = 4.0 A** and **I₂ = 6 − 8 = −2.0 A**.

The minus sign is the whole point: the 6 V branch really carries 2.0 A from a to b, into its own positive terminal, so that battery is being charged rather than discharged.

Three checks: the junction gives 4.0 + (−2.0) = 2.0 A ✓; V_ab is 12 − 4.0(1) = 8.0 V along branch one, 6 − (−2.0)(1) = 8.0 V along branch two, and 2.0 × 4 = 8.0 V along the resistor ✓; and the power balance gives 12 × 4.0 = 48 W delivered against 16 + 4 + 16 = 36 W dissipated plus 6 × 2.0 = 12 W absorbed by the charging battery, i.e. 48 W ✓

## COS_102 — A loop is not a symbol: it is a decision plus a backward arrow, and where that arrow lands decides which boxes repeat

On a flowchart, a loop is not a symbol — it is a decision diamond plus a flow line that runs backwards. Which boxes get repeated is decided entirely by where that backward arrow lands, so moving the arrow by one box changes the algorithm even though every box still says exactly what it said before.

**Why it goes wrong.**
Students read a flowchart the way they read a page, top to bottom, treating the boxes as the meaning and the arrows as mere joining-up. That works perfectly for pure sequence and for selection, where the arrows do run downward — so the wrong model survives every chart until the first one with a back arrow.

1. Why does the diamond need two exits when a rectangle needs only one?
2. Why can the same diamond mean selection in one chart and repetition in another — what in the drawing tells them apart?
3. Why does a loop whose counter is incremented on the exit branch run forever, when the increment box is plainly there on the page?
4. Why does moving the back arrow from below Sum = 0 to above it change what the chart prints, when not one box has been edited?
5. Why can you not tell how many times a loop runs by reading its condition, and what must you do instead?

**What a good answer contains.**
- Names the mechanism: the flow lines, not the vertical layout, define the repeated circuit — every symbol between the back arrow's landing point and the diamond runs again on each pass, everything above it runs once.
- Shows the consequence in both directions: initialisation caught inside the circuit is undone every pass (the accumulator loses its total, or the counter resets and the loop never ends), and an update stranded outside the circuit never executes, so the diamond re-evaluates identical data and answers identically forever.
- Gives the test to apply to any chart: find the backward arrow, mark the symbols it encloses, then trace a table of variable values pass by pass rather than reading the condition and trusting what it sounds like.

**Worked example.**
Draw the lecture's chart at the board: Start; Count = 0; Sum = 0; then label the next box A: Enter n; Sum = Sum + n; Count = Count + 1; then the diamond "Is Count < 5?" with Yes running back to A and No running to Print Sum; Stop.

Trace it with 2, 4, 6, 8, 10 in a three-column table (n, Sum, Count):

```
pass 1:  n=2    Sum=2    Count=1    1<5 yes -> loop
pass 2:  n=4    Sum=6    Count=2    2<5 yes -> loop
pass 3:  n=6    Sum=12   Count=3    3<5 yes -> loop
pass 4:  n=8    Sum=20   Count=4    4<5 yes -> loop
pass 5:  n=10   Sum=30   Count=5    5<5 NO  -> exit, prints 30
```

Now change nothing except the back arrow, so that it lands on `Sum = 0` instead of on A, and re-trace. Count is still outside the loop and still climbs 1, 2, 3, 4, 5, so the chart still exits after five passes — but Sum is cleared at the top of every pass, giving 2, then 4, then 6, then 8, then 10, and the chart prints **10**.

Finally move the arrow up one box further, onto `Count = 0`. Now the counter resets too, the diamond is handed Count = 1 on every pass, 1 < 5 is true forever, and the chart never reaches Print Sum at all.

Three algorithms, identical boxes, one arrow moved twice.
