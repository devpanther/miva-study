# MTH_102 — Week 3 Summary

*Elementary Mathematics II (Calculus) · Topic: Evaluating Limits Algebraically · Lecturer: Danjuma Rose Uwanassara, MSc Mathematics*

**Scope note:** this rewrite follows the deck slide-for-slide. The lecturer teaches **four evaluation methods** — direct substitution, factorization, rationalization and L'Hôpital's Rule — with eight worked examples and two TASKs, and then **ten named properties of a limit**, each with a small worked illustration. She writes the point being approached as **c** (lim x→c), never *a*. She does **not** cover the ε–δ definition (a picture of it sits on the objectives slide, but no definition is ever stated), **one-sided limits** or the notation x→c⁺ / x→c⁻, the **existence test** by agreement of one-sided limits, **continuity** or the classification of discontinuities, **limits at infinity by dividing through by the highest power**, the catalogue of indeterminate forms (she says "indeterminate form" but never lists them), lim x→0 (sin x)/x = 1 as a standard result in its own right, or the formal hypotheses of L'Hôpital's Rule. Learn her eight examples and both TASKs cold; they are the shape of the exam questions.

**Two things on the slides are wrong and you will meet them again.** Slide 23 (Squeeze Theorem) prints the upper bound as 5 − x³ where it must be 5 + x³. Slide 27 (SUMMARY) says lim x→∞ f(x) means "approaching x from the right" and lim x→−∞ f(x) "from the left" — that is a confusion of limits at infinity with one-sided limits. Both are dealt with below.

## The 10 most examinable things this week

1. **Direct substitution (slide 4).** "This is the simplest method and applies when substituting the value of **c** directly into the function results in a **well-defined expression**." That last phrase is the whole test: substitute first, and if you get a number, you are finished.
2. **A well-defined expression can be ugly (slide 5).** lim x→2 (x³ − 3)/(x² − 6) = 5/(−2) = −2.5. A negative denominator, a fraction, a decimal — all fine. Only 0/0 stops you.
3. **Factorization (slide 6).** "When direct substitution results in an indeterminate form, factoring and simplification can help." Her sequence is fixed: substitute → get 0/0 → factor → **cancel the common factor** → substitute again.
4. **Complex fractions are cleared by multiplying through by the common denominator (slide 7).** For (1/x − 1/2)/(x − 2) the common denominator is **2x**; multiply numerator and denominator by it. She files this under FACTORIZATION, not under rationalization.
5. **Factor out −1 to expose the cancellation (slide 7).** (2 − x) is not (x − 2). Writing 2 − x = **−1(x − 2)** is what lets the (x − 2) cancel, and it is where the minus sign in −1/4 comes from.
6. **Rationalization (slide 9).** "Useful when dealing with limits involving square roots or complex fractions." Multiply numerator and denominator by the **conjugate of the numerator** — for √(x+9) − 3 that is √(x+9) + 3. The product kills the root: (x + 9) − 9 = x.
7. **L'Hôpital's Rule (slide 12).** "L'Hôpital's Rule essentially allows you to replace the original function with its derivatives in situations where direct substitution results in an indeterminate form." So lim f(x)/g(x) becomes **lim f′(x)/g′(x)** — top and bottom differentiated **separately**. This is not the quotient rule.
8. **Re-check the form and repeat (slide 13).** After one application of L'Hôpital, x²/eˣ becomes 2x/eˣ, still ∞/∞, "so we differentiate again", giving 2/eˣ → 0. You stop the moment the form is no longer indeterminate.
9. **The ten properties (slide 14).** Sum, Difference, Constant, Constant Multiple, Product, Quotient, Power, Composite Function, Squeeze Theorem, Reciprocal. Two of them carry a **non-zero proviso**: Quotient needs lim x→c g(x) ≠ 0 (slide 20), Reciprocal needs lim x→c f(x) ≠ 0 (slide 24).
10. **Squeeze Theorem (slide 23).** "If f(x) ≤ g(x) ≤ h(x) for all x in some interval containing c except possibly at c itself, lim x→c f(x) = lim x→c h(x) = L, then lim x→c g(x) = L." Note her lettering: the **middle** function is g, the outer bounds are f and h. The two outer limits must come out **equal**, or the theorem tells you nothing.

## Method 1 — Direct substitution

**Slide 4, the statement.** "This is the simplest method and applies when substituting the value of c directly into the function results in a well-defined expression."

### Question (slide 4)

**Evaluate lim x→3 x² + 2x − 3**

Solution: substitute x = 3 into the expression:
= (3)² + 2(3) − 3
= 9 + 6 − 3
= 15 − 3
= **12**

