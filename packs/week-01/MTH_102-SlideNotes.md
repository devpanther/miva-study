# MTH_102 Week 1 — what the slide images contained that the extracted text had lost

Deck: `Working-with-Real-Valued-Functions-pdf`, **27 pages**, lecturer **Danjuma Rose Uwanassara, MSc Mathematics**. Deck title slide reads **WORKING WITH REAL-VALUED FUNCTIONS**; the accompanying MIVA week-summary sheet calls the topic *Real-Valued Functions and their Properties*.

## 0. Which pages extracted as text and which were images

**Extracted as full text (usable from `pdftotext` alone):** pages 1 (title and lecturer), 2 (LEARNING OBJECTIVES), 3 (INTRODUCTION), 4 (IMAGINE THIS), 23 (CONCLUSION), 26 (FURTHER READING).

**Extracted as partial text — headings plus loose diagram labels, but no arrows:** pages 5 (WHAT ARE REAL-VALUED FUNCTIONS?), 6 and 7 (A FUNCTION OR NOT?), 8 (IS THIS A REAL-VALUED FUNCTION?), 9 (QUESTION: is function the same as relation?). The numbers and set names came through; the arrow structure did not.

**Extracted as heading only — image slides, the bug this rebuild fixes:** pages 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 27. `pdftotext` recovered from these nothing but: EXAMPLES OF REAL-VALUED FUNCTIONS ×2, HOW TO FIND THE DOMAIN OF A FUNCTION ×3, HOW TO FIND THE RANGE OF A FUNCTION ×3, TASK, HOW TO FIND THE INVERSE OF A FUNCTION, HOW TO SOLVE A COMPOSITE FUNCTION, GRAPHICAL REPRESENTATION, QUESTION, SUMMARY ×2, Thank You. **Every worked example in the deck was inside one of those pictures.**

**Rendered PNGs available to this rebuild (13):** pages **10, 11, 13, 15, 17, 18, 19, 20, 21, 22, 24, 25, 27**. Page numbering was verified against the deck's alternating running head — the banner alternates *Elementary Math (calculus)* / *Elementary Math II (calculus)* page by page, and all thirteen renders match the extraction's alternation exactly, so the p0NN numbers are trustworthy.

> ### GAP — read this before assuming this file is complete
> **Pages 12, 14 and 16 are image-only slides that were NOT among the rendered pages.** By position they are:
> - **page 12 — HOW TO FIND THE DOMAIN OF A FUNCTION, Example 1** (page 13 is labelled *Example 2*)
> - **page 14 — HOW TO FIND THE DOMAIN OF A FUNCTION, Example 3**
> - **page 16 — HOW TO FIND THE RANGE OF A FUNCTION, Example 2** (page 15 is *Example 1*, page 17 is *Example 3*)
>
> Three of her worked examples — two on domain, one on range — remain unrecovered. Nothing in `summary.md` or the checks claims to reproduce them. **If those three pages are ever rendered, they should be transcribed here and folded into the summary.** In particular, note that both surviving domain examples produce D = (−∞, ∞) with nothing excluded; it is likely that one of pages 12 or 14 is the case where a value *is* excluded, so the rebuild teaches the general rule and drills the excluded case (check-thu Q3) rather than leaving Gift with only the degenerate case.
>
> Pages 6, 7 and 8 were also not rendered. Their numbers are known from the extraction but the **direction and multiplicity of their arrows are not**, so `summary.md` describes what they drill without asserting a verdict on any particular diagram.

## 1. Definitions and statements that were invisible

**Slide 25 — the SUMMARY, verbatim. This is the deck's definition of a function and it appears nowhere else in the extracted text.**
> - "A function is a mathematical relation that assigns exactly one output value to each input value."
> - "Functions take an input (called the domain) and produce an output (called the range)."
> - "Functions are typically represented as x, where x is the input, and f(x) is the output."
> - "Functions can be graphically represented, with the x-axis representing input and the y-axis representing output."

