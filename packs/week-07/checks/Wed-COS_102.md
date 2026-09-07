# Wednesday — COS_102 nightly check

*Data types, variables and programme objects, as concepts, exactly as the two decks give them.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** Evaluate the C expression `30 - 8 / 4 * 2`, where every value is an int.
A. 10
B. 29
C. 26
D. 56

**2.** `int a = 17 / 5, b = 17 % 5;` What does `printf("%d %d", a, b);` print?
A. 3 2
B. 3.4 2
C. 4 2
D. 2 3

**3.** Which of these is a legal variable name in C?
A. `2total`
B. `total-2`
C. `float`
D. `total_2`

**4.** `int a = 4, b = 7;` What is the value of `(a < b) + (a == b) + (b > 2)`?
A. 1
B. 2
C. 3
D. 0

**5.** What does `printf("%d %d", 1 && 2, 1 & 2);` print?
A. 1 1
B. 0 0
C. 2 0
D. 1 0

**6.** `int a = 5; int b = a++ + 2;` What are a and b after these two lines?
A. a = 6, b = 7
B. a = 6, b = 8
C. a = 5, b = 7
D. a = 5, b = 8

**7.** `struct R { char name[16]; double value; };` and `union U { char name[16]; double value; };` With char 1 byte, double 8 bytes and no padding, what are `sizeof(struct R)` and `sizeof(union U)`?
A. 24 and 24
B. 24 and 16
C. 16 and 16
D. 24 and 8

**8.** A BankAccount object has `owner`, `balance`, `deposit()` and `withdraw()`. Which two make up its state?
A. deposit(), withdraw()
B. balance, deposit()
C. owner, balance
D. owner, withdraw()

**9. (show your working)** Trace this fragment and give the values of a, b and c after each line. Show your working.

```c
int a = 3, b = 10, c;
c = a * b + 2;
b -= a;
a = c / b;
c = c - a * b;
```

**10. (show your working)** a = 25 and b = 14. Write both as 8-bit binary and compute `a & b`, `a | b` and `a ^ b`, giving each result in decimal. Show your working.

**11. (show your working)** Classify each of these operators into one of the six categories (arithmetic, relational, logical, bitwise, assignment, misc): `%`, `>=`, `&&`, `<<`, `+=`, `sizeof`. Then state the value of `9 % 4 >= 1`.

**12. (show your working)** `int total;` and `extern int total;` both name the same variable and the same type. Explain why the first is a definition and the second is only a declaration, and say what a definition does that a declaration does not.

---

## Answers

**1. C** — *Operator precedence and associativity.* `/` and `*` sit on the same level and associate left to right, and both outrank `-`: 8 / 4 = 2, then 2 * 2 = 4, then 30 − 4 = 26.

10 works strictly left to right, (30 − 8) / 4 * 2 with integer division; 29 does the multiplication first, 8 / (4 * 2) = 1; 56 does the subtraction first, (30 − 2) * 2.

**2. A** — *Integer division and remainder.* Both operands are int, so `/` is integer division and the fractional part is thrown away: 17 / 5 = 3. `%` gives what is left over: 17 − 3 × 5 = 2. Output: 3 2.

3.4 2 performs real division although both operands are int; 4 2 rounds the quotient instead of truncating it; 2 3 swaps the quotient and the remainder.

**3. D** — *Rules for a legal identifier.* A name may use letters, digits and the underscore, must not begin with a digit, and must not be a keyword. `total_2` satisfies all three.

`2total` begins with a digit; `total-2` contains a hyphen, which C reads as the subtraction total − 2; `float` is a keyword and cannot be a name.

**4. B** — *Relational operators yield 1 or 0.* Each comparison yields an int, 1 for true and 0 for false: a < b is 1, a == b is 0, b > 2 is 1, and 1 + 0 + 1 = 2.

3 counts a == b as true; 1 stops after the first comparison; 0 assumes a comparison has no numeric value and so cannot be added.

**5. D** — *Logical versus bitwise operators.* `&&` is logical: both operands are non-zero, so the result is 1. `&` is bitwise: 1 is 01 and 2 is 10, and no bit is set in both, so the result is 0. Output: 1 0.

1 1 treats `&` as if it were logical; 0 0 treats `&&` as if it were bitwise; 2 0 assumes `&&` returns one of its operands rather than 1.

**6. A** — *Post-increment yields the old value.* `a++` yields the value a held before the increment, 5, and then makes a 6. So b = 5 + 2 = 7 and a = 6.

a = 6, b = 8 uses the value after the increment, which is what `++a` would do; a = 5, b = 7 forgets that `a++` changes a; a = 5, b = 8 makes both mistakes at once.

**7. B** — *Size of a structure versus a union.* In a struct every member has its own storage, so the size is the sum: 16 + 8 = 24. In a union all members start at the same location, so the size is that of the largest member: the 16-byte array. Answer: 24 and 16.

24 and 24 gives the union separate storage for each member; 16 and 16 drops the double from the struct; 24 and 8 takes the double as the union's largest member, but the 16-byte array is bigger.

**8. C** — *State versus behaviour of an object.* The state of an object is what it holds, stored in variables; its behaviour is what it does, described by methods. `owner` and `balance` are values the account holds, so they are its state. `deposit()` and `withdraw()` are actions, so they are behaviour.

The other pairings mix a variable with a method or list only methods.

**9.** *Tracing a sequence of assignments.* Line 2: c = 3 × 10 + 2 = 32 (a = 3, b = 10, c = 32). Line 3: b = 10 − 3 = 7 (a = 3, b = 7, c = 32). Line 4: a = 32 / 7, integer division, so 4 (a = 4, b = 7, c = 32). Line 5: c = 32 − 4 × 7 = 32 − 28 = 4 (a = 4, b = 7, c = 4).

Final answer: a = 4, b = 7, c = 4. A correct answer shows the value after every line, treats `b -= a` as b = b − a, and truncates 32 / 7 to 4 rather than 4.57. a = 4.57 or c = 0 (from 32 − 4.57 × 7) is wrong.

**10.** *Bitwise AND, OR and XOR.* 25 = 0001 1001 and 14 = 0000 1110. AND keeps a bit only where both are 1: 0000 1000 = 8. OR keeps a bit where either is 1: 0001 1111 = 31. XOR keeps a bit where exactly one is 1: 0001 0111 = 23.

Final answer: a & b = 8, a | b = 31, a ^ b = 23. A correct answer shows both binary strings and the bit-by-bit result for each operator. Treating `&` and `|` as logical (giving 1 and 1) is wrong.

**11.** *Operator categories.* `%` is arithmetic (remainder); `>=` is relational; `&&` is logical; `<<` is bitwise (left shift); `+=` is assignment; `sizeof` is misc. For the expression, `%` outranks `>=`: 9 % 4 = 1, and 1 >= 1 is true, so the value is 1.

A correct answer names all six categories correctly and gives 1 (also accepted: true). Calling `<<` arithmetic or `sizeof` a function is wrong; the value 0 comes from grouping as 9 % (4 >= 1) = 9 % 1 = 0, which ignores precedence.

**12.** *Declaration versus definition.* A declaration tells the compiler a name and its type. A definition does that and also reserves the storage: bytes are set aside for the variable. `int total;` sets aside an int's worth of memory, so it defines and, in doing so, also declares. `extern int total;` says the variable exists and is an int but that its storage is reserved elsewhere, so it declares without defining.

A correct answer says every definition is also a declaration, that the difference is reserving storage (memory), and that `extern` marks a declaration that does not reserve any. Saying the difference is initialisation is wrong: `int total;` defines without initialising.
