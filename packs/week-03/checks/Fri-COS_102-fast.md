# Friday — COS_102 fast-hour check

*The same Week 3 computational approaches, treated as practice.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** A padlock has 4 digits, each from 0 to 9, and the combination has been forgotten. Brute force tries every combination in order, and each attempt takes 3 seconds. What is the worst-case time to open it?
A. 2 h 47 min
B. 4 h 12 min
C. 8 h 20 min
D. 2 min

**2.** In merge sort, two sorted lists are merged by repeatedly comparing their first elements and taking the smaller. Merging [2, 7, 11] with [3, 5, 12], which three elements are output first, in order?
A. 2, 7, 11
B. 2, 3, 5
C. 2, 3, 7
D. 3, 5, 12

**3.** Six activities have start times 1, 3, 0, 5, 8, 5 and end times 2, 4, 6, 7, 9, 9 respectively. You can do only one activity at a time. Using the greedy rule that always picks the activity that finishes earliest among those that do not clash, how many activities can you do?
A. 6
B. 2
C. 5
D. 4

**4.** What does this print?

```python
n = 7
f = [0, 1]
for i in range(2, n + 1):
    f.append(f[i - 1] + f[i - 2])
print(f[n])
```
A. 13
B. 21
C. 8
D. 7

**5.** What does this brute-force program print?

```python
count = 0
for a in range(1, 6):
    for b in range(1, 6):
        if a * b == 12:
            count = count + 1
print(count)
```
A. 1
B. 3
C. 2
D. 4

**6.** A delivery driver with five orders always drives next to whichever undelivered address is nearest to where she is now, and never changes a choice once made. Which computational approach is she using?
A. Divide and conquer
B. Greedy algorithm
C. Dynamic programming
D. Brute force

**7.** A routing program is run once for each driver. Every run recomputes the shortest route from the kitchen to each of the 200 street corners from scratch, although the corners and roads never change between runs. Which change removes the waste?
A. Compute the routes once, save them, and reuse the saved results on later runs
B. Try every possible order of visiting the corners instead
C. Split the city into zones and recompute every zone on every run
D. Drive to the nearest corner each time instead of computing routes

**8.** A sudoku solver fills one empty cell with a digit, moves to the next cell, and whenever it reaches a cell that no digit can fill, it erases the most recent digit and tries the next digit there instead. Which computational approach is this?
A. Brute force
B. Greedy algorithm
C. Pipelining
D. Backtracking

**9. (show your working)** Sort the numbers 6, 2, 9, 5, 1 into descending order using merge sort. Split the list into a first part of two numbers and a second part of three, keep splitting until every part holds one number, then merge, taking the larger head first. Write out every split and every merge. Show your working.

**10. (show your working)** This naive recursive Fibonacci recomputes the same values many times.

```python
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)
```

Rewrite it as a dynamic-programming version that saves each value in a list as it is computed. Then give fib(10) and state how many additions your version performs to reach it. Show your working.

**11. (show your working)** An order has products costing ₦2000 and ₦1500. VAT of 7.5% is charged on the product total, and a delivery fee of ₦500 is added after VAT. Lay this out as a pipeline of three stages, show what each stage passes to the next, and give the final total. Then state the total if the delivery fee were added before VAT instead. Show your working.

**12. (show your working)** A food delivery service in a busy city wants to cut delivery times and fuel costs. Explain how a greedy algorithm would plan a driver's route and how divide and conquer would organise the city's deliveries, and give one way each approach could produce a poor result.

---

## Answers

**1. C** — *Time cost of a brute-force search.* There are 10 × 10 × 10 × 10 = 10 000 combinations, and in the worst case the right one comes last. 10 000 × 3 s = 30 000 s = 500 min = 8 h 20 min.

2 h 47 min uses 1 second per try; 4 h 12 min uses 5040 combinations, forbidding repeated digits; 2 min uses 40 tries, adding the digit positions instead of multiplying.

**2. B** — *The merge step of merge sort.* Compare heads: 2 vs 3, take 2. Then 7 vs 3, take 3. Then 7 vs 5, take 5. The first three outputs are 2, 3, 5; the merge continues with 7, 11, 12.

2, 7, 11 copies the whole first list before looking at the second; 2, 3, 7 takes alternately from each list instead of comparing; 3, 5, 12 starts with the second list.

**3. D** — *Greedy activity selection by earliest finish.* Sort by end time: (1, 2), (3, 4), (0, 6), (5, 7), (8, 9), (5, 9). Take (1, 2). (3, 4) starts after 2, take it. (0, 6) starts before 4, skip. (5, 7) starts after 4, take it. (8, 9) starts after 7, take it. (5, 9) clashes, skip. Four activities: (1, 2), (3, 4), (5, 7), (8, 9), and checking every subset confirms 4 is the maximum.

