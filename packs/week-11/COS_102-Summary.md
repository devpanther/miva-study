# COS_102 — Week 11 Summary

*Introduction to Problem Solving · Week 11 (16 – 22 Nov 2026) · Topic: Decomposition and Modularisation; Software Design Concepts*

Week 8 gave you abstraction, functions and modules — the *units*. Week 11 asks the next question: given that you are going to cut a program into pieces, **where do you cut, and how do you tell a good cut from a bad one?** The answers this week are cohesion, coupling, information hiding, refactoring, structural partitioning, and the two directions of design. Nothing here contradicts Week 8; it is the same bargain — a caller gets a name and two formats, the owner keeps the body — enforced at the scale of whole modules.

## The 8 most examinable things this week

1. **Modularisation, word for word.** Modularisation is **the process of dividing a program's functionality into independent modules, such that each independent module has everything it needs to implement only a part of the program's functionality.** Read the two halves separately, because they are two separate demands: **"everything it needs"** forbids a module that cannot work until other modules help it (that is *coupling*), and **"only a part"** forbids a module that has quietly taken on several jobs (that is *cohesion*). A division that satisfies one and not the other is not modularisation.
2. **Decomposition is the same act named from the other side.** The course says **the meaning of decomposition is actually embedded in the definition of modularisation**: **by separating the codes in an application into different modules and functions, we are essentially decomposing the application into modules.** Decomposition is the *breaking apart*; modularisation is the *result*, a set of independent modules. You cannot decompose without producing modules and you cannot have modules without having decomposed.
3. **Why we do it — the argument is about change, not length.** The course's scenario is **a function of more than five thousand lines**, and the complaint is not that it is long to read: **can you even imagine how stressful it would be to change a part of the code? In fact, changing a part of the code can even affect other parts of the code.** The stated cure is the mirror image: modularisation **ensures that we are able to make changes to different parts of our code without affecting other parts of the code**, and that added functionality **can be added in a quick and flexible manner**. So the test of a decomposition is always: *if I change this piece, what else must I touch?*
4. **The five advantages, exactly as listed.** It **allows large programs to be written by several or different people**; it is **easier to manage and add smaller modules and functions**; **understanding a small module and function is easier**; **we can easily use the modules and functions either in other parts of our program or in another program**; and **smaller modules and functions are easier and faster to design, develop, test and publish.**
5. **The five disadvantages, exactly as listed — and they are the half students forget.** **Execution time may be longer**; **storage size may be increased**; **compilation and loading time may be longer**; **inter-module communication problems may be increased**; **it demands more initial design time.** These are the *price* of modularisation, not evidence that you modularised badly. Note the ordering of pain: the design-time cost is paid first, before any advantage arrives, which is why the temptation to skip it is strongest at the start of a project.
6. **Module independence: the single responsibility principle, cohesion and coupling.** **Just like functions, the single responsibility principle demands that modules should not have more than a single responsibility and that they should not depend on other modules.** **Cohesion describes the extent to which the functions in a module work together to achieve the ultimate aim of the module** — **we usually want high cohesion**. **Coupling describes the extent to which modules depend on other modules before performing their function** — **since we want our modules to be independent, we usually want low coupling.** Cohesion is measured **inside one module**, coupling **between modules**; they are two separate readings taken in two different places, and the arrows point in **opposite directions**.
7. **Information hiding, and its three benefits.** **Modules should be specified and designed in such a way that the data structures and processing details of one module are not accessible to other modules. They pass only that much information to each other, which is required to accomplish the software functions. The way of hiding unnecessary details is referred to as information hiding.** Benefits: **it emphasises communication through controlled interfaces; it decreases the probability of adverse effects; it restricts the effects of changes in one component on others.** Information hiding is Week 8's abstraction applied to modules, and it is the *mechanism* by which low coupling is achieved: a module cannot depend on what it cannot reach.
8. **Refactoring, structural partitioning, and the two design directions.** **Refactoring is a process of modifying a software system to improve the internal structure of design without changing its external behaviour**, and it **reduces the complexity of module design while keeping its behaviour or function unchanged**. **Structural partitioning** splits a hierarchical design **horizontally** (control modules communicate between the functions and execute them, at the cost of **passing more data across the module interface**) or **vertically** (**control modules** at the top **perform the decision-making and do little processing**; **worker modules** at the bottom **perform all input, computation and output tasks**). **Top-down design** takes the whole system as one entity and decomposes it repeatedly; **bottom-up design** starts from the most specific and basic components and composes upward, **the amount of abstraction increasing with each higher level**. **The two approaches are not individually practicable; a good combination of both is used.**

