# MTH_102 — Week 1 Summary

*Elementary Mathematics II (Calculus) · Topic: Working with Real-Valued Functions · Lecturer: Danjuma Rose Uwanassara, MSc Mathematics*

**Scope note:** this rewrite follows the deck slide-for-slide. The lecturer teaches six things and nothing else — what a real-valued function is (and how it sits inside "relation"), the domain/codomain/range triple, evaluating a function at a number, finding a domain, finding a range, finding an inverse, and forming a composite. She writes domains and ranges as **D = (−∞, ∞)** and **R = (−∞, 2]** — capital letters, interval notation. She writes composites as **f ∘ g = f[g(x)]**, with square brackets. She does **not** cover: the vertical or horizontal line test, one-to-one / onto / bijective, any condition for an inverse to exist, the domain of a composite, operations f ± g / fg / f/g and their domains, completing the square, logarithms or their domains, piecewise functions, or trigonometric and exponential functions. None of that is in her deck. Two of her slides contain errors and both are flagged below — **slide 22's table is wrong** and you must not copy it.

## The 9 most examinable things this week

1. **Definition (slide 25, SUMMARY).** "A function is a mathematical relation that assigns **exactly one output value to each input value**." The load-bearing words are *exactly one* and *each*.
2. **Function versus relation (slide 9).** Her diagram is one circle inside another: **functions** ("sets of ordered pairs where each input has only one output") sit **inside relations** ("all sets of ordered pairs"). So every function is a relation; not every relation is a function.
3. **Domain, codomain and range are three different sets (slide 5).** For f(x) = x² on the domain {1, 2, 3, 4, 5}, the arrows land on {1, 4, 9, 16, 25} — she labels that the **range**. The codomain drawn around it also holds 17, 23 and 19, which no arrow reaches. The range is what is hit; the codomain is what was offered.
4. **Real-valued means the outputs are real numbers (slide 8).** She asks "IS THIS A REAL-VALUED FUNCTION?" over a diagram whose output set contains the letter **K** alongside 3, 9, 8 and 6 — the question is whether the outputs are real numbers, not whether the pairing is a function.
5. **Evaluating (slides 10 and 11).** Substitute the number for x and follow the rule in order. f(x) = 2x + 3 gives **f(2) = 2(2) + 3 = 4 + 3 = 7**. f(x) = x² − 4 gives **f(3) = (3)² − 4 = 9 − 4 = 5**.
6. **Domain rule she uses (slide 13).** "For f(x) to be a defined function, the denominator can not be zero." Set the denominator ≠ 0 and solve. If nothing real solves it, nothing is excluded and **D = (−∞, ∞)**.
7. **Range by solving for x (slide 15).** Write y = f(x), rearrange to get **x in terms of y**, then ask which y are allowed. For y = 2x − 9 you get x = (y + 9)/2, which works for every y, so **R = (−∞, ∞)**.
8. **Range by inequality, for an absolute value (slide 17).** Start from **|x − 3| ≥ 0**, negate to **−|x − 3| ≤ 0**, add 2 to both sides, read off **y ≤ 2**, so **R = (−∞, 2]**.
9. **Inverse recipe (slide 19), in her three words.** *Let* y = f(x) — *Switch x with y* — *isolate the y variable*. And composites (slide 20): **f ∘ g = f[g(x)]**, **g ∘ f = g[f(x)]**, and her two examples give different answers, so order matters.

## What a real-valued function is — her build

**Introduction (slide 3).** "Real-valued functions serve as the building blocks of mathematics. Functions offer a precise way to represent relationships between quantities. They allow mathematicians to describe how one variable depends on another, enabling the modeling and analysis of complex phenomena."

**Imagine this (slide 4).** The ice-cream-parlour picture: each flavour on the menu corresponds to a specific taste; choose vanilla and you expect vanilla, choose chocolate and you anticipate chocolate. "This concept of **pairing choices (inputs) with outcomes (outputs)** is at the heart of real-valued functions in mathematics." The point of the analogy is single-valuedness: one flavour, one taste.

