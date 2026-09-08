# Wednesday — COS_102 nightly check

*Abstraction and the anatomy of functions and modules, as concepts.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** What does this program print?

```c
int area(int w, int h) { return w * h; }
int perim(int w, int h) { return 2 * (w + h); }
int main(void) {
    int w = 3, h = 5;
    int d = area(w + 1, h) - perim(w, h);
    printf("%d\n", d);
    return 0;
}
```
A. −1
B. 9
C. 4
D. 2

**10.** `double bmi(double mass, double height) { return mass / (height * height); }` What does `double b = bmi(70, 1.75);` store in b, to 2 decimal places?
A. 22.86
B. 40.00
C. 122.50
D. 0.00

**11.** `withDiscount(p)` returns a price less 15% and `total3(a, b, c)` returns the sum of three values. What does `printf("%.2f", total3(withDiscount(100), withDiscount(200), withDiscount(300)));` print?
A. 600.00
B. 555.00
C. 90.00
D. 510.00

**12.** A tax formula is pasted at twelve places in a program, and then the tax rate changes. Which statement names what a function would have given the team?
A. The formula would run faster, because it is compiled only once.
B. The formula is written once and called twelve times, so one edit changes every use.
C. The rate would become a constant that no part of the program could change.
D. The compiler would compare the twelve copies and warn about any difference.

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

**9. C** — *Tracing calls with arguments and return values.* The arguments are worked out before the call: area receives w + 1 = 4 and h = 5, so it returns 4 × 5 = 20; perim receives 3 and 5, so it returns 2 × 8 = 16. d = 20 − 16 = 4.

−1 forgets the + 1 and uses area(3, 5) = 15; 9 drops the brackets in perim and computes 2 × 3 + 5 = 11; 2 passes w + 1 to perim as well, giving 2 × 9 = 18.

**10. A** — *Calling a function with arguments in order.* Arguments bind to parameters by position, so mass is 70 and height is 1.75. height × height = 3.0625, and 70 / 3.0625 = 22.857..., which is 22.86 to two places.

40.00 divides by the height once instead of squaring it; 122.50 multiplies by the height; 0.00 is bmi(1.75, 70), which binds the two values to the wrong parameters and gives 0.000357.

**11. D** — *Reusing one function on several values.* withDiscount is applied to each price on its own: 100 × 0.85 = 85, 200 × 0.85 = 170 and 300 × 0.85 = 255. total3 adds the three results: 85 + 170 + 255 = 510, printed as 510.00.

600.00 is the total with no discount at all; 555.00 takes a flat 15 off each price instead of 15 per cent; 90.00 returns the discount itself, 0.15 × p, rather than the discounted price.

**12. B** — *Why functions avoid duplicated code.* A function is implemented once however many times it is used, so the rate lives on one line: change it there and all twelve callers change with it. With pasted copies the same edit must be made twelve times, and any copy that is missed leaves the program quietly giving two different answers.

Calling a function does not make the code faster, a function is not a constant, and a compiler never compares duplicated code for you.
