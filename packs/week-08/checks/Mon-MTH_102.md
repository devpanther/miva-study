# Monday — MTH_102 nightly check

*Conceptual session on Week 8 integration techniques, exactly as she builds them.*

*The standard-integral table of slides 4–6.*

*Her substitution formula ∫f′(g(x))·g′(x)dx = f(g(x)) + C, and when an answer may be left in u.*

*Integration by parts ∫u dv = uv − ∫v du, and why v is the integral of dv.*

*Trigonometric substitution driven by 1 − sin²(u) = cos²(u), including why √(4 − 9x²) is first normalised to 2√(1 − (3x/2)²).*

*Then the four steps of partial fractions, with the roots substituted to find A and B.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The deck states the general substitution formula and then says: 'It is just the Chain Rule, written in terms of integration via the Fundamental Theorem of Calculus.' Which formula is she describing?
A. ∫f(g(x))·g′(x)dx = f′(g(x)) + C
B. ∫f′(g(x))dx = f(g(x)) + C
C. ∫f′(g(x))·g′(x)dx = f(g(x)) + C
D. ∫f′(x)·g′(x)dx = f(x)·g(x) + C

**2.** Her substitution Example 1 finishes as (1/4)u⁴|₂⁴ = 60 and never converts back to x, while Example 2 introduces u = x² and stops at eᵘ + C. Under what condition is it legitimate to finish in u?
A. Only for a definite integral whose limits have themselves been converted to u-values
B. Whenever the substitution was a linear one such as u = x + 2
C. Whenever u was chosen as the inner function rather than the outer one
D. Always, since u is only a renaming and the two answers are equal

**3.** In her integration-by-parts Example 2 she writes: 'let dv = sin(x)dx. Then v = −cos(x).' What operation produced v, and why does it matter here?
A. v is dv with the dx removed, so v = sin(x)
B. v is the derivative of dv, so v = cos(x)
C. v is dv divided by du, and the minus is a convention of the formula
D. v is the integral of dv, so v = ∫sin(x)dx = −cos(x), and that minus propagates through every later line

**4.** For ∫x·eˣdx she takes u = x and dv = eˣdx. What makes that the productive choice rather than u = eˣ, dv = x dx?
A. eˣ cannot be integrated, so it has to be the factor that is differentiated
B. Differentiating x reduces it to 1, so the leftover integral ∫v du is simpler than the one you started with, whereas the other choice raises x to x²/2 and makes it worse
C. The parts formula requires u to be whichever factor is written first in the integrand
D. u must always be the factor of lower degree, by definition

**5.** In ∫√(1 − x²)dx she sets x = sin(u). What exactly does that substitution accomplish?
A. It makes dx simpler, since dx = cos(u)du has no square root in it
B. It changes the limits of integration into angles
C. 1 − x² becomes 1 − sin²(u) = cos²(u), so the square root disappears: √(cos²(u)) = cos(u)
D. It converts the integrand into a standard form already listed on slide 5

**6.** Before substituting anything into ∫√(4 − 9x²)dx she rewrites it as ∫2√(1 − (3x/2)²)dx. Why is that rewriting necessary?
A. Because the identity she uses is 1 − sin²(u) = cos²(u), so the expression under the root must be brought to the exact form 1 − (something)² before anything can be set equal to sin(u)
B. Because a square root can only be integrated once the coefficient of x² is 1
C. Because 4 − 9x² is negative for large x and the rewriting fixes the domain
D. Because the constant 2 has to be outside the integral sign before dx can be replaced

**7.** After clearing the denominator in 1/(x(x+3)) = A/x + B/(x+3) she has 1 = A(x + 3) + B(x), and then 'setting x = 0 and x = −3' gives A and B. Why those two values of x?
A. They are the only values that make the left-hand side equal to 1
B. They are chosen at random; any two values of x would give the same answer with less arithmetic
C. They make the equation an identity rather than an equation
D. Each is a root of one of the factors, so it makes one of the two terms vanish and leaves a single unknown to read off

