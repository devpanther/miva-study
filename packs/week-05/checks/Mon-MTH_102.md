# Monday — MTH_102 nightly check

*Week 5 differentiation, exactly as she builds it.*

*The power rule f′(x) = nx^(n−1), which she calls 'the general rule of differentiation'. Her constant rule.*

*Her orderings, which matter: the product rule u(x)v′(x) + u′(x)v(x), and the quotient rule [v(x)u′(x) − u(x)v′(x)]/(v(x))².*

*What the chain rule's second factor u′(x) is for.*

*Why implicit differentiation leaves dy/dx behind, while partial differentiation annihilates the other variable.*

*The first principle as 'the limit definition of the derivative', including why the h must cancel before the limit is taken.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The chain rule slide writes f′(x) = y′(u)·u′(x). What work is the second factor, u′(x), doing?
A. It accounts for how fast the inside function changes, so the outer derivative is measured per unit of x rather than per unit of u
B. It converts the answer back from u into x, which is why u disappears from the final line
C. It is a correction only needed when the inside function is non-linear
D. It is the derivative of the whole composite, and y′(u) merely names the outer function

**2.** On slide 13 the lecturer differentiates y² -type terms and gets dy/dx factors; on slide 21 she differentiates y³ and gets 0. What is assumed differently in the two slides?
A. On slide 13 the equation is not solved for y, and unsolved equations always need the chain rule
B. On slide 13 y is cubed rather than squared, and odd powers behave differently
C. On slide 13 y is an unknown function of x, so it varies with x; on slide 21 x and y are independent variables, so y is a genuine constant when differentiating by x
D. On slide 21 the function has two letters, so all its derivatives are zero unless both letters appear

**3.** In her quotient rule f′(x) = [v(x)u′(x) − u(x)v′(x)]/(v(x))², which term carries the plus sign, and what happens if you swap the two?
A. u(x)v′(x) carries the plus; swapping them changes nothing because subtraction is commutative
B. v(x)u′(x) carries the plus; swapping them gives exactly the negative of the correct answer
C. Both terms carry a plus and the minus belongs to v′(x) alone
D. Neither carries a sign until v² is computed, since v² is always positive

**4.** Her SUMMARY slide names two things. Which pairing does it make?
A. The chain rule is the general rule of differentiation; the product rule is the limit definition
B. The first principle is the general rule of differentiation; the power rule is the limit definition
C. The power rule and the first principle are both limit definitions of the derivative
D. The power rule is the general rule of differentiation; the first principle is the limit definition of the derivative

**5.** The CONSTANT RULE slide gives a one-line test in words for spotting a constant. What is it, and what does it settle on the implicit slide?
A. If the function is a single number rather than an expression, it is a constant; this is why xy differentiates to y
B. If the expression has no variable in it, it is a constant and its derivative is zero; this is why the 25 in x² + y² = 25 contributes nothing
C. If the expression has no x in it, it is a constant; this is why y² contributes nothing on the implicit slide
D. If the derivative of an expression is zero, it is a constant; this is why dy/dx can be isolated

**6.** Why is dy/dt on its own not the gradient of a parametrically defined curve?
A. Because it measures how y changes per unit of t, not per unit of x, and the parameter t advances x at its own rate dx/dt
B. Because dy/dt is always positive whereas a gradient can be negative
C. Because t is not a real variable, so dy/dt has no geometric meaning at all
D. Because the curve must first be rewritten with t eliminated before any gradient exists

**7.** In both first-principle examples the h in the denominator is cancelled before lim(h→0) is applied. Why can the limit not simply be taken first?
A. Because the limit of a quotient is only defined when the numerator is a polynomial
B. Because h → 0 is shorthand for h being small but never actually zero, so no substitution is ever legitimate
C. Because taking the limit changes the function, and the function must be fixed before any limit is applied
D. Because substituting h = 0 before cancelling gives 0/0, which is undefined; cancelling the h first removes the zero from the denominator

