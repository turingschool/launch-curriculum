# Lab
Lab time is designed for you to prepare for upcoming lessons, and practice what you have learned so far.  Both aspects are important for your success.  During this time, you are encouraged to collaborate with fellow students, and reach out to instructors with any and all questions!

** Instructor Note ** Today's lab is going to build on our [restaurant ordering application](/Mod1/Labs/Week1/ConditionalLogic.md) from last week.  We want to break students into groups of 2 or 3 and have two breakout sessions:
    1. Have students review their implementations from last week and ideate on how they could use what they learned today to improve on their projects.
    2. Students will be asked to think about the implications of their current implementation.
    3. In their groups, ask students to re-build their implementations using both 'for' and 'while' loops.

## Lab Objectives
* Practice using `for` and `while` loops.
* Introduce **refactoring** by updating a previously completed application.

## Practice

Now that we have learned about loops, let's revisit our restaurant ordering application from [last week's lab](Mod1/Labs/Week1/ConditionalLogic.md).  Open your forked copy of the starter repo - we are going to use that as a basis for today's lab.  

### Review Prior Implementation

In small groups, discuss your solutions to the restaurant ordering application and brainstorm a few ways we could improve our code.  You can use the following sentence starters to get going:
    * Our current solution repeats this block of code...
    * Based on what we learned today, we could use ______ to reduce the repetition in our solution.

Record key points from your discussion and designate one person from your group to share out.


### Implications of Prior Decisions

In your group, discuss the following scenario:  Our restaurant now needs to be able to take orders for groups of two.  In its current form (without loops), how would we accommodate the need to take orders for groups of two?

A few discussion starters:
    * To stop asking for third and fourth orders, we might....
    * We could _________ to determine group size before asking for an order.

Record key points from your discussion and designate one person from your group to share out.


### Re-Implementation (Refactoring)

Using what we have now learned about loops, re-work your implementation to use `for` loops and `while` loops.  In your group, you could each create two implementations, or you could assign a type of loop to individuals.  Either way, you should be prepared to discuss either implementation.

** Instructor Note **  During this session, be monitoring groups for sticking points.  When ready to come back together, if there are students who are ready to share out their implementation, that would be ideal; if necessary, you can lead a discussion on how you would refactor the implementation into for/while loops.


<!-- I really love this idea of refactoring/revisiting previous mini-projects to get in the habit of looking back at old code and improving/iterating on top of it. I think one potential weakness of our flagship programs is that we don't do this enough, and in the rare times we do ask students to do it, they are more resistant because I imagine a) it doesn't feel as "fun" as making something new and b) its likely more challenging to refactor old code than to start from scratch. I'm really intrigued to see if we can make this more a part of the Launch DNA - I imagine this will reduce the pressure on instructors to come up with a new/flashy mini-project/lab "topic" and we can dig deeper into working with legacy-ish code! -->

<!-- Related to the above, I think it will be interesting to figure out how we balance having groups refactor their OWN code vs. we give them some code they didn't actually write and have them refactor/build on top of that. I think there is a lot of value in having students go back to their own code to a)see their own growth as developers and b)get a rude awakeneing on the importance of developer empathy hahaha. One pitfall I see coming up at some point might be if we have different groups with several different implementations that make it tricker to complete the collaborative aspect of a lab? I think it's just something to keep an eye on in the first few labs and we can see how it goes when we actually do it live! -->