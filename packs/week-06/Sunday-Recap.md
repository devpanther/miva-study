# Sunday Recap — Week 6

*Sunday 18 October 2026, 19:00–20:00. One hour total, not one hour each. Two topics: one his, one his partner's.*

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

## Fallback topic 1 — PHY_102: Why impedance and AC voltages add in quadrature, not arithmetically - and why V_L or V_C can exceed the supply voltage

**Why it tends to be misunderstood.** This is the topic that most reliably survives self-checking, because the wrong method produces a number that looks entirely respectable. A student who writes Z = R + X_L + X_C, or Vs = V_R + V_L + V_C, gets ohms and volts of a plausible size, with no division by zero, no negative root and no absurd magnitude to sound an alarm - so nothing in the answer itself reveals the error, and the student walks away believing the method works. Underneath it sit three separate confusions. First, students carry over the DC habit that 'in series, things add', without noticing that in DC the drops add because they all peak at the same instant, which is exactly the condition that fails here: V_R peaks with the current, V_L a quarter-cycle earlier and V_C a quarter-cycle later. Second, they treat reactance as a variety of resistance because it is quoted in ohms and does limit the current - which then makes it inexplicable why X_L and X_C should subtract from one another rather than add, since both of them 'oppose' the current. The resolution is that they oppose it a quarter-cycle apart and in opposite senses, so they are 180 degrees from each other and cancel. Third, and most tellingly, many students conclude that Kirchhoff's voltage law simply fails in AC circuits, because they can measure V_C = 160 V across a capacitor fed by a 100 V supply and see no way to reconcile it. KVL never fails: it holds instant by instant, and what is illegitimate is adding the amplitudes of quantities that never reach their maxima together. The belief survives because both the arithmetic and the vector method give the same answer in the one case students meet first - a purely resistive circuit, or one at resonance - so the error is invisible in precisely the examples used to introduce the topic.

**Five escalating "why" questions for the listener:**

1. Why is the voltage across a resistor in phase with the current through it, while the voltage across an inductor is not?
2. Why can you not simply add V_R, V_L and V_C to get the supply voltage, when Kirchhoff's voltage law says the drops around a loop must add up to it?
3. Why do X_L and X_C subtract from one another in the impedance formula rather than add, when both of them oppose the current and both are measured in ohms?
4. Why can the voltage measured across a capacitor be several times larger than the voltage of the source driving it, without any energy being created?
5. Why does a series RLC circuit draw the most real power exactly at the frequency where its two reactances cancel, given that neither reactance ever dissipated any power in the first place?

**What a good answer contains:**

- States the rule and its condition: quantities may be added arithmetically only if they reach their maxima at the same instant, which in a series RLC circuit only V_R does - so Vs = sqrt(V_R^2 + (V_L - V_C)^2) and Z = sqrt(R^2 + (X_L - X_C)^2), with tan(phi) = (X_L - X_C)/R.
- Explains the mechanism, not just the formula: with the common current as reference, V_L leads it by 90 degrees and V_C lags it by 90 degrees, so V_L and V_C are 180 degrees apart and directly oppose each other, which is why they subtract; V_R is at right angles to both, which is why the resultant is a Pythagorean sum rather than a straight one.
- Resolves the apparent paradox explicitly: KVL holds at every instant, so V_C larger than the supply is legal because when v_C is at its peak, v_L is at its opposite peak and v_R is passing through zero - the arithmetic sum corresponds to no instant that ever occurs - and reactances store and return energy rather than dissipating it, so the only power is I^2 R, maximised where Z is least, at resonance.

**Worked example.**

A series RLC circuit: R = 30 ohm, X_L = 40 ohm, X_C = 80 ohm, supply 100 V rms.

Step 1 - the wrong method, so the difference is visible. Arithmetic addition would give Z = 30 + 40 + 80 = 150 ohm and I = 100/150 = 0.67 A. Nothing about that answer looks wrong.

Step 2 - the net reactance. X = X_L - X_C = 40 - 80 = -40 ohm. It is negative, so the circuit is capacitive.

Step 3 - impedance in quadrature. Z = sqrt(R^2 + X^2) = sqrt(30^2 + 40^2) = sqrt(900 + 1600) = sqrt(2500) = 50 ohm - a third of the wrong answer.

Step 4 - the current, common to all three components. I = Vs/Z = 100/50 = 2.00 A.

Step 5 - the component voltages. V_R = I R = (2.00)(30) = 60 V; V_L = I X_L = (2.00)(40) = 80 V; V_C = I X_C = (2.00)(80) = 160 V.
Their arithmetic sum is 60 + 80 + 160 = 300 V - three times the supply, and describing an instant that never occurs.

