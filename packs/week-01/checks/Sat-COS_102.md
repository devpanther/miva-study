# Saturday — COS_102 code nightly check

*Tracing the final-grade algorithm, boundary conditions, error types and refactoring.*
*Sit cold, notes closed, 8 minutes. Score out of 6.*

**1.** Trace this fragment. What does it print?

```
INPUT G1, G2, G3, G4, G5      // 40, 50, 45, 40, 50
Grade <- (G1+G2+G3+G4+G5)/5
IF Grade > 44 THEN PRINT "PASS" ELSE PRINT "FAIL"
```

a) FAIL — the average is 44, and 44 is not greater than 44
b) PASS — the average is 45, and 45 > 44
c) FAIL — three of the five grades are below the pass mark
d) PASS — the average is 44, and the pass mark is 44

**2.** A student's flowchart uses the decision **"Is Grade > 45"** instead of **"Is Grade > 44"**. A candidate scores an average of exactly 45. What happens, and what kind of defect is it?
a) The program refuses to run; a run-time error
b) The program prints "FAIL" for a student who passed; a logical error
c) The program prints "PASS" for a student who failed; a logical error
d) The program will not compile, because `>` cannot be used with the value 45; a syntax error

**3.** Three failures. Classify each: (i) `PRNT "PASS"` is typed instead of `PRINT "PASS"`; (ii) the divisor is typed as 4 instead of 5, so every average comes out too high; (iii) the number of grades is read from the user as N and the average is computed as Sum/N, and the user enters N = 0.
a) (i) logical, (ii) syntax, (iii) run-time
b) (i) syntax, (ii) logical, (iii) run-time
c) (i) syntax, (ii) run-time, (iii) logical
d) (i) run-time, (ii) logical, (iii) syntax

**4.** Which rewrite of the pass/fail test is a genuine **refactor**?

Original: `IF Grade > 44 THEN PRINT "PASS" ELSE PRINT "FAIL"`

a) `IF Grade >= 45 THEN PRINT "PASS" ELSE PRINT "FAIL"`
b) `IF Grade > 44 THEN PRINT "PASS"` and separately `IF Grade > 45 THEN PRINT "FAIL"`
c) `PASSMARK <- 45` then `IF Grade < PASSMARK THEN PRINT "FAIL" ELSE PRINT "PASS"`
d) `IF Grade > 44 THEN PRINT "PASSED WITH DISTINCTION" ELSE PRINT "FAIL"`

**5. (explain why)** Here are two fragments computing the same total:

```
Fragment A:  Sum <- 0 / Sum <- Sum+G1 / Sum <- Sum+G2 / Sum <- Sum+G3 / Sum <- Sum+G4 / Sum <- Sum+G5 / Grade <- Sum/5
Fragment B:  Sum <- 0 / FOR i FROM 1 TO 5 DO Sum <- Sum + G[i] / Grade <- Sum/5
```

Explain why B counts as a refactor of A, and state the one thing you would have to check about B before calling it a refactor rather than a rewrite.

**6. (explain why)** A program is supposed to print "PASS" for a mark of exactly 45 but prints "FAIL". The programmer runs the program with the marks 45, 46 and 44, sees the wrong output for 45, then inspects the code, finds `IF Grade > 45`, and changes it to `IF Grade > 44`. Name which parts of this were **testing**, which were **debugging**, and explain why the final change is *not* a refactor.

---

## Answers

**1. a** — *Tracing a fragment; strict inequality at the boundary.* 40+50+45+40+50 = 225; 225/5 = **44**. The test is strictly greater than 44, and 44 is not > 44, so it prints FAIL — correctly, since the pass mark is 45. (b) is the arithmetic slip; (c) encodes the misconception that individual grades, not the average, are compared with the pass mark.

**2. b** — *Off-by-one in a boundary condition; logical error.* "Pass mark 45" means pass iff Grade ≥ 45, i.e. Grade > 44. Testing `> 45` excludes exactly 45, so a genuine passer is printed as FAIL. The code is perfectly legal and runs to completion — nothing to compile-fail and nothing to crash — so the defect is **logical**, the error type that produces wrong output from a running program.

**3. b** — *The three error types.* (i) `PRNT` breaks the rules of the language — **syntax error**, caught before execution. (ii) Dividing by 4 is legal code that produces wrong results — **logical error**. (iii) Division by zero is legal code that fails **while the program is executing** — **run-time error**. The distractors swap exactly the pairs students confuse: "wrong answer" with "crash", and "crash" with "typo".

**4. c** — *Refactoring vs behaviour change.* (c) produces identical output for every input — `Grade < 45` fails exactly the marks that `Grade > 44` does not pass — while improving structure by naming the pass mark once as `PASSMARK`, so a future change of pass mark touches one line. (a) is *also* behaviour-identical but changes nothing about structure or efficiency, so there is no improvement to call a refactor. (b) changes behaviour: a mark of 50 would print both PASS and FAIL. (d) changes what the program outputs, so it is a new requirement, not a refactor.

**5.** *Concept: refactoring for concision and efficiency.* B produces exactly the same value of `Grade` for the same five inputs, but replaces five repeated hand-written additions with a single loop — more concise, better structured, and trivially extendable, which is precisely what refactoring is for: improving structure and efficiency **without changing the function of the solution**. Before calling it a refactor I would check that the loop bounds are right — that `FOR i FROM 1 TO 5` is inclusive of both 1 and 5 and that `G[1]..G[5]` are the same five grades A adds. An array indexed from 0 would make B sum a different set of values, silently changing behaviour and making it a rewrite, not a refactor.

**6.** *Concept: debugging vs testing; refactoring vs fixing.* Running the program with 45, 46 and 44 and comparing the output with what was expected is **testing** — the process that verifies whether the program works as expected. Inspecting the code afterwards, locating `IF Grade > 45` as the cause and removing it is **debugging** — the process that finds errors so they can be removed to avoid program failure. The change from `> 45` to `> 44` is **not a refactor**, because refactoring is defined as improving structure, design or efficiency **without changing the function of the solution**, whereas this change deliberately alters the output for a mark of exactly 45 from FAIL to PASS. Changing behaviour on purpose is fixing a bug; a refactor would have left every output identical.
