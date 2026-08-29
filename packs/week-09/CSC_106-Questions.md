# CSC_106 — Week 9 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 10, not this week. Notes closed.*

## Section A - Multiple choice (12)

**1.** A student inspects a live page in the browser using "View source" and cannot find any of the PHP code the developer wrote. What does this demonstrate about PHP?

a) The PHP was minified, so it is present but unreadable
b) PHP is a server-side scripting language — it executes on the web server and only its output is sent to the browser
c) The browser has PHP support disabled, so the code was stripped out
d) PHP only runs when the page is submitted through a form, so it had not yet executed

**2.** Which of the following is a **valid** PHP variable declaration according to the lecture's naming rules?

a) `$2ndPlace = "silver";`
b) `%total = 100;`
c) `$_userName = "ada";`
d) `$user-name = "ada";`

**3.** A script sets `$Score = 80;` on one line and later reads `$score` in an if statement, which behaves as though it is empty. Why?

a) PHP variables must be declared with a data type before use
b) PHP variable names are case-sensitive, so `$Score` and `$score` are two different variables
c) Integers cannot be used inside conditional statements without conversion
d) A variable assigned outside a function cannot be read inside an `if` block

**4.** Which pairing of PHP data type to its stated purpose is correct?

a) Float is used for whole numbers, and Integer for decimal numbers
b) NULL is used for the boolean value false, and Boolean for missing data
c) Array is used to store collections of data, and Object is used to create custom data types
d) String is used for objects, and Object is used for text data

**5.** `$a = 23; $b = 5;` — which expression yields **3**?

a) `$a / $b`
b) `$a % $b`
c) `$a . $b`
d) `$a -= $b`

**6.** A developer writes `$message = "Order total: " + $amount;` and gets the wrong result. What is the correct PHP?

a) `$message = "Order total: " . $amount;` — the dot is PHP's concatenation operator for joining strings
b) `$message = "Order total: " && $amount;` — `&&` joins two values
c) `$message = "Order total: " ++ $amount;` — `++` appends
d) The original is correct; the fault must be in `$amount`

**7.** A grading script must print one of four messages depending on which band `$score` falls into. Which construct does the lecture describe for testing multiple conditions in sequence?

a) A chain of separate `if` statements, since `else` can only be used once
b) `elseif` — if the initial `if` condition is false, PHP evaluates the elseif conditions until it finds one that is true, then executes that block
c) The ternary operator, since it is the only construct that handles more than two outcomes
d) A `while` loop that re-tests the score until a band matches

**8.** In a PHP `switch` statement, what is the role of the `break` keyword?

a) It skips the current case and forces the next case to be evaluated
b) It exits the switch statement after a match is found
c) It marks the default case when no other value matches
d) It terminates the whole script once the switch has been evaluated

**9.** What does the ternary operator `? :` provide, according to the lecture?

a) A way to compare a single value against many possible values
b) A concise way to write conditional statements, often used for simple if-else scenarios, whose result can be stored in a variable
c) A loop that runs exactly three times
d) A way to declare a function with three parameters

**10.** A function is defined as `function greet($name = "Guest") { echo "Hello, " . $name; }`. What happens when it is called as `greet();` and then as `greet("Robert");`?

a) `greet()` raises an error because a required argument is missing; `greet("Robert")` prints "Hello, Robert"
b) `greet()` prints "Hello, Guest" because the default value is used when no argument is provided; `greet("Robert")` prints "Hello, Robert" because the provided value overrides the default
c) Both calls print "Hello, Guest", since a default value cannot be overridden
d) Both calls print "Hello, Robert", since PHP reuses the most recent argument

**11.** A page-hit function must remember how many times it has been called during a single script run, but the counter must not be reachable from anywhere else in the script. Which variable scope does the lecture name?

a) A local variable, because it is defined inside the function
b) A global variable, because it must survive between calls
c) A static variable, because static variables retain their values across function calls while remaining inside the function
d) A NULL variable, because it starts with no value

**12.** Which statement about recursive functions in PHP is correct?

a) A recursive function is one that calls itself, and it needs a base case — such as `$n <= 1` in a factorial function — to define when the recursion stops
b) A recursive function is one that is called repeatedly by a `for` loop
c) A recursive function is any function that returns a value to another function
d) Recursive functions cannot take parameters, since each call would overwrite them

## Section B - Short answer (3)

**13.** State what PHP stands for and what kind of language it is. Then list the **seven data types** the lecture names, with the purpose of each in a few words.

**14.** Explain how to create a basic PHP function and what its purpose is. Then write a snippet that defines a function taking `$num1` and `$num2`, stores their total in `$sum`, returns it, and echoes the returned value. Distinguish **parameters** from **arguments**, and say what a **default value** does.

**15.** Name the six operator families in PHP with their members. Then explain the difference between **local**, **global** and **static** variable scope, and give the one best practice the summary names for organising code when PHP is embedded in HTML.

## Answers

**1. b** — *PHP is server-side*: PHP executes on the web server and the browser receives only the generated output, which is why the source never contains PHP. **a** confuses minification (a client-side JavaScript/CSS practice) with server-side execution. **c** invents a browser setting; browsers never execute PHP at all. **d** confuses PHP with form handling — PHP runs on every request that hits the script, not only on submission.

**2. c** — *variable naming rules*: a name starts with the `$` sign, and the name itself must start with a **letter or underscore**, followed by letters, numbers or underscores. **a** starts with a digit. **b** uses `%`, which is the modulus operator, not the variable sigil. **d** contains a hyphen, which is not a letter, number or underscore — PHP would read it as subtraction.

