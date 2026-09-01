# Friday — PHY_102 nightly check

*Problems-only session on Week 12 transformers.*

*Compute with the lecturer's three tools and nothing else. V₂/V₁ = N₂/N₁ for turns ratios and voltages. P_av = V₁I₁ together with I₁V₁ = I₂V₂ for currents. And V₁/I₁ = R/(N₂/N₁)² for resistances.*

*Covers all six part-answers of her two worked examples: 2, 8.0 A, 60 Ω, 1/2, 6.67 A, 36 Ω.*

*Also the line she leaves out of Example 2(c), fresh numbers on the same three formulas, and one wrong solution to diagnose.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Example 1: a 960-W coffeemaker designed for a 240-V line is to run from the USA-standard 120-V line. What turns ratio N₂/N₁ does the lecturer obtain?
A. 1/2
B. 2
C. 240
D. 1/4

**2.** Example 1(b): what current does the coffeemaker draw from the 120-V line?
A. 4.0 A
B. 2.0 A
C. 0.125 A
D. 8.0 A

**3.** Example 1(c): with V₁ = 120 V, I₁ = 8.0 A and N₂/N₁ = 2, what is the resistance of the coffeemaker?
A. 60 Ω
B. 15 Ω
C. 30 Ω
D. 7.5 Ω

**4.** Example 2(b): the 1600-W dryer, rated 120 V, is run through a transformer from a 240-V European outlet. What current does it draw from that outlet?
A. 13.3 A
B. 3.33 A
C. 6.67 A
D. 1600 A

**5.** Slide 21 ends at V₁/I₁ = 240/6.67 = 36 Ω without using the ratio N₂/N₁ = 1/2 it lists. Finish the calculation: what is the dryer's own resistance?
A. 36 Ω
B. 9 Ω
C. 18 Ω
D. 4.5 Ω

**6.** An ideal transformer has N₁ = 400 turns and N₂ = 100 turns, with 240 V rms applied to the primary. What is the secondary voltage?
A. 960 V
B. 15 V
C. 24 V
D. 60 V

**7.** An ideal transformer draws 5.0 A from a 200-V rms supply, and its secondary is at 25 V rms. What is the secondary current?
A. 40 A
B. 0.625 A
C. 5.0 A
D. 8.0 A

**8.** A load of resistance 8.0 Ω is connected across the secondary of an ideal transformer whose turns ratio is N₂/N₁ = 1/4. What resistance does the primary source appear to be driving?
A. 32 Ω
B. 2.0 Ω
C. 128 Ω
D. 0.50 Ω

**9.** Work Example 1 in full, all three parts, in the lecturer's own steps, and finish with a check that power is conserved.
*(short answer)*

**10.** Work Example 2 parts (b) and (c) in full, then add the line slide 21 omits. Say what is exact and what is rounded in the numbers 6.67 A, 13.3 A and 36 Ω.
*(short answer)*

**11.** A 25 Ω load is connected across the secondary of an ideal transformer with N₂/N₁ = 5, and 60 V rms is applied to the primary. Using only the deck's formulas, find the resistance seen at the primary, the primary current, the secondary voltage and the secondary current, and verify the power.
*(short answer)*

**12.** A student answers Example 1(c) like this: 'V₁/I₁ = 120/8 = 15 Ω, and N₂/N₁ = 2, so R = 15 × 2 = 30 Ω.' Diagnose the error, give the correct answer, and describe a check that would have caught it in seconds.
*(short answer)*

## Answers

**1. B** — The 120-V line is the source, so V₁ = 120 V, and the coffeemaker is the load, so V₂ = 240 V: N₂/N₁ = V₂/V₁ = 240/120 = 2, twice as many turns on the secondary — a step-up transformer. Option 1 puts the appliance's rating in the primary, which is Example 2's answer, not this one. Option 3 quotes a voltage as if it were a ratio; the turns ratio is dimensionless. Option 4 squares an already inverted ratio, importing the square that belongs only in the resistance formula.

**2. D** — P_av = V₁I₁ gives I₁ = P_av/V₁ = 960/120 = 8.0 A. Option 1 is the secondary current, I₂ = 960/240 = 4.0 A — the current in the coffeemaker itself, and the right answer to a question that was not asked. Option 2 halves that again, applying the turns ratio a second time. Option 3 inverts the formula, computing V₁/P_av. Always ask which side of the transformer the question is standing on.

**3. A** — V₁/I₁ = 120/8 = 15 Ω, then V₁/I₁ = R/(N₂/N₁)² rearranges to R = (V₁/I₁)(N₂/N₁)² = 15(2)² = 15 × 4 = 60 Ω. Check: V₂/I₂ = 240/4.0 = 60 Ω. Option 2 stops at the apparent resistance and never applies the formula at all. Option 3 multiplies by the ratio instead of its square, the commonest slip in this calculation. Option 4 divides by the square instead of multiplying, running the formula backwards.

**4. C** — The outlet is the primary, so I₁ = P_av/V₁ = 1600/240 = 6.67 A (exactly 20/3 A). Option 1 is I₂ = 1600/120 = 13.3 A, the current in the dryer element on the secondary — the mirror of the trap in Example 1(b). Option 2 halves 6.67 A, applying the turns ratio to a current that already accounts for it. Option 3 divides by nothing. Sanity check: I₁V₁ = 6.67 × 240 ≈ 1600 W = I₂V₂ = 13.3 × 120.

