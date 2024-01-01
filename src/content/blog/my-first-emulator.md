---
title: "Writing my first emulator"
description: "Learning Emulation foundationals by building one!"
pubDate: 09-11-2023
---

This weekend, I dedicated myself to a different project: Writing an emulator. This is a subject that I've been interested in and wanted to do for a long time, but I never really stopped to get my hands dirty doing it.

After several hours of reading about CPU architecture, register functioning and a brief history of the evolution of processors, I made the decision, **I would write my first emulator**.

The target was **Chip-8**. If you're familiar with it, you might be thinking, _"But the Chip-8 isn't a console!"_, and you're right. **Chip-8 is an interpreted language**, more similar to a virtual machine than hardware itself. It ran on top of the systems of the time, which guaranteed abstraction of development between projects.

This little project is considered the **"Hello World"** in the emulation community. It's a canonical event equivalent to writing a Pokédex if you're a Frontend developer.

As it is a very famous and very "simple" project, there is a lot of technical content about how the Chip-8 works, its registers, instruction set, inputs, and everything else. They've already turned over everything that could be turned over. And the community thanks you!

It was really fun to implement the instruction set, as it was a simpler processor, there wasn't much complexity when doing it, most of the work was finding the registers passed in the Opcode to execute the instructions, which turns into a very mechanical repetition after a time.

The biggest difficulty I had in the process was implementing a single instruction: `Dxyn - DRw Vx, Vy, nibble`. This instruction is used to draw content on screen, using some very weird logic that is not worth mentioning in this post.

But I managed to do it! In addition to learning to emulate, I was also able to exercise my knowledge in Golang, a little tooling with shell scripting (since I needed to compile for Windows, while developing in WSL)

At the time I write this post, I have already started to venture into another emulation project: **The original Space Invaders arcade, with an Intel 8080**. I hope I can write another post describing the success soon! \O/
