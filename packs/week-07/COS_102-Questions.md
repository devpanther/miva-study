# COS_102 — Week 7 Questions

*Data types, variables and operators, and programme objects — structures, unions and classes; sat seven days later as a retention test, so recall the lecturer's own definitions and apply them.*

## Multiple choice

**1.** The deck defines a programme as "a series of instructions that causes a computer or a microcontroller to perform a particular task", and then says at once that a computer program includes more than just instructions. What else does it say a program contains?
A. The further reading list and the key references the programmer consulted
B. Data, and the various memory addresses in which the instructions work to perform a specific task
C. A copy of the compiler that translated it, so that it can be rebuilt
D. The name of every variable, stored so that the machine can look each one up as it runs

**2.** A student cannot decide between `int` and `float` for a variable and asks what the choice actually settles. On the deck's own definition of a data type, what does it settle?
A. What the variable may be called, since each type allows a different set of names
B. Whether the variable may be used inside a block or only outside one
C. The value the variable will hold for the rest of the programme
D. The type and the size of the data associated with the variable

**3.** Which of these is **not** one of the three basic types the deck names for the C language?
A. Structures
B. Characters
C. Integers
D. Floating-point numbers

**4.** The deck's rule is that a variable definition always includes "data type" followed by "variable name". Which line follows that rule?
A. `count = int;`
B. `count int;`
C. `int count;`
D. `variable count of type int;`

**5.** The deck states: "A variable definition is also a declaration, but not all variable declarations are definitions." Taken at face value, what does that sentence commit you to?
A. A definition and a declaration are two names for exactly the same statement
B. Every definition is also a declaration, but there can be declarations that are not definitions
C. Every declaration is a definition, but not every definition is a declaration
D. A declaration is what you write inside a function body, and a definition is what you write outside every function, at the top of the file

**6.** "Variable names are not stored inside the computer memory; the compiler replaces them with memory location addresses." Which conclusion follows from that sentence?
A. A long variable name makes the compiled programme use more memory while it runs
B. Once the name has been discarded the value in the variable can no longer be read back
C. The compiler must build a table of names into the finished programme so that the programme can find its own variables
D. Renaming a variable consistently throughout the source cannot change what the compiled programme does

**7.** The deck says a class is similar to a structure, but with one addition. What does a class also usually have?
A. Methods, or functions
B. Members that must all be of the same type
C. Members that all start at the same location in memory
D. A size fixed by its largest member alone

**8.** "An operator is a symbol that tells the compiler to perform specific mathematical or logical functions." The deck lists six types of operator that C provides. Which of these is **not** one of the six?
A. Bitwise
B. Misc
C. Iterative
D. Relational

**9.** The deck says that when we programme problems we represent the problem as data, and then asks: to find the average of the first five multiples of 9, what are the variables? Which answer represents the problem as data in the way the deck intends?
A. Only one variable is needed, the average, because the five multiples are fixed numbers written into the problem, and a fixed number is not a variable
B. Nine and five, because those are the only two numbers the question mentions
C. The name of the programme, the name of the function and the name of the file it is saved in
D. The multiples themselves — or one running sum of them — together with how many there are and the average worked out from the two

**10.** A library programme is to have a `LibraryBook` object. Taking the deck's dog as the model, which of these belongs to the book's **state** rather than to its behaviour?
A. The number of copies the library owns
B. Lending a copy to a reader
C. Returning a copy to the shelf
D. Printing the book's details on the screen

**11.** The deck states that only the methods of a particular object have access to the variables of that object, and that different objects can only interact with each other through their own individual methods. What does the deck say that restriction gives us?
A. Faster execution, since calling a method costs less than reading a variable directly
B. A guarantee that an object's variables can never be changed again once they have been given their first value
C. Information hiding — we can control the amount of information we share about our objects with the outside world
D. A rule that every object must contain at least one other object inside it

