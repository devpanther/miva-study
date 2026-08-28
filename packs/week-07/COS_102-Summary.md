# COS_102 — Week 7 Summary

*Introduction to Problem Solving · Week 7 (19–25 Oct 2026) · Topics: Data Types, Variables and Operators; Programme Objects (classes, structures and unions)*

## The 8 most examinable things this week

1. **The definitions, word for word.** A **programme is a series of instructions that causes a computer or a microcontroller to perform a particular task**; it **also contains data and various memory addresses in which the instructions work**. A **data type is used for specifying the type of a variable; data types determine the type and size of the data associated with variables.** An **operator is a symbol that tells the compiler to perform specific mathematical or logical functions.** The **three basic types in C are characters, integers and floating-point numbers.**
2. **Variable definition always includes "data type" followed by "variable name"** — `int count;`, `float average;`, `char grade;`. And the slide's own question: **a variable definition is also a declaration, but not all variable declarations are definitions.** A **declaration** announces a name and its type; a **definition** additionally **reserves the storage**. `extern int total;` declares and does not define. Initialisation is a third, separate thing — `int x;` is a definition with no initialisation.
3. **Variable names are not stored inside the computer memory; the compiler replaces them with memory location addresses.** The name is a compile-time convenience for the programmer; at run time there is only an address and the bytes at it. Corollary: renaming a variable consistently through the source cannot change what the compiled program does.
4. **The six operator categories the course lists:** arithmetic, relational, logical, bitwise, assignment, misc. Know one example and the *result type* of each: arithmetic yields a number, relational and logical yield **1 or 0**, bitwise yields a number built bit by bit, assignment **stores and yields the stored value**, misc is the leftovers (`sizeof`, `&`, `*`, `?:`, comma, cast).
5. **Precedence and associativity.** Highest to lowest for the operators this course uses: **unary (`!` `~` `-` `++` `--` cast `sizeof`) → `* / %` → `+ -` → `<< >>` → `< <= > >=` → `== !=` → `&` → `^` → `|` → `&&` → `||` → `?:` → `= += -= …` → `,`**. Everything from `*` down to `||` associates **left to right**; the unary operators, `?:` and every assignment associate **right to left**.
6. **Integer division truncates.** `7 / 2` is **3**, not 3.5 and not 4 — because both operands are `int`, so the operation performed is integer division and the fractional part is thrown away (truncated **towards zero**: `-7 / 2` is `-3`). `7 % 2` is **1**. `%` requires integer operands. The type of the *result* is decided by the *operands*, never by what you assign it to.
7. **Real-world objects have two main characteristics: state and behaviour.** In a programme, **the state of an object is stored in variables and the behaviour of objects is described by methods**, and **every object has its own variables and methods**. **Only the methods of a particular object have access to the variables (the state) of that object**, and **different objects can only interact with each other through their own individual methods** — that is information hiding, controlled by access specifiers (`public`, `private`).
8. **Structure vs union vs class.** A **structure** is *a user-defined data type that can be used to group items of possibly different types into a single type* (`struct` keyword; members reached with the **dot syntax**). A **union** is *defined in the same way*, except **all of its members start at the same location in memory**, so **a union variable can represent the value of only one of its members at a time**. A **class** is like a structure but **in addition to variables it also has methods or functions**.

## Data types

| Type | Typical size | Holds | Literal | `printf` |
|---|---|---|---|---|
| `char` | **1 byte** | one character *as a small integer code* — `'A'` is 65 | `'A'`, `'7'`, `'\n'` | `%c` (as a character), `%d` (as its code) |
| `int` | **4 bytes** | a whole number, exactly, −2 147 483 648 … 2 147 483 647 | `42`, `-7`, `0` | `%d` |
| `float` | **4 bytes** | an *approximation* of a real number, ≈ 6–7 significant digits | `3.5f`, `0.075f` | `%f` |
| `double` | **8 bytes** | the same, ≈ 15–16 significant digits | `3.5`, `1e-3` | `%f` (`%lf` in `scanf`) |
| `void` | — | "no type" — a function returning nothing, or an untyped pointer | — | — |

Modifiers change the range, not the kind: `short`, `long`, `long long`, `signed`, `unsigned`. `unsigned char` is 0…255; `signed char` is −128…127. The C standard fixes only **minimum** sizes; the sizes above are what you get on an ordinary 32- or 64-bit machine, and `sizeof(x)` is how you ask.

**Why the type matters at all.** The same four bytes in memory are *just 32 bits*. The type is the only thing that says how to read them: as a two's-complement integer, or as an IEEE-754 sign/exponent/mantissa float. So the type fixes (i) **how many bytes are reserved**, (ii) **how the bit pattern is interpreted**, (iii) **which operations are legal** (`%` on two `int`s, never on a `float`), and (iv) **what the machine instruction actually does** — integer division and floating-point division are different instructions.

## Variables

**Definition:** `data type` then `variable name`, then optionally `= value`, then `;`

