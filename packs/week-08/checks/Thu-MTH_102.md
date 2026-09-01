# Thursday — MTH_102 nightly check

*Problems-only session on Week 8 integration techniques.*

*Compute with substitution, including converting the limits of a definite integral.*

*Integration by parts, once and twice.*

*Trigonometric substitution, with the root normalised to 1 − (something)².*

*Partial fractions found by substituting the roots.*

*Includes all four TASK questions the lecturer set and never answered: ∫₀¹x·eˣdx, ∫x·ln(x)dx, ∫√(1 + x²)dx and ∫[(5x + 7)/((x − 1)(x + 3))]dx.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Evaluate ∫₀²(x + 2)³dx by the substitution u = x + 2.
A. 16
B. 60
C. 64
D. 240

**2.** Evaluate ∫3x²·e^(x³)dx.
A. 3x²·e^(x³) + C
B. e^(x³)/(3x²) + C
C. x³·e^(x³) + C
D. e^(x³) + C

**3.** Following her method for √(9 − 25x²), you would first write it as 3√(1 − (5x/3)²) and then set 5x/3 = sin(u). What is dx?
A. dx = (3/5)cos(u)du
B. dx = (5/3)cos(u)du
C. dx = cos(u)du
D. dx = (3/5)sin(u)du

**4.** Evaluate ∫[(7x − 6)/((x − 2)(x + 3))]dx.
A. (27/5)ln(x − 2) + (8/5)ln(x + 3) + C
B. (8/5)ln(x − 2) − (27/5)ln(x + 3) + C
C. (8/5)ln(x − 2) + (27/5)ln(x + 3) + C
D. 7ln(x − 2) − 6ln(x + 3) + C

**5.** Evaluate ∫x²·ln(x)dx.
A. (x³/3)ln(x) + x³/9 + C
B. (x³/3)ln(x) − x³/3 + C
C. (x³/3)·(1/x) + C
D. (x³/3)ln(x) − x³/9 + C

**6.** Evaluate ∫x·sin(x)dx.
A. −x·cos(x) + sin(x) + C
B. x·cos(x) − sin(x) + C
C. −x·cos(x) − sin(x) + C
D. −(x²/2)cos(x) + C

**7.** Evaluate ∫[1/(x² − 4)]dx by partial fractions.
A. (1/2)ln(x − 2) − (1/2)ln(x + 2) + C
B. ln(x − 2) − ln(x + 2) + C
C. (1/4)ln(x − 2) − (1/4)ln(x + 2) + C
D. (1/4)ln(x − 2) + (1/4)ln(x + 2) + C

**8.** Evaluate ∫₀¹(x + 1)⁴dx.
A. 1/5
B. 31/5
C. 32/5
D. 33/5

**9.** Work TASK 1 from slide 9 in full: evaluate ∫₀¹ x·eˣ dx. Say first which technique it needs and why.
*(short answer)*

**10.** Work TASK 2 from slide 13 in full: evaluate ∫x·ln(x)dx. Justify your choice of u and dv against the habit her two worked examples establish.
*(short answer)*

**11.** Evaluate ∫√(4 − 9x²)dx her way. Show the rewriting, the substitution, dx, the integration of cos²(u), and the setting back.
*(short answer)*

**12.** Work TASK 3 from slide 18: evaluate ∫√(1 + x²)dx. State which identity replaces 1 − sin²(u) = cos²(u) and why.
*(short answer)*

## Answers

**1. B** — u = x + 2 and du = dx; the limits go from x = 0, 2 to u = 2, 4. So ∫₂⁴u³du = (1/4)u⁴|₂⁴ = (1/4)(256 − 16) = 60. Option 1 comes from leaving the old limits in place and computing (1/4)(2⁴ − 0⁴) = 4, then compounding a slip; it is the classic failure to convert. Option 3 evaluates (1/4)u⁴ at the upper limit only and forgets to subtract. Option 4 is 4⁴ − 2⁴ = 240 with the division by 4 omitted.

**2. D** — The exponent is x³, so u = x³ and du = 3x²dx — which is exactly the rest of the integrand — giving ∫eᵘdu = eᵘ + C = e^(x³) + C. Option 1 differentiates rather than integrates. Option 2 divides by 3x² as though du were dx, a misunderstanding of what substitution consumes. Option 3 leaves the answer as u·eᵘ, multiplying by u instead of leaving eᵘ alone. Verify by differentiating: d/dx e^(x³) = e^(x³)·3x².

**3. A** — Differentiating 5x/3 = sin(u) gives (5/3)dx = cos(u)du, so dx = (3/5)cos(u)du — the coefficient appears reciprocated. Option 2 forgets to invert and is the standard way this question is lost; it is the same slip as writing dx = (3/2)cos(u)du in her ∫√(4 − 9x²) example, where the slide has (2/3). Option 3 is what you would get from x = sin(u) with no coefficient at all. Option 4 differentiates sin(u) to sin(u) instead of cos(u).

**4. C** — 7x − 6 = A(x + 3) + B(x − 2). At x = 2: 8 = 5A so A = 8/5. At x = −3: −27 = −5B so B = 27/5, two negatives giving a positive. Option 1 swaps A and B, which happens if you substitute each root into the wrong bracket. Option 2 keeps B negative, forgetting that −27 divided by −5 is positive — the most common slip in this example. Option 4 reads the numerator's coefficients 7 and −6 straight off as the constants, which ignores the method entirely.

