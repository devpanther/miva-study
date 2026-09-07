# Thursday — MTH_102 nightly check

*This session works the same Week 2 function material as problems: reading a question, choosing a method, executing it accurately and checking the result.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** f(x) = x² − 1 and g(x) = 2x + 3. Evaluate (f ∘ g)(2).
A. 48
B. 9
C. 21
D. 10

**2.** Find the largest set of real x for which f(x) = log₂(x + 3) + 1/(x − 1) is defined.
A. (−3, ∞)
B. ℝ \ {1}
C. (−3, 1) ∪ (1, ∞)
D. [−3, 1) ∪ (1, ∞)

**3.** Write f(x) = 3x² + 12x − 5 in the form a(x − h)² + k by completing the square.
A. 3(x + 2)² − 5
B. 3(x + 2)² − 17
C. 3(x − 2)² − 17
D. 3(x + 2)² + 7

**4.** Solve |3x − 4| = 8.
A. x = 4 only
B. x = 4 or x = −4
C. x = 4 or x = 4/3
D. x = 4 or x = −4/3

**5.** Solve 5 · 3ˣ = 405.
A. x = 81
B. x = 27
C. x = 4
D. x = 5

**6.** Find the equation of the line through (−3, 1) and (1, 9).
A. y = 2x + 7
B. y = 2x − 5
C. y = 2x + 1
D. y = x/2 + 5/2

**7.** Solve log₂ x + log₂(x − 2) = 3.
A. x = 4 or x = −2
B. x = −2
C. x = 5
D. x = 4

**8.** A student solves |x − 4| = −3 by squaring both sides: x² − 8x + 16 = 9, so x = 1 or x = 7. What is the actual solution set?
A. x = 1 or x = 7
B. No solution
C. x = 7
D. x = 1

**9. (show your working)** f(x) = 2x + 5 if x < −1; f(x) = x² if −1 ≤ x ≤ 2; f(x) = 7 − x if x > 2. Evaluate f(−4), f(−1), f(2) and f(3). Show your working.

**10. (show your working)** Solve the inequality |2x + 1| < 7. Give the answer as an interval. Show your working.

**11. (show your working)** f(x) = 2x³ − 7x² + 1. State the degree and leading coefficient, then say what f(x) does as x → +∞ and as x → −∞, with the reasoning. Show your working.

**12. (show your working)** A student solves 2ˣ = 40 by writing x = 40 ÷ 2 = 20. Explain what the student has misread about 2ˣ, give the correct method, and say roughly what x is.

---

## Answers

**1. A** — *Evaluating a composite in the correct order.* f ∘ g means g runs first: g(2) = 2(2) + 3 = 7, then f(7) = 7² − 1 = 48.

9 is (g ∘ f)(2), the wrong order (f(2) = 3, g(3) = 9); 21 multiplies f(2) = 3 by g(2) = 7; 10 adds them.

**2. C** — *Domain combining a logarithm and a denominator.* Two restrictions, both required. The log needs x + 3 > 0, so x > −3. The fraction needs x − 1 ≠ 0, so x ≠ 1. Together: (−3, 1) ∪ (1, ∞).

(−3, ∞) forgets the denominator; ℝ \ {1} forgets the log; [−3, 1) ∪ (1, ∞) includes −3, where log₂ 0 is undefined.

**3. B** — *Completing the square.* 3x² + 12x − 5 = 3(x² + 4x) − 5 = 3(x² + 4x + 4 − 4) − 5 = 3(x + 2)² − 12 − 5 = 3(x + 2)² − 17. Vertex (−2, −17), a minimum since a = 3 > 0.

3(x + 2)² − 5 forgets to subtract the 3 × 4 that completing the square added; 3(x − 2)² − 17 has the sign of h wrong (the vertex is at x = −2); 3(x + 2)² + 7 adds 12 instead of subtracting it.

**4. D** — *Solving an absolute value equation by cases.* Case 1: 3x − 4 = 8, so 3x = 12, x = 4. Case 2: 3x − 4 = −8, so 3x = −4, x = −4/3. Check: |−4 − 4| = 8.

'x = 4 only' forgets the negative case; x = −4 negates x instead of the whole expression; x = 4/3 makes a sign slip moving the 4 across in case 2 (3x = 4 instead of 3x = −4).

