# COS_102 — Week 2 retention set

*Introduction to Problem Solving · Week 2 (14–20 Sep 2026) · sat seven days later, notes closed.*
*12 multiple choice, then 3 short answer. Answers at the bottom.*

**1.** The lesson defines a problem-solving strategy as:
a) A plan used to find a solution or overcome a challenge
b) The single fastest route from a stated problem to its answer
c) An algorithm guaranteed to terminate on every valid input
d) The set of facts and numbers supplied along with a question

**2.** Which strategy is described as group-focused, spontaneous, and dependent on gathering as many ideas as possible?
a) Means-ends analysis
b) Heuristics
c) Brainstorming
d) Analogy

**3.** Heuristics are said to be relevant in which kind of situation?
a) Where the problem is well-defined with a clear solution path
b) Where the number of possible solutions is small enough to test
c) Where a group of people is available to contribute ideas
d) Where a sub-optimal solution to the problem is acceptable

**4.** Trial and error is recommended when:
a) The problem has previously been solved in another domain
b) The number of possible solutions to the problem is few
c) The unneeded attributes of the problem have been filtered out
d) The problem can be re-expressed as a substitution puzzle

**5.** Means-ends analysis involves:
a) Breaking a problem into smaller problems and solving each with the best approach
b) Choosing the first solution that comes to mind in order to save time and energy
c) Producing ideas spontaneously in a group while withholding all criticism
d) Removing every pattern of the problem that will not help reach a solution

**6.** Abstraction filters out unneeded attributes of a problem. The essential idea it leaves behind is called:
a) An algorithm
b) A heuristic
c) A model
d) An analogy

**7.** The first step in solving a problem by analogy is to:
a) Find similarities between the two systems and select one analogy
b) Define the problem and generate analogies
c) Use description and similarities to generate ideas
d) Confirm that the underlying principles of both systems match

**8.** Which of the following is **not** an attribute of routine problems?
a) Provides a question needing an answer, plus some required facts or numbers
b) Can be solved with algorithms
c) Is solely about identifying the most appropriate algorithm to apply
d) Can usually be solved using various unconventional approaches

**9.** Which is named as one of Turing's most significant contributions to the modern computer?
a) Storing encoded instructions in the computer's own memory
b) Separating the program tape from the machine's fixed instruction table
c) Proving that every mathematical problem can be solved by some machine
d) Showing that arithmetic problems require a different machine from text problems

**10.** Which of these is given as an example of an **undecidable** problem?
a) Sorting a list of names into alphabetical order
b) Calculating the area of a rectangular parking space
c) The halting problem
d) Finding the shortest route on the London Underground map

**11.** Solvable problems based on data structures include problems on:
a) Sorting, divide and conquer, recursion, searching, text processing
b) Vectors, stacks, queues, arrays, heaps, trees, graphs, linked lists
c) Rule of thumb, brand choice, migration to an unfamiliar country
d) Chess problems, substitution puzzles, and the halting problem

**12.** "Unsolvable problem" in this lesson most precisely means:
a) A problem whose answer has not yet been discovered by anybody
b) A problem too large for the memory of any existing computer
c) A problem with more than one correct answer, so no answer is final
d) A problem for which no systematic method of deciding it exists

**13. (short answer)** Name the four problem-solving strategies the week's summary lists, and the two further strategies taught in the lecture slides. For any two of the six, state the condition under which that strategy is the right choice.

**14. (short answer)** Distinguish routine from non-routine problems, giving one example of each from the lesson, and list the three steps of the method used to attack a non-routine problem.

**15. (short answer)** In three or four sentences, explain what the universal Turing machine has to do with whether a problem is solvable, and why "unsolvable" is better stated as "unsolvable decision problem".

## Answers

**1. a** — the lesson's own wording: a plan used to find a solution or overcome a challenge.
**2. c** — brainstorming is the only group-focused strategy; its rules are avoid criticism, gather many ideas.
**3. d** — heuristics trade rationality for speed, so they fit only where sub-optimal outcomes are acceptable.
**4. b** — its cost grows with the number of candidates, so it is only efficient when the candidates are few.
**5. a** — decomposition into sub-problems, each solved by the best possible approach, is the definition.
**6. c** — the lesson explicitly calls the idea formed by abstraction a model (e.g. the Underground map).
**7. b** — the three analogy steps run: define and generate analogies → find similarities and select → generate ideas.
**8. d** — unconventional, various approaches is the mark of *non-routine* problems (mid-lesson question 2).
**9. a** — storing encoded instructions in memory, plus one fixed machine computing all the UTM computes.
**10. c** — the two named undecidable examples are the halting problem and "does my code have a bug?".
**11. b** — those are the data structures listed; option (a) is the *algorithm*-based list.
**12. d** — it is a claim about the absence of a systematic decision method, not about answers existing.
**13.** Summary's four: brainstorming, heuristics, trial-and-error, means-ends analysis; plus abstraction and analogy from the slides. Conditions, e.g.: trial-and-error when possible solutions are few; heuristics when a sub-optimal solution is acceptable; analogy when the underlying principles of the two systems are the same.
**14.** Routine = solvable by an arithmetic operation / a standard algorithm, the only work being to pick the right algorithm, and solved quickly (e.g. area of a 150 m × 2000 m parking space). Non-routine = no standard method exists, procedures and answers are not immediately clear, needs originality, takes time (e.g. approximating the number of hairs on your head). Steps: study the problem critically → gather relevant information → identify and implement an effective strategy.
**15.** The UTM holds a fixed table of instructions and executes any instruction table written onto its tape; a problem is solvable exactly when a systematic method (algorithm) for it exists, i.e. when the UTM can do it. Problems the UTM cannot do are unsolvable. But this does not mean no solution can ever be found — what fails is the existence of a systematic method for *deciding* the question for every input, as with substitution puzzles "coming out", so the precise term is unsolvable decision problem, of which undecidable problems are a subset.
