# Saturday — COS_102 code nightly check

*Applied flowchart work: reading a written-out flowchart and stating exactly what it outputs, tracing loops with a selection inside them on concrete input, diagnosing a chart whose decision arms are wrong, and turning a stated problem into the right arrangement of boxes and arms.*
*Sit cold, notes closed, 8 minutes. Score out of 6.*

Notation throughout: `[ ]` terminator, `( )` process, `/ /` input/output, `< >` decision. Branch labels sit on the arms.

**1.** Here is the flowchart from the Flowcharts II slide, written out:

```
[ Start ]
    |
( Sum = 0 )
( Count = 0 )
    |
/ Enter n /  <-------------------+
    |                            |
( sum = sum + n )                |
( count = count + 1 )            |
    |                            |
< Is Count < 5? >                |
    | YES ------------------------+
    | NO
/ Print sum /
    |
[ Stop ]
```

The user types, in order: **10, 3, 7, 5, 1, 9**. What is printed, and how many of those numbers are actually entered?

a) **35**, after entering all six numbers, because the decision reads `Count` before the process box above it has incremented it, so the loop takes one extra pass
b) **26**, after entering five numbers — 10, 3, 7, 5 and 1; on the fifth pass `Count` becomes 5, `Count < 5` fails, and the 9 is never entered
c) **25**, after entering four numbers, because the loop ends as soon as `Count` reaches 4 and the fifth number is therefore never added
d) **26**, but six numbers are entered — the 9 is read at `Enter n` on a sixth pass and then discarded when the decision fails

**2.** A different chart:

```
[ Start ]
    |
( Total = 0 )
( Count = 0 )
    |
/ Enter n /  <-----------------------+
    |                                |
< Is n > 10? >                       |
    | YES --> ( Total = Total + n ) -+---+
    | NO  ---------------------------+---+
    |            (both arms rejoin here)  |
( Count = Count + 1 )  <-----------------+
    |                                |
< Is Count < 4? >                    |
    | YES ----------------------------+
    | NO
/ Print Total /
    |
[ Stop ]
```

The user types **12, 4, 30, 9, 15**. What are the values of `Total` and `Count` immediately after the **third** time `Is Count < 4?` is evaluated, and what is finally printed?

a) `Total = 46`, `Count = 3`; printed: **55**
b) `Total = 42`, `Count = 3`; printed: **57**
c) `Total = 42`, `Count = 3`; printed: **42**
d) `Total = 42`, `Count = 2`; printed: **57**

**3.** A chart is meant to print the first five multiples of 3. As drawn, it is:

```
[ Start ]
    |
( k = 1 )
    |
( m = 3 * k )  <-------------+
    |                        |
/ Print m /                  |
    |                        |
< Is k < 5? >                |
    | NO --> ( k = k + 1 ) --+
    | YES
[ Stop ]
```

What does this chart actually print, and what exactly is wrong with it?

a) It prints 3, 6, 9, 12, 15 — the chart is correct as drawn; the arms merely read oddly because the loop-back is attached to the NO arm
b) It prints 3, 6, 9, 12 and stops — an off-by-one: the increment box sits after `Print m`, so `k` reaches 5 only after the last print and the fifth multiple is never produced
c) It prints 3 and stops — the two arms of the decision are the wrong way round. `k < 5` is true on the first pass, and the YES arm leads to `[ Stop ]`, so the loop body never repeats; swapping the two labels fixes it
d) It prints 3 and stops — the fault is the initialisation `( k = 1 )`, which should be `( k = 0 )`; with `k` starting at 0 the test succeeds four more times and all five multiples are printed

**4.** A program must ask for a student's score, print `PASS` if it is 50 or more and `FAIL` otherwise, and repeat the whole thing for exactly 40 students. Which arrangement is correct?

