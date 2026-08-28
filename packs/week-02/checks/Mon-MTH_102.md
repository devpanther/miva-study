# Monday — MTH_102 nightly check

*Graphing functions: function types and their shapes, intercepts, symmetry, asymptotes, end behaviour.*
*Sit cold, notes closed, 8 minutes. Score out of 6.*

**1.** For f(x) = (x² − 4)/(x² − x − 6), the vertical asymptotes are:
a) x = 3 only; the factor (x + 2) cancels, leaving a hole at (−2, 4/5)
b) x = −2 and x = 3, since both make the denominator zero
c) x = −2 and x = 2, since these are where the numerator vanishes
d) none, because the numerator and denominator share a common factor

**2.** f(x) = (2x³ − x)/(5x² + 4). Which is correct?
a) Horizontal asymptote y = 2/5, the ratio of the leading coefficients
b) Horizontal asymptote y = 0, since the function is a proper fraction
c) No asymptotes at all, since 5x² + 4 is never zero
d) No horizontal asymptote; the degree of the numerator exceeds that of the denominator by one, and long division gives the oblique asymptote y = (2/5)x

**3.** f(x) = x³ + 1. Which statement is correct?
a) Odd, because the highest power of x is odd, so the graph has rotational symmetry about the origin
b) Neither: f(−x) = −x³ + 1, which is neither f(x) nor −f(x); the +1 lifts the odd graph of x³ off the origin
c) Even, because f(−x) = −x³ + 1 differs from f(x) only by a sign
d) Odd, because f(x) − 1 = x³ is odd and a constant term cannot affect symmetry

**4.** For f(x) = −2x⁴ + 7x³ − 5, the end behaviour is:
a) f(x) → +∞ as x → −∞, and f(x) → −∞ as x → +∞
b) f(x) → +∞ at both ends, since a negative x raised to the fourth power is positive
c) f(x) → −∞ at both ends: the degree is even so the two ends match, and the leading coefficient is negative so both point downwards
d) f(x) → −5 at both ends, since the constant term dominates for large |x|

**5. (explain why)** A student writes: "f(x) = 4x/(x² + 1) has the horizontal asymptote y = 0, so the graph can never touch the x-axis." Explain precisely what a horizontal asymptote does and does not claim, and say where this graph actually meets y = 0.

**6. (explain why)** Explain what it means to say a graph is *increasing on an interval* and that it has a *turning point* at x = c, and explain why a turning point can never occur at a vertical asymptote.

---

## Answers

**1. a** — *A denominator zero gives a vertical asymptote only if it survives cancelling.* Factoring gives (x−2)(x+2)/((x−3)(x+2)); the (x+2) cancels, so x = −2 is a removable hole at height (−2−2)/(−2−3) = 4/5, and only x = 3 sends the function to ±∞. (b) reads the unfactored denominator; (c) confuses the zeros of the numerator (which give x-intercepts) with asymptotes; (d) over-generalises the cancellation — only the shared factor is removed, x = 3 is untouched.

**2. d** — *Which asymptote you get is decided by comparing degrees, not by taking a ratio automatically.* deg N = 3, deg D = 2, so the ratio 2/5 is not a horizontal asymptote; dividing gives f(x) = (2/5)x − (13/5)x/(5x² + 4), and the remainder term → 0, so the graph hugs the line y = (2/5)x. (a) is the equal-degrees rule misapplied; (b) is the deg N < deg D rule misapplied; (c) assumes that no vertical asymptote means no asymptotes, but end behaviour is a separate question.

**3. b** — *Symmetry is decided by computing f(−x), not by inspecting the powers.* f(−x) = −x³ + 1: compared with f(x) = x³ + 1 it is different, and compared with −f(x) = −x³ − 1 it is also different. (a) and (d) both assume symmetry is a property of the x-terms alone; in fact a vertical shift moves the centre of rotation away from the origin, and only functions with no constant term (and only odd powers) stay odd. (c) misstates the even condition, which is f(−x) = f(x) exactly.

**4. c** — *End behaviour is set by the leading term alone: parity of the degree plus the sign of the leading coefficient.* Here −2x⁴ dominates; x⁴ → +∞ at both ends, and multiplying by −2 sends both ends to −∞. (a) is the odd-degree pattern; (b) computes x⁴ correctly but drops the −2; (d) inverts the dominance — the constant is negligible for large |x|.

**5.** *Concept: a horizontal asymptote describes behaviour only as x → ±∞, and may be crossed.* The statement "y = 0 is a horizontal asymptote" means f(x) → 0 as x → +∞ and as x → −∞; it says nothing about what the graph does at finite x. Here 4x/(x² + 1) = 0 exactly when the numerator 4x = 0, i.e. at **x = 0**, so the graph passes straight through the asymptote at the origin, then rises, turns and settles back towards y = 0. (Contrast a vertical asymptote, which genuinely can never be crossed, because the function is undefined there.)

**6.** *Concept: increasing/decreasing and turning points are statements about x-intervals of points that lie on the graph.* f is increasing on an interval if, for any x₁ < x₂ in it, f(x₁) < f(x₂) — the graph rises from left to right; decreasing is the reverse. A turning point at x = c is a point (c, f(c)) **on the graph** where the behaviour switches from increasing to decreasing (local maximum) or from decreasing to increasing (local minimum). At a vertical asymptote x = a the function is **undefined**, so there is no point (a, f(a)) to be a turning point; the graph runs off to ±∞ there rather than turning back.
