# COS_102 — Week 8 Summary

*Introduction to Problem Solving · Week 8 (26 Oct – 1 Nov 2026) · Topics: Abstraction Concepts; Functions and Modules*

## The 8 most examinable things this week

1. **The definition, word for word:** abstraction is **the process of hiding the internal details of an application from the outer world.** The course's analogy is the car ignition — you twist the key and the car starts; you do not bother yourself with what happens in the engine in between. Note what is hidden: the *internals*, not the *service*. The ignition is still available to you.
2. **The two named types.** **Data abstraction** — writing the programme so that **the data of an object is not directly exposed** to the outside world or to other programmes, which **ensures that no other programme can alter the object data without obtaining the necessary permissions**. **Functional abstraction** — writing it so that **the implementation of the methods of an object is not directly exposed**; if another programme needs the method, **all it needs to know is the method's name, the format of the input, and the format of the output.** Data hides *what is stored*; functional hides *how it is done*.
3. **The two mechanisms the course gives for implementing abstraction: access specifiers and header files.** **`public` and `private`** are applied to **the properties and functions of an object** and **restrict the access of other programmes to only some of them**. A **header file** lets you **use functions from it without having any knowledge of how the function is implemented** — which is functional abstraction delivered by the language's own toolchain.
4. **The four benefits, exactly as stated:** applications are **more secure**, since the implementation is not exposed; it **enhances code readability and reusability**; **the implementation of a method can be changed without breaking other parts of the code**; and it **prevents the duplication of codes**.
5. **Why decomposition at all.** The course's argument is about people, not neatness: large complex projects make it **impossible or time-wasting for only one person to deliver a solution quickly**, and **the more complex the task, the more people are required**. So you **break the complex project into smaller ones**, and **functions are what you break it into, such that different people can work on smaller functions at the same time.** The two benefits: functions let you **scale a project up** (a small project that becomes complex only needs **more functions**, and **the system remains stable**), and they let you **avoid duplicating code**, because **however many times a function is used, it is implemented only once**.
6. **Function: definition, declaration, definition-proper, call.** **A function is a group of statements that perform a task.** How code is divided among functions is **up to the programmer, but logically the division is such that each function performs a specific task.** A **function declaration tells the compiler about a function name, return type, and parameters** — the body **may be defined separately**. A **function definition provides the actual body**, and consists of **a function header and a function body**. **Calling a function means that we want to use the function.**
7. **The four parts of a function definition.** **Return type** — the **data type of the value the function returns**; it **can also be `void`**. **Function name** — the actual name. **Parameters** — **a parameter is like a placeholder; when a function is invoked, a value is passed to the parameter**, and **a function may contain no parameters**. **Function body** — **a collection of statements that define what the function does.** Learn these four as a list; the exam asks you to point at a line of code and name each part.
8. **Modules are functions at a larger scale.** **Modules and functions are very similar; the main difference is that modules are used on a much larger scale.** Functions **solve specific problems on a smaller scale**; modules are larger because **they can contain various functions and classes.** To use one you must **import** it: `import special_functions` makes the module available, and `from special_functions import max` **explicitly specifies the exact function**, after which **only `max` may be used** from that module.

## Abstraction: the two types side by side

| | **Data abstraction** | **Functional abstraction** |
|---|---|---|
| What is hidden | The **data** of an object — it is **not directly exposed** to the outside world or to other programmes | The **implementation of the methods** of an object |
| What the outside still gets | Access through permitted routes only | The method's **name**, the **format of the input**, the **format of the output** |
| The stated guarantee | **No other programme can alter the object data without obtaining the necessary permissions** | The body may be rewritten and callers do not break, because they never depended on the body |
| Typical mechanism | `private` data, `public` accessor functions | A declaration in a header file; the definition elsewhere |

**Access specifiers.** `public` and `private` are written on **the properties and functions of an object**, and their whole job is to **restrict the access of other programmes to only some of the properties and functions**. The usual arrangement: data `private`, the small set of functions that form the intended interface `public`. Note what the specifier does *not* do — it does not encrypt anything, does not decide the return type, and does not decide where the code is stored. It decides **who may name it**.

**Header files.** In C the declaration and the definition are routinely separated (point 6): the header carries the **declarations**, the compiled library carries the **definitions**. `#include <stdio.h>` gives your file the *declaration* of `printf` — its name, the format of its input and the format of its output — and nothing about how `printf` is written. That is functional abstraction, stated in exactly the course's terms.

## The C hello-world programme, line by line

```c
/* my first program in C */
#include <stdio.h>

int main()
{
    printf("Hello, World! \n");
    return 0;
}
```

- **Comments in C start with `/*` and are terminated with `*/`.** They are text for the reader; the compiler ignores them.
- **`#include <stdio.h>`** brings in a **header file**, which **contains the information necessary to use the library, such as function declarations**. Without it the compiler has never heard of `printf`.
- **All C programmes have `main()` as the entry-point function.** Execution starts there, whatever order the functions are written in on the page.
- **The braces `{` and `}` describe the start and end of the function block** — i.e. they delimit the **function body**.
- The programme **contains just one statement: a function call to the standard library function `printf()`, which prints a character string to standard output (usually the screen).**
- `return 0;` hands a value back to whatever started the programme — `int` before `main` is the **return type**.