**12.** A student record has to hold a matriculation number, a name and a CGPA **at the same time**. Structure or union, and why?
A. Either will do, since the deck defines both of them in the same words, as a user-defined data type that groups items of possibly different types into a single type
B. A structure, because a union variable can represent the value of only one of its members at a time
C. A union, because it groups items of possibly different types into a single type while using less memory to do it
D. A class, because only a class is allowed to hold three members of three different types

## Short answer

**13.** Give the deck's definitions of a **programme**, of a **data type** and of an **operator**, as close to word for word as you can. Name the three basic types the deck gives for C and the six categories of operator it lists. Then state the deck's rule for writing a variable definition, and say exactly what its sentence *"a variable definition is also a declaration, but not all variable declarations are definitions"* asserts about the two — and what the deck does next with that sentence.

**14.** Using the deck's dog, explain how a real-world object's **state** and **behaviour** become parts of a programme object, quoting the deck's two sentences about who may reach an object's variables. Then give the four reasons the deck offers for using programme objects, and say what the week's summary sheet calls the practice of hiding an object's implementation details, together with the benefits of object-oriented programming that the same sheet lists.

**15.** Define a **structure**, a **union** and a **class** as the deck defines them, and say what separates each from the other two. Then choose the right one for each of the following, justifying the choice from the deck's own wording: (i) a record of a book's title, author and number of copies; (ii) a sensor reading that is either a whole-number count or a floating-point voltage, never both at once; (iii) a bank balance that must never be set directly by code outside the account.

## Answers

**1. B** — *Concept: what a program is made of.* The deck's second slide on programming says it outright: *"A computer program includes more than just instructions. It also contains data and various memory addresses in which the instructions work to perform a specific task."* Data and addresses are the two additions, and they are the reason the rest of the week exists — data needs types and variables, and addresses are what the variable names become. A names the slide furniture of the deck rather than anything inside a program. C confuses the program with the tool that produced it; the compiler is not shipped inside its output. D is the exact opposite of the deck's later sentence — names are *not* stored in memory, they are replaced by addresses.

**2. D** — *Concept: the definition of a data type.* Word for word: *"Data type is used for specifying the type of a variable. They determine the type and size of data associated with variables."* Size and interpretation are what the choice buys, which is why the deck also tells you to *"select the data type according to your programme logic and need"*. A inverts the two halves of a definition: the naming rules do not change with the type. B invents a scope rule; the type has nothing to do with where a variable may be used. C describes a constant, not a type — a type says what kind of value may be stored, never that it may not be stored again.

**3. A** — *Concept: the three basic types.* The deck says *"There are three basic types in the C language: characters, integer, and floating-point numbers"*, which is B, C and D. A structure is not one of them: the deck introduces it separately, in the Programme Objects lesson, as a **user-defined** data type built out of members. That word — *user-defined* — is the whole distinction between the basic types and `struct`, `union` and `class`.

**4. C** — *Concept: the order of a definition.* *"Variable definition always includes 'data type' followed by 'variable name'."* `int count;` is that order: type first, name second, semicolon last. B has the two the wrong way round, which is the order used in some other languages and is the reason the deck states the rule at all. A writes an assignment rather than a definition, and puts a type name where a value should be. D is English rather than C — a definition is a piece of syntax, not a description.

**5. B** — *Concept: the one-way relationship between the two.* The sentence has a direction. *Definition ⇒ declaration* is asserted ("a variable definition **is also** a declaration"); the converse is denied ("**not all** variable declarations are definitions"). So every definition declares, and some declarations do something less than defining — the week's summary sheet glosses the difference as reserving the storage. C is that same sentence read backwards, which is the commonest error here. A collapses the distinction the sentence is drawing. D invents a rule about where each is written; both may appear inside a function or outside one.

**6. D** — *Concept: names are for the programmer, addresses are for the machine.* If the compiler has replaced every use of the name with an address, nothing of the name is left in the running programme, so a consistent rename produces the same behaviour and costs nothing at run time. A is the belief the deck's sentence exists to correct; it is also the usual excuse for cryptic one-letter names. B confuses discarding the *name* with discarding the *value* — the bytes at the address stay exactly where they are and may be read as often as you like. C describes the arrangement the deck says C does **not** use.

