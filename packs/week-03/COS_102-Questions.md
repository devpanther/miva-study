# COS_102 — Week 3 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 4, not this week. Notes closed. 12 MCQ + 3 short answer, about 30 minutes.*

## Section A — Multiple choice (12)

**1.** The course defines computational approaches to problem solving as approaches that:
a) Reduce every problem to an arithmetic operation
b) Express solutions in a form that can be run on a computer, using algorithms, models and simulations
c) Decide whether a problem is solvable by the Universal Turing Machine
d) Break a problem into sub-problems and store their answers

**2.** Which of the following is **not** one of the six computational methods listed in Lesson I?
a) Problem recognition  b) Pipelining  c) Dynamic programming  d) Visualisation

**3.** "_______ deals with evaluating if a program works as expected or not before it is released, and using this knowledge to make it more effective."
a) Performance testing  b) Data mining  c) Pipelining  d) Backtracking

**4.** Which trio are the three factors that must be considered before deciding that computational approaches can be used on a problem?
a) Nature and parameters identified; criteria for success specified; problem grouped as a type
b) Clearly defined; computable; data requirements examined
c) Split; solve each part; combine the parts
d) Null hypothesis stated; significance level chosen; p-value computed

**5.** In backtracking, on reaching a final state the algorithm:
a) Stores the result so the same state is never recomputed
b) Chooses the option with the best immediate value and continues
c) Checks whether the state is accepted or rejected, then backtracks to try unconsidered options
d) Splits the remaining states into smaller sets

**6.** A company examines millions of song ratings and playlist shares to find out which artists are most popular and which features of its platform are least used. This is:
a) Data mining  b) Performance testing  c) Hypothesis testing  d) Visualisation

**7.** The course's example of reducing a problem to a more general case — optimising a building's power cable infrastructure by finding the **minimum spanning tree** of a graph — belongs to which method?
a) Visualisation  b) Problem recognition  c) Divide and conquer  d) Greedy algorithm

**8.** Pipelining is best described as:
a) Splitting a task into subtasks in a series, each one's result feeding the next
b) Splitting a problem into smaller copies of itself and combining their solutions
c) Trying every possible choice until a solution is found
d) Saving each sub-problem's solution so it is never computed twice

**9.** Brute force is described by the course as:
a) Fast but unreliable, because it makes an intelligent guess at each stage
b) Simple and consistent, but very slow, because it goes through all possible choices
c) Guaranteed optimal, because it stores every result it computes
d) Suitable only for problems that cannot be clearly defined

**10.** Which statement about the greedy algorithm matches the course?
a) It always produces the optimal solution, which is why it is preferred to brute force
b) It examines every possible path and keeps the best one found
c) It applies the best possible solution at each stage, but might not always produce an optimal solution
d) It stores the solution of each stage so that no stage is ever repeated

**11.** What does dynamic programming add to simply breaking a problem into sub-problems?
a) The sub-problems are made independent of one another
b) The sub-problems are ordered so that each feeds the next
c) The best-looking sub-problem is solved first at every stage
d) The solutions of the sub-problems are saved so no result is computed again

**12.** A test uses a significance level of 0.05 and the data produce a p-value of 0.02. On the course's rule:
a) The null hypothesis is rejected, because the p-value is below the significance level
b) The null hypothesis is accepted, because a small p-value supports it
c) The result is inconclusive until the significance level is raised
d) The null hypothesis is rejected, which proves the effect is real

## Section B — Short answer (3)

**13.** Name the six computational methods taught in Lesson I and give a one-line definition of each. Then name the five more sophisticated approaches taught in Lesson II.

**14.** Explain the fundamental principle of divide and conquer: how it breaks a complex problem down, and the key conditions for its effectiveness. Then illustrate it by sorting **2, 8, 4, 9, 3** into descending order with merge sort, showing the splits and the merges.

