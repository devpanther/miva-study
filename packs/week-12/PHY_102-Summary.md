# PHY_102 — Week 12

*General Physics II · Week 12 (23 – 29 Nov 2026)*

Topic: **Transformers — step-up, step-down, energy considerations and efficiency.**

*Note on the source: the lecture deck's key slides ("How transformers work", "Energy consideration in transformer", and the full solutions to Examples 1 and 2) are images, so the extracted text carries the words but none of the equations. The formulae below are the standard ones the deck's own worked examples use, and the two examples are reconstructed in full here.*

## Most likely to be examined

1. **The transformer equation** V₂/V₁ = N₂/N₁, and *why*: the same changing core flux threads every turn of both coils, so the emf **per turn** is the same on both sides.
2. **Step-up vs step-down** by turns ratio, and the fact that the current ratio is the **inverse** of the voltage ratio: I₁/I₂ = N₂/N₁.
3. **Ideal transformer ⇒ P₁ = P₂**, i.e. V₁I₁ = V₂I₂. Voltage is gained only at the cost of current; nothing is amplified.
4. **A transformer needs AC.** Steady DC ⇒ steady flux ⇒ dΦ/dt = 0 ⇒ no secondary emf. And the **frequency is unchanged** by the turns ratio.
5. **Resistance (impedance) transformation:** R_apparent = (N₁/N₂)²·R_load — the deck's "impedance matching" for maximum power transfer.
6. **Real losses and their cures:** copper (I²R) loss, eddy-current loss (cured by **laminating** the core), hysteresis loss (cured by a **soft** magnetic core), flux leakage, mechanical/humming loss. Efficiency η = P_out/P_in typically **90–99 %**.
7. **Why power is transmitted at high voltage:** for a fixed delivered power, high V ⇒ small line current I, and line loss = I²R_line falls as the **square** of the current, i.e. as 1/V².
8. The two deck examples (960 W/240 V coffeemaker on a 120 V line; 1600 W/120 V hair dryer on a 240 V line) — know both, in all three parts.

## Definitions and formulae

**Transformer.** A device that transfers electrical energy between two circuits by **mutual induction**, changing the AC voltage level in the process. It consists of a **primary** coil of N₁ turns (connected to the AC source), a **secondary** coil of N₂ turns (connected to the load), and a **laminated soft-iron core** which increases the flux and guides it from one coil to the other. Turns N are pure numbers.

**Operation.** AC in the primary → a changing magnetic flux Φ in the core → by Faraday's law that changing flux induces an emf in the secondary. The core flux is common to both windings:

    V₁ = −N₁ dΦ/dt      V₂ = −N₂ dΦ/dt      ⇒   V₁/N₁ = V₂/N₂

**The transformer equation** (all voltages rms, in volts V):

    V₂/V₁ = N₂/N₁                    (turns ratio)

- N₂ > N₁ → **step-up** (V₂ > V₁).  N₂ < N₁ → **step-down** (V₂ < V₁).  N₂ = N₁ → **isolation** transformer (1 : 1).
- The **frequency** of V₂ equals that of V₁ always — a transformer changes amplitude, never frequency, and never converts AC to DC.

**Energy consideration (ideal transformer).** No winding or core losses, so

    P₁ = P₂   ⇒   V₁I₁ = V₂I₂   ⇒   I₁/I₂ = N₂/N₁ = V₂/V₁

Currents in amperes (A), power in watts (W). **Step-up in voltage = step-down in current, and vice versa.**

**Resistance/impedance transformation.** With a load R (Ω) on the secondary, the source "sees"

    R_apparent = V₁/I₁ = (N₁/N₂)² R          [note the SQUARE]

This is **impedance matching**: choose the turns ratio so the load looks like the source's own internal resistance, giving maximum power transfer.

**Efficiency of a real transformer.**

    η = P_out/P_in × 100 %  = (V₂I₂)/(V₁I₁) × 100 %          typically 90–99 %

