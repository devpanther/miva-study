# COS_102 — Week 9 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 10, not this week. Notes closed. 12 MCQ + 3 short answer, about 30 minutes.*

## Section A — Multiple choice (12)

**1.** The course states that in C, Boolean values are returned as integers. Which statement follows *exactly* from that, and from nothing more?

a) A condition is true when it equals `true`, and `true` is the integer 1, so any value other than 1 makes the condition false
b) A condition is true when its value is **not 0** — so `-7`, `0.5` and `2` are all true, and only `0` is false
c) A condition may only be written with a relational operator, because only a relational operator produces an integer the `if` can test
d) A `bool` variable and an `int` variable are the same type, so `bool` may hold any integer and `if (b == 5)` is a normal way to test one

**2.** `int n = 4; if (n = 0) printf("zero\n"); else printf("nonzero\n");` What is printed, and why?

a) `zero`, because the condition sets `n` to 0 and a condition holding 0 selects the `if` branch
b) `nonzero`, because `n` is 4 when the condition is reached and `=` compares just as `==` does
c) `nonzero`, because the assignment gives the condition the value 0, which is false, so control moves to the `else` block — and `n` is now 0 as a side effect
d) Nothing is printed, because `n = 0` inside a condition is a compile error in C

**3.** Which expression is equivalent to `!(p && q)`?

a) `!p && !q`
b) `!p || !q`
c) `p || q`
d) `!(p) && q`

**4.** A programmer writes `if (0 <= age <= 17) printf("child\n");` and finds that every age prints `child`. Why?

a) Because `age` was never initialised, so it holds a value that happens to satisfy both comparisons
b) Because `<=` includes its boundary, so the two boundaries overlap and every value falls inside one of them
c) Because the expression groups as `(0 <= age) <= 17`: the first comparison collapses to 1 or 0, and both 1 and 0 are `<= 17`, so the whole expression is always 1
d) Because C evaluates chained comparisons right to left, so only `age <= 17` is tested and most ages satisfy it

**5.** `if (count != 0 && sum / count > 10)`. The programmer swaps the two operands to `if (sum / count > 10 && count != 0)`. What has changed?

a) Nothing: `&&` is true only when both sides are true, and that does not depend on which side is written first
b) The program now divides by zero when `count` is 0, because short-circuiting only protects the operand written to the **right** of `&&`
c) The program is now faster, because the arithmetic test is more likely to fail and so ends the evaluation sooner
d) The condition is now always false, because `sum / count` cannot be evaluated and an unevaluated operand counts as 0

**6.** How does `x + 1 > y * 2 && !flag == 0` group?

a) `((x + 1) > (y * 2)) && ((!flag) == 0)`
b) `(x + 1) > ((y * 2) && (!(flag == 0)))`
c) `x + (1 > y) * (2 && !flag) == 0`
d) `((x + 1) > ((y * 2) && !flag)) == 0`

**7.** `int i = 9; do { printf("%d ", i); i++; } while (i < 3);` and `int j = 9; while (j < 3) { printf("%d ", j); j++; }`. What does each print?

a) The first prints `9 `, the second prints nothing
b) Both print nothing, because 9 is not less than 3
c) Both print `9 `, since both loops must run their body before they have a value to test
d) The first prints nothing and the second prints `9 `, since `do-while` tests before the body and `while` tests after it

**8.** What is the output?

```c
int i;
for (i = 1; i <= 4; i++) {
    if (i == 2) continue;
    printf("%d", i);
}
printf("|%d", i);
```

a) `134|4`  b) `134|5`  c) `1234|5`  d) `134|6`

**9.** Which describes the difference between unconditional and conditional branching as the course defines them?

a) Unconditional branching happens at compile time and conditional branching at run time
b) Unconditional branching moves program control without checking any condition, as `goto` does; conditional branching moves it only if a predetermined condition is satisfied, and is also called decision making or selection
c) Unconditional branching always moves control forwards in the file, conditional branching may move it backwards, which is how loops are built
d) Unconditional branching is the ordinary line-by-line execution of a programme, and conditional branching is any departure from it

**10.** What is printed?

```c
int a = -1, b = 5;
if (a > 0)
    if (b > 10) printf("X\n");
else printf("Y\n");
printf("Z\n");
```

a) `Y` then `Z`  b) `Z` only  c) `X` then `Z`  d) `Y` only

