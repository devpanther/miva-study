# Wednesday — COS_102 nightly check

*Boolean expressions, statements and control flow, as concepts, exactly as the two decks give them.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** ```c
int a = -7;
if (a) printf("T"); else printf("F");
printf("%d", 5 > 2);
```
What is printed?
A. F1
B. T5
C. F0
D. T1

**2.** How many statements are on this line?

`a = 5; b = a + 1; c = a * b; printf("%d", c);`
A. 4
B. 1
C. 3
D. 2

**3.** Which bracketing shows how C groups `a == 0 || b == 0 && c == 0`?
A. `(a == 0 || b == 0) && c == 0`
B. `a == (0 || b == 0 && c) == 0`
C. `a == 0 || (b == 0 && c == 0)`
D. `((a == 0 || b) == 0) && (c == 0)`

**4.** `int x = 50; printf("%d", 0 < x < 10);` What is printed?
A. 0
B. 1
C. 50
D. Compile error

**5.** `for (i = 2; i <= 10; i += 2) count++;` How many times does the body run, and what is i after the loop ends?
A. 5 times, i = 12
B. 5 times, i = 10
C. 4 times, i = 10
D. 6 times, i = 12

**6.** ```c
int i = 0;
again:
i = i + 2;
if (i < 7) goto again;
printf("%d", i);
```
What is printed?
A. 6
B. 7
C. 8
D. 2

**7.** ```c
int a = 5, b = -1;
if (a > 0)
    if (b > 0) printf("X");
else printf("Y");
```
What is printed?
A. X
B. Y
C. Nothing
D. XY

**8.** A loop's condition is already false when control first reaches it, yet the body must still run once. Which construct gives that?
A. while
B. for
C. if
D. do-while

**9. (show your working)** ```c
if (age >= 13 && age <= 19)
    printf("teen");
else if (age <= 25)
    printf("young adult");
else
    printf("adult");
```
Trace this for age = 17, age = 22 and age = 10, giving the output for each, and say what the age = 10 case shows about the order of the branches. Show your working.

**10. (show your working)** Rewrite `!(x > 5 && y <= 2)` as an equivalent expression that contains no `!`. Then evaluate both the original and your rewrite for x = 5, y = 2 to show that they agree. Show your working.

**11. (show your working)** ```c
int n = 0, total = 40, hits = 0;
if (n != 0 && total / n > 5) hits = 1;
if (total > 10 || total / n > 5) hits = hits + 2;
printf("%d", hits);
```
Trace this, saying for each `if` which operands are evaluated and why the program never divides by zero, and give the output. Show your working.

**12. (show your working)** A student writes `if (x > 0);` and on the next line `{ printf("positive"); }`. Explain what the semicolon straight after the condition does, and say what is printed when x = −3.

---

## Answers

**1. D** — *What counts as true in C.* Any value that is not 0 is true, so `if (-7)` takes the T branch. A comparison yields an int: 5 > 2 is true, which is 1. Output: T1.

F1 treats a negative number as false; T5 prints an operand of the comparison instead of its value; F0 makes both mistakes.

**2. A** — *Counting simple statements.* A simple statement contains one expression and ends with a semicolon, and the line ending has nothing to do with it. There are four semicolons, so four statements: the three assignments and the printf call.

1 assumes one line means one statement; 3 leaves out the printf, which is a statement like any other; 2 counts only the assignments that introduce a new value.

**3. C** — *Precedence of && over ||.* `==` binds tighter than both logical operators, so the three comparisons are formed first. Then `&&` binds tighter than `||`, exactly as `*` binds tighter than `+`, so `b == 0 && c == 0` is grouped before the `||`. Result: `a == 0 || (b == 0 && c == 0)`.

The first option gives `||` priority over `&&`; the second lets `==` take whole logical expressions as operands, which is backwards; the last mixes both mistakes.

**4. B** — *Chained comparison is not a range test.* C has no chained comparison. `<` associates left to right, so this is `(0 < x) < 10`. 0 < 50 is 1, and 1 < 10 is true, so the value is 1 even though 50 is nowhere near the range.

0 reads it as the range test 0 < x and x < 10; 50 prints the variable rather than the expression's value; it compiles without complaint, which is exactly why the fault survives.

