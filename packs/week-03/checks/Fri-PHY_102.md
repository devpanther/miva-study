# Friday — PHY_102 nightly check

*Problems only, numerical and multi-step: ε = I(R + r) and terminal voltage, extracting ε and r from two readings, power split between load and cell, ε = Bvl with current and force, Faraday's law arithmetic, U = ½CV² = ½QV = Q²/2C, C = ε₀A/d, and energy density × volume. No definitions or bookwork.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** A cell of emf 12 V and internal resistance 2.0 Ω is connected across a 10 Ω resistor. The terminal potential difference is:
a) 12 V  b) 10 V  c) 9.6 V  d) 2.0 V

**2.** A cell drives 2.0 A through a 5.0 Ω resistor, and 1.0 A through an 11.0 Ω resistor. Its emf and internal resistance are:
a) ε = 11 V, r = 1.0 Ω
b) ε = 12 V, r = 1.0 Ω
c) ε = 12 V, r = 6.0 Ω
d) ε = 10 V, r = 0 Ω

**3.** A cell of emf 12 V and internal resistance 1.0 Ω drives a 5.0 Ω resistor. The rate at which energy is wasted inside the cell is:
a) 24 W  b) 20 W  c) 4.0 W  d) 2.0 W

**4.** A rod of length 0.50 m slides at 4.0 m/s along rails in a perpendicular field of 0.30 T. The total circuit resistance is 0.60 Ω. The current in the circuit is:
a) 2.0 A  b) 1.0 A  c) 0.60 A  d) 0.25 A

**5.** A coil of 500 turns and area 4.0×10⁻³ m² lies perpendicular to a field that falls uniformly from 0.80 T to zero in 0.20 s. The magnitude of the induced emf is:
a) 2.0×10³ V  b) 8.0 V  c) 1.6 V  d) 1.6×10⁻² V

**6.** A 20 μF capacitor is charged to 300 V. The energy stored is:
a) 1.8 J  b) 0.90 J  c) 0.45 J  d) 3.0×10⁻³ J

**7.** A parallel-plate capacitor in vacuum has plate area 0.020 m² and plate separation 5.0 mm. Its capacitance is (ε₀ = 8.85×10⁻¹² F/m):
a) 3.5×10⁻¹¹ F  b) 2.2×10⁻¹² F  c) 3.5×10⁻¹⁴ F  d) 8.9×10⁻¹⁶ F

**8.** In the capacitor of question 7 the field between the plates is 200 N/C. The total energy stored is:
a) 3.5×10⁻¹¹ J  b) 1.8×10⁻¹¹ J  c) 3.5×10⁻⁹ J  d) 1.8×10⁻⁷ J

**9. (explain why)** A cell of emf 6.0 V and internal resistance 0.50 Ω drives a 2.5 Ω resistor. Calculate the current, the terminal potential difference, the power delivered to the resistor and the power wasted inside the cell. Show that the two powers add to εI, and say what εI represents.

**10. (explain why)** Two 6.0 μF capacitors are connected across a 20 V supply, first in parallel and then in series. Calculate the energy stored in each arrangement, and explain from the formula why one arrangement stores more than the other.

**11. (explain why)** A rod of length 0.80 m slides at 5.0 m/s along frictionless rails in a perpendicular field of 0.40 T; the total circuit resistance is 2.0 Ω. Find the emf, the current, the force needed to keep the rod moving at constant speed, and the mechanical power supplied. Show that this equals the electrical power dissipated, and explain why it must.

**12. (explain why)** A 50 μF capacitor in a defibrillator is charged to 4.0 kV and then delivers 80% of its stored energy in 5.0 ms. Find the charge on the plates, the energy stored, the energy delivered and the average power delivered. Then explain why the battery had to do more than that stored energy in charging it, and say how much more.

---

## Answers

**1. b** — *the internal resistance goes into the total before you divide.* I = ε/(R + r) = 12/12 = 1.0 A, so V = IR = 10 V (equally, ε − Ir = 12 − 2.0). (a) ignores the internal resistance altogether and quotes the emf — the answer only correct at zero current. (c) comes from computing I = ε/R = 1.2 A, forgetting r in the denominator, and then subtracting Ir = 2.4 V; if you got 9.6 V, the fault is in the current, not the subtraction. (d) quotes the lost volts Ir = 2.0 V instead of what is left after them.

