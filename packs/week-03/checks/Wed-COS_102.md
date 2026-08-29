# Wednesday — COS_102 nightly check

*Computational approaches to problem solving, treated conceptually. This session covers what a computational approach is and the three factors (clear definition, computability, data requirements) that decide whether one can be used; the mechanism and cost of each of the eleven named approaches — problem recognition, backtracking, data mining, performance testing, pipelining, visualisation, brute force, divide and conquer, greedy algorithms, dynamic programming and hypothesis testing. The emphasis is on why each approach works, what it costs, and the conditions under which it fails: the divide-and-conquer recombination condition, the greedy algorithm's lack of an optimality guarantee against dynamic programming's guarantee, and the meaning of significance level and p-value in the accept/reject rule. It does not ask for traces or worked arithmetic; that is Saturday.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The lesson calls brute force 'simple and consistent, but very slow'. What makes it consistent?
a) It goes through every possible choice, so any solution present in that space will be reached
b) It uses recursion to move systematically from one problem state to the next until the search is exhausted
c) It applies the best available option at each stage, so no stage can be worse than the last
d) It saves the result of each choice it has already evaluated, so no choice is tried twice

**2.** A student splits a scheduling problem into four sub-problems, solves each, and finds the combined solution takes longer to assemble than solving the original problem directly would have. What has gone wrong with the divide and conquer application?
a) The four sub-problems were not of equal size, so their partial solutions cannot be merged into one schedule
b) The recombination step is not simpler than the original problem, so the split buys nothing
c) The sub-problems do not overlap, so no intermediate result could be reused
d) The sub-problems were solved in parallel rather than each feeding into the next

**3.** Both greedy algorithms and dynamic programming work stage by stage, yet only dynamic programming guarantees an optimal solution when one exists. Why?
a) Dynamic programming examines every possible candidate exhaustively, whereas a greedy algorithm examines only a small sample of them
b) Greedy uses recursion and therefore loses information when the recursion unwinds
c) Greedy fixes its choice at each stage, while dynamic programming saves sub-problem solutions and compares combinations
d) Dynamic programming is applied only to problems that have exactly one solution, so optimality is automatic

**4.** What distinguishes pipelining from the other decomposition approaches covered this week?
a) The task is broken into sub-problems whose solutions are stored so they need not be recomputed
b) The task is broken into parts that are each solved independently and then combined into the whole
c) The task is broken into candidate solutions that are generated and tested one after another until one of them is accepted
d) The task is split into a series of subtasks run by different processes, each result feeding the next

**5.** In backtracking, what does the algorithm do when it reaches a final state?
a) It checks whether the state is accepted or rejected, then retreats to a previous state for untried options
b) It records the value reached at that state so that the same state need never be evaluated a second time later
c) It compares that state against all remaining states and keeps whichever scores highest
d) It abandons the current search entirely and begins again from a different starting state

**6.** A test is run at a significance level of 0.05. What does that number mean?
a) There is a 5% probability that the null hypothesis is true
b) There is a 5% risk of concluding that something exists when it does not exist
c) At least 5% of the collected data must contradict the null hypothesis before it can be rejected
d) The p-value produced by the data will fall within 5% of its true value

**7.** A team is deciding whether a problem can be tackled computationally at all. Which consideration belongs to the factor 'the problem needs to be computable'?
a) Whether the current situation, the end goal, the route to it and the possible obstacles have been identified
b) Whether the problem can be grouped as a specific type of problem already understood
c) Whether the required calculations are possible, given processing times and capacity
d) Whether the data types the problem needs and the storage capacity for them are available

**8.** Visualisation is listed as a computational approach even though the lesson says it helps humans rather than computers. On what does its usefulness rest?
a) It lowers the number of calculations a machine has to perform to reach the same answer
b) It restates the problem in a graphical form, such as a graph or a tree, that a computer can then solve automatically
c) It provides a set of test scenarios against which a program's output can be measured
d) People retain information better as an image than as text, so the problem becomes easier to grasp

**9. (explain why)** Explain why a greedy algorithm can return a non-optimal answer even though it selects the best available option at every single stage.

**10. (explain why)** Explain why dynamic programming's saving of sub-problem solutions is what converts it from mere decomposition into an approach that guarantees an optimal solution.

**11. (explain why)** Explain why a p-value higher than the significance level leads to accepting the null hypothesis, and why doing so does not establish that no effect exists.

**12. (explain why)** Explain why backtracking is a cheaper way of examining more than one possible solution than brute force is, even though both may end up considering many candidates.
