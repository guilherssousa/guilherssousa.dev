---
title: "Explain like I'm 5: Isomorphism"
description: "Once and for all, I learned what is Isomorphism in programming."
pubDate: Feb 24 2023
---

Most of the times, I end up reading about isomorphic polyfills that replicate Web Standard APIs on multiple environments, most especially when **Fetch API** started to make into Node JS.

I already understood what polyfills are, but never understood what the **Isomorphic** on the name meant. So I wrote this post to myself and to anyone that had the same doubt, trying to explain like I'm 5.

The first resource I went to learn what Isomorphism is, was Wikipedia. And its definitions kind of got me on the right way, because Isomorphism is an algebra term:

> Isomorphism is a function between two structures that preserves the relationships between the parts. Source: [Wikipedia](https://simple.wikipedia.org/wiki/Isomorphism)

Even though this is related to Math, we can correlate to programming, because programming functions like `f(x) = x + 1` are algebric functions. You have an input, this input is processed and it returns an output.

So, by relating this to the already known Polyfill concept, we can deduce that Isomorphism in programming is when you have two functions that receive the same signature inputs and return the same contents, but not getting into the purpose of analyzing on how it does the things (like in Declarative programming).

So, we can resume Isomorphic programming as code that behaves the same in every runtime. Examples of other isomorphic things in front-end are, for example, the `react` package. That implement the core functionalities of how React should behave, its Hooks, and more, that behaves the same in every rendering environment is used, while `react-dom` or `react-native` leverages how the React core module should interact with platform-specific code.
