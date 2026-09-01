# Wednesday — COS_102 nightly check

*Week 4 Algorithm Concepts, taken conceptually.*

*What an algorithm is as distinct from a computer program. Why the five-step development process puts a high-level algorithm before stepwise refinement. Why representation must supply sequence, selection and repetition.*

*Then the analysis side. What priori analysis can settle before any code exists, and what only posterior analysis can report. What Big O actually measures, and what it deliberately throws away. Why worst case rather than best case is the figure normally quoted.*

*Finally the characteristics and design considerations, as claims about cost and failure. What language independence buys. What robustness means beyond correctness. Why a better algorithm rather than more hardware is what delivers scalability in the e-commerce case study.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The lecture insists that an algorithm should not be dependent on any programming language. What does that independence actually buy you?
a) The same plan can be converted into a program in whichever language the implementer chooses, so the design work survives a change of implementation language.
b) It guarantees the algorithm will take the same number of seconds to run on every machine.
c) It removes the need for the refinement step, because the detail that refinement adds is language-specific anyway.
d) It lowers the algorithm's Big O, because no language or compiler overhead is counted in the total.

**2.** Why does the development process require a high-level algorithm (Step 3) before refinement (Step 4), rather than writing the detailed version straight away?
a) Because focusing on every minor detail before you have at least a solution is time-wasting and costly, so the main parts of the solution are settled first.
b) Because only the high-level algorithm is reviewed in Step 5; the refined version is never reviewed.
c) Because refinement is optional and is only performed when the client complains about the result.
d) Because the client writes the high-level algorithm and the programmer writes the refinement.

**3.** What can posterior analysis tell you that priori analysis cannot?
a) Which of two candidate algorithms has the faster-growing running time as n increases.
b) The actual space and running time requirements of the algorithm once implemented in a particular programming language.
c) Whether the algorithm terminates for every possible input.
d) Whether the original problem description relied on unstated assumptions.

**4.** Big O describes the growth rate of an algorithm. What does using it deliberately discard?
a) The number of times the innermost statement of a nested loop is executed.
b) Constant factors and machine speed, so two algorithms in the same class can still differ substantially in actual seconds.
c) The distinction between best, worst and average case, which Big O has no way of expressing.
d) The input size n, which Big O treats as a fixed quantity.

**5.** Why is worst case time complexity normally the figure quoted for an algorithm, rather than best case?
a) Because the best case is mathematically impossible to determine for most algorithms.
b) Because the best case is always O(1) and therefore carries no information.
c) Because it is a guarantee: it bounds the maximum time for any input of size n, so a system sized on it cannot be caught out.
d) Because worst case and average case turn out to be identical for every algorithm.

**6.** An algorithm produces the right output for every input it was designed for, but its behaviour on an empty input list was never defined at all — it simply was not considered. Which design consideration has been violated?
a) Modularity
b) Extensibility
c) Robustness
d) Simplicity

**7.** Why must an algorithm's representation contain sequence, selection and repetition?
a) Because a flowchart offers exactly three symbol shapes, and each form maps onto one of them.
b) Because these three are simply the components of an algorithm — its input, its process and its output — appearing here under different names.
c) Because Big O analysis can only be applied to algorithms built from these three control structures.
d) Because every programming language provides them, which is what makes the algorithm easily translatable into any of them.

**8.** In the case study, an e-commerce platform serving millions of users fixed its recommendation problem by adopting a well-designed algorithm (collaborative filtering) rather than by buying more servers. Conceptually, why does the algorithm change help where hardware would not?
a) Because collaborative filtering runs in O(1) time regardless of how many users there are.
b) Because hardware can only affect the space an algorithm needs, never the time it takes.
c) Because posterior analysis showed the bottleneck was disk capacity rather than computation.
d) Because a better algorithm changes how the work grows with the number of users, while more hardware only improves the constant factor.

**9. (explain why)** Explain why priori analysis can rank two algorithms against each other even though it never runs either of them, and why that ranking is still trusted.

**10. (explain why)** Explain why a loop whose variable is divided by a constant amount each pass is O(log n) while a loop whose variable is decremented by a constant amount is O(n) — in terms of what happens to the number of passes when n doubles.

**11. (explain why)** Explain why most algorithm failures can be traced back to Step 1, problem description, rather than to the writing of the steps themselves.

**12. (explain why)** Explain why writing the same step out on many separate lines is not a sustainable substitute for repetition — say precisely what breaks as the problem scales.
