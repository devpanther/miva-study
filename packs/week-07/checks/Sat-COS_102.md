# Saturday — COS_102 nightly check

*Applied work only: writing a definition in the deck's order, reaching a member with the dot syntax, reading the summary sheet's `struct`, `union` and `class` code, deciding how many members a union can hold at once, sorting state from behaviour on a new object, `public` and `private`, and turning a problem into variables. The definitions themselves were Wednesday.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Which of these lines is a variable definition written the way the deck's rule requires - "data type" followed by "variable name"?

A. count int;
B. count = int;
C. int count;
D. define count as int;

**2.** A variable has been defined with  struct Dog d;  and its name must be set. The deck gives one way to reach a member in order to assign or modify a value. Which line uses it?

A. strcpy(d.name, "Rex");
B. strcpy(name.d, "Rex");
C. strcpy(Dog.name, "Rex");
D. strcpy(d name, "Rex");

**3.** A struct Dog and a union Dog are each written with the three members char name[20], char breed[20] and char colour[20]. How many of the three members can hold a value at the same time in each?

A. Three in the structure and three in the union
B. One in the structure and three in the union
C. One in the structure and one in the union
D. Three in the structure and one in the union

**4.** The week's summary sheet gives this class. Which part of it makes it a class rather than a structure?

```c
class Dog {
    char name[20];
    char breed[20];
    char colour[20];
    char[] get_name() { return name; }
};
```

A. The line char[] get_name() { return name; } - a class has variables and, in addition, methods or functions
B. The three char arrays, since only a class may hold several members of the same type
C. The absence of a semicolon after the closing brace, which a structure requires
D. The fact that all of its members start at the same location in memory

**5.** A library programme designs a LibraryBook object with title, author, copies_out, borrow() and return_book(). Which grouping matches the deck's account of state and behaviour?

A. State: borrow(), return_book(). Behaviour: title, author, copies_out
B. State: title, author. Behaviour: copies_out, borrow(), return_book()
C. State: title, author, copies_out. Behaviour: borrow(), return_book()
D. State and behaviour cannot be separated here, because a book is not a real-world object with behaviour

**6.** In that library class the variable copies_out is private and the methods borrow() and return_book() are public. On the week's summary sheet, what is that arrangement called, and what does it achieve?

A. It is called modularity, and it makes each object smaller in memory
B. It is called code reusability, and it lets one class borrow another class's variables
C. It is called information overloading, and it lets two methods share a single name
D. It is called data encapsulation - the implementation details are hidden from the user, who can interact with the object only through a set of public methods

**7.** The deck asks: to find the average of the first five multiples of 9, what are the variables? Which set of definitions represents that problem as data?

A. int nine; int five;
B. int sum; int count; float average;
C. float average;
D. char name[20]; int age;

**8.** What does this print?

```c
union Dog { char name[20]; char breed[20]; char colour[20]; };
union Dog d;
strcpy(d.name, "Rex");
strcpy(d.breed, "Poodle");
printf("%s %s", d.name, d.breed);
```

A. Rex Poodle, because each member of a union gets its own storage, exactly as in a structure
B. Poodle Poodle, because all members of a union start at the same location, so writing breed wrote over name
C. Rex Rex, because the first member written to fixes the union's contents and later writes to other members are discarded
D. Nothing: the compiler rejects d.breed, because a union variable may only be accessed through whichever member is named first in the definition

**9. (explain why)** Write the variable definitions a programme would need in order to find the average of the first five multiples of 9, following the deck's rule for a definition exactly. For each one, say which quantity in the problem it stands for, why you chose that data type, and what value it holds by the end. Then explain, in the deck's own terms, why 9 and 5 are not themselves the variables.

**10. (explain why)** The week's summary sheet asks: given the 'Dog' class example, how would you structure a 'LibraryBook' class, considering variables and methods, to efficiently manage books in a library? Answer it. Give the variables and the methods, say which members you would make private and which public and why, and justify the whole design by quoting the deck's two sentences about who may reach an object's state.

