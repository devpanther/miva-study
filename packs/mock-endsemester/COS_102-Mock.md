# COS_102 — End-semester Mock

*Introduction to Problem Solving · Weeks 5–9 · 75 minutes · notes closed · 36 marks*

**Instructions.** You have **75 minutes** for the whole paper: aim for about 40 minutes on Section A and about 35 minutes on Section B. **Section A carries one mark per question (30 marks) and Section B carries one mark per question (6 marks).**
Close your notes before you start, answer every question, and when you finish **mark Section B honestly against the model answers** — award the mark only if your answer contains the named terms and the distinction, not merely the right general idea. This paper covers **Weeks 5 to 9 inclusive**: flowcharts, pseudocode, data types and operators, abstraction and functions, and statements, blocks and branching.

---

## Section A — Multiple choice (30)

**1.** The course defines a flowchart as:
a) A graphical representation of the sequence of operations in a computer program, or the graphical representation of an algorithm
b) A textual representation of the sequence of operations in a computer program
c) The finite, ordered, unambiguous sequence of steps that solves the problem
d) A program written in symbols that a compiler converts directly into machine code

**2.** Complete the course's own mid-lesson sentence: "The ________ symbol is used in complex flowcharts to connect independent elements across **multiple pages**."
a) Link connector  b) On-page connector  c) Declaration  d) Flowline

**3.** In the course's five-number flowchart, which box is drawn as a **parallelogram**?
a) `sum = sum + n; count = count + 1` — the values change, so data is being handled
b) `Enter n` — data crosses into the program from outside
c) `Is Count < 5?` — the user's answer is data supplied to the chart
d) `Sum = 0, Count = 0` — the variables are being given their data

**4.** Complete the course's other mid-lesson sentence: "A ________ flowchart ensures that the communication gap between the users and developers of the system is reduced."
a) Process  b) Workflow  c) Swimlane  d) Data

**5.** Trace this flowchart and say how many numbers it reads:

```
START
  |
  v
[ Sum = 0, Count = 0 ]
  |
  v
( Enter n ) <----------------+
  |                          |
  v                          |
[ sum = sum + n ]            |
[ count = count + 1 ]        |
  |                          |
  v                          |
< Is Count < 4 ? >---- YES ---+
  |
  NO
  v
( Print sum )
  |
  v
STOP
```

a) 3  b) 4  c) 5  d) It never leaves the loop

**6.** A hospital draws its admissions chart with one horizontal lane for Reception, one for the Nurse and one for the Doctor, so that the several streams of information can be seen running side by side. The chart type is:
a) Swimlane flowchart — multiple information flowing side by side, allowing multiple categories of activities
b) Workflow flowchart — it describes the manner in which the business functions
c) Process flowchart — it shows the process a patient goes through along the chain
d) Data flowchart — it shows the flow of information through the system

**7.** The course defines a pseudocode as ________ representation of the sequence of operations in a computer program.
a) A textual  b) A graphical  c) An executable  d) A mathematical

**8.** Complete the course's mid-lesson sentence: "________ can be written in any notation or language while ________ are written in a combination of natural and programming language elements."
a) Algorithms…Pseudocode  b) Pseudocode…Algorithms  c) Flowcharts…Algorithms  d) Programs…Pseudocode

**9.** Which line of this pseudocode breaks one of the course's stated rules, and which rule?

```
SET total TO 0
FOR each mark in marks
    SET total TO total + mark
ENDFOR
System.out.println(total);
```

a) Line 5 — statements should be language independent, not written in a particular programming language
b) Line 2 — FOR may not be used when the number of marks is unknown
c) Line 3 — an accumulator may not be updated inside the body of a loop
d) Line 1 — SET is not one of the course's initialisation verbs

**10.** Which construct's body is **guaranteed to run at least once**, and why?
a) WHILE — some condition is set at the beginning/top and other conditions in the body
b) REPEAT-UNTIL — some condition is set at the ending/bottom and other conditions in the body
c) FOR — all the necessary conditions are set at the beginning/top
d) CASE — the OTHERS branch runs when no condition matches

**11.** Trace this pseudocode and say what is printed:

```
SET n TO 1
WHILE n <= 4
    SET total TO 0
    SET total TO total + n
    SET n TO n + 1
ENDWHILE
PRINT total
```

a) 10  b) 4  c) 0  d) Nothing — the loop never terminates

**12.** The course's worked problem says the tuition fee rises **if more than seven students pass**, but the printed solution tests `if seven or more students passed`. The correct test is:
a) `passes >= 7`  b) `passes > 7`  c) `passes = 7`  d) `passes > 8`

**13.** What does this fragment print?

```c
int   sum   = 90;
int   count = 4;
float average = sum / count;
printf("%f\n", average);
```

a) 22.500000  b) 22.000000  c) 23.000000  d) It will not compile — an `int` expression cannot be stored in a `float`

**14.** Evaluate `20 - 6 / 2 * 3` under the course's precedence and associativity rules:
a) 11  b) 21  c) 19  d) 51

**15.** Which line is **a declaration that is not a definition**?
a) `int count;`  b) `extern int total;`  c) `float average = 0.0f;`  d) `char grade = 'A';`

**16.** What does this fragment print?

```c
int i = 0, j = 0;
if (i++ > 0 && j++ > 0)
    printf("A\n");
printf("%d %d\n", i, j);
```

a) `1 0`  b) `1 1`  c) `0 0`  d) `A` then `1 1`

**17.** `struct Dog` and `union Dog` each group `name[20]`, `breed[20]` and `colour[20]`. Which statement is true of the **union** and not of the structure?
a) It is a user-defined data type that groups items of possibly different types into a single type
b) All of its members start at the same location in memory, so the variable can represent the value of only one of its members at a time
c) Its members are accessed and modified with the dot syntax
d) It may hold members of more than one data type at the same time

**18.** A student renames the variable `t` to `runningTotal` everywhere in the source and recompiles. The effect on the compiled program is:
a) None — variable names are not stored inside the computer memory; the compiler replaces them with memory location addresses
b) It runs more slowly, because the longer name must be looked up at every use
c) It uses more memory, because the name is stored alongside the value
d) It changes the program's output, because the name is part of the variable's identity at run time

