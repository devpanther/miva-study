# COS_102 — Week 4

*Introduction to Problem Solving · Week 4 (28 Sep – 4 Oct 2026)*

Topic: **Algorithm Concepts** — Algorithms I (what algorithms are, the 5-step development process, representation) and Algorithms II (writing one end-to-end, analysis, complexity, characteristics, design considerations).

## Most likely to be examined

1. **Definition of an algorithm** — "a set of commands that the computer can follow to carry out calculations or other problem-solving tasks"; "instructions implemented in a particular order to carry out a task". An algorithm **consists of inputs, a process, and outputs**, and can be **represented as either pseudocode or a flowchart**.
2. **The five algorithm development steps, in order and by name**: Step 1 Problem description → Step 2 Problem analysis → Step 3 High-level algorithm development → Step 4 Algorithm refinement (stepwise refinement) → Step 5 Algorithm review.
3. **The three issues that arise in problem description**: descriptions relying on unstated assumptions; ambiguous description; incomplete description. (They arise because two different parties are involved: the client, finding a solution, and the programmer, providing it.)
4. **The three forms an algorithm's representation must have**: **sequence**, **selection**, **repetition** — and the pseudocode shape of each.
5. **Priori vs posterior analysis** — priori is carried out *before* implementing the algorithm in a particular programming language and does not directly affect the implementation; posterior is carried out *after* implementation and deals with the space and running-time requirements.
6. **Time complexity vs space complexity**, plus the three cases: **best case** (minimum time for an input of size n), **worst case** (maximum time for an input of size n), **average case** (time for a typical input of size n). Both are represented by **Big O notation**, which describes the **growth rate**.
7. **The Big O time-complexity rules**: O(1) = no loop, no recursion, no call to a non-constant-time function; O(n) = loop variable incremented/decremented by a constant amount; O(log n) = loop variable divided/multiplied by a constant amount; O(log log n) = loop variable reduced/increased exponentially by a constant amount; O(n^c) = nested loops, equal to the number of times the innermost statement is executed; O(2^n) = often recursive algorithms solving a problem of size n by recursively solving two smaller problems of size n−1.
8. **The five characteristics of algorithms** (Summary-sheet wording): **input, unambiguity, finiteness, effectiveness, language independence** — and the **seven design factors**: modularity, correctness, maintainability, functionality, robustness, simplicity, extensibility.

## Algorithms — the core statements

**Algorithms.**
- Algorithms are sets of commands that the computer can follow to carry out calculations or other problem-solving tasks.
- Algorithms are instructions implemented in a particular order to carry out a task.
- Algorithms consist of **inputs, a process, and outputs**.
- Algorithms can be represented as either **pseudocodes** or **flowcharts**.

**Computers and algorithms (the distinction).**
- A **computer** is a tool used to carry out a problem-solving plan.
- A **computer program** is a set of instructions that describe the steps the computer has to follow in order to carry out a specific task or plan.
- An **algorithm** is a *plan for solving a problem*. Algorithms are **designed by people**, and **must be converted into a computer program**.

**Worked example from the deck (sum of 5 numbers).** The labels are the flowchart symbol types.

```
Start
sum = 0                   (process)
count = 0                 (process)
step 2: Enter n           (I/O)
        sum = sum + n     (process)
        count = count + 1 (process)
        Is count < 5 ?    (decision)
              YES -> go to step 2
              NO  -> continue
Print sum                 (I/O)
Stop
```

## Algorithm development process

Algorithm development is a key step in the problem-solving process.

**Step 1: Problem description.** Obtaining problem descriptions is harder than it looks because there are usually **two different parties**: the **client** (finding a solution) and the **programmer** (providing the solution). Issues that can arise:
- descriptions relying on **unstated assumptions**
- **ambiguous** description
- **incomplete** description

**Step 2: Problem analysis.** The problem is analysed so that the **starting and ending points** of the problem-solving process are clear.
*Starting-point questions:* What data do we have? Where is the data? What formulas are related to the problem? What rules are required to manipulate the data? How are the data values related?
*Ending-point questions (when we have a solution):* What results are we expecting? What parameters have changed in the items? What are the changes that have been made? What items are now non-existent?

