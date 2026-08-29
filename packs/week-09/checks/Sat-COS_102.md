# Saturday — COS_102 code nightly check

*Code work only, on this week's material: tracing `if`, `if-else`, `if-else-if`, `switch`, `while`, `do-while` and `for` by hand and stating the exact output, counting loop passes and knowing what a control variable holds after the loop, and finding the four faults that compile in silence — the off-by-one condition, the dangling `else`, `=` written for `==` (and `>` for `>=`), and a loop condition that never becomes false. No definitions of branching, no truth tables to write out, no lists of when a construct is entered — those were Wednesday.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** What is printed?

```c
int i, total = 0;
for (i = 1; i < 5; i++)
    total = total + i;
printf("%d %d\n", total, i);
```

a) `10 5`  b) `10 4`  c) `15 5`  d) `15 6`

**2.** What is printed?

```c
int x = 0;
if (x = 2)
    printf("A\n");
else
    printf("B\n");
printf("%d\n", x);
```

a) `A` then `2`
b) `B` then `0`
c) `B` then `2`
d) `A` then `0`

**3.** What is printed?

```c
int score = 45, bonus = 0;
if (score >= 40)
    if (bonus > 0)
        printf("Merit\n");
else
    printf("Fail\n");
printf("Done\n");
```

a) `Done` only
b) `Fail` then `Done`
c) `Merit` then `Done`
d) `Fail` only

**4.** What is printed?

```c
int n = 10;
do {
    printf("%d ", n);
    n = n - 3;
} while (n > 10);
printf("| %d\n", n);
```

a) `| 10`  b) `10 7 4 1 | -2`  c) `10 | 7`  d) `10 | 10`

**5.** What is printed?

```c
int i, s = 0;
for (i = 0; i < 3; i++)
    s = s + i;
    printf("%d ", s);
printf("\n");
```

a) `0 1 3 `  b) `0 1 2 `  c) `3 `  d) `6 `

**6.** What is printed?

```c
int day = 2;
switch (day) {
    case 1: printf("Mon ");
    case 2: printf("Tue ");
    case 3: printf("Wed "); break;
    case 4: printf("Thu ");
    default: printf("Other ");
}
```

a) `Tue `
b) `Mon Tue Wed `
c) `Tue Wed Thu Other `
d) `Tue Wed `

**7.** What is printed?

```c
int i = 0, j = 0, k;
k = (i++ > 0) && (j++ > 0);
printf("%d %d %d\n", i, j, k);
```

a) `1 1 0`  b) `1 0 0`  c) `0 0 0`  d) `1 1 1`

**8.** What does this do?

```c
int i;
for (i = 0; i != 10; i += 3)
    printf("%d ", i);
```

a) Prints `0 3 6 9 ` and stops, because the loop ends as soon as `i` passes 10
b) Prints nothing, because `i` starts at 0 and the condition `0 != 10` is false at the first test
c) Prints `0 3 6 9 12 15 ` and onwards without ever stopping, because `!=` requires `i` to land exactly on 10 and a step of 3 steps straight over it
d) Does not compile, because the condition of a `for` loop must use a relational operator such as `<` or `>`

**9. (explain why)** State the **exact** output of this programme, line for line. Then say how many times the **inner** loop body runs in total, state the values `i` and `j` hold on the last line and explain precisely why each holds that value, and say what the total number of inner passes becomes if `j = i` is changed to `j = 1`.

```c
#include <stdio.h>

int main(void)
{
    int i, j;
    for (i = 1; i <= 3; i++) {
        for (j = i; j <= 3; j++)
            printf("%d%d ", i, j);
        printf("\n");
    }
    printf("i=%d j=%d\n", i, j);
    return 0;
}
```

**10. (explain why)** This is meant to print `A` for 70 and above, `Pass` for 50 to 69, and `Fail` below 50. State exactly what it prints for `score = 45` and for `score = 60`, name the fault and say which `if` the `else` actually belongs to, and give a corrected version that behaves as intended for 45, 60 and 85.

```c
#include <stdio.h>

int main(void)
{
    int score = 45;

    if (score >= 50)
        if (score >= 70)
            printf("A\n");
    else
        printf("Fail\n");

    printf("done\n");
    return 0;
}
```

