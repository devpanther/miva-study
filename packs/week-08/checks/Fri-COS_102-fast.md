# Saturday — COS_102 code nightly check

*Code work only, on this week's material: tracing a call through its parameters to the value it returns and to what actually appears on the screen, predicting the return of a `void` function or one whose `return` sits in the wrong place, spotting the scope, shadowing or pass-by-value fault in a fragment, reading escape sequences in a `printf` string, and choosing the correct decomposition and import form for a stated task. No definitions of abstraction, no lists of benefits, no naming the parts of a header — those were Wednesday.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** What does this programme print?

```c
int bump(int x)
{
    x = x + 3;
    return x * 2;
}

int main(void)
{
    int a = 4;
    int b = bump(a);
    printf("%d %d\n", a, b);
    return 0;
}
```

a) `4 14`  b) `7 14`  c) `4 8`  d) `7 8`

**2.** `void tax(double amt) { printf("%.2f\n", amt * 0.075); }`, and a caller writes `double t = tax(1000);`. What happens, and why?

a) `t` becomes 75.00, since that is the value the function worked out and put on the screen
b) `t` becomes 0, because a `void` function has nothing else to hand back and so hands back zero
c) `t` becomes 1000, because when a function returns no value the argument is passed straight back to the caller
d) The line is invalid: `void` is the return type of a function that returns no value at all, so there is nothing for `t` to receive — putting characters on the screen and handing a value back are different acts

**3.** What does this print?

```c
int count = 0;

void bump(void)
{
    int count = 0;
    count = count + 1;
}

int main(void)
{
    bump();
    bump();
    printf("%d\n", count);
    return 0;
}
```

a) `2`  b) `1`  c) `0`  d) It does not compile, because the name `count` has already been used

**4.** You want exactly these two lines on the screen, the gaps being tab stops:

```
Name:   Ada
Path:   C:\temp
```

Which call produces them?

a) `printf("Name:\tAda\nPath:\tC:\temp\n");`
b) `printf("Name:\tAda\nPath:\tC:\\temp\n");`
c) `printf("Name:\\tAda\\nPath:\\tC:\\temp\\n");`
d) `printf("Name:/tAda/nPath:/tC:/temp/n");`

**5.** A task: read three students' scores, print a letter grade for each, and print the average of the three. Which decomposition follows this week's material?

a) `grade(score)`, which works out and prints one grade, and `average3(a, b, c)`, which returns the mean; `main` reads the scores, calls `grade` three times and `average3` once
b) `gradeStudent1(s1)`, `gradeStudent2(s2)` and `gradeStudent3(s3)`, one function per student so that each student's grading can later be changed on its own, plus `main` for the average
c) One function `doEverything(a, b, c)` holding the whole job, called once by `main`, so that all of the working is in a single place away from the entry point
d) No functions beyond `main`, since the task is small and every extra function is a further name that the reader of `main` has to go and look up

**6.** `double bmi(double mass, double height) { return mass / (height * height); }`. A caller writes `printf("%.4f\n", bmi(1.75, 70));`, meaning a mass of 70 kg and a height of 1.75 m. What is printed?

a) `22.8571`, since the compiler matches each argument to the parameter it was meant for by its type and its name
b) A compile error is reported, because 1.75 is not a plausible mass and the parameter is named `mass`
c) `0.0004`, because arguments bind to parameters strictly by position: `mass` takes 1.75 and `height` takes 70, and as both are `double` nothing warns you
d) `0.0000`, because dividing a small number by a much larger one gives a result that is truncated away before printing

**7.** What is printed?

```c
int twice(int n)  { return n * 2; }
int addOne(int n) { return n + 1; }

int main(void)
{
    printf("%d\n", twice(addOne(3)));
    return 0;
}
```

a) `6`  b) `7`  c) `8`  d) `9`

**8.** What does `sumTo(4)` return?

