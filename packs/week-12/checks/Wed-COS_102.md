# Wednesday — COS_102 nightly check

*The Software Testing Life Cycle and Debugging deck.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** pct(score, total) must return score/total × 100 rounded to the nearest whole number, and must return 0 when total is 0. What are the expected outputs of test cases for pct(45, 60) and for pct(3, 0)?
A. 0.75 and 0
B. 75 and an error
C. 0.75 and an error
D. 75 and 0

**10.** A team finishes test case development and goes straight to test execution, skipping test environment setup. Which problem does that skip cause?
A. A case needing a customer with an overdue loan cannot run, because no such test data exists.
B. There are no test cases to run, because none have been written.
C. Nobody knows who runs which test, because roles were never assigned.
D. There is no summary report at the end, because nothing was recorded.

**11.** A program crashes about once a day at an unpredictable moment and nobody has ever seen it happen. Which two debugging methods should be applied first?
A. Unit testing and code inspection
B. Integration testing and system testing
C. Logging and monitoring
D. System testing and code inspection

**12.** A team tests with no defined life cycle: each tester runs whatever checks seem useful and everyone stops on the release date. What does a defined testing life cycle give them that this does not?
A. A guarantee that the software contains no defects at all.
B. A way of testing without writing test cases in advance.
C. Fewer testers, because the phases all run at the same time.
D. Deliverables and objectives for each phase, and an exit point reached only when those objectives are met.

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

**9. D** — *Writing a test case.* The expected output of a test case is fixed from the specification before anything is run. 45 / 60 = 0.75, and × 100 gives 75. For a zero total the specification gives the answer outright: 0, with no division attempted.

0.75 forgets the × 100; expecting an error for pct(3, 0) predicts what the code will probably do instead of what the specification requires, which is the one thing a test case must not do.

**10. A** — *Consequences of skipping an STLC phase.* Test environment setup is where the software and hardware requirements are specified and the test data and the environment are prepared. Skipping it leaves the cases with nothing to run against: the accounts, loans and records they assume do not exist, and any failure cannot be told apart from a version mismatch in the environment.

Writing the cases belongs to test case development, assigning roles to test planning and the summary report to test cycle closure, so none of those three follows from this skip.

**11. C** — *Choosing debugging methods for a fault.* Nobody is watching when it happens, so the first job is to record what the program was doing. Logging writes the events and messages to a file that can be read after the crash, and monitoring watches the running system for unusual behaviour, such as memory climbing towards the moment of failure.

Unit testing needs a known function and fixed inputs, which a once-a-day condition is unlikely to reproduce; code inspection needs a place in the source to start reading, which only the log can point to; and the integration and system levels test a build, not a rare run-time event.

**12. D** — *Purpose of a defined testing life cycle.* A defined life cycle states the deliverables and objectives of every phase and gives each one an entry point and an exit point, and that exit point is reached when the objectives have been achieved, not when the calendar says so. Stopping on the release date is stopping on time, with no statement of what would have counted as finished.

No process guarantees a defect-free program; the life cycle adds test case development rather than removing it; and its phases run in sequence, so it saves nobody.
