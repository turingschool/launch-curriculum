---
layout: page
title: Data Relationships
---

There are many ways that objects can relate to each other.  There can be a *one to one* relationship as in a person and their social security number, or a *one to many* relationship as in a customer and their orders, or even a *many to many* relationship is in songs and playlists.

## Learning Goals
* Solidify understanding of Primary Keys and Foreign Keys
* Visualize One-to-One, One-to-Many, and Many-to-Many relationships
* Implement a Many-to-Many relationship using a join table
* Practice describing different relationships

## Warmup

* Brainstorm pairs of database tables that might have a relationship between them. For example, songs and artists or people and favorite food. Don't worry about what type of relationship the tables might have or how to build that relationship in SQL!

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>this is a great time to do a slack waterfall to have students share what they came up with for relationships. They will be looking back to these in the lab</p>
</aside>

## Review of Databases and One-To-Many Relationships

Before we jump into the many types of relationships data can have, let's take a step back to review what a database _is_.  At the highest level, a database is a location where we can store information and allow that information to persist in our application.  For today's example, we have a database that is storing song information.  More specifically, we have a `database` that has a songs `table` and that table has columns that store each song's `attributes`; we could visualize this configuration like this:

<p align='center'>
  <img src='/assets/images/module2/Week2/1_to_many_db_image_1.png'>
</p>

In our database, we have a table that looks similar to an excel sheet where each row of this table is one song entry or record in our database. So far, this is a fairly simple database, holding on to only a few attributes.  Without much difficulty, we could update our database to hold additional song attributes by adding additional columns to our songs table.

But, what if we want to keep track of the artist that wrote each song?  We _could_ add a column to our database called `artist` and store the artist directly on a song, like this:

<p align='center'>
  <img src='/assets/images/module2/Week2/1_to_many_db_image_2.png'>
</p>

Seems like it works, right? Well... not exactly.  What if we wanted to also store information about specific artists, like their hometown or years active.  If we imagine what that might look like, we would see more columns on our `songs` table and many of those columns would be storing the exact same information - every Prince song would be storing 'Minneapolis' and '1975-2016':

<p align='center'>
  <img src='/assets/images/module2/Week2/1_to_many_db_image_3.png'>
</p>

This is very repetitive!

## Normalizing our Database

In order to cut down on redundant data on a specific table in our database, we can rely on **normalization**.  Normalization is a process by which we break down tables in our database so that each table represents only to one resource.  In today's example, when we look at our songs table, we are storing information about songs and artists. Really, we are trying to store information about two resources on one table - let's fix that.

Draw how you would normalize this database, so that songs and artists each have their own table. I highly recommend you look back at the Intro to Databases lesson to see how we created tables for customers and orders!

Be prepared to share your tables and answer the following questions.

* How are you able to still know which artist wrote which song?
* What primary key do you have?
* What foreign key do you have?

<details><summary>Normalized Songs and Artists Database</summary><br/>

When we normalize our database, we need to include some sort of marker for ourselves to know how to relate the tables to one another.  We do this with **primary keys** and **foreign keys**.  As our database exists now, every record has an `id`.  We can use these ids to relate information in one table, to information in the other (or give each of our songs an artist).  For each song in our database, we will add an attribute `artist_id` that will hold the `id` of the artist that song belongs to.

<p align='center'>
  <img src='/assets/images/module2/Week2/1_to_many_db_image_5.png'>
</p>

This `artist_id` is the **foreign key** on our songs table that relates a song back to the `id` of an artist on the artists table - also referred to as the **primary key** of the artists table.

</details>
</br>
As we build out our databases, we will want them to be as normalized as possible - only storing information from a single resource per table.

## Describing Data Relationships

Learning the language to describe database relationships can feel tedious, but having consistency with how we describe these relationships will help us communicate our database design to other developers now, in interviews, and on the job.

### One-to-Many
We describe this relationship between songs and artists as a **One to Many Relationship**, where each **song belongs to one artist** and one **artist has many songs**. Every database relationship has two sides and it is important to describe both sides of the relationship.

