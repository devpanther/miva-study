# COS_102 — Mid-semester Mock

*Introduction to Problem Solving · Weeks 1–4 · 75 minutes · notes closed · 36 marks*

**Instructions.** 75 minutes, notes closed — Section A is 30 questions at 1 mark each and Section B is 6 questions at 1 mark each, for 36 marks; do not look at the Answers until the time is up.
Mark Section B honestly against the model answers: a part-right answer with a wrong final value, or a right value reached by a method the model answer does not use, scores 0 — write down which week each lost mark came from and take that row of the revision table.

---

## Section A — Multiple choice (30)

**1.** A university registry runs the query "How many students in COS_102 scored above 45?". Which type of computational problem is this?

a) Decision problem   b) Search problem   c) Counting problem   d) Optimization problem

**2.** Which statement correctly describes the compiler's place in the translator chain?

a) It converts assembly language into machine code.
b) It converts a high-level language into assembly language.
c) It converts a high-level language directly into machine code.
d) It converts machine code back into a high-level language.

**3.** Which is the THIRD of the four steps to problem-solving?

a) Understand the problem
b) Create a step-by-step solution plan
c) Carry out the solution plan
d) Evaluate and refactor the solution

**4.** Which statement about pseudocode and flowcharts is correct?

a) Pseudocode is the textual representation of an algorithm and cannot be compiled or executed.
b) Pseudocode is the graphical representation of an algorithm and is compiled before execution.
c) A flowchart is the textual representation of an algorithm and pseudocode is the graphical one.
d) A flowchart is a low-level-language version of the algorithm that the computer executes directly.

**5.** A working program is rewritten so that it uses one loop instead of three. Every input still produces exactly the same output, but the code is shorter and runs faster. What has the programmer done?

a) Debugged the program   b) Tested the program   c) Fixed a logical error   d) Refactored the solution

**6.** The pseudocode below is meant to print the average of five grades. It compiles, runs to completion, and never stops with an error — but it always prints a value that is too large.

```
START
  INPUT G1, G2, G3, G4, G5
  Average <- (G1 + G2 + G3 + G4 + G5) / 4
  PRINT Average
STOP
```

Which type of error is this?

a) Syntax error   b) Logical error   c) Run-time error   d) Compilation error

**7.** The pass mark for a course is 45 and the final grade is the average of five grades. A student writes:

```
IF Grade > 45 THEN
   PRINT "PASS"
ELSE
   PRINT "FAIL"
ENDIF
```

What is wrong, and what is the correct test?

a) A student scoring exactly 45 is wrongly failed; the test should be `Grade > 44`.
b) A student scoring exactly 45 is wrongly passed; the test should be `Grade > 46`.
c) Nothing is wrong; `Grade > 45` correctly implements a pass mark of 45.
d) The grade should be compared with the sum of the five grades rather than their average.

**8.** An installation guide telling the end user how to set up and run the finished program is:

a) Programmer documentation, because a programmer wrote it
b) Source code produced by the compiler during translation
c) Part of the debugging record kept during testing
d) User documentation

**9.** Which of the following is NOT true of the trial-and-error problem-solving strategy?

a) It is useful in instances where the number of possible solutions to the problem is few.
b) It is very efficient in instances where the number of possible solutions to the problem is not few.
c) It involves implementing various approaches until a solution to the problem is arrived at.
d) It becomes time-consuming when many possible solutions to the problem exist.

**10.** The heuristics strategy is recommended for situations where:

a) A sub-optimal solution to the problem is acceptable
b) The optimal solution must be guaranteed
c) A group must be convened to generate ideas without criticism
d) Every possible option must be examined before a decision is made

**11.** A designer drawing the London Underground map removes the true distances and geography of the city and keeps only the connections between stations. Which strategy is this?

a) Analogy   b) Means-ends analysis   c) Abstraction   d) Brainstorming

**12.** Which of the following is NOT one of the rules of brainstorming?

a) Avoid criticism of ideas
b) Gather as many ideas as possible
c) Other people's ideas can be fine-tuned
d) Each idea is evaluated and scored as soon as it is offered

**13.** "Provide an approximate number of hairs on your head." How is this problem classified, and why?

