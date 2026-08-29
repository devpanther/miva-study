# COS_102 — Week 10 Summary

*Introduction to Problem Solving · Week 10 (9 – 15 Nov 2026) · Topic: Arrays and Recursion Concepts*

## The 8 most examinable things this week

1. **The array definition, word for word:** an array is **a type of data structure that can store a fixed-size sequential collection of elements of the same type.** Four load-bearing words, and the exam attacks each one. **Fixed-size** — the size is settled at the declaration and never changes while the programme runs. **Sequential** — the elements occupy one contiguous block, one after another, which is *why* an index can be turned into a location by arithmetic. **Same type** — every element is the same `datatype`, so every element is the same width, which is what makes that arithmetic possible. **Collection** — one name for many values, so that a loop can visit them all.
2. **Declaration syntax, exactly as the deck gives it.** To declare an array in C **a programmer specifies the type of the elements and the number of elements required**: `datatype arrayName [ arraySize ];`. The declaration `int a[10];` **defines an array of size 10, that is, a block of 10** consecutive `int`-sized locations. The number in the brackets of a *declaration* is a **count of elements**, never a highest index.
3. **Initialisation — two ways, and one rule.** You can initialise **either one by one or using a single statement**: `double salaries[5] = {1000.0, 2.0, 3.4, 7.0, 50.0};`. The rule: **the number of values between braces `{ }` cannot be larger than the number of elements declared between square brackets `[ ]`.** Fewer is allowed — the rest become 0. And **if you omit the size, an array just big enough to hold the initialisation is created**: `double salaries[] = {1000.0, 2.0, 3.4, 7.0, 50.0};` is an array of 5.
4. **Indexing, and the zero-base.** **An element is accessed by indexing the array name.** The index is an **offset from the first element**, not a position counted from one. So for `double salaries[5]`, the legal indices are **`salaries[0]` … `salaries[4]`** — the count and the largest legal index always differ by one. The deck's own question, *what is the value of `salary` after `double salary = salaries[2];`*, has the answer **3.4** — the *third* value, at offset 2.
5. **Bounds are not checked.** Nothing in C stores or tests a length at run time: `a[i]` is computed as *start of a* + *i* × *size of one element*, whatever `i` is. So `salaries[5]` on a five-element array compiles cleanly, runs, and reads or writes **some other part of memory**. This is the single most productive source of marks in the topic: an out-of-range index is not an error, it is **undefined behaviour** — a wrong answer, a value that changes between runs, or a crash.
6. **Multi-dimensional arrays.** One is **defined using multiple adjacent square brackets, and the elements of the array may be initialised with values enclosed in curly braces.** To access an element **the correct notation is to enclose each subscript in a separate pair of square braces** — `m[1][2]`, and never `m[1,2]`. The first subscript selects the row, the second the column, and each has its own independent bound.
7. **The recursion definition, word for word:** recursion is **a process in which a function indirectly and directly calls itself within its own function block.** Because a function is involved, recursion **allows us to break down a problem into one or more sub-problems that are similar in form to the original problem** — *similar in form* meaning solvable by the very same function, with a smaller argument.
8. **A recursive function has exactly two components, and needs both.** **A base case**, which **handles the case where there are no numbers to add** — i.e. the smallest input, answered outright with no recursive call. **A recursive case**, which **breaks the problem down into a smaller version of the original problem together with** the work of combining. To this the exam adds the condition the deck leaves implicit: **every recursive call must move the argument towards the base case.** A base case that is never reached is no base case at all.

## Arrays: declaration, initialisation, indexing

```c
int    a[10];                                        /* datatype arrayName[arraySize] */
double salaries[5] = {1000.0, 2.0, 3.4, 7.0, 50.0};  /* single-statement init         */
double salaries2[] = {1000.0, 2.0, 3.4, 7.0, 50.0};  /* size omitted -> size 5        */
double part[5]     = {1000.0, 2.0};                  /* legal: rest become 0.0        */
/* double bad[3]   = {1.0, 2.0, 3.0, 4.0};              ILLEGAL: 4 values into 3 slots */

double salary = salaries[2];      /* 3.4 -- offset 2, i.e. the THIRD element */
salaries[0] = 900.0;              /* one-by-one initialisation / assignment  */
```

