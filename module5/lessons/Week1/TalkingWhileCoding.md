---
layout: page
title: Talking While Coding - Technical Interview Prep
---

## Learning Goals
* Understand the benefits of talking in a technical interview
* Develop a goal for exceptional talking during a technical interview
* Start practicing the skill of talking while code

A technical interview is an interview conducted by an engineer and involving technical content. This interview can take many forms including talking over a project, code review on a take-home challenge, or live coding a solution to a problem provided by the interviewer. For today, we are going to focus on this third type where the interviewer will ask you a problem and then expect you to work through coding a solution while they watch and provide advice.

Coding while someone's watching can be a scary thing, especially because you are expected to talk pretty much the whole time and narrate your process. Just like all the other topics we have covered, talking while coding is a skill we will work on and you will get better at it!

### What is the purpose of a live technical coding challenge interview?

<section class="call-to-action" markdown="1">
With your partner: Brainstorm what competencies the interviewer is evaluating in a live technical coding challenge.
</section>

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>
    Take notes of what students share in Slack so they can reference it later.
    We're specifically looking for problem-solving ability, ability to work through a challenge when they don't know what to do next, and communication/collaboration skills. In addition to technical proficiency. How would this person be to work with?</p>
</aside>


### What To Say

You've heard that you should be talking pretty much the entire time while working on a live technical coding challenge, and you may be wondering what sort of things you should say.

A Few Ideas:
* Repeat back the question to make sure you understand
* Asking clarifying questions
* Checking in to see if your interviewer thinks you are on the right track
* Sharing your high-level plan
* Talking through design decisions, even very small ones
* When you're stuck, explain what's tripping you up and what options you are considering

### Why is Talking While Coding Important?

<section class="call-to-action" markdown="1">
With your Partner: Look back at the competencies your interviewer is evaluating that we listed earlier. Brainstorm why talking while you solve the problem would help you get a higher score on those competencies.
</section>

### Four Quick Tips

### Tip 1. Focus on the Purpose

When folks first start trying to talk in a technical interview, they sometimes start by literally reading their code out loud or talking in a way that sounds like reading code. This is not adding very much value, the interviewer can see what you're typing! Instead, focus on the purpose of your code.

### Tip 2. Share Tradeoffs or Uncertainty

Any time that you are considering different options, it's great to share that with your interviewer! Are you uncertain about the approach you are taking because you see a potential issue, that's useful to share too!

### Tip 3. Think About Your Tone

Try to maintain an enthusiastic approach, even when feeling nervous. You can to to come across as competent and humble, so try to find the middle ground between overconfidence and excessive uncertainty.

### Tip 4. Take a Quiet Pause

Yes, sharing your thought process is important, but if taking a minute to think quietly would help you gather your thoughts that's great too. Just make sure to communicate that with your interviewer instead of just going silent.


### Let's Watch an Excellent Example

Individually, make you way to [this](https://www.youtube.com/watch?v=1qw5ITr3k9E) mock technical interview. Watch from 3:30 through 18:08 when she finishes the `Book` class.

While watching, take notes of specific things she says while coding that you think are excellent. When we come back together I'll call on folks to share.

### Your Turn!

You and your partner will each get a chance to be the interviewer and interviewee. 

Whoever is being interviewed will start by opening the appropriate dropdown below, forking the repl, and then sharing their screen so that their interviewer can see their work.

**Schedule:**
* 15 minutes, Partner 1 answers their question
* 5 minutes, Partner 2 gives feedback to Partner 1
* 15 minutes, Partner 2 answers their question
* 5 minutes, Partner 1 gives feedback to Partner 2

While the interviewer, here are three questions to guide your feedback
* Did the interviewee explain at least one tradeoff they were making or another option they considered?
* Did the interviewer share the purpose behind their code?
* Were the interviewer's explanations easy to follow?

<section class="answer" markdown="1">
### Partner 1's Question

**Part 1: Is already in [this](https://replit.com/@launch-team/Talking-While-Coding-1) Repl.**

**Part 2: If Partner 1 finishes Part 1 quickly, they can paste the following into their repl for Part 2.**

DESCRIPTION:
You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]

**They can also paste in the following test cases:**

```c#
List<string> inputList = new List<string> { "abc:123", "cde:456" };
List<string> swappedList = SwapStrings(inputList);

//Expected:
//abc:456
//cde:123
foreach (string str in swappedList)
{
    Console.WriteLine(str);
}
```
</section>

<section class="answer" markdown="1">
### Partner 2's Question

**Part 1: Is already in [this](https://replit.com/@Zoe-Farrell/Talking-While-Coding-2) Repl.**

**Part 2: If Partner 2 finishes Part 1 quickly, they can paste the following into their repl for Part 2.**

Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."

These dots at the end also add to the string length.

For example, trim("Creating kata is fun", 14) should return "Creating ka..."

If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.

e.g. trim("He", 1) should return "H...", because 1 <= 3

Requested maximum length will be greater than 0. Input string will not be empty.

**They can also paste in these test cases:**
```c#
// Test cases
Console.WriteLine(Trim("Creating kata is fun", 14)); // Should print "Creating ka..."
Console.WriteLine(Trim("Code Wars is pretty rad", 50)); // Should print "Code Wars is pretty rad"
Console.WriteLine(Trim("He", 1)); // Should print "H..."
```
</section>