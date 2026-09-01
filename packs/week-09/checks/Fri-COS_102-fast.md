# Friday, second hour — COS_102 check

*Code work only, on this week's material: tracing `if-else`, `if-else-if`, `switch`, `while`, `do-while`, `for` and `goto` by hand and stating the exact output, counting loop passes and knowing what a control variable holds after the loop, counting statements on a line, and finding the two faults that compile in silence — `=` written for `==`, and several statements put under a construct with no curly brackets to make them a block. No definitions to recite — those were Wednesday.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** What is printed?

```c
int i, total = 0;
for (i = 1; i < 5; i++)
    total = total + i;
printf("%d %d\n", total, i);
```

A. 10 5
B. 10 4
C. 15 5
D. 15 6

**2.** What is printed?

```c
int x = 0;
if (x = 2)
    printf("A\n");
else
    printf("B\n");
printf("%d\n", x);
```

A. A then 2
B. B then 0
C. B then 2
D. A then 0

**3.** What is printed?

```c
int age = 22;
if (age >= 26)
    printf("adult\n");
else if (age >= 20)
    printf("young adult\n");
else if (age >= 13)
    printf("teen\n");
else
    printf("child\n");
```

A. teen
B. young adult
C. adult
D. young adult and then teen, since 22 also satisfies age >= 13

**4.** What is printed?

```c
int n = 10;
do {
    printf("%d ", n);
    n = n - 3;
} while (n > 10);
printf("| %d\n", n);
```

A. | 10
B. 10 7 4 1 | -2
C. 10 | 7
D. 10 | 10

**5.** What is printed?

```c
int i, s = 0;
for (i = 0; i < 3; i++)
    s = s + i;
    printf("%d ", s);
printf("\n");
```

A. 0 1 3 
B. 0 1 2 
C. 3 
D. 6 

**6.** What is printed?

```c
int day = 3;
switch (day) {
    case 1: printf("Mon"); break;
    case 2: printf("Tue"); break;
    case 3: printf("Wed"); break;
    default: printf("Other"); break;
}
```

A. Mon Tue Wed
B. Other
C. Wed Other
D. Wed

**7.** The deck asks how many statements are in a piece of code, and whether more than one statement can be written on a single line. How many statements is this line, and what settles the count?

```c
int a = 5; int b = 7; printf("%d\n", a + b);
```

A. One, because a statement is a line and this is a line
B. Three, because a simple statement contains only one expression and ends with a semicolon, and there are three semicolons
C. Two, because the two definitions together count as one statement and the printf is the other
D. None, because C requires statements to be written one per line

**8.** What is printed?

```c
int i = 0;
again:
    printf("%d ", i);
    i = i + 1;
    if (i < 3) goto again;
printf("| %d\n", i);
```

A. 0 1 2 3 | 4
B. 0 | 1
C. Nothing, because a goto may only move program control forwards
D. 0 1 2 | 3

**9. (explain why)** State the EXACT output of this programme, line for line. Then say how many times the INNER loop body runs in total, state the values i and j hold on the last line and explain precisely why each holds that value, and say what the total number of inner passes becomes if  j = i  is changed to  j = 1.

```c
#include <stdio.h>

int main(void)
{
    int i, j;
    for (i = 1; i <= 3; i++) {
        for (j = i; j <= 3; j++)
            printf("%d%d ", i, j);
        printf("\n");
    }
    printf("i=%d j=%d\n", i, j);
    return 0;
}
```

**10. (explain why)** This is meant to classify an age as teen (13 to 19), young adult (20 to 25) or adult (26 and over). State exactly what it prints for age = 17, for age = 22 and for age = 10, name the fault, explain it using the deck's description of the if-else-if statement, and give a corrected version that is right for all three ages and says something sensible for a child.

```c
#include <stdio.h>

int main(void)
{
    int age = 10;

    if (age >= 13)
        printf("teen\n");
    else if (age >= 20)
        printf("young adult\n");
    else
        printf("adult\n");

    return 0;
}
```

**11. (explain why)** This is meant to print Pass and Well done together when the score is 50 or more, and Fail on its own otherwise. State exactly what it prints for score = 30 and for score = 60, name the fault, quote the sentence from the deck that explains it, and give a corrected version. Then say why the compiler reports nothing.

