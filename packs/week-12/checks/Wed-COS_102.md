# Wednesday — COS_102 nightly check

*Concepts from the "Software Testing Life Cycle and Debugging" deck: what software testing is and why a life cycle is needed, the six STLC phases in order with the activities each owns, entry and exit points, the definition of a test case, and debugging as a process with its methods and tools.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** A tester has finished reviewing the requirement document and the strategy, cost and duration have been signed off. She now writes documents that each list the inputs to supply, the process to follow, and the output that should result. Which phase is she in, and which phase must still be completed before the software can actually be exercised?

a) Test planning; test case development must still be completed
b) Test environment setup; test execution must still be completed
c) Test case development; test environment setup must still be completed
d) Test execution; test cycle closure must still be completed

**2.** A team declares the test case development phase closed and moves into test execution, although a third of the written test cases have not yet been reviewed. Which idea from the deck does this most directly violate?

a) The exit point of a phase is reached only when all the objectives of that phase have been achieved, and review of test cases is an objective of test case development
b) The entry point of test execution is the writing of test cases, so execution cannot begin until every case exists
c) Test cases may only be reviewed during test cycle closure, so the review is out of sequence
d) A phase may not be closed until the defects found in it have been corrected, which happens in test execution

**3.** Which of the following activities belongs to the **test planning** phase rather than to any other phase?

a) Setting up the test data and the hardware on which the tests will run
b) Assigning roles to the members of the testing team
c) Interviewing stakeholders about the software requirement document
d) Collecting feedback and creating the summary report

**4.** A tester interviewing stakeholders records that the payment provider's sandbox is scheduled to be offline for two of the four planned test weeks. Which phase does this activity belong to, and why does it belong there rather than to test environment setup?

a) Test planning, because anything affecting duration is a planning concern by definition
b) Test environment setup, because a sandbox is part of the software requirements of the test
c) Test cycle closure, because an unavailable dependency is a defect that must be reported
d) Requirement analysis, whose activities include stakeholder interviews and the identification of possible issues that might affect the testing process, before any environment is specified

**5.** Both the test execution phase and the test cycle closure phase involve defects and reports. What separates them, as the deck describes their activities?

a) Execution implements the tests, retests to fix defects, and analyses and reports the results; closure checks that the testing objectives have been achieved and the software is ready for use, and produces the summary report and feedback
b) Execution records defects only; closure is the only phase permitted to correct them
c) Execution produces the summary report; closure re-runs any test that produced a defect
d) Execution covers automated tests, closure covers the manual ones, since manual results need human summarising

**6.** An automated suite reports that `total_due` came back as 4,300 where 4,500 was expected. What has the deck's definition of software testing delivered here, and what remains to be done?

a) Testing has resolved the error; what remains is to confirm that no requirement is missing
b) Testing has found that the given output differs from the expected output and has located an error; debugging must still identify and resolve the bug that caused it
c) Testing has identified the bug; debugging will now re-run the suite to confirm the fix
d) Testing has proved that a requirement is missing, since a wrong total can only come from an unimplemented requirement

**7.** A deployed system never crashes and returns correct results, but between 4 p.m. and 6 p.m. its responses become very slow, and no test in the suite fails. Which debugging method from the deck is the natural first move, and on what grounds?

a) Code inspection, because a fault invisible to the tests can only be found by reading the source
b) Unit testing, because slowness must originate inside a single function's execution paths
c) Monitoring, because it watches a running system for unusual behaviour or performance issues that indicate the presence of bugs, which is exactly what is observed here
d) Integration testing, because a symptom that appears only at certain hours must come from the interaction of components

**8.** A team can reproduce a fault but cannot see where the program's state first goes wrong, and separately wants to know which routine consumes most of the running time. Which of the deck's debugging tool categories serve these two needs?

a) A profiler for the first, a trace tool for the second
b) Logging for the first, code inspection for the second
c) A trace tool for both, since both concern the order of execution
d) A debugger or trace tool for the first, a profiler for the second

**9. (explain why)** The deck justifies the STLC by saying that without a standard process which clearly defines the deliverables and objectives of each phase, "we might not be sure that we are testing our software the right way." Explain what specifically goes wrong in a project that tests hard but has no defined phases, and name two phases whose omission would produce the clearest damage.

**10. (explain why)** A test case specifies inputs, process and expected outputs. Explain why the *expected output* must be fixed during test case development rather than decided when the test is run, and what would be lost if a tester decided at run time whether the result looked reasonable.

**11. (explain why)** Testing and debugging are different processes but the deck lists unit, integration and system testing among the debugging methods. Explain how the same three activities can belong to both, and state what changes about the purpose when they are used for debugging.

**12. (explain why)** Explain the difference between logging and monitoring as debugging techniques, and describe a fault for which logging succeeds where monitoring cannot, and a fault for which monitoring succeeds where logging cannot.
