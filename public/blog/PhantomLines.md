---
title: "Phantom Lines"
date: "2025-12-01"
excerpt: "Sensing the unseen. The idea for this  physical-analogue data device prototype was creating a hand that can detect the virtual world"
coverImage: "content/img/phantomLineImage.jpeg"
---

### Ananya Kedlaya
 

“Phantom lines are dashed lines used in technical drawing to represent features that are not directly visible in the current view”. 
 
<p align="center">
<img width="535" height="720" alt="Screenshot 2026-01-12 at 19 52 15" src="https://github.com/user-attachments/assets/09fb845d-315d-4b8f-a29b-dd4b7ff75e7a" />
</p>

 
## What does it mean to experience virtual boundaries?  
 
Interpreting the unseen, by utilising data in a way to create an association between adjoining spaces in the Virtuality Continuum spectrum is a fascinating topic that has been explored in this project. 
 
The lines between what’s real and what's virtual is just a screen away, just as how data is the building block of a virtual environment, measurements and units hold the same reference in the real world. But to have a tangible experience that reflects the interactions in the virtual space as a physical embodied experiment is the exact opposite of the conventional form of interaction we are accustomed with.  
 
 

## Sensing the unseen. 
 
The idea for creating a physical-analogue data device that would aid in visualising the 3D models in a physical environment, to create collaborative experience for designers by instilling the sense of presence of the elements the model contains, was creating a physical stick that can detect the virtual world. Sensing the virtual world that’s capable of exploring the imagined, of past and future creations at scale with the real world.  
 

 

## The Product 
 
This device takes 3-dimensional drawings and places them in the real physical world, so the virtual design sits in comparison to the objects around itself, as opposed to sitting in the window of the screen, creating communal experience, and attaching free movement as part of the exploration process creates an immersive experience between the virtual and real world.  
 

## The Data 

The data is the 3D model itself, the distances within each plane, objects within the scene, and the scaled visualisation used to represent the interaction. This is used to derive points of intersection between the various planes of the model and the “physical stick” itself. 
 

## The Device

An actual wooden stick with embedded LEDs that is controllable. The setup connected to battery, microcontrollers and lots of wires holding up the control and execution of the stick to deliver tracked movements. The device displays the data as a form of lit up LED on the strip, corresponding to point on the stick intersecting with the model as user would swing through the air to detect the virtual boundaries of their model. 

 

## The Digital Counterpart 

An AR app, built on Unity, holding up the 3D model as the main element. The app became a part of the experience, displaying the interaction and movement of the stick in the AR space. Assisting users in navigating to the various planes and parts of the placed AR model. The phone was used for its integrated sensor for determining position and orientation as our “sensor”. The phone, by itself was the tracking device, and incorporated as a physical component of the stick, effectively linking the physical object to its digital counterpart. 

 
## Implementation 

<p align="center">
<img width="446" height="198" alt="Screenshot 2026-01-11 at 22 52 56" src="https://github.com/user-attachments/assets/9a15560d-05ea-4f42-8150-9876d7f7ed07" /> </p>


The stick is represented as a line segment with start and end points. The start point (Point A) was the position where the phone was attached to gather location and orientation, and the place where the user would be able to hold the stick. The endpoint (Point B) was the other end of the stick that would move in space in all directions. This established a constant length with defined number of LED spread across the stick equally. 

 

An accurate, to-scale 3D model of the stick is attached to the AR camera as a child object. This ensures that the virtual stick mirrors the movement of the camera, and therefore the phone, across the X, Y, and Z axes. Once the physical movement of the stick aligned precisely with its virtual representation, the next step was to calculate the point at which the 3D model within Unity intersected with the stick. 

Some Unity settings, and diving deeper into exploring the technical possibilities in Unity, and writing a few scripts, gave a clean path to determine the points of intersection. This was scaled to the length of the stick to determine the LED segment that would fall in place.  

 

 

## The Output? 

An index number for the LED, sent over MQTT from Unity and used to communicate with the physical device. 

Below is a video demonstration of the working product. Instilling a fluid movement of the lights on the stick as it intersects with the various planes of the 3D model in AR space.

<div align="center">
<iframe width="413" height="735" src="https://www.youtube.com/embed/_hp117yY0mA" title="Phantom Lines" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
 

## Adios, Amigos! 

Exploring the technical feasibilities of existing software and technology to produce a radically transformational creative outcome, defies norms of usage, but produces curious works. Unity was not developed with the intention of tracking elements within itself, without external cameras or resources, and neither were AR models developed as a result to experience the placement of its planes in the physical ground/area where the dimensions of the model wasn't restricted to the screen on the phone, but to be visually seen through a tangible and embodied light experience. Creating a storyline to mundane processes.  

 

 

 

 

 