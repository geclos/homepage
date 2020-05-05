---
title: "Do not make these mistakes in your first tech interviews"
date: "2020-05-04"
description: "I have conducted dozens of interviews with junior developers.
These are their most common mistakes and how to avoid them."
---

In the last 4 years I have interviewed dozens of candidates at all levels of
experience and, without a doubt, the cohort with the highest rejection rate are
candidates to entry level positions.

What pains me to see is that most candidates fall off the recruitment funnel for
the simplest of mistakes, which often have nothin to do with their profesional
skills and could easily be avoided. These aren't failures of skill, but of
communication.

In this post we will go over the developer recruitment process at Factorial -
which is a pretty good proxy for what a tech candidate would encounter applying
at any tech company, nowadays - and I will explain what is it that makes so many
entry-level candidates flop their interviews, and how you can avoid it.

## The process

The process is simple: two interviews, one more generic _let's-meet_ type of
interview, and another more technical often involving some kind of code review.
After the second rencontre, you either get rejected or get a job offer.

The first interview is mostly inoquous: an opportunity for us and the candidate
to assess whether we are a good match. The only piece of advice I can give you
at this point are to be honest, not be a jerk and ask as many questions as you
can. Ideally, you want to get out of this encounter convinced that either this
is your next dream job or an opportunity not worth pursuing. We will answer
almost any question you might have, and you should be wary of any company that
isn't willing to do the same.

Once introductions have been made, you will be asked to submit a take-home
exercise that will require from you to write a representative chunk of your own
code. If you are prolific enough, we might event accept some other program you
have already developed. The second interview basically consists of you going
through your own code with some devs from our tech team. You'll get asked
technical questions about your code and some more general aspects if the
conversation takes us down that path.

The purpose of this exercise is many-fold, from evaluating general technical
proficiency to assessing reasoning capabilities but, mostly, the purpose of this
exercise is to evaluate how well would you do the job we want you to do. Of
course, most of these aspects are correlated, but if you fail at the latter you
won't get hired.

This is, unsurpringly, where most candidates flop.

## All candidates look alike

Truth is, for entry level positions, there's little variance in the candidates'
technical knowledge.

We get candidates with brilliant exercises that cannot defend it accordingly
during the interview, candidates with piss poor code that fair rather well
during questioning, candidates obsessed with computer science theory, others
more of the learn-as-you-go type, variant degrees of experience, creativity,
resourcefulness...  At the end, all these aspects average out, painting the
picture of the default entry-level applicant who is capable of writing a fairly
decent program involving frontend and backend code, sometimes with some extra
sprinkles of infrastructure code on top.

Put another way, if you, as a junior candidate, have passed the pre-screening
stage - that is, you made it to the first interview - you can safely assume you
have the technical skillset to get hired. This won't always be the case but,
generally, the rule holds true.

Now, if all candidates look alike, what is it that distinguishes them apart? What
makes recruiters pick one over the many others?

It's communication. More specifically, *knowledge communication*.

> The success of a tech candidate is a function of their knowledge and how well
they can communicate said knowledge.

Given that we have stablished most junior candidates have similar technical
knowledge and that, unsurprisingly, most developers suck at communicating, you
can see how this ends up with a high rejection rate of entry-level applicants.

Now, let's explore further this notion of knowledge communication, and see how you can
exploit it to improve your odds at your next tech interview.

## Know your code

Mind you, when I speak about communication I'm not implying you can talk your
way through the recruitment process and end up at a cushy dev job with no
technical skills to show for. At the tech interview, the beans will get spilled
and your knowledge boundaries will be put to bare. You have to do the work and
learn your computer sciency stuff first. But, of course, you made it through
pre-screening so you do have the skillset required.

Problem is, we developers - specially new ones - often learn through repetition. We
discover a new framework, follow the documentation examples and, with
today's tools, we quickly get a pretty decent app up and running. We even get
_fancy_ stuff out of the box: JSON Web Token authentication, cross-site
scripting protection, XMPP... and suddently you get candidates submitting code
that looks like this:

```ruby
class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }
end
```

This is the candidate's code, if I `git blame` it his name will show up, and yet
most entry-level candidates have but a vague idea of what this does. The result
is most candidates comunicating their lack of knowledge about their own code.

*If you submit it, know it*.

To avoid this issue of poorly understood code I recommend that, before sending
your take-home exercise, you go over every line of your code and ask yourself:
What is this line doing? Why is it doing? And how is it doing it?

This kind of practice will set you down a path of reinforced learning:
Discovering how XSS protection works will take you through HTTP headers,
the different types of HTTP verbs and codes, maybe you'll understand why your
framework accepts PATCH and PUT requests, how it uses cookies to manage your
users' sessions, and what this pesky CORS error is all about. You get the idea.

At this point, you will arrive at the interview with knowledge not only on how
to build a program with a particular framework, but on how the underlying
infrastructure of the internet works to support the many features your framework
provides (and your app makes use of). You will be able to communicate your
knowledge about your code and even respond to some extra curve balls the
interviewer might throw at you. Your skills will be immediately more
transferable as all frameworks rely on the same underlying infrastructure.
You'll be a better engineer.

Now, it's often the case you won't be able to know everything, since the purpose
of the tech interview is precisely to test the limits of your knowledge. Let's
see what you can do about that.

_Addendum: Other examples of poorly understood code I often encounter are
JWTs, OAuth, Polymorphism, db indexes, HTTP verbs and more._

## Know your unknowns
If you follow the aforementioned prescription, you'll quickly reach the second
layer of understanding: things you know you don't understand very well.

For example, you might feel brave and make use of the new `useEffect` hook from
React:

```javascript
const CatCounter = ({ cat }) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setCounter(counter + 1)
  }, [])

  return `I have counted ${counter} cats so far!`
}
```

Now, `useEffect` is hard - otherwise its creator wouldn't have written a
[gazillion-line blogpost](https://overreacted.io/a-complete-guide-to-useeffect/)
about it - and you probably don't understand very well why you have to put that
empty array as a second argument. You know, though, that if you don't the
counter does not seem to refresh with every new cat you pass it as an argument.

Do not hide your knowledge gaps in code, otherwise you'll open yourself to
getting a question you won't be able to answer. Instead, simply say it:

```javascript
const CatCounter = ({ cat }) => {
  const [counter, setCounter] = useState(0)

  // NOTE: I am not sure why I need this second argument but otherwise the
  // component does not seem to update on prop updates. Need to investigate.
  useEffect(() => {
    setCounter(counter + 1)
  }, [])

  return `I have counted ${counter} cats so far!`
}

```

Communicating lack of knowledge is also knowledge communication.

You are declaring your knowledge gap, implying you know this is a problem, and
announcing your intention to learn more, which is a highly saught-after attitute
in computer science. Of course, if your code contains many of these comments it
probably means you have to study more before applying, but nevertheless I've
seen candidates get hired after answering a fair amount of questions with `I am
not sure about this, I know it's not ideal, but couldn't figure out any other
way.`
