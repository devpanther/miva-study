# MTH_102 Week 12 — what the slide images contained that the extracted text had lost

Deck: `Review-of-Key-Concepts-and-Practical-Problem-Solving-PDF`, whose own title slide reads **"INTEGRATION: APPLICATION OF INTEGRATION TO REAL-LIFE PROBLEMS"**. **17 pages.** No lecturer is named anywhere on this deck — the title slide carries only the course strip "Elementary Math (CALCULUS)" and the MIVA mark. (MTH_102's named lecturer, from the Week 7 deck's title slide, is Danjuma Rose Uwanassara, MSc Mathematics.)

**Pages that extracted as text:** 1 (title), 2 (Learning Objectives), 3 (Introduction), 15 (SUMMARY), 16 (FURTHER READING), 17 (Thank You).

**Pages 4–14 are images — eleven pages, and they are the entire mathematical content of the week.** `pdftotext` recovered from them only the running heads:

> APPLICATIONS OF INTEGRATION TO KINEMATICS ×3
> APPLICATIONS OF INTEGRATION TO FLUID FORCE
> APPLICATIONS OF INTEGRATION TO WORK AND ENERGY
> APPLICATIONS OF INTEGRATION TO MARGINAL ANALYSIS ×4
> APPLICATIONS OF INTEGRATION TO ENV'TAL SCIENCE ×2

Not one number, formula, question or answer came through. Everything below is what was inside those eleven pictures.

## 1. What the text pages did give (for the record)

**Slide 2 — LEARNING OBJECTIVES.**
> "Upon completion of this unit, you should be able to: Apply integral calculus to solve real-life problems in Physics · Apply integral calculus to solve real-life problems in Engineering · Apply integral calculus to solve real-life problems in Economics · Apply integral calculus to solve real-life problems in Environmental science."

**Slide 3 — INTRODUCTION.**
> "In this note, some real-life applications of integration are studied, including problems in physics, engineering, economics, environmental science, and more, demonstrating the usefulness of integration."

**Slide 15 — SUMMARY.**
> "Integration serves as a bridge between abstract mathematical concepts and practical problem-solving in a wide range of fields. · The usefulness of integration cuts across such areas as physics, engineering, economics, environmental science, and medicine. · In physics and engineering, integration is a valuable tool in studying problems involving motion, work, force, etc. · Problems related to integration in Economics and Environmental Science include demand and supply, consumer surplus, population models, etc."

Note that the summary slide contains **no formula at all**. Every rule this week is embedded inside a worked example on an image page.

## 2. Rules and formulas that were invisible

There are only three formulas stated on the whole deck, and all three sit inside worked examples rather than on rule slides.

**Slide 7 — the fluid-force formula, verbatim.**
> "Let h(x) be the height of the dam at a point x and L(x) be the width of the dam. The weight density of water is given by
> w = ρg = (1000)(9.8) = 9800 N/m²
> Using the fluid force formula, we have
> F = ∫ₐᵇ w h(x) L(x) dx"

**Slide 8 — the work formula**, used but not separately stated: **W = ∫₀⁶⁰ F(x)dx**, preceded by the construction of F(x) from the physics.

**Slides 11–12 — the surplus formulas, verbatim.**
> "The equilibrium point is obtained if D(Q) = S(Q)"
> "CS = ∫₀^Q₀ [D(Q) − P₀]dQ"
> "Similarly, we find the producer surplus PS as PS = ∫₀^Q₀ [P₀ − S(Q)]dQ"

Everything else — that ∫v dt is a displacement, that TR = ∫MR dQ, that capital growth is ∫I(t)dt, that a cumulative model is the integral of a rate — is asserted only through the examples.

**One formula is used but never written anywhere on the deck:** ∫e^(kt)dt = e^(kt)/k. It is applied silently on slide 13 (35 ÷ 0.035 = 1000). A student working only from this deck has no statement of it.

## 3. Worked examples that were invisible (seven of them)

**Kinematics, Example 1 (slide 4).**
> "Find the distance travelled by car with a velocity v(t) = 2t² + 6t + 1, where t is in hours and v is in kmh⁻¹ for the first 5 hours."
> **Solution.** "The distance travelled is given by"
> x(t) = ∫₀⁵ v(t)dt = ∫₀⁵ (2t² + 6t + 1)dt = [2t³/3 + 3t² + t]₀⁵
> = ([2(5)³/3 + 3(5)² + 5] − [2(0)³/3 + 3(0)² + 0]) = **163.3 km**