## Modularisation and decomposition

**The definition, unpacked.** "Dividing a program's **functionality**" — not its *lines*, not its *files*. You divide what the program *does*. "Into **independent** modules" — independence is the whole content of the word; a set of files that all read the same shared data are not independent and are therefore not modules in this sense. "Each independent module has **everything it needs**" — enough to run without asking. "To implement **only a part** of the program's functionality" — and not two parts.

**How it works, per the deck.** The five thousand lines are separated **into different modules and functions**, and **the modules and functions can be saved in separate files**. Saving them in separate files is a *consequence*, not the definition — a point the exam likes, because splitting a file is easy and splitting functionality is not.

| Advantages (5) | Disadvantages (5) |
|---|---|
| Large programs can be **written by several or different people** | **Execution time may be longer** |
| **Easier to manage and add** smaller modules and functions | **Storage size may be increased** |
| **Understanding** a small module or function is easier | **Compilation and loading time may be longer** |
| Modules and functions are easily **reused** in this program or another | **Inter-module communication problems may be increased** |
| Smaller units are **easier and faster to design, develop, test and publish** | It **demands more initial design time** |

Note that the disadvantages are *mechanically* caused by the advantages. A module boundary is a place where control and data must cross; more boundaries means more crossings (execution time), more separately stored units (storage), more separately compiled and linked units (compilation and loading), and more conversations to get wrong (inter-module communication). None of them is a symptom of bad design — they are the bill for good design.

## Cohesion and coupling: two readings, opposite directions

| | **Cohesion** | **Coupling** |
|---|---|---|
| Definition | The extent to which **the functions in a module work together to achieve the ultimate aim of the module** | The extent to which **modules depend on other modules before performing their function** |
| Measured | **Inside** one module | **Between** modules |
| Wanted | **High** | **Low** |
| The question you ask | "Do all of these belong to one aim?" | "What must this module know about another before it can work?" |
| Failure looks like | A module named `utils`, `misc` or `helpers` | A module that breaks when another module's internal storage is reordered |
| Relation to the definition of modularisation | "implement **only a part** of the functionality" | "has **everything it needs**" |

**How cohesion is *not* judged.** Not by size — a two-function module can be incohesive and a twenty-function module cohesive. Not by whether the functions call each other — two functions that never call each other are highly cohesive if both serve the module's one aim, and ten that call each other constantly are not cohesive if they are collectively doing four jobs. Not by whether the functions are used together — being invoked from the same screen is not the same as serving the same aim.

**How coupling is *not* judged.** Not by the *number* of calls — a module that calls another two hundred times through one published function is loosely coupled. It is judged by **how much of the other module a module must depend on**: its data structures, its field order, its file format, its internal processing details. One call that reaches into another module's internals is tighter coupling than two hundred that do not.

```python
# TIGHT coupling: billing depends on how customer STORES things
import customer

def invoice_total(cid):
    rec = customer.records[cid]        # knows 'records' exists and is indexed by cid
    return rec[3] * (1 - rec[7])       # knows field 3 is price and field 7 is discount
```

```python
# LOOSE coupling: billing depends only on what customer PROMISES
import customer

def invoice_total(cid):
    return customer.price(cid) * (1 - customer.discount(cid))
```