```c
#include <stdio.h>

int main(void)
{
    int score = 30;

    if (score >= 50)
        printf("Pass\n");
        printf("Well done\n");
    else
        printf("Fail\n");

    return 0;
}
```

**12. (explain why)** Take this loop and answer four things. State exactly what it prints. State what a do-while with the same body and the same condition would print, and why. Rewrite the loop as a for, saying which part of the for header runs only once and when the condition is tested. Finally, say what each version prints if the initial value of n is changed to 7.

```c
int n = 1;
while (n <= 3)
{
    printf("%d ", n);
    n = n + 1;
}
printf("| %d\n", n);
```

---

## Answers

**1. A** — *Concept: A for with i < b runs b - a passes, and the control variable survives the loop holding the first value that FAILED the test.* The init step runs once, setting i to 1. The passes are i = 1, 2, 3 and 4, adding 1 + 2 + 3 + 4 = 10. After the pass with i = 4 the increment makes i 5, the condition 5 < 5 is false, so the body does not execute and control passes to the line after the loop with i still holding 5. Option (B) reports the last value USED in the body, forgetting that the loop only stops after an increment has produced a failing value. Option (C) adds 5 as well, which would need i <= 5.

**2. A** — *Concept: '=' assigns and its value is the value assigned, so if (x = 2) is always true and destroys x.* The condition is x = 2, not x == 2. It stores 2 in x, and the value of the whole condition is the value stored, 2. By the deck's rule a condition is true whenever its value is not 0, so 2 is true, the if block runs and A prints - and x has been changed to 2 on the way, which the last line shows. Option (B) reads the condition as a comparison and gets both halves wrong. Option (C) spots the side effect and then takes the wrong branch. Nothing here is rejected by the compiler: an assignment is an expression with a value, which is exactly why this typo survives.

**3. B** — *Concept: An if-else-if chain stops at the first satisfied condition; the later ones are never tested.* The conditions are tested top to bottom. 22 >= 26 is false, so control moves to the next test; 22 >= 20 is true, so 'young adult' prints - and the whole of the rest of the chain, including the third test and the final else, is skipped. Option (D) is the trap and it is a true observation put to the wrong use: 22 does satisfy age >= 13, but that condition is never evaluated, because with if-else-if the else is reached only when the preceding if was not satisfied. Option (A) is what you get by testing the conditions in the wrong order or by using three separate ifs, which is precisely the difference between a chain and a list. The order of the branches is part of the logic: each condition may quietly assume that every earlier one failed.

**4. C** — *Concept: A do-while tests AFTER the body, so it always runs at least once even when the condition is false from the outset.* The body runs before anything is tested: 10 is printed and n becomes 7. Only then is n > 10 evaluated, and 7 > 10 is false, so the loop ends with n holding 7. That is the deck's sentence in action - a do-while 'is guaranteed to execute at least one time'. Option (A) is what a while with the same condition would print, namely nothing, because a while tests first. Option (B) reads the condition as n > 0. Option (D) forgets that the body changed n before the test.

**5. C** — *Concept: A loop governs exactly one statement; without curly brackets the second line is not in the loop, and indentation is invisible to the compiler.* There are no curly brackets, so no block has been made, and the for governs the single statement that follows it - s = s + i. The loop therefore runs three times silently, accumulating 0 + 1 + 2 = 3. The printf is the next statement of the programme and runs once, after the loop has finished, printing 3. Option (A) is what the indentation suggests and what curly brackets would produce. Option (D) adds a fourth pass. This is the deck's block rule read the other way: 'the group of statements inside a block are treated like a single statement', so where there is no block there is only one statement under the loop.

**6. D** — *Concept: With the switch statement we execute one code block among many alternatives.* The deck's one sentence on switch is that 'with the switch statement, we can execute one code block among many alternatives'. Here day is 3, so the alternative labelled case 3 is the one executed and Wed is printed; each alternative is closed by break, which is what keeps the statement to the one block the deck describes. Option (B) is the default, which is the alternative used when none of the labels matches - and one does. Option (C) adds the default on top of a matching case, treating it as a closing step rather than as one alternative among the others. Option (A) runs every alternative, which is not what a selection statement does.

