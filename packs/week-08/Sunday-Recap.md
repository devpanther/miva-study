# Sunday Recap — Week 8

*Sunday 1 November 2026, 19:00–20:00. One hour total, not one hour each. Two topics: one his, one his partner's.*

## How the topic gets picked

**Your lowest nightly-check score of the week decides it.** Six checks (Mon MTH, Tue PHY, Wed COS, Thu MTH-problems, Fri PHY-problems, Sat COS-code), **twelve out of twelve each**. Whichever you scored lowest on is the topic you teach, no notes.

**You take the same eight courses, so do not both pick the same course.** Whoever scored lower on that course keeps it; the other person moves to their next-lowest score in a *different* course. Settle this in Friday's review hour, not at 19:00 on Sunday.

The two topics below are **fallbacks only** — use them if the scores tie, or if the checks got skipped and there is no score to go on.

```
19:00  he teaches (10 min)      19:10  partner asks "why" until it breaks (5 min)
19:15  partner teaches (10)     19:25  he asks "why" (5 min)
19:30  close both gaps together (20 min)    19:50  slack
```

---

## Fallback topic 1 — MTH_102: Integration by parts: that (integral of u dv) = uv - (integral of v du) trades one integral for another rather than evaluating it, so the choice of u and dv is what decides whether the trade is progress, and an integral that reappears is the method working rather than failing

**Why it tends to be misunderstood.** Students meet parts as a formula to be filled in, and the formula can be filled in for any product whatsoever - which is exactly the problem. Because both assignments of u and dv produce a valid line of algebra, the belief forms that the choice is cosmetic: pick either, and the answer will come out with more or fewer lines. What actually happens is that the wrong choice trades the integral for a strictly harder one - in (integral of x^3 ln x dx), taking u = x^3 gives v = (integral of ln x dx), which is itself a parts problem, and in (integral of x cos x dx), taking u = cos x raises the power of x from 1 to 2, so every further application makes it worse. The second half of the misunderstanding is what counts as an answer. Parts hands back another integral sign, and a student who believes a technique must deliver a closed form reads that as failure, gives up, or quietly drops the (integral of v du) term and reports uv alone. That belief is fatal in the cycling integrals (integral of e^x sin x dx) and (integral of e^x cos x dx), where the original integral I genuinely reappears and the answer comes from treating the equation I = e^x sin x - e^x cos x - I as an equation and solving 2I = ..., a step that looks like cheating to someone who thinks integration only ever moves forwards. Both errors survive self-checking because the student never differentiates the result: uv alone differentiates to u dv + v du, which contains the integrand as one of its two terms, so a quick glance appears to confirm it, and a wrong u/dv choice usually ends not in a wrong answer but in an abandoned page, which reads as 'this one was too hard' rather than 'I chose badly'. LIATE is then memorised as a magic ordering rather than as a summary of the two real conditions - dv must be something you can integrate, and u should be something that collapses when differentiated.

**Five escalating "why" questions for the listener:**

1. Why does integration have no product rule, when differentiation has one?
2. Why does the formula (integral of u dv) = uv - (integral of v du) count as progress at all, given that the right-hand side still contains an integral?
3. Why, in (integral of x^3 ln x dx), does taking u = ln x work while taking u = x^3 does not - what exactly goes wrong in the second case?
4. Why does (integral of e^x sin x dx) come back to itself after two applications, and why is that a solvable situation rather than a dead end?
5. Why must the second application of parts in a cycling integral keep the exponential as dv, and what precisely happens to the equation if you swap the roles instead?

**What a good answer contains:**

- That parts is the product rule d(uv) = u dv + v du integrated and rearranged, so it exchanges (integral of u dv) for a boundary term uv plus a different integral (integral of v du), and promises nothing about that new integral being easier.
- That the choice of u and dv is governed by two conditions, not by a mnemonic: dv must be integrable to get v at all, and u should simplify when differentiated - which is why the algebraic factor is u against a trigonometric or exponential dv (the power drops by one each time and the process terminates), while a logarithm is u because it has no antiderivative to serve as dv.
- That an integral reappearing is not failure: in the cycling case the identity is treated as an algebraic equation in I and solved, and the whole result is then checked by differentiating it back to the integrand.