a) `[ Start ]` → `( Count = 0 )` → `/ Enter score /` → `< Is score >= 50? >` with YES → `/ Print PASS /` and NO → `/ Print FAIL /`, **both arms rejoining**, then `( Count = Count + 1 )` → `< Is Count < 40? >` with YES a flow line back to `/ Enter score /` and NO → `[ Stop ]`
b) `[ Start ]` → `( Count = 0 )` → `/ Enter score /` → `< Is score >= 50? >` with YES → `/ Print PASS /` → `( Count = Count + 1 )` → `< Is Count < 40? >` (YES back to `/ Enter score /`, NO → `[ Stop ]`), and NO → `/ Print FAIL /` → back to `/ Enter score /`
c) `[ Start ]` → `( Count = 0 )` → `/ Enter score /` → `< Is score >= 50? >` with YES → `/ Print PASS /` → `( Count = Count + 1 )` → `< Is Count < 40? >` (YES back to `/ Enter score /`, NO → `[ Stop ]`), and NO → `/ Print FAIL /` → `[ Stop ]`
d) `[ Start ]` → `( Count = 0 )` → then the block `/ Enter score /` → `< Is score >= 50? >` → `/ Print PASS /` or `/ Print FAIL /` drawn out forty times one under the other → `[ Stop ]`; no flow line goes back up, which is legitimate because the number of students is known in advance

**5. (explain why)** Here is a chart for averaging a run of numbers:

```
[ Start ]
    |
( Sum = 0 )
( Count = 0 )
    |
/ Enter n /  <-----------------------+
    |                                |
< Is n = -1? >                       |
    | NO --> ( Sum = Sum + n )       |
    |        ( Count = Count + 1 ) --+
    | YES
( Avg = Sum / Count )
    |
/ Print Avg /
    |
[ Stop ]
```

Trace it on the input **8, 12, 4, -1**, giving `Sum`, `Count` and the exact printed output. Name the symbol used for each kind of box in the chart and say which part of the chart is sequence, which is selection and which is repetition. Then state exactly what happens if the very first number the user enters is **-1**, name the flaw, and give the repair as an extra box or boxes, saying where in the chart they go and which arms they attach to.

**6. (explain why)** A shop needs a flowchart that reads a series of item prices ending with a price of **0**, then prints the total value of the items and how many of them cost **more than 1000**. Draw the chart in written-out form using the correct symbol for every box, with both terminators and with the branch labels on the arms. Mark which boxes are sequence, which form the selection and which form the repetition, and say why the counter box must not sit inside the selection's YES arm. Then trace your chart on the input **500, 1200, 1000, 3000, 0** and state the exact printed output.

---

## Answers

**1. b** — *Tracing a counted loop in which the increment box sits above the decision.* Trace it: `Sum = 0, Count = 0`; enter 10 → `sum = 10, count = 1`, `1 < 5` true, YES arm back up; enter 3 → `sum = 13, count = 2`, back; enter 7 → `sum = 20, count = 3`, back; enter 5 → `sum = 25, count = 4`, back; enter 1 → `sum = 26, count = 5`, and `5 < 5` is **false**, so the NO arm leads to `/ Print sum /` and **26** is printed. **Five** numbers are entered; the 9 is never asked for. The examinable point is the position of the increment: it is in the process box **above** the diamond, so the pass that reads the fifth number is also the pass on which the test fails. (a) is the off-by-one in the other direction and gives the sum of all six numbers, 35; it would be the right answer only if the increment box sat *below* the decision, or if the test read `Count + 1 < 5`. (c) misreads `Count < 5` as a limit on how many additions may occur rather than as a test evaluated after each one, and stops a pass early at 25. (d) has the arithmetic right and the input behaviour wrong: `/ Enter n /` is reached again only when the YES arm sends control back to it, and on the fifth pass the NO arm is taken, so nothing is entered and discarded.

**2. c** — *A selection nested inside a repetition: the conditional box is on one arm, the counter is below the join.* Trace, watching where the arms rejoin. Pass 1: `n = 12`, `12 > 10` YES, so `Total = 12`; the arms rejoin, `Count = 1`; `1 < 4` true (**first** evaluation), back up. Pass 2: `n = 4`, `4 > 10` NO, `Total` stays 12; `Count = 2`; `2 < 4` true (**second**), back up. Pass 3: `n = 30`, YES, `Total = 42`; `Count = 3`; `3 < 4` true (**third evaluation — the state asked for is `Total = 42`, `Count = 3`**), back up. Pass 4: `n = 9`, NO, `Total` stays 42; `Count = 4`; `4 < 4` is false, so **42** is printed. Four numbers are entered; the 15 is never asked for. Two mechanisms are tested at once: `Total = Total + n` is *conditional*, sitting on the YES arm only, while `Count = Count + 1` is *unconditional*, sitting below the point where the arms rejoin. (a) puts the accumulator below the join as well, so every number is added: 12, 16, 46, 55 — the state after the third test would be 46 and the print 55. That is the error of not following the arms back to the rejoin point. (b) is the off-by-one: it lets the loop run a fifth pass that reads 15, adds it because `15 > 10`, and prints 57. (d) is the mirror of (a) — it puts the *counter* inside the selection, on the YES arm, so only values above 10 are counted; that reading needs a sixth number to finish, and the user only supplied five, which is itself the giveaway that the counter cannot be inside the branch.

