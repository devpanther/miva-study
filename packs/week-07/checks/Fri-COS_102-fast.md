# Friday — COS_102 fast-hour check

*Applied work on this week's material.*
*12 questions, straight after the hour. Score out of 12.*

**1.** ```c
int sum = 90, count = 4;
float avg = sum / count;
```
This stores 22.0 in avg. Which replacement for the second line stores 22.5?
A. `float avg = (float)(sum / count);`
B. `float avg = (float) sum / count;`
C. `float avg = sum / count * 1.0;`
D. `double avg = sum / count;`

**2.** `struct Point { int x; int y; };` and `struct Point p;` have been written. Which line sets the x member of p to 4?
A. `x.p = 4;`
B. `Point.x = 4;`
C. `p(x) = 4;`
D. `p.x = 4;`

**3.** ```c
union U { int a; int b; };
union U u;
u.a = 3;
u.b = 5;
printf("%d %d", u.a, u.b);
```
What is printed?
A. 5 5
B. 3 5
C. 3 3
D. 8 8

**4.** `int x = 7; x += 5; x *= 3; x %= 7;` What is x afterwards?
A. 36
B. 7
C. 1
D. 5

**5.** ```c
struct P { int x; int y; };
struct P a = {1, 2};
struct P b = a;
b.x = 9;
printf("%d %d", a.x, b.x);
```
What is printed?
A. 9 9
B. 1 9
C. 1 1
D. 9 1

**6.** `char c = '7';` What does `printf("%d %d", c, c - '0');` print?
A. 55 7
B. 7 7
C. 7 0
D. 55 55

**7.** `int a, b; a = (b = 4) + 2;` What are a and b afterwards?
A. a = 4, b = 4
B. a = 6, b = 6
C. a = 2, b = 4
D. a = 6, b = 4

**8.** A sensor reading is either a whole-number count or a floating-point voltage, never both at once, and it needs no methods. Which construct fits?
A. struct
B. class
C. union
D. array

**9.** Which fragment declares a `struct Book` with a title and an author of up to 40 characters, a whole-number copy count and a decimal price, then sets the copies of a variable `b` to 3?
A. `struct Book { char title[41]; char author[41]; int copies; float price; }; struct Book b; b.copies = 3;`
B. `struct Book { char title[41]; char author[41]; int copies; float price; } struct Book b; b.copies = 3;`
C. `struct Book { char title[41]; char author[41]; float copies; int price; }; struct Book b; b.copies = 3;`
D. `struct Book { char title[41]; char author[41]; int copies; float price; }; struct Book b; Book.copies = 3;`

**10.** A class `Account` has a private `balance` and public `deposit(amount)` and `get_balance()`. For an Account `a`, what happens to the line `a.balance = 1000;` written outside the class?
A. It compiles and sets balance to 1000.
B. The compiler rejects it, because balance is private.
C. It compiles and calls deposit(1000) instead.
D. It compiles, but get_balance() still returns the old balance.

**11.** A program must print the average of the first five multiples of 9. Which fragment prints the correct value?
A. `int sum = 0+9+18+27+36; printf("%.1f", (float) sum / 5);`
B. `int sum = 9+18+27+36+45; printf("%.1f", (float) sum / 4);`
C. `int sum = 9+18+27+36+45; printf("%.1f", (float) sum / 5);`
D. `int sum = 9*5; printf("%.1f", (float) sum / 5);`

**12.** A `struct Dog` and a `union Dog` are both written with the members `char name[20]`, `char breed[20]` and `char colour[20]`. Which statement about where those members sit in memory is correct?
A. Both give each member its own 20-byte block, but the union hides two of them.
B. The struct starts all three at the same address; the union stores them one after another.
C. The union gives each member its own block and adds a tag naming the member in use.
D. The struct gives each member its own 20-byte block; the union starts all three at the same address.

---

## Answers

**1. B** — *Casting before integer division.* The operand types decide the division. Casting `sum` to float before the `/` makes it real division: 90.0 / 4 = 22.5.

