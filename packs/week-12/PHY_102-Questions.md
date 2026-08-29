# PHY_102 — Week 12 Question Set (sit 7 days later)

*Sit this during Saturday catch-up in Week 13, not this week. Notes closed.*

## Section A — Multiple choice (12)

**1.** A transformer will not operate from a steady DC supply. The reason is that:
a) direct current cannot flow through the insulated laminations of the core.
b) a steady current produces a steady core flux, and only a changing flux induces an emf in the secondary.
c) the transformer equation holds only for rms voltages, and DC has no rms value.
d) the primary and secondary are not electrically connected, so DC cannot cross the gap.

**2.** An 800-turn primary is connected to a 240 V rms supply; the secondary has 60 turns. The secondary voltage is:
a) 3200 V
b) 13.3 V
c) 18 V
d) 0.075 V

**3.** An ideal transformer steps 120 V up to 480 V. The primary draws 8.0 A. The secondary current is:
a) 2.0 A
b) 32 A
c) 8.0 A
d) 0.50 A

**4.** A transformer core is laminated — built from thin sheets of metal insulated from each other. This is done in order to:
a) increase the flux linkage between primary and secondary.
b) reduce the hysteresis loss in the core material.
c) reduce the resistance of the primary and secondary windings.
d) prevent eddy currents from circulating through the bulk of the core and heating it.

**5.** A transformer is supplied with 500 W and delivers 460 W to its load. Its efficiency and the power lost are:
a) 108.7 % and 40 W
b) 92.0 % and 960 W
c) 92.0 % and 40 W
d) 8.0 % and 40 W

**6.** Electrical energy is transmitted over long distances at very high voltage because, for a given power delivered:
a) the line current is smaller, and the power wasted as I²R heating in the line falls as the square of the current.
b) the resistance of the cables decreases as the voltage across them increases.
c) a high voltage moves the energy along the cables more quickly, allowing less time for losses.
d) high-voltage transmission reduces the eddy-current losses in the cables themselves.

**7.** A 20 Ω load is connected to the secondary of an ideal transformer whose turns ratio N₁ : N₂ is 1 : 4. The resistance the primary source appears to be driving is:
a) 20 Ω
b) 320 Ω
c) 5.0 Ω
d) 1.25 Ω

**8.** A transformer has 250 turns on its primary and 5000 turns on its secondary. It is:
a) a step-down transformer, dividing the voltage by 20 and dividing the current by 20 as well.
b) a step-up transformer, multiplying the voltage by 20 and dividing the current by 20.
c) a step-up transformer, multiplying both the voltage and the current by 20.
d) a step-down transformer, dividing the voltage by 20 and multiplying the current by 20.

**9.** A transformer is driven at 50 Hz by a 3 : 1 step-down turns ratio. The output frequency is:
a) 50 Hz, because the turns ratio scales amplitudes and cannot change the frequency.
b) 150 Hz, because stepping the voltage down steps the frequency up in the same ratio.
c) 16.7 Hz, because the frequency is divided by the turns ratio along with the voltage.
d) zero, because the output of a step-down transformer is direct current.

**10.** Which measure attacks hysteresis loss specifically?
a) Using thicker copper wire for the windings.
b) Laminating the core into insulated sheets.
c) Winding the primary and secondary on opposite limbs of the core.
d) Choosing a soft magnetic core material that needs little energy per cycle to reverse its magnetisation.

**11.** An ideal transformer draws 2.0 A from a 230 V rms supply and its secondary output is 23 V rms. The secondary current is:
a) 2.0 A
b) 20 A
c) 0.20 A
d) 46 A

**12.** Which statement about an ideal transformer is correct?
a) A step-up transformer increases the voltage and the current together.
b) The power in the secondary exceeds that in the primary by the turns ratio.
c) The product of voltage and current is the same on both sides.
d) Its efficiency exceeds 100 % because the secondary voltage may exceed the primary voltage.

## Section B — Short answer (3)

**13.** State the transformer equation and the ideal-transformer power relation, defining every symbol with its SI unit. Explain in one or two sentences the physical reason why the voltage ratio equals the turns ratio, and state what the turns ratio does to the current and to the frequency.

**14.** A 960 W coffeemaker designed for a 240 V line is to be operated from a 120 V supply. Say what transformer is required and give its turns ratio; calculate the current drawn from the 120 V line, the current in the coffeemaker itself, and the coffeemaker's resistance; then state the resistance the 120 V line appears to be driving and verify it with the impedance-transformation rule.

