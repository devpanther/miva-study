# COS_102 — Week 5

*Introduction to Problem Solving · Week 5 (5 – 11 Oct 2026)*

*Note: both decks carry their symbol shapes and worked charts as pictures, so the extracted text names each symbol and its purpose but never draws it and never states arrow counts. The shapes, the arrow-in/arrow-out rules and the traces below are the standard content for exactly the symbols and examples the decks name.*

## Most likely to be examined

1. **Definition.** A flowchart is a graphical representation of the sequence of operations in a computer program — equivalently, the graphical representation of an algorithm. It is built from boxes and lines, and the direction of operation runs **top to bottom and left to right**.
2. **Symbol → purpose matching.** Process/action = an action, process or function; terminator = the start and end points; decision/control = a question answered yes/no or true/false whose answer determines the path the flow takes; input/output (data) = data used at the input or the output; predefined process (declaration) = a complex or well-known operation defined elsewhere; preparation = the difference between steps preparing for work and steps that actually do the work; document = a document's input or output; multiple documents = several different reports or documents; database = where data is stored; comment/note = a remark added to part of the chart; on-page connector = joins independent elements across **a single page**; link/off-page connector = joins independent elements across **multiple pages**; summing junction = the addition of inputs from various paths; merge = combines various paths into a single path.
3. **The exam's favourite discrimination:** on-page connector (single page) vs link/off-page connector (multiple pages). A deck mid-lesson question asks exactly this; the answer is the **link connector**.
4. **The four main flowchart types:** process, workflow, swimlane, data. The **data flowchart** is the one that "reduces the communication gap between the users and developers of the system" — the other mid-lesson question.
5. **The four drawing principles:** (i) the flowchart should have a start point and a stop point; (ii) flow lines should generally not cross if possible; (iii) instructions for comparisons should be made as simple as possible; (iv) the chart should be neat, clear and easy to follow, with very good visual impact.
6. **Advantages:** simplifies the logic of a process or program; lets you ascertain whether the program's logic works; can be added to program specification documents so other programmers understand the logic. **Disadvantages:** complex processes may span multiple pages; adjustments are complicated and may require a redraw; flowchart logic is hardly the most efficient and can make a program unnecessarily longer.
7. **Uses:** plan a new project, document a project, model a business process, manage workflow, manage data, map a computer algorithm.
8. **Reading a loop off a chart:** a backward flow line from a decision to an earlier symbol is repetition; a decision whose two branches rejoin without any backward arrow is selection.

## The symbols — shape, purpose, arrows

| Symbol | Shape | Purpose | In / Out |
|---|---|---|---|
| Terminator (start/begin, stop/end) | Oval / stadium, rounded ends | Marks the start and end points of the flowchart | Start: 0 in, 1 out. Stop: 1 or more in, 0 out |
| Process (action) | Plain rectangle | An action, process or function — an assignment or calculation | 1 in, 1 out |
| Decision (control) | Diamond (rhombus) | Poses a yes/no or true/false question; the answer determines the path the flow takes | 1 in, **exactly 2 out, both labelled** |
| Input/Output (data) | Parallelogram (slanted rectangle) | Data used at the input or the output — read, enter, print, display | 1 in, 1 out |
| Predefined process (declaration) | Rectangle with a double line down each vertical side | A complex process or a well-known operation defined elsewhere | 1 in, 1 out |
| Preparation | Hexagon, pointed at both ends | Separates steps that *prepare* for work (initialising a total, setting a counter) from steps that actually do the work | 1 in, 1 out |
| Document | Rectangle with a wavy bottom edge | A document's input or output | 1 in, 1 out |
| Multiple documents | Stacked wavy-bottom rectangles | Several different reports or documents | 1 in, 1 out |
| Database | Cylinder (drum on its side) | Shows where data is stored | 1 in, 1 out; usually paired with a read/write step |
| Comment / note | Open square bracket attached by a **dashed** line | Adds a comment to part of the flowchart | **Not on the flow path** — 0 flow arrows |
| On-page connector | Small circle with a letter or number inside | Connects independent elements across **a single page** | One circle takes an arrow in; its labelled twin sends one out |
| Link / off-page connector | Pentagon ("home plate") carrying a page or letter label | Connects independent elements across **multiple pages** | As above, but between pages |
| Summing junction | Circle with a cross (×) inside | Shows the addition of inputs arriving from various paths | Several in, 1 out |
| Merge | Downward-pointing triangle | Combines various paths into a single path | Several in, 1 out |
| Flowline | Straight arrow | Carries control from one symbol to the next | — |

