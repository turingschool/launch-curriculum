---
layout: page
title: Creating a Single Resource Lab
---

## Setup

For today's lab, you're going to continue building on your Record Collection application.

**Objective**: Add a form to create a new album and thoroughly test this new feature.

1. Open your Record Collection project. 
    * If you have been absent or can't find it, follow these steps:
        * Fork and Clone it from this [Starter Repository](https://github.com/turingschool-examples/LaunchFeatureLabStarter_RecordCollection).
        * Create the database by running `update-database` from the Package Manager Console.
        * Open the database in pgAdmin, and create some records by running the following script (feel free to update the albums and artists to your favorites!).
        ```sql
        INSERT INTO albums (title, artist, release_date)
        VALUES
        ('Stop Making Sense', 'Talking Heads', '1984-06-24'),
        ('Banana Winds', 'Jimmy Buffet', '1996-12-06')
        ```
1. Check out the branch _____________________ TODO need a branch for after REST lesson___________
1. Build the project, and let an instructor know if you receive any errors.

## Diagramming

Before diving into code, we're going to create a plan for what we want to build. 

> With your partner: Take 15 minutes to draw the following two diagrams.

1. Draw a UI wireframe of what you want your form to look like for adding a new album. What input fields will you have?

1. Draw a request/response diagram, similar to the one we drew as a class during the lesson, for your add album form.

## Building

1. Create `/albums/new`
    * Start by building a form for creating an album and making it so that when a user visits `/albums/new` they are directed to your form.
1. Test `/albums/new`
1. Allow users to submit your form and create an album
1. Test submitting the form