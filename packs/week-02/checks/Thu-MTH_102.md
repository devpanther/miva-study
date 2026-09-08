# Thursday — MTH_102 nightly check

*This session works the same Week 2 function material as problems: reading a question, choosing a method, executing it accurately and checking the result.*
*12 questions, straight after the hour. Score out of 12.*

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

**9.** f(x) = 2x + 5 if x < −1; f(x) = x² if −1 ≤ x ≤ 2; f(x) = 7 − x if x > 2. Find f(−4), f(−1), f(2) and f(3), in that order.
A. −3, 3, 5, 4
B. −3, 1, 5, 4
C. −3, 1, 4, 11
D. −3, 1, 4, 4

**10.** Solve the inequality |2x + 1| < 7 and give the answer as an interval.
A. (−∞, −4) ∪ (3, ∞)
B. (−4, 3)
C. [−4, 3]
D. (−3, 4)

**11.** For f(x) = 2x³ − 7x² + 1, state the degree and leading coefficient and say what f(x) does as x → +∞ and as x → −∞.
A. Degree 3, leading coefficient 2; f → +∞ as x → +∞ and f → −∞ as x → −∞
B. Degree 3, leading coefficient 2; f → +∞ at both ends
C. Degree 3, leading coefficient −7; f → −∞ as x → +∞ and f → +∞ as x → −∞
D. Degree 2, leading coefficient −7; f → −∞ at both ends

**12.** A student solves 2ˣ = 40 by writing x = 40 ÷ 2 = 20. What is the correct value of x, and what did the student misread?
A. x = log₁₀ 40 ≈ 1.60; the base was read as 10
B. x = √40 ≈ 6.32; an exponent is undone by taking a root
C. x = log₂ 40 ≈ 5.32; a power was treated as a product
D. x = 20; dividing by 2 really does undo 2ˣ

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

**9. D** — *Evaluating a piecewise function either side of its boundaries.* For each input decide first which condition it satisfies. x = −4 < −1 uses the first branch: 2(−4) + 5 = −3. Both x = −1 and x = 2 satisfy −1 ≤ x ≤ 2, so both use the middle branch: (−1)² = 1 and 2² = 4. x = 3 > 2 uses the third: 7 − 3 = 4.

The value 3 at x = −1 and 5 at x = 2 come from using branches whose conditions those inputs do not satisfy, and 11 at x = 3 uses 2x + 5 far outside its range.

**10. B** — *Solving an absolute value inequality.* A 'less than' absolute value becomes a double inequality: |2x + 1| < 7 means −7 < 2x + 1 < 7. Subtract 1 throughout to get −8 < 2x < 6, then divide by 2 to get −4 < x < 3, that is (−4, 3), with round brackets because the inequality is strict.

(−∞, −4) ∪ (3, ∞) solves the 'greater than' version, [−4, 3] wrongly includes endpoints where the expression equals 7, and (−3, 4) swaps the signs of the bounds.

**11. A** — *End behaviour of a polynomial.* The highest power is x³, so the degree is 3 and the leading coefficient is the 2 in front of it. For large |x| the term 2x³ swamps every other term, so the tails follow 2x³: as x → +∞, 2x³ → +∞, and as x → −∞, x³ is large and negative so f → −∞. Odd degree with a positive lead means the two tails go opposite ways, down on the left and up on the right.

The other options read the leading term off the −7x² term, or treat an odd degree as if both tails matched.

**12. C** — *Exponential versus multiplication.* 2ˣ means 2 multiplied by itself x times, not 2 times x, and division undoes multiplication, not exponentiation. The operation that undoes a power is a logarithm: x = log₂ 40 = ln 40 / ln 2 ≈ 5.32. A quick sanity check confirms it, since 2⁵ = 32 and 2⁶ = 64 bracket 40, so x lies between 5 and 6, nowhere near 20.

log₁₀ 40 uses the wrong base, √40 undoes a square rather than an unknown exponent, and 20 repeats the original mistake.
