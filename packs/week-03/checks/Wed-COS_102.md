# Wednesday — COS_102 nightly check

*Computational approaches to problem solving, treated conceptually.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** A test is run at a significance level of 0.05 and the data give a p-value of exactly 0.05. What is the correct decision?
A. Reject the null hypothesis
B. Accept the null hypothesis
C. Lower the significance level and repeat the test
D. The null hypothesis is proved false

**2.** A researcher's hypothesis is: "Drivers who use the new app deliver faster than drivers who do not." Which statement is the null hypothesis?
A. Mean delivery time with the app is less than without it
B. Mean delivery time with the app is greater than without it
C. Mean delivery time with the app equals the mean without it
D. The app cuts delivery time by 5%

**3.** Roads: A to B costs 1, A to C costs 4, B to D costs 9, C to D costs 2. A greedy algorithm goes from A to D by always taking the cheapest road out of its current town. What does greedy pay, and what is the true cheapest cost?
A. Greedy 6, cheapest 6
B. Greedy 10, cheapest 10
C. Greedy 3, cheapest 6
D. Greedy 10, cheapest 6

**4.** The naive recursive Fibonacci is `fib(n) = fib(n − 1) + fib(n − 2)` with `fib(0) = 0` and `fib(1) = 1`. When `fib(6)` is called, how many separate times is `fib(2)` computed?
A. 5
B. 1
C. 8
D. 3

**5.** A maze is drawn as a tree. The start has a left path and a right path. The left path reaches a junction with two branches, both dead ends. The right path reaches a junction whose left branch is a dead end and whose right branch is the exit. Backtracking always tries left before right. How many dead ends does it reach before finding the exit?
A. 2
B. 4
C. 3
D. 1

**6.** A program computes an order total in three stages. Stage 1 sums the product prices. Stage 2 takes that sum and adds VAT. Stage 3 takes that result and adds the delivery fee. Each stage runs as a separate process and cannot start until the previous one hands over its result. Which computational approach is this?
A. Divide and conquer
B. Pipelining
C. Dynamic programming
D. Backtracking

**7.** An estate has 30 houses joined by candidate pipe routes, each with a cost. The task is the cheapest set of pipes such that every house is connected to the water supply. Under problem recognition, which general problem is this reduced to?
A. Shortest path between two nodes
B. Sorting a list
C. Binary search
D. Minimum spanning tree of a graph

**8.** A test is run at a significance level of 0.01. Which risk is being accepted by choosing that level?
A. A 1% chance of accepting the null hypothesis when it is false
B. A 1% chance of rejecting the null hypothesis when it is true
C. A 99% chance that the hypothesis is true
D. A 1% chance that the collected data are wrong

**9. (show your working)** Merge sort is applied to a list of 16 numbers. State how many rounds of splitting are needed before every part holds one number, how many single-number parts there are, how many merge operations happen in total, and how many rounds of merging. Show your working.

**10. (show your working)** Name the computational approach at work in each case and give the test that decides it. (a) A music platform studies millions of song ratings to find which artists are gaining listeners. (b) A manager is shown the city's roads as a graph with coloured routes so she can see why one plan is faster. (c) A program is fed deliberately corrupted files before release to check that it copes. (d) A team assumes two payment methods are equally good, then collects data to see whether that assumption can be rejected.

**11. (show your working)** Coins of value 1, 3 and 4 are available. Using dynamic programming, build a table giving the minimum number of coins for each amount from 0 to 6, where each entry is found from the saved entries for smaller amounts. State the minimum for amount 6 and which coins make it. Show your working.

**12. (show your working)** State the two conditions under which divide and conquer is worth applying, and give one example of a task where splitting into halves buys nothing because one of the conditions fails. Explain why it fails.

---

## Answers

**1. A** — *Accept/reject rule at the boundary p-value.* The rule is: p-value less than or equal to the significance level, reject the null hypothesis; p-value greater, accept it. 0.05 ≤ 0.05, so the null hypothesis is rejected.

Accepting treats the rule as strictly less than; changing the level after seeing the data is not part of the rule; rejection means the evidence is strong enough at this level, never that anything is proved.

**2. C** — *Forming the null hypothesis.* The null hypothesis is the initial assumption of no difference: the two groups are equally good, so their mean delivery times are the same. The test then asks whether the data are strong enough to reject that.

Less than is the researcher's own hypothesis, not its null; greater than reverses the claim instead of nullifying it; a 5% cut confuses the null hypothesis with a significance level.

**3. D** — *Greedy choice without an optimality guarantee.* From A the cheapest road is to B (1), and from B the only road on is to D (9), so greedy pays 1 + 9 = 10 and never revisits its choice. The route A, C, D costs 4 + 2 = 6, so greedy missed the optimum.