**15.** Define the greedy algorithm and say how it prioritises choices. Give one real-world scenario where it is useful, then state its drawback and explain, with a short example, why it may fail to give an optimal solution. Finish by naming the approach the course says *does* guarantee an optimal solution, and the proviso attached to that guarantee.

## Answers

**1. b — Express solutions in a form that can be run on a computer, using algorithms, models and simulations.** *Concept: definition of computational approaches.* The definition is about the form the solution takes, not the difficulty of the problem. (d) is dynamic programming, one member of the family.

**2. c — Dynamic programming.** *Concept: the Lesson I inventory.* The six are **problem recognition, backtracking, data mining, performance testing, pipelining, visualisation**. Dynamic programming belongs to the five **more sophisticated** approaches of Lesson II, alongside brute force, divide and conquer, greedy and hypothesis testing.

**3. a — Performance testing.** *Concept: performance testing.* This is the lesson's own mid-lesson question. The method is to come up with a set of test scenarios and success criteria, then measure the system against them — using erroneous data and simulated real-life circumstances (stress testing).

**4. b — Clearly defined; computable; data requirements examined.** *Concept: the three gating factors.* Clearly defined means identifying the current situation, the end goal, how to reach it and possible obstacles; computable means the required calculations are possible given processing times and capacity; data requirements means identifying data types and storage capacity. (a) is the trap: those are **problem recognition's** three factors.

**5. c.** *Concept: the backtracking mechanism.* It checks whether the final state is accepted or rejected and then returns to a previous state to try other unconsidered options; backtracking algorithms most often use recursion to move between states. (a) is dynamic programming, (b) is greedy.

**6. a — Data mining.** *Concept: data mining.* Extracting valuable information from large data sets through unnoticed patterns and underlying relationships, in order to make informed decisions or predict trends. The music-centric social network is the course's own example.

**7. b — Problem recognition.** *Concept: reducing a problem to a more general case.* Problem recognition exists to ensure the proposed solution deals with the **root cause**; identifying the problem's nature and parameters, its criteria for success and its type also opens up reducing it to a general case already solved. A graph appears in the answer, but drawing a graph to explain a route is **visualisation**, a different method.

**8. a.** *Concept: pipelining.* A task is divided into a series of subtasks, each executed by a different process, with the result of one feeding into the next until the whole task is done — as when the total cost of an order is produced by summing the product costs and then adding VAT to that sum. (b) is divide and conquer, (c) brute force, (d) dynamic programming.

**9. b.** *Concept: brute force.* It solves a problem by going through **all possible choices** until a solution is found, relying solely on computing power rather than improving efficiency with advanced techniques — simple and consistent, but very slow. A 4-digit padlock with digits 0–9 gives it 10 000 combinations to work through.

**10. c.** *Concept: the greedy caveat.* The best possible solution is applied at each stage, aiming at the optimal solution overall; but the course states it **might not always produce an optimal solution**, though it does for many problems — and where it does, those solutions are always simple and highly efficient.

**11. d.** *Concept: dynamic programming versus plain decomposition.* The solutions of the sub-problems are **saved** so there is no need to compute the result again; on that basis, provided a solution exists, dynamic programming guarantees an optimal solution can be found, which is why it is mostly used for optimization problems. (b) describes pipelining, (c) greedy.

**12. a.** *Concept: the accept/reject rule.* When the p-value is less than or equal to the significance level, the null hypothesis is rejected; when it is higher, the null is accepted. (b) inverts the meaning of the p-value — the **smaller** it is, the stronger the evidence to reject. (d) overclaims: the course states that rejecting the null hypothesis does not prove something does not exist, only that the evidence is not enough.

