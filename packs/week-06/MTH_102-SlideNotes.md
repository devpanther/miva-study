# MTH_102 Week 6 — what the slide images contained that the extracted text had lost

Deck: `Higher-Order-Derivatives-Examples-Its-Applications`, **20 pages**, MIVA Open University, Elementary Mathematics II (Calculus), Topic: Higher-Order Derivatives, Week 6. **The title slide names no lecturer** — unlike the Week 7 deck, which credits Danjuma Rose Uwanassara, MSc Mathematics, the lecturer of record for this course.

**Which pages extracted and which did not.** Seventeen pages were rendered as images for this rebuild: p001, p004–p018 and p020. Pages 2, 3 and 19 (learning objectives, introduction, further reading) extracted as ordinary text and were not rendered. Of the seventeen rendered pages, p001 (title), p017 (a bare "SUMMARY" divider) and p020 ("Thank You") carry no mathematics. **The fifteen content pages p004–p016 and p018 are the ones `pdftotext` saw as pictures**, and from them it recovered only the headings: FIRST-ORDER DERIVATIVE, FIRST DERIVATIVE, SECOND-ORDER DERIVATIVE, TASK, THIRD-ORDER DERIVATIVE, THIRD DERIVATIVE, FOURTH DERIVATIVE ×5, TASK, APPLICATION TO THE REAL-WORLD, SUMMARY. Every formula, every worked line and both TASK questions were invisible. Everything below is what was inside those pictures.

## 1. The rule inventory that was invisible

This is the **entire** set of rules the deck states. There is nothing else anywhere in it.

**Slide 4 — the power rule and the constant note.**
> "Using the power rule which says when f(x) = xⁿ, f′ = nx^(n−1)"
> "**NOTE**: the derivative of a constant is zero i.e. d(4)/dx = 0."

**Slide 5 — the tangent derivative.**
> "Recall from the trigonometry rule, d(tan x)/dx = sec²x"

**Slide 6 — how a higher order is obtained.**
> "The second derivative is gotten by differentiating y′ again"

**Slide 8 — the logarithmic derivative.**
> "From the logarithmic rule: d(ln x)/dx = 1/x"

**Slide 9 — sine and exponential.**
> "From the logarithmic rule: d(sin x)/dx = cos x and d(eˣ)/dx = eˣ"
> *(the label "logarithmic" is wrong here; these are the trigonometric and exponential rules — see §5)*

**Slide 10 — the chain rule.**
> "Recall from chain rule, given f(x) = g(f(x))
> If y = f(u), and u = g(x)
> Then f′(x) = y′(u)·u′(x)"

**Slide 11 — the quotient rule.**
> "In order for us to get the second derivative, we will recall the quotient rule which states that, if f(x) = u(x)/v(x) then, f′(x) = [v(x)u′(x) − u(x)v′(x)]/(v(x))²"

**Slide 14 — the notation note.**
> "Note that the notation for the fourth derivative can be written as f⁽⁴⁾(x) or (f‴(x))′."

## 2. Worked examples that were invisible (six of them)

**Example 1 — FIRST-ORDER DERIVATIVE (slide 4).**
> "What is the first derivative of f(x) = x⁴ + 2x³ − 15x + 4?
> **Solution:** Using the power rule which says when f(x) = xⁿ, f′ = nx^(n−1).
> Then, the first-order derivative is f′(x) = 4x³ + 6x² − 15
> **NOTE**: the derivative of a constant is zero i.e. d(4)/dx = 0."

**Example 2 — FIRST DERIVATIVE (slide 5).**
> "Differentiate y = 3tan x + 3.
> **Solution:** Recall from the trigonometry rule, d(tan x)/dx = sec²x. Thus,
> dy/dx = d(3tan x)/dx + d(3)/dx
> dy/dx = 3·d(tan x)/dx + 0
> dy/dx = 3 sec²x"

