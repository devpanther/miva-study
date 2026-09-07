# Wednesday — COS_102 nightly check

*Abstraction and the anatomy of functions and modules, as concepts.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** ```c
int f(int n) { n = n * 3; return n - 1; }
int g(int n) { return f(n) + n; }
```
What does `printf("%d", g(4));` print?
A. 23
B. 15
C. 11
D. 16

**2.** `area(double r) { return 3.14 * r * r; }` Which of the four parts of a function definition is missing?
A. Parameters
B. Function body
C. Return type
D. Function name

**3.** In `int m = max(4, 7);` what are 4 and 7?
A. Arguments
B. Parameters
C. Return values
D. Declarations

**4.** ```c
int max(int a, int b);
int main(void) {
    int m = max(4, 7);
    printf("%d\n", m);
    return 0;
}
int max(int a, int b) { if (a > b) return a; return b; }
```
Which line, if deleted, makes the compiler reject the call `max(4, 7)` in main?
A. `return 0;`
B. `printf("%d\n", m);`
C. `return b;`
D. `int max(int a, int b);`

**5.** ```c
int f(int n) {
    if (n > 3) return n * 2;
    return n + 100;
}
```
What does `printf("%d %d", f(5), f(2));` print?
A. 10 102
B. 110 102
C. 10 4
D. 5 102

**6.** ```c
int twice(int n) { return 2 * n; }
int main(void) {
    int a = 3;
    int b = twice(twice(a) + 1);
    printf("%d %d", a, b);
    return 0;
}
```
What is printed?
A. 3 12
B. 14 14
C. 3 7
D. 3 14

**7.** `printf("C:\new\tx");` What appears on the screen?
A. `C:\new` then a tab and `x`
B. `C:new` then a tab and `x`
C. `C:` then a new line, then `ew`, a tab and `x`
D. `C:` then a new line, then `new`, a tab and `x`

**8.** An object's `balance` can be read only through its `get_balance()` method and changed only through `deposit()`. Which type of abstraction is this?
A. Functional abstraction
B. Data abstraction
C. Decomposition
D. Module import

**9. (show your working)** ```c
int area(int w, int h) { return w * h; }
int perim(int w, int h) { return 2 * (w + h); }
int main(void) {
    int w = 3, h = 5;
    int d = area(w + 1, h) - perim(w, h);
    printf("%d\n", d);
    return 0;
}
```
Trace this: give the arguments each call receives, the value each call returns, and the output. Show your working.

**10. (show your working)** For `double bmi(double mass, double height) { return mass / (height * height); }` name the return type, the function name, the parameters and the function body. Then write a declaration for it, and a call that stores the result for mass 70 and height 1.75 in a variable `b`. Give the value of b to 2 decimal places.

**11. (show your working)** A shop takes 15% off three prices, 100, 200 and 300, and prints the discounted total. Write two C functions, `withDiscount(price)` returning the price less 15% and `total3(a, b, c)` returning the sum of three values, and the statement in main that prints the total. State the number printed.

**12. (show your working)** A tax formula is pasted twelve times in a program, once at each place it is needed, and then the tax rate changes. Using the two benefits of functions, explain what goes wrong with the pasted version and what the fix is.

---

## Answers

**1. B** — *Tracing a call through a parameter copy.* g's n is 4. f receives its own copy of 4, triples it to 12 and returns 11. Back in g, its n was never touched and is still 4, so g returns 11 + 4 = 15.

23 is 11 + 12, assuming f's tripling reached g's variable; 11 forgets the + n that g adds; 16 drops the − 1 inside f, giving 12 + 4.

**2. C** — *The four parts of a function definition.* A definition has a return type, a function name, parameters and a body. Here the name is `area`, the parameter is `double r`, the body is in the braces, and nothing before the name says what type of value comes back. The return type is missing; it should read `double area(double r)`.

The parameter list `(double r)` is present; the body `{ return ... }` is present; the name `area` is present.

**3. A** — *Parameters versus arguments.* 4 and 7 are the actual values supplied at this call, which are the arguments. They are passed by position into the parameters `a` and `b` written once in the header of max.

Parameters are the placeholders in the header, not the values; the return value is the single result, 7, that comes back; a declaration is the statement `int max(int a, int b);` that tells the compiler about the function.

**4. D** — *What a function declaration is for.* The definition of max sits below main, so when the compiler reaches the call it has not yet seen the body. The declaration on line 1 tells it the name, return type and parameters, which is all it needs to accept the call. Delete it and the call names an unknown function.

