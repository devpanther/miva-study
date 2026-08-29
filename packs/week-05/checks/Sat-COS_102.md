# Saturday — COS_102 nightly check

*Week 5 flowchart concepts treated as practice. Every chart is described in words and must be traced by hand: the sum-of-five-numbers loop from the lecture, a compare-two-numbers selection, and a fault-finding lamp chart. The session asks what a described chart prints for given inputs, which construct a fragment implements, how to lay out the opening steps of a chart for a stated problem, and how to diagnose a chart that loops forever, resets an accumulator, reads one item too many, or leaves a path with no route to Stop. It does not ask for symbol definitions in the abstract.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Trace this chart. Start; Sum = 0; Count = 0; then at point A, Enter n; Sum = Sum + n; Count = Count + 1; then a decision 'Is Count < 5?' whose Yes exit runs back to A and whose No exit runs to Print Sum; Stop. The numbers waiting to be entered are, in order, 3, 1, 4, 1, 5, 9. What is printed?
a) 9
b) 14
c) 23
d) Nothing - the chart never reaches Print Sum

**2.** Trace this chart. Start; Total = 0; K = 0; then at point A, Enter x; Total = Total + x; then a decision 'Is K < 3?' whose Yes exit runs back to A and whose No exit runs to K = K + 1, then Print Total, then Stop. What happens when the chart is executed?
a) It reads three numbers and prints their total.
b) It reads four numbers and prints their total, one number too many.
c) It stops at once without reading any number, because K is still 0.
d) It reads numbers forever, because K is only changed on the branch that is never taken.

**3.** Trace this chart. Start; Read A and B; a decision 'Is A > B?' whose Yes exit leads to Print A and whose No exit leads to Print B; both then meet and go to Stop. The values entered are A = 7 and B = 7. Which path is taken, and what is printed?
a) The No path is taken, and B is printed - the value 7.
b) The Yes path is taken, and A is printed - the value 7.
c) Neither path is taken; the chart cannot resolve A equal to B and halts at the diamond.
d) Both paths are taken, so 7 is printed twice.

**4.** Take this chart. Start; Count = 0; Sum = 0; then at point A, Enter n; Sum = Sum + n; Count = Count + 1; decision 'Is Count < 5?' Yes exit back to A, No exit to Print Sum; Stop. Now the back arrow is redrawn so that it lands on the box Sum = 0 instead of on A. The numbers 2, 4, 6, 8, 10 are entered. What is printed?
a) 30 - the same as before, since the numbers entered have not changed.
b) Nothing; the chart now loops forever and never reaches Print Sum.
c) 10, the last number entered.
d) 0, because Sum is cleared immediately before it is printed.

**5.** You must lay out a flowchart that reads ten numbers, which may be positive or negative, and prints the largest of them. Which opening is correct?
a) Set Max = 0 first, then read each of the ten numbers in turn and replace Max whenever the number read is larger.
b) Read the first number into Max, then read the remaining nine and replace Max whenever a larger number arrives.
c) Read all ten numbers first, then set Max to the last number read and print it.
d) Set Max = 0 and Count = 10, decrease Count by one on every pass, and print Max once Count reaches 0.

**6.** A student hands in this chart. Start; Read mark; a decision 'Is mark 50 or more?' whose Yes exit leads to Print 'Pass' and then to Stop. The No exit is drawn leaving the diamond but its flow line ends in empty space. What exactly is wrong with the chart?
a) Nothing is wrong; a branch on which there is nothing to do may be left blank.
b) The diamond should have been a rectangle, since only one action follows it.
c) One path can never reach a Stop symbol, so for a mark below 50 the chart specifies no behaviour at all.
d) The chart is invalid because the box Print 'Pass' has two flow lines entering it.

**7.** Trace this fault-finding chart. Start 'Lamp does not work'; decision 'Lamp plugged in?' whose No exit leads to Plug in lamp and then Stop, and whose Yes exit leads to the decision 'Bulb burned out?'; that second decision's Yes exit leads to Replace bulb and then Stop, and its No exit leads to Repair lamp and then Stop. The lamp is plugged in and its bulb is sound. Which action boxes are executed?
a) Plug in lamp, and then Repair lamp.
b) Replace bulb, and nothing else.
c) Plug in lamp, and nothing else.
d) Repair lamp, and nothing else.

**8.** In the chart Start; Sum = 0; Count = 0; A: Enter n; Sum = Sum + n; Count = Count + 1; decision 'Is Count < 5?' Yes back to A, No to Print Sum; Stop - the test alone is changed to 'Is Count less than or equal to 5?'. Everything else is unchanged. What is the effect?
a) Six numbers are read instead of five.
b) Four numbers are read instead of five.
c) Five numbers are still read, because the two tests agree at the boundary value.
d) The chart loops forever, since Count can never exceed 5.

**9. (explain why)** Explain why a loop whose control variable is updated only on the branch that is not taken runs forever, in terms of what the decision symbol re-evaluates on each pass.

**10. (explain why)** Explain why a largest-number chart that begins Max = 0 prints the wrong answer when every number read is negative, and why seeding Max with the first number read repairs it.

**11. (explain why)** Explain why the point at which a loop's back arrow lands - and not the contents of the boxes - decides whether a running total survives from one pass to the next.

**12. (explain why)** Explain why hand-tracing a chart with a table of variable values catches an off-by-one that simply reading the chart does not.
