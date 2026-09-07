# Friday — COS_102 fast-hour check

*This session is COS_102 applied, working the week's method through on concrete cases rather than restating it.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** "Give an approximate number of hairs on your head." There is no standard method, but sampling a small patch and scaling up gives an estimate. How is this problem classified?
A. Undecidable
B. Routine
C. Non-routine
D. Unsolvable

**2.** A corporation wants a turnover of $2 billion this year. Management fixes that end in advance, then splits it into four quarterly targets and divides each quarter's target among its regions, each region choosing its own approach. Which strategy is in use?
A. Abstraction
B. Analogy
C. Means-ends analysis
D. Trial and error

**3.** A doctor must destroy a deep tumour with rays strong enough to harm healthy tissue on the way in. Recalling a general who split his army into small groups that converged on a fortress from all sides, the doctor sends weak rays from many directions that meet at the tumour. Which strategy is this?
A. Means-ends analysis
B. Abstraction
C. Heuristics
D. Analogy

**4.** A substitution puzzle uses the rules OB → BOOB and BOB → O. The rule OB → BOOB is applied to the word BBOOB. What is the result?
A. BBOBOOB
B. BBOOBOOB
C. BOOBOOB
D. BBBOOB

**5.** The tax owed on an invoice has an exact formula. An accountant instead uses the rule of thumb "about a fifth of the amount" and files that figure. What went wrong?
A. A heuristic was used where an exact routine method exists
B. Trial and error was used with too many candidates
C. Abstraction deleted an attribute the formula needed
D. Brainstorming was done without a group

**6.** A team meets to find ways to cut delivery times. Each idea is judged the moment it is spoken, and most are shot down. After an hour the list holds four ideas. Which brainstorming rule was broken?
A. Ideas of others were fine-tuned
B. Criticism of ideas was not deferred
C. Too many ideas were gathered
D. The problem was not defined first

**7.** Three actions are taken when solving a problem by analogy. P: list the ways the two situations match and pick one analogy. Q: use the description and the matches to produce ideas. R: state the problem and think of similar situations. Which order is correct?
A. P, R, Q
B. R, Q, P
C. Q, P, R
D. R, P, Q

**8.** A manager asks for a program H that reads any program P together with an input x and prints HALTS if P would eventually stop on x and LOOPS if it would run forever, correctly for every P and x. What can be delivered?
A. H can be written by running P and waiting
B. No such H exists; the request is undecidable
C. H can be written for every P but not for every x
D. H exists but needs a universal Turing machine to run

**9. (show your working)** A substitution puzzle allows two replacements: OB → BOOB and BOB → O. Starting from BOB, obtain BOOOB. Write down the word after each replacement and name the rule you applied. Show your working.

**10. (show your working)** An exam has 50 questions, all answered. Each correct answer scores 4 marks and each wrong answer loses 2 marks. A student scores 170. How many answers were correct? Then say whether the problem is routine or non-routine and why. Show your working.

**11. (show your working)** Name the strategy used in each case and give the test that decides it. (a) A commuter drives a different route each week for four weeks and keeps the fastest. (b) A subway map shows only the stations and the lines joining them, with no distances or streets. (c) A shopper picks the cereal with the most familiar box without reading any label. (d) Ten staff spend an hour calling out every idea for a new product, writing all of them down and judging none.

**12. (show your working)** A student tries four replacements on a substitution puzzle, does not reach the target word, and concludes that the puzzle does not come out. Explain why that conclusion is premature, and explain what it means to say that deciding whether substitution puzzles come out is unsolvable.

---

## Answers

**1. C** — *Non-routine versus unsolvable.* No standard method exists, so a novel method has to be developed, which is the mark of a non-routine problem. A method can still be invented and gives an answer, so the problem is far from unsolvable.

Routine would need a known algorithm to apply; unsolvable and undecidable claim that no systematic method can exist for every input, which is not the case for an estimate that sampling can produce.

**2. C** — *Means-ends analysis versus abstraction.* The intended solution is decided beforehand and the problem is broken into smaller problems, each solved by the approach that suits it best. Nothing is thrown away and nothing is imported from elsewhere: that is means-ends analysis.

Abstraction would delete unneeded attributes and keep a model, but here every part is kept and solved; analogy would import a solution from a different, understood system; trial and error would test candidates one after another.

**3. D** — *Analogy versus means-ends analysis.* The solution is imported from a different, already understood system (the army and the fortress) because the underlying principle, converging weak forces to make a strong one, is the same. That is analogy.

Means-ends analysis is tempting because the rays are divided, but the division was borrowed from the army story rather than built from this problem's own sub-problems; abstraction would delete attributes, not import a solution; a heuristic would be a quick rule of thumb with no reasoning about principles.

