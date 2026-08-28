# Saturday — COS_102 code nightly check

*Applied algorithm work: tracing the week's two algorithms step by step on concrete input, completing a stepwise refinement as pseudocode, finding the bug in a given algorithm, and judging which design fits a stated problem using the course's Big O rules.*
*Sit cold, notes closed, 8 minutes. Score out of 6.*

**1.** Here is the flowchart algorithm from Lesson I written out:

```
1  sum   <- 0
2  count <- 0
3  Enter n
4  sum   <- sum + n
5  count <- count + 1
6  If count < 5 then go to step 3
7  Print sum
8  Stop
```

The user types, in order: **4, 7, 2, 9, 3, 8**. What is printed, and how many of those numbers are actually read?

a) **25**, after reading five numbers — 4, 7, 2, 9, 3; on that fifth pass `count` becomes 5, the test `count < 5` fails, and the 8 is never entered
b) **33**, after reading all six numbers, because step 6 tests `count` before step 5 has incremented it, so the loop runs one extra pass
c) **22**, after reading four numbers, because the loop stops as soon as `count` reaches 4 and step 4 is therefore never executed for the fifth number
d) **25**, but six numbers are read — the 8 is entered at step 3 on a sixth pass and then discarded when the test at step 6 fails

**2.** Here is the maximum-number algorithm of Lesson II, refined:

```
1  max   <- 0
2  count <- 0
3  read x
4  If x = -1 then go to step 8
5  If x > max then max <- x
6  count <- count + 1
7  go to step 3
8  Print max, count
```

The user types **12, 5, 40, 40, 7, -1**. What exactly is printed?

a) `max = 40, count = 5` — the sentinel is detected at step 4 before step 6 runs, so it is not counted, and the repeated 40 does not change `max` because step 5 tests a strict `>`
b) `max = 40, count = 6` — every value the user typed passed through the loop, and the sentinel is counted with the rest
c) `max = 40, count = 4` — the second 40 fails the test at step 5, so control does not reach step 6 on that pass and that value goes uncounted
d) `max = 104, count = 5` — step 5 accumulates each value that exceeds the previous maximum, giving 12 + 40 + 40 + 7 + 5

**3.** A different version is deployed:

```
1  max <- 0
2  read x
3  While x <> 9999 do
4        If x > max then max <- x
5        read x
6  Print max
```

A user enters the daily temperature errors **-12, -5, -40, 9999**. The program prints **0**. Which diagnosis and repair is correct?

a) The bug is the strict `>` at step 4; changing it to `>=` makes the algorithm report -5 correctly
b) The bug is that `max` is initialised at step 1 to 0, a value that is not part of the input, so an input whose values are all below 0 leaves the initial value standing and the algorithm prints a number the user never entered; the repair is to initialise `max` from the **first value actually read** and begin comparing from the second
c) The bug is that the sentinel 9999 reaches step 4 and passes the test, so `max` becomes 9999 and the printed result is the sentinel rather than a temperature
d) The bug is that step 5 reads inside the loop body, so the last value the user enters is never compared; moving the read to the top of the loop body fixes the output

**4.** Two fragments, on an input of size `n`:

```
P:  i <- 1               Q:  i <- n
    While i < n do           While i > 1 do
        print i                  print i
        i <- i + 3               i <- i / 2
```

Applying the course's rules for time complexity, which is correct?

a) P is **O(n)** and Q is **O(log n)**: P's loop variable is incremented by a constant amount, Q's is divided by a constant amount
b) Both are **O(n)**, since each loop begins at one end of the range 1 to n and walks to the other
c) P is **O(n/3)** and Q is **O(n/2)**, because in each case the constant fixes the fraction of the n values that the loop actually visits
d) P is **O(log n)** because its step size of 3 is greater than 1, and Q is **O(n)** because it visits about half of the values between 1 and n

**5. (explain why)** The Lesson II high-level algorithm for finding a maximum reads: *"Declare and initialize variables / Input numbers — compare each input with the current maximum to know which is higher / Identify maximum number and output result."* Carry out **Step 4, algorithm refinement**: write the refined algorithm as numbered pseudocode using a sentinel-controlled loop and a counter, mark which lines are **sequence**, which are **selection** and which are **repetition**, and say what your initialisation of `max` must be and why. Then trace your algorithm on the input **3, 19, 19, 8, STOP** and state the exact final values of every variable.