Step 6 - the vector sum, which is what KVL actually requires. V_L - V_C = 80 - 160 = -80 V, so Vs = sqrt(V_R^2 + (V_L - V_C)^2) = sqrt(60^2 + 80^2) = sqrt(3600 + 6400) = sqrt(10000) = 100 V. Exactly the supply.
Note V_C = 160 V across the capacitor while the source is only 100 V. This is real and measurable, and it is legal: at the instant v_C reaches +160 V, v_L is at -160 V and v_R is passing through zero, so the sum at that instant is 0 V - and a quarter-cycle later v_R carries its full 60 V while the reactive pair sum to 40 V. At every instant the three add to the supply.

Step 7 - phase angle. tan(phi) = X/R = -40/30 = -1.333, so phi = -53.1 degrees: the current LEADS the supply voltage by 53.1 degrees, as a capacitive circuit must. Power factor cos(phi) = R/Z = 30/50 = 0.600 leading.

Step 8 - power, by two routes. P = Vs I cos(phi) = (100)(2.00)(0.600) = 120 W. Check: P = I^2 R = (2.00)^2(30) = 120 W. The two agree, and all 120 W is in the resistor; the inductor and the capacitor together dissipate nothing at all, merely passing energy back and forth (each of them handles I^2 X = 160 var and 320 var, which are volt-amperes reactive, not watts).

Step 9 - the resonance check. Raise the frequency until X_L = X_C. The net reactance vanishes, Z drops to R = 30 ohm - its smallest possible value - the current rises to 100/30 = 3.33 A, phi becomes 0, the power factor becomes 1, and the power rises to (3.33)^2(30) = 333 W. Nothing was 'unblocked': the cancellation of two oppositions that were already 180 degrees apart is what let the current through.

---

## Fallback topic 2 — COS_102: Loop conditions - where the test sits, and which values it lets through

**Why it tends to be misunderstood.** Every student can recite that WHILE tests at the top and REPEAT-UNTIL tests at the bottom, and almost none of them can use it, because the difference is invisible on the data they check their work with. A loop that is meant to run five times runs five times under either construct; the two versions separate only on the pass that would not have happened - the empty case, where a WHILE runs zero times and a REPEAT-UNTIL runs once anyway - and nobody traces the empty case unless taught to. The same blindness covers the boundary of the condition itself. A student who writes WHILE k < 30 when they meant k <= 30 loses exactly one value out of ten, and the output still looks like a list of multiples of three, so it passes the eye test that a syntactically broken fragment would fail. Underneath sit four specific beliefs. First, that UNTIL and WHILE are the same word: the student writes UNTIL count = 5 and reads it as 'keep going while count = 5', when UNTIL stops on true and WHILE continues on true, so the correct correspondence is UNTIL c = WHILE NOT c. Second, that the condition is a description of the loop's purpose rather than a test evaluated at one exact moment; a student who believes 'i <= 4' means 'four times' cannot answer what happens when i starts at 5, and cannot see that the same condition on a post-tested loop gives a different count. Third, that the body's order does not matter much - so the increment drifts out of the body, or the READ moves to the top of it, and the loop either never ends or silently drops its first value while still printing a plausible number. Fourth, that testing means running the happy path: the course's own worked solution ships an off-by-one, printing 'increase tuition' when exactly seven students pass, in a problem whose statement says more than seven, and the fault survived because seven is precisely the input nobody tries. The wrong beliefs survive self-checking because every one of them produces output of the right shape - a number, a list, a decision - and only the boundary case, the empty case and a written-out variable table can tell the right shape from the right answer.

**Five escalating "why" questions for the listener:**

1. Why can the body of a WHILE loop run zero times, while the body of a REPEAT-UNTIL always runs at least once?
2. Why does UNTIL count = 5 correspond to WHILE count <> 5, and not to WHILE count = 5?
3. Why does FOR k = 2 TO 8 run seven times and not six, and why does WHILE k < 30, starting at 3 and stepping by 3, print only nine multiples of 3 instead of ten?
4. Why is an off-by-one in a boundary condition almost never caught by testing a fragment, and what single test would catch it every time?
5. Why does converting a REPEAT-UNTIL that reads data into an equivalent WHILE force the READ to be written twice, and what exactly goes wrong in each of the two ways of writing it only once?

**What a good answer contains:**