**3. c** — *Swapped decision arms: the answer to the question determines the path the flow will take, so mislabelling the arms inverts the whole loop.* Trace exactly what is drawn. `k = 1`; `m = 3 * 1 = 3`; print **3**; evaluate `Is k < 5?` — `1 < 5` is **true**, so the **YES** arm is taken, and the YES arm goes to `[ Stop ]`. The chart prints **3** and halts. The loop body is entered once and never repeats, because the arm that carries the flow line back up is labelled NO and the condition is never false on the one occasion it is tested. Swapping the two labels — YES back to the increment, NO to `[ Stop ]` — makes it print 3, 6, 9, 12, 15. (a) reads the chart by what it was clearly *intended* to do rather than by the arms as drawn, which is the single most common failure in reading someone else's flowchart; the label on an arm is not decoration, it is the course's stated mechanism, since **the answer to the question determines the path the algorithm flow will take**. (b) is a genuine off-by-one pattern applied to the wrong chart: if the arms were correct the loop would run for `k = 1, 2, 3, 4, 5`, printing all five multiples, because the increment happens on the *return* path and the test uses the value that produced the last print. (d) misdiagnoses in the most plausible direction — blaming the initialisation, which is the usual culprit — but trace it: with `k = 0` the chart prints `m = 0` first, then still takes the YES arm at `0 < 5` and stops. Changing the initialisation does not touch the fault, because the fault is in the arms.

**4. a** — *Turning a stated problem into structure: a selection whose arms rejoin, sitting inside a repetition whose counter is outside the selection.* The problem states three things and each maps to one feature. "Print PASS or FAIL" is a **selection**: one diamond, two labelled arms, and — decisively — **both arms rejoin**, because whichever was printed, the next thing to happen is the same. "Repeat for exactly 40 students" is a **repetition** controlled by a second diamond whose YES arm is a flow line back to `/ Enter score /`, so that the input box is inside the loop. And the counter must be incremented **after the arms rejoin**, so that every student is counted, pass or fail. Everything else is **sequence**, and both terminators are present, satisfying the first drawing principle. (b) puts the counter on the PASS arm only: the FAIL arm returns to `/ Enter score /` without counting, so the chart runs until 40 students have *passed* and reads an unpredictable number of scores. This is the exact scope error tested in question 2, drawn instead of traced. (c) is worse in a specific way — the FAIL arm runs to `[ Stop ]`, so the loop is inside the selection rather than the selection inside the loop, and the very first failing student ends the whole run. Whenever the two constructs are nested, ask which one contains which; here the loop must contain the selection. (d) unrolls the loop, and it is tempting precisely because 40 *is* known in advance. Week 4 rules it out on principle — repetition exists because **writing the same step on different lines is not sustainable** — and this week rules it out on the drawing principles too: forty copies of a three-box block runs to several pages, colliding with the disadvantage that **complex processes might require that the flowchart spans multiple pages** and with the requirement that the chart be **easy to follow, neat and clear**.