**3. b** — *case sensitivity*: PHP variable names are case-sensitive, so `$Score` and `$score` are distinct variables and the second one was never assigned. **a** is false — PHP variables are not declared with a type. **c** invents a conversion rule. **d** inverts scope: a variable assigned at the top level of a script is readable inside an `if` block; it is *functions* that create a separate local scope.

**4. c** — *the seven data types*: Array stores collections of data and Object is used to create custom data types. **a** swaps them — Integer is whole numbers, Float/Double is decimals. **b** swaps them too — Boolean holds true/false, NULL represents the absence of a value. **d** simply swaps String and Object.

**5. b** — *modulus*: `%` returns the remainder, and 23 divided by 5 leaves 3. **a** is division, giving 4.6. **c** is concatenation, joining the two into the string "235". **d** is subtract-and-assign, giving 18 — and it also changes `$a`, which comparison and arithmetic operators do not.

**6. a** — *the concatenation operator*: PHP joins two strings with the **dot** operator, not with `+`, which is arithmetic addition. **b** offers the logical AND operator, which returns a boolean. **c** offers the increment operator, which changes a value by 1 and takes only one operand. **d** avoids the actual error, which is the operator itself.

**7. b** — *elseif*: it allows multiple conditions to be tested in sequence; PHP evaluates each elseif after a false `if` until one is true, then runs that block. **a** is false — `elseif` exists precisely so that a sequence of exclusive tests does not need separate `if`s, and separate `if`s would allow several branches to run. **c** misdescribes the ternary, which is for simple two-way if-else scenarios. **d** confuses a looping structure with a conditional one.

**8. b** — *break in a switch*: it exits the switch statement once a match is found. **a** inverts it — that is what happens when `break` is *omitted* (execution falls through). **c** confuses `break` with `default`. **d** overstates it: `break` leaves the switch, not the script.

**9. b** — *the ternary operator*: `? :` is a concise way of writing conditional statements, often for simple if-else scenarios, and the result can be assigned (the lecture's example stores it in `$can_vote`). **a** describes `switch`. **c** and **d** attach meaning to the word "ternary" (three) rather than to its three operands — condition, true-result, false-result.

**10. b** — *default parameter values*: assigning a default makes the parameter optional; the default is used if no argument is provided, and the supplied value is used if one is. **a** describes a parameter with no default. **c** and **d** both deny that the argument overrides the default, which is exactly what the deck's `greet()` example demonstrates.

**11. c** — *static variables*: they are used to retain their values across function calls, while remaining defined within the function. **a** describes an ordinary local variable, which is recreated (and reset) on every call. **b** would satisfy persistence but violates the stated requirement, since a global is accessible from anywhere in the script. **d** is not a scope at all — NULL is a data type.

**12. a** — *recursion*: a recursive function calls itself, is useful where a problem breaks into smaller similar subproblems, and needs a base case to stop — in the deck's `factorial` example, `$n <= 1`. **b** describes iteration with a loop, which is the alternative to recursion, not recursion. **c** describes an ordinary function with a return value. **d** is backwards: parameters are what change on each recursive call and drive it toward the base case.

**13.** *PHP and its data types*: **PHP** stands for **Hypertext Preprocessor**. It is a **server-side scripting language specifically designed for web development**, known for its **flexibility, ease of use, and ability to create dynamic web applications** — the code runs on the web server and only its output is sent to the browser.

The seven data types are: **String** — text data; **Integer** — whole numbers; **Float (or Double)** — decimal numbers; **Boolean** — true or false values; **Array** — collections of data; **Object** — used to create custom data types; **NULL** — represents the absence of a value.

**14.** *Creating a function*: To create a basic PHP function you use the **`function` keyword**, followed by the **function name** and a **pair of parentheses**, then a **code block enclosed in curly braces `{}`** containing the code that performs the task. The name should describe what the function does. The purpose is to **group code into reusable blocks**, so it can be **called multiple times from different parts of the code without duplication**, making the code **modular, organised and easier to maintain**, improving readability and reducing errors.

```php
<?php
function addNumbers($num1, $num2) {
    $sum = $num1 + $num2;
    return $sum;
}
$sum = addNumbers(12, 8);
echo $sum;      // 20
?>
```

**Parameters** are the placeholders declared when the function is **defined** (`$num1`, `$num2` above) — they stand in for the data the function needs to work with. **Arguments** are the actual values supplied when the function is **called** (`12` and `8`). A **default value**, written as `function greet($name = "Guest")`, makes a parameter **optional**: if no argument is provided for it the default is used, and if one is provided it overrides the default. The `return` statement is optional — not every function needs to return a value — but when present it specifies the value handed back, which can then be stored and used elsewhere.

**15.** *Operators, scope and best practice*: The six families are **Arithmetic** (`+`, `-`, `*`, `/`, `%` where `%` is modulus and returns the remainder); **Assignment** (`=`, `+=`, `-=`, `*=`, `/=`); **Comparison** (`==`, `!=`, `<`, `>`, `<=`, `>=`, returning a boolean result); **Logical** (`&&` AND, `||` OR, `!` NOT); the **Concatenation** operator (`.`, which joins two strings together); and **Increment/Decrement** (`++`, `--`, which increase or decrease a value by 1).

**Scope** determines where a variable can be accessed or modified. **Local variables** are defined within a function and accessible **only within that function**. **Global variables** are defined outside of any function and can be accessed **from anywhere in the script**. **Static variables** are used to **retain their values across function calls**, so a counter declared static keeps its count between calls where an ordinary local would reset.

The best practice named for embedding PHP in HTML is to maintain a **clear separation of concerns**, organising code into distinct layers: the **presentation layer**, the **business logic layer**, and the **data layer**. (The summary also names being mindful of **security considerations**, writing clean organised code, and **validating user inputs**.)