**11. (explain why)** The library system is to be built from programme objects rather than from separate entities. Set out the deck's four reasons for using programme objects, and for each one say what it would mean concretely for a LibraryBook. Then say exactly what the sentence "different objects can only interact with each other through their own individual methods" rules out, and give an example of a line of code it forbids.

**12. (explain why)** Write out, in C, a structure LibraryBook with the members char title[40], char author[40] and int copies. Then write the statements that create one such variable, set all three members and print the title and the number of copies, using the correct syntax for each member's type. Say what the size of the structure is and how you worked it out. Then say exactly what would change, in the layout and in the behaviour of your statements, if struct were replaced by union, and what the size would become.

---

## Answers

**1. C** — *Concept: The order of a definition: data type, then variable name.* 'Variable definition always includes "data type" followed by "variable name".' 'int count;' is that order - type first, name second, semicolon last. Option (A) has the two the wrong way round, which is the order used in some other languages and the reason the deck bothers to state the rule. Option (B) writes an assignment rather than a definition, and puts a type name where a value should be. Option (D) is English, not C: a definition is a piece of syntax, not a description of one.

**2. A** — *Concept: The dot syntax reaches a member of a structure variable.* The deck's slide is explicit: 'To access members of a structure to either assign or modify values, use the dot syntax (.)' The form is VARIABLE dot MEMBER, so d.name. Option (B) has the two the wrong way round, which reads as 'the d belonging to name'. Option (C) uses the TYPE name where the variable name belongs - struct Dog is the type, d is the variable, and there is nothing to store in a type. Option (D) omits the dot altogether and is not an expression at all.

**3. D** — *Concept: A union variable can represent the value of only one of its members at a time.* In a structure every member has its own storage, so all three hold values at once - that is what lets one dog have a name AND a breed AND a colour. In a union 'all of its members start at the same location in memory', so the three names refer to the same bytes, and the deck states the consequence directly: 'a union variable can represent the value of only one of its members at a time.' Option (A) treats the union as a structure, which is the whole thing the deck's Structure vs union slide exists to prevent. Options (B) and (C) get the structure wrong, which would leave no way to hold a record of several fields at all.

**4. A** — *Concept: A class is a structure that also carries methods.* 'Classes are also similar to structures but in addition to having variables, classes also usually have methods or functions. So, using the dog example, a class will usually consist of variables such as "name", "breed" and "colour". Also, it will have methods such as a method that returns the name of a dog.' get_name() is that method, and it is the only thing here a structure could not have. Option (B) is false of all three constructs - a structure groups 'items of possibly different types', so several of one type is no obstacle. Option (D) is the definition of a UNION. Option (C) invents a punctuation rule and does not touch what a class is.

**5. C** — *Concept: State is what the object holds; behaviour is what it does.* 'Real-world objects have two main characteristics; they have state and behaviour', and in a programme 'the state of an object is stored in variables and the behaviour of objects is described by methods'. For the deck's dog the state is name, colour, breed and hungry, and the behaviour is barking, fetching and wagging its tail. Reading the book the same way: title, author and copies_out are values the object HOLDS, so they are state and become variables; borrowing and returning are things the object DOES, so they are behaviour and become methods. Option (A) is the mapping inverted. Option (B) counts copies_out as behaviour because its value changes - but a state variable is precisely the thing whose value changes; what makes something behaviour is that it is an action. Option (D) refuses the deck's own analogy, which it applies to a dog, to complex objects and to objects inside other objects.

**6. D** — *Concept: Data encapsulation and the access specifiers.* The summary sheet defines it: 'Data encapsulation is a programming concept that refers to the practice of hiding the implementation details of an object from the user. This means that the user can only interact with the object through a set of public methods, while the internal workings of the object remain hidden.' It adds that 'access specifiers like public and private control the access to class members'. The lecture supplies the reason it works: 'only the methods of a particular object have access to the variables or state of that object', which is what makes a private variable reachable through borrow() and return_book() and nowhere else. Options (A) and (B) name two of the three BENEFITS the summary sheet lists - modularity, code reusability and the independence of objects - and attach them to the wrong idea, with an invented mechanism in each case. Option (C) invents a term outright.

