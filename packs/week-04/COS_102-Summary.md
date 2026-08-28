# COS_102 — Week 4 Summary

*Introduction to Problem Solving · Week 4 (28 Sep–4 Oct 2026) · Topic: Algorithm Concepts — Algorithms I (what algorithms are, the development process, representation) and Algorithms II (writing an algorithm, analysis, complexity, characteristics, design considerations)*

## The 8 most examinable things this week

1. **Definition, in the course's own words:** algorithms are **sets of commands that the computer can follow to carry out calculations or other problem-solving tasks**; they are **instructions implemented in a particular order to carry out a task**; they **consist of inputs, a process, and outputs**; and they **can be represented as either pseudocode or flowcharts**. Order is part of the definition — the same commands in a different order are a different algorithm.
2. **Algorithm ≠ program ≠ computer.** **Computers are tools used to carry out a problem-solving plan.** **Computer programs are sets of instructions that describe the steps the computer has to follow in order to carry out a specific task or plan.** **Algorithms are plans for solving problems, are designed by people, and must be converted into a computer program.** So: person designs the plan → the plan is converted into a program → the computer, as a tool, runs it.
3. **The five characteristics** the Summary sheet names: **input, unambiguity, finiteness, effectiveness, language independence.** The slides give the same five as sentences: algorithms should have **input values that will be processed to produce some output**; **straightforward and clear instructions**; a **limited and countable number of instructions**; and should **not be dependent on any programming language**. (Standard textbook names for these: *input/output*, *definiteness*, *finiteness*, *effectiveness*, *language independence*.)
4. **The five development steps, in order:** **Step 1 problem description → Step 2 problem analysis → Step 3 high-level algorithm development → Step 4 algorithm refinement → Step 5 algorithm review.** Learn the order and what each step asks.
5. **The three things every algorithm representation must have: sequence, selection, repetition** — so the algorithm is "easily translatable into various programming languages".
6. **Priori analysis vs posterior analysis.** **Priori: carried out before implementing an algorithm in a particular programming language; does not directly affect the implementation.** **Posterior: carried out after the algorithm has been implemented in a particular language; deals with the space and running time requirements.**
7. **Complexity is measured in time and space and represented by big O notation.** **Time complexity** = the time required by an algorithm to complete its execution; **space complexity** = the amount of computer space required. **Best case** = minimum time for input of size n; **worst case** = maximum time for input of size n; **average case** = time for a typical input of size n. When comparing two algorithms **the most important factor is the growth rate**.
8. **Design considerations (Summary sheet list): modularity, correctness, maintainability, functionality, robustness, simplicity, extensibility** — and **we need algorithms for performance and scalability**.

## What an algorithm is, and what surrounds it

An algorithm is a **plan**, made by a **person**, expressed as an ordered set of instructions with **inputs, a process and outputs**, which must then be **converted into a computer program** before any computer can execute it. Because it is language-independent, the *same* algorithm can be implemented in Python, C or Java — changing language changes the program, never the algorithm.

**Why we need them:** if we can break the solution down into smaller steps as algorithms require, we can **optimise the performance of the solution** — the course names **performance and scalability** as the two reasons.

**Design considerations (slides):** algorithms should be **modular** (the solution can be broken into smaller steps), **correct**, **maintainable and easily refactored**, **logical and practical** in their steps, **extensible** (another designer can update and upgrade it), **robust** (the solution to the problem is **clearly defined**), and **simple** (very easy to understand).

## The five development steps, stated precisely

| Step | What it is | What the course asks at that step |
|---|---|---|
| **1. Problem description** | Getting the problem stated. Harder than it looks because **two different parties** are involved: the **client** (finding a solution) and the **programmer** (providing the solution). | Three issues to watch for: **descriptions relying on unstated assumptions**, **ambiguous description**, **incomplete description**. |
| **2. Problem analysis** | Analysing the described problem so the **starting and ending points** of the problem-solving process are clear. | *Starting point:* What data do we have? Where is the data? What formulas are related to the problem? What rules are required to manipulate the data? How are the data values related? *Ending point:* What results are we expecting? What parameters have changed in the items? What changes have been made? What items are now non-existent? |
| **3. High-level algorithm development** | Develop an algorithm **focused on the main parts of the solution and not on every minor detail**; minor details come later. | Rationale: it is **time-wasting and costly to focus on every minor detail before at least coming up with a solution**. |
| **4. Algorithm refinement** | **Stepwise refinement** — provide more detail about each high-level step. | Refine based on: **who will implement the algorithm**, **how much knowledge that person has**, and **the computer specifications**. |
| **5. Algorithm review** | Check that the algorithm actually solves the problem. | Two review questions: **can it only solve a particular problem, or can it be applied to more general problems?** and **can the complexity of the algorithm be reduced?** |

