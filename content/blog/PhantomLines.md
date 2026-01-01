---
title: "Phantom Lines"
date: "2025-12-01"
excerpt: "Sensing the unseen. The idea for this  physical-analogue data device prototype was creating a hand that can detect the virtual world"
coverImage: "content/img/phantomLineImage.jpeg"
---

### Ananya Kedlaya

## Sensing the Unseen
The idea for this  physical-analogue data device prototype was creating a hand that can detect the virtual world. Sensing the virtual world with a tentacle hand that’s capable of exploring the imagined, of past and future creations at scale with the real world. 

## The Data
The coordinates of the surface of a 3D model and more specifically the intersectional coordinates between this 3D model and the digital replica of our data device.

the virtual. 

Bridging the gap between designing a children’s playground for example on your computer and then manufacturing these parts to experience the first prototype at scale at this stage, the designer could use the “hand”, experience the playground, the height of the top slide, assess whether the parent can comfortably reach that height to hold them, and place other physical objects within the space to be able to compare without having to model the objects in the virtual world, make modifications, experience it again and then manufacture the components. This last object will be more refined, experienced with the body.

This device takes 3 dimensional drawings and places them in the real physical world so the virtual design sits in comparison to the objects around itself, as opposed to sitting in the window of the screen. This is  better than using a VR headset which is isolating, the experience is communal, the design can be discussed amongst a team and experienced together.

The Goal is to get the maker out of their seat and create buildings and objects that have been experienced throughout the making process.


## Tracking 

We needed to track the 3 dimensional movement of the stick in space to get its position. If the stick handle is point A, and the tip of the stick is point B, and the length of the stick is constant we needed to get the X, Y, Z coordinates of A and B relative to a point 0, to place it within our AR scene. The digital twin would display the 3D model and have a dashboard that would display extra information, with exact measurements and distances of user to objects and allow the user to determine exactly where they were within the 3D model. 

We wanted the stick to be slick, lightweight and independent of the AR device holding the digital twin. We wanted the stick to have its own sensors, gyroscope, accelerometer, and infrared sensor to determine the movement of the stick and point A and B to a determined point 0 which would be matchd to a point 0 in the virtual space in Unity

## Solution: Tracking

After extensive consideration and iterative assessment of what was feasible within the remaining three-week timeframe, we decided to use the integrated sensors of the phone running AR Foundation. The phone was incorporated as a physical component of the stick, effectively linking the physical object to its digital counterpart.

Because the phone is already tracked within the AR environment, it becomes point A on the stick, the point at which the stick is held. Its position, rotation, acceleration, and movement are continuously tracked relative to the detected planes within AR Foundation. Given that the length and geometry of the stick are known, the end of the stick can be treated as a direct extension of this tracked movement.

An accurate, to-scale 3D model of the stick is attached to the AR camera as a child object. This ensures that the virtual stick mirrors the movement of the camera, and therefore the phone, across the X, Y, and Z axes. Once the physical movement of the stick aligned precisely with its virtual representation, the next step was to introduce a virtual object into the Unity environment and calculate the point at which it intersected with the stick.

## Results

A handheld movable stick that draws boundries in air, representing the measurements of physical objects with respect to the environment they are placed in. This helped to have better clarity with accessibility building development and realtime analysis of dimentions and structure of assets in a building. 