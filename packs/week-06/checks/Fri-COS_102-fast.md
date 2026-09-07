# Friday — COS_102 fast-hour check

*Applied pseudocode.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** What is printed, in order?

```
FOR i = 1 TO 3
    FOR j = 1 TO i
        PRINT i * j
    ENDFOR
ENDFOR
```
A. 1 2 3 4 6 9
B. 1 4 9
C. 1 2 4 3 6 9
D. 1 2 3 2 4 6 3 6 9

**2.** The user types 5, 8, 3, 0. Which line completes the loop so that 16 is printed?

```
SET t TO 0
READ n
WHILE n <> 0
    SET t TO t + n
    ____
ENDWHILE
PRINT t
```
A. READ n
B. SET n TO n - 1
C. SET t TO 0
D. INCREMENT n

**3.** This prints 1 2 3 4. Which single change makes it print 1 2 3 4 5?

```
SET k TO 1
WHILE k < 5
    PRINT k
    SET k TO k + 1
ENDWHILE
```
A. Change SET k TO 1 to SET k TO 0
B. Move PRINT k below SET k TO k + 1
C. Change k < 5 to k > 5
D. Change k < 5 to k ≤ 5

**4.** What is printed?

```
SET n TO 10
REPEAT
    PRINT n
    SET n TO n + 5
UNTIL n > 5
```
A. Nothing is printed
B. 10
C. 10 15
D. It never stops

**5.** Which fragment prints 10, 8, 6, 4, 2 in that order?
A. SET k TO 10 / WHILE k > 2 / PRINT k / SET k TO k − 2 / ENDWHILE
B. SET k TO 10 / WHILE k > 0 / PRINT k / SET k TO k − 2 / ENDWHILE
C. SET k TO 10 / REPEAT / SET k TO k − 2 / PRINT k / UNTIL k = 0
D. FOR k = 2 TO 10 / PRINT k / ENDFOR

**6.** What is printed?

```
SET n TO 4321
SET c TO 0
WHILE n > 0
    SET n TO n DIV 10
    INCREMENT c
ENDWHILE
PRINT c
```
A. 3
B. 432
C. 5
D. 4

**7.** What is printed?

```
SET p TO 1
FOR i = 1 TO 4
    SET p TO p * 3
ENDFOR
PRINT p
```
A. 81
B. 27
C. 243
D. 12

**8.** In pseudocode, what does indenting the lines between WHILE and ENDWHILE tell the reader?
A. Marks keywords apart from ordinary words
B. Keeps each line to one statement
C. Shows which statements belong to which construct
D. Keeps the statements language independent

**9. (show your working)** Write pseudocode that reads marks until −1 is entered and then prints the highest mark entered. If the very first entry is −1, print 'no marks' instead.

**10. (show your working)** Trace this, giving the values of a and b after each pass of the loop and the printed value. Show your working.

```
SET a TO 12
SET b TO 18
WHILE a <> b
    IF a > b THEN
        SET a TO a - b
    ELSE
        SET b TO b - a
    ENDIF
ENDWHILE
PRINT a
```

**11. (show your working)** A flowchart runs: Start; READ n; s = 0; decision 'Is n > 0?'; Yes → s = s + (n MOD 10); n = n DIV 10; back to the decision; No → PRINT s; Stop. Write it as pseudocode, using the loop construct that matches where the chart tests its condition, and show what it prints for n = 4321.

**12. (show your working)** Pseudocode cannot be run. Explain what the testing and refining step consists of, and name two input cases you would test for a fragment that reads a count, reads that many marks, and prints their average.

---

## Answers

**1. C** — *Tracing nested FOR loops.* The inner loop runs i times. i = 1: j = 1, prints 1. i = 2: j = 1, 2, prints 2 4. i = 3: j = 1, 2, 3, prints 3 6 9. Output: 1 2 4 3 6 9.

'1 2 3 4 6 9' lists the values sorted rather than in the order printed; '1 4 9' runs the inner loop once with j = i; the nine-value option runs the inner loop 1 TO 3 every time, ignoring the bound i.

**2. A** — *Completing a read-ahead loop.* The value read before the loop is added, then the next value must be read at the foot of the body so the condition tests it: 5 + 8 + 3 = 16, and the 0 ends the loop without being added.

SET n TO n − 1 ignores the typed values and counts 5 + 4 + 3 + 2 + 1 = 15; SET t TO 0 never changes n, so the loop never ends and the total is wiped anyway; INCREMENT n moves n away from 0 forever.

