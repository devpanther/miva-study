# COS_102 — Week 6 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 7, not this week. Notes closed. 12 MCQ + 3 short answer, about 30 minutes.*

## Section A — Multiple choice (12)

**1.** The course defines a pseudocode as:
a) A graphical representation of the sequence of operations in a computer program
b) A step-by-step procedure for solving a problem, which may be expressed in natural language, programming code or mathematical symbol
c) A textual representation of the sequence of operations in a computer program, or the textual representation of an algorithm
d) A program written in simplified statements that a compiler translates before running it

**2.** _________ can be written in any notation or language while _________ are written in a combination of natural and programming language elements.
a) Algorithms…Pseudocode
b) Pseudocode…Algorithms
c) Flowcharts…Algorithms
d) Programs…Flowcharts

**3.** A till must display a menu, read the cashier's choice, and go on doing so until the choice is "quit". The menu has to appear at least once. Which construct?
a) FOR, because the number of transactions is settled before the till is switched on
b) REPEAT-UNTIL, because its condition is set at the ending/bottom, so the body always runs at least once
c) WHILE, because the condition on the choice must be tested before anything at all is displayed
d) CASE, because a menu of alternative choices is exactly what CASE is the generalised form of

**4.** What does this print?
```
SET x TO 1
REPEAT
    SET x TO x * 2
UNTIL x > 20
PRINT x
```
a) 16
b) 20
c) 32
d) 64

**5.** Which fragment prints the largest of three numbers `a`, `b` and `c` for every possible set of values?
a) `IF a > b THEN PRINT a ELSE PRINT b ENDIF; IF c > a THEN PRINT c ENDIF`
b) `SET max TO a; IF b > max THEN SET max TO b ENDIF; IF c > max THEN SET max TO c ENDIF; PRINT max`
c) `SET max TO a; IF b > max THEN SET max TO b ELSE SET max TO c ENDIF; PRINT max`
d) `IF a > b AND a > c THEN PRINT a ENDIF; IF b > a AND b > c THEN PRINT b ENDIF`

**6.** The user types 2, 4, 6, 8, 10. What does this print, and why?
```
FOR i = 1 TO 5
    SET total TO 0
    READ n
    SET total TO total + n
ENDFOR
PRINT total
```
a) 30, the sum of all five numbers, since total accumulates across the passes
b) 0, because the reset to zero is the last thing that happens before the loop ends
c) 2, because total keeps the value given on the first pass and later assignments are ignored
d) 10, since total is reset to zero at the start of every pass and so holds only the last number read

**7.** Which single line obeys **all** the rules the course gives for writing pseudocode?
a) `for (i = 0; i < n; i++)`
b) `COMPUTE vat AS price * 0.075`
c) `set total to 0`
d) `READ price; COMPUTE vat AS price * 0.075; PRINT vat`

**8.** Two students write correct pseudocode for the same algorithm, and neither can follow the other's. Which stated disadvantage is this, and what stated advantage is it the price of?
a) That pseudocode is not visual, which is the price of its being quick to write in any plain text editor
b) That pseudocode takes longer to read than a flowchart, which is the price of its being close to English rather than to code
c) That there are no generally accepted standards, so anyone may write it their own way; the price of needing no special software and no fixed syntax
d) That pseudocode cannot be executed by a machine, which is the price of its being independent of any one language

**9.** Which statement is correct?
a) An algorithm may be expressed in natural language, programming code or mathematical symbols, while pseudocode is specifically a combination of natural and programming language elements
b) Pseudocode is more precise and better defined than the algorithm it represents, which is why it is written second
c) Pseudocode becomes executable once its keywords are capitalised and the bodies of its constructs are correctly indented
d) A flowchart can express loops and branches for which pseudocode has no construct, which is why both notations are taught

**10.** A writer takes the finished pseudocode and works through it on paper on the case where no student passes at all. Which of the seven steps is being carried out?
a) Using clear and concise language
b) Identification of main steps
c) Problem definition
d) Testing and refining

**11.** The user types 5, 8, 3, 0. What does this print?
```
SET t TO 0
READ n
WHILE n <> 0
    READ n
    SET t TO t + n
ENDWHILE
PRINT t
```
a) 16
b) 13
c) 11
d) 8

**12.** The course requires the header of a pseudocode to include:
a) The name of the algorithm, a short description of its purpose, and a list of the required inputs and outputs
b) The name of the algorithm, the data types of every variable it uses, and the constructs it will be built from
c) A short description of the purpose, the language the pseudocode is to be converted into, and the author's name
d) The main steps of the algorithm in order, followed by the inputs the algorithm requires

## Section B — Short answer (3)

