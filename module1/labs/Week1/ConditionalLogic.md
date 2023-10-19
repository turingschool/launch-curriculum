---
layout: page
title:  Conditional Logic Lab
---

## Lab Time
Lab time is designed for you to prepare for upcoming lessons, and practice what you have learned so far.  Both aspects are important for your success.  During this time, you are encouraged to collaborate with fellow students, and reach out to instructors with any and all questions!

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Today's lab has very little 'prep' information; students should be ready to get right into Looping with this week's learning goals as preparation.  It would be great to take two opportunities to bring the whole group back together at least twice today to showcase what individuals and groups of students are working on. We should also HIGHLY encourage group work. This project _should_ require students to use: math, string concatenation (or interpolation), conditional logic, and string methods.
before the lab, create groups of 2-3 student groups. Post these groups in slack ask students to work together with these groups during the lab.
Plan for at least 2 whole group checkins - after giving some time to pseudo-code, and partway through the remaining worktime.</p>
</aside>

## Practice

In today's lab, you will put together what you have learned so far into a mini project - something you can (and should) show off to your family and friends!

Using what you have learned in lessons and labs so far, you are going to build an order-taking program that could be used at a restaurant.  Because we are early on in our program, this application will have some unrealistic paramenters, but will give you a good idea of the kinds of things you might start building even with just the fundamentals!

### Order Taker
In this restaurant, we only take orders in batches of 4.  So, 4 people can order at a time, or 1 person can pretend to be 4 people ordering 4 different meals 🙂.

You are going to write a program that will ask for an order from 4 users.  We will want to store their orders in a variable called 'combinedOrder'.  A user's order will only be added to the 'combinedOrder' if what they ask for is included in the restaurant's 'menu'.

After the combined order is made, we should print a summary of the order and include the total cost.  At our restaurant, we charge $2.12 per letter in the order.  So, an order of "tacos, popcorn, popcorn, ice cream" would cost $57.24 (we don't charge for spaces or commas).

When completed, your program output may look something like this (if it is not exactly the same words, that's no big deal - make it your own!).  Do take note that if someone orders something in a different case (upper or lower) than it appears in the menu, we should still accept that item; TACOS is the same as tacos and the same as TaCoS.

![](/assets/images/module1/Week1/Restaurant1.png)


If you have a user that orders something NOT on the menu, your program might look something like this:

![](/assets/images/module1/Week1/Restaurant2.png)

### Pre-code Prep
Before you start implementing this project, we are going to take about 15 minutes to brainstorm what this code may look like.  We can refer to this brainstorming as `Psuedocoding`.

In your notebook, write an outline of what the code for this program might be.  Here are a few questions to consider:
* What datatypes will I be using?
* What methods would help me do ________?
* Do I need user input, and at what point in the program?
* Do I need to give feedback to the user? Will that feedback be sent to the console?
* What steps need to be completed for the program to work properly?

We will come back together as a group to discuss what you have brainstormed - be ready to share out a few of your takeaways!

### Implementation

Now that we have done some ideating on what the implementation of this program will look like, it's time to put that into code! Don't try to build the whole thing out all at once. Keep referring to the example output screenshot, and just try to get each line working one at a time. Start small, and expand on your features slowly. 

You are going to fork [this starter repl](https://replit.com/@launch-team/M1W1-ConditionalLogicLab) and implement the simple Order Taker program for a restaurant.  Remember that cohort collaboration is encouraged!

**Keep an eye on slack!!** We will come together as a whole group every 30-45 minutes to work through some of the tougher parts of the project.  During these group sessions, we will ask for some of you to share out what you have been working on - a great opportunity to practice using technical language!

