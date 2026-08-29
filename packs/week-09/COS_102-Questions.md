# COS_102 — Week 9 Questions

*Statements, blocks, Booleans and branching — programme control, `goto`, the decision-making statements and the three loops; sat seven days later as a retention test, so recall the lecturer's own definitions and apply them.*

## Multiple choice

**1.** The deck states that Boolean values are returned as integers, with 1 — or any other number that is not 0 — representing true and 0 representing false. Which conclusion follows from that, and from nothing more?
A. A condition is true only when its value is exactly 1, so any other value makes it false
B. A condition may only be written with a relational operator, since only a comparison produces an integer for the `if` to test
C. A condition is true whenever its value is not 0
D. A `bool` variable is just an `int`, so it may hold any whole number and `if (flag == 5)` is an ordinary way to test one

**2.** Which pair of facts is the deck's definition of a **simple statement**?
A. It contains only one expression, and it ends with a semicolon
B. It contains only one expression, and it ends at the end of the line it is written on
C. It contains any number of expressions, and it ends with a semicolon
D. It contains any number of expressions, and it is closed by a right curly bracket

**3.** Which statement about a **block** is exactly what the deck says?
A. A block contains exactly one statement inside curly brackets, and the right curly bracket takes a semicolon
B. A block is any group of statements written at the same indentation, whether or not curly brackets are present
C. A block contains more than one statement inside curly brackets, and the right curly bracket must be followed by a semicolon of its own, just as a simple statement is
D. A block contains more than one statement inside curly brackets, and the right curly bracket does not have a semicolon after it

**4.** A student writes `if (score >= 50)` and then two indented `printf` lines with no curly brackets, and finds that the second message prints even when the score is 20. Which of the deck's own sentences explains it?
A. The compiler reads the indentation of the first statement only, so any later line written at that same depth is attached to the enclosing function instead of to the `if`
B. The group of statements inside a block are treated like a single statement — with no curly brackets there is no block, so the `if` governs only the next statement
C. A condition that is false leaves the `if` unfinished, so control runs on through the lines below it until a block ends
D. An `if` cannot suppress a `printf`; only assignments and loops may be placed under a condition

**5.** Why does the deck say we need blocks, and where does it say blocks are used?
A. Because a programme runs faster when its statements are grouped, and the deck names loops as the place to use them
B. Because the compiler needs the curly brackets in order to tell where each statement ends, and the deck names every statement in the language as a place where blocks are used
C. Because we need to treat solutions to smaller problems as single units, and the deck names functions, decision making statements and iterative statements
D. Because Booleans can only be tested inside curly brackets, and the deck names the decision making statements alone

**6.** What does the deck mean by **programme control**?
A. It is responsible for the sequential execution of a programme from one line to the next until it reaches the last line of the programme
B. It is the set of curly brackets that decides which statements belong together
C. It is the compiler's choice of which memory address each variable is given
D. It is the conversion of a Boolean value into an integer before the value is tested

**7.** Which pair of statements matches the deck's definitions of **unconditional** and **conditional** branching?
A. Unconditional branching is settled by the compiler before the programme runs and conditional branching only while it is running, which is why a `goto` costs nothing at run time and an `if` costs something
B. Unconditional branching is the ordinary movement from one line to the next, and conditional branching is any departure from it
C. Unconditional branching always moves control forwards in the file and conditional branching backwards, which is how loops are built
D. Unconditional branching moves control without checking any condition, `goto` being the deck's example; conditional branching moves it only if predetermined conditions are satisfied, and is also called decision making or selection

**8.** The deck states — on the *Conditional branching* slide and again on its SUMMARY slide — that "there are three types of decision making statements". Which of these is **not** one of the three it names?
A. `if`
B. `switch`
C. `if-else`
D. `if-else-if`

**9.** What does the deck say the `switch` statement lets us do?
A. Repeat one code block until a condition becomes false
B. Move program control without checking any condition at all
C. Execute one code block among many alternatives
D. Integrate more than two choices into the decision making process

**10.** On the deck's descriptions of `if`, `if-else` and `if-else-if`, which account is correct?
A. With `if`, control moves inside the block only if the condition is satisfied, or else the entire block is skipped; with `if-else`, one block or the other is entered
B. With `if`, the block runs at least once whatever the condition is, because the condition is tested at the end of the block rather than before it, exactly as in a `do-while`
C. With `if-else`, both of the blocks run when the condition is satisfied, and neither of them runs when the condition is not satisfied
D. With `if-else-if`, exactly two choices are integrated into the decision making process

