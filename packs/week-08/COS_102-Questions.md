# COS_102 — Week 8 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 9, not this week. Notes closed. 12 MCQ + 3 short answer, about 30 minutes.*

## Section A — Multiple choice (12)

**1.** Two teams each claim to have "abstracted" their code. Team A moved every function body into a separate file that callers never open. Team B published, for each function, its name and the format of its input and output, and told callers that nothing else about it may be relied on. Which team has implemented abstraction as the course defines it?

a) Team A, since abstraction is the hiding of internal details and Team A has actually put those details out of sight
b) Team B, since what abstraction hides is what a caller may depend on, not where the text of the code sits; Team A's callers can still break on a rewrite
c) Both equally, since hiding the file and hiding the interface are two descriptions of one and the same act of concealment
d) Neither, since abstraction is implemented with access specifiers and neither team has said anything about `public` or `private`

**2.** An object's data is exposed directly to every other programme in the system. On the course's account, which specific guarantee has been lost?

a) That the same lines of code are not written out in more than one place in the project
b) That the implementation of the object's methods can be replaced without breaking any caller
c) That no other programme can alter the object's data without obtaining the necessary permissions
d) That the object's functions can be used without knowing how any of them is implemented

**3.** A file contains `int max(int a, int b);` at the top, then `main`, which calls `max`, and then the full body of `max` at the bottom. Why does the compiler accept the call, given that it has not yet read the body?

a) Because the compiler reads the whole file first and only then checks the calls, so the order on the page never matters
b) Because the declaration has already told it the name, the return type and the parameters, which is everything needed to check a call — the body is needed to run the function, not to accept the call
c) Because `main` is the entry-point function and calls made from `main` are exempt from checking until run time
d) Because the semicolon at the end of the first line marks `max` as `public`, and a public function may be called from anywhere

**4.** Which pair of terms describes `int area(int w, int h)` and `{ return w * h; }` respectively?

a) Function header and function body — the two parts of a function definition
b) Function declaration and function definition, of which the second may be written separately
c) Function definition and function call, since the braces are where the work is actually performed
d) Function name and return type, the two things a declaration tells the compiler about

**5.** What is printed?

```c
int f(int n) { n = n * 2; return n + 1; }
int g(int n) { return f(n) + n; }

int main(void) { printf("%d\n", g(3)); return 0; }
```

a) `7`
b) `10`
c) `13`
d) `14`

**6.** A function's job is to work out a discount and make it available to the rest of the programme. Which header is right, and why?

a) `void discount(double price)`, because the function performs an action and a function that performs an action returns nothing
b) `void discount(double price)`, because it will use `printf` to put the discount on the screen, which is how a value is made available
c) `double discount(double price)`, because the caller needs the value itself, and only a return type other than `void` gives the call a value the caller can store
d) `double discount(void)`, because the price is already held by the programme and so does not need to be passed in again

**7.** What is printed?

```c
int x = 10;
void a(void) { x = x + 5; }
void b(void) { int x = 100; x = x + 5; }

int main(void) { a(); b(); printf("%d\n", x); return 0; }
```

a) `10`
b) `15`
c) `20`
d) `115`

**8.** What does `printf("a\\b\tc\n");` put on the screen?

a) `a\b`, then a tab, then `c`, and the cursor moves to a new line
b) `a`, then a backspace, then `b`, then a tab, then `c`, and a new line
c) the literal text `a\\b\tc\n`, with none of the backslashes interpreted
d) `a`, a tab, `b`, a tab, `c` — the doubled backslash producing a second tab

**9.** A programme prints a payslip for each of forty employees, and the same eleven-line block computing tax has been pasted forty times. The tax law changes. Which of this week's benefits has been forfeited, and what is the fix?

a) Readability: the file is long, and the fix is to add comments to each of the forty copies so the block can be found
b) Security: the tax rule is visible forty times over, and the fix is to mark those lines `private`
c) Scalability: the programme cannot handle a forty-first employee, and the fix is to make the employee list global
d) Avoiding duplication of code: a function is implemented once however many times it is used, so the block becomes one function called forty times and the law changes in one place

