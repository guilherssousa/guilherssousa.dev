---
title: "Sharing creatures with QR Code"
description: "What about trading using your phone?"
pubDate: Jan 07 2023
---

I like to spend time reading about the data structures and patterns used on the Pokémon games save files. Those are incredible ways to understand how really poor implemented standards (compared to some mainstream ones) are done because the Nintendo game community is so passionate about their things and they really put effort to try to make the things go on.

Unfortunately, it's very impossible to get back some things like the original Mew Machines or even the SatellaView service, but I hope I can contribute to this OSS world, at least a little bit.

One day, by reading the docs for Pokémon species data structrue, I noticed they are just 64kB in the first games. Notice that 64kB of data is already half of the recommended to be sent via a network request, so it is interesting to short this a little bit using compressing techniques like gzip. But if we could fit an entire Pokémon entry data into a single QR code with some other stuff like a checksum to validate data integrity, I could easily develop a Pokémon sharing tool, like the ones I described in the very last post.