**5. D** — Take u = ln(x), du = (1/x)dx, dv = x²dx, v = x³/3. Then (x³/3)ln(x) − ∫(x³/3)(1/x)dx = (x³/3)ln(x) − (1/3)∫x²dx = (x³/3)ln(x) − x³/9. Option 1 has the sign of the parts formula wrong; the formula subtracts. Option 2 forgets the extra division by 3 when integrating x²/3. Option 3 multiplies v by du instead of integrating v du. Check by differentiating option 4: x²ln(x) + x²/3 − x²/3 = x²ln(x).

**6. A** — u = x, dv = sin(x)dx, so du = dx and v = −cos(x). Then x(−cos(x)) − ∫−cos(x)dx = −x·cos(x) + ∫cos(x)dx = −x·cos(x) + sin(x). Option 2 loses the minus that comes from v = −cos(x), i.e. treats v as sin(x)'s partner rather than its integral. Option 3 gets v right but then misses that −∫−cos(x)dx is a double negative. Option 4 integrates the two factors separately, which is never valid. Differentiating option 1 gives −cos(x) + x·sin(x) + cos(x) = x·sin(x).

**7. C** — x² − 4 = (x − 2)(x + 2), so 1 = A(x + 2) + B(x − 2). At x = 2: 1 = 4A, A = 1/4. At x = −2: 1 = −4B, B = −1/4. Options 1 and 2 come from dividing by 2 or by nothing instead of by 4, that is, from mis-evaluating the bracket at the root. Option 4 loses the minus that comes from B(−4) = 1, and it is worth noticing that the two constants in a 1/((x − a)(x + a)) split are always equal and opposite.

**8. B** — u = x + 1, du = dx; x = 0 gives u = 1 and x = 1 gives u = 2. So ∫₁²u⁴du = (1/5)u⁵|₁² = (1/5)(32 − 1) = 31/5. Option 1 leaves the original limits 0 and 1 in place, giving (1/5)(1 − 0). Option 3 evaluates at the upper limit only and forgets to subtract (1/5)(1⁵). Option 4 subtracts in the wrong place, computing (32 + 1)/5. The lower limit becoming 1 rather than 0 is the whole point of the question.

**9.** A good answer notes that although the task closes the SUBSTITUTION section it cannot be done by substitution — neither factor is the derivative of the other's inner function — and that it is integration by parts, exactly her next slide's Example 1. Take u = x, du = dx, dv = eˣdx, v = eˣ, giving ∫x·eˣdx = x·eˣ − ∫eˣdx = x·eˣ − eˣ. Then evaluate: (x·eˣ − eˣ)|₀¹ = (1·e − e) − (0·1 − 1) = 0 − (−1) = 1. Credit spelling out that e⁰ = 1, that the upper limit contributes exactly nothing, and that the whole answer therefore comes from the lower limit. No constant C appears, because the integral is definite.

**10.** A good answer takes u = ln(x), du = (1/x)dx, dv = x dx, v = x²/2, and computes (x²/2)ln(x) − ∫(x²/2)(1/x)dx = (x²/2)ln(x) − (1/2)∫x dx = (x²/2)ln(x) − x²/4 + C. On the justification: both of her examples put the algebraic factor as u, but the binding constraint is that dv must be integrable, and ln(x) is far harder to integrate than x — reversing the roles would require v = x·ln(x) − x before the method even starts, making the leftover integral worse. Verification by differentiating is worth credit: x·ln(x) + (x²/2)(1/x) − x/2 = x·ln(x) + x/2 − x/2 = x·ln(x).

**11.** A good answer runs: 4 − 9x² = 4(1 − (3x/2)²), so the integral is ∫2√(1 − (3x/2)²)dx. Set 3x/2 = sin(u); then (3/2)dx = cos(u)du, so dx = (2/3)cos(u)du. The root becomes cos(u), and the constants multiply: 2 × (2/3) = 4/3, giving (4/3)∫cos²(u)du. Using cos²(u) = (1 + cos(2u))/2 this is (4/3)(u/2 + sin(2u)/4) = 4u/6 + 4sin(2u)/12. Setting back, u = sin⁻¹(3x/2), the first term is 2sin⁻¹(3x/2)/3; for the second, sin(2u) = 2sin(u)cos(u) with sin(u) = 3x/2 and cos(u) = √(4 − 9x²)/2, giving x√(4 − 9x²)/2. Final answer 2sin⁻¹(3x/2)/3 + x√(4 − 9x²)/2 + C. The reciprocal in dx = (2/3)cos(u)du is the step most often lost.

**12.** A good answer observes that the sign under the root is a plus, so 1 − sin² is useless and the identity needed is 1 + tan²(u) = sec²(u). Set x = tan(u), so dx = sec²(u)du and √(1 + x²) = sec(u), giving ∫sec³(u)du. Integrate by parts with the u-part sec(u) and dv = sec²(u)du, so v = tan(u): writing I = ∫sec³(u)du, I = sec(u)tan(u) − ∫sec(u)tan²(u)du = sec(u)tan(u) − ∫sec(u)(sec²(u) − 1)du = sec(u)tan(u) − I + ∫sec(u)du. Hence 2I = sec(u)tan(u) + ln(sec(u) + tan(u)), using ∫sec(x)dx = ln(sec(x) + tan(x)) + C from slide 6. Setting back with tan(u) = x and sec(u) = √(1 + x²): ∫√(1 + x²)dx = (1/2)[x√(1 + x²) + ln(x + √(1 + x²))] + C. It is fair to note that the deck never demonstrates solving algebraically for a repeated integral, so this task is harder than anything she works.
