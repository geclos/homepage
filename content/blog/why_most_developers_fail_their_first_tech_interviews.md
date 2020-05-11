---
title: "Why most developers fail their first tech interviews"
date: "2020-05-11"
description: "I've come to realize most entry-level candidates to development
roles make the same set of mistakes. Let's review them through and see how you
can avoid them."
---

In the last 4 years interviewing candidates for development roles, I've come to
realize the cohort with the highest rejection rate is applicants to entry-level
positions.

What pains me to see is that most of them fall off the recruitment funnel for
the simplest of mistakes, which often have nothing to do with their professional
skills and could easily be avoided. These aren't failures of skill, but of
communication.

In this post, we will go over the developer recruitment process at
[Factorial](https://factorialhr.com), mostly as an excuse for me to explain what
is it that makes so many entry-level candidates flop their interviews, and how
you can avoid it.

## The process

The recruitment process is simple: two interviews, one more generic _let's-meet_
type of interview, and another more technical. After the second meeting, you
either get rejected or get a job offer.

The first meeting is mostly innocuous: an opportunity for us and the candidate
to assess whether we are a good match. The only piece of advice I can give you
at this point is to be honest, not be a jerk and ask as many questions as you
can. Ideally, you want to leave this encounter convinced whether you want this
job or not. We will answer almost any question you might have, and you should be
wary of any company that isn't willing to do the same.

Once introductions have been made, we will ask you to submit a program you might
have already developed. If you don't have code to show for, we will give you a
take-home exercise instead. The second interview basically consists of you going
through your own code with some devs from our tech team. You'll get asked
technical questions about your submission and some more general aspects, if the
conversation takes us down that path.

The purpose of this exercise is many-fold, from evaluating general technical
abilities to assessing reasoning capabilities but, mostly, the purpose of this
exercise is to evaluate how well would you do the job we want you to do.  Most
of these aspects are correlated, but if you fail at the latter you won't get
hired.

This is, unsurprisingly, where most candidates flop. Let's see why.

## All candidates look alike

Truth is, for entry-level positions, there's little variance in the candidates'
technical skills.

We get candidates with brilliant exercises that cannot defend it accordingly
during the interview, candidates with lesser code that fair rather well during
questioning, candidates obsessed with CS theory, others more of the
learn-as-you-go type, variant degrees of experience, creativity,
resourcefulness... In the end, all these aspects average out, painting the
portrait of the default entry-level applicant who is capable of writing a fairly
decent program involving frontend and backend code, sometimes with some extra
sprinkles of infrastructure code on top.

Put another way, statistics say that if you made it to the tech interview portion
of the recruitment process you probably have the technical skillset required to get
hired. This won't always be the case but, generally, the rule holds true.

Now, if all candidates look alike, what is it that distinguishes them apart? What
makes recruiters pick one over the many others?

I'm convinced it's communication. More specifically, **knowledge communication**.

> The success of a tech candidate is a function of their knowledge and how well
they can communicate said knowledge.

Given that we have established most junior candidates have similar technical
knowledge and that, unsurprisingly, most developers suck at communicating, you
can see how this ends up with a high rejection rate of entry-level applicants.

Let's explore further this notion of knowledge communication, and see how you can
exploit it to improve your odds at your next tech interview.

## Know your code

Mind you, when I speak about communication I'm not implying you can talk your
way through the recruitment process and end up at a cushy dev job with no
technical skills to show for. At the tech interview, the beans will get spilled
and your knowledge boundaries will be put to bare. Knowledge communication
requires, well, knowledge; You have to do the work and learn your computer
_sciency_ stuff first.

Problem is, often developers spread their knowledge surface large and thin,
sometimes too thin. They learn from repetition, which leads to a lack of
understanding, which results in poor knowledge communication.

Let's say you, as a candidate, learn about the new fancy framework _du jour_,
follow its documentation examples and, with today's tools, you quickly get a
pretty decent app up and running. You already look like 99.9% of the other
candidates. You even got _professional_ stuff out of the box: JSON Web Token
authentication, cross-site scripting protection, WebSocket support, and whatnot.
You start feeling confident and end up submitting an exercise that contains code
that looks like this:

```ruby
class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }
end
```

This is the candidate's code. If I `git blame` it, their name will show up. And,
yet, most entry-level candidates have but a vague idea what this code does.
The result is candidates communicating their lack of knowledge about their own
code. They cannot answer _what_ their software does and, what's worse, _why_ it
does it.

You have to know your code.

To tackle this issue, I recommend candidates take a much more deliberate
approach and think in terms of knowledge communication. If you are an applicant,
run over every line of your exercise before you submit it and ask yourself: "Can
I explain this line of code?". This will immediately beg questions about the
_what_, _why_, and _how_ of every piece of your program you didn't really grasp,
deepening your knowledge.

What's more important, this approach will set you down a path of reinforced
learning: Discovering how XSS protection works will take you through HTTP
headers, the different types of HTTP verbs and codes, maybe you'll understand
how your framework uses JWTs to manage your users' sessions and what this pesky
CORS error is all about.

At this point, you will arrive at the tech interview with knowledge not only on
how to build a program with a particular framework, but on how the underlying
infrastructure of the internet works to support the many features your framework
provides and your app makes use of. You will be able to communicate your
knowledge about your code and even respond to some extra curveballs the
interviewer might throw at you. Your skills will be immediately more
transferable, as all frameworks rely on the same underlying infrastructure.
You'll be a better engineer.

Sadly, you won't be able to answer everything, since the purpose of the tech
interview is precisely to test the limits of your knowledge, so let's see what
you can do about that.

_Addendum: Other examples of poorly understood code I often encounter are JWTs,
OAuth, Polymorphism, db indexes & foreign keys, HTTP basics, React component
lifecycle methods, JS Promises, async/await & generators. You don't need to know
all of these but, if it's in your code, you should._

## Know your unknowns

If you follow the aforementioned prescription, you'll quickly reach the second
layer of your [circle of
competence](https://fs.blog/2013/12/circle-of-competence/): things you know you
don't understand very well.

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

Now, `useEffect` is hard — otherwise, its creator wouldn't have written a
[gazillion-line blog post](https://overreacted.io/a-complete-guide-to-useeffect/)
about it — and you probably don't understand very well why you have to put that
empty array as a second argument. You know, though, that if you don't the
counter does not seem to refresh with every new cat you pass it as an argument.
You have a thin knowledge of this piece of your code, and this is a problem.

As a rule, do not try to hide your knowledge gaps in code. You'll open
yourself to getting a question you will be playing guessing games against.
Instead, simply admit it:

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

Communicating a lack of knowledge is also knowledge communication.

You are admitting your knowledge gap, implying you know this is a problem but
had to move on with it, and announcing your intention to fix it. It shows
self-awareness, curiosity and the drive to improve; the kind of potential we
look for in candidates at this level. It’s not a simple “I don’t know”, which
would be lazy, it’s a reasonable utilitarian argument that tacitly admits
failure of understanding.

At this point, the interviewer can do little more than ask if you had time to
follow on your investigation which, given the circumstances, is an excellent
outcome.

_Addendum #2: Of course, if your exercise contains many comments like these you
should reconsider whether you are ready to apply for the job. Nevertheless, do
not be afraid to admit gray areas in your understanding._

## Wrapping up

Most entry-level candidates are very similar, and it’s highly unlikely you’ll be
the exception. Instead, focus on deep knowledge vs thin understanding, specially
about those concepts you know you might get questioned about. If you can, don’t
answer only with “I don’t know” but don’t play guessing games either, state your
knowledge gaps, what you think you know about them, and how you plan to improve
on these gray areas.

There are many more aspects we could explore in preparation for your first tech
interviews, but these are the foundational aspects all candidates should be aware
of. The rest, we'll explain in upcoming entries.

Cheers, and good luck in your next interview.