**11. (explain why)** State exactly what this prints. Then say what happens if the initial value of `count` is changed from 1 to 0, and explain why. Rewrite the loop condition so that it is safe for **any** starting value and any step, and give the output of your rewritten version for both starting values, 1 and 0.

```c
#include <stdio.h>

int main(void)
{
    int count = 1, total = 0;

    while (count != 10)
    {
        total = total + count;
        count = count + 3;
    }

    printf("%d %d\n", total, count);
    return 0;
}
```

**12. (explain why)** This is meant to print `high` when the average `total / n` is 30 or more, and `low` otherwise. Say what happens when it runs as written, and why. Then find the **second** fault, which only shows up when `n` is 3, and say what the programme prints in that case and what it should print. Give a fully corrected `if` line. Finally, say what would change if `&&` were replaced by `&`, and what `if (!n == 0)` would mean.

```c
#include <stdio.h>

int main(void)
{
    int n = 0, total = 90;

    if (total / n > 30 && n != 0)
        printf("high\n");
    else
        printf("low\n");

    return 0;
}
```

---

## Answers

**1. a — `10 5`.** *Concept: a `for` with `i < b` runs `b - a` passes, and the control variable survives the loop holding the first value that **failed** the test.* The body runs for `i` = 1, 2, 3, 4, so `total` = 1 + 2 + 3 + 4 = **10**. Then `i++` makes `i` 5, the test `5 < 5` fails, and the loop ends — so `i` is **5** on the `printf` line, not 4. (b) `10 4` is the belief that the control variable keeps the last value the body used; it cannot, because the only way out of the loop is through an increment followed by a failed test. (c) `15 5` adds 5 into the total, i.e. reads the condition as `i <= 5`; that is the off-by-one, and note that it gets the final `i` right for the wrong reason. (d) `15 6` makes both mistakes at once. The rule worth carrying: from a start of `a` with step 1, `i < b` gives `b - a` passes and leaves `i` at `b`; `i <= b` gives `b - a + 1` passes and leaves `i` at `b + 1`.

**2. a — `A` then `2`.** *Concept: `=` assigns and its value is the value assigned, so `if (x = 2)` is always true and destroys `x`.* `x = 2` stores 2 in `x`; the value of that assignment expression is 2, which is not 0, so the condition is **true** and `A` prints. The `else` is unreachable for any right-hand side except 0. `x` now holds **2**, so the second line prints 2. (b) is the reading of `=` as `==`: `0 == 2` would be false, giving `B`, and `x` would still be 0 — this is the answer of someone who has not noticed that a single character is different. (c) spots the assignment but then tests the *old* value of `x`; the assignment happens first and the condition tests its result, not what was there before. (d) gets the branch right and forgets that the variable has been overwritten — the side effect is half the damage. The repair is `if (x == 2)`; the habit that prevents it is to read every condition asking "does this compare, or does it store?"

**3. b — `Fail` then `Done`.** *Concept: the dangling `else` binds to the nearest preceding unmatched `if`, so an `else` written under the outer `if` can fire on the inner one's condition.* The `else` belongs to `if (bonus > 0)`, whatever the indentation suggests. Trace it: `score >= 40` is `45 >= 40`, true, so control enters the inner construct. `bonus > 0` is `0 > 0`, false, so the inner `else` runs and prints **`Fail`**. Then `printf("Done\n")`, which is outside everything, prints `Done`. So a student with a score of 45 and no bonus is told they failed, on the strength of their bonus. (a) `Done` only is the indentation reading — bind the `else` to the outer `if`, find `score >= 40` true, conclude the `else` is skipped and the inner `if` prints nothing. It is the misconception the question exists to catch and it is the only wrong answer a confident trace produces. (c) `Merit` needs `bonus > 0`. (d) `Fail` only forgets that `Done` is outside every branch and always runs. The repair is braces: `if (score >= 40) { if (bonus > 0) printf("Merit\n"); } else printf("Fail\n");`.