**13.** *Concept: the two inventories.* **Lesson I — the six computational methods.** **Problem recognition:** making sure the proposed solution deals with the root cause, by identifying the problem's nature and parameters, specifying its requirement or criteria for success, and determining whether it can be grouped as a specific type of problem (and possibly reduced to a more general case). **Backtracking:** examining more than one possible solution, usually with recursion, moving between problem states and, on reaching a final state, checking whether it is accepted or rejected before returning to a previous state to try unconsidered options. **Data mining:** extracting valuable information from large data sets through unnoticed patterns and underlying relationships, using machine learning and statistical analysis, to inform decisions or predict trends. **Performance testing:** evaluating whether a system or program works as expected before it is released, by measuring it against a set of test scenarios and success criteria, and using what is learned to make it more effective. **Pipelining:** dividing a task into a series of subtasks, each executed by a different process, with each one's result feeding into the next until the whole task is complete. **Visualisation:** using diagrams, graphs and images to illustrate what a problem entails and how to approach its solution, because people process and retain information better as images than as text; it helps humans rather than computers. **Lesson II — the five sophisticated approaches:** brute force, divide and conquer, greedy algorithm, dynamic programming, hypothesis testing.

**14.** *Concept: divide and conquer, its conditions, and merge sort.* **The principle:** a complex problem is **first split into smaller, easier parts**; each of those parts is then **solved**, and the solutions of the parts lead to the solution of the complex problem. The parts are smaller instances of the same kind of problem, so the split can be repeated until the parts are trivial. The military analogy in the notes is a commander occupying **smaller territories one at a time** in order to occupy a large territory. **The conditions for effectiveness:** first, the small easier parts must genuinely be **simpler than the complex whole** — splitting a problem into parts as hard as the original gains nothing; second, **combining the solutions of the parts must be less complicated than solving the original problem directly** — if the recombination costs more than the direct attack, the split has added work rather than removed it. **Merge sort on 2, 8, 4, 9, 3, descending.** Split into `[2, 8]` and `[4, 9, 3]`; split again into `[2]`, `[8]`, and `[4]`, `[9]`, `[3]`. Merge, taking the larger head each time: `[2]` and `[8]` give `[8, 2]`; `[9]` and `[3]` give `[9, 3]`; `[4]` with `[9, 3]` gives `[9, 4, 3]`. Final merge of `[8, 2]` with `[9, 4, 3]`: 8 vs 9 → 9; 8 vs 4 → 8; 2 vs 4 → 4; 2 vs 3 → 3; then the last element, 2. Result: **`[9, 8, 4, 3, 2]`**. Note that descending order is produced inside the merge, by taking the larger head, not by sorting upwards and reversing at the end.

**15.** *Concept: greedy algorithms, their drawback, and dynamic programming's guarantee.* **Definition:** with a greedy algorithm, the **best possible solution is applied at each stage** of solving the problem; by always selecting the best optimal path available at that stage it aims at reaching the optimal solution to the whole problem. It prioritises the **immediate** optimal choice and never revisits a choice once made — which is what makes it fast. The course's simple case is a set of numbers 5, 9, 1, 4, 2, 6: the largest single digit is found by taking the best available at once (9), and the largest two-digit number by taking the best, then the best of what is left (96). Its activity-selection case takes, at each stage, the activity that finishes earliest among those still available. **A real-world scenario:** a delivery driver with a list of undelivered orders who always drives to the nearest one — a rule that is simple, immediate and needs no view of the whole route. **The drawback:** the course states that greedy algorithms **might not always produce an optimal solution**, although they do for many problems, and where they do the solutions are always **simple and highly efficient**. The reason is that "best at this stage" and "best overall" are different quantities: at each stage the algorithm compares only the options leading out of where it currently stands, so it cannot see that a slightly worse choice now would open a much better remainder. **Example:** in a city with one-way streets, order A is 2 minutes from the restaurant and order B is 5, but the leg A → B takes 12 minutes while B → A takes 3. Greedy delivers A first because 2 beats 5, and then pays the 12-minute leg — 14 minutes to deliver both, against 8 minutes for the route that goes to B first. **The approach with the guarantee:** **dynamic programming**, which breaks the problem into sub-problems and saves their solutions so nothing is recomputed; the proviso is that it guarantees an optimal solution can be found **provided that a solution to the problem exists**, and it is mostly applied to optimization problems, where a minimum or a maximum is sought.