**7. A** — *Concept: what a class adds.* *"Classes are also similar to structures but in addition to having variables, classes also usually have methods or functions."* The deck's dog class holds `name`, `breed` and `colour` and also a method that returns the name. B is false of all three constructs: a structure and a union both group *items of possibly different types*. C is the definition of a **union**, not a class. D is the union again, described by its size.

**8. C** — *Concept: the six operator categories.* The deck lists them: arithmetic, relational, logical, bitwise, assignment and misc. "Iterative" is not among them — iteration is a control-flow idea (`for`, `while`, `do-while`) and belongs to a later week, not to the operator slide. A, B and D are all on the list, which is exactly what makes the question a test of the list rather than of a definition.

**9. D** — *Concept: representing a problem as data.* The deck's sentence is *"When we programme problems, we represent the problem as data (or variable) and the variable is stored and processed by the computer"*, and the example asks which variables the multiples-of-9 problem needs. The quantities that vary as the programme runs are the multiples (or the running sum they are added into), the count of them and the resulting average. A denies that anything varies, which would leave nothing for the computer to store or process. B mistakes the numbers *in the wording of the problem* for the quantities the programme has to hold. C lists names belonging to the source file, not data belonging to the problem.

**10. A** — *Concept: state versus behaviour.* *"Real-world objects have two main characteristics; they have state and behaviour"*, and in a programme *"the state of an object is stored in variables and the behaviour of objects is described by methods."* For the dog, state is name, colour, breed and whether it is hungry; behaviour is barking, fetching and wagging its tail. A count of copies is a value the object holds, so it is state and it becomes a variable. B, C and D are all things the object *does*, so they are behaviour and become methods.

**11. C** — *Concept: information hiding, in the deck's own words.* The deck draws the conclusion itself: *"The fact that the state of an object can only be accessed by the object's methods allows for information hiding. This means that we can control the amount of information we share about our objects to the outside world."* A invents a performance claim the deck never makes, and reverses the truth of it. B confuses restricting *who* may change a variable with forbidding change altogether — the methods change the state constantly, they are simply the only route to it. D misreads the separate observation that *an object can be part of another object* as a requirement.

**12. B** — *Concept: struct versus union is about simultaneity, not about types.* The deciding sentences are *"all of its members start at the same location in memory"* and *"a union variable can represent the value of only one of its members at a time."* A record whose three fields must all hold values at once therefore has to be a structure; in a union, writing the name would destroy the matriculation number. A is the trap for anyone who looked for the difference in the definitions, since the deck uses the *same* wording — *group items of possibly different types into a single type* — for both. C picks the union for its memory saving and ignores what the saving costs. D is false: a structure holds members of different types perfectly well, and what a class adds is methods, not mixed types.

**13.** *Concept: the week's definitions, lists and rules.* **Programme:** *"A programme is a series of instructions that causes a computer or a microcontroller to perform a particular task"*, and *"a computer program includes more than just instructions. It also contains data and various memory addresses in which the instructions work to perform a specific task."* **Data type:** *"Data type is used for specifying the type of a variable. They determine the type and size of data associated with variables."* **Operator:** *"An operator is a symbol that tells the compiler to perform specific mathematical or logical functions."* **The three basic types in C:** characters, integers and floating-point numbers. **The six operator categories:** arithmetic, relational, logical, bitwise, assignment and misc. **The rule for a definition:** *"Variable definition always includes 'data type' followed by 'variable name'"* — so `int count;`, `float average;`, `char grade;` — and the deck adds that *"before using a variable, you should always define it by using appropriate data type"*, selecting that type *"according to your programme logic and need."* **The declaration sentence:** *"A variable definition is also a declaration, but not all variable declarations are definitions."* It asserts one implication and denies the other: writing a definition always counts as declaring the name and its type, but there exist declarations that stop short of being definitions — the week's summary sheet explains the shortfall as the reserving of storage, a definition setting bytes aside where a bare declaration only announces a name and a type. What the deck does with it is worth recording: it poses the sentence as a question — *"What does this mean?"* — and the next slide changes the subject without answering. So the relationship is examinable, the sentence is quotable, and any account of *why* it holds comes from the summary sheet and the further reading rather than from the lecture itself.

