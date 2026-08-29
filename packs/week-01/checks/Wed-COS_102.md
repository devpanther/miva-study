# Wednesday — COS_102 nightly check

*This session took Week 1 conceptually: what problem-solving in computer science actually is and why it must be systematic; what makes a problem a computational problem; the four steps to problem-solving as a sequence of distinct jobs rather than a list to recite; the meaning of algorithm, pseudocode and flowchart and what each one buys you; the three required properties of an algorithm's steps and what breaks when each is missing; decomposition and its limits; the translator chain of interpreter, compiler and assembler; the difference between debugging and testing and between the three error types; the two kinds of program documentation and when documentation begins; and refactoring — what it must preserve, what it changes, and when it is not refactoring at all. No traces, no arithmetic.*

*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The lesson insists that a programmer must first understand how a *human* would solve the problem before programming it. What is the reason?

a) A computer can only run a procedure that has already been proved correct by hand.
b) The computer supplies volume and speed, not method; it executes a procedure someone has worked out.
c) High-level languages cannot express a problem that has not been written out on paper first.
d) The CPU processes inputs in reverse order, so the human solution must be inverted before coding.

**2.** What makes a problem a *computational* problem in the sense used in this course?

a) It can be answered YES or NO, which is the form a computer works in.
b) It is a real-world problem rather than an abstract one.
c) It is large enough that a human could not finish it by hand in reasonable time.
d) It has a step-by-step solution, and its inputs, limitations and output conditions are well defined.

**3.** A plan contains the step "keep adding the grades until you have enough of them". Which requirement on an algorithm's steps does this violate, and why does it matter?

a) Unambiguity — "enough" reads two ways, so no one definite statement can replace it.
b) Order — the step does not say whether the adding happens before or after the grades have been read into the program.
c) Completeness — the algorithm names no stop condition anywhere, so no further step could ever be reached from it.
d) None of them; the programmer supplies the missing detail during coding, which is exactly what the coding stage is for.

**4.** Pseudocode "looks like the actual program" but cannot be compiled or executed. What follows from that?

a) Pseudocode must be rewritten as a flowchart before it can be turned into a program.
b) Pseudocode is only useful for problems too small to need a compiler.
c) Nothing checks it for you, so an error in the pseudocode survives untouched into the source code.
d) Pseudocode is therefore not a representation of the algorithm, only an informal comment on it.

**5.** In the compilation and execution process described this week, what distinguishes an interpreter from a compiler?

a) The interpreter catches logical as well as syntax errors, whereas the compiler can only ever report syntax errors.
b) The interpreter goes straight to machine code; the compiler stops at assembly, which an assembler must still convert.
c) The interpreter works on low-level languages, while the compiler is the tool that works on high-level languages.
d) The interpreter produces the source code from the pseudocode, while the compiler produces the pseudocode itself.

**6.** Debugging and testing are named as separate activities. What separates them?

a) Debugging finds errors so they can be removed; testing verifies that the program does what was expected.
b) Debugging is done by the programmer, testing by the end user after the program is delivered.
c) Debugging deals with syntax errors, testing with logical and run time errors.
d) Debugging happens while coding, testing only after the program has been documented.

**7.** Which change to a working program is a *refactor* in the sense the week defines?

a) Adding a check that rejects a negative grade, so wrong data no longer reaches the average.
b) Making the program run faster by no longer printing the grade alongside PASS or FAIL.
c) Correcting a division that used the wrong number of grades, so the average comes out right.
d) Replacing five repeated addition statements with one loop that produces the same output.

**8.** The lesson advises that, when parts of a problem cannot be solved, you ignore the difficult parts and do the easier ones first. What is the actual cost of this tactic?

a) It produces code that cannot later be refactored, because refactoring requires a complete solution.
b) It reverses the four steps, since carrying out a partial plan comes before the plan is complete.
c) The easy parts may be built on assumptions the hard part later overturns, forcing that work to be redone.
d) None; the tactic is safe, because solving all the small problems automatically solves the main problem.

**9. (explain why)** Pseudocode cannot be compiled or executed, so writing it costs time and returns nothing runnable. Explain why it is still worth writing — what does it give you that going straight to source code does not?

**10. (explain why)** Explain why a program can compile cleanly and run to completion without crashing and still be wrong. Name which of the three error types the week identifies is responsible, and say why the compiler is powerless against it.

**11. (explain why)** Explain why decomposition works — why solving every small subproblem should solve the main problem — and state one condition under which breaking a problem into pieces does *not* deliver a solution to the whole.

**12. (explain why)** Program documentation is said to begin at the problem analysis stage rather than once the program works. Explain why that timing matters, and why user documentation and programmer documentation cannot sensibly be merged into one document.
