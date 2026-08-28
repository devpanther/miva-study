# Friday — PHY_102 nightly check

*Problems hour: numerical and multi-step work on emf and internal resistance (ε = I(R + r), V = ε − Ir, two-load and V–I graph determinations), motional emf ε = Blv with the resulting current, and capacitor energy (C = ε₀A/d, U = ½CV², u_E = ½ε₀E², U = u_E·Ad).*
*Sit cold, notes closed, 8 minutes. Score out of 6.*

**1.** A battery of emf 12.0 V and internal resistance 0.60 Ω is connected across a 5.4 Ω resistor. The current in the circuit and the terminal potential difference are:
a) I = 2.00 A, V = 10.8 V
b) I = 2.00 A, V = 12.0 V
c) I = 2.22 A, V = 12.0 V
d) I = 2.00 A, V = 1.20 V

**2.** In a V–I experiment on a cell, the terminal p.d. is 1.42 V when the current is 0.20 A, and 1.18 V when the current is 0.60 A. The emf and internal resistance are:
a) ε = 1.54 V, r = 0.60 Ω
b) ε = 1.42 V, r = 0.60 Ω
c) ε = 1.54 V, r = −0.60 Ω
d) ε = 1.30 V, r = 0.60 Ω

**3.** A rod of length 0.40 m slides along frictionless rails at 3.0 m/s, perpendicular to a uniform 0.50 T magnetic field. The total resistance of the circuit is 2.0 Ω. The induced emf and the current are:
a) ε = 0.60 V, I = 1.2 A
b) ε = 0 V, I = 0 A, since the magnetic field does not change with time
c) ε = 0.60 V, I = 0.30 A
d) ε = 6.0 V, I = 3.0 A

**4.** A parallel-plate capacitor in vacuum has plate area 0.050 m² and separation 4.0 mm. The uniform field between the plates is 1.0×10⁵ V/m. The **total energy** stored between the plates is about:
a) 8.85×10⁻⁶ J
b) 4.43×10⁻² J
c) 1.77×10⁻⁵ J
d) 8.85×10⁻⁵ J

**5. (multi-step problem — show your working)** A cell of unknown emf and unknown internal resistance delivers a current of 1.00 A when connected across a 1.5 Ω resistor, and 0.50 A when connected across a 3.5 Ω resistor. Find ε and r. Then find the terminal potential difference in each case, and the power dissipated *inside* the cell in the first case. Explain in one sentence why the terminal p.d. is **higher** with the larger load resistor.

**6. (multi-step problem — show your working)** A parallel-plate capacitor in vacuum has plate area 0.040 m² and plate separation 2.0 mm, connected to a 50 V supply. Find (a) the capacitance, (b) the charge stored, (c) the electric field between the plates, and (d) the stored energy by **two independent routes** — from ½CV² and from the energy density ½ε₀E² multiplied by the volume — showing that they agree. Then state what happens to C, Q and U if a dielectric of constant K = 4 is slid between the plates while the capacitor stays connected to the 50 V supply.

---

## Answers

**1. a** — *ε = I(R + r) first, then V = ε − Ir; the internal resistance is in series with the load.* I = 12.0/(5.4 + 0.60) = 12.0/6.00 = 2.00 A; lost volts Ir = 2.00 × 0.60 = 1.20 V; V = 12.0 − 1.20 = 10.8 V (check: IR = 2.00 × 5.4 = 10.8 V ✓). (b) gets the current right but treats the terminal p.d. as the emf — the error of ignoring r *after* remembering it. (c) uses I = ε/R = 12.0/5.4 = 2.22 A, leaving r out of the series total, and then compounds it. (d) reports the **lost volts** 1.20 V as the terminal p.d. — the right arithmetic attached to the wrong quantity.

**2. a** — *V = −rI + ε, so r is minus the gradient and ε is the intercept; internal resistance is a positive quantity.* Gradient = (1.18 − 1.42)/(0.60 − 0.20) = −0.24/0.40 = −0.60 V/A, so r = 0.60 Ω. Then ε = V + Ir = 1.42 + (0.20)(0.60) = 1.54 V (check with the other point: 1.18 + 0.60×0.60 = 1.54 V ✓). (b) takes the **largest measured terminal p.d.** as the emf; but 1.42 V was measured with 0.20 A flowing, so it is already short of ε by 0.12 V. (c) reports the gradient itself as r — the minus sign belongs to the gradient, not to the resistance, and a negative resistance is physically meaningless here. (d) averages the two terminal p.d.s ((1.42 + 1.18)/2 = 1.30 V), which is a value on the line, not its intercept; you must extrapolate to I = 0, not interpolate.