**19.** The course defines abstraction as:
a) The process of hiding the internal details of an application from the outer world
b) The process of keeping the source code secret from other programmers
c) Breaking a large computing project into smaller ones so several people may work on it
d) Grouping items of possibly different types into a single user-defined type

**20.** A team publishes a routine's **name, the format of its input and the format of its output**, and keeps the body to itself. This is:
a) Functional abstraction — the implementation of the method is not directly exposed
b) Data abstraction — the data of the object is not directly exposed
c) Encapsulation of the object's state behind `private` variables
d) Decomposition — the project has been broken into smaller functions

**21.** In the fragment below, which line is the **declaration** and which is the **header of the definition**?

```c
#include <stdio.h>

int max(int a, int b);            /* line 3  */

int main(void)
{
    int m = max(4, 7);            /* line 7  */
    printf("%d\n", m);
    return 0;
}

int max(int a, int b)             /* line 12 */
{
    if (a > b) return a;
    return b;
}
```

a) Line 3 is the declaration; line 12 is the header of the definition
b) Line 12 is the declaration; line 3 is the definition
c) Line 7 is the declaration, because it is where `max` is first used with values
d) Line 3 is the definition, because it already gives the return type, the name and the parameters

**22.** What does this program print?

```c
int total = 0;

int add(int a, int b)
{
    int total;
    total = a + b;
    return total;
}

int main(void)
{
    int r = add(3, 5);
    total = total + 1;
    printf("%d %d\n", r, total);
    return 0;
}
```

a) `8 1`  b) `8 8`  c) `8 9`  d) `8 0`

**23.** In `int m = max(4, 7);` the values `4` and `7` are:
a) Arguments — the actual values supplied at this call
b) Parameters — the placeholders to which a value is passed when the function is invoked
c) The return type and the return value of `max`
d) The function body, since they are what `max` works on

**24.** After `from special_functions import max`, what may be used from that module?
a) Only `max`, because it was explicitly specified
b) Every function in the module, reached as `special_functions.max(...)` and so on
c) Every function whose name begins with `max`
d) Nothing until `import special_functions` is also written

**25.** Which statement is true of the line `a = 5; b = 7;` written on a single line of C?
a) It is two statements — a simple statement contains only one expression and ends with a semicolon, and it is the semicolon, not the line break, that ends it
b) It is one statement, because the computer treats everything on one line as a single unit
c) It is invalid — you cannot have more than one statement on a single line
d) It is a block, because two statements have been grouped together

**26.** Which statement about a block (compound statement) is correct as the course states it?
a) It contains more than one statement inside curly brackets, the right curly bracket takes no semicolon, and the group is treated like a single statement by the computer
b) It contains more than one statement inside curly brackets, and the right curly bracket must be followed by a semicolon
c) It is a group of statements that the computer executes as several separate statements, which is why it may not be used after `if`
d) It is any set of statements written at the same level of indentation

**27.** What does this fragment do?

```c
int x = 50;
if (0 < x < 10)
    printf("in range\n");
```

a) Prints nothing, because 50 does not lie between 0 and 10
b) Prints `in range`, because the test groups as `(0 < x) < 10`, which is `1 < 10` and therefore always true
c) Fails to compile, because C forbids a chained comparison
d) Prints `in range` only for values of `x` between 1 and 9

**28.** With `<stdbool.h>` included, what does this fragment print?

```c
int x = 5;
if (x == true) printf("A\n");
if (x)         printf("B\n");
if (-7)        printf("C\n");
if (0.0)       printf("D\n");
```

a) `A B C`  b) `B C`  c) `B C D`  d) `A B C D`

**29.** `n` may be zero. Which guard is safe, and why?
a) `if (n != 0 && total / n > 5)` — `&&` evaluates its left operand first, and if it is false the right operand is never evaluated at all
b) `if (total / n > 5 && n != 0)` — `&&` evaluates the cheaper operand first, so the guard still runs before the division
c) `if (n != 0 & total / n > 5)` — `&` is the safer operator because it always evaluates both sides
d) Either of the first two — the order of the operands of `&&` is a matter of style

**30.** What does this fragment print?

```c
int score = 30;
if (score >= 50)
    printf("Pass\n");
    printf("Well done\n");
```

a) Nothing  b) `Well done`  c) `Pass` then `Well done`  d) `Pass`

## Section B — Short answer (6)

**31.** A cyber café charges ₦150 per hour. The program must read the number of hours, compute and print the charge, and additionally print "DISCOUNT" when the hours booked are **5 or more**.
(a) List the steps of the flowchart in order and name the symbol used for each, giving the shape and its stated function. (b) State the four principles the course gives for drawing a flowchart. (c) Name the two **fan-in** symbols and the only **fan-out** symbol, and say what each does. (d) State one of the three disadvantages of flowcharts exactly as the course gives it.

**32.** A department must read the number of candidates and each candidate's score, count how many scored **below 50**, print that count, and print "EXTRA SESSION" when **more than six** candidates scored below 50.
(a) Write the pseudocode, including the header the course requires. (b) Name the four rules that govern pseudocode. (c) List the four faults the course's own printed solution contains, and say which rule or step each one breaks.

**33.** (a) Evaluate `20 - 6 / 2 * 3`, showing each step and naming the rule that fixes the order. (b) Evaluate `a + b * c > a * b + c && !(a - b == c)` with `a = 5, b = 2, c = 3`, and say exactly how much of it is evaluated. (c) `int sum = 90; int count = 4; float average = sum / count;` gives 22.000000. Give three fixes that work, say why `(float)(sum / count)` does not, and state the rule in one sentence. (d) Distinguish a structure, a union and a class in one sentence each.

**34.** A program reads three prices, prints each with 7.5% VAT added, and prints the VAT-inclusive total. Written out longhand the VAT formula appears four times.
(a) Decompose it into functions in C, writing each one once. (b) Point at your own code and name the four parts of a function definition. (c) Distinguish a **declaration** from a **definition**, and a **parameter** from an **argument**. (d) Name the two mechanisms the course gives for implementing abstraction, and say which type of abstraction a header file delivers.

**35.** The course's case study classifies an age as *teen*, *young adult* or *adult*:

```c
if (age >= 13 && age <= 19)
    printf("teen\n");
else if (age <= 25)
    printf("young adult\n");
else
    printf("adult\n");
```

