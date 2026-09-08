# Friday — COS_102 fast-hour check

*Week 5 flowchart concepts treated as practice.*
*12 questions, straight after the hour. Score out of 12.*

**1.** A chart runs: Start; P = 1; C = 0; Enter n; P = P × n; C = C + 1; decision 'Is C < 3?'; Yes → back to Enter n; No → Print P; Stop. The user types 2, 5, 3, 4 in that order. What is printed?
A. 10
B. 30
C. 120
D. 3

**2.** A chart runs: Start; Read A and B; decision 'Is A > B?'; Yes → T = A; A = B; B = T; then on to the join; No → straight to the join; Print A, B; Stop. Inputs A = 9, B = 4. What is printed?
A. 9 4
B. 9 9
C. 4 4
D. 4 9

**3.** A chart runs: Start; Count = 0; Sum = 0; Enter n; Sum = Sum + n; Count = Count + 1; decision 'Is Count < 3?'; Yes → back to Sum = 0 (not to Enter n); No → Print Sum; Stop. Inputs 2, 4, 6. What is printed?
A. 6
B. 12
C. 0
D. 2

**4.** A chart runs: Start; Count = 0; Enter n; Print n; Count = Count + 1; decision 'Is Count ≤ 5?'; Yes → back to Enter n; No → Stop. How many numbers does the chart read before it stops?
A. 5
B. 4
C. 6
D. 7

**5.** Which arrangement reads numbers until −1 is entered and then prints the sum of the numbers before the −1?
A. Enter n → Sum = Sum + n → Is n = −1? Yes → Print Sum; No → back to Enter n
B. Enter n → Is n = −1? Yes → back to Enter n; No → Sum = Sum + n → Print Sum
C. Enter n → Is n = −1? No → Print Sum; Yes → Sum = Sum + n → back to Enter n
D. Enter n → Is n = −1? Yes → Print Sum; No → Sum = Sum + n → back to Enter n

**6.** A fault chart: Start; 'Lamp plugged in?' No → Plug in lamp → Stop; Yes → 'Bulb burned out?' Yes → Replace bulb → Stop; No → Repair lamp → Stop. A lamp is plugged in and its bulb is fine. Which action is reached, and how many decisions are evaluated?
A. Repair lamp; 2 decisions
B. Replace bulb; 2 decisions
C. Repair lamp; 1 decision
D. Plug in lamp; 1 decision

**7.** A chart runs: Start; Read x; decision 'Is x > 0?'; Yes → Print x → Stop; No → Print 'negative', and no arrow leaves that box. Which change makes the chart valid?
A. Add a second Start above 'Print negative'
B. Add a flow line from 'Print negative' to Stop
C. Replace 'Print negative' with a merge symbol
D. Swap the Yes and No labels on the decision

**8.** When you hand-trace a flowchart, where do you begin, and what decides which exit you take at a diamond?
A. At the top-left symbol; the label on the next box
B. At the first decision; the exit drawn on the right
C. At Start; the answer to the diamond's question for the current values
D. At Start; the exit that was drawn first

**9.** A chart runs: Start; Read A, B, C; Max = A; decision 'Is B > Max?'; Yes to Max = B; join; decision 'Is C > Max?'; Yes to Max = C; join; Print Max; Stop. The inputs are A = 7, B = 12, C = 9. Give the value of Max after each decision, the printed value, and how many decisions are evaluated.
A. Max goes 12 then 12; prints 12; 2 decisions evaluated
B. Max goes 12 then 9; prints 9; 2 decisions evaluated
C. Max goes 12 then 12; prints 12; 1 decision evaluated
D. Max goes 12 then 12; prints 12; 3 decisions evaluated

**10.** A chart runs: Start; S = 0; K = 0; Enter n; decision 'Is n even?'; Yes to S = S + n; join; K = K + 1; decision 'Is K < 4?'; Yes back to Enter n; No to Print S; Stop. The inputs are 3, 8, 5, 6. Give (S, K) after each pass and the printed value.
A. (0, 0), (8, 1), (8, 1), (14, 2); prints 14
B. (3, 1), (11, 2), (16, 3), (22, 4); prints 22
C. (0, 1), (8, 2), (8, 3), (8, 4); prints 8
D. (0, 1), (8, 2), (8, 3), (14, 4); prints 14

**11.** A chart runs: Start; Read N; F = 1; decision 'Is N > 1?'; Yes to F = F × N; then N = N − 1; back to the decision; No to Print F; Stop. How many flow lines does the chart contain, and for N = 4 how many times is the decision evaluated and what is printed?
A. 7 flow lines; 4 evaluations; prints 24
B. 8 flow lines; 4 evaluations; prints 24
C. 8 flow lines; 3 evaluations; prints 24
D. 8 flow lines; 4 evaluations; prints 12

**12.** Both selection and repetition are drawn with a diamond. What test tells them apart on a chart, and what must be true of the symbols inside a repetition for the loop to end?
A. Two labelled exits mean repetition and one exit means selection; the test must be false on the first pass
B. A diamond drawn below the loop body means repetition; the loop must contain a counter starting at zero
C. An exit running back to an already executed symbol means repetition; a symbol inside must change a value the test depends on
D. An exit running back to an already executed symbol means repetition; the test must use < rather than =

