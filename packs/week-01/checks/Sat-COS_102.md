# Saturday — COS_102 nightly check

*This session was Week 1 applied: taking the week's method to concrete problems and working it through. You traced the student-grade flowchart from the lecture (five grades, average, pass mark 45, decision box "Is Grade > 44") on real numbers including boundary cases; you altered the decision box and worked out exactly who gets misclassified; you read a faulty pseudocode and identified both the fault and which class of error it is; you ran step 1 of the four steps on the inventory case study, separating genuine inputs, processes and outputs; you decomposed that case study into subproblems; you classified stated scenarios into the four computational problem types; and you diagnosed where in the four steps somebody else's failed attempt actually went wrong. Reading and tracing, not reciting.*

*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The lecture flowchart reads the five grades, computes Grade as their average, then asks "Is Grade > 44", printing PASS on the true branch and FAIL on the false branch. The grades entered are 40, 50, 45, 44, 46. What does it print?

a) FAIL, because the average works out at 44 and the pass mark is 45.
b) FAIL, because two of the five grades entered are themselves below the pass mark.
c) PASS, because three of the five grades are at or above the pass mark of 45.
d) PASS, because the average is 45 and 45 is greater than 44.

**2.** A student decides the decision box is sloppy and rewrites it as "Is Grade > 45", saying the pass mark is 45 so the test should say 45. Who is now handled differently?

a) A student averaging exactly 45 is printed FAIL, although 45 is the pass mark.
b) Every student is printed FAIL, because a strict inequality can never hold on an average.
c) A student averaging exactly 44 is now printed PASS instead of FAIL.
d) Nobody; since grades are whole numbers, "> 44" and "> 45" select exactly the same students.

**3.** Someone hands you this pseudocode for the same task:

```
READ G1, G2, G3, G4, G5
Grade = (G1 + G2 + G3 + G4) / 5
IF Grade > 44 THEN PRINT "PASS" ELSE PRINT "FAIL"
```

What is wrong, and what kind of error is it?

a) A syntax error: the compiler will reject the second line because G5 is read but never used.
b) A run time error: the program will fail at the point where the unused fifth grade is reached.
c) A logic error: it runs to the end but averages wrongly, so only testing exposes it.
d) Nothing worth fixing: dropping one of five grades shifts the average by too little to change PASS or FAIL.

**4.** Working step 1 (understand the problem) on the inventory case study, which line correctly separates input, process and output?

a) Input: the reorder quantity. Process: the sales history. Output: the current stock level of the product.
b) Input: current stock level and sales history. Process: comparing stock against a reorder point. Output: the reorder quantity.
c) Input: lost sales and carrying costs. Process: the manager's judgement about demand. Output: an improved profit margin.
d) Input: the algorithm. Process: the flowchart drawn from it. Output: the pseudocode that the program is written from.

**5.** Which of these is a decomposition of the inventory problem in the sense step 2 means?

a) Restock all the fast-moving products first, and deal with the slow-moving ones in a separate later phase of the work.
b) Write the whole thing as one long program first, then split that finished program across several smaller source files.
c) Hand each branch manager the same inventory problem and let them solve it independently for the branch they run.
d) Record current stock; compute each product's sales rate; set a reorder point; order when stock drops below it.

**6.** "Within a fixed storage budget, choose the stock mix that keeps total carrying cost as low as possible while never running out of the top ten sellers." Which computational problem type is this, and why?

a) Decision, because what is really being asked is whether the storage budget is sufficient.
b) Counting, because the number of product lines that fit inside the budget must be determined.
c) Optimization, because the best possible mix under stated limitations is what is accepted.
d) Search, because a stock mix having a particular stated property is what has to be found.

**7.** "At close of business, report whether any product at all has fallen below its reorder point." Which type is this?

a) Decision, because the solution is either YES or NO.
b) Search, because the products that have fallen below must be located and listed.
c) Counting, because the number below their reorder points has to be totalled up.
d) Optimization, because the best reorder point for each product is being determined.

**8.** Chidi opens his editor straight away and writes sixty lines from the case-study description. Only when it orders stock for products the store does not carry does he find that the sales file is keyed by supplier code, not product code. Which step failed?

a) Step 3, carrying out the solution plan — he compiled the program when he should have interpreted it.
b) Step 1, understanding the problem — he never established what the inputs actually were.
c) Step 4, evaluate and refactor — the working solution simply needs refactoring to accept supplier codes.
d) Step 2, creating the plan — his steps were ordered and unambiguous, but not complete.

**9. (explain why)** Trace the lecture flowchart, box by box, on the grades 30, 60, 50, 40, 40. Name each box in the order it executes, give the value the process box produces, and say what is printed and why.

**10. (explain why)** A classmate says the flowchart is wrong because FAIL is drawn on the left branch and PASS on the right, and "a flowchart always takes the left branch when the condition is true". Explain why the position of a branch on the page decides nothing, and say what actually determines which branch is taken.

**11. (explain why)** Your grade program passes both of the tests you ran: 90, 90, 90, 90, 90 gives PASS and 10, 10, 10, 10, 10 gives FAIL. Explain why neither test would have caught the `(G1+G2+G3+G4)/5` fault from question 3, and give one set of five grades that would catch it.

**12. (explain why)** You replace the flowchart's five separate input boxes and its one long addition with a loop that reads a grade and adds it to a running total five times. Explain why this counts as refactoring under the week's definition, and state the one thing you must check before you are entitled to call it a refactor rather than a rewrite.
