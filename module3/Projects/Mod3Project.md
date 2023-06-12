---
layout: page
title: Mod3 Project
---

# Message Logger - The Final Iteration!

## Learning Goals
- Demonstrate:
    * Version Control, including branches and pull requests.
    * MVC code organization within .NET
    * Feature testing of a .NET application

- Explore:
    * Usability and creating a quality user experience
    * Planning out the implementation of a feature
    * Using TDD to add additional features! (For any new feature that you create, try writing the tests first, and then creating the code that makes those tests pass!)

## Project Description
For this project, you will build the final iteration of the Message Logger we created in Mod1 and built on in Mod2. In Mod2 you added a database, and now you're going to add a frontend! You are encouraged to bring in code you wrote in the Mod2 project, especially for calculating message statistics.

This project will give you the opportunity to showcase all of the concepts we have learned this Mod.  There might be skills that we covered all the way back in week 1, so don't forget to use those earlier lessons and labs as a resource!

You will also be asked to create wireframes for the first two iterations. Here are some examples of what a wireframe might look like. Feel free to use an online tool or pen and paper to create your wireframes.

![Example Wireframe 1](/assets/images/module3/Week6/SampleWireframe1.png)
![Example Wireframe 2](/assets/images/module3/Week6/SampleWireframe2.png)

**Project Setup**
To get started on this project:

1. **fork and clone** this [starter repo](https://github.com/turingschool-examples/MvcMessageLogger)
    * The starter repo includes classes similar to the ones you wrote in your Mod2 project. The context and database connection are set up for you, connecting to a new database called `MvcMessageLogger`.
2. The test project has not been setup because the expectation is that you will entirely change the UI.
3. Use the existing migration to create your database and run the application to make sure the project is working.

When you have completed the Project Setup, send a link to your cloned repository to all your instructors.

### Iteration 1 - Creating and Viewing Users

This iteration includes the following features:
1. A way to see all users
1. A way to add a new user

A feature is not considered complete until it is tested, so make sure to test both of these features!

Before writing code, there are two planning steps you need to complete and include here in the README.
1. Draw a request/response diagram that includes all requests required to complete this iteration
1. Draw a rough wireframe of the UI page(s) required to complete this iteration

Add screenshots of your planning images in your project README, where it says:
#### REPLACE THIS HEADER WITH YOUR ITERATION 1 REQUEST/RESPONSE IMAGE
#### REPLACE THIS HEADER WITH YOUR ITERATION 1 WIREFRAME

You will want to still edit your README in Visual Studio NOT Github to avoid merge conflicts.

Once you've finished planning, check out a branch, and get started on the implementation.

When you are finished with iteration 1, create a pull request and schedule time with a cohort-mate for some code review.  During the code review, make comments on the pull request indicating changes that you will make based on your review!

### Iteration 2 - "Login" and Create Messages

Now that you have a way to view and add users, the next step is to add a way for users to add messages!  

This iteration includes the following features:
1. A button next to each user called "Login" that takes the user to a details page for that user
1. From the user details page, a user can see all of their messages
1. From the user details page, a user can add a new message

A feature is not considered complete until it is tested, so make sure to test all three of these features!

Before writing code, there are two planning steps you need to complete and include here in the README.
1. Draw a request/response diagram that includes all requests required to complete this iteration
1. Draw a rough wireframe of the UI page(s) required to complete this iteration

Add screenshots of your planning images in your project README, where it says:
#### REPLACE THIS HEADER WITH YOUR ITERATION 2 REQUEST/RESPONSE IMAGE
#### REPLACE THIS HEADER WITH YOUR ITERATION 2 WIREFRAME

Once you've finished planning, check out a branch, and get started on the implementation.

When you are finished with iteration 2, create a pull request and schedule time with a cohort-mate for some code review.  During the code review, make comments on the pull request indicating changes that you will make based on your review!

### Iteration 3 - Displaying Statistics

As in the Mod2 project, we are saving more than one session's worth of messages and can use some fun LINQ methods to analyze our data and display it to our users.

This iteration includes the following features:
* A separate page that displays statistics and some way to visit this page from any other page in your application
* On the statistics page, display the following information (this is the same as the statistics from Mod 2)
    * How many messages each user has written
    * Users ordered by number of messages created (most to least)
    * Most commonly used word for messages (by user and overall)
    * The hour with the most messages
    * Brainstorm your own interesting statistic(s)!

For this iteration, it's up to you what type of planning you want to do before diving into code. You will want to consider the following, how do you want users to navigate to the statistics page?

When you are finished with iteration 3, create a pull request and schedule time with a cohort-mate for some code review.

### 🌶️Iteration 4 - Edit and Delete

If you have finished the first three iterations, meaning that all features are complete, tested, and you're happy the user experience, you can move on to this spicy stretch goal. 

This iteration includes the following features:
* The ability to Edit a user's info
* The ability to Delete a user and their corresponding messages
* The ability to Edit a message
* The ability to Delete a message

For this iteration, it's up to you what type of planning you want to do before diving into code.

When you are finished with iteration 3, create a pull request and schedule time with a cohort-mate or your instructor for some code review.

## Version Control Expectations
In order to demonstrate your proficiency with version control, you will be using commits, branches and pull requests during this project.

You must gather feedback from cohort-mates prior to merging any code into your `main` branch.

You must provide feedback on at least one other student's pull request!

## Usability Expectations
For your UI, the expectation is that every page in your application can be navigated to through your UI. This means that the user should never have to type in a URL or use the back button.

## Project Presentation

You will present your project to other members of the cohort.  Keep presentations to 10 minutes. Since we are all working on the same application, we would like you to address the following questions/topics in your presentation:
1. How was your experience writing request/response diagrams and wireframes for the features?
1. How closely did your finished application match your initial wireframes? (There is no right answer here, very normal to make changes to your original plan while building)
1. What changes did you make based on peer or instructor feedback?
