# Friday — COS_102 fast-hour check

*Week 4 Algorithm Concepts taken as practice: tracing the lecture's own algorithms by hand and writing them out.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** What does this print?

```
total = 0
for i in range(1, 6):
    if i % 2 == 0:
        total = total + i
print(total)
```
A. 9
B. 6
C. 15
D. 12

**2.** Which line completes the loop so that it prints 5?

```
n = 40
steps = 0
while n > 1:
    ____
    steps = steps + 1
print(steps)
```
A. n = n - 10
B. n = n // 3
C. n = n - 5
D. n = n // 2

**3.** This prints 6. Which single change makes it print 18?

```
for n in [4, 8, 6]:
    total = 0
    total = total + n
print(total)
```
A. Move `total = 0` to before the `for` line
B. Change `total + n` to `total * n`
C. Indent `print(total)` into the loop
D. Change `print(total)` to `print(n)`

**4.** What does this print?

```
total = 0
count = 0
for n in [5, 8, -1, 7]:
    if n == -1:
        break
    total = total + n
    count = count + 1
print(total, count)
```
A. 20 3
B. 12 3
C. 13 2
D. 13 3

**5.** Which pseudocode prints the sum 1 + 2 + … + n for a given n ≥ 1?
A. total = 0; i = 1; while i < n: total = total + i; i = i + 1; print total
B. total = 0; i = 1; while i ≤ n: total = total + i; print total
C. total = 0; i = 1; while i ≤ n: total = total + i; i = i + 1; print total
D. total = 0; i = 0; while i ≤ n: i = i + 1; total = total + i; print total

**6.** What does this print?

```
count = 0
for i in range(3):
    for j in range(4):
        count = count + 1
for k in range(6):
    count = count + 1
print(count)
```
A. 18
B. 12
C. 72
D. 13

**7.** What does this print?

```
i = 10
while i > 0:
    print(i, end=" ")
    i = i - 3
```
A. 10 7 4
B. 10 7 4 1 -2
C. 7 4 1
D. 10 7 4 1

**8.** A fragment reads five numbers by writing the line `enter n` on five separate lines. Which representation form should replace those five lines?
A. Selection
B. Repetition
C. Sequence
D. Stepwise refinement

**9. (show your working)** Write Python or pseudocode that reads exactly 5 numbers from the user and prints their average. Use a loop, not five separate reads.

**10. (show your working)** Trace this and give the values of a, b and c at the end of each iteration, then the printed output. Show your working.

```
a = 1
b = 1
for k in range(4):
    c = a + b
    a = b
    b = c
    print(c, end=" ")
```

**11. (show your working)** Give the Big O time complexity of each fragment and name the loop rule that decides it. Then say how many times each loop body runs when n = 16.

```
(i)   i = n
      while i > 0: i = i - 1
(ii)  i = n
      while i > 1: i = i // 2
(iii) for i in range(n):
          for j in range(n): s = s + 1
```

**12. (show your working)** To find the largest of n numbers, one student compares every number with every other number, about n² comparisons. Explain why a single pass over the list is enough, and state how many comparisons that single pass needs.

---

## Answers

**1. B** — *Tracing a loop with a selection inside.* i runs 1, 2, 3, 4, 5. The condition keeps only the even values: 2 + 4 = 6.

9 adds the odd values 1 + 3 + 5, the condition reversed; 15 adds every value, ignoring the if; 12 includes 6, reading range(1, 6) as if it reached 6.

**2. D** — *Completing the update line of a loop.* With n = n // 2 the values are 40, 20, 10, 5, 2, 1: five updates before n > 1 fails, so 5 is printed. Halving the variable each pass is the O(log n) pattern.

n = n − 10 gives 40, 30, 20, 10, 0 and prints 4; n = n // 3 gives 40, 13, 4, 1 and prints 3; n = n − 5 takes eight passes to reach 0 and prints 8.

**3. A** — *Accumulator reset inside a loop.* total is set back to 0 on every pass, so it only ever holds the latest n and ends as 6. Moving total = 0 above the loop lets the sum build: 4, then 12, then 18.

total * n keeps multiplying 0 and prints 0; indenting the print produces three lines 4, 8, 6; print(n) prints the last item, 6.