| Written | Means | Legal indices |
|---|---|---|
| `int a[10];` | a block of **10** `int`s | `a[0]` … `a[9]` |
| `a[10]` | the location **one past the end** | **not legal** — and not diagnosed |
| `double s[] = {1.0, 2.0, 3.4};` | size taken from the initialiser: **3** | `s[0]` … `s[2]` |

**The traversal pattern.** Every array loop in this course is the same three-part idiom, and every off-by-one bug is a deviation from it: **start at 0, continue while the index is strictly less than the count, step by 1.**

```c
for (i = 0; i < n; i++)   /* i < n, NOT i <= n */
    ... a[i] ...
```

The deck's two array exercises, on `Array = (1,2,3,2,5,6,3,8,1,10)`:

```c
int a[10] = {1, 2, 3, 2, 5, 6, 3, 8, 1, 10};
int b[10];
int i, sum = 0;

for (i = 0; i < 10; i++)          /* sum of all elements */
    sum = sum + a[i];             /* sum = 41            */

for (i = 0; i < 10; i++)          /* copy into another array */
    b[i] = a[i];
```

1 + 2 + 3 + 2 + 5 + 6 + 3 + 8 + 1 + 10 = **41**. Note the second loop: **`b = a;` is not legal C.** An array name is not a modifiable value, so a copy is always element by element. This is exactly why the deck sets "copy the elements into another array" as a separate exercise from "sum them" — it is not the same act as assigning a variable.

## Multi-dimensional arrays

```c
int m[2][3] = { {1, 2, 3},        /* row 0 */
                {4, 5, 6} };      /* row 1 */

int x = m[1][2];                  /* 6  -- row 1, column 2                 */
/* int y = m[1,2]; */             /* WRONG notation: each subscript needs
                                     its own pair of square brackets       */

int i, j, total = 0;
for (i = 0; i < 2; i++)           /* outer bound = number of ROWS    */
    for (j = 0; j < 3; j++)       /* inner bound = number of COLUMNS */
        total = total + m[i][j];  /* total = 21                       */
```

- **Each subscript has its own bound.** `m[2][3]` holds 2 × 3 = 6 elements; `i` runs 0–1 and `j` runs 0–2. Swapping the two loop limits is the classic multi-dimensional fault: it reads outside the array on one axis while never reaching the far columns on the other, and it is silent.
- **Omitting the size in a multi-dimensional declaration** — the deck's question *"how does this change in multidimensional arrays?"* — **only the leftmost dimension may be left out.** `int m[][3] = {{1,2,3},{4,5,6}};` is fine; `int m[2][] = …` is not. The compiler must know the row width to compute an address, and it can count rows for itself.
- Storage is still **one sequential block**: the rows are laid end to end (row-major). That is why the brackets are a notation for arithmetic, not a lookup in a table.

## Recursion: the two components

```c
int sumArray(int a[], int n)
{
    if (n == 0)                       /* BASE CASE: no numbers to add   */
        return 0;
    return sumArray(a, n - 1) + a[n - 1];   /* RECURSIVE CASE: a smaller
                                               version of the SAME problem,
                                               together with an addition  */
}
```

Read the recursive line as the deck's decomposition, in three parts:

1. **The sub-problem** — the sum of the **first n − 1** elements, which is a problem *similar in form* to the original and is therefore handed to the same function.
2. **The remaining piece** — `a[n - 1]`, the **n-th element** of the array. Note the index: with `n` elements, the last one sits at offset `n - 1`.
3. **The combination** — `+`, the work that is still pending when the recursive call returns.

