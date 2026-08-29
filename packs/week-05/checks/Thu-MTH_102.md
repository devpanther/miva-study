# Thursday — MTH_102 nightly check

*Computation pass on Week 5: applying the power rule to polynomials and fractional indices, the product rule f′ = u v′ + u′ v and the quotient rule [v u′ − u v′]/v² to new expressions, the chain rule on cos, sin and bracket powers, implicit differentiation with collection and factorisation of dy/dx, the parametric rule dy/dx = dy/dt ÷ dx/dt including her unanswered TASK on x(t) = t⁴ and y(t) = 7t² − 5t, partial derivatives holding the other variable constant, and a full first-principle calculation.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Differentiate f(x) = 5x⁷ − 2x.
A. 35x⁶ − 2x⁰
B. 35x⁶ − 2x
C. 7x⁶ − 2
D. 35x⁶ − 2

**2.** Use the product rule on f(x) = (3x + 1)(x² − 4).
A. 6x² + 2x
B. 9x² + 2x − 12
C. 6x
D. 3x² + 2x − 12

**3.** Use the quotient rule on f(x) = (4x − 1)/(2x²).
A. (1 − 2x)/x³
B. (2x − 1)/x³
C. 4/(4x)
D. (8x² + 4x)/4x⁴

**4.** Use the chain rule on f(x) = sin(x³).
A. cos(x³)
B. cos(3x²)
C. 3x² cos(x³)
D. −3x² cos(x³)

**5.** Differentiate f(x) = (3x + 2)³.
A. 9(3x + 2)²
B. 3(3x + 2)²
C. 9(3x + 2)³
D. 3(3x + 2)³

**6.** Differentiate x² + y³ = 9 implicitly and make dy/dx the subject.
A. −2x
B. −x/y
C. 2x/(3y²)
D. −2x/(3y²)

**7.** For the parametric equations x(t) = 3t² and y(t) = t³ − t, find dy/dx.
A. 3t² − 1
B. 6t/(3t² − 1)
C. (3t² − 1)/6t
D. (3t² − 1)/6t²

**8.** For f(x, y) = 4x³y − 5y², find ∂f/∂x.
A. 12x²y − 10y
B. 12x²y
C. 12x² − 10y
D. 4x³ − 10y

**9.** Reproduce the lecturer's QUOTIENT RULE second example, f(x) = (6x − 3)/(5x²), line by line as she writes it, and explain how the last line reduces to 6(1 − x)/5x³.
*(short answer)*

**10.** The PRODUCT RULE slide for f(x) = (4x + 6)(2x³ − 5x) prints its answer as 8x³ + 24x² − 32x − 30. Work the derivative correctly, verify it a second way, and identify the earlier line on that slide which is also misprinted.
*(short answer)*

**11.** Differentiate y = 5x from the first principle, showing every line the lecturer shows. Then say what one extra step would be needed if the function were √x instead, and why.
*(short answer)*

**12.** Answer the lecturer's TASK on slide 15 in full: for x(t) = t⁴ and y(t) = 7t² − 5t, find dy/dx. Then find both partial derivatives of f(x, y) = 5x³ + 4x²y² − 2y.
*(short answer)*

## Answers

**1. D** — (5×7)x⁶ − (2×1)x⁰ = 35x⁶ − 2x⁰, and x⁰ = 1, so the answer is 35x⁶ − 2. Option 1 stops one line early and leaves x⁰ standing, exactly the line the lecturer resolves on slide 5. Option 2 leaves the second term undifferentiated. Option 3 forgets to multiply by the coefficient 5, giving 7 where 35 is needed.

**2. B** — u = 3x + 1, v = x² − 4, u′ = 3, v′ = 2x, so f′ = (3x + 1)(2x) + 3(x² − 4) = 6x² + 2x + 3x² − 12 = 9x² + 2x − 12. Expanding first gives 3x³ + x² − 12x − 4, which differentiates to the same thing. Option 1 computes only the first term, u v′, and forgets u′ v. Option 3 is u′ v′, the invented rule. Option 4 uses u′ = 1 instead of 3 in the second term.

**3. A** — u = 4x − 1, v = 2x², u′ = 4, v′ = 4x, so f′ = [2x²·4 − (4x − 1)·4x]/(2x²)² = (8x² − 16x² + 4x)/4x⁴ = (−8x² + 4x)/4x⁴, and dividing top and bottom by 4x gives (1 − 2x)/x³. Option 2 is the sign-flipped version you get by writing u v′ − v u′. Option 3 differentiates top and bottom separately. Option 4 fails to distribute the minus across both terms of (4x − 1)(4x), turning −4x into +4x and leaving 8x² positive.

**4. C** — With u = x³, y′(u) = cos(u) and u′(x) = 3x², so f′(x) = cos(x³)·3x² = 3x² cos(x³). Option 1 applies the outer derivative but omits the inner derivative, the error TASK 1 is built to catch. Option 2 differentiates the inside and then puts the result inside the cosine, which the rule never licenses. Option 4 imports the minus sign that belongs to the derivative of cosine, not of sine.

