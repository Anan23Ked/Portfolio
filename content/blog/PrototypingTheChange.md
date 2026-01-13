---
title: "Prototyping the Change"
date: "2025-10-10"
excerpt: "Is it possible to capture the constant physical changes in our environment that’s backed by metrics and visually appealing enough whilst blurring the lines between technical and creative progress?"
coverImage: "content/img/blog1.png"
---

### Ananya Kedlaya

Is it possible to capture the constant physical changes in our environment that are backed by metrics and are visually appealing, while blurring the lines between technical and creative progress?

This question comes to mind when I see advances in connecting the “things” around us to software — making the interplay between objects and humans simpler and more expressive.

The things we can control, observe, and respond to have become feasible with networks that bind objects to software and execute commands remotely. Although understanding of the Internet of Things (IoT) is uneven, its execution and experiences have touched and benefited millions.

Can we extend this technology to reflect the very factors that sustain life and shape the world through constant change and adaptation?

When I think about the environment, I associate it with the four classical elements — Fire, Earth, Water, and Air — and the many ways they can be interpreted. These elements are always changing, yet they remain foundations for a vast range of complex products and behaviors.

## Elements of IoT


Combine an object with a suitable software program and you get a device that can follow orders and generate results. Add a network for remote communication — removing the need to be physically present — and you get a “smart” device that senses, decides, and reports. Algorithms allow devices to make decisions and communicate results across the world, creating dynamic experiences that make life easier.

I wanted a digital representation of the primal physical world that is ever-changing and that evolves over time — a world where actions are binary and representation is RGB. I associated the four elements with basic colours:

- Red — Fire
- Green — Earth
- Blue — Water
- A blend — Air

## All About The Codes

Controlling lights to display underlying mechanisms of change led me to mathematical functions: given input values, the equations update continuously and generate evolving outputs.

The “Pyramid of Elements” is a tactile way to visualize primal forces in a digital environment. A rotating pyramid head, matched with the colour of its face, displays the element on an LED panel called Vespera. The Vespera is controlled via `MQTT` messages sent over Wi‑Fi.

The pyramid uses a rotary encoder to track rotation steps and determine which face is active. That data animates an abstract view of the corresponding element.

I used sine functions in my `Arduino` code to create horizontal and vertical waves with offsets to show continuously updating patterns. These wave values are mapped to colour ranges (high to low saturation) across RGB channels. The colour value for each pixel is assembled into an array and sent as a single `MQTT` payload to the broker, reducing update frequency and lowering the load on the Vespera.

Red, green, and blue (and mixes thereof) were the pyramid’s four faces, mapped to Fire, Earth (trees), Water (waves), and Air. When a face is selected, the display shows a continuous sine wave animation for that element.

## The Hurdle

The device needed an accurate physical mapping between the pyramid faces and the rotary encoder states. I marked a physical zero position and set that as the initial state in the `Arduino` code so encoder states and pyramid faces stayed in sync. This approach requires a preset physical mapping, which can be inconvenient if the device is moved or disconnected while the knob does not match the physical initial state. Adding an internal position reader for the pyramid before executing the display would make the device more convenient and precise, improving the human–object relationship.

## It's All in the Head

Representations are only as vivid as our imagination; constrained by physical reality, science fiction often becomes technology. Connected systems have become part of daily life, and it's easy to forget their relevance. Still, such systems can pause us and inspire designs that reflect our environment at a granular level.

While most work focuses on seamless user experiences and clear data representation, we should also use connected devices to increase transparency and awareness of the outcomes of our actions. Taking accountability for our choices helps us use data more effectively, and it shapes how technology evolves to reflect nature’s balance.

At this integration, the culmination of hardware and software acts as a digital nervous system for the planet: sensing, interpreting, and responding to environmental change. From data collection at scale to global visualization, the Internet bridges the gap between data and decision-making, enabling more sustainable and safer living.

## Play Curious, yet Stay Safe

As devices grow in capability, managing them becomes a serious responsibility. IoT devices face security risks with severe impacts on users and products. For users, risks include loss of personal data and breaches of privacy. The 2015 remote hack of a Jeep Cherokee by security researchers Charlie Miller and Chris Valasek — where attackers accessed the vehicle’s Uconnect system and disabled it remotely — highlighted these dangers and shook public trust.

From a product perspective, automakers had to recall around 1.4 million vehicles to patch the vulnerability, damaging reputations but also driving home the importance of software security as a safety requirement. Prioritizing security in IoT design safeguards users and ensures long-term product success.

## Conclusion

I believe the fusion of art, technology, and environment through IoT gives us opportunities to interact with our surroundings and to redefine creativity. The “Pyramid of Elements” is an attempt to combine the virtual and the mechanical while exploring human–object relationships and encouraging observation of our environment. Innovation thrives when it reflects nature’s balance and adaptability.
innovation thrives when it is a reflection of nature’s balance and adaptability.