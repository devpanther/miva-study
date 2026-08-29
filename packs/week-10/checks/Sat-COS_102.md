# Saturday — COS_102 code nightly check

*Code work only, on this week's material: tracing a recursive call down to its base case and back up through its pending operations, predicting the return value of an array recursion and the output of an array loop, spotting a missing base case and a base case that is never reached, finding off-by-one and out-of-bounds faults in one- and two-dimensional traversals, distinguishing tail from non-tail on a real listing, and diagnosing infinite recursion and stack overflow. No definitions of "array", no listing the two components of a recursive function, no comparing iteration and recursion in the abstract — those were Wednesday.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** What does `sumArray(a, 5)` return?

```c
int sumArray(int a[], int n)
{
    if (n == 0) return 0;
    return sumArray(a, n - 1) + a[n - 1];
}

int a[5] = {2, 4, 6, 8, 10};
```

a) `30`  b) `20`  c) `28`  d) It never returns: `n` is not changed before the recursive call, so the descent has no end

**2.** What does `fact(3)` do?

```c
int fact(int n)
{
    return n * fact(n - 1);
}
```

a) Returns `6`, since the multiplications 3 × 2 × 1 are performed and 1 × 0 contributes nothing
b) Returns `0`: once `n` reaches 0 the expression becomes `0 * fact(-1)`, and zero times anything is zero, so the whole product collapses to zero and comes back up
c) Recurses without end. There is no base case, so nothing stops the descent — `n` goes 3, 2, 1, 0, −1, −2, … and each call takes a new stack frame until the stack is exhausted and the programme is killed. The multiplication by 0 never happens, because it is pending on a call that never returns
d) Fails to compile: a function that calls itself must contain an `if`

**3.** What does this print?

```c
int a[5] = {1, 2, 3, 4, 5};
int i, s = 0;

for (i = 1; i <= 5; i++)
    s = s + a[i];

printf("%d\n", s);
```

a) `15`  b) `14`
c) `2 + 3 + 4 + 5` plus whatever value happens to sit one element past the end of the array, because `a[5]` is outside the block of five and C neither checks nor prevents the read — so the printed number is not predictable and may differ between runs or machines
d) Nothing: the compiler rejects `a[5]`, since the index exceeds the declared size

**4.** What does `f(3)` print?

```c
void f(int n)
{
    if (n == 0) return;
    printf("%d ", n);
    f(n - 1);
    printf("%d ", n);
}
```

a) `3 2 1`  b) `3 2 1 1 2 3`  c) `3 3 2 2 1 1`  d) `1 2 3 3 2 1`

**5.** Consider `f(6)` and `f(7)`:

```c
int f(int n)
{
    if (n == 0) return 0;
    return 1 + f(n - 2);
}
```

a) Both return: `f(6)` gives 3 and `f(7)` gives 4
b) `f(6)` returns 3; `f(7)` never reaches the base case, because `n` goes 7, 5, 3, 1, −1, −3, … and steps straight over 0 without ever equalling it, so it recurses until the stack overflows
c) Neither returns, because subtracting 2 is not a small enough step to guarantee arrival at the base case for any input
d) `f(6)` returns 3 and `f(7)` returns 4, since the first negative value counts as having reached the base case

**6.** What does this print?

```c
int m[2][3] = { {1, 2, 3}, {4, 5, 6} };
int i, j, s = 0;

for (i = 0; i < 3; i++)
    for (j = 0; j < 2; j++)
        s = s + m[i][j];

printf("%d\n", s);
```

a) `21`  b) `12`
c) `1 + 2 + 4 + 5 = 12` plus two values read from beyond the array, because the loop bounds are the wrong way round: `i` is the row subscript and runs to 2 although there are only two rows, while `j` reaches only column 1 of the three
d) `6`, since the two loops together visit 3 × 2 = 6 positions and each `m[i][j]` is counted once

**7.** Both of these compute 1 + 2 + … + n. Which is tail recursive, and what does `b(4, 0)` return?

```c
int a(int n)            { if (n == 0) return 0;   return a(n - 1) + n; }
int b(int n, int acc)   { if (n == 0) return acc; return b(n - 1, acc + n); }
```

