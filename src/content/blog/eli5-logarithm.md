---
title: "Explain like I'm 5: Logarithm"
description: "Once and for all, I learned what Logarithm is."
pubDate: Dec 27 2023
---

Merry Christmas! Heading to the end of the year, thanks to the
break we have, I decided to go all-in on a Data Structures and
Algorithms course, to finally get a solid understanding of it,
without breaks as I usually did in the past, because of work,
other studies and etc.

One of the major things you learn to analyze on DSA classes is
the **Big-O Notation**, which is like a abstract and input-driven
way to express the time and space costs of executing an algorithm.
One of the common Big-O complexities is **`O(log n)`** and **`O(n log n)`**,
which are logarithmic complexities.

I have a superficial understanding of what a Logarithm is, but
not enough to observe a piece of code and assert that the time
complexity of it is in the realm of logarithmic time or space.

So, by searching, I found a pretty easy and simple definition:

> The logarithm of b on base a is x if, and only if, a to the
> power of x is equals to b.
> log a b = x <=> a^x = b
> a -> base
> b -> logaritmand
> x -> logarithm

The essence of learning logarithm only for purposes of Big-O
analysis is, you don't need to calculate the value of it,
because it works based on the input, and we drop the constants
while defining it. Remember: Big-O always respects input growth only.