**13.** Explain the difference between an **algorithm** and a **pseudocode**, using all four of the contrasts the course draws. Then say what a student should do when handed a page of pseudocode and told to "run it", and why the answer is not "type it in".

**14.** Here is the course's own solution to the tuition problem:
```
Initialise passes to zero
Initialise failures to zero
initialise student to one
WHILE student counter is active
       input the next exam result
       IF the student passed THEN
             add one to passes
       ELSE
             add one to failures
add one to student counter
print the number of passes
print the number of failures
if seven or more students passed
       print "increase tuition"
```
State **three** faults in it and, for each, what a programmer converting it would produce. Say exactly what the fragment does when precisely seven students pass, and what the problem statement demands instead. Then write out a corrected version.

**15.** Write pseudocode that reads a count `N`, then reads `N` marks, and prints their average — printing `"no data"` instead if `N` is zero. Name the construct doing each job, say why a WHILE rather than a REPEAT-UNTIL is used for the reading, and say which of the seven steps forced the `"no data"` case into the design.

## Answers

**1. c — a textual representation of the sequence of operations in a computer program, or the textual representation of an algorithm.** *Concept: the definition, and the one word that separates it from last week's.* (a) is the flowchart definition, identical apart from **graphical**, which is Pseudocodes I's own mid-lesson question. (b) is the definition of an **algorithm** — the giveaway is "mathematical symbol", since pseudocode is by definition natural plus programming language elements. (d) is the "pseudocode is nearly code" error: it is written to be **easily convertible into programming statements**, but it is **not meant to be executed as the actual code**.

**2. a — Algorithms…Pseudocode.** *Concept: the mid-lesson question of Pseudocodes II, verbatim.* The algorithm is the method, so it may be recorded in any notation at all; pseudocode is one particular way of recording it, in **a combination of natural and programming language elements**. (b) is the reversal the deck itself offers as the distractor. (c) and (d) substitute a notation for the method: a flowchart and a program are each **one** notation, so neither can be the thing that may be written in any notation.

**3. b — REPEAT-UNTIL.** *Concept: choosing a loop by where its condition is tested.* The requirement "must appear at least once" is precisely what a post-tested loop guarantees, since REPEAT-UNTIL sets its condition **at the ending/bottom**. (c) is the near-miss: a WHILE would work only with the menu displayed and a choice read **before** the loop as well as inside it, which duplicates two lines — and as written, with the test first, there is no choice to test yet. (a) fails because the number of transactions is unknown until "quit" is typed, which is exactly when FOR — whose bounds are **all set at the beginning/top** — cannot be used. (d) supplies the wrong kind of construct: CASE would handle what to do with each choice, but CASE does not repeat anything.

**4. c — 32.** *Concept: a post-tested loop performs the body first and stops when its condition becomes true.* x = 1 → 2 (2 > 20 false) → 4 → 8 → 16 (16 > 20 false, so round again) → 32, and 32 > 20 is true, so the loop ends with x = 32. (a) 16 is the last value that satisfied "not yet over 20" and is what you get by stopping one pass early, i.e. by testing before the body. (b) 20 assumes the loop stops **at** the threshold rather than past it; nothing in the fragment can produce 20, since x only ever takes powers of 2. (d) 64 is one pass too many, from testing `x > 20` on the value before the doubling.

**5. b.** *Concept: the running-maximum pattern — one variable, compared with each candidate in turn.* `max` starts at `a` and is replaced whenever something bigger appears, so after both IFs it holds the largest of the three, and exactly one value is printed. (a) prints twice when c is largest (once from the first IF, once from the second) and, worse, tests `c > a` rather than `c > max`, so with a = 1, b = 9, c = 5 it prints 9 and then 5. (c) has the fatal ELSE: `c` is only considered when `b > max` is **false**, so with a = 1, b = 9, c = 100 the answer is 9. (d) prints nothing whenever c is the largest, and nothing at all when two values are tied at the top, because every test is strict.

**6. d — 10.** *Concept: an accumulator initialised inside its own loop.* `SET total TO 0` is the first statement of the body, so it runs on every pass: each number read wipes out the previous running total, and after the last pass total holds 0 + 10. The fix is to move the initialisation above the FOR. (a) is what the code was meant to do and what almost everyone reports on a quick reading — the reason this bug survives is that 10 is a perfectly plausible-looking output. (b) has the reset happening at the end of the pass rather than the start; the order of the body's three lines is the whole question. (c) invents a rule that a variable's first assignment sticks.