a) `a` is tail recursive and returns 10; `b` is not, because it carries an extra parameter
b) `b` is tail recursive and `b(4, 0)` returns `10` — when `b`'s recursive call returns, nothing remains to be done and its value is returned unchanged, whereas in `a` the `+ n` is still pending on return, which makes `a` non-tail
c) Both are tail recursive, since in both the recursive call is written on the last line of the function
d) Neither is tail recursive, because a tail-recursive function must not return a value

**8.** `int a[3] = {1, 2, 3}; int b[3];` and then `b = a;`. What is that last line?

a) A copy of all three elements, which is why the deck's copying exercise is a one-liner
b) A binding, after which `b` and `a` name the same three elements, so writing `b[0] = 9;` changes `a[0]` too
c) Not legal C: an array name is not a modifiable value and cannot appear on the left of an assignment, so a copy must be made element by element in a loop — which is exactly what the deck's "copy the elements into another array" exercise is asking for
d) Legal, but it copies only the first element, since an array name stands for its first element

**9. (explain why)** Trace this programme and state exactly what it prints. Set out the descent and the return, and say what is alive on the stack at the deepest moment and which operations are pending there. Then say what the programme would print if the base case were changed to `if (n == 1) return 0;`, and what would happen if that changed version were called on an empty array as `countTarget(a, 0, 42)`.

```c
#include <stdio.h>

int countTarget(int a[], int n, int target)
{
    if (n == 0) return 0;
    return countTarget(a, n - 1, target) + (a[n - 1] == target);
}

int main(void)
{
    int a[8] = {42, 7, 42, 3, 42, 42, 9, 1};
    printf("%d\n", countTarget(a, 8, 42));
    return 0;
}
```

**10. (explain why)** State what `halve(8)` and `halve(5)` return, showing the chain of calls. Then say exactly what `halve(0)` does and why, name the failure mode precisely, and explain why the symptom is not the same as that of an infinite `while` loop. Give a one-line repair and say which other inputs it also rescues.

```c
int halve(int n)
{
    if (n == 1) return 0;
    return 1 + halve(n / 2);
}
```

**11. (explain why)** This compiles and runs. Name **every** fault, say what it prints, repair it, and explain why each fault would survive being tested on this very data.

```c
#include <stdio.h>

int main(void)
{
    int src[5] = {1, 2, 3, 2, 5};
    int dst[5];
    int i, sum = 0;

    for (i = 0; i <= 5; i++)
        dst[i] = src[i];

    for (i = 1; i < 5; i++)
        sum = sum + dst[i];

    printf("%d\n", sum);
    return 0;
}
```

**12. (explain why)** The deck solves "count the occurrences of 42 in an array of n integers" **twice**, by two different decompositions. Write both functions in full, with their headers and their base cases. Explain why the second one's header cannot be the same as the first one's. Then trace the second on `a = {42, 5, 42, 42}` called as `count42b(a, 0, 3)`, showing every call and every returned value, and state what both functions return for this array.

---

## Answers

**1. a — `30`.** *Concept: a recursion that peels one element at a time; with `n` elements the last one sits at index `n − 1`.* `sumArray(a, 5)` is `sumArray(a, 4) + a[4]`, which is `sumArray(a, 3) + a[3] + a[4]`, and so on down to `sumArray(a, 0)`, which returns 0 by the base case. Coming back up: 0, then +2, +4, +6, +8, +10 — every element exactly once, giving **30**. (b) `20` is 2 + 4 + 6 + 8: it drops `a[4]`, which is what you get by reading the base case as consuming the last element, or by writing `a[n - 2]` "to stay safely inside the array". (c) `28` is 4 + 6 + 8 + 10: it drops `a[0]`, the mistake of someone who reads `a[n - 1]` as covering indices 1 to *n* and never notices that the final call, with `n = 1`, is the one that picks up `a[0]`. (d) misreads the argument: `n - 1` is evaluated **before** the call and the callee receives 4, a value one smaller — the caller's own `n` is untouched, which is exactly what makes the descent finite.