**4. C** — *Sentinel-controlled loop.* 5 and 8 are added (total 13, count 2). The third item is the sentinel −1, so break leaves the loop before the sentinel is added or counted, and 7 is never seen. Output: 13 2.

20 3 ignores the sentinel and adds 7; 12 3 adds the sentinel −1 itself and counts it; 13 3 stops the sum but still counts the sentinel.

**5. C** — *Choosing the correct loop implementation.* The loop must include i = n, add i before moving on, and increase i each pass. For n = 4: 1 + 2 + 3 + 4 = 10.

The i < n version stops before n and prints 6 for n = 4; the version with no i = i + 1 never changes i and never ends; the version starting at i = 0 and incrementing before adding sums 1 to n + 1 and prints 15.

**6. A** — *Counting executions of nested and sequential loops.* The nested loops execute the inner statement 3 × 4 = 12 times. The separate loop that follows adds 6 more: 12 + 6 = 18.

12 forgets the second loop; 72 multiplies 12 by 6 as if the last loop were nested too; 13 adds the three loop lengths 3 + 4 + 6.

**7. D** — *Output of a decrementing loop.* i is printed before it is reduced: 10, 7, 4, 1 all pass the test i > 0. After 1 is printed i becomes −2, the test fails, and the loop ends. Output: 10 7 4 1.

10 7 4 stops one early, testing the next value before printing the current one; 10 7 4 1 −2 prints once more after the test should have failed; 7 4 1 subtracts before printing.

**8. B** — *Sequence, selection and repetition.* The same step is executed several times, and writing it out on separate lines is not sustainable, so a loop (while condition is true, do perform activity) is the right form: repetition.

Selection executes a step only if a condition holds; sequence is the plain step-by-step order the five lines already have; stepwise refinement is a development step, not a representation form.

**9.** *Writing a counted accumulator loop.* Model answer:

```
total = 0
count = 0
while count < 5:
    n = float(input())
    total = total + n
    count = count + 1
print(total / 5)
```

A correct answer must set the accumulator to 0 before the loop, run the loop exactly 5 times (a counter from 0 to 4, or for i in range(5)), read and add inside the loop, and divide by 5 once after the loop. Pseudocode such as 'enter n / total = total + n' inside a counted loop is accepted. Not accepted: a loop running 4 or 6 times, total set to 0 inside the loop, or dividing and printing inside the loop on every pass.

**10.** *Tracing variable updates in a loop.* Iteration 1: c = 1 + 1 = 2, a = 1, b = 2. Iteration 2: c = 1 + 2 = 3, a = 2, b = 3. Iteration 3: c = 2 + 3 = 5, a = 3, b = 5. Iteration 4: c = 3 + 5 = 8, a = 5, b = 8. Printed: 2 3 5 8.

A correct answer shows the four (a, b, c) triples (1, 2, 2), (2, 3, 3), (3, 5, 5), (5, 8, 8) or an equivalent table, and the output 2 3 5 8. The trap is updating b before a, which gives c = 2, 4, 8, 16; that is not accepted.

**11.** *Big O of loops by the update rule.* (i) i decreases by a constant, so O(n); for n = 16 the body runs 16 times. (ii) i is divided by a constant, so O(log n); 16 → 8 → 4 → 2 → 1, the body runs 4 times. (iii) nested loops, complexity equals the number of times the innermost statement runs, n × n, so O(n²); for n = 16 that is 256 times.

A correct answer gives O(n), O(log n), O(n²) with the rules (constant step; divide or multiply by a constant; nested loops count the innermost statement) and the counts 16, 4, 256. Giving O(n) for (ii) or 32 for (iii) is wrong.

**12.** *One-pass maximum versus pairwise comparison.* Keep one variable holding the largest value seen so far, starting from the first number. Each remaining number is compared with it once; if the number is bigger it replaces the current maximum. After the last number the variable holds the maximum, because every number was compared against the largest of those before it. That is n − 1 comparisons, O(n), instead of about n².

A correct answer describes the running-maximum variable, the one comparison per number, and gives n − 1 (accept 'about n' or O(n)). Saying the maximum must be initialised from the first item rather than 0 is a bonus.
