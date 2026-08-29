# COS_102 — Week 2

*Introduction to Problem Solving · Week 2 (14–20 Sep 2026)*

*Source note: the extracted slides for this week are full (two complete lecture decks plus the weekly summary and case study), only missing ligatures ("dierent" = different). One discrepancy is genuine and examinable: the Week 2 **Summary** page says "we introduced **four** strategies" (brainstorming, heuristics, trial-and-error, means-ends analysis), but the **lecture deck** teaches **six** — it also covers abstraction and analogy. Learn all six; if asked for "the four", give the summary's four.*

## Most likely to be examined

1. **Define a problem-solving strategy**: *a plan used to find a solution or overcome a challenge*, made of multiple steps that give guidelines for resolving a business or industry problem.
2. **Name and match the six strategies to scenarios** — brainstorming, heuristics, trial-and-error, means-ends analysis, abstraction, analogy. Scenario-matching is the standard exam form.
3. **Trial-and-error's condition of use** (a mid-lesson question, so near-certain): suitable when the number of possible solutions is **few**; time-consuming and **inefficient** when they are many. The false statement to spot is "it is very efficient when the possible solutions are not few."
4. **Routine vs non-routine problems**: routine = solvable by an arithmetic operation / a standard algorithm, the task being only to *identify the most appropriate algorithm*; non-routine = **no standard method exists**, so a *novel* method must be developed.
5. **Attributes of routine problems** (the second mid-lesson question): the non-attribute is "can usually be solved using various unconventional approaches" — that belongs to non-routine problems.
6. **What "unsolvable" actually means**: not that no solution can ever be found, but that **no systematic method (algorithm) exists** to decide it. Properly: *unsolvable decision problems*. Example: deciding whether a substitution puzzle "comes out".
7. **Decidable vs undecidable**, with the two named undecidable examples: *"Does my code have a bug?"* and the **halting problem** (will a running program eventually halt or run forever?).
8. **The UTM and the modern computer**: Turing's two contributions — storing **encoded instructions in the computer's memory**, and showing that a **single machine of fixed structure** can carry out every computation the UTM can.

## Definitions

- **Problem-solving strategy** — a plan used to find a solution or overcome a challenge; each includes multiple steps giving guidelines for resolving the problem. An *efficient* strategy produces a **robust and reliable** solution.
- **Brainstorming** — a **group-focused** technique where people come together to solve a problem; involves critical thinking and producing solutions **spontaneously**. Rules: **avoid criticism** of ideas; gather **as many ideas as possible**; other people's ideas can be **fine-tuned**.
- **Heuristics** — obtaining a solution while **saving time and energy**; decisions made *without stopping to think about the next course of action*. Fast and efficient, but solutions are **not always rational**. Relevant where a **sub-optimal solution is acceptable**. Examples: rule of thumb; choosing between brands at the grocery store; migrating to an unfamiliar country.
- **Trial and error** — recognising and removing errors/failures through **experimental trials**; approaches are implemented until a solution is arrived at. Useful when possible solutions are **few**; inefficient when many. Examples: trying jobs before choosing a career; living in various locations before choosing a home.
- **Means-ends analysis** — thinking about the solution **beforehand** and determining the best strategy based on the issues that will be encountered; **breaking the problem into smaller problems** and solving each with the best possible approach until the main problem is solved. Examples: finishing a degree syllabus in six months; a company targeting $2bn turnover in a year.
- **Abstraction** — **filtering out the unneeded attributes** of a problem so we concentrate on the important parts; all patterns that will not help reach a solution are removed. The essential idea it forms is called a **model**. Example: the London Underground map.
- **Analogy** — using **previously existing understanding** to understand a new, similar system, **as long as the underlying principles are the same**. Steps: (1) define the problem and generate analogies; (2) find similarities and select one analogy; (3) use description and similarities to generate ideas. Examples: a manager handling a problematic employee; a doctor treating a deep inoperable tumour with a high-intensity ray.
- **Well-defined problem** — has clear goals, expected solutions and solution paths. **Ill-defined problem** — lacks them.
- **Routine problem** — any problem solvable with an arithmetic operation; gives a question plus the required facts or numbers; solvable with algorithms; solved very quickly; the work is solely selecting the right algorithm.
- **Non-routine problem** — any problem with **no standard method** for solving it; procedures and answers are not immediately clear; needs distinct, unconventional thinking based on originality and creativity; usually solvable by various approaches; takes time. Method: study the problem critically → gather relevant information → identify and implement an effective strategy.
- **Universal Turing Machine (UTM)** — Alan Turing's "universal computing machine": a **pre-loaded, single, fixed table of instructions**; any task you can write an instruction table for can be implemented by it. The program (a string of letters) is placed on the **tape**; the UTM reads it and implements the task on its tape.
- **Solvable problem** — a mathematical problem that can be solved with a systematic method (an algorithm), i.e. solvable by the UTM. Solvable problems may be based on **data structures** (vectors, stacks, queues, arrays, heaps, trees, graphs, linked lists) or on **algorithms** (sorting, divide and conquer, recursion, searching, text processing).
- **Unsolvable problem** — cannot be solved by the UTM / by any algorithm. Not "no solution exists" — rather, no systematic method exists; strictly an **unsolvable decision problem**.
- **Decidable problem** — one for which a systematic way can be found to solve it accurately. **Undecidable problem** — no algorithm gives an accurate true/false for **every** input value; a **subset of unsolvable problems**. Examples: "Does my code have a bug?", the halting problem.
- **Halting problem** — determining whether a running program will eventually **halt** or run **infinitely**.
- **Substitution puzzle** — any puzzle (e.g. a chess problem) re-expressed as string replacement. Worked example: obtain **BOOOB** from **BOB** by replacing `OB`→`BOOB` and `BOB`→`O`.

