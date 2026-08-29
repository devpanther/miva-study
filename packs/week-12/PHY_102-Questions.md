# PHY_102 — Week 12 Questions
*Transformers: the emf chain, step-up and step-down, energy and resistance transformation. Twelve multiple choice, three short answer. Answers at the bottom — work them before you look.*

## Multiple choice

**1.** Slide 8 writes ε₁ = −N₁ dΦ_B/dt and ε₂ = −N₂ dΦ_B/dt with the same dΦ_B/dt. Her conclusion from this is that
A. the two coils carry the same current
B. the induced emf per turn is the same in both coils
C. the primary emf is always larger
D. the flux leaks equally from both coils

**2.** ε₂/ε₁ = N₂/N₁ becomes V₂/V₁ = N₂/N₁ only because
A. emf and voltage are two names for one quantity
B. the minus signs cancel
C. in an ideal transformer the induced emfs equal the terminal voltages
D. the core is laminated

**3.** In Example 1, the 960 W coffeemaker rated at 240 V is run from the 120 V line. Her turns ratio N₂/N₁ is
A. 1/2
B. 240
C. 120
D. 2

**4.** Example 1(b): the current drawn **from the 120 V line** is
A. 8.0 A
B. 4.0 A
C. 2.0 A
D. 0.125 A

**5.** Example 1(c): the resistance of the coffeemaker is
A. 15 Ω
B. 60 Ω
C. 30 Ω
D. 240 Ω

**6.** Example 2: the 1600 W dryer rated at 120 V is run from a 240 V outlet. Her turns ratio N₂/N₁ is
A. 2
B. 13.3
C. 1/2
D. 1/4

**7.** Example 2(b): the current in the dryer element itself is
A. 6.67 A
B. 3.33 A
C. 1600 A
D. 13.3 A

**8.** Example 2(c): the resistance the dryer appears to have at 240 V is
A. 36 Ω
B. 9 Ω
C. 18 Ω
D. 144 Ω

**9.** An ideal transformer doubles the voltage. By slide 10, the secondary current is
A. also doubled
B. halved
C. unchanged
D. quartered

**10.** The core is built from thin sheets of metal insulated from each other in order to
A. increase the number of turns
B. raise the secondary voltage
C. stop eddy currents flowing from one sheet to the next
D. keep the frequency constant

**11.** A 50 Hz supply drives a step-down transformer of ratio 1/4. The secondary frequency is
A. 50 Hz
B. 12.5 Hz
C. 200 Hz
D. 0 Hz

**12.** Equation 2 (ε₂/ε₁ = N₂/N₁) has no minus sign. The reason is that
A. Lenz's law does not apply to transformers
B. the lecturer dropped it by mistake
C. emfs are always positive quantities
D. both emfs carry the same minus sign, so it cancels in the ratio

## Short answer

**13.** Work Example 1(c) exactly as the lecturer works it: state the givens, compute V₁/I₁, quote the formula from slide 10, and finish. Say in one sentence what the intermediate 15 Ω is and what the final 60 Ω is.

**14.** Set out the chain from slide 8 to slide 9 as an argument: why the flux per turn being shared gives ε₂/ε₁ = N₂/N₁, and what extra assumption is needed before you may write V₂/V₁ = N₂/N₁.

**15.** Slide 21 lists N₂/N₁ = 1/2 among its givens, computes V₁/I₁ = 240/6.67 = 36 Ω, and stops. Say why 36 Ω is nevertheless the right answer to the question asked, then finish the calculation the slide left out to find the dryer's own resistance, and check it a second way.

---

## Answers

**1. B.** Both emfs share one dΦ_B/dt, so dividing either by its own N gives the same number — "the induced emf per turn is the same in the two coils", which is the whole basis of equation 2. A is false and is contradicted by slide 10, where I₁ and I₂ differ. C reverses the point: which emf is larger depends on which N is larger. D invents flux leakage, a loss the deck never mentions.

**2. C.** Slide 9 supplies the assumption: "In an ideal transformer, the induced emfs ε₁ and ε₂ ... are equal to the terminal voltages, respectively." A is the error the assumption exists to prevent — emf and terminal voltage are distinct in a real transformer. B is true of equation 2 but has nothing to do with the emf-to-voltage step. D is about eddy-current losses, a different slide and a different issue.

**3. D.** N₂/N₁ = V₂/V₁ = 240/120 = 2; the appliance is the load, so its 240 V is V₂. A inverts the ratio, which is Example 2's answer, not this one. B and C quote a raw voltage as if it were a ratio — the turns ratio is dimensionless.

**4. A.** P_av = V₁I₁, so I₁ = 960/120 = 8.0 A. B is I₂ = 960/240, the current in the coffeemaker rather than in the line — the answer to a question that was not asked. C halves 4.0 A for no reason. D inverts, computing V₁/P_av.

