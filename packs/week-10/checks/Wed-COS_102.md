# Wednesday — COS_102 nightly check

*Arrays and recursion as concepts.*
*12 questions, straight after the hour. Score out of 12.*

**1.** `int a[10];` is stored as one block starting at address 1000, and each int occupies 4 bytes. At what address does `a[7]` start?
A. 1024
B. 1007
C. 1028
D. 1032

**2.** After `int v[6] = {3, 8, 1};` the statement `int x = v[1] + v[3];` runs. What is x?
A. 8
B. 4
C. 9
D. Unpredictable, because v[3] was never given a value

**3.** `int m[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};` What is the value of `m[2][0] + m[0][1]`?
A. 7
B. 9
C. 11
D. 5

**4.** Exactly one of these declarations is rejected by the compiler. Which?
A. `int q[3] = {1};`
B. `int r[] = {5, 6};`
C. `int s[3] = {1, 2, 3};`
D. `int p[3] = {1, 2, 3, 4};`

**5.** How many frames of g are on the call stack at the deepest moment while `g(9)` is evaluated?

```c
int g(int n)
{
    if (n <= 1) return 1;
    return g(n - 2) + 1;
}
```
A. 9
B. 5
C. 4
D. It never terminates

**6.** For which of the calls h(9), h(10), h(12), h(7) does this function terminate?

```c
int h(int n)
{
    if (n == 0) return 0;
    return 1 + h(n - 3);
}
```
A. h(9) and h(12) only
B. All four
C. h(9) only
D. h(12) only

**7.** What does `p(4, 1)` return?

```c
int p(int n, int acc)
{
    if (n == 0) return acc;
    return p(n - 1, acc * n);
}
```
A. 10
B. 0
C. 1
D. 24

**8.** `isEven(n)` returns 1 if n is 0 and otherwise returns `isOdd(n − 1)`; `isOdd(n)` returns 0 if n is 0 and otherwise returns `isEven(n − 1)`. Neither function names itself. How is this classified?
A. Direct recursion
B. Indirect recursion
C. Not recursion, since neither function calls itself
D. Iteration

**9.** While `f(3)` runs, what is left pending in the frame of f(2) at the moment f(0) returns, and what does f(3) finally return?

```c
int f(int n)
{
    if (n == 0) return 0;
    return f(n - 1) + n * n;
}
```
A. Adding 9; f(3) returns 14
B. Adding 4; f(3) returns 15
C. Adding 4; f(3) returns 14
D. Nothing, f(2) has already returned; f(3) returns 14

**10.** `int a[4] = {7, 3, 9, 12};` What happens when the statement `a[4] = 0;` is reached?
A. It compiles and runs, writing 0 outside the array: undefined behaviour.
B. The compiler rejects it, because 4 is not a legal index.
C. It runs and is ignored, because C checks the index at run time.
D. It compiles, and the array grows to five elements.

**11.** This loop is meant to total the six elements of m. What actually happens?

```c
int m[2][3] = {{1, 2, 3}, {4, 5, 6}};
int i, j, t = 0;
for (i = 0; i < 3; i++)
    for (j = 0; j < 2; j++)
        t = t + m[i][j];
```
A. It misses m[2][0] and m[2][1], and no access is out of range.
B. It misses m[1][2] only, and reads out of range at m[2][2].
C. It visits all six elements and leaves t = 21.
D. It misses m[0][2] and m[1][2], and reads out of range at m[2][0] and m[2][1].

**12.** A recursive factorial declares no local variables and is a single return statement, yet at run time it uses more memory than a loop with two variables. Where does that memory go?
A. The compiler keeps a separate copy of the function's code for each call.
B. Each call allocates an array to hold the partial products.
C. Each call gets its own stack frame, holding its own n and a pending multiplication.
D. The return values are queued in a buffer until the last call finishes.

---

## Answers

**1. C** — *Index as an offset.* An index is an offset from the first element: a[i] starts at start + i × width. So a[7] starts at 1000 + 7 × 4 = 1028.

1032 is 1000 + 8 × 4, counting a[7] as the eighth element and using 8 as the offset; 1007 adds the index without multiplying by the 4-byte width; 1024 is 1000 + 6 × 4, one element short.

**2. A** — *Partial initialiser and zero filling.* Fewer values than elements is legal, and the elements not listed become 0. So v[0] = 3, v[1] = 8, v[2] = 1, v[3] = v[4] = v[5] = 0. Indexing is zero-based, so x = v[1] + v[3] = 8 + 0 = 8.

4 reads the indices one-based (v[1] as 3, v[3] as 1); 9 takes v[1] = 8 but reads v[3] as the third value, 1; the last option treats an unlisted element as garbage, which is true only for an array with no initialiser at all.