**11.** A `switch` on `grade` has `case 'A': printf("Excellent\n"); case 'B': printf("Good\n"); break; default: printf("Other\n");`. With `grade = 'A'`, what is printed?

a) `Excellent` only, since control leaves the `switch` once its case has been performed
b) `Excellent` then `Good`, since control jumps to the matching label and then runs on through the following cases until it meets a `break`
c) `Excellent`, `Good` and `Other`, since `default` runs after every `switch` as a closing step
d) A compile error, since every `case` in a `switch` must end with `break`

**12.** Why is it that `if (score >= 50)` followed by two indented `printf` calls, without braces, prints the second message even when `score` is 20?

a) Because `printf` cannot be suppressed by an `if`; only assignments and loops can be placed under a condition
b) Because an `if` governs exactly one statement, and only curly brackets make several statements into a block, which is then treated like a single statement; the second `printf` is simply the next statement of the programme
c) Because the compiler reads the indentation of the first statement only, and any further line at the same depth is attached to the enclosing function instead
d) Because a condition that is false leaves the `if` unfinished, so control falls into the statements below it until a semicolon-terminated block ends

## Section B — Short answer (3)

**13.** State the course's definitions of a **simple statement** and of a **block**, including what happens at the closing curly bracket. Then explain the property of a block that makes it usable by `if`, `while` and `for` — quote the course's own words — and use that property to explain precisely why this fragment prints `Fail` and `Pass` together for a score of 30:

```c
if (score >= 50)
    printf("Pass\n");
else
    printf("Fail\n");
    printf("Pass\n");
```

**14.** Give the truth tables for `&&`, `||` and `!`, using 1 and 0 as C stores them. Then, using the tables, prove that `!(a && b)` is **not** equal to `!a && !b` by naming a row where they differ, and state the correct equivalent. Finally, explain what short-circuit evaluation guarantees for `&&` and for `||`, and say what happens to the side effects of an operand that is skipped.

**15.** This is meant to print each mark and then the number of passes. It does neither correctly. State exactly what it prints, name **every** fault, and give a corrected version.

```c
#include <stdio.h>

int main(void)
{
    int marks[5] = {41, 55, 70, 39, 62};
    int i, passes = 0;

    for (i = 0; i <= 5; i++);
    {
        printf("%d ", marks[i]);
        if (marks[i] = 50)
            passes++;
    }
    printf("\npasses = %d\n", passes);
    return 0;
}
```

## Answers

**1. b.** *Concept: truth in C is "not zero", not "equal to true".* The course's sentence is that **Boolean values are returned as integers with 1 (or any other number that is not 0) representing true, and 0 representing false** — the parenthesis is the whole content of the rule. (a) inverts it: it makes 1 the *only* true value, which would make `if (-7)` and `if (2)` false, and it is exactly the reasoning behind the bug `if (flag == true)`, which compares with 1 and so rejects every other nonzero value. (c) confuses where a value comes from with what makes it true; `if (n)` needs no relational operator at all, and `if (n % 3)` is a perfectly ordinary condition. (d) draws a conclusion the sentence does not support: `bool` **can only take the values `true` or `false`**, which is stated separately, and testing one against 5 is meaningless.

**2. c — `nonzero`, with `n` left at 0.** *Concept: `=` assigns and yields the value assigned; `==` compares.* `n = 0` stores 0 in `n`, and the value of the whole assignment expression is that same 0. Zero is false, so the `else` branch runs and `nonzero` prints — and `n` has been silently destroyed on the way. (a) gets the assignment right and then reads 0 as true; 0 is the one value that is false. (b) is the belief that `=` and `==` are interchangeable in a condition, which is the fault this question is about: the two differ both in what they yield and in what they leave behind. (d) expects the compiler to reject it; an assignment is an expression with a value, so it is perfectly legal in a condition — which is precisely why the error is dangerous.

**3. b — `!p || !q`.** *Concept: De Morgan — negation flips the operator as well as the operands.* "Not (both p and q)" means "at least one of them is false", which is `!p || !q`. (a) is the standard error, distributing `!` without changing `&&` to `||`; check `p = 0, q = 1`: `!(0 && 1)` is 1, while `!0 && !1` is `1 && 0` = 0, so they differ on that row. (c) drops the negation entirely and happens to agree only on some rows. (d) negates one operand and leaves the other, which agrees with the original only when `q` is true.

