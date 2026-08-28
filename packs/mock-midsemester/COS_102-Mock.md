# COS_102 — Mid-semester Mock

*Introduction to Problem Solving · Weeks 1–4 · 75 minutes · notes closed · 36 marks*

**Instructions.** You have **75 minutes** for the whole paper: aim for about 40 minutes on Section A and about 35 minutes on Section B. **Section A carries one mark per question (30 marks) and Section B carries one mark per question (6 marks).**
Close your notes before you start, answer every question, and when you finish **mark Section B honestly against the model answers** — award the mark only if your answer contains the named terms and the distinction, not merely the right general idea.

## Section A — Multiple choice (30)

**1.** A logistics firm asks: "Of all the routes from Abuja to Kano, which one costs the least fuel?" Under the course's four computational problem types this is:
a) A decision problem — the firm needs a YES or NO verdict on each candidate route
b) A search problem — the solution is a value or values with a particular property
c) An optimization problem — the best possible solution is accepted as the solution
d) A counting problem — the solution is the number of values with a particular property

**2.** A payroll clerk asks: "Is there any staff member on the list earning above ₦500,000?" This is:
a) A decision problem — the solution can only be YES or NO
b) A search problem — the solution is the staff member or members earning above ₦500,000
c) A counting problem — the solution is how many staff earn above ₦500,000
d) An optimization problem — the solution is the single highest-paid member of staff

**3.** The course's worked example averages five grades and prints PASS or FAIL, with **a pass mark of 45**. Which test implements that pass mark correctly?
a) `IF Grade > 45 THEN PRINT "PASS"`
b) `IF Grade > 44 THEN PRINT "PASS"`
c) `IF Grade ≥ 44 THEN PRINT "PASS"`
d) `IF Grade = 45 THEN PRINT "PASS"`

**4.** A student writes `IF Grade > 45` in that program. It compiles, runs to completion, and prints FAIL for a candidate whose average is exactly 45. The fault is:
a) A syntax error — the code has broken the rules of the language
b) A logical error — the code runs but produces the wrong result
c) A run-time error — the fault made itself known while the program was executing
d) Not an error but refactoring — the function of the solution has not been changed

**5.** Breaking the main problem into smaller problems until each is small enough to solve — so that solving all of them solves the main problem — is what the course does at:
a) Step 1, understanding the problem — the inputs, processes and output are identified
b) Step 2, creating a step-by-step solution plan — this breaking down is decomposition
c) Step 3, carrying out the solution plan — coding, compilation, debugging, documentation
d) Step 4, evaluating and refactoring the solution — structure and efficiency are improved

**6.** A programmer replaces five separate `INPUT` statements with a loop that reads five grades. The output is identical for every possible input. This is:
a) Debugging — an error has been found so that it can be removed to avoid failure
b) Refactoring — structure, design and efficiency improve, the function does not change
c) Testing — the program has been verified to work as expected on the sample data
d) Decomposition — the main problem has been broken into smaller sub-problems

**7.** According to the course, "understanding the problem" is done by answering which three questions?
a) What are the inputs? What are the processes involved? What is the output?
b) What data do we have? Where is the data? What formulas relate to the problem?
c) What is the nature of the problem? What are the criteria for success? What type is it?
d) Which language will be used? Which translator? Which kind of documentation?

**8.** A doctor who cannot operate on a deep tumour recalls how a commander took a fortress by sending small parties down several roads at once, and treats the tumour with several weak rays converging on it. The strategy is:
a) Analogy — existing understanding of a different system is carried over, the underlying principles being the same
b) Abstraction — the unneeded attributes of the medical problem are filtered out to leave a model
c) Means-ends analysis — the end state is fixed first and the best means to reach it determined
d) Heuristics — the decision is made without stopping to think about the next course of action

**9.** A company sets a target of ₦2 bn turnover within a year. Management lists the obstacles it expects to meet, splits the target into departmental sub-targets, and solves each with the best available approach. The strategy is:
a) Means-ends analysis — the best strategy is fixed in advance from the issues expected, and each sub-problem is solved with the best possible approach
b) Abstraction — the aspects that will not help reach the target are removed so an essential model of it remains
c) Brainstorming — a group comes together spontaneously and gathers as many candidate solutions as possible
d) Trial and error — approaches are implemented one after another until a working solution is arrived at

**10.** A technician knows the fault lies in one of four cables, so she swaps in a fresh cable, one cable at a time, until the machine works. The course would call this:
a) Trial and error — errors are removed through experimental trials, and the possible solutions are few
b) Heuristics — a sub-optimal solution is acceptable and time and energy are being saved
c) Brute force — all possible choices are gone through, relying solely on computing power
d) Backtracking — a final state is rejected and a previous state resumed with its untried options