Notice she keeps the intermediate line 15 − 3. Copy that habit: it is one mark for the arithmetic being visible.

### Question (slide 5)

**Evaluate lim x→2 (x³ − 3)/(x² − 6)**

Solution: substitute x = 2 into the expression:
= (2³ − 3)/(2² − 6)
= (8 − 3)/(4 − 6) = 5/(−2)
= **−2.5 or −2½**

This example exists to make one point: **the denominator did not have to be positive, or pretty, for substitution to be legal.** 4 − 6 = −2 is a perfectly good non-zero number, so the substitution stands and the limit is −2.5. Do not go hunting for a factorization here — there is nothing indeterminate about it.

## Method 2 — Factorization

**Slide 6, the statement.** "When direct substitution results in an indeterminate form, factoring and simplification can help." *(The slide title is misprinted **FACRORIZATION METHOD**; slide 7 spells it correctly. Nothing else on the slide is affected.)*

### Question (slide 6)

**Evaluate lim x→2 (x² − 4)/(x − 2)**

Solution: "You notice how if we use direct substitution it will result to an indeterminate form. i.e."
(2² − 4)/(2 − 2) = **0/0**

"Now, let's factor the numerator: (x − 2)(x + 2)"
so that lim x→2 [(x − 2)(x + 2)]/(x − 2)

"Thus, cancel the common factor to get"
lim x→2 (x + 2)
= (2 + 2)
= **4**

The step that needs justifying is the cancellation, and she does not justify it on the slide, so hold the reason yourself: **throughout a limit x is close to 2 but never equal to 2**, so x − 2 is never actually zero and dividing by it is legal. The simplified function x + 2 agrees with the original at every x except the single point x = 2, and the limit never inspects that point.

### Question (slide 7)

**Evaluate lim x→2 (1/x − 1/2)/(x − 2)**

Solution: "This is a complex fraction. We multiply the numerator and denominator by the common denominator i.e. **2x**,"

lim x→2 (2 − x)/[2x(x − 2)]

"Then, we factor out **−1**, to get"

lim x→2 [−1(x − 2)]/[2x(x − 2)] = lim x→2 (−1)/(2x) = (−1)/(2(2)) = **−1/4**

Two moves worth naming. **First**, multiplying top and bottom by 2x clears both small fractions in one stroke: (1/x − 1/2)·2x = 2 − x, and (x − 2)·2x = 2x(x − 2). **Second**, 2 − x looks nothing like the x − 2 downstairs until you write it as −1(x − 2); that rewrite is the entire source of the minus sign in the answer. Students who cancel 2 − x against x − 2 directly get +1/4 and lose the question.

### TASK (slide 8)

**Find the limit of the function lim x→3 (x³ − 27)/(x − 3)**

*The slide sets it and gives no answer. Worked here:*

Substitution gives (27 − 27)/(3 − 3) = 0/0, so factor. The difference of cubes is
x³ − 27 = (x − 3)(x² + 3x + 9).
lim x→3 [(x − 3)(x² + 3x + 9)]/(x − 3) = lim x→3 (x² + 3x + 9)
= 9 + 9 + 9 = **27**

Check it against L'Hôpital, which she teaches four slides later: (3x²)/1 at x = 3 is 27. The two methods agree, and that agreement is a free way to check yourself.

## Method 3 — Rationalization

**Slide 9, the statement.** "Useful when dealing with limits involving square roots or complex fractions."

### Question (slide 9)

**Evaluate lim x→0 (√(x+9) − 3)/x**

Solution: "Rationalize the numerator by multiplying both the numerator and denominator by the conjugate of the numerator:"

lim x→0 [(√(x+9) − 3)/x] · [(√(x+9) + 3)/(√(x+9) + 3)]
= lim x→0 [(x + 9) − 9]/[x(√(x+9) + 3)]
= lim x→0 x/[x(√(x+9) + 3)]

"Since x is common, cancel it out so that we have:"
= lim x→0 1/(√(x + 9) + 3)
= 1/(√(0 + 9) + 3) = 1/(√9 + 3)
= 1/(3 + 3) = **1/6**

The conjugate is chosen to match the **numerator**, because the numerator is what carries the root. Multiplying (√A − 3)(√A + 3) gives A − 9 with no root left, which is the whole point.

### Question (slide 10)

**Evaluate lim x→4 (√x − 2)/(x − 4)**

Solution:
lim x→4 [(√x − 2)/(x − 4)] · [(√x + 2)/(√x + 2)]
= lim x→4 (x − 4)/[(x − 4)(√x + 2)]
= lim x→4 1/(√x + 2)
= 1/(√4 + 2) = 1/(2 + 2) = **1/4**

