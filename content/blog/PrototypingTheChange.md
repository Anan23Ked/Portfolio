---
title: "Prototyping the Change"
date: "2025-10-15"
excerpt: "Is it possible to capture the constant physical changes in our environment that’s backed by metrics and visually appealing enough whilst blurring the lines between technical and creative progress?"
coverImage: "content/img/blog1.png"
---

#### Ananya Kedlaya
<br/>
<div style="font-size: 1.3em; margin-bottom: 20px; font-weight: semi-bold;">
Is it possible to capture the constant physical changes in our environment that are backed by metrics and are visually appealing, while blurring the lines between technical and creative progress?
</div>

This question comes to mind when I see advances in connecting the “things” around us to software, making the interplay between objects and humans simpler and more expressive.

<div style="display: flex; align-items: center; justify-content: center; margin: 20px 0;">
<img src="https://ak-portfolio-s3-bucket.s3.eu-west-2.amazonaws.com/blog/PrototypingTheChange/image2.png" alt="IoT Image" style="max-width: 50%; height: auto;" />
</div>
The things we can control, observe, and respond to have become feasible with networks that bind objects to software and execute commands remotely. Although understanding of the Internet of Things (IoT) is uneven, its execution and experiences have touched and benefited millions.
<br/><br/>


<div style="font-size: 1.3em; margin-bottom: 20px; font-weight: semi-bold;">
Can we extend this technology to reflect the very factors that sustain life and shape the world through constant change and adaptation?
</div>

When I think about the environment, I associate it with the four classical elements — Fire, Earth, Water, and Air — and the many ways they can be interpreted. These elements are always changing, yet they remain foundations for a vast range of complex products and behaviors.

## Elements of IoT

<div style="display: flex; align-items: center; gap: 20px;">
<div style="flex: 1; display: flex; justify-content: center; align-items: center;">
<img src="https://ak-portfolio-s3-bucket.s3.eu-west-2.amazonaws.com/blog/PrototypingTheChange/Gemini_Generated_Image_kf3b9gkf3b9gkf3b+(1).png" alt="Elements" style="max-width: 100%; height: auto;" />
</div>
<div style="flex: 1;">
Combine an object with a suitable software program and you get a device that can follow orders and generate results. Add a network for remote communication — removing the need to be physically present — and you get a "smart" device that senses, decides, and reports. Algorithms allow devices to make decisions and communicate results across the world, creating dynamic experiences that make life easier.
</div>
</div>
I wanted a digital representation of the primal physical world that is ever-changing and that evolves over time — a world where actions are binary and representation is RGB. I associated the four elements with basic colours:

- Red — Fire
- Green — Earth
- Blue — Water
- A blend — Air

## All About The Code

Controlling lights to display underlying mechanisms of change led me to mathematical functions: given input values, the equations update continuously and generate evolving outputs.

<div style="display: flex; align-items: center; justify-content: center; margin: 20px 0;">
<img src="https://ak-portfolio-s3-bucket.s3.eu-west-2.amazonaws.com/blog/PrototypingTheChange/Built-Prototype.jpeg" alt="Working prototype" style="max-width: 50%; height: auto;" />
</div>
The “Pyramid of Elements” is a tactile way to visualise primal forces in a digital environment. A rotating pyramid head, matched with the colour of its face, displays the element on an LED panel called Vespera. The Vespera is controlled via `MQTT` messages sent over Wi‑Fi.

The pyramid uses a rotary encoder to track rotation steps and determine which face is active. That data animates an abstract view of the corresponding element.

<div style="display: flex; align-items: center; justify-content: center; margin: 20px 0;">
<img src = "https://ak-portfolio-s3-bucket.s3.eu-west-2.amazonaws.com/blog/PrototypingTheChange/image6.png" alt="Pyramid of Elements schematic" style="max-width: 50%; height: auto;"/>
</div>
<div style="flex: 1;">
I used sine functions in my `Arduino` code to create horizontal and vertical waves with offsets to show continuously updating patterns. These wave values are mapped to colour ranges (high to low saturation) across RGB channels. The colour value for each pixel is assembled into an array and sent as a single `MQTT` payload to the broker, reducing update frequency and lowering the load on the Vespera.

