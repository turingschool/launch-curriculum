---
layout: page
title: Reading Related Resources Lab
---

## Setup

For today's lab, we are going to continue building the Record Collection.

**Objective**  
* Add Songs to our application
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

**With a partner**  
1. determine how a song relates to an album
1. List the changes that need to be made to your application in order to add a song table to our database (using migrations!)
1. Implement the song model and table into your application
1. When finishied, check in with an instructor **before** moving on

## Write Tests for Songs#Index Action

**With a partner**  
1. Create some user stories to describe how a song will be created in your application
1. Outline (pseudo-code) the tests that will drive the implementation of the user stories
1. Create the tests that you outlined with your partner.
1. When finished, check in with an instructor **before** moving on

## Implement the Songs#Index Action and Views

**Individually**  
1. Create the Index action that will pull all songs for an album.
1. Create the View that will display all songs for an album.
1. When finished check in with an instructor!
