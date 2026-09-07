# Wednesday — COS_102 nightly check

*This session takes Week 1 conceptually.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** A flowchart reads: START, then an input box "Input A, B", then a decision box "Is A > B?". The Yes branch goes to "Print A − B", the No branch to "Print B − A". Both branches go to STOP. The inputs are A = 4, B = 9. What is printed?
A. 5
B. −5
C. 13
D. 9

**2.** A student does four things while solving a problem. P: writes the pseudocode and draws the flowchart. Q: lists the inputs, the processing and the output. R: rewrites the working program to run faster with the same results. S: types the program in and runs it. Which order follows the four steps to problem-solving?
A. Q, P, S, R
B. P, Q, S, R
C. Q, S, P, R
D. Q, P, R, S

**3.** A translator takes a program written in Java and produces assembly language, which still has to be translated once more before the CPU can run it. Which translator is this?
A. Interpreter
B. Assembler
C. Compiler
D. The CPU itself

**4.** A grade program is accepted by the compiler with no complaints, runs to the end without stopping, and prints an average of 36 for five grades that actually average 45. Which type of error is this?
A. Syntax error
B. Run time error
C. Not an error, since the program ran
D. Logical error

**5.** A plan reads: 1. Read the five grades. 2. Add them and divide by 5. 3. If the result is high enough, print PASS; otherwise print FAIL. 4. Stop. Which required property of an algorithm's steps does the plan break?
A. Ordered
B. Complete
C. Unambiguous
D. None; all three hold

**6.** How many grades does this pseudocode read?

```
count = 1
total = 0
WHILE count < 5
    READ g
    total = total + g
    count = count + 1
ENDWHILE
```
A. 5
B. 4
C. 6
D. 3

**7.** What does this print?

```
total = 0
FOR i = 1 TO 4
    IF i is even THEN
        total = total + i
    ELSE
        total = total - i
    ENDIF
ENDFOR
PRINT total
```
A. 10
B. −2
C. 4
D. 2

**8.** A grade program works correctly. Which of these changes to it is NOT a refactor?
A. Replacing five separate additions with a loop that gives the same total
B. Changing the pass mark in the decision from 45 to 50
C. Renaming G1 to grade1 everywhere it appears
D. Deleting a variable that is never read

**9. (show your working)** Write pseudocode that reads a temperature T and prints HOT if T is above 30, WARM if T is from 20 to 30 inclusive, and COLD otherwise. Show your working.

**10. (show your working)** Trace this pseudocode and give the value of total after each iteration, then the printed value. Show your working.

```
total = 1
FOR i = 1 TO 4
    total = total * 2 + i
ENDFOR
PRINT total
```

**11. (show your working)** This pseudocode is meant to read N numbers and print their average, but for N = 3 it never finishes.

```
READ N
count = 0
total = 0
WHILE count < N
    READ x
    total = total + x
ENDWHILE
PRINT total / N
```

Say which line is missing and where it goes, then give what the fixed program prints for N = 3 and inputs 4, 7, 10. Show your working.

**12. (show your working)** An algorithm's steps must be ordered, unambiguous and complete. For a plan that averages five grades and prints PASS or FAIL, give one example of a step that breaks each of the three properties, and say what goes wrong when that plan is turned into a program.

---

## Answers

**1. A** — *Tracing a flowchart decision.* A = 4 and B = 9, so the test A > B is 4 > 9, which is false. The No branch runs: B − A = 9 − 4 = 5 is printed.

−5 takes the Yes branch and prints A − B; 13 adds the two inputs instead of subtracting; 9 prints the larger input rather than the difference.

**2. A** — *Ordering the four problem-solving steps.* The four steps are: understand the problem (Q, inputs, processes, output), create a step-by-step plan (P, algorithm as pseudocode and flowchart), carry out the plan (S, code and run it), then evaluate and refactor (R). So Q, P, S, R.

P, Q, S, R plans before understanding the problem; Q, S, P, R codes before any plan exists; Q, P, R, S refactors a program that has not yet been written.

**3. C** — *Identifying the translator from its input and output.* High-level language in, assembly language out is the compiler. The assembly still needs an assembler to become machine code, which is why one more translation remains.