**3. D** — *Fixing an off-by-one loop condition.* The loop stops as soon as k reaches 5, so 5 is never printed. Allowing k = 5 through the test (k ≤ 5) gives 1 2 3 4 5.

Starting at 0 prints 0 1 2 3 4; moving the print below the increment prints 2 3 4 5; k > 5 is false at once and prints nothing.

**4. B** — *REPEAT-UNTIL runs its body at least once.* REPEAT-UNTIL tests at the bottom, so the body runs before any test: 10 is printed, n becomes 15, and 15 > 5 is true, so the loop stops. Output: 10.

'Nothing' treats the loop as pre-tested with a condition that is already true; '10 15' runs one pass too many; 'never stops' reads UNTIL as WHILE and keeps looping while n > 5.

**5. B** — *Choosing the correct loop implementation.* Start at 10, print, subtract 2, and keep going while k is still positive: 10 8 6 4 2, and the loop stops when k = 0.

k > 2 stops one value early and prints 10 8 6 4; the REPEAT version subtracts before printing and gives 8 6 4 2 0; the FOR counts upward by 1 and prints 2 3 4 5 6 7 8 9 10.

**6. D** — *Tracing integer division in a loop.* DIV drops the last digit each pass: n = 432, 43, 4, 0, with c counted up on each of those four passes. When n = 0 the test fails and 4 is printed: the number of digits.

3 stops when n drops below 10, missing the pass that takes 4 to 0; 432 prints n after one pass instead of c; 5 counts the failed test as a pass.

**7. A** — *Tracing a product in a FOR loop.* Four passes, each multiplying by 3: 3, 9, 27, 81. Printed: 81.

27 runs only three passes; 243 runs five; 12 adds 3 on each pass instead of multiplying.

**8. C** — *The pseudocode layout rules.* Indentation shows which statements are inside the loop body and which come after it; without it a reader cannot tell whether a line is repeated or executed once.

Keywords are set apart by writing them in capitals; one statement per line is a separate rule about what a line holds; language independence is about not using the syntax of a particular programming language.

**9.** *Writing a sentinel loop with a running maximum.* Model answer:

```
READ mark
IF mark = -1 THEN
    PRINT "no marks"
ELSE
    SET highest TO mark
    WHILE mark <> -1
        IF mark > highest THEN
            SET highest TO mark
        ENDIF
        READ mark
    ENDWHILE
    PRINT highest
ENDIF
```

A correct answer reads a mark before the test, uses a WHILE (or an equivalent) whose condition is the sentinel, initialises highest from the first mark rather than from 0, compares each mark with highest and updates it, reads the next mark at the foot of the body, and prints after the loop. The 'no marks' case needs the IF before the loop. Not accepted: highest set to 0 (fails if all marks are 0 or the check is on negatives), no second READ, or the sentinel compared as if it were a mark.

**10.** *Tracing a WHILE with a selection inside.* Pass 1: a = 12, b = 18, a > b is false, so b = 18 − 12 = 6; now (12, 6). Pass 2: 12 > 6 is true, so a = 12 − 6 = 6; now (6, 6). The test a <> b is now false, the loop ends, and 6 is printed (the greatest common divisor of 12 and 18).

A correct answer shows (12, 6) then (6, 6) and the output 6. Subtracting the wrong way on pass 1 (a = 12 − 18 = −6) or stopping after one pass and printing 12 is not accepted.

**11.** *Converting a flowchart to pseudocode.* The decision comes before the body and the Yes exit runs back to it, so this is a pre-tested loop: WHILE.

```
READ n
SET s TO 0
WHILE n > 0
    SET s TO s + (n MOD 10)
    SET n TO n DIV 10
ENDWHILE
PRINT s
```

For n = 4321: s = 1, n = 432; s = 3, n = 43; s = 6, n = 4; s = 10, n = 0; loop ends; prints 10 (the sum of the digits). A correct answer uses WHILE with ENDWHILE, keeps the two body lines in the chart's order, prints after the loop, and gives 10. A REPEAT-UNTIL is not the matching construct, because the chart tests before the first pass.

**12.** *Testing pseudocode on paper.* Testing means working through the pseudocode on paper, or scanning it carefully, with specific inputs: keep a table of every variable, follow each line in order, and check that the flow and logic are what was intended and that all required cases are handled. Refining then corrects any errors found or improves the effectiveness of the algorithm.

Cases for the average fragment: a count of 0 (the division by the count has no value, so a guard is needed), a count of 1 (average equals the single mark), and an ordinary case such as three marks 50, 60, 70 giving 60. A correct answer describes the paper trace and names at least two cases, one of them the zero-count boundary.
