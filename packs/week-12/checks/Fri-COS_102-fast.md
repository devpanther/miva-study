# Friday — COS_102 fast-hour check

*Applying the Software Testing Methods deck to real code.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** Name the functional testing method for each: (i) test data is fed into one function to check each of its execution paths; (ii) after every part is integrated, the whole app is checked against its technical and functional requirements; (iii) the finished app is checked against the expected requirements, including spelling errors and bugs that crash it.
A. (i) unit, (ii) integration, (iii) system
B. (i) integration, (ii) system, (iii) acceptance
C. (i) unit, (ii) system, (iii) acceptance
D. (i) unit, (ii) acceptance, (iii) system

**2.** How many execution paths does band have, and which set of inputs exercises every one of them exactly once?

```python
def band(x):
    if x < 0:
        return "neg"
    if x % 2 == 0:
        return "even"
    return "odd"
```
A. 3 paths: 2, 4, 6
B. 2 paths: 4, 7
C. 4 paths: −2, −1, 4, 7
D. 3 paths: −1, 4, 7

**3.** Main calls Report and Pay; Pay calls Tax. The team tests Main first, with placeholders standing in for the modules below it, then Report and Pay, and Tax last. Which integration approach is this?
A. Bottom-up integration
B. Top-down integration
C. System testing
D. Unit testing

**4.** Three testers: (i) never sees the source and works the web pages in a browser, checking outputs against expected outcomes; (ii) reads the implementation and picks inputs to drive each path through the code; (iii) studies the code of two modules to design the cases, then runs them through the exposed interfaces. Classify each.
A. (i) black box, (ii) white box, (iii) grey box
B. (i) white box, (ii) black box, (iii) grey box
C. (i) black box, (ii) grey box, (iii) white box
D. (i) grey box, (ii) white box, (iii) black box

**5.** A field accepts a whole-number score, valid from 0 to 100 inclusive. Which set takes exactly one value from each equivalence class of the input?
A. {0, 50, 100}
B. {−5, 50, 120}
C. {10, 50, 90}
D. {−5, −1, 120}

**6.** fee(days) is specified as: the first day is free, then 50 per extra day, so fee(1) = 0 and fee(3) = 100. Four test cases: A fee(0) expects 0; B fee(1) expects 0; C fee(3) expects 100; D fee(−2) expects 0. Which cases fail against this implementation?

```python
def fee(days):
    if days <= 0:
        return 0
    return 50 * days
```
A. B and C
B. B only
C. C only
D. A and D

**7.** A pass mark is 50 or more. For marks = [50, 70, 30] a watch on n shows it ending at 1 where 2 was expected. Which single change fixes the defect?

```python
def count_pass(marks):
    n = 0
    for m in marks:
        if m > 50:
            n = n + 1
    return n
```
A. Move `n = 0` inside the loop
B. Change `m > 50` to `m >= 50`
C. Change `n = n + 1` to `n = 1`
D. Change `for m in marks` to `for m in marks[1:]`

**8.** What is the one thing that decides whether a test is black box or white box?
A. Whether it is run by hand or by an automated tool
B. Whether a tester or a developer runs it
C. Whether it is a functional or a non-functional test
D. Whether the internal structure of the item is known to the tester

**9. (show your working)** quantity is specified as valid from 1 to 99 inclusive. The implementation reads `if qty >= 1 and qty < 99`. List the six boundary values that boundary value analysis tests for this range, state what the implementation returns for each, and name the value that exposes the fault. Show your working.

**10. (show your working)** total([5, 8, 2]) returns 10 where 15 is expected. Set a breakpoint on the line `t = t + prices[i]`, and give the value of i and of t after each time it runs. Say where the state first goes wrong and name the defect. Show your working.

```python
def total(prices):
    t = 0
    for i in range(1, len(prices)):
        t = t + prices[i]
    return t
```

**11. (show your working)** Four reports on a banking app: (a) balances are correct but each page takes 30 seconds when 2,000 customers are logged in; (b) customers watched using the app cannot find the transfer button; (c) a logged-in customer can open another customer's statement by editing the address bar; (d) the function that adds two amounts returns 30 for 10 + 25 where 35 is expected. Name the testing method for each and say which reports are functional failures. Show your working.

**12. (show your working)** Every function in a payment program has passed its unit tests, and the developer reports that the program is therefore free of defects. Explain why that conclusion does not follow: name the stated limitation of unit testing, and say what integration testing and system testing check that unit tests cannot.

---

## Answers

**1. C** — *Choosing the functional testing level.* Unit testing uses test data to check the execution paths in a function (i). System testing tests the system as a whole after all parts are integrated to confirm it meets the technical and functional requirements (ii). Acceptance testing confirms the software meets the expected requirements and also looks for spelling errors and for bugs that cause major errors and crashes (iii).

The first option calls the whole-app check 'integration', but integration tests how parts work together, not the assembled whole; the second calls a single-function check 'integration'; the fourth swaps system and acceptance.

**2. D** — *Choosing inputs to cover execution paths.* White box testing chooses inputs to exercise paths through the code. There are three ways out: the first if (x < 0), the second if (even, non-negative), and the final return (odd, non-negative). −1 takes the first, 4 the second, 7 the third: 3 paths, one input each.

