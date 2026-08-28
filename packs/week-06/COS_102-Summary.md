# COS_102 — Week 6 Summary

*Introduction to Problem Solving · Week 6 (12–18 Oct 2026) · Topics: Pseudocodes I; Pseudocodes II — Pseudocode Concepts*

## The 8 most examinable things this week

1. **The definition, word for word:** a pseudocode is **a textual representation of the sequence of operations in a computer program; or the textual representation of an algorithm.** Last week's flowchart definition is the same sentence with **graphical** in place of **textual** — that single word is the whole of Pseudocodes I's mid-lesson question ("A pseudocode is a *graphical* representation…" → **No**).
2. **The other mid-lesson question, verbatim:** **Algorithms** can be written in any notation or language while **pseudocode** are written in a combination of natural and programming language elements. The answer order is Algorithms…Pseudocode, and the reversed option is the distractor.
3. **The rules that govern pseudocode.** One statement per line; **keywords in capital letters**; statements must be **language independent** — not written in a particular programming language; and indent so that the reader can see which statements belong to which construct. Each rule kills one specific ambiguity (see below).
4. **The eight constructs and their skeletons:** SEQUENCE, FOR, WHILE, REPEAT-UNTIL, IF-THEN-ELSE, CASE, CALL, EXCEPTION/WHEN. Learn each skeleton with its closing keyword; questions are usually "which construct does X" or "complete the skeleton".
5. **The SEQUENCE verb list** — input: **READ, OBTAIN, GET**; output: **PRINT, DISPLAY, SHOW**; compute: **COMPUTE, CALCULATE, DETERMINE**; initialise: **SET, INIT**; add: **INCREMENT, BUMP**; subtract: **DECREMENT**. These are the words the course expects to see in your answer.
6. **Where each loop tests its condition.** FOR sets **all the necessary conditions at the beginning/top**; WHILE sets **some condition at the beginning/top and other conditions in the body**; REPEAT-UNTIL sets **some condition at the ending/bottom and other conditions in the body**. Consequence: a WHILE body may run **zero** times, a REPEAT-UNTIL body **always runs at least once**.
7. **The seven steps of writing a pseudocode, in order:** problem definition → identification of main steps → header writing → using variables and data structures → using constructs to describe logic → using clear and concise language → testing and refining.
8. **Advantages and disadvantages, as stated.** Advantages: **no special software** is needed (any text editor); **anyone can understand it** because the language is close to English; it is **easily modified**; **structured concepts are easily implemented** in it. Disadvantages: **no generally accepted standards**, so anyone may write it their own way, giving various styles and possible complications; it is **not visual** compared with flowcharts; and it **takes longer to read and understand** than a flowchart.

## What pseudocode is, and what it is for

Pseudocode is **written in a form that makes it easily convertible into programming statements**. The motivation the course gives is to **write all the main steps of an algorithm in a language that is very similar to English**. The rule of thumb: *if you want to develop a new program and you are struggling with how to start, write the pseudocode first.*

The technique the course names for doing that: **write the pseudocode as comments in a file**, then **fill in between the comments with the actual code**. Following this approach you are **writing the comments for your program before writing the program** — the design survives into the finished source file as its commentary, and each comment is the specification of the lines directly beneath it.

## The rules, and the failure each one prevents

| Rule (course wording) | What goes wrong without it |
|---|---|
| **Each line should contain only one statement** | Pseudocode gives the computer a list of tasks to implement **sequentially**, so one line = one task. `SET t TO 0; READ n; SET t TO t+n` on one line hides the order and hides steps from anyone converting it to code. |
| **Write keywords in capital letters** | Capitals **differentiate keywords from other words**. Without them you cannot tell the construct `IF` from an English "if", or `SET total` from a variable named `settotal` — the reader has to guess what is structure and what is prose. |
| **Statements should be language independent** — not in a particular programming language | The point of pseudocode is that **anyone** can read it and that it can be converted into **any** language. `System.out.println(total);` is Java, not pseudocode: it fails both the near-English requirement and the convertibility requirement, and it commits the design to one language before the design is finished. |
| **Indent the body of every construct** | Indentation is what shows which statements are inside the loop and which are after it. The course's own worked solution loses a line to exactly this fault (below). |

