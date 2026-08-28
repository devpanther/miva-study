# Tuesday — PHY_102 nightly check

*A.C. nomenclature as concepts: what peak, peak-to-peak, rectified mean and rms actually mean, why rms is defined by equal heating power and where the 1/√2 comes from, the phase behaviour of R, L and C under a sinusoidal supply, reactance, and why the impedance of a series RLC circuit adds in quadrature rather than arithmetically.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** The rms value of an alternating current is defined as:
a) the average of the instantaneous values of the current taken over one complete cycle
b) the greatest instantaneous value the current reaches during a cycle, measured from zero
c) the value of the steady direct current that would dissipate the same average power in the same resistance
d) the square root of the peak value, which is where the figure 0.707 comes from

**2.** The factor 1/√2 that relates I_rms to I_max for a **sinusoid** arises because:
a) the mean of sin²ωt over a complete cycle is ½, and the rms value is the square root of that mean square
b) the mean of sin ωt over a half-cycle is 2/π, and √2 is what converts that into a peak value
c) a sinusoid is negative for half of every cycle, so half of the peak value must be discarded
d) average power is proportional to the current rather than to its square, so averaging the sinusoid itself supplies the factor

**3.** In a pure inductor carrying a sinusoidal current:
a) the voltage across it lags the current by 90°, because an inductor always opposes a change in current
b) the voltage across it leads the current by 90°, because the induced emf responds to the *rate of change* of the current
c) voltage and current stay in phase, but the voltage amplitude is reduced by the factor ωL
d) the voltage leads the current by an angle between 0° and 90° whose size depends on ωL

**4.** The impedance of a series RLC circuit is Z = √(R² + (X_L − X_C)²) rather than R + X_L + X_C because:
a) X_L and X_C are inherently negative quantities, so a square root is needed to return a positive Z
b) the current is different in each of the three components, so their oppositions cannot simply be summed
c) Kirchhoff's voltage law does not hold in an alternating circuit, so an alternative rule has to be used
d) the three voltage drops do not reach their maxima at the same instant — V_L is 90° ahead of V_R and V_C is 90° behind it — so they must be added as vectors

**5.** A series RLC circuit is driven at a frequency for which X_C > X_L. Then:
a) the circuit is inductive, the current lags the supply voltage, and φ is positive
b) the circuit is at resonance, since the two reactances are partly cancelling
c) the circuit is capacitive, the current leads the supply voltage, and φ is negative
d) the current leads the supply voltage by exactly 90°, since the capacitor is the dominant element

**6.** Averaged over a complete cycle, the power delivered to a **pure inductor** is:
a) I_rms²X_L, since X_L is measured in ohms and plays the same role for the inductor that R plays for the resistor
b) ½ I_max V_max, exactly as it would be for a resistor of resistance X_L
c) zero only at the resonant frequency, where X_L is cancelled by X_C
d) zero, because the energy stored in the magnetic field during one quarter-cycle is returned to the source during the next

**7.** The mean value of a sinusoidal current over a complete cycle is zero, yet a moving-iron ammeter in the circuit reads a definite non-zero value. This is because:
a) the meter responds only to the positive half-cycles and displays their peak value
b) the meter's deflection follows the *mean square* of the current, and its scale is calibrated to display the rms value
c) the meter averages the current over a half-cycle, giving 0.637 I_max, and that is what "rms" means
d) the meter measures the peak-to-peak value and halves it

**8.** In a series RLC circuit under a sinusoidal supply, the quantity that is the same for R, L and C is:
a) the current — both its rms value and its phase — while the three voltage drops differ in phase
b) the voltage drop, because components in series all sit across the same supply
c) the phase of the voltage drop, because all three drops are produced by one and the same source
d) the average power, because the same current passes through all three components

**9. (explain why)** Explain why the "effective" value of an alternating current is defined through equal *heating* rather than by averaging the waveform. Show where the factor 1/√2 comes from for a sinusoid, and say why the rectified mean (0.637 I_max) is not used as the standard quoted value.

**10. (explain why)** Take the current as reference and explain, from v_L = L(di/dt) and i_C = C(dv_C/dt), why the voltage leads the current by 90° in an inductor but lags it by 90° in a capacitor. State how X_L and X_C each depend on frequency, and what each element does at f → 0 and at f → ∞.

**11. (explain why)** In a series RLC circuit the measured drops are V_R = 60 V, V_L = 130 V, V_C = 50 V, yet the supply is only 100 V. Explain why this does not violate Kirchhoff's voltage law, why V_L alone can exceed the supply voltage, and what rule replaces simple addition.

**12. (explain why)** Explain what series resonance is, what happens to Z, I, φ and the power factor there, and why the statement "the reactances cancel, so no current flows" is exactly backwards. Say also how you would tell, from a measurement of the phase angle alone, whether the supply frequency is above or below f₀.