2, 4, 6 are all even and non-negative, so they all take the same path and two paths are never run; 2 paths forgets the negative branch; 4 paths counts −2 and −1 as different, but both leave at x < 0 and the parity test is never reached for either.

**3. B** — *Integration testing direction.* Integration tests check how well different parts work together and can be top-down or bottom-up. With the top-down approach, higher-level modules are tested first before the lower-level modules: Main, then Report and Pay, then Tax.

Bottom-up would start with Tax and finish with Main; system testing tests the whole after everything is integrated, not module by module; unit testing tests one function on its own, not how modules connect.

**4. A** — *Black, white and grey box.* The distinction is what the tester knows of the internal structure. (i) knows nothing of it and tests from outside: black box. (ii) knows the implementation and chooses inputs to exercise paths through the code: white box. (iii) uses internal knowledge to design the cases but tests at the black-box level through the interfaces: grey box, the combination.

The second option swaps the first two; the third calls path-driven testing 'grey', but (ii) tests the code directly, not through interfaces; the fourth calls (iii) black box, but its cases were designed from the source.

**5. B** — *Equivalence partitioning.* The input splits into three classes the program should treat identically: below the range (score < 0), valid (0 to 100), above the range (score > 100). One representative per class: −5, 50, 120.

{0, 50, 100} takes three values from the valid class and none from the invalid ones; {10, 50, 90} likewise; {−5, −1, 120} takes two from the below-range class and none from the valid class.

**6. A** — *Running test cases against an implementation.* Run each case. fee(0) = 0 and fee(−2) = 0, so A and D pass. fee(1) = 50 × 1 = 50, expected 0: B fails. fee(3) = 50 × 3 = 150, expected 100: C fails. The implementation charges for the free day; the fix is 50 × (days − 1).

'B only' misses that the same defect overcharges every positive input; 'C only' misses the boundary case at 1; 'A and D' are the cases the implementation gets right.

**7. B** — *Fixing a wrong relational operator.* Step through with the watch: m = 50 fails m > 50, so n stays 0; m = 70 passes, n = 1; m = 30 fails. The mark exactly at the boundary is excluded, so the defect is a wrong relational operator: > should be >=, giving n = 2.

Moving n = 0 inside the loop resets the accumulator and gives 1 for any list; n = 1 stops counting; marks[1:] skips the first element and gives 1 for this list too, since 70 is the only one counted.

**8. D** — *Basis of black box versus white box.* Black box testing is a method in which the internal structure, design and implementation of the item are not known to the tester; white box is one in which they are known. Nothing else is part of the definition.

Either kind can be manual or automated; a developer usually does white box testing but that is a consequence, not the definition; black box tests are usually functional but can be non-functional, so functional versus non-functional does not decide it.

**9.** *Boundary value analysis exposing a fault.* Boundary value analysis tests the values just below, at and just above each edge: 0, 1, 2 at the lower edge and 98, 99, 100 at the upper edge. The implementation: 0 invalid (correct), 1 valid (correct), 2 valid (correct), 98 valid (correct), 99 invalid, 100 invalid (correct). The specification says 99 is valid, so qty = 99 exposes the fault: qty < 99 should be qty <= 99.

Final answer: boundary values 0, 1, 2, 98, 99, 100; the failing value is 99. A correct answer lists all six, gives the implementation's verdict on each, and identifies 99 with the operator fix. Testing only 1 and 99 is accepted if 99 is found, but the full six is expected.

**10.** *Watching a variable to locate the defect.* range(1, 3) gives i = 1, 2. Watch: after the first pass i = 1, t = 0 + 8 = 8; after the second pass i = 2, t = 8 + 2 = 10; the loop ends and 10 is returned. The state is wrong from the very first pass: t should be 5 after adding prices[0], but the loop started at index 1 and prices[0] = 5 is never added. The defect is an off-by-one in the loop range: range(1, ...) should be range(0, ...) or range(len(prices)).

Final answer: (i, t) = (1, 8), (2, 10); first wrong at the first pass; defect: off-by-one, the loop skips index 0. Also accepted: describing the fix as `for p in prices`. Naming the defect as a wrong accumulator start or integer division is wrong.

**11.** *Classifying failures by testing method.* (a) Performance testing: correct output but poor behaviour under load, which is a non-functional matter of network delays, database and client-side processing under different load conditions. (b) Usability testing: an issue discovered with the help of users who are observed while using the software. (c) Security testing: a confidentiality flaw, one customer reading another's data. (d) Unit testing: a single function does not perform as expected, which is a functional failure.

A correct answer names performance, usability, security and unit, and says only (d) is functional, because the other three concern how well or how safely the app works rather than whether it does the right thing. Calling (a) system testing, or (d) acceptance testing, is not accepted.

**12.** *Limits of unit testing.* Unit testing uses test data to check the execution paths in a function, and its stated limitation is that it is practically impossible to test all the execution paths, and the number and type of test data that can be used are limited. So a passing unit suite shows only that the paths exercised by the chosen data behaved; other paths and other data are untested. Integration testing checks how well the different parts work together, which no test of one part in isolation can show, such as a correct function being handed the wrong argument by its caller. System testing checks the system as a whole after all parts are integrated against the technical and functional requirements, which is the only level at which 'the program works' can be claimed.

A correct answer states the limitation in terms of untested paths and limited test data, and gives the distinct purpose of integration and of system testing.
