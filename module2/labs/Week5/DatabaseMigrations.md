---
layout: page
title: Database Migrations Lab
---

## Lab Objectives
* Practice using database migrations to add a table
* Practice using database migrations to add a column
* Practice creating seed data

In today's lab, we're going to add to our library application and database. Before beginning make sure you have the library application open.

## Practice

### Adding a Table
Your first goal is to add a new table called `events`, this table will not have an association with the `books` or `patrons` tables. You get to decide what fields make sense for your events table and what type of data your database columns should store. Feel free to use the events for the Denver library for inspiration: https://www.denverlibrary.org/events/upcoming

### Adding a Column
Your next goal is to update your `books` table to also keep track of number of pages.

### Creating Seed Data
Your final goal is to create some seed data for your new events table. Once you have run your function to seed some data, use pgAdmin to ensure that you now have some events in your database!

If you have extra time, try creating seed data for books and patrons.

### Exit Ticket
On the thread in Slack, share a screenshot of the entity diagram for your library_orm database after adding your new table and column.

<p align='center'>
  <img src='/assets/images/module2/Week2/pgadmin_makeERD.png'>
</p>