**7. b — `COMPUTE vat AS price * 0.075`.** *Concept: the rules applied to a single line.* It carries one statement, its keyword is in capitals, and it belongs to no particular programming language — `COMPUTE` is one of the course's own compute verbs, alongside CALCULATE and DETERMINE. (a) is C or Java, breaking language independence. (c) is language independent and holds one statement, but its keyword is lowercase, so nothing distinguishes the instruction `set` from ordinary prose. (d) is written in proper pseudocode but crams **three** statements onto one line, breaking the rule that each line should contain only one statement — the rule exists because the line is what carries the order of the tasks.

**8. c.** *Concept: non-standardisation and the freedom that causes it are one property seen twice.* The stated disadvantage is that **since there are no generally accepted standards for writing pseudocodes, anyone can write pseudocode in their own way, leading to various pseudocode styles and possible complications**. That freedom is the same fact as the advantages that **no special software is needed — it can be written with any text editor** — and that it **can easily be modified**: a notation with no fixed syntax needs no tool to enforce one and nothing to break when you edit it, and equally offers a reader nothing to rely on. This is why the course states rules at all: they are a voluntary standard for a notation that has none. (a) and (b) name real disadvantages but pair them with the wrong cause — both follow from pseudocode being **text rather than a picture**, not from the editor it is typed in. (d) is not a disadvantage the course lists, and being unexecutable is a property of algorithms and flowcharts too.

**9. a.** *Concept: algorithm vs pseudocode, in the course's own four contrasts.* The algorithm is the **step-by-step procedure**, expressible in **any** language or notation and **precise and well defined**; pseudocode is a **high-level, informal representation** of it in **natural plus programming language elements**, produced **during early software development stages, before the algorithm is coded in a specific language**. (b) reverses the precision claim — pseudocode is the informal one. (c) is the compilation error: capitals and indentation are readability rules, and no amount of tidying gives the text a grammar any compiler knows. (d) is false in both directions — WHILE, REPEAT-UNTIL, FOR, IF-THEN-ELSE and CASE cover exactly what a flowchart's diamonds and back-arrows draw.

**10. d — Testing and refining.** *Concept: the seventh step, and what "testing" means for something that cannot be run.* The course's wording is that after the pseudocode is written it must be tested **either on paper or by just scanning through** to ensure it **accurately describes the flow and logic** and **handles all the required cases** — and "no student passes at all" is precisely a required case at the boundary. (a) is about the wording inside the constructs, not about whether the logic survives an awkward input. (b) and (c) both happen before a line is written; the fragment being tested here already exists.

**11. c — 11.** *Concept: a read-ahead loop with the body's READ in the wrong place.* Trace it: `READ n` gives 5; 5 ≠ 0, so enter the body — but the body's first line is another `READ`, which overwrites the 5 with 8, and t becomes 8. Next pass: read 3, t = 11. Next: read 0, t = 11 + 0 = 11. The test 0 ≠ 0 now fails and 11 is printed. Two faults compound: the **first value is read but never added**, and the **sentinel is added** (harmlessly here, because it is 0 — with a sentinel of −1 the total would also be one too low). The correct arrangement puts the addition first and the next read last: `WHILE n <> 0 { SET t TO t + n; READ n }`. (a) 16 is the sum the fragment was meant to produce. (b) 13 is 5 + 8, from tracing the first pass as though both values counted. (d) 8 stops after one pass.

**12. a.** *Concept: what a header is for.* The course requires **the name of the algorithm**, **a short description of the purpose of the algorithm**, and **a list of the required inputs and outputs** — that is, a statement of what the thing is called and what it takes in and gives back, so that a reader knows whether this is the algorithm they need before reading a line of it. (b) is the **using variables and data structures** step, which comes after the header; (d) is the **identification of main steps**, which comes before it. (c) adds the target language, which the language-independence rule forbids the pseudocode from committing to.

**13.** *Concept: algorithm vs pseudocode, and what "not meant to be executed" implies in practice.* The four contrasts, in the course's order. **(i) What each is:** an algorithm is a **step-by-step procedure for solving a problem**; a pseudocode is a **high-level representation of an algorithm**. The algorithm is the method; the pseudocode is a way of writing the method down, so one algorithm may have many pseudocodes and every pseudocode is a pseudocode *of* some algorithm. **(ii) Notation:** an algorithm **can be expressed in any language — natural language, programming code or mathematical symbol** — while pseudocode uses **a combination of natural and programming language elements**, without following the syntax of a specific programming language strictly. **(iii) Register:** algorithms have **precise and well-defined procedures**; pseudocode is **more high level and informal**. **(iv) When:** algorithms are **usually represented as pseudocode during the early software development stages, before they are coded in a specific programming language.** Handed a page of pseudocode and told to run it, the honest answer is that **it cannot be run**: the course states plainly that pseudocode **is not meant to be executed as the actual code; it just clearly describes the flow and logic of an algorithm.** What you can do is **trace** it — take specific input values, walk the lines in order, keep a table of every variable's value, and write down what is printed — which is exactly the **testing and refining** step, and it catches logic faults for the price of a sheet of paper. "Type it in" is wrong for two reasons: nothing defines the meaning of the keywords to any compiler, so there is nothing to type in *as*; and the choice of language is a decision that comes **after** the design is settled, which is the whole point of writing pseudocode first.

