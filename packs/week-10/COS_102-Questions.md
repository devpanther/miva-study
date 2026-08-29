# COS_102 — Week 10 Questions

*Arrays — declaration, initialisation, indexing and multi-dimensional arrays — and recursion, direct, indirect, tail and non-tail; sat seven days later as a retention test, so recall and apply rather than recognise.*

## Multiple choice

**1.** The deck defines an array as a data structure that stores **a fixed-size sequential collection of elements of the same type**. Which of the following is ruled out by that definition, and for a structural reason rather than a stylistic one?
A. Storing a thousand elements, since an array is meant for small collections and a fixed size implies a small one
B. Reading the same element more than once inside a single loop, since each element may be visited only once per traversal
C. A collection whose elements are not all of the same type
D. Storing the elements in an order other than the one in which they were written into the array

**2.** One of these declarations is illegal. Which, and why?

```c
double p[5] = {1.0, 2.0, 3.0, 4.0, 5.0};
double q[5] = {1.0, 2.0};
double r[]  = {1.0, 2.0, 3.0};
double s[2] = {1.0, 2.0, 3.0};
```

A. `s`, because the values between the braces outnumber the elements declared between the square brackets
B. `q`, because the braces must supply a value for every element declared between the square brackets
C. `r`, because a declaration must always state a size between the square brackets
D. `q` and `r`, because both leave the compiler with fewer values than it needs in order to fix the size

**3.** Which multi-dimensional declaration is legal?
A. `int m[2][] = {{1,2,3},{4,5,6}};` — the compiler counts three values in each brace group and fills in the missing dimension
B. `int m[][] = {{1,2,3},{4,5,6}};` — both dimensions can be read off the shape of the braces
C. Neither dimension may be omitted once an array has more than one, since the size-omission rule applies to one-dimensional arrays only
D. `int m[][3] = {{1,2,3},{4,5,6}};` — only the leftmost dimension may be left out

**4.** Given `double salaries[5] = {1000.0, 2.0, 3.4, 7.0, 50.0};`, what is the value of `salaries[2]`, and what is `salaries[5]`?
A. `3.4`, and `salaries[5]` is `50.0`, the last element
B. `3.4`, and `salaries[5]` lies one place past the end of the five, so it reads whatever is stored at that address
C. `2.0`, and `salaries[5]` is `50.0`
D. `2.0`, and `salaries[5]` is rejected by the compiler, which knows the array was declared with a size of five

**5.** `int m[2][3] = {{1,2,3},{4,5,6}};`. A student writes `x = m[1,2];`, intending row 1, column 2, and expects 6. What is wrong?
A. The notation is wrong: each subscript needs its own pair of square brackets, so it must be `m[1][2]`
B. Nothing: the comma form is an accepted shorthand for `m[1][2]`, so `x` becomes 6
C. The subscripts are simply taken in the opposite order, so the expression selects row 2, column 1 and `x` becomes 5
D. It is a syntax error and is therefore caught by the compiler before it can do any damage, which is why the deck does not dwell on it

**6.** Consider three functions. (i) `f` contains a call to `f`. (ii) `f` contains a call to `g`, and `g` contains a call to `f`. (iii) `f` contains a `for` loop that repeats its body *n* times. Which are recursion on the deck's definition?
A. (i) only, since recursion is a function calling itself
B. (i) and (iii), since both cause the same work to be performed over and over again
C. All three, since all three repeat
D. (i) and (ii) — the definition covers indirect calls as well as direct ones

**7.** What does `mystery(3)` return, and which line is the base case?

```c
int mystery(int n)
{
    if (n <= 0) return 1;
    return 2 * mystery(n - 1);
}
```

A. `6`, and the base case is `return 2 * mystery(n - 1);`
B. `1`, since the base case returns 1 and the base case is the last thing the function does
C. `8`, and the base case is `if (n <= 0) return 1;`
D. `16`, and the base case is `if (n <= 0) return 1;`

