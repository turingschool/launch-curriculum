---
layout: page
title: Data Relationships Lab
---

## Lab Objectives
* Practice drawing ERDs
* Add to your library database, create a many-to-many relationship between Books and Authors

We are going to continue building on our Library database by adding a many-to-many relationship between books and authors. We're going to make this relationship many-to-many so that we can store books such as Zombies Vs. Unicorns that have many authors. And also have authors associated with many books.

<p align='center'>
  <img src='/assets/images/module2/Week2/book_many_authors.png'>
</p>


<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>For this lab we again use the library lab groups of 3/4 established during the intro to databases lesson. This will let folks build off of the databases they already created.

Some students may already have a one to many relationship between books and authors, hopefully this will lead to good discussions about how it's harder to change your database structure, and thinking first is very good. Would be great to have a groups that had to drop their old author column share what they did! --></p>
</aside>

## Practice
### Drawing Your Own Data Relationships

Work with your group to draw three ERDs for data relationships we haven't yet talked about. Include one one-to-one relationship, one one-to-many relationship, and one many-to-many relationship. Feel free to look back at the thread from today's warm-up for examples of relationships!

Then draw what the tables will look like for the many-to-many relationship between books and authors. Include both the table name and fields for each table.

Once you're done, send a screenshot or picture of what you came up with to the thread in slack. Then move on to the next section of the lab!

I recommend using a digital tool such as [https://app.diagrams.net/](https://app.diagrams.net/) for easy screen sharing.

### Add to your library database

It's time to implement your books and authors many-to-many relationship! Use PG admin and the SQL commands you learned in the Intro to Databases Lesson.

If you already created a one-to-many relationship between books and authors, you may need to modify some of your tables to achieve the database design you just drew. Try googling to learn the SQL commands you need, and reach out to your instructor for extra support. 

To verify your tables look as expected, you can use the awesome `Generate ERD` tool in PGAdmin. Right-click on your database name, and then click `Generate ERD`.

<p align='center'>
  <img src='/assets/images/module2/Week2/pgadmin_makeERD.png'>
</p>

### Stretch Goals

Work on creating the tables for the one-to-one and one-to-many relationships you drew earlier. 

#### Exit Ticket!
In slack, post a screenshot of the Generated ERG from PGAdmin for the books and authors many-to-many relationship.
