# COS_102 — Week 9 Summary

*Introduction to Problem Solving · Week 9 (2 – 8 Nov 2026) · Topic: Statements, Blocks and Branching*

## The 8 most examinable things this week

1. **Simple statement, word for word:** **a simple statement contains only one expression and it ends with a semicolon.** The semicolon is not decoration — it is the terminator that tells the compiler the statement has finished. Two consequences the deck asks about directly: **you can put more than one statement on a single line** (`a = 5; b = 7;` is two statements), and one statement may be spread over several lines, because layout is not what ends a statement. The semicolon is.
2. **Block / compound statement, word for word:** **a block contains more than one statement contained inside curly brackets**, and **the right curly bracket does not have a semicolon after it.** The operative property is the next sentence in the deck: **the group of statements inside a block are treated like a single statement by the computer.** That is what makes a block usable anywhere one statement is expected — which is why every construct below takes either one statement or one block, and never "a few statements".
3. **Why blocks exist.** Not tidiness: **while trying to solve complex problems by breaking them into smaller ones, we need to treat solutions to the smaller problems as single units**, so that **solutions from different blocks can be seen as solutions to the smaller problems.** The stated applications: **functions, decision making statements, and iterative statements.** Decision making = **`if`, `if-else`, `else-if`**; iterative = **`for`, `while`, `do-while`**.
4. **Booleans. `Booleans represent values that are either true or false.`** In C **a Boolean variable is declared with the `bool` keyword and it can only take the values `true` or `false`** (`#include <stdbool.h>`). But the examinable sentence is the next one: **Boolean values are returned as integers, with 1 (or any other number that is not 0) representing true and 0 representing false.** So truth in C is a *numeric* property — `-7`, `0.5` and `'a'` are all true; only `0` is false.
5. **Boolean expressions are built by comparison.** **To make decisions and find answers in programming, it is sometimes useful to compare values and variables; when this comparison activity takes place, the return value is usually a Boolean value.** The six **relational** operators are `==`, `!=`, `<`, `>`, `<=`, `>=`; the three **logical** operators are `&&` (and), `||` (or), `!` (not). A relational expression is not a question the machine asks — it is an expression that *has a value*, `1` or `0`, exactly like `3 + 4` has the value `7`.
6. **Precedence, and the two errors it causes.** Arithmetic binds tightest, then `!`, then relational (`< <= > >=`), then equality (`== !=`), then `&&`, then `||`, then `=` last of all. Two exam staples fall straight out: `a == 0 || b == 0 && c == 0` means `a == 0 || (b == 0 && c == 0)` because **`&&` binds tighter than `||`**; and `!x == y` means `(!x) == y`, not `!(x == y)`, because **`!` binds tighter than `==`**.
7. **Short-circuit evaluation.** `&&` evaluates its left operand first; **if the left is false, the right operand is never evaluated at all**, because the answer is already `0`. `||` evaluates its left operand first; **if the left is true, the right is never evaluated**, because the answer is already `1`. This is a guarantee of the language, not an optimisation, which is why `if (n != 0 && total / n > 5)` is safe and `if (total / n > 5 && n != 0)` divides by zero.
8. **Program control and branching.** **Programme control is responsible for the sequential execution of a programme from one line to the next line until it reaches the last line**; **branching means the computer can decide to move program control to another line of code instead of the usual movement from one line to the next.** **Unconditional branching** moves control **without checking any condition** — the deck's example is **`goto`**. **Conditional branching** moves control **depending on whether some predetermined conditions are satisfied**, and is **also known as decision making or selection**: the three statements are **`if`, `if-else`, `if-else-if`**, plus **`switch`**, with which **we can execute one code block among many alternatives.**

## Boolean values in C

```c
#include <stdio.h>
#include <stdbool.h>

int main(void)
{
    bool ok = true;                    /* bool takes only true or false        */
    printf("%d\n", 7 > 3);             /* prints 1  — the comparison IS a value */
    printf("%d\n", 7 < 3);             /* prints 0                              */
    printf("%d\n", ok);                /* prints 1  — true is stored as 1       */
    if (-7)   printf("A\n");           /* PRINTS: -7 is not 0, so it is true    */
    if (0.0)  printf("B\n");           /* does not print: 0 is false            */
    return 0;
}
```