**Kinematics, Example 2 (slides 5 and 6)** — a two-slide, three-part example.
> "A body is moving with a velocity v(t) = 6t² − 6t − 12 in m/s. Its initial displacement is −4 m.
> a) Find its displacement function x(t).
> b) What is the displacement of the object at t = 3?
> c) Find the net displacement of the object in the first 5 seconds."
> **Solution.**
> a) "Displacement," x(t) = ∫(6t² − 6t − 12)dt = 2t³ − 3t² − 12t + C
> "Given that x(0) = −4, we have C = −4, so that x(t) = 2t³ − 3t² − 12t − 4."
> b) "Substituting t = 3 into the displacement function, we have"
> x(3) = 2(3)³ − 3(3)² − 12(3) − 4 = **−13 m**
> c) (slide 6) "The net displacement after 5 seconds is given by"
> x(t) = ∫₀⁵(6t² − 6t − 12)dt = [2t³ − 3t² − 12t]₀⁵
> = [2(5)³ − 3(5)² − 12(5) − (2(0)³ − 3(0)² − 12(0))] = **115 m**

**Fluid force, Example 1 (slide 7).**
> "Find the total fluid force exerted on the face of a rectangular dam whose height and width are 100 m and 300 m respectively. Assume the top of the dam is level with the water surface."
> **Solution.** "Let h(x) be the height of the dam at a point x and L(x) be the width of the dam. The weight density of water is given by w = ρg = (1000)(9.8) = 9800 N/m². Using the fluid force formula, we have"
> F = ∫ₐᵇ w h(x) L(x)dx = ∫₀¹⁰⁰(9800)(x)(300)dx
> = 2.94 × 10⁶ ∫₀¹⁰⁰ x dx = 2.94 × 10⁶ [x²/2]₀¹⁰⁰ = **1.47 × 10¹⁰ N**

**Work and energy, Example 1 (slide 8).**
> "A 60 m climbing rope is hanging over the side of a tall cliff. How much work is done in pulling the rope up to the top, where the rope has a mass of 66 g/m?"
> **Solution.** "First, we obtain the force function F(x). Assume the rope is pulled x m. Then the amount of rope still hanging is (60 − x) m. Since mass of rope is 66 g/m = 0.066 kg/m, then the mass of rope still hanging is 0.066(60 − x) kg. Since g = 9.8 m/s², then the force function, F(x) = 9.8(0.066)(60 − x) = 0.6468(60 − x). Hence, the total work done in pulling up the rope is"
> W = ∫₀⁶⁰ F(x)dx = ∫₀⁶⁰ 0.6468(60 − x)dx
> = [0.6468(60x − x²/2)]₀⁶⁰ = **1,164.24 J**

**Marginal analysis, Example 1 (slide 9).**
> "The marginal revenue of a company is given by MR = 100 + 20Q + 3Q², where Q is the amount of units sold for a period. Find the total revenue function if at Q = 2, it is equal to 260."
> **Solution.** "The total revenue function is given by"
> TR(Q) = ∫MR(Q)dQ = ∫(100 + 20Q + 3Q²)dQ = 100Q + 10Q² + Q³ + C
> "Given that TR(2) = 260, we have C = 12, so that the total revenue function"
> **TR(Q) = 100Q + 10Q² + Q³ + 12**

**Marginal analysis, Example 2 (slide 10).**
> "The rate of investment is given by I(t) = 6√t. Calculate the capital growth between the 4th and the 9th years."
> **Solution.** "The capital growth is given by"
> K = ∫ₐᵇ I(t)dt = ∫₄⁹ 6√t dt = 6∫₄⁹ t^(1/2)dt = 4t^(3/2)|₄⁹ = **4**

The final "4" is the slide's, and it is **wrong** — see section 5. The correct value is 76.

**Marginal analysis, Example 3 (slides 11 and 12).**
> "For a certain product, the demand function is given by D(Q) = 1000 − 25Q, and the supply function is S(Q) = 100 + Q². Compute the consumer and producer surplus."
> **Solution.** "The equilibrium point is obtained if D(Q) = S(Q), that is, 1000 − 25Q = 100 + Q², so that Q₀ = 20, the positive solution of the quadratic equation. The market equilibrium price, P₀ = 500. The consumer surplus CS is given by"
> CS = ∫₀^Q₀ [D(Q) − P₀]dQ = ∫₀²⁰(1000 − 25Q − 500)dQ
> = ∫₀²⁰(500 − 25Q)dQ = [500Q − 25Q²/2]₀²⁰ = **5000.**
> (slide 12) "Similarly, we find the producer surplus PS as"
> PS = ∫₀^Q₀ [P₀ − S(Q)]dQ = ∫₀²⁰(500 − 100 − Q²)dQ
> = ∫₀²⁰(400 − Q²)dQ = [400Q − Q³/3]₀²⁰ ≈ **5333.**

