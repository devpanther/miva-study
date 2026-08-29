# Monday — MTH_102 nightly check

*Limits treated conceptually: what the object lim(x to a) f(x) = L actually asserts, and why it is a statement about the values of f on a punctured neighbourhood of a rather than about f(a). Covers the epsilon-delta formulation and the order in which delta responds to epsilon, one-sided limits and the two-sided existence criterion, and the three-part definition of continuity. Covers why each limit law carries the hypothesis it does: the quotient and reciprocal laws needing a non-zero denominator limit, the composite law needing continuity of the outer function, and the Squeeze Theorem needing both bounds to share a limit. Also covers what the word indeterminate means for 0/0, and why cancelling a factor that vanishes at a is legitimate inside a limit.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The statement lim(x to a) f(x) = L is a claim about which values of f?
a) The single value f(a), which the statement asserts is equal to L.
b) The value f(a) together with the values at points near a, which are averaged to give L.
c) The values of f at points near a, with the point x = a itself excluded from consideration.
d) The values of f across its entire domain, of which L is the overall trend.

**2.** In the epsilon-delta definition of a limit, how are epsilon and delta related?
a) A challenger supplies epsilon first, and delta must then be produced small enough that every x within delta of a, other than a, has f(x) within epsilon of L.
b) A challenger supplies delta first, and epsilon must then be made wide enough that the band around L contains all the values f takes near a.
c) Epsilon and delta are picked independently of one another, and the definition is satisfied as soon as one pair of them happens to work.
d) Epsilon is determined by the shape of the function and delta is determined by the point a, so neither is genuinely chosen.

**3.** In lim(x to 2) (x^2 - 4)/(x - 2), why may the factor (x - 2) be cancelled even though it is zero at x = 2?
a) Because 0/0 is equal to 1, so the repeated factor contributes a factor of one to the value.
b) Because the limit laws allow cancellation whenever the numerator and denominator share a common root.
c) Because the function is implicitly redefined at x = 2, which makes the cancellation valid at that point.
d) Because the limit only consults values with x not equal to 2, and at every such x the ratio (x - 2)/(x - 2) is genuinely 1.

**4.** To call the form 0/0 'indeterminate' is to say that
a) the limit must be zero, since the numerator is heading to zero.
b) the form by itself fixes nothing: different pairs of functions producing this form have different limits, so the functions must be examined.
c) the limit definitely fails to exist, since division by zero is undefined.
d) the limit exists but can never be found by algebraic means, only numerically.

**5.** Suppose lim(x to a) f(x) = L exists. What further condition does continuity of f at a demand?
a) That f be differentiable at a, since continuity is the weaker half of differentiability.
b) That the left-hand and right-hand limits at a agree, which the mere existence of L does not guarantee.
c) That f(a) be defined and be equal to L.
d) That f(a) be defined, with the particular value it takes being immaterial.

**6.** The quotient law lim(f/g) = (lim f)/(lim g) is stated with the hypothesis lim g not equal to 0. What actually breaks without it?
a) The right-hand side L/M is not a number when M = 0, and the genuine limit may then be any real number, plus or minus infinity, or non-existent, depending on f.
b) The product law would be contradicted, because a product of two limits can never come out as zero.
c) The function g would cease to be continuous at a, so no limit law at all could be quoted for it.
d) The limit of f would be forced to be zero as well, so the quotient would always be the form 0/0.

**7.** The Squeeze Theorem requires the two bounding functions to have the same limit at a. Why is that requirement essential?
a) Because the proof adds the two bounds together, an operation that is only valid when they are equal.
b) Because f has to sit exactly midway between the bounds, which is false when their limits differ.
c) Because if the bounds have different limits then f is no longer trapped between them and the inequalities cease to hold.
d) Because f is only known to lie somewhere in the gap between the bounds, and only when that gap shrinks to a single number is f forced to any particular value.

**8.** The composite rule lim(x to a) g(f(x)) = g(L), where L = lim(x to a) f(x), assumes g is continuous at L. What goes wrong if g has a jump at L?
a) f(x) might never reach L exactly, so the inner limit is never actually attained.
b) f(x) approaches L without necessarily equalling it, and a jump at L means the values of g just beside L need not approach g(L).
c) The composite g(f(x)) becomes undefined for all x sufficiently close to a.
d) The derivative g'(L) fails to exist, so no limit law can be applied to the composite.

**9. (explain why)** Explain why the value f(a) can be altered to any number whatsoever without changing lim(x to a) f(x).

**10. (explain why)** Explain why 0/0 is called indeterminate but 5/0 is not, in terms of what each form tells you about the competing behaviours.

**11. (explain why)** Explain why direct substitution is guaranteed to work for every polynomial, and why it is therefore not a general method that may be tried on an arbitrary function.

**12. (explain why)** Explain why L'Hopital's Rule is not a disguised form of the quotient rule, and why the indeterminate form has to be re-checked before every single application.
