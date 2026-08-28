# Saturday — COS_102 code nightly check

*Applied pseudocode only: tracing a fragment line by line to what it actually prints, finding the bug in a fragment and naming the rule or condition it breaks, choosing the fragment that implements a stated task, and the off-by-one and loop-condition traps in FOR, WHILE and REPEAT-UNTIL. No definitions, no lists of constructs, no advantages or steps asked for their own sake — those were Wednesday.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Trace this fragment. What is printed?
```
SET total TO 0
SET i TO 1
WHILE i <= 4
    SET total TO total + i
    SET i TO i + 1
ENDWHILE
PRINT total
```
a) 6  b) 10  c) 15  d) 5

**2.** Trace this fragment. Exactly what appears on the screen?
```
SET n TO 10
REPEAT
    PRINT n
    SET n TO n - 3
UNTIL n < 0
```
a) 10, 7, 4, 1 and then the loop stops
b) 10, 7, 4, 1, −2 and then the loop stops
c) 7, 4, 1 and then the loop stops
d) Nothing at all, because n < 0 is false when the loop is reached

**3.** Which fragment reads the marks of five students, counts how many scored **50 or more**, and prints that count?
a) `SET count TO 0; FOR i = 1 TO 5 { READ mark; IF mark > 50 THEN SET count TO count + 1 ENDIF } ENDFOR; PRINT count`
b) `FOR i = 1 TO 5 { SET count TO 0; READ mark; IF mark >= 50 THEN SET count TO count + 1 ENDIF } ENDFOR; PRINT count`
c) `SET count TO 0; READ mark; FOR i = 1 TO 5 { IF mark >= 50 THEN SET count TO count + 1 ENDIF } ENDFOR; PRINT count`
d) `SET count TO 0; FOR i = 1 TO 5 { READ mark; IF mark >= 50 THEN SET count TO count + 1 ENDIF } ENDFOR; PRINT count`

**4.** Trace this fragment. What is printed?
```
SET s TO 0
FOR k = 2 TO 8
    SET s TO s + k
ENDFOR
PRINT s
```
a) 27  b) 33  c) 35  d) 44

**5.** The week's problem states that the tuition fee is increased **if more than seven students pass**. The course's own solution ends with the lines `if seven or more students passed` / `print "increase tuition"`. What, if anything, is wrong?
a) Nothing is wrong: "seven or more students passed" and "more than seven students pass" pick out exactly the same cases
b) The condition is one student too generous — it raises the fee when exactly seven passed, which the problem excludes; it should test that passes is greater than seven
c) The condition should count failures rather than passes, since a decision about raising fees depends on how many students did not pass
d) The condition should compare passes with the number of students rather than with a fixed number, since seven means nothing without the class size

**6.** This fragment is faulty. What exactly is wrong with it?
```
SET count TO 1
SET total TO 0
WHILE count <= 10
    READ x
    SET total TO total + x
ENDWHILE
PRINT total
```
a) `total` is never given a starting value, so the first addition has nothing to add to
b) The `READ x` belongs before the loop, so that the WHILE has a value of x to test on its first pass
c) The construct should have been REPEAT-UNTIL, because a loop that must read at least one value cannot be written as a WHILE
d) Nothing inside the loop ever changes `count`, so `count <= 10` stays true, the loop never ends and PRINT is never reached

**7.** A mark of **85** is entered. What does this fragment print, and is every branch of it usable?
```
READ mark
IF mark >= 50 THEN
    PRINT "Pass"
ELSE
    IF mark >= 70 THEN
        PRINT "Distinction"
    ELSE
        PRINT "Fail"
    ENDIF
ENDIF
```
a) "Distinction", and every branch of the fragment is reachable for some mark
b) "Fail", because the ELSE is taken whenever a more specific test appears further down the fragment
c) "Pass", and "Distinction" can never be printed for any mark, since anything of 70 or more is already 50 or more
d) "Pass" and then "Distinction", because after the first PRINT the flow carries on into the inner IF

