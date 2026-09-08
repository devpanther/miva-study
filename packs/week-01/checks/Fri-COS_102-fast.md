# Friday — COS_102 fast-hour check

*This session is Week 1 applied - the method worked through on concrete problems.*
*12 questions, straight after the hour. Score out of 12.*

**1.** Trace this pseudocode with the inputs 50, 42, 46, 38, 49. Give the value of Grade and what is printed.

```
READ G1, G2, G3, G4, G5
Grade = (G1 + G2 + G3 + G4 + G5) / 5
IF Grade > 44 THEN
    PRINT "PASS"
ELSE
    PRINT "FAIL"
ENDIF
```
A. Grade = 45, prints FAIL
B. Grade = 44, prints FAIL
C. Grade = 35.2, prints FAIL
D. Grade = 45, prints PASS

**2.** A program prints PASS when Grade > 44 and FAIL otherwise. Someone changes the test to Grade > 45. Four students have averages 44, 44.8, 45 and 46. Which of them are printed PASS by the original program but FAIL by the changed one?
A. 45 only
B. 44.8 and 45
C. 44 and 44.8
D. 44, 44.8 and 45

**3.** Five grades between 0 and 100 are read one at a time in a loop whose body is `READ g` followed by one IF line; after the loop, `PRINT low`. Which starting value and IF line together print the lowest grade?
A. `low = 100` and `IF g < low THEN low = g`
B. `low = 0` and `IF g < low THEN low = g`
C. `low = 100` and `IF g > low THEN low = g`
D. `low = 100` and `IF g < low THEN g = low`

**4.** Complete the missing line so the program prints how many of the five grades are 45 or more.

```
passed = 0
FOR i = 1 TO 5
    READ g
    IF g >= 45 THEN
        ______
    ENDIF
ENDFOR
PRINT passed
```
A. `passed = passed + g`
B. `passed = 1`
C. `passed = i`
D. `passed = passed + 1`

**5.** This should print 45.0 for these grades but prints 9.6. Which change fixes it?

```python
grades = [52, 38, 47, 40, 48]
for g in grades:
    total = 0
    total = total + g
print(total / 5)
```
A. Change `/ 5` to `/ len(grades)`
B. Move `total = 0` to the line before `for`
C. Change `total = total + g` to `total = total + grades`
D. Move `print(total / 5)` inside the loop

**6.** A program is to be written to decide which products a shop should reorder. Which of these is an input to that program?
A. The list of products to reorder
B. Fewer lost sales next month
C. Last month's sales count for each product
D. The spreadsheet package used to run it

**7.** "Of all the possible order quantities for a product, which one gives the lowest total cost while staying within the budget?" Which type of computational problem is this?
A. Search problem
B. Counting problem
C. Optimization problem
D. Decision problem

**8.** A student writing the reorder program never wrote down what "low stock" should mean. Her program compiles, runs and passes every test she wrote, but it reorders products the shop is not short of. Which of the four problem-solving steps went wrong?
A. Understand the problem
B. Create a step-by-step plan
C. Carry out the solution plan
D. Evaluate and refactor

**9.** Five grades are read into G1, G2, G3, G4 and G5. Which pair of lines sets Grade to the average of all five and prints PASS exactly when that average is 45 or more?
A. `Grade = G1 + G2 + G3 + G4 + G5 / 5` then `IF Grade >= 45 THEN PRINT PASS ELSE PRINT FAIL`
B. `Grade = (G1 + G2 + G3 + G4) / 5` then `IF Grade >= 45 THEN PRINT PASS ELSE PRINT FAIL`
C. `Grade = (G1 + G2 + G3 + G4 + G5) / 5` then `IF Grade >= 45 THEN PRINT PASS ELSE PRINT FAIL`
D. `Grade = (G1 + G2 + G3 + G4 + G5) / 5` then `IF Grade > 45 THEN PRINT PASS ELSE PRINT FAIL`

**10.** This pseudocode has a fault: the sum leaves out G5 while the divisor stays 5.

```
READ G1, G2, G3, G4, G5
Grade = (G1 + G2 + G3 + G4) / 5
IF Grade > 44 THEN PRINT "PASS" ELSE PRINT "FAIL"
```

On which set of five grades do the faulty version and the corrected version print different words?
A. 50, 50, 50, 50, 50
B. 60, 60, 60, 60, 0
C. 30, 30, 30, 30, 30
D. 80, 80, 80, 80, 10

**11.** Trace this with N = 4 and the pairs (stock, point) = (3, 5), (12, 5), (5, 5), (7, 10). What does it print, in order?

```
READ N
low = 0
FOR i = 1 TO N
    READ stock, point
    IF stock <= point THEN
        PRINT "Reorder", i
        low = low + 1
    ENDIF
ENDFOR
PRINT low
```
A. Reorder 1, Reorder 4, 2
B. Reorder 2, Reorder 3, 2
C. Reorder 1, Reorder 2, Reorder 3, Reorder 4, 4
D. Reorder 1, Reorder 3, Reorder 4, 3

**12.** A shop's reorder problem is to be broken down before any code is written. Which of these proposals is a genuine decomposition of the problem?
A. Handle the fast-selling products this month and the slow-selling ones next month
B. Read the stock and sales figures; work out each product's reorder point; compare stock with that point; print the order list
C. Write the whole program first, then cut the finished code into three files
D. Give the stock counting to one member of staff and the ordering to another

---

## Answers

