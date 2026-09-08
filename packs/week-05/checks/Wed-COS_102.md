# Wednesday — COS_102 nightly check

*Week 5 flowchart concepts treated conceptually: what each flowchart symbol means, and why the notation gives it that role.*
*12 questions, straight after the hour. Score out of 12.*

**1.** A box in a flowchart is labelled 'Compute payroll' and stands for a whole routine that is drawn in full on a separate chart. Which symbol should it be drawn in?
A. Process (plain rectangle)
B. Preparation (hexagon)
C. Predefined process (rectangle with a double line on each side)
D. Document (rectangle with a wavy bottom)

**2.** A chart is: Start; Read N1 and N2; R = N1 + N2; Print R; Stop, each step joined to the next. How many flow lines does it contain, and how many decision symbols?
A. 4 flow lines, 0 decisions
B. 5 flow lines, 0 decisions
C. 4 flow lines, 1 decision
D. 3 flow lines, 0 decisions

**3.** A plain rectangle labelled 'Check balance' has one arrow in and two arrows out, labelled 'Enough' and 'Not enough'. Which single change makes the chart valid?
A. Add a merge symbol before the two arrows
B. Replace the rectangle with a diamond asking 'Balance ≥ amount?'
C. Replace the rectangle with a parallelogram
D. Add an on-page connector to each outgoing arrow

**4.** A chart runs: Start; K = 3; decision 'Is K > 0?'; Yes → Print K; K = K − 1; back to the decision; No → Stop. What is printed, and how many times is the decision evaluated?
A. 3 2 1; 3 times
B. 3 2 1 0; 4 times
C. 2 1 0; 3 times
D. 3 2 1; 4 times

**5.** A diamond 'Is x > 10?' sends Yes to 'Print big' and No to 'Print small'. Both arrows then meet at a downward triangle, and one arrow continues to Stop. Which construct does this chart implement?
A. Sequence
B. Selection
C. Repetition
D. Predefined process

**6.** On page 1 a flow line ends in a small pentagon labelled 3. Page 2 opens with a pentagon labelled 3 whose arrow leads into 'Set timer'. Which symbol is this pair, and what does it change in the algorithm?
A. Off-page (link) connector; nothing in the logic changes
B. On-page connector; nothing in the logic changes
C. Off-page (link) connector; the flow waits until page 2 is reached
D. Merge; the two pages' paths are combined into one

**7.** A chart has two Start terminators: one leads into 'Read A', the other into 'Read B', and both paths reach a single Stop. Which drawing rule is broken?
A. Flow lines should not cross
B. Comparisons should be kept simple
C. A chart has exactly one start point
D. A chart may have only one stop point

**8.** Three flow lines arrive at one symbol and a single line leaves it. The values on the three paths are not added; the routes simply rejoin. Which symbol is it?
A. Summing junction
B. Decision
C. On-page connector
D. Merge

**9.** A chart runs: Start; Total = 0; K = 0; Enter x; Total = Total + x; K = K + 1; decision 'Is K < 3?'; Yes back to Enter x; No to Print Total; Stop. How many flow arrows enter 'Enter x', how many leave the decision, and which symbol is used for 'Print Total'?
A. 1 enters, 2 leave, input/output parallelogram
B. 2 enter, 2 leave, input/output parallelogram
C. 2 enter, 2 leave, process rectangle
D. 1 enters, 1 leaves, input/output parallelogram

**10.** A flowchart must read a temperature T and print 'Hot' if T is above 30 and 'Fine' otherwise, with every path reaching Stop. Which layout is correct?
A. Start; 'Is T > 30?' diamond, Yes to Read T, No to Print 'Fine'; both arrows to Stop
B. Start; Read T parallelogram; 'T > 30' rectangle with two exits, to Print 'Hot' and to Print 'Fine'; both to Stop
C. Start; Read T parallelogram; 'Is T > 30?' diamond, Yes to Print 'Hot', No to Print 'Fine'; both to Stop
D. Start; Read T parallelogram; 'Is T > 30?' diamond, Yes to Print 'Hot' to Stop; the No exit left unconnected

**11.** Three charts: (i) parallel lanes headed Sales, Warehouse and Accounts, with an order passing across the lanes; (ii) how a customer's details move from a web form into a database and out to a monthly report; (iii) a chart handed to new staff to teach the standard procedure for taking an order. What is the flowchart type of each, in order?
A. Swimlane, data, workflow
B. Swimlane, workflow, data
C. Data, swimlane, process
D. Swimlane, data, process

**12.** Why does a decision symbol have exactly two exits that must both be labelled, while a process box has exactly one, and what goes wrong when a diamond's exits carry no labels?
A. Two inputs against one output; without labels the trace simply takes the left exit
B. Two actions against one answer; without labels the chart gains too many flow lines
C. Two answers against one action; without labels the chart runs both exits at once
D. Two answers against one action; without labels a trace cannot tell which arrow belongs to which answer

