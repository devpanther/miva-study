# MTH_102 — Week 3 Questions
*Evaluating limits algebraically: direct substitution, factorization, rationalization, L'Hôpital's Rule, and the ten properties. Twelve multiple choice, three short answer. Answers at the bottom — work them before you look.*

## Multiple choice

**1.** lim x→3 (x² + 2x − 3) =
A. 12
B. 15
C. 18
D. 9

**2.** lim x→2 (x³ − 3)/(x² − 6) =
A. 5/2
B. Does not exist
C. −5/2
D. 0/0, indeterminate

**3.** Direct substitution in lim x→2 (x² − 4)/(x − 2) gives 0/0. That tells you
A. the limit is 0
B. the form decides nothing, so more algebra is needed
C. the limit does not exist
D. the limit is 1

**4.** lim x→3 (x³ − 27)/(x − 3) =
A. 0
B. 18
C. Does not exist
D. 27

**5.** lim x→2 (1/x − 1/2)/(x − 2) =
A. 1/4
B. −1
C. 0
D. −1/4

**6.** lim x→0 (√(x+9) − 3)/x =
A. 1/6
B. 1/3
C. 0
D. Does not exist

**7.** lim x→0 (x + 4)³ =
A. 12
B. 4
C. 64
D. 0

**8.** lim x→4 (1/√x − 1/2)/(x − 4) =
A. 1/16
B. −1/16
C. −1/8
D. −1/4

**9.** L'Hôpital's Rule replaces lim f(x)/g(x) by
A. lim (f′g − fg′)/g²
B. lim f′(x)/g′(x)
C. lim f′(x)·g′(x)
D. lim [f(x)/g(x)]′

**10.** lim x→∞ x²/eˣ =
A. ∞
B. 1
C. 2
D. 0

**11.** The Quotient property lim (f/g) = (lim f)/(lim g) holds
A. provided lim x→c g(x) ≠ 0
B. provided g(c) is defined
C. provided f and g are polynomials
D. provided lim x→c f(x) ≠ 0

**12.** If 5 − x³ ≤ f(x) ≤ 5 + x³, then lim x→0 f(x) =
A. 0
B. 10
C. 5
D. Cannot be found without knowing f

## Short answer

**S1.** Evaluate lim x→2 (1/x − 1/2)/(x − 2), showing every step the lecturer shows on slide 7. Name the common denominator she multiplies by, and say exactly which step produces the minus sign in the answer.

**S2.** Work the slide 8 TASK in full: find lim x→3 (x³ − 27)/(x − 3). State why direct substitution fails, give the factorization of x³ − 27, and then check your answer by a second method from the deck.

**S3.** The SUMMARY slide says: "lim x→∞ f(x) represents the limit approaching x from the right while lim x→−∞ f(x) is used when the limit approaches x from the left on the graph." Say what is wrong with that sentence, state correctly what lim x→∞ f(x) and lim x→−∞ f(x) mean, and give the notation that actually does mean "approaching from the right" and "approaching from the left".

---

## Answers

**1. A.** Substitute directly: (3)² + 2(3) − 3 = 9 + 6 − 3 = 15 − 3 = 12. B stops at 9 + 6 and forgets to subtract the 3. C flips the sign of the constant, adding 3 instead of subtracting. D reads 3² as 3 × 2 = 6, giving 6 + 6 − 3.

**2. C.** (2³ − 3)/(2² − 6) = (8 − 3)/(4 − 6) = 5/(−2) = −2.5. A loses the minus that 4 − 6 = −2 produces. B assumes a negative denominator makes the limit fail; it does not — only a zero denominator with a zero numerator stops substitution. D confuses "negative" with "indeterminate": 5/(−2) is perfectly well defined, so the substitution stands.

**3. B.** 0/0 is indeterminate: the form alone decides nothing, which is exactly why slide 6 goes on to factor. A treats 0/0 as ordinary division into zero. C is the standard trap — the function is undefined at x = 2, yet the limit is 4. D treats 0/0 as if any number over itself were 1.

**4. D.** 0/0, so factor the difference of cubes: x³ − 27 = (x − 3)(x² + 3x + 9). Cancel to get lim (x² + 3x + 9) = 9 + 9 + 9 = 27. A comes from the wrong factorization (x − 3)(x² − 9), whose second factor vanishes at 3. B comes from the equally wrong (x − 3)(x² + 9), giving 9 + 9. C repeats the error of question 3 — 0/0 does not mean non-existence.

**5. D.** Multiply top and bottom by 2x to get (2 − x)/[2x(x − 2)], then write 2 − x = −1(x − 2) and cancel: −1/(2x) = −1/(2(2)) = −1/4. A cancels 2 − x against x − 2 without the −1 and so loses the sign. B cancels correctly to −1 but forgets the 2x that remains downstairs. C is the 0/0-means-0 error again.

