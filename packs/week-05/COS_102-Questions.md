# COS_102 — Week 5 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 6, not this week. Notes closed. 12 MCQ + 3 short answer, about 30 minutes.*

## Section A — Multiple choice (12)

**1.** The course defines a flowchart as:
a) A program written in English-like statements instead of a programming language
b) A graphical representation of the sequence of operations in a computer program, or the graphical representation of an algorithm
c) A finite ordered sequence of unambiguous steps that solves a problem
d) A table of the symbols used to describe start, stop, decision making and data processing

**2.** The _________ symbol is used in complex flowcharts to connect independent elements across multiple pages.
a) On-page connector  b) Declaration  c) Flowline  d) Link connector

**3.** A _________ flowchart ensures that the communication gap between the users and developers of the system is reduced.
a) Process flowchart  b) Workflow chart  c) Swimlane flowchart  d) Data flowchart

**4.** According to the course, the direction of operation in a flowchart is usually:
a) Left to right and bottom to top
b) Top to bottom and left to right
c) Whichever direction keeps the flow lines from crossing
d) Outwards from the decision symbol in both directions

**5.** Which symbol **combines various paths into a single path**?
a) The decision symbol  b) The merge symbol  c) The on-page connector  d) The preparation symbol

**6.** A rectangle in a flowchart is drawn with a vertical bar down each of its two sides and is labelled "Validate card number". What is it telling the reader?
a) A comment has been attached to the validation step
b) The validation is a preparation step rather than work that actually happens
c) It is a predefined process or declaration symbol: a complex process or well-known operation whose internal steps are not shown on this chart
d) The validation produces a document as its output

**7.** The course's stated **disadvantages** of flowcharts include all of the following **except**:
a) A complex program might require that the flowchart spans multiple pages
b) Adjustments might be complicated and might even require that a new flowchart is drawn
c) The flowchart logic is hardly the most efficient, because it can make the program unnecessarily longer than normal
d) A flowchart cannot show repetition, so a repeated step must be redrawn once for each repetition

**8.** A chart is drawn with a horizontal band for Sales, a band for Warehouse and a band for Accounts, and a purchase order passes between the bands as it is handled. Which type of flowchart is this, on the course's definitions?
a) A workflow chart, because it describes the manner in which a business functions
b) A swimlane flowchart, because it shows multiple information flowing side by side and allows multiple categories of activities
c) A process flowchart, because it clarifies the responsibilities and roles within an organisation
d) A data flowchart, because it shows the flow of information through the system

**9.** Which is **not** one of the course's principles for drawing a flowchart?
a) The flowchart should have a start point and a stop point
b) Flow lines should generally not cross, if possible
c) Instructions for comparisons should be made as simple as possible
d) Every decision symbol should be replaced by a loop wherever this shortens the chart

**10.** Consider this chart. **START → process "Sum = 0, Count = 0" → parallelogram "Enter n" → process "sum = sum + n; count = count + 1" → decision "Is Count < 5?"; the YES branch is a back-arrow up to "Enter n", the NO branch goes to parallelogram "Print sum" → STOP.** How many numbers does the user enter?
a) Four  b) Five  c) Six  d) It depends on the values entered

**11.** In that same chart, `sum = sum + n` is drawn as a rectangle and `Enter n` as a parallelogram. Why?
a) Because a rectangle is used for arithmetic and a parallelogram for anything involving a variable name
b) Because `Enter n` brings data in from outside the program, which is the input/output or data symbol, whereas `sum = sum + n` is an action performed on data the program already holds, which is the process or action symbol
c) Because the parallelogram must be used for any step inside a loop, and the rectangle for steps outside it
d) Because a parallelogram is required wherever the value is not yet known, and a rectangle wherever it is

**12.** A small circle labelled **A** has a flowline arriving at it and none leaving. Elsewhere on the **same page**, a circle labelled **A** has a flowline leaving it and none arriving. What is happening?
a) The chart is faulty: the first circle is a dead end because nothing leaves it
b) The first circle is a stop terminator and the second is a second start point for an independent part of the chart
c) They are a matched pair of on-page connectors: the flow leaves the first and resumes at the second, which lets a complex chart join independent elements without a long flow line that would have to cross others
d) They are summing junctions, which show the addition of inputs from various paths

## Section B — Short answer (3)