**7. B** — *Concept: The semicolon terminates a statement, so the layout does not decide the count.* 'A simple statement contains only one expression and it ends with a semicolon.' The semicolon is what ends a statement, so counting statements means counting terminators, and there are three here: the definition of a, the definition of b, and the call to printf. This is the deck's own question - 'Can we have more than one statement on a single line?' - and the answer is yes, for exactly this reason. Option (A) and option (D) both make the line ending do the semicolon's job, which is true of some other languages and false of C; the same rule read the other way is what lets a single long statement be spread over several lines. Option (C) invents a grouping that only curly brackets could create, and a block would still be one construct rather than one statement out of two.

**8. D** — *Concept: goto is unconditional branching; the condition here belongs to the if, not to the goto.* Trace it. i = 0: prints 0, i becomes 1, 1 < 3 is true so control jumps back to the label. i = 1: prints 1, i becomes 2, 2 < 3 is true, jump. i = 2: prints 2, i becomes 3, 3 < 3 is false, so no jump and control falls through to the last line with i holding 3. Output: 0 1 2 | 3. The deck's point about goto is that 'the goto statement did not specify any condition before moving program control' - and that is still true here: the goto itself tests nothing, and the testing is done by the if that governs it. That is the difference between the two kinds of branching side by side in three lines. Option (A) prints one value too many and exits with i one too high. Option (B) treats the jump as never taken. Option (C) invents a direction rule; nothing in the deck restricts which way a branch may go, and jumping backwards is how a goto produces repetition.

**9.** *Concept: Tracing nested loops, counting passes, and knowing what both control variables hold after the loops end.* THE OUTPUT, line for line:
11 12 13 
22 23 
33 
i=4 j=4
THE TRACE. The outer loop runs with i = 1, 2, 3. For each pass the inner loop starts at j = i and runs while j <= 3. With i = 1 the inner loop runs for j = 1, 2, 3, printing 11 12 13; then the printf("\n") inside the outer block ends the line. With i = 2 the inner loop starts at 2 and runs for j = 2, 3, printing 22 23. With i = 3 it runs once, for j = 3, printing 33. INNER PASSES IN TOTAL: 3 + 2 + 1 = 6. THE FINAL VALUES. i is 4 and j is 4. i is 4 because the outer loop ended when its condition first failed: after the pass with i = 3 the increment made i 4, and 4 <= 3 is false, so the loop stopped with i holding the first value that failed the test. j is 4 for the same reason, from its LAST run only: on the final outer pass the inner loop started at j = 3, ran once, and the increment made j 4, at which point 4 <= 3 failed. j is not reset afterwards, so it keeps the value it was left with, and it is visible on the last line because it was defined outside both loops. IF j = i BECOMES j = 1: every inner loop now runs for j = 1, 2, 3, so each of the three outer passes gives three inner passes and the total is 3 x 3 = 9 rather than 6. The output would become 11 12 13 / 21 22 23 / 31 32 33, and the final values would be unchanged at i = 4, j = 4, since neither loop's exit condition has been altered.

**10.** *Concept: In an if-else-if chain the first satisfied condition wins, so the order of the branches is part of the logic.* WHAT IT PRINTS. age = 17: 17 >= 13 is true, so 'teen' prints - correct, but by luck rather than by design. age = 22: 22 >= 13 is ALSO true, so 'teen' prints again and the second and third branches are never reached - wrong, it should be 'young adult'. age = 10: 10 >= 13 is false, so control moves to the next test; 10 >= 20 is false too, so the final else runs and 'adult' prints - wrong twice over, since a ten-year-old is neither an adult nor anything the programme was asked to classify. THE FAULT. The branches are in the wrong order, and the final else has been given to the wrong case. The deck's if-else-if slide says that with it 'more that two choices are integrated into the decision making process', and its if-else slide says control moves into the if block when the condition is satisfied and 'otherwise' to the else - so the chain is tested top to bottom and stops at the first condition that is satisfied, every later branch being skipped. That is what makes the order load-bearing: age >= 13 is satisfied by 22 and by 40 as well as by 17, so putting it first swallows every age above 12, and no later test can ever rescue them. Each condition in a chain is written to be read in the context of all the earlier ones having failed. Note also that the final else catches everything left over, which here is the ages BELOW 13 - the opposite of what it prints. THE REPAIR. Test the narrowest or highest band first, so that each later condition is reached only by the ages the earlier ones have already excluded, and give the else the case that really is left over:

    if (age >= 26)
        printf("adult\n");
    else if (age >= 20)
        printf("young adult\n");
    else if (age >= 13)
        printf("teen\n");
    else
        printf("child\n");

