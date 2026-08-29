# Tuesday — CSC_106 fast-hour check

*Basic JavaScript: declaration keywords, comparison operators, array methods, loops and ways to define a function.*
*Five questions, straight after the fast hour. Recall only. Score out of 5.*

**1.** Which keyword declares a variable that cannot be reassigned?
A. let
B. const
C. var
D. function

**2.** What does the strict equal operator check that the equal operator does not?
A. That both values are truthy
B. That neither value is undefined
C. That both operands are variables
D. That the two values are of the same data type

**3.** Which array method returns a new array of the elements passing a test?
A. filter()
B. forEach()
C. splice()
D. push()

**4.** Which loop always runs its block at least once?
A. for
B. while
C. do-while
D. for with a false condition

**5.** Which form of function is defined and executed immediately, creating a private scope?
A. An arrow function
B. An IIFE
C. A function declaration
D. An object constructor

## Answers

**1. B** — const is read-only, so reassigning it throws a TypeError. let and var can both be reassigned; function defines a function, not a variable.

**2. D** — 5 == "5" is true but 5 === "5" is false, because === also requires the data types to match. Truthiness, undefined checks and being a variable have nothing to do with it.

**3. A** — filter() builds and returns a new array of the elements that pass. forEach() only runs a function once per element, splice() adds or removes at an index, and push() adds to the end.

**4. C** — In do-while the condition is checked after the body, so the body always runs once. for and while both test first and may run zero times.

**5. B** — An IIFE is wrapped in parentheses and invoked on the spot, so its variables stay hidden outside. Arrow functions are a concise ES6 form, declarations are named and called later, and constructors build object instances with new.
