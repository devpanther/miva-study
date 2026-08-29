# Saturday — COS_102 code nightly check

*Code only: evaluating an expression by precedence and associativity, predicting both the value and the type an operation produces, integer versus floating-point division and where the cast has to go, character versus numeric versus string values, spotting the type or declaration error in a fragment, and reading structure and union code. No definitions asked for their own sake, no lists of categories, no benefits of OOP — those were Wednesday.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** What is stored in `r`?

```c
int r = 20 - 6 / 2 * 3;
```
a) 11  b) 19  c) 21  d) 51

**2.** What does this print?

```c
int a = 7, b = 2;
float x = a / b;
printf("%f", x);
```
a) 3.500000
b) 3.000000
c) 4.000000
d) Nothing: the compiler rejects line 2, because the result of an `int` division cannot be assigned to a `float`

**3.** Keeping `a` and `b` as `int`, which single change makes that program print **3.500000**?
a) `float x = (float)(a / b);`
b) `float x = (float) a / b;`
c) `double x = a / b;`
d) `float x = a / b * 1.0;`

**4.** What does this print?

```c
int n = 'A' + 1;
printf("%d %c", n, n);
```
a) 65 A
b) 66 66
c) A1 A1
d) 66 B

**5.** A digit has been read as a character. What are `v` and `w`?

```c
char c = '7';
int  v = c;
int  w = c - '0';
```
a) `v` is 7 and `w` is 7
b) `v` is 7 and `w` is 55
c) `v` is 55 and `w` is 7
d) `v` is 55 and `w` is 55

**6.** Which statement about this fragment is correct?

```c
1   int   first_score = 10;
2   int   2nd_score   = 20;
3   float average     = 0;
4   char  grade       = 'A';
```
a) Line 2 is illegal: a C identifier may not begin with a digit
b) Line 3 is illegal: a `float` must be initialised with a literal that contains a decimal point
c) Line 4 is illegal: `'A'` is a string, and a string must be assigned to an array of `char`
d) All four lines are legal: C works out each variable's type from the value written on the right

**7.** What is printed, and what does `n` hold afterwards?

```c
int n = 7;
if (n = 0)
    puts("zero");
else
    puts("not zero");
```
a) `zero` is printed, and `n` holds 0
b) `not zero` is printed, and `n` holds 7
c) `not zero` is printed, and `n` holds 0
d) Nothing: the compiler rejects the condition, because `=` is not a relational operator and may not appear in an `if`

**8.** What does this print?

```c
union Dog { char name[20]; char breed[20]; char colour[20]; };

union Dog d;
strcpy(d.name,  "Rex");
strcpy(d.breed, "Poodle");
printf("%s %s", d.name, d.breed);
```
a) `Rex Poodle`, because each member of a union gets its own storage, exactly as in a structure
b) `Poodle Poodle`, because all members of a union start at the same location, so writing `breed` wrote over `name`
c) `Rex Rex`, because the first member written to fixes the union's contents and later writes to other members are discarded
d) Nothing: the compiler rejects `d.breed`, because a union variable may only be accessed through whichever member is named first in the definition

**9. (explain why)** Take this fragment.

```c
int   total = 17, n = 5;
float avg = total / n;
printf("%f", avg);
```
State exactly what is printed and what the correct average is. Then explain the mechanism step by step — what type each subexpression has, when the conversion to `float` happens, and why the type of the variable on the left has no say in it. Give **two** different one-line fixes, and explain why `float avg = (float)(total / n);` is **not** one of them. Finally, state the value of `total % n` and say why `avg % n` would not compile.

**10. (explain why)** Every numbered line below is either wrong or does something the programmer did not intend. For each, name the error precisely, write the corrected line, and say whether the compiler will catch it or let it through.

```c
1   int   1st_place = 4;
2   float rate = 0.5
3   char  grade = "B";
4   int   n;
5   n = n + 1;
6   float leftover = rate % 2;
```

**11. (explain why)** Evaluate this by hand.