**8.** The deck's table says the iterative factorial **"saves the solution in an intermediate variable before it can be returned"** while the recursive one **"calculates and returns its result as a single expression"**. Which reading of that is right?
A. The recursive version needs no memory for partial results at all, since it declares no intermediate variable
B. The loop's one variable is replaced by a chain of suspended calls, each holding a partial result
C. The recursive version computes the whole answer in a single machine operation, so no variable is needed
D. The two descriptions concern the look of the source only and have no consequence while the programme runs

**9.** Which of these is **tail** recursive?
A. `void g(int n) { if (n == 0) return; printf("%d ", n); g(n - 1); }`
B. `int f(int n) { if (n == 0) return 0; return f(n - 1) + 1; }`
C. `int h(int n) { if (n == 0) return 1; return n * h(n - 1); }`
D. `void k(int n) { if (n == 0) return; k(n - 1); printf("%d ", n); }`

**10.** A recursive count of the 42s in an array is rewritten from "count them in the first n − 1 elements, then check the n-th" to "split the array into two halves of equal size and add the two counts". The deck warns that **the header will be different**. Why must it be?
A. Because the halving version needs an extra parameter in which to accumulate a running total
B. Because the halving version returns a different type from the first
C. Because the upper half does not begin at index 0, so the function must be told where the piece starts as well as where it ends
D. Because recursion on halves must be tail recursive, and tail recursion requires an accumulator parameter

**11.** A recursive function is called with an input so large that it descends 500,000 times before reaching its base case, and the programme dies. The equivalent loop handles the same input without difficulty. Why?
A. The loop is faster, so it finishes before the memory can run out
B. There is no real difference — recursion and iteration use the same memory, so the failure must come from something else
C. The compiler automatically converts deep recursion into a loop, so recursion depth cannot be the cause
D. Each outstanding call keeps a frame alive, so half a million exist at once; a loop reuses one

**12.** A programme declares `int a[5];` and, through an off-by-one, executes `a[5] = 0;`. It compiles, runs, prints the expected answer, and is shipped. Six months later an unrelated change is made and the programme begins to crash. What is the most accurate account?
A. The unrelated change introduced the bug; the original programme was correct, as its output demonstrated
B. `a[5]` was always past the end, so the write always landed on memory belonging to something else, and the correct output was never evidence of correctness
C. The array shrank as memory was reclaimed over the programme's lifetime, so index 5 was valid at first and became invalid later
D. The crash shows that the compiler started checking bounds after the change, which it had not done before

## Short answer

**13.** Set out the whole of the array material precisely. Give the deck's definition word for word and the declaration syntax. State the two ways of initialising an array, the one-sided rule about the number of values between the braces, and what happens when the size is omitted. Explain what an index is, why the first legal one is 0, and what the largest legal one is for `int a[10];`. Say exactly what happens — at compile time and at run time — when an index falls outside that range. Finally, give the declaration, the initialisation, the access notation and the traversal loops for a two-dimensional array, and say which dimension may be omitted and why.

**14.** This is meant to print the four elements of `a` and then their total, 50. Name **every** fault, say which one prevents it from compiling at all, state what the rest would do once that one is removed, and give the repaired programme.

```c
#include <stdio.h>

int total(int a[], int n)
{
    if (n == 1) return a[0];
    return total(a, n - 1) + a[n];
}

int main(void)
{
    int a[4] = {5, 10, 15, 20};
    int b[4];
    int i;

    b = a;

    for (i = 0; i <= 4; i++)
        printf("%d ", a[i]);

    printf("\n%d\n", total(a, 4));
    return 0;
}
```

**15.** State the deck's five-step general approach to writing a recursive programme, in order. Then apply it in full to a problem the deck does not solve: **return the largest value in an array of n integers**. Give the header, the decomposition, the recursive call, the combining step and the base case, and say why the base case you chose is the one that works. Trace your function on `{4, 9, 2, 9, 7}`. Finally, write the iterative version, compare the two using the deck's own three rows, and say what the deck means by "recursion simplifies the function by making the computer do more work while we do less work" — including what is lost as well as what is gained.