**The course's high-level example (meeting scheduling):** 1 Identify who needs to be at the meeting. 2 Find common empty spaces in calendars. 3 Choose one and tell everyone. 4 Receive confirmation that everyone is still available. 5 If the response to 4 is negative, iterate from 2; else if positive, identify the meeting location. **Refining step 2** gives: ask all to communicate availability or suggest times and get responses → examine the responses manually or automatically → find common openings, if any → else iterate with different time blocks or suggestions. Note that refinement **added detail to one step**; it did not change the plan.

## How algorithms are expressed

- **Natural language / numbered steps** — the form of the high-level meeting algorithm above. Readable by the client, but prone to exactly the three step-1 faults (unstated assumptions, ambiguity, incompleteness).
- **Pseudocode** — structured, language-like text (`INPUT`, `IF … THEN … ELSE`, `WHILE … DO`, `OUTPUT`) with no compiler and no fixed syntax. Compact, easy to refine stepwise, translates line-for-line into a real language.
- **Flowchart** — the same logic drawn as boxes: **oval** start/stop, **parallelogram** input/output, **rectangle** process, **diamond** decision, arrows for flow. The course's own flowchart marks each box with its kind: `Sum = 0, Count = 0` (process), `Enter n` (I/O), `sum = sum + n; count = count + 1` (process), `Is count < 5` (decision), `Print sum` (I/O).

The course states only that algorithms **can be represented as either pseudocodes or flowcharts** — whichever is used, the representation must exhibit **sequence, selection and repetition**.

## The three control structures

| Structure | Course statement | Form |
|---|---|---|
| **Sequence** | The algorithm should be **ordered in a step-by-step manner such that no step is skipped**, unless there is a **compelling reason** to skip a step. | Step 1 → Step 2 → Step 3 → … |
| **Selection** | **Some steps can be selectively executed if some conditions are satisfied**; the alternative steps to execute may be **either one or more**. | `If condition is true Then perform activity` — or `If condition is true Then perform activity 1 Else perform activity 2` |
| **Repetition (iteration)** | The **same steps need to be executed repeatedly**; since **writing the same step on different lines is not sustainable**, other methods are used. | `while condition is true do perform activity` |

## Worked algorithm 1 — sum of five numbers (the course's flowchart, written out)

```
START
    sum   <- 0                     (process)
    count <- 0                     (process)
    REPEAT
        INPUT n                    (I/O)
        sum   <- sum + n           (process)
        count <- count + 1         (process)
    UNTIL count >= 5               (decision: "Is count < 5" — YES loops back, NO exits)
    OUTPUT sum                     (I/O)
STOP
```

The course's flowchart tests **after** the body (`Enter n` is reached before the decision is ever evaluated), so it is a **post-test** loop: the body always runs **at least once**. The pre-test equivalent, which behaves identically for five numbers but runs zero times if the target count were 0, is:

```
START
    sum <- 0 ;  count <- 0
    WHILE count < 5 DO
        INPUT n
        sum   <- sum + n
        count <- count + 1
    ENDWHILE
    OUTPUT sum
STOP
```

**Dry run** with inputs 12, 7, 3, 20, 8:

| Pass | count at test | n entered | sum after `sum + n` | count after `count + 1` | `count < 5`? | Next |
|---|---|---|---|---|---|---|
| — | — | — | 0 (initialised) | 0 (initialised) | — | enter loop |
| 1 | 0 | 12 | 12 | 1 | YES | repeat |
| 2 | 1 | 7 | 19 | 2 | YES | repeat |
| 3 | 2 | 3 | 22 | 3 | YES | repeat |
| 4 | 3 | 20 | 42 | 4 | YES | repeat |
| 5 | 4 | 8 | 50 | 5 | NO | exit loop |
| — | 5 | — | 50 | 5 | — | `Print sum` → **50**, Stop |

