# Monday — MTH_102 nightly check

*Conceptual session on Week 7 integration exactly as the lecturer builds it: the definition ∫f(x)dx = F(x) + c with F′(x) = f(x); why the constant is forced, via her Example 1 line [G(x) + c]′ = 2x + 0 = 2x; the power rule ∫xⁿdx = x^(n+1)/(n+1) + c and the reason n ≠ −1; what splitting an integral does and does not license; and the Fundamental Theorem ∫ₐᵇf(x)dx = F(b) − F(a) = F(x)|ₐᵇ, why c cancels there, and why the result is a number.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The deck defines the indefinite integral of f as a function F such that a certain equation holds, plus the constant of integration c. Which equation?
A. f′(x) = F(x)
B. F(x) = f(x) + c
C. F′(x) = f(x)
D. F(x) = f(b) − f(a)

**2.** In Example 1 the lecturer says it is 'tempting to suppose' the antiderivative of g(x) = 2x is G(x) = x², then says the situation is not so simple. What exactly is her objection?
A. G is one antiderivative but not the only one, since G(x) + c differentiates to 2x for every real c
B. G(x) = x² is not actually an antiderivative of 2x; the correct one is x²/2
C. The antiderivative exists only where 2x is positive
D. 2x cannot be integrated by the power rule because its coefficient is not 1

**3.** The power rule ∫xⁿdx = x^(n+1)/(n+1) + c is stated with the restriction n ≠ −1. What breaks at n = −1?
A. The numerator x^(n+1) becomes x⁰ = 1, so the answer would be a constant, which is uninformative
B. x⁻¹ takes negative values, and the formula is only valid for non-negative integrands
C. 1/x has a vertical asymptote at x = 0, so it has no antiderivative on any interval
D. The denominator n + 1 becomes 0, so the formula divides by zero

**4.** Example 3 integrates 2/x⁷, which is positive for every x > 0, yet the answer −1/(3x⁶) + c is negative there. Which step of the lecturer's working introduces the minus sign?
A. Rewriting 2/x⁷ as 2x⁻⁷, because the exponent becomes negative
B. Dividing by the new power, which is −7 + 1 = −6
C. Adding the constant of integration c
D. Simplifying 2/6 to 1/3

**5.** What kind of object does each of ∫f(x)dx and ∫ₐᵇf(x)dx produce?
A. The first a family of functions, the second a number
B. Both are numbers, but the second one is signed
C. The first a number, the second a function of a and b
D. Both are functions of x; the limits only restrict the domain

**6.** The theorem says ∫ₐᵇf(x)dx = F(b) − F(a) where F is an antiderivative of f. Why does it not matter which antiderivative you choose?
A. Because the theorem quietly assumes the antiderivative with c = 0
B. Because F is unique once f is continuous on [a, b]
C. Because a and b are constants, so any extra constant is absorbed into them
D. Any two antiderivatives differ by a constant, and that constant cancels in the subtraction

**7.** The lecturer writes ∫ₐᵇf(x)dx = F(x)|ₐᵇ. What does the bar notation instruct you to do?
A. Evaluate f at b and at a and subtract
B. Evaluate F at b, evaluate F at a, and subtract the second from the first
C. Restrict F to the interval [a, b]
D. Evaluate F at a and at b and add the results

**8.** Example 4 rewrites ∫(11x¹⁰ − 4x⁹ + 1)dx as ∫11x¹⁰dx − ∫4x⁹dx + ∫1dx. Which of these moves is NOT justified by anything the deck does?
A. ∫(x² + x³)dx = ∫x²dx + ∫x³dx
B. ∫11x¹⁰dx = 11∫x¹⁰dx
C. ∫(x²·x³)dx = (∫x²dx)(∫x³dx)
D. ∫(x² − x³)dx = ∫x²dx − ∫x³dx

**9.** State the deck's definition of the indefinite integral in your own words, and say precisely what role c plays in it.
*(short answer)*

**10.** Using the lecturer's own line [G(x) + c]′ = 2x + 0 = 2x = g(x), explain why writing ∫2x dx = x² is an incomplete answer rather than merely an untidy one.
*(short answer)*

**11.** Explain why a definite integral never carries + c, and show the cancellation explicitly.
*(short answer)*

**12.** The deck never gives an answer to either of its two TASK slides. Describe the method you would use to check your own answer to an indefinite integral, and explain why that check is guaranteed to work.
*(short answer)*

## Answers

**1. C** — F is an antiderivative: differentiating F must return the integrand f, so F′(x) = f(x). Option 1 reverses the roles and describes f as the antiderivative of F. Option 2 confuses integration with adding a constant to the integrand — a vertical shift of f, which is not F at all. Option 4 is the Fundamental Theorem's evaluation formula for a definite integral, a number, not the defining property of F.