<p align='center'>
  <img src='/assets/images/module2/Week2/one_to_many_ERD.png'>
</p>

Whenever we have a **one to many** relationship, Resource A will always **belong to** Resource B, with the use of a **foreign key**; and, Resource B **has many** Resource A.

### One-to-One

A one-to-one relationship is the least common, it is where a record in one table is associated with exactly one record in another table.
<p align='center'>
  <img src='/assets/images/module2/Week2/one_to_one_ERD.png'>
</p>

### Many-to-Many
In a many-to-many relationship, both sides of the relationship reference multiple records.

<p align='center'>
  <img src='/assets/images/module2/Week2/many_to_many_ERD.png'>
</p>

## Implementing a Many-To-Many Relationship

<p align='center'>
  <img src='/assets/images/module2/Week2/many_to_many_bad.png'>
</p>

So far, we have used foreign keys to create relationships. The problem is that a foreign key can identify a single record from another table, but in a many-to-many both sides of the relationship need to reference multiple records. This means that we’re going to need more than just foreign keys.

One solution that might come to mind is, instead of our foreign keys storing a single id, we could store an array of ids. This is a good guess, but in a database there is no concept of an array. The reason is that, for the database to be efficient, it needs to know the exact size of the datatype it is storing. For example, our DB knows exactly how much space an integer takes up (8 bytes).

But what about strings? They can vary in length. The Database handles strings by giving them a maximum length, which is 255 bytes by default. If we tried to do the same thing with arrays, we would be limiting how many relationships we could create, which is a bigger problem than limiting how long a string can be.

The key takeaway here is a database can’t store an array of ids, so we’re going to need something else.


## Join Tables
Since we can’t achieve the many-to-many relationship with our given tables, we are going to add a third table to manage this relationship. This is called a join table.

<p align='center'>
  <img src='/assets/images/module2/Week2/many_to_many_good.png'>
</p>

Note: Join tables are just ordinary tables with a unique purpose. Each row of our join table relates a row of one table to a row of another table.

Turn and Talk: Which songs are associated with which playlists?

The join table’s name doesn’t really matter. We could call it Song_Playlist or Playlist_Song, it’s really up to you as the developer. Other naming structures for join tables I've seen are playlist_song_mapping, playlist_songs, or playlist_to_song_map. You could even choose to name it happy_fun_times but that would be confusing.

When you’re thinking about what to call this table, think about how you’re likely to use it most within your application. Since our app’s goal will be to show a playlist of songs more often, we’re going to call it playlist_song.

Note: Don’t confuse join table with a sql joins operation. They are two different things.


## ERD Practice

These diagrams we've been looking at to visualize data relationships are called Entity Relationship Diagrams, ERDs for short. Let's take a look at a larger ERD.

<p align='center'>
  <img src='/assets/images/module2/Week2/car_accident_ERD.png'>
</p>

Annotate this diagram as much as you can! What type of relationships do you see? Do you see any primary or foreign keys?

Then, write sentences to describe these relationships.

<details><summary>Annotated Car Accident ERD</summary><br/>

<p align='center'>
  <img src='/assets/images/module2/Week2/car_accident_ERD_annotated.png'>
</p>
</details>
</br>

This ERD is from the [Visual Paradigm](https://circle.visual-paradigm.com/category/system-design-development/entity-relationship-diagram/) website. They have many more examples if you want additional practice!

There are more nuanced symbols you can use to demonstrate table relationships, such as the open circle. [Here](https://vertabelo.com/blog/crow-s-foot-notation/) is a blog post if you want to learn more.


## Checks for Understanding

1. How is a one-to-many relationship set up in a database?
1. What does a join table do? Why would we need one?
1. How would you describe the one to many relationship between people and toothbrushes?
1. How would you describe the one to one relationship between people and toothbrushes?
1. How would you describe the many to many relationship between people and toothbrushes?