**Three requirements, and each is separately examinable.** (i) A base case that returns **without recursing**. (ii) A recursive case that calls the function **on a smaller input**. (iii) **Progress**: the argument must actually converge on the base case. `f(n - 2)` with a base case of `n == 0` terminates for even `n` and never for odd `n` — a base case exists, but odd inputs step straight over it.

## Writing a recursive function: the deck's general approach

The deck gives five steps, in this order:

1. **Write the function header**, which shows **what the function will do and how it will be called**.
2. **Decompose the problem into subproblems.**
3. **Write recursive calls** to solve those subproblems **whose form is similar to that of the original problem**.
4. **Write code to combine, augment or modify the results** of the recursive call(s) to construct the desired return value or side effects.
5. **Write base case(s)** to handle any situations **not handled properly by the recursive portion**.

Note that the base case comes **last** in the writing and **first** in the code. The deck's worked example — *count the number of occurrences of 42 in an array of n integers* — is done twice, with two different decompositions.

**Solution 1: n − 1 and the n-th element.** Sub-problems: count the 42s in the **first n − 1** elements; count the 42s in the **n-th** element; **add the two sums and return the result**. Base case: **n = 0**.

```c
int count42(int a[], int n)
{
    if (n == 0)                                  /* base case: empty array */
        return 0;
    return count42(a, n - 1) + (a[n - 1] == 42); /* (a[n-1] == 42) is 1 or 0 */
}
```

**Solution 2: two halves.** **Break the array into two pieces of equal size, count the number of 42s in each half, and add the two sums.** The deck warns that **the header will be different** — and it must be, because "the first half" cannot be described by a single length; the function now needs to be told *where* the piece starts as well as where it ends.

```c
int count42(int a[], int lo, int hi)      /* different header: two bounds */
{
    if (lo > hi)  return 0;               /* base case: empty piece       */
    if (lo == hi) return (a[lo] == 42);   /* base case: one element       */
    int mid = (lo + hi) / 2;
    return count42(a, lo, mid) + count42(a, mid + 1, hi);
}
/* called as: count42(a, 0, n - 1); */
```

Both are correct; they differ in **how the problem was cut**, not in what recursion is. The point of the deck presenting both is step 2 of the general approach: the decomposition is a **choice**, and the header follows from it.

## Iteration versus recursion: factorial

**A factorial, written as n!, is defined as** `n! = 1 * 2 * 3 * .... * (n-2) * (n-1) * n`.

```c
int factorialIter(int n)          /* "mirrors the definition of factorial" */
{
    int i, result = 1;            /* TWO local variables                   */
    for (i = 1; i <= n; i++)
        result = result * i;
    return result;                /* result saved in an intermediate
                                     variable before it can be returned    */
}

int factorialRec(int n)
{
    if (n <= 1) return 1;         /* base case                             */
    return n * factorialRec(n - 1);  /* ONE statement, a single expression */
}
```

The deck's comparison table, which is asked for directly:

| | **Iterative function** | **Recursive function** |
|---|---|---|
| Local variables | **Two** (`i` and `result`) | **None** |
| Statements | **Three** | **One** |
| How the answer is produced | **Saves the solution in an intermediate variable before it can be returned** | **Calculates and returns its result as a single expression** |

And the deck's summarising sentence: **"Recursion simplifies the function by making the computer do more work while we do less work."** Learn what that trade actually is. **We do less** — no counter, no accumulator, no loop condition to get wrong. **The computer does more** — every call needs a fresh stack frame, so the bookkeeping the loop kept in one `int` is now spread over `n` frames. "Recursive functions have none" refers to **declared local variables in your source**, not to memory used at run time, which is strictly greater.

## The call stack

Every call — recursive or not — gets its **own stack frame**: its own copy of the parameters and its own locals, with the caller's frame suspended underneath, remembering where to resume. Nothing is shared between frames; two frames of the same function each have their own `n`.

`factorialRec(4)` builds this, then unwinds it:

