# Tuesday — PHY_102 nightly check

*Transformers as concepts: why the device needs AC at all, why the emf per turn is what makes the turns ratio work, what step-up costs in current, why the core is laminated and soft, what a transformer does to a load resistance, and where the energy in a real transformer is lost.*
*Sit cold, notes closed, about 15 minutes. Score out of 12.*

**1.** A transformer is connected to a steady 12 V DC supply instead of an AC source. After the brief switch-on transient the secondary voltage settles at zero. The reason is:
a) The transformer equation is defined only for rms quantities, and a DC supply has no rms value.
b) Iron cannot sustain a steady magnetic flux, so no flux from the primary reaches the secondary.
c) A steady current gives a steady core flux, and only a changing flux induces an emf in the secondary.
d) The primary winding has almost no resistance, so the whole supply voltage is dropped inside the source.

**2.** The transformer equation V₂/V₁ = N₂/N₁ follows most directly from the fact that:
a) the same changing core flux threads every turn of both coils, so each turn carries the same induced emf.
b) the power delivered by the secondary equals the power supplied to the primary in an ideal transformer.
c) the resistance of a winding is proportional to the number of turns it contains.
d) the current in a winding is inversely proportional to the number of turns it contains.

**3.** A step-up transformer raises 110 V to 550 V. For an ideal transformer, the secondary:
a) delivers five times the power of the primary, since the voltage has been raised five times.
b) carries the same current as the primary, since the same charge per second must pass round both circuits.
c) carries five times the primary current, because voltage and current both scale with the turns ratio.
d) carries one fifth of the primary current, so that the power delivered equals the power supplied.

**4.** The iron core of a transformer is built from thin sheets insulated from one another rather than as a single solid block. The purpose is to:
a) reduce hysteresis loss by giving the magnetic domains less room in which to rotate.
b) interrupt the currents induced in the core itself, which would otherwise circulate in wide loops and heat it.
c) increase the flux in the core by giving the magnetic field more surfaces to concentrate on.
d) lower the resistance of the windings, since a laminated core allows thicker wire to be wound on it.

**5.** A student writes: "a step-up transformer is an amplifier — it gives out more energy than it takes in." The correct response is:
a) Right in principle; the gain is simply limited to about 99 % by practical losses.
b) Wrong; it raises the voltage while lowering the current in the same ratio, so the output power is at best equal to the input power.
c) Wrong; a step-up transformer raises voltage and current together, but the output frequency falls to compensate.
d) Right for the secondary circuit alone; the extra energy is drawn from the magnetic field stored in the core.

**6.** Electrical power is sent across country at very high voltage. For a fixed power delivered, the reason is that:
a) a higher voltage drives the energy along the line faster, so less of it leaks away en route.
b) the resistance of a transmission line falls as the voltage applied across it rises.
c) high voltage reduces the hysteresis loss in the transformers at each end of the line.
d) the line current is correspondingly smaller, and the line's I²R heating falls as the square of the current.

**7.** A transformer is placed between an amplifier and a loudspeaker for "impedance matching". What does it do to the load resistance as the amplifier sees it?
a) It presents (N₁/N₂)² R, so the turns ratio can be chosen to match the source and give maximum power transfer.
b) It presents the same R, since a transformer changes voltages and currents but not resistances.
c) It presents (N₁/N₂) R, since resistance scales with the turns ratio in exactly the way voltage does.
d) It presents zero resistance, so that the whole of the amplifier's output power reaches the loudspeaker.

**8.** Which pairing of a real transformer loss with the measure that reduces it is correct?
a) Copper loss — laminating the core into thin insulated sheets.
b) Eddy-current loss — winding the coils from thicker, lower-resistance wire.
c) Hysteresis loss — using a soft magnetic core material whose magnetisation reverses with little energy per cycle.
d) Flux leakage — raising the frequency of the AC supply.

**9. (explain why)** A step-up transformer takes in 240 V and puts out 2400 V. Explain why this does not create energy, saying precisely what happens to the current, and state where the energy delivered to the secondary circuit actually comes from.

**10. (explain why)** A transformer driven at 50 Hz delivers 50 Hz whatever its turns ratio. Explain why the turns ratio cannot change the frequency, and use that to explain why a transformer on its own cannot be used to run a 12 V DC device from the mains.

**11. (explain why)** The primary and secondary windings are not electrically connected to each other at any point, yet power passes from one to the other. Explain the mechanism by which it does, and why a 1 : 1 isolation transformer is a useful device even though it changes neither voltage nor current.

**12. (explain why)** Suppose a transformer's windings were made of a perfect conductor of zero resistance. Explain why it would still not be 100 % efficient, name the losses that would remain, and say which of a real transformer's losses depends strongly on how much current the load draws and which does not.
