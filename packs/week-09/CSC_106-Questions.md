# CSC_106 — Week 9 Questions

*PHP: variables, data types and operators; control structures; custom functions, scope and recursion; embedding PHP in HTML. Sat seven days later during Saturday catch-up in Week 10 as a retention test — notes closed.*

## Multiple choice

**1.** A student uses "View source" on a live page and cannot find any of the PHP the developer wrote. What does this demonstrate?

A. PHP is server-side: it executes on the web server and only its output is sent to the browser
B. The PHP was minified before deployment, so it is present in the page but no longer readable
C. This browser has its PHP support switched off, so the interpreter stripped the code out on arrival
D. PHP runs only when a page is submitted through a form, so none of it had executed yet

**2.** Which of these is a **valid** PHP variable declaration under the lecture's naming rules?

A. `$2ndPlace = "silver";`
B. `%total = 100;`
C. `$_userName = "ada";`
D. `$user-name = "ada";`

**3.** A script assigns a score on one line and tests it a few lines later, and the `if` behaves as though the score is empty. Why?

```php
$Score = 80;
// ... later ...
if ($score >= 50) {
    echo "Pass";
}
```

A. PHP variables must be given a data type before they can be read
B. Integers cannot be used inside a conditional statement without being converted first
C. A variable assigned outside a function cannot be read inside an `if` block
D. Variable names are case-sensitive, so the two spellings are two different variables

**4.** Which pairing of PHP data type to its stated purpose is correct?

A. Float is used for whole numbers, and Integer for decimal numbers
B. Array stores collections of data, and Object is used to create custom data types
C. NULL is used for the boolean value false, and Boolean for data that is missing
D. String is used for objects, and Object is used for text data

**5.** A script sets

```php
$total = 23;
```

Which expression yields **3**?

A. `$total / 5`
B. `$total . 5`
C. `$total % 5`
D. `$total -= 5`

**6.** A developer writes `echo "Order total: " + $amount;` and gets the wrong result. What is the correct PHP?

A. `echo "Order total: " . $amount;` — the dot is PHP's concatenation operator
B. `echo "Order total: " && $amount;` — `&&` joins two values into one
C. `echo "Order total: " ++ $amount;` — `++` appends the second value to the first
D. The original line is correct, so the fault must lie in how the amount was assigned

**7.** A grading script must print one of four messages depending on which band `$score` falls into. Which construct does the lecture describe for testing multiple conditions in sequence?

A. A chain of separate `if` statements, because `else` may only be used once per script
B. `elseif` — if the initial `if` is false, PHP evaluates each elseif until one is true, then runs that block
C. The ternary operator, because it is the only construct able to produce more than two outcomes
D. A `while` loop that keeps re-testing the score until one of the four bands matches it

**8.** Which statement about the `switch` statement is correct as the lecture describes it?

A. It tests several unrelated conditions at once and runs every block whose condition turns out to be true
B. It replaces `elseif` entirely, because `elseif` cannot be used with string values
C. It compares one value against many, and `break` marks the case to use when nothing matches
D. It compares a single value against multiple possible values, and `break` exits once a match is found

**9.** A function is defined like this:

```php
function greet($name = "Guest") {
    echo "Hello, " . $name;
}
```

What happens when it is called as `greet();` and then as `greet("Robert");`?

A. `greet()` prints "Hello, Guest"; `greet("Robert")` prints "Hello, Robert"
B. `greet()` raises an error because a required argument is missing; `greet("Robert")` prints "Hello, Robert"
C. Both calls print "Hello, Guest", because a default value cannot be overridden once declared
D. Both calls print "Hello, Robert", because PHP reuses the most recently supplied argument

**10.** A page-hit function must remember how many times it has been called during a script run, but the counter must not be reachable from anywhere else in the script. Which scope does the lecture name?

A. A local variable, because it is defined inside the function
B. A global variable, because the count has to survive from one call of the function to the next
C. A static variable, which retains its value across calls but stays inside the function
D. A NULL variable, because it begins with no value and is filled in later