a) Non-routine, because it has no standard method for solving it
b) Routine, because the expected answer is a number
c) Routine, because it can be solved with a single arithmetic operation
d) Undecidable, because no algorithm can return true or false for it

**14.** What does the course mean when it calls a problem "unsolvable"?

a) No solution to the problem can possibly ever be found by anyone.
b) The problem has so many possible solutions that they cannot all be tried in reasonable time.
c) There is no systematic method — no algorithm — for deciding the problem.
d) The problem's inputs, limitations and output conditions are not well defined.

**15.** Determining whether a running program will eventually halt or run for ever is the course's named example of:

a) A non-routine problem   b) An undecidable problem   c) An ill-defined problem   d) An optimization problem

**16.** Which of the following describes means-ends analysis?

a) Bringing a group together to produce various solutions spontaneously while criticism is withheld
b) Filtering out the unneeded attributes of the problem so that only a model of the important parts remains
c) Making a decision without stopping to think about the next course of action, saving time and energy
d) Thinking about the solution beforehand and determining the best strategy from the issues that will be encountered, then breaking the problem into smaller problems and solving each with the best possible approach

**17.** Which of the following is NOT one of the three factors that must be considered before a computational approach can be used on a problem?

a) The programming language in which the solution will be coded must be chosen.
b) The problem must be clearly defined — current situation, end goal, route to it, and possible obstacles.
c) The problem must be computable — the required calculations must be possible given processing time and capacity.
d) The data requirements must be examined — the required data types and storage capacity identified.

**18.** A hospital renders its patient waiting-time figures as a set of diagrams and graphs so that managers can see at a glance where the delays occur. Which computational method is this?

a) Data mining   b) Performance testing   c) Visualisation   d) Problem recognition

**19.** A program computes the total cost of an order by passing the summed product cost into a function that adds VAT, whose result is then passed on to the next stage, and so on until the total is produced. Which computational method is this?

a) Divide and conquer   b) Pipelining   c) Backtracking   d) Dynamic programming

**20.** Divide and conquer splits a complex problem into smaller easier parts. Under which conditions can the approach actually work?

a) The small parts must be simpler than the complex part, and each small part must feed its result to the next part in a fixed order.
b) The small parts must be simpler than the complex part, and every sub-problem solution must be saved so that it is never recomputed.
c) Solving the original problem directly must be less complicated than combining the solutions of the small easier parts.
d) The small parts must be simpler than the complex part, and combining the solutions of the small easier parts must be less complicated than solving the original problem directly.

**21.** A padlock has 4 digits, each from 0 to 9, and the combination has been forgotten, so a brute force approach is used. At most how many combinations must be tried, and what is the characteristic weakness of the approach?

a) 10,000 — brute force algorithms are simple and consistent but very slow
b) 40 — brute force is fast but can miss the correct solution entirely
c) 1,000 — brute force works by saving and reusing sub-problem results
d) 5,040 — brute force is guaranteed to reach the optimal solution first

**22.** Which statement correctly contrasts the greedy algorithm with dynamic programming?

a) Greedy guarantees an optimal solution, whereas dynamic programming does not.
b) Both guarantee an optimal solution, but greedy requires far more memory to do so.
c) Greedy applies the best possible solution at each stage and might not always produce an optimal solution; dynamic programming saves the solutions of sub-problems and, provided a solution exists, guarantees that an optimal one can be found.
d) Greedy saves the solutions of sub-problems so they are never recomputed, whereas dynamic programming discards them at each stage.

**23.** A test is run at a significance level of 0.05 and the data yield a p-value of 0.03. What is the decision, and what does the significance level mean?

a) Accept the null hypothesis; 0.05 is the probability that the null hypothesis is true.
b) Reject the null hypothesis; 0.05 is the probability of rejecting the null hypothesis when it is true.
c) Accept the null hypothesis; 0.05 is the probability of accepting the null hypothesis when it is false.
d) Reject the null hypothesis; this result proves that the effect being tested really exists.

**24.** Which statement correctly distinguishes an algorithm from a computer program?

a) An algorithm is written in machine code; a program is written in a high-level language.
b) An algorithm is produced by the compiler; a program is designed by people.
c) An algorithm must be rewritten when you move from Python to Java; a program need not be.
d) An algorithm is a plan for solving a problem, designed by people and independent of any language; a program is the set of instructions describing the steps the computer has to follow.