6 ignores the clashes; 2 picks the earliest start (0, 6) first and is then left with only (8, 9); 5 drops only one of the two clashing activities.

**4. A** — *Tracing the dynamic-programming Fibonacci.* The loop runs for i = 2 to 7 and appends each sum of the previous two saved values: f becomes [0, 1, 1, 2, 3, 5, 8, 13]. f[7] is 13.

21 is f[8], one iteration too many; 8 is f[6], stopping one short because range(2, n + 1) is read as ending before n; 7 prints n instead of f[n].

**5. C** — *Tracing a brute-force double loop.* Every pair (a, b) with a and b from 1 to 5 is tried, 25 pairs in all. a × b = 12 only for (3, 4) and (4, 3), so count ends at 2.

1 treats (3, 4) and (4, 3) as the same pair; 3 includes (2, 6), but 6 is outside range(1, 6); 4 also counts (1, 12) and (12, 1), which are outside the range too.

**6. B** — *Identifying the greedy approach in routing.* At each stage she takes the locally best option, the nearest address, and commits to it. Applying the best possible choice at every stage without revisiting it is the greedy algorithm. It is fast, and may or may not give the shortest total route.

Divide and conquer would split the orders into groups solved separately; dynamic programming would save and compare sub-route results; brute force would try every order of the five addresses.

**7. A** — *Diagnosing wasteful recomputation.* The same sub-problem, the route to each corner, is solved again on every run. Saving each solution so that it never has to be computed again is the dynamic-programming remedy, and it removes the waste without changing the answers.

Trying every order is brute force and far slower; recomputing every zone on every run keeps the waste; driving to the nearest corner changes the routes to a greedy guess rather than removing repeated work.

**8. D** — *Backtracking versus brute force.* The solver follows one option at each step, and when a state is rejected it returns to a previous state and tries the options not yet considered. That is backtracking, and it is what stops it from checking every complete grid.

Brute force would write out every possible full grid and test each; greedy would never erase a choice; pipelining passes results between stages in a fixed series.

**9.** *Tracing merge sort.* Split: [6, 2, 9, 5, 1] → [6, 2] and [9, 5, 1]. [6, 2] → [6] and [2]. [9, 5, 1] → [9] and [5, 1]; [5, 1] → [5] and [1]. Merge, larger head first: [6] + [2] → [6, 2]; [5] + [1] → [5, 1]; [9] + [5, 1] → [9, 5, 1]; finally [6, 2] + [9, 5, 1]: compare 6 and 9, take 9; 6 and 5, take 6; 2 and 5, take 5; 2 and 1, take 2; then 1 → [9, 6, 5, 2, 1].

Final answer: 9, 6, 5, 2, 1. A correct answer shows the splits down to single numbers and each merge by comparing heads; the final list alone is not enough. Merging in ascending order, 1, 2, 5, 6, 9, is the wrong direction.

**10.** *Converting naive recursion to dynamic programming.* Model answer:

```python
def fib(n):
    f = [0, 1]
    for i in range(2, n + 1):
        f.append(f[i - 1] + f[i - 2])
    return f[n]
```

The list grows 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, so fib(10) = 55. Each loop pass does one addition, for i = 2 to 10, which is 9 additions; the naive version makes 177 calls for the same value. A correct answer stores results in a list or table, reads earlier entries instead of recursing, gives 55, and gives 9 additions (10 is accepted if the answer counts an addition for f[1] explicitly). A version that still calls fib(n − 1) and fib(n − 2) without saving results is not dynamic programming.

**11.** *Laying out a pipelined calculation.* Stage 1, sum the products: 2000 + 1500 = 3500, passed to stage 2. Stage 2, add 7.5% VAT: 3500 × 1.075 = 3762.5, passed to stage 3. Stage 3, add delivery: 3762.5 + 500 = 4262.5. Final total ₦4262.50.

If delivery came before VAT the order of stages changes and so does the answer: (3500 + 500) × 1.075 = 4300. A correct answer shows the three stages in order with 3500 and 3762.5 handed on, gives ₦4262.50, and gives ₦4300 for the reordered pipeline. Adding VAT as 7.5 rather than 7.5% (3507.5) is wrong.

**12.** *Greedy and divide and conquer applied to routing.* Greedy: at each stop the driver goes to the nearest undelivered order, committing to the locally best choice every time. It is simple and fast, but it carries no optimality guarantee: chasing nearby orders can leave a far-off order for last and force a long return trip, so the total route can be much longer than the best one. Divide and conquer: split the city into zones, plan each zone's deliveries separately (a simpler problem), then combine the zone routes. It can fail when the combination step is hard, for example orders near a zone boundary that would be cheaper to serve from the neighbouring zone, so the combined plan is worse than a whole-city plan.

A correct answer describes the nearest-next rule for greedy and the zone split plus recombination for divide and conquer, and gives a concrete failure for each: greedy's missing guarantee, and the cost of recombining the parts.
