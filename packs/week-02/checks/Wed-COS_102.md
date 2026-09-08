# Wednesday — COS_102 nightly check

*The Wednesday deep hour takes Week 2's material conceptually, without traces or arithmetic.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** A program looks for a secret three-digit code by trial and error. It tests 000, then 001, then 002 and so on in order, and stops as soon as the tested value equals the secret. Counting every value it tests, how many tests does it make when the secret is 250?
A. 250
B. 249
C. 1000
D. 251

**10.** The loop `WHILE x < 100: x = x + step` is run with whole-number values of x and step. Which condition is true exactly when this loop terminates?
A. step > 0
B. x >= 100 OR step > 0
C. x >= 100 AND step > 0
D. x < 100 AND step > 0

**11.** A shop sells ₦1.2 million a month and must reach ₦2.0 million a month in four months, with equal monthly increases. Each month's increase is shared equally between the shop's two branches. What are the four monthly targets and the extra each branch must add per month?
A. 1.2, 1.4, 1.6, 1.8 million; ₦100,000 per branch
B. 1.4, 1.6, 1.8, 2.0 million; ₦200,000 per branch
C. 1.4, 1.6, 1.8, 2.0 million; ₦100,000 per branch
D. 2.0, 2.0, 2.0, 2.0 million; ₦400,000 per branch

**12.** A heuristic and a trial-and-error search each carry a cost that limits where they can be used. Which pairing of strategy with its cost is correct?
A. Heuristic: rationality given up for speed. Trial and error: time growing with the number of candidates
B. Heuristic: time growing with the number of candidates. Trial and error: rationality given up for speed
C. Heuristic: memory for storing candidates. Trial and error: accuracy of the final answer
D. Heuristic: optimality given up for memory. Trial and error: rationality given up for speed

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

**9. D** — *Counting the tests a trial-and-error search makes.* The values tested are 000, 001, up to 250, which is every whole number from 0 to 250 inclusive: 250 − 0 + 1 = 251 tests, the last of them the successful one.

250 forgets that 000 is itself a test; 249 drops both ends; 1000 is the size of the whole search space, the cost of testing every three-digit code, not of stopping at 250.

**10. B** — *Deciding whether one specific loop halts.* If x is already 100 or more the test fails at once and the body never runs, so the loop ends whatever step is. Otherwise x must grow to reach 100, which needs step > 0; with step = 0 or step negative it never gets there. So it terminates exactly when x >= 100 OR step > 0, and this one loop can be decided without running it even though no method decides every program.

step > 0 alone wrongly says x = 150 with step = 0 runs forever. Both AND versions demand a positive step even when the loop is never entered, and x < 100 AND step > 0 also refuses x = 150 with step = 3.

**11. C** — *Means-ends analysis with numeric sub-goals.* The gap between the current state and the goal is 2.0 − 1.2 = 0.8 million, spread over four months, so each month must add 0.8 / 4 = 0.2 million. The targets are 1.4, 1.6, 1.8 and 2.0 million, and 0.2 million split between two branches is ₦100,000 each per month.

Starting the list at 1.2 never reaches the goal inside four months; ₦200,000 per branch gives each branch the whole monthly increase instead of half; the flat 2.0 list sets no sub-goals at all, which is the one thing means-ends analysis exists to do.

**12. A** — *Cost of a heuristic versus trial and error.* A heuristic is a rule of thumb applied without stopping to check, so it buys speed by giving up rationality and may return a sub-optimal answer; it is the wrong choice where an exact figure is demanded, such as the tax owed on an invoice. Trial and error tries one candidate at a time, so its cost is time and grows with the number of candidates; it is the wrong choice for a six-digit PIN, where there are a million of them.

The other pairings swap the two costs, or invent costs of memory and accuracy that neither strategy is defined by.
