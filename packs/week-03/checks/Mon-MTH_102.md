# Monday — MTH_102 nightly check

*Conceptual session on Week 3 exactly as the lecturer builds it: when direct substitution applies (a well-defined expression) and when it fails (0/0); what an indeterminate form does and does not tell you; why factoring and cancelling a common factor inside lim x→c is legitimate; clearing a complex fraction by the common denominator versus multiplying by the conjugate of the numerator; what L'Hôpital's Rule replaces f(x)/g(x) with and when it may be repeated; and the ten named properties of a limit, including the two non-zero provisos and the Squeeze Theorem in her lettering.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Slide 4 says direct substitution 'applies when substituting the value of c directly into the function results in a well-defined expression'. Which of these results means substitution has NOT worked?
A. 0/0
B. 5/(−2)
C. −2.5
D. 0/7

**2.** On slide 6 direct substitution gives (2² − 4)/(2 − 2) = 0/0. What has that told you about lim x→2 (x² − 4)/(x − 2)?
A. That the limit is 0
B. That the limit does not exist, since the function is undefined at x = 2
C. Nothing yet — the form is indeterminate, so more algebra is needed
D. That the limit equals 1

**3.** On slide 6 she writes lim x→2 [(x − 2)(x + 2)]/(x − 2) and then cancels the (x − 2). Which statement describes what that cancellation is entitled to claim?
A. x + 2 agrees with the original function at every x except x = 2, and the limit never looks at x = 2
B. The original function is defined at x = 2 after all
C. Cancelling changes the value of the limit, which is why the answer is 4 and not 0/0
D. Dividing by zero is allowed inside a limit

**4.** On slides 9 and 10 she multiplies by the conjugate. Which conjugate, and why that one?
A. The conjugate of the denominator, because the denominator is what vanishes
B. The conjugate of the numerator, because the numerator is where the square root sits
C. The conjugate of whichever part is larger at the limit point
D. Both conjugates at once, to keep the fraction balanced

**5.** You meet lim x→2 (1/x − 1/2)/(x − 2) — a small fraction inside a big one, with no square roots anywhere. Which of her methods handles it, and how?
A. Rationalization: multiply by the conjugate of the numerator
B. Direct substitution: the expression is well defined at x = 2
C. L'Hôpital's Rule: it is the only method that reaches complex fractions
D. Factorization: multiply numerator and denominator by the common denominator 2x, then factor out −1

**6.** Slide 12 sets out f(x) = sin x, g(x) = x, then f′(x) = cos x, g′(x) = 1. What is the new expression she forms, and what is the trap in this layout?
A. (f′g − fg′)/g², and the trap is forgetting to square the denominator
B. f′(x)/g′(x), and the trap is sliding into the quotient rule instead of differentiating the two separately
C. f′(x)·g′(x), and the trap is dividing when you should multiply
D. [f(x)/g(x)]′, and the trap is differentiating before substituting

**7.** Slide 13 applies L'Hôpital twice to x²/eˣ. What decides that a second application is needed, and what would decide that a third is not?
A. The degree of the numerator decides it: x² needs exactly two applications
B. Nothing decides it — the rule is always applied until the numerator becomes a constant
C. Substituting again: 2x/eˣ is still ∞/∞ so you repeat, while 2/eˣ is a constant over something unbounded, so you stop
D. The presence of eˣ decides it, because exponentials always require two differentiations

**8.** Two of the ten properties on slide 14 carry an explicit non-zero condition. Which two, and on which function?
A. Sum and Difference, on both f and g
B. Product and Power, on f
C. Quotient and Constant Multiple, on the constant k
D. Quotient, needing lim x→c g(x) ≠ 0, and Reciprocal, needing lim x→c f(x) ≠ 0

**9.** State the Squeeze Theorem exactly as slide 23 states it, using her letters, and explain what goes wrong if the two bounding limits are not equal.
*(short answer)*

**10.** Slide 23's example prints its two working lines with 5 − x³ on BOTH sides of the inequality. Say what the lines should read, why the final answer of 5 is nevertheless correct, and why this particular typo is easy to miss.
*(short answer)*

**11.** List the ten properties of a limit named on slide 14, in her order. Then say which one the deck names but never actually works through.
*(short answer)*

**12.** Given a limit you have never seen before, describe the decision procedure the deck teaches for choosing a method, in the order she teaches them.
*(short answer)*

## Answers

**1. A** — 0/0 is the one outcome that is not well defined — it is an indeterminate form and the whole of the factorization and rationalization work exists to deal with it. Option 2 is her own slide 5 answer: a negative denominator is fine, and 5/(−2) is a finished result. Option 3 is that same answer written as a decimal. Option 4 is zero divided by seven, which is simply 0 — a perfectly good number. The test is not 'is it ugly', it is 'is it defined'.

**2. C** — 'Indeterminate' means the form alone decides nothing; she immediately factors and finds the limit is 4. Option 1 treats 0/0 as ordinary arithmetic. Option 2 is the single most common error in the topic: the function being undefined at the point is irrelevant, because a limit never inspects the point itself. Option 4 comes from assuming anything over itself is 1, which is exactly the assumption 'indeterminate' forbids.

**3. A** — Throughout the limit process x is close to 2 but never equal to 2, so x − 2 is never actually zero and the division is honest; the simplified function differs from the original at one point only, and that point is the one point a limit ignores. Option 2 is false — the original is still undefined at 2. Option 3 gets the outcome backwards: cancelling does not change the limit, it reveals it. Option 4 states something that is never allowed anywhere; the point is precisely that you are not dividing by zero.

