# COS_102 — Week 5 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 6, not this week. Notes closed. 12 MCQ + 3 short answer, about 30 minutes.*

## Section A — Multiple choice (12)

**1.** The course defines a flowchart as:
a) A set of instructions implemented in a particular order to carry out a task
b) A written outline of a program in near-English, used before the code is committed to a language
c) A graphical representation of the sequence of operations in a computer program, or the graphical representation of an algorithm
d) A diagram of the physical components of a computer system and the connections between them

**2.** According to the course, a flowchart consists of boxes and lines, and the direction of operation is usually:
a) From left to right and then bottom to top, following the reading order of the decision arms
b) From top to bottom and left to right
c) Outward from the decision symbol, since the decision determines every other position on the page
d) In whatever order the connectors specify, since a flowchart has no default direction

**3.** The symbol that is **also called the action symbol** is the:
a) Decision symbol, since deciding is the action the flow depends on
b) Preparation symbol, because it introduces the steps that actually do the work
c) Predefined process or declaration symbol
d) Process symbol, which shows an action, process or function

**4.** "Used in complex flowcharts to connect independent elements across multiple pages." This is the:
a) Link or off-page connector symbol
b) On-page connector symbol
c) Declaration symbol
d) Flow line

**5.** Which symbol shows **where data is stored**?
a) The document symbol
b) The multiple documents symbol
c) The database symbol
d) The input/output or data symbol

**6.** The preparation symbol:
a) Shows a complex process or a well-known operation, so that it need not be spelled out in this chart
b) Shows the difference between steps preparing for work and those that actually work
c) Adds comments to parts of the flowchart, typically to explain the set-up assumptions
d) Shows data that can be used either at the input or the output

**7.** "Shows the addition of inputs from various paths." This describes the:
a) Merge symbol
b) On-page connector symbol
c) Process symbol
d) Summing junction symbol

**8.** The four main types of flowchart the course focuses on are:
a) Process flowchart, workflow chart, swimlane flowchart, data flowchart
b) Process flowchart, decision chart, sequence chart, repetition chart
c) Program flowchart, system flowchart, document flowchart, database flowchart
d) High-level flowchart, refined flowchart, priori flowchart, posterior flowchart

**9.** Which type of flowchart does the course say **ensures that the communication gap between the users and developers of the system is reduced**?
a) Process flowchart
b) Workflow chart
c) Swimlane flowchart
d) Data flowchart

**10.** The course warns that one type can be confused with the workflow flowchart, but distinguishes it because it **allows for the creation of multiple categories of activities** and shows multiple information flowing side by side. That type is the:
a) Process flowchart
b) Swimlane flowchart
c) Data flowchart
d) Predefined process chart

**11.** Which is one of the course's principles for drawing a flowchart?
a) Flow lines must never cross under any circumstance
b) A flowchart must always fit on a single page, which is why the on-page connector exists
c) Flow lines should generally not cross, if possible
d) Instructions for comparisons should be made as detailed as possible, so that no case is left implicit

**12.** Which of the following does the course list as a **disadvantage** of flowcharts?
a) The flowchart logic is hardly the most efficient when used to write a program, because it can make the program unnecessarily longer than normal
b) Flowcharts cannot represent repetition, so any loop has to be written out as pseudocode alongside the chart
c) Flowcharts are dependent on the programming language in which the program will finally be written
d) Flowcharts cannot be added to program specification documents, because other programmers may not know the symbols

## Section B — Short answer (3)

**13.** Name every flowchart symbol the course gives, state the course's exact use for each, and give the alias where the course provides one (process, start/stop, decision, input/output, predefined process, link connector). Then say precisely how each of these pairs is told apart: document versus database; merge versus summing junction; preparation versus predefined process; decision versus comment.

**14.** Write out, box by box, the two flowcharts the course draws: the two-number adder from the input/output-symbol slide, and the counted-sum loop from the "why we need flowcharts" slide. Name the symbol used for every box in each. Then trace the second one on the input **2, 9, 4, 6, 8, 1**, giving `sum` and `count` after every pass, the exact printed output and the number of values actually entered, and identify which parts of the chart are sequence, which is selection and which is repetition.

