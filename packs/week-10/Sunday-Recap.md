# Sunday Recap — Week 10

*Sunday 15 November 2026, 19:00–20:00. One hour total, not one hour each. Two topics: one his, one his partner's.*

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

## Fallback topic 1 — COS_102: A recursive call does not restart the function and does not reuse its variables: it suspends the calling frame, which keeps its own copy of the parameters and holds the operation written around the call pending until that call returns, so the answer is assembled on the way back up through the stack - and a recursion that never lands exactly on its base case therefore fails by exhausting stack space rather than by looping forever.

**Why it tends to be misunderstood.** The picture students bring to recursion is the loop: one set of variables, updated in place, going round again. Every word of the deck reads through that picture without obvious contradiction - 'a function calls itself' sounds exactly like 'go back to the top' - so the model is never challenged, and the deck's own table reinforces it by saying recursive functions have no local variables, which invites the reading that recursion stores nothing. Two consequences follow, and both cost marks. First, tracing collapses. If there is only one n, then by the time the base case is reached n is 1, and the student cannot say how factorial(4) ever multiplies by 4, or why a printf written after the recursive call prints in ascending order; pending operations are invisible in the loop picture, because a loop has none. Second, termination is misdiagnosed. 'A recursive function needs a base case' is learnt as a checklist item, and only its presence is checked, not whether every call can land on it - so f(n - 2) with a base case at n == 0 passes inspection and runs forever on odd input. The error survives self-checking because the small cases work: factorial(3) and a four-element array sum come out right whether or not the student can say what is on the stack. It surfaces only where the marks are, and the answer given there is confident and wrong.

**Five escalating "why" questions for the listener:**

1. Why does a recursive call create a new frame with a new copy of n, rather than reusing the variables of the call that is already running?
2. Why, then, can factorial(4) still multiply by 4 when the base case has already reduced the argument to 1 - where was the 4 kept in the meantime?
3. Why does code written after the recursive call run in the reverse of the call order, while code written before it runs in the call order?
4. Why is having a base case necessary but not sufficient for termination, and what exactly is the extra condition that f(n - 2) with a base case at n == 0 fails to meet for odd n?
5. Why does an unbounded recursion die within a fraction of a second with a crash, while an unbounded while loop runs indefinitely without one - and what does that difference tell you about where recursion's real cost lies?

**What a good answer contains:**

- It must say that every call - recursive or not - gets its own stack frame with its own copy of the parameters and locals, that the caller's frame is suspended rather than replaced, and that it resumes at the point immediately after the call with all of its own values intact.
- It must name the pending operation: the work written around the recursive call cannot be performed until that call returns, which is why the frame must stay alive, why n frames are live at the deepest point of factorial(n), and why statements written after the recursive call execute on the way back up in the reverse of the call order.
- It must state that termination requires a base case that returns without recursing AND a recursive call that moves the argument to a value which actually lands on it, and that failing this the frames accumulate until the stack is exhausted - a crash on space, not a hang on time.

**Worked example.**

Trace factorial(4) written recursively as: int factorial(int n) { if (n <= 1) return 1; return n * factorial(n - 1); }
Step 1. main calls factorial(4). A frame is created holding n = 4. The test 4 <= 1 is false, so the recursive case runs: to evaluate n * factorial(n - 1), C must first obtain the value of factorial(3). The multiplication by 4 is therefore PENDING, and this frame cannot be discarded - it is holding both the 4 and the note of where to resume.
Step 2. factorial(3) gets its OWN frame with its own n = 3. It has no access to the 4 and does not need it. The test fails again, so 3 * factorial(2) is pending here.
Step 3. factorial(2) gets a frame with n = 2; 2 * factorial(1) is pending.
Step 4. factorial(1) gets a frame with n = 1. Now 1 <= 1 is true, so the base case returns 1 without recursing. At this instant FOUR frames are alive, holding n = 4, 3, 2 and 1, and three multiplications are waiting.
Step 5. The unwinding. factorial(1) returns 1 and its frame is discarded. Control resumes in the frame where n = 2, just after the call, and that frame now performs its pending multiplication: 2 * 1 = 2, returns 2, and disappears.
Step 6. The frame where n = 3 resumes and computes 3 * 2 = 6.
Step 7. The frame where n = 4 resumes and computes 4 * 6 = 24, which is returned to main. Note that the 4 was available in step 7 because that frame had kept its own copy of n untouched throughout - nothing the deeper calls did to their n's could reach it.
The wrong approach: a student holding the loop picture reasons that there is one n, that the recursion 'goes back to the top' reducing n each time, and that when n reaches 1 the function returns 1 - so factorial(4) returns 1. Asked to repair that, the same student adds a variable to 'remember the product', which is the iterative solution smuggled back in, and still cannot explain where the 4 lived. The same wrong model produces the second classic error: given void f(int n) { if (n == 0) return; printf("%d ", n); f(n - 1); printf("%d ", n); } the student predicts 3 2 1, because in the loop picture there is nothing left to come back to. The true output is 3 2 1 1 2 3 - the second printf of every frame is a pending operation, performed on the way back up in the reverse of the call order. And the third: change the base case to if (n == 0) return 1; in factorial and call factorial(0); the loop picture predicts a harmless 1, while a step of n - 1 from 0 gives -1, -2, -3, ... - the base case is never reached, a new frame is taken every time, and the programme is killed by a stack overflow in well under a second. Each of the three errors is the same error: treating a recursive call as a jump rather than as a call that must return.

