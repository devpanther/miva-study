# COS_102 — Week 5 Summary

*Introduction to Problem Solving · Week 5 (5–11 Oct 2026) · Topics: Flowcharts I; Flowcharts II — Flowchart Concepts*

## The 8 most examinable things this week

1. **The definition, word for word:** a flowchart is **a graphical representation of the sequence of operations in a computer program; or the graphical representation of an algorithm.** Flowcharts **use symbols to describe actions such as start/begin, stop/end, decision making and data processing**. Note what this makes a flowchart: a *representation* of an algorithm, not the algorithm itself and not a program.
2. **Which symbol means what.** Almost every symbol question is "name the symbol that does X" or "what does this symbol do". The two mid-lesson questions in the slides are both of this kind. Learn the table below by *function*, not by shape alone.
3. **The link (off-page) connector connects independent elements across MULTIPLE pages; the on-page connector connects independent elements across a SINGLE page.** This is Flowcharts I's mid-lesson question verbatim, with *flowline*, *declaration* and *on-page connector* as the distractors.
4. **A data flowchart ensures the communication gap between the users and developers of the system is reduced.** This is Flowcharts II's mid-lesson question verbatim. It also **describes the data processing aspect of the design and analysis of a system by showing the flow of information**, and can analyse **any form of information flow**.
5. **Direction of operation is usually from top to bottom and left to right**, and **a flowchart consists of boxes and lines**. The four **principles**: it must have **a start point and a stop point**; **flow lines should generally not cross, if possible**; **instructions for comparisons should be made as simple as possible**; the chart should be **easy to follow, neat and clear such that the visual impact is very good**.
6. **The four main types:** **process** flowchart (applies to almost anything; clarifies **responsibilities and roles**, shows the process a product goes through along the **production chain**, describes **information communication** in an organisation); **workflow** chart (**the manner in which businesses function** — employee training, identifying problematic areas, simplifying operations, stable high-quality output from standard procedures); **swimlane** (multiple information **flowing side by side**; allows **multiple categories of activities**; ideal for the **interaction of a process with different aspects of an organisation**); **data** flowchart (see 4).
7. **The three disadvantages, exactly as stated:** complex programs **might require that the flowchart spans multiple pages**; **adjustments might be complicated and might even require a new flowchart is drawn**; the flowchart logic **is hardly the most efficient when used to write a program because it can make the program unnecessarily longer than normal.** The three advantages: **the logic is simplified**, it lets you **ascertain if the logic of the program works or not**, and it is **added to the program specification documents so other programmers can easily understand the logic**.
8. **Reading and building a chart.** You must be able to start at START, follow the arrows, take the labelled branch at each diamond, and say what comes out — including round a loop. The course's own loop example (Sum/Count, below) reads **exactly five numbers**; work out for yourself why it is five and not four or six.

## Every symbol the course names

| Symbol | Shape | What it does (course wording) | Flowlines in / out |
|---|---|---|---|
| **Terminator** (start/begin, stop/end) | oval | **Shows the start and end points of the flowchart** | START: **0 in, 1 out**. STOP: **1 or more in, 0 out** |
| **Process** (also called the **action** symbol) | rectangle | **Shows an action, process or function** | **1 in, 1 out** |
| **Decision** (also called the **control** symbol) | diamond | **Used when questions such as yes or no and true or false need an answer. The answer determines the path the algorithm flow will take** | **1 in, exactly 2 out**, each **labelled** (Yes/No or True/False) |
| **Input/Output** (also called the **data** symbol) | parallelogram | **Shows data that can be used either at the input or the output** | **1 in, 1 out** |
| **Flowline** | arrow | Carries the flow from one symbol's exit to the next symbol's entry; sets the direction | it *is* the connection, not a box |
| **On-page connector** | small labelled circle | **Used in complex flowcharts to connect independent elements across a single page** | used **in a matched pair**: one circle has 1 in / 0 out, its twin (same label) 0 in / 1 out |
| **Link / off-page connector** | pentagon (home-plate) | **Used in complex flowcharts to connect independent elements across multiple pages** | matched pair, as above, but the twin is on another page |
| **Predefined process / declaration** | rectangle with a vertical bar down each side | **Used to show a complex process or a well-known operation** (its inner steps live elsewhere) | **1 in, 1 out** |
| **Preparation** | hexagon | **Shows the difference between steps preparing for work and those that actually work** (initialising, setting a loop up) | **1 in, 1 out** |
| **Document** | rectangle with a wavy bottom edge | **Shows a document's input or output** | **1 in, 1 out** |
| **Multiple documents** | stacked wavy rectangles | **Shows different reports or documents** | **1 in, 1 out** |
| **Database** | cylinder | **Shows where data is stored** | 1 in and/or 1 out |
| **Summing junction** | circle with a cross in it | **Shows the addition of inputs from various paths** | **several in, 1 out** |
| **Merge** | inverted triangle | **Used to combine various paths into a single path** | **several in, 1 out** |
| **Comment / note (annotation)** | bracket, joined by a dashed line | **Used to add comments to parts of the flowchart** | **0 in, 0 out** — it is *not* on the flow path |