**14.** *Concept: state, behaviour and the four benefits.* **The dog.** *"Real-world objects have two main characteristics; they have state and behaviour."* The deck's dog has the state *name, colour, breed, hungry* and the behaviour *barking, fetching, wagging its tail*. Carried into a programme: *"In programming, an object is defined by its state and behaviour. The state of an object is stored in variables and the behaviour of objects is described by methods"*, and *"this means that every object will have their own variables and methods"* — two dogs have two `name` variables, not one shared between them. **Who may reach the variables.** The deck's two sentences are *"Methods are central to how programme objects work because only the methods of a particular object have access to the variables or state of that object"* and *"different objects can only interact with each other through their own individual methods."* **The four reasons for using programme objects.** (i) *"Since objects are not dependent on each other, each object can be independently created and maintained."* (ii) *"An object can be used in various parts of our programme"* — reuse. (iii) *"If an object is not working well or if it is creating problems for other objects in the programme, it can easily be removed and replaced without creating problems for the rest of the code"* — the deck's own comparison is *"this is similar to how a car works"*. (iv) *"The fact that the state of an object can only be accessed by the object's methods allows for information hiding. This means that we can control the amount of information we share about our objects to the outside world."* **From the summary sheet.** The sheet names the practice: **data encapsulation**, *"a programming concept that refers to the practice of hiding the implementation details of an object from the user … the user can only interact with the object through a set of public methods, while the internal workings of the object remain hidden"*, controlled by **access specifiers like `public` and `private`**. The benefits it lists for object-oriented programming are **modularity, code reusability and the independence of objects**. Note where each part came from: state, behaviour, the four reasons and the two access sentences are the lecture's; encapsulation, `public`/`private` and the three named benefits are the summary sheet's.

**15.** *Concept: structure, union and class, and choosing between them.* **Structure:** *"The structure in C is a user-defined data type that can be used to group items of possibly different types into a single type. The struct keyword is used to define a structure."* Members are reached with the **dot syntax** (`d.name`) *"to access members of a structure to either assign or modify values"*. **Union:** *"Union statements are defined in the same way as structure statements"* — the same phrase about grouping items of possibly different types — *"the union keyword is used to define a union."* What separates it: *"A union in 'C' is similar to a structure except that all of its members start at the same location in memory"*, so *"a union variable can represent the value of only one of its members at a time"*, and its size is that of its largest member rather than the sum of them. **Class:** *"Classes are also similar to structures but in addition to having variables, classes also usually have methods or functions."* The deck's dog class holds `name`, `breed`, `colour` **and** `get_name()`; the summary sheet adds the access specifiers `public` and `private` that make encapsulation enforceable. So the three separate on two questions: *do the members share one location?* (union yes, structure and class no) and *does it carry behaviour as well as state?* (class yes, structure and union no). **(i) Title, author and copies — a structure.** All three must hold values at once, and the deck's union sentence rules the union out for exactly that reason; there is no behaviour to attach, so a plain `struct` is enough. **(ii) Either a count or a voltage, never both — a union.** This is the case the deck's sentence describes: the two readings are alternatives, so letting them start at the same location costs nothing and the variable represents one of them at a time. The care it demands follows from the same sentence — the union itself does not record which member is currently live, so writing one destroys the other. **(iii) A balance nothing outside may set — a class.** Neither a structure nor a union carries methods, and *"only the methods of a particular object have access to the variables of that object"* is the property being asked for: make the balance a variable of the class and publish methods to deposit and withdraw, and every change must pass through code the class controls. In the summary sheet's vocabulary the balance is `private` and the methods are `public`, and the practice is **data encapsulation**.
