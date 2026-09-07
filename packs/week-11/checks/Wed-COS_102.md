# Wednesday — COS_102 nightly check

*The concepts of both Week 11 decks.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** Orders calls Payments.charge(), Stock.reserve() and Email.send(). Stock calls Email.send(). Payments and Email call nothing outside themselves. Measuring coupling as the number of other modules a module depends on, what are the counts for Orders and for Stock?
A. Orders 3, Stock 0
B. Orders 2, Stock 1
C. Orders 3, Stock 1
D. Orders 4, Stock 2

**2.** Three notes from a design meeting: (i) 'the system is split into a client layer, a service layer and a database layer'; (ii) 'a component notifies each of its subscribers whenever its state changes'; (iii) 'in C, always test the value returned by malloc before using it'. Classify each as an architectural pattern, a design pattern or an idiom.
A. (i) architectural, (ii) design, (iii) idiom
B. (i) design, (ii) architectural, (iii) idiom
C. (i) architectural, (ii) idiom, (iii) design
D. (i) idiom, (ii) design, (iii) architectural

**3.** Put the steps of top-down design in order. A: treat each sub-system as a system and decompose it further. B: take the whole software system as one entity. C: compose all the components so the whole system comes into existence. D: decompose it into sub-systems based on some characteristic. E: stop when the lowest level of the hierarchy is reached.
A. B, A, D, E, C
B. C, B, D, A, E
C. B, D, E, A, C
D. B, D, A, E, C

**4.** Design P: the top module decides which of three reports to produce and does nothing else; the modules beneath it read the file, compute the totals and print. Design Q: a control module runs four functions in turn, handing the output of each to the next. Which partitioning is each?
A. P vertical, Q horizontal
B. P horizontal, Q vertical
C. Both vertical
D. Both horizontal

**5.** A reporting system is built bottom-up: file-reading and string primitives are composed into a Parser, the Parser and a database primitive into a ReportService, and the ReportService with a Scheduler into the complete system. Which level has the greatest abstraction and which the least?
A. Greatest: the primitives; least: the complete system
B. Greatest: the complete system; least: the primitives
C. Greatest: the Parser; least: the ReportService
D. They are all at the same level of abstraction

**6.** A validate_email() function written for the registration module is later called, unchanged, by the password-reset module and by a separate marketing program. Which listed advantage of modularisation is this?
A. Smaller modules are easier and faster to test
B. Large programs can be written by several people
C. Modules and functions can be used in other parts of the program or in another program
D. Understanding a small function is easier

**7.** Component X performs four functions that have a limited relationship with one another. Component Y performs three functions that all serve one aim. The refactoring prescribed for low cohesion is applied to this design. How many components exist afterwards?
A. 4
B. 7
C. 5
D. 2

**8.** Module Reports reads the internal list Orders.pending directly, instead of calling the function Orders.count_pending() that Orders provides. Which design rule does Reports break?
A. Single responsibility principle
B. Information hiding
C. Vertical partitioning
D. Top-down design

**9. (show your working)** An online exam application needs a 'submit attempt' feature. Decompose it into at least three subproblems. Then take those subproblems together with 'edit profile' and 'change password' and group them into modules: name each module, list what it holds, and state which of your two steps was decomposition and which was modularisation. Show your working.

**10. (show your working)** A car carries passengers from one place to another. Using its brake, radiator, battery and steering wheel: give one example of high cohesion inside a single part, one example of low coupling between two parts, and one design change that would raise the coupling between two parts. Show your working.

**11. (show your working)** A library app has three components: Catalogue (stores the books), Loans (records who has borrowed what) and Notifier (sends reminders). Write out its software architecture using the three parts of the definition: the components, the attributes (properties) of each, and the relationships between them. Show your working.

**12. (show your working)** Top-down and bottom-up design are described as not individually practicable, so that a combination is used. Explain what goes wrong if a team uses only top-down, what goes wrong if it uses only bottom-up, and what a combination looks like for a new inventory system built on an existing database library.

---

## Answers

**1. C** — *Counting coupling from a call list.* Coupling is the extent to which a module depends on other modules before performing its function. Orders cannot place an order without Payments, Stock and Email: 3. Stock cannot reserve without Email: 1. Payments and Email depend on nothing: 0 each.

Orders 3, Stock 0 misses the Stock to Email call; Orders 2, Stock 1 drops Email from Orders because Stock already uses it, but a shared dependency still counts for each module that has it; Orders 4, Stock 2 counts each module as depending on itself.

**2. A** — *Classifying pattern levels.* Architectural patterns are high-level: the overall structure and its subsystems, so the three layers are (i). Design patterns are medium-level: component-to-component interaction mechanisms, so the subscriber notification is (ii). Idioms are low-level and programming-language specific, so the C rule about malloc is (iii).

The second option swaps the top two levels; the third calls a language-independent interaction rule an idiom and a C-specific rule a design pattern; the fourth reverses the whole scale.

**3. D** — *Ordering the top-down design steps.* Top-down starts with the whole system as one entity (B), decomposes it into sub-systems (D), treats each sub-system as a system and decomposes further (A), keeps going until the lowest level is reached (E), and only then, when all components are composed, does the whole system come into existence (C).

