# Tuesday — CSC_106 fast-hour check

*PHP basics: where it runs, operators, data types, variable scope and recursion.*
*Five questions, straight after the fast hour. Recall only. Score out of 5.*

**1.** Where does PHP code actually execute?
A. In the user's browser
B. On the web server
C. In the database engine
D. In the HTML parser

**2.** Which PHP operator joins two strings together?
A. +
B. &
C. .
D. %

**3.** Which PHP data type represents the absence of a value?
A. Boolean
B. Float
C. Object
D. NULL

**4.** A variable that keeps its value between calls to a function is declared:
A. static
B. global
C. local
D. default

**5.** In the factorial example, what stops the recursion?
A. The return statement
B. The base case n <= 1
C. The parameter list
D. The closing curly brace

## Answers

**1. B** — PHP is a server-side scripting language: the server runs it and sends only the output, which is why View Source never shows PHP. JavaScript is the one that runs in the browser.

**2. C** — PHP concatenates with the dot. Plus is arithmetic addition only, and percent is modulus, returning a remainder.

**3. D** — NULL is its own type in the lecture's seven, meaning no value at all. Boolean false is a value, and Float and Object hold data.

**4. A** — Static variables live inside a function but retain their value across calls. Local variables are lost when the function returns; global ones are declared outside any function.

**5. B** — A recursive function needs a base case saying when to stop; here it is n <= 1 returning 1. The return statement alone does not end recursion, since the recursive call also returns.