## Answers

**1. C** — *Concept: the clauses of the definition are structural requirements, not preferences.* "Elements of the same type" means every element has the same width in memory, and "sequential" means they lie in one contiguous block. Together those two facts let the machine reach element *i* by one multiplication and one addition from the start of the array, in the same time for any *i* — which is what makes indexing arithmetic rather than searching. Drop the same-type requirement and "*i* times the width" means nothing. A invents a size limit; **fixed-size** means the size cannot change, not that it must be small. B confuses the order of storage with what a traversal may do — an element may be read as often as you like. D constrains nothing the definition mentions; the values in an array are in no particular numerical order.

**2. A** — *Concept: the initialiser rule is one-sided.* The deck states it directly: *the number of values between braces `{ }` cannot be larger than the number of elements that we declare for the array between square brackets `[ ]`*. `s[2]` declares two elements and is handed three, so it is illegal. B inverts the rule: `q[5] = {1.0, 2.0};` is legal, and the three unmentioned elements become 0, which is a common way of zeroing an array. C contradicts the deck's other stated rule — *if you omit the size of the array, an array just big enough to hold the initialisation is created* — so `r` has size 3; its size is not absent but **inferred**, and just as fixed afterwards. D combines both errors and condemns the two legal declarations, which is the reading of someone who learned "the counts must match" instead of the rule as stated.

**3. D** — *Concept: only the leftmost dimension may be inferred.* An element `m[i][j]` is found at *start* + (*i* × columns + *j*) × width, so the compiler must know the number of **columns** before it can compute any address; the number of rows it can count from the brace groups. Hence `int m[][3]` is legal and `int m[2][]` is not. A reverses exactly that, and is the natural guess for anyone who has not asked what the brackets are *for*. B omits both dimensions and leaves the shape ambiguous. C denies an extension the deck raises itself with its question *"How does this change in multidimensional arrays?"* — the rule does carry over, but only to the first subscript.

**4. B** — *Concept: the index is an offset, and the declared size is a count.* `salaries[0]` is 1000.0, `salaries[1]` is 2.0, `salaries[2]` is **3.4** — the deck's own worked question. The five elements occupy offsets 0 to 4, so `salaries[5]` is the location immediately **after** the last one. C stores no length and checks no bounds, so the read is not reported as an error: it returns whatever is at that address, and the value may differ between runs, compilers and machines. A gets the zero-base right and then treats 5 as a legal index — the classic `i <= n` fault written as a single access. C is the one-based reading throughout. D combines the one-based reading with the expectation that the compiler will police the index; it knows the declared size but is not obliged to diagnose the access, and with a computed index it could not in general.

**5. A** — *Concept: each subscript needs its own pair of brackets.* The deck states it as a rule: *to access an element of a multidimensional array, the correct notation is to enclose each subscript in a separate pair of square braces*. `m[1][2]` applies the first subscript to select row 1 and the second to select column 2 within it, giving 6. `m[1,2]` contains one bracket pair and therefore one subscript expression, so it is not a two-dimensional access at all. B is the belief that the comma form is a shorthand, imported from mathematical notation and from languages that do accept it. C invents a transposition; the fault is not that the subscripts are swapped but that only one is being applied. D is the most dangerous answer, because it assumes the compiler will catch it: in C the comma is a legal **operator**, so the expression parses, and any complaint will concern the resulting type rather than the syntax. That is exactly why the deck states the notation as a rule rather than leaving it to the compiler.

**6. D** — *Concept: the definition covers indirect as well as direct recursion; a loop is not recursion.* The deck's sentence is that recursion is *a process in which a function indirectly and directly calls itself within its own function block*, and it names the two cases separately — **direct** recursion *"contains an explicit call to itself"*, **indirect** recursion is where *"a function contains a call to another function which eventually calls the function"*. Case (ii) is the indirect one: `f` reaches `f` again, the calls stack up in exactly the same way, and it needs a base case just as urgently as (i). A drops the word *indirectly* from a definition that contains it — the commonest partial recall in this topic. B and C both count the loop, which repeats a **body** within one call rather than re-entering the function; a loop needs no base case, keeps one set of variables and cannot exhaust the stack. Repetition alone is not recursion.

