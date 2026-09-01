# Tuesday — PHY_102 nightly check

*Week 6, exactly as Dr. Adeniji builds it.*

*Peak value as the maximum instantaneous value measured from zero. Rms as the equivalent DC value that dissipates the same power in a resistive load.*

*The source V = V_max sin ωt, with ω = 2πf = 2π/T in rad s⁻¹.*

*Then I = (V_max/R) sin ωt = I_max sin ωt, so I_max = V_max/R.*

*Why a direct average of an alternating quantity is useless, and why squaring fixes it: I² = I²_max sin²ωt with (I²)_av = ½I²_max.*

*The two results I_rms = 0.7071 I_max and V_rms = 0.7071 V_max.*

*Why AC meters are calibrated in rms. And P_av = I²_rms R = V²_rms/R.*

*Scope boundaries included: no reactance, impedance, phasors or resonance in this deck.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Slide 4 defines the peak value of a waveform. Which statement is her definition?
A. The maximum instantaneous value reached in one complete cycle, measured from the zero reference point
B. The full swing of the waveform from its trough to its crest
C. The value an AC voltmeter displays when connected to the supply
D. The value of the waveform averaged over one positive half-cycle

**2.** Slide 9 opens by saying that a direct average of an alternating current 'gives no information (or useless)'. What exactly is wrong with it?
A. The average is undefined because the current changes direction
B. Over a complete cycle the positive and negative half-cycles cancel, so the mean is zero for every amplitude
C. The average depends on where in the cycle you start measuring, so it is not unique
D. The average is correct but too small to measure with ordinary instruments

**3.** She fixes the problem by squaring: I² = I²_max sin²ωt. What does the squaring achieve, and what does it cost?
A. It doubles the frequency, which makes the average easier to compute
B. It converts amperes to watts, so the result is already a power
C. It removes the sign, so the negative half-cycle no longer cancels the positive one — at the cost that the answer must be square-rooted at the end to return to amperes
D. It removes the time dependence entirely, leaving a constant

**4.** Slide 7 gives ω = 2πf = 2π/T. Which statement about these three quantities is correct?
A. ω and f are the same quantity written in different letters, both in hertz
B. T is measured in hertz and f in seconds
C. ω is in hertz, and multiplying by 2π converts it to radians
D. f is in Hz and T in s with f = 1/T, while ω is in rad s⁻¹ and is 2π times larger than f

**5.** Slide 10 ends: 'rms values are used when discussing alternating currents and voltages because AC ammeters and voltmeters are designed to read rms values.' Taken with the slide-5 definition, what does a meter reading of 240 V on an AC supply tell you?
A. The supply would heat a given resistor at the same average rate as a steady 240 V DC supply, and its instantaneous voltage reaches about 339 V
B. The instantaneous voltage never exceeds 240 V, that being the largest value the supply produces
C. The voltage averaged over a complete cycle is 240 V
D. The peak voltage is 170 V, since the rms is the larger of the two figures

**6.** Slide 8 writes I = V/R = (V_max/R) sin ωt = I_max sin ωt. Which pair of conclusions does that chain establish?
A. That the current lags the voltage by 90°, and that I_max = V_max/R
B. That the current and the voltage share the same sin ωt and so are in phase, and that I_max = V_max/R
C. That R changes with frequency, and that I_rms = V_max/R
D. That the current is constant while the voltage alternates, and that I_max = V_max R

**7.** 'Root mean square' names three operations. In what order are they applied to the instantaneous current?
A. Take the root, then the mean, then square the result
B. Take the mean, then square it, then take the root
C. Square it, then take the mean of the squares, then take the root
D. Square it, then take the root, then average the result

**8.** Which of these does the Week 6 deck actually contain?
A. The condition for series resonance, X_L = X_C
B. The impedance of a series RLC circuit, Z = √(R² + (X_L − X_C)²)
C. Kirchhoff's voltage law applied by vector addition of component voltages
D. The average power in a resistor, P_av = I²_rms R = V²_rms/R

**9.** State the deck's definition of the rms value, and explain what the word 'equivalent' is doing in it.
*(short answer)*

**10.** Reproduce her slide-9 argument in your own words: why a plain average fails and why squaring rescues it.
*(short answer)*

**11.** Slide 15 says: 'Recall that the power, P = I²R. By replacing I with I_rms, we have the average value of power.' Explain why that substitution needs no correction factor, and state the two forms she ends with.
*(short answer)*

**12.** Her waveform diagram carries three labels: Peak Value (I_m), Average Value (I_av) = 0.6371 I_m, and RMS Value (I_rms) = 0.707 I_m. Explain what the middle one is, why it is not the rms value, and why you should not build an answer on it this week.
*(short answer)*

## Answers

**1. A** — Her wording is 'the maximum instantaneous value that a waveform reaches during one complete cycle… typically measured from the zero reference point', so the reference point is the axis. Option 2 is the trough-to-crest swing, which is twice the peak — a quantity this deck never names or uses. Option 3 is the rms value: slide 10 says AC ammeters and voltmeters are designed to read rms, so a meter never shows you the peak. Option 4 is the rectified half-cycle mean, 0.6366 I_max, which appears only as a diagram label and is never defined.

**2. B** — The instantaneous value is positive through one half-cycle and negative through the other, and the two halves are equal in area, so the mean is exactly zero — the same zero for a 1 A supply and a 1000 A supply, which is why it carries no information. Option 1 confuses 'the mean is zero' with 'the mean does not exist'; it exists and equals 0. Option 3 is false for a whole number of cycles: the mean is zero from any starting point. Option 4 invents an instrumental problem where the problem is mathematical — a zero mean would predict zero heating, which is plainly wrong.

