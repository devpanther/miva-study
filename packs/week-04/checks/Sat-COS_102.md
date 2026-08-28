# Saturday — COS_102 nightly check

*Applied only: writing and reading pseudocode, dry-running it line by line, and finding the fault in code that already runs — off-by-one counters, loop conditions and exits, sentinel handling, statement order and initialisation. No definitions, characteristics or complexity vocabulary tonight.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** In the course's sum-of-five flowchart the body (`Enter n`; `sum = sum + n`; `count = count + 1`) runs before the decision `Is count < 5`, which loops back on YES. A student changes the decision to `Is count <= 5` and alters nothing else. The algorithm now:
a) Reads six numbers, since the loop back is taken once more before the test fails
b) Reads five numbers, since the loop already stopped at that boundary before
c) Reads four numbers, since the test is now satisfied one pass earlier
d) Runs for ever, since the condition can no longer become false

**2.** Consider `count <- 1`, then `WHILE count < 5 DO ... count <- count + 1 ENDWHILE`. The body executes:
a) 4 times, since count is 1, 2, 3, 4 at the test and the body runs on each
b) 5 times, since the number of passes is set by the 5 in the test
c) 3 times, since count runs 1 to 4 but the last pass exits before the body
d) 6 times, since count runs 0 to 5 and the changed start adds one

**3.** This loop never ends: `total <- 0`, `i <- 1`, `WHILE i <= 10 DO INPUT n ; total <- total + n ENDWHILE`, `OUTPUT total`. The correct single repair is:
a) Insert `i <- i + 1` inside the body, after `total <- total + n`
b) Insert `i <- i + 1` after `ENDWHILE`, so i advances once per run
c) Change the condition to `WHILE i > 10`, so the loop exits on entry
d) Insert `i <- 1` inside the body, so i is refreshed on every pass

**4.** A max-finder reads `INPUT num` before the loop and again as the **last** line of the loop body. A student moves the inner `INPUT num` to the **first** line of the body, keeping the one before the loop. The effect is:
a) The first number is never compared or counted, and the sentinel is compared and counted
b) The last number is never compared or counted, and the sentinel is skipped as before
c) Nothing changes, since the same number of inputs is read either way
d) The loop never ends, since the sentinel is read but the condition is not retested

**5.** A max-finder sets `max <- 0`, then updates with `IF num > max THEN max <- num ENDIF` only. The user enters −8, −3, −25, then the sentinel. The algorithm outputs:
a) 0, a value the user never entered
b) −3, since the first number always replaces max
c) −25, since the last number entered is retained
d) Nothing, since no number ever passed the test

**6.** Trace: `INPUT x` (the user types 3); `IF x > 0 THEN x <- x − 5 ENDIF`; `IF x <= 0 THEN OUTPUT "non-positive" ENDIF`. The algorithm:
a) Prints nothing, because x was positive when the algorithm started
b) Prints the message, because the first block changed x before the second test
c) Prints the message, because two separate IF blocks are always both entered
d) Prints nothing, because only one branch of an IF pair can ever run

**7.** For `total <- 0`, `i <- 1`, `WHILE i <= 3 DO INPUT n ; total <- total + n ; i <- i + 1 ENDWHILE`, `OUTPUT total`, the inputs are 4, 9 and 2. A student's dry run gives 13. The mistake that produces exactly 13 is:
a) Exiting when i reached 3, reading `i <= 3` as `i < 3`, so 2 was never added
b) Starting i at 0, which shifts the whole table down by one pass
c) Adding n to total before reading it, so the first addition used no value
d) Incrementing i twice per pass, so the loop ended halfway through

**8.** A student writes `sum <- 0`, `count <- 0`, then `REPEAT sum <- sum + n ; INPUT n ; count <- count + 1 UNTIL count >= 3`, `OUTPUT sum`, with n unset (treat as 0) at the start. The user enters 7, 3, 6. The output is:
a) 10, because the first addition used an unset n and 6 is never added
b) 16, because the order of the two lines makes no difference to the total
c) 7, because only the first number entered is ever added to sum
d) 0, because sum is added to before any number has been entered

**9. (explain why)** Debug this, stating each fault, the input that exposes it, and the repair:

```
START
    total <- 0
    count <- 0
    INPUT n
    WHILE n <> 0 DO
        INPUT n
        total <- total + n
        count <- count + 1
    ENDWHILE
    OUTPUT total / count
STOP
```

Dry-run it on 4, 6, 0 in a table, say what it prints, and say what it should have printed.

**10. (explain why)** Write pseudocode that reads numbers from the user until 0 is entered and outputs how many of them were greater than 100. Then dry-run your own algorithm on the inputs 150, 40, 200, 0 in a table with one row per pass, showing the input, the counter and the loop test. State what your algorithm outputs when the very first input is 0, and why.

**11. (explain why)** Rewrite the course's sum flowchart so that the user first supplies N, the quantity of numbers to be added, and the loop runs N times. Give both a post-test (`REPEAT … UNTIL`) and a pre-test (`WHILE`) version. State the one value of N for which the two versions behave differently, say exactly what each does on that value, and state which version is correct and why.

**12. (explain why)** Compare `i <- 1 ; WHILE i <= n` with `i <- 0 ; WHILE i < n` and with `i <- 1 ; WHILE i < n`, each incrementing i by 1 at the end of the body. State how many times each body runs. Then explain when the choice between the first two genuinely matters even though the counts agree, and give the single value of n that most cheaply exposes the third as an off-by-one.

---

## Answers

**1. a** — *Post-test loop: the exit boundary moves by one.* The body runs, then the test decides whether to go back. With `count < 5`, count is 1, 2, 3, 4 at the first four tests (loop back) and 5 at the fifth (exit): five numbers. With `count <= 5`, the test still passes when count is 5, so the body runs a sixth time and only count = 6 exits: six numbers. (b) is the "the boundary was already 5, so nothing moves" error — it assumes the loop stopped *because* count reached 5 rather than because the condition became false, and those come apart when the condition changes. (c) inverts the direction: relaxing the test can only add passes, never remove them. (d) confuses `<=` with a condition that is permanently true; count keeps rising, so the condition does fail, one pass later than before.

**2. a** — *Off-by-one in the initial value.* Read the counter column: count is 1, 2, 3, 4 when the test is evaluated and passes, so the body runs four times, and on the fifth test count is 5, which fails `count < 5`. Starting at 1 rather than 0 costs one pass. (b) is the specific misunderstanding that the constant in the test names the number of iterations; the number of iterations is set by the **start value, the test and the step together**. (c) subtracts a pass that never existed, from imagining that the pass on which the test finally fails had already run its body — in a pre-test loop it has not. (d) miscounts in the other direction by supposing the loop still begins at 0 in addition to starting at 1.

**3. a** — *A loop variable that the body never changes.* The condition `i <= 10` is tested against an `i` that nothing modifies, so it is true for ever; the repair is to advance `i` inside the body, which is what makes the ten passes finish. (b) puts the increment after `ENDWHILE`, where it runs only once the loop has exited and therefore never runs at all — this is the classic indentation slip, and it leaves the loop exactly as it was. (c) makes the condition false at entry, so the loop body never executes and `total` stays 0: it stops the hang without doing the work, which is a different program, not a repair. (d) resets `i` to 1 on every pass, which is the mirror of the original bug: `i` changes, but never towards the exit.

**4. a** — *Where the sentinel read must sit.* With `INPUT num` before the loop and again at the **bottom** of the body, each number is read, then tested by the loop condition, then (if it is not the sentinel) compared and counted, and only then is the next one read. Moving the inner read to the **top** breaks this on both ends: the number read before the loop is overwritten by the first line of the body before it is ever compared or counted, and the sentinel, once read inside the body, is compared and counted before the condition gets a chance to see it. (b) names the right kind of fault at the wrong end; it is the answer of someone who knows one number goes missing but does not trace which. (c) is the "the count of INPUT statements is unchanged" error — the number of reads is the same, their **position relative to the test** is what changed. (d) invents a hang: the condition is still retested at the top of each pass, so the loop does end, one number late.