**7. C** — *Concept: identifying the base case, and counting the multiplications.* `mystery(3)` = 2 × `mystery(2)` = 2 × 2 × `mystery(1)` = 2 × 2 × 2 × `mystery(0)`, and `mystery(0)` matches `n <= 0` and returns 1, so the value is **8**. The base case is `if (n <= 0) return 1;` — the only line that produces a value without calling the function again, which is the whole test for a base case. A treats the recursive line as the base case, inverting the two components, and reports 6 by confusing doubling with a factorial. B is the belief that the function's value is whatever the innermost call returns, ignoring the pending multiplications that are the entire content of the recursive case. D counts one `2 *` too many, as though there were a multiplication for `n` = 0 as well as for 3, 2 and 1; there are exactly three recursive calls, because the descent stops **at** 0 rather than after it.

**8. B** — *Concept: what the call stack does in place of the loop's accumulator.* The loop keeps everything computed so far in one variable and overwrites it each pass, so one call with two variables suffices for any *n*. The recursion has no accumulator because the partial results have not been computed yet: `factorial(4)` cannot multiply by 4 until `factorial(3)` returns, so its frame stays alive holding `n = 4` and a pending multiplication, and so on down. At the deepest point *n* frames are alive and *n* − 1 operations are waiting — the storage has not vanished, it has moved out of one named variable and into the frames. A is the misreading the deck's own table invites, and it inverts the truth: *"has none"* counts locals written in the **source**, while at run time recursion uses **more** memory than the loop. C invents a machine that evaluates an arbitrary expression in one operation, when the expression contains a function call and the call is the expensive part. D denies a run-time consequence, which is exactly what the deck's summarising sentence — *the computer does more work while we do less* — is naming.

**9. A** — *Concept: tail recursion means no pending operation on the value the call returns — not that the call is written last.* In `g` the `printf` happens **before** the recursive call, so when `g(n - 1)` returns there is nothing left in this frame to do. That is the deck's definition: *a recursive function without pending operations to be performed on return from a recursive call*. B has `+ 1` waiting on the returned value and C has `n *` waiting on it — both non-tail, and both with the recursive call written on the last line, which is precisely why "last line" is not the test. D is the sharpest distractor and the mirror image of the key: the recursive call is **not** last, and a `printf` is pending on the return, so `k` is non-tail. Comparing A with D is the whole question — the same two statements in the opposite order, one tail and one not.

**10. C** — *Concept: the decomposition determines the header.* In the n − 1 version every sub-problem is a **prefix** starting at index 0, so its length alone identifies it and `(int a[], int n)` is enough. In the halving version the second sub-problem is the **upper half**, which starts somewhere in the middle; a length cannot say where a piece begins, so the header becomes something like `(int a[], int lo, int hi)` — the deck's own warning that *"the header will be different"*. A confuses the halving decomposition with the accumulator technique of tail recursion; halving needs no running total, since the two sub-results are simply added. B invents a change of return type; both return an `int` count. D asserts a requirement that does not exist — the halving version is **non-tail**, having an addition pending on two recursive calls, and it works perfectly well.

**11. D** — *Concept: recursion costs one live frame per outstanding call; iteration reuses one.* Every call allocates a frame holding its own parameters and locals and a note of where to resume, and the frame cannot be released while an operation on the returned value is still pending. Half a million simultaneously outstanding calls means half a million live frames, which exhausts the stack region and the process is terminated — a **stack overflow**, a failure of *space*. A loop makes half a million passes over the same variables in the same frame, so its memory use does not grow at all. A treats it as a race between speed and memory; the recursion's memory grows with the **depth** of the outstanding calls, not with elapsed time, and it would fail however long it was given. B denies the difference the whole comparison rests on. C assumes automatic conversion to a loop; that optimisation exists for some **tail**-recursive functions in some compilers at some settings, and a non-tail recursion, which has pending work in every frame, cannot be converted that way at all.