Both fragments call the same module and produce the same number. Reorder the fields inside `customer`, or move the records from a list to a database, and the first breaks silently while the second does not notice. That difference *is* coupling; nothing about the call count or the module names shows it.

**The two go together — they are not a trade-off.** If a module genuinely has **everything it needs** for **one aim**, it has both high cohesion and little reason to reach outside. The classic wrong move is to "reduce coupling" by **merging** two modules: the measured coupling between them falls to zero because there is no longer a boundary, the dependency is still there but is now unpoliced, and cohesion has fallen because the merged module now has two responsibilities. The correct move is to **narrow the interface**, not to erase the boundary.

**The car analogy, worked.** A car transports passengers. The **steering wheel**, **radiator**, **battery** and **brake** each have **one aim** — high cohesion; nobody expects the radiator to also charge the phone. They are not *unconnected*: the starter needs the battery. But the starter needs only **twelve volts at two terminals** — it does not need to know the battery's plate chemistry, so a lead-acid battery can be replaced by a different type and the starter does not care. That is low coupling: a real dependency, running through a **narrow, defined interface** rather than through internals. Zero coupling is not the target and is not achievable; a part that depends on nothing at all does nothing at all.

## Information hiding

**What is hidden:** **the data structures and processing details of one module** — from **other modules**. **What is still passed:** **only that much information as is required to accomplish the software functions.** Note *required*, not *minimal*: starving a module of information it needs is not information hiding, it is a broken interface. And note *other modules*, not *people* — as in Week 8, this is not secrecy; the source may be perfectly readable.

**The three benefits, and why each follows.**

- **It emphasises communication through controlled interfaces** — if the internals are unreachable, the only route left is the published one, so the interface stops being a suggestion.
- **It decreases the probability of adverse effects** — a module cannot corrupt or misread a structure it cannot touch.
- **It restricts the effects of changes in one component on others** — nobody outside depended on the internals, so changing them breaks nobody. This is precisely Week 8's "the implementation of a method can be changed without breaking other parts of the code", moved up one scale.

Information hiding is therefore the *cause* and low coupling the *effect*. You do not achieve low coupling by asking developers to be disciplined; you achieve it by making the internals inaccessible, so that the tight-coupling version above cannot be written.

## Refactoring

**Definition:** refactoring **reduces the complexity of module design while keeping its behaviour or function unchanged** — **a process of modifying a software system to improve the internal structure of design without changing its external behaviour.** During refactoring, **the existing design is checked for any type of flaws like redundancy, poorly constructed algorithms and data structures**, in order to improve the design.

**The single test:** if the externally observable behaviour changed, it was not a refactoring. Fixing a bug changes behaviour, so it is not refactoring. Adding a feature changes behaviour, so it is not refactoring. Making the program slower while tidying its structure *is* still refactoring — the definition speaks of behaviour and function, not speed. This matters practically: refactoring is safe precisely because it promises nothing changed, so refactoring and behaviour change must be done as **separate steps**, or the guarantee is worthless.

**The deck's own example, which is a cohesion repair:**

```
BEFORE: one component, LOW cohesion
    component Report
        fetch_scores()        aim 1: get data
        compute_average()     aim 2: arithmetic
        format_pdf()          aim 3: presentation
        email_parent()        aim 4: delivery
    "four functions that have a limited relationship with one another"

AFTER: four components, each HIGH cohesion
    component ScoreSource   -> fetch_scores()
    component Statistics    -> compute_average()
    component Renderer      -> format_pdf()
    component Notifier      -> email_parent()
    same inputs, same outputs, same external behaviour
```

The deck's stated payoff: this **leads to easier integration, testing, and maintenance of the software components.** Note the direction of the operation — the deck splits a component **because its cohesion was low**, i.e. because the four aims were already separate and the boundary merely had not been drawn. Splitting a *high*-cohesion component the same way does the opposite: each piece is then a fragment of one aim, so each needs the others, and coupling rises.

