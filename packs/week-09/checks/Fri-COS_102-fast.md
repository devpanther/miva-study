# Friday — COS_102 fast-hour check

*Code work only.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** ```c
int x = 3;
if (x = 0) printf("zero"); else printf("nonzero");
printf(" %d", x);
```
What is printed?
A. nonzero 3
B. zero 3
C. nonzero 0
D. zero 0

**2.** ```c
int n = 2;
if (n > 5)
    printf("big ");
    printf("done ");
printf("%d", n);
```
What is printed?
A. done 2
B. 2
C. big done 2
D. big 2

**3.** ```c
int g = 2;
switch (g) {
    case 1: printf("one ");
    case 2: printf("two ");
    case 3: printf("three "); break;
    default: printf("other ");
}
```
What is printed?
A. two
B. one two three
C. two three other
D. two three

**4.** ```c
int i, s = 0;
for (i = 1; i <= 4; i++) s = s + i * i;
printf("%d %d", s, i);
```
What is printed?
A. 30 4
B. 30 5
C. 14 4
D. 14 5

**5.** ```c
int n = 20, c = 0;
while (n > 1) { n = n / 2; c++; }
printf("%d %d", n, c);
```
What is printed?
A. 0 5
B. 1 5
C. 2 3
D. 1 4

**6.** ```c
int k = 1;
do { printf("%d ", k); k = k * 3; } while (k < 20);
```
What is printed?
A. 1 3 9
B. 1 3 9 27
C. 3 9 27
D. 1 3

**7.** Which condition is true exactly when x lies between 10 and 20 inclusive?
A. `10 <= x <= 20`
B. `x >= 10 && x <= 20`
C. `x >= 10 || x <= 20`
D. `x > 10 && x < 20`

**8.** Conditional branching statements such as if and if-else are also known by which two names?
A. Iterative or loop statements
B. Unconditional or jump statements
C. Decision making or selection statements
D. Simple or compound statements

**9. (show your working)** Write a C `if-else-if` chain that prints A for a score of 70 or more, B for 60 to 69, C for 50 to 59 and F otherwise, and state what it prints for a score of 65. Then say why the order of the branches matters.

**10. (show your working)** ```c
int i;
for (i = 0; i != 10; i += 3)
    printf("%d ", i);
```
This loop never stops. Explain why, list the first four values printed, and change the condition so that the loop prints 0 3 6 9 and then ends. Show your working.

**11. (show your working)** Write a `while` loop in C that prints the multiples of 7 that are less than 40, each on its own line, and state the output. Your answer must show the starting value, the condition and the update.

**12. (show your working)** ```c
if (n > 0) printf("A");
if (n > 5) printf("B");
```
and
```c
if (n > 0) printf("A");
else if (n > 5) printf("B");
```
For n = 8, say what each fragment prints and explain why two separate ifs and an if-else-if chain behave differently.

---

## Answers

**1. C** — *Assignment written for comparison.* `x = 0` is an assignment, not a test: it stores 0 in x and its value is the value stored, 0. 0 is false, so the else branch prints nonzero. x is now 0, so the second printf prints 0. Output: nonzero 0.

nonzero 3 reads `=` as `==` and compares 3 with 0; zero 3 assumes the if branch runs and x is untouched; zero 0 sees the assignment but treats its value 0 as true.

**2. A** — *An if without braces governs one statement.* With no braces the `if` governs only the next statement, `printf("big ")`. The condition 2 > 5 is false, so that one printf is skipped. `printf("done ")` is the next statement of the program, indented or not, and runs, then n is printed. Output: done 2.

2 treats both indented lines as belonging to the if; big done 2 takes the condition as true; big 2 runs the wrong one of the two.

**3. D** — *Fall-through in a switch.* Control jumps to the matching label `case 2` and then runs on through the cases that follow until it meets a break: two is printed, then three, then the break leaves the switch. Output: two three.

two assumes each case ends by itself, as in an if-else-if; one two three starts from the top instead of jumping to the match; two three other ignores the break and falls into default.

**4. B** — *Tracing a for loop with an accumulator.* The body runs for i = 1, 2, 3, 4, adding 1, 4, 9, 16: s = 30. After the pass with i = 4 the increment makes i = 5, the test 5 <= 4 fails, and the loop ends, so i is 5 when printed. Output: 30 5.