**8.** Which WHILE loop does exactly what this REPEAT-UNTIL does, for any sequence of numbers the user types?
```
SET t TO 0
REPEAT
    READ n
    SET t TO t + n
UNTIL n = 0
PRINT t
```
a) `SET t TO 0; WHILE n <> 0 { READ n; SET t TO t + n } ENDWHILE; PRINT t`
b) `SET t TO 0; READ n; WHILE n <> 0 { SET t TO t + n; READ n } ENDWHILE; PRINT t`
c) `SET t TO 0; READ n; WHILE n = 0 { SET t TO t + n; READ n } ENDWHILE; PRINT t`
d) `SET t TO 0; READ n; WHILE n <> 0 { READ n; SET t TO t + n } ENDWHILE; PRINT t`

**9. (explain why)** Trace this fragment on the inputs **4, 7, 10, −1**, showing the value of every variable after each pass, and give what is printed.
```
SET sum TO 0
SET count TO 0
READ x
WHILE x <> -1
    SET sum TO sum + x
    SET count TO count + 1
    READ x
ENDWHILE
SET avg TO sum / count
PRINT avg
```
Then say what happens if the very first value typed is **−1**, explain why, and give the smallest change that fixes it. Finally, explain why −1 is not included in `sum` even though it is read.

**10. (explain why)** Here is the course's own solution, as printed in the deck:
```
Initialise passes to zero
Initialise failures to zero
initialise student to one
WHILE student counter is active
       input the next exam result
       IF the student passed THEN
             add one to passes
       ELSE
             add one to failures
add one to student counter
print the number of passes
print the number of failures
if seven or more students passed
       print "increase tuition"
```
Name **four** faults in it — one of logic, and three of the rules and constructs the week requires — saying for each what a reader or a programmer converting it would get wrong. Then rewrite it correctly.

**11. (explain why)** Take this loop and the REPEAT-UNTIL written to do the same job:
```
SET i TO 5                          SET i TO 5
WHILE i < 5                         REPEAT
    PRINT i                             PRINT i
    SET i TO i + 1                      SET i TO i + 1
ENDWHILE                            UNTIL i >= 5
```
State exactly what each one prints, and explain the mechanism that makes them differ. Then change one line so that the two become identical in output, and state the general rule for when swapping WHILE for REPEAT-UNTIL is safe. Finally, say which construct you would choose for "keep asking for the PIN until the right one is typed" and why.

**12. (explain why)** This fragment was written to print the **first ten multiples of 3**.
```
SET k TO 3
WHILE k < 30
    PRINT k
    SET k TO k + 3
ENDWHILE
```
Say exactly what it prints and how many values that is, explain where the missing one goes, and give **two** different corrections — one that changes the condition, one that uses a FOR loop instead. Then state the rule for counting the passes of `FOR i = a TO b`, and use it to say how many times `FOR i = 3 TO 30` would run.

---

## Answers

**1. b — 10.** *Concept: tracing a pre-tested counting loop, and the inclusive `<=` bound.* i = 1: total = 1, i = 2. i = 2: total = 3, i = 3. i = 3: total = 6, i = 4. i = 4: total = 10, i = 5. Now 5 <= 4 is false, so the loop ends and 10 is printed — the sum 1 + 2 + 3 + 4. (a) 6 is the off-by-one from reading `i <= 4` as `i < 4`, so the last pass is dropped; it is the single commonest slip in the topic and it always loses exactly the largest term. (c) 15 comes from letting the pass with i = 5 run, i.e. from testing after the body instead of before it. (d) 5 is the final value of **i**, printed by a student who has traced the loop correctly and then read the wrong variable — worth noticing, since `i` and `total` end the loop holding very different things.

**2. a — 10, 7, 4, 1.** *Concept: a post-tested loop prints before it tests, and UNTIL stops when its condition becomes true.* Pass 1 prints 10, then n = 7; 7 < 0 is false, so round again. Pass 2 prints 7, n = 4. Pass 3 prints 4, n = 1. Pass 4 prints 1, n = −2; now −2 < 0 is true, so the loop stops. Four lines. (b) adds −2 to the list, which is the error of thinking the last test is preceded by another PRINT — but the decrement is the **last** statement of the body, so the value that finally satisfies the condition is never printed. (c) prints after decrementing, i.e. reads the two body lines in the wrong order. (d) is the important one: it reads `UNTIL n < 0` as though it were `WHILE n < 0` and, finding the condition false at the start, concludes the body is skipped. Both halves are wrong — REPEAT-UNTIL tests at the **ending/bottom**, so the body always runs **at least once**, and it **stops** when the condition turns true rather than running while it is true.

