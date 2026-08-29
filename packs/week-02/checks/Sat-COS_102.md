# Saturday — COS_102 nightly check

*This session worked Week 2's method through on concrete material: taking a stated problem and classifying it (routine or non-routine, solvable or undecidable) by testing it rather than by its surface features; reading a scenario and naming which of the six strategies is actually being used; running the analogy procedure and the non-routine procedure in their correct order; tracing the BOB → BOOOB substitution puzzle one replacement at a time; and diagnosing attempts that went wrong — a strategy applied under conditions it does not fit, or a conclusion drawn before the search was finished. No definitions for their own sake; everything here is applied to a case.*

*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** "An exam has 50 questions. 4 marks are awarded per correct response and 2 marks deducted per wrong one. Bridget scored 165. How many correct responses did she give?" How should this be classified, and why?
a) Routine — it is settled entirely by arithmetic operations on the given numbers
b) Unsolvable — there are two unknowns and only one equation relating them
c) Non-routine — no standard method presents itself, so the solver must devise one
d) Undecidable — no algorithm returns a true/false answer for every such input

**2.** Starting from the string **BOB** and applying the rule "replace `OB` with `BOOB`" once, what do you get?
a) BOOB
b) BBOOB
c) BOOBB
d) BOOOB

**3.** XYZ Corporation wants $2 billion turnover this year. The board fixes the annual figure, splits it into quarterly targets, splits each quarter by sales region, and lets each region choose the tactic that suits its own market. Which strategy is this?
a) Means-ends analysis
b) Abstraction
c) Trial and error
d) Brainstorming

**4.** A doctor must destroy a tumour deep inside a patient with a high-intensity ray without burning the healthy tissue the ray must pass through. She recalls an army that captured a fortress by dividing into small groups that converged from many roads, and fires several weaker rays from different directions at once. Which strategy is this?
a) Means-ends analysis, because the single strong ray was broken up into several smaller rays
b) Abstraction, because the surrounding healthy tissue was filtered out of the model she used
c) Brainstorming, because a number of possible routes to the tumour were considered together
d) Analogy, because a previously understood system with the same principle was reused

**5.** Dan had $500 and now has $287; a student is asked how much he gave away. The student does not subtract, but says "about 200 — that feels right." Which diagnosis is correct?
a) He used trial and error where the number of possible answers was far too large
b) He used a heuristic on a routine problem, where a sub-optimal answer is not acceptable
c) He treated a non-routine problem as routine by reaching for a standard algorithm
d) He skipped the brainstorming stage, so no alternative candidate answers were raised

**6.** Two problems: (i) "Calculate the area of a 150 m × 2000 m parking space." (ii) "Give an approximate number of hairs on your head." How are they classified?
a) (i) routine, since a known formula applies; (ii) non-routine
b) (i) routine, (ii) unsolvable, since nobody can count them
c) (i) non-routine, since it is geometry and not plain arithmetic; (ii) non-routine
d) Both routine, since both end in a number produced by arithmetic

**7.** A lecturer asks the class to write one program that reads any other program plus its input and prints whether that program will finish or run forever. What is the correct response?
a) It is possible, but only for programs short enough to be read through in reasonable time
b) It is possible on a UTM, whose tape is unbounded, but not on any real modern computer
c) It is possible, but so slow in practice that the answer arrives long after it is useful
d) It is impossible — this is the halting problem, undecidable for every input

**8.** A design team decides to solve a new problem by analogy. In what order must they carry out the steps?
a) Find similarities → define the problem → generate ideas from the description
b) Generate ideas → define the problem → select an analogy that fits those ideas
c) Define the problem and generate analogies → find similarities and select one → generate ideas
d) Select an analogy → define the problem in its terms → check the underlying principles match

**9. (explain why)** A classmate tries `OB`→`BOOB` once on **BOB**, does not reach **BOOOB**, and concludes the puzzle does not come out. Give a sequence of replacements that does reach **BOOOB**, and explain why his conclusion was premature.

**10. (explain why)** Bridget's exam-marks problem is solved with nothing but addition, subtraction and multiplication, yet it is classified as non-routine while "what is 500 − 287?" is routine. Explain what the solver has to do in the first case that he does not have to do in the second.

**11. (explain why)** At XYZ Corp's idea session on the falling product quality, the manager explains why each suggestion won't work as soon as it is offered, and the session ends with three surviving ideas. Explain why this session did not produce what brainstorming is designed to produce.

**12. (explain why)** Apply means-ends analysis to XYZ Corp's declining product quality: state the overall goal, name two sub-problems it breaks into, and explain why attacking the sub-problems separately is legitimate here rather than a way of dodging the real problem.