Loss channels: **copper loss** (I²R heating in the windings — depends strongly on load current); **eddy-current loss** (currents induced in the core itself; reduced by building the core of thin sheets **insulated from one another**, so the eddy loops cannot circulate widely); **hysteresis loss** (energy per cycle to reverse the core's magnetisation; reduced by a soft magnetic material such as silicon steel); **flux leakage** (flux that misses the secondary); **mechanical/humming loss**. Eddy and hysteresis losses are **core losses** — they are present whenever the primary is energised, load or no load.

**Power transmission.** For power P delivered along a line of resistance R_line at transmission voltage V:

    I = P/V        P_loss = I²R_line = P²R_line/V²

Raising V by a factor k divides the line loss by k². This is why AC (which transformers can step up and down) beats DC for distribution.

---

## Worked example 1 — the deck's coffeemaker (turns ratio, current, resistance)

*A 960 W coffeemaker designed for a 240 V line is to be run from the USA-standard 120 V. (a) What is needed? (b) What current does it draw from the 120 V line? (c) What is the coffeemaker's resistance? (rms values.)*

(a) It needs 240 V across it while the supply is 120 V, so a **step-up transformer** with
N₂/N₁ = V₂/V₁ = 240/120 = **2**, i.e. a 1 : 2 turns ratio.

(b) The transformer is ideal, so P₁ = P₂ = 960 W. Current **from the 120 V line**:
I₁ = P/V₁ = 960/120 = **8.0 A**. (The coffeemaker itself carries only I₂ = 960/240 = 4.0 A — check: I₁/I₂ = 2 = N₂/N₁ ✓.)

(c) R = V₂²/P = 240²/960 = **60 Ω** (equivalently R = V₂/I₂ = 240/4.0 = 60 Ω).
*Extra:* the resistance the 120 V line appears to be driving is V₁/I₁ = 120/8.0 = 15 Ω, and (N₁/N₂)²R = (½)² × 60 = 15 Ω ✓.

## Worked example 2 — the deck's hair dryer (step-down, the mirror case)

*A 1600 W dryer rated at 120 V is taken to Europe, where outlets give 240 V. (a) What is needed? (b) What current does it draw from the European outlet? (c) What resistance does it appear to have at 240 V?*

(a) A **step-down transformer**, N₂/N₁ = 120/240 = **½** (2 : 1).
(b) I₁ = P/V₁ = 1600/240 = **6.67 A** from the outlet. (The dryer element carries I₂ = 1600/120 = 13.3 A.)
(c) Apparent resistance at the outlet = V₁/I₁ = 240/6.67 = **36 Ω**, while the dryer's own resistance is 120²/1600 = 9.0 Ω. Check: (N₁/N₂)²R = 2² × 9.0 = 36 Ω ✓.

## Worked example 3 — efficiency

*A transformer draws 8.00 A from a 240 V rms supply and delivers 18.0 A at 100 V rms. Find its efficiency and the power lost.*

P_in = 240 × 8.00 = 1920 W. P_out = 100 × 18.0 = 1800 W.
η = 1800/1920 = 0.9375 = **93.8 %**. Power lost = 1920 − 1800 = **120 W**, appearing as heat in the windings and the core.

## Worked example 4 — transmission loss

*200 kW is sent along a line of total resistance 3.0 Ω, first at 2.0 kV and then at 20 kV.*

At 2.0 kV: I = 200 000/2000 = 100 A, P_loss = 100² × 3.0 = 30 000 W = **30 kW** (15 % of the power).
At 20 kV: I = 10 A, P_loss = 10² × 3.0 = **300 W** (0.15 %).
Ten times the voltage → one tenth the current → **one hundredth** the loss.

## Worked example 5 — impedance matching

*An amplifier of internal resistance 500 Ω is to drive a 5.0 Ω loudspeaker. What turns ratio matches them?*

Need (N₁/N₂)² R = 500 with R = 5.0 Ω ⇒ (N₁/N₂)² = 100 ⇒ **N₁ : N₂ = 10 : 1** (a step-down transformer).

---

## Commonly confused

- **Voltage ratio vs current ratio.** V₂/V₁ = N₂/N₁ but I₂/I₁ = N₁/N₂. A step-up transformer steps the current *down*. Writing I₂/I₁ = N₂/N₁ is the single most common slip.
- **"Which current did they ask for?"** In the coffeemaker problem the appliance carries 4.0 A but the *line* delivers 8.0 A. Decide which side of the transformer the question is standing on before dividing.
- **A transformer is not an energy source.** Voltage gain × current loss = 1. Efficiency can only be ≤ 100 %.
- **Resistance transforms with the SQUARE of the turns ratio**, voltage and current with the first power.
- **DC.** A transformer does nothing with steady DC except overheat: no dΦ/dt, no secondary emf. A brief pulse *is* seen at switch-on and switch-off, because there the flux is changing.
- **Frequency is untouched.** 50 Hz in, 50 Hz out, whatever the turns ratio.
- **Lamination cures eddy currents, not hysteresis; a soft core cures hysteresis, not copper loss; thicker wire cures copper loss.** Pair the cure with the right loss.
- **Copper loss vs core loss.** Copper loss varies with the load current (∝ I²); eddy and hysteresis losses are essentially load-independent and continue at no load.
- **Line loss is I²R_line, not V²/R or P/V.** It falls as 1/V², so doubling the transmission voltage quarters the loss.
- **Isolation transformer.** 1 : 1 changes neither V nor I, yet is useful: it breaks the conducting path to the supply, which is a safety measure — not a pointless device.
