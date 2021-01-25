---
title: Information and complexity
date: "2021-01-23"
description: "What is information? How is it related to complexity?"
---

Man, I would love to chime in this discussion but it’s so hard to tweet about
information theory. Maybe I can point that the two versions do not contain the
same information. The 10-file contains more, as it has to contain the info for
the file structure of the 10 files.

Now, from your discussions it looks like the goal is to reduce noise, that is
all data that do not provide us with any new information. If that’s the case,
then resorting back to a 1-file approach will get us there, assuming the one
file is already at a local minima of noise.

In this sense, we are talking about computational complexity, which refers to
the amount memory and computation required to solve a problem. In this case, the
goal is effectively to remove all the fluff, down to the last extra character in
the name of our variables. The ultimate goal is to get to a piece of code where
every character is required in order to solve the problem at hand. This is the
state of maximum information — and of entropy, in fact.

Notice though, how this code would be impossible for a human to understand! It
would, in fact, be very complex, in the sense of hard to understand. This is
because humans thrive in the in-between: systems where information is structured
with the help of some unnecessary extra data that allows us to identify
patterns. Think how abstractions helps us reason about systems at the cost of
introducing some computation overhead.
