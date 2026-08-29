# COS_102 — Week 1

*Introduction to Problem Solving · Week 1 (7–13 Sep 2026)*

*Source note: the extracted text of both lecture decks is essentially complete. Two illustrative slides were images only — the "Pseudocode → Programming Code" table and the "Old Solution / New Solution" refactoring example — and the text of Example 1 (the algorithm) and Example 2 (its pseudocode) did not extract; only Example 3's flowchart did. The grade example below is reconstructed from that flowchart, which is faithful to the slide.*

## Most likely to be examined

1. **The four steps to problem-solving, in order:** understand the problem → create a solution step-by-step plan → carry out the solution plan → evaluate and refactor the solution.
2. **The four computational problem types and their defining answer-form:** decision (YES/NO), search (a value or values with a particular property), optimization (the best possible solution is accepted), counting (the *number* of values with a particular property).
3. **Algorithm, pseudocode, flowchart** — definitions and the relation between them (pseudocode = textual representation of an algorithm; flowchart = graphical representation).
4. **The three required properties of an algorithm's steps:** ordered, unambiguous, complete — "so that it can easily be converted into a computer program."
5. **What "carrying out the solution plan" entails:** coding → compilation and execution → debugging and testing → program documentation.
6. **The translator chain:** interpreter converts high-level language *directly* to machine code; compiler converts high-level to *assembly*; assembler converts assembly to machine code.
7. **Refactoring:** does **not** change the function of the solution; it improves efficiency, structure and design, producing a more concise and efficient solution.
8. **The two documentation types** (user vs programmer) and that documentation *starts at problem analysis and continues to testing*.

## Definitions

- **Computational problem** — a problem with a step-by-step solution, in which the inputs, the problem limitations and the output conditions are all well defined.
- **Decision problem** — the solution is either YES or NO.
- **Search problem** — the solution is a value or values with a particular property.
- **Optimization problem** — the best possible solution is accepted as the solution.
- **Counting problem** — the solution is the number of values with a particular property.
- **Algorithm** — a procedure of steps used to solve a given problem; the steps must be **ordered, unambiguous and complete**.
- **Pseudocode** — the textual representation of an algorithm, written so as to be easily convertible into programming statements; it looks like a program but **cannot be compiled or executed**.
- **Flowchart** — the graphical representation of an algorithm; the sequence of operations in a program, drawn with symbols for **start, stop, input, process, merge and decision**.
- **Decomposition** — breaking the main problem into smaller problems until they are small enough to be solved; solving all the small problems solves the main problem.
- **Coding** — writing the actual program; the coded program is called the **source code**.
- **High-level language** — written in a form humans easily understand (C, C#, Java). **Low-level language** — written in a form the computer easily understands (assembly language, machine code).
- **Interpreter / Compiler / Assembler** — high-level → machine code / high-level → assembly / assembly → machine code.
- **Debugging** — the process that *finds* errors so they can be removed to avoid program failure. **Testing** — the process that *verifies* the program works as expected.
- **Error types** — syntax, logical, run time.
- **User documentation** — what the end user needs to install and use the program. **Programmer documentation** — the technical detail needed to upgrade and maintain it.
- **Refactoring** — improving efficiency, structure and design **without changing the function** of a working solution.

## Structure of the week

| Step | Name | What it involves |
|---|---|---|
| 1 | Understand the problem | Answer: What are the inputs? What are the processes involved? What is the output? Inputs = anything convertible to digital form (numbers, letters, pictures, music, videos, sound waves, retinal scans, Wi-Fi signals). Outputs = printed documents, on-screen data, visuals, audio, digitized speech, charts and graphs, images. |
| 2 | Create a solution step-by-step plan | Decompose into smaller problems; prepare the **algorithm** and represent it as **pseudocode** and **flowchart**. |
| 3 | Carry out the solution plan | **Coding → compilation and execution → debugging and testing → program documentation.** Tactics: use the pseudocode as a guide; if it cannot be solved at once, split it and solve each piece separately; if some parts cannot be solved, ignore the difficult parts and do the easy ones first — the hard parts often become possible afterwards. |
| 4 | Evaluate and refactor | Ask: can we derive the result differently? can we improve performance? are there other ways to refactor? how have other people solved it? |

**How computers solve problems:** problem is programmed by a programmer → inputs enter via input devices (keyboard, mouse, joystick, external memory) → CPU processes → results leave via output devices (printer, monitor, loudspeaker, sound card). The programmer must first understand how a *human* would solve it; the computer's contribution is **larger volumes, faster and more efficiently** — not the method.

## Commonly confused

- **Algorithm vs pseudocode** — the algorithm is the procedure itself; the pseudocode is one *representation* of it. Test: change the wording but keep the steps — the pseudocode changed, the algorithm did not.
- **Pseudocode vs source code** — test: can it be compiled or executed? Pseudocode never can; source code can.
- **Compiler vs interpreter** — test: what comes out? Compiler → assembly language (an assembler is still needed); interpreter → machine code directly.
- **Compiler vs assembler** — test: what goes in? High-level language → compiler; assembly language → assembler.
- **Debugging vs testing** — test: is the goal to *find and remove* a fault (debugging) or to *confirm* expected behaviour (testing)?
- **Syntax vs logical error** — test: does it stop the program being built/run at all (syntax), or does it run happily and give the wrong answer (logical)? A **run time** error appears only while the program is running.
- **Refactoring vs fixing/extending** — test: did the function of the solution change? If yes, it is not refactoring.
- **Search vs optimization problem** — test: is *any* value with the property acceptable (search), or must it be the *best* one (optimization)?
- **Search vs counting problem** — test: does the answer name the values (search) or state how many there are (counting)?
- **User vs programmer documentation** — test: does the reader need to *use* the program or to *change* it?