**2. b** — *two readings, two unknowns, using ε = I(R + r).* 2.0(5.0 + r) = 1.0(11.0 + r) → 10 + 2r = 11 + r → r = 1.0 Ω, and ε = 2.0(6.0) = 12 V. (a) takes the second terminal voltage V = IR = 11 V and calls it the emf; that is V, and ε = V + Ir = 11 + 1.0 = 12 V. (c) gets ε right but reports the *total* resistance R + r = 6.0 Ω as the internal resistance. (d) uses only the first reading, V = 10 V, and concludes r = 0 — but a single reading cannot separate ε from r, which is exactly why two are given.

**3. c** — *energy wasted inside the cell is I²r, not Ir and not the total.* I = 12/6.0 = 2.0 A, so I²r = (4.0)(1.0) = 4.0 W. (a) is the *total* power the source delivers, εI = 24 W; that is the sum of what the load gets and what is wasted. (b) is the power in the external resistor, I²R = 20 W — the useful part, not the wasted part. (d) computes Ir = 2.0, which is the lost *volts*, and reads volts as watts; note 20 + 4 = 24 confirms the split.

**4. b** — *ε = Bvl first, then I = ε/R.* ε = (0.30)(4.0)(0.50) = 0.60 V, so I = 0.60/0.60 = 1.0 A. (a) drops the length: Bv = 1.2 V gives 2.0 A. (d) drops the speed: Bl = 0.15 V gives 0.25 A. (c) is the numerical value of the emf, 0.60, carried over as though it were the current — the division by R has been skipped because the two numbers happen to look alike.

**5. b** — *|ε| = N·A·(ΔB/Δt).* ΔB/Δt = 0.80/0.20 = 4.0 T/s; A(ΔB/Δt) = 1.6×10⁻² Wb/s; × 500 turns = 8.0 V. (c) omits the division by the time and computes N·A·ΔB = 1.6. (d) omits the number of turns: A(ΔB/Δt) = 1.6×10⁻² V is the emf of a *single* loop. (a) omits the area and computes N(ΔB/Δt) = 2.0×10³, which is not even a voltage dimensionally.

**6. b** — *U = ½CV², with V squared.* ½(20×10⁻⁶)(300)² = ½(20×10⁻⁶)(9.0×10⁴) = 0.90 J. (a) drops the ½ and gives CV² = QV = 1.8 J — which is the work done by the *battery*, exactly twice what is stored. (c) halves twice, from starting with ½CV² and then applying the ½ of Q²/2C as well. (d) forgets to square V: ½CV = 3.0×10⁻³.

**7. a** — *C = ε₀A/d, with d in metres.* (8.85×10⁻¹²)(0.020)/(5.0×10⁻³) = 3.54×10⁻¹¹ F. (c) leaves d in millimetres, dividing by 5.0 instead of 5.0×10⁻³, so the answer is 10³ times too small. (d) multiplies by d instead of dividing by it. (b) inverts the fraction inside, using d/A rather than A/d.

**8. b** — *the total energy is the energy density times the volume between the plates.* u_E = ½ε₀E² = ½(8.85×10⁻¹²)(4.0×10⁴) = 1.77×10⁻⁷ J/m³; volume = Ad = (0.020)(5.0×10⁻³) = 1.0×10⁻⁴ m³; U = 1.77×10⁻¹¹ J. (Check with question 7: V = Ed = 1.0 V and ½CV² = ½(3.54×10⁻¹¹)(1.0) gives the same.) (d) is the density itself, quoted as though it were an energy — the mistake printed in this week's slides. (c) multiplies by the plate area but not the separation, so it is out by a factor of d. (a) drops the ½ from the density.