**4. c.** *Concept: C has no chained comparison; `0 <= age <= 17` groups left to right.* `0 <= age` is evaluated first and yields **1** or **0**. That integer is then compared with 17, and both 1 and 0 are `<= 17`, so the full expression is 1 for every value of `age`. The correct range test is `age >= 0 && age <= 17`. (a) blames initialisation, but the result does not depend on `age` at all — that is what makes the bug so complete. (b) invents an overlap of boundaries, which would at most affect the values 0 and 17. (d) invents right-to-left evaluation for relational operators; they associate left to right, and even the right-to-left reading would not make the expression constant.

**5. b.** *Concept: short-circuit evaluation makes operand order part of the meaning of `&&`.* `&&` evaluates its left operand first, and **if the left is false the right is never evaluated**. In the original, `count != 0` is false when `count` is 0, so `sum / count` never runs. Once swapped, the division is the left operand and runs unconditionally — with `count == 0` the program divides by zero before the guard is ever reached. (a) states the truth table and stops; the truth table is symmetric but the **evaluation** is not, and it is evaluation that crashes. (c) treats short-circuiting as a speed optimisation, which is the deeper misconception: it is a guarantee about *what is evaluated*, and here it is the difference between running and crashing. (d) invents a rule that an unevaluated operand counts as 0 — an operand that is not evaluated has no value and contributes nothing, because the answer was already settled.

**6. a.** *Concept: precedence order — arithmetic, then `!`, then relational, then equality, then `&&`.* Arithmetic binds tightest, so `x + 1` and `y * 2` form first. `!` binds tighter than any comparison, so `!flag` forms next. Relational `>` and equality `==` then apply, and `&&` — lower than both — joins the two results last. (b) and (d) put `&&` inside a comparison, which reverses the order: `&&` is nearly the lowest-precedence operator here. (c) scatters the operators as though `>` and `&&` bound tighter than `+` and `*`, inverting the whole table. The examinable trap inside this question is `!flag == 0`, which means `(!flag) == 0` and therefore is just another way of writing `flag` — not `!(flag == 0)`.

**7. a.** *Concept: `while` tests before the body, `do-while` after; only `do-while` is guaranteed to execute at least once.* The `do-while` runs its body first — printing `9 ` and making `i` 10 — and only then tests `10 < 3`, which is false, so it stops after one pass. The `while` tests `9 < 3` immediately, finds it false, and never enters the body at all. (b) applies the `while` rule to both and misses the course's own sentence that a `do-while` is **guaranteed to execute at least one time**. (c) applies the `do-while` rule to both, which would make a zero-pass `while` impossible. (d) has the two rules the right way round in the sentence and the wrong way round on the constructs — the classic swap.

**8. b — `134|5`.** *Concept: `continue` skips the rest of the pass but not the increment; and a `for` control variable survives the loop holding the first value that failed the test.* Passes: `i = 1` prints `1`; `i = 2` hits `continue`, so the `printf` is skipped but `i++` still runs; `i = 3` prints `3`; `i = 4` prints `4`; then `i` becomes 5, `5 <= 4` is false, and the loop ends. So `134`, then `|5`. (a) assumes `i` still holds the last value used in the body, forgetting that the loop only stops *after* an increment has produced a failing value. (c) treats `continue` as `if`-less punctuation and prints 2. (d) counts one increment too many, the same off-by-one applied to the exit value.

**9. b.** *Concept: the course's definitions of unconditional and conditional branching.* Word for word: unconditional statements **move program control to either a specific statement or block without checking any condition**, `goto` being the example; with conditional branching **where program control moves to is dependent on if some predetermined conditions are satisfied or not**, and such statements **are also known as decision making or selection statements**. (a) invents a compile-time/run-time split that the course never makes and that is false of `goto`, which branches at run time. (c) invents a direction rule; `goto` may jump either way and loops are built from iteration statements, not from a direction of branch. (d) redefines the ordinary sequential flow as branching, when the course's whole point is that **branching is the departure from** the usual movement from one line to the next.

