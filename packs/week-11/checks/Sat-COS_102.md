# Saturday — COS_102 applied design nightly check

*Design work only, on this week's material: judging the cohesion of a module you are shown, judging the coupling of a fragment or an interface sketch, spotting a decomposition that is modular in name only, choosing the better of two supplied designs and saying exactly what makes it better, reading a structure sketch and naming the partitioning, deciding which of the two design approaches a described situation calls for, and telling a refactoring from a change of behaviour in a real diff. No definitions recited on their own, no lists of advantages, no pattern taxonomy — those were Wednesday.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** A team takes one 5,000-line file and splits it into ten files of 500 lines each. Every file still reads and writes the same set of global variables, exactly as before. What has been achieved?

a) Modularisation, since the program's functionality is now divided into ten separate modules saved in separate files, which is the course's definition
b) A separation into files but not into modules: the definition requires **independent** modules each holding everything it needs, and ten units sharing one set of globals still cannot be changed without affecting each other — meanwhile all five disadvantages have been paid
c) High cohesion but high coupling, since each file is now small enough to have a single aim while the shared globals keep the files dependent on one another
d) A refactoring that will need to be reversed, since the course lists longer compilation and loading time as a disadvantage and no advantage has been gained to offset it

**2.** Two designs for the same requirement. Which is better, and why?

```python
# DESIGN A
import config
def net_pay(gross):
    rate = config.SETTINGS["tax"]["paye"]["rate"]
    return gross * (1 - rate)

# DESIGN B
def net_pay(gross, rate):
    return gross * (1 - rate)
```

a) A, because the rate is held in one place instead of being repeated at every call, which is what avoids duplication in a design
b) A, because B has two parameters where A has one, and a narrower interface is by definition the more loosely coupled of the two
c) B, because `net_pay` no longer depends on `config` existing, on the name `SETTINGS`, or on three levels of key nesting — the rate can still be held in exactly one place, and what B removes is `payroll`'s knowledge of **where and how** it is stored
d) B, because a function with no imports executes faster, and the course lists execution time among the disadvantages that a good design must minimise

**3.** A module named `user_utils` contains `hash_password`, `resize_avatar`, `send_sms` and `parse_csv_export`. None of the four calls any of the others. Judge it.

a) High cohesion, because none of the four calls another, so nothing inside the module depends on anything else inside it
b) Low coupling and therefore high cohesion, since the two always move together and a module with no internal dependencies is by definition well formed
c) Low cohesion: the module has no single ultimate aim for the four functions to work towards, and the deck's own example is exactly this — a component performing four functions with a limited relationship with one another, to be refactored into four components each with high cohesion
d) Cohesion cannot be judged from this information, because cohesion is a measure of how often functions call one another and no call frequencies have been given

**4.** Two versions of the same module's published interface. Which follows information hiding, and what specifically does it buy?

```python
# VERSION A                          # VERSION B
class Account:                       class Account:
    balance = 0.0                        def balance(self): ...
    entries = []                         def deposit(self, amount): ...
    overdraft = 0.0                      def statement(self): ...
```

a) A, because it exposes three items where B exposes three functions, and exposing data is cheaper than exposing behaviour, so less crosses the interface
b) B: the data structures are not accessible to other modules, so `entries` can become a database table and `overdraft` a computed rule without any other module changing — which is the stated benefit that changes in one component are restricted from affecting others
c) A, because a caller of A can read `balance` without a function call, so A is more loosely coupled: fewer calls between modules is what low coupling means
d) Neither, because information hiding concerns whether other **people** can read the module's source, and both versions are equally readable

**5.** Read this structure. Which partitioning is it, and what are the two kinds of module called?

```
                    admissions_controller
                    (chooses which operation to run; almost no computation)
                   /            |             \
        read_form()      score_applicant()      print_offer()
        (all input)      (all computation)      (all output)
```

a) Horizontal partitioning, because a control module is present and control modules are what horizontal partitioning uses to communicate between functions and execute them
b) Vertical partitioning: the functionality is distributed top-down, with a **control module** at the top performing the decision-making and doing little processing, and **worker modules** below performing all input, computation and output
c) Horizontal partitioning, because the three lower boxes sit side by side across the diagram rather than one beneath the other
d) Neither, since structural partitioning applies only where the architectural style is not hierarchical, and this structure is plainly a hierarchy

**6.** A designer is asked to refactor a module that fetches, totals and renders a report. She splits it into three modules, and while doing so notices that the total was including a cancelled order and corrects it. Has she refactored?

