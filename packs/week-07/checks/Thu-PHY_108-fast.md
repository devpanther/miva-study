# Thursday — PHY_108 fast-hour check

*Discharging a capacitor: the decay law, the time constant, the two graphs, and the finishing calculations.*
*Five questions, straight after the fast hour. Recall only. Score out of 5.*

**1.** The law for the voltage on a discharging capacitor is:
A. V(t) = V0 (1 - e^(-t/tau))
B. V(t) = V0 e^(t/tau)
C. V(t) = V0 e^(-t/tau)
D. V(t) = V0 - t/tau

**2.** At t equal to one time constant, the discharging capacitor's voltage has fallen to:
A. 36.8 percent of V0
B. 63.2 percent of V0
C. 50 percent of V0
D. 13.5 percent of V0

**3.** On the graph of ln V against t, the gradient equals:
A. ln V0
B. minus tau
C. 1 over tau
D. minus 1 over tau

**4.** The experimental capacitance is obtained from the time constant by:
A. C = tau R
B. C = tau / R
C. C = R / tau
D. C = 1 / (tau R)

**5.** The stopwatch is started at the instant that:
A. the power supply is switched on
B. the voltmeter first reaches its maximum
C. the switch key is opened
D. the voltmeter reads 0.368 of V0

## Answers

**1. C** — Putting t = 0 must return the maximum voltage V0, and the curve must fall to zero, which only the plain negative exponential does. Option one is last week's charging law, option two grows without limit, and option four is a straight line, not a decay.

**2. A** — Putting t = tau gives V = V0 e^(-1) = 0.3679 V0. The 63.2 percent figure is what is gained when charging, 50 percent belongs to the half-life at 0.693 tau, and 13.5 percent is what remains after two time constants.

**3. D** — Taking logs of the decay law gives a straight line of gradient -1/tau, so tau is minus the reciprocal of the gradient. ln V0 is the intercept, not the gradient, and the gradient must be negative because the voltage is falling.

**4. B** — Since tau = RC, dividing the graph's tau by the known resistance gives C. A dimension check settles it: ohms times farads gives seconds, so seconds divided by ohms gives farads. Remember to use R in ohms, not kilohms.

**5. C** — The capacitor is charged until the voltmeter is steady at roughly the supply voltage, and timing begins the moment the key is opened, when the reading is maximum. Timing from switch-on measures the charging phase, and 0.368 of V0 is the reading you later use to read tau off the curve.