Note the presentation: she splits the sum into two separate derivatives, pulls the constant multiplier outside, and writes the "+ 0" explicitly rather than dropping the constant term silently.

**Example 3 — SECOND-ORDER DERIVATIVE (slide 6).**
> "Given a function, f(x) = √(x³). Find the second derivative.
> **Solution:** It can also be written as y = x^(3/2)
> The first derivative is y′ = (3/2)x^(1/2)
> The second derivative is gotten by differentiating y′ again
> y″ = (3/2)·(1/2)x^(1/2 − 1)
> y″ = (3/4)x^(−1/2)"

She displays the un-simplified exponent line x^(1/2 − 1) before reducing it — the same deliberate habit as in her Week 7 deck, where she shows x^(4+1)/(4+1) before simplifying.

**Example 4 — THIRD-ORDER DERIVATIVE (slide 8).**
> "What is the third derivative of f(2) = ln x?
> **Solution:** Let y = ln x
> From the logarithmic rule: d(ln x)/dx = 1/x
> The first derivative is y′ = 1/x or x⁻¹
> The second derivative is y″ = −1/x² or −x⁻²
> The third derivative is is y‴ = 2/x³ or 2x⁻³
> Thus, f‴(2) = 2/2³ = 2/8 = 1/4"

Every derivative is given **twice**, as a fraction and as a negative power. The question line is misprinted ("f(2)" for "f(x)") and the third line contains the typo "is is".

**Example 5 — THIRD DERIVATIVE (slide 9).**
> "Find the first three derivative of sin(5x) + e^(3x).
> **Solution:** Let dy/dx = sin(5x) + e^(3x)
> From the logarithmic rule: d(sin x)/dx = cos x and d(eˣ)/dx = eˣ
> The first derivative is dy/dx = 5 cos(5x) + 3e^(3x)
> The second derivative is d²y/dx² = −25 sin(5x) + 9e^(3x)
> The third derivative is is d³y/dx³ = −125 cos(5x) + 27e^(3x)"

The chain factors accumulate visibly: 5, 25, 125 on the sine term and 3, 9, 27 on the exponential. The exponential term never changes sign; the trigonometric term picks one up at the second order and keeps it at the third.

**Example 6 — FOURTH DERIVATIVE (slides 10, 11, 12, 13, 14).** Five consecutive slides on one function. This is the deck's main exercise and it was entirely invisible.

*Slide 10 — first derivative by the chain rule:*
> "Find the fourth derivative of ln(1 + x²).
> **Solution:** Let f(x) = ln(1 + x²).
> Recall from chain rule, given f(x) = g(f(x))
> If y = f(u), and u = g(x)
> Then f′(x) = y′(u)·u′(x)
> From the above question, y = ln(u) where u = (1 + x²)
> y′(u) = 1/u, u′(x) = 2x
> Therefore, the **first derivative** is f′(x) = (1/u)·2x
> f′(x) = 2x/(1 + x²)"

*Slide 11 — second derivative by the quotient rule:*
> "The first derivative, f′(x) = 2x/(1 + x²) is a quotient.
> In order for us to get the second derivative, we will recall the quotient rule which states that, if f(x) = u(x)/v(x) then, f′(x) = [v(x)u′(x) − u(x)v′(x)]/(v(x))²
> Thus, u(x) = 2x, v(x) = 1 + x², u′(x) = 2, v′(x) = 2x
> f″(x) = [(1 + x²)·2 − 2x(2x)]/(1 + x²)²
> f″(x) = (2 + 2x² − 4x²)/[(1 + x²)(1 + x²)]
> f″(x) = (2 − 2x²)/(1 + 2x² + x⁴)"