30 4 forgets the final increment that ended the loop; 14 4 treats `<=` as `<` and stops before i = 4; 14 5 mixes the two mistakes.

**5. D** — *Tracing a while loop with integer division.* n goes 20, 10, 5, 2, 1 with integer division (5 / 2 is 2), and c counts each halving: 4 passes. Then 1 > 1 is false and the loop stops. Output: 1 4.

0 5 keeps halving once more, but the test fails at n = 1; 1 5 counts the failed test as a pass; 2 3 stops one pass early, as if the condition were n > 2.

**6. A** — *Tracing a do-while loop.* The body runs before the first test. Pass 1 prints 1 and k becomes 3; 3 < 20 so pass 2 prints 3, k = 9; 9 < 20 so pass 3 prints 9, k = 27; 27 < 20 is false and the loop ends. Output: 1 3 9.

1 3 9 27 prints k after the test has already failed; 3 9 27 multiplies before printing, as if the two statements were swapped; 1 3 stops when k first reaches 9, testing against the new value one pass too early.

**7. B** — *Writing a range test.* A range test needs two comparisons joined by `&&`: both must hold. `x >= 10 && x <= 20` is true for 10, 20 and everything between, and false elsewhere.

`10 <= x <= 20` groups as `(10 <= x) <= 20`, which compares 1 or 0 with 20 and is always true; `||` is true for every x, since any number satisfies at least one side; `>` and `<` exclude the endpoints 10 and 20.

**8. C** — *Names for conditional branching.* Conditional branching moves control depending on whether a condition is satisfied, and such statements are also called decision making or selection statements.

Iterative statements are the loops; unconditional branching is goto, which checks no condition; simple and compound describe the form of a statement, not what it decides.

**9.** *Writing an if-else-if chain.* ```c
if (score >= 70)
    printf("A");
else if (score >= 60)
    printf("B");
else if (score >= 50)
    printf("C");
else
    printf("F");
```

For 65: 65 >= 70 is false, 65 >= 60 is true, so it prints B and the rest is skipped. The order matters because the first true condition wins: each `else if` is reached only when every earlier condition failed, so `score >= 60` can be written without an upper bound. Reversed, with `score >= 50` first, every score of 50 or more would print C. A correct answer has the three thresholds in descending order (or explicit ranges such as `score >= 60 && score <= 69`), a final bare else for F, gives B for 65, and explains first-true-wins. Four separate `if`s without else print several letters for one score and are wrong.

**10.** *Fixing a loop condition that never becomes false.* i starts at 0 and steps by 3: 0, 3, 6, 9, 12, 15, and so on. It never equals 10, so `i != 10` is never false and the loop runs on. The first four values printed are 0 3 6 9. Fix: `for (i = 0; i < 10; i += 3)`. Now 0, 3, 6 and 9 are printed, then i becomes 12, 12 < 10 is false, and the loop ends.

A correct answer says i skips over 10, lists 0 3 6 9, and replaces `!=` with `<` (also accepted: `i <= 9`). Changing the step to `i += 2` or the start to 1 changes which numbers print and does not answer the question.

**11.** *Writing a while loop.* ```c
int m = 7;
while (m < 40) {
    printf("%d\n", m);
    m = m + 7;
}
```

m goes 7, 14, 21, 28, 35, each printed; then m = 42, 42 < 40 is false, and the loop ends. Output: 7 14 21 28 35 on separate lines. A correct answer initialises a variable to 7 (or a counter to 1 and prints 7 * counter), tests `< 40`, prints inside the loop, and adds 7 (or 1 to the counter) inside the loop. A missing update gives an infinite loop; `<= 40` here prints the same values but `m <= 42` or starting at 0 prints an extra value and is wrong.

**12.** *Separate ifs versus an if-else-if chain.* First fragment: the two ifs are independent, so both conditions are tested. 8 > 0 prints A and 8 > 5 prints B: output AB. Second fragment: an if-else-if runs at most one branch. 8 > 0 is true, A is printed, and the `else if` is never tested even though 8 > 5 is also true: output A.

A correct answer gives AB and A and states that separate ifs can both fire while a chain stops at the first true condition. It may add that in the chain the B branch can never run for any n, since every n > 5 is also > 0, so the order of the branches is wrong for that purpose.