**Step 3: High-level algorithm development.** Develop an algorithm focused on the **main parts of the solution and not on every minor detail**. Minor details are added in later steps, because focusing on every minor detail before reaching at least *a* solution is time-wasting and costly.

*Example — meeting scheduling:*
```
Step 1: Identify who needs to be at the meeting.
Step 2: Find common empty spaces in calendars.
Step 3: Choose one and tell everyone.
Step 4: Receive confirmation that everyone is still available.
Step 5: IF response to 4 is negative, iterate from 2
        ELSE IF response to 4 is positive, identify meeting location.
```

**Step 4: Algorithm refinement (stepwise refinement).** Provide more detail about each high-level step, based on:
- Who will implement the algorithm?
- How much knowledge does the person implementing it have?
- What are the computer specifications?

*Refining Step 2 of the example:*
```
Step 2: Find common empty spaces in calendars:
    Ask all to communicate availability or suggest times and get responses.
    Examine the responses either manually or automatically.
    Find common openings, if any.
    Else, iterate with different time blocks or suggestions.
```

**Step 5: Algorithm review.** Confirm the algorithm solves the problem. Questions:
- Can the algorithm only solve a particular problem, or can it be applied to more general problems?
- Can the complexity of the algorithm be reduced?

## Algorithm representation: sequence, selection, repetition

Algorithms must be presented in a form easily translatable into various programming languages. That form has **sequence, selection and repetition**.

- **Sequence** — ordered step by step such that **no step is skipped**, unless there is a compelling reason to skip a step.
- **Selection** — some steps are executed selectively **if some conditions are satisfied**; the alternative steps to execute may be one or more.
```
If condition is true
    Then perform activity

If condition is true
    Then perform activity 1
    else perform activity 2
```
- **Repetition** — the same steps need to be executed repeatedly; writing the same step on different lines is not sustainable.
```
while condition is true
    do perform activity
```

## Writing an algorithm end-to-end (Algorithms II)

**Problem statement:** For a given set of numbers (obtained from user input), determine the maximum number.

*Step 1 — description:* accept some inputs from the user, then calculate the maximum. Check: are there unstated assumptions? Is the description ambiguous or incomplete?
*Step 2 — analysis:* starting point — what type of data is the program expecting from the user? what formula will determine the maximum? Ending point — what type of result are we expecting?
*Step 3 — high-level algorithm:*
```
Declare and initialize variables
Input numbers (prompt user and accept input)
Determine maximum number and output result
```
revised to:
```
Declare and initialize variables
Input numbers -- compare each input with the current maximum
                 to know which is higher
Identify maximum number and output result
```
*Step 4 — refinement of line 2:*
```
Declare and initialize variables
Loop until the user enters sentinel value
    prompt user to enter a number
    allow user to type in a number
    compare the number with the maximum
    add 1 to a counter
Identify maximum number and output result
```
*Step 5 — review:* Is this algorithm only useful for determining the maximum of some set of numbers? Can we reduce its complexity? Can other problems be solved with it?

## Algorithm analysis and complexity

**Priori analysis** — carried out **before** implementing an algorithm in a particular programming language; **does not directly affect the implementation** of the algorithm.
**Posterior analysis** — carried out **after** an algorithm has been implemented in a particular programming language; deals with issues such as the **space and running time requirements**.

**Complexity/performance** is analysed as:
- **Time complexity** — the time required by an algorithm to complete its execution.
- **Space complexity** — the amount of computer space required by an algorithm to complete its execution.
- Both are represented by notations such as **Big O notation**.

**Cases.**
- **Best case time complexity** — a measure of the **minimum** time the algorithm will require for an input of size *n*.
- **Worst case time complexity** — a measure of the **maximum** time the algorithm will require for an input of size *n*.
- **Average case time complexity** — the time the algorithm will require to execute a **typical** input data of size *n*.

**Big-Oh and growth rate.** For any computer-related problem there are generally various solutions, in the shape of different algorithms having different logic, so we normally want to compare the algorithms to see which one is more efficient. Big O analysis provides a basis for computing and measuring the efficiency of a specific algorithm. When two algorithms are compared, the most important factor is the **growth rate**, and **Big O describes the growth rate**. Deck example: compare **1000N** and **N²** to see which grows faster (i.e. is less efficient).