```
CALL (descending)                      RETURN (ascending)
factorialRec(4)  needs 4 * ?             <- 4 * 6  = 24
  factorialRec(3)  needs 3 * ?           <- 3 * 2  = 6
    factorialRec(2)  needs 2 * ?         <- 2 * 1  = 2
      factorialRec(1)  base case         -> returns 1
```

- **The pending work is the point.** At the deepest moment, four frames are alive and three multiplications are *waiting*. That is the memory the loop did not need.
- **A recursive call is an ordinary call.** Control leaves the current frame at the call, and comes back **to the point just after it** — so any code written after the recursive call runs on the way *back up*, in reverse order of the calls.
- **Infinite recursion is not an infinite loop.** `while (1);` runs forever in constant memory. A recursion that never reaches its base case consumes a **new frame per call**, so the stack space runs out and the programme is killed — a **stack overflow**. It fails on **space**, and fast.

## Direct, indirect, tail and non-tail — two independent classifications

**Who calls whom:**

- **Direct recursion** — the function **contains an explicit call to itself**.
- **Indirect recursion** — the function **contains a call to another function which eventually calls the function**. No function names itself, and it is still recursion: the definition says a function **"indirectly and directly calls itself"**.

```c
int isEven(int n) { if (n == 0) return 1; return isOdd(n - 1); }   /* INDIRECT */
int isOdd (int n) { if (n == 0) return 0; return isEven(n - 1); }  /* INDIRECT */
```

**What is left to do on the way back:**

- **Tail recursion** — **a recursive function without pending operations to be performed on return from a recursive call.** The value of the recursive call *is* the value of the function.
- **Non-tail recursion** — **with pending operation(s)** still to be performed on return.

```c
int sumTail(int n, int acc)                 /* TAIL: nothing pending; the inner
{                                              result is returned unchanged     */
    if (n == 0) return acc;
    return sumTail(n - 1, acc + n);
}

int sumNonTail(int n)                       /* NON-TAIL: the "+ n" is pending
{                                              until the inner call returns     */
    if (n == 0) return 0;
    return sumNonTail(n - 1) + n;
}
```

The test is **not** "is the recursive call on the last line". In `sumNonTail` the call is on the last line and there is still an addition waiting for it. The test is: **when the inner call returns its value, is there anything still to do with it?** If yes, non-tail.

## Commonly confused