**10.** `double share(double part, double whole) { return part / whole * 100; }`. A caller who wants "50 out of 200 as a percentage" writes `share(200, 50)`. What happens?

a) It prints 25, since the compiler matches each argument to the parameter whose name fits its meaning
b) It prints 400, since arguments bind to parameters by position: `part` takes 200 and `whole` takes 50, and both being `double` nothing warns you
c) A compile error, since a part may not be larger than a whole and the parameter names say which is which
d) It prints 0.25, since the division happens correctly and only the multiplication by 100 is lost

**11.** After `from special_functions import max`, which of these works?

a) `max(4, 7)` only — `min` and the name `special_functions` have not been made available
b) `max(4, 7)` and `min(4, 7)`, since importing from a module brings that module's contents into scope
c) `special_functions.max(4, 7)` only, since a function must always be reached through the module that holds it
d) Both `max(4, 7)` and `special_functions.max(4, 7)`, since the module is loaded either way and both routes reach it

**12.** A team has one function `withVat(price)` used in nine places. The VAT rate changes. They edit one line, recompile, and every one of the nine call sites now behaves correctly without being touched. Which two facts about that function made this possible?

a) That it was declared `public`, and that its declaration sits in a header file
b) That it takes a parameter, and that the parameter is a copy rather than the caller's own variable
c) That the callers were given only its name and its input and output formats, so none of them referred to the body; and that the body exists once rather than nine times
d) That it returns a value rather than printing one, and that it is imported rather than included

## Section B — Short answer (3)

**13.** State the course's definition of abstraction and its two named types, saying what each type hides and what it still permits. Then give the two mechanisms the course names for implementing abstraction, and the four stated benefits. For **two** of those benefits, say which of the two types it follows from and why.

**14.** This programme compiles but does almost nothing it appears to do. Name **every** fault, say exactly what the programme prints as it stands, and repair it.

```c
#include <stdio.h>

int rate = 10;

void addTax(double amount, int rate)
{
    amount = amount + amount * rate / 100.0;
}

double net(double gross)
{
    printf("%.2f\n", gross - gross * rate / 100.0);
}

int main(void)
{
    double price = 200;
    addTax(price, 5);
    double n = net(price);
    printf("%.2f %d\n", price, rate);
    return 0;
}
```

**15.** A function and a module are described by the course as the same idea at different scales. Set that out fully: what each one is, how each is brought into use, and what a user of each is entitled to know. Then explain how a C **header file** and a Python **import** are performing the same job as each other, and why the course could have taught either of them in either lesson.

## Answers

**1. b — Team B.** *Concept: abstraction hides the implementation from callers, not the source text from readers.* Functional abstraction is defined by what the caller is given — **the method's name, the format of the input, and the format of the output** — and by the fact that **the implementation of the methods is not directly exposed**. Team B has named the interface, so nothing outside it can be depended on and the body may be rewritten freely. (a) is the standard misreading of "hiding" as physical concealment: Team A's callers still learned the bodies' behaviour from somewhere and may still be relying on it, so a rewrite can still break them; a header file is fully readable text and is nonetheless an abstraction mechanism. (c) collapses the two, when the whole point is that they come apart. (d) mistakes one **mechanism** for the concept; access specifiers are one way to implement abstraction, and header files are the other the course names.

**2. c.** *Concept: what data abstraction specifically guarantees.* The course's sentence is that implementing data abstraction **ensures that no other programme can alter the object data without obtaining the necessary permissions** — the guarantee is about **who may change the data**. (b) and (d) are both real, but they are **functional** abstraction: they concern the methods' implementations, not the data, and exposing the data does not by itself expose any body. (a) is the "prevents the duplication of codes" benefit, which is a consequence of decomposition into functions and is untouched by whether the data is exposed.

**3. b.** *Concept: a declaration is for the compiler; a definition is for the machine.* The course says a **function declaration tells the compiler about a function name, return type, and parameters**, and that **the actual body can be defined separately** — which is exactly what makes call-before-definition legal, and is the same mechanism that lets `#include <stdio.h>` license a call to `printf` whose body lives in a compiled library. (a) invents a two-pass compiler and would make declarations pointless. (c) confuses the **entry point** — `main` is where execution starts — with a suspension of type checking, which never happens. (d) confuses a semicolon with an **access specifier**; `public` and `private` restrict which other programmes may reach a property or function and have nothing to do with declaration syntax.

