# Friday, second hour — COS_102 check

*Code work on arrays and recursion.*

*Tracing a recursive call down to its base case and back up through its pending operations.*

*Predicting the return value of an array recursion, and the output of one- and two-dimensional array loops.*

*Spotting a missing base case, and a base case that is never reached.*

*Finding off-by-one and out-of-bounds faults in traversals and in recursive index expressions.*

*Distinguishing tail from non-tail recursion on a real listing.*

*Recognising that an array name cannot be assigned, so a copy must be a loop.*

*Diagnosing infinite recursion as a stack overflow rather than a hang.*

**1.** What does sumArray(a, 5) return?

```c
int sumArray(int a[], int n)
{
    if (n == 0) return 0;
    return sumArray(a, n - 1) + a[n - 1];
}

int a[5] = {2, 4, 6, 8, 10};
```

A. 30
B. 20
C. 28
D. It never returns: n is not changed before the recursive call, so the descent has no end

**2.** What does fact(3) do?

```c
int fact(int n)
{
    return n * fact(n - 1);
}
```

A. Recurses without end. There is no base case, so nothing stops the descent - n goes 3, 2, 1, 0, -1, -2, ... and each call takes a new stack frame until the stack is exhausted and the programme is killed. The multiplication by 0 never happens, because it is pending on a call that never returns
B. Returns 0: once n reaches 0 the expression becomes 0 * fact(-1), and zero times anything is zero, so the whole product collapses to zero and comes back up
C. Returns 6, since the multiplications 3 x 2 x 1 are performed and 1 x 0 contributes nothing
D. Fails to compile: a function that calls itself must contain an if

**3.** What does this print?

```c
int a[5] = {1, 2, 3, 4, 5};
int i, s = 0;

for (i = 1; i <= 5; i++)
    s = s + a[i];

printf("%d\n", s);
```

A. 15
B. 14
C. Nothing: the compiler rejects a[5], since the index exceeds the declared size
D. 2 + 3 + 4 + 5 plus whatever value happens to sit one element past the end of the array, because a[5] is outside the block of five and C neither checks nor prevents the read - so the printed number is not predictable and may differ between runs or machines

**4.** What does f(3) print?

```c
void f(int n)
{
    if (n == 0) return;
    printf("%d ", n);
    f(n - 1);
    printf("%d ", n);
}
```

A. 3 2 1
B. 1 2 3 3 2 1
C. 3 3 2 2 1 1
D. 3 2 1 1 2 3

**5.** Consider f(6) and f(7):

```c
int f(int n)
{
    if (n == 0) return 0;
    return 1 + f(n - 2);
}
```

A. Both return: f(6) gives 3 and f(7) gives 4
B. f(6) returns 3; f(7) never reaches the base case, because n goes 7, 5, 3, 1, -1, -3, ... and steps straight over 0 without ever equalling it, so it recurses until the stack overflows
C. Neither returns, because subtracting 2 is not a small enough step to guarantee arrival at the base case for any input
D. f(6) returns 3 and f(7) returns 4, since the first negative value counts as having reached the base case

**6.** What does this print?

```c
int m[2][3] = { {1, 2, 3}, {4, 5, 6} };
int i, j, s = 0;

for (i = 0; i < 3; i++)
    for (j = 0; j < 2; j++)
        s = s + m[i][j];

printf("%d\n", s);
```

A. 21
B. 12
C. 1 + 2 + 4 + 5 = 12 plus two values read from beyond the array, because the loop bounds are the wrong way round: i is the row subscript and runs to 2 although there are only two rows, while j reaches only column 1 of the three
D. 6, since the two loops together visit 3 x 2 = 6 positions and each m[i][j] is counted once

**7.** Both of these compute 1 + 2 + ... + n. Which is tail recursive, and what does b(4, 0) return?

```c
int a(int n)            { if (n == 0) return 0;   return a(n - 1) + n; }
int b(int n, int acc)   { if (n == 0) return acc; return b(n - 1, acc + n); }
```

