# Sunday Recap — Week 7

*Sunday 25 October 2026, 19:00–20:00. One hour total, not one hour each. Two topics: one his, one his partner's.*

## How the topic gets picked

**Your lowest nightly-check score of the week decides it.** Six checks (Mon MTH, Tue PHY, Wed COS, Thu MTH-problems, Fri PHY-problems, Sat COS-code), **twelve out of twelve each**. Whichever you scored lowest on is the topic you teach, no notes.

**You take the same eight courses, so do not both pick the same course.** Whoever scored lower on that course keeps it; the other person moves to their next-lowest score in a *different* course. Settle this in Friday's review hour, not at 19:00 on Sunday.

The two topics below are **fallbacks only** — use them if the scores tie, or if the checks got skipped and there is no score to go on.

```
19:00  he teaches (10 min)      19:10  partner asks "why" until it breaks (5 min)
19:15  partner teaches (10)     19:25  he asks "why" (5 min)
19:30  close both gaps together (20 min)    19:50  slack
```

---

## Fallback topic 1 — MTH_102: Integrating a composite function: why you may divide by the inner derivative only when the inner function is linear, and what substitution actually requires

**Why it tends to be misunderstood.** This is the week's deepest trap because the wrong method is a faithful copy of a right one. Students meet (integral of (2x + 5)^3 dx) = (2x + 5)^4/8 + C early, notice that the divisor is the new power times the inner derivative, and store the pattern 'integrate the bracket, divide by the power and by the derivative of the inside'. Applied to (x^2 + 5)^3 that pattern produces (x^2 + 5)^4/(8x), which looks structurally identical, has the right degree of bracket, and shows no symptom of being wrong - no division by zero, no missing domain, nothing absurd. What has actually happened is that a function of x has been dragged through the integral sign as though it were a constant. Constants can be moved in and out of an integral because integration is linear in constant multiples; 2x cannot, because integration has no rule that lets a variable factor cross the integral sign, and dividing by 2x is exactly that move. The belief survives self-checking for three reasons. First, students check integrals by looking at them rather than by differentiating them, and this one looks fine; differentiate it and the quotient rule immediately produces a term that has no counterpart in the integrand. Second, the correct linear case and the false general case agree on structure but differ on a fact students do not consciously hold - that the chain rule multiplied by a factor which can only be undone by division when that factor is constant. Third, the neighbouring integral (integral of x(x^2 + 5)^3 dx) does work by substitution, and works out to almost the same expression, so a student who has done both remembers 'brackets to a power come out as bracket-to-the-next-power over something' and cannot recall which cases needed the stray x in front. The underlying confusion is about what substitution requires: not that the integrand contain a bracket, but that the inner derivative already be present in the integrand up to a constant multiple, so that dx can be exchanged for du with nothing in x left over. When it is not present, no substitution exists, and the integral must be expanded, rewritten, or (later in the syllabus) attacked by a different technique altogether.

**Five escalating "why" questions for the listener:**

1. Why does the integral of (2x + 3)^5 dx come out as (2x + 3)^6/12 rather than (2x + 3)^6/6 - where does the 2 in the divisor come from?
2. Why is exactly the same move illegal for the integral of (x^2 + 3)^5 dx, when the two integrands look structurally identical?
3. Why does substitution work at all - what is the line du = g'(x) dx actually saying about the chain rule run backwards?
4. Why can the integral of x(x^2 + 1)^3 dx be done by substitution while the integral of (x^2 + 1)^3 dx cannot, even though the second one looks simpler?
5. Why, when you substitute in a definite integral, may you either change the limits to u-values or convert the antiderivative back to x - but never evaluate the u-antiderivative at the original x-limits?

**What a good answer contains:**

- States the rule with its condition: you may divide by the inner derivative only when that derivative is a constant, because only constant multiples may cross an integral sign - a variable factor such as 2x cannot be moved through, and dividing by it is precisely that illegal move.
- Explains what substitution genuinely requires and why: u = g(x) forces du = g'(x) dx, so the integrand must already contain g'(x) up to a constant multiple, leaving nothing in x behind once dx is exchanged for du; substitution is the chain rule read backwards, and a missing inner derivative means there is no chain-rule product to reverse.
- Gives the diagnostic and the fallback: every integral is checked by differentiating the answer - the false form fails visibly because differentiating a quotient produces an extra term - and when substitution is unavailable the honest routes are to expand the bracket, rewrite the integrand, or use a technique introduced later.

**Worked example.**

