# Tuesday — PHY_102 nightly check

*Conceptual session on Week 12 transformers exactly as the lecturer builds them: the shared core flux and her equation 1, ε₁ = −N₁ dΦ_B/dt and ε₂ = −N₂ dΦ_B/dt; why equal flux per turn gives equal emf per turn and hence equation 2, ε₂/ε₁ = N₂/N₁; the ideal-transformer assumption that upgrades it to equation 3, V₂/V₁ = N₂/N₁; step-up as N₂ > N₁ and step-down as N₂ < N₁; the energy statement I₁V₁ = I₂V₂; the squared turns ratio in V₁/I₁ = R/(N₂/N₁)²; and the hardware facts — iron core, lamination against eddy currents, unchanged frequency, impedance matching for maximum power transfer.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Slide 8 writes ε₁ = −N₁ dΦ_B/dt and ε₂ = −N₂ dΦ_B/dt with one and the same dΦ_B/dt. What does the lecturer conclude from that fact?
A. The two windings carry the same current
B. The primary emf is always the larger of the two
C. The induced emf per turn is the same in the two coils
D. The magnetic flux is twice as large in the secondary

**2.** In the deck's notation, which winding carries the subscript 1?
A. The primary — the side connected to the input AC voltage source
B. Whichever side has more turns
C. The side connected to the resistor R
D. Whichever side is at the higher voltage

**3.** How does the deck define a step-up transformer?
A. One whose secondary current exceeds its primary current
B. One for which N₂ > N₁
C. One connected to the higher of the two available supply voltages
D. One whose core has more laminations than a step-down transformer

**4.** Equation 2 is about emfs: ε₂/ε₁ = N₂/N₁. What does the lecturer add on the next slide before she is entitled to write equation 3, V₂/V₁ = N₂/N₁?
A. That the core is laminated so no eddy currents flow
B. That all voltages are rms rather than peak values
C. That the frequency is unchanged from primary to secondary
D. That in an ideal transformer the induced emfs equal the terminal voltages

**5.** According to slide 4, what is the iron core for?
A. To conduct the current from the primary winding into the secondary winding
B. To increase the magnetic flux and provide a medium for it to pass from one coil to the other
C. To store the energy that the secondary will later deliver to the load
D. To hold the two windings apart so that they do not short together

**6.** The core is made of thin sheets of metal insulated from one another. According to slide 5, what does the insulation achieve?
A. It raises the resistance of the secondary winding, reducing heating there
B. It keeps the primary and secondary circuits electrically isolated
C. It prevents eddy currents from flowing from one sheet of metal to the next
D. It increases the flux per turn and so raises the secondary emf

**7.** Slide 10 states I₁V₁ = I₂V₂. Read physically, this says that
A. voltage can only be gained at the cost of current, since the power is the same on both sides
B. the current is the same on both sides whenever the voltages match
C. the secondary delivers more power than the primary receives, by the turns ratio
D. the current and the voltage both rise together in a step-up transformer

**8.** Slide 11 says a transformer may be used to match resistances between the primary circuit and the load. What is the stated purpose?
A. To make the secondary current equal the primary current
B. To keep the frequency of the load the same as that of the source
C. To eliminate eddy current losses in the load
D. To achieve maximum power transfer between the source and the load resistance

**9.** Set out the lecturer's three numbered equations in order and say, for each step, what makes the next line follow. Be explicit about where the two minus signs go.
*(short answer)*

**10.** The deck says transformers 'can only be used with AC'. Justify that from her own equations rather than from memory.
*(short answer)*

**11.** Without doing any arithmetic beyond the ratio itself, say which of the lecturer's two examples is step-up and which is step-down, and identify the primary in each. Explain why the appliance's own rating never decides the answer.
*(short answer)*

**12.** Explain the formula V₁/I₁ = R/(N₂/N₁)² in words: what R is, what V₁/I₁ is, and why the turns ratio appears squared rather than to the first power.
*(short answer)*

## Answers

**1. C** — Dividing each equation by its own N gives ε/N = −dΦ_B/dt, the same number for both coils — her exact words are 'the induced emf per turn is the same in the two coils', and that is what licenses equation 2. Option 1 is contradicted two slides later, where I₁ = 8.0 A and I₂ = 4.0 A in the same example. Option 2 assumes an ordering the equations never fix; which emf is larger depends entirely on which N is larger. Option 4 misreads the shared flux: she says explicitly 'the flux per turn Φ_B is the same in both the primary and secondary'.

**2. A** — Slide 4: 'The side connected to the input AC voltage source is called the primary and has N₁ turns. The other side, called the secondary, is connected to a resistor and has N₂ turns.' Option 2 confuses the label with the turns ratio; in Example 2 the primary has more turns, in Example 1 fewer. Option 3 names the secondary. Option 4 fails on Example 1, where the primary sits at 120 V and the secondary at 240 V. Getting this wrong inverts every ratio in both worked examples.

**3. B** — Slide 9 states it in turns: 'When N₂ > N₁, the transformer is referred to as a step-up transformer. When N₂ < N₁, the transformer is referred to as a step-down transformer.' Equation 3 makes that equivalent to V₂ > V₁, but the definition she gives is the one to quote. Option 1 has it backwards — stepping voltage up steps current down, by I₁V₁ = I₂V₂. Option 3 confuses the supply with the transformer. Option 4 invents a distinction; lamination is about eddy currents and is the same for both.