**10. b — `Z` only.** *Concept: the dangling `else` binds to the nearest preceding unmatched `if`, so an `else` can be skipped entirely by an outer condition it appears to belong to.* Despite its indentation, the `else` belongs to `if (b > 10)`, the nearest unmatched `if`. The fragment therefore reads: *if `a > 0`, execute the whole inner `if-else`.* Here `a` is −1, so `a > 0` is false and the outer `if` skips its single governed statement — and that one statement is the entire inner construct, `else` included. Nothing inside it is reached; `b` is never even examined. Control resumes at `printf("Z\n")`, so the output is `Z` alone. (a) `Y` then `Z` is the answer of a student who binds the `else` to the **outer** `if` on the strength of the indentation: on that reading `a > 0` is false, so the `else` fires and prints `Y`. It is exactly the misconception the question exists to catch, and it is the only wrong answer that a confident, self-consistent trace produces. (c) `X` then `Z` requires `b > 10`, and in any case the inner `if` is never reached. (d) `Y` only makes the same binding error as (a) and additionally forgets that `printf("Z\n")` sits outside every branch and always runs. The repair is braces: write `if (a > 0) { if (b > 10) printf("X\n"); } else printf("Y\n");` if the `else` was meant for the outer `if`.

**11. b — `Excellent` then `Good`.** *Concept: `switch` jumps to a label and falls through until it meets a `break`.* `case 'A'` matches, `Excellent` prints, and because that case has no `break`, control runs straight on into `case 'B'` and prints `Good`; the `break` there ends the `switch`. (a) is the `if-else-if` model applied to a `switch` — an `if-else-if` chain never falls through, a `switch` always does until stopped. (c) treats `default` as an epilogue; `default` is the label used when **no** case matches, and here control was stopped by the `break` before reaching it. (d) expects the compiler to enforce `break`; it does not, which is exactly why a missing `break` is a run-time behaviour change and not a compile error.

**12. b.** *Concept: a construct governs one statement; only braces make several statements into a block, and a block is treated like a single statement.* The course's sentence is that **the group of statements inside a block are treated like a single statement by the computer** — that is the property that lets an `if` control more than one line, and without braces the `if` controls only the statement immediately after it. The second `printf` is not inside anything; it is the next statement in `main`. (a) invents a restriction on `printf`, which is an ordinary statement. (c) treats indentation as syntax; C ignores whitespace entirely. (d) invents a "falls through until a semicolon-terminated block" rule, mixing up `switch` fall-through with the ordinary sequential flow; a false `if` skips its one statement and execution continues at the next.

**13.** *Concept: simple statement, block, and the "treated as one statement" property that makes braces load-bearing.* **Simple statement:** the course's definition is that **a simple statement contains only one expression and it ends with a semicolon**. The semicolon is the terminator, which is why **more than one statement may be written on a single line** and why a single statement may be spread over several lines — layout does not end a statement. **Block:** **a block contains more than one statement contained inside curly brackets**, and **the right curly bracket does not have a semicolon after it**, because the brace itself closes the construct. **The property.** The course states it directly: **the group of statements inside a block are treated like a single statement by the computer.** That is what makes blocks usable by `if`, `while` and `for`: each of these constructs governs exactly **one** statement, so if you want several statements under a condition or inside a loop, you must first turn them into one, and curly brackets are the only way to do that. The course adds the reason it matters for problem solving: **while trying to solve complex problems by breaking them into smaller ones, we need to treat solutions to the smaller problems as single units**, so **solutions from different blocks can be seen as solutions to the smaller problems**. **Applying it to the fragment.** With `score = 30`, `score >= 50` is false, so control moves to the `else`, whose single governed statement is `printf("Fail\n")`. That statement ends at its semicolon, and the `else` ends with it. The next line, `printf("Pass\n")`, is therefore **not part of the `else` at all** — it is simply the next statement of the programme, and it runs whatever the score is. The output for 30 is `Fail` then `Pass`; for 60 it is `Pass` then `Pass`. The indentation says otherwise, but indentation is invisible to the compiler. The fix is braces: `else { printf("Fail\n"); printf("Pass\n"); }` if both belong to the `else`, or leaving the last line unindented if it really is meant to run always. The general rule worth carrying away: **write the braces even for one statement**, because the fault appears only when a second statement is added later, and it is invisible on the page.

**14.** *Concept: the truth tables, De Morgan's laws, and what short-circuiting guarantees.* **The tables**, with 1 for true and 0 for false as C stores them:

| `a` | `b` | `a && b` | `a \|\| b` | `!a` |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 |