An interpreter takes high-level language too, but goes straight to machine code with no second stage; an assembler takes assembly language as its input, not Java; the CPU runs machine code and translates nothing.

**4. D** — *Classifying an error as syntax, logical or run time.* The program was built and ran to completion, yet the answer is wrong. An error that leaves the program running happily while producing the wrong result is a logical error.

A syntax error would have stopped the compiler accepting the program; a run time error would have stopped the run part way through; a wrong answer is an error whether or not the program finished.

**5. C** — *Identifying which algorithm property a step violates.* Step 3 says "high enough" without saying what that means, so two programmers would write two different tests. The steps are not unambiguous.

The steps are in a workable order (read, compute, decide, stop), so ordered holds; both outcomes PASS and FAIL are handled, so complete holds; "none" ignores the vague condition in step 3.

**6. B** — *Counting loop iterations.* count starts at 1 and the body runs while count < 5, so it runs for count = 1, 2, 3, 4. Four grades are read. When count becomes 5 the test fails and the loop ends.

5 assumes the test is count ≤ 5 or that count starts at 0; 6 counts up to and including the failing test; 3 stops one iteration early by treating count = 4 as the exit.

**7. D** — *Tracing a loop with a decision inside.* i = 1 is odd: total = 0 − 1 = −1. i = 2 is even: −1 + 2 = 1. i = 3 is odd: 1 − 3 = −2. i = 4 is even: −2 + 4 = 2. So 2 is printed.

10 adds every i and ignores the ELSE branch; −2 swaps the two branches (add odd, subtract even); 4 is only the last i, forgetting that total accumulates.

**8. B** — *Refactoring preserves function.* Refactoring improves the structure, design or efficiency of a working solution without changing what it does. Changing the pass mark changes which students pass, so the function changes: that is a change of specification, not a refactor.

The loop, the rename and the deleted dead variable all leave every output exactly as it was, so each of those is a refactor.

**9.** *Writing pseudocode with a three-way decision.* Model answer:

```
READ T
IF T > 30 THEN
    PRINT "HOT"
ELSE IF T >= 20 THEN
    PRINT "WARM"
ELSE
    PRINT "COLD"
ENDIF
```

A correct answer must read T, test T > 30 first (or test the ranges in any order that does not overlap), use ≥ 20 rather than > 20 so that 20 counts as WARM, and give every value of T exactly one printed word. Three separate IF tests (T > 30; T ≥ 20 AND T ≤ 30; T < 20) are also accepted. Using T > 20 for WARM is wrong because 20 would then print COLD.

**10.** *Tracing an accumulator step by step.* Start with total = 1. i = 1: 1 × 2 + 1 = 3. i = 2: 3 × 2 + 2 = 8. i = 3: 8 × 2 + 3 = 19. i = 4: 19 × 2 + 4 = 42. The program prints 42.

A correct answer lists the four values 3, 8, 19, 42 in order and states the printed value 42. A trace that restarts total at 1 each time (giving 3, 4, 5, 6) or that doubles after adding, total = (total + i) × 2 (giving 4, 12, 30, 68), is wrong.

**11.** *Spotting the missing loop update.* count is never changed inside the loop, so count < N stays true forever and the loop never ends. The missing line is count = count + 1, placed inside the loop after total = total + x (anywhere inside the body is accepted).

Fixed run for N = 3: total = 4, then 11, then 21; count reaches 3 and the loop stops; 21 / 3 = 7 is printed. A correct answer names the missing count update, puts it inside the WHILE body, and gives 7. Putting the update after ENDWHILE does not fix the loop and is wrong.

**12.** *Ordered, unambiguous and complete steps.* Ordered: putting "compute the average" before "read the five grades" uses values the program does not yet have, so it computes with nothing or with leftovers. Unambiguous: "if the average is good enough, print PASS" cannot be written as a test, because two programmers would choose two different numbers. Complete: giving a PASS step but no FAIL step leaves a student below the mark with no output at all.

A correct answer gives one concrete broken step for each property (order, ambiguity, missing case) and names the consequence in the program: wrong or missing data, an untranslatable condition, an unhandled case. Any sensible examples are accepted as long as each matches the property it is meant to break.