**25.** At which step of the algorithm development process are the questions "Can this algorithm only solve this particular problem, or can it be applied to more general problems?" and "Can the complexity of the algorithm be reduced?" asked?

a) Step 5: Algorithm review
b) Step 2: Problem analysis
c) Step 3: High-level algorithm development
d) Step 4: Algorithm refinement

**26.** Priori analysis of an algorithm is:

a) Carried out after implementation, and deals with actual space and running-time requirements
b) Carried out during coding, and removes syntax errors before compilation
c) Carried out before the algorithm is implemented in a particular programming language, and does not directly affect the implementation
d) Carried out after release, and measures the finished program against a set of test scenarios

**27.** Consider the loop below.

```
i <- 1
WHILE i < n DO
    PRINT i
    i <- i * 2
ENDWHILE
```

What is its time complexity?

a) O(n)   b) O(log n)   c) O(n²)   d) O(1)

**28.** "Worst case time complexity" means:

a) The time the algorithm will require to execute a typical input of size n
b) The time the algorithm takes when the computer running it is heavily loaded
c) A measure of the minimum time the algorithm will require for an input of size n
d) A measure of the maximum time the algorithm will require for an input of size n

**29.** Which of the three required forms of algorithm representation does the fragment below show?

```
while stock_level < reorder_point
    do
        place_order()
```

a) Repetition   b) Selection   c) Sequence   d) Recursion

**30.** An algorithm is written so that a different algorithm programmer or designer can later update and upgrade it. Which design consideration is this?

a) Modularity   b) Robustness   c) Extensibility   d) Correctness

## Section B — Short answer (6)

**31.** A course computes a student's final grade as the average of five grades, and the pass mark is 45.

(a) Write the pseudocode for an algorithm that inputs the five grades, computes the final grade, and prints `"PASS"` or `"FAIL"`.
(b) Trace your pseudocode by hand for the grades **40, 52, 38, 45, 50**. Show the sum, the computed grade, the result of the decision test, and the printed output.
(c) A programmer types `/ 4` instead of `/ 5` in the averaging line. The program still compiles and runs to completion. Name the type of error this is, state what it would print for the grades in (b), and state the difference between debugging and testing.

**32.** Answer all three parts.

(a) A logistics firm's fuel spend has risen sharply in one quarter and nobody knows why. Management wants as many candidate causes as possible, gathered from staff across several departments in a single session. Name the problem-solving strategy this calls for and state **three** of its rules or defining features.
(b) "A parking space measures 150 m by 2000 m. What is its area?" Classify this as routine or non-routine, justifying your answer with the course definition, and then state the **three** things involved in developing a 'novel' method for the other class of problem.
(c) The substitution puzzle replaces `OB` with `BOOB` and replaces `BOB` with `O`. Show the sequence of substitutions that obtains **BOOOB** from **BOB**, then explain — using what that sequence does — why *deciding whether an arbitrary substitution puzzle comes out* is unsolvable. Finally, state the difference between an unsolvable problem and an undecidable problem.

**33.** Consider the set of numbers **2, 8, 4, 9, 3**, to be sorted into **descending** order using Merge sort.

(a) State the **two** conditions under which the divide and conquer strategy can work.
(b) Show the complete step-by-step Merge sort trace: the splitting phase down to single elements, then every merge, showing the comparisons made in the final merge.
(c) Explain why Merge sort is divide and conquer rather than pipelining or dynamic programming, giving the discriminating test in each case.

**34.** Six activities have start times **2, 4, 1, 6, 9, 6** and finish times **3, 5, 7, 8, 10, 10** respectively. You cannot work on more than one activity at a time.

(a) Using the greedy approach, determine the maximum number of activities that can be performed. Show the ordering you use, each selection, and why each rejected activity is rejected.
(b) State why the greedy algorithm carries no guarantee of an optimal solution while dynamic programming does, and state what dynamic programming does with the solutions of sub-problems.
(c) A trial tests the hypothesis "the new delivery-scheduling method reduces average delivery time". State the null hypothesis. If the significance level is 0.05 and the p-value comes out at 0.12, state the decision and state what may **not** be concluded from it.

**35.** Apply the Big O time-complexity rules to the three fragments below.

