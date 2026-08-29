# Thursday — MTH_102 nightly check

*Problems-only session on Week 6 higher-order derivatives. Compute repeated derivatives of her own functions and one order beyond them: x⁴ + 2x³ − 15x + 4, 3 tan x + 3, √(x³) = x^(3/2), ln x, sin(5x) + e^(3x), and the deck's four-order quotient-rule chain on ln(1 + x²); plus both TASKs she leaves unanswered — the second derivative of cos(3x) and the third derivative of xeˣ at x = 2 — and the arithmetic slip in her printed fourth derivative.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** For f(x) = x⁴ + 2x³ − 15x + 4, find f″(x).
A. 12x² + 12x
B. 12x² + 12x − 15
C. 4x³ + 6x² − 15
D. 12x² + 6x

**2.** The first TASK slide asks for the second derivative of y = cos(3x). What is it?
A. −3 sin(3x)
B. −9 cos(3x)
C. 9 cos(3x)
D. −9 sin(3x)

**3.** She takes f(x) = √(x³) as far as y″ = (3/4)x^(−1/2). Continue one order: y‴ =
A. (3/8)x^(−3/2)
B. −(3/8)x^(−1/2)
C. −(3/8)x^(−3/2)
D. (3/4)x^(−3/2)

**4.** For y = ln x she reaches y‴ = 2x⁻³. What is y⁽⁴⁾?
A. 6x⁻⁴
B. −2x⁻⁴
C. 3x⁻⁴
D. −6x⁻⁴

**5.** She gives d³y/dx³ = −125 cos(5x) + 27e^(3x) for y = sin(5x) + e^(3x). Find d⁴y/dx⁴.
A. 625 sin(5x) + 81e^(3x)
B. −625 sin(5x) + 81e^(3x)
C. 625 sin(5x) + 27e^(3x)
D. 125 sin(5x) + 81e^(3x)

**6.** Using her f″(x) = (2 − 2x²)/(1 + 2x² + x⁴) for f(x) = ln(1 + x²), evaluate f″(2).
A. 6/25
B. −6/25
C. −6/5
D. 10/25

**7.** Which of these is her third derivative of ln(1 + x²)?
A. (4x⁵ − 8x³ − 12x)/(1 + 2x² + x⁴)
B. (−4x⁵ + 8x³ + 12x)/(1 + 4x² + 6x⁴ + 4x⁶ + x⁸)
C. (4x⁵ − 8x³ − 12x)/(1 + 4x² + 6x⁴ + 4x⁶ + x⁸)
D. (4x⁵ − 24x³ − 12x)/(1 + 4x² + 6x⁴ + 4x⁶ + x⁸)

**8.** The second TASK slide asks for the third derivative of f(x) = xeˣ, evaluated at x = 2. What is it?
A. 4e²
B. 3e²
C. 2e²
D. 5e²

**9.** Work the first TASK slide in full: find the second derivative of y = cos(3x), naming what supplies each factor and each sign.
*(short answer)*

**10.** Derive f″(x) for f(x) = ln(1 + x²) from scratch, showing the chain rule step and then the quotient rule step with u, v, u′ and v′ named, exactly as slides 10 and 11 do.
*(short answer)*

**11.** For f(x) = ln x, produce the first three derivatives in both the fraction and the negative-power form she uses, then evaluate f‴(2).
*(short answer)*

**12.** The FOURTH DERIVATIVE slide prints the numerator of f⁽⁴⁾(x) as −12x¹² + 40x¹⁰ + 568x⁸ + 416x⁶ + 240x⁴ + 24x² − 12. Expand her own quotient-rule line and give the correct numerator, then say what remains trustworthy on that slide.
*(short answer)*

## Answers

**1. A** — f′(x) = 4x³ + 6x² − 15, and differentiating again: 4x³ → 12x², 6x² → 12x, and the constant −15 → 0. Option 2 keeps the −15, forgetting that after the first differentiation it has become a constant and must die at the second — the very point of her NOTE d(4)/dx = 0. Option 3 is only the first derivative. Option 4 differentiates 6x² as 6x, dropping the factor 2 that the power supplies.

**2. B** — y′ = −3 sin(3x): cos differentiates to −sin and the chain rule supplies 3. Then y″ = −3·3 cos(3x) = −9 cos(3x): sin differentiates to +cos, so no second sign appears, and the chain supplies another 3. Option 1 stops after one differentiation. Option 3 loses the minus introduced at the first step. Option 4 has the right coefficient but leaves the function as sin, as though differentiating sin returned sin.

**3. C** — The power rule on (3/4)x^(−1/2) multiplies by the exponent −1/2 and drops it by one: (3/4)(−1/2)x^(−1/2 − 1) = −(3/8)x^(−3/2). Option 1 gets the coefficient but loses the minus that the negative exponent supplies. Option 2 multiplies correctly but leaves the exponent at −1/2 instead of reducing it. Option 4 reduces the exponent but forgets to multiply by −1/2 at all, so both the sign and the magnitude are wrong.

**4. D** — Differentiating 2x⁻³ multiplies by the exponent −3 and lowers it by one: 2(−3)x⁻⁴ = −6x⁻⁴. Option 1 has the right magnitude but loses the minus that the negative exponent produces. Option 2 keeps only the sign change and forgets to multiply by 3. Option 3 uses the exponent's magnitude as the new coefficient while dropping both the existing 2 and the sign.