**4. B** — She says 'rationalize the numerator by multiplying both the numerator and denominator by the conjugate of the numerator'. The point of the move is that (√A − k)(√A + k) = A − k², which destroys the root — so it is aimed at whichever side carries the root, and in both her examples that is the top. Option 1 mistakes the goal for cancelling the zero rather than removing the radical. Option 3 invents a criterion the deck never uses. Option 4 would multiply by a factor that is not equal to 1, changing the function.

**5. D** — Slide 7 files this under FACTORIZATION and clears the small fractions by multiplying top and bottom by their common denominator 2x, then factors −1 out of 2 − x so the (x − 2) will cancel. Option 1 names a method that needs a radical to work on; there is none. Option 2 is false — substitution gives 0/0. Option 3 would in fact produce the right number, but the deck reserves L'Hôpital for slides 12 and 13 and this is not how she teaches this shape; more importantly, the claim that it is the only method reaching complex fractions is wrong.

**6. B** — The rule 'replaces the original function with its derivatives' — numerator and denominator differentiated independently, giving lim (cos x)/1 = 1. Option 1 is the quotient rule; if a g² turns up in your working you have used the wrong rule, and that is the trap, not a step you were supposed to take. Option 3 multiplies where the rule divides. Option 4 differentiates the quotient as a single object, which is the quotient rule again wearing a different hat. Writing f, g, f′, g′ on separate lines the way she does makes the mistake visually obvious.

**7. C** — Her own wording is 'since direct substitution results to an indeterminate form, so we differentiate again' — the test is re-substitution, every time, and you stop the moment the form is no longer 0/0 or ∞/∞. Option 1 happens to give the right count here by coincidence and would mislead you on any other problem. Option 2 states a rule the deck never gives and that would keep going past the answer. Option 4 invents a property of exponentials; eˣ differentiates to itself, so it never changes the form at all.

**8. D** — Slide 20 states 'provided lim x→c g(x) ≠ 0' for the quotient, and slide 24 states 'provided lim x→c f(x) ≠ 0' for the reciprocal — in both cases the condition sits on whatever ends up downstairs. Option 1 names two properties that need no proviso at all. Option 2 does the same. Option 3 gets one property half-right but puts the condition on k; a constant multiple of zero is perfectly harmless. Knowing which function the condition attaches to is the examinable half.

**9.** A good answer reproduces her wording: if f(x) ≤ g(x) ≤ h(x) for all x in some interval containing c except possibly at c itself, and lim x→c f(x) = lim x→c h(x) = L, then lim x→c g(x) = L. It must use her letters — the squeezed function is g, the bounds are f below and h above, which is the reverse of the usual textbook lettering. On the hypotheses: if lim f and lim h are different numbers, all you have shown is that g is eventually trapped in an interval, and a function can wander inside an interval forever without settling on anything — so no conclusion follows. The theorem earns its answer only when the two bounds collapse onto the same value, which is exactly what happens in her example when both 5 − x³ and 5 + x³ go to 5.

**10.** A good answer says the upper bound must be the one she stated a line earlier, 5 + x³: the lines should read lim x→0 (5 − x³) ≤ f(x) ≤ lim x→0 (5 + x³), then (5 − 0³) ≤ f(x) ≤ (5 + 0³), then 5 ≤ f(x) ≤ 5, therefore lim x→0 f(x) = 5. The answer survives because x³ → 0 as x → 0, so both the correct upper bound and the misprinted one evaluate to 5 at the limit point — the two branches only differ away from 0, which is precisely where the theorem stops looking. That is what makes it invisible: nothing downstream disagrees. It should still be corrected in any answer script, since as printed the inequality claims f is squeezed between one function and itself. Worth noting too that the example calls the squeezed function f while the theorem two lines above calls it g.

**11.** A good answer gives all ten in order: Limit of a Sum, Limit of a Difference, Limit of a Constant, Constant Multiple Rule, Limit of a Product, Limit of a Quotient, Limit of a Power, Limit of a Composite Function, Squeeze Theorem, Limit of a Reciprocal. The gap is the Limit of a Composite Function: it is named on slide 14 and given a slide of its own, but that slide carries no recoverable statement or worked example — only the labels f(x), g(x) and lim g(f(x)). Everything else on the list gets a formula, a sentence of explanation and one small example. Being able to name all ten is a realistic exam ask on its own, and the composite one is the one to check against the live session or the slide itself rather than assume.

**12.** A good answer runs the four methods in her order and ties each to a visible feature. First always substitute (slide 4): if the result is a well-defined expression, however negative or fractional, that is the answer and you stop — slide 5 exists to make that point. If substitution gives 0/0, look at what the expression is made of. Polynomials: factor, cancel the common factor, substitute again (slide 6). A small fraction inside the big one: multiply numerator and denominator by the common denominator, then factor out −1 if the cancelling bracket comes out reversed (slide 7). A square root: multiply by the conjugate of the numerator (slides 9, 10). And for 0/0 or ∞/∞ that these do not clear — including anything with sin x or eˣ in it — replace f/g by f′/g′ and re-check the form after each application (slides 12, 13). A strong answer adds that the slide 11 TASK needs two of these at once, and that agreement between two methods is a free check on the answer.
