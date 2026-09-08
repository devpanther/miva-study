# Wednesday — COS_102 nightly check

*This session takes Week 1 conceptually.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** Which pseudocode prints HOT when T is above 30, WARM when T is from 20 to 30 inclusive, and COLD otherwise?
A. IF T > 20 THEN PRINT WARM; ELSE IF T > 30 THEN PRINT HOT; ELSE PRINT COLD
B. IF T > 30 THEN PRINT HOT; ELSE IF T >= 20 THEN PRINT WARM; ELSE PRINT COLD
C. IF T > 30 THEN PRINT HOT; ELSE IF T > 20 THEN PRINT WARM; ELSE PRINT COLD
D. IF T >= 30 THEN PRINT HOT; ELSE IF T >= 20 THEN PRINT WARM; ELSE PRINT COLD

**10.** What does this print?

```
total = 1
FOR i = 1 TO 4
    total = total * 2 + i
ENDFOR
PRINT total
```
A. 68
B. 19
C. 16
D. 42

**11.** This is meant to read N numbers and print their average, but for N = 3 it never finishes.

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

Which repair is correct, and what does the repaired program print for N = 3 with inputs 4, 7, 10?
A. Add `count = count + 1` inside the loop body; it prints 7
B. Add `count = count + 1` after ENDWHILE; it prints 7
C. Add `count = count + 1` inside the loop body; it prints 21
D. Add `N = N + 1` inside the loop body; it prints 7

**12.** Three faulty steps appear in a plan that averages five grades and prints PASS or FAIL. (i) "Compute the average of the five grades" is placed before "Read the five grades". (ii) "If the average is good enough, print PASS". (iii) There is a PASS step but no FAIL step. Which required property of an algorithm's steps does each one break, taken in the order (i), (ii), (iii)?
A. Complete, ordered, unambiguous
B. Unambiguous, complete, ordered
C. Ordered, unambiguous, complete
D. Ordered, complete, unambiguous

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

**9. B** — *Writing pseudocode with a three-way decision.* The tests run in order, so T > 30 takes everything above 30 to HOT, and whatever is left meets T >= 20, which catches 20 up to 30 inclusive; the rest is COLD. Check the boundaries: T = 20 gives WARM, T = 30 gives WARM, T = 31 gives HOT.

Using T > 20 for the second test sends T = 20 to COLD. Using T >= 30 for the first test sends T = 30 to HOT instead of WARM. Testing T > 20 first sends T = 35 to WARM, because the HOT test below it is never reached.

**10. D** — *Tracing an accumulator step by step.* total starts at 1. i = 1: 1 × 2 + 1 = 3. i = 2: 3 × 2 + 2 = 8. i = 3: 8 × 2 + 3 = 19. i = 4: 19 × 2 + 4 = 42. So 42 is printed.

68 adds i before doubling, (total + i) × 2; 19 stops one pass early at i = 3; 16 doubles four times and never adds i.

**11. A** — *Spotting the missing loop update.* count never changes inside the loop, so count < N stays true forever. Putting count = count + 1 in the body lets count reach 3 and stop the loop; total is 4 + 7 + 10 = 21 and 21 / 3 = 7 is printed.

An update placed after ENDWHILE leaves the loop untouched, so it still never ends; 21 forgets the division by N; raising N inside the loop pushes the target further away every pass, so the loop still never ends.

**12. C** — *Ordered, unambiguous and complete steps.* (i) computes with values that have not been read yet, so the steps are out of order. (ii) says "good enough" without a number, so two programmers would write two different tests: it is ambiguous. (iii) leaves a grade below the mark with no output at all, so a case is missing and the plan is not complete.

Every other ordering pairs the vague condition or the missing FAIL branch with the wrong property; only ordered, unambiguous, complete matches each fault to what it actually breaks.