**5. A** — d/dx[−125 cos(5x)] = −125·(−sin(5x))·5 = +625 sin(5x): cos gives −sin, and the two minus signs cancel. d/dx[27e^(3x)] = 27·3e^(3x) = 81e^(3x). Option 2 keeps the minus that has just been cancelled. Option 3 forgets the chain factor 3 on the exponential and leaves 27. Option 4 forgets the chain factor 5 on the trigonometric term and leaves 125.

**6. B** — Numerator: 2 − 2(2²) = 2 − 8 = −6. Denominator: 1 + 2(4) + 2⁴ = 1 + 8 + 16 = 25. So f″(2) = −6/25. Option 1 comes from the reversed quotient-rule numerator (2x² − 2), which gives +6. Option 3 uses 1 + x² = 5 as the denominator, forgetting she squared it into 1 + 2x² + x⁴. Option 4 comes from never subtracting u·v′, leaving the numerator as 2 + 2x² = 10.

**7. C** — With u = 2 − 2x² and v = 1 + 2x² + x⁴, the numerator collects to 4x⁵ − 8x³ − 12x and the denominator is v² = 1 + 4x² + 6x⁴ + 4x⁶ + x⁸. Option 1 forgets to square the denominator. Option 2 reverses the numerator order to u·v′ − v·u′, negating everything. Option 4 mis-collects the x³ terms as −8 − 8 − 8 instead of −8 − 8 + 8, which is exactly the slip the sign of the last product invites.

**8. D** — f′ = (x + 1)eˣ, f″ = (x + 2)eˣ, f‴ = (x + 3)eˣ, so f‴(2) = 5e² ≈ 36.95. Option 1 evaluates f″(2), one order short. Option 2 evaluates f′(2), two orders short. Option 3 comes from differentiating only the eˣ factor and leaving xeˣ unchanged, which ignores the product rule entirely.

**9.** A good answer takes it one order at a time. First: cos differentiates to −sin, and the chain rule f′(x) = y′(u)·u′(x) with u = 3x supplies u′ = 3, so y′ = −3 sin(3x). Second: sin differentiates to +cos, contributing no new sign, and the chain supplies another 3, so y″ = −3·3 cos(3x) = −9 cos(3x). It should say explicitly that the single minus sign was introduced at the first step and survives, so the answer is −9 cos(3x) rather than +9 cos(3x), and that the argument stays 3x throughout — only the coefficient grows. A strong answer notes y″ = −9y, the same relationship her sin(5x) example shows with −25.

**10.** A good answer starts with the chain rule: y = ln u with u = 1 + x², so y′(u) = 1/u and u′(x) = 2x, giving f′(x) = (1/u)·2x = 2x/(1 + x²). It then observes that this is a quotient and applies f′(x) = [v(x)u′(x) − u(x)v′(x)]/(v(x))² with u = 2x, v = 1 + x², u′ = 2, v′ = 2x: f″(x) = [(1 + x²)·2 − 2x(2x)]/(1 + x²)² = (2 + 2x² − 4x²)/[(1 + x²)(1 + x²)] = (2 − 2x²)/(1 + 2x² + x⁴). Credit naming u before v in the numerator and expanding the denominator to 1 + 2x² + x⁴, since that expansion is what she carries into the third order.

**11.** A good answer gives d(ln x)/dx = 1/x, then: y′ = 1/x or x⁻¹; y″ = −1/x² or −x⁻²; y‴ = 2/x³ or 2x⁻³. It should show where each line comes from — x⁻¹ differentiates to (−1)x⁻², and −x⁻² differentiates to −(−2)x⁻³ = +2x⁻³, so the sign flips and flips back while the coefficient runs 1, −1, 2. Finally f‴(2) = 2/2³ = 2/8 = 1/4. Credit writing both forms: the negative-power form is the one that can be differentiated again, which is exactly why she supplies it at every line.

**12.** A good answer expands both products. (1 + 4x² + 6x⁴ + 4x⁶ + x⁸)(20x⁴ − 24x² − 12) = 20x¹² + 56x¹⁰ + 12x⁸ − 112x⁶ − 148x⁴ − 72x² − 12. (8x + 24x³ + 24x⁵ + 8x⁷)(4x⁵ − 8x³ − 12x) = 32x¹² + 32x¹⁰ − 192x⁸ − 448x⁶ − 352x⁴ − 96x². Subtracting gives −12x¹² + 24x¹⁰ + 204x⁸ + 336x⁶ + 204x⁴ + 24x² − 12, so the printed 40, 568, 416 and 240 should be 24, 204, 336 and 204; only the x¹², x² and constant terms are right. What remains trustworthy is everything above that line: u = 4x⁵ − 8x³ − 12x, v = 1 + 4x² + 6x⁴ + 4x⁶ + x⁸, u′ = 20x⁴ − 24x² − 12, v′ = 8x + 24x³ + 24x⁵ + 8x⁷ and the quotient-rule expression are all correct — the failure is confined to the arithmetic of the expansion. A strong answer adds the check that the denominator is (1 + x²)⁴, so the correct numerator factors as −12(1 + x²)⁴(x⁴ − 6x² + 1) and f⁽⁴⁾(x) reduces to −12(x⁴ − 6x² + 1)/(1 + x²)⁴.