**7. B** — *Concept: Representing a problem as data - the quantities, not the numbers in the wording.* 'When we programme problems, we represent the problem as data (or variable) and the variable is stored and processed by the computer.' The quantities the computer must hold here are the running total of the multiples (9 + 18 + 27 + 36 + 45 = 135), how many there are (5) and the average that comes out of the two (27). Each gets a definition in the deck's required form, data type followed by variable name. Option (A) mistakes the numbers MENTIONED in the wording for the quantities the programme must hold; 9 and 5 describe which multiples to use, they are not the data being processed. Option (C) keeps the answer and throws away everything needed to compute it, leaving nothing for the computer to process. Option (D) belongs to a different problem altogether.

**8. B** — *Concept: All members of a union start at the same location, so they overlap.* The union's three arrays are one 20-byte block with three names. strcpy(d.name, "Rex") writes R e x and a terminator at the start of that block; strcpy(d.breed, "Poodle") then writes over the same bytes, so both %s print Poodle. This is the direct consequence of a union variable being able to represent the value of only one of its members at a time. With struct in place of union the programme really would print 'Rex Poodle'. Option (C) invents a first-write-wins rule; nothing protects the earlier value. Option (D) invents a restriction on which member may be named - all of them may, which is exactly what makes the overwriting possible.

**9.** *Concept: Turning a problem into definitions.* THE DEFINITIONS, each written as data type followed by variable name and ended with a semicolon: 'int multiple;' stands for the multiple currently being handled, and is an int because a multiple of 9 is a whole number; it holds 9, then 18, then 27, then 36, then 45 in turn, ending at 45. 'int sum;' stands for the running total of the multiples, and is an int because a total of whole numbers is a whole number; it ends holding 135, since 9 + 18 + 27 + 36 + 45 = 135. 'int count;' stands for how many multiples there are, and is an int because a count is a whole number; it holds 5. 'float average;' stands for the answer, and is a float because an average is a measurement rather than a count and need not come out whole; here it holds 27, because 135 shared among 5 is exactly 27. (Five separate int variables for the five multiples would also represent the problem, but one variable reused together with a running sum is the shape the work actually takes.) WHY 9 AND 5 ARE NOT THE VARIABLES. The deck's sentence is that 'we represent the problem as data (or variable) and the variable is stored and processed by the computer'. What has to be stored and processed is the quantities whose values the machine works on and changes as it goes - the multiple in hand, the total so far, the count and the average. 9 and 5 are part of the DESCRIPTION of the problem: they say which multiples to take and how many, and they never change. Mistaking the numbers in the wording for the data is the usual first error, and it produces a programme with nowhere to put the total it is computing. Note also the deck's instruction about choosing the type: 'you can select the data type according your programme logic and need' - the counts and totals take the basic type integer, and the average takes floating-point, because that is what each quantity is.

**10.** *Concept: Designing a class from the dog example, with access specifiers.* THE MODEL. The deck's dog class 'will usually consist of variables such as "name", "breed" and "colour"' and 'will have methods such as a method that returns the name of a dog', because 'the state of an object is stored in variables and the behaviour of objects is described by methods'. So the design proceeds by asking what a book HOLDS and what a book DOES. VARIABLES (the state): title, author, and a count of copies - say copies_owned and copies_out - and an identifier such as a catalogue number. Each is a value the object holds and each takes the data type its quantity calls for: the title and author are characters, the counts are integers. METHODS (the behaviour): borrow(), which lends a copy; return_book(), which takes one back; and readers such as get_title() and get_copies_available(), on the model of the dog's get_name(). PRIVATE AND PUBLIC. The variables are private and the methods are public. That is the arrangement the summary sheet names as data encapsulation - 'hiding the implementation details of an object from the user. This means that the user can only interact with the object through a set of public methods, while the internal workings of the object remain hidden' - with public and private being the access specifiers that 'control the access to class members'. The point of making copies_out private in particular is that every change to it then passes through borrow() and return_book(), which can refuse a loan when no copy is free; leave it public and any line anywhere in the programme can set it to anything, and the object can no longer keep its own promises. WHY THE DESIGN WORKS - the deck's two sentences: 'only the methods of a particular object have access to the variables or state of that object', and 'different objects can only interact with each other through their own individual methods'. Those are what make the private variables genuinely unreachable and the public methods genuinely the only route, so a Reader object or a Loan object must go through borrow() rather than touching the count. The deck's own reasons for building this way follow immediately: each book object can be created and maintained independently, it can be used in various parts of the programme, a faulty one can be removed and replaced without disturbing the rest of the code - 'similar to how a car works' - and the author controls how much is shared about the object with the outside world.