(a) Trace `age = 17` and `age = 10`, and name the bug the second trace exposes. (b) Explain the rule about `if-else-if` that causes it, and repair the code. (c) Why must the first test be written `age >= 13 && age <= 19` rather than `13 <= age <= 19`? (d) Give the De Morgan equivalent of `!(age >= 13 && age <= 19)`, and distinguish unconditional from conditional branching with the course's example of each.

**36.** A student draws a flowchart that reads numbers until 0 is entered and prints how many were above 100, then writes the same thing as pseudocode, then codes it in C.
(a) Write the pseudocode. (b) Give the four correspondences between flowchart symbols and pseudocode constructs. (c) State whether a **new algorithm** comes into existence at any of the three points, and why. (d) The two course definitions differ in one word — give both definitions and the word. (e) State one advantage each notation has that the other has not, using the course's stated advantages and disadvantages.

## Answers

**1. a — A graphical representation of the sequence of operations in a computer program; or the graphical representation of an algorithm.** *Concept: the flowchart definition, word for word.* This is the deck's opening sentence, and it also states that flowcharts **use symbols to describe actions such as start/begin, stop/end, decision making and data processing**. (b) is Week 6's pseudocode definition — the same sentence with **textual** in place of **graphical**, which is exactly how the two are examined against each other. (c) is the algorithm itself, which exists independently of how it is written down; the flowchart is a *representation* of it. (d) is wrong twice over: no compiler accepts a flowchart, and a flowchart is not a program. **[Week 5]**

**2. a — Link connector.** *Concept: on-page vs link (off-page) connector.* This is Flowcharts I's mid-lesson question verbatim. The **link or off-page connector** connects independent elements **across multiple pages**; (b), the on-page connector, does the same job **across a single page** and is the distractor the course itself supplies. (c) the declaration (predefined process) shows **a complex process or a well-known operation**, not a jump. (d) a flowline is a drawn arrow between two symbols — the whole point of a connector is that no line is drawn. The link connector exists because of the stated disadvantage that a complex chart **might span multiple pages**. **[Week 5]**

**3. b — `Enter n`.** *Concept: the input/output (data) symbol vs the process (action) symbol.* The **parallelogram is the input/output symbol, also called the data symbol**, and it **shows data that can be used either at the input or the output**; `Enter n` is the only box in that chart where a value crosses the boundary between the program and the outside world. (a) and (d) are **rectangles** — the process or **action** symbol, showing **an action, process or function** performed on data the program already holds. "The computer performs all of them, so they are all processes" is the standard error. (c) is a **diamond**: it asks a question whose answer determines the path. **[Week 5]**

**4. d — Data flowchart.** *Concept: the four main flowchart types.* This is Flowcharts II's mid-lesson question verbatim: a **data flowchart describes the data processing aspect of the design and analysis of a system by showing the flow of information**, and it is the one credited with **reducing the communication gap between the users and developers**. (a) the **process** flowchart clarifies **responsibilities and roles**, shows the **production chain**, and describes information communication *within* an organisation. (b) the **workflow** chart describes **the manner in which businesses function**. (c) the **swimlane** shows **multiple information flowing side by side**. **[Week 5]**

**5. b — 4.** *Concept: reading a loop off a flowchart, and where the test sits.* The test is **after** the body, so the body always runs at least once. Count is 0 at initialisation; after pass 1 it is 1 and `1 < 4` is Yes; passes 2 and 3 leave it at 3, still Yes; the **fourth** pass makes it 4, and `4 < 4` is **No**, so the flow leaves the loop. Four numbers are read. (a) 3 is what you get by testing *before* the body. (c) 5 is the course's own chart answered from memory — that chart tests `Count < 5`, and the whole point of this variant is that the number read is the bound in the diamond, not the number you memorised. (d) would be true only if step 4 stopped incrementing `count`, which is the course's own note on why the STOP would then be unreachable. **[Week 5]**

**6. a — Swimlane flowchart.** *Concept: swimlane vs workflow.* The course itself warns that a swimlane **can be confused with a workflow flowchart**, and gives the separator: swimlane charts handle **multiple information flowing side by side**, **allow for the creation of multiple categories of activities**, and are **ideal for representing the interaction of a process with different aspects of an organisation**. If there are lanes, it is a swimlane. (b) workflow describes **the manner in which businesses function** as one flow — employee training, identifying problematic areas, simplifying operations. (c) process is about how a process is **completed**, along the production chain. (d) data is about the **flow of information** as a data-processing design, not about who does what. **[Week 5]**

**7. a — A textual representation.** *Concept: the pseudocode definition, word for word.* **A pseudocode is a textual representation of the sequence of operations in a computer program; or the textual representation of an algorithm.** (b) is the whole of Pseudocodes I's mid-lesson question, which prints the definition with **graphical** substituted and asks Yes or No — the answer is **No**, because graphical is the *flowchart*. (c) is excluded explicitly: pseudocode is **not meant to be executed as the actual code; it just clearly describes the flow and logic of an algorithm**. (d) belongs to the *algorithm*, which may be expressed in **mathematical symbols** among other notations. **[Week 6]**

**8. a — Algorithms…Pseudocode.** *Concept: algorithm vs pseudocode.* Pseudocodes II's mid-lesson question verbatim, and the order matters: **algorithms** can be written in **any** notation or language; **pseudocode** is written in **a combination of natural and programming language elements**. (b) is the reversed option the deck itself supplies as the distractor. (c) and (d) substitute the wrong member of the family: a flowchart is one notation, not the thing that may use any notation, and a program is committed to exactly one language. Remember the rest of the comparison too — algorithms have **precise and well-defined procedures** while pseudocode is **more high level and informal**. **[Week 6]**

**9. a — Line 5, language independence.** *Concept: the four pseudocode rules.* `System.out.println(total);` is Java. It breaks the stated rule that **pseudocode statements should be language independent; not in a particular programming language**, and it also fails the near-English requirement and the convertibility requirement — the design has been committed to one language before it is finished. The course's own example of this fault is `FOR i = 0 to 20 / IF string[i] = '#'`, which borrows one language's indexing syntax. (b) is invented — WHILE and FOR are both legal constructs and nothing forbids FOR here. (c) inverts a correct practice; updating an accumulator inside the loop is exactly what the loop is for — what is wrong is *initialising* it there (see Q11). (d) is false: **SET** and **INIT** are the course's own initialisation verbs. **[Week 6]**

