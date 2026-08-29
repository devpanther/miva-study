# PHY_102 — Week 12 Summary

*General Physics II · Topic: Transformers (Step-Up and Step-Down) · Lecturer: Dr. Sharafadeen Adeniji, PhD, Theoretical and Applied Physics*

**Scope note:** this rewrite follows the deck slide-for-slide. The lecturer builds one chain of three numbered equations — the two Faraday emfs, then the emf ratio, then the voltage ratio — adds one energy statement and one resistance-transformation formula, and then spends nine slides on **two worked examples, each in three parts (a), (b), (c)**. Those six part-answers are the whole computational content of the week and are almost certainly the shape of the exam question. She does **not** give an efficiency formula (she quotes the figure "90% to 99%" once and never calculates with it), does **not** mention hysteresis loss, copper/I²R loss or flux leakage (eddy currents are the *only* loss she names), does **not** derive or state a current–turns formula I₁/I₂ = N₂/N₁ (she only ever writes I₁V₁ = I₂V₂), does **not** do a transmission-line loss calculation, and never discusses isolation transformers, mutual inductance by name, or Lenz's law. Learn her six part-answers cold and be able to say which of her three equations each one used.

## The 8 most examinable things this week

1. **The two induced emfs (slide 8, her equation 1).** "When the magnetic flux changes because of changing currents in the two coils, the resulting induced emfs are **ε₁ = −N₁ dΦ_B/dt and ε₂ = −N₂ dΦ_B/dt**." Both carry the **same** dΦ_B/dt and both carry the **minus sign**. ε is in volts (V), Φ_B in webers (Wb), so dΦ_B/dt is in Wb/s = V; N is a pure count of turns with no unit.
2. **Why the ratio works (slide 8).** "The flux per turn Φ_B is the same in both the primary and secondary. Equations 1 above also show that the **induced emf per turn is the same in the two coils**." Hence "the ratio of the secondary emf ε₂ to the primary emf ε₁ is equal **at any instant** to the ratio of secondary to primary turns": **ε₂/ε₁ = N₂/N₁** — her equation 2.
3. **The step from emf to voltage is an assumption, not algebra (slide 9).** "In an ideal transformer, the induced emfs ε₁ and ε₂ in the primary and secondary windings are **equal to the terminal voltages**, respectively." Only then: **V₂/V₁ = N₂/N₁** — her equation 3.
4. **Step-up and step-down are defined by turns, not by voltage (slide 9).** "When **N₂ > N₁**, the transformer is referred to as a **step-up** transformer. When **N₂ < N₁**, the transformer is referred to as a **step-down** transformer." Subscript 1 is always the primary — the side connected to the input AC source (slide 4).
5. **Energy consideration (slide 10).** "The power input into the primary equals the power output at the secondary": **I₁V₁ = I₂V₂**. Watts on both sides. This is the only current relation she gives you; every current in both examples comes from it or from P_av = V₁I₁.
6. **Resistance transformation, and the square (slide 10).** "The equivalent resistance of the load resistance when viewed from the primary is **V₁/I₁ = R/(N₂/N₁)²**." R is the load resistance on the secondary (defined on slide 5), in ohms. The turns ratio enters **squared** — this is the single formula that a student most often applies to the first power.
7. **Impedance matching (slide 11).** "A transformer may be used to **match resistances** between the primary circuit and the load. This way, **maximum power transfer** can be achieved between a given power source and the load resistance. In stereo terminology, this technique is called **impedance matching**. In other words, the transformer 'transforms' not only voltages and currents, but **resistances** as well."
8. **The two facts about the hardware (slides 5–7).** The core is **laminated** — thin sheets of metal insulated from each other — "to minimize eddy current losses"; the insulation "prevents the eddy currents from flowing from one sheet of metal to the next." And: "All of the currents and voltages in the transformer have the **same frequency** as the AC source." An **ideal** transformer has "no energy losses in the windings or the core"; real ones reach "power efficiencies of 90% to 99%."