```c
int sumTo(int n)
{
    int s = 0;
    int i = 1;
    while (i <= n) {
        s = s + i;
        i = i + 1;
        return s;
    }
    return 0;
}
```

a) `10`, since the loop runs while `i <= 4` and `s` accumulates 1 + 2 + 3 + 4 before the finished total is handed back
b) `1`, because `return` does not merely end the current pass of the loop — it ends the whole function at once, on the first pass, when `s` is still 1
c) `4`, because a `return` placed inside a loop hands back the number of passes the loop completed
d) `0`, because a `return` inside a loop body is skipped and the function falls through to the `return 0;` at the bottom

**9. (explain why)** Trace this programme and state exactly what it prints. Then explain why the global `total` holds the value it does, naming the mechanism; say which one line you would delete to make `add` update the global instead, and explain why doing so would be a bad trade.

```c
#include <stdio.h>

int total = 0;

int add(int a, int b)
{
    int total;
    total = a + b;
    return total;
}

void report(int v)
{
    printf("v = %d, total = %d\n", v, total);
}

int main(void)
{
    int x = 3, y = 5;
    int r = add(x, y);
    total = total + 1;
    report(r);
    return 0;
}
```

**10. (explain why)** This is meant to exchange two values, and does not. State what it prints, explain exactly what went wrong in terms of what a parameter *is*, and give two different repairs — one that keeps the values in the caller and one that changes what is passed. Say what each repair costs.

```c
void swap(int a, int b)
{
    int t = a;
    a = b;
    b = t;
}

int main(void)
{
    int p = 2, q = 9;
    swap(p, q);
    printf("%d %d\n", p, q);
    return 0;
}
```

**11. (explain why)** A programme must read three test scores, print `A` for a score of 70 or more, `Pass` for 50 or more, `Fail` otherwise, and then print the average of the three. The first draft writes the whole `if … else if … else` chain out three times inside `main` and computes the average with `(a + b + c) / 3`. Rewrite it as a decomposition into functions: give each function's header and body, say for one call which value is the argument and which name is the parameter, state what the programme prints for the scores **82, 64 and 41**, and explain the one arithmetic fault in `(a + b + c) / 3`.

**12. (explain why)** A module file `special_functions` contains the functions `max` and `min`. Write both import forms, and beside each write the call that finds the larger of 4 and 7. Then say for each form which names have become usable in your code and which have not. Finally, explain what is wrong with

```
import special_functions
m = max(4, 7)
```

and give the two different one-line fixes.

---

## Answers

**1. a — `4 14`.** *Concept: a parameter is a local copy; assigning to it cannot reach the caller's variable.* The call passes the **value** of `a`, which is 4, into the parameter `x`. Inside `bump`, `x` becomes 7 and the function returns 7 × 2 = **14**. Back in `main`, `a` was never touched — `x` is a separate variable that merely started with a copy of `a`'s value — so `a` is still **4** and `b` is 14. (b) is the belief that `x` and `a` are the same variable under two names, which is the single commonest error in the topic; if that were true, no function could safely use its parameters as working storage. (c) returns 4 × 2 and forgets that the body ran at all before the `return`. (d) makes both mistakes at once: it applies the `+ 3` to the caller's variable and then forgets it when doubling.

**2. d.** *Concept: `void` means no value returned; printing is not returning.* The return type `void` names a function that hands **nothing** back, so its call is a statement in its own right and cannot appear on the right of an `=`. (a) is the trap the whole question exists for: the number 75.00 certainly *appears*, but `printf` sends characters to the screen and that is the end of them — nothing in the programme can pick them up again, and only `return` gives a value to the caller. (b) invents a default return value; "returns nothing" and "returns zero" are different states, and `return 0;` would require the return type to be a number type in the first place. (c) invents a pass-back rule; arguments travel one way, into the parameters, and the parameters are copies.

