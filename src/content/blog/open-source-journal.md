---
title: ⭐Open Source Journal
description: Um relatório das minhas contribuições Open Source no GitHub.
---

This is a special post that I'll use to record more detailed
infos about my open source contributions done on 2023.

## August 2023

### shuding/nextra

1. On August 15, Pull Request #2171 [Ensure first depth 1 heading as title](https://github.com/shuding/nextra/pull/2171)
was accepted and merged into the main branch.

This solves a problem that when users inserts multiple `h1` (`#`)
markups on their pages, the last one would be used to be displayed
as the page title, instead of the very first one.

  - Again, Dimitri helped me with the tests and changeset commits, I swear I'll
  start looking on how changeset works 😭

1. On August 11, Pull Request #2151 [use github-slugger for custom heading ids to prevent duplicated headings](https://github.com/shuding/nextra/pull/2151)
was accepted and merged into the main branch.

This one uses the already installed `github-slugger` to generate anchor
links, which tracks the list of inputs to generate unique ones for every
single of them, avoiding anchor conflicts.

  - A good lesson from this one is that I made a different implementation at first,
but one of the main contributors suggested the correct implementation for it and
also ran some of the routine procediments to contribution for me. Thanks Dimitri!

## July 2023

### saulojoab/preview-your-icon

1. On July 27, Pull Request #2 [Fix Responsiveness Problem](https://github.com/saulojoab/preview-your-icon/pull/2)
was accepted and merged into main.

I found this project on LinkedIn, created by [Saulo Joab](https://www.linkedin.com/in/saulojoab/),
it's a cool app that lets you preview your own app icon on a mocked up iPhone screen.
You can customize the icon, name and even the phone background image! I fixed a responsiveness
problem that was running on wide screen displays: When you would zoom in, all of the
phone container would break and the items would spare out of the grid.

## March 2023

### daltonmenezes/interprocess

1. On March 2, Pull Request #11 [fix: use normalize-path to ensure posix-like paths](https://github.com/daltonmenezes/interprocess/pull/11)
was accepted and merged into main.

I noticed when working on the February issue on the same repo that the documentation
was not loading correctly. At first I thought it was some weird NPM conflict but
as soon as I started debugging, I found that it was because of a cross-platform conflict.
Look, at the time I was using Windows for full-time development. And paths on Windows works
different from other OS.

The solution was quite simple, I suggested adding a new package to the project,
`normalize-path`, that would fix all the path related problems.
  - Although some people think installing new packages on open source projects it's a bad
  idea, I thought about how the path conflicts would be hard to maintain if a custom
  solution was made only for this. So, based on its performance metrics and bundle size,
  adding this package was a no-brainer solution. And it works! ✨
## February 2023

### daltonmenezes/interprocess

1. On February 16, Pull Request #10 [Separate background images to fix improve performance on larger displays](https://github.com/daltonmenezes/interprocess/pull/10)
was accepted and merged into main.

This is a common contribution I make on websites I find on the internet. Sometimes
when they use custom SVGs as backgrounds, it causes some performance issues on large
screen displays. I have a 29" Ultrawide monitor so this problem happens a lot to me.
The solution was very simple, I just made a new JPG image based on the old SVG and
replaced it. To not let this note sound boring, I also made some documentation contributions
by fixing typos 😝.
