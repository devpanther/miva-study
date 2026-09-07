# Tuesday — PHY_102 nightly check

*Conceptual session on Week 12 transformers, exactly as the lecturer builds them.*
*Sit cold, notes closed, 15 minutes. 8 multiple choice, 4 written. Score out of 12.*

**1.** The primary of a transformer has 400 turns and an induced emf of 120 V. The secondary, on the same core, has 50 turns. What is the emf induced in the secondary?
A. 960 V
B. 15 V
C. 120 V
D. 0.30 V

**2.** An ideal transformer must give 8.0 V from a 240 V supply. Its secondary has 40 turns. How many turns must the primary have?
A. 1200
B. 30
C. 1.3
D. 9600

**3.** The secondary of an ideal transformer supplies 6.0 V across a 1.5 Ω lamp. The primary is fed from a 120 V supply. What power does the primary draw from the supply?
A. 480 W
B. 4.0 W
C. 24 W
D. 9.6 × 10³ W

**4.** A real transformer takes 2.0 A at 240 V from the supply and delivers 18 A at 24 V to its load. What is its efficiency?
A. 100%
B. 111%
C. 10%
D. 90%

**5.** A load of 8.0 Ω is connected across the secondary of an ideal transformer with N₂/N₁ = 1/5. What resistance does the supply connected to the primary see?
A. 200 Ω
B. 40 Ω
C. 0.32 Ω
D. 1.6 Ω

**6.** A transformer has 100 turns on coil A and 500 turns on coil B. A 250 V a.c. source is connected to coil B and a load to coil A. Treating it as ideal, what voltage appears across the load?
A. 1250 V
B. 250 V
C. 50 V
D. 10 V

**7.** At some instant the flux in a transformer core is changing at 0.050 Wb/s. The primary has 200 turns. What is the magnitude of the emf induced in the primary at that instant?
A. 0.050 V
B. 10 V
C. 4.0 × 10³ V
D. 2.5 × 10⁻⁴ V

**8.** A 50 Hz supply feeds an ideal step-up transformer with N₂/N₁ = 20. Which quantity is the same on the secondary side as on the primary side?
A. The voltage
B. The frequency
C. The current
D. The resistance seen by the source

**9. (show your working)** A generator delivers 20 kW at 500 V. Before transmission the voltage is stepped up by an ideal transformer to 10 kV. Calculate the current in the line before and after stepping up, and the factor by which the I²R loss in the line falls. Show your working.

**10. (show your working)** A real transformer's secondary reads 12.0 V with nothing connected and 11.2 V when supplying 2.0 A. Calculate the resistance of the secondary winding and the percentage of the emf lost inside it at this load, and state what the ideal-transformer assumption says about this loss. Show your working.

**11. (show your working)** An amplifier delivers maximum power to a 1600 Ω load, but the loudspeaker is 4.0 Ω. Find the turns ratio N₂/N₁ of the matching transformer and say whether it is step-up or step-down. With 40 V rms on the primary, calculate the speaker voltage and the power delivered to it. Show your working.

**12. (show your working)** A transformer core is made of iron rather than air, and that iron is built from thin sheets insulated from one another rather than from a solid block. Explain what each of these two design choices achieves.

---

## Answers

**1. B** — *Equal emf per turn in both windings.* One core, one flux, so both windings share the same dΦ/dt and the emf per turn is the same: 120/400 = 0.30 V per turn. Secondary: ε₂ = 50 × 0.30 = 15 V. Equivalently ε₂/ε₁ = N₂/N₁ = 50/400.

960 V inverts the turns ratio, giving the secondary more emf with fewer turns; 120 V assumes the two emfs are equal, which would need equal turns; 0.30 V is the emf per turn, not the emf of the 50-turn winding.

**2. A** — *Turn count from the voltage ratio.* V₂/V₁ = N₂/N₁, so N₁ = N₂ (V₁/V₂) = 40 × (240/8.0) = 40 × 30 = 1200 turns. Fewer secondary turns than primary: step-down, as an 8.0 V output demands.

30 is the voltage ratio 240/8.0 quoted as a number of turns; 1.3 is 40 × (8.0/240), the ratio inverted; 9600 is 40 × 240 with the division by 8.0 V forgotten.

**3. C** — *Power in equals power out.* Secondary current I₂ = V₂/R = 6.0/1.5 = 4.0 A, so the secondary power is I₂V₂ = 4.0 × 6.0 = 24 W. Ideal transformer: I₁V₁ = I₂V₂, so the primary draws 24 W (at I₁ = 0.20 A).

480 W multiplies the secondary current by the primary voltage, mixing the two sides; 4.0 W is the secondary current 4.0 A written with the wrong unit; 9.6 × 10³ W is V₁²/R, the power the lamp would take if it were connected straight to 120 V.

**4. D** — *Efficiency of a real transformer.* Power in = I₁V₁ = 2.0 × 240 = 480 W. Power out = I₂V₂ = 18 × 24 = 432 W. Efficiency = 432/480 = 0.90 = 90%; the missing 48 W goes to eddy currents and heating in the windings and core.

