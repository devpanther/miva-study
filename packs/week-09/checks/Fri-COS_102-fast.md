# Friday — COS_102 fast-hour check

*Code work only.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** A score of 85 must print A, 65 must print B and 55 must print C, but this prints C for all three. Which single change fixes it?

```c
if (score >= 50) printf("C");
else if (score >= 60) printf("B");
else if (score >= 70) printf("A");
else printf("F");
```
A. Change the first condition to `score >= 50 && score < 60`.
B. Replace every `else if` with a plain `if`.
C. Test the conditions in the order 70, then 60, then 50.
D. Change the final `else` to `else if (score < 50)`.

**10.** ```c
int i;
for (i = 0; i != 10; i += 3)
    printf("%d ", i);
```
This never stops. Which change makes it print exactly `0 3 6 9` and then end?
A. `for (i = 0; i > 10; i += 3)`
B. `for (i = 0; i < 10; i += 3)`
C. `for (i = 0; i != 9; i += 3)`
D. `for (i = 0; i != 10; i += 2)`

**11.** Which of these loops prints exactly `7 14 21 28 35` and nothing else?
A. `int m = 0; while (m < 40) { printf("%d ", m); m = m + 7; }`
B. `int m = 7; while (m < 40) { m = m + 7; printf("%d ", m); }`
C. `int m = 7; while (m <= 42) { printf("%d ", m); m = m + 7; }`
D. `int m = 7; while (m < 40) { printf("%d ", m); m = m + 7; }`

**12.** For n = 8, what does each of these fragments print?

```c
if (n > 0) printf("A");
if (n > 5) printf("B");
```

```c
if (n > 0) printf("A");
else if (n > 5) printf("B");
```
A. AB and A
B. AB and AB
C. A and A
D. AB and B

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

**9. C** — *Order of branches in an if-else-if chain.* In a chain the first true condition wins, so the widest test must come last. With `score >= 50` first, every score of 50 or more prints C and the later branches are never reached. Ordering the thresholds 70, then 60, then 50 makes each `else if` reachable only for the scores the earlier tests rejected.

Adding an upper bound to the first test leaves 85 printing B; plain ifs make 85 print C, B and A one after another; changing the final else changes nothing at all.

**10. B** — *Fixing a loop condition that never becomes false.* i takes 0, 3, 6, 9, 12 and so on, so it steps straight over 10 and `i != 10` is never false. Testing `i < 10` instead stops as soon as i passes 10: 0, 3, 6 and 9 are printed, then 12 < 10 fails.

`i > 10` is false at once and prints nothing; `i != 9` stops when i reaches 9 and prints only 0 3 6; stepping by 2 prints 0 2 4 6 8 and then stops at 10.

**11. D** — *Writing a while loop.* Start the variable at the first value wanted, 7, test that it is still under 40, print it, then add 7. The values printed are 7, 14, 21, 28 and 35, and the loop ends when m reaches 42.

Starting at 0 prints an extra 0 at the front; updating before the print skips 7 and prints 42 at the end; testing `m <= 42` lets 42 through as well.

**12. A** — *Separate ifs versus an if-else-if chain.* Two separate ifs are independent, so both conditions are tested: 8 > 0 prints A and 8 > 5 prints B, giving AB. In the chain at most one branch runs, so once 8 > 0 has printed A the `else if` is never tested: output A.

AB and AB assumes the chain runs both branches; A and A misses that the first fragment tests the second condition too; AB and B has the chain skipping the branch it actually takes. In that chain B can never print for any n, since every n > 5 is already greater than 0.