## The lecturer's build

**Why AC at all (slide 3).** "AC is better than DC for electric power distribution because it is much easier to step voltage levels up and down in AC. The AC can be transmitted at high voltages over long distances, and then the voltage can be reduced to a safe level for homes and businesses. This is done using transformers, **which can only be used with AC**."

**The hardware (slide 4).** "An AC transformer consists of two coils of wire wound around a core of iron. The side connected to the **input AC voltage source is called the primary and has N₁ turns**. The other side, called the **secondary**, is connected to a resistor and has **N₂ turns**. The core is used to **increase the magnetic flux** and to **provide a medium for the flux to pass from one coil to the other**."

**The circuit and the core (slide 5).** "An alternating voltage V₁ is applied to the primary coil, and the output voltage V₂ is across the resistor of **resistance R**." (That sentence is where the R of slide 10 is defined.) "To minimize eddy current losses, the core of a transformer is **laminated** — made up of thin sheets of metal that are insulated from each other."

**Ideal versus real (slide 6).** "In an ideal transformer, there are no energy losses in the windings or the core. This means that there are no eddy current losses. Most transformers are very efficient, with power efficiencies of 90% to 99%."

**The sequence of events (slide 7).** An AC source is connected to the primary winding → the AC source causes a **changing magnetic field** in the core → the changing magnetic field **induces a current in the secondary** → that current is delivered to the device connected to the transformer → and "all of the currents and voltages in the transformer have the same frequency as the AC source."

**The three-equation chain (slides 8–9), in her order.**

    ε₁ = −N₁ dΦ_B/dt   and   ε₂ = −N₂ dΦ_B/dt                     ......1
    ε₂/ε₁ = N₂/N₁                                                  ......2
    V₂/V₁ = N₂/N₁            (ideal transformer only)              ......3

Read the chain as an argument, because that is how she writes it. Equation 1 is Faraday's law applied twice to **one shared flux**. Divide the second by the first: the dΦ_B/dt cancels **and so do the two minus signs**, leaving equation 2 — which is why equation 2 has no minus sign in it and why that is not a lost sign. Equation 3 is not algebra at all: it is equation 2 plus the *physical assumption* that in an ideal transformer each winding's induced emf equals the voltage measured at its terminals.

