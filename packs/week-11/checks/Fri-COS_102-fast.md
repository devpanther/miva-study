# Friday — COS_102 fast-hour check

*The same Week 11 material applied to concrete design judgements rather than recalled.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

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

**9. (show your working)** Regroup the functions of this module into high-cohesion modules. Name each new module, list its functions, and state how many modules you end with. Show your working.

```
module UserTools:
    register, login, send_newsletter,
    generate_sales_report, reset_password, export_sales_csv
```

**10. (show your working)** A team proposes splitting Utils, which holds four unrelated functions, into four separate modules with one function each. State whether the program's external behaviour changes, three things the split buys, and two costs it may bring, taken from the disadvantages of modularisation. Show your working.

**11. (show your working)** This is a horizontal partition. Count how many times a value crosses a module interface, in or out, during one call of run(); list the crossings in order, then name the stated cost of horizontal partitioning that this shows. Show your working.

```
module Control:
    run():
        rows  = Reader.read()
        clean = Validator.check(rows)
        total = Summer.sum(clean)
        Printer.show(total)
```

**12. (show your working)** A team splits a 6,000-line program into forty files and reports that it is now modularised. Explain what is missing from that claim: what makes a module independent, and what test you would apply to each of the forty files to decide whether the program really has been modularised rather than merely decomposed.

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

**9.** *Redrawing module boundaries for cohesion.* Sort the functions by the aim each serves. register, login and reset_password all manage a user's account. send_newsletter is marketing communication. generate_sales_report and export_sales_csv both produce sales output. So: Accounts (register, login, reset_password), Marketing (send_newsletter), SalesReports (generate_sales_report, export_sales_csv). Three modules, each with one aim, and the external behaviour of every function unchanged.

A correct answer produces three modules with those groupings, or a defensible variant such as merging the newsletter into a Communications module on its own; it must not leave sales reporting inside the account module. Names may differ. Two modules (accounts versus everything else) is not accepted, since 'everything else' still mixes marketing with reporting.

**10.** *Costs and benefits of a refactor.* External behaviour does not change: each function still takes the same inputs and produces the same outputs, so this is a refactoring. It buys easier integration, easier testing and easier maintenance of the components, because each module now has a single aim and can be changed or tested without dragging the other three along; it also makes each module easier to reuse elsewhere. The costs come from the disadvantages of modularisation: any two of longer execution time, larger storage size, longer compilation and loading time, more inter-module communication problems, and more initial design time.

A correct answer says behaviour is unchanged, gives three benefits of the kind above, and names two of the five listed disadvantages. Claiming the split makes the program faster is wrong; longer execution time is a listed cost.

**11.** *Counting interface crossings in horizontal partitioning.* Follow the data. 1: rows returned from Reader to Control. 2: rows passed from Control into Validator. 3: clean returned from Validator to Control. 4: clean passed into Summer. 5: total returned from Summer to Control. 6: total passed into Printer. Six crossings, and every piece of data passes through Control twice on its way from one worker to the next. That is the stated cost: horizontal partitioning requires the passing of more data across the module interfaces, which makes the control flow more complex, especially where data moves rapidly from one function to another.

Final answer: 6 crossings. Also accepted: 3 if the student counts each worker call as one exchange, provided the list is consistent and the cost is named correctly. A correct answer lists the crossings in order and names the extra data passing across interfaces as the cost.

**12.** *Decomposition versus modularisation.* Cutting the code into files is decomposition: the application has been broken into parts. Modularisation requires that each part be an independent module with everything it needs to implement only its part of the functionality. Independence is measured by cohesion and coupling: the functions in each file should work together towards one aim (high cohesion), and each file should depend as little as possible on other files before it can do its job (low coupling), with its data structures hidden behind a controlled interface. The test for each file: do all its functions serve one aim, and can it be changed or tested without editing the other files? Forty files that reach into each other's data structures are decomposed but not modularised.

A correct answer separates decomposition from modularisation, names independence with cohesion and coupling (information hiding is a bonus), and gives a concrete test per file.
