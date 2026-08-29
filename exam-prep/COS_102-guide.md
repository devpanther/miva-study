# COS_102 — Introduction to Problem Solving

*Complete exam-preparation study guide. Covers weeks 1 to 12.*

---

## Orientation

COS 102 is not a programming course, though C appears from week 7. It is about **how a problem becomes a program**. The semester is one pipeline and every week is a stage on it:

**A problem exists → you understand it → you plan a solution → you write the plan as an algorithm → you express it as a flowchart or pseudocode → you translate it into code → you test and debug → you refactor and maintain.**

| Stage | Weeks | Topics |
|---|---|---|
| What is a problem; can a computer solve it at all? | 1, 2 | Problem types, routine/non-routine, solvable/unsolvable, decidable/undecidable, Turing machine |
| How do you attack a problem? | 1, 2, 3 | Four steps, six strategies, computational approaches |
| How do you write the plan down? | 4, 5, 6 | Algorithms, flowcharts, pseudocode |
| How do you turn the plan into code? | 7, 8, 9, 10 | Data types, variables, operators, objects, abstraction, functions, modules, statements, control flow, arrays, recursion |
| How do you organise and check the code? | 11, 12 | Decomposition, modularisation, software design, testing, debugging |

**Four ideas carry the course.**

1. **Decomposition.** Break a big problem into smaller ones until each is small enough to solve. It reappears as the step-by-step plan (W1), means–ends analysis (W2), divide and conquer (W3), functions (W8), recursion (W10) and modularisation (W11).
2. **A systematic method.** Computers process information systematically, so the solution must be systematic first. A systematic method is an **algorithm**. No algorithm means no computer solution — that is all "unsolvable" means (W2).
3. **Representation.** One algorithm, three forms: ordinary steps, a **flowchart** (graphical), **pseudocode** (textual). None of them is the program.
4. **Hiding what does not matter.** Abstraction (W2, W8), encapsulation (W7), information hiding (W11) and the black box (W12) are one instinct: expose the interface, hide the internals.

This course examines **definitions** and **ordered named lists** heavily; lists to memorise exactly are marked. The material also contains real errors. Each is boxed, with both versions and the one to write in an exam.

---

## Part 1 — Problems, and which ones a computer can solve

*Weeks 1 and 2.*

### What it is

The essence of computer science is problem-solving. Problems may be **real-world** or **abstract**. A systematic approach is required, because the computer processes information systematically.

**How a computer solves a problem:** a programmer programs it into a form the computer understands; but first the programmer must understand how a **human** would solve it; it is supplied through **input devices** (keyboard, mouse, joystick, external memory device); the **CPU** processes it; **output devices** (printer, monitor, loudspeaker, sound card) deliver the result. Why use a computer when a human could solve it? It handles **larger volumes, faster and more efficiently**.

**Input accepted:** anything convertible to digital form — numbers, letters, pictures, music, videos, sound waves, retinal scans, Wi-Fi signals. **Output produced:** printed documents, on-screen data, visuals, audio, digital music files, digitised speech, charts and graphs, images.

**Computational problem:** a problem with a step-by-step solution, whose inputs, limitations and output conditions are well defined. **Four types:**

| Type | Solution is | Example |
|---|---|---|
| **Decision** | YES or NO | Is 91 prime? |
| **Search** | a value or values with a particular property | Find a student scoring above 70 |
| **Optimization** | the best possible solution | Cheapest route Lagos → Abuja |
| **Counting** | the number of values with a property | How many scored above 70? |

**Ill-defined problem:** no clear goals, expected solutions or solution paths. **Well-defined problem:** clear goals, expected solution or solution path.

**Routine problem:** solvable with an arithmetic operation. Attributes: provides a question needing an answer plus required facts or numbers; solvable with algorithms; solely about identifying the most appropriate algorithm; solvable very quickly.

**Non-routine problem:** has no standard method. Attributes: procedures and answers not immediately clear; requires unconventional thinking based on originality and creativity; usually solvable by various approaches; can take time. Solving one needs a **novel method**: study the problem critically; gather relevant information; identify and implement an effective strategy. *Lecture example: approximate the number of hairs on your head.*

> **⚠ Error — the 165-mark example (Week 2).** The lecture offers as a non-routine example: *"50 questions; 2 marks deducted per wrong answer, 4 awarded per correct answer; Bridget scored 165. How many correct responses?"* **The problem has no solution.** With *c* correct, wrong = 50 − *c*, so the score is 4*c* − 2(50 − *c*) = **6*c* − 100**, which is always **even**. 165 is odd. Solving anyway gives *c* = 265/6 = 44.17, not a whole number. The nearest achievable scores are **164** (44 correct) and **170** (45 correct). With a 1-mark penalty, 4*c* − (50 − *c*) = 165 gives exactly ***c* = 43**, almost certainly what was intended.
> **In an exam:** show 6*c* − 100 = 165, state that *c* is not an integer, and call the data inconsistent. If a number is demanded, give 43 and state the 1-mark-penalty assumption. Never write 44.17. Note too that a question solved by a standard linear equation is, by this course's own definition, **routine** — a poor illustration of a non-routine problem.

### Computability

**Universal Turing machine (UTM).** It has a pre-loaded, single, fixed table of instructions. Any task you can write an instruction table for can be implemented by it. Your instruction table (program) is placed on its **tape** as a string of letters; the UTM reads it and implements the task on its tape. **Turing's two contributions to the modern computer:** (1) manipulating a computer's functionality by **storing encoded instructions in its memory**; (2) showing that a **single machine of fixed structure** can carry out every computation the UTM can.

**Solvable problem:** any mathematical problem solvable by a systematic method (an algorithm), so by the UTM. **Unsolvable problem:** one the UTM cannot solve; no algorithm exists. Solvable problems divide into those **based on data structures** (vectors, stacks, queues, arrays, heaps, trees, graphs, linked lists) and those **based on algorithms** (sorting, divide-and-conquer, recursive, searching, text-processing).

**Decidable problem:** one for which a systematic way can be found to solve it accurately. **Undecidable problem:** one where no algorithm gives an accurate true/false answer for every input — a **subset of unsolvable problems**. Examples: *Does my code have a bug?* and the **halting problem** (will a running program halt or run for ever?).

**What "unsolvable" really means:** not that no solution can ever be found, but that **no systematic method** exists for the general case. So strictly we have **unsolvable decision problems**.

### Worked example — the substitution puzzle

*The lecture's solution slide was an image and extracted as nothing. This is a **reconstruction** from the rules on the preceding slide.* From `BOB`, reach `BOOOB`, using only Rule A (replace `OB` with `BOOB`) and Rule B (replace `BOB` with `O`).

```
Step 0   BOB          start; OB sits at positions 2-3
Step 1   BBOOB        Rule A applied there; now OB sits at positions 4-5
Step 2   BBOBOOB      Rule A applied there; now BOB sits at positions 2-4
Step 3   BOOOB        Rule B applied there -- target reached
```

It "comes out" in three moves. The word got **longer** (3 → 5 → 7) before it got shorter, and no rule told you to lengthen it. That is why no systematic method exists in general: you cannot bound how far the search must go.

### Where people go wrong

- Reading "unsolvable" as "no solution exists". It means no general systematic method exists.
- Treating undecidable and unsolvable as synonyms. Undecidable is a **subset**, restricted to true/false problems.
- Decision versus counting: "Is there a student above 70?" is decision; "How many?" is counting.
- Calling a problem non-routine because it is hard. The test is whether a **standard method** exists.

### In the exam

Definitions, classification, and negative multiple choice ("which is *not* an attribute of routine problems?"). **Memorise exactly:** the four computational problem types; four attributes each of routine and non-routine problems; the three steps of the novel method; Turing's two contributions; the two solvable-problem families; the two undecidable examples.

---

## Part 2 — The four steps to problem-solving

*Week 1.*

### What it is

The spine of the course, in order: **1 Understand the problem. 2 Create a solution step-by-step plan. 3 Carry out the solution plan. 4 Evaluate and refactor the solution.**

**Step 1 — Understand.** Answer three questions: **What are the inputs? What are the processes involved? What is the output?** That input–process–output triple is the skeleton of every algorithm in this course.

**Step 2 — Plan.** Break the main problem into smaller problems until they are small enough to solve; solving them all solves the main problem. Creating the plan means **preparing algorithms and representing them with pseudocode and flowcharts**.

- **Algorithm:** a procedure of steps used to solve a problem; steps must be **ordered, unambiguous and complete** so it can easily be converted into a program.
- **Pseudocode:** the textual representation of an algorithm, written to be easily convertible into programming statements. Looks like a program but **cannot be compiled or executed**.
- **Flowchart:** the graphical representation of an algorithm — of the sequence of operations in a program. Uses symbols for start, stop, input, process, merge and decision.

**Step 3 — Carry out.** Programs are also called **codes**; use the pseudocode as a guide when writing them. Two contingencies: if the whole problem cannot be solved at once, break it into smaller simpler pieces and solve each separately, because a **simpler solution is more likely to be programmed correctly**; if some parts cannot be solved, **ignore the difficult parts and do the easier ones first**, after which the harder parts may become possible.

Carrying out the plan entails **four activities: coding; compilation and execution; debugging and testing; program documentation.**