A. a is tail recursive and returns 10; b is not, because it carries an extra parameter
B. b is tail recursive and b(4, 0) returns 10 - when b's recursive call returns, nothing remains to be done and its value is returned unchanged, whereas in a the + n is still pending on return, which makes a non-tail
C. Both are tail recursive, since in both the recursive call is written on the last line of the function
D. Neither is tail recursive, because a tail-recursive function must not return a value

**8.** int a[3] = {1, 2, 3}; int b[3]; and then b = a;. What is that last line?

A. A copy of all three elements, which is why the deck's copying exercise is a one-liner
B. A binding, after which b and a name the same three elements, so writing b[0] = 9; changes a[0] too
C. Not legal C: an array name is not a modifiable value and cannot appear on the left of an assignment, so a copy must be made element by element in a loop - which is exactly what the deck's "copy the elements into another array" exercise is asking for
D. Legal, but it copies only the first element, since an array name stands for its first element

**9.** *(short answer)* (explain why) Trace this programme and state exactly what it prints. Set out the descent and the return, and say what is alive on the stack at the deepest moment and which operations are pending there. Then say what the programme would print if the base case were changed to if (n == 1) return 0;, and what would happen if that changed version were called on an empty array as countTarget(a, 0, 42).

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

**10.** *(short answer)* (explain why) State what halve(8) and halve(5) return, showing the chain of calls. Then say exactly what halve(0) does and why, name the failure mode precisely, and explain why the symptom is not the same as that of an infinite while loop. Give a one-line repair and say which other inputs it also rescues.

```c
int halve(int n)
{
    if (n == 1) return 0;
    return 1 + halve(n / 2);
}
```

**11.** *(short answer)* (explain why) This compiles and runs. Name every fault, say what it prints, repair it, and explain why each fault would survive being tested on this very data.

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

**12.** *(short answer)* (explain why) The deck solves "count the occurrences of 42 in an array of n integers" twice, by two different decompositions. Write both functions in full, with their headers and their base cases. Explain why the second one's header cannot be the same as the first one's. Then trace the second on a = {42, 5, 42, 42} called as count42b(a, 0, 3), showing every call and every returned value, and state what both functions return for this array.

---

## Answers

**1. A** — Key (a) 30: sumArray(a, 5) is sumArray(a, 4) + a[4], which is sumArray(a, 3) + a[3] + a[4], and so on down to sumArray(a, 0), which returns 0 by the base case; coming back up 0, +2, +4, +6, +8, +10 covers every element exactly once. (b) 20 is 2 + 4 + 6 + 8, dropping a[4] - what you get by reading the base case as consuming the last element, or by writing a[n - 2] 'to stay safely inside the array'. (c) 28 is 4 + 6 + 8 + 10, dropping a[0] - the error of someone who reads a[n - 1] as covering indices 1 to n and never notices that the final call, with n = 1, is the one that picks up a[0]. (d) misreads the argument: n - 1 is evaluated before the call and the callee receives 4, a value one smaller, while the caller's own n is untouched - which is exactly what makes the descent finite.

**2. A** — Key (a): no branch returns without recursing, so every call makes another, each taking a fresh frame that is never popped, and the stack region fills until the programme is terminated - usually within a fraction of a second. (b) is the distractor this question exists for, and it is genuinely tempting: 0 * fact(-1) does look as though the zero should annihilate the product. It cannot, because C evaluates the operands before it multiplies - the call fact(-1) must return a value before the * can be performed, and it never returns. The multiplication is pending, and a pending operation on a call that does not return is never carried out. (c) supplies a base case that is not in the code. (d) invents a compilation rule; the function is well formed and compiles without complaint, which is precisely why the fault reaches run time.

**3. D** — Key (d): the idiom is for (i = 0; i < n; i++). This loop starts at 1 and uses <=, making both errors at once - it visits indices 1 to 5, skipping a[0] and reaching a[5], one element past the end of a five-element block. The in-range part contributes 2 + 3 + 4 + 5 = 14; a[5] contributes whatever is stored at that address, which is not part of the array. (a) 15 is the sum the programmer intended, the answer of anyone who reads the loop as 'all five elements'. (b) 14 is the sharpest distractor: it correctly notices that a[0] is skipped but silently assumes a[5] reads as 0 or is ignored - the belief that out-of-range access is harmless, when it is undefined and can return anything, including a value that makes the output look plausible. (c) expects a diagnosis; C stores no length and checks no bounds, so the programme compiles and runs.

