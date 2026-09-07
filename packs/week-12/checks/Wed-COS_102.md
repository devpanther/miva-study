# Wednesday — COS_102 nightly check

*The Software Testing Life Cycle and Debugging deck.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** Put the STLC phases in order. A: test execution. B: requirement analysis. C: test environment setup. D: test planning. E: test cycle closure. F: test case development.
A. B, D, F, C, A, E
B. D, B, F, C, A, E
C. B, D, C, F, A, E
D. B, F, D, C, A, E

**2.** Assign each activity to its STLC phase: (i) interviewing stakeholders; (ii) assigning roles to team members; (iii) reviewing the written test cases; (iv) creating the summary report.
A. (i) test planning, (ii) requirement analysis, (iii) test case development, (iv) test execution
B. (i) requirement analysis, (ii) test planning, (iii) test case development, (iv) test cycle closure
C. (i) requirement analysis, (ii) test planning, (iii) test execution, (iv) test cycle closure
D. (i) requirement analysis, (ii) test case development, (iii) test execution, (iv) test cycle closure

**3.** Test case development has three objectives: identify, write and review the test cases. A team has identified and written all its cases; the review has not been done, and the calendar date planned for the end of the phase has arrived. Which is true?
A. The exit point is reached: the planned time is up
B. The exit point is reached: test cases exist
C. The exit point is not reached: an objective is still unmet
D. The entry point of test execution is reached

**4.** A test case reads: 'Inputs: 4 and 5. Process: call add(4, 5). Expected output: whatever the function returns.' Which of the three components of a test case is defective?
A. The process
B. The expected output
C. The inputs
D. Nothing: it is a complete test case

**5.** Name each debugging method: (i) reading the source of a function line by line looking for a fault; (ii) writing every event and message the program produces to a file to be read afterwards; (iii) watching a running system's response times for unusual behaviour.
A. (i) code inspection, (ii) logging, (iii) monitoring
B. (i) monitoring, (ii) logging, (iii) code inspection
C. (i) code inspection, (ii) monitoring, (iii) logging
D. (i) unit testing, (ii) logging, (iii) monitoring

**6.** A program gives the correct output but takes 40 seconds. The team wants to know which function consumes most of that time. Which debugging tool category is the right one?
A. Debugger
B. Trace tool
C. Profiler
D. Code inspection

**7.** The specification says the app must email a receipt after payment, and that total_due for a given order is 4500. A test run finds (i) no receipt is ever sent, because no code does it, and (ii) total_due comes back as 4300. Classify each finding by what testing revealed.
A. (i) an error located, (ii) a missing requirement
B. (i) a missing requirement, (ii) an error located
C. Both are missing requirements
D. Both are errors located

**8.** A test reports that balance() returned −50 where 0 was expected. A developer then reads the function, finds a < that should be <=, and changes it. Which activity is testing and which is debugging?
A. Both are testing
B. The report is debugging; the fix is testing
C. Both are debugging
D. The report is testing; finding and fixing the < is debugging

**9. (show your working)** pct(score, total) is specified to return the percentage score/total × 100 rounded to the nearest whole number, and to return 0 when total is 0. Write two test cases, one for pct(45, 60) and one for pct(3, 0), each with its inputs, its process and its expected output. Show your working.

**10. (show your working)** A team finishes test case development and goes straight to test execution, skipping test environment setup. Describe two concrete problems that will appear during execution, and name the activities of the skipped phase that would have prevented each. Show your working.

**11. (show your working)** A program crashes about once a day at an unpredictable moment, and nobody has seen it happen. From code inspection, monitoring, logging, unit testing, integration testing and system testing, choose the two methods to apply first, say what each would produce, and say why two of the others fit less well here. Show your working.

**12. (show your working)** A team tests without a defined life cycle: each tester runs whatever checks seem useful and stops when the release date arrives. Explain what a defined software testing life cycle would give them that this does not, using the idea of each phase having deliverables, objectives and an exit point.

---

## Answers

**1. A** — *Ordering the STLC phases.* The six phases in sequential order are requirement analysis (B), test planning (D), test case development (F), test environment setup (C), test execution (A) and test cycle closure (E). You must know what to test before you can plan, plan before you write cases, write cases before you set up the environment to run them, run them, then close.

D, B, ... plans before deciding what is to be tested; B, D, C, F, ... sets up the environment before the cases that will run in it exist; B, F, D, ... writes test cases before the strategy, cost and duration are defined.

**2. B** — *Assigning activities to STLC phases.* Requirement analysis owns the requirement document review and the stakeholder interview (i). Test planning defines strategy, cost and duration and assigns roles (ii). Test case development is the identification, writing and review of test cases (iii). Test cycle closure creates the summary report and collects feedback (iv).

The first option swaps the first two phases and puts the summary report in execution, whose reporting is of test results, not the closing summary; the third moves case review into execution; the fourth puts role assignment into case development.

**3. C** — *Entry and exit points.* The exit point of a phase is where the phase ends and all the objectives of the phase have been achieved. Review is one of the three objectives and it is still owed, so the exit point has not been reached, whatever the calendar says.