**11.** Which statement about recursive functions in PHP is correct?

A. A recursive function is one that a `for` loop calls repeatedly until a condition is met
B. A recursive function is any function that hands its return value on to another function
C. Recursive functions cannot take parameters, since each call would overwrite the previous values
D. A recursive function calls itself and needs a base case, `$n <= 1` in the deck's factorial, to stop

**12.** The week's summary names one best practice above all others for embedding PHP in HTML. What is it?

A. Put every PHP tag at the top of the file, because the interpreter reads a document only once
B. Maintain a clear separation of concerns: presentation layer, business logic layer, data layer
C. Write the HTML with PHP `echo` statements throughout, so that the whole page comes from one language
D. Keep all validation on the client, because PHP has already run by the time the browser sees the page

## Short answer

**13.** State what PHP stands for and what kind of language it is. Then list the **seven data types** the lecture names, with the purpose of each in a few words.

**14.** Explain how to create a basic PHP function and what its purpose is. Then write a snippet that defines a function adding two numbers, stores the total in `$sum`, returns it, and echoes the returned value. Distinguish **parameters** from **arguments**, and say what a **default value** does.

**15.** Name the six operator families in PHP with their members. Then explain the difference between **local**, **global** and **static** variable scope, and name the three looping structures and the two kinds of comment the week names.

## Answers

**1. A** — *PHP is server-side*: the code executes on the web server and the browser receives only the generated output, which is why "View source" never shows it. **B** confuses minification, a client-side JavaScript and CSS practice, with server-side execution. **C** invents a browser setting; browsers never execute PHP at all. **D** confuses PHP with form handling — PHP runs on every request that reaches the script, not only on submission.

**2. C** — *variable naming rules*: a variable is declared with the `$` sign, and the name must start with a **letter or underscore**, followed by letters, numbers or underscores. `$_userName` satisfies all three. **A** starts with a digit. **B** uses `%`, which is the modulus operator, not the variable sigil. **D** contains a hyphen, which is none of letter, number or underscore — PHP would read it as subtraction.

**3. D** — *case sensitivity*: PHP variable names are case-sensitive, so a capital S makes the assigned variable a different one from the variable the `if` reads, and the one being tested was never assigned. **A** is false — PHP variables are not declared with a type. **B** invents a conversion rule. **C** inverts scope: a variable assigned at the top level of a script is readable inside an `if` block; it is *functions* that create a separate local scope.

**4. B** — *the seven data types*: Array is used to store collections of data and Object is used to create custom data types. **A** swaps two of them — Integer is whole numbers, Float (Double) is decimals. **C** swaps another pair — Boolean holds true or false, NULL represents the absence of a value. **D** simply swaps String and Object.

**5. C** — *modulus*: `%` returns the remainder, and 23 divided by 5 leaves 3. **A** is division, giving 4.6. **B** is concatenation, joining the two into the string "235". **D** is subtract-and-assign, giving 18 — and it also changes the variable itself, which arithmetic and comparison operators do not.

**6. A** — *the concatenation operator*: PHP joins two strings with the **dot**, not with `+`, which is arithmetic addition. **B** offers the logical AND operator, which returns a boolean. **C** offers the increment operator, which changes one value by 1 and takes a single operand. **D** avoids the actual error, which is the operator itself.

**7. B** — *elseif*: it allows multiple conditions to be tested in sequence — after a false `if`, PHP evaluates each elseif until it finds one that is true, then executes that block. **A** is false; `elseif` exists precisely so a sequence of exclusive tests needs no separate `if`s, and separate `if`s would let several branches run. **C** misdescribes the ternary, which the lecture reserves for simple if-else scenarios. **D** confuses a looping structure with a conditional one.

**8. D** — *switch and break*: `switch` is useful when comparing a single value against multiple possible values, and `break` exits the switch once a match is found. **A** describes stacked `if` statements, not a switch. **B** invents a restriction on `elseif`. **C** confuses `break` with `default`, which is the case that runs when nothing matches.