**5. C** — *Solving an exponential equation by isolating the power.* Isolate the power first: 3ˣ = 405/5 = 81. Then recognise 81 = 3⁴, so x = 4. (General route: x = log₃ 81 = 4.)

x = 81 stops after isolating the power; x = 27 treats 3ˣ as 3x and computes 405/15; x = 5 is an off-by-one count of the powers of 3.

**6. A** — *Equation of a line from two points.* m = (9 − 1)/(1 − (−3)) = 8/4 = 2. Point-slope with (−3, 1): y − 1 = 2(x + 3) = 2x + 6, so y = 2x + 7. Check: at x = 1, y = 9.

y = 2x − 5 uses (x − 3) instead of (x + 3) in point-slope; y = 2x + 1 takes the y-value of the first point as the intercept; y = x/2 + 5/2 uses the reciprocal Δx/Δy for the slope.

**7. D** — *Solving a logarithmic equation and rejecting extraneous roots.* Domain first: x > 0 and x − 2 > 0, so x > 2. Combine: log₂[x(x − 2)] = 3, so x(x − 2) = 2³ = 8, x² − 2x − 8 = 0, (x − 4)(x + 2) = 0, x = 4 or x = −2. Reject −2 (fails x > 2). Answer x = 4; check: log₂ 4 + log₂ 2 = 2 + 1 = 3.

'x = 4 or x = −2' keeps the root that violates the domain; x = −2 keeps the wrong one; x = 5 uses the false law log M + log N = log(M + N), giving 2x − 2 = 8.

**8. B** — *Absolute value equal to a negative number.* |x − 4| is a distance and is never negative, so it cannot equal −3: there is no solution. Squaring destroys the sign information, turning the impossible equation into |x − 4| = 3, whose solutions 1 and 7 are extraneous; substituting either back gives 3, not −3.

x = 1, x = 7, and both together are the manufactured roots; none satisfies the original equation.

**9.** *Evaluating a piecewise function either side of its boundaries.* For each input, first decide which condition it satisfies. x = −4 < −1: first branch, f(−4) = 2(−4) + 5 = −3. x = −1 satisfies −1 ≤ x ≤ 2: middle branch, f(−1) = (−1)² = 1. x = 2 also satisfies −1 ≤ x ≤ 2: f(2) = 2² = 4. x = 3 > 2: third branch, f(3) = 7 − 3 = 4.

Final answer: f(−4) = −3, f(−1) = 1, f(2) = 4, f(3) = 4. A correct answer names the branch used for each input. Using 2x + 5 at x = −1 (giving 3) or 7 − x at x = 2 (giving 5) picks the branch whose condition is not satisfied and is wrong.

**10.** *Solving an absolute value inequality.* |2x + 1| < 7 means −7 < 2x + 1 < 7. Subtract 1 throughout: −8 < 2x < 6. Divide by 2: −4 < x < 3.

Final answer: (−4, 3). Also accepted: −4 < x < 3. Round brackets because the inequality is strict. x < 3 alone forgets the left-hand case; x < −4 or x > 3 solves the 'greater than' inequality instead; [−4, 3] wrongly includes the endpoints.

**11.** *End behaviour of a polynomial.* Degree 3, leading coefficient 2. For large |x| the leading term 2x³ dominates every other term, so the tails follow 2x³. As x → +∞, 2x³ → +∞, so f(x) → +∞. As x → −∞, x³ is negative and large, so 2x³ → −∞ and f(x) → −∞. Odd degree with a positive leading coefficient: the tails go in opposite directions, down on the left, up on the right.

Final answer: degree 3, leading coefficient 2, f(x) → +∞ as x → +∞ and f(x) → −∞ as x → −∞. A correct answer must say the leading term dominates; reasoning from the −7x² term or from the constant 1 is wrong.

**12.** *Exponential versus multiplication.* 2ˣ means 2 multiplied by itself x times, not 2 times x; dividing by 2 undoes multiplication, not exponentiation. The correct move is to take a logarithm: x = log₂ 40 = ln 40 / ln 2 ≈ 5.32. A quick check: 2⁵ = 32 < 40 < 64 = 2⁶, so x lies between 5 and 6, nowhere near 20.

A correct answer identifies the confusion of a power with a product, states x = log₂ 40 (or ln 40/ln 2), and places x between 5 and 6 (about 5.3).
