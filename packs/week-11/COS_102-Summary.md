# COS_102 — Week 11

*Introduction to Problem Solving · Week 11 (16 – 22 Nov 2026)*

## Most likely to be examined

1. **Modularisation** — *the process of dividing a program's functionality into independent modules, such that each independent module has everything it needs to implement **only a part** of the program's functionality.* (Quote this.)
2. **Cohesion** — *the extent to which the functions **in a module** work together to achieve the ultimate aim of the module.* We want **high** cohesion. **Coupling** — *the extent to which modules **depend on other modules** before performing their function.* We want **low** coupling. Both are the measures of **module independence**.
3. **Single responsibility principle** — modules should not have more than a single responsibility, and should not depend on other modules.
4. **Information hiding** — modules are specified and designed so that the **data structures and processing details of one module are not accessible to other modules**; they pass only that much information to each other as is required to accomplish the software functions. Hiding unnecessary detail *is* information hiding.
5. **Refactoring** — *a process of modifying a software system to improve the internal structure of design **without changing its external behaviour***; it reduces the complexity of module design while keeping behaviour/function unchanged. The deck's worked example: one component doing four weakly related functions (low cohesion) → four components, each high cohesion → easier integration, testing, maintenance.
6. **Structural partitioning** — horizontal vs vertical (below). Only applies when the architectural style is **hierarchical**.
7. **Software architecture** — *the structure of the system, which contains various components of a program/system, the **attributes (properties)** of those components and the **relationship** between them*; it lets engineers analyse the software design efficiently.
8. **Three pattern levels** — architectural (high) / design (medium) / idiom (low). Know which is which.

## Decomposition and modularisation

- **Decomposition**: its meaning is *embedded in* the definition of modularisation — by separating the code of an application into different modules and functions, we are decomposing the application into modules. Decomposition = the breaking-down; modularisation = the dividing-into-independent-modules that the breaking-down produces.
- **Why**: a single 5,000-line function is painful to change, and changing one part can affect other parts.
- **Advantages**: large programs can be written by several/different people · smaller modules easier to manage and add · a small module is easier to understand · modules and functions reusable elsewhere in the program or in another program · smaller units are easier and faster to design, develop, test and publish.
- **Disadvantages** (memorise all five — a favourite MCQ): execution time may be longer · storage size may be increased · compilation and loading time may be longer · inter-module communication problems may be increased · demands more initial design time.
- **Information hiding benefits**: emphasises communication through **controlled interfaces** · decreases the probability of adverse effects · restricts the effects of changes in one component on others.
- **Structural partitioning benefits**: testing and maintenance become easier · negative impacts spread slowly · the software can be extended easily.
  - **Horizontal**: **control modules** are used to communicate between functions and execute them. Cost: requires passing **more data across the module interface**, making control flow **more complex**, especially where data moves rapidly from one function to another.
  - **Vertical**: functionality distributed **top-down**. Top-level **control modules** do the **decision-making and little processing**; low-level **worker modules** do **all input, computation and output**.

## Software design concepts

- **Why architecture**: efficient communication between all interested stakeholders · highlights early design decisions affecting coding and testing · creates intellectual models of how the system is organised into components and how they interact.
- **Software pattern**: a description of the solution to a **recurring** design problem of some specific domain, in such a way that the solution can be used again and again. It tells a designer whether the pattern can be **reused**, whether it is **applicable** to the current project, and whether it can be used to develop a **similar but functionally or structurally different** design pattern.
  - **Architectural pattern** — high-level; overall structure/organisation; defines elements (subsystems, components, classes) plus their relationships and the rules/guidelines for specifying them. *Often considered equivalent to software architecture.*
  - **Design pattern** — medium-level; refines the elements defined by the architectural pattern, or the relationships among them; addresses component-to-component interaction mechanisms. *Often considered equivalent to software components.*
  - **Idiom** — low-level, **programming-language specific**; describes the implementation of a component and the method of interaction among components in a specific language. *Often termed coding patterns.*
- **Two generic design approaches** — and *neither is individually practicable; a good combination of both is used*.
  - **Top-down**: take the whole system as one entity, decompose into sub-systems/components on some characteristic, treat each as a system, decompose again until the lowest level is reached; starts general and gets more specific; when all components are composed, the whole system comes into existence. Suits **design from scratch, specific details unknown**.
  - **Bottom-up**: start from the most specific and basic components, compose higher-level components from lower-level ones until the desired system evolves as **one single component**. **With each higher level the amount of abstraction is increased.** Suits **building from an existing system whose basic primitives can be reused**.

## Commonly confused

| Pair | The distinction that gets marked |
|---|---|
| **Cohesion vs coupling** | Cohesion is **inside one module** (do its functions serve one aim?) — maximise. Coupling is **between modules** (does it need others before it can work?) — minimise. A change rippling *out* of a module reports coupling; a module doing four unrelated jobs reports cohesion. |
| **Decomposition vs modularisation** | Decomposition is the *act of breaking the problem/application apart*; modularisation is *dividing the functionality into **independent** modules that each own everything they need for their part*. Every modularisation involves decomposition; splitting code into dependent fragments is decomposition without real modularisation. |
| **Information hiding vs abstraction** | Information hiding is a **design rule about access**: internal data structures and processing details are not accessible to other modules. Abstraction is a **level of generality**, and the deck raises it only in bottom-up design ("with each higher level, the amount of abstraction is increased"). Hiding restricts *who may see*; abstraction changes *how much detail is expressed*. |
| **Information hiding vs encapsulation-as-bundling** | The deck defines only information hiding — the mechanism is *pass only the information required to accomplish the software functions*, via controlled interfaces. Don't answer "putting data and methods together"; answer "making data structures and processing details inaccessible". |
| **Refactoring vs optimisation/enhancement** | Refactoring changes **internal structure only**; external behaviour/function is unchanged. Making it faster, adding a feature, or changing returned values is **not** refactoring by this definition. |
| **Horizontal vs vertical partitioning** | Horizontal = control modules **communicate between functions and execute them** (cost: more data across interfaces, more complex control flow). Vertical = **decision-making at the top, work at the bottom** (control modules decide and process little; worker modules do input, computation, output). |
| **Architectural pattern vs design pattern vs idiom** | High / medium / low. Architectural ≈ software architecture; design ≈ software components; idiom ≈ coding patterns and is the only one that is **language-specific**. |
| **Top-down vs bottom-up** | Top-down: whole → parts, general → specific, for **new** systems with unknown detail. Bottom-up: parts → whole, abstraction **increasing** upward, for systems built on **existing** primitives. |
| **Module independence vs modularity** | Independence is the *goal* (single responsibility, no dependence on other modules); cohesion and coupling are the *measures* of it; modularisation is the *process* that pursues it. |