- **Truth is "not zero", falsity is "exactly zero".** Nothing else is tested. There is no comparison with `true` going on behind the scenes.
- A comparison **yields** `1` or `0`, so it can be printed with `%d`, assigned to an `int`, or added: `(7 > 3) + (2 > 5)` is `1 + 0` = `1`.
- `true` and `false` are just the names `1` and `0` supplied by `<stdbool.h>`. Writing `if (x == true)` compares `x` with **1**, so `x = 5` fails that test although `if (x)` succeeds. Never compare a condition with `true`.

## Truth tables

Write `1` for true and `0` for false, exactly as C stores them.

| `a` | `b` | `a && b` | `a \|\| b` | `!a` | `a != b` (exclusive or) |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 |

Read them as rules: **`&&` is true only when both are true** (one false is enough to make it false); **`||` is false only when both are false** (one true is enough to make it true); **`!` swaps**.

**De Morgan's laws**, which the exam asks as "which expression is equivalent to":

- `!(a && b)` is `!a || !b` — *not (both)* is *at least one is not*.
- `!(a || b)` is `!a && !b` — *not (either)* is *neither*.
- Note the operator flips as well as the operands. `!(a && b)` is **not** `!a && !b`; check row 2 of the table: `a=0, b=1` gives `!(0 && 1) = 1` but `!0 && !1 = 1 && 0 = 0`.

**Negating a relational operator** negates the *comparison*, it does not merely flip the sign: `!(x > 5)` is `x <= 5`, not `x < 5`. The boundary value 5 belongs to the negation.

## Operator precedence, highest to lowest

| Level | Operators | Note |
|---|---|---|
| 1 | `()` | Overrides everything; when in doubt, write them |
| 2 | `!`, unary `-` | `!` binds tighter than every comparison |
| 3 | `*` `/` `%` | |
| 4 | `+` `-` | |
| 5 | `<` `<=` `>` `>=` | Relational |
| 6 | `==` `!=` | Equality — **lower** than relational |
| 7 | `&&` | |
| 8 | `\|\|` | |
| 9 | `=` | Assignment is an operator, and the lowest of all |

```c
x + 1 > y * 2 && !flag == 0     /* groups as:  ((x+1) > (y*2)) && ((!flag) == 0) */
0 < x < 10                      /* groups as:  (0 < x) < 10  -> 1<10 or 0<10 -> ALWAYS 1 */
a == 0 || b == 0 && c == 0      /* groups as:  (a==0) || ((b==0) && (c==0))              */
```

The middle line is the single most costly precedence error at this level: **`0 < x < 10` is always true**, because the first comparison collapses to `1` or `0` and both are less than 10. The correct form is `0 < x && x < 10`, and it needs `&&` precisely because a chained comparison is not a range test.

## Short-circuit evaluation, and why it matters

```c
int n = 0, total = 50;

if (n != 0 && total / n > 5)   /* SAFE:  n != 0 is false, so total/n is never evaluated */
    printf("big average\n");

if (total / n > 5 && n != 0)   /* CRASH: division by zero happens before the guard runs */
    printf("big average\n");
```

- The **order of the operands of `&&` and `||` is part of the meaning of the program**, not a matter of style. Guard first, use second.
- **A skipped operand's side effects do not happen.** In `i++ > 0 && j++ > 0`, if `i++ > 0` is false then `j` is **never incremented**.
- `&` and `|` are the **bitwise** operators. They always evaluate both sides and they combine bits, not truths: `2 && 1` is `1`, but `2 & 1` is `0`. Writing `&` for `&&` removes the guarantee that the guard protects the guarded expression.

## The control constructs, and exactly when each is entered

```c
if (boolean_expression) {
       /* statement(s) will execute if the boolean expression is true */
}
```

- **`if`** — **program control will only move inside the `if` block if the condition is satisfied, or else the entire block will be skipped.** Body runs **0 or 1** times.
- **`if-else`** — **if the condition is satisfied control moves inside the `if` block, otherwise it moves to the `else` block.** Exactly **one** of the two runs, always. There is no way for both or neither to run.
- **`if-else-if`** — **more than two choices are integrated into the decision making process.** The conditions are tested **top to bottom** and **the first true one wins**; every later condition is then skipped even if it is also true. At most one branch runs; if there is no final bare `else`, none may run.
- **`switch`** — **we can execute one code block among many alternatives.** Control jumps to the matching `case` label and then **runs on through the following cases until it meets a `break`** — the `break` is not optional punctuation.
- **`while (condition) { statement(s); }`** — **the loop iterates while the condition is true; when the condition becomes false, program control passes to the line immediately following the loop.** The test comes **before** the body, so the body may run **0** times.
- **`do-while`** — **works the same way as a `while` loop, except that it is guaranteed to execute at least one time.** The test comes **after** the body, so the body runs **1 or more** times.
- **`for`** — **the init step is executed first, and only once. Next, the condition is evaluated; if it is true the body executes, if false the body does not execute.** After each pass the increment runs, then the condition is tested again. Body may run **0** times.
- **`goto`** — unconditional: it **moves program control without checking any condition at all**.

