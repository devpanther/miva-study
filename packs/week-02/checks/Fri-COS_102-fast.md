# Friday — COS_102 fast-hour check

*This session is COS_102 applied, working the week's method through on concrete cases rather than restating it.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** A substitution puzzle allows two replacements: OB → BOOB and BOB → O. Starting from BOB, which sequence of words reaches BOOOB?
A. BOB, BBOOB, BBOBOOB, BOOOB
B. BOB, BBOOB, BOOOB
C. BOB, O, BOOOB
D. BOB, BOOBB, BOOOB

**10.** An exam has 50 questions and all of them are answered. Each correct answer scores 4 marks and each wrong answer loses 2 marks. A student scores 170. How many answers were correct?
A. 42
B. 35
C. 45
D. 5

**11.** Name the problem-solving strategy in each case, in order. (a) A commuter drives a different route each week for four weeks and keeps the fastest. (b) A subway map shows only the stations and the lines joining them, with no distances or streets. (c) A shopper picks the cereal with the most familiar box without reading any label. (d) Ten staff spend an hour calling out every idea for a new product, writing all of them down and judging none.
A. Trial and error, abstraction, brainstorming, heuristics
B. Trial and error, abstraction, heuristics, brainstorming
C. Heuristics, abstraction, trial and error, brainstorming
D. Trial and error, means-ends analysis, heuristics, brainstorming

**12.** A student tries four sequences of replacements on a substitution puzzle, fails to reach the target word, and concludes that the puzzle does not come out. Deciding whether substitution puzzles come out is known to be unsolvable. Which statement is correct?
A. The conclusion is sound, because four failed attempts show that no derivation exists
B. The conclusion is sound, because unsolvable means no such puzzle can ever be settled
C. The conclusion is premature, and unsolvable means every such puzzle has no derivation
D. The conclusion is premature, and unsolvable means no single method settles every puzzle

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

**9. A** — *Deriving a word in a substitution puzzle.* BOB ends in OB, so OB → BOOB gives B + BOOB = BBOOB. BBOOB again ends in OB, so the same rule gives BBO + BOOB = BBOBOOB. BBOBOOB holds BOB in its second, third and fourth letters, so BOB → O gives B + O + OOB = BOOOB.

BBOOB contains no BOB, and its only legal move lengthens it, so it cannot reach BOOOB in one step. Applying BOB → O first leaves the single letter O, to which neither rule applies. BOOBB is not produced by either rule from BOB.

**10. C** — *Solving a marks-and-penalty problem.* Let c be the number correct, so 50 − c are wrong. Then 4c − 2(50 − c) = 170, which is 6c − 100 = 170, so 6c = 270 and c = 45. Check: 45 correct score 180 and 5 wrong lose 10, giving 170.

42 ignores the penalty and just divides 170 by 4; 35 adds the penalty instead of subtracting it, solving 4c + 2(50 − c) = 170; 5 is the number of wrong answers, not the number correct.

**11. B** — *Distinguishing trial and error, abstraction, heuristics and brainstorming.* (a) is trial and error: candidates are tried one after another and the losers discarded. (b) is abstraction: every attribute not needed for finding a route has been thrown away, leaving a model. (c) is a heuristic: one unchecked rule of thumb, speed in place of rationality. (d) is brainstorming: many ideas produced quickly by a group with judgement deferred.

Swapping (c) and (d) misses that nothing in (d) is a shortcut and nothing in (c) is a group. Calling (a) a heuristic ignores the four trials. Calling (b) means-ends analysis is wrong because nothing is split into sub-goals.

**12. D** — *Premature conclusion versus genuine unsolvability.* Four failed attempts rule out four paths and nothing more: other orders and other positions for the replacements are untried, and a derivation may need far more than four steps. So the conclusion is premature.

Unsolvable is a claim about methods, not about puzzles: no single systematic method answers the question for every puzzle. Individual puzzles are still settled all the time, by exhibiting a derivation or by an argument that none exists, which is why the other three readings are wrong.
