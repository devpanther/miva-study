# Monday — MTH_102 nightly check

*Week 6 higher-order derivatives, exactly as the deck builds them.*

*That f″ is obtained by differentiating f′ again, and no new rule is introduced.*

*The power rule f′ = nx^(n−1), and the NOTE that the derivative of a constant is 0.*

*Rewriting √(x³) as x^(3/2) before differentiating.*

*The chain rule f′(x) = y′(u)·u′(x), and why sin(5x) keeps depositing a factor 5 while e^(3x) keeps depositing a 3 without ever changing sign.*

*The quotient rule [v·u′ − u·v′]/v², and why ln(1 + x²) needs it at every order after the first.*

*The notation f⁽⁴⁾(x) = (f‴(x))′.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The SECOND-ORDER DERIVATIVE slide says how the second derivative is obtained. In her phrasing, it is obtained
A. by differentiating the first derivative again
B. by squaring the first derivative
C. by differentiating the original function with respect to a second variable
D. by differentiating the original function and multiplying the result by 2

**2.** In her sin(5x) + e^(3x) example the coefficients of the trigonometric term run 5, then 25, then 125 across the first three derivatives. Why do they keep growing?
A. Because the argument 5x is raised to a higher power at each order
B. Because the chain rule supplies the inner derivative 5 afresh at every differentiation
C. Because the notation d²y/dx² and d³y/dx³ squares and cubes the coefficient
D. Because sin(5x) has period 2π/5, and the period appears in the derivative

**3.** For f(x) = ln(1 + x²), which rules does the deck use to reach the second derivative?
A. The quotient rule for the first derivative, then the chain rule for the second
B. The chain rule for both
C. The chain rule for the first derivative, then the quotient rule for the second
D. The product rule for the first derivative, then the chain rule for the second

**4.** The FOURTH DERIVATIVE slide ends with a note on notation. It says f⁽⁴⁾(x) can also be written as
A. [f(x)]⁴
B. f(4)
C. 4·f′(x)
D. (f‴(x))′

**5.** Differentiating y = 3 tan x + 3 gives dy/dx = 3 sec²x. What has happened to each of the two threes?
A. The multiplying 3 stays and multiplies sec²x; the added 3 differentiates to 0
B. Both threes stay, giving 3 sec²x + 3
C. Both threes vanish, giving sec²x
D. The multiplying 3 vanishes and the added 3 survives

**6.** Why does she rewrite f(x) = √(x³) as y = x^(3/2) before differentiating?
A. Because the square root of a cube is undefined for negative x
B. Because the power rule f′ = nx^(n−1) can only be applied to something already written as a power of x
C. Because the second derivative of a square root would otherwise not exist
D. Because fractional exponents differentiate to zero

**7.** A student memorises the quotient rule as [u(x)v′(x) − v(x)u′(x)]/(v(x))². What does that do to the ln(1 + x²) working?
A. Nothing, because subtraction of the two products is symmetric here
B. It squares every answer
C. It produces the negative of the correct derivative at every order
D. It leaves the second derivative correct but breaks the third

**8.** On her APPLICATION TO THE REAL-WORLD slide, what do the second and third derivatives of a car's position represent?
A. Velocity and acceleration
B. Acceleration and velocity
C. Displacement and velocity
D. Acceleration and jerk

**9.** Explain what makes a derivative 'higher-order', and why this week introduces no new differentiation rules at all.
*(short answer)*

**10.** In her result d³y/dx³ = −125 cos(5x) + 27e^(3x), explain why the exponential term is positive while the trigonometric term carries a minus sign.
*(short answer)*

**11.** The THIRD-ORDER DERIVATIVE slide asks for 'the third derivative of f(2) = ln x'. Say what is wrong with that as printed, what she must have meant, and how you can tell.
*(short answer)*

**12.** Her SUMMARY slide lists the product rule among the rules used for higher-order derivatives, yet none of her six worked examples uses it. Where in the deck is it actually needed, and what does applying it there involve?
*(short answer)*

## Answers

**1. A** — Her line is exactly 'The second derivative is gotten by differentiating y′ again' — you feed the answer you already have back into the same machinery. Option 2 reads the double prime as a power; f″ and (f′)² are different functions, as x^(3/2) shows immediately. Option 3 imports partial derivatives, which the deck never mentions and which need a function of two variables. Option 4 confuses the order counter with a multiplier — nothing is multiplied by 2 anywhere in her working.

**2. B** — The chain rule as she states it, f′(x) = y′(u)·u′(x), applies again every time you differentiate, and u = 5x always contributes u′ = 5 — so the coefficient is multiplied by 5 once per order: 5, 25, 125. Option 1 is false: the argument stays 5x throughout, it is the coefficient in front that changes. Option 3 treats the Leibniz superscript as an algebraic power; it is a counter. Option 4 is a true fact about the function that plays no part in differentiating it.