**Slide 21 — GRAPHICAL REPRESENTATION, verbatim.**
> "Each point on the graph corresponds to an input-output pair: (x, f(x))."
> "For example, consider the graph of the function f(x) = x²."
> "As we increase x, the value of f(x) increases exponentially. The graph shows a parabolic curve opening upward."
> "Graphs are incredibly powerful because they allow us to see patterns, trends, and relationships in a visual way. They're not just about lines and curves; they're about understanding how things change."

**Slide 13 — the domain rule, verbatim.**
> "For f(x) to be a defined function, the denominator can not be zero i.e."
> "NOTE: the square of both positive and negative numbers will always give a positive number."

**Slide 15 — the range definition, verbatim.**
> "We know that the range is the set of all possible output values (typically represented by y or f(x))."

**Slide 17 — the absolute-value fact, verbatim.**
> "For an absolute function, if |x − 3| ≥ 0"
> "Then, −|x − 3| ≤ 0"
> "Add 2 to both sides"

**Slide 19 — the inverse recipe, verbatim, as three imperatives.**
> "Let" … "Switch x with y" … "Then, isolate the y variable" … "Thus, f⁻¹ = (x + 7)/3"

**Slide 9 — the function/relation answer (this one did survive extraction, and matters).**
> functions "(sets of ordered pairs where each input has only one output)" — drawn as a circle **inside** —
> relations "(all sets of ordered pairs)"

That is the deck's entire stock of stated rules. There is no vertical line test, no horizontal line test, no injective/surjective vocabulary, no invertibility condition, no domain-of-a-composite rule, no rule for f ± g, fg or f/g, no logarithm domain, and no completing the square anywhere in the 27 pages.

## 2. Worked examples that were invisible

**Slide 10 — EXAMPLES OF REAL-VALUED FUNCTIONS, 1. LINEAR FUNCTION.**
> "Given f(x) = 2x + 3"
> "In this linear function, for each input x, we multiply it by 2 and then add 3 to get the output f(x)."
> "If you plug in x = 2, you'll get f(2) = 2(2) + 3 = 4 + 3 = 7."
> "So, for an input of 2, the output is 7."

Slide also carries a plotted graph of f(x) = 2x + 3 (red line, y-intercept 3, axes from −5 to 4).

**Slide 11 — EXAMPLES OF REAL-VALUED FUNCTIONS, 2. QUADRATIC FUNCTION.**
> "Given f(x) = x² − 4"
> "This quadratic function takes the square of the input x and subtracts 4."
> "if you input x = 3, you'll calculate f(3) = (3)² − 4 = 9 − 4 = 5"
> "so, for an input of 3, the output is 5."

Slide also carries the parabola y = x² − 4, vertex (0, −4), roots at ±2.

**Slide 13 — HOW TO FIND THE DOMAIN OF A FUNCTION, Example 2.**
> "Example 2: What is the domain of f(x) = (3x + 1)/(x² + 5)"
> "Solution: For f(x) to be a defined function, the denominator can not be zero i.e."
> x² + 5 ≠ 0
> x² ≠ −5
> "NOTE: the square of both positive and negative numbers will always give a positive number. Thus,"
> **D = (−∞, ∞)**

**Slide 15 — HOW TO FIND THE RANGE OF A FUNCTION, Example 1.**
> "Example 1: Find the range of f(x) = 2x − 9"
> "Solution: We know that the range is the set of all possible output values (typically represented by y or f(x))."
> y = 2x − 9
> 2x = y + 9
> x = (y + 9)/2
> "Thus, **R = (−∞, ∞)**"

**Slide 17 — HOW TO FIND THE RANGE OF A FUNCTION, Example 3.**
> "Example 3: Find the range of f(x) = 2 − |x − 3|"
> "Solution: Let"
> y = 2 − |x − 3|
> "For an absolute function, if |x − 3| ≥ 0"
> "Then, −|x − 3| ≤ 0"
> "Add 2 to both sides"
> 2 − |x − 3| ≤ 0 + 2
> 2 − |x − 3| ≤ 2
> y ≤ 2
> "Thus, **R = (−∞, 2]**"

