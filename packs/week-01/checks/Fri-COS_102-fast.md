# Friday — COS_102 fast-hour check

*This session is Week 1 applied - the method worked through on concrete problems.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

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

**9. (show your working)** Write pseudocode that reads five grades, computes their average as Grade, prints the average, then prints PASS if the average is 45 or more and FAIL otherwise. Show your working.

**10. (show your working)** This pseudocode has a fault.

```
READ G1, G2, G3, G4, G5
Grade = (G1 + G2 + G3 + G4) / 5
IF Grade > 44 THEN PRINT "PASS" ELSE PRINT "FAIL"
```

State the fault and write the corrected line. Then give one set of five grades on which the faulty and corrected programs print different words, and one set on which they print the same word, showing both Grade values each time.

**11. (show your working)** Trace this pseudocode with N = 4 and the pairs (stock, point) = (3, 5), (12, 5), (5, 5), (7, 10) and write down everything it prints, in order. Show your working.

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

**12. (show your working)** Three proposals are made for the shop's reorder problem. (a) Split it into: read the stock and sales figures; work out each product's reorder point; compare stock with the reorder point; print the order list. (b) Handle the fast-selling products this month and the slow-selling ones next month. (c) Write the whole program first, then cut the finished code into three files. Which proposal is a genuine decomposition of the problem, and why are the other two not?

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

**9.** *Writing the grade-average pseudocode.* Model answer:

```
READ G1, G2, G3, G4, G5
Grade = (G1 + G2 + G3 + G4 + G5) / 5
PRINT Grade
IF Grade >= 45 THEN
    PRINT "PASS"
ELSE
    PRINT "FAIL"
ENDIF
```

A correct answer must read five values, add all five inside brackets before dividing by 5, print the average, and have a decision with both a PASS branch and a FAIL branch. A loop that reads five grades into a running total is also accepted, as is the test Grade > 44 when the grades are whole numbers. G1 + G2 + G3 + G4 + G5 / 5 without brackets divides only G5 and is wrong.

**10.** *Fixing a wrong-divisor fault and choosing test inputs.* The sum leaves out G5 while still dividing by 5, so Grade is too small by G5/5. Corrected line: Grade = (G1 + G2 + G3 + G4 + G5) / 5. The program still runs, so this is a logical error.

Exposing input: 50, 50, 50, 50, 50 gives corrected Grade 50 (PASS) but faulty Grade 200 / 5 = 40 (FAIL). Non-exposing input: 60, 60, 60, 60, 0 gives 48 both ways (PASS), or 30, 30, 30, 30, 30 gives 30 corrected and 24 faulty, both FAIL. A correct answer names the missing G5, gives the corrected line, and gives two inputs with their Grade values: one where the words differ and one where they agree. Any inputs that actually produce those results are accepted; an exposing input must have G5 > 0 and the corrected Grade above 44 with the faulty one at or below 44.

**11.** *Tracing a loop with a decision and a boundary case.* i = 1: 3 ≤ 5 true, prints Reorder 1, low = 1. i = 2: 12 ≤ 5 false, nothing printed. i = 3: 5 ≤ 5 true because the test is ≤ not <, prints Reorder 3, low = 2. i = 4: 7 ≤ 10 true, prints Reorder 4, low = 3. After the loop it prints 3.

A correct answer lists exactly four lines: Reorder 1, Reorder 3, Reorder 4, then 3. Leaving out product 3 (treating the test as stock < point) gives Reorder 1, Reorder 4, 2 and is wrong.

**12.** *Decomposition versus phasing and file-splitting.* Only (a) is decomposition: the problem is broken into smaller problems, each of which can be solved on its own, and solving all of them solves the whole. (b) does not divide the problem at all; it schedules the same undivided problem in two time periods, so each period still faces the full difficulty. (c) divides the finished code, not the problem; the thinking was done in one piece and the split happens after the solution already exists.

A correct answer picks (a), explains that its parts are separately solvable subproblems whose solutions combine, and says that (b) is phasing in time and (c) is splitting the product rather than the problem.
