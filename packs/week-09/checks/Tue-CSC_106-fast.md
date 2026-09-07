# Tuesday — CSC_106 fast-hour check

*PHP you can run: operators, conditionals, loops, functions, and PHP embedded in HTML.*
*12 questions, straight after the hour. Score out of 12.*

**1.** ```php
$count = 4;
$Count = 9;
echo $count . $Count;
```
What is printed?
A. 99
B. 49
C. 13
D. 44

**2.** ```php
echo 17 / 4 . " " . 17 % 4;
```
What is printed?
A. 4 1
B. 4.25 4
C. 4.25 1
D. 1 4.25

**3.** ```php
$stock = 3;
$sold = 0;
while ($stock > 0) {
    $stock -= 2;
    $sold++;
}
echo $sold . "," . $stock;
```
What is printed?
A. 2,-1
B. 1,1
C. 2,0
D. 3,0

**4.** ```php
$marks = [45, 72, 50, 39, 88];
$n = 0;
foreach ($marks as $m) {
    if ($m >= 50) { $n++; }
}
echo $n;
```
What is printed?
A. 2
B. 3
C. 4
D. 5

**5.** ```php
$score = 85;
if ($score >= 50) {
    echo "Pass";
} elseif ($score >= 70) {
    echo "Distinction";
} else {
    echo "Fail";
}
```
What is printed?
A. Distinction
B. PassDistinction
C. Pass
D. Fail

**6.** ```php
$n = 2;
switch ($n) {
    case 1: echo "one";
    case 2: echo "two";
    case 3: echo "three"; break;
    default: echo "other";
}
```
What is printed?
A. two
B. twothree
C. twothreeother
D. onetwothree

**7.** ```php
function area($w, $h = 2) {
    return $w * $h;
}
echo area(5) . " " . area(5, 3);
```
What is printed?
A. 10 15
B. 5 15
C. 10 10
D. 7 8

**8.** ```php
function tick() {
    static $n = 0;
    $n++;
    echo $n;
}
tick();
tick();
tick();
```
What is printed?
A. 111
B. 123
C. 012
D. 3

**9.** ```php
function s($n) {
    if ($n <= 0) { return 0; }
    return $n + s($n - 2);
}
echo s(7);
```
What is printed?
A. 28
B. 12
C. 16
D. 15

**10.** ```php
<ul>
<?php foreach (["Mon", "Tue"] as $d) { ?>
  <li><?php echo $d; ?></li>
<?php } ?>
</ul>
```
What markup does the browser receive?
A. `<ul><li>Mon</li><li>Tue</li></ul>`
B. `<ul><li>Mon Tue</li></ul>`
C. `<ul><li>$d</li><li>$d</li></ul>`
D. `<ul><li><?php echo $d; ?></li></ul>`

**11.** In PHP, what does the value NULL represent?
A. The boolean value false
B. The integer 0
C. An empty string
D. The absence of a value

**12.** In `function greet($name) { ... }` followed by `greet("Robert");`, which is the parameter and which is the argument?
A. $name is the parameter; "Robert" is the argument
B. "Robert" is the parameter; $name is the argument
C. Both are parameters; the argument is the return value
D. Both are arguments; the parameter is greet

---

## Answers

**1. B** — *Case-sensitive variable names.* PHP variable names are case-sensitive, so $count and $Count are two different variables holding 4 and 9. The dot joins them as text: 49.

99 assumes the second assignment overwrote the first; 13 reads the dot as addition; 44 assumes the second assignment was ignored.

**2. C** — *Division versus modulus.* / is ordinary division and gives 4.25; % is modulus and gives the remainder of 17 divided by 4, which is 1. Both bind tighter than the dot, so the pieces are joined as "4.25 1".

"4 1" treats / as whole-number division; "4.25 4" reads % as the divisor or the quotient rather than the remainder; "1 4.25" has the two operators the wrong way round.

**3. A** — *Tracing a while loop.* Pass 1: stock 3 > 0, so stock becomes 1 and sold 1. Pass 2: stock 1 > 0, so stock becomes -1 and sold 2. Now -1 > 0 is false and the loop ends: 2,-1.

1,1 stops as soon as stock drops below 2, but the test is only stock > 0; 2,0 assumes stock cannot go negative; 3,0 subtracts 1 each pass instead of 2.

**4. B** — *Counting with foreach and a condition.* foreach visits every element. The test $m >= 50 is true for 72, 50 and 88 and false for 45 and 39, so $n ends at 3.

2 treats the test as strictly greater than 50 and drops the 50; 4 excludes only the 39 and lets 45 through; 5 counts every element and ignores the condition.

**5. C** — *Order of tests in an if-elseif chain.* The conditions are tested in order and only the first true branch runs. 85 >= 50 is true, so "Pass" prints and the elseif is never examined, even though 85 >= 70 is also true. To award a distinction the >= 70 test must come first.

Distinction assumes the best match wins rather than the first; PassDistinction runs both branches as if they were separate ifs; Fail reads the chain backwards.

**6. B** — *Fall-through in a switch without break.* Execution enters at the matching case 2 and prints "two". There is no break there, so it falls through into case 3 and prints "three"; that case's break then exits the switch: twothree.

"two" assumes each case stops by itself; twothreeother forgets that the break after three leaves the switch before default; onetwothree starts at the top instead of at the matching case.

**7. A** — *Default parameter values and return.* area(5) supplies no second argument, so $h takes its default 2 and 5 * 2 = 10 is returned. area(5, 3) overrides the default: 5 * 3 = 15. Output: 10 15.

5 15 treats a missing argument as 1 or empty instead of using the default; 10 10 assumes the default cannot be overridden; 7 8 adds the values instead of multiplying them.

**8. B** — *Static variables keep their value across calls.* A static variable is initialised once and keeps its value between calls. The three calls take $n to 1, 2 and 3 and each echoes it: 123.

111 is what an ordinary local variable would give, reset to 0 on every call; 012 echoes before incrementing; 3 assumes only the final value is printed.

**9. C** — *Tracing a recursive function.* Each call adds $n and recurses with $n - 2: s(7) = 7 + s(5) = 7 + 5 + s(3) = 7 + 5 + 3 + s(1) = 7 + 5 + 3 + 1 + s(-1). s(-1) hits the base case and returns 0, so the total is 16.

28 adds every integer from 7 down to 1 instead of stepping by 2; 15 treats s(1) as the base case returning 0 and loses the 1; 12 stops after two terms.

**10. A** — *PHP embedded in HTML.* PHP runs on the server. The HTML between the closing `?>` of the loop's opening line and the `<?php }` is emitted once per pass, with `<?php echo $d; ?>` replaced by the value, so the browser receives an ordinary list of two items, Mon and Tue (whitespace aside).

One item reading Mon Tue merges the passes; `$d` literal forgets that echo prints the variable's value; the PHP tags themselves never reach the browser, only their output does.

**11. D** — *The NULL data type.* NULL is a data type of its own whose single value means that a variable has no value at all. It is what an unassigned or explicitly cleared variable holds.

false is a Boolean value; 0 is an Integer; "" is a String with no characters. Each is a real value of its type, whereas NULL says there is no value.

**12. A** — *Parameter versus argument.* A parameter is the placeholder named in the function definition, here $name. An argument is the actual value supplied when the function is called, here "Robert", which fills the parameter for that call.

The second option swaps the two terms; the third confuses the return value with the input; greet is the function's name, not an argument or a parameter.