**Slide 19 — HOW TO FIND THE INVERSE OF A FUNCTION, Example 1.**
> "Example 1: Find the inverse of f(x) = 3x − 7"
> "Solution: Let"
> y = 3x − 7
> "Switch x with y"
> x = 3y − 7
> "Then, isolate the y variable"
> 3y = x + 7
> y = (x + 7)/3
> "Thus, **f⁻¹ = (x + 7)/3**"

**Slide 20 — HOW TO SOLVE A COMPOSITE FUNCTION, Examples 1 and 2 (both on one slide).**
> "Example 1: Given f(x) = 5x − 4 and g(x) = x². What is f ∘ g?"
> "Solution:"
> f ∘ g = f[g(x)]
> f[x²] = 5(x²) − 4 = **5x² − 4**
>
> "Example 2: Given f(x) = 5x − 4 and g(x) = x². What is g ∘ f?"
> "Solution:"
> g ∘ f = g[f(x)]
> g[5x − 4] = (5x − 4)²
> = (5x − 4)(5x − 4)
> = 25x² − 20x − 20x + 16
> = **25x² − 40x + 16**

**Slide 22 — QUESTION, with its worked table (see §4 — the table is wrong).**
> "Graph f(x) = x + 2, when x = 0,1,2"
> "Solution: Using a table, when x = 0, y = 2"
> "x = 1, y = 1,"
> "x = 2, y = 0"

## 3. Tasks the deck sets and does not answer

- **Slide 18, TASK:** "What is the domain and range of h(x) = √(x + 2) − 8" — no solution given anywhere in the deck. Worked in the rebuild as **D = [−2, ∞), R = [−8, ∞)**.

That is the deck's only unanswered task. Slide 22 is labelled QUESTION and does supply a solution, but the solution is wrong.

## 4. Errors on the slides

1. **Slide 22 — substantive, and the most important thing in this file.** The slide asks for f(x) = x + 2 at x = 0, 1, 2 and prints the table **y = 2, 1, 0**. The correct values are **2, 3, 4**. The printed table is the table of **f(x) = 2 − x**; whoever built the slide computed the wrong rule. The two functions agree at exactly one point, x = 0, where both give 2, which is presumably why it survived review — and both lines pass through (0, 2), so even a sketch starts out plausible. The corrected table, the points (0, 2), (1, 3), (2, 4), and an explicit naming of the misprint are taught in `summary.md`, tested in `questions.md` Q11 and S14, and appear in both nightly checks. **Do not let this table reach an exam script.**
2. **Slide 21 — terminology.** "As we increase x, the value of f(x) increases exponentially" is wrong for f(x) = x². Exponential growth has the variable in the exponent; x² has it in the base and grows quadratically. The very next sentence on the same slide correctly says "parabolic curve", so the slide contradicts itself. Flagged as an aside in the summary and tested conceptually in check-mon.
3. **Slide 25 — two loose bullets.** "Functions take an input (called the domain)" conflates a single input with the *set* of inputs, and slide 5 draws exactly the distinction being blurred. "Functions are typically represented as x" is a typo for f(x) or y = f(x) — as written it names the input, not the function. Bullets one and four of that slide are exact and are quoted straight in the summary; these two are quoted and then corrected in a marked aside.
4. **Slide 19 — notation, minor.** She writes the answer as `f⁻¹ = (x + 7)/3`, dropping the argument. Correct is f⁻¹(x) = (x + 7)/3. Flagged as an aside, not treated as a mathematical error.

## 5. Notation and habits the extraction lost

