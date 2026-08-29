# COS_102 — Week 3 Retention Set

*Introduction to Problem Solving · Week 3 (21 – 27 Sep 2026) · sit this seven days after the week, notes closed.*

## Multiple choice

**1.** Which of the following describes **pipelining**?

a) Dividing a task into a series of subtasks where each subtask leads to the next, the result of one process feeding into the next until the whole task is completed
b) Splitting a complex problem into smaller independent parts, solving each, and combining the results
c) Going through all possible choices until a solution is found
d) Breaking a problem into sub-problems and saving their solutions so they need not be recomputed

**2.** Before deciding whether computational approaches can be used on a problem, the lesson names three factors to consider. Which of the following is one of them?

a) Determining whether the problem can be grouped as a specific type of problem
b) Examining the data requirements — identifying the required data types and storage capacity
c) Coming up with a set of test scenarios and success criteria
d) Exploring the possibility of reducing the problem to a more general case

**3.** The **significance level** of a test is:

a) The probability that the null hypothesis is true
b) The probability of accepting the null hypothesis when it is false
c) The probability of rejecting the null hypothesis when it is true
d) The number between 0 and 1 that is computed from the collected data

**4.** Which approach is described as guaranteeing that an optimal solution can be found, provided a solution to the problem exists?

a) Greedy algorithm
b) Brute force
c) Backtracking
d) Dynamic programming

**5.** A padlock has 4 digits, each from 0 to 9, and you have forgotten the combination. Using brute force, how many combinations must you be prepared to try?

a) 10,000
b) 40
c) 5,040
d) 9,999

**6.** In backtracking, what happens when the algorithm reaches a final state?

a) It saves the state's result so that the state need not be evaluated again
b) It checks whether the state is accepted or rejected, then returns to a previous state to try options not yet considered
c) It keeps the branch that looked best at the last decision and permanently discards the others
d) It splits the remaining search space into two halves and recurses on each

**7.** Reducing "produce an algorithm that optimises the power cable infrastructure of a building" to "determine the minimum spanning tree of a given graph" is an illustration of:

a) Visualisation
b) Data mining
c) Problem recognition
d) Divide and conquer

**8.** Six activities have start times 2, 4, 1, 6, 9, 6 and end times 3, 5, 7, 8, 10, 10 respectively. You cannot work on more than one activity at a time. What is the maximum number of activities you can perform?

a) 3
b) 5
c) 6
d) 4

**9.** A test is run at a significance level of 0.05 and the data give a p-value of 0.03. The correct conclusion is:

a) Reject the null hypothesis — the evidence against it is strong enough at this significance level
b) Accept the null hypothesis, because 0.03 is a small probability
c) Conclude that the null hypothesis has been proved false
d) Lower the significance level to 0.01 and repeat the test before concluding anything

**10.** Which condition must hold for divide and conquer to be worth applying?

a) The sub-problems must overlap, so that stored results can be reused
b) The smaller parts must genuinely be simpler than the complex whole, and combining their solutions must be less complicated than solving the original directly
c) Each subtask must pass its output to the next subtask in a fixed order
d) Every possible way of splitting the problem must be tried before one is chosen

**11.** A team runs a new program with deliberately erroneous data to check that it handles errors effectively before release. This is an example of:

a) Data mining
b) Hypothesis testing
c) Performance testing
d) Problem recognition

**12.** Visualisation is included among computational approaches because:

a) It reduces the number of computations a machine must perform
b) It converts any problem into graph form so that a computer can solve it automatically
c) It is the standard way of checking that a program's output is correct
d) People often process and retain information better as an image than as text, so it helps humans solve problems more effectively

## Short answer

**13.** Sort the numbers 2, 8, 4, 9, 3 into **descending** order using Merge sort. Write out the split and the merge steps.

**14.** State, in the lesson's own terms, the difference between a greedy algorithm and dynamic programming, and explain why a greedy algorithm may fail to give an optimal solution while dynamic programming does not.

**15.** A researcher's hypothesis is: "Consumption of a particular medicine reduces the chances of heart arrest." State the null hypothesis, then state the rule that decides whether the null hypothesis is rejected or accepted, and say what a rejection does and does not establish.

## Answers

**1. a** — Pipelining is a *series*: each subtask leads to the next and one process's result feeds the next. (b) is divide and conquer, (c) brute force, (d) dynamic programming.

**2. b** — The three factors are: the problem is clearly defined; the problem is computable; the data requirements are examined (data types and storage capacity). (a) and (d) belong to problem recognition, (c) to performance testing.

**3. c** — The significance level is the probability of rejecting the null hypothesis when it is true; 0.05 = a 5% risk of concluding something exists when it does not.

**4. d** — Dynamic programming: provided a solution exists, it guarantees an optimal solution can be found. Greedy carries no such guarantee.

**5. a** — Four independent digit positions, ten values each: 10 × 10 × 10 × 10 = 10,000. Digits may repeat, so it is not 10P4 = 5,040, and 0000 is a valid combination, so not 9,999.

**6. b** — At a final state the algorithm checks acceptance or rejection and then "backtracks" to a previous state to try unconsidered options. Saving results (a) is dynamic programming; discarding alternatives permanently (c) is greedy.

**7. c** — Problem recognition includes exploring the possibility of reducing the problem to a more general case; the minimum-spanning-tree reduction is the lesson's own example.

**8. d** — Choosing by earliest finishing time: (2,3), then (4,5), then (6,8), then (9,10) — four activities. (1,7) and (6,10) both conflict with the chosen set.

**9. a** — The rule is: p-value less than or equal to the significance level → reject the null hypothesis. 0.03 ≤ 0.05, so reject; but rejection is evidence, not proof, which is why (c) is wrong.

**10. b** — Divide and conquer can only work if the small parts are simpler than the whole, and the recombination must cost less than solving the original directly, otherwise the split gains nothing. (a) is the dynamic programming condition, (c) is pipelining.

**11. c** — Performance testing evaluates whether a system or program works as expected *before it is released*; testing with erroneous data is the lesson's own example.

**12. d** — Visualisation works because people process and retain information better as images than as text; it helps humans rather than computers.

**13.** Split 2, 8, 4, 9, 3 → [2, 8] and [4, 9, 3]. Split again → [2] [8], and [4] and [9, 3] → [9] [3]. Merge for descending order (take the larger head first): [2] + [8] → [8, 2]; [9] + [3] → [9, 3]; [4] + [9, 3] → [9, 4, 3]. Final merge [8, 2] with [9, 4, 3]: 9, then 8, then 4, then 3, then 2 → **[9, 8, 4, 3, 2]**. Full marks require both the recursive splitting to single elements and the comparison-by-heads merging, not just the final list.

**14.** A greedy algorithm applies the best possible solution *at each stage*, committing to the locally optimal choice and never revisiting it; dynamic programming breaks the problem into sub-problems and *saves* their solutions so they are not recomputed, and compares the resulting combinations. Greedy may fail because a choice that is best at one stage can close off a better overall completion, and greedy has no mechanism for going back; dynamic programming keeps the sub-problem solutions and so, provided a solution exists, it can find the optimal one. Greedy is nevertheless simple and highly efficient on the problems where its local choice is safe.

**15.** Null hypothesis: *the consumption of the medicine does not reduce the chances of heart arrest.* Rule: if the p-value is less than or equal to the significance level, the null hypothesis is rejected; if the p-value is higher, the null hypothesis is accepted. A rejection means the evidence against the null hypothesis is strong enough at the chosen significance level — it does not prove the medicine works, and, symmetrically, accepting the null hypothesis does not prove that no effect exists; it just means the evidence is not enough.
