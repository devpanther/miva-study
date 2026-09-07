# Wednesday — COS_102 nightly check

*The Wednesday deep hour takes Week 2's material conceptually, without traces or arithmetic.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** A padlock has three dials, each showing a digit from 0 to 9. A thief uses trial and error, testing each combination once and never repeating one. In the worst case, how many combinations must be tested before the lock opens?
A. 30
B. 999
C. 1000
D. 27

**2.** A route planner stores, for each town on a route, five attributes: name, distance to the next town, population, name of the mayor, and year founded. The task is to print the towns in order with the total length of the route. Which attributes survive abstraction?
A. Name and distance to the next town
B. All five attributes
C. Distance to the next town only
D. Name, distance and population

**3.** For which value of N does this loop run forever?

```
WHILE N != 0
    N = N - 3
ENDWHILE
```
A. N = 9
B. N = 0
C. N = 10
D. N = 12

**4.** A client's brief says only: "Make the checkout page better." It gives no measure of better, no target, and no method. How is this problem classified?
A. Well-defined and routine
B. Ill-defined
C. Well-defined and non-routine
D. Unsolvable

**5.** Three actions are taken on a problem with no standard method. P: choose a strategy and carry it out. Q: collect the facts and figures the problem depends on. R: read the problem closely and pick it apart. Which order follows the procedure for a non-routine problem?
A. Q, R, P
B. R, P, Q
C. P, R, Q
D. R, Q, P

**6.** An engineer models cars on a motorway as water in a pipe and predicts flow well at low traffic. At high traffic the prediction fails, because drivers brake when they see a jam ahead and water does nothing of the kind. Which condition for using analogy has broken?
A. A needed attribute was deleted from the model
B. The number of candidate solutions is too large
C. Criticism of ideas was not deferred
D. The underlying principles are no longer the same

**7.** How many times does the loop body run for n = 6?

```
WHILE n != 1
    IF n is even THEN
        n = n / 2
    ELSE
        n = 3 * n + 1
    ENDIF
ENDWHILE
```
A. 8
B. 7
C. 9
D. 3

**8.** A problem is described as unsolvable in the sense used for substitution puzzles. Which claim is being made?
A. No answer exists for any instance of it
B. No systematic method decides it for every input
C. Any answer would take too long to compute
D. Its answer is unknown at present

**9. (show your working)** Write pseudocode that finds a secret three-digit code by trial and error: it tests 000, 001, 002 and so on in order, stops as soon as the tested value equals the secret, and prints the number of tests made. Then state how many tests it makes when the secret is 250. Show your working.

**10. (show your working)** Consider the loop `WHILE x < 100: x = x + step` with whole-number inputs x and step. Write pseudocode that reads x and step and prints HALTS or LOOPS correctly for every pair of inputs, and explain why this particular halting question is decidable. Show your working.

**11. (show your working)** A shop sells ₦1.2 million a month and must reach ₦2.0 million a month in four months. Using means-ends analysis, set a monthly target for each of the four months with equal increases, then split each month's increase equally between the shop's two branches. Show your working.

**12. (show your working)** For heuristics and for trial and error, state what each strategy costs, the condition under which each fails, and give one situation for each where it would be the wrong choice.

---

## Answers

**1. C** — *Cost of trial and error grows with the candidates.* Each dial has 10 settings and the dials are independent, so there are 10 × 10 × 10 = 1000 candidate combinations. In the worst case the right one is tested last, so 1000 trials are needed. This is why trial and error is only sensible when the candidates are few.

30 adds the three dials instead of multiplying; 999 forgets that 000 is a combination too; 27 uses 3³, confusing the number of dials with the number of settings.

**2. A** — *Applying abstraction to keep only relevant attributes.* Abstraction deletes every attribute that does not help reach the solution. Printing the towns needs the names; totalling the route needs the distances. Population, mayor and founding year play no part, so they go. The model that remains is a list of (name, distance) pairs.

Keeping all five is no abstraction at all; distance alone cannot print the towns; population is not used by either part of the task.

**3. C** — *Finding an input on which a loop never halts.* N falls by 3 each pass, so the loop stops only if it lands exactly on 0, which needs N to be a non-negative multiple of 3. N = 10 goes 10, 7, 4, 1, −2, −5, ... and passes 0 without hitting it, so N != 0 stays true forever.