**11.** "Design a campaign that makes our brand feel modern." The course would classify this as:
a) An ill-defined problem — there are no clear goals, expected solutions or solution paths
b) A well-defined problem — the goal (a campaign) and the solution path (design it) are both given
c) A routine problem — the question is supplied together with the facts required to answer it
d) An undecidable problem — no algorithm returns an accurate true/false for every input value

**12.** In the course's substitution puzzle the rules are **OB → BOOB** and **BOB → O**. Applying the **first** rule once to the string **BOB** gives:
a) BBOOB  b) BOOBB  c) BOOOB  d) O

**13.** Which statement gives the course's relationship between unsolvable and undecidable problems?
a) Undecidable problems are a subset of unsolvable problems
b) Unsolvable problems are a subset of undecidable problems
c) The two terms name the same class of problems under two different authors
d) The two classes are disjoint — an undecidable problem is always solvable in practice

**14.** Which pair does the course list under **solvable problems based on algorithms** rather than under solvable problems based on data structures?
a) Heaps and trees
b) Divide-and-conquer and recursive problems
c) Stacks and queues
d) Vectors and linked lists

**15.** Which is one of the two contributions the course credits Turing with making to the modern computer?
a) Manipulating a computer's functionality by storing encoded instructions in its memory
b) Converting high-level instructions directly into machine code with no assembly stage
c) Proving that every problem with a clearly stated goal has a systematic solution method
d) Establishing that ill-defined problems can always be re-expressed as well-defined ones

**16.** New drivers are shown a whiteboard drawing of the city's road network with the shortest path between two depots traced on it, so that they understand the routing rule. The method is:
a) Visualisation — diagrams and images illustrate what the problem entails and how to approach it, helping humans rather than computers
b) Problem recognition — the routing task has been reduced to a more general graph problem already solved elsewhere
c) Data mining — unnoticed patterns and underlying relationships are extracted from a large gathered data set
d) Pipelining — each leg of the route is a subtask whose result feeds the next leg in the series

**17.** A payroll system computes gross pay, hands that figure to a tax module, whose output is handed to a net-pay module, whose output is printed. The method is:
a) Pipelining — a task is divided into a series of subtasks, each one's result feeding the next
b) Divide and conquer — smaller instances of the same problem are solved and their solutions combined
c) Dynamic programming — the result of each sub-problem is saved so that it is never recomputed
d) Backtracking — each module can be undone so a previous state is resumed with other options

**18.** Before an app is released, the team runs it against a written list of scenarios and success criteria, feeding it erroneous data and simulating peak-hour traffic. This is:
a) Performance testing — a program is evaluated against test scenarios and success criteria before release
b) Debugging — errors are found so that they can be removed and program failure avoided
c) Problem recognition — the criteria for success are specified so the root cause is addressed
d) Hypothesis testing — a stated prediction is tested and the null hypothesis rejected or accepted

**19.** A ministry asks whether computational approaches can be used for a national census model. The analysts check whether the required calculations are possible at all, given processing times and capacity. Which factor is being examined?
a) The problem needs to be clearly defined
b) The problem needs to be computable
c) The data requirements need to be examined
d) The problem must be grouped as a specific type of problem

**20.** A maze drawn as a binary search tree is solved by walking a branch to its leaf, finding a dead end, returning to the last junction that still has an untried turn, and continuing from there. The method is:
a) Backtracking — a final state is checked for accept or reject, then a previous state is resumed with unconsidered options
b) Brute force — every possible path through the maze is enumerated until a solution is found
c) Greedy algorithm — the best available turn is applied at each stage and never revisited afterwards
d) Divide and conquer — the maze is split into smaller mazes, each solved and the solutions combined

**21.** On the course's padlock reasoning, a **3-digit** padlock whose digits run 0–9 gives brute force how many combinations to work through?
a) 30 — the three dials multiplied by the ten digits
b) 720 — 10 × 9 × 8, since a digit cannot be repeated
c) 999 — the largest three-digit number that can be shown
d) 1000 — 10 × 10 × 10

**22.** Five activities have (start, finish) times **(1,4), (3,5), (0,6), (5,7), (8,9)**. The greedy rule — repeatedly take the activity finishing earliest among those starting after the last one taken — schedules how many activities?
a) 2  b) 3  c) 4  d) 5

**23.** A malaria-drug trial fixes its significance level at 0.05 in advance and the data return a p-value of 0.08. On the course's rule the researcher should:
a) Accept the null hypothesis, because the p-value is greater than the significance level
b) Reject the null hypothesis, because a p-value as low as 0.08 is strong evidence against it
c) Accept the null hypothesis, and report that the drug has been proved to have no effect
d) Raise the significance level to 0.10, so that the result comes out as significant

