# Friday — COS_102 fast-hour check

*The same Week 11 material applied to concrete design judgements rather than recalled.*
*12 questions, straight after the hour. Score out of 12.*

**1.** Which module has the lowest cohesion?

```
module Cart:     add_item, remove_item, cart_total
module Auth:     login, logout, reset_password
module Helpers:  format_date, send_sms, compute_tax, resize_image
module Reports:  daily_sales, monthly_sales, export_csv
```
A. Cart
B. Helpers
C. Auth
D. Reports

**2.** Which line couples Orders to the internal data structure of Stock?

```
1 module Stock:
2     levels = {}                      # sku -> units
3     reserve(sku, n): levels[sku] = levels[sku] - n
4
5 module Orders:
6     place(sku, n):
7         if Stock.levels[sku] >= n:
8             Stock.reserve(sku, n)
```
A. Line 8
B. Line 3
C. Line 7
D. Lines 7 and 8

**3.** Four changes are proposed to a working compute_bill() function. Which one is a refactoring?
A. Split compute_bill into three smaller functions; every input still gives the same output
B. Add a student discount to compute_bill
C. Change compute_bill to round totals to the nearest naira
D. Make compute_bill reject negative quantities it previously accepted

**4.** Main is the top of the hierarchy. Which line breaks vertical partitioning?

```
1 module Main:
2     run():
3         rows = Input.read_rows()
4         total = 0
5         for r in rows: total = total + r.amount
6         Output.show(total)
7 module Input:  read_rows()
8 module Output: show(x)
```
A. Line 3: the control module calls Input
B. Line 5: the control module does the computation
C. Line 6: the control module calls Output
D. Nothing: Main only makes decisions

**5.** Project P: a payroll system to be built from scratch, with the detailed requirements still unknown. Project Q: a dashboard to be assembled from an existing, tested library of chart and query primitives. Which design approach suits each?
A. P bottom-up, Q top-down
B. Both top-down
C. P top-down, Q bottom-up
D. Both bottom-up

**6.** Module Marks keeps every student's scores in a table. Module Transcript needs one student's average. Which interface obeys 'pass only the information required to accomplish the function'?
A. `Marks.average(student_id, scores_table)`
B. `Marks.table`, read directly by Transcript
C. `Marks.average(student_id)`
D. `Marks.dump_all()`, returning a copy of every score

**7.** Users changes its internal list to a dictionary. How many of the other modules must be edited?

```
module Users:   list = []  (internal);  count()
module Login:   calls Users.count()
module Admin:   reads Users.list directly
module Report:  reads Users.list directly
module Mailer:  calls Users.count()
```
A. 4
B. 1
C. 0
D. 2

**8.** Cohesion and coupling are the two measures of module independence. Where is each one judged?
A. Cohesion between modules; coupling inside a module
B. Cohesion inside a module; coupling between modules
C. Both inside a module
D. Both between modules

**9.** Regroup these functions into high-cohesion modules. Which grouping results?

```
module UserTools:
    register, login, send_newsletter,
    generate_sales_report, reset_password, export_sales_csv
```
A. Accounts (register, login, reset_password), Marketing (send_newsletter), SalesReports (generate_sales_report, export_sales_csv)
B. Accounts (register, login, reset_password) and Other (send_newsletter, generate_sales_report, export_sales_csv)
C. Accounts (register, login), Reports (send_newsletter, generate_sales_report, export_sales_csv), Security (reset_password)
D. Six modules, one for each function, since no two of them share an aim

**10.** Utils holds four unrelated functions and is split into four one-function modules, leaving the program's behaviour unchanged. Which of these is a real disadvantage of modularisation that the split may bring?
A. Lower cohesion in each of the four modules
B. Harder testing of each function on its own
C. A change in the program's output
D. Longer compilation and loading time

**11.** Counting each value passed into a module and each value returned from one, how many times does a value cross a module interface during one call of run()?

```
module Control:
    run():
        rows  = Reader.read()
        clean = Validator.check(rows)
        total = Summer.sum(clean)
        Printer.show(total)
```
A. 6
B. 4
C. 3
D. 8

**12.** A team splits a 6,000-line program into forty files and reports that the program is now modularised. What is missing from that claim?
A. Nothing: a program split into separate files is modularised.
B. Each file must also be compiled separately before the claim holds.
C. Each file must hold exactly one function before the claim holds.
D. Splitting is decomposition; modularisation also needs each file to be cohesive and loosely coupled.

---

## Answers

**1. B** — *Judging cohesion from a function list.* Cohesion is the extent to which the functions in a module work together towards one aim. Cart's three functions all manage the cart, Auth's all manage sign-in, Reports' all produce sales reports. Helpers' four functions (dates, SMS, tax, images) serve four unrelated aims, so it has the lowest cohesion.

