# Tuesday — PHY_102 nightly check

*Conceptual hour on Week 5 circuit analysis. What Kirchhoff's junction rule and loop rule each assert, and which conservation principle each one expresses: charge conservation with no accumulation at a node in the steady state, and conservation of energy per unit charge expressed as the single-valuedness of electric potential. Why the traversal sign rules take the form they do, in particular why the sign of an IR term depends on the direction of travel relative to the assumed current while the sign of an emf term depends only on the order in which the terminals are crossed. What goes wrong without a consistent convention, why only n minus 1 junction equations are independent for n junctions, and why a bridge circuit falls outside the series and parallel combination rules.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** Kirchhoff's junction rule states that the algebraic sum of the currents at a junction is zero. What physical principle is that a statement of?
a) Energy is conserved, so the charges arriving at the junction carry the same energy as those leaving it.
b) Every point of a junction sits at the same potential, and that equality forces the currents to be equal.
c) Charge is conserved and cannot accumulate at a point in the steady state, so it arrives and leaves at equal rates.
d) Current always divides at a junction so as to follow the path of lowest resistance available to it.

**2.** The loop rule says the algebraic sum of potential changes around any closed loop is zero. What makes that true?
a) Electric potential is single-valued, so a charge taken once round a closed path returns to the potential it started at.
b) The current is the same at every point of a closed loop, so the potential changes across the elements must cancel.
c) A battery supplies exactly as much charge as the resistors consume, so the loop balances over one full circuit.
d) The total resistance measured around any closed conducting loop necessarily comes out to be zero.

**3.** While walking a loop you pass through a resistor R in the same direction as the assumed current I. Why is the term entered minus IR rather than plus IR?
a) Because charge is used up inside the resistor, so less charge leaves it than entered it.
b) Because a resistor opposes the flow of current, and any opposing element is entered with a negative sign.
c) Because the loop happens to be walked clockwise, and clockwise traversals are conventionally negative.
d) Because current inside a resistor runs from high to low potential, so moving with it is moving downhill.

**4.** What fixes the sign of an emf term when you write a loop equation?
a) Whether the assumed current leaves the source at its positive terminal or enters the source there.
b) The order in which the traversal crosses the terminals: minus to plus gives plus epsilon, plus to minus gives minus epsilon.
c) Whether the source is delivering energy to the circuit or is absorbing energy from the rest of the circuit.
d) Whether the loop as a whole is being traversed clockwise or anticlockwise around the circuit diagram.

**5.** A student solves a two-loop network and one branch current comes out negative. What does that tell them about the work they have done?
a) Nothing is wrong: the magnitude is right and the real current runs opposite to the arrow that was drawn.
b) One of the loop equations carries a sign error, because a real steady current cannot have a negative value.
c) The current arrows must all be redrawn the correct way round and the whole system solved again from scratch.
d) That branch is discharging, so its current is falling with time and the number found is only an instantaneous value.

**6.** A network has 4 junctions and 6 branches. How many independent junction equations can be written for it?
a) Four, because each junction imposes its own constraint on the currents meeting there.
b) Six, because one equation is needed for each of the branch currents that must be found.
c) Three, because the fourth is the sum of the other three and carries no new information.
d) Two, because one junction equation belongs to each independent loop that can be drawn.

**7.** Why can an unbalanced bridge circuit not be reduced to one resistance using only the series and parallel rules?
a) Because it contains more than one source of emf, and the combination rules assume there is only one.
b) Because no two of its resistors carry the same current or span the same pair of nodes.
c) Because its resistances are unequal, and the parallel formula only holds for equal resistances.
d) Because the current in the bridge arm keeps reversing, so it has no steady value that can be combined.

**8.** Exactly two conductors meet at point c in a circuit diagram. Why is c not a junction for the purposes of the current rule?
a) Because c lies in the interior of a loop rather than on the boundary between two adjacent loops.
b) Because the potential at c is zero, so no meaningful current equation can be written at that point.
c) Because no current passes through c at all, the connection there being nothing more than a joint.
d) Because only two conductors meet, so the same current passes on and there is nothing to divide.

**9. (explain why)** Explain why the loop rule can legitimately be applied to a network before you know the actual directions of any of the currents.

**10. (explain why)** Explain why the sign of a resistor term in a loop equation depends on the direction you traverse the loop, while the sign of an emf term does not depend on the direction of the current in that branch.

**11. (explain why)** Explain why the junction rule would fail if charge were allowed to accumulate at a junction, and why the steady-state assumption is what rescues it.

**12. (explain why)** Explain why connecting one more resistor in parallel always lowers the equivalent resistance while connecting one more in series always raises it, in terms of what happens to the charge carriers.