*(Aside, not on her slides: the minus sign in ε = −N dΦ_B/dt is Lenz's law — the induced emf opposes the change that produced it. Φ_B is a **scalar** flux, not a vector, so the minus sign is a sense of opposition in time, not a direction in space. She never asks you to use it; she only asks you to notice that it cancels in the ratio.)*

**Energy consideration (slide 10).** Power in equals power out, **I₁V₁ = I₂V₂**, and the load seen from the primary is **V₁/I₁ = R/(N₂/N₁)²**. Note the shape of that formula: for a step-up transformer N₂/N₁ > 1, the denominator exceeds 1, and the load looks **smaller** from the primary than it really is. Example 1 is exactly that case: a 60 Ω coffeemaker looks like 15 Ω to the 120 V line.

---

### TRANSFORMER: EXAMPLE 1 (slides 12–17) — the coffeemaker

**"A friend returns to the United States from Europe with a 960-W coffeemaker, designed to operate from a 240-V line. (a) What can she do to operate it at the USA-standard 120 V? (b) What current will the coffeemaker draw from the 120-V line? (c) What is the resistance of the coffeemaker? (The voltages are rms values.)"**

**(a) — slide 13.** The supply is the primary, the appliance is the secondary.

Given that: **V₁ = 120 V and V₂ = 240 V.**
Using, **N₂/N₁ = V₂/V₁ = 240/120 = 2.**
"This means the secondary coil (connected to the coffeemaker) should have **twice as many turns** as the primary coil."

Since N₂ > N₁, this is a **step-up** transformer. Note she assigns V₁ = 120 V from the *line*, not from the appliance's rating — the appliance is the load, and the load is always on the secondary.

**(b) — slide 15.** "We find the rms current I₁ in the 120-V primary by using **P_av = V₁I₁**, where P_av is the average power drawn by the coffeemaker and hence the power supplied by the 120-V line."

**∴ I₁ = P_av/V₁ = 960/120 = 8.0 A**

"Therefore, the secondary current is"

**I₂ = P_av/V₂ = 960/240 = 4.0 A**

Two currents, one question. The question asked what is drawn **from the 120-V line**, so the answer to (b) is **8.0 A**; the 4.0 A is what flows in the coffeemaker itself. Check against equation from slide 10: I₁V₁ = 8.0 × 120 = 960 W and I₂V₂ = 4.0 × 240 = 960 W. Equal ✓ — and the current ratio 8.0/4.0 = 2 is the **inverse** of the voltage ratio. Stepping the voltage up by 2 stepped the current down by 2.

**(c) — slide 17.**

Given that: **V₁ = 120 V, I₁ = 8.0 A, and N₂/N₁ = V₂/V₁ = 240/120 = 2,**

**∴ V₁/I₁ = 120/8 = 15 Ω**

Using, **V₁/I₁ = R/(N₂/N₁)²**

**∴ R = (V₁/I₁)(N₂/N₁)² = 15(2)² = 60 Ω**

The 15 Ω is what the 120 V line **appears** to be driving; the 60 Ω is the coffeemaker's **actual** resistance, and it is (c)'s answer. The whole part turns on the factor (2)² = 4, not 2. Independent check with numbers she already has: R = V₂/I₂ = 240/4.0 = 60 Ω ✓.

---

### TRANSFORMER: EXAMPLE 2 (slides 18–21) — the hair dryer

**"You plan to take your hair dryer to Europe, where the electrical outlets put out 240 V instead of the 120 V seen in the United States. The dryer puts out 1600 W at 120 V. (a) What could you do to operate your dryer via the 240-V line in Europe? (b) What current will your dryer draw from a European outlet? (c) What resistance will your dryer appear to have when operated at 240 V?"**

**(a) — slide 19.**

Given that: **V₁ = 240 V and V₂ = 120 V.**
Using, **N₂/N₁ = V₂/V₁ = 120/240 = 1/2.**
"This means the secondary coil should have **half as many turns** as the primary coil."

Since N₂ < N₁, this is a **step-down** transformer — the mirror image of Example 1, with the same two numbers swapped between primary and secondary.

**(b) — slide 20.** Using **P_av = V₁I₁**,

**∴ I₁ = P_av/V₁ = 1600/240 = 6.67 A**

"Therefore, the secondary current is"

**I₂ = P_av/V₂ = 1600/120 = 13.3 A**

Answer to (b): **6.67 A** from the European outlet. The dryer's own element carries 13.3 A. Exactly: 1600/240 = 20/3 = 6.666… A, quoted to three significant figures as 6.67 A; 1600/120 = 40/3 = 13.33… A, quoted as 13.3 A. Check: I₂/I₁ = 13.3/6.67 = 2 = N₁/N₂ ✓, and I₁V₁ = 6.67 × 240 ≈ 1600 W = I₂V₂ = 13.3 × 120 ≈ 1600 W ✓.

**(c) — slide 21.**

Given that: **V₁ = 240 V, I₁ = 6.67 A, and N₂/N₁ = V₂/V₁ = 120/240 = 1/2,**

**∴ V₁/I₁ = 240/6.67 = 36 Ω**

That is her final line, and 36 Ω is the answer, because (c) asked what resistance the dryer will **appear** to have when operated at 240 V. (With the exact current 20/3 A, 240 ÷ (20/3) = 36 Ω exactly; 240/6.67 = 35.98, which she rounds to 36.)

**Named gap on slide 21.** She lists N₂/N₁ = 1/2 among the givens and then **never uses it**, and she never states the dryer's own resistance. Complete the line yourself, because the two examples ask for different things and an exam can ask for either:

    V₁/I₁ = R/(N₂/N₁)²   ⇒   R = (V₁/I₁)(N₂/N₁)² = 36 × (1/2)² = 36 × 1/4 = 9 Ω

and independently R = V₂/I₂ = 120/13.3 = 9 Ω ✓ (or 120²/1600 = 14400/1600 = 9 Ω). So: **Example 1(c) asks for the appliance's own resistance (60 Ω) and reaches it by multiplying by the ratio squared; Example 2(c) asks for the apparent resistance (36 Ω) and stops before that multiplication.** Read which one the question wants before you divide.

---

### Her closing SUMMARY slide (22)

"Transformers are used to change the voltage of AC electricity. This is useful because it allows electricity to be transmitted over long distances at high voltages, and then the voltage can be reduced to a safe level for homes and businesses. Transformers are also used to **isolate electrical circuits from each other**. This is useful for safety reasons, and it can also improve the performance of electrical devices."

*(The isolation claim appears here for the first and only time; nothing earlier in the deck develops it. Know the sentence, do not expect to calculate with it.)*

## Commonly confused

- **Which side is 1?** The primary is the side connected to the **input source**, always. In Example 1 the 120 V line is V₁ even though the appliance is rated 240 V; in Example 2 the 240 V outlet is V₁ even though the dryer is rated 120 V. Get this backwards and every part of both examples inverts.
- **Step-up is defined by N₂ > N₁**, not by "the bigger number". Her equation 3 makes the two equivalent, but the definition she gives is in turns.
- **ε₂/ε₁ = N₂/N₁ has no minus sign, and none was lost.** The two minus signs of equation 1 cancel in the ratio, as does dΦ_B/dt.
- **Equation 3 is only for the ideal transformer.** ε and V are different quantities; slide 9 supplies the assumption that lets you swap them.
- **Voltage and current move opposite ways.** I₁V₁ = I₂V₂ is the only relation she gives. Step the voltage up by 2 and the current goes down by 2. Writing I₂/I₁ = N₂/N₁ is the standard wrong answer.
- **"Which current did they ask for?"** Example 1 produces 8.0 A and 4.0 A on the same slide; Example 2 produces 6.67 A and 13.3 A. The line current is the primary current; the appliance current is the secondary current.
- **Resistance transforms with the SQUARE.** (2)² = 4, not 2. 15 × 4 = 60, not 15 × 2 = 30.
- **Apparent resistance versus actual resistance.** V₁/I₁ is what the source sees; R is what the appliance is. They differ by (N₂/N₁)², and Example 1(c) and Example 2(c) ask for different ones.
- **A transformer needs a *changing* flux.** Her whole equation 1 is a d/dt. It "can only be used with AC" (slide 3).
- **Lamination cures eddy currents** — that is the only loss the deck names, and the only cure. Do not attribute lamination to hysteresis; she never mentions hysteresis at all.
- **The frequency never changes** (slide 7). Turns ratios scale voltages and currents, not frequencies.
- **Units.** Turns are pure numbers, so N₂/N₁ and V₂/V₁ are dimensionless; V₁/I₁ and R are in ohms; I₁V₁ and P_av are in watts; and "the voltages are rms values" is stated in Example 1 for a reason — every V and I in both examples is an rms value.

## What to be able to say out loud

That one changing flux threads both coils, so the emf per turn is the same in both, so ε₂/ε₁ = N₂/N₁; that assuming an ideal transformer turns that into V₂/V₁ = N₂/N₁; that N₂ > N₁ is step-up and N₂ < N₁ is step-down; that power in equals power out, I₁V₁ = I₂V₂, so voltage is bought with current; that a load R on the secondary looks like R/(N₂/N₁)² from the primary, with the ratio squared, which is what impedance matching exploits; and that you can produce all six part-answers of her two examples — 2, 8.0 A, 60 Ω, 1/2, 6.67 A, 36 Ω — saying for each which of her equations you used.