**Worked example.**

Evaluate I = (integral of e^x cos x dx).

Step 1 - first application. Take u = cos x, dv = e^x dx, so du = -sin x dx and v = e^x.
  I = e^x cos x - (integral of e^x (-sin x) dx) = e^x cos x + (integral of e^x sin x dx).
The new integral is no simpler than the old one - but it is no worse either, and that is the signal to apply parts a second time rather than to give up.

Step 2 - second application, keeping e^x as dv again. Let J = (integral of e^x sin x dx), and take u = sin x, dv = e^x dx, so du = cos x dx and v = e^x.
  J = e^x sin x - (integral of e^x cos x dx) = e^x sin x - I.

Step 3 - solve for I. Substituting J back into Step 1:
  I = e^x cos x + e^x sin x - I
  2I = e^x (sin x + cos x)
  I = e^x (sin x + cos x)/2 + C.

Step 4 - check by differentiating. d/dx [e^x (sin x + cos x)/2] = e^x (sin x + cos x)/2 + e^x (cos x - sin x)/2 = e^x (2 cos x)/2 = e^x cos x. Correct.

What the wrong choice does. Suppose that at Step 2 you swap the roles and take u = e^x, dv = sin x dx, so v = -cos x:
  J = -e^x cos x + (integral of e^x cos x dx) = -e^x cos x + I.
Substituting into Step 1 gives I = e^x cos x - e^x cos x + I, that is I = I - a true statement carrying no information. The second application must undo nothing: whichever factor was dv the first time must be dv again, or the two steps cancel.

---

## Fallback topic 2 — COS_102: What actually crosses the boundary of a function call - a parameter receives a copy, and returning a value is not the same as printing one

**Why it tends to be misunderstood.** Students learn the words of this week easily - a function is a group of statements that perform a task, a parameter is like a placeholder, the return type is the data type of the value the function returns - and can recite all of it while holding a mental picture that is wrong in one specific way: they imagine that naming a variable in a call somehow gives the function that variable. On that picture, 'passing n' means the function now has n, so anything it does to it happens to n; and 'the function produced the number' means the number is now available, whether it came out through a return or through printf. Both halves of the picture are false, and each one produces a family of bugs that look like different topics until you see they are the same. From the first half come the mutated-parameter faults: a void function that 'updates' a price and changes nothing, a swap that swaps two copies, a loop counter that a helper function was supposed to advance and did not. From the second half come the missing-return faults: a function with a non-void return type whose body only prints, a void function assigned to a variable, a caller that calls a function and then wonders where the answer went. The reason the wrong belief survives self-checking is that the evidence usually agrees with it. The number does appear on the screen, because printf ran; the calculation inside the function is right, because the student traced it and it was; the programme compiles, because C is perfectly happy to let you assign to a parameter and, in a beginner's compiler settings, will not stop you writing a function that falls off the end without returning. The single test that would expose the belief - print the caller's variable after the call, not the function's - is the one thing the student does not do, because on their picture there is nothing to check. Two further confusions sit on top. 'Returns nothing' gets collapsed into 'returns zero', so void looks like a value rather than the absence of one. And scope gets read as a nuisance instead of as the mechanism doing the work: a local that shadows a global, or a parameter that hides one, is seen as a naming accident rather than as the language enforcing that a function body is private - which is why the reflex fix, making the variable global so everyone can reach it, feels like a simplification while actually destroying the property that made functions worth having.

**Five escalating "why" questions for the listener:**