**4. A** — *Applying one substitution rule.* BBOOB contains OB once, as its last two letters. Replacing that OB by BOOB gives BBO followed by BOOB, which is BBOBOOB.

BBOOBOOB inserts BOOB after OB instead of replacing it; BOOBOOB replaces the first two letters BB, which do not match the rule; BBBOOB inserts an extra B and leaves the OB in place.

**5. A** — *Diagnosing a misapplied heuristic.* A heuristic is only appropriate where a sub-optimal answer is acceptable. Tax owed is a routine problem with a known formula and must be exact, so the rule of thumb was the wrong strategy.

No candidates were tried in turn, so trial and error is not involved; nothing was filtered out of a model; no group session took place.

**6. B** — *Rules of brainstorming.* Brainstorming depends on gathering as many ideas as possible and on avoiding criticism while ideas are being produced. Judging each idea as it is spoken breaks the second rule, and the small list shows the first rule failing as a consequence.

Fine-tuning other people's ideas is allowed and encouraged; four ideas is too few, not too many; defining the problem is the first step of analogy, not a brainstorming rule.

**7. D** — *Ordering the analogy steps.* The analogy procedure is: define the problem and generate analogies (R), find similarities and select an analogy (P), then use description and similarities to generate ideas (Q). So R, P, Q.

P, R, Q compares situations before any problem is stated; R, Q, P produces ideas before an analogy has been chosen; Q, P, R starts with ideas and ends with the definition, the reverse of the procedure.

**8. B** — *The halting problem as an undecidable request.* This is the halting problem, an undecidable problem: no algorithm gives a correct true or false answer for every program and input. A program that decides single cases can exist, but the request asks for one method that works for all, and that cannot be built.

Running P and waiting never returns LOOPS, because you cannot know the wait is endless; restricting x does not remove the impossibility; a universal Turing machine can run anything with an instruction table, and H has none.

**9.** *Deriving a word in a substitution puzzle.* Start: BOB. Apply OB → BOOB to the OB at the end: B + BOOB = BBOOB. Apply OB → BOOB again to the OB at the end: BBO + BOOB = BBOBOOB. Now BBOBOOB contains BOB as its second, third and fourth letters; apply BOB → O: B + O + OOB = BOOOB.

A correct answer shows the three words BBOOB, BBOBOOB, BOOOB in that order with the rule used at each step. Applying BOB → O first gives the single letter O, from which nothing can be made; an answer that stops there and says the puzzle does not come out is wrong.

**10.** *Solving an exam-marks problem and classifying it.* Let c be the number correct, so 50 − c are wrong. Score: 4c − 2(50 − c) = 170, so 4c − 100 + 2c = 170, 6c = 270, c = 45. Check: 45 × 4 = 180, 5 wrong lose 10, 180 − 10 = 170.

Final answer: 45 correct (5 wrong). The problem is non-routine in the sense of the week: it gives no standard method to apply, only arithmetic facts, so a method (setting up the equation, or guess and adjust) had to be devised first. A correct answer reaches 45 with a check, and classifies it as non-routine because no standard method is supplied, not because it lacks arithmetic. Routine is accepted only if the answer argues that setting up a linear equation is itself a standard algorithm.

**11.** *Distinguishing trial and error, abstraction, heuristics and brainstorming.* (a) Trial and error: candidates are tried one after another and the failures discarded until one is accepted; the test is successive trials with a few candidates. (b) Abstraction: everything not needed for finding a route is deleted, leaving a model; the test is that attributes were thrown away. (c) Heuristics: one quick rule of thumb is accepted without checking, trading rationality for speed; the test is a single unchecked shortcut. (d) Brainstorming: a group produces many ideas spontaneously with criticism deferred; the test is quantity plus no judging.

A correct answer names all four correctly and gives a distinguishing test for each. Calling (c) trial and error is wrong because nothing was tried and rejected; calling (b) means-ends analysis is wrong because nothing was split into sub-problems.

**12.** *Premature conclusion versus genuine unsolvability.* Four failed attempts show only that those four paths do not work; other orders and other positions of the replacements remain untried, and a puzzle may need many more steps than four. Nothing has been proved about the puzzle, so the conclusion is premature.

Saying the deciding problem is unsolvable means something quite different: no single systematic method exists that, for every substitution puzzle, correctly answers whether it comes out. Individual puzzles can still be settled, by finding a derivation or by an argument that none exists. A correct answer makes both points: a few failures prove nothing about one puzzle, and unsolvable is a claim about the absence of a universal method, not about any particular puzzle having no answer.
