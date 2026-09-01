# Friday, second hour — COS_102 check

*The same Week 3 computational approaches, treated as practice. This session applies them to the concrete problems the lessons name: counting the search space of the four-digit padlock under brute force, tracing Merge sort on a small set as a divide and conquer algorithm, running the greedy activity-selection example with start times 2, 4, 1, 6, 9, 6 and end times 3, 5, 7, 8, 10, 10, and converting a naive recursive Fibonacci into a dynamic programming solution. It also asks which named approach fits a described situation, how to lay out a pipelined calculation, and how to diagnose a solution that is wrong or wastefully slow, including the food-delivery routing case study. Definitions are assumed known from Wednesday; here they must be executed.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** A padlock has four digit wheels, each showing 0 to 9, and the combination has been forgotten. How many combinations must a brute force attack be prepared to try in the worst case?
a) 10,000
b) 40
c) 5,040
d) 9,999

**2.** Merge sort is used to arrange 2, 8, 4, 9, 3 in descending order. The list is split into [2, 8] and [4, 9, 3]. What are the two halves immediately before the final merge?
a) [2, 8] and [3, 4, 9]
b) [8, 2] and [9, 4, 3]
c) [8, 2] and [9, 3, 4]
d) [9, 8, 4, 3, 2] and an empty list

**3.** Six activities have start times 2, 4, 1, 6, 9, 6 and end times 3, 5, 7, 8, 10, 10 respectively, and no two may be worked on at once. What is the maximum number of activities that can be performed?
a) 3
b) 5
c) 4
d) 6

**4.** For the activity-selection problem, which greedy selection rule can be relied on to produce the maximum number of activities?
a) Repeatedly take the compatible activity that has the earliest start time among those remaining
b) Repeatedly take the compatible activity with the latest start time
c) Repeatedly take the compatible activity with the shortest duration
d) Repeatedly take the compatible activity with the earliest finishing time

**5.** A student writes a recursive function that returns F(n-1) + F(n-2) and finds it unusably slow for larger n. Which single change turns it into a dynamic programming solution?
a) Store each F(n) when first computed and return the stored value for any later call with the same n
b) Replace the recursion with a loop that computes F(n-1) + F(n-2) afresh on every pass through the sequence
c) Compute the first and second halves of the sequence separately and join them at the end
d) Generate candidate values in order and stop at the first one that satisfies the definition

**6.** A program must calculate the total cost of an order by adding up the cost of the products and then the VAT. Which arrangement is a pipeline in the sense used in the lesson?
a) One process computes the product subtotal and a second computes the VAT from the original order, and their two outputs are added
b) One process computes the product subtotal and passes it to a VAT process, whose output goes to a total process
c) One process stores each product's cost the first time it is looked up so it is not fetched twice
d) One process tries each candidate total in turn until one matches the sum of the recorded line items

**7.** A music-centric social network holds three years of five-star song ratings and playlist-sharing records, and wants to find out which of its platform features are used least so it can decide what to retire. Which approach fits?
a) Performance testing, because the question is about how well the individual platform features are working
b) Hypothesis testing, because two groups of features are being compared
c) Data mining, because valuable information is extracted from a large data set by finding patterns
d) Visualisation, because usage figures are best presented as charts

**8.** A student solving a maze generates every complete route from entrance to exit and then checks each one, and the program is far too slow. Which change addresses the actual waste?
a) Divide and conquer: split the maze into quadrants, solve each quadrant, and then join the four partial routes
b) Greedy: at each junction take the corridor that heads most directly towards the exit and carry on from there
c) Dynamic programming: store every route already generated so that no route is ever generated a second time
d) Backtracking: extend a route step by step and, at a dead end, return to the last junction

**9. (explain why)** Explain why saving each Fibonacci value the first time it is computed makes such a large difference to the work done, when the arithmetic per term is identical either way.

**10. (explain why)** Explain why the greedy choice is safe when finding the largest two-digit number from the set 5, 9, 1, 4, 2 and 6, but not when a delivery driver greedily drives to the nearest remaining customer.

**11. (explain why)** Explain why the splitting stage of Merge sort does no sorting at all, and where the ordering actually comes from.

**12. (explain why)** Explain why a food delivery company should not conclude that its new routing program is ready for release simply because it produced correct routes on last month's real orders.
