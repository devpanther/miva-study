# Wednesday — COS_102 nightly check

*Week 5 flowchart concepts treated conceptually: what each flowchart symbol means, and why the notation gives it that role.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

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

**9. (show your working)** A chart runs: Start; Total = 0; K = 0; Enter x; Total = Total + x; K = K + 1; decision 'Is K < 3?'; Yes → back to Enter x; No → Print Total; Stop. Name the symbol for each of the seven steps between Start and Stop, then state how many flow arrows enter 'Enter x' and how many leave the decision.

**10. (show your working)** Describe, step by step and naming the symbol for each step, a flowchart that reads a temperature T and prints 'Hot' if T is above 30 and 'Fine' otherwise. Every path must reach Stop.

**11. (show your working)** Three charts: (i) parallel lanes headed Sales, Warehouse and Accounts, with an order passing across the lanes; (ii) how a customer's details move from a web form into a database and out to a monthly report; (iii) a chart handed to new staff to teach the standard procedure for taking an order. Name the flowchart type of each and give the one feature that decides it.

**12. (show your working)** Explain why a decision symbol has exactly two exits that must both be labelled, while a process box has exactly one exit. Then say what goes wrong when you try to trace a chart whose diamond exits carry no labels.

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

**9.** *Assigning symbols and arrow counts on a chart.* Total = 0 and K = 0: process rectangles (the preparation hexagon is also accepted, since they are set-up steps). Enter x: input/output parallelogram. Total = Total + x and K = K + 1: process rectangles. Is K < 3?: decision diamond. Print Total: input/output parallelogram.

Two arrows enter 'Enter x': one from K = 0 and one back from the Yes exit of the decision. Two arrows leave the decision: Yes and No. A correct answer gives parallelograms for both data steps, a diamond for the test, rectangles (or hexagons for the two initialisations) for the assignments, and the counts 2 and 2. Giving 1 arrow into 'Enter x' misses the back arrow that makes this a loop.

**10.** *Laying out a selection chart.* Model answer: Start (terminator); Read T (input/output parallelogram); Is T > 30? (decision diamond); Yes → Print 'Hot' (parallelogram); No → Print 'Fine' (parallelogram); both arrows join (a merge is optional) and lead to Stop (terminator).

A correct answer has exactly one Start, an input step before the decision, a diamond with both exits labelled, the two outputs on the two branches, and both branches reaching Stop. 'Is T ≤ 30?' with the branches swapped is accepted. Not accepted: two exits from a rectangle, a decision placed before T is read, or a branch left with no route to Stop.

**11.** *Identifying flowchart types.* (i) Swimlane flowchart: the parallel lanes show multiple categories of activity side by side, one per department. (ii) Data flowchart: it shows the flow of information through the system, which is what reduces the gap between users and developers. (iii) Workflow chart: it describes how the business functions and is used for training employees on standard procedures.

A correct answer names swimlane, data, workflow in that order, each with its deciding feature (lanes; information flow; how the business operates, used for training). Calling (iii) a process flowchart is the common slip: a process chart describes how a product or process moves along a chain rather than the standard operating routine used for training.

**12.** *Arrow rules for decision and process symbols.* A decision poses a yes/no (true/false) question, and the answer determines the path the flow takes, so there must be one exit for each possible answer, and each must be labelled so the reader knows which exit belongs to which answer. A process box performs one action with no question asked, so there is only one thing that can happen next: a single exit.

With unlabelled exits a trace stops at the diamond: you can evaluate the question with the current values but cannot tell which arrow to follow, so different readers would follow different paths and the chart no longer defines one algorithm. A correct answer gives the two-answers reason, the one-action reason, and says the trace becomes ambiguous or impossible at the diamond.