**Coding** is writing the actual program; a coded program is a **source code**. **High-level languages** are written in forms humans easily understand (**C, C#, Java**); **low-level languages** in forms the computer easily understands (**assembly language, machine code**). The computer only understands machine code, but it is very hard to write and troubleshoot because even small programs contain thousands of 0s and 1s.

| Translator | Converts | Into |
|---|---|---|
| **Interpreter** | high-level language | machine code, directly |
| **Compiler** | high-level language | assembly language |
| **Assembler** | assembly language | machine code |

*(Background: outside this course a compiler is usually described as producing object or machine code and an interpreter as executing line by line. Write the table above — that is what is marked.)*

**Debugging and testing.** Three error types occur: **syntax, logical, run-time**. **Debugging** finds errors so they can be removed to avoid program failure. **Testing** verifies the program works as expected.

**Program documentation** is the process of collecting information about the program. It **starts at problem analysis and continues to testing**. Two types: **user documentation** (installation and use) and **programmer documentation** (technical details for upgrade and maintenance).

**Step 4 — Evaluate and refactor.** Refactoring **does not change the function** of the solution; it makes it more efficient while improving structure and design, most likely producing a more concise solution. Four questions: Can we derive the result differently? Can we improve performance? Can we think of other ways to refactor? How have other people solved the problem?

### Fully worked example — the student grade problem

The one problem the course carries through all three representations, so the likeliest worked question in the paper.

**Problem.** Calculate a student's final grade — the average of five grades — and show pass or fail. Pass mark 45. *Understanding it:* inputs G1–G5; process, add, divide by five, compare; output "PASS" or "FAIL".

```
ALGORITHM                                 PSEUDOCODE (reconstruction*)
Step 1: Start                             BEGIN
Step 2: Input G1, G2, G3, G4, G5              READ G1, G2, G3, G4, G5
Step 3: Grade = (G1+G2+G3+G4+G5) / 5          COMPUTE Grade = (G1+G2+G3+G4+G5)/5
Step 4: If Grade >= 45 go to Step 5,          IF Grade >= 45 THEN
        else go to Step 6                         PRINT "PASS"
Step 5: Print "PASS"; go to Step 7            ELSE
Step 6: Print "FAIL"                              PRINT "FAIL"
Step 7: Stop                                  ENDIF
                                          END
```

*\*The lecture's Example 2 pseudocode slide was an image and extracted as nothing; the version above is a **reconstruction** matching the algorithm and flowchart the lecture does show.*

**As a flowchart, shape by shape:**

```
1. OVAL (start/stop)      START
                            |
2. PARALLELOGRAM (input)  Input G1, G2, G3, G4, G5
                            |
3. RECTANGLE (process)    Grade = (G1+G2+G3+G4+G5) / 5
                            |
4. DIAMOND (decision)     Is Grade >= 45 ?
                       NO /                \ YES
5. PARALLELOGRAM   Print "FAIL"        Print "PASS"   6. PARALLELOGRAM
                          \                /
7. OVAL (start/stop)         STOP
```

**Trace 1:** G = 50, 60, 40, 30, 45 → sum 225, Grade 45. 45 ≥ 45? Yes → PASS → Stop.
**Trace 2:** G = 40, 40, 40, 40, 40 → sum 200, Grade 40. 40 ≥ 45? No → FAIL → Stop.

> **⚠ Error — the decision condition (Week 1).** The lecture's flowchart tests **"Is Grade > 44"** while the problem states a pass mark of **45**. For whole numbers these agree; for fractions they do not. An average of 44.5 satisfies `Grade > 44` and prints PASS, although it is below the pass mark — and the average of five grades is often fractional.
> **In an exam write `Is Grade >= 45`.** If the question reproduces `Grade > 44`, use it but note in one line that it should be `>= 45` for fractional averages. The extracted slide also lost its YES/NO branch labels: **always label decision branches** — an unlabelled diamond loses marks.

### Where people go wrong

- Reversing steps 2 and 3; planning precedes carrying out.
- Saying refactoring improves what the program does. It keeps behaviour **identical** and improves structure, design and efficiency.
- Swapping compiler and assembler. Compiler: high-level → assembly. Assembler: assembly → machine code.
- Confusing debugging (finds and removes errors) with testing (verifies expected behaviour).

### In the exam

The four steps and the four activities of step 3 are asked directly. **Memorise exactly:** the four steps in order; the four activities of step 3; the three error types; the three translators; the two documentation types; the three understanding questions.

---

## Part 3 — Problem-solving strategies

*Week 2.*

### What it is

**Definition:** a **problem-solving strategy** is a plan used to find a solution or overcome a challenge. Each includes multiple steps providing helpful guidelines on how to resolve a business problem or industry challenge.

**Why more than one?** Different problems require different strategies for the best solution, so several must be considered. After choosing one, its rules and procedures must be studied. An efficient strategy produces a **robust and reliable** solution.

> **⚠ Error — how many strategies? (Week 2).** The **slides teach SIX**: brainstorming, heuristics, trial and error, means–ends analysis, abstraction, analogy — each with its own definition and example slide. The **summary sheet says FOUR**, naming only the first four, and asks "what are the four problem-solving strategies discussed in the text?"
> **Trust the slides: six is what was taught.** In a written answer give **all six**, listing the summary's four first and abstraction and analogy last, so both versions are satisfied. If a multiple-choice item demands a number, the examiner probably drew it from the summary, so **four** may be the keyed answer.

### The six strategies

**1 Brainstorming.** A **group-focused** technique where people come together to solve a problem; involves critical thinking and coming up with various solutions spontaneously; the ideas of others can be fine-tuned. Two rules: **avoid criticism of ideas**; **gather as many ideas as possible**. *Choose it* early, when you need volume of ideas rather than quality.

**2 Heuristics.** Obtains a solution while **saving time and energy**; decisions are made without stopping to think about the next course of action. Fast and efficient, but **solutions are not always rational**. Relevant where a **sub-optimal solution is acceptable**. *Examples:* rule of thumb; choosing between brands of food at the grocery store; migrating to an unfamiliar country.

**3 Trial and error.** Recognises and removes errors or failures through **experimental trials**; approaches are implemented until a solution is reached. **Useful where possible solutions are few; time-consuming and inefficient where many exist.** *Examples:* trying various jobs before choosing a career; living in various locations before settling; trying various interests before choosing a favourite.

**4 Means–ends analysis.** Thinking about the solution beforehand and determining the best strategy based on the issues that will be encountered. It involves **breaking a problem into smaller problems** and **solving each with the best possible approach** until the main problem is solved. *Examples:* completing a degree syllabus in six months; a company expecting a two-billion-dollar turnover in a year.

**5 Abstraction.** Filtering out the **unneeded attributes** of a problem so you can concentrate on the important parts. All aspects or patterns that will not help reach a solution are removed. It forms an essential idea of what the problem is and how to solve it — **that idea is also known as a model.** *Example:* the London Underground map.

**6 Analogy.** Using previously existing understanding to understand a new, similar system, **as long as the underlying principles are the same.** Its **three steps**: define the problem and generate analogies; find similarities and select any of the analogies; use description and similarities to generate ideas. *Examples:* a manager dealing with a problematic employee; a doctor treating a deep, inoperable tumour with a high-intensity ray.

### Worked example — all six on one problem

*The brainstorming and abstraction example slides were images and extracted as nothing; the London Underground description below is a **reconstruction** from the surviving caption.*

**Problem:** a campus cafeteria has long lunchtime queues.

| Strategy | Applied |
|---|---|
| Brainstorming | Gather students, cooks, cashiers; collect every idea without criticism — more tills, pre-orders, staggered lecture times, cashless payment, a second serving point. Many candidates, none ranked. |
| Heuristics | Rule of thumb: "queues are caused by payment, not cooking." Add one till now and see. Fast, may be wrong, acceptable because a sub-optimal fix still helps. |
| Trial and error | Try each idea for a week, keep what works. Only sensible because the candidate list is short. |
| Means–ends analysis | End state: nobody waits over 5 minutes. Sub-problems: ordering time, serving time, payment time. Solve each with its own best method. |
| Abstraction | Discard menu, décor, personalities. Model: arrival rate, service rate, one queue, three servers. |
| Analogy | A cafeteria queue behaves like a bank queue; banks solved it with one snake queue feeding many tellers. Valid because the underlying principle — many servers, one arrival stream — is the same. |

**Reconstructed abstraction example.** *(reconstruction)* The London Underground map shows no true positions: distances are wrong, curves straightened, the Thames a schematic ribbon. All geographic accuracy — the unneeded attribute — is filtered out. What remains is the only thing a passenger needs: which lines connect which stations, in what order. The result is a **model**.

### Where people go wrong

- Confusing **trial and error** (a human strategy used when options are few) with **brute force** (an algorithm trying every possibility, W3).
- Confusing **heuristics** (shortcut taken without evaluating) with **trial and error** (each attempt is evaluated and discarded).
- Confusing **means–ends analysis** (human planning from a target end state) with **divide and conquer** (an algorithmic split-and-recombine technique).
- Calling trial and error efficient. The mid-lesson question turns on this: the false statement is "it is very efficient when the number of possible solutions is not few."

### In the exam

Expect "explain what problem-solving strategies are", "describe the benefits of employing strategies", "when is heuristics recommended?", "describe trial and error — when suitable, what limitations?", and negative multiple choice on trial and error. **Memorise exactly:** the six strategies; the three steps of analogy; the two brainstorming rules; the two-part definition of means–ends analysis; **model** as the product of abstraction.

---

## Part 4 — Computational approaches to problem solving

*Week 3.*

### What it is

**Definition:** **computational approaches** express solutions to problems in a form that can be run on a computer, using advances in computing such as **algorithms, models and simulations**.

**Three factors** decide whether a computational approach can be used at all: **the problem must be clearly defined** (identify the current situation, end goal, how to reach it, possible obstacles); **the problem must be computable** (are the required calculations possible, considering processing times and capacity?); **the data requirements must be examined** (required data types and storage capacity).

### The six basic computational methods

**Problem recognition.** Ensures the solution deals with the **root cause**. Three considerations: identify the **nature and parameters** of the problem; specify the **requirement or criteria for success**; determine whether it can be **grouped as a specific type**. You may also **reduce the problem to a more general case** — the lecture's example, optimising a building's power-cable infrastructure reduces to finding the **minimum spanning tree** of a graph.

**Backtracking.** Examines more than one possible solution, mostly using **recursion** to move between problem states. At each step options are considered and a decision made; on reaching a final state the algorithm checks whether it is accepted or rejected, then **backtracks to a previous state** to try unconsidered options. *Example:* a maze as a binary search tree whose leaves are examined for an exit or a dead end.

**Data mining.** Extracting valuable information from large data sets by finding unnoticed patterns and underlying relationships, to make informed decisions or predict trends. Uses **machine learning and statistical analysis**; interprets **big data**. *Example:* a music social network collecting five-star ratings and playlist sharing, then answering which songs or artists are most/least popular and which features are used most/least.

**Performance testing.** Evaluating whether a system or program works as expected **before release**, and using that to make it more effective. Method: devise **test scenarios and success criteria**, then **measure performance against them**. *Examples:* testing with erroneous data to check error handling; simulating real-life conditions (**stress testing**).

**Pipelining.** Dividing a task into a series of subtasks where each leads to the next. Each subtask is executed by a different process, and **the result of one feeds into the next** until the task completes. In programming, one function's result becomes another's input. *Example:* totalling an order by adding product costs then VAT.

**Visualisation.** Using diagrams, graphs and images to illustrate what a problem entails and how to approach it, because people process and retain images better than text. It **helps humans, not computers**, solve problems more effectively; useful for explaining complex tasks or scenarios. *Example:* Dijkstra's algorithm for the shortest path between two cities.

### The five sophisticated approaches

**Brute force.** Solves by going through **all possible choices** until a solution is found; relies solely on computing power, trying every possibility rather than improving efficiency. **Simple and consistent, but very slow.**

**Divide and conquer.** Split a complex problem into smaller easier parts, solve each, and thereby solve the complex problem. *Analogy:* a commander occupying a large territory by occupying smaller territories one at a time.

> **⚠ Error — the divide-and-conquer condition (Week 3).** The slide says *"Solving the original problem directly is less complicated than combining the solutions of the small easier parts."* That is **backwards** — if it were true you would never divide. The correct condition is that **combining the sub-solutions must be less complicated than solving the original directly.**
> **In an exam** state both conditions: (i) the sub-problems must be simpler than the original; (ii) combining the sub-solutions must be less complicated than solving it directly. That is what "the key conditions for its effectiveness" — asked twice in the week 3 summary — means.

**Greedy algorithm.** Applies the best possible solution **at each stage**, aiming at an overall optimum. It **might not always produce an optimal solution**, but does for many problems; where it does, the solutions are **simple and highly efficient**.

**Dynamic programming.** Breaks problems into sub-problems and **saves the sub-problem solutions so they need not be recomputed**. Provided a solution exists, it **guarantees an optimal solution can be found**. Mostly used for **optimization problems** — finding a minimum or maximum.

### Worked examples

*The padlock, merge-sort, activity-selection and Fibonacci slides were images and extracted as captions only. The workings below are **reconstructions** from those captions and the standard algorithms named.*

**A — Brute force: the 4-digit padlock.** Four positions, digits 0–9, give 10⁴ = **10,000** combinations. Try 0000, 0001 … 9999. **Worst case 10,000 attempts; average 5,000.** At 3 seconds each the worst case is about **8 hours 20 minutes**. Add a fifth digit and it becomes 100,000. Guaranteed, thoughtless, terrible at scale.

**B — Divide and conquer: merge sort of 2, 8, 4, 9, 3 into descending order** (the week 3 mid-lesson question, traced in full):

```
DIVIDE (halve until each piece holds one element)
            [2, 8, 4, 9, 3]
             /           \
        [2, 8]          [4, 9, 3]
        /    \          /      \
     [2]    [8]      [4]     [9, 3]
                             /    \
                          [9]     [3]

MERGE (repeatedly take the LARGER front element -- descending)
merge [9],[3]         : 9 vs 3 -> 9 ; then 3           -> [9, 3]
merge [4],[9,3]       : 4 vs 9 -> 9 ; 4 vs 3 -> 4 ; 3  -> [9, 4, 3]
merge [2],[8]         : 2 vs 8 -> 8 ; then 2           -> [8, 2]
merge [8,2],[9,4,3]   : 8 vs 9 -> 9 ; 8 vs 4 -> 8 ;
                        2 vs 4 -> 4 ; 2 vs 3 -> 3 ; 2  -> [9, 8, 4, 3, 2]

RESULT: 9, 8, 4, 3, 2
```

Both conditions hold: sorting one element is trivially simpler, and merging two sorted lists is a single pass — far cheaper than sorting from scratch.

**C — Greedy: activity selection.** Six activities, start times 2, 4, 1, 6, 9, 6 and finish times 3, 5, 7, 8, 10, 10. You cannot do two at once. Greedy rule: **always take the activity finishing earliest among those still available**, because finishing early leaves the most room afterwards.

```
Sorted by finish: A(2,3) B(4,5) C(1,7) D(6,8) E(9,10) F(6,10)

time = 0
A starts 2 >= 0   -> TAKE A. time = 3.  count = 1
B starts 4 >= 3   -> TAKE B. time = 5.  count = 2
C starts 1 <  5   -> SKIP C (clashes with B)
D starts 6 >= 5   -> TAKE D. time = 8.  count = 3
E starts 9 >= 8   -> TAKE E. time = 10. count = 4
F starts 6 < 10   -> SKIP F (clashes with D and E)

ANSWER: 4 activities -- A, B, D, E
```

Greedy never reconsidered a choice; that is its character.

**D — Dynamic programming: Fibonacci** (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144). Plain recursion for F(6) makes **25 calls**, recomputing F(3) twice, F(2) three times, F(1) five times. With the sub-results **saved**: table[0]=0, table[1]=1, then 1, 2, 3, 5, **8** — F(6) = 8 in **5 additions instead of 25 calls**. That comparison is the whole point of dynamic programming.

### Hypothesis testing

**Hypothesis:** a tentative, intelligent guess about the solution to a problem; a **specific statement of prediction** describing in concrete terms what you expect to happen; an **assumption that can be tested and proved right or wrong**.

**Null hypothesis:** the "no difference" assumption. Comparing method A with method B, the assumption that **both are equally good** is the null hypothesis; the task becomes determining whether it is true.

**Significance level:** the probability of **rejecting the null hypothesis when it is true**; 0.05 means a 5% risk of concluding something exists when it does not. **p-value:** a number between 0 and 1 describing **how likely it is that the null hypothesis is true**; the smaller the p-value, the stronger the evidence to reject.

**Decision rule: p ≤ significance level → reject** the null hypothesis; **p > significance level → accept** it. And: **rejecting does not prove something does not exist; it means the evidence is not enough.**

| Hypothesis | Null hypothesis |
|---|---|
| Consumption of a medicine reduces chances of heart arrest. | The medicine does **not** reduce the chances of heart arrest. |
| Do men's and women's test scores differ? | The mean test score of men is **the same as** that of women. |

The pattern: the null hypothesis is the **no-effect** version. Take the hypothesis and negate the effect.

> **⚠ Terminology error (Week 3).** The slide says a high p-value means the null hypothesis is **accepted**. Standard statistics says **fail to reject** — a high p-value is not evidence *for* the null, only insufficient evidence against it. **In an exam** answer with the course rule, and in a written answer add "strictly, we fail to reject rather than accept."

### Where people go wrong

- Brute force versus backtracking: brute force never prunes; backtracking **reverses to the last decision point**.
- Divide and conquer versus dynamic programming: both split, but dynamic programming **saves and reuses** overlapping sub-results. "Saved" is the marker word.
- Saying greedy always gives the optimum; it does not.
- Saying dynamic programming always finds a solution — it guarantees an **optimal** one *provided a solution exists*.

### In the exam

Expect the fill-in-the-blank *"_______ deals with evaluating if a program works as expected or not before it is released"* (**performance testing**), a merge-sort trace, a greedy count, and "state the null hypothesis for the following hypothesis". **Memorise exactly:** the three factors; the six computational methods; the five sophisticated approaches; the three considerations of problem recognition; the p-value decision rule.

---

## Part 5 — Algorithms

*Week 4.*

### What it is

Week 1: *a procedure of steps used to solve a given problem; the steps must be **ordered, unambiguous and complete***. Week 4: *sets of commands the computer can follow to carry out calculations or other problem-solving tasks; instructions implemented in a **particular order***. **Algorithms consist of inputs, a process and outputs**, and are represented as **pseudocode or flowcharts**. Computers are **tools** that carry out a plan; algorithms are the **plans**, are **designed by people**, and **must be converted into a computer program**.

### The five-step development process

**1 Problem description. 2 Problem analysis. 3 High-level algorithm development. 4 Algorithm refinement. 5 Algorithm review.**

**Step 1 — Problem description.** Harder than it looks because two parties are involved: the **client** (wanting a solution) and the **programmer** (providing it). Three issues arise: **unstated assumptions**; **ambiguous** description; **incomplete** description.

**Step 2 — Problem analysis.** Make the **starting and ending points** clear. *Starting point:* What data do we have? Where is the data? What formulas are related to the problem? What rules are required to manipulate the data? How are the data values related? *Ending point:* What results are we expecting? What parameters have changed in the items? What changes have been made? What items are now non-existent?

**Step 3 — High-level algorithm development.** Focus on the **main parts of the solution, not every minor detail**, because detailing before you have a solution is time-wasting and costly. *Lecture example, a meeting scheduler:*

```
Step 1: Identify who needs to be at the meeting.
Step 2: Find common empty spaces in calendars.
Step 3: Choose one and tell everyone.
Step 4: Receive confirmation that everyone is still available.
Step 5: IF response to 4 is negative, iterate from 2
        ELSE IF response to 4 is positive, identify meeting location.
```

**Step 4 — Algorithm refinement (stepwise refinement).** Add detail to each step, based on **who** will implement it, **how much knowledge** that person has, and the **computer specifications**. *Refining step 2:* ask all to communicate availability or suggest times and get responses; examine the responses manually or automatically; find common openings, if any; else iterate with different time blocks or suggestions.

**Step 5 — Algorithm review.** Can the algorithm solve only this problem or more general ones? Can its **complexity** be reduced?

### Fully worked example — the five steps end to end

**Problem statement:** for a given set of numbers obtained from user input, determine the maximum number.

**1 Description.** Accept inputs, calculate the maximum. Check for unstated assumptions, ambiguity, incompleteness — here, how many numbers, and how does the user signal the end? That incompleteness is why step 4 introduces a sentinel.
**2 Analysis.** *Start:* what type of data is expected; what formula determines the maximum. *End:* what type of result is expected.
**3 High-level and 4 Refined:**

```
HIGH-LEVEL                          REFINED
Declare and initialize variables    Declare and initialize variables
Input numbers -- compare each       Loop until the user enters sentinel value
  input with the current maximum        prompt user to enter a number
  to know which is higher               allow user to type in a number
Identify maximum number and             compare the number with the maximum
  output result                         add 1 to a counter
                                    Identify maximum number and output result
```

**5 Review.** Useful only for maxima? Can complexity be reduced? Can other problems be solved with it? (Yes — flip one comparison and it finds the minimum.)

**Trace** with inputs 12, 47, 9, 63, 30, then sentinel −1:

| Input | Comparison | maximum | counter |
|---|---|---|---|
| 12 | first value | 12 | 1 |
| 47 | 47 > 12 → replace | 47 | 2 |
| 9 | 9 > 47? no | 47 | 3 |
| 63 | 63 > 47 → replace | 63 | 4 |
| 30 | 30 > 63? no | 63 | 5 |
| −1 | sentinel → exit | **63** | 5 |

### Representation, analysis and complexity

Algorithms must translate easily into any language, so they use **three structures**:

```
SEQUENCE                SELECTION                    REPETITION
Step 1                  IF condition is true         WHILE condition is true
Step 2                      THEN perform activity        DO
Step 3                      ELSE perform activity 2          perform activity
```

**Sequence:** ordered step by step so no step is skipped, unless there is a compelling reason. **Selection:** steps executed only if a condition is satisfied; alternatives may be one or more. **Repetition:** the same steps executed repeatedly, since writing them on separate lines is not sustainable.

**Two types of analysis:** **priori** — **before** implementation, and does **not** directly affect the implementation; **posterior** — **after** implementation, dealing with actual **space and running time** requirements.

**Complexity.** **Time complexity** is the time an algorithm requires to complete execution; **space complexity** is the computer space it requires. Both are represented by notations such as **Big O**. Three cases: **best** (minimum time for an input of size n), **worst** (maximum time for size n), **average** (time for a typical input of size n).

**Why Big O.** Different algorithms with different logic solve the same problem, and we want to compare efficiency. **The most important factor is the growth rate**, which is what Big O describes. The lecture compares 1000N with N²: 1000N is larger at first, but N² overtakes it at N = 1000 and is worse for ever after. **Growth rate beats constant factors.**

| Function | Name | | Notation | When it applies |
|---|---|---|---|---|
| C | Constant | | **O(1)** | no loop, no recursion, no call to a non-constant-time function |
| Log N | Logarithmic | | **O(n)** | loop variable incremented/decremented by a constant amount |
| (Log N)² | Log-squared | | **O(n^c)** | nested loops — the innermost statement's execution count |
| N | Linear | | **O(log n)** | loop variable divided/multiplied by a constant amount |
| N Log N | *(name blank on the slide; linearithmic)* | | **O(log log n)** | loop variable reduced/increased exponentially by a constant |
| N² | Quadratic | | **O(2ⁿ)** | often recursive algorithms solving size n via two problems of size n−1 |
| N³ | Cubic | | | |
| 2ⁿ | Exponential | | | |

> **⚠ Extraction note (Week 4).** The PDF lost all superscripts: "Log2 N" is (log N)², "N2" is N², "N3" is N³, "2N" is 2ⁿ, "O(nc)" is O(n^c). Read them as powers — 2N is linear, 2ⁿ is exponential, and confusing them costs a whole question.

> **⚠ Error — characteristics and design considerations (Week 4).** The **slides** give **four characteristics**: input values producing output; straightforward and clear instructions; a limited and countable number of instructions; not dependent on any programming language. The **summary** gives **five** — *input, unambiguity, finiteness, effectiveness, language independence* — adding **effectiveness**, absent from the slides, and dropping output.
> **In an exam** give the summary's five names, defined in slide wording (unambiguity = clear instructions; finiteness = limited and countable instructions). The same split affects design considerations: the slides list modular, correct, maintainable and easily refactored, **logical and practical**, extensible, robust, simple; the summary replaces "logical and practical" with **functionality**. List: modularity, correctness, maintainability, functionality, robustness, simplicity, extensibility.

**Design considerations, with slide descriptions:** **modular** (breakable into smaller steps); **correct**; **maintainable and easily refactored**; **logical and practical**; **extensible** (another programmer can update and upgrade it); **robust** (the solution is clearly defined); **simple** (very easy to understand). **Why we need algorithms:** breaking the solution into smaller steps lets us optimise performance — the two reasons given are **performance and scalability**.

### Where people go wrong

- Swapping priori (before) and posterior (after); swapping time (how long) and space (how much memory).
- Reading "best case" as smallest input. It is the **minimum time for an input of size n**.
- Merging steps 3 and 4 — refinement is a separate step and is where details go.
- Reciting the growth-rate table out of order. The order **is** the content.

### In the exam

"What are algorithms?" is a mid-lesson question, so expect it. Also: outline the development process; differentiate priori and posterior; define time and space complexity; complete the growth-rate table; state four characteristics of a good algorithm. **Memorise exactly:** the five development steps in order; the three description issues; the three representation structures; the two analysis types; the three complexity cases; the growth-rate table in order; the characteristics and design considerations.

---

## Part 6 — Flowcharts

*Week 5.*

### What it is

**Definition:** a **flowchart** is the graphical representation of the sequence of operations in a computer program, or the graphical representation of an algorithm. Flowcharts use symbols to describe actions such as start/begin, stop/end, decision making and data processing. With them, **complex processes can be quickly visualised**. A flowchart consists of **boxes and lines**, and the direction of operation is usually **top to bottom and left to right**.

### The symbols

*The lecture's symbol slides were images. The shape names below come from the captions and the week 5 summary, which names rectangles = processes, diamonds = decisions, arrows = flow, ovals = start/endpoints. Shapes are described in words because the diagrams did not survive extraction.*

| Symbol | Shape | What it shows |
|---|---|---|
| **Process** (also **action**) | rectangle | an action, process or function |
| **Start/stop** (also **terminator**) | oval | the start and end points of the flowchart |
| **Decision** (also **control**) | diamond | a yes/no or true/false question; the answer determines the path the flow takes |
| **Input/output** (also **data**) | parallelogram | data used at the input or the output |
| **Document** | rectangle with a wavy bottom edge | a document's input or output |
| **Comment/note** | bracket on a dashed line | comments added to parts of the flowchart |
| **On-page connector** | small circle with a letter | connects independent elements **across a single page** |
| **Link / off-page connector** | pentagon | connects independent elements **across multiple pages** |
| **Predefined process / declaration** | rectangle with double side bars | a complex process or a well-known operation |
| **Preparation** | elongated hexagon | the difference between steps preparing for work and steps that actually work |
| **Database** | cylinder | where data is stored |
| **Summing junction** | circle with a cross | the addition of inputs from various paths |
| **Multiple documents** | stacked wavy-bottom rectangles | different reports or documents |
| **Merge** | downward triangle | combines various paths into a single path |

### Fully worked example — the sum-of-five-numbers flowchart

This flowchart appears in both weeks 4 and 5, so it is heavily signposted.

```
1. OVAL              START
                       |
2. RECTANGLE         Sum = 0 ;  Count = 0             (process: initialise)
                       |
3. PARALLELOGRAM  -->Enter n                          (input)
                       |                                     ^
4. RECTANGLE         Sum = Sum + n ; Count = Count + 1       | YES
                       |                                     |
5. DIAMOND           Is Count < 5 ? ------------------------->
                       | NO
6. PARALLELOGRAM     Print Sum                        (output)
                       |
7. OVAL              STOP
```

**Trace with inputs 10, 20, 30, 40, 50:**

| Pass | n | Sum after | Count after | Count < 5? | Next |
|---|---|---|---|---|---|
| 1 | 10 | 10 | 1 | yes | loop |
| 2 | 20 | 30 | 2 | yes | loop |
| 3 | 30 | 60 | 3 | yes | loop |
| 4 | 40 | 100 | 4 | yes | loop |
| 5 | 50 | 150 | 5 | no | print |

Output: **150**. The loop runs exactly five times because the counter starts at 0 and the test is `< 5`. Change it to `<= 5` and it reads six numbers — a classic off-by-one.

### Types, uses, advantages, disadvantages, principles

**Four main types:**

| Type | What it does | Used for |
|---|---|---|
| **Process flowchart** | describes quickly how a process is completed in an organisation; applies to almost anything | clarifying responsibilities and roles; showing the process a product goes through along the production chain; describing information communication within an organisation |
| **Workflow flowchart** | describes the manner in which businesses function | employee training; identifying possible problematic areas; simplifying business operations; creating a stable, high-quality output from standard procedures |
| **Swimlane flowchart** | shows multiple information flows side by side; allows **multiple categories of activities** | representing the interaction of a process with different aspects of an organisation |
| **Data flowchart** | describes the data-processing aspect of system design and analysis by showing the flow of information | reducing the **communication gap between users and developers**; analysing any form of information flow |

**Uses:** plan a new project; document a project; model a business process; manage workflow; manage data; map a computer algorithm.

**Why we need them:** to provide clarity to program logic; to evaluate the actions resulting from setting some conditions; to clarify a program's procedural steps; to communicate the details of a program or process to other stakeholders.

**Advantages:** the logic of a process or program is simplified; they ascertain whether the logic works; they are added to program specification documents so other programmers can understand the logic.

**Disadvantages:** complex programs might need a flowchart spanning multiple pages; adjustments might be complicated and might require a new flowchart; flowchart logic is hardly the most efficient for writing a program, because it can make the program unnecessarily longer than normal.

**Principles:** the flowchart should have a **start point and a stop point**; **flow lines should generally not cross** if possible; comparison instructions should be as **simple** as possible; it should be **easy to follow, neat and clear**, with good visual impact.

> **⚠ Error (Week 5 summary).** The summary claims *"You also learned about the history of flowcharts"* and lists history as covered. **There is no history content in the week 5 slides.** Do not revise a history you were never taught; answer from what exists — definition, symbols, types, advantages, disadvantages, principles.

### Where people go wrong

- Using a rectangle for input or output. Input/output is a **parallelogram**; the rectangle is process.
- Leaving decision branches unlabelled. Every diamond needs YES/NO or TRUE/FALSE on its exits.
- Confusing the on-page connector (**same page**) with the link/off-page connector (**multiple pages**). The week 5 mid-lesson question turns on this — "across multiple pages" is the **link connector**.
- Confusing workflow with swimlane. Swimlane's distinguishing feature is **multiple categories of activities side by side**.

### In the exam

Expect symbol identification, "draw a flowchart for…", fill-in-the-blank on connectors and types, and list questions on advantages, disadvantages and principles. **Memorise exactly:** the four types; the six uses; the four "why we need them" reasons; the three advantages; the three disadvantages; the four principles; every symbol with both of its names.

---

## Part 7 — Pseudocode

*Week 6.*

### What it is

**Definition:** a **pseudocode** is the textual representation of the sequence of operations in a computer program, or the textual representation of an algorithm. It is written so as to be **easily convertible into programming statements**. The motivation behind its invention was to write all the main steps of an algorithm **in a language very similar to English**.

**Rule of thumb:** if you are struggling to start a program, write pseudocode first — write it **as comments in a file**, then fill in between the comments with actual code. You are writing your program's comments before the program.

**The rules** (the slides give **three**): each line should contain **only one statement**, since the pseudocode gives the computer tasks to implement sequentially; **write keywords in capital letters**, to differentiate them from other words; **statements should be language independent**.

> **⚠ Error — three rules or four? (Week 6).** The **slides state three**; the **summary says four**, twice, but never names a fourth. **In an exam** state the three from the slides; if a multiple-choice item demands a number, the summary's **four** may be keyed. A common fourth in the wider literature — labelled here as **background**, not course content — is "indent to show the body of a construct." The summary also calls pseudocode *"a transition from flowcharts towards a more structured code-like format"*, which misstates the relationship: flowchart and pseudocode are two independent representations of the same algorithm; neither derives from the other.

**Algorithms versus pseudocode** — a stated comparison and a mid-lesson question. **Algorithms** are step-by-step procedures that can be expressed in **any notation or language** (natural language, programming code, mathematical symbols) and have **precise, well-defined** procedures. **Pseudocode** is a high-level representation written in a **combination of natural and programming language elements**, is **more high level and informal**, does not strictly follow any language's syntax, and is **not meant to be executed**. Algorithms are usually represented as pseudocode during **early development**, before coding in a specific language.

### The eight constructs

**Pseudocode constructs** (also **pseudocode keywords**) outline the control flow of an algorithm: **SEQUENCE, CASE, WHILE, REPEAT-UNTIL, EXCEPTION and WHEN, FOR, IF-THEN-ELSE, CALL.**

**SEQUENCE** represents linear tasks performed one after the other. Its verbs: input — **READ, OBTAIN, GET**; output — **PRINT, DISPLAY, SHOW**; compute — **COMPUTE, CALCULATE, DETERMINE**; initialize — **SET, INIT**; add — **INCREMENT, BUMP**; subtract — **DECREMENT**.

```
FOR                    WHILE                  REPEAT-UNTIL
FOR iteration bounds   WHILE condition        REPEAT
    sequence               sequence               sequence
ENDFOR                 ENDWHILE               UNTIL condition

IF-THEN-ELSE           CASE                          EXCEPTION and WHEN
IF condition THEN      CASE expression OF            BEGIN
    sequence 1         condition 1: sequence 1         statements
ELSE                   condition 2: sequence 2         EXCEPTION
    sequence 2         ...                               WHEN exception
ENDIF                  condition n: sequence n              statements to handle it
                       OTHERS:                           WHEN another exception
                           default sequence                 statements to handle it
                       ENDCASE                         END
```

**FOR:** conditions set **at the beginning/top**. **WHILE:** some condition at the **beginning/top** and others in the body. **REPEAT-UNTIL:** some condition at the **ending/bottom** and others in the body. **IF-THEN-ELSE** changes the normal flow with conditional statements; **CASE** does the same in a **more generalised form**. **CALL** performs operations such as defining class objects and calling functions — `CALL AvgAge with studentAges`, `CALL getBalance RETURNING aBalance`. **EXCEPTION and WHEN** handle exceptions; responding to unexpected or unwanted events while a program runs is **exception handling**.

> **⚠ Error — the REPEAT-UNTIL template (Week 6).** The slide prints `REPEAT / sequence / ENDFOR condition`. **`ENDFOR` is wrong** — it belongs to the FOR construct. The closing keyword of REPEAT is **`UNTIL condition`**, as in the box above.

### Fully worked example — writing a pseudocode in seven steps

**The seven steps** (memorise, in order): **problem definition; identification of main steps; header writing; using variables and data structures; using constructs to describe logic; using clear and concise language; testing and refining.**

**Problem.** Determine the number of students who passed or failed an examination. If more than seven students pass, the tuition fee will be increased.

**1 Problem definition.** *Input:* the number of students and their results. *Process:* accept each result and determine pass or fail. *Output:* number of passes, number of failures, and whether tuition should be increased.
**2 Main steps.** Initialise the storage elements; set up all counters; accept results and determine pass or fail; increment the relevant counters; display all outputs.
**3 Header writing.** The header must include **the algorithm's name, a short description of its purpose, and a list of required inputs and outputs.** *Name:* Algorithm to determine if tuition should be increased. *Description:* accepts examination results and determines the number who passed or failed, used to decide on a tuition increase. *Inputs:* number of students and their results. *Outputs:* passes, failures, tuition decision.
**4 Variables.** Names and data types should represent exactly what is stored: `passes`, `failures`, and `student` (the current result number, incremented as more results arrive). **All of integer data type.**
**5 Constructs.** **WHILE** iterates over all results; **IF-THEN-ELSE** increments `passes` on a pass and `failures` on a fail.
**6 Clear and concise language.** Avoid complicated syntax and technical terms that obscure the logic. The lecture's own comparison — left is the poor version, right the clear one:

```
FOR i = 0 to 20                 FOR each index of string
  IF string [i] = '#'             IF string (index) is equal to hash THEN
    RETURN "Hash found"               RETURN "Hash found"
  END IF                          END IF
END FOR                         END FOR
```

**7 Testing and refining.** Test on paper or by scanning through, to ensure it **accurately describes the flow and logic** and **handles all required cases**; refine to correct errors or improve effectiveness.

**The finished pseudocode, as given:**

```
Initialise passes to zero
Initialise failures to zero
Initialise student to one
WHILE student counter is active
    input the next exam result
    IF the student passed THEN
        add one to passes
    ELSE
        add one to failures
    add one to student counter
print the number of passes
print the number of failures
IF seven or more students passed
    print "increase tuition"
```

**Trace with ten results P F P P P F P P P P:** passes rises to 1 at student 1, holds at 1 through student 2, then climbs 2, 3, 4 by student 5, holds at 4 through student 6, then 5, 6, 7, **8**; failures reaches 1 at student 2 and **2** at student 6. Output: **passes 8, failures 2**, and since 8 ≥ 7, print **"increase tuition"**.

*Note a mismatch inside the lecture's own example: the problem says tuition rises if **more than seven** pass (8 or more), but the pseudocode tests **seven or more**. At exactly 7 passes they disagree. Write `IF passes > 7` to match the problem, or state which reading you are using.*

### Advantages and disadvantages

**Advantages:** no special software is needed — any text editor will do; anyone can understand it, since the language is close to English; it can easily be modified; structured concepts can easily be implemented with it.

**Disadvantages:** there are **no generally accepted standards**, so anyone can write it their own way, leading to various styles and possible complications; compared with flowcharts it is **not visual**; and it takes **longer to read and understand**.

### Where people go wrong

- Writing `ENDFOR` to close a REPEAT loop, copying the slide's typo.
- Saying pseudocode can be compiled or executed. It cannot.
- Calling pseudocode a graphical representation — the week 6 mid-lesson question, whose answer is **No**; graphical is the flowchart.
- Reversing the comparison: *algorithms* can be written in any notation or language; *pseudocode* in a combination of natural and programming language elements.

### In the exam

Expect: define pseudocode; state its rules; list the constructs; write pseudocode for a stated problem; state advantages and disadvantages; and the algorithms-versus-pseudocode fill-in-the-blank. **Memorise exactly:** the three (or four) rules; the **eight constructs**; the **seven steps**, in order; the **three header contents**; four advantages and three disadvantages; the SEQUENCE keyword sets.

---

## Part 8 — Data types, variables and operators

*Week 7.*

### What it is

**Program:** a series of instructions that causes a computer or microcontroller to perform a particular task. It includes **more than just instructions** — also **data** and **various memory addresses** in which the instructions work. Example languages: **C, C++, Rust, Assembly, Java, Python.** When we program problems we **represent the problem as data (or variables)**, and the variable is stored and processed by the computer.

**Data type:** used for **specifying the type of a variable**; data types determine the **type and size** of the data. **Three basic types in C: characters, integers, floating-point numbers.**

**Definition versus declaration.** A **variable definition always includes "data type" followed by "variable name"**. A definition is also a declaration, **but not all declarations are definitions** — a declaration says a name exists with a given type; a definition also sets aside the storage. Always define a variable before use, choosing the type according to your program logic and need.

**Memory.** **Variable names are not stored inside the computer memory; the compiler replaces them with memory location addresses.** Learn that sentence verbatim — the week 7 summary quotes it.

**Operator:** a symbol that tells the compiler to perform specific mathematical or logical functions. C provides **six types: arithmetic, relational, logical, bitwise, assignment, misc.**

*The five operator-example slides were images and extracted as nothing. The table below is a **reconstruction** of standard C operators so the categories are usable.*

| Category | Operators | Meaning |
|---|---|---|
| **Arithmetic** | `+ - * / % ++ --` | add, subtract, multiply, divide, remainder, increment, decrement |
| **Relational** | `== != > < >= <=` | equal, not equal, greater, less, greater-or-equal, less-or-equal |
| **Logical** | `&& \|\| !` | AND, OR, NOT |
| **Bitwise** | `& \| ^ ~ << >>` | bitwise AND, OR, XOR, complement, left shift, right shift |
| **Assignment** | `= += -= *= /= %=` | assign, and compound assignments |
| **Misc** | `sizeof & * ?:` | size in bytes, address-of, dereference, ternary conditional |

### Worked example — the lecture's own question

**Find the average of the first five multiples of 9. What are the variables?**

```
Data:     int n1=9, n2=18, n3=27, n4=36, n5=45;
          int   sum;       /* integer: a running total */
          float average;   /* floating-point: a mean may be fractional */

Process:  sum = n1+n2+n3+n4+n5;   /* arithmetic + */  = 135
          average = sum / 5.0;    /* arithmetic / */  = 27.0

Output:   27.0
```

Two teaching points. **Choosing the data type is part of solving the problem** — declaring `average` as an `int` gives 27 here but would silently truncate 27.4 in another case. And `sum` and `average` are only **names for memory addresses**; the compiler discards the names and keeps the addresses.

### Where people go wrong

- Saying declaration and definition are the same. Every definition is a declaration; **not every declaration is a definition**.
- Saying variable names are stored in memory. They are **replaced by memory addresses**.
- Confusing `=` (assignment) with `==` (equality) — the commonest C error, and the exam knows it.
- Confusing logical `&&`/`||` with bitwise `&`/`|`, and forgetting the **bitwise** and **misc** categories.

### In the exam

Define a program; say what it contains besides instructions; define a data type; name the three basic C types; state the six operator categories; reproduce the memory-address sentence. **Memorise exactly:** the **six operator types**; the **three basic C data types**; the definition-versus-declaration rule.

---

## Part 9 — Program objects: structures, unions and classes

*Week 7.*

### What it is

**Real-world objects have two main characteristics: state and behaviour.** The lecture's dog — *state:* name, colour, breed, hungry; *behaviour:* barking, fetching, wagging tail. Objects vary in complexity, and **an object can be part of another object**. This motivates **object-oriented programming (OOP)**, where programs are based on objects rather than separate entities.

**In programming, an object is defined by its state and behaviour. State is stored in variables; behaviour is described by methods.** Every object has its own variables and methods. **Variables** store data; the variable name retrieves it. **Methods** are central because **only an object's own methods can access its variables or state**, and **different objects can only interact through their own individual methods**.

| | **Structure** | **Union** | **Class** |
|---|---|---|---|
| What | a **user-defined data type** grouping items of possibly different types into a single type | defined the **same way** as a structure | like a structure, but **also usually has methods or functions** |
| Keyword | `struct` | `union` | `class` |
| Memory | each member has its own location | **all members start at the same location**; only **one member at a time** can be represented | — |

Members are accessed or modified with the **dot syntax (`.`)**. Using the dog example, a class has variables `name`, `breed`, `colour` and a method returning the dog's name.

> **⚠ Error — classes in C (Week 7).** The slides present `struct`, `union` and `class` side by side as C constructs, and the summary shows `class Dog { … }` with C-style members. **The C language has no classes** — they belong to C++. **In an exam** answer as taught, but if asked to compare, the accurate statement is *"structures and unions are C constructs; classes are the object-oriented extension found in C++."*

**Why use program objects — four reasons.** Objects are **not dependent on each other**, so each can be independently created and maintained; an object can be **used in various parts of the program**; a faulty object can be **removed and replaced without disturbing the rest of the code** (the lecture's car analogy); and because state is reachable only through the object's methods, we get **information hiding** — control over how much we share with the outside world.

**Data encapsulation** (week 7 summary): **hiding the implementation details of an object from the user**, so the user interacts only through public methods while internals stay hidden. Benefits: **modularity, code reusability, independence of objects**. Access is controlled by **access specifiers** — **public** and **private**.

### Worked example — modelling a library book

```
struct Book {                    /* state only */
    char title[50];
    char author[50];
    int  copies_available;
};

class Book {                     /* state AND behaviour (C++) */
    private:
        char title[50];          /* hidden -- data encapsulation */
        char author[50];
        int  copies_available;
    public:
        char[] get_title();      /* the only way in */
        void   borrow();         /* decreases copies_available */
        void   return_book();    /* increases copies_available */
};
```

With the `struct`, any part of the program can write `b.copies_available = -5;` — an impossible state. With the `class`, that field is **private**, so the only routes to it are `borrow()` and `return_book()`, which can refuse to go below zero. That is the information-hiding benefit made concrete. As a **union**, `title`, `author` and `copies_available` would share one address, so storing the title would destroy the author — a union is for alternatives, never for values needed simultaneously.

### Where people go wrong

- Saying state is described by methods. **State → variables. Behaviour → methods.**
- Confusing structure with union. The marking sentence: **all union members start at the same memory location and only one can be represented at a time.**
- Saying objects interact directly. They **interact only through their own individual methods**.

### In the exam

Expect: the two characteristics of real-world objects; how state and behaviour are represented; structure versus union; define data encapsulation; the benefits of OOP. **Memorise exactly:** state/behaviour → variables/methods; the structure–union difference; the four reasons for using program objects; the three OOP benefits; the two access specifiers.

---

## Part 10 — Abstraction, functions and modules

*Week 8.*

### Abstraction

**Definition: abstraction is the process of hiding the internal details of an application from the outer world.** *Analogy:* turning a car ignition — you do not concern yourself with what happens in the engine between twisting the key and the car starting.

**Two types.** **Data abstraction:** writing a program so **the data of an object is not directly exposed** to the outside world or other programs, which also ensures **no other program can alter the object data without the necessary permissions**. **Functional abstraction:** writing a program so **the implementation of an object's methods is not directly exposed**; other programs need to know only **the method's name, the format of the input, and the format of the output**.

**Two ways to implement it.** **Access specifiers** — `public` and `private` restrict other programs' access to only some properties and functions of an object. **Header files** — by including one, we use its functions **without knowing how they are implemented**.

**Four benefits:** applications are **more secure**, since the implementation is not exposed; it **enhances code readability and reusability**; it lets us **change a method's implementation without breaking other parts of the code**; it **prevents duplication of code**.

*The lecture's "hello world" code slides were images and extracted as nothing. The code below is a **reconstruction** matching the four points the slides state.*

```c
/* Comments in C start with slash-star and end with star-slash */
#include <stdio.h>       /* header file: holds the information needed to use
                            the library, such as function declarations */
int main()               /* all C programmes have main() as the entry-point
{                           function; braces { } mark the start and end of
    printf("Hello World\n");  the block. This programme contains just one
    return 0;                 statement: a call to the standard library
}                             function printf(), which prints a character
                              string to standard output, usually the screen */
```

**Escape sequences:** `\'` single quote · `\"` double quote · `\\` backslash · `\0` null · `\a` bell · `\b` backspace · `\f` form feed · `\n` newline · `\r` carriage return · `\t` horizontal tab · `\v` vertical tab.

### Functions and modules

**Why functions exist:** large complex projects cannot be delivered quickly by one person, and the more complex the task the more people are needed. So break the project into smaller ones. **Functions break large and complex computing projects into smaller ones so different people can work on smaller functions at the same time.**

**Definition: a function is a group of statements that perform a task.** How code is divided is up to the programmer, but logically **each function performs a specific task**.

- **Function declaration:** tells the compiler a function's **name, return type and parameters**; the body may be defined separately.
- **Function definition:** provides the **actual body**, consisting of a **function header and a function body**, with these parts — **return type** (the data type returned; may be `void`), **function name**, **parameters** (a parameter is a placeholder; when the function is invoked a value is passed to it, and **a function may contain no parameters**), and **function body** (the statements defining what it does).
- **Calling a function** means we want to use it.

**Two benefits:** functions let us **scale up a project easily** — as it grows we only add more functions and the system remains stable; and they let us **avoid duplicating code**, since however often a function is used we implement it once.

**Modules.** Very similar to functions; the difference is **scale**. Functions solve specific problems on a smaller scale; **modules are larger-scale and can contain various functions and classes**. To use one you must **import** it: `import special_functions` makes the whole module available; `from special_functions import max` makes **only** that function available.

### Worked example — one function, traced

```c
int max(int a, int b)   /* return type int; name max; parameters a and b;
{                          everything in braces is the body */
    if (a > b) return a;
    else       return b;
}
int biggest = max(47, 12);
```

`max(47, 12)` passes 47 into `a` and 12 into `b`; the body tests `47 > 12`, true, so it returns 47 and `biggest` becomes 47. Call `max(3, 9)`: `3 > 9` is false, the else branch runs, 9 is returned. **One implementation, used twice** — the "avoid duplicating code" benefit demonstrated. Put `max` in a file called `special_functions` and it becomes a **module**, importable by any program.

### Where people go wrong

- Confusing data abstraction (hides the **data**) with functional abstraction (hides the **implementation of methods**).
- Confusing declaration (name, return type, parameters) with definition (the actual body).
- Saying a function must have parameters. **A function may contain no parameters.**
- Saying modules and functions differ in kind. They differ in **scale**.

### In the exam

Define abstraction; name and describe the two types; state two ways to implement it; list the benefits; define a function; state what a declaration tells the compiler; name the parts of a definition; differentiate functions from modules; reproduce the escape-sequence table. **Memorise exactly:** the two abstraction types; the three things a caller needs under functional abstraction; the four benefits of abstraction; the four parts of a function definition; the escape sequences; `main()` as every C program's entry point.

---

## Part 11 — Statements, Booleans and control flow

*Week 9.*

### Statements, blocks and Booleans

**Simple statement:** contains **only one expression** and **ends with a semicolon**. **Compound statement (block):** contains **more than one statement inside curly brackets**; **the right curly bracket has no semicolon after it**.

**Why blocks are needed:** solving complex problems by breaking them into smaller ones means we must **treat solutions to the smaller problems as single units**. A block is **treated like a single statement by the computer**, so solutions from different blocks can be seen as solutions to the smaller problems. **Blocks are used in functions, decision-making statements and iterative statements** — the decision-making statements being `if`, `if-else`, `else-if`, and the iterative ones `for`, `while`, `do-while`.

> **⚠ Error (Week 9 summary).** The summary reads *"Simple statements are made from compound statements or blocks."* This is **backwards**: a **compound statement is made from simple statements** grouped inside curly brackets.

**Booleans** represent values that are **either true or false**. In C a Boolean variable is declared with **`bool`** and takes only `true` or `false`. But **Boolean values are returned as integers: 1 (or any other number that is not 0) represents true, and 0 represents false.** Comparing values and variables usually **returns a Boolean value**.

### Program control and branching

**Program control** is responsible for the **sequential execution of a program from one line to the next until the last line**. Sometimes we want to alter that flow so control moves to a specific statement or block. **Branching** means the computer can **move program control to another line instead of the usual next line**.

- **Unconditional branching:** control moves to a specific statement or block **without checking any condition**. The example is **`goto`**, which specifies no condition before moving control.
- **Conditional branching:** the flow is altered, but **where control moves depends on whether predetermined conditions are satisfied**. Also known as **decision-making or selection statements**.

**There are three types of decision-making statement: `if`, `if-else` and `if-else-if`** — each usually a block of one or more statements. With **`if`**, control enters the block only if the condition is satisfied, otherwise **the entire block is skipped**. With **`if-else`**, control moves into the `if` block or else into the `else` block. **`if-else-if`** integrates **more than two choices**. **`switch`** executes **one code block among many alternatives**.

**Loops.** In general statements execute sequentially, but sometimes a block must run several times.

```c
while (condition) {      do {                    for (init; condition; update) {
    statement(s);            statement(s);           statement(s);
}                        } while (condition);    }
```

**`while`** — statement(s) may be a single statement or a block; the condition may be any expression, and **true is any nonzero value**. The loop iterates while the condition is true; when it becomes false **control passes to the line immediately following the loop**. **`do-while`** works the same way **except that it is guaranteed to execute at least once**. **`for`** — the **init step executes first and only once**, then the condition is evaluated; if true the body executes, if false it does not.

> **⚠ Error (Week 9).** The slide prints `While (condition) {`. **C is case-sensitive and the keyword is lower-case `while`** — `While` will not compile. The same applies to `if`, `else`, `for`, `do`, `switch`, `int`.

### Fully worked example — one task, three loops

**Task:** print the numbers 1 to 5. All three loops above do it with `i` starting at 1 and the condition `i <= 5`. Trace of the `while` version:

| Check | i | `i <= 5` | Action | i after |
|---|---|---|---|---|
| 1 | 1 | true | print 1 | 2 |
| 2 | 2 | true | print 2 | 3 |
| 3 | 3 | true | print 3 | 4 |
| 4 | 4 | true | print 4 | 5 |
| 5 | 5 | true | print 5 | 6 |
| 6 | 6 | **false** | exit | — |

Output: `1 2 3 4 5`.

**The difference that matters.** Set `i = 9` before the loop. The `while` version prints **nothing** — its condition fails before the first pass. The `do-while` version prints **9**, because its condition is tested at the bottom, so the body runs at least once. That contrast is the standard exam question on the two loops.

### Where people go wrong

- Putting a semicolon after a block's closing brace. **The right curly bracket has no semicolon.**
- Saying only `true` and `false` count as Boolean values. **Any nonzero number is true; only 0 is false.**
- Saying `goto` is conditional. It is the example of **unconditional** branching.
- Forgetting `do-while` runs at least once; writing `=` instead of `==` in a condition.

### In the exam

Define a simple statement and a block; explain why blocks are needed; state the Boolean-integer rule; define branching; distinguish unconditional from conditional; name the three decision-making statements; distinguish `while` from `do-while`. **Memorise exactly:** the three decision-making statements; the three iterative statements; the 1/0 Boolean rule; the three places blocks are used; the alternative name for conditional branching (**decision-making or selection statements**).

---

## Part 12 — Arrays and recursion

*Week 10.*

### Arrays

**Definition: an array is a type of data structure that can store a fixed-size sequential collection of elements of the same type.** Three words carry the marks: **fixed-size, sequential, same type**.

```c
datatype arrayName [ arraySize ];
int a[10];                                           /* an array of size 10 */
double salaries[5] = {1000.0, 2.0, 3.4, 7.0, 50.0};  /* initialised */
double salaries[]  = {1000.0, 2.0, 3.4, 7.0, 50.0};  /* size omitted */
double salary = salaries[2];                         /* indexing */
```

**The number of values between braces `{ }` cannot be larger than the number of elements declared between square brackets `[ ]`.** If you **omit the size**, an array just big enough to hold the initialisation is created. The lecture asks what `salary` holds: **3.4** — indexing starts at 0, so `salaries[0]` is 1000.0, `salaries[1]` is 2.0, `salaries[2]` is 3.4.

**Multi-dimensional arrays** are defined using **multiple adjacent square brackets**, with elements initialised inside curly braces. To access an element, **enclose each subscript in a separate pair of square brackets** — `grid[2][3]`, never `grid[2,3]`.

**Worked example — sum of an array.** *The lecture's C code slides for this were images and extracted as nothing; the code below is a **reconstruction** of the program the caption asks for.* Array = (1, 2, 3, 2, 5, 6, 3, 8, 1, 10).

```c
int arr[10] = {1, 2, 3, 2, 5, 6, 3, 8, 1, 10};
int i, sum = 0;
for (i = 0; i < 10; i++) sum = sum + arr[i];
printf("Sum = %d\n", sum);
```

Running total as `i` goes 0 to 9: 1, 3, 6, 8, 13, 19, 22, 30, 31, **41**. Output: **Sum = 41**. The loop runs `i = 0` to `9`, not 1 to 10 — the commonest array error in this course.

### Recursion

**Definition: recursion is a process in which a function indirectly and directly calls itself within its own function block.** It lets us **break a problem into one or more sub-problems similar in form to the original**. **Every recursive function has two components: a base case**, handling the situation where there is nothing left to do, and a **recursive case**, breaking the problem into a smaller version of itself together with some additional operation.

**Factorial**, the lecture's example: `n! = 1 * 2 * 3 * … * (n−2) * (n−1) * n`.

```c
/* iterative */                    /* recursive */
int fact(int n) {                  int fact(int n) {
    int i, result = 1;                 if (n <= 1) return 1;   /* base case */
    for (i = 1; i <= n; i++)           return n * fact(n - 1); /* recursive case */
        result = result * i;       }
    return result;
}
```

**Trace of `fact(5)`** — calls wind down, results unwind back up:

```
fact(5) = 5 * fact(4)
            fact(4) = 4 * fact(3)
                        fact(3) = 3 * fact(2)
                                    fact(2) = 2 * fact(1)
                                                fact(1) = 1   <- base case
                                    fact(2) = 2 * 1  = 2
                        fact(3) = 3 * 2  = 6
            fact(4) = 4 * 6  = 24
fact(5) = 5 * 24 = 120
```

**Answer: 120.** Remove the base case and the function calls itself for ever.

The lecture's comparison: the **iterative** function **has two local variables, three statements, and saves the solution in an intermediate variable before returning it**; the **recursive** one **has no local variables, one statement, and calculates and returns its result as a single expression**. **Recursion simplifies the function by making the computer do more work while we do less.**

> **⚠ Error — the comparison generalised (Week 10).** That table describes the **two specific factorial functions on the slide**, but the summary restates it as a general rule: *"While iterative functions have two local variables, Recursive functions have none."* **False in general** — recursive functions routinely declare local variables, and iterative ones may declare none. **In an exam** reproduce the table but say it refers to **the factorial example**. The safe general difference: an iterative function repeats using a loop and keeps a running result in a variable; a recursive function repeats by calling itself and needs a base case to terminate.

**Writing recursive functions — the lecture's problem:** *count the occurrences of 42 in an array of n integers.* **Approach 1 (peel off one element):** count the 42s in the **first n−1 elements**; count them in the **n-th element**; **add the two and return**. Base case **n = 0**. **Approach 2 (split in half):** break the array into **two pieces of equal size**, count the 42s in each half, add the sums — needing a **different header** and its own base case.

```c
int count42(int arr[], int n) {
    if (n == 0) return 0;                            /* base case */
    if (arr[n-1] == 42) return 1 + count42(arr, n-1);
    else                return 0 + count42(arr, n-1);
}
```

Trace with `{42, 7, 42, 3}`, n = 4: `arr[3]`=3 → 0 + …; `arr[2]`=42 → 1 + …; `arr[1]`=7 → 0 + …; `arr[0]`=42 → 1 + count42(n=0)=0. Unwinding: 0 → 1 → 1 → **2**.

**General approach to recursive programs — five steps in order:** write the **function header**, showing what it does and how it is called; **decompose the problem into subproblems**; **write recursive calls** for those subproblems similar in form to the original; **write code to combine, augment or modify** the results if necessary to construct the return value or side effects; **write base case(s)** for situations the recursive portion does not handle properly.

**Four types of recursion. Direct:** contains an **explicit call to itself**. **Indirect:** contains a call to **another function which eventually calls it back**. **Tail:** **no pending operations** on return from a recursive call. **Non-tail:** **has pending operation(s)** on return. `fact` above is **non-tail** — the multiplication by `n` is still pending.

### Where people go wrong

- Off-by-one on bounds. An array of size 10 has indices **0 to 9**; `arr[10]` is outside it.
- Writing `grid[2,3]`. **Each subscript needs its own brackets.**
- Omitting the base case, or placing it after the recursive call has already run.
- Confusing tail with direct. Tail/non-tail is about **pending operations**; direct/indirect is about **who makes the call**.

### In the exam

Define an array; declare and initialise one; "what is the value of `salaries[2]`?"; define recursion; name the two components; trace a recursive call; name the four types. **Memorise exactly:** the array definition (fixed-size, sequential, same type); base case and recursive case; the **five-step approach**; the **four recursion types**; the iterative-versus-recursive table, with the caveat above.

---

## Part 13 — Decomposition, modularisation and software design

*Week 11.*

### Modularisation and module independence

**Modularisation:** the process of **dividing a program's functionality into independent modules**, such that **each independent module has everything it needs to implement only a part of the program's functionality**. **Decomposition:** its meaning is embedded in that definition — by separating code into different modules and functions we are **decomposing the application into modules**.

**Why.** Imagine one function of more than five thousand lines: changing part of it would be stressful, and a change to one part could affect other parts. Modularisation separates those lines into modules and functions that **can be saved in separate files**, so we can **change parts without affecting others** and add new functionality **quickly and flexibly**.

**Advantages (five):** large programs can be written by several or different people; smaller modules and functions are easier to manage and add; a small module is easier to understand; modules and functions can be reused elsewhere in the program or in another program; smaller units are easier and faster to design, develop, test and publish.

**Disadvantages (five):** execution time may be longer; storage size may be increased; compilation and loading time may be longer; inter-module communication problems may be increased; it demands more initial design time.

**Module independence.** The **single responsibility principle** demands that modules should **not have more than a single responsibility** and should **not depend on other modules**. **Cohesion:** the extent to which the **functions in a module work together** to achieve its aim — **want high**. **Coupling:** the extent to which **modules depend on other modules** before performing their function — **want low**. *Car analogy:* the steering wheel, radiator, battery and brake each do one job completely (high cohesion) and connect through simple, minimal interfaces (low coupling), which is why a battery can be replaced without rebuilding the car.

**Information hiding:** modules should be designed so **one module's data structures and processing details are not accessible to other modules**; they **pass only as much information as is required** to accomplish the software functions. **Benefits:** it emphasises **communication through controlled interfaces**; it **decreases the probability of adverse effects**; it **restricts the effects of changes in one component on others**.

**Refactoring:** a design activity that **reduces the complexity of module design while keeping its behaviour or function unchanged** — formally, **modifying a software system to improve the internal structure of design without changing its external behaviour**. The existing design is checked for flaws such as **redundancy, poorly constructed algorithms and data structures**. *Example:* a component performing four functions with limited relationship to one another has **low cohesion**; refactor it into **four components, each with high cohesion**, giving easier integration, testing and maintenance.

**Structural partitioning.** For a hierarchical architecture, the program structure can be partitioned **horizontally or vertically**. **Benefits:** testing and maintenance become easier; negative impacts spread slowly; the software can be extended easily. In **horizontal partitioning**, **control modules** communicate between functions and execute them; it **requires passing more data across the module interface**, making control flow more complex, especially where data moves rapidly between functions. In **vertical partitioning**, functionality is distributed **top-down**: **control modules** at the top do the decision-making and little processing, while **worker modules** at the bottom perform all input, computation and output.

### Software design concepts

**Software architecture:** the **structure of the system**, containing its **components**, their **attributes (properties)** and the **relationships between them**; it enables software engineers to analyse the software design efficiently. **Three reasons we need it:** it enables **efficient communication between all interested stakeholders**; it **highlights early design decisions** affecting activities such as coding and testing; it **creates intellectual models** of how the system is organised into components and how they interact.

**Software pattern:** a description of the solution to a **recurring design problem** of a specific domain, in a form that can be **used again and again**. Its objective is to let a designer determine whether the pattern **can be reused**, whether it is **applicable to the current project**, and whether it can be used to develop a **similar but functionally or structurally different** design pattern.

| Pattern | Level | What it does | Often considered equivalent to |
|---|---|---|---|
| **Architectural** | **High-level** | overall structure and organisation; defines elements such as subsystems, components and classes, and indicates their relationships plus the rules and guidelines for specifying them | **software architecture** |
| **Design** | **Medium-level** | refines the elements defined by the architectural pattern, or their relationships; addresses specific elements such as component-to-component interaction | **software components** |
| **Idiom** | **Low-level**, language-specific | describes the implementation of a component and the method of interaction among components in a specific language | **coding patterns** |

**Two generic design approaches. Top-down and bottom-up are not individually practicable; a good combination of both is used.** **Top-down design** takes the whole system as one entity and decomposes it into sub-systems or components, each then treated as a system and decomposed further, until the lowest level is reached; it starts with a **generalised model** and keeps defining more specific parts, and when all components are composed the whole system comes into existence. It is **more suitable when the solution is designed from scratch and specific details are unknown**. **Bottom-up design** starts with the **most specific and basic components**, composing higher-level components from lower-level ones until the system evolves as one single component; **with each higher level the amount of abstraction increases**. It is **more suitable when a system is created from an existing system** whose basic primitives can be reused.

### Worked example — decomposing a social media platform

```
FEATURE LEVEL (decomposition, top-down)
    Social media web application
        |-- user registration      |-- posting updates
        |-- profile creation       |-- following other users

SUB-PROBLEM LEVEL (decompose one feature further)
    user registration
        |-- validate the user's input
        |-- create a new user account
        |-- send a confirmation email

MODULE LEVEL (modularisation -- group related sub-problems)
    user management module      <- registration, profile, login
    post management module      <- posting, editing, deleting updates
    following management module <- follow, unfollow, followers list
```

Check the result against the two measures. **Cohesion:** every function inside "user management" serves the single aim of managing users — high cohesion, so the module is sound. **Coupling:** "post management" needs only a user ID from "user management", not its internal data structures — low coupling, so either module can be rewritten without touching the other. That is module independence in practice.

### Where people go wrong

- Swapping cohesion and coupling. **Cohesion is inside a module (want it high); coupling is between modules (want it low).**
- Listing modularisation's disadvantages as advantages. The disadvantages are all costs.
- Saying refactoring changes external behaviour. It **never** does.
- Swapping the partitions. Vertical is the **top-down control/worker** split; horizontal is the one pushing **more data across the module interface**.

### In the exam

Define modularisation, cohesion, coupling, information hiding, refactoring and software architecture; list the advantages and disadvantages of modularisation; distinguish horizontal from vertical partitioning; name and describe the three patterns; compare top-down and bottom-up. **Memorise exactly:** the five advantages and five disadvantages; the three information-hiding benefits; the three structural-partitioning benefits; the three reasons for software architecture; the three pattern levels; the two design approaches.

---

## Part 14 — Software testing and debugging

*Week 12.*

### Testing and the testing life cycle

**Software testing:** a process to **find out if the output the computer is giving is the same as the expected output**. With it we can **locate errors** and **confirm whether there are missing requirements**. It can be carried out **manually or with automated tools**.

**Why a life cycle?** So that we follow **well-defined procedures** to be sure the software meets the set requirements and has no defects. Without a standard process defining the **deliverables and objectives of each phase**, we cannot be sure we are testing the right way.

**The software testing life cycle (STLC) has six main phases. Each phase has an entry point (where it begins) and an exit point (where it ends, all objectives achieved).** In sequential order:

| # | Phase | What is decided | Activities |
|---|---|---|---|
| 1 | **Requirement analysis** | what is to be tested | software requirement document review; stakeholder interviews; identifying possible issues that might affect the testing process |
| 2 | **Test planning** | the testing **strategy, cost and duration** | identifying testing objectives, testing environment, test cases and test deliverables; **assigning roles to team members** |
| 3 | **Test case development** | the test cases | identification, writing and review of test cases |
| 4 | **Test environment setup** | the **software and hardware requirements** | test data setup; environment setup |
| 5 | **Test execution** | the actual testing happens here | test implementation; retesting to fix defects; test results analysis; reporting |
| 6 | **Test cycle closure** | whether objectives were achieved and the software is ready | defect identification and correction; summary report creation; feedback collection |

**Test case:** gives **detailed step-by-step instructions on how a test should be performed**, specifying the **test inputs, process and expected outputs**.

**Debugging.** Bugs cause a system to **malfunction** and lead to **poor performance or incorrect results**. **Debugging is the process of identifying and resolving errors, or bugs, in a software system** — time-consuming and complex, but essential. **Methods and techniques:** **code inspection** (manually reviewing the source code to identify potential bugs); **monitoring** (watching for unusual behaviour or performance issues indicating bugs); **logging** (recording events and messages, used to identify bugs); **unit testing** (testing independent units or components); **integration testing** (testing interactions between components); **system testing** (testing the entire system); and **debugging tools** — **debuggers, trace tools and profilers**. Widely used debuggers named: **Radare2, WinDbg, Valgrind.**

### Testing methods

**All testing methods are classified into two types: functional and non-functional.**

**Functional testing** tests the program to ensure it **performs as expected** — for example that an addition function works. The four: **Unit testing** uses test data to check the **execution paths** in a software, mostly on the **functions** in the program; its **limitation** is that it is practically **impossible to test all execution paths**, and the number and type of test data is limited. **Integration testing** tests **how well different parts work together**, either **top-down** (higher-level modules first) or **bottom-up** (lower-level modules first). **System testing** tests **the system as a whole after all parts are integrated**, confirming it works as expected and **meets the technical and functional requirements**. **Acceptance testing** confirms the software **meets the expected requirements**; beyond issues such as spelling errors it identifies **bugs that can cause major errors and software crashes**.

**Non-functional testing** tests **non-functional aspects** such as the user interface and ensures the software is **secure enough**. The four: **Usability testing** discovers issues **with the help of users**, who are **observed while using the software**. **Performance testing** discovers issues such as **network delays, database and client-side processing**, and checks performance **under different load conditions**. **Security testing** discovers **vulnerabilities or security flaws**, checking **data security, software availability, confidentiality and integrity**. **Compatibility testing** determines compatibility with **different browsers, platforms and operating systems**, ensuring the software performs across **all environments end users will use**.

| Method | Internal structure is | Applicable to |
|---|---|---|
| **Black box** | **not known** to the tester; tests may be functional or non-functional, though usually functional; named because the program is like a box you cannot see inside | integration, system and acceptance testing |
| **White box** | **known** to the tester, who chooses inputs to exercise paths through the code and determines the appropriate outputs; **programming know-how and implementation knowledge are essential**; it is **testing beyond the user interface** | unit, integration and system testing |
| **Grey box** | **partially known**: access to internal data structures and algorithms **for designing the test cases**, but testing at the user or black-box level; named because the box is semi-transparent | primarily **integration testing** |

*Examples given:* **black box** — a tester without knowledge of a website's internals tests the pages in a browser, providing inputs (clicks, keystrokes) and verifying outputs against expected outcomes. **White box** — a tester, usually a developer, studies the implementation code of a field on a page, determines all legal (valid and invalid) and illegal inputs, and verifies outputs against outcomes determined by studying that code. **Grey box** — the code of two units is studied (white box) to design test cases, and the tests are conducted through the exposed interfaces (black box).

### Worked example — testing a login form through the STLC

```
1 Requirement analysis  : review the spec -- "a user with correct email and
                          password is admitted; anyone else is refused."
                          Issue spotted: the spec is silent on what happens
                          after three wrong attempts. Raise it now.
2 Test planning         : strategy = functional first, then security.
                          Duration 2 days. A writes cases, B executes, C reports.
3 Test case development : Case 1  valid email + valid password -> admitted
                          Case 2  valid email + wrong password -> refused, error
                          Case 3  empty email                  -> refused, prompt
                          Case 4  200-character password       -> refused, no crash
4 Environment setup     : test database with three known accounts; two browsers.
5 Test execution        : run all four. Case 4 crashes the page. Report it,
                          wait for the fix, retest, analyse results.
6 Test cycle closure    : all four now pass; write the summary report; collect
                          feedback; declare the objectives achieved.
```

Every case specifies **inputs, process and expected outputs** — the definition of a test case. Cases 1–3 are **functional**; case 4 shades into **security** and **performance**, so **non-functional**. Written without seeing the code they are **black box**; rewritten by a developer reading the password-checking function to hit every branch they would be **white box**.

### Where people go wrong

- Reciting the six phases out of order, or dropping **test environment setup**, the one people forget.
- Confusing test planning (strategy, cost, duration, roles) with test case development (the cases themselves).
- Putting unit or integration testing under non-functional. **Both are functional.**
- Swapping black and white box. **Black = structure not known; white = structure known.** Grey box is **primarily integration testing**.

### In the exam

Define software testing; outline the six STLC phases **in order** with their activities; define a test case; define debugging; list debugging methods and tools; classify testing methods; differentiate black, white and grey box. **Memorise exactly:** the **six STLC phases in order**; the **four functional methods**; the **four non-functional methods**; the **three box methods**; the **three debugging tool types** and the three named debuggers.

---

## Recap — every definition, named list and symbol

### Definitions

| Term | Definition |
|---|---|
| Computational problem | Has a step-by-step solution; inputs, limitations and output conditions well defined |
| Routine problem | Solvable with an arithmetic operation |
| Non-routine problem | Has no standard method for solving it |
| Solvable problem | Solvable with a systematic method (an algorithm), so by the UTM |
| Unsolvable problem | The UTM cannot solve it; no algorithm exists |
| Decidable problem | A systematic way can be found to solve it accurately |
| Undecidable problem | No algorithm gives an accurate true/false answer for every input; a subset of unsolvable problems |
| Algorithm | A procedure of steps used to solve a problem; ordered, unambiguous, complete |
| Pseudocode | The textual representation of an algorithm; cannot be compiled or executed |
| Flowchart | The graphical representation of an algorithm / of the sequence of operations in a program |
| Problem-solving strategy | A plan used to find a solution or overcome a challenge |
| Computational approach | Expresses solutions in a form runnable on a computer, using algorithms, models and simulations |
| Refactoring | Modifying a system to improve internal structure or design without changing external behaviour |
| Time complexity | The time required by an algorithm to complete its execution |
| Space complexity | The computer space required by an algorithm to complete its execution |
| Program | A series of instructions causing a computer or microcontroller to perform a particular task |
| Data type | Specifies the type of a variable; determines the type and size of its data |
| Operator | A symbol telling the compiler to perform specific mathematical or logical functions |
| Structure | A user-defined data type grouping items of possibly different types into a single type |
| Union | Like a structure, but all members start at the same memory location and only one is represented at a time |
| Abstraction | The process of hiding the internal details of an application from the outer world |
| Data encapsulation | Hiding the implementation details of an object from the user |
| Function | A group of statements that perform a task |
| Module | Like a function but larger in scale; can contain various functions and classes |
| Simple statement | Contains only one expression and ends with a semicolon |
| Block / compound statement | More than one statement contained inside curly brackets |
| Branching | Moving program control to another line instead of the next line |
| Array | Stores a fixed-size sequential collection of elements of the same type |
| Recursion | A function indirectly and directly calls itself within its own function block |
| Modularisation | Dividing a program's functionality into independent modules, each having all it needs for its part |
| Cohesion | How far the functions in a module work together toward its aim (want high) |
| Coupling | How far modules depend on other modules (want low) |
| Information hiding | Designing modules so one module's data structures and processing details are inaccessible to others |
| Software architecture | The system's structure: components, their attributes, and the relationships between them |
| Software pattern | A description of the solution to a recurring design problem, reusable again and again |
| Software testing | Finding out if the output the computer gives is the same as the expected output |
| Test case | Step-by-step instructions for a test, specifying inputs, process and expected outputs |
| Debugging | Identifying and resolving errors, or bugs, in a software system |

### Every named list

- **4 steps to problem-solving:** understand the problem; create a step-by-step plan; carry out the plan; evaluate and refactor.
- **4 computational problem types:** decision, search, optimization, counting. **3 understanding questions:** inputs, processes, output.
- **4 activities of carrying out the plan:** coding; compilation and execution; debugging and testing; program documentation.
- **3 error types:** syntax, logical, run-time. **3 translators:** interpreter (high-level → machine code), compiler (high-level → assembly), assembler (assembly → machine code). **2 documentation types:** user, programmer.
- **6 problem-solving strategies:** brainstorming, heuristics, trial and error, means–ends analysis, abstraction, analogy *(summary says four)*. **3 steps of analogy:** define the problem and generate analogies; find similarities and select one; use description and similarities to generate ideas.
- **3 factors before a computational approach:** clearly defined; computable; data requirements examined.
- **6 computational methods:** problem recognition, backtracking, data mining, performance testing, pipelining, visualisation. **5 sophisticated approaches:** brute force, divide and conquer, greedy, dynamic programming, hypothesis testing.
- **5 algorithm development steps:** problem description; problem analysis; high-level development; refinement; review. **3 description issues:** unstated assumptions; ambiguous; incomplete.
- **3 representation structures:** sequence, selection, repetition. **2 analysis types:** priori, posterior. **3 complexity cases:** best, worst, average.
- **Growth rates in order:** C, Log N, (Log N)², N, N Log N, N², N³, 2ⁿ.
- **5 algorithm characteristics:** input, unambiguity, finiteness, effectiveness, language independence. **7 design considerations:** modularity, correctness, maintainability, functionality, robustness, simplicity, extensibility.
- **4 flowchart types:** process, workflow, swimlane, data. **6 uses:** plan a project; document a project; model a business process; manage workflow; manage data; map a computer algorithm. **4 principles:** have a start and stop point; flow lines should not cross; keep comparisons simple; keep it neat and clear.
- **3 pseudocode rules:** one statement per line; keywords in capitals; language independent *(summary says four)*. **8 constructs:** SEQUENCE, CASE, WHILE, REPEAT-UNTIL, EXCEPTION and WHEN, FOR, IF-THEN-ELSE, CALL.
- **7 steps to writing pseudocode:** problem definition; identification of main steps; header writing; using variables and data structures; using constructs to describe logic; using clear and concise language; testing and refining. **3 header contents:** name; short description of purpose; list of inputs and outputs.
- **6 operator types:** arithmetic, relational, logical, bitwise, assignment, misc. **3 basic C data types:** characters, integers, floating-point numbers.
- **2 object characteristics:** state (variables), behaviour (methods). **2 abstraction types:** data, functional. **4 parts of a function definition:** return type, name, parameters, body.
- **3 decision-making statements:** `if`, `if-else`, `if-else-if` (plus `switch`). **3 iterative statements:** `for`, `while`, `do-while`.
- **2 recursion components:** base case, recursive case. **5 steps for recursive programs:** write the header; decompose into subproblems; write recursive calls; combine or modify results; write base case(s). **4 recursion types:** direct, indirect, tail, non-tail.
- **5 modularisation advantages / 5 disadvantages** (Part 13). **3 information-hiding benefits:** controlled interfaces; decreased probability of adverse effects; restricted effects of change. **3 software patterns:** architectural (high), design (medium), idiom (low). **2 design approaches:** top-down, bottom-up.
- **6 STLC phases in order:** requirement analysis; test planning; test case development; test environment setup; test execution; test cycle closure. **4 functional methods:** unit, integration, system, acceptance. **4 non-functional methods:** usability, performance, security, compatibility. **3 box methods:** black, white, grey. **3 named debuggers:** Radare2, WinDbg, Valgrind.

### Symbols

**Flowchart shapes:** oval = start/stop (terminator) · rectangle = process (action) · parallelogram = input/output (data) · diamond = decision (control) · cylinder = database · wavy-bottom rectangle = document · stacked wavy-bottom rectangles = multiple documents · small circle with a letter = on-page connector · pentagon = off-page/link connector · rectangle with double side bars = predefined process/declaration · elongated hexagon = preparation · circle with a cross = summing junction · downward triangle = merge · arrow = flow line.

**C escape sequences:** `\'` single quote · `\"` double quote · `\\` backslash · `\0` null · `\a` bell · `\b` backspace · `\f` form feed · `\n` newline · `\r` carriage return · `\t` horizontal tab · `\v` vertical tab.

**C operators:** `+ - * / % ++ --` arithmetic · `== != > < >= <=` relational · `&& || !` logical · `& | ^ ~ << >>` bitwise · `= += -= *= /= %=` assignment · `sizeof & * ?:` misc.

**Big O:** O(1) constant · O(log n) logarithmic · O(n) linear · O(n log n) linearithmic · O(n²) quadratic · O(n³) cubic · O(2ⁿ) exponential.

**Boolean values in C:** 1 (or any nonzero number) = true; 0 = false.