```c
int a = 5, b = 2, c = 3;
int r = a + b * c > a * b + c && !(a - b == c);
```
Give the value of `r`, and set out the order in which the operators were applied and why that order and no other. State which subexpression is **never evaluated** and give the rule that causes it to be skipped. Then write the same expression with brackets showing how a student who believes `&&` binds tighter than `>` would read it, and give the value **that** reading produces.

**12. (explain why)** Write out, in C, a structure `LibraryBook` with the members `char title[40]`, `char author[40]` and `int copies`. Then write the statements that create one such variable, set all three members, and print the title and the number of copies — using the correct syntax for each member's type. Say what `sizeof(struct LibraryBook)` is and how you worked it out. Then say exactly what would change, in the layout and in the behaviour of your statements, if `struct` were replaced by `union`, and what `sizeof` would become.

---

## Answers

**1. a — 11.** *Concept: `*`, `/` and `%` share one precedence level, and that level associates left to right.* Precedence alone does not settle this expression, because `/` and `*` are at the *same* level; associativity does. Left to right: `6 / 2` = 3, then `3 * 3` = 9, then the lower-precedence `-` gives `20 - 9` = **11**. (c) 21 is the answer you get by ignoring precedence entirely and working straight along the line: `20 - 6` = 14, `14 / 2` = 7, `7 * 3` = 21. (b) 19 encodes the belief that `*` outranks `/` — that reads it as `20 - 6 / (2 * 3)` = `20 - 1`. (d) 51 encodes doing the division first and then applying the remaining two operators left to right at the top level: `20 - 3` = 17, then `17 * 3` = 51; that gets precedence half right and then forgets that `-` is *lower* than `*`, so the multiplication cannot wait for it.

**2. b — 3.000000.** *Concept: the operand types choose the operation; the assignment target has no vote.* `a` and `b` are both `int`, so `a / b` is an **integer** division: 7 divided by 2 is 3 with the fractional part truncated away, and the result is the `int` value 3. Only then, with the arithmetic already finished, is that 3 converted to `float` to be stored in `x` — giving 3.0, printed as `3.000000`. (a) is the answer of everyone who reads the line right to left and assumes that because the destination is a `float`, a floating-point division must have taken place; nothing about `x` reaches back into the expression. (c) assumes `/` rounds; it truncates towards zero, so `7 / 2` is 3 and `-7 / 2` is −3. (d) invents a rule: assigning an `int` to a `float` is a perfectly legal implicit conversion, and it is exactly the conversion that hides the bug.

**3. b — `float x = (float) a / b;`** *Concept: the cast must reach the division before the division happens.* A cast is a unary operator, so it binds tighter than `/`: this parses as `((float) a) / b`. Now one operand is `float`, the other `int` is promoted to match, and a **floating-point** division is performed — 3.5. (a) is the near-miss that catches most people: the brackets make the cast apply to `a / b`, which is evaluated first as an `int` division to 3, so it converts 3 to 3.0 and prints `3.000000`. Casting after the damage never undoes it. (c) changes only where the result is stored, exactly as in question 2, so it prints `3.000000` too. (d) multiplies afterwards: `a / b` is still `int` division giving 3, then `3 * 1.0` is 3.0. The general rule: make at least one operand floating **before** the operator runs — `(float) a / b`, `a / (float) b` or `a / 2.0` all work.

**4. d — `66 B`.** *Concept: `char` is a small integer type; the conversion specifier decides how the same value is shown.* `'A'` is a character *literal* whose value is its code, 65, so `'A' + 1` is the `int` 66 and `n` holds 66. It is then printed twice: `%d` displays the value as a decimal number, giving `66`; `%c` displays the same value as the character with that code, and code 66 is `'B'`. (a) forgets the `+ 1` and also assumes `%c` reproduces the literal that was written. (b) treats `%c` as if it were another `%d` — it is the same value, but not the same rendering. (c) treats `'A' + 1` as if `+` on a character meant sticking a `1` on the end, which is string concatenation borrowed from another language; C has no such operator, and `+` on a `char` is ordinary integer arithmetic.