**2. c.** *Concept: a missing base case, and why a pending multiplication cannot rescue it.* There is no `if` that returns without recursing, so every call makes another: 3, 2, 1, 0, −1, −2, … Each takes a fresh stack frame, and the frames are never popped, so the stack region fills and the programme is terminated — a **stack overflow**, usually within a fraction of a second. (b) is the distractor this question exists for, and it is a genuinely tempting piece of reasoning: `0 * fact(-1)` does look as if the zero should annihilate the product. It cannot, because C evaluates the operands **before** it multiplies — the call `fact(-1)` must return a value before the `*` can be performed, and it never returns. The multiplication is **pending**, and a pending operation on a call that does not return is never carried out. (a) supplies a base case that is not in the code; `fact` as written never stops at 1. (d) invents a compilation rule; the function is perfectly well formed and compiles without complaint, which is precisely why the fault reaches run time.

**3. c.** *Concept: an off-by-one in the loop condition, and what reading past the end actually does.* The idiom is `for (i = 0; i < n; i++)`. This loop starts at 1 and uses `<=`, so it makes both errors at once: it visits indices 1, 2, 3, 4, 5 — skipping `a[0]` and reaching `a[5]`, which is one element past the end of a five-element block. The in-range part contributes 2 + 3 + 4 + 5 = 14; `a[5]` contributes whatever happens to be stored at that address, which is not part of the array and is not controlled by this programme. (a) `15` is the sum the programmer intended and is the answer of anyone who reads the loop as "all five elements". (b) `14` is the sharpest distractor: it correctly notices that `a[0]` is skipped but silently assumes `a[5]` reads as 0 or is ignored, which is the belief that out-of-range access is harmless — it is undefined, and the value can be anything, including one that makes the output look plausible. (d) expects a diagnosis; C stores no length and checks no bounds, and the programme compiles and runs.

**4. b — `3 2 1 1 2 3`.** *Concept: statements written after the recursive call run on the way back up, in reverse order of the calls.* `f(3)` prints `3`, calls `f(2)`, and its **second** `printf` is pending. `f(2)` prints `2`, calls `f(1)`, pending. `f(1)` prints `1`, calls `f(0)`, pending. `f(0)` returns at once. Now the frames unwind in the reverse order: `f(1)` resumes just after its call and prints `1`, then `f(2)` prints `2`, then `f(3)` prints `3`. Descending output `3 2 1`, then ascending output `1 2 3`. (a) `3 2 1` is what the function would print if the second `printf` were not there — the answer of someone who reads a recursive call as the end of the function. (c) `3 3 2 2 1 1` executes both `printf`s of a frame before descending, i.e. treats the recursive call as though it ran to completion in the middle of nothing; it is what you get by pairing each call's two prints together instead of separating them across the call. (d) reverses the two halves, printing the ascending pass first, which would require the base case to be reached before anything is printed.

**5. b.** *Concept: a base case that exists but is never reached — progress must actually land on it.* `f(6)`: 6 → 4 → 2 → 0, the base case fires and returns 0, and the three pending `1 +` operations give **3**. `f(7)`: 7 → 5 → 3 → 1 → **−1** → −3 → … The test `n == 0` is evaluated on every call and is false on every call, because the argument passes 0 without ever equalling it. The descent is unbounded and the programme dies of stack overflow. (a) assumes any decreasing argument must terminate; decreasing is not the same as **reaching**, and this is the exact misconception the question tests. (c) over-corrects into the belief that a step of 2 never works, when it works perfectly for every even input — the fault is in the fit between the step size and the base case, not in the step size alone. (d) invents a rule by which going past the base counts as reaching it; nothing in the code tests for negativity, and `n == 0` is an equality, not a threshold. The repair for both is to widen the base case to `if (n <= 0) return 0;`.

**6. c.** *Concept: each subscript of a multi-dimensional array has its own bound, and swapping the two limits is silent.* `m[2][3]` has **2 rows and 3 columns**, so the correct loops are `i < 2` over rows and `j < 3` over columns. Here they are exchanged. The pairs actually visited are (0,0)=1, (0,1)=2, (1,0)=4, (1,1)=5 — giving 12 — and then (2,0) and (2,1), which are outside the six-element block entirely, contributing two junk values. Column 2 (the values 3 and 6) is never visited at all. So the loop simultaneously misses part of the array and reads outside it. (a) `21` is the correct total, 1+2+3+4+5+6, and is what the programme was meant to print — the answer of someone who assumes the loops cover the array because both numbers 2 and 3 appear somewhere in them. (b) `12` is the sharpest distractor: it correctly identifies the four in-range elements but assumes the two out-of-range reads contribute nothing, which is again the belief that going out of bounds is harmless. (d) counts positions instead of checking whether those positions exist, which is exactly the reasoning that produced the bug.