**6. (explain why)** A recommendation feature on an e-commerce platform is `O(n²)` in the number of users. It is comfortable on the 5,000-user test system, but the platform is about to reach 5,000,000 users. One colleague says the answer is to buy hardware a thousand times faster; another proposes rewriting the feature as an `O(n log n)` design. Using the course's Big O and growth-rate material — including the 1000N versus N² comparison — say which is the real fix and show with numbers why. Then state the two reasons the course gives for needing algorithms at all, and name the design considerations that the rewrite has to respect.

---

## Answers

**1. a** — *Tracing a counter-controlled loop where the increment precedes the test.* Trace it: `sum = 0, count = 0`; read 4 → `sum = 4, count = 1`, `1 < 5` true, loop; read 7 → `sum = 11, count = 2`, loop; read 2 → `sum = 13, count = 3`, loop; read 9 → `sum = 22, count = 4`, loop; read 3 → `sum = 25, count = 5`, and `5 < 5` is **false**, so control falls to step 7 and prints **25**. Five numbers are read; the 8 sits unread. The examinable point is the order of steps 5 and 6: because the counter is incremented **before** the decision, the fifth pass is the last one. (b) is the classic off-by-one in the other direction — it assumes the test sees the pre-increment value, which would let a sixth number in and give 33; that would be the behaviour if step 6 read `count + 1 < 5` or if the increment came after the test. (c) is the "stops when `count` reaches 4" misreading: it treats `count < 5` as a bound on how many additions occur rather than a test evaluated after each one, and stops one number early at 22. (d) gets the arithmetic right and the input/output behaviour wrong: step 3 is only reached when step 6 sends control back to it, and it does not on the fifth pass, so nothing is read and discarded.

**2. a** — *Sentinel-controlled loop: the guard runs before the body, and a strict comparison ignores ties.* Trace: `max = 0, count = 0`. Read 12 — not the sentinel; `12 > 0` so `max = 12`; `count = 1`. Read 5 — `5 > 12` false, `max` unchanged; `count = 2`. Read 40 — `40 > 12` so `max = 40`; `count = 3`. Read 40 again — `40 > 40` is **false**, `max` unchanged, but step 6 still runs; `count = 4`. Read 7 — `7 > 40` false; `count = 5`. Read -1 — step 4 sends control straight to step 8, skipping the counter. Printed: **`max = 40, count = 5`**. Two mechanisms are being tested at once: the sentinel is a terminator, not data, and step 5 is a conditional assignment while step 6 is unconditional. (b) is the error of counting the sentinel — the whole purpose of testing for it at step 4, before the counter, is that it is not one of the user's numbers. (c) is the more instructive trap: it assumes step 6 is inside the `if` of step 5, so a value that fails to beat the maximum goes uncounted. The pseudocode's numbering makes step 6 a separate, unconditional step; misreading the scope of a selection is exactly what tracing line by line prevents. (d) confuses this algorithm with the other one this week — 12 + 40 + 40 + 7 + 5 = 104 is a running **sum**, and `max <- x` assigns, it does not accumulate.

**3. b** — *Initialising an accumulator to a value outside the input set.* Trace what happens: `max = 0`; read -12; `-12 <> 9999`, so `-12 > 0` is false and `max` stays 0; read -5, likewise false; read -40, likewise false; read 9999, the while test fails and the loop ends; print **0**. Nothing in the input is 0, so the algorithm has reported a number the user never entered — a clear failure of **correctness**, and it is the initialisation, not the loop, that caused it. The repair the course's Step 5 review would produce is to make the first value read the initial maximum and compare from the second value onwards, which also removes the hidden assumption that all inputs are non-negative. (a) is the tempting "off-by-one comparison" misdiagnosis; trace it and `>=` changes nothing, since -12, -5 and -40 all fail `>= 0` exactly as they failed `> 0`. The `>` versus `>=` distinction only matters for ties, and there are none here. (c) misreads the loop shape: a `while` guard is evaluated **before** the body, so 9999 is tested at step 3 and the loop exits without step 4 ever seeing it — this would be a genuine bug in a loop that tested at the bottom, which is why it is worth being able to tell the two apart. (d) is a real bug pattern in the wrong place: reading at the bottom of the body is precisely what makes this loop correct, because the value read at step 2 is compared on the first pass and each subsequent read is compared on the next; moving the read to the top would skip the first value entirely.