**4. c — `10 | 7`.** *Concept: a `do-while` tests **after** the body, so it always runs at least once even when the condition is false from the outset.* The body executes: `10 ` is printed and `n` becomes 7. Only then is `n > 10` tested — `7 > 10` is false — so the loop stops after exactly one pass and `| 7` is printed. Note that the condition was *already* false at the start (`10 > 10` is false), and it made no difference. (a) `| 10` applies the `while` rule and tests before the body; that is what a `while` would print, and confusing the two is the whole point of the question. (b) runs the loop while the condition is *false*, i.e. reads `while (n > 10)` as an exit condition rather than a continue condition — the loop iterates **while the condition is true**. (d) runs the body once but forgets that the body also changed `n` before the `printf` was reached.

**5. c — `3 `.** *Concept: a loop governs exactly one statement; without braces the second line is not in the loop, and indentation is invisible to the compiler.* The `for` body is `s = s + i;` alone. Passes at `i` = 0, 1, 2 give `s` = 0 + 1 + 2 = **3**. The loop then ends, and `printf("%d ", s)` executes **once**, printing `3 `. (a) `0 1 3 ` is the indentation reading — the printf inside the loop, printing `s` after each addition. It is the answer this question is built to separate out, because it requires an otherwise correct trace. (b) `0 1 2 ` prints `i` rather than the running total, and also puts the printf in the loop. (d) `6 ` sums 1 + 2 + 3, the off-by-one that comes from reading `i < 3` as `i <= 3`. The fix, and the habit: write the braces even when the body is one line, because the fault appears only when a second line is added and it is invisible on the page.

**6. d — `Tue Wed `.** *Concept: a `switch` jumps to the matching label and then falls through the following cases until it meets a `break`.* `day` is 2, so control jumps to `case 2:` and prints `Tue `. That case has **no `break`**, so control does not leave the `switch`; it runs straight on into `case 3:`, prints `Wed `, and meets the `break` there, which ends the `switch`. (a) `Tue ` is the `if-else-if` model applied to a `switch` — an `if-else-if` chain never falls through, a `switch` always does until stopped, and the missing `break` is therefore a behaviour change and not a formatting slip. (c) continues past the `break`, which is exactly what a `break` prevents; `Thu ` and `Other ` are unreachable here. (b) falls through **backwards** into `case 1:`; a `switch` enters at the matching label and only ever proceeds forwards, so `Mon ` cannot print when `day` is 2.

**7. b — `1 0 0`.** *Concept: short-circuit evaluation — when the left operand of `&&` is false the right operand is never evaluated, so its side effects never happen.* `i++ > 0` uses the **current** value of `i`, which is 0, so the comparison is `0 > 0` = false; the increment still happens, leaving `i` = **1**. Because the left operand is false, the result of `&&` is already 0 and the right operand `(j++ > 0)` is **not evaluated at all** — so `j` is never incremented and stays **0**. `k` is **0**. (a) `1 1 0` is the answer of someone who knows the truth table but not the evaluation rule: they get the result right and both increments wrong, which is exactly the split this question is testing. (c) `0 0 0` forgets that `i++` increments even when the comparison it feeds is false. (d) `1 1 1` gets the truth value backwards as well. The practical lesson: never put an assignment, increment or a call with an effect in the right-hand operand of `&&` or `||`, because whether it runs depends on the left one.

**8. c — it prints `0 3 6 9 12 15 ` and never stops.** *Concept: `!=` as a loop condition demands an exact landing; a step that does not divide the gap steps straight over the target.* `i` takes the values 0, 3, 6, 9, 12, 15, … and is compared with 10 each time. It is never **equal** to 10, so `i != 10` is never false and the loop never terminates. (a) is the belief that `!=` behaves like `<` and stops once the target is passed; it does not — it tests equality and nothing else, and 12 is just as unequal to 10 as 0 is. This is the misconception the whole question is about, and it is invisible if you only test the loop with a step of 1. (b) has the condition backwards: `0 != 10` is **true**, so the loop is entered; a loop iterates **while** its condition is true. (d) invents a syntax rule; `!=` is a perfectly legal condition and the compiler issues no warning, which is why the fault reaches run time. The safe form is `i < 10`, which stops for any step size because it tests a boundary rather than a single value.

