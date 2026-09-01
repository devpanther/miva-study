# Tuesday — PHY_102 nightly check

*Conceptual hour on Week 4 of General Physics II.*

*What the quantities in DC circuit analysis and electrostatic dipoles actually are, and why each rule holds.*

*Ideal versus real voltage and current sources. The meaning of internal resistance, and the emf/terminal-voltage distinction.*

*Why a zeroed voltage source becomes a short and a zeroed current source an open circuit.*

*The linearity that superposition and the Thevenin and Norton theorems depend on. Why a reference node may be set to zero in nodal analysis.*

*Then the electric dipole moment as a vector from minus q to plus q. Why the dipole potential falls as one over r squared and vanishes on the equatorial plane. Why the axial and equatorial fields differ in size and direction. Why a dipole feels torque but no net force in a uniform field.*

*Finally, why polarisation of a dielectric lowers the field and raises the capacitance.*

*No numerical work is required in this session.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** In a superposition analysis you must 'zero' each source in turn. What justifies replacing a zeroed ideal voltage source by a wire and a zeroed ideal current source by a gap?
a) A zeroed voltage source holds 0 V across itself no matter what current passes, which is exactly what a wire does; a zeroed current source passes 0 A no matter what voltage appears, which is exactly what a gap does.
b) A dead battery has no charge left, so nothing can pass through it, whereas a dead current source still conducts freely.
c) Both should really be replaced by open circuits; the short-circuit rule for a voltage source is only a drawing convention that saves redrawing the diagram.
d) Each zeroed source is replaced by its internal resistance, which is infinite for a voltage source and zero for a current source.

**2.** A real cell's terminal voltage V is measured for several output currents I and the points fall on a straight line. What do the gradient and the vertical intercept represent?
a) The gradient is +r and the intercept is the terminal voltage at the maximum current the cell can supply.
b) The gradient is minus r and the vertical intercept is the emf.
c) The gradient is minus one over r and the vertical intercept is the emf.
d) The gradient is the emf and the vertical intercept is the internal resistance r.

**3.** A student finds the power dissipated in a resistor of a two-battery circuit by computing the power each battery would produce alone and adding them. Why does this give the wrong answer even though superposition is valid for this circuit?
a) Because superposition only holds when the two sources have equal emfs.
b) Because zeroing one source alters the resistances of the network, so the single-source resistor values are not the real ones.
c) Because power depends on the square of the current, and the square of a sum is not the sum of the squares.
d) Because power is only dissipated while both sources are actually connected, so the single-source figures describe no real situation at all.

**4.** To find the Thevenin resistance of a linear black box you switch off every independent source inside it and measure the resistance at the terminals. Why is the resistance measured with the sources off the right one to put in the equivalent circuit?
a) Switching the sources off removes their driving action but leaves every resistance in place, and linearity lets the source-driven and externally-driven responses add independently.
b) Switching them off is only a convenient approximation; strictly R_Th should be measured with the sources live, but the error is usually small.
c) The sources contain no resistance of their own, so whether they are on or off cannot change anything inside the box.
d) R_Th is a property of the load rather than of the box, so the internal state of the box is irrelevant.

**5.** In nodal analysis one node is chosen and simply declared to be at zero volts. Why does that not change any of the answers?
a) Because the chosen node is the one node that carries no current, so its potential cannot matter.
b) Because KCL requires the algebraic sum of all node voltages in a circuit to be zero anyway.
c) Because the negative terminal of a battery is genuinely at zero potential, so the choice is not really arbitrary at all.
d) Because only potential differences drive currents; adding the same constant to every node potential leaves every branch current unchanged.

**6.** A permanent electric dipole sits in a perfectly uniform external field, tilted at 40 degrees to the field direction. What does it experience?
a) A net force pulling it toward the region of stronger field, but no torque.
b) Neither a net force nor a torque, since the two forces on it are equal and opposite.
c) Zero net force but a non-zero torque, because the equal and opposite forces act at two different points.
d) A net force along the field, together with a torque taken about the positive charge only.

**7.** Why is the electric field at a point on the equatorial plane of a dipole directed antiparallel to the dipole moment p?
a) Because the negative charge is always the nearer of the two charges to any point on that plane.
b) Because the potential is zero everywhere on that plane, and the field must point from higher to lower potential along it.
c) Because in physics the dipole moment is defined to run from the positive charge to the negative charge.
d) Because both charges are equidistant from the point, so the components perpendicular to the axis cancel and the surviving components both point from +q toward minus q.

**8.** A charged, isolated parallel-plate capacitor has a dielectric slab slid between its plates. Why does the field between the plates fall and the capacitance rise?
a) The slab conducts a little charge from one plate across to the other, so the stored charge and hence the field are reduced.
b) The applied field polarises the slab, producing bound surface charges whose own field opposes the plate field, so E and hence V fall while Q is fixed, and C = Q/V rises.
c) The slab effectively increases the plate separation, and capacitance grows in proportion to separation.
d) The slab raises the permittivity of free space itself, so the constant epsilon-nought takes a larger value inside the gap.

**9. (explain why)** Explain why an ideal current source must have infinite internal resistance while an ideal voltage source must have zero internal resistance.

**10. (explain why)** Explain why both superposition and Thevenin's theorem fail if the black box contains a non-linear element such as a diode.

**11. (explain why)** Explain why the potential of a dipole falls off as one over r squared while that of a single point charge falls off as one over r, and why the dipole potential is exactly zero everywhere on the equatorial plane.

**12. (explain why)** Explain why a dipole experiences no net force in a uniform field, but is pulled toward the stronger-field region when the field is non-uniform.