| Pair | The distinction |
|---|---|
| **The size in a declaration vs an index in an access** | `int a[10];` — the 10 is a **count of elements**. `a[10]` — the 10 is an **offset from the first element**. The count and the largest legal index differ by one, always: `a[0]` … `a[9]`. Writing `a[10]` because the array "has 10" is the commonest single error in the topic. |
| **"Out of bounds" vs "an error"** | An out-of-range index is **not** reported. C computes a location by arithmetic and does not store a length, so `a[10]` names real memory belonging to something else. Reading gives a junk value; **writing corrupts another variable**. The programme may finish and print a confident wrong answer. |
| **Fixed-size vs resizable** | The size is fixed **at the declaration**. Assigning to a further index does not extend the array, and the language will not grow it for you — the "it just adds another slot" belief is imported from Python lists. |
| **Omitting the size vs having no size** | `double s[] = {1.0, 2.0, 3.4};` has size **3**: the compiler counts the initialiser. The size is not absent, it is **inferred**, and it is just as fixed afterwards. |
| **Too few initialisers vs too many** | **Too few is legal** — the remaining elements become 0. **Too many is illegal** — "the number of values between braces cannot be larger than the number of elements declared between square brackets". The rule is one-sided. |
| **`b = a;` vs copying an array** | Assignment between array names is **not legal C**; an array name is not a modifiable value. Copying is **element by element in a loop**. This is why the deck sets copying as its own exercise. |
| **`m[1][2]` vs `m[1,2]`** | **Each subscript must be enclosed in a separate pair of square brackets.** `m[1,2]` is not a two-dimensional access at all; it does not mean what it looks like, and it will not give you row 1, column 2. |
| **Rows vs columns in `m[2][3]`** | The **first** subscript is the row and runs 0–1; the **second** is the column and runs 0–2. Each bound is independent, so swapping the two loop limits reads outside the array on one axis and never reaches the far columns on the other — silently. |
| **Direct vs indirect recursion** | **Direct** — the function contains an **explicit call to itself**. **Indirect** — it calls **another function which eventually calls it back**. Both are recursion; the definition covers a function that calls itself "indirectly and directly". "It never names itself, so it is not recursive" is wrong. |
| **Tail vs non-tail recursion** | **Tail** — **no pending operations** on return from the recursive call. **Non-tail** — there are. The test is *what remains to be done with the returned value*, **not** whether the call is written on the last line: `return f(n-1) + n;` is on the last line and is non-tail, because the `+ n` is waiting. |
| **A base case vs a reachable base case** | Having a base case is necessary and **not sufficient**. The recursive call must **move the argument towards it**. `if (n == 0) return 0; return 1 + f(n - 2);` has a perfect base case and never terminates for odd `n`. |
| **Recursive case vs base case** | The **recursive case** breaks the problem into a **smaller version of the same problem** plus some combining work; the **base case** answers the smallest input **outright, with no recursive call**. A "base case" that still calls the function is a recursive case in disguise. |
| **Infinite recursion vs an infinite loop** | An infinite loop runs forever in **constant memory**. Infinite recursion consumes a **new stack frame per call** and dies of **stack overflow**, quite quickly. Different symptom, different diagnosis. |
| **"Recursive functions have none" (locals) vs cheaper** | The deck's table counts **local variables written in your source**. At run time each call has its **own frame** holding its own parameters, so recursion uses **more** memory than the loop, not less. The trade is stated: **the computer does more work while we do less**. |
| **Two frames of `n` vs one shared `n`** | Each call has **its own** parameters and locals. Changing `n` in a deeper call cannot be seen by a shallower one, and the shallower one resumes with exactly the value it had. Treating them as one variable makes every trace come out wrong. |
| **Where code after the recursive call runs** | Control returns to the point **just after** the call, so statements written after it execute **on the way back up**, in the reverse of the call order. `printf` before the call prints descending; after the call, ascending. |

---

*Note on the source: both decks extract with their code missing. Every listing in **Arrays and Recursion I** — the array-sum example, the array-copy example, both multi-dimensional slides and the whole "Recursion: example" pair that the base-case/recursive-case discussion refers to — sits **inside slide images**, so the extracted text names the exercises and describes their two components without showing a single line. **Recursion II** is worse: the slides "Factorial: normal function", "Factorial: recursive function", "First, write the header", "The following code handles the subproblems", "solution 1", "the number of 42s in each half", "solution 2", and all four of "Recursion: direct / indirect / tail / non-tail" carry **only their captions**; the code they caption is an image in every case. Every listing above is the standard 100-level treatment of exactly those named objectives, written in C as the decks and their further reading (Kernighan & Ritchie) specify, and matching the decks' stated decompositions clause by clause — n − 1 plus the n-th element for solution 1, equal halves for solution 2, base case at n = 0. Three things the exam needs are used by the decks but never named in the extracted text: the **zero-base** of indexing (the slide asks "what is the value of salary?" and answers only in an image — it is 3.4), the absence of **bounds checking**, and the **call stack** with its frames and pending operations, which is the only way to explain the deck's own sentence that recursion makes "the computer do more work while we do less". The requirement that the recursive call must **make progress** towards the base case is likewise implicit in the deck and is supplied here, because a base case alone does not terminate anything. The extractor also drops ligatures, so the source reads "dierent" for "different", "deﬁne"/"define", "ecient" for "efficient", and "University of Noingham" for Nottingham. Finally, the week's official Summary sheet illustrates the recursion lesson with an unrelated `class Dog` listing in Java-like pseudocode left over from an object-orientation topic; it has nothing to do with arrays or recursion and should be ignored.*
