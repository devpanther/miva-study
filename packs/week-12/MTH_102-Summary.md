# MTH_102 — Week 12 Summary

*Elementary Mathematics II (Calculus) · Topic: Integration — Application of Integration to Real-Life Problems · Lecturer: not named on this deck's title slide (MTH_102 is taught by Danjuma Rose Uwanassara, MSc Mathematics)*

**Scope note:** this rewrite follows the deck slide-for-slide. The lecturer teaches **five application areas with seven worked examples and nothing else**: kinematics (2 examples), fluid force (1), work and energy (1), marginal analysis (3), environmental science (1). Every one is a definite or indefinite integral of a polynomial, a square root, or e^(kt), evaluated by the rules of Weeks 7–11. She does **NOT** cover: total distance as ∫|v|dt or splitting at the zeros of v; springs, Hooke's law or W = ½kx²; the centroid shortcut F = ρg·h̄·A; average value of a function; marginal *cost* or fixed cost; profit maximisation at MR = MC; total surplus as an efficiency measure; population growth models P = P₀e^(kt); pharmacokinetics, MRI/CT imaging, or electric and magnetic fields. Those last few are **named** in her written week-summary as places integration is used, but no formula and no example is given for any of them, so they cannot be computed in an exam. Learn her seven examples cold — the numbers in them are the exam.

## The 9 most examinable things this week

1. **Integrate a rate over an interval and you get the total accumulated over that interval** (slide 4). Velocity is the rate of change of position, so ∫₀⁵ v(t)dt is the distance the car covers in those five hours — not v(5), which is only how fast it is going at the end.
2. **An indefinite integral needs one piece of given data to pin the constant** (slide 5). x(t) = ∫v(t)dt = 2t³ − 3t² − 12t + C is a family; "its initial displacement is −4 m" means x(0) = −4, which forces **C = −4**.
3. **A definite integral has no constant at all, because it cancels** (slide 6). She computes the net displacement as ∫₀⁵(6t² − 6t − 12)dt = [2t³ − 3t² − 12t]₀⁵ — note the −4 is simply gone. Net displacement is a *change*, so it does not care where you put the origin.
4. **Fluid force formula (slide 7):** **F = ∫ₐᵇ w·h(x)·L(x) dx**, where **w = ρg** is the weight density of water, **h(x)** is the depth of the strip at position x, and **L(x)** is the width of the face at that strip. For water, **w = ρg = (1000)(9.8) = 9800**.
5. **Work by a variable force (slide 8):** **W = ∫ₐᵇ F(x)dx**. The examinable half of this is *building* F(x) before you integrate: for the rope, weight = mass × g and the hanging mass shrinks as you pull, giving F(x) = 9.8(0.066)(60 − x).
6. **Total revenue is the integral of marginal revenue (slide 9):** **TR(Q) = ∫MR(Q)dQ**, and the constant is fixed by whatever revenue value she gives you — here TR(2) = 260 forces C = 12.
7. **Capital growth is the integral of the rate of investment over the stated years (slide 10):** **K = ∫ₐᵇ I(t)dt**. Rewrite √t as t^(1/2) before integrating.
8. **Surplus: solve for equilibrium first, then integrate from 0 to Q₀ (slides 11–12).** Set **D(Q) = S(Q)**, take the positive root as Q₀, substitute back for P₀. Then **CS = ∫₀^Q₀ [D(Q) − P₀]dQ** and **PS = ∫₀^Q₀ [P₀ − S(Q)]dQ**.
9. **Accumulation model plus a log step (slides 13–14).** Given a rate C′(t), get C(t) = ∫C′(t)dt + c, use the "nothing consumed yet" condition C(0) = 0 to find c, then set C(t) equal to the stock and solve with **t = ln(...)/k**.

## Kinematics — her build

### Example 1 (slide 4) — integrate a velocity, get a distance

**"Find the distance travelled by car with a velocity v(t) = 2t² + 6t + 1, where t is in hours and v is in kmh⁻¹ for the first 5 hours."**

Solution. "The distance travelled is given by"