**3. c — `0`.** *Concept: shadowing — a local with the same name as a global hides it, and assignments there never reach the global.* Inside `bump`, `int count;` declares a **new local** variable, and every use of `count` in that body refers to it. So each call sets the local to 0, raises it to 1, and then the local is destroyed when the call ends. The global `count` is never mentioned inside `bump` at all, so it is still **0** when `main` prints it. (a) `2` is the answer of someone who reads the two names as one variable and counts the two calls — it is what the programme would print if the line `int count;` were deleted. (b) `1` counts one call, which no reading supports. (d) treats a shadowed name as a redeclaration clash; it is legal precisely because the two names live in different scopes, which is what makes a function body private.

**4. b.** *Concept: reading escape sequences — every backslash inside a string starts one.* `\t` is a **horizontal tab**, `\n` a **newline**, and `\\` is the escape whose meaning is a single **backslash**. So `"Name:\tAda\nPath:\tC:\\temp\n"` gives `Name:`, tab, `Ada`, newline, `Path:`, tab, `C:\temp`, newline — exactly the target. (a) is the fault this question is about: in `C:\temp` the `\t` is *also* read as an escape, so the second line comes out as `Path:` tab `C:` tab `emp`. Nothing in the source looks wrong, which is why the mistake survives being read back. (c) doubles **every** backslash, so nothing is an escape any more and the call prints the literal characters `Name:\tAda\nPath:\tC:\temp\n` on one line. (d) uses forward slashes, which have no escape meaning at all in C — `/t` and `/n` print as themselves.

**5. a.** *Concept: decomposition — one function per specific task, written once however many times it is used.* The course's rule is that the division is up to the programmer **but logically such that each function performs a specific task**, and the stated benefit is that a function is **implemented only once regardless of how many times it is used**. Grading is one task needed three times, so it becomes one function called three times; averaging is a different task, so it is a different function. (b) is the exact inversion of the benefit: three functions with identical bodies is the duplication that functions exist to remove, and the excuse — "so each can be changed on its own" — describes a *requirement* that the task does not have. (c) puts the whole job in one function and renames the problem: `doEverything` performs no **specific** task, so nothing has been decomposed and nothing can be reused. (d) is the "it's small now" answer that the course's opening argument answers directly — projects grow, more people join, and the point of functions is that the system **remains stable** as more are added.

**6. c — `0.0004`.** *Concept: arguments bind to parameters by position.* `bmi(1.75, 70)` gives `mass` the value 1.75 and `height` the value 70, so the function computes 1.75 / (70 × 70) = 1.75 / 4900 = 0.000357…, printed to four places as **0.0004**. The intended calculation was 70 / (1.75 × 1.75) = 70 / 3.0625 = 22.8571. (a) is the belief that the parameter's **name** or its meaning does the matching; names are for the reader, position is for the compiler. (b) expects the compiler to check plausibility; a compiler checks **types**, and both values are `double`, so the swap passes in complete silence — which is why this fault reaches the marked script. (d) invents integer truncation in a `double` expression; nothing here is an `int`, and 0.000357 is a perfectly representable value.

**7. c — `8`.** *Concept: a nested call is evaluated inside-out; its return value becomes the argument to the outer call.* `addOne(3)` runs first and returns 4; that 4 is then the argument passed to `twice`, which returns 8, and 8 is the argument `printf` displays. (b) `7` is `addOne(twice(3))` — the two functions applied in the wrong order, which is what you get by reading the line left to right as though the outer name acted first. (a) `6` drops `addOne` entirely and computes `twice(3)`. (d) `9` adds one *after* doubling, i.e. `addOne(twice(...))` with the 3 doubled first — the same order error as (b) worked from the other end. Only one of the four is what the brackets say, and the brackets are the whole content of the question.