**4. a.** *Concept: header and body are the two parts of a definition; the declaration is a different statement.* The **function header** carries the return type, the name and the parameters; the **function body** is the collection of statements in braces; together they are the **definition**, which **provides the actual body of the function**. (b) is the commonest wrong answer, and it is wrong because a declaration is a complete statement ending in a semicolon, not the first half of a definition; the two halves shown here cannot be separated, whereas a declaration and a definition can. (c) mistakes the body for a **call**; a call passes actual arguments and appears inside some other function's body. (d) names two parts of the header as though they were the two things shown, ignoring the braces entirely.

**5. b — `10`.** *Concept: a parameter is a copy, so a callee's changes do not reach its caller — even one frame up.* `g(3)` gives `g`'s parameter `n` the value 3. It evaluates `f(n)`, which gives `f`'s **own** `n` a copy of 3; inside `f` that copy becomes 6 and `f` returns 7. Control comes back to `g`, whose `n` was never touched and is still **3**, so `g` returns 7 + 3 = **10**. (c) `13` is 7 + 6: it assumes `f`'s doubling reached back into `g`'s variable, which is the single most common error in the whole topic and is why the two `n`s must be read as two variables that merely share a spelling. (d) `14` doubles `g`'s `n` as well, i.e. applies the mistake twice. (a) `7` reports only `f`'s result and forgets the `+ n` that `g` adds.

**6. c.** *Concept: return type versus `void`; printing is not returning.* "Make it available to the rest of the programme" means the caller must be able to hold the value, and only a call with a non-`void` return type has a value to hold. (a) is the belief that "performs an action" and "returns nothing" are the same thing; every function performs actions, and whether it returns a value is a separate decision recorded in its return type. (b) is the printing/returning confusion: `printf` puts characters on the screen, where no part of the programme can pick them up again. (d) removes the parameter on the ground that "the programme already holds the price", which is exactly what a parameter is for — the function is a separate scope and can see nothing of the caller's locals unless it is passed.

**7. b — `15`.** *Concept: shadowing — a local of the same name hides the global inside that function only.* `a` contains no declaration of `x`, so `x = x + 5;` there refers to the **global**, raising it from 10 to 15. `b` declares `int x = 100;`, which creates a **local** that shadows the global for the rest of `b`'s body; `x = x + 5;` there sets that local to 105 and the local then ceases to exist. The global is untouched by `b`, so `main` prints **15**. (d) `115` treats both functions as writing to one variable. (c) `20` adds 5 twice to the global, i.e. reads `b` as a second copy of `a`. (a) `10` assumes neither function can reach a global at all, confusing "a local is invisible outside" with "a global is invisible inside".