**12. B** — *Concept: an out-of-bounds access is undefined behaviour, so correct output is never evidence of correctness.* `int a[5];` reserves five locations at offsets 0 to 4, and `a[5]` is the location one past the end. The write always went into memory belonging to something else — perhaps padding, perhaps a variable about to be overwritten anyway — and produced no visible symptom only because of where the compiler happened to place things in that build. Any change to the code, the compiler, the optimisation level or the platform can move a live variable into that address, at which point the same write corrupts something that matters. A is the reasoning that keeps such bugs alive for years: it treats "it produced the right answer" as proof, when for undefined behaviour it is not even weak evidence. C invents shrinking arrays; the size is **fixed** at the declaration. D invents run-time bounds checking, which C does not perform before or after any change — if it did, the fault would have been reported on the very first run.

**13.** *Concept: the complete array material — definition, declaration, initialisation, indexing, bounds, and the two-dimensional case.* **Definition.** An array is **a type of data structure that can store a fixed-size sequential collection of elements of the same type.** **Fixed-size**: the number of elements is settled at the declaration and never changes. **Sequential**: the elements occupy one contiguous block. **Same type**: every element has the same `datatype` and therefore the same width. **Declaration.** To declare an array in C, **a programmer specifies the type of the elements and the number of elements required**: `datatype arrayName [ arraySize ];`. So `int a[10];` **defines an array of size 10, that is, a block of 10** consecutive `int`-sized locations. The number in the brackets of a declaration is a **count**. **Initialisation.** You can initialise **either one by one or using a single statement**:
```c
double salaries[5] = {1000.0, 2.0, 3.4, 7.0, 50.0};   /* single statement */
salaries[0] = 900.0;                                  /* one by one       */
```
**The one-sided rule:** the number of values between the braces **cannot be larger** than the number of elements declared between the square brackets. Fewer is allowed, and the remaining elements become 0. **Omitting the size:** if you omit it, **an array just big enough to hold the initialisation is created**, so `double salaries[] = {1000.0, 2.0, 3.4, 7.0, 50.0};` has size 5. **Indexing.** **An element is accessed by indexing the array name.** The index is an **offset from the first element**, not a position counted from one — because `a[i]` is found at *start of a* + *i* × *width of one element*, and the first element is zero widths along. So the first legal index is **0**, and for `int a[10];` the largest legal index is **9**: a count and its largest offset always differ by one. `double salary = salaries[2];` gives **3.4**, the third value. **Out of range.** At **compile time**, nothing: `a[10]` on a ten-element array is valid C, the programme builds without a warning, and with a computed index the compiler could not diagnose it in general. At **run time**, nothing either — there is no stored length and no check. The arithmetic is performed on the out-of-range index just as willingly, producing an address outside the block, so a read returns a junk value belonging to some other variable and a **write corrupts** that variable. This is **undefined behaviour**: the programme may print a plausible wrong answer, behave differently on the next run or on another machine, or crash — and it may do the first of these for months before doing the last. **Two dimensions.** A multi-dimensional array is **defined using multiple adjacent square brackets, and the elements may be initialised with values enclosed in curly braces**; to access an element, **each subscript is enclosed in a separate pair of square braces**.
```c
int m[2][3] = { {1, 2, 3},
                {4, 5, 6} };
int x = m[1][2];                    /* 6 -- row 1, column 2; never m[1,2] */

for (i = 0; i < 2; i++)             /* outer bound = rows    */
    for (j = 0; j < 3; j++)         /* inner bound = columns */
        total = total + m[i][j];    /* total = 21            */
```
Each subscript has **its own independent bound**, so swapping the two loop limits reads outside the array on one axis while never reaching the far columns on the other — silently, since neither error is checked. **Which dimension may be omitted:** only the **leftmost**, as in `int m[][3] = {{1,2,3},{4,5,6}};`. The compiler can count the rows from the brace groups, but it must know the number of columns to compute the address of `m[i][j]`, which is *start* + (*i* × columns + *j*) × width. `int m[2][]` is therefore illegal.