`(float)(sum / count)` divides in int first, giving 22, and only then converts; `sum / count * 1.0` also divides in int before the 1.0 arrives, 22 * 1.0 = 22.0; changing the variable to double changes where the result is stored, not how it is computed.

**2. D** — *Accessing a member with the dot syntax.* A member is reached by writing the variable, a dot, then the member name: `p.x = 4;`.

`x.p` puts the member before the variable; `Point.x` names the type rather than a variable, and no storage belongs to a type; `p(x)` is a function call, not member access.

**3. A** — *A union holds one member at a time.* All members of a union start at the same memory location. Writing 5 into b overwrites the bytes that held a, and since both are int, reading a now gives 5 too. Output: 5 5.

3 5 treats the union as a struct with separate storage; 3 3 has the overwrite going the wrong way, as if the first write won; 8 8 adds the two writes together.

**4. C** — *Compound assignment operators.* `a op= b` means a = a op b, applied in order: x = 7 + 5 = 12; x = 12 × 3 = 36; x = 36 % 7 = 1.

36 stops before the `%=`; 7 reads `x %= 7` backwards as 7 % 36; 5 applies the `*= 3` before the `+= 5`, giving (21 + 5) % 7.

**5. B** — *Copying a structure variable.* `struct P b = a;` copies every member into b's own storage, so a and b are two separate objects. Changing b.x to 9 leaves a.x at 1. Output: 1 9.

9 9 assumes a and b share one location, which is what a union would do; 1 1 forgets that the assignment to b.x happened; 9 1 puts the change on the wrong variable.

**6. A** — *Character codes versus digit values.* A char holds a character as a small integer code: '7' is 55 and '0' is 48. Printed with `%d`, c shows 55. Subtracting '0' gives 55 − 48 = 7, the digit's value. Output: 55 7.

7 7 treats '7' as the number 7; 7 0 also treats '0' as zero and so subtracts nothing; 55 55 forgets to subtract at all.

**7. D** — *Assignment yields the stored value.* An assignment stores into its left operand and yields the value stored. `(b = 4)` stores 4 in b and has the value 4, so a = 4 + 2 = 6, and b stays 4.

a = 4, b = 4 ignores the + 2; a = 6, b = 6 gives b the outer result as well; a = 2, b = 4 treats the inner assignment as having no value.

**8. C** — *Choosing between structure, union and class.* A union's members all start at the same location, so it represents only one member at a time and wastes no space on the other. That is exactly a value that is one thing or the other, never both.

A struct gives both members their own storage and lets them hold values at once, which is more than is needed; a class adds methods, which the reading does not need; an array holds several items of the same type.

**9. A** — *Writing a structure and setting its members.* Each member is written inside the braces as a type then a name: a char array holds a string, `int` a count and `float` a price. The closing brace of a structure needs a semicolon, and a member is reached as variable, dot, member name.

The second option drops that semicolon, so the compiler reads on into `struct Book b;` as part of the declaration; the third swaps the types of copies and price; the fourth names the type instead of the variable, and a type owns no storage.

**10. B** — *Encapsulation with public and private.* A private member may be reached only by the class's own methods, so a line outside the class that names `a.balance` is refused when the program is compiled. The way in is `a.deposit(1000)`, which is public and is the only route to the balance.

The other three all assume the line builds: private access is not silently redirected to a method, and it does not run and quietly fail; it never compiles at all.

**11. C** — *Representing a problem as data.* The first five multiples of 9 are 9, 18, 27, 36 and 45. They sum to 135 and there are five of them, so the average is 135 / 5 = 27.0.

The first option counts 0 as the first multiple and prints 18.0; the second divides by the number of plus signs and prints 33.8; the last takes 9 × 5 as the sum of the multiples and prints 9.0. All four cast before dividing, so the fault is in the data, not the division.

**12. D** — *Structure versus union in memory.* In a structure every member has its own storage, so name, breed and colour occupy three separate 20-byte blocks and writing one leaves the others untouched. In a union all members start at the same address and share one 20-byte block, so writing breed overwrites the bytes that held name.

A union does not keep the other members hidden away, it does not lay them out one after another, and it stores no tag saying which member is current; the programmer must track that.
