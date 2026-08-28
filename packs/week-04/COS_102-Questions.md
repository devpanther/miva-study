# COS_102 — Week 4 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 5, not this week. Notes closed. 12 MCQ + 3 short answer, about 30 minutes.*

## Section A — Multiple choice (12)

**1.** The course defines an algorithm as:
a) A set of instructions written in a particular programming language
b) A set of commands the computer can follow, implemented in a particular order, to carry out a task
c) A tool used to carry out a problem-solving plan
d) A diagram of boxes and arrows showing the steps of a solution

**2.** Which statement matches the course's account of the relationship between algorithms, programs and computers?
a) Computers design algorithms, which are then written up as programs by people
b) Programs are plans for solving problems and algorithms are their machine form
c) Algorithms are plans designed by people and must be converted into a computer program
d) An algorithm is a program that has not yet been tested on a computer

**3.** The Summary sheet lists the key characteristics of algorithms as:
a) Input, unambiguity, finiteness, effectiveness, language independence
b) Input, output, modularity, robustness, simplicity
c) Sequence, selection, repetition, finiteness, correctness
d) Correctness, maintainability, extensibility, robustness, simplicity

**4.** The five algorithm development steps, in order, are:
a) Analysis, description, refinement, high-level development, review
b) Description, analysis, high-level development, refinement, review
c) Description, high-level development, analysis, review, refinement
d) Analysis, high-level development, description, refinement, review

**5.** "Print the report in the usual format" appears in a client's problem description. Which step-1 issue does the course say this is?
a) An incomplete description, because no output device is named
b) A description relying on unstated assumptions, because "the usual format" is known only to the client
c) An ambiguous description, because "print" could mean display or paper
d) A refinement failure, because the implementer's knowledge was not considered

**6.** Algorithm refinement (Step 4) is carried out on the basis of:
a) The data available, the formulas involved and how the values are related
b) Whether the algorithm solves a general problem and whether its complexity can be reduced
c) Who will implement the algorithm, how much knowledge that person has, and the computer specifications
d) The programming language chosen and the compiler's requirements

**7.** The course states that an algorithm representation must have:
a) Inputs, a process and outputs
b) Sequence, selection and repetition
c) Modularity, correctness and robustness
d) Best case, worst case and average case

**8.** Priori analysis is distinguished from posterior analysis by the fact that priori analysis:
a) Measures the space and running time of the finished code
b) Is carried out before implementation in a particular language and does not directly affect it
c) Applies only to the best case, while posterior applies to the worst case
d) Is performed by the client, while posterior is performed by the programmer

**9.** A loop whose loop variable is divided by a constant amount on each pass has time complexity:
a) O(n)   b) O(1)   c) O(log n)   d) O(2ⁿ)

**10.** Two algorithms for the same problem cost 1000N and N² operations. Which is correct, on the course's reasoning?
a) 1000N is less efficient, because it is larger for every input of size under 1000
b) They are equally efficient, since both are polynomial in N
c) N² is less efficient, because the deciding factor is the growth rate, not the value at small N
d) N² is more efficient, because it has no large constant multiplier

**11.** Which pair is stated by the course as the reason we need algorithms?
a) Correctness and simplicity
b) Performance and scalability
c) Modularity and extensibility
d) Time complexity and space complexity

**12.** In the course's flowchart for summing five numbers, the box `Is count < 5` is reached only after `Enter n`, `sum = sum + n` and `count = count + 1` have been executed. It follows that:
a) The loop body may execute zero times if the user enters nothing
b) The loop body executes at least once, because the condition is tested after the body
c) The algorithm is a `FOR` loop, because the number of repetitions is fixed at five
d) The algorithm violates finiteness, since the test is not made before entry

## Section B — Short answer (3)

**13.** Name the five algorithm development steps in order, and for each state in one line what it does. Then give the two questions the course says are asked at the review step.

**14.** Write out, in pseudocode, an algorithm that reads numbers from the user until a sentinel value is entered and prints the largest of them. Then state two ways your algorithm could fail on unusual input and how you have guarded against them.

**15.** Distinguish priori from posterior analysis, and time from space complexity. Then explain what big O notation is used for and why the growth rate — rather than the cost at a particular input size — is the deciding factor when two algorithms are compared.

## Answers

**1. b — A set of commands the computer can follow, implemented in a particular order.** *Concept: definition of an algorithm.* The course's definition includes the ordering and adds that algorithms consist of inputs, a process and outputs. (a) defines a program; (c) defines a computer; (d) defines one *representation* (a flowchart), not the algorithm itself.

**2. c — Algorithms are plans designed by people and must be converted into a computer program.** *Concept: algorithm vs program vs computer.* The course states each of the three separately: computers are tools that carry out a problem-solving plan, programs are sets of instructions describing the steps to follow, algorithms are plans designed by people.

**3. a — Input, unambiguity, finiteness, effectiveness, language independence.** *Concept: characteristics of algorithms.* (d) and part of (b) list the **design considerations** (modularity, correctness, maintainability, functionality, robustness, simplicity, extensibility), which is the other list on the same sheet; (c) lists the three requirements of algorithm **representation**.

**4. b.** *Concept: the algorithm development process.* Problem description → problem analysis → high-level algorithm development → algorithm refinement → algorithm review. Analysis can only follow a description, and refinement can only follow something to refine.