**9.** *Concept: tracing nested loops, counting passes, and knowing what both control variables hold after the loops end.* **The exact output:**
```
11 12 13 
22 23 
33 
i=4 j=4
```
(Each of the first three lines ends with a trailing space before the newline, because the newline is printed by the separate `printf("\n")` after the inner loop.) **The trace.** The outer loop starts with `i = 1`. The inner loop starts at `j = i`, so: with `i = 1`, `j` runs 1, 2, 3, printing `11 `, `12 `, `13 `; `j` then becomes 4, `4 <= 3` fails, the inner loop ends and the newline is printed. With `i = 2`, the inner loop starts at `j = 2` and runs 2, 3, printing `22 `, `23 `, then the newline. With `i = 3` it starts at `j = 3` and runs once, printing `33 `, then the newline. `i` then becomes 4, `4 <= 3` fails, and the outer loop ends. **The inner body runs 3 + 2 + 1 = 6 times** — the triangle shape comes entirely from `j = i`, which restarts the inner loop one step further along on every outer pass. **The final values, and why.** `i = 4` and `j = 4`. Both hold the **first value that failed their test**, because the only way out of a `for` loop is: body, increment, test fails. `i` reached 4 and failed `i <= 3`. `j` is 4 because the inner loop was **re-initialised on every outer pass** (`j = i` runs each time the inner `for` is reached) and each time it climbed until `j <= 3` failed, which is at `j = 4`; the last of those runs was the one with `i = 3`, which set `j` to 3 and then incremented it once to 4. The important point is that `j` survives the inner loop and is still in scope afterwards — it was declared in `main`, not in the `for` header — which is why the last line can print it at all. **If `j = i` becomes `j = 1`,** the inner loop runs from 1 to 3 on every outer pass, so it runs **3 × 3 = 9** times, and the output becomes the full 3 × 3 grid `11 12 13 / 21 22 23 / 31 32 33`. The final values are unchanged at `i = 4`, `j = 4`.

**10.** *Concept: the dangling `else` — an `else` binds to the nearest preceding unmatched `if`, regardless of indentation, and the fault shows up in two opposite ways.* **What it prints.** For `score = 45`: the outer condition `45 >= 50` is **false**, so the outer `if` skips its one governed statement — and that single statement is the **entire inner `if-else`**, `else` included. Nothing inside is reached; `score >= 70` is never even tested. The programme prints only:
```
done
```
For `score = 60`: `60 >= 50` is true, so control enters the inner construct; `60 >= 70` is false, so the inner `else` runs and prints `Fail`, then `done`:
```
Fail
done
```
So the programme has failed in both directions at once — a genuinely failing score of 45 is told nothing, and a passing score of 60 is told it failed. **The fault, and which `if` owns the `else`.** The `else` belongs to `if (score >= 70)`, the **nearest preceding unmatched `if`**, not to `if (score >= 50)` as the indentation claims. C ignores whitespace entirely, so the layout is a comment on the code rather than part of it. The programmer intended the `else` to be the "below 50" branch of the outer test; it is in fact the "below 70" branch of the inner one, which is why it fires for 60 and is skipped for 45. There is also a missing branch: nothing anywhere prints `Pass`. **The correction.** The reliable repair is to brace every branch, which makes the binding explicit and removes the whole class of fault; and since the three outcomes are three exclusive alternatives, an `if-else-if` chain says what is meant more directly:
```c
#include <stdio.h>

int main(void)
{
    int score = 45;

    if (score >= 70) {
        printf("A\n");
    } else if (score >= 50) {
        printf("Pass\n");
    } else {
        printf("Fail\n");
    }

    printf("done\n");
    return 0;
}
```
Check all three: 45 fails `>= 70` and fails `>= 50`, so `Fail`; 60 fails `>= 70`, meets `>= 50`, so `Pass`; 85 meets `>= 70`, so `A` — and in each case the remaining conditions are never tested, because the chain stops at the first true one. Note the order matters: written with `score >= 50` first, every score of 70 or more would print `Pass`, because the first true condition wins.

