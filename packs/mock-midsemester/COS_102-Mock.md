# COS_102 — Mid-semester Mock (Weeks 1–4)

*Introduction to Problem Solving · Weeks 1-4 · **60 minutes** · closed book · 50 marks total. Sit this in one unbroken sitting — no notes, no pausing the clock, no checking anything — and mark it only at the end.*

---

## Section A — Multiple choice (25 questions, 1 mark each)

**1.** A problem type whose solution is described as "the best possible solution is accepted as the solution" is a:

A. Decision problem
B. Search problem
C. Optimization problem
D. Counting problem

**2.** A student says: "I have drawn the flowchart, so I now have a second algorithm alongside the pseudocode one." The correct response is:

A. Correct — a flowchart and pseudocode express different algorithms, because their symbols and rules differ
B. Wrong — there is one algorithm; the pseudocode is its textual representation and the flowchart its graphical representation
C. Wrong — the flowchart is the algorithm itself, and the pseudocode is only a written summary of it
D. Wrong — both are programs, since either can be executed once its symbols have been compiled

**3.** A cyclist has a three-dial combination lock. She knows the code is one of exactly four combinations written on a card whose order she has forgotten, so she enters each of the four in turn until the lock opens. This is:

A. Heuristics, because she saves time and energy by not stopping to think about the next course of action
B. Trial and error, because approaches are implemented one after another until a solution is arrived at, and the number of possible solutions is few
C. Brute force, because she relies solely on computing power instead of improving efficiency with advanced techniques
D. Means-ends analysis, because she works backwards from the stated end of opening the lock

**4.** A department's pass mark is 50. A programmer writes `IF Score > 50 THEN PRINT "PASS" ELSE PRINT "FAIL"`. A student scoring exactly 50 is printed FAIL. This is:

A. A syntax error; the condition should be written `Score >= 50`
B. A logical error; the condition should be `Score > 49`
C. A run-time error; the program fails when it reaches the boundary value
D. A logical error; the condition should be `Score > 51`

**5.** A team is deciding whether a scheduling problem can be tackled computationally at all. They confirm the current situation, the end goal, how to reach it and the likely obstacles; they check whether the required calculations are possible given processing times and capacity; and they establish the data types and storage capacity needed. A member adds: "and we must also check whether it reduces to a more general case." The correct position is:

A. He is right — that is the fourth factor to consider before computational approaches can be used
B. He is right, but only for problems seeking a minimum or a maximum
C. He is describing a move belonging to a method used *within* the solving process to ensure the solution deals with the root cause; the three factors are the ones already checked, and only after all three are considered can the decision be made
D. He is describing data mining, which extracts unnoticed patterns and relationships from large data sets

**6.** A team rewrites one 400-line function as six smaller functions. Every test input produces exactly the same output as before. This is:

A. Debugging, because the code has been cleaned of its errors
B. Refactoring, because structure, design and efficiency were improved without changing the function of the solution
C. Testing, because every test input was re-run afterwards
D. Program documentation, because the technical details were made clearer for maintenance

**7.** An examinations committee asks: "Given any student's submitted program, will our marking script that runs it always finish?" This is:

A. A non-routine problem, because no standard method exists but a novel method could be developed for it
B. An undecidable problem, because no algorithm can return an accurate true/false for every input value
C. A search problem, because it looks for the programs that have a particular property
D. An ill-defined problem, because neither the goal nor the solution path is clear

**8.** A designer defends her algorithm by saying: "its real merit is that another designer can pick it up and update and upgrade it." The quality she is naming is:

A. Maintainability
B. Extensibility
C. Modularity
D. Robustness

**9.** Consider this algorithm:

```
1  max   <- 0
2  count <- 0
3  Enter n
4  If n = -1 then go to step 8
5  If n > max then max <- n
6  count <- count + 1
7  Go to step 3
8  Print max, count
9  Stop
```

It is run on the input stream **12, 7, 25, 25, 4, -1, 30**. The exact printed output is:

