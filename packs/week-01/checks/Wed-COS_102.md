# Wednesday — COS_102 nightly check

*Problem types, the four steps, and algorithm/pseudocode/flowchart as planning tools.*
*Sit cold, notes closed, 8 minutes. Score out of 6.*

**1.** A logistics company must deliver to 12 towns and wants the route with the lowest total fuel cost. Which computational problem type is this, and why?
a) Decision problem — the driver must decide which road to take at each junction
b) Search problem — the answer is a route, which is a value with a property
c) Optimization problem — many valid routes exist and the one accepted as the solution is the best possible one
d) Counting problem — the number of towns, 12, must be counted first

**2.** "Does any student in COS_102 have a final grade above 44?" Compare it with "List every student in COS_102 with a final grade above 44." The difference between these two is that:
a) The first is a decision problem (answer is only YES or NO) and the second is a search problem (answer is the values with the property)
b) The first is a search problem and the second is a counting problem
c) Both are decision problems, because both test the condition "above 44"
d) The first is a counting problem because it examines every student before answering

**3.** A student writes out an ordered, unambiguous, complete set of steps in English, then draws them as boxes and arrows, then types them in a program-like text form. How many algorithms does the student now have?
a) Three — English steps, flowchart and pseudocode are three different algorithms
b) Two — the flowchart and the pseudocode are algorithms; the English steps are only notes
c) One — there is a single algorithm, shown in a graphical representation and a textual representation
d) None — a set of steps only becomes an algorithm once it is compiled

**4.** A programmer inputs the five grades, computes the average, prints PASS or FAIL, and the program runs and gives correct output. Under the four steps, what remains to be done?
a) Nothing — the plan has been carried out, so problem-solving is complete
b) Step four: evaluate the working solution and see whether it can be refactored
c) Return to step one, because understanding the problem must be repeated after coding
d) Convert the pseudocode into a flowchart, since the flowchart is the final deliverable

**5. (explain why)** A classmate says: "I skipped straight to writing code because I already knew the formula for the average." Using the course's account of *understanding the problem*, explain what specific things the classmate may not yet have settled, and why the course insists a programmer must first understand how a *human* would solve the problem.

**6. (explain why)** Explain why a pseudocode and a flowchart of the same solution can never disagree about what the program does — and what it means if a student's pseudocode and flowchart *do* disagree.

---

## Answers

**1. c** — *Optimization vs search.* Optimization is defined as the problem where **the best possible solution is accepted as the solution**; here many routes satisfy "visits all 12 towns", so it is not enough to find one with the property. Distractor (b) encodes the classic search/optimization confusion: a search problem is satisfied by *any* value with the property.

**2. a** — *Decision vs search.* A **decision** problem's solution can only be **YES or NO**; a **search** problem's solution is **the value or values with the particular property**. The trap in (d) is thinking the type is fixed by the *work done internally* (scanning every student) rather than by the *form of the answer*.

**3. c** — *Algorithm vs its representations.* The algorithm is the ordered, unambiguous, complete **procedure**; the flowchart is its **graphical** representation and the pseudocode its **textual** one. (a) mistakes representation for identity; (d) mistakes pseudocode for compilable code — pseudocode cannot be compiled or executed at all.

**4. b** — *The fourth step: evaluate and refactor.* A working solution is where step four begins, not where problem-solving ends: the solution is evaluated to see whether it can be made more concise, efficient and better structured **without changing its function**. (a) is the common "it runs, so I'm done" error.

**5.** *Concept: understanding the problem — inputs, processes, output.* The classmate has not answered the three questions the course requires: **what are the inputs** (five grades, in what form and order), **what are the processes** (compute the average, then compare against the pass mark), and **what is the output** (PASS or FAIL, printed). Knowing the average formula settles only the process, not the inputs, output conditions or limitations, which are exactly what a computational problem requires to be well defined. The course insists the programmer first understands how a **human** would solve it because the computer cannot be told anything the programmer cannot already state as an ordered, unambiguous, complete human procedure — the computer contributes speed and volume, not understanding.

**6.** *Concept: two representations, one algorithm.* They cannot disagree because both represent the **same single algorithm** — the pseudocode states its steps textually, the flowchart draws the same sequence graphically; neither is the algorithm itself, so neither can carry behaviour the other lacks. If a student's pseudocode and flowchart disagree — say the pseudocode tests `Grade > 44` and the flowchart tests `Grade > 45` — then at least one is a faulty transcription, so the underlying algorithm is not yet unambiguous and complete, and the conflict must be resolved at the planning stage before any code is written.