---

## Fallback topic 2 — PHY_102: An emf is induced by the RATE OF CHANGE of magnetic flux and by nothing else, so relative motion between a conductor and a field is neither necessary nor sufficient: a completely stationary coil inside a solenoid whose current is rising has an emf, while a loop moving at constant velocity entirely inside a uniform field has none.

**Why it tends to be misunderstood.** The confusion is planted by the way induction is first taught and, this week, by the deck itself, which states flatly that 'for Faraday's law to hold true there must be movement between the coil and the magnetic field' and then two slides later describes a transformer, a device with no moving part anywhere in it. Every introductory demonstration involves a magnet being waggled in and out of a coil, so students encode the cause as MOTION, reinforced by the phrase 'cutting field lines', which is a serviceable mnemonic for a rod on rails and a disastrous one for anything else. Three separate errors then follow. First, students look for something moving before they will admit an emf, and so cannot explain the transformer, the induction hob or the changing-current coil. Second, they assume that motion guarantees an emf, and confidently produce a non-zero answer for a loop translating inside a large uniform field, where B, A and theta are all constant and the flux never changes. Third, and most damaging in numerical work, they substitute the field or the flux itself into Faraday's law instead of its rate of change, producing an emf for a coil sitting in a strong steady field. The cure is to make Phi = B*A*cos(theta) the object of attention and to ask, every single time, which of B, A or theta is changing - and how fast.

**Five escalating "why" questions for the listener:**

1. Why is there an emf at all when a magnet is pushed towards a coil - what physical quantity has changed?
2. Why does the emf depend on the rate of change of that quantity rather than on how much of it there is, so that a coil in the strongest steady field in the world produces nothing?
3. Why, then, does a transformer work, when nothing in it moves at all - and what is it that changes there?
4. Why does a loop moving at constant velocity entirely inside a large uniform field produce no emf, even though it is obviously in motion relative to the field?
5. Why, if motion is neither necessary nor sufficient, does the 'cutting field lines' picture still give the right answer for a rod sliding on rails - and what is the single criterion that covers every case at once?

**What a good answer contains:**

- The induced emf is emf = -N d(Phi)/dt, so what induces is a CHANGING magnetic flux Phi = B*A*cos(theta), and the flux can be changed in exactly three ways: by changing B, by changing the enclosed area A, or by changing the orientation theta.
- Relative motion is therefore only one route to a changing flux and is neither necessary (a transformer's stationary secondary has an emf because the core flux changes) nor sufficient (a loop translating inside a uniform field has constant B, A and theta, so d(Phi)/dt = 0 and the emf is exactly zero).
- The 'cutting field lines' picture works for a sliding rod only because sweeping the rod changes the enclosed AREA, which is a special case of the general criterion: an emf appears in a circuit if and only if the flux linking that circuit is changing with time.

**Worked example.**

Four situations, all with the same coil: 200 turns, area 4.0 x 10^-3 m^2. Decide in each case whether there is an emf, and how big.
Step 1. Coil at rest, plane perpendicular to a steady 0.80 T field. Phi = B*A*cos(0) = 0.80 x 4.0 x 10^-3 = 3.2 x 10^-3 Wb, and the flux linkage is 0.64 Wb. Is there an emf? NO: d(Phi)/dt = 0. The WRONG APPROACH here is to substitute the flux, or the field, into Faraday's law and report emf = N*Phi/t or N*B*A = 0.64 V; that is a flux linkage in webers, not a voltage, and a large steady flux induces nothing whatever.
Step 2. Same coil, still completely at rest, now inside a solenoid whose field rises steadily from 0 to 0.80 T in 0.40 s. Nothing moves. d(Phi)/dt = A*dB/dt = 4.0 x 10^-3 x (0.80/0.40) = 8.0 x 10^-3 Wb/s, so emf = N*d(Phi)/dt = 200 x 8.0 x 10^-3 = 1.6 V. The WRONG APPROACH is to answer 'zero, because nothing is moving' - this is the deck's own error, and it would abolish the transformer.
Step 3. Same coil, in a large region of uniform 0.80 T field, translated bodily at 3.0 m/s with its plane perpendicular to B and remaining entirely inside the field region. B is the same everywhere, A is fixed, theta is fixed, so Phi stays at 3.2 x 10^-3 Wb and d(Phi)/dt = 0: the emf is ZERO. The WRONG APPROACH is to reach for emf = B*L*v and report 0.80 x 0.063 x 3.0 = 0.15 V; B*L*v applies only when the swept area actually changes the flux, which happens when the loop straddles the BOUNDARY of the field region, not when it is wholly inside it.
Step 4. Same coil, rotated from face-on to edge-on in 0.20 s in the steady 0.80 T field. The flux goes from B*A*cos(0) = 3.2 x 10^-3 Wb to B*A*cos(90) = 0, so the change in flux linkage is 0.64 Wb and the average emf is 0.64/0.20 = 3.2 V. The WRONG APPROACH is to take the angle from the PLANE rather than the normal, which swaps the two orientations and gives a flux change of zero.
Conclusion: the two cases with motion gave 0 V and 3.2 V, and the case with nothing moving at all gave 1.6 V. Motion is not the criterion; d(Phi)/dt is.