**5. A** — With u = 3x + 2, y = u³ gives y′(u) = 3u² and u′(x) = 3, so f′ = 3(3x + 2)²·3 = 9(3x + 2)². Option 2 is the answer with the inner derivative 3 forgotten. Option 3 keeps the multiplier but never reduces the power. Option 4 makes both mistakes at once, which is what happens when the bracket is treated as if it were a bare x.

**6. D** — Differentiating both sides with respect to x gives 2x + 3y²(dy/dx) = 0, since d/dx(y³) = 3y²·dy/dx and d/dx(9) = 0 by the constant rule. Isolating gives dy/dx = −2x/(3y²). Option 1 forgets the y term entirely and just moves 2x across. Option 2 is the slide-12 answer for x² + y² = 25, imported without redoing the power on y — the cube gives 3y², not 2y. Option 3 loses the minus sign when moving 2x to the other side of the equals.

**7. C** — x′(t) = 6t and y′(t) = 3t² − 1, so dy/dx = (3t² − 1)/6t, left in terms of t as the lecturer leaves hers. Option 1 gives dy/dt alone, which is a rate with respect to the parameter, not a gradient. Option 2 inverts the division. Option 4 differentiates 3t² as 6t² rather than 6t, losing a power.

**8. B** — Holding y constant, 4x³y differentiates to 12x²y (the y rides along as a coefficient), and −5y² contains no x at all, so by the constant rule it contributes 0. The answer is 12x²y. Option 1 differentiates the −5y² term as if y varied with x. Option 3 drops the y that multiplies the first term, forgetting it is a constant multiplier, not something to be removed. Option 4 is ∂f/∂y with the second term differentiated but the first left undifferentiated in x.

**9.** A good answer follows her layout. First the substitution line: u(x) = (6x − 3), v(x) = 5x², u′(x) = 6, v′(x) = 10x. Then f′(x) = [5x²·6 − (6x − 3)·10x]/(5x²)². Then the expansion: (30x² − 60x² + 30x)/25x⁴, noting that (6x − 3)(10x) = 60x² − 30x and that subtracting it flips both signs, which is why the +30x appears. Then the collection: (−30x² + 30x)/25x⁴. Finally the reduction: factor 30x out of the numerator to get 30x(1 − x)/25x⁴, cancel a common 5x from top and bottom, and 30/5 = 6 with x⁴ dropping to x³, giving 6(1 − x)/5x³. A strong answer also flags that the denominator is (5x²)² = 25x⁴, so the coefficient 5 is squared as well as the x², and that leaving it as 5x⁴ is the commonest error on this example.

**10.** A good answer computes u = 4x + 6, v = 2x³ − 5x, u′ = 4, v′ = 6x² − 5, then f′ = (4x + 6)(6x² − 5) + 4(2x³ − 5x) = 24x³ + 36x² − 20x − 30 + 8x³ − 20x = 32x³ + 36x² − 40x − 30. The independent verification is to expand before differentiating: f(x) = 8x⁴ + 12x³ − 20x² − 30x, whose derivative is 32x³ + 36x² − 40x − 30 — the same, so the product rule and direct expansion agree and the printed answer is wrong in three of its four coefficients. The other misprinted line is the substitution line, which reads (4x + 6)(6x − 5): the square has been dropped from 6x², even though the line directly above correctly records v′(x) = 6x² − 5. A strong answer notes that even the misprinted bracket does not produce the printed answer — it would give 8x³ + 24x² − 4x − 30 — so the two errors are independent, and that the safe habit for any product of polynomials is to expand first as a check.

**11.** A good answer runs her template exactly: f′(x) = lim(h→0) [f(x + h) − f(x)]/h with f(x) = 5x; then lim(h→0) [5(x + h) − 5x]/h; then lim(h→0) [5x + 5h − 5x]/h; then lim(h→0) 5h/h; then lim(h→0) 5; therefore y′ = 5. The point to draw out is that the terms 5x and −5x cancel, leaving a numerator that is a multiple of h, so the h divides out of the denominator and the limit can then be taken by substitution. For √x the numerator is √(x + h) − √x, which has no h to factor out and cannot be simplified as it stands, so substituting h = 0 gives 0/0. The extra step is to multiply above and below by the conjugate (√(x + h) + √x): by difference of two squares the numerator becomes (x + h) − x = h, which then cancels the denominator's h, leaving 1/(√(x + h) + √x) and hence 1/(2√x). A strong answer names the general principle: the h must be made to cancel before the limit is taken, whatever algebra that takes.

**12.** For the TASK: differentiate each with respect to t first, x′(t) = 4t³ and y′(t) = 14t − 5, then apply dy/dx = dy/dt ÷ dx/dt to get dy/dx = (14t − 5)/4t³. A strong answer adds the restriction t ≠ 0, since x′(t) = 0 there and the division is undefined; the deck does not state this, and it is the one place her parametric example (where x′ = 2, never zero) does not prepare you for. For the partials: ∂f/∂x holds y constant, so 5x³ gives 15x², 4x²y² gives 8xy² (the y² is a constant multiplier), and −2y contains no x so it gives 0 — total 15x² + 8xy². ∂f/∂y holds x constant, so 5x³ gives 0, 4x²y² gives 8x²y, and −2y gives −2 — total 8x²y − 2. The pattern worth saying out loud is that any term lacking the variable you are differentiating by is a constant and dies, which is why each partial has a term the other does not.
