# Friday — PHY_102 nightly check

*Problem hour on Week 5 circuit analysis. Reducing a network by the series and parallel rules and recognising when that reduction is illegal. Setting up Kirchhoff equations for a two-loop network of two batteries with internal resistance and one shared resistor: choosing branch-current arrows, writing the junction equation, writing each loop equation with correct signs for the emf and IR terms, and solving for all three currents. Reading a negative current in the solution, computing terminal potential difference and power, and checking a finished answer independently. Includes diagnosing a wrong route and finding the balance condition of a bridge.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** A 30 V battery of internal resistance 1.0 ohm feeds a 5.0 ohm resistor in series with a parallel pair of 6.0 ohm and 12.0 ohm. What current does the battery deliver?
a) 2.0 A
b) 3.0 A
c) 1.3 A
d) 3.3 A

**2.** For that same circuit another student writes R total equals 1.0 plus 5.0 plus 6.0 plus 12.0 equals 24 ohm. Which specific mistake is that?
a) They included the internal resistance, which should have been left out of the total resistance.
b) They used resistance values where the calculation requires conductances to be summed instead.
c) They forgot that the 5.0 ohm resistor carries a smaller current than the battery itself delivers.
d) They added the 6.0 ohm and 12.0 ohm as if in series, although both lie across the same pair of nodes.

**3.** Between nodes a and b are three branches: a 12 V battery with r equals 1 ohm, a 6 V battery with r equals 1 ohm (both with their positive terminals towards a), and a 4 ohm resistor. Take I1 and I2 as flowing b to a inside the batteries and I3 as flowing a to b through the resistor. Walking b to a through the 12 V battery and then a to b through the resistor, the loop equation is
a) 12 minus (1)I1 minus 4 I3 equals 0
b) 12 plus (1)I1 minus 4 I3 equals 0
c) 12 minus (1)I1 plus 4 I3 equals 0
d) minus 12 minus (1)I1 minus 4 I3 equals 0

**4.** Solving that network with the junction equation I3 equals I1 plus I2 and the two loop equations gives which value for the current in the 6 V branch?
a) plus 2.0 A
b) plus 1.2 A
c) minus 2.0 A
d) minus 4.0 A

**5.** What does that negative value tell you physically about the 6 V battery in that circuit?
a) Its effective emf has fallen below 6 V once the internal resistance is taken into account.
b) It has been short-circuited by the stronger battery and is carrying no useful current at all.
c) It delivers 2.0 A to the circuit, the minus sign being only an artefact of the bookkeeping.
d) Charge enters its positive terminal, so it is being charged and is absorbing 12 W from the circuit.

**6.** With I1 equals 4.0 A, I2 equals minus 2.0 A and I3 equals 2.0 A, what is the potential difference V ab across the three parallel branches?
a) 8.0 V
b) 12 V
c) 6.0 V
d) 4.0 V

**7.** Which computation is a genuinely independent check on that solution rather than a restatement of it?
a) Re-substituting the three currents into the two loop equations that were used to solve the network.
b) Comparing the total power delivered by the sources with the power dissipated and absorbed elsewhere.
c) Confirming that every current in the final answer has come out as a positive number.
d) Confirming that the sum of the three branch resistances equals the network's equivalent resistance.

**8.** A bridge has R1 equals 100 ohm above R2 equals 200 ohm in one branch and R3 equals 300 ohm above an unknown R4 in the other, with a galvanometer joining the two midpoints. What value of R4 gives zero galvanometer current?
a) 150 ohm
b) 400 ohm
c) 600 ohm
d) 200 ohm

**9. (explain why)** Explain why drawing a branch-current arrow in the wrong direction cannot make a Kirchhoff solution wrong, and state exactly where in the algebra the mistaken guess shows up.

**10. (explain why)** Explain why, for the two-battery network above, writing a third loop equation (around the loop containing both batteries) adds nothing to the two already written.

**11. (explain why)** Explain why a power balance is a stronger check on a finished Kirchhoff solution than substituting the currents back into the equations that were used to obtain them.

**12. (explain why)** Explain why the potential difference between the two nodes of that network must come out the same whichever of the three branches you compute it along, and what it means if two routes disagree.