**11.** A loop's condition is already false at the moment control first reaches the loop. What does a `while` do, and what does a `do-while` do?
A. Both run their bodies once, because a loop must always complete one full pass before it has anything at all to test against its condition
B. Both run their bodies zero times, because a false condition means there is nothing for either construct to do
C. The `while` runs its body once and the `do-while` runs it zero times
D. The `while` runs its body zero times and the `do-while` runs it once, since a `do-while` is guaranteed to execute at least once

**12.** Which account of the `for` loop matches the deck's?
A. All three parts of the header run once each, in the order they are written, and then the body repeats until something inside it interrupts the loop
B. The init step is executed first, and only once; then the condition is evaluated, and the body executes if it is true
C. The condition is evaluated first, then the init step runs, then the body
D. The body always executes once before the condition is evaluated for the first time

## Short answer

**13.** State the deck's definitions of a **simple statement** and of a **block**, including what happens at the right curly bracket. Then quote the property of a block that makes it usable by `if`, `while` and `for`, say why the deck says we need blocks at all, and use that property to explain precisely what this fragment prints when `score` is 30, and what it prints when `score` is 60.

```c
if (score >= 50)
    printf("Pass\n");
else
    printf("Fail\n");
    printf("Pass\n");
```

**14.** Explain what a **Boolean** is in the deck's terms, how a Boolean variable is declared in C and what values it may take, and what the deck says Boolean values are returned as. Say what the deck means by *"comparing values and variables"* and what such a comparison returns. Then define **programme control** and **branching** as the deck defines them, distinguish **unconditional** from **conditional** branching with the deck's example of each, and give the other two names the deck gives to conditional branching statements.

**15.** For each of `if`, `if-else`, `if-else-if`, `switch`, `while`, `do-while` and `for`, give the deck's own description and say when the body is entered. Then set out the deck's count of the decision-making statements, say which statement it teaches under *Conditional branching* without including it in that count, and explain why a student who learns the count and a student who learns the slides can disagree about the answer. Finally, write out the `while` skeleton exactly as the deck prints it and say what is wrong with it as C.

## Answers

**1. C** — *Concept: truth in C is "not zero".* The deck's sentence is *"Boolean values are returned as integers with; 1 (or any other number that is not 0) represents true, 0 represents false"*, and the parenthesis carries the whole rule: the test is against zero, not against 1. A drops that parenthesis and is the reasoning behind the bug `if (flag == true)`, which compares with 1 and so rejects every other non-zero value. B confuses where a value comes from with what makes it true — `if (n)` needs no comparison at all. D reads more into the sentence than it says: the deck states separately that a `bool` variable *"can only take the values true or false"*, so testing one against 5 is meaningless.

**2. A** — *Concept: the definition of a simple statement.* *"A simple statement contains only one expression and it ends with a semicolon."* Both halves matter, and the second is the one with consequences: the semicolon is the terminator, so layout does not end a statement, which is why the deck can ask *"Can we have more than one statement on a single line?"* B replaces the semicolon with the line ending, which is true of some other languages and false of C. C and D both drop the "only one expression" half, and D borrows the curly bracket from the definition of a block.

**3. D** — *Concept: the definition of a block, including the brace rule.* *"A block contains more than one statement contained inside curly brackets"*, and the deck adds explicitly that *"the right curly bracket does not have a semicolon after it."* C gets the first half right and then adds the semicolon the deck rules out — the commonest single error in writing a block. A miscounts the statements and repeats the semicolon error. B is the belief that indentation makes a block; the compiler reads curly brackets, and this is exactly the misunderstanding question 4 turns into a bug.

**4. B** — *Concept: a construct governs one statement, and only braces make several into one.* The deck's sentence is *"the group of statements inside a block are treated like a single statement by the computer."* That is the property that lets an `if` control more than one line — but it requires the curly brackets, because they are what make the block. Without them the `if` governs the single statement that follows it, and the second `printf` is simply the next statement of the programme. A treats indentation as syntax. C invents a run-on rule that no construct has. D invents a restriction on `printf`, which is an ordinary statement like any other.

**5. C** — *Concept: why blocks exist, and the three places the deck names.* Word for word: *"We need blocks because while trying to solve complex problems by breaking them into smaller ones, we need to treat solutions to the smaller problems as single units"*, so that *"solutions from different blocks can be seen as solutions to the smaller problems."* And: *"We use blocks when writing functions, decision making statements, and iterative statements."* A invents a speed argument and names only one of the three places. B gets the role of the brackets backwards — the semicolon ends a statement, the brackets group several. D invents a rule about Booleans and again names only one of the three.

**6. A** — *Concept: the definition of programme control.* *"In the C programming language, programme control is responsible for the sequential execution of a programme from one line to the next line until it reached the last line of the programme."* The definition is what makes branching intelligible: branching is the departure from that default. B describes blocks. C describes what the compiler does with variable names, which is a Week 7 matter. D describes how a condition's value is represented, not what moves through the programme.