Read the counter column: `count` runs 0,1,2,3,4 **on entry** and the loop body executes **5 times**. Changing the test to `count <= 5` would read six numbers; initialising `count <- 1` would read four. Both are the classic **off-by-one**.

## Worked algorithm 2 — maximum of a set of numbers (the course's Algorithms II example, refined)

High-level (Step 3, as the course gives it): *Declare and initialize variables → Input numbers, comparing each input with the current maximum to know which is higher → Identify maximum number and output result.* Refined (Step 4, as the course gives it): *Loop until the user enters the sentinel value → prompt user to enter a number → allow user to type in a number → compare the number with the maximum → add 1 to a counter.* Written out in full:

```
START
    max   <- 0
    count <- 0
    PROMPT "Enter a number, or -1 to finish"
    INPUT num
    WHILE num <> -1 DO                       ( -1 is the sentinel )
        IF count = 0 OR num > max THEN
            max <- num
        ENDIF
        count <- count + 1
        PROMPT "Enter a number, or -1 to finish"
        INPUT num
    ENDWHILE
    IF count = 0 THEN
        OUTPUT "No numbers were entered"
    ELSE
        OUTPUT "Maximum is ", max, " from ", count, " numbers"
    ENDIF
STOP
```

Three points the review step (Step 5) is meant to catch. **(i)** The guard `count = 0 OR num > max` exists because initialising `max <- 0` and testing `num > max` alone reports 0 as the maximum of `-8, -3, -25` — a set with no zero in it. **(ii)** The sentinel `-1` is **not counted and not compared**; it only ends the loop, which is why the second `INPUT` sits at the **bottom** of the body. **(iii)** The empty-input case is handled explicitly rather than printing a meaningless `max`. Note that this algorithm is **language-independent** and finite: it stops for every input because the sentinel is reachable.

## Analysis and complexity

**Priori analysis** happens **before implementation** in a particular programming language and **does not directly affect the implementation**. **Posterior analysis** happens **after implementation** and **deals with the space and running time requirements** of the algorithm. So priori reasons about the design; posterior measures the running code.

**Complexity** is analysed in terms of **time complexity** (time required to complete execution) and **space complexity** (amount of computer space required), both represented by **big O notation**. **Best case** = minimum time for input of size n; **worst case** = maximum time for input of size n; **average case** = time on a typical input of size n.

**Why big O:** for one problem there are generally various solutions, in the shape of different algorithms with different logic, so **we normally want to compare the algorithms to see which is more efficient**, and **the most important factor to consider is the growth rate**. Big O **describes the growth rate**. The course's illustration compares **1000N** with **N²**: the constant 1000 makes `1000N` larger for small n, but `N²` grows faster and is therefore the less efficient of the two — growth rate, not the value at small n, decides.

**Growth-rate table (course order):** `C` constant · `Log N` logarithmic · `Log² N` log-squared · `N` linear · `N log N` · `N²` quadratic · `N³` cubic · `2ᴺ` exponential.

**Rules for reading time complexity off code:**

| Class | The course's rule |
|---|---|
| **O(1)** | The function or set of statements **contains no loop, no recursion and no call to any other non-constant-time function**. |
| **O(n)** | A loop whose **loop variable is incremented or decremented by a constant amount**. |
| **O(nᶜ)** | **Nested loops** — the complexity equals **the number of times the innermost statement is executed**. |
| **O(log n)** | A loop whose **loop variable is divided or multiplied by a constant amount**. |
| **O(log log n)** | A loop whose **loop variable is reduced or increased exponentially by a constant amount**. |
| **O(2ⁿ)** | Often **recursive** algorithms that solve a problem of size n by **recursively solving two smaller problems of size n−1**. |

**Case study (Summary sheet):** an e-commerce recommendation system could not serve personalised recommendations to millions of users, causing poor user experience and lost sales; a well-designed algorithm — **collaborative filtering** — analysed user behaviour and preferences, improved recommendation accuracy, and raised engagement, conversion and sales. The point being examined is that the win came from **algorithm design**, not from more hardware: it is a **performance and scalability** story.