**15.** Name four sources of energy loss in a real transformer and give, for each, the practical measure that reduces it. Then explain which of these losses continue when the secondary is left open-circuited with the primary still energised, and why.

---

## Answers

**Section A**

1. **b** — The secondary emf is −N₂ dΦ/dt; with DC the core flux is constant after switch-on, so dΦ/dt = 0. (A transient pulse does appear at switch-on and switch-off, when the flux is changing.)
2. **c** — V₂ = V₁N₂/N₁ = 240 × 60/800 = 18 V; option a inverts the turns ratio and b quotes the ratio 800/60 itself.
3. **a** — Ideal ⇒ V₁I₁ = V₂I₂, so I₂ = 8.0 × 120/480 = 2.0 A; a step-up in voltage is a step-down in current (option b applies the ratio the wrong way).
4. **d** — The insulation between sheets breaks the wide conducting loops in which eddy currents would otherwise circulate; hysteresis is cured by the choice of core material, not by lamination.
5. **c** — η = 460/500 = 0.920 = 92.0 %; the missing 40 W appears as heat in the windings and the core.
6. **a** — I = P/V, so P_loss = I²R_line = P²R_line/V²; ten times the voltage means one hundredth of the line loss.
7. **d** — R_apparent = (N₁/N₂)²R = (1/4)² × 20 = 1.25 Ω; resistance transforms with the *square* of the turns ratio (option c uses the first power).
8. **b** — N₂/N₁ = 20 > 1, so it steps the voltage up by 20; the ideal power balance then forces the secondary current down by the same factor of 20.
9. **a** — A transformer changes amplitude only; every voltage and current in it has the same frequency as the source, which is also why it can neither rectify nor convert AC to DC.
10. **d** — Hysteresis loss is the energy per cycle used in reversing the core's magnetisation, so it is attacked through the core material; laminating attacks eddy currents and thicker wire attacks copper loss.
11. **b** — V₁I₁ = V₂I₂ ⇒ I₂ = 2.0 × 230/23 = 20 A; option a assumes the current is unchanged, option d is the input power 460 W read as a current.
12. **c** — V₁I₁ = V₂I₂ is exactly the statement that an ideal transformer conserves power; voltage is gained only at the cost of current, and efficiency can never exceed 100 %.

**Section B**

**13.** Transformer equation: V₂/V₁ = N₂/N₁, where V₁ and V₂ are the rms primary and secondary voltages in volts (V) and N₁, N₂ the numbers of turns (pure numbers). Ideal power relation: P₁ = P₂, i.e. V₁I₁ = V₂I₂ with currents in amperes (A) and power in watts (W); hence I₁/I₂ = N₂/N₁. The physical reason is that the same alternating core flux Φ (webers, Wb) threads every turn of both windings, so each turn has the same induced emf dΦ/dt, and a coil's total emf is simply that per-turn emf multiplied by its number of turns. The turns ratio therefore changes the current in the *inverse* ratio to the voltage, and it changes the frequency not at all — the secondary alternates at exactly the source frequency.

**14.** The appliance needs 240 V from a 120 V supply, so a **step-up transformer** with N₂/N₁ = 240/120 = **2** (1 : 2). Ideal, so P₁ = P₂ = 960 W: current from the line I₁ = 960/120 = **8.0 A**; current in the coffeemaker I₂ = 960/240 = **4.0 A** (and indeed I₁/I₂ = 2 ✓). Its resistance R = V₂²/P = 240²/960 = **60 Ω**. The line appears to drive V₁/I₁ = 120/8.0 = **15 Ω**, which matches the rule R_apparent = (N₁/N₂)²R = (½)² × 60 = 15 Ω ✓.

**15.** (i) **Copper loss** — I²R heating in the windings; reduced by using thicker, lower-resistance conductors. (ii) **Eddy-current loss** — currents induced in the core itself; reduced by laminating the core into thin sheets insulated from one another. (iii) **Hysteresis loss** — energy spent reversing the core's magnetisation each cycle; reduced by using a soft magnetic material such as silicon steel. (iv) **Flux leakage** (and mechanical/humming loss) — flux that fails to link the secondary; reduced by a closed core of high permeability with the windings well coupled, and by clamping the laminations tightly. With the secondary open-circuited, no secondary current flows and the primary draws only a small magnetising current, so copper loss becomes almost negligible — but the core is still being magnetised and demagnetised at the supply frequency, so the **eddy-current and hysteresis (core) losses continue essentially unchanged**. Copper loss depends on the load current; core loss depends on the flux and frequency, and so is present whenever the primary is energised.