Now 17 reaches the third test and prints teen; 22 fails the first, passes the second and prints young adult; 10 fails all three and prints child. Each condition needs only its own lower bound, because everything above it has already been taken by an earlier branch - which is the economy an if-else-if chain buys, and the reason it cannot be reordered freely.

**11.** *Concept: A construct governs exactly one statement; only curly brackets make several into one.* WHAT IT DOES. As written this programme does not even reach the question of what it prints, and that is the first thing to say: the if governs the single statement printf("Pass\n");, which ends at its semicolon, so the if statement is complete before printf("Well done\n"); is reached. The else that follows then belongs to nothing - there is no if immediately before it - and the compiler reports an error on the else. If the else and its printf are deleted, the fault becomes the silent one this question is really about: the if governs the first printf only, and printf("Well done\n"); is simply the next statement of the programme. With score = 30 nothing prints from the if and 'Well done' prints anyway; with score = 60, 'Pass' prints and then 'Well done' prints - right by accident. THE FAULT: two statements have been put under an if without being made into a block. THE DECK'S SENTENCE: 'The group of statements inside a block are treated like a single statement by the computer.' That is the property an if depends on, because an if governs exactly one statement; curly brackets are what turn several statements into one, and the deck adds that 'a block contains more than one statement contained inside curly brackets' and that 'the right curly bracket does not have a semicolon after it'. Indentation does none of this work - the compiler does not read it. THE REPAIR:

    if (score >= 50) {
        printf("Pass\n");
        printf("Well done\n");
    }
    else
        printf("Fail\n");

Now score = 30 prints Fail alone and score = 60 prints Pass then Well done. WHY THE COMPILER IS SILENT - in the version without the else. Nothing there is ill-formed: an if with one statement under it is correct C, and a printf after it is correct C. The programme the compiler sees is exactly the programme it was given; what it cannot see is the programme that was INTENDED, and the indentation that expresses the intention is not part of the language. This is the reason for the habit of writing the curly brackets even when only one statement is under the if: the fault appears the day a second statement is added, and it is invisible on the page.

**12.** *Concept: Where the test sits, and what the control variable holds when the loop ends.* WHAT THE WHILE PRINTS: 1 2 3 | 4. The condition is tested before each pass. n = 1: 1 <= 3 is true, prints 1, n becomes 2. n = 2: prints 2, n becomes 3. n = 3: prints 3, n becomes 4. Now 4 <= 3 is false, so - in the deck's words - 'the program control passes to the line immediately following the loop', which prints | 4. The loop variable is left holding the first value that failed the test, which is why it is 4 and not 3. THE DO-WHILE. Written as do { printf("%d ", n); n = n + 1; } while (n <= 3); with n starting at 1, the output is identical: 1 2 3 | 4. The reason it is identical is that the condition is true at the outset, so the one difference between the constructs never shows - the deck defines do-while entirely by its exception, that it 'is guaranteed to execute at least one time', and a guarantee of at least one pass changes nothing when a pass was going to happen anyway. AS A FOR: for (n = 1; n <= 3; n = n + 1) printf("%d ", n); The init step, n = 1, 'is executed first, and only once'. Then the condition is evaluated; if it is true the body executes, and if it is false 'the body of the loop does not execute'. After each pass the increment runs and the condition is tested again - so the test happens before every pass, exactly as in the while, which is why the two produce the same output and leave n at 4. WITH n STARTING AT 7. The while prints nothing at all and then | 7: 7 <= 3 is false at the very first test, so the body is never entered and n is never changed. The for behaves the same way, for the same reason - the init sets n to 7, the condition fails immediately, and the body does not execute. The do-while prints 7 | 8: its body runs before anything is tested, so 7 is printed and n becomes 8, and only then does the condition fail. That single case is the whole difference between the two loops, and it is why the deck's sentence about the guaranteed pass is the only thing it says to separate them.
