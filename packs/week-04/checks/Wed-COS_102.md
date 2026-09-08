# Wednesday — COS_102 nightly check

*Week 4 Algorithm Concepts, taken conceptually.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** What does this print?

```python
total = 0
k = 1
while k <= 4:
    total = total + k * k
    k = k + 1
print(total)
```
A. 30
B. 55
C. 10
D. 16

**10.** Numbers are entered one at a time until 0 is entered, and the 0 itself is not counted. Which design prints how many of the entered numbers were negative?
A. Set the counter to 0, read n, then loop while n ≠ 0 testing n < 0, with no further read inside the loop
B. Read n, then loop while n ≠ 0 setting the counter to 0, testing n < 0 and reading the next n
C. Set the counter to 0, read n, then loop while n ≠ 0 testing n < 0 and reading the next n at the foot
D. Set the counter to 0, read n, then loop while n ≥ 0 testing n < 0 and reading the next n at the foot

**11.** Five actions come from a project to find the largest of a set of numbers entered by a user. (a) Ask whether the same algorithm could also find the smallest number. (b) Write three lines: declare and initialise variables; input numbers; determine the maximum and output it. (c) Ask what type of data the user will enter and what result is expected. (d) Notice that the request never fixes how many numbers will be entered. (e) Replace 'input numbers' with a loop that prompts, reads, compares with the current maximum and counts, until a sentinel is entered. In what order do these match the five algorithm development steps?
A. c, d, b, e, a
B. d, c, b, e, a
C. d, c, e, b, a
D. a, d, c, b, e

**12.** A linear search checks n items one at a time for a target value. How many comparisons does it make in the best case and in the worst case, and why is the worst case the figure usually quoted?
A. 1 and n; the worst case is the most likely input
B. 1 and n/2; the worst case is the average over all inputs
C. n and n²; the worst case guarantees an upper bound for any input of size n
D. 1 and n; the worst case guarantees an upper bound for any input of size n

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

**9. A** — *Tracing an accumulator step by step.* The running totals are 0 + 1 = 1, 1 + 4 = 5, 5 + 9 = 14 and 14 + 16 = 30. At k = 5 the test k ≤ 4 fails and 30 is printed.

55 runs one pass too many and adds 25; 10 adds k rather than k × k; 16 keeps only the last square instead of accumulating.

**10. C** — *Writing a sentinel-controlled counting loop.* The counter is set once before the loop; the condition tests the sentinel, n ≠ 0; the body adds 1 when n < 0 and then reads the next n so the condition sees a fresh value; the count is printed after the loop. For 4, −3, −7, 8, 0 it prints 2.

With no read inside the body the condition never changes and the loop runs forever. Setting the counter to 0 inside the loop throws the count away on every pass. The condition n ≥ 0 stops at the first negative number, which is exactly the case being counted.

**11. B** — *Ordering the algorithm development steps.* Step 1 is the problem description, and (d) is where the description is found to be incomplete. Step 2 is problem analysis, and (c) fixes the starting and ending points. Step 3 is the high-level algorithm, the three main parts in (b). Step 4 is refinement, and (e) adds detail to one of those parts. Step 5 is review, and (a) asks whether the algorithm solves a more general problem.

Putting (c) first analyses a description not yet known to be incomplete; swapping (b) and (e) puts the refined detail before the plan it refines; starting with (a) reviews an algorithm that does not exist.

**12. D** — *Best case versus worst case time complexity.* The best case is the target sitting first: 1 comparison. The worst case is the target last or absent: n comparisons. The worst case is the figure quoted because it is a promise that holds for every input of size n, so it can be relied on for planning and for comparing two algorithms.

The worst case is neither the most likely input nor the average; n/2 is the average when the target sits at a random position; n and n² belong to a method that compares every pair rather than scanning once.
