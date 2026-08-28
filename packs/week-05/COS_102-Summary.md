# COS_102 — Week 5 Summary

*Introduction to Problem Solving · Week 5 (5 – 11 Oct 2026) · Topics: Flowcharts I and Flowcharts II (the week's summary sheet titles the week "Flowchart Concepts")*

Week 4 said algorithms are represented **as either pseudocode or flowcharts**. This week is the second of that pair: the same sequence, selection and repetition, drawn instead of written.

## The 8 most examinable things this week

1. **The definition, in the course's two forms.** A flowchart is **a graphical representation of the sequence of operations in a computer program**; *or* **the graphical representation of an algorithm**. Learn both halves — the examiner can ask for either. **Flowcharts use symbols to describe actions such as start/begin, stop/end, decision making and data processing**, and **with flowcharts, complex processes can be quickly visualised**.
2. **The structural claim and the direction rule.** **A flowchart consists of boxes and lines**, and **the direction of operation is usually from top to bottom and left to right**. Note the hedge: *usually*. **A flowchart consists of different symbols that describe different operations.**
3. **Every symbol, its exact use, and its alias.** The aliases are what get tested: **process = action symbol**, **start/stop = terminator**, **decision = control**, **input/output = data symbol**, **predefined process = declaration symbol**, **link connector = off-page connector**. Full table below.
4. **The four drawing principles.** **The flowchart should have a start point and a stop point. Flow lines should generally not cross, if possible. Instructions for comparisons should be made as simple as possible. The flowchart should be easy to follow, neat and clear such that the visual impact is very good.** Learn the hedges — flow lines *generally* should not cross *if possible*; it is not an absolute prohibition.
5. **The six uses and the four reasons we need flowcharts.** *Uses:* **to plan a new project; to document a project; to model a business process; to manage workflow; to manage data; to map computer algorithm.** *Why we need them:* **to provide clarity to program logic; to evaluate the actions resulting from setting some conditions; to clarify a program's procedural steps; to communicate the details of a program or process with other stakeholders.**
6. **The four main types.** **Process flowchart** — applies to almost anything, **quickly describes how a process can be completed in an organisation** (clarifies **responsibilities and roles**, shows **the process a product goes through along the production chain**, **describes information communication within an organisation**). **Workflow flowchart** — **describes the manner in which businesses function** (employee **training**, identifying **problematic areas**, **simplifying operations**, producing **output that is stable and of high quality based on standard procedures**). **Swimlane flowchart** — for **multiple information flowing side by side**; **it can be confused with a workflow flowchart, but swimlane flowcharts allow for the creation of multiple categories of activities**, and it is **ideal for representing the interaction of a process with different aspects of an organisation**. **Data flowchart** — **describes the data processing aspect of the design and analysis of a system by showing the flow of information**, **ensures that the communication gap between the users and developers of the system is reduced**, and can be used for **the analysis of any form of information flow**.
7. **Three advantages, three disadvantages — learn them as matched lists.** *Advantages:* **the logic of a process or program is simplified**; they **ascertain whether the logic of the program works or not**; they are **added to the program specification documents so that other programmers can easily understand the logic**. *Disadvantages:* **complex programs might require that the flowchart spans multiple pages**; **adjustments might be complicated and might even require that a new flowchart is drawn**; **the flowchart logic is hardly the most efficient when used to write a program, because it can make the program unnecessarily longer than normal.**
8. **The three control structures, drawn.** Sequence, selection and repetition survive from Week 4 unchanged; what changes is that each now has a *shape*. Selection is the diamond with two labelled arms; repetition is a diamond one of whose arms carries a flow line **back up** to a box already passed. Everything else is sequence.

## The symbol table

Shapes: the week's summary sheet names only four — **rectangles (processes), diamonds (decisions), arrows (flow), ovals (start/endpoints)**. The rest are the standard shapes the slides show as pictures; learn the *use*, which is what the slides state in words, and the shape as a bonus.

| Symbol | Shape | The course's exact use | Arrows in / out |
|---|---|---|---|
| **Process** (*action symbol*) | rectangle | **Shows an action, process or function** | 1 in, exactly 1 out |
| **Start/begin, stop/end** (*terminator*) | oval / rounded box | **Shows the start and end points of the flowchart** | Start: 0 in, 1 out. Stop: 1+ in, 0 out |
| **Decision** (*control symbol*) | diamond | **Used when questions such as yes or no and true or false need an answer**; **the answer determines the path the algorithm flow will take** | 1 in, exactly 2 out — the *only* symbol with more than one exit |
| **Input/output** (*data symbol*) | parallelogram | **Shows data that can be used either at the input or the output** | 1 in, 1 out |
| **Document** | rectangle with a wavy base | **Shows a document's input or output** | 1 in, 1 out |
| **Multiple documents** | stacked wavy rectangles | **Shows different reports or documents** | 1 in, 1 out |
| **Comment / note** | bracket on the side | **Used to add comments to parts of the flowchart** | 0 in, 0 out — attached by a plain line, it carries **no** flow |
| **On-page connector** | small circle with a label | **Used in complex flowcharts to connect independent elements across a single page** | Exit copy: 1 in, 0 out. Entry copy: 0 in, 1 out. Paired by label |
| **Link / off-page connector** | pentagon ("home plate") | **Used in complex flowcharts to connect independent elements across multiple pages** | as on-page connector, but the pair straddles two pages |
| **Predefined process** (*declaration symbol*) | rectangle with double side bars | **Used to show a complex process or a well-known operation** | 1 in, 1 out |
| **Preparation** | hexagon | **Shows the difference between steps preparing for work and those that actually work** | 1 in, 1 out |
| **Database** | cylinder | **Shows where data is stored** | 1 in, 1 out (or attached to the flow as a store) |
| **Summing junction** | circle with a cross | **Shows the addition of inputs from various paths** | many in, 1 out |
| **Merge** | downward triangle | **Used to combine various paths into a single path** | many in, 1 out |
| **Flow line** | arrow | Carries the direction of operation, **usually top to bottom and left to right** | — |

## The three control structures as shapes

Notation used below: `[ ]` terminator, `( )` process, `/ /` input/output, `< >` decision. Branch labels sit on the arms.

```
SEQUENCE                 SELECTION                        REPETITION
[ Start ]                     |                                |
   |                    < condition? >                    / Enter n /
( step 1 )              YES /        \ NO                      |
   |                 ( act A )      ( act B )              ( work )
( step 2 )                  \        /                         |
   |                         (merge)                     < condition? >
[ Stop  ]                        |                   YES ^--------|  NO
                                                     (back up)    |
                                                             / Print /
```

**Sequence** = boxes stacked, one arrow in and one out of each, no branch. **Selection** = one diamond, two labelled arms, both rejoining before the flow continues. **Repetition** = a diamond whose YES (or NO) arm is a flow line **returning to a box above it**; the loop is the diamond plus everything between it and the box it returns to. The diamond is doing double duty: every repetition contains a selection, which is why "there is a diamond, therefore it is selection" is a wrong inference.

## Two complete flowcharts, written out

**A — the two-number adder (Flowcharts I, the input/output-symbol slide). Pure sequence, five boxes:**

```
[ Start ]
    |
/ Read N1 and N2 /        (input/output — data symbol)
    |
( R = N1 + N2 )           (process — action symbol)
    |
/ Print R /               (input/output)
    |
[ Stop ]
```

Every box has exactly one arrow in and one out; there is no diamond, so there is no selection and no repetition. Both terminators are present, satisfying the first drawing principle.

**B — the counted-sum loop (Flowcharts II, the "why we need flowcharts" example):**

```
[ Start ]
    |
( Sum = 0 )
( Count = 0 )
    |
/ Enter n /  <---------------------+
    |                              |
( sum = sum + n )                  |
( count = count + 1 )              |
    |                              |
< Is Count < 5? >                  |
    | YES  -----------------------+   (flow line back up)
    | NO
/ Print sum /
    |
[ Stop ]
```

**Trace on the input stream 10, 3, 7, 5, 1, 9:**

| pass | n read | sum after the process box | count | `Count < 5`? |
|---|---|---|---|---|
| — | — | 0 | 0 | (initialisation) |
| 1 | 10 | 10 | 1 | YES → back to `Enter n` |
| 2 | 3 | 13 | 2 | YES → back |
| 3 | 7 | 20 | 3 | YES → back |
| 4 | 5 | 25 | 4 | YES → back |
| 5 | 1 | 26 | 5 | **NO** → `Print sum` |

**Output: 26**, and exactly **five** numbers are read — the 9 is never entered, because `Enter n` is only reached again when the YES arm sends control back to it. The increment sits **above** the diamond, so `Count < 5` fails on the very pass that reads the fifth number: that is the off-by-one the examiner probes. Locate the constructs: the boxes between the terminators are **sequence**, the diamond is **selection**, and the diamond plus its YES arm back to `Enter n` is **repetition**.

## Commonly confused

| Pair | The distinction |
|---|---|
| Flowchart vs algorithm | A flowchart is **the graphical representation of an algorithm** — a *representation*, not a different kind of thing. Week 4's pair stands: **pseudocode or flowcharts**. The algorithm is the plan; the flowchart is one way of showing it; the program is the plan in a language. |
| On-page connector vs link (off-page) connector | Both **connect independent elements in complex flowcharts**. **On-page: across a single page. Link/off-page: across multiple pages.** This is the exact wording of the Lesson I mid-lesson question, and it is a straight swap trap. |
| Document vs database vs multiple documents | **Document = a document's input or output** (a thing produced or consumed). **Database = where data is stored** (a place). **Multiple documents = different reports or documents.** "Stored" is the database's word; nothing else in the list has it. |
| Merge vs summing junction | **Merge combines various paths into a single path** — it is about *control flow* joining. **Summing junction shows the addition of inputs from various paths** — it is about *adding* the inputs. Both narrow to one line out; only one of them adds. |
| Preparation vs process | **Process shows an action, process or function** — the work itself. **Preparation shows the difference between steps preparing for work and those that actually work** — the set-up before the work. |
| Predefined process vs process | **Predefined process (declaration symbol) shows a complex process or a well-known operation** — one box standing for a routine defined elsewhere. A plain process box spells its own action out. |
| Decision vs comment | The **decision symbol carries flow**: one arrow in, two labelled arms out, and **the answer determines the path the algorithm flow will take**. The **comment symbol carries no flow at all** — it only **adds comments to parts of the flowchart**, and deleting it changes nothing about what the chart computes. |
| Selection vs repetition (same shape) | Both are drawn with a diamond. **Selection**: both arms go *forward* and rejoin. **Repetition**: one arm is a flow line *back up* to a box already executed. The presence of a diamond tells you nothing on its own — follow the arms. |
| Workflow vs swimlane flowchart | The course flags this itself: **swimlane can be confused with workflow, but swimlane allows for the creation of multiple categories of activities** and shows **multiple information flowing side by side**, being **ideal for representing the interaction of a process with different aspects of an organisation**. Workflow simply **describes the manner in which businesses function**. |
| Process flowchart vs data flowchart | **Process**: how a process is completed in an organisation — roles, production chain, internal communication. **Data**: the **data processing aspect of the design and analysis of a system**, showing the **flow of information**, and the one that **reduces the communication gap between users and developers**. |
| Advantages vs uses vs why-we-need | Three separate lists that read alike. **Uses** are what you *do* with a flowchart (plan a project, document a project, model a business process, manage workflow, manage data, map a computer algorithm). **Why we need them** is about program logic (clarity, evaluating the actions that follow from conditions, clarifying procedural steps, communicating with stakeholders). **Advantages** are the three about simplified logic, checking whether the logic works, and inclusion in specification documents. Quote the list you were asked for. |

*Two things to read with care. First, the arrow counts in the table are not tabulated anywhere on the slides — they follow from each symbol's stated use plus the first principle (**a start point and a stop point**), and the one that is genuinely examinable is the decision symbol's **two** arms. Second, the slides state the direction of operation as **usually** top to bottom and left to right and the flow-line rule as **generally not cross, if possible**; both hedges are in the source, so an option that hardens either into an absolute rule is wrong.*