**9. A** — *default parameter values*: assigning a default makes the parameter optional; the default is used when no argument is provided, and a supplied value overrides it. **B** describes a parameter with no default. **C** and **D** both deny that the argument overrides the default, which is exactly what the deck's `greet()` example demonstrates.

**10. C** — *static variables*: they retain their values across function calls while remaining defined within the function, which is both halves of the requirement. **A** describes an ordinary local variable, which is recreated and reset on every call. **B** would satisfy persistence but breaks the stated requirement, since a global is accessible from anywhere in the script. **D** is not a scope at all — NULL is a data type.

**11. D** — *recursion*: a recursive function calls itself, suits problems that break into smaller similar subproblems, and needs a base case to stop — `$n <= 1` in the deck's `factorial` example. **A** describes iteration with a loop, which is the alternative to recursion. **B** describes an ordinary function with a return value. **C** is backwards: parameters are what change on each call and drive it toward the base case.

**12. B** — *separation of concerns*: the week's summary names it as the important best practice when embedding PHP in HTML, organising code into three distinct layers — presentation, business logic and data. (It also names being mindful of security, writing clean organised code, and validating user inputs.) **A** invents a rule about tag placement; PHP tags can appear anywhere in the document, as the greeting examples show. **C** describes the opposite of separating presentation from logic. **D** contradicts the whole point of server-side validation, and misstates the order in any case.

**13.** *PHP and its data types*: **PHP** stands for **Hypertext Preprocessor**. It is a widely-used **server-side scripting language specifically designed for web development**, known for its **flexibility, ease of use, and ability to create dynamic web applications** — the code runs on the web server and only its output is sent to the browser.

The seven data types are: **String** — text data; **Integer** — whole numbers; **Float (or Double)** — decimal numbers; **Boolean** — true or false values; **Array** — collections of data; **Object** — used to create custom data types; **NULL** — represents the absence of a value.

**14.** *Creating a function*: You create one with the **`function` keyword**, followed by the **function name**, a **pair of parentheses**, and a **code block enclosed in curly braces `{}`** holding the code that performs the task; the name should describe what the function does. The purpose is to **group code into reusable blocks** so it can be **called many times from different parts of the code without duplication**, making the code **modular, organised and easier to maintain**, improving readability and reducing errors.

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

**Parameters** are the placeholders declared when the function is **defined** — the two named in the snippet above — and they stand in for the data the function needs to work with. **Arguments** are the actual values supplied when the function is **called** (`12` and `8`). A **default value**, written as `greet($name = "Guest")` in the declaration, makes a parameter **optional**: if no argument is provided the default is used, and if one is provided it overrides the default. The `return` statement is itself optional — not all functions need to return a value — but where present it specifies the value handed back, which the caller can store and use.

**15.** *Operators, scope, loops and comments*: The six families are **Arithmetic** (`+`, `-`, `*`, `/`, `%`, where `%` is modulus and returns the remainder); **Assignment** (`=`, `+=`, `-=`, `*=`, `/=`); **Comparison** (`==`, `!=`, `<`, `>`, `<=`, `>=`, returning a boolean result); **Logical** (`&&` AND, `||` OR, `!` NOT); the **Concatenation** operator (`.`, which joins two strings together); and **Increment/Decrement** (`++`, `--`, which increase or decrease a value by 1).

**Scope** determines where a variable can be accessed or modified. **Local variables** are defined within a function and accessible **only within that function**. **Global variables** are defined outside any function and can be accessed **from anywhere in the script**. **Static variables** are used to **retain their values across function calls**, so a static counter keeps its count between calls where an ordinary local would reset to its starting value.

The three looping structures named are **`for`**, **`while`** and **`foreach`**, used for repetitive tasks. Comments are ignored by the PHP interpreter and come in exactly two kinds: **single-line comments created with `//`**, and **multi-line comments enclosed between `/*` and `*/`**.