- Names where each construct's test sits and what follows for the number of passes: FOR sets all its conditions at the beginning/top so the count is fixed before entry and equals b - a + 1 for FOR i = a TO b; WHILE sets some condition at the top, so the body runs zero or more times; REPEAT-UNTIL sets its condition at the ending/bottom, so the body runs one or more times - and states that UNTIL c is equivalent to WHILE NOT c, since UNTIL stops when its condition becomes true while WHILE continues while its condition is true.
- Traces rather than describes: writes out a table of every variable after every pass, including the pass on which the loop exits, and explicitly checks the empty case (the condition false on entry) and the boundary value (the input on which >= and > disagree), because those are the only two inputs on which a wrong loop and a right loop give different answers.
- States the two body rules that make a loop terminate and be correct: the body must change something the condition tests, or the loop never ends; and in a sentinel-controlled read-ahead the addition must come before the next READ, with one READ before the loop and one at the foot of the body, so that every value is tested before it is used and the sentinel is never counted as data.

**Worked example.**

ONE TASK, THREE LOOPS, AND THE CASES THAT SEPARATE THEM.
Task: add up the first n whole numbers and print the total, for n read from the user.

(A) FOR - the count is known before entry.
READ n
SET total TO 0
FOR i = 1 TO n
    SET total TO total + i
ENDFOR
PRINT total
With n = 4: i = 1, total = 1; i = 2, total = 3; i = 3, total = 6; i = 4, total = 10. Both bounds are inclusive, so the body runs n - 1 + 1 = n times and 10 is printed.
With n = 0: the bounds 1 TO 0 give 0 - 1 + 1 = 0 passes, the body never runs, and 0 is printed. This is the case that matters.

(B) WHILE - the same thing, tested at the top.
READ n
SET total TO 0
SET i TO 1
WHILE i <= n
    SET total TO total + i
    SET i TO i + 1
ENDWHILE
PRINT total
n = 4: pass 1 total = 1, i = 2; pass 2 total = 3, i = 3; pass 3 total = 6, i = 4; pass 4 total = 10, i = 5; now 5 <= 4 is false. Prints 10 - identical to (A).
n = 0: 1 <= 0 is false at once, the body never runs, prints 0 - still identical to (A).
Note the two things that make it work: the condition uses <= (with <, the last term 4 would be lost and the answer would be 6), and the body changes i, which is what the condition tests. Delete SET i TO i + 1 and the loop never ends.

(C) REPEAT-UNTIL - the same body, tested at the bottom.
READ n
SET total TO 0
SET i TO 1
REPEAT
    SET total TO total + i
    SET i TO i + 1
UNTIL i > n
PRINT total
n = 4: total = 1, i = 2; 2 > 4 false. total = 3, i = 3; false. total = 6, i = 4; false. total = 10, i = 5; 5 > 4 true, stop. Prints 10 - identical to (A) and (B).
n = 0: the body runs anyway, total = 1, i = 2, and 2 > 0 is true, so it stops - and prints 1, not 0. WRONG.
The three loops agree on every value of n except 0, the one case where the body should not run at all, and that is the whole of the difference between a pre-tested and a post-tested loop. Note also that the condition had to be inverted: WHILE i <= n became UNTIL i > n, because UNTIL stops on true.

THE BOUNDARY, IN THE COURSE'S OWN EXAMPLE.
The problem says the fee rises if MORE THAN seven students pass; the deck writes 'if seven or more students passed'.
passes:      5      6      7      8      9
passes > 7:  no     no     no     yes    yes     <- the specification
passes >= 7: no     no     YES    yes    yes     <- the deck
They differ on exactly one input, passes = 7. Test with a class of 5, or 9, or 10 and the two versions agree, which is why the fault shipped. The rule this gives: whenever a condition contains a comparison, the test data must include the value the comparison is about, one below it and one above it.

THE READ-AHEAD, WHICH IS THE SAME PROBLEM ONE LEVEL UP.
REPEAT / READ n / SET t TO t + n / UNTIL n = 0 becomes, as a WHILE:
SET t TO 0
READ n
WHILE n <> 0
    SET t TO t + n
    READ n
ENDWHILE
PRINT t
On 5, 8, 3, 0 both print 16. Now write the READ only once and both ways fail. Put it only inside, at the top of the body (WHILE n <> 0 { READ n; SET t TO t + n }): the first test reads an n that has no value, and the first number typed is overwritten before it is added, so 5 is lost and the total is 11. Put it only before the loop: n never changes, the loop never ends. The READ appears twice because a pre-tested loop must have a value to test before its first pass and a fresh value to test before every pass after it.