```
// Fragment A
total <- 0
FOR i <- 1 TO n DO
    FOR j <- 1 TO n DO
        total <- total + 1
    ENDFOR
ENDFOR
```

```
// Fragment B
k <- n
WHILE k > 1 DO
    PRINT k
    k <- k / 2
ENDWHILE
```

```
// Fragment C
x <- a + b
y <- x * x
PRINT y
```

(a) Give the Big O time complexity of each fragment, and for each one state the rule that justifies it.
(b) Rank the three in increasing order of growth rate and say which is the most efficient for large n.
(c) For the functions 1000N and N², state which grows faster and is therefore the less efficient, and explain why comparing their values at one small value of n gives the wrong answer.

**36.** A program must read numbers from the user until a sentinel value is entered, and then output the maximum.

(a) Name the five algorithm development steps, in order.
(b) Write the Step 3 high-level algorithm for this problem, then write the Step 4 refinement of its input line.
(c) State which of sequence, selection and repetition your refined algorithm uses, justifying each, and state the difference between priori and posterior analysis.

---

## Answers

**1.** c) — The solution is the *number* of values with a particular property, which is the definition of a counting problem; "Which students scored above 45?" would be search, and "Is there one?" would be decision. **[Week 1]**

**2.** b) — The chain is compiler: high-level → assembly; assembler: assembly → machine code; interpreter: high-level → machine code directly. **[Week 1]**

**3.** c) — The order is understand the problem → create a step-by-step solution plan → carry out the solution plan → evaluate and refactor the solution. **[Week 1]**

**4.** a) — Pseudocode is the textual representation; it looks like a real program but cannot be compiled or executed. The flowchart is the graphical representation. **[Week 1]**

**5.** d) — Refactoring improves structure, design and efficiency **without changing the function** of the solution; unchanged output for every input is exactly that. **[Week 1]**

**6.** b) — The code obeys the language rules and never crashes, but produces the wrong result, which is a logical error. **[Week 1]**

**7.** a) — A pass mark of 45 means 45 must pass, so the test is `Grade > 44` (equivalently `Grade ≥ 45`); `Grade > 45` fails a student who scored exactly 45. **[Week 1]**

**8.** d) — User documentation contains what the end user needs for the installation and use of the program; programmer documentation holds the technical details for upgrade and maintenance. **[Week 1]**

**9.** b) — Trial and error is **time-consuming and inefficient** where many possible solutions exist; it is only useful where the possible solutions are few. **[Week 2]**

**10.** a) — Heuristics saves time and energy by deciding without stopping to think about the next course of action, so its solutions are not always rational and it suits cases where a sub-optimal solution is acceptable. **[Week 2]**

**11.** c) — Abstraction filters out the unneeded attributes so only the important parts remain, leaving a model; the Underground map is the course's own example. **[Week 2]**

**12.** d) — Brainstorming requires that criticism of ideas be avoided while it runs; judging ideas as they arrive is not strict brainstorming. **[Week 2]**

**13.** a) — A non-routine problem has no standard method for solving it and needs unconventional thinking; being numeric does not make a problem routine. **[Week 2]**

**14.** c) — Unsolvable does not mean no solution can possibly be found; it means there is no systematic method (algorithm) for deciding — hence *unsolvable decision problems*. **[Week 2]**

**15.** b) — The halting problem is one of the course's two named undecidable problems, along with "does my code have a bug?". **[Week 2]**

**16.** d) — Means-ends analysis thinks about the solution beforehand, chooses the best strategy from the issues that will be met, and breaks the problem into smaller problems solved with the best possible approach. **[Week 2]**

**17.** a) — The three factors are clear definition, computability and data requirements; the coding language is not among them. **[Week 3]**

**18.** c) — Visualisation uses diagrams, graphs and images to help **humans** rather than computers understand the problem; data mining would instead extract patterns from a large data set to drive a decision or prediction. **[Week 3]**

**19.** b) — In pipelining the task is divided into a series of subtasks where each subtask leads to the next and the result of one process feeds into the next. **[Week 3]**

**20.** d) — Both conditions must hold: the small parts must genuinely be simpler than the complex part, **and** combining their solutions must be less complicated than solving the original problem directly, or the split buys nothing. (Option c is the reversed wording that appears in the deck; it is wrong.) **[Week 3]**