x(t) = ∫₀⁵ v(t)dt = ∫₀⁵ (2t² + 6t + 1)dt = [2t³/3 + 3t² + t]₀⁵

= ([2(5)³/3 + 3(5)² + 5] − [2(0)³/3 + 3(0)² + 0]) = **163.3 km**

Line by line: 2(125)/3 = 250/3 = 83.33, plus 3(25) = 75, plus 5, giving 163.33, which she rounds to 163.3. The lower limit contributes nothing because every term of the antiderivative vanishes at t = 0 — but **write the bracket out anyway**, as she does; it is the habit that stops you forgetting it when the lower limit is not 0.

*Aside (not on the slide): calling this "distance" is safe **here** only because v(t) = 2t² + 6t + 1 is positive for every t in [0, 5], so the car never reverses. She does not make the distance/displacement distinction anywhere in this deck and does not set a problem that needs it.*

### Example 2 (slides 5–6) — an initial condition, then a definite integral

**"A body is moving with a velocity v(t) = 6t² − 6t − 12 in m/s. Its initial displacement is −4 m.**
**a) Find its displacement function x(t).**
**b) What is the displacement of the object at t = 3?**
**c) Find the net displacement of the object in the first 5 seconds."**

**a)** "Displacement,"

x(t) = ∫(6t² − 6t − 12)dt = **2t³ − 3t² − 12t + C**

"Given that x(0) = −4, we have C = −4, so that"

**x(t) = 2t³ − 3t² − 12t − 4.**

Substituting t = 0 kills the first three terms, so x(0) = C, and the given value is read straight off. Note the coefficients: 6/3 = 2, 6/2 = 3, and 12 integrates to 12t.

**b)** "Substituting t = 3 into the displacement function, we have"

x(3) = 2(3)³ − 3(3)² − 12(3) − 4 = 54 − 27 − 36 − 4 = **−13 m**

A negative displacement is fine — it means the body is 13 m on the negative side of the origin, having started 4 m on the negative side.

**c)** (slide 6) "The net displacement after 5 seconds is given by"

x(t) = ∫₀⁵ (6t² − 6t − 12)dt = [2t³ − 3t² − 12t]₀⁵

= [2(5)³ − 3(5)² − 12(5) − (2(0)³ − 3(0)² − 12(0))] = **115 m**

= 250 − 75 − 60 = 115.

**The single most instructive thing in the whole deck is that the −4 disappeared here.** Part (a) needed it; part (c) does not, because the constant cancels: (F(5) + C) − (F(0) + C) = F(5) − F(0). If you carry the −4 in and only subtract once you get 111, which is x(5), the body's *position* after 5 seconds, not the *change* in its position. Both are meaningful numbers; only one answers the question asked.

*Aside (not on the slide): v(t) = 6(t − 2)(t + 1) is negative on (0, 2) and positive on (2, 5), so the body goes backwards 20 m and then forwards 135 m. The net 115 m is the sum of the signed pieces. The **total distance** would be 20 + 135 = 155 m — she neither asks for it nor teaches how to get it, so treat 155 as background, not as syllabus.*

## Fluid force — her build

### Example 1 (slide 7) — a rectangular dam

**"Find the total fluid force exerted on the face of a rectangular dam whose height and width are 100 m and 300 m respectively. Assume the top of the dam is level with the water surface."**

Solution. "Let h(x) be the height of the dam at a point x and L(x) be the width of the dam. The weight density of water is given by"

**w = ρg = (1000)(9.8) = 9800 N/m²**

"Using the fluid force formula, we have"

F = ∫ₐᵇ w·h(x)·L(x)dx = ∫₀¹⁰⁰ (9800)(x)(300)dx

= 2.94 × 10⁶ ∫₀¹⁰⁰ x dx = 2.94 × 10⁶ [x²/2]₀¹⁰⁰ = **1.47 × 10¹⁰ N**

How the numbers land: 9800 × 300 = 2 940 000 = 2.94 × 10⁶, pulled out front as a constant. [x²/2]₀¹⁰⁰ = 10000/2 = 5000. Then 2.94 × 10⁶ × 5000 = 1.47 × 10¹⁰.

