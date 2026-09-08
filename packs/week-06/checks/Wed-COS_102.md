# Wednesday — COS_102 nightly check

*Pseudocode concepts: what a pseudocode is and what it is for.*
*12 questions, straight after the hour. Score out of 12.*

**1.** What is printed?

```
SET x TO 3
REPEAT
    SET x TO x * 2
UNTIL x > 40
PRINT x
```
A. 24
B. 48
C. 40
D. 96

**2.** What is printed?

```
SET c TO 0
FOR k = 5 TO 12
    SET c TO c + 1
ENDFOR
PRINT c
```
A. 7
B. 12
C. 5
D. 8

**3.** Which line breaks a rule of pseudocode?

```
1  SET s TO 0
2  FOR i = 1 TO 5
3      READ x
4      SET s TO s + x
5  ENDWHILE
6  PRINT s
```
A. Line 5: a FOR must close with ENDFOR
B. Line 2: a FOR must state a condition, not bounds
C. Line 3: READ is not an input verb
D. Line 1: s may not be set before the loop

**4.** A program reads marks until a negative mark is entered. The very first mark may itself be negative, in which case no mark should be processed at all. Which construct fits?
A. FOR
B. REPEAT-UNTIL
C. WHILE
D. CASE

**5.** The user enters 14. What is printed?

```
READ n
SET r TO n MOD 5
CASE r OF
    0: PRINT "five"
    1: PRINT "one over"
    OTHERS: PRINT r
ENDCASE
```
A. 4
B. 2
C. five
D. one over

**6.** The nine results read are P P F P P P F P P. What is printed?

```
SET passes TO 0
SET failures TO 0
FOR i = 1 TO 9
    READ result
    IF result = "P" THEN INCREMENT passes ELSE INCREMENT failures ENDIF
ENDFOR
PRINT passes, failures
IF passes > 7 THEN PRINT "increase tuition" ENDIF
```
A. 7 2 increase tuition
B. 2 7
C. 7 2
D. 8 1 increase tuition

**7.** What is printed?

```
SET i TO 1
SET s TO 0
WHILE s < 10
    SET s TO s + i
    SET i TO i + 1
ENDWHILE
PRINT i
```
A. 4
B. 5
C. 10
D. 6

**8.** In `CALL SquareRoot with area RETURNING side`, what are `area` and `side`?
A. area is the name of the function; side is its argument
B. Both are values passed into SquareRoot
C. area is printed; side is read from the user
D. area is the value passed in; side receives the result

**9.** Rewrite this with WHILE so that it prints the same total for any list of inputs ending in 0. Which version does that?

```
SET t TO 0
REPEAT
    READ n
    SET t TO t + n
UNTIL n = 0
PRINT t
```
A. WHILE n <> 0 with READ n then SET t TO t + n in the body, and no READ before the loop
B. READ n before the loop, WHILE n = 0 with SET t TO t + n then READ n in the body
C. READ n before the loop, WHILE n <> 0 with SET t TO t + n then READ n in the body
D. READ n before the loop, WHILE n <> 0 with READ n then SET t TO t + n in the body

**10.** What is printed?

```
SET evens TO 0
SET odds TO 0
FOR k = 3 TO 9
    IF k MOD 2 = 0 THEN
        INCREMENT evens
    ELSE
        INCREMENT odds
    ENDIF
ENDFOR
PRINT evens, odds
```
A. 3 3
B. 3 4
C. 4 3
D. 4 4

**11.** Which three rules of pseudocode does this fragment break?

```
set total to 0
READ n
FOR i = 1 TO n
    READ mark; SET total TO total + mark
PRINT total / n
```
A. Lowercase keywords; two statements on one line; the loop counter is never initialised
B. Missing ENDFOR; no comment lines; the variable total is never printed
C. Two statements on one line; missing ENDFOR; READ is used where INPUT is required
D. Lowercase keywords; two statements on one line; the FOR is never closed with ENDFOR

**12.** A student says pseudocode is just a program with the semicolons removed. Which answer gives two correct reasons this is wrong and says how pseudocode is tested instead?
A. Language independent and never executed; tested by tracing it on paper with chosen inputs
B. Language independent and never executed; tested by running it through a pseudocode compiler
C. Fewer keywords and slower to run; tested by running it and comparing the outputs
D. Written after the program and never executed; tested by reading it aloud to the team

---

## Answers

**1. B** — *Tracing a REPEAT-UNTIL loop.* The body runs, then the condition is tested: x = 6 (6 > 40 false), 12, 24 (false), 48 (48 > 40 true, stop). Printed: 48.

24 stops one pass early, testing before the doubling instead of after; 40 assumes the loop halts exactly at the threshold, which x can never equal since it only doubles from 3; 96 runs one pass too many.