## The eight constructs

| Construct | Skeleton | What it does |
|---|---|---|
| **SEQUENCE** | plain lines, one after another | **Tasks that are linear and performed sequentially one after the other.** No keyword of its own; the verbs above supply the actions. |
| **FOR** | `FOR iteration bounds` / `sequence` / `ENDFOR` | One or more statements executed up to a desired number of times, **based on setting all the necessary conditions at the beginning/top**. The bounds are fixed before entry, so the number of passes is known in advance. |
| **WHILE** | `WHILE condition` / `sequence` / `ENDWHILE` | Executed a desired number of times, **based on setting some condition at the beginning/top and other conditions in the body**. Tested **before** each pass, so **zero passes are possible**. |
| **REPEAT-UNTIL** | `REPEAT` / `sequence` / `UNTIL condition` | Executed a desired number of times, **based on setting some condition at the ending/bottom and other conditions in the body**. Tested **after** each pass, so the body **always runs at least once**. |
| **IF-THEN-ELSE** | `IF condition THEN` / `sequence 1` / `ELSE` / `sequence 2` / `ENDIF` | **Uses conditional statements to change the normal flow of operation of an algorithm.** Exactly one of the two sequences runs. |
| **CASE** | `CASE expression OF` / `condition 1: sequence 1` / … / `condition n: sequence n` / `OTHERS:` `default sequence` / `ENDCASE` | The same job as IF-THEN-ELSE **in a more generalised form** — one expression tested against many conditions, with **OTHERS** supplying the default sequence when none matches. |
| **CALL** | `CALL AvgAge with studentAges` · `CALL Swap with CurrentItem and TargetItem` · `CALL getBalance RETURNING aBalance` · `CALL SquareRoot with orbitHeight RETURNING norminalOrbit` | Performs operations such as **defining class objects and calling functions**. `with` names the arguments passed in; **RETURNING** names the variable that receives the value handed back. |
| **EXCEPTION / WHEN** | `BEGIN` / `statements` / `EXCEPTION` / `WHEN exception` `handling statements` / `WHEN another exception` `handling statements` / `END` | **When unexpected or unwanted events take place while a program is running, responding to those events is called exception handling.** Each WHEN names one exception and carries the statements that deal with it. |

## Algorithm vs pseudocode vs flowchart

| | Algorithm | Pseudocode | Flowchart (Week 5) |
|---|---|---|---|
| What it is | **Step-by-step procedure for solving a problem** | **High-level representation of an algorithm** | **Graphical representation of an algorithm** |
| Notation | **Any** — natural language, programming code or mathematical symbol | **A combination of natural and programming language elements**, without following the syntax of a specific language strictly | Symbols and flowlines |
| Register | **Precise and well-defined procedures** | **More high level and informal** | Visual, immediate |
| Run by a machine? | No | **No — it is not meant to be executed as the actual code; it just clearly describes the flow and logic of an algorithm** | No |
| When used | The method itself | **During early software development stages, before the algorithm is coded in a specific programming language** | Same stage, drawn instead of or alongside |

One method, several representations. Converting between them changes only the notation: a diamond ↔ `IF … THEN … ELSE`, a back-arrow ↔ `WHILE` or `REPEAT`, a parallelogram ↔ `READ`/`PRINT`, a rectangle ↔ an assignment. **No compiler accepts any of the three.**

## The seven steps, applied to the course's own problem

*Problem: determine the number of students that passed or failed an examination; and if more than seven students pass, the tuition fee is increased.*