**Two things to say plainly about this slide.**

1. **The unit is misprinted.** Weight density ρg has units of newtons per cubic metre, **N/m³**, not N/m². (kg/m³ × m/s² = N/m³.) The number 9800 is correct; the printed unit is not. Quote the number, correct the unit.
2. **"Height" here means depth.** In the integral she uses h(x) = x measured downward from the water surface, which is a *depth*, not a height above the base. It works out because the top of the dam is level with the surface, so depth runs cleanly from 0 to 100. The reason the integral is needed at all is that this depth — and therefore the pressure — **increases as you go down**, so you cannot multiply one pressure by the whole area. The strip of width L(x) at depth x has essentially constant pressure w·x on it; integrating adds the strips up.

## Work and energy — her build

### Example 1 (slide 8) — the hanging rope

**"A 60 m climbing rope is hanging over the side of a tall cliff. How much work is done in pulling the rope up to the top, where the rope has a mass of 66 g/m?"**

Solution, in her order:
- "First, we obtain the force function F(x). Assume the rope is pulled x m."
- "Then the amount of rope still hanging is (60 − x) m."
- "Since mass of rope is 66 g/m = 0.066 kg/m, then the mass of rope still hanging is 0.066(60 − x) kg."
- "Since g = 9.8 m/s², then the force function, F(x) = 9.8(0.066)(60 − x) = **0.6468(60 − x)**."
- "Hence, the total work done in pulling up the rope is"

W = ∫₀⁶⁰ F(x)dx = ∫₀⁶⁰ 0.6468(60 − x)dx

= [0.6468(60x − x²/2)]₀⁶⁰ = **1,164.24 J**

Arithmetic: 60(60) − 60²/2 = 3600 − 1800 = 1800, and 0.6468 × 1800 = 1164.24.

Three examinable moves, in order: **convert the units** (66 g/m becomes 0.066 kg/m, or every subsequent number is 1000 times too big); **weight = mass × g**, which is where 9.8 enters; and **the length still hanging is 60 − x, not x and not 60**. The force starts at 0.6468(60) = 38.8 N and falls to 0 as the last of the rope comes over the edge, which is exactly why W = F × d is unavailable and an integral is required.

## Marginal analysis — her build

### Example 1 (slide 9) — total revenue from marginal revenue

**"The marginal revenue of a company is given by MR = 100 + 20Q + 3Q², where Q is the amount of units sold for a period. Find the total revenue function if at Q = 2, it is equal to 260."**

Solution. "The total revenue function is given by"

TR(Q) = ∫MR(Q)dQ = ∫(100 + 20Q + 3Q²)dQ = **100Q + 10Q² + Q³ + C**

"Given that TR(2) = 260, we have C = 12, so that the total revenue function"

**TR(Q) = 100Q + 10Q² + Q³ + 12**

The step she compresses: TR(2) = 100(2) + 10(4) + 8 + C = 200 + 40 + 8 + C = 248 + C, and 248 + C = 260 gives C = 12. Do that line explicitly in an exam. Note the coefficients halve and third: 20Q → 20Q²/2 = 10Q², and 3Q² → 3Q³/3 = Q³.

### Example 2 (slide 10) — capital growth from a rate of investment

**"The rate of investment is given by I(t) = 6√t. Calculate the capital growth between the 4th and the 9th years."**

Solution. "The capital growth is given by"

K = ∫ₐᵇ I(t)dt = ∫₄⁹ 6√t dt = 6∫₄⁹ t^(1/2)dt = 4t^(3/2)|₄⁹ = **76**

The antiderivative: n = 1/2, so t^(3/2) divided by 3/2, i.e. multiplied by 2/3, and 6 × 2/3 = 4. Then evaluate: 9^(3/2) = (√9)³ = 27 and 4^(3/2) = (√4)³ = 8, so **4(27) − 4(8) = 108 − 32 = 76**.