**21.** a) — Four digits with ten choices each give 10 × 10 × 10 × 10 = 10,000 combinations; brute force goes through all possible choices, relying solely on computing power, so it is simple and consistent but very slow. **[Week 3]**

**22.** c) — Greedy takes the immediate best choice at each stage and might not always be optimal; dynamic programming saves sub-problem solutions and guarantees an optimal solution provided one exists. **[Week 3]**

**23.** b) — p (0.03) ≤ significance level (0.05), so the null hypothesis is rejected; the significance level is the probability of rejecting the null hypothesis when it is true. **[Week 3]**

**24.** d) — An algorithm is a plan for solving a problem, designed by people and language-independent, which must be converted into a program; the program is the instruction set the computer follows. **[Week 4]**

**25.** a) — Those two questions are the Step 5 algorithm review questions; Step 3 omits minor detail and Step 4 adds it. **[Week 4]**

**26.** c) — Priori analysis is carried out before implementation in a particular language and does not directly affect the implementation; posterior analysis follows implementation and deals with space and running time. **[Week 4]**

**27.** b) — The loop variable is **multiplied** by a constant amount, which is the O(log n) rule; incrementing or decrementing by a constant would give O(n). **[Week 4]**

**28.** d) — Worst case is a measure of the **maximum** time for an input of size n, not "what usually happens"; the typical input of size n gives the average case and the minimum gives the best case. **[Week 4]**

**29.** a) — Repetition executes the same step over and over while a condition holds; selection would execute a step once if a condition were satisfied. **[Week 4]**

**30.** c) — Extensibility is precisely the design factor that another algorithm programmer or designer can update and upgrade it; modularity concerns breaking *this* solution into smaller steps. **[Week 4]**

---

**31.** Model answer.

**(a) Pseudocode.**

```
START
  INPUT G1, G2, G3, G4, G5
  Grade <- (G1 + G2 + G3 + G4 + G5) / 5
  IF Grade > 44 THEN
     PRINT "PASS"
  ELSE
     PRINT "FAIL"
  ENDIF
STOP
```

(`Grade >= 45` is equally acceptable; `Grade > 45` is not.)

**(b) Trace for 40, 52, 38, 45, 50.**

| Step | Working | Value |
|---|---|---|
| INPUT | G1=40, G2=52, G3=38, G4=45, G5=50 | — |
| Sum | 40 + 52 + 38 + 45 + 50 | 225 |
| Grade | 225 / 5 | **45** |
| Decision | Is 45 > 44? | TRUE |
| Output | — | **PASS** |

Note that this student sits exactly on the pass mark: with the wrong test `Grade > 45` the decision would be FALSE and the output would wrongly be FAIL.

**(c) The `/ 4` fault.**
- It is a **logical error** — the code breaks no rule of the language (so it is not a syntax error) and does not fail during execution (so it is not a run-time error), but it produces the wrong result.
- With `/ 4` the program computes 225 / 4 = **56.25**, and since 56.25 > 44 it still prints **PASS** — the right verdict reached from a wrong grade, which is why the fault is easy to miss.
- **Debugging** is the process that **finds errors so that they can be removed to avoid program failure**. **Testing** is the process that **verifies that the program works as expected**. Testing detects that something is wrong; debugging locates and removes it.

*Tested: the week's worked grade algorithm, the pass-mark boundary condition, and the error-type/debugging-versus-testing distinctions.* **[Week 1]**

---

**32.** Model answer.

**(a) Strategy: brainstorming.**
It is the **group-focused technique where people come together to solve a problem**, involving critical thinking and coming up with various solutions spontaneously — which is exactly what "as many candidate causes as possible, from staff across several departments, in a single session" asks for. Any three of its rules or defining features:
1. **Avoid criticism of ideas** while the session runs.
2. **Gather as many ideas as possible.**
3. **Other people's ideas can be fine-tuned.**
4. It is the only **group-focused** strategy of the set.

(The case study pairs this with **root cause analysis** — identifying the underlying process fault before acting — and with forming a cross-functional team for diverse insights.)

**(b) Classification: routine.**
A **routine problem is any problem that can be solved with an arithmetic operation**. This one supplies the question plus the required facts or numbers (150 and 2000), can be solved with an algorithm, is solely about identifying the most appropriate algorithm to apply — here area = length × breadth = 150 × 2000 = 300,000 m² — and can be solved very quickly.

