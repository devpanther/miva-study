# Wednesday — COS_102 nightly check

*Week 5 flowchart concepts treated conceptually: what each flowchart symbol means and why the notation gives it that role. Covers the process, decision, input/output, preparation, predefined process, merge, summing junction, comment and connector symbols; the rules governing how many flow lines may enter and leave each; why a flowchart needs one entry point and reachable exit points; and what breaks when those rules are ignored. Also covers why the four drawing principles are stated as principles rather than as correctness rules, and how the four flowchart types (process, workflow, swimlane, data) differ in what they are for. No hand-tracing of charts is required in this session.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** A process rectangle and a decision diamond both sit on the flow path. Why does the notation allow the diamond exactly two outgoing flow lines but the rectangle only one?
a) A process has exactly one successor - the next step - while the diamond's two exits are the mutually exclusive answers to its question, so control must be able to continue either way.
b) The diamond is the wider shape, so it has room for a flow line at each of its two lower vertices.
c) A process step might fail, and failure is shown by returning to the previous symbol rather than by drawing a second exit.
d) Two exits from a rectangle would mean its two successors run at the same time, which is shown with a summing junction instead.

**2.** Sum = 0 written before a loop and Sum = Sum + n written inside it are both assignments. Why does the notation give them different symbols?
a) Because Sum = 0 executes only once, and any step that executes only once is drawn as a hexagon.
b) Because the hexagon is reserved for steps that set a variable to zero or to an empty starting value.
c) Because an assignment outside a loop counts as input/output, while an assignment inside a loop counts as a process.
d) Because the preparation symbol marks a step that sets things up for the work that follows, while the process symbol marks the work itself; the distinction is the step's role, not its arithmetic.

**3.** A chart uses an on-page connector: a flow line enters a small circle labelled A, and elsewhere on the page a circle labelled A sends a flow line into Step 4. Why does the connector add nothing to the algorithm, yet a connector left without its matching partner makes the chart invalid?
a) A connector holds the value most recently computed, so an unmatched one loses that value and the steps after it read undefined data.
b) A connector is only a flow line drawn in two pieces, so it adds no step; unmatched, the flow line has no destination and that path can never reach a Stop symbol.
c) A connector counts as one step of the algorithm, so an unmatched one leaves the step count wrong and the chart cannot be turned into code.
d) A connector fixes the order in which the pages are read, so an unmatched one makes the page order ambiguous although the logic is still complete.

**4.** Why must a valid flowchart have exactly one Start terminator, while it is acceptable for it to have several Stop terminators?
a) Because the Start symbol also declares the chart's variables, and declaring them twice would be an error.
b) Because Stop symbols are decoration, whereas Start marks the place where the reader begins reading.
c) Because execution can begin in only one place, so exactly one entry point is required; but different branches may legitimately finish, so several exit points are allowed.
d) Because a Start symbol has no incoming flow line, so a second Start would have nothing pointing at it and could never be reached.

**5.** Three flow lines converge. On one chart they meet at a downward-pointing triangle; on another they meet at a circle containing a cross. What is the difference in meaning?
a) The triangle joins paths that lie on a single page; the circled cross joins paths arriving from another page.
b) The triangle is used when the paths came from a decision; the circled cross when they came from separate Start symbols.
c) They mean the same thing; the circled cross is simply the older notation for a merge.
d) The triangle means the routes continue as one route; the circled cross means the values arriving on those routes are added together.

**6.** Why is the comment or note symbol attached by a dashed line and given no flow arrows of its own?
a) Because it describes a part of the chart rather than being a step; putting it on the flow path would assert that control passes through a remark.
b) Because comments are added once the chart is finished, and a dashed line marks anything added afterwards.
c) Because a dashed line means the step is optional and may be skipped when the chart is executed.
d) Because comments belong to the programmer rather than to the program, and solid lines are reserved for symbols that survive into the finished code.

**7.** One of the stated drawing principles is that flow lines should generally not cross, if possible. Why is it hedged with 'generally' and 'if possible' rather than stated flatly?
a) Because crossing flow lines silently reverse the order in which the crossed steps execute, and this must therefore be avoided in every case.
b) Because it is a readability rule rather than a correctness one: the arrows still mean exactly what they point at, but a crossed chart is harder to follow.
c) Because crossings are permitted only where a connector symbol is placed at the crossing point to disambiguate them.
d) Because whether lines cross depends on the drawing package used, so the principle cannot be enforced in practice.

**8.** A bank wants a chart showing how a loan application moves between the customer, the branch officer and the credit department, with each party's steps kept in its own band across the page. Which of the four main flowchart types fits, and why?
a) A process flowchart, because it shows the process a product goes through along the production chain.
b) A data flowchart, because it shows the flow of information through the system.
c) A swimlane flowchart, because it allows multiple categories of activity to be shown side by side.
d) A workflow flowchart, because it describes the manner in which a business functions.

**9. (explain why)** Explain why a decision diamond whose two exits are left unlabelled makes a flowchart untraceable, even when a reader can guess which branch was intended.

**10. (explain why)** Explain why the top-to-bottom, left-to-right direction of operation is a convention while the arrowheads on the flow lines are the actual rule.

**11. (explain why)** Explain why flowcharts can be praised for simplifying and clarifying a program's logic and, in the same lecture, criticised for producing programs that are unnecessarily long and inefficient.

**12. (explain why)** Explain why the rectangle, the diamond and the parallelogram are between them enough to express sequence, selection and repetition - what does each construct actually demand of the notation?
