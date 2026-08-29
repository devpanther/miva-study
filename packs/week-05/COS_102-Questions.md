# COS_102 — Week 5 retention set

*Flowchart Concepts · sat seven days after the lectures · notes closed*

## Multiple choice

**1.** A flowchart contains a symbol drawn as a rectangle whose two vertical sides each carry a second parallel line. What does it mean?

a) The step is repeated until a condition is met
b) The step writes to a stored data file
c) The step invokes a complex or well-known operation defined elsewhere
d) The step prepares variables before the real work begins

**2.** Which symbol is used to connect independent elements of a flowchart across multiple pages?

a) The link connector
b) The on-page connector
c) The declaration symbol
d) The flowline

**3.** A fragment reads: *Enter n → Sum = Sum + n → Count = Count + 1 → diamond "Is Count < 5?" whose Yes arrow runs back up to "Enter n" and whose No arrow runs down to "Print Sum".* Which construct does this fragment implement?

a) Sequence, because the boxes are stacked vertically
b) Selection, because a diamond chooses between two paths
c) A predefined process, because several steps are grouped
d) Repetition, because one exit of the decision returns to an earlier symbol

**4.** Which type of flowchart is described as reducing the communication gap between the users and the developers of a system?

a) Process flowchart
b) Data flowchart
c) Swimlane flowchart
d) Workflow flowchart

**5.** A student draws a rectangle labelled "Read mark" with one arrow entering and two arrows leaving, one labelled "Pass" and one labelled "Fail". Why is this flowchart invalid?

a) A rectangle may not be labelled with the word "Read"
b) Flow lines are not allowed to be labelled
c) Only a decision symbol may have two outgoing arrows; a process box has exactly one
d) The two arrows should have been joined by a summing junction first

**6.** In the deck's lamp chart, the diamond "Lamp plugged in?" sends its No arrow to "Plug in lamp" and its Yes arrow onward to the diamond "Bulb burned out?". What determines which of the two arrows is followed at run time?

a) The answer to the question written inside the diamond, evaluated with the current data
b) The left-to-right drawing convention, which always prefers the rightmost arrow
c) The order in which the two arrows were drawn on the page
d) The label on the symbol the arrow points at

**7.** Which pair of statements correctly matches the merge symbol and the summing junction?

a) Merge adds inputs from several paths; summing junction joins several paths into one
b) Merge combines several paths into a single path; summing junction shows the addition of inputs from various paths
c) Both combine paths, but merge works only across pages
d) Both add values, but the summing junction is used only inside loops

**8.** Which of these is listed as a *disadvantage* of flowcharts?

a) They allow other programmers to follow the logic of a program
b) They can be used to check whether a program's logic works
c) They provide clarity to program logic
d) Their logic is hardly the most efficient and can make a program unnecessarily longer

**9.** A chart runs: *Start → Sum = 0 → Enter n → Sum = Sum + n → diamond "Is Count < 5?" Yes goes back to "Enter n", No goes to "Print Sum" → Stop.* Nothing anywhere assigns to Count. What happens when this chart is executed?

a) It loops forever, because the value tested by the decision never changes
b) It stops after five numbers, because the decision counts the passes itself
c) It stops immediately, because Count has no value
d) It prints the first number entered and stops

**10.** Which symbol is drawn as a parallelogram, and what does it show?

a) The preparation symbol; it shows initialisation before the real work
b) The document symbol; it shows a document's input or output
c) The input/output or data symbol; it shows data used at the input or the output
d) The decision symbol; it shows a question with a yes/no answer

**11.** Which of the following is one of the stated principles for drawing a flowchart?

a) Every decision must be followed immediately by a merge symbol
b) Comments must be placed only at the top of the page
c) Loops should always be drawn from left to right
d) Instructions for comparisons should be made as simple as possible

**12.** A chart shows a diamond "Enough toast?" whose No arrow leads to a small pentagon labelled "2", and on the next page a matching pentagon labelled "2" leads into "Press down lever". What is the effect of the two pentagons on the algorithm?

a) They delay the flow until the second page is reached
b) None at all on the logic — they only carry the flow line to another page
c) They convert the decision into a loop
d) They store the value of "Enough toast?" for use on page two

## Short answer

**S1.** Name four flowchart symbols other than the terminator, and for each give its shape, its purpose, and how many flow arrows may enter and leave it.

**S2.** A flowchart has a decision "Is Count < 5?" whose Yes arrow goes back not to "Enter n" but all the way up to "Sum = 0". Trace what the chart prints when the numbers 2, 4, 6, 8, 10 are entered, and explain the mechanism that produces that result.

**S3.** Distinguish selection from repetition as they appear on a flowchart. Give the test you would apply to a chart to tell them apart, and say why both are drawn with the same symbol.

## Answers

1. **c** — the double-sided rectangle is the predefined process (declaration) symbol, used for a complex or well-known operation.
2. **a** — the link/off-page connector spans pages; the on-page connector stays on one page.
3. **d** — a decision exit that returns to an earlier symbol is a backward flow line, which is repetition.
4. **b** — the data flowchart is stated to reduce the communication gap between users and developers.
5. **c** — branching is the exclusive job of the decision symbol; a process box has exactly one exit.
6. **a** — the flow follows whichever branch matches the answer to the question in the diamond, for the current data.
7. **b** — merge (triangle) combines paths; summing junction (circled ×) adds inputs arriving from various paths.
8. **d** — efficiency is not claimed for flowcharts; the deck lists inefficiency and length as a drawback, and a, b and c are its advantages.
9. **a** — the decision tests a variable no step ever updates, so the condition can never turn false and the loop never exits.
10. **c** — the parallelogram is the input/output or data symbol; the document symbol is the wavy-bottomed rectangle.
11. **d** — one of the four stated principles, alongside having a start and a stop, avoiding crossing flow lines, and keeping the chart neat and clear.
12. **b** — a connector is pure navigation: it moves the eye and the flow line, and changes nothing about the sequence of operations.

**S1.** Any four of: process — plain rectangle, an action/process/function, 1 in and 1 out; decision — diamond, a yes/no or true/false question that determines the path, 1 in and exactly 2 labelled out; input/output (data) — parallelogram, data used at the input or output, 1 in and 1 out; preparation — hexagon, separates steps preparing for work from steps that do the work, 1 in and 1 out; merge — downward triangle, combines several paths into one, several in and 1 out; summing junction — circled ×, adds inputs from various paths, several in and 1 out; database — cylinder, where data is stored; document — wavy-bottomed rectangle, a document's input or output; on-page connector — small lettered circle, joins elements on one page; link connector — pentagon, joins elements across pages; comment — bracket on a dashed line, carries no flow arrows at all.

**S2.** It never terminates, and nothing is printed. Sum is re-set to 0 at the top of every pass, so it can only ever hold the most recent number; more importantly Count is never assigned inside the loop (and if it were, the back arrow would jump over its initialisation), so the tested condition never changes and the No branch to "Print Sum" is never taken. The mechanism to state: the landing point of the back arrow decides which steps are repeated, and any initialisation caught inside the loop is undone on every pass.

**S3.** Both use the diamond, because both are decided by the same yes/no test — the symbol represents the *question*, not what is done with the answer. The discriminating test is the direction of the exit arrows: if both exits move forward and later rejoin, the diamond is a selection (one of two alternative blocks is executed once); if one exit runs backward to a symbol already executed, the diamond is a repetition (a block is executed again, and the test decides when to stop).