**4. D** — Key (d) 3 2 1 1 2 3: f(3) prints 3, calls f(2), and its second printf is pending; f(2) prints 2, calls f(1), pending; f(1) prints 1, calls f(0), pending; f(0) returns at once. The frames then unwind in reverse order, so f(1) resumes just after its call and prints 1, then f(2) prints 2, then f(3) prints 3 - descending output first, ascending output second. (a) 3 2 1 is what the function would print if the second printf were absent, the answer of someone who reads a recursive call as the end of the function. (b) reverses the two halves, which would require the base case to be reached before anything is printed. (c) 3 3 2 2 1 1 executes both printfs of a frame before descending, pairing each call's two prints together instead of separating them across the call.

**5. B** — Key (b): f(6) goes 6, 4, 2, 0, the base case fires and returns 0, and the three pending '1 +' operations give 3. f(7) goes 7, 5, 3, 1, -1, -3, ...; the test n == 0 is evaluated on every call and is false on every call, because the argument passes 0 without equalling it, so the descent is unbounded and the programme dies of stack overflow. (a) assumes any decreasing argument must terminate; decreasing is not reaching, which is the exact misconception under test. (c) over-corrects into believing a step of 2 never works, when it works perfectly for every even input - the fault is the fit between step size and base case, not the step size alone. (d) invents a rule by which passing the base counts as reaching it; nothing tests for negativity, and n == 0 is an equality, not a threshold. The repair for both is if (n <= 0) return 0;.

**6. C** — Key (c): m[2][3] has 2 rows and 3 columns, so the correct loops are i < 2 over rows and j < 3 over columns; here they are exchanged. The pairs actually visited are (0,0)=1, (0,1)=2, (1,0)=4, (1,1)=5, giving 12, and then (2,0) and (2,1), which lie outside the six-element block entirely and contribute two junk values, while column 2 (the values 3 and 6) is never visited at all. The loop simultaneously misses part of the array and reads outside it. (a) 21 is the correct total 1+2+3+4+5+6, the answer of someone who assumes the loops cover the array because the numbers 2 and 3 both appear somewhere in them. (b) 12 is the sharpest distractor: it identifies the four in-range elements correctly but assumes the two out-of-range reads contribute nothing - again the belief that going out of bounds is harmless. (d) counts positions instead of checking whether those positions exist, which is the reasoning that produced the bug.

**7. B** — Key (b): in b, return b(n - 1, acc + n); returns the inner call's value unchanged, so nothing is left in this frame to do and b is tail recursive; the trace is b(4,0), b(3,4), b(2,7), b(1,9), b(0,10), and the base case returns acc = 10. In a, return a(n - 1) + n; still has an addition waiting when the inner call returns, so the frame must be kept alive - non-tail. (a) inverts the two and offers the extra parameter as the reason, when the accumulator is precisely the device that makes b tail recursive, carrying the partial answer down instead of leaving it pending on the way up. (c) is the misconception the question is built on: in a the recursive call is on the last line and work is still pending on its result, so 'last line' is not the test. (d) invents a restriction; a tail-recursive function returns a value in the ordinary way, and b returns acc.

**8. C** — Key (c): b = a; does not compile. In C an array name is not a modifiable value and cannot appear on the left of =, so there is no such thing as assigning one array to another; the copy must be written as for (i = 0; i < 3; i++) b[i] = a[i];. This is exactly why the deck sets 'copy the elements of the array above into another array' as a separate exercise from summing them - it is a traversal, not an assignment. (a) is the belief that arrays behave like the scalar int x = y;, which is what makes the exercise look trivial. (b) is the reference-semantics belief carried over from languages where a name refers to an object; even in the version of this that is possible in C - copying a pointer - the elements would not be duplicated, and here the line does not compile at all. (d) half-remembers that an array name decays to the address of its first element and turns that into a partial copy; the decay concerns reading the name in an expression, and it still leaves nothing assignable on the left.