## Structural partitioning

**When the architectural style of a design follows a hierarchical nature, the structure of the program can be partitioned either horizontally or vertically.** Stated benefits of partitioning: **the testing and maintenance of software becomes easier; the negative impacts spread slowly; the software can be extended easily.**

| | **Horizontal partitioning** | **Vertical partitioning** |
|---|---|---|
| What is done | **Control modules are used to communicate between functions and execute the functions** | **The functionality is distributed among the modules in a top-down manner** |
| The layers | Branches of the hierarchy, side by side, one per major function | Levels of the hierarchy: **control modules** on top, **worker modules** below |
| Who decides | Control modules route between functions | **Modules at the top level, called control modules, perform the decision-making and do little processing** |
| Who works | Each function's own branch | **Modules at the low level, called worker modules, perform all input, computation and output tasks** |
| Stated cost | **Requires the passing of more data across the module interface, which makes the control flow of the problem more complex**, especially **where data moves rapidly from one function to another** | — |

The named cost belongs to **horizontal** partitioning: more data across interfaces, more complex control flow. Do not attach it to vertical, where the deck instead describes a clean division of labour between deciding and doing.

## Software architecture

**Software architecture refers to the structure of the system, which contains various components of a program/system, the attributes (properties) of those components and the relationship between them.** Three constituents — **components**, their **attributes**, and the **relationships** — and naming only the first is the standard half-answer. **The software architecture enables the software engineers to analyze the software design efficiently.**

Why we need it:

- It **enables efficient communication between all the interested stakeholders.**
- It **highlights early design decisions that affect activities such as coding and testing.**
- It **creates intellectual models of how the system is organized into components and how these components interact with each other.**

## Software patterns: three levels

**A software pattern provides a description of the solution to a recurring design problem of some specific domain in such a way that the solution can be used again and again.** The **objective of each pattern is to provide insight to a designer** who can determine **whether the pattern can be reused; whether the pattern is applicable to the current project; and whether the pattern can be used to develop a similar but functionally or structurally different design pattern.**

| Level | **Architectural pattern** | **Design pattern** | **Idiom** |
|---|---|---|---|
| Strategy | **High-level** | **Medium-level** | **Low-level** |
| Scope | The **overall structure and organization** of a software system | **Solving design problems**; the **refinement of the elements** defined by an architectural pattern, or the relationship among them | The **implementation of a software component** and the **method used for interaction among software components** |
| Defines | **Elements such as subsystems, components, classes**, the **relationship between them**, and the **rules and guidelines for specifying these relationships** | **Specific design elements such as relationship among components or mechanisms that affect component-to-component interaction** | The above **in a specific programming language** |
| Language-specific? | No | No | **Yes — this is the distinguishing feature** |
| Often considered equivalent to | **Software architecture** | **Software components** | **Coding patterns** |

The examinable discriminator is the bottom two rows. Both architectural and design patterns speak about components and their interaction; only the **idiom** is tied to a **specific programming language**, which is why idioms are also called coding patterns.

## Top-down and bottom-up design

| | **Top-down** | **Bottom-up** |
|---|---|---|
| Starting point | **The whole software system as one entity** | **The most specific and basic components** |
| Operation | **Decomposes it** to achieve more than one sub-system or component **based on some characteristics**; each sub-system is then **treated as a system and decomposed further**, until **the lowest level of the hierarchy is achieved** | **Composes higher-level components by using basic or lower-level components**, and keeps doing so **until the desired system is evolved as one single component** |
| Direction of detail | Starts with a **generalized model** and **keeps defining the more specific part of it** | **With each higher level, the amount of abstraction is increased** |
| Completion | **When all components are composed the whole system comes into existence** | The system emerges as one component at the top |
| More suitable when | The solution **needs to be designed from scratch and specific details are unknown** | A system **needs to be created from some existing system, where the basic primitives can be used in the newer system** |