| Function | Name |
|---|---|
| C | Constant |
| Log N | Logarithmic |
| Log² N | Log-squared |
| N | Linear |
| N Log N | — |
| N² | Quadratic |
| N³ | Cubic |
| 2^N | Exponential |

**Time complexity rules.**
- **O(1)** — the function (or set of statements) contains no loop, no recursion, and no call to any other non-constant-time function.
- **O(n)** — a loop whose loop variable is **incremented/decremented by a constant amount**.
- **O(n^c)** — nested loops; equal to the **number of times the innermost statement is executed**.
- **O(log n)** — a loop whose loop variable is **divided/multiplied by a constant amount**.
- **O(log log n)** — a loop whose loop variable is **reduced/increased exponentially by a constant amount**.
- **O(2^n)** — often recursive algorithms that solve a problem of size *n* by recursively solving **two smaller problems of size n−1**.

## Characteristics, need and design considerations

**Characteristics (deck wording).** Algorithms should have input values that will be processed to produce some output; should have straightforward and clear instructions; should have a limited and countable number of instructions; should not be dependent on any programming language.
**Characteristics (Summary-sheet wording — learn both):** **input, unambiguity, finiteness, effectiveness, language independence.**

**Why we need algorithms.** If we can break the solution down into smaller steps as algorithms require, we can easily optimise the performance of the solution. We need algorithms for reasons such as **performance** and **scalability**.

**Design considerations.** Algorithms should be **modular** (the solution breaks into smaller steps), **correct**, **maintainable and easily refactored**, with **logical and practical** steps, **extensible** (another algorithm programmer or designer can update and upgrade it), **robust** (the solution to the problem is clearly defined), and **simple** (very easy to understand). The Summary sheet lists the design factors as: **modularity, correctness, maintainability, functionality, robustness, simplicity, extensibility**.

**Case study (Summary strand): Enhancing the performance and scalability of an e-commerce platform with data-driven recommendations.** The existing recommendation system could not provide personalised product recommendations to millions of users, causing poor user experience and lost sales opportunities. A well-designed recommendation algorithm — **collaborative filtering** — analysed user behaviour and preferences to suggest products, significantly improving recommendation accuracy; user engagement and conversion rates increased, boosting sales and customer satisfaction. The point: a well-designed algorithm is what delivers **performance and scalability**.

## Commonly confused

- **Algorithm vs computer program.** An algorithm is a *plan for solving a problem*, designed by people and independent of any programming language; a program is the set of instructions describing the steps the *computer* follows. Test: if it must be rewritten when you switch from Python to Java, it is the program, not the algorithm.
- **Priori vs posterior analysis.** Test: was it done *before* the code existed (priori — language-independent, does not directly affect the implementation) or *after* it ran in a particular language (posterior — actual space and running time)?
- **Worst case vs average case.** Worst case is the *maximum* time for an input of size n, not "what usually happens"; average case is a *typical* input of size n. Test: "the input that hurts most" = worst; "an ordinary input" = average.
- **Time complexity vs space complexity.** Time = how long execution takes; space = how much computer space it needs. Both use Big O, so the notation alone does not tell you which is meant.
- **Growth rate vs value at small n.** 1000N is far larger than N² for small n, but N² grows faster and is therefore the less efficient one. Test: compare behaviour as n increases, not at one particular n.
- **O(n) vs O(log n) loops.** The discriminator is what happens to the loop variable: **+/− a constant** gives O(n); **× or ÷ by a constant** gives O(log n).
- **Step 3 (high-level) vs Step 4 (refinement).** Step 3 deliberately omits minor detail and covers only the main parts of the solution; Step 4 adds detail, guided by who implements it, their knowledge, and the computer specifications. If the question is "does it actually solve the problem / can complexity be reduced?", that is Step 5.
- **Selection vs repetition.** Selection executes a step *if a condition is satisfied* (possibly once); repetition executes the *same* step over and over *while* a condition holds. Test: does control ever return to the same step? If yes, repetition.
- **Robustness vs correctness.** Correct = it produces the right result; robust = the solution to the problem is clearly defined, so it holds up beyond the neat case.
- **Modularity vs extensibility.** Modularity is about breaking *this* solution into smaller steps; extensibility is about *another* designer being able to update and upgrade it later.
