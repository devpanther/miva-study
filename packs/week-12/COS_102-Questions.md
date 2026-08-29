# COS_102 — Week 12 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 13, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** The six phases of the software testing life cycle, in sequential order, are

a) requirement analysis, test planning, test case development, test environment setup, test execution, test cycle closure
b) test planning, requirement analysis, test environment setup, test case development, test execution, test cycle closure
c) requirement analysis, test case development, test planning, test execution, test environment setup, test cycle closure
d) test planning, test case development, test environment setup, requirement analysis, test execution, test cycle closure

**2.** The deck says every STLC phase has an entry point and an exit point. The exit point is

a) the moment the phase runs out of its allocated duration
b) where the phase ends and all the objectives of the phase have been achieved
c) the first point at which a defect is found and reported to the developers
d) the handover meeting at which the next phase's roles are assigned

**3.** A test case is defined as detailed step-by-step instructions on how a test should be performed. What three things does it specify?

a) The tester, the environment and the duration
b) The requirement, the defect and the fix
c) The test inputs, the process and the expected outputs
d) The entry point, the exit point and the deliverable

**4.** In which phase are the software and hardware requirements for the test specified?

a) Test planning
b) Requirement analysis
c) Test execution
d) Test environment setup

**5.** Debugging is

a) the process of finding out whether the output the computer gives matches the expected output
b) the process of identifying and resolving errors, or bugs, in a software system
c) the phase of the STLC in which test results are analysed and reported
d) the automated re-running of failed test cases until they pass

**6.** Black box testing is applicable to which testing levels?

a) Integration testing, system testing and acceptance testing
b) Unit testing only
c) Unit testing and acceptance testing only
d) Every level, since the internals are irrelevant at all of them

**7.** White box testing, in which the tester chooses inputs to exercise paths through the code, is applicable to

a) acceptance testing and usability testing
b) system testing only, because whole-system behaviour reveals every path
c) compatibility testing and performance testing
d) unit testing, integration testing and system testing

**8.** Which of these is **not** one of the non-functional testing methods listed in the deck?

a) Usability testing
b) Security testing
c) Acceptance testing
d) Compatibility testing

**9.** What limitation does the deck state for unit testing?

a) It cannot be automated, because functions must be driven by hand
b) It can only be applied after all the modules have been integrated
c) It is practically impossible to test all the execution paths, and the number and type of test data are limited
d) It detects defects but gives no information about where in the code they lie

**10.** In top-down integration testing,

a) higher-level modules are tested first, before the lower-level modules
b) lower-level modules are tested first, before the higher-level modules
c) all modules are tested simultaneously once the system is complete
d) the modules are tested in the order in which they were written

**11.** Radare2, WinDbg and Valgrind are given by the deck as examples of

a) automated test case generators
b) profilers used to locate performance bottlenecks
c) test environments for compatibility testing
d) widely used debuggers

**12.** A method in which the internal structure is partially known — internal data structures and algorithms are used to design the test cases, but the testing itself is carried out at the user level — is

a) black box testing, primarily used in acceptance testing
b) grey box testing, primarily used in integration testing
c) white box testing, primarily used in unit testing
d) system testing, primarily used after integration

## Section B — Short answer (3)

**13.** Name the six STLC phases in order and give one activity that belongs to each. Then explain what the deck says goes wrong when a team tests without such a defined life cycle.

**14.** Distinguish black box, white box and grey box testing by what the tester knows, and state for each which testing levels the deck says it applies to. Give a one-sentence example of each.

**15.** A shopping app returns correct prices, but it is slow when many users shop at once, some customers cannot use it on their older browsers, and a security review is pending. Classify each of the three concerns under the correct non-functional method, explain why none of them is a functional failure, and say which functional method you would use to confirm the whole integrated app still meets its technical and functional requirements after the fixes.

---

## Answers

**Section A**

1. **a** — requirement analysis, test planning, test case development, test environment setup, test execution, test cycle closure.
2. **b** — the exit point requires that all the objectives of the phase have been achieved, not merely that the phase stopped.
3. **c** — test inputs, process and expected outputs; the expected output is fixed before the test is run.
4. **d** — test environment setup specifies the software and hardware requirements; planning only identifies the environment.
5. **b** — identifying *and resolving* errors; a is the definition of software testing.
6. **a** — the deck lists integration, system and acceptance testing for black box.
7. **d** — unit, integration and system testing; white box is "testing beyond the user interface" and needs programming know-how.
8. **c** — acceptance is a functional method, alongside unit, integration and system.
9. **c** — all execution paths cannot practically be tested, and the test data available is limited in number and type.
10. **a** — higher-level modules first; b describes bottom-up.
11. **d** — the deck names them as widely used debuggers, alongside trace tools and profilers as other tool categories.
12. **b** — grey box: internals partially known, cases designed from them, tests run at the black-box level, primarily in integration testing.

**Section B**

**13.** Requirement analysis — decide what is to be tested, through software requirement document review, stakeholder interviews and identification of possible issues that might affect the testing process. Test planning — define the testing strategy, cost and duration, identify objectives, environment, test cases and deliverables, and assign roles to team members. Test case development — identify, write and review the test cases. Test environment setup — specify the software and hardware requirements and set up the test data and environment. Test execution — implement the tests, retest to fix defects, analyse the results and report them. Test cycle closure — check that the testing objectives have been achieved and the software is ready for use, correct defects, create the summary report and collect feedback. Without such a standard process, nothing clearly defines the deliverables and objectives of each testing phase, so the team cannot be sure it is testing the software the right way, cannot be sure the software meets the set requirements, and cannot be sure the software is free of defects; testing effort is spent without any statement of what would count as finished.

**14.** In black box testing the internal structure, design and implementation of the item under test is **not known** to the tester, who supplies inputs and verifies the outputs against the expected outcome; these tests can be functional or non-functional but are usually functional, and the method applies to integration, system and acceptance testing. Example: a tester with no knowledge of a website's internals exercises its pages in a browser with clicks and keystrokes and checks the results. In white box testing the internal structure is **known**; the tester chooses inputs to exercise paths through the code and determines the appropriate outputs, so programming know-how and implementation knowledge are essential, and it is testing beyond the user interface; it applies to unit, integration and system testing. Example: a developer studies the implementation of a field on a web page, works out all legal valid and invalid inputs and all illegal inputs, and verifies the outputs against outcomes derived from the code. Grey box is a combination of the two, with the internal structure **partially known**: internal data structures and algorithms are accessed in order to design the test cases, but the tests are carried out at the user or black-box level, and it is primarily used in integration testing. Example: the code of two modules is studied to design the cases, and the tests themselves are then conducted through the exposed interfaces.

**15.** Slowness when many users shop at once is a matter for **performance testing**, which discovers issues such as network delays and database and client-side processing and checks how the software performs under different load conditions. Failure on older browsers is a matter for **compatibility testing**, which determines how compatible the software is with different environments such as different browsers, platforms and operating systems, so that it performs as expected across every environment the end users will use. The pending security review is a matter for **security testing**, which discovers vulnerabilities and flaws and checks data security, availability, confidentiality and integrity. None is a functional failure because the program does perform its intended function — the prices returned are correct; functional methods ask whether the program does what is expected of it, while these three concern how well it does it, in what environment, and how safely. After the fixes, **system testing** would confirm the point: it tests the system as a whole once all the parts are integrated and confirms that the software meets its technical and functional requirements.
