# Wednesday — COS_102 nightly check

*Week 4 Algorithm Concepts, taken conceptually.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** A flowchart runs: Start; sum = 0; count = 0; then a loop: enter n; sum = sum + n; count = count + 1; decision 'Is count < 5?' with YES back to 'enter n' and NO on to 'Print sum'; Stop. The user types 6, 2, 9, 3, 5, 8 in that order. What is printed?
A. 20
B. 33
C. 25
D. 5

**2.** How many times does the loop body run?

```
i = 1
while i <= 20:
    i = i + 3
```
A. 7
B. 6
C. 8
D. 20

**3.** What is printed?

```
big = 0
for n in [-4, -9, -1]:
    if n > big:
        big = n
print(big)
```
A. −1
B. −4
C. −9
D. 0

**4.** Algorithm A takes 1000N steps and algorithm B takes N² steps on an input of size N. At N = 500, which needs fewer steps, and by how many?
A. A, by 250 000
B. B, by 250 000
C. B, by 500 000
D. A, by 499 500

**5.** A loop's body runs 3 times when n = 8, 4 times when n = 16 and 5 times when n = 32. Which growth rate does this pattern show?
A. O(n)
B. O(1)
C. O(n²)
D. O(log n)

**6.** What happens when this runs?

```
n = 5
fact = 1
while n > 1:
    fact = fact * n
print(fact)
```
A. It never stops
B. It prints 120
C. It prints 5
D. It prints 1

**7.** Step 3 of a written procedure reads: 'Add a suitable amount to the total.' Which characteristic of an algorithm does that step break?
A. Finiteness
B. Unambiguity
C. Language independence
D. Input

**8.** Before writing any code, a designer works out that an algorithm will execute its innermost statement n² times. Which kind of analysis is this?
A. Posterior analysis
B. Space complexity analysis
C. Priori analysis
D. Average case analysis

**9. (show your working)** Trace this and give the value of total after each iteration, then the printed value. Show your working.

```
total = 0
k = 1
while k <= 4:
    total = total + k * k
    k = k + 1
print(total)
```

**10. (show your working)** Write pseudocode that reads numbers from the user until 0 is entered, then prints how many of the numbers entered were negative. The 0 itself is not counted.

**11. (show your working)** Five actions from a project to find the largest of a set of numbers entered by a user:
(a) Ask whether the same algorithm could also find the smallest number.
(b) Write the three lines: declare and initialise variables; input numbers; determine the maximum and output it.
(c) Ask what type of data the user will enter and what result is expected.
(d) Notice that the request never says how many numbers will be entered.
(e) Replace 'input numbers' with a loop that prompts, reads, compares with the current maximum and counts, until a sentinel is entered.
Put them in the order of the five algorithm development steps and name each step.

**12. (show your working)** A linear search checks n items one at a time for a target value. State the number of comparisons in the best case and in the worst case, and explain why the worst case is the figure usually quoted for an algorithm.

---

## Answers

**1. C** — *Tracing a counted accumulator loop.* Each pass adds one number and raises count by 1. After the fifth number count = 5, so 'count < 5' is false and the loop exits: 6 + 2 + 9 + 3 + 5 = 25. The sixth value, 8, is never read.

33 adds all six typed values, reading past the fifth; 20 stops after four numbers, as if the test happened before the fifth was added; 5 prints count instead of sum.

**2. A** — *Counting iterations of a constant-step loop.* The body runs once for each value of i that passes the test: i = 1, 4, 7, 10, 13, 16, 19 all satisfy i ≤ 20, so the body runs 7 times. After the seventh run i = 22, the test fails, and the loop ends.

6 forgets that 19 still passes the test; 8 counts the failed test at i = 22 as a run; 20 assumes a loop to 20 must run 20 times, ignoring the step of 3.

**3. D** — *Initialising a maximum before the loop.* big starts at 0. Every input is negative, so n > big is false on all three passes and big is never replaced. The code prints 0, a value that was never in the list: initialising the maximum to 0 instead of the first input is the error.

−1 is the true maximum, which a correct version (big = first value) would print; −4 assumes the first value is kept as the maximum; −9 is what a reversed comparison n < big would give.