**3. C** — I² is never negative, so its graph (her slide-9 picture) sits wholly above the axis and has a genuine non-zero mean, I²_max/2. But I² is in A², so the square root at the end is not decoration — it is what returns the answer to amperes. Option 1 is a true side effect of squaring a sinusoid but not the reason she does it. Option 2 confuses I² with I²R; squaring a current does not by itself produce a power, since R is missing. Option 4 is false — I² still oscillates, as her diagram shows; only its average is constant.

**4. D** — f counts cycles per second (Hz), T is the seconds per cycle (s), and ω measures the angle swept per second, so ω = 2πf rad s⁻¹ because one cycle is 2π radians. At 50 Hz, ω = 314 rad s⁻¹ — the two numbers are not interchangeable, and putting f where ω belongs is out by 6.28. Option 1 collapses the distinction the slide exists to make. Option 2 swaps the units of T and f. Option 3 has the direction of the conversion right but attaches the wrong unit to ω itself.

**5. A** — The rms value is defined by equal power dissipation in a resistive load, so 240 V rms and 240 V DC heat the same resistor identically; and V_max = 1.4142 × 240 = 339 V, so the instantaneous value does exceed the meter reading for part of every half-cycle. Option 2 confuses rms with peak. Option 3 confuses rms with the full-cycle mean, which is exactly zero. Option 4 uses the factor backwards and asserts a peak smaller than the rms, which no waveform can have.

**6. B** — Dividing V_max sin ωt by the constant R leaves the same sin ωt, so nothing is shifted in time — in a resistor voltage and current rise, fall and cross zero together — and matching the result to I_max sin ωt identifies I_max = V_max/R. Option 1 imports a 90° shift that belongs to inductors and capacitors, neither of which is in this deck. Option 3 crosses an rms value with a peak value, out by √2, and makes a constant depend on frequency. Option 4 multiplies where Ohm's law divides, and would give amperes as volt-ohms.

**7. C** — The name is read from the outside in: the root of the mean of the square. Squaring first is what removes the sign; averaging second gives I²_max/2; rooting third returns the answer to amperes as 0.7071 I_max. Option 1 reverses the order completely. Option 2 averages the raw current first, which gives zero, so squaring and rooting a zero still leaves zero. Option 4 undoes the squaring before the average is taken — the root of I² is the magnitude of I, whose average is the rectified mean 0.6366 I_max, not the rms.

**8. D** — P_av = I²_rms R and P_av = V²_rms/R are the two lines of slide 15, and P_av is computed in her Question 3. The other three belong to the week's separate summary sheet and to the Week 7 deck on phasor diagrams and power; reactance, impedance, phase angle and resonance appear nowhere in these 21 slides. Knowing the boundary matters: a Week 6 answer built on impedance is answering a question she has not yet asked, and it costs time that should go on the three practice questions.

**9.** A good answer quotes slide 5: the rms value is a measure of the magnitude of an alternating current or voltage, representing the equivalent direct current value that would produce the same amount of power dissipation in a resistive load. On 'equivalent': it does not mean the AC and the DC are the same current — the AC is changing direction continuously and the DC is steady — it means they are interchangeable for one specific purpose, heating a resistance. So a 240 V rms supply and a 240 V DC supply make the same lamp equally bright and deliver the same average watts to the same resistor, which is exactly her slide-10 picture of an AC waveform set beside a flat 240 V DC line. The answer should draw the consequence: because the definition is about power, and power goes as the square, the rms is a root-mean-square rather than any kind of plain average.

**10.** A good answer runs it as an argument in three steps. First the problem: an alternating current is positive through one half-cycle and negative through the other, and the two halves have equal area, so averaged over a complete cycle it is exactly zero — her words, 'Both alternating voltage and current have a zero value. So direct average gives no information (or useless).' Zero is the answer for every amplitude, so it distinguishes nothing, and it would falsely predict no heating. Second the fix: square the current, I² = I²_max sin²ωt. A square is never negative, so the negative half-cycle no longer cancels the positive one and the graph of I² sits wholly above the axis, oscillating between 0 and I²_max about a mean of I²_max/2. Third the correction: I² is in A², so take the square root at the end, giving I_rms = I_max/√2 = 0.7071 I_max in amperes. It is worth adding that squaring is not an arbitrary trick — power in a resistance goes as I², so the mean of I² is precisely the quantity that determines the heating.

**11.** A good answer says that the average of a product with a constant is the constant times the average, so the average of I²R is (I²)_av times R — and (I²)_av is by definition I²_rms, since I_rms is the square root of the mean square. The substitution is therefore an identity, not an approximation, and no factor is lost or gained. It should contrast this with the current itself: substituting the average current would give zero, and substituting I_max would give twice the true power, because (I²)_av = ½I²_max. The two forms are P_av = I²_rms R and, applying Ohm's law with V_rms = I_rms R, P_av = V²_rms/R, both in watts with I in amperes, V in volts and R in ohms. A good answer may close by noting that the same reasoning is why the maximum instantaneous power is V²_max/R, exactly twice P_av.

**12.** A good answer identifies the middle label as the rectified mean — the average of the waveform over a single half-cycle, taken so that the full-cycle zero is avoided — and says plainly that it is a different average from the rms: the rms squares before averaging, the rectified mean does not, so 0.7071 I_max and 0.6366 I_max are answers to different questions. It should note two further things. First, the deck never defines, derives or uses this quantity anywhere — it exists only as a label on a picture, and every calculation in the deck uses 0.7071. Second, the printed figure 0.6371 is itself slightly wrong: the rectified mean of a sinusoid is 2/π = 0.6366 I_max. So the correct exam behaviour is to know what the label means, quote 0.6366 if ever asked, and use 0.7071 for every actual calculation in this week's material.