**5. a** — *Initialising an accumulator to a value the data may never exceed.* Every entered number is negative, so `num > max` is false on all three, `max` keeps the 0 it was initialised with, and the algorithm reports 0 as the maximum of a set that contains no 0. The repair is to take the **first** number as the maximum whatever its sign, e.g. `IF count = 0 OR num > max THEN`. (b) states what a correct algorithm would do and is the answer of anyone who assumes the guard is there; the code shown has no such guard. (c) describes a "keep the last value" bug, which would need `max <- num` outside any test. (d) is right that no number passed the test but wrong about the consequence: nothing suppresses the output, so the stale initial value is printed.

**6. b** — *Two separate IF blocks are not IF/ELSE.* Trace it: x = 3, so `x > 0` is true and x becomes −2; the second test is evaluated **after** that assignment, and −2 <= 0, so the message prints. The two conditions look mutually exclusive, but they are tested at different times and the first block changed the variable between them. (a) is the exact trap: it evaluates both conditions against the **original** value, which is what an `IF … ELSE` would have done and what separate blocks do not do. (c) overcorrects into a rule that is false — separate IFs are entered only when their own conditions hold; here it happens that both do. (d) states a true property of `IF … ELSE` and applies it to code that has no `ELSE`.

**7. a** — *Reading `<=` as `<` at the exit.* The correct trace is: pass 1, i = 1, n = 4, total = 4; pass 2, i = 2, n = 9, total = 13; pass 3, i = 3, which still satisfies `i <= 3`, n = 2, total = 15; then i = 4 fails and 15 is printed. A student who exits as soon as i = 3 stops after two passes with total = 13 — exactly the number reported, and the last input is silently dropped. (b) would give the same three passes with the table's rows relabelled, so the total would still be 15, not 13. (c) would add an unset value first and drop the last input, giving 4 + 9 = 13 by a different route — but that fault is in the **code's statement order**, and the code shown reads before it adds; it is the right arithmetic attached to the wrong cause. (d) would end after two increments per pass, i.e. after the second pass, but it would also make i jump 1, 3, 5, which the student's own table would show.

**8. a** — *Statement order: adding before reading.* Take it a pass at a time. Pass 1: `sum <- sum + n` with n unset adds 0, then 7 is read, count = 1. Pass 2: sum becomes 0 + 7 = 7, then 3 is read, count = 2. Pass 3: sum becomes 7 + 3 = 10, then 6 is read, count = 3, and the loop exits. Output 10. Two symptoms from one fault: a garbage value is added at the start, and the last number read is never added. (b) is the "the lines are adjacent, so the order is cosmetic" error and gives the correct total 16. (c) supposes only the first number is used, which would need the addition outside the loop. (d) notices the unset first addition but stops there, forgetting that the later passes do add real values.

**9.** *Concept: sentinel loops — read position, sentinel contamination, and the empty-input guard.* **Dry run on 4, 6, 0:**

| Point | n | total | count | `n <> 0`? |
|---|---|---|---|---|
| before loop | 4 | 0 | 0 | true, enter |
| pass 1 | 6 (read at top, overwriting 4) | 6 | 1 | true, repeat |
| pass 2 | 0 (the sentinel, read at top) | 6 | 2 | false, exit |
| output | — | 6 | 2 | prints 6 / 2 = **3** |

It prints **3**; the average of 4 and 6 is **5**. Three faults, each with the input that exposes it. **(i) The read sits at the top of the body**, so the number read before the loop is destroyed before it is ever added or counted — exposed by any input at all, and visible above as the 4 that vanishes. **(ii) The sentinel is processed**: once 0 has been read inside the body it is added to `total` and counted before the condition sees it. Adding 0 does not disturb the total, which is what makes this fault so easy to miss, but the increment inflates `count` by one and so deflates the average on every run — exposed by comparing 6/2 with 6/1, and it would corrupt the sum outright if the sentinel were −1. **(iii) No guard on the division**: if the first thing entered is 0, the loop body never runs, `count` is 0 and `total / count` divides by zero — exposed by the input "0" alone. **Repairs:** move `INPUT n` to be the **last** line of the body (so each value is tested for the sentinel before being used), and wrap the output as `IF count = 0 THEN OUTPUT "No numbers were entered" ELSE OUTPUT total / count ENDIF`. With those two changes the same input gives (4 + 6) / 2 = 5.