A. 25 and 5
B. 25 and 6
C. 30 and 6
D. 25 and 4

**10.** Consider two payroll designs. **Design 1:** process P1 reads hours and computes gross pay; P2 takes that gross and computes the tax; P3 takes gross and tax and computes net pay — each stage run by a different process, each result feeding the next. **Design 2:** 10,000 employees are split into four blocks of 2,500, each block's total is computed independently on a separate machine, and the four totals are then added. The correct labelling is:

A. Design 1 is divide and conquer; Design 2 is pipelining
B. Design 1 is pipelining; Design 2 is divide and conquer
C. Both are pipelining, since both split one task into parts
D. Both are divide and conquer, since in both cases the parts are recombined at the end

**11.** A project manager states her target — a working prototype in 90 days — lists the obstacles she expects to meet, then splits the work into design, build and test, choosing the best possible approach for each until the target is reached. An engineer reading the plan calls it divide and conquer. The correct assessment is:

A. It is divide and conquer, because the problem is split into smaller parts whose solutions combine into the solution of the whole
B. It is means-ends analysis: the strategy is determined beforehand from the issues expected while working from a stated target, and each smaller problem is solved with the best possible approach
C. It is abstraction, because the unneeded attributes of the project have been filtered out to leave a model
D. It is brainstorming, because several possible approaches were considered before one was chosen

**12.** Three requests are sent to the same accounts database: (i) "Is any invoice unpaid?" (ii) "Which invoices are unpaid?" (iii) "How many invoices are unpaid?" In order, these are:

A. Search, decision, counting
B. Decision, search, counting
C. Decision, counting, search
D. Decision, search, optimization

**13.** Consider this algorithm, run with `n = 20`:

```
1  i     <- 1
2  total <- 0
3  While i <= n do
4      total <- total + i
5      i     <- i * 3
6  Print total
```

The printed value, and the complexity the course's loop rules assign to the loop, are:

A. 13, and O(log n)
B. 13, and O(n)
C. 40, and O(log n)
D. 210, and O(n)

**14.** A route planner builds a delivery round by always driving to the nearest customer not yet visited. On one city map this happens to give the shortest possible total route; on another map it does not. The correct statement is:

A. It is not a greedy algorithm, since greedy algorithms always produce the optimal solution
B. It is greedy; greedy might not always produce an optimal solution although it does for many problems, and where it succeeds its solutions are always simple and highly efficient
C. It is dynamic programming, because each nearest-customer decision is saved and reused later
D. It is brute force, because every remaining customer is examined at each step

**15.** A tester runs a program on 40 inputs and records that inputs 12 and 31 give the wrong total. A developer then steps through the code and traces the fault to a wrong loop bound. In the course's terms:

A. Both activities are debugging, since both are concerned with errors
B. The first is testing — verifying that the program works as expected — and the second is debugging, which finds errors so they can be removed to avoid program failure
C. The first is debugging and the second is testing
D. The first is performance testing and the second is refactoring

**16.** A designer building a hospital's patient-flow system studies how an airport moves departing passengers — check-in, security, gate — and reuses that staged structure, because the underlying principles of queueing and staged release are the same in both. This is:

A. Abstraction, because the irrelevant details of the hospital have been removed to leave a model
B. Analogy, because previously existing understanding of a similar system is used and the underlying principles are the same
C. Brainstorming, because two different domains were brought together to generate ideas
D. Heuristics, because the designer decided without stopping to think about the next course of action

**17.** A client asks for "a report of our best customers". The programmer delivers "customers with the most orders"; the client meant "customers with the highest total spend". The step that failed, and the named issue, are:

A. Problem analysis — the location of the data was never established
B. Problem description — an ambiguous description
C. High-level algorithm development — too much minor detail was fixed too early
D. Algorithm review — the algorithm solves only one particular problem

**18.** Consider this algorithm:

```
1  c <- 0
2  For i <- 1 to 4 do
3      For j <- 1 to i do
4          c <- c + 1
5  Print c
```

The printed value, and the complexity rule that applies to this code shape, are:

A. 10 — and nested loops are O(n^c), the complexity being equal to the number of times the innermost statement is executed
B. 16 — and nested loops are O(n^c), the complexity being equal to the number of times the innermost statement is executed
C. 10 — and the code is O(log n), since the inner loop's bound is not constant
D. 4 — and the code is O(n), since only the outer loop determines the growth rate

**19.** Consider this:

```
1  START
2  INPUT a, b
3  IF a > b THEN
4     PRINT a
5  ELSE
6     PRINT b
7  ENDIF
8  STOP
```

Which statement is correct?

A. This is a flowchart, because it sets out the sequence of operations, and lines 3–7 are repetition
B. This is pseudocode — the textual representation of the algorithm, which cannot be compiled or executed — and lines 3–7 are selection
C. This is source code in a high-level language, and lines 3–7 are selection; it must be converted to assembly before it will run
D. This is pseudocode, and lines 3–7 are sequence, since they are carried out in the order written

**20.** Two students compute Fibonacci(40). Student X writes a routine that computes F(n) by calling itself on F(n−1) and F(n−2), so that F(35) is recomputed many times over. Student Y stores each F(k) the first time it is worked out and looks it up on every later occasion. The correct classification is:

A. X is using dynamic programming and Y divide and conquer
B. Both are dynamic programming, since both break the problem into sub-problems
C. Y is using dynamic programming, whose defining move is saving the sub-problems' solutions so the result never has to be computed again; X splits and solves without saving
D. Y is using a greedy algorithm, since looking up the stored value is the best possible choice at each stage

**21.** An electrician must find which one of six fuses in a box has blown, and tests them one at a time until she finds it. Separately, a cracking program tries all 10⁸ possible 8-digit PINs in numerical order. The correct pairing is:

A. Both are brute force, since both work through the possibilities in turn
B. The first is trial and error — the number of possible solutions is few; the second is brute force — going through all possible choices, relying solely on computing power, simple and consistent but very slow
C. The first is brute force; the second is trial and error, since a person could equally try the PINs by hand
D. Both are trial and error, since in each case the number of possible solutions is finite

**22.** Consider this algorithm:

```
1  sum   <- 0
2  count <- 0
3  Enter n
4  sum   <- sum + n
5  If count < 4 then count <- count + 1 and go to step 3
6  Print sum, count
7  Stop
```

It is run on the input stream **5, 5, 5, 5, 5, 5, 5**. The printed output, and the number of values actually read, are:

A. 25 and 4, with five values read
B. 20 and 4, with four values read
C. 25 and 5, with five values read
D. 30 and 5, with six values read

**23.** A team fixes a significance level of 0.01 in advance and the test returns a p-value of 0.004. The correct conclusion is:

A. Accept the null hypothesis, because 0.004 is very close to zero and so supports it
B. Reject the null hypothesis, because the p-value is less than or equal to the significance level — but this does not prove the effect exists; a 1% risk of rejecting a true null was accepted in advance
C. Reject the null hypothesis, and conclude that the effect has now been proved to exist
D. No conclusion can be drawn until the significance level is lowered below the p-value

**24.** Algorithm A runs in 1000N steps, Algorithm B in N² steps. A developer times both at N = 50, finds B about twenty times faster, and concludes that B should be shipped. The correct response is:

A. He is right — measured running time on real input is the decisive evidence
B. He is wrong — the most important factor when comparing two algorithms is the growth rate, which is what Big O describes; the two meet at N = 1000 and beyond that N² grows without limit relative to 1000N
C. He is wrong — analysis carried out before implementation is never valid, so only measurement after implementation counts
D. He is right, provided the program is afterwards refactored so that its function does not change

**25.** A programmer receives this from a client: *"Build me something that tells me whether any of my delivery drivers will ever get stuck in an infinite re-routing loop, for any route file I give it."* The response that matches the course is:

A. Classify it as a routine problem and select the most appropriate existing algorithm to apply
B. Recognise it as an instance of the halting problem — undecidable, since no algorithm returns an accurate true/false for every input value — and say so, rather than treating the gap as an ambiguity in the client's description to be cleared up
C. Return to the description step and ask the client to remove the ambiguity, after which a high-level algorithm can be developed
D. Apply brute force: run every route file through to completion and record which ones loop

---

## Section B — Structured questions (5 questions, 5 marks each)

**26.** A module is marked out of 100 on the average of three assessment scores.

(a) Write pseudocode that reads three scores S1, S2, S3, computes their average, and prints `"DISTINCTION"` if the average is 70 or more, `"PASS"` if it is 45 or more but below 70, and `"FAIL"` otherwise. Use `START` / `STOP` and the `IF ... THEN ... ELSE ... ENDIF` form. **[3]**

(b) A colleague writes the first test as `IF Avg > 70`. Name the error type in the course's three-way classification, state exactly what a student with an average of 70 would be told, and give the corrected condition. **[2]**

---

**27.** A small firm must choose one of exactly four courier companies. Each can be trialled for one week at negligible cost.

(a) Name the strategy whose stated suitability condition this situation satisfies, quote that condition, and explain in one sentence why heuristics is not the answer here. **[2]**

(b) The owner instead says: "just use the one whose van I saw this morning — I have no time for this." Name the strategy he has used, state the condition the course attaches to its use, and state its stated cost. **[2]**

(c) State whether choosing a courier by trialling the four is a routine or a non-routine problem, giving the course's reason. **[1]**

---

**28.** A student submits this account of a delivery-route optimiser:

> "I used a greedy algorithm, always choosing the nearest unvisited stop. Greedy guarantees an optimal route provided a solution to the problem exists. To speed it up I saved each sub-route's result so it never has to be computed again — that saving is what makes greedy optimal. And if greedy had failed I would have used divide and conquer, which always works, because splitting a problem up is always cheaper than solving it whole."

Identify every claim in this paragraph that is wrong, give the course's correct statement in each case, and name the approach that each misplaced claim actually belongs to or the condition it leaves out. **[5]**

---

**29.** Consider this algorithm:

```
1   max   <- 0
2   count <- 0
3   Enter n
4   If n < 0 then go to step 8
5   If n > max then max <- n
6   count <- count + 1
7   Go to step 3
8   Print max
9   Print count
10  Stop
```

(a) Trace it on the input stream **3, 11, 11, 2, 0, −4, 20**, giving the value of `max` and `count` after each pass and the exact printed output. State how many values are actually read. **[2]**

(b) Identify which numbered lines are sequence, which are selection, and which lines together form the repetition. **[1]**

(c) Give the complexity the course's rules assign to each of the following, with the rule in each case: (i) a loop whose variable changes by `i <- i + 5`; (ii) a loop whose variable changes by `i <- i / 4`; (iii) two nested loops each running n times. **[2]**

---

**30.** A campus IT team must connect twelve buildings with fibre at the least total cost.

(a) The team lead states the target — the whole campus connected inside the term's budget — lists the obstacles she expects, then splits the job into survey, costing, cabling and testing, choosing the best possible approach for each sub-problem until the target is met. Name the strategy this is, and explain in one sentence why it is not abstraction. **[2]**

(b) An engineer then says: "forget the buildings, the budget and the cable brands — this is a weighted graph, and what we want is its minimum spanning tree." Name the computational method whose move this is, state which of that method's four moves is being used, and explain why this is a *method* rather than one of the factors weighed before computational approaches can be used at all. **[3]**

---

## Marking scheme

*Each answer carries the week it tests. Add up your losses week by week — a cluster in one week is the week to re-read.*

**1. C** — Optimization problem. *Week 1. Concept: the four computational problem types.* The defining phrase is "the best possible solution is accepted as the solution". Decision returns only YES/NO; search returns the value(s) with the property; counting returns the number of them.

**2. B** — There is one algorithm with two representations. *Week 1. Concept: algorithm vs pseudocode vs flowchart.* The algorithm is the ordered, unambiguous, complete procedure itself; pseudocode is its **textual** representation and the flowchart its **graphical** one. D also fails because pseudocode cannot be compiled or executed.