**7. b.** *Concept: tail versus non-tail is about pending operations, not about the position of the call on the page.* In `b`, `return b(n - 1, acc + n);` — when that call produces its value, `b` returns it **unchanged**; there is nothing left in this frame to do, so `b` is **tail** recursive. Trace `b(4, 0)`: `b(3, 4)`, `b(2, 7)`, `b(1, 9)`, `b(0, 10)`, and the base case returns `acc` = **10**. In `a`, `return a(n - 1) + n;` still has an addition waiting when the inner call returns, so the frame must be kept alive to perform it — **non-tail**. (a) inverts the two and offers the extra parameter as the reason; the accumulator parameter is precisely the device that *makes* `b` tail recursive, by carrying the partial answer down instead of leaving it pending on the way up. (c) is the misconception the question is built on: in `a` the recursive call is on the last line and there is still work pending on its result, so "last line" is not the test — the test is whether anything is done to the returned value. (d) invents a restriction; a tail-recursive function returns a value in the ordinary way, and `b` returns `acc`.

**8. c.** *Concept: an array name is not an assignable value; copying an array is an element-by-element loop.* `b = a;` does not compile. In C an array name is not a modifiable value and cannot appear on the left of `=`, so there is no such thing as assigning one array to another. The copy has to be written out:
```c
for (i = 0; i < 3; i++)
    b[i] = a[i];
```
This is exactly why the deck sets **"copy the elements of the array above into another array"** as a separate exercise from summing them: it is not a one-line assignment, it is a traversal. (a) is the belief that arrays behave like the scalar variables `int x = y;`, which is what makes the exercise look trivial. (b) is the reference-semantics belief carried over from languages where a name refers to an object; even in the version of this that *is* possible in C — copying a pointer — the elements would not be duplicated, and here the line does not compile at all. (d) half-remembers that an array name decays to the address of its first element and turns that into a partial copy; the decay is about **reading** the name in an expression, and it still leaves nothing to assign to on the left.

**9.** *Concept: tracing a recursion that peels one element per call, with its combining operation pending on the way back up; and what happens when the base case is moved.* **It prints `4`.** The array is `{42, 7, 42, 3, 42, 42, 9, 1}`, and 42 appears at indices 0, 2, 4 and 5. **The descent.** `countTarget(a, 8, 42)` cannot answer until `countTarget(a, 7, 42)` has, so it makes that call with the comparison `(a[7] == 42)` **pending**; that call does the same with `(a[6] == 42)` pending, and so on: n = 8, 7, 6, 5, 4, 3, 2, 1, 0. **At the deepest moment** nine frames are alive — one for each of `n` = 8 down to `n` = 0 — and eight comparisons are pending, one per frame, each waiting for the value from the frame below it. Note that every frame has its own `n`; nothing is shared. **The return.** `countTarget(a, 0, 42)` matches the base case and returns 0. Then each frame completes its pending comparison and adds:
```
n=1: 0 + (a[0]==42 -> 1) = 1
n=2: 1 + (a[1]== 7 -> 0) = 1
n=3: 1 + (a[2]==42 -> 1) = 2
n=4: 2 + (a[3]== 3 -> 0) = 2
n=5: 2 + (a[4]==42 -> 1) = 3
n=6: 3 + (a[5]==42 -> 1) = 4
n=7: 4 + (a[6]== 9 -> 0) = 4
n=8: 4 + (a[7]== 1 -> 0) = 4
```
So `main` prints **4**. Observe that in C a comparison yields 1 or 0, which is why `+ (a[n-1] == target)` is a legal and idiomatic way to write "add one if it matches". **With the base case changed to `if (n == 1) return 0;`** the recursion stops one call early: the frame with `n = 1` returns 0 instead of examining `a[0]`, so the element at index 0 is never compared. That element **is** a 42, so the programme would print **3** — a wrong answer, quietly, on data that looks fine. This is the classic off-by-one of recursion, and it is the mirror image of the loop's `i <= n`: the base case must cover the empty case, so that the *n*-th call is the one that handles the first element. **On an empty array**, `countTarget(a, 0, 42)` with the changed base case is far worse than wrong. `n` is 0, the test `n == 1` fails, and the function calls itself with `n = −1`, which fails the test too, then −2, −3, … The base case is now **unreachable from n = 0**, so the descent never ends, frames accumulate, and the programme dies of **stack overflow** — and, on the way down, every call also evaluates `a[n - 1]` at `a[-1]`, `a[-2]`, …, reading memory before the start of the array. One misplaced base case has produced a silent wrong answer on ordinary input and a crash on the boundary input.

