---
title: ⭐ Open Source Journal
description: A special post to record detailed infos and lessons about my open source experience.
---

## 📅 August 2023

### vercel/swr-site

#### On August 22, Pull Request #535 [Updata Brazilian Portuguese contents](https://github.com/vercel/swr-site/pull/535) was accepted and merged into the main branch.

As the title suggests, I translated new content to Portuguese on the website.
This is what I contribute on the most, since I'm a native Portuguese speaker.
Not first time, but the first one I decided to record here.

### shuding/nextra

#### A nice reply from Dimitri

I sent an email to [Dimitri Postolov](https://github.com/B2o5T) (The Guild)
asking some questions about the changeset commit chores on Nextra.
Since he's a core maintainer, I thought it was worth messaging him about it.
He kindly replied me answering all my questions and recommending resources about
the library used on nextra's versioning.
Altough sending an email to someone asking work stuff seems a little bit
weird for me (_gen Z thing_), he gave me a boost to learn something new and
continue contributing. Thanks Dimitri :)
#### On August 15, Pull Request #2171 [Ensure first depth 1 heading as title](https://github.com/shuding/nextra/pull/2171) was accepted and merged into the main branch.

This solves a problem that when users inserts multiple `h1` (`#`)
markups on their pages, the last one would be used to be displayed
as the page title, instead of the very first one.

Again, Dimitri helped me with the tests and changeset commits, I swear I'll
start looking on how changeset works 😭

#### On August 11, Pull Request #2151 [use github-slugger for custom heading ids to prevent duplicated headings](https://github.com/shuding/nextra/pull/2151) was accepted and merged into the main branch.

This one uses the already installed `github-slugger` to generate anchor links, which tracks the
list of inputs to generate unique ones for every single of them, avoiding anchor conflicts.

A good lesson from this one is that I made a different implementation at first, but one of the
main contributors suggested the correct implementation for it and also ran some of the routine
procediments to contribution for me. Thanks Dimitri!

#### On August 13, lokhmakov reported a memory leak on [Issue #2150](https://github.com/shuding/nextra/issues/2150).

Although I didn't solved the problem myself, I helped by gathering information about production
reproduction and also provided a way to reproduce in development environment
(the leak was first reported as prod. only)

Again, Dimitri solved the issue. He's a nice dev

## 📅 July 2023

### saulojoab/preview-your-icon

#### On July 27, Pull Request #2 [Fix Responsiveness Problem](https://github.com/saulojoab/preview-your-icon/pull/2) was accepted and merged into main.

I found this project on LinkedIn, created by [Saulo Joab](https://www.linkedin.com/in/saulojoab/),
it's a cool app that lets you preview your own app icon on a mocked up iPhone screen.

You can customize the icon, name and even the phone background image! I fixed a responsiveness
problem that was running on wide screen displays: When you would zoom in, all of the
phone container would break and the items would spare out of the grid.

### shuding/nextra

#### On July 16, VishDroid-dev issued an Out of Memory problem on [Issue #2077](https://github.com/shuding/nextra/issues/2077).

I'm genuinely proud of what I did on this issue: I sent a big message explaining why and
how the error happened, and how he could fix it without having to depend on maintainers.

The User project featured 2K+ characters long strings that were breaking Flexsearch's
indexing and searching, causing the website to stop working and triggering a death screen
shortly after. I kindly made him aware of the problem and proposed solutions to fix the
problem.

Dimitri even recognized the deep dive I did! That is awesome :)

## 📅 March 2023

### daltonmenezes/interprocess

#### On March 2, Pull Request #11 [fix: use normalize-path to ensure posix-like paths](https://github.com/daltonmenezes/interprocess/pull/11) was accepted and merged into main.

I noticed when working on the February issue on the same repo that the documentation
was not loading correctly. At first I thought it was some weird NPM conflict but
as soon as I started debugging, I found that it was because of a cross-platform conflict.
Look, at the time I was using Windows for full-time development. And paths on Windows works
different from other OS.

The solution was quite simple, I suggested adding a new package to the project,
`normalize-path`, that would fix all the path related problems.

Although some people think installing new packages on open source projects it's a bad
idea, I thought about how the path conflicts would be hard to maintain if a custom
solution was made only for this. So, based on its performance metrics and bundle size,
adding this package was a no-brainer solution. And it works! ✨


## 📅 February 2023

### inkdropapp/docs

#### On February 24, a small change was made because of [Issue #63](https://github.com/inkdropapp/docs/issues/63).

I gave a feedback about how the product's **Getting Started** was dense and hard
to eye-scan quickly. The changes were considered, but since they were planning
to migrate their documentation to a static generator like Docusaurus, they
preferred to focus on the content.

But its nice to notice that I also suggested to add a link to the documentation
on their landing page, which they did add! 👍

### daltonmenezes/interprocess

#### On February 16, Pull Request #10 [Separate background images to fix improve performance on larger displays](https://github.com/daltonmenezes/interprocess/pull/10) was accepted and merged into main.

This is a common contribution I make on websites I find on the internet. Sometimes
when they use custom SVGs as backgrounds, it causes some performance issues on large
screen displays. I have a 29" Ultrawide monitor so this problem happens a lot to me.
The solution was very simple, I just made a new JPG image based on the old SVG and
replaced it. To not let this note sound boring, I also made some documentation contributions
by fixing typos 😝.

### Lioness100/rspell

#### On February 16, Pull Request #14 [fix(config): use cspell-lib to handle findConfig function](https://github.com/Lioness100/rspell/pull/14) was accepted and merged into main.

Rspell is a CLI wrapper around Cspell, and it is really useful for finding typos
on projects (especially in english). The first PR opened was to avoid a bug happening
on behalf of PNPM package linking: Some of its indirect dependencies were not acessible,
so this PR adds the necessary stuff as direct dependencies to avoid inconsistencies
between package managers.

#### On February 18, Pull Request #15 [fix(config): create a config file on the first run](https://github.com/Lioness100/rspell/pull/15) was accepted and merged into main.

As the name suggests, when running Rspell for the first time, it would throw an error,
saying it was missing a `cspell.json` file from default config path. Well, maybe
the original developer didn't noticed this behavior because... Well, it just went along.
The PR is simply adding a new responsability to the config loading function, which is
creating the file if it doesn't exist yet.