**8.** Slide 9 sets the TASK ∫₀¹ x·eˣ dx at the end of the SUBSTITUTION section. What feature of the integrand shows that substitution cannot do it?
A. The limits are 0 and 1, and substitution requires limits that convert to whole numbers
B. There is no inner function whose derivative also appears as a factor — the derivative of x is 1, not eˣ, and the derivative of eˣ is eˣ, not x
C. eˣ is not on the list of standard integrals, so no substitution can reach a standard form
D. The integrand is a product, and substitution never applies to products

**9.** Explain, without computing anything, what the deck means by calling the substitution formula 'just the Chain Rule, written in terms of integration'. Say what each of f, g and g′ is doing in ∫f′(g(x))·g′(x)dx = f(g(x)) + C.
*(short answer)*

**10.** Her trigonometric-substitution example reaches ∫cos²(u)du and then quotes cos²(u) = (1 + cos(2u))/2. Explain why that identity is compulsory rather than a convenience.
*(short answer)*

**11.** Her SUMMARY slide names four techniques. List them in her order, and for each one say what feature of an integrand tells you to reach for it, with an example from the deck.
*(short answer)*

**12.** State the integration-by-parts formula as the deck states it, and explain why ∫x·eˣdx needs one application while ∫3x²sin(x)dx needs two.
*(short answer)*

## Answers

**1. C** — Differentiating f(g(x)) by the chain rule gives f′(g(x))·g′(x); integrating that expression must therefore return f(g(x)). Option 1 puts the prime on the answer instead of the integrand, so it describes differentiation. Option 2 drops the g′(x) factor — but that factor being present is the entire condition for substitution to work, and without it the method fails. Option 4 invents a product rule for integrals; no such rule exists, and it is the mistake behind answers like ∫x·eˣdx = (x²/2)eˣ.

**2. A** — In Example 1 she converts the limits with the variable — x = 0 gives u = 2, x = 2 gives u = 4 — so evaluating between them yields a number, 60, with no variable left to convert. Option 2 confuses the kind of substitution with the kind of integral; a linear substitution in an indefinite integral still has to be undone. Option 3 describes how u is chosen, which is unrelated. Option 4 is false: eᵘ and e^(x²) are different expressions, and only the second answers a question posed in x. Example 2 as printed is therefore incomplete.

**3. D** — The formula ∫u dv = uv − ∫v du needs an actual function v, obtained by integrating dv; ∫sin(x)dx = −cos(x) from her standard-integral table, and that minus is why the first term of the answer is −3x²cos(x). Option 1 is the single most common error — treating v as the visible factor — and it silently loses the sign. Option 2 differentiates when the method requires integrating, the exact reverse. Option 3 invents a rule; the minus in the formula sits in front of ∫v du, not inside v.

**4. B** — Parts exchanges ∫u dv for uv − ∫v du, so it is progress only when ∫v du is easier. Here du = dx kills the algebraic factor entirely and leaves ∫eˣdx. Option 1 is false — ∫eˣdx = eˣ is on her slide-4 table; eˣ is one of the easiest things to integrate, which is exactly why it makes a good dv. Option 3 mistakes typography for mathematics. Option 4 states a rule the deck never gives, and TASK 2 (∫x·ln(x)dx) breaks it: there u = ln(x), not the algebraic factor.

**5. C** — The obstacle is the square root, and 1 − sin² = cos² is a perfect square, so the root evaluates to a bare cos(u). Option 1 gets the effect on dx right but names a side-effect rather than the purpose. Option 2 is irrelevant — this example is an indefinite integral with no limits at all. Option 4 is wrong because the resulting ∫cos²(u)du is not on her table either; it still needs the double-angle identity before it can be integrated.

**6. A** — She never gives the x = a·sinθ table; her method is to factor the constant out — 4 − 9x² = 4(1 − (3x/2)²), with √4 = 2 coming outside — so that what remains matches Example 1 exactly and 3x/2 can be set to sin(u). Option 2 is a rule about x², not about the root, and it is not what she does. Option 3 confuses a domain remark with the algebra; the rewriting changes nothing about where the expression is defined. Option 4 is false — constants may be moved across an integral sign at any point, and she in fact leaves the 2 inside for one more line.

