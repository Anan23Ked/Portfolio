---
title: "Prototyping the Change"
date: "2025-10-15"
excerpt: "Is it possible to capture the constant physical changes in our environment that’s backed by metrics and visually appealing enough whilst blurring the lines between technical and creative progress?"
coverImage: "content/img/blog1.png"
---


# Prototyping the Change
### Ananya Kedlaya

Is it possible to capture the constant physical changes in our
environment that’s backed by metrics and visually appealing
enough whilst blurring the lines between technical and creative
progress?

This is a question that runs in my mind when I see the technical advances in connecting the innate “things” around us to program movement and reflect its surrounding, all to make the complex interplay between object and humans simpler
and more efficient.
The various things that we can control, observe and respond to are feasible with the
introduction of a network that binds objects to software programs and executes
commands remotely over the internet. Now although the accurate understanding of
the Internet of Things (IoT) may not have reached all its users in the same level, but
its execution and experiences has touched and benefited millions.
This brings me to the second question, as someone who looks for details and sees
patterns almost everywhere:


Can we extend this technology to the realm of reflecting into
the very factors that has equipped in sustaining life and shaped the world through constant change and adaptation?

Quite like the evolution of the techno-social adaptation into mundane tasks of the
society, the basic elements contributing to life are something we, as humans
constantly adapt to and shape our ideas around. When we think about our
environment, I associated that with its roots- the four elements, Fire, Earth, Water
and Air and the vastness of its interpretation and representation. Here’s where I saw
a relation between how these elements are always in a state of change yet are strong
enough to remain as a solid foundation for an unfathomable combination of complex
products, they give rise to.
Elements of IOT
Now coming back to the elements that
contribute to making life efficient, look at
products we associate with, combine an
object with suitable software program, we
get a device that can follow orders and
generate results. Now combine that with
the power of a network for remote
communication, eliminating the need to
be physically present to control the device,
we get a “smart” device that not only
senses but can also make decisions by following algorithms ( a procedure to execute
mathematically accurate set of equations) and communicate its results across the
world, indeed a complex and dynamic experience making our lives easier!
I wanted to have a digitalized
representation of the primal physical
world that is everchanging and evolves
over time. A world where actions are in
binary and representation is in RGB
format, it is not a farfetched thought to
associate the four elements as basic
colours, Red for Fire, Green for Earth,
Blue for Water and a mixture of them for
Air.
ALL ABOUT THE CODES
Looking at lights that can be controlled to display the underlying mechanism of
change, led me to think about mathematical equations which, given a certain value to
instil change will constantly update the results and derive newer outputs once
initiated.
The “Pyramid of Elements” is a tactile encounter with the primal forces to visualize
them as a product of digitalised environment. A rotating pyramid head when
matched with the colour of its face, displays the elemental representation of the
colour to a LED display called Vespera, a luminescence that can be controlled via
MQTT.
The Pyramid consisted of a rotary encoder that would keep track of the rotation steps
and determine which face of the pyramid was the head facing, this data was used to
animate an abstract view of the respective colour as one of the elements.
I used Sine functions in my Arduino code to depict them as horizontal and vertical
waves with some offset value (both negative and positive) to show the waves as
constantly updating outcomes. Map these to a range of colours from high to low
saturation amongst the RGB colours and send the colour value for each pixel as an
array over Wi-Fi as an MQTT message to the Broker and we’ve got ourselves a new
way to see the play of hues representing the four elements on the Vespera. A light
show that mimics the mechanism of the natural world, while the object to control it
extends the known act of colour picking through a simple act of rotation. One could
call this quite playful and immerse themself in the experience.
Red, Green and Blue and a mix of these colours were the four faces of the pyramid.
Each mapped to Fire, Trees, Water Waves and Air respectively and displayed as a
continuous Sine wave when the face was selected. This data was initially stored in a
buffer until the required colour value for all the pixel was gathered and then sent to
the Broker as a single payload, hence reducing the frequency of updates, and
lowering the load onto the Vespera.
The Hurdle
The device needed to have an accurate physical mapping with the face of the pyramid
to the rotary encoder state, to mark an indicator about the start position for the
device was necessary for the program to output the right face-colour representation
as a complete rotation took place, I made a physical marking and set that state as the
zeroth position in my Arduino code, so that states of the encoder and pyramid face
appears to be in sync. A drawback of this approach is that it requires a preset
physical mapping, which is not very convenient in scenarios where the users wish to
disconnect from the device while the knob is facing the pyramid face that is not
shown as the physical initial state. Adding an internal position reader for the
pyramid before executing the display would be beneficial in making the device more
convenient and precise. Thus, improving the human-object relationship.
IT’s all in the head!
Representations can only get as vivid as
our imagination leads to, but bind it
within physical constraints, we see
modifications of science fiction into a
reality that the existing technology can
help mould better into actual physical
products.
With the introduction of a connected
system and its massive growth into
everyday activities, it not uncommon for
consumers to forget the basis of their
relevance, it becomes a part of the day to
day, but can it put a little pause and make us think about how our environment can
be a source of inspiration for developing products that reflect back into a granular
level?
While most focus on creating seamless user experience to enhance data
representation, extending the concept to magnify the transparency of our
surroundings and increase our awareness on the outcomes of our actions is
important. Taking accountability for our choices makes us realise the effective steps
one needs to improvise and utilise the data better. Hence, establishes thoughts about
the evolution of how things have shaped us, while subtly determining our next course
of action, yet having profound impact.
It is at this integration that I feel that the
culmination of hardware and software is
at its peak.
The programmable devices that are built
to help us understand our surroundings
better act as a digital nervous system for
the planet.
Sensing, interpreting and responding to
environmental changes. Its applications,
ranging from a simple data collection
device that must sustain a massive
payload to being able to visualise and
interpret data across the world with the power of the Internet has bridged the gap
between data and decision-making, enabling us to live more sustainably and safely.
Play curious, yet stay safe
While the application and the benefit of developing devices that can communicate is
quite vast, managing them is an equally responsible task. In such world of connected
devices, IoT devices face significant security risks which have severe impact on users
and as well as the products. For users, it is loss of personal data and breach in
privacy. The 2015 remote hack of a Jeep Cherokee by security researchers Charlie
Miller and Chris Valasek is a concrete proof of it, where they remotely accessed the
car’s Uconnect System and were able to cut the transmission and disable the vehicle
while it was being driven. This resulted in widespread fear and uncertainty around
safety for users thus hampering their trust and relationship with the technology.
In the product’s point of view, the
company had to recall around 1.4 million
vehicles to patch the vulnerability and face
reputational damage. However, on the
bright side, this led to automakers
prioritize software security as a critical
safety design requirement. Summing up,
prioritization of security in IoT design not
only safeguards users but also ensures the
long-term success of the products.
In, conclusion, I believe that the fusion of art, technology and environment through
IoT gives us; users, an opportunity to interact with our surroundings and creates
space to redefine creativity through technology that thrives in sync with the natural
world. The “Pyramid of Elements” is my attempt to combine the virtual and
mechanical while exploring human-object relationship and how they can be
extending to motivate us to observe our surroundings better. This reminds us that
innovation thrives when it is a reflection of nature’s balance and adaptability.