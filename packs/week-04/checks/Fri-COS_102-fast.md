# Friday — COS_102 fast-hour check

*Week 4 Algorithm Concepts taken as practice: tracing the lecture's own algorithms by hand and writing them out.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** A fragment must read exactly 5 numbers from the user with a loop and print their average. Starting from count = 0 and total = 0, which combination of loop header and print line does that?
A. `while count <= 5:` with `count = count + 1` in the body, and `print(total / 5)` after the loop
B. `while count < 5:` with `count = count + 1` in the body, and `print(total / 5)` inside the loop
C. `while count < 4:` with `count = count + 1` in the body, and `print(total / 5)` after the loop
D. `while count < 5:` with `count = count + 1` in the body, and `print(total / 5)` after the loop

**10.** What does this print?

```python
a = 1
b = 1
for k in range(4):
    c = a + b
    a = b
    b = c
    print(c, end=" ")
```
A. 1 2 3 5
B. 2 3 5 8
C. 2 4 8 16
D. 2 3 5 8 13

**11.** Give the Big O time complexity of each fragment and how many times each loop body runs when n = 16.

```
(i)   i = n
      while i > 0: i = i - 1
(ii)  i = n
      while i > 1: i = i // 2
(iii) for i in range(n):
          for j in range(n): s = s + 1
```
A. O(n), O(n), O(n²); 16, 16 and 256 runs
B. O(log n), O(n), O(n²); 4, 16 and 256 runs
C. O(n), O(log n), O(n²); 16, 4 and 256 runs
D. O(n), O(log n), O(n²); 16, 4 and 32 runs

**12.** To find the largest of n numbers, one student compares every number with every other, about n² comparisons. A single pass that keeps the largest value seen so far also works. How many comparisons does that single pass need, and why is one pass enough?
A. n − 1; each number is compared once with the largest of all the numbers before it
B. n; each number is compared once with the first number in the list
C. n − 1; each number is compared once with its immediate neighbour
D. n²/2; every pair is still compared, but only in one direction

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

**9. D** — *Writing a counted accumulator loop.* With count starting at 0, the test count < 5 lets the body run for count = 0, 1, 2, 3 and 4, which is exactly 5 reads, and the division happens once after the loop. For 4, 6, 10, 8, 2 the total is 30 and 6.0 is printed.

count <= 5 runs the body 6 times and asks for a sixth number; count < 4 reads only 4 numbers but still divides by 5, printing 5.6 for the same input; printing inside the loop prints five running averages instead of one final figure.

**10. B** — *Tracing variable updates in a loop.* Pass 1: c = 1 + 1 = 2, then a = 1 and b = 2. Pass 2: c = 1 + 2 = 3, a = 2, b = 3. Pass 3: c = 2 + 3 = 5, a = 3, b = 5. Pass 4: c = 3 + 5 = 8, a = 5, b = 8. The output is 2 3 5 8.

2 4 8 16 comes from updating b before a, so both hold the new value and c doubles each pass; 1 2 3 5 prints the old b instead of c; the five-number list runs one pass too many, since range(4) gives four.

**11. C** — *Big O of loops by the update rule.* (i) changes i by a constant step, so the body runs n times: O(n), and 16 runs at n = 16. (ii) divides i by a constant, so the count is log₂ n: 16 → 8 → 4 → 2 → 1 is 4 runs, giving O(log n). (iii) nests two loops of n, so the innermost statement runs n × n times: O(n²), and 16 × 16 = 256.

Calling (ii) O(n) ignores the halving; 32 runs for (iii) adds the two loops instead of multiplying them; the remaining option swaps the first two complexities.

**12. A** — *One-pass maximum versus pairwise comparison.* Set the running maximum to the first number, then compare each of the remaining n − 1 numbers with it and replace it whenever the new number is larger. The running maximum always holds the largest of everything seen so far, so after the last comparison it holds the largest of all n. That is n − 1 comparisons, which is O(n) rather than O(n²).

Comparing against the fixed first number never updates the reference and fails as soon as the first number is not the largest; neighbour comparisons find local order, not the maximum; n²/2 is the pairwise method the single pass replaces.