1. Why does a function need a parameter at all, when the value it wants is already sitting in a variable in main?
2. Why does assigning a new value to a parameter inside a function leave the caller's variable completely unchanged?
3. Why is printing a value not the same as returning it, when in both cases the number ends up on the screen?
4. Why does a local variable that shares its name with a global leave the global untouched - and why is that the right rule rather than a trap for the unwary?
5. Why does moving a variable out to global scope, so that functions need not pass it around, destroy the very guarantee - that an implementation can be changed without breaking other parts of the code - that abstraction was supposed to deliver?

**What a good answer contains:**

- Names what physically crosses the boundary at a call: the ARGUMENT's value is copied into the PARAMETER, which is a new local variable belonging to that call and destroyed when it ends, so the caller's variable is not reachable from inside and assigning to a parameter changes only the copy.
- Names the only two ways anything gets back out, and keeps them apart: the RETURN VALUE, which the caller can store, test and pass on, and which requires a non-void return type; and side effects such as printf, which put characters on the screen where no part of the programme can retrieve them - so 'it printed 75' and 'it returned 75' are different facts, and void means there is no value at all to assign, not that the value is zero.
- Ties both to the week's abstraction: a function's header - name, parameters, return type - is exactly the course's 'name, format of the input, format of the output', so anything that crosses the boundary without appearing in the header (a global read or written inside the body) is a hidden dependency that makes the header a lie and forfeits the benefit that the body can be rewritten without breaking callers.

**Worked example.**

Two functions with the SAME body, differing only in how they end. Trace both and say what main knows afterwards.

    #include <stdio.h>

    void addTenA(int amount)          /* A: void - prints */
    {
        amount = amount + 10;
        printf("inside A: %d\n", amount);
    }

    int addTenB(int amount)           /* B: int - returns */
    {
        amount = amount + 10;
        return amount;
    }

    int main(void)
    {
        int n = 5;

        addTenA(n);
        printf("after A: %d\n", n);

        n = addTenB(n);
        printf("after B: %d\n", n);
        return 0;
    }

Output:
    inside A: 15
    after A: 5
    after B: 15

Step by step.
(1) n = 5 in main.
(2) addTenA(n) evaluates the argument to the VALUE 5 and copies it into the parameter 'amount', a new local variable of this call. Inside, amount becomes 15 and printf puts '15' on the screen. Then the call ends and amount is destroyed. Nothing was handed back - the return type is void - so main learns nothing from the call. n is still 5. The 15 that appeared on the screen is not a value the programme holds; it is ink.
(3) addTenB(n) does exactly the same arithmetic on its own copy, but ends with 'return amount;', which hands 15 back as the VALUE OF THE CALL. main writes that value into n with 'n = addTenB(n);', so now n is 15.
The only difference between A and B is the last line of the body and the return type - and it is the whole difference between a function that changes what the programme knows and one that does not.

The three failures that follow, and their fixes.

(a) 'double t = addTenA(5);' - INVALID. void is the return type of a function that returns no value, so the call has no value to assign. It is not zero; there is nothing there. Fix: use addTenB, whose return type is int.

(b) A function that promises and does not deliver:
        double net(double gross) { printf("%.2f\n", gross * 0.9); }
    The return type says a double comes back; no 'return' statement exists, so 'double n = net(200);' leaves n meaningless while 180.00 sits harmlessly on the screen. Fix: 'return gross * 0.9;' and let the caller print it - or change the return type to void and stop assigning it.

(c) The swap that swaps nothing:
        void swap(int a, int b) { int t = a; a = b; b = t; }
        int p = 2, q = 9;  swap(p, q);  printf("%d %d\n", p, q);   /* prints 2 9 */
    a and b are copies; they are exchanged perfectly and then destroyed. The body is correct and the function is useless, which is why re-reading the body never finds the bug. Fix at this level: pass the addresses, 'void swap(int *a, int *b) { int t = *a; *a = *b; *b = t; }' called as 'swap(&p, &q);' - and note that the fix had to appear in the HEADER, because a function that reaches into its caller's variables must say so in its interface.

The check that exposes all three in one line: after any call, print the CALLER'S variable, not the function's. If it did not change and no value was returned, the call did nothing that the rest of the programme can use.
