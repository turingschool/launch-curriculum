---
layout: page
title: Feature Testing
---

## Lab Objectives
* Practice Creating a Feature Test project
* Practice creating the test environment - server and database!
* Practice writing feature tests

## Setup the Starter Project

1. Fork and Clone this [Starter Repository](https://github.com/turingschool-examples/LaunchFeatureLabStarter_RecordCollection).
2. Build the project, and let an instructor know if you receive any errors.
3. Create the database by running `update-database` from the Package Manager Console.
4. Open the database in pgAdmin, and create some records by running the following script (feel free to update the albums and artists to your favorites!).
    ```sql
    INSERT INTO albums (title, artist, release_date)
    VALUES
    ('Stop Making Sense', 'Talking Heads', '1984-06-24'),
    ('Banana Winds', 'Jimmy Buffet', '1996-12-06')
    ```
5. Review the existing project and identify all of the endpoints (there are three!)
6. Run the application, and visit each of the endpoints to see what is on each page.

## Create Tests for the Home page and Albums Index

1. Create a test project, following the steps we used during the lesson.
2. Write a test for the following user story:
    ```txt
    As a user
    When I visit "/"
    Then I see "Welcome to My Record Collection"
    And I see "All Albums"
    ```
3. Write a test for the following user story:
    ```txt
    As a user
    When I visit "/albums"
    Then I see all albums that exist in the database
        For each album, I see the album title, artist and release date
    ```