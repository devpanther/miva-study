# COS_102 — Week 3 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 4, not this week. Notes closed. 12 MCQ + 3 short answer, about 30 minutes.*

## Section A — Multiple choice (12)

**1.** The course defines computational approaches to problem solving as approaches that:
a) Break every problem into sub-problems whose solutions are stored for reuse
b) Express solutions to problems in a form that can be run on a computer, using advances in computing such as algorithms, models and simulations
c) Replace human judgement with a machine wherever a problem is well defined
d) Convert a problem into a diagram so that its structure can be seen

**2.** Which of the following is **not** one of the factors the course says must be considered before a problem can be solved using computational approaches?
a) The problem needs to be clearly defined — current situation, end goal, how to reach it, possible obstacles
b) The problem needs to be computable — are the required calculations possible, considering processing times and capacity
c) The number of possible solutions needs to be few, otherwise the approach is inefficient
d) The data requirements need to be examined — the required data types and storage capacity

**3.** Reducing "produce an algorithm that optimises the power cable infrastructure of a building" to "find the minimum spanning tree of this graph" is the course's example of:
a) Visualisation  b) Divide and conquer  c) Problem recognition  d) Data mining

**4.** Which describes backtracking as the course states it?
a) Going through all possible choices in turn until a solution is found
b) Considering the options at each step, and on reaching a final state checking whether it is accepted or rejected before returning to a previous state to try other unconsidered options
c) Saving the solution of each state visited so that the state never has to be evaluated again
d) Dividing the search into smaller, easier searches whose results are then combined

**5.** A music-centric social network analyses five-star ratings and playlist shares to find which artists are most popular and which features are least used. This is:
a) Data mining  b) Performance testing  c) Visualisation  d) Hypothesis testing

**6.** _________ deals with evaluating if a program works as expected or not before it is released, and using this knowledge to make it more effective.
a) Performance testing  b) Data mining  c) Pipelining  d) Backtracking

**7.** A program computes an order's total by adding up the product costs, then computing the VAT on that subtotal, then adding the two. Each stage is carried out by a different process and its result feeds the next. This is the course's example of:
a) Divide and conquer  b) Pipelining  c) Dynamic programming  d) Backtracking

**8.** The course says that visualisation — diagrams, graphs and images such as a drawing of Dijkstra's algorithm across a map of cities — is valuable mainly because it:
a) Reduces the storage capacity a problem's data requires
b) Converts a problem into a form a computer can execute directly
c) Helps humans, rather than computers, to solve problems more effectively, since people process and retain information better as images than as text
d) Guarantees that the shortest path found is the optimal one

**9.** You have forgotten the combination of a padlock with 4 digits, each 0–9, and you try 0000, 0001, 0002 and so on. The course uses this to illustrate that brute force:
a) Is simple and consistent but very slow, relying solely on computing power rather than improving efficiency with advanced techniques
b) Saves the outcome of each attempt so that no combination is ever tried twice
c) Applies the best possible option at each stage, and so reaches the answer quickly
d) Examines more than one possible solution and backtracks whenever a state is rejected

**10.** Divide and conquer is effective only when:
a) The problem is an optimization problem, seeking a minimum or a maximum
b) The smaller parts are simpler than the complex whole, and combining their solutions is less complicated than solving the original problem directly
c) The sub-problems overlap, so that solving one supplies the answer to another
d) The number of possible solutions is few

**11.** Which statement matches the course exactly?
a) Greedy algorithms guarantee an optimal solution; dynamic programming only saves results and carries no guarantee
b) Both greedy and dynamic programming guarantee optimal solutions, but only greedy is efficient
c) Greedy algorithms might not always produce an optimal solution, though they do for many problems; dynamic programming guarantees that, provided a solution exists, an optimal one can be found
d) Neither carries any guarantee, which is why both are called heuristics

