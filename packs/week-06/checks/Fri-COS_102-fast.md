# Friday — COS_102 fast-hour check

*Applied pseudocode.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** Marks are read until −1 is entered, and then the highest mark entered is printed. If the very first entry is −1, 'no marks' is printed instead. Which design does that correctly?
A. Set highest to 0; loop reading marks until −1, updating highest; print 'no marks' if highest is still 0
B. Loop reading marks until −1, setting highest to each mark read; print highest after the loop
C. Read one mark first; set highest to −1; loop while mark <> −1, reading at the top of the body; print highest
D. Read one mark first; if it is −1 print 'no marks'; otherwise set highest to it and loop until −1, reading at the foot

**10.** What are the values of a and b after each pass, and what is printed?

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
A. (12, 6) then (6, 6); prints 6
B. (12, 6); prints 12
C. (12, 6) then (6, 6) then (0, 6); prints 0
D. (−6, 18), and the loop never ends

**11.** A flowchart runs: Start; READ n; s = 0; decision 'Is n > 0?'; Yes to s = s + (n MOD 10); then n = n DIV 10; back to the decision; No to PRINT s; Stop. Which pseudocode matches the chart, and what does it print for n = 5083?
A. REPEAT the two body lines UNTIL n = 0, then PRINT s; prints 16
B. WHILE n > 0 with the two body lines, then PRINT s; prints 5083
C. WHILE n > 0 with the two body lines, then PRINT s; prints 16
D. WHILE n > 0 with PRINT s inside the loop; prints 3 11 11 16

**12.** Pseudocode cannot be run. A fragment reads a count, reads that many marks and prints their average. What does the testing and refining step consist of, and which input case must be tested first?
A. Compile it and run the test inputs; a count of 0, which would divide by zero
B. Trace it on paper with chosen inputs, keeping a table of every variable; a count of 0, which would divide by zero
C. Trace it on paper with chosen inputs, keeping a table of every variable; a count of 100, the largest allowed
D. Read it aloud line by line; three ordinary marks such as 50, 60 and 70

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

**9. D** — *Writing a sentinel loop with a running maximum.* The first mark has to be read before anything else so the 'no marks' case can be caught, and that first mark is the only safe starting value for highest. Inside the loop each mark is compared with highest and replaces it when larger, and the next mark is read at the foot so the condition sees a fresh value. For 40, 72, 55, −1 it prints 72.

Starting highest at 0 breaks when every mark is 0 and confuses 'no marks' with a genuine highest of 0. Setting highest to each mark read keeps the last mark, not the largest. Reading at the top of the body skips the first mark and lets the sentinel −1 be treated as a mark.

**10. A** — *Tracing a WHILE with a selection inside.* Pass 1: a = 12 is not greater than b = 18, so the ELSE runs and b = 18 − 12 = 6, giving (12, 6). Pass 2: 12 > 6 is true, so a = 12 − 6 = 6, giving (6, 6). Now a <> b is false, the loop ends, and 6 is printed, which is the greatest common divisor of 12 and 18.

Stopping after one pass ignores that a <> b is still true then; running a third pass ignores the test that has already failed; a = 12 − 18 = −6 takes the IF branch on pass 1 when the test is false.

**11. C** — *Converting a flowchart to pseudocode.* The decision comes before the body and the Yes exit runs back to it, so the condition is tested before every pass: that is a pre-tested loop, WHILE n > 0 with ENDWHILE and PRINT s after it. For n = 5083 the digits come off the right: s = 3 with n = 508, s = 11 with n = 50, s = 11 with n = 5, s = 16 with n = 0, then the loop ends and 16 is printed.

REPEAT-UNTIL tests after the body, so it would run once even for n = 0, which the chart does not. Printing 5083 gives the input back instead of the digit sum. Printing inside the loop produces four lines rather than one total.

**12. B** — *Testing pseudocode on paper.* Testing pseudocode means walking the lines in order with chosen input values, keeping a table of every variable, and checking that the logic is what was intended and that every required case is handled; refining then corrects whatever the trace exposes. The case that must be covered is a count of 0, because the average divides by the count and there is nothing to divide by.

There is no compiler for pseudocode, so it cannot be run. A count of 100 is an ordinary case with no boundary in it, and no maximum is stated anywhere. Reading aloud is not a trace and would not expose a division by zero.