'Time is up' confuses a date with an objective; 'test cases exist' satisfies two objectives out of three; the next phase cannot be entered while this one has not exited.

**4. B** — *Components of a test case.* A test case specifies the test inputs, the process and the expected outputs. Testing is finding out whether the output the computer gives is the same as the expected output, so the expected output must be fixed before the run: here it should say 9. 'Whatever the function returns' can never fail, so it tests nothing.

The inputs (4 and 5) and the process (call add(4, 5)) are both stated precisely; 'complete' misses that one of the three parts is empty in effect.

**5. A** — *Naming debugging methods from descriptions.* Code inspection is manually reviewing the source code to identify potential bugs (i). Logging is recording events and messages related to the system so they can be used to identify bugs (ii). Monitoring is watching a running system for unusual behaviour or performance issues that indicate bugs (iii).

The second option calls reading source 'monitoring', but monitoring watches a running system; the third swaps logging and monitoring, but recording to a file is logging; the fourth calls reading source 'unit testing', but unit testing runs the unit on test data rather than reading it.

**6. C** — *Choosing a debugging tool.* The three tool categories are debuggers, trace tools and profilers. A profiler measures where a running program spends its time, function by function, which is exactly the question asked.

A debugger stops at a breakpoint and shows variable values, which locates a wrong value rather than a slow function; a trace tool records the sequence of calls, not their cost; code inspection is a method, not a tool, and reading the source will not tell you which function is slow.

**7. B** — *What testing reveals.* Testing lets us locate errors in the program and also confirm whether there are any missing requirements. No code sends the receipt at all: a requirement in the specification is missing from the program (i). The total is computed, but the output differs from the expected output 4500: an error has been located (ii).

The first option swaps them; 'both missing' treats a wrong number as absent functionality; 'both errors' treats absent functionality as a wrong number.

**8. D** — *Testing versus debugging.* Software testing is the process of finding out whether the output the computer gives is the same as the expected output: the report of −50 against 0 is testing, and it hands over a symptom. Debugging is the process of identifying and resolving errors: finding the < and changing it supplies the cause and the fix.

The other options either merge the two processes or reverse them; the test finds that something is wrong, the debugging finds what and repairs it.

**9.** *Writing a test case.* A test case specifies the test inputs, the process and the expected outputs, with the expected output fixed from the specification before the run. Case 1: inputs 45 and 60; process: call pct(45, 60); expected output: 45/60 × 100 = 75. Case 2: inputs 3 and 0; process: call pct(3, 0); expected output: 0, from the rule for a zero total, not from any division.

A correct answer states all three parts for both cases and gives 75 and 0. Writing 'expected: the returned value' or leaving the expected output to be discovered by running the code is not a test case. 0.75 for case 1 forgets the × 100; an error or 'undefined' for case 2 ignores the specified rule.

**10.** *Consequences of skipping an STLC phase.* Test environment setup is where the software and hardware requirements for the test are specified and the test data and environment are set up. Skipping it means, first, that the cases have no data to run on: a case such as 'log in as a customer with an overdue loan' cannot be executed because no such account exists, which test data setup would have created. Second, the tests run on whatever machine and software versions happen to be at hand, so a failure cannot be told apart from an environment mismatch (wrong database version, missing browser), which specifying the hardware and software requirements and setting up the environment would have fixed in advance.

A correct answer gives two problems of this kind, each tied to test data setup or to environment setup and the specified requirements. Problems that belong to other phases, such as unwritten test cases or unassigned roles, are not accepted.

**11.** *Choosing debugging methods for a fault.* Logging and monitoring. Logging records the events and messages the program produces, so when the crash happens the file shows what the program was doing in the seconds before it, without anyone watching. Monitoring watches the running system for unusual behaviour or performance issues, such as memory climbing before the crash, and points to the conditions that trigger it. Unit testing fits less well because the crash is not tied to a known function and its inputs, and a once-a-day condition is unlikely to be reproduced by fixed test data; code inspection fits less well because there is no known place in the source to inspect until logging has narrowed it down.

A correct answer picks logging and monitoring, says what each records, and gives a reason against two of the others. Picking code inspection first is accepted only with an argument for where to start reading.

**12.** *Purpose of a defined testing life cycle.* A defined life cycle gives a standard process that clearly defines the deliverables and objectives of each testing phase, with an entry point where the phase begins and an exit point that is reached only when all the phase's objectives have been achieved. Without it the team cannot be sure it is testing the software the right way, that the software meets the set requirements, or that it is free of defects: stopping at the release date is stopping on time rather than on an exit point, and there is no statement of what would count as finished. With the life cycle, requirement analysis fixes what is to be tested, planning fixes strategy, cost and duration, development produces reviewed test cases with expected outputs, and closure checks that the objectives were achieved and the software is ready for use.

A correct answer names deliverables and objectives per phase, explains that an exit point depends on objectives being met rather than on time, and states at least one thing the team cannot be sure of without the process.
