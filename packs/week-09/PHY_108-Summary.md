# PHY_108 — Week 9 Summary

*General Physics Practical II · Week 9 (2 – 8 Nov 2026) · Topic: Experiment to determine the specific heat of a solid by the method of mixtures — Q = mc∆T, heat lost = heat gained, and the calorimeter term*

## The 8 most examinable things this week

1. **Aim**: to determine the **specific heat of a solid using the mixture method** (the method of mixtures). A hot solid of known mass is dropped into cold water in a calorimeter, and the specific heat is recovered from the temperature change of the mixture.
2. **Definition**: the **specific heat capacity** of a material is the **heat energy required to raise the temperature of unit mass (1 kg) of that material by one degree Celsius (1 °C)**. It measures the material's ability to **store or release** heat energy, and it is a **property of the material**, not of the sample. **SI unit: J/kg·°C** (equivalently **J/kg·K**, since a change of 1 °C is a change of 1 K).
3. **The heat equation**: **Q = mc(T_f − T_i)**, with **Q** the heat in joules (J), **m** the mass in kilograms (kg), **c** the specific heat capacity in J/kg·°C, and **T_i, T_f** the initial and final temperatures in °C. **Q is positive when the body gains heat and its temperature rises**, negative when it loses heat.
4. **The physical set-up**: a solid block of mass **m_s** heated to **T_s** is dropped into a calorimeter of mass **m_c** containing water of mass **m_w**, both initially at room temperature **T_r**. Heat flows **spontaneously** from the hot solid to the cold water *and to the calorimeter itself*, until everything reaches one **final equilibrium temperature T_f**.
5. **The working equation** — the principle of **conservation of energy** applied to a mixture, *heat lost by the solid = heat gained by the water and the calorimeter*:
   **m_s c_s (T_s − T_f) = (m_w c_w + m_c c_c)(T_f − T_r)**, so **c_s = (m_w c_w + m_c c_c)(T_f − T_r) / [m_s (T_s − T_f)]**.
   **c_s** = specific heat of the solid (the unknown), **c_w = 4186 J/kg·°C** (water), **c_c** = specific heat of the calorimeter material (**387 J/kg·°C** for the deck's copper calorimeter).
6. **The calorimeter term m_c c_c is not optional.** The vessel warms up with the water and absorbs real energy. Dropping it makes the heat gained too small and so makes **c_s come out too low** (391 instead of 410 J/kg·°C on the deck's own data — a 5 % error from one omitted term). The combination **m_w c_w + m_c c_c** is the **total heat capacity of the mixture in J/°C**; divided by c_w it is the **water equivalent** of the calorimeter, the mass of water that would absorb the same heat.
7. **The apparatus in order of use, and what each is for**: **digital balance** (m_s, m_c, m_w — tare between the calorimeter and its water), **glass beaker + water reservoir + hot plate** (heat the solid to a set **90–99 °C**), **thermometer** (T_s, T_r, T_f), **crucible tongs** (transfer the hot block **fast**, without cooling it or scalding the hand), **calorimeter inside an insulating jacket with a cover** (stop heat leaking to the room while equilibrium is reached).
8. **Ordering and sign checks that mark the whole answer**: **T_s > T_f > T_r** always. The solid's drop is **(T_s − T_f)**, the water's rise is **(T_f − T_r)** — never the other way round, and never (T_s − T_r). If your arithmetic gives a negative c_s you have subtracted a temperature backwards.

## Apparatus

**Digital balance · hot plate · crucible tongs ("crucial tong" in the deck) · glass beaker · thermometer · water reservoir · metal blocks of different material · insulating jacket with cover · calorimeter.**

The **insulating jacket with its cover** is the piece that makes the energy equation true: without it the "heat lost by the solid" also goes into the room, and the equation has a missing term. The **tongs** exist because the block must reach the water still at T_s. The **different metal blocks** are there because c is a property of the material — copper, aluminium, iron and lead give different answers from the same procedure.

## Theory, stated precisely

Calorimetry is old: one of the first calorimeters was built by **Antoine Lavoisier** in the late 18th century, and **James Joule**'s apparatus in the mid-19th century established the **mechanical equivalent of heat** — the link between mechanical work, heat and energy that made "heat is a form of energy" quantitative, and that underlies specific heat.

**Why different materials differ.** Adding energy to a solid raises the vibrational energy of its atoms; how much the *temperature* rises for a given energy input depends on how many atoms there are per kilogram and how they are bound. **Water has an exceptionally high specific heat (4186 J/kg·°C)** — it soaks up a great deal of energy for a small temperature rise, which is why it is used as a **coolant** in industrial processes and why the sea moderates coastal climate. **Metals have low specific heats (a few hundred J/kg·°C)** — they heat up fast for the same energy, which is why metal cookware works.

**Heat gained by water and calorimeter**: Q_gained = m_w c_w (T_f − T_r) + m_c c_c (T_f − T_r) = **(m_w c_w + m_c c_c)(T_f − T_r)**.
**Heat lost by the solid**: Q_lost = **m_s c_s (T_s − T_f)**.
**Set them equal** (this *is* the conservation-of-energy step examiners want named) and solve for c_s.

**Note on mass units.** c_s is a ratio in which mass appears in both the numerator and the denominator, so **grams may be used throughout provided every mass is in grams**. Mixing grams with kilograms is what wrecks the answer. The deck's Excel sheet reports masses in **grams** while c_w and c_c are in **J/kg·°C**; convert all three masses to kilograms and the units come out as J/kg·°C directly.

## Procedure (in order)

1. **Drag the metal cube onto the digital balance** to find its mass **m_s**; the reading appears in a callout. **Click Record.**
2. **Drag the metal block into the glass beaker.**
3. **Raise the water reservoir above the beaker** to fill it with water.
4. **Place the beaker on the hot plate.**
5. **Drag the thermometer to the beaker** (the view zooms in).
6. **Rotate the knob to set the heating temperature between 90 and 99 °C.** **Click Record.**
7. **While the solid is heating**, drag the **calorimeter to the balance** to find its mass **m_c**. **Click Record.**
8. **Click the balance to tare it**, then raise the water reservoir above the calorimeter (still on the balance) to add water; the balance now reads the **mass of water m_w alone**. **Click Record.**
9. **Place the calorimeter inside the insulating jacket and put the top cover on.** The view zooms in and the thermometer shows the **water temperature T_r**. **Click Record.**
10. **Zoom to the hot plate**: the solid has reached (almost) the pre-set temperature **T_s**. **Click Record.**
11. **Using the crucible tongs, lift the hot cube and move it into the calorimeter** inside the insulating jacket.
12. **Replace the top cover**, and read the **final temperature of the mixture T_f**, which **must be higher than T_r**. **Click Record.**
13. The experiment ends and an **Excel sheet downloads** with m_s, m_c, m_w, T_r, T_s, T_f, c_w and c_c. Compute c_s from the working equation.

*The blinking object in the simulation indicates whose turn it is to be dragged.*

## What is plotted against what

The deck's run gives **one** value of c_s, so strictly it needs no graph. The standard graphical treatment — and the form an examiner will ask for — is to **repeat the experiment with several masses or several starting temperatures** and plot

**y = Q_gained = (m_w c_w + m_c c_c)(T_f − T_r)** in joules **against x = m_s(T_s − T_f)** in kg·°C.

Since Q_gained = c_s · m_s(T_s − T_f), this is **y = c_s x**: a **straight line through the origin whose gradient is the specific heat of the solid, c_s, in J/kg·°C**. The **intercept should be zero**; a **negative intercept** (the line cuts the x-axis at a positive value) means the solid lost heat that never reached the water — **heat lost in transfer or through the jacket**, or the calorimeter term wrongly handled. A **positive intercept** means heat gained from somewhere else, e.g. the thermometer or stirrer, or a zero error in the thermometer.

For a single-material run the same idea is used in reverse: **Q against ∆T for the mixture** is a straight line of gradient **(m_w c_w + m_c c_c)**, the **total heat capacity in J/°C**.

## Worked example — the deck's copper data

From the downloaded Excel sheet: **material copper; m_s = 8.9 g, m_c = 36.36 g, m_w = 68.63 g, T_r = 16.1 °C, T_s = 91.3 °C, T_f = 17.0 °C, c_w = 4186 J/kg·°C, c_c = 387 J/kg·°C.**

**Step 1 — convert masses to kilograms.** m_s = 8.9 × 10⁻³ kg, m_c = 36.36 × 10⁻³ kg, m_w = 68.63 × 10⁻³ kg.

**Step 2 — total heat capacity of water + calorimeter.**
m_w c_w = 0.06863 × 4186 = **287.29 J/°C**
m_c c_c = 0.03636 × 387 = **14.07 J/°C**
m_w c_w + m_c c_c = **301.36 J/°C** (water equivalent = 301.36/4186 = 0.0720 kg = **72.0 g of water**)

**Step 3 — heat gained.** T_f − T_r = 17.0 − 16.1 = **0.9 °C**
Q_gained = 301.36 × 0.9 = **271.2 J**

**Step 4 — the solid's side.** T_s − T_f = 91.3 − 17.0 = **74.3 °C**
m_s(T_s − T_f) = 0.0089 × 74.3 = **0.6613 kg·°C**

**Step 5 — solve.**
**c_s = 271.2 / 0.6613 = 410 J/kg·°C**

**Comment.** The accepted value for copper is **387 J/kg·°C**, so the result is high by 410 − 387 = 23, i.e. **≈ 6 %** — consistent with a small heat gain, a thermometer read to only 0.1 °C, and a rise of just 0.9 °C. Note how the omission of the calorimeter would have gone the other way: using m_w c_w alone gives 287.29 × 0.9 / 0.6613 = **391 J/kg·°C**, too low. Note also the smallness of ∆T: only 8.9 g of metal is warming 68.63 g of water, and metal has a tenth of water's specific heat, so a large drop for the solid buys a tiny rise for the water — **the 0.9 °C rise is the weakest number in the whole experiment**, and every fractional error in it passes straight into c_s.

## Precautions

- **Transfer the hot block quickly with the tongs and drop it gently but immediately into the water.** Every second in the air is heat lost that the equation credits to the water. Do not let it touch the bench.
- **Do not splash**, and make sure the block is **completely submerged** — an exposed part of the block never gives up its heat to the water.
- **Keep the calorimeter inside the insulating jacket with the cover on** throughout, so that heat is neither lost to nor gained from the room while equilibrium is established.
- **Tare the balance after weighing the calorimeter and before adding water**, so that m_w is the mass of water alone and not water + vessel.
- **Read T_f at the highest steady value the thermometer reaches**, not at a fixed time; too early and equilibrium is not reached, too late and the mixture has begun to cool.
- **Record T_s at the moment of transfer**, when the block has actually reached the pre-set 90–99 °C, not the knob setting assumed at the start.
- **Use enough water to cover the block but not so much that the temperature rise is unmeasurably small**; and use as large a block as the calorimeter allows, to make (T_f − T_r) as large as possible.
- **Avoid parallax** when reading the thermometer, keep the bulb in the liquid and not against the metal block or the vessel wall, and check the thermometer for zero error.
- **Handle the hot plate, the beaker and the hot block only with the tongs** — the block is at ~95 °C.

## Sources of error

| Error | Effect |
|---|---|
| **Heat lost by the block during transfer** (slow tongs, air cooling) | the block arrives below the recorded T_s, so (T_s − T_f) is overstated — **c_s too low** |
| **Heat lost from the calorimeter to the room** (jacket open, cover off, long wait) | T_f too low, so the heat gained is understated — **c_s too low** |
| **Calorimeter term m_c c_c omitted** | heat gained understated — **c_s too low** (391 vs 410 J/kg·°C on the deck's data) |
| **Small temperature rise (only 0.9 °C) read on a 0.1 °C thermometer** | ≈ 11 % uncertainty in (T_f − T_r) alone — the **dominant random error**, scattering c_s badly |
| **Water splashed out, or the block not fully submerged** | m_w wrong, or part of the block's heat never delivered — c_s unreliable |
| **Water carried over on the block from the hot beaker** | extra hot water adds heat not accounted for — **c_s too high** |
| **Failure to tare the balance before adding water** | m_w includes the calorimeter's mass — heat gained grossly overstated, **c_s far too high** |
| **Thermometer zero error, parallax, or the bulb touching the metal/vessel** | systematic offset in every temperature, and a false T_f |
| **Heat absorbed by the thermometer and stirrer**, not in the equation | small understatement of heat gained — c_s slightly low |
| **Mixing mass units** (grams with kilograms) | error of 10³ in c_s — the answer is absurd rather than merely wrong |

## Commonly confused

- **Heat (Q, joules) vs temperature (T, °C) vs specific heat (c, J/kg·°C)** — Q is energy transferred, T is a state of the body, c is the *rate of exchange* between the two per kilogram. "271 J" is the heat; "410 J/kg·°C" is the specific heat. Quoting Q as the answer is the classic slip.
- **Specific heat capacity (c, J/kg·°C) vs heat capacity (mc, J/°C) vs water equivalent (mc/c_w, kg)** — the first is per kilogram and belongs to the *material*; the second belongs to the *object*; the third re-expresses the second as a mass of water. Here c_c = 387 J/kg·°C, m_c c_c = 14.07 J/°C, and the water equivalent of water-plus-calorimeter is 72.0 g.
- **(T_s − T_f) vs (T_f − T_r) vs (T_s − T_r)** — the solid falls from T_s to T_f, the water rises from T_r to T_f, and **T_s − T_r appears nowhere**. Both differences must be positive, which requires T_s > T_f > T_r.
- **J/kg·°C vs J/g·°C** — the SI unit is **per kilogram**; the week's summary sheet quotes J/g°C, which is 1000 times larger (water is 4186 J/kg·°C = 4.186 J/g·°C). Also **cal/g·°C**, the old unit, in which water is exactly 1.
- **c_w = 4186 vs c_c = 387** — 4186 is **water**; 387 is the **copper calorimeter** (and, coincidentally, the accepted value for the copper block, since the deck's calorimeter and specimen are both copper). Do not put 4186 where the calorimeter belongs.
- **A degree Celsius interval equals a kelvin interval** — J/kg·°C and J/kg·K are the same number. Only *absolute* temperatures differ (by 273.15), and no absolute temperature is needed here because only *differences* appear.
- **Grams cancel, but only if used everywhere** — c_s is a ratio of masses, so a consistent gram calculation is fine; a gram mass against a J/kg·°C specific heat is not.
- **Tare before the water, not before the calorimeter** — you weigh the calorimeter first, record it, *then* tare, so that the next reading is the water alone.
- **Heat lost in transfer and heat lost through the jacket both push c_s down, but by different routes** — transfer loss inflates the *denominator* (T_s − T_f is credited with heat that never arrived); jacket loss deflates the *numerator* (T_f is too low). Naming which term is affected is what separates a full-mark answer.
- **The insulating jacket is not there to keep the water warm for comfort** — it is what makes "heat lost = heat gained" a closed equation with no third term.

*Note: the deck states the aim, learning objectives, apparatus, theory and full procedure, and supplies one complete data set in the "Data Analysis" slide (copper: m_s = 8.9 g, m_c = 36.36 g, m_w = 68.63 g, T_r = 16.1 °C, T_s = 91.3 °C, T_f = 17.0 °C, c_w = 4186, c_c = 387). The slide of "different solids with their density and specific heat capacity values", the procedure figures and the walk-through video are images, so no table of material constants survives extraction; the value 410 J/kg·°C above is computed here from the deck's own numbers. The deck lists **no precautions, no sources of error and no graph** — those three sections are the standard 100-level treatment of its stated objectives, with the graphical form set out explicitly because the deck's single run cannot produce one. The extracted text drops "fi"/"ff"/"tt" ligatures ("speciﬁc", "Deﬁne", "dierent" = different, "buon" = button) and writes "crucial tong" for **crucible tongs**.*