**2. A** — Her line [G(x) + c]′ = 2x + 0 = 2x = g(x) shows every member of the family x² + c works, so no single function can be 'the' answer. Option 2 is a differentiation slip — d/dx(x²) = 2x, so x² is correct as far as it goes. Option 3 invents a domain restriction the slide never makes. Option 4 is false; constants are pulled straight out, as Example 4 does.

**3. D** — n + 1 = 0 makes x^(n+1)/(n+1) an expression with zero in the denominator — undefined, so the rule simply says nothing there. Option 1 notices the numerator correctly but names the wrong failure; a constant numerator would be fine if the denominator were not 0. Option 2 is false — the rule handles n = −7 in Example 3. Option 3 confuses a problem at a single point with a problem on the whole line; 1/x does have antiderivatives on intervals avoiding 0, just not ones this formula produces.

**4. B** — The rule divides by the new exponent, and 2 ÷ (−6) = −1/3. Option 1 confuses notation with arithmetic: rewriting a fraction as a negative power changes nothing about the value, and 2x⁻⁷ is still positive for x > 0. Option 3 is wrong because c is an unknown constant, not a sign. Option 4 describes only the reduction of the magnitude, which carries no sign of its own. This distinction is what separates students who apply the rule from those who have memorised the answer.

**5. A** — The indefinite integral is F(x) + c — the collection of all antiderivatives, hence a family of functions. Slide 11 says of the definite integral that 'the result will usually be a number'. Option 2 misses that an indefinite answer still contains x and an unknown c. Option 3 swaps the two. Option 4 misreads the limits as a domain restriction rather than as inputs to F(b) − F(a); after the substitution no x survives at all.

**6. D** — Using F(x) + c gives (F(b) + c) − (F(a) + c) = F(b) − F(a); the c disappears by subtraction, which is exactly why definite answers never show + c. Option 1 states a convention where the real reason is an identity — the result holds for every c, not only c = 0. Option 2 contradicts Example 1: antiderivatives are never unique. Option 3 is meaningless; c attaches to F, not to the limits.

**7. B** — F(x)|ₐᵇ is shorthand for F(b) − F(a), upper limit first. Option 1 substitutes into the integrand instead of the antiderivative — the single most common wrong answer, and the one that turns 18 into 12 in Example 1. Option 3 treats the bar as a domain restriction. Option 4 adds where the theorem subtracts, which would destroy the cancellation of c and give the wrong sign structure entirely.

**8. C** — Products do not split: ∫x⁵dx = x⁶/6, whereas (x³/3)(x⁴/4) = x⁷/12 — different functions, so the move is simply false. Options 1 and 4 are the term-by-term splitting the slide performs. Option 2 is the constant pulled out front, which the slide also does with 11 and 4. A student who has only memorised 'split the integral' will pick one of the legitimate ones.

**9.** A good answer says: for a continuous real-valued f of x, the indefinite integral is a function F whose derivative is the integrand, F′(x) = f(x), together with an added constant of integration c, written ∫f(x)dx = F(x) + c. On c: it is an arbitrary real number, not a placeholder or a unit — it is there because the derivative of any constant is 0, so every function of the form F(x) + c is an equally valid antiderivative, and the notation therefore names the whole family at once.

**10.** A good answer runs the line as an argument: differentiating x² + c gives 2x + 0 = 2x for every real c, so x² + 1, x² − 4 and x² all differentiate to the integrand. Since the question asks for the antiderivatives of 2x, and there are infinitely many, naming only x² names one member of an infinite family and omits the rest. It is incomplete in the way that answering 'x = 2' to x² = 4 is incomplete, not in the way that untidy handwriting is.

**11.** A good answer performs the algebra rather than asserting the rule: take any antiderivative in the form F(x) + c; the theorem gives (F(b) + c) − (F(a) + c) = F(b) − F(a) + c − c = F(b) − F(a). It should then draw the consequence — every choice of c gives the same number, which is why the theorem can say 'if F(x) is an antiderivative' rather than 'the antiderivative', and why writing + c after a numerical answer is meaningless.

**12.** A good answer names the method — differentiate your result and see whether you recover the integrand — and then justifies it from the definition rather than from habit: ∫f(x)dx = F(x) + c is defined by the condition F′(x) = f(x), so the check is testing exactly the defining condition. It may add that the added c never disturbs the check, since its derivative is 0, and that the check catches the standard errors — multiplying instead of dividing by the new power, or losing a sign on a negative exponent — in a few seconds.
