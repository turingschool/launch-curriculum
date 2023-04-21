---
layout: page
title:  Message Logger
---

## Learning Goals
- Demonstrate:
    - OOP through the development of a Console Application
    - Unit testing of all methods
    - Iterative Flow Control to manage user interaction
- Explore:
    - Adding additional features

## Project Description

The aim of this project is to develop a Console Application that will allow a user to log their thoughts as 'Messages' throughout the day.  These thoughts could be musings, simple poems, grocery lists... whatever they want!

While this idea is simple, it is actually the basis for many applications that you may be familiar with.  Apps like Twitter, Instagram, and Reddit are all based on the idea that a user wants to have a record of their thoughts and ideas.  When applications and programs are being developed, the design and creation process often begins with something basic - the Minimum Viable Product (MVP).  The MVP of any application is the smallest usable starting point that will be added to over time, until the final prouct is complete.  Similarly, this project will start small, then build upon previously written code.

This project will give you the opportunity to showcase all of the concepts we have learned this Mod.  There might be skills that we covered all the way back in week 1, so don't forget to go back and review those earlier lessons and labs!

We are going to work through this project in small chunks, called **iterations**.  Completing each iteration will get you closer to building an application that will allow a user to: 

* Log a Message
* Create a user profile
* List all Messages that have been logged.
* Query for Messages

**Project Setup**
To get started on this project:

1. **fork and clone** this [starter repo](https://github.com/turingschool-examples/MessageLogger)
    * The starter repo has the project and test project set up already
2. Make sure that the Test Project references the Project

When you have completed the Project Setup, send a link to your cloned repository to all your instructors.


### Iteration 1 - Message

For this application, one of the most important parts is the messages themselves.  So, before we get to creating users, we are going to build some functionality around message logging.  

When completed, a user should be able to complete an interaction like this (feel free to add your own flair!):

![Possible Completed version of Iteration1](/assets/images/module1/Project/1MessageLogger.png)

To complete this interaction, your project will need a class `Message` that has two properties:
- string Content - the text of a message.
- DateTime CreatedAt - the time that the message was created.

Remember to test all Properties and Methods as you create them!


### Iteration 2 - User

Logging messages as a single user is great, but wouldn't it be nice to have multiple users logging messages? For this iteration, we will update our application so that multiple users (on the same computer) can log messages.  When completed, users should be able to complete an interaction like this:

![Possible Completed version of Iteration2](/assets/images/module1/Project/2MessageLogger.png)

<!-- To complete this interaction, your project will need to have another class `User` that has three properties:
- string Name
- string UserName
- List<Message> Messages

A `User` will also need a method that will add a message to their `Messages`. -->

To complete this interaction, you will need to add an additional class to your project.  Brainstorm what this additional class should be, before writing additional code.  You may also need to update your `Message` class to implement this part of the project!

Remember to test all Properties and Methods as you create them!

### Iteration 3 - Querying Messages

Now that we have multiple users creating messages, it would be nice to have a mechanism for doing some searches on all the messages.  For this iteration, we can step away from the user interaction and rely on our tests to make sure this query functionality is working.

As a starting point, create a `MessageManager` class that has:
* Properties:
    - List<User> Users
* Methods:
    - List<Message> AllMessages() - a list of all users' messages
    - List<Message> RecentMessages(int num) - a list of the `num` most recent messages.  If `num` is greater than the total number of messages, return all messages.

Come up with another method for this class that you think would be interesting!  It can return any datatype, as long as it represents something about the messages or users of the application.

Remember to test all Properties and Methods as you create them!

## Project Presentation

You will present your project to other members of the cohort.  Keep presentations to 10 minutes. Since we are all working on the same application, we would like you to address the following questions/topics in your presentation:

1. What additional classes (other than Message) did you create?  How did you determine what that class should be and do?
1. Imagine an interviewer is asking you about this project, how will you describe the goals, challenges, and outcomes?
1. How did the process of working on a larger coding project go? What will your process be different for your next project?
1. This project is a VERY basic version of many popular applications.  Apps like Twitter, Instagram, and  Reddit are all based on a similar concept.  How do these types of apps create or erode inclusivity on the web?

## Getting Help

During project week, there are multiple ways to reach out for help. The first way is by sending a Slack message to all of your instructors. The second way is to use a Token during Token Time.

Each student has **2 tokens per day** during the first two days of Project Week and each token gives you up to 15 minutes with an instructor. You want to have a specific goal in mind when getting in line during Token Time and you want to have spent time working on that goal individually before meeting with us.

Some examples of great uses for a token:
* Assistance with a bug you've been stuck on
* Advice on refactoring a particular section of code
* Help writing pseudo code for a section you're not sure how to get started on
* Showing off a part of the project that you're proud of completing.

You will also have a daily stand-up with your group and two quick instructor check-ins.