**3. d.** *Concept: choosing an implementation — where the accumulator is initialised, where the read happens, and which comparison the words "50 or more" name.* (d) initialises `count` once before the loop, reads a fresh mark on each of the five passes, tests `mark >= 50`, and prints after the loop. Each of the others breaks exactly one of those. (a) tests `mark > 50`, so a student scoring exactly 50 is not counted — "50 or more" is `>=`, and the boundary value is the only input that distinguishes the two fragments, which is why it must be the one you test on. (b) moves `SET count TO 0` **inside** the loop, so the counter is wiped at the start of every pass and the printed value can only ever be 0 or 1 — the plausible-looking output is what makes this bug survive; only tracing with more than one qualifying mark exposes it. (c) reads a single mark **before** the loop and never reads again, so the same mark is tested five times and the answer is either 0 or 5.

**4. c — 35.** *Concept: FOR bounds are inclusive at both ends.* k takes the values 2, 3, 4, 5, 6, 7, 8 — that is 8 − 2 + 1 = 7 passes — and 2 + 3 + 4 + 5 + 6 + 7 + 8 = 35. (a) 27 is the sum 2…7, from treating the upper bound as exclusive, as a `for` loop in C or Java would with `<`. (b) 33 is the sum 3…8, from treating the lower bound as the value **before** the first pass, so that the loop is imagined to increment before its first use of k. (d) 44 is the sum 2…9, one pass too many — the same error as (a) in the opposite direction. Only one of the four sums can be produced by a correct reading of `FOR k = 2 TO 8`, and the arithmetic check is that the answer must be 7 terms wide.

**5. b.** *Concept: an off-by-one in a boundary condition — the fragment and the specification disagree on exactly one case.* "More than seven passed" is `passes > 7`, satisfied first at eight. "Seven or more passed" is `passes >= 7`, satisfied first at seven. They agree on every other value and differ on exactly one, so the fault is invisible on any test data except a class in which precisely seven students pass — which is what makes the deck's own step 7, **testing and refining**, worth doing on the boundary values rather than on convenient ones. (a) is the reading that treats "seven or more" and "more than seven" as the same English phrase; they differ by one case. (c) redirects the test to `failures`, which is not equivalent — failures tells you nothing about passes unless the class size is known, and the requirement is stated in terms of passes. (d) is a real design thought (a fixed threshold of seven is odd for a class of any size) but it is not the fault: it changes the specification instead of implementing it, and the specification says seven.

**6. d.** *Concept: a loop whose condition is never affected by its body.* `count` is set to 1 before the loop and nothing between `WHILE` and `ENDWHILE` alters it, so `count <= 10` is true on every test, the loop repeats for ever and `PRINT total` is unreachable. The missing line is `SET count TO count + 1` as the last statement of the body. The general rule: **the body of a loop must change something the condition tests**, or the loop cannot end — the same fault as last week's flowchart whose back-arrow was always taken. (a) is false: `SET total TO 0` is the second line, and this distractor catches students who look for an uninitialised variable because that is the other bug they have been taught to hunt. (b) describes a genuine pattern — the read-ahead needed when a WHILE tests the value being read — but this loop's condition tests `count`, not `x`, so nothing needs reading before it. (c) states a real difference between the constructs and then draws a false conclusion: a WHILE can perfectly well read values, and swapping to REPEAT-UNTIL would leave the counter just as unchanged, so the loop would still never end.

**7. c.** *Concept: ordering nested conditions — a broader test placed first makes the narrower one unreachable.* With mark = 85, the first test `mark >= 50` is true, so `"Pass"` is printed and the whole ELSE part — which contains the entire inner IF — is skipped. Worse, this is not special to 85: the inner IF is only ever reached when `mark >= 50` is **false**, that is when mark < 50, and no such mark can satisfy `mark >= 70`. So `"Distinction"` is dead code for every possible input. The fix is to order the tests from the most restrictive downwards: test `mark >= 70` first, then `mark >= 50`, then Fail. (a) is the answer of a student who reasons about what the author meant rather than tracing what is written. (b) treats ELSE as though it were chosen by looking ahead at the remaining tests; ELSE is taken only when its own IF's condition is false. (d) has the flow continuing into the ELSE part after executing the THEN part, which would make every IF-THEN-ELSE run both of its sequences — exactly one runs, which is what THEN and ELSE mean.