B, A, D, E, C tries to decompose a sub-system before any sub-system exists; C, B, D, A, E composes first, which is bottom-up thinking; B, D, E, A, C stops at the lowest level before the further decomposition that reaches it.

**4. A** — *Identifying horizontal versus vertical partitioning.* In vertical partitioning the top-level control modules do the decision-making and little processing, while the low-level worker modules do all the input, computation and output: that is P. In horizontal partitioning control modules are used to communicate between functions and execute them, passing data across the interfaces as it moves from one function to the next: that is Q.

Swapping them mistakes 'passes data between functions' for decision-making; 'both vertical' misses that Q's controller is a data conduit, not a decider; 'both horizontal' misses that P's controller does nothing but choose.

**5. B** — *Abstraction levels in bottom-up composition.* Bottom-up design starts with the most specific and basic components and composes higher-level components from them; with each higher level the amount of abstraction is increased. The primitives are the most specific, and the single component at the top, the complete system, is the most abstract.

The first option reverses the direction; the third picks two middle levels and puts the lower one above the higher; the fourth denies that abstraction changes with level, which is the rule this design relies on.

**6. C** — *Matching an outcome to an advantage of modularisation.* The function is being used both in another part of the same program (password reset) and in another program (marketing). That is exactly the reuse advantage: modules and functions can be used in other parts of the program or in another program.

Easier testing and easier understanding are about the size of the unit, not about where it is used; several people writing a program is about dividing the work, and nothing in the case mentions who wrote what.

**7. C** — *Applying the refactoring prescription.* The prescription is to refactor a low-cohesion component into as many components as it has unrelated functions, each exhibiting high cohesion. X becomes 4 components. Y is already highly cohesive, so it is left alone: 4 + 1 = 5.

4 forgets Y; 7 splits Y as well, though its functions work together; 2 leaves X in one piece, which is the design the refactoring was meant to fix.

**8. B** — *Information hiding.* Information hiding requires that the data structures and processing details of one module are not accessible to other modules; they pass each other only the information required to accomplish the function. Reports is reaching into Orders' data structure instead of using the controlled interface.

The single responsibility principle is about a module doing one job, and Reports may well do only reporting; vertical partitioning is about who decides and who works in a hierarchy; top-down is a design approach, not a rule about access.

**9.** *Decomposing a feature into subproblems and modules.* Decomposition breaks the feature into smaller subproblems, for example: validate the submitted answers, save the attempt, compute the score, notify the student of the result. Modularisation groups related subproblems into independent modules, each with everything it needs for its part: an Attempt module (validate answers, save the attempt), a Grading module (compute the score), a Notification module (notify the student), and an Account module (edit profile, change password), since those two concern the user's account and not the exam.

A correct answer lists three or more sensible subproblems of submitting an attempt, groups them so that each module has one aim and the account tasks sit apart from the exam tasks, and says that breaking the feature apart is decomposition and grouping into modules is modularisation. Any grouping that puts 'change password' inside the grading or attempt module is low cohesion and is not accepted.

**10.** *Cohesion and coupling in the car analogy.* High cohesion: every element of the brake (pedal, lines, pads, discs) works towards the one aim of stopping the car, and nothing in it serves any other purpose. Low coupling: the radiator and the steering wheel do not depend on each other at all; the radiator meets the rest of the car only through its hoses, so it can be replaced without touching the steering. Raising coupling: wiring the brake so that it works only while the radiator fan is running would make braking depend on cooling, so a fault or change in the radiator would now affect the brake.

A correct answer judges cohesion inside one part (all its elements serve one aim), judges coupling between two parts (one can be changed without the other), and proposes a change that makes one part depend on another. Naming the battery as the low-coupling example is fine only if it is the connection, not the battery's own parts, that is discussed.

**11.** *Describing a software architecture.* Software architecture is the structure of the system: its components, the attributes of those components, and the relationships between them. Components: Catalogue, Loans, Notifier. Attributes: Catalogue holds the list of books and their availability; Loans holds the record of borrower, book and due date; Notifier holds the message templates and the sending channel. Relationships: Loans asks Catalogue whether a book is available and tells it when a book goes out or comes back; Loans asks Notifier to send a reminder when a due date passes; Notifier does not depend on Catalogue.

A correct answer names the three components, gives at least one property for each, and states the direction of at least two dependencies between them. Listing components alone, with no attributes or relationships, is only one third of the definition and is not accepted.

**12.** *Combining top-down and bottom-up design.* Top-down alone decomposes the whole system into sub-systems on assumptions about what the lowest level will look like, and may arrive at a bottom level that does not match any component that can actually be built or reused. Bottom-up alone composes higher components from existing primitives with no guarantee that what they add up to is the system that was wanted. In the combination, the inventory system is decomposed top-down from the whole into stock, orders and reporting sub-systems because it is being designed from scratch with details unknown, while the data-access parts are built bottom-up from the existing database library because those primitives already exist and can be reused.

A correct answer gives a failure for each approach used alone, and matches top-down to the new, unknown parts and bottom-up to the existing library in the example.