a) Yes — the split improved the internal structure and correcting an obvious error is part of improving a design, since the deck says the existing design is checked for flaws during refactoring
b) Yes, and the fix is what makes it a refactoring: a change that leaves a known bug in place has not improved the module's behaviour or function
c) No, and the split was the mistake: refactoring reduces the complexity of module design, and going from one module to three increases it
d) Not purely: the split is a refactoring because external behaviour is unchanged, but the corrected total changes what the system outputs for the same input, so that part is a behaviour change and must be a separate step — otherwise, if anything breaks, nobody can say which of the two changes did it

**7.** `orders` calls `stock` in fourteen places. Told to reduce coupling, the team merges the two into one module, `sales`. The coupling between `orders` and `stock` is now zero. What has actually happened?

a) The coupling has genuinely been removed, since coupling is the extent to which modules depend on other modules and there is no longer another module for either half to depend on
b) The coupling reading fell to zero because the boundary was deleted, not the dependency: the same code still needs the same information, but it now runs where no interface governs it — and cohesion has fallen, since `sales` now has two responsibilities
c) Coupling has fallen and cohesion has risen, since the fourteen call sites are now internal, and functions that call one another inside a module are exactly what high cohesion means
d) Nothing has changed either way, because coupling and cohesion are properties of the functionality, and the same functionality is present before and after

**8.** A department already owns a tested library of working modules — `student_record`, `fee_ledger`, `course_catalogue` — and now wants a results portal built from them. Which approach does the course say suits this, and why?

a) Top-down, because the portal is a new system that does not yet exist, and top-down is the approach used whenever a system is being designed
b) Top-down, because the portal's requirements are known in full, and top-down is the approach used when the specific details of a solution are already known
c) Bottom-up, because the approach starts from the most specific and basic components and composes higher-level components from them, and is more suitable when a system is created from an existing system whose basic primitives can be used in the newer one
d) Bottom-up, because the portal is a small system, and top-down is reserved for systems large enough to need more than one level of decomposition

**9. (explain why)** This module works. Name **every** thing it depends on inside `results`, say exactly which of them are hidden data structures that should not have been accessible, state what happens on the day `results` moves its rows into a database, and rewrite it. Then say which of the two possible rewrites gives both modules better cohesion, and why.

```python
# module: transcript
import results

def gpa(student_id):
    rows = results.TABLE
    mine = [r for r in rows if r[0] == student_id]
    return sum(r[2] * r[3] for r in mine) / sum(r[3] for r in mine)
    # column 0 = student id, column 2 = grade point, column 3 = credit units
```

**10. (explain why)** A component `Registration` contains `validate_input`, `create_account`, `send_confirmation_email` and `compress_profile_photo`. Judge its cohesion and say precisely on what grounds. Apply the deck's refactoring, showing what you end up with, and state the payoff the deck claims for it. Then answer the harder half: a colleague, seeing this succeed, proposes splitting a genuinely high-cohesion module `fee_ledger` (`post_charge`, `post_payment`, `balance`, `statement`) into four modules by the same reasoning. Say what happens to cohesion and coupling if he does, and what that shows about when splitting is the right operation.

**11. (explain why)** Two designs for a results system are proposed.

```
DESIGN 1 - one module per technical activity
    validation      validates students, results, fees, staff records
    database        every read and write in the system
    email           every message the system sends

DESIGN 2 - one module per area of the business
    student_records  holds student data; validates and stores it; answers questions about it
    results          holds results; validates and stores them; computes GPA
    notifications    sends whatever it is asked to send
```

Choose one, and justify the choice in the week's own terms — cohesion, coupling, information hiding, and the single responsibility principle. Say what happens under each design when the rule for a valid matriculation number changes, and what happens when the database is replaced. Then name **one** of the course's five disadvantages of modularisation that you incur either way, and say why it is worth paying.

**12. (explain why)** Read this structure, name the partitioning, and say which of the course's named costs it carries.

```
   fees_controller  <->  results_controller  <->  transcript_controller
        |                      |                        |
   compute_fees()        compute_gpa()            format_pdf()
```

Then redraw it under the other kind of structural partitioning, naming the modules and saying what each does. Finally, say which of the two structures makes it easier to add a fourth feature, and which of the course's stated benefits of structural partitioning that illustrates.

---

## Answers