**11.** *Concept: The four reasons for programme objects, and the interaction rule.* THE FOUR REASONS, in the deck's words, each applied to the book. (1) 'Since objects are not dependent on each other, each object can be independently created and maintained.' A LibraryBook can be written, tested and corrected on its own; how it keeps its count of copies is nobody else's business, so that count can be re-arranged without the reader records or the fines code being touched. (2) 'An object can be used in various parts of our programme.' The same LibraryBook serves the search screen, the loans desk and the stock report, because it carries its own state with it and needs nothing set up around it first. (3) 'If an object is not working well or if it is creating problems for other objects in the programme, it can easily be removed and replaced without creating problems for the rest of the code. This is similar to how a car works!' A LibraryBook that miscounts can be replaced by a corrected one offering the same methods, and the rest of the system, which only ever called borrow() and return_book(), does not change. (4) 'The fact that the state of an object can only be accessed by the object's methods allows for information hiding. This means that we can control the amount of information we share about our objects to the outside world.' The library can publish get_title() and get_copies_available() while keeping the acquisition price or the borrower's identity unreachable. WHAT THE INTERACTION SENTENCE RULES OUT. It rules out one object reaching inside another and touching its variables directly. Every exchange between two objects must go through a method that the object whose state is involved has published. So a Reader object may call book.borrow(), and that is legal because borrow() is one of the book's own methods; what it may not do is 'book.copies_out = book.copies_out + 1;', reaching in and altering the book's state from outside. That forbidden line is exactly what makes the difference: it bypasses every check borrow() performs, and it makes the reader's code depend on how the book happens to store its count - so the book can no longer be maintained or replaced independently, and all four benefits go with it.

**12.** *Concept: Declaring a structure, reaching its members with the dot syntax, and what changes when the members share one block.* THE CODE: 'struct LibraryBook { char title[40]; char author[40]; int copies; };' - note the semicolon after the closing brace. Then 'struct LibraryBook b;' defines a variable and reserves the storage; 'strcpy(b.title, "Things Fall Apart"); strcpy(b.author, "Chinua Achebe"); b.copies = 3;' set the members; 'printf("%s: %d copies\n", b.title, b.copies);' prints them. TWO POINTS OF SYNTAX: the dot is how a member is reached for both reading and writing, exactly as the deck's slide says - 'to access members of a structure to either assign or modify values, use the dot syntax' - and the two char arrays cannot be set with = because an array name is not something you can store into, so their contents are copied in with strcpy, while copies, being a plain int, takes an ordinary assignment. The conversion specifiers follow the member types: %s for the arrays, %d for the int. SIZE: 40 + 40 + 4 = 84 bytes. Each member of a structure has its own storage laid out in order, so the size of the structure is the sum of its members' sizes - the same arithmetic that makes the summary sheet's struct Dog, with three char[20] members, 60 bytes. IF struct BECAME union: the layout collapses. All three members would start at the same location, so title, author and copies would be three names for one block rather than three blocks, and the size would become 40 - the size of the largest member, char[40] - because a union is big enough for its largest member and no bigger. The statements would then be destructive: strcpy(b.title, ...) writes the title at the start of the block; strcpy(b.author, ...) writes over the same place, destroying it; and b.copies = 3 writes an integer over the first bytes of that text. The printf would print rubbish for the title and 3 for the copies, because copies was written last. A union variable can represent the value of only one member at a time, so a LibraryBook - which needs a title AND an author AND a count simultaneously - must be a structure; a union is right only where the members are alternatives that never coexist.