**3. C** — ln(1 + x²) is a composite, so the chain rule gives f′(x) = 2x/(1 + x²). That answer is a quotient, so the second derivative needs the quotient rule — she says so explicitly: 'The first derivative is a quotient.' Option 1 swaps the order and would need a quotient to start with, which ln(1 + x²) is not. Option 2 misses that the chain rule has nothing to act on once the composite has been unwrapped. Option 4 misreads 2x/(1 + x²) — or the original — as a product.

**4. D** — The fourth derivative is the derivative of the third, which is what (f‴(x))′ says; the brackets on the 4 exist precisely to stop it being read as a power. Option 1 is that misreading, and for f(x) = ln(1 + x²) the two are wildly different. Option 2 reads it as a value of f at 4 — the same confusion that produced the deck's own misprints 'f(2) = ln x' and 'f(2) = xeˣ'. Option 3 invents a constant multiple.

**5. A** — A constant multiplier is pulled outside the derivative and stays — she writes 3·d(tan x)/dx — while an added constant differentiates to 0, which is the bold NOTE on the FIRST-ORDER DERIVATIVE slide, d(4)/dx = 0. She even writes the '+ 0' rather than dropping it silently. Option 2 keeps a constant that must vanish. Option 3 applies the constant rule to a multiplier, which it does not govern. Option 4 gets both backwards.

**6. B** — The only rule she has for this function is f′ = nx^(n−1), and it needs to see an exponent n. Once √(x³) is x^(3/2), n = 3/2 and the rule runs twice without any new machinery: (3/2)x^(1/2), then (3/4)x^(−1/2). Option 1 raises a domain point that is true but irrelevant to why the rewrite is done. Option 3 is false — existence is not the issue. Option 4 confuses a fractional exponent with a constant; only constants differentiate to 0.

**7. C** — Swapping the two products negates the numerator, so f″ would come out as (2x² − 2)/(1 + 2x² + x⁴) instead of (2 − 2x²)/(1 + 2x² + x⁴) — the right expression with the wrong sign — and the error then propagates through the third and fourth orders. Option 1 is false: a − b and b − a differ whenever a ≠ b. Option 2 confuses the numerator order with the squared denominator. Option 4 wrongly suggests the mistake is self-correcting at one order.

**8. D** — Her words: the second derivative 'gives us the acceleration (how the car is speeding up or slowing down)' and the third 'tells us about jerk (how the acceleration is changing)'. Option 1 is off by one order — velocity is the first derivative. Option 2 has the right two words in the wrong order, so it makes jerk-free nonsense of the third derivative. Option 3 is off by two orders, since displacement is the position function itself.

**9.** A good answer says: a higher-order derivative is any derivative beyond the first, obtained by differentiating the previous derivative again — f″ = (f′)′, f‴ = (f″)′, f⁽⁴⁾ = (f‴)′ — so the nth derivative is written f⁽ⁿ⁾(x). No new rule is needed because at every stage you are differentiating an ordinary function of x with the ordinary rules: power, chain, quotient, product. What changes from order to order is only which rule the current expression demands, and her SUMMARY slide puts it exactly that way — the rules are 'applied iteratively'. The ln(1 + x²) example is the demonstration: the chain rule once, then the quotient rule three times, because the shape of the expression changed after the first step.

**10.** A good answer separates the two terms. For e^(3x): d(eˣ)/dx = eˣ, so the exponential reproduces itself exactly and the only thing each differentiation adds is a chain factor 3 — 3, 9, 27 — all positive, and no differentiation can ever introduce a minus. For sin(5x): the derivatives cycle sin → cos → −sin → −cos, so a sign appears at the second differentiation and is still there at the third; combined with the chain factors this gives 5 cos(5x), then −25 sin(5x), then −125 cos(5x). The answer should draw the moral: the minus belongs to the trigonometric term alone, and writing −125 cos(5x) − 27e^(3x) applies it to a term that can never be negative for real x.

**11.** A good answer says that f(2) is a number — the value of f at x = 2 — and a number has no derivative with respect to x, so 'the third derivative of f(2)' is meaningless as written. The intended question is: for f(x) = ln x, find f‴(2). The evidence is the slide's own last line, 'Thus, f‴(2) = 2/2³ = 2/8 = 1/4', which evaluates the third derivative at x = 2. The answer should note that the same misprint recurs on the TASK slide, 'f(2) = xeˣ', so it should be read the same way — find f‴(2) — and that flagging it matters because copying 'f(2) = ln x' into an exam script would be marked wrong even though the arithmetic that follows is right.

**12.** A good answer identifies the second TASK slide, f(x) = xeˣ, as the only place: it is a product of x and eˣ, and neither factor is constant, so (uv)′ = u′v + uv′ is unavoidable. It should then show that the rule is needed afresh at each order, because each result is still a product: f′ = 1·eˣ + x·eˣ = (x + 1)eˣ; f″ = 1·eˣ + (x + 1)eˣ = (x + 2)eˣ; f‴ = 1·eˣ + (x + 2)eˣ = (x + 3)eˣ. A strong answer adds that each differentiation simply adds 1 to the bracket, and that since the slide's 'f(2)' means evaluate at 2, the answer is 5e². It should also note the scope point: the SUMMARY lists rules the deck names, not only rules it demonstrates.