**1. b.** *Concept: modularisation divides functionality into independent modules; splitting files divides text.* The definition requires **independent** modules, each with **everything it needs** to implement **only a part** of the functionality. Ten units that all read and write one set of globals are not independent: any of them can be affected by any other, so the deck's stated benefit — being able to **make changes to different parts of our code without affecting other parts** — has not been obtained, and the fault the deck complained of, **changing a part of the code can affect other parts of the code**, is untouched. Meanwhile the disadvantages have all arrived: more units to compile and load, more inter-module communication, more design time spent. (a) treats "saved in separate files" as the definition; the deck offers that as something modularisation *permits*, not as what it is. (c) is the most tempting wrong answer and fails on cohesion: file size has nothing to do with whether the functions in a unit serve one aim, and slicing a 5,000-line file every 500 lines will cut straight through aims rather than between them. (d) misuses "refactoring": nothing here is defined by unchanged external behaviour, and in any case the deck lists the compilation cost as a disadvantage to be accepted, not a reason to reverse a design.

**2. c.** *Concept: coupling is what a module must know about another, and information hiding removes the possibility of knowing it.* Design A's `net_pay` cannot perform its function until it knows that a module called `config` exists, that it holds a name `SETTINGS`, that `SETTINGS` is a nested structure, and that the rate lives under the keys `"tax"`, `"paye"`, `"rate"` in that order. Every one of those is a **data structure or processing detail of another module**, which is exactly what information hiding says must not be accessible; rename one key and `net_pay` breaks. Design B depends on nothing — the caller supplies the rate, so the rate may still be held in `config` and read once, at the edge of the system, by the module whose aim that is. (a) is the strongest distractor because its premise is true and its conclusion does not follow: B does not duplicate the rate. The rate stays in one place; what moves is the *knowledge of where that place is*. (b) counts parameters as though a shorter signature were automatically looser; A's true interface is not one parameter but one parameter plus an entire nested structure it silently reads, and a hidden dependency is worse than a declared one precisely because the header does not warn you. (d) reaches for a real item from the disadvantages list and applies it as though design were an optimisation exercise; execution time is not the ground on which coupling is judged.

**3. c.** *Concept: cohesion asks whether the functions serve one ultimate aim; it is not the inverse of coupling and it is not about internal calls.* Password hashing, image resizing, SMS sending and CSV parsing are four aims. There is no sentence of the form "this module's ultimate aim is ___" that all four serve, which is precisely the deck's refactoring example — **a component performs four functions that have a limited relationship with one another**, to be refactored into **four different components, each exhibiting high cohesion**. The name `utils` is the usual signature of the fault. (a) inverts the test outright: absence of internal calls is neither evidence for nor against cohesion. Two functions serving one aim need not call each other, and this question exists to break the habit of reading "cohesion" as "stuck together". (b) is the trap the whole item is built for, and it is the single most common misuse of the vocabulary: it treats cohesion and coupling as one measurement, so that improving one must improve the other. They are readings taken in **different places** — coupling between modules, cohesion inside one — and this module demonstrates the point by scoring badly on cohesion while saying nothing at all about coupling. (d) states a definition of cohesion the course does not give; the course's is the **ultimate aim of the module**, which is fully judgeable from the four names.

**4. b.** *Concept: an interface that exposes data structures cannot hide them, and what hiding buys is freedom to change.* Version A publishes three **data structures** — a float, a list and a float — so every other module may read them, and some will. From that moment `entries` must remain a list, `balance` must remain a stored number rather than a computed one, and `overdraft` must keep its name. Version A therefore makes the deck's third benefit unavailable: changes in one component are no longer restricted from affecting others. Version B publishes only what the module **does**, so `entries` can move to a database table and `balance` can become a computation over the entries, and no other module changes a line. (a) argues that exposing data is "cheaper"; it is cheaper to write and far more expensive to change, and the quantity crossing the interface is not the measure — what the other side may **depend on** is. (c) is the persistent "coupling means call traffic" error, applied here in its most seductive form: reading `account.balance` looks like *less* interaction than calling `account.balance()`, but it is *more* dependence, because it fixes how the value is stored as well as what it is. (d) is Week 8's misreading of hiding as secrecy, restated at module scale; both versions are equally readable by a person, and only one of them is unreachable by other code.

