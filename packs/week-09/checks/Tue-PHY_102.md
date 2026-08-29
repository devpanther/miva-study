# Tuesday — PHY_102 nightly check

*The Lorentz force as concepts: what each term in F = q(E + v cross B) means and the exact conditions under which each one vanishes, why the magnetic force is perpendicular to both v and B and therefore does no work, the RHR-1 direction rule and what reversing the sign of q changes, why the orbit in a uniform field is a circle or a helix and why its period is independent of speed, how the crossed-field velocity selector works, why F = I L cross B is the single-charge law summed over the moving charges in a wire, and the transverse geometry of an electromagnetic wave*

**1.** The magnetic part of the Lorentz force on a charged particle is found to be zero, although the particle is inside a strong uniform magnetic field. The possible reasons are:

A. the field is uniform, and a uniform field exerts no force on a point charge - only a torque on a dipole
B. the particle is at rest, or its velocity lies along B; in either case v cross B = 0
C. the particle's charge is negative, so the minus sign cancels the force
D. the particle's velocity is perpendicular to B, which is where the sine factor passes through zero

**2.** A charged particle moves through a uniform magnetic field in such a way that the magnetic force on it is a maximum. It follows that:

A. its velocity is parallel to B, the two vectors reinforcing each other
B. its velocity is perpendicular to B, and the force therefore lies along B
C. its velocity is perpendicular to B, and the force is perpendicular to both v and B
D. its velocity is at 45 degrees to B, the angle that balances the sine and cosine factors

**3.** A magnetic field can steer a charged particle but can never increase its kinetic energy. The reason is that:

A. the magnetic force is always perpendicular to the velocity, so its power F.v is zero at every instant
B. the magnetic force is far weaker than the electric force at ordinary speeds, so the work it does is negligible
C. magnetic field lines are closed loops, so any energy gained on one part of the path is given back on another
D. the magnetic force acts on the particle's spin rather than on its translational motion

**4.** A charge enters a uniform magnetic field with velocity components both along and across B, and follows a helix. The helix arises because:

A. the field exerts a force along B that stretches the circular orbit out into a spiral
B. the component of v along B is never changed, since the force has no component along B, while the perpendicular component is turned in a circle
C. the field weakens along its own direction, so the radius grows from turn to turn
D. the particle radiates energy as it circulates, so the closed circle gradually opens out

**5.** The period T = 2*pi*m/(qB) of a charged particle's circular orbit does not depend on its speed. This is because:

A. the magnetic force does no work, so no property of the motion can change
B. the speed cancels because it enters the centripetal expression squared and the magnetic force once
C. the period is fixed by the field alone, and the field has been specified as uniform
D. a faster particle sweeps a proportionally larger circle, and the extra path length exactly offsets the extra speed

**6.** In a velocity selector, one and the same speed passes undeflected for every particle admitted - electrons, protons, heavy ions alike. This is because:

A. both forces are proportional to q, so q cancels, and neither force contains the mass at all
B. both the electric and the magnetic force are proportional to v, so their ratio is fixed whatever the particle
C. heavier particles are deflected less, and that compensates exactly for their greater inertia
D. the field strengths are re-adjusted for each species before its beam is admitted

**7.** The force on a current-carrying wire, F = I L cross B, is:

A. an independent law, obtained from Ampere's law rather than from the Lorentz force
B. a consequence of Newton's third law applied between the field and the wire
C. valid only for wires, the Lorentz force being valid only for isolated charges, so the two are logically independent
D. the single-charge law q*v cross B summed over the moving charges: dq = lambda*dl and I = lambda*v give dF = I dl cross B

**8.** The deck writes the force on a current element as dF = (I/c) dl cross B. Judged as an SI formula, this expression:

A. is correct, the c being the conversion from amperes to the units in which B is measured
B. is correct only for relativistic currents, in which the drift speed approaches c
C. is the cgs (Gaussian) form; in SI the factor 1/c is absent and the law reads dF = I dl cross B
D. is dimensionally sound in both systems, so either version may be used with SI data

**9.** *(short answer)* Explain why the magnetic force does no work, and say exactly what is conserved as a result and what is not. Then explain why 'does no work' is not the same as 'exerts no force' and not the same as 'produces no acceleration'. Finish by explaining how a cyclotron nevertheless raises a proton's energy to many MeV.

**10.** *(short answer)* From the two defining properties of the cross product, explain why the magnetic force is zero when v is parallel to B and greatest when v is perpendicular to B, and why the force is perpendicular to both. Then explain what reversing the sign of the charge does, and reconcile these two facts: an electron and a proton fired in the same direction through the same field curve opposite ways, yet an electron beam and a positive-ion beam travelling in opposite directions curve the same way.

**11.** *(short answer)* Explain the mechanism of the crossed-field velocity selector: why exactly one speed passes undeflected, why that speed is E/B and contains neither the charge nor the mass, what happens to particles faster and slower than the selected speed and which force wins in each case, and how adding a second, magnet-only stage converts the apparatus into a mass spectrometer.