**5. c — `v` is 55 and `w` is 7.** *Concept: the character `'7'` and the number 7 are different values.* `c` holds the character `'7'`, whose ASCII code is **55**; assigning it to an `int` simply widens that code, so `v` is 55. To get the *numeric* value of a digit character you subtract the code of `'0'`, which is 48: `'7' - '0'` = 55 − 48 = **7**, so `w` is 7. This works because the codes of `'0'` to `'9'` are guaranteed to run consecutively. (a) is the assumption that a `char` holding a digit "is" that number, which is exactly the trap; it also makes the `- '0'` look like pointless decoration. (b) has the two the wrong way round, treating the subtraction as damage rather than as the conversion. (d) spots that `c` is a code but then reads `- '0'` as subtracting the *character* zero in the sense of subtracting nothing.

**6. a — Line 2 is illegal.** *Concept: the rules for a legal C identifier.* A name may contain letters, digits and underscores, but it **may not begin with a digit** — the compiler starts reading `2nd_score` as the number 2 and then finds `nd_score` where an operator should be. (b) invents a rule: `float average = 0;` is fine, the `int` literal 0 is converted to 0.0f by the ordinary implicit conversion, exactly as it would be at any other assignment. (c) has the quotes backwards: `'A'` in **single** quotes is a character literal, which is precisely what a `char` takes; `"A"` in **double** quotes would be the string, and *that* is the one that cannot be assigned to a `char`. (d) describes type inference, which C does not do at all — C's rule is the course's own, **data type followed by variable name**, and the type comes from what the programmer wrote on the left, never from the value on the right.

**7. c — `not zero` is printed, and `n` holds 0.** *Concept: `=` assigns and yields the value it stored; `==` compares.* The condition is `n = 0`, not `n == 0`. It **assigns** 0 to `n`, so `n` is 0 from that moment on, and the value of the assignment expression is the value stored, namely 0. In C a condition is false when it is zero, so the `if` takes the **`else`** branch and `not zero` is printed — the message is the exact opposite of the state the variable is now in, which is why this bug is so hard to see in output. (a) is the answer of someone who reads the condition as the comparison that was meant, and it is the intended behaviour of `if (n == 0)`. (b) spots that the wrong branch is taken but misses the side effect: the assignment has already happened, so `n` cannot still be 7. (d) is wrong because an assignment *is* an expression with a value, which is exactly what makes the mistake legal and therefore dangerous; a compiler may warn, but it must accept it.

**8. b — `Poodle Poodle`.** *Concept: all members of a union start at the same location, so they alias each other.* The union's three arrays are not three arrays; they are one 20-byte block with three names. `strcpy(d.name, "Rex")` puts `R e x \0` at the start of that block; `strcpy(d.breed, "Poodle")` then writes `P o o d l e \0` over the same bytes. Reading `d.name` afterwards reads those same bytes, so both `%s` print `Poodle`. This is the direct consequence of the course's statement that **a union variable can represent the value of only one of its members at a time**. (a) is the structure's behaviour, and with `struct` in place of `union` the program really would print `Rex Poodle` — that contrast is the whole point of the question. (c) invents a write-once rule; nothing protects the earlier value, it is simply overwritten. (d) invents an access restriction; every member of a union may be written and read by name, and it is precisely because the language allows that without complaint that the programmer has to track which member is currently valid.

