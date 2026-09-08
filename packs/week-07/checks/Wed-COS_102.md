# Wednesday — COS_102 nightly check

*Data types, variables and programme objects, as concepts, exactly as the two decks give them.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** Trace this fragment and give the values of a, b and c after the last line.

```c
int a = 3, b = 10, c;
c = a * b + 2;
b -= a;
a = c / b;
c = c - a * b;
```
A. a = 5, b = 7, c = 1
B. a = 4, b = 7, c = 4
C. a = 3, b = 7, c = 11
D. a = 4, b = 7, c = 0

**10.** a = 25 and b = 14, both held in 8 bits. What are `a & b`, `a | b` and `a ^ b` in decimal?
A. 8, 31, 23
B. 8, 23, 31
C. 8, 29, 21
D. 1, 1, 0

**11.** Classify `%`, `>=`, `&&`, `<<`, `+=` and `sizeof` into the six operator categories, in that order.
A. arithmetic, logical, logical, bitwise, assignment, misc
B. arithmetic, relational, bitwise, bitwise, assignment, misc
C. arithmetic, relational, logical, arithmetic, assignment, misc
D. arithmetic, relational, logical, bitwise, assignment, misc

**12.** `int total;` and `extern int total;` name the same variable and the same type. What does the first do that the second does not?
A. It gives the variable its type.
B. It gives the variable a starting value.
C. It reserves storage for the variable.
D. It makes the name visible to other files.

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

**9. B** — *Tracing a sequence of assignments.* c = 3 × 10 + 2 = 32. Then `b -= a` means b = 10 − 3 = 7. Then a = 32 / 7 in int arithmetic, which truncates to 4. Finally c = 32 − 4 × 7 = 4, so a = 4, b = 7, c = 4.

a = 5, b = 7, c = 1 reads line 2 as a × (b + 2) = 36; a = 3, b = 7, c = 11 divides before `b -= a` runs, 32 / 10 = 3; a = 4, b = 7, c = 0 keeps 32 / 7 as 4.57 and computes 32 − 4.57 × 7.

**10. A** — *Bitwise AND, OR and XOR.* 25 = 0001 1001 and 14 = 0000 1110. AND keeps a bit only where both have 1: 0000 1000 = 8. OR keeps a bit where either has 1: 0001 1111 = 31. XOR keeps a bit where exactly one has 1: 0001 0111 = 23.

8, 23, 31 swaps the OR and XOR results; 8, 29, 21 comes from writing 14 as 0000 1100; 1, 1, 0 treats the three as the logical operators &&, || and !=.

**11. D** — *Operator categories.* `%` gives a remainder, so arithmetic; `>=` compares two values, so relational; `&&` combines truth values, so logical; `<<` shifts bits, so bitwise; `+=` stores into its left operand, so assignment; `sizeof` fits none of the five and sits with the misc operators.

Each wrong option gets exactly one of them wrong: `>=` called logical, `&&` called bitwise, or `<<` called arithmetic because shifting left doubles a number.

**12. C** — *Declaration versus definition.* A declaration tells the compiler a name and its type. A definition does that and also reserves the storage, which is why every definition is a declaration but not every declaration is a definition. `int total;` sets aside an int's worth of memory; `extern int total;` says the storage is reserved elsewhere.

Both lines give the type, so that is not the difference; neither line initialises anything; and `extern` is the line that concerns other files, not the definition.