**24.** In the course's flowchart for summing five numbers, the box `Enter n` is drawn as:
a) An oval, because it opens the flow of data into the algorithm
b) A parallelogram, because it is an input/output box
c) A rectangle, because entering and storing a number is a process step
d) A diamond, because the algorithm must wait on the user's response

**25.** The pre-test version reads `sum <- 0; count <- 0; WHILE count < 5 DO INPUT n; sum <- sum + n; count <- count + 1 ENDWHILE; OUTPUT sum`. A student changes the initialisation to `count <- 1` and alters nothing else. The loop now reads:
a) Four numbers  b) Five numbers  c) Six numbers  d) No numbers at all

**26.** Trace this fragment and say what is printed:

```
n <- 8
IF n > 5 THEN
    n <- n - 4
ENDIF
IF n > 5 THEN
    PRINT "HIGH"
ELSE
    PRINT "LOW"
ENDIF
```

a) HIGH  b) LOW  c) HIGH then LOW  d) Nothing is printed

**27.** Which time complexity does the course's rule assign to this fragment?

```
FOR i <- 1 TO n DO
    FOR j <- 1 TO n DO
        total <- total + 1
    ENDFOR
ENDFOR
```

a) O(n) — each loop variable is incremented by a constant amount
b) O(n²) — nested loops, so the complexity is the number of times the innermost statement runs
c) O(log n) — the work is repeatedly divided between the two loop variables
d) O(n log n) — an outer linear loop wrapped around a loop that halves its variable

**28.** An algorithm reads `sum <- 0; count <- 0; WHILE count < 5 DO INPUT n; sum <- sum + n ENDWHILE; OUTPUT sum`. Which characteristic of algorithms does it violate?
a) Input — no values are supplied to be processed into an output
b) Unambiguity — the instructions are not straightforward and clear
c) Finiteness — the number of instructions executed is not limited and countable
d) Language independence — the algorithm depends on a particular programming language

**29.** After the algorithm has been coded in Java, a developer times the running program on 10,000 records and measures how much memory it holds. That work is:
a) Posterior analysis — done after implementation in a language, dealing with space and running-time requirements
b) Priori analysis — done before implementation in a language, and not directly affecting the implementation
c) Performance testing — the program is measured against pre-written success criteria before it is released
d) Worst-case analysis — the maximum time for an input of size n is being established for the record

**30.** At which development step does the course ask "can it only solve a particular problem, or can it be applied to more general problems?" and "can the complexity of the algorithm be reduced?"
a) Step 2, problem analysis  b) Step 3, high-level algorithm development  c) Step 4, algorithm refinement  d) Step 5, algorithm review

## Section B — Short answer (6)

**31.** A clinic takes **three** blood-pressure readings per patient and must print the average, followed by "HIGH" when the average is **140 or more** and "NORMAL" otherwise.
(a) Write the pseudocode. (b) Classify "Which patients averaged 140 or more?" and "How many patients averaged 140 or more?" under the course's four computational problem types. (c) Name, in order, the four parts of carrying out the solution plan, and say which kind of documentation the clinic's receptionist needs and why.

**32.** Two tasks arrive on the same day: **(i)** "A trader bought goods for ₦48,000 and sold them for ₦61,500 — what was the profit?" **(ii)** "Find a way to halve our delivery failures in a city we have never operated in."
Classify each as routine or non-routine using the course's definitions and justify the classification. Then state the three-stage novel method the course prescribes for the second, name one strategy you would use inside it, and explain in two sentences why brainstorming and heuristics are not interchangeable choices here.

**33.** (a) Sort **7, 2, 9, 4, 6** into **ascending** order with merge sort, showing every split and every merge.
(b) State the two conditions under which the course says divide and conquer is worth using at all.
(c) One team proposes examining three years of stored complaint records for unnoticed patterns; another proposes stating in advance that "calling customers back within 24 hours reduces repeat complaints" and testing it. Name the method each team is using and give the one-line distinction between them.

**34.** A Step 3 high-level algorithm reads: "1 Collect the applications. 2 Score each application. 3 Publish the ranked list." A designer then **(i)** expands step 2 into "open the application, award up to 10 marks per criterion, total the marks, store the total", and **(ii)** inserts a further step "4 Email the unsuccessful applicants".
Say which of (i) and (ii) is refinement and which is not, and why. Then name the three things the course says refinement is based on, and distinguish robustness from correctness in one sentence each.

**35.** Write pseudocode that reads numbers until the sentinel **0** is entered and prints how many of them were above 100. Dry-run it with the inputs **120, 45, 300, 100, 0** in a table showing each variable after each pass. State its time complexity and name the course rule that gives it. Then place **C, N², N log N, 2ᴺ, log N** in the course's growth-rate order, and say in one sentence why the worst case rather than the average case is the guarantee.