---

## Answers

**1. C** — *Choosing the symbol for a step.* The box does not spell out the work; it names an operation that is defined elsewhere. That is exactly what the predefined process (declaration) symbol is for.

A plain rectangle would claim the step itself is written in the box; the preparation hexagon is for set-up steps such as initialising a counter; the document symbol shows a document going in or out, not a routine.

**2. A** — *Counting flow lines in a sequence chart.* Five symbols in a straight line need one arrow between each consecutive pair: Start→Read, Read→R, R→Print, Print→Stop, so 4 flow lines. No question is asked anywhere, so there is no diamond: the chart is pure sequence.

5 counts one arrow per symbol, including one leaving Stop; 3 forgets the arrow into Stop; '1 decision' treats the assignment R = N1 + N2 as if it were a question.

**3. B** — *Only a decision symbol may branch.* Two labelled exits mean a choice is being made, and only the decision symbol may branch; a process box has exactly one exit. Replacing the rectangle with a diamond that poses the yes/no question fixes it.

A merge joins paths rather than splitting them; a parallelogram is for input or output and still has one exit; connectors only carry a flow line somewhere else and do not create a branch.

**4. D** — *Tracing a pre-tested loop.* The decision is tested before every print: K = 3 yes, print 3; K = 2 yes, print 2; K = 1 yes, print 1; K = 0 no, stop. Three prints, four evaluations, because the last evaluation is the one that fails.

'3 times' forgets the final failing test; '3 2 1 0' reads K > 0 as if it were K ≥ 0; '2 1 0' subtracts before printing.

**5. B** — *Identifying the construct from the arrows.* Both exits of the diamond move forward, one of the two prints happens once, and the paths rejoin at the merge triangle. That is selection.

Repetition needs an exit that runs back to a symbol already executed; sequence has no diamond at all; predefined process is a symbol, not a construct.

**6. A** — *Connectors across pages.* A pentagon joining elements on different pages is the link, or off-page, connector. It is pure navigation: the flow continues at the matching label exactly as if one long arrow had been drawn, so the sequence of operations is unchanged.

The on-page connector is a circle and stays on one sheet; nothing 'waits' at a connector; a merge combines several paths into one, and here there is only one path.

**7. C** — *Rules for a valid flowchart.* A flowchart has one entry point; with two Starts a reader cannot tell where execution begins. Several Stops are allowed, so the single Stop here is fine.

No crossing lines are described; there is no comparison in the chart; and the one-stop rule does not exist, a chart may end in more than one place.

**8. D** — *Merge versus summing junction.* Several paths in, one path out, and nothing is added: that is the merge symbol, the downward triangle that combines various paths into a single path.

The summing junction (circled ×) shows the addition of inputs from various paths; a decision has one arrow in and two out; an on-page connector carries one line to another spot on the same page.

**9. B** — *Assigning symbols and arrow counts on a chart.* Two arrows reach 'Enter x': one forward from K = 0 and one back from the Yes exit of the decision, and it is that back arrow that makes the chart a loop. A decision has one exit per answer, so two leave it. 'Print Total' moves data out of the algorithm, so it is drawn as an input/output parallelogram.

Counting one arrow into 'Enter x' misses the back arrow; a process rectangle is for an action such as Total = Total + x, not for printing; a decision with a single exit could not branch at all.

**10. C** — *Laying out a selection chart.* T must be read before any test uses it, the test belongs in a diamond with both exits labelled, each branch does its own printing, and both branches must reach Stop. That is the layout with Read T first, a labelled diamond, and both branches ending at Stop; 'Is T ≤ 30?' with the two branches swapped would serve just as well.

Testing before Read T uses a value that does not exist yet; a rectangle may have only one exit, so it cannot branch; leaving the No exit unconnected creates a path with no route to Stop.

**11. A** — *Identifying flowchart types.* Parallel lanes, one per department, are the defining feature of a swimlane chart. A chart of how information moves through a system is a data flowchart. A chart of how the business operates, used to train staff on a standard procedure, is a workflow chart.

Calling (iii) a process flowchart is the usual slip: a process chart follows a product or process along a chain rather than the standard routine taught to new staff. The other orderings swap the data and workflow charts around.

**12. D** — *Arrow rules for decision and process symbols.* A decision asks a yes/no question, so there must be one exit for each possible answer, and each must be labelled so the reader knows which is which. A process box performs one action and asks nothing, so only one thing can happen next: a single exit.

With unlabelled exits the trace stops dead at the diamond: the question can be evaluated but neither arrow can be chosen, so different readers take different paths and the chart no longer defines one algorithm. It does not run both exits, take a default exit, or acquire extra flow lines.