**5. B** — R = (V₁/I₁)(N₂/N₁)² = 36 × (1/2)² = 36 × 1/4 = 9 Ω, confirmed independently by R = V₂/I₂ = 120/13.3 = 9 Ω and by V₂²/P_av = 14400/1600 = 9 Ω. Option 1 repeats the apparent resistance, which answers what the dryer appears to have at 240 V, not what it is. Option 2 multiplies by the ratio rather than its square. Option 4 applies the square once more on top of the correct answer. Note that Example 1(c) asked for the appliance's own resistance and Example 2(c) for the apparent one — the deck ends its two examples on different quantities.

**6. D** — V₂ = V₁(N₂/N₁) = 240 × (100/400) = 240 × 1/4 = 60 V, and since N₂ < N₁ this is a step-down transformer, so a secondary voltage below 240 V is what you should expect. Option 1 inverts the ratio, multiplying by 4 instead of dividing — the answer a step-up transformer would give. Option 2 divides by the square of the ratio, 240/16, borrowing the square from the resistance formula where it does not belong. Option 3 divides by 10, a slip in the turns arithmetic.

**7. A** — I₁V₁ = 5.0 × 200 = 1000 W, so I₂ = 1000/25 = 40 A: the voltage was stepped down by 8, so the current is stepped up by 8. Option 2 multiplies by 25/200 instead of dividing, treating current like voltage — the single most common error on this equation. Option 3 assumes the current is unchanged, which would violate the power equation. Option 4 quotes the ratio 200/25 itself as though a dimensionless number were an ampere reading.

**8. C** — V₁/I₁ = R/(N₂/N₁)² = 8.0/(1/4)² = 8.0/(1/16) = 8.0 × 16 = 128 Ω. Because this is a step-down transformer the load looks larger from the primary, the opposite of Example 1, where a step-up made 60 Ω look like 15 Ω. Option 1 uses the ratio to the first power, 8.0 × 4. Option 2 divides by 4 instead of multiplying. Option 4 divides by 16 rather than multiplying, running the formula in reverse. Dividing by a fraction is what makes this number grow.

**9.** A good answer sets V₁ = 120 V (the line, hence the primary) and V₂ = 240 V (the coffeemaker, hence the secondary). (a) N₂/N₁ = V₂/V₁ = 240/120 = 2, so the secondary needs twice as many turns as the primary — a step-up transformer. (b) P_av = V₁I₁ gives I₁ = 960/120 = 8.0 A from the line, and I₂ = P_av/V₂ = 960/240 = 4.0 A in the coffeemaker; the answer to (b) is 8.0 A. (c) V₁/I₁ = 120/8 = 15 Ω, then R = (V₁/I₁)(N₂/N₁)² = 15(2)² = 60 Ω. The check should be explicit: I₁V₁ = 8.0 × 120 = 960 W and I₂V₂ = 4.0 × 240 = 960 W, equal as slide 10 requires, and the current ratio 8.0/4.0 = 2 is the inverse of the voltage ratio. Credit naming which of the three equations each part used.

**10.** A good answer sets V₁ = 240 V and V₂ = 120 V. (b) I₁ = P_av/V₁ = 1600/240 = 6.67 A from the outlet, and I₂ = P_av/V₂ = 1600/120 = 13.3 A in the dryer element. (c) V₁/I₁ = 240/6.67 = 36 Ω, the resistance the dryer appears to have at 240 V, which is what the question asked. The omitted line: R = (V₁/I₁)(N₂/N₁)² = 36 × (1/2)² = 9 Ω, the dryer's own resistance, confirmed by V₂/I₂ = 120/13.3 = 9 Ω. On rounding: 1600/240 = 20/3 = 6.666… A and 1600/120 = 40/3 = 13.33… A, so both currents are three-significant-figure roundings; 240 divided by the exact 20/3 is 36 Ω exactly, while 240/6.67 is 35.98, so her 36 Ω is the exact value rather than a rounding of the divided figure.

**11.** A good answer works in the deck's own order. Resistance seen at the primary: V₁/I₁ = R/(N₂/N₁)² = 25/5² = 25/25 = 1.0 Ω. Primary current: I₁ = V₁ divided by that apparent resistance = 60/1.0 = 60 A. Secondary voltage from equation 3: V₂ = V₁(N₂/N₁) = 60 × 5 = 300 V. Secondary current from slide 10: I₂ = I₁V₁/V₂ = (60 × 60)/300 = 3600/300 = 12 A. Verification: I₁V₁ = 60 × 60 = 3600 W and I₂V₂ = 12 × 300 = 3600 W, equal; and as a second check the load itself takes V₂/R = 300/25 = 12 A, matching I₂. It should note that a step-up of 5 in voltage is a step-down of 5 in current, 60 A to 12 A, and that the 25 Ω load looks like only 1 Ω from the primary because the ratio enters squared.

**12.** A good answer identifies the single defective step: the formula is V₁/I₁ = R/(N₂/N₁)², so rearranging gives R = (V₁/I₁)(N₂/N₁)², and the ratio must be squared — 15 × (2)² = 15 × 4 = 60 Ω, not 15 × 2 = 30 Ω. Everything before that line, including 120/8 = 15 Ω, is correct, so this is one arithmetic move rather than a misunderstanding of the setup. The check: the coffeemaker is a 960-W appliance running at 240 V, so its current is 960/240 = 4.0 A and its resistance is V₂/I₂ = 240/4.0 = 60 Ω, computed without the transformation formula at all; 30 Ω would imply 240/30 = 8 A through the coffeemaker and hence 1920 W, twice its rating. A good answer should say that recomputing the quantity a second way from the secondary side is the general habit worth having here.