**36.** A plan is written first as numbered English steps, then as pseudocode, then as a flowchart, then coded in Java and compiled and run.
At which of those points, if any, does a **new algorithm** come into existence, and why? State exactly what a compiler, an assembler and an interpreter each take in and each produce. Finally, say whether re-writing the Java program in C changes the big-O complexity, and give the reason.

## Answers

**1. c — An optimization problem.** *Concept: the four computational problem types.* [Week 1] The best possible solution is accepted as the solution. (b) is the standard slip — treating any question that returns a value as a search; here the property demanded is "cheapest of all", which is what makes it optimization rather than search.

**2. a — A decision problem.** *Concept: decision vs search vs counting.* [Week 1] "Is there any…" admits only YES or NO. (b) would be the answer to "Which staff earn above ₦500,000?"; (c) to "How many…"; (d) to "Who is the highest paid?".

**3. b — `IF Grade > 44`.** *Concept: the pass-mark trap in the worked example.* [Week 1] A pass mark of 45 means Grade ≥ 45, i.e. Grade > 44. (a) fails a candidate scoring exactly 45; (c) passes a candidate on 44, one mark below the pass mark; (d) passes only the exact score 45.

**4. b — A logical error.** *Concept: syntax vs logical vs run-time errors.* [Week 1] The code obeys the language's rules and runs to completion, so it is not syntax; it simply produces the wrong result. (c) is the common confusion — a run-time error announces itself as a failure during execution, whereas here execution finishes normally and only the answer is wrong. (d) misreads refactoring, which never changes the function of the solution — this fault does change it.

**5. b — Step 2, creating a step-by-step solution plan.** *Concept: decomposition.* [Week 1] The course names this step decomposition, and says the plan is then expressed as algorithms represented by pseudocode and flowcharts. (a) is the earlier step (inputs, processes, output); (c) names the four parts of carrying out the plan; (d) is the last step.

**6. b — Refactoring.** *Concept: refactoring vs debugging vs testing.* [Week 1] Structure, design and efficiency improve while the function of the solution is unchanged — the signature of refactoring. (a) presupposes an error, and there was none; (c) confuses verifying behaviour with altering the code; (d) applies decomposition to the code layout rather than to the problem.

**7. a — Inputs, processes, output.** *Concept: understanding the problem.* [Week 1] (b) is Week 4's **problem analysis** starting-point checklist and (c) is Week 3's **problem recognition** three factors — both are right-sounding triples attached to the wrong stage, which is exactly how they are examined.

**8. a — Analogy.** *Concept: analogy vs abstraction.* [Week 2] Understanding is imported from a different, already-understood system whose underlying principles are the same. (b) would require detail to be deleted from the tumour problem itself; (c) reads the converging rays as a means chosen from a stated target; (d) misses that the doctor did stop to think — a whole other system was reasoned through.

**9. a — Means-ends analysis.** *Concept: means-ends analysis vs abstraction.* [Week 2] The issues expected are considered beforehand, and the problem is broken into smaller problems each solved with the best possible approach. (b) is the reduction-by-discarding rival: abstraction throws unneeded attributes away, whereas means-ends keeps and solves every sub-problem. (c) requires a group generating ideas without criticism; (d) requires trying approaches one after another.

**10. a — Trial and error.** *Concept: trial and error's suitability rule.* [Week 2] Approaches are implemented one after another until a solution is arrived at, and there are only four possible solutions — few, which is precisely when the course recommends it. (b) is wrong because the technician *does* try each option rather than deciding without stopping to think; (c) and (d) are Week 3 **computational approaches**, not Week 2 strategies — brute force relies solely on computing power to enumerate every possibility, and backtracking moves between states and reverses out of dead ends.

**11. a — Ill-defined.** *Concept: ill-defined vs well-defined problems.* [Week 2] No clear goal, no expected solution and no solution path. (b) mistakes "we know what we want to make" for a stated goal; (c) is routine, which needs supplied facts and an arithmetic operation; (d) escalates a vague brief into undecidability, which is about no algorithm existing for any input.

**12. a — BBOOB.** *Concept: substitution puzzles.* [Week 2] BOB contains OB at the second and third letters; replacing it with BOOB gives B + BOOB = **BBOOB**. (d) applies the *other* rule (BOB → O); (c) is the target string of the course's full derivation, three steps later; (b) substitutes at the wrong occurrence. The point being illustrated is that the string **grows before it shrinks**, which is why deciding in general whether a substitution puzzle comes out is unsolvable.