- **Capital D and capital R** for domain and range, given in **interval notation**: D = (−∞, ∞), R = (−∞, 2], never set-builder and never words.
- **Composites written with square brackets around the inner function**: f ∘ g = f[g(x)], then f[x²] = 5(x²) − 4. She keeps a bracket round the substituted expression so the outer coefficient multiplies all of it.
- **Squares expanded the long way**: (5x − 4)² is rewritten as (5x − 4)(5x − 4) and both middle terms −20x and −20x are shown before being collected. She deliberately does not use a shortcut.
- **Inverses driven by three named imperatives** — *Let*, *Switch x with y*, *isolate the y variable* — which are the words to reproduce in a solution.
- **Ranges built as a chain of inequalities**, one operation per line, with the operation named in words above the line ("Add 2 to both sides").
- **Domains argued from the denominator only**, with the impossibility of the exclusion stated as a NOTE in words rather than in symbols.
- **The domain/codomain/range triple drawn as three nested regions on slide 5**, with three deliberately unreached values (17, 23, 19) placed in the codomain — the extraction preserved those three numbers but not their role, so the extracted text read as a meaningless list.
- **Alternating running head** *Elementary Math (calculus)* / *Elementary Math II (calculus)*, which is what allowed the page numbering of the renders to be verified.

## 6. Was the old summary wrong, incomplete, or basically fine?

**Almost every mathematical statement in the old page is true, and it is still the wrong document, being replaced rather than patched.** It carried an honest footnote admitting it was written from the slide titles because the deck extracted as headings only — that footnote was accurate, and it is the whole problem. Four specific failures:

**a) It taught a syllabus the lecturer does not have.** The old summary devoted its "Most likely to be examined" list and its formula table to: the vertical line test and the horizontal line test as named tests; one-to-one, onto, bijective; the existence condition for an inverse; the two-part domain-of-a-composite condition ("the part most candidates drop"); operations f ± g, fg, f/g with dom f ∩ dom g; the logarithm domain g(x) > 0; the even-versus-odd-root distinction; range by completing the square with a vertex-form formula; and a table of parent ranges including aˣ, ln x, sin x and cos x. **None of that appears anywhere in the 27 pages.** The deck has no line tests, no injectivity vocabulary, no logarithms, no trigonometry, no exponentials, no operations on functions, and no completing the square. A student revising the old page spent most of the hour on material she never taught.

**b) It contained none of her worked examples.** The old summary's seven worked examples were all invented — √(x + 4)/(x − 1), x² − 6x + 11, (2x + 1)/(x − 3), (3x − 2)/(x + 4), 1/(x − 2) with √x, 2x − 1 with x² + x, √(x − 1) with x − 5. Not one of the lecturer's actual examples appeared: **f(x) = 2x + 3 at x = 2**, **f(x) = x² − 4 at x = 3**, **(3x + 1)/(x² + 5)**, **2x − 9**, **2 − |x − 3|**, **3x − 7**, **5x − 4 with x²**. Her **TASK, √(x + 2) − 8**, the single most likely assessment template in the week, was absent, and so was the slide-22 graphing question.

**c) It missed both of the deck's errors, and one of them will cost marks.** Slide 22's table is wrong. A page written from slide titles could not possibly have caught it, and Gift would have met it cold. The same goes for the "increases exponentially" line on slide 21 and the two garbled SUMMARY bullets.

**d) Its emphasis was inverted on the things that do overlap.** Where the old page and the deck agree — domain of a rational function, range, inverse, composite — the old page reached for the hardest available case (split domains like [−4, 1) ∪ (1, ∞), range of a rational function by solving for x, domain of a composite) while the lecturer works only straight lines, one simple rational function whose domain turns out to be everything, one absolute value, and one square root. Her level is the level of the exam. The old page also used lower-case option letters a) b) c) d) and dom/ran notation, where she uses D and R.

The rebuild replaces all of it. Where her material is genuinely thin — no invertibility condition, no guidance on what to do when a denominator *does* have real roots — the gap is marked as an aside or, in check-thu Q3, drilled explicitly as her own rule applied to a case her surviving slides do not reach.
