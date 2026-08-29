# COS_102 — Week 12

*Introduction to Problem Solving · Week 12 (23 – 29 Nov 2026)*

## Most likely to be examined

1. **The six STLC phases, in order** — requirement analysis → test planning → test case development → test environment setup → test execution → test cycle closure. Learn the order as a list; the commonest question gives an activity and asks for its phase.
2. **Entry and exit points** — *each phase has entry and exit points. The entry point is where the phase begins; the exit point is where the phase ends **and all the objectives of the phase have been achieved**.* The italicised clause is the examinable part.
3. **Test case** — *detailed step-by-step instructions on how a test should be performed; it specifies the **test inputs, process and expected outputs**.* (Quote all three.)
4. **Software testing** — *a process to find out if the output the computer is giving is the same as the expected output.* It lets us **locate errors** and **confirm whether requirements are missing**. Carried out **manually or with automated tools**.
5. **Debugging** — *the process of identifying and resolving errors, or bugs, in a software system.* Methods: **code inspection, monitoring, logging, unit testing, integration testing, system testing, debugging tools**. Tools: **debuggers, trace tools, profilers**; named debuggers **Radare2, WinDbg, Valgrind**.
6. **Functional vs non-functional methods** — the whole method taxonomy hangs off this split. Functional = unit, integration, system, acceptance. Non-functional = usability, performance, security, compatibility.
7. **Black box vs white box vs grey box**, including **which levels each applies to** (below). This is the deck's most quotable distinction.
8. **Top-down vs bottom-up integration** — higher-level modules first vs lower-level modules first.

## Software testing life cycle — what each phase owns

- **Requirement analysis** — decide **what is to be tested**. Activities: software requirement document review, stakeholders interview, identification of possible issues that might **affect the testing process**.
- **Test planning** — **testing strategy, cost and duration** defined. Activities: identify testing objectives, testing environment, test cases and test deliverables; **assignment of roles to team members**.
- **Test case development** — test cases clearly defined. Activities: **identification, writing and review** of test cases.
- **Test environment setup** — the **software and hardware requirements** for the test are specified. Activities: test data setup and environment setup.
- **Test execution** — the **actual testing**, using the plans and cases built earlier. Activities: test implementation, **retesting to fix defects**, test results analysis, reporting.
- **Test cycle closure** — checks that the **testing objectives have been achieved and the software is ready for use**. Activities: defect identification and correction, **summary report creation**, feedback collection.

Why an STLC at all: without a standard process that clearly defines the **deliverables and objectives of each phase**, we cannot be sure we are testing the software the right way, that it meets the set requirements, or that it is free of defects.

## Testing methods

**Functional** — test that the program **performs as expected** (e.g. that an addition function adds).
- **Unit** — test data used to check the **execution paths** in the software; mostly carried out **on the functions**. Limitation: it is **practically impossible to test all the execution paths**, and the **number and type of test data are limited**.
- **Integration** — tests **how well different parts work together**. **Top-down**: higher-level modules tested first. **Bottom-up**: lower-level modules tested first.
- **System** — tests the system **as a whole after all parts are integrated**; confirms the software meets the **technical and functional requirements**.
- **Acceptance** — confirms the software meets the **expected requirements**; catches spelling errors as well as **bugs causing major errors and software crashes**.

**Non-functional** — test the non-functional aspects (e.g. user interface) and that the software is secure enough.
- **Usability** — issues found **with the help of users**, who are **observed while using** the software.
- **Performance** — network delays, database and client-side processing; behaviour **under different load conditions**.
- **Security** — vulnerabilities and flaws: **data security, availability, confidentiality, integrity**.
- **Compatibility** — different **browsers, platforms and operating systems**; every environment the end users will use.

**By visibility of the internals**