Picking Cart, Auth or Reports mistakes 'has several functions' for low cohesion; the test is whether the functions share an aim, not how many there are.

**2. C** — *Spotting coupling through a shared data structure.* Line 7 reads Stock.levels directly, so Orders now depends on Stock keeping its stock in a dictionary indexed by sku. If Stock changes that structure, Orders breaks. Line 8 calls the function Stock provides, which is the controlled interface: Orders depends on Stock's function, not on its internals, so that is acceptable coupling.

Line 3 is Stock using its own data, which is normal; 'lines 7 and 8' treats every dependency as bad, but a module calling another's interface is how modules are meant to communicate.

**3. A** — *Identifying a refactoring.* Refactoring is modifying a software system to improve the internal structure of the design without changing its external behaviour. Splitting the function while every input gives the same output changes only the internal structure.

Adding a discount adds functionality; rounding changes the values returned; rejecting inputs that were accepted changes what the function does for some inputs. All three alter external behaviour, so none is refactoring.

**4. B** — *Checking a hierarchy against vertical partitioning.* In vertical partitioning the top-level control modules do the decision-making and little processing, while the worker modules perform all input, computation and output. Line 5 has Main summing the amounts itself: computation in the control module. The fix is a worker such as Totals.sum(rows).

Lines 3 and 6 are the control module directing workers to do input and output, which is exactly its job; 'nothing' misses that Main is doing the arithmetic.

**5. C** — *Choosing top-down or bottom-up design.* Top-down is more suitable when the solution needs to be designed from scratch and specific details are unknown: P. Bottom-up is more suitable when a system is created from an existing system whose basic primitives can be used in the newer one: Q.

Reversing them starts P from primitives it does not have and decomposes Q as if its library did not exist; 'both top-down' throws away Q's reusable primitives; 'both bottom-up' has nothing to compose P from.

**6. C** — *Choosing an interface that hides information.* Transcript needs one number for one student. Marks.average(student_id) takes only the identifier and returns only that number; the table stays inside Marks, so it can be reorganised without touching Transcript.

Passing scores_table hands the internal structure across the interface, so Transcript must know its layout; reading Marks.table directly gives Transcript access to the data structure, which is what information hiding forbids; dump_all() returns far more than is required and exposes every score.

**7. D** — *Effect of information hiding on change.* Login and Mailer use only the interface count(), which Users can keep working however the data is stored, so they need no change. Admin and Report reach into the list directly, so when it becomes a dictionary their code breaks and must be edited: 2. This is the benefit of information hiding, restricting the effects of a change in one component on others.

4 assumes every module that uses Users must change; 0 assumes the change is invisible to everyone, forgetting the two direct readers; 1 miscounts the direct readers.

**8. B** — *Where cohesion and coupling are judged.* Cohesion is the extent to which the functions in a module work together to achieve the aim of the module, so it is judged inside one module and should be high. Coupling is the extent to which modules depend on other modules before performing their function, so it is judged between modules and should be low.

The first option swaps them; the other two lose the distinction that one measure looks inward and the other outward.

**9. A** — *Redrawing module boundaries for cohesion.* Sort the functions by the aim each one serves: register, login and reset_password all manage an account; send_newsletter is marketing; generate_sales_report and export_sales_csv both produce sales output. That gives three modules, each with a single aim, and no function's behaviour changes.

The 'Other' module still mixes marketing with reporting, so it is no more cohesive than before; splitting reset_password away from login breaks up one aim and calling a newsletter a report mixes two; and one module per function ignores that three of them do share an aim.

**10. D** — *Costs of modularisation.* Splitting the code raises the number of modules, and the costs of modularisation are longer execution time, larger storage, longer compilation and loading time, more inter-module communication problems and more time spent on the initial design. Longer compilation and loading is one of them.

Cohesion rises rather than falls, since each module now has one aim; testing gets easier for the same reason; and a refactoring leaves the external behaviour exactly as it was, which is what makes it a refactoring rather than a rewrite.

**11. A** — *Counting interface crossings in horizontal partitioning.* Follow the data: rows returned from Reader, rows passed into Validator, clean returned from Validator, clean passed into Summer, total returned from Summer, total passed into Printer. That is six crossings, and every value goes through Control on its way from one worker to the next.

3 counts only the values returned; 4 counts one crossing per module called; 8 counts two crossings for Reader, which is passed nothing, and for Printer, which returns nothing. This extra data passing is the cost of horizontal partitioning.

**12. D** — *Decomposition versus modularisation.* Cutting an application into parts is decomposition. Modularisation goes further: each part must be an independent module holding everything it needs for its own part of the functionality, which is measured by high cohesion inside the file and low coupling to the others. Forty files that reach into each other's data structures are decomposed and not modularised.

Separate compilation and one function per file are neither necessary nor sufficient, and the bare split is exactly the claim being questioned.