For the other class, **non-routine** problems, a **'novel' method** must be developed, which involves:
1. **Studying the problem critically.**
2. **Gathering relevant information.**
3. **Identifying and implementing an effective strategy.**

**(c) The substitution puzzle.**

Rules: `OB → BOOB` and `BOB → O`.

```
BOB
  apply OB -> BOOB to the OB in B[OB]      =>  B + BOOB      =  BBOOB
BBOOB
  apply OB -> BOOB to the OB in BBO[OB]    =>  BBO + BOOB    =  BBOBOOB
BBOBOOB
  apply BOB -> O to the BOB in B[BOB]OOB   =>  B + O + OOB   =  BOOOB
BOOOB   -- target reached
```

**Why deciding is unsolvable.** Notice that the string **grows before it shrinks**: BOB (3 letters) → BBOOB (5) → BBOBOOB (7) → BOOOB (5). Because a puzzle may have to get *further* from the target before it comes out, **no rule bounds how far you must search before giving up**. There is therefore **no systematic method (no algorithm) for deciding, in general, whether an arbitrary substitution puzzle comes out** — which is what "unsolvable" means. It does not mean that no particular puzzle can be solved: this one plainly came out.

**Unsolvable vs undecidable.** **Unsolvable** = not solvable by the Universal Turing Machine, i.e. by any systematic method; in the real sense these are **unsolvable *decision* problems**. **Undecidable** = **no algorithm can give an accurate true/false for every input value**; undecidable problems are a **subset** of the unsolvable problems. The halting problem and "does my code have a bug?" are the course's undecidable examples.

*Tested: choosing the right strategy for a described problem, the routine/non-routine classification with the novel-method steps, and the unsolvable/undecidable machinery via the substitution puzzle.* **[Week 2]**

---

**33.** Model answer.

**(a) The two conditions for divide and conquer.**
1. The small easier parts must genuinely be **simpler than the complex part** — otherwise splitting achieves nothing.
2. **Combining the solutions of the small easier parts must be less complicated than solving the original problem directly** — otherwise the recombination costs back everything the split saved.

(Note: the lecture deck states this second condition the wrong way round, as "solving the original problem directly is less complicated than combining the solutions of the small easier parts". That reading is wrong; the version above is what is examined.)

**(b) Merge sort trace on 2, 8, 4, 9, 3 (descending).**

*Divide phase — split until every part holds one element:*

```
                 [2, 8, 4, 9, 3]
                 /             \
           [2, 8]              [4, 9, 3]
           /    \              /       \
        [2]     [8]         [4]      [9, 3]
                                     /    \
                                  [9]     [3]
```

*Conquer/merge phase — merge back, taking the LARGER head each time (descending):*

1. Merge `[2]` and `[8]`: compare 2 and 8 → take 8, then 2. Result **[8, 2]**.
2. Merge `[9]` and `[3]`: compare 9 and 3 → take 9, then 3. Result **[9, 3]**.
3. Merge `[4]` and `[9, 3]`: compare 4 and 9 → take 9; compare 4 and 3 → take 4; then 3. Result **[9, 4, 3]**.
4. Merge `[8, 2]` and `[9, 4, 3]` — the final merge, comparison by comparison:

| Comparison | Taken | Output so far |
|---|---|---|
| 8 vs 9 | 9 | 9 |
| 8 vs 4 | 8 | 9, 8 |
| 2 vs 4 | 4 | 9, 8, 4 |
| 2 vs 3 | 3 | 9, 8, 4, 3 |
| left list exhausted, 2 remains | 2 | 9, 8, 4, 3, 2 |

**Sorted result: 9, 8, 4, 3, 2.**

**(c) Why it is divide and conquer.**
- **Not pipelining.** In pipelining each subtask **leads to the next** and the result of one process **feeds into the next** as its input, so reordering the pieces destroys the task. In Merge sort the two halves are **independent** — either half could be sorted first — and are then **combined**. Test: independent-then-combined = divide and conquer; output-feeds-the-next-input = pipelining.
- **Not dynamic programming.** Dynamic programming breaks a problem into sub-problems and **saves their solutions so the same sub-problem is never recomputed**. In Merge sort no sub-problem recurs; each part is **solved once and merged**. Test: are results saved and reused (dynamic programming) or solved once and merged (divide and conquer)?