| | Internals | Applies to |
|---|---|---|
| **Black box** | **not known** to the tester; usually functional though can be non-functional | integration, system, **acceptance** |
| **White box** | **known**; tester chooses inputs to **exercise paths through the code**; programming know-how essential; "testing beyond the user interface" | **unit**, integration, system |
| **Grey box** | **partially known**; access to internal data structures and algorithms **to design the test cases**, but testing at the **user/black-box level** | **primarily integration** |

## Designing the test data (for Saturday's applied hour — not in the deck, but this is how test cases are actually chosen)

- **Equivalence partitioning** — split the input domain into classes the program should treat identically, then take **one value per class**. Rationale: unit testing cannot cover all execution paths, so one representative stands for its whole class.
- **Boundary value analysis** — defects cluster at the **edges** of a partition, so also test the values **just below, at, and just above** each edge. For "valid = 18 to 65 inclusive": 17, 18, 19, 64, 65, 66.
- **What a debugger shows** — set a **breakpoint** at the suspect line, **step** one statement at a time, and **watch** a variable to see its value at each step. That reveals *where* the state first becomes wrong; the **defect** is the code that made it wrong. Common defect classes to name: off-by-one at a boundary, wrong relational operator (`<` vs `<=`), uninitialised/wrongly-reset accumulator, wrong branch order so a later condition is unreachable, integer division.

## Commonly confused

| Pair | The distinction that gets marked |
|---|---|
| **Testing vs debugging** | Testing **finds out whether** the actual output equals the expected output — it detects and locates that something is wrong. Debugging **identifies and resolves** the error. A failing test hands you a symptom; debugging supplies the cause and the fix. |
| **Test planning vs test case development** | Planning defines **strategy, cost, duration, objectives, deliverables and roles**, and *identifies* the test cases. Development is where the cases are **written and reviewed** in step-by-step detail with inputs, process and expected outputs. |
| **Test environment setup vs test planning** | Planning *identifies* the testing environment; setup **specifies the software and hardware requirements** and does the actual test data and environment setup. |
| **Test execution vs test cycle closure** | Execution: implement the tests, **retest to fix defects**, analyse results, report. Closure: confirm the **objectives were achieved and the software is ready for use**, correct outstanding defects, write the **summary report**, collect **feedback**. Execution asks "did it pass?"; closure asks "are we done testing?". |
| **Entry point vs exit point** | Entry is merely where the phase **begins**. Exit is not just where it stops — it requires that **all the objectives of the phase have been achieved**. |
| **System vs acceptance testing** | Both check the whole product against requirements. System testing confirms the **technical and functional requirements** are met once the parts are integrated; acceptance testing confirms the software meets the **expected requirements** of the user side and hunts for spelling errors and for **bugs causing major errors and crashes**. |
| **Unit vs integration testing** | Unit checks **execution paths inside one function/component**. Integration checks **how well different parts work together**. Both appear in the debugging-methods list as well as in the functional-methods list. |
| **Top-down vs bottom-up integration** | Top-down = **higher-level** modules tested first; bottom-up = **lower-level** modules first. Do not confuse with top-down/bottom-up *design* from Week 11. |
| **Black box vs white box** | Not "manual vs automated" and not "tester vs developer" — it is purely whether the **internal structure/design/implementation is known**. White box requires programming know-how and chooses inputs **to exercise paths**; black box works from the outside through inputs and expected outputs. |
| **Grey box vs black box** | Grey box **uses internal knowledge to design the cases** but **executes through the exposed interfaces**. If internal knowledge shaped the test data, it is not black box, even though the run looks identical from outside. |
| **Functional vs non-functional** | Functional asks **does it do the right thing**; non-functional asks **how well** — speed, load, usability, security, compatibility. A correct answer delivered in 40 seconds fails a non-functional test, not a functional one. |
| **Performance vs usability testing** | Performance measures the **system** (network delays, database and client-side processing, load conditions). Usability measures the **users**, who are observed while using the software. |
| **Compatibility vs system testing** | Compatibility varies the **environment** (browsers, platforms, operating systems) with the software fixed. System testing varies nothing — it tests the integrated whole in one environment against requirements. |
