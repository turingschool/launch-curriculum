---
layout: page
title: Database Migrations Lab
---

## Lab Objectives
* Practice using database migrations to add a table
* Practice using database migrations to add a column
* Practice creating seed data

In today's lab, we're going to add to our library application and database. So that we are all starting from the same place, clone down [this repo](https://github.com/turingschool-examples/ORMLibraryStarter) and check out the `IntroToORMFinished` branch

## Practice

### Adding a Table
Your first goal is to add a new table called `events`, this table will not have an association with the `books` or `patrons` tables. You get to decide what fields make sense for your events table and what type of data your database columns should store. Feel free to use the events for the Denver library for inspiration: https://www.denverlibrary.org/events/upcoming

### Adding a Column
Your next goal is to update your `books` table to also keep track of number of pages.

### Creating Seed Data
Your final goal is to create some seed data for your new events table. Once you have run your function to seed some data, use pgAdmin to ensure that you now have some events in your database!

Once you've finished creating seed data for events, add seed data for books and patrons.

### Exit Ticket
On the thread in Slack, share a screenshot of the entity diagram for your library_orm database after adding your new table and column.

<p align='center'>
  <img src='/assets/images/module2/Week2/pgadmin_makeERD.png'>
</p>

🌶️ Spicy Extra Challenge: 

If you finish today's lab and feel comfortable with today's topics, here are two topics that are not crucial, but are useful to know and will help you deepen your understanding of Entity Framework.

* [Default Values](https://learn.microsoft.com/en-us/ef/core/modeling/generated-properties?tabs=data-annotations#default-values)
* [Logging](https://learn.microsoft.com/en-us/ef/core/logging-events-diagnostics/simple-logging)