**9.** *Concept: integer division, the point at which conversion happens, and where a cast must go.* **What is printed: `3.000000`. The correct average is 3.4.** Step by step. `total` and `n` are both `int`, so in `total / n` both operands are `int`; the usual arithmetic conversions have nothing to do, and the operation selected is **integer division**, which computes the quotient and truncates the fractional part towards zero. 17 ÷ 5 is 3 remainder 2, so the expression yields the `int` value **3** — and the 0.4 is not rounded, not stored somewhere else, it is simply gone. The conversion to `float` happens **afterwards**, at the assignment: the `int` 3 is converted to the `float` 3.0 and stored in `avg`, and `%f` prints it as `3.000000`. The type of `avg` has no say in any of this because C decides what an operator does from **the types of its operands**, which are fixed before the assignment is even considered; the assignment is a separate step that happens to the finished result. **Two fixes**, each making at least one operand floating *before* the division runs: `float avg = (float) total / n;` — the cast is a unary operator and binds tighter than `/`, so it applies to `total` alone, one operand becomes `float`, `n` is promoted to match, and floating-point division gives 3.4. Or `float avg = total / (float) n;`, or equivalently `float avg = total / 5.0;`, which does the same thing with a floating literal. **Why `(float)(total / n)` is not a fix:** the brackets make the cast apply to the *result*, so the integer division has already been performed and truncated inside them; converting 3 to 3.0 recovers nothing. A cast cannot restore information that the operation has already thrown away — it must be applied to an **operand**, not to a result. **`total % n`** is `17 % 5` = **2**, the remainder that the truncating division discarded; `total / n` and `total % n` together — 3 and 2 — reconstruct 17 as 3 × 5 + 2. **`avg % n` will not compile** because `%` is defined only for integer operands, and `avg` is a `float`; the remainder operator is not merely undefined on floating-point values, it is a constraint violation the compiler must diagnose. (The floating equivalent is the library function `fmod`.)

**10.** *Concept: identifier rules, statement syntax, character versus string literals, uninitialised storage, and the operand types `%` demands.*
**Line 1 — `int 1st_place = 4;`** An identifier **may not begin with a digit**. The compiler reads the numeric literal `1` and then finds `st_place` where it expected an operator or a semicolon. **Fix:** `int first_place = 4;` (or `place_1`). **Caught by the compiler** — it is a syntax error, so nothing compiles until it is fixed.
**Line 2 — `float rate = 0.5`** The **semicolon is missing**. Every C statement is terminated by one; without it the compiler runs this line and the next together and reports the error, confusingly, on line 3. **Fix:** `float rate = 0.5;`. **Caught by the compiler.**
**Line 3 — `char grade = "B";`** `"B"` in double quotes is a **string literal** — an array of two `char`s, `'B'` and the terminating `'\0'` — and what is being assigned is its address, a pointer. A `char` holds one character, not an address. The literal wanted is the **character** literal in single quotes. **Fix:** `char grade = 'B';`. **Caught by the compiler** (a constraint violation: assigning a pointer to an integer type without a cast; some older compilers report it as a warning and then store the low byte of an address, which is worse than an error because the program runs and the value is meaningless).
**Line 4/5 — `int n;` then `n = n + 1;`** Line 4 is legal on its own: it is a **definition** and it reserves four bytes. The fault is at line 5, which **reads `n` before anything has been stored in it**. A definition without an initialiser leaves the bytes holding whatever the previous occupant of that memory left there, so `n + 1` adds one to an unknown value and the result is unpredictable — and different from run to run. **Fix:** `int n = 0;` on line 4. **Usually *not* caught:** the code is syntactically perfect and type-correct, so the compiler must accept it; a good compiler warns if warnings are switched on, but nothing obliges it to, and this is the classic error that appears to work in testing because the leftover bytes happened to be zero.
**Line 6 — `float leftover = rate % 2;`** `%` requires **both operands to be of integer type**, and `rate` is a `float`. **Fix:** either work in integers (`int leftover = (int) rate % 2;`) or use the floating-point remainder function (`float leftover = fmodf(rate, 2.0f);` with `<math.h>`). **Caught by the compiler.**
So: five faults across six lines, four of them refused outright, and the one the compiler lets through — the uninitialised read — is the only one capable of surviving into a running program.