**6. A.** Multiply by the conjugate √(x+9) + 3: the numerator becomes (x + 9) − 9 = x, cancel the x, leaving 1/(√(x+9) + 3) → 1/(3 + 3) = 1/6. B forgets the "+ 3" left in the denominator and evaluates 1/√9. C substitutes into the original numerator and stops. D repeats the 0/0-means-non-existence error.

**7. C.** Take the limit first, then the power: [lim (x + 4)]³ = 4³ = 64. A multiplies by the exponent instead of raising to it, 3 × 4. B takes the limit and forgets the cube entirely. D substitutes x = 0 into x³ and ignores the +4.

**8. B.** 1/√x − 1/2 = (2 − √x)/(2√x); with x − 4 = (√x − 2)(√x + 2) and 2 − √x = −1(√x − 2), everything cancels to −1/[2√x(√x + 2)] = −1/[2(2)(4)] = −1/16. A loses the −1 in the rewrite. C drops the √x factor from the denominator, using −1/[2(√x + 2)]. D forgets to double, i.e. uses 2 + 2 = 4 for the whole denominator.

**9. B.** The rule "replaces the original function with its derivatives" — numerator and denominator differentiated separately. A is the quotient rule, and a g² appearing in your working is the tell that you used it by mistake. C multiplies the derivatives instead of dividing them. D differentiates the whole quotient as one object, which is again the quotient rule in disguise.

**10. D.** One application gives 2x/eˣ, still ∞/∞; a second gives 2/eˣ, and since eˣ grows without bound the limit is 0. A reads the numerator's growth and ignores that eˣ outgrows every power. B is what you would get by cancelling the two infinities. C stops after the second differentiation and reads off the numerator 2 without dividing by eˣ.

**11. A.** The slide states it explicitly: the quotient of the limits is valid "as long as the denominator's limit is not zero". B is about the value g(c), which a limit never inspects. C invents a restriction the property does not carry. D puts the proviso on the wrong function — a zero numerator limit is completely harmless.

**12. C.** Both bounds tend to 5 as x → 0: 5 − 0³ = 5 and 5 + 0³ = 5, so f is trapped between 5 and 5. A takes the limit of x³ instead of the whole bound. B adds the two bounds together. D misses that the Squeeze Theorem exists precisely to give an answer when f itself is unknown. *(Note: the slide misprints the upper bound as 5 − x³ in the two working lines. The answer 5 is unaffected because both bounds collapse to 5 anyway.)*

**S1.** The expression is a complex fraction. The common denominator of 1/x and 1/2 is **2x**, so multiply numerator and denominator by 2x: the numerator (1/x − 1/2)·2x becomes 2 − x, the denominator (x − 2)·2x becomes 2x(x − 2), giving lim x→2 (2 − x)/[2x(x − 2)]. Now 2 − x will not cancel against x − 2 as it stands, so factor out −1: 2 − x = −1(x − 2). Then lim x→2 [−1(x − 2)]/[2x(x − 2)] = lim x→2 (−1)/(2x) = −1/(2(2)) = **−1/4**. The minus sign is produced by exactly one step: the −1 factored out when rewriting 2 − x as −1(x − 2). Nothing in the clearing of the fractions and nothing in the final substitution contributes it, which is why a student who cancels 2 − x against x − 2 directly gets +1/4.

**S2.** Direct substitution gives (3³ − 27)/(3 − 3) = (27 − 27)/0 = 0/0, an indeterminate form, so substitution fails and the factorization method applies. The difference of cubes factors as **x³ − 27 = (x − 3)(x² + 3x + 9)**. Then lim x→3 [(x − 3)(x² + 3x + 9)]/(x − 3) = lim x→3 (x² + 3x + 9), cancelling the common factor, which is legitimate because x is near 3 but never equal to 3 throughout the limit. Substituting now: 3² + 3(3) + 9 = 9 + 9 + 9 = **27**. Check by L'Hôpital, since the form was 0/0: f(x) = x³ − 27 and g(x) = x − 3 give f′(x) = 3x² and g′(x) = 1, so the limit is 3(3)²/1 = 27. The two methods agree.

**S3.** The sentence confuses two different ideas. lim x→∞ f(x) and lim x→−∞ f(x) are **limits at infinity**: they describe the function's end behaviour, what f(x) settles towards as x grows without bound in the positive direction and in the negative direction respectively. No finite point is being approached at all, so talking about approaching "x" from a side is meaningless there. What the sentence is reaching for is the **one-sided limit**, which does approach a finite point c: lim x→c⁺ f(x) is the right-hand limit, taken through values of x slightly greater than c, and lim x→c⁻ f(x) is the left-hand limit, taken through values slightly less than c. That ⁺/⁻ superscript notation never appears anywhere in this deck, so it is worth writing it out yourself; and if the exam quotes the SUMMARY slide's wording, answer with the correct distinction rather than repeating it.