*Slide 12 — third derivative, quotient rule again:*
> "Therefore, the **second derivative** is f″(x) = (2 − 2x²)/(1 + 2x² + x⁴)
> Differentiating the second derivative, we get
> u(x) = 2 − 2x², v(x) = 1 + 2x² + x⁴
> u′(x) = −4x, v′(x) = 4x + 4x³
> f‴(x) = [(1 + 2x² + x⁴)(−4x) − (2 − 2x²)(4x + 4x³)]/(1 + 2x² + x⁴)²
> f‴(x) = [−4x − 8x³ − 4x⁵ − 8x − 8x³ + 8x³ + 8x⁵]/[(1 + 2x² + x⁴)(1 + 2x² + x⁴)]
> f‴(x) = (4x⁵ − 8x³ − 12x)/(1 + 4x² + 6x⁴ + 4x⁶ + x⁸)"

This slide is entirely correct. Term collection: x: −4x − 8x = −12x; x³: −8x³ − 8x³ + 8x³ = −8x³; x⁵: −4x⁵ + 8x⁵ = +4x⁵.

*Slide 13 — fourth derivative, quotient rule a third time:*
> "Therefore, the **third derivative** is f‴(x) = (4x⁵ − 8x³ − 12x)/(1 + 4x² + 6x⁴ + 4x⁶ + x⁸)
> Lastly, differentiating the third derivative, we obtain
> u(x) = 4x⁵ − 8x³ − 12x, v(x) = 1 + 4x² + 6x⁴ + 4x⁶ + x⁸
> u′(x) = 20x⁴ − 24x² − 12, v′(x) = 8x + 24x³ + 24x⁵ + 8x⁷
> f⁽⁴⁾(x) = [(1 + 4x² + 6x⁴ + 4x⁶ + x⁸)(20x⁴ − 24x² − 12) − (8x + 24x³ + 24x⁵ + 8x⁷)(4x⁵ − 8x³ − 12x)]/(1 + 4x² + 6x⁴ + 4x⁶ + x⁸)²
> f⁽⁴⁾(x) = (−12x¹² + 40x¹⁰ + 568x⁸ + 416x⁶ + 240x⁴ + 24x² − 12)/(1 + 4x² + 6x⁴ + 4x⁶ + x⁸)²"

**The last line is wrong. See §5.**

*Slide 14 — restatement and the notation note:*
> "Therefore, the **fourth derivative** is f⁽⁴⁾(x) = (−12x¹² + 40x¹⁰ + 568x⁸ + 416x⁶ + 240x⁴ + 24x² − 12)/(1 + 4x² + 6x⁴ + 4x⁶ + x⁸)²
> Note that the notation for the fourth derivative can be written as f⁽⁴⁾(x) or (f‴(x))′."

## 3. Tasks that were invisible (both, with no answers given)

- **Slide 7, TASK:** "What is the second derivative of y = cos(3x)?" → y′ = −3 sin(3x); **y″ = −9 cos(3x)**.
- **Slide 15, TASK:** "Find the third derivative of f(2) = xeˣ" → f′ = (x + 1)eˣ; f″ = (x + 2)eˣ; f‴ = (x + 3)eˣ; **f‴(2) = 5e² ≈ 36.95**. (Same "f(2)" misprint as slide 8; read as f(x) = xeˣ, find f‴(2).)

The deck sets both and answers neither. Slide 15 is the **only** place in the whole deck where the product rule is required.

## 4. Non-mathematical slides that were invisible

**Slide 16 — APPLICATION TO THE REAL-WORLD**, verbatim:
> "Higher-order derivatives play a significant role in understanding motion. The second derivative represents acceleration which we often see in Physics.
> For instance, when plotting the position of a car over time, the second derivative gives us the acceleration (how the car is speeding up or slowing down), and the third derivative tells us about jerk (how the acceleration is changing).
> In analyzing electrical circuits, control systems, vibrations in structures etc.
> For example, in an alternating current (AC) circuit, the second derivative (V″(t)) may help determine how quickly the voltage is oscillating, aiding in the analysis and design of electrical systems."

There is **no worked motion problem** in the deck. Acceleration and jerk are named, never computed.