```c
int    count;                /* definition, uninitialised — the bytes hold rubbish */
float  average = 0.0f;       /* definition with initialisation                     */
char   grade   = 'A';        /* single quotes: one character                       */
int    a = 1, b = 2, c;      /* three definitions on one line                      */
extern int total;            /* a DECLARATION that is not a definition             */
```

**Rules for a legal name in C:** letters, digits and the underscore only; **must not begin with a digit**; **no spaces, no hyphens, no other punctuation**; **must not be a keyword** (`int`, `float`, `for`, `return`, `struct`, `union`, …); **case-sensitive**, so `Total`, `total` and `TOTAL` are three different variables. Choose the type "according to your programme logic and need" — the slide's own instruction — and **define before use**.

**Problems as data.** The course's example: *to find the average of the first five multiples of 9, what are the variables?* The multiples themselves (or one variable reused, plus a running **sum**), the **count** of them, and the **average**. Worked:

```c
int   sum = 9 + 18 + 27 + 36 + 45;   /* 135 */
int   count = 5;
float average = sum / count;          /* 135 / 5 = 27 exactly -> 27.000000 */
```

Here integer division happens to be exact, which is *precisely why the bug hides*. Change it to the first **four** multiples: `sum = 90`, `count = 4`, and `sum / count` is **22**, not 22.5, because the division is done in `int` and the result is only widened to `float` afterwards. The fix is to make one operand floating **before** the division: `(float) sum / count`, or `sum / (float) count`, or `sum / 4.0`. `(float)(sum / count)` does **not** work — the damage is already done inside the brackets.

## Operators

| Category | Operators | Result |
|---|---|---|
| **Arithmetic** | `+` `-` `*` `/` `%` `++` `--` | a number, of the wider of the two operand types |
| **Relational** | `==` `!=` `>` `<` `>=` `<=` | `int` **1** (true) or **0** (false) |
| **Logical** | `&&` `\|\|` `!` | `int` 1 or 0; treats any non-zero operand as true |
| **Bitwise** | `&` `\|` `^` `~` `<<` `>>` | a number built bit by bit from the operands |
| **Assignment** | `=` `+=` `-=` `*=` `/=` `%=` `&=` `^=` `\|=` `<<=` `>>=` | stores into the left operand and yields the stored value |
| **Misc** | `sizeof` `&` (address of) `*` (dereference) `?:` `,` `(type)` cast | varies |

- **`a += b` is exactly `a = a + b`**; `a++` and `++a` both add 1, but `a++` yields the value **before** the increment and `++a` the value **after**.
- **Short-circuit.** `&&` evaluates its right operand only if the left is true; `||` only if the left is false. `&` and `|` always evaluate both. This is the whole difference between `&&` and `&` in practice, on top of logical-vs-bit-by-bit.
- **Bitwise, worked.** With `a = 60` (`0011 1100`) and `b = 13` (`0000 1101`): `a & b` = `0000 1100` = **12**; `a | b` = `0011 1101` = **61**; `a ^ b` = `0011 0001` = **49**; `~a` = **−61**; `a << 2` = **240** (each left shift doubles); `a >> 2` = **15**.
- **`sizeof` is an operator, not a function** — `sizeof(int)` is 4, `sizeof x` is legal without brackets on a variable.

**Precedence worked end to end.** `20 - 6 / 2 * 3`
`/` and `*` sit at the same level and associate **left to right**, so: `6 / 2` = 3 → `3 * 3` = 9 → `20 - 9` = **11**. Not 21 (that is straight left-to-right, ignoring precedence), not 19 (that is `6 / (2 * 3)`, i.e. believing `*` outranks `/`), not 51 (that is `(20 - 3) * 3`, doing the subtraction before the multiplication).

**Precedence across categories.** `a + b * c > a * b + c && !(a - b == c)` with `a = 5, b = 2, c = 3`: arithmetic first — `5 + 6` = 11 and `10 + 3` = 13; then the relational `11 > 13` = **0**; then `&&` sees a false left operand and **short-circuits**, so `!(a - b == c)` is never evaluated at all; the whole expression is **0**.

**Two precedence traps.** `=` is nearly the lowest and is **right-associative**, so `a = b = 0` means `a = (b = 0)` and works, while `a + b = c` does not — the left of `=` must be somewhere you can store. And relational operators are *below* arithmetic but *chain left to right*, so `x < y < z` means `(x < y) < z`, which compares **0 or 1** with `z` and is almost never what was meant.

## Programme objects

| | Real world | Programme |
|---|---|---|
| **State** | a dog's name, colour, breed, whether it is hungry | **variables** |
| **Behaviour** | barking, fetching, wagging its tail | **methods** |

An object can be **part of another object** — real-world objects vary in complexity and nest. This is what motivates **object-oriented programming (OOP), where programmes are based on objects rather than on separate entities**.

```c
struct Dog {                 /* variables only, each with its own storage */
    char name[20];
    char breed[20];
    char colour[20];
};                           /* note the semicolon */

union Dog {                  /* same members, ONE shared block of storage */
    char name[20];
    char breed[20];
    char colour[20];
};

class Dog {                  /* variables AND methods */
    char name[20];
    char breed[20];
    char colour[20];
    char[] get_name() { return name; }
};
```

