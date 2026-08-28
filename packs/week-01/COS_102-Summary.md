# COS_102 — Week 1 Summary

*Introduction to Problem Solving · Week 1 (7–13 Sep 2026) · Topic: Problem Solving*

## The 8 most examinable things this week

1. **The four computational problem types**, with their exact defining phrases: **decision** (solution is either **YES or NO**), **search** (solution is **a value or values with a particular property**), **optimization** (**the best possible solution** is accepted as the solution), **counting** (solution is **the number of values with a particular property**).
2. **The four steps to problem-solving**, in order: **understand the problem → create a step-by-step solution plan → carry out the solution plan → evaluate and refactor the solution**.
3. **Algorithm = a procedure of steps used to solve a given problem; the steps must be ordered, unambiguous and complete** so that it can easily be converted into a computer program.
4. **Pseudocode = the TEXTUAL representation of an algorithm.** It looks like a real program but **cannot be compiled or executed**. **Flowchart = the GRAPHICAL representation of an algorithm** — the sequence of operations, drawn with symbols for start, stop, input, process, merge and decision.
5. **The four parts of carrying out the solution plan**: **coding → compilation and execution → debugging and testing → program documentation**.
6. **The translator chain**: **compiler** converts high-level language → **assembly language**; **assembler** converts assembly language → **machine code**; **interpreter** converts high-level language → **machine code directly**. Only machine code is understood by the computer.
7. **The three error types**: **syntax, logical, run-time**. **Debugging** finds errors so they can be removed to avoid program failure; **testing** verifies that the program works as expected.
8. **Refactoring** improves structure, design and efficiency **without changing the function of the solution**; and documentation splits into **user documentation** (what the end user needs to install and use the program) versus **programmer documentation** (all technical details so the program can be upgraded and maintained).

## Core definitions, stated precisely

- **Problem-solving is the essence of computer science.** Problems may be real-world or abstract. A **systematic approach** is required because the computer itself processes information systematically.
- Before a computer can solve a problem the problem must be **programmed into a form the computer understands**, and before the programmer can do that the programmer **must first understand how a human would solve it**. We still use the computer because it **handles larger problem volumes faster and more efficiently**.
- **Computational problem** = a problem **with step-by-step solutions**, in which the **inputs, problem limitations and output conditions are well defined**.
- **Understanding the problem** means answering: **What are the inputs? What are the processes involved? What is the output?** Computers accept as input anything convertible to digital form (numbers, letters, pictures, music, videos, sound waves, retinal scans, Wi-Fi signals) and produce outputs such as printed documents, on-screen data, visuals, audio, digitised speech, charts and images.
- **Creating a step-by-step plan** = **decomposition**: breaking the main problem into smaller problems until they are small enough to solve; solving all the small problems automatically solves the main problem. The plan is expressed as **algorithms, represented by pseudocode and flowcharts**.
- **Coding**: writing the actual program; the coded program is the **source code**. **High-level languages** (C, C#, Java) are easy for humans; **low-level languages** (assembly language, machine code) are easy for the computer. The computer understands **only machine code**, which is hard to write and troubleshoot because even small programs hold thousands of 0s and 1s.
- If the whole problem cannot be solved at once: **break it into smaller pieces and solve each separately**; a simpler solution is more likely to be programmed correctly. If some parts cannot be solved: **ignore the difficult parts, solve the easy parts first**, then the harder parts may become possible.
- **Program documentation** = collecting information about the program; it **starts at problem analysis and continues to the testing stage**.

## The worked example (most examinable artefact of the week)

**Problem:** compute a student's final grade as the **average of five grades**; **pass mark is 45**; state PASS or FAIL.

**Algorithm (steps)**

1. Start.
2. Input the five grades G1, G2, G3, G4, G5.
3. Compute Grade = (G1 + G2 + G3 + G4 + G5) / 5.
4. If Grade > 44, print "PASS"; otherwise print "FAIL".
5. Stop.

**Pseudocode**

```
START
  INPUT G1, G2, G3, G4, G5
  Grade <- (G1 + G2 + G3 + G4 + G5) / 5
  IF Grade > 44 THEN
     PRINT "PASS"
  ELSE
     PRINT "FAIL"
  ENDIF
STOP
```

**Flowchart (text-drawn)**

```
            ( START )
                |
                v
     [ Input G1,G2,G3,G4,G5 ]        <- parallelogram: input
                |
                v
  [ Grade = (G1+G2+G3+G4+G5)/5 ]     <- rectangle: process
                |
                v
             / Is  \
            / Grade \
            \  > 44 /
             \     /
          NO /     \ YES
            v       v
     [Print "FAIL"] [Print "PASS"]
            \       /
             v     v
            ( STOP )
```

Note the exam trap: the pass mark is **45**, so the test is **Grade > 44** (equivalently Grade ≥ 45). "Grade > 45" would wrongly fail a student who scored exactly 45.

## Commonly confused

| Pair | The distinction |
|---|---|
| Algorithm vs pseudocode vs flowchart | The **algorithm** is the ordered, unambiguous, complete procedure itself; **pseudocode** is its **textual** representation; **flowchart** is its **graphical** representation. One algorithm, two representations. |
| Compiler vs interpreter vs assembler | **Compiler**: high-level → **assembly**. **Assembler**: assembly → **machine code**. **Interpreter**: high-level → **machine code directly** (no assembly stage). |
| Debugging vs testing | **Debugging finds errors so they can be removed** to avoid failure; **testing verifies the program works as expected**. Testing detects that something is wrong; debugging removes it. |
| Syntax vs logical vs run-time error | **Syntax**: the code breaks the language's rules. **Logical**: the code runs but produces the wrong result. **Run-time**: the error appears while the program is executing. |
| Refactoring vs fixing a bug | **Refactoring does not change the function of the solution** — same behaviour, better structure/design/efficiency. Fixing a bug **deliberately changes** wrong behaviour into right behaviour. |
| Decision vs search problem | **Decision** returns only **YES/NO**; **search** returns **the value(s) with the property**. "Is there a student above 45?" is a decision problem; "Which students scored above 45?" is a search problem. |
| User vs programmer documentation | **User documentation**: what the **end user** needs for **installation and use**. **Programmer documentation**: the **technical details** enabling the program to be **upgraded and maintained**. |
