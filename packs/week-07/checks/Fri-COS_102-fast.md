# Friday — COS_102 fast-hour check

*Applied work on this week's material.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

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

**9. (show your working)** Write a `struct Book` with members for a title (up to 40 characters), an author (up to 40 characters), the number of copies (a whole number) and the price (a decimal). Then define a variable `b` of that type and write two statements that set copies to 3 and price to 12.5 using the dot syntax.

**10. (show your working)** Write a class `Account` whose balance cannot be set directly from outside it: a private `balance`, a public `deposit(amount)` that adds to it, and a public `get_balance()` that returns it. Then say what happens to the line `a.balance = 1000;` written outside the class for an Account `a`.

**11. (show your working)** A program must find the average of the first five multiples of 9. List the variables the problem needs, write a C definition for each (type then name, with its starting value where there is one), and write the one statement that computes the average so that the decimal part is not lost. State the value printed with `%.1f`.

**12. (show your working)** A `struct Dog` and a `union Dog` are both written with the same three members `char name[20]`, `char breed[20]` and `char colour[20]`. Explain, in terms of where the members sit in memory, why setting `breed` destroys `name` in one of them and not the other, and what it means that a union represents only one member at a time.

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

**9.** *Writing a structure and setting its members.* ```c
struct Book {
    char title[41];
    char author[41];
    int copies;
    float price;
};
struct Book b;
b.copies = 3;
b.price = 12.5;
```

A correct answer uses the `struct` keyword, a char array for each string, `int` for copies, `float` or `double` for price, a semicolon after the closing brace, and the dot syntax `b.copies` and `b.price`. Arrays of size 40 or 41 are both accepted. `float copies` for a count, `b->copies`, `Book.copies`, or a missing semicolon after the closing brace is wrong.

**10.** *Encapsulation with public and private.* ```
class Account {
private:
    double balance;
public:
    void deposit(double amount) { balance = balance + amount; }
    double get_balance() { return balance; }
};
```

`a.balance = 1000;` outside the class is rejected by the compiler, because `balance` is private and only the class's own methods may reach it; the only way in is `a.deposit(1000)`. A correct answer marks the variable private, the two methods public, has deposit add to balance and get_balance return it, and states that direct access from outside is refused (does not compile). Making balance public, or saying the line works, is wrong.

**11.** *Representing a problem as data.* The problem needs the sum of the multiples (or the multiples themselves), how many there are, and the result:

```c
int sum = 9 + 18 + 27 + 36 + 45;   /* 135 */
int count = 5;
float average = (float) sum / count;
```

Printed with `%.1f` this gives 27.0. A correct answer defines an int sum (or five int multiples), an int count, a float or double average, and casts one operand to float before the division (`(float) sum / count`, `sum / (float) count` or `sum / 5.0` are all accepted). `float average = sum / count;` happens to give 27.0 here because 135 / 5 is exact, but it loses the decimal part in general and is marked wrong; `(float)(sum / count)` is also wrong.

**12.** *Structure versus union in memory.* In the struct each member has its own location: name, breed and colour occupy three separate 20-byte blocks (60 bytes in all), so writing breed leaves name untouched and all three can hold values at once. In the union all members start at the same location: there is one 20-byte block and name, breed and colour are three names for it, so writing breed overwrites the bytes that held name.

'One member at a time' means the union's storage holds whichever member was written last; the others are not preserved, and the union does not record which member is current. A correct answer says the struct members have separate storage, the union members share one starting address, and that this is why the union's earlier member is lost. Saying the union stores all three but hides two of them is wrong.