## Rules for a valid flowchart

- Exactly **one** start terminator; at least one stop terminator, and every path must be able to reach one.
- Every symbol except start has at least one arrow entering it; every symbol except stop has an arrow leaving it. A dangling symbol (nothing in, or nothing out) makes the chart invalid.
- Only the decision symbol branches. A process or I/O box with two outgoing arrows is an error — the choice must be made by a diamond.
- Both exits of a decision must be labelled (Yes/No, True/False); an unlabelled diamond cannot be traced.
- Every connector label must have a matching partner; a lone "A" leads nowhere.
- Default direction is top to bottom and left to right; arrows are what let you depart from it, and flow lines should not cross where it can be avoided.
- A loop's back arrow must land where the tested variable can still change, or the loop never ends.

## Sequence, selection, repetition on a flowchart

- **Sequence** — symbols stacked in a straight line, one arrow into and one out of each, no diamond anywhere. The deck's "add two numbers" chart is pure sequence.
- **Selection** — a diamond with two labelled exits that go different ways and then rejoin (often at a merge). The deck's lamp chart: *Lamp plugged in?* No → Plug in lamp; Yes → on to *Bulb burned out?*
- **Repetition** — a diamond one of whose exits is a **backward** flow line to an earlier symbol, so a group of symbols is executed again. The deck's sum-of-five chart.

```
TRACE 1 — the deck's "sum of five numbers" chart
 1  Start
 2  Sum = 0                (process / preparation)
 3  Count = 0              (process / preparation)
 4  Enter n                (input/output)   <-- the back arrow lands here
 5  Sum = Sum + n          (process)
 6  Count = Count + 1      (process)
 7  Is Count < 5 ?         (decision)
       YES -> go back to step 4
       NO  -> go to step 8
 8  Print Sum              (input/output)
 9  Stop

Hand trace with inputs 2, 4, 6, 8, 10:
  pass 1: n=2   Sum=2    Count=1   1<5 yes -> loop
  pass 2: n=4   Sum=6    Count=2   2<5 yes -> loop
  pass 3: n=6   Sum=12   Count=3   3<5 yes -> loop
  pass 4: n=8   Sum=20   Count=4   4<5 yes -> loop
  pass 5: n=10  Sum=30   Count=5   5<5 NO  -> exit
  Printed: 30      (exactly five numbers read, as intended)

TRACE 2 — the deck's "add two numbers" chart (pure sequence)
 1  Start
 2  Read N1 and N2         (input/output)
 3  R = N1 + N2            (process)
 4  Print R                (input/output)
 5  Stop
```

## Commonly confused

- **On-page connector vs link (off-page) connector** — test: *does the jump stay on this sheet of paper?* Same page → circle with a letter. Different page → pentagon. Both are pure navigation; neither alters the logic.
- **Merge vs summing junction** — test: *are you joining routes or adding values?* Merge (triangle) puts several paths back onto one path. Summing junction (circled ×) adds the inputs arriving from several paths.
- **Process vs predefined process** — test: *is the work spelled out in the box?* If the box states the step itself, it is a process (plain rectangle). If it merely names an operation defined elsewhere, it is a predefined process (double-sided rectangle).
- **Process vs preparation** — test: *does this step do the work or set up for it?* Count = 0 before a loop is preparation (hexagon); Sum = Sum + n inside the loop is a process (rectangle).
- **Decision vs merge** — both sit where paths meet. A decision has **one arrow in and two out**; a merge has **many in and one out**. Count the arrows rather than trusting the shape you half-remember.
- **Document vs input/output symbol** — the parallelogram means data in or out in general; the wavy-bottomed rectangle means specifically a *document*.
- **Workflow vs swimlane flowchart** — the deck warns these are confused. Test: *are there parallel lanes for different actors or departments?* Swimlane allows multiple categories of activity side by side; a workflow chart describes how the business functions without partitioning it.
- **Selection vs repetition** — both are drawn with a diamond. Test: *does either exit arrow point backwards, to a symbol already executed?* Backwards → repetition. Both forwards → selection.
- **"Flowcharts clarify logic" vs "flowcharts make programs efficient"** — clarity is listed as an advantage; inefficiency (unnecessarily long programs) is listed as a *disadvantage*. Never credit flowcharts with efficiency.