**5. b.** *Concept: vertical partitioning distributes functionality top-down into control and worker modules.* The deck's sentence matches the sketch word for word: "the functionality is distributed among the modules in a **top-down** manner. The modules at the top level called **control modules** perform the **decision-making and do little processing**, whereas the modules at the low level called **worker modules** perform **all input, computation and output** tasks." The controller chooses; the three below it do the reading, the computing and the printing. (a) is the trap, and it is a fair one: control modules **are** mentioned under horizontal partitioning too — "control modules are used to communicate between functions and execute the functions" — so the presence of a controller decides nothing. What decides it is that the split here is by **level of responsibility** (deciding above, doing below), not by **function** side by side. (c) reads the geometry of the drawing rather than the structure: any hierarchy drawn on paper puts siblings side by side, and horizontal partitioning means one branch **per major function**, each branch containing its own deciding and doing. (d) inverts the precondition — the deck introduces structural partitioning precisely for the case where "the architectural style of a design follows a **hierarchical** nature".

**6. d.** *Concept: refactoring is defined by unchanged external behaviour, which is why a behaviour change must not be mixed into one.* The split leaves outputs identical, so it is a refactoring — "modifying a software system to improve the internal structure of design **without changing its external behaviour**". The corrected total does not: for the same input the system now prints a different number, which is a change of **external behaviour** and therefore, by definition, not part of the refactoring. The practical reason to keep them apart is the whole value of the word: a refactoring carries the guarantee that nothing observable changed, so if a test fails afterwards, something is wrong with the restructuring. Merge a deliberate behaviour change into it and that guarantee is gone — a failure could now be the split or the fix, and the two must be untangled by hand. (a) misreads "the existing design is checked for any type of flaws like redundancy, poorly constructed algorithms and data structures": those are **design** flaws — structure — not incorrect outputs, and correcting them is what leaves behaviour unchanged. (b) inverts the definition, making behaviour change a requirement of refactoring, which would leave no word for the thing that changes structure safely. (c) misreads "reduces the complexity of module design" as "reduces the number of modules"; the deck's own example goes from one component to four and calls that a reduction in complexity, because complexity is measured per module design, not per count.

**7. b.** *Concept: coupling is a reading taken across a boundary; deleting the boundary deletes the reading, not the dependency.* Nothing about what the code needs has changed — the same fourteen places still require the same stock information at the same moments. What has changed is that they now run inside one module, where no interface constrains them, no review sees them, and nothing prevents them growing into reads of each other's internal structures. And the merge costs cohesion: `sales` now carries **two** responsibilities, so the deck's single responsibility principle — "modules should not have more than a single responsibility" — is broken to satisfy a coupling metric. The correct operation is the reverse: keep the boundary and **narrow** what crosses it, so that `orders` depends on one or two published questions rather than on `stock`'s internals. (a) is exactly the reasoning the team used and is the reason this is the week's most misunderstood idea: it treats the metric as the goal, and any two coupled modules can be "fixed" by merging until the whole program is one module with a coupling of zero — the very 5,000-line function the deck opened by condemning. (c) misuses cohesion as "the functions call each other a lot"; the test is one **ultimate aim**, and `sales` now has two. (d) is right that the functionality is unchanged and wrong that nothing has changed: cohesion and coupling are properties of the **division**, which is precisely what was altered.

**8. c.** *Concept: bottom-up suits building on existing primitives; top-down suits designing from scratch when details are unknown.* The course states it directly: bottom-up "starts with the **most specific and basic components**", "proceeds with composing higher level of components by using basic or lower level components", and is "**more suitable when a system needs to be created from some existing system, where the basic primitives can be used in the newer system**". Three tested modules are exactly such primitives. (a) is the answer that comes from remembering only that top-down means "start with the whole system", and it treats *newness* as the criterion; the criterion the course gives is whether the **specific details are unknown**, and here they are known — the modules exist and their interfaces can be read. (b) inverts the course's own condition: top-down is more suitable when specific details **are unknown**, not when they are known. (d) invents a size rule; neither approach is described in terms of system size, and in practice the deck insists that a **good combination of both** is used at any size — the portal's top-level structure will still be decided top-down, and the two meet in the middle.

**9.** *Concept: naming a hidden dependency exactly, and repairing it so that each module keeps its own aim.* **What `transcript` depends on inside `results`.** Five things, only one of which is legitimate: (1) that a module `results` exists and can be imported — legitimate, this is the intended dependency; (2) that it exposes a name `TABLE` — a **data structure**, not a service; (3) that `TABLE` is an iterable of rows that can be filtered — its **shape**; (4) that **column 0** is the student id, **column 2** the grade point and **column 3** the credit units — its **field order**, the most brittle dependency of the five, because it is a fact about storage that no reader of `transcript` can verify without opening `results`; (5) that every row belonging to a student is present in that one table, i.e. a fact about how `results` **processes** its data. Items 2 to 5 are exactly what the deck says must not be accessible: "the **data structures and processing details** of one module are not accessible to other modules". **What happens when `results` moves to a database.** `results.TABLE` disappears, and `transcript` fails — but note the two ways it can fail, because the exam likes the second. If the name is gone entirely, the failure is loud and immediate. If `results` keeps a `TABLE` for compatibility but reorders the columns, or adds a column at position 2, `transcript` keeps running and returns **wrong GPAs silently** — grade point multiplied by the wrong field. Nothing in `transcript` looks wrong on the page, which is why this class of fault survives review. **The two rewrites.**