**5.** *Concept: reading a sentinel-controlled loop, naming its symbols and constructs, and spotting a guard that is missing on an empty run.* **Trace on 8, 12, 4, -1.** Initialisation: `Sum = 0`, `Count = 0`. Enter 8 — `8 = -1?` NO, so `Sum = 8`, `Count = 1`, and the arm returns to `/ Enter n /`. Enter 12 — NO, `Sum = 20`, `Count = 2`, return. Enter 4 — NO, `Sum = 24`, `Count = 3`, return. Enter -1 — the test is **YES**, so the flow leaves the loop; `Avg = Sum / Count = 24 / 3 = 8`; **the printed output is 8**. The sentinel is a terminator, not data: it is neither added to `Sum` nor counted, which is exactly why the decision is placed immediately after the input box and before the two process boxes. **Symbols.** `[ Start ]` and `[ Stop ]` are the **start/stop or terminator symbol**, which **shows the start and end points of the flowchart**. `/ Enter n /` and `/ Print Avg /` are the **input/output symbol**, **also called the data symbol**, which **shows data that can be used either at the input or the output**. `( Sum = 0 )`, `( Count = 0 )`, `( Sum = Sum + n )`, `( Count = Count + 1 )` and `( Avg = Sum / Count )` are the **process or action symbol**, which **shows an action, process or function**. `< Is n = -1? >` is the **decision or control symbol**, **used when questions such as yes or no and true or false need an answer**, whose **answer determines the path the algorithm flow will take**. The arrows are **flow lines**, running **top to bottom**. **Constructs.** **Sequence:** the initialisation pair at the top, the two process boxes on the NO arm taken in order, and `Avg = Sum / Count` followed by `Print Avg` at the bottom. **Selection:** the single diamond, choosing between the loop body and the exit. **Repetition:** the diamond together with `/ Enter n /` and the two process boxes on its NO arm, since that arm is a flow line back up to a box already executed. Note that this chart's one diamond does both jobs at once — it is the selection *and* the loop control — which is why "one diamond means one selection" is unsafe. **The flaw.** If the first number entered is **-1**, the YES arm is taken immediately with `Sum = 0` and `Count = 0`, and the chart executes `Avg = 0 / 0` — a division by zero. The chart therefore has an input for which it produces no result at all, and nothing in it guards the divisor. Note that the flaw is invisible on every non-empty input, which is why tracing the *boundary* case matters. **The repair.** Insert a second decision on the **YES** arm, between the diamond and `( Avg = Sum / Count )`: `< Is Count = 0? >`. Its **YES** arm goes to a new `/ Print "no numbers entered" /` box and then to `[ Stop ]`; its **NO** arm goes on to `( Avg = Sum / Count )` and the existing print and stop, exactly as before. The new box is a decision because it forks the path; the new message box is an input/output box because it emits data. This keeps each comparison simple, as the third drawing principle requires — two plain decisions rather than one compound one — and leaves the chart with a start point and a stop point on every path.

**6.** *Concept: building a chart from a stated problem — sentinel-controlled repetition, with an unconditional accumulator and a conditional counter, and a strict comparison at the boundary.*

```
[ Start ]
    |
( Total = 0 )
( Big   = 0 )
    |
/ Enter price /  <-------------------+
    |                                |
< Is price = 0? >                    |
    | YES ---> / Print Total, Big /  |
    |          [ Stop ]              |
    | NO                             |
( Total = Total + price )            |
    |                                |
< Is price > 1000? >                 |
    | YES --> ( Big = Big + 1 ) --+  |
    | NO  ------------------------+  |
    |     (both arms rejoin) -------+
```

**Sequence:** `( Total = 0 )` and `( Big = 0 )` at the top, `( Total = Total + price )` in the body, and `/ Print Total, Big /` then `[ Stop ]` at the exit. **Selection:** two diamonds — `< Is price = 0? >`, which chooses between the loop body and the exit, and `< Is price > 1000? >`, whose YES arm passes through the counter and whose NO arm bypasses it, both rejoining before the flow line returns to `/ Enter price /`. **Repetition:** the first diamond's NO arm together with everything below it and the return line to `/ Enter price /`. **Why the counter is not inside the YES arm of anything it should not be:** `( Total = Total + price )` is placed *before* the second diamond and so is unconditional — every non-sentinel price is added — whereas `( Big = Big + 1 )` is deliberately on the YES arm of `< Is price > 1000? >`, because only expensive items are counted. Putting `Total = Total + price` on that YES arm as well, which is the natural slip when two operations share a diamond, would total only the expensive items; putting `Big = Big + 1` below the rejoin point would count every item. The rule that decides it is the same in both directions: an operation belongs on an arm only if the problem says it happens *only* when that answer is given. **Trace on 500, 1200, 1000, 3000, 0.** `Total = 0`, `Big = 0`. Enter 500 — not the sentinel; `Total = 500`; `500 > 1000?` NO, `Big` stays 0; return. Enter 1200 — `Total = 1700`; `1200 > 1000?` YES, `Big = 1`; return. Enter 1000 — `Total = 2700`; `1000 > 1000?` is **false**, because the comparison is strict and the problem says *more than* 1000, so `Big` stays 1; return. Enter 3000 — `Total = 5700`; YES, `Big = 2`; return. Enter 0 — the first diamond's YES arm is taken, and the chart prints. **Exact printed output: `Total = 5700`, `Big = 2`.** The 1000 is the trap: it is added to the total like every other price, but it is not counted, because 1000 is not more than 1000. Note also that the sentinel 0 is neither added nor counted — it is tested before either process box, which is what makes it a terminator rather than data.