**12.** A test is run at a significance level of 0.05 and returns a p-value of 0.12. According to the course:
a) The null hypothesis is rejected, because 0.12 is small and a small p-value is evidence against the null
b) The null hypothesis is accepted, because the p-value is higher than the significance level
c) The result proves that the effect being tested does not exist
d) The significance level must be raised to 0.12 so that a decision can be made

## Section B — Short answer (3)

**13.** Name the six computational methods introduced in the first lesson, with one line each on what the method does. Then name the five more sophisticated approaches introduced in the second lesson.

**14.** Divide and conquer, dynamic programming and greedy algorithms all sound like ways of taking a big problem apart. Distinguish the three using the course's definitions, give the condition or guarantee attached to each, and name the course's example of each.

**15.** Explain hypothesis testing as the course presents it: what a hypothesis is, what a null hypothesis is, what the significance level and the p-value each mean, the rule for accepting or rejecting, and what a result does **not** prove. Use the medicine example.

## Answers

**1. b — Express solutions in a form that can be run on a computer, using algorithms, models and simulations.** *Concept: definition of computational approaches.* The three named "advances in computing" are worth quoting verbatim. (a) is dynamic programming, not the general definition.

**2. c.** *Concept: the three preconditions.* "The number of possible solutions must be few" is the condition attached to **trial and error** from Week 2, not one of the three factors. The three are clear definition, computability, and data requirements — and only after all three are considered can the decision to use computational methods be made.

**3. c — Problem recognition.** *Concept: reducing a problem to a more general case.* Problem recognition ensures the solution addresses the **root cause**: identify the nature and parameters, specify the criteria for success, decide whether the problem belongs to a known type, and explore reducing it to a more general case — the minimum-spanning-tree reduction being the course's own illustration.

**4. b.** *Concept: backtracking.* It examines more than one possible solution, mostly using recursion to move between problem states; at a final state it tests acceptance or rejection and then returns to an earlier state for options not yet considered. (a) is brute force, (c) is dynamic programming, (d) is divide and conquer — all three are the neighbours it is confused with.

**5. a — Data mining.** *Concept: data mining.* Extracting valuable information from large data sets by finding unnoticed patterns and underlying relationships, using machine learning and statistical analysis, to inform decisions or predict trends. This is the course's music-network example.

**6. a — Performance testing.** *Concept: performance testing.* The mid-lesson question verbatim. Its method is to devise test scenarios and success criteria and measure the system against them; its examples are testing with erroneous data and simulating real-life circumstances (stress testing).

**7. b — Pipelining.** *Concept: pipelining.* A task divided into a series of subtasks where each leads to the next, each executed by a different process, the result of one feeding into the next until the task is complete. It is not divide and conquer, because the stages are different in kind, strictly ordered, and never combined at the end.

**8. c.** *Concept: visualisation.* The course's distinctive claim is that visualisation helps **humans rather than computers**, and that it is very useful for explaining complex tasks, scenarios or situations. Note that the Dijkstra example is the *drawing* of the algorithm, not the algorithm itself.

**9. a.** *Concept: brute force.* It goes through all possible choices until a solution is found — here 10,000 combinations — relying solely on computing power instead of improving efficiency with advanced techniques, which makes it simple and consistent but very slow. (b), (c) and (d) describe dynamic programming, greedy and backtracking respectively.

**10. b.** *Concept: the effectiveness conditions of divide and conquer.* The parts must genuinely be simpler than the whole, and the combining must be the cheaper operation — otherwise the split buys nothing. (a) is dynamic programming's usual domain, (c) is the condition under which dynamic programming's saving pays off, (d) is trial and error's condition from Week 2.

**11. c.** *Concept: greedy's caveat versus dynamic programming's guarantee.* The course says greedy "might not always produce an optimal solution but they produce an optimal solution to many problems", and that where greedy does succeed the solutions are always simple and highly efficient; the guarantee — provided a solution exists, an optimal solution can be found — is stated of **dynamic programming**. (a) is the reversal, and the single most costly error of the week.