**1. D** — *Tracing the grade-average pseudocode.* Sum: 50 + 42 + 46 + 38 + 49 = 225. Grade = 225 / 5 = 45. The test 45 > 44 is true, so PASS is printed.

Grade = 45 with FAIL misreads the test as Grade > 45; Grade = 44 drops G5 and divides the remaining 176 by 4; 35.2 drops G5 but still divides by 5.

**2. B** — *Effect of changing a decision condition on boundary inputs.* Original test Grade > 44: 44 FAIL, 44.8 PASS, 45 PASS, 46 PASS. Changed test Grade > 45: 44 FAIL, 44.8 FAIL, 45 FAIL, 46 PASS. The results differ for 44.8 and 45.

"45 only" forgets that a non-whole average between 44 and 45 is caught too; "44 and 44.8" treats the original test as Grade ≥ 44; "44, 44.8 and 45" thinks 44 passed the original test, but 44 > 44 is false.

**3. A** — *Choosing the correct implementation of a minimum search.* Start low above every possible grade, then replace it whenever a smaller grade appears: low = 100 with IF g < low THEN low = g. After five grades low holds the smallest one. For 70, 35, 90, 35, 60 it ends at 35.

Starting at 0 means no grade is ever below low, so 0 is printed; testing g > low with a start of 100 never updates and prints 100; low = g written backwards as g = low changes the grade, not low, so 100 is printed.

**4. D** — *Completing a counter inside a loop.* Each grade of 45 or more must add one to the count, so the line is passed = passed + 1. For grades 45, 30, 60, 44, 45 it prints 3.

passed = passed + g adds the grades themselves, printing 150 for that input; passed = 1 can never rise above 1 however many pass; passed = i stores the position of the last passing grade, 5, rather than a count.

**5. B** — *Locating a misplaced initialisation from wrong output.* total = 0 sits inside the loop, so every iteration throws away the running total and total ends as the last grade alone: 48 / 5 = 9.6. Moving total = 0 above the for line makes the sum 225 and prints 45.0.

len(grades) is 5 already, so that change prints 9.6 again; adding the whole list to a number is a type error and the program stops; printing inside the loop prints five numbers, the last still 9.6.

**6. C** — *Separating inputs, processes and outputs.* Inputs are the data the program is given to work on. Last month's sales per product is exactly that: it exists before the program runs and the reorder decision is computed from it.

The reorder list is the output the program produces; fewer lost sales is an outcome the shop hopes for after using the output, not data at all; the spreadsheet package is a tool the program runs in, not something it takes in.

**7. C** — *Classifying computational problem types.* The answer is not just any quantity that fits the budget but the best one, the lowest cost. When the best possible solution is the only accepted solution, the problem is an optimization problem.

A search problem would accept any quantity with the property (within budget); a counting problem would ask how many quantities fit; a decision problem would ask a YES or NO question such as "is there a quantity within budget?".

**8. A** — *Diagnosing which problem-solving step failed.* The program does exactly what she planned and coded; the trouble is that the plan was built on an undefined idea of "low stock". The inputs, limits and output conditions were never pinned down, which is the job of the first step, understanding the problem.

The plan and the code faithfully carried out her misunderstanding, so steps 2 and 3 did their jobs; refactoring cannot fix a program that solves the wrong problem.

**9. C** — *Correct pseudocode for a grade average and decision.* All five grades must be added inside brackets before the division, and the pass test must include the boundary, so it is Grade = (G1 + G2 + G3 + G4 + G5) / 5 with IF Grade >= 45. For 50, 42, 46, 38, 49 that gives 225 / 5 = 45 and prints PASS.

Without the brackets only G5 is divided by 5, giving 185.8 for the same grades; dropping G5 from the sum divides 176 by 5 and gives 35.2; Grade > 45 fails a student whose average is exactly 45.

**10. A** — *Choosing test inputs that expose a fault.* The faulty Grade is short by G5 / 5. For 50, 50, 50, 50, 50 it is 200 / 5 = 40, which prints FAIL, while the corrected value 250 / 5 = 50 prints PASS, so the words differ.

For 60, 60, 60, 60, 0 both give 48 and print PASS, because G5 is 0 and the fault costs nothing. For 30, 30, 30, 30, 30 the values 24 and 30 are both at or below 44, so both print FAIL. For 80, 80, 80, 80, 10 the values 64 and 66 are both above 44, so both print PASS.

**11. D** — *Tracing a loop with a decision and a boundary case.* i = 1: 3 ≤ 5 is true, so Reorder 1 and low = 1. i = 2: 12 ≤ 5 is false, nothing printed. i = 3: 5 ≤ 5 is true because the test is ≤ and not <, so Reorder 3 and low = 2. i = 4: 7 ≤ 10 is true, so Reorder 4 and low = 3. The last line prints 3.

Dropping product 3 reads the test as stock < point; Reorder 2 with Reorder 3 comes from reversing it to stock >= point; printing all four ignores the decision entirely.

**12. B** — *Decomposition versus phasing and file-splitting.* Decomposition breaks a problem into smaller problems, each solvable on its own, whose solutions combine into the whole. Reading the figures, computing reorder points, comparing, and printing are four such subproblems.

Splitting the work across two months is phasing in time: each month still faces the whole undivided problem. Cutting finished code into files divides the product rather than the problem, and happens after the thinking is done. Handing parts to two people is delegation, which shares the work without making any part simpler.