**12.** *(short answer)* For a plane electromagnetic wave, explain why E and B are perpendicular to each other and to the direction of propagation, and what sustains the wave as it travels. Explain why the frequency and the wavelength are inversely related while the speed is fixed at c, and state what physically distinguishes a gamma ray from a radio wave given that both travel at exactly the same speed.

---

## Answers

**1. B** — F = q*v*B*sin(theta) vanishes in exactly two ways: v = 0, so a stationary charge feels nothing magnetic however strong the field; and sin(theta) = 0, that is v parallel or antiparallel to B, since the cross product of parallel vectors is zero - which is why charged particles spiral along field lines rather than across them. (a) misapplies the Week 8 dipole result to a single moving charge, which a uniform field pushes very hard. (c) confuses a sign with a magnitude: a negative charge feels an equal force in the opposite direction, never none. (d) is the sin/cos inversion - v perpendicular to B is where the force is maximum.

**2. C** — sin(theta) peaks at 90 degrees, so the force is greatest when v is perpendicular to B, and F = q*v cross B is then perpendicular to the plane containing them - perpendicular to v, hence no work, and perpendicular to B. (a) has the angle exactly backwards; parallel vectors give zero force. (b) is the sharpest distractor: right angle, wrong direction - v cross B is perpendicular to B by construction and can never lie along it. (d) invents a compromise angle by analogy with projectile range; there is no cosine factor in F = q*v*B*sin(theta) to balance.

**3. A** — Work is the integral of F.dl with dl along v, so a force permanently at right angles to the motion contributes nothing anywhere on the path; speed and kinetic energy are rigorously constant. (b) makes the result a matter of size, which would let a strong enough field do work - it cannot, at any strength. (c) is the most dangerous answer because it nearly argues: it concedes that work is done and claims it cancels round a loop, which would still allow the particle to speed up and slow down within one orbit, and would fail entirely on an unclosed helical path. (d) invents a spin interaction; q*v cross B acts on the translational velocity and the result holds for a spinless particle.

**4. B** — F = q*v cross B is perpendicular to B, so it has no component along B: the parallel part of the velocity is never accelerated or retarded and drifts on uniformly, while the perpendicular part feels a constant-magnitude transverse force and is bent into a circle of radius m*v_perp/(qB). Uniform drift plus circle equals helix, of pitch v_parallel * T. (a) asserts a force along B, which the cross product forbids. (c) invents a non-uniform field; in a genuinely converging field the radius would shrink, giving a magnetic mirror. (d) appeals to radiation, negligible here, and the helix appears even in the idealised non-radiating treatment.

**5. D** — r = m*v_perp/(qB) grows in exact proportion to the speed, so the circumference does too, and T = 2*pi*r/v_perp = 2*pi*m/(qB) has no v in it: a faster particle travels further and proportionately faster, arriving at the same moment - which is what lets a cyclotron run at one fixed frequency. (a) is a true statement used as a non sequitur: no-work fixes the speed of a given particle and says nothing about comparing particles of different speeds. (b) is a pseudo-derivation: q*v*B = m*v^2/r cancels one power of v, leaving r proportional to v, and the second cancellation happens only on dividing the circumference by the speed. (c) is empty - the field is uniform in both cases, and T also depends on m and q.

**6. A** — The balance condition qE = q*v*B divides through by q to give v = E/B - no charge, no sign, no mass; reverse the sign of the charge and both forces reverse together, so the balance survives, which is what makes it a speed filter rather than a species filter. (b) is false about the electric force, which is qE regardless of v - and the whole mechanism depends on that asymmetry, one force depending on speed and the other not, so the two balance at one speed only. (c) invents a mass dependence and then a compensation for it; neither force involves m. (d) describes an apparatus needing constant retuning, which is exactly the labour the selector saves.

**7. D** — An element dl carrying free charge of linear density lambda drifting at v holds dq = lambda*dl and feels dF = (dq) v cross B = (lambda*dl) v cross B; since I = lambda*v this is dF = I dl cross B, integrating to F = I L cross B with magnitude B*I*L*sin(theta). It is the same physics counted per unit length instead of per particle. (a) confuses the two halves of magnetostatics: Ampere's law says what a current produces, the Lorentz force says what a field does to a current. (b) misuses Newton's third law, which relates forces between two currents and cannot by itself yield B*I*L*sin(theta). (c) makes two laws where there is one and leaves no account of why the constants agree.

**8. C** — In Gaussian units the magnetic force is written q(v/c) cross B and the current-element force (I/c) dl cross B, because B is defined so that E and B share dimensions; in SI there is no c, and F = q*v cross B, dF = I dl cross B. Dividing an SI answer by 3x10^8 makes it wrong by that factor. (a) invents a unit conversion for a current measured in amperes on both sides. (b) confuses the drift speed of the charges - under a millimetre per second in copper - with the constant c, which the cgs formula carries whatever the drift speed. (d) is the costliest answer: the two forms are not dimensionally interchangeable, and mixing systems produces answers wrong by eight orders of magnitude.