**14.** *Concept: reading a pseudocode literally — an off-by-one, a misplaced increment, missing terminators and lowercase keywords.* **Fault 1 — the threshold is off by one.** The problem says the fee rises if **more than seven** students pass; the pseudocode says **seven or more**. A programmer converts the line as written and produces `if (passes >= 7)`. **Fault 2 — `add one to student counter` is outside the loop.** It sits flush left with the lines after the WHILE, so by the indentation it runs once, after the loop has finished. Nothing in the body then changes anything the condition tests, and a programmer converting it faithfully produces a loop that never ends. **Fault 3 — there is no `ENDIF` and no `ENDWHILE`.** The deck's own skeletons require both, and without them nothing states where the ELSE branch stops or where the loop body stops, so a converter has to guess whether the three `print` lines are inside the loop (printing running totals on every pass) or after it. *(A fourth, if asked: `initialise`, `if` and `print` are lowercase, against the rule that keywords are capitalised; and "WHILE student counter is active" never says what "active" means, against the requirement that the constructs describe the steps without ambiguity.)* **Exactly seven passes:** the condition `seven or more students passed` is satisfied, so **"increase tuition" is printed** — and the problem statement demands the opposite, since seven is not *more than* seven; the fee should rise only from eight passes upward. Nothing else in the algorithm distinguishes the two versions, so only a test with exactly seven passes exposes the fault. **Corrected version:**
```
Algorithm:   Determine whether tuition should be increased
Description: accepts the students' examination results, counts the passes and
             the failures, and decides whether the tuition fee is raised
Inputs:      the number of students, and each student's result
Outputs:     number of passes, number of failures, tuition decision

SET passes TO 0
SET failures TO 0
SET student TO 1
READ number_of_students
WHILE student <= number_of_students
    READ result
    IF result is a pass THEN
        SET passes TO passes + 1
    ELSE
        SET failures TO failures + 1
    ENDIF
    SET student TO student + 1
ENDWHILE
PRINT passes
PRINT failures
IF passes > 7 THEN
    PRINT "increase tuition"
ENDIF
```

**15.** *Concept: writing pseudocode to a specification — construct choice, and the guard a division by a counter always needs.*
```
Algorithm:   Average of N marks
Description: reads a count and that many marks, and prints their average
Inputs:      N, and N marks
Outputs:     the average, or "no data"

READ N
IF N = 0 THEN
    PRINT "no data"
ELSE
    SET sum TO 0
    SET i TO 1
    WHILE i <= N
        READ mark
        SET sum TO sum + mark
        SET i TO i + 1
    ENDWHILE
    SET average TO sum / N
    PRINT average
ENDIF
```
**What each construct does.** The opening `READ N` and the closing `PRINT average` are **SEQUENCE** — linear tasks performed one after the other, using the course's input and output verbs. The **IF-THEN-ELSE** splits the two cases, and it is the construct doing the real defensive work, since it is what stops the flow ever reaching the division when N is 0. The **WHILE** iterates over the marks, with `i` as the counter and `sum` as the accumulator; the accumulator is initialised **before** the loop, since initialising it inside would reset it on every pass and leave only the last mark. **Why WHILE and not REPEAT-UNTIL.** REPEAT-UNTIL tests at the **ending/bottom**, so its body always runs **at least once** — with N = 1 that is harmless, but the loop must also be correct for values of N where no mark should be read at all, and a REPEAT-UNTIL would read one anyway. A WHILE tests **before** the first pass, so zero passes are possible, which is the behaviour the specification needs. (A FOR would also be correct here, since N is known before the loop is entered — `FOR i = 1 TO N` — and is arguably the better choice for exactly that reason; what would be wrong is REPEAT-UNTIL.) **Which step forced the "no data" case.** **Testing and refining** — the step that requires the finished pseudocode to be checked on paper to be sure it **handles all the required cases**. Without it the fragment looks finished at `SET average TO sum / N`, and the fault only appears when N = 0 is tried, where a division by zero has no value at all. It is also traceable to **problem definition**, which requires the inputs and requirements to be stated clearly: once "N may be zero" is written down as an input condition, the guard is obviously part of the problem rather than an afterthought.