**10.** *Concept: infinite recursion caused by an argument that stops changing, and why it crashes rather than hangs.* **`halve(8)` returns 3.** `halve(8)` = 1 + `halve(4)` = 1 + 1 + `halve(2)` = 1 + 1 + 1 + `halve(1)`, and `halve(1)` matches the base case and returns 0. Coming back up: 0, 1, 2, **3**. **`halve(5)` returns 2.** Integer division truncates, so 5 / 2 = 2: `halve(5)` = 1 + `halve(2)` = 1 + 1 + `halve(1)` = 1 + 1 + 0 = **2**. (The function is counting how many halvings it takes to get down to 1.) **`halve(0)` never returns.** `n` is 0, the test `n == 1` is false, and the recursive call is `halve(0 / 2)` = `halve(0)` — the **same** argument. The function calls itself with the identical value forever: there is no progress at all, not merely progress in the wrong direction. This is the sharpest form of the fault, because a reader checking "does the argument get smaller?" sees a division and assumes it does. **The failure mode is a stack overflow.** Each call allocates a fresh frame holding its own `n` and its own return address, and no frame is ever popped, so the stack region grows without limit until the operating system refuses more and terminates the process — typically in a fraction of a second, with a segmentation fault or a "stack overflow" message. **Why that is not the symptom of an infinite `while` loop.** `while (1);` runs forever in **constant** memory: the process stays alive, consumes processor time, and has to be interrupted from outside. Infinite recursion consumes **memory per iteration**, so it dies on its own, quickly, and looks like a crash rather than a hang. Diagnosing the two the same way sends you looking in the wrong place: a hang means "no exit condition"; a fast crash after a recursive call means "the base case is not being reached". **The repair, one line:** change the base case to
```c
if (n <= 1) return 0;
```
This rescues `n = 0` immediately, and it also rescues every **negative** input: `halve(-4)` currently goes −4 → −2 → −1 → 0 (C truncates toward zero, so −1 / 2 is 0) → 0 → 0 → … , another endless run at a fixed value. With `n <= 1` the base case covers the whole region at and below 1, which is the general rule this fault illustrates — **a base case must be reachable from every legal input, so test a range rather than a single value** whenever the argument can jump.

**11.** *Concept: two independent index faults — a write past the end of an array, and a traversal that starts one place too late.* **It prints `12`.** **Fault 1 — the copy loop runs one past the end, and it *writes*.** `for (i = 0; i <= 5; i++)` gives `i` the values 0, 1, 2, 3, 4 and **5**. Both arrays hold five elements, at indices 0 to 4, so the last pass executes `dst[5] = src[5];`. That reads one element beyond `src` — a junk value — and, far worse, **writes** it one element beyond `dst`, into memory belonging to some other variable. Which variable depends on how the compiler laid out the frame; likely candidates here are `i` or `sum`, and if `i` were overwritten the loop could restart or run away. This is undefined behaviour: the programme may print the number below, print something else, or crash. *Repair:* `for (i = 0; i < 5; i++)`. **Fault 2 — the summing loop skips the first element.** `for (i = 1; i < 5; i++)` visits indices 1, 2, 3, 4 and never touches `dst[0]`, which holds 1. The sum is therefore 2 + 3 + 2 + 5 = **12** instead of the correct 1 + 2 + 3 + 2 + 5 = **13**. *Repair:* `for (i = 0; i < 5; i++)`. Note that the two faults are opposite errors made in the same programme — one loop reaches one index too far, the other starts one index too late — which is why "check the bounds" has to mean checking **both** ends of **each** loop separately against the idiom `i = 0; i < n; i++`. **Repaired programme:**
```c
#include <stdio.h>

int main(void)
{
    int src[5] = {1, 2, 3, 2, 5};
    int dst[5];
    int i, sum = 0;

    for (i = 0; i < 5; i++)        /* copy: element by element, i < 5 */
        dst[i] = src[i];

    for (i = 0; i < 5; i++)        /* sum: start at 0                 */
        sum = sum + dst[i];

    printf("%d\n", sum);           /* prints 13 */
    return 0;
}
```
**Why both faults survive testing on this data.** Fault 1 produces **no visible symptom at all** here: the out-of-range write happens to land somewhere that does not disturb the printed result on this compiler, on this run, so the programme completes normally and the bug is invisible. It may become visible only after an unrelated change moves the variables around — which is why out-of-bounds writes are found long after they are written, in code that has "always worked". Fault 2 is invisible for a different reason: it produces **a number, not a symptom**. 12 is a perfectly plausible total for five small values, and nothing about it announces that an element was skipped. Only checking the arithmetic by hand — five values, 1 + 2 + 3 + 2 + 5 = 13 — reveals it. Neither fault is caught by the compiler, because both loops are valid C; and neither is caught by running the programme, because a wrong answer and an undetected memory write both look exactly like success.