**14.** *Concept: four independent faults — an illegal array assignment, an out-of-range recursive index, a loop bound one too high, and a base case that is unreachable from the empty case.* **Fault 1 — `b = a;` does not compile, and it is the one that stops the build.** In C an array name is not a modifiable value and cannot appear on the left of an assignment, so there is no such thing as assigning one array to another. This is exactly the point of the deck's separate exercise, *"copy the elements of the array above into another array"*: a copy is a **traversal**, not an assignment.
```c
for (i = 0; i < 4; i++)
    b[i] = a[i];
```
(As the programme stands, `b` is never used afterwards either, so the line can simply be deleted.) **What the rest would do once that line is removed.** **Fault 2 — `total` indexes `a[n]` instead of `a[n - 1]`.** With `n` elements the last one sits at offset `n − 1`, so the recursive case should add `a[n - 1]`. Trace it as written: `total(a, 4)` = `total(a, 3)` + `a[4]`; `total(a, 3)` = `total(a, 2)` + `a[3]` = … + 20; `total(a, 2)` = `total(a, 1)` + `a[2]` = … + 15; `total(a, 1)` hits the base case and returns `a[0]` = 5. So the total is 5 + 15 + 20 + `a[4]` = 40 plus **whatever is stored one element past the end** — an out-of-range read. One index error has produced two symptoms at once: `a[1]` (the value 10) is **never added**, and `a[4]` (which does not exist) **is**. The expected 50 will not appear, and the number that does appear may vary between runs. **Fault 3 — the printing loop runs one index too far.** `for (i = 0; i <= 4; i++)` visits 0, 1, 2, 3 and **4**, so after the four elements it prints `a[4]`, again outside the block. The idiom is `i < n`, not `i <= n`. **Fault 4 — the base case is unreachable from `n = 0`.** `if (n == 1) return a[0];` works for any `n` ≥ 1, but a call of `total(a, 0)` fails the test, recurses to `n = −1`, then −2, −3, … The base case is an equality test on a value the descent can step straight past, so an empty array gives infinite recursion and a **stack overflow**, while also reading `a[-1]`, `a[-2]`, … on the way down. The safe base case is `if (n == 0) return 0;` — the empty case, answered outright, which makes the *n*-th call the one that picks up `a[0]`. **The repaired programme:**
```c
#include <stdio.h>

int total(int a[], int n)
{
    if (n == 0) return 0;                    /* empty case: reachable from any n >= 0 */
    return total(a, n - 1) + a[n - 1];       /* n-th element sits at offset n - 1     */
}

int main(void)
{
    int a[4] = {5, 10, 15, 20};
    int b[4];
    int i;

    for (i = 0; i < 4; i++)                  /* arrays are copied element by element  */
        b[i] = a[i];

    for (i = 0; i < 4; i++)                  /* i < 4, not i <= 4                     */
        printf("%d ", a[i]);

    printf("\n%d\n", total(a, 4));
    return 0;
}
```
It now prints `5 10 15 20` and then `50`. Note how the faults hide each other and hide themselves: the compiler reports only Fault 1, and once that is removed the other three produce no diagnostics whatever — two of them yield unpredictable numbers that look like ordinary results, and the third shows up only on an input this `main` never supplies.