---

## Answers

**1. B** — *Tracing a counted product loop.* Pass 1: n = 2, P = 2, C = 1. Pass 2: n = 5, P = 10, C = 2. Pass 3: n = 3, P = 30, C = 3, and 3 < 3 is false, so the loop exits and 30 is printed. The fourth number is never read.

120 multiplies in all four typed values; 10 stops after two, testing before the third product is formed; 3 prints C instead of P.

**2. D** — *Tracing a swap through a selection.* 9 > 4 is true, so the Yes branch runs: T = 9, A = 4, B = 9. The join leads to the print: 4 9.

9 4 follows the No branch, as if the test were false; 4 4 does A = B and then B = A with no temporary, losing the 9; 9 9 does B = A first and then A = B, losing the 4.

**3. A** — *Back arrow landing on an initialisation.* Count still grows (0, 1, 2, 3), so the loop ends after three numbers. But every Yes exit lands on Sum = 0, wiping the total before the next number is added, so Sum holds only the latest value: 2, then 4, then 6. Printed: 6.

12 assumes the back arrow lands on 'Enter n', the correct chart; 0 assumes the reset happens after the last addition as well; 2 assumes the first value is kept and the rest ignored.

**4. C** — *Off-by-one in a loop condition.* After the k-th number Count = k. The test Count ≤ 5 is true for k = 1, 2, 3, 4, 5, so after the fifth number the chart goes back and reads a sixth; only then is Count = 6 and the test fails. 6 numbers are read. The intended condition was Count < 5.

5 is what the designer meant; 4 is the off-by-one in the other direction; 7 counts the failing test as one more read.

**5. D** — *Placing the sentinel test in a loop.* The sentinel must be tested immediately after it is read and before it is added, with the Yes exit leaving the loop and the No exit adding n and reading again. For inputs 4, 6, −1 this prints 10.

The first arrangement adds the −1 before testing and prints 9; the second exits after the first ordinary number and prints 4; the third has the exits swapped, printing 0 as soon as a normal number arrives.

**6. A** — *Tracing chained decisions.* 'Lamp plugged in?' is Yes, so the flow moves to 'Bulb burned out?', which is No, so the flow reaches Repair lamp. Two questions were answered on the way.

Replace bulb would need the second answer to be Yes; '1 decision' forgets that the first diamond had to be passed to reach the second; Plug in lamp is the No exit of the first diamond, which was not taken.

**7. B** — *Every path must reach Stop.* Every symbol except Stop must have an arrow leaving it, and every path must be able to reach a Stop. 'Print negative' is a dead end, so an arrow from it to Stop (the existing one or a new one) fixes the chart.

A second Start breaks the one-entry rule instead; a merge needs several paths in and one out, and here there is nothing to merge; swapping the labels changes which numbers are called negative but leaves the dead end in place.

**8. C** — *How a trace follows a chart.* A trace begins at the single Start terminator and follows the arrows. At a diamond you evaluate the question using the values the variables hold at that moment, and take the exit whose label matches the answer.

Position on the page, which exit was drawn first, and the label on a later box are all drawing details with no effect on the logic.

**9. A** — *Tracing a chart with two selections.* Max starts at A = 7. The first decision, 12 > 7, is Yes, so Max = 12. The second, 9 > 12, is No, so Max stays 12 and 12 is printed. Both decisions are evaluated whatever their answers, so the count is 2.

Printing 9 takes the last value read rather than the largest; counting 1 decision assumes a Yes answer skips the second test, but the chart reaches it either way; counting 3 invents a test the chart does not contain.

**10. D** — *Tracing a selection inside a repetition.* K = K + 1 sits after the join, so K rises on every pass, odd or even. Pass 1: n = 3 is odd, S stays 0, K = 1. Pass 2: n = 8 is even, S = 8, K = 2. Pass 3: n = 5 is odd, S = 8, K = 3. Pass 4: n = 6 is even, S = 14, K = 4; 4 < 4 is No, so 14 is printed.

The version where K rises only on the even passes puts the increment inside the Yes branch, which the chart does not do; (3, 1), (11, 2), (16, 3), (22, 4) adds every number and ignores the decision; ending at (8, 4) treats 6 as odd and never adds it.

**11. B** — *Counting flow lines and decision evaluations.* The flow lines are Start to Read N, Read N to F = 1, F = 1 to the decision, Yes to F = F × N, on to N = N − 1, back to the decision, No to Print F, and Print F to Stop: 8 in all. For N = 4 the decision answers Yes three times, with F going 4, 12, 24 as N falls 3, 2, 1, and No once, so it is evaluated 4 times and 24 is printed.

7 lines misses the back arrow that makes the loop; 3 evaluations forgets the final failing test; 12 stops one multiplication early.

**12. C** — *Selection versus repetition on a chart.* Look at where the exits go. If both go forward and later rejoin, one of two alternatives runs once and the diamond is a selection. If one exit runs back to a symbol already executed, everything between the landing point and the diamond runs again, so it is a repetition. For the loop to end, some symbol inside it must change a value the diamond's question depends on, so the answer eventually flips and the forward exit is taken.

Both kinds of diamond have two labelled exits, so counting exits decides nothing; the diamond may be drawn above or below the body; the comparison operator and a counter are common but neither is required.