**15.** Set out the whole of Lesson II: the six uses of flowcharts, the four main types with what each is for, the four reasons the course gives for needing flowcharts, the three advantages, the three disadvantages, and the four drawing principles. Quote the two principles that carry a hedge in their wording and say what the hedge changes.

## Answers

**1. c** — *The definition, in both of the course's forms.* The course gives it as **a graphical representation of the sequence of operations in a computer program; or the graphical representation of an algorithm**, and both halves are examinable. (a) is Week 4's definition of an **algorithm**; (b) is **pseudocode**, the other member of the pair Week 4 named as the two representations of an algorithm; (d) is a hardware or system diagram and has nothing to do with operations at all.

**2. b** — *Boxes, lines and the default reading direction.* **A flowchart consists of boxes and lines and the direction of operation is usually from top to bottom and left to right.** Keep the word **usually**: the connectors and the loop-back arms exist precisely because some flow runs against the default. (a) reverses the vertical half; (c) invents a rule; (d) throws the convention away, which would make every chart unreadable without following each arrow individually.

**3. d** — *The symbol aliases, which is where most of the marks in this section sit.* **The process symbol is also called the action symbol, and it shows an action, process or function.** (a) confuses the decision symbol, whose alias is the **control** symbol; (b) is the preparation symbol, which marks the boundary between set-up and work rather than performing it; (c) is the predefined process, whose alias is **declaration**.

**4. a** — *On-page versus off-page connector.* This is the Lesson I mid-lesson question verbatim: the **link connector**, also called the **off-page connector**, connects independent elements **across multiple pages**. (b) is the same job **across a single page** and is the intended trap. (c) is the alias of the predefined process symbol. (d) is the plain arrow, which carries flow continuously rather than resuming it elsewhere.

**5. c** — *Database versus the document family.* The **database symbol shows where data is stored** — it is the only symbol in the course's list whose stated use contains the idea of storage. (a) **shows a document's input or output**, a thing passing through the flow; (b) **shows different reports or documents**, the same idea in the plural; (d) **shows data that can be used either at the input or the output**, which is a transfer, not a store.

**6. b** — *Preparation: a boundary symbol, not a work symbol.* **The preparation symbol shows the difference between steps preparing for work and those that actually work.** (a) is the **predefined process or declaration** symbol, and *predefined* versus *preparation* is the single most-swapped pair among the symbols — one means "defined outside this chart", the other means "before the real work begins". (c) is the comment or note symbol; (d) is the input/output or data symbol.

**7. d** — *Summing junction versus merge.* The **summing junction shows the addition of inputs from various paths**; the **merge symbol is used to combine various paths into a single path**. Both narrow several lines to one, and only one of them adds — the word *addition* is the discriminator. (b) resumes a single flow elsewhere on the page rather than joining several; (c) is a single-in, single-out action box.

**8. a** — *The four types.* **Process flowchart, workflow chart, swimlane flowchart, data flowchart.** (b) mixes in the three control structures, which are constructs inside a chart rather than kinds of chart; (c) and (d) are inventions, (d) borrowing Week 4's development and analysis vocabulary.

**9. d** — *The data flowchart.* It **describes the data processing aspect of the design and analysis of a system by showing the flow of information**, it **ensures that the communication gap between the users and developers of the system is reduced**, and it can be used for **the analysis of any form of information flow**. This is the Lesson II mid-lesson question. (a) is about how a process is completed in an organisation — roles, the production chain, internal communication; (b) is about how businesses function; (c) is about multiple parallel categories of activity.

**10. b** — *Swimlane versus workflow, a confusion the course flags itself.* **A swimlane flowchart is useful in applications where we have multiple information flowing side by side**; **it can be confused with a workflow flowchart, but swimlane flowcharts allow for the creation of multiple categories of activities**, and it is **ideal for representing the interaction of a process with different aspects of an organisation**. (a) and (c) are the other two types; (d) is not a type of chart at all but a symbol.

