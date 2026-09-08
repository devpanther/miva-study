# Wednesday — COS_102 nightly check

*The concepts of both Week 11 decks.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** The feature 'submit attempt' in an exam app breaks into: validate the answers, save the attempt, compute the score, notify the student. Those four, together with 'edit profile' and 'change password', are to be grouped into modules. Which grouping is the most cohesive?
A. Attempt (validate answers, save attempt, edit profile, change password), Grading (compute score), Notification (notify student)
B. Exam (validate answers, save attempt, compute score, notify student, edit profile, change password)
C. Account (validate answers, edit profile, change password), Attempt (save attempt, compute score, notify student)
D. Attempt (validate answers, save attempt), Grading (compute score), Notification (notify student), Account (edit profile, change password)

**10.** A car's parts include the brake, the radiator, the battery and the steering wheel. Which design change would raise the coupling between two of them?
A. Fitting thicker pads and discs to the brake.
B. Wiring the brake so that it works only while the radiator fan is running.
C. Moving the steering wheel to the other side of the car.
D. Replacing the battery with one of a larger capacity.

**11.** A design document for a library app lists Catalogue, Loans and Notifier and says what each one holds, but says nothing about how they interact. Which part of the definition of a software architecture is missing?
A. The relationships between the components
B. The attributes of the components
C. The components themselves
D. The programming language of each component

**12.** A new inventory system, whose detailed requirements are still unknown, is to be built on an existing and well tested database library. Which use of top-down and bottom-up design fits?
A. Top-down throughout, treating the library as if it were not there.
B. Bottom-up throughout, composing everything from the library's primitives.
C. Bottom-up for the new sub-systems, top-down for the data-access parts.
D. Top-down for the new stock, orders and reporting sub-systems, bottom-up for the data-access parts on the library.

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

**9. D** — *Grouping subproblems into modules.* Modularisation groups the subproblems so that everything inside a module serves one aim and the module holds what it needs for its own part. Handling the attempt, scoring it, telling the student and managing the account are four separate aims, so they belong in four modules.

The first grouping drops account work into the attempt module; the second is one module doing everything, the lowest cohesion of all; the third puts validating answers, which is exam work, inside the account module.

**10. B** — *Cohesion and coupling in the car analogy.* Coupling is the degree to which one part depends on another. Making the brake refuse to work unless the radiator fan is running creates a dependency where there was none, so a fault or a change in the cooling system now reaches the brakes.

The other three change one part on its own: better pads, a different wheel position and a bigger battery all leave every other part's dependencies exactly as they were, which is low coupling preserved.

**11. A** — *The three parts of a software architecture.* A software architecture is the structure of the system: its components, the attributes of those components, and the relationships between them. The document names the three components and gives their attributes, so what is left out is the relationships, such as Loans asking Catalogue whether a book is available and asking Notifier to send a reminder.

The components and their attributes are already there, and the implementation language is no part of the definition.

**12. D** — *Combining top-down and bottom-up design.* Neither approach is practicable alone. Top-down decomposes the whole into sub-systems but has to assume what the lowest level will look like; bottom-up composes existing primitives but cannot guarantee that what they add up to is the system that was wanted. So the parts being designed from scratch are decomposed top-down, and the parts that already exist as tested primitives are composed bottom-up.

The reversed pairing builds the unknown parts from primitives that do not exist for them, and going one way throughout either wastes the library or lets it dictate the system.