**This slide is wrong and you must not copy it.** The slide prints the final answer as **"= 4"**. Every line before it is correct — the rewrite as t^(1/2), the antiderivative 4t^(3/2), the limits 4 and 9 — and those lines evaluate to 76, not 4. The 4 on the slide is the coefficient of t^(3/2) left stranded where the answer should be. **The correct capital growth is 76.** Learn her method, and quote 76.

### Example 3 (slides 11–12) — consumer and producer surplus

**"For a certain product, the demand function is given by D(Q) = 1000 − 25Q, and the supply function is S(Q) = 100 + Q². Compute the consumer and producer surplus."**

Solution. "The equilibrium point is obtained if D(Q) = S(Q), that is,"

1000 − 25Q = 100 + Q²

"so that Q₀ = 20, the positive solution of the quadratic equation. The market equilibrium price, P₀ = 500."

The quadratic in full: Q² + 25Q − 900 = 0, so Q = (−25 ± √(625 + 3600))/2 = (−25 ± 65)/2, giving Q = 20 or Q = −45. **A negative quantity is meaningless, so Q₀ = 20** — that is what "the positive solution" is doing. Then P₀ = D(20) = 1000 − 500 = 500, and the check S(20) = 100 + 400 = 500 agrees.

"The consumer surplus CS is given by"

CS = ∫₀^Q₀ [D(Q) − P₀]dQ = ∫₀²⁰ (1000 − 25Q − 500)dQ

= ∫₀²⁰ (500 − 25Q)dQ = [500Q − 25Q²/2]₀²⁰ = **5000**

500(20) = 10000, and 25(400)/2 = 5000, so 10000 − 5000 = 5000.

(slide 12) "Similarly, we find the producer surplus PS as"

PS = ∫₀^Q₀ [P₀ − S(Q)]dQ = ∫₀²⁰ (500 − 100 − Q²)dQ

= ∫₀²⁰ (400 − Q²)dQ = [400Q − Q³/3]₀²⁰ ≈ **5333**

400(20) = 8000, and 20³/3 = 8000/3 = 2666.67, so 8000 − 2666.67 = 5333.33, which she rounds to 5333.

The order is not negotiable: **equilibrium first**. Both integrals run from 0 to Q₀ and both contain P₀, so neither can be started until the quadratic is solved. Note also which way round each bracket goes — consumers gain when the price they *would* have paid, D(Q), exceeds what they *do* pay, P₀; producers gain when what they *receive*, P₀, exceeds what they *needed*, S(Q).

## Environmental science — her build

### Example 1 (slides 13–14) — copper consumption

**"The global consumption of copper runs at the rate of 35e^(0.035t) thousand metric tons per year, where t is measured in years since 2005.**
**a) Find a model to determine the total amount of copper, C, that will be consumed t years after 2005.**
**b) When will the known world resources of 750 thousand metric tons of copper be exhausted?"**

**a)** "In 2005, we have C′(t) = 35e^(0.035t), so that"

C(t) = ∫35e^(0.035t)dt = **1000e^(0.035t) + c**

"The initial consumption C(0) = 0. Therefore, 0 = 1000e^(0.035(0)) + c, implying that c = −1000. Hence, the required model is"

**C(t) = 1000e^(0.035t) − 1000**

Where 1000 comes from: dividing by the exponent's coefficient, 35 ÷ 0.035 = 1000. And e^0 = 1, so the condition reads 0 = 1000 + c.

*Aside: the rule ∫e^(kt)dt = e^(kt)/k + c is used here but is never actually written on any slide of this deck. It is the one formula you have to bring with you. Divide by k; do not multiply.*

**b)** (slide 14) "The time for which the known world resources of copper would be 750 thousand metric tons is given by"

750 = 1000e^(0.035t) − 1000

"implying that" 1000e^(0.035t) = 1750

"or" e^(0.035t) = 1.750

"so that" t = ln(1.750)/0.0035 = **15.989 ≈ 16**

"Now, 16 years from 2005 is 2005 + 16 = 2021. Therefore, the known world resources of 750 thousand metric tons of copper would be exhausted in 2021."