**10.** *Concept: writing a sentinel-controlled counting loop and dry-running it.* A correct answer:

```
START
    above <- 0
    PROMPT "Enter a number, or 0 to finish"
    INPUT n
    WHILE n <> 0 DO
        IF n > 100 THEN
            above <- above + 1
        ENDIF
        PROMPT "Enter a number, or 0 to finish"
        INPUT n
    ENDWHILE
    OUTPUT above
STOP
```

Note the two features that make it right: the sentinel is read **before** the loop and again at the **bottom** of the body, so 0 is never tested against 100 or counted; and `above` is initialised before anything is read, so it has a value even if the loop never runs. **Dry run on 150, 40, 200, 0:**

| Pass | n at the test | `n <> 0`? | `n > 100`? | above after |
|---|---|---|---|---|
| entry | 150 | true | yes | 1 |
| 2 | 40 | true | no | 1 |
| 3 | 200 | true | yes | 2 |
| exit | 0 | false | not evaluated | 2 |
| output | — | — | — | prints **2** |

If the very first input is 0, the loop condition is false immediately, the body never runs, and the algorithm prints **0** — which is correct, since no numbers were entered and therefore none of them exceeded 100. This is exactly the case a pre-test loop handles and a post-test loop does not: with `REPEAT … UNTIL n = 0` the body would run once on the sentinel itself, testing 0 against 100 before the exit condition was ever evaluated.

**11.** *Concept: post-test vs pre-test loops, and the boundary case N = 0.* **Post-test version:**

```
START
    INPUT N
    sum <- 0 ;  count <- 0
    REPEAT
        INPUT n
        sum   <- sum + n
        count <- count + 1
    UNTIL count >= N
    OUTPUT sum
STOP
```

**Pre-test version:**

```
START
    INPUT N
    sum <- 0 ;  count <- 0
    WHILE count < N DO
        INPUT n
        sum   <- sum + n
        count <- count + 1
    ENDWHILE
    OUTPUT sum
STOP
```

For every N greater than or equal to 1 the two are indistinguishable: both read exactly N numbers and print their total. They part company at **N = 0**. The pre-test version evaluates `0 < 0`, finds it false, never enters the body, and prints 0 — the correct total of no numbers. The post-test version enters the body **before** any test exists to stop it: it prompts for a number the user was never meant to supply, adds it, sets count to 1, and only then evaluates `1 >= 0`, which is true, so it exits having read one number and printed it as the sum of none. (Worse, had the exit test been written `UNTIL count = N` it would have missed 0 on the way past and looped for ever.) The **pre-test version is correct**, and the general rule it illustrates is the one the course's own flowchart hides: a post-test loop runs its body **at least once**, so it is safe only when the body must always execute at least once. Any loop whose correct number of repetitions may be zero — read N items, process a list that may be empty, consume input up to a sentinel that may come first — must test **before** the body.

**12.** *Concept: loop bounds and off-by-one.* `i <- 1 ; WHILE i <= n` runs the body **n** times, with i taking 1, 2, …, n. `i <- 0 ; WHILE i < n` also runs the body **n** times, with i taking 0, 1, …, n−1. `i <- 1 ; WHILE i < n` runs the body **n − 1** times, with i taking 1, 2, …, n−1 — one pass short. The rule to carry: the number of passes is the start value, the test and the step **taken together**, never the constant in the test on its own. The first two agree on the **count** but not on the **values i holds**, and that is where the choice genuinely matters — whenever the body **uses i** rather than merely counting with it. Summing i gives n(n+1)/2 in the first and n(n−1)/2 in the second; multiplying by i makes the second start with a factor of 0; and using i as a position (the i-th number, the i-th item) hits a position 0 that may not exist, or misses the last one, depending on where positions are taken to begin. Pure counters are interchangeable; indices and accumulators are not. The cheapest test for the third loop is **n = 1**: `i <- 1 ; WHILE i < 1` fails at once and the body never runs, so a task that should have been done once is not done at all — a one-line, one-input test that any larger n disguises, because at n = 10 the loop still runs nine times and looks busy and plausible.