**9.** The magnetic force F = q*v cross B is perpendicular to both its factors, in particular perpendicular to v at every instant; work is the integral of F.dl with dl along v, so the integrand is identically zero and the instantaneous power P = F.v = 0. Hence the speed and the kinetic energy are exactly conserved however strong the field and however long the particle stays in it. What is not conserved is the momentum p = m*v, a vector whose direction turns continuously and reverses completely over half a revolution; nor is the velocity. 'Does no work' is not 'exerts no force': there is a real force of magnitude q*v*B, large enough to bend a proton beam round a 27 km ring. It is also not 'produces no acceleration': a = q*v*B/m is real and is what curves the path - a centripetal acceleration that changes the direction of v and not its magnitude, and confusing acceleration with speeding up is the error this topic exposes. A cyclotron therefore never uses the magnetic field to add energy. The field's job is to bend the protons round semicircles inside the dees and, because T = 2*pi*m/(qB) is independent of speed, to return them to the gap at strictly regular intervals. The energy comes entirely from the electric field across that gap: each crossing finds the alternating voltage reversed so that qE accelerates the proton again, adding qV of kinetic energy, and the radius grows as r = m*v/(qB) until after hundreds of crossings the proton spirals out at many MeV. Every joule came from E and none from B.

**10.** A cross product has two defining properties. Magnitude |v cross B| = v*B*sin(theta), theta being the angle between the vectors: zero when they are parallel or antiparallel (sin(theta) = 0) and greatest when they are perpendicular (sin(theta) = 1). Direction: v cross B is perpendicular to the plane containing v and B, with the sense given by the right hand. Both facts about the magnetic force follow at once - a charge moving along a field line feels nothing and travels straight, a charge moving across the field feels the full q*v*B, and the force is perpendicular to v, which is why it does no work, and perpendicular to B, which is why motion along B is never affected. RHR-1 as the deck states it - thumb along v, fingers along B, force out of the palm - expresses that sense and gives the force on a positive charge. Reversing the sign of q reverses F, because q multiplies the whole vector; for an electron, compute the positive-charge answer and turn it round. The two observations are reconciled by noticing that F depends on the product q*v, not on q or v separately. An electron and a proton fired the same way have opposite q and the same v, so q*v is opposite and the forces are opposite: they curve apart. An electron beam moving one way and a positive-ion beam moving the other have opposite q and opposite v, and the two reversals cancel, so q*v is the same and they curve the same way - which is exactly why a conventional current to the right and an electron flow to the left are the same current and feel the same force.

**11.** Arrange E and B perpendicular to each other and both perpendicular to the beam. A particle of charge q and speed v then feels an electric force qE, whose size does not depend on v, and a magnetic force q*v*B, whose size is proportional to v, with the geometry set so that the two oppose. Undeflected passage requires qE = q*v*B, hence v = E/B. Two features carry the physics. First, q cancels, sign included: reversing the charge reverses both forces together, so electrons and positive ions of the same speed both pass. Second, m never appears, since neither force involves the mass. The selected speed is a property of the apparatus, not of the particle. Because one force grows with v and the other does not, the balance holds at exactly one speed: a particle faster than E/B has q*v*B > qE, so the magnetic force wins and deflects it to the side the magnetic force points; a slower particle has q*v*B < qE, so the electric force wins and deflects it the other way. Both miss the exit slit. Passing the surviving beam into a second region containing B alone bends it into a circle of radius r = m*v/(q*B'), and since v is now known and fixed by the first stage, the radius measures m/q directly: heavier ions of the same charge sweep proportionally larger circles. The division of labour is the point - the first stage removes the speed spread that would blur the mass measurement, and the second separates by mass.

**12.** An electromagnetic wave is a self-sustaining pair of oscillating fields: a changing electric field generates a magnetic field and a changing magnetic field generates an electric field, so once launched - for instance by the oscillating current in a transmitting aerial - the disturbance regenerates itself and travels away. The generation is by a cross-product relation, so each field is produced at right angles to the one producing it: hence E perpendicular to B, and both perpendicular to the direction of travel, which is the direction of E cross B. The wave is therefore transverse, with no component of either field along the direction of propagation; the standard wrong picture, with E oscillating back and forth along the line of travel, describes a longitudinal wave such as sound and cannot be electromagnetic at all. The speed in vacuum is fixed by the electric and magnetic properties of free space, c = 3.00x10^8 m/s, and is the same for every electromagnetic wave whatever its frequency. Since the wave advances one wavelength per period, c = f*lambda, and because c is constant, f and lambda are inversely proportional. The only physical difference between a gamma ray and a radio wave is that frequency and what follows from it: both are the same transverse E-B disturbance at the same speed, but the gamma ray has an enormously higher frequency, a correspondingly shorter wavelength, and therefore an enormously larger energy per photon, E = h*f = h*c/lambda - a few MeV against a fraction of a microelectronvolt. That is why gamma rays ionise and radio waves do not, and why radio waves diffract round buildings while gamma rays travel in essentially straight lines.
