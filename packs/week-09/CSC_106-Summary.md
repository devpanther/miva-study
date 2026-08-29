# CSC_106 — Week 9 Summary

*Introduction to Web Technologies · Week 9 (2 – 8 Nov 2026) · Topic: Hypertext Preprocessor (PHP) — variables, data types and operators; conditional, switch and loop control structures; custom functions, parameters, return values, scope and recursion; embedding PHP in HTML*

## The 8 most examinable things this week

1. **What PHP is, stated the lecture's way.** PHP stands for **Hypertext Preprocessor** and is a **server-side scripting language specifically designed for web development**, known for its **flexibility, ease of use, and ability to create dynamic web applications**. "Server-side" is the load-bearing word: the code **runs on the web server**, and only its output reaches the browser.
2. **Variable rules — three separate facts, all examinable.** A variable is declared with the **dollar sign `$`** followed by the name; names are **case-sensitive** (`$Age` and `$age` are two different variables); a name **must start with a letter or underscore**, then letters, numbers or underscores. `$2fast` is invalid; `$_total` is valid.
3. **The seven data types, in order.** **String** (text), **Integer** (whole numbers), **Float/Double** (decimal numbers), **Boolean** (true or false), **Array** (collections of data), **Object** (custom data types), **NULL** (the **absence of a value**). Note NULL is a type in its own right, not an error.
4. **The six operator families.** **Arithmetic** (`+ - * / %`), **Assignment** (`= += -= *= /=`), **Comparison** (`== != < > <= >=`), **Logical** (`&& || !`), **Concatenation** (`.` — joins two strings), **Increment/Decrement** (`++ --`, change a value by 1). The two most-missed: **`%` is modulus, returning the remainder**, and **`.` is string joining, not `+`**.
5. **Three conditional statements, precisely distinguished.** **`if`** executes a block **only if** the condition is true, and skips it otherwise. **`if-else`** adds a block that runs **when the `if` condition is false**. **`elseif`** tests **multiple conditions in sequence** — if the initial `if` is false, PHP evaluates each `elseif` **until it finds one that is true**, then executes that block.
6. **The ternary operator and `switch` are the two shorthands.** The **ternary operator `? :`** is a **concise way to write a simple if-else**, and its result can be stored in a variable. The **`switch`** statement handles multiple conditions by **comparing a single value against multiple possible values**; **`break` exits the switch once a match is found**.
7. **Custom functions — the mid-lesson answer.** You create one with the **`function` keyword**, a **name**, a **pair of parentheses** and a **code block enclosed in curly braces `{}`**. Purpose: **group code into reusable blocks**, so it is **modular, organised and easier to maintain**, callable **many times from different parts of the code without duplication**. **Parameters** are placeholders declared at definition; **arguments** are the actual values passed at the call. **Default values** make a parameter optional. **`return`** specifies the value handed back, and **not all functions need to return a value**.
8. **Scope and recursion.** **Local** variables are defined **inside** a function and accessible **only there**; **global** variables are defined **outside** any function and accessible anywhere in the script; **static** variables **retain their values across function calls**. A **recursive function calls itself**, and is used for problems that break into **smaller, similar subproblems** — it needs a **base case** (in the deck's example, `$n <= 1` in `factorial`) to say when the recursion stops.

## Variables, data types, operators

```php
<?php
$name    = "Robert";   // String
$age     = 17;         // Integer
$price   = 4500.75;    // Float (Double)
$isAdmin = true;       // Boolean
$days    = ["Mon", "Tue"];  // Array
$nothing = NULL;       // NULL — the absence of a value

// Case-sensitive: these are two DIFFERENT variables
$Age = 30;             // $age is still 17
?>
```

| Family | Operators | Note |
|---|---|---|
| Arithmetic | `+` `-` `*` `/` `%` | `%` is **modulus** — the **remainder**, not division |
| Assignment | `=` `+=` `-=` `*=` `/=` | `=` assigns; the compound forms operate **and** assign |
| Comparison | `==` `!=` `<` `>` `<=` `>=` | Return a **boolean** |
| Logical | `&&` `\|\|` `!` | AND, OR, NOT |
| Concatenation | `.` | Joins **two strings** |
| Increment/Decrement | `++` `--` | Increase or decrease **by 1** |

```php
<?php
$total = 10;
$total += 5;                  // 15  (add and assign)
$remainder = 17 % 5;          // 2   (modulus: the remainder)
$greeting = "Hello, " . $name;  // concatenation, NOT +
$count = 0;
$count++;                     // 1
?>
```

**Comments** are ignored by the PHP interpreter and come in exactly two kinds: **single-line with `//`** and **multi-line enclosed between `/*` and `*/`**.

```php
<?php
// single-line comment
/* multi-line
   comment */
?>
```

## Control structures

Control structures are **blocks of code that control the execution flow**, determining **which parts of the code run and in what order**. The lecture names three groups: **conditional statements, looping structures and branching structures**.

```php
<?php
// if — runs only when the condition is true
if ($age < 18) {
    echo "You are a minor.";
}

// if-else — the else block runs when the if condition is false
if ($temperature > 30) {
    echo "It's hot outside.";
} else {
    echo "It's not too hot outside.";
}

// elseif — tests conditions in sequence until one is true
if ($score >= 70) {
    echo "Distinction";
} elseif ($score >= 50) {
    echo "Pass";
} else {
    echo "Fail";
}

// logical operators combine conditions inside a conditional
if ($age >= 18 && $hasID == true) {
    echo "Admitted.";
} elseif ($isStaff || $isGuest) {
    echo "Admitted on a pass.";
}
?>
```

```php
<?php
// Ternary ? : — a concise simple if-else; the result is stored in a variable
$can_vote = ($age >= 18) ? "Yes" : "No";

// switch — compare ONE value against multiple possible values
switch ($day) {
    case "Mon":
        echo "Start of the week";
        break;          // break exits the switch once a match is found
    case "Sat":
    case "Sun":
        echo "Weekend";
        break;
    default:
        echo "Midweek";
}
?>
```

**Loops** named in the summary are **`for`**, **`while`** and **`foreach`** — they carry out **repetitive tasks**.

```php
<?php
for ($i = 1; $i <= 5; $i++) { echo $i; }        // counted repetition
while ($stock > 0) { $stock--; }                 // repeat while true
foreach ($days as $d) { echo $d . "<br>"; }      // once per array element
?>
```

## Functions

```php
<?php
// Declaration: function keyword, name, parentheses, code block in { }
function functionName($parameters) {
    // code that performs a specific task
    return $result;      // optional
}

// With a parameter — "Robert" is the ARGUMENT, $name is the PARAMETER
function greet($name) {
    echo "Hello, " . $name . "!";
}
greet("Robert");                  // Hello, Robert!

// With a default value — the parameter becomes optional
function greetGuest($name = "Guest") {
    echo "Hello, " . $name . "!";
}
greetGuest();                     // Hello, Guest!
greetGuest("Robert");             // Hello, Robert!

// With a return value — the caller stores and uses it
function add($num1, $num2) {
    $sum = $num1 + $num2;
    return $sum;
}
$result = add(5, 3);
echo $result;                     // 8
?>
```

**Built-in functions**: PHP provides a **vast library of ready-to-use functions** covering **string manipulation, array operations, date and time handling, database interaction** and more — e.g. `strlen()`, `strtoupper()`, `count()`, `date()`.

**Scope**:

```php
<?php
$siteName = "Miva";           // GLOBAL — defined outside any function

function counter() {
    $hits = 0;                // LOCAL — exists only inside counter()
    static $visits = 0;       // STATIC — retains its value across calls
    $visits++;
    echo $visits;
}
counter();  // 1
counter();  // 2  — the static variable kept its value; $hits did not
?>
```

**Recursion** — a function that **calls itself**, with a **base case** that stops it:

```php
<?php
function factorial($n) {
    if ($n <= 1) {            // base case — defines when recursion stops
        return 1;
    }
    return $n * factorial($n - 1);   // the function calls itself
}
echo factorial(5);            // 120
?>
```

## Embedding PHP in HTML

The week's summary card frames the whole topic as **embedding PHP code in HTML**: PHP is embedded **using PHP tags**, is **executed on the server**, and combines **HTML's structure and presentation** with **PHP's dynamic processing power**.

```php
<!DOCTYPE html>
<html>
<body>
  <?php $name = "Robert"; ?>
  <h1>Hello, <?php echo $name; ?>!</h1>
  <p>Today is <?php echo date("d M Y"); ?>.</p>
</body>
</html>
```

**Advantage**: the primary one named is **dynamic content generation** — tailoring page content to **user input, database queries or other factors**. **Common scenarios where it is crucial**: **user authentication, form processing, database interaction, and conditional display**.

**Best practices**: maintain a **clear separation of concerns**, organising code into **three distinct layers — the presentation layer, the business logic layer, and the data layer**; be mindful of **security**; write **clean, organised code** and **validate user inputs**.

**Why PHP is popular**: flexibility, the ability to create dynamic web applications, and a **large community, documentation and libraries**.

## Commonly confused

- **`.` vs `+`** — in PHP the **concatenation operator is the dot**, `"Hello, " . $name`. `+` is arithmetic addition only; using it to join strings is the single most common PHP-from-JavaScript error.
- **`=` vs `==`** — `=` is the **assignment** operator (put a value into a variable); `==` is the **comparison** operator (test equality and return a boolean). `if ($x = 5)` assigns; `if ($x == 5)` compares.
- **`%` (modulus) vs `/` (division)** — `/` returns the quotient, `%` returns the **remainder**. `17 / 5` is `3.4`; `17 % 5` is `2`.
- **Parameter vs argument** — a **parameter** is the placeholder named when you **define** the function; an **argument** is the actual value supplied when you **call** it. `function greet($name)` declares a parameter; `greet("Robert")` passes an argument.
- **`if-else` vs `elseif`** — `else` is the single fallback that runs when the `if` is false; `elseif` **tests a further condition** in sequence and only runs if that condition is true. Multiple mutually exclusive outcomes need `elseif`, not stacked `if`s.
- **Ternary vs `switch`** — the ternary `? :` is shorthand for **one simple if-else** producing a value; `switch` compares **one value against many possible values**. Two branches → ternary; six branches → switch.
- **`break` in a switch vs no `break`** — `break` **exits the switch after a match is found**. Omit it and execution falls through into the following cases, so several blocks run.
- **Local vs global vs static scope** — **local** is created inside a function and lost when it returns; **global** is defined outside any function and available across the script; **static** lives inside a function but **retains its value between calls**. "A counter that keeps counting across calls" is static, not global.
- **NULL vs `false` vs `0`** — **NULL is the type representing the absence of a value**; **Boolean false** is a value, and **0** is an Integer. They are three different data types in the lecture's list.
- **Float vs Integer** — **Integer** is for **whole numbers**, **Float (Double)** for **decimal numbers**. `10` and `10.0` are not the same data type.
- **Server-side vs client-side** — PHP is **server-side**: it executes on the **web server** and the browser only receives the output. JavaScript (Weeks 7–8) runs in the browser. "View source" never shows PHP code.
- **Function definition vs function call** — defining a function with `function add($a, $b) { ... }` runs nothing; the code only executes when you **call** it, `add(5, 3)`. A function defined but never called produces no output.