```c
int i = 5;
while (i < 3)      { printf("W"); i++; }   /* prints nothing:  tested first, 5 < 3 is false */
i = 5;
do { printf("D"); i++; } while (i < 3);    /* prints D once:   tested after the first pass  */

for (i = 0; i < 3; i++) printf("%d", i);   /* prints 012 — three passes                     */
for (i = 0; i <= 3; i++) printf("%d", i);  /* prints 0123 — FOUR passes: the off-by-one      */
```

**Counting passes of a `for`.** With `i` starting at `a`, stepping by 1, the body runs `b - a` times under `i < b` and `b - a + 1` times under `i <= b`. `i < n` with `i` from `0` gives exactly `n` passes — that is the idiom to memorise, and `i <= n` is the classic one-too-many.

## Blocks and the constructs: the brace is what makes a block one statement

```c
if (score >= 50)
    printf("Pass\n");
    printf("Well done\n");     /* NOT part of the if — it always runs   */

if (score >= 50) {
    printf("Pass\n");
    printf("Well done\n");     /* both are inside, because the block is ONE statement */
}
```

Because **a block is treated like a single statement**, and because `if` governs exactly one statement, the first version's second `printf` is simply the next statement in the programme. Indentation is invisible to the compiler. The same applies to loops: a `while` without braces repeats only its first statement, which is a standard way to write an accidental infinite loop.

**The dangling `else`.** An `else` binds to the **nearest preceding unmatched `if`**, regardless of how the code is indented:

```c
if (a > 0)
    if (b > 0) printf("X\n");
else printf("Y\n");            /* this else belongs to  if (b > 0), not to if (a > 0) */
```

With `a = 5, b = -1` this prints `Y`. With `a = -1` it prints **nothing**, because the outer `if` was false and the whole inner construct — `else` included — was skipped. Braces around the inner `if` are the fix.

## A worked branching example: the case study

The Summary deck's case study: classify an age as *teen*, *young adult* or *adult*.

```c
#include <stdio.h>

int main(void)
{
    int age;
    printf("Enter age: ");
    scanf("%d", &age);

    if (age >= 13 && age <= 19)          /* range test needs &&, not 13 <= age <= 19 */
        printf("teen\n");
    else if (age <= 25)                  /* reached only when the first was false     */
        printf("young adult\n");
    else
        printf("adult\n");

    return 0;
}
```

Trace `age = 17`: `17 >= 13` is 1, `17 <= 19` is 1, `1 && 1` is 1, so `teen` prints and **both remaining branches are skipped**. Trace `age = 22`: first condition false, `22 <= 25` true, `young adult`. Trace `age = 10`: first false, `10 <= 25` is **true**, so it prints `young adult` — a real bug that the `if-else-if` ordering hides, because the second condition was written assuming the first had already removed everything below 13. This is the lesson of "first true one wins": every branch after the first is read **in the context of all the earlier conditions having failed**.

## Commonly confused

