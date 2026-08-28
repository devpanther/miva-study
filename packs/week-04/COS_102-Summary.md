# COS_102 — Week 4 Summary

*Introduction to Problem Solving · Week 4 (28 Sep – 4 Oct 2026) · Topics: Algorithms I and Algorithms II (the week's summary sheet titles the week "Algorithm Concepts")*

## The 8 most examinable things this week

1. **Definition, in the course's three forms.** Algorithms are **sets of commands that the computer can follow to carry out calculations or other problem-solving tasks**; they are **instructions implemented in a particular order to carry out a task**; and they **consist of inputs, a process, and outputs**. Learn "in a particular order" and the triple **input–process–output** verbatim. **Algorithms can be represented as either pseudocode or flowcharts** — those two, named as the pair.
2. **Computers versus algorithms — the four-line contrast the course builds a whole slide on.** A **computer is a tool used to carry out a problem-solving plan**; a **computer program is a set of instructions describing the steps the computer has to follow to carry out a specific task or plan**; an **algorithm is a plan for solving a problem**, it is **designed by people**, and it **must be converted into a computer program**. The algorithm is the plan, the program is the plan expressed for a machine, the computer is the tool that runs it.
3. **The five algorithm development steps, in order: (1) Problem description, (2) Problem analysis, (3) High-level algorithm development, (4) Algorithm refinement, (5) Algorithm review.** Algorithm development is described as **a key step in the problem-solving process**. Expect to be given a scenario and asked which step failed.
4. **The three named issues of Step 1 (problem description): descriptions relying on unstated assumptions, ambiguous descriptions, incomplete descriptions.** The reason they arise is that **two different parties are involved — the client (finding a solution) and the programmer (providing the solution)**.
5. **Step 2 (problem analysis) fixes the starting and ending points.** Starting-point questions: **What data do we have? Where is the data? What formulas are related to the problem? What rules are required to manipulate the data? How are the data values related?** Ending-point questions: **What results are we expecting? What parameters have changed in the items? What are the changes that have been made? What items are now non-existent?** Step 3 develops a **high-level algorithm focused on the main parts of the solution and not on every minor detail** — because **it is time-wasting and costly to focus on every minor detail before at least coming up with a solution**. Step 4 is **stepwise refinement**, decided by **who will implement the algorithm, how much knowledge that person has, and what the computer specifications are**. Step 5 reviews it against two questions: **can the algorithm only solve a particular problem or be applied to more general problems, and can the complexity of the algorithm be reduced?**
6. **Algorithm representation requires three forms — sequence, selection, repetition — so that the algorithm is easily translatable into various programming languages.** **Sequence:** ordered step by step **so that no step is skipped, unless there is a compelling reason to skip one**. **Selection:** steps executed **only if some condition is satisfied**, `if condition is true then perform activity` or `if ... then activity 1 else activity 2`, and **the alternative steps can be one or more**. **Repetition:** `while condition is true do perform activity`, needed because **writing the same step on different lines is not sustainable**.
7. **The characteristics of an algorithm — the summary sheet's five names, each matched to the slide wording.** **Input** (it should have **input values that will be processed to produce some output**), **unambiguity** (**straightforward and clear instructions**), **finiteness** (**a limited and countable number of instructions**), **effectiveness**, and **language independence** (**it should not be dependent on any programming language**). Separately, the **design considerations**: **modularity** (breakable into smaller steps), **correctness**, **maintainability** (easily refactored), **functionality** (steps **logical and practical**), **extensibility** (another designer can update and upgrade it), **robustness** (**the solution to the problem is clearly defined**), **simplicity** (**very easy to understand**). And the reason we need algorithms at all: **performance and scalability**.
8. **Analysis and complexity.** **Priori analysis is carried out before implementing an algorithm in a particular programming language and does not directly affect the implementation; posterior analysis is carried out after implementation in a particular language and deals with the space and running-time requirements.** **Time complexity = the time required by an algorithm to complete its execution; space complexity = the amount of computer space required.** Both are **represented by notations such as Big O**. **Best case = a measure of the minimum time the algorithm will require for an input of size n; worst case = the maximum time; average case = the time to execute a typical input of size n.** When comparing two algorithms, **the most important factor is the growth rate**, and **Big O describes the growth rate** — the course's example being **1000N versus N²**, where the tidy-looking 1000N is the more efficient of the two once N grows.

## The week's algorithm, as pseudocode, traced

The flowchart in Lesson I (Start → `Sum = 0`, `Count = 0` → `Enter n` → `sum = sum + n`, `count = count + 1` → decision `Is Count < 5` → YES back to the input, NO to `Print sum` → Stop):

```
1  sum   <- 0                (process)
2  count <- 0                (process)
3  Enter n                   (I/O)
4  sum   <- sum + n          (process)
5  count <- count + 1        (process)
6  If count < 5 then go to step 3   (decision)
7  Print sum                 (I/O)
8  Stop
```

**Trace on the input stream 4, 7, 2, 9, 3, 8:**

| pass | n read | sum after step 4 | count after step 5 | `count < 5`? |
|---|---|---|---|---|
| — | — | 0 | 0 | (initialisation) |
| 1 | 4 | 4 | 1 | YES → step 3 |
| 2 | 7 | 11 | 2 | YES → step 3 |
| 3 | 2 | 13 | 3 | YES → step 3 |
| 4 | 9 | 22 | 4 | YES → step 3 |
| 5 | 3 | 25 | 5 | **NO** → step 7 |

**Output: 25.** Exactly **five** numbers are read; the 8 is never entered. Note where the test sits: the increment happens *before* the decision, so `count < 5` fails on the pass that reads the fifth number — this is the off-by-one the examiner will probe. The three constructs are all visible: steps 1–5 are **sequence**, step 6 is **selection**, and steps 3–6 together are **repetition**.

Lesson II's worked problem — *for a given set of numbers obtained from user input, determine the maximum* — is the same five steps applied end to end. Its high-level form is **"Declare and initialize variables / Input numbers — compare each input with the current maximum to know which is higher / Identify maximum number and output result"**, refined at Step 4 into **"Loop until the user enters sentinel value: prompt user to enter a number; allow user to type in a number; compare the number with the maximum; add 1 to a counter"**. Learn the sentinel-controlled loop and the counter — both are examinable details.

## Big O: the growth-rate table and the loop rules

**Growth rates, slowest-growing first (learn the order and the names):** `C` **constant**, `Log N` **logarithmic**, `Log² N` **log-squared**, `N` **linear**, `N Log N` (the slide gives no name), `N²` **quadratic**, `N³` **cubic**, `2^N` **exponential**.

| Code shape | Complexity |
|---|---|
| No loop, no recursion, no call to any non-constant-time function | **O(1)** |
| A loop whose variable is **incremented or decremented by a constant amount** | **O(n)** |
| **Nested** loops — equal to the number of times the **innermost statement** is executed | **O(n^c)** |
| A loop whose variable is **divided or multiplied by a constant amount** | **O(log n)** |
| A loop whose variable is **reduced or increased exponentially by a constant amount** | **O(log log n)** |
| Recursion that solves a problem of size n by recursively solving **two smaller problems of size n − 1** | **O(2ⁿ)** |

## Commonly confused

| Pair | The distinction |
|---|---|
| Algorithm vs computer program | An **algorithm is a plan for solving a problem, designed by people**, and it **must be converted into a computer program**. A **program is the set of instructions that describes the steps the computer has to follow** to carry out that plan. The algorithm exists before, and independently of, any language — which is exactly the characteristic of **language independence**. |
| Pseudocode vs flowchart | The two named **representations** of an algorithm — not two different kinds of algorithm, and not two steps of the development process. Both must exhibit sequence, selection and repetition. |
| Step 1 (problem description) vs Step 2 (problem analysis) | **Step 1** is obtaining the description from the **client**, and its failures are **unstated assumptions, ambiguity and incompleteness**. **Step 2** takes an adequate description and works out the **starting and ending points** — what data exists, where it is, what formulas and rules apply, and what results are expected. A client misunderstanding is a Step 1 failure; not knowing where the data lives is a Step 2 failure. |
| Step 3 (high-level) vs Step 4 (refinement) | **Step 3 deliberately leaves out the minor details** and captures only the main parts of the solution. **Step 4 adds those details (stepwise refinement)**, and the amount added depends on **who implements it, their knowledge, and the computer specifications**. Writing full detail at Step 3 is the error the course explicitly warns is **time-wasting and costly**. |
| Priori vs posterior analysis | **Priori is before implementation in a particular programming language and does not directly affect the implementation**; **posterior is after implementation and deals with actual space and running-time requirements**. "Before/after the code exists in a language" is the whole test — not "theoretical vs practical", and not "fast vs slow". |
| Time vs space complexity | **Time complexity = the time required to complete execution. Space complexity = the amount of computer space required.** Both are expressed with Big O; naming Big O as "the time notation" loses the space half. |
| Best vs worst vs average case | **Best = minimum time for an input of size n. Worst = maximum time for an input of size n. Average = the time for a *typical* input of size n.** All three are stated **for an input of size n** — the size is held fixed and the *input* varies, not the size. |
| Growth rate vs raw speed | Comparing two algorithms, **the most important factor is the growth rate**, which is what **Big O describes**. **1000N** looks worse than **N²** for small N and is better forever after N = 1000. Faster hardware changes the constant, never the growth rate. |
| O(n) vs O(log n) loops | The course's rule is mechanical: **incremented or decremented by a constant amount → O(n)**; **divided or multiplied by a constant amount → O(log n)**. `i <- i + 3` is O(n), not O(n/3); `i <- i / 2` is O(log n). |
| Characteristics vs design considerations | **Characteristics** are what makes something an algorithm at all: **input, unambiguity, finiteness, effectiveness, language independence**. **Design considerations** are qualities of a *good* algorithm: **modularity, correctness, maintainability, functionality, robustness, simplicity, extensibility**. Correctness is a design consideration; finiteness is a characteristic. |
| Robustness vs correctness | The course defines **robust** narrowly — **the solution to the problem is clearly defined**. **Correctness** is the separate consideration that the algorithm actually produces the right result. |

*Two things to read with care. First, the Lesson II slide lists only four characteristics (input/output, clear instructions, limited and countable instructions, language independence) while the week's summary sheet names **five** — input, unambiguity, finiteness, **effectiveness**, language independence; quote the five, and map each onto the slide wording. Second, the growth-rate table on the slide leaves **N Log N** without a name, and the design-consideration slide's "steps should be logical and practical" is the summary sheet's **functionality** — the two lists are the same seven items under different labels.*