6 and 6 assumes greedy always finds the optimum; 10 and 10 never checks the route through C; 3 adds the two cheapest roads on the map (1 and 2), which do not join up into a route.

**4. A** — *Repeated sub-problems in naive recursion.* fib(6) calls fib(5) and fib(4); each of those calls splits again, and fib(2) is reached along five different paths: once inside fib(4) via fib(3), once directly in fib(4), and three times inside fib(5). The count is 5, and this repetition is exactly what dynamic programming removes by saving each result.

1 is what the dynamic-programming version does; 8 is fib(6) itself, the value, not the count; 3 counts only the calls inside fib(5).

**5. C** — *Tracing backtracking through a decision tree.* Left path first: left branch is a dead end (1), backtrack, right branch is a dead end (2), backtrack to the start. Right path: left branch is a dead end (3), backtrack, right branch is the exit. Three dead ends are reached before the exit.

2 forgets the dead end on the right path; 4 counts the exit as a dead end; 1 stops counting after the first backtrack.

**6. B** — *Pipelining versus divide and conquer.* The task is divided into a series of subtasks where the result of each process feeds the next, in a fixed order, until the whole task is done. That is pipelining; reordering the stages would break the calculation.

Divide and conquer splits into independent parts solved separately and then combined; dynamic programming saves sub-problem results for reuse; backtracking retreats from rejected states.

**7. D** — *Reducing a problem to a general case.* Houses are nodes, candidate pipes are edges with costs, and the requirement is a cheapest set of edges that leaves every node connected. That is the minimum spanning tree of the graph, so a known algorithm can be applied.

Shortest path connects only two chosen nodes, not all thirty; sorting orders a list and connects nothing; binary search finds one item in sorted data.

**8. B** — *Meaning of the significance level.* The significance level is the probability of rejecting the null hypothesis when it is in fact true. At 0.01 the researcher accepts a 1% risk of concluding that an effect exists when it does not.

Accepting a false null hypothesis is a different error not measured by this level; 99% is not a probability that any hypothesis is true; the level says nothing about errors in the data.

**9.** *Counting splits and merges in divide and conquer.* Each round halves every part: 16 → 8 → 4 → 2 → 1, so 4 rounds of splitting, leaving 16 single-number parts. Merging reverses this: 16 parts merge in pairs to 8 (8 merges), then to 4 (4 merges), then to 2 (2 merges), then to 1 (1 merge): 8 + 4 + 2 + 1 = 15 merges in 4 rounds.

A correct answer states 4 splitting rounds, 16 parts, 15 merges and 4 merging rounds, with the halving sequence shown. 16 merges (one per element) or 8 merges (only the first round) is wrong.

**10.** *Matching situations to computational approaches.* (a) Data mining: valuable patterns are extracted from a large data set to inform decisions; the test is a large data set searched for unnoticed relationships. (b) Visualisation: diagrams, graphs and images help a human understand the problem; the test is that the beneficiary is the person, not the computer. (c) Performance testing: the program is checked against test scenarios and success criteria before release, here with erroneous data; the test is evaluation before release. (d) Hypothesis testing: a null hypothesis of no difference is stated and data decide whether to reject it; the test is a null hypothesis with a p-value.

A correct answer names all four and gives a distinguishing test for each. Calling (c) hypothesis testing is wrong because no statement of prediction is tested, only whether the program works.

**11.** *Building a dynamic programming table.* Rule: best(a) = 1 + the smallest of best(a − 1), best(a − 3), best(a − 4) over the coins that fit, with best(0) = 0. best(1) = 1 (1). best(2) = 2 (1 + 1). best(3) = 1 (3). best(4) = 1 (4). best(5) = 1 + min(best(4), best(2), best(1)) = 2 (4 + 1). best(6) = 1 + min(best(5), best(3), best(2)) = 1 + 1 = 2 (3 + 3).

Final table: 0, 1, 2, 1, 1, 2, 2. Minimum for 6 is 2 coins, 3 + 3. A correct answer shows each entry derived from saved smaller entries and reaches 2 coins for amount 6. Giving 3 coins (4 + 1 + 1) is the greedy answer and is wrong.

**12.** *Conditions for divide and conquer.* Condition 1: the smaller parts must be genuinely simpler than the whole. Condition 2: combining the solutions of the parts must be less complicated than solving the original problem directly; otherwise the split gains nothing. Example: finding the median of a list by splitting it in half. Each half's median is easy, but the medians of two halves do not combine into the median of the whole: the whole list must effectively be examined again, so the recombination is as hard as the original problem and condition 2 fails.

A correct answer states both conditions and gives any example where recombining the partial answers costs as much as the original task (finding a median, summing a list that must then be re-read, or similar), with the reason that combination is not cheaper.