**13. a — Undecidable problems are a subset of unsolvable problems.** *Concept: unsolvable vs undecidable.* [Week 2] Unsolvable = no systematic method (no UTM program); undecidable = no algorithm returns an accurate true/false for **every** input value, which the course states is a subset. (b) inverts the containment; (c) erases a distinction the course draws explicitly; (d) confuses "no algorithm exists" with "hard in practice".

**14. b — Divide-and-conquer and recursive problems.** *Concept: the two lists of solvable problems.* [Week 2] Solvable problems **based on algorithms** are sorting, divide-and-conquer, recursive, searching and text-processing problems. (a), (c) and (d) are all drawn from the other list — solvable problems **based on data structures**: vectors, stacks, queues, arrays, heaps, trees, graphs, linked lists.

**15. a — Storing encoded instructions in memory to manipulate the computer's functionality.** *Concept: Turing's two contributions.* [Week 2] The second is that a single machine of fixed structure can carry out every computation the UTM can. (b) describes the **interpreter** from Week 1; (c) contradicts the existence of unsolvable problems; (d) invents a conversion the course never claims.

**16. a — Visualisation.** *Concept: visualisation vs problem recognition.* [Week 3] Diagrams, graphs and images illustrate what the problem entails and how to approach it — aimed at **humans**, not computers, because people retain images better than text. (b) is the trap: both involve graphs, but reducing wiring to a minimum spanning tree is problem recognition, while drawing a route to explain it is visualisation. (c) needs a large gathered data set; (d) needs a chain of subtasks.

**17. a — Pipelining.** *Concept: pipelining vs divide and conquer.* [Week 3] Different subtasks in a fixed series, each executed by a different process, each result feeding the next — nothing is combined at the end, because the chain itself produces the answer. (b) would require the parts to be the same kind of problem, smaller, solved independently and then combined; (c) adds the saving of sub-problem results; (d) adds the reversal that only backtracking performs.

**18. a — Performance testing.** *Concept: performance testing.* [Week 3] Evaluating whether a program works as expected **before release**, against test scenarios and success criteria, using erroneous data and stress testing. (b) is Week 1's debugging, which removes an already-detected error rather than evaluating the system; (c) is the criteria trap — problem recognition's criteria for success are written at the **start**, to define what a correct solution would be; (d) requires a stated prediction and a null hypothesis, neither of which is present.

**19. b — The problem needs to be computable.** *Concept: the three gating factors.* [Week 3] Computable means determining whether the required calculations are possible, considering processing times and capacity. (a) concerns the current situation, end goal, route to it and obstacles; (c) concerns data types and storage capacity; (d) is not a gating factor at all — it is one of **problem recognition's** three factors, the triple examiners swap for this one.

**20. a — Backtracking.** *Concept: backtracking vs brute force.* [Week 3] A final state is reached and checked for accept or reject, then the algorithm returns to the most recent state with untried options — most often using recursion, and the maze-as-binary-search-tree is the course's own example. (b) would continue enumerating every possibility rather than abandoning dead branches; (c) never revisits a junction at all; (d) would require the maze to be split into independent smaller mazes whose solutions are combined.

**21. d — 1000.** *Concept: brute force.* [Week 3] Each of the three positions is independent with 10 choices: 10 × 10 × 10. (a) adds structure instead of multiplying it; (b) assumes digits cannot repeat, which a padlock does not require; (c) counts the numbers 1–999 and forgets 000.

**22. b — 3.** *Concept: greedy activity selection.* [Week 3] Ordered by finish time: (1,4), (3,5), (0,6), (5,7), (8,9). Take (1,4); the next activity starting at or after 4 that finishes earliest is (5,7); then (8,9). Three activities. (a) is what greedy by **earliest start** would give — (0,6) then (8,9); (c) counts (1,4), (3,5), (5,7), (8,9) without noticing that (1,4) and (3,5) overlap; (d) assumes greedy can accept everything offered.

**23. a — Accept the null hypothesis, because p > significance level.** *Concept: the p-value rule.* [Week 3] p ≤ significance level → reject; p > significance level → accept. (b) inverts the meaning of the p-value — the **smaller** it is, the stronger the evidence to reject. (c) overclaims: the course states that a verdict here does not prove that something does not exist, only that the evidence is not enough. (d) sets the significance level after seeing the data, when the course defines it as fixed in advance as the probability of rejecting a true null hypothesis.

**24. b — A parallelogram.** *Concept: flowchart symbols.* [Week 4] Oval = start/stop, parallelogram = input/output, rectangle = process, diamond = decision; the course's own flowchart marks `Enter n` as I/O. (c) is the usual slip — treating "something happens to a variable" as a process box, when `sum = sum + n` is the process box and `Enter n` is the input.