**10. b — REPEAT-UNTIL.** *Concept: where each loop tests its condition.* REPEAT-UNTIL sets **some condition at the ending/bottom and other conditions in the body**, so the body has already run once before the condition is first seen — **at least one pass, always**. (a) WHILE sets **some condition at the beginning/top**, so it tests before the first pass and the body may run **zero** times. (c) FOR sets **all the necessary conditions at the beginning/top**, so the number of passes is fixed before entry and can be zero. (d) CASE is not a loop at all. Note also the inversion the pair carries: WHILE continues while its condition is **true**, REPEAT-UNTIL stops when its condition becomes **true**, so `UNTIL c` is `WHILE NOT c`. **[Week 6]**

**11. b — 4.** *Concept: initialising inside a loop instead of outside.* `SET total TO 0` sits **inside** the body, so it fires on every pass and wipes out everything accumulated so far. The last pass sets `total` to 0 and then to 4, and 4 is what prints. (a) 10 is 1+2+3+4 — the answer if the initialisation had been placed **before** the loop, which is where an accumulator belongs. (c) 0 would need the addition to be inside the loop and the print inside it too, or `n` never to be added. (d) is wrong because `SET n TO n + 1` does change what the condition tests, so the loop terminates. This is the course's named "commonest undetected pseudocode bug" precisely because 4 is a plausible-looking number. **[Week 6]**

**12. b — `passes > 7`.** *Concept: the boundary fault in the course's own worked solution.* The problem states that the fee rises if **more than seven** students pass; "more than seven" is eight or more, i.e. `passes > 7`. (a) `passes >= 7` is the printed solution's `if seven or more students passed`, and it raises the fee on exactly seven passes when it should not — the two disagree on precisely one value. (c) tests only the single value 7. (d) `passes > 8` excludes eight, which should trigger the rise. The other three faults in that solution are worth carrying with this one: no `ENDIF` and no `ENDWHILE`; `add one to student counter` not indented into the loop, which makes `WHILE student counter is active` never end; and lowercase keywords against the capital-letters rule. **[Week 6]**

**13. b — 22.000000.** *Concept: integer division truncates, and the operand types decide.* Both `sum` and `count` are `int`, so the operation performed is **integer division**: 90 / 4 = 22 with the fractional part thrown away. Only afterwards is 22 widened to `float`. (a) 22.500000 is the answer if you believe the assignment target chooses the operation — **the type of the result is decided by the operands, never by what you assign it to**. (c) 23 assumes rounding; truncation is towards zero, not to nearest. (d) is wrong — the assignment is perfectly legal, which is exactly why the bug survives compilation. The course's own version of this uses the first five multiples of 9, where 135/5 = 27 is exact and the bug hides completely. **[Week 7]**

**14. a — 11.** *Concept: precedence and associativity.* `/` and `*` sit at the **same** precedence level and associate **left to right**: `6 / 2` = 3, then `3 * 3` = 9, then `20 - 9` = **11**. (b) 21 is straight left-to-right evaluation ignoring precedence altogether. (c) 19 is `6 / (2 * 3)` — believing that `*` outranks `/`, which is the commonest form of this error; precedence alone cannot settle `6 / 2 * 3`, only **associativity** can. (d) 51 is `(20 - 3) * 3`, doing the subtraction before the multiplication. **[Week 7]**

**15. b — `extern int total;`.** *Concept: declaration vs definition.* A **declaration** tells the compiler a name and its type; a **definition** additionally **reserves the storage**. `extern` announces that `total` exists somewhere else, so no bytes are set aside here. The slide's own question — *a variable definition is also a declaration, but not all variable declarations are definitions* — is answered by exactly this line. (a) `int count;` **is** a definition: storage is reserved, it is simply not initialised, and "uninitialised" does not mean "does not exist". (c) and (d) are definitions **with** initialisation, which is a third thing again. Test: *does this line cause bytes to be set aside?* **[Week 7]**

**16. a — `1 0`.** *Concept: short-circuit evaluation and the skipped side effect.* `i++` yields the value **before** the increment, so the left operand is `0 > 0`, which is false; `i` nevertheless becomes 1. Because `&&` evaluates its right operand **only if the left is true**, `j++` is **never evaluated at all**, so `j` stays 0, and `A` never prints. (b) `1 1` assumes both sides always run — that is what `&` would do. (c) `0 0` misses that `i++` increments even when its value is 0. (d) additionally reads the `if` as true. The examinable point: a skipped operand's **side effects do not happen**, so short-circuit is a guarantee about what is evaluated, not an optimisation. **[Week 7]**

**17. b — All members start at the same location in memory, so only one member's value at a time.** *Concept: structure vs union.* This is the entire distinction, and the course states it in these words. Consequences: `sizeof(struct Dog)` is 60 here and `sizeof(union Dog)` is 20; writing `breed` overwrites `name`. (a) is true of **both** — the course defines a union as being **defined in the same way as** a structure, so the "group items of possibly different types into a single type" phrase does **not** separate them, and choosing it is the standard error. (c) is true of both. (d) states the opposite of the truth about a union and is true of the structure instead. **[Week 7]**

**18. a — None.** *Concept: variable name vs memory address.* **Variable names are not stored inside the computer memory; the compiler replaces them with memory location addresses.** The name is a compile-time convenience; at run time there is only an address and the bytes at it, so a consistent rename cannot change what the compiled program does. (b) invents a run-time lookup that does not exist. (c) assumes the name is stored alongside the value. (d) treats the name as part of the variable's run-time identity. Note what *would* change the program: renaming inconsistently, or renaming to something that collides — and remember C is **case-sensitive**, so `Total`, `total` and `TOTAL` are three different variables. **[Week 7]**

**19. a — The process of hiding the internal details of an application from the outer world.** *Concept: the abstraction definition, word for word.* The course's analogy is the car ignition: you twist the key and the car starts, without bothering yourself with what happens in the engine in between. Note what is hidden — the **internals**, not the **service**. (b) is the trap: abstraction hides implementation details from **other programmes**, not source code from people; a header file is readable text and still an abstraction mechanism. (c) is Week 8's *other* argument, the one for functions and decomposition, and it answers "why break the project up", not "what is abstraction". (d) is Week 7's definition of a structure. **[Week 8]**

