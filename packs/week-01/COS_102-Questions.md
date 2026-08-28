# COS_102 — Week 1 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 2, not this week. Notes closed. 12 MCQ + 3 short answer, about 30 minutes.*

## Section A — Multiple choice (12)

**1.** A problem whose solution is "a value or values with a particular property" is a:
a) Decision problem  b) Search problem  c) Optimization problem  d) Counting problem

**2.** "How many students in the class scored above 44?" is which type of computational problem?
a) Decision  b) Search  c) Optimization  d) Counting

**3.** Which is the correct order of the four steps to problem-solving?
a) Create a plan → understand the problem → carry out the plan → evaluate and refactor
b) Understand the problem → carry out the plan → create a plan → evaluate and refactor
c) Understand the problem → create a step-by-step solution plan → carry out the plan → evaluate and refactor the solution
d) Understand the problem → create a plan → evaluate and refactor → carry out the plan

**4.** According to the course, an algorithm's steps must be:
a) Short, numbered and reversible
b) Ordered, unambiguous and complete
c) Graphical, textual and executable
d) Compiled, executed and debugged

**5.** Which statement about pseudocode is correct?
a) It is the graphical representation of an algorithm
b) It is the textual representation of an algorithm and can be compiled
c) It is the textual representation of an algorithm and cannot be compiled or executed
d) It is a low-level language understood directly by the CPU

**6.** A compiler converts:
a) High-level language into machine code directly
b) High-level language into assembly language
c) Assembly language into machine code
d) Machine code into high-level language

**7.** An assembler converts:
a) High-level language into assembly language
b) Assembly language into machine code
c) High-level language into machine code directly
d) Pseudocode into source code

**8.** Which tool converts a high-level language into machine code **directly**?
a) Compiler  b) Assembler  c) Interpreter  d) Linker

**9.** Carrying out the solution plan involves which four activities?
a) Coding; compilation and execution; debugging and testing; program documentation
b) Understanding; planning; coding; refactoring
c) Analysis; design; implementation; maintenance
d) Input; process; output; storage

**10.** The documentation containing all the technical details so the program can be upgraded and maintained effectively is:
a) User documentation  b) Programmer documentation  c) Installation documentation  d) Test documentation

**11.** Which set names the three error types listed in the course?
a) Syntax, semantic, fatal
b) Syntax, logical, run-time
c) Compile-time, logical, hardware
d) Typing, arithmetic, memory

**12.** Refactoring a solution:
a) Changes what the solution does so it produces correct output
b) Improves structure, design and efficiency without changing the function of the solution
c) Removes the need for documentation
d) Converts pseudocode into a flowchart

## Section B — Short answer (3)

**13.** State the four computational problem types and give the one-line definition of each exactly as the course defines it.

**14.** Describe the full translator chain from a program written in a high-level language to something the computer can execute, naming each translator and what it produces. Then state, in one sentence, how the interpreter route differs.

**15.** Distinguish debugging from testing, and distinguish user documentation from programmer documentation. Two sentences each.

## Answer key

**1. b — Search problem.** *Concept: computational problem types.* Search returns the value(s) possessing the stated property, not a YES/NO verdict.
**2. d — Counting problem.** *Concept: counting vs search.* "How many" asks for the **number** of values with a property; "which students" would have made it a search problem.
**3. c.** *Concept: the four steps.* Understand → plan → carry out → evaluate and refactor. Evaluation comes last, on a working solution.
**4. b — Ordered, unambiguous and complete.** *Concept: definition of an algorithm.*
**5. c.** *Concept: pseudocode.* Textual and program-like, but not compilable or executable.
**6. b — High-level into assembly language.** *Concept: the translator chain.*
**7. b — Assembly language into machine code.** *Concept: the translator chain.*
**8. c — Interpreter.** *Concept: interpreter vs compiler.* It skips the assembly stage.
**9. a.** *Concept: the four parts of carrying out the solution plan.*
**10. b — Programmer documentation.** *Concept: documentation split.*
**11. b — Syntax, logical, run-time.** *Concept: error classification.*
**12. b.** *Concept: refactoring.* Never changes the function of the solution.
**13.** *Concept: computational problem types.* **Decision** — solution can only be YES or NO. **Search** — solution is a value or values with a particular property. **Optimization** — the best possible solution is accepted as the solution. **Counting** — the solution is determining the number of values with a particular property.
**14.** *Concept: translator chain.* A **compiler** converts the high-level language into **assembly language**; an **assembler** then converts that assembly language into **machine code**, the only form the computer understands and executes. Difference: an **interpreter** converts the high-level language into **machine code directly**, bypassing the assembly stage.
**15.** *Concept: debugging vs testing; documentation split.* **Debugging** finds errors so that they can be removed to avoid program failure; **testing** verifies whether the program works as expected — testing reveals a fault, debugging removes it. **User documentation** contains what the end user needs for installation and use; **programmer documentation** contains the technical details so the program can be upgraded and maintained effectively.