**4. D** — Slide 9 opens with exactly that sentence: 'In an ideal transformer, the induced emfs ε₁ and ε₂ in the primary and secondary windings are equal to the terminal voltages, respectively.' The move from equation 2 to equation 3 is a physical assumption, not algebra — in a real transformer the terminal voltage differs from the induced emf. Option 1 is a construction detail from slide 5, not the licence for equation 3. Option 2 is a convention about how numbers are quoted; it changes no relationship. Option 3 is true (slide 7) but says nothing about emf versus terminal voltage.

**5. B** — Her words: 'The core is used to increase the magnetic flux and to provide a medium for the flux to pass from one coil to the other.' Option 1 describes the commonest misconception about transformers — the windings are never electrically connected; what crosses is flux, not charge. Option 3 turns the transformer into a battery; nothing in the deck stores energy, and slide 10 has power in equal to power out at every instant. Option 4 names an incidental mechanical fact, not the reason iron is used.

**6. C** — Slide 5: the core is laminated 'to minimize eddy current losses ... The insulation prevents the eddy currents from flowing from one sheet of metal to the next.' Eddy currents are the only loss mechanism this deck names. Option 1 confuses the core with the windings; lamination changes nothing about winding resistance. Option 2 is true of a transformer in general and is mentioned on the summary slide, but it is not what lamination is for. Option 4 reverses the effect — lamination is a measure against a loss, not a way of boosting flux.

**7. A** — The equation says the power input into the primary equals the power output at the secondary, so any factor gained on V must be lost on I. Example 1 shows it: 8.0 A at 120 V and 4.0 A at 240 V are both 960 W. Option 2 states a special case as though it were the content of the equation. Option 3 would make the transformer a source of energy. Option 4 is the single most common exam error — a step-up in voltage is a step-down in current.

**8. D** — Her words: 'This way, maximum power transfer can be achieved between a given power source and the load resistance. In stereo terminology, this technique is called impedance matching.' She then adds that the transformer 'transforms not only voltages and currents, but resistances as well' — the resistance seen from the primary being R/(N₂/N₁)². Option 1 would require a 1 : 1 ratio and has nothing to do with matching. Option 2 happens anyway, at every turns ratio. Option 3 relocates a core loss into the load.

**9.** A good answer runs: equation 1 is Faraday's law applied to each winding using one shared flux, ε₁ = −N₁ dΦ_B/dt and ε₂ = −N₂ dΦ_B/dt. Dividing the second by the first cancels dΦ_B/dt and cancels the two identical minus signs, giving equation 2, ε₂/ε₁ = N₂/N₁, valid at any instant — the absence of a minus sign there is a cancellation, not an omission. Equation 3, V₂/V₁ = N₂/N₁, then follows only after slide 9's assumption that in an ideal transformer each induced emf equals its terminal voltage. It should name equation 3 as the one that carries an assumption, and note that N is a pure count of turns while ε and V are in volts, so both ratios are dimensionless.

**10.** A good answer points at the derivative in equation 1: the induced emf in each winding is proportional to dΦ_B/dt, not to Φ_B. A steady direct current in the primary sets up a steady flux in the core; a steady flux has dΦ_B/dt = 0, so ε₂ = −N₂ dΦ_B/dt = 0 and nothing is induced in the secondary, no matter how many turns it has or how large the DC is. Slide 7 makes the same point positively — it is the AC source that 'causes a changing magnetic field to be created in the core', and that changing field is what induces the secondary current. The answer should tie this back to slide 3's reason for preferring AC for distribution: only AC voltages can be stepped up for transmission and back down for homes and businesses.

**11.** A good answer says the primary is always the winding connected to the input source. In Example 1 the source is the USA 120-V line, so V₁ = 120 V, and the coffeemaker is the load at V₂ = 240 V, giving N₂/N₁ = 2, which is N₂ > N₁, a step-up transformer. In Example 2 the source is the European 240-V outlet, so V₁ = 240 V, and the dryer is the load at V₂ = 120 V, giving N₂/N₁ = 1/2, which is N₂ < N₁, a step-down transformer. The appliance rating never decides which side is the primary: the coffeemaker is rated 240 V and the dryer 120 V, and each sits on the secondary regardless. It should note that reversing this assignment inverts every ratio, current and resistance in the rest of the example.

**12.** A good answer identifies R as the load resistance connected across the secondary — the resistor of slide 5, across which V₂ appears — and V₁/I₁ as the equivalent or apparent resistance that the source sees when it looks into the primary, both in ohms. On the square: a resistance is a voltage divided by a current, the turns ratio scales the voltage by N₂/N₁ and scales the current the opposite way by N₁/N₂, so the quotient picks up the factor twice. It should read the consequence off the formula — for a step-up transformer N₂/N₁ is greater than 1, so the load looks smaller from the primary, exactly as Example 1's 60 Ω coffeemaker looks like 15 Ω to the 120 V line — and connect it to slide 11: choosing the turns ratio to make R look like the source's own resistance is impedance matching, done for maximum power transfer.