**And the sentence that is worth a mark on its own: top-down and bottom-up approaches are not individually practicable; instead, a good combination of both is used.** Pure top-down eventually reaches a level where you must know what primitives actually exist; pure bottom-up risks building a fine set of parts that assemble into the wrong system.

## Worked example: decomposing the social-media platform

The case study's application needs **user registration, profile creation, posting updates, and following other users.**

**Step 1 — decompose top-down.** Take the application as one entity and split by feature, then split each feature again. **User registration** breaks into **validating the user's input, creating a new user account, and sending a confirmation email.**

**Step 2 — modularise: group related subproblems into modules.** The case study's grouping is **user management, post management, and following management.**

```python
# module: user_management        aim: everything about who a user IS
def validate(details): ...
def create_account(details): ...
def send_confirmation(address): ...
def update_profile(uid, details): ...

# module: post_management        aim: everything about what a user SAYS
def create_post(uid, text): ...
def timeline_for(uid): ...

# module: following_management   aim: everything about who follows WHOM
def follow(a, b): ...
def followers_of(uid): ...
```

**Step 3 — check the two readings.** *Cohesion:* every function in `user_management` serves one ultimate aim, so it is high; `validate` and `send_confirmation` never call each other and that is irrelevant. *Coupling:* `post_management` needs to know a user exists, so it calls `user_management.exists(uid)` — one narrow question — and never reads a user record's fields. *Information hiding:* how accounts are stored is a **processing detail** of `user_management` and is not accessible to the other two.

**Step 4 — the bad decomposition, for contrast.** Split the same application into `validation`, `database`, `email` and `screens`, with every feature's logic spread across all four, and every module reading a shared `SESSION` structure. Each module now has **many** aims (validating posts *and* users *and* follows), so cohesion is low; every feature change touches all four modules, so coupling is high; and the fault the deck warned about is back in full — **changing a part of the code affects other parts of the code** — while all five disadvantages have still been paid.

**Step 5 — the counterfeit fix.** Told to reduce coupling, a team merges `user_management` and `post_management` because one called the other. The measurement improves to zero and the design gets worse: the dependency still exists, but now runs inside a module where no interface governs it, and the merged module has two responsibilities, breaking the **single responsibility principle**. The real fix is Step 3's — narrow the interface, do not remove the boundary.

## Commonly confused