*Tested: the corrected divide-and-conquer conditions, a full hand-trace of Merge sort in descending order, and the divide-and-conquer/pipelining/dynamic-programming discriminators.* **[Week 3]**

---

**34.** Model answer.

**(a) Greedy activity selection.**

Pair each start with its finish time:

| Activity | Start | Finish |
|---|---|---|
| A1 | 2 | 3 |
| A2 | 4 | 5 |
| A3 | 1 | 7 |
| A4 | 6 | 8 |
| A5 | 9 | 10 |
| A6 | 6 | 10 |

The greedy choice is: **always take the activity that finishes earliest among those that can still be started**, since finishing soonest leaves the most time for the rest. Ordering by finish time gives A1(3), A2(5), A3(7), A4(8), A5(10), A6(10).

| Step | Activity considered | Current finish time | Decision |
|---|---|---|---|
| 1 | A1 (2 → 3) | — | **Select.** Nothing running; clock now 3. |
| 2 | A2 (4 → 5) | 3 | **Select.** Starts at 4 ≥ 3; clock now 5. |
| 3 | A3 (1 → 7) | 5 | Reject — starts at 1, which is before 5, so it overlaps A2. |
| 4 | A4 (6 → 8) | 5 | **Select.** Starts at 6 ≥ 5; clock now 8. |
| 5 | A5 (9 → 10) | 8 | **Select.** Starts at 9 ≥ 8; clock now 10. |
| 6 | A6 (6 → 10) | 10 | Reject — starts at 6, before 10, so it overlaps A4 and A5. |

**Selected: A1, A2, A4, A5. Maximum number of activities = 4.**

**(b) Greedy vs dynamic programming.**
The greedy algorithm applies **the best possible solution at each stage**, and that choice is **final and never revisited** — it walks one path, the locally best, so it **might not always produce an optimal solution**, though for many problems (this one included) it does, and where it does the solutions are simple and highly efficient. Dynamic programming instead **breaks the problem into sub-problems and saves the solutions of the sub-problems so that there is no need to compute the result again**; because the saved solutions are compared, the best combination emerges, and **provided that a solution to the problem exists, dynamic programming guarantees that an optimal solution can be found**. It is mostly used for **optimization problems** — finding the minimum or the maximum.

**(c) Hypothesis testing.**
- **Null hypothesis:** *the new delivery-scheduling method does **not** reduce average delivery time* — equivalently, the average delivery time under the new method is the same as under the old one. (The null hypothesis is the initial assumption of no difference.)
- **Decision:** the p-value is 0.12, which is **higher** than the significance level of 0.05. The decision rule is: p ≤ significance level → reject; p > significance level → accept. So the null hypothesis is **accepted**.
- **What may not be concluded:** accepting the null hypothesis does **not prove** that the new method has no effect. It only means that **the evidence was not strong enough** at this significance level. (Symmetrically, rejecting a null hypothesis would not have proved the effect exists either.)

*Tested: hand-running the greedy activity-selection example, the greedy-versus-dynamic-programming guarantee, and the null hypothesis / p-value decision rule.* **[Week 3]**

---

**35.** Model answer.

**(a) Complexity of each fragment, with the justifying rule.**

- **Fragment A — O(n²).** Rule: **O(n^c) applies to nested loops, and the complexity equals the number of times the innermost statement is executed.** The outer loop runs n times; for each of those the inner loop runs n times; so `total <- total + 1` executes n × n = n² times. Growth-rate name: **quadratic**.
- **Fragment B — O(log n).** Rule: **the time complexity of a loop is O(log n) if the loop variable is divided (or multiplied) by a constant amount.** Here `k` starts at n and is **divided by 2** each pass, so the number of passes is the number of halvings needed to bring n down to 1. Growth-rate name: **logarithmic**. (Had the line been `k <- k - 2`, decrementing by a constant, the answer would have been O(n).)
- **Fragment C — O(1).** Rule: **the time complexity of a set of statements is O(1) if it contains no loop, no recursion and no call to any other non-constant-time function.** These are three straight-line statements. Growth-rate name: **constant**.

**(b) Ranking by growth rate, increasing:**