**8. a.** *Concept: reading escape sequences; `\\` is one escape meaning a single backslash.* `\\` prints one **backslash**, `\t` is a **horizontal tab**, `\n` is a **newline**. So the screen gets `a`, `\`, `b`, tab, `c`, newline. (b) reads the second character of `\\` as though the pair were `\b`, the **backspace** escape — the error of scanning backslashes one at a time instead of in pairs from the left. (c) is the belief that doubling a backslash switches interpretation off for the whole string; it only affects that one pair. (d) invents an arithmetic of escapes in which two backslashes make two of something.

**9. d.** *Concept: avoiding duplication of code is the point of a function, and it is a maintenance property, not a tidiness one.* The course states it directly: **functions allow us to avoid duplicating codes, because regardless of how many times a function is used in a project, we only need to implement it once**. Forty copies means forty edits and thirty-nine chances to miss one. (a) treats a maintenance fault as a documentation fault; comments make forty copies easier to find and no easier to change. (b) misapplies **access specifiers**, which restrict which other programmes may reach a property or function and do nothing about repetition. (c) misapplies **scalability**, which the course states as the ability to add more functions while the system remains stable — nothing here limits the number of employees, and making the list global would weaken every function that touched it.

**10. b — `400`.** *Concept: arguments bind to parameters by position, not by name or by meaning.* `part` receives 200 and `whole` receives 50, so the function computes 200 / 50 × 100 = 400 instead of the intended 50 / 200 × 100 = 25. (a) is the belief that the parameter's name matters to the compiler; names are for the human reader, and the compiler matches strictly left to right. (c) expects the compiler to check meaning; it checks **types**, and both arguments are `double`, so the swap is completely silent — which is why this fault is found only by looking at the answer and disbelieving it. (d) invents a partial failure; the expression is evaluated exactly as written, and 200 / 50 is 4, not 0.0025.

**11. a.** *Concept: the two import forms make different names usable.* `from special_functions import max` **explicitly specifies the exact function we want to use**, so — in the course's own words — **we can only use the `max` function**. `min` was not named and is not available, and the module's own name was not bound either, so `special_functions.anything` fails too. (b) is the belief that naming one function opens the whole module, which is precisely the difference between the two forms. (c) states the rule for `import special_functions`, the *other* form, and applies it here. (d) assumes both routes always work because the file was read either way; what an import decides is which **names** appear in your code, not what gets loaded.

**12. c.** *Concept: the two benefits at work together — one implementation, hidden behind an interface.* Two independent facts are doing the work. First, **abstraction**: callers were given the name and the input and output formats and nothing else, so no caller's code refers to the body, and changing the body cannot break them — the course's "**we can change the implementation of a method without breaking other parts of the code**". Second, **decomposition**: because a function is **implemented once regardless of how many times it is used**, there is exactly one line to edit — "**it prevents the duplication of codes**". (a) names two real mechanisms that are neither necessary nor sufficient: a `private` function in one file behaves the same way when its body changes. (b) describes parameter passing, which governs what happens during a single call and says nothing about editing the body later. (d) mixes a true irrelevance (returning versus printing) with a false dichotomy (`import` versus `#include` are the same idea in two languages, not alternatives here).

**13.** *Concept: abstraction — definition, types, mechanisms and benefits, and which benefit follows from which type.* **Definition.** Abstraction is **the process of hiding the internal details of an application from the outer world** — the ignition analogy: you twist the key and the car starts, without concerning yourself with what happens in the engine in between. **The two types.** **Data abstraction** is writing the programme so that **the data of an object is not directly exposed** to the outside world or to other programmes; what it still permits is access along approved routes, and its stated guarantee is that **no other programme can alter the object data without obtaining the necessary permissions**. **Functional abstraction** is writing it so that **the implementation of the methods of an object is not directly exposed**; what it still permits is use of the method, given exactly three things — **the method's name, the format of the input, and the format of the output**. **The two mechanisms.** **Access specifiers**: `public` and `private`, applied to **the properties and functions of an object**, which **restrict the access of other programmes to only some of them**. **Header files**: by including one, you can **use functions from it without having any knowledge of how the function is implemented**. **The four benefits.** Applications are **more secure**, because the implementation is not exposed; **code readability and reusability** are enhanced; **the implementation of a method can be changed without breaking other parts of the code**; and it **prevents the duplication of codes**. **Which follows from which.** "Change the implementation without breaking other parts of the code" follows from **functional abstraction**: if the only things a caller was ever given are the name and the two formats, then no caller's code can contain a reference to the body, so there is nothing in them for a rewrite to invalidate — the benefit is the definition restated from the caller's side. "More secure" follows from **data abstraction**: the guarantee that no other programme can alter the data without permission is what makes unauthorised change impossible, and a `private` field with a small set of `public` functions is that guarantee made concrete. Note that the security here is about **controlled access**, not about anyone being unable to read the source.