**What are real-valued functions? (slide 5).** A three-set arrow diagram, the most useful picture in the deck:

- **domain** = {1, 2, 3, 4, 5}
- rule **f(x) = x²**
- arrows land on **1, 4, 9, 16, 25** — bracketed and labelled **range**
- the surrounding **codomain** also contains **17, 23, 19**, which are never reached

Three sets, not two. Domain = what you may put in. Codomain = the set the outputs are declared to live in. Range = the outputs actually produced. The range sits inside the codomain and is usually smaller.

**A function or not? (slides 6 and 7).** Two arrow-diagram drills. Slide 6 pairs the left-hand column 10, 3, 4, 7, 5 with the right-hand column 2, 3, 4, 8; slide 7 pairs 10, 3, 5, 7, 2 with 2, 3, 4, 7, 5. The test she is drilling is the definition on slide 25: look at the **inputs**. One arrow out of each input and it is a function; two arrows out of one input and it is not. Repeated *outputs* are harmless.

**Is this a real-valued function? (slide 8).** Set D = {A, B, C, D} arrowed into set Y = {K, 3, 9, 8, 6}. The question in the title is narrower than "is this a function": **real-valued** demands that the outputs be real numbers, and **K** is a letter. This is the only place in the deck where the "real-valued" half of the course title is examined directly.

**Is function the same as relation? (slide 9).** Her answer is a picture: a small circle labelled

> functions (sets of ordered pairs where each input has only one output)

drawn **inside** a large circle labelled

> relations (all sets of ordered pairs)

Read the nesting. Relations impose no condition at all; functions are the relations that pass the one-output test. Every function is a relation. Not every relation is a function.

## Examples of real-valued functions — her two types

### 1. LINEAR FUNCTION (slide 10)

**Given f(x) = 2x + 3.**

"In this linear function, for each input x, we multiply it by 2 and then add 3 to get the output f(x)."

If you plug in x = 2, you'll get
**f(2) = 2(2) + 3 = 4 + 3 = 7.**

"So, for an input of 2, the output is 7."

The slide carries a graph of f(x) = 2x + 3: a straight line rising left to right, crossing the y-axis at 3.

Note the order she spells out: **multiply first, then add**. Computing 2 + 3 first and doubling gives 10, and that is the mistake this slide is written to prevent.

### 2. QUADRATIC FUNCTION (slide 11)

**Given f(x) = x² − 4.**

"This quadratic function takes the square of the input x and subtracts 4."

If you input x = 3, you'll calculate
**f(3) = (3)² − 4 = 9 − 4 = 5.**

"So, for an input of 3, the output is 5."

The slide carries the graph: a parabola opening upward with its lowest point at (0, −4), crossing the x-axis at −2 and 2.

Again the order: **square first, then subtract**. Subtracting first gives (3 − 4)² = 1, which is a different function.

## How to find the domain of a function

She works three domain examples across slides 12, 13 and 14. **Only Example 2 (slide 13) survives in the rendered pages** — see notes.md for what is missing and why.

### Example 2 (slide 13)

**What is the domain of f(x) = (3x + 1)/(x² + 5)?**

**Solution:** "For f(x) to be a defined function, the denominator can not be zero i.e."

**x² + 5 ≠ 0**
**x² ≠ −5**

**NOTE:** "the square of both positive and negative numbers will always give a positive number. Thus,"

**D = (−∞, ∞)**

Read what she actually did. She set the denominator ≠ 0, rearranged, and then asked whether any real x could break it. Because x² is never negative, **x² = −5 has no real solution**, so no value of x has to be thrown out and the domain is every real number. The numerator 3x + 1 never enters the argument — the numerator of a fraction places no restriction on the domain.

*(Aside, not on her slide: the reason she writes "x² ≠ −5" and stops, rather than writing x ≠ ±√−5, is that √−5 is not a real number at all. Had the denominator been x² − 5 the answer would have been every real except ±√5, and that is the shape of question this example is preparing you for.)*

