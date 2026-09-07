# Tuesday — CSC_106 fast-hour check

*JavaScript basics: variables, control flow, arrays, objects and functions.*
*12 questions, straight after the hour. Score out of 12.*

**1.** What does this log?

```js
let a = 10, b = 3;
console.log(a % b, a / b > 3);
```
A. 3 true
B. 1 false
C. 1 true
D. 0.333 true

**2.** What does this log?

```js
console.log("5" == 5, "5" === 5, 0 == false);
```
A. true false true
B. true true true
C. false false true
D. true false false

**3.** What happens when this runs?

```js
let s = 0;
for (let i = 1; i <= 4; i++) {
  s += i;
}
console.log(s, i);
```
A. 10 5
B. 10 4
C. 10 undefined
D. ReferenceError: i is not defined

**4.** What does this log?

```js
let n = 1, c = 0;
while (n < 20) {
  n *= 3;
  c++;
}
console.log(n, c);
```
A. 9 2
B. 27 3
C. 27 4
D. 81 4

**5.** What does this log?

```js
let d = 2;
switch (d) {
  case 1: console.log("Mon");
  case 2: console.log("Tue");
  case 3: console.log("Wed"); break;
  default: console.log("Other");
}
```
A. Tue then Wed
B. Tue
C. Tue, Wed then Other
D. Mon, Tue then Wed

**6.** What does this log?

```js
let a = [3, 8, 1];
a.push(5);
a.pop();
a.splice(1, 1, 9, 9);
console.log(a, a.length);
```
A. [3, 9, 1] 3
B. [3, 9, 9, 1, 5] 5
C. [3, 9, 9, 1] 4
D. [3, 8, 9, 9, 1] 5

**7.** What is `out` after this runs?

```js
let out = [4, 9, 12, 7].filter(function (n) { return n % 3 === 0; });
```
A. [4, 7]
B. [9, 12]
C. undefined
D. 2

**8.** What does this log?

```js
let s = { name: "Ada", scores: [70, 85], addr: { city: "Jos" } };
console.log(s["scores"][1] + s.addr.city.length);
```
A. 853
B. 85Jos
C. NaN
D. 88

**9.** What does this log?

```js
function makeCounter() {
  let c = 0;
  return function () { c++; return c; };
}
const next = makeCounter();
next(); next();
console.log(next());
```
A. 3
B. 1
C. undefined
D. ReferenceError: c is not defined

**10.** What does this log?

```js
function add(a, b) { return a + b; }
console.log(add(2), add("2", 3));
```
A. 2 5
B. NaN 23
C. undefined 5
D. NaN 5

**11.** What does it mean that JavaScript is a client-side scripting language?
A. Its code runs on the server, which sends the browser only the result
B. It can only be run from the browser's developer tools
C. It runs in the browser but cannot change the page after it loads
D. Its code is sent to the browser with the page and executed there

**12.** What is the difference between a parameter and an argument?
A. A parameter is the value passed; an argument is the placeholder
B. A parameter is the returned value; an argument is the input
C. A parameter is the placeholder named in the function definition; an argument is the value passed when it is called
D. They are two names for the same thing

---

## Answers

**1. C** — *Modulus and division operators.* 10 % 3 is the remainder of 10 ÷ 3, which is 1. 10 / 3 = 3.333..., and 3.333 > 3 is true, so the output is 1 true.

3 true uses the quotient instead of the remainder; 1 false compares the wrong way round; 0.333 true prints the fractional part rather than the remainder.

**2. A** — *Loose versus strict equality.* == compares values after converting types, so "5" == 5 is true and 0 == false is true. === also requires the same type, and a string is not a number, so "5" === 5 is false.

true true true treats === like ==; false false true treats == like ===; true false false forgets that == converts false to 0.

**3. D** — *Block scope of a loop variable declared with let.* let inside the for header gives i block scope: it exists only within the loop. After the loop s is 10, but the console.log line reads i outside its block, so the whole line throws ReferenceError: i is not defined and nothing is printed.

10 5 and 10 4 assume i survives the loop, which var would allow; 10 undefined assumes a missing variable reads as undefined rather than throwing.

**4. B** — *Tracing a while loop.* Trace: n = 1 → 3 → 9 → 27, incrementing c each time; the loop stops once n < 20 is false, at n = 27 after 3 passes.

9 2 stops one pass early, as if the condition were n < 9; 27 4 counts one pass too many; 81 4 runs the body once more after the condition has already failed.

**5. A** — *switch fall-through when break is missing.* d matches case 2, so Tue is printed. There is no break after it, so execution falls through into case 3 and prints Wed, where the break finally exits the switch.

Tue alone assumes each case stops by itself; Tue, Wed then Other keeps falling past the break; Mon, Tue then Wed starts from case 1, which does not match.

**6. C** — *Array methods push, pop and splice.* push(5) gives [3, 8, 1, 5]; pop() removes the last, back to [3, 8, 1]; splice(1, 1, 9, 9) removes one element at index 1 (the 8) and inserts 9, 9 there: [3, 9, 9, 1], length 4.

[3, 9, 1] 3 inserts only one 9; [3, 9, 9, 1, 5] 5 forgets that pop removed the 5; [3, 8, 9, 9, 1] 5 inserts without removing the 8.

**7. B** — *filter returns a new array of passing elements.* filter returns a new array of the elements for which the test is true: 9 % 3 and 12 % 3 are 0, so out is [9, 12].

[4, 7] keeps the elements that fail the test; undefined is what forEach would return; 2 is the count of matches, not the array.

**8. D** — *Accessing nested object and array values.* s["scores"][1] is 85 (arrays are zero-indexed, so index 1 is the second score). s.addr.city is "Jos", whose length is 3. 85 + 3 = 88.

853 treats the + as string joining; 85Jos adds the city itself instead of its length; NaN assumes a string cannot be involved, but length is a number.

**9. A** — *Closure keeping state between calls.* makeCounter returns an inner function that closes over c, so c survives between calls: the first two calls raise it to 2 and the third returns 3.

1 assumes c resets on every call; undefined assumes the inner function returns nothing; a ReferenceError assumes c dies when makeCounter finishes, which is exactly what a closure prevents.

**10. B** — *Missing arguments and string concatenation with +.* add(2) leaves b undefined, and 2 + undefined is NaN. add("2", 3) has a string on the left, so + joins rather than adds: "23".

2 5 assumes a missing argument defaults to 0 and that the string is converted to a number; undefined 5 assumes the whole result is undefined; NaN 5 gets the first right but converts the string.

**11. D** — *Client-side versus server-side scripting.* JavaScript is client-side: the browser downloads the script with the page and runs it on the user's machine, which is why it can react instantly to clicks and validate forms before anything is sent. It also means the source is visible to the user and cannot be trusted for security.

Running on the server describes server-side scripting such as Node.js or PHP; the developer tools are only one place it can be run; changing the page after load is exactly what DOM manipulation does.

**12. C** — *Parameter versus argument.* In function add(a, b), a and b are parameters: placeholders for values the function will receive. In the call add(3, 4), 3 and 4 are arguments: the actual values passed in.

The first distractor swaps the two; the returned value is what return sends back, not a parameter; the words are not interchangeable.
