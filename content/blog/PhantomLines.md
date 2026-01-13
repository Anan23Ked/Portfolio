---
title: "Phantom Lines"
date: "2025-12-01"
excerpt: "Sensing the unseen. The idea for this  physical-analogue data device prototype was creating a hand that can detect the virtual world"
coverImage: "content/img/phantomLineImage.jpeg"
---

### Ananya Kedlaya


"Phantom lines are dashed lines used in technical drawing to represent features that are not directly visible in the current view".
<p align="center">
<img width="535" height="720" alt="Screenshot 2026-01-12 at 19 52 15" src="https://github.com/user-attachments/assets/09fb845d-315d-4b8f-a29b-dd4b7ff75e7a" />
</p>

**GitHub:** [https://github.com/tildavnelson/CASA0019-Sensor-Data-Visualisation---Phantom-Lines](https://github.com/tildavnelson/CASA0019-Sensor-Data-Visualisation---Phantom-Lines)

## The Task

The task for this Sensor data visualisation module was to prototype a physical-analogue data device and its augmented digital counterpart capable of consuming one or more data feeds. We could use gauges, lights, sounds or haptic motors, to convey data in our physical device and the data could be gathered by sensors implemented in any of the programme's modules, or from existing and accessible sources. The digital version was there to offer additional augmented information, such as abstractions, interpretations or analyses of the data presented in the physical data device. Our project Phantom Lines encompasses all these aspects, while also merging the data visualisation of the virtual data device with that of the physical device into a single object.
## Initial Thoughts

The starting point for this project was thinking about the purpose of data visualisation and what data is interesting to us. At the root of the interest of this project is to be able to interpret the unseen and to create an embodied experience of the data.

### EMBODIED EXPERIENCE

A short walk through the massive Bartlett School of Architecture reveals students curled up around 15-inch screens, spending hours, days, and years designing large-scale, spatial, and tactile architectural forms. There is a clear contradiction in the way architecture is made today: the tools we use are disconnected from the physical qualities they are meant to represent. By pressing keys, clicking a mouse, and sitting still in front of a small digital "window," students are expected to imagine buildings defined by materiality and spatial experience. This exposes a tension between the bodily, lived nature of architectural space and the increasingly abstract, screen-based methods used to conceive and produce it. As the gap between the physical and virtual worlds continues to widen, and as virtual simulations increasingly dominate how we design, create, and think, establishing a bridge between these two realms became a point of interest.

Reminding the creative practitioner and maker that what they produce is intended for the body and for a lived experience, and incorporating this experiential dimension into the making process rather than confining it solely to the final outcome.

### SENSING THE UNSEEN

The idea for this physical-analogue data device prototype was creating a hand that can detect the virtual world. Sensing the virtual world with a tentacle that's capable of exploring the imagined, of past and future designs at scale with the real world.

**THE DATA:** The coordinates of the surface of a 3D model and more specifically the intersectional coordinates between this 3D model and the digital replica of our data device.

### How Would You Use It?

This "hand" object would bring the virtual into the physical, and the physical into the virtual. By bridging the gap between designing a children's playground on a computer and manufacturing its components, the designer could use the "hand" at an early prototyping stage to experience the playground at scale. This would allow them to assess elements such as the height of the top slide, whether a parent can comfortably reach that height to support a child, and how other physical objects can be placed within the space for comparison. This process reduces the need to model every object in the virtual environment, repeatedly modify the design, and manufacture multiple test components. As a result, the final object is more refined and has already been experienced through the body.

This device takes three-dimensional drawings and places them in the physical world, allowing the virtual design to exist in relation to the surrounding objects rather than remaining confined to a screen. Unlike a VR headset, which can be isolating, this experience is communal, enabling designs to be discussed and experienced collectively by a team. The goal is to get the maker out of their seat and create buildings and objects that have been experienced throughout the making process.

## Preliminary Design Concepts for the 'Hand', 'Wand', 'Stick' Device
<p align="center">
<img width="1022" height="405" alt="Screenshot 2026-01-12 at 19 21 58" src="https://github.com/user-attachments/assets/b6fa5015-b970-41d2-98af-2d4d7e52d575" />
</p>

We explored several ways of giving the sensor data object a physical response. One idea was a telescopic wand that would retract when it intersected with virtual boundaries, using linear actuators to translate the rotational motion of a servo into linear movement. Another approach involved inflatable, tentacle-like fingers that would retract as internal cables were pulled by servos. However, we quickly realised that these motion-based methods were not feasible within the timeframe. For the interaction to feel believable, the speed of the servos would need to precisely match the movement of the hand. If the response lagged, the wand would not retract quickly enough to give the impression of the device hitting a virtual surface, meaning the retractions would appear arbitrary.

## CHOSEN DESIGN CONCEPT

We decided to use light to visualise the virtual boundary. The prototype would take the shape of a handheld stick with a 144-LED strip placed within it, which the user would swing through the air to detect the virtual boundaries of their model.
<p align="center">
<img width="319" height="497" alt="Screenshot 2026-01-12 at 19 25 19" src="https://github.com/user-attachments/assets/895237e0-a280-43ff-9fda-86d3ac10f506" />
</p>

**Data Source:** The 3D model.

The 3D model was built on Fusion and imported as an .fbx file in Unity to maintain texture and colour. Keeping in mind the main application of this project being is real-time, scaled visualisation of architectural spaces, this device would aid in collaborative design experimentation and iteration. We chose to make the 3D model of an accessibility toilet as our AR space.

### Why Accessibility Toilet?

- Our device would help analyse space constraints during use, provide an appropriate design for a wheelchair user or a caregiver within the defined toilet area.
- The device could help to understand how people with accessibility needs tend to feel in the designed space.
- Understand how distances between the toilet and walls affect the placement of handrails in the most intuitive way.
<p align="center">
<img width="757" height="317" alt="Screenshot 2026-01-12 at 19 27 03" src="https://github.com/user-attachments/assets/b5d38556-f90e-4c47-b198-f0d64d9c511d" />
</p>

## Tracking

We needed to track the movement of the stick in space and analyse its positions with respect to the 3D model being viewed and interacted with by the user. To determine the points where the stick intersected with virtual objects and to obtain accurate distances within the AR space through interaction with the physical stick,
precise tracking of the stick’s movement relative to the user and the AR plane was
essential. The digital twin would display this information while showcasing a clean visual on how
the stick passes through various objects in the scene. Additional information, such as measurements, distances and scene information, would aid in the experience of the virtual architectural model for the user. We wanted the stick to be sleek, lightweight, and independent of the AR device displaying the digital twin. We wanted the stick to have its own sensors, including a gyroscope, accelerometer, and infrared sensor, to determine its movement and orientation to allow accurate tracking.

## Solution for Tracking

After extensive consideration and iterative assessment of what was feasible within the remaining three-week timeframe, we decided to use the integrated sensors of the phone as our sensor and tracking device. The phone was incorporated as a physical component of the stick, effectively linking the physical object to its digital counterpart. The phone has built-in sensors that detect orientation, and AR Foundation in Unity uses the initial position as point 0 when placing the AR model. We extended this functionality in our application by using data from the phone’s physical sensors, gathered through AR Foundation, as our data source to enable real-time tracking. We defined the stick as a line with a start point and an end point. The start point (Point A) was where the phone was attached to capture location and orientation, and where the user held the stick. The end point (Point B) was the opposite end of the stick, which moved freely in space. As the stick had a fix ed length with a predefined number of closely packed LEDs, it could be divided into defined segments that could be accurately tracked and controlled without any lag.
<p align="center">
<img width="782" height="301" alt="Screenshot 2026-01-12 at 19 28 04" src="https://github.com/user-attachments/assets/fdd2b777-085e-4f96-98f5-f5668701349b" />
</p>

An accurate, to-scale 3D model of the stick was attached to the AR camera as a child object. This ensured that the virtual stick mirrored the movement of the camera, and therefore the phone, across the X, Y, and Z axes. Once the physical movement of the stick aligned precisely with its virtual representation, the next step was to introduce a virtual object into the Unity environment and calculate the point at which it intersected with the stick.
<p align="center">
<img width="1020" height="415" alt="Screenshot 2026-01-12 at 19 28 24" src="https://github.com/user-attachments/assets/97198257-28b6-4edf-9b4d-26c11b9b73b2" />
</p>

## LIGHT ON

As the virtual stick was the child of the main camera itself, and a clear representation of the actual physical stick's 3D model, drawn to scale, we could follow its interaction with the planes in the AR models, as the length of the virtual stick passed through any boundary/object, it would intersect and then penetrate within the thickness of the plane. This point of intersection was tracked in Unity.
<p align="center">
<img width="627" height="447" alt="Screenshot 2026-01-12 at 19 37 52" src="https://github.com/user-attachments/assets/2cec86d2-0f60-407e-8f85-5e0582798f2a" />
</p>

### Tracking Procedure in Unity

- The virtual stick model had two Transforms attached to its start and end positions, Point A and Point B, respectively. These were used to store the position, scale, and rotation of the virtual stick GameObject.
- All the AR models were treated as the Environment layer
- A ray was cast from the point A, where the initial Transform sits, towards the point at which it intersected with the Environment layer.
- The Vector Distance between point A and the ray hit point was calculated.
  
<p align="center">
<img width="621" height="297" alt="Screenshot 2026-01-12 at 19 38 06" src="https://github.com/user-attachments/assets/79436c94-f94c-4ac1-85b9-cdcb3332ab1b" />
</p>
### Getting the LED Index Number

- The hit point distance was converted into a ratio of the stick's length to determine the LED segment onto which the hit point fell.
- This ratio was then multiplied by the total number of LEDs to obtain the accurate LED index corresponding to the distance from Point A.

When this intersection point is detected, the corresponding LED along the physical stick is turned on. The position data is sent from Unity via MQTT to our MQTT broker, and then to the microcontroller embedded in the stick, which is subscribed to the same topic. The stick's microcontroller receives the correct LED number, and the corresponding LED, 1 to 144, is switched on. 

## MAKING THE PHYSICAL PROTOTYPE

The stick is a handheld, battery-powered device. To ensure portability and compactness, the wiring, microcontroller, and power supply are fully enclosed within the handle.

*Wiring*: Four AA batteries connected in series were powering the LED strip, while a LiPo battery powered the Feather Huzzah ESP8266. The LED strip and the microcontroller shared a common ground to ensure a consistent voltage and balanced current flow.
<p align="center">
<img width="315" height="212" alt="Screenshot 2026-01-12 at 19 38 21" src="https://github.com/user-attachments/assets/b938ee0a-8b39-4880-965a-6b24bfd7264b" />
</p>

### First Test
<p align="center">
<img width="446" height="198" alt="Screenshot 2026-01-11 at 22 52 56" src="https://github.com/user-attachments/assets/9a15560d-05ea-4f42-8150-9876d7f7ed07" /> </p>

Video: https://youtube.com/shorts/i3hj0K6lzEI?feature=share

We designed a phone holder and handle for the end of the stick, which contained the wiring, microcontroller, and batteries, with a removable slot for replacing the batteries. The design went through several iterations (see images below). The final handle was 3D printed and assembled using screws and bolts.
<p align="center">
<img width="818" height="318" alt="Screenshot 2026-01-12 at 19 38 42" src="https://github.com/user-attachments/assets/8737317e-f873-4b76-8aa9-2a1e6771faa3" />
</p>

## The Stick
<p align="center">
<img width="701" height="239" alt="Screenshot 2026-01-12 at 19 39 20" src="https://github.com/user-attachments/assets/23ff9ce6-294c-47f6-9ecc-0d1d80e3b00f" />
</p>

A natural wooden stick was sourced from a park, debarked, and manually chiselled to create a channel to accommodate the LED strip, allowing the LEDs to sit flush within the material. The use of a real wooden stick was intended to contrast the electronic and virtual nature of the device, introducing a tactile, physical material that aligns with the conceptual intent and embodied use of the object.

## PRESENTATION

<p align="center">
<img width="624" height="717" alt="Screenshot 2026-01-12 at 20 41 05" src="https://github.com/user-attachments/assets/5ce6a5f6-d3a4-4c8b-98fb-45e8cc10e839" />
</p>

<img width="367.2" height="435.2" alt="Screenshot 2026-01-12 at 20 33 28" src="https://github.com/user-attachments/assets/077eabd4-9e6d-44f0-8fab-26093b63d206" />
 <img width="367.2" height="440.8" alt="Screenshot 2026-01-12 at 20 02 58" src="https://github.com/user-attachments/assets/b9d17cb4-7afa-4496-ac87-a0e0ccb08329" />


VIDEO https://youtube.com/shorts/M5SS2qwoKxI?feature=share

VIDEO https://youtube.com/shorts/Vm3JqaeM9g4?feature=share

The seamless interaction between the AR model and the physical stick was established, with data analysed in Unity passed to the stick over MQTT without delay and with accuracy. The object gave a clear impression of an invisible line or barrier, and created an embodied experience of the data. The experience of using the device was playful and interactive, fostering curiosity to discover the 3D model in space. It was clear that a more refined iteration of this device could be very interesting for experiencing the virtual world.

### Technical Areas of Improvement

Technical areas of improvement included maintaining a persistent connection between the MQTT publisher and subscriber. In addition, some planes of the AR model were not consistently recognised as part of the Environment layer when calculating points of intersection with the stick. This may have been due to the way Unity updates AR data by referencing the previous frame and repositioning the AR model accordingly. As the physical stick was attached within the camera frame, this may have caused inconsistencies in frame rendering over time, resulting in slightly unreliable intersection detection in certain areas of the AR model.

## TO DEVELOP

This prototype could be further developed into a lightweight, standalone stick capable of displaying larger scaled architectural 3D models in space. The aim is to help users better understand the placement, scale, and relationships of architectural elements within the model and in relation to their surroundings. By bringing the device directly onto the site, the architect could use it to show clients how a future project sits within the existing environment, allowing the design to be experienced spatially rather than only through drawings or screens. Phantom Lines is driven by the intention to create more collaborative ways of communicating architectural projects, allowing design ideas to be understood through direct, spatial experience rather than abstract representations.
The lighting system could be further refined to convey additional layers of information. For example, light animations could respond when moving through different materials, with colour changes such as red when intersecting metal elements or blue when encountering concrete. This allows material and structural information to be shown directly in space, without relying on drawings or annotations.
Overall, the device explores data visualisation as a design tool rather than a purely representational one. While the device could be applied to other architectural or digitally modelled environments, the project focuses on using spatial experience as a tool for communication and design iteration.


## Sources

Modelling stick with AI (https://hyper3d.ai/rodin/tab/mine) and then edited in Fusion.

*Accessible toilet accessories*:

Handicap grab bars by TapvigoEDU: https://sketchfab.com/3d-models/handicap-grab-bars-for-bathroom-54bf9082dc61471abe91847e0a9688fa

Sink by apocalypse_67: https://free3d.com/3d-model/wall-mount-sink-35802.html?dd_referrer=

Toilet by printable_models: https://free3d.com/3d-model/toilet-v2--350915.html

Toilet Roll: https://sketchfab.com/3d-models/hospital-toilet-a74534f33fbc4e98a74899da7f06820b