Stated as rules: **`&&` is true only when both operands are true** — one false operand settles it; **`||` is false only when both operands are false** — one true operand settles it; **`!` swaps 1 and 0**. **The disproof.** Take the row `a = 0, b = 1`. Then `a && b` is 0, so `!(a && b)` is **1**. But `!a` is 1 and `!b` is 0, so `!a && !b` is `1 && 0` = **0**. The two expressions differ on that row, so they are not equal. (They also differ on `a = 1, b = 0`, by symmetry; they agree only on the two rows where `a` and `b` are the same.) **The correct equivalent** is De Morgan's law: `!(a && b)` is `!a || !b`, and correspondingly `!(a || b)` is `!a && !b`. The rule to memorise is that **pushing a `!` inside brackets flips the operator as well as negating each operand** — "not both" becomes "at least one is not", and "neither" becomes "not either". The same care applies to relational operators inside a negation: `!(x > 5)` is `x <= 5`, not `x < 5`, because the boundary value belongs to the negation. **Short-circuit evaluation.** For `a && b`, C evaluates `a` first; **if `a` is false, `b` is not evaluated at all**, because no value of `b` can make the result anything but 0. For `a || b`, C evaluates `a` first; **if `a` is true, `b` is not evaluated**, because the result is already 1. This is a guarantee of the language, not a compiler optimisation, and programmes are written to depend on it — `if (n != 0 && total / n > 5)` is safe only because the division is never reached when `n` is 0. **Side effects of a skipped operand do not happen.** In `if (i++ > 0 && j++ > 0)`, if `i++ > 0` is false then `j` is **never incremented** — after the statement, `i` has advanced and `j` has not. The practical consequences: put the guard on the left of `&&` and the guarded expression on the right; never hide an increment, an assignment or a function call with an effect inside the right-hand operand; and remember that `&` and `|` are the **bitwise** operators, which always evaluate both sides and so provide no protection at all.

**15.** *Concept: three independent faults — a stray semicolon detaching the loop body, `i <= 5` running past the end of a five-element array, and `=` for `==` in a condition.* **What it prints.** The `for` header ends in a semicolon, so its body is the **empty statement**; the loop does nothing but run `i` from 0 up to 6, and it exits with `i == 6`. The braces below are then an ordinary free-standing block that executes **once**, with `i` equal to 6. `marks[6]` is two positions past the end of a five-element array, so `printf("%d ", marks[6])` prints whatever rubbish sits in that memory — the value is unpredictable and may differ between runs. Then `marks[6] = 50` **assigns** 50 (writing over memory that does not belong to the array), the assignment's value is 50, which is not 0 and therefore true, so `passes++` runs. The output is one junk number, then `passes = 1`. On many machines it will not even reach that: writing past the array can corrupt the stack and crash the programme. **Fault 1 — the stray semicolon after the `for` header.** `for (...);` gives the loop an empty body. The block that follows is not the loop's body; it is a plain block executed once, after the loop has finished. Nothing about the layout reveals this, and the compiler is silent. *Repair:* delete the semicolon so the block becomes the body. **Fault 2 — the off-by-one condition.** `marks` has five elements, valid indices 0 to 4. `i <= 5` gives six passes, indices 0, 1, 2, 3, 4 and **5**, and index 5 is outside the array. The idiom is `i < 5`, which from a start of 0 gives exactly five passes; with `i <= n` the count is always one more than intended. *Repair:* `i < 5`. **Fault 3 — `=` where `==` was meant.** `if (marks[i] = 50)` **stores** 50 into the element and then tests the value 50, which is not 0 and so is always true. Two things go wrong at once: every mark counts as a pass, and the data is destroyed as it is read. *Repair:* `if (marks[i] >= 50)` — note that "a pass" means 50 **or more**, so `==` alone would still be wrong. **Fault 4 (minor) — the counter's meaning.** Once the loop actually runs, `passes` accumulates properly; it printed 1 before only because the false condition fired on the single stray pass. **Corrected version:**

```c
#include <stdio.h>

int main(void)
{
    int marks[5] = {41, 55, 70, 39, 62};
    int i, passes = 0;

    for (i = 0; i < 5; i++)
    {
        printf("%d ", marks[i]);
        if (marks[i] >= 50)
            passes++;
    }
    printf("\npasses = %d\n", passes);
    return 0;
}
```

Output: `41 55 70 39 62 ` then `passes = 3` — 55, 70 and 62 are the marks of 50 or above. Check each fault against a symptom: the semicolon caused the body to run once instead of five times, the `<=` caused it to touch memory it does not own, and the `=` made every mark a pass while overwriting the array. All three compile without a single warning at default settings, which is why they are found by tracing the code by hand rather than by running it.