## The rules of flow

- **One entry, one exit per symbol.** Every symbol has exactly one incoming flowline and exactly one outgoing flowline, with four principled exceptions: **START** has no entry, **STOP** has no exit, a **decision** has **two** exits, and the **fan-in** symbols (merge, summing junction) accept several entries but still have one exit. Paths *may* rejoin — that is what merge is for — so several arrows arriving at one box is legal; several arrows *leaving* a non-decision box is not, because nothing then says which one the flow takes.
- **A decision has exactly two outgoing branches and both must be labelled.** An unlabelled branch, a third branch, or a missing branch is a fault. The label states the answer that selects that path.
- **Every path must terminate.** Follow any branch from START and it must eventually reach a STOP. A branch that dead-ends, or a loop whose exit condition can never become true, breaks this.
- **A connector is a jump, not a symbol you "do".** A labelled circle with an arrow in and no arrow out is not a dead end: the flow resumes at the twin circle with the same label. That is precisely how the course avoids the long flow lines its principles say should not cross.
- **Direction is top to bottom and left to right**; a flowline going *upwards* is a deliberate signal — it is the back-arrow of a loop.

## The three control structures, drawn

- **Sequence.** `START -> [process A] -> [process B] -> [process C] -> STOP`. Straight line down; every box 1 in, 1 out. The course's own example: `START -> READ N1 and N2 -> R = N1 + N2 -> PRINT R -> STOP`.
- **Selection.** `... -> <decision "condition?">`, YES branch to one set of boxes, NO branch to another; the two branches either both reach STOP, or rejoin at a merge and carry on as one path. If the NO side has nothing to do, its flowline runs straight down to the rejoin point — that is `IF ... THEN` with no `ELSE`.
- **Iteration (loop).** A decision plus a **back-arrow**: one branch of the diamond runs *back up* to a box the flow has already visited, so those boxes are executed again; the other branch leaves the loop. The body must change something the condition tests, or the exit branch is never taken.

## Three complete flowcharts, read out in words

**(A) Sum of two numbers — sequence and I/O (Flowcharts I, the data-symbol slide).**
1. **START** (oval).
2. **READ N1 and N2** (parallelogram — data coming in).
3. **R = N1 + N2** (rectangle — an action is performed).
4. **PRINT R** (parallelogram — data going out).
5. **STOP** (oval). One path, no decision, so it always ends at step 5.

**(B) "Lamp doesn't work" — nested selection (Flowcharts I, the decision-symbol slide).**
1. **START**, annotated *Lamp doesn't work*.
2. **DECISION: "Lamp plugged in?"**
3. **NO branch →** **Plug in lamp** (process) → end of that path.
4. **YES branch →** **DECISION: "Bulb burned out?"**
5. **YES branch →** **Replace bulb** (process) → end of that path.
6. **NO branch →** **Repair lamp** (process) → end of that path.
Two decisions, three outcomes. A lamp that *is* plugged in with a bulb that is *not* burned out reaches **Repair lamp** — the last resort, reached only when both questions have been answered.

**(C) Sum of five numbers — a loop (Flowcharts II, "Why we need flowcharts: Example").**
1. **START**.
2. **Sum = 0, Count = 0** (process — initialisation).
3. **Enter n** (parallelogram — input).
4. **sum = sum + n; count = count + 1** (process).
5. **DECISION: "Is Count < 5?"**
6. **YES branch → back-arrow up to step 3 (Enter n)** — the loop.
7. **NO branch → Print sum** (parallelogram) → **STOP**.
Trace it: count is 0 at step 2; after the first pass count = 1 and 1 < 5 is Yes; passes 2, 3 and 4 leave count at 4, still Yes; the **fifth** pass makes count = 5, and 5 < 5 is **No**, so the flow leaves the loop. **Exactly five numbers are read**, and `sum` is their total. The test comes *after* the body, so the body always runs at least once. If step 4 ever stopped incrementing count, the Yes branch would be taken for ever and the STOP would be unreachable.

## Flowchart vs pseudocode vs algorithm