Red, green, and blue (and mixes thereof) were the pyramid’s four faces, mapped to Fire, Earth (trees), Water (waves), and Air. When a face is selected, the display shows a continuous sine wave animation for that element.

## The Hurdle

The device needed an accurate physical mapping between the pyramid faces and the rotary encoder states. I marked a physical zero position and set that as the initial state in the `Arduino` code, so encoder states and pyramid faces stayed in sync. This approach requires a preset physical mapping, which can be inconvenient if the device is moved or disconnected while the knob does not match the physical initial state. Adding an internal position reader for the pyramid before executing the display would make the device more convenient and precise, improving the human–object relationship.

## It's All in the Head

Representations are only as vivid as our imagination; constrained by physical reality, science fiction often becomes technology. Connected systems have become part of daily life, and it's easy to forget their relevance. Still, such systems can pause us and inspire designs that reflect our environment at a granular level.

While most work focuses on seamless user experiences and clear data representation, we should also use connected devices to increase transparency and awareness of the outcomes of our actions. Taking accountability for our choices helps us use data more effectively, and it shapes how technology evolves to reflect nature’s balance.

<div style="display: flex; align-items: center; gap: 20px;">
<div style="flex: 1; display: flex; justify-content: center; align-items: center;">
<img src="https://ak-portfolio-s3-bucket.s3.eu-west-2.amazonaws.com/blog/PrototypingTheChange/image5.png" alt="IoT Ecosystem"  style="max-width: 100%; height: auto;" />
</div>
<div style="flex: 1;">
At this integration, the culmination of hardware and software acts as a digital nervous system for the planet: sensing, interpreting, and responding to environmental change. From data collection at scale to global visualization, the Internet bridges the gap between data and decision-making, enabling more sustainable and safer living.
</div>
</div>

## Play Curious, yet Stay Safe

As devices grow in capability, managing them becomes a serious responsibility. IoT devices face security risks with severe impacts on users and products. For users, risks include loss of personal data and breaches of privacy. The 2015 remote hack of a Jeep Cherokee by security researchers Charlie Miller and Chris Valasek — where attackers accessed the vehicle’s Uconnect system and disabled it remotely — highlighted these dangers and shook public trust.

<div style="display: flex; align-items: center; gap: 20px;">
<div style="flex: 1; display: flex; justify-content: center; align-items: center;">
<img src="https://ak-portfolio-s3-bucket.s3.eu-west-2.amazonaws.com/blog/PrototypingTheChange/Gemini_Generated_Image_6cu4kq6cu4kq6cu4.png" alt="Jeep Hack" />
</div>
<div style="flex: 1;">
From a product perspective, automakers had to recall around 1.4 million vehicles to patch the vulnerability, damaging reputations but also driving home the importance of software security as a safety requirement. Prioritizing security in IoT design safeguards users and ensures long-term product success.
</div>
</div>

## Conclusion

I believe the fusion of art, technology, and environment through IoT gives us opportunities to interact with our surroundings and to redefine creativity. The “Pyramid of Elements” is an attempt to combine the virtual and the mechanical while exploring human–object relationships and encouraging observation of our environment. Innovation thrives when it reflects nature’s balance and adaptability.
innovation thrives when it is a reflection of nature’s balance and adaptability.
<br/><br/>
<br/><br/>


### References
1. Sterling, Bruce. Shaping things. MIT press, 2005
2. Adrian McEwen and Hakim Cassimally, designing the internet of things. Wiley, 2013.
3. Wilson, Duncan. Vespera. Github, 2024, https://github.com/ucl-casa-ce/casa0014/tree/main/vespera
4. Atkin, Ross, ‘entropy and the internet of useful things’, March 8th 2015, https://www.Rossatkin.Com/wp/?Portfolio=sxsw-2014
5. Greenberg, Andy, hackers remotely kill a jeep on the highway—with me in it, Jul 21, 2015, https://www.Wired.Com/2015/07/hackers-remotely-kill-jeep-highway/



#### Disclosure
Some images in the blog were generated using AI (ChatGPT, Gemini).