---

## Answers

**1. c** — *RMS is defined by equivalent heating power, not by the shape of the waveform.* An alternating current of rms value 5 A heats a given resistor at exactly the rate a steady 5 A DC would; this is why rms is also called the **effective** value, and why the definition works for *any* waveform, sinusoid or not. (a) is the full-cycle mean, which for a sinusoid is **zero** — it would predict no heating at all. (b) defines the **peak** value. (d) invents an arithmetic origin: 0.707 is 1/√2, obtained from the mean of the *square*, and √I_max is not even dimensionally a current.

**2. a** — *rms = root of the mean of the square.* i² = I_max² sin²ωt, and sin²ωt = ½(1 − cos 2ωt), whose cosine term averages to zero over a whole cycle; so the mean square is I_max²/2 and its root is I_max/√2. (b) is the route to the **rectified mean**, 0.637 I_max, a different quantity. (c) treats the negative half-cycle as thrown away, but the negative half contributes just as much heating — i² is positive there too. (d) is the underlying misconception the whole definition exists to defeat: power goes as **i²**, not as i, which is precisely why the mean of i is useless here.

**3. b** — *In an inductor the voltage leads the current by 90° (ELI).* v_L = L(di/dt), so with i = I_max sin ωt the voltage is ωLI_max cos ωt — a quarter of a cycle **ahead**. (a) states a correct physical fact (an inductor opposes change) but draws the opposite phase conclusion; leading/lagging swapped is the standard L/C confusion. (c) treats X_L as though it were a resistance, which would give zero phase shift and a dissipating element. (d) confuses a single element with a *combination*: an intermediate angle arises only when R is present, and for a pure L the shift is exactly 90° whatever the value of ωL.

**4. d** — *Impedance adds in quadrature because the drops are out of phase.* Only quantities that peak together may be added arithmetically. V_R peaks with the current, V_L peaks a quarter-cycle earlier and V_C a quarter-cycle later, so V_L and V_C are 180° apart and partly cancel, leaving √(V_R² + (V_L − V_C)²) — divide by the common I to get Z. (a) is false: X_L and X_C are both positive quantities; it is their *difference* that carries a sign. (b) confuses series with parallel — in series the current is common and it is the *voltages* that differ. (c) is the opposite of the truth: KVL holds exactly, but as a **vector** (phasor) sum, which is precisely the point the week's material makes.

**5. c** — *The sign of the net reactance fixes the circuit's character.* X = X_L − X_C < 0, so tan φ = X/R < 0 and φ is negative: the current **leads**, the circuit is capacitive. (a) reverses the identification, the single commonest error in the topic. (b) confuses partial cancellation with the exact equality X_L = X_C that defines resonance. (d) forgets R: the angle is arctan(X/R), which reaches 90° only if R = 0.

**6. d** — *A pure reactance stores energy, it does not dissipate it.* Over one quarter-cycle the current builds the magnetic field and the inductor absorbs energy; over the next the field collapses and returns it to the source. Instantaneous power is positive for half of each cycle and negative for the other half, in equal measure, so P_av = 0 — equivalently P_av = VI cos φ with φ = 90°, and cos 90° = 0. (a) is the "reactance is just a kind of resistance" error; I²X_L is reactive volt-amperes, not watts. (b) applies the resistor result ½V_max I_max, which already assumes v and i are in phase. (c) attaches a condition that has nothing to do with it — the average power in a pure inductor is zero at *every* frequency, and resonance is a property of a **combination**, not of one element.

**7. b** — *A meter reads what its deflecting mechanism responds to.* A moving-iron (or thermal) instrument deflects with the **square** of the current, so it responds to the mean square, which is non-zero; the scale is then marked to show its square root, the rms value. A moving-coil (DC) meter, whose deflection is linear in i, would read essentially **zero** in the same circuit — the cleanest demonstration that the full-cycle mean really is zero. (a) would make the reading 3.0 A for I_max = 3.0 A, i.e. the peak. (c) is the standard rms/rectified-mean confusion: 0.637 I_max is the half-cycle average, and it differs from 0.707 I_max by the form factor 1.11. (d) is the peak-to-peak confusion; half of I_pp is the **peak**, not the rms.

**8. a** — *In a series circuit the current is common; the voltages are not.* One conducting path means one current, identical in magnitude and phase at every point — which is why the current is taken as the phase reference and every drop is measured relative to it. (b) is the **parallel** property; in series the supply divides among the components. (c) is the core misconception the whole phasor method exists to correct: one source does not force one phase, because each element imposes its own 0°/+90°/−90° relationship. (d) confuses "same current" with "same power": P = I²R depends on the *resistance*, and L and C dissipate nothing at all.

