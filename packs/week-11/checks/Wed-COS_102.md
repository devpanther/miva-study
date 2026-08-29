# Wednesday — COS_102 nightly check

*Concepts across both Week 11 decks: decomposition versus modularisation, module independence via cohesion and coupling, the single responsibility principle, information hiding, refactoring, structural partitioning, software architecture, the three pattern levels, and the two design approaches.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The deck's definition of modularisation says each independent module "has everything it needs to implement only a part of the program's functionality." Which design does that clause rule out?
a) A module whose functions all serve a single aim but which is only 20 lines long
b) A module that is stored in its own file separate from the rest of the program
c) A module that is reused unchanged by a second, unrelated program
d) A module that implements one part of the functionality but must call into a sibling module's internals to obtain the data structures it works on

**2.** Which of the following does the Decomposition and Modularisation deck list as a **disadvantage** of modularisation?
a) The negative impacts of a fault spread slowly through the system
b) The effects of a change in one component on other components are restricted
c) Compilation and loading time may be longer
d) Understanding a small module or function is easier

**3.** A developer changes the internal date format inside module `Billing`. Three other modules stop compiling and must be edited. Which property of the design does this observation most directly measure, and in which direction?
a) Coupling between `Billing` and those modules, and it is high
b) Cohesion of `Billing`, and it is low
c) Cohesion of `Billing`, and it is high, since one change touched one aim
d) Coupling between `Billing` and those modules, and it is low, since only three modules were affected

**4.** According to the deck, information hiding requires that modules pass to each other
a) all of their data structures, but only through a documented public interface
b) only that much information which is required to accomplish the software functions
c) the processing details of any function whose result the other module consumes
d) nothing at all, since a truly independent module never communicates

**5.** A design model yields a component that performs four functions having a limited relationship with one another. What is the deck's prescribed response, and its stated payoff?
a) Leave the component whole, since keeping the four functions in one place minimises the coupling in the system
b) Hide the four functions behind a single controlled interface, so that information hiding compensates for the weak relationship between them
c) Refactor the component into four different components, each exhibiting high cohesion, which leads to easier integration, testing and maintenance
d) Merge the component into each of its callers, so that the weakly related functions become internal details of those callers

**6.** What does the deck give as the specific cost of **horizontal** partitioning?
a) Decision-making sinks into the worker modules, so faults are hard to localise
b) Control modules end up performing input, computation and output as well as deciding
c) The hierarchy becomes so deep that compilation and loading time increase
d) More data must be passed across the module interface, making the control flow more complex, especially where data moves rapidly from one function to another

**7.** In vertical partitioning, which statement matches the deck's description of the division of labour?
a) Control modules at the top perform the decision-making and do little processing; worker modules at the low level perform all input, computation and output
b) Control modules at the top perform input and computation; worker modules at the low level decide which functions to execute
c) Every module both decides and processes, so that no single module becomes a bottleneck
d) Control modules communicate between functions and execute those functions on their behalf

**8.** Which mapping of the three pattern levels matches the deck?
a) Architectural = medium-level, often equivalent to software components; design = high-level; idiom = language-independent
b) Architectural = high-level, often considered equivalent to software architecture; design = medium-level, often considered equivalent to software components; idiom = low-level and programming-language specific
c) Architectural = high-level; design = low-level and language specific; idiom = medium-level coding conventions
d) All three are language-specific, differing only in how many components they govern

**9. (explain why)** The deck says the meaning of decomposition is "actually embedded in the definition of modularisation." Explain the relationship precisely, and describe a case that is decomposition but not successful modularisation.

**10. (explain why)** Modularisation is meant to make change cheap, yet the deck lists "demands more initial design time" and "inter-module communication problems may be increased" as disadvantages. Explain the mechanism by which the same act of splitting produces both the benefit and these two costs.

**11. (explain why)** Explain why information hiding is the mechanism that makes low coupling achievable, rather than a separate nicety. Refer to the deck's three stated benefits of information hiding in your reasoning.

**12. (explain why)** The deck states that top-down and bottom-up design "are not individually practicable" and that in bottom-up design "with each higher level, the amount of abstraction is increased." Explain why each approach alone fails, and why the abstraction remark explains which approach suits a system built from an existing system.
