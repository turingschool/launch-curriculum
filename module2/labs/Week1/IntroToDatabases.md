---
layout: page
title: Intro to Databases Lab
---

## Lab Objectives
* Create a Database for a Library

In our Mod2 Labs, we are going to be building and working with a Database that could be used in a library.  This database would help librarians and library patrons better understand what books the library has, which are available, and which are rented out.

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>This lab includes group and individual work.  Start with groups of 3/4 students for the outlining section, then let them work individually to create the database tables.  As an 'exit ticket', we will ask everyone for the SQL create statements they used - the key piece to verify is how students used primary and foreign keys.</p>
</aside>

## Practice
### Datatypes

One thing you may have noticed in the lesson is that we often see datatypes in PostgreSQL that are not familiar to us (not the same as the c# datatypes).  

> With a group, research and define the following PostgreSQL datatypes.  You can use [this cheatsheet](https://simplecode.io/blog/postgres-data-types-cheat-sheet/) to get you started!
> * serial
> * varchar
> * text
> * timestamp   
> * boolean  
>  
> Be ready to share out!

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>The most important datatypes for students to be familiar with are serial and varchar.  We want them to know that serial will auto-increment, and that varchar is given a character limitation.</p>
</aside>

### Outlining Database Tables

In small groups, discuss what data you might want to store for a library.  What tables would you need in a database?  What columns would those tables have?  How are those tables related?

Here are some questions to help get you started:
* What kinds of things exist in a library?
* Would a library ever have multiple copies of the same book?
* How will we know if a book has been checked out?

You should come up with at least 2 tables.

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>As groups are working through the brainstorming process, visit each breakout room and offer guidance.  We don't expect students to be masters at determining database structure, so it's ok to give a little nudge in the right direction.</p>
</aside>

### Create the Database and Tables

When your group is happy with the outline of the database, use PgAdmin to create it!

Following the same process we used in class:
1. Create the database.  You can call it `Library`
2. Create the tables that you outlined in your group.  If you need help with naming, reach out to an instructor!

#### Exit Ticket!
You will not need to create databases from scratch very often on the job; so it's not something that we expect you to become experts at!  We do want to make sure that you have created your database successfully, so when finished, send your instructors your current table configuration by doing the following for each table you created:

In PgAdmin:
1. Select your Database
2. Go to the Query Tool
3. Create a `SELECT * ` query
4. Run the query
5. Send a screenshot (including the output) to your instructors!

![](/assets/images/module2/Week1/ExitTicket.png)