**20. a — Functional abstraction.** *Concept: functional vs data abstraction.* Functional abstraction is writing a programme so that **the implementation of the methods of an object is not directly exposed**; if another programme needs the method, **all it needs to know is the method's name, the format of the input, and the format of the output** — the published triple in the question, verbatim. (b) **data** abstraction hides **the data of an object**, and its guarantee is that **no other programme can alter the object data without obtaining the necessary permissions**. Test: what does the outsider still get? *Permitted access to values* is data abstraction; *a name plus input and output formats* is functional. (c) names the usual mechanism for data abstraction, not this case. (d) is decomposition, an argument about people and workload, not about what is exposed. **[Week 8]**

**21. a — Line 3 is the declaration; line 12 is the header of the definition.** *Concept: declaration vs definition, header vs body.* A **function declaration tells the compiler about a function name, return type and parameters**, and the body **may be defined separately**; it ends in a semicolon and has no body. A **function definition provides the actual body** and consists of **a function header and a function body** — so line 12 is the header, the braces below it enclose the body, and header + body = definition. (b) inverts them. (c) confuses the **call** with a declaration; the call is where arguments are supplied. (d) is the commonest wrong answer — it is true that line 3 gives return type, name and parameters, but that is precisely what makes it a *declaration*: what a definition adds is **the body**. The declaration is for the **compiler**, the definition is for the **machine**, which is what lets `main` call `max` although `max` appears further down. **[Week 8]**

**22. a — `8 1`.** *Concept: local vs global, and shadowing.* `add` declares its own `int total`, which is **local**: it shadows the global inside `add` only, so `total = a + b` writes to the local, and 8 is returned into `r`. The **global** `total` is untouched by the call and is still 0 when `main` increments it to 1. (b) `8 8` is the answer if you believe `add` wrote to the global — the classic misread. (c) `8 9` compounds that by adding 1 to the supposed 8. (d) `8 0` forgets `main`'s own increment. The rule: a local (including a parameter) exists only while that call runs and is invisible to every other function; if a local and a global share a name, the **local wins inside that function** and the global is untouched. **[Week 8]**

**23. a — Arguments.** *Concept: parameter vs argument.* The **parameter** is the **placeholder** written once in the header — `int a, int b`; the **argument** is the **actual value passed at this call** — `4` and `7`, different on every call. The course's own wording is "when a function is invoked, **a value is passed to the parameter**", and the value passed is the argument. (b) reverses the two. (c) confuses the values passed in with the value handed back; the return type here is `int` and the return value is 7. (d) calls the arguments the body, when the body is the collection of statements between the braces. Remember also that **arguments bind to parameters by position**, not by name or meaning. **[Week 8]**

**24. a — Only `max`.** *Concept: `import m` vs `from m import f`.* `from special_functions import max` **explicitly specifies** the exact function wanted, and the course states that after it **only the `max` function** in that module may be used. (b) describes what plain `import special_functions` gives you — the whole module available, its functions reached through the module's name. (c) invents a prefix rule. (d) is wrong: the `from … import` form is complete in itself. The larger point: a **function** is a group of statements performing one task; a **module** is the same idea **on a much larger scale**, because it **can contain various functions and classes**. You *call* a function; you *import* a module. **[Week 8]**

**25. a — Two statements.** *Concept: the simple-statement definition.* **A simple statement contains only one expression and it ends with a semicolon.** The semicolon is the terminator, so `a = 5; b = 7;` is two statements however they are laid out — and the deck asks this directly ("Can we have more than one statement on a single line?"). (b) and (c) both treat layout as syntax; layout is not what ends a statement, which is also why one statement may be spread over several lines. (d) is wrong because a **block** requires the statements to be enclosed in **curly brackets**; two semicolons on a line group nothing. **[Week 9]**

**26. a — More than one statement inside curly brackets, no semicolon after the right brace, treated like a single statement.** *Concept: the block definition and its operative property.* All three clauses are the course's own: **a block contains more than one statement contained inside curly brackets**; **the right curly bracket does not have a semicolon after it**; **the group of statements inside a block are treated like a single statement by the computer**. That last clause is why a block may go anywhere one statement is allowed — which is what makes blocks usable in **functions, decision making statements and iterative statements**. (b) adds a semicolon the course explicitly denies. (c) inverts the operative property and draws exactly the wrong conclusion from it. (d) is the misconception Q30 punishes: **indentation is invisible to the compiler**; only braces make a block. **[Week 9]**

**27. b — Prints `in range`, because the test groups as `(0 < x) < 10`.** *Concept: chained comparison.* Relational operators associate **left to right**, so `0 < 50` is evaluated first and yields **1**; then `1 < 10` is true. Every value of `x` gives either 1 or 0 on the left, and both are less than 10, so the condition is **always true**. (a) reads the line as mathematics rather than as C. (c) is wrong — it compiles silently, which is what makes this the single most costly precedence error at this level. (d) assumes the line does what it looks like. The correct range test is `0 < x && x < 10`, and it needs `&&` precisely because a chained comparison is not a range test. **[Week 9]**

**28. b — `B C`.** *Concept: truth in C is "not zero".* `x == true` compares `x` with **1**, and 5 is not 1, so `A` does not print — never compare a condition with `true`. `if (x)` succeeds because 5 is not 0. `if (-7)` succeeds because **any number that is not 0 represents true**, negatives included. `if (0.0)` fails because **0 represents false**. (a) and (d) both assume `x == true` behaves like `if (x)`, which is the whole trap. (c) treats 0.0 as somehow different from 0. The stated rule: **Boolean values are returned as integers, with 1 (or any other number that is not 0) representing true and 0 representing false.** **[Week 9]**

**29. a — `if (n != 0 && total / n > 5)`.** *Concept: short-circuit evaluation as a guard.* `&&` evaluates its **left** operand first and, if it is false, **never evaluates the right operand at all**, so when `n` is 0 the division simply does not happen. Guard first, use second. (b) divides before the guard runs and crashes on `n = 0`; the operands of `&&` are not evaluated cheapest-first, they are evaluated left to right. (c) is worse, not safer: `&` is the **bitwise** operator, it **always evaluates both sides**, and using it removes the very guarantee the guard depends on. (d) is the misconception the whole topic exists to kill — **the order of the operands of `&&` and `||` is part of the meaning of the program**, not a matter of style. **[Week 9]**