**7. D** — *Concept: the two kinds of branching, in the deck's words.* *"With unconditional branching, some unconditional statements can move program control to either a specific statement or block without checking any condition"* — the deck's example is `goto`, and it notes that *"the 'goto' statement did not specify any condition before moving program control."* *"With conditional branching … where program control moves to is dependent on if some predetermined conditions are satisfied or not"*, and *"conditional branching statements are also known as decision making or selection statements."* A invents a compile-time/run-time split, and `goto` branches while the programme runs. B redefines ordinary sequential flow as branching, when the deck's whole point is that *branching* is the departure from it. C invents a rule about direction; nothing in the deck restricts which way a branch may go.

**8. B** — *Concept: the deck's own count, and where it does not hold.* The deck names the three as *"the 'if', 'if-else' and 'if-else-if' statements"*, and its SUMMARY slide repeats the same three. `switch` is therefore not one of the three — even though the very next slide of the same deck teaches `switch` under the heading *Conditional branching*. That inconsistency is in the course material, not in the question: the count says three, the slides teach four. Answer the count when a question quotes the count, and say in a written answer that `switch` is a conditional branching statement that the deck's own total leaves out.

**9. C** — *Concept: the deck's one sentence on `switch`.* *"With the switch statement, we can execute one code block among many alternatives."* That is all the deck says about `switch`, and it is what an examination can fairly ask. D is the deck's description of the **`if-else-if`** statement — *"more that two choices are integrated into the decision making process"* — which is close enough in meaning to be the sharpest distractor here, and wrong because it is attached to a different statement. A describes a loop. B describes unconditional branching, which is `goto`.

**10. A** — *Concept: the entry conditions of the three decision-making statements.* *"With the 'if' statement, program control will only move inside the 'if' block if some conditions are satisfied, or else, the entire block will be skipped."* And: *"With the 'if-else' statement, if some conditions are satisfied, program control will move inside the 'if' block, otherwise, it will move to the else statement block."* B describes a `do-while`, not an `if`. C would make the `else` pointless and contradicts *"otherwise"*. D misquotes the `if-else-if` slide, which says *more than* two choices are integrated, that being the whole reason the third form exists.

**11. D** — *Concept: where the test sits relative to the body.* The `while` slide says *"the loop iterates while the condition is true. When the condition becomes false, the program control passes to the line immediately following the loop"* — the test comes first, so a condition already false means no pass at all. The `do-while` slide says it *"works the same way as a while loop, except the fact that it is guaranteed to execute at least one time"* — the body runs, and only then is the condition consulted. C has the two constructs the right way round in the sentence and the wrong way round on the names, which is the classic swap. A applies the `do-while` rule to both, which would make a zero-pass loop impossible. B applies the `while` rule to both and loses the deck's one distinguishing sentence.

**12. B** — *Concept: the deck's account of `for`.* *"The init step is executed first, and only once. Next, the condition is evaluated. If it is true, the body of the loop is executed. If it is false, the body of the loop does not execute."* A has the initialisation right but discards the condition, which would make the loop unstoppable. C reverses the first two steps, so the condition would be tested on a variable that has not been set. D describes a `do-while`, and is the reason the deck states the order explicitly.

**13.** *Concept: simple statement, block, and the property that makes braces load-bearing.* **Simple statement:** *"A simple statement contains only one expression and it ends with a semicolon."* The semicolon is the terminator, which is why more than one statement may sit on one line and why one statement may be spread across several — the layout is not what ends it. **Block:** *"A block contains more than one statement contained inside curly brackets"*, and *"the right curly bracket does not have a semicolon after it"*, because the bracket itself closes the construct. **The property:** *"The group of statements inside a block are treated like a single statement by the computer."* That is exactly what `if`, `while` and `for` need, because each of them governs **one** statement; to put several under a condition or inside a loop you must first make them into one, and curly brackets are what does it. **Why we need blocks at all:** *"while trying to solve complex problems by breaking them into smaller ones, we need to treat solutions to the smaller problems as single units"*, so that *"solutions from different blocks can be seen as solutions to the smaller problems"* — the deck names functions, decision making statements and iterative statements as where they are used. **The fragment.** There are no curly brackets, so no block has been made. The `else` governs the single statement `printf("Fail\n");`, which ends at its semicolon — and the `else` ends with it. The final `printf("Pass\n");` is therefore not part of the `else` at all; it is simply the next statement of the programme and runs every time. With `score = 30` the condition is false, control moves to the `else`, `Fail` prints, and then the next statement prints `Pass` — the output is `Fail` then `Pass`. With `score = 60` the condition is true, `Pass` prints from the `if`, the `else` is skipped, and the next statement prints `Pass` again — the output is `Pass` then `Pass`. The indentation says otherwise and the compiler cannot see it. The repair is to make a block: `else { printf("Fail\n"); printf("Pass\n"); }` if both lines belong to the `else`, or to unindent the last line if it was always meant to run. The habit worth forming is to write the brackets even for one statement, because the fault only appears when a second statement is added later and it is invisible on the page.