**Misprint on this slide.** The denominator is printed **0.0035**; it must be **0.035**, the coefficient in the exponent. ln(1.750) = 0.5596, and 0.5596/0.035 = 15.989 — the printed answer 15.989 is correct, so only the denominator is wrong. With the printed 0.0035 you would get 159.89 years and the year 2165. Copy the corrected line.

The shape of part (b) is the examinable thing: **set the accumulated total equal to the stock, isolate the exponential, take natural logs, divide by k, add to the base year.**

## Her closing SUMMARY slide (15)

- "Integration serves as a bridge between abstract mathematical concepts and practical problem-solving in a wide range of fields."
- "The usefulness of integration cuts across such areas as physics, engineering, economics, environmental science, and medicine."
- "In physics and engineering, integration is a valuable tool in studying problems involving motion, work, force, etc."
- "Problems related to integration in Economics and Environmental Science include demand and supply, consumer surplus, population models, etc."

No formula appears on the summary slide. Everything computable this week is in the seven examples above.

## Commonly confused

- **The rate at the end is not the total.** v(5) = 81 km/h is a speed; ∫₀⁵v dt = 163.3 km is a distance. Reading the integrand at the upper limit is the single most common wrong answer in this week's material.
- **Substitute into the antiderivative, not the integrand.** For the capital growth, 6√9 − 6√4 = 18 − 12 = 6 is I(9) − I(4); the answer is 4t^(3/2)|₄⁹ = 76.
- **The constant belongs to the indefinite integral only.** x(0) = −4 fixes C in part (a); part (c) is a definite integral and the C cancels. Getting 111 instead of 115 is exactly this error.
- **Convert units before you build the force function.** 66 g/m must become 0.066 kg/m. Leave it in grams and every joule is 1000 times too large.
- **The hanging length is 60 − x.** It is what remains, not what has been pulled. Using x reverses the whole problem; using 60 makes the force constant and gives 2328 J.
- **A varying force forbids F × d.** The rope's force falls from 38.8 N to 0; the dam's pressure grows from 0 to its maximum at the base. Both are why an integral appears at all.
- **Weight density is ρg = 9800 N/m³** — the deck prints N/m², which is wrong. Neither ρ = 1000 alone nor g = 9.8 alone is the coefficient.
- **Divide by the new power in [x²/2].** Forgetting the 2 in the dam integral doubles the answer to 2.94 × 10¹⁰ N.
- **Solve 248 + C = 260, don't set C = 260.** An initial condition is an equation to solve, not a value to copy.
- **Equilibrium before surplus.** Q₀ and P₀ appear in both surplus integrals; the quadratic Q² + 25Q − 900 = 0 has to be solved first, and the negative root −45 discarded.
- **P₀ is D(Q₀), not D(0).** 1000 is the price at zero quantity, not the market price.
- **CS and PS are not interchangeable.** CS = ∫[D − P₀], PS = ∫[P₀ − S]. Here they are 5000 and 5333 — close enough that swapping them looks plausible and scores nothing.
- **∫e^(kt)dt = e^(kt)/k.** 35/0.035 = 1000. Multiplying by k instead would give 1.225.
- **Divide the log by k, not by k/10.** t = ln(1.75)/0.035 = 16 years, giving 2021. The slide's printed 0.0035 would give 159.9 years.

## What you should be able to say out loud

- Given any rate, I can say what its integral over an interval physically measures, and I can name the units of the answer.
- I can explain why the initial displacement −4 m matters in Example 2(a) and vanishes in Example 2(c).
- I can build the fluid-force integral for the dam from scratch: weight density times depth times width, integrated over the depth, and say why one pressure times the area will not do.
- I can build the rope's force function before integrating, including the gram-to-kilogram conversion and the 60 − x.
- I can recover a total function from a marginal one and solve for the constant from the given data point.
- I can find an equilibrium from D(Q) = S(Q), discard the negative root, and set up and evaluate both surplus integrals in the right order with the right brackets.
- I can turn a rate of consumption into a cumulative model, apply C(0) = 0, and solve for the year with a natural log.
- I can state that the deck's capital-growth answer of 4 is wrong and that 76 is right, and show why.