**2. D** — *Counting the passes of a FOR loop.* FOR k = a TO b runs the body b − a + 1 times because both bounds are included: k = 5, 6, 7, 8, 9, 10, 11, 12, so c reaches 8.

7 is 12 − 5, forgetting that the loop includes both ends; 12 assumes the loop starts at 1; 5 prints the starting bound instead of the count.

**3. A** — *Closing keywords of constructs.* Each construct closes with its own keyword: FOR ... ENDFOR, WHILE ... ENDWHILE, REPEAT ... UNTIL. ENDWHILE on line 5 closes a loop that was never opened and leaves the FOR unclosed.

A FOR sets its iteration bounds at the top, so line 2 is correct; READ is one of the input verbs (READ, OBTAIN, GET); initialising an accumulator before its loop is exactly where it belongs.

**4. C** — *Choosing a loop by where its condition is tested.* WHILE tests its condition at the top, before the first pass, so if the first mark is negative the body runs zero times. That is the behaviour required.

REPEAT-UNTIL tests at the bottom and always runs its body at least once, so it would process the negative mark; FOR needs the number of passes fixed at the top, and here it is unknown; CASE selects between alternatives and repeats nothing.

**5. A** — *Tracing a CASE construct.* 14 MOD 5 is the remainder of 14 ÷ 5: 14 = 2 × 5 + 4, so r = 4. Neither listed condition matches 4, so the OTHERS branch runs and prints r, which is 4.

2 is the quotient 14 DIV 5, not the remainder; 'five' assumes 14 is a multiple of 5; 'one over' would need a remainder of 1, as 11 or 16 would give.

**6. C** — *Tracing counters and a boundary condition.* Seven results are P and two are F, so the first line printed is 7 2. Then passes > 7 asks whether 7 > 7, which is false, so nothing else is printed.

'7 2 increase tuition' reads the test as passes ≥ 7; '2 7' swaps the two counters; '8 1' miscounts one F as a P.

**7. B** — *Tracing a WHILE loop with two variables.* Track (s, i) after each pass: (1, 2), (3, 3), (6, 4), (10, 5). Now s < 10 is false, the loop ends, and i = 5 is printed.

4 forgets the increment of i on the last pass; 10 prints s instead of i; 6 runs one pass too many, as if the test were s ≤ 10.

**8. D** — *The CALL construct.* In a CALL, `with` names what goes into the operation and `RETURNING` names the variable that receives what comes back. SquareRoot is given area and hands its result to side.

SquareRoot, not area, is the function name; side is not an input; nothing in a CALL line prints or reads anything.

**9. C** — *Converting REPEAT-UNTIL to WHILE.* UNTIL n = 0 stops when its condition becomes true, so the WHILE must keep going while that condition is false: WHILE n <> 0. A WHILE tests before the first pass, so n must already hold a value: one READ before the loop and one at the foot of the body, so the test always sees the newest value. For 5, 8, 3, 0 both versions print 16.

With no READ before the loop the first test has no value to work on. WHILE n = 0 inverts the condition, so the loop never runs. Putting READ at the top of the body skips the first number and prints 11 instead of 16.

**10. B** — *Tracing a selection inside a FOR loop.* k takes 3, 4, 5, 6, 7, 8 and 9, seven passes in all, because the upper bound is inclusive. The even values are 4, 6 and 8, so evens = 3; the odd values are 3, 5, 7 and 9, so odds = 4. It prints 3 4.

3 3 stops at k = 8 and loses the last odd value; 4 3 swaps the two counters; 4 4 starts the loop at k = 2, which adds one more even value.

**11. D** — *Applying the pseudocode rules to a fragment.* Line 1 writes its keywords in lowercase, breaking the rule that keywords are capitalised. Line 4 puts READ mark and SET total TO total + mark together, breaking one statement per line. The FOR has no ENDFOR, so nothing marks where its body ends. A corrected version capitalises line 1, splits line 4 in two, closes the loop with ENDFOR, and guards total / n against n = 0.

A FOR sets its own counter, so nothing is missing there; comments are optional; total is printed as part of the average; and READ is itself a proper pseudocode keyword.

**12. A** — *Pseudocode is not a program.* Pseudocode statements mix natural language with programming elements and belong to no particular language, so there is no language whose syntax it could be a stripped-down form of. It is also never executed: it sets out the flow and logic, and no compiler defines what its keywords mean. Testing is done on paper, walking the lines in order with chosen inputs and a table of every variable, checking the logic and that every required case is handled.

No pseudocode compiler exists, which is the whole point; pseudocode has no run time to be slow at; and it is written before the program, not after.