**11.** *Concept: precedence across arithmetic, relational and logical operators, plus short-circuit evaluation.* **`r` is 0.** The expression is `a + b * c > a * b + c && !(a - b == c)` with `a = 5`, `b = 2`, `c = 3`, and the order is forced by the precedence ladder: **unary `!` binds tightest, then `*`, then `+` and `-`, then the relational `>`, then the equality `==`, then `&&`, then the assignment `=`.** So the arithmetic goes first, on both sides of the `>` independently: `b * c` = 2 × 3 = 6, so the left side is `5 + 6` = **11**; `a * b` = 5 × 2 = 10, so the right side is `10 + 3` = **13**. Only then is the comparison made: `11 > 13` is false, and a false relational operator yields the `int` **0**. That value is the left operand of `&&`. **The subexpression never evaluated is `!(a - b == c)`** — the entire right-hand operand of `&&`, including the subtraction, the equality test and the negation. The rule is **short-circuit evaluation**: `&&` yields 1 only if both operands are true, so once the left operand is known to be 0 the answer is 0 whatever the right operand would have been, and C guarantees the right operand is *not* evaluated in that case. (Had it been evaluated it would have given `5 - 2` = 3, `3 == 3` = 1, `!1` = **0** — the same 0, but reached by work the machine never did. The guarantee matters when the skipped side has a side effect or could fault, as in `p != NULL && p->value > 0`.) Finally `=` is the lowest-precedence operator in the line, which is why the whole comparison-and-logic expression is evaluated before anything is stored, and `r` receives **0**. **The mis-bracketed reading.** A student who thinks `&&` binds tighter than `>` reads it as `a + b * c > (a * b + c && !(a - b == c))`. Inside those brackets: `a * b + c` = 13, which is non-zero and therefore **true**; `!(a - b == c)` = `!(3 == 3)` = `!1` = **0**, false; so `13 && 0` is **0**. The comparison then becomes `11 > 0`, which is true, yielding **1**. So the two readings give **0** and **1** — opposite answers from the same characters, which is exactly why the precedence order has to be known rather than guessed.

**12.** *Concept: declaring a structure, reaching its members with the dot syntax, and what changes when the same members share one block of memory.*

```c
#include <stdio.h>
#include <string.h>

struct LibraryBook {
    char title[40];
    char author[40];
    int  copies;
};                                     /* the semicolon is part of the definition */

int main(void)
{
    struct LibraryBook b;              /* definition: reserves the storage        */

    strcpy(b.title,  "Things Fall Apart");   /* arrays: copy in, never b.title = ... */
    strcpy(b.author, "Chinua Achebe");
    b.copies = 3;                            /* a plain int: ordinary assignment     */

    printf("%s: %d copies\n", b.title, b.copies);   /* %s for the array, %d for the int */
    return 0;
}
```

Two points of syntax that are marked. The **dot** is how a member is reached, for reading and for writing alike — `b.copies = 3;` and `printf(..., b.copies)`. And the two `char` arrays cannot be assigned with `=`, because an array name is not something you can store into; the contents must be **copied** in with `strcpy`, while `copies`, being a plain `int`, takes an ordinary assignment. The conversion specifiers follow the member types: `%s` for the arrays, `%d` for the `int`.

**`sizeof(struct LibraryBook)` is 84 bytes.** Each member of a structure has its own storage, laid out in order, so the size is the sum of the members: 40 + 40 + 4 = 84. There is no padding to add here — `char` needs no alignment, so `copies` starts at offset 80, which is already a multiple of the 4 bytes an `int` requires, and 84 is already a multiple of the structure's own 4-byte alignment.

**If `struct` became `union`:** the layout collapses. All three members would **start at the same location**, so `title`, `author` and `copies` would be three names for one block of memory rather than three separate blocks, and **`sizeof(union LibraryBook)` would be 40** — the size of the largest member, `char[40]`, which is already a multiple of the 4-byte alignment the `int` member demands. The behaviour of the statements above would change accordingly and destructively: `strcpy(b.title, "Things Fall Apart")` writes 18 bytes at offset 0; `strcpy(b.author, "Chinua Achebe")` then writes 14 bytes over the same place, so the title is gone; and `b.copies = 3` writes four bytes of integer over the first four bytes of that text, so `b.title` and `b.author` now read as whatever three-then-a-null-byte happens to spell. The `printf` would print rubbish for the title and 3 for the copies, because `copies` was the member written last. A union variable **can represent the value of only one of its members at a time**, so a `LibraryBook` — which genuinely needs a title *and* an author *and* a count simultaneously — must be a structure. A union is the right choice only where the members are **alternatives**, never coexisting values.