**12.** *Concept: two decompositions of one problem, and why the decomposition determines the header.* **Decomposition 1 — the first n − 1 elements, plus the n-th.** The sub-problems the deck lists are: count how often 42 appears in the **first n − 1** elements; count how often it appears in the **n-th** element; **add the two sums and return the result**. The base case is **n = 0**, the empty array.
```c
int count42a(int a[], int n)
{
    if (n == 0)                                   /* base case: nothing to count */
        return 0;
    return count42a(a, n - 1) + (a[n - 1] == 42); /* sub-problem + n-th element  */
}
/* called as: count42a(a, 4); */
```
**Decomposition 2 — two halves.** The deck describes it as **breaking the array into two pieces of equal size, counting the number of 42s in each half, and then adding the two sums** — and warns that **the header will be different**.
```c
int count42b(int a[], int lo, int hi)
{
    if (lo > hi)  return 0;                /* base case: empty piece      */
    if (lo == hi) return (a[lo] == 42);    /* base case: a single element */

    int mid = (lo + hi) / 2;
    return count42b(a, lo, mid) + count42b(a, mid + 1, hi);
}
/* called as: count42b(a, 0, n - 1); */
```
**Why the header must change.** In decomposition 1 every sub-problem is a **prefix** of the array — it always starts at index 0 — so a single number, the length, describes it completely, and `(a[], n)` suffices. In decomposition 2 the second sub-problem is the **upper half**, which does not start at index 0. A length alone cannot say where a piece begins, so the function must be told **both bounds**: where the piece starts and where it ends. That is the deck's point in step 1 of its general approach — *write the header, which shows what the function will do and how it will be called* — and its point in warning that the header will differ: the header is not chosen first and then filled in, it **follows from how you cut the problem**. Note also that the two-halves version needs **two** base cases, because halving can produce an empty piece as well as a single element. **The trace of `count42b(a, 0, 3)` on `a = {42, 5, 42, 42}`:**
```
count42b(a, 0, 3)   lo != hi, mid = (0+3)/2 = 1
  count42b(a, 0, 1)   lo != hi, mid = (0+1)/2 = 0
    count42b(a, 0, 0)   lo == hi -> (a[0] == 42) -> 1
    count42b(a, 1, 1)   lo == hi -> (a[1] ==  5) -> 0
                        returns 1 + 0 = 1
  count42b(a, 2, 3)   lo != hi, mid = (2+3)/2 = 2
    count42b(a, 2, 2)   lo == hi -> (a[2] == 42) -> 1
    count42b(a, 3, 3)   lo == hi -> (a[3] == 42) -> 1
                        returns 1 + 1 = 2
                    returns 1 + 2 = 3
```
So `count42b(a, 0, 3)` returns **3**, and `count42a(a, 4)` returns **3** as well — the array holds 42 at indices 0, 2 and 3. The two functions differ in the **shape of the call tree**: decomposition 1 makes a single unbranching chain of five calls, `n` = 4, 3, 2, 1, 0; decomposition 2 makes a branching tree of seven calls whose deepest point is three frames down. Both are correct, both terminate, and both satisfy the same two requirements — a base case, and recursive calls on strictly smaller pieces. Which one you write is the choice the deck is illustrating, and the header is the first thing that choice decides.