**5. A** — *Counting passes of a for loop.* i takes the values 2, 4, 6, 8, 10, and the body runs once for each: 5 times. After the pass with i = 10 the increment makes i = 12, the test 12 <= 10 fails, and the loop ends with i = 12.

5 times, i = 10 forgets the final increment that makes the test fail; 4 times, i = 10 treats `<=` as `<` and drops the pass at 10; 6 times, i = 12 counts the failed test as a pass.

**6. C** — *Tracing an unconditional branch.* `goto again` moves control back to the label without any test of its own; the test is the `if` that guards it. i goes 2 (2 < 7, jump), 4 (jump), 6 (jump), 8 (8 < 7 is false, no jump), so the printf runs with i = 8.

6 stops as soon as the next step would pass 7, but the jump at i = 6 still happens; 7 assumes i lands exactly on the limit, which stepping by 2 from 0 never does; 2 treats goto as if it never jumps back.

**7. B** — *The dangling else.* An `else` binds to the nearest preceding unmatched `if`, whatever the indentation says, so the `else` belongs to `if (b > 0)`. a > 0 is true, so the inner if is reached; b > 0 is false, so its else runs and prints Y.

X needs b > 0, which is false; Nothing would be right if the else belonged to the outer if, as the layout suggests, but it does not; XY cannot happen because an if-else runs exactly one branch.

**8. D** — *Where the loop test sits.* A do-while tests its condition after the body, so the body is guaranteed to execute at least one time; only then is the false condition seen and the loop left.

while and for test before the body, so a false condition means zero passes; if is not a loop at all and its block is skipped when the condition is false.

**9.** *Tracing an if-else-if chain.* age = 17: 17 >= 13 is 1 and 17 <= 19 is 1, so 1 && 1 is true and it prints teen; the remaining branches are skipped. age = 22: the first condition is false (22 <= 19 fails), 22 <= 25 is true, so it prints young adult. age = 10: the first condition is false (10 >= 13 fails), and 10 <= 25 is true, so it prints young adult.

Final answer: teen, young adult, young adult. The 10 case shows that each later condition is tested only after the earlier ones have failed and is read in that context: `age <= 25` was written assuming the first branch had already removed everything under 13, and it had not, so a child is labelled a young adult. A correct answer gives the three outputs and explains that the first true condition wins and the second condition does not check the lower bound. Saying age = 10 prints adult or teen is wrong.

**10.** *Negating a compound condition.* Not (both) is the same as at least one is not: `!(A && B)` is `!A || !B`. The negation of `x > 5` is `x <= 5` (the boundary value 5 moves to the other side) and the negation of `y <= 2` is `y > 2`. Rewrite: `x <= 5 || y > 2`.

Check at x = 5, y = 2. Original: 5 > 5 is 0, 2 <= 2 is 1, 0 && 1 is 0, and !0 is 1. Rewrite: 5 <= 5 is 1, 2 > 2 is 0, 1 || 0 is 1. Both give 1. A correct answer flips && to ||, negates each comparison including the boundary (`<=` for `>`, `>` for `<=`), and shows both evaluate to 1. `x <= 5 && y > 2` keeps && and gives 0 at this point, which is wrong; `x < 5 || y > 2` loses the boundary and gives 0, also wrong.

**11.** *Short-circuit evaluation.* First if: `n != 0` is false. `&&` with a false left operand is already false, so the right operand `total / n > 5` is never evaluated; no division happens and hits stays 0. Second if: `total > 10` is true. `||` with a true left operand is already true, so `total / n > 5` is again skipped; hits becomes 0 + 2 = 2. Output: 2.

Final answer: 2. A correct answer says the left operand decides in both cases, that the division by n is skipped both times (short-circuit), and gives 2. Answers of 3 (both ifs taken) or 'crashes with division by zero' are wrong; swapping the operands, `total / n > 5 && n != 0`, would divide first and crash.

**12.** *The stray semicolon after a condition.* The semicolon is an empty statement, and the `if` governs exactly one statement, so the `if` is complete at the semicolon and controls nothing. The block on the next line is simply the next statement of the program and runs whatever x is. With x = −3 the condition is false, the empty statement is skipped, and then the block runs anyway: it prints positive.

A correct answer says the semicolon is an empty statement that ends the if, that the block is no longer attached to it, and that positive is printed for x = −3. Saying nothing is printed, or that the compiler reports an error, is wrong: it compiles in silence.