**4. B** — *Comparing step counts of two growth functions.* A: 1000 × 500 = 500 000 steps. B: 500² = 250 000 steps. B needs fewer, by 500 000 − 250 000 = 250 000. N² has the faster growth rate and overtakes 1000N only once N passes 1000, so for N = 500 the quadratic algorithm is still the cheaper one.

'A, by 250 000' assumes the faster-growing function must already be the slower one; 'B, by 500 000' quotes A's total as the gap; 'A, by 499 500' uses N instead of N² for B.

**5. D** — *Reading a growth rate from iteration counts.* Each time n doubles, the count rises by only 1: 3, 4, 5 are log₂ 8, log₂ 16, log₂ 32. That is the signature of a loop whose variable is multiplied or divided by a constant, O(log n).

O(n) would double the count when n doubles (8, 16, 32 runs); O(n²) would quadruple it; O(1) would give the same count for every n.

**6. A** — *Loop with no update to its control variable.* The condition n > 1 depends on n, but nothing inside the loop changes n. It stays at 5, the test is true on every pass, and the loop repeats forever, so print(fact) is never reached.

120 is what you get if the missing line n = n − 1 were present (5 × 4 × 3 × 2); 5 is fact after a single pass; 1 assumes the body is skipped entirely.

**7. B** — *Characteristics of an algorithm.* 'A suitable amount' can be read in more than one way, so two people following the step would do different things. An algorithm's instructions must be straightforward and clear, which is the unambiguity characteristic.

Finiteness concerns the number of steps being limited and countable, which one vague step does not affect; language independence concerns not depending on a programming language; input concerns having values to process, and the total is such a value.

**8. C** — *Priori versus posterior analysis.* The reasoning happens before the algorithm is implemented in any programming language and is independent of the language, which is priori analysis.

Posterior analysis is carried out after implementation and measures the space and running time the program actually uses; space complexity concerns memory, not statement counts; average case is a category of time complexity, not a type of analysis.

**9.** *Tracing an accumulator step by step.* k = 1: total = 0 + 1 = 1. k = 2: total = 1 + 4 = 5. k = 3: total = 5 + 9 = 14. k = 4: total = 14 + 16 = 30. Then k = 5, the test k ≤ 4 fails, and 30 is printed.

A correct answer lists the running totals 1, 5, 14, 30 in order and states that 30 is printed. Listing 1, 4, 9, 16 gives the squares rather than the totals and is not accepted; 10 comes from adding k instead of k × k; 55 continues to k = 5 and is wrong.

**10.** *Writing a sentinel-controlled counting loop.* Model answer:

```
negatives = 0
enter n
while n ≠ 0
    if n < 0 then negatives = negatives + 1
    enter n
print negatives
```

A correct answer must have a counter set to 0 before the loop, a loop whose condition tests for the sentinel 0, a selection (n < 0) that adds 1 to the counter, a fresh read of n inside the loop so the condition can change, and the print after the loop. A repeat-until form, a Python while True with break, or reading once before the loop and again at the end of the body are all accepted. Not accepted: the counter reset inside the loop, no second read (the loop never ends), or a condition that also counts the 0.

**11.** *Ordering the algorithm development steps.* Order: d, c, b, e, a. (d) is Step 1, problem description, because it spots an incomplete description; (c) is Step 2, problem analysis, fixing the starting and ending points; (b) is Step 3, high-level algorithm development, main parts only; (e) is Step 4, algorithm refinement, adding detail to one high-level line; (a) is Step 5, algorithm review, asking whether the algorithm solves more general problems.

A correct answer gives the order d c b e a and the five step names in that order. Swapping (b) and (e) confuses the high-level algorithm with its refinement; placing (a) first confuses review with description.

**12.** *Best case versus worst case time complexity.* Best case: the target is the first item, 1 comparison. Worst case: the target is last or absent, n comparisons. The worst case is quoted because it is a guarantee: whatever input of size n arrives, the algorithm needs at most that much time, so it can be relied on for planning and for comparing algorithms. The best case describes only the luckiest input and says nothing about the others.

A correct answer states 1 and n, and gives the guarantee (upper bound for any input of size n) as the reason. Mentioning that the average case describes a typical input is a bonus, not required.