**9.** *Concept: current, terminal voltage and the power split in a real cell.* Total resistance R + r = 2.5 + 0.50 = 3.0 Ω, so **I = ε/(R + r) = 6.0/3.0 = 2.0 A**. Terminal pd **V = IR = (2.0)(2.5) = 5.0 V** (check: ε − Ir = 6.0 − 1.0 = 5.0 V ✓). Power delivered to the resistor **P_R = I²R = (4.0)(2.5) = 10 W**; power wasted inside the cell **P_r = I²r = (4.0)(0.50) = 2.0 W**. Sum = 12 W, and **εI = (6.0)(2.0) = 12 W** ✓. **εI is the total rate at which the source converts chemical energy into electrical energy** — the whole power output of the cell. Of it, I²R is delivered usefully to the external circuit and I²r is dissipated as heat inside the cell itself; that internal share is what makes a cell warm and is why the terminal voltage sags under load. Equivalently, dividing by I gives ε = V + Ir, the same statement per coulomb rather than per second.

**10.** *Concept: at a fixed supply voltage, U = ½CV² makes energy proportional to capacitance.* **Parallel**: C = C₁ + C₂ = 6.0 + 6.0 = 12 μF, so U = ½(12×10⁻⁶)(20)² = ½(12×10⁻⁶)(400) = **2.4×10⁻³ J**. **Series**: 1/C = 1/6.0 + 1/6.0 = 2/6.0, so C = 3.0 μF and U = ½(3.0×10⁻⁶)(400) = **6.0×10⁻⁴ J**. The parallel arrangement stores **four times** as much. The reason is in the formula: V is fixed at 20 V by the supply and appears identically in both cases, so U ∝ C, and combining capacitors in **parallel adds** the capacitances (giving a value larger than the largest single capacitor) while combining them in **series** gives a reciprocal sum (a value smaller than the smallest single one). Here the parallel value 12 μF is four times the series value 3.0 μF, and the energies stand in the same ratio. So the maximum energy from a set of capacitors on a given supply is always obtained by connecting them in **parallel** — the opposite of the intuition carried over from resistors.

**11.** *Concept: motional emf, and the mechanical–electrical power balance.* **emf**: ε = Bvl = (0.40)(5.0)(0.80) = **1.6 V**. **Current**: I = ε/R = 1.6/2.0 = **0.80 A**. **Force**: the field exerts a retarding force on the current-carrying rod, F = BIl = (0.40)(0.80)(0.80) = **0.256 N**, so the agent must push with 0.256 N to keep the speed constant. **Mechanical power**: P = Fv = (0.256)(5.0) = **1.28 W**. **Electrical power dissipated**: I²R = (0.80)²(2.0) = (0.64)(2.0) = **1.28 W** (or ε²/R = 2.56/2.0 = 1.28 W). The two are equal, and must be: the magnetic force on a charge is perpendicular to that charge's velocity and therefore does **no work**, so the field cannot be supplying energy — it only acts as the mechanism that separates charge and sets up the emf. The only energy input is the agent pushing the rod, and since the rod moves at constant speed its kinetic energy is not changing, every joule the agent supplies must reappear in the resistor. Algebraically Fv = (BIl)v = I(Bvl) = Iε = I²R, which is the same identity.

**12.** *Concept: Q = CV, U = ½CV², average power, and why the battery does twice the stored energy.* **Charge**: Q = CV = (50×10⁻⁶)(4.0×10³) = **0.20 C**. **Energy stored**: U = ½CV² = ½(50×10⁻⁶)(1.6×10⁷) = **400 J** (check: ½QV = ½(0.20)(4000) = 400 J ✓). **Energy delivered**: 0.80 × 400 = **320 J**. **Average power**: P = 320/(5.0×10⁻³) = **6.4×10⁴ W = 64 kW** — the point of the design, since 320 J is a modest amount of energy but releasing it in 5 ms gives an enormous power, which is what a defibrillator needs. **Why the battery does more**: the battery moves the total charge Q = 0.20 C through its own fixed terminal voltage of 4.0 kV, so the work it does is W = QV = (0.20)(4000) = **800 J**, twice the 400 J stored. The reason is that the capacitor's voltage climbs from 0 to 4.0 kV as the charge accumulates, so each coulomb is stored at an *average* potential of only V/2, giving ½QV; the battery, however, always supplies at the full V. The difference, **400 J**, is dissipated as heat in the resistance of the charging circuit. This is exactly why U = ½CV² carries a factor of ½ while the battery's work QV does not.