Access and modify a member with the **dot syntax**: `struct Dog d; strcpy(d.name, "Rex"); printf("%s", d.breed);`

**Structure vs union, the part that is examined.** Both group *items of possibly different types into a single type* — that phrase does **not** separate them. What separates them is memory: in a `struct` every member has **its own** location, so `sizeof(struct Dog)` here is **60** and all three strings can hold values at once; in a `union` **all members start at the same location**, so `sizeof(union Dog)` is **20**, writing `breed` overwrites `name`, and the variable **can represent the value of only one member at a time**.

**Why programme objects.** The course's four reasons: objects are **not dependent on each other, so each can be independently created and maintained**; an object **can be used in various parts of our programme** (reuse); a misbehaving object **can easily be removed and replaced without creating problems for the rest of the code** (*"similar to how a car works"*); and because **the state of an object can only be accessed by the object's methods**, we get **information hiding** — *we can control the amount of information we share about our objects to the outside world*. **Data encapsulation** is the name for hiding the implementation details so the user interacts only through a set of **public** methods while the internals stay **private**. The benefits the week's summary sheet lists are **modularity, code reusability and the independence of objects**.

## Commonly confused

| Pair | The distinction |
|---|---|
| **Declaration vs definition** | A **declaration** tells the compiler a name and its type; a **definition** also **reserves storage**. Every definition is a declaration; `extern int total;` is a declaration that is not one. Test: *does this line cause bytes to be set aside?* |
| **Definition vs initialisation** | `int x;` **defines** x — the storage exists — but leaves the bytes holding whatever was there before. `int x = 0;` also **initialises**. "Uninitialised" does not mean "zero" and does not mean "does not exist". |
| **`int` vs `float`** | `int` is **exact within a range**; `float` is an **approximation with a fixed number of significant digits** and a much wider range. `0.1` cannot be stored exactly in a `float`. Test: *am I counting, or measuring?* Count with `int`, measure with `float`/`double`. |
| **`'5'` vs `5` vs `"5"`** | `'5'` is a **char**, whose numeric value is **53** (its ASCII code). `5` is an **int**. `"5"` is a **string** — an array of two chars, `'5'` and the terminating `'\0'`. To turn the character into the number, subtract `'0'`: `'7' - '0'` is **7**, while `'7'` on its own is **55**. |
| **`=` vs `==`** | `=` **assigns** and yields what it stored; `==` **compares** and yields 1 or 0. `if (n = 0)` sets n to 0 and is therefore always **false**; `if (n == 0)` is the test. The compiler accepts both, which is why this one survives. |
| **`&&` vs `&`, `\|\|` vs `\|`** | `&&` and `\|\|` are **logical**: whole truth values in, 1 or 0 out, right operand skipped when the answer is already known. `&` and `\|` are **bitwise**: they combine the operands **bit by bit** and always evaluate both. `1 & 2` is **0** while `1 && 2` is **1**. |
| **Precedence vs associativity** | **Precedence** decides between operators of *different* levels (`*` before `+`). **Associativity** decides between operators of the *same* level (`20 - 6 - 2` is `(20 - 6) - 2` = 12, left to right). Precedence alone cannot settle `6 / 2 * 3`; associativity can. |
| **Integer division vs real division** | The **operand types** choose the operation, and the assignment target has no say. `7 / 2` is 3 whether you store it in an `int`, a `float` or a `double`. Cast **before** the division, never after. |
| **Structure vs union** | Same syntax, same "possibly different types" wording. **Struct: every member has its own storage, all live at once.** **Union: all members start at the same address, one at a time, size = size of the largest member.** |
| **Structure vs class** | A structure holds **variables**; a class holds **variables and methods (functions)**, plus **access specifiers** to control who may reach them. The dog example: struct gives you `name`, `breed`, `colour`; the class also gives you `get_name()`. |
| **Variable vs method** | The **variable** holds the **state**; the **method** describes the **behaviour** and is the only route to that state. A function that is not attached to an object is not a method of it and cannot reach its variables. |
| **Variable name vs memory address** | The **name** exists only in the source; the **compiler replaces it with a memory location address**. Long names cost nothing at run time; the address, not the name, is what the running program uses. |

---

*Note on the source: the Data Types deck extracts as slide titles only from "Data types" onward — the three-basic-types table, the syntax comparison across C, C++, Rust, Java and Python, the variable-definition examples and every "Examples of … operators" slide sit inside slide images the text extractor cannot read, so the extracted text names the six operator categories and nothing else about them. The Programme Objects deck loses its struct, union and class code slides the same way; the week's summary sheet supplies the `Dog` struct, union and class fragments reproduced above, plus data encapsulation and the `public`/`private` access specifiers, which the lecture decks never name. Everything else above — the type sizes, the naming rules, the operator tables, the precedence order and the worked evaluations — is the standard 100-level C treatment of exactly the named objectives ("apply data types, variables and operators to problem solving"; "design structures, unions, and classes"). The extractor also drops ligatures, so the source reads "dierent" for "different", "deﬁned" for "defined" and "Noingham" for "Nottingham".*