## How to find the range of a function

Three range examples, slides 15, 16 and 17. **Examples 1 and 3 survive; Example 2 (slide 16) does not** — see notes.md.

### Example 1 (slide 15) — solve for x

**Find the range of f(x) = 2x − 9.**

**Solution:** "We know that the range is the set of all possible output values (typically represented by y or f(x))."

**y = 2x − 9**
**2x = y + 9**
**x = (y + 9)/2**

**Thus, R = (−∞, ∞)**

Her method in one line: **make x the subject, then ask which y produce a legal x.** Here (y + 9)/2 is a perfectly good real number for every real y — no division by zero, no root of a negative — so every y is attainable and the range is all of ℝ. The method is doing real work even when the answer looks obvious; it is the same method that would expose an excluded y in a rational function.

### Example 3 (slide 17) — build the range from an inequality

**Find the range of f(x) = 2 − |x − 3|.**

**Solution:** Let

**y = 2 − |x − 3|**

"For an absolute function, if **|x − 3| ≥ 0**"

"Then, **−|x − 3| ≤ 0**"

"Add 2 to both sides"

**2 − |x − 3| ≤ 0 + 2**
**2 − |x − 3| ≤ 2**
**y ≤ 2**

**Thus, R = (−∞, 2]**

Four moves, and each one is a step you must be able to justify:

1. An absolute value is never negative: **|x − 3| ≥ 0**. This is the only fact about absolute value the deck uses.
2. **Multiplying by −1 reverses the inequality**: from |x − 3| ≥ 0 to −|x − 3| ≤ 0. This is the step students lose.
3. **Adding 2 does not reverse it**: 2 − |x − 3| ≤ 2.
4. The left-hand side *is* y, so **y ≤ 2**, which in her interval notation is **(−∞, 2]** — square bracket at 2 because y = 2 is attained (at x = 3), round bracket at −∞ because ∞ is never attained.

### TASK (slide 18) — set by the lecturer, no answer given

**What is the domain and range of h(x) = √(x + 2) − 8?**

Solution, in her two styles:

*Domain* — the quantity under a square root cannot be negative, so
x + 2 ≥ 0
x ≥ −2
**D = [−2, ∞)**

*Range* — build it up from the inequality, exactly as in Range Example 3:
√(x + 2) ≥ 0
√(x + 2) − 8 ≥ 0 − 8
√(x + 2) − 8 ≥ −8
y ≥ −8
**R = [−8, ∞)**

Note that here, unlike Example 3, **subtracting 8 does not reverse the inequality** — nothing was multiplied by a negative. Both brackets are square: x = −2 is a legal input (h(−2) = −8) and y = −8 is an attained output.

## How to find the inverse of a function

### Example 1 (slide 19)

**Find the inverse of f(x) = 3x − 7.**

**Solution:** Let

**y = 3x − 7**

"Switch x with y"

**x = 3y − 7**

"Then, isolate the y variable"

**3y = x + 7**
**y = (x + 7)/3**

"Thus,"

**f⁻¹ = (x + 7)/3**

Three named steps — *let y = f(x)*, *switch x with y*, *isolate y* — and that is the whole method as the deck gives it. Check it the way you would check any inverse: f(4) = 3(4) − 7 = 5, and f⁻¹(5) = (5 + 7)/3 = 4. ✓

*(Aside, not on her slide: she writes the answer as "f⁻¹ = (x + 7)/3" without the argument. Write **f⁻¹(x) = (x + 7)/3** in an exam script — the argument is what makes it a function rather than a number, and it costs nothing.)*

*(Second aside: the deck never says when an inverse exists. A function only has an inverse if no output is repeated. Every example she sets is a straight line, where that is automatic, so it never bites — but if you are handed f(x) = x² and asked for an inverse, the honest answer needs a restricted domain. She does not teach this and is unlikely to examine it.)*

## How to solve a composite function

### Example 1 (slide 20)