```python
# REWRITE 1 - ask results for the answer
import results
def gpa(student_id):
    return results.weighted_average(student_id)

# REWRITE 2 - ask results for the facts; do the arithmetic here
import results
def gpa(student_id):
    entries = results.entries_for(student_id)      # [(grade_point, credit_units), ...]
    return sum(p * u for p, u in entries) / sum(u for _, u in entries)
```

**Which is better, and why.** Both remove the field-order dependency, which is the urgent repair. But **Rewrite 2 gives both modules better cohesion.** `results`'s ultimate aim is to **hold and serve results**; `transcript`'s is to **compute and present a student's academic record**, of which the GPA formula is a part. Rewrite 1 moves the GPA formula into `results`, giving that module a second responsibility — storage *and* academic arithmetic — which is the single responsibility principle broken to save a line. Rewrite 2 keeps each module on its own aim and still passes only **that much information as is required to accomplish the software function**: a list of (points, units) pairs, which is the minimum from which a GPA can be computed and reveals nothing about tables, columns or rows. Note also what Rewrite 2 does **not** do: it does not pass fewer facts than needed. Passing only the points, or only the units, would not be better hiding — it would be a broken interface.

**10.** *Concept: judging cohesion, applying the deck's refactoring, and recognising when splitting is the wrong operation.* **The judgement.** `Registration` has **low cohesion**. The test is whether the functions "work together to achieve **the ultimate aim of the module**", and there is no single aim these four share: validating input is a rule-checking job, creating an account is a storage job, sending an email is a messaging job, and compressing a photo is an image-processing job. Note the ground carefully — it is *not* that the four are never used together. They may well all run during one registration, and a student who answers "high cohesion, because they all happen at sign-up" has confused **being invoked in the same sequence** with **serving the same aim**. The evidence for four aims is that each function would change for a different reason: a new password rule, a new database, a new mail provider, a new image format. **The refactoring.** This is the deck's own example — "a design model might yield a component which exhibits low cohesion (like a component performs four functions that have a limited relationship with one another). Software designers may decide to refactor the component into **four different components, each exhibiting high cohesion**."

```
BEFORE                          AFTER
Registration                    Validation      -> validate_input
  validate_input                Accounts        -> create_account
  create_account                Notifications   -> send_confirmation_email
  send_confirmation_email       Media           -> compress_profile_photo
  compress_profile_photo        plus a thin Registration that calls the four in order
                                same inputs, same outputs, same external behaviour
```

The deck's claimed payoff: this "leads to **easier integration, testing, and maintenance** of the software components" — and it is a **refactoring** only because the system's external behaviour is unchanged. **The harder half: splitting `fee_ledger`.** `post_charge`, `post_payment`, `balance` and `statement` all serve **one** ultimate aim — maintaining and reporting a student's financial position — and all four operate on the same ledger entries. Split them into four modules and two things go wrong at once. **Cohesion falls**, not rises: each new module holds a fragment of one aim rather than the whole of a smaller aim, so none of them can be described without mentioning the other three, and none of them satisfies "has **everything it needs** to implement **only a part** of the functionality". **Coupling rises sharply**: the ledger entries must now live somewhere and be reachable from all four, so either they become shared data — the very fault of Question 1 — or three of the modules must call the fourth for every operation, which is a boundary crossed on every single posting. The five disadvantages arrive too: more inter-module communication, more calls at run time, more design effort, for no benefit. **What this shows.** Splitting is not a general improvement; it is the correct operation **only where the seams already exist**. The deck splits a component **because it exhibited low cohesion** — because it already contained four aims and merely lacked the boundaries between them. Cutting along a seam raises cohesion and adds almost no coupling; cutting across one lowers cohesion and adds a great deal. The question to ask before splitting is therefore not "is this module big?" but "**can I name two aims in it, each of which would change for a different reason?**"