**30. b — `Well done`.** *Concept: an `if` governs exactly one statement.* Without braces the `if` controls only `printf("Pass\n")`. Since `score` is 30 that call is skipped, and `printf("Well done\n")` is simply the next statement in the programme, so it runs unconditionally. (a) assumes the indentation put both lines inside the `if` — **the compiler reads braces only**. (c) would require the condition to be true. (d) would require the second line to be outside *and* the first to run. The same fault on a loop repeats only the first statement, which is a standard way to write an accidental infinite loop; and its cousin is the stray semicolon, `if (x > 0);`, which ends the `if` with an empty statement so the block after it runs unconditionally. **[Week 9]**

**31.** *Concept: symbols by function, the principles, fan-in vs fan-out, and the stated disadvantages.*

**(a) The chart, step by step, with its symbols.**

```
START                         oval        terminator: shows the start and end points
  |
( Read hours )                parallelogram  input/output (data) symbol: data coming in
  |
[ charge = hours * 150 ]      rectangle   process (action) symbol: an action is performed
  |
( Print charge )              parallelogram  input/output: data going out
  |
< Is hours >= 5 ? >           diamond     decision (control) symbol: one in, TWO labelled exits
  |            \
  | NO          \ YES
  |              ( Print "DISCOUNT" )     parallelogram
  |             /
  v            /
 (rejoin) <---+                merge (inverted triangle): combines paths into a single path
  |
STOP                          oval        terminator: 1 or more in, 0 out
```

Marks are for naming the symbol by **function**: terminator = **shows the start and end points of the flowchart**; process/action = **shows an action, process or function**; input/output (data) = **shows data that can be used either at the input or the output**; decision/control = **used when questions such as yes or no and true or false need an answer, and the answer determines the path the algorithm flow will take**. The NO branch has nothing to do, so its flowline runs straight down to the rejoin — that is `IF … THEN` with no `ELSE`. Note the boundary: "5 or more" is `hours >= 5`, not `hours > 5`.

**(b) The four principles.** The flowchart should have **a start point and a stop point**; **flow lines should generally not cross, if possible**; **instructions for comparisons should be made as simple as possible**; and the flowchart should be **easy to follow, neat and clear such that the visual impact is very good**.

**(c) Fan-in and fan-out.** The two **fan-in** symbols are the **merge** (inverted triangle), which is **used to combine various paths into a single path**, and the **summing junction** (circle with a cross), which **shows the addition of inputs from various paths**. Both take several flowlines in and give **one** out. The **decision** (diamond) is the only **fan-out** symbol: one in, **exactly two** out, each **labelled**. Expecting a diamond to join paths, or a merge to split them, is the commonest symbol error on the paper.

**(d) One disadvantage, as stated.** Any one of: complex programs or processes **might require that the flowchart spans multiple pages**; **adjustments might be complicated and might even require that a new flowchart is drawn**; the flowchart logic **is hardly the most efficient when used to write a program, because it can make the program unnecessarily longer than normal.** **[Week 5]**

**32.** *Concept: the seven steps applied, the four rules, and the faults in the course's own solution.*

**(a) The pseudocode, with the header the course requires.**

```
Algorithm:   Determine whether an extra session is required
Description: accepts the scores of candidates, counts how many scored below 50,
             and decides whether an extra session should be held
Inputs:      the number of candidates, and each candidate's score
Outputs:     the number of candidates below 50, and the extra-session decision

SET below TO 0
SET candidate TO 1
READ number_of_candidates
WHILE candidate <= number_of_candidates
    READ score
    IF score < 50 THEN
        SET below TO below + 1
    ENDIF
    SET candidate TO candidate + 1
ENDWHILE
PRINT below
IF below > 6 THEN
    PRINT "EXTRA SESSION"
ENDIF
```

The header must carry **the name of the algorithm, a short description of its purpose, and a list of the required inputs and outputs** — those three, no fewer. `below > 6` is the boundary: "more than six" is seven or more, so `below >= 6` would fire one candidate too early, the same fault the deck itself commits. `SET below TO 0` is **before** the loop, and `SET candidate TO candidate + 1` is **inside** it.

**(b) The four rules.** Each line should contain **only one statement**; **write keywords in capital letters**, so that keywords are differentiated from other words; **statements should be language independent**, not written in a particular programming language; and **indent** the body of every construct so the reader can see which statements belong to which construct.

**(c) The four faults in the course's printed solution.**
- **The condition is one student too generous.** The problem says the fee rises if **more than seven** students pass; the pseudocode raises it when **seven or more** have passed. This breaks step 7, **testing and refining** — the test that should have caught it is the one at exactly seven passes.
- **No `ENDIF` and no `ENDWHILE`**, so nothing marks where the loop body and the ELSE branch end. This is the construct skeletons of step 5: every construct is learned with its closing keyword.
- **`add one to student counter` is not indented into the loop.** This breaks the **indentation** rule, and taken literally it makes `WHILE student counter is active` a loop that never ends, because the counter is then incremented once, after the loop.
- **Lowercase keywords** on three lines (`initialise`, `if`, `print`), against the **capital letters** rule; and **`WHILE student counter is active` is ambiguous**, "active" never being defined, which fails step 6's requirement that the constructs describe the steps **without ambiguity**. **[Week 6]**

**33.** *Concept: precedence and associativity, short-circuit, integer division, and the struct/union/class trio.*

**(a) `20 - 6 / 2 * 3` = 11.** `/` and `*` are at the same precedence level, above `+ -`. **Associativity** settles the tie: they associate **left to right**, so `6 / 2` = 3 first, then `3 * 3` = 9, then `20 - 9` = **11**. State both rules — **precedence** decides between operators of *different* levels, **associativity** between operators of the *same* level.

**(b) `a + b * c > a * b + c && !(a - b == c)` with `a = 5, b = 2, c = 3` is 0, and the `!(…)` is never evaluated.** Arithmetic binds tightest: `b * c` = 6, so the left side is `5 + 6` = **11**; `a * b` = 10, so the right side is `10 + 3` = **13**. Then the relational `11 > 13` = **0**. Then `&&` sees a **false left operand** and **short-circuits**: the whole right-hand side, including the `!` and the `==` inside it, is **never evaluated at all**. The value of the expression is **0**.