**14.** *Concept: finding several independent faults — a mutated parameter, a missing `return`, and a shadowed global — in one fragment.* **What it prints as it stands:**
```
180.00
200.00 10
```
**Fault 1 — `addTax` cannot change anything.** `amount` is a **parameter**, and a parameter is a local placeholder that receives a **copy** of the argument. The line `amount = amount + amount * rate / 100.0;` computes 200 + 200 × 5/100 = 210 and stores it in that copy; then `addTax` returns, the copy is destroyed, and `price` in `main` is still **200**. The function returns `void`, so it has no way to hand the 210 back either. As written it is a function with no effect whatsoever. *Repair:* make it `double addTax(double amount, int r) { return amount + amount * r / 100.0; }` and call it as `price = addTax(price, 5);`. **Fault 2 — `addTax`'s parameter shadows the global.** The parameter is called `rate`, so inside `addTax` the name `rate` means the parameter (5), not the global (10). Here that is what was wanted, but the shadowing is silent and makes the global unreachable in that body; renaming the parameter, as in the repair above, removes the ambiguity. **Fault 3 — `net` promises a `double` and never returns one.** Its return type is `double`, but the body only calls `printf`; there is no `return` statement, so nothing is handed back and `n` receives a meaningless value. Printing and returning are different acts: the 180.00 goes to the screen, where nothing in the programme can retrieve it. *Repair:* either `double net(double gross) { return gross - gross * rate / 100.0; }`, leaving `main` to print `n`, or `void net(double gross)` if printing really is the whole job — in which case `double n = net(price);` must go, since a `void` call has no value. **Fault 4 — `net` silently depends on a global.** Its header says it takes one input, `gross`, but its result also depends on the global `rate`, which is nowhere in its interface. Two callers passing the same `gross` can get different answers depending on what has happened to `rate` in between, and no reader of the header can see why. *Repair:* pass the rate as a second parameter, `double net(double gross, int rate)`, so the header states everything that governs the result. **Repaired programme:**
```c
#include <stdio.h>

double addTax(double amount, int r) { return amount + amount * r / 100.0; }
double net(double gross, int r)     { return gross - gross * r / 100.0; }

int main(void)
{
    double price = 200;
    price = addTax(price, 5);          /* price becomes 210.00 */
    double n = net(price, 10);         /* n becomes 189.00     */
    printf("%.2f %.2f\n", price, n);   /* prints: 210.00 189.00 */
    return 0;
}
```
Check the arithmetic: 200 + 200 × 0.05 = 210.00, and 210 − 210 × 0.10 = 210 − 21 = 189.00.

**15.** *Concept: function and module as one idea at two scales, and header files and imports as one mechanism in two languages.* **A function** is **a group of statements that perform a task**. Its unit of work is one specific task; how the code is divided among functions is **up to the programmer, but logically the division is such that each function performs a specific task**. It is brought into use by **calling** it — writing its name and supplying arguments for its parameters — and what the caller is entitled to know is its **declaration**: the **name, the return type and the parameters**, which is the same list as functional abstraction's **name, format of the input, format of the output**. Nothing about the body is part of that entitlement. **A module** is the same idea **on a much larger scale**: it can **contain various functions and classes**, so its unit of work is a whole area of capability rather than a single task. It is brought into use by **importing** it — `import special_functions` to make the module available, or `from special_functions import max` to bring in one named function and only that one — and what the user is entitled to know is the names it offers and the input and output formats of each. In both cases the same bargain is struck: you get a name and two formats, and in exchange the owner may rewrite the inside. **Header files and imports.** `#include <stdio.h>` gives your file the **declarations** of a library's functions — names, return types, parameters — while the bodies sit compiled elsewhere; `import special_functions` gives your file access to the module's names while the bodies sit in another file. Both let you **use a function without having any knowledge of how it is implemented**, both work by making *names* available rather than code, and both come in a narrow form (`from … import max`, or including only the header you need) and a broad one. They are the same act performed by two toolchains. **Why either lesson could have carried either.** The Abstraction lesson uses the header file to make the point that a caller needs only a name and two formats; the Functions and Modules lesson uses `import` to make the point that large projects are broken into pieces that different people can work on at once. Those are not two facts but one seen from two ends: you can only split a project among people if each piece can be used from outside without being understood from inside, and a piece is only worth hiding if somebody else is going to use it. Decomposition creates the boundary; abstraction is the rule about what may cross it.