**8. b.** *Concept: converting a post-tested loop to a pre-tested one — negate the condition and duplicate the read.* Two changes are needed together. First, `UNTIL n = 0` stops when the condition is **true**, so the WHILE that keeps going must test the **negation**, `n <> 0`. Second, WHILE tests **before** the first pass, so it needs a value of n to test: the `READ` must appear once **before** the loop and again as the **last** statement of the body, so that every value read is tested before being used. Checking both on the input 5, 8, 3, 0: the REPEAT version accumulates 5, 13, 16, then reads 0, adds it (harmlessly) and stops, printing 16; (b) reads 5, adds it, reads 8, adds it, reads 3, adds it, reads 0, and the test ends the loop — printing 16. (a) drops the read-ahead, so the WHILE tests an n that has never been given a value; this is the commonest form of the mistake, and it is invisible in languages that quietly default a variable to zero, where the loop would simply never run. (c) forgets the negation and writes `WHILE n = 0`, which stops on the very first non-zero value — the direct translation of "until" as "while". (d) keeps the read-ahead but puts the body's READ **first**, so the value read before the loop is overwritten and never added: the total silently loses the first number, and the fragment still runs and still prints a plausible number.

**9.** *Concept: sentinel-controlled input, and the guard that a division by a counter always needs.* **Trace.** sum = 0, count = 0. `READ x` gives x = 4. Test 4 ≠ −1, true. Pass 1: sum = 4, count = 1, read x = 7. Test true. Pass 2: sum = 11, count = 2, read x = 10. Test true. Pass 3: sum = 21, count = 3, read x = −1. Test −1 ≠ −1 is **false**, so the loop ends with sum = 21, count = 3. avg = 21/3 = **7**, and 7 is printed. **First value −1.** The loop's test fails immediately, so the body never runs and both sum and count keep their initial value of 0. The next line computes 0/0 — a division by zero, which has no value; a real program crashes or produces an error here, and on paper the pseudocode simply does not describe anything. Notice what has gone wrong: the loop itself is correct, and the fault only appears in the line **after** it, because that line assumes the loop ran at least once. **The smallest fix** is to guard the division rather than change the loop: `IF count > 0 THEN SET avg TO sum / count; PRINT avg ELSE PRINT "no data" ENDIF`. Changing the WHILE to a REPEAT-UNTIL would be the wrong fix, since forcing at least one pass would count the sentinel as data. **Why −1 is not in the sum.** The order of the three body statements is the whole answer: the value that reaches `SET sum TO sum + x` is always the one read on the **previous** trip — either by the `READ x` before the loop, for the first pass, or by the `READ x` at the foot of the body afterwards. The sentinel is read by that last `READ x`, and control then goes to the test, which sends the flow out of the loop before any statement uses it. This is the standard read-ahead arrangement, and it is why the read appears twice: it lets every value be tested before it is used, which is exactly what a sentinel requires.

**10.** *Concept: reading a pseudocode as written rather than as intended — one logic fault and three that break the week's own rules.* **(i) Logic: an off-by-one in the threshold.** `if seven or more students passed` raises the fee when exactly seven have passed, but the problem says the fee rises only if **more than seven** pass. A programmer converting this writes `passes >= 7` and produces software that overcharges a class in which exactly seven passed. Correct: `IF passes > 7 THEN`. **(ii) The counter is incremented outside the loop.** `add one to student counter` is written flush with the other unindented lines, so by the indentation it belongs after the WHILE, not inside it. Read literally, nothing in the loop body changes the student counter, so `WHILE student counter is active` can never turn false and the loop never ends. This is the same failure as question 6, and it is invisible only because the reader silently supplies the intention. **(iii) No `ENDIF` and no `ENDWHILE`.** The skeletons the deck itself gives are `IF … THEN / sequence 1 / ELSE / sequence 2 / ENDIF` and `WHILE condition / sequence / ENDWHILE`. Without the closers, nothing marks where the ELSE branch stops and where the loop body stops, so a reader cannot tell whether `print the number of passes` is inside the loop (printing a running total on every pass) or after it (printing once). **(iv) The condition is ambiguous, and three keywords are lowercase.** "student counter is active" is never defined — active until what? — and step 6 requires the constructs to describe the steps **without ambiguity**; the counter must be tested against something the algorithm has, namely the number of students. `initialise`, `if` and `print` also break the rule that keywords are written in capital letters, which is what tells a reader that `IF` is a construct and not the English word. **A correct version:**
```
Algorithm:   Determine whether tuition should be increased
Description: accepts the students' examination results, counts the passes and
             the failures, and decides whether the tuition fee is raised
Inputs:      the number of students, and each student's result
Outputs:     number of passes, number of failures, tuition decision

SET passes TO 0
SET failures TO 0
SET student TO 1
READ number_of_students
WHILE student <= number_of_students
    READ result
    IF result is a pass THEN
        SET passes TO passes + 1
    ELSE
        SET failures TO failures + 1
    ENDIF
    SET student TO student + 1
ENDWHILE
PRINT passes
PRINT failures
IF passes > 7 THEN
    PRINT "increase tuition"
ENDIF
```
Checked on ten students with results P F P P P F P P P P: the loop runs for student = 1…10 and ends when student becomes 11; passes = 8, failures = 2, and 8 + 2 = 10 confirms that every result was counted exactly once. 8 > 7, so "increase tuition" is printed; with one pass fewer, `7 > 7` is false and nothing is printed — the case the deck's version gets wrong.