**Environmental science, Example 1 (slides 13 and 14).**
> "The global consumption of copper runs at the rate of 35e^(0.035t) thousand metric tons per year, where t is measured in years since 2005.
> a) Find a model to determine the total amount of copper, C, that will be consumed t years after 2005.
> b) When will the known world resources of 750 thousand metric tons of copper be exhausted?"
> **Solution.**
> a) "In 2005, we have C′(t) = 35e^(0.035t), so that"
> C(t) = ∫35e^(0.035t)dt = 1000e^(0.035t) + c
> "The initial consumption C(0) = 0. Therefore, 0 = 1000e^(0.035(0)) + c, implying that c = −1000. Hence, the required model is C(t) = 1000e^(0.035t) − 1000"
> b) (slide 14) "The time for which the known world resources of copper would be 750 thousand metric tons is given by"
> 750 = 1000e^(0.035t) − 1000
> "implying that" 1000e^(0.035t) = 1750
> "or" e^(0.035t) = 1.750
> "so that" t = ln(1.750)/0.0035 = 15.989 ≈ 16
> "Now, 16 years from 2005 is 2005 + 16 = 2021. Therefore, the known world resources of 750 thousand metric tons of copper would be exhausted in 2021."

**There are no TASK slides in this deck.** Every example is worked through to an answer; nothing is set for the student.

## 4. Notation and habits the extraction lost

- **Square brackets, not the evaluation bar, for most of the deck**: [2t³/3 + 3t² + t]₀⁵, [2t³ − 3t² − 12t]₀⁵, [x²/2]₀¹⁰⁰, [500Q − 25Q²/2]₀²⁰. The bar notation F(x)|ₐᵇ appears **once only**, on slide 10 (4t^(3/2)|₄⁹). The deck is internally inconsistent; Week 7's deck used the bar throughout.
- **Both limits written out in full** even when the lower one is zero — slide 4 writes the entire [2(0)³/3 + 3(0)² + 0] bracket, and slide 6 writes (2(0)³ − 3(0)² − 12(0)).
- **Capital C for the constant** in the kinematics and marginal-analysis examples (slides 5, 9), but **lowercase c** in the environmental example (slide 13). Again inconsistent between slides.
- **Constants pulled out front before evaluating**: 9800 × 300 becomes 2.94 × 10⁶ on its own line; 6∫t^(1/2)dt becomes 4t^(3/2); 0.6468 stays outside the bracket in [0.6468(60x − x²/2)]₀⁶⁰.
- **x(t) used as the label for a number.** On slides 4 and 6 the left-hand side is written "x(t) =" while the right-hand side is a definite integral evaluating to 163.3 km and 115 m. Strictly these are x(5) − x(0), not functions of t. Harmless in context, but it is her habit and it is worth not copying into an exam script.
- **Application-specific symbol sets**, each introduced only inside its own example: w = ρg, h(x), L(x) for fluid force; F(x), g = 9.8 for work; MR, TR, Q, I(t), K for marginal analysis; D(Q), S(Q), Q₀, P₀, CS, PS for surplus; C′(t), C(t), c for accumulation.
- **The force function is constructed in prose before any integral is written** (slide 8). That paragraph — "the amount of rope still hanging is (60 − x) m" — is the whole examinable content of the example and was completely invisible to the extraction.

## 5. Errors and misprints on the slides

1. **Slide 10 (Marginal analysis Example 2), substantive and serious.** The working `K = ∫₄⁹ 6√t dt = 6∫₄⁹ t^(1/2)dt = 4t^(3/2)|₄⁹` is correct, but the printed final answer is **"= 4"**. Evaluating her own antiderivative gives 4(9^(3/2)) − 4(4^(3/2)) = 4(27) − 4(8) = 108 − 32 = **76**. The 4 appears to be the coefficient of t^(3/2) left standing where the value should be. **The new material teaches 76 and names the slide's 4 as wrong**, because this is the one number on the deck a student could reproduce faithfully and still lose the mark.
2. **Slide 14 (Environmental science Example 1b), typographic.** The last line is printed as `t = ln(1.750)/0.0035 = 15.989 ≈ 16`. The denominator must be **0.035**, the coefficient in the exponent — that is what taking logs of e^(0.035t) leaves. The value 15.989 is correct and was plainly computed with 0.035 (ln 1.750 = 0.5596; 0.5596/0.035 = 15.989), whereas 0.0035 would give 159.89 years and the year 2165, contradicting the slide's own conclusion of 2021. The misprint is confined to that one denominator.
3. **Slide 7 (Fluid force), units.** The weight density is printed as **9800 N/m²**. Weight density ρg has units (kg/m³)(m/s²) = **N/m³**; N/m² is a pressure, which is what w·h(x) gives, not w. The number is right and the answer 1.47 × 10¹⁰ N is right.
4. **Slide 7, wording.** "Let h(x) be the **height** of the dam at a point x" — but in the integral h(x) = x is used as the **depth below the water surface**, running from 0 at the top to 100 at the base. The example works only because the top of the dam is level with the surface. A student who takes "height above the base" literally will integrate the wrong function and get the pressure distribution upside down. The new material flags this and teaches h(x) as a depth.
5. **Slide 4, labelling.** ∫₀⁵ v(t)dt is called "the distance travelled". It is in fact the net displacement; the two agree here only because v(t) = 2t² + 6t + 1 is positive for every t in [0, 5]. She uses the correct term "net displacement" for the same construction on slide 6. Not an error in the answer, but the deck never explains when the two coincide, and never teaches ∫|v|dt or splitting at the zeros of v.
6. **Slides 4 and 6, notation.** "x(t) = " placed in front of a definite integral that evaluates to a number (see section 4). A cosmetic inconsistency, noted so it is not imitated.