**12. b — The null hypothesis is accepted.** *Concept: p-value against significance level.* The rule is that a p-value less than or equal to the significance level rejects the null, and a p-value higher than it accepts the null; 0.12 > 0.05. (a) misuses "small": what counts is small **relative to the significance level**. (c) is the course's explicit warning — the outcome speaks to the strength of evidence, not to proof.

**13.** *Concept: the two inventories.* **Lesson I, six methods. Problem recognition** — establish the nature, parameters and success criteria of the problem, type it, and consider reducing it to a more general case, so that the solution deals with the root cause. **Backtracking** — examine more than one possible solution, moving between states by recursion, testing acceptance or rejection at a final state and returning to a previous state for unconsidered options. **Data mining** — extract valuable information from large data sets by finding unnoticed patterns and underlying relationships, using machine learning and statistical analysis, to inform decisions or predict trends. **Performance testing** — evaluate whether a system or program works as expected before release, against a set of test scenarios and success criteria, and use the knowledge to make it more effective. **Pipelining** — divide a task into a series of subtasks, each executed by a different process, where the result of one feeds the next until the whole task is complete. **Visualisation** — use diagrams, graphs and images to illustrate what a problem entails and how to approach a solution, helping humans rather than computers. **Lesson II, five sophisticated approaches: brute force, divide and conquer, greedy algorithm, dynamic programming, hypothesis testing.**

**14.** *Concept: three approaches that decompose or optimise, and what actually separates them.* **Divide and conquer** splits a complex problem into smaller, easier parts, solves each, and combines those solutions into the solution of the whole; the parts are smaller instances of the same problem, solved independently. **Condition:** it works only if the smaller parts really are simpler than the complex whole and if combining their solutions is less complicated than solving the original directly. **Example:** merge sort (and the commander occupying smaller territories to take a large one). **Dynamic programming** also breaks the problem into sub-problems, but **saves the solutions of the sub-problems so that there is no need to compute the result again** — the saving is the entire difference, and it only pays where sub-problems repeat. **Guarantee:** provided a solution to the problem exists, an optimal solution can be found; it is used mostly for optimization problems, where a minimum or a maximum is sought. **Example:** the Fibonacci series. **Greedy** does not decompose at all in the same sense: it applies the **best possible solution at each stage**, always selecting the best optimal path, and never revisits a stage. **Caveat:** it might not always produce an optimal solution, although it does for many problems, and where it does, those solutions are always simple and highly efficient. **Example:** taking the largest digit from a set to build the largest number, and the activity-selection problem. In one line: divide and conquer splits and combines; dynamic programming splits, solves and remembers; greedy commits.

**15.** *Concept: hypothesis testing, the null hypothesis, significance level and p-value.* A **hypothesis** is a tentative, intelligent guess about the solution to a problem — a **specific statement of prediction** describing in concrete terms what you expect to happen, and an assumption that **can be tested and proved right or wrong**. The **null hypothesis** is the initial assumption of no difference or no effect: comparing method A with method B, the null is that both are equally good; for the medicine, the hypothesis is that consumption of the medicine reduces the chance of heart arrest, so the **null hypothesis is that consumption of the medicine does not reduce the chance of heart arrest**. Once the null is stated, the whole task becomes determining whether it is true. The **significance level** is the **probability of rejecting the null hypothesis when it is true** — a level of 0.05 indicates a **5% risk of concluding that something exists when it does not** — and it is fixed before the data are examined. The **p-value**, a number between 0 and 1, describes **how likely it is that the null hypothesis is true**; the smaller it is, the stronger the evidence for rejecting the null. **The rule:** when the p-value is less than or equal to the significance level, the null hypothesis is **rejected**; when it is higher, the null is **accepted**. What the result does **not** do is prove anything: as the course puts it, the outcome does not prove that something does not exist — **it just means the evidence is not enough**. So a rejection under a 5% level still leaves a one-in-twenty chance of having rejected a true null, and an acceptance is a failure to find sufficient evidence, not a demonstration that the medicine is inert.
