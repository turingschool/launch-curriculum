---
layout: page
title: Calling An API Mini Project
---

## Learning Goals
* Practice the skill of calling an API from a .NET application
* Learn how to make a PUT and DELETE request to an API
* Gain experience navigating vague directions for how to approach a problem

## Overview

For this mini project, imagine that you are working on a team with other developers. One of your teammates is responsible for building an API for keeping track of someone's favorite gifs. Your job is to build a .NET MVC application to call your teammate's API and allow for user interaction.

For this project you will be working in pairs and utilizing driver/navigator pair programming.

A new tool you'll run into with this project is [Swagger](https://swagger.io/)! Let's take a detour to [this](../lessons/Week4/Swagger) mini lesson on Swagger.

## The API

[This](https://github.com/turingschool-examples/GifTracker) is the API repo your teammate is working on. Clone down this repo and checkout the branch `GET-all-gifs`. When you start up the application you should be directed to a Swagger page.

Respond to the checkpoint your instructor will share in Slack when you see the Swagger page.

## The User Experience - Your Job!

calls the API endpoints implemented in GifTracker, so that users of your application can: get all gifs, create a gif...

The pair of you are responsible for creating a separate application that calls the API endpoints implemented in GifTracker, so that the users of your application can: get all gifs, create a gif, update a gif, and delete a gif. Your application should not be directly interacting with a database. How you build the UI for these features is up to you! You're welcome to either use the tools we have covered in class or dive more into javascript.

You will be working in four iterations, it's recommended that you start by sketching a mockup of the UI for each phase before moving on to implementation. 

As is best practice, check out a new branch for each iteration. Once you have completed the iteration, make a PR and merge your changes in to main.

Because we are simulating working with a teammate, after you finish each iteration you will check out a new branch of the API to simulate your teammate making additional changes.

✅ Once you've created your repo, one partner should send a link to all instructors. After each iteration, send a link to your PR to all instructors so they can follow your progress.

### Iteration 1 - Get all Gifs
* You should already have checked out the API branch `GET-all-gifs`.
* Implement a way for the user to see all gifs currently in the database.

### Iteration 2 - Add a new Gif
* Check out the API branch `POST-a-new-gif`.
* Implement a way for the user to add a new Gif to the database (Yesterday's lab is a great reference!)
* Note that there is a new migration! Take a look at what changed there and update your database. Also, take a look at what's in the schemas section in Swagger.
* Is there anything that you wish the developer working on the API had done differently? If you have any feedback you would communicate to your teammate, but that in your PR comment for this iteration.

### Iteration 3 - Update a Gif
* Check out the API branch `PUT-update-a-gif`.
* Implement a way for the user to update an existing gif.

### Iteration 4 - Delete a Gif
* Check out the API branch `DELETE-a-gif`.
* Implement a way for the user to delete a gif.

<aside class="instructor-notes" markdown="1">
    <p><strong>Instructor Note</strong><br>
    Since this is a day and a half project, some students may need some more stretch goals. One potential stretch goal is adding a search where the student's application calls the Giphy API to retrieve gifs based on the search. And then somehow the user can choose which to add to the database. </p>
</aside>