**Given f(x) = 5x − 4 and g(x) = x². What is f ∘ g?**

**Solution:**

**f ∘ g = f[g(x)]**
**f[x²] = 5(x²) − 4 = 5x² − 4**

### Example 2 (slide 20)

**Given f(x) = 5x − 4 and g(x) = x². What is g ∘ f?**

**Solution:**

**g ∘ f = g[f(x)]**
**g[5x − 4] = (5x − 4)²**
**= (5x − 4)(5x − 4)**
**= 25x² − 20x − 20x + 16**
**= 25x² − 40x + 16**

The two examples use the **same pair of functions** and are placed on the **same slide** for one reason: **5x² − 4 ≠ 25x² − 40x + 16**, so **f ∘ g ≠ g ∘ f**. Order is part of the question.

How to read the notation: in **f ∘ g**, the function written **nearest the x** acts first. f[g(x)] means g runs on x and its output is handed to f. Her habit is to write the outer function's rule with the whole inner expression dropped into the x-slot — hence f[x²] = 5(x²) − 4, with brackets round the x² so the 5 multiplies all of it.

Note also that she expands (5x − 4)² **the long way** — writing it as (5x − 4)(5x − 4) and showing both middle terms, −20x and −20x, before collecting them into −40x. Copy that. It is where the marks are, and (5x − 4)² = 25x² + 16 is the single most common error in this topic.

## Graphical representation (slide 21)

> "Each point on the graph corresponds to an input-output pair: **(x, f(x))**."
>
> "For example, consider the graph of the function f(x) = x²."
>
> "As we increase x, the value of f(x) increases exponentially. The graph shows a parabolic curve opening upward."
>
> "Graphs are incredibly powerful because they allow us to see patterns, trends, and relationships in a visual way. They're not just about lines and curves; they're about understanding how things change."

**The examinable line is the first one: a graph is the set of points (x, f(x))** — x-coordinate the input, y-coordinate the output.

*(Error on the slide. "Increases exponentially" is the wrong word for x². Exponential growth means the variable sits in the **exponent**, as in 2ˣ; x² has the variable in the **base** and is a **power** or **quadratic** function. She says "parabolic curve" in the very next sentence, which is correct, so the slide contradicts itself. If asked to describe how x² grows, say **quadratically**, not exponentially — but recognise the loose usage if it turns up in an option list.)*

## QUESTION (slide 22) — and the error you must not copy

The slide reads:

> **Graph f(x) = x + 2, when x = 0, 1, 2**
>
> **Solution:**
> Using a table, when x = 0, y = 2
> x = 1, y = 1,
> x = 2, y = 0

**This table is wrong.** For f(x) = x + 2:

| x | y = x + 2 |
|---|---|
| 0 | 0 + 2 = **2** |
| 1 | 1 + 2 = **3** |
| 2 | 2 + 2 = **4** |

The points to plot are **(0, 2), (1, 3), (2, 4)** — three points on a line of gradient 1 through (0, 2).

The printed table 2, 1, 0 is the table of a **different function, f(x) = 2 − x**. It agrees with x + 2 only at x = 0, which is presumably why the slip went unnoticed. Whoever built the slide computed 2 − x and labelled it x + 2.

Do the substitution yourself and trust it. If this exact question appears in an assessment, **the correct answer is 2, 3, 4** — but be aware the error exists in your own course material, so if an option list offers 2, 1, 0 you know where it came from.

## Her closing slides

**CONCLUSION (slide 23), verbatim:**

> "In conclusion, domain and range define where our function lives, function notation gives our function a name, and graphical representation helps us visualize the behavior of the function. These concepts are essential tools for understanding and working with functions in mathematics and various real-world applications."

**SUMMARY (slide 25), her four bullets:**

- "A function is a mathematical relation that assigns exactly one output value to each input value."
- "Functions take an input (called the domain) and produce an output (called the range)."
- "Functions are typically represented as x, where x is the input, and f(x) is the output."
- "Functions can be graphically represented, with the x-axis representing input and the y-axis representing output."