**3. B** — Trial and error. *Week 2. Concept: trial and error vs heuristics vs brute force.* She actually implements approach after approach until one works, and the number of possible solutions is few — the course's own suitability condition. A is wrong because heuristics decides *without trying anything*. C is the neighbouring approach: brute force is the machine-powered exhaustive search, not a person working through four known candidates.

**4. B** — A logical error; the condition should be `Score > 49`. *Week 1. Concept: the three error types, and the boundary trap.* The program runs perfectly and produces the wrong result, which is exactly a logical error, not a syntax or run-time one. A gives the right fix under the wrong error name, which earns nothing.

**5. C** — It is a move of problem recognition, not a fourth precondition. *Week 3. Concept: the three factors vs problem recognition.* The three factors — clearly defined, computable, data requirements — are weighed before deciding computational approaches apply at all, and only after all three can the decision be made. "Reducing the problem to a more general case" and "grouping it as a specific type" are moves of **problem recognition**, the method that ensures the solution deals with the root cause.

**6. B** — Refactoring. *Week 1. Concept: refactoring vs fixing a bug.* Structure, design and efficiency improve; the function of the solution does not change. Nothing was wrong before, so nothing was debugged.

**7. B** — Undecidable. *Week 2. Concept: undecidable vs non-routine.* This is the halting problem. A is the trap: a non-routine problem lacks a *standard* method but can still be solved by inventing one; an undecidable problem has no method at all, however creative you are.

**8. B** — Extensibility. *Week 4. Concept: the design considerations.* Extensibility is "another designer can update and upgrade it". Maintainability is "easily refactored", modularity is "breakable into smaller steps", robustness is "the solution to the problem is clearly defined".

**9. A** — Prints 25 and 5. *Week 4. Concept: tracing a sentinel-controlled loop.* Passes: n=12 → max 12, count 1; n=7 → max 12, count 2; n=25 → max 25, count 3; n=25 (`25 > 25` is false) → max 25, count 4; n=4 → max 25, count 5; n=−1 → step 4 jumps out before the counter is touched. **Five values are read; the 30 is never entered.** B counts the sentinel, C reads past it, D drops the repeated 25.

**10. B** — Design 1 pipelining, Design 2 divide and conquer. *Week 3. Concept: pipelining vs divide and conquer.* Pipelining makes *different* subtasks in a series, each run by a different process, the result of one feeding the next, with nothing combined at the end. Divide and conquer makes *smaller versions of the same problem*, solved independently and then combined.

**11. B** — Means-ends analysis. *Week 2 (needs Week 3 to reject A). Concept: means-ends analysis vs divide and conquer.* Two signatures give it away: the strategy is settled **beforehand** from the issues expected, and there is a **stated target** with a gap to close. Divide and conquer is a computational method producing smaller instances of the same problem, with its own effectiveness conditions; it has no notion of anticipating obstacles.

**12. B** — Decision, search, counting. *Week 1. Concept: telling the four problem types apart on the wording.* "Is any…" is YES/NO; "which…" returns the values with the property; "how many…" returns their number.

**13. A** — Prints 13; the loop is O(log n). *Week 4. Concept: tracing a multiplicative loop plus the loop rules.* i=1, total 1, i→3; i=3, total 4, i→9; i=9, total 13, i→27; 27 ≤ 20 fails. The loop variable is **multiplied by a constant amount**, so the course's rule gives O(log n). C adds the 27 that never entered the body; D is what you get by misreading step 5 as `i <- i + 1` (1+2+…+20 = 210).

**14. B** — Greedy, which might not always produce an optimal solution. *Week 3. Concept: greedy's caveat.* Attaching a guarantee to greedy is the week's most punished error. D is the sharp distractor: examining every remaining customer *at one stage* is not the same as brute force examining every possible whole route.