**3. c** — *ε = Blv from the Lorentz force on the carriers, then I = ε/R_total; the flux changes because the area changes, not because B does.* ε = (0.50)(0.40)(3.0) = 0.60 V; I = 0.60/2.0 = 0.30 A. (a) multiplies by the resistance instead of dividing — check the units: volts × ohms is not amperes. (b) is the conceptual trap: Faraday's law responds to a changing **flux** Φ_B = Blx, and here x grows as the rod slides, so a perfectly steady B still gives an emf. (d) is a power-of-ten slip in Blv (0.50 × 0.40 = 0.20, not 2.0), which then propagates into the current.

**4. a** — *½ε₀E² is a density in J/m³; the energy is the density times the volume A·d, with d in metres.* u_E = ½(8.85×10⁻¹²)(1.0×10⁵)² = ½(8.85×10⁻¹²)(1.0×10¹⁰) = 4.43×10⁻² J/m³. Volume = Ad = 0.050 × 4.0×10⁻³ = 2.0×10⁻⁴ m³. U = (4.43×10⁻²)(2.0×10⁻⁴) = 8.85×10⁻⁶ J. (b) quotes the **energy density** as the energy — the answer is in J/m³, and it is nine orders of magnitude out. (c) drops the factor ½, doubling the result; the ½ is there because the field builds from zero while the capacitor charges. (d) uses d = 4.0 mm as 0.04 m, a factor-of-ten volume error — always convert mm to m before multiplying.

**5.** *Concept: the emf is a single fixed property of the cell, so two loads give two equations in the same two unknowns; and the lost volts are set by the current, not by R.*
ε = I(R + r) holds for both readings with the **same** ε and r:
1.00(1.5 + r) = 0.50(3.5 + r) → 1.5 + r = 1.75 + 0.50r → 0.50r = 0.25 → **r = 0.50 Ω**.
ε = 1.00(1.5 + 0.50) = **2.0 V** (check: 0.50(3.5 + 0.50) = 0.50 × 4.0 = 2.0 V ✓).
Terminal p.d.s: V₁ = ε − I₁r = 2.0 − (1.00)(0.50) = **1.5 V** (= I₁R₁ = 1.00 × 1.5 ✓); V₂ = 2.0 − (0.50)(0.50) = **1.75 V** (= 0.50 × 3.5 ✓).
Power inside the cell in the first case: P = I₁²r = (1.00)²(0.50) = **0.50 W** — a quarter of the total εI₁ = 2.0 W, which is why the cell warms up.
Why V is higher with the bigger load: the lost volts are **Ir**, and the larger resistor halves the current, so it halves the internal drop (0.50 V → 0.25 V) and leaves more of the emf at the terminals. The internal drop tracks the current, not the load resistance.

**6.** *Concept: C = ε₀A/d, V = Ed, and the two energy expressions ½CV² and ½ε₀E²(Ad) are the same result written in different variables.*
(a) C = ε₀A/d = (8.85×10⁻¹²)(0.040)/(2.0×10⁻³) = **1.77×10⁻¹⁰ F** (177 pF).
(b) Q = CV = (1.77×10⁻¹⁰)(50) = **8.85×10⁻⁹ C** (8.85 nC).
(c) E = V/d = 50/(2.0×10⁻³) = **2.5×10⁴ V/m** (uniform between the plates, ≈ 0 outside).
(d) Route A: U = ½CV² = ½(1.77×10⁻¹⁰)(50)² = ½(1.77×10⁻¹⁰)(2500) = **2.21×10⁻⁷ J**.
Route B: u_E = ½ε₀E² = ½(8.85×10⁻¹²)(2.5×10⁴)² = ½(8.85×10⁻¹²)(6.25×10⁸) = 2.77×10⁻³ J/m³; volume = Ad = 0.040 × 2.0×10⁻³ = 8.0×10⁻⁵ m³; U = (2.77×10⁻³)(8.0×10⁻⁵) = **2.21×10⁻⁷ J** ✓. They must agree — substituting C = ε₀A/d and V = Ed into ½CV² reproduces ½ε₀E²(Ad) identically.
With the K = 4 dielectric, still connected to the supply: **V is held at 50 V** by the supply, so E = V/d is unchanged at 2.5×10⁴ V/m, but C = Kε₀A/d = 4 × 1.77×10⁻¹⁰ = **7.08×10⁻¹⁰ F**, so Q = CV = **3.54×10⁻⁸ C** (four times as much charge, drawn from the supply) and U = ½CV² = **8.85×10⁻⁷ J**, four times the original. The permittivity ε = Kε₀ also raises the energy density to ½Kε₀E². The one thing K does not do is remove the ceiling: the dielectric's own **dielectric strength** fixes a breakdown potential V_max beyond which it conducts and the capacitor fails.