**(c) The integer-division fix.** Three that work: `(float) sum / count`, `sum / (float) count`, `sum / 4.0`. Each makes **one operand floating before the division**, so the operation performed is floating-point division and the answer is 22.5. **`(float)(sum / count)` does not work** because the division has already been done in `int` inside the brackets and the fraction is already gone — the cast then widens 22 to 22.0. **The rule: the operand types choose the operation, and the assignment target has no say. Cast before the division, never after.**

**(d) Structure, union, class.** A **structure** is a user-defined data type that groups items of possibly different types into a single type, with **every member having its own storage**, so all members hold values at once. A **union** is defined in exactly the same way, except that **all of its members start at the same location in memory**, so **it can represent the value of only one of its members at a time** and its size is the size of its largest member. A **class** is like a structure but **in addition to variables it also has methods or functions**, plus access specifiers (`public`, `private`) controlling who may reach them. **[Week 7]**

**34.** *Concept: decomposition into functions, the four parts of a definition, declaration vs definition, parameter vs argument, and the abstraction mechanisms.*

**(a) Decomposed — one function per specific task, each written once.**

```c
#include <stdio.h>

double withVat(double price);                /* DECLARATION */
double total3(double a, double b, double c); /* DECLARATION */

double withVat(double price)
{
    return price * 1.075;
}

double total3(double a, double b, double c)
{
    return a + b + c;
}

int main(void)
{
    double p1 = 200, p2 = 350, p3 = 450;
    double v1 = withVat(p1), v2 = withVat(p2), v3 = withVat(p3);
    printf("%.2f %.2f %.2f\n", v1, v2, v3);   /* 215.00 376.25 483.75 */
    printf("%.2f\n", total3(v1, v2, v3));     /* 1075.00              */
    return 0;
}
```

Check: 200 × 1.075 = 215.00; 350 × 1.075 = 376.25; 450 × 1.075 = 483.75; total 1075.00. When the rate changes, **one line** changes — the course's **"prevents the duplication of codes"** and **"change the implementation of a method without breaking other parts of the code"** in one stroke. The other stated benefit: functions let you **scale a project up**, because a small project that becomes complex needs only **more functions** and **the system remains stable**.

**(b) The four parts of a function definition**, pointed at `double withVat(double price) { return price * 1.075; }`: **return type** — `double`, **the data type of the value the function returns**, which **can also be `void`**; **function name** — `withVat`, the actual name; **parameters** — `double price`, and **a parameter is like a placeholder; when a function is invoked, a value is passed to the parameter**, and **a function may contain no parameters**; **function body** — the braces and what is inside them, **a collection of statements that define what the function does**. Header + body = the definition.

**(c) Declaration vs definition; parameter vs argument.** The **declaration** tells the **compiler** the **name, return type and parameters**, has **no body**, and ends in a semicolon — the two lines at the top above. The **definition** provides **the actual body** and consists of **a function header and a function body**. One definition, as many declarations as you like. The **parameter** is the **placeholder in the header**, written once — `price`. The **argument** is the **actual value passed at the call** — `p1`, then `p2`, then `p3`, a different one on each of the three calls, all binding to the same parameter **by position**.

**(d) The two mechanisms, and which abstraction a header file delivers.** **Access specifiers** — `public` and `private`, applied to **the properties and functions of an object**, whose job is to **restrict the access of other programmes to only some of them** — and **header files**, which let you **use functions from them without having any knowledge of how the function is implemented**. A header file delivers **functional abstraction**: `#include <stdio.h>` gives you the *declaration* of `printf` — its name, the format of its input, the format of its output — and nothing about how `printf` is written. **[Week 8]**

**35.** *Concept: `if-else-if` ordering, range tests, De Morgan, and the two kinds of branching.*

**(a) The traces, and the bug.** `age = 17`: `17 >= 13` is 1 and `17 <= 19` is 1, so `1 && 1` is 1 — **`teen` prints and both remaining branches are skipped**. `age = 10`: the first condition is false, so control reaches `else if (age <= 25)`; `10 <= 25` is **true**, so it prints **`young adult`**. That is the bug — a ten-year-old is classified as a young adult.

**(b) The rule, and the repair.** In an `if-else-if` chain the conditions are tested **top to bottom and the first true one wins**; every later condition is read **in the context of all the earlier ones having failed**. The second condition here was written assuming the first had already removed everything below 13, but the first removes only 13–19, not 0–12. The order of the branches is therefore part of the logic. The repair states the lower bound explicitly:

```c
if (age < 13)
    printf("child\n");
else if (age <= 19)
    printf("teen\n");
else if (age <= 25)
    printf("young adult\n");
else
    printf("adult\n");
```

**(c) Why `age >= 13 && age <= 19` and not `13 <= age <= 19`.** C has **no chained comparison**. `13 <= age <= 19` groups as `(13 <= age) <= 19`, and the first comparison collapses to **1 or 0**, both of which are `<= 19` — so the test is **always true**. A range test needs `&&` precisely because the comparison is an expression with a value, not a question the machine asks.

**(d) De Morgan, and the two branchings.** `!(age >= 13 && age <= 19)` is **`age < 13 || age > 19`** — the negation flips the **operator** as well as the operands (`!(a && b)` is `!a || !b`), and negating a relational operator moves the boundary with it: the negation of `>=` is `<`, and of `<=` is `>`. **Unconditional branching** moves program control to another statement or block **without checking any condition at all**; the course's example is **`goto`**. **Conditional branching** moves control **depending on whether some predetermined conditions are satisfied**, and is **also known as decision making or selection**; its statements are **`if`, `if-else`, `if-else-if`** and **`switch`**, with which **one code block among many alternatives** is executed. **[Week 9]**

**36.** *Concept: one algorithm, two representations — the flowchart/pseudocode correspondence and the definitions that differ by one word.*

**(a) The pseudocode.**

```
START
    SET count TO 0
    SET above TO 0
    PROMPT "Enter a number, or 0 to finish"
    READ num
    WHILE num <> 0
        SET count TO count + 1
        IF num > 100 THEN
            SET above TO above + 1
        ENDIF
        PROMPT "Enter a number, or 0 to finish"
        READ num
    ENDWHILE
    PRINT above, " of ", count, " numbers were above 100"
STOP
```