**8.** What does multiplying by the conjugate accomplish in the √x first-principle example?
A. It removes the square roots from the answer entirely, which is why the answer is a whole number
B. It rationalises the denominator so the fraction can be simplified
C. It turns the numerator into a difference of two squares, (x + h) − x = h, producing an h that cancels the h below
D. It is an optional tidying step; the same answer follows just as well without it

**9.** State the product rule and the quotient rule exactly as the lecturer writes them. Then explain why the order of the two terms is harmless in one of them and fatal in the other.
*(short answer)*

**10.** The deck uses two trigonometric derivatives without ever stating them as rules. Name them, say on which slides each is used, and explain what the second one does to the sign of the answers on those slides.
*(short answer)*

**11.** Explain what the letter u is doing in the chain rule as she uses it on slide 10, and why the final line must be written in x rather than in u.
*(short answer)*

**12.** Slide 20 is titled CONSTANT MULTIPLE RULE but its worked example contains no constant multiple. Say what the example actually demonstrates, and state where in the deck the constant multiple rule is genuinely being used even though it is never written down.
*(short answer)*

## Answers

**1. A** — y′(u) tells you the rate of change with respect to u, but the question asks for the rate with respect to x, and u itself changes at rate u′(x) — the two rates multiply. Option 2 confuses a rate with a substitution: putting x² back in place of u is a separate, later step and contributes no factor. Option 3 is false — for f(x) = (2x − 4)² the inside is linear and the factor 2 is exactly what turns 4x − 8 into 8x − 16, the whole point of TASK 1. Option 4 inverts the roles; y′(u) is the outer derivative, not a label.

**2. C** — Everything turns on dependence. Implicitly, y = y(x), so d/dx(y²) = 2y·dy/dx by the chain rule. Partially, x and y are independent inputs, so ∂/∂x(y³) = 0 by the constant rule. Option 1 mistakes a symptom for the cause — you can differentiate an unsolved equation partially too. Option 2 invents a rule about parity that does not exist. Option 4 is false: ∂f/∂x of 3x² + 2xy − y³ is 6x + 2y, and the 2xy term survives despite containing both letters.

**3. B** — The positive term is the one where the denominator's function is left undifferentiated: v u′. Swapping produces u v′ − v u′ = −(v u′ − u v′), so the whole answer flips sign — on slide 9 that turns 6(1 − x)/5x³ into 6(x − 1)/5x³. Option 1 asserts subtraction is commutative, which it is not. Option 3 misreads the minus as attaching to a function rather than to a whole term. Option 4 is irrelevant: v² being positive is exactly why it cannot rescue a sign error in the numerator.

**4. D** — Her words: the power rule 'can be considered as the general rule of differentiation while the first principle is called the limit definition of the derivative'. Option 2 has them exactly reversed, which is the trap. Option 1 substitutes rules she never describes that way. Option 3 collapses the distinction the slide exists to draw — only one of them involves a limit, and it is the one written with lim(h→0).

**5. B** — Her wording is 'Since the function has no variable, it is a constant', with the NOTE 'The derivative of a constant is zero'. Applied to slide 12, d/dx(25) = 0, which is why the whole right-hand side vanishes. Option 3 is the dangerous near-miss: y² has no x in it, but y is a variable and depends on x, so it gives 2y·dy/dx, not 0. Option 1 is too narrow — 3 + 2 is a constant too. Option 4 reverses the definition into a test you cannot apply before differentiating.

**6. A** — A gradient is rise over run in the x–y plane. dy/dt gives the rise per unit of parameter; dividing by dx/dt, the run per unit of parameter, cancels the parameter and leaves rise per run. On slide 14 that is (2t − 1)/2. Option 2 is simply false — y′(t) = 2t − 1 is negative for t < 1/2. Option 3 denies t meaning it plainly has. Option 4 contradicts the slide, which never eliminates t and leaves the answer in terms of t.

