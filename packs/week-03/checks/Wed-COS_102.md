# Wednesday — COS_102 nightly check

*Computational approaches to problem solving, treated conceptually.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** Merge sort is applied to a list of 16 numbers. How many rounds of splitting are needed before every part holds one number, how many single-number parts result, how many merge operations happen in total, and how many rounds of merging?
A. 4 rounds of splitting, 16 parts, 16 merges, 4 rounds of merging
B. 4 rounds of splitting, 16 parts, 15 merges, 4 rounds of merging
C. 8 rounds of splitting, 16 parts, 15 merges, 8 rounds of merging
D. 4 rounds of splitting, 16 parts, 8 merges, 4 rounds of merging

**10.** Name the computational approach at work in each case, in order. (a) A music platform studies millions of song ratings to find which artists are gaining listeners. (b) A manager is shown the city's roads as a graph with coloured routes to make clear why one plan is faster. (c) A program is fed deliberately corrupted files before release to check that it copes. (d) A team assumes two payment methods are equally good, then collects data to see whether that assumption can be rejected.
A. Data mining, visualisation, performance testing, hypothesis testing
B. Data mining, visualisation, hypothesis testing, performance testing
C. Hypothesis testing, visualisation, performance testing, data mining
D. Data mining, simulation, performance testing, hypothesis testing

**11.** Coins of value 1, 3 and 4 are available. A dynamic programming table stores the least number of coins for each amount from 0 upwards, each entry found from the saved entries for smaller amounts. What is the least number of coins for the amount 6, and which coins make it?
A. 3 coins: 4 + 1 + 1
B. 2 coins: 4 + 2
C. 6 coins: 1 + 1 + 1 + 1 + 1 + 1
D. 2 coins: 3 + 3

**12.** Divide and conquer is worth applying only when two conditions hold. Finding the median of a list by splitting it in half and taking each half's median gains nothing. Which condition fails, and why?
A. The parts must be simpler than the whole; each half is just as hard to handle as the full list
B. The parts must be equal in size; two halves of an odd-length list differ by one element
C. Combining the parts must cost less than solving the whole; two half-medians do not give the whole list's median
D. The parts must not share elements; the two halves overlap at the middle of the list

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

**9. B** — *Counting splits and merges in divide and conquer.* Each round halves every part: 16 → 8 → 4 → 2 → 1, which is 4 rounds and leaves 16 parts of one number each. Merging reverses that: 16 parts pair into 8 (8 merges), then 4 (4 merges), then 2 (2 merges), then 1 (1 merge), so 8 + 4 + 2 + 1 = 15 merges over 4 rounds.

16 merges counts one per element; 8 merges counts only the first round of merging; 8 rounds doubles the count by treating each pair of parts as its own round.

**10. A** — *Matching situations to computational approaches.* (a) is data mining: valuable patterns pulled from a large data set. (b) is visualisation: diagrams and graphs drawn so that a person understands the problem, the beneficiary being the human rather than the computer. (c) is performance testing: the program checked against test scenarios, here erroneous data, before release. (d) is hypothesis testing: a null hypothesis of no difference stated, with data deciding whether to reject it.

Swapping (c) and (d) confuses testing a program with testing a prediction. Putting hypothesis testing first ignores that (a) states no hypothesis. Simulation would mean modelling a system to watch its behaviour, which is not what (b) does.

**11. D** — *Building a dynamic programming table.* With best(0) = 0 and best(a) = 1 + the smallest of best(a − 1), best(a − 3) and best(a − 4), the table for amounts 0 to 6 reads 0, 1, 2, 1, 1, 2, 2. So best(6) = 1 + min(best(5), best(3), best(2)) = 1 + 1 = 2, taken as 3 + 3.

4 + 1 + 1 is what a greedy rule gives by grabbing the largest coin first, and it costs 3 coins; 4 + 2 uses a 2 coin that does not exist; six 1 coins ignores the larger coins altogether.

**12. C** — *Conditions for divide and conquer.* The two conditions are that the smaller parts are genuinely simpler than the whole, and that combining their solutions costs less than solving the original directly. Each half's median is easy to find, so the first condition holds; but the two medians do not determine the median of the whole list, and recovering it means going back over the data, so the combination step is as costly as the original problem.

The halves really are simpler, so the first option is false; equal sizes and disjoint parts are not conditions of the method at all, and the halves do not overlap.