**15. B** — Testing, then debugging. *Week 1. Concept: debugging vs testing.* Testing verifies that the program works as expected; debugging finds errors so they can be removed to avoid program failure. Testing reveals the fault, debugging removes it. D imports the wrong week's vocabulary.

**16. B** — Analogy. *Week 2. Concept: abstraction vs analogy.* Analogy imports understanding from a **different, already-understood** system, and is valid only because the **underlying principles** are the same. Abstraction would have simplified the *hospital* by deleting irrelevant detail; no second system would appear.

**17. B** — Problem description; an ambiguous description. *Week 4. Concept: Step 1 vs Step 2.* "Best customers" is unquantified — the classic ambiguity, arising because two parties are involved, the client finding a solution and the programmer providing it. Not knowing where the data lives would have been the Step 2 failure; "can the complexity be reduced?" is a Step 5 question.

**18. A** — Prints 10; nested loops are O(n^c), the complexity equal to the number of times the innermost statement is executed. *Week 4. Concept: nested-loop counting and its Big O rule.* The inner loop runs 1, 2, 3 then 4 times: 1+2+3+4 = 10. B is the error of assuming the inner loop always runs the outer loop's full count (4 × 4 = 16).

**19. B** — Pseudocode; lines 3–7 are selection; it cannot be compiled or executed. *Week 1 (with Week 4). Concept: pseudocode as textual representation + the selection construct.* It looks like a real program, which is exactly why C tempts, but pseudocode is not written in any language and is never compiled. Selection is `if condition then activity 1 else activity 2`; repetition would need a `while`.

**20. C** — Y is dynamic programming; X splits and solves without saving. *Week 3. Concept: divide and conquer vs dynamic programming.* The saving of sub-problem solutions so the result never has to be computed again **is** the whole difference, and it only pays where sub-problems repeat — as F(35) does here. Fibonacci is the course's own dynamic-programming example.

**21. B** — Trial and error, then brute force. *Week 2 (needs Week 3 for the second half). Concept: trial and error vs brute force.* Trial and error is the strategy for where the number of possible solutions is **few** — six fuses. Brute force goes through **all** possible choices, relying solely on computing power instead of improving efficiency with advanced techniques: simple and consistent but very slow.

**22. A** — Prints 25 and 4; five values are read. *Week 4. Concept: the off-by-one created by where the test sits.* Here the test is checked **before** the increment, unlike the week's counter algorithm. Passes: sum 5 (count 0→1); sum 10 (1→2); sum 15 (2→3); sum 20 (3→4); the fifth number is read and added, giving sum 25, then `4 < 4` is false and the loop ends with count still 4. C is the answer you get by assuming the counter and the number of reads must agree.

**23. B** — Reject the null, without claiming proof. *Week 3. Concept: p-value against significance level, and what the result does not prove.* The rule is p ≤ significance level → reject; 0.004 ≤ 0.01. But the significance level *is* the probability of rejecting a true null, so a 1% risk was accepted before the data were seen; the outcome is a statement about strength of evidence, never a proof — which is C's error.

**24. B** — Growth rate is the deciding factor, and Big O describes it. *Week 4 (D reaches into Week 1). Concept: growth rate vs raw speed.* At N = 50, 1000N = 50,000 and N² = 2,500, so B does look far better; the two meet at N = 1000 (1,000,000 each) and after that N² grows without limit relative to 1000N. Faster hardware or a smaller test changes the constant, never the growth rate. C misstates priori analysis, which is legitimate — it is simply carried out before implementation in a particular language and does not directly affect that implementation.

**25. B** — Name it as the halting problem and say the thing cannot be built. *Week 2 (with Week 4 for the rejected Step 1 move, Week 3 for D). Concept: undecidability meeting the development process.* The description is neither ambiguous nor incomplete — it is perfectly clear and simply asks for the impossible, so C's Step 1 clarification cannot help. D's brute force cannot help either: running a looping file "to completion" is precisely what never terminates.

**26.** *Weeks 1. Concept: pseudocode as textual representation; the boundary condition; logical errors.* **[5 marks]**

(a) **[3 marks]**