**9.** It prints 4. The array is {42, 7, 42, 3, 42, 42, 9, 1}, and 42 appears at indices 0, 2, 4 and 5. The descent: countTarget(a, 8, 42) cannot answer until countTarget(a, 7, 42) has, so it makes that call with the comparison (a[7] == 42) pending; that call does the same with (a[6] == 42) pending, and so on, n = 8, 7, 6, 5, 4, 3, 2, 1, 0. At the deepest moment nine frames are alive - one for each n from 8 down to 0 - and eight comparisons are pending, one per frame, each waiting for the value from the frame below. Every frame has its own n; nothing is shared. The return:
n=1: 0 + (a[0]==42 -> 1) = 1
n=2: 1 + (a[1]== 7 -> 0) = 1
n=3: 1 + (a[2]==42 -> 1) = 2
n=4: 2 + (a[3]== 3 -> 0) = 2
n=5: 2 + (a[4]==42 -> 1) = 3
n=6: 3 + (a[5]==42 -> 1) = 4
n=7: 4 + (a[6]== 9 -> 0) = 4
n=8: 4 + (a[7]== 1 -> 0) = 4
So main prints 4. In C a comparison yields 1 or 0, which is why + (a[n-1] == target) is a legal and idiomatic way to write 'add one if it matches'. With the base case changed to if (n == 1) return 0;, the recursion stops one call early: the frame with n = 1 returns 0 instead of examining a[0], so index 0 is never compared. That element is a 42, so the programme would print 3 - a wrong answer, quietly, on data that looks fine. This is the recursive equivalent of the loop's i <= n off-by-one: the base case must cover the empty case so that the n-th call is the one that handles the first element. On an empty array the changed version is far worse than wrong. With n = 0 the test n == 1 fails, so the function calls itself with n = -1, which fails too, then -2, -3, ...: the base case is unreachable from n = 0, the descent never ends, frames accumulate, and the programme dies of stack overflow - and on the way down every call also evaluates a[n - 1] at a[-1], a[-2], ..., reading memory before the start of the array. One misplaced base case has produced a silent wrong answer on ordinary input and a crash on the boundary input.

**10.** halve(8) returns 3: halve(8) = 1 + halve(4) = 1 + 1 + halve(2) = 1 + 1 + 1 + halve(1), and halve(1) matches the base case and returns 0, so coming back up gives 0, 1, 2, 3. halve(5) returns 2: integer division truncates, so 5 / 2 = 2, giving halve(5) = 1 + halve(2) = 1 + 1 + halve(1) = 1 + 1 + 0 = 2. (The function counts how many halvings it takes to reach 1.) halve(0) never returns: n is 0, the test n == 1 is false, and the recursive call is halve(0 / 2) = halve(0) - the same argument. The function calls itself with the identical value forever; there is no progress at all, not merely progress in the wrong direction, which is the sharpest form of the fault because a reader checking 'does the argument get smaller?' sees a division and assumes it does. The failure mode is a stack overflow: each call allocates a fresh frame holding its own n and return address, no frame is ever popped, and the stack region grows until the operating system refuses more and terminates the process - typically in a fraction of a second, with a segmentation fault. That is not the symptom of an infinite while loop: while (1); runs forever in constant memory, so the process stays alive, consumes processor time and must be interrupted from outside, whereas infinite recursion consumes memory per call, dies on its own, quickly, and looks like a crash. Diagnosing the two the same way sends you to the wrong place - a hang means 'no exit condition', a fast crash after a recursive call means 'the base case is not being reached'. The repair, one line: if (n <= 1) return 0;. This rescues n = 0 immediately and also every negative input: halve(-4) currently goes -4, -2, -1, 0 (C truncates toward zero, so -1 / 2 is 0), then 0, 0, 0, ... - another endless run at a fixed value. With n <= 1 the base case covers the whole region at and below 1, which is the general rule the fault illustrates: a base case must be reachable from every legal input, so test a range rather than a single value whenever the argument can jump.

