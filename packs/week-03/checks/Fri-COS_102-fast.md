# Friday — COS_102 fast-hour check

*The same Week 3 computational approaches, treated as practice.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** Merge sort puts 6, 2, 9, 5, 1 into descending order, splitting into a first part of two numbers and a second part of three. Immediately before the final merge the two sorted parts are 6, 2 and 9, 5, 1. How many head-to-head comparisons does that final merge make, and what list does it produce?
A. 5 comparisons; 9, 6, 5, 2, 1
B. 4 comparisons; 1, 2, 5, 6, 9
C. 4 comparisons; 9, 6, 5, 2, 1
D. 3 comparisons; 9, 6, 5, 2, 1

**10.** A dynamic programming version of Fibonacci starts the list f as 0, 1 and appends f[i − 1] + f[i − 2] for i = 2 up to n. For n = 10, what is f[10] and how many additions does the loop perform?
A. 55, and 10 additions
B. 89, and 9 additions
C. 34, and 8 additions
D. 55, and 9 additions

**11.** An order holds products costing ₦2000 and ₦1500. A pipeline sums the products, then adds VAT of 7.5%, then adds a delivery fee of ₦500. What is the final total, and what would it be if the delivery fee were added before the VAT instead?
A. ₦4262.50, and ₦4300.00
B. ₦4300.00, and ₦4262.50
C. ₦4262.50, and ₦4262.50
D. ₦4007.50, and ₦4300.00

**12.** A delivery service plans routes. A greedy planner sends the driver to the nearest undelivered order at every stop. A divide and conquer planner splits the city into zones, plans each zone separately, then combines the zone routes. Which pair of weaknesses is correct?
A. Greedy: it always produces the longest possible route. Divide and conquer: it cannot be applied to a map
B. Greedy: no guarantee the whole route is shortest. Divide and conquer: a boundary order is served from the costlier zone
C. Greedy: it needs the whole route known in advance. Divide and conquer: no zone route is ever the best one
D. Greedy: it cannot handle more than one driver. Divide and conquer: the zones must be sorted before planning

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

**9. C** — *Tracing the final merge of merge sort.* Compare the two heads and take the larger each time: 6 against 9 takes 9; 6 against 5 takes 6; 2 against 5 takes 5; 2 against 1 takes 2. The first part is then empty, so the remaining 1 is appended with no comparison. That is 4 comparisons and the list 9, 6, 5, 2, 1.

5 comparisons counts one for the last element even though nothing is left to compare it against; 3 stops one comparison early; the ascending list comes from taking the smaller head instead of the larger.

**10. D** — *Dynamic programming Fibonacci: value and work.* The list grows 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, so f[10] = 55. The loop runs for i = 2, 3, up to 10, which is 9 passes, and each pass does exactly one addition: 9 additions. The naive recursion reaches the same value only after 177 calls.

10 additions counts a pass for i = 1, which is already in the starting list; 89 is f[11], one term too far; 34 is f[9], one term short.

**11. A** — *Laying out a pipelined calculation.* Stage 1 sums the products: 2000 + 1500 = 3500. Stage 2 adds VAT: 3500 × 1.075 = 3762.50. Stage 3 adds delivery: 3762.50 + 500 = ₦4262.50. Moving delivery in front of VAT changes what stage 2 receives: (3500 + 500) × 1.075 = ₦4300.00.

The reversed pair puts the two answers the wrong way round; the same figure twice assumes the order of stages does not matter, but VAT is then charged on the fee as well; ₦4007.50 adds 7.5 naira instead of 7.5 per cent.

**12. B** — *Greedy and divide and conquer applied to routing.* Greedy takes the locally best choice at every stop and never revises it, so it is fast but carries no optimality guarantee: chasing near orders can strand a far one until last and force a long return leg. Divide and conquer makes each zone a simpler problem, but the combination step is where it fails: an order just inside one boundary may be far cheaper to serve from the neighbouring zone, and the combined plan cannot see that.

Greedy is not always the worst route, needs no advance knowledge and copes with several drivers; a zone route can be the best one for its zone, and no sorting is required.