**15.** *Concept: applying the deck's five-step method to a new problem, and reading the iteration/recursion trade honestly.* **The five steps, in the deck's order.** (1) **Write the function header**, which shows what the function will do and how it will be called. (2) **Decompose the problem into subproblems.** (3) **Write recursive calls** to solve those subproblems whose form is similar to that of the original problem. (4) **Write code to combine, augment or modify the results** of the recursive call(s), to construct the desired return value or side effects. (5) **Write base case(s)** to handle any situations not handled properly by the recursive portion. Note the order: the base case is written **last** and appears **first** in the code. **Applying it to "return the largest value in an array of n integers".** *Step 1, the header.* `int largest(int a[], int n);` — it takes the array and how many elements to consider, and returns one `int`. *Step 2, the decomposition.* The largest of *n* elements is either the largest of the **first n − 1** elements, or the **n-th** element, whichever is bigger. That sub-problem is *similar in form* to the original — "the largest of a prefix" — so the same function can solve it. *Step 3, the recursive call.* `largest(a, n - 1)`. *Step 4, the combination.* Compare that result with `a[n - 1]` and return the larger. *Step 5, the base case.* Which situation does the recursive portion fail to handle? An array of **one** element, where there is no prefix to recurse on: `if (n == 1) return a[0];`. **Why that base case rather than `n == 0`.** The array-sum and count-42 examples stop at `n == 0`, because the sum of nothing is 0 and the count of nothing is 0 — an empty collection has a natural answer. The largest of nothing has **no** answer: there is no integer that is correct, and returning 0 would be wrong for `{-5, -3}`. So the smallest problem this function can honestly answer is one element, and the base case must be `n == 1`. This means the function has a **precondition**, `n >= 1`, and the caller must respect it — a genuine and examinable difference between the three problems, and a case where step 5 changes the contract in step 1.
```c
int largest(int a[], int n)          /* precondition: n >= 1 */
{
    if (n == 1) return a[0];                    /* base case      */
    int rest = largest(a, n - 1);               /* sub-problem    */
    return (a[n - 1] > rest) ? a[n - 1] : rest; /* combining step */
}
```
**Trace on `{4, 9, 2, 9, 7}`, called as `largest(a, 5)`.** Descending: `largest(a,5)` needs `largest(a,4)`; `largest(a,4)` needs `largest(a,3)`; `largest(a,3)` needs `largest(a,2)`; `largest(a,2)` needs `largest(a,1)`. Five frames are alive and four comparisons are pending. Ascending: `largest(a,1)` returns `a[0]` = **4**; `largest(a,2)` compares `a[1]` = 9 with 4 and returns **9**; `largest(a,3)` compares `a[2]` = 2 with 9 and returns **9**; `largest(a,4)` compares `a[3]` = 9 with 9 and returns **9** (the tie is harmless, since either branch yields 9); `largest(a,5)` compares `a[4]` = 7 with 9 and returns **9**. The answer is **9**. **The iterative version.**
```c
int largestIter(int a[], int n)
{
    int i, best = a[0];              /* two local variables */
    for (i = 1; i < n; i++)
        if (a[i] > best) best = a[i];
    return best;                     /* the answer is saved before it is returned */
}
```
**The deck's three rows.** *Local variables:* the iterative version has **two**, `i` and `best`; the recursive version's `rest` is only a name for the value just returned and can be written inline, so it declares effectively **none**. *Statements:* the loop needs an initialisation, a loop with a test inside it and a return — **three**; the recursion is one conditional and one return expression. *How the result is produced:* the loop **saves the solution in an intermediate variable before it can be returned**, whereas the recursion **calculates and returns its result as a single expression**. **What the summarising sentence means.** *We do less.* There is no counter to start at the right place, no `best` to seed correctly, no loop condition to get one out at either end — and those are precisely the two commonest iterative faults, an `i <= n` that runs off the end and a `best` initialised to 0 that breaks on all-negative data. The recursive code also reads like the statement of the problem: the largest of *n* is the larger of the last element and the largest of the rest. *The computer does more.* Each of the *n* calls gets its own frame, holding its own `n` and a comparison pending on a value that has not arrived yet, so *n* frames are alive at the deepest moment where the loop had one frame and two variables. *What is lost.* Memory proportional to *n* instead of constant; the cost of setting up and tearing down *n* frames; and a hard ceiling — an array long enough will exhaust the stack and crash the programme on input the loop would process without noticing. So the sentence names a **price and a purchase**, not a verdict. Recursion is the right instrument when the problem genuinely decomposes into sub-problems **similar in form to the original**, which is the deck's own criterion; a straight pass along a sequence is what a loop is for.