```
START
  INPUT S1, S2, S3
  Avg <- (S1 + S2 + S3) / 3
  IF Avg >= 70 THEN
     PRINT "DISTINCTION"
  ELSE
     IF Avg >= 45 THEN
        PRINT "PASS"
     ELSE
        PRINT "FAIL"
     ENDIF
  ENDIF
STOP
```

- 1 mark: `START`/`STOP` present, the three scores taken as input, and the average computed as the sum divided by 3.
- 1 mark: a correctly nested three-way selection, so that exactly one of the three messages is printed for any input.
- 1 mark: **both** boundaries correct — `>= 70` (equivalently `> 69`) and `>= 45` (equivalently `> 44`). Lose this mark for either `> 70` or `> 45`.

(b) **[2 marks]**

- 1 mark: a **logical error** — the program obeys the language's rules and runs to completion, but produces the wrong result. (Not syntax; not run-time.)
- 1 mark: a student averaging exactly 70 is told `"PASS"` instead of `"DISTINCTION"`, and the condition must be `Avg >= 70` (or `Avg > 69`).

**27.** *Week 2. Concept: trial and error vs heuristics; routine vs non-routine.* **[5 marks]**

(a) **[2 marks]** — 1 mark: **trial and error**, whose condition is that it is useful **where the number of possible solutions is few**, and time-consuming and inefficient where many exist; four couriers is few. 1 mark: heuristics is wrong because heuristics never *tries* the options — it makes the decision **without stopping to think about the next course of action**, saving time and energy, and is for when a **sub-optimal** solution is acceptable; here each candidate is actually implemented and judged.

(b) **[2 marks]** — 1 mark: **heuristics**. 1 mark: the condition is that a **sub-optimal solution is acceptable** (it obtains a solution while saving time and energy); the stated cost is that its **solutions are not always rational**.

(c) **[1 mark]** — **Non-routine**: a routine problem is one solvable with an **arithmetic operation**, where the whole task is identifying the most appropriate algorithm to apply. No arithmetic operation settles which courier is best, and there is no standard method, so an approach has to be developed rather than selected.

**28.** *Week 3. Concept: greedy's caveat vs dynamic programming's guarantee; the effectiveness conditions of divide and conquer.* **[5 marks — 1 per correction]**

- 1 mark: **"Greedy guarantees an optimal route" is false.** The course states that greedy **might not always produce an optimal solution**, though it does produce one for many problems, and that where it succeeds its solutions are always simple and highly efficient.
- 1 mark: the phrase **"provided a solution to the problem exists, an optimal solution can be found" is dynamic programming's guarantee**, not greedy's — and dynamic programming is used mostly for optimization problems, finding a minimum or a maximum.
- 1 mark: **"saving each sub-route's result so it never has to be computed again" is dynamic programming's defining move**, not part of greedy at all; greedy commits to the locally best choice at each stage and never revisits it. Saving results does not confer optimality on anything.
- 1 mark: **divide and conquer does not "always work".** Its first condition is that the **smaller parts must genuinely be simpler than the complex whole**.
- 1 mark: and its second condition is that **combining the sub-solutions must be less complicated than solving the original problem directly** — the student has this exactly inverted.

**29.** *Week 4. Concept: tracing a sentinel loop; sequence/selection/repetition; the Big O loop rules.* **[5 marks]**

(a) **[2 marks]** — 1 mark for a correct pass-by-pass trace, 1 mark for the exact output and count of reads.

| pass | n | max after step 5 | count after step 6 |
|---|---|---|---|
| — | — | 0 | 0 |
| 1 | 3 | 3 | 1 |
| 2 | 11 | 11 | 2 |
| 3 | 11 (`11 > 11` false) | 11 | 3 |
| 4 | 2 | 11 | 4 |
| 5 | 0 (`0 > 11` false) | 11 | 5 |
| 6 | −4 | step 4 exits to step 8 | 5 |

Printed output: **11** then **5**. **Six values are entered but only five are counted** — the sentinel −4 is read and immediately leaves the loop, and the 20 behind it is never read at all.