Same shape, one line shorter: (√x − 2)(√x + 2) = x − 4 exactly, so the cancellation is immediate.

### TASK (slide 11)

**Evaluate lim x→4 (1/√x − 1/2)/(x − 4)**

*The slide sets it and gives no answer. Worked here, and note that it needs both methods at once:*

Clear the complex fraction first. The common denominator of 1/√x and 1/2 is 2√x:
1/√x − 1/2 = (2 − √x)/(2√x).
So the whole expression is (2 − √x)/[2√x(x − 4)].

Now factor the denominator's x − 4 as a difference of squares in √x:
x − 4 = (√x − 2)(√x + 2).

Write 2 − √x = **−1(√x − 2)** — the same −1 trick as slide 7:
= [−1(√x − 2)]/[2√x(√x − 2)(√x + 2)]
= −1/[2√x(√x + 2)]

Substitute x = 4: = −1/[2(2)(2 + 2)] = −1/[4 × 4] = **−1/16**

## Method 4 — L'Hôpital's Rule

**Slide 12, the statement.** "L'Hôpital's Rule essentially allows you to replace the original function with its derivatives in situations where direct substitution results in an indeterminate form."

### Question (slide 12)

**Evaluate lim x→0 (sin x)/x**

Solution: "Given lim x→0 f(x)/g(x), and applying L'Hôpital's rule, such that"
f(x) = sin x, g(x) = x
f′(x) = cos x, g′(x) = 1

"we have lim x→0 f′(x)/g′(x), to be lim x→0 (cos x)/1"
= cos(0)/1 = 1/1 = **1**

The layout is worth copying exactly: **name f and g, differentiate each on its own line, then form the new quotient.** Writing it this way makes it visually impossible to slip into the quotient rule.

### Question (slide 13)

**Evaluate lim x→∞ x²/eˣ**

Solution:
lim x→∞ 2x/eˣ
"Since direct substitution results to an indeterminate form, so we differentiate again,"
lim x→∞ 2/eˣ = 2/e^∞ = 2/∞ = **0**

Read what she actually did. The first line is already **one** application of the rule: x² differentiates to 2x, eˣ to eˣ. She then substitutes, finds ∞/∞ again, and applies it a **second** time to reach 2/eˣ. Now the top is a constant and the bottom grows without bound, so the form is no longer indeterminate and the answer is 0. The rule is applied as many times as the indeterminate form survives, and not once more.

*(Aside, not on the slide: her 2/∞ = 0 is informal shorthand. Written properly, eˣ → ∞ as x → ∞, so the fraction 2/eˣ is driven down to 0. Write it her way in an exam, but know it is shorthand.)*