**25. a — Four numbers.** *Concept: off-by-one in loop initialisation.* [Week 4] With `count <- 1` the counter holds 1, 2, 3, 4 at the test, so the body runs four times. (b) assumes the initial value cannot matter; (c) is what changing the **test** to `count <= 5` would give; (d) confuses a wrong start value with a condition that is false at entry.

**26. b — LOW.** *Concept: two separate `IF`s vs `IF … ELSE`.* [Week 4] The first `IF` fires (8 > 5) and reduces n to 4, so the second test now sees 4 and takes the ELSE branch. (a) is the answer for anyone who evaluates the second test against the **original** value of n and misses that the first `IF` changed the variable the second tests. (c) treats the fragment as one `IF … ELSE` running both arms; (d) assumes an unfired `IF` suppresses the later `ELSE`.

**27. b — O(n²).** *Concept: reading time complexity off nested loops.* [Week 4] The course's rule for O(nᶜ) is nested loops, with the complexity equal to the number of times the **innermost statement** is executed — here n × n. (a) applies the increment rule to each loop separately instead of multiplying; (c) and (d) apply the division/multiplication rule (O(log n)) to a loop variable that is only incremented by a constant.

**28. c — Finiteness.** *Concept: finiteness in execution.* [Week 4] `count` is never incremented, so `count < 5` never becomes false and the number of instructions executed is neither limited nor countable — a finiteness bug, not a style bug, even though the text is only four lines long. (a) is wrong because `INPUT n` supplies input; (b) is wrong because every instruction is perfectly clear — clarity is exactly what unambiguity means, and this algorithm has it; (d) is wrong because nothing here depends on a particular language.

**29. a — Posterior analysis.** *Concept: priori vs posterior analysis.* [Week 4] Carried out **after** the algorithm has been implemented in a particular language, and dealing with the space and running-time requirements. (b) reverses the timing — priori is done before implementation and does not directly affect it. (c) is the closest trap: performance testing also measures a built program, but it happens **before release** and against **pre-written test scenarios and success criteria**, whereas here the object is the algorithm's space and time requirements. (d) names a case, not a kind of analysis; no maximum over inputs of size n is being sought.

**30. d — Step 5, algorithm review.** *Concept: the five development steps.* [Week 4] These are exactly the two review questions. (a) asks the starting- and ending-point questions (what data, where, what formulas, what results); (b) covers the main parts of the solution and not the minor detail; (c) refines on the basis of who implements it, their knowledge and the computer specifications — attaching the right-sounding checklist to the adjacent step is the standard error.

**31.** *Concept: the worked example — algorithm, pseudocode, problem types, carrying out the plan, documentation split.* [Week 1]

(a)
```
START
    INPUT R1, R2, R3
    Average <- (R1 + R2 + R3) / 3
    PRINT Average
    IF Average > 139 THEN
        PRINT "HIGH"
    ELSE
        PRINT "NORMAL"
    ENDIF
STOP
```
`Average > 139` (equivalently `Average >= 140`) is the correct test — `Average > 140` would call a patient averaging exactly 140 normal, the same off-by-one as the pass-mark trap.

(b) "Which patients averaged 140 or more?" is a **search** problem — the solution is the value or values with a particular property. "How many patients averaged 140 or more?" is a **counting** problem — the solution is the number of values with that property. (Had the question been "Is any patient at 140 or more?" it would have been a **decision** problem, and "Which patient has the highest average?" an **optimization** problem.)

(c) The four parts of carrying out the solution plan, in order: **coding** (writing the program, producing the source code) → **compilation and execution** → **debugging and testing** → **program documentation**. The receptionist needs **user documentation** — what the end user requires in order to install and use the program; **programmer documentation** holds the technical details needed to upgrade and maintain it, which is the developer's concern. Note also that documentation is not a final act: it **starts at problem analysis and continues to the testing stage**.

**32.** *Concept: routine vs non-routine, the novel method, and strategy selection.* [Week 2]

**(i) Routine.** A routine problem is any problem that can be solved with an **arithmetic operation**: it supplies the question together with the facts or numbers required, it can be solved with algorithms, and the whole task is **identifying the most appropriate algorithm to apply** — here ₦61,500 − ₦48,000 = ₦13,500, settled very quickly.

**(ii) Non-routine.** A non-routine problem is any problem that **does not have a standard method for solving it**: the procedures and the answer are not immediately clear, it demands distinct, unconventional thinking based on **originality and creativity**, it usually admits various approaches, and it takes time. Note that (ii) also has numbers in it — being numeric does not make a problem routine.

**The novel method** for (ii): **study the problem critically → gather relevant information → identify and implement an effective strategy.**

**A strategy inside it:** **brainstorming** is defensible (a new city, an ill-defined problem, many candidate causes and remedies wanted, and a cross-functional group holds the local knowledge); **means-ends analysis** is equally defensible (a stated target — half the failures — broken into sub-problems each solved with the best possible approach). Either earns the mark if justified.