100% assumes an ideal transformer, which the numbers contradict; 111% is 480/432, the ratio upside down, and no device delivers more than it takes; 10% is the fraction lost, not the fraction delivered.

**5. A** — *Resistance seen from the primary via the turns ratio.* V₁/I₁ = R/(N₂/N₁)² = 8.0/(1/5)² = 8.0/(1/25) = 8.0 × 25 = 200 Ω. A step-down transformer makes a small load look large to the supply.

40 Ω divides by the ratio 1/5 without squaring it; 0.32 Ω multiplies by (1/5)² instead of dividing; 1.6 Ω multiplies by 1/5, the ratio the wrong way and unsquared.

**6. C** — *Identifying the primary from the source connection.* The primary is whichever coil the source is connected to: coil B, so N₁ = 500 and N₂ = 100. V₂ = V₁ (N₂/N₁) = 250 × (100/500) = 50 V. With N₂ < N₁ this is a step-down connection.

1250 V takes coil A as the primary because it was named first; 250 V ignores the transformer; 10 V divides by the ratio squared, importing the square from the resistance formula into the voltage ratio.

**7. B** — *Faraday's law for one winding of a transformer.* ε₁ = −N₁ dΦ/dt, so |ε₁| = 200 × 0.050 = 10 V. Wb/s is the same unit as the volt.

0.050 V forgets N and quotes the rate of change of flux itself; 4.0 × 10³ V divides N by the rate instead of multiplying; 2.5 × 10⁻⁴ V divides the rate by N.

**8. B** — *What a transformer leaves unchanged.* All currents and voltages in a transformer have the same frequency as the source: the secondary emf is driven by the same changing flux, cycle for cycle, so the output is still 50 Hz. The voltage is multiplied by 20, the current divided by 20, and a load R looks like R/400 to the source.

Each wrong option names a quantity the turns ratio does change: voltage by N₂/N₁, current by N₁/N₂, resistance by (N₂/N₁)².

**9.** *Why power is transmitted at high voltage.* At 500 V: I = P/V = 20 000/500 = 40 A. After the step-up, the power is unchanged (I₁V₁ = I₂V₂), so at 10 000 V: I = 20 000/10 000 = 2.0 A. The line loss I²R with the same R falls by (2.0/40)² = (1/20)² = 1/400. Stepping the voltage up 20 times cuts the current 20 times and the loss 400 times.

Final answer: 40 A and 2.0 A, loss reduced by a factor of 400. A correct answer uses conservation of power to get the second current and squares the current ratio for the loss. A factor of 20 forgets the square in I²R; 800 A after step-up applies the ratio the wrong way.

**10.** *Emf versus terminal voltage in a real secondary.* The open-circuit reading is the induced emf ε₂ = 12.0 V, since no current flows and nothing is dropped inside. Under load V₂ = ε₂ − I₂r, so the drop is 12.0 − 11.2 = 0.80 V and r = 0.80/2.0 = 0.40 Ω. Fraction lost = 0.80/12.0 = 0.067, about 6.7%. The ideal-transformer assumption is that the induced emf equals the terminal voltage in each winding, that is r = 0 and no such drop, which is what allows ε₂/ε₁ = N₂/N₁ to be written as V₂/V₁ = N₂/N₁.

Final answer: 0.40 Ω (accept 0.39 to 0.41) and 6.7% (accept 6.5 to 7.0), with the statement that an ideal transformer has no internal drop so emf and terminal voltage coincide. 5.6 Ω (11.2/2.0) is the load resistance, not the winding's; 0.80 Ω forgets to divide by the current.

**11.** *Impedance matching with a transformer.* The supply must see V₁/I₁ = R/(N₂/N₁)² = 1600 Ω with R = 4.0 Ω, so (N₂/N₁)² = 4.0/1600 = 1/400 and N₂/N₁ = 1/20: a step-down transformer, since N₂ < N₁. Speaker voltage V₂ = V₁(N₂/N₁) = 40 × (1/20) = 2.0 V. Power P = V₂²/R = (2.0)²/4.0 = 1.0 W. Check from the primary side: P = V₁²/1600 = 1600/1600 = 1.0 W, the same.

Final answer: N₂/N₁ = 1/20 (accept 0.05), step-down, 2.0 V, 1.0 W. A correct answer takes the square root to get the turns ratio and gets the same power from both sides. 1/400 is the squared ratio left unrooted; 20 is the ratio inverted and would be a step-up giving 800 V.

**12.** *Purpose of the iron core and its lamination.* The iron core does two things: it greatly increases the magnetic flux produced by the primary current (iron's high permeability), and it provides a path that carries that flux round to the secondary, so that almost all the flux threading the primary also threads the secondary and the emf per turn is the same in both. Laminating the core deals with eddy currents: the changing flux induces emfs in the core metal itself, and in a solid block these drive large circulating currents that heat the core and waste power. Cutting the core into thin sheets with insulation between them breaks the paths of those currents, since they cannot flow from one sheet to the next, so the eddy-current loss is greatly reduced while the flux still passes along the sheets.

A correct answer gives both jobs of the iron (more flux, and a path linking the coils) and explains lamination as interrupting eddy currents to cut heating loss, not as anything to do with the turns ratio or the frequency.