*(Aside, not on the slide: she never states L'Hôpital's hypotheses — that f and g must be differentiable near c with g′(x) ≠ 0 — and never checks the 0/0 form before applying it in the slide 12 example. The one hypothesis you must not skip is the indeterminate form itself: applying L'Hôpital to a quotient that is not 0/0 or ∞/∞ gives a wrong answer.)*

*(Aside, not on the slide and not examinable: deriving lim x→0 (sin x)/x = 1 by L'Hôpital is circular in a rigorous course, because the fact that sin x differentiates to cos x is itself proved from that limit. Her deck is not making that claim, and 1 is the right answer. Answer it her way.)*

## The ten properties of a limit

**Slide 14, verbatim.** "Properties of limits are fundamental rules that help simplify the evaluation of limits and provide insights into the behavior of functions as they approach certain values. Here are some of the key properties of limits:" Limit of a Sum · Limit of a Difference · Limit of a Constant · Constant Multiple Rule · Limit of a Product · Limit of a Quotient · Limit of a Power · Limit of a Composite Function · Squeeze Theorem · Limit of a Reciprocal.

Ten items, and the next ten slides take them one at a time. Being able to **name all ten in order** is a realistic exam ask.

### Limit of a Sum (slide 15)

**lim x→c [f(x) + g(x)] = lim x→c f(x) + lim x→c g(x)** — "the limit of a sum is the sum of the limits."

For example,
lim x→2 (3x + 4x) = lim x→2 3x + lim x→2 4x
= 3(2) + 4(2)
= 6 + 8
= **14**

### Limit of a Difference (slide 16)

**lim x→c [f(x) − g(x)] = lim x→c f(x) − lim x→c g(x)** — "the limit of a difference is the difference of the limits."

For example,
lim x→−3 (7x − 2x) = lim x→−3 7x − lim x→−3 2x
= 7(−3) − 2(−3)
= −21 + 6
= **−15**

The line to stare at is −21 + 6. Subtracting 2(−3) means subtracting −6, which **adds** 6. This is the sign trap she built the example around.

### Limit of a Constant (slide 17)

**lim x→c k = k** — "the limit of a constant is the constant itself."

For example, lim x→1 5 = **5**.

The point c is irrelevant: a constant function never changes, so there is nothing to approach.

### Constant Multiple Rule (slide 18)

**lim x→c k f(x) = k · lim x→c f(x)** — "a constant multiple can be factored out of the limit."

For example, if lim x→c f(x) = 4, what is lim x→c 3f(x)?
Solution: "Recall from the constant multiple rule that"
lim x→c 3f(x) = 3 · lim x→c f(x)
= 3(4)
= **12**

Note she answers this **without ever knowing what f is**. That is the exam shape: you are handed the limits, not the functions.

### Limit of a Product (slide 19)

**lim x→c [f(x) · g(x)] = lim x→c f(x) · lim x→c g(x)** — "the limit of a product is the product of the limits."

For example, if lim x→2 (2x) = 4, and lim x→2 (3x) = 6. Then,
lim x→2 [(2x)·(3x)] = lim x→2 (2x) · lim x→2 (3x)
= 4 × 6
= **24**

*(The slide prints that multiplication as "4.6", using a dot for times. Read it as 4 × 6 = 24, not as the decimal four-point-six. The final line 24 confirms which one is meant.)*

### Limit of a Quotient (slide 20)

**lim x→c f(x)/g(x) = [lim x→c f(x)]/[lim x→c g(x)], provided lim x→c g(x) ≠ 0.** — "The limit of a quotient is the quotient of the limits as long as the denominator's limit is not zero."

For example,
lim x→4 6x²/5x = [lim x→4 6x²]/[lim x→4 5x] = 6(4)²/[5(4)] = 96/20 = **4.8**

The proviso is the examinable half of this slide. It is exactly the proviso that fails in a 0/0 problem, which is why factorization and rationalization exist at all.

### Limit of a Power (slide 21)

**lim x→c [f(x)ⁿ] = [lim x→c f(x)]ⁿ** — "the limit of a power is the power of the limit."

For example,
lim x→0 (x + 4)³ = [lim x→0 (x + 4)]³
= (0 + 4)³
= 4³
= **64**

Take the limit **first**, then raise to the power. Doing it in that order turns a cubic into a one-line arithmetic problem.

### Limit of a Composite Function (slide 22)

The property is named on slide 14 and given its own slide, but **that slide's content did not survive in any recoverable form** — only the labels f(x), g(x) and lim g(f(x)) remain. The standard statement is lim x→c g(f(x)) = g(lim x→c f(x)) when g is continuous at the inner limit, but **that is not sourced from her slide**, so treat it as a gap to fill from the live session or the slide itself rather than as taught content. Expect the name of the property to be examinable even if the working is not.

### Squeeze Theorem (Sandwich Theorem) (slide 23)

**"If f(x) ≤ g(x) ≤ h(x) for all x in some interval containing c except possibly at c itself. lim x→c f(x) = lim x→c h(x) = L, then lim x→c g(x) = L."** — "This theorem helps determine the limit of a function trapped between two other functions with known limits."

Her lettering is unusual and you should mirror it: the **squeezed** function is **g**, the two bounds are **f** below and **h** above.

For example,
If 5 − x³ ≤ f(x) ≤ 5 + x³ what is lim x→0 f(x)?

The slide's next two lines read
lim x→0 (5 − x³) ≤ f(x) ≤ lim x→0 (5 − x³)
(5 − 0³) ≤ f(x) ≤ (5 − 0³)

**Both right-hand sides are misprinted.** They must be 5 + x³ and (5 + 0³), which is the upper bound she stated one line earlier. Written correctly:

lim x→0 (5 − x³) ≤ f(x) ≤ lim x→0 (5 + x³)
(5 − 0³) ≤ f(x) ≤ (5 + 0³)
5 ≤ f(x) ≤ 5
Therefore, **lim x→0 f(x) = 5.**

The answer 5 is correct either way, because both bounds happen to collapse to 5 at x = 0 — which is precisely why the typo is easy to miss. Note also that the example calls the squeezed function **f**, while the theorem two lines above calls it **g**; the letters swap inside one slide.

### Limit of a Reciprocal (slide 24)

**lim x→c 1/f(x) = 1/[lim x→c f(x)], provided lim x→c f(x) ≠ 0.** — "The limit of a reciprocal is the reciprocal of the limit, as long as the limit of the original function is not zero."

Example: Given lim x→6 (1/x²) = 1/[lim x→6 (x²)], prove that the left-hand side is equal to the right-hand side.
Solution: (1/6²) = 1/(6²) ⟹ 1/36 = 1/36
"Therefore, the L.H.S = R.H.S"

It is a verification, not a calculation: she is checking the property on a case where you can compute both sides independently. If a question says "prove L.H.S = R.H.S", evaluate each side separately and put them beside each other.

## Applications (slides 25–26)

Four named uses, listed and not worked: **1. Control Systems** — engineers use limits to analyse stability, determining whether a system's response converges or diverges. **2. Risk Assessment** — modelling the behaviour of financial instruments. **3. Microeconomics** — marginal cost, marginal revenue, marginal utility. **4. Macroeconomics** — economic growth, inflation and interest rates, and how economies evolve over time. The week's case study is on **evaluating limits in structural engineering**: using limit calculations to determine the maximum load a bridge can bear before structural failure.

## Her closing SUMMARY slide (27)

1. "Limit describes the behavior of a function as its input (typically denoted as x) gets closer to a specific point (usually denoted as c)."
2. "It's notation is lim x→c f(x)"
3. "lim x→∞ f(x) represents the limit approaching x from the right while lim x→−∞ f(x) is used when the limit approaches x from the left on the graph."
4. "From the various properties of limits, we can evaluate limits algebraically using various methods."

**Point 3 is wrong as written, and it matters.** lim x→∞ f(x) and lim x→−∞ f(x) are **limits at infinity** — they describe what the graph does far out to the right and far out to the left, with no finite point involved at all. They are *not* one-sided limits. A one-sided limit approaches a **finite** point c from one side and is written lim x→c⁺ f(x) (from the right, x slightly bigger than c) or lim x→c⁻ f(x) (from the left, x slightly smaller than c). The deck never introduces that superscript notation anywhere. If a question quotes point 3 back at you, the honest answer is that x→∞ and x→−∞ describe end behaviour, and that the right-hand and left-hand approach to a point c is written with the ⁺ and ⁻ superscripts.

## What you should be able to say out loud

- Which of the four methods a problem needs, from the shape of it alone: substitute first; 0/0 with polynomials means factor; 0/0 with a square root means multiply by the conjugate of the numerator; a small fraction inside a big one means multiply through by the common denominator; 0/0 or ∞/∞ that resists all of that means L'Hôpital.
- Why substitution is legal on slide 5 and illegal on slide 6, in one sentence each — well-defined expression versus 0/0.
- Why cancelling (x − 2) inside a limit is honest: x is near 2 but never equal to 2.
- Where the minus sign in −1/4 comes from, and where the minus sign in −1/16 comes from: the same −1 rewrite both times.
- The full working of both TASKs, 27 and −1/16, without looking.
- All ten properties by name, and which two carry a non-zero proviso.
- The Squeeze Theorem with her letters — bounds f and h, squeezed function g — and that its hypotheses require the two outer limits to be **equal**.
- That the deck's Squeeze slide has a typo in its upper bound, and that its SUMMARY slide confuses limits at infinity with one-sided limits.

## Commonly confused

- **0/0 is not 0, and it is not 1, and it does not mean the limit fails to exist.** It means the form decides nothing and you must do more algebra. (x² − 4)/(x − 2) is 0/0 at x = 2 and its limit is 4.
- **A negative or fractional value is not an indeterminate form.** Slide 5 gives 5/(−2). That is a finished answer, not a problem.
- **2 − x is not x − 2.** Cancelling them directly flips a sign. Write 2 − x = −1(x − 2) first, every time.
- **Conjugate of the numerator, not the denominator.** On slides 9 and 10 the root is upstairs, so that is where the conjugate goes.
- **L'Hôpital is not the quotient rule.** It gives f′/g′, with top and bottom differentiated independently. If a g² appears in your working, you used the wrong rule.
- **Re-check the form before each new application of L'Hôpital**, and stop as soon as it is no longer indeterminate. Slide 13 needed two applications; a third would be wrong.
- **The Quotient property has a proviso and the Reciprocal property has a proviso.** lim g ≠ 0 and lim f ≠ 0. Quoting either law without checking is where 0/0 problems get mis-answered.
- **Squeeze needs the two bounding limits to be equal.** Bounds with different limits prove nothing at all.
- **Take the limit first, then the power.** lim (x + 4)³ = [lim (x + 4)]³ = 4³, not 3 × 4.
- **Subtracting a negative adds.** 7(−3) − 2(−3) = −21 + 6 = −15 on slide 16.
- **lim x→∞ is end behaviour, not "from the right".** The SUMMARY slide gets this wrong; do not repeat it.