*(Two loose bullets worth correcting in your own notes. The second says an input is "called the domain" — the **domain is the set of all inputs**, not a single input, and slide 5 draws exactly that distinction. The third has a typo: functions are represented as **f(x)**, or as **y = f(x)**; "represented as x" describes the input, not the function. Bullets one and four are exact and quotable.)*

**FURTHER READING (slide 26).** Larson, R., & Edwards, B. H. (2017). *Calculus.* Cengage Learning. Stewart, J. (2015). *Essential Calculus.* Cengage Learning.

## Commonly confused

- **Range versus codomain.** Slide 5 is built to separate them: 17, 23 and 19 are in the codomain and not in the range. Ask "is this set *drawn around* the outputs, or *made of* them?"
- **Domain versus range.** Domain = inputs = x-axis. Range = outputs = y-axis. Her summary bullet blurs it; slide 5 does not.
- **Relation versus function.** The circles nest one way only. Every function is a relation. A relation with one input pointing at two outputs is not a function. Repeated **outputs** never disqualify anything.
- **Order of operations when evaluating.** f(x) = 2x + 3 at x = 2 is 2(2) + 3 = 7, not 2(2 + 3) = 10. f(x) = x² − 4 at x = 3 is 3² − 4 = 5, not (3 − 4)² = 1.
- **The denominator is what restricts a domain, never the numerator.** In (3x + 1)/(x² + 5) the 3x + 1 is irrelevant to the domain.
- **x² = −5 has no real solution.** That is *why* the domain is all of ℝ, not "because we ignore it". Writing x ≠ ±√−5 is not an answer.
- **Multiplying an inequality by −1 flips it; adding a number does not.** |x − 3| ≥ 0 becomes −|x − 3| **≤** 0 (flipped), then 2 − |x − 3| ≤ 2 (not flipped). Getting this backwards turns R = (−∞, 2] into [2, ∞).
- **f ∘ g versus g ∘ f.** Her Example 1 and Example 2 use the same f and g and get 5x² − 4 and 25x² − 40x + 16. Read right to left: the function next to the x goes first.
- **(5x − 4)² is not 25x² + 16.** Write it as (5x − 4)(5x − 4) and show the two −20x terms, as she does.
- **f⁻¹(x) is not 1/f(x).** For f(x) = 3x − 7 the inverse is (x + 7)/3; the reciprocal is 1/(3x − 7). Compose to test: an inverse hands x back, a reciprocal hands back 1.
- **After switching x and y, isolate y — not x.** Half the marks in an inverse question sit in that rearrangement, and it is easy to solve for the wrong letter out of habit.
- **Square bracket versus round bracket.** [−8, ∞) — the −8 is attained, ∞ never is. (−∞, 2] — 2 is attained at x = 3.
- **Slide 22's table is wrong.** f(x) = x + 2 gives 2, 3, 4 at x = 0, 1, 2. Do not reproduce 2, 1, 0.
- **x² grows quadratically, not exponentially**, whatever slide 21 says.

## To have understood the week, be able to say out loud:

- What a function is, in her words — a relation assigning **exactly one** output to **each** input — and why that puts functions inside relations rather than beside them.
- What the three sets on slide 5 are called and which one contains 17, 23 and 19.
- Why f(x) = (3x + 1)/(x² + 5) has domain (−∞, ∞), naming the fact about squares that makes it so.
- The two range methods: **make x the subject** (linear), and **build an inequality upward from |·| ≥ 0** (absolute value), including which step reverses the inequality and why.
- The three words of the inverse recipe — *let, switch, isolate* — and the answer (x + 7)/3 for f(x) = 3x − 7.
- Both composites of f(x) = 5x − 4 and g(x) = x², and why the deck puts them on the same slide.
- The domain and range of h(x) = √(x + 2) − 8, with the inequality shown at each step.
- That slide 22's table belongs to 2 − x, and that the right answer is 2, 3, 4.
