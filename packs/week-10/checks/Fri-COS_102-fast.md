# Friday — COS_102 fast-hour check

*Code work on arrays and recursion.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** What does `show(3)` print?

```c
void show(int n)
{
    if (n == 0) return;
    show(n - 1);
    printf("%d ", n);
}
```
A. 3 2 1
B. 1 2 3
C. 0 1 2 3
D. 3 2 1 0

**2.** `int a[6] = {7, 2, 9, 4, 5, 1};` What does `r(a, 6)` return?

```c
int r(int a[], int n)
{
    if (n == 0) return 0;
    return r(a, n - 1) + (a[n - 1] > 4);
}
```
A. 3
B. 21
C. 4
D. 2

**3.** Complete the missing line so that `digits(n)` returns the number of decimal digits of a positive n, for example `digits(4725)` = 4.

```c
int digits(int n)
{
    if (n < 10) return 1;
    return ____;
}
```
A. `1 + digits(n % 10)`
B. `digits(n / 10)`
C. `1 + digits(n - 10)`
D. `1 + digits(n / 10)`

**4.** `total(a, n)` is meant to return a[0] + a[1] + ... + a[n − 1]. Which single change fixes it?

```c
int total(int a[], int n)
{
    if (n == 0) return 0;
    return total(a, n - 1) + a[n];
}
```
A. Change `n == 0` to `n == 1`
B. Change `a[n]` to `a[n - 1]`
C. Change `n - 1` to `n`
D. Change `return 0` to `return a[0]`

**5.** `int a[n]` is filled and `int b[n]` is declared. Which statement correctly copies the contents of a into b?
A. `for (i = 0; i < n; i++) b[i] = a[i];`
B. `b = a;`
C. `for (i = 1; i <= n; i++) b[i] = a[i];`
D. `for (i = 0; i < n; i++) a[i] = b[i];`

**6.** Which of these functions is tail recursive?
A. `int f(int n) { if (n == 0) return 0; return f(n - 1) + 1; }`
B. `int h(int n) { if (n == 0) return 1; return 2 * h(n - 1); }`
C. `void k(int n) { if (n == 0) return; k(n - 1); printf("%d ", n); }`
D. `int m(int n, int b) { if (n == 0) return b; return m(n - 1, b + 2); }`

**7.** What does this print?

```c
int m[2][3] = {{1, 2, 3}, {4, 5, 6}};
int i, j, t = 0;
for (i = 0; i < 2; i++)
    for (j = i; j < 3; j++)
        t = t + m[i][j];
printf("%d", t);
```
A. 21
B. 11
C. 17
D. 8

**8.** `fact(n)` is written as `return n * fact(n - 1);` with no other line. Calling `fact(5)` ends within a second with a segmentation fault. Which diagnosis is right?
A. Stack overflow: no base case, so a new frame is added on every call until the stack runs out
B. Infinite loop: the program should have hung rather than stopped
C. Integer overflow: n became too large for an int
D. Compile error: the function was never built

**9. (show your working)** Write a recursive C function `int pw(int b, int e)` that returns b raised to the power e for e >= 0. State the base case and its value and the recursive case, then trace `pw(3, 4)` showing what is pending in each frame. Show your working.

**10. (show your working)** This is meant to print the elements of a in reverse order. State what is actually printed, which access is out of range, which element is never printed, and write the corrected loop. Show your working.

```c
int a[4] = {2, 4, 6, 8};
int i;
for (i = 4; i > 0; i--)
    printf("%d ", a[i]);
```

**11. (show your working)** Rewrite `s` as an iterative function using a loop that returns the same value for every n >= 0, then state the value of `s(5)` for both versions. Show your working.

```c
int s(int n)
{
    if (n == 0) return 0;
    return s(n - 1) + n;
}
```

**12. (show your working)** Every recursive function needs two components, plus one further condition on how they relate. Name all three, then apply them to this listing: say which are present, which fails, and what happens when `pw(2, 3)` is called.

```c
int pw(int b, int e)
{
    if (e == 0) return 1;
    return b * pw(b, e);
}
```

---

## Answers

**1. B** — *Output order around a recursive call.* The printf comes after the recursive call, so nothing is printed on the way down: show(3) calls show(2), which calls show(1), which calls show(0), which returns at once. Then control comes back to the point just after each call, so the prints run in reverse order of the calls: 1, then 2, then 3. Output: 1 2 3.

3 2 1 is what you get if the printf were before the call; 0 1 2 3 and 3 2 1 0 have the base case printing, but show(0) returns before reaching printf.

**2. A** — *Return value of an array recursion.* (a[n − 1] > 4) is 1 when the element is greater than 4 and 0 otherwise, so r counts the elements of a[0..n−1] that exceed 4. Unwinding: r(a, 6) adds a[5] = 1 (0), a[4] = 5 (1), a[3] = 4 (0), a[2] = 9 (1), a[1] = 2 (0), a[0] = 7 (1), on top of r(a, 0) = 0. Total 3.

21 adds the qualifying values 7 + 9 + 5 instead of counting them; 4 counts 4 itself, reading > as >=; 2 forgets that the last call, r(a, 1), examines a[0].

**3. D** — *Completing a recursive case.* The recursive case must count this digit and hand a smaller number of the same kind to the same function. n / 10 drops the last digit, so 1 + digits(n / 10) counts one digit per call: digits(4725) = 1 + digits(472) = 2 + digits(47) = 3 + digits(4) = 4.

