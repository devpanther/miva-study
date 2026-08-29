# Thursday — MTH_102 nightly check

*The same Week 3 limit material worked as problems: reading a limit, substituting first, and classifying what comes back as a number, as a non-zero over zero, or as an indeterminate 0/0 or infinity/infinity. Choosing among direct substitution, factorization and cancellation, conjugate rationalization for radicals, clearing a compound fraction, dividing by the highest power for limits at infinity, and L'Hopital's Rule, then executing the chosen route accurately. Checking a finished answer for plausibility, including sign analysis of one-sided infinite limits. Diagnosing two standard wrong routes: applying L'Hopital to a quotient that was never indeterminate, and using the quotient rule in place of L'Hopital.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** For lim(x to 4) (sqrt(x) - 2)/(x - 4), substitution gives 0/0. What is the correct first move?
a) Divide the numerator and the denominator by x, the highest power appearing in the expression.
b) Multiply the numerator and the denominator by sqrt(x) + 2.
c) Report 0/0 as the value of the limit, since that is what substitution returns.
d) Factor x - 4 as (x - 2)(x + 2) and cancel the x - 2 against the numerator.

**2.** Evaluate lim(x to 3) (x^2 - 9)/(x^2 - 4x + 3).
a) 0
b) 1
c) 6
d) 3

**3.** A student writes: lim(x to 0) (cos x)/(x + 1) = lim(x to 0) (-sin x)/1 = 0. What is the fault?
a) The quotient was not indeterminate, since substitution gives 1/1, so L'Hopital does not apply and the true limit is 1.
b) The derivative of cos x is sin x rather than -sin x, so the method was right and only the differentiation was wrong.
c) L'Hopital's Rule is only valid for limits as x tends to infinity, never at a finite point.
d) The quotient rule should have been used, giving (-sin x (x + 1) - cos x)/(x + 1)^2 before taking the limit.

**4.** Evaluate lim(x to infinity) (2x^2 + 3)/(5x^2 - x).
a) 0
b) infinity
c) 2/5
d) 2

**5.** Asked for lim(x to 0) (sin 3x)/(5x) by L'Hopital, a student writes [3cos(3x)(5x) - 5 sin(3x)]/(5x)^2. What has gone wrong and what is the right result?
a) The derivative of sin 3x is wrong; it should be cos 3x, after which the working is sound.
b) L'Hopital cannot be used at all here, because sin 3x is not a polynomial.
c) Nothing is wrong; simplifying that expression and taking the limit does return the correct value 3/5.
d) The quotient rule has been applied to the whole fraction, whereas L'Hopital differentiates numerator and denominator separately, giving 3cos(3x)/5 and hence 3/5.

**6.** Evaluate lim(x to 1) ((1/x) - 1)/(x - 1).
a) -1
b) 1
c) 0
d) The limit does not exist.

**7.** Evaluate lim(x to 2 from the right) 1/(x - 2), and identify the check that settles it.
a) 0, because the denominator becomes small and dividing by a small number makes the result small.
b) It is indeterminate, being of the form 1/0, so L'Hopital's Rule must be applied.
c) Plus infinity, because the numerator holds at 1 while the denominator tends to 0 through positive values.
d) Minus infinity, because the denominator x - 2 is negative for x just to the right of 2.

**8.** Applying L'Hopital's Rule as many times as the form requires, lim(x to 0) (1 - cos x)/x^2 equals
a) 0
b) 1/2
c) 1
d) The limit does not exist.

**9. (explain why)** Explain why substituting the value first is never a wasted step, even when you can already see the limit will come out indeterminate.

**10. (explain why)** Explain why factorization and L'Hopital's Rule return the same value for lim(x to 2) (x^2 - 4)/(x - 2), even though the two routes manipulate the expression in quite different ways.

**11. (explain why)** Explain why multiplying by the conjugate converts a 0/0 limit involving a square root into one that substitution can finish.

**12. (explain why)** Explain why an answer of 0 for lim(x to 2 from the right) 1/(x - 2) is a structural error rather than an arithmetic slip, and what checking the sign of the denominator from each side reveals.