(1) The case that works. Integral of (2x + 5)^3 dx.
The inner function 2x + 5 is linear, so its derivative is the constant 2. Substituting u = 2x + 5 gives du = 2 dx, i.e. dx = du/2, so the integral becomes (1/2) integral of u^3 du = u^4/8 = (2x + 5)^4/8 + C.
Check by differentiating: 4(2x + 5)^3 (2)/8 = (2x + 5)^3. Correct.

(2) The same move on a non-linear inner function. Integral of (x^2 + 5)^3 dx.
Copying the pattern gives (x^2 + 5)^4/(4 x 2x) = (x^2 + 5)^4/(8x). Differentiate it and it fails, because the expression is now a quotient:
d/dx[(x^2 + 5)^4/(8x)] = [4(x^2 + 5)^3 (2x)(8x) - (x^2 + 5)^4 (8)]/(64x^2)
= 8(x^2 + 5)^3 [8x^2 - (x^2 + 5)]/(64x^2)
= (x^2 + 5)^3 (7x^2 - 5)/(8x^2),
which is not (x^2 + 5)^3. At x = 1 the integrand is 6^3 = 216 while this gives 216 x 2/8 = 54 - out by a factor of 4, and the discrepancy varies with x, so no constant of integration can repair it.

(3) Why the two cases differ. In (1) the factor being divided out is the number 2, and constants may cross an integral sign freely. In (2) the factor is 2x, a function of x, and nothing in the rules of integration permits a variable factor to be taken outside; writing /(8x) does exactly that.

(4) The case substitution does handle. Integral of x(x^2 + 5)^3 dx.
u = x^2 + 5, du = 2x dx, so x dx = du/2 and the integral is (1/2) integral of u^3 du = u^4/8 = (x^2 + 5)^4/8 + C.
Check: 4(x^2 + 5)^3 (2x)/8 = x(x^2 + 5)^3. Correct. The only difference from (2) is the x standing in front - which is the inner derivative up to the constant 1/2, and is exactly what substitution consumes.

(5) So the correct route for (2) is to expand.
(x^2 + 5)^3 = x^6 + 15x^4 + 75x^2 + 125, so the integral is x^7/7 + 3x^5 + 25x^3 + 125x + C.
Check by differentiating: x^6 + 15x^4 + 75x^2 + 125. Correct.

(6) The definite version, limits changed with the substitution. Integral from 0 to 1 of x(x^2 + 5)^3 dx.
u = x^2 + 5 runs from u = 5 to u = 6, so the value is (1/2)[u^4/4] from 5 to 6 = (1296 - 625)/8 = 671/8.
The same by converting back: (x^2 + 5)^4/8 from 0 to 1 = (6^4 - 5^4)/8 = 671/8. Evaluating u^4/8 at the x-limits 0 and 1 would have given (1 - 0)/8 = 1/8, which is the standard wrong answer.

---

## Fallback topic 2 — PHY_102: Why a reactance carries current and voltage yet consumes no power - the power factor cos(phi), and why the slide's 'P = V*I*sin(theta)' is reactive power in var, not power consumed in watts

**Why it tends to be misunderstood.** Every student can write P = V*I*cos(phi) within a minute of seeing it, and that fluency is exactly the problem: the formula is memorised as a rule for decorating an answer with an extra factor, not as the statement that only the in-phase part of the current does any work. What the student actually believes is that power is 'voltage times current, adjusted a bit', so cos(phi) becomes an efficiency-like fudge somewhere between 0 and 1 rather than a projection. Three things follow. First, a pure inductor or capacitor is felt to consume 'a little' power, because it plainly has volts across it and amps through it, and the idea that a large voltage times a large current can average to exactly zero looks like a trick; the student cannot say what happens to the energy, and 'it is returned to the source' sounds like a slogan rather than a quarter-cycle-by-quarter-cycle account. Second, the deck's own slide actively teaches the error: it says that in a purely reactive circuit 'the power can be calculated using P = V*I*sin(theta)', which for theta = 90 degrees returns the entire apparent power as though it were consumed, and two slides later says that 'reactances do not dissipate energy'. A student who reads both without noticing the contradiction ends up holding both, and will use whichever the question seems to invite. Third, the misunderstanding survives self-checking because the arithmetic never protests. V*I*sin(phi) is a perfectly real number with the right order of magnitude, and calling it watts instead of var breaks nothing on the page; the units are the only thing that would have caught it, and units are exactly what gets dropped. It also survives because the two safe cross-checks - that P must equal I^2 R, and that S^2 = P^2 + Q^2 - are almost never run. Run either one and the error is instant: with R = 0, I^2 R is zero however large V*I*sin(phi) may be. The underlying repair is to stop reading cos(phi) as a discount and start reading it as the fraction of the current that is in phase with the voltage, with everything in quadrature being borrowed and repaid every cycle.

