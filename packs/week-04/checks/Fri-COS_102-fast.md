# Friday, second hour — COS_102 check

*Week 4 Algorithm Concepts taken as practice: tracing the lecture's own algorithms by hand and writing them out.*

*You trace the sum-and-count flowchart to a printed value and a decision count. You work the maximum-of-a-set problem through the five development steps. You write the refined pseudocode using sequence, selection and repetition correctly.*

*You then apply the Big O loop rules to concrete code fragments: a decrementing loop, a halving loop, nested loops.*

*Then you diagnose faulty or wasteful solutions: a maximum initialised to zero, selection used where repetition was needed, and an O(n squared) pairwise comparison where one pass would do.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Trace the lecture's flowchart: sum = 0; count = 0; then repeat { enter n; sum = sum + n; count = count + 1; is count < 5? if YES go back to 'enter n' }; print sum. The user enters 3, 1, 4, 1, 5. What is printed, and how many times is the decision box evaluated?
a) 14 is printed; the decision is evaluated 5 times.
b) 14 is printed; the decision is evaluated 4 times.
c) 9 is printed; the decision is evaluated 5 times.
d) 15 is printed; the decision is evaluated 6 times.

**2.** A student implements 'find the maximum' by setting max = 0 before the loop and then replacing max whenever an input exceeds it. On which input does this give a wrong answer?
a) A list of only negative numbers.
b) A list in which the maximum value appears more than once.
c) A list that is already sorted in descending order.
d) A list containing an odd number of elements.

**3.** A fragment runs two nested loops, each from 1 to n with the innermost statement executing once per pair, and afterwards a separate single loop from 1 to n. What is its time complexity?
a) O(n)
b) O(n squared)
c) O(n cubed)
d) O(n log n)

**4.** A team has already written 'Declare and initialize variables / Input numbers / Determine maximum number and output result'. They now rewrite the middle line as a loop that runs until a sentinel value is entered, prompting the user, accepting a number, comparing it with the maximum and incrementing a counter. Which development step are they performing?
a) Step 3: high-level algorithm development
b) Step 4: algorithm refinement
c) Step 2: problem analysis
d) Step 5: algorithm review

**5.** A student writes: sum = 0; count = 0; IF count < 5 THEN { enter n; sum = sum + n; count = count + 1 }; print sum. They intended to add five numbers but the program prints the first number entered. What is the fault?
a) The condition is tested before count has been initialised.
b) A selection construct is not permitted to contain assignment statements.
c) They used selection where repetition is needed, so the body executes at most once.
d) The counter is incremented after the addition instead of before it.

**6.** What is the time complexity of: i = n; while i > 1 do i = i / 2?
a) O(n)
b) O(n/2)
c) O(log n)
d) O(1)

**7.** Which of these is a properly formed high-level algorithm (Step 3) for the meeting-scheduling task?
a) A single instruction: 'Schedule the meeting at a time that suits everybody.'
b) A version that names the exact calendar API calls, the request format and the data structures used to read each attendee's availability before any overall shape is settled.
c) A version that identifies the attendees and finds the common free slots, and stops there because the remaining steps are details.
d) Identify attendees; find common free slots; choose one and tell everyone; get confirmation; if negative iterate from the slot-finding step, else identify the location.

**8.** To find the maximum of n numbers, a student compares every number with every other number using two nested loops and reports the number that was never beaten. On the test data it gives the correct answer. What is the objection to this solution?
a) It is incorrect whenever two or more numbers tie for the maximum, because then no number is strictly never beaten.
b) It uses selection where repetition is required by the problem.
c) It violates the finiteness characteristic, because two nested loops never terminate.
d) It is O(n squared) where a single pass keeping a running maximum is O(n).

**9. (explain why)** Explain why seeding the running maximum with the first input, rather than with 0, fixes the negative-numbers bug — trace a short input to show the mechanism.

**10. (explain why)** Explain why the refined maximum-of-a-set algorithm needs a sentinel value, and say exactly what breaks in the loop if the sentinel is removed and nothing replaces it.

**11. (explain why)** Explain why replacing a nested-loop solution with a single-pass solution changes the algorithm's behaviour on large inputs, when both give identical output on small test data.

**12. (explain why)** Explain why the sum-and-count flowchart puts its decision at the end of the loop body rather than at the beginning, and what would change in the trace if the test were moved to the top.
