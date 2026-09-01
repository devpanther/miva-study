# Friday, second hour — COS_102 check

*Applying the "Software Testing Methods" deck to real code: choosing between functional and non-functional methods, choosing the level (unit, integration, system, acceptance) and the integration direction, choosing between black, white and grey box for a given situation, designing test data by equivalence partitioning and boundary value analysis, and reading a debugger session to name the defect.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** A function is specified to accept a whole-number score from 0 to 100 and return a band:

```
def grade(score):
    if score >= 70:  return "A"
    elif score >= 60: return "B"
    elif score >= 50: return "C"
    else:             return "F"
```

Which set of inputs is the one chosen by equivalence partitioning together with boundary value analysis?

a) 0, 25, 50, 75, 100 — five evenly spaced values across the whole permitted range
b) 49, 50, 59, 60, 69, 70, together with 0 and 100 — the value on each side of every band edge, plus the two ends of the input domain
c) 55, 65, 75, 85 — one representative taken from the middle of each band
d) 70, 60 and 50 — the three thresholds alone, since a threshold that behaves correctly guarantees the rest of its band

**2.** A registration form is specified to accept applicants aged 18 to 65 **inclusive**. The implementation reads `if age > 18 and age <= 65:`. Which single boundary value exposes the fault, and what class of defect is it?

a) 66, and it is a wrong branch order, because the upper test is evaluated after the lower one
b) 17, and it is an uninitialised-variable defect, because nothing sets a default for under-age input
c) 18, and it is an off-by-one produced by a wrong relational operator, `>` used where `>=` was required
d) 65, and it is an integer-division defect, because the range is compared rather than divided

**3.** A developer opens the source of `grade` above, counts the four execution paths through it, and picks one input to drive each path. Which method is she using, and which testing levels does the deck say it applies to?

a) White box testing; applicable to unit testing, integration testing and system testing
b) Black box testing; applicable to integration testing, system testing and acceptance testing
c) Grey box testing; primarily used in integration testing
d) White box testing; applicable to acceptance testing only, since every execution path ends in an output the user sees

**4.** A tester reads the source of the `cart` and `pricing` modules to work out which combinations of discount and stock level are interesting, then exercises those combinations only through the application's public checkout page. How should this be classified?

a) Black box testing, because every test was actually run through the exposed interface
b) White box testing, because the source of both modules was studied before any test ran
c) Unit testing, because two named modules are the target of the tests
d) Grey box testing, in which internal data structures and algorithms are used to design the test cases while the testing is done at the user or black-box level, and which is primarily used in integration testing

**5.** A team tests the currency-conversion and date helper modules first, then the transaction module that calls them, then the reporting module above that. Which approach is this, and what would the alternative have done?

a) Top-down integration; the alternative would have started with the reporting module
b) Bottom-up integration, in which lower-level modules are tested first; the top-down alternative would have tested the higher-level modules first
c) Bottom-up design in the Week 11 sense, which concerns composition of components and says nothing about the order of integration tests
d) System testing, because all three layers are included by the time the sequence ends

**6.** A loan page computes interest correctly to the last kobo. With five users it responds in under a second; with five hundred concurrent users it takes forty seconds. Which classification and method does this failure call for?

a) Functional testing has failed, because a forty-second response is not the expected output of the program
b) Usability testing, because the delay is discovered by observing users while they use the software
c) Non-functional testing, specifically performance testing, which checks how the software will perform under different load conditions
d) Compatibility testing, because the software behaves differently in one situation from another

**7.** A tester writes twelve unit tests for a function containing two nested conditionals and a loop. All twelve pass, and she reports the function as proven correct. Assess the claim.

a) Sound, provided the twelve cases were derived from the specification rather than from reading the code
b) Sound, because unit testing operates on the functions in a program and this is a single function
c) Unsound, because unit testing is a non-functional method and non-functional methods cannot establish correctness
d) Unsound, because the deck states that it is practically impossible to test all the execution paths in a software and that the number and type of test data are limited, so passing tests show only that the paths exercised behaved as expected

**8.** `average([10, 20, 30])` returns 10.0 where 20.0 is expected:

```
def average(scores):
    total = 0
    for i in range(len(scores) - 1):
        total = total + scores[i]
    return total / len(scores)
```

A breakpoint is set on the `return` line and `total` is watched on each pass through the loop. What does the watch show, and what is the defect?

a) `total` ends at 30 rather than 60, because the loop stops one element early; the defect is an off-by-one in the bound given to `range`
b) `total` ends at 60, and the division then truncates the result; the defect is integer division
c) `total` is never initialised, so the first addition works on a stale value; the defect is an uninitialised accumulator
d) `total` ends at 60, and the fault is in `len(scores)`, which yields 3 where 2 is required; the defect is a wrong operator

**9. (explain why)** A payment module has already passed unit tests for every one of its functions, yet the checkout fails as soon as it is wired to the inventory module. Explain why passing unit tests could not have prevented this, name the level of testing that would have caught it, and say which of the two integration directions you would choose here and why.

**10. (explain why)** Two testers produce identical sets of inputs for the same login form. One read the source first; the other never saw it. Explain why their tests are not the same kind of test, what each is called, and why the deck says grey box is "primarily used in integration testing".

**11. (explain why)** A function is specified to accept a discount percentage from 0 to 50 inclusive. Explain, using this spec, why equivalence partitioning alone would probably miss the most likely defect, which specific values boundary value analysis adds, and what the deck's stated limitation of unit testing implies about how much confidence a passing run of those values earns.

**12. (explain why)** A bank's mobile app returns correct balances, but the branch manager reports that customers on older Android phones cannot complete a transfer, and that new customers abandon the transfer screen halfway. Explain which non-functional method applies to each of the two complaints, why neither is a functional failure, and what a functional failure on the same screen would look like instead.