**Five escalating "why" questions for the listener:**

1. Why is the average power in an AC circuit Vrms*Irms*cos(phi) rather than simply Vrms*Irms?
2. Why does an ideal inductor, which clearly carries a large current and has a large voltage across it, dissipate no average power at all?
3. Why does the instantaneous power oscillate at twice the supply frequency, and why does it dip below zero in every circuit that has any net reactance but never in a purely resistive one?
4. Why is the slide's 'P = V*I*sin(theta) for a purely reactive circuit' not the power consumed, what quantity is it, and what units should it carry?
5. Why do the three powers combine as S^2 = P^2 + Q^2 rather than S = P + Q, and why does that force a supplier to size its cables and transformers by S while billing only for P?

**What a good answer contains:**

- States the mechanism, not the formula: p(t) = v(t)i(t) expands to (V0*I0/2)[cos(phi) - cos(2wt - phi)], a constant plus a 2w ripple whose average over a whole cycle is exactly zero, so the entire average power is the constant term Vrms*Irms*cos(phi) - and cos(phi) is the fraction of the current in phase with the voltage, not a discount factor.
- Accounts for the energy in a reactance quarter-cycle by quarter-cycle: the source pours up to (1/2)L*I0^2 into the magnetic field (or (1/2)C*V0^2 into the electric field) and gets all of it back in the next quarter-cycle, so the positive and negative areas of p(t) cancel exactly and P = 0, while P = Irms^2 R shows that only the resistance ever dissipates.
- Names the three quantities with their units and separates them: P = V*I*cos(phi) in watts is consumed, Q = V*I*sin(phi) in var is borrowed and returned, S = V*I in VA is what the conductors carry, they combine in quadrature as S^2 = P^2 + Q^2, and the slide's V*I*sin(theta) is Q - checkable in one line because P must equal Irms^2 R, which is zero whenever R is zero.

**Worked example.**

A 240 V rms, 50 Hz supply feeds a coil of resistance R = 30 ohm and inductive reactance X_L = 40 ohm.

Step 1 - impedance and current.
Z = sqrt(R^2 + X_L^2) = sqrt(900 + 1600) = sqrt(2500) = 50.0 ohm.
I = V/Z = 240/50.0 = 4.80 A rms.

Step 2 - power factor.
cos(phi) = R/Z = 30/50 = 0.600 lagging, so phi = 53.1 degrees, the current lagging the voltage.

Step 3 - the three powers, each computed twice.
P = V*I*cos(phi) = (240)(4.80)(0.600) = 691.2 W; check P = I^2 R = (23.04)(30) = 691.2 W.
Q = V*I*sin(phi) = (240)(4.80)(0.800) = 921.6 var; check Q = I^2 X_L = (23.04)(40) = 921.6 var.
S = V*I = (240)(4.80) = 1152 VA; check S = I^2 Z = (23.04)(50) = 1152 VA.
Triangle: P^2 + Q^2 = 691.2^2 + 921.6^2 = 477757.4 + 849346.6 = 1327104 = 1152^2. Correct.
Note the coil is dissipating 691.2 W while 921.6 var shuttles in and out of its magnetic field, and the cable must carry the whole 1152 VA.

Step 4 - now delete the resistance and see the misunderstanding fail.
Take the pure inductor, X_L = 40 ohm, alone on the same 240 V supply. Then I = 240/40 = 6.00 A rms and theta = 90 degrees.
The slide's rule gives 'P' = V*I*sin(theta) = (240)(6.00)(1) = 1440.
The correct rule gives P = V*I*cos(theta) = (240)(6.00)(0) = 0 W.
The check settles it: P = I^2 R = (36.0)(0) = 0 W. A wattmeter in this circuit reads zero, while an ammeter reads 6.00 A and a voltmeter reads 240 V.
The number 1440 is real, but it is Q = 1440 var - the rate at which energy is exchanged with the magnetic field, not consumed. Its peak store is (1/2)L*I0^2 with I0 = sqrt2 (6.00) = 8.49 A and L = X_L/w = 40/314.16 = 0.1273 H, giving (0.5)(0.1273)(72.0) = 4.58 J, taken from the source each quarter-cycle and returned in the next.

Step 5 - the moral.
Adding a resistance changes P from 0 to 691.2 W; changing the reactance changes only Q. Whenever a computed 'power' does not equal Irms^2 R, what has been computed is S or Q, not P.