**9.** *Concept: rms is defined by equal heating because power depends on the square of the current.* Heating in a resistance is i²R. Since i² is positive in **both** half-cycles it has a genuine non-zero average, whereas i itself averages to exactly zero over a full cycle — so an "average current" would predict no heating and be useless for rating a supply, a fuse or a cable. The effective (rms) value is therefore *defined* as the steady DC that would dissipate the same average power in the same resistance. For a sinusoid i = I_max sin ωt: i² = I_max² sin²ωt = I_max²·½(1 − cos 2ωt); the cos 2ωt term has zero mean over a cycle, so the **mean square** is I_max²/2, and **I_rms = √(I_max²/2) = I_max/√2 = 0.707 I_max**. The rectified mean 0.637 I_max is a perfectly real quantity — the half-cycle average, and what the movement of a rectifier-type meter actually senses — but it is not the value that predicts power: it is smaller than the rms by the **form factor 1.11**, so quoting it would under-state the heating by about 19% (0.637²/0.707² = 0.81). It is also related to the rms by a *different* factor for every waveform, whereas rms means the same thing (equal heating) for all of them, which is why standards quote rms.

**10.** *Concept: the 90° shifts come from differentiation, and the frequency dependences follow.* Take the common current as reference, i = I_max sin ωt. **Inductor**: v_L = L(di/dt) = ωLI_max cos ωt = ωLI_max sin(ωt + 90°). The voltage is a quarter-cycle **ahead** of the current, and its amplitude is ωLI_max, so **X_L = ωL = 2πfL**. The physical reading: the inductor's voltage is largest when the current is changing fastest, which is as the current passes through **zero**, not at its peak. **Capacitor**: here it is the current that is a derivative, i = C(dv_C/dt), so if v_C = V_max sin ωt then i = ωCV_max cos ωt — the **current** is a quarter-cycle ahead, i.e. the voltage **lags** by 90°, with amplitude V_max/(1/ωC), so **X_C = 1/ωC = 1/(2πfC)**. (ELI the ICE man.) **Frequency**: X_L ∝ f — faster changes mean a bigger back-emf; X_C ∝ 1/f — at high frequency the plates never have time to charge up, so little voltage develops. **Limits**: at f → 0 (DC) an inductor is a **short circuit** (X_L → 0) and a capacitor an **open circuit** (X_C → ∞); at f → ∞ they exchange roles, the inductor blocking and the capacitor passing.

**11.** *Concept: KVL in an AC circuit is a vector sum, because the drops peak at different instants.* KVL still holds instant by instant: at every moment v_s = v_R + v_L + v_C. What fails is adding the **amplitudes**, because the three drops reach their maxima at different times. With the common current as reference, V_R is in phase with it, V_L is 90° ahead and V_C is 90° behind — so **V_L and V_C are 180° apart and directly oppose one another**. The rule that replaces simple addition is **V_s = √(V_R² + (V_L − V_C)²)**. Here: V_L − V_C = 130 − 50 = 80 V, so V_s = √(60² + 80²) = √(3600 + 6400) = √10000 = **100 V** ✔ — exactly the supply. V_L alone can exceed the supply because at the instant the inductor's voltage peaks, the capacitor's is at its own opposite peak and the resistor's is passing through zero; the *sum at that instant* is still only 100 V. (The arithmetic sum 60 + 130 + 50 = 240 V corresponds to no instant that ever occurs.) This is also why a series circuit near resonance can develop component voltages several times the supply — a real hazard, not a paradox.

**12.** *Concept: at series resonance the reactances cancel, leaving the minimum possible impedance.* Resonance is the frequency **f₀ = 1/(2π√(LC))** at which **X_L = X_C**. There the net reactance is zero, so **Z = √(R² + 0) = R**, its **minimum** value; **I = V/R** is therefore its **maximum**; **tan φ = 0/R = 0** so **φ = 0**, current and supply voltage in phase; and the **power factor cos φ = R/Z = 1**, so the circuit absorbs the full VI as real power and behaves as pure resistance. The claim "the reactances cancel so no current flows" inverts the mechanism: cancellation removes *opposition*, it does not insert a break. What cancels is the pair of **voltages** V_L and V_C — equal in size, opposite in direction, vector sum zero — and each of them individually may be many times the supply voltage (a factor Q = X_L/R). Nothing is disconnected; the loop is more open to current than at any other frequency. **From the phase angle alone**: if the current **lags** (φ > 0) the circuit is inductive, X_L > X_C, and the supply frequency is **above** f₀; if the current **leads** (φ < 0) it is capacitive and the frequency is **below** f₀; φ = 0 means you are exactly at f₀.
