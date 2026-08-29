# Saturday — COS_102 nightly check

*Week 11 concepts applied to concrete design judgements: reading a listing and deciding whether a module is cohesive, what it is coupled to, how to decompose it, which principle a design violates, and what a proposed refactor actually buys and costs.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Consider this module:

```
module AccountUtils:
    validate_email(address)
    compute_payroll_tax(employee, year)
    send_confirmation_email(user)
    resize_avatar_image(file, width, height)
```

The best diagnosis is:
a) High cohesion and high coupling, because all four functions concern users
b) Low coupling, therefore high cohesion, since the two always move together
c) Acceptable cohesion, because each individual function has a single responsibility
d) Low cohesion, because the functions do not work together towards one ultimate aim of the module, whatever their coupling to other modules

**2.**

```
module Inventory:
    stock_level = { }          # sku -> integer

module OrderProcessor:
    place_order(sku, n):
        Inventory.stock_level[sku] = Inventory.stock_level[sku] - n
        ...
```

Which judgement is correct?
a) Coupling is low, because `OrderProcessor` calls no function of `Inventory`
b) Coupling is high, because `OrderProcessor` depends on `Inventory`'s internal data structure before it can perform its function, which is exactly what information hiding forbids
c) Cohesion of `Inventory` is low, because it stores data instead of performing functions
d) This is good vertical partitioning: `OrderProcessor` decides and `Inventory` merely holds data

**3.** A component performing four weakly related functions is split into four high-cohesion components. Using only what the decks state, what does this buy and what does it cost?
a) Buys easier integration, testing and maintenance; costs possible longer execution time, larger storage, longer compilation and loading, and more inter-module communication
b) Buys reduced execution time and smaller storage; costs a loss of information hiding
c) Buys lower coupling automatically; costs nothing, since external behaviour is unchanged
d) Buys easier testing; costs a violation of the single responsibility principle, since responsibility is now spread across four modules

**4.**

```
module ReportRunner:                  # top of the hierarchy
    run():
        rows = read_csv("sales.csv")
        totals = sum_by_region(rows)
        print_table(totals)

module Constants:                     # bottom of the hierarchy
    REGIONS = [...]
```

Judged against the deck's description of vertical partitioning, the defect is:
a) None: the top module correctly communicates between functions and executes them
b) `Constants` should be at the top, since values are decided before they are used
c) The top-level control module is doing all the input, computation and output, which the deck assigns to low-level worker modules; the top should be deciding and processing little
d) The hierarchy is too shallow, so horizontal partitioning should be used instead

**5.** A team must build a new analytics service on top of an existing, well-tested set of data-access and statistics primitives already in use elsewhere in the company. Which approach does the deck say is more suitable, and why?
a) Bottom-up, because a system created from an existing system can compose higher-level components from basic primitives, with abstraction increasing at each higher level
b) Top-down, because the service is new and must first be seen as one whole entity
c) Top-down, because the specific details of the primitives are already known
d) Bottom-up, because bottom-up design avoids the extra initial design time that modularisation demands

**6.** A pull request titled "refactor `charge_card`" both extracts the retry logic into a helper and changes the function so that on a network timeout it now returns `PENDING` where it previously returned `FAILED`. Under the deck's definition, this is
a) refactoring, because the internal structure was improved and the helper raised cohesion
b) refactoring, because the caller can be updated to handle the new value
c) not refactoring, because the external behaviour of the system has been changed
d) not refactoring, because refactoring may never introduce a new module or helper

**7.** Two candidate interfaces for the same feature:

```
A:  render_post_summary(db_connection, cursor, raw_row_dict, template_cache)
B:  render_post_summary(post_id) -> string
```

Which is preferred and on what stated grounds?
a) A, because passing the connection avoids a second lookup and so shortens execution time
b) A, because more parameters make the dependency explicit and therefore reduce coupling
c) B, but only if `render_post_summary` is the sole function in its module
d) B, because it passes only that much information as is required to accomplish the function and keeps the caller from touching internal data structures

**8.** A monolithic 5,000-line function is split into 30 modules stored in separate files. Which outcome is *not* predicted by the decks?
a) Different people can now work on different parts of the program
b) Storage size may increase and loading time may lengthen
c) Every module is now independent, because separate files cannot depend on each other
d) A change to one part is less likely to affect the other parts

**9. (explain why)** You inherit this module:

```
module UserManager:
    register(user)
    login(email, password)
    send_marketing_newsletter()
    backup_database()
```

State whether it is cohesive, give the specific refactor you would perform, and explain what property of each resulting module the refactor is aimed at — not merely that it becomes "cleaner".

**10. (explain why)** In question 2, suppose you replace the direct write with a call `Inventory.reduce_stock(sku, n)`. Explain why this genuinely lowers coupling rather than simply relocating the dependency, and name what `OrderProcessor` is now permitted to know about `Inventory`.

**11. (explain why)** You are decomposing the user-registration feature of a social media platform into validating the user's input, creating a new user account, and sending a confirmation email. Explain the criterion you would use to group these and other subproblems into modules such as user management, post management and following management, and justify that criterion using cohesion and coupling rather than by appeal to tidiness.

**12. (explain why)** After splitting a working monolith into forty small modules, a team finds request latency has risen, the build takes three times as long, and two teams keep breaking each other's interfaces. Explain which of the deck's stated disadvantages of modularisation these are, and argue — using cohesion — whether the split was wrong in principle or wrong in where the boundaries were drawn.