| Pair | The distinction |
|---|---|
| **Statement vs block** | A **simple statement contains only one expression and ends with a semicolon**. A **block contains more than one statement inside curly brackets** and its **closing brace takes no semicolon**. A block's whole purpose is to be **treated like a single statement**, so it can go wherever one statement is allowed. |
| **`=` vs `==`** | `=` **assigns** and its value is the value assigned; `==` **compares** and its value is 1 or 0. `if (x = 5)` stores 5 in `x` and, since 5 is not 0, is **always true**. It compiles silently. |
| **`&&` vs `&`** | `&&` is **logical**, works on truth, and **short-circuits**. `&` is **bitwise**, works on bits, and **always evaluates both sides**. `2 && 1` is 1; `2 & 1` is 0. Swapping one for the other destroys any guard you were relying on. |
| **`!(x > 5)` vs `x < 5`** | The negation of `>` is `<=`, not `<`. The boundary value belongs to the negation: at `x = 5`, `!(x > 5)` is true but `x < 5` is false. |
| **`!(a && b)` vs `!a && !b`** | De Morgan: `!(a && b)` is `!a \|\| !b`. Negation flips the **operator** as well as the operands. `!a && !b` is `!(a \|\| b)`, a different expression entirely. |
| **`0 < x < 10` vs `0 < x && x < 10`** | The first is **always true** — it groups as `(0 < x) < 10`, and both 1 and 0 are less than 10. C has no chained comparison; a range test needs `&&`. |
| **Relational vs equality precedence** | `<` `<=` `>` `>=` bind **tighter** than `==` `!=`. So `a < b == c < d` means `(a<b) == (c<d)` — it compares two truth values, which is legal and almost never what was meant. |
| **`&&`/`\|\|` precedence** | `&&` binds **tighter** than `\|\|`, exactly as `*` binds tighter than `+`. `a \|\| b && c` is `a \|\| (b && c)`. |
| **Short-circuit vs "the compiler skips work"** | It is a **language guarantee about what is evaluated**, not an optimisation. Because the skipped operand's **side effects also do not happen**, moving a guard from the left of `&&` to the right changes the program's behaviour, not its speed. |
| **`while` vs `do-while`** | `while` tests **before** the body: **0 or more** passes. `do-while` tests **after**: **guaranteed to execute at least one time**, so **1 or more** passes. With a condition that is false at the start, `while` prints nothing and `do-while` prints once. |
| **`if-else` vs two separate `if`s** | With `if-else` **exactly one** branch runs. With two `if`s both conditions are tested independently, so **both bodies can run** — and if the second condition was written to depend on the first having failed, it now fires when it should not. |
| **`if-else-if` vs a list of conditions** | The chain stops at the **first true condition**; later ones are never tested. So the order of branches is part of the logic, and each condition may quietly assume every earlier one was false. |
| **`switch` case vs `if-else-if`** | A `switch` **jumps** to a matching label and then **falls through** into the following cases until a `break`. An `if-else-if` never falls through. A missing `break` is not a style fault; it changes which code runs. |
| **Unconditional vs conditional branching** | **Unconditional** (`goto`) moves control **without checking any condition**. **Conditional** (`if`, `if-else`, `if-else-if`, `switch`) moves control **only if a predetermined condition is satisfied**, and is also called **decision making** or **selection**. |
| **`i < n` vs `i <= n`** | Starting from 0, `i < n` gives exactly **n** passes; `i <= n` gives **n + 1**. The extra pass usually reads one position past the end of the data, and the program still runs, which is why the fault survives testing. |
| **`!=` vs `<` as a loop condition** | `i != 10` demands that `i` land **exactly** on 10. With `i += 3` from 1 the values are 1, 4, 7, 10 — fine; from 0 they are 0, 3, 6, 9, 12 and the loop **never stops**. `i < 10` is safe for any step. |
| **A stray `;` after `if` or `while`** | `if (x > 0);` ends the `if` with an **empty statement**, so the block that follows runs unconditionally. `while (x > 0);` gives an empty body and, with nothing changing `x`, an infinite loop. Both compile without complaint. |
| **Indentation vs braces** | The compiler reads braces only. Without them an `if` or a loop governs **exactly one statement**, and a dangling `else` binds to the **nearest unmatched `if`**, however the lines are laid out. |

---

*Note on the source: both decks extract with their code missing. Every slide titled "Simple statement: example", "Compound statements/blocks" (second and third), "Conditional branching: if / if-else / if-else-if / switch", "Loop: while", "Loop: do while" and "Loop: for" carries its listing **inside a slide image**, so the extracted text gives only the surrounding prose. The single piece of syntax that survives is the `if (boolean_expression) { ... }` skeleton and the `While (condition) { statement(s); }` skeleton, both reproduced above. In particular the Boolean deck names "comparing values and variables" and states that the return value is a Boolean, but the **table of relational and logical operators, the truth tables, the precedence order and short-circuit evaluation appear nowhere in the extracted text** — they are supplied here as the standard C treatment of exactly the deck's stated objective ("illustrate the use of Boolean expressions in C"), following the decks' own further reading (Kernighan & Ritchie; Bailey). The `goto`, `switch`, `for` and `do-while` examples are likewise reconstructed from the prose that describes them. The extractor also drops ligatures, so the source reads "dierent" for "different", "speciﬁc" for "specific", "ow" for "flow", "dene" for "define", and "University of Noingham" for Nottingham.*