1. **Problem definition** — a clear understanding of the problem, with **inputs, process, outputs and requirements** stated. Inputs: the number of students and their examination results. Process: accept each student's result and determine whether that student passed or failed. Outputs: the number of passes, the number of failures, and a determination of whether tuition should be increased.
2. **Identification of main steps** — break the problem into its integral parts. Step 1 initialise the storage elements; Step 2 set up all counters; Step 3 accept examination results and determine pass or fail; Step 4 increment the relevant counter on the outcome of Step 3; Step 5 display all outputs.
3. **Header writing** — the header **gives a description of the problem to be solved** and must include **the name of the algorithm, a short description of its purpose, and a list of the required inputs and outputs.**
4. **Using variables and data structures** — the **name and data types** of the variables should **represent exactly what type of information is being stored**: `passes` (students who passed), `failures` (students who failed), `student` (a number indicating the current student's result, incremented as more results arrive); all of **integer** type.
5. **Using constructs to describe logic** — **WHILE** iterates over all the results one after the other; **IF-THEN-ELSE** increments the specific counter according to whether the condition is satisfied. The constructs must describe the steps **without ambiguity**.
6. **Using clear and concise language** — avoid **complicated syntaxes and technical terms**. The course's own comparison: `FOR i = 0 to 20 / IF string[i] = '#'` is worse than `FOR each index of string / IF string(index) is equal to hash THEN`, because the first borrows one language's indexing syntax. Worst of all is the mixture — `FOR each index of string / If string[i] = '#' / Return "Hash found" / END if` — which changes register line by line and drops the capitals.
7. **Testing and refining** — after writing, test it **on paper or by scanning through** to be sure it **accurately describes the flow and logic** and **handles all the required cases**; refine to **correct errors or improve the effectiveness** of the algorithm.

## The course's solution, and what step 7 should have caught

As printed in the deck:

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

Four faults, each one a rule from earlier in the week:

- **The condition is one student too generous.** The problem says the fee rises if **more than seven** students pass; the pseudocode raises it when **seven or more** have passed. With exactly seven passes the two disagree. The test should be `passes > 7`, i.e. eight or more.
- **No `ENDIF` and no `ENDWHILE`,** so nothing marks where the loop body and the ELSE branch end.
- **`add one to student counter` is not indented into the loop.** Taken literally the counter is incremented once, after the loop — which is what makes `WHILE student counter is active` a loop that never ends.
- **Lowercase keywords** on three lines (`initialise`, `if`, `print`), against the capital-letters rule, and **`WHILE student counter is active` is ambiguous** — "active" is never defined, so step 6's "without ambiguity" fails.

Rewritten, with the header the course asks for:

```
Algorithm:   Determine whether tuition should be increased
Description: accepts the examination results of students, counts the passes
             and the failures, and decides whether the tuition fee is raised
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

Traced on 10 students whose results are P F P P P F P P P P: the WHILE runs for `student` = 1…10 and stops when `student` becomes 11, `passes` ends at 8 and `failures` at 2 (8 + 2 = 10, the count check that catches a misplaced increment). 8 > 7, so **increase tuition** is printed. With one fewer pass, `passes` = 7, `7 > 7` is false and nothing is printed — the case the printed version gets wrong.

## Tracing: the three counts you must be able to do cold

- **`FOR i = a TO b`** runs the body **b − a + 1** times (the bounds are inclusive at both ends). `FOR k = 2 TO 8` runs 7 times, with k = 2,3,4,5,6,7,8.
- **`WHILE c`** tests **before** every pass: **0 or more** passes, and if the body never changes what `c` tests, the loop never ends.
- **`REPEAT … UNTIL c`** tests **after** every pass: **1 or more** passes, and it stops when `c` becomes **true** — so `UNTIL c` corresponds to `WHILE NOT c`, not to `WHILE c`.
- Converting `REPEAT { READ n; … } UNTIL n = 0` into a WHILE needs the `READ` written **twice**: once before the loop and once at the foot of the body, because WHILE has to have a value to test before the first pass.

## Commonly confused

| Pair | The distinction |
|---|---|
| **Pseudocode vs flowchart** | **Textual** vs **graphical** representation of the same thing. One word separates the two definitions, and the mid-lesson question turns on it. The rest follows: the flowchart is visual and quick to read; pseudocode is not visual and **takes longer to read**, but needs no software, no drawing, and no redraw when it changes. |
| **Pseudocode vs algorithm** | The **algorithm** is the procedure itself and may be written in **any** notation — natural language, code, mathematical symbols — and is **precise and well defined**. **Pseudocode** is one **high-level, informal** representation of it, in a **combination of natural and programming language elements**. Test: could it have been written in mathematical symbols and still be the same thing? Then you are talking about the algorithm. |
| **Pseudocode vs program** | Pseudocode is **not meant to be executed as the actual code**. It looks executable because it borrows keywords, but the keywords belong to no one language and no grammar defines them. Handing it to a compiler fails. |
| **WHILE vs REPEAT-UNTIL** | Where the condition sits. WHILE: **at the beginning/top**, so the body can run **zero** times. REPEAT-UNTIL: **at the ending/bottom**, so the body always runs **at least once**. Also the sense is inverted — WHILE continues while its condition is **true**, REPEAT-UNTIL stops when its condition becomes **true**. |
| **WHILE vs FOR** | FOR sets **all** the necessary conditions **at the top**, so the number of repetitions is fixed before the loop is entered — use it when you know how many. WHILE sets **some** condition at the top and **other conditions in the body**, so the number of repetitions depends on what happens inside — use it when the data decides, e.g. reading until a sentinel. |
| **IF-THEN-ELSE vs CASE** | Both change the normal flow with conditions. CASE is the **more generalised form**: one expression tested against a list of conditions, with **OTHERS** as the default. A chain of IFs does the same job; CASE is what you write when the chain is long and all the tests are on the same expression. |
| **CASE/OTHERS vs EXCEPTION/WHEN** | CASE chooses between **expected** values of an expression, and the choice is part of the normal design. EXCEPTION/WHEN responds to **unexpected or unwanted events that take place while the program is running** — the statements in the BEGIN block were meant to succeed, and the WHEN clauses only run when they do not. Reading EXCEPTION as "CASE for errors" loses that: the WHEN clauses are not alternatives you select among, they are handlers that fire on failure. |
| **`CALL x with y` vs `CALL x RETURNING z`** | `with` names what goes **in**; `RETURNING` names the variable that receives what comes **out**. `CALL SquareRoot with orbitHeight RETURNING norminalOrbit` does both. |
| **"Easily modified" (advantage) vs "no accepted standards" (disadvantage)** | They are the same property seen from two sides. Because no fixed syntax is imposed, you may change any line in any text editor with no tool and no redraw; and because no fixed syntax is imposed, **anyone can write pseudocode in their own way**, so two correct pseudocodes for one algorithm can be unreadable to each other. |
| **Initialising inside vs outside a loop** | `SET total TO 0` **before** the loop accumulates across all passes; the same line **inside** the loop resets the accumulator every pass, so at the end it holds only the contribution of the last pass. The output is not obviously wrong — it is a plausible number — which is why this is the commonest undetected pseudocode bug. |

*Note: the extractor drops ligatures, so the source reads "wrien" for "written", "dierent" for "different", "dicult" for "difficult" and "eectiveness" for "effectiveness". Three genuine faults in the slides are worth knowing about because they will otherwise be memorised as fact: the REPEAT-UNTIL skeleton is printed as `REPEAT / sequence / ENDFOR condition`, where the closing keyword must be `UNTIL`; the rules slide is cut off mid-sentence after three rules ("Pseudocode statements should be language independent; not in a particular programming…") while the week's Summary sheet says **four** rules should be followed — the fourth given above, indentation, is the standard 100-level fourth rule and is the one the deck's own examples silently obey; and the worked solution's `if seven or more students passed` contradicts the problem's own "more than seven", as set out above.*