The second `READ` sits at the **bottom of the body**, so the sentinel is neither counted nor compared; the loop is a pre-test WHILE, so entering 0 first exits with `above = 0`. Keywords are capitalised, one statement per line, no language-specific syntax, and every construct is indented and closed — the four rules.

**(b) The four correspondences.** A flowchart **diamond** ↔ pseudocode's **`IF … THEN … ELSE`** (or the test of a loop); a **back-arrow** to a box already visited ↔ **`WHILE`** or **`REPEAT-UNTIL`**; a **parallelogram** ↔ **`READ`** or **`PRINT`**; a **rectangle** ↔ an **assignment**. Indentation does in pseudocode what arrows do in a flowchart.

**(c) No new algorithm comes into existence at any of the three points.** The **algorithm** is the **step-by-step procedure for solving the problem**, and it **can be expressed in any language — natural language, programming code or mathematical symbol**. The flowchart is its **graphical representation** and the pseudocode its **textual representation**: one algorithm, two notations, and converting between them changes only the notation. Coding it in C does not create a new algorithm either — it creates a **program**, **a series of instructions that causes a computer or a microcontroller to perform a particular task**. A new algorithm would exist only if the **steps or their order** changed. Note that **no compiler accepts either representation**: pseudocode is **not meant to be executed as the actual code; it just clearly describes the flow and logic of an algorithm**.

**(d) The two definitions and the word.** A **flowchart** is **a graphical representation of the sequence of operations in a computer program; or the graphical representation of an algorithm.** A **pseudocode** is **a textual representation of the sequence of operations in a computer program; or the textual representation of an algorithm.** The word is **graphical** versus **textual**, and Pseudocodes I's mid-lesson question consists of nothing but swapping it.

**(e) One advantage each.** Pseudocode: **no special software is needed** — it can be written with any text editor, and it is **easily modified**, with no redraw; against the flowchart's stated disadvantage that **adjustments might be complicated and might even require that a new flowchart is drawn**. Flowchart: it is **visual**, and it lets you **ascertain if the logic of the program works or not** at a glance; against pseudocode's stated disadvantages that it is **not visual** and **takes a longer time to read and understand**. **[Weeks 5 and 6]**

## What to revise

| Week | Topic | Questions | What to re-read |
|---|---|---|---|
| **Week 5** | Flowcharts I and II — the definition, every symbol by function, the rules of flow, the four types, principles, advantages and disadvantages | **1, 2, 3, 4, 5, 6, 31, 36 (b, d, e)** | The definition word for word, then the symbol table by **function** rather than shape — terminator, process/action, decision/control, input-output/data, flowline, on-page vs link connector, predefined process, preparation, document, database, summing junction, merge, comment. Then the *Commonly confused* pairs: parallelogram vs rectangle, decision vs process, terminator vs connector, merge/summing junction vs decision, loop vs selection, workflow vs swimlane, process vs data flowchart. Re-trace the five-number loop chart and say why it is exactly five. Learn the four principles, three advantages and three disadvantages as lists. |
| **Week 6** | Pseudocodes I and II — the definition, the four rules, the eight constructs, the seven steps, the worked solution and its faults | **7, 8, 9, 10, 11, 12, 32, 36 (a, b, c, d, e)** | The definition word for word (the one word that separates it from Week 5) and both mid-lesson questions. The four rules and the failure each one prevents. The eight construct skeletons with their **closing keywords**, and the SEQUENCE verb list. The seven steps in order, and what the header must contain. The three loop counts cold: `FOR i = a TO b` runs `b − a + 1` times, WHILE runs 0 or more, REPEAT-UNTIL 1 or more. Then the four faults in the deck's printed solution, and the initialise-inside-the-loop bug. |
| **Week 7** | Data types, variables and operators; programme objects — structures, unions and classes | **13, 14, 15, 16, 17, 18, 33** | The definitions of programme, data type and operator, and the three basic C types. Variable definition vs declaration vs initialisation, the legal-name rules, and "variable names are not stored inside the computer memory". The six operator categories with the **result type** of each, the precedence and associativity order, and short-circuit. Re-do `20 - 6 / 2 * 3` and the mixed-category evaluation. Integer division, and the three casts that fix it against the one that does not. State and behaviour = variables and methods; then struct vs union vs class, and the four reasons for programme objects. |
| **Week 8** | Abstraction concepts; functions and modules | **19, 20, 21, 22, 23, 24, 34** | The abstraction definition word for word, the two types side by side, the two mechanisms (access specifiers, header files) and the four stated benefits. Then the argument for decomposition, and the function quartet: declaration, definition, the four parts of a definition, and the call. Parameter vs argument, returning vs printing, `void` vs `return 0`, local vs global and shadowing. The hello-world programme line by line, the escape sequences, and `import m` vs `from m import f`. |
| **Week 9** | Statements, blocks and branching — Booleans, precedence, short-circuit, control constructs | **25, 26, 27, 28, 29, 30, 35** | The simple-statement and block definitions word for word, and why blocks exist. Truth as "not zero", and why `if (x == true)` is wrong. The relational and logical operators, the truth tables, De Morgan, and negating a relational operator. The precedence table, `0 < x < 10`, and `a == 0 \|\| b == 0 && c == 0`. Short-circuit as a **guarantee**, including skipped side effects. Then each construct and exactly when it is entered — `if`, `if-else`, `if-else-if` (first true wins), `switch` and fall-through, `while` vs `do-while`, `for` and `i < n` vs `i <= n` — plus the brace traps: missing braces, the dangling `else`, the stray semicolon. |

**Coverage.** The 36 questions are spread evenly: **Week 5 — 7** (1–6, 31, plus part of 36), **Week 6 — 7** (7–12, 32, plus part of 36), **Week 7 — 7** (13–18, 33), **Week 8 — 7** (19–24, 34), **Week 9 — 7** (25–30, 35), with **36** shared between Weeks 5 and 6. A weak row in the table is therefore a weak week, not an unlucky question: three or more wrong in any row means re-reading that week's summary in full, starting with its *Commonly confused* table, which is where most of these distractors came from. Two habits carry across all five weeks and are worth checking separately if you dropped marks in several rows at once — **boundary conditions** (`hours >= 5`, `passes > 7`, `count < 4`, `age >= 13`, `i < n`) and **where a variable is initialised or tested relative to a loop**.