**8. b — `1`.** *Concept: `return` ends the function immediately, not just the loop pass.* The loop body runs once: `s` becomes 0 + 1 = 1, `i` becomes 2, and then `return s;` executes — which hands 1 back and terminates `sumTo` on the spot. The condition `i <= n` is never tested a second time and the `return 0;` at the bottom is never reached. (a) `10` is what the function was meant to do and what it *would* do if the `return s;` were moved below the closing brace of the loop; it is the answer of anyone who reads `return` as "end this pass". (c) invents a meaning for `return` inside a loop; `return` hands back the value of the expression written after it, and that expression is `s`. (d) is the belief that the last `return` in a function is the one that counts; execution reaches at most one `return`, and it is whichever one it meets first.

**9.** *Concept: tracing a programme with a shadowed global; what a function's interface does and does not include.* **It prints `v = 8, total = 1`.** Trace it: `main` sets `x = 3`, `y = 5` and calls `add(3, 5)`. Inside `add` the parameters `a` and `b` receive 3 and 5, and the line `int total;` declares a **local** variable of that name, which **shadows** the global for the whole of `add`'s body. `total = a + b;` therefore writes 8 into the **local**, and `return total;` hands that 8 back, so `r` is 8. When `add` returns, its local `total` ceases to exist and the global — never mentioned inside `add` — is still 0. `main` then executes `total = total + 1;`, and here there is no local of that name in scope, so this **is** the global: it becomes 1. `report(8)` receives 8 into its parameter `v` and prints the global `total`, which it can see because a global is visible to every function in the file: `v = 8, total = 1`. **The mechanism is shadowing**, and the value 8 got out of `add` by the only route it had — the **return value**. **The one-line deletion:** remove `int total;` from `add`. Then the name inside `add` resolves to the global and `total = a + b;` writes 8 into it, so the programme would print `v = 8, total = 9`. **Why that is a bad trade.** `add`'s header, `int add(int a, int b)`, states its input format and its output format, and after the deletion it no longer tells the truth: the function would also silently write to something the caller never passed and never received. Every caller of `add` then has to know its internals — which is the thing functional abstraction exists to prevent — and the guarantee that the body can be rewritten without breaking other parts of the code is lost, because the body and the rest of the file now share state. Concretely: `main` would have to know whether to increment `total` *before* or *after* calling `add`, and any second function that also wrote to `total` would make `add`'s effect depend on the order in which the two were called. The local costs one line and buys a function whose header is a complete description of it.

**10.** *Concept: pass-by-value — a parameter receives a copy, so a function cannot alter the caller's variables through one.* **It prints `2 9`** — unchanged. **What went wrong.** The course says a parameter is **like a placeholder**, and that **when a function is invoked, a value is passed to the parameter**. A *value* is passed, not the variable itself: `a` and `b` are two fresh local variables of `swap` that begin life holding copies of 2 and 9. The body swaps those copies perfectly — after the three lines, `a` is 9 and `b` is 2 — and then `swap` returns, its locals are destroyed, and `p` and `q`, which were never touched, still hold 2 and 9. The function is not wrong about swapping; it is swapping the wrong two variables, and there is no way for it to reach the right ones, because nothing about `p` and `q` was ever passed to it. **Repair 1 — keep the values in the caller.** Give up on a function that mutates, and use the interface a function does have: return one of the values, or do the exchange where the variables live.
```c
int t = p;  p = q;  q = t;      /* three lines in main, no function at all */
```
Cost: the exchange is no longer a named, reusable piece of the programme — if it is needed in five places it is written five times, which is exactly the duplication functions exist to prevent. A function can return only one value, so a single `swap` returning both is not available at this level. **Repair 2 — change what is passed.** Pass the *addresses* of the caller's variables instead of their values, so that the function is given a route back to them:
```c
void swap(int *a, int *b)
{
    int t = *a;
    *a = *b;
    *b = t;
}
/* called as: */  swap(&p, &q);       /* now prints 9 2 */
```
Cost: the interface is harder — the caller must write `&`, the body must write `*`, and the header now advertises that the function reaches into the caller's variables, which is a real loss of abstraction and is exactly why it must be visible in the header rather than hidden. The general lesson: if a function must change something the caller holds, that has to be part of its declared interface, either as a returned value or as something explicitly passed; it can never happen by accident through an ordinary parameter.