**11.** *Concept: choosing between two decompositions, and judging the choice by change.* **The choice: Design 2.** **Cohesion.** In Design 2 each module has a nameable ultimate aim — student data, results, notification — and every function in it serves that aim. In Design 1 the module `validation` has no single aim at all: it validates students *and* results *and* fees *and* staff records, which are four unrelated bodies of rules that will change for four unrelated reasons. `database` is worse, since "every read and write in the system" is not an aim but an activity, and it can only be described by listing everything the system does. Design 1's modules are `utils` modules with respectable names. **Coupling.** In Design 1 no feature lives in one module, so `student_records` functionality is spread across `validation`, `database` and `email` and every one of those must know the shape of a student record — three modules depending on one structure. In Design 2 the structure of a student record is known to `student_records` and to nothing else. **Information hiding.** Design 2 permits it: how student data is stored is a **processing detail** inside `student_records`, and the other modules pass only **that much information as is required**. Design 1 forbids it, because `database` must know the internal shape of every kind of record in the system in order to store it — the data structures are, by construction, accessible everywhere. **Single responsibility.** Design 2's modules have one responsibility each; Design 1's have as many as the system has kinds of data. **Under the two changes.** *A new rule for valid matriculation numbers:* Design 2 changes **one module**, `student_records`, and nothing else compiles differently; Design 1 changes `validation` — but `validation` also holds the rules for results, fees and staff, so the change is made in a module that four unrelated features depend on, and a mistake there can break any of them. That is the deck's original complaint verbatim: **changing a part of the code affects other parts of the code**. *Replacing the database:* here Design 1 looks better at first sight — one module to rewrite — and this is the honest half of the answer. But `database` must still be rewritten for every kind of record it holds, so the work is the same; the difference is that in Design 2 the change is made three times in three modules that can be changed and tested **independently and by different people**, which is the first stated advantage of modularisation, while in Design 1 it is one large simultaneous change to a module the whole system depends on. **A disadvantage incurred either way.** Any of the five: most obviously **inter-module communication problems may be increased** — every request that used to be a local call is now a crossing between modules, with an interface to agree, keep stable and get wrong; or **it demands more initial design time**, since deciding where the boundaries go is work that produces no running code on the first day. It is worth paying because the alternative is the 5,000-line function the deck opens with: cheap to start, and unchangeable thereafter. The cost is paid once, at the start, in design; the benefit is collected at every change for the life of the system.

**12.** *Concept: reading a structure, naming the partitioning, and knowing which cost belongs to it.* **The partitioning is horizontal.** The system is divided into three side-by-side branches, one per major function — fees, results, transcripts — each with its own control module, and the control modules **communicate between the functions and execute the functions**, which is the deck's description of horizontal partitioning. Note that the deciding and the doing are *not* separated by level here: each branch decides and computes within itself. **The named cost.** The deck attaches one cost to horizontal partitioning specifically: it "**requires the passing of more data across the module interface, which makes the control flow of the problem more complex, especially where data moves rapidly from one function to another**." The double arrows in the sketch are that cost made visible — a transcript needs results, results need fees to be cleared, so data crosses between the three controllers constantly, and the path a single request takes through the system is no longer readable from any one branch. **Redrawn vertically.**

```
                    portal_controller          <- CONTROL module: decides which
                    (decision-making only;        operation runs; little processing
                     almost no computation)
              /              |               \
   read_request()      compute()          render_output()
   (all input)      (all computation)     (all output)
                                          <- WORKER modules: perform all input,
                                             computation and output tasks
```

Here **the functionality is distributed top-down**: one **control module** at the top performs the **decision-making and does little processing**, and the **worker modules** below **perform all input, computation and output tasks**. Whether a request concerns fees, results or a transcript is now a decision taken in one place rather than a conversation between three peers, and the data crossing interfaces is the single request travelling down and the single result travelling up. **Which makes a fourth feature easier — and the benefit it illustrates.** The **horizontal** structure does, and this is the point worth having: adding a fourth feature means adding a fourth branch beside the other three, and the three existing branches need not be opened at all. Under the vertical structure the new feature's decision must be added to the shared controller and its computation into the shared worker, so both existing modules are edited and both must be retested. This illustrates two of the deck's three stated benefits of structural partitioning — "**the software can be extended easily**" and "**the negative impacts spread slowly**", since a fault in the new branch is confined to it. The trade is the one the deck names: horizontal buys that extensibility at the price of **more data across the interfaces and more complex control flow**, and choosing between them is a judgement about which you will pay more often — new features, or new paths through the existing ones.