(b) **[1 mark]** — **Sequence:** lines 1–3 (and lines 8–10), performed in order with no step skipped. **Selection:** lines 4 and 5, each in the `if condition is true then perform activity` form. **Repetition:** lines 3–7 taken together, since line 7 returns control to line 3 and the same steps are executed repeatedly. All three must be right for the mark.

(c) **[2 marks]** — 1 mark for (i) and (ii) together: (i) **O(n)** — the loop variable is **incremented by a constant amount** (note `i <- i + 5` is O(n), not O(n/5); Big O carries no constants); (ii) **O(log n)** — the loop variable is **divided by a constant amount**. 1 mark for (iii): **O(n^c)**, here O(n²) — for nested loops the complexity is **equal to the number of times the innermost statement is executed**.

**30.** *Week 2 in (a), Week 3 in (b). Concept: means-ends analysis vs abstraction; problem recognition vs the three preconditions.* **[5 marks]**

(a) **[2 marks]** — 1 mark: **means-ends analysis** — the solution is thought about beforehand and the best strategy determined from the issues expected, working from a stated target, then the problem is broken into smaller problems each solved with the best possible approach until the main problem is solved. 1 mark: it is not abstraction because abstraction **throws material away** — the unneeded attributes are removed to leave a **model** — whereas means-ends analysis **keeps every sub-problem and solves each one**. Reduction by discarding versus reduction by solving.

(b) **[3 marks]** — 1 mark: **problem recognition**. 1 mark: the move is **reducing the problem to a more general case** — this is the course's own example, optimising a building's power-cable infrastructure reducing to finding the **minimum spanning tree** of a graph. 1 mark: problem recognition is a **method used within the solving process** to ensure the proposed solution deals with the **root cause**, and it adds moves the precondition does not have — typing the problem and generalising it; "the problem must be clearly defined" is one of the **three factors weighed beforehand**, alongside computability and data requirements, in deciding whether computational approaches can be used at all. *(Noting that the engineer's stripping-away also has the flavour of abstraction is a fair observation and costs nothing, but the named method for the minimum-spanning-tree reduction is problem recognition.)*

---

## How to read your score

**Marks by week:** Week 1 — 12; Week 2 — 13; Week 3 — 13; Week 4 — 12. Total **50**. Score each week separately before looking at the overall figure; the overall figure hides the week that is about to cost you.

**40–50 overall, and 8+ in every week.** Solid. Spend the remaining time on the two things this paper punishes hardest wherever you dropped them: the greedy/dynamic-programming guarantee (Week 3) and where the counter sits relative to the test in a loop (Week 4).

**30–39 overall.** The concepts are there but the near-neighbours are not separated yet. Work through the "Commonly confused" table of your two weakest weeks and write out each pair from memory before checking.

**20–29 overall.** Re-read the weakest two weeks in full before attempting more questions. Questions answered from a vague memory of the topic score nothing on this course — it is examined on exact wording.

**Under 20 overall.** Restart at Week 1 and work forward. Weeks 3 and 4 assume Week 1's vocabulary (algorithm, pseudocode, decomposition) and Week 2's classification of problems; patching the later weeks first will not hold.

**If your loss is concentrated in one week:**

- **Week 1** — the four problem types by their exact defining phrase, the four problem-solving steps in order, the translator chain, the three error types, debugging vs testing, refactoring, and the two documentation kinds.
- **Week 2** — the six strategies with their suitability conditions (especially trial and error's "few possible solutions" and heuristics' "sub-optimal is acceptable"), routine vs non-routine, and unsolvable vs undecidable.
- **Week 3** — the three preconditions vs the two method lists (six in Lesson I, five in Lesson II), the divide-and-conquer conditions, greedy's caveat against dynamic programming's guarantee, and the p-value rule.
- **Week 4** — the five development steps and what fails at each, sequence/selection/repetition, characteristics vs design considerations, priori vs posterior analysis, and the Big O loop rules. Trace every pseudocode fragment on paper; do not do it in your head.