**11.** *Concept: extracting a repeated block into a function, and integer division.* **The decomposition.** Two specific tasks appear in the statement — deciding and printing one grade, and averaging three numbers — so there are two functions:
```c
void printGrade(int score)                     /* header: void return type, one parameter */
{
    if (score >= 70)      printf("A\n");
    else if (score >= 50) printf("Pass\n");
    else                  printf("Fail\n");
}

double average3(int a, int b, int c)           /* header: returns a double, three parameters */
{
    return (a + b + c) / 3.0;
}

int main(void)
{
    int s1 = 82, s2 = 64, s3 = 41;
    printGrade(s1);
    printGrade(s2);
    printGrade(s3);
    printf("%.2f\n", average3(s1, s2, s3));
    return 0;
}
```
The grading chain is now written **once** and used **three** times, which is the course's stated benefit; and `printGrade` is `void` because its job is to put characters on the screen, while `average3` has a return type because its job is to hand a number back for `main` to print. **Parameter and argument at one call.** In `printGrade(s1)`, the **parameter** is `score` — the placeholder written once in the header of `printGrade` — and the **argument** is the value of `s1`, namely 82, supplied at this particular call. The next call supplies 64 to the same parameter. **What it prints** for 82, 64, 41:
```
A
Pass
Fail
62.33
```
82 ≥ 70 gives `A`; 64 fails 70 but meets 50, giving `Pass`; 41 fails both, giving `Fail`. The sum is 82 + 64 + 41 = 187, and 187 / 3 = 62.333…, printed to two places as **62.33**. **The arithmetic fault in `(a + b + c) / 3`.** All three scores are `int` and 3 is an `int`, so this is **integer division**: the fractional part is discarded rather than rounded, and 187 / 3 evaluates to **62**, not 62.33. Storing the result in a `double` afterwards does not help, because the damage is done before the assignment. The fix is to make one operand a real number — `/ 3.0`, as above — so that the division is done in floating point. Note that the error is invisible whenever the total happens to divide exactly, which is why it survives testing on tidy sample data.

**12.** *Concept: the two import forms, and what each makes usable.* **The two forms, with the matching call:**
```python
import special_functions                 # brings in the MODULE
m = special_functions.max(4, 7)          # reach the function through the module's name

from special_functions import max        # brings in ONE function, by name
m = max(4, 7)                            # call it directly
```
**What each makes usable.** After `import special_functions`, the name **`special_functions`** is usable, and through it **every** function and class in the module — `special_functions.max`, `special_functions.min`. What is **not** usable is the bare name `max`, or the bare name `min`: nothing has been added to your code's own names. After `from special_functions import max`, the name **`max`** is usable directly. What is **not** usable is `min`, because you **explicitly specified the exact function you want**, and — as the course puts it — with this command **you can only use the `max` function**; the name `special_functions` is not made available either, so `special_functions.min(4, 7)` fails as well. **What is wrong with the fragment.** It imports the module and then calls `max` as though the second form had been used. The module has been made available under its own name, but no name called `max` has been introduced into this code, so `max(4, 7)` does not name the module's function. **The two one-line fixes** — and they fix it in opposite places:
```python
m = special_functions.max(4, 7)          # keep the import, qualify the call
from special_functions import max        # keep the call, change the import
```
The choice between them is the ordinary trade this week is about: qualifying the call keeps it obvious which module a function came from, at the cost of a longer line every time; importing the name directly keeps calls short, at the cost of hiding where `max` came from — and of introducing a name that may collide with one of your own. Either way, what you know about `max` is only its name and the format of its input and output, which is why the same mechanism appears in C as `#include` of a header file.