## 6. Was the old summary wrong, incomplete, or basically fine?

**It was not mathematically wrong — every formula in it is a true formula — but almost none of it is this deck, and it is being replaced rather than patched.** Its own footnote admitted it was written from the learning objectives, the section headings and the written week-summary, because the bodies extracted as nothing. That footnote was honest, and it is exactly why the page has to go.

**a) It taught a large amount the lecturer does not cover.** The old page's eight "most likely to be examined" items included: total distance as ∫|v|dt with splitting at the zeros of v; Hooke's law springs and W = ½k(b² − a²); the centroid check F = ρg·h̄·A; marginal **cost** with a fixed cost C(0) and the rule that fixed cost cancels in ∫MC dq; profit maximisation at MR = MC; the average value of a function f̄ = (1/(b−a))∫f dt; and the exponential population model P = P₀e^(kt). **None of these appears anywhere on the deck.** Springs, centroids, average value, marginal cost, fixed cost and MR = MC are not mentioned on a single slide. The deck's actual marginal-analysis content is marginal **revenue**, a rate of investment, and a surplus pair — and the old page gave surplus two lines while giving springs and centroids full worked treatments.

**b) It contained none of the lecturer's seven worked examples.** The old page's six worked examples were all invented: a(t) = 6t − 12 kinematics with a distance/displacement split, a spring with k = 40 N/m, a 2 m × 3 m plate 1 m below the surface, MC(q) = 3q² − 4q + 10 with a ₦50 fixed cost, a demand p = 50 − 2q supply p = 5 + q market, and a discharge r(t) = 60e^(0.1t). Not one of the deck's numbers — 163.3 km, x(t) = 2t³ − 3t² − 12t − 4, −13 m, 115 m, 1.47 × 10¹⁰ N, 1164.24 J, TR(Q) = 100Q + 10Q² + Q³ + 12, K over the 4th to 9th years, Q₀ = 20 and P₀ = 500, CS = 5000, PS ≈ 5333, C(t) = 1000e^(0.035t) − 1000, the year 2021 — appeared anywhere on it.

**c) The question set was worse than the summary.** All twelve of its multiple-choice items were invented, and several tested material the deck never presents: a spring constant and W = ½kx² (Q5), the average value of a function (Q12), total distance via splitting at the zeros of v (Q3), and total cost including a fixed cost (Q7). Of its three short-answer questions, **two are unanswerable from the deck**: Q13 requires splitting the interval at the zeros of v, and Q14 requires both a non-rectangular width function w(h) and the centroid formula F = ρg·h̄·A — a formula that appears on no slide. Q15 uses a demand and supply pair of the right shape but not hers.

**d) Wrong symbols throughout.** The old page used h and w(h) for depth and width where the deck uses h(x) and L(x); ρg where the deck writes w = ρg; lower-case q, MC, MR, D(q), S(q) and ₦ amounts where the deck uses capital Q, MR only, D(Q), S(Q), P₀, Q₀ and unnamed currency units. It also correctly wrote ρg = 9800 N/m³ — which is right, but means it would not have prepared Gift for the N/m² printed on his slide, nor for the two genuine slide errors (the capital-growth answer of 4, and the 0.0035 denominator) that he will meet in his own revision.

**e) What it did get right.** The old page's organising idea — that every application is "integrate a rate over an interval to get a total" — is a fair description of the deck, and its unit-checking advice is useful. Both survive into the rebuild, attached now to the lecturer's own examples instead of to invented ones.