**11.** It prints 12. Fault 1 - the copy loop runs one past the end, and it writes. for (i = 0; i <= 5; i++) gives i the values 0 to 5, but both arrays hold five elements at indices 0 to 4, so the last pass executes dst[5] = src[5];. That reads one element beyond src - a junk value - and, far worse, writes it one element beyond dst, into memory belonging to some other variable. Which variable depends on how the compiler laid out the frame; likely candidates here are i or sum, and if i were overwritten the loop could restart or run away. This is undefined behaviour: the programme may print the number below, print something else, or crash. Repair: for (i = 0; i < 5; i++). Fault 2 - the summing loop skips the first element. for (i = 1; i < 5; i++) visits indices 1 to 4 and never touches dst[0], which holds 1, so the sum is 2 + 3 + 2 + 5 = 12 instead of the correct 1 + 2 + 3 + 2 + 5 = 13. Repair: for (i = 0; i < 5; i++). The two faults are opposite errors in the same programme - one loop reaches one index too far, the other starts one index too late - which is why 'check the bounds' has to mean checking both ends of each loop separately against the idiom i = 0; i < n; i++. Repaired programme:
#include <stdio.h>

int main(void)
{
    int src[5] = {1, 2, 3, 2, 5};
    int dst[5];
    int i, sum = 0;

    for (i = 0; i < 5; i++)
        dst[i] = src[i];

    for (i = 0; i < 5; i++)
        sum = sum + dst[i];

    printf("%d\n", sum);   /* prints 13 */
    return 0;
}
Why both faults survive testing on this data: Fault 1 produces no visible symptom here at all - the out-of-range write happens to land somewhere that does not disturb the printed result on this compiler on this run, so the programme completes normally and the bug is invisible; it may become visible only after an unrelated change moves the variables around, which is why out-of-bounds writes are found long after they are written, in code that has 'always worked'. Fault 2 is invisible for a different reason: it produces a number, not a symptom. 12 is a perfectly plausible total for five small values and nothing about it announces that an element was skipped; only checking the arithmetic by hand, 1 + 2 + 3 + 2 + 5 = 13, reveals it. Neither fault is caught by the compiler, since both loops are valid C, and neither is caught by running the programme, since a wrong answer and an undetected memory write both look exactly like success.

**12.** Decomposition 1 - the first n - 1 elements, plus the n-th. The deck's sub-problems are: count how often 42 appears in the first n - 1 elements; count how often it appears in the n-th element; add the two sums and return the result. The base case is n = 0, the empty array.
int count42a(int a[], int n)
{
    if (n == 0)
        return 0;
    return count42a(a, n - 1) + (a[n - 1] == 42);
}
/* called as: count42a(a, 4); */
Decomposition 2 - two halves. The deck describes it as breaking the array into two pieces of equal size, counting the number of 42s in each half and adding the two sums, and warns that the header will be different.
int count42b(int a[], int lo, int hi)
{
    if (lo > hi)  return 0;                /* empty piece      */
    if (lo == hi) return (a[lo] == 42);    /* a single element */

    int mid = (lo + hi) / 2;
    return count42b(a, lo, mid) + count42b(a, mid + 1, hi);
}
/* called as: count42b(a, 0, n - 1); */
Why the header must change: in decomposition 1 every sub-problem is a prefix of the array, always starting at index 0, so a single number - the length - describes it completely and (a[], n) suffices. In decomposition 2 the second sub-problem is the upper half, which does not start at index 0, and a length alone cannot say where a piece begins, so the function must be told both bounds. That is the deck's point in step 1 of its general approach, write the header which shows what the function will do and how it will be called, and its point in warning that the header will differ: the header is not chosen first and filled in later, it follows from how you cut the problem. Note also that the halving version needs two base cases, since halving can produce an empty piece as well as a single element. The trace of count42b(a, 0, 3) on a = {42, 5, 42, 42}:
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
So count42b(a, 0, 3) returns 3, and count42a(a, 4) returns 3 as well - the array holds 42 at indices 0, 2 and 3. The two differ in the shape of the call tree: decomposition 1 makes a single unbranching chain of five calls, n = 4, 3, 2, 1, 0; decomposition 2 makes a branching tree of seven calls whose deepest point is three frames down. Both are correct, both terminate, and both satisfy the same two requirements - a base case, and recursive calls on strictly smaller pieces.