## Structure of the week

| # | Lesson | Block | Contents |
|---|---|---|---|
| 1 | Problem-solving strategies | What a strategy is | Plan + multiple steps; different problems need different strategies; after choosing, study its rules and procedures; efficient strategy → robust, reliable solution |
| 1 | | The strategies | ① Brainstorming ② Heuristics ③ Trial and error ④ Means-ends analysis ⑤ Abstraction ⑥ Analogy *(summary page counts only the first four)* |
| 2 | Understanding problems and problem types | What problems are | Straightforward vs complex; **ill-defined** vs **well-defined** |
| 2 | | Classification by method | **Routine** (arithmetic/algorithmic) vs **non-routine** (novel method required) |
| 2 | | Turing | UTM: fixed instruction table, tape, program as string; modern computer based on it; stored encoded instructions; one fixed machine computes all the UTM computes |
| 2 | | Classification by computability | **Solvable** (data-structure based / algorithm based) vs **unsolvable**; substitution puzzles; the true meaning of "unsolvable"; **decidable** vs **undecidable** (⊂ unsolvable); halting problem |

**Analogy procedure (ordered):** 1. Define the problem and generate analogies → 2. Find similarities and select an analogy → 3. Use description and similarities to generate ideas.
**Non-routine procedure (ordered):** 1. Study the problem critically → 2. Gather relevant information → 3. Identify and implement an effective strategy.

## Commonly confused

- **Abstraction vs means-ends analysis** — both shrink a problem. *Test:* did anything get **thrown away** (abstraction — irrelevant attributes deleted, leaving a model) or did everything get **kept but split** (means-ends — sub-problems, each still solved)?
- **Analogy vs means-ends analysis** — both may involve smaller parts. *Test:* is the solution **imported from a different, previously understood system** (analogy) or **built from this problem's own sub-problems** (means-ends)?
- **Heuristics vs trial-and-error** — both are informal. *Test:* is only **one shortcut** taken and accepted without checking (heuristic), or are **successive candidates tested and discarded** until one works (trial-and-error)?
- **Routine vs non-routine** — arithmetic does *not* settle it. *Test:* is the only work **choosing which known algorithm to apply** (routine), or must you first **invent the method** (non-routine)? Bridget's 50-question exam problem is arithmetic yet non-routine.
- **Unsolvable vs "hard" / "no answer exists"** — *Test:* is the barrier the **absence of any systematic method for every input** (unsolvable/undecidable), or merely long running time or a missing fact (neither)?
- **Undecidable vs unsolvable** — *Test:* is it phrased as a **true/false decision** no algorithm can answer for every input? Then it is undecidable, and undecidable problems are a **subset** of unsolvable ones.
- **Ill-defined vs non-routine** — *Test:* ill-defined = the **goal or solution path is unclear**; non-routine = the goal may be perfectly clear but **no standard method** exists.
- **Brainstorming vs "a group discussion"** — *Test:* is **criticism deferred and quantity of ideas the aim**? Without those two rules it is not brainstorming.