**3. B** — *Row and column subscripts.* The first subscript is the row and the second is the column, both counted from 0. m[2][0] is row 2, column 0, which is 7; m[0][1] is row 0, column 1, which is 2. Sum: 9.

7 transposes the subscripts, reading m[0][2] + m[1][0] = 3 + 4; 11 reads the columns one-based, m[2][1] + m[0][2] = 8 + 3; 5 reads the rows one-based, m[1][0] + m[0][0] = 4 + 1.

**4. D** — *One-sided initialiser rule.* The number of values between the braces cannot be larger than the number of elements declared between the square brackets. p declares 3 elements and is handed 4, so it is rejected.

q is legal: fewer values is allowed and the rest become 0, giving {1, 0, 0}. r is legal: with the size omitted, an array just big enough for the initialiser is created, size 2. s matches exactly. Believing q is illegal reads the rule as two-sided; believing r is illegal forgets that the size may be inferred.

**5. B** — *Counting recursive calls.* Each call subtracts 2: g(9) calls g(7), which calls g(5), then g(3), then g(1). g(1) satisfies n <= 1 and returns without calling again. That is 5 calls, all alive at once because each is waiting for the one below it: 5 frames.

4 counts only the recursive calls and forgets the original g(9) frame; 9 assumes the argument steps down by 1; 'never terminates' misreads n <= 1 as n == 0, which 9 would indeed step over.

**6. A** — *Reachability of the base case.* The base case is n == 0 and each call subtracts 3, so the call lands exactly on 0 only when n is a multiple of 3. h(9): 9, 6, 3, 0 terminates. h(12): 12, 9, 6, 3, 0 terminates. h(10) goes 10, 7, 4, 1, −2, −5, ... and h(7) goes 7, 4, 1, −2, ... stepping straight over 0 and never stopping.

'All four' assumes having a base case is enough, without checking that the calls reach it; 'h(9) only' and 'h(12) only' each miss that the other is also a multiple of 3.

**7. D** — *Tracing an accumulator parameter.* The product is carried down in acc: p(4, 1) calls p(3, 4), then p(2, 12), then p(1, 24), then p(0, 24). At n = 0 the base case returns acc = 24, and since nothing is pending in any frame, 24 is passed back unchanged.

10 adds n to acc instead of multiplying (4 + 3 + 2 + 1); 0 multiplies by n before testing the base case, so the final step is 24 × 0; 1 returns the starting acc, forgetting that each call replaces it.

**8. B** — *Direct versus indirect recursion.* Indirect recursion is when a function contains a call to another function which eventually calls the function back. isEven calls isOdd, which calls isEven again, so isEven does reach itself, just through a second function. Recursion covers a function that calls itself indirectly as well as directly.

Direct recursion needs an explicit call to itself, which neither has; 'not recursion' drops the word indirectly from the definition; iteration would be a loop inside one call, with no new frame per step.

**9. C** — *Call stack of a non-tail recursion.* Every frame keeps its own n and cannot finish until the call it made returns. The frame of f(2) is waiting to add n × n with n = 2, that is 4. Unwinding from the base case: f(1) = 0 + 1 = 1, f(2) = 1 + 4 = 5, f(3) = 5 + 9 = 14.

Adding 9 is f(3)'s own pending work, not f(2)'s; 15 comes from a base case that returns 1 instead of 0; and no frame has returned yet when f(0) returns, since each one is waiting on the call below it.

**10. A** — *Out-of-range index behaviour.* The declaration reserves four ints at offsets 0 to 3, so the largest legal index is 3. a[4] is worked out as start + 4 × width, one place past the block. Nothing is checked when the program is built and nothing is checked while it runs, so the 0 lands in memory belonging to something else: a neighbouring variable may be corrupted, or the program may crash, and the symptom can change from run to run.

C stores no length with an array, so it can neither reject the index nor ignore the write, and an array never grows.

**11. D** — *Bounds of a two-dimensional traversal.* m has 2 rows and 3 columns, but the limits are swapped: i runs 0, 1, 2 and j runs 0, 1. The accesses are m[0][0], m[0][1], m[1][0], m[1][1], m[2][0], m[2][1]. There is no row 2, so the last two are out of range and add junk to t, while m[0][2] and m[1][2], the values 3 and 6, are never visited.

Putting the row count 2 on the outer loop and the column count 3 on the inner one visits all six and gives t = 21.

**12. C** — *Iteration versus recursion.* Every call gets a stack frame with its own copy of n and a note of where to resume. factorial(n) cannot multiply until factorial(n − 1) returns, so its frame stays alive with the multiplication pending, and at the deepest point n frames exist at once. The loop keeps everything in one frame and overwrites its accumulator each pass, so its memory does not grow with n.

The code itself is stored once however many calls are made, and nothing allocates arrays or queues up the returns.
