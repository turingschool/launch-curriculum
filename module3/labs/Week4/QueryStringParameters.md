---
layout: page
title: Query String Parameters Lab
---

### Background
The luxurious mountain ski hotel company *Summit Slope Retreats* has contracted a team of developers to build an app that will allow customers to view their many incredible hotels.

You've just joined the team working on this project, and today's your first day!

The team has already started building the application. Start by cloning [this](https://github.com/turingschool-examples/MountainHotels) repo.

### Task 1: Getting The App Up and Running
Your first task is to get the application up and running and see at least two test properties. This task is a bit more tricky than it might originally seem. It's not as easy as just pressing run! Once you have the app up and running, move on to Task 2, your instructor will call everyone back together shortly to go over Task 1.

![Hotels Index Page](/assets/images/module3/Week4/HotelsIndexPage.png)

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>To get the app up and running students will need to 1. run Update-Database in the package manager console. 2. Run some SQL in pgAdmin to seed data or use the create form to seed hotels. </p>
</aside>

### Task 2: Location Filtering
You've got the app up and running and it's time to add your first feature. Your client, Summer Slope Retreats, would like their customers to be able to filter by location. Add links to filter by any of the locations where they currently have a hotel. Once you have filtering working, move on to Task 3.

### Task 3: Year Built
Customers are loving the new filtering functionality! But they want to know more about their hotel options. You learn from your contact at Summer Slope Retreats that some customers prefer old lodges while others prefer the newest accommodations. Your next task is to display *Year Built* for all hotels. **Before writing any code**, brainstorm with your partner what changes you will need to make in the Model, View, and Controller. Send a screenshot of your plan for what changes you will make in a Slack message with both teammates and today's instructor.

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Some stretch goals could be: adding some way to filter by minimum year built.
A very stretch goal could be turning the search into a full on form that sends a GET request to the filtering endpoint when submitted. </p>
</aside>
