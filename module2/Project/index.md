---
layout: page
title: Mod2 Project
---

# Message Logger

## Learning Goals
- Demonstrate:
    * Version Control, including branches and pull requests.
    * Understanding of database table relationships.
    * Database CRUD with an ORM.

- Explore:
    * Dive into a new (not written by you) code base!
    * Using TDD to add additional features! (For new features that you create, try writing the tests first, and then creating the code that makes those tests pass!) Always be on the lookout for ways you can thoroughally test your code.

## Project Description
the aim of this project is to build on the Message Logger we created in Mod1.  Now, a user should be able exit the application, and return later to review past messages.  This will require us to add a database to our Message Logger projects.

Another aim for this project is for you to practice building off of code written by someone else, since that will almost certainly be the type of work you'll do in your first developer job. Because of this goal, you should build off of the starter code for at least the first two iterations, and only make minor refactors. If after Iteration 2, you want to make some larger refactors and bring in code from your Mod 1 project, go for it!

This project will give you the opportunity to showcase all of the concepts we have learned this Mod.  There might be skills that we covered all the way back in week 1, so don't forget to go back and review those earlier lessons and labs!

**Project Setup**
To get started on this project:

1. **fork and clone** this [starter repo](https://github.com/turingschool-examples/LaunchMod2Project)
    * The starter repo has code that will be similar to your Mod1 Project.
2. Run all tests to make sure the project is working (all tests should be passing).

When you have completed the Project Setup, send a link to your cloned repository to all your instructors.

### Iteration 1 - Creating and Connecting a Database
In order to save messages and users so that they persist when a user exits and restarts the program, we will need to create a database for our Message Logger application.

You should create a branch for your work on this iteration.

* Review the classes that exist in the starter program - determine how these classes will be reflected in the tables of a database.  Be sure to think about what relationships may exist.
* Use the Npgsql.EntityFrameworkCore.PostgreSQL Nuget package to create a database context in your application.
* Update your Message and User classes to be used as a basis for your database tables.

When you are finished with iteration 1, create a pull request and schedule time with a cohort-mate for some code review.  During the code review, make comments on the pull request indicating changes that you will make based on your review!

### Iteration 2 - User and Message CRUD

Now that the database is created, we need to start saving our users and messages!  You will need to review the `program.cs` file and identify where changes need to be made in order to maintain the user experience **and** save users and messages into the database.

You should create a branch for your work on this iteration.

* Annotate your `program.cs` file with notes on how you will update the code to save records into the database.  Commit these annotations and push up your branch.  DM your instructors a link to your GitHub repo - we will reach out with feedback on your plans!
* Update the program so that users and messages are saved to the database.

When you are finished with iteration 2, create a pull request and schedule time with a cohort-mate for some code review. During the code review, make comments on the pull request indicating changes that you will make based on your review!

### Bonus Iteration!

As with all applications you'll jump into working on, there are ways that the user experience could be improved! For example, now that we are saving data to a database it's weird to always create a new user upon starting up the application. What if the user is an existing user that wants to log in and add messages to an existing account? Once you finish iteration 2, keep an eye out for ways you could improve the user experience and make a branch and PR for each of these fixes.

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br> Another thing that could be improved with the current user experience is that the user needs to type "log out" before typing "quit". If they try to type "quit" while adding messages, the message "quit" will get logged.</p>
</aside>

### Iteration 3 - Using LINQ to query the database

Since we are now saving more than one session's worth of messages, we should be able to write some fun LINQ methods to analyze our data.

In addition to the existing statistics about how many messages each user has written, update the program to output the following data at the end of each session:

* users ordered by number of messages created (most to least)
* most commonly used word for messages (by user and overall)
* the hour with the most messages
* Brainstorm your own interesting statistic(s)!

When you are finished with iteration 3, create a pull request and schedule time with a cohort-mate for some code review. During the code review, make comments on the pull request indicating changes that you will make based on your review!

## Version Control Expectations
In order to demonstrate what you have learned about version control, you will be using commits, branches and pull requests during this project.

You must gather feedback from cohort-mates prior to merging any code into your `main` branch.

You must provide feedback on at least one other student's pull request!

## Project Presentation

You will present your project to other members of the cohort.  Keep presentations to 10 minutes. Since we are all working on the same application, we would like you to address the following questions/topics in your presentation:
1. What was your process for building migrations?
1. What changes did you make based on peer or instructor feedback?
1. How did you ensure that messages and users were getting saved into the database appropriately?
1. What was it like working on pre-existing code?
1. Is there anything that you would do differently given a fresh start?


### Getting Help
During project week, there are multiple ways to reach out for help. The first way is by sending a Slack message to all of your instructors. The second way is to use a Token during Token Time.

Each student has 4 tokens for the week and each token gives you up to 15 minutes with an instructor. You want to have a specific goal in mind when getting in line during Token Time and you want to have spent time working on that goal individually before meeting with us.

Some examples of great uses for a token:

* Assistance with a bug you’ve been stuck on
* Advice on refactoring a particular section of code
* Help writing pseudo code for a section you’re not sure how to get started on
* Showing off a part of the project that you’re proud of completing.

You will also have a daily stand-up with your group and one quick instructor check-ins.