**11.** *Concept: pre-test versus post-test — the difference is visible only on the pass that would not have happened.* **What each prints.** The WHILE prints **nothing**: `i` is 5 before the loop, `5 < 5` is false, and the test comes first, so the body is never entered. The REPEAT-UNTIL prints **5**: the body runs before any test, so it prints 5 and sets i to 6, and only then tests `6 >= 5`, which is true, and stops. **Mechanism.** WHILE puts the condition **at the beginning/top**, so the number of passes may be **zero**; REPEAT-UNTIL puts it **at the ending/bottom**, so the number of passes is **at least one**. The two loops also read their conditions in opposite senses — WHILE continues while its condition is true, REPEAT-UNTIL stops when its condition becomes true — which is why the pair here carries `i < 5` and `i >= 5` rather than the same expression twice. **Making them identical.** Change the first line of both to `SET i TO 1`. Then the WHILE prints 1, 2, 3, 4 (stopping when i reaches 5) and the REPEAT prints 1, 2, 3, 4 (stopping when i reaches 5), and no input can separate them. **The general rule:** swapping WHILE for REPEAT-UNTIL is safe exactly when the loop's condition is **guaranteed to permit the first pass** before the loop is reached — that is, when the WHILE's condition is known to be true on entry. If it can be false on entry, the REPEAT-UNTIL will execute the body once when the WHILE would not, and any read, print, increment or division in that body happens once too often. **The PIN.** Use **REPEAT-UNTIL**: `REPEAT / DISPLAY "Enter PIN" / READ pin / UNTIL pin = correct_pin`. The prompt must be issued at least once — there is nothing to test before the first PIN has been typed — and REPEAT-UNTIL is the construct that guarantees exactly that. Writing it as a WHILE forces a read-ahead before the loop, so the prompt and the read appear twice in the fragment.

**12.** *Concept: a strict inequality as the boundary of a counting loop, and the b − a + 1 rule.* **What it prints:** 3, 6, 9, 12, 15, 18, 21, 24, 27 — **nine** values. Trace the end: after printing 27, k becomes 30 and `30 < 30` is false, so the loop stops before printing 30. The tenth multiple of 3 is 30 itself, and it is lost to the strict `<`: the condition excludes the value that ought to have been the last one printed. **Correction 1 — change the condition** to `WHILE k <= 30`, which lets the pass with k = 30 run and gives 3, 6, …, 30, ten values. (`WHILE k < 31` and `WHILE k < 33` would work too, but they hide the boundary behind an arbitrary number, and step 6 asks for clear, unambiguous writing.) **Correction 2 — count the multiples instead of the value:** `FOR i = 1 TO 10 { PRINT 3 * i } ENDFOR`. This is the better fragment where the count is what the specification states, because the number 10 in the code is the number 10 in the requirement, and no arithmetic connects the two: the off-by-one is impossible to write. It also shows the choice the week sets up — use FOR when the number of passes is known before entry, and WHILE when it is not. **The counting rule:** `FOR i = a TO b` runs the body **b − a + 1** times, because both bounds are inclusive. So `FOR i = 3 TO 30` runs **30 − 3 + 1 = 28** times — not 27, and not 30. The check that catches the error every time is to try the rule on a one-pass loop: `FOR i = 3 TO 3` must run once, and 3 − 3 + 1 = 1.