- **Cohesion vs coupling.** Cohesion is measured **inside one module** and should be **high**; coupling is measured **between modules** and should be **low**. Two different places, two different readings, opposite arrows. If a claimed improvement moved only one number, ask what it did to the other.
- **"Reducing coupling" vs merging modules.** Merging two modules drives the coupling between them to zero **by deleting the boundary, not the dependency** — and lowers cohesion, since the result now has two responsibilities. Low coupling means a **narrow interface across a boundary that still exists**.
- **Low coupling vs no coupling.** The car analogy is not of parts that ignore each other: the starter genuinely needs the battery. What makes it *low* is that it needs only **twelve volts at two terminals**, not the battery's internals. A module that depends on nothing contributes nothing.
- **Cohesion vs the functions calling each other.** The test is whether the functions **work together to achieve the ultimate aim of the module** — not whether they invoke one another. Functions that never call each other can be perfectly cohesive; functions that call each other constantly can be four jobs in a trench coat.
- **Coupling vs the number of calls.** Two hundred calls through one published function is looser coupling than a single line that reads another module's data structure. Coupling counts **what you must know**, not **how often you speak**.
- **Modularisation vs putting the code in separate files.** The deck says modules **can be saved in separate files** — a consequence, not the definition. Ten files that all read the same globals are not independent modules, and the stated benefit (**change one part without affecting other parts**) has not been obtained.
- **The disadvantages of modularisation vs symptoms of bad modularisation.** Longer execution, more storage, longer compilation and loading, more inter-module communication problems and more initial design time are the course's **stated disadvantages of modularisation itself** — the bill for the advantages, not evidence of an error.
- **Information hiding vs passing less data.** The rule is to pass **as much information as is required to accomplish the software functions** — required, not minimal. What is hidden is the **data structures and processing details**, not the service.
- **Information hiding vs secrecy from people.** As with Week 8's abstraction: the target is **other modules**, not readers. Perfectly readable source can still hide information, because hiding is about what other code may **reach and depend on**.
- **Refactoring vs improving the program.** Refactoring changes the **internal structure without changing the external behaviour**. A bug fix and a new feature both change behaviour, so neither is refactoring — and mixing one into a refactoring destroys the only guarantee refactoring offers.
- **Refactoring vs splitting anything that looks big.** The deck splits a component **because it exhibited low cohesion** — four functions with **a limited relationship with one another**. Splitting a high-cohesion module by the same reflex produces fragments that need each other, raising coupling.
- **Horizontal vs vertical partitioning.** **Horizontal:** control modules **communicate between functions and execute the functions**, and it **requires passing more data across the module interface, making control flow more complex**. **Vertical:** functionality distributed **top-down**, with **control modules deciding and doing little processing** and **worker modules doing all input, computation and output**. The "more data across the interface" cost belongs to horizontal only.
- **Control module vs worker module.** In vertical partitioning the **control** module is the one at the **top** that **decides and processes little**; the **worker** at the bottom does **all input, computation and output**. A module that computes heavily is a worker however senior its name sounds.
- **Architectural pattern vs design pattern vs idiom.** High, medium and low level respectively. Architectural patterns are **often considered equivalent to software architecture**, design patterns **to software components**, idioms **to coding patterns** — and only the **idiom is programming-language specific**.
- **Software architecture vs "the list of components".** The structure contains **components, the attributes (properties) of those components, and the relationships between them.** Two thirds of the definition is what most answers omit.
- **Top-down vs bottom-up.** Top-down starts with **the whole system as one entity** and decomposes; bottom-up starts with **the most specific and basic components** and composes, **abstraction increasing with each higher level**. Top-down suits **designing from scratch when specific details are unknown**; bottom-up suits **building from an existing system whose basic primitives can be reused**. Neither is **individually practicable**.
- **Decomposition vs modularisation.** Decomposition is the **act of separating** the codes into different modules and functions; modularisation is the **process of dividing the functionality into independent modules** and is described by the result. The deck's own line: the meaning of decomposition is **embedded in the definition of modularisation**.
- **Single responsibility (this deck's version) vs the one-line slogan.** The deck states **two** demands, not one: modules **should not have more than a single responsibility** *and* **should not depend on other modules** — high cohesion *and* low coupling in a single sentence.

---

*Note on the source: both decks extract as clean prose with no code and no diagrams, so every listing above is written to illustrate the decks' own named objectives rather than transcribed from them. Three gaps are worth knowing. First, the "car analogy" slide asks the question — *what are the effects of cohesion and coupling on car parts such as steering wheel, radiator, battery, and brake?* — and never answers it; the worked answer above is the standard one, and the examinable point (a real dependency through a narrow interface, not the absence of dependency) is supplied because the slide's question is unanswerable without it. Second, the Software Design Concepts deck lists a learning objective on **software architecture and why we need it** and then gives only three bullets, with no worked architecture anywhere; the levels of pattern are likewise defined but never exemplified. Third, the decks never state the connection between information hiding and low coupling, nor between high cohesion and the "everything it needs" clause of their own definition of modularisation — those links are drawn here because the applied questions (judging a module, choosing between two designs) cannot be answered without them. The extractor also drops ligatures, so the source reads "dierent" for different, "deﬁnition"/"denition", "ecient" for efficient, "ow" for flow, "specic" for specific, and "University of Noingham" for Nottingham; "Boom-up" in the source is "Bottom-up".*