**4. a** — *The course's mechanical rules: increment/decrement by a constant amount gives O(n); divide/multiply by a constant amount gives O(log n).* P's variable moves 1, 4, 7, 10, ... — **incremented by a constant amount** — so it runs about `n/3` times, and the course's rule assigns **O(n)**; Big O describes the **growth rate**, and dividing by three is a constant factor that does not change how the cost grows with n. Q's variable is **divided by a constant amount**, halving each pass, so it runs about `log₂ n` times: **O(log n)** — for n = 1,000,000 that is about 20 passes against P's 333,333. (b) is the "one loop means O(n)" habit, which is right for P and blind to what Q's update does; the rule is about **how** the loop variable changes, not about how many statements are in the loop. (c) is the error the growth-rate material exists to correct — carrying the constant into the notation. `O(n/3)` and `O(n)` describe the same growth rate, and `O(n/2)` is simply not what a halving loop costs. (d) swaps the two rules and reasons from the wrong feature: the size of the step (3) is irrelevant, what matters is that it is **added** rather than **multiplied**.

**5.** *Concept: Step 4 stepwise refinement, expressed with sequence, selection and repetition, then traced.* The refinement follows the course's own line — *"Loop until the user enters sentinel value: prompt user to enter a number; allow user to type in a number; compare the number with the maximum; add 1 to a counter"* — with the initialisation made safe:

```
1   prompt the user for a number
2   read x
3   max   <- x            (initialise from the first real value)
4   count <- 1
5   prompt the user for a number
6   read x
7   While x <> STOP do
8         If x > max then max <- x
9         count <- count + 1
10        prompt the user for a number
11        read x
12  Print max, count
```

**Sequence:** lines 1–6 and line 12, executed in order with no step skipped. **Selection:** line 8, the course's `if condition is true then perform activity` form — note that line 9 is deliberately *outside* it, since every value is counted whether or not it beats the maximum. **Repetition:** lines 7–11, the `while condition is true do perform activity` form, needed because the number of values is not known when the algorithm is written. **The initialisation of `max` must be the first value actually read** (line 3), not a literal such as 0: any literal is a guess about the range of the input, and if every value entered falls below it the algorithm prints a number that was never entered. Setting `max` from real data makes the algorithm correct for negative, positive and mixed inputs alike, and is the kind of repair Step 5's review question — *is this algorithm only useful for this particular set of numbers?* — is designed to force. **Trace on 3, 19, 19, 8, STOP:** line 2 reads 3, so `max = 3`, `count = 1`; line 6 reads 19; the guard passes; `19 > 3` so `max = 19`; `count = 2`; read 19; guard passes; `19 > 19` is false so `max` stays 19; `count = 3`; read 8; guard passes; `8 > 19` false; `count = 4`; read STOP; the guard at line 7 fails and the loop ends. **Final values: `x = STOP`, `max = 19`, `count = 4`**, and the printed output is `19, 4`. The repeated 19 is counted but changes nothing, and STOP is neither counted nor compared.

**6.** *Concept: growth rate as the thing that decides efficiency, and the constant factor hardware can buy.* The rewrite is the real fix; the faster machine is not. The course states that when two algorithms are compared to see which is more efficient **the most important factor to consider is the growth rate**, and that **Big O is useful precisely because it describes the growth rate** — its own illustration being **1000N versus N²**, where the algorithm carrying a constant of a thousand looks a hundred times worse at N = 10, draws level at **N = 1000**, and is better by an unbounded margin thereafter. Faster hardware is exactly a change to that constant; it cannot change an exponent. Numerically: at n = 5,000 the quadratic feature does about 5,000² = **25,000,000** units of work, and the proposed design about 5,000 × log₂ 5,000 ≈ 5,000 × 12.3 = **61,000** — a factor of roughly 400, small enough to hide behind a comfortable test system. At n = 5,000,000 the quadratic does 5,000,000² = **25,000,000,000,000** and the rewrite about 5,000,000 × 22.3 = **111,000,000** — a factor of roughly **225,000**. Multiplying the user count by 1,000 multiplied the quadratic's work by **1,000,000** and the rewrite's by only about **1,800**; hardware a thousand times faster therefore leaves the quadratic feature a thousand times worse off than it is today, while the rewrite absorbs the growth. This is what the course means by **priori analysis** — the comparison is made before either version is implemented in a particular language, and does not depend on measuring the existing code. The two reasons the course gives for needing algorithms are precisely the two at stake here: **performance and scalability**, achieved because breaking a solution into small, sizeable steps lets us optimise it. The **design considerations** the rewrite must respect are **modularity** (the solution broken down into smaller steps), **correctness** (the new design must still return the same recommendations), **maintainability** (easily refactored), **functionality** (steps logical and practical), **robustness** (the solution to the problem clearly defined), **simplicity** (very easy to understand) and **extensibility** (another designer can update and upgrade it) — a faster algorithm that no one else can extend has traded one failure for another, which is why the week's case study credits a *well-designed* recommendation algorithm, collaborative filtering, rather than merely a faster one.
