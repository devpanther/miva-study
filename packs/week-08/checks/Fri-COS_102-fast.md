# Friday — COS_102 fast-hour check

*Code work on abstraction, functions and modules.*
*12 questions, straight after the hour. Score out of 12.*

**1.** `int sq(int n) { return n * n; }` What does `printf("%d", sq(sq(2)) - sq(3));` print?
A. 1
B. −5
C. 7
D. 13

**2.** A function must give its caller the VAT-inclusive price of a `double` price, so that the caller can store the result. Which header is correct?
A. `double withVat(double price)`
B. `void withVat(double price)`
C. `double withVat(void)`
D. `int withVat(double price)`

**3.** ```c
double net(double gross) {
    printf("%.2f\n", gross * 0.9);
}
int main(void) {
    double n = net(200);
    printf("%.2f\n", n);
    return 0;
}
```
The variable n does not receive 180.00. Which change to `net` fixes that?
A. Change the return type to `void`
B. Add `return;` after the printf
C. Change `%.2f` to `%d`
D. Replace the printf line with `return gross * 0.9;`

**4.** Which string literal makes `printf` show exactly `C:\new` on the screen?
A. `"C:\new"`
B. `"C:\\new"`
C. `"C:\\\\new"`
D. `"C://new"`

**5.** ```c
int total = 0;
void add(int v) { int total = 0; total = total + v; }
int main(void) {
    add(5); add(7);
    printf("%d\n", total);
    return 0;
}
```
This prints 0. Which single change makes it print 12?
A. Move the printf inside add
B. Delete `int total = 0;` inside add
C. Change `total = total + v` to `total += v`
D. Declare `int total;` inside main

**6.** After `from special_functions import max`, which call works?
A. `special_functions.max(4, 7)`
B. `import max(4, 7)`
C. `special_functions(max, 4, 7)`
D. `max(4, 7)`

**7.** ```c
double share(double part, double whole) { return part / whole * 100; }
```
What does `printf("%.0f %.0f", share(20, 80), share(80, 20));` print?
A. 25 400
B. 25 25
C. 400 25
D. 0 4

**8.** Which function does every C programme start executing from, whatever order the functions are written in the file?
A. `printf()`
B. The first function in the file
C. `main()`
D. `#include`

**9.** `printf("%.2f", average3(70, 85, 90));` must print 81.67. Which body for `double average3(double a, double b, double c)` does that?
A. `return a + b + c / 3;`
B. `return (a + b + c) / 3;`
C. `return a + (b + c) / 3;`
D. `return a + b + c;`

**10.** ```c
void dbl(int n) { n = n * 2; }
int main(void) {
    int x = 4;
    dbl(x);
    printf("%d\n", x);
    return 0;
}
```
This prints 4. Which change makes it print 8?
A. Rename the parameter: `void dbl(int x) { x = x * 2; }`
B. Call it twice: `dbl(x); dbl(x);`
C. Make x a global variable and leave dbl as it is.
D. `int dbl(int n) { return n * 2; }` with the call `x = dbl(x);`

**11.** What does this print?

```c
int calls = 0;
int step(int n) { calls = calls + 1; return n + calls; }
int main(void) {
    int v = step(10);
    v = step(v);
    v = step(v);
    printf("%d %d\n", v, calls);
    return 0;
}
```
A. 16 3
B. 13 3
C. 16 1
D. 13 1

**12.** `#include <stdio.h>` lets a program call `printf` although the program contains none of printf's code. What does the header file supply?
A. The full source code of printf.
B. The compiled machine code of printf.
C. Declarations: printf's name, return type and parameters.
D. A copy of printf renamed for this program.

---

## Answers

**1. C** — *Evaluating nested calls.* sq(2) = 4, so sq(sq(2)) = sq(4) = 16. sq(3) = 9. 16 − 9 = 7.

−5 applies sq to 2 only once, 4 − 9; 13 forgets to square the 3, 16 − 3; 1 makes both slips, 4 − 3.