An **algorithm** is the method itself — the finite, ordered, unambiguous sequence of steps that solves the problem. It exists independently of how you write it down. A **flowchart** is one *notation* for that algorithm: **a graphical representation**, boxes and lines, symbols and labelled branches. **Pseudocode** is the other everyday notation: the same algorithm written as English-like statements with programming keywords (`READ`, `IF ... THEN ... ELSE`, `REPEAT ... UNTIL`, `PRINT`), using indentation where the flowchart uses arrows. So: one algorithm, two representations. A flowchart's diamond becomes pseudocode's `IF`; a back-arrow becomes `WHILE` or `REPEAT`; a parallelogram becomes `READ` or `PRINT`; a rectangle becomes an assignment. **Neither a flowchart nor pseudocode is a program** — no compiler accepts either; they are what you produce *before* coding, which is exactly why the course says the chart is **added to the program specification documents** so other programmers can follow the logic.

## Commonly confused

| Pair | The distinction |
|---|---|
| **Parallelogram vs rectangle** (data vs process) | The **parallelogram** is the **input/output or data symbol** — data **coming in or going out** (`Read N1 and N2`, `Print R`, `Enter n`). The **rectangle** is the **process/action symbol** — the machine **doing** something to data it already has (`R = N1 + N2`, `count = count + 1`). Test: does the value cross the boundary between the program and the outside world? Parallelogram. Does it only move inside? Rectangle. "The computer performs both, so both are processes" is the standard error. |
| **Decision vs process** | The **decision** *asks a yes/no or true/false question and the answer determines the path*; it therefore has **two labelled exits** and changes nothing. The **process** *does* something and has **one exit**. A comparison is a decision even though the computer "does" it; an assignment is a process even though it looks like an equation. |
| **Terminator vs connector** | The **terminator** is where the whole chart **begins or ends** — STOP means the flow is over. A **connector** looks like an endpoint (arrow in, no arrow out) but the flow is **not over**: it resumes at the twin connector bearing the same label. Reading a connector as a STOP is the classic misread and it makes the chart look as though it terminates when it does not. |
| **Connector vs flowline** | A **flowline** is drawn between two symbols and you can see where it goes. A **connector** is a **pair of labelled circles** (same page) or **pentagons** (different pages) that stand in for a flowline too long or too awkward to draw — the label is the only thing joining the two ends. Use one where a drawn line would have to **cross** other lines, which the principles say to avoid. |
| **On-page vs link (off-page) connector** | **Single page** vs **multiple pages**. The link connector exists because of the stated disadvantage that a complex chart **might span multiple pages**. |
| **Merge vs summing junction vs decision** | **Merge** and **summing junction** are **fan-in**: several paths in, **one** out — merge **combines various paths into a single path**, the summing junction **shows the addition of inputs from various paths**. The **decision** is the only **fan-out** symbol: one in, two out. Reversing this — expecting a diamond to join paths, or a merge to split them — is the commonest symbol error on the paper. |
| **Loop vs selection** | Both are drawn with a **diamond**. The difference is where one branch's flowline goes: **selection**'s branches go **forward** (down) and never revisit a box; **iteration**'s exit branch goes forward but the other branch is a **back-arrow to a box already visited**. If no arrow ever runs backwards, there is no loop, however many diamonds the chart has. |
| **Process vs predefined process vs preparation** | **Process** (plain rectangle) = an action. **Predefined process** (bars down both sides) = **a complex process or well-known operation** whose steps are defined elsewhere and are *not* shown here — it still executes, it is just not expanded. **Preparation** (hexagon) = **the difference between steps preparing for work and those that actually work** — setup, not the work itself. |
| **Comment vs any executing symbol** | The **comment/note** is attached by a **dashed line** and carries **no flowline in or out**. It is the only symbol the flow never enters. Anything drawn off to the side with a dashed line does not run. |
| **Workflow vs swimlane** | The course itself warns that swimlane **can be confused with a workflow flowchart**. **Workflow** = **the manner in which businesses function** (one flow). **Swimlane** = **multiple information flowing side by side**, allowing **multiple categories of activities** — one lane per actor or department. If there are lanes, it is a swimlane chart. |
| **Process flowchart vs data flowchart** | **Process** = how a process is **completed** in an organisation (roles, responsibilities, production chain). **Data** = the **data processing** aspect, **showing the flow of information**, and the one credited with **reducing the communication gap between users and developers**. |

*Note: the two slide decks carry every symbol as a picture, so the extracted text names each symbol's function but not its shape. The shape column above uses the shapes the week's Summary sheet does name — rectangles (processes), diamonds (decisions), arrows (flow), ovals (start/endpoints) — plus the standard 100-level shapes for the rest. The Summary sheet also claims you learned "the history of flowcharts", but no history appears anywhere in either lecture deck. Pseudocode, the term "control structure", and the sequence/selection/iteration trio are likewise not named in this week's extracted text; they are supplied here in the standard 100-level treatment because the examinable skill — reading and building a correct chart — depends on them. The extractor also drops ligatures, so the source reads "dierent" for "different" and "eicient" for "efficient".*