Deleting `return 0;` only changes what main hands back; deleting the printf removes output, not the call; deleting `return b;` breaks max's body, not the compiler's knowledge of the call.

**5. A** — *Return ends the function immediately.* f(5): 5 > 3 is true, so `return 10` runs and the function ends there; the second return is never reached. f(2): 2 > 3 is false, the first return is skipped, and 2 + 100 = 102 is returned. Output: 10 102.

110 102 lets both returns run for n = 5 and adds them; 10 4 applies the doubling to n = 2 as well, ignoring the condition; 5 102 forgets to double.

**6. D** — *Nested function calls.* Work from the inside out. twice(a) is twice(3) = 6. Add 1: the outer argument is 7. twice(7) = 14, so b = 14, and a is still 3 because twice only read a copy. Output: 3 14.

3 12 forgets the + 1 and computes twice(twice(3)); 14 14 assumes the call changed a; 3 7 stops after forming the outer argument and never applies the outer twice.

**7. C** — *Reading escape sequences in a string.* A backslash inside a string always starts an escape. `\n` is a newline and `\t` is a horizontal tab, so the string is C, :, newline, e, w, tab, x. The screen shows `C:` on one line and `ew`, a tab gap, then `x` on the next.

`C:\new` treats the backslash as an ordinary character; `C:new` drops the backslash but keeps the n; the last option prints the newline and then still prints the n, which was consumed by the escape.

**8. B** — *Data versus functional abstraction.* What is hidden is the data of the object: no other programme can alter the balance without going through the permitted methods. That is data abstraction.

Functional abstraction hides how a method is implemented, leaving callers only its name and input and output formats; decomposition is breaking a project into functions; importing a module makes its names available and hides nothing.

**9.** *Tracing calls with arguments and return values.* The first argument to area is w + 1 = 4, the second is h = 5, so area(4, 5) returns 4 × 5 = 20. perim receives 3 and 5 and returns 2 × (3 + 5) = 16. Then d = 20 − 16 = 4 and the program prints 4.

Final answer: 4. A correct answer states area(4, 5) = 20, perim(3, 5) = 16, and the output 4. Using area(3, 5) = 15 (forgetting the + 1 in the argument) gives −1 and is wrong; 2 × 3 + 5 = 11 for perim ignores the brackets and is wrong.

**10.** *Naming the parts of a function and calling it.* Return type: `double`. Function name: `bmi`. Parameters: `double mass, double height`. Body: `{ return mass / (height * height); }`. Declaration: `double bmi(double mass, double height);` (parameter names may be omitted: `double bmi(double, double);`). Call: `double b = bmi(70, 1.75);`. Value: 1.75² = 3.0625 and 70 / 3.0625 = 22.857..., so b = 22.86.

A correct answer names all four parts, writes the declaration with a semicolon and no body, passes the arguments in the order mass then height, and gives 22.86 (22.857 accepted). `bmi(1.75, 70)` binds the values to the wrong parameters and gives 0.000357, which is wrong.

**11.** *Decomposing a task into functions.* ```c
double withDiscount(double price) { return price * 0.85; }
double total3(double a, double b, double c) { return a + b + c; }
/* in main */
printf("%.2f\n", total3(withDiscount(100), withDiscount(200), withDiscount(300)));
```

100 × 0.85 = 85, 200 × 0.85 = 170, 300 × 0.85 = 255, and 85 + 170 + 255 = 510, so the program prints 510.00. A correct answer has withDiscount return price × 0.85 (or price − price × 0.15), total3 return a + b + c, calls withDiscount once per price, and states 510 (510.00 accepted). Returning price × 0.15 gives 90 and is the discount, not the discounted price; that is wrong.

**12.** *Why functions avoid duplicated code.* With twelve pasted copies the rate must be changed in twelve places, and any copy that is missed keeps the old rate, so the program silently gives two different answers. Functions avoid duplicating code: however many times a function is used, it is implemented only once. The fix is one function, say `double tax(double amount)`, called twelve times; the rate then lives on one line and one edit changes every use. The second benefit is scaling up: adding more places that need tax means adding calls, not copies, so the system stays stable as the program grows.

A correct answer names duplication (implement once, call many times), says the rate is edited in one place, and mentions that callers only need the function's name and input and output formats, so changing the body breaks nothing else.
