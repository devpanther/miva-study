# Friday — COS_102 fast-hour check

*Code work on abstraction, functions and modules.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

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

**9. (show your working)** Write a C function `average3` that takes three `double` values and returns their mean, a declaration for it that could sit above main, and a main that prints the average of 70, 85 and 90 with `%.2f`. State what is printed.

**10. (show your working)** ```c
void dbl(int n) { n = n * 2; }
int main(void) {
    int x = 4;
    dbl(x);
    printf("%d\n", x);
    return 0;
}
```
This prints 4. Explain why x is unchanged, then rewrite dbl and its call so that main prints 8. Show your working.

**11. (show your working)** ```c
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
Trace this, giving the value of `calls` and the value returned at each call, and the output. Show your working.

**12. (show your working)** `#include <stdio.h>` lets a program call `printf` although the program contains none of the code for it. Explain what the header file supplies, what the caller needs to know to use printf, and which type of abstraction this is.

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

**9.** *Writing a function that returns a value.* ```c
double average3(double a, double b, double c);   /* declaration */

int main(void) {
    printf("%.2f\n", average3(70, 85, 90));
    return 0;
}

double average3(double a, double b, double c) { return (a + b + c) / 3; }
```

(70 + 85 + 90) / 3 = 245 / 3 = 81.666..., printed as 81.67. A correct answer has return type double, three double parameters, a return of the sum divided by 3, a declaration ending in a semicolon with no body, a call with the three arguments, and the output 81.67. A void function that prints inside itself does not return the mean and is wrong; `a + b + c / 3` divides only c and gives 185.00, which is wrong.

**10.** *Fixing a pass-by-value fault with a return value.* A parameter receives a copy of the argument. Inside dbl, n is a local copy of 4; `n = n * 2` makes that copy 8, and when dbl returns the copy is discarded. x in main was never touched, and dbl is void, so it hands nothing back either.

Fix: `int dbl(int n) { return n * 2; }` and in main `x = dbl(x);` (or `printf("%d\n", dbl(x));`). Now dbl(4) returns 8 and main prints 8. A correct answer says the parameter is a copy, gives dbl a non-void return type with `return n * 2;`, and stores or prints the returned value. Keeping the function void and calling it twice, or renaming n to x, changes nothing and is wrong.

**11.** *Tracing a function that changes a global.* `calls` is global, so every call sees and changes the same variable. First call, step(10): calls becomes 1, returns 10 + 1 = 11, so v = 11. Second call, step(11): calls becomes 2, returns 11 + 2 = 13, v = 13. Third call, step(13): calls becomes 3, returns 13 + 3 = 16, v = 16. The program prints 16 3.

Final answer: 16 3. A correct answer shows calls going 1, 2, 3 and the returns 11, 13, 16. Treating calls as a local that restarts at 0 gives 13 (11, 12, 13) and calls = 1, which is wrong; 33 1 (adding 1 each time to a fixed 10) is also wrong.

**12.** *Header files as abstraction.* The header file supplies the declarations of the library's functions: for printf, its name, its return type and its parameters. The body of printf is compiled elsewhere and is never seen. To use it the caller needs only the method's name, the format of the input and the format of the output, which is exactly what a declaration gives. Hiding how a method is implemented while exposing its name and input and output formats is functional abstraction.

A correct answer says the header carries declarations (not bodies), lists name, input format and output format as all the caller needs, and names functional abstraction. Calling it data abstraction is wrong: nothing about printf's data is being protected, its implementation is being hidden.