**11. c** — *The four principles, with their hedges intact.* The course's four are: **the flowchart should have a start point and a stop point**; **flow lines should generally not cross, if possible**; **instructions for comparisons should be made as simple as possible**; and **the flowchart should be easy to follow, neat and clear such that the visual impact is very good**. (a) hardens the doubly hedged flow-line principle into an absolute prohibition — the commonest misquotation of this slide. (b) contradicts the course, which accepts that **complex programs might require that the flowchart spans multiple pages** and provides the link connector for exactly that case. (d) inverts the comparison principle: comparisons should be **simple**, and a compound condition should be split into simpler decisions.

**12. a** — *The three disadvantages.* They are: **complex programs or processes might require that the flowchart spans multiple pages**; **adjustments to the flowchart might be complicated and might even require that a new flowchart is drawn**; and **the flowchart logic is hardly the most efficient when used to write a program, because it can make the program unnecessarily longer than normal**. (b) is false — repetition is drawn with a decision whose arm returns to an earlier box. (c) inverts Week 4's **language independence**: a flowchart, like the algorithm it represents, is not tied to any language. (d) is the inversion of the third **advantage**, which is that flowcharts **are added to the program specification documents such that other programmers can easily understand the logic of the program**.

**13.** *Concept: the full symbol set, its aliases, and the four pairs that get swapped.* **Process** (*action symbol*) — **shows an action, process or function**. **Start/begin, stop/end** (*terminator symbol*) — **shows the start and end points of the flowchart**. **Decision** (*control symbol*) — **used when questions such as yes or no and true or false need an answer**, and **the answer to these questions determines the path the algorithm flow will take**. **Input/output** (*data symbol*) — **shows data that can be used either at the input or the output**. **Document** — **shows a document's input or output**. **Multiple documents** — **shows different reports or documents**. **Comment or note** — **used to add comments to parts of the flowchart**. **On-page connector** — **used in complex flowcharts to connect independent elements across a single page**. **Link connector** (*off-page connector*) — **used in complex flowcharts to connect independent elements across multiple pages**. **Predefined process** (*declaration symbol*) — **used to show a complex process or a well-known operation**. **Preparation** — **shows the difference between steps preparing for work and those that actually work**. **Database** — **shows where data is stored**. **Summing junction** — **shows the addition of inputs from various paths**. **Merge** — **used to combine various paths into a single path**. Plus the **flow line**, the arrow that carries the direction of operation, **usually top to bottom and left to right**. **The four pairs.** *Document versus database:* a document is a thing that passes **into or out of** the flow; a database is a **place data is stored**. *Merge versus summing junction:* both bring several paths down to one, but the summing junction **adds** the inputs while the merge only **combines the paths**. *Preparation versus predefined process:* preparation marks the **boundary in time** between setting up and working; predefined process marks a **boundary in space**, one box standing for a routine defined outside this chart. *Decision versus comment:* the decision **carries flow** — one arrow in, two labelled arms out, and the answer determines the path — whereas the comment **carries no flow at all** and can be deleted without changing what the chart computes.

**14.** *Concept: reading the week's two charts box by box, naming the symbols and locating the three constructs.* Notation: `[ ]` terminator, `( )` process, `/ /` input/output, `< >` decision.

**Chart A — the two-number adder.**

```
[ Start ]                  terminator (start/stop symbol)
    |
/ Read N1 and N2 /         input/output (data symbol)
    |
( R = N1 + N2 )            process (action symbol)
    |
/ Print R /                input/output (data symbol)
    |
[ Stop ]                   terminator (start/stop symbol)
```

Five boxes, each with exactly one arrow in and one out; no diamond, so the chart is **pure sequence** — no selection and no repetition. Both terminators are present, satisfying the first drawing principle.

**Chart B — the counted-sum loop.**

```
[ Start ]                  terminator
    |
( Sum = 0 )                process
( Count = 0 )              process
    |
/ Enter n /  <-------------+     input/output
    |                      |
( sum = sum + n )          |     process
( count = count + 1 )      |     process
    |                      |
< Is Count < 5? >          |     decision (control symbol)
    | YES ------------------+    flow line back up
    | NO
/ Print sum /                    input/output
    |
[ Stop ]                         terminator
```