**14.** *Concept: Booleans, comparison, programme control and the two kinds of branching.* **Booleans.** *"Booleans represent values that are either true or false."* In C, *"a Boolean variable is declared with the `bool` keyword and it can only take the values true or false."* But the examinable sentence is the next one: *"It is noteworthy that Boolean values are returned as integers with; 1 (or any other number that is not 0) represents true, 0 represents false."* So truth in C is a numeric property — zero is false and everything else is true — and that is why a Boolean can be printed, stored in an `int` or used in arithmetic. **Comparing values and variables.** *"To make decisions and find answers in programming, it is sometimes useful to compare values and variables. When this comparison activity takes place, the return value is usually a Boolean value."* A comparison is therefore not a question the machine asks; it is an expression that *has* a value, and by the previous sentence that value arrives as the integer 1 or 0. **Programme control.** *"In the C programming language, programme control is responsible for the sequential execution of a programme from one line to the next line until it reached the last line of the programme"*, and *"for some problem solving application, we want to alter this flow of operation to ensure that programme control moves to either a specific statement or block in our code."* **Branching.** *"Branching basically means that the computer can decide to move program control to another line of code instead of the usual movement from one line to the next line."* **Unconditional:** *"some unconditional statements can move program control to either a specific statement or block without checking any condition"*; the deck's example is the **`goto`** statement, and it points out that *"the 'goto' statement did not specify any condition before moving program control."* **Conditional:** *"the normal flow of operation in our code is also altered but where program control moves to is dependent on if some predetermined conditions are satisfied or not"*; the deck's examples are `if`, `if-else` and `if-else-if`, and it teaches `switch` under the same heading. **The other two names:** conditional branching statements *"are also known as decision making or selection statements."*

**15.** *Concept: the seven constructs, the deck's count, and the deck's printed skeleton.* **`if`** — *"program control will only move inside the 'if' block if some conditions are satisfied, or else, the entire block will be skipped."* The body is entered once when the condition is satisfied and not at all otherwise. **`if-else`** — *"if some conditions are satisfied, program control will move inside the 'if' block, otherwise, it will move to the else statement block."* One of the two blocks is always entered, and never both. **`if-else-if`** — *"more that two choices are integrated into the decision making process."* Control enters the branch whose condition is satisfied; with three or more choices written as a chain, one branch is taken. **`switch`** — *"we can execute one code block among many alternatives."* Control enters the block belonging to the alternative that matches. **`while`** — *"the loop iterates while the condition is true. When the condition becomes false, the program control passes to the line immediately following the loop."* The condition is tested before the body, so a condition false at the outset means the body is never entered. The deck adds that *"the condition may be any expression, and true is any nonzero value."* **`do-while`** — *"works the same way as a while loop, except the fact that it is guaranteed to execute at least one time."* The body is entered before the condition is ever consulted. **`for`** — *"the init step is executed first, and only once. Next, the condition is evaluated. If it is true, the body of the loop is executed. If it is false, the body of the loop does not execute."* So the body may be entered zero times. **The count, and what it leaves out.** The deck says, on the *Conditional branching* slide and again in its SUMMARY, that *"there are three types of decision making statements. The three statements are the 'if', 'if-else' and 'if-else-if' statements."* It then teaches **`switch`** on the following slides, under that same heading *Conditional branching*, describing it as executing *"one code block among many alternatives"*. So the deck both excludes `switch` from the count and presents it as a conditional branching statement. A student who memorised the SUMMARY answers "three, and `switch` is not one of them"; a student who worked through the slides answers "four kinds of conditional branching, `switch` among them". Both are reading the deck correctly; the deck disagrees with itself. In an examination, answer the count when the question quotes the count, and add the sentence that `switch` is taught as a conditional branching statement even though the stated total of three does not include it. **The `while` skeleton as the deck prints it:**

```c
While (condition) {
     statement(s);
}
```

The fault is the capital `W`. C is case-sensitive, and the keyword is `while`; `While` is read as an ordinary identifier, so the line will not compile as written. The body of the skeleton is correct — the condition in brackets, the statements inside curly brackets, and no semicolon after the right curly bracket, exactly as the definition of a block requires.