**13.** Name **eight** flowchart symbols the course teaches and state, in one line each, what each one does. For **four** of them, state how many flowlines enter and how many leave.

**14.** Give the course's four main **types** of flowchart and, for each, one use the course states for it. Then explain the one distinction the course itself flags as easily confused, and say how you would tell those two apart from the drawing alone.

**15.** A flowchart and a piece of pseudocode both describe the same method. Explain what an **algorithm**, a **flowchart** and **pseudocode** each are, how the three relate, and what happens if you hand any of them to a compiler. Then say which flowchart symbol corresponds to `IF ... THEN ... ELSE`, to `READ`, to an assignment, and to `REPEAT ... UNTIL`.

## Answers

**1. b — A graphical representation of the sequence of operations in a computer program, or the graphical representation of an algorithm.** *Concept: the definition of a flowchart.* (c) is the definition of an **algorithm**, and (a) of **pseudocode** — a flowchart is a *representation* of an algorithm, not the algorithm and not a program.

**2. d — Link connector.** *Concept: on-page vs off-page connector.* This is the Flowcharts I mid-lesson question verbatim. The **on-page** connector does the same job across a **single page**; the **declaration** (predefined process) shows a complex or well-known operation; a **flowline** just carries the flow between two visible symbols.

**3. d — Data flowchart.** *Concept: the four types and what each is credited with.* The Flowcharts II mid-lesson question verbatim. The data flowchart **describes the data processing aspect of the design and analysis of a system by showing the flow of information**, and it is the one the course says **reduces the communication gap between users and developers**.

**4. b — Top to bottom and left to right.** *Concept: direction of operation.* (c) confuses the **direction** with the separate **principle** that flow lines should not cross.

**5. b — The merge symbol.** *Concept: fan-in vs fan-out.* Merge **combines various paths into a single path**. The **decision** is the only fan-out symbol (one in, two out); the **summing junction** is also fan-in but is defined as **showing the addition of inputs from various paths**; the **preparation** symbol distinguishes preparing for work from work itself.

**6. c — Predefined process / declaration.** *Concept: predefined process vs process, preparation and comment.* It **shows a complex process or a well-known operation**; the step still executes, its steps are simply defined elsewhere. (b) is the **preparation** symbol (hexagon), (a) the **comment** symbol (attached by a dashed line, not on the flow path), (d) the **document** symbol (wavy bottom edge).

**7. d.** *Concept: the stated disadvantages.* (a), (b) and (c) are the three the course lists. (d) is false as well as unlisted: repetition is exactly what the **back-arrow** from a decision represents, which is how the course's own Sum/Count example reads five numbers with one `Enter n` box.

**8. b — Swimlane flowchart.** *Concept: swimlane vs workflow.* Lanes are the giveaway: the swimlane chart shows **multiple information flowing side by side** and allows the **creation of multiple categories of activities**, ideal for **the interaction of a process with different aspects of an organisation**. The course itself warns it **can be confused with a workflow flowchart**, which describes **the manner in which businesses function** as a single flow. (c) borrows a true statement about process flowcharts, but "clarifying roles" is not the same as *drawing a lane per role*.

**9. d.** *Concept: the four principles.* The stated principles are a **start point and a stop point**, **flow lines should generally not cross if possible**, **comparisons made as simple as possible**, and **easy to follow, neat and clear with good visual impact**. (d) is a plausible-sounding invention drawn from the *disadvantage* about efficiency; a loop and a decision do different jobs and one cannot replace the other.

**10. b — Five.** *Concept: tracing a post-test loop.* Count starts at 0. Pass 1 leaves count = 1 and 1 < 5 is Yes; passes 2, 3 and 4 leave count at 4, still Yes; pass **5** makes count = 5, and 5 < 5 is **No**, so the flow leaves the loop. (a) is the off-by-one from testing the counter before the increment. (c) counts the final exit pass as one more `Enter n`, i.e. it puts the test *before* the input box rather than after. (d) mistakes an initialised counter for something that depends on the data — nothing in the condition mentions `n`.

**11. b.** *Concept: parallelogram vs rectangle (data vs process).* The parallelogram is the **input/output or data symbol** — data crossing into or out of the program; the rectangle is the **process or action symbol** — work done on data already held. (a), (c) and (d) each invent a rule from an accidental feature of this one chart (arithmetic, being inside the loop, the value being unknown); none of them survives the `Print sum` box, which is also a parallelogram yet involves no unknown value and sits outside the loop.