## Escape sequences

| Escape sequence | Meaning | | Escape sequence | Meaning |
|---|---|---|---|---|
| `\'` | Single quote | | `\f` | Form feed |
| `\"` | Double quote | | `\n` | Newline |
| `\\` | Backslash | | `\r` | Carriage return |
| `\0` | Null | | `\t` | Horizontal tab |
| `\a` | Bell | | `\v` | Vertical tab |
| `\b` | Backspace | | | |

The one that costs marks: **a backslash inside a string always starts an escape.** `printf("C:\temp")` prints `C:` then a **tab** then `emp`, because `\t` was read as an escape. To print a literal backslash you must write `\\`.

## Functions in code: declaration, definition, call

```c
#include <stdio.h>

int max(int a, int b);            /* DECLARATION: name, return type, parameters. No body. */

int main(void)
{
    int m = max(4, 7);            /* CALL: 4 and 7 are the ARGUMENTS */
    printf("%d\n", m);            /* prints 7 */
    return 0;
}

int max(int a, int b)             /* function HEADER  ── the DEFINITION begins */
{                                 /* ┐                                          */
    if (a > b) return a;          /* │ function BODY                            */
    return b;                     /* │                                          */
}                                 /* ┘                                          */
```

- **Return type** `int`; **function name** `max`; **parameters** `int a, int b`; **body** in braces. Header + body = **definition**.
- The **declaration** at the top is what lets `main` call `max` although `max` is defined further down: the declaration is for the **compiler**, the definition is for the **machine**.
- **Parameter vs argument.** `a` and `b` are **parameters** — placeholders written once, in the header. `4` and `7` are **arguments** — the actual values supplied at *this* call. A different call supplies different arguments to the same parameters.
- **Arguments bind to parameters by position, not by name or by meaning.** `bmi(1.75, 70)` on `double bmi(double mass, double height)` compiles silently and returns nonsense.

## Return values, and `void`

- The **return type is the data type of the value the function returns**. `return e;` does two things: it **supplies the value** and it **ends the function immediately** — nothing after it in that function runs, including the rest of a loop it sits inside.
- **`void` means the function returns no value at all.** A `void` function is called as a statement of its own; its call has no value, so `double t = tax(1000);` is invalid if `tax` is `void`.
- **Printing is not returning.** `printf` sends characters to the screen; `return` hands a value back to the caller. A function that prints and returns nothing gives the caller nothing to work with, and a function that returns without printing produces no visible output — the marker's favourite trap.

```c
double vat(double price)  { return price * 0.075; }   /* returns; prints nothing */
void   show(double price) { printf("%.2f\n", price); } /* prints; returns nothing */

double v = vat(1000);   /* v = 75.00                                    */
show(v);                /* screen shows 75.00                          */
double w = show(v);     /* ERROR: void has no value to assign           */
```

## Scope

**Scope** is the region of the programme in which a name is visible.

- A variable declared **inside a function body** (including a **parameter**) is **local**: it exists only while that call runs and is invisible to every other function. Two functions may therefore use `i`, `total`, `count` without colliding — which is what makes a function body genuinely private, i.e. functional abstraction enforced by the language.
- A variable declared **outside all functions** is **global**: visible to every function in the file, and it survives between calls.
- If a local has the same name as a global, the **local wins inside that function** (it *shadows* the global) and the global is untouched.
- **Parameters are local copies.** Assigning to a parameter changes the copy, not the caller's variable. This is why `void swap(int a, int b)` cannot swap anything.

```c
int total = 0;                     /* global */

int add(int a, int b)
{
    int total;                     /* LOCAL total — shadows the global inside add */
    total = a + b;
    return total;
}

int main(void)
{
    int r = add(3, 5);             /* r = 8; the GLOBAL total is still 0 */
    total = total + 1;             /* global total = 1                   */
    printf("%d %d\n", r, total);   /* prints: 8 1                        */
    return 0;
}
```

## Worked example: decomposing a stated task

**Task.** Read three prices, print each one with 7.5% VAT added, then print the VAT-inclusive total.

*Bad first draft* — the VAT formula is written four times:

```
READ p1, p2, p3
PRINT p1 + p1 * 0.075
PRINT p2 + p2 * 0.075
PRINT p3 + p3 * 0.075
PRINT (p1 + p1*0.075) + (p2 + p2*0.075) + (p3 + p3*0.075)
```

*Decomposed* — one function per specific task, each written once:

```c
double withVat(double price)                 /* one specific task: add VAT       */
{
    return price * 1.075;
}

double total3(double a, double b, double c)  /* one specific task: add three     */
{
    return a + b + c;
}

int main(void)
{
    double p1 = 200, p2 = 350, p3 = 450;
    double v1 = withVat(p1), v2 = withVat(p2), v3 = withVat(p3);
    printf("%.2f %.2f %.2f\n", v1, v2, v3);      /* 215.00 376.25 483.75 */
    printf("%.2f\n", total3(v1, v2, v3));        /* 1075.00              */
    return 0;
}
```