**7. D** — At x = 0 the B(x) term is zero, so 1 = 3A immediately; at x = −3 the A(x + 3) term is zero, so 1 = −3B. Each substitution isolates one unknown. Option 1 misreads the equation — the left side is the constant 1 for every x. Option 2 is half true and half wrong: other values are legitimate but give two simultaneous equations to solve rather than an answer you can read off, which is precisely the point of choosing the roots. Option 3 has it backwards; the expression is already an identity, which is why any x may be substituted.

**8. B** — Her formula needs the pattern f′(g(x))·g′(x); in x·eˣ neither factor is the derivative of the other's inner function, so no choice of u eliminates x. The task is in fact answered by the very next slide, which does it by parts. Option 1 is invented. Option 3 is false — ∫eˣdx = eˣ + C is the third line of slide 4. Option 4 is false too: her own Example 2, ∫2x·e^(x²)dx, is a product and yields to substitution immediately, because there the 2x really is the derivative of the inner x².

**9.** A good answer starts from differentiation: the chain rule says d/dx[f(g(x))] = f′(g(x))·g′(x). Integration undoes differentiation, so integrating the right-hand side must recover the left, which is the formula as printed. It should then identify the parts: g(x) is the inner function that you rename u; g′(x)dx is the du that must already be sitting in the integrand for the method to apply; f′ is the outer function as it appears in the integrand, and f is its antiderivative, the thing you actually write down. It is worth adding the practical reading — you are looking for a composite together with the derivative of its inside — and noting that the constant C appears because the result is an indefinite integral, a whole family.

**10.** A good answer says that none of the fifteen standard integrals on slides 4–6 covers cos²(u): the table has ∫cos(x)dx and ∫sec²(x)dx but nothing for a squared cosine, and the power rule ∫xⁿdx applies to powers of the variable, not to powers of a function of it — writing cos³(u)/3 would be applying it illegitimately, and differentiating that expression returns −cos²(u)sin(u), not cos²(u). The double-angle identity rewrites the integrand as a sum of two things that are on the table, a constant and a cosine, giving u/2 + sin(2u)/4. A strong answer also notes where the 4 comes from: integrating cos(2u) produces sin(2u)/2 because of the inner 2, and the outer 1/2 from the identity makes it sin(2u)/4.

**11.** A good answer gives: (1) substitution — a composite function with the derivative of its inner function present as a factor, as in ∫2x·e^(x²)dx where 2x is the derivative of x²; (2) integration by parts — a product of two unrelated kinds of function, neither being the other's derivative, as in ∫x·eˣdx and ∫3x²sin(x)dx; (3) trigonometric substitution — a square root of a quadratic, as in ∫√(1 − x²)dx and ∫√(4 − 9x²)dx, where a Pythagorean identity is what removes the root; (4) partial fractions — a ratio of polynomials whose denominator factors, as in ∫[1/(x² + 3x)]dx and ∫[(7x − 6)/((x − 2)(x + 3))]dx. It should stress that the decision is made from the shape of the integrand, and may note that the slide-9 TASK is a case where the shape (a plain product) contradicts the section it was printed in.

**12.** A good answer states 'Let f(x) = u and g(x) = v then we have ∫u dv = uv − ∫v du', and explains that each application differentiates u once. In ∫x·eˣdx, u = x differentiates to 1, so the leftover integral is ∫eˣdx, which is on the standard table and needs no further work. In ∫3x²sin(x)dx, u = 3x² differentiates only to 6x, so the leftover integral is 6∫x·cos(x)dx — still a product of an algebraic and a trigonometric factor, which is the same shape as the original and therefore needs parts again, this time with u = x. It should draw the general rule: each pass lowers the power of x by one, so a factor xⁿ requires n applications, and add that the constant C is written once, at the end, not at each stage.