**Why brainstorming and heuristics are not interchangeable.** Brainstorming is the only **group-focused** strategy and the only one that forbids evaluation while it runs — criticism is avoided, as many ideas as possible are gathered, and other people's ideas are fine-tuned — so it is what you use when you do not yet know the candidate solutions. Heuristics does the opposite: a decision is made **without stopping to think about the next course of action**, saving time and energy at the cost of rationality, and it is appropriate only where a **sub-optimal** solution is acceptable — which a half-the-failures target in an unknown city is not.

**33.** *Concept: merge sort as divide and conquer, its two conditions, and data mining vs hypothesis testing.* [Week 3]

(a) **Split:** 7, 2, 9, 4, 6 → `[7, 2]` and `[9, 4, 6]` → `[7]`, `[2]` and `[9]`, `[4, 6]` → `[4]`, `[6]`.
**Merge, taking the smaller head each time** (ascending): `[7]` + `[2]` → `[2, 7]`; `[4]` + `[6]` → `[4, 6]`; `[9]` + `[4, 6]` → 9 vs 4 → 4, 9 vs 6 → 6, then 9 → `[4, 6, 9]`.
**Final merge** of `[2, 7]` with `[4, 6, 9]`: 2 vs 4 → 2; 7 vs 4 → 4; 7 vs 6 → 6; 7 vs 9 → 7; then 9. Result: **`[2, 4, 6, 7, 9]`**. The order is produced **inside the merge** by which head is taken, not by a final reversal.

(b) The two conditions: the smaller parts must genuinely be **simpler than the complex whole**, and **combining the sub-solutions must be less complicated than solving the original problem directly**. If either fails, splitting buys nothing and merely adds work.

(c) The first team is doing **data mining** — extracting valuable information from a large data set through **unnoticed patterns** and underlying relationships, so as to inform decisions or predict trends. The second is doing **hypothesis testing** — a **specific statement of prediction** that can be tested and proved right or wrong, with the null hypothesis being that callbacks within 24 hours make no difference. **The distinction: discovery versus verification** — data mining starts from gathered data with no stated prediction and lets the question emerge; hypothesis testing starts from the stated prediction and asks whether the evidence lets you reject the null.

**34.** *Concept: high-level algorithm vs refinement; the bases of refinement; robustness vs correctness.* [Week 4]

**(i) is refinement.** Stepwise refinement provides **more detail about an existing high-level step** — step 2 still does what it did, it is simply now specified well enough to implement. The plan is unchanged; only its resolution has increased.

**(ii) is not refinement.** It adds a **new stage to the plan** rather than detail to a step: the algorithm now does something it did not do before, so this is a change to the Step 3 high-level algorithm, not Step 4 work. The course's own meeting example makes the same point — refining "find common empty spaces" added detail to that one step and did not alter the plan.

**Refinement is based on:** **who will implement the algorithm**, **how much knowledge that person has**, and **the computer specifications**. (Do not substitute the problem-analysis checklist or the two review questions here — that is the standard slip.)

**Robustness vs correctness.** **Correctness** means the algorithm produces the right result. **Robustness** means the solution to the problem is **clearly defined**, so the algorithm still behaves sensibly at the edges — no applications submitted, every application tied on marks. An algorithm can be perfectly correct on ordinary input and not yet robust.

**35.** *Concept: sentinel-controlled loop, dry run, time complexity, growth rate, worst case.* [Week 4]

```
START
    count <- 0
    above <- 0
    PROMPT "Enter a number, or 0 to finish"
    INPUT num
    WHILE num <> 0 DO
        count <- count + 1
        IF num > 100 THEN
            above <- above + 1
        ENDIF
        PROMPT "Enter a number, or 0 to finish"
        INPUT num
    ENDWHILE
    OUTPUT above, " of ", count, " numbers were above 100"
STOP
```
The second `INPUT` sits at the **bottom** of the body so the sentinel is neither counted nor compared, and the loop is pre-test so entering 0 first exits with `above = 0` rather than counting the sentinel.

**Dry run** with 120, 45, 300, 100, 0:

| Pass | num at test | `num <> 0`? | count after | `num > 100`? | above after |
|---|---|---|---|---|---|
| — | — | — | 0 (initialised) | — | 0 (initialised) |
| 1 | 120 | YES | 1 | YES | 1 |
| 2 | 45 | YES | 2 | NO | 1 |
| 3 | 300 | YES | 3 | YES | 2 |
| 4 | 100 | YES | 4 | NO (100 is not > 100) | 2 |
| — | 0 | NO | 4 | — | 2 |

Output: **2 of 4 numbers were above 100.** Note 100 itself does not count — "above 100" is `> 100`, the same boundary care as the pass mark.