**5. B.** V₁/I₁ = 120/8 = 15 Ω, then R = (V₁/I₁)(N₂/N₁)² = 15(2)² = 60 Ω. A stops at the apparent resistance and never applies the formula. C multiplies by the ratio instead of the ratio squared — the standard slip. D divides V₂ by 1, treating the rating as a resistance.

**6. C.** N₂/N₁ = V₂/V₁ = 120/240 = 1/2, so the secondary has half as many turns: step-down. A is Example 1's ratio, obtained by putting the dryer's rating in the primary. B is a current, not a ratio. D squares the ratio prematurely — the square belongs only in the resistance formula.

**7. D.** I₂ = P_av/V₂ = 1600/120 = 13.3 A. A is I₁ = 1600/240, the current from the outlet, which is what part (b) asks for but not what this question asks for. B halves 6.67 A, applying the ratio the wrong way round. C divides nothing.

**8. A.** V₁/I₁ = 240/6.67 = 36 Ω, which is the resistance the dryer *appears* to have at 240 V. B is the dryer's own resistance, R = 36 × (1/2)² = 9 Ω — the right number for the wrong question. C multiplies by the ratio rather than by its square. D squares 12 for no reason.

**9. B.** I₁V₁ = I₂V₂, so doubling V₂ halves I₂ for the same power. A would double the power out of nothing. C breaks the power equation. D applies the square from the resistance formula to a current, where it does not belong.

**10. C.** Slide 5: the core is laminated "to minimize eddy current losses" and "the insulation prevents the eddy currents from flowing from one sheet of metal to the next". A confuses the core with the windings. B is done by the turns ratio, not the core construction. D is true of transformers but has no connection with lamination — slide 7 gives the frequency statement separately.

**11. A.** Slide 7: "All of the currents and voltages in the transformer have the same frequency as the AC source." B and C apply the turns ratio to the frequency, which it never touches. D would mean the transformer produced DC, which it cannot.

**12. D.** ε₂/ε₁ = (−N₂ dΦ_B/dt)/(−N₁ dΦ_B/dt): the derivative cancels and so do the two identical minus signs. A is false — the minus sign in equation 1 *is* Lenz's law and it is on her slide. B accuses her of an error where the algebra is exact. C is false; an induced emf can perfectly well be negative at a given instant.

**13.** Givens: V₁ = 120 V, I₁ = 8.0 A, and N₂/N₁ = V₂/V₁ = 240/120 = 2. Then V₁/I₁ = 120/8 = 15 Ω. Using V₁/I₁ = R/(N₂/N₁)², R = (V₁/I₁)(N₂/N₁)² = 15(2)² = 15 × 4 = 60 Ω. The 15 Ω is the **apparent** resistance — what the 120 V line sees when it looks through the transformer; the 60 Ω is the coffeemaker's **actual** resistance, which is what part (c) asked for. Checking with numbers already on the slides, R = V₂/I₂ = 240/4.0 = 60 Ω.

**14.** One core carries one flux, and slide 8 states that the flux per turn Φ_B is the same in the primary and the secondary. Faraday's law applied to each winding therefore uses the *same* dΦ_B/dt: ε₁ = −N₁ dΦ_B/dt and ε₂ = −N₂ dΦ_B/dt. Divide the second by the first — dΦ_B/dt cancels, and so do the two minus signs — leaving ε₂/ε₁ = N₂/N₁ at every instant. That statement is about **emfs**. To replace the emfs by the terminal voltages V₁ and V₂ you need slide 9's extra assumption: in an **ideal** transformer, with no energy losses in the windings or the core, each winding's induced emf is equal to the voltage at its terminals. Only with that assumption in hand does V₂/V₁ = N₂/N₁ follow.

**15.** Part (c) asked what resistance the dryer will *appear* to have when operated at 240 V, and the resistance seen from the primary is by definition V₁/I₁ = 240/6.67 = 36 Ω (exactly 36 Ω, since I₁ = 1600/240 = 20/3 A). So the slide's last line does answer its own question. What it leaves out is the dryer's own resistance: using slide 10's V₁/I₁ = R/(N₂/N₁)² with N₂/N₁ = 1/2, R = (V₁/I₁)(N₂/N₁)² = 36 × (1/2)² = 36 × 1/4 = 9 Ω. Second check, from the secondary side: R = V₂/I₂ = 120/13.3 = 9 Ω, and equivalently R = V₂²/P_av = 120²/1600 = 14400/1600 = 9 Ω. Note that this is where Example 2 differs from Example 1: Example 1(c) wanted the appliance's own resistance and so ended with the multiplication by (N₂/N₁)², while Example 2(c) wanted the apparent resistance and stopped one line earlier.