digits(n / 10) drops the last digit but never counts it, so it returns 1 for every n; 1 + digits(n % 10) passes the last digit, which is always below 10, so it returns 2 for every n >= 10; 1 + digits(n − 10) subtracts 10 each call and counts tens, giving 473 for 4725.

**4. B** — *Off-by-one in a recursive index.* With n elements, the last one sits at offset n − 1, not n. As written, total(a, 4) adds a[4], a[3], a[2], a[1]: it reads one element past the end and never adds a[0]. Changing a[n] to a[n − 1] makes each call pick up the element at the end of its own prefix, and total(a, 1) adds a[0].

Changing the base case to n == 1 makes total(a, 0) recurse forever; changing n − 1 to n removes all progress toward the base case; changing return 0 to return a[0] adds a[0] to a sum that still reads a[n] out of range.

**5. A** — *Copying an array.* An array name is not a modifiable value, so a copy must be made element by element with the standard traversal: start at 0, continue while i < n, step by 1, assigning each a[i] to b[i].

b = a; does not compile, because arrays cannot be assigned as a whole; the loop from 1 to n skips a[0] and writes b[n], one past the end; the last loop copies in the wrong direction, overwriting a with the unset contents of b.

**6. D** — *Tail versus non-tail recursion.* Tail recursion means no pending operation when the recursive call returns. In m, the value of m(n − 1, b + 2) is returned unchanged; all the work was done in the argument before the call, so nothing waits. That is tail recursion.

f has + 1 waiting on the returned value; h has 2 × waiting; both have the call on the last line, which is not the test. k has a printf that runs after the call returns, so an operation is pending even though no value is combined.

**7. C** — *Tracing nested array loops.* The inner loop starts at j = i. Row 0: j = 0, 1, 2 adds 1 + 2 + 3 = 6. Row 1: j = 1, 2 adds 5 + 6 = 11. t = 17.

21 ignores the start j = i and adds every element; 11 starts j at i + 1 (2 + 3 + 6); 8 uses 2 as the inner bound instead of 3 (1 + 2 + 5).

**8. A** — *Infinite recursion and the stack.* Without a base case, fact(5) calls fact(4), fact(3), ... and keeps going past 0 into negatives. Each call is a new stack frame with a pending multiplication, so memory grows by one frame per call until the stack space is exhausted and the program is killed: a stack overflow. It fails on space, and quickly.

An infinite loop runs in constant memory and would hang, not crash; n is getting smaller, not larger, so int overflow is not the cause; the code is valid C and compiles without complaint.

**9.** *Writing a recursive power function.* Base case: e == 0 returns 1, since anything to the power 0 is 1. Recursive case: b × pw(b, e − 1), a smaller version of the same problem with one multiplication pending.

```c
int pw(int b, int e)
{
    if (e == 0) return 1;
    return b * pw(b, e - 1);
}
```

Trace: pw(3, 4) waits for 3 × pw(3, 3); pw(3, 3) waits for 3 × pw(3, 2); pw(3, 2) waits for 3 × pw(3, 1); pw(3, 1) waits for 3 × pw(3, 0); pw(3, 0) returns 1. Unwinding: 3, 9, 27, 81. Final answer: pw(3, 4) = 81.

A correct answer has a base case at e == 0 returning 1 with no recursive call, a recursive call with e − 1, the multiplication by b, and the value 81. A base case of e == 1 returning b is also accepted if the trace is consistent with it. A base case returning 0, or a call that passes e unchanged, is wrong.

**10.** *Reverse traversal bounds.* The legal indices are 0 to 3, but the loop visits i = 4, 3, 2, 1. The first access, a[4], is one past the end: it compiles and runs, and prints whatever junk is stored there. Then a[3], a[2], a[1] print 8 6 4. The loop stops when i reaches 0, so a[0] (the value 2) is never printed. Output: junk 8 6 4. The corrected loop is `for (i = 3; i >= 0; i--) printf("%d ", a[i]);`, which prints 8 6 4 2.

A correct answer says a[4] is out of range and prints an unpredictable value, that a[0] is missed, and starts the loop at 3 and continues while i >= 0. Starting at 3 with i > −1 is also accepted.

**11.** *Rewriting recursion as a loop.* The recursion adds n, then n − 1, down to 1, on top of the base value 0. A loop does the same with an accumulator: start at 0 and add each i from 1 to n.

```c
int sIter(int n)
{
    int i, total = 0;
    for (i = 1; i <= n; i++)
        total = total + i;
    return total;
}
```

s(5) = 5 + 4 + 3 + 2 + 1 + 0 = 15, and the loop gives 1 + 2 + 3 + 4 + 5 = 15. Final answer: 15 for both.

A correct answer has an accumulator initialised to 0, a loop that visits 1 to n inclusive (i <= n, or 0 to n, or n down to 1), adds i each pass, returns the accumulator, and gives 15. A loop with i < n gives 10 and is wrong.

**12.** *Components of a recursive function.* The two components are a base case, which answers the smallest input outright with no recursive call, and a recursive case, which calls the function on a smaller version of the same problem and combines the result. The further condition is progress: every recursive call must move its argument towards the base case. Here the base case (e == 0 returns 1) is present and the recursive case has the right combining work, b × ..., but the call passes e unchanged, so no progress is made. pw(2, 3) calls pw(2, 3) again, forever, each call adding a frame with a multiplication pending, until the stack overflows and the program crashes. The fix is pw(b, e − 1).

A correct answer names base case, recursive case and progress towards the base case, identifies the unchanged e as the failure, and says the result is infinite recursion ending in a stack overflow, not a wrong number.