**11.** *Concept: `!=` as a loop condition is fragile — it demands an exact landing, and a step that does not divide the gap produces an infinite loop.* **What it prints as written:** `12 10`. Trace it: `count` = 1, `1 != 10` true, `total` = 1, `count` = 4; `4 != 10` true, `total` = 5, `count` = 7; `7 != 10` true, `total` = 12, `count` = 10; `10 != 10` is **false**, so the loop ends with `total` = 1 + 4 + 7 = **12** and `count` = **10**. It works — but only by luck, because 10 − 1 = 9 happens to be an exact multiple of the step 3. **If `count` starts at 0:** the values become 0, 3, 6, 9, 12, 15, 18, … and none of them is ever **equal** to 10, so `count != 10` is never false and the loop **never terminates**. It prints nothing (the `printf` is after the loop) and runs forever, while `total` grows until the `int` overflows. Nothing about the source has changed except one initial value, and the compiler gives no warning: `!=` is a perfectly legal condition. **Why `!=` is the wrong tool here.** `!=` tests a single point. A loop condition needs to test a **boundary**, so that the loop stops the first time the variable is at or past the target, however it got there. With a step of 1 the two behave identically, which is precisely why the fault survives every test written with a step of 1 and appears only when someone later changes the step or the starting value. **The safe rewrite:**
```c
while (count < 10)
```
`<` is false for every value at or beyond 10, so the loop terminates for any starting value and any positive step. **Outputs of the rewritten version.** Starting at 1: `count` = 1, 4, 7 are all `< 10`, so `total` = 12 and `count` finishes at 10 — it prints `12 10`, unchanged, as it must for a value the original also handled. Starting at 0: `count` = 0, 3, 6, 9 are all `< 10`, so `total` = 0 + 3 + 6 + 9 = 18 and `count` finishes at 12 — it prints `18 12`, terminating cleanly where the original hung. The general rule: use `<` or `>` (or `<=` / `>=`) for loop conditions, and reserve `!=` for cases where the variable provably lands exactly on the target, such as a sentinel value read from input.

**12.** *Concept: short-circuit evaluation makes operand order part of the meaning, and `>` versus `>=` is a separate wrong-comparison fault at the boundary.* **What happens as written: the programme crashes with a division by zero.** `&&` evaluates its **left** operand first, and the left operand here is `total / n > 30`. With `n` = 0 that computes 90 / 0, which is undefined behaviour and on a typical machine terminates the programme immediately. The guard `n != 0` is on the right, and short-circuiting only ever protects what is written to the **right** of `&&` — it can never protect something already evaluated. The programmer wrote both halves and got the order backwards, which is the whole fault: the truth table of `&&` is symmetric, but its **evaluation** is not. Reordering to `if (n != 0 && total / n > 30)` fixes it: `0 != 0` is false, the result of `&&` is settled at 0, and the division is **never evaluated**, so `low` prints and the programme survives. **The second fault, visible at `n = 3`.** With `n` = 3 and `total` = 90 the average is exactly 30. The specification says 30 or more should count as `high`, but the condition is `total / n > 30`, and `30 > 30` is **false** — so the programme prints `low` when it should print `high`. This is the classic boundary error: `>` excludes the boundary value, `>=` includes it. It is invisible for every input except the exact boundary, which is why it survives casual testing and is exactly what an examiner picks. (A third point worth noting: `total / n` is **integer division**, so with `total` = 91 and `n` = 3 the average is 30 rather than 30.33 — the fractional part is discarded, not rounded.) **The fully corrected line:**
```c
if (n != 0 && total / n >= 30)
```
The guard is on the left where short-circuiting can act on it, and the comparison includes the boundary. **If `&&` were replaced by `&`.** `&` is the **bitwise** and, a different operator with two consequences. First, it **always evaluates both operands**, so the guard stops guarding and `n != 0 & total / n >= 30` divides by zero again — the protection is lost even though the operands are in the right order. Second, it combines the operands bit by bit rather than as truths, so it can give a different answer: `2 && 1` is 1, but `2 & 1` is 0. Here both operands happen to be 0 or 1, so the value would be the same when it did not crash — which makes the typo even harder to spot. **What `if (!n == 0)` would mean.** `!` binds tighter than `==`, so this groups as `(!n) == 0`, not as `!(n == 0)`. `!n` is 1 when `n` is 0 and 0 when `n` is nonzero; comparing that with 0 is therefore true exactly when `n` is **nonzero** — so `if (!n == 0)` is a roundabout way of writing `if (n)`, and means the **opposite** of what someone writing "not n equals zero" intended. If the test wanted is "n is zero", write `if (n == 0)` or `if (!n)`.