## Commonly confused

| Pair | The distinction |
|---|---|
| **Algorithm vs program** | An **algorithm is a plan for solving a problem, designed by people**, and is **language-independent**. A **program is the set of instructions describing the steps the computer has to follow**, written in some language. The algorithm **must be converted into** a program before it runs. Translating an algorithm into Java produces a new *program*, not a new algorithm. |
| **Algorithm vs computer** | The **computer is a tool used to carry out a problem-solving plan** — it supplies no plan of its own. The plan is the algorithm. |
| **Pseudocode vs flowchart vs natural language** | All three express the **same** algorithm. **Pseudocode** is structured text with no compiler and no fixed syntax; **flowchart** is the diagram with oval/parallelogram/rectangle/diamond symbols; **natural-language steps** are readable prose. Choosing a different representation never changes the algorithm's logic or its complexity. |
| **Unambiguity (definiteness) vs effectiveness** | **Unambiguity** = the instructions are **straightforward and clear**, so each step has exactly one reading. **Effectiveness** = each step can actually be **carried out** and the algorithm does the job. "Add a suitable amount of salt" fails unambiguity; "compute the largest prime" is perfectly clear but fails effectiveness. |
| **Finiteness vs termination of the loop** | **Finiteness** = a **limited and countable number of instructions**, and the algorithm ends. A four-line algorithm whose `WHILE` condition never becomes false is finite in *text* but violates finiteness in *execution* — that is why an unchanged loop variable is a finiteness bug, not a style bug. |
| **while vs repeat-until vs for** | **`WHILE`** tests **before** the body: the body may run **zero** times. **`REPEAT … UNTIL`** tests **after** the body: it runs **at least once** — the course's flowchart (`Enter n` then `Is count < 5`) is this form. **`FOR`** is used when the number of repetitions is **known in advance** and the counter is initialised, tested and incremented by the construct itself. Rewriting a `REPEAT` as a `WHILE` without checking the empty case is a real bug. |
| **Selection with `else` vs two separate `IF`s** | `IF c THEN a1 ELSE a2` runs **exactly one** of the two. Two separate `IF`s can run **both** or **neither** — and if the first one changes the variable the second tests, the second may now fire as well. |
| **High-level algorithm vs refinement** | The **high-level algorithm** deliberately omits minor detail and captures **the main parts of the solution**; **refinement** adds detail **to a step**, chosen by who will implement it, their knowledge, and the computer specifications. Adding a new stage to the plan is not refinement. |
| **Priori vs posterior analysis** | **Priori** is done **before** implementation in a language and does **not** directly affect the implementation. **Posterior** is done **after** implementation and concerns **space and running-time requirements**. Timing a running program is posterior; counting loop iterations on paper is priori. |
| **Time vs space complexity** | **Time** = time required to complete execution. **Space** = computer space required. An algorithm can be improved on one at the cost of the other; big O is used for both. |
| **Worst case vs average case** | **Worst case** = the **maximum** time for input of size n — a guarantee. **Average case** = the time for a **typical** input of size n. A good average does not bound the worst case. |
| **Growth rate vs value at small n** | Big O compares **growth rates**. `1000N` exceeds `N²` while n < 1000, yet `N²` is the less efficient algorithm, because efficiency is judged by how the cost **grows** with n, not by which is larger on a small input. |
| **Robustness vs correctness** | **Correctness** = the algorithm produces the right result. **Robustness** = the solution to the problem is **clearly defined**, so the algorithm still behaves sensibly at the edges (no numbers entered, all negatives). The max-of-N algorithm above is correct on ordinary input and only robust once the empty case and the negative case are handled. |

*Note: the source PDFs give the flowchart of the sum-of-five algorithm as a slide image and the max-of-N algorithm only as high-level and refinement bullets, and the extractor drops "fi"/"ffi" ligatures throughout ("dierent", "ecient", "reﬁnement"). The two algorithms above are written out in full pseudocode, with the dry-run table, symbol list, `FOR`/`WHILE`/`REPEAT` comparison and the definiteness-vs-effectiveness distinction supplied in the standard 100-level form; every definition, characteristic, development step, analysis type and complexity rule is quoted from the source itself.*