**7. D** — Both numerator and denominator tend to 0, so premature substitution gives the meaningless 0/0. Cancelling first — 3h/h becomes 3, and h/[h(√(x+h) + √x)] becomes 1/(√(x+h) + √x) — leaves an expression that is perfectly well behaved at h = 0. Option 1 is false; the √x example has no polynomial numerator. Option 2 half-remembers the idea of a limit but then forbids the substitution she in fact performs in her last two lines. Option 3 is backwards: the limit is what defines the derivative, not a distortion of the function.

**8. C** — (√(x+h) − √x)(√(x+h) + √x) = (x + h) − x = h by difference of two squares, and that single h is what cancels the denominator's h. Option 2 gets the direction wrong: the surds start in the numerator and are deliberately moved to the denominator, which is the reverse of rationalising a denominator. Option 1 is false — the answer 1/(2√x) still contains a root. Option 4 is false: without it you are stuck at 0/0, so it is the step the whole example turns on.

**9.** A good answer gives her forms first: product, f(x) = u(x)·v(x) gives f′(x) = u(x)v′(x) + u′(x)v(x); quotient, f(x) = u(x)/v(x) gives f′(x) = [v(x)u′(x) − u(x)v′(x)]/(v(x))². Then the reason: the product rule joins its two terms with addition, and addition is commutative, so u′v + uv′ is the same number as uv′ + u′v — writing them in either order is only a matter of layout. The quotient rule joins its two terms with subtraction, which is not commutative: reversing them gives u v′ − v u′ = −(v u′ − u v′), the exact negative of the right answer. A strong answer names the memory hook — the positive term is the one in which the denominator's function is left alone — and checks it on slide 9, where 5x²·6 (the v u′ term) is the one that stays positive.

**10.** A good answer names d/dx(sin x) = cos x and d/dx(cos x) = −sin x, and notes that neither is stated or derived anywhere in this deck — they are simply assumed. The sine derivative is used on slide 6, where v(x) = sin x gives v′(x) = cos x in f′(x) = x² cos x + 2x sin x. The cosine derivative is used twice: on slide 8, where v′(x) = −sin(x) for the quotient x/cos(x), and on slide 10, where y′(u) = −sin(u) for cos(x²). The sign consequences run opposite ways and that is the interesting part: on slide 10 the minus survives straight into the answer, −2x sin(x²); on slide 8 the minus meets the quotient rule's own subtraction, and −(x·(−sin x)) = +x sin x, so the answer comes out with a plus, (cos x + x sin x)/cos²x. A student who forgets the minus gets slide 10 positive and slide 8 negative — wrong on both, in opposite directions.

**11.** A good answer says that u is a temporary name for the inside function, introduced so the composite can be split into two derivatives that are each easy: with u = x², cos(x²) becomes y = cos(u), whose derivative y′(u) = −sin(u) is a standard one, and u′(x) = 2x is a power-rule one. The chain rule then multiplies them. On why the answer must return to x: the original question asks for f′(x), a function of x, and u is not part of the question — it is scaffolding the student invented. Leaving −2x sin(u) on the page is an answer in terms of a letter the examiner never introduced and which has no defined value. A strong answer notes she does exactly this substitution on the second-to-last line, writing −sin(u)·2x = −sin(x²)·2x before stating the result.

**12.** A good answer identifies what slide 20 really shows: converting a root to a fractional power, ⁵√(x³) = x^(3/5), and then applying the power rule to a fractional index, giving (3/5)x^(3/5 − 1) = (3/5)x^(−2/5) = 3/(5·⁵√(x²)). There is no coefficient multiplying the function anywhere on the slide, so the title does not match the content. On where the rule is actually used: constants are pulled through derivatives repeatedly and silently — on slide 5, where 3x¹⁰⁰ differentiates to (3×100)x⁹⁹ = 300x⁹⁹ and 4x to 4; on slide 9, where the 5 in 5x² is carried through to v′ = 10x; and inside every product- and quotient-rule example whose factors carry coefficients. A strong answer states the rule that the deck never does, d/dx[c·f(x)] = c·f′(x), and flags that the exam may still name it.