**Slide 18 — SUMMARY**, verbatim:
> "Higher-order derivatives refer to derivatives of a function beyond the first order. The nth derivative of a function f(x) is denoted by f⁽ⁿ⁾(x).
> They can be calculated using differentiation rules such as: the power rule, product rule, chain rule, etc., applied iteratively.
> Higher-order derivatives affect the smoothness and behaviour of functions - functions become smoother as the order of derivatives increases.
> They provide a deeper understanding of a function's behaviour, revealing information about acceleration, jerk, and other complex aspects.
> In physics, higher-order derivatives help model motion and forces. Engineers use them in signal processing and control systems. Economists analyze growth and utility functions with their aid."

## 5. Errors on the slides

**1. Slide 13 and slide 14 — a substantive arithmetic error in the fourth derivative.**

The printed numerator is
> −12x¹² + 40x¹⁰ + 568x⁸ + 416x⁶ + 240x⁴ + 24x² − 12

Expanding her own quotient-rule line term by term:

- (1 + 4x² + 6x⁴ + 4x⁶ + x⁸)(20x⁴ − 24x² − 12) = **20x¹² + 56x¹⁰ + 12x⁸ − 112x⁶ − 148x⁴ − 72x² − 12**
- (8x + 24x³ + 24x⁵ + 8x⁷)(4x⁵ − 8x³ − 12x) = **32x¹² + 32x¹⁰ − 192x⁸ − 448x⁶ − 352x⁴ − 96x²**
- Subtracting the second from the first: **−12x¹² + 24x¹⁰ + 204x⁸ + 336x⁶ + 204x⁴ + 24x² − 12**

So four of the seven printed coefficients are wrong: **40 should be 24, 568 should be 204, 416 should be 336, 240 should be 204.** Only the x¹², x² and constant terms are right.

Independent confirmation: the denominator 1 + 4x² + 6x⁴ + 4x⁶ + x⁸ is (1 + x²)⁴, and the correct numerator factors as −12(1 + x²)⁴(x⁴ − 6x² + 1), so f⁽⁴⁾(x) = **−12(x⁴ − 6x² + 1)/(1 + x²)⁴** — which is the standard fourth derivative of ln(1 + x²). The printed numerator does not factor that way and does not agree with it at any x.

**Everything above the final line on slide 13 is correct**: u, v, u′, v′ and the quotient-rule expression itself. The defect is confined to the expansion. The new material teaches the corrected numerator, with the misprint named so it is not copied into an exam script.

**2. Slide 8 — the question is misprinted.** "What is the third derivative of **f(2)** = ln x?" A value f(2) is a number and cannot be differentiated. It should read: for f(x) = ln x, find f‴(2). Her own closing line, f‴(2) = 2/2³ = 1/4, is what she intended and it is correct.

**3. Slide 15 — the same misprint.** "Find the third derivative of **f(2)** = xeˣ". Read as f(x) = xeˣ, find f‴(2) = 5e².

**4. Slide 9 — two slips.**
- "Let **dy/dx** = sin(5x) + e^(3x)" should be "Let **y** = sin(5x) + e^(3x)". As printed, the three derivatives she then computes would each be one order too low. Every derivative she writes is correct on the intended reading.
- "From the **logarithmic** rule: d(sin x)/dx = cos x and d(eˣ)/dx = eˣ" mislabels the trigonometric and exponential rules as logarithmic. She reused the wording from slide 8 without changing it.

**5. Slide 10 — the chain-rule statement is garbled.** "Recall from chain rule, given **f(x) = g(f(x))**" uses f on both sides of its own definition. The two lines that follow state it correctly (y = f(u), u = g(x), f′(x) = y′(u)·u′(x)) and the application to ln(1 + x²) is correct.

**6. Slides 8 and 9 — typo.** "The third derivative **is is**" on both.

## 6. Notation habits worth mirroring in answers