N = 9 goes 9, 6, 3, 0 and stops; N = 0 fails the test at once and never enters the loop; N = 12 goes 12, 9, 6, 3, 0 and stops.

**4. B** — *Well-defined versus ill-defined problems.* A well-defined problem has clear goals, expected solutions and solution paths. This brief has none of those: nobody can say when it is finished. That is an ill-defined problem.

Both well-defined options need a clear goal, which is missing; a non-routine problem may still have a clear goal, just no standard method; unsolvable is a claim about the absence of any systematic method, not about a vague goal.

**5. D** — *Ordering the steps for a non-routine problem.* The procedure is: study the problem critically (R), gather relevant information (Q), then identify and implement an effective strategy (P). So R, Q, P.

Q, R, P gathers information before knowing what the problem needs; R, P, Q picks a strategy before the facts are in; P, R, Q starts by acting, which is the opposite of the procedure.

**6. D** — *Validity condition of analogy.* Analogy transfers understanding from a known system only as long as the underlying principles are the same. Water does not react to what is ahead of it; drivers do. Once that principle differs, the analogy stops predicting.

Too many candidates is the failure condition of trial and error; deferred criticism is a rule of brainstorming; deleting a needed attribute is a failure of abstraction, not of the analogy.

**7. A** — *Counting iterations of a loop with a decision.* Trace n: 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1. That is eight changes of n, so the body runs 8 times, and the loop halts because n reaches 1.

7 stops counting at n = 2, before the final halving; 9 counts the failing test as an extra pass; 3 counts only the halvings of the first stretch and forgets that 3 is odd.

**8. B** — *What unsolvable means.* Unsolvable means that no algorithm can settle the question for every possible input. Individual instances may well have answers, and some can be found by hand; what is missing is one systematic method that works every time. Strictly, these are unsolvable decision problems.

No answer existing is a different and stronger claim; slow computation is still a systematic method; an answer being unknown today says nothing about whether a method exists.

**9.** *Writing a trial-and-error search loop.* Model answer:

```
READ secret
code = 0
tests = 1
WHILE code != secret
    code = code + 1
    tests = tests + 1
ENDWHILE
PRINT tests
```

For secret = 250 the values 0 to 250 are each tested once, which is 251 tests. A correct answer has a loop that stops when code equals secret, a counter that goes up once per test, and the answer 251 (250 is accepted only if the answer says explicitly that the first test of 000 is not counted). A loop with no stopping condition, or one that prints the code instead of the count, is wrong.

**10.** *Writing a decision procedure for one loop's halting.* The loop ends immediately if x ≥ 100. Otherwise it ends only if x grows, which needs step > 0; with step = 0 or step < 0, x never reaches 100. Model answer:

```
READ x, step
IF x >= 100 OR step > 0 THEN
    PRINT "HALTS"
ELSE
    PRINT "LOOPS"
ENDIF
```

It is decidable because this one loop has a simple rule that answers every input without running it. The general halting problem asks for one method that works for every program, and no such method exists; that does not stop single programs from being analysed. A correct answer must handle both the x ≥ 100 case and the step > 0 case, print LOOPS for step ≤ 0 with x < 100, and say that one specific program can be analysed even though no universal method exists.

**11.** *Means-ends analysis with numeric sub-goals.* The gap is 2.0 − 1.2 = 0.8 million over four months, so each month must add 0.8 / 4 = 0.2 million. Monthly targets: 1.4, 1.6, 1.8, 2.0 million. Each month's 0.2 million increase shared equally by two branches is 0.1 million (₦100,000) extra per branch per month.

A correct answer shows the 0.8 million gap, the 0.2 million monthly step, the four targets 1.4, 1.6, 1.8 and 2.0 million, and the 0.1 million per branch. Targets of 1.2, 1.4, 1.6, 1.8 (starting from the current figure and never reaching the goal) are wrong.

**12.** *Costs and failure conditions of heuristics and trial and error.* A heuristic buys speed by giving up on checking: the decision is made without stopping to think, so it costs rationality and the answer may be sub-optimal. It fails when a sub-optimal answer is not acceptable, for example computing the exact tax owed on an invoice by a rule of thumb. Trial and error costs time, one attempt per candidate, so its cost grows with the number of possible solutions. It fails when the candidates are many, for example finding a six-digit PIN by guessing.

A correct answer names speed traded for rationality (heuristic) and time growing with candidates (trial and error), gives the matching failure condition for each, and one concrete misuse for each.