**Time complexity: O(n)** in the number of values entered. The course's rule: a loop whose **loop variable is incremented or decremented by a constant amount** is O(n); there is no nesting, no recursion and no division of the loop variable.

**Growth-rate order (slowest-growing first): C, log N, N log N, N², 2ᴺ.** (The course's full scale is C · Log N · Log² N · N · N log N · N² · N³ · 2ᴺ.)

**Worst vs average case:** the worst case is the **maximum** time for an input of size n, so it bounds every input and can be promised to a user; the average case is only the time on a **typical** input of size n, and a good average says nothing about how bad the bad inputs get.

**36.** *Concept: algorithm vs representation vs program; the translator chain; language independence and complexity.* [Weeks 1 and 4]

**No new algorithm comes into existence at any of those points.** Numbered English steps, pseudocode and a flowchart are three **representations of the same algorithm** — the algorithm is the ordered, unambiguous, complete procedure itself; pseudocode is its **textual** representation and a flowchart its **graphical** one, and choosing a different representation never changes the logic. Coding it in Java does not create a new algorithm either: it creates a **program** — the set of instructions describing the steps the computer has to follow. The course's ordering is that **algorithms are plans, designed by people, that must be converted into a computer program**, and the **computer is only a tool used to carry out the plan**. (A new algorithm would exist only if the steps or their order changed.)

**The translator chain.** A **compiler** takes a **high-level language** and produces **assembly language**. An **assembler** takes **assembly language** and produces **machine code**. An **interpreter** takes a **high-level language** and produces **machine code directly**, with no assembly stage. Only machine code is understood by the computer.

**Re-writing the Java program in C does not change the big-O complexity.** Algorithms are **language-independent**: changing the language changes the program, never the algorithm, and big O describes the **growth rate** of the algorithm's cost with input size, not the constant factor a particular language or machine contributes. C may well run faster by some constant, but a quadratic algorithm stays O(n²) — the same reason `N²` is judged less efficient than `1000N` despite the constant.

## What to revise

| Week | Topic | Questions | If several in this row went wrong, re-read |
|---|---|---|---|
| **Week 1** | Problem Solving — problem types, the four steps, algorithms and their representations, the translator chain, errors, documentation | **1, 2, 3, 4, 5, 6, 7, 31, 36 (first and second parts)** | The four computational problem types with their exact defining phrases, and the grade worked example including the `Grade > 44` boundary. Then the four parts of carrying out the plan, the compiler/assembler/interpreter chain, syntax vs logical vs run-time, debugging vs testing, refactoring, and user vs programmer documentation. |
| **Week 2** | Problem-Solving Strategies; Understanding Problems and Problem Types | **8, 9, 10, 11, 12, 13, 14, 15, 32** | The six-strategy table — definition, what it suits, example — with the pairs that are examined against each other: trial and error vs heuristics, means-ends vs abstraction, abstraction vs analogy. Then routine vs non-routine and the novel method, ill-defined vs well-defined, the UTM and Turing's two contributions, the substitution-puzzle derivation, and unsolvable vs undecidable. |
| **Week 3** | Computational Approaches I and II; divide and conquer, greedy | **16, 17, 18, 19, 20, 21, 22, 23, 33** | The six Lesson I methods as a list, then the five Lesson II approaches, then the pairs: pipelining vs divide and conquer, divide and conquer vs dynamic programming, greedy vs brute force vs backtracking, data mining vs hypothesis testing, visualisation vs problem recognition. Keep the three gating factors and problem recognition's three factors apart. Re-run the merge-sort trace, the padlock count, the activity selection and the p-value rule. |
| **Week 4** | Algorithm Concepts I and II — development, representation, analysis, complexity | **24, 25, 26, 27, 28, 29, 30, 34, 35, 36 (third part)** | Algorithm vs program vs computer; the five characteristics against the seven design considerations; the five development steps and which checklist belongs to which; sequence, selection and repetition; the flowchart symbols. Then re-do both worked algorithms with their dry runs, the `WHILE`/`REPEAT`/`FOR` comparison, priori vs posterior, the big-O rules for reading complexity off code, and the growth-rate scale. |

**Coverage.** The 36 questions are spread deliberately evenly: **Week 1 — 9 questions** (1–7, 31, and the first two parts of 36), **Week 2 — 9** (8–15, 32), **Week 3 — 9** (16–23, 33), **Week 4 — 10** (24–30, 34, 35, and the last part of 36, which is shared with Week 1). A weak row in the table is therefore a weak week, not an unlucky question: three or more wrong in any row means re-reading that week's summary in full before the mid-semester exam, starting with its *Commonly confused* table, which is where most of these distractors came from.