**2. A** — *Choosing a return type and parameter.* The caller needs a value to store, so the return type cannot be void, and the price must be passed in, so there is a double parameter: `double withVat(double price)`.

`void` gives the call no value, so `double v = withVat(p);` will not compile; `withVat(void)` has no way to receive the price; `int` truncates a price such as 215.75 to 215.

**3. D** — *Returning versus printing.* Printing sends characters to the screen; nothing in the program can pick them up. To hand 180.00 back to the caller the function must `return gross * 0.9;`, and then main can print n.

Making the function void removes the value altogether and the assignment to n stops compiling; a bare `return;` returns no value; `%d` only changes how the screen output is formatted.

**4. B** — *Writing a literal backslash.* A backslash starts an escape, so to print one backslash you write two: `\\` is the escape for a single backslash. `"C:\\new"` prints C:\new.

`"C:\new"` reads `\n` as a newline and prints C: on one line and ew on the next; four backslashes print two; forward slashes are ordinary characters and print as written.

**5. B** — *Fixing a shadowed global.* The local `int total` inside add shadows the global: each call adds v to a fresh local that dies when the call ends, and the global stays 0. Delete the local definition and `total = total + v` refers to the global, which becomes 5 and then 12.

Moving the printf into add prints the local, 5 then 7, never 12; `+=` is the same operation on the same local; a local in main would shadow the global there too and print an uninitialised value.

**6. D** — *Import forms and what they make available.* `from special_functions import max` explicitly specifies the one function max and brings that name in directly, so `max(4, 7)` works and only max can be used from the module.

`special_functions.max(4, 7)` is the form for `import special_functions`, which was not written, so the module's name is not available; `import max(4, 7)` confuses the import statement with a call and is not valid syntax; a module is not a function and cannot be called with arguments.

**7. A** — *Arguments bind to parameters by position.* Arguments are matched to parameters left to right, not by meaning. share(20, 80): part = 20, whole = 80, 20 / 80 × 100 = 25. share(80, 20): part = 80, whole = 20, 80 / 20 × 100 = 400. Output: 25 400.

25 25 assumes the compiler works out which value is the part; 400 25 has the two calls swapped; 0 4 drops the × 100 and truncates as if the division were in int.

**8. C** — *The entry point of a C programme.* All C programmes have `main()` as the entry-point function; execution starts there regardless of where it appears on the page.

`printf()` is a library function that main may call; the first function in the file is often a helper defined above main so that main can call it; `#include` is a directive that brings in a header file, not a function.

**9. B** — *Writing a function that returns a value.* The three values must be added before the division, which needs brackets: (70 + 85 + 90) / 3 = 245 / 3 = 81.666..., printed as 81.67.

Without brackets `/` binds tighter than `+`, so `a + b + c / 3` divides only c and prints 185.00; `a + (b + c) / 3` divides only the last two and prints 128.33; `a + b + c` never divides and prints 245.00.

**10. D** — *Fixing a pass-by-value fault with a return value.* A parameter holds a copy of the argument, so `n = n * 2` doubles the copy and main's x is never touched. The fix is to hand the new value back: give dbl a return type with `return n * 2;` and store what it returns, `x = dbl(x);`.

Renaming the parameter changes nothing, since it is still a copy; calling a void function twice doubles nothing twice; and a global x is still not what dbl assigns to, because it assigns to its own parameter.

**11. A** — *Tracing a function that changes a global.* `calls` is global, so all three calls see and change the same variable. step(10): calls becomes 1 and it returns 11. step(11): calls becomes 2 and it returns 13. step(13): calls becomes 3 and it returns 16. Output: 16 3.

13 3 adds a fixed 1 each time instead of the growing `calls`; 16 1 has the right value but treats calls as if it restarted at 0 in every call; 13 1 makes both mistakes.

**12. C** — *What a header file supplies.* A header carries declarations, not bodies: the name, the return type and the parameters of each library function. That is all the compiler needs to check a call and all the caller needs to know, while printf's body is compiled elsewhere and joined on afterwards.

Neither the source nor the machine code of printf is pulled in by the header, and nothing is copied or renamed for the program.
