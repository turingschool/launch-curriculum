---
layout: page
title: Creating and Reading Related Resources Lab
---

## Setup

For today's lab, we are going to continue building the Record Collection.

**Objective**
* Add Songs to our application
* Use a form to create songs for each album

* Open your Record Collection project.
    * Run the project, and make sure you have the Record#Index, #Show, #New, and #Create actions working.
* If you have been absent or can't find your project, follow these steps:
    * Fork and Clone it from this [Starter Repository](https://github.com/turingschool-examples/LaunchFeatureLabStarter_RecordCollection).
    * Build the project (let your instructor know if you receive any errors!).
        * Open the database in pgAdmin, and create some records by running the following script (feel free to update the albums and artists to your favorites!).
    ```sql
    INSERT INTO albums (title, artist, release_date)
    VALUES
    ('Stop Making Sense', 'Talking Heads', '1984-06-24'),
    ('Banana Winds', 'Jimmy Buffet', '1996-12-06')
    ```
    * Check out the branch _____________________ TODO need a branch for after REST & Create Single Resource lessons___________

## Create the Song Model and Table

1. With a partner,
    * determine how a song relates to an album
    * List the changes that need to be made to your application in order to add a song table to our database (using migrations!)
1. Individually, implement the song model and table into your application
    * Use your partner as a resource if you get stuck
    * If you are both stuck, reach out to an instructor!
1. When finishied, check in with an instructor **before** moving on

## Write Tests for Songs#New and Songs#Create Action

1. With a partner,
    * Create some user stories to describe how a song will be created in your application
    * Outline (pseudo-code) the tests that will drive the implementation of the user stories
1. Individually, create the tests that you outlined with your partner.
    * Use your partner as a resource if you get stuck
    * If you are both stuck, reach out to an instructor!
1. When finished, check in with an instructor **before** moving on

## 🌶️Update the application to include Artist as a Resource🌶️

To better represent our Record Collection, it would be best for an artist to be it's own resource.  So, we want to update our application to have an Artist model, and update our database to include an Artist table.  An artist will have many records, and a record could have many artists.

For a refresher on this type of relationship, review the [Many to Many Lesson](/module2/lessons/Week5/ManyToManyWithAnORM) from Mod2.

### Update the Database
1. Update your Models to include `Artist`
    * review the existing models - they may need to be updated for this change!
1. Create a migration to add the artists table and artistrecords table to your application
    * Check in with an instructor **before** moving on.
1. When approved by an instructor, update your database by running the migration.

### Update the Web Application
1. List the RESTful routes for the Artist resource.
    * Include the path, method, and controller#action for each.
    * Check in with an instructor **before** moving on.
1. When your routes have been approved, create the controller actions and views for:
    * Index
    * New
    * Create