Arithmetic check: 200 × 1.075 = 215.00; 350 × 1.075 = 376.25; 450 × 1.075 = 483.75; sum = 1075.00, which is 1000 × 1.075. When the rate changes to 10%, exactly **one line** changes — this is the course's **"prevents the duplication of codes"** and **"change the implementation without breaking other parts of the code"** in one stroke. Note also what a caller of `withVat` knows: **the name, the input format (a `double`), the output format (a `double`)** — functional abstraction, and nothing else.

## Modules

```python
import special_functions                     # the whole module is available
m = special_functions.max(4, 7)

from special_functions import max            # only 'max' is brought in by name
m = max(4, 7)
```

A **module** is a file that **can contain various functions and classes**; a **function** is a group of statements performing one task. Same idea, different scale: a function call names one task inside a file, an import names a whole file's worth of tasks inside a project. `import special_functions` makes the module available (every function in it is reachable through the module's name); `from special_functions import max` **explicitly specifies** one function, and **only that function** can then be used. In C the same job is done by `#include`, which is why the deck presents header files under *abstraction*: in both cases you use somebody else's function knowing only its name and its input and output formats.

## Commonly confused

| Pair | The distinction |
|---|---|
| **Data vs functional abstraction** | Data abstraction hides **the data of an object**; functional abstraction hides **the implementation of the methods**. Test: what does the outsider still get? If they get *permitted access to values*, it is data abstraction; if they get *a name plus input and output formats*, it is functional. |
| **Abstraction vs "the code is secret"** | Abstraction hides **internal details from other programmes**, not source code from people. A header file is readable text and still an abstraction mechanism — what it withholds is the **implementation**, not the file. |
| **Declaration vs definition** | The **declaration** tells the **compiler** the name, return type and parameters and has **no body** (it ends in a semicolon). The **definition** provides **the actual body** and consists of **header + body**. One definition, as many declarations as you like. |
| **Function header vs function body** | Both are parts of the **definition**. The **header** is the line `int max(int a, int b)` — return type, name, parameters. The **body** is what sits **between the braces**. A common wrong answer calls the header "the declaration"; the declaration is a separate statement elsewhere. |
| **Parameter vs argument** | The **parameter** is the **placeholder** in the header, written once. The **argument** is the **actual value passed at the call**, different on each call. "When a function is invoked, a value is passed to the parameter" — the value is the argument. |
| **Returning vs printing** | `return` hands a value **back to the caller**, which can store or reuse it; `printf` puts characters **on the screen**, which nothing can reuse. A function can do either, both, or neither, and doing one never implies the other. |
| **`void` vs returning 0** | **`void`** means there is **no value at all** to return, so the call cannot appear on the right of an `=`. **`return 0;`** returns the number 0, which is a perfectly good value. "It returned nothing" and "it returned zero" are different states. |
| **Local vs global** | A **local** (including a parameter) lives inside one function call and is invisible elsewhere; a **global** is declared outside all functions and is visible everywhere. If both exist with one name, the **local shadows the global inside that function only**, and assignments there do not touch the global. |
| **Passing a value vs sharing a variable** | A parameter receives a **copy**. Changing the parameter inside the function changes the copy; the caller's variable is unaffected. This is why a `void swap(int a, int b)` leaves the caller's two variables exactly as they were. |
| **Function vs module** | Same idea, **different scale**. A function is **a group of statements that perform a task**; a module is used **on a much larger scale** because it **can contain various functions and classes**. You *call* a function; you *import* a module. |
| **`import m` vs `from m import f`** | `import m` makes the **module** available, so its functions are reached through it (`m.f(...)`). `from m import f` **explicitly specifies** `f`, brings that name in directly (`f(...)`) — and only that name. |

---

*Note on the source: both decks extract with their code missing. The "Implementing abstraction: access specifiers" example slide, all three "A hello world program" slides and all three "Function definition" slides carry their listings and syntax diagrams **inside slide images**, so the extracted text gives only the prose around them — the definitions of the four parts of a function, the `public`/`private` example and the hello-world programme itself are named but not shown. Every code listing above is the standard 100-level treatment of exactly those named objectives, written in C as the decks and their further reading (Kernighan & Ritchie) specify, with the module examples in the deck's own `import` / `from … import` form. Two other gaps: the Functions deck lists the objective "**describe unions and relate them to functions**" but no union appears anywhere in it, and the slide "Calling a function" asks "What does this mean?" and then answers only in an image. **Scope**, **argument** (as against parameter) and **pass-by-value** are likewise not named in the extracted text; they are supplied here because the examinable skill — reading a call and saying what it returns — cannot be done without them. The extractor also drops ligatures, so the source reads "dierent" for "different", "speciﬁc"/"specific", and "University of Noingham" for Nottingham.*