**5. b — Unstated assumptions.** *Concept: the three problem-description issues.* The course names descriptions relying on **unstated assumptions**, **ambiguous** descriptions and **incomplete** descriptions. "The usual format" is complete and unambiguous *to the client*; it carries knowledge the client never stated and the programmer does not have — which is why the course notes that two different parties are involved.

**6. c.** *Concept: stepwise refinement.* The course lists exactly these three bases. (a) is the **problem analysis** checklist and (b) is the **review** checklist — the temptation is to attach the right-sounding list to the wrong step.

**7. b — Sequence, selection and repetition.** *Concept: requirements of algorithm representation.* The course requires these so that the algorithm is easily translatable into various programming languages. (a) is true of an algorithm's structure but is not the representation requirement.

**8. b.** *Concept: priori vs posterior analysis.* Priori analysis is carried out **before** implementing the algorithm in a particular programming language and does not directly affect the implementation; posterior analysis is carried out **after** implementation and deals with space and running-time requirements — which is what (a) describes.

**9. c — O(log n).** *Concept: reading time complexity off a loop.* The course's rule: a loop is O(log n) if the loop variable is **divided or multiplied** by a constant amount. O(n) is the rule for a variable **incremented or decremented** by a constant amount — the distractor for anyone who reads "changed by a constant" without noticing which operation.

**10. c — N² is less efficient, because the deciding factor is the growth rate.** *Concept: big O and growth rate.* The course uses precisely this pair to show that the most important factor when comparing algorithms is the growth rate. 1000N is indeed larger for small N, which is what makes (a) tempting; big O deliberately ignores that region.

**11. b — Performance and scalability.** *Concept: why algorithms matter.* The course states that breaking a solution into smaller steps lets us optimise performance, and names performance and scalability as the reasons we need algorithms. (a) and (c) are design considerations; (d) names the two kinds of complexity.

**12. b — The body executes at least once, because the condition is tested after the body.** *Concept: post-test (repeat-until) vs pre-test (while) loops.* The flow enters the body before ever evaluating the condition, so this is `REPEAT … UNTIL`, not `WHILE`. (a) is what would be true of a pre-test loop; (c) mistakes a fixed iteration count for the `FOR` construct, which the flowchart does not use; (d) confuses "no test before entry" with "no test at all" — the loop does terminate, so finiteness holds.

**13.** *Concept: the five development steps.* **Step 1 — Problem description:** obtain a statement of the problem, watching for unstated assumptions, ambiguity and incompleteness, since the client seeking the solution and the programmer providing it are two different parties. **Step 2 — Problem analysis:** analyse the described problem so the **starting and ending points** are clear (what data we have, where it is, what formulas and rules apply, how values relate; what results are expected, what parameters changed, what changes were made, what items no longer exist). **Step 3 — High-level algorithm development:** produce an algorithm covering the **main parts of the solution and not every minor detail**, because detailing everything before having a solution is time-wasting and costly. **Step 4 — Algorithm refinement:** stepwise refinement of each high-level step, based on **who will implement it, how much knowledge they have, and the computer specifications**. **Step 5 — Algorithm review:** confirm the algorithm solves the problem. The two review questions are: **can the algorithm only solve a particular problem, or can it be applied to more general problems?** and **can the complexity of the algorithm be reduced?**

**14.** *Concept: writing a sentinel-controlled algorithm, with robustness.* A correct answer looks like this:

```
START
    max   <- 0
    count <- 0
    PROMPT "Enter a number, or -1 to finish"
    INPUT num
    WHILE num <> -1 DO
        IF count = 0 OR num > max THEN
            max <- num
        ENDIF
        count <- count + 1
        PROMPT "Enter a number, or -1 to finish"
        INPUT num
    ENDWHILE
    IF count = 0 THEN
        OUTPUT "No numbers were entered"
    ELSE
        OUTPUT "Maximum is ", max
    ENDIF
STOP
```

The two failures to guard against: **(i)** if `max` is initialised to 0 and the test is only `num > max`, a set of all-negative numbers such as −8, −3, −25 reports a maximum of 0, a value never entered — the guard `count = 0 OR num > max` takes the **first** number as the maximum whatever its sign; **(ii)** if the user enters the sentinel immediately, `max` has never been assigned, so the `count = 0` branch reports that no numbers were entered instead of printing a meaningless value. Note also that the sentinel must be read at the **bottom** of the body so that −1 is neither compared nor counted, and that the loop is pre-test so the empty case reaches the loop's exit without executing the body.

**15.** *Concept: analysis types, the two complexities, and growth rate.* **Priori analysis** is carried out **before** an algorithm is implemented in a particular programming language and **does not directly affect the implementation** — it reasons about the design on paper. **Posterior analysis** is carried out **after** implementation in a particular language and deals with the **space and running-time requirements** of the resulting code. **Time complexity** deals with the time an algorithm requires to complete its execution; **space complexity** deals with the amount of computer space it requires; both are expressed with **big O notation**, and both may be quoted as best case (minimum time for input of size n), worst case (maximum time) or average case (typical input of size n). **Big O** exists because a computing problem generally admits various solutions in the shape of different algorithms with different logic, and we want to compare them for efficiency; it does this by **describing the growth rate** — the ordered scale C, log N, log² N, N, N log N, N², N³, 2ᴺ. The growth rate decides rather than the cost at a particular input size because constants and small inputs are not where the difference lies: 1000N is far larger than N² for every N below 1000, yet N² overtakes it and keeps rising faster for ever afterwards, so on any input large enough to matter the quadratic algorithm is the less efficient one.
