# COS_102 — Week 11 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 12, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** Complete the deck's definition: "Modularisation can be explained as the process of dividing a program's functionality into independent modules, such that each independent module has everything it needs to implement ___."
a) only a part of the program's functionality
b) the whole of the program's functionality
c) the interfaces of the modules that depend on it
d) at least one function of every other module

**2.** Cohesion and coupling are best described as
a) two names for the same measure, one used inside modules and one between them
b) two design approaches, cohesion being top-down and coupling bottom-up
c) the two measures of module independence: cohesion inside a module, coupling between modules
d) two forms of structural partitioning, cohesion horizontal and coupling vertical

**3.** Which of these is **not** listed by the deck as an advantage of modularisation?
a) Modules and functions can be reused in other parts of the program or in another program
b) Large programs can be written by several or different people
c) Smaller modules and functions are easier and faster to design, develop, test and publish
d) Inter-module communication problems are reduced

**4.** The single responsibility principle, as stated for modules, demands that modules
a) contain no more than one function each
b) should not have more than a single responsibility and should not depend on other modules
c) expose exactly one public interface per data structure they own
d) be assigned to exactly one developer for the life of the project

**5.** Refactoring is defined as the process of modifying a software system to
a) improve its external behaviour without changing the internal structure of design
b) reduce its execution time and storage size while preserving its module boundaries
c) improve the internal structure of design without changing its external behaviour
d) replace low-level idioms with medium-level design patterns

**6.** During refactoring, the existing design is checked for flaws such as
a) redundancy, poorly constructed algorithms and data structures
b) missing test coverage and undocumented interfaces
c) excessive abstraction at the higher levels of the hierarchy
d) violations of the chosen programming language's idioms

**7.** Which is a stated benefit of **structural partitioning**?
a) It decreases the probability of adverse effects by hiding data structures
b) The negative impacts spread slowly, and the software can be extended easily
c) It removes the need to choose between top-down and bottom-up design
d) It guarantees that every module ends up with high cohesion

**8.** In horizontal partitioning, control modules are used to
a) perform decision-making while doing little processing themselves
b) carry out all input, computation and output tasks
c) hide the data structures of the worker modules from one another
d) communicate between functions and execute the functions

**9.** Software architecture refers to the structure of the system, which contains
a) the components, the attributes (properties) of those components, and the relationship between them
b) the components of a program/system only
c) the components and the programming-language idioms used to implement them
d) the subsystems and the rules for refactoring them

**10.** Which pattern level is programming-language specific and often termed a coding pattern?
a) Architectural pattern
b) Design pattern
c) Idiom
d) All three, since every pattern is eventually written in some language

**11.** Top-down design is more suitable when
a) a system is created from an existing system whose basic primitives can be reused
b) the amount of abstraction must increase at each higher level
c) the architecture is hierarchical and must be partitioned horizontally
d) the software solution needs to be designed from scratch and specific details are unknown

**12.** A module is specified so that its data structures and processing details are not accessible to other modules, and it passes them only the information required to accomplish the software functions. This is
a) encapsulation of the module's responsibilities
b) information hiding
c) vertical partitioning
d) refactoring for cohesion

## Section B — Short answer (3)

**13.** Define cohesion and coupling exactly as the deck does, state the direction each should take, and explain — using a car's steering wheel, radiator, battery and brake — what high cohesion and low coupling look like in that system.

**14.** A component performs four functions that have a limited relationship with one another. State what the deck prescribes, what the prescription achieves, and name three of the five disadvantages of modularisation that the prescription may bring with it.

**15.** Distinguish top-down from bottom-up design, name the situation each suits, and explain why the deck insists that neither is individually practicable.

---

## Answers

**Section A**

1. **a** — the definition's point is that a module is complete *for its own part only*, not for the whole program.
2. **c** — they are the two measures of module independence; cohesion is within a module, coupling between modules.
3. **d** — the deck lists inter-module communication problems as *increased*, and as a disadvantage.
4. **b** — the principle is stated for modules exactly as for functions: one responsibility, no dependence on other modules.
5. **c** — internal structure improves, external behaviour is unchanged.
6. **a** — the deck names redundancy and poorly constructed algorithms and data structures.
7. **b** — testing and maintenance become easier, negative impacts spread slowly, the software can be extended easily; a is a benefit of information hiding.
8. **d** — that is the deck's wording for horizontal; a and c describe vertical control and worker modules.
9. **a** — components, their attributes (properties), and the relationships between them.
10. **c** — idioms are low-level, language-specific, and often termed coding patterns.
11. **d** — top-down suits from-scratch design with unknown details; a is the bottom-up case.
12. **b** — this is the deck's definition of information hiding, including the "only that much information" clause.

**Section B**

**13.** Cohesion is the extent to which the functions in a module work together to achieve the ultimate aim of the module, and we want it high; coupling is the extent to which modules depend on other modules before performing their function, and we want it low. In a car, each part is internally cohesive: every element of the braking system serves stopping the car, and every element of the radiator serves cooling. Coupling is low because the parts meet only at narrow, agreed connections — the brake pedal, a coolant hose, a battery terminal — so a redesigned radiator does not force a redesign of the steering wheel. Cohesion is judged inside a part; coupling is judged at the joints between parts.

**14.** The deck prescribes refactoring the component into four different components, each exhibiting high cohesion. This achieves easier integration, testing and maintenance of the software components, because each component now has one aim and can be changed and tested without dragging the other three along, while external behaviour is unchanged. The costs are drawn from the disadvantages of modularisation: any three of longer execution time, increased storage size, longer compilation and loading time, increased inter-module communication problems, and more initial design time.

**15.** Top-down design takes the whole software system as one entity and decomposes it into sub-systems or components on some characteristic, then treats each as a system and decomposes further until the lowest level is reached; it moves from a generalised model towards more specific parts and suits a solution designed from scratch where specific details are unknown. Bottom-up starts from the most specific and basic components and composes higher-level components from them until the system evolves as one single component, with the amount of abstraction increasing at each higher level; it suits a system created from an existing system whose basic primitives can be reused. Neither is individually practicable: top-down alone decomposes on assumptions about a lowest level that may not exist as imagined, while bottom-up alone builds parts with no guarantee they compose into the system actually wanted. A good combination of both is used.