**O(1) < O(log n) < O(n²)** — that is, Fragment C, then Fragment B, then Fragment A.

For large n the **most efficient is Fragment C, O(1)**: its running time does not grow with n at all. Fragment A is the least efficient, since n² grows fastest of the three.

**(c) 1000N versus N².**
**N² grows faster and is therefore the less efficient** of the two. Comparing them at one small value of n gives the wrong answer because for small n the constant 1000 dominates — at n = 10, for instance, 1000N = 10,000 while N² = 100, so N² looks far cheaper. But the two cross at N = 1000, and beyond that N² is larger and pulls away without limit (at n = 10,000: 1000N = 10,000,000 against N² = 100,000,000). Big O describes the **growth rate**, so the comparison must be made as **n increases**, not at one particular n.

*Tested: applying the Big O time-complexity loop rules to unseen code, ordering complexity classes by growth rate, and the growth-rate-versus-value-at-small-n trap.* **[Week 4]**

---

**36.** Model answer.

**(a) The five algorithm development steps, in order.**

1. **Step 1: Problem description**
2. **Step 2: Problem analysis**
3. **Step 3: High-level algorithm development**
4. **Step 4: Algorithm refinement** (stepwise refinement)
5. **Step 5: Algorithm review**

**(b) Step 3 high-level algorithm, and the Step 4 refinement.**

*Step 3 — focused on the main parts of the solution, not on every minor detail:*

```
Declare and initialize variables
Input numbers -- compare each input with the current maximum
                 to know which is higher
Identify maximum number and output result
```

*Step 4 — refining the input line with the detail Step 3 deliberately omitted:*

```
Declare and initialize variables
Loop until the user enters sentinel value
    prompt user to enter a number
    allow user to type in a number
    compare the number with the maximum
    add 1 to a counter
Identify maximum number and output result
```

(The refinement is guided by: who will implement the algorithm, how much knowledge that person has, and what the computer specifications are.)

**(c) Representation forms used, and priori versus posterior analysis.**

The refined algorithm uses **all three** forms:
- **Sequence** — the algorithm is ordered step by step with no step skipped: declare and initialize, then loop, then identify and output the result. The output line cannot precede the input line.
- **Selection** — inside the loop, "compare the number with the maximum" executes a step only **if a condition is satisfied**: if the number entered is greater than the current maximum, the maximum is replaced; otherwise it is left alone.
- **Repetition** — "Loop until the user enters sentinel value" executes the **same steps over and over while a condition holds**. Control returns to the same step, which is the test for repetition rather than selection.

**Priori vs posterior analysis.** **Priori analysis** is carried out **before** the algorithm is implemented in a particular programming language, and **does not directly affect the implementation** — it is language-independent. **Posterior analysis** is carried out **after** the algorithm has been implemented in a particular programming language, and deals with issues such as the **space and running-time requirements** of the algorithm. Test: was it done before the code existed, or after it ran?

*Tested: the five-step algorithm development process end to end, the Step 3 versus Step 4 distinction, the sequence/selection/repetition forms, and priori versus posterior analysis.* **[Week 4]**

## Revision table

| Week | Topic | Questions | Your score |
|---|---|---|---|
| 1 | Problem solving: computational problem types, the four steps, algorithms/pseudocode/flowcharts, coding and the translator chain, error types, debugging vs testing, refactoring, documentation | 1, 2, 3, 4, 5, 6, 7, 8, 31 | /9 |
| 2 | Problem-solving strategies (brainstorming, heuristics, trial and error, means-ends analysis, abstraction, analogy); routine vs non-routine; the UTM; solvable, unsolvable, decidable, undecidable | 9, 10, 11, 12, 13, 14, 15, 16, 32 | /9 |
| 3 | Computational approaches I & II: the three preconditions, problem recognition, backtracking, data mining, performance testing, pipelining, visualisation, brute force, divide and conquer, greedy, dynamic programming, hypothesis testing | 17, 18, 19, 20, 21, 22, 23, 33, 34 | /9 |
| 4 | Algorithm concepts: algorithm vs program, the five development steps, sequence/selection/repetition, priori vs posterior analysis, time and space complexity, the Big O loop rules and growth rate, characteristics and design considerations | 24, 25, 26, 27, 28, 29, 30, 35, 36 | /9 |
| | | **Total** | **/36** |