**Trace on 2, 9, 4, 6, 8, 1.** Initialisation: `sum = 0`, `count = 0`. Pass 1, `n = 2`: `sum = 2`, `count = 1`; `1 < 5` true, YES arm back up. Pass 2, `n = 9`: `sum = 11`, `count = 2`; true, back. Pass 3, `n = 4`: `sum = 15`, `count = 3`; true, back. Pass 4, `n = 6`: `sum = 21`, `count = 4`; true, back. Pass 5, `n = 8`: `sum = 29`, `count = 5`, and `5 < 5` is **false**, so the NO arm leads to the print box. **Printed output: 29.** **Five values are entered** — 2, 9, 4, 6 and 8; the final **1 is never entered**, because `/ Enter n /` is reached again only when the YES arm sends control back to it, and on the fifth pass it does not. The decisive detail is that the increment sits in a process box **above** the diamond, so the pass that reads the fifth number is also the pass on which the test fails. **Sequence:** the initialisation pair, the two process boxes taken in order inside the body, and the print-then-stop pair at the exit. **Selection:** the single diamond `Is Count < 5?`, in the course's yes/no form. **Repetition:** the diamond together with its YES arm and the boxes back up to and including `/ Enter n /`, because that arm is a flow line returning to a box already executed. One diamond is doing both jobs here — it is the selection *and* the loop control — which is why the presence of a diamond never by itself tells you which construct you are looking at; you must follow the arms.

**15.** *Concept: the whole of Flowcharts II — uses, types, reasons, advantages, disadvantages and principles, as six separate lists that read alike.* **The six uses:** **to plan a new project; to document a project; to model a business process; to manage workflow; to manage data; to map computer algorithm.** **The four main types.** *Process flowchart* — **can be applied to almost anything** and **quickly describes how a process can be completed in an organisation**; it is used to **clarify the responsibilities and roles within an organisation**, **show the process a product goes through along the production chain**, and **describe information communication within an organisation**. *Workflow flowchart* — **describes the manner in which businesses function**; used **for employee training**, **to identify possible problematic areas**, to **simplify the operations of a business**, and **to create an output that is stable and of a high quality based on standard procedures**. *Swimlane flowchart* — **useful in applications where we have multiple information flowing side by side and we need to show it**; **it can be confused with a workflow flowchart, but swimlane flowcharts allow for the creation of multiple categories of activities**, and it is **ideal for representing the interaction of a process with different aspects of an organisation**. *Data flowchart* — **describes the data processing aspect of the design and analysis of a system by showing the flow of information**; it **ensures that the communication gap between the users and developers of the system is reduced** and can be used for **the analysis of any form of information flow**. **The four reasons we need flowcharts:** they **provide clarity to program logic**; they **evaluate the actions resulting from setting some conditions**; they **clarify a program's procedural steps**; and they **communicate the details of a program or process with other stakeholders**. **The three advantages:** flowcharts ensure that **the logic of a process or program is simplified**; they are used **to ascertain if the logic of the program works or not**; and they are **added to the program specification documents such that other programmers can easily understand the logic of the program**. **The three disadvantages:** **some complex programs or processes might require that the flowchart spans multiple pages**; **adjustments to the flowchart might be complicated and they might even require that a new flowchart is drawn**; and **the flowchart logic is hardly the most efficient when used to write a program, because it can make the program unnecessarily longer than normal**. **The four principles:** **the flowchart should have a start point and a stop point**; **flow lines should generally not cross, if possible**; **instructions for comparisons should be made as simple as possible**; **the flowchart should be easy to follow, neat and clear such that the visual impact is very good**. **The two hedged ones** are the flow-line principle — **generally** and **if possible**, so an unavoidable crossing is not a fault and an option that says flow lines must *never* cross is wrong — and, from the definition slide, the direction of operation, which is **usually** top to bottom and left to right, the hedge being what makes the loop-back arm and the connector symbols legitimate rather than violations.