- **Both forms on every line**: "y′ = 1/x **or** x⁻¹", "y″ = −1/x² **or** −x⁻²". She always supplies the negative-power form because it is the differentiable one.
- **Un-simplified exponent line shown first**: x^(1/2 − 1) before x^(−1/2). She is deliberately displaying the subtraction.
- **Denominators expanded, never left bracketed**: (1 + x²)² becomes 1 + 2x² + x⁴, which is then squared into 1 + 4x² + 6x⁴ + 4x⁶ + x⁸. She never cancels or factors back down.
- **u, v, u′, v′ declared on their own line** before the quotient rule is applied — three times running on slides 11, 12 and 13.
- **Sums split into separate d( )/dx terms** before constants are pulled out, with "+ 0" written explicitly.
- **Leibniz for the sin/exp example, primes elsewhere**: dy/dx, d²y/dx², d³y/dx³ on slide 9; y′, y″, y‴, f⁽⁴⁾(x) everywhere else.

## 7. Was the old material wrong, incomplete, or basically fine?

**Every mathematical statement in the old summary is true, but it is the wrong material for this week and had to be replaced rather than patched.** Four problems:

**a) Roughly two-thirds of it is out of scope.** The old summary taught concavity, points of inflection, the second-derivative test (with two full worked classifications), stationary points, "speeding up ⟺ v and a have the same sign", "at rest vs acceleration zero", a kinematics problem with jerk computed, economics of marginal cost, beam loading EI·d⁴y/dx⁴ = w(x), implicit second derivatives (with a worked x² + y² = 25), parametric derivatives, partial second derivatives ∂²z/∂x∂y, general nth-derivative patterns (aⁿe^(ax), sin(x + nπ/2), (−1)ⁿn!x^(−(n+1))), the Leibniz product expansion (uv)″ = u″v + 2u′v′ + uv″, and operator notation Dⁿ. **None of that is in the deck.** The lecturer differentiates six functions repeatedly and stops. A student revising the old page spent most of their time on material she never taught.

**b) None of her six worked examples or either of her TASKs appeared.** All ten of the old summary's examples were invented — 3x⁵ − 4x³ + 2x² − 7, x²eˣ, sin 3x, 1/(2x + 1), √x and ln x nth-derivative patterns, x³ − 3x² − 9x + 5, x⁴ − 4x³, s = t³ − 6t² + 9t + 2, x² + y² = 25, x²e^(−x). Not one of x⁴ + 2x³ − 15x + 4, 3 tan x + 3, √(x³), ln x at x = 2, sin(5x) + e^(3x), or ln(1 + x²) appears anywhere on it, and neither TASK — cos(3x) and xeˣ, the two most likely assessment templates — is mentioned.

**c) It missed the deck's centre of gravity completely.** Five of the fifteen content slides are a single problem: the fourth derivative of ln(1 + x²), with the quotient rule applied three times in succession over expanding polynomial fractions. That is a third of the deck and the only extended piece of work in it. The old summary contains no quotient-rule example at all, and never mentions ln(1 + x²).

**d) The old question set is worse than the summary.** Of its twelve multiple-choice questions, six (Q5, Q6, Q7, Q8, Q9, Q12) test concavity, the second-derivative test, implicit differentiation or kinematics — none of which is in the deck — and two of the three short answers (Q14 on classifying stationary points, Q15 on d²y/dx² versus (dy/dx)² with a dimensional argument) are likewise off-syllabus. Its Q2, Q3 and Q10 test nth-derivative patterns and the (uv)″ expansion that the deck never gives.

The old page carried an honest footnote admitting it was written from the slide titles and the week-summary sheet because the deck extracted as headings only. That footnote was accurate, and it also meant the old material could not know about the arithmetic error on slide 13 — the single most consequential thing in this deck, since the printed answer to its biggest worked example is wrong. The replacement removes the need for the footnote and names the error.