**12. c — A matched pair of on-page connectors.** *Concept: connector vs terminator vs flowline.* The label is what joins the two ends; the flow is not over, it resumes at the twin. (a) is the over-literal "every symbol must have an exit" reading that treats a connector as a symbol you *do*. (b) is the classic misread of a connector as a **terminator** — a STOP would make the chart appear to end when it does not, and a chart has one start point. (d) confuses the circle shape with the **summing junction**, which takes several inputs and has one output.

**13.** *Concept: the symbol inventory.* Any eight of: **Terminator** (oval) — shows the start and end points of the flowchart. **Process / action** (rectangle) — shows an action, process or function. **Decision / control** (diamond) — used when a yes/no or true/false question needs an answer, and the answer determines the path the flow takes. **Input/Output, the data symbol** (parallelogram) — shows data used either at the input or the output. **Flowline** (arrow) — carries the flow and sets its direction. **On-page connector** — connects independent elements across a single page. **Link / off-page connector** — connects independent elements across multiple pages. **Predefined process / declaration** — shows a complex process or a well-known operation. **Preparation** — shows the difference between steps preparing for work and those that actually work. **Document** — shows a document's input or output. **Multiple documents** — shows different reports or documents. **Database** — shows where data is stored. **Summing junction** — shows the addition of inputs from various paths. **Merge** — combines various paths into a single path. **Comment / note** — adds comments to parts of the flowchart. Arrow counts: **process, I/O, predefined process, preparation, document** — 1 in, 1 out. **Decision** — 1 in, exactly 2 out, both labelled. **START** — 0 in, 1 out; **STOP** — 1 or more in, 0 out. **Merge and summing junction** — several in, 1 out. **Comment** — 0 in, 0 out; it is attached by a dashed line and is never on the flow path. **Connectors** — used as a matched pair, one end 1 in / 0 out, the twin 0 in / 1 out.

**14.** *Concept: the four types, and the pair the course flags.* **Process flowchart** — applies to almost anything and quickly describes how a process can be completed in an organisation; used to clarify responsibilities and roles, show the process a product goes through along the production chain, and describe information communication within an organisation. **Workflow chart** — describes the manner in which businesses function; used for employee training, identifying possible problematic areas, simplifying operations, and creating stable, high-quality output based on standard procedures. **Swimlane flowchart** — useful where multiple information flows side by side and must be shown; ideal for representing the interaction of a process with different aspects of an organisation. **Data flowchart** — describes the data processing aspect of the design and analysis of a system by showing the flow of information; reduces the communication gap between users and developers, and can analyse any form of information flow. The pair the course flags is **swimlane vs workflow**: they describe similar business material, but the swimlane chart **allows the creation of multiple categories of activities**, so it is drawn as parallel **lanes**, one per actor, department or category, with the flow crossing between them. Tell them apart from the drawing alone: **if the chart is divided into lanes and the flow passes from lane to lane, it is a swimlane chart; if it is a single undivided flow, it is a workflow chart.**

**15.** *Concept: algorithm vs flowchart vs pseudocode.* An **algorithm** is the method itself — a finite, ordered sequence of unambiguous steps that solves the problem — and it exists independently of how it is written down. A **flowchart** is one notation for that algorithm: the course's own definition is **the graphical representation of an algorithm**, made of symbols joined by flowlines, with labelled branches at each decision. **Pseudocode** is the other everyday notation: the same algorithm written as English-like statements using programming keywords and indentation, where the flowchart uses shapes and arrows. So there is **one algorithm and two representations of it**, and a correct conversion between them changes only the notation, never the order of the steps or the conditions. Handed to a compiler, **all three fail**: none of them is a program in a programming language. That is why the course places the flowchart in the **program specification documents**, where its job is to let other programmers understand the logic and to let the author **ascertain whether the logic works or not** before any code is written. Correspondences: `IF ... THEN ... ELSE` is the **decision** symbol (diamond), with the THEN part on one labelled branch and the ELSE part on the other; `READ` — and `PRINT` — is the **input/output or data symbol** (parallelogram); an assignment such as `sum <- sum + n` is the **process or action symbol** (rectangle); and `REPEAT ... UNTIL` is a **decision at the foot of the loop body whose one branch is a back-arrow** to the first box of that body, the other branch leaving the loop.
